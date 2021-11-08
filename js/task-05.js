{/* <input type="text" id="name-input" placeholder="Please enter your name" />
<h1>Hello, <span id="name-output">Anonymous</span>!</h1> */}

const refs = { 
    input: document.querySelector('#name-input'),
    span: document.querySelector('#name-output')
}

refs.input.addEventListener('input', onInputChange)

function onInputChange (event){
    refs.span.textContent = event.currentTarget.value;
    if (!event.currentTarget.value){ refs.span.textContent = 'Anonymous'}
}