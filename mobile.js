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
const closeBtn = document.querySelector('.close-btn');
const openModal = document.querySelectorAll('.proj-btn');
const modal = document.querySelector('.work-modal-cont');
const bod = document.querySelector('.body');
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

window.addEventListener('DOMContentLoaded', () => {
  modal.innerHTML = ` <div class="work-modal">
    <div class="modal-header">
        <h2 class="modal-title">${projectInfo.title}</h2>
        <button class="close-modal"><i class="fa fa-times"></i></button>
    </div>
    <div class="modal-content">
        <img src=${projectInfo.image} alt="modal-img" class="modal-img">
        <div class="modal-desc">
            <p>${projectInfo.description}</p>
            <ul class="tag">
                <li class="list1">${projectInfo.tech1}</li>
                <li class="list2">${projectInfo.tech2}</li>
                <li class="list3 tope3">${projectInfo.tech3}</li>
                <li class="list4">${projectInfo.tech4}</li>
            </ul>
            <div class="modal-btn">
                <button class="modal-btn1">
                    <p>see live</p>
                    <img src="icons/modal-social.png" alt="modal-social">
                </button>
                <button class="modal-btn2">
                    <p>see source</p>
                    <img src="icons/modal-social1.png" alt="modal-social">
                </button>

            </div>

        </div>
    </div>
</div>`;
  const closeModal = document.querySelector('.close-modal');
  closeModal.addEventListener('click', () => {
    modal.classList.remove('show-modal');
    bod.classList.remove('isfixed');
  });
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

openModal.forEach((project) => {
  project.addEventListener('click', () => {
    modal.classList.add('show-modal');
    bod.classList.add('isfixed');
  });
});
