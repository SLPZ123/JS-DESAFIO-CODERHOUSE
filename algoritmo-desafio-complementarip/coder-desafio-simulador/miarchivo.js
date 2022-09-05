//array de precio
const precio=[0,0,0,0,0,0,];
console.log(precio.length);


//Precios colgante
function precioColgante() {
  do {
    precio[0] = parseFloat(prompt("Ingresa el precio del colgante mayor a 600"));

  if (precio[0] >= 600) {
    alert("El precio establecido para el producto es " + precio[0]);
  } else {
    alert("El valor ingresado es incorrecto, ingrese un nuevo valor");
  }
}
while (isNaN(precio[0]) || precio[0] < 600);
}
//fin funcion precioColgante
precioColgante();

//Precio Arito2
function precioArito2() {
  do {
    precio[1] = parseFloat(
      prompt("Ingresa el precio del Arito-Banda mayor a 200")
    );

  if (precio[1] >= 200) {
    alert("El precio establecido para el producto es " + precio[1]);
  } else {
    alert("El valor ingresado es incorrecto, ingrese un nuevo valor");
  }
}
while (isNaN(precio[1]) ||precio[1] < 200);
}
//fin funcion precioArito2
precioArito2();

//Precio arito3
function precioArito3() {
  do {
    precio[2] = parseFloat(
      prompt("Ingresa el precio del Arito-Corazon mayor a 200")
    );

  if ( precio[2] >= 200) {
    alert("El precio establecido para el producto es " +  precio[2]);
  } else {
    alert("El valor ingresado es incorrecto, ingrese un nuevo valor");
  }
}
//fin funcion precioArito3
while (isNaN( precio[2]) || precio[2] < 200);
}

precioArito3();

//Precio arito4
function precioArito4() {
  do {
    precio[3] = parseFloat(
      prompt("Ingresa el precio del Arito-Pintura mayor a 200 ")
    );

  if ( precio[3] >= 200) {
    alert("El precio establecido para el producto es " +  precio[3]);
  } else {
    alert("El valor ingresado es incorrecto, ingrese un nuevo valor");
  }
}
while (isNaN( precio[3]) || precio[3] < 200);
}
precioArito4();

//Precio jarra
function precioJarra() {
  do {
    precio[4] = parseFloat(prompt("Ingresa el precio de la Jarra  mayor a 1000"));

  if (precio[4]>= 1000) {
    alert("El precio establecido para el producto es " + precio[4]);
  } else {
    alert("El valor ingresado es incorrecto, ingrese un nuevo valor");
  }
}
while (isNaN(precio[4]) || precio[4] < 1000);
}

precioJarra();

//Precio  mate
function precioMate() {
  do {
    precio[5] = parseFloat(prompt("Ingresa el precio del mate  mayor a 400"));

  if (precio[5] >= 400) {
    alert("El precio establecido para el producto es " + precio[5]);
  } else {
    alert("El valor ingresado es incorrecto, ingrese un nuevo valor");
  }
}
while (isNaN(precio[5]) || precio[5] < 400);
}

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
    //switch precio
    switch (codigo) {
      case 1:
        inicio += precio[0];
        break;

      case 2:
        inicio += precio[1];
        break;

      case 3:
        inicio += precio[2];
        break;

      case 4:
        inicio += precio[3];
        break;

      case 5:
        inicio += precio[4];
        break;

      case 6:
        inicio += precio[5];
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
