// Pure render functions for the homepage — no DOM access, Node/browser compatible

const A = '/assets/sculptures';

const IMG_LE_PAN = `${A}/Acceuil - Hero  - Gallerie - Le pan.png`;

const IMG_CHUTE = `${A}/Acceuil - section la chute des cubes  - Gallerie - La chute des cubes.png`;
const IMG_CHUTE_1 = `${A}/La chute des cubes 1.webp`;
const IMG_CHUTE_2 = `${A}/La chute des cubes 2 [].png`;

const IMG_PI_PAPA_MAMAN = `${A}/Acceuil - Sculptures importantes - Papa et Maman en 1967.png`;
const IMG_PI_ETOILE = `${A}/Acceuil - Projet important - Section L'etoile et l'auto  - Gallerie - Étoile et auto .png`;
const IMG_ETOILE_1 = `${A}/L'étoile et l'auto 1 [].png`;
const IMG_ETOILE_2 = `${A}/L'étoile et l'auto 2 [].png`;
const IMG_PI_MAISON = `${A}/Acceuil - Projet important - section La maison  - Gallerie - La maison.png.png`;
const IMG_MAISON_8 = `${A}/La maison 8.JPEG`;
const IMG_PI_HOMME = `${A}/Acceuil - Projet important - section L'homme  - Gallerie - L'homme.png`;

const IMG_SERPENT_1 = `${A}/Le serpent 1 [].png`;

const galerieVivanteItems = [
  { image: `${A}/Acceuil - Gallerie Vivante  - Gallerie - Don Quichotte.png`, title: 'Don Quichotte' },
  { image: `${A}/Acceuil - Gallerie Vivante  - Gallerie - Spirale tete 1.png`, title: 'Fée des glaces' },
  { image: `${A}/Acceuil - Gallerie Vivante  - Gallerie - Terre en Cage.png`, title: 'Migrants du Cosmos' },
  { image: `${A}/Acceuil - Gallerie Vivante  - Gallerie - Pierre en cage.png`, title: 'Innocente' },
  { image: `${A}/Acceuil - Gallerie Vivante  - Gallerie - Spirale Blanche.11.png`, title: 'Flamme' },
  { image: `${A}/Acceuil - Gallerie Vivante  - Gallerie - Roche sur canettes.png`, title: "L'île morte" },
  { image: `${A}/Acceuil - Gallerie Vivante  - Gallerie - Chute du mur .png`, title: 'Tsunami du Covid' },
  { image: `${A}/Acceuil - Gallerie Vivante  - Gallerie - Triangle triangulaire.png`, title: 'Techno-plante' },
  { image: `${A}/Acceuil - Gallerie Vivante  - Gallerie - Cube penche.png`, title: 'Monolithe' },
  { image: `${A}/Acceuil - Gallerie Vivante  - Gallerie - Chien Fou.png`, title: 'Le chien fou' },
  { image: `${A}/Acceuil - Gallerie Vivante  - Gallerie - Maman .png`, title: 'Maman' },
  { image: `${A}/Acceuil - Gallerie Vivante  - Gallerie - Manifs des carrés rouges.png`, title: 'Manifestant des Carrés rouge' },
];

const IMG_HOMME_1 = `${A}/L'homme 1 [].png`;
const IMG_HOMME_2 = `${A}/L'homme 2 [].png`;
const IMG_HOMME_3 = `${A}/L'homme 3.1.webp`;
const IMG_HOMME_4 = `${A}/L'homme 4 [].png`;
const IMG_HOMME_5 = `${A}/L'homme 5 [].png`;

const IMG_MAISON_1 = `${A}/La maison 1 [].png`;
const IMG_MAISON_2 = `${A}/La maison 2 [].png`;
const IMG_MAISON_3 = `${A}/La maison 3 [].png`;
const IMG_MAISON_4 = `${A}/La maison 4 [].png`;
const IMG_MAISON_5 = `${A}/La maison 5 [].png`;
const IMG_MAISON_6 = `${A}/La maison 6 [].png`;
const IMG_MAISON_7 = `${A}/La maison 7 [].png`;

