const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnlogin');
const btnPopup2 = document.querySelector('.btnHome');
const iconClose = document.querySelector('.icon-close');


registerLink.addEventListener('click', () => {
    wrapper.classList.add('active');
});
loginLink.addEventListener('click', () => {
    wrapper.classList.remove('active');
});
btnPopup.addEventListener('click', () => {
    wrapper.classList.add('active-popup');
});
btnPopup2.addEventListener('click', () => {
    wrapper.classList.add('active-popup');
});
iconClose.addEventListener('click', () => {
    wrapper.classList.remove('active-popup');
});
