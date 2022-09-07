//productos
let productos = [
  { id:1,"nombre":"colgante", "precio":1000},
  {id:2,"nombre":"AritoA","precio":500},
  {id:3,"nombre":"AritoB" ,"precio":500 },
  {id:4,"nombre":"AritoC","precio":500},
  { id:5,"nombre":"Jarra","precio":1200},
  {id:6,"nombre":"Mate","precio":800}]

  let carrito=[]
  let acceder = prompt("****Tienda Artesanal Mambo Mistico****\n Desea hacer una compra?")
  while(acceder != "si" && acceder != "no"){
    alert("Por favor ingresar si o no")
    acceder = prompt("Desea comprar algo si/no")
  }
  if(acceder == "si"){
//mostrar precios de los productos
    let todoslosProductos = productos.map((productos)=>productos.nombre + " "+ productos.precio + "$");
  alert("Nuestros productos\n"+todoslosProductos.join(" - "));
  }
  else if(acceder = "no"){
    alert("Gracias por visitar la pagina,nos vemos pronto")
  }
console.log(acceder);
/*simulador compras */

function agregarCarrito(productos) {
  let inicio = 0;
  let codigo;
  codigo = parseInt(
    prompt(
      "****Tienda Artesanal Mambo Mistico****\n  Ingrese el codigo del producto que desea obtener(1-6).\n Para finalizar la compra ingrese el numero 7"));
  //pedir codigo del producto
  do {
    inicio += productos[codigo-1]['precio'];
 }
    while (isNaN(codigo) || codigo != 7);
    alert(
      "El total de la compra es: $ " + inicio + "\nGracias por su compra"
    );


  }

//fin de la funcion*/

agregarCarrito(productos);

//formas de pago


opcionDePago = parseInt(prompt(`Ingresa tu opción de pago - Formas de Pago:
1- Efectivo y/o tranferencia (10% de descuento)
2- Tarjetas de Débito o Tarjetas de Crédito en 1 pago
3- Ahora3 - 3 cuotas con interés del 10% 
4- Ahora6 - 6 cuotas con interés del 20% 
5- Ahora12 - 12 cuotas con interés del 30%` 
));

while(opcionValida===0) {
    switch(opcionDePago){
        case 1: {
            calcular(inicio,0.9);
            alert(`En efectivo el total a pagar es de ${resultado} pesos`);
            opcionValida=1;
            break;
        }
        case 2: {
            calcular(inicio,1);
            alert(`Con débito o crédito el total a pagar es de ${resultado} pesos en 1 pago`);
            opcionValida=1;
            break;
        }
        case 3: {
            calcular(inicio,1.1);
            calculoDeCuota(3);
            alert(`Plan de 3 cuotas: 
            El total a pagar es de ${resultado} pesos.
            3 cuotas fijas de ${cuota} pesos`);
            opcionValida=1;
            break;
        }
        case 4: {
            calcular(total,1.2);
            calculoDeCuota(6);
            alert(`Plan de 6 cuotas: 
            El total a pagar es de ${resultado} pesos.
            6 cuotas fijas de ${cuota} pesos.`);
            opcionValida=1;
            break;
        }
        case 5: {
            calcular(total,1.3);
            calculoDeCuota(12);
            alert(`Plan de 12 cuotas: 
            El total a pagar es de ${resultado} pesos.
            12 cuotas fijas de ${cuota} pesos.`);
            opcionValida=1;
            break;
        }
        default: {
            alert("Opción inválida");
        }
    opcionDePago = parseInt(prompt(`Ingresa tu opción de pago - Formas de Pago:
    1- Efectivo (10% de descuento)
    2- Tarjetas de Débito o Tarjetas de Crédito en 1 pago
    3- Ahora3 - 3 cuotas con interés del 10% 
    4- Ahora6 - 6 cuotas con interés del 20% 
    5- Ahora12 - 12 cuotas con interés del 30%`));
    }
}

    }