const petitesSculptures = [
  { image: `${A}/Acceuil - Petites sculptures - origine du monde.webp`, title: 'Origine du monde', objectPosition: 'top' },
  { image: `${A}/Acceuil - Petites sculptures - Oie.png`, title: 'Nid' },
  { image: `${A}/Acceuil - Petites sculptures - Helice.jpeg`, title: 'Où vais-je ?' },
  { image: `${A}/Acceuil - Petites sculptures - Volant.jpeg`, title: 'Les heures glissantes' },
  { image: `${A}/Acceuil - Petites sculptures - Face.jpeg`, title: "L'amant piègé" },
  { image: `${A}/Acceuil - Petites sculptures - Anclume.png`, title: 'Enclumes' },
  { image: `${A}/Acceuil - Petites sculptures - Pistolet 1.1.webp`, title: 'Kamara' },
  { image: `${A}/Acceuil - Petites sculptures - Guerre de troie.webp`, title: 'Guerre de troie' },
  { image: `${A}/Acceuil - Petites sculptures - Exploration.webp`, title: 'Exploration' },
  { image: `${A}/Acceuil - Petites sculptures - Pogo.webp`, title: 'Pogo', objectPosition: '10% 50%' },
];

const IMG_NATURE_1 = `${A}/En pleine nature 1 - Le Gardien [].png`;
const IMG_NATURE_2 = `${A}/En pleine nature 2 - Le Gardien [].png`;
const IMG_NATURE_3 = `${A}/En pleine nature 3 - Tsunami du Covid [].png`;
const IMG_NATURE_4 = `${A}/En pleine nature 4 - Don Quichotte [].png`;

