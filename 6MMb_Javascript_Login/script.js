document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting normally

    var userName = "admin";
    var userPassword = "password";
    var chips = 200;
    var logedIn = false;

    var enteredUsername = document.getElementById('username').value;
    var enteredPassword = document.getElementById('password').value;

    if (enteredUsername === userName && enteredPassword === userPassword) {
        logedIn = true;
        alert('Login successful!');
        // Here you can redirect the user to another page or perform other actions
    } else {
        alert('Invalid username or password.');
    }
});
