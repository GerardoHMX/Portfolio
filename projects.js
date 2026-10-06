(() => {
  const content = window.portfolioContent;
  function element(tag, className, text) {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text) node.textContent = text;
    return node;
  }
  const localized = (value, language) => typeof value === 'string' ? value : value?.[language] || value?.es || '';
  function safeUrl(value, image = false) {
    if (!value || typeof value !== 'string') return '';
    try {
      const url = new URL(value, window.location.href);
      if (!['https:', 'http:'].includes(url.protocol)) return '';
      if (image && url.origin !== window.location.origin && url.protocol !== 'https:') return '';
      return value;
    } catch { return ''; }
  }
  function projectImage(source, alt, className, fallback) {
    const image = element('img', className);
    image.alt = alt;
    image.loading = 'lazy';
    image.decoding = 'async';
    image.addEventListener('error', () => { image.remove(); if (fallback) fallback.hidden = false; }, {once:true});
    image.src = source;
    return image;
  }
  document.querySelectorAll('.brand-avatar').forEach(image => { image.src = safeUrl(content.logo, true) || 'assets/avatar.png'; });
  const avatar = document.querySelector('.profile-avatar');
  avatar.src = safeUrl(content.avatar, true) || 'assets/avatar.png';
  const favicon = safeUrl(content.favicon, true);
  if (favicon) { const icon = document.querySelector('link[rel="icon"]'); icon.removeAttribute('type'); icon.href = favicon; }

  window.renderPortfolioProjects = language => {
    const container = document.querySelector('#project-list');
    container.replaceChildren();
    content.projects.filter(project => !project.hidden).forEach((project, index) => {
      const title = localized(project.title, language);
      const article = element('article', 'project');
      const accent = ['green', 'pink', 'purple', 'yellow'].includes(project.accent) ? project.accent : 'green';
      const preview = element('div', `project-preview configurable-preview accent-${accent}`);
      const cover = element('div', 'project-cover-fallback');
      cover.append(element('span', 'preview-label', localized(project.category, language)), element('strong', '', title), element('span', 'preview-bottom', 'GERARDO HUIZAR CASTRO / WEB'));
      preview.append(cover);
      const image = safeUrl(project.image, true);
      if (image) { cover.hidden = true; preview.append(projectImage(image, localized(project.imageAlt, language) || title, 'project-image', cover)); }
      const logo = safeUrl(project.logo, true);
      if (logo) preview.append(projectImage(logo, '', 'project-logo'));
      const info = element('div', 'project-info');
      const meta = element('div', 'project-meta');
      const url = safeUrl(project.url);
      meta.append(element('span', '', `${String(index + 1).padStart(2, '0')} / ${localized(project.category, language)}`));
      if (url) meta.append(element('span', 'project-status', url.startsWith('#') ? (language === 'en' ? 'THIS PROJECT' : 'ESTE PROYECTO') : (language === 'en' ? 'LIVE WEBSITE' : 'WEB PUBLICADA')));
      info.append(meta, element('h3', '', title), element('p', '', localized(project.description, language)));
      if (project.technologies?.length) {
        const tags = element('div', 'project-tags');
        project.technologies.forEach(technology => tags.append(element('span', '', technology)));
        info.append(tags);
      }
      const links = element('div', 'project-actions');
      function addLink(href, label) {
        if (!href) return;
        const link = element('a', 'project-link', label);
        link.href = href;
        if (!href.startsWith('#')) { link.target = '_blank'; link.rel = 'noopener noreferrer'; }
        link.append(element('span', '', '+'));
        links.append(link);
      }
      addLink(url, language === 'en' ? 'Visit website' : 'Visitar web');
      addLink(safeUrl(project.repository), language === 'en' ? 'View code' : 'Ver código');
      if (!links.children.length) links.append(element('span', 'project-link muted', language === 'en' ? 'More details soon' : 'Más detalles próximamente'));
      info.append(links);
      article.append(preview, info);
      container.append(article);
    });
  };
})();
