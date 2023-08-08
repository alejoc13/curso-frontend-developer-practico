const menuEmail = document.querySelector(".navbar-email")
const desktopMenu = document.querySelector('.desktop-menu')

const menuLogo = document.querySelector('.menu')
const mobileMenu = document.querySelector('.mobile-menu')


menuEmail.addEventListener('click',toggleDesktop)
menuLogo.addEventListener('click',toggleMobile)

function toggleDesktop() {
    
    desktopMenu.classList.toggle('inactive')

}

function toggleMobile() {
    console.log('click')
    mobileMenu.classList.toggle('inactive')

}