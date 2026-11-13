import { useEffect, useState } from 'react';
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

  useEffect(() => {
    let cancelled = false;

    const scrollToHash = (behavior: ScrollBehavior = 'smooth') => {
      if (cancelled) return;
      const hash = window.location.hash.replace(/^#/, '');
      if (!hash) return;
      const target = document.getElementById(decodeURIComponent(hash));
      if (!target) return;
      target.scrollIntoView({ behavior, block: 'start' });
    };

    const rafId = window.requestAnimationFrame(() => {
      window.setTimeout(() => scrollToHash('smooth'), 60);
    });

    const handleLoad = () => {
      if (window.scrollY < 40) {
        scrollToHash('smooth');
      }
    };
    const handleHashChange = () => scrollToHash('smooth');

    if (document.readyState !== 'complete') {
      window.addEventListener('load', handleLoad, { once: true });
    }
    window.addEventListener('hashchange', handleHashChange);

    return () => {
      cancelled = true;
      window.cancelAnimationFrame(rafId);
      window.removeEventListener('load', handleLoad);
      window.removeEventListener('hashchange', handleHashChange);
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
