const projectInfo = {
  title: 'multi-post story',
  image: 'icons/portfolio.png',
  description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scramble',
  tech1: 'html',
  tech2: 'css',
  tech3: 'Ruby on Rails',
  tech4: 'Ruby',
};

const btn = document.querySelector('.icon img');
const overlay = document.querySelector('.wrapper');
const clos = document.querySelector('.close-btn');
// const openModal = document.querySelectorAll('.proj-btn');
// const modal = document.querySelector('.work-modal-cont');
// const bod = document.querySelector('.body');
const email = document.getElementById('email');
const errorMessage = document.querySelector('.error-msg');
const form = document.querySelector('.form');

function isUpper(email) {
  const str = email.value;
  return !/[a-z]/.test(str) && /[A-Z]/.test(str);
}

function showError() {
  if (email.validity.typeMismatch) {
    errorMessage.innerHTML = '*Please Enter Valid email';
    errorMessage.classList.add('show-error');
    setTimeout(() => {
      errorMessage.innerHTML = '';
      errorMessage.classList.remove('show-error');
    }, 2000);
  }
  if (email.validity.valueMissing) {
    errorMessage.innerHTML = '*Please Enter E-mail Address';
    errorMessage.classList.add('show-error');
  }
  if (isUpper(email)) {
    errorMessage.innerHTML = '* Your email should be small letters';
    errorMessage.classList.add('show-error');
  }
}

form.addEventListener('submit', (e) => {
  if (!email.validity.valid) {
    showError();
    e.preventDefault();
  }
  if (isUpper(email)) {
    showError();
    e.preventDefault();
  }
});

btn.addEventListener('click', () => {
  overlay.classList.add('show-nav');
});
clos.addEventListener('click', () => {
  overlay.classList.remove('show-nav');
});

window.addEventListener('scroll', () => {
  const scroll = this.pageYOffset;
  if (scroll > 50) {
    overlay.classList.remove('show-nav');
  }
});

