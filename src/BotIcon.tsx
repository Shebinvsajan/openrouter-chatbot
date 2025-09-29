import React from 'react';

interface BotIconProps {
  onClick: () => void;
  position: 'bottom-right' | 'bottom-left';
  theme: {
    primaryColor: string;
    secondaryColor: string;
  };
  icon?: React.ReactNode;
}

export const BotIcon: React.FC<BotIconProps> = ({ 
  onClick, 
  position,
  theme,
  icon 
}) => {
  const positionStyles = position === 'bottom-right' 
    ? { bottom: '24px', right: '24px' } 
    : { bottom: '24px', left: '24px' };

  return (
    <button
      onClick={onClick}
      style={{
        position: 'fixed',
        width: '60px',
        height: '60px',
        backgroundColor: theme.primaryColor,
        color: theme.secondaryColor,
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '28px',
        fontWeight: 'bold',
        cursor: 'pointer',
        border: 'none',
        zIndex: 1000,
        boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
        ...positionStyles
      }}
      aria-label="Open chatbot"
    >
      {icon ? (
        <div style={{ 
          width: '32px', 
          height: '32px', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center',
          boxSizing: 'border-box'
        }}>
          {icon}
        </div>
      ) : (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="m12 8-9.04 9.06a2.82 2.82 0 1 0 3.98 3.98L16 12" />
          <circle cx="17" cy="7" r="5" />
        </svg>
      )}
    </button>
  );
};