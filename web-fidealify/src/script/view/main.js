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
    let result = 0;
    result = parseInt(inputUsia.value) + parseInt(inputTinggi.value) + parseInt(inputBerat.value);

    return result;
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
                categoryImage.setAttribute("src", "./assets/images/bodyfat-question.jpg");
                categoryDescription.innerText = "Unknown";
            }, 3000);
        }
    }
}




buttonHasil.addEventListener('click', (event) => {
    event.preventDefault();

    if(inputUsia.value == "" || 
       inputTinggi.value == "" || 
       inputBerat.value == "") {
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



let count = 0;
const slides = document.getElementsByClassName('article-custom');
const indexSlide = document.getElementsByClassName('card-title');

const currentSlide = (n = 0) => {
    // membandingkan index dari elemn vs counter (nilai parameter n)
    for(let i=0; i < slides.length; i++) {  
        if(parseInt(indexSlide[i].innerText) == n){
            slides[i].style.display = "block";
        }
    }  
}
document.addEventListener('load', currentSlide());

arrowSlider[1].addEventListener('click', () => {
    ++count;

    currentSlide(count);

    for(let i = 0; i < slides.length; i++) {  
        if(parseInt(indexSlide[i].innerText) == (count-1)){
            slides[i].style.display = "none";
        }
    }
});

arrowSlider[0].addEventListener('click', () => {
    --count;

    currentSlide(count);

    for(let i = 0; i < slides.length; i++) {  
        if(parseInt(indexSlide[i].innerText) == (count+1)){
            slides[i].style.display = "none";
        }
    }
});

// const slides = document.getElementsByClassName('article-custom');
// console.log(slides.item(1));

// console.log(arrowSlider);

// let slideIndex = 1;
// showSlides(slideIndex);
// // console.log(showSlides(slideIndex));
// let n = 1;
// showSlides(slideIndex += n);

// function showSlides(n) {
//     const slides = document.getElementsByClassName('article-custom');
    
//     if (n > slides.length) {slideIndex = 1}    
//     if (n < 1) {slideIndex = slides.length}

//     for (let i = 0; i < slides.length; i++) {
//         slides[i].style.display = "none";  
//     }

//     slides[slideIndex-1].style.display = "block";
// }




