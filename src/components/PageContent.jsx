import React from 'react';
import Link from 'next/link';
import Navbar from './Navbar';

export default function PageContent({ children, className = '' }) {
  return (
    <div className="site-shell min-h-[100svh] flex flex-col bg-white text-woodland">
      <Navbar />

      <main className={`flex-1 ${className}`}>
        {children}
      </main>

      {/* Editorial Footer */}
      <footer className="site-footer px-6 sm:px-12 py-12">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-6 font-sans text-[14px] text-woodland-muted">
          <div>
            <span className="font-display font-bold text-[18px] text-woodland block leading-none">
              Andressa Souza
            </span>
            <span className="text-[13px] text-woodland-muted mt-1 block">
              Full Stack Software Engineer · Brazil
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-[14px]">
            <Link href="/" className="hover:text-woodland transition-colors duration-150">
              Home
            </Link>
            <Link href="/about-me" className="hover:text-woodland transition-colors duration-150">
              About Me
            </Link>
            <Link href="/projects" className="hover:text-woodland transition-colors duration-150">
              Projects
            </Link>
            <Link href="/contact" className="hover:text-woodland transition-colors duration-150">
              Contact
            </Link>
          </div>

          <div className="text-[13px]">
            <p>© {new Date().getFullYear()} Andressa Souza. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
