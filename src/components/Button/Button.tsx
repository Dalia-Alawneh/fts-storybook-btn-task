import React from 'react';
import './button.css';

export type ButtonProps = {
  variant?: 'primary' | 'secondary' | 'text';
  size?: 'small' | 'medium' | 'large';
  color?: 'blue' | 'red' | 'green';
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
};

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'medium',
  color = 'blue',
  children,
  ...rest
}) => {
  const className = `btn ${variant} ${size} ${color}`;
  return (
    <button className={className} {...rest}>
      {children}
    </button>
  );
};
