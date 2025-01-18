const SigninForm = document.getElementById("SigninForm")
console.log("Submitted");
let formvalidation = true;

function signinHandler(event) {
    event.preventDefault()
    console.log("Submitted");
    const name = SigninForm.Name.value;

    const email = SigninForm.Email.value;
    // const emailregex = '^[^@]+@[^@]+\.[^@]+$'
    const emailregex = /^[^@]+@[^@]+\.[^@]+$/;


    const Password = SigninForm.Password.value;
    // const passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).*$/;
    const passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).{6,}$/;

    const ConfirmPassword = SigninForm.ConfirmPassword.value;
    // name validation
    if (name.trim().length < 5) {
        const NameErrorMsg = document.getElementById("NameErrorMsg")
        NameErrorMsg.innerText = "Minimum 5 characters required"
        NameErrorMsg.style.color = "red"
        formvalidation = false
    }
    //Email validation
    if (!email.match(emailregex)) {
        const EmailErrorMSg = document.getElementById("EmailErrorMSg")
        EmailErrorMSg.innerText = "Enter a valid email address"
        EmailErrorMSg.style.color = "red"
        formvalidation = false
    }
    //Password validation
    if (!Password.match(passwordRegex)) {
        const PasswordErrormsg = document.getElementById("PasswordErrormsg")
        PasswordErrormsg.innerText = "Password must have at least 6 characters, one uppercase letter, and one special character."
        PasswordErrormsg.style.color = "red"
        formvalidation = false
    }
    //ConfirmPassword
    if (ConfirmPassword != Password) {
        const ConfirmPasswordErrorMsg = document.getElementById("ConfirmPasswordErrorMsg")
        ConfirmPasswordErrorMsg.innerText = "Passwords do not match."
        ConfirmPasswordErrorMsg.style.color = "red"
        formvalidation = false
    }
    //formvalidation 
    if (formvalidation) {
        SigninForm.submit()
        SigninForm.reset()
    }
}
//Event listener
SigninForm.addEventListener('submit', signinHandler)

// Password hide & show
let passwordstatus = true
const eyeshow = document.getElementById("EyeIcon")
eyeshow.addEventListener('click', () => {
    document.getElementById("Password").type = passwordstatus ? 'text' : 'password'
    eyeshow.innerHTML = passwordstatus ? '<i class="bi bi-eye-slash"></i>' : '<i class="bi bi-eye-fill "></i>'
    passwordstatus = !passwordstatus
})

////ConfirmPassword hide & show
let confirmpasswordstatus = true
const eyeshow1 = document.getElementById("EyeIcon1")
eyeshow1.addEventListener('click', () => {
    document.getElementById("ConfirmPassword").type = confirmpasswordstatus ? 'text' : 'password'
    eyeshow1.innerHTML = confirmpasswordstatus ? '<i class="bi bi-eye-slash"></i>' : '<i class="bi bi-eye-fill "></i>'
    confirmpasswordstatus = !confirmpasswordstatus
})