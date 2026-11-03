import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/about-me', label: 'About Me', aliases: ['/about-me', '/about'] },
  { href: '/projects', label: 'Projects' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  // Close mobile drawer on route transition
  useEffect(() => {
    const handleRouteChange = () => setIsOpen(false);
    router.events.on('routeChangeStart', handleRouteChange);
    return () => router.events.off('routeChangeStart', handleRouteChange);
  }, [router.events]);

  // Close mobile drawer on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Prevent background scroll when mobile drawer is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const isCurrentRoute = (item) => {
    if (item.aliases) {
      return item.aliases.includes(router.pathname);
    }
    return router.pathname === item.href;
  };

  return (
    <header className="site-header relative z-50 bg-white">
      <div className="max-w-6xl mx-auto px-6 sm:px-12 py-7 flex items-center justify-between">
        {/* Brand / Name */}
        <Link
          href="/"
          className="group flex flex-col focus-visible:outline-none"
          aria-label="Andressa Souza - Home"
        >
          <span className="font-display font-bold text-[22px] sm:text-[26px] tracking-tight leading-none text-woodland group-hover:text-woodland-dark transition-colors duration-150">
            Andressa Souza
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav
          aria-label="Main navigation"
          className="hidden md:flex items-center gap-8 font-sans text-[15px]"
        >
          {NAV_LINKS.map((item) => {
            const active = isCurrentRoute(item);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? 'page' : undefined}
                className={`py-1 transition-colors duration-150 ${
                  active
                    ? 'text-woodland font-bold underline underline-offset-8 decoration-2'
                    : 'text-woodland-muted hover:text-woodland font-medium'
                }`}
              >
                {item.label}
              </Link>
            );
          })}

          <a
            href="https://drive.google.com/file/d/1ovVisZW2tSD2cbnM5LVeN1sLuYbIbc7S/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-peach text-woodland hover:bg-woodland hover:text-white font-sans text-[14px] font-semibold transition-[background-color,color] duration-150"
          >
            Resumé
          </a>
        </nav>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 p-2 text-woodland focus:outline-none"
        >
          <span
            className={`w-6 h-[2px] bg-woodland transition-[transform,opacity] duration-200 origin-center ${
              isOpen ? 'rotate-45 translate-y-[7px]' : 'mb-1.5'
            }`}
          />
          <span
            className={`w-6 h-[2px] bg-woodland transition-[transform,opacity] duration-200 ${
              isOpen ? 'opacity-0 scale-x-0' : 'mb-1.5'
            }`}
          />
          <span
            className={`w-6 h-[2px] bg-woodland transition-[transform,opacity] duration-200 origin-center ${
              isOpen ? '-rotate-45 -translate-y-[7px]' : ''
            }`}
          />
        </button>
      </div>

      {/* Mobile Drawer */}
      <div
        id="mobile-menu"
        hidden={!isOpen}
        className={`md:hidden overflow-hidden transition-[max-height,opacity] duration-300 ease-out bg-peach-surface ${
          isOpen ? 'max-h-[360px] opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
        }`}
      >
        <div className="px-6 py-6 flex flex-col gap-4 font-sans text-[17px]">
          {NAV_LINKS.map((item) => {
            const active = isCurrentRoute(item);
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`py-2 transition-colors duration-150 ${
                  active
                    ? 'text-woodland font-bold underline underline-offset-4'
                    : 'text-woodland-muted hover:text-woodland font-medium'
                }`}
              >
                {item.label}
              </Link>
            );
          })}

          <a
            href="https://drive.google.com/file/d/1ovVisZW2tSD2cbnM5LVeN1sLuYbIbc7S/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsOpen(false)}
            className="mt-2 text-center py-3 bg-woodland text-peach font-semibold"
          >
            Checkout my resumé
          </a>
        </div>
      </div>
    </header>
  );
}
