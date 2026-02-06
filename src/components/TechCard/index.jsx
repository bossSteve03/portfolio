import React from 'react';

const iconStyles = {
  core: 'bg-gradient-to-br from-[#6d8cff] to-[#8a6dff]',
  frontend: 'bg-gradient-to-br from-[#33d6a6] to-[#33a6d6]',
  backend: 'bg-gradient-to-br from-[#ff6b9d] to-[#ff8a6b]',
  data: 'bg-gradient-to-br from-[#ffd166] to-[#ff9e6b]',
  cloud: 'bg-gradient-to-br from-[#6bc5ff] to-[#6b8cff]',
  tools: 'bg-gradient-to-br from-[#a66dff] to-[#ff6da6]',
};

export default function TechCard({
  title,
  subtitle,
  icon,
  variant = 'core',
  technologies = [],
}) {
  return (
    <div
      className="rounded-[var(--radius-lg)] border p-8 transition-all duration-200 hover:border-[var(--accent-primary)] hover:shadow-[0_0_2rem_rgba(109,140,255,0.2)]"
      style={{
        backgroundColor: 'var(--bg-overlay)',
        borderColor: 'var(--border-light)',
      }}
    >
      {/* Header */}
      <div className="flex items-center gap-4 mb-5">
        <div
          className={`w-12 h-12 rounded-[var(--radius-md)] flex items-center justify-center text-xl font-bold text-white ${iconStyles[variant]}`}
        >
          {icon}
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-1" style={{ color: 'var(--text-primary)' }}>
            {title}
          </h3>
          <p className="text-sm mb-0" style={{ color: 'var(--text-tertiary)' }}>
            {subtitle}
          </p>
        </div>
      </div>

      {/* Tech pills */}
      <div className="flex flex-wrap gap-2">
        {technologies.map((tech, index) => (
          <span
            key={index}
            className="px-3 py-1.5 text-[0.813rem] rounded-full border transition-all duration-200 hover:bg-[var(--accent-primary)] hover:text-white hover:scale-105"
            style={{
              backgroundColor: 'var(--bg-pill)',
              borderColor: 'var(--border-light)',
              color: 'var(--text-secondary)',
            }}
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}
