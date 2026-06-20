// Pure render functions for the biographie page — no DOM access, Node/browser compatible

const A = '/assets/sculptures';

const IMG_PORTRAIT = `${A}/biographie-portrait.JPEG`;
const IMG_ATELIER = `${A}/Biographie - L'atelier.webp`;
const IMG_LOGO = `${A}/Footer - Logo.png`;
const IMG_FOOTER = `${A}/Footer - Maison du footer.jpeg`;

const navLinks = [
  { label: 'Accueil', href: '/', active: false },
  { label: 'Biographie', href: '/biographie.html', active: true },
  { label: 'Contact', href: '/contact.html', active: false },
  { label: 'Galerie', href: '/galerie.html', active: false },
];

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

export function renderBibliographie() {
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
            <h3>Histoire.</h3>
            <p>Je suis né 15 jours après le lancement du Refus Global à la librairie Tranquille, devenue un lieu de mémoire où j'habite depuis 7 ans. (place tranquille) Pour tout dire, cette déclaration collective d'artistes est une ouverture d'une nouvelle époque décrétée par des artistes contre tous les pouvoirs conservateurs en place religieux et capitaliste, l'art y étant affirmé comme un acte de liberté absolue!</p>
            <p>Dix ans plus tard, un dimanche du printemps 1958, mes parents nous amènent en famille au musée du Québec sur les Plaines d'Abraham; c'est ma première visite dans un musée et mes frères et moi sommes endimanchés pour l'occasion. Au centre de la salle, une immense photo d'un homme plus vieux que mon père, presque chauve, habillé bizarrement; c'est un homme âgé sans chemise blanche ni cravate! Ma mère s'exclame : c'est lui qu'on vient voir, Paul Émile Borduas et ses œuvres récentes. Dès l'entrée dans la première salle, je subis un choc d'incompréhension culturelle! Sur un grand panneau glacé d'un fond blanc légèrement coloré de fracas entrelacés, voici quatre ou cinq blocs noirs émergeant par-dessus les couches blanchies. Ce n'est pas un paysage, mais une énigme totale, peut-être est-ce des morts qui flottent, ou des rochers qui émergent du fleuve au début de printemps! Je comprends tout de suite que la représentation est abolie et que le visiteur a désormais droit de regard... Le tableau me parle et je réponds à l'appel!</p>
            <p>Après cette épiphanie juvénile, ce sont les années 70 qui m'inventeront comme sujet social; les grèves étudiantes, le FLQ, les événements d'octobre et la lutte contre la guerre au Vietnam. Je pratique le journalisme et prolonge des études en sciences politiques. Là où je progressais professionnellement, je célébrais aussi un premier mariage et un fils fébrile pour la musique. Un divorce plus tard et je deviens conseiller politique dans le milieu syndical où je rencontre la femme de mon avenir. Nous choisissons un changement de ville pour Montréal, et de vie. Tout en faisant de la recherche et de l'enseignement, je complète une formation juridique et me joins à un cabinet d'avocats en 1985 pour défendre les causes sociales et le droit de la santé que je pratique 25 ans. La fille et le fils de ma conjointe viennent vivre avec nous sur le plateau montréalais. Ils ont seize ans, elle est amoureuse d'un jeune artiste imaginatif et vaillant. Il se joint à notre famille. Le fils, lui, est poète dans l'âme et ce n'est que naturellement qu'il se lance ensemble dans la « peinture en direct » aux Foufounes électriques sur Sainte-Catherine où Armand Vaillancourt officie la messe collective de l'art contemporain et [les encans du samedi soir où nous sommes les principaux acquéreurs.] En 1994, nous achetons une maison ancestrale au bord du fleuve à Lotbinière. Cette même année, je suis contaminé par un cancer génétique et l'artiste, sa compagne et le poète viennent à notre secours pour rebâtir et repeindre notre arche de Noë. Pendant ma longue convalescence, je m'initie à l'aquarelle contemporaine et rejoins des groupes d'artistes amateurs. Quelques années plus tard, je prêterai une exposition solo de mon travail.</p>
            <p>En 1994, je suis avec mon ouvrier de maison à Lotbinière et on ramasse sous le cap du fleuve des pièces de ferraille de toutes sortes qui viennent de machines agricoles que les anciens colons ont jetées au gré des fractures mécaniques. À un moment donné, je vois au sol, enfoui sous quelques pouces de terre, un meuble de pièces entremêlées d'une partie de machine que je ne peux reconnaître, j'en arrache la vision du squelette éclaté d'un animal disparu.<br>
            Je crie à mon homme :<br>
            Je crois avoir trouvé quelque chose!<br>
            Je pense que c'est un ancien animal, peut-être un oiseau!<br>
            Il me rejoint très étonné, parce que je lui montre en même temps les pièces d'acier très rouillées, que j'assemble de manière improvisée au bout de mes bras. Je lui dis :<br>
            on doit aller à ton atelier de soudure, et on va essayer de le reconstruire.<br>
            Yves est très étonné de ma proposition, mais il ne sait pas dire non. Quelques heures plus tard, sous mes instructions, il soude six pièces d'acier après les avoir longuement brossées. Mon bricolage se présente comme un bipède préhistorique parcourant la savane à grande vitesse. J'explique à Yves que nous avons créé un vélociraptor! Ce sera ma première sculpture, qui incarne la Préhistoire de ma vie de sculpteur, de laquelle découlera une trentaine d'ouvres présentes sur le présent site Web, construit à l'aide de dizaines de photos de mon aventure que Zoltan Odabachian et son équipe auront mise en scène dans le présent site Web.</p>
            <h3>Direction.</h3>
            <p>Auparavant, pendant plusieurs années, je me suis pratiqué avec de l'aquarelle, inspiré par les parcours de la nature, des boisés et des sentiers de la région de Lotbinière, mais jamais comme l'ont fait avant nous les impressionnistes. Plus de 100 ans après eux, la question est toujours la même au moment d'initier un travail: qu'est-ce que l'art? En effet, la révolution impressionniste a pour ferment l'éclosion culturelle d'un nouveau regard sur le monde, qui réinvente à la fois la lumière et les couleurs; comme Degas, et même le mouvement des choses comme Van Gogh l'a fait.</p>
            <p>Pour chaque artiste, le défi est le même, se plonger dans le monde artistique dans lequel il est né, le comprendre, en saisir sa nécessité, puis tenter de rejoindre le langage de son temps. Voilà véritablement le sens de ma démarche et son caractère original, en ce que chaque œuvre est une tentative de fracasser l'espace de mes yeux neufs et de gestes inventifs, peut-être même, si possible, innovateurs, marqué par le minimalisme américain, entre autres de Richard Serra, et l'ouverture radicale des artistes de l'art contemporain énoncé par Marcel Duchamp.</p>
            <p>Bonne visite,</p>
            <p>Marc Plamondon</p>
          </div>
        </div>
      </div>
    </section>`;
}
