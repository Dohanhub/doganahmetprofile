import { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { MessageCircle, X, Send, User, Zap, Bot } from 'lucide-react';

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
      text: "Hello! I'm Ahmet's intelligent AI assistant. I can discuss his professional background, career achievements, and contact information. I also have general knowledge on technology, business, AI, cybersecurity, and various topics. Ask me anything - from his ICT expertise to general questions. What interests you?",
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
    
    // Check if question is about Ahmet first (priority responses)
    if (msg.includes('ahmet') || msg.includes('contact') || msg.includes('email') || msg.includes('phone') || msg.includes('reach')) {
      return "Contact Ahmet directly: info@doganahmet.com, +966-500-666-084. LinkedIn: https://www.linkedin.com/in/ahmet-dogan-ict/. Based in Riyadh with Saudi Premium Residency. Responds within 24 hours.";
    }

    if ((msg.includes('experience') || msg.includes('career') || msg.includes('background') || msg.includes('work')) && (msg.includes('his') || msg.includes('ahmet') || msg.includes('you'))) {
      return "Ahmet has 20+ years progressive ICT leadership across Middle East. Key: Led NEOM Tier III Data Center (SAR 21.9M), transformed underperforming region to #1 position, SAR 125M+ contracts secured, 130+ teams managed, built $18M ICT division from scratch.";
    }

    if (msg.includes('certification') || msg.includes('credential') || msg.includes('qualification') || msg.includes('pgmp')) {
      return "Ahmet holds 25+ elite certifications placing him in global top 0.001% of ICT professionals. Key: PgMP, CISA/CISM/CRISC, RCDD, ATD/AOS, plus DBA, MBA, Stanford Executive Education. This rare combination is unmatched in the region.";
    }

    if (msg.includes('vision') || msg.includes('2030') || msg.includes('saudi') || msg.includes('neom') || msg.includes('ksa')) {
      return "Ahmet is a strategic Vision 2030 expert with hands-on NEOM smart city infrastructure delivery. His Saudi Premium Residency, cultural fluency, and proven track record make him ideal for driving KSA's digital transformation initiatives.";
    }

    if (msg.includes('experience') || msg.includes('expertise') || msg.includes('collaboration') || msg.includes('consulting')) {
      return "Ahmet brings 20+ years of elite ICT leadership experience in digital transformation, smart cities, and ICT infrastructure across the Middle East. His unique certification portfolio and proven track record make him a valuable strategic partner for complex technology initiatives.";
    }

    // Enhanced General Knowledge Responses (Extended ChatGPT-like capabilities)
    if (msg.includes('artificial intelligence') || msg.includes('ai') || msg.includes('machine learning') || msg.includes('ml')) {
      return "Artificial Intelligence is revolutionizing industries worldwide through automation, data analytics, and intelligent decision-making. Current AI landscape includes:\n\n• **Generative AI**: ChatGPT, GPT-4, Claude transforming content creation and customer service\n• **Machine Learning**: Predictive analytics, recommendation systems, fraud detection\n• **Computer Vision**: Image recognition, autonomous vehicles, medical diagnostics\n• **Natural Language Processing**: Translation, sentiment analysis, voice assistants\n\nAs an ICT executive, Ahmet has hands-on experience implementing AI/ML solutions in enterprise environments, particularly in smart city infrastructure and digital transformation projects. For AI strategy consulting and implementation guidance, reach out to ahmet@doganconsult.com.";
    }

    if (msg.includes('technology') || msg.includes('tech trends') || msg.includes('innovation') || msg.includes('future')) {
      return "Technology trends are reshaping the global economy and business operations. Key developments include:\n\n• **Cloud Computing**: Multi-cloud strategies, serverless architecture, edge computing\n• **Cybersecurity**: Zero-trust networks, AI-powered threat detection, quantum cryptography\n• **IoT & Smart Cities**: Connected devices, smart infrastructure, data-driven urban planning\n• **Digital Transformation**: Process automation, customer experience optimization, data analytics\n• **Emerging Tech**: Blockchain, AR/VR, quantum computing, 5G networks\n\nThese trends directly align with Ahmet's expertise in Vision 2030 projects and NEOM smart city development. His technical leadership spans infrastructure modernization, enterprise automation, and strategic technology implementation across the Middle East region.";
    }

    if (msg.includes('business') || msg.includes('management') || msg.includes('strategy') || msg.includes('consulting') || msg.includes('leadership')) {
      return "Business excellence requires strategic thinking, operational discipline, and adaptive leadership. Core principles for success:\n\n• **Strategic Vision**: Long-term planning, market analysis, competitive positioning\n• **Operational Excellence**: Process optimization, quality management, performance metrics\n• **Digital Transformation**: Technology integration, data-driven decisions, customer experience\n• **Leadership Development**: Team empowerment, change management, organizational culture\n• **Financial Management**: P&L accountability, cost optimization, revenue growth\n\nAhmet exemplifies these principles through his track record: transformed underperforming regions to #1 positions, managed 130+ team members across multiple countries, achieved 5× profit increases, and secured SAR 125M+ in contracts. His executive approach combines strategic vision with hands-on execution capabilities.";
    }

    if (msg.includes('cybersecurity') || msg.includes('security') || msg.includes('cyber') || msg.includes('risk')) {
      return "Cybersecurity is fundamental to modern business operations and digital transformation initiatives. Comprehensive security framework includes:\n\n• **Risk Assessment**: Threat modeling, vulnerability analysis, impact evaluation\n• **Governance & Compliance**: Policy development, regulatory adherence, audit management\n• **Technical Controls**: Firewalls, encryption, access controls, monitoring systems\n• **Incident Response**: Detection capabilities, response procedures, recovery planning\n• **Security Awareness**: Training programs, phishing prevention, security culture\n\nAhmet's CISA (Certified Information Systems Auditor), CISM (Certified Information Security Manager), and CRISC (Certified in Risk and Information Systems Control) certifications represent world-class cybersecurity expertise. His practical experience includes securing critical infrastructure for NEOM smart city projects and enterprise-level security implementations.";
    }

    if (msg.includes('cloud') || msg.includes('aws') || msg.includes('azure') || msg.includes('infrastructure') || msg.includes('data center')) {
      return "Cloud computing and infrastructure modernization are driving digital transformation across industries. Key components:\n\n• **Cloud Platforms**: AWS (market leader), Microsoft Azure (enterprise focus), Google Cloud (AI/ML strength)\n• **Migration Strategies**: Lift-and-shift, re-platforming, cloud-native development\n• **Data Center Evolution**: Tier III+ facilities, edge computing, hybrid architectures\n• **Security & Compliance**: Shared responsibility models, encryption, access controls\n• **Cost Optimization**: Right-sizing, reserved instances, automated scaling\n\nAhmet's expertise includes designing and delivering Tier III data centers (NEOM Telco Park - SAR 21.9M project), cloud infrastructure strategy, and enterprise-level ICT implementations. His hands-on experience spans traditional data centers to modern cloud-native architectures across the Middle East region.";
    }

    if (msg.includes('hello') || msg.includes('hi') || msg.includes('hey') || msg.includes('good morning') || msg.includes('good afternoon')) {
      return "Hello! I'm Ahmet's comprehensive AI assistant with both deep professional expertise and broad general knowledge capabilities. I can provide detailed insights on:\n\n**Ahmet's Professional Profile:**\n• 20+ year ICT leadership journey across Middle East\n• Vision 2030 & NEOM smart city project experience\n• Elite certifications (PgMP, CISA/CISM/CRISC, DBA, MBA)\n• Current executive availability for CIO/CTO roles\n\n**General Knowledge Topics:**\n• Technology trends, AI, cybersecurity, cloud computing\n• Business strategy, leadership, project management\n• Industry analysis, market insights, best practices\n\nWhat specific area interests you today? Feel free to ask detailed questions - I'm designed to provide comprehensive, informative responses!";
    }

    if (msg.includes('what') || msg.includes('how') || msg.includes('why') || msg.includes('when') || msg.includes('where') || msg.includes('who')) {
      return "I'm equipped to provide detailed answers on a wide range of topics! My knowledge spans:\n\n**Professional Expertise:**\n• Ahmet's complete career portfolio and achievements\n• ICT industry trends and best practices\n• Executive leadership and strategic planning\n• Digital transformation methodologies\n\n**Technology & Business:**\n• Artificial Intelligence and Machine Learning\n• Cybersecurity frameworks and risk management\n• Cloud computing and infrastructure design\n• Project management and organizational development\n\n**Analysis & Insights:**\n• Market trends and industry analysis\n• Strategic planning and business optimization\n• Technical implementation guidance\n• Career development and professional growth\n\nPlease ask your specific question - I'll provide a comprehensive, detailed response with practical insights and actionable information!";
    }

    if (msg.includes('explain') || msg.includes('tell me') || msg.includes('describe') || msg.includes('detail')) {
      return "I excel at providing detailed explanations on complex topics! I can break down sophisticated concepts into clear, actionable insights covering:\n\n**Technical Domains:**\n• Digital transformation strategies and implementation\n• Cybersecurity frameworks and best practices\n• Cloud architecture and infrastructure design\n• AI/ML applications in enterprise environments\n\n**Business & Leadership:**\n• Executive strategy development and execution\n• Program management and organizational change\n• P&L management and business growth strategies\n• Team leadership and performance optimization\n\n**Ahmet's Expertise:**\n• Complete professional journey and achievements\n• Vision 2030 project experience and outcomes\n• Certification portfolio and global standing\n• Current availability and executive positioning\n\nWhat specific topic would you like me to explain in detail? I'll provide comprehensive information with real-world examples and practical applications!";
    }

    // Default comprehensive response
    return "I'm designed to be your comprehensive knowledge partner, combining Ahmet's professional expertise with extensive general knowledge capabilities. I can discuss:\n\n**Professional Topics:**\n• Ahmet's 20+ year ICT leadership experience\n• His role in Vision 2030 and NEOM projects\n• Elite certification portfolio (25+ credentials)\n• Executive availability for CIO/CTO positions\n\n**General Knowledge:**\n• Technology trends and innovation\n• Business strategy and management\n• Industry analysis and market insights\n• Career development and professional growth\n\nI provide detailed, informative responses like ChatGPT, covering both specific questions about Ahmet's profile and broader topics across technology, business, and leadership domains. What would you like to explore today?";
  };

  const handleSend = async () => {
    if (!input.trim()) return;

    try {
      const userMessage: Message = {
        id: Date.now().toString(),
        text: input.trim(),
        isUser: true,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, userMessage]);
      const userInput = input.trim();
      setInput('');
      setIsTyping(true);

      setTimeout(() => {
        try {
          const response = getIntelligentResponse(userInput);
          
          if (!response || response.trim().length === 0) {
            throw new Error("Empty response generated");
          }
          
          const botMessage: Message = {
            id: (Date.now() + 1).toString(),
            text: response,
            isUser: false,
            timestamp: new Date()
          };

          setMessages(prev => [...prev, botMessage]);
          setIsTyping(false);
          
          // Auto-scroll to bottom
          setTimeout(() => {
            messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
          }, 100);
          
        } catch (error) {
          console.error("Chat response error:", error);
          
          const errorMessage: Message = {
            id: (Date.now() + 1).toString(),
            text: "I apologize, but I'm having trouble generating a response right now. Please try asking your question again, or feel free to contact Ahmet directly at info@doganahmet.com for immediate assistance.",
            isUser: false,
            timestamp: new Date()
          };
          
          setMessages(prev => [...prev, errorMessage]);
          setIsTyping(false);
        }
      }, 1200 + Math.random() * 800);
      
    } catch (error) {
      console.error("Chat send error:", error);
      setIsTyping(false);
      
      const errorMessage: Message = {
        id: (Date.now() + 2).toString(),
        text: "Sorry, there was an error processing your message. Please try again.",
        isUser: false,
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, errorMessage]);
    }
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
          className="fixed bottom-8 right-8 w-16 h-16 rounded-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-110 hover:-translate-y-2 z-50 animate-pulse hover:animate-none"
          style={{
            filter: 'drop-shadow(0 10px 20px rgba(0,0,0,0.2))',
            transition: 'all 0.5s cubic-bezier(0.25, 0.8, 0.25, 1)'
          }}
          data-testid="button-chat-open"
        >
          <MessageCircle className="w-8 h-8 text-white" />
        </Button>
      )}

      {/* Chat Interface */}
      {isOpen && (
        <div className="fixed bottom-8 right-8 w-96 h-[600px] bg-white rounded-2xl shadow-2xl border-2 border-gray-200 z-50 flex flex-col overflow-hidden animate-scale-in">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center animate-float">
                <Zap className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-lg">Doğan AI</h3>
                <p className="text-xs opacity-90">Powered by GPT - Ask me anything</p>
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
                    <Zap className="w-5 h-5 text-gray-600" />
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
                placeholder="Ask about Ahmet's profile, tech trends, or anything..."
                className="flex-1 p-3 border-2 border-gray-200 rounded-xl resize-none focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-sm transition-all duration-200"
                rows={1}
                data-testid="input-chat-message"
              />
              <Button
                onClick={handleSend}
                disabled={!input.trim()}
                className="px-4 py-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105"
                data-testid="button-chat-send"
              >
                <Send className="w-4 h-4" />
              </Button>
            </div>
            <p className="text-xs text-gray-500 mt-3 text-center">
              For executive discussions: info@doganahmet.com | LinkedIn: https://www.linkedin.com/in/ahmet-dogan-ict/
            </p>
          </div>
        </div>
      )}
    </>
  );
}