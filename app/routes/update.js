var mongoose = require('mongoose');

module.exports = function(app){
    var dbSistema = mongoose.model('Planosistema')
    var dbSite = mongoose.model('Planosite')
    var dbBlog = mongoose.model('Planoblog')
    var dbLoja = mongoose.model('Planoloja')

    app.get('/update', function(req,res){

        dbSistema.find().exec((err, data) => {
            if(!err){
                dbSite.find().exec((err2, data2) => {
                    if(!err2)
                    {
                        dbBlog.find().exec((err3, data3) => {
                            if(!err3){
                                dbLoja.find().exec((err4, data4) => {
                                    if(!err4){
                                        res.render('update',{sistema:data, site:data2, blog:data3, loja:data4});
                                    }else {
                                        res.json(err4);
                                    }
                                })
                            }else {
                                res.json(err3);
                            }
                        })
                    }else {
                        res.json(err2);
                    }
                })
            }
            else
                res.json(err);
            });

    })
}
