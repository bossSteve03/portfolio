import React from "react";
import { Card, Button } from "../../components";
import websitePreview from "../../assets/solynwebsitehomepagepreviewscreenshot.jpeg";

export default function Property() {
  return (
    <>
      {/* Role Summary Section */}
      <section
        className="section"
        style={{ paddingTop: "calc(var(--section-spacing))" }}
      >
        <div className="container">
          <h1>Property Business</h1>
          <p className="text-lead max-w-2xl mb-8">
            Alongside my software career, I work with a property investment
            company, helping connect investors with opportunities and supporting
            portfolio growth across the UK market.
          </p>

          <Card className="max-w-2xl">
            <div className="flex items-start gap-4">
              <div
                className="w-14 h-14 rounded-[var(--radius-md)] flex items-center justify-center text-2xl flex-shrink-0"
                style={{
                  background:
                    "linear-gradient(135deg, var(--accent-secondary), #33a6d6)",
                }}
              >
                🏠
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
            <img
              src={websitePreview}
              alt="Solyn Property Investment Website"
              className="w-full h-auto object-cover"
            />

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
              <Button to="/contact">Contact Me →</Button>
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
    </>
  );
}
