import ProjectCover, { projectCoverUrl } from '@/components/ProjectCover';
import React, { useEffect, useState } from "react";
import Head from "next/head";

const RESUME =
  "https://drive.google.com/file/d/1ovVisZW2tSD2cbnM5LVeN1sLuYbIbc7S/view?usp=sharing";
const SECTIONS = ["About", "Experience", "Projects", "Contact"];
const EXPERIENCE = [
  {
    area: "2026 - PRESENT",
    title: "Korporate • Full Stack Engineer",
    description:
      "Development of REST API applications using Java and Spring Boot (JPA & Spring Data); React.js, TypeScript and ",
    tags: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "Java",
      "Spring Boot",
      "SQL",
      "Redux",
      "Zustand",
    ],
  },
  {
    area: "2024-2025",
    title: "Unimed • Systems Analyst",
    description:
      "Development of REST API applications using Java and Spring Boot (JPA & Spring Data); React.js, Next.js, Node.js, and React Native; Responsible for designing, developing, and maintaining the quality of systems already implemented at the company using Java, Angular, and APEX; Member of the team responsible for integrating AI into Unimed JP’s medical auditing process; Application of software development best practices, such as Clean Code, layered architecture, and code standardization;  Analysis, extraction, and processing of Unimed JP data using SQL (Oracle and MySQL) and PL/SQL, with a focus on data integrity, performance and reliability.",
    tags: ["Java", "Spring Boot", "PL/SQL", "Django", "REST APIs", "SQL"],
  },
  {
    area: "2022-2023",
    title: "SOVOS • Frontend Engineer",
    description:
      "Responsible for developing and maintaining Sovos's Design System: Mosaic React, with React, Next.js, Styled Components, Node.js, TypeScript, Jest, Cypress, React Testing Library and Storybook, used by more than 500 developers; Maintenance of Restful APIs with Node.js and Express.js; Maintenance of the delivery and integration (CI/CD) of the project with AWS, Azure DevOps and Jenkins; Strong emphasis on software quality through unit and integration test automation using Cypress, Jest, and React Testing Library.",
    tags: [
      "JavaScript",
      "TypeScript",
      "Next.js",
      "Node.js",
      "Jest",
      "React Testing Library",
      "AWS",
      "Redux",
    ],
  },
];
const PROJECTS = [
  {
    name: "myMovies",
    repo: "myMovies",
    description:
      "A movie discovery web app powered by the TMDB API. Search for movies and save your favorites with a responsive interface.",
    tags: ["React", "TypeScript", "Tailwind CSS", "Zustand", "Appwrite"],
  },
  {
    name: "myMovies Mobile",
    repo: "myMovies-mobile",
    description:
      "A native mobile movie app with TMDB integration and authentication, bringing the movie discovery experience to your phone.",
    tags: ["React Native", "TypeScript", "NativeWind", "Supabase"],
  },
  {
    name: "Finances App",
    repo: "financesApp_nextjs",
    description:
      "A web application for tracking finances, built with Next.js and a MongoDB database.",
    tags: ["Next.js", "React", "TypeScript", "MongoDB", "Tailwind CSS"],
  },
  {
    name: "Livraria",
    repo: "livraria-node-api",
    description:
      "A full stack bookstore application combining a Node.js and Express API with a React frontend.",
    tags: ["Node.js", "Express", "MongoDB", "Mongoose", "React"],
  },
];
function Arrow() {
  return (
    <span aria-hidden="true" className="portfolio-arrow">
      ↗
    </span>
  );
}
function Tags({ items }) {
  return (
    <ul className="portfolio-tags" aria-label="Technologies">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}
function SocialIcon({ kind }) {
  const paths = {
    github:
      "M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.86c-2.78.6-3.37-1.18-3.37-1.18-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.89 1.52 2.34 1.08 2.91.83.09-.65.35-1.08.63-1.33-2.22-.25-4.56-1.11-4.56-4.94 0-1.09.39-1.98 1.03-2.68-.1-.26-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02A9.58 9.58 0 0 1 12 6.84c.85 0 1.71.11 2.51.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.39.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85v2.75c0 .27.18.58.69.48A10 10 0 0 0 12 2Z",
    linkedin:
      "M20.45 2H3.55C2.69 2 2 2.68 2 3.52v16.96c0 .84.69 1.52 1.55 1.52h16.9c.86 0 1.55-.68 1.55-1.52V3.52c0-.84-.69-1.52-1.55-1.52ZM7.93 18.75H4.98V9.2h2.95v9.55ZM6.45 7.9a1.71 1.71 0 1 1 0-3.42 1.71 1.71 0 0 1 0 3.42Zm12.3 10.85H15.8V14.1c0-1.11-.02-2.54-1.55-2.54-1.55 0-1.79 1.21-1.79 2.46v4.73H9.51V9.2h2.83v1.3h.04c.39-.74 1.36-1.53 2.79-1.53 2.98 0 3.58 1.96 3.58 4.51v5.27Z",
    mail: "M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 4-8 5-8-5V6l8 5 8-5v2Z",
  };
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d={paths[kind]} />
    </svg>
  );
}

