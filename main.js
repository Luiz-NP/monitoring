function onScroll() {
  if (scrollY > 0) {
    navigation.classList.add('scroll')
  } else {
    navigation.classList.remove('scroll')
  }
}
<<<<<<< HEAD

function openMenu() {
  document.body.classList.add('menu-expanded')
}

function closeMenu() {
  document.body.classList.remove('menu-expanded')
}

ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700
}).reveal(`
  #home,
  #home img,
  #home .stats, 
  #services,
  #services header,
  #services header,
  #services .card,
  #about,
  #about header,
  #about p,
  #about img`)
=======
>>>>>>> a0f18d2163170163a48482bbe145a1bebbbd0175
