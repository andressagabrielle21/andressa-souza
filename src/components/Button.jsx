import React from 'react';
import Link from 'next/link';

export default function Button({
  href,
  link,
  buttonName,
  children,
  onClick,
  variant = 'primary',
  target,
  rel,
  className = '',
}) {
  const destination = href || link;
  const content = buttonName || children;

  const baseStyles =
    'inline-flex items-center justify-center font-sans font-semibold text-[15px] px-6 py-3 tracking-normal transition-[background-color,color] duration-150 cursor-pointer text-center';

  const variants = {
    primary:
      'bg-woodland text-white hover:bg-woodland-dark',
    secondary:
      'bg-peach-surface text-woodland hover:bg-peach-deep',
    outline:
      'bg-transparent text-woodland border-2 border-woodland hover:bg-woodland hover:text-peach',
    ghost:
      'bg-transparent text-woodland-muted hover:text-woodland hover:bg-peach-surface/50',
  };

  const combinedClasses = `${baseStyles} ${variants[variant] || variants.primary} ${className}`;

  if (destination) {
    const isExternal =
      target === '_blank' ||
      destination.startsWith('http') ||
      destination.startsWith('mailto:');

    if (isExternal) {
      return (
        <a
          href={destination}
          target="_blank"
          rel={rel || 'noopener noreferrer'}
          className={combinedClasses}
        >
          {content}
        </a>
      );
    }

    return (
      <Link href={destination} className={combinedClasses}>
        {content}
      </Link>
    );
  }

  return (
    <button
      type="button"
      onClick={onClick}
      className={combinedClasses}
    >
      {content}
    </button>
  );
}
