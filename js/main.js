/**
 * Portafolio de Videos para Tiendas y Páginas de Roblox
 * Datos reales: Bonoxs, Sellitems.gg, Roswap, Mm2.shop
 */

let currentLang = 'en';
try {
  const savedLang = localStorage.getItem('chris_lang');
  if (savedLang === 'en' || savedLang === 'es') currentLang = savedLang;
} catch (e) {}

const i18nDictionary = {
  es: {
    "nav.subtitle": "VIDEOS PARA TIENDAS DE ROBLOX",
    "nav.videos": "Videos de Tiendas",
    "nav.metrics": "Métricas",
    "nav.brands": "Marcas",
    "nav.payments": "Métodos de Pago",
    "nav.contact": "Contacto",
    "nav.available": "Disponible",
    "nav.contactBtn": "Contactar",
    "sound.btn": "🔊 SONIDO ON",
    "hero.online": "En línea",
    "hero.creator": "CREADOR DE CONTENIDO",
    "hero.accepting": "🟢 Aceptando Tiendas",
    "hero.title": "Conecto tiendas y marcas con la comunidad más activa de <span class=\"font-serif italic font-normal text-[1.12em] bg-gradient-to-r from-orange-600 via-amber-500 to-orange-500 bg-clip-text text-transparent\">Roblox</span>.",
    "hero.intro": "¡Hola! Soy Chris (<span class=\"font-bold text-[#1c120c] font-heading\">@chrixmm2</span>). Creo contenido diario y dinámicas de alto impacto para miles de jugadores de Roblox. Ayudo a tiendas virtuales y páginas a darse a conocer de forma orgánica, ganando la confianza de una comunidad activa de más de <span class=\"text-orange-600 font-extrabold font-heading\">+610,000</span> seguidores.",
    "hero.ctaVideos": "Ver videos de tiendas",
    "hero.ctaContact": "Enviar Propuesta Directa",
    "hero.communityTitle": "COMUNIDAD &amp; REDES OFICIALES",
    "hero.verifiedAudience": "AUDIENCIA VERIFICADA",
    "social.tiktokSub": "Seguidores • 6.6M Likes",
    "social.youtubeSub": "Suscriptores • 148 Videos",
    "social.robloxSub": "Seguidores • Verificado",
    "portal.scrollHint": "Desliza para explorar las campañas de tiendas en video",
    "portal.mobileSwipe": "Desliza para moverte entre videos",
    "portal.badge": "TRABAJOS ANTERIORES &amp; CAMPAÑAS OFICIALES",
    "portal.title": "Algunos ejemplos de mi trabajo de tiendas o sitios con los que he trabajado",
    "metrics.badge": "MÉTRICAS &amp; IMPACTO REAL",
    "metrics.title": "De reproducciones a <span class=\"font-serif italic font-normal text-[1.1em] bg-gradient-to-r from-orange-600 via-amber-500 to-orange-500 bg-clip-text text-transparent\">compradores activos</span>",
    "metrics.sub": "Estrategia de gancho en los primeros 3 segundos y retención alta diseñada para convertir visitantes de Roblox en clientes para tu tienda.",
    "metrics.socialProof": "Social Proof &amp; Rendimiento de Campañas",
    "metrics.growth": "+34.8% Crecimiento Orgánico",
    "metrics.audienceLabel": "Audiencia Activa Verificada",
    "metrics.audienceDesc": "Alcance combinado diario en TikTok (301.7K) • YouTube (295K) • Roblox (13.7K) • Más de 6.6M de likes",
    "metrics.chartPeak": "Pico Actual: <strong class=\"text-amber-300 font-extrabold\">+610K Comunidad</strong>",
    "metrics.t1": "T1: Lanzamiento",
    "metrics.t2": "T2: Tracción Orgánica",
    "metrics.t3": "T3: Alianzas Tiendas",
    "metrics.t4": "Hoy: +610K Activo",
    "metrics.retention": "Retención a los 3s",
    "metrics.retentionSub": "+14% vs promedio",
    "metrics.guarantee": "Garantía Total",
    "metrics.guaranteeSub": "100% Verificado",
    "metrics.compliance": "100% Cumplimiento",
    "bento.official": "Oficial",
    "bento.creator": "@Chrixmm2 • Creador de Contenido",
    "bento.quote": "Multiplico el alcance y las ventas de tiendas de Roblox creando <span class=\"font-bold text-orange-700\">videos de alta retención</span> que conectan de verdad con la comunidad y <span class=\"font-serif italic text-base text-stone-900\">convierten visitas en compras</span>.",
    "bento.hookTitle": "Hooks Virales de 3s",
    "bento.hookDesc": "Máxima retención y dinamismo para TikTok y Shorts.",
    "bento.buyerTitle": "Audiencia Compradora",
    "bento.buyerDesc": "Público activo en Roblox dispuesto a adquirir Robux e ítems.",
    "bento.channels": "Canales:",
    "bento.quality": "⭐ 100% Calidad",
    "marcas.badge": "CONFIANZA &amp; TRAYECTORIA",
    "marcas.title": "Marcas conformes con el <span class=\"bg-gradient-to-r from-orange-600 via-amber-500 to-orange-500 bg-clip-text text-transparent\">trabajo de Chris</span>",
    "marcas.sub": "Campañas publicitarias oficiales para los mayores marketplaces, tiendas de ítems MM2 y plataformas de Robux.",
    "guarantee.badge": "COMPROMISO CON LAS TIENDAS",
    "guarantee.title": "Garantía y seguridad para tu tienda o página web",
    "guarantee.sub": "Sé que para un comercio o página web la reputación lo es todo. Cuando trabajo con una tienda me aseguro de que el video transmita confianza a los compradores:",
    "guarantee.item1": "<strong>Grabación limpia de tu página:</strong> Muestro tu web de forma profesional, destacando lo rápido que es comprar o usar cupones.",
    "guarantee.item2": "<strong>Revisiones incluidas:</strong> Si necesitas ajustar un cupón de descuento, el audio o algún detalle del video, te lo corrijo sin problema.",
    "guarantee.item3": "<strong>Entrega puntual:</strong> Cumplimiento estricto y seguro de las fechas acordadas para tus promociones.",
    "payments.badge": "Pagos Seguros",
    "payments.title": "Métodos de pago que acepto",
    "payments.sub": "Acepto pagos directos a través de las 3 opciones más cómodas:",
    "contact.badge": "CANAL DIRECTO &amp; PROPUESTAS RÁPIDAS",
    "contact.title": "Hablemos de tu tienda <span class=\"bg-gradient-to-r from-orange-600 via-amber-500 to-orange-500 bg-clip-text text-transparent\">o proyecto</span>",
    "contact.sub": "Respondo con rapidez el mismo día. Escríbeme a mi correo comercial oficial o completa los detalles de tu web en el formulario.",
    "contact.vipOfficial": "Canal VIP Oficial",
    "contact.vipSpeed": "Respuesta Rápida ⚡",
    "contact.vipEmailTitle": "Correo Comercial",
    "contact.vipEmailDesc": "Canal directo prioritario para acuerdos comerciales, revisión de propuestas, presupuestos de packs y guiones publicitarios. Respondo el mismo día.",
    "contact.copyBtn": "Copiar Correo",
    "contact.writeBtn": "Escribir Email",
    "contact.tiktokBadge": "TikTok DM",
    "contact.tiktokTitle": "TikTok Oficial",
    "contact.tiktokDesc": "301.7K seguidores • Mensajes directos para marcas.",
    "contact.tiktokBtn": "Ver Perfil",
    "contact.ytBadge": "YouTube",
    "contact.ytTitle": "Canal Oficial",
    "contact.ytDesc": "295K suscriptores • Videos largos y Shorts de Roblox.",
    "contact.ytBtn": "Ver Canal",
    "contact.formTitle": "Envía tu propuesta o consulta",
    "contact.formBadge": "Sin compromiso",
    "contact.formSub": "Indícame qué buscas y te respondo rápidamente con ideas y presupuesto adaptado a tu tienda.",
    "contact.serviceLabel": "¿Qué tipo de promoción necesitas? <span class=\"text-stone-400 font-normal\">(toca una opción)</span>",
    "contact.chip1": "1 Video Promocional",
    "contact.chip2": "Pack de Videos",
    "contact.chip3": "Dinámica o Sorteo",
    "contact.chip4": "Alianza a Largo Plazo",
    "contact.storeLabel": "Nombre o link de tu tienda/página web *",
    "contact.storePlaceholder": "Tu tienda, marca o sitio web",
    "contact.contactLabel": "Tu correo o método de contacto *",
    "contact.contactPlaceholder": "Tu correo o usuario de Discord / TikTok",
    "contact.detailsLabel": "Detalles del video o campaña *",
    "contact.detailsPlaceholder": "Cuéntame sobre tu proyecto o qué deseas promocionar...",
    "contact.submitBtn": "Mandar propuesta ahora",
    "contact.feedbackSuccess": "✅ ¡Mensaje recibido! Te responderé muy pronto.",
    "footer.creatorLabel": "Creador de Contenido",
    "footer.creditsTitle": "Créditos",
    "footer.builtBy": "Página hecha por",
    "footer.copy": "© 2026 ChrisMm2 • Todos los derechos reservados",
    "modal.format": "Formato vertical 1080x1920 (TikTok / Shorts)",
    "modal.driveBtn": "Ver video en Google Drive",
    "modal.fallback": "Tu navegador no soporta video."
  },
  en: {
    "nav.subtitle": "VIDEOS FOR ROBLOX STORES",
    "nav.videos": "Store Videos",
    "nav.metrics": "Metrics",
    "nav.brands": "Brands",
    "nav.payments": "Payment Methods",
    "nav.contact": "Contact",
    "nav.available": "Available",
    "nav.contactBtn": "Contact",
    "sound.btn": "🔊 SOUND ON",
    "hero.online": "Online",
    "hero.creator": "CONTENT CREATOR",
    "hero.accepting": "🟢 Accepting Stores",
    "hero.title": "Connecting stores and brands with the most active community in <span class=\"font-serif italic font-normal text-[1.12em] bg-gradient-to-r from-orange-600 via-amber-500 to-orange-500 bg-clip-text text-transparent\">Roblox</span>.",
    "hero.intro": "Hi! I'm Chris (<span class=\"font-bold text-[#1c120c] font-heading\">@chrixmm2</span>). I create daily content and high-impact promotions for thousands of Roblox players. I help virtual stores and sites gain organic exposure and build trust with an active community of over <span class=\"text-orange-600 font-extrabold font-heading\">+610,000</span> followers.",
    "hero.ctaVideos": "Watch store videos",
    "hero.ctaContact": "Send Direct Proposal",
    "hero.communityTitle": "COMMUNITY &amp; OFFICIAL CHANNELS",
    "hero.verifiedAudience": "VERIFIED AUDIENCE",
    "social.tiktokSub": "Followers • 6.6M Likes",
    "social.youtubeSub": "Subscribers • 148 Videos",
    "social.robloxSub": "Followers • Verified",
    "portal.scrollHint": "Scroll to explore store video campaigns",
    "portal.mobileSwipe": "Swipe to navigate videos",
    "portal.badge": "PAST WORK &amp; OFFICIAL CAMPAIGNS",
    "portal.title": "Examples of my work with stores and websites I've collaborated with",
    "metrics.badge": "METRICS &amp; REAL IMPACT",
    "metrics.title": "From video views to <span class=\"font-serif italic font-normal text-[1.1em] bg-gradient-to-r from-orange-600 via-amber-500 to-orange-500 bg-clip-text text-transparent\">active buyers</span>",
    "metrics.sub": "Hook strategy in the first 3 seconds and high retention engineered to convert Roblox visitors into paying customers for your store.",
    "metrics.socialProof": "Social Proof &amp; Campaign Performance",
    "metrics.growth": "+34.8% Organic Growth",
    "metrics.audienceLabel": "Verified Active Audience",
    "metrics.audienceDesc": "Daily combined reach on TikTok (301.7K) • YouTube (295K) • Roblox (13.7K) • Over 6.6M total likes",
    "metrics.chartPeak": "Current Peak: <strong class=\"text-amber-300 font-extrabold\">+610K Community</strong>",
    "metrics.t1": "Q1: Launch",
    "metrics.t2": "Q2: Organic Traction",
    "metrics.t3": "Q3: Store Partnerships",
    "metrics.t4": "Today: +610K Active",
    "metrics.retention": "3s Hook Retention",
    "metrics.retentionSub": "+14% vs average",
    "metrics.guarantee": "Full Guarantee",
    "metrics.guaranteeSub": "100% Verified",
    "metrics.compliance": "100% Fulfillment",
    "bento.official": "Official",
    "bento.creator": "@Chrixmm2 • Content Creator",
    "bento.quote": "I scale reach and sales for Roblox stores creating <span class=\"font-bold text-orange-700\">high-retention videos</span> that truly connect with the community and <span class=\"font-serif italic text-base text-stone-900\">turn viewers into buyers</span>.",
    "bento.hookTitle": "3s Viral Hooks",
    "bento.hookDesc": "Peak retention and pacing engineered for TikTok and Shorts algorithms.",
    "bento.buyerTitle": "Purchasing Audience",
    "bento.buyerDesc": "Active Roblox player base ready to buy Robux, knives, and exclusive items.",
    "bento.channels": "Channels:",
    "bento.quality": "⭐ 100% Quality",
    "marcas.badge": "TRUST &amp; TRACK RECORD",
    "marcas.title": "Brands satisfied with <span class=\"bg-gradient-to-r from-orange-600 via-amber-500 to-orange-500 bg-clip-text text-transparent\">Chris's work</span>",
    "marcas.sub": "Official advertising campaigns for top marketplaces, MM2 item stores, and Robux trading platforms.",
    "guarantee.badge": "COMMITMENT TO STORES",
    "guarantee.title": "Guarantee and security for your store or website",
    "guarantee.sub": "I know reputation is everything for an online store. When working with your brand, I ensure the video builds buyer confidence:",
    "guarantee.item1": "<strong>Clean site recording:</strong> I showcase your platform professionally, demonstrating how easy and fast it is to purchase or redeem coupons.",
    "guarantee.item2": "<strong>Revisions included:</strong> If you need to update a discount code, audio, or video detail, I adjust it promptly with no hassle.",
    "guarantee.item3": "<strong>Punctual delivery:</strong> Strict and reliable adherence to agreed schedules for your promotional launches.",
    "payments.badge": "Secure Payments",
    "payments.title": "Payment methods accepted",
    "payments.sub": "I accept direct payments through the 3 most convenient options:",
    "contact.badge": "DIRECT CHANNEL &amp; FAST PROPOSALS",
    "contact.title": "Let's talk about your store <span class=\"bg-gradient-to-r from-orange-600 via-amber-500 to-orange-500 bg-clip-text text-transparent\">or project</span>",
    "contact.sub": "I reply quickly on the same day. Write to my official business email or share your website details using the form.",
    "contact.vipOfficial": "Official VIP Channel",
    "contact.vipSpeed": "Fast Response ⚡",
    "contact.vipEmailTitle": "Business Email",
    "contact.vipEmailDesc": "Priority direct channel for sponsorship deals, proposal reviews, pack pricing, and advertising scripts. Same-day response guaranteed.",
    "contact.copyBtn": "Copy Email",
    "contact.writeBtn": "Write Email",
    "contact.tiktokBadge": "TikTok DM",
    "contact.tiktokTitle": "Official TikTok",
    "contact.tiktokDesc": "301.7K followers • Direct messages for brands & stores.",
    "contact.tiktokBtn": "View Profile",
    "contact.ytBadge": "YouTube",
    "contact.ytTitle": "Official Channel",
    "contact.ytDesc": "295K subscribers • Long videos & Roblox Shorts.",
    "contact.ytBtn": "View Channel",
    "contact.formTitle": "Send your proposal or inquiry",
    "contact.formBadge": "No commitment",
    "contact.formSub": "Tell me what you need and I will reply promptly with ideas and custom pricing for your store.",
    "contact.serviceLabel": "What kind of promotion do you need? <span class=\"text-stone-400 font-normal\">(select an option)</span>",
    "contact.chip1": "1 Promo Video",
    "contact.chip2": "Video Pack (Campaign)",
    "contact.chip3": "Giveaway / Dynamic",
    "contact.chip4": "Long-term Partnership",
    "contact.storeLabel": "Store name or website link *",
    "contact.storePlaceholder": "Your store, brand or website",
    "contact.contactLabel": "Your email or contact handle *",
    "contact.contactPlaceholder": "Your email or Discord / TikTok handle",
    "contact.detailsLabel": "Video or campaign details *",
    "contact.detailsPlaceholder": "Tell me about your project or what you want to promote...",
    "contact.submitBtn": "Send proposal now",
    "contact.feedbackSuccess": "✅ Message received! I will reply very soon.",
    "footer.creatorLabel": "Content Creator",
    "footer.creditsTitle": "Credits",
    "footer.builtBy": "Website built by",
    "footer.copy": "© 2026 ChrisMm2 • All rights reserved",
    "modal.format": "Vertical format 1080x1920 (TikTok / Shorts)",
    "modal.driveBtn": "Watch video on Google Drive",
    "modal.fallback": "Your browser does not support video playback."
  }
};

