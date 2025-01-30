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

      // Agregar el event listener inmediatamente después de agregar el div al DOM
      newDiv.addEventListener("click", function () {
        // URL a la que quieres redirigir
        const urlDestino = "https://data.umsa.bo/";

        // Abrir la URL en una nueva pestaña
        window.open(urlDestino, "_blank");
      });
    } else {
      console.error("El elemento 'header.form-header' no se encontró en el DOM.");
    }
  });


  //=========================================
  //Definir el logo
  document.addEventListener("DOMContentLoaded", () => {
    const EL_LOGO = document.querySelector(".form-header__branding");
    EL_LOGO.setAttribute("style", "background-image: url('/images/logo-horizontal.svg') !important;");
  });


  console.log("=============================================");
  console.log("equipo Data-Umsa:");
  console.log("Fabian, Andres, Ricardo, Raquel, Jhoseline");
  console.log("=============================================");
})();