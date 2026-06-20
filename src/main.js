import './style.css'
import { renderNavbar, renderHomepage, renderFooter } from './renders/home.mjs'

document.querySelector('#app').innerHTML = `
  ${renderNavbar()}
  ${renderHomepage()}
  ${renderFooter()}
`;

initSliders();
initScrollToSection();
initCarouselAnimation();
initAnimations();

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
      if (items.length > 1 && calculated === 0) {
        return 1;
      }
      return calculated;
    }

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

    track.addEventListener('scroll', () => {
      const scrollLeft = track.scrollLeft;
      const itemWidth = getItemWidth();
      let newIndex = 0;

      if (isPetitesSculptures) {
        newIndex = Math.round(scrollLeft / (itemWidth * 2));
      } else {
        newIndex = Math.round(scrollLeft / itemWidth);
      }

      const maxIdx = getMaxIndex();
      if (newIndex < 0) newIndex = 0;
      if (newIndex > maxIdx) newIndex = maxIdx;

      if (newIndex !== currentIndex) {
        currentIndex = newIndex;
        syncUI();
      }
    });

    window.addEventListener('resize', () => {
      visibleWidth = slider.offsetWidth;
      updateSlider();
    });

    let isDown = false;
    let startX;
    let scrollLeft;

    track.addEventListener('mousedown', (e) => {
      isDown = true;
      track.classList.add('active');
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
      const walk = (x - startX) * 2;
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
//  ANIMATIONS (currently empty)
// ══════════════════════════════════════════
function initAnimations() {}

// ══════════════════════════════════════════
//  CAROUSEL ANIMATION INITIALIZATION
// ══════════════════════════════════════════
function initCarouselAnimation() {
  const wrapper = document.getElementById('carousel-animation-wrapper');
  if (!wrapper) return;

  const items = Array.from(wrapper.querySelectorAll('.carousel-animation__item'));
  const btnLeft = document.getElementById('ca-arrow-left');
  const btnRight = document.getElementById('ca-arrow-right');

  let imagePositions = { left: 1, center: 0, right: 2 };

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
