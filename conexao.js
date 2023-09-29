//para fazer a conexão comece criando o modulo sequelize

const Sequelize = require('sequelize');
//lembresse de passar nos parametros: 'nome do BD' , 'usuario', 'senha' , {host: localhost , dialect: 'mysql'}
const sequelize = new Sequelize('crud','root','', {host: "localhost" , dialect: 'mysql'} )

//função de teste de conexão com o banco de dados
sequelize.authenticate().then(function(){
    console.log('Conectado com sucesso')
}).catch(function(erro){
    console.log('não foi possivel fazer a conexão' + erro)
})

//comando para definir tabelas:

const Animal = sequelize.define('animal',{
   
    nome: {type: Sequelize.STRING },
    tipo: {type: Sequelize.STRING },
    idade:{type: Sequelize.INTEGER},
    Cpfdono:{type: Sequelize.STRING }
}) 

const Dono = sequelize.define('dono',{
    cpf: {type: Sequelize.STRING},
    nome: {type: Sequelize.STRING },
    idade: {type: Sequelize.INTEGER},
    endereco:{type: Sequelize.TEXT},
    cell: {type: Sequelize.STRING },
    email:{type: Sequelize.TEXT}
}) 
//comando para criar tabelas [elas estão sendo sycronizadas no banco de dados]:

//Dono.sync({force: true})
//Animal.sync({force: true})


//incerindo dados na tabela: 

//Animal.create({
  //  nome: "toby",
    // tipo: "gato" ,
    // idade:12,
    // Cpfdono: "1402"
 //})

 Dono.create({
    cpf: "1402",
    nome: "wagner" ,
    idade: 15,
    endereco: "rua bonita",
    cell: "20082",
    email: "wag@gmail.com"
})