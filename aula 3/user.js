class User{
    constructor(id, nome, email){
        this.id = id; // id do usuario
        this.nome = nome; // nome do usuario
        this.email = email; // email do usuario
    }
}

class Admin extends User{
     constructor(id,nome,email,nivelAcesso){
         super(id,nome,email)
         this.nivelAcesso = nivelAcesso
     }
 }

 module.exports = User; // exportar o modulo
