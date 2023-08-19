const bookIcon = document.getElementById('img-2');
const book = document.getElementById('img-3');
const me = document.getElementById('img-4');
const lpage = document.getElementById('img-5');
const rpage = document.getElementById('img-6');
const bpage = document.getElementById('img-7');
const text = document.getElementsByClassName('one-text')[0];
const changeButton = document.getElementById('button');

const data = [
  { text: 'Wassup, grab a blanket and a book', image: 'photos/camp/tqfhps0szql81.jpg' },
  { text: 'We start with the famous pages written by pabo dumdum', image: 'photos/camp/Screenshot_20230817_091044_Photos.jpg' },
  { text: 'As you can see her in person, along with her amazing photography skills', image: 'photos/camp/tqfhps0szql81.jpg' }, 
  { text: 'and not so amazing gaming skills', image: 'photos/camp/tqfhps0szql81.jpg' }, 
  { text: 'Another one of her creations, which we can safely regard as false now', image: 'photos/camp/tqfhps0szql81.jpg' }, 
  { text: 'I like this photo because it shows the world around moving fast, but mine is standing infront of me and its all that matters', image: 'photos/camp/tqfhps0szql81.jpg' }, 
  { text: '<3', image: 'photos/camp/tqfhps0szql81.jpg' }, 
];

const lpageData = [
  { image: '/photos/camp/hdb.jpg' },
];

const rpageData = [
  { image: '/photos/camp/flower.jpg' },
];

const bpageData = [
  { image: '/photos/camp/cons.jpg' },
  { image: '/photos/camp/cons.jpg' },
  { image: '/photos/camp/cons.jpg' }, 
  { image: '/photos/camp/mk.jpg' }, 
  { image: '/photos/camp/cons.jpg' }, 
  { image: '/photos/camp/v.jpg' }, 
  { image: '/photos/camp/beach.jpg' }, 
];

let currentIndex = 0;

function updateContent() {
  if (currentIndex == 0) {
    book.style.display = 'none';
    bookIcon.style.display = 'block';
  } else {
    book.style.display = 'block'; 
    bookIcon.style.display = 'none'
  }

  if (currentIndex == 2 ) {
    lpage.style.display = 'block';
    lpage.src = lpageData[0].image;
  } else {
    lpage.style.display = 'none'; 
  }

  if (currentIndex == 2) {
    rpage.style.display = 'block';
    rpage.src = rpageData[0].image;
  } else {
    rpage.style.display = 'none'; 
  }

  if (currentIndex == 3 || currentIndex == 4 || currentIndex == 5 || currentIndex == 6) {
    bpage.style.display = 'block';
    bpage.src = bpageData[currentIndex].image;
  } else {
    bpage.style.display = 'none'; 
  }

  text.textContent = data[currentIndex].text;
  book.src = data[currentIndex].image;

  currentIndex = (currentIndex + 1) % data.length;
}

changeButton.addEventListener('click', updateContent);

updateContent();