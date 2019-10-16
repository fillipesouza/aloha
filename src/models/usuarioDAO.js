const con = require('../helpers/banco');

class UsuarioDAO {
   buscaPorUsuarioESenha(usuario, cb){
       const sql = "select * from tb_usuarios where rm=? and senha=?";
       con.query(sql, [usuario.rm, usuario.senha], (err,res) => {
            if(err) throw err;
            else cb(res);
       });
   }
}

module.exports = UsuarioDAO;