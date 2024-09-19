// Swiper

new Swiper('.swiper', {
   slidesPerView: 3,
   spaceBetween: 60,
   loop: true,

   navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
   },
})

// Бургер меню

let burgerLine = document.querySelector('.burger__line')
let burgerList = document.querySelector('.icon-menu')

burgerLine.addEventListener('click', () => {
   if (burgerLine) {
      document.body.classList.toggle('__lock')
      burgerLine.classList.toggle('active')
      burgerList.classList.toggle('active')
   }
})

// Input file
$('.input-file input[type=file]').on('change', function () {
   let file = this.files[0]
   $(this).closest('.input-file').find('.input-file-text').html(file.name)
})
