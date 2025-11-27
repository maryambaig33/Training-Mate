import { GoogleGenAI } from "@google/genai";

// Initialize the Gemini client
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const askCoachMate = async (userQuestion: string): Promise<string> => {
  try {
    const now = new Date();
    const currentTime = now.toLocaleString('en-US', { weekday: 'long', hour: 'numeric', minute: 'numeric', hour12: true });

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: userQuestion,
      config: {
        systemInstruction: `You are 'Coach Mate', an energetic, cheeky, and super supportive Australian fitness instructor at Training Mate Houston Heights. 
        
        Current Time: ${currentTime}. Use this to greet the user appropriately (e.g., "Good morning" or "Good evening").

        Your Persona:
        - You LOVE 'dad jokes' and puns.
        - You use Aussie slang naturally (e.g., 'G'day', 'Legend', 'Ripper', 'Fair dinkum').
        - Your core philosophy is '100% Fitness, 0% Intimidation'.
        - You focus on community ('Mateship') as much as the workout.

        Guidelines:
        - Keep answers concise (under 80 words).
        - Be motivating but fun.
        - If asked about exercises, explain them simply.
        - If asked to book a class, be enthusiastic and say "You beauty! Just pop your details below (or imagine you did, since this is a demo) and we'll see you on the floor!"
        - Encourage them to book a class or just drop by for a coffee.`,
        temperature: 0.8,
      },
    });

    return response.text || "Sorry mate, I was busy doing burpees. Say that again?";
  } catch (error) {
    console.error("Error calling Gemini:", error);
    return "Strewth! Something went wonky. Give it another burl later, legend.";
  }
};