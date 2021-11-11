const formEl = document.querySelector('.login-form');
  
formEl.addEventListener('submit', onFormSubmit);

function onFormSubmit(event){
    event.preventDefault();

    if (!formEl.elements.email.value || !formEl.elements.password.value){
        alert('Будь ласка, заповніть усі поля')
    } 
    else 
    {const formElements = event.currentTarget.elements;
    const formObject = {
     email: formElements.email.value,
     password: formElements.password.value
    };

    console.log(formObject);
    formEl.reset()}
}

