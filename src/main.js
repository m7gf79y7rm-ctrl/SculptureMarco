import './style.css'

// ══════════════════════════════════════════
//  ASSETS — Sculpture image paths
// ══════════════════════════════════════════
const A = '/assets/sculptures';

// Hero
const IMG_LE_PAN = `${A}/Acceuil - Hero  - Gallerie - Le pan.png`;

// La chute des cubes
const IMG_CHUTE = `${A}/Acceuil - section la chute des cubes  - Gallerie - La chute des cubes.png`;
const IMG_CHUTE_1 = `${A}/La chute des cubes 1.webp`;
const IMG_CHUTE_2 = `${A}/La chute des cubes 2 [].png`;

// Projet important cards
const IMG_PI_PAPA_MAMAN = `${A}/Acceuil - Sculptures importantes - Papa et Maman en 1967.png`;
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
  { image: `${A}/Acceuil - Gallerie Vivante  - Gallerie - Spirale tete 1.png`, title: 'Fée des glaces' },
  { image: `${A}/Acceuil - Gallerie Vivante  - Gallerie - Terre en Cage.png`, title: 'Migrants du Cosmos' },
  { image: `${A}/Acceuil - Gallerie Vivante  - Gallerie - Pierre en cage.png`, title: 'Liberté' },
  { image: `${A}/Acceuil - Gallerie Vivante  - Gallerie - Spirale Blanche.11.png`, title: 'Curiosité' },
  { image: `${A}/Acceuil - Gallerie Vivante  - Gallerie - Roche sur canettes.png`, title: "L'île morte" },
  { image: `${A}/Acceuil - Gallerie Vivante  - Gallerie - Chute du mur .png`, title: 'Tsunami du Covid' },
  { image: `${A}/Acceuil - Gallerie Vivante  - Gallerie - Triangle triangulaire.png`, title: 'Techno-plante' },
  { image: `${A}/Acceuil - Gallerie Vivante  - Gallerie - Cube penche.png`, title: 'Monolithe' },
  { image: `${A}/Acceuil - Gallerie Vivante  - Gallerie - Chien Fou.png`, title: 'Le chien fou' },
  { image: `${A}/Acceuil - Gallerie Vivante  - Gallerie - Maman .png`, title: 'Maman' },
  { image: `${A}/Acceuil - Gallerie Vivante  - Gallerie - Manifs des carrés rouges.png`, title: 'La Manifs des cubes rouges' },
];

