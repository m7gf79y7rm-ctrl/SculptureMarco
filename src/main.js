import './style.css'

// ══════════════════════════════════════════
//  ASSETS — Sculpture image paths
// ══════════════════════════════════════════
const A = '/assets/sculptures';

// Hero
const IMG_LE_PAN = `${A}/Acceuil - Hero  - Gallerie - Le pan.png`;

// La chute des cubes
const IMG_CHUTE = `${A}/Acceuil - section la chute des cubes  - Gallerie - La chute des cubes.png`;
const IMG_CHUTE_1 = `${A}/La chute des cubes 1 [].png`;
const IMG_CHUTE_2 = `${A}/La chute des cubes 2 [].png`;

// Projet important cards
const IMG_PI_ETOILE = `${A}/Acceuil - Projet important - Section L'etoile et l'auto  - Gallerie - Étoile et auto .png`;
const IMG_ETOILE_1 = `${A}/L'étoile et l'auto 1 [].png`;
const IMG_ETOILE_2 = `${A}/L'étoile et l'auto 2 [].png`;
const IMG_PI_MAISON = `${A}/Acceuil - Projet important - section La maison  - Gallerie - La maison.png.png`;
const IMG_PI_HOMME = `${A}/Acceuil - Projet important - section L'homme  - Gallerie - L'homme.png`;

// Le serpent
const IMG_SERPENT = `${A}/Acceuil - Section Le serpent  - Gallerie - Le serpent .png`;
const IMG_SERPENT_1 = `${A}/Le serpent 1 [].png`;

// Galerie vivante (medium cards)
const galerieVivanteItems = [
  { image: `${A}/Acceuil - Gallerie Vivante  - Gallerie - Don Quichotte.png`, title: 'Don Quichotte' },
  { image: `${A}/Acceuil - Gallerie Vivante  - Gallerie - Spirale tete.png`, title: 'Spirale tête' },
  { image: `${A}/Acceuil - Gallerie Vivante  - Gallerie - Terre en Cage.png`, title: 'Terre en cage' },
  { image: `${A}/Acceuil - Gallerie Vivante  - Gallerie - Pierre en cage.png`, title: 'Pierre en cage' },
  { image: `${A}/Acceuil - Gallerie Vivante  - Gallerie - Boule de soldat.png`, title: 'Boule de soldat' },
  { image: `${A}/Acceuil - Gallerie Vivante  - Gallerie - Spirale Blanche.11.png`, title: 'Spirale blanche' },
  { image: `${A}/Acceuil - Gallerie Vivante  - Gallerie - Roche sur canettes.png`, title: 'Roche sur canettes' },
  { image: `${A}/Acceuil - Gallerie Vivante  - Gallerie - Chute du mur .png`, title: 'Chute du mur' },
  { image: `${A}/Acceuil - Gallerie Vivante  - Gallerie - Triangle triangulaire.png`, title: 'Triangle triangulaire' },
  { image: `${A}/Acceuil - Gallerie Vivante  - Gallerie - Cube penche.png`, title: 'Cube penché' },
];

// Section L'Homme
const IMG_HOMME_1 = `${A}/L'homme 1 [].png`;
const IMG_HOMME_2 = `${A}/L'homme 2 [].png`;
const IMG_HOMME_3 = `${A}/L'homme 3 [].png`;
const IMG_HOMME_4 = `${A}/L'homme 4 [].png`;
const IMG_HOMME_5 = `${A}/L'homme 5 [].png`;

// Section La maison
const IMG_MAISON_1 = `${A}/La maison 1 [].png`;
const IMG_MAISON_2 = `${A}/La maison 2 [].png`;
const IMG_MAISON_3 = `${A}/La maison 3 [].png`;
const IMG_MAISON_4 = `${A}/La maison 4 [].png`;
const IMG_MAISON_5 = `${A}/La maison 5 [].png`;
const IMG_MAISON_6 = `${A}/La maison 6 [].png`;
const IMG_MAISON_7 = `${A}/La maison 7 [].png`;

