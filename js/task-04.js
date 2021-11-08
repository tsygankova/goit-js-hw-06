

let counterValue = 0;
let valueTracker = document.querySelector('#value').value

const decrementButton = document.querySelector('button[data-action = "decrement"]');
const incrementButton = document.querySelector('button[data-action = "increment"]');

decrementButton.addEventListener('click', decreaseValue)
incrementButton.addEventListener('click', increaseValue)

function decreaseValue () {
    counterValue -=1;
    valueTracker = counterValue;
console.log ('minus minus')
return counterValue;
}

function increaseValue () {
counterValue +=1;
valueTracker = counterValue;
console.log ('plus plus')
return counterValue;

}

