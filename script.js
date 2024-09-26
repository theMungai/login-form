function passwordValidator(){
const userEmail = document.getElementById("email")
const correctPassword = "securePassword123.";
const userInputPassword = document.getElementById("password");
const errorMessage = document.getElementById("error-message");
const successMessage = document.getElementById("success-message");
const maxAttempts = 3;

if(userEmail.value != "" && correctPassword === userInputPassword.value){
    successMessage.style.display = "block"
    successMessage.textContent = "Login Successful";
    userInputPassword.style.borderColor = "green";

}

for(let attempt = 0; attempt < maxAttempts; attempt++){

   if(userEmail != "" && correctPassword !== userInputPassword.value){
        errorMessage.style.display = "block";
        errorMessage.textContent = `Invalid email or password. You have ${maxAttempts - attempt} attempt left. Try again!`;
        userInputPassword.style.borderColor = "red"
            
        
    }    

}

if (attempt === maxAttempts ) {
    errorMessage.style.display = "block";
    errorMessage.textContent = "Too many attempts. Your account has been temporarily blocked. Try again after 4 hours.";
    userInputPassword.style.borderColor = "red";
   
}


}
