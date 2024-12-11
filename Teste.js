//var soma = require("./Soma")
//console.log("Olá Mundo")
//console.log(soma(3,4))

var http = require('http')
http.createServer(function(req,res){
    res.end("Ola")
}).listen(3000)
console.log("Servidor rodando")