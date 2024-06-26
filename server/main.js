var express = require('express');
var app = express();
/* como trabajaremos con socket, es recomendable usar el modulo HTTP para pasarle la app a express y manejar bien http */
var server = require('http').Server(app);

/* * aqui estara toda la funcionalidad de los sockets
    * se requiere librerias socket.io
    * se pasa la variable server que tiene la app express y HTTP */

var io = require('socket.io')(server);


/*Usamos un middleware para user elementos estaticos en la seccion publica de la aplicacion*/
app.use(express.static('public'));



app.get('/', function(req, res){
res.status(200).send('Hola Mundo');
});


io.on('connection', function(socket){
    console.log('Alguien se ha conectado con socket')
    /*Aqui controlamos los eventos del cliente mediante sockets*/
    socket.emit('messages', {
        id:1,
        texto: "Hola soy un mensaje",
        autor: "David Alexis Bustillos Aguirre"
    })
});

server.listen(3002, function(){
    console.log("El servidor esta corriendo en http://localhost:3002");
});
