const express = require('express');
const jwt = require('jsonwebtoken');
const BancoUtils = require('../helpers/bancoUtils');
const Usuario = require('../models/usuario');
const UsuarioDAO = require('../models/usuarioDAO');
const Utils = require('../helpers/utils');
const segredo = "AluninhoFeliz";
const routers = express.Router();


routers.post('/auth', (req,res) => {
   const usuario = new Usuario({rm: '3', nome: 'Raquel'});
   usuario.setarSenha('thais123');
   new UsuarioDAO().buscaPorUsuarioESenha(usuario, (resposta) => {
    
    if(resposta.length > 0){
        const token = jwt.sign({ nome: resposta.nome }, segredo, {expiresIn: '1h'});
        res.json(token);
    } else {
        res.status(404).end('Nao Encontrado');
    }
  });
   
})

routers.get('/', (req,res) => {
    BancoUtils.select(Usuario.tabela, (usuarios) => {
        res.json(usuarios);
    })
   
});

routers.post('/', (req,res) => {
    const usuario = {rm: 2, nome: 'Paula', curso: 1};
    BancoUtils.insert(usuario, Usuario.tabela, (r) => {
        res.json(r);
    });
})

routers.put('/', (req,res) => {
    const usuarioNovo = new Usuario({rm: 2, nome: "Carla", curso: 1});
    BancoUtils.put(usuarioNovo, Usuario.tabela, {key: 'rm', value: 2}, (r) => {
        res.json(r);
    });
})

routers.delete('/', (req,res) => {
    BancoUtils.delete(Usuario.tabela, {key: 'rm', value: 2}, (r) => {
        res.json(r);
    });
})
module.exports = routers;




/**
 * C --> Create  (SQL: INSERT)
 * R --> Read    (SQL: SELECT)
 * U --> Update  (SQL: UPDATE)
 * D --> Delete  (SQL: DELETE)
 */
  /**
   * REST (usando HTTP)
   * C --> POST
   * R --> GET
   * U --> PUT
   * D --> DELETE
   */ 
          