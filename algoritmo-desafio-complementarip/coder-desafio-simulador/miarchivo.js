
//variables
let colgante;
let arito2;
let arito3;
let arito4;
let jarra;
let mate;



//Precios
function precioColgante(){
    do{
    colgante = parseFloat( prompt("Ingresa el precio del colgante" ));
    }while(isNaN(colgante));
if(colgante >=600){
alert("El precio establecido para el producto es"+ colgante);
}else{
alert("El valor ingresado es incorrecto, ingrese un nuevo valor")
}
//fin funcion precioColgante
}
precioColgante();


function precioArito2(){
    do{
    arito2 = parseFloat( prompt("Ingresa el precio del Arito-Banda" ));
    }while(isNaN(arito2));
if(arito2 >=200){
alert("El precio establecido para el producto es"+ arito2);
}else{
alert("El valor ingresado es incorrecto, ingrese un nuevo valor")
}
//fin funcion precioArito2
}
precioArito2();

function precioArito3(){
    do{
    arito3 = parseFloat( prompt("Ingresa el precio del Arito-Corazon" ));
    }while(isNaN(arito3));
if(arito3 >=200){
alert("El precio establecido para el producto es"+ arito3);
}else{
alert("El valor ingresado es incorrecto, ingrese un nuevo valor")
}
//fin funcion precioArito3
}
precioArito3();


function precioArito4(){
    do{
    arito4 = parseFloat( prompt("Ingresa el precio del Arito-Pintura" ));
    }while(isNaN(arito4));
if(arito3 >=200){
alert("El precio establecido para el producto es"+ arito4);
}else{
alert("El valor ingresado es incorrecto, ingrese un nuevo valor")
}
//fin funcion precioArito4
}
precioArito4();



function precioJarra(){
    do{
    jarra = parseFloat( prompt("Ingresa el precio de la Jarra" ));
    }while(isNaN(jarra));
if(jarra >=1000){
alert("El precio establecido para el producto es"+ jarra);
}else{
alert("El valor ingresado es incorrecto, ingrese un nuevo valor")
}
//fin funcion precioJarra
}

precioJarra();

function precioMate(){
    do{
    mate = parseFloat( prompt("Ingresa el precio del mate" ));
    }while(isNaN(mate));
if(mate >=400){
alert("El precio establecido para el producto es"+ mate);
}else{
alert("El valor ingresado es incorrecto, ingrese un nuevo valor")
}
//fin funcion precioMate
}
precioMate();








/*simulador compras */



function agregarCarrito(){
    let inicio=0;
    let codigo;
    //pedir codigo del producto
    do{
    let codigo= parseInt (prompt("****Tienda Artesanal Mambo Mistico****\n  Ingrese el codigo del producto que desea obtener.\n Para finalizar la compra ingrese el numero 7"));
     //switch productos
     switch(codigo){
        case 1:
             inicio= inicio + colgante;
        break;

        case 2:
            inicio= inicio + arito2;
        break;

        case 3:
            inicio= inicio + arito3;
        break;

        case 4:
            inicio= inicio + arito4;
        break;

        case 5:
            inicio= inicio + jarra;
        break;

        case 6:
            inicio= inicio + mate;
        break;
        case 7:
            //total de la compra
            alert("El total de la compra es:"+inicio+"\nGracias por su compra")
        default:
            alert("El valor ingresado es incorrecto")
     }
     //fin de switch
}
     while(isNaN(codigo)|| codigo!=7);

     }
        //fin de la funcion

        agregarCarrito();