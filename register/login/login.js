var storedUsername = localStorage.getItem('username');
var storedPassword = localStorage.getItem('password');

document.getElementById('login').addEventListener('click', function(){
    var enteredUsername = document.getElementById('loginUsername').value;
    var enteredPassword = document.getElementById('loginPassword').value;

    if (enteredUsername === storedUsername && enteredPassword === storedPassword) {
        alert('Login successful!');
        window.location.href = ''
    } else {
        alert('Login failed, please try again!!!'); //na majka ti v picka
    }
});

//kurov da mi go jadite site
//KUROV MOJ NAJUBAV 

//JAS SUM GOLEMA PICKA