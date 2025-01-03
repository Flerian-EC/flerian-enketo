import{a as v,b as p,c as o,d as S,e as b,f as a,g as i,h as f,i as s,l as d,m as k}from"./chunks/chunk-DXHOMGW7.js";import{m as w,n as r}from"./chunks/chunk-ONMNB3GH.js";import"./chunks/chunk-3RPRB7E5.js";function C(e){return"serviceWorker"in navigator?window.addEventListener("load",()=>{navigator.serviceWorker.register(`${r.basePath}/x/offline-app-worker.js`).then(t=>{console.log("Offline application service worker registration successful with scope: ",t.scope),setInterval(()=>{console.log("Checking for offline application cache service worker update"),t.update()},60*60*1e3),t.active&&u(!0),t.addEventListener("updatefound",()=>{let n=t.installing;n.addEventListener("statechange",()=>{n.state==="activated"&&(console.log("New offline application service worker activated!"),document.dispatchEvent(a.ApplicationUpdated()))})})},t=>{console.error("Offline application service worker registration failed: ",t),u(!0)})}):(location.protocol.startsWith("http:")?console.error("Service workers not supported on this http URL (insecure)"):console.error("Service workers not supported on this browser. This form cannot launch online"),u(!1)),Promise.resolve(e)}function u(e=!0){document.dispatchEvent(a.OfflineLaunchCapable({capable:e}))}var m={init:C,get serviceWorkerScriptUrl(){return"serviceWorker"in navigator&&navigator.serviceWorker.controller?navigator.serviceWorker.controller.scriptURL:null}};var U=document.querySelector(".main-loader"),O=document.querySelector(".main > .paper > .form-header"),h={enketoId:r.enketoId,xformUrl:r.xformUrl,defaults:r.defaults},W=document.createRange();I();if(r.offline)console.log("App in offline-capable mode."),delete h.xformUrl,A(),m.init(h).then(p).then(d.init).then(y).then(_).then(d.updateMaxSubmissionSize).then(E).then(L).then(e=>(e.languages.forEach(b),e)).then(d.updateMedia).then(F).catch(x);else{console.log("App in online-only mode.");let e=r.type==="preview";f.init({failSilently:!0}).then(()=>p(h)).then(t=>s.getFormParts({...t,isPreview:e})).then(_).then(y).then(t=>e&&r.xformUrl?t:s.getMaximumSubmissionSize(t)).then(E).then(L).catch(x)}function E(e){return e.maxSize&&(r.maxSize=e.maxSize),e}function x(e){e=typeof e=="string"?new Error(e):e,U.classList.add("fail"),e.status===401?window.location.href=`${r.loginUrl}?return_url=${encodeURIComponent(window.location.href)}`:e.status===404?i.alertLoadErrors([e.message],null,{omitIntro:!0,omitSupportContact:!0}):(Array.isArray(e)||(e=[e.message||o("error.unknown")]),i.alertLoadErrors(e,o("alert.loaderror.entryadvice")))}function A(){document.addEventListener(a.OfflineLaunchCapable().type,e=>{let{capable:t}=e.detail;i.updateStatus.offlineCapable(t);let n=m.serviceWorkerScriptUrl;n&&s.getServiceWorkerVersion(n).then(i.updateStatus.applicationVersion)}),document.addEventListener(a.ApplicationUpdated().type,()=>{i.feedback(o("alert.appupdated.msg"),20,o("alert.appupdated.heading"))})}function F(e){return document.addEventListener(a.FormUpdated().type,()=>{i.feedback(o("alert.formupdated.msg"),20,o("alert.formupdated.heading"))}),e}function I(){let e=document.querySelector(".side-slider__advanced__button.flush-db");e&&e.addEventListener("click",()=>{i.confirm({msg:o("confirm.deleteall.msg"),heading:o("confirm.deleteall.heading")},{posButton:o("confirm.deleteall.posButton")}).then(t=>{if(!t)throw new Error("Cancelled by user");return f.flush()}).then(()=>{location.reload()}).catch(()=>{})})}function y(e){let t=document.querySelector(".form-header__branding img"),n=r.offline?"data-offline-src":"src";return t&&e.branding&&e.branding.source&&t.src!==e.branding.source&&(t.src="",t.setAttribute(n,e.branding.source)),t.classList.remove("hide"),e}function _(e){return e.form&&e.model?i.swapTheme(e):Promise.reject(new Error("Received form incomplete"))}function z(e,t){let n,l,g=null;for(let c in t)Object.prototype.hasOwnProperty.call(t,c)&&(n=n||new v(e,{full:!1}),l=l||n.init(),Object.prototype.hasOwnProperty.call(t,c)&&n.node(c).setVal(t[c]),g=n.getStr());return g}function L(e){let t=W.createContextualFragment(e.form);O.after(t);let n=document.querySelector("form.or");return k.init(n,{modelStr:e.model,instanceStr:z(e.model,r.defaults),external:e.externalData,survey:e}).then(l=>(e.languages=l.languages,document.querySelector("head>title").textContent=w.getTitleFromFormStr(e.form),r.print&&i.applyPrintStyle(),S(n),e))}
//# sourceMappingURL=enketo-webform.js.map

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


  
  })();