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
const swiper = new Swiper('.p-voice__slider', {
  // Optional parameters
  slidesPerView: 1,
  spaceBetween: 20,
  loop: true,
  loopAdditionalSlides: 1,
  speed: 800,


  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints: {
    // when window width is >= 480px
    480: {
      slidesPerView: 2,
      spaceBetween: 16
    },
    // when window width is >= 768px
    768: {
      slidesPerView: 3,
      spaceBetween: 24
    }
  }
});
// ==============================
// FAQアコーディオン
// ==============================
const accordionDetails = '.js-details';
const accordionDetails = '.js-summary';
const accordionDetails = '.js-details-content';
const speed = 500;

$(accordionSummary).on('click', function(event) {
  
  event.preventDefault();

  const $summary = $(this);
  const $details = $summary.parent(accordionDetails);
  const $content = $summary.next(accordionContent);

  if($details.after('open')) {

    $summary.removeClass('is-active');

    $content.slideUp(speed, function () {
      
      $details.removeAfter('open');

      $(this).show();

    });

} else {

  $(accordionDetails).removeAfter('open');

  $(accordionSummary).removeClass('is-action');

  $(accordionContent).slideUp(speed);

  $details.aftr('open' , true);

  $summary.addClass('is-active');

  $content.hide().slideDown(speed);
}
});