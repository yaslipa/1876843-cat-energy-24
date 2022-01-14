let mainNav = document.querySelector('.main-nav');
let mainNavBtn = mainNav.querySelector('.main-nav__toggle');
let mainNavBtnTxt = mainNavBtn.querySelector('span');

mainNav.classList.remove('main-nav--no-js');
mainNav.classList.add('main-nav--js-closed');

mainNavBtn.onclick = function() {
  mainNav.classList.toggle('main-nav--js-opened');
  mainNav.classList.toggle('main-nav--js-closed');

  mainNavBtn.classList.toggle('main-nav__toggle--close');

  if (mainNavBtn.classList.contains('main-nav__toggle--close')) {
    mainNavBtnTxt.textContent = "Закрыть меню";
  } else {
    mainNavBtnTxt.textContent = "Открыть меню";
  }
}
