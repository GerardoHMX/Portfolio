// PLANTILLA EDITABLE: cambia los datos aquí y guarda las imágenes en assets/.
// Usa "" cuando todavía no tengas una imagen o un enlace.
// Duplica una tarjeta para añadir un proyecto. hidden: true permite ocultarlo.
window.portfolioContent = {
  avatar: "assets/avatar.png",
  logo: "assets/avatar.png", // Puedes sustituirlo por assets/mi-logo.png.
  favicon: "assets/avatar.png",
  projects: [
    {
      title: { es: "Motobox Mijas", en: "Motobox Mijas" },
      description: { es: "Web para un taller de motocicletas en Mijas: servicios, marcas, motos de ocasión y contacto.", en: "Website for a motorcycle workshop in Mijas: services, brands, used motorcycles and contact information." },
      category: { es: "WEB", en: "WEBSITE" },
      image: "assets/motobox-mijas.png",
      imageAlt: { es: "Vista de la web de Motobox Mijas", en: "Motobox Mijas website preview" },
      logo: "", // Logo del proyecto, opcional.
      url: "https://motoboxmijas.com/",
      repository: "",
      technologies: ["HTML", "CSS", "JavaScript", "Vite", "Google Sheets"], // Ejemplo: ["HTML", "CSS", "JavaScript"]
      accent: "pink",
      hidden: false
    },
    {
      title: { es: "Tabla periódica", en: "Periodic table" },
      description: { es: "Proyecto escolar para Torre Almenara, en La Cala de Mijas. Una tabla periódica para consultar los elementos y sus propiedades, con un botón que cambia a una versión de alimentos.", en: "A school assignment for Torre Almenara in La Cala de Mijas. A periodic table for exploring the elements and their properties, with a button that switches to a food-themed version." },
      category: { es: "EDUCACIÓN", en: "EDUCATION" },
      image: "assets/tabla-periodica.png", imageAlt: { es: "Tabla periódica con elementos, símbolos y masas atómicas", en: "Periodic table with elements, symbols and atomic masses" },
      logo: "", url: "https://gerardohmx.github.io/TablaPeriodica/", repository: "https://github.com/GerardoHMX/TablaPeriodica",
      technologies: [ "HTML", "CSS", "JavaScript", "Google Sheets"], accent: "green", hidden: false
    },
    {
      title: { es: "Baremos", en: "Baremos" },
      description: { es: "Aplicación web para profesores de Educación Física del Colegio San Francisco de Asís, en Fuengirola. Gestión de pruebas, clases, alumnos y baremos en un mismo lugar.", en: "Web application for Physical Education teachers at Colegio San Francisco de Asís in Fuengirola. Manage tests, classes, students and assessment criteria in one place." },
      category: { es: "EDUCACIÓN", en: "EDUCATION" },
      image: "assets/baremos.png", imageAlt: { es: "Panel de clases de la aplicación Baremos", en: "Class dashboard in the Baremos application" },
      logo: "", url: "https://gerardohmx.github.io/baremos/", repository: "https://github.com/GerardoHMX/baremos",
      technologies: ["HTML", "CSS", "JavaScript", "Google Sheets"], accent: "purple", hidden: false
    },
    {
      title: { es: "Eras de la Tierra", en: "Earth’s eras" },
      description: { es: "Scrapbook digital para aprender sobre las eras de la Tierra y la historia de nuestro planeta. Proyecto escolar de Torre Almenara, en La Cala de Mijas.", en: "A digital scrapbook for learning about Earth’s eras and the history of our planet. A school project for Torre Almenara in La Cala de Mijas." },
      category: { es: "EDUCACIÓN", en: "EDUCATION" },
      image: "assets/eras-tierra.png", imageAlt: { es: "Portada del scrapbook Historia de nuestro planeta", en: "Cover of the History of our planet scrapbook" },
      logo: "", url: "https://gerardohmx.github.io/ErasTierra", repository: "https://github.com/GerardoHMX/ErasTierra",
      technologies: ["JavaScript"], accent: "yellow", hidden: false
    },
    {
      title: { es: "Torneo Al-Ándalus", en: "Al-Ándalus Tournament" },
      description: { es: "Web del torneo de fútbol sala del Colegio San Francisco de Asís, en Fuengirola. Información del torneo, cuadro de competición, líderes, sancionados, resultados y noticias.", en: "Website for the futsal tournament at Colegio San Francisco de Asís in Fuengirola. Tournament information, bracket, leaders, suspended players, results and news." },
      category: { es: "DEPORTE ESCOLAR", en: "SCHOOL SPORTS" },
      image: "assets/torneo-al-andalus.png",
      imageAlt: { es: "Web del torneo de fútbol sala Al-Ándalus, temporada 2025–2026", en: "Al-Ándalus futsal tournament website, 2025–2026 season" },
      logo: "", url: "https://gerardohmx.github.io/TorneoAl-Andalus/",
      repository: "https://github.com/GerardoHMX/TorneoAl-Andalus",
      technologies: ["JavaScript"], accent: "pink", hidden: false
    },
    {
      title: { es: "Laboratorio virtual de materiales", en: "Virtual Materials Testing Lab" },
      description: { es: "Aplicación didáctica para el Colegio San Francisco de Asís, en Fuengirola. Simula ensayos técnicos de materiales y explica sus propiedades mecánicas de forma visual y esquemática. Funciona en el navegador, sin servidor ni instalación.", en: "An educational application for Colegio San Francisco de Asís in Fuengirola. It simulates technical materials tests and explains mechanical properties through visual diagrams. Runs in the browser, with no server or installation required." },
      category: { es: "SIMULACIÓN EDUCATIVA", en: "EDUCATIONAL SIMULATION" },
      image: "assets/laboratorio-materiales.png",
      imageAlt: { es: "Simulación de ensayo de tracción con máquina, curva tensión-deformación y parámetros mecánicos", en: "Tensile test simulation with a testing machine, stress-strain curve and mechanical parameters" },
      logo: "", url: "https://gerardohmx.github.io/MaterialsTestingVirtualLab/",
      repository: "https://github.com/GerardoHMX/MaterialsTestingVirtualLab",
      technologies: ["HTML", "JavaScript", "Tailwind CSS"], accent: "purple", hidden: false
    },
    {
      title: { es: "Portafolio personal", en: "Personal portfolio" },
      description: { es: "Mi espacio en la web: una interfaz responsiva con estética neón y animaciones accesibles.", en: "My space on the web: a responsive interface with a neon aesthetic and accessible animations." },
      category: { es: "WEB PERSONAL", en: "PERSONAL WEBSITE" },
      image: "", imageAlt: { es: "Vista de mi portafolio", en: "My portfolio preview" },
      logo: "assets/avatar.png", url: "#inicio", repository: "",
      technologies: ["HTML", "CSS", "JavaScript"], accent: "green", hidden: false
    }
  ]
};
