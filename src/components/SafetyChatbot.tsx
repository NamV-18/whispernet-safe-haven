
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
      text: "Hi! I'm your comprehensive women's safety assistant. I can help you with safety advice, emergency procedures, self-defense tips, digital safety, workplace harassment, domestic violence resources, and much more. What safety topic would you like to discuss?",
      isBot: true,
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const safetyKnowledge = {
    // Personal Safety
    'walking alone': "When walking alone: Stay alert and confident, avoid distractions like phones/headphones, stick to well-lit populated areas, trust your instincts, share your location with trusted contacts, carry a whistle or personal alarm, and have emergency contacts ready. If you feel followed, go to a public place and call for help.",
    
    'night safety': "For night safety: Plan your route in advance, use well-lit streets, avoid shortcuts through dark areas, stay near other people when possible, keep your phone charged, inform someone of your plans, consider ride-sharing over walking, and always trust your instincts about dangerous situations.",
    
    'public transport': "On public transport: Sit near the driver or conductor, stay alert, keep belongings secure, avoid empty carriages late at night, have your ticket/pass ready, know your stops, sit near exits when possible, and trust your instincts about other passengers.",
    
    'dating safety': "For safe dating: Meet in public places, drive yourself or arrange your own transport, tell a friend your plans and check in regularly, trust your gut feelings, don't leave drinks unattended, meet during daylight for first dates, video chat before meeting, and keep first dates short.",
    
    // Self Defense
    'self defense': "Self-defense basics: Target vulnerable spots (eyes, nose, groin, instep), use your voice loudly, escape is always the goal not fighting, carry legal self-defense tools, take a self-defense class, practice situational awareness, learn basic strikes (palm heel, knee, elbow), and remember that anything can be a weapon in emergency.",
    
    'escape techniques': "Escape techniques: If grabbed, go limp then explode into action, stomp on attacker's foot, elbow to ribs or stomach, if choked from behind duck and turn, create noise and distance, run toward people and lights, and remember - your safety is worth more than any possession.",
    
    // Digital Safety
    'online safety': "Online safety: Use strong unique passwords, enable two-factor authentication, be cautious of oversharing location/personal info, report cyberbullying/harassment, use privacy settings on social media, be wary of unknown friend requests, never meet online strangers alone, and keep software updated.",
    
    'social media': "Social media safety: Review privacy settings regularly, don't post real-time locations, be selective about friend requests, avoid sharing personal information publicly, report inappropriate behavior, use platform blocking features, and remember that posts can be permanent even if deleted.",
    
    'cyberstalking': "If experiencing cyberstalking: Document everything (screenshots, messages), don't engage with the stalker, block on all platforms, report to platform administrators, change passwords and security questions, consider temporary social media breaks, and contact police if threats are made.",
    
    // Workplace Safety
    'workplace harassment': "For workplace harassment: Document incidents with dates and details, report to HR or supervisors, know your company's policies, save evidence (emails, messages), seek support from trusted colleagues, consider consulting employment lawyers, and remember it's not your fault.",
    
    'workplace safety': "General workplace safety: Know emergency exits and procedures, report safety hazards, trust your instincts about people, avoid working alone late, keep personal items secure, be cautious in parking areas, and maintain professional boundaries.",
    
    // Home Safety
    'home security': "Home security: Always lock doors and windows, install good lighting outside, use peepholes or security cameras, don't open doors to strangers, vary your routine, secure sliding doors, trim bushes near windows, and consider security systems or motion lights.",
    
    'apartment safety': "Apartment safety: Get to know trustworthy neighbors, check locks and security features before moving in, be cautious in laundry rooms and parking areas, don't buzz in unknown visitors, use the buddy system when possible, and report broken security features immediately.",
    
    // Domestic Violence
    'domestic violence': "For domestic violence: You're not alone and it's not your fault. Contact National Domestic Violence Hotline: 1-800-799-7233. Create a safety plan, document abuse, keep important documents safe, identify safe places to go, and reach out to trusted friends/family. Professional help is available 24/7.",
    
    'abusive relationship': "Signs of abuse include: controlling behavior, isolation from friends/family, verbal threats, physical violence, financial control, extreme jealousy, and destroying your belongings. If you recognize these signs, reach out for help. National resources and local shelters provide confidential support.",
    
    // Travel Safety
    'travel safety': "Travel safety: Research destinations beforehand, share itinerary with trusted contacts, keep copies of important documents, stay in reputable accommodations, be cautious with strangers, avoid displaying expensive items, trust local women's advice, and have emergency contacts for each location.",
    
    'hotel safety': "Hotel safety: Check locks and security features, use deadbolts and chain locks, don't open doors for unexpected visitors, keep curtains closed, avoid ground floor rooms when possible, and be aware of exit routes.",
    
    // Emergency Response
    'emergency contacts': "Set up emergency contacts: Program ICE (In Case of Emergency) contacts in your phone, share locations with trusted people, set up family/friend check-in systems, know local emergency numbers, consider safety apps with emergency features, and register with local police if needed.",
    
    'emergency plan': "Create an emergency plan: Identify safe locations (friends, family, shelters), keep emergency cash and documents ready, plan escape routes from home/work, practice scenarios, teach children basic safety, and review/update plans regularly.",
    
    // Specific Threats
    'stalking': "If being stalked: Document everything, don't confront the stalker, vary your routines, inform trusted people, consider restraining orders, enhance home/work security, save all evidence, and contact law enforcement. Stalking is a serious crime.",
    
    'stranger danger': "Stranger safety: Trust your instincts, maintain distance from aggressive strangers, don't provide personal information, avoid isolated areas with unknown people, use the buddy system, and remember that predators often seem charming initially.",
    
    // Mental Health & Support
    'trauma support': "After trauma: Seek professional counseling, connect with support groups, practice self-care, be patient with healing, consider EMDR or trauma therapy, maintain routines when possible, and remember that healing isn't linear. You deserve support and care.",
    
    'confidence building': "Building confidence: Take self-defense classes, practice assertiveness, trust your intuition, set boundaries, learn new skills, surround yourself with supportive people, celebrate small victories, and remember that confidence is a skill that can be developed."
  };

  const getBotResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase();
    
    // Direct keyword matching
    for (const [keywords, response] of Object.entries(safetyKnowledge)) {
      const keywordList = keywords.split(' ');
      if (keywordList.every(keyword => message.includes(keyword)) || 
          keywordList.some(keyword => message.includes(keyword) && keyword.length > 4)) {
        return response;
      }
    }

    // Emergency situations
    if (message.includes('emergency') || message.includes('danger') || message.includes('help') || message.includes('scared')) {
      return "If you're in immediate danger, call 911 or your local emergency number right away. For ongoing safety concerns, I can help with: personal safety tips, self-defense advice, domestic violence resources, workplace harassment guidance, online safety, travel precautions, and emergency planning. What specific situation are you dealing with?";
    }

    // Abuse-related keywords
    if (message.includes('abuse') || message.includes('violent') || message.includes('hurt') || message.includes('controlling')) {
      return "I'm concerned about your safety. If you're experiencing abuse, please know it's not your fault and help is available. National Domestic Violence Hotline: 1-800-799-7233 (24/7, confidential). I can also provide safety planning advice, local resources, and support information. Your safety and wellbeing matter.";
    }

    // Fear or anxiety related
    if (message.includes('afraid') || message.includes('worried') || message.includes('anxious') || message.includes('fear')) {
      return "It's completely normal to have safety concerns. I can help you develop confidence and practical safety skills. I can provide guidance on personal safety, self-defense, situational awareness, emergency planning, and building support networks. What specific situations make you feel unsafe?";
    }

    // General safety topics
    if (message.includes('safety') || message.includes('safe') || message.includes('security')) {
      return "I can help with many aspects of women's safety including: personal safety while walking/traveling, self-defense techniques, home and workplace security, online/digital safety, dating safely, emergency planning, domestic violence resources, and building confidence. What specific area would you like to focus on?";
    }

    // Default comprehensive response
    return "I'm here to help with all aspects of women's safety and security. I can provide guidance on:\n\n• Personal safety (walking alone, night safety, public transport)\n• Self-defense and escape techniques\n• Digital/online safety and cybersecurity\n• Workplace harassment and safety\n• Home and travel security\n• Dating and relationship safety\n• Domestic violence resources and support\n• Emergency planning and response\n• Building confidence and awareness\n\nWhat specific topic would you like to discuss? Feel free to ask about any safety situation or concern.";
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
    }, 1500);
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
        <CardTitle className="text-2xl font-bold text-gray-800">Women's Safety Assistant</CardTitle>
        <p className="text-gray-600">Comprehensive guidance on personal safety, self-defense, emergency response, and security</p>
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
                <div className={`rounded-lg p-3 max-w-xs lg:max-w-md whitespace-pre-line ${
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
                placeholder="Ask about safety, self-defense, emergencies, or any security concern..."
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
