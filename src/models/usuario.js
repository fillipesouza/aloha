class Usuario {
    static get tabela(){
        return 'tb_usuarios';
    }
    constructor(objUsuario){
        this.rm = '';
        this.nome = '';
        this.curso = '';
        Object.assign(this, objUsuario);
    }
}

module.exports = Usuario;