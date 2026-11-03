import React from 'react';
import PageContent from '@/components/PageContent';
import Button from '@/components/Button';

const SKILL_CATEGORIES = [
  {
    category: 'Languages & Core Systems',
    skills: [
      'TypeScript',
      'JavaScript (ESNext)',
      'Java (OOP & Clean Architecture)',
      'Python',
      'HTML5 & Modern CSS3',
      'SQL & Relational Databases',
    ],
  },
  {
    category: 'Frameworks & Libraries',
    skills: [
      'React.js & Next.js',
      'Spring Boot & Spring Data',
      'Django Framework',
      'Redux & Redux Toolkit',
      'Zustand',
      'Tailwind CSS',
      'Styled Components',
    ],
  },
  {
    category: 'Practices, DevOps & Workflow',
    skills: [
      'Git & GitFlow',
      'SCRUM & Agile Culture',
      'DevOps Fundamentals & CI/CD',
      'RESTful API Architecture',
      'Web Accessibility (WCAG)',
      'Test-Driven Development (TDD) Mindset',
    ],
  },
];

export default function AboutMe() {
  return (
    <PageContent>
      <div className="max-w-6xl mx-auto px-6 sm:px-12 py-16 sm:py-24">
        {/* Page Title */}
        <div className="mb-14 sm:mb-18">
          <span className="font-sans text-[13px] text-woodland-muted uppercase tracking-wider block mb-2">
            Biography & Philosophy
          </span>
          <h1 className="font-display font-bold text-[48px] sm:text-[68px] lg:text-[80px] leading-[0.95] tracking-tight text-woodland">
            About Me.
          </h1>
        </div>

        {/* Editorial Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Narrative Copy */}
          <div className="lg:col-span-7 space-y-8 font-serif text-[20px] sm:text-[23px] text-woodland leading-[1.45]">
            <p className="font-display font-semibold text-[26px] sm:text-[32px] text-woodland leading-[1.25]">
              My name is Andressa Souza! I’m a Full Stack Developer from Brazil,
              focused on the solution of problems and in the best experience for the users.
            </p>

            <p>
              I love working with Web Development, designing and developing
              accessible and user-friendly websites. My goal is to make the
              difference with those projects through clean code, structured thinking,
              and meticulous attention to interface details.
            </p>

            <p>
              My journey spans both frontend engineering and backend system design.
              Whether architecting reliable RESTful APIs with Java and Spring Boot,
              building responsive interfaces with React and Next.js, or writing
              maintainable domain models with Python and Django, I believe exceptional
              software is born from the harmony between engineering rigor and creative empathy.
            </p>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <Button
                href="https://drive.google.com/file/d/1ovVisZW2tSD2cbnM5LVeN1sLuYbIbc7S/view?usp=sharing"
                variant="primary"
                target="_blank"
              >
                Checkout my resumé
              </Button>
              <Button href="/contact" variant="outline">
                Get in Touch
              </Button>
            </div>
          </div>

          {/* Right Column: Structured Skills & Overview */}
          <div className="lg:col-span-5 space-y-6">
            {/* Quick Fact Sheet */}
            <div className="bg-peach-surface p-7 sm:p-8">
              <h2 className="font-display font-bold text-[20px] text-woodland mb-4">
                Profile Overview
              </h2>
              <div className="space-y-3 font-sans text-[14px]">
                <div>
                  <span className="text-woodland-muted block text-[12px]">Location</span>
                  <span className="text-woodland font-semibold">Brazil · Remote / Worldwide</span>
                </div>
                <div>
                  <span className="text-woodland-muted block text-[12px]">Specialization</span>
                  <span className="text-woodland font-semibold">Full Stack Web Engineering</span>
                </div>
                <div>
                  <span className="text-woodland-muted block text-[12px]">Core Stack</span>
                  <span className="text-woodland font-semibold">TypeScript, React, Next.js, Java, Spring Boot, Python</span>
                </div>
              </div>
            </div>

            {/* Skills Taxonomy */}
            <div className="bg-peach-surface p-7 sm:p-8 space-y-6">
              <h2 className="font-display font-bold text-[22px] text-woodland">
                My Main Skills
              </h2>

              {SKILL_CATEGORIES.map((group) => (
                <div key={group.category} className="space-y-2">
                  <h3 className="font-sans font-semibold text-[13px] text-woodland-muted uppercase tracking-wider">
                    {group.category}
                  </h3>
                  <div className="flex flex-wrap gap-2 pt-1">
                    {group.skills.map((skill) => (
                      <span
                        key={skill}
                        className="bg-peach px-3 py-1 font-sans text-[13px] text-woodland font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </PageContent>
  );
}
