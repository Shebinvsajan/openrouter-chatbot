import { Message } from './types';

interface ChatCompletionRequest {
  model: string;
  messages: {
    role: string;
    content: {
      type: string;
      text?: string;
    }[];
  }[];
  temperature: number;
  max_tokens: number;
  stream: boolean;
}

interface ChatCompletionResponse {
  choices: {
    message: {
      content: string;
    };
  }[];
}

export class OpenRouterService {
  private config: {
    apiKey: string;
    modelName: string;
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
    botName: string;
  };

  constructor(config: {
    apiKey: string;
    modelName?: string;
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
    botName?: string;
  }) {
    this.config = {
      apiKey: config.apiKey,
      modelName: config.modelName || 'x-ai/grok-4-fast:free',
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
      botName: config.botName || 'Angel'
    };
  }

  async sendMessage(messages: Message[]): Promise<string> {
    const apiKey = this.config.apiKey;
    if (!apiKey) {
      throw new Error('OpenRouter API key is required');
    }

    // Get company info from config
    const companyName = this.config.companyName;
    const websiteUrl = this.config.websiteUrl || '';
    const botName = this.config.botName;

    // Get pre-configured company data from config
    const companyPhone = this.config.companyPhone || '';
    const companyEmail = this.config.companyEmail || '';
    const companyAddress = this.config.companyAddress || '';
    const supportEmail = this.config.supportEmail || '';
    const officeHours = this.config.officeHours || '';
    const companyServices = this.config.companyServices || '';
    const founderName = this.config.founderName || '';
    const whatsappNumber = this.config.whatsappNumber || '';
    const socialMedia = this.config.socialMedia || '';

    // Get the latest user message
    const latestUserMessage = messages[messages.length - 1]?.text || '';

    // Handle identity questions directly without API call
    if (this.isIdentityQuestion(latestUserMessage)) {
      return this.getIdentityResponse(latestUserMessage, companyName, botName);
    }

    // Format the dynamic prompt with pre-configured company data
    const systemPrompt = `YOU ARE: ${botName}, dedicated support agent for ${companyName}

PRE-CONFIGURED COMPANY DATA (USE THIS):
- Company: ${companyName}
- Phone: ${companyPhone}
- Email: ${companyEmail}
- Address: ${companyAddress}
- Support: ${supportEmail}
- Hours: ${officeHours}
- Services: ${companyServices}
- Founder: ${founderName}
- WhatsApp: ${whatsappNumber}
- Social: ${socialMedia}
- Website: ${websiteUrl}

RULES:
1. ASSUME this query is about ${companyName}
2. ANSWER DIRECTLY using the data above
3. NEVER ask for clarification about company context
4. If data missing: "Information not available in my database"
5. Maximum 2 sentences, be precise`;

    const systemMessage = {
      role: 'system' as const,
      content: [{
        type: 'text' as const,
        text: systemPrompt
      }]
    };

    const userMessage = {
      role: 'user' as const,
      content: [{
        type: 'text' as const,
        text: `${latestUserMessage}`
      }]
    };

    const formattedMessages = [systemMessage, userMessage];

    const requestBody: ChatCompletionRequest = {
      model: this.config.modelName,
      messages: formattedMessages,
      temperature: 0.1, // Very low temperature for consistency
      max_tokens: 100,  // Limit response length
      stream: false
    };

    try {
      const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${apiKey}`,
          'Content-Type': 'application/json',
          'HTTP-Referer': websiteUrl,
          'X-Title': botName
        },
        body: JSON.stringify(requestBody)
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error?.message || `API request failed with status ${response.status}`);
      }

      const data: ChatCompletionResponse = await response.json();
      const rawResponse = data.choices[0]?.message?.content || "I couldn't generate a response at this time.";
      
      // Apply strict formatting rules to the bot response
      return this.processBotResponse(rawResponse);
    } catch (error) {
      console.error('Error calling OpenRouter API:', error);
      throw error;
    }
  }

  // Check if the question is an identity question
  private isIdentityQuestion(query: string): boolean {
    const identityKeywords = [
      'who are you', 'what are you', 'what is your name', 
      'who created you', 'introduce yourself', 'what can you do',
      'your name', 'created', 'made', 'developed'
    ];
    
    const lowerQuery = query.toLowerCase();
    return identityKeywords.some(keyword => lowerQuery.includes(keyword));
  }

  // Get identity response based on the question
  private getIdentityResponse(query: string, companyName: string, botName: string): string {
    const lowerQuery = query.toLowerCase();

    if (lowerQuery.includes('who are you') || lowerQuery.includes('what are you')) {
      return `I'm ${botName}, 24/7 AI support for ${companyName}. How can I help you?`;
    } else if (lowerQuery.includes('name')) {
      return `I'm ${botName}.`;
    } else if (lowerQuery.includes('created') || lowerQuery.includes('made') || lowerQuery.includes('developed')) {
      return `I was created to provide 24/7 support for ${companyName}.`;
    } else if (lowerQuery.includes('what can you do')) {
      return `I can help you with information about ${companyName}.`;
    }

    // Default identity response
    return `I'm ${botName}. How can I help you today?`;
  }

  // Process bot response to clean it up
  private processBotResponse(text: string): string {
    return text
      .replace(/[—]/g, ' ')           // Replace em dashes with spaces
      .replace(/[*]{2,}/g, '')        // Remove bold markdown (**, ***)
      .replace(/--/g, ' ')            // Replace double dashes with spaces
      .replace(/[`~]{1,3}/g, '')      // Remove backticks and tildes
      .replace(/```[\s\S]*?```/g, '') // Remove code blocks
      .replace(/[\r\n]+/g, '\n')      // Normalize line breaks
      .replace(/^\s+|\s+$/g, '')      // Trim leading/trailing whitespace
      .replace(/\s+/g, ' ')           // Normalize multiple spaces to single space
      .trim();
  }
}