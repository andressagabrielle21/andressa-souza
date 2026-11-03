import React, { useState } from 'react';
import PageContent from '@/components/PageContent';
import Button from '@/components/Button';

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText('andressagss21@gmail.com');
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <PageContent>
      <div className="max-w-6xl mx-auto px-6 sm:px-12 py-16 sm:py-24">
        {/* Title Header */}
        <div className="mb-14 sm:mb-18">
          <span className="font-sans text-[13px] text-woodland-muted uppercase tracking-wider block mb-2">
            Get In Touch
          </span>
          <h1 className="font-display font-bold text-[48px] sm:text-[68px] lg:text-[80px] leading-[0.95] tracking-tight text-woodland">
            Keep In Touch.
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Direct email & contact actions */}
          <div className="lg:col-span-7 space-y-8">
            <p className="font-serif text-[22px] sm:text-[26px] text-woodland leading-[1.35] max-w-xl">
              I’m always open to discussing new software engineering roles, full
              stack projects, and meaningful technical collaborations. Feel free
              to reach out directly.
            </p>

            {/* Email Card */}
            <div className="bg-peach-surface p-8 sm:p-10 space-y-4">
              <span className="font-sans text-[13px] text-woodland-muted uppercase tracking-wider block">
                Direct Email
              </span>
              <a
                href="mailto:andressagss21@gmail.com"
                className="font-display font-bold text-[28px] sm:text-[40px] text-woodland hover:text-woodland-dark transition-colors duration-150 block break-all leading-tight"
              >
                andressagss21@gmail.com
              </a>

              <div className="flex flex-wrap items-center gap-4 pt-4">
                <Button href="mailto:andressagss21@gmail.com" variant="primary">
                  Send an Email
                </Button>
                <Button onClick={handleCopyEmail} variant="outline">
                  {copied ? 'Copied to Clipboard!' : 'Copy Email Address'}
                </Button>
              </div>
            </div>

            {/* Work & Location notice */}
            <div className="bg-peach-surface/60 p-6 space-y-2 font-sans text-[14px]">
              <span className="text-woodland-muted block text-[12px] uppercase tracking-wider">
                Availability
              </span>
              <p className="text-woodland font-medium">
                Based in Brazil · Available for remote full-time positions and worldwide contracts.
              </p>
            </div>
          </div>

          {/* Right Column: Social Links Index */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-peach-surface p-8 sm:p-10 space-y-6">
              <h2 className="font-display font-bold text-[24px] text-woodland">
                Check Out My Socials
              </h2>

              <div className="space-y-3 font-sans text-[15px]">
                <a
                  href="https://www.linkedin.com/in/andressa-souza-611857138/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-peach p-4 text-woodland hover:bg-peach-deep transition-[background-color] duration-150 flex items-center justify-between font-medium"
                >
                  <span className="flex items-center gap-2">
                    <svg
                      className="w-4 h-4 fill-woodland"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.53 1.53 0 1 0 0-3.06 1.53 1.53 0 0 0 0 3.06m1.4 9.74v-8.37H5.06v8.37h2.8z" />
                    </svg>
                    LinkedIn
                  </span>
                  <span>↗</span>
                </a>

                <a
                  href="https://github.com/andressagabrielle21"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-peach p-4 text-woodland hover:bg-peach-deep transition-[background-color] duration-150 flex items-center justify-between font-medium"
                >
                  <span className="flex items-center gap-2">
                    <svg
                      className="w-4 h-4 fill-woodland"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z" />
                    </svg>
                    GitHub
                  </span>
                  <span>↗</span>
                </a>

                <a
                  href="https://www.instagram.com/andressagabriele/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-peach p-4 text-woodland hover:bg-peach-deep transition-[background-color] duration-150 flex items-center justify-between font-medium"
                >
                  <span className="flex items-center gap-2">
                    <svg
                      className="w-4 h-4 fill-woodland"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
                    </svg>
                    Instagram
                  </span>
                  <span>↗</span>
                </a>

                <a
                  href="https://drive.google.com/file/d/1ovVisZW2tSD2cbnM5LVeN1sLuYbIbc7S/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-peach p-4 text-woodland hover:bg-peach-deep transition-[background-color] duration-150 flex items-center justify-between font-medium"
                >
                  <span className="flex items-center gap-2">
                    <svg
                      className="w-4 h-4 fill-woodland"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zm4 18H6V4h7v5h5v11z" />
                    </svg>
                    View Resumé (PDF)
                  </span>
                  <span>↗</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageContent>
  );
}
