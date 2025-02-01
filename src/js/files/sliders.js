/*
Документація по роботі у шаблоні: 
Документація слайдера: https://swiperjs.com/
Сніппет(HTML): swiper
*/

// Підключаємо слайдер Swiper з node_modules
// При необхідності підключаємо додаткові модулі слайдера, вказуючи їх у {} через кому
// Приклад: { Navigation, Autoplay }
import Swiper from 'swiper';
import { Navigation, Autoplay, EffectFade, Lazy } from 'swiper/modules';
/*
Основні модулі слайдера:
Navigation, Pagination, Autoplay, 
EffectFade, Lazy, Manipulation
Детальніше дивись https://swiperjs.com/
*/

// Стилі Swiper
// Базові стилі
//import "../../scss/base/swiper.scss";
// Повний набір стилів з scss/libs/swiper.scss
import "../../scss/libs/swiper.scss";
// Повний набір стилів з node_modules
// import 'swiper/css';

// Ініціалізація слайдерів
function initSliders() {
   // Список слайдерів
   // Перевіряємо, чи є слайдер на сторінці
   if (document.querySelector('.swiper')) { // Вказуємо склас потрібного слайдера
      // Створюємо слайдер
      new Swiper('.swiper', { // Вказуємо склас потрібного слайдера
         // Підключаємо модулі слайдера
         // для конкретного випадку
         modules: [Navigation, Autoplay],


         loop: true,
         autoplay: {
            delay: 3000,
         },

         slidesPerView: 1,

         effect: 'fade',
         fadeEffect: {
            crossFade: true
         },
         // Брейкпоінти
         breakpoints: {
            640: {
               slidesPerView: 1,
               spaceBetween: 0,
               autoHeight: true,
            },
            768: {
               slidesPerView: 1,
               spaceBetween: 20,
            },
            992: {
               slidesPerView: 1,
               spaceBetween: 20,
            },
            1268: {
               slidesPerView: 1,
               spaceBetween: 30,
            },
         },


      });
   }

   if (document.querySelector('.swiper-articles')) { // Вказуємо склас потрібного слайдера
      // Створюємо слайдер
      new Swiper('.swiper-articles', { // Вказуємо склас потрібного слайдера
         // Підключаємо модулі слайдера
         // для конкретного випадку
         modules: [Navigation, Autoplay],


         loop: true,
         autoplay: {
            delay: 5000,
         },

         slidesPerView: 3,



         navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
         },
         // Брейкпоінти
         breakpoints: {
            320: {
               slidesPerView: 1,
               spaceBetween: 0,
               autoHeight: true,
            },
            768: {
               slidesPerView: 2,
               spaceBetween: 20,
            },
            992: {
               slidesPerView: 2,
               spaceBetween: 20,
            },
            1268: {
               slidesPerView: 3,
               spaceBetween: 50,
            },
         },


      });
   }
   if (document.querySelector('.swiper-team')) { // Вказуємо склас потрібного слайдера
      // Створюємо слайдер
      new Swiper('.swiper-team', { // Вказуємо склас потрібного слайдера
         // Підключаємо модулі слайдера
         // для конкретного випадку
         modules: [Navigation, Autoplay],


         loop: true,
         autoplay: {
            delay: 3000,
         },

         slidesPerView: 4,
         spaceBetween: 40,


         // Брейкпоінти
         breakpoints: {
            320: {
               slidesPerView: 1,
               spaceBetween: 0,
               autoHeight: true,
            },
            768: {
               slidesPerView: 2,
               spaceBetween: 20,
            },
            992: {
               slidesPerView: 2,
               spaceBetween: 20,
            },
            1268: {
               slidesPerView: 3,
               spaceBetween: 30,
            },
         },


      });
   }
}


// Скролл на базі слайдера (за класом swiper scroll для оболонки слайдера)
function initSlidersScroll() {
   let sliderScrollItems = document.querySelectorAll('.swiper_scroll');
   if (sliderScrollItems.length > 0) {
      for (let index = 0; index < sliderScrollItems.length; index++) {
         const sliderScrollItem = sliderScrollItems[index];
         const sliderScrollBar = sliderScrollItem.querySelector('.swiper-scrollbar');
         const sliderScroll = new Swiper(sliderScrollItem, {
            observer: true,
            observeParents: true,
            direction: 'vertical',
            slidesPerView: 'auto',
            freeMode: {
               enabled: true,
            },
            scrollbar: {
               el: sliderScrollBar,
               draggable: true,
               snapOnRelease: false
            },
            mousewheel: {
               releaseOnEdges: true,
            },
         });
         sliderScroll.scrollbar.updateSize();
      }
   }
}

window.addEventListener("load", function (e) {
   // Запуск ініціалізації слайдерів
   initSliders();
   // Запуск ініціалізації скролла на базі слайдера (за класом swiper_scroll)
   //initSlidersScroll();
});