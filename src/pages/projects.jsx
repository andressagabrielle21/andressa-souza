import React, { useState, useMemo } from 'react';
import PageContent from '@/components/PageContent';
import ProjectCard from '@/components/ProjectCard';
import Button from '@/components/Button';
import useRepositories from '@/hooks/useRepositories';

export default function Projects() {
  const { data: repos, loading, error } = useRepositories();
  const [selectedLanguage, setSelectedLanguage] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const availableLanguages = useMemo(() => {
    if (!repos || !Array.isArray(repos)) return ['All'];
    const langs = new Set();
    repos.forEach((r) => {
      if (r.language) langs.add(r.language);
    });
    return ['All', ...Array.from(langs)];
  }, [repos]);

  const filteredRepos = useMemo(() => {
    if (!repos || !Array.isArray(repos)) return [];
    return repos.filter((repo) => {
      const matchLang =
        selectedLanguage === 'All' || repo.language === selectedLanguage;
      const matchSearch =
        searchQuery.trim() === '' ||
        repo.repoName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (repo.description &&
          repo.description.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchLang && matchSearch;
    });
  }, [repos, selectedLanguage, searchQuery]);

  return (
    <PageContent>
      <div className="max-w-6xl mx-auto px-6 sm:px-12 py-16 sm:py-24">
        {/* Title Header */}
        <div className="mb-14 sm:mb-18 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <span className="font-sans text-[13px] text-woodland-muted uppercase tracking-wider block mb-2">
              GitHub Repositories & Systems
            </span>
            <h1 className="font-display font-bold text-[48px] sm:text-[68px] lg:text-[80px] leading-[0.95] tracking-tight text-woodland">
              Projects.
            </h1>
          </div>
          <p className="font-serif text-[18px] sm:text-[20px] text-woodland-muted max-w-md leading-relaxed">
            Public repositories fetched live from the GitHub REST API, featuring full stack systems, clean architecture, and frontend interfaces.
          </p>
        </div>

        {/* Filter and Search Controls */}
        <div className="bg-peach-surface p-4 sm:p-6 mb-10 flex flex-col md:flex-row gap-4 items-stretch md:items-center justify-between">
          {/* Language filter pills */}
          <div className="flex flex-wrap gap-2">
            {availableLanguages.map((lang) => (
              <button
                key={lang}
                type="button"
                onClick={() => setSelectedLanguage(lang)}
                className={`font-sans text-[13px] px-3.5 py-1.5 transition-[background-color,color] duration-150 ${
                  selectedLanguage === lang
                    ? 'bg-woodland text-peach font-semibold'
                    : 'bg-peach text-woodland-muted hover:text-woodland hover:bg-peach-deep'
                }`}
              >
                {lang}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="md:w-64">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search repositories..."
              aria-label="Filter repositories by title or description"
              className="w-full bg-peach font-sans text-[14px] text-woodland px-3.5 py-2 focus:outline-none focus:ring-2 focus:ring-woodland placeholder:text-woodland-muted/60"
            />
          </div>
        </div>

        {/* Loading State */}
        {loading && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="bg-peach-surface p-7 sm:p-8 space-y-4">
                <div className="h-4 bg-peach w-1/3" />
                <div className="h-8 bg-peach w-3/4" />
                <div className="h-4 bg-peach w-full" />
                <div className="h-4 bg-peach w-2/3" />
                <div className="h-10 bg-peach w-full mt-6" />
              </div>
            ))}
          </div>
        )}

        {/* Error State */}
        {error && (
          <div className="bg-peach-surface p-12 text-center max-w-lg mx-auto space-y-4">
            <h2 className="font-display font-bold text-[28px] text-woodland">
              Unable to load repositories
            </h2>
            <p className="font-serif text-[18px] text-woodland-muted">
              {error}
            </p>
            <Button
              onClick={() => window.location.reload()}
              variant="primary"
            >
              Try Again
            </Button>
          </div>
        )}

        {/* Repositories Grid */}
        {!loading && !error && filteredRepos.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredRepos.map((item) => (
              <ProjectCard
                key={item.id}
                title={item.repoName}
                coverImgUrl={item.coverImgUrl}
                projectInfo={item.description}
                repLink={item.cloneUrl}
                deployedWebsite={item.deployed}
                language={item.language}
                stars={item.stars}
                forks={item.forks}
              />
            ))}
          </div>
        )}

        {/* Empty State */}
        {!loading && !error && filteredRepos.length === 0 && (
          <div className="bg-peach-surface p-12 text-center">
            <p className="font-serif text-[20px] text-woodland-muted">
              No repositories found matching your current filter.
            </p>
            <button
              type="button"
              onClick={() => {
                setSelectedLanguage('All');
                setSearchQuery('');
              }}
              className="mt-4 font-sans text-[14px] text-woodland underline hover:text-woodland-dark font-medium"
            >
              Clear filters
            </button>
          </div>
        )}
      </div>
    </PageContent>
  );
}

