
import React, { useState } from 'react';
import { Phone, Shield, MapPin, Bot, Users, MessageSquare, Mail, Facebook, Twitter, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    emergencyContact: ''
  });
  const { toast } = useToast();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsMenuOpen(false);
  };

  const handleSOSClick = () => {
    toast({
      title: "🚨 SOS Alert Activated",
      description: "Emergency services have been notified. Stay safe!",
      className: "border-red-500 bg-red-50"
    });
  };

  const handleFeatureClick = (feature: string) => {
    toast({
      title: `${feature} Activated`,
      description: `${feature} feature is now active.`,
      className: "border-purple-500 bg-purple-50"
    });
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Registration Successful! 🎉",
      description: "Welcome to Whispernet! Your safety is our priority.",
      className: "border-green-500 bg-green-50"
    });
    setFormData({ name: '', email: '', phone: '', emergencyContact: '' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-indigo-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md shadow-lg z-50 border-b border-purple-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Shield className="h-8 w-8 text-purple-600" />
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Whispernet
              </span>
            </div>
            
            <div className="hidden md:flex space-x-8">
              {[
                { name: 'About Us', id: 'about' },
                { name: 'SOS Button', id: 'sos' },
                { name: 'Features', id: 'features' },
                { name: 'Chat Bot', id: 'chatbot' },
                { name: 'Contact Us', id: 'contact' }
              ].map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.id)}
                  className="text-gray-700 hover:text-purple-600 font-medium transition-colors duration-200 hover:scale-105"
                >
                  {item.name}
                </button>
              ))}
            </div>

            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <div className="w-6 h-6 flex flex-col justify-center items-center">
                <span className={`block w-6 h-0.5 bg-gray-600 transition-transform duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1' : ''}`}></span>
                <span className={`block w-6 h-0.5 bg-gray-600 transition-opacity duration-300 ${isMenuOpen ? 'opacity-0' : 'opacity-100'} mt-1`}></span>
                <span className={`block w-6 h-0.5 bg-gray-600 transition-transform duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1' : ''} mt-1`}></span>
              </div>
            </button>
          </div>

          {isMenuOpen && (
            <div className="md:hidden bg-white rounded-lg mt-2 p-4 shadow-lg border border-purple-100">
              {[
                { name: 'About Us', id: 'about' },
                { name: 'SOS Button', id: 'sos' },
                { name: 'Features', id: 'features' },
                { name: 'Chat Bot', id: 'chatbot' },
                { name: 'Contact Us', id: 'contact' }
              ].map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left py-2 text-gray-700 hover:text-purple-600 font-medium"
                >
                  {item.name}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 bg-clip-text text-transparent animate-fade-in">
            Your Safety, Our Priority
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto animate-fade-in">
            Empowering women with cutting-edge safety technology for a more secure tomorrow
          </p>
          <Button 
            onClick={() => scrollToSection('sos')}
            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 text-lg rounded-full transition-all duration-300 hover:scale-105 shadow-lg"
          >
            Get Started
          </Button>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-16 px-4 bg-white/50 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              About Whispernet
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto mb-8 rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                Whispernet is dedicated to ensuring the safety and security of women. Our innovative app provides essential tools and resources to address various emergency situations efficiently.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                We believe every woman deserves to feel safe and empowered. Through technology, community, and education, we're creating a world where safety is never a concern.
              </p>
              <div className="grid grid-cols-2 gap-4 pt-6">
                <div className="text-center p-4 bg-gradient-to-br from-purple-100 to-pink-100 rounded-lg">
                  <div className="text-2xl font-bold text-purple-600">24/7</div>
                  <div className="text-sm text-gray-600">Support Available</div>
                </div>
                <div className="text-center p-4 bg-gradient-to-br from-purple-100 to-pink-100 rounded-lg">
                  <div className="text-2xl font-bold text-purple-600">100K+</div>
                  <div className="text-sm text-gray-600">Women Protected</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-purple-400 to-pink-400 rounded-3xl flex items-center justify-center">
                <Shield className="h-32 w-32 text-white" />
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-indigo-400 to-purple-400 rounded-full flex items-center justify-center">
                <Users className="h-12 w-12 text-white" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SOS Button Section */}
      <section id="sos" className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text text-transparent">
            Emergency SOS
          </h2>
          <p className="text-xl text-gray-600 mb-12">
            In case of emergency, press the SOS button to immediately alert emergency contacts and services
          </p>
          
          <div className="relative inline-block">
            <button
              onClick={handleSOSClick}
              className="w-48 h-48 bg-gradient-to-br from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white rounded-full text-2xl font-bold shadow-2xl transition-all duration-300 hover:scale-110 relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-white opacity-20 rounded-full animate-pulse"></div>
              <span className="relative z-10">SOS</span>
              <Phone className="h-12 w-12 mx-auto mt-2 relative z-10" />
            </button>
            <div className="absolute inset-0 rounded-full border-4 border-red-300 animate-ping"></div>
          </div>
          
          <p className="text-sm text-gray-500 mt-8 max-w-md mx-auto">
            This button will send your location to emergency contacts and notify local authorities
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 px-4 bg-white/50 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Safety Features
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto mb-8 rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Nearest Bluetooth Connect",
                icon: <Shield className="h-12 w-12" />,
                description: "Connect with nearby safety devices instantly",
                gradient: "from-blue-400 to-blue-600"
              },
              {
                title: "SOS Emergency",
                icon: <Phone className="h-12 w-12" />,
                description: "One-tap emergency alert system",
                gradient: "from-red-400 to-red-600"
              },
              {
                title: "Live Location Tracker",
                icon: <MapPin className="h-12 w-12" />,
                description: "Real-time location sharing with trusted contacts",
                gradient: "from-green-400 to-green-600"
              },
              {
                title: "Fake Call Simulator",
                icon: <MessageSquare className="h-12 w-12" />,
                description: "Simulate calls to escape uncomfortable situations",
                gradient: "from-purple-400 to-purple-600"
              }
            ].map((feature, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer border-2 border-transparent hover:border-purple-200">
                <CardHeader className="text-center">
                  <div className={`w-20 h-20 mx-auto bg-gradient-to-br ${feature.gradient} rounded-full flex items-center justify-center text-white mb-4`}>
                    {feature.icon}
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-800">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-600 mb-4">{feature.description}</p>
                  <Button 
                    onClick={() => handleFeatureClick(feature.title)}
                    className={`bg-gradient-to-r ${feature.gradient} hover:opacity-90 text-white w-full`}
                  >
                    Activate
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Chat Bot Section */}
      <section id="chatbot" className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Safety Assistant Bot
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto mb-8 rounded-full"></div>
          </div>
          
          <Card className="bg-gradient-to-br from-purple-50 to-pink-50 border-2 border-purple-200 shadow-xl">
            <CardHeader className="text-center">
              <div className="w-24 h-24 mx-auto bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mb-4">
                <Bot className="h-12 w-12 text-white" />
              </div>
              <CardTitle className="text-2xl font-bold text-gray-800">Safety Guidance Chatbot</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-center text-gray-600 text-lg">
                Our AI-powered chatbot provides instant guidance on safety situations, emergency procedures, and self-defense techniques.
              </p>
              
              <div className="bg-white rounded-lg p-6 space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center">
                    <Bot className="h-4 w-4 text-white" />
                  </div>
                  <div className="bg-purple-100 rounded-lg p-3 flex-1">
                    <p className="text-sm">Hi! I'm your safety assistant. I can help you with emergency procedures, safety tips, and more. How can I assist you today?</p>
                  </div>
                </div>
                
                <div className="flex items-end space-x-3 justify-end">
                  <div className="bg-pink-100 rounded-lg p-3 max-w-xs">
                    <p className="text-sm">What should I do if I feel unsafe walking alone?</p>
                  </div>
                  <div className="w-8 h-8 bg-pink-500 rounded-full flex items-center justify-center">
                    <Users className="h-4 w-4 text-white" />
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center">
                    <Bot className="h-4 w-4 text-white" />
                  </div>
                  <div className="bg-purple-100 rounded-lg p-3 flex-1">
                    <p className="text-sm">Stay alert, stick to well-lit areas, share your location with trusted contacts, and consider using our SOS feature. Would you like more specific safety tips?</p>
                  </div>
                </div>
              </div>
              
              <div className="text-center">
                <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-3">
                  Start Chat
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Register Section */}
      <section id="register" className="py-16 px-4 bg-white/50 backdrop-blur-sm">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Register With Us
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto mb-8 rounded-full"></div>
            <p className="text-lg text-gray-600">Join our community and take the first step towards enhanced safety</p>
          </div>
          
          <Card className="shadow-xl border-2 border-purple-100">
            <CardContent className="p-8">
              <form onSubmit={handleFormSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                  <Input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full border-purple-200 focus:border-purple-500 focus:ring-purple-500"
                    placeholder="Enter your full name"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                  <Input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full border-purple-200 focus:border-purple-500 focus:ring-purple-500"
                    placeholder="Enter your email"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                  <Input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="w-full border-purple-200 focus:border-purple-500 focus:ring-purple-500"
                    placeholder="Enter your phone number"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Emergency Contact</label>
                  <Input
                    type="tel"
                    value={formData.emergencyContact}
                    onChange={(e) => setFormData({...formData, emergencyContact: e.target.value})}
                    className="w-full border-purple-200 focus:border-purple-500 focus:ring-purple-500"
                    placeholder="Emergency contact number"
                    required
                  />
                </div>
                
                <Button 
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white py-3 text-lg"
                >
                  Register Now
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 bg-gradient-to-br from-purple-900 to-pink-900 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto mb-8 rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">Emergency Hotline</h3>
              <p className="text-purple-200">24/7 Available</p>
              <p className="text-lg font-semibold">1-800-SAFE-NET</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">Email Support</h3>
              <p className="text-purple-200">Get help via email</p>
              <p className="text-lg font-semibold">support@whispernet.com</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">Office Location</h3>
              <p className="text-purple-200">Visit our headquarters</p>
              <p className="text-lg font-semibold">123 Safety Street, NYC</p>
            </div>
          </div>
          
          <div className="text-center border-t border-purple-700 pt-8">
            <div className="flex justify-center space-x-6 mb-6">
              <Facebook className="h-6 w-6 hover:text-purple-300 cursor-pointer transition-colors" />
              <Twitter className="h-6 w-6 hover:text-purple-300 cursor-pointer transition-colors" />
              <Instagram className="h-6 w-6 hover:text-purple-300 cursor-pointer transition-colors" />
            </div>
            <p className="text-purple-200">
              &copy; 2024 Whispernet. All rights reserved. Empowering women's safety through technology.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
