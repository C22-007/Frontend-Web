const inputUsia = document.querySelector('#inputUsia');
const inputTinggi = document.querySelector('#inputTinggi');
const inputBerat = document.querySelector('#inputBerat');

const barCircular = document.querySelector('#barCircular');
const barPercentage = document.querySelector('#barPercentage');

const buttonHasil = document.querySelector('#buttonHasil');
const buttonReset = document.querySelector('#buttonReset');

let start = 0;

const displayProgress = (progress, result) => {
    barPercentage.innerText = `${start}%`;
    barCircular.style.background = `conic-gradient(#3F6FF5 ${start * 3.6}deg, #ededed 0deg)`;   
    if(result == start) {
        clearInterval(progress);
        result = 0;
    }
}
    
const calculateBodyfat = () => {
    let result = 0;
    result = parseInt(inputUsia.value) + parseInt(inputTinggi.value) + parseInt(inputBerat.value);

    return result;
}

buttonHasil.addEventListener('click', (event) => {
    event.preventDefault();

    if(inputUsia.value == "" || inputTinggi.value == "" || inputBerat.value == "") {
        alert('Mohon lengkapi data lebih dahulu...');
    } else {
        const progress = setInterval(() => {
            let result = calculateBodyfat();
                    
            if(result > start) {
                start++;
                displayProgress(progress, result);
            } else {
                start--;
                displayProgress(progress, result);
            }    
        }, 30);
    }
});

buttonReset.addEventListener('click', (event) => {
    event.preventDefault();
    
    start = 0;
    inputUsia.value = '';
    inputTinggi.value = '';
    inputBerat.value = '';
    barPercentage.textContent = '0%';
    barCircular.style.background = `conic-gradient(#3F6FF5 0deg, #ededed 0deg)`;
    // category.setAttribute("src", "");
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


