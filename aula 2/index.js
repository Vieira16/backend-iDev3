class Usuario {
    constructor(Nome, email, senha){
        this.nome = nome;
        this.email = email;
        this._senha = senha;
        
    }

autenticar(senha) {
    return senha === this._senha;


} 

alterarSenha(novasenha ){
    this._senha = novaSenha;
    console.log ('Sena alterada com sucesso')

    }
  }
  class Admin extends Usuario {
    constructor(nome, email, senha, nivelAcesso){
        super(nome, email, senha);
    this.nivelAcesso = nivelAcesso;

    }

    banirUsuario(Usuario){
        console.log(`${Usuario.nome} 'foi banido pelo admin ${this.nome}`)

    }

    autenticar(senha){
        return senha === this._senha && this.nivelAcesso === 'alto';
    }
  }

  const usuario1 = new Usuario('Luiz', 'luiz@gmail.com', '12345');
  const usuario2 = new Usuario('Maria', 'Maria@gmail.com', '123456789');

  console.log(usuario1.autenticar('1234'));
  console.log(usuario1.autenticar('123544'));
  console.log(usuario1.alterarSenha('testenha'));
