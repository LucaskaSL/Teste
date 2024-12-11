const Sequelize = require('sequelize')
const sequelize = new Sequelize('teste', 'root', 'lucas156164Kll#', {
    host: "localhost",
    dialect: "mysql"
})
sequelize.authenticate().then(function(){
    console.log("Conectado com sucesso")
}).catch(function(erro){
    console.log("Erro ao se conectar "+erro)
})

const Postagem = sequelize.define('postagens',{
    titulo:{
        type: Sequelize.STRING
    },
    comentario:{
        type: Sequelize.TEXT
    }
})
Postagem.create({
    titulo: "Meu Pau na sua Mão",
    comentario: "Filmaço da zorra"
})
//Postagem.sync({force: true}) depois de criar a tabela, é recomendável tirar essa linha, porque se não, vai criar outra

const Usuario = sequelize.define('usuarios',{
    nome: {
        type: Sequelize.STRING
    },
    email: {
        type: Sequelize.STRING
    },
    idade:{
        type: Sequelize.INTEGER
    }
})
Usuario.create({
    nome: "Lucas Santana Leal",
    email: "lucasksleal@hotmail.com",
    idade: 18
})
Usuario.create({
    nome: "Jorge e Claudia",
    email: "asifjqoiwj@hotmail.com",
    idade: 100
})
//Usuario.sync({force:true})
