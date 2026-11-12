import React from 'react';
import { ArrowDown, FileText, GraduationCap, MessageCircle } from 'lucide-react';
import { HERO_METRICS, PROFILE } from '../data/portfolioData';
import { trackClarityEvent } from '../utils/analytics';

interface HeroProps {
  onBookForAudience: (audience: 'Studente' | 'Docente / Istituto') => void;
}

export const Hero: React.FC<HeroProps> = ({ onBookForAudience }) => {
  const quickWaUrl = `https://wa.me/${PROFILE.whatsappNumber}?text=${encodeURIComponent(
    'Ciao Maurizio, vorrei informazioni per prenotare una lezione di informatica.'
  )}`;

  return (
    <section id="top" className="border-b border-zinc-800/70 bg-[#09090B]">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-20">
        {/* Split-Screen Hero */}
        <div className="grid grid-cols-1 items-stretch gap-8 lg:grid-cols-12 lg:gap-12">
          <div className="flex flex-col justify-center lg:col-span-7">
            <div className="mb-4 flex flex-wrap items-center gap-x-2.5 gap-y-1 text-sm font-medium text-zinc-400">
              <span className="text-[#EB6131]">Software Engineer</span>
              <span aria-hidden="true">·</span>
              <span>Docente PON</span>
              <span aria-hidden="true">·</span>
              <span>Lezioni 1-a-1</span>
            </div>

            <h1
              className="font-display text-3xl font-semibold tracking-tight text-zinc-100 sm:text-5xl lg:text-[3.25rem] lg:leading-[1.08]"
              style={{ textWrap: 'balance' }}
            >
              <span className="text-[#EB6131]">Maurizio Minieri</span>: ingegnere software e docente PON.
            </h1>

            <p className="mt-4 sm:mt-5 max-w-xl text-sm leading-relaxed text-zinc-300 sm:text-lg">
              Laureato alla Federico II e Apple Developer Academy. Aiuto studenti, universitari e
              scuole con lezioni pratiche di programmazione, robotica e preparazione esami.
            </p>

            {/* Primary 1-Tap Actions */}
            <div className="mt-6 sm:mt-7 flex flex-wrap items-center gap-3">
              <a
                href={quickWaUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackClarityEvent('whatsapp_hero_click')}
                className="inline-flex min-h-[48px] w-full sm:w-auto items-center justify-center gap-2.5 whitespace-nowrap rounded-lg bg-[#EB6131] px-6 py-3 text-sm font-semibold text-white transition-colors duration-150 hover:bg-[#d85325] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#EB6131]"
              >
                <MessageCircle className="h-4 w-4" aria-hidden="true" />
                <span>Scrivimi su WhatsApp</span>
              </a>

              <button
                type="button"
                onClick={() => onBookForAudience('Studente')}
                className="inline-flex min-h-[48px] flex-1 sm:flex-initial items-center justify-center gap-2 whitespace-nowrap rounded-lg border border-zinc-800 bg-[#121216] px-5 py-3 text-sm font-medium text-zinc-100 transition-colors duration-150 hover:border-zinc-700 hover:text-white cursor-pointer"
              >
                <span>Prenota in 1 clic</span>
                <ArrowDown className="h-4 w-4 text-[#EB6131]" aria-hidden="true" />
              </button>

              <a
                href={PROFILE.cvUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackClarityEvent('cv_download_click')}
                className="inline-flex min-h-[48px] items-center justify-center gap-2 whitespace-nowrap rounded-lg px-3 py-3 text-sm font-medium text-zinc-400 transition-colors hover:text-zinc-100"
              >
                <FileText className="h-4 w-4 text-[#EB6131]" aria-hidden="true" />
                <span>CV (PDF)</span>
              </a>
            </div>

            <div className="mt-7 border-t border-zinc-800/80 pt-5">
              <p className="text-xs font-medium text-zinc-400">
                Nessun modulo da compilare · Primo colloquio conoscitivo gratuito · Risposta rapida
              </p>
            </div>
          </div>

          {/* Right Column: Editorial Cutout Portrait Frame */}
          <div className="lg:col-span-5 flex">
            <div className="relative flex w-full flex-col justify-end overflow-hidden rounded-2xl border border-zinc-800 bg-[#121216] min-h-[340px] sm:min-h-[420px] lg:min-h-full">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_55%_32%,rgba(235,97,49,0.22),rgba(18,18,22,0)_62%)]"
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 opacity-[0.06]"
                style={{
                  backgroundImage:
                    'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)',
                  backgroundSize: '40px 40px',
                }}
              />

              <div className="relative z-10 flex h-full w-full items-end justify-center pt-6 px-4">
                <img
                  src="/assets/aistudio/profile_red_e772d2bd.png"
                  alt="Ritratto di Maurizio Minieri, Ingegnere Software e Docente PON"
                  width={842}
                  height={1264}
                  loading="eager"
                  fetchPriority="high"
                  decoding="async"
                  referrerPolicy="no-referrer"
                  className="max-h-[400px] lg:max-h-[440px] w-auto object-contain object-bottom drop-shadow-[0_18px_36px_rgba(0,0,0,0.65)]"
                />
              </div>

              <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 bg-gradient-to-t from-[#09090B] via-[#09090B]/75 to-transparent px-5 pb-5 pt-16 sm:px-6">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="font-display text-base font-semibold text-zinc-100">
                      {PROFILE.name}
                    </p>
                    <p className="text-xs text-zinc-400">
                      C# · Unity VR · Full-Stack · Docente PON
                    </p>
                  </div>
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-zinc-700/80 bg-[#121216]/90 text-[#EB6131]">
                    <GraduationCap className="h-4 w-4" aria-hidden="true" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Compact 4-Column Metric Strip */}
        <div className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-zinc-800 bg-zinc-800 lg:grid-cols-4">
          {HERO_METRICS.map((metric) => (
            <div key={metric.label} className="bg-[#111115] p-4 sm:p-5">
              <p className="font-display text-base sm:text-xl font-semibold tracking-tight text-zinc-100 tabular-nums">
                {metric.value}
              </p>
              <p className="mt-0.5 text-xs sm:text-sm font-medium text-[#EB6131]">{metric.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
