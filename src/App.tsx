import { useState } from 'react';
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
      <Navbar onBookClick={() => scrollToBooking()} />

      <main>
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
