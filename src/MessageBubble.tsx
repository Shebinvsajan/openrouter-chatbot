import React from 'react';
import { Bot, User } from 'lucide-react';

interface MessageBubbleProps {
  message: string;
  sender: 'user' | 'bot';
  timestamp: string;
  theme: {
    primaryColor: string;
    secondaryColor: string;
    botBackgroundColor: string;
    userBackgroundColor: string;
    botTextColor: string;
    userTextColor: string;
    botIconBackgroundColor: string;
    userIconBackgroundColor: string;
    botIconColor: string;
    userIconColor: string;
  };
  botIcon?: React.ReactNode;
  userIcon?: React.ReactNode;
}

export const MessageBubble: React.FC<MessageBubbleProps> = ({
  message,
  sender,
  timestamp,
  theme,
  botIcon,
  userIcon
}) => {
  const isBot = sender === 'bot';

  return (
    <div
      style={{
        justifyContent: isBot ? 'flex-start' : 'flex-end',
        display: 'flex',
        alignItems: 'flex-start',
        gap: '12px',
        marginBottom: '16px'
      }}
    >
      {isBot && (
        <div style={{
          width: '32px',
          height: '32px',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: theme.botIconBackgroundColor,
          color: theme.botIconColor,
          flexShrink: 0
        }}>
          {botIcon ? (
            <div style={{ 
              width: '16px', 
              height: '16px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              {botIcon}
            </div>
          ) : (
            <Bot width={16} height={16} />
          )}
        </div>
      )}
      <div
        style={{
          backgroundColor: isBot ? theme.botBackgroundColor : theme.userBackgroundColor,
          color: isBot ? theme.botTextColor : theme.userTextColor,
          borderRadius: '18px',
          padding: '12px 16px',
          maxWidth: '75%',
          boxShadow: '0 1px 2px rgba(0,0,0,0.1)',
          ...(isBot
            ? {
              borderTopLeftRadius: '4px'
            }
            : {
              borderTopRightRadius: '4px'
            }),
          wordWrap: 'break-word',
          overflowWrap: 'break-word',
          overflow: 'hidden',
          boxSizing: 'border-box',
          hyphens: 'auto',
          lineHeight: '1.4'
        }}
      >
        <p style={{
          fontSize: '14px',
          margin: 0,
          textAlign: 'left',
          wordWrap: 'break-word',
          overflowWrap: 'break-word',
          whiteSpace: 'pre-wrap',
          boxSizing: 'border-box',
          hyphens: 'auto'
        }}>
          {message}
        </p>
        <p
          style={{
            fontSize: '10px',
            marginTop: '4px',
            color: isBot ? 'rgba(0,0,0,0.5)' : 'rgba(255,255,255,0.7)',
            textAlign: isBot ? 'left' : 'right',
            margin: 0,
            wordWrap: 'break-word',
            overflowWrap: 'break-word',
            whiteSpace: 'normal',
            boxSizing: 'border-box'
          }}
        >
          {timestamp}
        </p>
      </div>
      {!isBot && (
        <div style={{
          width: '32px',
          height: '32px',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: theme.userIconBackgroundColor,
          color: theme.userIconColor,
          flexShrink: 0
        }}>
          {userIcon ? (
            <div style={{ 
              width: '16px', 
              height: '16px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              {userIcon}
            </div>
          ) : (
            <User width={16} height={16} />
          )}
        </div>
      )}
    </div>
  );
};