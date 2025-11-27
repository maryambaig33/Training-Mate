import React, { useState, useRef, useEffect } from 'react';
import { askCoachMate } from '../services/geminiService';

interface Message {
  id: string;
  sender: 'user' | 'mate';
  text: string;
}

const AiCoach: React.FC = () => {
  const [question, setQuestion] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    { id: 'welcome', sender: 'mate', text: "G'day legend! I'm Coach Mate. Ready to smash some goals? Ask me anything about fitness, our classes, or just for a bit of motivation!" }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!question.trim()) return;

    const userMsg: Message = { id: Date.now().toString(), sender: 'user', text: question };
    setMessages(prev => [...prev, userMsg]);
    setQuestion('');
    setIsLoading(true);

    try {
      const responseText = await askCoachMate(question);
      const botMsg: Message = { id: (Date.now() + 1).toString(), sender: 'mate', text: responseText };
      setMessages(prev => [...prev, botMsg]);
    } catch (error) {
      const errorMsg: Message = { id: (Date.now() + 1).toString(), sender: 'mate', text: "Crikey! Had a bit of a stumble there. Try asking again, mate." };
      setMessages(prev => [...prev, errorMsg]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="ai-coach" className="py-24 bg-blue-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
             <h2 className="text-mate-orange font-bold tracking-wider uppercase text-sm mb-2">24/7 Support</h2>
             <h3 className="text-4xl font-heading font-bold text-mate-blue">Chat with Coach Mate</h3>
        </div>

        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100 flex flex-col h-[600px]">
          
          {/* Chat Header */}
          <div className="bg-mate-blue p-4 flex items-center shadow-md z-10">
            <div className="h-10 w-10 rounded-full bg-mate-orange flex items-center justify-center text-xl mr-3 border-2 border-white">
              🦘
            </div>
            <div>
              <h3 className="font-bold text-white">Coach Mate AI</h3>
              <div className="flex items-center">
                <span className="h-2 w-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
                <span className="text-xs text-blue-200">Online & Ready to Motivate</span>
              </div>
            </div>
          </div>

          {/* Chat Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex w-full ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] rounded-2xl px-5 py-3 text-sm leading-relaxed shadow-sm ${
                    msg.sender === 'user'
                      ? 'bg-mate-blue text-white rounded-br-none'
                      : 'bg-white text-gray-800 border border-gray-200 rounded-bl-none'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start w-full">
                <div className="bg-white rounded-2xl rounded-bl-none px-5 py-4 border border-gray-200 shadow-sm flex items-center space-x-2">
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-4 bg-white border-t border-gray-100">
            <form onSubmit={handleSubmit} className="flex gap-2">
              <input
                type="text"
                className="flex-1 px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-mate-blue focus:border-transparent transition"
                placeholder="Ask about form, nutrition, or class schedule..."
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                disabled={isLoading}
              />
              <button
                type="submit"
                disabled={isLoading || !question.trim()}
                className="bg-mate-orange text-white px-6 py-3 rounded-xl font-bold hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-mate-orange disabled:opacity-50 disabled:cursor-not-allowed transition transform active:scale-95"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AiCoach;