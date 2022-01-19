const mainNav = document.querySelector('.main-nav');
const mainNavBtn = mainNav.querySelector('.main-nav__toggle');
const mainNavBtnTxt = mainNavBtn.querySelector('span');

mainNav.classList.remove('main-nav--no-js');

mainNavBtn.addEventListener('click', function() {
  mainNav.classList.toggle('main-nav--closed');
  mainNav.classList.toggle('main-nav--opened');

  if (mainNav.classList.contains('main-nav--closed')) {
    mainNavBtnTxt.textContent = "Закрыть меню";
  } else {
    mainNavBtnTxt.textContent = "Открыть меню";
  }
});
