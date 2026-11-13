export type ProjectCategory =
  | 'Tutti'
  | 'VR & Giochi'
  | 'iOS'
  | 'Java & C'
  | 'Web';

export interface ProjectLink {
  label: string;
  url: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: Exclude<ProjectCategory, 'Tutti'>;
  year: string;
  role: string;
  summary: string;
  challenge: string;
  solution: string;
  impact: string;
  stack: string[];
  links: ProjectLink[];
  featured?: boolean;
}

export interface SkillDomain {
  index: string;
  title: string;
  items: {
    name: string;
    detail: string;
  }[];
}

export interface TimelineEntry {
  period: string;
  title: string;
  subtitle: string;
  link?: {
    label: string;
    url: string;
  };
  publication?: {
    title: string;
    venue: string;
    description: string;
    url: string;
  };
}

export interface TeachingTrack {
  id: string;
  audience: 'studenti' | 'docenti';
  title: string;
  subtitle: string;
  topics: string[];
  bookingSubject: string;
}

export interface PonSchoolExperience {
  schoolName: string;
  coursesCount: string;
  studentsCount: string;
  subjects: string;
  photos: {
    src: string;
    alt: string;
  }[];
}

export interface CertificateItem {
  id: string;
  year: string;
  title: string;
  issuer: string;
  category: string;
  url: string;
  featured?: boolean;
}

export const PROFILE = {
  name: 'Maurizio Minieri',
  shortName: 'Maurizio',
  email: 'mauminieri@gmail.com',
  phoneDisplay: '333 536 8000',
  phoneHref: 'tel:+393335368000',
  whatsappNumber: '393335368000',
  cvUrl: 'https://mauriziominieri.github.io/documents/CV-MaurizioMinieri-it.pdf',
  springerUrl: 'https://link.springer.com/chapter/10.1007/978-3-030-15035-8_84',
  thesisVideoUrl: 'https://mauriziominieri.github.io/videos/PresentazioneManusVRMinieri.mp4',
  vrGameVideoUrl: 'https://mauriziominieri.github.io/videos/PresentazioneManusVRMinieriCut.mp4',
  linkedinUrl: 'https://www.linkedin.com/in/maurizio-minieri-0b4992174',
  githubUrl: 'https://github.com/mauriziominieri',
  gitlabUrl: 'https://gitlab.com/DOPPIA3MME',
  motto: 'Beyond the common vision',
};

export const HERO_METRICS = [
  {
    value: 'Federico II',
    label: 'Laurea in Informatica',
  },
  {
    value: 'Apple Academy',
    label: 'Diploma iOS & Swift',
  },
  {
    value: 'Docente PON',
    label: '5+ Corsi · 61+ Studenti',
  },
  {
    value: 'CKA & Java OCP',
    label: '27 Certificazioni',
  },
];

export const TIMELINE_ENTRIES: TimelineEntry[] = [
  {
    period: 'Oggi',
    title: 'Ingegnere software, docente',
    subtitle: 'Sviluppo applicazioni e progetti software/VR in una grande azienda e insegno programmazione e informatica.',
  },
  {
    period: '2019 – 2020',
    title: 'Apple Developer Academy',
    subtitle: 'Laurea Apple. Linguaggio Swift per iPhone, iPad, MacBook e Apple Watch.',
  },
  {
    period: 'Docente PON',
    title: 'Fondazione Cultura & Innovazione',
    subtitle: 'Docenza PON in varie scuole. Il mio motto? Non è un voto scritto da un insegnante a poter definire chi sei.',
  },
  {
    period: 'Tirocinio',
    title: 'DigitalComoedia',
    subtitle: 'Primo contatto professionale con la realtà virtuale: lì ho realizzato un gioco in VR e da lì è nata la mia specializzazione.',
    link: {
      label: 'DigitalComoedia',
      url: 'https://www.digitalcomoedia.com/landing/',
    },
  },
  {
    period: '2014 – 2018',
    title: 'Università Federico II',
    subtitle: 'Laurea in Informatica. Linguaggi, sviluppo web e applicativo; tesi sperimentale in Unity e C# sui guanti Manus VR.',
    publication: {
      title: 'Pubblicazione scientifica · ManDri',
      venue: 'Springer · WAINA 2019',
      description: 'Integrazione dei guanti Manus VR per il controllo gestuale alla guida',
      url: 'https://link.springer.com/chapter/10.1007/978-3-030-15035-8_84',
    },
  },
  {
    period: '2009 – 2014',
    title: 'Liceo Scientifico Sperimentale',
    subtitle: 'Le basi logico-matematiche-fisiche e i primi approcci alla tecnologia.',
  },
];

