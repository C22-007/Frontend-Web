const navbarToggler = document.querySelector('.navbar-toggler');
const mainArea = document.querySelector('main');



// const navbarAttributes = navbarToggler.getAttributeNames('class');
// const navbarAttributes = navbarToggler.getAttribute('aria-expanded');
// const navbarAttributes = navbarToggler.getAttribute('class');


let counter = 0;
navbarToggler.addEventListener('click', () => {
    // console.log(navbarAttributes);
    // console.log(navbarToggler.classList[1]);
    
    // console.log(counter++);
    
    if(counter == 1 && navbarToggler.classList[1] == undefined) {
        // console.log('buka');
        mainArea.style.marginTop = "6rem";
    }


    if(navbarToggler.classList[1] == undefined && counter != 1) {
        mainArea.style.marginTop = "6rem";
    } else if(navbarToggler.classList[1] == 'collapsed') {
        mainArea.style.marginTop = "0";
    }
    // console.log(mainArea);
    // if(mainArea.style.marginTop == "6rem") {
    //     mainArea.style.marginTop = "6rem";
    // } else {
    //     mainArea.style.marginTop = "0rem";
    // }
});

