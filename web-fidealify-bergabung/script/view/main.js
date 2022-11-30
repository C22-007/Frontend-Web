const inputUsia = document.querySelector('#inputUsia');
const inputTinggi = document.querySelector('#inputTinggi');
const inputBerat = document.querySelector('#inputBerat');

const barCircular = document.querySelector('#barCircular');
const barPercentage = document.querySelector('#barPercentage');

const categoryImage = document.querySelector('#categoryImage');
const categoryDescription = document.querySelector('#categoryDescription');

const buttonHasil = document.querySelector('#buttonHasil');
const buttonReset = document.querySelector('#buttonReset');

const arrowSlider = document.getElementsByClassName('arrow');



// selected gender
const selectGender = () => {
    const radioGender = document.querySelector('input[type="radio"]:checked');

    return radioGender.value;
}


// bodyfat calculate 
const calculateBodyfat = () => {
    let BMI = 0;
    let BFP = 0;

    const gender = selectGender();
    const usia = parseInt(inputUsia.value);
    const berat = parseInt(inputBerat.value);
    const tinggi = parseInt(inputTinggi.value) / 100;

    // Body Mass Index
    BMI = berat / (tinggi * tinggi);

    // Body Fat Percentage
    if(gender === "pria") {
        BFP = (1.20 * BMI) + (0.23 * usia) - 16.2;
    } else if(gender === "wanita") {
        BFP = (1.20 * BMI) + (0.23 * usia) - 5.4;
    }
    BFP = Math.floor(BFP);

    // Validate Result
    if(BFP > 100 || BFP < 0) {
        BFP = 0;
    }

    return BFP;
}



// display bodyfat percentage-bar
let counter = 0;
const displayPercentage = (progress, percentage) => {
    barPercentage.innerText = `${counter}%`;
    barCircular.style.background = `conic-gradient(#3F6FF5 ${counter * 3.6}deg, #ededed 0deg)`;   
    if(percentage == counter) {
        clearInterval(progress);
        percentage = 0;
    }
}

// effect loading
const loadingCategory = () => {
    categoryImage.setAttribute("src", "./assets/images/loading-gif.gif");
    categoryDescription.innerText = "Loading...";
}

// display bodyfat category
const displayCategory = () => {
    const percentage = calculateBodyfat();
    const gender = selectGender();

    loadingCategory();

    if(gender === "pria") {
        if(percentage >= 2 && percentage <= 5) {
            setTimeout(() => {
                categoryImage.setAttribute("src", "./assets/images/bodyfat-male-essential.jpg");
                categoryDescription.innerText = "Essential Male";
            }, 3000);
        } else if(percentage >= 6 && percentage <= 13) {
            setTimeout(() => {
                categoryImage.setAttribute("src", "./assets/images/bodyfat-male-athletes.jpg");
                categoryDescription.innerText = "Athletes Male";
            }, 3000);
        } else if(percentage >= 14 && percentage <= 17) {
            setTimeout(() => {
                categoryImage.setAttribute("src", "./assets/images/bodyfat-male-fitness.jpg");
                categoryDescription.innerText = "Fitness Male";
            }, 3000);
        } else if(percentage >= 18 && percentage <= 24) {
            setTimeout(() => {
                categoryImage.setAttribute("src", "./assets/images/bodyfat-male-average.jpg");
                categoryDescription.innerText = "Average Male";
            }, 3000);
        } else if(percentage >= 25) {
            setTimeout(() => {
                categoryImage.setAttribute("src", "./assets/images/bodyfat-male-obese.jpg");
                categoryDescription.innerText = "Obese Male";
            }, 3000);
        } else {
            setTimeout(() => {
                categoryImage.setAttribute("src", "./assets/images/bodyfat-question.png");
                categoryDescription.innerText = "Unknown";
            }, 3000);
        }
    } else if(gender === "wanita"){
        if(percentage >= 10 && percentage <= 13) {
            setTimeout(() => {
                categoryImage.setAttribute("src", "./assets/images/bodyfat-female-essential.jpg");
                categoryDescription.innerText = "Essential Female";
            }, 3000);
        } else if(percentage >= 14 && percentage <= 20) {
            setTimeout(() => {
                categoryImage.setAttribute("src", "./assets/images/bodyfat-female-athletes.jpg");
                categoryDescription.innerText = "Athletes Female";
            }, 3000);
        } else if(percentage >= 21 && percentage <= 24) {
            setTimeout(() => {
                categoryImage.setAttribute("src", "./assets/images/bodyfat-female-fitness.jpg");
                categoryDescription.innerText = "Fitness Female";
            }, 3000);
        } else if(percentage >= 25 && percentage <= 31) {
            setTimeout(() => {
                categoryImage.setAttribute("src", "./assets/images/bodyfat-female-average.jpg");
                categoryDescription.innerText = "Average Female";
            }, 3000);
        } else if(percentage >= 32) {
            setTimeout(() => {
                categoryImage.setAttribute("src", "./assets/images/bodyfat-female-obese.jpg");
                categoryDescription.innerText = "Obese Female";
            }, 3000);
        } else {
            setTimeout(() => {
                categoryImage.setAttribute("src", "./assets/images/bodyfat-question.png");
                categoryDescription.innerText = "Unknown";
            }, 3000);
        }
    }
}




buttonHasil.addEventListener('click', (event) => {
    event.preventDefault();

    if(inputUsia.value == "" || inputTinggi.value == "" || inputBerat.value == "") {
        alert('Mohon lengkapi data lebih dahulu...');
    } else {
        // percentage-bar
        const progress = setInterval(() => {
            const percentage = calculateBodyfat();

            if(percentage > counter) {
                counter++;
                displayPercentage(progress, percentage);
            } else {
                counter--;
                displayPercentage(progress, percentage);
            }
                
        }, 25);

        // category-image
        displayCategory();
    }
});

buttonReset.addEventListener('click', (event) => {
    event.preventDefault();

    counter = 0;
    inputUsia.value = '';
    inputTinggi.value = '';
    inputBerat.value = '';
    barPercentage.textContent = '0%';
    barCircular.style.background = `conic-gradient(#3F6FF5 0deg, #ededed 0deg)`;
    categoryImage.setAttribute("src", "./assets/images/bodyfat-question.png");
    categoryDescription.innerText = "Not Identified";
});



let slideNum = 1;
showSlides(slideNum);

arrowSlider[1].addEventListener('click', () => {
    showSlides(slideNum += 1);
});

arrowSlider[0].addEventListener('click', () => {
    showSlides(slideNum += -1);
});

function showSlides(x) {    
    let slides = document.getElementsByClassName("article-custom");
    
    console.log(x);

    if (x > slides.length) {
        slideNum = 1
    }    
    if (x < 1) {
        slideNum = slides.length
    }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }

    slides[slideNum-1].style.display = "block";  
}
















