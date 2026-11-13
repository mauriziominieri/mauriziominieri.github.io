import React, { useState } from 'react';
import {
  Check,
  Copy,
  Mail,
  MessageCircle,
  Phone,
  ArrowUpRight,
} from 'lucide-react';
import { PROFILE } from '../data/portfolioData';
import { setClarityTag, trackClarityEvent } from '../utils/analytics';

export type BookingAudience = 'Studente' | 'Docente / Istituto';

interface BookingContactSectionProps {
  selectedAudience: BookingAudience;
  selectedSubject: string;
  onAudienceChange: (audience: BookingAudience) => void;
  onSubjectChange: (subject: string) => void;
}

const QUICK_TOPICS: {
  label: string;
  audience: BookingAudience;
  message: string;
}[] = [
  {
    label: 'Lezioni per mio figlio/a',
    audience: 'Studente',
    message: 'Ciao Maurizio, vorrei prenotare delle lezioni di informatica per mio figlio/a.',
  },
  {
    label: 'Ripetizioni Superiori & Maturità',
    audience: 'Studente',
    message: 'Ciao Maurizio, cerco aiuto per informatica alle superiori / preparazione Maturità.',
  },
  {
    label: 'Esami Universitari (C, Java, Python)',
    audience: 'Studente',
    message: 'Ciao Maurizio, vorrei preparare un esame universitario di programmazione.',
  },
  {
    label: 'Moduli PON / Robotica per Scuole',
    audience: 'Docente / Istituto',
    message: 'Ciao Maurizio, ti contatto per un modulo PON o laboratorio STEM a scuola.',
  },
];