const portfolioVideos = [
  {
    id: 1,
    category: "robux",
    site: "Bonoxs",
    siteUrl: "https://bonoxs.com/ve",
    status: "confirmed",
    badge: "Gift Cards & Robux",
    badge_en: "Gift Cards & Robux",
    title: "Promoción de recargas y gift cards de Roblox para Latinoamérica",
    title_en: "Roblox recharges & gift cards promo for Latin America",
    format: "TikTok 9:16",
    logoSrc: "assets/brands/bonoxs-favicon.ico",
    driveLink: "https://drive.google.com/file/d/1vsRkUGK6gnWfOTGY07NXdEMn4CBapCyD/view?usp=drivesdk",
    videoSrc: "assets/videos/Bonoxs.mp4"
  },
  {
    id: 2,
    category: "items",
    site: "Sellitems.gg",
    siteUrl: "https://sellitems.gg/",
    status: "confirmed",
    badge: "Pets & Items Market",
    badge_en: "Pets & Items Market",
    title: "Comprando Huge Pets y tradeando ítems exclusivos de Pet Simulator 99",
    title_en: "Buying Huge Pets & trading exclusive Pet Simulator 99 items",
    format: "TikTok 9:16",
    logoSrc: "assets/brands/sellitems-favicon.ico",
    driveLink: "https://drive.google.com/file/d/13WH1dmTemyAOHpNAzGIOiQXihuD_mRls/view?usp=drivesdk",
    videoSrc: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4"
  },
  {
    id: 3,
    category: "robux",
    site: "Roswap",
    siteUrl: "https://roswap.com/es",
    status: "confirmed",
    badge: "Robux Swap & Ventas",
    badge_en: "Robux Swap & Sales",
    title: "Tutorial del sistema de intercambio y compra de Robux paso a paso",
    title_en: "Step-by-step tutorial on swapping & buying Robux",
    format: "TikTok 9:16",
    logoSrc: "assets/brands/roswap-favicon.ico",
    driveLink: "https://drive.google.com/file/d/17PM-JkoNBTshEhseKej2a5O5QX2Tyz3b/view?usp=drivesdk",
    videoSrc: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4"
  },
  {
    id: 4,
    category: "mm2",
    site: "MM2Shop",
    siteUrl: "https://mm2.shop/",
    status: "confirmed",
    badge: "Godlies & Ancients MM2",
    badge_en: "Godlies & Ancients MM2",
    title: "Showcase de armas Godlys más baratas y proceso de entrega rápida",
    title_en: "Cheapest MM2 Godlys weapons showcase & fast delivery process",
    format: "Shorts 9:16",
    logoHtml: `<div class="w-full h-full rounded-lg bg-[#0c0a09] border border-red-600/50 flex items-center justify-center select-none font-heading font-black tracking-tight text-white leading-none shadow-xs"><span class="text-[10px]">MM</span><span class="text-red-500 text-[12px] font-black ml-0.5 transform -translate-y-px">2</span></div>`,
    driveLink: "https://drive.google.com/file/d/1R0I9pTIvSSPnb5msRJ8iOEZT6HLmw1qN/view?usp=drivesdk",
    videoSrc: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
  },
  {
    id: 5,
    category: "mm2",
    site: "Bloxswaps",
    siteUrl: "https://bloxswaps.com/es/trade-mm2",
    status: "confirmed",
    badge: "Trade MM2 24/7",
    badge_en: "MM2 Trading 24/7",
    title: "Cómo tradear armas y Godlys de MM2 al instante en menos de 2 minutos sin estafas",
    title_en: "How to trade MM2 Godlys & weapons instantly under 2 min scam-free",
    format: "TikTok 9:16",
    logoSrc: "assets/brands/bloxswaps-favicon.ico",
    driveLink: "https://drive.google.com/file/d/1XRuCfoU-_AkR2jTE8Q2JPqQgoQU3WERR/view?usp=drivesdk",
    videoSrc: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4"
  },
  {
    id: 6,
    isPendingCard: true,
    category: "all",
    site: "Collabs pendientes",
    site_en: "Pending Collabs",
    title: "Próximas colaboraciones oficiales en preparación",
    title_en: "Upcoming official brand collaborations in production",
    pendingBrands: [
      {
        name: "Starpets.gg",
        url: "https://starpets.gg/adopt-me",
        tag: "Adopt Me & Pet Simulator 99",
        tag_en: "Adopt Me & Pet Simulator 99",
        desc: "Dinámicas de trading de mascotas y sorteos para la comunidad.",
        desc_en: "Dynamic pet trading and community giveaways.",
        badge: "En producción",
        badge_en: "In production",
        badgeClass: "bg-emerald-50 text-emerald-800 border border-emerald-200",
        badgeDot: "bg-emerald-500",
        logoSrc: "assets/brands/starpets-logo.png"
      },
      {
        name: "Eldorado.gg",
        url: "https://www.eldorado.gg/",
        tag: "Marketplace de Cuentas & Robux",
        tag_en: "Accounts & Robux Marketplace",
        desc: "Ofertas seguras de ítems legendarios y entrega rápida.",
        desc_en: "Safe deals on rare items and fast delivery.",
        badge: "Por confirmar",
        badge_en: "To be confirmed",
        badgeClass: "bg-amber-50 text-amber-800 border border-amber-200",
        badgeDot: "bg-amber-500",
        logoSrc: "assets/brands/eldorado-logo.png"
      },
      {
        name: "Tipsy.chat",
        url: "https://tipsy.chat/",
        tag: "Historias Interactivas con IA",
        tag_en: "Interactive AI Storytelling",
        desc: "Roleplay interactivo con IA y dinámicas con la comunidad gamer.",
        desc_en: "Interactive AI roleplay and gaming community events.",
        badge: "Próximamente",
        badge_en: "Coming soon",
        badgeClass: "bg-purple-50 text-purple-800 border border-purple-200",
        badgeDot: "bg-purple-500",
        logoSrc: "assets/brands/tipsy-square-logo.svg"
      }
    ]
  }
];

function setLanguage(lang) {
  if (lang !== 'es' && lang !== 'en') lang = 'en';
  currentLang = lang;
  try {
    localStorage.setItem('chris_lang', lang);
  } catch (e) {}

  document.documentElement.lang = lang;
  document.title = lang === 'en'
    ? "ChrisMm2 • Video Ads & Promotions for Roblox Stores"
    : "ChrisMm2 • Videos Publicitarios para Tiendas de Roblox";

  const dict = i18nDictionary[lang] || i18nDictionary.en;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key] !== undefined) {
      el.innerHTML = dict[key];
    }
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (dict[key] !== undefined) {
      el.placeholder = dict[key];
    }
  });

  document.querySelectorAll('#langSwitch .lang-btn').forEach(btn => {
    const btnLang = btn.getAttribute('data-lang');
    btn.classList.toggle('is-active', btnLang === lang);
  });

  if (typeof updateSoundBtnText === 'function') {
    updateSoundBtnText();
  }

  renderVideos();

  if (window.lucide && typeof window.lucide.createIcons === 'function') {
    window.lucide.createIcons();
  }
}

function setupLanguageSwitch() {
  const switchWrap = document.getElementById('langSwitch');
  if (!switchWrap) return;

  const buttons = switchWrap.querySelectorAll('.lang-btn');
  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      const selectedLang = btn.getAttribute('data-lang');
      if (selectedLang && selectedLang !== currentLang) {
        if (typeof playUiSound === 'function') {
          playUiSound('chip');
        }
        setLanguage(selectedLang);
      }
    });
  });
}

let currentFilter = "all";
let scrollListenerAttached = false;

// Control de restauración de scroll para asegurar que la página empiece en el Hero
if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual';
}

window.addEventListener("load", () => {
  if (!window.location.hash || window.location.hash === "#tiendas" || window.location.hash === "#") {
    if (window.scrollY < 120) {
      window.scrollTo(0, 0);
    }
  }
});

/**
 * Motor de Scroll Suave Cinematográfico (Lenis Engine)
 * Elimina la tosquedad del scroll por defecto de Windows y añade inercia suave estilo Apple/Linear
 */
