const btn = document.querySelector('.icon img');
const overlay = document.querySelector('.wrapper');
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
closeBtn.addEventListener('click', () => {
  overlay.classList.remove('show-nav');
});

window.addEventListener('scroll', () => {
  const scroll = this.pageYOffset;
  if (scroll > 50) {
    overlay.classList.remove('show-nav');
  }
});

