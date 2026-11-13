import React, { useState } from 'react';
import { ArrowUpRight, ChevronDown, ChevronUp, ExternalLink } from 'lucide-react';
import { PROJECTS, ProjectCategory, ProjectItem } from '../data/portfolioData';
import { ProjectPreview } from './ProjectPreview';
import { setClarityTag, trackClarityEvent } from '../utils/analytics';

const CATEGORIES: ProjectCategory[] = [
  'Tutti',
  'VR & Giochi',
  'iOS',
  'Java & C',
  'Web',
];

interface PortfolioSectionProps {
  onSelectProject: (project: ProjectItem) => void;
}

export const PortfolioSection: React.FC<PortfolioSectionProps> = ({ onSelectProject }) => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('Tutti');
  const [showAll, setShowAll] = useState(false);

  const filteredByCat =
    activeCategory === 'Tutti'
      ? PROJECTS
      : PROJECTS.filter((project) => project.category === activeCategory);

  const visibleProjects =
    activeCategory === 'Tutti' && !showAll
      ? filteredByCat.filter((p) => p.featured)
      : filteredByCat;

  return (
    <section id="portfolio" className="border-b border-zinc-800/70 bg-[#0B0B0E]">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-18 lg:px-8">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-sm font-medium text-accent">
              Progetti
            </p>
            <h2 className="mt-1 font-display text-3xl font-semibold tracking-tight text-zinc-100">
              App, giochi, realtà virtuale e codice.
            </h2>
          </div>

          <div
            role="tablist"
            aria-label="Filtra progetti per categoria"
            className="flex flex-nowrap items-center gap-1 overflow-x-auto rounded-xl border border-zinc-800 bg-[#121216] p-1 max-w-full [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {CATEGORIES.map((category) => {
              const isActive = activeCategory === category;
              return (
                <button
                  key={category}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => {
                    setActiveCategory(category);
                    setClarityTag('project_category', category);
                    trackClarityEvent('project_filter_change');
                  }}
                  className={`min-h-[40px] sm:min-h-[38px] whitespace-nowrap shrink-0 rounded-lg px-3.5 py-1.5 text-xs font-medium transition-colors duration-150 cursor-pointer ${
                    isActive
                      ? 'bg-accent text-white'
                      : 'text-zinc-400 hover:text-zinc-100'
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {visibleProjects.map((project) => (
            <article
              key={project.id}
              className="group flex flex-col overflow-hidden rounded-2xl border border-zinc-800 bg-[#121216] transition-colors duration-200 hover:border-zinc-700"
            >
              <button
                type="button"
                onClick={() => onSelectProject(project)}
                className="flex flex-1 min-w-0 flex-col text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent cursor-pointer"
              >
                <div className="min-h-[205px] sm:aspect-[16/10] w-full overflow-hidden border-b border-zinc-800/80 bg-[#09090C]">
                  <ProjectPreview projectId={project.id} />
                </div>

                <div className="flex flex-1 min-w-0 flex-col justify-between p-4 pb-3.5 sm:p-5 sm:pb-4">
                  <div className="min-w-0">
                    <div className="flex items-center gap-2 text-xs text-zinc-400 tabular-nums min-w-0">
                      <span className="shrink-0 font-medium text-accent">{project.category}</span>
                      <span aria-hidden="true" className="shrink-0">·</span>
                      <span className="shrink-0">{project.year}</span>
                      <span aria-hidden="true" className="shrink-0">·</span>
                      <span className="truncate">{project.stack.join(' · ')}</span>
                    </div>

                    <h3 className="mt-2 font-display text-lg font-semibold tracking-tight text-zinc-100 group-hover:text-white">
                      {project.title}
                    </h3>

                    <p className="mt-1.5 text-sm leading-relaxed text-zinc-400">
                      {project.summary}
                    </p>
                  </div>
                </div>
              </button>

              <div className="flex flex-wrap items-center justify-between gap-3 border-t border-zinc-800/80 px-4 py-3 sm:px-5 sm:py-3.5">
                <div className="flex flex-wrap items-center gap-3.5">
                  {project.links.slice(0, 2).map((link) => (
                    <a
                      key={link.label}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 whitespace-nowrap text-xs font-medium text-zinc-300 underline decoration-zinc-700 underline-offset-4 transition-colors hover:text-white hover:decoration-accent"
                    >
                      <span>{link.label}</span>
                      <ExternalLink className="h-3 w-3" aria-hidden="true" />
                    </a>
                  ))}
                </div>

                <button
                  type="button"
                  onClick={() => onSelectProject(project)}
                  className="inline-flex shrink-0 items-center gap-1 whitespace-nowrap text-xs font-semibold text-accent transition-transform duration-150 hover:translate-x-0.5 cursor-pointer"
                >
                  <span>Dettagli</span>
                  <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                </button>
              </div>
            </article>
          ))}
        </div>

        {activeCategory === 'Tutti' && (
          <div className="mt-8 flex justify-center">
            <button
              type="button"
              onClick={() => setShowAll((prev) => !prev)}
              aria-expanded={showAll}
              className="inline-flex min-h-[42px] items-center justify-center gap-2 rounded-lg border border-zinc-800 bg-[#121216] px-5 py-2 text-sm font-medium text-zinc-200 transition-colors hover:border-zinc-700 hover:text-white cursor-pointer"
            >
              <span>
                {showAll
                  ? 'Mostra solo i 6 in evidenza'
                  : `Vedi tutti i ${PROJECTS.length} progetti`}
              </span>
              {showAll ? (
                <ChevronUp className="h-4 w-4 text-accent" aria-hidden="true" />
              ) : (
                <ChevronDown className="h-4 w-4 text-accent" aria-hidden="true" />
              )}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
