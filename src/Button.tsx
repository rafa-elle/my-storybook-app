import React from "react";
import { useState } from "react";

type ButtonProps = {
  label: string;
  onClick: () => void | Promise<void>;
  disabled?: boolean;
  autoDisable?: boolean;
};

export const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  disabled = false,
  autoDisable = false,
}) => {
  const [isTemporarilyDisabled, setIsTemporarilyDisabled] = useState(false);

  const handleClick = async () => {
    if (disabled || isTemporarilyDisabled) return;

    try {
        await onClick?.(); 
      } catch (err) {
        console.error('Errore nel click handler:', err);
      }
  
      if (autoDisable) {
        setIsTemporarilyDisabled(true);
        setTimeout(() => {
          setIsTemporarilyDisabled(false);
        }, 5000);
      }
    };
  return (
    <button 
    onClick={handleClick} 
    disabled={disabled || isTemporarilyDisabled}>
      {label}
    </button>
    
  );
};

export default Button;
