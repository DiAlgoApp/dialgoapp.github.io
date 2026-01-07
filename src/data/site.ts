export const defaultLocale = 'es';
export const locales = ['es', 'en'] as const;

export const withLocalePath = (locale: string, path: string) => {
  if (locale === defaultLocale) return path;
  if (path === '/') return `/${locale}`;
  return `/${locale}${path}`;
};

export const swapLocalePath = (path: string, targetLocale: string) => {
  const normalized = path.replace(/\/$/, '') || '/';
  const withoutLocale = normalized.startsWith('/en')
    ? normalized.replace(/^\/en(\/|$)/, '/')
    : normalized;
  if (targetLocale === defaultLocale) return withoutLocale === '' ? '/' : withoutLocale;
  if (withoutLocale === '/') return `/${targetLocale}`;
  return `/${targetLocale}${withoutLocale}`;
};

const es = {
  siteName: 'DiAlgo',
  siteUrl: 'https://dialgoapp.github.io',
  meta: {
    defaultTitle: 'DiAlgo — Conecta y cuida',
    defaultDescription:
      'Comunicación familiar pensada para personas mayores. Mensajes, recordatorios y coordinación de cuidados en un espacio seguro.',
    keywords:
      'gerontecnología, cuidado personas mayores, recordatorios medicación, comunicación familiar, app para abuelos',
    pages: {
      home: {
        title: 'DiAlgo — Conecta y cuida',
        description:
          'Comunicación familiar centrada en personas mayores: coordina cuidados, recuerda medicación y fortalece la red familiar.',
      },
      howItWorks: {
        title: 'Cómo funciona',
        description:
          'Un flujo sencillo para crear la familia, invitar cuidadores y gestionar comunicación y medicación.',
      },
      caregivers: {
        title: 'Para cuidadores y familias',
        description:
          'Casos de uso y beneficios para quienes coordinan cuidados y comunicación diaria.',
      },
      seniors: {
        title: 'Para personas mayores',
        description:
          'Interfaz simplificada, botones grandes y accesibilidad real para mayores.',
      },
      science: {
        title: 'Ciencia y evidencia',
        description:
          'Gerontecnología aplicada para mejorar la adherencia y la coordinación de cuidados.',
      },
      security: {
        title: 'Seguridad y privacidad',
        description: 'Protección de datos, roles y cumplimiento para un entorno fiable.',
      },
      resources: {
        title: 'Recursos y FAQ',
        description: 'Guías, respuestas rápidas y materiales para empezar con DiAlgo.',
      },
      contact: {
        title: 'Contacto y soporte',
        description: 'Hablemos de tu caso. Te ayudamos con demos, pruebas y despliegues.',
      },
      docs: {
        title: 'Documentación técnica',
        description: 'Arquitectura, stack y puntos clave para equipos técnicos.',
      },
      download: {
        title: 'Descargas y demo',
        description: 'Accede a la beta o solicita una demo guiada para tu equipo.',
      },
      blog: {
        title: 'Noticias y blog',
        description: 'Actualizaciones del producto y contenidos sobre gerontecnología.',
      },
      legalNotice: {
        title: 'Aviso legal',
        description: 'Información legal y condiciones de uso del sitio.',
      },
      privacy: {
        title: 'Política de privacidad',
        description: 'Cómo tratamos y protegemos los datos personales.',
      },
      cookies: {
        title: 'Política de cookies',
        description: 'Uso de cookies y preferencias de consentimiento.',
      },
    },
  },
  nav: [
    { label: 'Cómo funciona', href: '/como-funciona' },
    { label: 'Cuidadores y familias', href: '/para-cuidadores' },
    { label: 'Personas mayores', href: '/para-personas-mayores' },
    { label: 'Ciencia', href: '/ciencia' },
    { label: 'Seguridad', href: '/seguridad' },
    { label: 'Recursos', href: '/recursos' },
    { label: 'Contacto', href: '/contacto' },
  ],
  headerCta: {
    primary: { label: 'Probar ahora', href: '/contacto' },
    secondary: { label: 'Ver demo', href: '/descargar' },
  },
  hero: {
    eyebrow: 'Gerontecnología y coordinación de cuidados',
    slogan: 'DiAlgo — Conecta y cuida.',
    title: 'Conecta, coordina y cuida: comunicación familiar pensada para personas mayores.',
    subtitle:
      'Mensajes, recordatorios y logs en un espacio seguro. Interfaz simple para abuelos y control total para la familia.',
    primaryCta: { label: 'Probar ahora', href: '/contacto' },
    secondaryCta: { label: 'Ver demo', href: '/descargar' },
    note: 'Configuración en menos de 10 minutos. Acompañamiento en todo el proceso.',
    highlights: [
      'Roles claros (admin, familiar, mayor).',
      'Modo simplificado con accesibilidad real.',
      'Historial auditable de notificaciones.',
    ],
  },
  home: {
    stats: [
      { value: '3', label: 'roles con permisos claros' },
      { value: '2', label: 'modos de interfaz adaptados' },
      { value: 'WCAG AA', label: 'como estándar de accesibilidad' },
      { value: '24/7', label: 'visibilidad de mensajes y alertas' },
    ],
    benefits: [
      {
        title: 'Coordinación sin fricción',
        description:
          'Toda la familia en un mismo canal, con mensajes, recordatorios y eventos organizados por prioridades.',
      },
      {
        title: 'Tranquilidad y trazabilidad',
        description:
          'Registros completos de notificaciones y acciones para tomar decisiones informadas y transparentes.',
      },
      {
        title: 'Diseño centrado en mayores',
        description:
          'Interfaz con botones grandes, texto legible y respuestas rápidas que reducen la carga cognitiva.',
      },
    ],
    testimonials: [
      {
        quote:
          'Ahora toda la familia sabe cuándo se tomó la medicación y quién está de guardia. DiAlgo nos dio paz.',
        author: 'Laura M., cuidadora familiar',
      },
      {
        quote:
          'La interfaz para mayores es clara y sin ruido. Mi madre la usa sin ayuda.',
        author: 'Víctor S., hijo y cuidador',
      },
      {
        quote:
          'Como centro de día, necesitamos una herramienta simple y segura. DiAlgo encaja perfecto.',
        author: 'Equipo de coordinación, centro de día',
      },
    ],
  },
  features: [
    {
      title: 'Mensajes rápidos',
      description: 'Envía mensajes con un clic mediante plantillas y botones accesibles.',
    },
    {
      title: 'Recordatorios de medicación',
      description: 'Programación diaria con notificaciones push a familiares y cuidadores.',
    },
    {
      title: 'Roles y permisos',
      description: 'Administra quién puede enviar o ver ciertos mensajes en cada familia.',
    },
    {
      title: 'Historial auditable',
      description: 'Registro completo de notificaciones y exportación en CSV.',
    },
    {
      title: 'Modo anciano',
      description: 'Interfaz simplificada con tipografía grande y colores contrastados.',
    },
    {
      title: 'Seguridad integrada',
      description: 'Autenticación, almacenamiento cifrado y control de tokens.',
    },
  ],
  howItWorks: {
    steps: [
      {
        title: 'Crea la familia',
        description: 'Configura el espacio privado, define roles y permisos desde el primer minuto.',
      },
      {
        title: 'Invita a cuidadores',
        description: 'Familiares, profesionales y voluntarios se unen con un enlace seguro.',
      },
      {
        title: 'Activa recordatorios',
        description: 'Medicaciones, citas y rutinas con notificaciones automáticas y seguimiento.',
      },
      {
        title: 'Comunica y revisa',
        description: 'Mensajes claros y un historial siempre disponible para la coordinación diaria.',
      },
    ],
    flow: [
      'Registro rápido y verificación segura.',
      'Creación de familia y asignación de roles.',
      'Invitaciones por correo o enlace protegido.',
      'Configuración de medicación, rutinas y eventos.',
      'Uso diario con alertas y confirmaciones.',
    ],
    demo: {
      title: 'Demo interactiva',
      description:
        'Explora un entorno de ejemplo con mensajes, recordatorios y el modo simplificado para mayores.',
    },
  },
  caregivers: {
    title: 'Para cuidadores y familias',
    subtitle:
      'Centraliza la coordinación y evita duplicidades: todos saben qué pasa y cuándo actuar.',
    useCases: [
      {
        title: 'Medicaciones diarias',
        description: 'Alertas programadas y confirmaciones para evitar olvidos.',
      },
      {
        title: 'Reuniones y visitas',
        description: 'Agenda compartida con responsables asignados.',
      },
      {
        title: 'Urgencias leves',
        description: 'Canal rápido para comunicar incidencias y decidir acciones.',
      },
    ],
    highlights: [
      'Roles claros para evitar confusiones.',
      'Historial accesible en cualquier momento.',
      'Notificaciones configurables por prioridad.',
      'Seguimiento de tareas y recordatorios.',
    ],
  },
  seniors: {
    title: 'Para personas mayores',
    subtitle:
      'Una experiencia diseñada con calma: sencilla, accesible y con opciones que evitan errores.',
    features: [
      'Botones grandes y respuestas predefinidas.',
      'Tipografía legible y alto contraste.',
      'Navegación lineal sin menús confusos.',
      'Recordatorios visuales y sonoros.',
    ],
    support: {
      title: 'Acompañamiento real',
      description:
        'La familia puede configurar la app y ajustar el nivel de complejidad para cada persona.',
    },
  },
  science: {
    title: 'Ciencia y evidencia',
    summary:
      'DiAlgo aplica principios de gerontecnología para mejorar la adherencia a tratamientos y la conectividad social. Su diseño reduce la carga cognitiva del usuario mayor y facilita la coordinación entre cuidadores formales y familias.',
    principles: [
      {
        title: 'Carga cognitiva mínima',
        description: 'Interacciones simples y mensajes claros para usuarios con menos alfabetización digital.',
      },
      {
        title: 'Apoyo a la adherencia',
        description: 'Recordatorios recurrentes y confirmaciones visibles para toda la red de apoyo.',
      },
      {
        title: 'Conectividad social',
        description: 'Canales constantes para reducir aislamiento y reforzar vínculos familiares.',
      },
    ],
    evidence: [
      {
        title: 'Gerontecnología aplicada',
        description: 'Marco conceptual para integrar tecnología en el cuidado domiciliario.',
      },
      {
        title: 'Aging-in-place',
        description: 'Facilitar la permanencia en el hogar con soporte familiar coordinado.',
      },
      {
        title: 'Diseño centrado en la persona',
        description: 'Interfaces que priorizan seguridad, autonomía y confianza.',
      },
    ],
  },
  security: {
    title: 'Seguridad y privacidad',
    summary:
      'La información sensible se protege con autenticación robusta, permisos por rol y cifrado en tránsito.',
    safeguards: [
      'Autenticación segura (correo y proveedores confiables).',
      'Reglas estrictas por rol y familia en la base de datos.',
      'Cifrado TLS en tránsito y cifrado en reposo en Firebase.',
      'Registro de actividad para auditoría.',
      'Minimización de datos: solo lo imprescindible.',
    ],
    compliance: [
      'Cumplimiento GDPR y consentimiento explícito.',
      'Política de privacidad clara y accesible.',
      'Gestión transparente de permisos y acceso a logs.',
    ],
  },
  resources: {
    title: 'Recursos y FAQ',
    subtitle: 'Todo lo esencial para comenzar y resolver dudas frecuentes.',
    guides: [
      {
        title: 'Guía rápida para familias',
        description: 'Pasos para configurar la familia y asignar roles.',
        href: '/docs',
      },
      {
        title: 'Checklist de privacidad',
        description: 'Buenas prácticas para proteger datos sensibles.',
        href: '/seguridad',
      },
      {
        title: 'Plantilla de coordinación',
        description: 'Reparte tareas y horarios de cuidado sin solapamientos.',
        href: '/contacto',
      },
    ],
    faq: [
      {
        question: '¿Necesitamos que todos los familiares instalen la app?',
        answer:
          'No. Solo quienes participen activamente en la coordinación necesitan acceso. Puedes invitar por rol.',
      },
      {
        question: '¿Qué pasa si una persona mayor no usa smartphone?',
        answer:
          'Se puede definir un rol de cuidador principal que reciba y gestione las notificaciones clave.',
      },
      {
        question: '¿Puedo exportar el historial de notificaciones?',
        answer: 'Sí, el historial es exportable en CSV para revisiones o auditorías internas.',
      },
      {
        question: '¿Cómo se gestionan las urgencias?',
        answer:
          'Hay un canal rápido con alertas priorizadas para comunicar incidencias leves y decidir acciones.',
      },
      {
        question: '¿DiAlgo cumple con GDPR?',
        answer: 'Sí, trabajamos con consentimiento explícito y minimización de datos.',
      },
      {
        question: '¿Puedo solicitar una demo guiada?',
        answer: 'Claro, nuestro equipo puede acompañarte en una sesión remota.',
      },
    ],
  },
  contact: {
    title: 'Contacto',
    subtitle: 'Cuéntanos tu caso. Respondemos en menos de 24 horas laborables.',
    email: 'hola@dialgo.app',
    phone: '+34 900 123 456',
    address: 'Barcelona · Madrid · Remoto',
    channels: [
      { label: 'Soporte', value: 'soporte@dialgo.app' },
      { label: 'Prensa', value: 'prensa@dialgo.app' },
      { label: 'Colaboraciones', value: 'alianzas@dialgo.app' },
    ],
  },
  docs: {
    title: 'Documentación técnica',
    intro:
      'DiAlgo está diseñado como una plataforma modular sobre Firebase, con énfasis en seguridad y escalabilidad.',
    stack: [
      'Astro + componentes UI (Preact).',
      'Firebase Auth + Realtime Database.',
      'Notificaciones push vía Expo Push API.',
      'Cloud Functions para lógica sensible.',
    ],
    architecture: [
      {
        title: 'Frontend',
        description: 'Sitio estático optimizado para SEO y accesibilidad.',
      },
      {
        title: 'Backend',
        description: 'RTDB con reglas por rol y validaciones de datos.',
      },
      {
        title: 'Notificaciones',
        description: 'Registro de tokens y envío controlado por funciones seguras.',
      },
      {
        title: 'Analytics',
        description: 'Eventos clave para medir adherencia y coordinación.',
      },
    ],
    endpoints: [
      {
        method: 'POST',
        path: '/notifications/send',
        description: 'Envía notificaciones push a un grupo autorizado.',
      },
      {
        method: 'POST',
        path: '/family/invite',
        description: 'Genera invitaciones seguras para nuevos miembros.',
      },
      {
        method: 'GET',
        path: '/logs/:familyId',
        description: 'Recupera historial auditable de eventos.',
      },
    ],
    dataModel: [
      'families/{familyId}/members/{userId}',
      'families/{familyId}/messages/{messageId}',
      'families/{familyId}/medications/{reminderId}',
      'families/{familyId}/logs/{logId}',
    ],
    kpis: [
      'DAU / MAU y retención 7-30-90 días.',
      'Mensajes enviados por semana.',
      'Tasa de registro completado.',
      'Permisos de notificaciones concedidos.',
    ],
  },
  download: {
    title: 'Descarga y demo',
    subtitle: 'DiAlgo está en beta privada. Solicita acceso y agenda una demo guiada.',
    options: [
      {
        title: 'Demo guiada',
        description: 'Sesión remota con nuestro equipo para tu organización.',
        cta: { label: 'Solicitar demo', href: '/contacto' },
      },
      {
        title: 'Acceso beta',
        description: 'Lista de espera para familias y centros interesados.',
        cta: { label: 'Unirme a la beta', href: '/contacto' },
      },
      {
        title: 'Materiales de presentación',
        description: 'Pack con fichas, casos de uso y onboarding.',
        cta: { label: 'Pedir material', href: '/contacto' },
      },
    ],
  },
  blog: {
    title: 'Noticias y blog',
    subtitle: 'Contenido sobre gerontecnología, diseño inclusivo y coordinación de cuidados.',
    posts: [
      {
        title: 'Diseñar para mayores: 5 aprendizajes clave',
        description: 'Principios prácticos para interfaces inclusivas y seguras.',
        date: 'Próximamente',
      },
      {
        title: 'Coordinación familiar sin fricciones',
        description: 'Cómo reducir la carga mental en redes de cuidado.',
        date: 'Próximamente',
      },
      {
        title: 'Gerontecnología aplicada al día a día',
        description: 'Casos reales y oportunidades de innovación.',
        date: 'Próximamente',
      },
    ],
  },
  legal: {
    notice: {
      title: 'Aviso legal',
      sections: [
        {
          title: 'Titularidad',
          content:
            'DiAlgo es un proyecto orientado a la coordinación de cuidados familiares. Para información legal definitiva, contacta con nuestro equipo.',
        },
        {
          title: 'Condiciones de uso',
          content:
            'El acceso a este sitio implica la aceptación de las condiciones de uso y la política de privacidad vigente.',
        },
        {
          title: 'Propiedad intelectual',
          content:
            'Los contenidos, marca y diseño son propiedad de DiAlgo o de sus respectivos titulares.',
        },
      ],
    },
    privacy: {
      title: 'Política de privacidad',
      sections: [
        {
          title: 'Base legal y consentimiento',
          content:
            'Tratamos los datos personales con consentimiento explícito y únicamente para finalidades de coordinación y soporte.',
        },
        {
          title: 'Minimización de datos',
          content:
            'Recogemos solo la información necesaria para ofrecer el servicio y mejorar la experiencia.',
        },
        {
          title: 'Derechos de las personas usuarias',
          content:
            'Puedes solicitar acceso, rectificación o eliminación de tus datos escribiendo a privacidad@dialgo.app.',
        },
      ],
    },
    cookies: {
      title: 'Política de cookies',
      sections: [
        {
          title: 'Uso de cookies',
          content:
            'Utilizamos cookies técnicas y analíticas para mejorar la navegación. Puedes ajustar tus preferencias en cualquier momento.',
        },
        {
          title: 'Gestión de preferencias',
          content:
            'Las cookies no esenciales estarán desactivadas por defecto hasta que aceptes su uso.',
        },
      ],
    },
  },
  footer: {
    tagline: 'Comunicación familiar centrada en las personas mayores.',
    columns: [
      {
        title: 'Producto',
        links: [
          { label: 'Cómo funciona', href: '/como-funciona' },
          { label: 'Cuidadores y familias', href: '/para-cuidadores' },
          { label: 'Personas mayores', href: '/para-personas-mayores' },
          { label: 'Descargas', href: '/descargar' },
        ],
      },
      {
        title: 'Recursos',
        links: [
          { label: 'Recursos y FAQ', href: '/recursos' },
          { label: 'Ciencia', href: '/ciencia' },
          { label: 'Documentación técnica', href: '/docs' },
          { label: 'Noticias', href: '/blog' },
        ],
      },
      {
        title: 'Legal',
        links: [
          { label: 'Aviso legal', href: '/legal/aviso-legal' },
          { label: 'Privacidad', href: '/legal/privacidad' },
          { label: 'Cookies', href: '/legal/cookies' },
        ],
      },
    ],
    social: [{ label: 'Email', href: 'mailto:hola@dialgo.app' }],
  },
};

const en = {
  siteName: 'DiAlgo',
  siteUrl: 'https://dialgoapp.github.io',
  meta: {
    defaultTitle: '',
    defaultDescription: '',
    pages: {},
  },
  nav: [],
  headerCta: {},
  hero: {},
  home: {},
  features: [],
  howItWorks: {},
  caregivers: {},
  seniors: {},
  science: {},
  security: {},
  resources: {},
  contact: {},
  docs: {},
  download: {},
  blog: {},
  legal: {},
  footer: {},
};

const siteData = { es, en };

export const getSite = (locale: keyof typeof siteData) => siteData[locale] ?? siteData.es;
