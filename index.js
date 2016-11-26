var express = require('express');
var app = express();
const PORT = 3000;

app.use('/',express.static(__dirname + '/public'));
app.listen(PORT, function(){
    // Se muestra mensaje de exito
    console.log('Servidor ejecutandose en http://localhost:'+PORT+"/");
})
