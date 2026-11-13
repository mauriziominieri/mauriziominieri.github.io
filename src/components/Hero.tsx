import React, { useEffect, useState } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { ArrowDown, ArrowUpRight, BookOpen, FileText, GraduationCap, MessageCircle } from 'lucide-react';
import { HERO_METRICS, PROFILE } from '../data/portfolioData';
import { trackClarityEvent } from '../utils/analytics';

interface HeroProps {
  onBookForAudience: (audience: 'Studente' | 'Docente / Istituto') => void;
}

const ROLES = [
  'sviluppatore software',
  'dottore in informatica',
  'docente di programmazione e robotica',
  'appassionato di videogiochi e realtà virtuale',
];

export const Hero: React.FC<HeroProps> = ({ onBookForAudience }) => {
  const prefersReducedMotion = useReducedMotion();
  const [pointer, setPointer] = useState({ x: 0, y: 0, active: false });
  const [roleText, setRoleText] = useState(ROLES[0]);

  useEffect(() => {
    if (prefersReducedMotion) {
      setRoleText(ROLES[0]);
      return;
    }

    let roleIndex = 0;
    let charIndex = ROLES[0].length;
    let deleting = true;
    let timerId = window.setTimeout(() => {}, 0);

    const tick = () => {
      const current = ROLES[roleIndex];
      if (!deleting) {
        charIndex += 1;
        setRoleText(current.slice(0, charIndex));
        if (charIndex === current.length) {
          deleting = true;
          timerId = window.setTimeout(tick, 1400);
          return;
        }
        timerId = window.setTimeout(tick, 55);
      } else {
        charIndex -= 1;
        setRoleText(current.slice(0, charIndex));
        if (charIndex === 0) {
          deleting = false;
          roleIndex = (roleIndex + 1) % ROLES.length;
          timerId = window.setTimeout(tick, 300);
          return;
        }
        timerId = window.setTimeout(tick, 30);
      }
    };

    timerId = window.setTimeout(tick, 1400);
    return () => window.clearTimeout(timerId);
  }, [prefersReducedMotion]);

  const quickWaUrl = `https://wa.me/${PROFILE.whatsappNumber}?text=${encodeURIComponent(
    'Ciao Maurizio, vorrei prenotare una lezione di informatica.'
  )}`;

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (prefersReducedMotion) return;
    const rect = event.currentTarget.getBoundingClientRect();
    const normX = (event.clientX - rect.left) / rect.width - 0.5;
    const normY = (event.clientY - rect.top) / rect.height - 0.5;
    setPointer({ x: normX, y: normY, active: true });
  };

  const handleMouseLeave = () => {
    setPointer({ x: 0, y: 0, active: false });
  };

  return (
    <section id="top" className="border-b border-zinc-800/70 bg-[#09090B]">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-20">
        <div className="grid grid-cols-1 items-stretch gap-8 lg:grid-cols-12 lg:gap-12">
          <div className="flex flex-col justify-center lg:col-span-7">
            <div className="mb-4 flex flex-wrap items-center gap-x-2.5 gap-y-1 text-sm font-medium text-zinc-400">
              <span className="text-accent">Software Engineer</span>
              <span aria-hidden="true">·</span>
              <span>Virtual Reality</span>
              <span aria-hidden="true">·</span>
              <span>Docente</span>
            </div>

            <h1
              className="font-display text-3xl font-semibold tracking-tight text-zinc-100 sm:text-5xl lg:text-[3.25rem] lg:leading-[1.08]"
              style={{ textWrap: 'balance' }}
            >
              <span className="block text-accent">Maurizio Minieri</span>
              <span>Ingegnere software.</span>
            </h1>

            <p className="mt-3 min-h-[2.75rem] font-mono text-sm leading-snug text-zinc-300 sm:min-h-[1.75rem] sm:text-base">
              <span className="mr-2 font-semibold text-accent">&gt;</span>
              <span>{roleText}</span>
              <span
                className="ml-1 inline-block h-4 w-[2px] animate-pulse bg-accent align-middle"
                aria-hidden="true"
              />
            </p>

            <p className="mt-4 max-w-xl text-sm leading-relaxed text-zinc-300 sm:text-base sm:leading-relaxed">
              Dottore in Informatica alla Federico II, diplomato alla Apple Developer Academy. Oggi
              sviluppo siti e applicazioni in una grande azienda e insegno programmazione, robotica
              e informatica con passione a studenti, universitari e scuole.
            </p>

            <div className="mt-6 flex flex-col gap-2.5 sm:mt-7 sm:flex-row sm:flex-wrap sm:items-center sm:gap-3">
              <a
                href={quickWaUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackClarityEvent('whatsapp_hero_click')}
                className="inline-flex min-h-[48px] w-full sm:w-auto items-center justify-center gap-2.5 whitespace-nowrap rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-white transition-colors duration-150 hover:bg-accent-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              >
                <MessageCircle className="h-4 w-4" aria-hidden="true" />
                <span>Prenota una lezione</span>
              </a>

              <div className="grid grid-cols-2 gap-2.5 sm:contents">
                <button
                  type="button"
                  onClick={() => {
                    trackClarityEvent('hero_contacts_scroll');
                    onBookForAudience('Studente');
                  }}
                  className="inline-flex min-h-[48px] items-center justify-center gap-2 whitespace-nowrap rounded-lg border border-zinc-800 bg-[#121216] px-4 py-3 text-sm font-medium text-zinc-100 transition-colors duration-150 hover:border-zinc-700 hover:text-white cursor-pointer sm:px-5"
                >
                  <span>I miei contatti</span>
                  <ArrowDown className="h-4 w-4 text-accent" aria-hidden="true" />
                </button>

                <a
                  href={PROFILE.cvUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackClarityEvent('cv_download_click')}
                  className="inline-flex min-h-[48px] items-center justify-center gap-2 whitespace-nowrap rounded-lg border border-zinc-800/80 bg-[#0D0D11] px-4 py-3 text-sm font-medium text-zinc-300 transition-colors hover:border-zinc-700 hover:text-zinc-100 sm:border-transparent sm:bg-transparent sm:px-3"
                >
                  <FileText className="h-4 w-4 text-accent" aria-hidden="true" />
                  <span>Guarda il mio CV</span>
                </a>
              </div>
            </div>

            <div className="mt-6 flex flex-col gap-3 border-t border-zinc-800/80 pt-5">
              <a
                href={PROFILE.springerUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-fit max-w-full items-center gap-2.5 rounded-lg border border-zinc-800 bg-[#121216] px-3.5 py-2 text-xs font-medium text-zinc-200 transition-colors hover:border-zinc-700 hover:text-white"
              >
                <BookOpen className="h-3.5 w-3.5 shrink-0 text-accent" aria-hidden="true" />
                <span className="truncate">
                  Autore della pubblicazione scientifica Springer · <em>ManDri</em>, WAINA 2019
                </span>
                <ArrowUpRight className="h-3.5 w-3.5 shrink-0 text-accent" aria-hidden="true" />
              </a>
            </div>
          </div>

          <div className="flex lg:col-span-5">
            <motion.div
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              initial={{ opacity: 0, y: 18, scale: 0.985 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
              className="group relative flex min-h-[340px] w-full flex-col justify-end overflow-hidden rounded-2xl border border-zinc-800 bg-[#121216] transition-colors duration-300 hover:border-zinc-700 sm:min-h-[420px] lg:min-h-full"
            >
              <motion.div
                aria-hidden="true"
                animate={
                  prefersReducedMotion
                    ? undefined
                    : {
                        scale: [1, 1.09, 1],
                        opacity: [0.22, 0.34, 0.22],
                      }
                }
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="pointer-events-none absolute inset-0"
                style={{
                  background:
                    'radial-gradient(circle at 55% 32%, var(--brand-accent), rgba(18,18,22,0) 64%)',
                }}
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

              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 transition-opacity duration-300"
                style={{
                  opacity: pointer.active ? 0.22 : 0,
                  background: `radial-gradient(280px circle at ${(pointer.x + 0.5) * 100}% ${(pointer.y + 0.5) * 100}%, var(--brand-accent-soft), transparent 70%)`,
                }}
              />

              <motion.div
                className="relative z-10 flex h-full w-full items-end justify-center px-4 pt-6"
                animate={
                  prefersReducedMotion
                    ? undefined
                    : {
                        x: pointer.active ? pointer.x * 10 : 0,
                        y: pointer.active ? pointer.y * 6 : 0,
                        scale: pointer.active ? 1.025 : 1,
                      }
                }
                transition={{ type: 'spring', stiffness: 180, damping: 24, mass: 0.6 }}
              >
                <motion.img
                  src="/images/profile_red.png"
                  alt="Ritratto di Maurizio Minieri, Ingegnere Software e Docente"
                  width={842}
                  height={1264}
                  loading="eager"
                  fetchPriority="high"
                  decoding="async"
                  referrerPolicy="no-referrer"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.75, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                  className="max-h-[400px] w-auto object-contain object-bottom brightness-[1.03] contrast-[1.04] saturate-[0.92] drop-shadow-[0_18px_36px_rgba(0,0,0,0.75)] lg:max-h-[440px]"
                />
              </motion.div>

              <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 bg-gradient-to-t from-[#09090B] via-[#09090B]/80 to-transparent px-5 pb-5 pt-20 sm:px-6">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="font-display text-base font-semibold text-zinc-100">
                      {PROFILE.name}
                    </p>
                    <p className="text-xs text-zinc-400">
                      Full Stack Developer · Docente
                    </p>
                  </div>
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-zinc-700/80 bg-[#121216]/90 text-accent transition-transform duration-300 group-hover:scale-105">
                    <GraduationCap className="h-4 w-4" aria-hidden="true" />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-zinc-800 bg-zinc-800 lg:grid-cols-4">
          {HERO_METRICS.map((metric) => (
            <div key={metric.label} className="bg-[#111115] p-4 sm:p-5">
              <p className="font-display text-base font-semibold tracking-tight text-zinc-100 tabular-nums sm:text-xl">
                {metric.value}
              </p>
              <p className="mt-0.5 text-xs font-medium text-accent sm:text-sm">{metric.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