function setupSmoothScroll() {
  if (typeof Lenis === "undefined") {
    document.documentElement.style.scrollBehavior = "smooth";
    return;
  }

  // Desactivar scroll-behavior nativo para permitir interpolación matemática continua
  document.documentElement.classList.remove("scroll-smooth");
  document.documentElement.classList.add("lenis");

  const lenis = new Lenis({
    lerp: 0.12, // Rápido, ágil y sedoso: responde al instante sin retrasar el scroll de la página
    wheelMultiplier: 1.0,
    touchMultiplier: 1.0,
    smoothWheel: true,
    orientation: 'vertical',
    gestureOrientation: 'vertical',
    infinite: false,
  });

  window.lenis = lenis;

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);

  // Desplazamiento cinematográfico para todos los enlaces internos (#tiendas, #contacto, etc.)
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (!targetId || targetId === '#') return;
      const targetEl = document.querySelector(targetId);
      if (targetEl) {
        e.preventDefault();
        lenis.scrollTo(targetEl, {
          offset: -10,
          duration: 0.85,
          easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
        });
      }
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  setupSmoothScroll();
  setupLanguageSwitch();
  setLanguage(currentLang);
  setupFilterTabs();
  setupModal();
  setupClipboardCopy();
  setupContactForm();
  setupTopProgressBar();
  setupEmbersCanvas();
  setupSoundFX();
  setupVideoSectionDuckObserver();
  setupScrollTransitionSounds();
  setupScrollReveals();
  setupHeroBannerScroll();
  setupViralGraphAnimation();
  setupNavScrollSpy();

  if (window.lucide) window.lucide.createIcons();
});

// ==========================================================================
// CONTROLADOR DE NAVEGACIÓN TÁCTIL EN MÓVIL (SWIPE HORIZONTAL 1:1)
// ==========================================================================
let mobileActiveIndex = 0;
let mobileCurrentFloat = 0;

function renderMobileDots() {
  const dotsContainer = document.getElementById("mobileCarouselDots");
  if (!dotsContainer) return;
  const filtered = currentFilter === "all" 
    ? portfolioVideos 
    : portfolioVideos.filter(v => v.category === currentFilter);
  const count = filtered.length;
  
  dotsContainer.innerHTML = Array.from({ length: count }, (_, i) => `
    <button 
      type="button" 
      class="mobile-dot-btn ${i === mobileActiveIndex ? 'is-active' : ''}" 
      onclick="goToMobileIndex(${i})"
      aria-label="Ir al video ${i + 1}"
    ></button>
  `).join("");

  updateMobileArrows();
}

function updateMobileDots(activeIndex) {
  const dots = document.querySelectorAll("#mobileCarouselDots .mobile-dot-btn");
  dots.forEach((dot, idx) => {
    if (idx === activeIndex) {
      dot.classList.add("is-active");
    } else {
      dot.classList.remove("is-active");
    }
  });
  updateMobileArrows();
}

function updateMobileArrows() {
  const prevBtn = document.getElementById("mobilePrevBtn");
  const nextBtn = document.getElementById("mobileNextBtn");
  const filtered = currentFilter === "all" 
    ? portfolioVideos 
    : portfolioVideos.filter(v => v.category === currentFilter);
  const count = filtered.length;

  if (prevBtn) {
    if (mobileActiveIndex <= 0) {
      prevBtn.classList.add("opacity-30", "pointer-events-none");
    } else {
      prevBtn.classList.remove("opacity-30", "pointer-events-none");
    }
  }
  if (nextBtn) {
    if (mobileActiveIndex >= count - 1) {
      nextBtn.classList.add("opacity-30", "pointer-events-none");
    } else {
      nextBtn.classList.remove("opacity-30", "pointer-events-none");
    }
  }
}

window.goToMobileIndex = function(index) {
  animateMobileToIndex(index);
};

window.goToMobileNext = function() {
  animateMobileToIndex(mobileActiveIndex + 1);
};

window.goToMobilePrev = function() {
  animateMobileToIndex(mobileActiveIndex - 1);
};

function animateMobileToIndex(targetIndex) {
  const filtered = currentFilter === "all" 
    ? portfolioVideos 
    : portfolioVideos.filter(v => v.category === currentFilter);
  const count = filtered.length;
  if (count <= 0) return;

  targetIndex = Math.max(0, Math.min(targetIndex, count - 1));
  const fromIndex = mobileCurrentFloat;
  mobileActiveIndex = targetIndex;
  updateMobileDots(targetIndex);

  if (Math.abs(fromIndex - targetIndex) < 0.01) {
    mobileCurrentFloat = targetIndex;
    update3DCarousel(count > 1 ? targetIndex / (count - 1) : 0);
    return;
  }

  const startTime = performance.now();
  const duration = 280; // Milisegundos de transición elástica fluida

  function stepAnim(now) {
    const elapsed = now - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const ease = 1 - Math.pow(1 - progress, 3); // Cubic ease-out
    const currentVal = fromIndex + (targetIndex - fromIndex) * ease;
    mobileCurrentFloat = currentVal;
    update3DCarousel(count > 1 ? currentVal / (count - 1) : 0);

    if (progress < 1) {
      requestAnimationFrame(stepAnim);
    } else {
      mobileCurrentFloat = targetIndex;
      update3DCarousel(count > 1 ? targetIndex / (count - 1) : 0);
    }
  }

  requestAnimationFrame(stepAnim);

  if (typeof playUiSound === "function") {
    playUiSound("slide");
  }
}

function renderVideos() {
  const container = document.getElementById("carousel-track");
  if (!container) return;

  const filtered = currentFilter === "all" 
    ? portfolioVideos 
    : portfolioVideos.filter(v => v.category === currentFilter);

  container.innerHTML = filtered.map((video, index) => {
    if (video.isPendingCard) {
      return `
        <div 
          class="carousel-3d-card pending-collabs-card group flex flex-col justify-between"
          data-video-id="${video.id}"
          data-index="${index}"
          onclick="handleCardClick(${video.id}, ${index}, event)"
        >
          <!-- Capa de atenuación de profundidad para tarjetas secundarias -->
          <div class="card-depth-overlay"></div>

          <!-- HEADER: LIMPIO, ELEGANTE Y ARMONIOSO (CERO SATURACIÓN) -->
          <div class="pending-collabs-header px-3 py-2 sm:px-3.5 sm:py-2.5 flex items-center justify-between flex-shrink-0">
            <div class="flex items-center gap-2 min-w-0">
              <div class="w-7 h-7 sm:w-8 sm:h-8 rounded-xl bg-orange-500 text-white flex items-center justify-center font-black text-xs shadow-xs flex-shrink-0">
                <svg class="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-none stroke-current" stroke-width="2.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
              </div>
              <div class="min-w-0 text-left">
                <h4 class="font-heading font-black text-xs sm:text-sm text-[#1c120c] leading-tight truncate">
                  ${currentLang === 'en' ? 'Upcoming Collabs' : 'Próximas Collabs'}
                </h4>
                <span class="text-[9px] sm:text-[9.5px] text-stone-500 font-heading font-semibold block truncate leading-tight">
                  ${currentLang === 'en' ? 'Official alliances in production' : 'Alianzas oficiales en producción'}
                </span>
              </div>
            </div>
            <span class="inline-flex items-center gap-1.5 px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full text-[8.5px] sm:text-[9px] font-heading font-extrabold bg-orange-100/80 text-orange-800 border border-orange-200 shadow-2xs flex-shrink-0">
              <span class="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse"></span>
              <span>${currentLang === 'en' ? '3 Stores' : '3 Tiendas'}</span>
            </span>
          </div>

          <!-- CUERPO DE LA TARJETA: 3 MARCAS ELEGANTES Y LEGIBLES -->
          <div class="pending-collabs-body flex-grow p-2 sm:p-3 flex flex-col justify-between gap-1.5 sm:gap-2.5 overflow-y-auto">
            ${video.pendingBrands.map(brand => `
              <div class="pending-brand-card p-2 sm:p-2.5 rounded-xl sm:rounded-2xl flex flex-col justify-between flex-1 min-h-0 group/brand">
                <!-- Fila 1: Logo, Nombre, Categoría y Badge de Estado -->
                <div class="flex items-center justify-between gap-1.5">
                  <div class="flex items-center gap-2 min-w-0">
                    <div class="w-7 h-7 sm:w-8 sm:h-8 rounded-lg sm:rounded-xl p-0.5 sm:p-1 flex items-center justify-center flex-shrink-0 border border-stone-200 bg-white shadow-2xs group-hover/brand:scale-105 transition-transform">
                      <img src="${brand.logoSrc}" alt="Logo ${brand.name}" class="w-full h-full object-contain">
                    </div>
                    <div class="min-w-0 text-left leading-tight">
                      <div class="font-heading font-black text-[11px] sm:text-xs text-[#1c120c] truncate flex items-center gap-1">
                        <span>${brand.name}</span>
                        <svg class="w-3 h-3 text-blue-500 fill-current flex-shrink-0" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
                      </div>
                      <span class="text-[8.5px] sm:text-[9.5px] text-stone-500 font-heading font-medium truncate block">
                        ${currentLang === 'en' && brand.tag_en ? brand.tag_en : brand.tag}
                      </span>
                    </div>
                  </div>
                  <span class="inline-flex items-center gap-1 text-[7.5px] sm:text-[8.5px] font-heading font-bold uppercase px-1.5 py-0.5 rounded-full border shadow-2xs flex-shrink-0 ${brand.badgeClass}">
                    <span class="w-1 h-1 rounded-full ${brand.badgeDot} animate-pulse"></span>
                    <span>${currentLang === 'en' && brand.badge_en ? brand.badge_en : brand.badge}</span>
                  </span>
                </div>

                <!-- Fila 2: Descripción breve -->
                <p class="text-[8.5px] sm:text-[9.5px] text-stone-600 font-heading font-medium leading-tight my-0.5 sm:my-1 text-left line-clamp-2">
                  ${currentLang === 'en' && brand.desc_en ? brand.desc_en : brand.desc}
                </p>

                <!-- Fila 3: Footer con Campaña Oficial y Enlace Limpio -->
                <div class="flex items-center justify-between pt-1 border-t border-stone-100 text-left mt-auto">
                  <span class="text-[8px] sm:text-[8.5px] text-stone-500 font-heading font-semibold flex items-center gap-1">
                    <span class="w-1 h-1 rounded-full bg-orange-500"></span>
                    <span>${currentLang === 'en' ? 'Official campaign' : 'Campaña oficial'}</span>
                  </span>
                  <a 
                    href="${brand.url}" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    onclick="event.stopPropagation()"
                    class="inline-flex items-center gap-1 text-[8.5px] sm:text-[9.5px] font-heading font-bold text-orange-600 hover:text-orange-700 transition-colors group-hover/brand:translate-x-0.5 transition-transform"
                  >
                    <span>${currentLang === 'en' ? 'Official website' : 'Sitio oficial'}</span>
                    <svg class="w-2.5 h-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>
                  </a>
                </div>
              </div>
            `).join("")}
          </div>

          <!-- FOOTER: ELEGANTE Y CÁLIDO -->
          <div class="pending-collabs-footer py-2 px-3 sm:py-2.5 sm:px-4 flex items-center justify-between flex-shrink-0">
            <div class="text-left leading-tight">
              <span class="text-[8.5px] sm:text-[9px] font-heading font-semibold text-stone-500 block">
                ${currentLang === 'en' ? 'Got a store or project?' : '¿Tienes una tienda o proyecto?'}
              </span>
              <span class="text-[11px] sm:text-xs font-heading font-black text-[#1c120c] block">
                ${currentLang === 'en' ? 'Add your brand to the list' : 'Suma tu marca a la lista'}
              </span>
            </div>
            <a 
              href="#contacto" 
              onclick="event.stopPropagation()"
              class="btn-shimmer py-1.5 px-3 sm:py-2 sm:px-3.5 rounded-xl bg-gradient-to-r from-orange-600 to-amber-500 hover:from-orange-500 hover:to-amber-400 text-white font-heading font-extrabold text-[10px] sm:text-[11px] tracking-wide shadow-sm hover:scale-105 active:scale-95 transition-all flex items-center gap-1 flex-shrink-0"
            >
              <span>${currentLang === 'en' ? 'Contact' : 'Contactar'}</span>
              <svg class="w-2.5 h-2.5 sm:w-3 sm:h-3 gang-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
            </a>
          </div>

        </div>
      `;
    }

    return `
      <div 
        class="carousel-3d-card group shadow-md shadow-orange-950/5 cursor-pointer"
        data-video-id="${video.id}"
        data-index="${index}"
        onclick="handleCardClick(${video.id}, ${index}, event)"
      >
        <!-- Capa de atenuación de profundidad para tarjetas secundarias -->
        <div class="card-depth-overlay"></div>

        <!-- LOGO Y MARCA POR ENCIMA DEL VIDEO (SIN 'OFICIAL' Y CON LOGO REAL) -->
        <div class="brand-badge-header px-3.5 py-2.5 flex items-center justify-between border-b border-orange-100/90 flex-shrink-0">
          <!-- Logo Real y Nombre de Marca -->
          <div class="flex items-center gap-2.5 min-w-0">
            <div class="w-9 h-9 rounded-xl p-1 flex items-center justify-center flex-shrink-0 border border-stone-200/90 bg-white shadow-2xs group-hover:scale-105 transition-transform overflow-hidden">
              ${video.logoHtml ? video.logoHtml : `<img src="${video.logoSrc}" alt="Logo ${video.site}" class="w-full h-full object-contain">`}
            </div>
            <div class="min-w-0 text-left">
              <h4 class="font-heading font-black text-xs sm:text-sm text-[#1c120c] truncate leading-tight">${video.site === 'MM2Shop' ? 'MM<span class="text-red-600 font-black text-[1.08em]">2</span>Shop' : video.site}</h4>
              <span class="text-[9px] sm:text-[10px] text-stone-500 font-heading font-semibold truncate block leading-tight">${currentLang === 'en' && video.badge_en ? video.badge_en : video.badge}</span>
            </div>
          </div>

          <!-- Enlace Directo al Sitio Web (Sin el badge 'Oficial') -->
          <a 
            href="${video.siteUrl}" 
            target="_blank" 
            rel="noopener noreferrer" 
            onclick="event.stopPropagation()"
            class="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[9.5px] font-heading font-bold text-orange-600 hover:text-orange-700 bg-orange-50/90 hover:bg-orange-100 border border-orange-200/80 shadow-2xs transition-all hover:scale-105 flex-shrink-0"
            title="${currentLang === 'en' ? 'Visit website' : 'Visitar sitio web'}"
          >
            <span>${currentLang === 'en' ? 'Website' : 'Sitio web'}</span>
            <svg class="w-2.5 h-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>
          </a>
        </div>

        <!-- MARCO VERTICAL 9:16 (Video 100% Limpio y Despejado) -->
        <div class="tiktok-frame relative overflow-hidden flex-shrink-0">
          <video 
            class="carousel-video-element absolute inset-0 w-full h-full object-cover pointer-events-none transition-opacity duration-300"
            loop 
            muted 
            autoplay
            playsinline 
            preload="auto"
            src="${video.videoSrc || ''}"
          ></video>

          <!-- Botón de sonido discreto en esquina inferior derecha (estilo TikTok/Reels) -->
          <div class="corner-sound-btn absolute bottom-3 right-3 z-20 flex items-center justify-center w-8 h-8 rounded-full bg-black/60 text-white border border-white/20 shadow-lg backdrop-blur-md transition-all duration-300 pointer-events-none">
            <span class="sound-icon-holder text-xs">🔇</span>
          </div>
        </div>

      </div>
    `;
  }).join("");

  // Reconfigurar scroll horizontal y posicionamiento 3D
  activeCarouselStep = 0;
  mobileActiveIndex = 0;
  mobileCurrentFloat = 0;
  setupHorizontalScroll();
  renderMobileDots();
  if (window.innerWidth < 768) {
    updateMobileDots(0);
    update3DCarousel(0);
  }
  ensureCarouselVideosPlaying();
  if (window.lucide) window.lucide.createIcons();
}

