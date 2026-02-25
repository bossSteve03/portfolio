import React from "react";
import { Badge, Timeline, TimelineItem, TechCard } from "../../components";
import dekraLogo from "../../assets/dekra.jpg";
import lafosseLogo from "../../assets/lafosse.jpg";

const focusAreas = [
  "Internal Systems",
  "Automation",
  "Digital Transformation",
  "Full-Stack Development",
];

const experience = [
  {
    date: "Apr 2025 - Present",
    title: "Junior Software Developer",
    company: "DEKRA",
    type: "Full-time",
    description:
      "Maintain legacy and current software applications. Develop and test new software applications and features. Provide application support where needed.",
    skills: [
      "Agile Methodologies",
      "PHP",
      "JavaScript",
      "MySQL",
      "JIRA",
      "OWASP Top 10",
      "Full-stack Development",
    ],
    logo: dekraLogo,
  },
  {
    date: "Oct 2023 - Mar 2025 · 1 yr 6 mos",
    title: "Junior Software Apprentice",
    company: "DEKRA",
    description:
      "Client-facing delivery of IT solutions through stakeholder engagement, system and process design, client configuration and development, and report building, alongside application support within enterprise environments. Awarded Distinction.",
    type: "Apprenticeship",
    skills: [
      "Agile Methodologies",
      "JavaScript",
      "PowerBI",
      "Full-lifecycle Development",
      "Stakeholder Engagement",
    ],
    logo: dekraLogo,
  },
  {
    date: "Feb 2023 - May 2023 · 4 mos",
    title: "Software Developer Trainee",
    company: "La Fosse Academy",
    type: "Greater London · Hybrid",
    description:
      "Intensive 12-week bootcamp focusing on technology fundamentals and software development principles. Part of an award-winning academy that accelerates technology careers through structured learning and mentorship.",
    skills: [
      "Node.js",
      "JavaScript",
      "Web Development",
      "Problem Solving",
      "Presentation Skills",
    ],
    logo: lafosseLogo,
  },
];

const technologies = [
  {
    title: "Core",
    subtitle: "Foundational languages",
    icon: "JS",
    variant: "core",
    technologies: [
      "JavaScript",
      "TypeScript",
      "HTML5",
      "CSS3",
      "SQL",
      "C#",
      "PHP",
    ],
  },
  {
    title: "Frontend",
    subtitle: "Interface development",
    icon: "UI",
    variant: "frontend",
    technologies: [
      "React",
      "Bootstrap",
      "Tailwind",
      "SASS",
      "Material UI",
      "Vite",
    ],
  },
  {
    title: "Backend",
    subtitle: "Server & services",
    icon: "API",
    variant: "backend",
    technologies: [
      "Node.js",
      "Express.js",
      ".NET",
      "RESTful APIs",
      "Clerk",
      "Nodemailer",
      "Nodemon",
    ],
  },
  {
    title: "Data",
    subtitle: "Storage & analysis",
    icon: "DB",
    variant: "data",
    technologies: [
      "PostgreSQL",
      "MySQL",
      "MariaDB",
      "MS SQL Server",
      "Firebase",
      "Microsoft Power BI",
    ],
  },
  {
    title: "Cloud",
    subtitle: "Infrastructure & deployment",
    icon: "☁️",
    variant: "cloud",
    technologies: [
      "Microsoft Azure",
      "Docker",
      "Netlify",
      "Vercel",
      "CI/CD",
      "XAMPP",
    ],
  },
  {
    title: "Tools",
    subtitle: "Development workflow",
    icon: "🛠️",
    variant: "tools",
    technologies: [
      "Git",
      "GitHub",
      "VS Code",
      "Visual Studio",
      "Figma",
      "Jira",
      "ESLint",
      "Prettier",
    ],
  },
  {
    title: "Testing",
    subtitle: "Quality assurance",
    icon: "✓",
    variant: "core",
    technologies: [
      "Jest",
      "Vitest",
      "React Testing Library",
      "Postman",
      "Chrome DevTools",
    ],
  },
  {
    title: "AI",
    subtitle: "AI-assisted development",
    icon: "🤖",
    variant: "frontend",
    technologies: [
      "ChatGPT",
      "Claude",
      "Claude Code",
      "MS Copilot",
      "IntelliSense",
    ],
  },
  {
    title: "Terminal",
    subtitle: "Command line tools",
    icon: ">_",
    variant: "backend",
    technologies: ["PowerShell", "CMD", "Bash", "WSL"],
  },
];

export default function Career() {
  return (
    <>
      {/* Overview Section */}
      <section
        className="section"
        style={{ paddingTop: "calc(var(--section-spacing))" }}
      >
        <div className="container">
          <h1>Software Career</h1>
          <p className="text-lead max-w-2xl mb-8">
            Full-stack development with a focus on building robust applications,
            adopting modern methodologies, and delivering clean, maintainable
            code.
          </p>

          <div className="flex flex-wrap gap-3">
            {focusAreas.map((area, index) => (
              <Badge key={index} variant="accent">
                {area}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="section">
        <div className="container">
          <h2>Experience</h2>
          <p className="text-lead max-w-2xl mb-0">
            Professional journey through software development roles, focusing on
            building robust applications and adopting modern methodologies.
          </p>

          <Timeline>
            {experience.map((item, index) => (
              <TimelineItem
                key={index}
                date={item.date}
                title={item.title}
                company={item.company}
                type={item.type}
                description={item.description}
                skills={item.skills}
                logo={item.logo}
                isLast={index === experience.length - 1}
              />
            ))}

            {/* Total Experience Summary */}
            <div className="relative mb-12 pl-[4.5rem]">
              <div
                className="absolute left-4 top-2 w-4 h-4 rounded-full border-4"
                style={{
                  backgroundColor: "var(--accent-secondary)",
                  borderColor: "var(--bg-surface)",
                }}
              />
              <div
                className="text-sm font-semibold mb-2"
                style={{ color: "var(--accent-secondary)" }}
              >
                Total Experience
              </div>
              <div
                className="p-5 rounded-[var(--radius-md)] mt-2"
                style={{ backgroundColor: "var(--bg-overlay)" }}
              >
                <h4 className="mb-2" style={{ color: "var(--text-primary)" }}>
                  2+ years professional experience
                </h4>
                <p
                  className="text-sm mb-0"
                  style={{ color: "var(--text-tertiary)" }}
                >
                  Building from apprenticeship to junior developer role, with
                  continuous growth in full-stack development, Agile
                  methodologies, and software engineering best practices.
                </p>
              </div>
            </div>
          </Timeline>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="section">
        <div className="container">
          <h2>Technologies</h2>
          <p className="text-lead max-w-2xl mb-0">
            A focused selection of tools and technologies I work with regularly,
            grouped by area of application.
          </p>

          <div
            className="mt-12 p-16 rounded-[var(--radius-xl)] relative overflow-hidden"
            style={{
              background: "var(--bg-section-highlight)",
            }}
          >
            {/* Gradient line at top */}
            <div
              className="absolute top-0 left-0 right-0 h-px"
              style={{
                background:
                  "linear-gradient(90deg, transparent, var(--accent-primary), var(--accent-secondary), var(--accent-tertiary), transparent)",
              }}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {technologies.map((tech, index) => (
                <TechCard
                  key={index}
                  title={tech.title}
                  subtitle={tech.subtitle}
                  icon={tech.icon}
                  variant={tech.variant}
                  technologies={tech.technologies}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
