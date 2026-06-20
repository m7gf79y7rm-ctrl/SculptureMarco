// Pure render functions for the gallery page — no DOM access, Node/browser compatible

const A = '/assets/sculptures';

const galleryItems = [
  { image: `${A}/Acceuil - Hero  - Gallerie - Le pan.png`, title: 'Grande hermine' },
  { image: `${A}/Gallerie - Le mur gradient.png`, title: 'Agitation' },
  { image: `${A}/Acceuil - Gallerie Vivante  - Gallerie - Chien Fou.png`, title: 'Le chien fou' },
  { image: `${A}/Acceuil - Gallerie Vivante  - Gallerie - Chute du mur .png`, title: 'Tsunami du Covid' },
  { image: `${A}/Acceuil - Gallerie Vivante  - Gallerie - Cube penche.png`, title: 'Monolithe' },
  { image: `${A}/Acceuil - Gallerie Vivante  - Gallerie - Don Quichotte.png`, title: 'Don Quichotte' },
  { image: `${A}/Acceuil - Gallerie Vivante  - Gallerie - Maman .png`, title: 'Maman' },
  { image: `${A}/Acceuil - Gallerie Vivante  - Gallerie - Manifs des carrés rouges.png`, title: 'Manifestant des Carrés rouge' },
  { image: `${A}/Acceuil - Gallerie Vivante  - Gallerie - Pierre en cage.png`, title: 'Innocente' },
  { image: `${A}/Acceuil - Gallerie Vivante  - Gallerie - Roche sur canettes.png`, title: "L'île morte" },
  { image: `${A}/Acceuil - Gallerie Vivante  - Gallerie - Spirale Blanche.11.png`, title: 'Flamme' },
  { image: `${A}/Acceuil - Gallerie Vivante  - Gallerie - Spirale tete 1.png`, title: 'Fée des glaces' },
  { image: `${A}/Acceuil - Gallerie Vivante  - Gallerie - Terre en Cage.png`, title: 'Migrants du Cosmos' },
  { image: `${A}/Acceuil - Gallerie Vivante  - Gallerie - Triangle triangulaire.png`, title: 'Techno-plante' },
  { image: `${A}/Acceuil - Projet important - Section L'etoile et l'auto  - Gallerie - Étoile et auto .png`, title: 'Étoile filante ’67' },
  { image: `${A}/Acceuil - Projet important - section L'homme  - Gallerie - L'homme.png`, title: 'Karma' },
  { image: `${A}/Acceuil - Projet important - section La maison  - Gallerie - La maison.png.png`, title: 'La Caserne des cauchemars' },
  { image: `${A}/Acceuil - Section Le serpent  - Gallerie - Le serpent .png`, title: 'T-rex local' },
  { image: `${A}/Acceuil - section la chute des cubes  - Gallerie - La chute des cubes.png`, title: 'Cubes' },
  { image: `${A}/Gallerie - Cube en gravite.jpeg`, title: 'Hommage à Spinoza' },
  { image: `${A}/Gallerie - L'artefact.png`, title: 'Prisme de Platon' },
  { image: `${A}/Gallerie - L'immigrante.jpeg`, title: 'Made in USA' },
  { image: `${A}/Gallerie - Jesus de Nazareth.png`, title: 'Jésus de Nazareth' },
  { image: `${A}/Gallerie - La terre en ondulation.png`, title: 'Rituel' },
  { image: `${A}/Gallerie - Le canot.png`, title: 'Ahchahk Ataentsic', interiorImage: `${A}/Gallerie - intérieur du kayak.webp` },
  { image: `${A}/Gallerie - Le monstre.jpeg`, title: 'Loup' },
  { image: `${A}/Gallerie - Le pan en feuille.png`, title: 'En vol' },
  { image: `${A}/Gallerie - Le sage.png`, title: 'Le sage' },
  { image: `${A}/Gallerie - Les oiseaux .jpeg`, title: 'Métamorphose' },
  { image: `${A}/Gallerie - Pince rouillee.png`, title: 'Mère et fille' },
];

const IMG_LOGO = `${A}/Footer - Logo.png`;
const IMG_FOOTER = `${A}/Footer - Maison du footer.jpeg`;

