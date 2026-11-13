import React, { useState } from 'react';
import { Award, ChevronDown, ChevronUp, ExternalLink } from 'lucide-react';
import { CERTIFICATES } from '../data/portfolioData';

export const CertificatesSection: React.FC = () => {
  const [showAll, setShowAll] = useState(false);

  const visibleCertificates = showAll
    ? CERTIFICATES
    : CERTIFICATES.filter((c) => c.featured);

  return (
    <section id="certificati" className="border-b border-zinc-800/70 bg-[#0B0B0E]">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-medium text-accent">Certificazioni</p>
            <h2 className="mt-1 font-display text-3xl font-semibold tracking-tight text-zinc-100">
              Titoli ufficiali.
            </h2>
          </div>

          <button
            type="button"
            onClick={() => setShowAll((prev) => !prev)}
            aria-expanded={showAll}
            className="inline-flex min-h-[40px] shrink-0 items-center justify-center gap-2 self-start rounded-lg border border-zinc-800 bg-[#121216] px-4 py-2 text-xs font-medium text-zinc-200 transition-colors hover:border-zinc-700 hover:text-white md:self-auto cursor-pointer"
          >
            <span>
              {showAll
                ? 'Mostra solo i principali'
                : `Vedi tutti i ${CERTIFICATES.length} certificati`}
            </span>
            {showAll ? (
              <ChevronUp className="h-4 w-4 text-accent" aria-hidden="true" />
            ) : (
              <ChevronDown className="h-4 w-4 text-accent" aria-hidden="true" />
            )}
          </button>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {visibleCertificates.map((cert) => (
            <a
              key={cert.id}
              href={cert.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col justify-between rounded-xl border border-zinc-800 bg-[#121216] p-5 transition-colors duration-150 hover:border-zinc-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >
              <div>
                <div className="flex items-center justify-between gap-2 text-xs tabular-nums">
                  <span className="font-medium text-accent">{cert.issuer}</span>
                  <span className="font-mono text-zinc-400">{cert.year}</span>
                </div>

                <h3 className="mt-2 font-display text-base font-semibold leading-snug text-zinc-100 group-hover:text-white">
                  {cert.title}
                </h3>
              </div>

              <div className="mt-4 flex items-center justify-between border-t border-zinc-800/80 pt-3 text-xs font-medium text-zinc-400 group-hover:text-accent">
                <span className="inline-flex items-center gap-1.5">
                  <Award className="h-3.5 w-3.5 text-accent" aria-hidden="true" />
                  <span>{cert.category}</span>
                </span>
                <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
