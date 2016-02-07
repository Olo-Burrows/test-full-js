function User(login, pwd, name, lastname) {
    this.login = login;
    this.pwd = pwd;
    this.name = name;
    this.lastname = lastname;
        
    this.getLogin = function() {
        return this.login;
    }           
    this.getPwd = function() {
        return this.pwd;
    }           
    this.getName = function() {
        return this.name;
    }    
    this.getLastname = function() {
        return this.lastname;
    }
    
    this.getCompleteName = function() {
        return this.getName() + " " + this.getLastname();
    }
    
    this.setAge = function(newage) {
        this.age = newage;
    }
    this.getAge = function() {
        return this.age;
    }
}