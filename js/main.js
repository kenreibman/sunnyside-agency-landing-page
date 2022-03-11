const hamburgerMenu = document.querySelector('#hamburgerMenu');
const mobileMenu = document.querySelector('#mobileMenu');
const arrowDown = document.querySelector('#arrowDown');
const html = document.body.parentNode;

// html.addEventListener('click', outsideClick);

// Listen for open click
// function outsideClick(e) {
//   if (mobileMenu.contains(e.target)) {
//     alert('clicked inside');
//   } else {
//     alert('clicked outside');
//   }
// }

hamburgerMenu.addEventListener('click', (b) => {
  b.preventDefault();
  mobileMenu.classList.toggle('show');
  arrowDown.classList.toggle('hide');
});
