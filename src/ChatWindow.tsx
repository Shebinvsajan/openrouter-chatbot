import React, { useState, useEffect, useRef } from 'react';
import { MessageBubble } from './MessageBubble';

interface Message {
  text: string;
  sender: 'user' | 'bot';
  timestamp: string;
}

interface ChatWindowProps {
  isOpen: boolean;
  onClose: () => void;
  messages: Message[];
  onSendMessage: (message: string) => void;
  isLoading: boolean;
  position: 'bottom-right' | 'bottom-left';
  botName: string;
  theme: {
    primaryColor: string;
    secondaryColor: string;
    backgroundColor: string;
    textColor: string;
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

export const ChatWindow: React.FC<ChatWindowProps> = ({
  isOpen,
  onClose,
  messages,
  onSendMessage,
  isLoading,
  position,
  botName,
  theme,
  botIcon,
  userIcon
}) => {
  if (!isOpen) return null;

  const [inputValue, setInputValue] = useState('');
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom when messages change
  useEffect(() => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTop = scrollAreaRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputValue.trim() && !isLoading) {
      onSendMessage(inputValue);
      setInputValue('');
    }
  };

  // Calculate position styles
  const positionStyles = position === 'bottom-right'
    ? { bottom: '24px', right: '24px' }
    : { bottom: '24px', left: '24px' };

  return (
    <div
      style={{
        position: 'fixed',
        width: '30%',
        height: '430px',
        backgroundColor: theme.backgroundColor,
        display: 'flex',
        flexDirection: 'column',
        fontFamily: 'Arial, sans-serif',
        borderRadius: '12px',
        overflow: 'hidden',
        boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
        zIndex: 1000,
        ...positionStyles
      }}
    >
      <div style={{
        backgroundColor: theme.secondaryColor,
        padding: '16px',
        borderBottom: '1px solid #e0e0e0',
        display: 'flex',
        alignItems: 'center',
        gap: '12px'
      }}>
        <div style={{
          width: '40px',
          height: '40px',
          backgroundColor: theme.botIconBackgroundColor,
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: theme.botIconColor,
          fontWeight: 'bold'
        }}>
          {botIcon ? (
            <div style={{
              width: '20px',
              height: '20px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              {botIcon}
            </div>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m12 8-9.04 9.06a2.82 2.82 0 1 0 3.98 3.98L16 12" />
              <circle cx="17" cy="7" r="5" />
            </svg>
          )}
        </div>
        <div>
          <h2 style={{ fontWeight: 'bold', fontSize: '16px', color: theme.textColor, margin: 0 }}>{botName}</h2>
          <div style={{ display: 'flex', alignItems: 'center', gap: '4px', marginTop: '2px' }}>
            <div style={{
              position: 'relative',
              width: '8px',
              height: '8px'
            }}>
              <span style={{
                position: 'absolute',
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                backgroundColor: '#10b981',
                opacity: 0.75
              }}></span>
              <span style={{
                position: 'absolute',
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                backgroundColor: '#10b981',
                animation: 'ping 1.5s cubic-bezier(0,0,0.2,1) infinite'
              }}></span>
            </div>
            <span style={{ fontSize: '10px', color: '#666666', marginLeft: '4px' }}>Online</span>
          </div>
        </div>
        <button 
          onClick={onClose} 
          style={{
            marginLeft: 'auto',
            background: 'transparent',
            border: '1px solid transparent',
            cursor: 'pointer',
            color: theme.primaryColor,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '28px',
            height: '28px',
            borderRadius: '50%',
            padding: 0,
            fontSize: '16px'
          }}
          aria-label="Close chat"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-x-icon lucide-x"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
        </button>
      </div>

      {/* Add animation styles for the ping effect */}
      <style>{`
        @keyframes ping {
          0% {
            transform: scale(0.95);
            opacity: 0.75;
          }
          75%, 100% {
            transform: scale(1.5);
            opacity: 0;
          }
        }
      `}</style>

      <div
        ref={scrollAreaRef}
        style={{
          flex: 1,
          padding: '16px',
          overflowY: 'auto',
          display: 'flex',
          flexDirection: 'column',
          // Hide scrollbar but keep functionality
          msOverflowStyle: 'none',
          scrollbarWidth: 'none',
          minHeight: 0
        }}
      >
        {/* Hide scrollbar for Webkit browsers */}
        <style>{`
          div::-webkit-scrollbar {
            display: none;
          }
        `}</style>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {messages.map((message, index) => (
            <MessageBubble
              key={index}
              message={message.text}
              sender={message.sender}
              timestamp={message.timestamp}
              theme={theme}
              botIcon={botIcon}
              userIcon={userIcon}
            />
          ))}
          {isLoading && (
            <div style={{
              display: 'flex',
              alignItems: 'flex-start',
              gap: '12px',
              marginBottom: '16px'
            }}>
              <div style={{
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: theme.botIconBackgroundColor,
                color: theme.botIconColor
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
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m12 8-9.04 9.06a2.82 2.82 0 1 0 3.98 3.98L16 12" />
                    <circle cx="17" cy="7" r="5" />
                  </svg>
                )}
              </div>
              <div style={{
                backgroundColor: theme.botBackgroundColor,
                borderRadius: '18px',
                padding: '12px 16px',
                maxWidth: '75%',
                boxShadow: '0 1px 2px rgba(0,0,0,0.1)',
                borderTopLeftRadius: '4px',
                wordWrap: 'break-word',
                overflowWrap: 'break-word'
              }}>
                <span style={{ fontSize: '14px', color: theme.botTextColor, margin: 0 }}>
                  Typing...
                </span>
              </div>
            </div>
          )}
        </div>
      </div>

      <form
        onSubmit={handleSubmit}
        style={{
          backgroundColor: theme.secondaryColor,
          padding: '16px',
          borderTop: '1px solid #e0e0e0',
          display: 'flex',
          gap: '8px'
        }}
      >
        <input
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Type your message..."
          style={{
            flex: 1,
            padding: '12px 16px',
            border: '1px solid #e0e0e0',
            borderRadius: '24px',
            fontSize: '14px',
            outline: 'none',
            color: theme.textColor,
            backgroundColor: theme.secondaryColor
          }}
          aria-label="Type your message"
        />
        <button
          type="submit"
          disabled={inputValue.trim() === '' || isLoading}
          style={{
            backgroundColor: theme.primaryColor,
            color: theme.secondaryColor,
            border: 'none',
            borderRadius: '24px',
            padding: '12px 24px',
            fontSize: '14px',
            fontWeight: 'bold',
            cursor: inputValue.trim() === '' || isLoading ? 'not-allowed' : 'pointer',
            opacity: inputValue.trim() === '' || isLoading ? 0.5 : 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="22" y1="2" x2="11" y2="13"></line>
            <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
          </svg>
        </button>
      </form>
    </div>
  );
};