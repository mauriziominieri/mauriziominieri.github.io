import React from 'react';
import { ExternalLink, FileText, Play } from 'lucide-react';
import { PROFILE, TIMELINE_ENTRIES } from '../data/portfolioData';

export const AboutSection: React.FC = () => {
  return (
    <section id="chi-sono" className="border-b border-zinc-800/70 bg-[#0B0B0E]">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-start lg:gap-12">
          <div className="lg:col-span-5">
            <p className="text-sm font-medium text-accent">Chi sono</p>
            <h2
              className="mt-2 font-display text-3xl font-semibold tracking-tight text-zinc-100"
              style={{ textWrap: 'balance' }}
            >
              Passione per il codice, ricerca VR e didattica chiara.
            </h2>

            <p className="mt-4 text-sm leading-relaxed text-zinc-300 sm:text-base">
              Da bambino smontavo i giocattoli per capire come funzionassero; oggi sviluppo
              applicazioni in azienda e insegno informatica con linguaggio semplice. Con Unity e C#
              ho realizzato la mia tesi sui guanti <strong className="text-zinc-100">Manus VR</strong>{' '}
              e pubblicato il paper <em className="text-zinc-100">ManDri</em> su Springer.
            </p>

            <blockquote className="mt-6 rounded-xl border border-zinc-800 bg-[#121216] px-5 py-4">
              <p className="font-display text-base font-medium text-zinc-100">
                “{PROFILE.motto}”
              </p>
            </blockquote>

            <div className="mt-5 flex flex-wrap items-center gap-2.5">
              <a
                href={PROFILE.thesisVideoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[42px] sm:min-h-[38px] items-center gap-1.5 rounded-lg border border-zinc-800 bg-[#121216] px-3 py-1.5 text-xs font-medium text-zinc-200 transition-colors hover:border-zinc-700 hover:text-white"
              >
                <Play className="h-3.5 w-3.5 text-accent" aria-hidden="true" />
                <span>Video Tesi VR</span>
              </a>
              <a
                href={PROFILE.springerUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[42px] sm:min-h-[38px] items-center gap-1.5 rounded-lg border border-zinc-800 bg-[#121216] px-3 py-1.5 text-xs font-medium text-zinc-200 transition-colors hover:border-zinc-700 hover:text-white"
              >
                <ExternalLink className="h-3.5 w-3.5 text-accent" aria-hidden="true" />
                <span>Paper Springer</span>
              </a>
              <a
                href={PROFILE.cvUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[42px] sm:min-h-[38px] items-center gap-1.5 rounded-lg border border-zinc-800 bg-[#121216] px-3 py-1.5 text-xs font-medium text-zinc-200 transition-colors hover:border-zinc-700 hover:text-white"
              >
                <FileText className="h-3.5 w-3.5 text-accent" aria-hidden="true" />
                <span>Scarica CV</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="divide-y divide-zinc-800 rounded-2xl border border-zinc-800 bg-[#121216]">
              {TIMELINE_ENTRIES.map((entry) => (
                <div
                  key={entry.title}
                  className="flex flex-col gap-1.5 px-4 py-3.5 sm:flex-row sm:items-center sm:justify-between sm:gap-4 sm:px-5 sm:py-4"
                >
                  <div className="min-w-0">
                    <h3 className="font-display text-base font-semibold text-zinc-100">
                      {entry.title}
                    </h3>
                    <p className="text-xs text-zinc-400">{entry.subtitle}</p>
                  </div>
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1 shrink-0">
                    {entry.link && (
                      <a
                        href={entry.link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-medium text-accent hover:underline"
                      >
                        {entry.link.label} ↗
                      </a>
                    )}
                    <span className="font-mono text-xs text-zinc-400 tabular-nums">
                      {entry.period}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
