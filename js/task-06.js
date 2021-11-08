const refs = {
    input: document.querySelector('#validation-input')
}

refs.input.addEventListener('change', onChange)
refs.input.addEventListener('blur', onBlur)

function onChange(event){

}
function onBlur(){
    if(refs.input.data-length === refs.input.textContent.length){
        refs.input.id = '#validation-input.valid'} else {refs.input.id = '#validation-input.invalid'};
        console.log(refs.input)
    }
