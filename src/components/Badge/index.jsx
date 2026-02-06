import React from 'react';

export default function Badge({
  children,
  variant = 'default',
  className = '',
  ...props
}) {
  const variantStyles = {
    default: {
      backgroundColor: 'var(--bg-overlay)',
      borderColor: 'var(--border-light)',
      color: 'var(--text-secondary)',
    },
    accent: {
      backgroundColor: 'rgba(109, 140, 255, 0.1)',
      borderColor: 'var(--accent-primary)',
      color: 'var(--accent-primary)',
    },
  };

  return (
    <span
      className={`
        inline-flex items-center px-4 py-2 text-sm rounded-full border
        transition-all duration-200 hover:-translate-y-0.5
        ${className}
      `}
      style={variantStyles[variant]}
      {...props}
    >
      {children}
    </span>
  );
}
