var userName = document.getElementById('userName');
var password = document.getElementById('password');

function submit() {
    localStorage.setItem('userName', userName.value);
    localStorage.setItem('password', password.value);
    userName.value = "";
    password.value = "";
}

var getName = document.getElementById('getname');
var getPassword = document.getElementById('getpassword');

function check() {
    var checkname = localStorage.getItem('userName');
    var checkpass = localStorage.getItem('password');
    if (getName.value === checkname && getPassword.value === checkpass) {
        document.write("Welcome " + getName.value)
    }
}