// ////INI ADALAH JS YANG KETIKA DIKATIKAAN KE HTML, LIST TIDAK KELIATAN DIPERMUKAAN

// var UL = document.getElementById("myUL");
// // hilde the list by default
// UL.style.display = "none";

// var searchBox = document.getElementById("myInput");

// // show the list when the input receive focus
// searchBox.addEventListener("focus",  function(){
//     // UL.style.display = "block";
// });

// // hide the list when the input receive focus
// searchBox.addEventListener("blur", function(){
//     UL.style.display = "none";
// });


// function myFunction() {
//     var input, filter, ul, li, a, i;
//     input = document.getElementById("myInput");
//     ul = document.getElementById("myUL");
//     filter = input.value.toUpperCase();
//     // if the input is empty hide the list
//     if(filter.trim().length < 1) {
//         ul.style.display = "none";
//         return false;
//     } else {
//         ul.style.display = "block";
//     }
    
//     li = ul.getElementsByTagName("li");
//     for (i = 0; i < li.length; i++) {
//         a = li[i].getElementsByTagName("a")[0];
        
//         // This is when you want to find words that contain the search string
//      if (a.innerHTML.toUpperCase().indexOf(filter) > -1) { 
//         li[i].style.display = "";
//      } else {
//         li[i].style.display = "none";
//     } 

//     }
// }