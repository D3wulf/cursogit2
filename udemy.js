//uso de la propiedad arguments


function miFuncion(a,b,c,d){

    if(arguments.length !== 4){
        console.error("lafuncion necesita 4 parametros");
        //no olvidar el return
        return;
    }
    console.log(a + b + c + d);

}
//los argumentos son los que damos, no los que se piden en la funcion
miFuncion(10,20,30,40);


//sobrecarga de operadores


function crearProducto(nombre, precio){

    nombre= nombre || "sin nombre.";
    precio = precio || 0;

    console.log ("Producto : " , nombre, " Precio: ", precio);


}

// para cambios de la funcion anterior sin tener que tocarla

function crearProducto100(nombre){

    crearProducto(nombre,100);
};
function crearCamisa(precio){

    crearProducto("camisa", precio);
};

console.log(crearProducto("lapiz"));
console.log(crearProducto100("compresor"));
console.log(crearCamisa(50));

//polimorfismo

function determinaDato( a ){
    if(a=== undefined){

        console.log("que carajo");
    }
    if (typeof a === "number"){

        console.log("a es un numero");
    }
    if (typeof a === "string"){

        console.log("a es una cadena de texto");
    }
    if (typeof a === "object"){

        console.log("a es un objeto");

        if(a instanceof Number){
            console.log(" A es un objeto numerico");
        }
    }


}

determinaDato({
    nombre:"mario"
});

var b = new Number(3);
console.log(b);
determinaDato(b);

//funciones y contexto
//
function crearFunciones(){
    var matriz=[];
    var numero = 1;

    for ( var numero =1 ; numero <=10; numero++){

        matriz.push(

            (function(numero){
    
                return function(){
                    console.log(numero);
                }
            })(numero)
            
        );


    }

    

    
    return matriz;
}

var funciones = crearFunciones();
funciones[0]();
funciones[1]();
funciones[2]();

//objetos tipo numero

var a = 10;
//var b = new Number(10);

// a == b pero no a === b
//a.toFixed(2); redondea a 2 decimales (en caso que haya decimales)
//a.toPrecision(4) deja 4 caracteres, empezando por los no decimales, iz a der
var b = new Number("20");
//retorno del valor primitivo de un objeto
console.log (b.valueOf());

//objeto booleano
var c= true;
var d = false;
//inicializara false en numeros negativos, nulls, undefined
var f = new Boolean();

//objeto string
//indexOf("string") coge la posicion del primera ocurrencia
//lastIndexOf("string") coge la ultima
//var.substr (posicion index, numero de posiciones que cogemos)
//var.split(indice de ruptura)
//var.split.length(); te dice las separaciones que tiene la variable

//Objeto fecha
var hoy = new Date();

//fecha milisegundos
var fechaMilisegundos = new Date(1);
//recibe 7 argumentos ( año, mes, dia, hora, minuto, segundo, milisegundo) los meses son en base 0
//var fechaFija = new Date(2020,9,21,x,x,x,x)

console.log (hoy.getFullYear());
console.log(hoy.getMinutes());

//para calcular lo que tarda un proceso se hace un imprimir fecha en el inicio y otro en el final del proceso y se calculan segundos

//operaciones con fechas

var fecha = new Date(2020, 9, 20);

//suma de fecha
//fecha.setDate ( 25 ); -> pone el dia entre parentesis

//aqui si suma dias, puedes restar y usar para años tb

Date.prototype.sumarDias = function(dias) {

    this.setDate( this.getDate()  + dias);
    return this;

};

Date.prototype.sumaranios = function(anios) {

    this.setDate( this.getUTCFullYear()  + anios);
    return this;

};

//luego un console log y a correr
