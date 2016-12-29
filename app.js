var app = require('./config/express')();
require('./config/connect')

app.listen(3003, function(){
    console.log('Server Online - Update');

})
