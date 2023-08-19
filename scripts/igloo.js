const uwText = document.getElementsByClassName('u-water-text')[0];
const uwText2 = document.getElementsByClassName('u-water-2-text')[0];
const uwImg = document.getElementById('img-1');
const uwImg2 = document.getElementById('img-2');
const changeButton = document.getElementById('change2');
const password = document.getElementById('password');
const submitButton = document.getElementById('button');

const passwordText = "sarangheyo56";

const data = [
    { text: 'Heluuuu!!', image: '/photos/igloo/u-water.jpg' },
    { text: '✋ To enter igloofy, you gotta be in goofy attire', image: '/photos/igloo/u-water.jpg' },
    { text: '✋ To enter igloofy, you gotta be in goofy attire', image: '/photos/igloo/u-water.jpg' },
    { text: 'Perfect 🤭', image: '/photos/igloo/u-water.jpg' },
    { text: 'Now enter the password to move forward 🗝️', image: '/photos/igloo/u-water.jpg' },
    { text: '5', image: '/photos/igloo/u-water.jpg' },
];

const data2= [
    { text: '...', image: '/photos/igloo/u-water-2.jpg' },
    { text: '...', image: '/photos/igloo/u-water-2.jpg' },
    { text: '...', image: '/photos/igloo/accepted.jpg' },
    { text: '...', image: '/photos/igloo/u-water-2.jpg' },
    { text: 'Click me', image: '/photos/igloo/u-water-2.jpg' },
    { text: '5', image: '/photos/igloo/u-water-2.jpg' },
];
  
let currentIndex = 0;
  
function updateContent() {
    if (currentIndex == 0) {
      uwText2.style.display = 'none';
      uwImg2.style.display = 'none';
    } 
    else if (currentIndex == 1) {
        uwImg2.style.display = 'none';  
        uwText2.style.display = 'flex';
    } 
    else if (currentIndex == 2) {
        uwImg2.style.display = 'flex';  
        uwText2.style.display = 'none';
    } 
    else if (currentIndex == 3) {
        uwText2.style.display = 'none';  
        uwImg2.style.display = 'flex'; 
    }
    else {
        uwText2.style.display = 'flex';
        uwImg2.style.display = 'flex';
    }

    if (currentIndex == 4) {
        password.style.display = 'flex';
        uwText2.style.display = 'none';  
        uwImg2.style.display = 'flex';
    }
    else {
        password.style.display = 'none';
    }
  
    uwText.textContent = data[currentIndex].text;
    uwImg.src = data[currentIndex].image;

    uwText2.textContent = data2[currentIndex].text;
    uwImg2.src = data2[currentIndex].image;

    if (currentIndex == 4) {
        submitButton.addEventListener('click', handlePasswordAttempt());
    }
    else{
        currentIndex = (currentIndex + 1) % data.length;
    }  
}
  
changeButton.addEventListener('click', updateContent);
  
updateContent();

function handlePasswordAttempt() {

    const inputText = passwordInput.value;
  
    if (inputText === passwordText) {
        currentIndex = (currentIndex + 1) % data.length;
    } 
    else {
        alert('Wrong password, try again 🥴');
        passwordInput.value = ''; 
    }

    return false;
}
