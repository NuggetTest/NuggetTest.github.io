const fetchButton = document.getElementById('fetchButton');
const catImage = document.getElementById('catImage');
const fetchButton2 = document.getElementById('fetchButton2');
const dogImage = document.getElementById('catImage');

// function to fetch images
async function fetchCatImage() {
  try {
    const response = await fetch('https://api.thecatapi.com/v1/images/search');
    if (!response.ok) {
      throw new Error('Request failed');
    }
    const data = await response.json();
    const imageUrl = data[0].url;
    catImage.src = imageUrl;
  } 
  catch (error) {
    console.error('Error fetching image:', error);
  }
}

// 2nd function
async function fetchDogImage() {
  try {
    const response = await fetch('https://api.thedogapi.com/v1/images/search');

    if (!response.ok) {
      throw new Error('Request failed');
    }
    const data = await response.json();
    const imageUrl = data[0].url;
    catImage.src = imageUrl;
  } 
  catch (error) {
    console.error('Error fetching image:', error);
  }
}

fetchButton.addEventListener('click', fetchCatImage);
fetchButton2.addEventListener('click', fetchDogImage);