document.addEventListener("DOMContentLoaded", function () {
  const boton = document.getElementById("mensajeBtn");

  if (boton) {
    boton.addEventListener("click", function () {
      alert("¡Gracias por revisar mi hoja de vida! 😊");
    });
  }
});
