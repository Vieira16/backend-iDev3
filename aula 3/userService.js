const User = require('./user');
const path = require('path'); // modulo para manipular caminhos
const fs = require('fs'); // modulo para manipular arquivos file system


class userService {
    constructor(){
        this.filePath = path.join(_dirname, 'user.json');
        this.users = [];//Array para armazenar user
        this.nextid = 1;//icontador para gerar id
    }

    loadUsers(){
        try{
        if(fs.existsSync(this.filePath)){
            const data = fs.readFileSync(this.filePath)
            return JSON.parse(data);
        }
      }catch(error){
        console.log("Erro ao carregar arquivo", erro)
      }
      return[];
    }
    getnextID (){
        if(this.users.length===0) return 1;
        return Math.max(...this.users.map(user => user._id))+1
                     catch (erro){}
                console.log('erro ao buscar proximo id', erro)
            }
        }

    addUser(nome, email){
        const user = new User(this.nextid++, nome, email);
        this.users.push(user);
        return user;
    }
    getUsers(){
        return this.users
    }
}

module.exports = new userService;