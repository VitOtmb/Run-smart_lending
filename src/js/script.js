         // Slider
let slider = tns({
   container: '.karousel__slider',
   items: 1,
   slideBy: 'page',
   autoplay: false,
   nav: true,
   navPosition: 'bottom',
   controls: false
   });

document.querySelector('.prev').addEventListener('click',function () {
   slider.goTo('prev');
});
document.querySelector('.next').addEventListener('click',function () {
   slider.goTo('next');
});

         // Tabs
(function($) {
   $(function() {
      $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
         $(this)
         .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
         .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
      });
      
      function toggeMeaning(item) {
         $(item).each(function(i) {
            $(this).on('click', function(e) {
               e.preventDefault ();
               $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
               $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
            });
         });
      }
   
      toggeMeaning('.catalog-item__link');
      toggeMeaning('.catalog-item__link-back');
      });
   
            // Modal
      $('[data-modal = consultation]').on('click', function() {
         $('.overlay, #consultation').fadeIn('slow');
      });
   
      $('.modal__close').on('click', function() {
         $('.overlay, #consultation, #order, #thanks').fadeOut('slow');
      });
   
   
      $('.button_mini').each(function(i) {
         $(this).on('click', function() {
            $('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text());
            $('.overlay, #order').fadeIn('slow');
         });
      });

})(jQuery);

function validateForms (form) {
   $(form).validate({
      rules: {
         name: {
            required: true,
            minlength: 2
         },
         phone: 'required',
         email: 'required'
      },
      messages: {
         name: {
            required: "Пожалуйста, введите Ваше имя",
            minlength: jQuery.validator.format("Введите, как мимнимум, {0} символа!")
         },
         phone: "Введите корректный номер телефона",
         email: {
            required: "Нам нужен адрес почты для контакта с Вами",
            email: "Ваш email должен быть в формате name@domain.com"
         }
      }
   });
}

validateForms('#consultation-form');
validateForms('#consultation form');
validateForms('#order form');


$('input[name=phone]').mask("+7 (999) 999-99-99");