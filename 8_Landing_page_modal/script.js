const singupModal = document.querySelector('.signup-form-wrapper');
const loginModal  = document.querySelector('.login-form-wrapper');

const singupBtn= document.querySelector('.singup-btn');
const loginBtn = document.querySelector('.login-btn');

const singupX = document.querySelector('.signup-x');
const loginX = document.querySelector('.login-x');

const formContainer = document.querySelector('.form-container');

singupBtn.addEventListener('click', () => {
    singupModal.classList.add('display');
    formContainer.classList.add('disable');
});

loginBtn.addEventListener('click', () => {
    loginModal.classList.add('display');
    formContainer.classList.add('disable');
});

singupX.addEventListener('click', () => {
    singupModal.classList.remove('display');
    formContainer.classList.remove('disable');
});

loginX.addEventListener('click', () => {
    loginModal.classList.remove('display');
    formContainer.classList.remove('disable');
});