/**
 * Actualiza la apariencia visual del botón de sonido discreto en la tarjeta.
 */
function updateCardSoundUI(card, isUnmuted) {
  if (!card) return;
  const soundBtn = card.querySelector(".corner-sound-btn");
  if (!soundBtn) return;

  if (isUnmuted) {
    soundBtn.innerHTML = `
      <span class="flex items-center gap-0.5">
        <span class="w-0.5 h-2.5 bg-orange-400 animate-pulse rounded-full"></span>
        <span class="w-0.5 h-3.5 bg-orange-500 animate-pulse rounded-full"></span>
        <span class="w-0.5 h-2 bg-amber-300 animate-pulse rounded-full"></span>
      </span>
      <span class="text-xs">🔊</span>
    `;
    soundBtn.className = "corner-sound-btn absolute bottom-3 right-3 z-20 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-orange-950/90 text-white border border-orange-500 shadow-xl shadow-orange-500/30 backdrop-blur-md transition-all duration-300 pointer-events-none scale-105";
  } else {
    soundBtn.innerHTML = `
      <span class="sound-icon-holder text-xs">🔇</span>
    `;
    soundBtn.className = "corner-sound-btn absolute bottom-3 right-3 z-20 flex items-center justify-center w-8 h-8 rounded-full bg-black/60 text-white border border-white/20 shadow-lg backdrop-blur-md transition-all duration-300 pointer-events-none";
  }
}

/**
 * Garantiza que todos los videos del carrusel se estén reproduciendo continuamente en bucle.
 */
function ensureCarouselVideosPlaying() {
  const vids = document.querySelectorAll("#carousel-track video");
  vids.forEach(v => {
    if (v.paused) {
      const card = v.closest('.carousel-3d-card');
      if (!card || !card.classList.contains('is-video-unmuted')) {
        v.muted = true;
      }
      const p = v.play();
      if (p !== undefined) {
        p.catch(() => {});
      }
    }
  });
}

/**
 * Manejador de click en las tarjetas de video:
 * Al estar al frente y darle clic, el video se desmutea y sigue exactamente por donde iba (sin pausarse).
 */
window.handleCardClick = function(id, index, event) {
  if (event.target.closest('a')) return;

  const isMobile = window.innerWidth < 768;
  const cards = document.querySelectorAll("#carousel-track .carousel-3d-card");
  const clickedCard = cards[index];
  if (!clickedCard) return;

  const video = portfolioVideos.find(v => v.id === id);
  if (video && video.isPendingCard) {
    const contacto = document.getElementById("contacto");
    if (contacto) {
      contacto.scrollIntoView({ behavior: "smooth" });
    }
    return;
  }

  // En móvil: si se toca una tarjeta lateral, llevarla suavemente al centro
  if (isMobile) {
    if (index !== mobileActiveIndex) {
      event.preventDefault();
      animateMobileToIndex(index);
      return;
    }
  } else {
    // En PC: si la tarjeta no está centrada al frente, centrarla primero
    if (!clickedCard.classList.contains("is-center-active")) {
      event.preventDefault();
      scrollToVideoIndex(index);
      return;
    }
  }

  // DESMUTEAR / MUTEAR SIN PAUSAR EL VIDEO (Continúa exactamente por donde va)
  const videoEl = clickedCard.querySelector("video");
  if (videoEl) {
    if (videoEl.muted) {
      // 1. Silenciar cualquier otro video del carrusel
      document.querySelectorAll("#carousel-track video").forEach(v => {
        if (v !== videoEl) {
          v.muted = true;
        }
      });
      document.querySelectorAll("#carousel-track .carousel-3d-card").forEach(c => {
        if (c !== clickedCard) {
          c.classList.remove("is-video-unmuted");
          updateCardSoundUI(c, false);
        }
      });

      // 2. Desmutear y mantener reproducción continua (sin pausar ni alterar currentTime)
      videoEl.muted = false;
      videoEl.volume = 1.0;
      if (videoEl.paused) {
        videoEl.play().catch(() => {});
      }

      clickedCard.classList.add("is-video-unmuted");
      updateCardSoundUI(clickedCard, true);

      // 3. Atenuar suavemente la música de fondo de la web
      duckBgMusic(350);

      if (typeof playUiSound === "function") {
        playUiSound("pop");
      }
    } else {
      // Re-silenciar el video sin pausarlo
      videoEl.muted = true;
      clickedCard.classList.remove("is-video-unmuted");
      updateCardSoundUI(clickedCard, false);

      // Restaurar música de fondo ambiental
      restoreBgMusic(500);

      if (typeof playUiSound === "function") {
        playUiSound("chip");
      }
    }
  }
};

window.scrollToCarouselStep = function(step) {
  const container = document.getElementById("carousel-scroll-container");
  if (!container) return;

  if (typeof playUiSound === "function") {
    playUiSound("slide");
  }

  const filtered = currentFilter === "all" 
    ? portfolioVideos 
    : portfolioVideos.filter(v => v.category === currentFilter);
  const count = filtered.length;
  if (count <= 0) return;

  const maxStep = count - 1;
  const targetStep = Math.max(0, Math.min(step, maxStep));
  const scrollDistance = container.offsetHeight - window.innerHeight;
  if (scrollDistance <= 0) return;

  const normalizedProgress = maxStep > 0 ? targetStep / maxStep : 0;
  const targetP = 0.20 + normalizedProgress * 0.80;
  const containerTop = container.getBoundingClientRect().top + window.scrollY;
  const targetY = containerTop + targetP * scrollDistance;

  const animDuration = 0.70;

  if (window.lenis) {
    window.lenis.scrollTo(targetY, {
      duration: animDuration,
      easing: (t) => 1 - Math.pow(1 - t, 3)
    });
  } else {
    window.scrollTo({
      top: targetY,
      behavior: "smooth"
    });
  }
};

window.scrollToVideoIndex = function(index) {
  if (window.innerWidth < 768) {
    animateMobileToIndex(index);
  } else {
    window.scrollToCarouselStep(index);
  }
};

function update3DCarousel(scrollHProgress) {
  const cards = document.querySelectorAll("#carousel-track .carousel-3d-card");
  if (!cards.length) return;

  const count = cards.length;
  if (count <= 0) return;

  // Parámetros responsivos de geometría 3D adaptados para móvil y desktop
  const isMobile = window.innerWidth < 768;
  const stepDistance = isMobile ? (window.innerWidth < 400 ? 172 : 192) : 310;
  const centerScale = isMobile ? 1.05 : 1.10;
  const sideScaleReduction = isMobile ? 0.18 : 0.22;
  const centerZ = isMobile ? 55 : 80;
  const sideZ = isMobile ? -65 : -85;
  const rotYAngle = isMobile ? 12 : 14;

  // Progreso directo y suave de 0 (Video 0 Bonoxs centrado) a count - 1 (último video)
  const activeFloatIndex = count > 1 ? scrollHProgress * (count - 1) : 0;

  const activeIntIndex = Math.min(Math.round(activeFloatIndex), count - 1);
  if (window._lastActiveVideoIndex !== undefined && window._lastActiveVideoIndex !== activeIntIndex) {
    // Si cambió la tarjeta activa, silenciar las tarjetas que ya no están al frente
    cards.forEach((c, idx) => {
      if (idx !== activeIntIndex) {
        const v = c.querySelector("video");
        if (v && !v.muted) {
          v.muted = true;
          c.classList.remove("is-video-unmuted");
          updateCardSoundUI(c, false);
        }
      }
    });

    // Si ninguna tarjeta quedó desmuteada, restaurar la música de fondo ambiental
    const hasUnmuted = Array.from(cards).some(c => c.classList.contains("is-video-unmuted"));
    if (!hasUnmuted && soundEnabled) {
      restoreBgMusic(400);
    }

    if (typeof playUiSound === "function") {
      playUiSound("video-scroll");
    }
  }
  window._lastActiveVideoIndex = activeIntIndex;
  if (isMobile) {
    updateMobileDots(activeIntIndex);
  }

  cards.forEach((card, index) => {
    const delta = index - activeFloatIndex;
    const absDelta = Math.abs(delta);

    // REGLA ESTRICTA DE 3 VIDEOS:
    // Solo se muestran en pantalla:
    // - (1) El video activo actual en el centro
    // - (2) El video anterior a la izquierda (si delta < 0)
    // - (3) El video siguiente a la derecha (si delta > 0)
    if (absDelta > 1.25) {
      card.style.display = "none";
      card.style.opacity = "0";
      card.style.visibility = "hidden";
      card.style.pointerEvents = "none";
      card.classList.remove("is-center-active");
      return;
    }

    card.style.display = "flex";

    let x = 0;
    let z = 0;
    let rotY = 0;
    let scale = 1;
    let opacity = 1;
    let zIndex = Math.max(1, Math.round(35 - absDelta * 12));

    if (absDelta < 0.15) {
      // 1. VIDEO ACTIVO EN EL CENTRO: Frontal Z, escala superior, nítido y cercano
      x = delta * stepDistance;
      z = centerZ - absDelta * centerZ;
      rotY = delta * 8;
      scale = centerScale - absDelta * 0.1;
      opacity = 1;
      card.classList.add("is-center-active");
    } else if (delta > 0) {
      // 2. SIGUIENTE VIDEO A LA DERECHA (solo 1 video visible)
      const step = Math.min(delta, 1.25);
      x = step * stepDistance;
      z = sideZ * step;
      rotY = -rotYAngle * step;
      scale = centerScale - sideScaleReduction * step;
      opacity = absDelta > 1.0 ? Math.max(0, 1 - (absDelta - 1.0) * 4) : 1;
      card.classList.remove("is-center-active");
    } else {
      // 3. VIDEO PREVIO A LA IZQUIERDA (solo 1 video visible)
      const step = Math.min(absDelta, 1.25);
      x = -step * stepDistance;
      z = sideZ * step;
      rotY = rotYAngle * step;
      scale = centerScale - sideScaleReduction * step;
      opacity = absDelta > 1.0 ? Math.max(0, 1 - (absDelta - 1.0) * 4) : 1;
      card.classList.remove("is-center-active");
    }

    if (opacity <= 0.02) {
      card.style.visibility = "hidden";
      card.style.pointerEvents = "none";
    } else {
      card.style.visibility = "visible";
      card.style.pointerEvents = "auto";
    }

    card.style.transform = `translate(-50%, -50%) translate3d(${x.toFixed(1)}px, 0, ${z.toFixed(1)}px) rotateY(${rotY.toFixed(1)}deg) scale(${scale.toFixed(3)})`;
    card.style.opacity = opacity.toFixed(3);
    card.style.zIndex = zIndex;
  });

  // Actualizar contador y barra de progreso
  const counter = document.getElementById("carousel-counter");
  if (counter && count > 0) {
    counter.textContent = `${activeIntIndex + 1} / ${count}`;
  }

  const progressBar = document.getElementById("carousel-progress-bar");
  if (progressBar && count > 0) {
    const pct = Math.min(100, Math.max(0, Math.round(scrollHProgress * 100)));
    progressBar.style.width = `${pct}%`;
  }
}

