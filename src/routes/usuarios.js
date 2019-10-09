const express = require('express');
const routers = express.Router();


routers.get('/', (req,res) => {
    res.json("Retornando Usuários");
});

routers.post('/', (req,res) => {
    res.json("Inserindo usuários");
})

routers.put('/', (req,res) => {
    res.json("Modificando usuários");
})

routers.delete('/', (req,res) => {
    res.json("Removendo usuários");
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
          