const arrowRightSVG = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" xmlns="http://www.w3.org/2000/svg"><path d="M9 18l6-6-6-6"/></svg>`;

const navLinks = [
  { label: 'Accueil', href: '/', active: false },
  { label: 'Biographie', href: '/biographie.html', active: false },
  { label: 'Contact', href: '/contact.html', active: false },
  { label: 'Galerie', href: '/galerie.html', active: true },
];

const footerLinks = [
  { label: 'Accueil', href: '/' },
  { label: 'Contact', href: '/contact.html' },
  { label: 'Biographie', href: '/biographie.html' },
  { label: 'Galerie', href: '/galerie.html' },
];

const footerLegalLinks = [
  { label: 'Confidentialité', href: '/' },
  { label: "Conditions d'utilisation", href: '/' },
  { label: 'Paramètres cookies', href: '/' },
];

export function renderNavbar() {
  const linksHTML = navLinks.map((link, i) => {
    const sep = i < navLinks.length - 1
      ? '<span class="navbar__separator" aria-hidden="true"></span>'
      : '';
    const cls = link.active ? ' navbar__link--active' : '';
    return `<a href="${link.href}" class="navbar__link${cls}">${link.label}</a>${sep}`;
  }).join('');

  return `
    <nav class="navbar" role="navigation" aria-label="Navigation principale">
      <div class="navbar__container">
        <button class="navbar__hamburger" onclick="document.getElementById('nav-menu').classList.toggle('navbar__menu--open')" aria-label="Menu">
          <svg viewBox="0 0 24 24" width="32" height="32" stroke="currentColor" stroke-width="2" stroke-linecap="round" fill="none"><path d="M4 12h16M4 6h16M4 18h16"/></svg>
        </button>
        <div id="nav-menu" class="navbar__menu">
          ${linksHTML}
        </div>
      </div>
    </nav>`;
}

export function renderFooter() {
  const links = footerLinks.map(l => `<a href="${l.href}">${l.label}</a>`).join('');
  const legal = footerLegalLinks.map(l => `<a href="${l.href}">${l.label}</a>`).join('');

  return `
    <footer class="footer">
      <div class="footer__wrapper">
        <div class="footer__content">
          <div class="footer__top">
            <div class="footer__logo">
              <img src="${IMG_LOGO}" alt="Logo Sculpture Marco" />
            </div>
            <div class="footer__links">${links}</div>
          </div>
          <div class="footer__divider"></div>
          <div class="footer__credits">
            <span>© 2026 · Conçu par <a href="https://pulseoweb.com" target="_blank" rel="noopener noreferrer" style="font-weight:600;color:#2D17E0;">PULSE O</a></span>
            ${legal}
          </div>
        </div>
        <div class="footer__sculpture">
          <img src="${IMG_FOOTER}" alt="Sculpture en extérieur" />
        </div>
      </div>
    </footer>`;
}

function renderGalleryCard({ image, title, interiorImage }) {
  const interiorHtml = interiorImage ? `
      <div class="card__interior img-frame" style="position: absolute; top: 20px; left: 20px; width: 135px; height: 142px; z-index: 10;">
        <img src="${interiorImage}" alt="Intérieur de ${title}" style="object-fit: cover; width: 100%; height: 100%; border-radius: 0;" />
      </div>` : '';

  return `
    <div class="card card--gallery">
      <img class="card__image" src="${image}" alt="${title}" loading="lazy" />
      <div class="card__overlay"></div>
      ${interiorHtml}
      <div class="card__content">
        <h3 class="card__title">${title}</h3>
      </div>
      <div class="card__arrow-container" style="position: absolute; top: 20px; right: 20px;">
         ${arrowRightSVG}
      </div>
    </div>`;
}

export function renderGalleryPage() {
  const cardsHTML = galleryItems.map(item => renderGalleryCard(item)).join('');

  return `
    <main class="gallerie-page">
      <div class="gallerie-page__header">
        <h1 class="gallerie-page__title">Gallerie</h1>
        <div class="gallerie-page__line"></div>
      </div>

      <div class="gallerie-page__grid">
        ${cardsHTML}
      </div>
    </main>`;
}