let targetProgress = 0;
let currentProgress = 0;
let isTicking = false;
let isWheelSnapping = false;
let wheelCooldownTimer = null;
let settleTimer = null;
let activeCarouselStep = 0;

function handleCarouselWheel(e) {
  if (window.innerWidth < 768) return;

  const container = document.getElementById("carousel-scroll-container");
  if (!container) return;

  const rect = container.getBoundingClientRect();
  const scrollDistance = container.offsetHeight - window.innerHeight;
  if (scrollDistance <= 0) return;

  // Solo actuar si la sección fija del carrusel está visible y fijada (pinned)
  const inPinnedZone = rect.top <= 20 && rect.bottom >= window.innerHeight - 20;
  if (!inPinnedZone) return;

  // Si estamos en la zona de capas iniciales (antes de entrar al carrusel)
  if (targetProgress < 0.16) return;

  const filtered = currentFilter === "all" 
    ? portfolioVideos 
    : portfolioVideos.filter(v => v.category === currentFilter);
  const count = filtered.length;
  if (count <= 0) return;

  const deltaY = e.deltaY;
  if (Math.abs(deltaY) < 16) return;

  const maxStep = count - 1;
  const scrollHProgress = Math.min(Math.max((targetProgress - 0.20) / 0.80, 0), 1);
  if (!isWheelSnapping) {
    activeCarouselStep = Math.round(scrollHProgress * maxStep);
  }

  if (deltaY > 16) {
    // Scroll hacia ABAJO
    if (targetProgress < 0.195) {
      e.preventDefault();
      if (!isWheelSnapping) {
        isWheelSnapping = true;
        activeCarouselStep = 0;
        scrollToCarouselStep(0);
        clearTimeout(wheelCooldownTimer);
        wheelCooldownTimer = setTimeout(() => {
          isWheelSnapping = false;
        }, 520);
      }
      return;
    }

    if (activeCarouselStep < maxStep) {
      e.preventDefault();
      if (!isWheelSnapping) {
        isWheelSnapping = true;
        activeCarouselStep += 1;
        scrollToCarouselStep(activeCarouselStep);
        clearTimeout(wheelCooldownTimer);
        wheelCooldownTimer = setTimeout(() => {
          isWheelSnapping = false;
        }, 520);
      }
    }
  } else if (deltaY < -16) {
    // Scroll hacia ARRIBA
    if (activeCarouselStep > 0) {
      e.preventDefault();
      if (!isWheelSnapping) {
        isWheelSnapping = true;
        activeCarouselStep -= 1;
        scrollToCarouselStep(activeCarouselStep);
        clearTimeout(wheelCooldownTimer);
        wheelCooldownTimer = setTimeout(() => {
          isWheelSnapping = false;
        }, 520);
      }
    }
  }
}

function setupHorizontalScroll() {
  const container = document.getElementById("carousel-scroll-container");
  const track = document.getElementById("carousel-track");
  const progressBar = document.getElementById("carousel-progress-bar");
  const counter = document.getElementById("carousel-counter");
  const stage = document.getElementById("portalStageCard");
  const hint = document.getElementById("portalScrollHint");

  const archGroup = document.getElementById("portalArchGroup");

  if (!container || !track) return;

  const filtered = currentFilter === "all" 
    ? portfolioVideos 
    : portfolioVideos.filter(v => v.category === currentFilter);
  const count = filtered.length;

  function updateContainerDimensions() {
    // Recorrido vertical: en móvil es breve y suave (~700px) solo para abrir el portal; en PC recorre el carrusel completo
    const isMobile = window.innerWidth < 768;
    const scrollTravel = isMobile ? 700 : Math.max(count * 450, 3600);
    container.style.height = `${window.innerHeight + scrollTravel}px`;

    onScroll();
  }

  function calculateProgress() {
    const rect = container.getBoundingClientRect();
    const scrollDistance = container.offsetHeight - window.innerHeight;
    if (scrollDistance <= 0) {
      targetProgress = 0;
      return;
    }
    const scrolled = -rect.top;
    targetProgress = Math.min(Math.max(scrolled / scrollDistance, 0), 1);
  }

  function render() {
    currentProgress += (targetProgress - currentProgress) * 0.16;
    if (Math.abs(targetProgress - currentProgress) < 0.0006) {
      currentProgress = targetProgress;
    }

    const p = currentProgress;
    const isMobile = window.innerWidth < 768;

    // Al comenzar a transicionar o acercarse al escenario de videos, asegurar reproducción activa continua
    if (p >= 0.02) {
      ensureCarouselVideosPlaying();
    }

    // 1. ZOOM Y APERTURA DEL GRUPO DE CAPAS (SE MANTIENEN 100% UNIDAS Y SÓLIDAS)
    if (archGroup) {
      if (isMobile) {
        // En móvil: Apertura concéntrica de las capas cuadraditas con zoom fluido y fade hacia afuera
        const scaleVal = 1 + p * 3.4;
        const op = Math.max(0, 1 - p * 1.55);
        archGroup.style.transform = `translateX(-50%) scale(${scaleVal.toFixed(4)})`;
        archGroup.style.opacity = op.toFixed(3);
        archGroup.style.display = op <= 0.01 ? "none" : "block";
      } else {
        const baseScale = 1;
        const scaleVal = baseScale * (1 + p * 3.6);
        const op = Math.max(0, 1 - p * 3.0);
        archGroup.style.transform = `translateX(-50%) scale(${scaleVal.toFixed(4)})`;
        archGroup.style.opacity = op.toFixed(3);
        archGroup.style.display = op <= 0.01 ? "none" : "block";
      }
    }

    // 2. EXPANSIÓN DEL ESCENARIO DESDE EL FONDO A PANTALLA COMPLETA
    if (stage) {
      if (isMobile) {
        // En móvil: CERO layout thrashing de width/height.
        // El centro va apareciendo suavemente desde el fondo mientras se hace scroll
        const revealProgress = Math.min(Math.max(p / 0.60, 0), 1);
        const smoothReveal = revealProgress * revealProgress * (3 - 2 * revealProgress);
        const stageScale = 0.92 + 0.08 * smoothReveal;

        stage.style.transform = `translateX(-50%) scale(${stageScale.toFixed(4)})`;
        stage.style.opacity = smoothReveal.toFixed(3);
        stage.style.pointerEvents = smoothReveal < 0.15 ? "none" : "auto";
        stage.style.zIndex = smoothReveal > 0.8 ? "30" : "2";
      } else {
        const expandProgress = Math.min(Math.max(p / 0.18, 0), 1);
        const ease = expandProgress * expandProgress * (3 - 2 * expandProgress); // Smoothstep
        const startW = window.innerWidth > 1400 ? 72 : 74;
        const startH = window.innerHeight < 800 ? 78 : 75;
        const curWidthVw = startW + (100 - startW) * ease;
        const curHeightVh = startH + (100 - startH) * ease;

        const revealT = Math.min(Math.max((p - 0.05) / 0.13, 0), 1);
        const smoothReveal = revealT * revealT * (3 - 2 * revealT); // Cubic smoothstep
        const stageScale = 0.94 + 0.06 * smoothReveal;

        stage.style.width = `${curWidthVw.toFixed(2)}vw`;
        stage.style.height = `${curHeightVh.toFixed(2)}vh`;
        stage.style.transform = `translateX(-50%) scale(${stageScale.toFixed(4)})`;
        stage.style.opacity = smoothReveal.toFixed(3);
        stage.style.pointerEvents = smoothReveal < 0.1 ? "none" : "auto";
        stage.style.zIndex = ease >= 0.95 ? "30" : "2";
      }
    }

    // 3. CARRUSEL 3D CON EFECTO DE PROFUNDIDAD
    // En PC: Conducido por el scroll vertical fijado
    // En Móvil: El carrusel se mueve de izquierda a derecha por gestos táctiles directos (swipe 1:1)
    if (!isMobile) {
      const scrollHProgress = Math.min(Math.max((p - 0.20) / 0.80, 0), 1);
      update3DCarousel(scrollHProgress);
    }

    // 4. INDICADOR FLOTANTE DE SCROLL
    if (hint) {
      hint.style.opacity = Math.max(0, 1 - p * 3.5).toFixed(3);
    }

    if (Math.abs(targetProgress - currentProgress) > 0.0006) {
      requestAnimationFrame(render);
      isTicking = true;
    } else {
      isTicking = false;
    }
  }

  function onScroll() {
    calculateProgress();
    if (!isTicking) {
      isTicking = true;
      requestAnimationFrame(render);
    }

    // Centrado magnético automático (Settle snap) exclusivo para PC
    if (window.innerWidth >= 768) {
      clearTimeout(settleTimer);
      settleTimer = setTimeout(() => {
        if (isWheelSnapping) return;
        const container = document.getElementById("carousel-scroll-container");
        if (!container) return;
        const rect = container.getBoundingClientRect();
        const inPinnedZone = rect.top <= 20 && rect.bottom >= window.innerHeight - 20;
        if (!inPinnedZone) return;

        if (targetProgress >= 0.18 && targetProgress <= 0.98) {
          const filtered = currentFilter === "all" 
            ? portfolioVideos 
            : portfolioVideos.filter(v => v.category === currentFilter);
          const count = filtered.length;
          if (count <= 1) return;

          const maxStep = count - 1;
          const shp = Math.min(Math.max((targetProgress - 0.20) / 0.80, 0), 1);
          const currentStepFloat = shp * maxStep;
          const nearestStep = Math.round(currentStepFloat);

          if (Math.abs(currentStepFloat - nearestStep) > 0.05) {
            activeCarouselStep = nearestStep;
            scrollToCarouselStep(nearestStep);
          }
        }
      }, 220);
    }
  }

  updateContainerDimensions();
  if (window.innerWidth < 768) {
    update3DCarousel(0);
    updateMobileDots(0);
  } else {
    update3DCarousel(0);
  }

  if (!scrollListenerAttached) {
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("wheel", handleCarouselWheel, { passive: false });
    window.addEventListener("resize", () => {
      updateContainerDimensions();
      render();
      if (window.innerWidth < 768) {
        updateMobileDots(mobileActiveIndex);
      }
    }, { passive: true });

    // Soporte de gestos táctiles (Touch Swipe izquierda/derecha fluido 1:1) para teléfonos móviles
    let touchStartX = 0;
    let touchStartY = 0;
    let touchCurrentX = 0;
    let isTouchActive = false;
    let isHorizontalDrag = false;
    let isDirectionLocked = false;
    let touchStartTime = 0;

    const touchArea = document.getElementById("carousel-sticky-wrapper") || container;
    if (touchArea) {
      touchArea.addEventListener("touchstart", (e) => {
        if (window.innerWidth >= 768) return;
        if (e.touches.length === 1) {
          touchStartX = e.touches[0].clientX;
          touchStartY = e.touches[0].clientY;
          touchCurrentX = touchStartX;
          touchStartTime = performance.now();
          isTouchActive = true;
          isHorizontalDrag = false;
          isDirectionLocked = false;
        }
      }, { passive: true });

      touchArea.addEventListener("touchmove", (e) => {
        if (window.innerWidth >= 768 || !isTouchActive) return;
        if (e.touches.length === 1) {
          const cx = e.touches[0].clientX;
          const cy = e.touches[0].clientY;
          const dx = cx - touchStartX;
          const dy = cy - touchStartY;

          if (!isDirectionLocked) {
            if (Math.abs(dx) > 7 || Math.abs(dy) > 7) {
              isDirectionLocked = true;
              if (Math.abs(dx) >= Math.abs(dy)) {
                isHorizontalDrag = true;
              } else {
                isHorizontalDrag = false;
                isTouchActive = false; // Dejar que el scroll vertical nativo fluya libremente
                return;
              }
            }
          }

          if (isHorizontalDrag) {
            if (e.cancelable) e.preventDefault();
            touchCurrentX = cx;
            const filtered = currentFilter === "all" 
              ? portfolioVideos 
              : portfolioVideos.filter(v => v.category === currentFilter);
            const count = filtered.length;
            if (count > 1) {
              const stepDist = window.innerWidth < 400 ? 172 : 192;
              const deltaIndex = -dx / stepDist;
              const liveIndex = Math.max(0, Math.min(count - 1, mobileActiveIndex + deltaIndex));
              mobileCurrentFloat = liveIndex;
              update3DCarousel(liveIndex / (count - 1));
            }
          }
        }
      }, { passive: false });

      touchArea.addEventListener("touchend", (e) => {
        if (window.innerWidth >= 768 || !isTouchActive) return;
        isTouchActive = false;

        if (isHorizontalDrag) {
          const dx = touchCurrentX - touchStartX;
          const dt = Math.max(1, performance.now() - touchStartTime);
          const velocity = Math.abs(dx) / dt;

          const filtered = currentFilter === "all" 
            ? portfolioVideos 
            : portfolioVideos.filter(v => v.category === currentFilter);
          const count = filtered.length;

          let targetIndex = mobileActiveIndex;
          if (dx < -35 || (dx < -15 && velocity > 0.25)) {
            targetIndex = Math.min(count - 1, mobileActiveIndex + 1);
          } else if (dx > 35 || (dx > 15 && velocity > 0.25)) {
            targetIndex = Math.max(0, mobileActiveIndex - 1);
          }

          animateMobileToIndex(targetIndex);
        }
      }, { passive: true });

      touchArea.addEventListener("touchcancel", () => {
        if (window.innerWidth >= 768) return;
        isTouchActive = false;
        if (isHorizontalDrag) {
          animateMobileToIndex(mobileActiveIndex);
        }
      }, { passive: true });
    }

    // Flechas de navegación para saltar de video en video
    const prevBtn = document.getElementById("carousel-prev-btn");
    const nextBtn = document.getElementById("carousel-next-btn");

    if (prevBtn) {
      prevBtn.addEventListener("click", () => {
        const count = filtered.length;
        const maxStep = count - 1;
        const shp = Math.min(Math.max((targetProgress - 0.20) / 0.80, 0), 1);
        const currentStep = Math.round(shp * maxStep);
        const prevStep = Math.max(0, currentStep - 1);
        activeCarouselStep = prevStep;
        scrollToCarouselStep(prevStep);
      });
    }

    if (nextBtn) {
      nextBtn.addEventListener("click", () => {
        const count = filtered.length;
        const maxStep = count - 1;
        const shp = Math.min(Math.max((targetProgress - 0.20) / 0.80, 0), 1);
        const currentStep = Math.round(shp * maxStep);
        const nextStep = Math.min(maxStep, currentStep + 1);
        activeCarouselStep = nextStep;
        scrollToCarouselStep(nextStep);
      });
    }

    scrollListenerAttached = true;
  }
}

