(() => {
  const headerElement = document.querySelector('header.form-header');
  
  if (headerElement) {
    const newDiv = document.createElement('div');
    
    newDiv.textContent = "Reportar un problema"; // Texto dentro del div
    newDiv.className = "nuevo-div"; // Clase CSS para el nuevo div
    newDiv.id = "boton-problema";
    
    headerElement.appendChild(newDiv);
  } else {
    console.error("El elemento 'header.form-header' no se encontró en el DOM.");
  }
  



// Desarrollo del modal:
  // Esperar a que el DOM esté cargado
document.addEventListener("DOMContentLoaded", () => {
  // Crear el modal
  const modal = document.createElement("div");
  modal.id = "modal-problema";

  modal.innerHTML = `
  <div class="modal-contenido">
    <h2 class="modal-titulo">¡Atención urgente!</h2>
    <p class="modal-mensaje">
      Si tiene problemas con la boleta censal, por favor comuníquese a los siguientes números de contacto
      <strong>inmediatamente</strong> para evitar que se perjudique su matriculación:
    </p>
    <ul class="modal-lista">
      <li>📞 123-456-789</li>
      <li>📞 987-654-321</li>
    </ul>
    <button id="cerrar-modal" class="modal-cerrar">Cerrar</button>
  </div>
  `;

  // Agregar el modal al body
  document.body.appendChild(modal);

  // Referencia al botón que activa el modal
  const boton = document.getElementById("boton-problema");

  // Mostrar el modal al hacer clic en el botón
  boton.addEventListener("click", () => {
    modal.style.display = "block";
  });

  // Cerrar el modal al presionar el botón de cierre
  const cerrarModal = document.getElementById("cerrar-modal");
  cerrarModal.addEventListener("click", () => {
    modal.style.display = "none";
  });
});


  
  })();