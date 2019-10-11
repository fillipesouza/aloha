const express = require('express');
const BancoUtils = require('../helpers/bancoUtils');
const Usuario = require('../models/usuario');

const routers = express.Router();


routers.get('/', (req,res) => {
    BancoUtils.select(Usuario.tabela, (usuarios) => {
        res.json(usuarios);
    })
   
});

routers.post('/', (req,res) => {
    const usuario = {rm: 2, nome: 'Paula', curso: 1};
    BancoUtils.insert(usuario, Usuario.tabela);
    res.json("Inserindo usuários");
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
          