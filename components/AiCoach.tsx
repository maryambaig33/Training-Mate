import React, { useState, useRef, useEffect } from 'react';
import { askCoachMate } from '../services/geminiService';
import { GoogleGenAI } from '@google/genai'; // Importing just for type reference if needed, though used in service

const AiCoach: React.FC = () => {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const answerRef = useRef<HTMLDivElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!question.trim()) return;

    setIsLoading(true);
    setAnswer(null);

    const response = await askCoachMate(question);
    
    setAnswer(response);
    setIsLoading(false);
  };

  useEffect(() => {
    if (answer && answerRef.current) {
      answerRef.current.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  }, [answer]);

  return (
    <section id="ai-coach" className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-blue-50 rounded-2xl shadow-xl overflow-hidden border border-blue-100">
          <div className="p-8 md:p-12">
            <div className="flex items-center mb-6">
              <div className="h-16 w-16 rounded-full bg-mate-orange flex items-center justify-center text-3xl mr-4 shadow-lg shrink-0 text-white">
                🦘
              </div>
              <div>
                <h2 className="text-3xl font-extrabold text-mate-blue">Ask Coach Mate</h2>
                <p className="text-blue-600">Your 24/7 Aussie AI fitness companion.</p>
              </div>
            </div>
            
            <p className="text-gray-600 mb-8">
              Need a quick tip on form? Wondering what to eat post-workout? Or just need a hype man? 
              Ask me anything, legend!
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="question" className="sr-only">Your Question</label>
                <input
                  type="text"
                  id="question"
                  className="block w-full px-4 py-4 rounded-lg border-2 border-blue-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-mate-blue focus:border-transparent text-lg"
                  placeholder="e.g. How do I improve my squat form?"
                  value={question}
                  onChange={(e) => setQuestion(e.target.value)}
                  disabled={isLoading}
                />
              </div>
              <button
                type="submit"
                disabled={isLoading}
                className={`w-full flex items-center justify-center px-8 py-4 border border-transparent text-lg font-medium rounded-lg text-white bg-mate-blue hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-mate-blue transition-all ${
                  isLoading ? 'opacity-75 cursor-wait' : ''
                }`}
              >
                {isLoading ? (
                  <span className="flex items-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Thinking...
                  </span>
                ) : (
                  'Ask Mate'
                )}
              </button>
            </form>

            {answer && (
              <div ref={answerRef} className="mt-8 p-6 bg-white rounded-lg border-l-4 border-mate-orange shadow-sm animate-fade-in">
                 <h4 className="text-lg font-bold text-mate-blue mb-2">Coach Mate says:</h4>
                 <p className="text-gray-800 leading-relaxed whitespace-pre-wrap">{answer}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AiCoach;
