# Alessandro Caldana — Portfolio

Portafolio profesional personal construido con **Next.js 15 + TypeScript + Tailwind CSS + Framer Motion + shadcn/ui + Lucide Icons**. Diseño oscuro con glassmorphism, completamente trilingüe (Español · English · Italiano), selector de idioma con pantalla de bienvenida, animaciones al hacer scroll, casos de estudio técnicos y despliegue estático en Vercel.

🌐 **En vivo:** [portfolio-self-seven-eb9ln0r1ff.vercel.app](https://portfolio-self-seven-eb9ln0r1ff.vercel.app)

---

## Stack técnico

| Capa | Tecnología |
|---|---|
| Framework | Next.js 15 (App Router, `output: "export"`) |
| Lenguaje | TypeScript |
| Estilos | Tailwind CSS con tokens personalizados |
| Animaciones | Framer Motion (scroll, stagger, contadores) |
| Componentes | shadcn/ui construido sobre Radix UI |
| Iconos | Lucide Icons |
| Fuentes | `@fontsource` autoalojadas — Space Grotesk, Inter, JetBrains Mono |
| Despliegue | Vercel (exportación estática) |

Las fuentes se sirven localmente vía `@fontsource`, sin depender de Google Fonts en el build — ideal para CI y entornos con red restringida.

---

## Cómo correrlo localmente

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000).

## Build de producción

```bash
npm run build
```

Genera un sitio **100% estático** en `/out`. Puedes subirlo a Vercel, Netlify, GitHub Pages, Cloudflare Pages o cualquier hosting estático.

### Despliegue recomendado: Vercel

