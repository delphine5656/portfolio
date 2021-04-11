const card = document.querySelector('.card');
const card2 = document.querySelector('.card2');
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

