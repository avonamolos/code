var storedUsername = localStorage.getItem('username');
var storedPassword = localStorage.getItem('password');

document.getElementById('login').addEventListener('click', function(){
    var enteredUsername = document.getElementById('loginUsername').value;
    var enteredPassword = document.getElementById('loginPassword').value;

    if (enteredUsername === storedUsername && enteredPassword === storedPassword) {
        alert('Login successful!');
        window.location.href = 'calendar/calendar.html'
    } else {
        alert('Login failed, please try again!!!'); 
    }
});
