export type Locale = "es" | "en" | "it";
export const locales: Locale[] = ["es", "en", "it"];

export const localeMeta: Record<Locale, { label: string }> = {
  es: { label: "Español" },
  en: { label: "English" },
  it: { label: "Italiano" },
};

export interface SkillTier { key: string; name: string; context: string; items: string[]; }
export interface ExperienceClient { client: string; sector: string; bullet: string; }
export interface ExperienceEntry { role: string; period: string; clients: ExperienceClient[]; }
export interface CaseMetric { label: string; value: string; }
export interface CaseStudy {
  key: string; tag: string; title: string; problem: string;
  solution: string; decision: string; result: string;
  tech: string[]; metrics: CaseMetric[]; architectureFlow: string;
}
export interface Project { key: string; title: string; description: string; tech: string[]; listLabel: string; list: string[]; }
export interface TimelineItem { title: string; period: string; subtitle: string; }
export interface LanguageItem { flagCode: "es" | "en" | "it"; name: string; level: string; strength: number; note?: string; }
export interface StatItem { value: number; suffix: string; label: string; isBadge?: boolean; }

export interface Dictionary {
  meta: { title: string; description: string };
  nav: {
    about: string; skills: string; projects: string; experience: string;
    caseStudies: string; education: string; languages: string;
    certifications: string; contact: string;
    menuOpen: string; menuClose: string; langSwitch: string;
  };
  hero: {
    eyebrow: string; status: string; location: string; name: string;
    role: string; description: string; ctaCV: string; ctaProjects: string; ctaContact: string;
  };
  about: { eyebrow: string; title: string; paragraphs: string[]; badges: string[]; };
  skills: { eyebrow: string; title: string; subtitle: string; tiers: SkillTier[]; };
  projects: { eyebrow: string; title: string; subtitle: string; items: Project[]; };
  experience: { eyebrow: string; title: string; entries: ExperienceEntry[]; };
  education: { eyebrow: string; title: string; items: TimelineItem[]; };
  languagesSection: { eyebrow: string; title: string; items: LanguageItem[]; };
  certifications: { eyebrow: string; title: string; placeholder: string; };
  stats: { eyebrow: string; title: string; items: StatItem[]; };
  caseStudies: {
    eyebrow: string; title: string; subtitle: string;
    labels: { problem: string; solution: string; decision: string; architecture: string; result: string; };
    items: CaseStudy[];
  };
  contact: {
    eyebrow: string; title: string; description: string; availability: string;
    emailLabel: string; githubLabel: string; linkedinLabel: string; countriesLabel: string; cta: string;
  };
  footer: { tagline: string; rights: string; builtWith: string; };
  projectModal: {
    viewCase: string;
    tab_info: string;
    tab_gallery: string;
    tab_tech: string;
    role: string;
    client: string;
    year: string;
    status: string;
    whatIBuilt: string;
    features: string;
    statsLabel: string;
    devProcess: string;
    counter: string;
    pressEsc: string;
    zoom: string;
  };
}

