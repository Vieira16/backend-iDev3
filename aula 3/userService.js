const User = require("./user");

class userService{
    constructor(){
        this.users = []; // Array para armazenar User
        this.nextId = 1; // Contador para gerar ID
    }

    addUser(nome, email){
        const user = new User(this.nextId++, nome, email);
        this.users.push(user);
        return user;
    }

    getUsers(){
        return this.users
    }
}

module.exports = new userService;