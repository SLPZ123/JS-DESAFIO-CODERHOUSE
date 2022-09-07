//productos
let productos = [
  { id: 1, nombre: "1-colgante", precio: 1000 },
  { id: 2, nombre: "2-AritoA", precio: 500 },
  { id: 3, nombre: "3-AritoB", precio: 500 },
  { id: 4, nombre: "4-AritoC", precio: 500 },
  { id: 5, nombre: "5-Jarra", precio: 1200 },
  { id: 6, nombre: "6-Mate", precio: 800 },
];

let carrito = [];
let acceder = prompt(
  "****Tienda Artesanal Mambo Mistico****\n Desea hacer una compra?"
);
while (acceder != "si" && acceder != "no") {
  alert("Por favor ingresar si o no");
  acceder = prompt("Desea comprar algo si/no");
}
if (acceder == "si") {
  //mostrar precios de los productos
  let todoslosProductos = productos.map(
    (productos) => productos.nombre + " " + productos.precio + "$"
  );
  alert("Nuestros productos\n" + todoslosProductos.join(" - "));
} else if ((acceder = "no")) {
  alert("Gracias por visitar la pagina,nos vemos pronto");
}
console.log(acceder);

/*agregar carrito */

function agregarCarrito(productos) {
  let inicio = 0;
  let codigo = parseInt(
    prompt(
      "****Tienda Artesanal Mambo Mistico****\n  Ingrese el codigo del producto que desea obtener(1-6).\n Para finalizar la compra ingrese el numero 7"
    )
  );
  //pedir codigo del producto
  while (isNaN(codigo) || codigo != 7) {
    inicio += productos[codigo - 1]["precio"];
    codigo = parseInt(
      prompt(
        "****Tienda Artesanal Mambo Mistico****\n  Ingrese el codigo del producto que desea obtener(1-6).\n Para finalizar la compra ingrese el numero 7"
      )
    );
  }
  alert("El total de la compra es: $ " + inicio + "\nGracias por su compra");
}

//fin de la funcion*/

agregarCarrito(productos);
