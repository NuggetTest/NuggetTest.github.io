const text = document.getElementById('tent2-text');
const text2 = document.getElementById('tent1-text');
const image = document.getElementById('tent1');
const imageSmall = document.getElementById('tent2');
const pie = document.getElementById('pie');
const ramen = document.getElementById('ramen');
const pizza = document.getElementById('pizza');
const flower = document.getElementById('flower');
const changeButton = document.getElementById('change');

const data = [
  { text: 'Ayo, what you doing in my tent', image: '/photos/tent/tent4.jpg' },
  { text: 'Jk, dinner date time', image: '/photos/tent/tent5.jpg' },
  { text: 'Settle in, we will be having ... 🥁🥁🥁', image: '/photos/tent/tent6.jpg' },
  { text: 'tadaaa', image: '/photos/tent/tent6.jpg' },
  { text: 'Ofc not 💀, just the best ramen', image: '/photos/tent/tent6.jpg' },
  { text: 'and some pizza 😋', image: '/photos/tent/tent6.jpg' },
  { text: 'pls accept 🙏', image: '/photos/tent/tent6.jpg' },
];

let currentIndex = 0;

function updateContent() {
  if (currentIndex == 0) {
    imageSmall.style.display = 'block';
    text2.style.display = 'none';
    text.style.display = 'block'; 
  } else {
    imageSmall.style.display = 'none'; 
    text2.style.display = 'block'; 
    text.style.display = 'none'; 
  }

  if (currentIndex == 3) {
    pie.style.display = 'block';
  } else {
    pie.style.display = 'none';
  }

  if (currentIndex == 4) {
    ramen.style.display = 'block';
  } else {
    ramen.style.display = 'none';
  }

  if (currentIndex == 5) {
    pizza.style.display = 'block';
  } else {
    pizza.style.display = 'none';
  }

  if (currentIndex == 6) {
    flower.style.display = 'block';
  } else {
    flower.style.display = 'none';
  }

  text2.textContent = data[currentIndex].text;
  image.src = data[currentIndex].image;

  currentIndex = (currentIndex + 1) % data.length;
}

changeButton.addEventListener('click', updateContent);

updateContent();