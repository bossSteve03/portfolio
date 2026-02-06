import React from 'react';

export function TimelineItem({
  date,
  title,
  company,
  type,
  description,
  skills = [],
  logo,
  isLast = false,
  highlight = false,
}) {
  return (
    <div className="relative mb-12 pl-[72px]">
      {/* Timeline line */}
      {!isLast && (
        <div
          className="absolute left-6 top-0 bottom-0 w-0.5"
          style={{ backgroundColor: 'var(--border-light)' }}
        />
      )}

      {/* Timeline dot */}
      <div
        className="absolute left-4 top-2 w-4 h-4 rounded-full border-4"
        style={{
          backgroundColor: highlight ? 'var(--accent-secondary)' : 'var(--accent-primary)',
          borderColor: 'var(--bg-surface)',
        }}
      />

      {/* Date */}
      <div
        className="text-sm font-semibold mb-2"
        style={{ color: highlight ? 'var(--accent-secondary)' : 'var(--accent-secondary)' }}
      >
        {date}
      </div>

      {/* Content */}
      <div className="flex items-start gap-4">
        {logo && (
          <div
            className="w-12 h-12 rounded-[var(--radius-md)] border flex items-center justify-center flex-shrink-0 overflow-hidden"
            style={{
              backgroundColor: 'var(--bg-overlay)',
              borderColor: 'var(--border-light)',
            }}
          >
            <img src={logo} alt={company} className="w-full h-full object-contain" />
          </div>
        )}

        <div className="flex-1">
          <h3 className="text-lg font-semibold mb-1" style={{ color: 'var(--text-primary)' }}>
            {title}
          </h3>

          {(company || type) && (
            <p className="text-sm mb-3" style={{ color: 'var(--text-tertiary)' }}>
              {company}{type && ` · ${type}`}
            </p>
          )}

          {description && (
            <p className="mb-4" style={{ color: 'var(--text-secondary)' }}>
              {description}
            </p>
          )}

          {skills.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, index) => (
                <span
                  key={index}
                  className="px-4 py-2 text-sm rounded-full border transition-all duration-200 hover:-translate-y-0.5"
                  style={{
                    backgroundColor: 'var(--bg-overlay)',
                    borderColor: 'var(--border-light)',
                    color: 'var(--text-secondary)',
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function Timeline({ children }) {
  return (
    <div className="relative max-w-3xl mx-auto mt-12">
      {/* Main timeline line */}
      <div
        className="absolute left-6 top-0 bottom-0 w-0.5"
        style={{ backgroundColor: 'var(--border-light)' }}
      />
      {children}
    </div>
  );
}
