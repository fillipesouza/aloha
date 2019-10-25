const express = require('express');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const bodyParser = require('body-parser');
const rotasDeUsuario = require('./src/routes/usuarios');
const path = require('path');
const cookieParser = require("cookie-parser");
const segredo = "AluninhoFeliz";
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());


app.use(express.static(path.join(__dirname, 'public')) );
app.get('/login', (req,res)=>{
    res.sendFile(__dirname + '/public/login.html');
})
app.get('/index', (req,res)=>{
    res.sendFile(__dirname + '/public/main.html');
})
app.get('/', (req,res)=>{   
    const token = req.cookies.token;
    try{
        jwt.verify(token, segredo);
        res.redirect('/index');
    } catch(err){
        res.redirect('/login');
    }
})

app.use('/usuarios', rotasDeUsuario);

app.listen(38000, '0.0.0.0', () => console.log('running'));






/* const conexao = require('./src/helpers/banco');

//console.log(conexao.statistics());
conexao.query("SELECT * FROM tb_cursos", (err, res) => {
    console.log(res);
});
*/
