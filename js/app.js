const emailInput = document.getElementById('email-input')
const submitButton = document.querySelector('[data-js="submit-btn"]')
const errorMessage = document.querySelector('[data-js="error-message"]')

const submitToNewsletter = event => {
    let emailToCheck = emailInput.value       
    if(!checkEmail(emailToCheck)) {
        event.preventDefault()
        emailInput.classList.add('error')
        errorMessage.textContent = "Please insert a valid email!"
        console.log(emailInput.classList)
    }

    if(checkEmail(emailToCheck)) {
        emailInput.classList.remove('error')
        errorMessage.textContent = ""
    }               
}

const checkEmail = email => {
    //Here is just for typing
    //this not prevent a invalid email in the end
    const emailTester = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    if(emailTester.test(String(email).toLowerCase())) {
        return true
    }
    return false
}

submitButton.addEventListener('click', submitToNewsletter)