export const SKILL_DOMAINS: SkillDomain[] = [
  {
    index: '01.',
    title: 'Linguaggi & Paradigmi',
    items: [
      { name: 'Java · C · C++ · C# · Python', detail: 'OOP, Puntatori, Algoritmi · Oracle Java SE 8 & SE 11' },
      { name: 'JavaScript · TypeScript · HTML5 · CSS3 · PHP', detail: 'ES6+, Sviluppo Web Moderno & Scripting' },
      { name: 'SQL · PL/SQL · Bash / Shell · Visual Basic', detail: 'Database relazionali, Automazione & Terminale' },
      { name: 'Swift · Kotlin · Dart · Scratch', detail: 'App iOS/Android & Didattica visuale' },
    ],
  },
  {
    index: '02.',
    title: 'Framework, Web & Mobile',
    items: [
      { name: 'React · Next.js · Angular · Vue.js · Vite', detail: 'Single Page App, SSR & Frontend reattivo' },
      { name: 'Tailwind CSS · Bootstrap · Sass · jQuery', detail: 'Design System, UI Responsive & Animazioni' },
      { name: 'Node.js · Express · Spring Boot · .NET', detail: 'REST API, GraphQL & Microservizi' },
      { name: 'Unity 3D · SwiftUI · UIKit · ARKit · MapKit', detail: 'Realtà Virtuale (Manus VR) & Ecosistema Apple' },
    ],
  },
  {
    index: '03.',
    title: 'IDE, Editor & Software',
    items: [
      { name: 'VS Code · Visual Studio · IntelliJ IDEA · Eclipse', detail: 'NetBeans · PyCharm · WebStorm' },
      { name: 'Xcode · Android Studio · Unity Editor', detail: 'Debug, Profiler & Simulatori Mobile/VR' },
      { name: 'Code::Blocks · Dev-C++ · Vim · Nano', detail: 'Compilatori GCC/G++ & Editing da terminale' },
      { name: 'Postman · FileZilla · Figma · Jira · Trello · Notion', detail: 'API Testing, FTP/SFTP, UI Design & Agile' },
    ],
  },
  {
    index: '04.',
    title: 'Cloud, DevOps, Dati & Robotica',
    items: [
      { name: 'Docker · Kubernetes (CKA) · Git · GitHub · GitLab', detail: 'Container, Orchestrazione & GitHub Actions CI/CD' },
      { name: 'PostgreSQL · MySQL · MongoDB · SQLite · Redis', detail: 'Firebase · Supabase · Modellazione dati' },
      { name: 'Linux / Unix · SSH · Nginx · Apache · Cisco CCNA', detail: 'Networking, Sicurezza & Deployment' },
      { name: 'Arduino · Raspberry Pi · Robotica Educativa · Agile', detail: 'Public Speaking, Problem Solving & Moduli PON' },
    ],
  },
];

