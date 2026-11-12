import React from 'react';
import { ExternalLink, Mail, MessageCircle, Phone } from 'lucide-react';
import { PROFILE } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-zinc-800 bg-[#060608]">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        {/* Distinct 3-Column Editorial Footer (completely different from single-row Navbar) */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-8">
          {/* Column 1: Brand Identity & Motto */}
          <div className="md:col-span-5">
            <a href="#top" className="inline-flex items-center gap-3">
              <img
                src="/assets/aistudio/favicon_ext_cropped_8e28a10c.svg"
                alt="Logo volpe e M"
                className="h-7 w-auto object-contain"
              />
              <span className="font-display text-lg font-semibold tracking-tight text-zinc-100">
                {PROFILE.name}
              </span>
            </a>

            <p className="mt-4 max-w-sm text-sm leading-relaxed text-zinc-400">
              Dottore in Informatica (Federico II), Apple Developer Academy, Ingegnere Software e
              Docente PON. Sviluppo digitale, realtà virtuale e formazione pratica per ragazzi e
              scuole.
            </p>

            <p className="mt-4 font-display text-sm font-medium text-accent">
              Vieni ad imparare!
            </p>
          </div>

          {/* Column 2: Direct Channels */}
          <div className="md:col-span-4">
            <h3 className="text-xs font-semibold tracking-wide text-zinc-300">
              Contatti diretti
            </h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a
                  href={`https://wa.me/${PROFILE.whatsappNumber}?text=${encodeURIComponent(
                    'Ciao Maurizio, vorrei informazioni per una lezione.'
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 font-medium text-zinc-200 transition-colors hover:text-accent"
                >
                  <MessageCircle className="h-4 w-4 text-accent" aria-hidden="true" />
                  <span>WhatsApp · Scrivimi subito</span>
                </a>
              </li>
              <li>
                <a
                  href={PROFILE.phoneHref}
                  className="inline-flex items-center gap-2.5 text-zinc-300 transition-colors hover:text-white tabular-nums"
                >
                  <Phone className="h-4 w-4 text-zinc-500" aria-hidden="true" />
                  <span>{PROFILE.phoneDisplay}</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${PROFILE.email}`}
                  className="inline-flex items-center gap-2.5 font-mono text-xs text-zinc-300 transition-colors hover:text-white"
                >
                  <Mail className="h-4 w-4 shrink-0 text-zinc-500" aria-hidden="true" />
                  <span className="break-all">{PROFILE.email}</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Profiles & Resources */}
          <div className="md:col-span-3">
            <h3 className="text-xs font-semibold tracking-wide text-zinc-300">
              Profili &amp; Risorse
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm text-zinc-400">
              <li>
                <a
                  href={PROFILE.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 transition-colors hover:text-zinc-100"
                >
                  <span>LinkedIn</span>
                  <ExternalLink className="h-3 w-3" aria-hidden="true" />
                </a>
              </li>
              <li>
                <a
                  href={PROFILE.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 transition-colors hover:text-zinc-100"
                >
                  <span>GitHub · mauriziominieri</span>
                  <ExternalLink className="h-3 w-3" aria-hidden="true" />
                </a>
              </li>
              <li>
                <a
                  href={PROFILE.gitlabUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 transition-colors hover:text-zinc-100"
                >
                  <span>GitLab · DOPPIA3MME</span>
                  <ExternalLink className="h-3 w-3" aria-hidden="true" />
                </a>
              </li>
              <li>
                <a
                  href={PROFILE.cvUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 transition-colors hover:text-zinc-100"
                >
                  <span>Curriculum Vitae (PDF)</span>
                  <ExternalLink className="h-3 w-3" aria-hidden="true" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright Bar */}
        <div className="mt-12 flex flex-col gap-3 border-t border-zinc-800/80 pt-6 text-xs text-zinc-500 sm:flex-row sm:items-center sm:justify-between">
          <p className="tabular-nums">
            © {currentYear} {PROFILE.name}. Tutti i diritti riservati.
          </p>
          <a
            href="#top"
            className="text-zinc-400 transition-colors hover:text-zinc-200"
          >
            Torna su ↑
          </a>
        </div>
      </div>
    </footer>
  );
};
