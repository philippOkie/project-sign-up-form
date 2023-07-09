const inputOne = document.querySelector('#user_password')
const inputTwo = document.querySelector('#confirm_password')
const submit = document.querySelector('#submit-button')

submit.addEventListener('click', () => {
    if (inputOne.value !== inputTwo.value) {
        alert("Try to confirm your password again!")
    }
})

