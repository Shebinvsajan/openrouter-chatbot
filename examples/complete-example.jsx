import React from 'react';
import { Chatbot } from '@vite-project/chatbot';
import { MessageCircle, User, Bot } from 'lucide-react';

// Example usage of the chatbot component with all customization options
const ChatbotExample = () => {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Chatbot Example</h1>
      <p>This is an example of how to use the chatbot component with all customization options.</p>
      
      <Chatbot 
        config={{
          // API Configuration
          apiKey: 'your-openrouter-api-key',
          modelName: 'x-ai/grok-4-fast:free',
          
          // Company Information
          companyName: 'Acme Inc',
          websiteUrl: 'https://acmeinc.com',
          companyPhone: '+1 (555) 123-4567',
          companyEmail: 'info@acmeinc.com',
          companyAddress: '123 Main St, City, State 12345',
          supportEmail: 'support@acmeinc.com',
          officeHours: 'Mon-Fri 9am-5pm EST',
          companyServices: 'Web Development, Design, Marketing',
          founderName: 'John Doe',
          whatsappNumber: '+1 (555) 123-4567',
          socialMedia: '@acmeinc',
          
          // Bot Configuration
          botName: 'Support Bot',
          initialMessage: 'Hi there! How can I help you today?',
          
          // UI Customization
          theme: {
            primaryColor: '#3b82f6',        // Blue primary color
            secondaryColor: '#ffffff',       // White secondary color
            backgroundColor: '#f8fafc',      // Light gray background
            textColor: '#000000',            // Black text
            botBackgroundColor: '#ffffff',   // White bot messages
            userBackgroundColor: '#3b82f6',  // Blue user messages
            botTextColor: '#000000',         // Black bot text
            userTextColor: '#ffffff'         // White user text
          },
          position: 'bottom-right',           // Position the chatbot on the right
          icon: <MessageCircle size={24} />,  // Custom icon for the chatbot button
          botIcon: <Bot size={16} />,         // Custom icon for bot messages
          userIcon: <User size={16} />        // Custom icon for user messages
        }}
      />
    </div>
  );
};

export default ChatbotExample;