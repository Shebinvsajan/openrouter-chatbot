# openrouter-chatbot

A customizable AI chatbot component for React applications that integrates with OpenRouter API.

## Features

- **Easy Integration**: Simple to add to any React application
- **Fully Customizable**: Theme, colors, positioning, and icons
- **AI Powered**: Integrates with OpenRouter API for intelligent responses
- **Responsive Design**: Works on all device sizes
- **TypeScript Support**: Written in TypeScript with full type definitions
- **Modern Architecture**: Built with React hooks and TypeScript

## About OpenRouter

This chatbot component leverages the **OpenRouter API** to provide intelligent AI responses. OpenRouter is a platform that provides access to various AI models through a unified API, allowing you to connect to different providers and models with a single interface.

### OpenRouter Benefits:
- Access to multiple AI models (Anthropic, OpenAI, Google, and more)
- Cost-effective model usage
- Easy model switching
- Consistent API interface across different providers

## Installation

```bash
npm install openrouter-chatbot
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

## Getting an OpenRouter API Key

To use this chatbot, you need an OpenRouter API key:

1. Go to [OpenRouter](https://openrouter.ai/)
2. Create an account
3. Navigate to the API Keys section
4. Create a new API key
5. Add the key to your environment variables or pass it directly to the component

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

## Advanced Usage

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

### Theming

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

### Positioning

Control where the chatbot button appears on the screen:

```jsx
// Bottom right (default)
position: 'bottom-right'

// Bottom left
position: 'bottom-left'
```

## Complete Example

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

## OpenRouter Model Options

OpenRouter provides access to various AI models. Some popular options include:

- `x-ai/grok-4-fast:free` - Fast and free model (default)
- `openai/gpt-3.5-turbo` - OpenAI's GPT-3.5 model
- `anthropic/claude-3-haiku` - Anthropic's fast Claude model
- `google/gemini-pro` - Google's Gemini Pro model

You can specify any available OpenRouter model in the `modelName` configuration option.

## Best Practices

1. **API Key Security**: Never commit your OpenRouter API key directly to version control. Instead, retrieve it from environment variables in your application.
2. **Company Information**: Provide comprehensive company information to help the AI provide better contextual responses.
3. **OpenRouter Usage**: Monitor your OpenRouter API usage and costs through your OpenRouter dashboard.

## Troubleshooting

### Common Issues and Solutions

1. **Chatbot Not Appearing**: Make sure you've provided the required `apiKey` and `companyName`
2. **OpenRouter API Errors**: Verify your API key, check if the OpenRouter service is available, and ensure your model name is valid
3. **Styling Issues**: Ensure theme configuration matches your expected colors and property names are correct

## License

MIT

## Support

For support, please open an issue on the GitHub repository.

## Complete Documentation

For a comprehensive guide including advanced customization, theming, and examples, see our [Complete Guide](GUIDE.md).