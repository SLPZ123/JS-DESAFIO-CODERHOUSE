//variables
let colgante;
let arito2;
let arito3;
let arito4;
let jarra;
let mate;

//Precios colgante
function precioColgante() {
  do {
    colgante = parseFloat(prompt("Ingresa el precio del colgante mayor a 600"));
  } while (isNaN(colgante));
  if (colgante >= 600) {
    alert("El precio establecido para el producto es " + colgante);
  } else {
    alert("El valor ingresado es incorrecto, ingrese un nuevo valor");
  }
}
while (isNaN(colgante) || colgante < 600);
//fin funcion precioColgante
precioColgante();

//Precio Arito2
function precioArito2() {
  do {
    arito2 = parseFloat(
      prompt("Ingresa el precio del Arito-Banda mayor a 200")
    );
  } while (isNaN(arito2));
  if (arito2 >= 200) {
    alert("El precio establecido para el producto es " + arito2);
  } else {
    alert("El valor ingresado es incorrecto, ingrese un nuevo valor");
  }
}
while (isNaN(arito2) || arito2 < 200);
//fin funcion precioArito2
precioArito2();

//Precio arito3
function precioArito3() {
  do {
    arito3 = parseFloat(
      prompt("Ingresa el precio del Arito-Corazon mayor a 200")
    );
  } while (isNaN(arito3));
  if (arito3 >= 200) {
    alert("El precio establecido para el producto es " + arito3);
  } else {
    alert("El valor ingresado es incorrecto, ingrese un nuevo valor");
  }
}
//fin funcion precioArito3
while (isNaN(arito3) || arito3 < 200);

precioArito3();

//Precio arito4
function precioArito4() {
  do {
    arito4 = parseFloat(
      prompt("Ingresa el precio del Arito-Pintura mayor a 200 ")
    );
  } while (isNaN(arito4));
  if (arito3 >= 200) {
    alert("El precio establecido para el producto es " + arito4);
  } else {
    alert("El valor ingresado es incorrecto, ingrese un nuevo valor");
  }
}
while (isNaN(arito4) || arito4 < 200);
precioArito4();

//Precio jarra
function precioJarra() {
  do {
    jarra = parseFloat(prompt("Ingresa el precio de la Jarra  mayor a 1000"));
  } while (isNaN(jarra));
  if (jarra >= 1000) {
    alert("El precio establecido para el producto es " + jarra);
  } else {
    alert("El valor ingresado es incorrecto, ingrese un nuevo valor");
  }
}
while (isNaN(jarra) || jarra < 1000);

precioJarra();

//Precio  mate
function precioMate() {
  do {
    mate = parseFloat(prompt("Ingresa el precio del mate  mayor a 400"));
  } while (isNaN(mate));
  if (mate >= 400) {
    alert("El precio establecido para el producto es " + mate);
  } else {
    alert("El valor ingresado es incorrecto, ingrese un nuevo valor");
  }
}
while (isNaN(mate) || mate < 400);

precioMate();

/*simulador compras */

function agregarCarrito() {
  let inicio = 0;
  let codigo;
  //pedir codigo del producto
  do {
    codigo = parseInt(
      prompt(
        "****Tienda Artesanal Mambo Mistico****\n  Ingrese el codigo del producto que desea obtener(1-6).\n Para finalizar la compra ingrese el numero 7"
      )
    );
    //switch productos
    switch (codigo) {
      case 1:
        inicio += colgante;
        break;

      case 2:
        inicio += arito2;
        break;

      case 3:
        inicio += arito3;
        break;

      case 4:
        inicio += arito4;
        break;

      case 5:
        inicio += jarra;
        break;

      case 6:
        inicio += mate;
        break;
      case 7:
        //total de la compra
        alert(
          "El total de la compra es: $ " + inicio + "\nGracias por su compra"
        );
        break;
      default:
        alert("La opcion ingresado no es correcta");
    }
    //fin de switch
  } while (isNaN(codigo) || codigo != 7);
}
//fin de la funcion

agregarCarrito();
