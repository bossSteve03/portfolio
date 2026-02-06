import React from 'react';

export default function Card({
  children,
  className = '',
  hover = true,
  padding = 'default',
  ...props
}) {
  const paddingStyles = {
    none: '',
    small: 'p-4',
    default: 'p-8',
    large: 'p-10',
  };

  return (
    <div
      className={`
        rounded-[var(--radius-lg)] border transition-all duration-200
        ${paddingStyles[padding]}
        ${hover ? 'hover:-translate-y-1 hover:shadow-lg' : ''}
        ${className}
      `}
      style={{
        backgroundColor: 'var(--bg-surface)',
        borderColor: 'var(--border-light)',
      }}
      {...props}
    >
      {children}
    </div>
  );
}
