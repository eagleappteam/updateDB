var express = require('express');
var consign = require('consign');
var bodyParser = require('body-parser');

module.exports = function(){
    var app = express();
    app.set('view engine', 'ejs');
    app.set('views', './app/views');
    //app.use(express.bodyParser());

    app.set('view options', {layout: false});
    app.use('/static', express.static('static'));

    // parse application/json
    app.use(bodyParser.json());

    // parse application/x-www-form-urlencoded
    app.use(bodyParser.urlencoded({ extended: true }));


    consign({cwd : 'app'})
        .include('models')
        .then('routes')
        .into(app);

    return app;
}
