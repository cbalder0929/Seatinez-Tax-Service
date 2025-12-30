// Translation system for Seatinez Tax Service
const translations = {
	en: {
		// Navigation
		navHome: "Home",
		navAbout: "About Us",
		navServices: "Services",
		navPricing: "Pricing",
		navFAQ: "FAQ",
		navContact: "Contact",
		navCall: "Call: (872) 207-5311",
		
		// Home Page
		heroTitle: "Simple. Accurate. On Time.",
		heroDescription: "We prepare and file your taxes with precision and care. From individual W2 filings to complex business tax returns, we handle all your tax preparation needs so you don't have to worry.",
		ctaCallNow: "Call Now - Book Appointment",
		whoWeServe: "Who We Serve",
		whoWeServeDesc: "We help individuals, families, and businesses in Chicago get their taxes done right",
		whoIndividuals: "Individuals & Families",
		whoIndividualsDesc: "Personal tax returns, W2 filing, and maximizing your refund",
		whoBusiness: "Small Businesses",
		whoBusinessDesc: "Business tax filing, bookkeeping, and year-round financial support",
		whoSelfEmployed: "Self-Employed",
		whoSelfEmployedDesc: "1099 filing, deductions, and quarterly tax planning",
		whyTrust: "Why Trust Seatinez Tax Service?",
		trustLocal: "Local Chicago Business",
		trustLocalDesc: "Serving the Chicago community with personalized, in-person service",
		trustExperience: "Years of Experience",
		trustExperienceDesc: "Expert tax preparers with extensive knowledge of tax laws and regulations",
		trustBilingual: "Bilingual Service",
		trustBilingualDesc: "English and Spanish speaking staff to serve all our clients",
		trustIRS: "IRS Certified",
		trustIRSDesc: "Professional tax preparation you can trust",
		testimonials: "What Our Clients Say",
		testimonial1: "\"Seatinez Tax Service made filing my taxes so easy. They found deductions I didn't even know about and got me a bigger refund than I expected!\"",
		testimonial1Author: "— Maria G., Chicago",
		testimonial2: "\"As a small business owner, I trust them with all my bookkeeping and tax filing. Professional, reliable, and always on time.\"",
		testimonial2Author: "— Carlos R., Business Owner",
		howItWorks: "How It Works",
		howItWorksDesc: "Getting your taxes done is simple with just 3 easy steps",
		step1: "Call Us",
		step1Desc: "Schedule your appointment by calling (872) 207-5311 or click the button below",
		step2: "Bring Your Documents",
		step2Desc: "Bring your W2s, receipts, and any other tax documents to our office",
		step3: "We File For You",
		step3Desc: "We prepare and file your taxes accurately and on time. You're done!",
		ctaCallNumber: "Call Now - (872) 207-5311",
		ourServices: "Our Services",
		servicesDesc: "Comprehensive tax and bookkeeping solutions",
		serviceW2: "W2 Filing",
		serviceW2Desc: "Professional W2 preparation and filing services",
		serviceBookkeeping: "Bookkeeping",
		serviceBookkeepingDesc: "Accurate financial record keeping and management",
		serviceBusiness: "Business Filing",
		serviceBusinessDesc: "Complete business tax filing and compliance",
		serviceOther: "Other Bookkeeping Services",
		serviceOtherDesc: "Additional accounting and financial services",
		contactAddress: "Address",
		contactPhone: "Phone",
		contactHours: "Hours",
		contactHoursText: "Monday - Saturday: 9:00 AM - 6:00 PM",
		
		// Services Page
		servicesHeroTitle: "Complete Tax Services",
		servicesHeroDesc: "We handle all types of tax returns for individuals and businesses. From simple W2 filings to complex business taxes, past returns, ITIN applications, IRS issues, and year-round bookkeeping—we've got you covered.",
		servicesWhoTitle: "Who We Serve",
		servicesWhoDesc: "We help both individuals and business owners with all their tax needs",
		servicesWho1: "Individuals & Families",
		servicesWho1Desc: "Personal tax returns, W2 filing, maximizing refunds, and handling IRS correspondence",
		servicesWho2: "Business Owners",
		servicesWho2Desc: "Small business tax filing, bookkeeping, payroll taxes, and business compliance",
		servicesWho3: "Everyone",
		servicesWho3Desc: "Whether you're self-employed, have multiple income sources, or need help with past returns—we can help",
		servicesDifferent: "What Makes Our Service Different",
		servicesDifferent1: "Bilingual Support",
		servicesDifferent1Desc: "English and Spanish speaking staff to serve all our clients comfortably",
		servicesDifferent2: "Local Chicago Experts",
		servicesDifferent2Desc: "We understand local tax situations and work face-to-face with you",
		servicesDifferent3: "Year-Round Service",
		servicesDifferent3Desc: "Not just tax season—we're here for bookkeeping, IRS issues, and questions all year",
		servicesDifferent4: "Personal Attention",
		servicesDifferent4Desc: "We take time to understand your situation and find every deduction you deserve",
		
		// Pricing Page
		pricingHeroTitle: "Transparent Pricing",
		pricingHeroDesc: "No surprises, no hidden fees. We believe in honest, upfront pricing. Get a free quote before we start, and we won't file until you approve the final price.",
		pricingPromise: "Our Pricing Promise",
		pricingPromise1: "✓ Free Quote First",
		pricingPromise1Desc: "We'll review your documents and give you a price before we start",
		pricingPromise2: "✓ No Hidden Fees",
		pricingPromise2Desc: "What we quote is what you pay—no surprises",
		pricingPromise3: "✓ No Filing Until You Approve",
		pricingPromise3Desc: "We show you everything before filing and you approve the final price",
		whatItCosts: "What It Costs",
		whatItCostsDesc: "Starting prices for common services. Final price depends on your specific situation.",
		priceBasic: "Basic Individual Return",
		priceBasicAmount: "$75",
		priceItemized: "Itemized Return",
		priceItemizedAmount: "$150",
		priceSelfEmployed: "Self-Employed / 1099",
		priceSelfEmployedAmount: "$200",
		priceBusiness: "Small Business Return",
		priceBusinessAmount: "$300",
		
		// About Page
		aboutHeroTitle: "Your Trusted Tax Professionals",
		aboutHeroDesc: "We're a local Chicago family business dedicated to helping our neighbors with their taxes. We treat every client like family because that's who you are to us—part of our community.",
		ourStory: "Our Story",
		
		// FAQ Page
		faqHeroTitle: "Frequently Asked Questions",
		faqHeroDesc: "Quick answers to common questions. Can't find what you're looking for? Give us a call—we're happy to help.",
		
		// Contact Page
		contactHeroTitle: "Contact Us & Book Appointment",
		contactHeroDesc: "Get in touch with us today. Same-day appointments available. We respond quickly to all inquiries.",
		howToReach: "How to Reach Us",
		howToReachDesc: "Choose the way that's easiest for you",
		contactCall: "Call Us",
		contactCallDesc: "Fastest way to reach us",
		contactVisit: "Visit Us",
		contactVisitDesc: "Walk-ins welcome, appointments preferred",
		contactHoursTitle: "Our Hours",
		contactHoursDesc: "Monday - Saturday",
		contactHoursTime: "9:00 AM - 6:00 PM",
		contactHoursClosed: "Sunday: Closed",
		findUs: "Find Us",
		findUsDesc: "We're located in Chicago, easily accessible",
		responseTime: "How Fast Will We Respond?",
		responsePhone: "Phone Calls",
		responsePhoneDesc: "We answer during business hours. If we're busy, we'll call you back the same day.",
		responseWalkin: "Walk-ins",
		responseWalkinDesc: "We'll help you if we're available. During tax season, appointments are recommended.",
		responseAppt: "Appointments",
		responseApptDesc: "Same-day appointments available! Call to check availability.",
		sendMessage: "Send Us a Message",
		sendMessageDesc: "Fill out the form below and we'll get back to you quickly",
		
		// Language Toggle
		langToggle: "ES",
		langCurrent: "EN"
	},
	
	es: {
		// Navigation
		navHome: "Inicio",
		navAbout: "Acerca de Nosotros",
		navServices: "Servicios",
		navPricing: "Precios",
		navFAQ: "Preguntas Frecuentes",
		navContact: "Contacto",
		navCall: "Llamar: (872) 207-5311",
		
		// Home Page
		heroTitle: "Simple. Preciso. A Tiempo.",
		heroDescription: "Preparamos y presentamos sus impuestos con precisión y cuidado. Desde declaraciones individuales de W2 hasta declaraciones de impuestos comerciales complejas, manejamos todas sus necesidades de preparación de impuestos para que no tenga que preocuparse.",
		ctaCallNow: "Llame Ahora - Reserve Cita",
		whoWeServe: "A Quién Servimos",
		whoWeServeDesc: "Ayudamos a individuos, familias y empresas en Chicago a hacer sus impuestos correctamente",
		whoIndividuals: "Individuos y Familias",
		whoIndividualsDesc: "Declaraciones de impuestos personales, presentación de W2 y maximización de su reembolso",
		whoBusiness: "Pequeñas Empresas",
		whoBusinessDesc: "Presentación de impuestos comerciales, contabilidad y apoyo financiero durante todo el año",
		whoSelfEmployed: "Trabajadores Independientes",
		whoSelfEmployedDesc: "Presentación de 1099, deducciones y planificación de impuestos trimestrales",
		whyTrust: "¿Por Qué Confiar en Seatinez Tax Service?",
		trustLocal: "Negocio Local de Chicago",
		trustLocalDesc: "Sirviendo a la comunidad de Chicago con servicio personalizado y en persona",
		trustExperience: "Años de Experiencia",
		trustExperienceDesc: "Preparadores de impuestos expertos con amplio conocimiento de las leyes y regulaciones fiscales",
		trustBilingual: "Servicio Bilingüe",
		trustBilingualDesc: "Personal que habla inglés y español para servir a todos nuestros clientes",
		trustIRS: "Certificado por el IRS",
		trustIRSDesc: "Preparación de impuestos profesional en la que puede confiar",
		testimonials: "Lo Que Dicen Nuestros Clientes",
		testimonial1: "\"Seatinez Tax Service hizo que presentar mis impuestos fuera tan fácil. ¡Encontraron deducciones que ni siquiera sabía que existían y me consiguieron un reembolso más grande del que esperaba!\"",
		testimonial1Author: "— Maria G., Chicago",
		testimonial2: "\"Como dueño de una pequeña empresa, confío en ellos para toda mi contabilidad y presentación de impuestos. Profesionales, confiables y siempre a tiempo.\"",
		testimonial2Author: "— Carlos R., Dueño de Negocio",
		howItWorks: "Cómo Funciona",
		howItWorksDesc: "Hacer sus impuestos es simple con solo 3 pasos fáciles",
		step1: "Llámenos",
		step1Desc: "Programe su cita llamando al (872) 207-5311 o haga clic en el botón a continuación",
		step2: "Traiga Sus Documentos",
		step2Desc: "Traiga sus W2, recibos y cualquier otro documento fiscal a nuestra oficina",
		step3: "Nosotros Presentamos Por Usted",
		step3Desc: "Preparamos y presentamos sus impuestos con precisión y a tiempo. ¡Listo!",
		ctaCallNumber: "Llame Ahora - (872) 207-5311",
		ourServices: "Nuestros Servicios",
		servicesDesc: "Soluciones integrales de impuestos y contabilidad",
		serviceW2: "Presentación de W2",
		serviceW2Desc: "Servicios profesionales de preparación y presentación de W2",
		serviceBookkeeping: "Contabilidad",
		serviceBookkeepingDesc: "Mantenimiento y gestión precisa de registros financieros",
		serviceBusiness: "Presentación Comercial",
		serviceBusinessDesc: "Presentación de impuestos comerciales completa y cumplimiento",
		serviceOther: "Otros Servicios de Contabilidad",
		serviceOtherDesc: "Servicios contables y financieros adicionales",
		contactAddress: "Dirección",
		contactPhone: "Teléfono",
		contactHours: "Horario",
		contactHoursText: "Lunes - Sábado: 9:00 AM - 6:00 PM",
		
		// Services Page
		servicesHeroTitle: "Servicios Fiscales Completos",
		servicesHeroDesc: "Manejamos todos los tipos de declaraciones de impuestos para individuos y empresas. Desde presentaciones simples de W2 hasta impuestos comerciales complejos, declaraciones pasadas, solicitudes de ITIN, problemas con el IRS y contabilidad durante todo el año—lo tenemos cubierto.",
		servicesWhoTitle: "A Quién Servimos",
		servicesWhoDesc: "Ayudamos tanto a individuos como a dueños de negocios con todas sus necesidades fiscales",
		servicesWho1: "Individuos y Familias",
		servicesWho1Desc: "Declaraciones de impuestos personales, presentación de W2, maximización de reembolsos y manejo de correspondencia del IRS",
		servicesWho2: "Dueños de Negocios",
		servicesWho2Desc: "Presentación de impuestos para pequeñas empresas, contabilidad, impuestos sobre la nómina y cumplimiento comercial",
		servicesWho3: "Todos",
		servicesWho3Desc: "Ya sea que sea trabajador independiente, tenga múltiples fuentes de ingresos o necesite ayuda con declaraciones pasadas—podemos ayudar",
		servicesDifferent: "Qué Hace Diferente Nuestro Servicio",
		servicesDifferent1: "Soporte Bilingüe",
		servicesDifferent1Desc: "Personal que habla inglés y español para servir cómodamente a todos nuestros clientes",
		servicesDifferent2: "Expertos Locales de Chicago",
		servicesDifferent2Desc: "Entendemos las situaciones fiscales locales y trabajamos cara a cara con usted",
		servicesDifferent3: "Servicio Durante Todo el Año",
		servicesDifferent3Desc: "No solo temporada de impuestos—estamos aquí para contabilidad, problemas con el IRS y preguntas durante todo el año",
		servicesDifferent4: "Atención Personal",
		servicesDifferent4Desc: "Nos tomamos el tiempo para entender su situación y encontrar cada deducción que se merece",
		
		// Pricing Page
		pricingHeroTitle: "Precios Transparentes",
		pricingHeroDesc: "Sin sorpresas, sin tarifas ocultas. Creemos en precios honestos y directos. Obtenga una cotización gratuita antes de comenzar, y no presentaremos hasta que apruebe el precio final.",
		pricingPromise: "Nuestra Promesa de Precios",
		pricingPromise1: "✓ Cotización Gratuita Primero",
		pricingPromise1Desc: "Revisaremos sus documentos y le daremos un precio antes de comenzar",
		pricingPromise2: "✓ Sin Tarifas Ocultas",
		pricingPromise2Desc: "Lo que cotizamos es lo que paga—sin sorpresas",
		pricingPromise3: "✓ Sin Presentar Hasta Que Apruebe",
		pricingPromise3Desc: "Le mostramos todo antes de presentar y usted aprueba el precio final",
		whatItCosts: "Cuánto Cuesta",
		whatItCostsDesc: "Precios iniciales para servicios comunes. El precio final depende de su situación específica.",
		priceBasic: "Declaración Individual Básica",
		priceBasicAmount: "$75",
		priceItemized: "Declaración Detallada",
		priceItemizedAmount: "$150",
		priceSelfEmployed: "Trabajador Independiente / 1099",
		priceSelfEmployedAmount: "$200",
		priceBusiness: "Declaración de Pequeña Empresa",
		priceBusinessAmount: "$300",
		
		// About Page
		aboutHeroTitle: "Sus Profesionales Fiscales de Confianza",
		aboutHeroDesc: "Somos un negocio familiar local de Chicago dedicado a ayudar a nuestros vecinos con sus impuestos. Tratamos a cada cliente como familia porque eso es lo que son para nosotros—parte de nuestra comunidad.",
		ourStory: "Nuestra Historia",
		
		// FAQ Page
		faqHeroTitle: "Preguntas Frecuentes",
		faqHeroDesc: "Respuestas rápidas a preguntas comunes. ¿No encuentra lo que busca? Llámenos—estaremos encantados de ayudar.",
		
		// Contact Page
		contactHeroTitle: "Contáctenos y Reserve Cita",
		contactHeroDesc: "Póngase en contacto con nosotros hoy. Citas el mismo día disponibles. Respondemos rápidamente a todas las consultas.",
		howToReach: "Cómo Contactarnos",
		howToReachDesc: "Elija la forma que sea más fácil para usted",
		contactCall: "Llámenos",
		contactCallDesc: "La forma más rápida de contactarnos",
		contactVisit: "Visítenos",
		contactVisitDesc: "Atención sin cita previa, se prefieren citas",
		contactHoursTitle: "Nuestro Horario",
		contactHoursDesc: "Lunes - Sábado",
		contactHoursTime: "9:00 AM - 6:00 PM",
		contactHoursClosed: "Domingo: Cerrado",
		findUs: "Encuéntrenos",
		findUsDesc: "Estamos ubicados en Chicago, fácilmente accesible",
		responseTime: "¿Qué Tan Rápido Responderemos?",
		responsePhone: "Llamadas Telefónicas",
		responsePhoneDesc: "Respondemos durante el horario comercial. Si estamos ocupados, le devolveremos la llamada el mismo día.",
		responseWalkin: "Atención Sin Cita",
		responseWalkinDesc: "Le ayudaremos si estamos disponibles. Durante la temporada de impuestos, se recomiendan las citas.",
		responseAppt: "Citas",
		responseApptDesc: "¡Citas el mismo día disponibles! Llame para verificar disponibilidad.",
		sendMessage: "Envíenos un Mensaje",
		sendMessageDesc: "Complete el formulario a continuación y nos pondremos en contacto con usted rápidamente",
		
		// Language Toggle
		langToggle: "EN",
		langCurrent: "ES"
	}
};

