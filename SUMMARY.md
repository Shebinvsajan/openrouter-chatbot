# openrouter-chatbot - Summary

## Package Overview

This package provides a fully customizable AI chatbot component for React applications that integrates with OpenRouter API. The chatbot can be easily configured with custom themes, positions, and company information.

## Key Features

1. **Easy Integration**: Simple to add to any React application
2. **Fully Customizable**: Theme, colors, positioning, and icons
3. **AI Powered**: Integrates with OpenRouter API for intelligent responses
4. **Responsive Design**: Works on all device sizes
5. **TypeScript Support**: Written in TypeScript with full type definitions

## Package Structure

```
chatbot-npm/
├── dist/
│   ├── esm/           # ES Modules build
│   └── cjs/           # CommonJS build
├── src/               # Source code
│   ├── BotIcon.tsx
│   ├── Chatbot.tsx
│   ├── ChatWindow.tsx
│   ├── MessageBubble.tsx
│   ├── OpenRouterService.ts
│   ├── index.ts
│   └── types.ts
├── package.json
├── README.md
├── tsconfig.json
├── tsconfig.esm.json
└── tsconfig.cjs.json
```

## Installation

```bash
npm install openrouter-chatbot
```

## Usage

```jsx
import React from 'react';
import { Chatbot } from 'openrouter-chatbot';

function App() {
  return (
    <div className="App">
      <h1>My Website</h1>
      <p>Welcome to my website!</p>
      
      <Chatbot 
        config={{
          // API Configuration
          apiKey: 'your-openrouter-api-key',
          modelName: 'x-ai/grok-4-fast:free', // Optional, defaults to this model
          
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
            primaryColor: '#000000',
            secondaryColor: '#ffffff',
            backgroundColor: '#ffffff',
            textColor: '#000000',
            botMessageColor: '#f1f1f1',
            userMessageColor: '#000000'
          },
          position: 'bottom-right', // or 'bottom-left'
          // icon: <YourCustomIcon /> // Optional custom icon
        }}
      />
    </div>
  );
}

export default App;
```

## Configuration Options

### API Configuration
- `apiKey` (string, required): Your OpenRouter API key
- `modelName` (string, optional): AI model to use (defaults to 'x-ai/grok-4-fast:free')

### Company Information
- `companyName` (string, required): Your company name
- `websiteUrl` (string, optional): Your company website URL
- `companyPhone` (string, optional): Company phone number
- `companyEmail` (string, optional): Company email address
- `companyAddress` (string, optional): Company physical address
- `supportEmail` (string, optional): Support email address
- `officeHours` (string, optional): Office hours
- `companyServices` (string, optional): Services offered by your company
- `founderName` (string, optional): Founder/CEO name
- `whatsappNumber` (string, optional): WhatsApp contact number
- `socialMedia` (string, optional): Social media handles

### Bot Configuration
- `botName` (string, optional): Name of the bot (defaults to 'Angel')
- `initialMessage` (string, optional): Initial greeting message (defaults to 'Hai! How can I help you?')

### UI Customization
- `theme` (object, optional): Theme configuration object
- `position` (string, optional): Position of the chatbot ('bottom-right' or 'bottom-left', defaults to 'bottom-right')
- `icon` (ReactNode, optional): Custom icon for the chatbot button

### Theme Object Properties
- `primaryColor` (string, optional): Primary color for buttons and accents (defaults to '#000000')
- `secondaryColor` (string, optional): Secondary color (usually text color on primary buttons, defaults to '#ffffff')
- `backgroundColor` (string, optional): Background color of the chat window (defaults to '#ffffff')
- `textColor` (string, optional): Text color (defaults to '#000000')
- `botMessageColor` (string, optional): Background color for bot messages (defaults to '#f1f1f1')
- `userMessageColor` (string, optional): Background color for user messages (defaults to '#000000')

## Build Process

The package is built with TypeScript and provides both ES Modules and CommonJS builds:

```bash
# Build both ESM and CJS
npm run build

# Build only ESM
npm run build:esm

# Build only CJS
npm run build:cjs
```

## Styling

The chatbot uses minimal inline styles and can be customized through the theme configuration. For more advanced styling, you can override the default styles by targeting the chatbot components in your CSS.

## License

MIT

## Support

For support, please open an issue on the GitHub repository.