function setupFilterTabs() {
  const tabs = document.querySelectorAll(".filter-tab");
  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      tabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");
      currentFilter = tab.getAttribute("data-filter");
      renderVideos();
    });
  });
}

function setupModal() {
  const dialog = document.getElementById("video-dialog");
  const player = document.getElementById("dialog-video-player");
  if (!dialog || !player) return;

  dialog.addEventListener("click", (e) => {
    const rect = dialog.getBoundingClientRect();
    const isInDialog = (
      rect.top <= e.clientY &&
      e.clientY <= rect.top + rect.height &&
      rect.left <= e.clientX &&
      e.clientX <= rect.left + rect.width
    );
    if (!isInDialog) closeVideoModal();
  });

  dialog.addEventListener("cancel", () => closeVideoModal());

  // Conexión reactiva con eventos nativos del reproductor de video
  player.addEventListener("play", () => {
    if (typeof duckBgMusic === "function") duckBgMusic();
  });
  player.addEventListener("pause", () => {
    if (typeof restoreBgMusic === "function") restoreBgMusic();
  });
  player.addEventListener("ended", () => {
    if (typeof restoreBgMusic === "function") restoreBgMusic();
  });
}

window.openVideoModal = function(idOrTitle, src) {
  if (typeof duckBgMusic === "function") {
    duckBgMusic(400);
  }

  if (typeof playUiSound === "function") {
    playUiSound("modal-open");
  }

  const dialog = document.getElementById("video-dialog");
  const player = document.getElementById("dialog-video-player");
  const modalTitle = document.getElementById("dialog-video-title");
  const driveBtn = document.getElementById("dialog-drive-link");

  if (!dialog || !player) return;

  let video = null;
  if (typeof idOrTitle === "number") {
    video = portfolioVideos.find(v => v.id === idOrTitle);
  }

  if (video) {
    const videoTitle = currentLang === 'en' && video.title_en ? video.title_en : video.title;
    if (modalTitle) modalTitle.textContent = `${video.site} • ${videoTitle}`;
    player.src = video.videoSrc || "";
    if (driveBtn) {
      driveBtn.href = video.driveLink || "#";
      driveBtn.classList.remove("hidden");
    }
  } else {
    if (modalTitle) modalTitle.textContent = idOrTitle;
    player.src = src || "";
    if (driveBtn) driveBtn.classList.add("hidden");
  }

  if (window.lenis) window.lenis.stop();
  dialog.showModal();
  player.play().catch(() => {});
};

window.closeVideoModal = function() {
  if (typeof playUiSound === "function") {
    playUiSound("modal-close");
  }

  const dialog = document.getElementById("video-dialog");
  const player = document.getElementById("dialog-video-player");
  if (player) {
    player.pause();
    player.src = "";
  }
  if (dialog) dialog.close();
  if (window.lenis) window.lenis.start();

  if (typeof restoreBgMusic === "function") {
    restoreBgMusic(750);
  }
};


function setupClipboardCopy() {
  const copyEmailBtn = document.getElementById("copy-email-btn");
  if (copyEmailBtn) {
    copyEmailBtn.addEventListener("click", () => {
      navigator.clipboard.writeText("quinterochristianjose6@gmail.com").then(() => {
        if (typeof playUiSound === "function") {
          playUiSound("success");
        }
        const textSpan = copyEmailBtn.querySelector(".btn-text") || copyEmailBtn;
        const originalText = currentLang === 'en' ? "Copy Email" : "Copiar Correo";
        copyEmailBtn.classList.add("copy-success-pulse", "bg-emerald-600", "text-white", "border-emerald-600");
        textSpan.innerText = currentLang === 'en' ? "Copied! ✓" : "¡Copiado! ✓";
        setTimeout(() => {
          copyEmailBtn.classList.remove("copy-success-pulse", "bg-emerald-600", "text-white", "border-emerald-600");
          textSpan.innerText = originalText;
        }, 2200);
      });
    });
  }

  const writeEmailBtn = document.getElementById("write-email-btn");
  if (writeEmailBtn) {
    writeEmailBtn.addEventListener("click", (e) => {
      if (typeof playUiSound === "function") {
        playUiSound("button-click");
      }
      const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
      if (isMobile) {
        e.preventDefault();
        window.location.href = "mailto:quinterochristianjose6@gmail.com?subject=Propuesta%20de%20Patrocinio%20-%20Chris";
      }
      // On desktop, anchor naturally navigates to Gmail web in a new tab
    });
  }
}

// ==========================================================================
// CONFIGURACIÓN DE DISCORD LOG (CANAL: 1550640116366712862 | DUEÑO: 1477397898197995592)
// ==========================================================================
const DISCORD_CONFIG = {
  channelId: "1550640116366712862",
  ownerId: "1477397898197995592",
  webhookUrl: "https://discord.com/api/webhooks/1550787173945712660/ebOUhNVaB9jOYSENhBdZjZymkKKlWEW3TKDwHUb58l-Wd_jzhhfB17pGN1uHkGz2hr7I",
  avatarUrl: "https://cdn.discordapp.com/avatars/1550787173945712660/76d2bac2b28da62698a8e33542e71da4.png?size=256"
};

/**
 * Envía un LOG detallado en formato Embed a Discord y menciona directamente al dueño
 */
async function sendDiscordContactLog(data) {
  const isEn = currentLang === 'en';
  
  const embedFields = [
    {
      name: "🏪 Tienda o Página Web",
      value: data.store ? `**${data.store}**` : "*(No especificado)*",
      inline: true
    },
    {
      name: "📬 Contacto (Email / Discord / Red)",
      value: data.contact ? `\`${data.contact}\`` : "*(No especificado)*",
      inline: true
    },
    {
      name: "🎬 Tipo de Promoción Solicitada",
      value: data.service || "1 Video Promocional",
      inline: false
    },
    {
      name: "📝 Propuesta o Detalles del Video",
      value: data.details ? (data.details.length > 1024 ? data.details.substring(0, 1021) + "..." : data.details) : "*(Sin detalles)*",
      inline: false
    },
    {
      name: "🌐 Idioma de Envío",
      value: isEn ? "🇺🇸 English" : "🇪🇸 Español",
      inline: true
    },
    {
      name: "📍 Canal Asignado",
      value: `<#${DISCORD_CONFIG.channelId}>`,
      inline: true
    }
  ];

  const payload = {
    username: "ChrisMm2 • Portafolio",
    avatar_url: DISCORD_CONFIG.avatarUrl,
    content: `🚨 **¡NUEVA PROPUESTA DE COLABORACIÓN RECIBIDA EN LA WEB!**\n<@${DISCORD_CONFIG.ownerId}> ¡Alguien acaba de enviar una propuesta desde el portafolio!`,
    embeds: [
      {
        title: "📩 Registro Oficial de Contacto (LOG)",
        description: `Se ha recibido un nuevo formulario completado para **ChrisMm2**.\nCanal de destino: <#${DISCORD_CONFIG.channelId}>`,
        color: 15364108, // #ea580c (Naranja solar corporativo de Chris)
        author: {
          name: "ChrisMm2 Official Portfolio",
          icon_url: DISCORD_CONFIG.avatarUrl
        },
        thumbnail: {
          url: DISCORD_CONFIG.avatarUrl
        },
        fields: embedFields,
        footer: {
          text: "ChrisMm2 Portfolio • Sistema de Logs Automático",
          icon_url: DISCORD_CONFIG.avatarUrl
        },
        timestamp: new Date().toISOString()
      }
    ],
    allowed_mentions: {
      users: [DISCORD_CONFIG.ownerId]
    }
  };

  // 1. Guardar log histórico en localStorage como respaldo seguro
  try {
    const logs = JSON.parse(localStorage.getItem("chris_portfolio_logs") || "[]");
    logs.push({
      ...data,
      ownerPinged: DISCORD_CONFIG.ownerId,
      channelId: DISCORD_CONFIG.channelId,
      timestamp: new Date().toISOString()
    });
    localStorage.setItem("chris_portfolio_logs", JSON.stringify(logs));
  } catch (e) {
    // Silencioso
  }

  // 2. Enviar a Discord mediante Webhook
  if (DISCORD_CONFIG.webhookUrl && DISCORD_CONFIG.webhookUrl.startsWith("https://discord.com/api/webhooks/")) {
    try {
      const response = await fetch(DISCORD_CONFIG.webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });
      if (!response.ok) {
        console.warn(`[Discord Log] Estado HTTP al enviar: ${response.status}`);
      } else {
        console.log(`[Discord Log] ✅ Log enviado con éxito al canal ${DISCORD_CONFIG.channelId} mencionando a <@${DISCORD_CONFIG.ownerId}>`);
      }
    } catch (err) {
      console.error("[Discord Log] ❌ Error de conexión al webhook de Discord:", err);
    }
  } else {
    // Si la URL del webhook aún no está configurada, mostramos el log con formato en consola
    console.info(
      "%c[Discord Log] Notificación lista para enviar a Discord (%cCanal: " + DISCORD_CONFIG.channelId + " | Dueño: " + DISCORD_CONFIG.ownerId + "%c):\n" +
      "Para que el mensaje llegue en vivo a tu Discord, añade la URL del Webhook en DISCORD_CONFIG.webhookUrl en js/main.js.",
      "color: #ea580c; font-weight: bold;",
      "color: #f59e0b; font-weight: bold;",
      "color: inherit;",
      payload
    );
  }
}

