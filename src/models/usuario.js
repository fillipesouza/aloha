const Utils = require('../helpers/utils');

class Usuario {
    static get tabela(){
        return 'tb_usuarios';
    }
    constructor(objUsuario){
        this.rm = '';
        this.nome = '';
        this.curso = '';
        this.senha = '';
        Object.assign(this, objUsuario);
    }

    setarSenha(senha){
        this.senha = Utils.criptografa(senha); 
    }
}

module.exports = Usuario;