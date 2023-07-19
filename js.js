let burger = document.querySelector('.burger__menu')
let menu = document.querySelector('.burger-m')
let li = document.querySelectorAll('.li')

burger.addEventListener('click', function() {
    burger.classList.toggle("active")
    menu.classList.toggle("burger-m2")
    menu.style.transform = 'rotate(0deg) translateY(0px) translateX(0%)'
    // burger-m2.classList.toggle("burger")
})
menu.addEventListener('click', function() {
    burger.classList.remove("active")
    menu.classList.remove("burger-m2")
    menu.style.transform = 'rotate(-90deg) translateY(0px) translateX(-300%)'
    // burger-m2.classList.remove("burger")
})




const scrollUp = () =>{
	const scrollUp = document.getElementById('scroll-up')
    // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
    
	this.scrollY >= 400 ? scrollUp.classList.add('show-scroll')
						: scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)



const scrollHeader = () => {
    const header = document.getElementById("header");
    // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
    this.scrollY >= 200
      ? header.classList.add("bg-header")
      : header.classList.remove("bg-header");
  };
  window.addEventListener("scroll", scrollHeader);




// animation scroll 

let sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
})

sr.reveal(`.one-screen__black__wrapper`)
sr.reveal(`.one-screen__black__wrapper__text`, {origin: 'left', delay: 200})
sr.reveal(`.cs, .wrp`)
sr.reveal(`.two-screen__wrapper__text`)
sr.reveal(`.two-screen__wrapper__block`,{origin: 'bottom'})
sr.reveal(`.three-screen__wrapper`, { duration: 3000})
sr.reveal(`.four-screen__wrapper__left`,{origin: 'left'})
sr.reveal(`.four-screen__wrapper__right`,{origin: 'right', distance: '40px'})
sr.reveal(`.customize__wrapper__left`)
sr.reveal(`.customize__wrapper__right`, {origin: 'bottom', duration: 3500,} )
sr.reveal(`.fortnite__items`,{distance: '40px'})
sr.reveal(`.join-screen__wrapper__tx`,{origin: 'left'})
sr.reveal(`.right__item`,{origin: 'top'})
sr.reveal(`.left__item`,{origin: 'left',duration: 4000 ,delay: 700, distance: '40px'})
sr.reveal(`.join-screen__wrapper__text`)
sr.reveal(`.footer__wrapper__top`,{ origin: 'bottom'})
sr.reveal(`.bottom`,{ origin: 'bottom', delay: 600})


