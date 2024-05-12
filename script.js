const catImage = document.querySelector('#catImg');
const catButton = document.querySelector('#catButton');
const autoButton = document.querySelector('#autoCat');
const paragraph = document.querySelector('#para');


async function getCatPicture() {
  const response = await fetch('https://cataas.com/cat');
  if (response.ok) {
    const catUrl = await response.url;
    catImage.src = catUrl;
  } else {
    paragraph.textContent = 'Something went wrong, go show this to Derek'
  }
}

getCatPicture();

catButton.addEventListener('click', getCatPicture);