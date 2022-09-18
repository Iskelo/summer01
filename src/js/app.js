import * as iskFunction from './modules/functions.js';

iskFunction.isWebp();

import Swiper, { Nawigation, Pagination } from 'swiper';

const swiper = new Swiper();

//"use strict";
function burgerMenu() {
	const menu = document.querySelector('.header__menu');
	const burger = document.querySelector('.header__burger');
	const b = document.querySelector('body');
	burger.addEventListener('click', () => {
		burger.classList.toggle('active');
		menu.classList.toggle('active');
		b.classList.toggle('lock');
	})
}
burgerMenu();