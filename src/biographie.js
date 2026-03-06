import './style.css'

// ══════════════════════════════════════════
//  ASSETS — Image paths
// ══════════════════════════════════════════
const A = '/assets/sculptures';

// Portrait and sculpture images
const IMG_PORTRAIT = `${A}/biographie-portrait.jpg`;
const IMG_ATELIER = `${A}/Biographie - L'atelier.webp`;

// Footer
const IMG_LOGO = `${A}/Footer - Logo.png`;
const IMG_FOOTER = `${A}/Footer - Maison du footer.jpeg`;

// ══════════════════════════════════════════
//  NAVIGATION DATA
// ══════════════════════════════════════════
const footerLinks = [
  { label: 'Accueil', href: '/' },
  { label: 'Contact', href: '/contact.html' },
  { label: 'Biographie', href: '/biographie.html' },
  { label: 'Galerie', href: '/galerie.html' },
];

const footerLegalLinks = [
  { label: 'Confidentialité', href: '/#confidentialite' },
  { label: "Conditions d'utilisation", href: '/#conditions' },
  { label: 'Paramètres cookies', href: '/#cookies' },
];

// ══════════════════════════════════════════
//  COMPONENT: Breadcrumb Navbar
// ══════════════════════════════════════════
const navLinks = [
  { label: 'Accueil', href: '/', active: false },
  { label: 'Biographie', href: '/biographie.html', active: true },
  { label: 'Contact', href: '/contact.html', active: false },
  { label: 'Gallerie', href: '/galerie.html', active: false },
];

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
            <span>2026 fait par Pulse Websites</span>
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
//  SECTION: Bibliographie Content
// ══════════════════════════════════════════
function renderBibliographie() {
  return `
    <section class="bibliographie">
      <div class="bibliographie__container">
        <div class="bibliographie__header">
          <div class="bibliographie__titles">
            <h1 class="bibliographie__name">Marc Plamondon</h1>
            <h2 class="bibliographie__subtitle">Sculpture</h2>
          </div>
          <div class="bibliographie__portrait">
            <img src="${IMG_PORTRAIT}" alt="Portrait de Marc Plamondon" />
          </div>
        </div>
        
        <div class="bibliographie__content">
          <div class="bibliographie__image">
            <img src="${IMG_ATELIER}" alt="L'atelier" />
          </div>
          <div class="bibliographie__text">
            <p>Écrire le texte bibliographique ici Écrire le texte bibliographique ici Écrire le texte bibliographique ici Écrire le texte bibliographique ici Écrire le texte bibliographique ici Écrire le texte bibliographique ici </p>
          </div>
        </div>
      </div>
    </section>`;
}

// ══════════════════════════════════════════
//  MOUNT APP
// ══════════════════════════════════════════
document.querySelector('#app').innerHTML = `
  ${renderNavbar()}
  ${renderBibliographie()}
  ${renderFooter()}
`;
