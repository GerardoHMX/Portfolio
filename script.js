window.renderPortfolioProjects("es");
const menuButton = document.querySelector('.menu-button');
const navigation = document.querySelector('#nav');
function closeMenu() { navigation.classList.remove('open'); menuButton.setAttribute('aria-expanded', 'false'); }
menuButton.addEventListener('click', () => { const open = navigation.classList.toggle('open'); menuButton.setAttribute('aria-expanded', String(open)); });
navigation.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', event => { if (event.key === 'Escape' && navigation.classList.contains('open')) { closeMenu(); menuButton.focus(); } });
document.querySelector('#year').textContent = new Date().getFullYear();
if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  document.body.classList.add('js-motion');
  const observer = new IntersectionObserver(entries => { entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); } }); }, { threshold: 0.08 });
  document.querySelectorAll('.reveal').forEach(element => observer.observe(element));
}

const translations = {
  "Webs y sistemas web para dar vida a tu proyecto.":"Websites and web systems that bring your project to life.",
  "Listo para ayudarte, comprometido con cada detalle.":"Ready to help, committed to every detail.",
  "Soy Gerardo. Desarrollo páginas y aplicaciones web para personas, negocios y centros educativos.":"I’m Gerardo. I build websites and web applications for people, businesses and schools.",
  "¿Necesitas una web para tu negocio o una herramienta que facilite tu trabajo? Puedo ayudarte a convertir esa idea en una solución clara, práctica y adaptada a tus necesidades.":"Need a website for your business or a tool to make your work easier? I can help turn your idea into a clear, practical solution tailored to your needs.",
  "Sigo aprendiendo y mejorando cada día. En cada proyecto ofrezco comunicación directa, atención al detalle y mi compromiso al 100% para encontrar soluciones y cuidar el resultado.":"I keep learning and improving every day. On every project, I offer direct communication, attention to detail and my full commitment to finding solutions and delivering a thoughtful result.",
  "¿Buscas una página web o un sistema para tu negocio?":"Looking for a website or a web system for your business?",
  "Cuéntame tu idea. Estoy listo para ayudarte a construirla.":"Tell me about your idea. I’m ready to help you build it.",
  "Escríbeme":"Email me","Hablemos de tu idea":"Let’s discuss your idea","Explora mi código":"Explore my code","Llámame":"Call me",

  'Saltar al contenido':'Skip to content','Inicio':'Home','Principal':'Main navigation','MENÚ':'MENU',
  'Sobre mí':'About me','Proyectos':'Projects','Hablemos':'Let’s talk',
  'PORTFOLIO PERSONAL / 01':'PERSONAL PORTFOLIO / 01','HOLA, SOY':'HI, I’M',
  'Transformando ideas en experiencias digitales.':'Turning ideas into digital experiences.',
  'Una línea de código a la vez.':'One line of code at a time.','Explorar proyectos':'Explore projects','Conectemos':'Let’s connect',
  'SCROLL PARA EXPLORAR':'SCROLL TO EXPLORE','DISEÑO + CÓDIGO + CURIOSIDAD':'DESIGN + CODE + CURIOSITY',
  'DESARROLLO WEB':'WEB DEVELOPMENT','INTERFACES CON PERSONALIDAD':'INTERFACES WITH PERSONALITY',
  'APRENDER · CREAR · MEJORAR':'LEARN · CREATE · IMPROVE','01 / CONÓCEME':'01 / MEET ME','Detrás del':'Behind the','código.':'code.',
  'Soy Gerardo, un Junior Developer con curiosidad por lo que se puede construir en la web.':'I’m Gerardo, a Junior Developer curious about what we can build on the web.',
  'Me interesa crear interfaces claras, responsivas y con personalidad. Trabajo con HTML, CSS, JavaScript y TypeScript, y sigo explorando herramientas como Angular y Vite.':'I enjoy creating clear, responsive interfaces with personality. I work with HTML, CSS, JavaScript and TypeScript, and keep exploring tools like Angular and Vite.',
  'Mi enfoque: aprender haciendo, cuidar los detalles y mejorar con cada proyecto.':'My approach: learn by doing, pay attention to details and improve with every project.',
  'Curiosidad constante':'Always curious','Atención al detalle':'Attention to detail','Aprender construyendo':'Learn by building',
  '"Desarrollo web"':'"Web development"','"Experiencia de usuario"':'"User experience"','"Aprendizaje continuo"':'"Continuous learning"','"Seguir creando"':'"Keep creating"',
  '02 / MI CAJA DE HERRAMIENTAS':'02 / MY TOOLKIT','Mi':'My','Tecnologías con las que construyo y experimento.':'Technologies I build and experiment with.',
  'Estructura & semántica':'Structure & semantics','Diseño & animación':'Design & animation','Interacción & lógica':'Interaction & logic','Código con tipado':'Typed code','Aplicaciones web':'Web applications','Desarrollo & compilación':'Development & builds','Intercambio de datos':'Data exchange','Datos estructurados':'Structured data',
  'LENGUAJE':'LANGUAGE','HERRAMIENTA':'TOOL','FORMATO':'FORMAT',
  'Avatar de Gerardo Huizar Castro':'Avatar of Gerardo Huizar Castro',
  'Ideas convertidas en proyectos. Explora el código y las experiencias.':'Ideas turned into projects. Explore the code and the experiences.',
  '03 / IDEAS EN ACCIÓN':'03 / IDEAS IN ACTION','seleccionados.':'selected.','Un espacio para compartir lo que estoy construyendo.':'A place to share what I’m building.',
  '01 / WEB PERSONAL':'01 / PERSONAL WEBSITE','ESTE PROYECTO':'THIS PROJECT','Portafolio personal':'Personal portfolio',
  'Mi espacio en la web: una interfaz responsiva con estética neón y animaciones accesibles.':'My space on the web: a responsive interface with a neon aesthetic and accessible animations.',
  'Explorar portafolio':'Explore portfolio','EN':'UNDER','CONSTRUCCIÓN':'CONSTRUCTION','IDEA → CÓDIGO → EXPERIENCIA':'IDEA → CODE → EXPERIENCE','02 / PRÓXIMAMENTE':'02 / COMING SOON',
  'El próximo desafío':'The next challenge','Este espacio está reservado para mi siguiente proyecto. Nuevas ideas, nuevas cosas por aprender.':'This space is reserved for my next project. New ideas, new things to learn.','Por descubrir':'To be discovered','Próximamente':'Coming soon',
  '04 / INICIEMOS UNA CONVERSACIÓN':'04 / LET’S START A CONVERSATION','¿Creamos algo':'Let’s create something','increíble?':'incredible.',
  'Una idea, una oportunidad o simplemente un hola.':'An idea, an opportunity or just a hello.',
  'Las mejores conexiones empiezan con una conversación.':'The best connections start with a conversation.',
  'Correo electrónico':'Email','Escríbeme por WhatsApp':'Message me on WhatsApp','Llamar':'Call me','Teléfono':'Phone','HECHO CON CÓDIGO Y CURIOSIDAD':'MADE WITH CODE AND CURIOSITY','Volver al inicio':'Back to top'
};
const translatableNodes = [];
const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
while (walker.nextNode()) {
  const node = walker.currentNode;
  if (node.parentElement.closest('script, .language-switch, #animated-role, #project-list')) continue;
  const original = node.textContent;
  const key = original.trim();
  if (translations[key]) translatableNodes.push({node, original, english: original.replace(key, translations[key])});
  else if (node.parentElement.closest('.ticker')) {
    let english = original;
    ['DESARROLLO WEB', 'INTERFACES CON PERSONALIDAD', 'APRENDER · CREAR · MEJORAR'].forEach(phrase => { english = english.split(phrase).join(translations[phrase]); });
    translatableNodes.push({node, original, english});
  }
}
const translatedAttributes = [...document.querySelectorAll('[aria-label]')].map(element => ({element, original: element.getAttribute('aria-label')}));
let language = 'es';
function setLanguage(next) {
  language = next;
  document.documentElement.lang = next;
  window.renderPortfolioProjects(next);
  translatableNodes.forEach(({node, original, english}) => { node.textContent = next === 'en' ? english : original; });
  translatedAttributes.forEach(({element, original}) => { element.setAttribute('aria-label', next === 'en' ? (translations[original] || original) : original); });
  document.querySelectorAll('[data-language]').forEach(button => button.setAttribute('aria-pressed', String(button.dataset.language === next)));
  document.querySelector('meta[name="description"]').content = next === 'en' ? 'Gerardo Huizar Castro. Websites and web applications for businesses, people and schools. Explore my projects and get in touch.' : 'Gerardo Huizar Castro. Páginas y aplicaciones web para negocios, personas y centros educativos. Descubre mis proyectos y hablemos.';
  try { localStorage.setItem('portfolio-language', next); } catch {}
}
document.querySelectorAll('[data-language]').forEach(button => button.addEventListener('click', () => setLanguage(button.dataset.language)));
try { if (localStorage.getItem('portfolio-language') === 'en') setLanguage('en'); } catch {}

const roleElement = document.querySelector('#animated-role');
const roles = ['Junior Developer', 'Web Page Designer', 'Frontend Developer'];
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
let roleIndex = 0;
let character = roles[0].length;
let deleting = true;
let roleTimer;
function animateRole() {
  if (reducedMotion.matches) { roleElement.textContent = roles[0]; return; }
  if (document.hidden) { roleTimer = setTimeout(animateRole, 1000); return; }
  const role = roles[roleIndex];
  character += deleting ? -1 : 1;
  roleElement.textContent = role.slice(0, character);
  let delay = deleting ? 45 : 85;
  if (character === 0) { deleting = false; roleIndex = (roleIndex + 1) % roles.length; delay = 300; }
  else if (!deleting && character === role.length) { deleting = true; delay = 2500; }
  roleTimer = setTimeout(animateRole, delay);
}
if (!reducedMotion.matches) roleTimer = setTimeout(animateRole, 2800);
reducedMotion.addEventListener('change', () => { clearTimeout(roleTimer); roleIndex = 0; character = roles[0].length; deleting = true; roleElement.textContent = roles[0]; if (!reducedMotion.matches) roleTimer = setTimeout(animateRole, 2800); });
