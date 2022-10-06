//agregar alert al seleccionar un producto
function addSweet() {
  let btn = document.getElementsByClassName("btn");
  for (var i = 0; i < btn.length; i++) {
    btn[i].addEventListener("click", () => {
      Swal.fire({
        title: "Excelente",
        text: "Agregado al carrito",
        icon: "success",
      });
    });
  }
}
