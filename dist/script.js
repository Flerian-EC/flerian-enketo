document.addEventListener("DOMContentLoaded",()=>{let e=document.querySelector("header.form-header");if(e){let t=document.createElement("div");t.textContent="¿Necesitas Ayuda?",t.className="nuevo-div",t.id="boton-problema",e.appendChild(t)}else console.error("El elemento 'header.form-header' no se encontró en el DOM.")}),document.addEventListener("DOMContentLoaded",()=>{let e=document.createElement("div");e.id="modal-problema",e.innerHTML=`
  <div class="modal-contenido">
    <h2 class="modal-titulo">\xa1Atenci\xf3n urgente!</h2>
    <p class="modal-mensaje">
      Si tiene problemas con la boleta censal, por favor comun\xedquese a los siguientes n\xfameros de contacto
      <strong>inmediatamente</strong> para evitar que se perjudique su matriculaci\xf3n:
    </p>
    <ul class="modal-lista">
      <li>\u{1F4DE} 69877418</li>
      <li>\u{1F4DE} 74039410</li>
      <li>\u{1F4DE} 67157385</li>
      <li>\u{1F4DE} 78802660</li>
      <li>\u{1F4DE} 77782493</li>
    </ul>
    <button id="cerrar-modal" class="modal-cerrar">Cerrar</button>
  </div>
  `,document.body.appendChild(e),document.getElementById("boton-problema").addEventListener("click",()=>{e.style.display="block"}),document.getElementById("cerrar-modal").addEventListener("click",()=>{e.style.display="none"})}),document.addEventListener("DOMContentLoaded",()=>{let e=document.querySelector("article.paper"),t=document.createElement("a");t.href="https://data.umsa.bo/",t.textContent="Descubre Data Umsa",t.target="_blank",t.className="data-umsa-link",e.appendChild(t);let a=document.querySelector("a.previous-page");new MutationObserver(e=>{e.forEach(e=>{"class"!==e.attributeName||a.classList.contains("disabled")||(t.style.display="none")})}).observe(a,{attributes:!0}),new MutationObserver(e=>{e.forEach(e=>{"class"===e.attributeName&&a.classList.contains("disabled")&&(t.style.display="block")})}).observe(a,{attributes:!0})});