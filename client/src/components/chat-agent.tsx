import React, { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { useToast } from '@/hooks/use-toast';
import { 
  X, Send, User, Sparkles, 
  Mic, MicOff, Volume2, VolumeX, Brain, Award,
  Zap, Building2, Shield
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
  type: 'text' | 'voice' | 'quick-reply';
}

interface QuickReply {
  id: string;
  text: string;
  action: string;
  icon: React.ReactNode;
}

interface ConversationContext {
  currentPage: string;
  topicsDiscussed: string[];
  userPreferences: string[];
  lastInteraction: Date;
}

export default function ChatAgent() {
  const [isOpen, setIsOpen] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isAutoGreeting] = useState(true);
  const [, setIsSpeaking] = useState(false);
  const [conversationContext, setConversationContext] = useState<ConversationContext>({
    currentPage: 'home',
    topicsDiscussed: [],
    userPreferences: [],
    lastInteraction: new Date()
  });
  
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Merhaba! I'm Eline, your personal digital assistant. I'm here to help you learn about Ahmet Doğan's expertise and answer any questions you have. How can I assist you today? 💫",
      isUser: false,
      timestamp: new Date(),
      type: 'text'
    }
  ]);
  
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [showQuickReplies, setShowQuickReplies] = useState(true);
  
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const recognitionRef = useRef<any>(null);
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);
  const { toast } = useToast();

  // Eline's comprehensive knowledge base
  const elineKnowledge = {
    aboutAhmet: {
      name: "Ahmet Doğan",
      title: "Elite ICT Executive & Digital Transformation Leader",
      qualifications: "Doctor of Business Administration Candidate | PgMP | MBA | Chartered Management Institute CISM | CISA | CRISC",
      residency: "Saudi Premium Residency",
      expertise: [
        "Digital Transformation & Strategy",
        "ICT Infrastructure & Data Centers",
        "Leadership & Management",
        "Cybersecurity & Risk Management",
        "Smart Cities & IoT Solutions"
      ],
      personality: "Visionary, strategic, results-driven, culturally aware, and deeply committed to excellence"
    },
    services: [
      "Digital Transformation Leadership",
      "Cybersecurity Governance", 
      "ICT Strategy & Architecture",
      "Program Management",
      "Vision 2030 Alignment",
      "Executive Consulting"
    ],
    achievements: [
      "Global top 0.001% portfolio with PgMP, CISA/CISM/CRISC certifications",
      "Delivered NEOM smart city infrastructure projects",
      "Led 130+ member cross-functional teams across multiple countries",
      "Established PMOs and managed P&L operations",
      "Saudi Premium Residency holder"
    ],
    projects: [
      "NEOM Smart City Infrastructure",
      "Digital Transformation for Fortune 500 Companies",
      "Cybersecurity Framework Implementation",
      "ICT Strategy Development",
      "Program Management Office Setup"
    ],
    certifications: [
      "PgMP (Program Management Professional)",
      "CISM (Certified Information Security Manager)",
      "CISA (Certified Information Systems Auditor)",
      "CRISC (Certified in Risk and Information Systems Control)"
    ]
  };

  // Quick reply options based on context
  const getQuickReplies = (): QuickReply[] => {
    const baseReplies = [
      {
        id: '1',
        text: "Tell me about Ahmet",
        action: 'about',
        icon: <User className="w-4 h-4" />
      },
      {
        id: '2',
        text: "Show his services",
        action: 'services',
        icon: <Zap className="w-4 h-4" />
      },
      {
        id: '3',
        text: "What are his achievements?",
        action: 'achievements',
        icon: <Award className="w-4 h-4" />
      }
    ];

    // Add context-specific replies
    if (conversationContext.currentPage === 'career') {
      baseReplies.push({
        id: '4',
        text: "Walk me through his career",
        action: 'career',
        icon: <Building2 className="w-4 h-4" />
      });
    }

    if (conversationContext.currentPage === 'certifications') {
      baseReplies.push({
        id: '5',
        text: "Explain his certifications",
        action: 'certifications',
        icon: <Shield className="w-4 h-4" />
      });
    }

    return baseReplies;
  };

  // Initialize speech recognition
  useEffect(() => {
    if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
      recognitionRef.current = new SpeechRecognition();
      recognitionRef.current.continuous = false;
      recognitionRef.current.interimResults = false;
      recognitionRef.current.lang = 'en-US';

      recognitionRef.current.onresult = (event: any) => {
        const transcript = event.results[0][0].transcript;
        setInputValue(transcript);
        handleSendMessage(transcript);
        setIsListening(false);
      };

      recognitionRef.current.onerror = (event: any) => {
        console.error('Speech recognition error:', event.error);
        setIsListening(false);
        toast({
          title: "Voice input error",
          description: "Please try typing instead",
          variant: "destructive"
        });
      };
    }

    // Auto-greeting after 8 seconds
    if (isAutoGreeting) {
      const timer = setTimeout(() => {
        if (!isOpen) {
          handleAutoGreeting();
        }
      }, 8000);
      return () => clearTimeout(timer);
    }
  }, [isAutoGreeting, isOpen]);

  // Auto-greeting function
  const handleAutoGreeting = () => {
    const greetings = [
      "Hello there! 👋 Would you like me to walk you through Ahmet's executive profile?",
      "Merhaba! I'm here to help you discover Ahmet's expertise. Shall we start? ✨",
      "Hi! I can guide you through Ahmet's impressive credentials. Ready to explore? 🌟"
    ];
    
    const randomGreeting = greetings[Math.floor(Math.random() * greetings.length)];
    addMessage(randomGreeting, false);
  };

  // Add message to conversation
  const addMessage = (text: string, isUser: boolean, type: 'text' | 'voice' | 'quick-reply' = 'text') => {
    const newMessage: Message = {
      id: Date.now().toString(),
      text,
      isUser,
      timestamp: new Date(),
      type
    };
    setMessages(prev => [...prev, newMessage]);
    
    // Update conversation context
    setConversationContext(prev => ({
      ...prev,
      topicsDiscussed: [...prev.topicsDiscussed, text.toLowerCase()],
      lastInteraction: new Date()
    }));
  };

  // Generate intelligent Eline response with improved human-like interaction
  const generateElineResponse = async (userMessage: string): Promise<string> => {
    const lowerMessage = userMessage.toLowerCase();
    
    // Add a small delay to simulate thinking (shorter for better responsiveness)
    await new Promise(resolve => setTimeout(resolve, 300 + Math.random() * 500));
    
    // Update context based on user message
    if (lowerMessage.includes('career') || lowerMessage.includes('experience')) {
      setConversationContext(prev => ({ ...prev, currentPage: 'career' }));
    } else if (lowerMessage.includes('certification') || lowerMessage.includes('credential')) {
      setConversationContext(prev => ({ ...prev, currentPage: 'certifications' }));
    } else if (lowerMessage.includes('about') || lowerMessage.includes('who')) {
      setConversationContext(prev => ({ ...prev, currentPage: 'about' }));
    }

    // Professional response generation with better context awareness
    if (lowerMessage.includes('hello') || lowerMessage.includes('hi') || lowerMessage.includes('merhaba')) {
      const greetings = [
        "Merhaba! I'm Eline, your digital assistant. I'm here to help you discover Ahmet Doğan's expertise. What would you like to know about his professional background?",
        "Hello! I'm Eline. I can help you learn about Ahmet Doğan's career, certifications, or services. What interests you most?",
        "Hi there! I'm Eline, your guide to Ahmet Doğan's professional portfolio. How can I assist you today?"
      ];
      return greetings[Math.floor(Math.random() * greetings.length)];
    }
    
    if (lowerMessage.includes('ahmet') || lowerMessage.includes('doğan') || lowerMessage.includes('who')) {
      return `Ahmet Doğan is a distinguished ICT Executive and Digital Transformation Leader. He holds a Doctor of Business Administration candidacy, PgMP, MBA, and multiple professional certifications including CISM, CISA, and CRISC. He's a Saudi Premium Residency holder with expertise in digital transformation, cybersecurity, and strategic leadership.`;
    }
    
    if (lowerMessage.includes('service') || lowerMessage.includes('help') || lowerMessage.includes('what can')) {
      return `Ahmet offers specialized services in:\n• Digital Transformation Leadership\n• Cybersecurity Governance\n• ICT Strategy & Architecture\n• Program Management\n• Executive Consulting\n\nEach service is designed to help organizations achieve strategic objectives and operational excellence.`;
    }
    
    if (lowerMessage.includes('achievement') || lowerMessage.includes('accomplishment')) {
      return `Ahmet's key achievements include:\n• Global top 0.001% portfolio with elite certifications\n• Led 130+ member teams across multiple countries\n• Delivered NEOM smart city infrastructure projects\n• Transformed underperforming regions to #1 national ranking\n• 20+ years of progressive ICT leadership experience`;
    }
    
    if (lowerMessage.includes('certification') || lowerMessage.includes('credential')) {
      return `Ahmet holds prestigious certifications including:\n• PgMP (Program Management Professional)\n• CISM (Certified Information Security Manager)\n• CISA (Certified Information Systems Auditor)\n• CRISC (Certified in Risk and Information Systems Control)\n• Chartered Manager (CMgr MCMI)\n\nHis PgMP certification alone places him in the top 0.001% of professionals globally.`;
    }
    
    if (lowerMessage.includes('project') || lowerMessage.includes('work')) {
      return `Ahmet has delivered significant projects including:\n• NEOM Smart City Infrastructure\n• Digital transformation for Fortune 500 companies\n• Government ICT modernization initiatives\n• Cybersecurity framework implementations\n• Cross-border technology integration projects`;
    }
    
    if (lowerMessage.includes('contact') || lowerMessage.includes('email') || lowerMessage.includes('reach')) {
      return "You can reach Ahmet at info@doganahmet.com. He's available for consultation on digital transformation, ICT strategy, and executive leadership projects. Would you like me to provide more details about his consultation process?";
    }
    
    if (lowerMessage.includes('experience') || lowerMessage.includes('background') || lowerMessage.includes('career')) {
      return "Ahmet's career spans 20+ years, progressing from technical specialist to C-suite executive. He's led transformational projects across Saudi Arabia, Kuwait, Turkey, and Egypt, managing large international teams and delivering cutting-edge ICT solutions. His experience includes strategic leadership, P&L management, and government relations.";
    }
    
    if (lowerMessage.includes('saudi') || lowerMessage.includes('middle east')) {
      return "Ahmet has extensive Middle East expertise, particularly in Saudi Arabia where he holds Premium Residency. He's worked extensively on Vision 2030 projects, government ICT initiatives, and regional digital transformation programs. His understanding of local business culture and regulatory requirements is exceptional.";
    }
    
    if (lowerMessage.includes('thank') || lowerMessage.includes('thanks')) {
      return "You're welcome! I'm here to help you learn about Ahmet's expertise. Is there anything specific about his background, services, or achievements you'd like to know more about?";
    }
    
    // Context-aware responses
    if (conversationContext.currentPage === 'career') {
      return "Regarding Ahmet's career, he's progressed from technical roles to executive leadership over 20+ years. His journey includes leading major digital transformation initiatives, managing international teams, and delivering strategic ICT solutions. What specific aspect of his career interests you?";
    }
    
    if (conversationContext.currentPage === 'certifications') {
      return "Ahmet's certification portfolio represents the highest levels of professional achievement. His PgMP certification is particularly rare, held by fewer than 0.001% of professionals globally. These credentials demonstrate his commitment to excellence and continuous professional development.";
    }
    
    // Professional default responses
    const defaultResponses = [
      "I can help you learn about Ahmet's expertise, career, certifications, or services. What specific information would you like to know?",
      "I'm here to provide information about Ahmet Doğan's professional background. Would you like to know about his career, certifications, achievements, or services?",
      "I can share details about Ahmet's ICT leadership experience, digital transformation expertise, or professional services. What would you like to explore?"
    ];
    return defaultResponses[Math.floor(Math.random() * defaultResponses.length)];
  };

  // Handle quick reply selection
  const handleQuickReply = async (action: string) => {
    let message = '';
    switch (action) {
      case 'about':
        message = "Tell me about Ahmet Doğan";
        break;
      case 'services':
        message = "What services does Ahmet offer?";
        break;
      case 'achievements':
        message = "What are Ahmet's achievements?";
        break;
      case 'career':
        message = "Walk me through Ahmet's career";
        break;
      case 'certifications':
        message = "Explain Ahmet's certifications";
        break;
      default:
        message = "Tell me more";
    }
    
    addMessage(message, true, 'quick-reply');
    setInputValue(message);
    await handleSendMessage(message);
  };

  // Handle voice input
  const toggleVoiceInput = () => {
    if (isListening) {
      recognitionRef.current?.stop();
      setIsListening(false);
    } else {
      setIsListening(true);
      recognitionRef.current?.start();
    }
  };

  // Handle text-to-speech
  const speakText = (text: string) => {
    if (isMuted) return;
    
    if ('speechSynthesis' in window) {
      if (utteranceRef.current) {
        speechSynthesis.cancel();
      }
      
      utteranceRef.current = new SpeechSynthesisUtterance(text);
      utteranceRef.current.rate = 0.9;
      utteranceRef.current.pitch = 1.1;
      utteranceRef.current.volume = 0.8;
      
      utteranceRef.current.onstart = () => setIsSpeaking(true);
      utteranceRef.current.onend = () => setIsSpeaking(false);
      
      speechSynthesis.speak(utteranceRef.current);
    }
  };

  // Handle message sending
  const handleSendMessage = async (customInput?: string) => {
    const messageToSend = customInput || inputValue;
    if (!messageToSend.trim()) return;

    // User message is added directly via addMessage function

    addMessage(messageToSend, true);
    setInputValue('');
    setIsTyping(true);

    try {
      const response = await generateElineResponse(messageToSend);

      setTimeout(() => {
        addMessage(response, false);
        setIsTyping(false);
        
        // Speak the response if voice is enabled
        if (!isMuted) {
          speakText(response);
        }
        
        // Show quick replies after response
        setShowQuickReplies(true);
      }, 1000 + Math.random() * 1000);
    } catch (error) {
      console.error('Error generating response:', error);
      setIsTyping(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const scrollToBottom = () => {
    if (messagesEndRef.current?.scrollIntoView && typeof messagesEndRef.current.scrollIntoView === 'function') {
      try {
        messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
      } catch (error) {
        // Fallback for test environments where scrollIntoView might not work
        console.warn('scrollIntoView not supported in this environment');
      }
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <>
      {/* Floating Hologram Chat Button - 3D Design */}
      {!isOpen && (
        <motion.div 
          className="fixed bottom-6 right-6 z-50"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, type: "spring" }}
        >
          <motion.div
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.95 }}
            className="relative"
          >
            <Button
              onClick={() => setIsOpen(true)}
              className="group relative bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 hover:from-purple-600 hover:via-pink-600 hover:to-blue-600 text-white p-4 rounded-full shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 transform border-0 overflow-hidden"
              data-testid="chat-open-button"
            >
              {/* Holographic Turkish Lady Avatar */}
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-amber-200 via-rose-300 to-purple-400 rounded-full flex items-center justify-center shadow-lg relative overflow-hidden">
                  <span className="text-2xl relative z-10">👩‍💼</span>
                  {/* Holographic glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse"></div>
                </div>
                
                {/* Floating holographic elements */}
                <div className="absolute -top-2 -right-2">
                  <Sparkles className="w-4 h-4 text-yellow-300 animate-pulse" />
                </div>
                <div className="absolute -bottom-1 -left-1">
                  <Brain className="w-4 h-4 text-blue-300 animate-bounce" />
                </div>
              </div>
              
              {/* Floating Text */}
              <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-white/90 backdrop-blur-sm text-gray-800 px-3 py-1 rounded-full text-sm font-medium shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                Chat with Eline ✨
              </div>
            </Button>
          </motion.div>
        </motion.div>
      )}

      {/* Floating Hologram Chat Interface - 3D, Light, No Box */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            className="fixed bottom-6 right-6 z-50 w-96 max-w-[90vw]"
            initial={{ scale: 0, opacity: 0, y: 50 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0, opacity: 0, y: 50 }}
            transition={{ duration: 0.3, type: "spring" }}
          >
            {/* Header - Elegant, Light Design */}
            <motion.div 
              className="bg-gradient-to-r from-white/95 to-gray-50/95 backdrop-blur-md rounded-t-2xl shadow-2xl border border-white/20 mb-2"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1 }}
            >
              <div className="flex items-center justify-between p-4">
                <div className="flex items-center space-x-3">
                  {/* Eline Holographic Avatar */}
                  <motion.div 
                    className="w-10 h-10 bg-gradient-to-br from-amber-200 via-rose-300 to-purple-400 rounded-full flex items-center justify-center shadow-lg relative overflow-hidden"
                    animate={{ rotate: [0, 5, -5, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <span className="text-xl relative z-10">👩‍💼</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse"></div>
                  </motion.div>
                  
                  <div>
                    <h3 className="font-semibold text-gray-800">Eline</h3>
                    <p className="text-xs text-gray-600">Your AI Assistant</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-2">
                  {/* Voice controls */}
                  <Button
                    onClick={toggleVoiceInput}
                    variant="ghost"
                    size="sm"
                    className={`text-gray-500 hover:text-gray-700 hover:bg-white/50 rounded-full p-2 ${isListening ? 'text-red-500' : ''}`}
                  >
                    {isListening ? <MicOff className="w-4 h-4" /> : <Mic className="w-4 h-4" />}
                  </Button>
                  
                  <Button
                    onClick={() => setIsMuted(!isMuted)}
                    variant="ghost"
                    size="sm"
                    className={`text-gray-500 hover:text-gray-700 hover:bg-white/50 rounded-full p-2 ${isMuted ? 'text-red-500' : ''}`}
                  >
                    {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                  </Button>
                  
                  <Button
                    onClick={() => setIsOpen(false)}
                    variant="ghost"
                    size="sm"
                    className="text-gray-500 hover:text-gray-700 hover:bg-white/50 rounded-full p-2"
                    data-testid="chat-close-button"
                  >
                    <X className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </motion.div>

            {/* Messages Area - Light, Floating */}
            <motion.div 
              className="bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl border border-white/20 max-h-96 overflow-hidden"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <ScrollArea className="h-80 p-4">
                <div className="space-y-4">
                  {messages.map((message) => (
                    <motion.div
                      key={message.id}
                      className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div
                        className={`max-w-[80%] p-3 rounded-2xl ${
                          message.isUser
                            ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg'
                            : 'bg-gradient-to-r from-gray-50 to-gray-100 text-gray-800 shadow-md border border-gray-100'
                        }`}
                      >
                        <p className="text-sm leading-relaxed">{message.text}</p>
                        <p className={`text-xs mt-2 ${message.isUser ? 'text-purple-100' : 'text-gray-500'}`}>
                          {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                  
                  {isTyping && (
                    <motion.div 
                      className="flex justify-start"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                    >
                      <div className="bg-gradient-to-r from-gray-50 to-gray-100 text-gray-800 p-3 rounded-2xl shadow-md border border-gray-100">
                        <div className="flex space-x-1">
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                  
                  <div ref={messagesEndRef} />
                </div>
              </ScrollArea>

              {/* Quick Reply Buttons */}
              {showQuickReplies && messages.length > 1 && (
                <motion.div 
                  className="px-4 pb-2"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <div className="flex flex-wrap gap-2">
                    {getQuickReplies().map((reply) => (
                      <Button
                        key={reply.id}
                        onClick={() => handleQuickReply(reply.action)}
                        variant="outline"
                        size="sm"
                        className="text-xs bg-white/80 hover:bg-purple-50 border-purple-200 hover:border-purple-300 text-purple-700 rounded-full px-3 py-1 h-auto"
                      >
                        {reply.icon}
                        <span className="ml-1">{reply.text}</span>
                      </Button>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Input Area - Light, Elegant */}
              <div className="p-4 border-t border-gray-100/50 bg-gradient-to-r from-gray-50/50 to-white/50">
                <div className="flex space-x-2">
                  <Input
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Ask Eline anything... ✨"
                    className="flex-1 bg-white/80 border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-300 focus:border-transparent shadow-sm"
                    data-testid="chat-input"
                  />
                  <Button
                    onClick={() => handleSendMessage()}
                    disabled={!inputValue.trim() || isTyping}
                    className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-4 rounded-xl shadow-lg hover:shadow-purple-500/25 transition-all duration-300 disabled:opacity-50"
                    data-testid="chat-send-button"
                  >
                    <Send className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}