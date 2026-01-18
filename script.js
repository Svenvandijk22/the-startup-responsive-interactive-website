// Stap 1: selecteer elementen
  let menuButton = document.querySelector('.fab-menu');
  let mobileMenu = document.querySelector('.menu-overlay');

  // Stap 2: luister naar klik
  menuButton.addEventListener('click', function () {

    // Stap 3: toggle menu
    mobileMenu.classList.toggle('is-open');
  });



  // Stap 1: selecteer alle sections
let sections = document.querySelectorAll('section');

// Stap 2: luister naar scroll
window.addEventListener('scroll', function () {

  // Stap 3: maak sections zichtbaar
  sections.forEach(function (section) {
    if (section.getBoundingClientRect().top < window.innerHeight - 100) {
      section.classList.add('is-visible');
    }
  });

});
