const r={context:void 0,registry:void 0};function A(e){r.context=e}function re(){return{...r.context,id:`${r.context.id}${r.context.count++}-`,count:0}}const fe=(e,n)=>e===n,H={equals:fe};let K=te;const b=1,k=2,Q={owned:null,cleanups:null,context:null,owner:null};var a=null;let D=null,ue=null,d=null,g=null,y=null,j=0;function X(e,n){const t=d,s=a,i=e.length===0,o=n===void 0?s:n,f=i?Q:{owned:null,cleanups:null,context:o?o.context:null,owner:o},l=i?e:()=>e(()=>x(()=>M(f)));a=f,d=null;try{return N(l,!0)}finally{d=t,a=s}}function I(e,n){n=n?Object.assign({},H,n):H;const t={value:e,observers:null,observerSlots:null,comparator:n.equals||void 0},s=i=>(typeof i=="function"&&(i=i(t.value)),ee(t,i));return[z.bind(t),s]}function F(e,n,t){const s=Y(e,n,!1,b);T(s)}function ce(e,n,t){K=xe;const s=Y(e,n,!1,b),i=P&&Z(P);i&&(s.suspense=i),s.user=!0,y?y.push(s):T(s)}function C(e,n,t){t=t?Object.assign({},H,t):H;const s=Y(e,n,!0,0);return s.observers=null,s.observerSlots=null,s.comparator=t.equals||void 0,T(s),z.bind(s)}function x(e){if(d===null)return e();const n=d;d=null;try{return e()}finally{d=n}}function ke(e){ce(()=>x(e))}function ae(e){return a===null||(a.cleanups===null?a.cleanups=[e]:a.cleanups.push(e)),e}function de(){return a}function he(e){y.push.apply(y,e),e.length=0}function J(e,n){const t=Symbol("context");return{id:t,Provider:Se(t),defaultValue:e}}function Z(e){return a&&a.context&&a.context[e.id]!==void 0?a.context[e.id]:e.defaultValue}function ge(e){const n=C(e),t=C(()=>q(n()));return t.toArray=()=>{const s=t();return Array.isArray(s)?s:s!=null?[s]:[]},t}let P;function pe(){return P||(P=J())}function z(){if(this.sources&&this.state)if(this.state===b)T(this);else{const e=g;g=null,N(()=>L(this),!1),g=e}if(d){const e=this.observers?this.observers.length:0;d.sources?(d.sources.push(this),d.sourceSlots.push(e)):(d.sources=[this],d.sourceSlots=[e]),this.observers?(this.observers.push(d),this.observerSlots.push(d.sources.length-1)):(this.observers=[d],this.observerSlots=[d.sources.length-1])}return this.value}function ee(e,n,t){let s=e.value;return(!e.comparator||!e.comparator(s,n))&&(e.value=n,e.observers&&e.observers.length&&N(()=>{for(let i=0;i<e.observers.length;i+=1){const o=e.observers[i],f=D&&D.running;f&&D.disposed.has(o),(f?!o.tState:!o.state)&&(o.pure?g.push(o):y.push(o),o.observers&&ne(o)),f||(o.state=b)}if(g.length>1e6)throw g=[],new Error},!1)),n}function T(e){if(!e.fn)return;M(e);const n=j;ye(e,e.value,n)}function ye(e,n,t){let s;const i=a,o=d;d=a=e;try{s=e.fn(n)}catch(f){return e.pure&&(e.state=b,e.owned&&e.owned.forEach(M),e.owned=null),e.updatedAt=t+1,se(f)}finally{d=o,a=i}(!e.updatedAt||e.updatedAt<=t)&&(e.updatedAt!=null&&"observers"in e?ee(e,s):e.value=s,e.updatedAt=t)}function Y(e,n,t,s=b,i){const o={fn:e,state:s,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:n,owner:a,context:a?a.context:null,pure:t};return a===null||a!==Q&&(a.owned?a.owned.push(o):a.owned=[o]),o}function B(e){if(e.state===0)return;if(e.state===k)return L(e);if(e.suspense&&x(e.suspense.inFallback))return e.suspense.effects.push(e);const n=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<j);)e.state&&n.push(e);for(let t=n.length-1;t>=0;t--)if(e=n[t],e.state===b)T(e);else if(e.state===k){const s=g;g=null,N(()=>L(e,n[0]),!1),g=s}}function N(e,n){if(g)return e();let t=!1;n||(g=[]),y?t=!0:y=[],j++;try{const s=e();return we(t),s}catch(s){t||(y=null),g=null,se(s)}}function we(e){if(g&&(te(g),g=null),e)return;const n=y;y=null,n.length&&N(()=>K(n),!1)}function te(e){for(let n=0;n<e.length;n++)B(e[n])}function xe(e){let n,t=0;for(n=0;n<e.length;n++){const s=e[n];s.user?e[t++]=s:B(s)}if(r.context){if(r.count){r.effects||(r.effects=[]),r.effects.push(...e.slice(0,t));return}else r.effects&&(e=[...r.effects,...e],t+=r.effects.length,delete r.effects);A()}for(n=0;n<t;n++)B(e[n])}function L(e,n){e.state=0;for(let t=0;t<e.sources.length;t+=1){const s=e.sources[t];if(s.sources){const i=s.state;i===b?s!==n&&(!s.updatedAt||s.updatedAt<j)&&B(s):i===k&&L(s,n)}}}function ne(e){for(let n=0;n<e.observers.length;n+=1){const t=e.observers[n];t.state||(t.state=k,t.pure?g.push(t):y.push(t),t.observers&&ne(t))}}function M(e){let n;if(e.sources)for(;e.sources.length;){const t=e.sources.pop(),s=e.sourceSlots.pop(),i=t.observers;if(i&&i.length){const o=i.pop(),f=t.observerSlots.pop();s<i.length&&(o.sourceSlots[f]=s,i[s]=o,t.observerSlots[s]=f)}}if(e.owned){for(n=e.owned.length-1;n>=0;n--)M(e.owned[n]);e.owned=null}if(e.cleanups){for(n=e.cleanups.length-1;n>=0;n--)e.cleanups[n]();e.cleanups=null}e.state=0}function be(e){return e instanceof Error?e:new Error(typeof e=="string"?e:"Unknown error",{cause:e})}function se(e,n=a){throw be(e)}function q(e){if(typeof e=="function"&&!e.length)return q(e());if(Array.isArray(e)){const n=[];for(let t=0;t<e.length;t++){const s=q(e[t]);Array.isArray(s)?n.push.apply(n,s):n.push(s)}return n}return e}function Se(e,n){return function(s){let i;return F(()=>i=x(()=>(a.context={...a.context,[e]:s.value},ge(()=>s.children))),void 0),i}}let ie=!1;function Ae(){ie=!0}function Ce(e,n){if(ie&&r.context){const t=r.context;A(re());const s=x(()=>e(n||{}));return A(t),s}return x(()=>e(n||{}))}const Ee=e=>`Stale read from <${e}>.`;function Fe(e){const n=e.keyed,t=C(()=>e.when,void 0,{equals:(s,i)=>n?s===i:!s==!i});return C(()=>{const s=t();if(s){const i=e.children;return typeof i=="function"&&i.length>0?x(()=>i(n?s:()=>{if(!x(t))throw Ee("Show");return e.when})):i}return e.fallback},void 0,void 0)}const ve=J();function Pe(e){let n=0,t,s,i,o,f;const[l,u]=I(!1),h=pe(),c={increment:()=>{++n===1&&u(!0)},decrement:()=>{--n===0&&u(!1)},inFallback:l,effects:[],resolved:!1},p=de();if(r.context&&r.load){const S=r.context.id+r.context.count;let v=r.load(S);if(v&&(typeof v!="object"||v.status!=="success"?i=v:r.gather(S)),i&&i!=="$$f"){const[O,m]=I(void 0,{equals:!1});o=O,i.then(()=>{if(r.done)return m();r.gather(S),A(s),m(),A()},U=>{f=U,m()})}}const E=Z(ve);E&&(t=E.register(c.inFallback));let w;return ae(()=>w&&w()),Ce(h.Provider,{value:c,get children(){return C(()=>{if(f)throw f;if(s=r.context,o)return o(),o=void 0;s&&i==="$$f"&&A();const S=C(()=>e.children);return C(v=>{const O=c.inFallback(),{showContent:m=!0,showFallback:U=!0}=t?t():{};if((!O||i&&i!=="$$f")&&m)return c.resolved=!0,w&&w(),w=s=i=void 0,he(c.effects),S();if(U)return w?v:X(le=>(w=le,s&&(A({id:s.id+"f",count:0}),s=void 0),e.fallback),p)})})}})}function $e(e,n,t){let s=t.length,i=n.length,o=s,f=0,l=0,u=n[i-1].nextSibling,h=null;for(;f<i||l<o;){if(n[f]===t[l]){f++,l++;continue}for(;n[i-1]===t[o-1];)i--,o--;if(i===f){const c=o<s?l?t[l-1].nextSibling:t[o-l]:u;for(;l<o;)e.insertBefore(t[l++],c)}else if(o===l)for(;f<i;)(!h||!h.has(n[f]))&&n[f].remove(),f++;else if(n[f]===t[o-1]&&t[l]===n[i-1]){const c=n[--i].nextSibling;e.insertBefore(t[l++],n[f++].nextSibling),e.insertBefore(t[--o],c),n[i]=t[o]}else{if(!h){h=new Map;let p=l;for(;p<o;)h.set(t[p],p++)}const c=h.get(n[f]);if(c!=null)if(l<c&&c<o){let p=f,E=1,w;for(;++p<i&&p<o&&!((w=h.get(n[p]))==null||w!==c+E);)E++;if(E>c-l){const S=n[f];for(;l<c;)e.insertBefore(t[l++],S)}else e.replaceChild(t[l++],n[f++])}else f++;else n[f++].remove()}}}const G="_$DX_DELEGATE";function me(e,n,t,s={}){let i;return X(o=>{i=o,n===document?e():Te(n,e(),n.firstChild?null:void 0,t)},s.owner),()=>{i(),n.textContent=""}}function Be(e,n,t){let s;const i=()=>{const f=document.createElement("template");return f.innerHTML=e,f.content.firstChild},o=()=>(s||(s=i())).cloneNode(!0);return o.cloneNode=o,o}function Le(e,n=window.document){const t=n[G]||(n[G]=new Set);for(let s=0,i=e.length;s<i;s++){const o=e[s];t.has(o)||(t.add(o),n.addEventListener(o,oe))}}function Te(e,n,t,s){if(t!==void 0&&!s&&(s=[]),typeof n!="function")return _(e,n,s,t);F(i=>_(e,n(),i,t),s)}function Ne(e,n,t={}){r.completed=globalThis._$HY.completed,r.events=globalThis._$HY.events,r.load=i=>globalThis._$HY.r[i],r.has=i=>i in globalThis._$HY.r,r.gather=i=>W(n,i),r.registry=new Map,r.context={id:t.renderId||"",count:0},W(n,t.renderId);const s=me(e,n,[...n.childNodes],t);return r.context=null,s}function _e(e){let n,t;return!r.context||!(n=r.registry.get(t=He()))?e():(r.completed&&r.completed.add(n),r.registry.delete(t),n)}function je(e){let n=e,t=0,s=[];if(r.context)for(;n;){if(n.nodeType===8){const i=n.nodeValue;if(i==="$")t++;else if(i==="/"){if(t===0)return[n,s];t--}}s.push(n),n=n.nextSibling}return[n,s]}function Me(){r.events&&!r.events.queued&&(queueMicrotask(()=>{const{completed:e,events:n}=r;for(n.queued=!1;n.length;){const[t,s]=n[0];if(!e.has(t))return;oe(s),n.shift()}}),r.events.queued=!0)}function oe(e){const n=`$$${e.type}`;let t=e.composedPath&&e.composedPath()[0]||e.target;for(e.target!==t&&Object.defineProperty(e,"target",{configurable:!0,value:t}),Object.defineProperty(e,"currentTarget",{configurable:!0,get(){return t||document}}),r.registry&&!r.done&&(r.done=_$HY.done=!0);t;){const s=t[n];if(s&&!t.disabled){const i=t[`${n}Data`];if(i!==void 0?s.call(t,i,e):s.call(t,e),e.cancelBubble)return}t=t._$host||t.parentNode||t.host}}function _(e,n,t,s,i){const o=!!r.context&&e.isConnected;if(o){!t&&(t=[...e.childNodes]);let u=[];for(let h=0;h<t.length;h++){const c=t[h];c.nodeType===8&&c.data.slice(0,2)==="!$"?c.remove():u.push(c)}t=u}for(;typeof t=="function";)t=t();if(n===t)return t;const f=typeof n,l=s!==void 0;if(e=l&&t[0]&&t[0].parentNode||e,f==="string"||f==="number"){if(o)return t;if(f==="number"&&(n=n.toString()),l){let u=t[0];u&&u.nodeType===3?u.data!==n&&(u.data=n):u=document.createTextNode(n),t=$(e,t,s,u)}else t!==""&&typeof t=="string"?t=e.firstChild.data=n:t=e.textContent=n}else if(n==null||f==="boolean"){if(o)return t;t=$(e,t,s)}else{if(f==="function")return F(()=>{let u=n();for(;typeof u=="function";)u=u();t=_(e,u,t,s)}),()=>t;if(Array.isArray(n)){const u=[],h=t&&Array.isArray(t);if(V(u,n,t,i))return F(()=>t=_(e,u,t,s,!0)),()=>t;if(o){if(!u.length)return t;if(s===void 0)return[...e.childNodes];let c=u[0],p=[c];for(;(c=c.nextSibling)!==s;)p.push(c);return t=p}if(u.length===0){if(t=$(e,t,s),l)return t}else h?t.length===0?R(e,u,s):$e(e,t,u):(t&&$(e),R(e,u));t=u}else if(n.nodeType){if(o&&n.parentNode)return t=l?[n]:n;if(Array.isArray(t)){if(l)return t=$(e,t,s,n);$(e,t,null,n)}else t==null||t===""||!e.firstChild?e.appendChild(n):e.replaceChild(n,e.firstChild);t=n}}return t}function V(e,n,t,s){let i=!1;for(let o=0,f=n.length;o<f;o++){let l=n[o],u=t&&t[e.length],h;if(!(l==null||l===!0||l===!1))if((h=typeof l)=="object"&&l.nodeType)e.push(l);else if(Array.isArray(l))i=V(e,l,u)||i;else if(h==="function")if(s){for(;typeof l=="function";)l=l();i=V(e,Array.isArray(l)?l:[l],Array.isArray(u)?u:[u])||i}else e.push(l),i=!0;else{const c=String(l);u&&u.nodeType===3&&u.data===c?e.push(u):e.push(document.createTextNode(c))}}return i}function R(e,n,t=null){for(let s=0,i=n.length;s<i;s++)e.insertBefore(n[s],t)}function $(e,n,t,s){if(t===void 0)return e.textContent="";const i=s||document.createTextNode("");if(n.length){let o=!1;for(let f=n.length-1;f>=0;f--){const l=n[f];if(i!==l){const u=l.parentNode===e;!o&&!f?u?e.replaceChild(i,l):e.insertBefore(i,t):u&&l.remove()}else o=!0}}else e.insertBefore(i,t);return[i]}function W(e,n){const t=e.querySelectorAll("*[data-hk]");for(let s=0;s<t.length;s++){const i=t[s],o=i.getAttribute("data-hk");(!n||o.startsWith(n))&&!r.registry.has(o)&&r.registry.set(o,i)}}function He(){const e=r.context;return`${e.id}${e.count++}`}const Oe=(...e)=>(Ae(),Ne(...e));export{Fe as S,C as a,je as b,Ce as c,Le as d,I as e,me as f,_e as g,Oe as h,Te as i,Pe as j,ke as o,Me as r,Be as t};