export const BookingContactSection: React.FC<BookingContactSectionProps> = ({
  selectedSubject,
  onAudienceChange,
  onSubjectChange,
}) => {
  const [copiedType, setCopiedType] = useState<'email' | 'phone' | null>(null);

  const activeTopic =
    QUICK_TOPICS.find((t) => t.label === selectedSubject) ?? QUICK_TOPICS[0];

  const waHref = `https://wa.me/${PROFILE.whatsappNumber}?text=${encodeURIComponent(
    activeTopic.message
  )}`;
  const mailHref = `mailto:${PROFILE.email}?subject=${encodeURIComponent(
    `Richiesta lezione · ${activeTopic.label}`
  )}&body=${encodeURIComponent(activeTopic.message)}`;

  const handleCopy = async (value: string, type: 'email' | 'phone') => {
    try {
      await navigator.clipboard.writeText(value);
      setCopiedType(type);
      window.setTimeout(() => setCopiedType(null), 2200);
    } catch {
      setCopiedType(null);
    }
  };

  return (
    <section id="contatti" className="bg-[#09090B]">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
        <div className="rounded-2xl border border-zinc-800 bg-[#121216] p-4 sm:p-8 lg:p-10">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:items-center lg:gap-12">
            <div className="lg:col-span-6">
              <p className="text-sm font-medium text-accent">Prenota una lezione</p>
              <h2
                className="mt-2 font-display text-3xl font-semibold tracking-tight text-zinc-100 sm:text-4xl"
                style={{ textWrap: 'balance' }}
              >
                Mandami un messaggio, ti rispondo il prima possibile.
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-zinc-300 sm:text-base">
                Scegli l&apos;argomento qui accanto e scrivimi subito su WhatsApp o via email:
                lezioni individuali o di gruppo online e in presenza.
              </p>
            </div>

            <div className="lg:col-span-6">
              <div className="rounded-xl border border-zinc-800 bg-[#09090B] p-3.5 sm:p-5">
                <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                  {QUICK_TOPICS.map((topic) => {
                    const isSelected = activeTopic.label === topic.label;
                    return (
                      <button
                        key={topic.label}
                        type="button"
                        onClick={() => {
                          onAudienceChange(topic.audience);
                          onSubjectChange(topic.label);
                          setClarityTag('booking_topic', topic.label);
                        }}
                        className={`min-h-[42px] rounded-lg border px-3 py-2 text-left text-xs font-medium transition-colors cursor-pointer ${
                          isSelected
                            ? 'border-accent bg-accent/15 text-white'
                            : 'border-zinc-800 bg-[#121216] text-zinc-300 hover:border-zinc-700 hover:text-white'
                        }`}
                      >
                        {topic.label}
                      </button>
                    );
                  })}
                </div>

                <div className="mt-4 space-y-2.5">
                  <a
                    href={waHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => trackClarityEvent('whatsapp_booking_click')}
                    className="inline-flex min-h-[48px] w-full items-center justify-center gap-2 rounded-lg bg-accent px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent-hover"
                  >
                    <MessageCircle className="h-4 w-4" aria-hidden="true" />
                    <span>Prenota su WhatsApp</span>
                    <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                  </a>

                  <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                    <a
                      href={PROFILE.phoneHref}
                      onClick={() => trackClarityEvent('phone_call_click')}
                      className="inline-flex min-h-[46px] items-center justify-center gap-2 rounded-lg border border-zinc-700 bg-[#121216] px-4 py-2.5 text-sm font-semibold text-zinc-100 transition-colors hover:border-zinc-500 hover:text-white tabular-nums"
                    >
                      <Phone className="h-4 w-4 text-accent" aria-hidden="true" />
                      <span>Chiama</span>
                    </a>

                    <a
                      href={mailHref}
                      onClick={() => trackClarityEvent('email_click')}
                      className="inline-flex min-h-[46px] items-center justify-center gap-2 rounded-lg border border-zinc-700 bg-[#121216] px-4 py-2.5 text-sm font-semibold text-zinc-100 transition-colors hover:border-zinc-500 hover:text-white"
                    >
                      <Mail className="h-4 w-4 text-accent" aria-hidden="true" />
                      <span>Invia Email</span>
                    </a>
                  </div>
                </div>

                <div className="mt-4 border-t border-zinc-800/80 pt-3.5">
                  <p className="mb-2 text-[11px] font-medium text-zinc-400">
                    Preferisci copiare i recapiti?
                  </p>
                  <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                    <button
                      type="button"
                      onClick={() => handleCopy(PROFILE.phoneDisplay, 'phone')}
                      className="inline-flex min-h-[40px] items-center justify-between gap-2 rounded-lg border border-zinc-800 bg-[#121216] px-3 py-2 text-xs text-zinc-300 transition-colors hover:border-zinc-700 hover:text-white cursor-pointer"
                    >
                      <span className="truncate font-mono tabular-nums">{PROFILE.phoneDisplay}</span>
                      <span className="inline-flex shrink-0 items-center gap-1 font-medium text-accent">
                        {copiedType === 'phone' ? (
                          <>
                            <Check className="h-3.5 w-3.5" aria-hidden="true" />
                            <span>Copiato</span>
                          </>
                        ) : (
                          <>
                            <Copy className="h-3.5 w-3.5" aria-hidden="true" />
                            <span>Copia cell</span>
                          </>
                        )}
                      </span>
                    </button>

                    <button
                      type="button"
                      onClick={() => handleCopy(PROFILE.email, 'email')}
                      className="inline-flex min-h-[40px] items-center justify-between gap-2 rounded-lg border border-zinc-800 bg-[#121216] px-3 py-2 text-xs text-zinc-300 transition-colors hover:border-zinc-700 hover:text-white cursor-pointer"
                    >
                      <span className="truncate font-mono">{PROFILE.email}</span>
                      <span className="inline-flex shrink-0 items-center gap-1 font-medium text-accent">
                        {copiedType === 'email' ? (
                          <>
                            <Check className="h-3.5 w-3.5" aria-hidden="true" />
                            <span>Copiata</span>
                          </>
                        ) : (
                          <>
                            <Copy className="h-3.5 w-3.5" aria-hidden="true" />
                            <span>Copia email</span>
                          </>
                        )}
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
