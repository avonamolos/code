var passwordInput = document.getElementById('password');
var confirmPasswordInput = document.getElementById('cpassword');
var message = document.getElementById('message');
var mssg = document.getElementById('mssg');
var registerButton = document.getElementById('register');

passwordInput.addEventListener('input', checkPasswordMatch);
confirmPasswordInput.addEventListener('input', checkPasswordMatch);

registerButton.addEventListener('click', function() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    localStorage.setItem('username', username);
    localStorage.setItem('password', password);
    window.location.href = 'login/login.html'; 
});

function checkPasswordMatch() {
    var password = passwordInput.value;
    var confirmPass = confirmPasswordInput.value;

    if (password === confirmPass) {
        message.textContent = password && confirmPass ? "Passwords match!" : "";
        mssg.textContent = ""; // Clear any previous error message
        registerButton.disabled = password && confirmPass ? false : true; // Enable/disable the register button
    } else {
        message.textContent = "";
        mssg.textContent = "Passwords don't match :/";
        registerButton.disabled = true; // Disable the register button
    }
}
