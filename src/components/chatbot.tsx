"use client";

import React, { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, Loader2 } from "lucide-react";
import { DATA } from "@/data/resume";




const PortfolioChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content: `Hi! I'm an AI assistant that knows all about ${DATA.name.split(" ")[0]}'s background and experience. Ask me anything about their skills, projects, education, or work experience!`
    }
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);


  // Open chatbot with animation on mount
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
      setIsVisible(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const createSystemPrompt = () => {
    return `You are a helpful AI assistant for ${DATA.name}'s portfolio website. Your role is to answer questions about their background, skills, experience, and projects based on the following information:

NAME: ${DATA.name}
DESCRIPTION: ${DATA.description}
ABOUT: ${DATA.summary}

SKILLS: ${DATA.skills.join(", ")}

WORK EXPERIENCE:
${DATA.work.map(w => `- ${w.title} at ${w.company} (${w.start} - ${w.end || "Present"}): ${w.description}`).join("\n")}

EDUCATION:
${DATA.education.map(e => `- ${e.degree} from ${e.school} (${e.start} - ${e.end})`).join("\n")}

PROJECTS:
${DATA.projects.map(p => `- ${p.title}: ${p.description}. Technologies: ${p.technologies?.join(", ")}`).join("\n")}

CONTACT: +91 8799948641
Email: ${DATA.contact.email}
LinkedIn: ${DATA.contact.social.LinkedIn.url}

Guidelines:
- Be friendly, professional, and concise
- Only answer based on the information provided above
- If asked about something not in the data, politely say you don't have that information
- Encourage visitors to reach out via LinkedIn or email for more details
- Keep responses under 150 words unless more detail is specifically requested
- Use a conversational tone that reflects ${DATA.name.split(" ")[0]}'s professional personality`;
  };

  const sendMessage = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = { role: "user", content: input };
    setMessages(prev => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${process.env.NEXT_PUBLIC_GROQ_API_KEY}`
        },
        body: JSON.stringify({
          model: "llama-3.3-70b-versatile",
          messages: [
            { role: "system", content: createSystemPrompt() },
            ...messages.filter(m => m.role !== "system"),
            userMessage
          ],
          temperature: 0.7,
          max_tokens: 500
        })
      });

      if (!response.ok) {
        throw new Error("Failed to get response");
      }

      const data = await response.json();
      const assistantMessage = {
        role: "assistant",
        content: data.choices[0].message.content
      };

      setMessages(prev => [...prev, assistantMessage]);
    } catch (error) {
      console.error("Error:", error);
      setMessages(prev => [...prev, {
        role: "assistant",
        content: "Sorry, I encountered an error. Please try again or contact directly via LinkedIn."
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <>
      {/* Floating Chat Button */}
      <button
        onClick={() => {
          setIsOpen(!isOpen);
          if (!isOpen) setIsVisible(true);
        }}
        className={`fixed bottom-4 right-4 sm:bottom-6 sm:right-6 w-14 h-14 bg-primary hover:bg-primary/90 text-primary-foreground rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110 z-50 ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-0"
          }`}
        aria-label="Toggle chat"
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className={`fixed bottom-20 sm:bottom-24 right-4 sm:right-6 w-[calc(100vw-2rem)] sm:w-96 h-[60vh] sm:h-[500px] max-h-[85vh] bg-card text-card-foreground rounded-lg shadow-2xl flex flex-col z-50 border border-border transition-all duration-300 ${isOpen ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-4 scale-95"
          }`}>
          {/* Header */}
          <div className="bg-primary text-primary-foreground p-4 rounded-t-lg">
            <h3 className="font-semibold text-lg">Chat with AI Assistant</h3>
            <p className="text-sm opacity-90">
              {"Ask me about " + DATA.name.split(" ")[0] + "'s portfolio"}
            </p>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-3 sm:p-4 space-y-4">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-lg ${msg.role === "user"
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-muted-foreground"
                    }`}
                >
                  <p className="text-xs sm:text-sm whitespace-pre-wrap">{msg.content}</p>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-muted p-3 rounded-lg">
                  <Loader2 className="w-5 h-5 animate-spin text-muted-foreground" />
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-3 sm:p-4 border-t border-border">
            <div className="flex gap-2">
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask about skills, projects..."
                className="flex-1 px-3 py-2 text-sm border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-ring bg-background text-foreground"
                disabled={isLoading}
              />
              <button
                onClick={sendMessage}
                disabled={isLoading || !input.trim()}
                className="px-3 sm:px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                aria-label="Send message"
              >
                <Send size={20} />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PortfolioChatbot;