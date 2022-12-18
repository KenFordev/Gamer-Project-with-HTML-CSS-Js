const hamburgerMenu = document.getElementById('ham__js')
const navMenuOn = document.getElementById('nav__menu-on')

    hamburgerMenu.addEventListener('click', () => {
        hamburgerMenu.classList.toggle("change")
        navMenuOn.classList.toggle("open__nav")
    })

// ============================= Menu Start =====================
const menuItem = document.querySelectorAll('.menu-item');

for(let i = 0; i < menuItem.length; i++) {
    menuItem[i].addEventListener('click', () => {
        const active = document.querySelector('.active-menu')
        if(active) {
            active.classList.remove('active-menu')
        }
        menuItem[i].classList.add('active-menu')
    })
}





// ============================= Menu End =====================

// ============================= img LightBoxs =====================

let boxindex = 1;

function showboxs(n) {
    myslides = document.getElementsByClassName('myslides');
    demo = document.getElementsByClassName('demo');
    if (boxindex > myslides.length) {
        boxindex = 1;
    }
    if (boxindex < 1) {
        boxindex = myslides.length;
    }
    for (i = 0; i < myslides.length; i++) {
        myslides[i] = myslides[i].style.display = 'none'
    }
    for (i = 0; i < demo.length; i++) {
        demo[i].className = demo[i].className.replace(" active","");
    }
    myslides[boxindex-1].style.display = 'block'
    demo[boxindex-1].className += " active"
}
showboxs(boxindex)

function controlButton (n) {
    showboxs(boxindex += n)
}
function currentbox(n) {
    showboxs(boxindex = n)
}
function closeModal() {
    document.getElementById('mymodal').style.display = 'none'
}
function openModal() {
    document.getElementById('mymodal').style.display = 'block'
}

// =============================== img spiderMan ======================================
let mymodal = document.getElementById('mymodal__spider');

let myImage = document.getElementById('myImg__spider');
let spider01 = document.getElementById('spider01');
let captionText = document.getElementById('caption');

myImage.onclick = function () {
    mymodal.style.display = 'block'
    spider01.src = this.src
    captionText.innerHTML = this.alt    
}

let span = document.getElementsByClassName('close__spider')[0];
span.onclick = function () {
    mymodal.style.display = 'none'
}
// =============================== img spiderMan END ======================================

