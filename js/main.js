console.log("Hello World");

const mobileHero = document.createElement('div')
mobileHero.style.backgroundImage = 'URL(../images/mobile-image-hero-1.jpg)'
mobileHero.style.width = "100%"
let mbImage = 'URL(../images/mobile-image-hero-1.jpg)'
let mbImage2 = 'URL(../images/mobile-image-hero-2.jpg)'
let mbImage3 = 'URL(../images/mobile-image-hero-3.jpg)'

let mbArray = [mbImage, mbImage2, mbImage3]

mobileHero.style.height = "22.5rem" //calcualted and converted from the size of the size of the actual picture in px to rem unit 
mobileHero.style.transition = 'all 1s'

mobileNav = document.querySelector('.mobile-nav')
bottomPart = document.querySelector('.bottom-part')

let majorNav = document.getElementById('major-navbar')
let sectionOne = document.getElementById('section-1')

const pageNav = document.querySelector('.page-nav')
const bottomImage = document.querySelectorAll('.bt-image')

//query for larger width phones
const matchBigPhone = window.matchMedia('(max-width: 440px)')

//query for regular/smaller phones
const matchPhone = window.matchMedia('(max-width: 375px)')
if (matchPhone.matches) {
    
    majorNav.style.background = 'none'
    majorNav.appendChild(mobileHero)
    sectionOne.removeChild(pageNav)
    majorNav.appendChild(pageNav)
    console.log(pageNav.parentElement)
    pageNav.style.position = 'absolute'
    pageNav.style.bottom = '0'
    pageNav.style.right = '0'
    pageNav.style.alignItems = 'flex-end'
}

hamburger = document.getElementById('hamburger')
hamburger.addEventListener('click', openNav = (e) => {
    document.querySelector('.mobille').style.width = '100%'
})

closeIcon = document.getElementById('icon-close')
closeIcon.addEventListener('click', close = (e) => {
    e.preventDefault()
    document.querySelector('.mobille').style.width = '0'
})

//NAVIGATING THROUGH THE PAGES(IMAGES)

console.log(sectionOne.children.length)
var currentElement = sectionOne.children[0]

var i = 0;

let deskImage1 = 'URL(../images/desktop-image-hero-1.jpg)'
let deskImage2 = 'URL(../images/desktop-image-hero-2.jpg)'
let deskImage3 = 'URL(../images/desktop-image-hero-3.jpg)'

var imageArray = [deskImage1, deskImage2, deskImage3]

let info1 = document.getElementById('info-1')
let info2 = document.getElementById('info-2')
let info3 = document.getElementById('info-3')

var textArray = [info1, info2, info3]

pageNav.firstElementChild.addEventListener('click', previous = (e) => {
    
    if (i < textArray.length && i>0) {
        if (i==1) {
            currentElement.innerHTML = thisElement
        }
        i--
        majorNav.style.backgroundImage = imageArray[i]    
        mobileHero.style.backgroundImage = mbArray[i]
        currentElement.innerHTML = textArray[i].innerHTML
    }
    if (matchBigPhone.matches) {
        majorNav.style.backgroundImage = mbArray[i]
    }
})

pageNav.children[1].addEventListener('click', next = (e) => {

    document.querySelector('#major-navbar img').classList.toggle('display')

    if (i==0) {
        thisElement = currentElement.innerHTML
    }
    
    if (i<2) {
        i++
        majorNav.style.backgroundImage = imageArray[i]
        mobileHero.style.backgroundImage = mbArray[i]
        currentElement.innerHTML = textArray[i].innerHTML
    }
    if (matchBigPhone.matches) {
        majorNav.style.backgroundImage = mbArray[i]
    }
})