const carritoDeCompras = []
const precioTotal=document.getElementById("precioTotal")
//localStorage
document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('carritoDeCompras')){
        carritoDeCompras = JSON.parse(localStorage.getItem('carritoDeCompras'))
        actualizarCarrito()
    }
})
const carritoIndex = (productoId)=>{

    const contenedorCarrito = document.getElementById("carrito-contenedor");
    let contadorCarrito = document.getElementById("contador-carrito");

    const renderProductosCarrito = ()=> {
        let producto  = productos.find( producto => producto.id == productoId )
        carritoDeCompras.push(producto)
        console.log(carritoDeCompras);

        producto.cantidad = 1
        cantidadContadorCarrito += 1;
        contadorCarrito.innerHTML = cantidadContadorCarrito;

        let div = document.createElement("div")
        div.classList.add("productoEnCarrito")

        div.innerHTML = `<p>${producto.nombre}</p>
                        <p>Precio: ${producto.precio}</p>
                        <p id="cantidad${producto.id}">Cantidad: ${producto.cantidad}</p>
                        <button id="eliminar${producto.id}" class="boton-eliminar" ><img src="./assets/img/basura.png" class="basura"/></button>`;
        contenedorCarrito.appendChild(div);
        localStorage.setItem('carritoDeCompras',JSON.stringify(carritoDeCompras))

        const existe = carritoDeCompras.some (producto => producto.id === productoId) 

    if (existe){
        const producto = carritoDeCompras.map (prod => {

            if (producto.id === productoId){
                producto.cantidad++
            }
        })
    } else {
        const item = productos.find((producto) => producto.id === productoId)

        carrito.push(item)
    }
 
    actualizarCarrito() 
    
//borrar elemento por boton basura
        const borrarElemento = document.getElementById("eliminar"+producto.id);
        borrarElemento.addEventListener('click', ()=>{
            cantidadContadorCarrito -= 1;
            contadorCarrito.innerHTML = cantidadContadorCarrito;
            let myself = document.getElementById("eliminar"+producto.id);
            let parent = myself.parentElement;
            parent.remove();
        })


    }

    renderProductosCarrito()

    precioTotal.innerText = carritoDeCompras.reduce((acc,producto)=>acc +producto.precio,0)
}


