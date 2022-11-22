let barCircular = document.querySelector('.bar-circular');
let percentage = document.querySelector('.bar-percentage');
// let inputBar = document.querySelector('.bar-input');
// let buttonBar = document.querySelector('.bar-button');
let start = 1;

let inputUsia = document.getElementById('inputUsia');
let inputTinggi = document.querySelector('#inputTinggi');
let inputBerat = document.querySelector('#inputBerat');
let buttonHasil = document.querySelector('#buttonHasil');
let buttonReset = document.querySelector('#buttonReset');

const category = document.querySelector('.image-custom');

const article = document.querySelector('.rekomendasi-container');


function displayProgress() {
    percentage.innerText = `${calculateBodyfat()}%`;
    barCircular.style.background = `conic-gradient(#3F6FF5 ${calculateBodyfat() * 3.6}deg, #ededed 0deg)`;   

    return percentage.innerText;
}



function calculateBodyfat() {
    let result = 0;
    // result = inputUsia.value;
    result = parseInt(inputUsia.value) + parseInt(inputTinggi.value) + parseInt(inputBerat.value);
    
    return result;
}

function displayCategory() {
    
    if(calculateBodyfat() > 0 && calculateBodyfat() < 50){
        category.setAttribute("src", "./assets/images/bodyfat-male-average.jpg");
    }
    // console.log(calculateBodyfat());
}

function displayArticle() {
    if(article.hidden == true){
        article.hidden = false;
    } else {
        article.hidden = true;
    } 
}

// console.log(displayProgress());

// console.log(typeof(inputUsia.value));
buttonHasil.addEventListener('click', (event) => {
    event.preventDefault();

    displayProgress();
    displayCategory();
    displayArticle();
});



// console.log(calculateBodyfat());

// export {displayProgress};
// export default displayProgress;

// buttonHasil.addEventListener('click', (event) => { 
//     event.preventDefault();

//     let result = 0;   
//     result = parseInt(inputUsia.value) + parseInt(inputTinggi.value) + parseInt(inputBerat.value);

//     for(let i = 0; i <= result; i++){
//         percentage.innerText = `${i}%`;
//         barCircular.style.background = `conic-gradient(#3F6FF5 ${i * 3.6}deg, #ededed 0deg)`;   
//     }
    
//     const progress = setInterval(() => {
//         if(result > start) {
//             start++;
//             displayProgress();
            
//         } else {
//             start--;
//             displayProgress();
//         }
        
        
//         function displayProgress() {
//             percentage.innerText = `${start}%`;
//             barCircular.style.background = `conic-gradient(#3F6FF5 ${start * 3.6}deg, #ededed 0deg)`;   
//             if(result == start) {
//                 clearInterval(progress);
//                 result = 0;
//             }
//             return percentage.innerText;
//         }
        
//     });

//     console.log(progress);
// });



buttonReset.addEventListener('click', (event) => {
    event.preventDefault();
    
    inputUsia.value = '';
    inputTinggi.value = '';
    inputBerat.value = '';
    percentage.textContent = '0%';
    barCircular.style.background = `conic-gradient(#3F6FF5 0deg, #ededed 0deg)`;
    category.setAttribute("src", "");
    article.setAttribute("hidden", true);
    // console.log('halo');
});


