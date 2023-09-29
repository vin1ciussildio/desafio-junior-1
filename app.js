//Projeto do PetShop

//instale o "express" , "sequelizer" eo "hendlebars"

//comando para inportar a biblioteca do express:
const express = require ('express');
//variavel que contem os comandos do express:
const app = express();

//para fazer a conexão comece criando o modulo sequelize

const Sequelize = require('sequelize');

const handlebars = require ('express-handlebars')

//configurações do handlebars
app.engine('handlebars', handlebars({defaultLayout: 'main'}))
app.set('view engine' , 'handlebars')

//lembresse de passar nos parametros: 'nome do BD' , 'usuario', 'senha' , {host: localhost , dialect: 'mysql'}
const sequelize = new Sequelize('crud','root','', {host: "localhost" , dialect: 'mysql'} )


//função de teste de conexão com o banco de dados
sequelize.authenticate().then(function(){
    console.log('Conectado com sucesso')
}).catch(function(erro){
    console.log('não foi possivel fazer a conexão' + erro)
})

//rota de casdastro teste:
app.get('/cad',function(req,res) {res.send('rota de cadastro de pets')})




//comando que diz a porta de onde a aplicação web vai funcionar [deve ser o ultimo comando da pagina]
app.listen(8081,function(){console.log('o servidor está funcionando')})
app.set('view engine' , 'handlebars')

