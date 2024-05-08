
/*Creamos la variable que permitira al frontend conectarse a nuestro backend*/ 
var socket = io.connect('http://localhost:3002', {'forceNew':true});

/*Esto manda al servidor el mensaje de connect y aparece en console.log */