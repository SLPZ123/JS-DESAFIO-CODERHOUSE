//variables
const form = document.getElementById("form");
form.addEventListener("submit", handleSubmit);
//fetch para que se quede en la pagina y no en la libreria
async function handleSubmit(event) {
  event.preventDefault();
  const myForm = new FormData(this);
  const response = await fetch(this.action, {
    method: this.method,
    body: myForm,
    headers: {
      'Accept': 'application/json',
    }
  });
  //alert sweet para el envio de formulario
  if (response.ok) {
    this.reset();Swal.fire({
        title: "Excelente",
        text: "El formulario fue enviado con exito",
        icon: "success",
      });
  }
}
