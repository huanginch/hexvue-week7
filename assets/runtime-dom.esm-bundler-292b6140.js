import{y as L,B as K,z as B,A as g,C as V,D as C,E as u,F as _,G as h,H as R,I as z,J as U,K as q,L as D,M as W,N as $,O as j,P as H,Q as G}from"./index-e4921843.js";const J="http://www.w3.org/2000/svg",l=typeof document<"u"?document:null,E=l&&l.createElement("template"),Q={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,i)=>{const s=e?l.createElementNS(J,t):l.createElement(t,n?{is:n}:void 0);return t==="select"&&i&&i.multiple!=null&&s.setAttribute("multiple",i.multiple),s},createText:t=>l.createTextNode(t),createComment:t=>l.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>l.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,i,s,o){const r=n?n.previousSibling:e.lastChild;if(s&&(s===o||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===o||!(s=s.nextSibling)););else{E.innerHTML=i?`<svg>${t}</svg>`:t;const c=E.content;if(i){const a=c.firstChild;for(;a.firstChild;)c.appendChild(a.firstChild);c.removeChild(a)}e.insertBefore(c,n)}return[r?r.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function X(t,e,n){const i=t._vtc;i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function Y(t,e,n){const i=t.style,s=g(n);if(n&&!s){for(const o in n)A(i,o,n[o]);if(e&&!g(e))for(const o in e)n[o]==null&&A(i,o,"")}else{const o=i.display;s?e!==n&&(i.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(i.display=o)}}const v=/\s*!important$/;function A(t,e,n){if(u(n))n.forEach(i=>A(t,e,i));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const i=Z(t,e);v.test(n)?t.setProperty(D(i),n.replace(v,""),"important"):t[i]=n}}const T=["Webkit","Moz","ms"],b={};function Z(t,e){const n=b[e];if(n)return n;let i=W(e);if(i!=="filter"&&i in t)return b[e]=i;i=$(i);for(let s=0;s<T.length;s++){const o=T[s]+i;if(o in t)return b[e]=o}return e}const x="http://www.w3.org/1999/xlink";function y(t,e,n,i,s){if(i&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(x,e.slice(6,e.length)):t.setAttributeNS(x,e,n);else{const o=j(e);n==null||o&&!H(n)?t.removeAttribute(e):t.setAttribute(e,o?"":n)}}function k(t,e,n,i,s,o,r){if(e==="innerHTML"||e==="textContent"){i&&r(i,s,o),t[e]=n??"";return}if(e==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=n;const a=n??"";(t.value!==a||t.tagName==="OPTION")&&(t.value=a),n==null&&t.removeAttribute(e);return}let c=!1;if(n===""||n==null){const a=typeof t[e];a==="boolean"?n=H(n):n==null&&a==="string"?(n="",c=!0):a==="number"&&(n=0,c=!0)}try{t[e]=n}catch{}c&&t.removeAttribute(e)}function f(t,e,n,i){t.addEventListener(e,n,i)}function tt(t,e,n,i){t.removeEventListener(e,n,i)}function et(t,e,n,i,s=null){const o=t._vei||(t._vei={}),r=o[e];if(i&&r)r.value=i;else{const[c,a]=nt(e);if(i){const m=o[e]=ot(i,s);f(t,c,m,a)}else r&&(tt(t,c,r,a),o[e]=void 0)}}const M=/(?:Once|Passive|Capture)$/;function nt(t){let e;if(M.test(t)){e={};let i;for(;i=t.match(M);)t=t.slice(0,t.length-i[0].length),e[i[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):D(t.slice(2)),e]}let S=0;const it=Promise.resolve(),st=()=>S||(it.then(()=>S=0),S=Date.now());function ot(t,e){const n=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=n.attached)return;G(rt(i,n.value),e,5,[i])};return n.value=t,n.attached=st(),n}function rt(t,e){if(u(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(i=>s=>!s._stopped&&i&&i(s))}else return e}const N=/^on[a-z]/,ct=(t,e,n,i,s=!1,o,r,c,a)=>{e==="class"?X(t,i,s):e==="style"?Y(t,n,i):U(e)?q(e)||et(t,e,n,i,r):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):at(t,e,i,s))?k(t,e,i,o,r,c,a):(e==="true-value"?t._trueValue=i:e==="false-value"&&(t._falseValue=i),y(t,e,i,s))};function at(t,e,n,i){return i?!!(e==="innerHTML"||e==="textContent"||e in t&&N.test(e)&&B(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||N.test(e)&&g(n)?!1:e in t}const ft={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};K.props;const p=t=>{const e=t.props["onUpdate:modelValue"]||!1;return u(e)?n=>z(e,n):e};function lt(t){t.target.composing=!0}function w(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const bt={created(t,{modifiers:{lazy:e,trim:n,number:i}},s){t._assign=p(s);const o=i||s.props&&s.props.type==="number";f(t,e?"change":"input",r=>{if(r.target.composing)return;let c=t.value;n&&(c=c.trim()),o&&(c=C(c)),t._assign(c)}),n&&f(t,"change",()=>{t.value=t.value.trim()}),e||(f(t,"compositionstart",lt),f(t,"compositionend",w),f(t,"change",w))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:i,number:s}},o){if(t._assign=p(o),t.composing||document.activeElement===t&&t.type!=="range"&&(n||i&&t.value.trim()===e||(s||t.type==="number")&&C(t.value)===e))return;const r=e??"";t.value!==r&&(t.value=r)}},St={deep:!0,created(t,e,n){t._assign=p(n),f(t,"change",()=>{const i=t._modelValue,s=d(t),o=t.checked,r=t._assign;if(u(i)){const c=_(i,s),a=c!==-1;if(o&&!a)r(i.concat(s));else if(!o&&a){const m=[...i];m.splice(c,1),r(m)}}else if(h(i)){const c=new Set(i);o?c.add(s):c.delete(s),r(c)}else r(F(t,o))})},mounted:P,beforeUpdate(t,e,n){t._assign=p(n),P(t,e,n)}};function P(t,{value:e,oldValue:n},i){t._modelValue=e,u(e)?t.checked=_(e,i.props.value)>-1:h(e)?t.checked=e.has(i.props.value):e!==n&&(t.checked=R(e,F(t,!0)))}const Ct={deep:!0,created(t,{value:e,modifiers:{number:n}},i){const s=h(e);f(t,"change",()=>{const o=Array.prototype.filter.call(t.options,r=>r.selected).map(r=>n?C(d(r)):d(r));t._assign(t.multiple?s?new Set(o):o:o[0])}),t._assign=p(i)},mounted(t,{value:e}){I(t,e)},beforeUpdate(t,e,n){t._assign=p(n)},updated(t,{value:e}){I(t,e)}};function I(t,e){const n=t.multiple;if(!(n&&!u(e)&&!h(e))){for(let i=0,s=t.options.length;i<s;i++){const o=t.options[i],r=d(o);if(n)u(e)?o.selected=_(e,r)>-1:o.selected=e.has(r);else if(R(d(o),e)){t.selectedIndex!==i&&(t.selectedIndex=i);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function d(t){return"_value"in t?t._value:t.value}function F(t,e){const n=e?"_trueValue":"_falseValue";return n in t?t[n]:e}const ut=["ctrl","shift","alt","meta"],pt={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>ut.some(n=>t[`${n}Key`]&&!e.includes(n))},At=(t,e)=>(n,...i)=>{for(let s=0;s<e.length;s++){const o=pt[e[s]];if(o&&o(n,e))return}return t(n,...i)},dt=L({patchProp:ct},Q);let O;function mt(){return O||(O=V(dt))}const _t=(...t)=>{const e=mt().createApp(...t),{mount:n}=e;return e.mount=i=>{const s=gt(i);if(!s)return;const o=e._component;!B(o)&&!o.render&&!o.template&&(o.template=s.innerHTML),s.innerHTML="";const r=n(s,!1,s instanceof SVGElement);return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),r},e};function gt(t){return g(t)?document.querySelector(t):t}export{St as a,Ct as b,_t as c,bt as v,At as w};