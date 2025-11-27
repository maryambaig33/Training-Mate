import React, { useState, useRef, useEffect } from 'react';
import { askCoachMate } from '../services/geminiService';

interface Message {
  id: string;
  sender: 'user' | 'mate';
  text: string;
}

const SUGGESTED_QUESTIONS = [
  "What's the class schedule?",
  "Is it beginner friendly?",
  "Tell me a dad joke!",
  "Do you have showers?"
];

const AiCoach: React.FC = () => {
  const [question, setQuestion] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    { id: 'welcome', sender: 'mate', text: "G'day legend! Coach Mate here. I'm here to help you get fit and have a laugh. What's on your mind?" }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  // Listen for booking events from the Classes component
  useEffect(() => {
    const handleBookClass = (e: CustomEvent<{ message: string }>) => {
      setQuestion(e.detail.message);
      inputRef.current?.focus();
    };

    window.addEventListener('bookClass', handleBookClass as EventListener);
    return () => {
      window.removeEventListener('bookClass', handleBookClass as EventListener);
    };
  }, []);

  const handleSend = async (text: string) => {
    if (!text.trim()) return;

    // Use a more unique ID generator to prevent potential key collisions
    const userMsgId = `user-${Date.now()}`;
    const userMsg: Message = { id: userMsgId, sender: 'user', text: text };
    
    setMessages(prev => [...prev, userMsg]);
    setQuestion('');
    setIsLoading(true);

    try {
      const responseText = await askCoachMate(text);
      const botMsg: Message = { id: `mate-${Date.now()}`, sender: 'mate', text: responseText };
      setMessages(prev => [...prev, botMsg]);
    } catch (error) {
      const errorMsg: Message = { id: `error-${Date.now()}`, sender: 'mate', text: "Crikey! Had a bit of a wobble there. Give it another burl in a sec, mate." };
      setMessages(prev => [...prev, errorMsg]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleSend(question);
  };

  return (
    <section id="ai-coach" className="py-24 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
             <h2 className="text-mate-orange font-bold tracking-wider uppercase text-sm mb-2">24/7 Digital Mateship</h2>
             <h3 className="text-4xl font-heading font-bold text-mate-blue">Have a Yarn with Coach Mate</h3>
             <p className="mt-2 text-gray-500">He's got answers, motivation, and some truly terrible jokes.</p>
        </div>

        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100 flex flex-col h-[600px] relative ring-1 ring-black/5">
          
          {/* Chat Header */}
          <div className="bg-mate-blue p-5 flex items-center justify-between shadow-lg z-10 relative overflow-hidden">
             {/* Abstract shape in header */}
            <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-mate-orange rounded-full opacity-20 blur-xl"></div>
            
            <div className="flex items-center relative z-10">
                <div className="relative group">
                    <div className="h-12 w-12 rounded-full bg-gradient-to-br from-mate-orange to-orange-600 flex items-center justify-center text-2xl mr-4 border-2 border-white shadow-sm transform group-hover:scale-110 transition-transform">
                    🦘
                    </div>
                    <div className="absolute bottom-0 right-3 h-3.5 w-3.5 bg-green-500 border-2 border-mate-blue rounded-full animate-pulse"></div>
                </div>
                <div>
                <h3 className="font-bold text-lg text-white font-heading tracking-wide">Coach Mate</h3>
                <p className="text-xs text-blue-200 font-medium flex items-center">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-green-400 mr-1.5"></span>
                  Online & Ready
                </p>
                </div>
            </div>
          </div>

          {/* Chat Area */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6 bg-gray-50/50 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex w-full ${msg.sender === 'user' ? 'justify-end' : 'justify-start'} animate-fadeInUp`}
              >
                <div
                  className={`max-w-[85%] rounded-2xl px-6 py-4 text-base shadow-sm leading-relaxed relative transform transition-all duration-300 ${
                    msg.sender === 'user'
                      ? 'bg-mate-blue text-white rounded-br-sm'
                      : 'bg-white text-gray-800 border border-gray-100 rounded-bl-sm'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            
            {isLoading && (
              <div className="flex justify-start w-full animate-pulse">
                <div className="bg-white rounded-2xl rounded-bl-sm px-5 py-4 border border-gray-100 shadow-sm flex items-center space-x-1.5">
                  <span className="text-xs text-gray-400 font-bold uppercase mr-2">Coach is thinking</span>
                  <div className="w-1.5 h-1.5 bg-mate-orange rounded-full animate-bounce"></div>
                  <div className="w-1.5 h-1.5 bg-mate-orange rounded-full animate-bounce" style={{ animationDelay: '0.15s' }}></div>
                  <div className="w-1.5 h-1.5 bg-mate-orange rounded-full animate-bounce" style={{ animationDelay: '0.3s' }}></div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Suggested Chips */}
          {!isLoading && (
             <div className="px-6 pb-2 bg-gray-50/50 flex flex-wrap gap-2 justify-center border-t border-transparent">
                 {SUGGESTED_QUESTIONS.map((q) => (
                     <button 
                        key={q}
                        onClick={() => handleSend(q)}
                        className="text-xs bg-white border border-gray-200 text-gray-600 px-3 py-1.5 rounded-full hover:bg-mate-orange hover:text-white hover:border-mate-orange transition-colors shadow-sm active:scale-95"
                     >
                         {q}
                     </button>
                 ))}
             </div>
          )}

          {/* Input Area */}
          <div className="p-4 bg-white border-t border-gray-100">
            <form onSubmit={handleSubmit} className="flex gap-3">
              <input
                ref={inputRef}
                type="text"
                className="flex-1 px-5 py-4 rounded-full border border-gray-200 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-mate-orange/20 focus:border-mate-orange transition shadow-inner text-gray-800 placeholder-gray-400 disabled:opacity-50 disabled:bg-gray-100"
                placeholder="Ask about classes, prices, or vibes..."
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                disabled={isLoading}
              />
              <button
                type="submit"
                disabled={isLoading || !question.trim()}
                className="bg-mate-orange text-white h-14 w-14 rounded-full flex items-center justify-center font-bold hover:bg-orange-600 focus:outline-none focus:ring-4 focus:ring-orange-100 disabled:opacity-50 disabled:cursor-not-allowed transition-all transform hover:rotate-12 hover:scale-105 shadow-md"
              >
                <svg className="w-6 h-6 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AiCoach;