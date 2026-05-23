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
const accordionSummary = '.js-summary';
const accordionContent = '.js-details-content';
const speed = 500;

$(accordionSummary).on('click', function (event) {

  // detailsのデフォルト挙動を停止
  event.preventDefault();

  // クリックした要素
  const $summary = $(this);

  // 親details
  const $details = $summary.parent(accordionDetails);

  // 開閉するcontent
  const $content = $summary.next(accordionContent);

  // すでに開いている場合
  if ($details.attr('open')) {

    // active解除
    $summary.removeClass('is-active');

    // 閉じる
    $content.slideUp(speed, function () {

      $details.removeAttr('open');

      $(this).show();

    });

  } else {

    // 他を閉じる
    $(accordionDetails).removeAttr('open');

    $(accordionSummary).removeClass('is-active');

    $(accordionContent).slideUp(speed);

    // 現在を開く
    $details.attr('open', true);

    $summary.addClass('is-active');

    $content.hide().slideDown(speed);

  }

});