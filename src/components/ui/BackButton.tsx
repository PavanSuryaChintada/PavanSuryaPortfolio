import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';

interface BackButtonProps {
  className?: string;
  onClick?: () => void;
}

const BackButton: React.FC<BackButtonProps> = ({ className = '', onClick }) => {
  const navigate = useNavigate();
  
  const handleClick = () => {
    if (onClick) {
      onClick();
    } else {
      navigate(-1);
    }
  };

  return (
    <button
      onClick={handleClick}
      className={`flex items-center gap-1 text-text-subdued hover:text-text-base transition-colors ${className}`}
      aria-label="Go back"
    >
      <ChevronLeft className="w-5 h-5" />
      <span className="text-sm font-medium">Back</span>
    </button>
  );
};

export default BackButton;
