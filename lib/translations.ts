export type Locale = "es" | "en" | "it";

export const locales: Locale[] = ["es", "en", "it"];

export const localeMeta: Record<Locale, { label: string; flag: string }> = {
  es: { label: "Español", flag: "🇪🇸" },
  en: { label: "English", flag: "🇺🇸" },
  it: { label: "Italiano", flag: "🇮🇹" },
};

export interface SkillItem {
  name: string;
  level: number;
}
export interface SkillCategory {
  key: string;
  name: string;
  items: SkillItem[];
}
export interface Project {
  key: string;
  title: string;
  description: string;
  tech: string[];
  listLabel: string;
  list: string[];
}
export interface TimelineItem {
  title: string;
  period: string;
  subtitle: string;
}
export interface LanguageItem {
  flag: string;
  name: string;
  level: string;
  strength: number;
}
export interface StatItem {
  value: number;
  suffix: string;
  label: string;
  isBadge?: boolean;
}

export interface Dictionary {
  meta: { title: string; description: string };
  nav: {
    about: string;
    skills: string;
    projects: string;
    experience: string;
    education: string;
    languages: string;
    certifications: string;
    contact: string;
    menuOpen: string;
    menuClose: string;
    langSwitch: string;
  };
  hero: {
    eyebrow: string;
    status: string;
    location: string;
    name: string;
    role: string;
    description: string;
    ctaCV: string;
    ctaProjects: string;
    ctaContact: string;
  };
  about: {
    eyebrow: string;
    title: string;
    paragraphs: string[];
    badges: string[];
  };
  skills: {
    eyebrow: string;
    title: string;
    subtitle: string;
    categories: SkillCategory[];
  };
  projects: {
    eyebrow: string;
    title: string;
    subtitle: string;
    items: Project[];
  };
  experience: {
    eyebrow: string;
    title: string;
    role: string;
    period: string;
    description: string;
  };
  education: {
    eyebrow: string;
    title: string;
    items: TimelineItem[];
  };
  languagesSection: {
    eyebrow: string;
    title: string;
    items: LanguageItem[];
  };
  certifications: {
    eyebrow: string;
    title: string;
    placeholder: string;
  };
  stats: {
    eyebrow: string;
    title: string;
    items: StatItem[];
  };
  contact: {
    eyebrow: string;
    title: string;
    description: string;
    emailLabel: string;
    githubLabel: string;
    countriesLabel: string;
    cta: string;
  };
  footer: {
    tagline: string;
    rights: string;
    builtWith: string;
  };
}