// Section L'Homme
const IMG_HOMME_1 = `${A}/L'homme 1 [].png`;
const IMG_HOMME_2 = `${A}/L'homme 2 [].png`;
const IMG_HOMME_3 = `${A}/L'homme 3.1.webp`;
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
  { image: `${A}/Acceuil - Petites sculptures - origine du monde.webp`, title: 'Origine du monde', objectPosition: 'top' },
  { image: `${A}/Acceuil - Petites sculptures - Oie.png`, title: 'Oie' },
  { image: `${A}/Acceuil - Petites sculptures - Helice.jpeg`, title: 'Hélice' },
  { image: `${A}/Acceuil - Petites sculptures - Volant.jpeg`, title: 'Volant' },
  { image: `${A}/Acceuil - Petites sculptures - Face.jpeg`, title: 'Face' },
  { image: `${A}/Acceuil - Petites sculptures - Anclume.png`, title: 'Anclume' },
  { image: `${A}/Acceuil - Petites sculptures - Pistolet 1.1.webp`, title: 'Pistolet' },
  { image: `${A}/Acceuil - Petites sculptures - Guerre de troie.webp`, title: 'Guerre de troie' },
  { image: `${A}/Acceuil - Petites sculptures - Exploration.webp`, title: 'Exploration' },
  { image: `${A}/Acceuil - Petites sculptures - Pogo.webp`, title: 'Pogo', objectPosition: '10% 50%' },
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
  `${A}/Acceuil - Gallerie Vivante  - Gallerie - Chien Fou.png`,
  `${A}/Acceuil - Gallerie Vivante  - Gallerie - Chute du mur .png`,
  `${A}/Acceuil - Gallerie Vivante  - Gallerie - Cube penche.png`,
  `${A}/Acceuil - Gallerie Vivante  - Gallerie - Don Quichotte.png`,
  `${A}/Acceuil - Gallerie Vivante  - Gallerie - Maman .png`,
  `${A}/Acceuil - Gallerie Vivante  - Gallerie - Manifs des carrés rouges.png`,
  `${A}/Acceuil - Gallerie Vivante  - Gallerie - Pierre en cage.png`,
  `${A}/Acceuil - Gallerie Vivante  - Gallerie - Roche sur canettes.png`,
  `${A}/Acceuil - Gallerie Vivante  - Gallerie - Spirale Blanche.11.png`,
  `${A}/Acceuil - Gallerie Vivante  - Gallerie - Spirale tete 1.png`,
  `${A}/Acceuil - Gallerie Vivante  - Gallerie - Terre en Cage.png`,
  `${A}/Acceuil - Gallerie Vivante  - Gallerie - Triangle triangulaire.png`,
  `${A}/Acceuil - Projet important - Section L'etoile et l'auto  - Gallerie - Étoile et auto .png`,
  `${A}/Acceuil - Projet important - section L'homme  - Gallerie - L'homme.png`,
  `${A}/Acceuil - Section Le serpent  - Gallerie - Le serpent .png`,
  `${A}/Acceuil - section la chute des cubes  - Gallerie - La chute des cubes.png`,
  `${A}/Gallerie - Cube en gravite.jpeg`,
  `${A}/Gallerie - L'artefact.png`,
  `${A}/Gallerie - La terre en ondulation.png`,
  `${A}/Gallerie - Le canot.png`,
  `${A}/Gallerie - Jesus de Nazareth.png`,
  `${A}/Gallerie - Le pan en feuille.png`,
  `${A}/Gallerie - Le sage.png`,
  `${A}/Gallerie - Les oiseaux .jpeg`,
  `${A}/Gallerie - Pince rouillee.png`,
];

// Footer
const IMG_LOGO = `${A}/Footer - Logo.png`;
const IMG_FOOTER = `${A}/Footer - Maison du footer.jpeg`;

