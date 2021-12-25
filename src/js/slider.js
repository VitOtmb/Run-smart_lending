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
