import React from 'react';
import { Chatbot } from './src/Chatbot';
import { MessageCircle, User, Bot } from 'lucide-react';

// Test file to verify custom icons and different backgrounds work correctly
const TestCustomIcons = () => {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Custom Icons Test</h1>
      <p>Testing that bot and user icons have different backgrounds, and custom icons are visible</p>
      
      <Chatbot 
        config={{
          // API Configuration (use a dummy key for testing)
          apiKey: 'test-key',
          
          // Company Information
          companyName: 'Test Company',
          
          // Bot Configuration
          botName: 'Test Bot',
          initialMessage: 'Hello! This is a test of custom icons.',
          
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

export default TestCustomIcons;