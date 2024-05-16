// Nik


// Function to open the overlay navigation 
// left to right (0 to 100% width), when it is triggered:

function openNav() {
    document.querySelector('.navbar').style.width = '100%';
}

// Function to close the overlay navigation
function closeNav() {
    document.querySelector('.navbar').style.width = '0';
}

const button = document.querySelector('.btn');

button.addEventListener('click', () => {
    console.log('I was clicked');
});

// Instagram
const insta = document.querySelector('.fa-instagram');

let instagramUrl = 'https://www.instagram.com/';

insta.addEventListener('click', () => {
    window.location.href = instagramUrl;
});

// facebook

const faceBook = document.querySelector('.fa-facebook');

let faceBookUrl = 'https://www.facebook.com/';

faceBook.addEventListener('click', () => {
    window.location.href = faceBookUrl;
})
// twitter

const twitterX = document.querySelector('.fa-x-twitter');

let twitterUrl = 'https://twitter.com/';

twitterX.addEventListener('click', () => {
    window.location.href = twitterUrl;
});

// 

const youTube = document.querySelector('.fa-youtube');

let youtubeURL = 'https://www.youtube.com/';

youTube.addEventListener.apply('click', () => {
    window.location.href = youtubeURL;
});





// NINA JAVASCRIPT STUFF

// const promoCard1 = document.querySelector("#nina1");

// promoCard1.addEventListener("click", (e) => {
//     console.log("nina");
// })

const inputField = document.querySelector("#searchInput");


const whereToButton = document.querySelector(".button");
let searchUrl = "https://www.google.com/search?q=" + inputField;

whereToButton.addEventListener("click", (e) => {
        window.location.href = searchUrl;
    
});

const losAngelesCTA = document.querySelector(".CTA1");

losAngelesCTA.addEventListener("click", () => {
    window.location.href = "https://www.discoverlosangeles.com/";
});


// localStorage
//     => option + cmd + j to open console;
 //     => find >>; then after look for application(7th item);
//     => select localStorage, inside is the website
//     => key and value pair
    


