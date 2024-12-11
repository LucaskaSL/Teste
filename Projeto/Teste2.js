const express = require("express");
const app = express();

app.get("/", function(req,res){
    res.sendFile(__dirname + "/teste.html")
})

app.get("/blog/:nome",function(req,res){
    res.sendFile(__dirname + "/rotanome.html")
})

app.get("/ola/:cargo/:nome",function(req,res){
    res.send("<h1>Ola "+req.params.nome+ "</h1>"+"<h2>Seu cargo: "+req.params.cargo+ "</h2>")
    //o send só pode ser usado uma única vez numa rota
})

app.listen(3001, function(){
    console.log("Servidor rodando na url http://localhost:3001")
})