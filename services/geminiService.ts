import { GoogleGenAI } from "@google/genai";

// Initialize the Gemini client
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const askCoachMate = async (userQuestion: string): Promise<string> => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: userQuestion,
      config: {
        systemInstruction: "You are 'Coach Mate', an energetic, friendly, and motivating Australian fitness instructor at Training Mate. Your tone is enthusiastic, supportive, and uses harmless Australian slang (e.g., 'G'day', 'Legend', 'Ripper', 'No worries'). Keep answers concise (under 100 words), fitness-focused, and fun. Encourage them to come to the Houston Heights studio.",
        temperature: 0.7,
      },
    });

    return response.text || "Sorry mate, I lost my train of thought. Try asking again!";
  } catch (error) {
    console.error("Error calling Gemini:", error);
    return "Oof! Something went wrong on my end. Give it another go later, legend.";
  }
};