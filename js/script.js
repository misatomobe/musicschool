// ==============================
// ハンバーガーメニュー
// ==============================
document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.querySelector('.c-hamburger');
  const spNav = document.querySelector('.l-header__sp-nav');

  hamburger.addEventListener('click', (e) => {
    console.log('clicked');
    hamburger.classList.toggle('active');
    spNav.classList.toggle('active');
  });
});

// ==============================
// Swiper
// ==============================
<script>
  const swiper = new Swiper('.card-swiper', {
  // Optional parameters
  slidesPerView: 1,
  spaceBetween: 10,

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints: {
    // when window width is >= 480px
    480: {
      slidesPerView: 2,
      spaceBetween: 10
    },
    // when window width is >= 768px
    768: {
      slidesPerView: 3,
      spaceBetween: 15
    },
    // when window width is >= 1024px
    1024: {
      slidesPerView: 4,
      spaceBetween: 20
    }
  }
});
</script>