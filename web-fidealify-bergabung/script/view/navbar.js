const navbarToggler = document.querySelector('.navbar-toggler');
const mainArea = document.querySelector('main');


// const navbarAttributes = navbarToggler.getAttributeNames();
// const navbarAttributes = navbarToggler.getAttribute('aria-expanded');
const navbarAttributes = navbarToggler.getAttribute('aria-expanded');



navbarToggler.addEventListener('click', () => {
    console.log(navbarAttributes);
    // console.log(navbarToggler.classList[1]);
    // console.log(mainArea);
    // if(mainArea.style.marginTop == "6rem") {
    //     mainArea.style.marginTop = "6rem";
    // } else {
    //     mainArea.style.marginTop = "0rem";
    // }
});

