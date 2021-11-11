const refs = {
    input: document.querySelector('#font-size-control'),
    span: document.querySelector('#text')
}

refs.input.addEventListener('input', changeTextSize);

function changeTextSize(){
refs.span.style.fontSize = refs.input.value + 'pt';
}