const refs = {
    buttonChangeColor: document.querySelector('.change-color'),
    span: document.querySelector('.color'),
    body: document.querySelector('body')
}

refs.buttonChangeColor.addEventListener('click', colorChange)

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  };

function colorChange () {
const randomColor = getRandomHexColor();
refs.body.style.background = randomColor;
refs.span.textContent = randomColor;
}
