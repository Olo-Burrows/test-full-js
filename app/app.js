/* global User, document, console, alert, window, parent */

var user;
var isLogged = false;


function onLoad() {
    user = new User("jbouyer", "jbouyer", "Julien", "BOUYER");
}

function connect() {
    var loginInput, login, pwdInput, pwd, errorSpan, errorMsg;

    loginInput = document.getElementById("login");
    pwdInput = document.getElementById("pwd");
    errorSpan = document.getElementById("errorSpan");

    login = loginInput.value;
    pwd = pwdInput.value;
    errorMsg = "";


    if (login === null || login === undefined || login === "") {
        errorMsg = "Veuillez saisir les champs correctement !";
    } else if (pwd === null || pwd === undefined || pwd === "") {
        errorMsg = "Veuillez saisir les champs correctement !";
    } else {
        console.log("Connecté");
        window.name = login + "|" + pwd;
        document.location.href = "user.htm";
    }

    errorSpan.textContent = errorMsg;
}


function onLoadUserPage() {
    var welcome, login, pwd, errorMsg;


    login = parent.name.split('|')[0];
    pwd = parent.name.split('|')[1];


    if (login != user.getLogin() || pwd != user.getPwd()) {
        alert("Wrong login or password.");
        document.location.href = "login.htm";
    }


    welcome = document.getElementById("welcome");
    welcome.textContent = user.getCompleteName();

}

function addAge() {
    var ageInput, ageuser, userSpan;

    ageInput = document.getElementById("age");
    ageuser = ageInput.value;

    if (ageuser === null || ageuser === undefined || ageuser === "") {
        alert("Saisir un age");
    } else if (isNaN(ageuser)) {
        alert("Saisir un nombre !");
    } else {
        user.setAge(ageuser);
    }


    userSpan = document.getElementById("userinfos");
    userSpan.textContent = "Je m'appelle " + user.getCompleteName() + " et j'ai " + user.getAge() + " ans.";


}