export const PROJECTS: ProjectItem[] = [
  {
    id: 'manus-vr',
    title: 'Manus-VR & Paper ManDri',
    category: 'VR & Giochi',
    year: '2019',
    role: 'Tesi di Laurea · Unity & C#',
    summary:
      'Ambiente in realtà virtuale per l’approfondimento dei guanti tecnologici Manus VR (undici sensori per mano), sviluppato con Unity e C# per la tesi di laurea e accompagnato dalla pubblicazione scientifica ManDri (WAINA 2019, Springer).',
    challenge: 'Mappare i movimenti naturali di mani e dita senza controller tradizionali e trasferire i gesti in un ambiente 3D reattivo.',
    solution: 'Simulatore Unity/C# con interazione gestuale completa, poi esteso nel paper ManDri per comandare con i gesti le funzioni dell’auto durante la guida.',
    impact: 'Pubblicazione scientifica internazionale Springer',
    stack: ['Unity 3D', 'C#', 'Manus VR'],
    links: [
      { label: 'GitHub', url: 'https://github.com/mauriziominieri/Manus-VR' },
      { label: 'Paper Springer', url: 'https://link.springer.com/chapter/10.1007/978-3-030-15035-8_84' },
      { label: 'Video Tesi', url: 'https://mauriziominieri.github.io/videos/PresentazioneManusVRMinieri.mp4' },
      { label: 'Gioco VR', url: 'https://mauriziominieri.github.io/videos/PresentazioneManusVRMinieriCut.mp4' },
    ],
    featured: true,
  },
  {
    id: 'my-tv',
    title: 'my TV',
    category: 'Web',
    year: '2024',
    role: 'Web App · TypeScript & Next.js',
    summary: 'Applicazione web moderna per catalogare, tracciare e organizzare film e serie TV preferite in tempo reale da qualsiasi dispositivo.',
    challenge: 'Offrire una catalogazione rapida, ricerca istantanea e un’interfaccia fluida sia su smartphone che su desktop.',
    solution: 'Web app full-stack sviluppata in TypeScript, React e Next.js e pubblicata online su Vercel.',
    impact: 'Live su Vercel',
    stack: ['TypeScript', 'Next.js', 'React'],
    links: [
      { label: 'Apri Live', url: 'https://my-tv-doppia3mme.vercel.app' },
      { label: 'GitHub', url: 'https://github.com/mauriziominieri/my-tv' },
    ],
    featured: true,
  },
  {
    id: 'the-flying-pig',
    title: 'The Flying Pig',
    category: 'iOS',
    year: '2020',
    role: 'Apple Developer Academy · Swift',
    summary: 'Gioco arcade mobile sviluppato in Swift durante la sfida MC1 alla Apple Developer Academy, con fisica personalizzata e livelli progressivi.',
    challenge: 'Garantire fisica fluida, rilevamento preciso delle collisioni e controlli touch reattivi su iOS.',
    solution: 'Implementazione nativa in Swift con animazioni, gestione punteggi e feedback visivi in tempo reale.',
    impact: 'Progetto Apple Developer Academy',
    stack: ['Swift', 'iOS', 'Xcode'],
    links: [
      { label: 'GitHub', url: 'https://github.com/mauriziominieri/MC1-TheFlyingPig' },
    ],
    featured: true,
  },
  {
    id: 'easyticket-suite',
    title: 'EasyTicket Suite',
    category: 'Java & C',
    year: '2019',
    role: 'Client, Operator & Web · Java',
    summary: 'Sistema completo formato da app Client, console Operatore in Java e interfaccia Web per la gestione intelligente di code e prenotazioni agli sportelli.',
    challenge: 'Sincronizzare le richieste concorrenti tra più utenti in attesa e diversi sportelli operatori in tempo reale.',
    solution: 'Architettura client-server modulare suddivisa in tre repository dedicati (Client, Operator e Web Portal).',
    impact: 'Suite multipiattaforma completa',
    stack: ['Java', 'Client-Server', 'Web'],
    links: [
      { label: 'Client', url: 'https://github.com/mauriziominieri/EasyTicket_Client' },
      { label: 'Operator', url: 'https://github.com/mauriziominieri/EasyTicket_Operator' },
      { label: 'Web', url: 'https://github.com/mauriziominieri/EasyTicket_Web' },
    ],
    featured: true,
  },
  {
    id: 'battlebash',
    title: 'BattleBash',
    category: 'Java & C',
    year: '2018',
    role: 'Sistemi Operativi · C & Thread',
    summary: 'Gioco di battaglia navale multiplayer sviluppato in C con thread POSIX, socket di rete e programmazione concorrente.',
    challenge: 'Gestire più partite simultanee evitando race condition e deadlock tra i client connessi.',
    solution: 'Sincronizzazione sicura dei thread tramite mutex e protocollo client-server su socket POSIX in C.',
    impact: 'Progetto universitario Sistemi Operativi',
    stack: ['C', 'POSIX Threads', 'Socket'],
    links: [
      { label: 'GitHub', url: 'https://github.com/mauriziominieri/BattleBash' },
    ],
    featured: true,
  },
  {
    id: 'change-color',
    title: 'Change Color',
    category: 'VR & Giochi',
    year: '2020',
    role: 'Matrice in C & Gioco Web',
    summary: 'Una matrice a colori nata in C (Code::Blocks) e portata sul web per poterci giocare subito direttamente dal browser.',
    challenge: 'Ottimizzare l’espansione flood-fill su griglia bidimensionale minimizzando il numero di mosse necessarie.',
    solution: 'Algoritmo ricorsivo/iterativo progettato in C e adattato in versione web giocabile online.',
    impact: 'Giocabile online dal browser',
    stack: ['C', 'Code::Blocks', 'Web'],
    links: [
      { label: 'Gioca ora', url: 'https://mauriziominieri.github.io/ChangeColor/' },
      { label: 'GitHub', url: 'https://github.com/mauriziominieri/ChangeColor' },
    ],
    featured: true,
  },
  {
    id: 'gioco-del-15',
    title: 'Il Gioco del 15',
    category: 'VR & Giochi',
    year: '2020',
    role: 'C (Dev-C++) & Versione Web',
    summary: 'Un gioco simpatico e intramontabile realizzato utilizzando una matrice di numeri 4×4 in C (Dev-C++) e giocabile subito online.',
    challenge: 'Validazione delle mosse adiacenti alla casella vuota, mescolamento risolvibile e controllo vittoria.',
    solution: 'Logica su matrice bidimensionale sviluppata in C e pubblicata anche come web game interattivo.',
    impact: 'Giocabile online',
    stack: ['C', 'Dev-C++', 'Web'],
    links: [
      { label: 'Gioca ora', url: 'https://mauriziominieri.github.io/GiocoDelQuindici/' },
      { label: 'GitHub', url: 'https://github.com/mauriziominieri/GiocoDelQuindici' },
    ],
  },
  {
    id: 'nasa-game',
    title: 'NASA Space Apps 2018',
    category: 'VR & Giochi',
    year: '2018',
    role: 'Hackathon NASA · C# & Unity',
    summary: 'Gioco spaziale sviluppato in 48 ore alla NASA Space Apps Challenge.',
    challenge: 'Prototipare un gioco funzionante nei tempi dell’hackathon.',
    solution: 'Sviluppo rapido in Unity e C#.',
    impact: 'Attestato NASA Galactic Problem Solver',
    stack: ['C#', 'Unity', 'NASA'],
    links: [
      { label: 'GitHub', url: 'https://github.com/mauriziominieri/SpaceAppChallenge2018' },
    ],
  },
  {
    id: 'findone',
    title: 'FindOne',
    category: 'iOS',
    year: '2020',
    role: 'Apple Developer Academy · Swift',
    summary: 'App iOS sviluppata alla Apple Developer Academy con articolo tecnico su Medium.',
    challenge: 'Progettazione UX nativa secondo le linee guida Apple.',
    solution: 'App Swift modulare e pulita.',
    impact: 'Progetto Academy + Articolo Medium',
    stack: ['Swift', 'iOS', 'UX'],
    links: [
      { label: 'GitLab', url: 'https://gitlab.com/DOPPIA3MME/nc3-findone' },
    ],
  },
  {
    id: 'not-only-pasta',
    title: 'Not Only Pasta',
    category: 'iOS',
    year: '2020',
    role: 'Apple Developer Academy · Swift',
    summary: 'App iOS dedicata a ricette e passaggi guidati realizzata in Swift.',
    challenge: 'Navigazione rapida tra ingredienti e fasi di preparazione.',
    solution: 'Interfaccia nativa iOS.',
    impact: 'Progetto Apple Developer Academy',
    stack: ['Swift', 'Xcode', 'iOS'],
    links: [
      { label: 'GitLab', url: 'https://gitlab.com/DOPPIA3MME/mc1-notonlypasta' },
    ],
  },
  {
    id: 'cabway',
    title: 'Cabway',
    category: 'iOS',
    year: '2020',
    role: 'Apple Developer Academy · Swift',
    summary: 'App iOS per la mobilità condivisa con mappe e selezione rapida dei tragitti.',
    challenge: 'Integrazione MapKit e flusso di prenotazione veloce.',
    solution: 'Architettura Swift orientata all’uso in mobilità.',
    impact: 'Progetto Apple Developer Academy',
    stack: ['Swift', 'MapKit', 'iOS'],
    links: [
      { label: 'GitLab', url: 'https://gitlab.com/DOPPIA3MME/cabway-official' },
    ],
  },
  {
    id: 'geoall-ar-coredata',
    title: 'GeoAll, AR Images & Core Data',
    category: 'iOS',
    year: '2020',
    role: 'Prototipi iOS · ARKit & REST',
    summary: 'Raccolta di 4 app iOS su Realtà Aumentata, geolocalizzazione, Core Data e API.',
    challenge: 'Padroneggiare i principali framework nativi Apple.',
    solution: 'Moduli verticali su ARKit, CoreLocation, Core Data e REST.',
    impact: '4 repository iOS su GitLab',
    stack: ['Swift', 'ARKit', 'Core Data'],
    links: [
      { label: 'AR Images', url: 'https://gitlab.com/DOPPIA3MME/personal-arimages' },
      { label: 'GeoAll', url: 'https://gitlab.com/DOPPIA3MME/personal-geoall' },
      { label: 'Core Data', url: 'https://gitlab.com/DOPPIA3MME/mylibrarywithcoredata' },
      { label: 'API Holidays', url: 'https://gitlab.com/DOPPIA3MME/personal-api-holidays' },
    ],
  },
  {
    id: 'abr-graph',
    title: 'ABR Tree & Grafi',
    category: 'Java & C',
    year: '2018',
    role: 'Algoritmi · Linguaggio C',
    summary: 'Alberi Binari di Ricerca, grafi e cammini minimi usati anche nelle lezioni.',
    challenge: 'Gestione dinamica di puntatori e memoria senza leak.',
    solution: 'Librerie modulari e commentate in C.',
    impact: 'Riferimento didattico per esami universitari',
    stack: ['C', 'Alberi ABR', 'Grafi'],
    links: [
      { label: 'ABR Tree', url: 'https://github.com/mauriziominieri/ABR_Tree' },
      { label: 'Graph', url: 'https://github.com/mauriziominieri/Graph' },
      { label: 'MinPath', url: 'https://github.com/mauriziominieri/Graph_minPath' },
    ],
  },
  {
    id: 'highway-project',
    title: 'Highway Project',
    category: 'Java & C',
    year: '2018',
    role: 'Simulatore OOP · Java',
    summary: 'Simulatore grafico in Java di flussi autostradali e corsie dinamiche.',
    challenge: 'Modellare entità autonome in tempo reale.',
    solution: 'Architettura ad oggetti in Java.',
    impact: 'Simulazione completa su GitHub',
    stack: ['Java', 'OOP', 'Grafica'],
    links: [
      { label: 'GitHub', url: 'https://github.com/mauriziominieri/HighwayProject' },
    ],
  },
  {
    id: 'find-your-pc',
    title: 'Find your PC',
    category: 'Java & C',
    year: '2018',
    role: 'Applicazione Java',
    summary: 'Configuratore guidato per scegliere il computer ideale per budget e utilizzo.',
    challenge: 'Tradurre esigenze pratiche in specifiche tecniche.',
    solution: 'Motore di raccomandazione in Java.',
    impact: 'Tool interattivo completo',
    stack: ['Java', 'Desktop UI'],
    links: [
      { label: 'GitHub', url: 'https://github.com/mauriziominieri/Economia-Project' },
    ],
  },
  {
    id: 'dashboard-gierre',
    title: 'Dashboard Gierre',
    category: 'Web',
    year: '2021',
    role: 'Web Dashboard · JS',
    summary: 'Dashboard aziendale per monitoraggio indicatori operativi e stato clienti.',
    challenge: 'Rendere chiari e immediati i dati operativi.',
    solution: 'Interfaccia web snella con metriche e script dedicati.',
    impact: 'Utilizzata in ambito aziendale',
    stack: ['HTML', 'CSS', 'JavaScript'],
    links: [
      { label: 'GitHub', url: 'https://github.com/mauriziominieri/Dashboard' },
    ],
  },
  {
    id: 'uil-scuola-napoli',
    title: 'UIL Scuola Napoli',
    category: 'Web',
    year: '2020',
    role: 'Portale Web · Scuola',
    summary: 'Sito informativo per docenti, personale ATA e comunicazioni scolastiche.',
    challenge: 'Accesso rapido a circolari e modulistica da mobile.',
    solution: 'Portale web responsive e intuitivo.',
    impact: 'Online per il personale scolastico',
    stack: ['HTML5', 'CSS3', 'JavaScript'],
    links: [
      { label: 'Sito Web', url: 'http://www.uilscuolanapoliareaflegrea.it/' },
    ],
  },
  {
    id: 'dance-scratch',
    title: 'DANCE (Scratch)',
    category: 'VR & Giochi',
    year: '2021',
    role: 'Didattica a blocchi · Scratch',
    summary: 'Gioco musicale a blocchi su Scratch usato per avvicinare i ragazzi al coding.',
    challenge: 'Spiegare cicli ed eventi in modo divertente.',
    solution: 'Progetto aperto e modificabile online.',
    impact: 'Giocabile su Scratch MIT',
    stack: ['Scratch', 'Coding'],
    links: [
      { label: 'Apri Scratch', url: 'https://scratch.mit.edu/projects/312466034/' },
    ],
  },
];

