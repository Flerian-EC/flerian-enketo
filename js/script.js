(() => {


//agregar el boton "¿Necesitas Ayuda?"
  document.addEventListener("DOMContentLoaded", () => {
    const headerElement = document.querySelector('header.form-header');
  
    if (headerElement) {
      const newDiv = document.createElement('div');
      
      newDiv.textContent = "¿Necesitas Ayuda?"; // Texto dentro del div
      newDiv.className = "nuevo-div"; // Clase CSS para el nuevo div
      newDiv.id = "boton-problema";
      
      headerElement.appendChild(newDiv);
    } else {
      console.error("El elemento 'header.form-header' no se encontró en el DOM.");
    }
  });
  



// Desarrollo del modal:
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
      <li>📞 67157385</li>
      <li>📞 78802660</li>
      <li>📞 74039410</li>
      <li>📞 69877418</li>
      <li>📞 77782493</li>
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



//agregar el boton 'Descubre Data Umsa'
document.addEventListener("DOMContentLoaded", () => {
// Selecciona el elemento "article" con la clase "paper"
const articleElement = document.querySelector('article.paper');

// Crea un nuevo elemento <a>
const newLink = document.createElement('a');

// Configura las propiedades del enlace
newLink.href = 'http://www.google.com';
newLink.textContent = 'Descubre Data Umsa';
newLink.target = '_blank';
newLink.className = "data-umsa-link";

// Añade el enlace al final del elemento "article"
articleElement.appendChild(newLink);



//==================================
//comportamiento del boton
const botonAnt = document.querySelector("a.previous-page");


// Crea una instancia de MutationObserver
const observerSig = new MutationObserver(mutations => {
  mutations.forEach(mutation => {
    if (mutation.attributeName === 'class') {
      // Verifica si la clase "disabled" fue eliminada
      if (!(botonAnt.classList.contains('disabled'))) {
        // Llama a tu función aquí
        newLink.style.display = "none";
      }
    }
  });
});

// Configura el observador para observar cambios en los atributos del elemento
observerSig.observe(botonAnt, { attributes: true });



// Crea una instancia de MutationObserver
const observer = new MutationObserver(mutations => {
  mutations.forEach(mutation => {
    if (mutation.attributeName === 'class') {
      // Verifica si la clase "disabled" fue agregada
      if (botonAnt.classList.contains('disabled')) {
        // Llama a tu función aquí
        newLink.style.display = "block";
      }
    }
  });
});

// Configura el observador para observar cambios en los atributos del elemento
observer.observe(botonAnt, { attributes: true });




});
  
  })();