import React, { useState } from 'react';
import pdfToText from 'react-pdftotext';
import { ParserContainer, ParseTitle, ParseSubtitle, FileUploadInput, UploadButton, LoadingText } from '../../styles/ParserElements';
import { setWorkExp, setEducation, setProjects, setLanguages, setCourses } from '../../services/dataServices';
import { toast } from 'react-toastify';

function CvParser({ data, isOwner }) {
    const [isLoading, setIsLoading] = useState(false);
    
    if (!isOwner) return null;

    const extractDataWithGemini = async (text) => {
        const apiKey = process.env.REACT_APP_GEMINI_API_KEY;
        if (!apiKey) {
            toast.error("Gemini API Key is missing from .env!");
            return null;
        }

        const prompt = `
        You are an expert CV parser. I will provide you with raw text extracted from a user's uploaded CV/Resume. 
        Analyze the text and extract the data into exactly the following strict JSON structure. If a section is entirely missing from the text, return an empty array for it. Do not return any Markdown wrapping or conversational text—just the raw JSON string.

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
        
        Raw CV Text:
        ---
        ${text}
        ---
        `;

        try {
            const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    contents: [{
                        parts: [{ text: prompt }]
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

    const handleFileUpload = async (event) => {
        const file = event.target.files[0];
        if (!file) return;

        setIsLoading(true);
        try {
            const extractedText = await pdfToText(file);
            console.log("Raw PDF Extracted Text Length:", extractedText.length);
            
            if (!extractedText || extractedText.trim().length < 20) {
                 toast.warn("The PDF appears empty or is image-based. Text cannot be extracted.");
                 setIsLoading(false);
                 return;
            }

            toast.info("Extracting insights with Gemini AI...", { autoClose: 3000 });
            
            const rawParsedData = await extractDataWithGemini(extractedText);
            
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
                        accept=".pdf" 
                        id="cv-upload" 
                        onChange={handleFileUpload}
                    />
                    <UploadButton htmlFor="cv-upload">
                        Upload PDF CV
                    </UploadButton>
                </>
            )}
        </ParserContainer>
    );
}

export default CvParser;