export const PON_SCHOOLS: PonSchoolExperience[] = [
  {
    schoolName: 'I.C. Tito Livio',
    coursesCount: '3 corsi svolti',
    studentsCount: '12 studenti',
    subjects: 'Robotica · Programmazione · Informatica',
    photos: [
      {
        src: 'https://mauriziominieri.github.io/images/titoLivio1.jpeg',
        alt: 'Laboratorio PON all’I.C. Tito Livio - foto 1',
      },
      {
        src: 'https://mauriziominieri.github.io/images/titoLivio2.jpeg',
        alt: 'Laboratorio PON all’I.C. Tito Livio - foto 2',
      },
      {
        src: 'https://mauriziominieri.github.io/images/titoLivio3.jpeg',
        alt: 'Laboratorio PON all’I.C. Tito Livio - foto 3',
      },
    ],
  },
  {
    schoolName: 'Liceo Plinio Seniore',
    coursesCount: '1 corso svolto',
    studentsCount: '22 studenti',
    subjects: 'Programmazione · Informatica',
    photos: [
      {
        src: 'https://mauriziominieri.github.io/images/Plinio1.jpeg',
        alt: 'Corso PON al Liceo Plinio Seniore - foto 1',
      },
      {
        src: 'https://mauriziominieri.github.io/images/Plinio2.jpeg',
        alt: 'Corso PON al Liceo Plinio Seniore - foto 2',
      },
    ],
  },
  {
    schoolName: 'Liceo De Carlo',
    coursesCount: '2 corsi svolti',
    studentsCount: '27 studenti',
    subjects: 'Robotica · Programmazione',
    photos: [
      {
        src: 'https://mauriziominieri.github.io/images/deCarlo1.jpeg',
        alt: 'Laboratorio PON al Liceo De Carlo - foto 1',
      },
      {
        src: 'https://mauriziominieri.github.io/images/deCarlo2.jpg',
        alt: 'Laboratorio PON al Liceo De Carlo - foto 2',
      },
      {
        src: 'https://mauriziominieri.github.io/images/deCarlo3.jpg',
        alt: 'Laboratorio PON al Liceo De Carlo - foto 3',
      },
    ],
  },
];

