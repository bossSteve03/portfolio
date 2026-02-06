import React from 'react';
import { Link } from 'react-router-dom';

export default function Button({
  children,
  variant = 'primary',
  size = 'default',
  href,
  to,
  className = '',
  ...props
}) {
  const baseStyles = `
    inline-flex items-center justify-center gap-2 font-semibold text-[15px]
    rounded-[var(--radius-md)] transition-all duration-200 cursor-pointer
    border-none outline-none no-underline
  `;

  const sizeStyles = {
    small: 'px-4 py-2 text-sm',
    default: 'px-7 py-3.5',
    large: 'px-8 py-4 text-base',
  };

  const variantStyles = {
    primary: {
      backgroundColor: 'var(--accent-primary)',
      color: 'white',
    },
    secondary: {
      backgroundColor: 'var(--bg-overlay)',
      color: 'var(--text-primary)',
      border: '1px solid var(--border-light)',
    },
  };

  const combinedClassName = `${baseStyles} ${sizeStyles[size]} ${className}`;
  const style = variantStyles[variant];

  if (to) {
    return (
      <Link to={to} className={combinedClassName} style={style} {...props}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a
        href={href}
        className={combinedClassName}
        style={style}
        target="_blank"
        rel="noopener noreferrer"
        {...props}
      >
        {children}
      </a>
    );
  }

  return (
    <button className={combinedClassName} style={style} {...props}>
      {children}
    </button>
  );
}
