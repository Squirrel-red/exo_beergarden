const navMenu = document.getElementById('nav-menu'),
navLogo = document.getElementById('nav-logo'),
navToggle=document.getElementById('menu-burger'),
navClose= document.getElementById('nav-close')

if(navToggle){
    navToggle.addEventListener('click', () =>{navMenu.classList.add('show_menu')
                                                navClose.classList.add('close_responsive')
                                                navLogo.classList.add('show_logo')})
}

if(navClose){
    navClose.addEventListener('click', ()=> {navMenu.classList.remove('show_menu')
                                                navLogo.classList.remove('show_logo')})
}



const navLink = document.querySelectorAll('.nav_link')
const linkAction = () =>{
     const navMenu = document. getElementById('nav-menu')
     navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))




const scrollUp = () =>{
    const scrollUp = document.getElementById('scroll-up')
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                         : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)





const sections = document.querySelectorAll('section[id]')
    
const scrollActive = () =>{
  	const scrollDown = window.scrollY

	sections.forEach(current =>{
		const sectionHeight = current.offsetHeight,
			  sectionTop = current.offsetTop - 58,
			  sectionId = current.getAttribute('id'),
			  sectionsClass = document.querySelector('.nav_menu a[href*=' + sectionId + ']')

		if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
			sectionsClass.classList.add('active-link')
		}else{
			sectionsClass.classList.remove('active-link')
		}                                                    
	})
}