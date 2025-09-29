import React from 'react';
import { Chatbot } from '@vite-project/chatbot';

// Simple example usage of the chatbot component
const SimpleChatbotExample = () => {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Simple Chatbot Example</h1>
      <p>This is a simple example of how to use the chatbot component with minimal configuration.</p>
      
      <Chatbot 
        config={{
          // Required API Configuration
          apiKey: 'your-openrouter-api-key',
          
          // Required Company Information
          companyName: 'Acme Inc',
          
          // Optional Bot Configuration
          botName: 'Support Bot',
          initialMessage: 'Hi there! How can I help you today?',
          
          // Optional UI Customization
          theme: {
            primaryColor: '#3b82f6',        // Blue primary color
            secondaryColor: '#ffffff',       // White secondary color
          },
          position: 'bottom-right'           // Position the chatbot on the right
        }}
      />
    </div>
  );
};

export default SimpleChatbotExample;