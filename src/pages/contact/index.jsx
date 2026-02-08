import React, { useEffect } from 'react';
import { Button } from '../../components';
import linkedinProfile from '../../assets/linkedinprofile.jpeg';
import githubProfile from '../../assets/githubprofile.jpeg';
import emailProfile from '../../assets/emailprofile.jpeg';

export default function Contact() {
  useEffect(() => {
    // Load Instagram embed script
    const script = document.createElement('script');
    script.src = '//www.instagram.com/embed.js';
    script.async = true;
    document.body.appendChild(script);

    // Re-process embeds when script loads
    script.onload = () => {
      if (window.instgrm) {
        window.instgrm.Embeds.process();
      }
    };

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section className="section" style={{ paddingTop: 'calc(var(--section-spacing))' }}>
        <div className="container">
          <h1>Get in Touch</h1>
          <p className="text-lead max-w-2xl">
            Whether you have a project in mind, want to discuss opportunities,
            or just want to connect – I&apos;d love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact Cards Grid - 4 Columns */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="contact-cards-grid gap-6 items-stretch justify-center">

            {/* LinkedIn Card */}
            <div
              className="rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl flex flex-col"
              style={{
                background: 'linear-gradient(135deg, #0077B5 0%, #00A0DC 100%)',
              }}
            >
              {/* Header */}
              <div className="p-4 flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-white/20 backdrop-blur flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-0">LinkedIn</h3>
                  <p className="text-white/70 text-xs mb-0">Professional Network</p>
                </div>
              </div>

              {/* Image */}
              <div className="bg-white overflow-hidden" style={{ height: '20.938rem' }}>
                <img src={linkedinProfile} alt="LinkedIn profile" className="w-full h-full object-cover object-top" />
              </div>

              {/* Follow Button */}
              <a
                href="https://uk.linkedin.com/in/stevetotev"
                target="_blank"
                rel="noopener noreferrer"
                className="block p-4 text-center text-white font-medium text-sm no-underline hover:bg-white/10 transition-colors flex-shrink-0 mt-auto"
              >
                Connect with me →
              </a>
            </div>

            {/* GitHub Card */}
            <div
              className="rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl flex flex-col"
              style={{
                background: 'linear-gradient(135deg, #24292e 0%, #404448 100%)',
              }}
            >
              {/* Header */}
              <div className="p-4 flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-white/20 backdrop-blur flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-0">GitHub</h3>
                  <p className="text-white/70 text-xs mb-0">@bosssteve03</p>
                </div>
              </div>

              {/* Image */}
              <div className="bg-white overflow-hidden" style={{ height: '20.938rem' }}>
                <img src={githubProfile} alt="GitHub profile" className="w-full h-full object-cover object-top" />
              </div>

              {/* Follow Button */}
              <a
                href="https://github.com/bosssteve03"
                target="_blank"
                rel="noopener noreferrer"
                className="block p-4 text-center text-white font-medium text-sm no-underline hover:bg-white/10 transition-colors flex-shrink-0 mt-auto"
              >
                View my code →
              </a>
            </div>

            {/* Instagram Card with Embed */}
            <div
              className="rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
              style={{
                background: 'linear-gradient(135deg, #833AB4 0%, #E1306C 50%, #F77737 100%)',
              }}
            >
              {/* Header */}
              <div className="p-4 flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-white/20 backdrop-blur flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-0">Instagram</h3>
                  <p className="text-white/70 text-xs mb-0">Personal & Travel</p>
                </div>
              </div>

              {/* Instagram Embed */}
              <div className="bg-white">
                <blockquote
                  className="instagram-media"
                  data-instgrm-permalink="https://www.instagram.com/totevsteve/"
                  data-instgrm-version="14"
                  style={{
                    background: '#FFF',
                    border: 0,
                    borderRadius: 0,
                    boxShadow: 'none',
                    margin: 0,
                    maxWidth: '100%',
                    minWidth: '100%',
                    padding: 0,
                    width: '100%',
                  }}
                >
                  <div style={{ padding: '16px' }}>
                    <a
                      href="https://www.instagram.com/totevsteve/"
                      style={{
                        background: '#FFFFFF',
                        lineHeight: 0,
                        padding: '0 0',
                        textAlign: 'center',
                        textDecoration: 'none',
                        width: '100%',
                        display: 'block',
                      }}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                        <div style={{
                          backgroundColor: '#F4F4F4',
                          borderRadius: '50%',
                          height: '40px',
                          marginRight: '14px',
                          width: '40px',
                        }} />
                        <div style={{ display: 'flex', flexDirection: 'column', flexGrow: 1, justifyContent: 'center' }}>
                          <div style={{
                            backgroundColor: '#F4F4F4',
                            borderRadius: '4px',
                            height: '14px',
                            marginBottom: '6px',
                            width: '100px',
                          }} />
                          <div style={{
                            backgroundColor: '#F4F4F4',
                            borderRadius: '4px',
                            height: '14px',
                            width: '60px',
                          }} />
                        </div>
                      </div>
                      <div style={{ padding: '19% 0' }} />
                      <div style={{
                        display: 'block',
                        height: '50px',
                        margin: '0 auto 12px',
                        width: '50px',
                      }}>
                        <svg width="50px" height="50px" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
                          <g fill="none" fillRule="evenodd">
                            <g fill="#000" fillRule="nonzero">
                              <path d="M556.869,30.41 C554.814,30.41 553.148,32.076 553.148,34.131 C553.148,36.186 554.814,37.852 556.869,37.852 C558.924,37.852 560.59,36.186 560.59,34.131 C560.59,32.076 558.924,30.41 556.869,30.41 M541,60.657 C535.114,60.657 530.342,55.887 530.342,50 C530.342,44.114 535.114,39.342 541,39.342 C546.887,39.342 551.658,44.114 551.658,50 C551.658,55.887 546.887,60.657 541,60.657 M541,33.886 C532.1,33.886 524.886,41.1 524.886,50 C524.886,58.899 532.1,66.113 541,66.113 C549.9,66.113 557.115,58.899 557.115,50 C557.115,41.1 549.9,33.886 541,33.886 M565.378,62.101 C565.244,65.022 564.756,66.606 564.346,67.663 C563.803,69.06 563.154,70.057 562.106,71.106 C561.058,72.155 560.06,72.803 558.662,73.347 C557.607,73.757 556.021,74.244 553.102,74.378 C549.944,74.521 548.997,74.552 541,74.552 C533.003,74.552 532.056,74.521 528.898,74.378 C525.979,74.244 524.393,73.757 523.338,73.347 C521.94,72.803 520.942,72.155 519.894,71.106 C518.846,70.057 518.197,69.06 517.654,67.663 C517.244,66.606 516.755,65.022 516.623,62.101 C516.479,58.943 516.448,57.996 516.448,50 C516.448,42.003 516.479,41.056 516.623,37.899 C516.755,34.978 517.244,33.391 517.654,32.338 C518.197,30.938 518.846,29.942 519.894,28.894 C520.942,27.846 521.94,27.196 523.338,26.654 C524.393,26.244 525.979,25.756 528.898,25.623 C532.057,25.479 533.004,25.448 541,25.448 C548.997,25.448 549.943,25.479 553.102,25.623 C556.021,25.756 557.607,26.244 558.662,26.654 C560.06,27.196 561.058,27.846 562.106,28.894 C563.154,29.942 563.803,30.938 564.346,32.338 C564.756,33.391 565.244,34.978 565.378,37.899 C565.522,41.056 565.552,42.003 565.552,50 C565.552,57.996 565.522,58.943 565.378,62.101 M570.82,37.631 C570.674,34.438 570.167,32.258 569.425,30.349 C568.659,28.377 567.633,26.702 565.965,25.035 C564.297,23.368 562.623,22.342 560.652,21.575 C558.743,20.834 556.562,20.326 553.369,20.18 C550.169,20.033 549.148,20 541,20 C532.853,20 531.831,20.033 528.631,20.18 C525.438,20.326 523.257,20.834 521.349,21.575 C519.376,22.342 517.703,23.368 516.035,25.035 C514.368,26.702 513.342,28.377 512.574,30.349 C511.834,32.258 511.326,34.438 511.181,37.631 C511.035,40.831 511,41.851 511,50 C511,58.147 511.035,59.17 511.181,62.369 C511.326,65.562 511.834,67.743 512.574,69.651 C513.342,71.625 514.368,73.296 516.035,74.965 C517.703,76.634 519.376,77.658 521.349,78.425 C523.257,79.167 525.438,79.673 528.631,79.82 C531.831,79.965 532.853,80.001 541,80.001 C549.148,80.001 550.169,79.965 553.369,79.82 C556.562,79.673 558.743,79.167 560.652,78.425 C562.623,77.658 564.297,76.634 565.965,74.965 C567.633,73.296 568.659,71.625 569.425,69.651 C570.167,67.743 570.674,65.562 570.82,62.369 C570.966,59.17 571,58.147 571,50 C571,41.851 570.966,40.831 570.82,37.631" transform="translate(-511 -20)" />
                            </g>
                          </g>
                        </svg>
                      </div>
                      <div style={{ paddingTop: '8px' }}>
                        <div style={{
                          color: '#3897f0',
                          fontFamily: 'Arial,sans-serif',
                          fontSize: '14px',
                          fontWeight: 550,
                        }}>
                          View profile on Instagram
                        </div>
                      </div>
                    </a>
                  </div>
                </blockquote>
              </div>

              {/* Follow Button */}
              <a
                href="https://instagram.com/totevsteve"
                target="_blank"
                rel="noopener noreferrer"
                className="block p-4 text-center text-white font-medium text-sm no-underline hover:bg-white/10 transition-colors"
              >
                Follow @totevsteve →
              </a>
            </div>

            {/* Email Card */}
            <div
              className="rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl flex flex-col"
              style={{
                background: 'linear-gradient(135deg, var(--accent-primary) 0%, var(--accent-secondary) 100%)',
              }}
            >
              {/* Header */}
              <div className="p-4 flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-white/20 backdrop-blur flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-0">Email</h3>
                  <p className="text-white/70 text-xs mb-0">Direct Message</p>
                </div>
              </div>

              {/* Image */}
              <div className="bg-white overflow-hidden" style={{ height: '20.938rem' }}>
                <img src={emailProfile} alt="Email" className="w-full h-full object-cover object-top" />
              </div>

              {/* Follow Button */}
              <a
                href="mailto:steve@stevetotev.co.uk"
                className="block p-4 text-center text-white font-medium text-sm no-underline hover:bg-white/10 transition-colors flex-shrink-0 mt-auto"
              >
                Send me an email →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Contact Section */}
      <section className="section">
        <div className="container">
          <div
            className="max-w-3xl mx-auto rounded-2xl p-8 md:p-12 text-center relative overflow-hidden"
            style={{
              background: 'linear-gradient(135deg, rgba(109, 140, 255, 0.1) 0%, rgba(51, 214, 166, 0.1) 100%)',
              border: '1px solid var(--border-light)',
            }}
          >
            <h2 className="mb-4">Let&apos;s Work Together</h2>
            <p className="text-lead mb-8 max-w-xl mx-auto">
              Have a project in mind or want to discuss opportunities?
              I&apos;m always open to new challenges and collaborations.
            </p>

            <div className="flex flex-wrap gap-4 justify-center">
              <Button href="mailto:steve@stevetotev.co.uk" size="large">
                Send Me an Email
              </Button>
              <Button href="https://uk.linkedin.com/in/stevetotev" variant="secondary" size="large">
                Connect on LinkedIn
              </Button>
            </div>

            <p className="text-sm mt-8 mb-0" style={{ color: 'var(--text-tertiary)' }}>
              Based in London, UK • Open to remote opportunities
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
