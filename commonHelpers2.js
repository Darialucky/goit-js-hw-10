import"./assets/modulepreload-polyfill-3cfb730f.js";import{i as s}from"./assets/vendor-77e16229.js";/* empty css                      */const o=document.querySelector(".form");o.addEventListener("submit",r);function r(e){e.preventDefault(),new Promise((i,n)=>{const t=o.elements.delay.value,m=o.elements.state.value;setTimeout(()=>{m==="fulfilled"?i(`✅ Fulfilled promise in ${t}ms`):n(`❌ Rejected promise in ${t}ms`)},t)}).then(c).catch(a)}function c(e){s.success({message:e,position:"topRight"})}function a(e){s.error({message:e,position:"topRight"})}
//# sourceMappingURL=commonHelpers2.js.map