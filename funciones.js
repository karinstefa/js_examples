// Declarativas

function miFuncion() {
   return 3;
}

miFuncion();

// Expresión , expresivas

var miFuncion = function(a,b) {
    return a+b;
}


miFuncion(2,3);

//-----------------------------------------------------
//Funciones Declarativas:
//En las funciones declarativas, utilizamos la palabra reservada
// function al inicio para poder declarar la función:

function saludar(nombre) {
	console.log(`Hola ${nombre}`);
}

saludar('Diego');

//-----------------------------------------------------
//Expresión de función:
//En la expresión de función, la declaración se inicia con la
// palabra reservada var, donde se generará una variable que guardará una función anónima.

var nombre = function(nombre){
    console.log(`Hola ${nombre}`)
}

nombre('Diego');





