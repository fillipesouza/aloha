const conexao = require('./src/helpers/banco');

//console.log(conexao.statistics());
conexao.query("SELECT * FROM tb_cursos", (err, res) => {
    console.log(res);
});