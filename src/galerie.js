import './style.css'

// ══════════════════════════════════════════
//  ASSETS — Sculpture image paths
// ══════════════════════════════════════════
const A = '/assets/sculptures';

// List of all gallery images based on file names containing "Gallerie"
const galleryItems = [
  { image: `${A}/Acceuil - Hero  - Gallerie - Le pan.png`, title: 'Grande hermine' },
  { image: `${A}/Gallerie - Le mur gradient.png`, title: 'Agitation' },
  { image: `${A}/Acceuil - Gallerie Vivante  - Gallerie - Chien Fou.png`, title: 'Le chien fou' },
  { image: `${A}/Acceuil - Gallerie Vivante  - Gallerie - Chute du mur .png`, title: 'Tsunami du Covid' },
  { image: `${A}/Acceuil - Gallerie Vivante  - Gallerie - Cube penche.png`, title: 'Monolithe' },
  { image: `${A}/Acceuil - Gallerie Vivante  - Gallerie - Don Quichotte.png`, title: 'Don Quichotte' },
  { image: `${A}/Acceuil - Gallerie Vivante  - Gallerie - Maman .png`, title: 'Maman' },
  { image: `${A}/Acceuil - Gallerie Vivante  - Gallerie - Manifs des carrés rouges.png`, title: 'La Manifs des cubes rouges' },
  { image: `${A}/Acceuil - Gallerie Vivante  - Gallerie - Pierre en cage.png`, title: 'Liberté' },
  { image: `${A}/Acceuil - Gallerie Vivante  - Gallerie - Roche sur canettes.png`, title: "L'île morte" },
  { image: `${A}/Acceuil - Gallerie Vivante  - Gallerie - Spirale Blanche.11.png`, title: 'Curiosité' },
  { image: `${A}/Acceuil - Gallerie Vivante  - Gallerie - Spirale tete 1.png`, title: 'Fée des glaces' },
  { image: `${A}/Acceuil - Gallerie Vivante  - Gallerie - Terre en Cage.png`, title: 'Migrants du Cosmos' },
  { image: `${A}/Acceuil - Gallerie Vivante  - Gallerie - Triangle triangulaire.png`, title: 'Techno-plante' },
  { image: `${A}/Acceuil - Projet important - Section L'etoile et l'auto  - Gallerie - Étoile et auto .png`, title: 'Étoile BELAIR-67' },
  { image: `${A}/Acceuil - Projet important - section L'homme  - Gallerie - L'homme.png`, title: 'Karma' },
  { image: `${A}/Acceuil - Projet important - section La maison  - Gallerie - La maison.png.png`, title: 'La Caserne des cauchemars' },
  { image: `${A}/Acceuil - Section Le serpent  - Gallerie - Le serpent .png`, title: 'T-rex local' },
  { image: `${A}/Acceuil - section la chute des cubes  - Gallerie - La chute des cubes.png`, title: 'Cubes' },
  { image: `${A}/Gallerie - Cube en gravite.jpeg`, title: 'Hommage à Spinoza' },
  { image: `${A}/Gallerie - L'artefact.png`, title: 'Prisme de Platon' },
  { image: `${A}/Gallerie - L'immigrante.jpeg`, title: 'Made in USA' },
  { image: `${A}/Gallerie - Jesus de Nazareth.png`, title: 'Jésus de Nazareth' },
  { image: `${A}/Gallerie - La terre en ondulation.png`, title: 'Rituel' },
  { image: `${A}/Gallerie - Le canot.png`, title: 'Ahchahk Ataentsic', interiorImage: `${A}/Gallerie - intérieur du kayak.webp` },
  { image: `${A}/Gallerie - Le monstre.jpeg`, title: 'Loup' },
  { image: `${A}/Gallerie - Le pan en feuille.png`, title: 'En vol' },
  { image: `${A}/Gallerie - Le sage.png`, title: 'Le sage' },
  { image: `${A}/Gallerie - Les oiseaux .jpeg`, title: 'Métamorphose' },
  { image: `${A}/Gallerie - Pince rouillee.png`, title: 'Mère et fille' },
];

const IMG_LOGO = `${A}/Footer - Logo.png`;
const IMG_FOOTER = `${A}/Footer - Maison du footer.jpeg`;

// ══════════════════════════════════════════
//  SVG ICONS
// ══════════════════════════════════════════
const arrowRightSVG = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" xmlns="http://www.w3.org/2000/svg"><path d="M9 18l6-6-6-6"/></svg>`;

