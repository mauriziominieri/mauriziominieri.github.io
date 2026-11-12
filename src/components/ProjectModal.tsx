import React, { useEffect } from 'react';
import { X, ExternalLink, MessageCircle } from 'lucide-react';
import { PROFILE, ProjectItem } from '../data/portfolioData';
import { ProjectPreview } from './ProjectPreview';
import { setClarityTag, trackClarityEvent } from '../utils/analytics';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
  onBookSimilar: (topic: string) => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  onClose,
}) => {
  useEffect(() => {
    if (!project) return;
    setClarityTag('last_project_opened', project.id);
    trackClarityEvent('project_modal_open');
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [project, onClose]);

  if (!project) return null;

  const waHref = `https://wa.me/${PROFILE.whatsappNumber}?text=${encodeURIComponent(
    `Ciao Maurizio, ho visto il tuo progetto "${project.title}" e vorrei informazioni per una lezione.`
  )}`;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-3 backdrop-blur-sm sm:p-4"
      onClick={onClose}
    >
      <div
        className="relative max-h-[92vh] w-full max-w-2xl overflow-y-auto rounded-2xl border border-zinc-800 bg-[#121216] text-zinc-100 shadow-2xl sm:max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sticky top-0 z-10 flex items-center justify-between gap-4 border-b border-zinc-800 bg-[#121216]/95 px-4 py-3.5 backdrop-blur sm:px-6 sm:py-4">
          <div className="flex items-center gap-2 text-xs text-zinc-400 tabular-nums">
            <span className="font-medium text-[#EB6131]">{project.category}</span>
            <span aria-hidden="true">·</span>
            <span>{project.year}</span>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Chiudi dettaglio progetto"
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-zinc-800 bg-[#09090B] text-zinc-300 transition-colors hover:border-zinc-700 hover:text-white cursor-pointer"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <div className="h-48 w-full overflow-hidden border-b border-zinc-800 bg-[#09090C] sm:h-56">
          <ProjectPreview projectId={project.id} />
        </div>

        <div className="p-5 sm:p-8">
          <h3
            id="project-modal-title"
            className="font-display text-2xl font-semibold tracking-tight text-zinc-100"
          >
            {project.title}
          </h3>
          <p className="mt-1 text-sm text-zinc-400">{project.role}</p>

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

          <div className="mt-5 flex flex-wrap items-center justify-between gap-4">
            <p className="font-mono text-xs text-zinc-300">{project.stack.join(' · ')}</p>
            <p className="text-xs font-medium text-[#EB6131]">{project.impact}</p>
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a
              href={waHref}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackClarityEvent('whatsapp_project_click')}
              className="inline-flex min-h-[44px] w-full sm:w-auto items-center justify-center gap-2 rounded-lg bg-[#EB6131] px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-[#d85325]"
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
