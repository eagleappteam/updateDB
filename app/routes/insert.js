var mongoose = require('mongoose');

module.exports = function(app){
    var dbSistema = mongoose.model('Planosistema')

    app.post('/insert', function(req,res){
        var newPlan = new dbSistema({
            nome: req.body.nome,
            preco: req.body.preco,
            qtdPaginas: req.body.qtdPaginas,
            descricao: req.body.descricao,
            descricaoCompleta: req.body.descricaoCompleta
        })

        newPlan.save(function(err){
            if(err){
               return err;
            }else {
               console.log("Inserido no Banco!")
            }
        })

        res.redirect('/update');
    })
}
