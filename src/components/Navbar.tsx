import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { PROFILE } from '../data/portfolioData';

interface NavbarProps {
  onBookClick: () => void;
}

const NAV_LINKS = [
  { href: '#chi-sono', label: 'Chi sono' },
  { href: '#docenza', label: 'Didattica PON' },
  { href: '#competenze', label: 'Competenze' },
  { href: '#portfolio', label: 'Progetti' },
  { href: '#certificati', label: 'Certificati' },
];

export const Navbar: React.FC<NavbarProps> = ({ onBookClick }) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleLinkClick = () => {
    setMobileOpen(false);
  };

  const handleBookFromMobile = () => {
    setMobileOpen(false);
    onBookClick();
  };

  return (
    <header className="sticky top-0 z-40 h-16 border-b border-zinc-800/80 bg-[#09090B]/90 backdrop-blur-md">
      <div className="mx-auto flex h-full max-w-6xl items-center justify-between gap-4 px-4 sm:px-6 lg:gap-8 lg:px-8">
        {/* Zone 1: Brand Title + Custom SVG Logo */}
        <a
          href="#top"
          className="flex shrink-0 items-center gap-2.5 whitespace-nowrap text-zinc-100 transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#EB6131] rounded-md"
          aria-label={`${PROFILE.name} - Torna all'inizio`}
        >
          <img
            src="/assets/aistudio/favicon_ext_cropped_8e28a10c.svg"
            alt="Logo personale volpe e M"
            className="h-6 sm:h-7 w-auto object-contain"
          />
          <span className="font-display text-base sm:text-lg font-semibold tracking-tight text-zinc-100">
            {PROFILE.name}
          </span>
        </a>

        {/* Zone 2: Clean Single-Line Text Nav Links */}
        <nav
          aria-label="Navigazione principale"
          className="hidden md:flex items-center gap-4 lg:gap-6 text-sm font-medium text-zinc-400"
        >
          {NAV_LINKS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="whitespace-nowrap shrink-0 py-1 text-zinc-400 transition-colors duration-150 hover:text-zinc-100 hover:underline hover:decoration-[#EB6131] hover:underline-offset-8 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#EB6131] rounded-sm"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: Single Primary Action (+ Mobile Menu Button on small screens) */}
        <div className="flex shrink-0 items-center gap-3">
          <button
            type="button"
            onClick={onBookClick}
            className="hidden sm:inline-flex min-h-[40px] items-center justify-center whitespace-nowrap shrink-0 rounded-lg bg-[#EB6131] px-4 py-2 text-sm font-semibold text-white transition-colors duration-150 hover:bg-[#d85325] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#EB6131] focus-visible:ring-offset-2 focus-visible:ring-offset-[#09090B] cursor-pointer"
          >
            Prenota Lezione
          </button>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-navigation"
            aria-label={mobileOpen ? 'Chiudi menu di navigazione' : 'Apri menu di navigazione'}
            className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-zinc-800 bg-[#121216] text-zinc-200 transition-colors hover:border-zinc-700 hover:text-white md:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#EB6131] cursor-pointer"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileOpen && (
        <div
          id="mobile-navigation"
          className="border-b border-zinc-800 bg-[#0D0D10] px-4 pb-6 pt-3 md:hidden"
        >
          <nav aria-label="Menu mobile" className="flex flex-col gap-1">
            {NAV_LINKS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={handleLinkClick}
                className="flex min-h-[44px] items-center rounded-lg px-3 text-base font-medium text-zinc-300 transition-colors hover:bg-zinc-900 hover:text-white"
              >
                {item.label}
              </a>
            ))}
            <div className="mt-3 pt-3 border-t border-zinc-800/80">
              <button
                type="button"
                onClick={handleBookFromMobile}
                className="flex min-h-[46px] w-full items-center justify-center rounded-lg bg-[#EB6131] px-4 py-2.5 text-base font-semibold text-white transition-colors hover:bg-[#d85325] cursor-pointer"
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
