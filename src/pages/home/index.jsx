import React from 'react';
import { Card, Button } from '../../components';
import profilePhoto from '../../assets/pwpp.png';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="section relative overflow-hidden" style={{ paddingTop: 'calc(var(--section-spacing))' }}>
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Content */}
            <div className="max-w-xl">
              {/* Tag */}
              <span
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-8"
                style={{
                  backgroundColor: 'var(--bg-overlay)',
                  border: '1px solid var(--border-light)',
                  color: 'var(--accent-primary)',
                }}
              >
                <span className="font-semibold">→</span> Software Engineer & Property Professional
              </span>

              {/* Headline */}
              <h1>
                Hi, I'm <span className="gradient-text">Steve Totev</span>
              </h1>

              {/* Mobile Profile Photo */}
              <div
                className="lg:hidden my-8 flex justify-center"
                style={{
                  maskImage: 'linear-gradient(to bottom, black 50%, transparent 100%)',
                  WebkitMaskImage: 'linear-gradient(to bottom, black 50%, transparent 100%)',
                }}
              >
                <img
                  src={profilePhoto}
                  alt="Steve Totev"
                  className="w-64 h-auto object-cover object-top"
                />
              </div>

              {/* Summary */}
              <p className="text-lead">
                Software engineer based in London, focused on creating clean, maintainable systems
                with polished user experiences. I bridge technical implementation with practical
                delivery across both software and property sectors.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4 mt-12">
                <Button to="/career">View Software Career</Button>
                <Button to="/property" variant="secondary">View Property Business</Button>
              </div>
            </div>

            {/* Right: Profile Photo */}
            <div className="relative hidden lg:flex justify-center items-end">
              <div
                className="relative w-full max-w-md"
                style={{
                  maskImage: 'linear-gradient(to bottom, black 60%, transparent 100%)',
                  WebkitMaskImage: 'linear-gradient(to bottom, black 60%, transparent 100%)',
                }}
              >
                <img
                  src={profilePhoto}
                  alt="Steve Totev"
                  className="w-full h-auto object-cover object-top"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Primary Routes Section */}
      <section className="section">
        <div className="container">
          <h2>What I Do</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            {/* Property Card */}
            <Card className="flex flex-col">
              <div
                className="w-14 h-14 rounded-[var(--radius-md)] flex items-center justify-center text-2xl mb-6"
                style={{
                  background: 'linear-gradient(135deg, var(--accent-secondary), #33a6d6)',
                }}
              >
                🏠
              </div>
              <h3 style={{ color: 'var(--text-primary)' }}>Property Business</h3>
              <p className="flex-1">
                Working in property investment and development, connecting opportunities
                with investors and helping grow portfolios across the UK market.
              </p>
              <Button to="/property" variant="secondary" className="mt-4 w-full">
                View Property Business →
              </Button>
            </Card>

            {/* Software Card */}
            <Card className="flex flex-col">
              <div
                className="w-14 h-14 rounded-[var(--radius-md)] flex items-center justify-center text-2xl mb-6"
                style={{
                  background: 'linear-gradient(135deg, var(--accent-primary), #8a6dff)',
                }}
              >
                💻
              </div>
              <h3 style={{ color: 'var(--text-primary)' }}>Software Career</h3>
              <p className="flex-1">
                Full-stack development with experience across modern and legacy web technologies.
                Building robust applications with a focus on clean, maintainable code.
              </p>
              <Button to="/career" variant="secondary" className="mt-4 w-full">
                View Software Career →
              </Button>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
}