// Petites sculptures
const petitesSculptures = [
  { image: `${A}/Acceuil - Petites sculptures - Oie.png`, title: 'Oie' },
  { image: `${A}/Acceuil - Petites sculptures - Helice.jpeg`, title: 'Hélice' },
  { image: `${A}/Acceuil - Petites sculptures - Volant.jpeg`, title: 'Volant' },
  { image: `${A}/Acceuil - Petites sculptures - Face.jpeg`, title: 'Face' },
  { image: `${A}/Acceuil - Petites sculptures - Anclume.png`, title: 'Anclume' },
  { image: `${A}/Acceuil - Petites sculptures - Pistolet.jpeg`, title: 'Pistolet' },
  { image: `${A}/Acceuil - Petites sculptures - Abstrait.png`, title: 'Abstrait' },
];

// En pleine nature
const IMG_NATURE_1 = `${A}/En pleine nature 1 [].png`;
const IMG_NATURE_2 = `${A}/En pleine nature 2 [].png`;
const IMG_NATURE_3 = `${A}/En pleine nature 3 [].png`;
const IMG_NATURE_4 = `${A}/En pleine nature 4 [].png`;

// Gallery preview images
// Gallery preview images (Expanded to include all available gallery items)
const IMG_GAL = [
  `${A}/Acceuil - Hero  - Gallerie - Le pan.png`,
  `${A}/Gallerie - Le mur gradient.png`,
  `${A}/Acceuil - Gallerie Vivante  - Gallerie - Boule de soldat.png`,
  `${A}/Acceuil - Gallerie Vivante  - Gallerie - Chute du mur .png`,
  `${A}/Acceuil - Gallerie Vivante  - Gallerie - Cube penche.png`,
  `${A}/Acceuil - Gallerie Vivante  - Gallerie - Don Quichotte.png`,
  `${A}/Acceuil - Gallerie Vivante  - Gallerie - Pierre en cage.png`,
  `${A}/Acceuil - Gallerie Vivante  - Gallerie - Roche sur canettes.png`,
  `${A}/Acceuil - Gallerie Vivante  - Gallerie - Spirale Blanche.11.png`,
  `${A}/Acceuil - Gallerie Vivante  - Gallerie - Spirale tete.png`,
  `${A}/Acceuil - Gallerie Vivante  - Gallerie - Terre en Cage.png`,
  `${A}/Acceuil - Gallerie Vivante  - Gallerie - Triangle triangulaire.png`,
  `${A}/Acceuil - Projet important - Section L'etoile et l'auto  - Gallerie - Étoile et auto .png`,
  `${A}/Acceuil - Projet important - section L'homme  - Gallerie - L'homme.png`,
  `${A}/Acceuil - Projet important - section La maison  - Gallerie - La maison.png.png`,
  `${A}/Acceuil - Section Le serpent  - Gallerie - Le serpent .png`,
  `${A}/Acceuil - section la chute des cubes  - Gallerie - La chute des cubes.png`,
  `${A}/Gallerie - Cube en gravite.jpeg`,
  `${A}/Gallerie - L'artefact.png`,
  `${A}/Gallerie - L'immigrante.jpeg`,
  `${A}/Gallerie - La terre en ondulation.png`,
  `${A}/Gallerie - Le canot.png`,
  `${A}/Gallerie - Le monstre.jpeg`,
  `${A}/Gallerie - Le pan en feuille.png`,
  `${A}/Gallerie - Le sage.png`,
  `${A}/Gallerie - Les oiseaux .jpeg`,
  `${A}/Gallerie - Pince rouillee.png`,
];

// Footer
const IMG_LOGO = `${A}/Footer - Logo.png`;
const IMG_FOOTER = `${A}/Footer - Jesus sculpture exterieure.png`;

