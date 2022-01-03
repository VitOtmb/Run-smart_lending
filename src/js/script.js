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

            // Валидация формы
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

            // Маска телефона
   $('input[name=phone]').mask("+7 (999) 999-99-99");

            // Отправка данных
   $('form').submit(function(e) {
      e.preventDefault();
      if(!$(this).valid()) {
         return;
      }
      $.ajax({
         type: "POST",
         url: "mailer/smart.php",
         data: $(this).serialize()
      }).done(function() {
         $(this).find("input").val('');
         $('#consultation, #order').fadeOut();
         $('.overlay, #thanks').fadeIn('slow');

         $('form').trigger('reset');
      });
      return false;
   });

            // PageUp
   $(window).scroll(function() {
      if($(this).scrollTop() > 1600) {
         $('.pageup').fadeIn();
      } else {
         $('.pageup').fadeOut();
      }
   });

   $(".pageup").on('click', function(e) {
      if (this.hash !== "") {
         e.preventDefault();
         const hash = this.hash;
      $('html, body').animate( {
            scrollTop: $(hash).offset().top
         }, 800, function() {
            window.location.hash = hash;
         });
      }
   });

})(jQuery);
