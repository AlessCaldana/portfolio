# Alessandro Caldana — Portfolio

Sitio portafolio personal, construido con **Next.js 15 + TypeScript + Tailwind CSS + Framer Motion + shadcn/ui + Lucide Icons**. Modo oscuro, glassmorphism, trilingüe (Español / English / Italiano) con selector de idioma persistente, animaciones al hacer scroll, contadores animados y un hilo conductor visual de "circuito" que recorre todas las secciones.

## Stack técnico

- **Next.js 15** (App Router, exportación estática vía `output: "export"`)
- **TypeScript**
- **Tailwind CSS** (tokens de color y tipografía personalizados)
- **Framer Motion** (animaciones de scroll, stagger, contador animado)
- **shadcn/ui** (Button, Card, Badge, Progress — construidos a mano sobre Radix)
- **Lucide Icons**
- Fuentes autoalojadas vía `@fontsource` (Space Grotesk, Inter, JetBrains Mono) — no dependen de una conexión a Google Fonts en el momento del build, lo que hace el proyecto más portable (CI, entornos sin acceso a internet, etc.)

## Cómo correrlo localmente

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000).

## Cómo generar el build de producción

```bash
npm run build
```

Esto genera un sitio **100% estático** en la carpeta `/out` (gracias a `output: "export"` en `next.config.mjs`), que puedes subir a cualquier hosting estático: Vercel, Netlify, GitHub Pages, Cloudflare Pages, un bucket S3, etc.

### Despliegue recomendado: Vercel

1. Sube este proyecto a un repositorio de GitHub.
2. Importa el repo en [vercel.com](https://vercel.com).
3. Vercel detecta Next.js automáticamente — no necesitas configurar nada más.

Si prefieres otro hosting estático, simplemente sube el contenido de la carpeta `/out` generada por `npm run build`.

## Estructura del proyecto

```
app/
  layout.tsx          # Layout raíz: fuentes, metadata, I18nProvider
  page.tsx             # Ensambla todas las secciones en orden
  globals.css          # Tokens base, utilidades (.glass, .bg-noise, etc.)
components/
  navbar.tsx            # Navbar fija + menú móvil + selector de idioma
  footer.tsx
  section.tsx           # Wrapper compartido: eyebrow tipo terminal + riel de circuito
  timeline.tsx           # Timeline reutilizable (Experiencia, Educación)
  hero-illustration.tsx  # Ilustración animada del hero (avatar, chips flotantes)
  animated-counter.tsx   # Contador animado para Estadísticas
  language-switcher.tsx
  ui/                    # Button, Card, Badge, Progress (estilo shadcn)
  sections/               # Una sección por archivo: hero, about, skills,
                           # projects, experience, education, languages,
                           # certifications, stats, contact
lib/
  translations.ts        # Todo el contenido y las 3 traducciones (es/en/it)
  i18n-context.tsx        # Contexto de idioma + persistencia en localStorage
  utils.ts
public/
  cv.pdf                  # ⚠️ Placeholder — reemplázalo (ver checklist abajo)
```

## Idiomas

El selector de idioma (🇪🇸 / 🇺🇸 / 🇮🇹) vive en la navbar y en el menú móvil. La preferencia se guarda en `localStorage` bajo la clave `ac-portfolio-locale`, así que la elección del visitante persiste entre visitas. Todo el copy del sitio vive centralizado en `lib/translations.ts` — si quieres editar cualquier texto (en cualquiera de los 3 idiomas), ese es el único archivo que necesitas tocar.

## ✅ Checklist pendiente para ti

Antes de publicar el sitio, hay algunos placeholders que dejé listos para que reemplaces:

1. **Foto de perfil** — Como no me compartiste una foto real, el hero usa un avatar con iniciales "AC" generado con gradiente (`components/hero-illustration.tsx`). Para poner tu foto real:
   - Agrega tu imagen en `public/profile.jpg` (o `.png`)
   - En `components/hero-illustration.tsx`, reemplaza el bloque del círculo con iniciales por un `<Image src="/profile.jpg" ... />` de `next/image` (recuerda que `images.unoptimized: true` ya está configurado para que funcione con la exportación estática).

2. **CV / Currículum** — El botón "Descargar CV" del hero apunta a `public/cv.pdf`, que actualmente es un PDF de un solo párrafo a modo de placeholder. Reemplaza ese archivo por tu CV real (mismo nombre, `cv.pdf`, o actualiza la ruta en `components/sections/hero.tsx`).

3. **Fechas de experiencia** — En `lib/translations.ts`, la sección `experience` usa el período "En curso" / "Ongoing" / "In corso" porque no me diste fechas exactas. Si quieres mostrar un rango de fechas específico, edítalo ahí (en las 3 traducciones).

4. **Certificaciones** — La sección está construida como un estado vacío ("Próximamente...") listo para que agregues certificados reales más adelante. Cuando tengas cursos/certificados para mostrar, puedo ayudarte a convertir `components/sections/certifications.tsx` en una grilla de tarjetas (como la de Proyectos) usando el mismo patrón.

5. **Dominio / metadata** — El `<title>` y la descripción SEO en `app/layout.tsx` están listos, pero si tienes un dominio propio quizás quieras agregar Open Graph tags o un favicon personalizado en `app/` (actualmente usa el favicon por defecto de Next.js).

## Notas de diseño

- Todas las secciones comparten un **riel vertical tipo "circuito"** con un nodo brillante que recorre el lado izquierdo de la página, conectando visualmente cada sección (ver `components/section.tsx`).
- Cada sección tiene un "eyebrow" estilo terminal (`$ whoami`, `$ cat about.md`, `$ ls skills/`, etc.) como guiño a tu perfil de ingeniero de sistemas.
- Paleta: fondo casi negro (`#05070A`), acentos azules (`#3D63FF` / `#7FA8FF`), verde señal para elementos "vivos" (`#34D399`).
