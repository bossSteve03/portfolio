import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import ThemeToggle from "../../components/ThemeToggle";
import faviconImg from "/male-technologist.png";

const navLinks = [
  { path: "/", label: "Home" },
  { path: "/property", label: "Property" },
  { path: "/career", label: "Career" },
  { path: "/about", label: "About" },
  { path: "/contact", label: "Contact" },
];

export default function Nav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header
      className="fixed top-0 left-0 right-0 h-[var(--header-height)] z-50 border-b"
      style={{
        backgroundColor: "var(--bg-primary)",
        borderColor: "var(--border-light)",
        backdropFilter: "blur(0.625rem)",
      }}
    >
      <div className="container h-full flex justify-between items-center">
        <NavLink to="/" className="flex items-center gap-3 no-underline">
          <img src={faviconImg} alt="" className="w-6 h-6" />
          <span
            className="font-display font-semibold text-lg"
            style={{ color: "var(--text-primary)" }}
          >
            Steve Totev
          </span>
        </NavLink>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <ul className="flex gap-8 list-none">
            {navLinks.map(({ path, label }) => (
              <li key={path}>
                <NavLink
                  to={path}
                  onClick={handleNavClick}
                  className={({ isActive }) => `
                    relative py-2 text-[0.938rem] font-medium no-underline transition-colors
                    ${isActive ? "text-[var(--text-primary)]" : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"}
                  `}
                  style={({ isActive }) => ({
                    color: isActive
                      ? "var(--text-primary)"
                      : "var(--text-secondary)",
                  })}
                >
                  {({ isActive }) => (
                    <>
                      {label}
                      <span
                        className="absolute bottom-0 left-0 h-0.5 transition-all duration-200"
                        style={{
                          width: isActive ? "100%" : "0",
                          backgroundColor: "var(--accent-primary)",
                        }}
                      />
                    </>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>
          <ThemeToggle />
        </nav>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-4 md:hidden">
          <ThemeToggle />
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-[var(--radius-sm)]"
            style={{
              backgroundColor: "var(--bg-overlay)",
              color: "var(--text-primary)",
            }}
            aria-label="Toggle menu"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              {mobileMenuOpen ? (
                <path d="M18 6L6 18M6 6l12 12" />
              ) : (
                <path d="M3 12h18M3 6h18M3 18h18" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <nav
          className="md:hidden absolute top-full left-0 right-0 border-b animate-slide-down"
          style={{
            backgroundColor: "var(--bg-primary)",
            borderColor: "var(--border-light)",
          }}
        >
          <ul className="list-none p-4">
            {navLinks.map(({ path, label }) => (
              <li key={path}>
                <NavLink
                  to={path}
                  onClick={() => {
                    setMobileMenuOpen(false);
                    handleNavClick();
                  }}
                  className="block py-3 px-4 rounded-[var(--radius-sm)] text-[0.938rem] font-medium no-underline transition-colors"
                  style={({ isActive }) => ({
                    color: isActive
                      ? "var(--text-primary)"
                      : "var(--text-secondary)",
                    backgroundColor: isActive
                      ? "var(--bg-overlay)"
                      : "transparent",
                  })}
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
