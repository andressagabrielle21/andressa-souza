import React from 'react';
import Button from './Button';
import ProjectCover from './ProjectCover';

export default function ProjectCard({
  title,
  projectInfo,
  coverImgUrl,
  repLink,
  deployedWebsite,
  language,
  stars = 0,
  forks = 0,
}) {
  return (
    <article className="bg-peach-surface p-7 sm:p-8 flex flex-col justify-between transition-[background-color] duration-150 hover:bg-peach-deep">
      <div>
        <ProjectCover src={coverImgUrl} title={title} className="mb-5 w-full aspect-video object-cover object-top" />
        {/* Top Meta: Language tag & stats */}
        <div className="flex items-center justify-between gap-4 mb-4 font-sans text-[13px] text-woodland-muted">
          <span className="font-semibold text-woodland bg-peach px-2.5 py-1">
            {language || 'Full Stack'}
          </span>

          <div className="flex items-center gap-3">
            {stars > 0 && (
              <span className="flex items-center gap-1">
                <svg
                  className="w-3.5 h-3.5 fill-woodland"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
                {stars}
              </span>
            )}
            {forks > 0 && (
              <span className="flex items-center gap-1">
                <svg
                  className="w-3.5 h-3.5 fill-woodland"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M6 2a3 3 0 00-3 3c0 1.3.84 2.4 2 2.82V11a4 4 0 004 4h2v2.18a3 3 0 102 0V15a4 4 0 00-4-4H7a2 2 0 01-2-2V7.82A3.001 3.001 0 006 2zm12 0a3 3 0 00-3 3c0 1.3.84 2.4 2 2.82V11a4 4 0 00-1.42 3.08l1.42 1.42A5.98 5.98 0 0019 11V7.82A3.001 3.001 0 0018 2z" />
                </svg>
                {forks}
              </span>
            )}
          </div>
        </div>

        {/* Project Title */}
        <h3 className="font-display font-bold text-[24px] sm:text-[28px] tracking-tight leading-snug mb-3 text-woodland">
          {title}
        </h3>

        {/* Description */}
        <p className="font-serif text-[17px] sm:text-[18px] text-woodland-muted leading-relaxed mb-6 line-clamp-3">
          {projectInfo || 'Open-source full stack software engineering repository.'}
        </p>
      </div>

      {/* Action buttons */}
      <div className="flex flex-wrap items-center gap-3 pt-2">
        {repLink && (
          <Button
            href={repLink}
            variant="primary"
            className="flex-1 text-[13px] py-2"
          >
            GitHub Repository
          </Button>
        )}
        {deployedWebsite && (
          <Button
            href={deployedWebsite}
            variant="outline"
            className="flex-1 text-[13px] py-2"
          >
            Live Demo ↗
          </Button>
        )}
      </div>
    </article>
  );
}

