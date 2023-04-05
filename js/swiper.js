import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.esm.browser.min.js';

const swiper = new Swiper('.swiper', {
	// Navigation arrows
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},

	breakpoints: {
		320: {
			slidesPerView: 2.2,
			spaceBetween: 20,
		},
		768: {
			slidesPerView: 4,
			spaceBetween: 16,
		},
	},
});
