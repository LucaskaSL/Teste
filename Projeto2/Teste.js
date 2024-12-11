//var soma = require("./Soma")
//console.log("Olá Mundo")
//console.log(soma(3,4))
//module.export(função) serve para eu poder exportar uma função que está em outro arquivo

/*var http = require('http')
http.createServer(function(req,res){
    res.end("Ola")
}).listen(3000)
console.log("Servidor rodando") */ //basicamente aqui é a criação dum servidor e a mensagem e porta

const express = require("express");
const app = express();
const handlebars = require("express-handlebars")
const sequelize = require("sequelize")

//Config
  //Template Engine
  app.engine('handlebars', handlebars({defaultLayout: 'main'}))
  app.set('view engine', 'handlebars')
  //Conexão com Mysql
  const Sequelize = require('sequelize')
  const sequelize = new Sequelize('teste', 'root', 'lucas156164Kll#', {
    host: "localhost",
    dialect: "mysql"
})

app.listen(3002, function(){
    console.log("Servidor rodando na url http://localhost:3002")
})