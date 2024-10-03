// Swiper

const windowWidth = window.innerWidth

let offset = 0
const sliderLine = document.querySelector('.services__block-content')

document.querySelector('.arrow-left').addEventListener('click', function () {
   if (windowWidth >= 425) {
      offset -= 420
      if (offset < 0) {
         offset = 840
      }
      sliderLine.style.left = -offset + 'px'
   }
   if (windowWidth < 424) {
      offset -= 360
      if (offset <= 0) {
         offset = 920
      }
      sliderLine.style.left = -offset + 'px'
   }
})
document.querySelector('.arrow-right').addEventListener('click', function () {
   if (windowWidth >= 425) {
      offset += 430
      if (offset > 860) {
         offset = 0
      }
      sliderLine.style.left = -offset + 'px'
   }
   if (windowWidth < 424) {
      offset += 430
      if (offset > 860) {
         offset = 0
      }
      sliderLine.style.left = -offset + 'px'
   }
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
