// Swiper

new Swiper('.swiper-services', {
   slidesPerView: 3,
   spaceBetween: 60,
   loop: true,
   breakpoints: {
      400: {
         slidesPerView: 1,
      },
      1240: {
         slidesPerView: 3,
      },
   },

   navigation: {
      nextEl: '.custom-next',
      prevEl: '.custom-prev',
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

// Скрытые блоги

let showButton = document.querySelector('.blog__btn')
let blog = document.querySelector('.hiddenBlog')

showButton.addEventListener('click', () => {
   if (showButton) {
      blog.classList.add('showBlog')
      showButton.classList.add('hiddenBlog')
   }
})
