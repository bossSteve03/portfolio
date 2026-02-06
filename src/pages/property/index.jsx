import React, { useEffect } from "react";
import { Card, Button } from "../../components";
import { useTheme } from "../../layouts/Layout";
import websitePreview from "../../assets/solynwebsitehomepagepreviewscreenshot.jpeg";
import solynPosterLight from "../../assets/solyn-poster-light.png";
import solynPosterDark from "../../assets/solyn-poster-dark.png";
import solynLogoLight from "../../assets/solyn-light.svg";
import solynLogoDark from "../../assets/solyn-dark.svg";

export default function Property() {
  const { theme } = useTheme();

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
      {/* Role Summary Section */}
      <section
        className="section"
        style={{ paddingTop: "calc(var(--section-spacing))" }}
      >
        <div className="container">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            <div className="md:flex-1">
              <h1>Property Business</h1>
              <p className="text-lead max-w-2xl mb-8">
                Alongside my software career, I work with a property investment
                company, helping connect investors with opportunities and supporting
                portfolio growth across the UK market.
              </p>

              <Card className="max-w-2xl">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 flex-shrink-0">
                    <img
                      src={theme === 'dark' ? solynLogoDark : solynLogoLight}
                      alt="Solyn Properties"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="mb-2" style={{ color: "var(--text-primary)" }}>
                      Property Investment & Development
                    </h3>
                    <p className="mb-0">
                      Working with a team focused on sourcing, analysing, and
                      facilitating property investments. From residential to
                      commercial opportunities, I help bridge the gap between
                      investors and viable projects.
                    </p>
                  </div>
                </div>
              </Card>
            </div>

            <div className="md:flex-shrink-0">
              <img
                src={theme === 'dark' ? solynPosterDark : solynPosterLight}
                alt="Solyn Properties"
                className="w-full md:w-[28rem] h-auto rounded-[var(--radius-xl)]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Website Showcase Section */}
      <section className="section">
        <div className="container">
          <h2>Company Website</h2>
          <p className="text-lead max-w-2xl mb-8">
            Visit the official company website to learn more about our services,
            current opportunities, and how we can help with your property
            investment goals.
          </p>

          <div
            className="rounded-[var(--radius-xl)] overflow-hidden border"
            style={{
              backgroundColor: "var(--bg-surface)",
              borderColor: "var(--border-light)",
            }}
          >
            {/* Website Preview */}
            <a href="https://solynproperties.com" target="_blank" rel="noopener noreferrer">
              <img
                src={websitePreview}
                alt="Solyn Property Investment Website"
                className="w-full h-auto object-cover"
              />
            </a>

            {/* CTA */}
            <div
              className="p-6 border-t flex flex-col sm:flex-row items-center justify-between gap-4"
              style={{ borderColor: "var(--border-light)" }}
            >
              <div>
                <h4
                  className="text-lg font-semibold mb-1"
                  style={{ color: "var(--text-primary)" }}
                >
                  Interested in Property Investment?
                </h4>
                <p
                  className="text-sm mb-0"
                  style={{ color: "var(--text-tertiary)" }}
                >
                  Get in touch to discuss opportunities
                </p>
              </div>
              <Button href="https://solynproperties.com">Visit Website →</Button>
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer Section */}
      <section className="section">
        <div className="container">
          <h2>What We Offer</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <Card>
              <div
                className="w-12 h-12 rounded-[var(--radius-sm)] flex items-center justify-center text-xl mb-4"
                style={{ backgroundColor: "var(--bg-overlay)" }}
              >
                🔍
              </div>
              <h3 className="text-lg" style={{ color: "var(--text-primary)" }}>
                Deal Sourcing
              </h3>
              <p className="text-sm mb-0">
                Finding off-market and on-market opportunities that match
                investor criteria and goals.
              </p>
            </Card>

            <Card>
              <div
                className="w-12 h-12 rounded-[var(--radius-sm)] flex items-center justify-center text-xl mb-4"
                style={{ backgroundColor: "var(--bg-overlay)" }}
              >
                📊
              </div>
              <h3 className="text-lg" style={{ color: "var(--text-primary)" }}>
                Analysis
              </h3>
              <p className="text-sm mb-0">
                Comprehensive property analysis including ROI calculations,
                market research, and due diligence.
              </p>
            </Card>

            <Card>
              <div
                className="w-12 h-12 rounded-[var(--radius-sm)] flex items-center justify-center text-xl mb-4"
                style={{ backgroundColor: "var(--bg-overlay)" }}
              >
                🤝
              </div>
              <h3 className="text-lg" style={{ color: "var(--text-primary)" }}>
                Investor Relations
              </h3>
              <p className="text-sm mb-0">
                Connecting investors with opportunities and maintaining ongoing
                relationships.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Instagram Section */}
      <section className="section">
        <div className="container">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            <div className="md:flex-1">
              <h2>Follow Us on Instagram</h2>
              <p className="text-lead max-w-xl mb-0">
                Stay up to date with our latest properties, investment tips, and behind-the-scenes content.
              </p>
            </div>

            <div
              className="w-full md:w-[25rem] md:flex-shrink-0 rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
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
                <p className="text-white/70 text-xs mb-0">@solynproperties</p>
              </div>
            </div>

            {/* Instagram Embed */}
            <div className="bg-white">
              <blockquote
                className="instagram-media"
                data-instgrm-permalink="https://www.instagram.com/solynproperties/"
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
                    href="https://www.instagram.com/solynproperties/"
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
              href="https://instagram.com/solynproperties"
              target="_blank"
              rel="noopener noreferrer"
              className="block p-4 text-center text-white font-medium text-sm no-underline hover:bg-white/10 transition-colors"
            >
              Follow @solynproperties →
            </a>
          </div>
          </div>
        </div>
      </section>
    </>
  );
}
