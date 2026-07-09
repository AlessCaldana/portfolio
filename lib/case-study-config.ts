import type { Locale } from "@/lib/translations";

type L = Record<Locale, string>;

export interface CaseStudyModule { icon: string; label: L }
export interface CaseStudyStat   { value: string; label: L }

export interface CaseStudyConfig {
  folder: string;
  client: string;
  year: string;
  status: L;
  roleDetail: L;
  stats: CaseStudyStat[];
  modules: CaseStudyModule[];
  features: L[];
  tech: string[];
  timeline: L[];
}

export const CASE_STUDY_CONFIGS: Record<string, CaseStudyConfig> = {
  emdupar: {
    folder: "emdupar",
    client: "EMDUPAR S.A. E.S.P.",
    year: "2025",
    status: { es: "Implementado", en: "Deployed", it: "Implementato" },
    roleDetail: {
      es: "Full Stack — Análisis · UX/UI · BD · Backend · Frontend · Deploy",
      en: "Full Stack — Analysis · UX/UI · DB · Backend · Frontend · Deploy",
      it: "Full Stack — Analisi · UX/UI · DB · Backend · Frontend · Deploy",
    },
    stats: [
      { value: "12", label: { es: "Módulos",         en: "Modules",       it: "Moduli"          }},
      { value: "CRUD", label: { es: "Sistema completo",en: "Full system",  it: "Sistema completo"}},
      { value: "100%", label: { es: "Responsive",     en: "Responsive",    it: "Responsive"      }},
      { value: "PHP 5.3", label: { es: "Stack",       en: "Stack",         it: "Stack"           }},
    ],
    modules: [
      { icon: "Users",         label: { es: "Usuarios",       en: "Users",        it: "Utenti"       }},
      { icon: "Shield",        label: { es: "Roles",          en: "Roles",        it: "Ruoli"        }},
      { icon: "Building2",     label: { es: "Clientes",       en: "Clients",      it: "Clienti"      }},
      { icon: "Truck",         label: { es: "Vehículos",      en: "Vehicles",     it: "Veicoli"      }},
      { icon: "ClipboardList", label: { es: "Solicitudes",    en: "Requests",     it: "Richieste"    }},
      { icon: "MapPin",        label: { es: "Despachos",      en: "Dispatch",     it: "Spedizioni"   }},
      { icon: "PackageCheck",  label: { es: "Entregas",       en: "Deliveries",   it: "Consegne"     }},
      { icon: "Receipt",       label: { es: "Facturación",    en: "Billing",      it: "Fatturazione" }},
      { icon: "BarChart3",     label: { es: "Reportes",       en: "Reports",      it: "Report"       }},
      { icon: "FileSearch",    label: { es: "Auditoría",      en: "Audit",        it: "Audit"        }},
      { icon: "FileText",      label: { es: "PDF",            en: "PDF",          it: "PDF"          }},
      { icon: "QrCode",        label: { es: "Códigos QR",     en: "QR Codes",     it: "Codici QR"    }},
    ],
    features: [
      { es: "Sistema CRUD completo para todas las entidades",            en: "Full CRUD system for all entities",                   it: "Sistema CRUD completo per tutte le entità"              },
      { es: "Panel administrativo centralizado",                         en: "Centralized administrative panel",                    it: "Pannello amministrativo centralizzato"                  },
      { es: "Control de estados en tiempo real",                         en: "Real-time status control",                            it: "Controllo stati in tempo reale"                         },
      { es: "Búsquedas y filtros avanzados por módulo",                  en: "Advanced search and filters per module",              it: "Ricerche e filtri avanzati per modulo"                  },
      { es: "Generación automática de reportes administrativos",         en: "Automatic administrative report generation",          it: "Generazione automatica di report amministrativi"        },
      { es: "Facturación y generación de comprobantes en PDF",           en: "Billing and PDF voucher generation",                  it: "Fatturazione e generazione di ricevute PDF"             },
      { es: "Control de acceso por roles (RBAC)",                        en: "Role-based access control (RBAC)",                    it: "Controllo accessi basato su ruoli (RBAC)"               },
      { es: "Trazabilidad completa del servicio de carro tanque",        en: "Full traceability of the tanker truck service",       it: "Tracciabilità completa del servizio autobotte"          },
      { es: "Diseño responsive — móvil, tablet y escritorio",            en: "Responsive design — mobile, tablet and desktop",      it: "Design responsive — mobile, tablet e desktop"           },
      { es: "Generación de códigos QR para identificación de despachos", en: "QR code generation for dispatch identification",      it: "Generazione codici QR per identificazione spedizioni"   },
    ],
    tech: ["PHP 5.3", "MySQL", "phpMyAdmin", "JavaScript", "HTML5", "CSS3", "Bootstrap", "Figma", "FPDF", "PHP QR Code", "Git", "XAMPP"],
    timeline: [
      { es: "Análisis",    en: "Analysis",    it: "Analisi"      },
      { es: "UX / UI",     en: "UX / UI",     it: "UX / UI"      },
      { es: "Base de datos",en: "Database",   it: "Database"     },
      { es: "Backend",     en: "Backend",     it: "Backend"      },
      { es: "Frontend",    en: "Frontend",    it: "Frontend"     },
      { es: "Testing",     en: "Testing",     it: "Test"         },
      { es: "Deploy",      en: "Deploy",      it: "Deploy"       },
    ],
  },

  school: {
    folder: "school",
    client: "Colegio Uziel Querit",
    year: "2024 – 2025",
    status: { es: "En producción", en: "In production", it: "In produzione" },
    roleDetail: {
      es: "Tech Lead Full Stack — Arquitectura · BD · Backend · Frontend",
      en: "Full Stack Tech Lead — Architecture · DB · Backend · Frontend",
      it: "Tech Lead Full Stack — Architettura · DB · Backend · Frontend",
    },
    stats: [
      { value: "6",     label: { es: "Módulos",     en: "Modules",    it: "Moduli"    }},
      { value: "+1.200",label: { es: "Estudiantes", en: "Students",   it: "Studenti"  }},
      { value: "Multi", label: { es: "Tenant",      en: "Tenant",     it: "Tenant"    }},
      { value: "3",     label: { es: "Personas",    en: "Team",       it: "Team"      }},
    ],
    modules: [
      { icon: "ClipboardList", label: { es: "Matrícula",           en: "Enrollment",      it: "Iscrizioni"       }},
      { icon: "Package",       label: { es: "Inventario",          en: "Inventory",       it: "Inventario"       }},
      { icon: "DollarSign",    label: { es: "Nómina",              en: "Payroll",         it: "Buste paga"       }},
      { icon: "BookOpen",      label: { es: "Calificaciones",      en: "Grades",          it: "Voti"             }},
      { icon: "CreditCard",    label: { es: "Pagos",               en: "Payments",        it: "Pagamenti"        }},
      { icon: "Calculator",    label: { es: "Contabilidad",        en: "Accounting",      it: "Contabilità"      }},
      { icon: "Shield",        label: { es: "Control de acceso",   en: "Access control",  it: "Controllo accessi"}},
      { icon: "Users",         label: { es: "Gestión de usuarios", en: "User management", it: "Gestione utenti"  }},
    ],
    features: [
      { es: "Arquitectura multitenant con aislamiento por tenant_id en PostgreSQL", en: "Multitenant architecture with tenant_id isolation in PostgreSQL",  it: "Architettura multitenant con isolamento per tenant_id in PostgreSQL" },
      { es: "API REST completa en Express.js con validación por capas",             en: "Full REST API in Express.js with layered validation",              it: "API REST completa in Express.js con validazione a livelli"          },
      { es: "Frontend SPA en React — módulos completamente desacoplados",           en: "React SPA frontend — fully decoupled modules",                     it: "Frontend SPA React — moduli completamente disaccoppiati"            },
      { es: "PostgreSQL con esquemas separados por tenant para máxima seguridad",   en: "PostgreSQL with separate schemas per tenant for maximum security",  it: "PostgreSQL con schemi separati per tenant per massima sicurezza"    },
      { es: "Autenticación JWT con control de roles por módulo",                    en: "JWT authentication with per-module role control",                  it: "Autenticazione JWT con controllo ruoli per modulo"                  },
      { es: "Reportes financieros y académicos exportables",                        en: "Exportable financial and academic reports",                        it: "Report finanziari e accademici esportabili"                         },
      { es: "Diseño responsive — acceso desde cualquier dispositivo",               en: "Responsive design — access from any device",                       it: "Design responsive — accesso da qualsiasi dispositivo"               },
      { es: "Arquitectura lista para escalar a múltiples colegios sin refactoring", en: "Architecture ready to scale to multiple schools without refactoring",it: "Architettura pronta per scalare a più scuole senza refactoring"    },
    ],
    tech: ["React", "Express.js", "PostgreSQL", "Node.js", "TypeScript", "Vite", "Tailwind CSS", "JWT", "Git"],
    timeline: [
      { es: "Arquitectura",   en: "Architecture", it: "Architettura" },
      { es: "Base de datos",  en: "Database",     it: "Database"     },
      { es: "Backend",        en: "Backend",      it: "Backend"      },
      { es: "Frontend",       en: "Frontend",     it: "Frontend"     },
      { es: "Módulos",        en: "Modules",      it: "Moduli"       },
      { es: "Testing",        en: "Testing",      it: "Test"         },
      { es: "Deploy",         en: "Deploy",       it: "Deploy"       },
    ],
  },
};

/** Maps project.key (from translations.ts) → case study config key */
export const PROJECT_TO_CASE_STUDY: Record<string, string> = {
  acarreo: "emdupar",
  school:  "school",
};
