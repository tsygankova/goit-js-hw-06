let counterValue = 0;

const refs = {
    span: document.querySelector('#value'),
    decrementButton: document.querySelector('button[data-action = "decrement"]'),
    incrementButton: document.querySelector('button[data-action = "increment"]'),
}

refs.decrementButton.addEventListener('click', decreaseValue);
refs.incrementButton.addEventListener('click', increaseValue);

function decreaseValue (event) {
    counterValue -=1;
   refs.span.textContent = counterValue;
}

function increaseValue (event) {
counterValue +=1;
refs.span.textContent = counterValue;
}

