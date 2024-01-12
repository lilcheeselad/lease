const tabItem = document.querySelectorAll('.choose__tabs-btn_item');
const tabContent = document.querySelectorAll('.choose__tabs-content_item');

tabItem.forEach(function(element){
  element.addEventListener('click', open);
})

function open(evt) {
  const tabTarget = evt.currentTarget;
  const button = tabTarget.dataset.button;
  tabItem.forEach(function(item) {
    item.classList.remove('choose__tabs-btn_item--active');
  });

  tabTarget.classList.add('choose__tabs-btn_item--active');

  tabContent.forEach(function(item){
    item.classList.remove('choose__tabs-content_item--active')
  });
  document.querySelector(`#${button}`).classList.add('choose__tabs-content_item--active');
}

const menuBtn = document.querySelector('.menu__btn');
const menu = document.querySelector('.menu__list');

menuBtn.addEventListener('click', () => {
  menu.classList.toggle('menu__list--active');
});



const swiper = new Swiper(".swiper", {
  pagination: {
    el: ".swiper-pagination",
  },
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  effect: "fade",
});