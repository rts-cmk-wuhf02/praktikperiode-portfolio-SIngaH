document.addEventListener("DOMContentLoaded", ()=>{

    let checkValidity = (field) =>{
        if(field.disabled || field.type === 'file' || field.type === 'reset' || field.type === 'submit' || field.type === 'button'){
            return;
        }
        if(field.validity.valid === true){
            return;
        }
        if(field.validity.valueMissing){
            return 'Please fill out the form';
        }
        if(field.type === 'email'){
            return 'The email is not valid';
        }
        if(field.validity.patternMismatch){
            return 'That is not a name';
        }
        
    }
    
    let showError = (field, errormsg) => {
        field.parentElement.querySelector('.error').innerHTML = errormsg;
        field.parentElement.querySelector('.error').classList.add('active');
    }
    let removeError = (field) => {
        field.parentElement.querySelector('.error').innerHTML = "";
        field.parentElement.querySelector('.error').classList.remove('active');
    }
    document.addEventListener('blur', (event) => {
        if(!event.target.form.classList.contains('validate')){
            return;
        }
        let isValid = checkValidity(event.target);
        
        if(isValid){
            showError(event.target, isValid);
        }else{
            removeError(event.target);
        }
    }, true); 
    
});