const mainList = document.querySelector('#ingredients')

const ingredients = [
    "Potatoes",
    "Mushrooms",
    "Garlic",
    "Tomatos",
    "Herbs",
    "Condiments",
  ]

const makeNewElements = options => {
    return options.map(option => {
        const newElement = document.createElement('li');
        newElement.textContent = option;
        newElement.classList.add('item');
        return newElement;
    })
}

const newMainElements = makeNewElements(ingredients);
mainList.prepend(...newMainElements)