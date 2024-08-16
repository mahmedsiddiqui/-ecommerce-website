document.querySelector('.signup-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    alert(`Username: ${username}\nPassword: ${password}`);
});
