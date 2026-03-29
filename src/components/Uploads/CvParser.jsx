import React, { useState } from 'react';
import * as pdfjsLib from 'pdfjs-dist';

import { ParserContainer, ParseTitle, ParseSubtitle, FileUploadInput, UploadButton, LoadingText } from '../../styles/ParserElements';
import { setWorkExp, setEducation, setProjects, setLanguages, setCourses } from '../../services/dataServices';
import { toast } from 'react-toastify';

// Configure Webpack worker explicitly to prevent compilation errors
pdfjsLib.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjsLib.version}/build/pdf.worker.min.mjs`;

function CvParser({ data, isOwner }) {
    const [isLoading, setIsLoading] = useState(false);
    
    if (!isOwner) return null;

    const extractDataWithGemini = async (base64Media, mimeType) => {
        const apiKey = process.env.REACT_APP_GEMINI_API_KEY;
        if (!apiKey) {
            toast.error("Gemini API Key is missing from .env!");
            return null;
        }

        const prompt = `
        You are an expert, highly-lenient CV parser and data translator. I am providing you with a raw PDF document of a user's CV/Resume, which might be in BULGARIAN, English, or another language, and may be poorly formatted or image-based.
        
        Analyze the PDF document visually, TRANSLATE IT TO ENGLISH if necessary, and extract EVERY possible piece of data into exactly the following JSON structure. 
        Even if the dates or details are vague (e.g., just years, or missing company names), MAKE EDUCATED GUESSES to fill the fields. 
        DO NOT return empty arrays unless you are 100% sure the document does not contain ANY hints of Jobs, Education, Projects, Languages, or Courses.
        
        If a field is missing, just write "".
        Do not return any Markdown wrapping or conversational text—just the raw JSON string.

        {
            "workExp": [
                { "from": "YYYY-MM", "to": "YYYY-MM", "occupation": "string", "company": "string", "description": "string" }
            ],
            "education": [
                { "from": "YYYY-MM", "to": "YYYY-MM", "institution": "string", "subject": "string", "description": "string" }
            ],
            "projects": [
                { "name": "string", "link": "string (or empty)", "description": "string" }
            ],
            "languages": [
                { "language": "string", "level": "string" }
            ],
            "courses": [
                { "from": "YYYY-MM", "to": "YYYY-MM", "institution": "string", "subject": "string", "description": "string" }
            ]
        }
        `;

        try {
            const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    contents: [{
                        parts: [
                            { text: prompt },
                            {
                                inline_data: {
                                    mime_type: mimeType,
                                    data: base64Media
                                }
                            }
                        ]
                    }]
                })
            });

            const rawData = await response.json();
            
            if (rawData.error) {
                 toast.error("Gemini API Error: " + rawData.error.message);
                 return null;
            }
            
            const textResponse = rawData.candidates[0].content.parts[0].text;
            console.log("Raw Gemini Text:", textResponse);
            
            const jsonMatch = textResponse.match(/\{[\s\S]*\}/);
            
            if (!jsonMatch) {
                toast.error("AI returned invalid structure.");
                return null;
            }
            
            const parsed = JSON.parse(jsonMatch[0]);
            console.log("Parsed Object:", parsed);
            return parsed;

        } catch (error) {
            console.error("Gemini API Error:", error);
            toast.error("Failed to parse CV with AI. Check console.");
            return null;
        }
    };

    const fileToBase64 = (file) => new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result.split(',')[1]);
        reader.onerror = (error) => reject(error);
    });

    const pdfToBase64Image = async (file) => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsArrayBuffer(file);
            reader.onload = async () => {
                try {
                    const pdf = await pdfjsLib.getDocument({ data: reader.result }).promise;
                    const page = await pdf.getPage(1);
                    const viewport = page.getViewport({ scale: 2.0 }); // High-resolution scale for AI readability
                    
                    const canvas = document.createElement('canvas');
                    const context = canvas.getContext('2d');
                    canvas.height = viewport.height;
                    canvas.width = viewport.width;
                    
                    await page.render({
                        canvasContext: context,
                        viewport: viewport
                    }).promise;
                    
                    const base64 = canvas.toDataURL('image/jpeg', 0.9).split(',')[1];
                    resolve(base64);
                } catch (err) {
                    reject(err);
                }
            };
            reader.onerror = reject;
        });
    };

    const handleFileUpload = async (event) => {
        const file = event.target.files[0];
        if (!file) return;

        setIsLoading(true);
        try {
            let base64Data = "";
            let resolvedMimeType = "";

            if (file.type === "application/pdf") {
                toast.info("Rendering PDF into high-res image...", { autoClose: 3000 });
                base64Data = await pdfToBase64Image(file);
                resolvedMimeType = "image/jpeg";
            } else if (file.type.startsWith("image/")) {
                toast.info("Processing image upload...", { autoClose: 3000 });
                base64Data = await fileToBase64(file);
                resolvedMimeType = file.type;
            } else {
                toast.error("Format not supported. Please upload a PDF, PNG, or JPG.");
                setIsLoading(false);
                return;
            }
            
            toast.info("Extracting insights with Gemini AI Vision...", { autoClose: 4000 });
            
            const rawParsedData = await extractDataWithGemini(base64Data, resolvedMimeType);
            
            if (rawParsedData) {
                let count = 0;
                
                // Extremely fault-tolerant payload flattener
                let flatData = typeof rawParsedData === 'object' ? rawParsedData : {};
                
                // If nested inside an outer object (e.g. { cv: { workExp: [] } })
                if (Object.keys(flatData).length === 1 && typeof Object.values(flatData)[0] === 'object') {
                    flatData = Object.values(flatData)[0];
                }

                // Recursively search for matching array blocks case-insensitively
                const findArray = (target) => {
                    for (let key in flatData) {
                        if (key.toLowerCase().includes(target.toLowerCase()) && Array.isArray(flatData[key])) {
                            return flatData[key];
                        }
                    }
                    return [];
                };

                const normalizeObject = (obj) => {
                    let sanitized = {};
                    for (let key in obj) {
                        sanitized[key.toLowerCase()] = obj[key];
                    }
                    return sanitized;
                };

                const wExp = findArray('work');
                const edu = findArray('education');
                const proj = findArray('project');
                const lang = findArray('language');
                const crs = findArray('course');

                console.log("Flattened Data Extract:", { wExp, edu, proj, lang, crs });

                if (wExp.length > 0) {
                    for (const entry of wExp) {
                        await setWorkExp(data.user, normalizeObject(entry));
                        count++;
                    }
                }
                if (edu.length > 0) {
                    for (const entry of edu) {
                        await setEducation(data.user, normalizeObject(entry));
                        count++;
                    }
                }
                if (proj.length > 0) {
                    for (const entry of proj) {
                        await setProjects(data.user, normalizeObject(entry));
                        count++;
                    }
                }
                if (lang.length > 0) {
                    for (const entry of lang) {
                        await setLanguages(data.user, normalizeObject(entry));
                        count++;
                    }
                }
                if (crs.length > 0) {
                    for (const entry of crs) {
                        await setCourses(data.user, normalizeObject(entry));
                        count++;
                    }
                }
                
                if (count > 0) {
                    toast.success("CV parsed and imported successfully! Refreshing...");
                    setTimeout(() => window.location.reload(), 2000);
                } else {
                    toast.warn("AI couldn't find structured data matching the CV sections.");
                }
            }
        } catch (error) {
            console.error("Failed to extract text from PDF", error);
            toast.error("Failed to read the PDF file.");
        } finally {
            setIsLoading(false);
            event.target.value = null;
        }
    };

    return (
        <ParserContainer className="print-hidden">
            <ParseTitle>Auto-Parse <span>Old CV</span></ParseTitle>
            <ParseSubtitle>Upload your existing PDF resume and let Gemini AI magically fill out all your digital sections in seconds.</ParseSubtitle>
            
            {isLoading ? (
                <LoadingText>Analyzing with Gemini AI...</LoadingText>
            ) : (
                <>
                    <FileUploadInput 
                        type="file" 
                        accept=".pdf, .png, .jpg, .jpeg" 
                        id="cv-upload" 
                        onChange={handleFileUpload}
                    />
                    <UploadButton htmlFor="cv-upload">
                        Upload CV (PDF/Image)
                    </UploadButton>
                </>
            )}
        </ParserContainer>
    );
}

export default CvParser;
