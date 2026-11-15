import React, { useEffect, useState } from 'react';
import { X, ExternalLink, MessageCircle, Play, FileCode2 } from 'lucide-react';
import { PROFILE, ProjectItem } from '../data/portfolioData';
import { ProjectPreview } from './ProjectPreview';
import { isProjectPlayable, ProjectInteractiveDemo } from './InteractiveDemos';
import { setClarityTag, trackClarityEvent } from '../utils/analytics';

interface ProjectModalProps {
  project: ProjectItem | null;
  initialTab?: 'demo' | 'details';
  onClose: () => void;
  onBookSimilar: (topic: string) => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  initialTab = 'demo',
  onClose,
}) => {
  const playable = project ? isProjectPlayable(project.id) : false;
  const [activeTab, setActiveTab] = useState<'demo' | 'details'>('demo');

  useEffect(() => {
    if (!project) return;
    setActiveTab(isProjectPlayable(project.id) ? initialTab : 'details');
  }, [project, initialTab]);

  useEffect(() => {
    if (!project) return;
    setClarityTag('last_project_opened', project.id);
    trackClarityEvent('project_modal_open');
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const waHref = `https://wa.me/${PROFILE.whatsappNumber}?text=${encodeURIComponent(
    `Ciao Maurizio, ho visto il tuo progetto "${project.title}" e vorrei informazioni per una lezione.`
  )}`;

  const showDemo = playable && activeTab === 'demo';

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-3 backdrop-blur-sm sm:p-4"
      onClick={onClose}
    >
      <div
        className={`relative max-h-[92vh] w-full overflow-y-auto rounded-2xl border border-zinc-800 bg-[#121216] text-zinc-100 shadow-2xl sm:max-h-[90vh] ${
          showDemo ? 'max-w-3xl' : 'max-w-2xl'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sticky top-0 z-10 flex items-center justify-between gap-4 border-b border-zinc-800 bg-[#121216]/95 px-4 py-3.5 backdrop-blur sm:px-6 sm:py-4">
          <div className="flex items-center gap-2 text-xs text-zinc-400 tabular-nums">
            <span className="font-medium text-accent">{project.category}</span>
            <span aria-hidden="true">·</span>
            <span>{project.year}</span>
          </div>

          <div className="flex items-center gap-2">
            {playable && (
              <div className="flex items-center gap-1 rounded-lg border border-zinc-800 bg-[#09090B] p-0.5">
                <button
                  type="button"
                  onClick={() => setActiveTab('demo')}
                  className={`inline-flex min-h-[32px] items-center gap-1.5 rounded-md px-2.5 text-xs font-medium transition-colors cursor-pointer ${
                    activeTab === 'demo'
                      ? 'bg-accent text-white'
                      : 'text-zinc-400 hover:text-zinc-100'
                  }`}
                >
                  <Play className="h-3 w-3" aria-hidden="true" />
                  <span>Prova live</span>
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab('details')}
                  className={`inline-flex min-h-[32px] items-center gap-1.5 rounded-md px-2.5 text-xs font-medium transition-colors cursor-pointer ${
                    activeTab === 'details'
                      ? 'bg-accent text-white'
                      : 'text-zinc-400 hover:text-zinc-100'
                  }`}
                >
                  <FileCode2 className="h-3 w-3" aria-hidden="true" />
                  <span>Scheda</span>
                </button>
              </div>
            )}

            <button
              type="button"
              onClick={onClose}
              aria-label="Chiudi dettaglio progetto"
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-zinc-800 bg-[#09090B] text-zinc-300 transition-colors hover:border-zinc-700 hover:text-white cursor-pointer"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>

        {!showDemo && (
          <div className="h-48 w-full overflow-hidden border-b border-zinc-800 bg-[#09090C] sm:h-56">
            <ProjectPreview projectId={project.id} />
          </div>
        )}

        <div className="p-5 sm:p-7">
          <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
            <h3
              id="project-modal-title"
              className="font-display text-2xl font-semibold tracking-tight text-zinc-100"
            >
              {project.title}
            </h3>
            <p className="text-xs font-medium text-accent">{project.impact}</p>
          </div>
          <p className="mt-1 text-sm text-zinc-400">{project.role}</p>

          {showDemo ? (
            <div className="mt-4">
              <ProjectInteractiveDemo projectId={project.id} />
            </div>
          ) : (
            <>
              <p className="mt-4 text-sm leading-relaxed text-zinc-300 sm:text-base">
                {project.summary}
              </p>

              <div className="mt-6 grid grid-cols-1 gap-5 border-y border-zinc-800 py-5 sm:grid-cols-2">
                <div>
                  <h4 className="text-xs font-semibold text-zinc-400">Sfida</h4>
                  <p className="mt-1.5 text-sm leading-relaxed text-zinc-300">{project.challenge}</p>
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-zinc-400">Soluzione</h4>
                  <p className="mt-1.5 text-sm leading-relaxed text-zinc-300">{project.solution}</p>
                </div>
              </div>
            </>
          )}

          <div className="mt-5 flex flex-wrap items-center justify-between gap-4 border-t border-zinc-800/80 pt-4">
            <p className="font-mono text-xs text-zinc-400">{project.stack.join(' · ')}</p>
          </div>

          <div className="mt-4 flex flex-wrap items-center gap-3">
            <a
              href={waHref}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackClarityEvent('whatsapp_project_click')}
              className="inline-flex min-h-[42px] w-full sm:w-auto items-center justify-center gap-2 rounded-lg bg-accent px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-accent-hover"
            >
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
              <span>Chiedi su WhatsApp</span>
            </a>

            {project.links.map((link) => (
              <a
                key={link.label}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[42px] items-center justify-center gap-2 rounded-lg border border-zinc-800 bg-[#09090B] px-4 py-2 text-sm font-medium text-zinc-200 transition-colors hover:border-zinc-700 hover:text-white"
              >
                <span>{link.label}</span>
                <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
