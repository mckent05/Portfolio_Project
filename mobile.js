const projectInfo = [
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
  {
    title: 'Space Travelers hub',
    image: 'icons/dragons.png',
    description: 'Do you have a childhood dream of travelling to space? Ever wondered how being in space might be? Are you in search for a website to book a rocket to make your dreams come true? Then this is the site for you. This is a web app that lets users book rockets to take them to space. A SPA that lets you book a rocket, dragon or join a mission. This is a group project, and i was responsible for building the rockets page and my rockets section in my profile page. In this project i learnt how to connect React to redux',
    tech1: 'html',
    tech2: 'css',
    tech3: 'React',
    tech4: 'Redux',
    live: 'https://steve-rockets-hub.netlify.app/',
    source: 'https://github.com/mckent05/space-travelers-hub.git',
  },
  {
    title: 'Book Store CMS',
    image: 'icons/bookstore.PNG',
    description: 'Are you a lover of books? Do you have probelems keeping track of your progress while reading a book? If yes, then I have built this app for you. This is a book store app that helps book lovers keep track of their progress while reading a book, this app lets you add a new book to your list of books, allows users enter details about a current book. It lets users delete a book upon completion and also gives progress made ona particular book. While buildig this project I learnt how to use Redux to consume data from an API. This app was built using React-Redux',
    tech1: 'html',
    tech2: 'css',
    tech3: 'Javascript',
    tech4: 'React',
    live: 'https://mckent05.github.io/bookstore_react/',
    source: 'https://github.com/mckent05/bookstore_react.git',
  },
  {
    title: 'ToDo App',
    image: 'icons/todo2.PNG',
    description: 'Everyone at one point or the other has struggled with productivity or organazing their daily tasks. this is a to-do list app that helps you increase your productivity. A web app that allows users plan their daily tasks. Users can enter a new task, edit task, delete a task and mark a task upon completion.while building this app I learnt how to use react as a front end library while building repsonsive web apps.',
    tech1: 'html',
    tech2: 'css',
    tech3: 'Ruby on Rails',
    tech4: 'Ruby',
    live: 'https://mckent05.github.io/to-do-React/',
    source: 'https://github.com/mckent05/to-do-React.git',
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
