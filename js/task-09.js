refs = {
    buttonChangeColor: document.querySelector('.change-color'),
    span: document.querySelector('.color')
}

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }

refs.buttonChangeColor.addEventListener('click', colorChange)

function colorChange () {

}


