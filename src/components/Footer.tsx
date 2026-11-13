import React from 'react';
import { Award, BookOpen, ExternalLink, FileText, Mail, MessageCircle, Phone } from 'lucide-react';
import { PROFILE } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-zinc-800 bg-[#060608]">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-12">
          <div className="md:col-span-5">
            <a href="#top" className="inline-flex items-center gap-3">
              <img
                src="/images/logo-fox.svg"
                alt="Logo Maurizio Minieri"
                className="h-7 w-auto shrink-0 object-contain"
              />
              <span className="font-display text-lg font-semibold tracking-tight text-zinc-100">
                {PROFILE.name}
              </span>
            </a>

            <p className="mt-3 max-w-sm text-sm leading-relaxed text-zinc-400">
              Dottore in Informatica (Federico II), Apple Developer Academy, Ingegnere Software e
              Docente. Sviluppo digitale, realtà virtuale e formazione pratica per ragazzi e
              scuole.
            </p>

            <p className="mt-3 font-display text-sm font-medium text-accent">
              Vieni ad imparare!
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6 sm:gap-8 md:col-span-7 md:grid-cols-2">
            <div>
              <h3 className="text-xs font-semibold tracking-wide text-zinc-300">
                Contatti diretti
              </h3>
              <ul className="mt-3.5 space-y-2.5 text-sm">
                <li>
                  <a
                    href={`https://wa.me/${PROFILE.whatsappNumber}?text=${encodeURIComponent(
                      'Ciao Maurizio, vorrei informazioni per una lezione.'
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-[36px] items-center gap-2 font-medium text-zinc-200 transition-colors hover:text-accent"
                  >
                    <MessageCircle className="h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                    <span>WhatsApp</span>
                  </a>
                </li>
                <li>
                  <a
                    href={PROFILE.phoneHref}
                    className="inline-flex min-h-[36px] items-center gap-2 text-zinc-300 transition-colors hover:text-white tabular-nums"
                  >
                    <Phone className="h-4 w-4 shrink-0 text-zinc-500" aria-hidden="true" />
                    <span>{PROFILE.phoneDisplay}</span>
                  </a>
                </li>
                <li>
                  <a
                    href={`mailto:${PROFILE.email}`}
                    className="inline-flex min-h-[36px] items-center gap-2 font-mono text-xs text-zinc-300 transition-colors hover:text-white"
                  >
                    <Mail className="h-4 w-4 shrink-0 text-zinc-500" aria-hidden="true" />
                    <span className="break-all">{PROFILE.email}</span>
                  </a>
                </li>
                <li>
                  <a
                    href={PROFILE.cvUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-[36px] items-center gap-2 text-zinc-300 transition-colors hover:text-zinc-100"
                  >
                    <FileText className="h-4 w-4 shrink-0 text-zinc-500" aria-hidden="true" />
                    <span>CV (PDF)</span>
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xs font-semibold tracking-wide text-zinc-300">
                Sviluppo &amp; Profili
              </h3>
              <ul className="mt-3.5 space-y-2.5 text-sm text-zinc-400">
                <li>
                  <a
                    href={PROFILE.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-[36px] items-center gap-1.5 transition-colors hover:text-zinc-100"
                  >
                    <span>GitHub</span>
                    <ExternalLink className="h-3 w-3 shrink-0" aria-hidden="true" />
                  </a>
                </li>
                <li>
                  <a
                    href={PROFILE.gitlabUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-[36px] items-center gap-1.5 transition-colors hover:text-zinc-100"
                  >
                    <span>GitLab</span>
                    <ExternalLink className="h-3 w-3 shrink-0" aria-hidden="true" />
                  </a>
                </li>
                <li>
                  <a
                    href={PROFILE.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-[36px] items-center gap-1.5 transition-colors hover:text-zinc-100"
                  >
                    <span>LinkedIn</span>
                    <ExternalLink className="h-3 w-3 shrink-0" aria-hidden="true" />
                  </a>
                </li>
                <li>
                  <a
                    href={PROFILE.springerUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-[36px] items-center gap-1.5 transition-colors hover:text-zinc-100"
                  >
                    <BookOpen className="h-3.5 w-3.5 shrink-0 text-accent" aria-hidden="true" />
                    <span>Springer (Paper)</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.credly.com/badges/c7a04ede-108b-4c66-b5b3-1a431752e5ab/linked_in_profile"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-[36px] items-center gap-1.5 transition-colors hover:text-zinc-100"
                  >
                    <Award className="h-3.5 w-3.5 shrink-0 text-accent" aria-hidden="true" />
                    <span>Credly (CKA)</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-10 flex items-center justify-between gap-4 border-t border-zinc-800/80 pt-6 text-xs text-zinc-500">
          <p className="tabular-nums">
            © {currentYear} {PROFILE.name}
          </p>
          <a
            href="#top"
            className="shrink-0 font-medium text-zinc-400 transition-colors hover:text-zinc-200"
          >
            Torna su ↑
          </a>
        </div>
      </div>
    </footer>
  );
};
