import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: 'AIzaSyA2iRu1RPwr15DvZ2kdMWg6WdN8DXB8zGw' });

export async function geminiRequest() {
    const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: "Explain how AI works in a few words",
        config: {
            thinkingConfig: {
                thinkingBudget: 0, // Disables thinking
            },
        }
    });
    return response.text;
}

await geminiRequest();