import { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { MessageCircle, X, Send, User, Bot } from 'lucide-react';

interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

export default function ChatAgent() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hello! I'm Ahmet's AI assistant with complete access to his professional profile. I can discuss his 20+ year ICT career, 25+ certifications, Vision 2030 projects, or any questions about his executive leadership background. What interests you?",
      isUser: false,
      timestamp: new Date()
    }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const getIntelligentResponse = (userMessage: string): string => {
    const msg = userMessage.toLowerCase();
    
    // Professional Profile & Contact
    if (msg.includes('contact') || msg.includes('email') || msg.includes('phone') || msg.includes('reach')) {
      return "Contact Ahmet directly: ahmet@doganconsult.com, +966-500-666-084. Website: www.doganahmet.com, LinkedIn: ahmed-elgazzar-ict. Based in Riyadh with Saudi Premium Residency. Responds within 24 hours.";
    }

    // Experience & Career
    if (msg.includes('experience') || msg.includes('career') || msg.includes('background') || msg.includes('work')) {
      return "Ahmet has 20+ years progressive ICT leadership across Middle East. Key: Led NEOM Tier III Data Center (SAR 21.9M), transformed underperforming region to #1 position, SAR 125M+ contracts secured, 130+ teams managed, built $18M ICT division from scratch. Currently seeking CIO/CTO roles.";
    }

    // Certifications & Credentials
    if (msg.includes('certification') || msg.includes('credential') || msg.includes('qualification') || msg.includes('pgmp')) {
      return "Ahmet holds 25+ elite certifications placing him in global top 0.001% of ICT professionals. Key: PgMP, CISA/CISM/CRISC, RCDD, ATD/AOS, plus DBA, MBA, Stanford Executive Education. This rare combination is unmatched in the region.";
    }

    // Vision 2030 & Saudi Arabia
    if (msg.includes('vision') || msg.includes('2030') || msg.includes('saudi') || msg.includes('neom') || msg.includes('ksa')) {
      return "Ahmet is a strategic Vision 2030 expert with hands-on NEOM smart city infrastructure delivery. His Saudi Premium Residency, cultural fluency, and proven track record make him ideal for driving KSA's digital transformation initiatives.";
    }

    // Availability & Hiring
    if (msg.includes('available') || msg.includes('hire') || msg.includes('position') || msg.includes('role') || msg.includes('cio') || msg.includes('cto')) {
      return "Ahmet is actively seeking C-level executive positions (CIO/CTO) in digital transformation, smart cities, or ICT infrastructure. Available for immediate start and consultation meetings. Given his elite profile, early engagement is recommended.";
    }

    // Technical Skills
    if (msg.includes('technical') || msg.includes('skills') || msg.includes('infrastructure') || msg.includes('cybersecurity') || msg.includes('data center')) {
      return "Technical expertise: Digital Transformation & Strategy, ICT Infrastructure (Tier III+ data centers), Cybersecurity & Risk Management, Program/Project Management, P&L Leadership, Cloud/IoT solutions. Real-world delivery of complex Middle Eastern projects.";
    }

    // Education
    if (msg.includes('education') || msg.includes('mba') || msg.includes('dba') || msg.includes('stanford') || msg.includes('degree')) {
      return "Advanced education: DBA, MBA, Stanford Executive Education combined with 25+ professional certifications. This rare academic-practitioner profile creates unique value for organizations seeking both strategic vision and execution excellence.";
    }

    // Leadership & Management
    if (msg.includes('leadership') || msg.includes('management') || msg.includes('team') || msg.includes('turnaround')) {
      return "Proven leadership: Managed 130+ team members across multiple countries, achieved 5× profit increase through regional turnaround, built high-performing PMO organizations. Combines strategic vision with hands-on execution capabilities.";
    }

    // General/Default Response
    return "I have comprehensive information about Ahmet's profile. Ask me about: his 20+ year career journey, 25+ elite certifications, Vision 2030 & NEOM projects, contact details, current availability for CIO/CTO roles, technical expertise, education credentials, or any specific questions. What would you like to know?";
  };

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: input,
      isUser: true,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);

    setTimeout(() => {
      const response = getIntelligentResponse(input);
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: response,
        isUser: false,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1200);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      {/* Floating Chat Button */}
      {!isOpen && (
        <Button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 w-16 h-16 rounded-full bg-gradient-to-r from-primary-600 to-accent hover:from-primary-700 hover:to-accent/90 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-110 z-50 animate-pulse"
          data-testid="button-chat-open"
        >
          <MessageCircle className="w-8 h-8 text-white" />
        </Button>
      )}

      {/* Chat Interface */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 w-96 h-[600px] bg-white rounded-2xl shadow-2xl border-2 border-primary-200 z-50 flex flex-col overflow-hidden animate-scale-in">
          {/* Header */}
          <div className="bg-gradient-to-r from-primary-600 to-accent text-white p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center animate-float">
                <Bot className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-lg">Elite ICT Executive Assistant</h3>
                <p className="text-xs opacity-90">Ask about Ahmet's complete profile</p>
              </div>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(false)}
              className="text-white hover:bg-white/20 transition-all duration-200"
              data-testid="button-chat-close"
            >
              <X className="w-5 h-5" />
            </Button>
          </div>

          {/* Messages */}
          <div className="flex-1 p-4 overflow-y-auto space-y-4 bg-gradient-to-b from-gray-50 to-white">
            {messages.map((message, index) => (
              <div
                key={message.id}
                className={`flex items-start gap-3 ${message.isUser ? 'flex-row-reverse' : ''} fade-in visible`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                  message.isUser ? 'bg-gradient-to-r from-primary-500 to-primary-600' : 'bg-gradient-to-r from-gray-100 to-gray-200'
                } shadow-md`}>
                  {message.isUser ? (
                    <User className="w-5 h-5 text-white" />
                  ) : (
                    <Bot className="w-5 h-5 text-gray-600" />
                  )}
                </div>
                <div
                  className={`max-w-[260px] p-4 rounded-2xl shadow-lg hover-lift ${
                    message.isUser
                      ? 'bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-tr-sm'
                      : 'bg-white text-gray-900 rounded-tl-sm border border-gray-100'
                  }`}
                >
                  <p className="text-sm leading-relaxed">{message.text}</p>
                  <p className={`text-xs mt-3 ${
                    message.isUser ? 'text-primary-100' : 'text-gray-400'
                  }`}>
                    {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </p>
                </div>
              </div>
            ))}
            
            {isTyping && (
              <div className="flex items-start gap-3 animate-fade-in-up">
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-gray-100 to-gray-200 flex items-center justify-center shadow-md">
                  <Bot className="w-5 h-5 text-gray-600" />
                </div>
                <div className="bg-white p-4 rounded-2xl rounded-tl-sm shadow-lg border border-gray-100">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 bg-primary-500 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-primary-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 bg-primary-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-4 border-t bg-white">
            <div className="flex gap-3">
              <textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask about experience, certifications, availability..."
                className="flex-1 p-3 border-2 border-gray-200 rounded-xl resize-none focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-sm transition-all duration-200"
                rows={1}
                data-testid="input-chat-message"
              />
              <Button
                onClick={handleSend}
                disabled={!input.trim()}
                className="px-4 py-3 bg-gradient-to-r from-primary-600 to-accent hover:from-primary-700 hover:to-accent/90 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105"
                data-testid="button-chat-send"
              >
                <Send className="w-4 h-4" />
              </Button>
            </div>
            <p className="text-xs text-gray-500 mt-3 text-center">
              For executive discussions: ahmet@doganconsult.com | www.doganahmet.com
            </p>
          </div>
        </div>
      )}
    </>
  );
}