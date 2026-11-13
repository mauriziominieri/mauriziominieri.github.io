import React from 'react';
import { BookOpen, ExternalLink, FileText, Play } from 'lucide-react';
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
              Conosciamoci meglio
            </h2>

            <div className="mt-4 space-y-3.5 text-sm leading-relaxed text-zinc-300 sm:text-base">
              <p>
                Fin da piccolo mi ha sempre incuriosito il meccanismo che risiede nelle cose: ero il
                bambino che smontava i propri giocattoli per capire come funzionassero piuttosto che
                giocarci. Quella curiosità, unita a una crescente passione per i videogiochi, mi ha
                portato dritto verso l&apos;informatica.
              </p>
              <p>
                Dopo il liceo scientifico sperimentale mi sono laureato all&apos;
                <strong className="text-zinc-100">Università Federico II</strong>, dove mi sono
                immerso in questo mondo vasto e affascinante. Mi colpisce quanto l&apos;informatica
                sia ormai presente in ogni oggetto della vita quotidiana e immagino un futuro di
                videogiochi incredibilmente immersivi, videochiamate olografiche, auto che guidano da
                sole e case che si puliscono in autonomia.
              </p>
              <p>
                All&apos;università ho imparato diversi linguaggi di programmazione e ho iniziato a
                creare applicazioni e siti web. Il tirocinio presso{' '}
                <a
                  href="https://www.digitalcomoedia.com/landing/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent underline decoration-accent/40 underline-offset-4 hover:decoration-accent"
                >
                  DigitalComoedia
                </a>{' '}
                è stato il punto di svolta: lì ho realizzato un gioco in{' '}
                <strong className="text-zinc-100">realtà virtuale</strong>.
              </p>
              <p>
                Nella tesi mi sono concentrato sui <strong className="text-zinc-100">Manus VR</strong>
                , guanti per la realtà virtuale dotati di sensori (undici per mano) che rilevano i
                movimenti di mani e dita e li riportano nell&apos;ambiente virtuale: al posto di un
                controller si usano le proprie mani. Con Unity e C# ho sviluppato un ambiente per
                esplorarne le potenzialità. Sugli stessi guanti ho scritto anche una{' '}
                <strong className="text-zinc-100">pubblicazione scientifica</strong>,{' '}
                <a
                  href={PROFILE.springerUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="italic text-accent underline decoration-accent/40 underline-offset-4 hover:decoration-accent"
                >
                  ManDri
                </a>
                , pubblicata negli atti del WAINA 2019 (Springer): propone di usarli per comandare con
                i gesti le funzioni dell&apos;auto durante la guida.
              </p>
            </div>

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
                className="inline-flex min-h-[42px] sm:min-h-[38px] items-center gap-1.5 rounded-lg bg-accent px-3.5 py-1.5 text-xs font-semibold text-white transition-colors hover:bg-accent-hover"
              >
                <Play className="h-3.5 w-3.5" aria-hidden="true" />
                <span>La mia tesi</span>
              </a>
              <a
                href={PROFILE.vrGameVideoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[42px] sm:min-h-[38px] items-center gap-1.5 rounded-lg border border-zinc-800 bg-[#121216] px-3 py-1.5 text-xs font-medium text-zinc-200 transition-colors hover:border-zinc-700 hover:text-white"
              >
                <Play className="h-3.5 w-3.5 text-accent" aria-hidden="true" />
                <span>Gioco VR</span>
              </a>
              <a
                href={PROFILE.springerUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[42px] sm:min-h-[38px] items-center gap-1.5 rounded-lg border border-zinc-800 bg-[#121216] px-3 py-1.5 text-xs font-medium text-zinc-200 transition-colors hover:border-zinc-700 hover:text-white"
              >
                <ExternalLink className="h-3.5 w-3.5 text-accent" aria-hidden="true" />
                <span>Il paper su Springer</span>
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
                  className="px-4 py-3.5 sm:px-5 sm:py-4"
                >
                  <div className="flex flex-col gap-1.5 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
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

                  {entry.publication && (
                    <a
                      href={entry.publication.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 flex flex-col gap-2 rounded-xl border border-zinc-800/90 bg-[#09090B]/80 p-3 transition-colors hover:border-accent/50 sm:flex-row sm:items-center sm:justify-between"
                    >
                      <div className="flex items-start gap-2.5 min-w-0">
                        <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border border-accent/30 bg-accent/10 text-accent">
                          <BookOpen className="h-3.5 w-3.5" aria-hidden="true" />
                        </div>
                        <div className="min-w-0">
                          <p className="text-xs font-semibold text-zinc-100">
                            {entry.publication.title}
                          </p>
                          <p className="mt-0.5 text-[11px] text-zinc-400">
                            {entry.publication.description}
                          </p>
                        </div>
                      </div>
                      <span className="inline-flex shrink-0 items-center gap-1 self-start font-mono text-[11px] font-medium text-accent sm:self-center">
                        <span>{entry.publication.venue}</span>
                        <ExternalLink className="h-3 w-3" aria-hidden="true" />
                      </span>
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
