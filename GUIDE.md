# openrouter-chatbot - Complete Guide & Tutorial

## Table of Contents
1. [Introduction](#introduction)
2. [Installation](#installation)
3. [Basic Usage](#basic-usage)
4. [Configuration Options](#configuration-options)
5. [Advanced Customization](#advanced-customization)
6. [Theming Guide](#theming-guide)
7. [Best Practices](#best-practices)
8. [Troubleshooting](#troubleshooting)
9. [Examples](#examples)
10. [OpenRouter Integration](#openrouter-integration)

## Introduction

The `openrouter-chatbot` is a fully customizable AI-powered chatbot component for React applications. It integrates with the OpenRouter API to provide intelligent responses and can be easily customized with themes, positions, and company information.

### Key Features
- **Easy Integration**: Simple to add to any React application
- **Fully Customizable**: Theme, colors, positioning, and icons
- **AI Powered**: Integrates with OpenRouter API for intelligent responses
- **Responsive Design**: Works on all device sizes
- **TypeScript Support**: Written in TypeScript with full type definitions
- **Modern Architecture**: Built with React hooks and TypeScript

## Installation

Install the package using npm:

```bash
npm install openrouter-chatbot
```

Or using yarn:

```bash
yarn add openrouter-chatbot
```

## Basic Usage

Here's a minimal example to get started:

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
          // Required API Configuration
          apiKey: 'your-openrouter-api-key',
          
          // Required Company Information
          companyName: 'Acme Inc',
          
          // Optional Bot Configuration
          botName: 'Support Bot',
          initialMessage: 'Hi there! How can I help you today?',
        }}
      />
    </div>
  );
}

export default App;
```

## Configuration Options

The chatbot component accepts a `config` object with the following properties:

### API Configuration
| Property | Type | Required | Default | Description |
|----------|------|----------|---------|-------------|
| apiKey | string | Yes | - | Your OpenRouter API key |
| modelName | string | No | 'x-ai/grok-4-fast:free' | AI model to use for responses |

### Company Information (Required)
| Property | Type | Required | Default | Description |
|----------|------|----------|---------|-------------|
| companyName | string | Yes | - | Your company name |

### Company Information (Optional)
| Property | Type | Required | Default | Description |
|----------|------|----------|---------|-------------|
| websiteUrl | string | No | - | Your company website URL |
| companyPhone | string | No | - | Company phone number |
| companyEmail | string | No | - | Company email address |
| companyAddress | string | No | - | Company physical address |
| supportEmail | string | No | - | Support email address |
| officeHours | string | No | - | Office hours |
| companyServices | string | No | - | Services offered by your company |
| founderName | string | No | - | Founder/CEO name |
| whatsappNumber | string | No | - | WhatsApp contact number |
| socialMedia | string | No | - | Social media handles |

### Bot Configuration
| Property | Type | Required | Default | Description |
|----------|------|----------|---------|-------------|
| botName | string | No | 'Angel' | Name of the chatbot |
| initialMessage | string | No | 'Hai! How can I help you?' | Initial greeting message |

### UI Customization
| Property | Type | Required | Default | Description |
|----------|------|----------|---------|-------------|
| theme | object | No | - | Theme configuration object |
| position | 'bottom-right' \| 'bottom-left' | No | 'bottom-right' | Position of the chatbot button |
| icon | ReactNode | No | default icon | Custom icon for the chatbot button |
| botIcon | ReactNode | No | default bot icon | Custom icon for bot messages |
| userIcon | ReactNode | No | default user icon | Custom icon for user messages |

## Advanced Customization

### Custom Icons

You can customize the icons used in the chatbot:

```jsx
import { Bot, User, MessageCircle } from 'lucide-react';

<Chatbot 
  config={{
    apiKey: 'your-api-key',
    companyName: 'Acme Inc',
    
    // Custom button icon
    icon: <MessageCircle size={24} />,
    
    // Custom bot message icon
    botIcon: <Bot size={16} color="#3b82f6" />,
    
    // Custom user message icon
    userIcon: <User size={16} color="#ffffff" />,
  }}
/>
```

### Positioning

Control where the chatbot button appears on the screen:

```jsx
// Bottom right (default)
position: 'bottom-right'

// Bottom left
position: 'bottom-left'
```

## Theming Guide

The theme object allows extensive customization of the chatbot's appearance:

```jsx
theme: {
  // Main color scheme
  primaryColor: '#3b82f6',        // Blue primary color
  secondaryColor: '#ffffff',       // White secondary color
  
  // Window appearance
  backgroundColor: '#f8fafc',      // Light gray background
  textColor: '#000000',            // Black text
  
  // Message bubbles
  botBackgroundColor: '#ffffff',   // White bot messages
  userBackgroundColor: '#3b82f6',  // Blue user messages
  botTextColor: '#000000',         // Black bot text
  userTextColor: '#ffffff',        // White user text
  
  // Icon backgrounds
  botIconBackgroundColor: '#3b82f6',   // Blue background for bot icons
  userIconBackgroundColor: '#10b981',  // Green background for user icons
  
  // Icon colors (newly added)
  botIconColor: '#ffffff',             // Color of the bot icon
  userIconColor: '#000000'             // Color of the user icon
}
```

### Color Theme Examples

#### Modern Blue Theme
```jsx
theme: {
  primaryColor: '#3b82f6',        // Blue
  secondaryColor: '#ffffff',      // White
  backgroundColor: '#f8fafc',     // Light gray background
  textColor: '#1e293b',           // Dark gray text
  botBackgroundColor: '#ffffff',  // White bot messages
  userBackgroundColor: '#3b82f6', // Blue user messages
  botTextColor: '#1e293b',        // Dark gray bot text
  userTextColor: '#ffffff',       // White user text
  botIconBackgroundColor: '#3b82f6',
  userIconBackgroundColor: '#10b981',
  botIconColor: '#ffffff',
  userIconColor: '#000000'
}
```

#### Dark Theme
```jsx
theme: {
  primaryColor: '#f8fafc',        // Light gray
  secondaryColor: '#0f172a',      // Dark gray
  backgroundColor: '#0f172a',     // Dark background
  textColor: '#f8fafc',           // Light text
  botBackgroundColor: '#1e293b',  // Dark blue bot messages
  userBackgroundColor: '#0ea5e9', // Sky blue user messages
  botTextColor: '#f8fafc',        // Light bot text
  userTextColor: '#0f172a',       // Dark user text
  botIconBackgroundColor: '#0ea5e9',
  userIconBackgroundColor: '#8b5cf6',
  botIconColor: '#0f172a',
  userIconColor: '#f8fafc'
}
```

## Best Practices

### 1. API Key Security
Never commit your OpenRouter API key directly to version control. Instead, retrieve it from environment variables in your application:

```jsx
// In your parent application
const apiKey = process.env.REACT_APP_OPENROUTER_API_KEY || process.env.VITE_OPENROUTER_API_KEY;

<Chatbot 
  config={{
    apiKey: apiKey,
    // ... other config
  }}
/>
```

### 2. Company Information
Provide comprehensive company information to help the AI provide better contextual responses:

```jsx
config={{
  // ... other config
  companyName: 'Acme Inc',
  websiteUrl: 'https://acmeinc.com',
  companyPhone: '+1 (555) 123-4567',
  companyEmail: 'info@acmeinc.com',
  companyAddress: '123 Main St, City, State 12345',
  supportEmail: 'support@acmeinc.com',
  officeHours: 'Mon-Fri 9am-5pm EST',
  companyServices: 'Web Development, Design, Marketing',
  // ... rest of config
}}
```

### 3. Responsive Design
The chatbot is responsive by default, but you can customize its width in the window for different screen sizes:

> Note: Currently, width is fixed to 30% of the screen width, but this could be made configurable in future versions.

### 4. Custom Icons
When using custom icons, ensure they are appropriately sized and contrast well with your theme:

```jsx
// Good practice
icon: <MessageCircle size={24} color={theme.secondaryColor} />
```

## Troubleshooting

### Common Issues and Solutions

#### 1. Chatbot Not Appearing
- **Check**: Make sure you've provided the required `apiKey` and `companyName`
- **Solution**: Verify your API key is correct and that you've specified the company name

#### 2. OpenRouter API Errors
- **Check**: Console for error messages
- **Solution**: Verify your API key, check if the OpenRouter service is available, and ensure your model name is valid

#### 3. Styling Issues
- **Check**: Theme configuration matches your expected colors
- **Solution**: Ensure you're using the correct property names in the theme object

#### 4. Custom Icons Not Showing
- **Check**: Icons are properly imported and passed as ReactNode
- **Solution**: Ensure you're passing the icon component, not a string

#### 5. Chat Window Positioning
- **Check**: Position property is set to 'bottom-right' or 'bottom-left'
- **Solution**: Use the correct position value

### Debugging Tips

1. Enable React Developer Tools to inspect the component hierarchy
2. Check browser console for any error messages
3. Verify API key permissions with OpenRouter
4. Test with minimal configuration first, then add customizations

## Examples

### Complete Example with Full Customization

```jsx
import React from 'react';
import { Chatbot } from 'openrouter-chatbot';
import { MessageCircle, User, Bot } from 'lucide-react';

function App() {
  return (
    <div className="App">
      <h1>My Website</h1>
      <p>Welcome to my website!</p>
      
      <Chatbot 
        config={{
          // API Configuration
          apiKey: process.env.REACT_APP_OPENROUTER_API_KEY,
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
            userTextColor: '#ffffff',        // White user text
            botIconBackgroundColor: '#3b82f6',   // Blue background for bot icons
            userIconBackgroundColor: '#10b981',  // Green background for user icons
            botIconColor: '#ffffff',             // Color of the bot icon
            userIconColor: '#000000'             // Color of the user icon
          },
          position: 'bottom-right',           // Position the chatbot on the right
          icon: <MessageCircle size={24} />,  // Custom icon for the chatbot button
          botIcon: <Bot size={16} />,         // Custom icon for bot messages
          userIcon: <User size={16} />        // Custom icon for user messages
        }}
      />
    </div>
  );
}

export default App;
```

### Minimal Example with Default Styling

```jsx
import React from 'react';
import { Chatbot } from 'openrouter-chatbot';

function App() {
  return (
    <div className="App">
      <Chatbot 
        config={{
          apiKey: process.env.REACT_APP_OPENROUTER_API_KEY,
          companyName: 'My Company',
        }}
      />
    </div>
  );
}

export default App;
```

### Example with Custom Theme

```jsx
import React from 'react';
import { Chatbot } from 'openrouter-chatbot';

function App() {
  return (
    <div className="App">
      <Chatbot 
        config={{
          apiKey: process.env.REACT_APP_OPENROUTER_API_KEY,
          companyName: 'My Company',
          botName: 'AI Assistant',
          initialMessage: 'Hello! I\'m here to help.',
          position: 'bottom-left',
          theme: {
            primaryColor: '#8b5cf6',  // Purple
            secondaryColor: '#ffffff',
            backgroundColor: '#1e1b4b',  // Dark purple background
            textColor: '#f3f4f6',
            botBackgroundColor: '#374151',
            userBackgroundColor: '#8b5cf6',
            botTextColor: '#f3f4f6',
            userTextColor: '#ffffff',
            botIconBackgroundColor: '#8b5cf6',
            userIconBackgroundColor: '#ec4899', // Pink
            botIconColor: '#ffffff',
            userIconColor: '#000000'
          }
        }}
      />
    </div>
  );
}

export default App;
```

## OpenRouter Integration

This chatbot component is built to work seamlessly with the OpenRouter API, which provides access to multiple AI models through a unified interface.

### About OpenRouter

OpenRouter is an AI API platform that provides:
- Access to multiple AI models (Anthropic, OpenAI, Google, and more)
- Cost-effective model usage
- Easy model switching
- Consistent API interface across different providers

### OpenRouter Benefits for Your Chatbot

1. **Model Flexibility**: Switch between different AI models without changing your code
2. **Cost Optimization**: Choose the most cost-effective model for your use case
3. **Performance**: Access to both fast and high-quality models
4. **Reliability**: Redundant infrastructure for consistent performance

### Popular OpenRouter Models

- `x-ai/grok-4-fast:free` - Fast and free model (default)
- `openai/gpt-3.5-turbo` - OpenAI's GPT-3.5 model
- `anthropic/claude-3-haiku` - Anthropic's fast Claude model
- `google/gemini-pro` - Google's Gemini Pro model
- `mistralai/mistral-medium` - Mistral's medium model
- `x-ai/grok-4` - More capable Grok model

### Getting Your OpenRouter API Key

1. Go to [OpenRouter](https://openrouter.ai/)
2. Create an account or sign in
3. Navigate to the API Keys section
4. Create a new API key
5. Add the key to your environment variables

### Using Different Models

To switch between different AI models, simply change the `modelName` in your configuration:

```jsx
<Chatbot 
  config={{
    apiKey: process.env.REACT_APP_OPENROUTER_API_KEY,
    companyName: 'My Company',
    modelName: 'anthropic/claude-3-haiku', // Use Claude instead of default
    // ... rest of config
  }}
/>
```

### Best Practices with OpenRouter

1. **Monitor Usage**: Keep track of your API usage and costs in the OpenRouter dashboard
2. **Model Selection**: Choose the appropriate model based on your needs (speed vs. quality)
3. **Error Handling**: The chatbot handles OpenRouter API errors gracefully, but you may want to implement custom error handling
4. **Caching**: Consider implementing caching for common queries to reduce API costs

This comprehensive guide covers all aspects of using the `openrouter-chatbot` package with OpenRouter integration, from basic installation to advanced customization options.