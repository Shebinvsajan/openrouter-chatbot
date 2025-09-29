# Example Usage

```jsx
import React from 'react';
import { createRoot } from 'react-dom/client';
import { Chatbot } from '../src';

// Example using environment variables (you would set these in your .env file)
const App = () => {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Chatbot Demo</h1>
      <p>This is a demo of the chatbot component.</p>
      
      <Chatbot 
        config={{
          // API Configuration
          apiKey: process.env.OPENROUTER_API_KEY || 'your-api-key-here',
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
            primaryColor: '#3b82f6', // blue-500
            secondaryColor: '#ffffff',
            backgroundColor: '#ffffff',
            textColor: '#000000',
            botMessageColor: '#f1f5f9', // slate-100
            userMessageColor: '#3b82f6' // blue-500
          },
          position: 'bottom-right'
        }}
      />
    </div>
  );
};

const root = createRoot(document.getElementById('root'));
root.render(<App />);
```