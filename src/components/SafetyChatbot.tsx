
import React, { useState } from 'react';
import { Bot, Send, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface Message {
  id: string;
  text: string;
  isBot: boolean;
  timestamp: Date;
}

const SafetyChatbot = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hi! I'm your safety assistant. I can help you with emergency procedures, safety tips, and guidance for various situations. How can I help you stay safe today?",
      isBot: true,
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const safetyResponses: { [key: string]: string } = {
    'unsafe walking': "Stay alert, stick to well-lit areas, walk confidently, share your location with trusted contacts, avoid distractions like phones, and trust your instincts. Consider using our SOS feature if you feel threatened.",
    'emergency contact': "Always have emergency contacts saved in your phone. Set up our app's emergency contact feature to quickly alert trusted people. Include local police (911), trusted family/friends, and workplace security if applicable.",
    'suspicious person': "Trust your instincts. Move to a populated area, don't engage, and call authorities if you feel threatened. Use our SOS button if immediate help is needed. Stay aware of exits and safe spaces.",
    'safe transportation': "Use verified ride services, share trip details with contacts, sit behind the driver, stay alert during rides, and trust your instincts. For public transport, stay near other passengers and avoid isolated areas.",
    'workplace safety': "Report harassment immediately, document incidents, know your company's safety policies, identify trusted colleagues, and use our emergency features if you feel unsafe at work.",
    'home security': "Lock doors and windows, use security systems, be cautious of unexpected visitors, have emergency contacts readily available, and consider our location sharing feature with trusted contacts.",
    'online safety': "Protect personal information, be cautious of strangers online, use strong passwords, report harassment, and never share location details publicly on social media.",
    'self defense': "Take self-defense classes, carry legal protection devices, stay aware of surroundings, practice escape routes, and remember our SOS feature for immediate help.",
    'dating safety': "Meet in public places, tell someone your plans, trust your instincts, have your own transportation, and keep our emergency contacts updated.",
    'sos button': "Our SOS button immediately alerts your emergency contacts and shares your location. Press and hold for 3 seconds to activate. It can also contact local authorities if configured."
  };

  const getBotResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase();
    
    for (const [key, response] of Object.entries(safetyResponses)) {
      if (message.includes(key) || key.split(' ').some(word => message.includes(word))) {
        return response;
      }
    }

    // Default responses for common safety questions
    if (message.includes('help') || message.includes('scared') || message.includes('danger')) {
      return "I'm here to help. If you're in immediate danger, call 911 or use our SOS button. For general safety guidance, I can help with walking safety, emergency contacts, suspicious situations, and more. What specific situation are you concerned about?";
    }
    
    if (message.includes('emergency') || message.includes('911')) {
      return "In a true emergency, always call 911 first. Our SOS button can also quickly alert your personal emergency contacts and share your location. For non-emergency safety guidance, I'm here to help with prevention and safety tips.";
    }

    return "I can help you with safety guidance on topics like: walking alone safely, emergency contacts, handling suspicious situations, transportation safety, workplace safety, home security, online safety, self-defense tips, and dating safety. What would you like to know about?";
  };

  const sendMessage = () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      isBot: false,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate bot thinking time
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: getBotResponse(inputValue),
        isBot: true,
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      sendMessage();
    }
  };

  return (
    <Card className="bg-gradient-to-br from-purple-50 to-pink-50 border-2 border-purple-200 shadow-xl max-w-4xl mx-auto">
      <CardHeader className="text-center">
        <div className="w-24 h-24 mx-auto bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mb-4">
          <Bot className="h-12 w-12 text-white" />
        </div>
        <CardTitle className="text-2xl font-bold text-gray-800">Safety Guidance Chatbot</CardTitle>
        <p className="text-gray-600">Ask me about safety procedures, emergency guidance, and protection tips</p>
      </CardHeader>
      <CardContent>
        <div className="bg-white rounded-lg h-96 flex flex-col">
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex items-start space-x-3 ${message.isBot ? '' : 'justify-end'}`}
              >
                {message.isBot && (
                  <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <Bot className="h-4 w-4 text-white" />
                  </div>
                )}
                <div className={`rounded-lg p-3 max-w-xs lg:max-w-md ${
                  message.isBot 
                    ? 'bg-purple-100 text-gray-800' 
                    : 'bg-pink-500 text-white'
                }`}>
                  <p className="text-sm">{message.text}</p>
                </div>
                {!message.isBot && (
                  <div className="w-8 h-8 bg-pink-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <User className="h-4 w-4 text-white" />
                  </div>
                )}
              </div>
            ))}
            {isTyping && (
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center">
                  <Bot className="h-4 w-4 text-white" />
                </div>
                <div className="bg-purple-100 rounded-lg p-3">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className="border-t p-4">
            <div className="flex space-x-2">
              <Input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask about safety situations..."
                className="flex-1 border-purple-200 focus:border-purple-500 focus:ring-purple-500"
              />
              <Button
                onClick={sendMessage}
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white"
              >
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default SafetyChatbot;
