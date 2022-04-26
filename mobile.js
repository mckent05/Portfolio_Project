const projectInfo = [
  {
    title: 'E-commerce Web App',
    image: 'icons/pdp.PNG',
    description: 'Are you looking for an affordable site to buy some of your most needed products all in one place? Then this is the app you have been looking for. This web allows users shop for thier most needed items at affordable price. Why not patronize us today. I am sure rial will convince you.',
    tech1: 'Javascript',
    tech2: 'GraphQL',
    tech3: 'React',
    tech4: 'Redux',
    live: 'https://scandi-store.netlify.app/',
    source: 'https://github.com/mckent05/scandiweb-refix',
  },
  {
    title: 'Somarven Arena',
    image: 'icons/somarven2.png',
    description: 'Are you looking to make an arena reservation for your upcoming event? Do you have an arena you will like to put up for lease?. If yes, this web-app is tailor made for you!!. Somarven arenas is a simple web-app that allows registered users book or make reservations for an arena, it also allows users add arenas they will like to lease out. Users can cancel reservations and do much more. Why not sign-up and check-out the cool features of this application. Its definitely worth the try!!',
    tech1: 'React',
    tech2: 'Javascript',
    tech3: 'Rails',
    tech4: 'PostgreSQL',
    live: 'https://somarven.netlify.app/',
    source: 'https://github.com/Somdotta07/Somarven-Arenas-frontend',
  },
  {
    title: 'Maintenance Budget App',
    image: 'icons/budget1.PNG',
    description: 'Have you been looking for an application that canhelpyou keep track of all your equipments maintenance and repair costs? then try this app out!. This application isa simple and fun web app that lets users keep track of their equiment maintenance and repair cost.A User must be signed up in order to use this application.',
    tech1: 'Ruby',
    tech2: 'PostgreSql',
    tech3: 'RoR',
    tech4: 'HTML',
    live: 'https://polar-lake-28978.herokuapp.com/',
    source: 'https://github.com/mckent05/maintenance_budget',
  },
  {
    title: 'steve football app',
    image: 'icons/home2.PNG',
    description: 'A Web app for football lovers. This app consumes data froman API and displays league standings for top leahues around the world. I built this app using React-Redux. I further strengthened my knowledge about React-Redux while building this app. Do you want to check the league standings for your favorite clubs? Then this is the app to do just that',
    tech1: 'html',
    tech2: 'css',
    tech3: 'Javascript',
    tech4: 'React',
    live: 'https://steven-football-app.herokuapp.com/',
    source: 'https://github.com/mckent05/my-football-app.git',
  },

];

const btn = document.querySelector('.icon img');
const overlay = document.querySelector('.wrapper');
const clos = document.querySelector('.close-btn');
const openModal = document.querySelectorAll('.proj-btn');
const modal = document.querySelector('.work-modal-cont');
const bod = document.querySelector('.body');
const email = document.getElementById('email');
const errorMessage = document.querySelector('.error-msg');
const form = document.querySelector('.form');
const myname = document.getElementById('input');
const message = document.getElementById('message');
let currentView = 0;

function getLocalStorage() {
  return JSON.parse(localStorage.getItem('formDetails'));
}

const addToLocalStorage = (myName, myMail, myMessage) => {
  const formDetails = { myName, myMail, myMessage };
  localStorage.setItem('formDetails', JSON.stringify(formDetails));
};

form.addEventListener('input', () => {
  const formInfo = {
    formName: myname.value,
    formMail: email.value,
    formMessage: message.value,
  };
  addToLocalStorage(formInfo.formName, formInfo.formMail, formInfo.formMessage);
});

function isUpper(email) {
  const str = email.value.toLowerCase();
  return email.value === str;
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
    errorMessage.innerHTML = '*Please Enter an email address';
    errorMessage.classList.add('show-error');
  }
  if (!isUpper(email)) {
    errorMessage.innerHTML = '* Please Enter E-mail in small letters';
    errorMessage.classList.add('show-error');
    setTimeout(() => {
      errorMessage.innerHTML = '';
      errorMessage.classList.remove('show-error');
    }, 6000);
  }
}

form.addEventListener('submit', (e) => {
  if (!email.validity.valid) {
    showError();
    e.preventDefault();
  }
  if (!isUpper(email)) {
    showError();
    e.preventDefault();
  }
});

const loadProject = (view) => {
  modal.innerHTML = `<div class="work-modal">
    <div class="modal-header">
        <h2 class="modal-title">${projectInfo[view].title}</h2>
        <button class="close-modal"><i class="fa fa-times"></i></button>
    </div>
    <div class="modal-content">
        <img src=${projectInfo[view].image} alt="modal-img" class="modal-img">
        <div class="modal-desc">
            <p>${projectInfo[view].description}</p>
            <ul class="tag">
                <li class="list1">${projectInfo[view].tech1}</li>
                <li class="list2">${projectInfo[view].tech2}</li>
                <li class="list3 tope3">${projectInfo[view].tech3}</li>
                <li class="list4">${projectInfo[view].tech4}</li>
            </ul>
            <div class="modal-btn">
                <a href= "${projectInfo[view].live}" target="_blank" class="modal-btn1">
                    <p>see live</p>
                    <img src="icons/modal-social.png" alt="modal-social">
                </a>
                <a href= "${projectInfo[view].source}" target="_blank" class="modal-btn2">
                    <p>see source</p>
                    <img src="icons/modal-social1.png" alt="modal-social">
                </a>
                
            </div>
            <div class="project-control">
              <button class="move-left">previous project</button>
              <button class="move-right">next project</button>
            </div>
        </div>
    </div>
</div>`;
  const closeModal = document.querySelector('.close-modal');
  const prevProject = document.querySelector('.move-left');
  const nextProject = document.querySelector('.move-right');
  closeModal.addEventListener('click', () => {
    modal.classList.remove('show-modal');
    bod.classList.remove('isfixed');
  });
  prevProject.addEventListener('click', () => {
    currentView -= 1;
    if (currentView < 0) {
      currentView = projectInfo.length - 1;
    }
    loadProject(currentView);
  });
  nextProject.addEventListener('click', () => {
    currentView += 1;
    if (currentView > projectInfo.length - 1) {
      currentView = 0;
    }
    loadProject(currentView);
  });
};

window.addEventListener('DOMContentLoaded', () => {
  openModal.forEach((project, index) => {
    project.addEventListener('click', () => {
      currentView = index;
      loadProject(currentView);
      modal.classList.add('show-modal');
      bod.classList.add('isfixed');
    });
  });
  const fdetails = getLocalStorage();
  myname.value = fdetails.myName;
  email.value = fdetails.myMail;
  message.value = fdetails.myMessage;
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
