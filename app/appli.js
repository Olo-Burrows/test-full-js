var user;
var isLogged = false;
var btnAddAge, ageInput;


function onLoad() {
    user = new User("jbouyer", "jbouyer", "Julien", "BOUYER");
    btnAddAge = document.getElementById("btnAddAge");
    ageInput = document.getElementById("age");
    ageInput.onkeydown = function(e) {
        console.log("Key pressed "+ e.keyCode);
        if (e.keyCode === 13) {
            addAge();
        }
    }
    btnAddAge.onclick = function(e) {
        addAge();
    }
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
    } else if (login != user.getLogin() || pwd != user.getPwd()) {
        errorMsg = "Wrong login or password.";
    } else {
        console.log("Connecté");
    }
    
    if (errorMsg !== "") {
        errorSpan.textContent = errorMsg;
    } else {
        var loginzone, userzone;
        
        loginzone = document.getElementById("loginzone");
        userzone = document.getElementById("userzone");
        loginzone.style.display = "none";
        userzone.style.display = "block";
    }
    
}

function addAge() {
    var ageuser, userSpan;
    
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