export const TEACHING_TRACKS: TeachingTrack[] = [
  {
    id: 'maturita-scuola',
    audience: 'studenti',
    title: 'Scuole Superiori & Maturità',
    subtitle: 'Supporto pratico per ragazzi alle prime armi o sotto esame',
    topics: [
      'Lezioni pratiche di programmazione (Python, C, C++, Java...)',
      'Siti web (HTML, CSS, JS, React) e logica di base',
      'Scratch, Arduino e Raspberry Pi',
    ],
    bookingSubject: 'Ripetizioni Superiori & Maturità',
  },
  {
    id: 'ripetizioni-universita',
    audience: 'studenti',
    title: 'Esami Universitari & Recupero',
    subtitle: 'Informatica, Ingegneria e Istituti Tecnici',
    topics: [
      'C, C++, Java, Python, JavaScript e TypeScript',
      'Algoritmi, Strutture Dati, Puntatori e SQL',
      'Sistemi Operativi, Reti e Basi di Dati',
    ],
    bookingSubject: 'Esami Universitari (C, Java, Python)',
  },
  {
    id: 'moduli-pon-scuole',
    audience: 'docenti',
    title: 'Docenze PON, PNRR & Laboratori STEM',
    subtitle: 'Esperto Esterno dalle elementari alle superiori',
    topics: [
      'Robotica educativa con Arduino e Raspberry Pi',
      'Coding pratico in Scratch, Python, C o Web',
      'Esperienza diretta al Tito Livio, Plinio Seniore, De Carlo e altre scuole',
    ],
    bookingSubject: 'Moduli PON / Robotica per Scuole',
  },
  {
    id: 'formazione-docenti',
    audience: 'docenti',
    title: 'Formazione Docenti & Digitale',
    subtitle: 'Workshop pratici per insegnanti e dipartimenti',
    topics: [
      'Coding e robotica pronti da portare in classe',
      'Strumenti web, GitHub e gestione laboratori',
      'Sicurezza informatica e didattica attiva',
    ],
    bookingSubject: 'Moduli PON / Robotica per Scuole',
  },
];

