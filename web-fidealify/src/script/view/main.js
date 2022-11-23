const inputUsia = document.querySelector('#inputUsia');
const inputTinggi = document.querySelector('#inputTinggi');
const inputBerat = document.querySelector('#inputBerat');

const barCircular = document.querySelector('#barCircular');
const barPercentage = document.querySelector('#barPercentage');

const categoryImage = document.querySelector('#categoryImage');
const categoryDescription = document.querySelector('#categoryDescription');


const buttonHasil = document.querySelector('#buttonHasil');
const buttonReset = document.querySelector('#buttonReset');


// selected gender
const selectGender = () => {
    const gender = document.querySelector('input[type="radio"]:checked');
    
    return gender.value;
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
    
// display bodyfat category
const displayCategory = () => {
    const percentage = calculateBodyfat();
    const gender = selectGender();
    
    if(gender === "pria"){
        if(percentage >= 2 && percentage <= 5) {
            categoryImage.setAttribute("src", "./assets/images/bodyfat-male-essential.jpg");
            categoryDescription.innerText = "Essential Male";
        } else if(percentage >= 6 && percentage <= 13) {
            categoryImage.setAttribute("src", "./assets/images/bodyfat-male-athletes.jpg");
            categoryDescription.innerText = "Athletes Male";
        } else if(percentage >= 14 && percentage <= 17) {
            categoryImage.setAttribute("src", "./assets/images/bodyfat-male-fitness.jpg");
            categoryDescription.innerText = "Fitness Male";
        } else if(percentage >= 18 && percentage <= 24) {
            categoryImage.setAttribute("src", "./assets/images/bodyfat-male-average.jpg");
            categoryDescription.innerText = "Average Male";
        } else if(percentage >= 25) {
            categoryImage.setAttribute("src", "./assets/images/bodyfat-male-obese.jpg");
            categoryDescription.innerText = "Obese Male";
        } else {
            categoryImage.setAttribute("src", "");
            categoryDescription.innerText = "Unknown Male";
        }
    } else if(gender === "wanita"){
        if(percentage >= 10 && percentage <= 13) {
            categoryImage.setAttribute("src", "./assets/images/bodyfat-female-essential.jpg");
            categoryDescription.innerText = "Essential Female";
        } else if(percentage >= 14 && percentage <= 20) {
            categoryImage.setAttribute("src", "./assets/images/bodyfat-female-athletes.jpg");
            categoryDescription.innerText = "Athletes Female";
        } else if(percentage >= 21 && percentage <= 24) {
            categoryImage.setAttribute("src", "./assets/images/bodyfat-female-fitness.jpg");
            categoryDescription.innerText = "Fitness Female";
        } else if(percentage >= 25 && percentage <= 31) {
            categoryImage.setAttribute("src", "./assets/images/bodyfat-female-average.jpg");
            categoryDescription.innerText = "Average Female";
        } else if(percentage >= 32) {
            categoryImage.setAttribute("src", "./assets/images/bodyfat-female-obese.jpg");
            categoryDescription.innerText = "Obese Female";
        } else {
            categoryImage.setAttribute("src", "");
            categoryDescription.innerText = "Unknown Female";
        }
    }
}

buttonHasil.addEventListener('click', (event) => {
    event.preventDefault();

    if(inputUsia.value == "" || inputTinggi.value == "" || inputBerat.value == "") {
        alert('Mohon lengkapi data lebih dahulu...');
    } else {
        // percentage
        const progress = setInterval(() => {
            const percentage = calculateBodyfat();
                    
            if(percentage > counter) {
                counter++;
                displayPercentage(progress, percentage);
            } else {
                counter--;
                displayPercentage(progress, percentage);
            }    
        }, 30);

        // category
        displayCategory();

        // gender
        
        console.log(selectGender());
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
    
    categoryImage.setAttribute("src", "");
    // article.setAttribute("hidden", true);
});


// const category = document.querySelector('.image-custom');
// const article = document.querySelector('.rekomendasi-container');

// const displayCategory = () => {
//     if(calculateBodyfat() > 0 && calculateBodyfat() < 50){
//         category.setAttribute("src", "./assets/images/bodyfat-male-average.jpg");
//     }
// }

// const displayArticle = () => {
//     if(article.hidden == true){
//         article.hidden = false;
//     } else {
//         article.hidden = true;
//     } 
// }


