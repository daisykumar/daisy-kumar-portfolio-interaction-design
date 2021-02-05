
const navToggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.links');
const social = document.querySelector('.social-icons');
//Get the button
var mybutton = document.getElementById("myBtn");
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

  // When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

navToggle.addEventListener("click", function (){

    links.classList.toggle("show-links");
    links.classList.toggle("show-socials");

    
})


