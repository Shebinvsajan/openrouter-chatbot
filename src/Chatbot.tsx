import React, { useState, useEffect } from 'react';
import { BotIcon } from './BotIcon';
import { ChatWindow } from './ChatWindow';
import { OpenRouterService } from './OpenRouterService';
import { Message, ChatbotConfig } from './types';

export interface ChatbotProps {
  config: ChatbotConfig;
}

export const Chatbot: React.FC<ChatbotProps> = ({ config }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      text: config.initialMessage || 'Hai! How can I help you?',
      sender: 'bot',
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  
  // Initialize OpenRouter service
  const openRouterService = new OpenRouterService({
    apiKey: config.apiKey,
    modelName: config.modelName,
    companyName: config.companyName,
    websiteUrl: config.websiteUrl,
    companyPhone: config.companyPhone,
    companyEmail: config.companyEmail,
    companyAddress: config.companyAddress,
    supportEmail: config.supportEmail,
    officeHours: config.officeHours,
    companyServices: config.companyServices,
    founderName: config.founderName,
    whatsappNumber: config.whatsappNumber,
    socialMedia: config.socialMedia,
    botName: config.botName
  });
  
  // Theme configuration with defaults
  const theme = {
    primaryColor: config.theme?.primaryColor || '#000000',
    secondaryColor: config.theme?.secondaryColor || '#ffffff',
    backgroundColor: config.theme?.backgroundColor || '#f5f5f5',
    textColor: config.theme?.textColor || '#000000',
    botBackgroundColor: config.theme?.botBackgroundColor || '#ffffff',
    userBackgroundColor: config.theme?.userBackgroundColor || '#000000',
    botTextColor: config.theme?.botTextColor || '#000000',
    userTextColor: config.theme?.userTextColor || '#ffffff',
    botIconBackgroundColor: config.theme?.botIconBackgroundColor || config.theme?.primaryColor || '#000000',
    userIconBackgroundColor: config.theme?.userIconBackgroundColor || config.theme?.secondaryColor || '#ffffff',
    botIconColor: config.theme?.botIconColor || config.theme?.secondaryColor || '#ffffff',
    userIconColor: config.theme?.userIconColor || config.theme?.primaryColor || '#000000'
  };
  
  // Position configuration with default to 'bottom-left'
  const position = config.position || 'bottom-left';
  
  // Bot name with default
  const botName = config.botName || 'Angel';

  // Toggle chat window
  const toggleChat = () => {
    setIsOpen(!isOpen);
    
    // If opening the chat and messages are empty (or only has the initial message), 
    // send a request to get an initial response from the AI
    if (!isOpen && messages.length === 1) {
      getInitialBotResponse();
    }
  };

  // Close chat window
  const closeChat = () => {
    setIsOpen(false);
  };

  // Get initial bot response from the AI
  const getInitialBotResponse = async () => {
    setIsLoading(true);
    
    try {
      // Get response from OpenRouter API with a simple greeting
      const response = await openRouterService.sendMessage([
        {
          text: 'Hello, please provide a friendly greeting to the user',
          sender: 'user',
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        }
      ]);
      
      const botMessage: Message = {
        text: response,
        sender: 'bot',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      
      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      console.error('Error getting initial response from OpenRouter:', error);
      
      const errorMessage: Message = {
        text: 'Sorry, I encountered an error while processing your request. Please try again.',
        sender: 'bot',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  // Handle sending a message
  const handleSendMessage = async (text: string) => {
    // Add user message
    const userMessage: Message = {
      text,
      sender: 'user',
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
    
    setMessages(prev => [...prev, userMessage]);
    setIsLoading(true);

    try {
      // Get response from OpenRouter API
      const response = await openRouterService.sendMessage([...messages, userMessage]);
      
      const botMessage: Message = {
        text: response,
        sender: 'bot',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      
      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      console.error('Error getting response from OpenRouter:', error);
      
      const errorMessage: Message = {
        text: 'Sorry, I encountered an error while processing your request. Please try again.',
        sender: 'bot',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  // Handle keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  return (
    <>
      <BotIcon 
        onClick={toggleChat} 
        position={position}
        theme={{
          primaryColor: theme.primaryColor,
          secondaryColor: theme.secondaryColor
        }}
        icon={config.icon}
      />
      <ChatWindow 
        isOpen={isOpen}
        onClose={closeChat}
        messages={messages}
        onSendMessage={handleSendMessage}
        isLoading={isLoading}
        position={position}
        theme={theme}
        botName={botName}
        botIcon={config.botIcon}
        userIcon={config.userIcon}
      />
    </>
  );
};