export const dictionaries: Record<Locale, Dictionary> = {
  es: {
    meta: {
      title: "Alessandro Caldana — Full Stack Developer & UI/UX Designer",
      description:
        "Portafolio de Alessandro Caldana, Ingeniero de Sistemas, Full Stack Developer y diseñador UI/UX en Colombia e Italia.",
    },
    nav: {
      about: "Sobre mí",
      skills: "Habilidades",
      projects: "Proyectos",
      experience: "Experiencia",
      education: "Educación",
      languages: "Idiomas",
      certifications: "Certificaciones",
      contact: "Contacto",
      menuOpen: "Abrir menú",
      menuClose: "Cerrar menú",
      langSwitch: "Cambiar idioma",
    },
    hero: {
      eyebrow: "$ whoami",
      status: "Disponible para trabajar",
      location: "Colombia ⇄ Italia",
      name: "Alessandro Caldana",
      role: "Ingeniero de Sistemas · Full Stack Developer · UI/UX Designer",
      description:
        "Transformo ideas en soluciones digitales modernas, combinando desarrollo web, experiencia de usuario y diseño visual para crear productos intuitivos y escalables.",
      ctaCV: "Descargar CV",
      ctaProjects: "Ver proyectos",
      ctaContact: "Contactarme",
    },
    about: {
      eyebrow: "$ cat about.md",
      title: "Sobre mí",
      paragraphs: [
        "Ingeniero de Sistemas graduado de la Universidad Popular del Cesar, apasionado por la tecnología desde niño y especializado en desarrollo Full Stack y diseño UX/UI.",
        "Me caracterizo por ser una persona creativa, comunicativa, con gran capacidad de aprendizaje y orientada a resolver problemas mediante soluciones digitales innovadoras.",
        "Tengo experiencia en desarrollo web, integración de APIs, bases de datos y diseño centrado en el usuario.",
      ],
      badges: ["Full Stack", "UX/UI Design", "Arquitectura de sistemas", "Bilingüe ES/IT"],
    },
    skills: {
      eyebrow: "$ ls skills/",
      title: "Habilidades",
      subtitle: "Stack técnico y herramientas que uso a diario para construir productos completos.",
      categories: [
        {
          key: "frontend",
          name: "Frontend",
          items: [
            { name: "React", level: 90 },
            { name: "HTML5", level: 95 },
            { name: "CSS3", level: 90 },
            { name: "JavaScript", level: 88 },
          ],
        },
        {
          key: "backend",
          name: "Backend",
          items: [
            { name: "PHP", level: 85 },
            { name: "Java", level: 75 },
            { name: "Python", level: 80 },
          ],
        },
        {
          key: "databases",
          name: "Bases de datos",
          items: [
            { name: "MySQL", level: 88 },
            { name: "SQL Server", level: 75 },
            { name: "MongoDB", level: 80 },
          ],
        },
        {
          key: "tools",
          name: "Herramientas",
          items: [
            { name: "Git", level: 85 },
            { name: "GitHub", level: 85 },
            { name: "Figma", level: 88 },
            { name: "Power BI", level: 78 },
            { name: "Photoshop", level: 75 },
            { name: "Filmora", level: 70 },
            { name: "CapCut", level: 70 },
            { name: "Webflow", level: 80 },
          ],
        },
        {
          key: "methods",
          name: "Metodologías",
          items: [
            { name: "Desarrollo Ágil", level: 85 },
            { name: "Arquitectura MVC", level: 85 },
          ],
        },
      ],
    },
    projects: {
      eyebrow: "$ git log --projects",
      title: "Proyectos Destacados",
      subtitle: "Una muestra de sistemas y productos digitales que he diseñado y construido.",
      items: [
        {
          key: "tanker",
          title: "Sistema Integral de Gestión para Servicio de Carro Tanque",
          description:
            "Desarrollé una plataforma Full Stack para la administración de usuarios, clientes, vehículos, conductores, despachos, pagos y facturación.",
          tech: ["React", "PHP", "MySQL", "APIs REST"],
          listLabel: "Logros",
          list: [
            "Arquitectura backend estructurada.",
            "Seguridad e integridad de datos.",
            "Automatización de procesos.",
            "Reducción de tiempos operativos.",
          ],
        },
        {
          key: "bigdata",
          title: "Sistema de Análisis de Datos con Big Data",
          description:
            "Diseñé una solución para el procesamiento y análisis de datos históricos utilizando herramientas de análisis masivo.",
          tech: ["Python", "MongoDB", "Power BI"],
          listLabel: "Funcionalidades",
          list: [
            "Procesamiento de datos.",
            "Identificación de patrones.",
            "Dashboards estratégicos.",
            "Visualización de información.",
          ],
        },
        {
          key: "cms",
          title: "Plataforma Web de Contenido Digital",
          description:
            "Participé en la modernización y optimización de una plataforma orientada a la gestión de contenido digital.",
          tech: ["React", "PHP", "MySQL", "APIs REST"],
          listLabel: "Mejoras implementadas",
          list: [
            "Refactorización de código.",
            "Integración de APIs externas.",
            "Optimización de consultas SQL.",
            "Mejoras de seguridad.",
            "Escalabilidad del sistema.",
          ],
        },
        {
          key: "vet",
          title: "Diseño UX/UI Clínica Veterinaria",
          description: "Proyecto enfocado en la creación de una experiencia de usuario intuitiva y moderna.",
          tech: ["Figma", "Photoshop"],
          listLabel: "Herramientas",
          list: ["Figma", "Photoshop"],
        },
        {
          key: "makeup",
          title: "Tienda de Maquillaje",
          description: "Sitio web desarrollado con Webflow con enfoque en usabilidad y experiencia visual.",
          tech: ["Webflow"],
          listLabel: "Enfoque",
          list: ["Usabilidad", "Experiencia visual"],
        },
        {
          key: "storeapp",
          title: "Aplicación Móvil de Tienda",
          description: "Prototipo móvil diseñado en Figma con enfoque en accesibilidad y experiencia de usuario.",
          tech: ["Figma"],
          listLabel: "Enfoque",
          list: ["Accesibilidad", "Experiencia de usuario"],
        },
      ],
    },
    experience: {
      eyebrow: "$ cat experience.log",
      title: "Experiencia",
      role: "Full Stack Developer",
      period: "En curso",
      description:
        "Participación en proyectos de desarrollo web y sistemas de gestión, implementando arquitecturas modernas y soluciones escalables.",
    },
    education: {
      eyebrow: "$ cat education.log",
      title: "Educación",
      items: [
        {
          title: "Universidad Popular del Cesar",
          period: "2019 – 2025",
          subtitle: "Ingeniería de Sistemas",
        },
      ],
    },
    languagesSection: {
      eyebrow: "$ cat languages.json",
      title: "Idiomas",
      items: [
        { flag: "🇪🇸", name: "Español", level: "Avanzado", strength: 0.85 },
        { flag: "🇮🇹", name: "Italiano", level: "Nativo", strength: 1 },
        { flag: "🇺🇸", name: "Inglés", level: "Intermedio", strength: 0.6 },
      ],
    },
    certifications: {
      eyebrow: "$ ls certifications/",
      title: "Certificaciones",
      placeholder: "Próximamente — esta sección está lista para nuevos cursos y certificados.",
    },
    stats: {
      eyebrow: "$ uptime --career",
      title: "En números",
      items: [
        { value: 6, suffix: "+", label: "Proyectos desarrollados" },
        { value: 3, suffix: "", label: "Idiomas" },
        { value: 10, suffix: "+", label: "Tecnologías dominadas" },
        { value: 0, suffix: "", label: "Full Stack Developer", isBadge: true },
      ],
    },
    contact: {
      eyebrow: "$ cat contact.txt",
      title: "Contacto",
      description: "¿Tienes un proyecto en mente? Hablemos.",
      emailLabel: "Correo",
      githubLabel: "GitHub",
      countriesLabel: "Países",
      cta: "Enviar correo",
    },
    footer: {
      tagline: "Innovando a través del diseño y el desarrollo.",
      rights: "Todos los derechos reservados.",
      builtWith: "Construido con Next.js, TypeScript & Tailwind CSS.",
    },
  },
  en: {
    meta: {
      title: "Alessandro Caldana — Full Stack Developer & UI/UX Designer",
      description:
        "Portfolio of Alessandro Caldana, Systems Engineer, Full Stack Developer and UI/UX designer based across Colombia and Italy.",
    },
    nav: {
      about: "About",
      skills: "Skills",
      projects: "Projects",
      experience: "Experience",
      education: "Education",
      languages: "Languages",
      certifications: "Certifications",
      contact: "Contact",
      menuOpen: "Open menu",
      menuClose: "Close menu",
      langSwitch: "Change language",
    },
    hero: {
      eyebrow: "$ whoami",
      status: "Available for work",
      location: "Colombia ⇄ Italy",
      name: "Alessandro Caldana",
      role: "Systems Engineer · Full Stack Developer · UI/UX Designer",
      description:
        "I turn ideas into modern digital solutions, combining web development, user experience and visual design to build products that are intuitive and built to scale.",
      ctaCV: "Download CV",
      ctaProjects: "View projects",
      ctaContact: "Get in touch",
    },
    about: {
      eyebrow: "$ cat about.md",
      title: "About me",
      paragraphs: [
        "Systems Engineer graduated from Universidad Popular del Cesar, passionate about technology since childhood and specialized in Full Stack development and UX/UI design.",
        "I'm a creative, communicative person with a strong capacity for learning, focused on solving problems through innovative digital solutions.",
        "I have experience in web development, API integration, databases and user-centered design.",
      ],
      badges: ["Full Stack", "UX/UI Design", "Systems architecture", "Bilingual ES/IT"],
    },
    skills: {
      eyebrow: "$ ls skills/",
      title: "Skills",
      subtitle: "The technical stack and tools I rely on daily to ship complete products.",
      categories: [
        {
          key: "frontend",
          name: "Frontend",
          items: [
            { name: "React", level: 90 },
            { name: "HTML5", level: 95 },
            { name: "CSS3", level: 90 },
            { name: "JavaScript", level: 88 },
          ],
        },
        {
          key: "backend",
          name: "Backend",
          items: [
            { name: "PHP", level: 85 },
            { name: "Java", level: 75 },
            { name: "Python", level: 80 },
          ],
        },
        {
          key: "databases",
          name: "Databases",
          items: [
            { name: "MySQL", level: 88 },
            { name: "SQL Server", level: 75 },
            { name: "MongoDB", level: 80 },
          ],
        },
        {
          key: "tools",
          name: "Tools",
          items: [
            { name: "Git", level: 85 },
            { name: "GitHub", level: 85 },
            { name: "Figma", level: 88 },
            { name: "Power BI", level: 78 },
            { name: "Photoshop", level: 75 },
            { name: "Filmora", level: 70 },
            { name: "CapCut", level: 70 },
            { name: "Webflow", level: 80 },
          ],
        },
        {
          key: "methods",
          name: "Methodologies",
          items: [
            { name: "Agile Development", level: 85 },
            { name: "MVC Architecture", level: 85 },
          ],
        },
      ],
    },
    projects: {
      eyebrow: "$ git log --projects",
      title: "Featured Projects",
      subtitle: "A sample of systems and digital products I've designed and built.",
      items: [
        {
          key: "tanker",
          title: "Integrated Management System for Tanker Truck Logistics",
          description:
            "Built a Full Stack platform to manage users, clients, vehicles, drivers, dispatch, payments and invoicing.",
          tech: ["React", "PHP", "MySQL", "REST APIs"],
          listLabel: "Highlights",
          list: [
            "Structured backend architecture.",
            "Data security and integrity.",
            "Process automation.",
            "Reduced operating times.",
          ],
        },
        {
          key: "bigdata",
          title: "Big Data Analysis System",
          description:
            "Designed a solution for processing and analyzing historical data using large-scale analytics tools.",
          tech: ["Python", "MongoDB", "Power BI"],
          listLabel: "Capabilities",
          list: [
            "Data processing.",
            "Pattern identification.",
            "Strategic dashboards.",
            "Information visualization.",
          ],
        },
        {
          key: "cms",
          title: "Digital Content Web Platform",
          description: "Took part in modernizing and optimizing a platform built for digital content management.",
          tech: ["React", "PHP", "MySQL", "REST APIs"],
          listLabel: "Improvements delivered",
          list: [
            "Code refactoring.",
            "External API integration.",
            "SQL query optimization.",
            "Security improvements.",
            "System scalability.",
          ],
        },
        {
          key: "vet",
          title: "UX/UI Design — Veterinary Clinic",
          description: "Project focused on creating an intuitive, modern user experience.",
          tech: ["Figma", "Photoshop"],
          listLabel: "Tools",
          list: ["Figma", "Photoshop"],
        },
        {
          key: "makeup",
          title: "Makeup Store",
          description: "Website built with Webflow, focused on usability and visual experience.",
          tech: ["Webflow"],
          listLabel: "Focus",
          list: ["Usability", "Visual experience"],
        },
        {
          key: "storeapp",
          title: "Store Mobile App",
          description: "Mobile prototype designed in Figma, focused on accessibility and user experience.",
          tech: ["Figma"],
          listLabel: "Focus",
          list: ["Accessibility", "User experience"],
        },
      ],
    },
    experience: {
      eyebrow: "$ cat experience.log",
      title: "Experience",
      role: "Full Stack Developer",
      period: "Ongoing",
      description:
        "Involved in web development and management-system projects, implementing modern architectures and scalable solutions.",
    },
    education: {
      eyebrow: "$ cat education.log",
      title: "Education",
      items: [
        {
          title: "Universidad Popular del Cesar",
          period: "2019 – 2025",
          subtitle: "Systems Engineering",
        },
      ],
    },
    languagesSection: {
      eyebrow: "$ cat languages.json",
      title: "Languages",
      items: [
        { flag: "🇪🇸", name: "Spanish", level: "Advanced", strength: 0.85 },
        { flag: "🇮🇹", name: "Italian", level: "Native", strength: 1 },
        { flag: "🇺🇸", name: "English", level: "Intermediate", strength: 0.6 },
      ],
    },
    certifications: {
      eyebrow: "$ ls certifications/",
      title: "Certifications",
      placeholder: "Coming soon — this section is ready for new courses and certificates.",
    },
    stats: {
      eyebrow: "$ uptime --career",
      title: "By the numbers",
      items: [
        { value: 6, suffix: "+", label: "Projects shipped" },
        { value: 3, suffix: "", label: "Languages" },
        { value: 10, suffix: "+", label: "Technologies mastered" },
        { value: 0, suffix: "", label: "Full Stack Developer", isBadge: true },
      ],
    },
    contact: {
      eyebrow: "$ cat contact.txt",
      title: "Contact",
      description: "Have a project in mind? Let's talk.",
      emailLabel: "Email",
      githubLabel: "GitHub",
      countriesLabel: "Countries",
      cta: "Send an email",
    },
    footer: {
      tagline: "Innovating through design and development.",
      rights: "All rights reserved.",
      builtWith: "Built with Next.js, TypeScript & Tailwind CSS.",
    },
  },
  it: {
    meta: {
      title: "Alessandro Caldana — Full Stack Developer & UI/UX Designer",
      description:
        "Portfolio di Alessandro Caldana, Ingegnere Informatico, Full Stack Developer e UI/UX designer tra Colombia e Italia.",
    },
    nav: {
      about: "Chi sono",
      skills: "Competenze",
      projects: "Progetti",
      experience: "Esperienza",
      education: "Formazione",
      languages: "Lingue",
      certifications: "Certificazioni",
      contact: "Contatti",
      menuOpen: "Apri menu",
      menuClose: "Chiudi menu",
      langSwitch: "Cambia lingua",
    },
    hero: {
      eyebrow: "$ whoami",
      status: "Disponibile per lavorare",
      location: "Colombia ⇄ Italia",
      name: "Alessandro Caldana",
      role: "Ingegnere Informatico · Full Stack Developer · UI/UX Designer",
      description:
        "Trasformo le idee in soluzioni digitali moderne, unendo sviluppo web, esperienza utente e design visivo per creare prodotti intuitivi e scalabili.",
      ctaCV: "Scarica CV",
      ctaProjects: "Vedi progetti",
      ctaContact: "Contattami",
    },
    about: {
      eyebrow: "$ cat about.md",
      title: "Chi sono",
      paragraphs: [
        "Ingegnere Informatico laureato presso l'Universidad Popular del Cesar, appassionato di tecnologia fin da bambino e specializzato in sviluppo Full Stack e design UX/UI.",
        "Sono una persona creativa, comunicativa, con una grande capacità di apprendimento e orientata a risolvere problemi attraverso soluzioni digitali innovative.",
        "Ho esperienza nello sviluppo web, nell'integrazione di API, nei database e nel design centrato sull'utente.",
      ],
      badges: ["Full Stack", "UX/UI Design", "Architettura dei sistemi", "Bilingue ES/IT"],
    },
    skills: {
      eyebrow: "$ ls skills/",
      title: "Competenze",
      subtitle: "Lo stack tecnico e gli strumenti che uso ogni giorno per costruire prodotti completi.",
      categories: [
        {
          key: "frontend",
          name: "Frontend",
          items: [
            { name: "React", level: 90 },
            { name: "HTML5", level: 95 },
            { name: "CSS3", level: 90 },
            { name: "JavaScript", level: 88 },
          ],
        },
        {
          key: "backend",
          name: "Backend",
          items: [
            { name: "PHP", level: 85 },
            { name: "Java", level: 75 },
            { name: "Python", level: 80 },
          ],
        },
        {
          key: "databases",
          name: "Database",
          items: [
            { name: "MySQL", level: 88 },
            { name: "SQL Server", level: 75 },
            { name: "MongoDB", level: 80 },
          ],
        },
        {
          key: "tools",
          name: "Strumenti",
          items: [
            { name: "Git", level: 85 },
            { name: "GitHub", level: 85 },
            { name: "Figma", level: 88 },
            { name: "Power BI", level: 78 },
            { name: "Photoshop", level: 75 },
            { name: "Filmora", level: 70 },
            { name: "CapCut", level: 70 },
            { name: "Webflow", level: 80 },
          ],
        },
        {
          key: "methods",
          name: "Metodologie",
          items: [
            { name: "Sviluppo Agile", level: 85 },
            { name: "Architettura MVC", level: 85 },
          ],
        },
      ],
    },
    projects: {
      eyebrow: "$ git log --projects",
      title: "Progetti in Evidenza",
      subtitle: "Una selezione di sistemi e prodotti digitali che ho progettato e costruito.",
      items: [
        {
          key: "tanker",
          title: "Sistema Integrato di Gestione per il Servizio Autobotti",
          description:
            "Ho sviluppato una piattaforma Full Stack per la gestione di utenti, clienti, veicoli, autisti, spedizioni, pagamenti e fatturazione.",
          tech: ["React", "PHP", "MySQL", "API REST"],
          listLabel: "Risultati",
          list: [
            "Architettura backend strutturata.",
            "Sicurezza e integrità dei dati.",
            "Automazione dei processi.",
            "Riduzione dei tempi operativi.",
          ],
        },
        {
          key: "bigdata",
          title: "Sistema di Analisi Dati con Big Data",
          description:
            "Ho progettato una soluzione per l'elaborazione e l'analisi di dati storici utilizzando strumenti di analisi su larga scala.",
          tech: ["Python", "MongoDB", "Power BI"],
          listLabel: "Funzionalità",
          list: [
            "Elaborazione dei dati.",
            "Identificazione di pattern.",
            "Dashboard strategiche.",
            "Visualizzazione delle informazioni.",
          ],
        },
        {
          key: "cms",
          title: "Piattaforma Web di Contenuti Digitali",
          description: "Ho partecipato alla modernizzazione e ottimizzazione di una piattaforma per la gestione di contenuti digitali.",
          tech: ["React", "PHP", "MySQL", "API REST"],
          listLabel: "Miglioramenti implementati",
          list: [
            "Refactoring del codice.",
            "Integrazione di API esterne.",
            "Ottimizzazione delle query SQL.",
            "Miglioramenti della sicurezza.",
            "Scalabilità del sistema.",
          ],
        },
        {
          key: "vet",
          title: "Design UX/UI Clinica Veterinaria",
          description: "Progetto incentrato sulla creazione di un'esperienza utente intuitiva e moderna.",
          tech: ["Figma", "Photoshop"],
          listLabel: "Strumenti",
          list: ["Figma", "Photoshop"],
        },
        {
          key: "makeup",
          title: "Negozio di Trucco",
          description: "Sito web sviluppato con Webflow, con un focus su usabilità ed esperienza visiva.",
          tech: ["Webflow"],
          listLabel: "Focus",
          list: ["Usabilità", "Esperienza visiva"],
        },
        {
          key: "storeapp",
          title: "App Mobile per Negozio",
          description: "Prototipo mobile progettato in Figma con un focus su accessibilità ed esperienza utente.",
          tech: ["Figma"],
          listLabel: "Focus",
          list: ["Accessibilità", "Esperienza utente"],
        },
      ],
    },
    experience: {
      eyebrow: "$ cat experience.log",
      title: "Esperienza",
      role: "Full Stack Developer",
      period: "In corso",
      description:
        "Coinvolto in progetti di sviluppo web e sistemi gestionali, implementando architetture moderne e soluzioni scalabili.",
    },
    education: {
      eyebrow: "$ cat education.log",
      title: "Formazione",
      items: [
        {
          title: "Universidad Popular del Cesar",
          period: "2019 – 2025",
          subtitle: "Ingegneria Informatica",
        },
      ],
    },
    languagesSection: {
      eyebrow: "$ cat languages.json",
      title: "Lingue",
      items: [
        { flag: "🇪🇸", name: "Spagnolo", level: "Avanzato", strength: 0.85 },
        { flag: "🇮🇹", name: "Italiano", level: "Madrelingua", strength: 1 },
        { flag: "🇺🇸", name: "Inglese", level: "Intermedio", strength: 0.6 },
      ],
    },
    certifications: {
      eyebrow: "$ ls certifications/",
      title: "Certificazioni",
      placeholder: "In arrivo — questa sezione è pronta per nuovi corsi e certificati.",
    },
    stats: {
      eyebrow: "$ uptime --career",
      title: "In numeri",
      items: [
        { value: 6, suffix: "+", label: "Progetti realizzati" },
        { value: 3, suffix: "", label: "Lingue" },
        { value: 10, suffix: "+", label: "Tecnologie padroneggiate" },
        { value: 0, suffix: "", label: "Full Stack Developer", isBadge: true },
      ],
    },
    contact: {
      eyebrow: "$ cat contact.txt",
      title: "Contatti",
      description: "Hai un progetto in mente? Parliamone.",
      emailLabel: "Email",
      githubLabel: "GitHub",
      countriesLabel: "Paesi",
      cta: "Invia un'email",
    },
    footer: {
      tagline: "Innovare attraverso il design e lo sviluppo.",
      rights: "Tutti i diritti riservati.",
      builtWith: "Costruito con Next.js, TypeScript & Tailwind CSS.",
    },
  },
};

export const contactInfo = {
  email: "alessandroca73@gmail.com",
  github: "github.com/AlessCaldana",
  githubUrl: "https://github.com/AlessCaldana",
  countries: ["🇨🇴 Colombia", "🇮🇹 Italia"],
};
