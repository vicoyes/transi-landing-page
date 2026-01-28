# Landing Page - Liderar desde la Serenidad

Landing page para Tránsito Aracil construida con Astro y Tailwind CSS.

## 🚀 Instalación

**IMPORTANTE:** Primero necesitas instalar las dependencias de Tailwind CSS:

```bash
npm install
```

Si tienes problemas de permisos con npm, intenta:

```bash
sudo npm install
```

O corrige los permisos de npm:

```bash
sudo chown -R $(whoami) ~/.npm
npm install
```

## 🧞 Comandos

| Comando                   | Acción                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Instala las dependencias (incluye Tailwind)      |
| `npm run dev`             | Inicia el servidor de desarrollo en `localhost:4321` |
| `npm run build`           | Construye el sitio para producción en `./dist/` |
| `npm run preview`         | Previsualiza el build localmente                 |

## 📁 Estructura del Proyecto

```
/
├── public/          # Archivos estáticos (favicon, etc.)
├── src/
│   ├── components/  # Componentes Astro reutilizables
│   │   ├── Header.astro
│   │   ├── Hero.astro
│   │   ├── CostoOculto.astro
│   │   ├── ElMetodo.astro
│   │   ├── Resultados.astro
│   │   ├── SobreTransito.astro
│   │   ├── CTA.astro
│   │   └── Footer.astro
│   ├── layouts/     # Layouts base
│   │   └── Layout.astro
│   ├── pages/       # Páginas (rutas)
│   │   └── index.astro
│   └── styles/      # Estilos globales
│       └── global.css
├── tailwind.config.mjs  # Configuración de Tailwind
└── astro.config.mjs     # Configuración de Astro
```

## 🎨 Estilos

Los estilos están organizados de la siguiente manera:

- **Tailwind CSS**: Configurado en `tailwind.config.mjs` con colores y fuentes personalizadas
- **Estilos globales**: En `src/styles/global.css` (incluye estilos personalizados y directivas de Tailwind)
- **Fuentes**: Google Fonts (Playfair Display y Lato) importadas en `Layout.astro`

## ⚠️ Solución de Problemas

### Los estilos no se cargan

1. Asegúrate de que las dependencias estén instaladas:
   ```bash
   npm install
   ```

2. Verifica que Tailwind esté instalado:
   ```bash
   npm list tailwindcss @astrojs/tailwind
   ```

3. Si los estilos aún no cargan, reinicia el servidor de desarrollo:
   ```bash
   npm run dev
   ```

4. Verifica que el archivo `src/styles/global.css` exista y contenga las directivas de Tailwind:
   ```css
   @tailwind base;
   @tailwind components;
   @tailwind utilities;
   ```

## 📚 Tecnologías

- **Astro**: Framework para sitios estáticos
- **Tailwind CSS**: Framework de utilidades CSS
- **Google Fonts**: Playfair Display y Lato