1. Sube el proyecto a GitHub.
2. Importa el repo en [vercel.com](https://vercel.com) → detecta Next.js automáticamente.
3. Cada `git push` a `main` dispara un nuevo deploy.

---

## Estructura del proyecto

```
app/
  layout.tsx           # Fuentes (@fontsource), metadata SEO, I18nProvider
  page.tsx             # Orden de secciones: Hero → About → Skills → Experience
                       #   → Case Studies → Projects → Education → Certs →
                       #   → Languages → Stats → Contact → Footer
  globals.css          # Tokens base, .glass, .glass-strong, .bg-noise, transiciones

components/
  locale-gate.tsx       # Pantalla de bienvenida con selector de idioma (primera visita)
  navbar.tsx            # Navbar fija, menú móvil, LanguageSwitcher
  footer.tsx
  section.tsx           # Wrapper compartido: eyebrow terminal + riel de circuito SVG
  timeline.tsx          # Timeline reutilizable (Experiencia, Educación)
  hero-illustration.tsx # Avatar circular con foto, circuito SVG, chips flotantes
  animated-counter.tsx  # Contador animado con easing para Estadísticas
  language-switcher.tsx # Dropdown con banderas SVG (ES · EN · IT)
  flag-icon.tsx         # Banderas circulares en SVG puro (sin emoji, compatible Windows)
  reveal.tsx            # Wrapper genérico scroll-reveal (Framer Motion whileInView)
  ui/                   # Button, Card, Badge, Progress (estilo shadcn/Radix)
  sections/
    hero.tsx            # Hero con foto, nombre, rol, descripción, CTAs
    about.tsx           # Sobre mí: 3 párrafos + badges
    skills.tsx          # Tecnologías: 3 tiers (producción, workflow, explorando)
    experience.tsx      # Experiencia: múltiples entradas con sub-items por cliente
    case-studies.tsx    # Casos de estudio: problema / decisión / arquitectura / métricas
    projects.tsx        # Grid de 6 proyectos con decisiones técnicas
    education.tsx       # Timeline de educación
    certifications.tsx  # Estado vacío listo para expandir
    languages.tsx       # 3 idiomas con banderas SVG y nota de ciudadanía
    stats.tsx           # 4 contadores animados con métricas reales
    contact.tsx         # Email, GitHub, LinkedIn, disponibilidad Italia

lib/
  translations.ts      # TODO el contenido en ES · EN · IT (único archivo a editar)
  i18n-context.tsx     # Contexto de idioma, localStorage, setLocale()
  utils.ts             # cn() helper (clsx + tailwind-merge)

public/
  profile.png          # ✅ Foto real con fondo removido (800×800px)
  cv.pdf               # ✅ CV real (Alessandro Caldana)
  cv-es.pdf            # CV en español (descarga cuando idioma = ES)
  cv-en.pdf            # CV en inglés (descarga cuando idioma = EN) — reemplazar
  cv-it.pdf            # CV en italiano (descarga cuando idioma = IT) — reemplazar
```

---

## Sistema de idiomas

### Pantalla de bienvenida (LocaleGate)

En la **primera visita** aparece una pantalla de bienvenida completa antes de mostrar el portafolio. El usuario elige entre tres tarjetas de idioma (IT · EN · ES). La elección se guarda en `localStorage` bajo la clave `ac-portfolio-locale` y no vuelve a aparecer en visitas posteriores.

El idioma se puede cambiar en cualquier momento desde el selector en la navbar — sin regresar a la pantalla inicial.

### Editar contenido

Todo el texto del sitio vive en **`lib/translations.ts`** — un único archivo con los tres idiomas. Para cambiar cualquier texto basta editar ese archivo.

### CVs por idioma

El botón "Descargar CV" descarga el archivo correspondiente al idioma activo:
- Español → `public/cv-es.pdf`
- English → `public/cv-en.pdf` *(reemplazar con versión en inglés)*
- Italiano → `public/cv-it.pdf` *(reemplazar con versión en italiano)*

---

## ✅ Checklist de estado actual

| Item | Estado |
|---|---|
| Foto de perfil | ✅ Integrada (`public/profile.png`, fondo removido, recortada) |
| CV real | ✅ Subido (`public/cv.pdf` y variantes por idioma) |
| LinkedIn | ✅ Configurado en `lib/translations.ts` → `contactInfo` |
| Pantalla de bienvenida | ✅ `LocaleGate` con diseño premium |
| Banderas SVG | ✅ Sin emoji (compatible Windows/Linux) |
| Experiencia laboral | ✅ EMDUPAR S.A. E.S.P. + MI DIARIO + Freelance con clientes reales |
| Casos de estudio | ✅ EMDUPAR (PHP 5.3 + MySQL, 12 módulos) + Uziel Querit (multitenant) |

### Pendiente

1. **CV en inglés e italiano** — `public/cv-en.pdf` y `public/cv-it.pdf` actualmente son copias del CV en español. Cuando tengas las versiones traducidas, reemplaza los archivos manteniendo el mismo nombre.

2. **Certificaciones** — La sección está construida como estado vacío con el texto de los cursos planeados (AWS Cloud Practitioner, Meta Front-End, CS50x). Cuando los obtengas, convierte `components/sections/certifications.tsx` en una grilla de tarjetas usando el mismo patrón de `projects.tsx`.

3. **Dominio personalizado** — El sitio corre en `*.vercel.app`. Si adquieres un dominio propio (ej. `alessandrocaldana.dev`), agrégalo en Vercel → Settings → Domains. También considera añadir Open Graph tags en `app/layout.tsx` para mejor preview en LinkedIn y WhatsApp.

4. **Favicon** — Actualmente usa el favicon por defecto de Next.js. Para uno personalizado, agrega `app/favicon.ico` o `app/icon.png`.

---

## Notas de diseño

- **Riel de circuito:** todas las secciones comparten un riel vertical SVG con un nodo brillante en el lado izquierdo que las conecta visualmente (ver `components/section.tsx`).
- **Eyebrows terminales:** cada sección abre con un prompt de terminal (`$ whoami`, `$ cat about.md`, `$ ls skills/`, etc.) como guiño al perfil de Ingeniería de Sistemas.
- **Tiers de habilidades:** en lugar de barras de porcentaje, las tecnologías se agrupan en tres niveles: *Stack principal* (producción real), *Herramientas de trabajo* y *Explorando actualmente*.
- **Experiencia con clientes reales:** la sección de experiencia muestra cada empleador/cliente como sub-item con sector y descripción de impacto.
- **Casos de estudio:** dos proyectos (EMDUPAR y Uziel Querit) tienen su propio caso de estudio con columnas problema / solución / decisión técnica + diagrama de arquitectura en ASCII + métricas reales.
- **Paleta:** `#05070A` (fondo void), `#3D63FF / #7FA8FF` (acentos azules), `#34D399` (verde señal para estados "vivos").
