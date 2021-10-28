
AOS.init({
  // Global settings:
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
  initClassName: 'aos-init', // class applied after initialization
  animatedClassName: 'aos-animate', // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
  

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 400, // values from 0 to 3000, with step 50ms
  easing: 'linear', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});

$('.btn1').click(function(){
  $('.btn1').addClass('portfolio-page__btn_active')
  $('.btn2').removeClass('portfolio-page__btn_active')
  $('.btn3').removeClass('portfolio-page__btn_active')
  $('.portfolio-page__subtitle').text('В данном разделе собраны все интерфейсы для серверов GTA 5.')
  $('.portfolio-items__cards_gta').css('display','flex')
  $('.portfolio-items__cards_website').css('display','none')
  $('.portfolio-items__cards_design').css('display','none')
})
$('.btn2').click(function(){
  $('.btn2').addClass('portfolio-page__btn_active')
  $('.btn1').removeClass('portfolio-page__btn_active')
  $('.btn3').removeClass('portfolio-page__btn_active')
  $('.portfolio-page__subtitle').text('В данном разделе собраны все Сайты созданные нами.')
  $('.portfolio-items__cards_gta').css('display','none')
  $('.portfolio-items__cards_website').css('display','flex')
  $('.portfolio-items__cards_design').css('display','none')


})
$('.btn3').click(function(){
  $('.btn3').addClass('portfolio-page__btn_active')
  $('.btn1').removeClass('portfolio-page__btn_active')
  $('.btn2').removeClass('portfolio-page__btn_active')
  $('.portfolio-page__subtitle').text('В данном разделе собраны все Дизайны созданные нами.')
  $('.portfolio-items__cards_gta').css('display','none')
  $('.portfolio-items__cards_website').css('display','none')
  $('.portfolio-items__cards_design').css('display','flex')

})


$('.indigo').click(function(){
  window.open('https://www.behance.net/gallery/128852193/Indigo-RP')
})
$('#expressDes').click(function(){
  window.open('https://www.behance.net/gallery/129598291/inventar-statistika-personazha')
})
$('.inventory').click(function(){
  window.open('https://www.behance.net/gallery/129598291/inventar-statistika-personazha')
})
$('.express').click(function(){
  window.open('https://www.behance.net/gallery/129598377/sajt-Express')
})
$('.globalT').click(function(){
  window.open('https://www.behance.net/gallery/123493323/lending-sajt-na-temu-puteshestvij')
})