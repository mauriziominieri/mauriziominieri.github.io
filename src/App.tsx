import { useLayoutEffect, useState } from 'react';
import { MotionConfig } from 'motion/react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { TeachingSection } from './components/TeachingSection';
import { SkillsSection } from './components/SkillsSection';
import { PortfolioSection } from './components/PortfolioSection';
import { CertificatesSection } from './components/CertificatesSection';
import { BookingAudience, BookingContactSection } from './components/BookingContactSection';
import { Footer } from './components/Footer';
import { ProjectModal } from './components/ProjectModal';
import { ProjectItem } from './data/portfolioData';

export default function App() {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [bookingAudience, setBookingAudience] = useState<BookingAudience>('Studente');
  const [bookingSubject, setBookingSubject] = useState<string>('Lezioni per mio figlio/a');

  useLayoutEffect(() => {
    let userInteracted = false;
    const markInteracted = () => {
      userInteracted = true;
    };

    const revealPage = () => {
      document.documentElement.classList.remove('hash-pending');
      if ('scrollRestoration' in history) {
        history.scrollRestoration = 'auto';
      }
    };

    const resolveHashTarget = (): HTMLElement | null => {
      const rawHash = window.location.hash.replace(/^#/, '');
      if (!rawHash) return null;
      try {
        return document.getElementById(decodeURIComponent(rawHash));
      } catch {
        return document.getElementById(rawHash);
      }
    };

    const jumpInstantTo = (target: HTMLElement) => {
      const html = document.documentElement;
      const prevBehavior = html.style.scrollBehavior;
      html.style.scrollBehavior = 'auto';
      const top = Math.max(0, target.getBoundingClientRect().top + window.scrollY - 80);
      window.scrollTo({ top, behavior: 'instant' as ScrollBehavior });
      html.style.scrollBehavior = prevBehavior;
    };

    const initialTarget = resolveHashTarget();
    let raf1 = 0;
    let raf2 = 0;

    if (initialTarget) {
      window.addEventListener('wheel', markInteracted, { passive: true, once: true });
      window.addEventListener('touchstart', markInteracted, { passive: true, once: true });
      window.addEventListener('keydown', markInteracted, { passive: true, once: true });

      jumpInstantTo(initialTarget);
      raf1 = window.requestAnimationFrame(() => {
        jumpInstantTo(initialTarget);
        revealPage();
        raf2 = window.requestAnimationFrame(() => {
          if (!userInteracted) {
            jumpInstantTo(initialTarget);
          }
        });
      });

      if (document.fonts?.ready) {
        document.fonts.ready.then(() => {
          if (!userInteracted) {
            const target = resolveHashTarget();
            if (target && Math.abs(target.getBoundingClientRect().top - 80) > 8) {
              jumpInstantTo(target);
            }
          }
        });
      }
    } else {
      revealPage();
    }

    const handleHashChange = () => {
      const target = resolveHashTarget();
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => {
      window.cancelAnimationFrame(raf1);
      window.cancelAnimationFrame(raf2);
      window.removeEventListener('wheel', markInteracted);
      window.removeEventListener('touchstart', markInteracted);
      window.removeEventListener('keydown', markInteracted);
      window.removeEventListener('hashchange', handleHashChange);
      revealPage();
    };
  }, []);

  const scrollToBooking = (
    audience?: BookingAudience,
    subject?: string
  ) => {
    if (audience) {
      setBookingAudience(audience);
    }
    if (subject) {
      setBookingSubject(subject);
    }
    const target = document.getElementById('contatti');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen overflow-x-clip bg-[#09090B] text-zinc-100">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-accent focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white focus:outline-none"
        >
          Vai al contenuto principale
        </a>

        <Navbar onBookClick={() => scrollToBooking()} />

        <main id="main-content">
          <Hero onBookForAudience={(audience) => scrollToBooking(audience)} />
          <AboutSection />
          <TeachingSection
            onSelectTrackForBooking={(audience, subject) =>
              scrollToBooking(audience, subject)
            }
          />
          <SkillsSection />
          <PortfolioSection onSelectProject={setSelectedProject} />
          <CertificatesSection />
          <BookingContactSection
            selectedAudience={bookingAudience}
            selectedSubject={bookingSubject}
            onAudienceChange={setBookingAudience}
            onSubjectChange={setBookingSubject}
          />
        </main>

        <Footer />

        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
          onBookSimilar={(topic) => scrollToBooking('Studente', topic)}
        />
      </div>
    </MotionConfig>
  );
}
