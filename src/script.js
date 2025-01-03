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
  modal.id = "modal-fondo";

  modal.innerHTML = `
  <div id="modal-problema">
  <div class="modal-contenido">
    <h2 class="modal-titulo">¡Atención urgente!</h2>
    <p class="modal-mensaje">
      Si tiene problemas con la boleta censal, por favor comuníquese a los siguientes números de contacto
      <strong>inmediatamente</strong> para evitar que se perjudique su matriculación:
    </p>
    <ul class="modal-lista">
      <li>📞 75130638</li>
      <li>📞 78050712</li>
      <li>📞 67157385</li>
      <li>📞 78802660</li>
      <li>📞 77782493</li>
    </ul>
    <button id="cerrar-modal" class="modal-cerrar">Cerrar</button>
  </div>
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
// Selecciona el elemento "article" con la clase "paper" y el modal problema
const articleElement = document.querySelector('article.paper');
const MODAL = document.querySelector(".modal-contenido");

// Crea un nuevo elemento <a>
const newLink = document.createElement('a');

// Configura las propiedades del enlace
newLink.href = 'https://data.umsa.bo/';
newLink.textContent = 'Mas Informacion'; //Descubre Data Umsa
newLink.target = '_blank';
newLink.className = "data-umsa-link";

// Añade el enlace al final del elemento "article"
MODAL.appendChild(newLink);
//articleElement.appendChild(newLink);



//==================================
//comportamiento del boton



/* const botonAnt = document.querySelector("a.previous-page");


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
observer.observe(botonAnt, { attributes: true }); */




});

document.addEventListener("DOMContentLoaded", () => {
  const EL_LOGO = document.querySelector(".form-header__branding");
  EL_LOGO.setAttribute("style", "background-image: url('/images/logo-horizontal.svg') !important;");
});

console.log("equipo Data-Umsa:");
console.log("Fabian, Andres, Ricardo, Raquel, Jhoseline");
  })();