// Language detection and management
let currentLang = 'en';

function detectLanguage() {
	// Check localStorage first
	const savedLang = localStorage.getItem('preferredLanguage');
	if (savedLang && (savedLang === 'en' || savedLang === 'es')) {
		return savedLang;
	}
	
	// Detect browser language
	const browserLang = navigator.language || navigator.userLanguage;
	if (browserLang.startsWith('es')) {
		return 'es';
	}
	
	return 'en';
}

function setLanguage(lang) {
	if (lang !== 'en' && lang !== 'es') return;
	
	currentLang = lang;
	localStorage.setItem('preferredLanguage', lang);
	document.documentElement.lang = lang;
	
	// Update all elements with data-translate attribute
	document.querySelectorAll('[data-translate]').forEach(element => {
		const key = element.getAttribute('data-translate');
		if (translations[lang] && translations[lang][key]) {
			if (element.tagName === 'INPUT' && element.type === 'submit') {
				element.value = translations[lang][key];
			} else if (element.tagName === 'INPUT' && element.placeholder) {
				element.placeholder = translations[lang][key];
			} else {
				element.textContent = translations[lang][key];
			}
		}
	});
	
	// Update language toggle button
	const langToggle = document.getElementById('langToggle');
	if (langToggle) {
		langToggle.textContent = lang === 'en' ? 'ES' : 'EN';
		langToggle.setAttribute('aria-label', lang === 'en' ? 'Switch to Spanish' : 'Cambiar a Inglés');
	}
}

function initLanguage() {
	currentLang = detectLanguage();
	setLanguage(currentLang);
}

// Initialize on page load
if (document.readyState === 'loading') {
	document.addEventListener('DOMContentLoaded', initLanguage);
} else {
	initLanguage();
}