function setupContactForm() {
  const form = document.getElementById("contact-form");
  const feedback = document.getElementById("form-feedback");
  if (!form) return;

  // Chips interactivos de selección rápida
  const chips = form.querySelectorAll(".contact-pill-chip");
  const textarea = document.getElementById("form-details-input") || form.querySelector("textarea");

  chips.forEach(chip => {
    chip.addEventListener("click", () => {
      if (typeof playUiSound === "function") {
        playUiSound("chip");
      }
      chips.forEach(c => c.classList.remove("is-active"));
      chip.classList.add("is-active");
      const serviceName = chip.querySelector('[data-i18n]')?.innerText.trim() || chip.dataset.service || chip.innerText.trim();
      if (textarea) {
        if (!textarea.value || textarea.value.startsWith("Interés: ") || textarea.value.startsWith("Interest: ")) {
          const prefix = currentLang === 'en' ? 'Interest: ' : 'Interés: ';
          textarea.value = `${prefix}${serviceName} - `;
          textarea.focus();
        }
      }
    });
  });

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const btn = form.querySelector("button[type='submit']");
    const originalText = currentLang === 'en' ? "Send proposal now" : "Mandar propuesta ahora";

    const storeInput = document.getElementById("form-store-input") || form.querySelectorAll("input[type='text']")[0];
    const contactInput = document.getElementById("form-contact-input") || form.querySelectorAll("input[type='text']")[1];
    const detailsInput = document.getElementById("form-details-input") || form.querySelector("textarea");
    const activeChip = form.querySelector(".contact-pill-chip.is-active");

    const storeVal = storeInput ? storeInput.value.trim() : "";
    const contactVal = contactInput ? contactInput.value.trim() : "";
    const detailsVal = detailsInput ? detailsInput.value.trim() : "";
    const serviceVal = activeChip ? (activeChip.querySelector("[data-i18n]")?.innerText.trim() || activeChip.dataset.service || activeChip.innerText.trim()) : "1 Video Promocional";

    btn.disabled = true;
    const sendingText = currentLang === 'en' ? "Sending..." : "Enviando...";
    btn.innerHTML = `
      <svg class="animate-spin -ml-1 mr-2 h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
      </svg>
      <span>${sendingText}</span>
    `;

    // Enviar LOG a Discord (canal 1550640116366712862 y mención al dueño 1477397898197995592)
    await sendDiscordContactLog({
      store: storeVal,
      contact: contactVal,
      service: serviceVal,
      details: detailsVal
    });

    setTimeout(() => {
      btn.disabled = false;
      btn.innerHTML = `
        <span data-i18n="contact.submitBtn">${originalText}</span>
        <svg class="w-3.5 h-3.5 gang-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
      `;
      form.reset();
      chips.forEach((c, idx) => {
        if (idx === 0) c.classList.add("is-active");
        else c.classList.remove("is-active");
      });
      if (typeof playUiSound === "function") {
        playUiSound("success");
      }
      if (feedback) {
        feedback.classList.remove("hidden");
        setTimeout(() => feedback.classList.add("hidden"), 6000);
      }
    }, 450);
  });
}

// ==========================================================================
// CARACTERÍSTICAS INTERACTIVAS ESTILO IMBONAIS (PERSONALIZADAS PARA CHRIS)
// ==========================================================================

// 1. Barra de Progreso Superior
function setupTopProgressBar() {
  const bar = document.getElementById("topProgressBar");
  if (!bar) return;

  let ticking = false;
  window.addEventListener("scroll", () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
        const progress = totalHeight > 0 ? (window.scrollY / totalHeight) * 100 : 0;
        bar.style.width = `${Math.min(100, Math.max(0, progress))}%`;
        ticking = false;
      });
      ticking = true;
    }
  }, { passive: true });
}

