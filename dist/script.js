document.addEventListener("DOMContentLoaded",()=>{let e=document.querySelector("header.form-header");if(e){let o=document.createElement("div");o.textContent="¿Necesitas Ayuda?",o.className="nuevo-div",o.id="boton-problema",e.appendChild(o),o.addEventListener("click",function(){window.open("https://data.umsa.bo/","_blank")})}else console.error("El elemento 'header.form-header' no se encontró en el DOM.")}),document.addEventListener("DOMContentLoaded",()=>{document.querySelector(".form-header__branding").setAttribute("style","background-image: url('/images/logo-horizontal.svg') !important;")}),console.log("============================================="),console.log("equipo Data-Umsa:"),console.log("Fabian, Andres, Ricardo, Raquel, Jhoseline"),console.log("=============================================");