// ══════════════════════════════════════════
//  NAVIGATION DATA
// ══════════════════════════════════════════
const navLinks = [
  { label: 'Accueil', href: '/', active: false },
  { label: 'Biographie', href: '/biographie.html', active: false },
  { label: 'Contact', href: '/contact.html', active: false },
  { label: 'Gallerie', href: '/galerie.html', active: true },
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

// ══════════════════════════════════════════
//  COMPONENT: Navbar
// ══════════════════════════════════════════
function renderNavbar() {
  const linksHTML = navLinks.map((link, i) => {
    const sep = i < navLinks.length - 1
      ? '<span class="navbar__separator" aria-hidden="true"></span>'
      : '';
    const cls = link.active ? ' navbar__link--active' : '';
    return `<a href="${link.href}" class="navbar__link${cls}">${link.label}</a>${sep}`;
  }).join('');

  return `
    <nav class="navbar" role="navigation" aria-label="Navigation principale">
      <div class="navbar__container">${linksHTML}</div>
    </nav>`;
}

// ══════════════════════════════════════════
//  COMPONENT: Footer
// ══════════════════════════════════════════
function renderFooter() {
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
            <span>© 2025 Sculpture : Marco</span>
            ${legal}
          </div>
        </div>
        <div class="footer__sculpture">
          <img src="${IMG_FOOTER}" alt="Sculpture en extérieur" />
        </div>
      </div>
    </footer>`;
}

// ══════════════════════════════════════════
//  COMPONENT: Gallery Card (reusing style)
// ══════════════════════════════════════════
function renderGalleryCard({ image, title, interiorImage }) {
  // Using card--gallery style as requested
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
      <!-- Arrow container is positioned via CSS (likely absolute or flex) -->
      <div class="card__arrow-container" style="position: absolute; top: 20px; right: 20px;">
         ${arrowRightSVG}
      </div>
    </div>`;
}

// ══════════════════════════════════════════
//  PAGE: Gallery Index
// ══════════════════════════════════════════
function renderGalleryPage() {
  const cardsHTML = galleryItems.map(item => renderGalleryCard(item)).join('');

  return `
    <main class="galerie-page">
      <div class="galerie-page__header">
        <h1 class="galerie-page__title">Galerie</h1>
        <div class="galerie-page__line"></div>
      </div>
      
      <div class="galerie-page__grid">
        ${cardsHTML}
      </div>
    </main>`;
}

// ══════════════════════════════════════════
//  MOUNT APP
// ══════════════════════════════════════════
document.querySelector('#app').innerHTML = `
  ${renderNavbar()}
  ${renderGalleryPage()}
  ${renderFooter()}
`;

// Add specific styles for the gallery page layout if missing in main.css
// But wait, style.css is imported. Let's ensure we have a grid layout.
// I'll add a style block dynamically if needed, or hope style.css covers it.
// Checking previous style.css content might be wise, but I'll add a <style> block here to be safe for the grid layout.

const styles = `
<style>
  .galerie-page {
    padding: 120px 2rem 4rem;
    max-width: 1400px;
    margin: 0 auto;
    /* Background moved to body to cover full width */
  }
  body {
    background-image: var(--gradient-gallery-page);
    background-attachment: fixed; /* Ensures gradient stays when scrolling */
    min-height: 100vh;
  }
  .galerie-page__header {
    margin-bottom: 3rem;
  }
  .galerie-page__title {
    font-family: 'Gloock', serif;
    font-size: 3rem;
    margin-bottom: 1rem;
    color: #333333; 
    /* Changed to dark grey as requested "lighter shade of black" */
  }
  .galerie-page__line {
    width: 60px;
    height: 4px;
    background-color: var(--color-lynch); /* Lighter line for visibility */
  }
  .galerie-page__grid {
    column-count: 3;
    column-gap: 2rem;
  }
  @media (max-width: 1024px) {
    .galerie-page__grid {
      column-count: 2;
    }
  }
  @media (max-width: 600px) {
    .galerie-page__grid {
      column-count: 1;
    }
  }
  /* Ensure masonry cards look good without breaking */
  .galerie-page .card {
    height: auto; /* Allow image to dictate height */
    width: 100%;
    break-inside: avoid; /* Prevent card from splitting across columns */
    margin-bottom: 2rem; /* Vertical spacing in masonry */
  }
</style>
`;

document.head.insertAdjacentHTML('beforeend', styles);