export default function Home() {
  const [active, setActive] = useState("about");
  useEffect(() => {
    const updateSection = () => {
      const sections = SECTIONS.map((name) =>
        document.getElementById(name.toLowerCase()),
      );
      const current = [...sections]
        .reverse()
        .find(
          (section) =>
            section &&
            section.getBoundingClientRect().top <= window.innerHeight * 0.35,
        );
      setActive(current ? current.id : "about");
    };
    updateSection();
    window.addEventListener("scroll", updateSection, { passive: true });
    window.addEventListener("resize", updateSection);
    return () => {
      window.removeEventListener("scroll", updateSection);
      window.removeEventListener("resize", updateSection);
    };
  }, []);

  return (
    <div className="portfolio-page">
      <Head>
        <title>Andressa Souza — Full Stack Software Engineer</title>
        <meta
          name="description"
          content="Andressa Souza is a Full Stack Software Engineer based in Brazil, building accessible interfaces and reliable web applications."
        />
        <meta name="theme-color" content="#4a4616" />
      </Head>
      <a className="portfolio-skip" href="#about">
        Skip to content
      </a>
      <div className="portfolio-layout">
        <header className="portfolio-sidebar">
          <div>
            <a href="#" className="portfolio-name">
              <h1>Andressa Souza</h1>
            </a>
            <p className="portfolio-role">Full Stack Software Engineer</p>
            <p className="portfolio-intro">
              I build accessible interfaces and reliable systems for the web.
            </p>
            <nav className="portfolio-nav" aria-label="Sections">
              {SECTIONS.map((name) => {
                const id = name.toLowerCase();
                return (
                  <a
                    key={id}
                    href={`#${id}`}
                    className={active === id ? "is-active" : ""}
                    aria-current={active === id ? "location" : undefined}
                  >
                    <span className="portfolio-nav-line" aria-hidden="true" />
                    {name}
                  </a>
                );
              })}
            </nav>
          </div>
          <div className="portfolio-socials">
            <a
              href="https://github.com/andressagabrielle21"
              aria-label="GitHub"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SocialIcon kind="github" />
            </a>
            <a
              href="https://www.linkedin.com/in/andressa-souza-611857138/"
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SocialIcon kind="linkedin" />
            </a>
            <a
              href="mailto:andressagss21@gmail.com"
              aria-label="Email Andressa"
            >
              <SocialIcon kind="mail" />
            </a>
            <a
              href="https://www.instagram.com/andressagabriele/"
              target="_blank"
              rel="noopener noreferrer"
              className="portfolio-instagram"
              aria-label="Instagram"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                aria-hidden="true"
              >
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle
                  cx="17.5"
                  cy="6.5"
                  r=".8"
                  fill="currentColor"
                  stroke="none"
                />
              </svg>
            </a>
          </div>
        </header>

        <main className="portfolio-main">
          <section
            id="about"
            className="portfolio-section portfolio-about"
            aria-labelledby="about-heading"
          >
            <h2 id="about-heading">About</h2>
            <p>
              I’m a developer based in <strong>Brazil</strong> who enjoys
              turning complex problems into useful, approachable software. I
              care about the details that make an interface feel natural and the
              engineering that makes it dependable.
            </p>
            <p>
              My work spans{" "}
              <strong>frontend development and backend systems</strong>. I build
              responsive experiences with React, Next.js, and TypeScript, and
              develop services with Java, Spring Boot, Python, and Django.
            </p>
            <p>
              I’m drawn to the intersection of{" "}
              <strong>clear code and thoughtful design</strong>: accessible
              interfaces, maintainable architecture, and solutions that put the
              people using them first.
            </p>
            <p>
              I’m open to full stack engineering roles, remote opportunities,
              and projects where I can contribute across the stack.
            </p>
          </section>

          <section
            id="skills"
            className="portfolio-section"
            aria-labelledby="skills-heading"
          >
            <h2 id="skills-heading">EXPERIENCE</h2>
            <div className="portfolio-entries">
              {EXPERIENCE.map((skill) => (
                <article className="portfolio-entry" key={skill.area}>
                  <p className="portfolio-entry-meta">{skill.area}</p>
                  <div>
                    <h3>{skill.title}</h3>
                    <p>{skill.description}</p>
                    <Tags items={skill.tags} />
                  </div>
                </article>
              ))}
            </div>
            <a
              href={RESUME}
              target="_blank"
              rel="noopener noreferrer"
              className="portfolio-text-link"
            >
              View full résumé <Arrow />
            </a>
          </section>

          <section
            id="projects"
            className="portfolio-section"
            aria-labelledby="projects-heading"
          >
            <h2 id="projects-heading">Projects</h2>
            <div className="portfolio-entries">
              {PROJECTS.map((project) => (
                <article
                  className="portfolio-entry portfolio-project"
                  key={project.repo}
                >
                  <div><ProjectCover src={projectCoverUrl("andressagabrielle21", project.repo)} title={project.name} className="mb-2 w-full aspect-video object-cover object-top rounded" /><p className="portfolio-entry-meta">{project.tags[0]}</p></div>
                  <div>
                    <h3>
                      <a
                        href={`https://github.com/andressagabrielle21/${project.repo}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {project.name} <Arrow />
                      </a>
                    </h3>
                    <p>{project.description}</p>
                    <Tags items={project.tags} />
                  </div>
                </article>
              ))}
            </div>
            <a
              href="https://github.com/andressagabrielle21?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="portfolio-text-link"
            >
              View all projects <Arrow />
            </a>
          </section>

          <section
            id="contact"
            className="portfolio-section portfolio-contact"
            aria-labelledby="contact-heading"
          >
            <h2 id="contact-heading">Contact</h2>
            <h3>Let’s work together.</h3>
            <p>
              Have a project in mind or an opportunity to share? I’d love to
              hear from you.
            </p>
            <a
              href="mailto:andressagss21@gmail.com"
              className="portfolio-text-link portfolio-email"
            >
              andressagss21@gmail.com <Arrow />
            </a>
            <p className="portfolio-location">
              Based in Brazil · Open to remote opportunities.
            </p>
          </section>
          <footer className="portfolio-footer">
            <p>
              Built with Next.js and Tailwind CSS.
              <br />
              Layout inspired by{" "}
              <a
                href="https://brittanychiang.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Brittany Chiang
              </a>
              , adapted with woodland & creamy peach.
            </p>
            <a href="#" className="portfolio-top">
              Back to top ↑
            </a>
          </footer>
        </main>
      </div>
    </div>
  );
}

