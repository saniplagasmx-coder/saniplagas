# 🦟 SaniPlagas — Landing Page Empresarial

Landing page profesional para **SaniPlagas San Miguel** — Fumigaciones y Control de Plagas.

---

## 🚀 Inicio Rápido

### Requisitos
- Node.js 16+ 
- npm o yarn

### Instalación

```bash
# 1. Entra al directorio
cd saniplagas-landing

# 2. Instala dependencias
npm install

# 3. Inicia el servidor de desarrollo
npm start

# Abre http://localhost:3000
```

---

## 📧 Configurar Sistema de Correo (EmailJS)

El formulario de contacto usa **EmailJS** — servicio gratuito de envío de correos desde el frontend.

### Pasos para activarlo:

**1. Crear cuenta gratuita**
- Ve a [https://www.emailjs.com](https://www.emailjs.com)
- Crea una cuenta gratuita (200 emails/mes gratis)

**2. Crear un servicio de email**
- Dashboard → Email Services → Add New Service
- Conecta tu Gmail, Outlook o cualquier proveedor
- Copia el **Service ID** (ej: `service_abc123`)

**3. Crear una plantilla de correo**
- Dashboard → Email Templates → Create New Template
- Diseña el correo. Usa estas variables que envía el formulario:
  ```
  Nombre: {{name}}
  Empresa: {{company}}
  Correo: {{email}}
  Teléfono: {{phone}}
  Servicio: {{service}}
  Mensaje: {{message}}
  ```
- Copia el **Template ID** (ej: `template_xyz789`)

**4. Obtener tu Public Key**
- Dashboard → Account → API Keys
- Copia la **Public Key**

**5. Actualizar la configuración**
- Abre: `src/components/Contact.jsx`
- Localiza y reemplaza:

```javascript
const EMAILJS_CONFIG = {
  serviceId: 'TU_SERVICE_ID',    // ej: 'service_abc123'
  templateId: 'TU_TEMPLATE_ID', // ej: 'template_xyz789'
  publicKey: 'TU_PUBLIC_KEY',   // ej: 'abcDEFG123...'
};
```

¡Listo! El formulario enviará correos reales a tu bandeja.

---

## 🎨 Personalización

### Colores de la marca
Definidos en `tailwind.config.js`:
```js
primary: '#4992F2'  // Azul
green:   '#4ED957'  // Verde  
dark:    '#0D0D0D'  // Negro
```

### Información de contacto
Busca y reemplaza en los archivos:
- **Teléfono**: `+52 (415) 123-4567`
- **Email**: `contacto@saniplagas.mx`
- **WhatsApp**: `524151234567` (en los links `wa.me/...`)
- **Dirección**: `San Miguel de Allende, Gto.`

### Textos y contenido
- `src/components/Hero.jsx` — Sección principal
- `src/components/Services.jsx` — Servicios
- `src/components/About.jsx` — Nosotros y estadísticas
- `src/components/Process.jsx` — Proceso de trabajo
- `src/components/Galeria.jsx` — Galeria
- `src/components/Contact.jsx` — Formulario
- `src/components/Footer.jsx` — Pie de página

---

## 📁 Estructura del Proyecto

```
saniplagas-landing/
├── public/
│   └── index.html              # HTML base
├── src/
│   ├── components/
│   │   ├── Navbar.jsx          # Navegación con scroll
│   │   ├── Hero.jsx            # Sección principal animada
│   │   ├── Services.jsx        # 6 servicios en grid
│   │   ├── About.jsx           # Nosotros + estadísticas
│   │   ├── Process.jsx         # 4 pasos del proceso
│   │   ├── Testimonials.jsx    # Carousel de testimonios
│   │   ├── Contact.jsx         # Formulario + EmailJS
│   │   ├── Footer.jsx          # Pie de página
│   │   └── WhatsAppFloat.jsx   # Botón WhatsApp flotante
│   ├── hooks/
│   │   └── useIntersection.js  # Hook para animaciones scroll
│   ├── App.jsx                 # Componente raíz
│   ├── index.js               # Punto de entrada
│   └── index.css              # Estilos globales + Tailwind
├── tailwind.config.js          # Configuración Tailwind
├── postcss.config.js           # PostCSS
└── package.json               # Dependencias
```

---

## ✨ Características

- ✅ **Diseño profesional** — dirigido al mercado empresarial
- ✅ **Totalmente responsivo** — mobile, tablet, desktop
- ✅ **Animaciones** — reveal al hacer scroll, contador animado
- ✅ **Navbar sticky** — cambia al hacer scroll
- ✅ **Hero impactante** — con decoraciones y estadísticas
- ✅ **6 servicios** — tarjetas con hover effects
- ✅ **Sección Nosotros** — con contadores animados y certificaciones
- ✅ **Proceso en 4 pasos** — sección dark con glassmorphism
- ✅ **Testimonios** — carousel automático con 5 reseñas
- ✅ **Formulario de contacto** — con EmailJS y validación
- ✅ **WhatsApp flotante** — con tooltip animado
- ✅ **Footer completo** — con links, redes y emergencias
- ✅ **Colores de marca** — paleta original del logo

---

## 🔧 Build para Producción

```bash
npm run build
```

Genera la carpeta `build/` lista para subir a cualquier hosting:
- **Netlify** — arrastra la carpeta `build/`
- **Vercel** — `vercel deploy`
- **cPanel** — sube el contenido de `build/` a `public_html/`

--

*Desarrollado con React + Tailwind CSS*
