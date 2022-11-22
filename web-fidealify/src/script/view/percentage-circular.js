let barCircular = document.querySelector('.bar-circular');
let percentage = document.querySelector('.bar-percentage');
// let inputBar = document.querySelector('.bar-input');
// let buttonBar = document.querySelector('.bar-button');
let start = 1;

let inputUsia = document.querySelector('#inputUsia');
let inputTinggi = document.querySelector('#inputTinggi');
let inputBerat = document.querySelector('#inputBerat');
let buttonHasil = document.querySelector('#buttonHasil');
let buttonReset = document.querySelector('#buttonReset');
let result = 0;

buttonHasil.addEventListener('click', (event) => {    
    result = parseInt(inputUsia.value) + parseInt(inputTinggi.value) + parseInt(inputBerat.value);

    const progress = setInterval(() => {
        if(result > start) {
            start++;
            displayProgress();
        } else {
            start--;
            displayProgress();
        }
        
        function displayProgress() {
            percentage.textContent = `${start}%`;
            barCircular.style.background = `conic-gradient(#3F6FF5 ${start * 3.6}deg, #ededed 0deg)`;   
            if(result == start) {
                clearInterval(progress);
                result = 0;
            }
        }
    });

    
    event.preventDefault();
});

buttonReset.addEventListener('click', (event) => {
    inputUsia.value = '';
    inputTinggi.value = '';
    inputBerat.value = '';
    percentage.textContent = '0%';
    barCircular.style.background = `conic-gradient(#3F6FF5 0deg, #ededed 0deg)`;
    console.log('halo');

    event.preventDefault();
});

