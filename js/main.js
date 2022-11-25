'use strict';

// navbar buttons variables
const hamburguer = document.querySelector('#open-btn');
const closeBtn = document.querySelector('.close-btn');


// navbar Variables
const navBar = document.querySelector('.navbar-nav');

// navbar toggle function
const navBarToggle = () => navBar.classList.toggle('active');

// added toggle function on navbar buttons
hamburguer.addEventListener('click', navBarToggle);
closeBtn.addEventListener('click', navBarToggle);