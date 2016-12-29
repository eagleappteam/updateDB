var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/eagleAppDB');

mongoose.connection.on('connected', function(){
    console.log("Conectado ao mongodb");
})

mongoose.connection.on('error', function(error){
    console.log("Erro na conexão: " + error);
})

mongoose.connection.on('disconnect', function(){
    console.log("Desconectado ao mongodb");
})

process.on('SIGINT', function(){

    mongoose.connection.close(function(){
        console.log("Conexão fechada pelo término da aplicação");
        process.exit(0);
    })
})