// ══════════════════════════════════════════
//  SVG ICONS
// ══════════════════════════════════════════
const arrowForwardSVG = `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6z"/></svg>`;
const arrowBackSVG = `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6z"/></svg>`;
const arrowRightSVG = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" xmlns="http://www.w3.org/2000/svg"><path d="M9 18l6-6-6-6"/></svg>`;

// ══════════════════════════════════════════
//  NAVIGATION DATA
// ══════════════════════════════════════════
const navLinks = [
  { label: 'Accueil', href: '#accueil', active: true },
  { label: 'Biographie', href: '/biographie.html', active: false },
  { label: 'Contact', href: '/contact.html', active: false },
  { label: 'Gallerie', href: '/galerie.html', active: false },
];

const footerLinks = [
  { label: 'Accueil', href: '#accueil' },
  { label: 'Contact', href: '/contact.html' },
  { label: 'Biographie', href: '/biographie.html' },
  { label: 'Galerie', href: '/galerie.html' },
];

const footerLegalLinks = [
  { label: 'Confidentialité', href: '#confidentialite' },
  { label: "Conditions d'utilisation", href: '#conditions' },
  { label: 'Paramètres cookies', href: '#cookies' },
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
//  COMPONENT: Reusable helpers
// ══════════════════════════════════════════
function gradientTitle(text, variant = 'dark') {
  return `<div class="gradient-title gradient-title--${variant}">${text}</div>`;
}

function imgFrame(src, alt, cls = '', extra = '') {
  return `<div class="img-frame ${cls}" ${extra}><img src="${src}" alt="${alt}" /></div>`;
}

// For [] assets that already have border+shadow baked into the image
function imgBaked(src, alt, cls = '', extra = '') {
  return `<div class="img-baked ${cls}" ${extra}><img src="${src}" alt="${alt}" /></div>`;
}

function sliderDots(count, id) {
  const dots = Array.from({ length: count }, (_, i) =>
    `<button class="slider__dot${i === 0 ? ' slider__dot--active' : ''}" data-index="${i}" aria-label="Slide ${i + 1}"></button>`
  ).join('');
  return `<div class="slider__dots" data-slider="${id}">${dots}</div>`;
}

// ══════════════════════════════════════════
//  SECTION 1 — HERO
// ══════════════════════════════════════════
function renderHero() {
  return `
    <section class="hero" id="accueil">
      <div class="hero__component">
        <div class="hero__headline">
          <span class="hero__headline-fracasser">FRACASSER </span>
          <span class="hero__headline-espace">L'ESPACE</span>
        </div>
        <div class="hero__body">
          <div class="hero__text">
            <div class="hero__subtitle">Sculptures</div>
            <div class="hero__author">Marc Plamondon</div>
          </div>
          <div class="hero__image-group">
            ${imgFrame(IMG_LE_PAN, 'Le pan', 'hero__le-pan')}
            <div class="hero__title-bar">Le pan</div>
          </div>
        </div>
      </div>
    </section>`;
}

// ══════════════════════════════════════════
//  SECTION 2 — GALLERY PREVIEW
// ══════════════════════════════════════════
function renderGalleryPreview() {
  // Duplicate images to Ensure enough content for infinite scroll
  // We need enough width to cover the screen and scroll smoothly
  // 8 images total in IMG_GAL. Splitting 4 top / 4 bottom is not enough for wide screens
  // if we want infinite loop.
  // Strategy: Create a large array by repeating IMG_GAL multiple times
  const allImages = [...IMG_GAL, ...IMG_GAL, ...IMG_GAL, ...IMG_GAL]; // 32 images total

  const half = Math.ceil(allImages.length / 2);
  const topRowImages = allImages.slice(0, half);
  const bottomRowImages = allImages.slice(half);

  const topRow = topRowImages.map(src =>
    imgFrame(src, 'Gallerie', 'gallery-preview__img')
  ).join('');

  const bottomRow = bottomRowImages.map(src =>
    imgFrame(src, 'Gallerie', 'gallery-preview__img')
  ).join('');

  return `
    <section class="gallery-preview" id="gallerie">
      <div class="gallery-preview__header">
        <div class="gallery-preview__heading-row">
          <h2 class="gallery-preview__heading">Gallerie</h2>
          <div class="gallery-preview__line"></div>
        </div>
        <a href="/galerie.html" class="gallery-preview__btn">
          La gallerie du rêve
          ${arrowForwardSVG}
        </a>
      </div>
      <div class="gallery-preview__grid">
        <div class="gallery-preview__row gallery-preview__row--top">${topRow}</div>
        <div class="gallery-preview__row gallery-preview__row--bottom">${bottomRow}</div>
      </div>
    </section>`;
}

// ══════════════════════════════════════════
//  SECTION 3 — LA CHUTE DES CUBES
// ══════════════════════════════════════════
function renderChuteDesCubes() {
  return `
    <section class="chute">
      <div class="chute__container">
        <div class="chute__left">
          ${imgBaked(IMG_CHUTE_1, 'La chute des cubes 1', 'chute__img1')}
          ${imgBaked(IMG_CHUTE_2, 'La chute des cubes 2', 'chute__img2')}
        </div>
        <div class="chute__right">
          ${gradientTitle('La chute des cubes ', 'pale')}
          ${imgFrame(IMG_CHUTE, 'La chute des cubes', 'chute__main-img img-frame--lynch-light')}
        </div>
      </div>
    </section>`;
}

// ══════════════════════════════════════════
//  SECTION 4 — PROJET IMPORTANT (SLIDER)
// ══════════════════════════════════════════
function renderCardImportant({ image, title, href = '#', scrollTarget = '' }) {
  const dataAttr = scrollTarget ? `data-scroll-to="${scrollTarget}"` : '';
  return `
    <div class="card card--important" ${dataAttr} role="button" tabindex="0">
      <img class="card__image" src="${image}" alt="${title}" />
      <div class="card__overlay"></div>
      <div class="card__content">
        <h2 class="card__title">${title}</h2>
        <div class="card__link">
          <span class="card__link-text">Voir plus</span>
          <span class="card__link-arrow">${arrowRightSVG}</span>
        </div>
      </div>
    </div>`;
}

function renderProjetImportant() {
  const cards = [
    { image: IMG_PI_ETOILE, title: 'Étoile et auto', scrollTarget: 'section-etoile' },
    { image: IMG_PI_MAISON, title: 'Maison', scrollTarget: 'section-maison' },
    { image: IMG_PI_HOMME, title: "L'Homme", scrollTarget: 'section-homme' },
  ];

  const cardsHTML = cards.map(c => renderCardImportant(c)).join('');

  return `
    <section class="projet-important">
      <div class="projet-important__header">
        <div class="projet-important__title">
          ${gradientTitle('Projet important', 'dark')}
        </div>
      </div>
      <div class="slider" data-slider-id="projet-important">
        <div class="slider__track">${cardsHTML}</div>
        <button class="slider__arrow slider__arrow--left" aria-label="Précédent">${arrowBackSVG}</button>
        <button class="slider__arrow slider__arrow--right" aria-label="Suivant">${arrowForwardSVG}</button>
      </div>
      ${sliderDots(cards.length, 'projet-important')}
    </section>`;
}

// ══════════════════════════════════════════
//  SECTION 5 — LE SERPENT + MOTS ARTISTIQUES
// ══════════════════════════════════════════
function renderSerpentEtMots() {
  return `
    <section class="serpent-mots">
      <div class="serpent-mots__sticky-content">
        <div class="serpent-mots__words">
            <p class="serpent-mots__word--1">FISSURE</p>
            <p class="serpent-mots__word--2">FAILLE</p>
            <p class="serpent-mots__word--3">JEUX</p>
            <p class="serpent-mots__word--4">SCULPTURES</p>
        </div>
        <div class="serpent-mots__right">
            <div class="serpent-mots__title-bar">
            ${gradientTitle('Le serpent', 'pale')}
            </div>
            <div class="serpent-mots__images">
            ${imgFrame(IMG_SERPENT, 'Le serpent', 'serpent-mots__img-main img-frame--lynch-light')}
            ${imgBaked(IMG_SERPENT_1, 'Le serpent détail', 'serpent-mots__img-detail')}
            </div>
        </div>
      </div>
      <!-- Spacers for scroll resistance -->
      <div class="snake-spacers">
          <div class="snake-spacer" id="snake-spacer-1"></div>
          <div class="snake-spacer" id="snake-spacer-2"></div>
          <div class="snake-spacer" id="snake-spacer-3"></div>
          <div class="snake-spacer" id="snake-spacer-4"></div>
      </div>
    </section>`;
}

// ══════════════════════════════════════════
//  SECTION 6 — GALERIE VIVANTE (SLIDER)
// ══════════════════════════════════════════
function renderCardMedium({ image, title }) {
  return `
    <div class="card card--medium">
      <img class="card__image" src="${image}" alt="${title}" />
      <div class="card__content">
        <h3 class="card__title">${title}</h3>
      </div>
    </div>`;
}

function renderGalerieVivante() {
  const cardsHTML = galerieVivanteItems.map(item => renderCardMedium(item)).join('');

  return `
    <section class="galerie-vivante">
      <div class="galerie-vivante__container">
        <div class="galerie-vivante__title">
          ${gradientTitle('Galerie vivante', 'dark')}
        </div>
        <div class="slider" data-slider-id="galerie-vivante">
          <div class="slider__track">${cardsHTML}</div>
          <button class="slider__arrow slider__arrow--left" aria-label="Précédent">${arrowBackSVG}</button>
          <button class="slider__arrow slider__arrow--right" aria-label="Suivant">${arrowForwardSVG}</button>
        </div>
        ${sliderDots(galerieVivanteItems.length, 'galerie-vivante')}
      </div>
    </section>`;
}

// ══════════════════════════════════════════
//  SECTION 7 — SECTION L'HOMME
// ══════════════════════════════════════════
function renderSectionHomme() {
  return `
    <section class="section-homme" id="section-homme">
      <div class="section-homme__container">
        <div class="section-homme__col-left">
          ${imgBaked(IMG_HOMME_1, "L'homme 1", 'section-homme__img1')}
          ${imgBaked(IMG_HOMME_2, "L'homme 2", 'section-homme__img2')}
        </div>
        <div class="section-homme__col-center">
          <div class="section-homme__title-bar">
            ${gradientTitle("L'Homme", 'light')}
          </div>
          ${imgBaked(IMG_HOMME_3, "L'homme 3", 'section-homme__img3')}
        </div>
        <div class="section-homme__col-right">
          ${imgBaked(IMG_HOMME_4, "L'homme 4", 'section-homme__img4')}
          ${imgBaked(IMG_HOMME_5, "L'homme 5", 'section-homme__img5')}
        </div>
      </div>
    </section>`;
}

// ══════════════════════════════════════════
//  SECTION 8 — SECTION ÉTOILE ET AUTO
// ══════════════════════════════════════════
function renderSectionEtoile() {
  return `
    <section class="section-etoile" id="section-etoile">
      <div class="section-etoile__container">
        <div class="section-etoile__left">
          <div class="section-etoile__title-bar">
            ${gradientTitle("L'étoile et l'auto", 'dark')}
          </div>
          ${imgFrame(IMG_PI_ETOILE, "L'étoile et l'auto", 'section-etoile__main-img img-frame--lynch')}
        </div>
        <div class="section-etoile__right">
          ${imgBaked(IMG_ETOILE_1, "L'étoile et l'auto détail 1", 'section-etoile__detail1')}
          <div class="section-etoile__detail2-group">
            <div class="section-etoile__spacer"></div>
            ${imgBaked(IMG_ETOILE_2, "L'étoile et l'auto détail 2", 'section-etoile__detail2')}
          </div>
        </div>
      </div>
    </section>`;
}

// ══════════════════════════════════════════
//  SECTION 9 — CITATION
// ══════════════════════════════════════════
function renderCitation() {
  return `
    <section class="citation">
      <div class="citation__container">
        <div class="citation__marks"><img src="/assets/quotation-marks-new.png" alt="" /></div>
        <p class="citation__text">Insérer une citation ou texte</p>
        <div class="citation__attribution">
          <div class="citation__line"></div>
          <span class="citation__author">Nom</span>
          <div class="citation__line"></div>
        </div>
      </div>
    </section>`;
}

// ══════════════════════════════════════════
//  SECTION 10 — GALLERY LA MAISON
// ══════════════════════════════════════════
function renderSectionMaison() {
  return `
    <section class="section-maison" id="section-maison">
      <div class="section-maison__container">
        <div class="section-maison__title">
          ${gradientTitle('La maison', 'light')}
        </div>
        <div class="section-maison__grid">
          <div class="section-maison__col section-maison__col--left">
            ${imgBaked(IMG_MAISON_1, 'La maison 1', '', 'style="width:299px;margin-bottom:-52px"')}
            ${imgBaked(IMG_MAISON_2, 'La maison 2', '', 'style="width:365px;margin-bottom:-52px"')}
            ${imgBaked(IMG_MAISON_3, 'La maison 3', '', 'style="width:243px"')}
          </div>
          <div class="section-maison__col section-maison__col--center">
            ${imgBaked(IMG_MAISON_4, 'La maison 4', '', 'style="width:338px;margin-bottom:-20px"')}
            ${imgBaked(IMG_MAISON_5, 'La maison 5', '', 'style="width:471px;margin-bottom:-20px"')}
            <div style="height:100px"></div>
          </div>
          <div class="section-maison__col section-maison__col--right">
            ${imgFrame(IMG_PI_MAISON, 'La maison', 'img-frame--lynch-light', 'style="width:426px;height:443px"')}
            ${imgBaked(IMG_MAISON_6, 'La maison 6', '', 'style="width:316px;margin-bottom:-76px;z-index:2;position:relative"')}
            ${imgBaked(IMG_MAISON_7, 'La maison 7', '', 'style="width:265px"')}
          </div>
        </div>
      </div>
    </section>`;
}

// ══════════════════════════════════════════
//  SECTION 11 — PETITES SCULPTURES (SLIDER)
// ══════════════════════════════════════════
function renderPetitesSculptures() {
  const items = petitesSculptures.map(s =>
    imgFrame(s.image, s.title)
  ).join('');

  return `
    <section class="petites-sculptures">
      <div class="petites-sculptures__header">
        <div class="petites-sculptures__title">
          ${gradientTitle('Petites sculptures', 'dark')}
        </div>
      </div>
      <div class="slider" data-slider-id="petites-sculptures">
        <div class="slider__track">${items}</div>
        <button class="slider__arrow slider__arrow--left" aria-label="Précédent">${arrowBackSVG}</button>
        <button class="slider__arrow slider__arrow--right" aria-label="Suivant">${arrowForwardSVG}</button>
      </div>
      ${sliderDots(3, 'petites-sculptures')}
    </section>`;
}

// ══════════════════════════════════════════
//  SECTION 12 — EN PLEINE NATURE
// ══════════════════════════════════════════
function renderEnPleineNature() {
  return `
    <section class="en-pleine-nature">
      <div class="en-pleine-nature__container">
        <div class="en-pleine-nature__title">
          ${gradientTitle('En pleine nature ', 'light')}
        </div>
        <div class="en-pleine-nature__grid">
          <div class="en-pleine-nature__col">
            <div class="en-pleine-nature__img en-pleine-nature__img--tall img-frame--no-border">
              <img src="${IMG_NATURE_1}" alt="En pleine nature 1" />
            </div>
            <div class="en-pleine-nature__img en-pleine-nature__img--wide img-frame--no-border">
              <img src="${IMG_NATURE_2}" alt="En pleine nature 2" />
            </div>
          </div>
          <div class="en-pleine-nature__col">
            <div class="en-pleine-nature__img en-pleine-nature__img--wide img-frame--no-border">
              <img src="${IMG_NATURE_3}" alt="En pleine nature 3" />
            </div>
            <div class="en-pleine-nature__img en-pleine-nature__img--tall img-frame--no-border">
              <img src="${IMG_NATURE_4}" alt="En pleine nature 4" />
            </div>
          </div>
        </div>
      </div>
    </section>`;
}

// ══════════════════════════════════════════
//  HOMEPAGE ASSEMBLY
// ══════════════════════════════════════════
function renderHomepage() {
  return `
    <main>
      ${renderHero()}
      ${renderGalleryPreview()}
      ${renderChuteDesCubes()}
      ${renderProjetImportant()}
      ${renderSerpentEtMots()}
      ${renderGalerieVivante()}
      ${renderSectionHomme()}
      ${renderSectionEtoile()}
      ${renderCitation()}
      ${renderSectionMaison()}
      <div class="separation"></div>
      ${renderPetitesSculptures()}
      ${renderEnPleineNature()}
    </main>`;
}

// ══════════════════════════════════════════
//  SLIDER INITIALIZATION
// ══════════════════════════════════════════
function initSliders() {
  document.querySelectorAll('.slider[data-slider-id]').forEach(slider => {
    const id = slider.dataset.sliderId;
    const track = slider.querySelector('.slider__track');
    const leftArrow = slider.querySelector('.slider__arrow--left');
    const rightArrow = slider.querySelector('.slider__arrow--right');
    const dotsContainer = document.querySelector(`.slider__dots[data-slider="${id}"]`);
    const dots = dotsContainer ? dotsContainer.querySelectorAll('.slider__dot') : [];
    const items = Array.from(track.children);
    if (!items.length) return;

    let currentIndex = 0;
    const visibleWidth = slider.offsetWidth;
    const isPetitesSculptures = id === 'petites-sculptures';

    function getItemWidth() {
      const gap = parseFloat(getComputedStyle(track).gap) || 0;
      return items[0].offsetWidth + gap;
    }

    function getMaxIndex() {
      if (isPetitesSculptures) return 2; // 3 positions (0, 1, 2)
      const totalWidth = items.length * getItemWidth();
      const calculated = Math.max(0, Math.ceil((totalWidth - visibleWidth) / getItemWidth()));
      // If we have multiple items but calculated is 0, images probably aren't loaded yet
      // Return 1 to ensure right arrow shows initially
      if (items.length > 1 && calculated === 0) {
        return 1;
      }
      return calculated;
    }

    // Ensure arrows are visible by default
    if (leftArrow) {
      leftArrow.style.opacity = '1';
      leftArrow.style.pointerEvents = 'auto';
    }
    if (rightArrow) {
      rightArrow.style.opacity = '1';
      rightArrow.style.pointerEvents = 'auto';
    }

    function updateSlider() {
      if (isPetitesSculptures) {
        // Custom offsets for petites-sculptures to match Figma centering
        const itemW = getItemWidth();
        // Position 0: first 2 images centered on page
        // Position 1: shift by ~2 card widths
        // Position 2: shift by ~4 card widths
        const offset = currentIndex * itemW * 2;
        track.style.transform = `translateX(-${offset}px)`;
      } else {
        const offset = currentIndex * getItemWidth();
        track.style.transform = `translateX(-${offset}px)`;
      }
      dots.forEach((dot, i) => {
        dot.classList.toggle('slider__dot--active', i === currentIndex);
      });

      // Arrow visibility logic: simple and clear
      if (leftArrow) {
        // Hide left arrow only when at the very start
        if (currentIndex === 0) {
          leftArrow.style.opacity = '0';
          leftArrow.style.pointerEvents = 'none';
        } else {
          leftArrow.style.opacity = '1';
          leftArrow.style.pointerEvents = 'auto';
        }
      }

      if (rightArrow) {
        // Hide right arrow only when at the very end
        const maxIdx = getMaxIndex();
        if (currentIndex >= maxIdx) {
          rightArrow.style.opacity = '0';
          rightArrow.style.pointerEvents = 'none';
        } else {
          rightArrow.style.opacity = '1';
          rightArrow.style.pointerEvents = 'auto';
        }
      }
    }

    if (rightArrow) {
      rightArrow.addEventListener('click', () => {
        if (currentIndex < getMaxIndex()) { currentIndex++; updateSlider(); }
      });
    }

    if (leftArrow) {
      leftArrow.addEventListener('click', () => {
        if (currentIndex > 0) { currentIndex--; updateSlider(); }
      });
    }

    dots.forEach((dot, i) => {
      dot.addEventListener('click', () => { currentIndex = i; updateSlider(); });
    });

    updateSlider();

    // Hide dots beyond max scroll positions
    const max = getMaxIndex();
    dots.forEach((dot, i) => {
      if (i > max) dot.style.display = 'none';
    });
  });
}

// ══════════════════════════════════════════
//  SCROLL-TO-SECTION (Important cards)
// ══════════════════════════════════════════
function initScrollToSection() {
  document.querySelectorAll('[data-scroll-to]').forEach(card => {
    card.addEventListener('click', () => {
      const targetId = card.dataset.scrollTo;
      const target = document.getElementById(targetId);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        card.click();
      }
    });
  });
}

