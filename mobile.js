let btn=document.querySelector ('.icon img')
let overlay = document.querySelector('.wrapper')
let clos= document.querySelector('.close-btn')

btn.addEventListener('click', function () {
    overlay.classList.add ('show-nav')
})
clos.addEventListener ('click', function() {
    overlay.classList.remove ('show-nav')
})

window.addEventListener ('scroll', function () {
    let scroll=this.pageYOffset
    if (scroll > 700) {
        overlay.classList.remove('show-nav')
    }
})