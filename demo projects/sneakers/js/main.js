const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')


if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}

const navLink = document.querySelectorAll('.nav-link')
const linkAction = () => {
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))


// swiper
let swiperImages = new Swiper('.home-swiper', {

    loop: true,
    spaceBetween: 64,
    grabCursor: true,
    centeredSlides: true,

    pagination: {
        el: '.swiper-pagination',
        type: 'fraction'
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

})

let swiperTitles = new Swiper('.home-titles', {

    loop: true,
    spaceBetween: 64,
    grabCursor: true,
    centeredSlides: true,
})

swiperImages.controller.control = swiperTitles
swiperTitles.controller.control = swiperImages


//   change bg header

const bgHeader = () => {
    const header = document.getElementById('header')
    this.scrollY >=50 ? header.classList.add('bg-header')
    : header.classList.remove('bg-header')
}