const IMG_GAL = [
  `${A}/Acceuil - Hero  - Gallerie - Le pan.png`,
  `${A}/Gallerie - Le mur gradient.png`,
  `${A}/Acceuil - Gallerie Vivante  - Gallerie - Chien Fou.png`,
  `${A}/Acceuil - Gallerie Vivante  - Gallerie - Chute du mur .png`,
  `${A}/Acceuil - Gallerie Vivante  - Gallerie - Cube penche.png`,
  `${A}/Acceuil - Gallerie Vivante  - Gallerie - Don Quichotte.png`,
  `${A}/Acceuil - Gallerie Vivante  - Gallerie - Maman .png`,
  `${A}/Acceuil - Gallerie Vivante  - Gallerie - Manifs des carrés rouges.png`,
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

const IMG_LOGO = `${A}/Footer - Logo.png`;
const IMG_FOOTER = `${A}/Footer - Maison du footer.jpeg`;

const carouselAnimationImages = [
  `${A}/Acceuil - Papa et Maman en 1967 main .webp`,
  `${A}/Acceuil - Papa et Maman 1967 1.webp`,
  `${A}/Acceuil - Papa et Maman 1967 2.webp`
];

const arrowForwardSVG = `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6z"/></svg>`;
const arrowBackSVG = `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6z"/></svg>`;
const arrowRightSVG = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" xmlns="http://www.w3.org/2000/svg"><path d="M9 18l6-6-6-6"/></svg>`;

const navLinks = [
  { label: 'Accueil', href: '#accueil', active: true },
  { label: 'Biographie', href: '/biographie.html', active: false },
  { label: 'Contact', href: '/contact.html', active: false },
  { label: 'Galerie', href: '/galerie.html', active: false },
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

function gradientTitle(text, variant = 'dark') {
  return `<div class="gradient-title gradient-title--${variant}">${text}</div>`;
}

function imgFrame(src, alt, cls = '', extra = '') {
  return `<div class="img-frame ${cls}" ${extra}><img src="${src}" alt="${alt}" /></div>`;
}

function imgBaked(src, alt, cls = '', extra = '') {
  return `<div class="img-baked ${cls}" ${extra}><img src="${src}" alt="${alt}" /></div>`;
}

function sliderDots(count, id) {
  const dots = Array.from({ length: count }, (_, i) =>
    `<button class="slider__dot${i === 0 ? ' slider__dot--active' : ''}" data-index="${i}" aria-label="Slide ${i + 1}"></button>`
  ).join('');
  return `<div class="slider__dots" data-slider="${id}">${dots}</div>`;
}

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

function renderGalleryPreview() {
  const allImages = [...IMG_GAL, ...IMG_GAL, ...IMG_GAL, ...IMG_GAL];
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
    { image: IMG_PI_ETOILE, title: 'Étoile filante ’67', scrollTarget: 'section-etoile' },
    { image: IMG_PI_MAISON, title: 'La Caserne des cauchemars', scrollTarget: 'section-maison' },
    { image: IMG_PI_HOMME, title: 'Karma', scrollTarget: 'section-homme' },
    { image: IMG_PI_PAPA_MAMAN, title: 'Papa et Maman en 1967', scrollTarget: 'carousel-animation' },
  ];

  const cardsHTML = cards.map(c => renderCardImportant(c)).join('');

  return `
    <section class="projet-important">
      <div class="projet-important__header">
        <div class="projet-important__title">
          ${gradientTitle('VISIONS MAJEURES', 'dark')}
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

function renderSerpentEtMots() {
  return `
    <section class="serpent-mots">
      <div class="serpent-mots__container">
        <div class="serpent-mots__quote-box">
            <div class="citation__marks"><img src="${A}/quotation-marks-new.png" alt="" /></div>
            <p class="serpent-mots__quote-text">« Il n'y a pas de sculpture qui se contente d'être regardée : toutes nous regardent en retour et nous traversent, et, dans ce face-à-face silencieux, elles éveillent en nous des désirs, des souvenirs et des ombres que nous ignorions porter. »</p>
            <div class="citation__attribution" style="margin-top: 40px;">
              <div class="citation__line"></div>
              <span class="citation__author">Zoltan, petit fils</span>
              <div class="citation__line"></div>
            </div>
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

function renderSectionHomme() {
  return `
    <section class="section-homme" id="section-homme">
      <div class="section-homme__container">
        <div class="section-homme__col-left">
          ${imgBaked(IMG_HOMME_1, 'Karma 1', 'section-homme__img1')}
          ${imgBaked(IMG_HOMME_2, 'Karma 2', 'section-homme__img2')}
        </div>
        <div class="section-homme__col-center">
          <div class="section-homme__title-bar">
            ${gradientTitle('Karma', 'light')}
          </div>
          ${imgFrame(IMG_HOMME_3, 'Karma 3', 'section-homme__img3')}
        </div>
        <div class="section-homme__col-right">
          ${imgBaked(IMG_HOMME_4, 'Karma 4', 'section-homme__img4')}
          ${imgBaked(IMG_HOMME_5, 'Karma 5', 'section-homme__img5')}
        </div>
      </div>
    </section>`;
}

function renderSectionEtoile() {
  return `
    <section class="section-etoile" id="section-etoile">
      <div class="section-etoile__container">
        <div class="section-etoile__left">
          <div class="section-etoile__title-bar">
            ${gradientTitle('Étoile filante ’67', 'dark')}
          </div>
          ${imgFrame(IMG_PI_ETOILE, 'Étoile filante ’67', 'section-etoile__main-img img-frame--lynch')}
        </div>
        <div class="section-etoile__right">
          ${imgBaked(IMG_ETOILE_1, 'Étoile BELAIR-67 détail 1', 'section-etoile__detail1')}
          <div class="section-etoile__detail2-group">
            <div class="section-etoile__spacer"></div>
            ${imgBaked(IMG_ETOILE_2, 'Étoile BELAIR-67 détail 2', 'section-etoile__detail2')}
          </div>
        </div>
      </div>
    </section>`;
}

function renderCitation() {
  return `
    <section class="citation">
      <div class="citation__container">
        <div class="citation__marks"><img src="${A}/quotation-marks-new.png" alt="" /></div>
        <p class="citation__text">« Les images nous embrassent : elles s'ouvrent à nous et se referment sur nous dans la mesure où elles suscitent en nous quelque chose que l'on pourrait nommer une expérience intérieure. »</p>
        <div class="citation__attribution">
          <div class="citation__line"></div>
          <span class="citation__author">Didi Hurberman</span>
          <div class="citation__line"></div>
        </div>
      </div>
    </section>`;
}

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
            ${imgFrame(IMG_MAISON_8, 'La Caserne des cauchemars', 'section-maison__img6 img-frame--lynch-light', 'style="width:426px;height:443px"')}
            ${imgBaked(IMG_MAISON_6, 'La Caserne des cauchemars 6', 'section-maison__img7', 'style="width:316px;margin-bottom:-76px;z-index:2;position:relative"')}
            ${imgBaked(IMG_MAISON_7, 'La Caserne des cauchemars 7', 'section-maison__img8', 'style="width:265px"')}
          </div>
        </div>
      </div>
    </section>`;
}

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

function renderPetitesSculptures() {
  const items = petitesSculptures.map(s => renderCardSmall(s)).join('');

  return `
    <section class="petites-sculptures">
      <div class="petites-sculptures__header">
        <div class="petites-sculptures__title">
          ${gradientTitle('Petites oeuvres', 'dark')}
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

export function renderHomepage() {
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
