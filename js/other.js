console.log("Hello World");

const pageNav = document.querySelector('.page-nav')

const mobileHero = document.createElement('img')
mobileHero.src = '../images/mobile-image-hero-1.jpg'
mobileHero.style.width = "100%"
mobileHero.style.height = "100%"
mobileHero.style.transition = 'opacity 1s'

mobileNav = document.querySelector('.mobile-nav')
bottomPart = document.querySelector('.bottom-part')

let majorNav = document.getElementById('major-navbar')
let sectionOne = document.getElementById('section-1')

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

let mobileImage1 = '../images/mobile-image-hero-1.jpg'
let mobileImage2 = '../images/mobile-image-hero-2.jpg'
let mobileImage3 = '../images/mobile-image-hero-3.jpg'

var imageArray2 = [mobileImage1, mobileImage2, mobileImage3]

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
        mobileHero.src = imageArray2[i]    
        currentElement.innerHTML = textArray[i].innerHTML
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
        mobileHero.src = imageArray2[i]    
        currentElement.innerHTML = textArray[i].innerHTML
    }
})