export const CERTIFICATES: CertificateItem[] = [
  {
    id: 'cka-2026',
    year: '2026',
    title: 'CKA — Certified Kubernetes Administrator',
    issuer: 'Linux Foundation',
    category: 'Cloud & Kubernetes',
    url: 'https://www.credly.com/badges/c7a04ede-108b-4c66-b5b3-1a431752e5ab/linked_in_profile',
    featured: true,
  },
  {
    id: 'ocp-java11',
    year: '2023',
    title: 'Oracle Certified Professional Java SE 11 Developer',
    issuer: 'Oracle',
    category: 'Programmazione Java',
    url: 'https://catalog-education.oracle.com/ords/certview/sharebadge?id=6CDA6207592BA4F20A9368608471C747EAC2B3338F3332A70D7926F39BCE070B',
    featured: true,
  },
  {
    id: 'oca-java8',
    year: '2021',
    title: 'Oracle Certified Associate Java SE 8 Programmer',
    issuer: 'Oracle',
    category: 'Programmazione Java',
    url: 'https://www.credly.com/badges/bfeb2a50-eca8-4e1a-961d-76d80bce548d?source=linked_in_profile',
    featured: true,
  },
  {
    id: 'apple-academy',
    year: '2020',
    title: 'Apple Developer Academy 2019/2020',
    issuer: 'Apple',
    category: 'iOS & Sviluppo App',
    url: 'https://mauriziominieri.github.io/documents/apple_certification.pdf',
    featured: true,
  },
  {
    id: 'ccna-rse',
    year: '2020',
    title: 'Cisco CCNA Routing & Switching Essentials',
    issuer: 'Cisco',
    category: 'Networking',
    url: 'https://mauriziominieri.github.io/documents/RSE20.pdf',
    featured: true,
  },
  {
    id: 'ccna-itn',
    year: '2020',
    title: 'Cisco CCNA Introduction to Networks',
    issuer: 'Cisco',
    category: 'Networking',
    url: 'https://mauriziominieri.github.io/documents/ITN20.pdf',
    featured: true,
  },
  {
    id: 'udemy-cka',
    year: '2024',
    title: 'CKA Practice Test',
    issuer: 'Udemy',
    category: 'Cloud & Kubernetes',
    url: 'https://www.udemy.com/certificate/UC-824b4b32-e07f-46ea-abd4-7fdaeabbc6c2/',
  },
  {
    id: 'kodekloud-cka',
    year: '2024',
    title: 'CKA — Certified Kubernetes Administrator Course',
    issuer: 'KodeKloud',
    category: 'Cloud & Kubernetes',
    url: 'https://learn.kodekloud.com/learn/certificate/a42567f7-233d-4a69-82c0-488478c63e41',
  },
  {
    id: 'kodekloud-jsonpath',
    year: '2024',
    title: 'JSON Path Test',
    issuer: 'KodeKloud',
    category: 'Cloud & Kubernetes',
    url: 'https://learn.kodekloud.com/learn/certificate/f5613884-1e7d-4bf0-aba8-440a7f1b7927',
  },
  {
    id: 'apple-teacher',
    year: '2020',
    title: 'iOS App Development & Swift Playgrounds',
    issuer: 'Apple Developer Academy',
    category: 'Didattica & iOS',
    url: 'https://mauriziominieri.github.io/documents/CertificatoAppleTeacher.pdf',
  },
  {
    id: 'redhat-do080',
    year: '2020',
    title: 'Deploying Containerized Applications Technical Overview (DO080)',
    issuer: 'Red Hat',
    category: 'Container & Linux',
    url: 'https://mauriziominieri.github.io/documents/DO080.pdf',
  },
  {
    id: 'cloud-guru',
    year: '2020',
    title: 'Introduction to Cloud Computing',
    issuer: 'A Cloud Guru',
    category: 'Cloud & Sistemi',
    url: 'https://mauriziominieri.github.io/documents/CloudComputing.pdf',
  },
  {
    id: 'bitdegree-hacker',
    year: '2020',
    title: 'How to Become a Hacker — Ethical White Hats',
    issuer: 'BitDegree',
    category: 'Sicurezza',
    url: 'https://mauriziominieri.github.io/documents/BitDegree.pdf',
  },
  {
    id: 'agile-pm',
    year: '2020',
    title: 'Agile Project Management',
    issuer: 'Life Learning',
    category: 'Management',
    url: 'https://mauriziominieri.github.io/images/AgileProjectManagement.jpeg',
  },
  {
    id: 'eduopen-statistica',
    year: '2020',
    title: 'Analisi statistica e valutazione del dato sperimentale (3ª ed.)',
    issuer: 'EduOpen',
    category: 'Data Analysis',
    url: 'https://mauriziominieri.github.io/documents/AnalisiStatistica-ValutazioneDelDatoSperimentale.pdf',
  },
  {
    id: 'leeds-coding',
    year: '2020',
    title: 'University of Leeds & Institute of Coding',
    issuer: 'FutureLearn',
    category: 'Coding & Web',
    url: 'https://mauriziominieri.github.io/documents/university-of-leeds.pdf',
  },
  {
    id: 'accenture-skills',
    year: '2020',
    title: 'Accenture Digital Skills',
    issuer: 'FutureLearn',
    category: 'Competenze Digitali',
    url: 'https://mauriziominieri.github.io/documents/accenture.pdf',
  },
  {
    id: 'google-digital',
    year: '2020',
    title: 'Google Digital Training — Fondamenti di Marketing Digitale',
    issuer: 'Google',
    category: 'Digital & Analytics',
    url: 'https://mauriziominieri.github.io/documents/certificatoGoogle.pdf',
  },
  {
    id: 'google-analytics',
    year: '2020',
    title: 'Google Analytics',
    issuer: 'Google',
    category: 'Digital & Analytics',
    url: 'https://mauriziominieri.github.io/documents/GoogleAnalytics.pdf',
  },
  {
    id: 'scrumstudy',
    year: '2020',
    title: 'Marketing Strategy Fundamentals',
    issuer: 'ScrumStudy',
    category: 'Management',
    url: 'https://mauriziominieri.github.io/documents/scrum-study.pdf',
  },
  {
    id: 'ef-set',
    year: '2020',
    title: 'English Certificate',
    issuer: 'EF SET',
    category: 'Lingue',
    url: 'https://mauriziominieri.github.io/documents/ef-set-english.pdf',
  },
  {
    id: 'virginia-business',
    year: '2020',
    title: 'New Models of Business Society',
    issuer: 'University of Virginia',
    category: 'Management',
    url: 'https://mauriziominieri.github.io/documents/BusinessInSociety.pdf',
  },
  {
    id: 'igea-comunicazione',
    year: '2020',
    title: 'Il potere della comunicazione non verbale',
    issuer: 'IGEA',
    category: 'Soft Skills & Didattica',
    url: 'https://mauriziominieri.github.io/documents/Igea.pdf',
  },
  {
    id: 'gdpr-2020',
    year: '2020',
    title: 'Corso GDPR 679/2016',
    issuer: 'Certificazione GDPR',
    category: 'Privacy & Normativa',
    url: 'https://mauriziominieri.github.io/documents/CertificazioneGDPR.pdf',
  },
  {
    id: 'who-hygiene',
    year: '2020',
    title: 'Standard Precautions — Hand Hygiene',
    issuer: 'World Health Organization',
    category: 'Altro',
    url: 'https://mauriziominieri.github.io/documents/World-health-organization.pdf',
  },
  {
    id: 'nasa-space-apps',
    year: '2018',
    title: 'Galactic Problem Solver — International Space Apps Challenge',
    issuer: 'NASA',
    category: 'Hackathon & Innovazione',
    url: 'https://mauriziominieri.github.io/images/NASA.jpg',
  },
  {
    id: 'itf-security',
    year: '2015',
    title: 'Capo Sicurezza Società Sportiva',
    issuer: 'ITF Group SRL',
    category: 'Sicurezza',
    url: 'https://mauriziominieri.github.io/documents/Security.pdf',
  },
];
