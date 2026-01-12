// Stap 1: selecteer elementen
  let menuButton = document.querySelector('.fab-menu');
  let mobileMenu = document.querySelector('.menu-overlay');

  // Stap 2: luister naar klik
  menuButton.addEventListener('click', function () {

    // Stap 3: toggle menu
    mobileMenu.classList.toggle('is-open');
  });