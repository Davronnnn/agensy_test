const elHamburgerMenu = document.querySelector('#menu');
const elMobileNav = document.querySelector('.mobile-nav');
const elExitIcon = document.querySelector('.exit-icon');

elHamburgerMenu.addEventListener('click', () => {
	elMobileNav.className = 'mobile-nav mobile-nav--active ';
});
elExitIcon.addEventListener('click', () => {
	elMobileNav.className = 'mobile-nav  ';
});
