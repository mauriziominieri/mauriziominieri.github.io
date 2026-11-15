import React, { useState } from 'react';
import { Award, ChevronDown, ChevronUp, ExternalLink } from 'lucide-react';
import { CERTIFICATES, CertificateItem } from '../data/portfolioData';
import { setClarityTag, trackClarityEvent } from '../utils/analytics';

type CertFilter =
  | 'Tutte'
  | 'Cloud & DevOps'
  | 'Programmazione & App'
  | 'Sicurezza & Reti'
  | 'Management'
  | 'Digital & Dati'
  | 'Lingue & Extra';

const CERT_FILTERS: CertFilter[] = [
  'Tutte',
  'Cloud & DevOps',
  'Programmazione & App',
  'Sicurezza & Reti',
  'Management',
  'Digital & Dati',
  'Lingue & Extra',
];

function matchesCertFilter(cert: CertificateItem, filter: CertFilter): boolean {
  switch (filter) {
    case 'Tutte':
      return true;
    case 'Cloud & DevOps':
      return ['Cloud & Kubernetes', 'Container & Linux', 'Cloud & Sistemi'].includes(cert.category);
    case 'Programmazione & App':
      return ['Programmazione Java', 'iOS & Sviluppo App', 'Didattica & iOS', 'Coding & Web'].includes(
        cert.category
      );
    case 'Sicurezza & Reti':
      return ['Networking', 'Sicurezza', 'Privacy & Normativa'].includes(cert.category);
    case 'Management':
      return cert.category === 'Management';
    case 'Digital & Dati':
      return ['Data Analysis', 'Competenze Digitali', 'Digital & Analytics'].includes(cert.category);
    case 'Lingue & Extra':
      return ['Lingue', 'Soft Skills & Didattica', 'Hackathon & Innovazione', 'Altro'].includes(
        cert.category
      );
  }
}

export const CertificatesSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<CertFilter>('Tutte');
  const [showAll, setShowAll] = useState(false);

  const filteredByCategory = CERTIFICATES.filter((cert) =>
    matchesCertFilter(cert, activeFilter)
  );

  const visibleCertificates =
    activeFilter === 'Tutte' && !showAll
      ? filteredByCategory.filter((cert) => cert.featured)
      : filteredByCategory;

  return (
    <section id="certificati" className="border-b border-zinc-800/70 bg-[#0B0B0E]">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-sm font-medium text-accent">
              Certificazioni
            </p>
            <h2 className="mt-1 font-display text-3xl font-semibold tracking-tight text-zinc-100">
              Titoli ufficiali.
            </h2>
          </div>

          <div
            role="tablist"
            aria-label="Filtra certificazioni per categoria"
            className="flex flex-nowrap items-center gap-1 overflow-x-auto rounded-xl border border-zinc-800 bg-[#121216] p-1 max-w-full [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {CERT_FILTERS.map((filter) => {
              const isActive = activeFilter === filter;
              return (
                <button
                  key={filter}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => {
                    setActiveFilter(filter);
                    setClarityTag('certificate_filter', filter);
                    trackClarityEvent('certificate_filter_change');
                  }}
                  className={`min-h-[40px] sm:min-h-[38px] whitespace-nowrap shrink-0 rounded-lg px-3 py-1.5 text-xs font-medium transition-colors duration-150 cursor-pointer ${
                    isActive
                      ? 'bg-accent text-white'
                      : 'text-zinc-400 hover:text-zinc-100'
                  }`}
                >
                  {filter}
                </button>
              );
            })}
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {visibleCertificates.map((cert) => (
            <article
              key={cert.id}
              className="group flex flex-col justify-between rounded-xl border border-zinc-800 bg-[#121216] p-5 transition-colors duration-150 hover:border-zinc-700"
            >
              <a
                href={cert.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-lg"
              >
                <div className="flex items-center justify-between gap-2 text-xs tabular-nums">
                  <span className="font-medium text-accent">{cert.issuer}</span>
                  <span className="font-mono text-zinc-400">{cert.year}</span>
                </div>

                <h3 className="mt-2 font-display text-base font-semibold leading-snug text-zinc-100 group-hover:text-white">
                  {cert.title}
                </h3>
              </a>

              <div className="mt-4 flex flex-wrap items-center justify-between gap-2 border-t border-zinc-800/80 pt-3 text-xs font-medium text-zinc-400">
                <a
                  href={cert.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 transition-colors hover:text-accent"
                >
                  <Award className="h-3.5 w-3.5 text-accent" aria-hidden="true" />
                  <span>{cert.category}</span>
                  <ExternalLink className="h-3 w-3 opacity-70" aria-hidden="true" />
                </a>
                {cert.secondaryLink && (
                  <a
                    href={cert.secondaryLink.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-accent underline decoration-accent/40 underline-offset-4 hover:decoration-accent"
                  >
                    <span>{cert.secondaryLink.label}</span>
                    <ExternalLink className="h-3 w-3" aria-hidden="true" />
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>

        {activeFilter === 'Tutte' && (
          <div className="mt-8 flex justify-center">
            <button
              type="button"
              onClick={() => setShowAll((prev) => !prev)}
              aria-expanded={showAll}
              className="inline-flex min-h-[42px] items-center justify-center gap-2 rounded-lg border border-zinc-800 bg-[#121216] px-5 py-2 text-sm font-medium text-zinc-200 transition-colors hover:border-zinc-700 hover:text-white cursor-pointer"
            >
              <span>
                {showAll
                  ? 'Mostra solo le 6 in evidenza'
                  : `Vedi tutte le ${CERTIFICATES.length} certificazioni`}
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
