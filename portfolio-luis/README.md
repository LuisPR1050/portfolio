# 🚀 Portfolio — Luis Alberto Peña Ruidiaz

Portfolio profesional Full Stack Developer Jr. — Tech futurista con animaciones de partículas, cursor personalizado y diseño premium.

## 📁 Estructura

```
portfolio-luis/
├── index.html        ← página principal
├── css/
│   └── style.css     ← todos los estilos
├── js/
│   └── main.js       ← animaciones y lógica
└── README.md
```

## 🌐 Deploy en GitHub Pages (GRATIS) — 3 pasos

### Paso 1 — Sube el código a GitHub
```bash
# En la terminal, dentro de la carpeta portfolio-luis/
git init
git add .
git commit -m "feat: portfolio inicial"
git branch -M main
git remote add origin https://github.com/LuisPR1050/portfolio.git
git push -u origin main
```

### Paso 2 — Activa GitHub Pages
1. Ve a tu repo en GitHub
2. Settings → Pages
3. Source: **Deploy from a branch**
4. Branch: **main** / folder: **/ (root)**
5. Clic en **Save**

### Paso 3 — Tu URL en vivo
```
https://LuisPR1050.github.io/portfolio
```
(puede tardar ~2 minutos en activarse)

---

## ⚡ Deploy en Netlify (alternativa, más rápido)

1. Ve a [netlify.com](https://netlify.com) → Log in con GitHub
2. "Add new site" → "Import an existing project"
3. Selecciona tu repo `portfolio`
4. Build settings: déjalos en blanco (es HTML puro)
5. Clic en **Deploy site**

URL automática tipo: `https://luis-portfolio.netlify.app`

---

## 🎨 Personalizar

### Agregar tu foto real
Reemplaza la URL en `index.html` (línea ~130) con tu foto:
```html
<img src="assets/foto-luis.jpg" alt="Luis Alberto Peña Ruidiaz">
```
Pon tu foto en la carpeta `assets/` con nombre `foto-luis.jpg`

### Agregar proyectos nuevos
Copia el bloque `.proj-card` en `index.html` y edita el contenido.

### Cambiar colores
En `css/style.css`, edita las variables en `:root`:
```css
--c: #00F0FF;    /* color cyan principal */
--p: #9D4EFF;    /* color púrpura acento */
```

### Activar el formulario de contacto
Para que el formulario envíe emails reales, regístrate en [formspree.io](https://formspree.io) (gratis) y cambia en `index.html`:
```html
<form id="contactForm" action="https://formspree.io/f/TU_ID" method="POST">
```

---

## 📧 Contacto
- Email: luisruidiaz7002@gmail.com
- GitHub: [github.com/LuisPR1050](https://github.com/LuisPR1050)
- LinkedIn: [luis-alberto-peña-ruidiaz](https://www.linkedin.com/in/luis-alberto-pe%C3%B1a-ruidiaz-a6b4092aa/)
