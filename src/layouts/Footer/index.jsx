import React from 'react';
import { Link } from 'react-router-dom';

const footerLinks = [
  { path: '/', label: 'Home' },
  { path: '/property', label: 'Property' },
  { path: '/career', label: 'Career' },
  { path: '/about', label: 'About' },
  { path: '/contact', label: 'Contact' },
];

export default function Footer() {
  return (
    <footer
      className="mt-[var(--section-spacing)] pt-16 pb-8 border-t"
      style={{
        backgroundColor: 'var(--bg-secondary)',
        borderColor: 'var(--border-light)',
      }}
    >
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-lg font-display font-semibold mb-4" style={{ color: 'var(--text-primary)' }}>
              Steve Totev
            </h3>
            <p className="text-sm" style={{ color: 'var(--text-tertiary)' }}>
              Software Engineer & Property Professional based in London, UK.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-sm font-semibold mb-4" style={{ color: 'var(--text-primary)' }}>
              Navigation
            </h4>
            <ul className="list-none space-y-2">
              {footerLinks.map(({ path, label }) => (
                <li key={path}>
                  <Link
                    to={path}
                    className="text-sm no-underline transition-colors hover:text-[var(--text-primary)]"
                    style={{ color: 'var(--text-tertiary)' }}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold mb-4" style={{ color: 'var(--text-primary)' }}>
              Connect
            </h4>
            <ul className="list-none space-y-2">
              <li>
                <a
                  href="https://uk.linkedin.com/in/stevetotev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm no-underline transition-colors hover:text-[var(--text-primary)]"
                  style={{ color: 'var(--text-tertiary)' }}
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/bosssteve03"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm no-underline transition-colors hover:text-[var(--text-primary)]"
                  style={{ color: 'var(--text-tertiary)' }}
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/totevsteve"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm no-underline transition-colors hover:text-[var(--text-primary)]"
                  style={{ color: 'var(--text-tertiary)' }}
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="mailto:steve@stevetotev.co.uk"
                  className="text-sm no-underline transition-colors hover:text-[var(--text-primary)]"
                  style={{ color: 'var(--text-tertiary)' }}
                >
                  Email
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div
          className="pt-8 border-t text-center text-sm"
          style={{
            borderColor: 'var(--border-light)',
            color: 'var(--text-tertiary)',
          }}
        >
          <p className="mb-0">© {new Date().getFullYear()} Steve Totev. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
