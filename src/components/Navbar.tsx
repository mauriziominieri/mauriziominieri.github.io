import React, { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { PROFILE } from '../data/portfolioData';

interface NavbarProps {
  onBookClick: () => void;
}

const NAV_LINKS = [
  { href: '#chi-sono', label: 'Chi sono' },
  { href: '#docenza', label: 'Didattica' },
  { href: '#competenze', label: 'Competenze' },
  { href: '#portfolio', label: 'Progetti' },
  { href: '#certificati', label: 'Certificazioni' },
];

export const Navbar: React.FC<NavbarProps> = ({ onBookClick }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('');
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const sectionIds = NAV_LINKS.map((item) => item.href.slice(1));
    let rafId = 0;

    const updateNavState = () => {
      rafId = 0;
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      const ratio = scrollable > 0 ? Math.min(1, Math.max(0, window.scrollY / scrollable)) : 0;
      setScrollProgress(ratio);

      const probeY = Math.max(110, Math.min(240, window.innerHeight * 0.3));
      const contactEl = document.getElementById('contatti');
      if (contactEl && contactEl.getBoundingClientRect().top <= probeY) {
        setActiveSection('');
        return;
      }

      let current = '';
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        if (rect.top <= probeY && rect.bottom > 96) {
          current = `#${id}`;
        }
      }
      setActiveSection(current);
    };

    const scheduleUpdate = () => {
      if (rafId) return;
      rafId = window.requestAnimationFrame(updateNavState);
    };

    updateNavState();
    window.addEventListener('scroll', scheduleUpdate, { passive: true });
    window.addEventListener('resize', scheduleUpdate, { passive: true });

    return () => {
      if (rafId) window.cancelAnimationFrame(rafId);
      window.removeEventListener('scroll', scheduleUpdate);
      window.removeEventListener('resize', scheduleUpdate);
    };
  }, []);

  useEffect(() => {
    if (!mobileOpen) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMobileOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileOpen]);

  const handleLinkClick = (href: string) => {
    setActiveSection(href);
    setMobileOpen(false);
  };

  const handleBookFromMobile = () => {
    setMobileOpen(false);
    onBookClick();
  };

  return (
    <header className="sticky top-0 z-40 h-16 border-b border-zinc-800/80 bg-[#09090B]/90 backdrop-blur-md">
      <div className="mx-auto flex h-full max-w-6xl items-center justify-between gap-4 px-4 sm:px-6 lg:gap-8 lg:px-8">
        <a
          href="#top"
          onClick={() => setActiveSection('')}
          className="flex shrink-0 items-center gap-2.5 whitespace-nowrap rounded-md text-zinc-100 transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          aria-label={`${PROFILE.name} - Torna all'inizio`}
        >
          <img
            src="/images/logo-fox.svg"
            alt="Logo Maurizio Minieri"
            className="h-6 sm:h-7 w-auto shrink-0 object-contain"
          />
          <span className="font-display text-base sm:text-lg font-semibold tracking-tight text-zinc-100">
            {PROFILE.name}
          </span>
        </a>

        <nav
          aria-label="Navigazione principale"
          className="hidden md:flex items-center gap-3.5 lg:gap-6 text-[13px] lg:text-sm font-medium text-zinc-400"
        >
          {NAV_LINKS.map((item) => {
            const isActive = activeSection === item.href;
            return (
              <a
                key={item.href}
                href={item.href}
                aria-current={isActive ? 'location' : undefined}
                className={`whitespace-nowrap shrink-0 rounded-sm py-1 transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent ${
                  isActive
                    ? 'text-zinc-100 underline decoration-accent underline-offset-8'
                    : 'text-zinc-400 hover:text-zinc-100 hover:underline hover:decoration-accent hover:underline-offset-8'
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        <div className="flex shrink-0 items-center gap-3">
          <button
            type="button"
            onClick={onBookClick}
            className="hidden sm:inline-flex min-h-[40px] items-center justify-center whitespace-nowrap shrink-0 rounded-lg bg-accent px-4 py-2 text-sm font-semibold text-white transition-colors duration-150 hover:bg-accent-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-[#09090B] cursor-pointer"
          >
            Prenota Lezione
          </button>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-navigation"
            aria-label={mobileOpen ? 'Chiudi menu di navigazione' : 'Apri menu di navigazione'}
            className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-zinc-800 bg-[#121216] text-zinc-200 transition-colors hover:border-zinc-700 hover:text-white md:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent cursor-pointer"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-[2px] origin-left bg-accent/90 transition-transform duration-100"
        style={{ transform: `scaleX(${scrollProgress})` }}
      />

      {mobileOpen && (
        <div
          id="mobile-navigation"
          className="border-b border-zinc-800 bg-[#0D0D10] px-4 pb-6 pt-3 shadow-xl md:hidden"
        >
          <nav aria-label="Menu mobile" className="flex flex-col gap-1">
            {NAV_LINKS.map((item) => {
              const isActive = activeSection === item.href;
              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => handleLinkClick(item.href)}
                  className={`flex min-h-[44px] items-center justify-between rounded-lg px-3 text-base font-medium transition-colors ${
                    isActive
                      ? 'bg-accent/15 text-white'
                      : 'text-zinc-300 hover:bg-zinc-900 hover:text-white'
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && <span className="text-xs font-mono text-accent">Attuale</span>}
                </a>
              );
            })}
            <div className="mt-3 border-t border-zinc-800/80 pt-3">
              <button
                type="button"
                onClick={handleBookFromMobile}
                className="flex min-h-[46px] w-full items-center justify-center rounded-lg bg-accent px-4 py-2.5 text-base font-semibold text-white transition-colors hover:bg-accent-hover cursor-pointer"
              >
                Prenota una Lezione
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
