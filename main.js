//vars
const errorDiv = document.getElementById('errors');
const pwDiv = document.getElementById('show')

let forms = document.getElementById('form');
let checkboxStatus = document.getElementById('special_chars');
let passwordLength = document.getElementById('length');
let errorMessage = document.getElementById('error-p');


const charactersAndSpecials = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-_=+[]{}|;:'\",.<>?/`~";
const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

forms.addEventListener("submit", validateForm);

function generatePassword() {
    let password = ''; 
    let pwl = passwordLength.value;
    
    const charactersAndSpecialsLength = charactersAndSpecials.length;
    const charactersLength = characters.length;

    if (checkboxStatus.checked == true) {
        for (let i = 0; i < pwl; i++) {
            let randomChar = charactersAndSpecials.charAt(Math.floor(Math.random() * charactersAndSpecialsLength));
            password += randomChar;
        }
    } else {
        for (let i = 0; i < pwl; i++) {
            let randomChar = characters.charAt(Math.floor(Math.random() * charactersLength));
            password += randomChar;
        }
    }
    return password;
}

function showPassword(password) {
    let pwMessage = document.getElementById('pw-p');
    pwMessage.textContent = password;
}

function validateForm(event) {
    event.preventDefault();
    
    let length = parseInt(passwordLength.value);

    if (length < 3 || length > 20 || length === '' || isNaN(length) ) {
        errorMessage.textContent = "Please introduce a number between 3 - 20";

        errorDiv.classList.remove("hidden")
        passwordLength.classList.add("border-red-600")
        errorDiv.appendChild(errorMessage)

    } else {
        errorDiv.classList.add("hidden")
        pwDiv.classList.remove('hidden')
        passwordLength.classList.remove("border-red-600")


        let generatedPassword = generatePassword();
        showPassword(generatedPassword);
    }

}
