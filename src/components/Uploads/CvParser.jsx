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
            
            // Try to extract JSON if it was wrapped in markdown
            const cleanJsonString = textResponse.replace(/^```json\s*/i, '').replace(/\s*```$/i, '').trim();
            return JSON.parse(cleanJsonString);

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
            toast.info("Extracting insights with Gemini AI...", { autoClose: 3000 });
            
            const parsedData = await extractDataWithGemini(extractedText);
            
            if (parsedData) {
                let count = 0;
                
                if (parsedData.workExp && parsedData.workExp.length > 0) {
                    for (const entry of parsedData.workExp) {
                        await setWorkExp(data.user, entry);
                        count++;
                    }
                }
                if (parsedData.education && parsedData.education.length > 0) {
                    for (const entry of parsedData.education) {
                        await setEducation(data.user, entry);
                        count++;
                    }
                }
                if (parsedData.projects && parsedData.projects.length > 0) {
                    for (const entry of parsedData.projects) {
                        await setProjects(data.user, entry);
                        count++;
                    }
                }
                if (parsedData.languages && parsedData.languages.length > 0) {
                    for (const entry of parsedData.languages) {
                        await setLanguages(data.user, entry);
                        count++;
                    }
                }
                if (parsedData.courses && parsedData.courses.length > 0) {
                    for (const entry of parsedData.courses) {
                        await setCourses(data.user, entry);
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