export const dictionaries: Record<Locale, Dictionary> = {
  /* ─── ESPAÑOL ─────────────────────────────────────────────────── */
  es: {
    meta: {
      title: "Alessandro Caldana — Full Stack Developer",
      description: "Portafolio de Alessandro Caldana, Full Stack Developer con experiencia real en logística, educación y sector agropecuario. Italiano con raíces colombianas, disponible para Europa.",
    },
    nav: {
      about: "Sobre mí", skills: "Tecnologías", projects: "Proyectos",
      experience: "Experiencia", caseStudies: "Casos de estudio",
      education: "Educación", languages: "Idiomas",
      certifications: "Certificaciones", contact: "Contacto",
      menuOpen: "Abrir menú", menuClose: "Cerrar menú", langSwitch: "Cambiar idioma",
    },
    hero: {
      eyebrow: "$ whoami",
      status: "Disponible para trabajar",
      location: "Italia ⇄ Colombia",
      name: "Alessandro Caldana",
      role: "Full Stack Developer",
      description: "Construyo sistemas web end-to-end para clientes reales en logística, educación y sector agropecuario. Italiano con raíces colombianas — disponible para Brescia · Verona · Europa remoto.",
      ctaCV: "Descargar CV", ctaProjects: "Ver proyectos", ctaContact: "Contactarme",
    },
    about: {
      eyebrow: "$ cat about.md",
      title: "Sobre mí",
      paragraphs: [
        "Soy italiano, nacido en Italia con raíces colombianas. Estudié Ingeniería de Sistemas en la Universidad Popular del Cesar y disfruto participar en todo el ciclo del software: desde el levantamiento de requerimientos y el diseño de bases de datos hasta la prototipación en Figma, el desarrollo backend y la entrega final.",
        "Trabajo con React, PHP, Python, MySQL y PostgreSQL en el día a día. Me interesa resolver problemas reales donde la arquitectura técnica y la experiencia de usuario deben funcionar juntas. He liderado proyectos desde cero hasta producción, tanto de forma independiente como en equipo.",
        "Me estoy trasladando a Italia y busco integrarme a un equipo donde pueda crecer técnicamente, asumir responsabilidad real y aportar valor desde el primer día.",
      ],
      badges: ["Full Stack Developer", "Backend + Frontend", "Italiano · Nacido en Italia", "Trilingüe ES · IT · EN"],
    },
    skills: {
      eyebrow: "$ ls skills/",
      title: "Tecnologías",
      subtitle: "Stack técnico organizado por profundidad de uso real en proyectos.",
      tiers: [
        { key: "production", name: "Stack principal", context: "Uso en proyectos de producción",
          items: ["React", "JavaScript / TypeScript", "PHP", "Python", "MySQL", "PostgreSQL", "Git", "APIs REST"] },
        { key: "workflow", name: "Herramientas de trabajo", context: "Uso frecuente en proyectos",
          items: ["Next.js", "Express.js", "Node.js", "MongoDB", "Docker", "Linux", "Figma", "Power BI", "SQL Server"] },
        { key: "learning", name: "Explorando actualmente", context: "Aprendizaje activo",
          items: ["AWS Cloud Practitioner", "FastAPI", "TypeScript avanzado"] },
      ],
    },
    projects: {
      eyebrow: "$ git log --projects",
      title: "Proyectos",
      subtitle: "Sistemas y productos digitales construidos para clientes reales.",
      items: [
        {
          key: "acarreo",
          title: "Sistema Integral de Carro Tanque — EMDUPAR",
          description: "EMDUPAR gestionaba su servicio de carro tanque de forma completamente manual: solicitudes, despachos, entregas y facturación sin trazabilidad. Lideré el ciclo completo: análisis, diseño UX/UI en Figma, arquitectura, base de datos, frontend, backend e implementación.",
          tech: ["PHP 5.3", "MySQL", "JavaScript", "Figma", "FPDF", "Git"],
          listLabel: "Módulos implementados",
          list: [
            "Usuarios, roles y control de acceso al sistema.",
            "Clientes, vehículos, solicitudes y despachos.",
            "Entregas, facturación y auditoría.",
            "Reportes automáticos, generación de PDF y códigos QR.",
          ],
        },
        {
          key: "school",
          title: "Sistema de Gestión Escolar — Uziel Querit",
          description: "El colegio gestionaba matrícula, notas y pagos en hojas de cálculo separadas. Lideré el diseño de un ERP escolar multitenant con 6 módulos integrados.",
          tech: ["React", "Express.js", "PostgreSQL", "Node.js"],
          listLabel: "Decisiones técnicas",
          list: [
            "Arquitectura multitenant: aislamiento por tenant_id en PostgreSQL.",
            "6 módulos desacoplados: matrícula, inventario, nómina, notas, pagos, contabilidad.",
            "API REST en Express.js con validación por capas.",
            "+1.200 estudiantes registrados · Equipo de 3 personas.",
          ],
        },
        {
          key: "bigdata",
          title: "Sistema de Análisis de Datos — Sector Agropecuario",
          description: "El cliente necesitaba visibilidad sobre datos históricos de producción y costos. Diseñé un pipeline de análisis para identificar patrones y generar reportes ejecutivos.",
          tech: ["Python", "MongoDB", "Power BI"],
          listLabel: "Decisiones técnicas",
          list: [
            "Python para ETL y procesamiento de datos históricos.",
            "MongoDB como almacenamiento flexible para datos no estructurados.",
            "Power BI para dashboards ejecutivos con actualización automática.",
            "Tiempo de reporte reducido de horas a minutos.",
          ],
        },
        {
          key: "cms",
          title: "Plataforma Web de Contenido Digital",
          description: "Modernización y optimización de plataforma legada de gestión de contenido digital. Intervención técnica en backend, API y base de datos.",
          tech: ["React", "PHP", "MySQL", "APIs REST"],
          listLabel: "Mejoras implementadas",
          list: [
            "Refactorización de código legacy y reducción de deuda técnica.",
            "Integración de APIs externas de terceros.",
            "Optimización de consultas SQL críticas.",
            "Mejoras de seguridad: validación de entradas y manejo de errores.",
          ],
        },
        {
          key: "vet",
          title: "Diseño UX/UI — Clínica Veterinaria",
          description: "Diseño de interfaz para aplicación de gestión de clínica veterinaria. Proyecto de prototipado con foco en flujos de usuario y accesibilidad.",
          tech: ["Figma"],
          listLabel: "Entregables",
          list: [
            "Flujos de usuario para agendamiento, historial clínico y facturación.",
            "Sistema de componentes reutilizables en Figma.",
            "Prototipo interactivo de alta fidelidad.",
          ],
        },
        {
          key: "storeapp",
          title: "Prototipo de App Móvil — Tienda",
          description: "Prototipo móvil en Figma para tienda de comercio electrónico, con foco en accesibilidad y flujo de compra optimizado.",
          tech: ["Figma"],
          listLabel: "Entregables",
          list: [
            "Arquitectura de navegación móvil completa.",
            "Flujo de compra en 3 pasos con carrito persistente.",
            "Sistema de diseño con tokens de color y tipografía.",
          ],
        },
      ],
    },
    experience: {
      eyebrow: "$ cat experience.log",
      title: "Experiencia",
      entries: [
        {
          role: "Desarrollador Full Stack",
          period: "2025",
          clients: [
            {
              client: "EMDUPAR S.A. E.S.P.",
              sector: "Servicios públicos · Valledupar, Colombia",
              bullet: "Analicé requerimientos, diseñé la arquitectura del sistema y desarrollé el frontend y el backend de una plataforma web para la gestión integral del servicio de carro tanque en EMDUPAR. Implementé 12 módulos: usuarios, roles, clientes, vehículos, solicitudes, despachos, entregas, facturación, reportes, auditoría, generación de PDF y códigos QR, centralizando un proceso anteriormente manual.",
            },
          ],
        },
        {
          role: "Desarrollador Full Stack",
          period: "2025",
          clients: [
            {
              client: "MI DIARIO",
              sector: "Contenido digital · Valledupar, Colombia",
              bullet: "Participé en la modernización de plataforma web de gestión de contenido digital. Integré APIs externas para automatizar procesos, optimicé consultas SQL críticas, refactoricé código legacy y mejoré la seguridad mediante validación de datos.",
            },
          ],
        },
        {
          role: "Desarrollador Full Stack Freelance",
          period: "2022 – presente",
          clients: [
            {
              client: "Colegio Uziel Querit",
              sector: "Educación · Colombia",
              bullet: "Lideré el desarrollo de sistema de gestión escolar con 6 módulos (matrícula, inventario, nómina, calificaciones, pagos, contabilidad) en arquitectura multitenant con React, Express y PostgreSQL. Equipo de 3 personas, +1.200 estudiantes registrados.",
            },
            {
              client: "Cliente sector agropecuario",
              sector: "Ganadería · Valledupar, Colombia",
              bullet: "Diseñé e implementé sistema de inventario para finca ganadera (desktop-first, Windows) con módulo de análisis de datos y generación de reportes.",
            },
          ],
        },
      ],
    },
    education: {
      eyebrow: "$ cat education.log",
      title: "Educación",
      items: [{ title: "Universidad Popular del Cesar", period: "2019 – 2025", subtitle: "Ingeniería de Sistemas" }],
    },
    languagesSection: {
      eyebrow: "$ cat languages.json",
      title: "Idiomas",
      items: [
        { flagCode: "es", name: "Español", level: "Avanzado", strength: 0.85 },
        { flagCode: "it", name: "Italiano", level: "Nativo", strength: 1, note: "Italiano nativo · Nacido en Italia" },
        { flagCode: "en", name: "Inglés", level: "Intermedio", strength: 0.6 },
      ],
    },
    certifications: {
      eyebrow: "$ ls certifications/",
      title: "Certificaciones",
      placeholder: "En proceso — próximamente: AWS Cloud Practitioner (en curso), Meta Front-End Developer Certificate (Coursera) y CS50x de Harvard. Esta sección se actualizará con las certificaciones obtenidas.",
    },
    stats: {
      eyebrow: "$ uptime --career",
      title: "En números",
      items: [
        { value: 3, suffix: "+", label: "Años de experiencia freelance" },
        { value: 6, suffix: "+", label: "Proyectos en producción" },
        { value: 3, suffix: "", label: "Sectores atendidos" },
        { value: 1200, suffix: "+", label: "Registros gestionados" },
      ],
    },
    caseStudies: {
      eyebrow: "$ deep-dive --cases",
      title: "Casos de Estudio",
      subtitle: "Proyectos analizados en profundidad: el problema real, la decisión técnica y el resultado medible.",
      labels: { problem: "El problema", solution: "La solución", decision: "Decisión técnica", architecture: "Arquitectura", result: "Resultado" },
      items: [
        {
          key: "acarreo",
          tag: "Sistema Integral · Servicios Públicos",
          title: "Digitalización del servicio de carro tanque: EMDUPAR",
          problem: "EMDUPAR gestionaba su servicio de carro tanque de forma completamente manual: solicitudes en papel, despachos sin trazabilidad, facturación manual y reportes imposibles de generar en tiempo real. El proceso era ineficiente, propenso a errores y sin control operativo.",
          solution: "Plataforma web integral que cubre todo el ciclo del servicio: desde la solicitud del cliente hasta la entrega, facturación y generación de reportes. 12 módulos interconectados con generación automática de PDF y códigos QR para trazabilidad completa.",
          decision: "PHP 5.3 + MySQL por los requisitos del entorno institucional de EMDUPAR. Diseño UX/UI completo en Figma antes de escribir código. FPDF para generación de documentos y PHP QR Code para trazabilidad. Arquitectura modular para escalabilidad y mantenibilidad a largo plazo.",
          result: "Digitalización completa del proceso. Mayor control operativo, trazabilidad de cada despacho, automatización de reportes y facturación. Sistema en uso institucional en EMDUPAR.",
          tech: ["PHP 5.3", "MySQL", "JavaScript", "Figma", "FPDF", "Git"],
          metrics: [
            { label: "Módulos", value: "12" },
            { label: "Stack", value: "PHP + MySQL" },
            { label: "Estado", value: "Implementado" },
          ],
          architectureFlow: "Figma (UX/UI) → HTML/CSS/JS → PHP 5.3 Backend → MySQL\n                              ↓\n  Solicitudes · Despachos · Entregas · Facturación · PDF · QR",
        },
        {
          key: "school",
          tag: "Sistema ERP · Educación",
          title: "ERP escolar multitenant: Colegio Uziel Querit",
          problem: "El colegio gestionaba matrícula, calificaciones, nómina y pagos en hojas de cálculo separadas. Los directivos no tenían visibilidad en tiempo real del estado académico ni financiero.",
          solution: "ERP escolar con 6 módulos integrados (matrícula, inventario, nómina, calificaciones, pagos, contabilidad), diseñado con arquitectura multitenant para escalar a múltiples sedes.",
          decision: "PostgreSQL sobre MySQL por el soporte nativo de esquemas que facilita el aislamiento de datos por tenant_id. Express.js en el backend por su ecosistema maduro para APIs REST. Equipo de 3 personas con responsabilidades claras por módulo.",
          result: "6 módulos en producción, +1.200 registros de estudiantes gestionados, y arquitectura lista para escalar a múltiples colegios sin cambios en el código base.",
          tech: ["React", "Express.js", "PostgreSQL", "Node.js"],
          metrics: [
            { label: "Módulos", value: "6" },
            { label: "Estudiantes", value: "+1.200" },
            { label: "Arquitectura", value: "Multitenant" },
          ],
          architectureFlow: "Browser → React SPA → Express REST API → PostgreSQL (tenant_id)\n                               ↓\n  Matrícula · Inventario · Nómina · Notas · Pagos · Contabilidad",
        },
      ],
    },
    contact: {
      eyebrow: "$ cat contact.txt",
      title: "Contacto",
      description: "¿Tienes un proyecto o una posición abierta? Respondo en menos de 24 horas.",
      availability: "Disponible presencialmente en Brescia / Verona (Italia) · Remoto desde Colombia.",
      emailLabel: "Correo", githubLabel: "GitHub", linkedinLabel: "LinkedIn", countriesLabel: "Ubicación", cta: "Enviar correo",
    },
    footer: {
      tagline: "Ingeniería con criterio. Código con propósito.",
      rights: "Todos los derechos reservados.",
      builtWith: "Construido con Next.js, TypeScript & Tailwind CSS.",
    },
    projectModal: {
      viewCase: "Ver Case Study",
      tab_info: "Información",
      tab_gallery: "Galería",
      tab_tech: "Tecnologías",
      role: "Rol",
      client: "Cliente",
      year: "Año",
      status: "Estado",
      whatIBuilt: "¿Qué desarrollé?",
      features: "Características",
      statsLabel: "Estadísticas",
      devProcess: "Proceso de desarrollo",
      counter: "de",
      pressEsc: "ESC para cerrar",
      zoom: "Clic para ampliar",
    },
  },

  /* ─── ENGLISH ─────────────────────────────────────────────────── */
  en: {
    meta: {
      title: "Alessandro Caldana — Full Stack Developer",
      description: "Portfolio of Alessandro Caldana, Full Stack Developer with real-world experience in logistics, education and agriculture. Italian with Colombian roots, available for Europe.",
    },
    nav: {
      about: "About", skills: "Technologies", projects: "Projects",
      experience: "Experience", caseStudies: "Case Studies",
      education: "Education", languages: "Languages",
      certifications: "Certifications", contact: "Contact",
      menuOpen: "Open menu", menuClose: "Close menu", langSwitch: "Change language",
    },
    hero: {
      eyebrow: "$ whoami",
      status: "Available for work",
      location: "Italy ⇄ Colombia",
      name: "Alessandro Caldana",
      role: "Full Stack Developer",
      description: "I build web systems end-to-end for real clients in logistics, education and agriculture. Italian with Colombian roots — available for Brescia · Verona · Remote Europe.",
      ctaCV: "Download CV", ctaProjects: "View projects", ctaContact: "Get in touch",
    },
    about: {
      eyebrow: "$ cat about.md",
      title: "About me",
      paragraphs: [
        "I'm Italian, born in Italy with Colombian roots. I studied Systems Engineering at Universidad Popular del Cesar and I enjoy being involved in every stage of the software cycle: from requirements gathering and database design to Figma prototyping, backend development and final delivery.",
        "My day-to-day stack includes React, PHP, Python, MySQL and PostgreSQL. I'm particularly interested in solving real-world problems where technical architecture and user experience need to work together. I've led projects from scratch to production, both independently and as part of a team.",
        "I'm relocating to Italy and looking for a team where I can grow technically, take on real responsibility and contribute value from day one.",
      ],
      badges: ["Full Stack Developer", "Backend + Frontend", "Italian · Born in Italy", "Trilingual ES · IT · EN"],
    },
    skills: {
      eyebrow: "$ ls skills/",
      title: "Technologies",
      subtitle: "Technical stack organized by depth of real use in production projects.",
      tiers: [
        { key: "production", name: "Core stack", context: "Used in production projects",
          items: ["React", "JavaScript / TypeScript", "PHP", "Python", "MySQL", "PostgreSQL", "Git", "REST APIs"] },
        { key: "workflow", name: "Workflow tools", context: "Frequent use in projects",
          items: ["Next.js", "Express.js", "Node.js", "MongoDB", "Docker", "Linux", "Figma", "Power BI", "SQL Server"] },
        { key: "learning", name: "Currently exploring", context: "Active learning",
          items: ["AWS Cloud Practitioner", "FastAPI", "Advanced TypeScript"] },
      ],
    },
    projects: {
      eyebrow: "$ git log --projects",
      title: "Projects",
      subtitle: "Systems and digital products built for real clients.",
      items: [
        {
          key: "acarreo",
          title: "Tanker Truck Management System — EMDUPAR",
          description: "EMDUPAR managed its tanker truck service entirely manually: requests, dispatch, deliveries and billing with no traceability. I led the full development cycle: analysis, UX/UI design in Figma, system architecture, database, frontend, backend and deployment.",
          tech: ["PHP 5.3", "MySQL", "JavaScript", "Figma", "FPDF", "Git"],
          listLabel: "Implemented modules",
          list: [
            "Users, roles and system access control.",
            "Clients, vehicles, requests and dispatch.",
            "Deliveries, billing and audit trail.",
            "Automatic reports, PDF generation and QR codes.",
          ],
        },
        {
          key: "school",
          title: "School Management System — Uziel Querit",
          description: "The school managed enrollment, grades and payments in separate spreadsheets. I led the design of a multitenant school ERP with 6 integrated modules.",
          tech: ["React", "Express.js", "PostgreSQL", "Node.js"],
          listLabel: "Technical decisions",
          list: [
            "Multitenant architecture: per-tenant data isolation via tenant_id in PostgreSQL.",
            "6 decoupled modules: enrollment, inventory, payroll, grades, payments, accounting.",
            "Express.js REST API with layered validation.",
            "+1,200 student records · 3-person team.",
          ],
        },
        {
          key: "bigdata",
          title: "Data Analysis System — Agricultural Sector",
          description: "The client needed visibility into historical production and cost data. I designed an analytics pipeline to identify patterns and generate executive reports.",
          tech: ["Python", "MongoDB", "Power BI"],
          listLabel: "Technical decisions",
          list: [
            "Python for ETL and historical data processing.",
            "MongoDB as flexible storage for unstructured data.",
            "Power BI for executive dashboards with automatic refresh.",
            "Report generation time cut from hours to minutes.",
          ],
        },
        {
          key: "cms",
          title: "Digital Content Web Platform",
          description: "Modernization and optimization of a legacy digital content management platform. Technical intervention across backend, API and database layers.",
          tech: ["React", "PHP", "MySQL", "REST APIs"],
          listLabel: "Improvements delivered",
          list: [
            "Legacy code refactoring and technical debt reduction.",
            "Third-party external API integration.",
            "Critical SQL query optimization.",
            "Security improvements: input validation and error handling.",
          ],
        },
        {
          key: "vet",
          title: "UX/UI Design — Veterinary Clinic",
          description: "Interface design for a veterinary clinic management app. Prototyping project focused on user flows and accessibility.",
          tech: ["Figma"],
          listLabel: "Deliverables",
          list: [
            "User flows for scheduling, clinical history and billing.",
            "Reusable component system in Figma.",
            "High-fidelity interactive prototype.",
          ],
        },
        {
          key: "storeapp",
          title: "Mobile App Prototype — Store",
          description: "Mobile prototype in Figma for an e-commerce store, focused on accessibility and optimized checkout flow.",
          tech: ["Figma"],
          listLabel: "Deliverables",
          list: [
            "Complete mobile navigation architecture.",
            "3-step checkout flow with persistent cart.",
            "Design system with color tokens and typography.",
          ],
        },
      ],
    },
    experience: {
      eyebrow: "$ cat experience.log",
      title: "Experience",
      entries: [
        {
          role: "Full Stack Developer",
          period: "2025",
          clients: [
            {
              client: "EMDUPAR S.A. E.S.P.",
              sector: "Public services · Valledupar, Colombia",
              bullet: "Analyzed requirements, designed the system architecture and developed the frontend and backend of a web platform for integrated tanker truck service management at EMDUPAR. Implemented 12 modules: users, roles, clients, vehicles, requests, dispatch, deliveries, billing, reports, audit, PDF generation and QR codes, centralizing a previously fully manual process.",
            },
          ],
        },
        {
          role: "Full Stack Developer",
          period: "2025",
          clients: [
            {
              client: "MI DIARIO",
              sector: "Digital content · Valledupar, Colombia",
              bullet: "Contributed to the modernization of a digital content management web platform. Integrated external APIs to automate processes, optimized critical SQL queries, refactored legacy code and improved security through data validation.",
            },
          ],
        },
        {
          role: "Freelance Full Stack Developer",
          period: "2022 – present",
          clients: [
            {
              client: "Colegio Uziel Querit",
              sector: "Education · Colombia",
              bullet: "Led development of a school management system with 6 modules (enrollment, inventory, payroll, grades, payments, accounting) on a multitenant architecture with React, Express and PostgreSQL. Team of 3, +1,200 student records.",
            },
            {
              client: "Agricultural sector client",
              sector: "Cattle farming · Valledupar, Colombia",
              bullet: "Designed and implemented an inventory system for a cattle ranch (desktop-first, Windows) with data analysis module and report generation.",
            },
          ],
        },
      ],
    },
    education: {
      eyebrow: "$ cat education.log",
      title: "Education",
      items: [{ title: "Universidad Popular del Cesar", period: "2019 – 2025", subtitle: "Systems Engineering" }],
    },
    languagesSection: {
      eyebrow: "$ cat languages.json",
      title: "Languages",
      items: [
        { flagCode: "es", name: "Spanish", level: "Advanced", strength: 0.85 },
        { flagCode: "it", name: "Italian", level: "Native", strength: 1, note: "Native Italian · Born in Italy" },
        { flagCode: "en", name: "English", level: "Intermediate", strength: 0.6 },
      ],
    },
    certifications: {
      eyebrow: "$ ls certifications/",
      title: "Certifications",
      placeholder: "In progress — coming soon: AWS Cloud Practitioner (ongoing), Meta Front-End Developer Certificate (Coursera) and Harvard CS50x. This section will be updated as certifications are earned.",
    },
    stats: {
      eyebrow: "$ uptime --career",
      title: "By the numbers",
      items: [
        { value: 3, suffix: "+", label: "Years of freelance experience" },
        { value: 6, suffix: "+", label: "Projects in production" },
        { value: 3, suffix: "", label: "Sectors served" },
        { value: 1200, suffix: "+", label: "Records managed" },
      ],
    },
    caseStudies: {
      eyebrow: "$ deep-dive --cases",
      title: "Case Studies",
      subtitle: "Projects analyzed in depth: the real problem, the technical decision and the measurable result.",
      labels: { problem: "The problem", solution: "The solution", decision: "Technical decision", architecture: "Architecture", result: "Result" },
      items: [
        {
          key: "acarreo",
          tag: "Integrated System · Public Services",
          title: "Digitizing the tanker truck service: EMDUPAR",
          problem: "EMDUPAR managed its tanker truck service entirely manually: paper-based requests, dispatch without traceability, manual billing and reports impossible to generate in real time. The process was inefficient, error-prone and lacked operational control.",
          solution: "Integrated web platform covering the full service cycle: from client request to delivery, billing and report generation. 12 interconnected modules with automatic PDF generation and QR codes for complete traceability.",
          decision: "PHP 5.3 + MySQL for EMDUPAR's institutional environment requirements. Complete UX/UI design in Figma before writing code. FPDF for document generation and PHP QR Code for traceability. Modular architecture for scalability and long-term maintainability.",
          result: "Complete digitalization of the process. Greater operational control, traceability of every dispatch, automated reports and billing. System in institutional use at EMDUPAR.",
          tech: ["PHP 5.3", "MySQL", "JavaScript", "Figma", "FPDF", "Git"],
          metrics: [
            { label: "Modules", value: "12" },
            { label: "Stack", value: "PHP + MySQL" },
            { label: "Status", value: "Deployed" },
          ],
          architectureFlow: "Figma (UX/UI) → HTML/CSS/JS → PHP 5.3 Backend → MySQL\n                              ↓\n  Requests · Dispatch · Deliveries · Billing · PDF · QR",
        },
        {
          key: "school",
          tag: "ERP System · Education",
          title: "Multitenant school ERP: Colegio Uziel Querit",
          problem: "The school managed enrollment, grades, payroll and payments in separate spreadsheets. Management had no real-time visibility into academic or financial status.",
          solution: "School ERP with 6 integrated modules (enrollment, inventory, payroll, grades, payments, accounting), designed with multitenant architecture to scale across campuses.",
          decision: "PostgreSQL over MySQL for native schema support that simplifies per-tenant data isolation via tenant_id. Express.js for its mature REST API ecosystem. 3-person team with clear responsibility boundaries per module.",
          result: "6 modules in production, +1,200 student records managed, and architecture ready to scale to multiple schools without codebase changes.",
          tech: ["React", "Express.js", "PostgreSQL", "Node.js"],
          metrics: [
            { label: "Modules", value: "6" },
            { label: "Students", value: "+1,200" },
            { label: "Architecture", value: "Multitenant" },
          ],
          architectureFlow: "Browser → React SPA → Express REST API → PostgreSQL (tenant_id)\n                               ↓\n  Enrollment · Inventory · Payroll · Grades · Payments · Accounting",
        },
      ],
    },
    contact: {
      eyebrow: "$ cat contact.txt",
      title: "Contact",
      description: "Have a project or open position? I reply within 24 hours.",
      availability: "Available on-site in Brescia / Verona (Italy) · Remote from Colombia.",
      emailLabel: "Email", githubLabel: "GitHub", linkedinLabel: "LinkedIn", countriesLabel: "Location", cta: "Send an email",
    },
    footer: {
      tagline: "Engineering with intent. Code with purpose.",
      rights: "All rights reserved.",
      builtWith: "Built with Next.js, TypeScript & Tailwind CSS.",
    },
    projectModal: {
      viewCase: "View Case Study",
      tab_info: "Information",
      tab_gallery: "Gallery",
      tab_tech: "Technologies",
      role: "Role",
      client: "Client",
      year: "Year",
      status: "Status",
      whatIBuilt: "What I built",
      features: "Features",
      statsLabel: "Statistics",
      devProcess: "Development process",
      counter: "of",
      pressEsc: "ESC to close",
      zoom: "Click to zoom",
    },
  },

  /* ─── ITALIANO ─────────────────────────────────────────────────── */
  it: {
    meta: {
      title: "Alessandro Caldana — Full Stack Developer",
      description: "Portfolio di Alessandro Caldana, Full Stack Developer con esperienza reale in logistica, istruzione e agricoltura. Cittadino italo-colombiano disponibile per l'Europa.",
    },
    nav: {
      about: "Chi sono", skills: "Tecnologie", projects: "Progetti",
      experience: "Esperienza", caseStudies: "Casi di Studio",
      education: "Formazione", languages: "Lingue",
      certifications: "Certificazioni", contact: "Contatti",
      menuOpen: "Apri menu", menuClose: "Chiudi menu", langSwitch: "Cambia lingua",
    },
    hero: {
      eyebrow: "$ whoami",
      status: "Disponibile per lavorare",
      location: "Italia ⇄ Colombia",
      name: "Alessandro Caldana",
      role: "Full Stack Developer",
      description: "Costruisco sistemi web end-to-end per clienti reali in logistica, istruzione e agricoltura. Cittadino italo-colombiano — disponibile a Brescia · Verona · Remoto Europa.",
      ctaCV: "Scarica CV", ctaProjects: "Vedi progetti", ctaContact: "Contattami",
    },
    about: {
      eyebrow: "$ cat about.md",
      title: "Chi sono",
      paragraphs: [
        "Sono italiano, nato in Italia con origini colombiane. Ho studiato Ingegneria Informatica all'Universidad Popular del Cesar e mi piace partecipare a ogni fase del ciclo del software: dall'analisi dei requisiti e la progettazione del database fino alla prototipazione in Figma, lo sviluppo backend e la consegna finale.",
        "Lavoro quotidianamente con React, PHP, Python, MySQL e PostgreSQL. Mi interessa in particolare risolvere problemi reali dove architettura tecnica ed esperienza utente devono funzionare insieme. Ho guidato progetti da zero alla produzione, sia in autonomia che in team.",
        "Mi sto trasferendo in Italia e cerco un team in cui crescere tecnicamente, assumere responsabilità concrete e portare valore fin dal primo giorno.",
      ],
      badges: ["Full Stack Developer", "Backend + Frontend", "Italiano · Nato in Italia", "Trilingue ES · IT · EN"],
    },
    skills: {
      eyebrow: "$ ls skills/",
      title: "Tecnologie",
      subtitle: "Stack tecnico organizzato per profondità d'uso reale nei progetti.",
      tiers: [
        { key: "production", name: "Stack principale", context: "Utilizzo in progetti di produzione",
          items: ["React", "JavaScript / TypeScript", "PHP", "Python", "MySQL", "PostgreSQL", "Git", "API REST"] },
        { key: "workflow", name: "Strumenti di lavoro", context: "Utilizzo frequente nei progetti",
          items: ["Next.js", "Express.js", "Node.js", "MongoDB", "Docker", "Linux", "Figma", "Power BI", "SQL Server"] },
        { key: "learning", name: "In esplorazione", context: "Apprendimento attivo",
          items: ["AWS Cloud Practitioner", "FastAPI", "TypeScript avanzato"] },
      ],
    },
    projects: {
      eyebrow: "$ git log --projects",
      title: "Progetti",
      subtitle: "Sistemi e prodotti digitali costruiti per clienti reali.",
      items: [
        {
          key: "acarreo",
          title: "Sistema Integrale Autobotte — EMDUPAR",
          description: "EMDUPAR gestiva il servizio autobotte in modo completamente manuale: richieste, spedizioni, consegne e fatturazione senza tracciabilità. Ho guidato l'intero ciclo: analisi, design UX/UI in Figma, architettura, database, frontend, backend e deployment.",
          tech: ["PHP 5.3", "MySQL", "JavaScript", "Figma", "FPDF", "Git"],
          listLabel: "Moduli implementati",
          list: [
            "Utenti, ruoli e controllo accessi al sistema.",
            "Clienti, veicoli, richieste e spedizioni.",
            "Consegne, fatturazione e audit.",
            "Report automatici, generazione PDF e codici QR.",
          ],
        },
        {
          key: "school",
          title: "Sistema Gestionale Scolastico — Uziel Querit",
          description: "Il collegio gestiva iscrizioni, voti e pagamenti su fogli di calcolo separati. Ho guidato la progettazione di un ERP scolastico multitenant con 6 moduli integrati.",
          tech: ["React", "Express.js", "PostgreSQL", "Node.js"],
          listLabel: "Decisioni tecniche",
          list: [
            "Architettura multitenant: isolamento per tenant_id in PostgreSQL.",
            "6 moduli: iscrizioni, inventario, buste paga, voti, pagamenti, contabilità.",
            "API REST Express.js con validazione a livelli.",
            "+1.200 studenti registrati · Team di 3 persone.",
          ],
        },
        {
          key: "bigdata",
          title: "Sistema di Analisi Dati — Settore Agricolo",
          description: "Il cliente aveva bisogno di visibilità sui dati storici di produzione e costi. Ho progettato una pipeline di analisi per identificare pattern e generare report esecutivi.",
          tech: ["Python", "MongoDB", "Power BI"],
          listLabel: "Decisioni tecniche",
          list: [
            "Python per ETL e processing dei dati storici.",
            "MongoDB come storage flessibile per dati non strutturati.",
            "Power BI per dashboard esecutive con aggiornamento automatico.",
            "Tempo di generazione report ridotto da ore a minuti.",
          ],
        },
        {
          key: "cms",
          title: "Piattaforma Web di Contenuti Digitali",
          description: "Modernizzazione e ottimizzazione di una piattaforma legacy per la gestione di contenuti digitali. Intervento tecnico su backend, API e database.",
          tech: ["React", "PHP", "MySQL", "API REST"],
          listLabel: "Miglioramenti implementati",
          list: [
            "Refactoring del codice legacy e riduzione del debito tecnico.",
            "Integrazione di API esterne di terze parti.",
            "Ottimizzazione delle query SQL critiche.",
            "Miglioramenti della sicurezza: validazione input e gestione errori.",
          ],
        },
        {
          key: "vet",
          title: "Design UX/UI — Clinica Veterinaria",
          description: "Progettazione dell'interfaccia per un'app di gestione di clinica veterinaria, con focus sui flussi utente e l'accessibilità.",
          tech: ["Figma"],
          listLabel: "Deliverable",
          list: [
            "Flussi utente per prenotazioni, storico clinico e fatturazione.",
            "Sistema di componenti riutilizzabili in Figma.",
            "Prototipo interattivo ad alta fedeltà.",
          ],
        },
        {
          key: "storeapp",
          title: "Prototipo App Mobile — Negozio",
          description: "Prototipo mobile in Figma per un negozio e-commerce, con focus sull'accessibilità e un flusso di acquisto ottimizzato.",
          tech: ["Figma"],
          listLabel: "Deliverable",
          list: [
            "Architettura di navigazione mobile completa.",
            "Flusso di acquisto in 3 step con carrello persistente.",
            "Design system con token di colore e tipografia.",
          ],
        },
      ],
    },
    experience: {
      eyebrow: "$ cat experience.log",
      title: "Esperienza",
      entries: [
        {
          role: "Sviluppatore Full Stack",
          period: "2025",
          clients: [
            {
              client: "EMDUPAR S.A. E.S.P.",
              sector: "Servizi pubblici · Valledupar, Colombia",
              bullet: "Ho analizzato i requisiti, progettato l'architettura del sistema e sviluppato frontend e backend di una piattaforma web per la gestione integrale del servizio autobotte di EMDUPAR. Ho implementato 12 moduli: utenti, ruoli, clienti, veicoli, richieste, spedizioni, consegne, fatturazione, report, audit, generazione PDF e codici QR, centralizzando un processo precedentemente manuale.",
            },
          ],
        },
        {
          role: "Sviluppatore Full Stack",
          period: "2025",
          clients: [
            {
              client: "MI DIARIO",
              sector: "Contenuti digitali · Valledupar, Colombia",
              bullet: "Ho contribuito alla modernizzazione di una piattaforma web per la gestione di contenuti digitali. Ho integrato API esterne per automatizzare i processi, ottimizzato query SQL critiche, effettuato refactoring del codice legacy e migliorato la sicurezza tramite validazione dei dati.",
            },
          ],
        },
        {
          role: "Sviluppatore Full Stack Freelance",
          period: "2022 – presente",
          clients: [
            {
              client: "Colegio Uziel Querit",
              sector: "Istruzione · Colombia",
              bullet: "Ho guidato lo sviluppo di un sistema gestionale scolastico con 6 moduli (iscrizioni, inventario, buste paga, voti, pagamenti, contabilità) su architettura multitenant con React, Express e PostgreSQL. Team di 3 persone, +1.200 studenti registrati.",
            },
            {
              client: "Cliente settore agricolo",
              sector: "Zootecnia · Valledupar, Colombia",
              bullet: "Ho progettato e implementato un sistema di inventario per un allevamento bovino (desktop-first, Windows) con modulo di analisi dati e generazione di report.",
            },
          ],
        },
      ],
    },
    education: {
      eyebrow: "$ cat education.log",
      title: "Formazione",
      items: [{ title: "Universidad Popular del Cesar", period: "2019 – 2025", subtitle: "Ingegneria Informatica" }],
    },
    languagesSection: {
      eyebrow: "$ cat languages.json",
      title: "Lingue",
      items: [
        { flagCode: "es", name: "Spagnolo", level: "Avanzato", strength: 0.85 },
        { flagCode: "it", name: "Italiano", level: "Madrelingua", strength: 1, note: "Italiano madrelingua · Nato in Italia" },
        { flagCode: "en", name: "Inglese", level: "Intermedio", strength: 0.6 },
      ],
    },
    certifications: {
      eyebrow: "$ ls certifications/",
      title: "Certificazioni",
      placeholder: "In corso — prossimamente: AWS Cloud Practitioner (in studio), Meta Front-End Developer Certificate (Coursera) e CS50x di Harvard. Questa sezione verrà aggiornata con le certificazioni ottenute.",
    },
    stats: {
      eyebrow: "$ uptime --career",
      title: "In numeri",
      items: [
        { value: 3, suffix: "+", label: "Anni di esperienza freelance" },
        { value: 6, suffix: "+", label: "Progetti in produzione" },
        { value: 3, suffix: "", label: "Settori serviti" },
        { value: 1200, suffix: "+", label: "Record gestiti" },
      ],
    },
    caseStudies: {
      eyebrow: "$ deep-dive --cases",
      title: "Casi di Studio",
      subtitle: "Progetti analizzati in profondità: il problema reale, la decisione tecnica e il risultato misurabile.",
      labels: { problem: "Il problema", solution: "La soluzione", decision: "Decisione tecnica", architecture: "Architettura", result: "Risultato" },
      items: [
        {
          key: "acarreo",
          tag: "Sistema Integrale · Servizi Pubblici",
          title: "Digitalizzazione del servizio autobotte: EMDUPAR",
          problem: "EMDUPAR gestiva il servizio autobotte in modo completamente manuale: richieste cartacee, spedizioni senza tracciabilità, fatturazione manuale e report impossibili da generare in tempo reale. Il processo era inefficiente, soggetto a errori e privo di controllo operativo.",
          solution: "Piattaforma web integrale che copre l'intero ciclo del servizio: dalla richiesta del cliente alla consegna, fatturazione e generazione di report. 12 moduli interconnessi con generazione automatica di PDF e codici QR per tracciabilità completa.",
          decision: "PHP 5.3 + MySQL per i requisiti dell'ambiente istituzionale di EMDUPAR. Design UX/UI completo in Figma prima di scrivere codice. FPDF per la generazione di documenti e PHP QR Code per la tracciabilità. Architettura modulare per scalabilità e manutenibilità a lungo termine.",
          result: "Digitalizzazione completa del processo. Maggiore controllo operativo, tracciabilità di ogni spedizione, automatizzazione di report e fatturazione. Sistema in uso istituzionale presso EMDUPAR.",
          tech: ["PHP 5.3", "MySQL", "JavaScript", "Figma", "FPDF", "Git"],
          metrics: [
            { label: "Moduli", value: "12" },
            { label: "Stack", value: "PHP + MySQL" },
            { label: "Stato", value: "Implementato" },
          ],
          architectureFlow: "Figma (UX/UI) → HTML/CSS/JS → PHP 5.3 Backend → MySQL\n                              ↓\n  Richieste · Spedizioni · Consegne · Fatturazione · PDF · QR",
        },
        {
          key: "school",
          tag: "Sistema ERP · Istruzione",
          title: "ERP scolastico multitenant: Colegio Uziel Querit",
          problem: "Il collegio gestiva iscrizioni, voti, buste paga e pagamenti su fogli di calcolo separati. La direzione non aveva visibilità in tempo reale sulla situazione accademica né finanziaria.",
          solution: "ERP scolastico con 6 moduli integrati (iscrizioni, inventario, buste paga, voti, pagamenti, contabilità), con architettura multitenant per scalare a più sedi.",
          decision: "PostgreSQL rispetto a MySQL per il supporto nativo agli schemi che facilita l'isolamento per tenant_id. Express.js per l'ecosistema maturo per API REST. Team di 3 persone con responsabilità distinte per modulo.",
          result: "6 moduli in produzione, +1.200 studenti registrati e architettura pronta a scalare a più istituti senza modifiche al codice.",
          tech: ["React", "Express.js", "PostgreSQL", "Node.js"],
          metrics: [
            { label: "Moduli", value: "6" },
            { label: "Studenti", value: "+1.200" },
            { label: "Architettura", value: "Multitenant" },
          ],
          architectureFlow: "Browser → React SPA → Express REST API → PostgreSQL (tenant_id)\n                               ↓\n  Iscrizioni · Inventario · Buste paga · Voti · Pagamenti · Contabilità",
        },
      ],
    },
    contact: {
      eyebrow: "$ cat contact.txt",
      title: "Contatti",
      description: "Hai un progetto o una posizione aperta? Rispondo entro 24 ore.",
      availability: "Disponibile in presenza a Brescia / Verona (Italia) · Remoto dalla Colombia.",
      emailLabel: "Email", githubLabel: "GitHub", linkedinLabel: "LinkedIn", countriesLabel: "Posizione", cta: "Invia un'email",
    },
    footer: {
      tagline: "Ingegneria con criterio. Codice con scopo.",
      rights: "Tutti i diritti riservati.",
      builtWith: "Costruito con Next.js, TypeScript & Tailwind CSS.",
    },
    projectModal: {
      viewCase: "Vedi Case Study",
      tab_info: "Informazioni",
      tab_gallery: "Galleria",
      tab_tech: "Tecnologie",
      role: "Ruolo",
      client: "Cliente",
      year: "Anno",
      status: "Stato",
      whatIBuilt: "Cosa ho sviluppato",
      features: "Caratteristiche",
      statsLabel: "Statistiche",
      devProcess: "Processo di sviluppo",
      counter: "di",
      pressEsc: "ESC per chiudere",
      zoom: "Clic per ingrandire",
    },
  },
};

export const contactInfo = {
  email: "alessandroca73@gmail.com",
  github: "github.com/AlessCaldana",
  githubUrl: "https://github.com/AlessCaldana",
  linkedin: "linkedin.com/in/alessandro-caldana-3978b11b5",
  linkedinUrl: "https://www.linkedin.com/in/alessandro-caldana-3978b11b5/",
  countries: ["🇨🇴 Colombia", "🇮🇹 Italia"],
};