// ══════════════════════════════════════════
//  CAROUSEL ANIMATION IMAGES
// ══════════════════════════════════════════
// Using the actual project assets. The 'main' asset is placed at index 0.
const carouselAnimationImages = [
  `${A}/Acceuil - Papa et Maman en 1967 main .webp`,
  `${A}/Acceuil - Papa et Maman 1967 1.webp`,
  `${A}/Acceuil - Papa et Maman 1967 2.webp`
];

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
            <span>© 2026 fait par Pulse Websites</span>
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
            ${imgFrame(IMG_LE_PAN, 'Grande hermine', 'hero__le-pan')}
            <div class="hero__title-bar">La Grande Hermine</div>
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
          ${imgFrame(IMG_CHUTE, 'Cubes', 'chute__img1')}
          ${imgBaked(IMG_CHUTE_2, 'Cubes 2', 'chute__img2')}
        </div>
        <div class="chute__right">
          <div class="chute__title-bar">
            ${gradientTitle('Cubes', 'pale')}
          </div>
          ${imgFrame(IMG_CHUTE_1, 'Cubes 1', 'chute__main-img img-frame--lynch-light')}
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
    { image: IMG_PI_ETOILE, title: 'Étoile BELAIR-67', scrollTarget: 'section-etoile' },
    { image: IMG_PI_MAISON, title: "La Caserne des cauchemars", scrollTarget: 'section-maison' },
    { image: IMG_PI_HOMME, title: "Karma", scrollTarget: 'section-homme' },
    { image: IMG_PI_PAPA_MAMAN, title: 'Papa et Maman en 1967', scrollTarget: 'carousel-animation' },
  ];

  const cardsHTML = cards.map(c => renderCardImportant(c)).join('');

  return `
    <section class="projet-important">
      <div class="projet-important__header">
        <div class="projet-important__title">
          ${gradientTitle('Visions majeures', 'dark')}
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
      <div class="serpent-mots__container">
        <div class="serpent-mots__quote-box">
            <div class="citation__marks"><img src="${A}/quotation-marks-new.png" alt="" /></div>
            <p class="serpent-mots__quote-text">« Il n’y a pas de sculpture qui se contente d’être regardée : toutes nous regardent en retour et nous traversent, et, dans ce face-à-face silencieux, elles éveillent en nous des désirs, des souvenirs et des ombres que nous ignorions porter. »</p>
        </div>
        <div class="serpent-mots__right">
            <div class="serpent-mots__title-bar">
            ${gradientTitle('T-rex local', 'pale')}
            </div>
            <div class="serpent-mots__images">
            ${imgBaked(IMG_SERPENT_1, 'T-rex local détail', 'serpent-mots__img-main')}
            </div>
        </div>
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

function renderCardSmall({ image, title, objectPosition }) {
  const styleAttr = objectPosition ? ` style="object-position: ${objectPosition};"` : '';
  return `
    <div class="card card--small">
      <img class="card__image" src="${image}" alt="${title}"${styleAttr} />
      <div class="card--small__bottom-bar">
        <h3 class="card--small__title">${title}</h3>
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
          ${imgBaked(IMG_HOMME_1, "Karma 1", 'section-homme__img1')}
          ${imgBaked(IMG_HOMME_2, "Karma 2", 'section-homme__img2')}
        </div>
        <div class="section-homme__col-center">
          <div class="section-homme__title-bar">
            ${gradientTitle("Karma", 'light')}
          </div>
          ${imgFrame(IMG_HOMME_3, "Karma 3", 'section-homme__img3')}
        </div>
        <div class="section-homme__col-right">
          ${imgBaked(IMG_HOMME_4, "Karma 4", 'section-homme__img4')}
          ${imgBaked(IMG_HOMME_5, "Karma 5", 'section-homme__img5')}
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
            ${gradientTitle("Étoile BELAIR-67", 'dark')}
          </div>
          ${imgFrame(IMG_PI_ETOILE, "Étoile BELAIR-67", 'section-etoile__main-img img-frame--lynch')}
        </div>
        <div class="section-etoile__right">
          ${imgBaked(IMG_ETOILE_1, "Étoile BELAIR-67 détail 1", 'section-etoile__detail1')}
          <div class="section-etoile__detail2-group">
            <div class="section-etoile__spacer"></div>
            ${imgBaked(IMG_ETOILE_2, "Étoile BELAIR-67 détail 2", 'section-etoile__detail2')}
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
        <div class="citation__marks"><img src="${A}/quotation-marks-new.png" alt="" /></div>
        <p class="citation__text">« Les images nous embrassent : elles s’ouvrent à nous et se referment sur nous dans la mesure où elles suscitent en nous quelque chose que l’on pourrait nommer une expérience intérieure. »</p>
        <div class="citation__attribution">
          <div class="citation__line"></div>
          <span class="citation__author">Zoltan, petit fils</span>
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
          ${gradientTitle('La Caserne des cauchemars', 'light')}
        </div>
        <div class="section-maison__grid">
          <div class="section-maison__col section-maison__col--left">
            ${imgBaked(IMG_MAISON_1, 'La Caserne des cauchemars 1', 'section-maison__img1', 'style="width:299px;margin-bottom:-52px"')}
            ${imgBaked(IMG_MAISON_2, 'La Caserne des cauchemars 2', 'section-maison__img2', 'style="width:365px;margin-bottom:-52px"')}
            ${imgBaked(IMG_MAISON_3, 'La Caserne des cauchemars 3', 'section-maison__img3', 'style="width:243px"')}
          </div>
          <div class="section-maison__col section-maison__col--center">
            ${imgBaked(IMG_MAISON_4, 'La Caserne des cauchemars 4', 'section-maison__img4', 'style="width:338px;margin-bottom:-20px"')}
            ${imgBaked(IMG_MAISON_5, 'La Caserne des cauchemars 5', 'section-maison__img5', 'style="width:471px;margin-bottom:-20px"')}
            <div class="section-maison__spacer" style="height:100px"></div>
          </div>
          <div class="section-maison__col section-maison__col--right">
            ${imgFrame(IMG_PI_MAISON, 'La Caserne des cauchemars', 'section-maison__img6 img-frame--lynch-light', 'style="width:426px;height:443px"')}
            ${imgBaked(IMG_MAISON_6, 'La Caserne des cauchemars 6', 'section-maison__img7', 'style="width:316px;margin-bottom:-76px;z-index:2;position:relative"')}
            ${imgBaked(IMG_MAISON_7, 'La Caserne des cauchemars 7', 'section-maison__img8', 'style="width:265px"')}
          </div>
        </div>
      </div>
    </section>`;
}

// ══════════════════════════════════════════
//  SECTION 10.5 — CAROUSEL ANIMATION
// ══════════════════════════════════════════
function renderCarouselAnimation() {
  const svgLeft = `<svg style="display:block;width:100%;height:100%" fill="none" preserveAspectRatio="none" viewBox="0 0 15.969 15.624"><path d="M2.9085 8.66525L8.41025 14.1667C8.58025 14.3371 8.66617 14.5371 8.668 14.7667C8.67 14.9964 8.58608 15.1971 8.41625 15.3688C8.24625 15.5409 8.04567 15.626 7.8145 15.624C7.58333 15.622 7.38208 15.5361 7.21075 15.3662L0.26075 8.41625C0.16975 8.32425 0.103583 8.22858 0.0622498 8.12925C0.0207498 8.02975 0 7.92425 0 7.81275C0 7.70125 0.0207498 7.596 0.0622498 7.497C0.103583 7.39783 0.16975 7.30242 0.26075 7.21075L7.21675 0.25475C7.39258 0.0849167 7.594 0 7.821 0C8.04783 0 8.24625 0.0849167 8.41625 0.25475C8.58608 0.42875 8.671 0.629499 8.671 0.856999C8.671 1.08467 8.58608 1.28375 8.41625 1.45425L2.9085 6.96175H15.1112C15.3554 6.96175 15.5594 7.04258 15.7233 7.20425C15.8871 7.36592 15.969 7.569 15.969 7.8135C15.969 8.058 15.8871 8.26108 15.7233 8.42275C15.5594 8.58442 15.3554 8.66525 15.1112 8.66525H2.9085Z" fill="var(--fill-0, #0A0A0A)"/></svg>`;
  const svgRight = `<svg style="display:block;width:100%;height:100%" fill="none" preserveAspectRatio="none" viewBox="0 0 15.963 15.624"><path d="M13.0545 8.66228H0.85175C0.607083 8.66228 0.404 8.58145 0.2425 8.41978C0.0808333 8.25812 0 8.05503 0 7.81053C0 7.56603 0.0808333 7.36295 0.2425 7.20128C0.404 7.03962 0.607083 6.95878 0.85175 6.95878H13.0545L7.55275 1.45728C7.38275 1.28728 7.29667 1.08703 7.2945 0.856535C7.29217 0.625868 7.37608 0.425117 7.54625 0.254284C7.71658 0.0827841 7.91733 -0.00196542 8.1485 3.45823e-05C8.37967 0.00203458 8.58092 0.0879512 8.75225 0.257785L15.7022 7.20778C15.7932 7.29978 15.8594 7.39545 15.9007 7.49478C15.9422 7.59428 15.963 7.69978 15.963 7.81128C15.963 7.92278 15.9422 8.02803 15.9007 8.12703C15.8594 8.2262 15.7932 8.32162 15.7022 8.41328L8.74625 15.3633C8.57042 15.5371 8.369 15.624 8.142 15.624C7.91517 15.624 7.71675 15.5366 7.54675 15.3618C7.37692 15.1916 7.292 14.9929 7.292 14.7655C7.292 14.5384 7.37692 14.3398 7.54675 14.1698L13.0545 8.66228Z" fill="var(--fill-0, #0A0A0A)"/></svg>`;

  return `
    <section class="carousel-animation" id="carousel-animation">
      <div class="carousel-animation__header">
        <div class="carousel-animation__title">
          ${gradientTitle('Papa et Maman en 1967', 'dark')}
        </div>
      </div>
      <div class="carousel-animation__wrapper" id="carousel-animation-wrapper">
        <div class="carousel-animation__item" data-index="0">
          <img src="${carouselAnimationImages[0]}" alt="" />
          <div class="carousel-animation__frame"></div>
        </div>
        <div class="carousel-animation__item" data-index="1">
          <img src="${carouselAnimationImages[1]}" alt="" />
          <div class="carousel-animation__frame"></div>
        </div>
        <div class="carousel-animation__item" data-index="2">
          <img src="${carouselAnimationImages[2]}" alt="" />
          <div class="carousel-animation__frame"></div>
        </div>
        
        <button class="carousel-animation__arrow carousel-animation__arrow--left" id="ca-arrow-left" aria-label="Précédent">
          <div class="carousel-animation__arrow-icon">${svgLeft}</div>
        </button>
        <button class="carousel-animation__arrow carousel-animation__arrow--right" id="ca-arrow-right" aria-label="Suivant">
          <div class="carousel-animation__arrow-icon">${svgRight}</div>
        </button>
      </div>
    </section>`;
}

// ══════════════════════════════════════════
//  SECTION 11 — PETITES SCULPTURES (SLIDER)
// ══════════════════════════════════════════
function renderPetitesSculptures() {
  const items = petitesSculptures.map(s =>
    renderCardSmall(s)
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
      ${sliderDots(Math.ceil(petitesSculptures.length / 2), 'petites-sculptures')}
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
          ${gradientTitle('Jardin', 'light')}
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
      <div class="separation separation--white"></div>
      ${renderCarouselAnimation()}
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
    let visibleWidth = slider.offsetWidth;
    const isPetitesSculptures = id === 'petites-sculptures';

    function getItemWidth() {
      const gap = parseFloat(getComputedStyle(track).gap) || 0;
      return (items[0]?.offsetWidth || 0) + gap;
    }

    function getMaxIndex() {
      if (isPetitesSculptures) return Math.ceil(items.length / 2) - 1;
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

    function syncUI() {
      dots.forEach((dot, i) => {
        dot.classList.toggle('slider__dot--active', i === currentIndex);
      });

      // Arrow visibility logic simple and clear
      if (leftArrow) {
        if (currentIndex === 0) {
          leftArrow.style.opacity = '0';
          leftArrow.style.pointerEvents = 'none';
        } else {
          leftArrow.style.opacity = '1';
          leftArrow.style.pointerEvents = 'auto';
        }
      }

      if (rightArrow) {
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

    function updateSlider() {
      if (isPetitesSculptures) {
        const itemW = getItemWidth();
        const offset = currentIndex * itemW * 2;
        track.scrollTo({ left: offset, behavior: 'smooth' });
      } else {
        const offset = currentIndex * getItemWidth();
        track.scrollTo({ left: offset, behavior: 'smooth' });
      }
      syncUI();
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

    // Native scroll event logic for syncing dots (mobile swipe support)
    track.addEventListener('scroll', () => {
      const scrollLeft = track.scrollLeft;
      const itemWidth = getItemWidth();
      let newIndex = 0;

      if (isPetitesSculptures) {
        // Offset logic corresponds to itemW * 2
        newIndex = Math.round(scrollLeft / (itemWidth * 2));
      } else {
        // For normal sliders, we might have padding logic, but round is usually fine
        newIndex = Math.round(scrollLeft / itemWidth);
      }

      const maxIdx = getMaxIndex();
      if (newIndex < 0) newIndex = 0;
      if (newIndex > maxIdx) newIndex = maxIdx;

      if (newIndex !== currentIndex) {
        currentIndex = newIndex;
        syncUI(); // ONLY sync UI, do not call format/scrollTo
      }
    });

    // ==========================================
    // Resize Listener
    // ==========================================
    window.addEventListener('resize', () => {
      visibleWidth = slider.offsetWidth;
      updateSlider();
    });

    // ==========================================
    // Desktop Mouse Drag to Scroll (Swipe simulation)
    // ==========================================
    let isDown = false;
    let startX;
    let scrollLeft;

    track.addEventListener('mousedown', (e) => {
      isDown = true;
      track.classList.add('active'); // optional styling class
      startX = e.pageX - track.offsetLeft;
      scrollLeft = track.scrollLeft;
    });

    track.addEventListener('mouseleave', () => {
      isDown = false;
      track.classList.remove('active');
    });

    track.addEventListener('mouseup', () => {
      isDown = false;
      track.classList.remove('active');
    });

    track.addEventListener('mousemove', (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - track.offsetLeft;
      const walk = (x - startX) * 2; // scroll-fast multiplier
      track.scrollLeft = scrollLeft - walk;
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
initCarouselAnimation();
initAnimations();

// ══════════════════════════════════════════
//  ANIMATIONS OBSERVER (Snake Section)
// ══════════════════════════════════════════
function initAnimations() {
  // Removed custom scroll resistance animations as the design was changed to a static quote block
}

// ══════════════════════════════════════════
//  CAROUSEL ANIMATION INITIALIZATION
// ══════════════════════════════════════════
function initCarouselAnimation() {
  const wrapper = document.getElementById('carousel-animation-wrapper');
  if (!wrapper) return;

  const items = Array.from(wrapper.querySelectorAll('.carousel-animation__item'));
  const btnLeft = document.getElementById('ca-arrow-left');
  const btnRight = document.getElementById('ca-arrow-right');

  // State: Index 0 is 'main', index 1 is '1', index 2 is '2'
  // We want the 'main' image (index 0) to be in the center at startup
  let imagePositions = { left: 1, center: 0, right: 2 };

  // Calculate proportional heights to keep identical aspect-ratio to 700:933 (0.7502)
  // Sizes scaled by 1.25x compared to the original design
  // Center: width 60.62% -> height: 100%
  // Left/Right: width 36.63% -> height: 60.32%
  const posStyles = {
    left: { left: '0%', top: '9.524%', width: '36.63%', height: '60.317%', zIndex: 1 },
    center: { left: '19.597%', top: '0%', width: '60.623%', height: '100%', zIndex: 3 },
    right: { left: '63.37%', top: '9.524%', width: '36.63%', height: '60.317%', zIndex: 1 }
  };

  function update() {
    Object.assign(items[imagePositions.left].style, posStyles.left);
    Object.assign(items[imagePositions.center].style, posStyles.center);
    Object.assign(items[imagePositions.right].style, posStyles.right);
  }

  btnLeft.addEventListener('click', () => {
    imagePositions = {
      left: imagePositions.center,
      center: imagePositions.right,
      right: imagePositions.left
    };
    update();
  });

  btnRight.addEventListener('click', () => {
    imagePositions = {
      left: imagePositions.right,
      center: imagePositions.left,
      right: imagePositions.center
    };
    update();
  });

  update();
}
