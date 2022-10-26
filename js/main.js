function ValidateEmail(input) {

    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  
    let errormessage = document.querySelector(".email__error");

    if (!input.value.match(validRegex)) {
        
        errormessage.style.display = 'block';

    } else {
        errormessage.style.display = 'none';
    }
}


let button = document.querySelector(".request__btn");

button.addEventListener('click', e => {
    let inputelement = document.querySelector("input[name=email]");
    ValidateEmail(inputelement)
})