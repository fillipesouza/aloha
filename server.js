const express = require('express');
const rotasDeUsuario = require('./src/routes/usuarios');
const app = express();

app.use('/usuarios', rotasDeUsuario);


app.listen(38000, '0.0.0.0', () => console.log('running'));






/* const conexao = require('./src/helpers/banco');

//console.log(conexao.statistics());
conexao.query("SELECT * FROM tb_cursos", (err, res) => {
    console.log(res);
});
*/
