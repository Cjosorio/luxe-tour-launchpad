
# Transporte Turístico Castellanos — Web Corporativa Premium

## Visión

Una web de una sola página (one-page con navegación ancla + modales para flota) que se sienta como una **marca de transporte ejecutivo de lujo**: fondo oscuro grafito dominante, amarillo dorado como acento, tipografía serif elegante para titulares + sans-serif moderno para texto, animaciones cinematográficas en cada scroll. El usuario debe percibir seriedad y exclusividad en menos de 3 segundos.

Usaremos placeholders premium de stock para imágenes/textos mientras subes tu contenido real.

## Dirección visual

- **Paleta**: Negro grafito (#0A0A0A) como base, gris oscuro (#1A1A1A) para superficies, amarillo dorado (#E8B923 / #F4C430) como acento, blanco hueso para texto principal.
- **Tipografía**: Serif display (tipo Playfair / Cormorant) para H1–H2, sans-serif geométrico (Inter) para cuerpo. Letterspacing amplio en labels en mayúsculas.
- **Texturas**: Grano sutil sobre fondos oscuros, gradientes radiales suaves desde el amarillo, líneas finas como separadores.
- **Animaciones**: Fade-up al entrar en viewport, parallax en hero e imágenes clave, hover scale en cards, slider con crossfade en galerías de flota, contador animado en estadísticas, cursor sutil en botones primarios.

## Estructura de secciones

```text
[ Header fijo translúcido + Logo + Nav + Selector idioma (ES/EN/PT) ]
        │
        ▼
1. HERO  — Video/imagen full-bleed oscuro, overlay gradiente,
           título serif gigante, CTA amarillo + CTA WhatsApp outline
        ▼
2. POR QUÉ ELEGIRNOS  — 4 pilares con íconos lineales animados
        ▼
3. SERVICIOS  — Grid de 4 cards (aeropuerto, excursiones, corporativo, eventos)
        ▼
4. FLOTA  — 4 vehículos (Pullman, Hiace, Prado, Coaster)
           Cards grandes → modal con galería slider + specs
        ▼
5. NUESTRA HISTORIA  — Layout editorial con imagen lateral + misión/visión
        ▼
6. TESTIMONIOS  — Carrusel de tarjetas oscuras con quote dorado
        ▼
7. COBERTURA  — Mapa estilo oscuro + listado de zonas
        ▼
8. FAQ  — Acordeones animados
        ▼
9. CTA FINAL  — Bloque dramático "Reserva tu transporte"
                + formulario rápido de cotización
        ▼
[ Footer oscuro: contacto, redes, idiomas, créditos ]

[ Botón flotante WhatsApp siempre visible (esquina inferior derecha) ]
```

## Detalle por sección

**1. Hero** — Imagen placeholder cinematográfica de carretera/vehículo nocturno. Título: "Transporte turístico seguro, cómodo y puntual". Subtítulo corto. Botón primario amarillo "Solicitar cotización" (ancla al formulario), botón secundario outline "Contactar por WhatsApp". Indicador de scroll animado.

**2. Por qué elegirnos** — 4 pilares: Conductores profesionales · Vehículos modernos · Puntualidad garantizada · Atención personalizada. Íconos finos lineales con animación al revelar.

**3. Servicios** — Grid 2x2 con imagen, título y descripción breve. Hover: zoom suave + overlay dorado.

**4. Flota** — Cards grandes (Pullman, Hiace, Prado, Coaster) con imagen principal, nombre, capacidad. Click abre **modal full-screen** con:
- Slider de 5+ imágenes (exterior frontal, lateral, interior, asientos, detalles) con transiciones crossfade y miniaturas.
- Descripción extensa, capacidad, características (aire acondicionado, asientos reclinables, etc.), botón "Cotizar este vehículo" → WhatsApp prellenado.

**5. Historia / Misión / Visión** — Composición editorial tipo revista, párrafo emocional, imagen vertical lateral con efecto parallax.

**6. Testimonios** — Carrusel horizontal de tarjetas con foto, nombre, comilla dorada grande, texto.

**7. Cobertura** — Mapa Google Maps embebido con estilo dark, lista de ciudades/zonas al lado.

**8. FAQ** — Acordeón con 6–8 preguntas (precios, pago, reservas, cancelaciones, etc.).

**9. CTA final + Formulario** — Bloque a pantalla con título dramático y formulario simple: nombre, teléfono, fecha, servicio, vehículo, mensaje. Submit arma mensaje y abre WhatsApp con todo prellenado.

## Funcionalidades clave

- **Selector de idioma ES/EN/PT** en header con persistencia en localStorage. Sistema i18n con archivos JSON por idioma; todos los textos centralizados para edición fácil.
- **WhatsApp**: botón flotante visible siempre + CTAs en hero, modales de flota y formulario final. Todos abren `wa.me/<NUMERO>?text=...` con mensaje contextual prellenado.
- **Formulario de cotización**: validación en cliente, NO se guarda en base de datos — genera mensaje de WhatsApp listo para enviar.
- **Animaciones scroll-reveal** en todas las secciones (Intersection Observer).
- **SEO básico**: meta tags, Open Graph, títulos semánticos, alt en imágenes, sitemap-ready.
- **100% responsive** (mobile-first), menú hamburguesa con drawer animado en móvil.
- **Optimización**: imágenes lazy-loaded, fuentes precargadas.

## Lo que NECESITARÉ de ti después (placeholders por ahora)

- Logo
- Número de WhatsApp real
- Fotos reales de cada vehículo (mínimo 5 por unidad)
- Texto definitivo de historia/misión/visión
- Testimonios reales
- Lista exacta de zonas de cobertura
- Enlaces de redes sociales

Todo quedará organizado en archivos claros (ej. `src/data/fleet.ts`, `src/i18n/es.json`) para que puedas reemplazarlo fácilmente o pedirme que lo haga.

## Notas técnicas

- Stack: React + Vite + Tailwind + shadcn/ui (ya en el proyecto).
- Animaciones con Tailwind keyframes + Framer Motion para transiciones cinematográficas y modales.
- i18n con un context ligero propio (sin dependencias pesadas) y JSON por idioma.
- Sin backend en esta fase (no se necesita Lovable Cloud todavía; se puede agregar luego para reservas online).
- Diseño tokens centralizados en `index.css` y `tailwind.config.ts` (paleta, tipografías, sombras doradas).

## Fuera de alcance (para fases siguientes)

- Reservas online con calendario y pagos.
- Panel admin para gestionar flota y cotizaciones.
- Blog de destinos turísticos para SEO.
- Traducciones automáticas con IA.