// 3. Canvas Solar: Partículas Ámbar, Motes Dorados y Resplandor Cálido
function setupEmbersCanvas() {
  const canvas = document.getElementById("embers");
  if (!canvas) return;

  const ctx = canvas.getContext("2d");
  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  let mouseX = width / 2;
  let mouseY = height * 0.3;

  window.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  }, { passive: true });

  window.addEventListener("resize", () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  // Partículas solares flotantes y motes ámbar suaves sobre fondo claro (#faf8f5)
  const particleCount = 42;
  const particles = [];
  const warmPalettes = [
    "234, 88, 12",   // Naranja solar intenso
    "249, 115, 22",  // Ámbar brillante
    "217, 119, 6",   // Oro cálido
    "251, 146, 60",  // Melocotón suave
    "180, 83, 9"     // Miel dorada
  ];

  for (let i = 0; i < particleCount; i++) {
    particles.push({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 1.8 + 0.7,
      baseAlpha: Math.random() * 0.28 + 0.12,
      alphaSpeed: Math.random() * 0.02 + 0.008,
      phase: Math.random() * Math.PI * 2,
      speedY: Math.random() * 0.35 + 0.12,
      speedX: (Math.random() - 0.5) * 0.18,
      color: warmPalettes[Math.floor(Math.random() * warmPalettes.length)]
    });
  }

  // Chispitas solares especiales de 4 puntas ✦
  const sparkleCount = 6;
  const sparkles = [];
  for (let i = 0; i < sparkleCount; i++) {
    sparkles.push({
      x: Math.random() * width,
      y: Math.random() * (height * 0.85),
      size: Math.random() * 3.5 + 2.5,
      angle: Math.random() * Math.PI,
      rotSpeed: (Math.random() - 0.5) * 0.012,
      baseAlpha: Math.random() * 0.3 + 0.18,
      pulse: Math.random() * Math.PI * 2,
      pulseSpeed: Math.random() * 0.02 + 0.012,
      color: Math.random() > 0.4 ? "245, 158, 11" : "234, 88, 12"
    });
  }

  function drawSolarSparkle(cx, cy, spikes, outerRadius, innerRadius, color, alpha, angle) {
    ctx.save();
    ctx.translate(cx, cy);
    ctx.rotate(angle);
    ctx.beginPath();
    let rot = Math.PI / 2 * 3;
    const step = Math.PI / spikes;

    for (let i = 0; i < spikes; i++) {
      let x = Math.cos(rot) * outerRadius;
      let y = Math.sin(rot) * outerRadius;
      ctx.lineTo(x, y);
      rot += step;

      x = Math.cos(rot) * innerRadius;
      y = Math.sin(rot) * innerRadius;
      ctx.lineTo(x, y);
      rot += step;
    }
    ctx.lineTo(0, -outerRadius);
    ctx.closePath();
    ctx.fillStyle = `rgba(${color}, ${alpha})`;
    ctx.shadowBlur = outerRadius * 2;
    ctx.shadowColor = `rgba(${color}, 0.5)`;
    ctx.fill();
    ctx.restore();
  }

  function renderSolarCanvas() {
    ctx.clearRect(0, 0, width, height);

    // Partículas cálidas flotantes
    particles.forEach((s) => {
      s.y -= s.speedY;
      s.x += s.speedX;
      s.phase += s.alphaSpeed;

      if (s.y < -10) {
        s.y = height + 10;
        s.x = Math.random() * width;
      }
      if (s.x < -10) s.x = width + 10;
      if (s.x > width + 10) s.x = -10;

      const currentAlpha = Math.max(0.08, s.baseAlpha + Math.sin(s.phase) * 0.16);

      ctx.beginPath();
      ctx.arc(s.x, s.y, s.size, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${s.color}, ${currentAlpha})`;
      ctx.shadowBlur = s.size * 2;
      ctx.shadowColor = `rgba(${s.color}, 0.45)`;
      ctx.fill();
    });

    // Chispitas ✦ solares sutiles
    sparkles.forEach((sp) => {
      sp.angle += sp.rotSpeed;
      sp.pulse += sp.pulseSpeed;
      const currentAlpha = Math.max(0.12, sp.baseAlpha + Math.sin(sp.pulse) * 0.22);
      const outerR = sp.size * (1 + Math.sin(sp.pulse) * 0.18);
      const innerR = outerR * 0.22;

      drawSolarSparkle(sp.x, sp.y, 4, outerR, innerR, sp.color, currentAlpha, sp.angle);
    });

    requestAnimationFrame(renderSolarCanvas);
  }

  requestAnimationFrame(renderSolarCanvas);
}

// ============================================================================
// 4. SISTEMA DE AUDIO: MÚSICA DE FONDO AMBIENTAL + SONIDOS TÁCTILES WEB AUDIO
// ============================================================================
let audioCtx = null;
let soundEnabled = true; // ACTIVADO POR DEFECTO A PETICIÓN DEL USUARIO

// 4.1 MÚSICA DE FONDO AMBIENTAL (Volumen sutil, loop continuo y atenuación inteligente)
const DEFAULT_BG_VOLUME = 0.16; // Volumen sutil ambiental solicitado por el usuario
let bgMusicFadeInterval = null;
let isBgMusicStarted = false;

function getBgAudio() {
  return document.getElementById("bg-music");
}

/**
 * Atenuación o incremento suave y acústico del volumen de la música de fondo.
 * Rampa suave tipo coseno para evitar chasquidos o cortes abruptos.
 */
function fadeBgMusicTo(targetVolume, duration = 600, onComplete = null) {
  const audio = getBgAudio();
  if (!audio) return;

  if (bgMusicFadeInterval) {
    clearInterval(bgMusicFadeInterval);
    bgMusicFadeInterval = null;
  }

  // Si se solicita volumen audible y la música estaba pausada, iniciar reproducción
  if (targetVolume > 0 && audio.paused && soundEnabled) {
    audio.volume = 0;
    const playPromise = audio.play();
    if (playPromise !== undefined) {
      playPromise.catch(() => {});
    }
  }

  const startVol = audio.volume;
  const delta = targetVolume - startVol;
  if (Math.abs(delta) < 0.005) {
    audio.volume = Math.max(0, Math.min(1, targetVolume));
    if (targetVolume === 0 && !audio.paused) {
      audio.pause();
    }
    if (onComplete) onComplete();
    return;
  }

  const stepTime = 25;
  const totalSteps = Math.max(8, Math.round(duration / stepTime));
  let currentStep = 0;

  bgMusicFadeInterval = setInterval(() => {
    currentStep++;
    const progress = Math.min(1, currentStep / totalSteps);
    // Curva acústica sutil (coseno suave)
    const ease = 0.5 * (1 - Math.cos(Math.PI * progress));
    const currentVol = Math.max(0, Math.min(1, startVol + delta * ease));
    audio.volume = currentVol;

    if (progress >= 1) {
      clearInterval(bgMusicFadeInterval);
      bgMusicFadeInterval = null;
      audio.volume = Math.max(0, Math.min(1, targetVolume));
      if (targetVolume === 0 && !audio.paused) {
        audio.pause();
      }
      if (onComplete) onComplete();
    }
  }, stepTime);
}

/**
 * Silencia o atenúa sutilmente la música de fondo cuando suena un video publicitario.
 */
function duckBgMusic(duration = 450) {
  fadeBgMusicTo(0, duration);
}

/**
 * Restaura suavemente la música de fondo al volumen sutil (0.16) si no hay ningún video sonando.
 */
function restoreBgMusic(duration = 750) {
  if (!soundEnabled) return;
  // Verificar si hay video del modal sonando activamente
  const player = document.getElementById("dialog-video-player");
  const isVideoPlaying = player && !player.paused && !player.muted && player.currentTime > 0;
  if (isVideoPlaying) return;

  // Verificar si hay algún video del carrusel desmuteado sonando activamente
  const unmutedCardVideo = document.querySelector("#carousel-track .carousel-3d-card.is-video-unmuted video");
  if (unmutedCardVideo && !unmutedCardVideo.muted && !unmutedCardVideo.paused) return;

  fadeBgMusicTo(DEFAULT_BG_VOLUME, duration);
}

/**
 * Inicia la música de fondo con un fade-in sutil.
 */
function startBgMusic() {
  if (!soundEnabled) return;
  const audio = getBgAudio();
  if (!audio) return;

  // Evitar iniciar si hay un video reproduciéndose en el modal
  const player = document.getElementById("dialog-video-player");
  const isVideoPlaying = player && !player.paused && !player.muted && player.currentTime > 0;
  if (isVideoPlaying) return;

  audio.volume = 0;
  const playPromise = audio.play();
  if (playPromise !== undefined) {
    playPromise.then(() => {
      isBgMusicStarted = true;
      fadeBgMusicTo(DEFAULT_BG_VOLUME, 1200);
    }).catch(() => {
      // Esperará al primer gesto del usuario
    });
  }
}

// 4.2 MOTOR WEB AUDIO FX
function getAudioContext() {
  if (!audioCtx) {
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  }
  if (audioCtx.state === "suspended") {
    audioCtx.resume();
  }
  return audioCtx;
}

// Desbloqueo universal de audio y arranque de música de fondo con la primera interacción del usuario
function unlockAudioAndStartMusic() {
  try {
    const ctx = getAudioContext();
    if (ctx && ctx.state === "suspended") {
      ctx.resume();
    }
  } catch (e) {}

  if (soundEnabled && !isBgMusicStarted) {
    startBgMusic();
  }
}

["pointerdown", "keydown", "touchstart", "click", "wheel", "scroll"].forEach(evt => {
  window.addEventListener(evt, unlockAudioAndStartMusic, { once: true, passive: true });
});

// Manejo inteligente de cambio de pestaña: atenuar si la pestaña se oculta
document.addEventListener("visibilitychange", () => {
  const audio = getBgAudio();
  if (!audio) return;
  if (document.hidden) {
    fadeBgMusicTo(0, 200);
  } else if (soundEnabled) {
    restoreBgMusic(600);
  }
});

function playUiSound(type = "click") {
  if (!soundEnabled) return;

  try {
    const ctx = getAudioContext();
    if (!ctx) return;
    const now = ctx.currentTime;

    if (type === "click") {
      // Pop nítido y agradable
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = "sine";
      osc.frequency.setValueAtTime(860, now);
      osc.frequency.exponentialRampToValueAtTime(360, now + 0.055);
      gain.gain.setValueAtTime(0.08, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.055);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(now);
      osc.stop(now + 0.055);
    } else if (type === "hover") {
      // Micro-tick ultrasutil y táctil (alta frecuencia, cortito, bajo volumen)
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = "sine";
      osc.frequency.setValueAtTime(1250, now);
      osc.frequency.exponentialRampToValueAtTime(1550, now + 0.022);
      gain.gain.setValueAtTime(0.018, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.022);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(now);
      osc.stop(now + 0.022);
    } else if (type === "slide") {
      // Swoosh elegante al cambiar de tarjeta o al dibujar la gráfica
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = "triangle";
      osc.frequency.setValueAtTime(320, now);
      osc.frequency.exponentialRampToValueAtTime(560, now + 0.06);
      osc.frequency.exponentialRampToValueAtTime(380, now + 0.12);
      gain.gain.setValueAtTime(0.06, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.12);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(now);
      osc.stop(now + 0.12);
    } else if (type === "chip") {
      // Doble chime pentatónico para píldoras y chips de selección
      [660, 880].forEach((freq, i) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = "sine";
        const t = now + i * 0.045;
        osc.frequency.setValueAtTime(freq, t);
        gain.gain.setValueAtTime(0.05, t);
        gain.gain.exponentialRampToValueAtTime(0.001, t + 0.04);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(t);
        osc.stop(t + 0.04);
      });
    } else if (type === "success") {
      // Tríada armónica ascendente (Do Mayor: C5 -> E5 -> G5)
      [523.25, 659.25, 783.99].forEach((freq, i) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = "sine";
        const t = now + i * 0.065;
        osc.frequency.setValueAtTime(freq, t);
        gain.gain.setValueAtTime(0.07, t);
        gain.gain.exponentialRampToValueAtTime(0.001, t + 0.14);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(t);
        osc.stop(t + 0.14);
      });
    } else if (type === "modal-open") {
      // Apertura de modal: barrido aireado ascendente
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = "sine";
      osc.frequency.setValueAtTime(260, now);
      osc.frequency.exponentialRampToValueAtTime(740, now + 0.15);
      gain.gain.setValueAtTime(0.065, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.15);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(now);
      osc.stop(now + 0.15);
    } else if (type === "modal-close") {
      // Cierre de modal: barrido suave descendente
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = "sine";
      osc.frequency.setValueAtTime(640, now);
      osc.frequency.exponentialRampToValueAtTime(260, now + 0.13);
      gain.gain.setValueAtTime(0.055, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.13);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(now);
      osc.stop(now + 0.13);
    } else if (type === "toggle") {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = "triangle";
      osc.frequency.setValueAtTime(520, now);
      osc.frequency.exponentialRampToValueAtTime(1040, now + 0.09);
      gain.gain.setValueAtTime(0.09, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.09);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(now);
      osc.stop(now + 0.09);
    } else if (type === "video-scroll") {
      // Click táctil / pase de tarjeta nítido y sutil para el carrusel de videos
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = "sine";
      osc.frequency.setValueAtTime(460, now);
      osc.frequency.exponentialRampToValueAtTime(780, now + 0.035);
      gain.gain.setValueAtTime(0.04, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.035);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(now);
      osc.stop(now + 0.035);
    } else if (type === "transition") {
      // Chime armónico aireado suave para las transiciones entre secciones
      [587.33, 880].forEach((freq, i) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = "sine";
        const t = now + i * 0.035;
        osc.frequency.setValueAtTime(freq, t);
        gain.gain.setValueAtTime(0.028, t);
        gain.gain.exponentialRampToValueAtTime(0.001, t + 0.15);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(t);
        osc.stop(t + 0.15);
      });
    }
  } catch (e) {
    // Silencioso en caso de bloqueo
  }
}

function updateSoundBtnText() {
  const soundBtn = document.getElementById("soundBtn");
  if (!soundBtn) return;
  const onText = currentLang === 'en' ? 'SOUND ON' : 'SONIDO ON';
  const offText = currentLang === 'en' ? 'MUTED' : 'SONIDO OFF';
  const icon = soundEnabled ? '🔊' : '🔇';
  const eqBarClass = soundEnabled ? 'sound-eq-bar' : 'sound-eq-bar opacity-30';

  soundBtn.innerHTML = `
    <span>${icon}</span>
    <span class="sound-equalizer" aria-hidden="true">
      <span class="${eqBarClass} sound-eq-bar-1"></span>
      <span class="${eqBarClass} sound-eq-bar-2"></span>
      <span class="${eqBarClass} sound-eq-bar-3"></span>
    </span>
    <span>${soundEnabled ? onText : offText}</span>
  `;
}

function setupSoundFX() {
  const soundBtn = document.getElementById("soundBtn");
  if (soundBtn) {
    soundBtn.classList.toggle("is-active", soundEnabled);
    updateSoundBtnText();

    soundBtn.addEventListener("click", () => {
      soundEnabled = !soundEnabled;
      soundBtn.classList.toggle("is-active", soundEnabled);
      updateSoundBtnText();

      if (soundEnabled) {
        playUiSound("toggle");
        startBgMusic();
      } else {
        fadeBgMusicTo(0, 300);
      }
    });
  }

  // Hover interactivo global con debounce de 35ms para feedback táctil en toda la web
  let lastHoverTime = 0;
  document.addEventListener("mouseover", (e) => {
    if (!soundEnabled) return;

    // SILENCIAR VIDEOS AL PASAR EL MOUSE (Petición directa del usuario: solo sonido al hacer scroll)
    if (e.target.closest("#tiendas, #carousel-scroll-container, #carousel-track, .carousel-3d-card, .tiktok-frame, .video-card")) {
      return;
    }

    const now = performance.now();
    if (now - lastHoverTime < 35) return;

    const target = e.target.closest("button, a, .contact-pill-chip, .filter-tab, .bento-card, .contact-hub-card, .minimal-card, .rail-link");
    if (target && !target.closest(".carousel-3d-card") && !target.closest("#tiendas")) {
      lastHoverTime = now;
      playUiSound("hover");
    }
  }, { passive: true });

  // Sonidos al hacer clic en botones interactivos
  document.addEventListener("click", (e) => {
    if (!soundEnabled) return;
    const target = e.target.closest("button, .rail-link, .filter-tab, .carousel-nav-btn, a[href^='#']");
    if (target && target !== soundBtn) {
      playUiSound("click");
    }
  }, { passive: true });
}

/**
 * Efectos de sonido armónicos al hacer scroll a través de las transiciones de sección
 */
function setupScrollTransitionSounds() {
  const sections = document.querySelectorAll("section[id], header[id]");
  if (!sections.length) return;

  let currentSectionId = "";
  let lastSoundTime = 0;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && entry.intersectionRatio >= 0.25) {
        const id = entry.target.id;
        const now = performance.now();
        if (id && id !== currentSectionId && (now - lastSoundTime > 500)) {
          currentSectionId = id;
          lastSoundTime = now;
          if (typeof playUiSound === "function") {
            playUiSound("transition");
          }
        }
      }
    });
  }, {
    rootMargin: "-20% 0px -20% 0px",
    threshold: [0.25, 0.5]
  });

  sections.forEach(sec => observer.observe(sec));
}

/**
 * Scroll-spy activo para la cápsula de navegación flotante (.site-header-dock)
 */
function setupNavScrollSpy() {
  const navItems = document.querySelectorAll(".nav-dock-item[data-section], .mobile-dock-item[data-section]");
  if (!navItems.length) return;

  const sectionIds = ["tiendas", "impacto", "marcas", "pagos", "contacto"];
  const sections = sectionIds
    .map(id => document.getElementById(id))
    .filter(Boolean);

  if (!sections.length) return;

  let ticking = false;

  function updateActiveNav() {
    const scrollPos = window.scrollY + 220;
    let activeId = "";

    for (let i = sections.length - 1; i >= 0; i--) {
      const section = sections[i];
      if (section.offsetTop <= scrollPos) {
        activeId = section.id;
        break;
      }
    }

    navItems.forEach(item => {
      const sec = item.getAttribute("data-section");
      if (sec === activeId) {
        item.classList.add("is-active");
      } else {
        item.classList.remove("is-active");
      }
    });

    ticking = false;
  }

  window.addEventListener("scroll", () => {
    if (!ticking) {
      window.requestAnimationFrame(updateActiveNav);
      ticking = true;
    }
  }, { passive: true });

  updateActiveNav();
}

/**
 * Animación dinámica de la gráfica de crecimiento viral (+610K y stats)
 */
function setupViralGraphAnimation() {
  const card = document.getElementById("social-proof-card");
  const svg = card ? card.querySelector(".viral-growth-svg") : null;
  const audienceCounter = document.getElementById("counter-audience");
  const statCounters = card ? card.querySelectorAll(".stat-counter") : [];

  if (!card || !svg) return;

  let hasAnimated = false;

  function runCounters() {
    if (audienceCounter) {
      const target = parseInt(audienceCounter.dataset.target || "610000", 10);
      const duration = 1600;
      const startTime = performance.now();
      let lastUpdate = 0;

      function step(now) {
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const ease = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
        
        // Throttled a ~30ms para evitar saturación del hilo principal y reflows en móvil
        if (now - lastUpdate > 30 || progress === 1) {
          lastUpdate = now;
          const current = Math.floor(ease * target);
          audienceCounter.textContent = `+${current.toLocaleString("en-US")}`;
        }

        if (progress < 1) {
          requestAnimationFrame(step);
        } else {
          audienceCounter.textContent = `+${target.toLocaleString("en-US")}`;
        }
      }
      requestAnimationFrame(step);
    }

    statCounters.forEach(stat => {
      const target = parseFloat(stat.dataset.target || "0");
      const suffix = stat.dataset.suffix || "";
      const duration = 1400;
      const startTime = performance.now();
      let lastUpdate = 0;

      function step(now) {
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const ease = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
        
        if (now - lastUpdate > 35 || progress === 1) {
          lastUpdate = now;
          const current = (ease * target).toFixed(1);
          stat.textContent = `${current}${suffix}`;
        }

        if (progress < 1) {
          requestAnimationFrame(step);
        } else {
          stat.textContent = `${target}${suffix}`;
        }
      }
      requestAnimationFrame(step);
    });
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !hasAnimated) {
        hasAnimated = true;
        observer.unobserve(card); // Desactivar observador una vez disparado para evitar cálculos continuos en scroll
        svg.classList.add("is-animated");
        runCounters();
        playUiSound("slide");
      }
    });
  }, {
    threshold: 0.15,
    rootMargin: "0px 0px -20px 0px"
  });

  observer.observe(card);
}

/**
 * Revelado fluido al scroll (Framer Motion / Happy Scroll Animation)
 */
function setupScrollReveals() {
  const reveals = document.querySelectorAll(".reveal-on-scroll");
  if (!reveals.length) return;

  if (!("IntersectionObserver" in window) || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    reveals.forEach(el => el.classList.add("is-revealed"));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-revealed");
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.05,
    rootMargin: "0px 0px -30px 0px"
  });

  reveals.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      setTimeout(() => el.classList.add("is-revealed"), 60);
    } else {
      observer.observe(el);
    }
  });
}

/**
 * Transición suave del banner oficial con el scroll (siempre visible con parallax fluido)
 */
function setupHeroBannerScroll() {
  const banner = document.getElementById("chrisHeroBanner");
  if (!banner) return;

  banner.style.opacity = "1";

  let ticking = false;

  const updateBanner = () => {
    const scrollY = window.pageYOffset || document.documentElement.scrollTop;
    banner.style.transform = `translateY(${(scrollY * 0.22).toFixed(1)}px)`;
    ticking = false;
  };

  updateBanner();

  window.addEventListener("scroll", () => {
    if (!ticking) {
      window.requestAnimationFrame(updateBanner);
      ticking = true;
    }
  }, { passive: true });
}

/**
 * Observador de la sección de videos (#tiendas).
 * Permite que cuando el usuario pase de largo la lista de videos (scrollee fuera de la sección):
 * - Se cierre cualquier modal de video que hubiese quedado abierto.
 * - La música ambiental de fondo vuelva a sonar suavemente si estaba atenuada.
 */
function setupVideoSectionDuckObserver() {
  const tiendasSection = document.getElementById("tiendas");
  if (!tiendasSection) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // En cuanto la sección de videos se aproxima o entra a pantalla, asegurar que ya anden reproduciendo
        ensureCarouselVideosPlaying();
      } else {
        // Cuando el usuario pasa de largo la lista de videos (scrollea fuera de la sección):
        // 1. Silenciar cualquier video del carrusel que haya quedado desmuteado
        const vids = document.querySelectorAll("#carousel-track video");
        vids.forEach(v => { v.muted = true; });
        document.querySelectorAll("#carousel-track .carousel-3d-card").forEach(c => {
          c.classList.remove("is-video-unmuted");
          updateCardSoundUI(c, false);
        });

        // 2. Cerrar cualquier modal
        const dialog = document.getElementById("video-dialog");
        if (dialog && dialog.open) {
          closeVideoModal();
        }

        // 3. Restaurar suavemente la música ambiental de fondo
        if (soundEnabled) {
          restoreBgMusic();
        }
      }
    });
  }, {
    threshold: 0.05
  });

  observer.observe(tiendasSection);
}

