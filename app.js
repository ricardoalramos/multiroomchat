/*impoorta conf do servidor*/

var app = require('./config/server');

/*Parametrizar porta de escuta*/

app.listen(3000, function(){    
    console.log('Servidor está Online');

});
