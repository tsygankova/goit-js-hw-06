const refs = {
    input: document.querySelector('#validation-input')
}

refs.input.addEventListener('blur', onBlur)

function onBlur(event){
refs.input.classList.remove('valid', 'invalid')
refs.input.dataset.length == refs.input.value.length ?
refs.input.classList.add('valid') :
refs.input.classList.add('invalid');}