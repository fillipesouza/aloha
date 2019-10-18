const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const rotasDeUsuario = require('./src/routes/usuarios');
const path = require('path');
const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use('/', express.static(path.join(__dirname, 'public')) );
app.use('/usuarios', rotasDeUsuario);


app.listen(38000, '0.0.0.0', () => console.log('running'));






/* const conexao = require('./src/helpers/banco');

//console.log(conexao.statistics());
conexao.query("SELECT * FROM tb_cursos", (err, res) => {
    console.log(res);
});
*/
