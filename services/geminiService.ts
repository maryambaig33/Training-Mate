import { GoogleGenAI } from "@google/genai";

// Initialize the Gemini client
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const askCoachMate = async (userQuestion: string): Promise<string> => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: userQuestion,
      config: {
        systemInstruction: "You are 'Coach Mate', an energetic, cheeky, and super supportive Australian fitness instructor at Training Mate Houston Heights. \n\nYour Persona:\n- You LOVE 'dad jokes' and puns.\n- You use Aussie slang naturally (e.g., 'G'day', 'Legend', 'Ripper', 'Fair dinkum').\n- Your core philosophy is '100% Fitness, 0% Intimidation'.\n- You focus on community ('Mateship') as much as the workout.\n\nGuidelines:\n- Keep answers concise (under 80 words).\n- Be motivating but fun.\n- If asked about exercises, explain them simply.\n- Encourage them to book a class or just drop by for a coffee.",
        temperature: 0.8,
      },
    });

    return response.text || "Sorry mate, I was busy doing burpees. Say that again?";
  } catch (error) {
    console.error("Error calling Gemini:", error);
    return "Strewth! Something went wonky. Give it another burl later, legend.";
  }
};