
/*Creamos la variable que permitira al frontend conectarse a nuestro backend*/ 
var socket = io.connect('http://localhost:3002', {'forceNew':true});

/*Esto manda al servidor el mensaje de connect y aparece en console.log */


socket.on('messages', function(data){
    console.log(data);
    reder(data);
});


/* Creamos un template para que nos imprima el contenido*/
function reder(data){
    //Aqui se inicia el manejo de string que viene en EMG se usan estas comillas ''
    //Las variables se colocan con el signo de $ y entre {}
    var html = '<div> <strong>${data.autor}</strong> <em>${data.texto}</em> </div>';
        document.getElementById('messages').innerHTML = html;
}

//cada ves que alguien precione el  boton enviar en el formulario
//el cliente emite un nuevo mensaje y manda el payload

function addMessage(e){
    var payload = {
        autor: document.getElementById(username).value,
        texto: document.getElementById(texto).value
    };
    sockket.emit('new-message', payload);
    return false;
}