
//card 1
const card = document.querySelector('.card');
const imageZoom = document.querySelector('.image-zoom');
const blocContent = document.querySelector('.bloc-content-show');
const title = document.querySelector('.bloc-content-show h2');
const dowloadLogo = document.querySelector('.bloc-content-show img');
const allTxt = document.querySelectorAll('.bloc-content-show p');
const separation = document.querySelector('.bloc-content-show hr')

const TLANIM = gsap.timeline({paused: true});


TLANIM
.fromTo(imageZoom, {scale: 1}, {scale: 2, y:-50, x:200, duration: 0.4, ease:ExpoScaleEase.config(1,2, 'power2.inOut')})
.to(blocContent, {bottom: 200, duration: 0.2}, '-=0.1')
.from(title, {opacity:0, duration: 0.2}, '-=0.1')
.from(separation, {width:0, duration: 0.2}, '-=0.2')
.from(dowloadLogo, {scaleY:0.2, duration: 0.2})

.from(allTxt, {opacity: 0, duration:0.3, stagger: 0.2})

card.addEventListener('mouseenter', () => {
    TLANIM.play();
})

card.addEventListener('mouseleave', () => {
    TLANIM.reverse();
})

//card2

const card2 = document.querySelector('.card2');
const imageZoom2 = document.querySelector('.image-zoom2');
const blocContent2 = document.querySelector('.bloc-content-show2');
const title2 = document.querySelector('.bloc-content-show2 h2');
const allTxt2 = document.querySelectorAll('.bloc-content-show2 p');
const separation2 = document.querySelector('.bloc-content-show2 hr')

const TLANIM2 = gsap.timeline({paused: true});


TLANIM2
.fromTo(imageZoom2, {scale: 1}, {scale: 2, y:-50, x:200, duration: 0.4, ease:ExpoScaleEase.config(1,2, 'power2.inOut')})
.to(blocContent2, {bottom: 200, duration: 0.2}, '-=0.1')
.from(title2, {opacity:0, duration: 0.2}, '-=0.1')
.from(separation2, {width:0, duration: 0.2}, '-=0.2')

.from(allTxt2, {opacity: 0, duration:0.3, stagger: 0.2})

card2.addEventListener('mouseenter', () => {
    TLANIM2.play();
})

card2.addEventListener('mouseleave', () => {
    TLANIM2.reverse();
})

//card3

const card3 = document.querySelector('.card3');
const imageZoom3 = document.querySelector('.image-zoom3');
const blocContent3 = document.querySelector('.bloc-content-show3');
const title3 = document.querySelector('.bloc-content-show3 h2');
const allTxt3 = document.querySelectorAll('.bloc-content-show3 p');
const separation3 = document.querySelector('.bloc-content-show3 hr')

const TLANIM3 = gsap.timeline({paused: true});


TLANIM3
.fromTo(imageZoom3, {scale: 1}, {scale: 2, y:-50, x:200, duration: 0.4, ease:ExpoScaleEase.config(1,2, 'power2.inOut')})
.to(blocContent3, {bottom: 200, duration: 0.2}, '-=0.1')
.from(title3, {opacity:0, duration: 0.2}, '-=0.1')
.from(separation3, {width:0, duration: 0.2}, '-=0.2')

.from(allTxt3, {opacity: 0, duration:0.3, stagger: 0.2})

card3.addEventListener('mouseenter', () => {
    TLANIM3.play();
})

card3.addEventListener('mouseleave', () => {
    TLANIM3.reverse();
})
