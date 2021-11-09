const refs = {
    input: document.querySelector('#validation-input')
}

refs.input.addEventListener('blur', onBlur)

function onBlur(event){
if(refs.input.value.length === Number(refs.input.getAttribute('data-length'))){
refs.input.classList.add('valid')
} else {
    refs.input.classList.add('invalid')  
}
    }
