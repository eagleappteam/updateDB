var mongoose = require('mongoose')

var schema = mongoose.Schema({
        nome: {
            type: String,
            required:  true
        },
        preco: {
             type: Number,
             required: true
         },
        qtdPaginas: {
            type: Number,
            required: true
        },
        descricao: {
            type: String,
            required: true
        },
        descricaoCompleta:{
            type : String,
            required : true
        },
        createdIn: {
            type: Date,
            default: Date.now()
        },
        done: {
            type: Boolean,
            default : false
        }
    });

    mongoose.model('Planosite', schema);
    mongoose.model('Planosistema', schema);
    mongoose.model('Planoblog', schema);
    mongoose.model('Planoloja', schema);
