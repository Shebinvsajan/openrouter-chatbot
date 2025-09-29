import React from 'react';

export interface Message {
  text: string;
  sender: 'user' | 'bot';
  timestamp: string;
}

export interface ChatbotConfig {
  // API Configuration
  apiKey: string;
  modelName?: string;
  
  // Company Information
  companyName: string;
  websiteUrl?: string;
  companyPhone?: string;
  companyEmail?: string;
  companyAddress?: string;
  supportEmail?: string;
  officeHours?: string;
  companyServices?: string;
  founderName?: string;
  whatsappNumber?: string;
  socialMedia?: string;
  
  // Bot Configuration
  botName?: string;
  initialMessage?: string;
  
  // UI Customization
  theme?: {
    primaryColor?: string;
    secondaryColor?: string;
    backgroundColor?: string;
    textColor?: string;
    botBackgroundColor?: string;
    userBackgroundColor?: string;
    botTextColor?: string;
    userTextColor?: string;
    botIconBackgroundColor?: string;
    userIconBackgroundColor?: string;
    botIconColor?: string;
    userIconColor?: string;
  };
  position?: 'bottom-right' | 'bottom-left';
  icon?: React.ReactNode;
  botIcon?: React.ReactNode;
  userIcon?: React.ReactNode;
}