// ══════════════════════════════════════════
//  MOUNT APP
// ══════════════════════════════════════════
document.querySelector('#app').innerHTML = `
  ${renderNavbar()}
  ${renderHomepage()}
  ${renderFooter()}
`;

// Initialize interactive features after DOM is ready
initSliders();
initScrollToSection();
initAnimations();

// ══════════════════════════════════════════
//  ANIMATIONS OBSERVER (Snake Section)
// ══════════════════════════════════════════
function initAnimations() {
  const observerOptions = {
    root: null,
    rootMargin: '-20% 0px -20% 0px', // Trigger when spacer enters middle 60% of viewport
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      // Logic: finding which spacer is intersecting
      // Spacer ID format: "snake-spacer-N"
      const spacerId = entry.target.id;
      const index = parseInt(spacerId.split('-').pop(), 10); // 1, 2, 3, or 4

      if (entry.isIntersecting) {
        // Reveal corresponding word and all previous words
        for (let i = 1; i <= index; i++) {
          const word = document.querySelector(`.serpent-mots__word--${i}`);
          if (word) word.classList.add('animate-in');
        }
      } else {
        // If scrolling UP and spacer leaves view, potentially hide *subsequent* words?
        // User requested "fades in at the same vertical position".
        // Usually, once revealed, we keep them. But for "scroll resistance", maybe we toggle?
        // Let's stick to revealing as they scroll down. 
        // If we want them to disappear when scrolling up, we can remove class.
        // Let's keep it simple: reveal on scroll down.
        const word = document.querySelector(`.serpent-mots__word--${index}`);
        const bounding = entry.boundingClientRect;
        if (bounding.top > 0) {
          // Spacer went below view (scrolled up) -> hide word?
          // If desired, uncomment:
          // if (word) word.classList.remove('animate-in');
        }
      }
    });
  }, observerOptions);

  // Observe spacers
  document.querySelectorAll('.snake-spacer').forEach(spacer => {
    observer.observe(spacer);
  });
}
