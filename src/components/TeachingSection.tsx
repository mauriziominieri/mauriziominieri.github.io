import React, { useState } from 'react';
import { BookOpen, Check, School, Camera, MessageCircle } from 'lucide-react';
import { PON_SCHOOLS, PROFILE, TEACHING_TRACKS } from '../data/portfolioData';
import { setClarityTag, trackClarityEvent } from '../utils/analytics';

interface TeachingSectionProps {
  onSelectTrackForBooking: (
    audience: 'Studente' | 'Docente / Istituto',
    subject: string
  ) => void;
}

export const TeachingSection: React.FC<TeachingSectionProps> = () => {
  const [audienceTab, setAudienceTab] = useState<'studenti' | 'docenti'>('studenti');
  const [openGallerySchool, setOpenGallerySchool] = useState<string | null>(
    PON_SCHOOLS[0].schoolName
  );
  const [failedPhotos, setFailedPhotos] = useState<Record<string, boolean>>({});

  const visibleTracks = TEACHING_TRACKS.filter((track) => track.audience === audienceTab);

  const handlePhotoError = (src: string) => {
    setFailedPhotos((prev) => ({ ...prev, [src]: true }));
  };

  return (
    <section id="docenza" className="border-b border-zinc-800/70 bg-[#09090B]">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-18 lg:px-8">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm font-medium text-accent">Didattica</p>
            <h2
              className="mt-2 font-display text-3xl font-semibold tracking-tight text-zinc-100"
              style={{ textWrap: 'balance' }}
            >
              Insegnamento nelle scuole e ripetizioni su misura.
            </h2>
            <div className="mt-4 space-y-2.5 text-sm leading-relaxed text-zinc-300 sm:text-base">
              <p>
                Oltre allo sviluppo software, ho insegnato come{' '}
                <strong className="text-zinc-100">docente PON</strong> in diverse scuole, in anni
                diversi e con materie diverse — tra cui{' '}
                <strong className="text-zinc-100">robotica</strong> e{' '}
                <strong className="text-zinc-100">programmazione</strong> — adattando ogni volta
                l&apos;approccio al livello degli studenti, dalle elementari alle superiori.
              </p>
              <p>
                Portare l&apos;informatica in classe, con linguaggio semplice e progetti pratici, è
                un modo per restituire quella stessa curiosità che da bambino mi ha spinto a
                smontare i miei giocattoli.
              </p>
            </div>
          </div>

          <div
            role="tablist"
            aria-label="Scegli il tipo di percorso formativo"
            className="grid w-full grid-cols-2 items-stretch gap-1 rounded-xl border border-zinc-800 bg-[#121216] p-1 sm:inline-flex sm:w-auto sm:items-center"
          >
            <button
              type="button"
              role="tab"
              aria-selected={audienceTab === 'studenti'}
              onClick={() => {
                setAudienceTab('studenti');
                setClarityTag('audience_tab', 'studenti');
              }}
              className={`inline-flex min-h-[44px] items-center justify-center gap-1.5 rounded-lg px-2.5 py-2 text-center text-xs font-medium leading-tight transition-colors cursor-pointer sm:gap-2 sm:px-4 sm:text-sm sm:whitespace-nowrap ${
                audienceTab === 'studenti'
                  ? 'bg-accent text-white'
                  : 'text-zinc-400 hover:text-zinc-100'
              }`}
            >
              <BookOpen className="h-4 w-4 shrink-0" aria-hidden="true" />
              <span>Studenti &amp; Genitori</span>
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={audienceTab === 'docenti'}
              onClick={() => {
                setAudienceTab('docenti');
                setClarityTag('audience_tab', 'docenti');
              }}
              className={`inline-flex min-h-[44px] items-center justify-center gap-1.5 rounded-lg px-2.5 py-2 text-center text-xs font-medium leading-tight transition-colors cursor-pointer sm:gap-2 sm:px-4 sm:text-sm sm:whitespace-nowrap ${
                audienceTab === 'docenti'
                  ? 'bg-accent text-white'
                  : 'text-zinc-400 hover:text-zinc-100'
              }`}
            >
              <School className="h-4 w-4 shrink-0" aria-hidden="true" />
              <span>Docenti &amp; Scuole</span>
            </button>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-5 lg:grid-cols-2">
          {visibleTracks.map((track) => {
            const directWaHref = `https://wa.me/${PROFILE.whatsappNumber}?text=${encodeURIComponent(
              `Ciao Maurizio, vorrei informazioni per: ${track.title}.`
            )}`;

            return (
              <article
                key={track.id}
                className="flex flex-col justify-between rounded-2xl border border-zinc-800 bg-[#121216] p-5 sm:p-6"
              >
                <div>
                  <h3 className="font-display text-xl font-semibold tracking-tight text-zinc-100">
                    {track.title}
                  </h3>
                  <p className="mt-1 text-xs text-zinc-400">{track.subtitle}</p>

                  <ul className="mt-4 space-y-2 border-t border-zinc-800/80 pt-4">
                    {track.topics.map((topic) => (
                      <li key={topic} className="flex items-start gap-2.5 text-sm text-zinc-300">
                        <Check
                          className="mt-0.5 h-4 w-4 shrink-0 text-accent"
                          aria-hidden="true"
                        />
                        <span>{topic}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 pt-4 border-t border-zinc-800/80">
                  <a
                    href={directWaHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => trackClarityEvent(`whatsapp_track_${track.id}`)}
                    className="inline-flex min-h-[44px] w-full sm:w-auto items-center justify-center gap-2 rounded-lg bg-accent px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-accent-hover"
                  >
                    <MessageCircle className="h-4 w-4" aria-hidden="true" />
                    <span>Prenota su WhatsApp</span>
                  </a>
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-8 divide-y divide-zinc-800 rounded-2xl border border-zinc-800 bg-[#111115]">
          {PON_SCHOOLS.map((school) => {
            const isGalleryOpen = openGallerySchool === school.schoolName;
            return (
              <div key={school.schoolName} className="p-4 sm:p-6">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                      <h3 className="font-display text-lg font-semibold text-zinc-100">
                        {school.schoolName}
                      </h3>
                      <span className="font-mono text-xs text-accent tabular-nums">
                        {school.coursesCount} · {school.studentsCount}
                      </span>
                    </div>
                    <p className="mt-1 text-xs text-zinc-400">{school.subjects}</p>
                  </div>

                  <button
                    type="button"
                    onClick={() =>
                      setOpenGallerySchool(isGalleryOpen ? null : school.schoolName)
                    }
                    aria-expanded={isGalleryOpen}
                    className={`inline-flex min-h-[44px] sm:min-h-[38px] shrink-0 self-start sm:self-auto items-center gap-2 rounded-lg border px-3.5 py-1.5 text-xs font-medium transition-colors cursor-pointer ${
                      isGalleryOpen
                        ? 'border-accent/60 bg-accent/10 text-accent'
                        : 'border-zinc-800 bg-[#09090B] text-zinc-200 hover:border-zinc-700 hover:text-white'
                    }`}
                  >
                    <Camera className="h-3.5 w-3.5" aria-hidden="true" />
                    <span>{isGalleryOpen ? 'Chiudi foto' : 'Vedi foto in classe'}</span>
                  </button>
                </div>

                {isGalleryOpen && (
                  <div className="mt-5 grid grid-cols-1 gap-3.5 border-t border-zinc-800/80 pt-5 sm:grid-cols-3">
                    {school.photos.map((photo) => {
                      const failed = failedPhotos[photo.src];
                      return (
                        <a
                          key={photo.src}
                          href={photo.src}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group relative aspect-[4/3] overflow-hidden rounded-xl border border-zinc-800 bg-[#09090B]"
                        >
                          {!failed ? (
                            <img
                              src={photo.src}
                              alt={photo.alt}
                              referrerPolicy="no-referrer"
                              onError={() => handlePhotoError(photo.src)}
                              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                            />
                          ) : (
                            <div className="flex h-full w-full flex-col items-center justify-center p-4 text-center">
                              <School className="h-6 w-6 text-accent" aria-hidden="true" />
                              <p className="mt-2 text-xs text-zinc-400">{photo.alt}</p>
                            </div>
                          )}
                        </a>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
