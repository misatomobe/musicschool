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

  watchOverflow: false,

  breakpoints: {
  768: {
      slidesPerView: 3,
      spaceBetween: 36
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

// ==============================
// トップへ戻るボタン
// ==============================
const fixedButtons = document.querySelector('.p-fixed-buttons');
const footer = document.querySelector('.l-footer');
const fv = document.querySelector('.p-fv');
const modal = document.querySelector('.modal');

function updateTopBtn() {
  // 必要な要素が揃っていない場合は処理を抜ける
  if (!fixedButtons || !footer || !fv) return;

  // モーダル表示中は最優先で非表示にする
  if (modal && modal.classList.contains('is-active')) {
    fixedButtons.classList.remove('show');
    return;
  }

  // =====================================
  // TOPボタンの表示・非表示
  // =====================================
  const fvHeight = fv.offsetHeight;

  if (window.scrollY > fvHeight) {
    fixedButtons.classList.add('show');
  } else {
    fixedButtons.classList.remove('show');
  }

  // =====================================
  // footer接近時の押し上げ処理
  // =====================================
  const footerRect = footer.getBoundingClientRect();
  const windowHeight = window.innerHeight;

  // カンプ基準余白
  const baseBottom = 0.3;

  if (footerRect.top < windowHeight) {
    const overlap = windowHeight - footerRect.top;

    fixedButtons.style.bottom = `${overlap + baseBottom}px`;
  } else {
    fixedButtons.style.bottom = `${baseBottom}px`;
  }
}

// イベントリスナー
window.addEventListener('scroll', updateTopBtn);
window.addEventListener('load', updateTopBtn);
window.addEventListener('resize', updateTopBtn);


// ==============================
// テーブル横スクロールヒント
// ==============================
const tableScroll = document.querySelector('.p-plan-table__scroll');
const tableHint = document.querySelector('.p-plan-table__hint');

if (tableScroll && tableHint) {

  const toggleHint = () => {

    // 少しでも横スクロールしたら消す
    if (tableScroll.scrollLeft > 5) {
      tableHint.classList.add('is-hidden');
    } else {
      tableHint.classList.remove('is-hidden');
    }
  };

  // 初回判定
  toggleHint();

  // スクロール時
  tableScroll.addEventListener('scroll', toggleHint);

  // リサイズ時
  window.addEventListener('resize', toggleHint);
}