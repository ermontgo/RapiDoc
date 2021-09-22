/*! RapiDoc 9.1.3-beta | Author - Mrinmoy Majumdar | License information can be found in rapidoc-min.js.LICENSE.txt  */
(()=>{var e,t,r={962:(e,t,r)=>{"use strict";const n=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,o=Symbol(),i=new Map;class a{constructor(e,t){if(this._$cssResult$=!0,t!==o)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e}get styleSheet(){let e=i.get(this.cssText);return n&&void 0===e&&(i.set(this.cssText,e=new CSSStyleSheet),e.replaceSync(this.cssText)),e}toString(){return this.cssText}}const s=e=>new a("string"==typeof e?e:e+"",o),l=(e,...t)=>{const r=1===e.length?e[0]:t.reduce(((t,r,n)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+e[n+1]),e[0]);return new a(r,o)},c=n?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(const r of e.cssRules)t+=r.cssText;return s(t)})(e):e;var p,u;const d={toAttribute(e,t){switch(t){case Boolean:e=e?"":null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let r=e;switch(t){case Boolean:r=null!==e;break;case Number:r=null===e?null:Number(e);break;case Object:case Array:try{r=JSON.parse(e)}catch(e){r=null}}return r}},h=(e,t)=>t!==e&&(t==t||e==e),f={attribute:!0,type:String,converter:d,reflect:!1,hasChanged:h};class m extends HTMLElement{constructor(){super(),this._$Et=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Ei=null,this.o()}static addInitializer(e){var t;null!==(t=this.l)&&void 0!==t||(this.l=[]),this.l.push(e)}static get observedAttributes(){this.finalize();const e=[];return this.elementProperties.forEach(((t,r)=>{const n=this._$Eh(r,t);void 0!==n&&(this._$Eu.set(n,r),e.push(n))})),e}static createProperty(e,t=f){if(t.state&&(t.attribute=!1),this.finalize(),this.elementProperties.set(e,t),!t.noAccessor&&!this.prototype.hasOwnProperty(e)){const r="symbol"==typeof e?Symbol():"__"+e,n=this.getPropertyDescriptor(e,r,t);void 0!==n&&Object.defineProperty(this.prototype,e,n)}}static getPropertyDescriptor(e,t,r){return{get(){return this[t]},set(n){const o=this[e];this[t]=n,this.requestUpdate(e,o,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||f}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const e=Object.getPrototypeOf(this);if(e.finalize(),this.elementProperties=new Map(e.elementProperties),this._$Eu=new Map,this.hasOwnProperty("properties")){const e=this.properties,t=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(const r of t)this.createProperty(r,e[r])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const r=new Set(e.flat(1/0).reverse());for(const e of r)t.unshift(c(e))}else void 0!==e&&t.push(c(e));return t}static _$Eh(e,t){const r=t.attribute;return!1===r?void 0:"string"==typeof r?r:"string"==typeof e?e.toLowerCase():void 0}o(){var e;this._$Ev=new Promise((e=>this.enableUpdating=e)),this._$AL=new Map,this._$Ep(),this.requestUpdate(),null===(e=this.constructor.l)||void 0===e||e.forEach((e=>e(this)))}addController(e){var t,r;(null!==(t=this._$Em)&&void 0!==t?t:this._$Em=[]).push(e),void 0!==this.renderRoot&&this.isConnected&&(null===(r=e.hostConnected)||void 0===r||r.call(e))}removeController(e){var t;null===(t=this._$Em)||void 0===t||t.splice(this._$Em.indexOf(e)>>>0,1)}_$Ep(){this.constructor.elementProperties.forEach(((e,t)=>{this.hasOwnProperty(t)&&(this._$Et.set(t,this[t]),delete this[t])}))}createRenderRoot(){var e;const t=null!==(e=this.shadowRoot)&&void 0!==e?e:this.attachShadow(this.constructor.shadowRootOptions);return((e,t)=>{n?e.adoptedStyleSheets=t.map((e=>e instanceof CSSStyleSheet?e:e.styleSheet)):t.forEach((t=>{const r=document.createElement("style"),n=window.litNonce;void 0!==n&&r.setAttribute("nonce",n),r.textContent=t.cssText,e.appendChild(r)}))})(t,this.constructor.elementStyles),t}connectedCallback(){var e;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(e=this._$Em)||void 0===e||e.forEach((e=>{var t;return null===(t=e.hostConnected)||void 0===t?void 0:t.call(e)}))}enableUpdating(e){}disconnectedCallback(){var e;null===(e=this._$Em)||void 0===e||e.forEach((e=>{var t;return null===(t=e.hostDisconnected)||void 0===t?void 0:t.call(e)}))}attributeChangedCallback(e,t,r){this._$AK(e,r)}_$Eg(e,t,r=f){var n,o;const i=this.constructor._$Eh(e,r);if(void 0!==i&&!0===r.reflect){const a=(null!==(o=null===(n=r.converter)||void 0===n?void 0:n.toAttribute)&&void 0!==o?o:d.toAttribute)(t,r.type);this._$Ei=e,null==a?this.removeAttribute(i):this.setAttribute(i,a),this._$Ei=null}}_$AK(e,t){var r,n,o;const i=this.constructor,a=i._$Eu.get(e);if(void 0!==a&&this._$Ei!==a){const e=i.getPropertyOptions(a),s=e.converter,l=null!==(o=null!==(n=null===(r=s)||void 0===r?void 0:r.fromAttribute)&&void 0!==n?n:"function"==typeof s?s:null)&&void 0!==o?o:d.fromAttribute;this._$Ei=a,this[a]=l(t,e.type),this._$Ei=null}}requestUpdate(e,t,r){let n=!0;void 0!==e&&(((r=r||this.constructor.getPropertyOptions(e)).hasChanged||h)(this[e],t)?(this._$AL.has(e)||this._$AL.set(e,t),!0===r.reflect&&this._$Ei!==e&&(void 0===this._$ES&&(this._$ES=new Map),this._$ES.set(e,r))):n=!1),!this.isUpdatePending&&n&&(this._$Ev=this._$EC())}async _$EC(){this.isUpdatePending=!0;try{await this._$Ev}catch(e){Promise.reject(e)}const e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Et&&(this._$Et.forEach(((e,t)=>this[t]=e)),this._$Et=void 0);let t=!1;const r=this._$AL;try{t=this.shouldUpdate(r),t?(this.willUpdate(r),null===(e=this._$Em)||void 0===e||e.forEach((e=>{var t;return null===(t=e.hostUpdate)||void 0===t?void 0:t.call(e)})),this.update(r)):this._$ET()}catch(e){throw t=!1,this._$ET(),e}t&&this._$AE(r)}willUpdate(e){}_$AE(e){var t;null===(t=this._$Em)||void 0===t||t.forEach((e=>{var t;return null===(t=e.hostUpdated)||void 0===t?void 0:t.call(e)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$ET(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Ev}shouldUpdate(e){return!0}update(e){void 0!==this._$ES&&(this._$ES.forEach(((e,t)=>this._$Eg(t,this[t],e))),this._$ES=void 0),this._$ET()}updated(e){}firstUpdated(e){}}var y,g;m.finalized=!0,m.elementProperties=new Map,m.elementStyles=[],m.shadowRootOptions={mode:"open"},null===(p=globalThis.reactiveElementPolyfillSupport)||void 0===p||p.call(globalThis,{ReactiveElement:m}),(null!==(u=globalThis.reactiveElementVersions)&&void 0!==u?u:globalThis.reactiveElementVersions=[]).push("1.0.0");const v=globalThis.trustedTypes,b=v?v.createPolicy("lit-html",{createHTML:e=>e}):void 0,x=`lit$${(Math.random()+"").slice(9)}$`,w="?"+x,$=`<${w}>`,A=document,k=(e="")=>A.createComment(e),S=e=>null===e||"object"!=typeof e&&"function"!=typeof e,E=Array.isArray,D=e=>{var t;return E(e)||"function"==typeof(null===(t=e)||void 0===t?void 0:t[Symbol.iterator])},O=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,C=/-->/g,j=/>/g,T=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,_=/'/g,F=/"/g,B=/^(?:script|style|textarea)$/i,I=e=>(t,...r)=>({_$litType$:e,strings:t,values:r}),P=I(1),R=(I(2),Symbol.for("lit-noChange")),U=Symbol.for("lit-nothing"),L=new WeakMap,N=A.createTreeWalker(A,129,null,!1),z=(e,t)=>{const r=e.length-1,n=[];let o,i=2===t?"<svg>":"",a=O;for(let t=0;t<r;t++){const r=e[t];let s,l,c=-1,p=0;for(;p<r.length&&(a.lastIndex=p,l=a.exec(r),null!==l);)p=a.lastIndex,a===O?"!--"===l[1]?a=C:void 0!==l[1]?a=j:void 0!==l[2]?(B.test(l[2])&&(o=RegExp("</"+l[2],"g")),a=T):void 0!==l[3]&&(a=T):a===T?">"===l[0]?(a=null!=o?o:O,c=-1):void 0===l[1]?c=-2:(c=a.lastIndex-l[2].length,s=l[1],a=void 0===l[3]?T:'"'===l[3]?F:_):a===F||a===_?a=T:a===C||a===j?a=O:(a=T,o=void 0);const u=a===T&&e[t+1].startsWith("/>")?" ":"";i+=a===O?r+$:c>=0?(n.push(s),r.slice(0,c)+"$lit$"+r.slice(c)+x+u):r+x+(-2===c?(n.push(void 0),t):u)}const s=i+(e[r]||"<?>")+(2===t?"</svg>":"");return[void 0!==b?b.createHTML(s):s,n]};class q{constructor({strings:e,_$litType$:t},r){let n;this.parts=[];let o=0,i=0;const a=e.length-1,s=this.parts,[l,c]=z(e,t);if(this.el=q.createElement(l,r),N.currentNode=this.el.content,2===t){const e=this.el.content,t=e.firstChild;t.remove(),e.append(...t.childNodes)}for(;null!==(n=N.nextNode())&&s.length<a;){if(1===n.nodeType){if(n.hasAttributes()){const e=[];for(const t of n.getAttributeNames())if(t.endsWith("$lit$")||t.startsWith(x)){const r=c[i++];if(e.push(t),void 0!==r){const e=n.getAttribute(r.toLowerCase()+"$lit$").split(x),t=/([.?@])?(.*)/.exec(r);s.push({type:1,index:o,name:t[2],strings:e,ctor:"."===t[1]?G:"?"===t[1]?K:"@"===t[1]?Y:V})}else s.push({type:6,index:o})}for(const t of e)n.removeAttribute(t)}if(B.test(n.tagName)){const e=n.textContent.split(x),t=e.length-1;if(t>0){n.textContent=v?v.emptyScript:"";for(let r=0;r<t;r++)n.append(e[r],k()),N.nextNode(),s.push({type:2,index:++o});n.append(e[t],k())}}}else if(8===n.nodeType)if(n.data===w)s.push({type:2,index:o});else{let e=-1;for(;-1!==(e=n.data.indexOf(x,e+1));)s.push({type:7,index:o}),e+=x.length-1}o++}}static createElement(e,t){const r=A.createElement("template");return r.innerHTML=e,r}}function M(e,t,r=e,n){var o,i,a,s;if(t===R)return t;let l=void 0!==n?null===(o=r._$Cl)||void 0===o?void 0:o[n]:r._$Cu;const c=S(t)?void 0:t._$litDirective$;return(null==l?void 0:l.constructor)!==c&&(null===(i=null==l?void 0:l._$AO)||void 0===i||i.call(l,!1),void 0===c?l=void 0:(l=new c(e),l._$AT(e,r,n)),void 0!==n?(null!==(a=(s=r)._$Cl)&&void 0!==a?a:s._$Cl=[])[n]=l:r._$Cu=l),void 0!==l&&(t=M(e,l._$AS(e,t.values),l,n)),t}class H{constructor(e,t){this.v=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(e){var t;const{el:{content:r},parts:n}=this._$AD,o=(null!==(t=null==e?void 0:e.creationScope)&&void 0!==t?t:A).importNode(r,!0);N.currentNode=o;let i=N.nextNode(),a=0,s=0,l=n[0];for(;void 0!==l;){if(a===l.index){let t;2===l.type?t=new W(i,i.nextSibling,this,e):1===l.type?t=new l.ctor(i,l.name,l.strings,this,e):6===l.type&&(t=new J(i,this,e)),this.v.push(t),l=n[++s]}a!==(null==l?void 0:l.index)&&(i=N.nextNode(),a++)}return o}m(e){let t=0;for(const r of this.v)void 0!==r&&(void 0!==r.strings?(r._$AI(e,r,t),t+=r.strings.length-2):r._$AI(e[t])),t++}}class W{constructor(e,t,r,n){var o;this.type=2,this._$AH=U,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=r,this.options=n,this._$Cg=null===(o=null==n?void 0:n.isConnected)||void 0===o||o}get _$AU(){var e,t;return null!==(t=null===(e=this._$AM)||void 0===e?void 0:e._$AU)&&void 0!==t?t:this._$Cg}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return void 0!==t&&11===e.nodeType&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=M(this,e,t),S(e)?e===U||null==e||""===e?(this._$AH!==U&&this._$AR(),this._$AH=U):e!==this._$AH&&e!==R&&this.$(e):void 0!==e._$litType$?this.T(e):void 0!==e.nodeType?this.S(e):D(e)?this.M(e):this.$(e)}A(e,t=this._$AB){return this._$AA.parentNode.insertBefore(e,t)}S(e){this._$AH!==e&&(this._$AR(),this._$AH=this.A(e))}$(e){this._$AH!==U&&S(this._$AH)?this._$AA.nextSibling.data=e:this.S(A.createTextNode(e)),this._$AH=e}T(e){var t;const{values:r,_$litType$:n}=e,o="number"==typeof n?this._$AC(e):(void 0===n.el&&(n.el=q.createElement(n.h,this.options)),n);if((null===(t=this._$AH)||void 0===t?void 0:t._$AD)===o)this._$AH.m(r);else{const e=new H(o,this),t=e.p(this.options);e.m(r),this.S(t),this._$AH=e}}_$AC(e){let t=L.get(e.strings);return void 0===t&&L.set(e.strings,t=new q(e)),t}M(e){E(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let r,n=0;for(const o of e)n===t.length?t.push(r=new W(this.A(k()),this.A(k()),this,this.options)):r=t[n],r._$AI(o),n++;n<t.length&&(this._$AR(r&&r._$AB.nextSibling,n),t.length=n)}_$AR(e=this._$AA.nextSibling,t){var r;for(null===(r=this._$AP)||void 0===r||r.call(this,!1,!0,t);e&&e!==this._$AB;){const t=e.nextSibling;e.remove(),e=t}}setConnected(e){var t;void 0===this._$AM&&(this._$Cg=e,null===(t=this._$AP)||void 0===t||t.call(this,e))}}class V{constructor(e,t,r,n,o){this.type=1,this._$AH=U,this._$AN=void 0,this.element=e,this.name=t,this._$AM=n,this.options=o,r.length>2||""!==r[0]||""!==r[1]?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=U}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,t=this,r,n){const o=this.strings;let i=!1;if(void 0===o)e=M(this,e,t,0),i=!S(e)||e!==this._$AH&&e!==R,i&&(this._$AH=e);else{const n=e;let a,s;for(e=o[0],a=0;a<o.length-1;a++)s=M(this,n[r+a],t,a),s===R&&(s=this._$AH[a]),i||(i=!S(s)||s!==this._$AH[a]),s===U?e=U:e!==U&&(e+=(null!=s?s:"")+o[a+1]),this._$AH[a]=s}i&&!n&&this.k(e)}k(e){e===U?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=e?e:"")}}class G extends V{constructor(){super(...arguments),this.type=3}k(e){this.element[this.name]=e===U?void 0:e}}class K extends V{constructor(){super(...arguments),this.type=4}k(e){e&&e!==U?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name)}}class Y extends V{constructor(e,t,r,n,o){super(e,t,r,n,o),this.type=5}_$AI(e,t=this){var r;if((e=null!==(r=M(this,e,t,0))&&void 0!==r?r:U)===R)return;const n=this._$AH,o=e===U&&n!==U||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,i=e!==U&&(n===U||o);o&&this.element.removeEventListener(this.name,this,n),i&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,r;"function"==typeof this._$AH?this._$AH.call(null!==(r=null===(t=this.options)||void 0===t?void 0:t.host)&&void 0!==r?r:this.element,e):this._$AH.handleEvent(e)}}class J{constructor(e,t,r){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(e){M(this,e)}}var Z,Q,X;null===(y=globalThis.litHtmlPolyfillSupport)||void 0===y||y.call(globalThis,q,W),(null!==(g=globalThis.litHtmlVersions)&&void 0!==g?g:globalThis.litHtmlVersions=[]).push("2.0.0");class ee extends m{constructor(){super(...arguments),this.renderOptions={host:this},this._$Dt=void 0}createRenderRoot(){var e,t;const r=super.createRenderRoot();return null!==(e=(t=this.renderOptions).renderBefore)&&void 0!==e||(t.renderBefore=r.firstChild),r}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Dt=((e,t,r)=>{var n,o;const i=null!==(n=null==r?void 0:r.renderBefore)&&void 0!==n?n:t;let a=i._$litPart$;if(void 0===a){const e=null!==(o=null==r?void 0:r.renderBefore)&&void 0!==o?o:null;i._$litPart$=a=new W(t.insertBefore(k(),e),e,void 0,null!=r?r:{})}return a._$AI(e),a})(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),null===(e=this._$Dt)||void 0===e||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),null===(e=this._$Dt)||void 0===e||e.setConnected(!1)}render(){return R}}ee.finalized=!0,ee._$litElement$=!0,null===(Z=globalThis.litElementHydrateSupport)||void 0===Z||Z.call(globalThis,{LitElement:ee}),null===(Q=globalThis.litElementPolyfillSupport)||void 0===Q||Q.call(globalThis,{LitElement:ee});(null!==(X=globalThis.litElementVersions)&&void 0!==X?X:globalThis.litElementVersions=[]).push("3.0.0");var te=r(84),re=r.n(te),ne=r(660),oe=r.n(ne);r(251),r(358),r(46),r(503),r(277),r(874),r(366),r(57),r(16);const ie=l`
  .hover-bg:hover{
    background: var(--bg3);
  }
  ::selection {
    background: var(--selection-bg);
    color: var(--selection-fg);
  }
  .regular-font{ 
    font-family:var(--font-regular); 
  }
  .mono-font { 
    font-family:var(--font-mono); 
  }
  .title { 
    font-size: calc(var(--font-size-small) + 18px);
    font-weight: normal 
  }
  .sub-title{ font-size: 20px;}
  .req-res-title {
    font-family: var(--font-regular);
    font-size: calc(var(--font-size-small) + 4px);
    font-weight:bold;
    margin-bottom:8px;
    text-align:left;
  }
  .tiny-title { 
    font-size:calc(var(--font-size-small) + 1px); 
    font-weight:bold; 
  }
  .regular-font-size { font-size: var(--font-size-regular); }
  .small-font-size { font-size: var(--font-size-small); }
  .upper { text-transform: uppercase; }
  .primary-text{ color: var(--primary-color); }
  .bold-text { font-weight:bold; }
  .gray-text { color: var(--light-fg); }
  .red-text {color: var(--red)}
  .blue-text {color: var(--blue)}
  .multiline {
    overflow: scroll;
    max-height: var(--resp-area-height, 300px);
    color: var(--fg3);  
  }
  .method-fg.put { color: var(--orange); }
  .method-fg.post { color: var(--green); }
  .method-fg.get { color: var(--blue); }
  .method-fg.delete { color: var(--red); }
  .method-fg.options, 
  .method-fg.head, 
  .method-fg.patch { 
    color: var(--yellow); 
  }

  h1{ font-family:var(--font-regular); font-size:28px; padding-top: 10px; letter-spacing:normal; font-weight:normal; }
  h2{ font-family:var(--font-regular); font-size:24px; padding-top: 10px; letter-spacing:normal; font-weight:normal; }
  h3{ font-family:var(--font-regular); font-size:18px; padding-top: 10px; letter-spacing:normal; font-weight:normal; }
  h4{ font-family:var(--font-regular); font-size:16px; padding-top: 10px; letter-spacing:normal; font-weight:normal; }
  h5{ font-family:var(--font-regular); font-size:14px; padding-top: 10px; letter-spacing:normal; font-weight:normal; }
  h6{ font-family:var(--font-regular); font-size:14px; padding-top: 10px; letter-spacing:normal; font-weight:normal; }

  h1,h2,h3,h4,h5,h5{
    margin-block-end: 0.2em;
  }
  p { margin-block-start: 0.5em; }
  a { color: var(--blue); cursor:pointer; }
  a.inactive-link { 
    color:var(--fg);
    text-decoration: none;
    cursor:text;
  }
  
  code,
  pre {
    margin: 0px;
    font-family: var(--font-mono);
    font-size: calc(var(--font-size-mono) - 1px);
  }

  .m-markdown,
  .m-markdown-small {
    display:block;
  }

  .m-markdown p,
  .m-markdown span {
    font-size: var(--font-size-regular);
    line-height:calc(var(--font-size-regular) + 8px);
  }
  .m-markdown li{
    line-height:calc(var(--font-size-regular) + 12px);
  }
  
  .m-markdown-small p,
  .m-markdown-small span,
  .m-markdown-small li {
    font-size: var(--font-size-small);
    line-height: calc(var(--font-size-small) + 6px);
  }
  .m-markdown-small li {
    line-height: calc(var(--font-size-small) + 8px);
  }

  .m-markdown p:not(:first-child) {
    margin-block-start: 24px;
  }

  .m-markdown-small p:not(:first-child) {
    margin-block-start: 12px;
  }
  .m-markdown-small p:first-child {
    margin-block-start: 0;
  }

  .m-markdown p,
  .m-markdown-small p {
    margin-block-end: 0
  }

  .m-markdown code span {
    font-size:var(--font-size-mono);
  }

  .m-markdown-small code,
  .m-markdown code {
    padding: 1px 6px;
    border-radius: 2px;
    color: var(--inline-code-fg);
    background-color: var(--bg3);
    font-size: calc(var(--font-size-mono));
    line-height: 1.2;
  }

  .m-markdown-small code {
    font-size: calc(var(--font-size-mono) - 1px);
  }

  .m-markdown-small pre,
  .m-markdown pre {
    white-space: pre-wrap;
    overflow-x: auto;
    line-height: normal;
    border-radius: 2px;
    border: 1px solid var(--code-border-color);
  }

  .m-markdown pre {
    padding: 12px;
    background-color: var(--code-bg);
    color:var(--code-fg);
  }

  .m-markdown-small pre {
    margin-top: 4px;
    padding: 2px 4px;
    background-color: var(--bg3);
    color: var(--fg2);
  }

  .m-markdown-small pre code,
  .m-markdown pre code {
    border:none;
    padding:0;
  }

  .m-markdown pre code {
    color: var(--code-fg);
    background-color: var(--code-bg);
    background-color: transparent;
  }

  .m-markdown-small pre code {
    color: var(--fg2);
    background-color: var(--bg3);
  }

  .m-markdown ul,
  .m-markdown ol {
    padding-inline-start: 30px;
  }

  .m-markdown-small ul,
  .m-markdown-small ol {
    padding-inline-start: 20px;
  }

  .m-markdown-small a,
  .m-markdown a {
    color:var(--blue);
  }

  .m-markdown-small img,
  .m-markdown img { 
    max-width: 100%; 
  }

  /* Markdown table */

  .m-markdown-small table,
  .m-markdown table {
    border-spacing: 0;
    margin: 10px 0;
    border-collapse: separate;
    border: 1px solid var(--border-color);
    border-radius: var(--border-radius);
    font-size: calc(var(--font-size-small) + 1px);
    line-height: calc(var(--font-size-small) + 4px);
    max-width: 100%;
  }

  .m-markdown-small table {
    font-size: var(--font-size-small);
    line-height: calc(var(--font-size-small) + 2px);
    margin: 8px 0;
  }

  .m-markdown-small td, 
  .m-markdown-small th,
  .m-markdown td, 
  .m-markdown th {
    vertical-align: top;
    border-top: 1px solid var(--border-color);
    line-height: calc(var(--font-size-small) + 4px);
  }

  .m-markdown-small tr:first-child th,
  .m-markdown tr:first-child th {
    border-top: 0 none;
  }

  .m-markdown th, 
  .m-markdown td { 
    padding: 10px 12px; 
  }

  .m-markdown-small th,
  .m-markdown-small td { 
    padding: 8px 8px; 
  }

  .m-markdown th,
  .m-markdown-small th {
    font-weight: 600;
    background-color: var(--bg2);
    vertical-align: middle;
  }

  .m-markdown-small table code {
    font-size: calc(var(--font-size-mono) - 2px);
  }

  .m-markdown table code {
    font-size: calc(var(--font-size-mono) - 1px);
  }

  .m-markdown blockquote,
  .m-markdown-small blockquote {
    margin-inline-start: 0;
    margin-inline-end: 0;
    border-left: 3px solid var(--border-color);
    padding: 6px 0 6px 6px;
  }
  .m-markdown hr{
    border: 1px solid var(--border-color);
  }
`,ae=l`
/* Button */
.m-btn {
  border-radius: var(--border-radius);
  font-weight: 600;
  display: inline-block;
  padding: 6px 16px;
  font-size: var(--font-size-small);
  outline: 0;
  line-height: 1;
  text-align: center;
  white-space: nowrap;
  border: 2px solid var(--primary-color);
  background-color:transparent;
  transition: background-color 0.2s;
  user-select: none;
  cursor: pointer;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
}
.m-btn.primary {
  background-color: var(--primary-color);
  color: var(--primary-color-invert);
}
.m-btn.thin-border { border-width: 1px; }
.m-btn.large { padding:8px 14px; }
.m-btn.small { padding:5px 12px; }
.m-btn.tiny { padding:5px 6px; }
.m-btn.circle { border-radius: 50%; }
.m-btn:hover { 
  background-color: var(--primary-color);
  color: var(--primary-color-invert);
}
.m-btn.nav { border: 2px solid var(--nav-accent-color); }
.m-btn.nav:hover { 
  background-color: var(--nav-accent-color);
}
.m-btn:disabled{ 
  background-color: var(--bg3);
  color: var(--fg3);
  border-color: var(--fg3);
  cursor: not-allowed;
  opacity: 0.4;
}
.toolbar-btn{
  cursor: pointer;
  padding: 4px;
  margin:0 2px;
  font-size: var(--font-size-small);
  min-width: 50px;
  color: var(--primary-color-invert);
  border-radius: 2px;
  border: none;
  background-color: var(--primary-color);
}

input, textarea, select, button, pre {
  color:var(--fg);
  outline: none;
  background-color: var(--input-bg);
  border: 1px solid var(--border-color);
  border-radius: var(--border-radius);
}
button {
  font-family: var(--font-regular);
}

/* Form Inputs */
pre,
select,
textarea,
input[type="file"],
input[type="text"],
input[type="password"] {
  font-family: var(--font-mono);
  font-weight: 400;
  font-size: var(--font-size-small);
  transition: border .2s;
  padding: 6px 5px;
}

select {
  font-family: var(--font-regular);
  padding: 5px 30px 5px 5px;
  background-image: url("data:image/svg+xml;charset=utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2212%22%20height%3D%2212%22%3E%3Cpath%20d%3D%22M10.3%203.3L6%207.6%201.7%203.3A1%201%200%2000.3%204.7l5%205a1%201%200%20001.4%200l5-5a1%201%200%2010-1.4-1.4z%22%20fill%3D%22%23777777%22%2F%3E%3C%2Fsvg%3E"); 
  background-position: calc(100% - 5px) center;
  background-repeat: no-repeat;  
  background-size: 10px;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  cursor: pointer;
}

select:hover {
  border-color: var(--primary-color);
}

textarea::placeholder,
input[type="text"]::placeholder,
input[type="password"]::placeholder {
  color: var(--placeholder-color);
  opacity:1;
}

select:focus,
textarea:focus,
input[type="text"]:focus,
input[type="password"]:focus,
textarea:active,
input[type="text"]:active,
input[type="password"]:active {
  border:1px solid var(--primary-color);
}

input[type="file"]{
  font-family: var(--font-regular);
  padding:2px;
  cursor:pointer;
  border: 1px solid var(--primary-color);
  min-height: calc(var(--font-size-small) + 18px);
}

input[type="file"]::-webkit-file-upload-button {
  font-family: var(--font-regular);
  font-size: var(--font-size-small);
  outline: none;
  cursor:pointer;
  padding: 3px 8px;
  border: 1px solid var(--primary-color);
  background-color: var(--primary-color);
  color: var(--primary-color-invert);
  border-radius: var(--border-radius);;
  -webkit-appearance: none;
}

pre,
textarea {
  scrollbar-width: thin;
  scrollbar-color: var(--border-color) var(--input-bg);
}

pre::-webkit-scrollbar,
textarea::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}

pre::-webkit-scrollbar-track,
textarea::-webkit-scrollbar-track {
  background:var(--input-bg);
}
 
pre::-webkit-scrollbar-thumb,
textarea::-webkit-scrollbar-thumb {
  border-radius: 2px;
  background-color: var(--border-color);
}

.link {
  font-size:var(--font-size-small);
  text-decoration: underline;
  color:var(--blue);
  font-family:var(--font-mono);
  margin-bottom:2px;
}

input[type="checkbox"]:focus{
  outline:0;
}

/* Toggle Body */
input[type="checkbox"] {
  appearance: none;
  display: inline-block;
  background-color: var(--light-bg);
  border: 1px solid var(--light-bg);
  border-radius: 9px;
  cursor: pointer;
  height: 18px;
  position: relative;
  transition: border .25s .15s, box-shadow .25s .3s, padding .25s;
  min-width: 36px;
  width: 36px;
  vertical-align: top;
}
/* Toggle Thumb */
input[type="checkbox"]:after {
  position: absolute;
  background-color: var(--bg);
  border: 1px solid var(--light-bg);
  border-radius: 8px;
  content: '';
  top: 0px;
  left: 0px;
  right: 16px;
  display: block;
  height: 16px;
  transition: border .25s .15s, left .25s .1s, right .15s .175s;
}

/* Toggle Body - Checked */
input[type="checkbox"]:checked {
  box-shadow: inset 0 0 0 13px var(--green);
  border-color: var(--green);
}
/* Toggle Thumb - Checked*/
input[type="checkbox"]:checked:after {
  border: 1px solid var(--green);
  left: 16px;
  right: 1px;
  transition: border .25s, left .15s .25s, right .25s .175s;
}
`,se=l`
.row, .col{
  display:flex;
} 
.row {
  align-items:center;
  flex-direction: row;
}
.col {
  align-items:stretch;
  flex-direction: column;
}
`,le=l`
.m-table {
  border-spacing: 0;  
  border-collapse: separate;
  border: 1px solid var(--light-border-color);
  border-radius: var(--border-radius);
  margin: 0;
  max-width: 100%;
  direction: ltr;
}
.m-table tr:first-child td,
.m-table tr:first-child th {
    border-top: 0 none;
}
.m-table td, 
.m-table th {
  font-size: var(--font-size-small);
  line-height: calc(var(--font-size-small) + 4px);
  padding: 4px 5px 4px;
  vertical-align: top;
}

.m-table.padded-12 td, 
.m-table.padded-12 th {
  padding: 12px;
}

.m-table td:not([align]), 
.m-table th:not([align]) {
  text-align: left;
}

.m-table th {
  color: var(--fg2);
  font-size: var(--font-size-small);
  line-height: calc(var(--font-size-small) + 18px);
  font-weight: 600;
  letter-spacing: normal;
  background-color: var(--bg2);
  vertical-align: bottom;
  border-bottom: 1px solid var(--light-border-color);
}

.m-table > tbody > tr > td,
.m-table > tr > td {
  border-top: 1px solid var(--light-border-color);
  text-overflow: ellipsis;
  overflow: hidden;
}
.table-title {
  font-size:var(--font-size-small);
  font-weight:bold;
  vertical-align: middle;
  margin: 12px 0 4px 0;
}
`,ce=l`
.only-large-screen { display:none; }
.endpoint-head .path{
  display: flex;
  font-family:var(--font-mono);
  font-size: var(--font-size-small);
  align-items: center;
  overflow-wrap: break-word;
  word-break: break-all;
}

.endpoint-head .descr {
  font-size: var(--font-size-small);
  color:var(--light-fg);
  font-weight:400;
  align-items: center;
  overflow-wrap: break-word;
  word-break: break-all;
  display:none;
}

.m-endpoint.expanded{margin-bottom:16px; }
.m-endpoint > .endpoint-head{
  border-width:1px 1px 1px 5px;
  border-style:solid;
  border-color:transparent;
  border-top-color:var(--light-border-color);
  display:flex;
  padding:6px 16px;
  align-items: center;
  cursor: pointer;
}
.m-endpoint > .endpoint-head.put:hover,
.m-endpoint > .endpoint-head.put.expanded{
  border-color:var(--orange); 
  background-color:var(--light-orange); 
}
.m-endpoint > .endpoint-head.post:hover,
.m-endpoint > .endpoint-head.post.expanded {
  border-color:var(--green); 
  background-color:var(--light-green); 
}
.m-endpoint > .endpoint-head.get:hover,
.m-endpoint > .endpoint-head.get.expanded {
  border-color:var(--blue); 
  background-color:var(--light-blue); 
}
.m-endpoint > .endpoint-head.delete:hover,
.m-endpoint > .endpoint-head.delete.expanded {
  border-color:var(--red); 
  background-color:var(--light-red); 
}

.m-endpoint > .endpoint-head.head:hover,
.m-endpoint > .endpoint-head.head.expanded,
.m-endpoint > .endpoint-head.patch:hover,
.m-endpoint > .endpoint-head.patch.expanded,
.m-endpoint > .endpoint-head.options:hover,
.m-endpoint > .endpoint-head.options.expanded {
  border-color:var(--yellow); 
  background-color:var(--light-yellow); 
}

.m-endpoint > .endpoint-head.deprecated:hover,
.m-endpoint > .endpoint-head.deprecated.expanded {
  border-color:var(--border-color); 
  filter:opacity(0.6);
}

.m-endpoint .endpoint-body {
  flex-wrap:wrap;
  padding:16px 0px 0 0px;
  border-width:0px 1px 1px 5px;
  border-style:solid;
  box-shadow: 0px 4px 3px -3px rgba(0, 0, 0, 0.15);
}
.m-endpoint .endpoint-body.delete{ border-color:var(--red); }
.m-endpoint .endpoint-body.put{ border-color:var(--orange); }
.m-endpoint .endpoint-body.post{border-color:var(--green);}
.m-endpoint .endpoint-body.get{ border-color:var(--blue); }
.m-endpoint .endpoint-body.head,
.m-endpoint .endpoint-body.patch,
.m-endpoint .endpoint-body.options { 
  border-color:var(--yellow); 
}

.m-endpoint .endpoint-body.deprecated{ 
  border-color:var(--border-color);
  filter:opacity(0.6);
}

.endpoint-head .deprecated{
  color: var(--light-fg);
  filter:opacity(0.6);
}

.summary{
  padding:8px 8px;
}
.summary .title{
  font-size:calc(var(--font-size-regular) + 2px);
  margin-bottom: 6px;
  word-break: break-all;
}

.method{
  padding:2px 5px;
  vertical-align: middle;
  font-size:var(--font-size-small);
  height: calc(var(--font-size-small) + 16px);
  line-height: calc(var(--font-size-small) + 8px);
  width: 60px;
  border-radius: 2px;
  display:inline-block;
  text-align: center;
  font-weight: bold;
  text-transform:uppercase;
  margin-right:5px;
}
.method.delete{ border: 2px solid var(--red);}
.method.put{ border: 2px solid var(--orange); }
.method.post{ border: 2px solid var(--green); }
.method.get{ border: 2px solid var(--blue); }
.method.get.deprecated{ border: 2px solid var(--border-color); }
.method.head,
.method.patch,
.method.options { 
  border: 2px solid var(--yellow); 
}

.req-resp-container{
  display: flex;
  margin-top:16px;
  align-items: stretch;
  flex-wrap: wrap;
  flex-direction: column;
  border-top:1px solid var(--light-border-color);
}

.view-mode-request,
api-response.view-mode {
  flex:1; 
  min-height:100px;
  padding:16px 8px;
  overflow:hidden;
}
.view-mode-request {
  border-width:0 0 1px 0;
  border-style:dashed;
}

.head .view-mode-request,
.patch .view-mode-request,
.options .view-mode-request { 
  border-color:var(--yellow); 
}
.put .view-mode-request { 
  border-color:var(--orange); 
}
.post .view-mode-request { 
  border-color:var(--green); 
}
.get .view-mode-request { 
  border-color:var(--blue); 
}
.delete .view-mode-request { 
  border-color:var(--red); 
}

@media only screen and (min-width: 1024px) {
  .only-large-screen { display:block; }
  .endpoint-head .path{
    font-size: var(--font-size-regular);
  }
  .endpoint-head .descr{
    display: flex;
  }
  .endpoint-head .m-markdown-small,
  .descr .m-markdown-small{
    display:block;
  }
  .req-resp-container{
    flex-direction: var(--layout, row);
    flex-wrap: nowrap;
  }
  api-response.view-mode {
    padding:16px;
  }
  .view-mode-request.row-layout {
    border-width:0 1px 0 0;
    padding:16px;
  }
  .summary{
    padding:8px 16px;
  }
}
`,pe=l`
code[class*="language-"],
pre[class*="language-"] {
  text-align: left;
  white-space: pre;
  word-spacing: normal;
  word-break: normal;
  word-wrap: normal;
  line-height: 1.5;
  tab-size: 2;

  -webkit-hyphens: none;
  -moz-hyphens: none;
  -ms-hyphens: none;
  hyphens: none;
}

/* Code blocks */
pre[class*="language-"] {
  padding: 1em;
  margin: .5em 0;
  overflow: auto;
}

/* Inline code */
:not(pre) > code[class*="language-"] {
  white-space: normal;
}

.token.comment,
.token.block-comment,
.token.prolog,
.token.doctype,
.token.cdata {
  color: var(--light-fg)
}

.token.punctuation {
  color: var(--fg);
}

.token.tag,
.token.attr-name,
.token.namespace,
.token.deleted {
  color:var(--pink);
}

.token.function-name {
  color: var(--blue);
}

.token.boolean,
.token.number,
.token.function {
  color: var(--red);
}

.token.property,
.token.class-name,
.token.constant,
.token.symbol {
  color: var(--code-property-color);
}

.token.selector,
.token.important,
.token.atrule,
.token.keyword,
.token.builtin {
  color: var(--code-keyword-color);
}

.token.string,
.token.char,
.token.attr-value,
.token.regex,
.token.variable { 
  color: var(--green);
}

.token.operator,
.token.entity,
.token.url {
  color: var(--code-operator-color);
}

.token.important,
.token.bold {
  font-weight: bold;
}
.token.italic {
  font-style: italic;
}

.token.entity {
  cursor: help;
}

.token.inserted {
  color: green;
}
`,ue=l`
.tab-panel {
  border: none;
}
.tab-buttons {
  height:30px;
  border-bottom: 1px solid var(--light-border-color) ;
  align-items: stretch;
  overflow-y: hidden;
  overflow-x: auto;
  scrollbar-width: thin;
}
.tab-buttons::-webkit-scrollbar {
  height: 1px;
  background-color: var(--border-color);
}
.tab-btn {
  border: none;
  border-bottom: 3px solid transparent; 
  color: var(--light-fg);
  background-color: transparent;
  white-space: nowrap;
  cursor:pointer;
  outline:none;
  font-family:var(--font-regular); 
  font-size:var(--font-size-small);
  margin-right:16px;
  padding:1px;
}
.tab-btn.active {
  border-bottom: 3px solid var(--primary-color); 
  font-weight:bold;
  color:var(--primary-color);
}

.tab-btn:hover {
  color:var(--primary-color);
}
.tab-content {
  margin:-1px 0 0 0;
  position:relative;
}
`,de=l`
.nav-bar {
  width:0;
  height:100%;
  overflow: hidden;
  color:var(--nav-text-color);
  background-color: var(--nav-bg-color);
  background-blend-mode: multiply;
  line-height: calc(var(--font-size-small) + 4px);
  display:none;
  position:relative;
  flex-direction:column;
  flex-wrap:nowrap;
  word-break:break-word;
}
::slotted(*){
  padding:16px 30px 0 16px;
}
.nav-scroll {
  overflow-x: hidden;
  overflow-y: auto;
  overflow-y: overlay;
  scrollbar-width: thin;
  scrollbar-color: var(--nav-hover-bg-color) transparent;
}

.nav-bar-tag {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
}
.nav-bar.read .nav-bar-tag-icon {
  display:none;
}

.nav-bar-tag-icon {
  color: var(--nav-text-color);
  font-size: 20px; 
}
.nav-bar-tag-icon:hover {
  color:var(--nav-hover-text-color);
}
.nav-bar.focused .nav-bar-tag-and-paths.collapsed .nav-bar-paths-under-tag {
  display:none;
}
.nav-bar.focused .nav-bar-tag-and-paths.collapsed .nav-bar-tag-icon::after {
  content: '⌵';
  width:16px;
  height:16px;
  text-align: center;
  display: inline-block;
  transform: rotate(270deg);
}
.nav-bar.focused .nav-bar-tag-and-paths.expanded .nav-bar-tag-icon::after {
  content: '⌵';
  width:16px;
  height:16px;
  text-align: center;
  display: inline-block;
}
.nav-scroll::-webkit-scrollbar {
  width: var(--scroll-bar-width, 8px);
}
.nav-scroll::-webkit-scrollbar-track {
  background:transparent;
}
.nav-scroll::-webkit-scrollbar-thumb {
  background-color: var(--nav-hover-bg-color);
}

.nav-bar-tag {
  font-size: var(--font-size-regular);
  color: var(--nav-accent-color);
  border-left:4px solid transparent;
  font-weight:bold;
  padding: 15px 15px 15px 10px;
  text-transform: capitalize;
}

.nav-bar-components,
.nav-bar-h1,
.nav-bar-h2,
.nav-bar-info,
.nav-bar-tag,
.nav-bar-path {
  display:flex;
  cursor:pointer;
  border-left:4px solid transparent;
}

.nav-bar-h1,
.nav-bar-h2,
.nav-bar-path {
  font-size: calc(var(--font-size-small) + 1px);
  padding: var(--nav-item-padding);
}
.nav-bar-path.small-font {
  font-size: var(--font-size-small);
}

.nav-bar-info {
  font-size: var(--font-size-regular);
  padding: 16px 10px;
  font-weight:bold;
}
.nav-bar-section {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-size: var(--font-size-small);
  color: var(--nav-text-color);
  padding: var(--nav-item-padding);
  font-weight:bold;
}
.nav-bar-section.operations {
  cursor:pointer;
}
.nav-bar-section.operations:hover {
  color:var(--nav-hover-text-color);
  background-color:var(--nav-hover-bg-color);
}

.nav-bar-section:first-child {
  display: none;
}
.nav-bar-h2 {margin-left:12px;}

.nav-bar-h1.active,
.nav-bar-h2.active,
.nav-bar-info.active,
.nav-bar-tag.active,
.nav-bar-path.active,
.nav-bar-section.operations.active {
  border-left:4px solid var(--nav-accent-color);
  color:var(--nav-hover-text-color);
}

.nav-bar-h1:hover,
.nav-bar-h2:hover,
.nav-bar-info:hover,
.nav-bar-tag:hover,
.nav-bar-path:hover {
  color:var(--nav-hover-text-color);
  background-color:var(--nav-hover-bg-color);
}
`,he=l`
#api-info {
  font-size:calc(var(--font-size-regular) - 1px);margin-top:8px
  margin-left: -15px;
}

#api-info span:before {
  content: "|";
  display: inline-block;
  opacity: 0.5;
  width: 15px;
  text-align: center;
}
#api-info span:first-child:before {
  content: "";
  width: 0px;
}
`,fe=l`

`;const me=new RegExp(/[\s#:?&={}]/,"g"),ye="_rapidoc_api_key";function ge(e){return new Promise((t=>setTimeout(t,e)))}function ve(e,t){const r=t.currentTarget,n=document.createElement("textarea");n.value=e,n.style.position="fixed",document.body.appendChild(n),n.focus(),n.select();try{document.execCommand("copy"),r.innerText="Copied",setTimeout((()=>{r.innerText="Copy"}),5e3)}catch(e){console.error("Unable to copy",e)}document.body.removeChild(n)}function be(e,t,r="includes"){if("includes"===r){return`${t.method} ${t.path} ${t.summary||t.description||""} ${t.operationId||""}`.toLowerCase().includes(e.toLowerCase())}return new RegExp(e,"i").test(`${t.method} ${t.path}`)}function xe(e,t=new Set){return e?(Object.keys(e).forEach((r=>{var n;if(t.add(r),e[r].properties)xe(e[r].properties,t);else if(null!==(n=e[r].items)&&void 0!==n&&n.properties){var o;xe(null===(o=e[r].items)||void 0===o?void 0:o.properties,t)}})),t):t}function we(e,t){if(e){const r=document.createElement("a");document.body.appendChild(r),r.style="display: none",r.href=e,r.download=t,r.click(),r.remove()}}function $e(e){if(e){const t=document.createElement("a");document.body.appendChild(t),t.style="display: none",t.href=e,t.target="_blank",t.click(),t.remove()}}var Ae=r(764).Buffer;function ke(e){if(e.__esModule)return e;var t=Object.defineProperty({},"__esModule",{value:!0});return Object.keys(e).forEach((function(r){var n=Object.getOwnPropertyDescriptor(e,r);Object.defineProperty(t,r,n.get?n:{enumerable:!0,get:function(){return e[r]}})})),t}var Se,Ee,De,Oe,Ce,je,Te,_e,Fe,Be="object"==typeof r.g&&r.g&&r.g.Object===Object&&r.g,Ie=Be,Pe="object"==typeof self&&self&&self.Object===Object&&self,Re=Ie||Pe||Function("return this")(),Ue=Re.Symbol,Le=Ue,Ne=Object.prototype,ze=Ne.hasOwnProperty,qe=Ne.toString,Me=Le?Le.toStringTag:void 0,He=Object.prototype.toString,We=function(e){var t=ze.call(e,Me),r=e[Me];try{e[Me]=void 0;var n=!0}catch(e){}var o=qe.call(e);return n&&(t?e[Me]=r:delete e[Me]),o},Ve=Ue?Ue.toStringTag:void 0,Ge=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":Ve&&Ve in Object(e)?We(e):function(e){return He.call(e)}(e)},Ke=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},Ye=Ge,Je=Ke,Ze=function(e){if(!Je(e))return!1;var t=Ye(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t},Qe=Re["__core-js_shared__"],Xe=(Se=/[^.]+$/.exec(Qe&&Qe.keys&&Qe.keys.IE_PROTO||""))?"Symbol(src)_1."+Se:"",et=Function.prototype.toString,tt=function(e){if(null!=e){try{return et.call(e)}catch(e){}try{return e+""}catch(e){}}return""},rt=Ze,nt=function(e){return!!Xe&&Xe in e},ot=Ke,it=tt,at=/^\[object .+?Constructor\]$/,st=Function.prototype,lt=Object.prototype,ct=st.toString,pt=lt.hasOwnProperty,ut=RegExp("^"+ct.call(pt).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),dt=function(e,t){var r=function(e,t){return null==e?void 0:e[t]}(e,t);return function(e){return!(!ot(e)||nt(e))&&(rt(e)?ut:at).test(it(e))}(r)?r:void 0},ht=dt,ft=function(){try{var e=ht(Object,"defineProperty");return e({},"",{}),e}catch(e){}}(),mt=ft,yt=function(e,t,r){"__proto__"==t&&mt?mt(e,t,{configurable:!0,enumerable:!0,value:r,writable:!0}):e[t]=r},gt=function(e,t){return e===t||e!=e&&t!=t},vt=yt,bt=gt,xt=Object.prototype.hasOwnProperty,wt=function(e,t,r){var n=e[t];xt.call(e,t)&&bt(n,r)&&(void 0!==r||t in e)||vt(e,t,r)},$t=wt,At=yt,kt=function(e,t,r,n){var o=!r;r||(r={});for(var i=-1,a=t.length;++i<a;){var s=t[i],l=n?n(r[s],e[s],s,r,e):void 0;void 0===l&&(l=e[s]),o?At(r,s,l):$t(r,s,l)}return r},St=function(e){return e},Et=function(e,t,r){switch(r.length){case 0:return e.call(t);case 1:return e.call(t,r[0]);case 2:return e.call(t,r[0],r[1]);case 3:return e.call(t,r[0],r[1],r[2])}return e.apply(t,r)},Dt=Math.max,Ot=function(e,t,r){return t=Dt(void 0===t?e.length-1:t,0),function(){for(var n=arguments,o=-1,i=Dt(n.length-t,0),a=Array(i);++o<i;)a[o]=n[t+o];o=-1;for(var s=Array(t+1);++o<t;)s[o]=n[o];return s[t]=r(a),Et(e,this,s)}},Ct=function(e){return function(){return e}},jt=ft,Tt=jt?function(e,t){return jt(e,"toString",{configurable:!0,enumerable:!1,value:Ct(t),writable:!0})}:St,_t=Date.now,Ft=function(e){var t=0,r=0;return function(){var n=_t(),o=16-(n-r);if(r=n,o>0){if(++t>=800)return arguments[0]}else t=0;return e.apply(void 0,arguments)}}(Tt),Bt=St,It=Ot,Pt=Ft,Rt=function(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=9007199254740991},Ut=Ze,Lt=Rt,Nt=function(e){return null!=e&&Lt(e.length)&&!Ut(e)},zt=/^(?:0|[1-9]\d*)$/,qt=function(e,t){var r=typeof e;return!!(t=null==t?9007199254740991:t)&&("number"==r||"symbol"!=r&&zt.test(e))&&e>-1&&e%1==0&&e<t},Mt=gt,Ht=Nt,Wt=qt,Vt=Ke,Gt=Object.prototype,Kt=function(e){var t=e&&e.constructor;return e===("function"==typeof t&&t.prototype||Gt)},Yt=function(e){return null!=e&&"object"==typeof e},Jt=Ge,Zt=Yt,Qt=function(e){return Zt(e)&&"[object Arguments]"==Jt(e)},Xt=Yt,er=Object.prototype,tr=er.hasOwnProperty,rr=er.propertyIsEnumerable,nr=Qt(function(){return arguments}())?Qt:function(e){return Xt(e)&&tr.call(e,"callee")&&!rr.call(e,"callee")},or=Array.isArray,ir={exports:{}};Ee=ir,Oe=Re,Ce=function(){return!1},Fe=((_e=(Te=(je=(De=ir.exports)&&!De.nodeType&&De)&&Ee&&!Ee.nodeType&&Ee)&&Te.exports===je?Oe.Buffer:void 0)?_e.isBuffer:void 0)||Ce,Ee.exports=Fe;var ar=Ge,sr=Rt,lr=Yt,cr={};cr["[object Float32Array]"]=cr["[object Float64Array]"]=cr["[object Int8Array]"]=cr["[object Int16Array]"]=cr["[object Int32Array]"]=cr["[object Uint8Array]"]=cr["[object Uint8ClampedArray]"]=cr["[object Uint16Array]"]=cr["[object Uint32Array]"]=!0,cr["[object Arguments]"]=cr["[object Array]"]=cr["[object ArrayBuffer]"]=cr["[object Boolean]"]=cr["[object DataView]"]=cr["[object Date]"]=cr["[object Error]"]=cr["[object Function]"]=cr["[object Map]"]=cr["[object Number]"]=cr["[object Object]"]=cr["[object RegExp]"]=cr["[object Set]"]=cr["[object String]"]=cr["[object WeakMap]"]=!1;var pr=function(e){return function(t){return e(t)}},ur={exports:{}};!function(e,t){var r=Be,n=t&&!t.nodeType&&t,o=n&&e&&!e.nodeType&&e,i=o&&o.exports===n&&r.process,a=function(){try{return o&&o.require&&o.require("util").types||i&&i.binding&&i.binding("util")}catch(e){}}();e.exports=a}(ur,ur.exports);var dr=function(e){return lr(e)&&sr(e.length)&&!!cr[ar(e)]},hr=pr,fr=ur.exports,mr=fr&&fr.isTypedArray,yr=mr?hr(mr):dr,gr=function(e,t){for(var r=-1,n=Array(e);++r<e;)n[r]=t(r);return n},vr=nr,br=or,xr=ir.exports,wr=qt,$r=yr,Ar=Object.prototype.hasOwnProperty,kr=function(e,t){var r=br(e),n=!r&&vr(e),o=!r&&!n&&xr(e),i=!r&&!n&&!o&&$r(e),a=r||n||o||i,s=a?gr(e.length,String):[],l=s.length;for(var c in e)!t&&!Ar.call(e,c)||a&&("length"==c||o&&("offset"==c||"parent"==c)||i&&("buffer"==c||"byteLength"==c||"byteOffset"==c)||wr(c,l))||s.push(c);return s},Sr=function(e,t){return function(r){return e(t(r))}},Er=Sr(Object.keys,Object),Dr=Kt,Or=Er,Cr=Object.prototype.hasOwnProperty,jr=function(e){if(!Dr(e))return Or(e);var t=[];for(var r in Object(e))Cr.call(e,r)&&"constructor"!=r&&t.push(r);return t},Tr=kr,_r=jr,Fr=Nt,Br=function(e){return Fr(e)?Tr(e):_r(e)},Ir=wt,Pr=kt,Rr=function(e){return function(e,t){return Pt(It(e,t,Bt),e+"")}((function(t,r){var n=-1,o=r.length,i=o>1?r[o-1]:void 0,a=o>2?r[2]:void 0;for(i=e.length>3&&"function"==typeof i?(o--,i):void 0,a&&function(e,t,r){if(!Vt(r))return!1;var n=typeof t;return!!("number"==n?Ht(r)&&Wt(t,r.length):"string"==n&&t in r)&&Mt(r[t],e)}(r[0],r[1],a)&&(i=o<3?void 0:i,o=1),t=Object(t);++n<o;){var s=r[n];s&&e(t,s,n,i)}return t}))},Ur=Nt,Lr=Kt,Nr=Br,zr=Object.prototype.hasOwnProperty,qr=Rr((function(e,t){if(Lr(t)||Ur(t))Pr(t,Nr(t),e);else for(var r in t)zr.call(t,r)&&Ir(e,r,t[r])})),Mr=Ge,Hr=Yt,Wr=function(e){return"symbol"==typeof e||Hr(e)&&"[object Symbol]"==Mr(e)},Vr=or,Gr=Wr,Kr=Ue?Ue.prototype:void 0,Yr=Kr?Kr.toString:void 0,Jr=function e(t){if("string"==typeof t)return t;if(Vr(t))return function(e,t){for(var r=-1,n=null==e?0:e.length,o=Array(n);++r<n;)o[r]=t(e[r],r,e);return o}(t,e)+"";if(Gr(t))return Yr?Yr.call(t):"";var r=t+"";return"0"==r&&1/t==-1/0?"-0":r},Zr=/\s/,Qr=/^\s+/,Xr=function(e){return e?e.slice(0,function(e){for(var t=e.length;t--&&Zr.test(e.charAt(t)););return t}(e)+1).replace(Qr,""):e},en=Ke,tn=Wr,rn=/^[-+]0x[0-9a-f]+$/i,nn=/^0b[01]+$/i,on=/^0o[0-7]+$/i,an=parseInt,sn=function(e){return e?1/0===(e=function(e){if("number"==typeof e)return e;if(tn(e))return NaN;if(en(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=en(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=Xr(e);var r=nn.test(e);return r||on.test(e)?an(e.slice(2),r?2:8):rn.test(e)?NaN:+e}(e))||-1/0===e?17976931348623157e292*(e<0?-1:1):e==e?e:0:0===e?e:0},ln=function(e){var t=sn(e),r=t%1;return t==t?r?t-r:t:0},cn=Jr,pn=function(e){return null==e?"":cn(e)},un=function(e,t,r){return e==e&&(void 0!==r&&(e=e<=r?e:r),void 0!==t&&(e=e>=t?e:t)),e},dn=Jr,hn=ln,fn=pn,mn=function(e,t,r){return e=fn(e),r=null==r?0:un(hn(r),0,e.length),t=dn(t),e.slice(r,r+t.length)==t},yn={},gn={exports:{}};!function(e,t){!function(n){var o=t&&!t.nodeType&&t,i=e&&!e.nodeType&&e,a="object"==typeof r.g&&r.g;a.global!==a&&a.window!==a&&a.self!==a||(n=a);var s,l,c=2147483647,p=36,u=/^xn--/,d=/[^\x20-\x7E]/,h=/[\x2E\u3002\uFF0E\uFF61]/g,f={overflow:"Overflow: input needs wider integers to process","not-basic":"Illegal input >= 0x80 (not a basic code point)","invalid-input":"Invalid input"},m=Math.floor,y=String.fromCharCode;function g(e){throw RangeError(f[e])}function v(e,t){for(var r=e.length,n=[];r--;)n[r]=t(e[r]);return n}function b(e,t){var r=e.split("@"),n="";return r.length>1&&(n=r[0]+"@",e=r[1]),n+v((e=e.replace(h,".")).split("."),t).join(".")}function x(e){for(var t,r,n=[],o=0,i=e.length;o<i;)(t=e.charCodeAt(o++))>=55296&&t<=56319&&o<i?56320==(64512&(r=e.charCodeAt(o++)))?n.push(((1023&t)<<10)+(1023&r)+65536):(n.push(t),o--):n.push(t);return n}function w(e){return v(e,(function(e){var t="";return e>65535&&(t+=y((e-=65536)>>>10&1023|55296),e=56320|1023&e),t+y(e)})).join("")}function $(e,t){return e+22+75*(e<26)-((0!=t)<<5)}function A(e,t,r){var n=0;for(e=r?m(e/700):e>>1,e+=m(e/t);e>455;n+=p)e=m(e/35);return m(n+36*e/(e+38))}function k(e){var t,r,n,o,i,a,s,l,u,d,h,f=[],y=e.length,v=0,b=128,x=72;for((r=e.lastIndexOf("-"))<0&&(r=0),n=0;n<r;++n)e.charCodeAt(n)>=128&&g("not-basic"),f.push(e.charCodeAt(n));for(o=r>0?r+1:0;o<y;){for(i=v,a=1,s=p;o>=y&&g("invalid-input"),((l=(h=e.charCodeAt(o++))-48<10?h-22:h-65<26?h-65:h-97<26?h-97:p)>=p||l>m((c-v)/a))&&g("overflow"),v+=l*a,!(l<(u=s<=x?1:s>=x+26?26:s-x));s+=p)a>m(c/(d=p-u))&&g("overflow"),a*=d;x=A(v-i,t=f.length+1,0==i),m(v/t)>c-b&&g("overflow"),b+=m(v/t),v%=t,f.splice(v++,0,b)}return w(f)}function S(e){var t,r,n,o,i,a,s,l,u,d,h,f,v,b,w,k=[];for(f=(e=x(e)).length,t=128,r=0,i=72,a=0;a<f;++a)(h=e[a])<128&&k.push(y(h));for(n=o=k.length,o&&k.push("-");n<f;){for(s=c,a=0;a<f;++a)(h=e[a])>=t&&h<s&&(s=h);for(s-t>m((c-r)/(v=n+1))&&g("overflow"),r+=(s-t)*v,t=s,a=0;a<f;++a)if((h=e[a])<t&&++r>c&&g("overflow"),h==t){for(l=r,u=p;!(l<(d=u<=i?1:u>=i+26?26:u-i));u+=p)w=l-d,b=p-d,k.push(y($(d+w%b,0))),l=m(w/b);k.push(y($(l,0))),i=A(r,v,n==o),r=0,++n}++r,++t}return k.join("")}if(s={version:"1.3.2",ucs2:{decode:x,encode:w},decode:k,encode:S,toASCII:function(e){return b(e,(function(e){return d.test(e)?"xn--"+S(e):e}))},toUnicode:function(e){return b(e,(function(e){return u.test(e)?k(e.slice(4).toLowerCase()):e}))}},o&&i)if(e.exports==o)i.exports=s;else for(l in s)s.hasOwnProperty(l)&&(o[l]=s[l]);else n.punycode=s}(this)}(gn,gn.exports);var vn={};function bn(e,t){return Object.prototype.hasOwnProperty.call(e,t)}var xn=function(e){switch(typeof e){case"string":return e;case"boolean":return e?"true":"false";case"number":return isFinite(e)?e:"";default:return""}};vn.decode=vn.parse=function(e,t,r,n){t=t||"&",r=r||"=";var o={};if("string"!=typeof e||0===e.length)return o;var i=/\+/g;e=e.split(t);var a=1e3;n&&"number"==typeof n.maxKeys&&(a=n.maxKeys);var s=e.length;a>0&&s>a&&(s=a);for(var l=0;l<s;++l){var c,p,u,d,h=e[l].replace(i,"%20"),f=h.indexOf(r);f>=0?(c=h.substr(0,f),p=h.substr(f+1)):(c=h,p=""),u=decodeURIComponent(c),d=decodeURIComponent(p),bn(o,u)?Array.isArray(o[u])?o[u].push(d):o[u]=[o[u],d]:o[u]=d}return o},vn.encode=vn.stringify=function(e,t,r,n){return t=t||"&",r=r||"=",null===e&&(e=void 0),"object"==typeof e?Object.keys(e).map((function(n){var o=encodeURIComponent(xn(n))+r;return Array.isArray(e[n])?e[n].map((function(e){return o+encodeURIComponent(xn(e))})).join(t):o+encodeURIComponent(xn(e[n]))})).join(t):n?encodeURIComponent(xn(n))+r+encodeURIComponent(xn(e)):""};var wn=gn.exports,$n=function(e){return"string"==typeof e},An=function(e){return"object"==typeof e&&null!==e},kn=function(e){return null===e},Sn=function(e){return null==e};function En(){this.protocol=null,this.slashes=null,this.auth=null,this.host=null,this.port=null,this.hostname=null,this.hash=null,this.search=null,this.query=null,this.pathname=null,this.path=null,this.href=null}yn.parse=Nn,yn.resolve=function(e,t){return Nn(e,!1,!0).resolve(t)},yn.resolveObject=function(e,t){return e?Nn(e,!1,!0).resolveObject(t):t},yn.format=function(e){return $n(e)&&(e=Nn(e)),e instanceof En?e.format():En.prototype.format.call(e)},yn.Url=En;var Dn=/^([a-z0-9.+-]+:)/i,On=/:[0-9]*$/,Cn=/^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,jn=["{","}","|","\\","^","`"].concat(["<",">",'"',"`"," ","\r","\n","\t"]),Tn=["'"].concat(jn),_n=["%","/","?",";","#"].concat(Tn),Fn=["/","?","#"],Bn=/^[+a-z0-9A-Z_-]{0,63}$/,In=/^([+a-z0-9A-Z_-]{0,63})(.*)$/,Pn={javascript:!0,"javascript:":!0},Rn={javascript:!0,"javascript:":!0},Un={http:!0,https:!0,ftp:!0,gopher:!0,file:!0,"http:":!0,"https:":!0,"ftp:":!0,"gopher:":!0,"file:":!0},Ln=vn;function Nn(e,t,r){if(e&&An(e)&&e instanceof En)return e;var n=new En;return n.parse(e,t,r),n}En.prototype.parse=function(e,t,r){if(!$n(e))throw new TypeError("Parameter 'url' must be a string, not "+typeof e);var n=e.indexOf("?"),o=-1!==n&&n<e.indexOf("#")?"?":"#",i=e.split(o);i[0]=i[0].replace(/\\/g,"/");var a=e=i.join(o);if(a=a.trim(),!r&&1===e.split("#").length){var s=Cn.exec(a);if(s)return this.path=a,this.href=a,this.pathname=s[1],s[2]?(this.search=s[2],this.query=t?Ln.parse(this.search.substr(1)):this.search.substr(1)):t&&(this.search="",this.query={}),this}var l=Dn.exec(a);if(l){var c=(l=l[0]).toLowerCase();this.protocol=c,a=a.substr(l.length)}if(r||l||a.match(/^\/\/[^@\/]+@[^@\/]+/)){var p="//"===a.substr(0,2);!p||l&&Rn[l]||(a=a.substr(2),this.slashes=!0)}if(!Rn[l]&&(p||l&&!Un[l])){for(var u,d,h=-1,f=0;f<Fn.length;f++)-1!==(m=a.indexOf(Fn[f]))&&(-1===h||m<h)&&(h=m);for(-1!==(d=-1===h?a.lastIndexOf("@"):a.lastIndexOf("@",h))&&(u=a.slice(0,d),a=a.slice(d+1),this.auth=decodeURIComponent(u)),h=-1,f=0;f<_n.length;f++){var m;-1!==(m=a.indexOf(_n[f]))&&(-1===h||m<h)&&(h=m)}-1===h&&(h=a.length),this.host=a.slice(0,h),a=a.slice(h),this.parseHost(),this.hostname=this.hostname||"";var y="["===this.hostname[0]&&"]"===this.hostname[this.hostname.length-1];if(!y)for(var g=this.hostname.split(/\./),v=(f=0,g.length);f<v;f++){var b=g[f];if(b&&!b.match(Bn)){for(var x="",w=0,$=b.length;w<$;w++)b.charCodeAt(w)>127?x+="x":x+=b[w];if(!x.match(Bn)){var A=g.slice(0,f),k=g.slice(f+1),S=b.match(In);S&&(A.push(S[1]),k.unshift(S[2])),k.length&&(a="/"+k.join(".")+a),this.hostname=A.join(".");break}}}this.hostname.length>255?this.hostname="":this.hostname=this.hostname.toLowerCase(),y||(this.hostname=wn.toASCII(this.hostname));var E=this.port?":"+this.port:"",D=this.hostname||"";this.host=D+E,this.href+=this.host,y&&(this.hostname=this.hostname.substr(1,this.hostname.length-2),"/"!==a[0]&&(a="/"+a))}if(!Pn[c])for(f=0,v=Tn.length;f<v;f++){var O=Tn[f];if(-1!==a.indexOf(O)){var C=encodeURIComponent(O);C===O&&(C=escape(O)),a=a.split(O).join(C)}}var j=a.indexOf("#");-1!==j&&(this.hash=a.substr(j),a=a.slice(0,j));var T=a.indexOf("?");if(-1!==T?(this.search=a.substr(T),this.query=a.substr(T+1),t&&(this.query=Ln.parse(this.query)),a=a.slice(0,T)):t&&(this.search="",this.query={}),a&&(this.pathname=a),Un[c]&&this.hostname&&!this.pathname&&(this.pathname="/"),this.pathname||this.search){E=this.pathname||"";var _=this.search||"";this.path=E+_}return this.href=this.format(),this},En.prototype.format=function(){var e=this.auth||"";e&&(e=(e=encodeURIComponent(e)).replace(/%3A/i,":"),e+="@");var t=this.protocol||"",r=this.pathname||"",n=this.hash||"",o=!1,i="";this.host?o=e+this.host:this.hostname&&(o=e+(-1===this.hostname.indexOf(":")?this.hostname:"["+this.hostname+"]"),this.port&&(o+=":"+this.port)),this.query&&An(this.query)&&Object.keys(this.query).length&&(i=Ln.stringify(this.query));var a=this.search||i&&"?"+i||"";return t&&":"!==t.substr(-1)&&(t+=":"),this.slashes||(!t||Un[t])&&!1!==o?(o="//"+(o||""),r&&"/"!==r.charAt(0)&&(r="/"+r)):o||(o=""),n&&"#"!==n.charAt(0)&&(n="#"+n),a&&"?"!==a.charAt(0)&&(a="?"+a),t+o+(r=r.replace(/[?#]/g,(function(e){return encodeURIComponent(e)})))+(a=a.replace("#","%23"))+n},En.prototype.resolve=function(e){return this.resolveObject(Nn(e,!1,!0)).format()},En.prototype.resolveObject=function(e){if($n(e)){var t=new En;t.parse(e,!1,!0),e=t}for(var r=new En,n=Object.keys(this),o=0;o<n.length;o++){var i=n[o];r[i]=this[i]}if(r.hash=e.hash,""===e.href)return r.href=r.format(),r;if(e.slashes&&!e.protocol){for(var a=Object.keys(e),s=0;s<a.length;s++){var l=a[s];"protocol"!==l&&(r[l]=e[l])}return Un[r.protocol]&&r.hostname&&!r.pathname&&(r.path=r.pathname="/"),r.href=r.format(),r}if(e.protocol&&e.protocol!==r.protocol){if(!Un[e.protocol]){for(var c=Object.keys(e),p=0;p<c.length;p++){var u=c[p];r[u]=e[u]}return r.href=r.format(),r}if(r.protocol=e.protocol,e.host||Rn[e.protocol])r.pathname=e.pathname;else{for(var d=(e.pathname||"").split("/");d.length&&!(e.host=d.shift()););e.host||(e.host=""),e.hostname||(e.hostname=""),""!==d[0]&&d.unshift(""),d.length<2&&d.unshift(""),r.pathname=d.join("/")}if(r.search=e.search,r.query=e.query,r.host=e.host||"",r.auth=e.auth,r.hostname=e.hostname||e.host,r.port=e.port,r.pathname||r.search){var h=r.pathname||"",f=r.search||"";r.path=h+f}return r.slashes=r.slashes||e.slashes,r.href=r.format(),r}var m=r.pathname&&"/"===r.pathname.charAt(0),y=e.host||e.pathname&&"/"===e.pathname.charAt(0),g=y||m||r.host&&e.pathname,v=g,b=r.pathname&&r.pathname.split("/")||[],x=(d=e.pathname&&e.pathname.split("/")||[],r.protocol&&!Un[r.protocol]);if(x&&(r.hostname="",r.port=null,r.host&&(""===b[0]?b[0]=r.host:b.unshift(r.host)),r.host="",e.protocol&&(e.hostname=null,e.port=null,e.host&&(""===d[0]?d[0]=e.host:d.unshift(e.host)),e.host=null),g=g&&(""===d[0]||""===b[0])),y)r.host=e.host||""===e.host?e.host:r.host,r.hostname=e.hostname||""===e.hostname?e.hostname:r.hostname,r.search=e.search,r.query=e.query,b=d;else if(d.length)b||(b=[]),b.pop(),b=b.concat(d),r.search=e.search,r.query=e.query;else if(!Sn(e.search))return x&&(r.hostname=r.host=b.shift(),(S=!!(r.host&&r.host.indexOf("@")>0)&&r.host.split("@"))&&(r.auth=S.shift(),r.host=r.hostname=S.shift())),r.search=e.search,r.query=e.query,kn(r.pathname)&&kn(r.search)||(r.path=(r.pathname?r.pathname:"")+(r.search?r.search:"")),r.href=r.format(),r;if(!b.length)return r.pathname=null,r.search?r.path="/"+r.search:r.path=null,r.href=r.format(),r;for(var w=b.slice(-1)[0],$=(r.host||e.host||b.length>1)&&("."===w||".."===w)||""===w,A=0,k=b.length;k>=0;k--)"."===(w=b[k])?b.splice(k,1):".."===w?(b.splice(k,1),A++):A&&(b.splice(k,1),A--);if(!g&&!v)for(;A--;A)b.unshift("..");!g||""===b[0]||b[0]&&"/"===b[0].charAt(0)||b.unshift(""),$&&"/"!==b.join("/").substr(-1)&&b.push("");var S,E=""===b[0]||b[0]&&"/"===b[0].charAt(0);return x&&(r.hostname=r.host=E?"":b.length?b.shift():"",(S=!!(r.host&&r.host.indexOf("@")>0)&&r.host.split("@"))&&(r.auth=S.shift(),r.host=r.hostname=S.shift())),(g=g||r.host&&b.length)&&!E&&b.unshift(""),b.length?r.pathname=b.join("/"):(r.pathname=null,r.path=null),kn(r.pathname)&&kn(r.search)||(r.path=(r.pathname?r.pathname:"")+(r.search?r.search:"")),r.auth=e.auth||r.auth,r.slashes=r.slashes||e.slashes,r.href=r.format(),r},En.prototype.parseHost=function(){var e=this.host,t=On.exec(e);t&&(":"!==(t=t[0])&&(this.port=t.substr(1)),e=e.substr(0,e.length-t.length)),e&&(this.hostname=e)};var zn,qn={};zn="undefined"!=typeof self?self:void 0,function(e){var t="URLSearchParams"in zn,r="Symbol"in zn&&"iterator"in Symbol,n="FileReader"in zn&&"Blob"in zn&&function(){try{return new Blob,!0}catch(e){return!1}}(),o="FormData"in zn,i="ArrayBuffer"in zn;if(i)var a=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],s=ArrayBuffer.isView||function(e){return e&&a.indexOf(Object.prototype.toString.call(e))>-1};function l(e){if("string"!=typeof e&&(e=String(e)),/[^a-z0-9\-#$%&'*+.^_`|~]/i.test(e))throw new TypeError("Invalid character in header field name");return e.toLowerCase()}function c(e){return"string"!=typeof e&&(e=String(e)),e}function p(e){var t={next:function(){var t=e.shift();return{done:void 0===t,value:t}}};return r&&(t[Symbol.iterator]=function(){return t}),t}function u(e){this.map={},e instanceof u?e.forEach((function(e,t){this.append(t,e)}),this):Array.isArray(e)?e.forEach((function(e){this.append(e[0],e[1])}),this):e&&Object.getOwnPropertyNames(e).forEach((function(t){this.append(t,e[t])}),this)}function d(e){if(e.bodyUsed)return Promise.reject(new TypeError("Already read"));e.bodyUsed=!0}function h(e){return new Promise((function(t,r){e.onload=function(){t(e.result)},e.onerror=function(){r(e.error)}}))}function f(e){var t=new FileReader,r=h(t);return t.readAsArrayBuffer(e),r}function m(e){if(e.slice)return e.slice(0);var t=new Uint8Array(e.byteLength);return t.set(new Uint8Array(e)),t.buffer}function y(){return this.bodyUsed=!1,this._initBody=function(e){var r;this._bodyInit=e,e?"string"==typeof e?this._bodyText=e:n&&Blob.prototype.isPrototypeOf(e)?this._bodyBlob=e:o&&FormData.prototype.isPrototypeOf(e)?this._bodyFormData=e:t&&URLSearchParams.prototype.isPrototypeOf(e)?this._bodyText=e.toString():i&&n&&(r=e)&&DataView.prototype.isPrototypeOf(r)?(this._bodyArrayBuffer=m(e.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer])):i&&(ArrayBuffer.prototype.isPrototypeOf(e)||s(e))?this._bodyArrayBuffer=m(e):this._bodyText=e=Object.prototype.toString.call(e):this._bodyText="",this.headers.get("content-type")||("string"==typeof e?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):t&&URLSearchParams.prototype.isPrototypeOf(e)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},n&&(this.blob=function(){var e=d(this);if(e)return e;if(this._bodyBlob)return Promise.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(new Blob([this._bodyArrayBuffer]));if(this._bodyFormData)throw new Error("could not read FormData body as blob");return Promise.resolve(new Blob([this._bodyText]))},this.arrayBuffer=function(){return this._bodyArrayBuffer?d(this)||Promise.resolve(this._bodyArrayBuffer):this.blob().then(f)}),this.text=function(){var e,t,r,n=d(this);if(n)return n;if(this._bodyBlob)return e=this._bodyBlob,r=h(t=new FileReader),t.readAsText(e),r;if(this._bodyArrayBuffer)return Promise.resolve(function(e){for(var t=new Uint8Array(e),r=new Array(t.length),n=0;n<t.length;n++)r[n]=String.fromCharCode(t[n]);return r.join("")}(this._bodyArrayBuffer));if(this._bodyFormData)throw new Error("could not read FormData body as text");return Promise.resolve(this._bodyText)},o&&(this.formData=function(){return this.text().then(b)}),this.json=function(){return this.text().then(JSON.parse)},this}u.prototype.append=function(e,t){e=l(e),t=c(t);var r=this.map[e];this.map[e]=r?r+", "+t:t},u.prototype.delete=function(e){delete this.map[l(e)]},u.prototype.get=function(e){return e=l(e),this.has(e)?this.map[e]:null},u.prototype.has=function(e){return this.map.hasOwnProperty(l(e))},u.prototype.set=function(e,t){this.map[l(e)]=c(t)},u.prototype.forEach=function(e,t){for(var r in this.map)this.map.hasOwnProperty(r)&&e.call(t,this.map[r],r,this)},u.prototype.keys=function(){var e=[];return this.forEach((function(t,r){e.push(r)})),p(e)},u.prototype.values=function(){var e=[];return this.forEach((function(t){e.push(t)})),p(e)},u.prototype.entries=function(){var e=[];return this.forEach((function(t,r){e.push([r,t])})),p(e)},r&&(u.prototype[Symbol.iterator]=u.prototype.entries);var g=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];function v(e,t){var r,n,o=(t=t||{}).body;if(e instanceof v){if(e.bodyUsed)throw new TypeError("Already read");this.url=e.url,this.credentials=e.credentials,t.headers||(this.headers=new u(e.headers)),this.method=e.method,this.mode=e.mode,this.signal=e.signal,o||null==e._bodyInit||(o=e._bodyInit,e.bodyUsed=!0)}else this.url=String(e);if(this.credentials=t.credentials||this.credentials||"same-origin",!t.headers&&this.headers||(this.headers=new u(t.headers)),this.method=(n=(r=t.method||this.method||"GET").toUpperCase(),g.indexOf(n)>-1?n:r),this.mode=t.mode||this.mode||null,this.signal=t.signal||this.signal,this.referrer=null,("GET"===this.method||"HEAD"===this.method)&&o)throw new TypeError("Body not allowed for GET or HEAD requests");this._initBody(o)}function b(e){var t=new FormData;return e.trim().split("&").forEach((function(e){if(e){var r=e.split("="),n=r.shift().replace(/\+/g," "),o=r.join("=").replace(/\+/g," ");t.append(decodeURIComponent(n),decodeURIComponent(o))}})),t}function x(e,t){t||(t={}),this.type="default",this.status=void 0===t.status?200:t.status,this.ok=this.status>=200&&this.status<300,this.statusText="statusText"in t?t.statusText:"OK",this.headers=new u(t.headers),this.url=t.url||"",this._initBody(e)}v.prototype.clone=function(){return new v(this,{body:this._bodyInit})},y.call(v.prototype),y.call(x.prototype),x.prototype.clone=function(){return new x(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new u(this.headers),url:this.url})},x.error=function(){var e=new x(null,{status:0,statusText:""});return e.type="error",e};var w=[301,302,303,307,308];x.redirect=function(e,t){if(-1===w.indexOf(t))throw new RangeError("Invalid status code");return new x(null,{status:t,headers:{location:e}})},e.DOMException=zn.DOMException;try{new e.DOMException}catch(t){e.DOMException=function(e,t){this.message=e,this.name=t;var r=Error(e);this.stack=r.stack},e.DOMException.prototype=Object.create(Error.prototype),e.DOMException.prototype.constructor=e.DOMException}function $(t,r){return new Promise((function(o,i){var a=new v(t,r);if(a.signal&&a.signal.aborted)return i(new e.DOMException("Aborted","AbortError"));var s=new XMLHttpRequest;function l(){s.abort()}s.onload=function(){var e,t,r={status:s.status,statusText:s.statusText,headers:(e=s.getAllResponseHeaders()||"",t=new u,e.replace(/\r?\n[\t ]+/g," ").split(/\r?\n/).forEach((function(e){var r=e.split(":"),n=r.shift().trim();if(n){var o=r.join(":").trim();t.append(n,o)}})),t)};r.url="responseURL"in s?s.responseURL:r.headers.get("X-Request-URL");var n="response"in s?s.response:s.responseText;o(new x(n,r))},s.onerror=function(){i(new TypeError("Network request failed"))},s.ontimeout=function(){i(new TypeError("Network request failed"))},s.onabort=function(){i(new e.DOMException("Aborted","AbortError"))},s.open(a.method,a.url,!0),"include"===a.credentials?s.withCredentials=!0:"omit"===a.credentials&&(s.withCredentials=!1),"responseType"in s&&n&&(s.responseType="blob"),a.headers.forEach((function(e,t){s.setRequestHeader(t,e)})),a.signal&&(a.signal.addEventListener("abort",l),s.onreadystatechange=function(){4===s.readyState&&a.signal.removeEventListener("abort",l)}),s.send(void 0===a._bodyInit?null:a._bodyInit)}))}$.polyfill=!0,zn.fetch||(zn.fetch=$,zn.Headers=u,zn.Request=v,zn.Response=x),e.Headers=u,e.Request=v,e.Response=x,e.fetch=$,Object.defineProperty(e,"__esModule",{value:!0})}({});var Mn="undefined"!=typeof Symbol&&Symbol,Hn="Function.prototype.bind called on incompatible ",Wn=Array.prototype.slice,Vn=Object.prototype.toString,Gn=Function.prototype.bind||function(e){var t=this;if("function"!=typeof t||"[object Function]"!==Vn.call(t))throw new TypeError(Hn+t);for(var r,n=Wn.call(arguments,1),o=function(){if(this instanceof r){var o=t.apply(this,n.concat(Wn.call(arguments)));return Object(o)===o?o:this}return t.apply(e,n.concat(Wn.call(arguments)))},i=Math.max(0,t.length-n.length),a=[],s=0;s<i;s++)a.push("$"+s);if(r=Function("binder","return function ("+a.join(",")+"){ return binder.apply(this,arguments); }")(o),t.prototype){var l=function(){};l.prototype=t.prototype,r.prototype=new l,l.prototype=null}return r},Kn=Gn.call(Function.call,Object.prototype.hasOwnProperty),Yn=SyntaxError,Jn=Function,Zn=TypeError,Qn=function(e){try{return Jn('"use strict"; return ('+e+").constructor;")()}catch(e){}},Xn=Object.getOwnPropertyDescriptor;if(Xn)try{Xn({},"")}catch(e){Xn=null}var eo=function(){throw new Zn},to=Xn?function(){try{return eo}catch(e){try{return Xn(arguments,"callee").get}catch(e){return eo}}}():eo,ro="function"==typeof Mn&&"function"==typeof Symbol&&"symbol"==typeof Mn("foo")&&"symbol"==typeof Symbol("bar")&&function(){if("function"!=typeof Symbol||"function"!=typeof Object.getOwnPropertySymbols)return!1;if("symbol"==typeof Symbol.iterator)return!0;var e={},t=Symbol("test"),r=Object(t);if("string"==typeof t)return!1;if("[object Symbol]"!==Object.prototype.toString.call(t))return!1;if("[object Symbol]"!==Object.prototype.toString.call(r))return!1;for(t in e[t]=42,e)return!1;if("function"==typeof Object.keys&&0!==Object.keys(e).length)return!1;if("function"==typeof Object.getOwnPropertyNames&&0!==Object.getOwnPropertyNames(e).length)return!1;var n=Object.getOwnPropertySymbols(e);if(1!==n.length||n[0]!==t)return!1;if(!Object.prototype.propertyIsEnumerable.call(e,t))return!1;if("function"==typeof Object.getOwnPropertyDescriptor){var o=Object.getOwnPropertyDescriptor(e,t);if(42!==o.value||!0!==o.enumerable)return!1}return!0}(),no=Object.getPrototypeOf||function(e){return e.__proto__},oo={},io="undefined"==typeof Uint8Array?void 0:no(Uint8Array),ao={"%AggregateError%":"undefined"==typeof AggregateError?void 0:AggregateError,"%Array%":Array,"%ArrayBuffer%":"undefined"==typeof ArrayBuffer?void 0:ArrayBuffer,"%ArrayIteratorPrototype%":ro?no([][Symbol.iterator]()):void 0,"%AsyncFromSyncIteratorPrototype%":void 0,"%AsyncFunction%":oo,"%AsyncGenerator%":oo,"%AsyncGeneratorFunction%":oo,"%AsyncIteratorPrototype%":oo,"%Atomics%":"undefined"==typeof Atomics?void 0:Atomics,"%BigInt%":"undefined"==typeof BigInt?void 0:BigInt,"%Boolean%":Boolean,"%DataView%":"undefined"==typeof DataView?void 0:DataView,"%Date%":Date,"%decodeURI%":decodeURI,"%decodeURIComponent%":decodeURIComponent,"%encodeURI%":encodeURI,"%encodeURIComponent%":encodeURIComponent,"%Error%":Error,"%eval%":eval,"%EvalError%":EvalError,"%Float32Array%":"undefined"==typeof Float32Array?void 0:Float32Array,"%Float64Array%":"undefined"==typeof Float64Array?void 0:Float64Array,"%FinalizationRegistry%":"undefined"==typeof FinalizationRegistry?void 0:FinalizationRegistry,"%Function%":Jn,"%GeneratorFunction%":oo,"%Int8Array%":"undefined"==typeof Int8Array?void 0:Int8Array,"%Int16Array%":"undefined"==typeof Int16Array?void 0:Int16Array,"%Int32Array%":"undefined"==typeof Int32Array?void 0:Int32Array,"%isFinite%":isFinite,"%isNaN%":isNaN,"%IteratorPrototype%":ro?no(no([][Symbol.iterator]())):void 0,"%JSON%":"object"==typeof JSON?JSON:void 0,"%Map%":"undefined"==typeof Map?void 0:Map,"%MapIteratorPrototype%":"undefined"!=typeof Map&&ro?no((new Map)[Symbol.iterator]()):void 0,"%Math%":Math,"%Number%":Number,"%Object%":Object,"%parseFloat%":parseFloat,"%parseInt%":parseInt,"%Promise%":"undefined"==typeof Promise?void 0:Promise,"%Proxy%":"undefined"==typeof Proxy?void 0:Proxy,"%RangeError%":RangeError,"%ReferenceError%":ReferenceError,"%Reflect%":"undefined"==typeof Reflect?void 0:Reflect,"%RegExp%":RegExp,"%Set%":"undefined"==typeof Set?void 0:Set,"%SetIteratorPrototype%":"undefined"!=typeof Set&&ro?no((new Set)[Symbol.iterator]()):void 0,"%SharedArrayBuffer%":"undefined"==typeof SharedArrayBuffer?void 0:SharedArrayBuffer,"%String%":String,"%StringIteratorPrototype%":ro?no(""[Symbol.iterator]()):void 0,"%Symbol%":ro?Symbol:void 0,"%SyntaxError%":Yn,"%ThrowTypeError%":to,"%TypedArray%":io,"%TypeError%":Zn,"%Uint8Array%":"undefined"==typeof Uint8Array?void 0:Uint8Array,"%Uint8ClampedArray%":"undefined"==typeof Uint8ClampedArray?void 0:Uint8ClampedArray,"%Uint16Array%":"undefined"==typeof Uint16Array?void 0:Uint16Array,"%Uint32Array%":"undefined"==typeof Uint32Array?void 0:Uint32Array,"%URIError%":URIError,"%WeakMap%":"undefined"==typeof WeakMap?void 0:WeakMap,"%WeakRef%":"undefined"==typeof WeakRef?void 0:WeakRef,"%WeakSet%":"undefined"==typeof WeakSet?void 0:WeakSet},so=function e(t){var r;if("%AsyncFunction%"===t)r=Qn("async function () {}");else if("%GeneratorFunction%"===t)r=Qn("function* () {}");else if("%AsyncGeneratorFunction%"===t)r=Qn("async function* () {}");else if("%AsyncGenerator%"===t){var n=e("%AsyncGeneratorFunction%");n&&(r=n.prototype)}else if("%AsyncIteratorPrototype%"===t){var o=e("%AsyncGenerator%");o&&(r=no(o.prototype))}return ao[t]=r,r},lo={"%ArrayBufferPrototype%":["ArrayBuffer","prototype"],"%ArrayPrototype%":["Array","prototype"],"%ArrayProto_entries%":["Array","prototype","entries"],"%ArrayProto_forEach%":["Array","prototype","forEach"],"%ArrayProto_keys%":["Array","prototype","keys"],"%ArrayProto_values%":["Array","prototype","values"],"%AsyncFunctionPrototype%":["AsyncFunction","prototype"],"%AsyncGenerator%":["AsyncGeneratorFunction","prototype"],"%AsyncGeneratorPrototype%":["AsyncGeneratorFunction","prototype","prototype"],"%BooleanPrototype%":["Boolean","prototype"],"%DataViewPrototype%":["DataView","prototype"],"%DatePrototype%":["Date","prototype"],"%ErrorPrototype%":["Error","prototype"],"%EvalErrorPrototype%":["EvalError","prototype"],"%Float32ArrayPrototype%":["Float32Array","prototype"],"%Float64ArrayPrototype%":["Float64Array","prototype"],"%FunctionPrototype%":["Function","prototype"],"%Generator%":["GeneratorFunction","prototype"],"%GeneratorPrototype%":["GeneratorFunction","prototype","prototype"],"%Int8ArrayPrototype%":["Int8Array","prototype"],"%Int16ArrayPrototype%":["Int16Array","prototype"],"%Int32ArrayPrototype%":["Int32Array","prototype"],"%JSONParse%":["JSON","parse"],"%JSONStringify%":["JSON","stringify"],"%MapPrototype%":["Map","prototype"],"%NumberPrototype%":["Number","prototype"],"%ObjectPrototype%":["Object","prototype"],"%ObjProto_toString%":["Object","prototype","toString"],"%ObjProto_valueOf%":["Object","prototype","valueOf"],"%PromisePrototype%":["Promise","prototype"],"%PromiseProto_then%":["Promise","prototype","then"],"%Promise_all%":["Promise","all"],"%Promise_reject%":["Promise","reject"],"%Promise_resolve%":["Promise","resolve"],"%RangeErrorPrototype%":["RangeError","prototype"],"%ReferenceErrorPrototype%":["ReferenceError","prototype"],"%RegExpPrototype%":["RegExp","prototype"],"%SetPrototype%":["Set","prototype"],"%SharedArrayBufferPrototype%":["SharedArrayBuffer","prototype"],"%StringPrototype%":["String","prototype"],"%SymbolPrototype%":["Symbol","prototype"],"%SyntaxErrorPrototype%":["SyntaxError","prototype"],"%TypedArrayPrototype%":["TypedArray","prototype"],"%TypeErrorPrototype%":["TypeError","prototype"],"%Uint8ArrayPrototype%":["Uint8Array","prototype"],"%Uint8ClampedArrayPrototype%":["Uint8ClampedArray","prototype"],"%Uint16ArrayPrototype%":["Uint16Array","prototype"],"%Uint32ArrayPrototype%":["Uint32Array","prototype"],"%URIErrorPrototype%":["URIError","prototype"],"%WeakMapPrototype%":["WeakMap","prototype"],"%WeakSetPrototype%":["WeakSet","prototype"]},co=Gn,po=Kn,uo=co.call(Function.call,Array.prototype.concat),ho=co.call(Function.apply,Array.prototype.splice),fo=co.call(Function.call,String.prototype.replace),mo=co.call(Function.call,String.prototype.slice),yo=/[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g,go=/\\(\\)?/g,vo=function(e){var t=mo(e,0,1),r=mo(e,-1);if("%"===t&&"%"!==r)throw new Yn("invalid intrinsic syntax, expected closing `%`");if("%"===r&&"%"!==t)throw new Yn("invalid intrinsic syntax, expected opening `%`");var n=[];return fo(e,yo,(function(e,t,r,o){n[n.length]=r?fo(o,go,"$1"):t||e})),n},bo=function(e,t){var r,n=e;if(po(lo,n)&&(n="%"+(r=lo[n])[0]+"%"),po(ao,n)){var o=ao[n];if(o===oo&&(o=so(n)),void 0===o&&!t)throw new Zn("intrinsic "+e+" exists, but is not available. Please file an issue!");return{alias:r,name:n,value:o}}throw new Yn("intrinsic "+e+" does not exist!")},xo=function(e,t){if("string"!=typeof e||0===e.length)throw new Zn("intrinsic name must be a non-empty string");if(arguments.length>1&&"boolean"!=typeof t)throw new Zn('"allowMissing" argument must be a boolean');var r=vo(e),n=r.length>0?r[0]:"",o=bo("%"+n+"%",t),i=o.name,a=o.value,s=!1,l=o.alias;l&&(n=l[0],ho(r,uo([0,1],l)));for(var c=1,p=!0;c<r.length;c+=1){var u=r[c],d=mo(u,0,1),h=mo(u,-1);if(('"'===d||"'"===d||"`"===d||'"'===h||"'"===h||"`"===h)&&d!==h)throw new Yn("property names with quotes must have matching quotes");if("constructor"!==u&&p||(s=!0),po(ao,i="%"+(n+="."+u)+"%"))a=ao[i];else if(null!=a){if(!(u in a)){if(!t)throw new Zn("base intrinsic for "+e+" exists, but the property is not available.");return}if(Xn&&c+1>=r.length){var f=Xn(a,u);a=(p=!!f)&&"get"in f&&!("originalValue"in f.get)?f.get:a[u]}else p=po(a,u),a=a[u];p&&!s&&(ao[i]=a)}}return a},wo={exports:{}};!function(e){var t=Gn,r=xo,n=r("%Function.prototype.apply%"),o=r("%Function.prototype.call%"),i=r("%Reflect.apply%",!0)||t.call(o,n),a=r("%Object.getOwnPropertyDescriptor%",!0),s=r("%Object.defineProperty%",!0),l=r("%Math.max%");if(s)try{s({},"a",{value:1})}catch(e){s=null}e.exports=function(e){var r=i(t,o,arguments);if(a&&s){var n=a(r,"length");n.configurable&&s(r,"length",{value:1+l(0,e.length-(arguments.length-1))})}return r};var c=function(){return i(t,n,arguments)};s?s(e.exports,"apply",{value:c}):e.exports.apply=c}(wo);var $o=xo,Ao=wo.exports,ko=Ao($o("String.prototype.indexOf")),So=ke(Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:{}})),Eo="function"==typeof Map&&Map.prototype,Do=Object.getOwnPropertyDescriptor&&Eo?Object.getOwnPropertyDescriptor(Map.prototype,"size"):null,Oo=Eo&&Do&&"function"==typeof Do.get?Do.get:null,Co=Eo&&Map.prototype.forEach,jo="function"==typeof Set&&Set.prototype,To=Object.getOwnPropertyDescriptor&&jo?Object.getOwnPropertyDescriptor(Set.prototype,"size"):null,_o=jo&&To&&"function"==typeof To.get?To.get:null,Fo=jo&&Set.prototype.forEach,Bo="function"==typeof WeakMap&&WeakMap.prototype?WeakMap.prototype.has:null,Io="function"==typeof WeakSet&&WeakSet.prototype?WeakSet.prototype.has:null,Po=Boolean.prototype.valueOf,Ro=Object.prototype.toString,Uo=Function.prototype.toString,Lo=String.prototype.match,No="function"==typeof BigInt?BigInt.prototype.valueOf:null,zo=Object.getOwnPropertySymbols,qo="function"==typeof Symbol?Symbol.prototype.toString:null,Mo=Object.prototype.propertyIsEnumerable,Ho=So.custom,Wo=Ho&&Yo(Ho)?Ho:null;function Vo(e,t,r){var n="double"===(r.quoteStyle||t)?'"':"'";return n+e+n}function Go(e){return String(e).replace(/"/g,"&quot;")}function Ko(e){return"[object Array]"===Qo(e)}function Yo(e){return"[object Symbol]"===Qo(e)}var Jo=Object.prototype.hasOwnProperty||function(e){return e in this};function Zo(e,t){return Jo.call(e,t)}function Qo(e){return Ro.call(e)}function Xo(e,t){if(e.indexOf)return e.indexOf(t);for(var r=0,n=e.length;r<n;r++)if(e[r]===t)return r;return-1}function ei(e,t){if(e.length>t.maxStringLength){var r=e.length-t.maxStringLength,n="... "+r+" more character"+(r>1?"s":"");return ei(e.slice(0,t.maxStringLength),t)+n}return Vo(e.replace(/(['\\])/g,"\\$1").replace(/[\x00-\x1f]/g,ti),"single",t)}function ti(e){var t=e.charCodeAt(0),r={8:"b",9:"t",10:"n",12:"f",13:"r"}[t];return r?"\\"+r:"\\x"+(t<16?"0":"")+t.toString(16).toUpperCase()}function ri(e){return"Object("+e+")"}function ni(e){return e+" { ? }"}function oi(e,t,r,n){return e+" ("+t+") {"+(n?ii(r,n):r.join(", "))+"}"}function ii(e,t){if(0===e.length)return"";var r="\n"+t.prev+t.base;return r+e.join(","+r)+"\n"+t.prev}function ai(e,t){var r=Ko(e),n=[];if(r){n.length=e.length;for(var o=0;o<e.length;o++)n[o]=Zo(e,o)?t(e[o],e):""}for(var i in e)Zo(e,i)&&(r&&String(Number(i))===i&&i<e.length||(/[^\w$]/.test(i)?n.push(t(i,e)+": "+t(e[i],e)):n.push(i+": "+t(e[i],e))));if("function"==typeof zo)for(var a=zo(e),s=0;s<a.length;s++)Mo.call(e,a[s])&&n.push("["+t(a[s])+"]: "+t(e[a[s]],e));return n}var si=xo,li=function(e,t){var r=$o(e,!!t);return"function"==typeof r&&ko(e,".prototype.")>-1?Ao(r):r},ci=function e(t,r,n,o){var i=r||{};if(Zo(i,"quoteStyle")&&"single"!==i.quoteStyle&&"double"!==i.quoteStyle)throw new TypeError('option "quoteStyle" must be "single" or "double"');if(Zo(i,"maxStringLength")&&("number"==typeof i.maxStringLength?i.maxStringLength<0&&i.maxStringLength!==1/0:null!==i.maxStringLength))throw new TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');var a=!Zo(i,"customInspect")||i.customInspect;if("boolean"!=typeof a)throw new TypeError('option "customInspect", if provided, must be `true` or `false`');if(Zo(i,"indent")&&null!==i.indent&&"\t"!==i.indent&&!(parseInt(i.indent,10)===i.indent&&i.indent>0))throw new TypeError('options "indent" must be "\\t", an integer > 0, or `null`');if(void 0===t)return"undefined";if(null===t)return"null";if("boolean"==typeof t)return t?"true":"false";if("string"==typeof t)return ei(t,i);if("number"==typeof t)return 0===t?1/0/t>0?"0":"-0":String(t);if("bigint"==typeof t)return String(t)+"n";var s=void 0===i.depth?5:i.depth;if(void 0===n&&(n=0),n>=s&&s>0&&"object"==typeof t)return Ko(t)?"[Array]":"[Object]";var l=function(e,t){var r;if("\t"===e.indent)r="\t";else{if(!("number"==typeof e.indent&&e.indent>0))return null;r=Array(e.indent+1).join(" ")}return{base:r,prev:Array(t+1).join(r)}}(i,n);if(void 0===o)o=[];else if(Xo(o,t)>=0)return"[Circular]";function c(t,r,a){if(r&&(o=o.slice()).push(r),a){var s={depth:i.depth};return Zo(i,"quoteStyle")&&(s.quoteStyle=i.quoteStyle),e(t,s,n+1,o)}return e(t,i,n+1,o)}if("function"==typeof t){var p=function(e){if(e.name)return e.name;var t=Lo.call(Uo.call(e),/^function\s*([\w$]+)/);return t?t[1]:null}(t),u=ai(t,c);return"[Function"+(p?": "+p:" (anonymous)")+"]"+(u.length>0?" { "+u.join(", ")+" }":"")}if(Yo(t)){var d=qo.call(t);return"object"==typeof t?ri(d):d}if(function(e){return!(!e||"object"!=typeof e)&&("undefined"!=typeof HTMLElement&&e instanceof HTMLElement||"string"==typeof e.nodeName&&"function"==typeof e.getAttribute)}(t)){for(var h="<"+String(t.nodeName).toLowerCase(),f=t.attributes||[],m=0;m<f.length;m++)h+=" "+f[m].name+"="+Vo(Go(f[m].value),"double",i);return h+=">",t.childNodes&&t.childNodes.length&&(h+="..."),h+"</"+String(t.nodeName).toLowerCase()+">"}if(Ko(t)){if(0===t.length)return"[]";var y=ai(t,c);return l&&!function(e){for(var t=0;t<e.length;t++)if(Xo(e[t],"\n")>=0)return!1;return!0}(y)?"["+ii(y,l)+"]":"[ "+y.join(", ")+" ]"}if(function(e){return"[object Error]"===Qo(e)}(t)){var g=ai(t,c);return 0===g.length?"["+String(t)+"]":"{ ["+String(t)+"] "+g.join(", ")+" }"}if("object"==typeof t&&a){if(Wo&&"function"==typeof t[Wo])return t[Wo]();if("function"==typeof t.inspect)return t.inspect()}if(function(e){if(!Oo||!e||"object"!=typeof e)return!1;try{Oo.call(e);try{_o.call(e)}catch(e){return!0}return e instanceof Map}catch(e){}return!1}(t)){var v=[];return Co.call(t,(function(e,r){v.push(c(r,t,!0)+" => "+c(e,t))})),oi("Map",Oo.call(t),v,l)}if(function(e){if(!_o||!e||"object"!=typeof e)return!1;try{_o.call(e);try{Oo.call(e)}catch(e){return!0}return e instanceof Set}catch(e){}return!1}(t)){var b=[];return Fo.call(t,(function(e){b.push(c(e,t))})),oi("Set",_o.call(t),b,l)}if(function(e){if(!Bo||!e||"object"!=typeof e)return!1;try{Bo.call(e,Bo);try{Io.call(e,Io)}catch(e){return!0}return e instanceof WeakMap}catch(e){}return!1}(t))return ni("WeakMap");if(function(e){if(!Io||!e||"object"!=typeof e)return!1;try{Io.call(e,Io);try{Bo.call(e,Bo)}catch(e){return!0}return e instanceof WeakSet}catch(e){}return!1}(t))return ni("WeakSet");if(function(e){return"[object Number]"===Qo(e)}(t))return ri(c(Number(t)));if(function(e){return"[object BigInt]"===Qo(e)}(t))return ri(c(No.call(t)));if(function(e){return"[object Boolean]"===Qo(e)}(t))return ri(Po.call(t));if(function(e){return"[object String]"===Qo(e)}(t))return ri(c(String(t)));if(!function(e){return"[object Date]"===Qo(e)}(t)&&!function(e){return"[object RegExp]"===Qo(e)}(t)){var x=ai(t,c);return 0===x.length?"{}":l?"{"+ii(x,l)+"}":"{ "+x.join(", ")+" }"}return String(t)},pi=si("%TypeError%"),ui=si("%WeakMap%",!0),di=si("%Map%",!0),hi=li("WeakMap.prototype.get",!0),fi=li("WeakMap.prototype.set",!0),mi=li("WeakMap.prototype.has",!0),yi=li("Map.prototype.get",!0),gi=li("Map.prototype.set",!0),vi=li("Map.prototype.has",!0),bi=function(e,t){for(var r,n=e;null!==(r=n.next);n=r)if(r.key===t)return n.next=r.next,r.next=e.next,e.next=r,r},xi=String.prototype.replace,wi=/%20/g,$i="RFC3986",Ai={default:$i,formatters:{RFC1738:function(e){return xi.call(e,wi,"+")},RFC3986:function(e){return String(e)}},RFC1738:"RFC1738",RFC3986:$i},ki=Ai,Si=Object.prototype.hasOwnProperty,Ei=Array.isArray,Di=function(){for(var e=[],t=0;t<256;++t)e.push("%"+((t<16?"0":"")+t.toString(16)).toUpperCase());return e}(),Oi=function(e,t){for(var r=t&&t.plainObjects?Object.create(null):{},n=0;n<e.length;++n)void 0!==e[n]&&(r[n]=e[n]);return r},Ci={arrayToObject:Oi,assign:function(e,t){return Object.keys(t).reduce((function(e,r){return e[r]=t[r],e}),e)},combine:function(e,t){return[].concat(e,t)},compact:function(e){for(var t=[{obj:{o:e},prop:"o"}],r=[],n=0;n<t.length;++n)for(var o=t[n],i=o.obj[o.prop],a=Object.keys(i),s=0;s<a.length;++s){var l=a[s],c=i[l];"object"==typeof c&&null!==c&&-1===r.indexOf(c)&&(t.push({obj:i,prop:l}),r.push(c))}return function(e){for(;e.length>1;){var t=e.pop(),r=t.obj[t.prop];if(Ei(r)){for(var n=[],o=0;o<r.length;++o)void 0!==r[o]&&n.push(r[o]);t.obj[t.prop]=n}}}(t),e},decode:function(e,t,r){var n=e.replace(/\+/g," ");if("iso-8859-1"===r)return n.replace(/%[0-9a-f]{2}/gi,unescape);try{return decodeURIComponent(n)}catch(e){return n}},encode:function(e,t,r,n,o){if(0===e.length)return e;var i=e;if("symbol"==typeof e?i=Symbol.prototype.toString.call(e):"string"!=typeof e&&(i=String(e)),"iso-8859-1"===r)return escape(i).replace(/%u[0-9a-f]{4}/gi,(function(e){return"%26%23"+parseInt(e.slice(2),16)+"%3B"}));for(var a="",s=0;s<i.length;++s){var l=i.charCodeAt(s);45===l||46===l||95===l||126===l||l>=48&&l<=57||l>=65&&l<=90||l>=97&&l<=122||o===ki.RFC1738&&(40===l||41===l)?a+=i.charAt(s):l<128?a+=Di[l]:l<2048?a+=Di[192|l>>6]+Di[128|63&l]:l<55296||l>=57344?a+=Di[224|l>>12]+Di[128|l>>6&63]+Di[128|63&l]:(s+=1,l=65536+((1023&l)<<10|1023&i.charCodeAt(s)),a+=Di[240|l>>18]+Di[128|l>>12&63]+Di[128|l>>6&63]+Di[128|63&l])}return a},isBuffer:function(e){return!(!e||"object"!=typeof e||!(e.constructor&&e.constructor.isBuffer&&e.constructor.isBuffer(e)))},isRegExp:function(e){return"[object RegExp]"===Object.prototype.toString.call(e)},maybeMap:function(e,t){if(Ei(e)){for(var r=[],n=0;n<e.length;n+=1)r.push(t(e[n]));return r}return t(e)},merge:function e(t,r,n){if(!r)return t;if("object"!=typeof r){if(Ei(t))t.push(r);else{if(!t||"object"!=typeof t)return[t,r];(n&&(n.plainObjects||n.allowPrototypes)||!Si.call(Object.prototype,r))&&(t[r]=!0)}return t}if(!t||"object"!=typeof t)return[t].concat(r);var o=t;return Ei(t)&&!Ei(r)&&(o=Oi(t,n)),Ei(t)&&Ei(r)?(r.forEach((function(r,o){if(Si.call(t,o)){var i=t[o];i&&"object"==typeof i&&r&&"object"==typeof r?t[o]=e(i,r,n):t.push(r)}else t[o]=r})),t):Object.keys(r).reduce((function(t,o){var i=r[o];return Si.call(t,o)?t[o]=e(t[o],i,n):t[o]=i,t}),o)}},ji=function(){var e,t,r,n={assert:function(e){if(!n.has(e))throw new pi("Side channel does not contain "+ci(e))},get:function(n){if(ui&&n&&("object"==typeof n||"function"==typeof n)){if(e)return hi(e,n)}else if(di){if(t)return yi(t,n)}else if(r)return function(e,t){var r=bi(e,t);return r&&r.value}(r,n)},has:function(n){if(ui&&n&&("object"==typeof n||"function"==typeof n)){if(e)return mi(e,n)}else if(di){if(t)return vi(t,n)}else if(r)return function(e,t){return!!bi(e,t)}(r,n);return!1},set:function(n,o){ui&&n&&("object"==typeof n||"function"==typeof n)?(e||(e=new ui),fi(e,n,o)):di?(t||(t=new di),gi(t,n,o)):(r||(r={key:{},next:null}),function(e,t,r){var n=bi(e,t);n?n.value=r:e.next={key:t,next:e.next,value:r}}(r,n,o))}};return n},Ti=Ci,_i=Ai,Fi=Object.prototype.hasOwnProperty,Bi={brackets:function(e){return e+"[]"},comma:"comma",indices:function(e,t){return e+"["+t+"]"},repeat:function(e){return e}},Ii=Array.isArray,Pi=Array.prototype.push,Ri=function(e,t){Pi.apply(e,Ii(t)?t:[t])},Ui=Date.prototype.toISOString,Li=_i.default,Ni={addQueryPrefix:!1,allowDots:!1,charset:"utf-8",charsetSentinel:!1,delimiter:"&",encode:!0,encoder:Ti.encode,encodeValuesOnly:!1,format:Li,formatter:_i.formatters[Li],indices:!1,serializeDate:function(e){return Ui.call(e)},skipNulls:!1,strictNullHandling:!1},zi=function e(t,r,n,o,i,a,s,l,c,p,u,d,h,f,m){var y,g=t;if(m.has(t))throw new RangeError("Cyclic object value");if("function"==typeof s?g=s(r,g):g instanceof Date?g=p(g):"comma"===n&&Ii(g)&&(g=Ti.maybeMap(g,(function(e){return e instanceof Date?p(e):e}))),null===g){if(o)return a&&!h?a(r,Ni.encoder,f,"key",u):r;g=""}if("string"==typeof(y=g)||"number"==typeof y||"boolean"==typeof y||"symbol"==typeof y||"bigint"==typeof y||Ti.isBuffer(g))return a?[d(h?r:a(r,Ni.encoder,f,"key",u))+"="+d(a(g,Ni.encoder,f,"value",u))]:[d(r)+"="+d(String(g))];var v,b=[];if(void 0===g)return b;if("comma"===n&&Ii(g))v=[{value:g.length>0?g.join(",")||null:void 0}];else if(Ii(s))v=s;else{var x=Object.keys(g);v=l?x.sort(l):x}for(var w=0;w<v.length;++w){var $=v[w],A="object"==typeof $&&void 0!==$.value?$.value:g[$];if(!i||null!==A){var k=Ii(g)?"function"==typeof n?n(r,$):r:r+(c?"."+$:"["+$+"]");m.set(t,!0);var S=ji();Ri(b,e(A,k,n,o,i,a,s,l,c,p,u,d,h,f,S))}}return b},qi=Ci,Mi=Object.prototype.hasOwnProperty,Hi=Array.isArray,Wi={allowDots:!1,allowPrototypes:!1,allowSparse:!1,arrayLimit:20,charset:"utf-8",charsetSentinel:!1,comma:!1,decoder:qi.decode,delimiter:"&",depth:5,ignoreQueryPrefix:!1,interpretNumericEntities:!1,parameterLimit:1e3,parseArrays:!0,plainObjects:!1,strictNullHandling:!1},Vi=function(e){return e.replace(/&#(\d+);/g,(function(e,t){return String.fromCharCode(parseInt(t,10))}))},Gi=function(e,t){return e&&"string"==typeof e&&t.comma&&e.indexOf(",")>-1?e.split(","):e},Ki=function(e,t,r,n){if(e){var o=r.allowDots?e.replace(/\.([^.[]+)/g,"[$1]"):e,i=/(\[[^[\]]*])/g,a=r.depth>0&&/(\[[^[\]]*])/.exec(o),s=a?o.slice(0,a.index):o,l=[];if(s){if(!r.plainObjects&&Mi.call(Object.prototype,s)&&!r.allowPrototypes)return;l.push(s)}for(var c=0;r.depth>0&&null!==(a=i.exec(o))&&c<r.depth;){if(c+=1,!r.plainObjects&&Mi.call(Object.prototype,a[1].slice(1,-1))&&!r.allowPrototypes)return;l.push(a[1])}return a&&l.push("["+o.slice(a.index)+"]"),function(e,t,r,n){for(var o=n?t:Gi(t,r),i=e.length-1;i>=0;--i){var a,s=e[i];if("[]"===s&&r.parseArrays)a=[].concat(o);else{a=r.plainObjects?Object.create(null):{};var l="["===s.charAt(0)&&"]"===s.charAt(s.length-1)?s.slice(1,-1):s,c=parseInt(l,10);r.parseArrays||""!==l?!isNaN(c)&&s!==l&&String(c)===l&&c>=0&&r.parseArrays&&c<=r.arrayLimit?(a=[])[c]=o:a[l]=o:a={0:o}}o=a}return o}(l,t,r,n)}},Yi={formats:Ai,parse:function(e,t){var r=function(e){if(!e)return Wi;if(null!==e.decoder&&void 0!==e.decoder&&"function"!=typeof e.decoder)throw new TypeError("Decoder has to be a function.");if(void 0!==e.charset&&"utf-8"!==e.charset&&"iso-8859-1"!==e.charset)throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");var t=void 0===e.charset?Wi.charset:e.charset;return{allowDots:void 0===e.allowDots?Wi.allowDots:!!e.allowDots,allowPrototypes:"boolean"==typeof e.allowPrototypes?e.allowPrototypes:Wi.allowPrototypes,allowSparse:"boolean"==typeof e.allowSparse?e.allowSparse:Wi.allowSparse,arrayLimit:"number"==typeof e.arrayLimit?e.arrayLimit:Wi.arrayLimit,charset:t,charsetSentinel:"boolean"==typeof e.charsetSentinel?e.charsetSentinel:Wi.charsetSentinel,comma:"boolean"==typeof e.comma?e.comma:Wi.comma,decoder:"function"==typeof e.decoder?e.decoder:Wi.decoder,delimiter:"string"==typeof e.delimiter||qi.isRegExp(e.delimiter)?e.delimiter:Wi.delimiter,depth:"number"==typeof e.depth||!1===e.depth?+e.depth:Wi.depth,ignoreQueryPrefix:!0===e.ignoreQueryPrefix,interpretNumericEntities:"boolean"==typeof e.interpretNumericEntities?e.interpretNumericEntities:Wi.interpretNumericEntities,parameterLimit:"number"==typeof e.parameterLimit?e.parameterLimit:Wi.parameterLimit,parseArrays:!1!==e.parseArrays,plainObjects:"boolean"==typeof e.plainObjects?e.plainObjects:Wi.plainObjects,strictNullHandling:"boolean"==typeof e.strictNullHandling?e.strictNullHandling:Wi.strictNullHandling}}(t);if(""===e||null==e)return r.plainObjects?Object.create(null):{};for(var n="string"==typeof e?function(e,t){var r,n={},o=t.ignoreQueryPrefix?e.replace(/^\?/,""):e,i=t.parameterLimit===1/0?void 0:t.parameterLimit,a=o.split(t.delimiter,i),s=-1,l=t.charset;if(t.charsetSentinel)for(r=0;r<a.length;++r)0===a[r].indexOf("utf8=")&&("utf8=%E2%9C%93"===a[r]?l="utf-8":"utf8=%26%2310003%3B"===a[r]&&(l="iso-8859-1"),s=r,r=a.length);for(r=0;r<a.length;++r)if(r!==s){var c,p,u=a[r],d=u.indexOf("]="),h=-1===d?u.indexOf("="):d+1;-1===h?(c=t.decoder(u,Wi.decoder,l,"key"),p=t.strictNullHandling?null:""):(c=t.decoder(u.slice(0,h),Wi.decoder,l,"key"),p=qi.maybeMap(Gi(u.slice(h+1),t),(function(e){return t.decoder(e,Wi.decoder,l,"value")}))),p&&t.interpretNumericEntities&&"iso-8859-1"===l&&(p=Vi(p)),u.indexOf("[]=")>-1&&(p=Hi(p)?[p]:p),Mi.call(n,c)?n[c]=qi.combine(n[c],p):n[c]=p}return n}(e,r):e,o=r.plainObjects?Object.create(null):{},i=Object.keys(n),a=0;a<i.length;++a){var s=i[a],l=Ki(s,n[s],r,"string"==typeof e);o=qi.merge(o,l,r)}return!0===r.allowSparse?o:qi.compact(o)},stringify:function(e,t){var r,n=e,o=function(e){if(!e)return Ni;if(null!==e.encoder&&void 0!==e.encoder&&"function"!=typeof e.encoder)throw new TypeError("Encoder has to be a function.");var t=e.charset||Ni.charset;if(void 0!==e.charset&&"utf-8"!==e.charset&&"iso-8859-1"!==e.charset)throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");var r=_i.default;if(void 0!==e.format){if(!Fi.call(_i.formatters,e.format))throw new TypeError("Unknown format option provided.");r=e.format}var n=_i.formatters[r],o=Ni.filter;return("function"==typeof e.filter||Ii(e.filter))&&(o=e.filter),{addQueryPrefix:"boolean"==typeof e.addQueryPrefix?e.addQueryPrefix:Ni.addQueryPrefix,allowDots:void 0===e.allowDots?Ni.allowDots:!!e.allowDots,charset:t,charsetSentinel:"boolean"==typeof e.charsetSentinel?e.charsetSentinel:Ni.charsetSentinel,delimiter:void 0===e.delimiter?Ni.delimiter:e.delimiter,encode:"boolean"==typeof e.encode?e.encode:Ni.encode,encoder:"function"==typeof e.encoder?e.encoder:Ni.encoder,encodeValuesOnly:"boolean"==typeof e.encodeValuesOnly?e.encodeValuesOnly:Ni.encodeValuesOnly,filter:o,format:r,formatter:n,serializeDate:"function"==typeof e.serializeDate?e.serializeDate:Ni.serializeDate,skipNulls:"boolean"==typeof e.skipNulls?e.skipNulls:Ni.skipNulls,sort:"function"==typeof e.sort?e.sort:null,strictNullHandling:"boolean"==typeof e.strictNullHandling?e.strictNullHandling:Ni.strictNullHandling}}(t);"function"==typeof o.filter?n=(0,o.filter)("",n):Ii(o.filter)&&(r=o.filter);var i,a=[];if("object"!=typeof n||null===n)return"";i=t&&t.arrayFormat in Bi?t.arrayFormat:t&&"indices"in t?t.indices?"indices":"repeat":"indices";var s=Bi[i];r||(r=Object.keys(n)),o.sort&&r.sort(o.sort);for(var l=ji(),c=0;c<r.length;++c){var p=r[c];o.skipNulls&&null===n[p]||Ri(a,zi(n[p],p,s,o.strictNullHandling,o.skipNulls,o.encode?o.encoder:null,o.filter,o.sort,o.allowDots,o.serializeDate,o.format,o.formatter,o.encodeValuesOnly,o.charset,l))}var u=a.join(o.delimiter),d=!0===o.addQueryPrefix?"?":"";return o.charsetSentinel&&("iso-8859-1"===o.charset?d+="utf8=%26%2310003%3B&":d+="utf8=%E2%9C%93&"),u.length>0?d+u:""}},Ji={},Zi={},Qi={};function Xi(e){return null==e}function ea(e,t){var r="",n=e.reason||"(unknown reason)";return e.mark?(e.mark.name&&(r+='in "'+e.mark.name+'" '),r+="("+(e.mark.line+1)+":"+(e.mark.column+1)+")",!t&&e.mark.snippet&&(r+="\n\n"+e.mark.snippet),n+" "+r):n}function ta(e,t){Error.call(this),this.name="YAMLException",this.reason=e,this.mark=t,this.message=ea(this,!1),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=(new Error).stack||""}Qi.isNothing=Xi,Qi.isObject=function(e){return"object"==typeof e&&null!==e},Qi.toArray=function(e){return Array.isArray(e)?e:Xi(e)?[]:[e]},Qi.repeat=function(e,t){var r,n="";for(r=0;r<t;r+=1)n+=e;return n},Qi.isNegativeZero=function(e){return 0===e&&Number.NEGATIVE_INFINITY===1/e},Qi.extend=function(e,t){var r,n,o,i;if(t)for(r=0,n=(i=Object.keys(t)).length;r<n;r+=1)e[o=i[r]]=t[o];return e},ta.prototype=Object.create(Error.prototype),ta.prototype.constructor=ta,ta.prototype.toString=function(e){return this.name+": "+ea(this,e)};var ra=ta,na=Qi;function oa(e,t,r,n,o){var i="",a="",s=Math.floor(o/2)-1;return n-t>s&&(t=n-s+(i=" ... ").length),r-n>s&&(r=n+s-(a=" ...").length),{str:i+e.slice(t,r).replace(/\t/g,"→")+a,pos:n-t+i.length}}function ia(e,t){return na.repeat(" ",t-e.length)+e}var aa=ra,sa=["kind","multi","resolve","construct","instanceOf","predicate","represent","representName","defaultStyle","styleAliases"],la=["scalar","sequence","mapping"],ca=function(e,t){var r,n;if(t=t||{},Object.keys(t).forEach((function(t){if(-1===sa.indexOf(t))throw new aa('Unknown option "'+t+'" is met in definition of "'+e+'" YAML type.')})),this.options=t,this.tag=e,this.kind=t.kind||null,this.resolve=t.resolve||function(){return!0},this.construct=t.construct||function(e){return e},this.instanceOf=t.instanceOf||null,this.predicate=t.predicate||null,this.represent=t.represent||null,this.representName=t.representName||null,this.defaultStyle=t.defaultStyle||null,this.multi=t.multi||!1,this.styleAliases=(r=t.styleAliases||null,n={},null!==r&&Object.keys(r).forEach((function(e){r[e].forEach((function(t){n[String(t)]=e}))})),n),-1===la.indexOf(this.kind))throw new aa('Unknown kind "'+this.kind+'" is specified for "'+e+'" YAML type.')},pa=ra,ua=ca;function da(e,t){var r=[];return e[t].forEach((function(e){var t=r.length;r.forEach((function(r,n){r.tag===e.tag&&r.kind===e.kind&&r.multi===e.multi&&(t=n)})),r[t]=e})),r}function ha(e){return this.extend(e)}ha.prototype.extend=function(e){var t=[],r=[];if(e instanceof ua)r.push(e);else if(Array.isArray(e))r=r.concat(e);else{if(!e||!Array.isArray(e.implicit)&&!Array.isArray(e.explicit))throw new pa("Schema.extend argument should be a Type, [ Type ], or a schema definition ({ implicit: [...], explicit: [...] })");e.implicit&&(t=t.concat(e.implicit)),e.explicit&&(r=r.concat(e.explicit))}t.forEach((function(e){if(!(e instanceof ua))throw new pa("Specified list of YAML types (or a single Type object) contains a non-Type object.");if(e.loadKind&&"scalar"!==e.loadKind)throw new pa("There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported.");if(e.multi)throw new pa("There is a multi type in the implicit list of a schema. Multi tags can only be listed as explicit.")})),r.forEach((function(e){if(!(e instanceof ua))throw new pa("Specified list of YAML types (or a single Type object) contains a non-Type object.")}));var n=Object.create(ha.prototype);return n.implicit=(this.implicit||[]).concat(t),n.explicit=(this.explicit||[]).concat(r),n.compiledImplicit=da(n,"implicit"),n.compiledExplicit=da(n,"explicit"),n.compiledTypeMap=function(){var e,t,r={scalar:{},sequence:{},mapping:{},fallback:{},multi:{scalar:[],sequence:[],mapping:[],fallback:[]}};function n(e){e.multi?(r.multi[e.kind].push(e),r.multi.fallback.push(e)):r[e.kind][e.tag]=r.fallback[e.tag]=e}for(e=0,t=arguments.length;e<t;e+=1)arguments[e].forEach(n);return r}(n.compiledImplicit,n.compiledExplicit),n};var fa=ha,ma=new ca("tag:yaml.org,2002:str",{kind:"scalar",construct:function(e){return null!==e?e:""}}),ya=new ca("tag:yaml.org,2002:seq",{kind:"sequence",construct:function(e){return null!==e?e:[]}}),ga=new ca("tag:yaml.org,2002:map",{kind:"mapping",construct:function(e){return null!==e?e:{}}}),va=new fa({explicit:[ma,ya,ga]}),ba=new ca("tag:yaml.org,2002:null",{kind:"scalar",resolve:function(e){if(null===e)return!0;var t=e.length;return 1===t&&"~"===e||4===t&&("null"===e||"Null"===e||"NULL"===e)},construct:function(){return null},predicate:function(e){return null===e},represent:{canonical:function(){return"~"},lowercase:function(){return"null"},uppercase:function(){return"NULL"},camelcase:function(){return"Null"},empty:function(){return""}},defaultStyle:"lowercase"}),xa=new ca("tag:yaml.org,2002:bool",{kind:"scalar",resolve:function(e){if(null===e)return!1;var t=e.length;return 4===t&&("true"===e||"True"===e||"TRUE"===e)||5===t&&("false"===e||"False"===e||"FALSE"===e)},construct:function(e){return"true"===e||"True"===e||"TRUE"===e},predicate:function(e){return"[object Boolean]"===Object.prototype.toString.call(e)},represent:{lowercase:function(e){return e?"true":"false"},uppercase:function(e){return e?"TRUE":"FALSE"},camelcase:function(e){return e?"True":"False"}},defaultStyle:"lowercase"}),wa=Qi;function $a(e){return 48<=e&&e<=55}function Aa(e){return 48<=e&&e<=57}var ka=new ca("tag:yaml.org,2002:int",{kind:"scalar",resolve:function(e){if(null===e)return!1;var t,r,n=e.length,o=0,i=!1;if(!n)return!1;if("-"!==(t=e[o])&&"+"!==t||(t=e[++o]),"0"===t){if(o+1===n)return!0;if("b"===(t=e[++o])){for(o++;o<n;o++)if("_"!==(t=e[o])){if("0"!==t&&"1"!==t)return!1;i=!0}return i&&"_"!==t}if("x"===t){for(o++;o<n;o++)if("_"!==(t=e[o])){if(!(48<=(r=e.charCodeAt(o))&&r<=57||65<=r&&r<=70||97<=r&&r<=102))return!1;i=!0}return i&&"_"!==t}if("o"===t){for(o++;o<n;o++)if("_"!==(t=e[o])){if(!$a(e.charCodeAt(o)))return!1;i=!0}return i&&"_"!==t}}if("_"===t)return!1;for(;o<n;o++)if("_"!==(t=e[o])){if(!Aa(e.charCodeAt(o)))return!1;i=!0}return!(!i||"_"===t)},construct:function(e){var t,r=e,n=1;if(-1!==r.indexOf("_")&&(r=r.replace(/_/g,"")),"-"!==(t=r[0])&&"+"!==t||("-"===t&&(n=-1),t=(r=r.slice(1))[0]),"0"===r)return 0;if("0"===t){if("b"===r[1])return n*parseInt(r.slice(2),2);if("x"===r[1])return n*parseInt(r.slice(2),16);if("o"===r[1])return n*parseInt(r.slice(2),8)}return n*parseInt(r,10)},predicate:function(e){return"[object Number]"===Object.prototype.toString.call(e)&&e%1==0&&!wa.isNegativeZero(e)},represent:{binary:function(e){return e>=0?"0b"+e.toString(2):"-0b"+e.toString(2).slice(1)},octal:function(e){return e>=0?"0o"+e.toString(8):"-0o"+e.toString(8).slice(1)},decimal:function(e){return e.toString(10)},hexadecimal:function(e){return e>=0?"0x"+e.toString(16).toUpperCase():"-0x"+e.toString(16).toUpperCase().slice(1)}},defaultStyle:"decimal",styleAliases:{binary:[2,"bin"],octal:[8,"oct"],decimal:[10,"dec"],hexadecimal:[16,"hex"]}}),Sa=Qi,Ea=ca,Da=new RegExp("^(?:[-+]?(?:[0-9][0-9_]*)(?:\\.[0-9_]*)?(?:[eE][-+]?[0-9]+)?|\\.[0-9_]+(?:[eE][-+]?[0-9]+)?|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$"),Oa=/^[-+]?[0-9]+e/,Ca=new Ea("tag:yaml.org,2002:float",{kind:"scalar",resolve:function(e){return null!==e&&!(!Da.test(e)||"_"===e[e.length-1])},construct:function(e){var t,r;return r="-"===(t=e.replace(/_/g,"").toLowerCase())[0]?-1:1,"+-".indexOf(t[0])>=0&&(t=t.slice(1)),".inf"===t?1===r?Number.POSITIVE_INFINITY:Number.NEGATIVE_INFINITY:".nan"===t?NaN:r*parseFloat(t,10)},predicate:function(e){return"[object Number]"===Object.prototype.toString.call(e)&&(e%1!=0||Sa.isNegativeZero(e))},represent:function(e,t){var r;if(isNaN(e))switch(t){case"lowercase":return".nan";case"uppercase":return".NAN";case"camelcase":return".NaN"}else if(Number.POSITIVE_INFINITY===e)switch(t){case"lowercase":return".inf";case"uppercase":return".INF";case"camelcase":return".Inf"}else if(Number.NEGATIVE_INFINITY===e)switch(t){case"lowercase":return"-.inf";case"uppercase":return"-.INF";case"camelcase":return"-.Inf"}else if(Sa.isNegativeZero(e))return"-0.0";return r=e.toString(10),Oa.test(r)?r.replace("e",".e"):r},defaultStyle:"lowercase"}),ja=va.extend({implicit:[ba,xa,ka,Ca]}),Ta=ja,_a=ca,Fa=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9])-([0-9][0-9])$"),Ba=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9]?)-([0-9][0-9]?)(?:[Tt]|[ \\t]+)([0-9][0-9]?):([0-9][0-9]):([0-9][0-9])(?:\\.([0-9]*))?(?:[ \\t]*(Z|([-+])([0-9][0-9]?)(?::([0-9][0-9]))?))?$"),Ia=new _a("tag:yaml.org,2002:timestamp",{kind:"scalar",resolve:function(e){return null!==e&&(null!==Fa.exec(e)||null!==Ba.exec(e))},construct:function(e){var t,r,n,o,i,a,s,l,c=0,p=null;if(null===(t=Fa.exec(e))&&(t=Ba.exec(e)),null===t)throw new Error("Date resolve error");if(r=+t[1],n=+t[2]-1,o=+t[3],!t[4])return new Date(Date.UTC(r,n,o));if(i=+t[4],a=+t[5],s=+t[6],t[7]){for(c=t[7].slice(0,3);c.length<3;)c+="0";c=+c}return t[9]&&(p=6e4*(60*+t[10]+ +(t[11]||0)),"-"===t[9]&&(p=-p)),l=new Date(Date.UTC(r,n,o,i,a,s,c)),p&&l.setTime(l.getTime()-p),l},instanceOf:Date,represent:function(e){return e.toISOString()}}),Pa=new ca("tag:yaml.org,2002:merge",{kind:"scalar",resolve:function(e){return"<<"===e||null===e}}),Ra="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=\n\r",Ua=new ca("tag:yaml.org,2002:binary",{kind:"scalar",resolve:function(e){if(null===e)return!1;var t,r,n=0,o=e.length,i=Ra;for(r=0;r<o;r++)if(!((t=i.indexOf(e.charAt(r)))>64)){if(t<0)return!1;n+=6}return n%8==0},construct:function(e){var t,r,n=e.replace(/[\r\n=]/g,""),o=n.length,i=Ra,a=0,s=[];for(t=0;t<o;t++)t%4==0&&t&&(s.push(a>>16&255),s.push(a>>8&255),s.push(255&a)),a=a<<6|i.indexOf(n.charAt(t));return 0==(r=o%4*6)?(s.push(a>>16&255),s.push(a>>8&255),s.push(255&a)):18===r?(s.push(a>>10&255),s.push(a>>2&255)):12===r&&s.push(a>>4&255),new Uint8Array(s)},predicate:function(e){return"[object Uint8Array]"===Object.prototype.toString.call(e)},represent:function(e){var t,r,n="",o=0,i=e.length,a=Ra;for(t=0;t<i;t++)t%3==0&&t&&(n+=a[o>>18&63],n+=a[o>>12&63],n+=a[o>>6&63],n+=a[63&o]),o=(o<<8)+e[t];return 0==(r=i%3)?(n+=a[o>>18&63],n+=a[o>>12&63],n+=a[o>>6&63],n+=a[63&o]):2===r?(n+=a[o>>10&63],n+=a[o>>4&63],n+=a[o<<2&63],n+=a[64]):1===r&&(n+=a[o>>2&63],n+=a[o<<4&63],n+=a[64],n+=a[64]),n}}),La=ca,Na=Object.prototype.hasOwnProperty,za=Object.prototype.toString,qa=new La("tag:yaml.org,2002:omap",{kind:"sequence",resolve:function(e){if(null===e)return!0;var t,r,n,o,i,a=[],s=e;for(t=0,r=s.length;t<r;t+=1){if(n=s[t],i=!1,"[object Object]"!==za.call(n))return!1;for(o in n)if(Na.call(n,o)){if(i)return!1;i=!0}if(!i)return!1;if(-1!==a.indexOf(o))return!1;a.push(o)}return!0},construct:function(e){return null!==e?e:[]}}),Ma=ca,Ha=Object.prototype.toString,Wa=new Ma("tag:yaml.org,2002:pairs",{kind:"sequence",resolve:function(e){if(null===e)return!0;var t,r,n,o,i,a=e;for(i=new Array(a.length),t=0,r=a.length;t<r;t+=1){if(n=a[t],"[object Object]"!==Ha.call(n))return!1;if(1!==(o=Object.keys(n)).length)return!1;i[t]=[o[0],n[o[0]]]}return!0},construct:function(e){if(null===e)return[];var t,r,n,o,i,a=e;for(i=new Array(a.length),t=0,r=a.length;t<r;t+=1)n=a[t],o=Object.keys(n),i[t]=[o[0],n[o[0]]];return i}}),Va=ca,Ga=Object.prototype.hasOwnProperty,Ka=new Va("tag:yaml.org,2002:set",{kind:"mapping",resolve:function(e){if(null===e)return!0;var t,r=e;for(t in r)if(Ga.call(r,t)&&null!==r[t])return!1;return!0},construct:function(e){return null!==e?e:{}}}),Ya=Ta.extend({implicit:[Ia,Pa],explicit:[Ua,qa,Wa,Ka]}),Ja=Qi,Za=ra,Qa=function(e,t){if(t=Object.create(t||null),!e.buffer)return null;t.maxLength||(t.maxLength=79),"number"!=typeof t.indent&&(t.indent=1),"number"!=typeof t.linesBefore&&(t.linesBefore=3),"number"!=typeof t.linesAfter&&(t.linesAfter=2);for(var r,n=/\r?\n|\r|\0/g,o=[0],i=[],a=-1;r=n.exec(e.buffer);)i.push(r.index),o.push(r.index+r[0].length),e.position<=r.index&&a<0&&(a=o.length-2);a<0&&(a=o.length-1);var s,l,c="",p=Math.min(e.line+t.linesAfter,i.length).toString().length,u=t.maxLength-(t.indent+p+3);for(s=1;s<=t.linesBefore&&!(a-s<0);s++)l=oa(e.buffer,o[a-s],i[a-s],e.position-(o[a]-o[a-s]),u),c=na.repeat(" ",t.indent)+ia((e.line-s+1).toString(),p)+" | "+l.str+"\n"+c;for(l=oa(e.buffer,o[a],i[a],e.position,u),c+=na.repeat(" ",t.indent)+ia((e.line+1).toString(),p)+" | "+l.str+"\n",c+=na.repeat("-",t.indent+p+3+l.pos)+"^\n",s=1;s<=t.linesAfter&&!(a+s>=i.length);s++)l=oa(e.buffer,o[a+s],i[a+s],e.position-(o[a]-o[a+s]),u),c+=na.repeat(" ",t.indent)+ia((e.line+s+1).toString(),p)+" | "+l.str+"\n";return c.replace(/\n$/,"")},Xa=Ya,es=Object.prototype.hasOwnProperty,ts=/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F-\x84\x86-\x9F\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/,rs=/[\x85\u2028\u2029]/,ns=/[,\[\]\{\}]/,os=/^(?:!|!!|![a-z\-]+!)$/i,is=/^(?:!|[^,\[\]\{\}])(?:%[0-9a-f]{2}|[0-9a-z\-#;\/\?:@&=\+\$,_\.!~\*'\(\)\[\]])*$/i;function as(e){return Object.prototype.toString.call(e)}function ss(e){return 10===e||13===e}function ls(e){return 9===e||32===e}function cs(e){return 9===e||32===e||10===e||13===e}function ps(e){return 44===e||91===e||93===e||123===e||125===e}function us(e){var t;return 48<=e&&e<=57?e-48:97<=(t=32|e)&&t<=102?t-97+10:-1}function ds(e){return 48===e?"\0":97===e?"":98===e?"\b":116===e||9===e?"\t":110===e?"\n":118===e?"\v":102===e?"\f":114===e?"\r":101===e?"":32===e?" ":34===e?'"':47===e?"/":92===e?"\\":78===e?"":95===e?" ":76===e?"\u2028":80===e?"\u2029":""}function hs(e){return e<=65535?String.fromCharCode(e):String.fromCharCode(55296+(e-65536>>10),56320+(e-65536&1023))}for(var fs=new Array(256),ms=new Array(256),ys=0;ys<256;ys++)fs[ys]=ds(ys)?1:0,ms[ys]=ds(ys);function gs(e,t){this.input=e,this.filename=t.filename||null,this.schema=t.schema||Xa,this.onWarning=t.onWarning||null,this.legacy=t.legacy||!1,this.json=t.json||!1,this.listener=t.listener||null,this.implicitTypes=this.schema.compiledImplicit,this.typeMap=this.schema.compiledTypeMap,this.length=e.length,this.position=0,this.line=0,this.lineStart=0,this.lineIndent=0,this.firstTabInLine=-1,this.documents=[]}function vs(e,t){var r={name:e.filename,buffer:e.input.slice(0,-1),position:e.position,line:e.line,column:e.position-e.lineStart};return r.snippet=Qa(r),new Za(t,r)}function bs(e,t){throw vs(e,t)}function xs(e,t){e.onWarning&&e.onWarning.call(null,vs(e,t))}var ws={YAML:function(e,t,r){var n,o,i;null!==e.version&&bs(e,"duplication of %YAML directive"),1!==r.length&&bs(e,"YAML directive accepts exactly one argument"),null===(n=/^([0-9]+)\.([0-9]+)$/.exec(r[0]))&&bs(e,"ill-formed argument of the YAML directive"),o=parseInt(n[1],10),i=parseInt(n[2],10),1!==o&&bs(e,"unacceptable YAML version of the document"),e.version=r[0],e.checkLineBreaks=i<2,1!==i&&2!==i&&xs(e,"unsupported YAML version of the document")},TAG:function(e,t,r){var n,o;2!==r.length&&bs(e,"TAG directive accepts exactly two arguments"),n=r[0],o=r[1],os.test(n)||bs(e,"ill-formed tag handle (first argument) of the TAG directive"),es.call(e.tagMap,n)&&bs(e,'there is a previously declared suffix for "'+n+'" tag handle'),is.test(o)||bs(e,"ill-formed tag prefix (second argument) of the TAG directive");try{o=decodeURIComponent(o)}catch(t){bs(e,"tag prefix is malformed: "+o)}e.tagMap[n]=o}};function $s(e,t,r,n){var o,i,a,s;if(t<r){if(s=e.input.slice(t,r),n)for(o=0,i=s.length;o<i;o+=1)9===(a=s.charCodeAt(o))||32<=a&&a<=1114111||bs(e,"expected valid JSON character");else ts.test(s)&&bs(e,"the stream contains non-printable characters");e.result+=s}}function As(e,t,r,n){var o,i,a,s;for(Ja.isObject(r)||bs(e,"cannot merge mappings; the provided source object is unacceptable"),a=0,s=(o=Object.keys(r)).length;a<s;a+=1)i=o[a],es.call(t,i)||(t[i]=r[i],n[i]=!0)}function ks(e,t,r,n,o,i,a,s,l){var c,p;if(Array.isArray(o))for(c=0,p=(o=Array.prototype.slice.call(o)).length;c<p;c+=1)Array.isArray(o[c])&&bs(e,"nested arrays are not supported inside keys"),"object"==typeof o&&"[object Object]"===as(o[c])&&(o[c]="[object Object]");if("object"==typeof o&&"[object Object]"===as(o)&&(o="[object Object]"),o=String(o),null===t&&(t={}),"tag:yaml.org,2002:merge"===n)if(Array.isArray(i))for(c=0,p=i.length;c<p;c+=1)As(e,t,i[c],r);else As(e,t,i,r);else e.json||es.call(r,o)||!es.call(t,o)||(e.line=a||e.line,e.lineStart=s||e.lineStart,e.position=l||e.position,bs(e,"duplicated mapping key")),"__proto__"===o?Object.defineProperty(t,o,{configurable:!0,enumerable:!0,writable:!0,value:i}):t[o]=i,delete r[o];return t}function Ss(e){var t;10===(t=e.input.charCodeAt(e.position))?e.position++:13===t?(e.position++,10===e.input.charCodeAt(e.position)&&e.position++):bs(e,"a line break is expected"),e.line+=1,e.lineStart=e.position,e.firstTabInLine=-1}function Es(e,t,r){for(var n=0,o=e.input.charCodeAt(e.position);0!==o;){for(;ls(o);)9===o&&-1===e.firstTabInLine&&(e.firstTabInLine=e.position),o=e.input.charCodeAt(++e.position);if(t&&35===o)do{o=e.input.charCodeAt(++e.position)}while(10!==o&&13!==o&&0!==o);if(!ss(o))break;for(Ss(e),o=e.input.charCodeAt(e.position),n++,e.lineIndent=0;32===o;)e.lineIndent++,o=e.input.charCodeAt(++e.position)}return-1!==r&&0!==n&&e.lineIndent<r&&xs(e,"deficient indentation"),n}function Ds(e){var t,r=e.position;return!(45!==(t=e.input.charCodeAt(r))&&46!==t||t!==e.input.charCodeAt(r+1)||t!==e.input.charCodeAt(r+2)||(r+=3,0!==(t=e.input.charCodeAt(r))&&!cs(t)))}function Os(e,t){1===t?e.result+=" ":t>1&&(e.result+=Ja.repeat("\n",t-1))}function Cs(e,t){var r,n,o=e.tag,i=e.anchor,a=[],s=!1;if(-1!==e.firstTabInLine)return!1;for(null!==e.anchor&&(e.anchorMap[e.anchor]=a),n=e.input.charCodeAt(e.position);0!==n&&(-1!==e.firstTabInLine&&(e.position=e.firstTabInLine,bs(e,"tab characters must not be used in indentation")),45===n)&&cs(e.input.charCodeAt(e.position+1));)if(s=!0,e.position++,Es(e,!0,-1)&&e.lineIndent<=t)a.push(null),n=e.input.charCodeAt(e.position);else if(r=e.line,_s(e,t,3,!1,!0),a.push(e.result),Es(e,!0,-1),n=e.input.charCodeAt(e.position),(e.line===r||e.lineIndent>t)&&0!==n)bs(e,"bad indentation of a sequence entry");else if(e.lineIndent<t)break;return!!s&&(e.tag=o,e.anchor=i,e.kind="sequence",e.result=a,!0)}function js(e){var t,r,n,o,i=!1,a=!1;if(33!==(o=e.input.charCodeAt(e.position)))return!1;if(null!==e.tag&&bs(e,"duplication of a tag property"),60===(o=e.input.charCodeAt(++e.position))?(i=!0,o=e.input.charCodeAt(++e.position)):33===o?(a=!0,r="!!",o=e.input.charCodeAt(++e.position)):r="!",t=e.position,i){do{o=e.input.charCodeAt(++e.position)}while(0!==o&&62!==o);e.position<e.length?(n=e.input.slice(t,e.position),o=e.input.charCodeAt(++e.position)):bs(e,"unexpected end of the stream within a verbatim tag")}else{for(;0!==o&&!cs(o);)33===o&&(a?bs(e,"tag suffix cannot contain exclamation marks"):(r=e.input.slice(t-1,e.position+1),os.test(r)||bs(e,"named tag handle cannot contain such characters"),a=!0,t=e.position+1)),o=e.input.charCodeAt(++e.position);n=e.input.slice(t,e.position),ns.test(n)&&bs(e,"tag suffix cannot contain flow indicator characters")}n&&!is.test(n)&&bs(e,"tag name cannot contain such characters: "+n);try{n=decodeURIComponent(n)}catch(t){bs(e,"tag name is malformed: "+n)}return i?e.tag=n:es.call(e.tagMap,r)?e.tag=e.tagMap[r]+n:"!"===r?e.tag="!"+n:"!!"===r?e.tag="tag:yaml.org,2002:"+n:bs(e,'undeclared tag handle "'+r+'"'),!0}function Ts(e){var t,r;if(38!==(r=e.input.charCodeAt(e.position)))return!1;for(null!==e.anchor&&bs(e,"duplication of an anchor property"),r=e.input.charCodeAt(++e.position),t=e.position;0!==r&&!cs(r)&&!ps(r);)r=e.input.charCodeAt(++e.position);return e.position===t&&bs(e,"name of an anchor node must contain at least one character"),e.anchor=e.input.slice(t,e.position),!0}function _s(e,t,r,n,o){var i,a,s,l,c,p,u,d,h,f=1,m=!1,y=!1;if(null!==e.listener&&e.listener("open",e),e.tag=null,e.anchor=null,e.kind=null,e.result=null,i=a=s=4===r||3===r,n&&Es(e,!0,-1)&&(m=!0,e.lineIndent>t?f=1:e.lineIndent===t?f=0:e.lineIndent<t&&(f=-1)),1===f)for(;js(e)||Ts(e);)Es(e,!0,-1)?(m=!0,s=i,e.lineIndent>t?f=1:e.lineIndent===t?f=0:e.lineIndent<t&&(f=-1)):s=!1;if(s&&(s=m||o),1!==f&&4!==r||(d=1===r||2===r?t:t+1,h=e.position-e.lineStart,1===f?s&&(Cs(e,h)||function(e,t,r){var n,o,i,a,s,l,c,p=e.tag,u=e.anchor,d={},h=Object.create(null),f=null,m=null,y=null,g=!1,v=!1;if(-1!==e.firstTabInLine)return!1;for(null!==e.anchor&&(e.anchorMap[e.anchor]=d),c=e.input.charCodeAt(e.position);0!==c;){if(g||-1===e.firstTabInLine||(e.position=e.firstTabInLine,bs(e,"tab characters must not be used in indentation")),n=e.input.charCodeAt(e.position+1),i=e.line,63!==c&&58!==c||!cs(n)){if(a=e.line,s=e.lineStart,l=e.position,!_s(e,r,2,!1,!0))break;if(e.line===i){for(c=e.input.charCodeAt(e.position);ls(c);)c=e.input.charCodeAt(++e.position);if(58===c)cs(c=e.input.charCodeAt(++e.position))||bs(e,"a whitespace character is expected after the key-value separator within a block mapping"),g&&(ks(e,d,h,f,m,null,a,s,l),f=m=y=null),v=!0,g=!1,o=!1,f=e.tag,m=e.result;else{if(!v)return e.tag=p,e.anchor=u,!0;bs(e,"can not read an implicit mapping pair; a colon is missed")}}else{if(!v)return e.tag=p,e.anchor=u,!0;bs(e,"can not read a block mapping entry; a multiline key may not be an implicit key")}}else 63===c?(g&&(ks(e,d,h,f,m,null,a,s,l),f=m=y=null),v=!0,g=!0,o=!0):g?(g=!1,o=!0):bs(e,"incomplete explicit mapping pair; a key node is missed; or followed by a non-tabulated empty line"),e.position+=1,c=n;if((e.line===i||e.lineIndent>t)&&(g&&(a=e.line,s=e.lineStart,l=e.position),_s(e,t,4,!0,o)&&(g?m=e.result:y=e.result),g||(ks(e,d,h,f,m,y,a,s,l),f=m=y=null),Es(e,!0,-1),c=e.input.charCodeAt(e.position)),(e.line===i||e.lineIndent>t)&&0!==c)bs(e,"bad indentation of a mapping entry");else if(e.lineIndent<t)break}return g&&ks(e,d,h,f,m,null,a,s,l),v&&(e.tag=p,e.anchor=u,e.kind="mapping",e.result=d),v}(e,h,d))||function(e,t){var r,n,o,i,a,s,l,c,p,u,d,h,f=!0,m=e.tag,y=e.anchor,g=Object.create(null);if(91===(h=e.input.charCodeAt(e.position)))a=93,c=!1,i=[];else{if(123!==h)return!1;a=125,c=!0,i={}}for(null!==e.anchor&&(e.anchorMap[e.anchor]=i),h=e.input.charCodeAt(++e.position);0!==h;){if(Es(e,!0,t),(h=e.input.charCodeAt(e.position))===a)return e.position++,e.tag=m,e.anchor=y,e.kind=c?"mapping":"sequence",e.result=i,!0;f?44===h&&bs(e,"expected the node content, but found ','"):bs(e,"missed comma between flow collection entries"),d=null,s=l=!1,63===h&&cs(e.input.charCodeAt(e.position+1))&&(s=l=!0,e.position++,Es(e,!0,t)),r=e.line,n=e.lineStart,o=e.position,_s(e,t,1,!1,!0),u=e.tag,p=e.result,Es(e,!0,t),h=e.input.charCodeAt(e.position),!l&&e.line!==r||58!==h||(s=!0,h=e.input.charCodeAt(++e.position),Es(e,!0,t),_s(e,t,1,!1,!0),d=e.result),c?ks(e,i,g,u,p,d,r,n,o):s?i.push(ks(e,null,g,u,p,d,r,n,o)):i.push(p),Es(e,!0,t),44===(h=e.input.charCodeAt(e.position))?(f=!0,h=e.input.charCodeAt(++e.position)):f=!1}bs(e,"unexpected end of the stream within a flow collection")}(e,d)?y=!0:(a&&function(e,t){var r,n,o,i,a,s=1,l=!1,c=!1,p=t,u=0,d=!1;if(124===(i=e.input.charCodeAt(e.position)))n=!1;else{if(62!==i)return!1;n=!0}for(e.kind="scalar",e.result="";0!==i;)if(43===(i=e.input.charCodeAt(++e.position))||45===i)1===s?s=43===i?3:2:bs(e,"repeat of a chomping mode identifier");else{if(!((o=48<=(a=i)&&a<=57?a-48:-1)>=0))break;0===o?bs(e,"bad explicit indentation width of a block scalar; it cannot be less than one"):c?bs(e,"repeat of an indentation width identifier"):(p=t+o-1,c=!0)}if(ls(i)){do{i=e.input.charCodeAt(++e.position)}while(ls(i));if(35===i)do{i=e.input.charCodeAt(++e.position)}while(!ss(i)&&0!==i)}for(;0!==i;){for(Ss(e),e.lineIndent=0,i=e.input.charCodeAt(e.position);(!c||e.lineIndent<p)&&32===i;)e.lineIndent++,i=e.input.charCodeAt(++e.position);if(!c&&e.lineIndent>p&&(p=e.lineIndent),ss(i))u++;else{if(e.lineIndent<p){3===s?e.result+=Ja.repeat("\n",l?1+u:u):1===s&&l&&(e.result+="\n");break}for(n?ls(i)?(d=!0,e.result+=Ja.repeat("\n",l?1+u:u)):d?(d=!1,e.result+=Ja.repeat("\n",u+1)):0===u?l&&(e.result+=" "):e.result+=Ja.repeat("\n",u):e.result+=Ja.repeat("\n",l?1+u:u),l=!0,c=!0,u=0,r=e.position;!ss(i)&&0!==i;)i=e.input.charCodeAt(++e.position);$s(e,r,e.position,!1)}}return!0}(e,d)||function(e,t){var r,n,o;if(39!==(r=e.input.charCodeAt(e.position)))return!1;for(e.kind="scalar",e.result="",e.position++,n=o=e.position;0!==(r=e.input.charCodeAt(e.position));)if(39===r){if($s(e,n,e.position,!0),39!==(r=e.input.charCodeAt(++e.position)))return!0;n=e.position,e.position++,o=e.position}else ss(r)?($s(e,n,o,!0),Os(e,Es(e,!1,t)),n=o=e.position):e.position===e.lineStart&&Ds(e)?bs(e,"unexpected end of the document within a single quoted scalar"):(e.position++,o=e.position);bs(e,"unexpected end of the stream within a single quoted scalar")}(e,d)||function(e,t){var r,n,o,i,a,s,l;if(34!==(s=e.input.charCodeAt(e.position)))return!1;for(e.kind="scalar",e.result="",e.position++,r=n=e.position;0!==(s=e.input.charCodeAt(e.position));){if(34===s)return $s(e,r,e.position,!0),e.position++,!0;if(92===s){if($s(e,r,e.position,!0),ss(s=e.input.charCodeAt(++e.position)))Es(e,!1,t);else if(s<256&&fs[s])e.result+=ms[s],e.position++;else if((a=120===(l=s)?2:117===l?4:85===l?8:0)>0){for(o=a,i=0;o>0;o--)(a=us(s=e.input.charCodeAt(++e.position)))>=0?i=(i<<4)+a:bs(e,"expected hexadecimal character");e.result+=hs(i),e.position++}else bs(e,"unknown escape sequence");r=n=e.position}else ss(s)?($s(e,r,n,!0),Os(e,Es(e,!1,t)),r=n=e.position):e.position===e.lineStart&&Ds(e)?bs(e,"unexpected end of the document within a double quoted scalar"):(e.position++,n=e.position)}bs(e,"unexpected end of the stream within a double quoted scalar")}(e,d)?y=!0:function(e){var t,r,n;if(42!==(n=e.input.charCodeAt(e.position)))return!1;for(n=e.input.charCodeAt(++e.position),t=e.position;0!==n&&!cs(n)&&!ps(n);)n=e.input.charCodeAt(++e.position);return e.position===t&&bs(e,"name of an alias node must contain at least one character"),r=e.input.slice(t,e.position),es.call(e.anchorMap,r)||bs(e,'unidentified alias "'+r+'"'),e.result=e.anchorMap[r],Es(e,!0,-1),!0}(e)?(y=!0,null===e.tag&&null===e.anchor||bs(e,"alias node should not have any properties")):function(e,t,r){var n,o,i,a,s,l,c,p,u=e.kind,d=e.result;if(cs(p=e.input.charCodeAt(e.position))||ps(p)||35===p||38===p||42===p||33===p||124===p||62===p||39===p||34===p||37===p||64===p||96===p)return!1;if((63===p||45===p)&&(cs(n=e.input.charCodeAt(e.position+1))||r&&ps(n)))return!1;for(e.kind="scalar",e.result="",o=i=e.position,a=!1;0!==p;){if(58===p){if(cs(n=e.input.charCodeAt(e.position+1))||r&&ps(n))break}else if(35===p){if(cs(e.input.charCodeAt(e.position-1)))break}else{if(e.position===e.lineStart&&Ds(e)||r&&ps(p))break;if(ss(p)){if(s=e.line,l=e.lineStart,c=e.lineIndent,Es(e,!1,-1),e.lineIndent>=t){a=!0,p=e.input.charCodeAt(e.position);continue}e.position=i,e.line=s,e.lineStart=l,e.lineIndent=c;break}}a&&($s(e,o,i,!1),Os(e,e.line-s),o=i=e.position,a=!1),ls(p)||(i=e.position+1),p=e.input.charCodeAt(++e.position)}return $s(e,o,i,!1),!!e.result||(e.kind=u,e.result=d,!1)}(e,d,1===r)&&(y=!0,null===e.tag&&(e.tag="?")),null!==e.anchor&&(e.anchorMap[e.anchor]=e.result)):0===f&&(y=s&&Cs(e,h))),null===e.tag)null!==e.anchor&&(e.anchorMap[e.anchor]=e.result);else if("?"===e.tag){for(null!==e.result&&"scalar"!==e.kind&&bs(e,'unacceptable node kind for !<?> tag; it should be "scalar", not "'+e.kind+'"'),l=0,c=e.implicitTypes.length;l<c;l+=1)if((u=e.implicitTypes[l]).resolve(e.result)){e.result=u.construct(e.result),e.tag=u.tag,null!==e.anchor&&(e.anchorMap[e.anchor]=e.result);break}}else if("!"!==e.tag){if(es.call(e.typeMap[e.kind||"fallback"],e.tag))u=e.typeMap[e.kind||"fallback"][e.tag];else for(u=null,l=0,c=(p=e.typeMap.multi[e.kind||"fallback"]).length;l<c;l+=1)if(e.tag.slice(0,p[l].tag.length)===p[l].tag){u=p[l];break}u||bs(e,"unknown tag !<"+e.tag+">"),null!==e.result&&u.kind!==e.kind&&bs(e,"unacceptable node kind for !<"+e.tag+'> tag; it should be "'+u.kind+'", not "'+e.kind+'"'),u.resolve(e.result,e.tag)?(e.result=u.construct(e.result,e.tag),null!==e.anchor&&(e.anchorMap[e.anchor]=e.result)):bs(e,"cannot resolve a node with !<"+e.tag+"> explicit tag")}return null!==e.listener&&e.listener("close",e),null!==e.tag||null!==e.anchor||y}function Fs(e){var t,r,n,o,i=e.position,a=!1;for(e.version=null,e.checkLineBreaks=e.legacy,e.tagMap=Object.create(null),e.anchorMap=Object.create(null);0!==(o=e.input.charCodeAt(e.position))&&(Es(e,!0,-1),o=e.input.charCodeAt(e.position),!(e.lineIndent>0||37!==o));){for(a=!0,o=e.input.charCodeAt(++e.position),t=e.position;0!==o&&!cs(o);)o=e.input.charCodeAt(++e.position);for(n=[],(r=e.input.slice(t,e.position)).length<1&&bs(e,"directive name must not be less than one character in length");0!==o;){for(;ls(o);)o=e.input.charCodeAt(++e.position);if(35===o){do{o=e.input.charCodeAt(++e.position)}while(0!==o&&!ss(o));break}if(ss(o))break;for(t=e.position;0!==o&&!cs(o);)o=e.input.charCodeAt(++e.position);n.push(e.input.slice(t,e.position))}0!==o&&Ss(e),es.call(ws,r)?ws[r](e,r,n):xs(e,'unknown document directive "'+r+'"')}Es(e,!0,-1),0===e.lineIndent&&45===e.input.charCodeAt(e.position)&&45===e.input.charCodeAt(e.position+1)&&45===e.input.charCodeAt(e.position+2)?(e.position+=3,Es(e,!0,-1)):a&&bs(e,"directives end mark is expected"),_s(e,e.lineIndent-1,4,!1,!0),Es(e,!0,-1),e.checkLineBreaks&&rs.test(e.input.slice(i,e.position))&&xs(e,"non-ASCII line breaks are interpreted as content"),e.documents.push(e.result),e.position===e.lineStart&&Ds(e)?46===e.input.charCodeAt(e.position)&&(e.position+=3,Es(e,!0,-1)):e.position<e.length-1&&bs(e,"end of the stream or a document separator is expected")}function Bs(e,t){t=t||{},0!==(e=String(e)).length&&(10!==e.charCodeAt(e.length-1)&&13!==e.charCodeAt(e.length-1)&&(e+="\n"),65279===e.charCodeAt(0)&&(e=e.slice(1)));var r=new gs(e,t),n=e.indexOf("\0");for(-1!==n&&(r.position=n,bs(r,"null byte is not allowed in input")),r.input+="\0";32===r.input.charCodeAt(r.position);)r.lineIndent+=1,r.position+=1;for(;r.position<r.length-1;)Fs(r);return r.documents}Zi.loadAll=function(e,t,r){null!==t&&"object"==typeof t&&void 0===r&&(r=t,t=null);var n=Bs(e,r);if("function"!=typeof t)return n;for(var o=0,i=n.length;o<i;o+=1)t(n[o])},Zi.load=function(e,t){var r=Bs(e,t);if(0!==r.length){if(1===r.length)return r[0];throw new Za("expected a single document in the stream, but found more")}};var Is={},Ps=Qi,Rs=ra,Us=Ya,Ls=Object.prototype.toString,Ns=Object.prototype.hasOwnProperty,zs={0:"\\0",7:"\\a",8:"\\b",9:"\\t",10:"\\n",11:"\\v",12:"\\f",13:"\\r",27:"\\e",34:'\\"',92:"\\\\",133:"\\N",160:"\\_",8232:"\\L",8233:"\\P"},qs=["y","Y","yes","Yes","YES","on","On","ON","n","N","no","No","NO","off","Off","OFF"],Ms=/^[-+]?[0-9_]+(?::[0-9_]+)+(?:\.[0-9_]*)?$/;function Hs(e){var t,r,n;if(t=e.toString(16).toUpperCase(),e<=255)r="x",n=2;else if(e<=65535)r="u",n=4;else{if(!(e<=4294967295))throw new Rs("code point within a string may not be greater than 0xFFFFFFFF");r="U",n=8}return"\\"+r+Ps.repeat("0",n-t.length)+t}function Ws(e){this.schema=e.schema||Us,this.indent=Math.max(1,e.indent||2),this.noArrayIndent=e.noArrayIndent||!1,this.skipInvalid=e.skipInvalid||!1,this.flowLevel=Ps.isNothing(e.flowLevel)?-1:e.flowLevel,this.styleMap=function(e,t){var r,n,o,i,a,s,l;if(null===t)return{};for(r={},o=0,i=(n=Object.keys(t)).length;o<i;o+=1)a=n[o],s=String(t[a]),"!!"===a.slice(0,2)&&(a="tag:yaml.org,2002:"+a.slice(2)),(l=e.compiledTypeMap.fallback[a])&&Ns.call(l.styleAliases,s)&&(s=l.styleAliases[s]),r[a]=s;return r}(this.schema,e.styles||null),this.sortKeys=e.sortKeys||!1,this.lineWidth=e.lineWidth||80,this.noRefs=e.noRefs||!1,this.noCompatMode=e.noCompatMode||!1,this.condenseFlow=e.condenseFlow||!1,this.quotingType='"'===e.quotingType?2:1,this.forceQuotes=e.forceQuotes||!1,this.replacer="function"==typeof e.replacer?e.replacer:null,this.implicitTypes=this.schema.compiledImplicit,this.explicitTypes=this.schema.compiledExplicit,this.tag=null,this.result="",this.duplicates=[],this.usedDuplicates=null}function Vs(e,t){for(var r,n=Ps.repeat(" ",t),o=0,i=-1,a="",s=e.length;o<s;)-1===(i=e.indexOf("\n",o))?(r=e.slice(o),o=s):(r=e.slice(o,i+1),o=i+1),r.length&&"\n"!==r&&(a+=n),a+=r;return a}function Gs(e,t){return"\n"+Ps.repeat(" ",e.indent*t)}function Ks(e){return 32===e||9===e}function Ys(e){return 32<=e&&e<=126||161<=e&&e<=55295&&8232!==e&&8233!==e||57344<=e&&e<=65533&&65279!==e||65536<=e&&e<=1114111}function Js(e){return Ys(e)&&65279!==e&&13!==e&&10!==e}function Zs(e,t,r){var n=Js(e),o=n&&!Ks(e);return(r?n:n&&44!==e&&91!==e&&93!==e&&123!==e&&125!==e)&&35!==e&&!(58===t&&!o)||Js(t)&&!Ks(t)&&35===e||58===t&&o}function Qs(e,t){var r,n=e.charCodeAt(t);return n>=55296&&n<=56319&&t+1<e.length&&(r=e.charCodeAt(t+1))>=56320&&r<=57343?1024*(n-55296)+r-56320+65536:n}function Xs(e){return/^\n* /.test(e)}function el(e,t,r,n,o){e.dump=function(){if(0===t.length)return 2===e.quotingType?'""':"''";if(!e.noCompatMode&&(-1!==qs.indexOf(t)||Ms.test(t)))return 2===e.quotingType?'"'+t+'"':"'"+t+"'";var i=e.indent*Math.max(1,r),a=-1===e.lineWidth?-1:Math.max(Math.min(e.lineWidth,40),e.lineWidth-i),s=n||e.flowLevel>-1&&r>=e.flowLevel;switch(function(e,t,r,n,o,i,a,s){var l,c,p=0,u=null,d=!1,h=!1,f=-1!==n,m=-1,y=Ys(c=Qs(e,0))&&65279!==c&&!Ks(c)&&45!==c&&63!==c&&58!==c&&44!==c&&91!==c&&93!==c&&123!==c&&125!==c&&35!==c&&38!==c&&42!==c&&33!==c&&124!==c&&61!==c&&62!==c&&39!==c&&34!==c&&37!==c&&64!==c&&96!==c&&function(e){return!Ks(e)&&58!==e}(Qs(e,e.length-1));if(t||a)for(l=0;l<e.length;p>=65536?l+=2:l++){if(!Ys(p=Qs(e,l)))return 5;y=y&&Zs(p,u,s),u=p}else{for(l=0;l<e.length;p>=65536?l+=2:l++){if(10===(p=Qs(e,l)))d=!0,f&&(h=h||l-m-1>n&&" "!==e[m+1],m=l);else if(!Ys(p))return 5;y=y&&Zs(p,u,s),u=p}h=h||f&&l-m-1>n&&" "!==e[m+1]}return d||h?r>9&&Xs(e)?5:a?2===i?5:2:h?4:3:!y||a||o(e)?2===i?5:2:1}(t,s,e.indent,a,(function(t){return function(e,t){var r,n;for(r=0,n=e.implicitTypes.length;r<n;r+=1)if(e.implicitTypes[r].resolve(t))return!0;return!1}(e,t)}),e.quotingType,e.forceQuotes&&!n,o)){case 1:return t;case 2:return"'"+t.replace(/'/g,"''")+"'";case 3:return"|"+tl(t,e.indent)+rl(Vs(t,i));case 4:return">"+tl(t,e.indent)+rl(Vs(function(e,t){for(var r,n,o,i=/(\n+)([^\n]*)/g,a=(o=-1!==(o=e.indexOf("\n"))?o:e.length,i.lastIndex=o,nl(e.slice(0,o),t)),s="\n"===e[0]||" "===e[0];n=i.exec(e);){var l=n[1],c=n[2];r=" "===c[0],a+=l+(s||r||""===c?"":"\n")+nl(c,t),s=r}return a}(t,a),i));case 5:return'"'+function(e){for(var t,r="",n=0,o=0;o<e.length;n>=65536?o+=2:o++)n=Qs(e,o),!(t=zs[n])&&Ys(n)?(r+=e[o],n>=65536&&(r+=e[o+1])):r+=t||Hs(n);return r}(t)+'"';default:throw new Rs("impossible error: invalid scalar style")}}()}function tl(e,t){var r=Xs(e)?String(t):"",n="\n"===e[e.length-1];return r+(!n||"\n"!==e[e.length-2]&&"\n"!==e?n?"":"-":"+")+"\n"}function rl(e){return"\n"===e[e.length-1]?e.slice(0,-1):e}function nl(e,t){if(""===e||" "===e[0])return e;for(var r,n,o=/ [^ ]/g,i=0,a=0,s=0,l="";r=o.exec(e);)(s=r.index)-i>t&&(n=a>i?a:s,l+="\n"+e.slice(i,n),i=n+1),a=s;return l+="\n",e.length-i>t&&a>i?l+=e.slice(i,a)+"\n"+e.slice(a+1):l+=e.slice(i),l.slice(1)}function ol(e,t,r,n){var o,i,a,s="",l=e.tag;for(o=0,i=r.length;o<i;o+=1)a=r[o],e.replacer&&(a=e.replacer.call(r,String(o),a)),(al(e,t+1,a,!0,!0,!1,!0)||void 0===a&&al(e,t+1,null,!0,!0,!1,!0))&&(n&&""===s||(s+=Gs(e,t)),e.dump&&10===e.dump.charCodeAt(0)?s+="-":s+="- ",s+=e.dump);e.tag=l,e.dump=s||"[]"}function il(e,t,r){var n,o,i,a,s,l;for(i=0,a=(o=r?e.explicitTypes:e.implicitTypes).length;i<a;i+=1)if(((s=o[i]).instanceOf||s.predicate)&&(!s.instanceOf||"object"==typeof t&&t instanceof s.instanceOf)&&(!s.predicate||s.predicate(t))){if(r?s.multi&&s.representName?e.tag=s.representName(t):e.tag=s.tag:e.tag="?",s.represent){if(l=e.styleMap[s.tag]||s.defaultStyle,"[object Function]"===Ls.call(s.represent))n=s.represent(t,l);else{if(!Ns.call(s.represent,l))throw new Rs("!<"+s.tag+'> tag resolver accepts not "'+l+'" style');n=s.represent[l](t,l)}e.dump=n}return!0}return!1}function al(e,t,r,n,o,i,a){e.tag=null,e.dump=r,il(e,r,!1)||il(e,r,!0);var s,l=Ls.call(e.dump),c=n;n&&(n=e.flowLevel<0||e.flowLevel>t);var p,u,d="[object Object]"===l||"[object Array]"===l;if(d&&(u=-1!==(p=e.duplicates.indexOf(r))),(null!==e.tag&&"?"!==e.tag||u||2!==e.indent&&t>0)&&(o=!1),u&&e.usedDuplicates[p])e.dump="*ref_"+p;else{if(d&&u&&!e.usedDuplicates[p]&&(e.usedDuplicates[p]=!0),"[object Object]"===l)n&&0!==Object.keys(e.dump).length?(function(e,t,r,n){var o,i,a,s,l,c,p="",u=e.tag,d=Object.keys(r);if(!0===e.sortKeys)d.sort();else if("function"==typeof e.sortKeys)d.sort(e.sortKeys);else if(e.sortKeys)throw new Rs("sortKeys must be a boolean or a function");for(o=0,i=d.length;o<i;o+=1)c="",n&&""===p||(c+=Gs(e,t)),s=r[a=d[o]],e.replacer&&(s=e.replacer.call(r,a,s)),al(e,t+1,a,!0,!0,!0)&&((l=null!==e.tag&&"?"!==e.tag||e.dump&&e.dump.length>1024)&&(e.dump&&10===e.dump.charCodeAt(0)?c+="?":c+="? "),c+=e.dump,l&&(c+=Gs(e,t)),al(e,t+1,s,!0,l)&&(e.dump&&10===e.dump.charCodeAt(0)?c+=":":c+=": ",p+=c+=e.dump));e.tag=u,e.dump=p||"{}"}(e,t,e.dump,o),u&&(e.dump="&ref_"+p+e.dump)):(function(e,t,r){var n,o,i,a,s,l="",c=e.tag,p=Object.keys(r);for(n=0,o=p.length;n<o;n+=1)s="",""!==l&&(s+=", "),e.condenseFlow&&(s+='"'),a=r[i=p[n]],e.replacer&&(a=e.replacer.call(r,i,a)),al(e,t,i,!1,!1)&&(e.dump.length>1024&&(s+="? "),s+=e.dump+(e.condenseFlow?'"':"")+":"+(e.condenseFlow?"":" "),al(e,t,a,!1,!1)&&(l+=s+=e.dump));e.tag=c,e.dump="{"+l+"}"}(e,t,e.dump),u&&(e.dump="&ref_"+p+" "+e.dump));else if("[object Array]"===l)n&&0!==e.dump.length?(e.noArrayIndent&&!a&&t>0?ol(e,t-1,e.dump,o):ol(e,t,e.dump,o),u&&(e.dump="&ref_"+p+e.dump)):(function(e,t,r){var n,o,i,a="",s=e.tag;for(n=0,o=r.length;n<o;n+=1)i=r[n],e.replacer&&(i=e.replacer.call(r,String(n),i)),(al(e,t,i,!1,!1)||void 0===i&&al(e,t,null,!1,!1))&&(""!==a&&(a+=","+(e.condenseFlow?"":" ")),a+=e.dump);e.tag=s,e.dump="["+a+"]"}(e,t,e.dump),u&&(e.dump="&ref_"+p+" "+e.dump));else{if("[object String]"!==l){if("[object Undefined]"===l)return!1;if(e.skipInvalid)return!1;throw new Rs("unacceptable kind of an object to dump "+l)}"?"!==e.tag&&el(e,e.dump,t,i,c)}null!==e.tag&&"?"!==e.tag&&(s=encodeURI("!"===e.tag[0]?e.tag.slice(1):e.tag).replace(/!/g,"%21"),s="!"===e.tag[0]?"!"+s:"tag:yaml.org,2002:"===s.slice(0,18)?"!!"+s.slice(18):"!<"+s+">",e.dump=s+" "+e.dump)}return!0}function sl(e,t){var r,n,o=[],i=[];for(ll(e,o,i),r=0,n=i.length;r<n;r+=1)t.duplicates.push(o[i[r]]);t.usedDuplicates=new Array(n)}function ll(e,t,r){var n,o,i;if(null!==e&&"object"==typeof e)if(-1!==(o=t.indexOf(e)))-1===r.indexOf(o)&&r.push(o);else if(t.push(e),Array.isArray(e))for(o=0,i=e.length;o<i;o+=1)ll(e[o],t,r);else for(o=0,i=(n=Object.keys(e)).length;o<i;o+=1)ll(e[n[o]],t,r)}Is.dump=function(e,t){var r=new Ws(t=t||{});r.noRefs||sl(e,r);var n=e;return r.replacer&&(n=r.replacer.call({"":n},"",n)),al(r,0,n,!0,!0)?r.dump+"\n":""};var cl=Zi,pl=Is;function ul(e,t){return function(){throw new Error("Function yaml."+e+" is removed in js-yaml 4. Use yaml."+t+" instead, which is now safe by default.")}}Ji.Type=ca,Ji.Schema=fa,Ji.FAILSAFE_SCHEMA=va,Ji.JSON_SCHEMA=ja,Ji.CORE_SCHEMA=Ta,Ji.DEFAULT_SCHEMA=Ya,Ji.load=cl.load,Ji.loadAll=cl.loadAll,Ji.dump=pl.dump,Ji.YAMLException=ra,Ji.types={binary:Ua,float:Ca,map:ga,null:ba,pairs:Wa,set:Ka,timestamp:Ia,bool:xa,int:ka,merge:Pa,omap:qa,seq:ya,str:ma},Ji.safeLoad=ul("safeLoad","load"),Ji.safeLoadAll=ul("safeLoadAll","loadAll"),Ji.safeDump=ul("safeDump","dump");var dl=or,hl=Wr,fl=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,ml=/^\w*$/,yl=function(e,t){if(dl(e))return!1;var r=typeof e;return!("number"!=r&&"symbol"!=r&&"boolean"!=r&&null!=e&&!hl(e))||ml.test(e)||!fl.test(e)||null!=t&&e in Object(t)},gl=dt(Object,"create"),vl=gl,bl=gl,xl=Object.prototype.hasOwnProperty,wl=gl,$l=Object.prototype.hasOwnProperty,Al=gl,kl=function(){this.__data__=vl?vl(null):{},this.size=0},Sl=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},El=function(e){var t=this.__data__;if(bl){var r=t[e];return"__lodash_hash_undefined__"===r?void 0:r}return xl.call(t,e)?t[e]:void 0};function Dl(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}Dl.prototype.clear=kl,Dl.prototype.delete=Sl,Dl.prototype.get=El,Dl.prototype.has=function(e){var t=this.__data__;return wl?void 0!==t[e]:$l.call(t,e)},Dl.prototype.set=function(e,t){var r=this.__data__;return this.size+=this.has(e)?0:1,r[e]=Al&&void 0===t?"__lodash_hash_undefined__":t,this};var Ol=Dl,Cl=gt,jl=function(e,t){for(var r=e.length;r--;)if(Cl(e[r][0],t))return r;return-1},Tl=jl,_l=Array.prototype.splice,Fl=jl,Bl=jl,Il=jl,Pl=function(){this.__data__=[],this.size=0};function Rl(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}Rl.prototype.clear=Pl,Rl.prototype.delete=function(e){var t=this.__data__,r=Tl(t,e);return!(r<0||(r==t.length-1?t.pop():_l.call(t,r,1),--this.size,0))},Rl.prototype.get=function(e){var t=this.__data__,r=Fl(t,e);return r<0?void 0:t[r][1]},Rl.prototype.has=function(e){return Bl(this.__data__,e)>-1},Rl.prototype.set=function(e,t){var r=this.__data__,n=Il(r,e);return n<0?(++this.size,r.push([e,t])):r[n][1]=t,this};var Ul=Rl,Ll=dt(Re,"Map"),Nl=Ol,zl=Ul,ql=Ll,Ml=function(e,t){var r=e.__data__;return function(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e}(t)?r["string"==typeof t?"string":"hash"]:r.map},Hl=Ml,Wl=Ml,Vl=Ml,Gl=Ml;function Kl(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}Kl.prototype.clear=function(){this.size=0,this.__data__={hash:new Nl,map:new(ql||zl),string:new Nl}},Kl.prototype.delete=function(e){var t=Hl(this,e).delete(e);return this.size-=t?1:0,t},Kl.prototype.get=function(e){return Wl(this,e).get(e)},Kl.prototype.has=function(e){return Vl(this,e).has(e)},Kl.prototype.set=function(e,t){var r=Gl(this,e),n=r.size;return r.set(e,t),this.size+=r.size==n?0:1,this};var Yl=Kl,Jl=Yl;function Zl(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError("Expected a function");var r=function(){var n=arguments,o=t?t.apply(this,n):n[0],i=r.cache;if(i.has(o))return i.get(o);var a=e.apply(this,n);return r.cache=i.set(o,a)||i,a};return r.cache=new(Zl.Cache||Jl),r}Zl.Cache=Jl;for(var Ql=Zl,Xl=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,ec=/\\(\\)?/g,tc=function(e){var t=Ql((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(Xl,(function(e,r,n,o){t.push(n?o.replace(ec,"$1"):r||e)})),t}),(function(e){return 500===r.size&&r.clear(),e})),r=t.cache;return t}(),rc=or,nc=yl,oc=tc,ic=pn,ac=function(e,t){return rc(e)?e:nc(e,t)?[e]:oc(ic(e))},sc=Wr,lc=function(e){if("string"==typeof e||sc(e))return e;var t=e+"";return"0"==t&&1/e==-1/0?"-0":t},cc=ac,pc=lc,uc=function(e,t){for(var r=0,n=(t=cc(t,e)).length;null!=e&&r<n;)e=e[pc(t[r++])];return r&&r==n?e:void 0},dc=wt,hc=ac,fc=qt,mc=Ke,yc=lc,gc=uc,vc=function(e,t,r,n){if(!mc(e))return e;for(var o=-1,i=(t=hc(t,e)).length,a=i-1,s=e;null!=s&&++o<i;){var l=yc(t[o]),c=r;if("__proto__"===l||"constructor"===l||"prototype"===l)return e;if(o!=a){var p=s[l];void 0===(c=n?n(p,l,s):void 0)&&(c=mc(p)?p:fc(t[o+1])?[]:{})}dc(s,l,c),s=s[l]}return e},bc=ac,xc=ac,wc=nr,$c=or,Ac=qt,kc=Rt,Sc=lc,Ec=function(e,t){return null!=e&&t in Object(e)},Dc=function(e,t){return null!=e&&function(e,t,r){for(var n=-1,o=(t=xc(t,e)).length,i=!1;++n<o;){var a=Sc(t[n]);if(!(i=null!=e&&r(e,a)))break;e=e[a]}return i||++n!=o?i:!!(o=null==e?0:e.length)&&kc(o)&&Ac(a,o)&&($c(e)||wc(e))}(e,t,Ec)},Oc=Dc,Cc=function(e,t){for(var r=-1,n=t.length,o=e.length;++r<n;)e[o+r]=t[r];return e},jc=nr,Tc=or,_c=Ue?Ue.isConcatSpreadable:void 0,Fc=Cc,Bc=function(e){return Tc(e)||jc(e)||!!(_c&&e&&e[_c])},Ic=function e(t,r,n,o,i){var a=-1,s=t.length;for(n||(n=Bc),i||(i=[]);++a<s;){var l=t[a];r>0&&n(l)?r>1?e(l,r-1,n,o,i):Fc(i,l):o||(i[i.length]=l)}return i},Pc=function(e){return null!=e&&e.length?Ic(e,1):[]},Rc=Ot,Uc=Ft,Lc=function(e,t){return function(e,t,r){for(var n=-1,o=t.length,i={};++n<o;){var a=t[n],s=gc(e,a);r(s,a)&&vc(i,bc(a,e),s)}return i}(e,t,(function(t,r){return Oc(e,r)}))},Nc=function(e){return Uc(Rc(e,void 0,Pc),e+"")}((function(e,t){return null==e?{}:Lc(e,t)})),zc={},qc={byteLength:function(e){var t=Yc(e),r=t[0],n=t[1];return 3*(r+n)/4-n},toByteArray:function(e){var t,r,n=Yc(e),o=n[0],i=n[1],a=new Wc(function(e,t,r){return 3*(t+r)/4-r}(0,o,i)),s=0,l=i>0?o-4:o;for(r=0;r<l;r+=4)t=Hc[e.charCodeAt(r)]<<18|Hc[e.charCodeAt(r+1)]<<12|Hc[e.charCodeAt(r+2)]<<6|Hc[e.charCodeAt(r+3)],a[s++]=t>>16&255,a[s++]=t>>8&255,a[s++]=255&t;return 2===i&&(t=Hc[e.charCodeAt(r)]<<2|Hc[e.charCodeAt(r+1)]>>4,a[s++]=255&t),1===i&&(t=Hc[e.charCodeAt(r)]<<10|Hc[e.charCodeAt(r+1)]<<4|Hc[e.charCodeAt(r+2)]>>2,a[s++]=t>>8&255,a[s++]=255&t),a},fromByteArray:function(e){for(var t,r=e.length,n=r%3,o=[],i=16383,a=0,s=r-n;a<s;a+=i)o.push(Jc(e,a,a+i>s?s:a+i));return 1===n?(t=e[r-1],o.push(Mc[t>>2]+Mc[t<<4&63]+"==")):2===n&&(t=(e[r-2]<<8)+e[r-1],o.push(Mc[t>>10]+Mc[t>>4&63]+Mc[t<<2&63]+"=")),o.join("")}},Mc=[],Hc=[],Wc="undefined"!=typeof Uint8Array?Uint8Array:Array,Vc="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",Gc=0,Kc=Vc.length;Gc<Kc;++Gc)Mc[Gc]=Vc[Gc],Hc[Vc.charCodeAt(Gc)]=Gc;function Yc(e){var t=e.length;if(t%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var r=e.indexOf("=");return-1===r&&(r=t),[r,r===t?0:4-r%4]}function Jc(e,t,r){for(var n,o,i=[],a=t;a<r;a+=3)n=(e[a]<<16&16711680)+(e[a+1]<<8&65280)+(255&e[a+2]),i.push(Mc[(o=n)>>18&63]+Mc[o>>12&63]+Mc[o>>6&63]+Mc[63&o]);return i.join("")}Hc["-".charCodeAt(0)]=62,Hc["_".charCodeAt(0)]=63;var Zc={read:function(e,t,r,n,o){var i,a,s=8*o-n-1,l=(1<<s)-1,c=l>>1,p=-7,u=r?o-1:0,d=r?-1:1,h=e[t+u];for(u+=d,i=h&(1<<-p)-1,h>>=-p,p+=s;p>0;i=256*i+e[t+u],u+=d,p-=8);for(a=i&(1<<-p)-1,i>>=-p,p+=n;p>0;a=256*a+e[t+u],u+=d,p-=8);if(0===i)i=1-c;else{if(i===l)return a?NaN:1/0*(h?-1:1);a+=Math.pow(2,n),i-=c}return(h?-1:1)*a*Math.pow(2,i-n)},write:function(e,t,r,n,o,i){var a,s,l,c=8*i-o-1,p=(1<<c)-1,u=p>>1,d=23===o?Math.pow(2,-24)-Math.pow(2,-77):0,h=n?0:i-1,f=n?1:-1,m=t<0||0===t&&1/t<0?1:0;for(t=Math.abs(t),isNaN(t)||t===1/0?(s=isNaN(t)?1:0,a=p):(a=Math.floor(Math.log(t)/Math.LN2),t*(l=Math.pow(2,-a))<1&&(a--,l*=2),(t+=a+u>=1?d/l:d*Math.pow(2,1-u))*l>=2&&(a++,l/=2),a+u>=p?(s=0,a=p):a+u>=1?(s=(t*l-1)*Math.pow(2,o),a+=u):(s=t*Math.pow(2,u-1)*Math.pow(2,o),a=0));o>=8;e[r+h]=255&s,h+=f,s/=256,o-=8);for(a=a<<o|s,c+=o;c>0;e[r+h]=255&a,h+=f,a/=256,c-=8);e[r+h-f]|=128*m}};!function(e){const t=qc,r=Zc,n="function"==typeof Symbol&&"function"==typeof Symbol.for?Symbol.for("nodejs.util.inspect.custom"):null;e.Buffer=a,e.SlowBuffer=function(e){return+e!=e&&(e=0),a.alloc(+e)},e.INSPECT_MAX_BYTES=50;const o=2147483647;function i(e){if(e>o)throw new RangeError('The value "'+e+'" is invalid for option "size"');const t=new Uint8Array(e);return Object.setPrototypeOf(t,a.prototype),t}function a(e,t,r){if("number"==typeof e){if("string"==typeof t)throw new TypeError('The "string" argument must be of type string. Received type number');return c(e)}return s(e,t,r)}function s(e,t,r){if("string"==typeof e)return function(e,t){if("string"==typeof t&&""!==t||(t="utf8"),!a.isEncoding(t))throw new TypeError("Unknown encoding: "+t);const r=0|h(e,t);let n=i(r);const o=n.write(e,t);return o!==r&&(n=n.slice(0,o)),n}(e,t);if(ArrayBuffer.isView(e))return function(e){if(G(e,Uint8Array)){const t=new Uint8Array(e);return u(t.buffer,t.byteOffset,t.byteLength)}return p(e)}(e);if(null==e)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e);if(G(e,ArrayBuffer)||e&&G(e.buffer,ArrayBuffer))return u(e,t,r);if("undefined"!=typeof SharedArrayBuffer&&(G(e,SharedArrayBuffer)||e&&G(e.buffer,SharedArrayBuffer)))return u(e,t,r);if("number"==typeof e)throw new TypeError('The "value" argument must not be of type number. Received type number');const n=e.valueOf&&e.valueOf();if(null!=n&&n!==e)return a.from(n,t,r);const o=function(e){if(a.isBuffer(e)){const t=0|d(e.length),r=i(t);return 0===r.length||e.copy(r,0,0,t),r}return void 0!==e.length?"number"!=typeof e.length||K(e.length)?i(0):p(e):"Buffer"===e.type&&Array.isArray(e.data)?p(e.data):void 0}(e);if(o)return o;if("undefined"!=typeof Symbol&&null!=Symbol.toPrimitive&&"function"==typeof e[Symbol.toPrimitive])return a.from(e[Symbol.toPrimitive]("string"),t,r);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e)}function l(e){if("number"!=typeof e)throw new TypeError('"size" argument must be of type number');if(e<0)throw new RangeError('The value "'+e+'" is invalid for option "size"')}function c(e){return l(e),i(e<0?0:0|d(e))}function p(e){const t=e.length<0?0:0|d(e.length),r=i(t);for(let n=0;n<t;n+=1)r[n]=255&e[n];return r}function u(e,t,r){if(t<0||e.byteLength<t)throw new RangeError('"offset" is outside of buffer bounds');if(e.byteLength<t+(r||0))throw new RangeError('"length" is outside of buffer bounds');let n;return n=void 0===t&&void 0===r?new Uint8Array(e):void 0===r?new Uint8Array(e,t):new Uint8Array(e,t,r),Object.setPrototypeOf(n,a.prototype),n}function d(e){if(e>=o)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+o.toString(16)+" bytes");return 0|e}function h(e,t){if(a.isBuffer(e))return e.length;if(ArrayBuffer.isView(e)||G(e,ArrayBuffer))return e.byteLength;if("string"!=typeof e)throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof e);const r=e.length,n=arguments.length>2&&!0===arguments[2];if(!n&&0===r)return 0;let o=!1;for(;;)switch(t){case"ascii":case"latin1":case"binary":return r;case"utf8":case"utf-8":return H(e).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*r;case"hex":return r>>>1;case"base64":return W(e).length;default:if(o)return n?-1:H(e).length;t=(""+t).toLowerCase(),o=!0}}function f(e,t,r){let n=!1;if((void 0===t||t<0)&&(t=0),t>this.length)return"";if((void 0===r||r>this.length)&&(r=this.length),r<=0)return"";if((r>>>=0)<=(t>>>=0))return"";for(e||(e="utf8");;)switch(e){case"hex":return O(this,t,r);case"utf8":case"utf-8":return k(this,t,r);case"ascii":return E(this,t,r);case"latin1":case"binary":return D(this,t,r);case"base64":return A(this,t,r);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return C(this,t,r);default:if(n)throw new TypeError("Unknown encoding: "+e);e=(e+"").toLowerCase(),n=!0}}function m(e,t,r){const n=e[t];e[t]=e[r],e[r]=n}function y(e,t,r,n,o){if(0===e.length)return-1;if("string"==typeof r?(n=r,r=0):r>2147483647?r=2147483647:r<-2147483648&&(r=-2147483648),K(r=+r)&&(r=o?0:e.length-1),r<0&&(r=e.length+r),r>=e.length){if(o)return-1;r=e.length-1}else if(r<0){if(!o)return-1;r=0}if("string"==typeof t&&(t=a.from(t,n)),a.isBuffer(t))return 0===t.length?-1:g(e,t,r,n,o);if("number"==typeof t)return t&=255,"function"==typeof Uint8Array.prototype.indexOf?o?Uint8Array.prototype.indexOf.call(e,t,r):Uint8Array.prototype.lastIndexOf.call(e,t,r):g(e,[t],r,n,o);throw new TypeError("val must be string, number or Buffer")}function g(e,t,r,n,o){let i,a=1,s=e.length,l=t.length;if(void 0!==n&&("ucs2"===(n=String(n).toLowerCase())||"ucs-2"===n||"utf16le"===n||"utf-16le"===n)){if(e.length<2||t.length<2)return-1;a=2,s/=2,l/=2,r/=2}function c(e,t){return 1===a?e[t]:e.readUInt16BE(t*a)}if(o){let n=-1;for(i=r;i<s;i++)if(c(e,i)===c(t,-1===n?0:i-n)){if(-1===n&&(n=i),i-n+1===l)return n*a}else-1!==n&&(i-=i-n),n=-1}else for(r+l>s&&(r=s-l),i=r;i>=0;i--){let r=!0;for(let n=0;n<l;n++)if(c(e,i+n)!==c(t,n)){r=!1;break}if(r)return i}return-1}function v(e,t,r,n){r=Number(r)||0;const o=e.length-r;n?(n=Number(n))>o&&(n=o):n=o;const i=t.length;let a;for(n>i/2&&(n=i/2),a=0;a<n;++a){const n=parseInt(t.substr(2*a,2),16);if(K(n))return a;e[r+a]=n}return a}function b(e,t,r,n){return V(H(t,e.length-r),e,r,n)}function x(e,t,r,n){return V(function(e){const t=[];for(let r=0;r<e.length;++r)t.push(255&e.charCodeAt(r));return t}(t),e,r,n)}function w(e,t,r,n){return V(W(t),e,r,n)}function $(e,t,r,n){return V(function(e,t){let r,n,o;const i=[];for(let a=0;a<e.length&&!((t-=2)<0);++a)r=e.charCodeAt(a),n=r>>8,o=r%256,i.push(o),i.push(n);return i}(t,e.length-r),e,r,n)}function A(e,r,n){return 0===r&&n===e.length?t.fromByteArray(e):t.fromByteArray(e.slice(r,n))}function k(e,t,r){r=Math.min(e.length,r);const n=[];let o=t;for(;o<r;){const t=e[o];let i=null,a=t>239?4:t>223?3:t>191?2:1;if(o+a<=r){let r,n,s,l;switch(a){case 1:t<128&&(i=t);break;case 2:r=e[o+1],128==(192&r)&&(l=(31&t)<<6|63&r,l>127&&(i=l));break;case 3:r=e[o+1],n=e[o+2],128==(192&r)&&128==(192&n)&&(l=(15&t)<<12|(63&r)<<6|63&n,l>2047&&(l<55296||l>57343)&&(i=l));break;case 4:r=e[o+1],n=e[o+2],s=e[o+3],128==(192&r)&&128==(192&n)&&128==(192&s)&&(l=(15&t)<<18|(63&r)<<12|(63&n)<<6|63&s,l>65535&&l<1114112&&(i=l))}}null===i?(i=65533,a=1):i>65535&&(i-=65536,n.push(i>>>10&1023|55296),i=56320|1023&i),n.push(i),o+=a}return function(e){const t=e.length;if(t<=S)return String.fromCharCode.apply(String,e);let r="",n=0;for(;n<t;)r+=String.fromCharCode.apply(String,e.slice(n,n+=S));return r}(n)}e.kMaxLength=o,a.TYPED_ARRAY_SUPPORT=function(){try{const e=new Uint8Array(1),t={foo:function(){return 42}};return Object.setPrototypeOf(t,Uint8Array.prototype),Object.setPrototypeOf(e,t),42===e.foo()}catch(e){return!1}}(),a.TYPED_ARRAY_SUPPORT||"undefined"==typeof console||"function"!=typeof console.error||console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."),Object.defineProperty(a.prototype,"parent",{enumerable:!0,get:function(){if(a.isBuffer(this))return this.buffer}}),Object.defineProperty(a.prototype,"offset",{enumerable:!0,get:function(){if(a.isBuffer(this))return this.byteOffset}}),a.poolSize=8192,a.from=function(e,t,r){return s(e,t,r)},Object.setPrototypeOf(a.prototype,Uint8Array.prototype),Object.setPrototypeOf(a,Uint8Array),a.alloc=function(e,t,r){return function(e,t,r){return l(e),e<=0?i(e):void 0!==t?"string"==typeof r?i(e).fill(t,r):i(e).fill(t):i(e)}(e,t,r)},a.allocUnsafe=function(e){return c(e)},a.allocUnsafeSlow=function(e){return c(e)},a.isBuffer=function(e){return null!=e&&!0===e._isBuffer&&e!==a.prototype},a.compare=function(e,t){if(G(e,Uint8Array)&&(e=a.from(e,e.offset,e.byteLength)),G(t,Uint8Array)&&(t=a.from(t,t.offset,t.byteLength)),!a.isBuffer(e)||!a.isBuffer(t))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(e===t)return 0;let r=e.length,n=t.length;for(let o=0,i=Math.min(r,n);o<i;++o)if(e[o]!==t[o]){r=e[o],n=t[o];break}return r<n?-1:n<r?1:0},a.isEncoding=function(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},a.concat=function(e,t){if(!Array.isArray(e))throw new TypeError('"list" argument must be an Array of Buffers');if(0===e.length)return a.alloc(0);let r;if(void 0===t)for(t=0,r=0;r<e.length;++r)t+=e[r].length;const n=a.allocUnsafe(t);let o=0;for(r=0;r<e.length;++r){let t=e[r];if(G(t,Uint8Array))o+t.length>n.length?(a.isBuffer(t)||(t=a.from(t)),t.copy(n,o)):Uint8Array.prototype.set.call(n,t,o);else{if(!a.isBuffer(t))throw new TypeError('"list" argument must be an Array of Buffers');t.copy(n,o)}o+=t.length}return n},a.byteLength=h,a.prototype._isBuffer=!0,a.prototype.swap16=function(){const e=this.length;if(e%2!=0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(let t=0;t<e;t+=2)m(this,t,t+1);return this},a.prototype.swap32=function(){const e=this.length;if(e%4!=0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(let t=0;t<e;t+=4)m(this,t,t+3),m(this,t+1,t+2);return this},a.prototype.swap64=function(){const e=this.length;if(e%8!=0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(let t=0;t<e;t+=8)m(this,t,t+7),m(this,t+1,t+6),m(this,t+2,t+5),m(this,t+3,t+4);return this},a.prototype.toString=function(){const e=this.length;return 0===e?"":0===arguments.length?k(this,0,e):f.apply(this,arguments)},a.prototype.toLocaleString=a.prototype.toString,a.prototype.equals=function(e){if(!a.isBuffer(e))throw new TypeError("Argument must be a Buffer");return this===e||0===a.compare(this,e)},a.prototype.inspect=function(){let t="";const r=e.INSPECT_MAX_BYTES;return t=this.toString("hex",0,r).replace(/(.{2})/g,"$1 ").trim(),this.length>r&&(t+=" ... "),"<Buffer "+t+">"},n&&(a.prototype[n]=a.prototype.inspect),a.prototype.compare=function(e,t,r,n,o){if(G(e,Uint8Array)&&(e=a.from(e,e.offset,e.byteLength)),!a.isBuffer(e))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof e);if(void 0===t&&(t=0),void 0===r&&(r=e?e.length:0),void 0===n&&(n=0),void 0===o&&(o=this.length),t<0||r>e.length||n<0||o>this.length)throw new RangeError("out of range index");if(n>=o&&t>=r)return 0;if(n>=o)return-1;if(t>=r)return 1;if(this===e)return 0;let i=(o>>>=0)-(n>>>=0),s=(r>>>=0)-(t>>>=0);const l=Math.min(i,s),c=this.slice(n,o),p=e.slice(t,r);for(let e=0;e<l;++e)if(c[e]!==p[e]){i=c[e],s=p[e];break}return i<s?-1:s<i?1:0},a.prototype.includes=function(e,t,r){return-1!==this.indexOf(e,t,r)},a.prototype.indexOf=function(e,t,r){return y(this,e,t,r,!0)},a.prototype.lastIndexOf=function(e,t,r){return y(this,e,t,r,!1)},a.prototype.write=function(e,t,r,n){if(void 0===t)n="utf8",r=this.length,t=0;else if(void 0===r&&"string"==typeof t)n=t,r=this.length,t=0;else{if(!isFinite(t))throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");t>>>=0,isFinite(r)?(r>>>=0,void 0===n&&(n="utf8")):(n=r,r=void 0)}const o=this.length-t;if((void 0===r||r>o)&&(r=o),e.length>0&&(r<0||t<0)||t>this.length)throw new RangeError("Attempt to write outside buffer bounds");n||(n="utf8");let i=!1;for(;;)switch(n){case"hex":return v(this,e,t,r);case"utf8":case"utf-8":return b(this,e,t,r);case"ascii":case"latin1":case"binary":return x(this,e,t,r);case"base64":return w(this,e,t,r);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return $(this,e,t,r);default:if(i)throw new TypeError("Unknown encoding: "+n);n=(""+n).toLowerCase(),i=!0}},a.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};const S=4096;function E(e,t,r){let n="";r=Math.min(e.length,r);for(let o=t;o<r;++o)n+=String.fromCharCode(127&e[o]);return n}function D(e,t,r){let n="";r=Math.min(e.length,r);for(let o=t;o<r;++o)n+=String.fromCharCode(e[o]);return n}function O(e,t,r){const n=e.length;(!t||t<0)&&(t=0),(!r||r<0||r>n)&&(r=n);let o="";for(let n=t;n<r;++n)o+=Y[e[n]];return o}function C(e,t,r){const n=e.slice(t,r);let o="";for(let e=0;e<n.length-1;e+=2)o+=String.fromCharCode(n[e]+256*n[e+1]);return o}function j(e,t,r){if(e%1!=0||e<0)throw new RangeError("offset is not uint");if(e+t>r)throw new RangeError("Trying to access beyond buffer length")}function T(e,t,r,n,o,i){if(!a.isBuffer(e))throw new TypeError('"buffer" argument must be a Buffer instance');if(t>o||t<i)throw new RangeError('"value" argument is out of bounds');if(r+n>e.length)throw new RangeError("Index out of range")}function _(e,t,r,n,o){N(t,n,o,e,r,7);let i=Number(t&BigInt(4294967295));e[r++]=i,i>>=8,e[r++]=i,i>>=8,e[r++]=i,i>>=8,e[r++]=i;let a=Number(t>>BigInt(32)&BigInt(4294967295));return e[r++]=a,a>>=8,e[r++]=a,a>>=8,e[r++]=a,a>>=8,e[r++]=a,r}function F(e,t,r,n,o){N(t,n,o,e,r,7);let i=Number(t&BigInt(4294967295));e[r+7]=i,i>>=8,e[r+6]=i,i>>=8,e[r+5]=i,i>>=8,e[r+4]=i;let a=Number(t>>BigInt(32)&BigInt(4294967295));return e[r+3]=a,a>>=8,e[r+2]=a,a>>=8,e[r+1]=a,a>>=8,e[r]=a,r+8}function B(e,t,r,n,o,i){if(r+n>e.length)throw new RangeError("Index out of range");if(r<0)throw new RangeError("Index out of range")}function I(e,t,n,o,i){return t=+t,n>>>=0,i||B(e,0,n,4),r.write(e,t,n,o,23,4),n+4}function P(e,t,n,o,i){return t=+t,n>>>=0,i||B(e,0,n,8),r.write(e,t,n,o,52,8),n+8}a.prototype.slice=function(e,t){const r=this.length;(e=~~e)<0?(e+=r)<0&&(e=0):e>r&&(e=r),(t=void 0===t?r:~~t)<0?(t+=r)<0&&(t=0):t>r&&(t=r),t<e&&(t=e);const n=this.subarray(e,t);return Object.setPrototypeOf(n,a.prototype),n},a.prototype.readUintLE=a.prototype.readUIntLE=function(e,t,r){e>>>=0,t>>>=0,r||j(e,t,this.length);let n=this[e],o=1,i=0;for(;++i<t&&(o*=256);)n+=this[e+i]*o;return n},a.prototype.readUintBE=a.prototype.readUIntBE=function(e,t,r){e>>>=0,t>>>=0,r||j(e,t,this.length);let n=this[e+--t],o=1;for(;t>0&&(o*=256);)n+=this[e+--t]*o;return n},a.prototype.readUint8=a.prototype.readUInt8=function(e,t){return e>>>=0,t||j(e,1,this.length),this[e]},a.prototype.readUint16LE=a.prototype.readUInt16LE=function(e,t){return e>>>=0,t||j(e,2,this.length),this[e]|this[e+1]<<8},a.prototype.readUint16BE=a.prototype.readUInt16BE=function(e,t){return e>>>=0,t||j(e,2,this.length),this[e]<<8|this[e+1]},a.prototype.readUint32LE=a.prototype.readUInt32LE=function(e,t){return e>>>=0,t||j(e,4,this.length),(this[e]|this[e+1]<<8|this[e+2]<<16)+16777216*this[e+3]},a.prototype.readUint32BE=a.prototype.readUInt32BE=function(e,t){return e>>>=0,t||j(e,4,this.length),16777216*this[e]+(this[e+1]<<16|this[e+2]<<8|this[e+3])},a.prototype.readBigUInt64LE=J((function(e){z(e>>>=0,"offset");const t=this[e],r=this[e+7];void 0!==t&&void 0!==r||q(e,this.length-8);const n=t+256*this[++e]+65536*this[++e]+this[++e]*2**24,o=this[++e]+256*this[++e]+65536*this[++e]+r*2**24;return BigInt(n)+(BigInt(o)<<BigInt(32))})),a.prototype.readBigUInt64BE=J((function(e){z(e>>>=0,"offset");const t=this[e],r=this[e+7];void 0!==t&&void 0!==r||q(e,this.length-8);const n=t*2**24+65536*this[++e]+256*this[++e]+this[++e],o=this[++e]*2**24+65536*this[++e]+256*this[++e]+r;return(BigInt(n)<<BigInt(32))+BigInt(o)})),a.prototype.readIntLE=function(e,t,r){e>>>=0,t>>>=0,r||j(e,t,this.length);let n=this[e],o=1,i=0;for(;++i<t&&(o*=256);)n+=this[e+i]*o;return o*=128,n>=o&&(n-=Math.pow(2,8*t)),n},a.prototype.readIntBE=function(e,t,r){e>>>=0,t>>>=0,r||j(e,t,this.length);let n=t,o=1,i=this[e+--n];for(;n>0&&(o*=256);)i+=this[e+--n]*o;return o*=128,i>=o&&(i-=Math.pow(2,8*t)),i},a.prototype.readInt8=function(e,t){return e>>>=0,t||j(e,1,this.length),128&this[e]?-1*(255-this[e]+1):this[e]},a.prototype.readInt16LE=function(e,t){e>>>=0,t||j(e,2,this.length);const r=this[e]|this[e+1]<<8;return 32768&r?4294901760|r:r},a.prototype.readInt16BE=function(e,t){e>>>=0,t||j(e,2,this.length);const r=this[e+1]|this[e]<<8;return 32768&r?4294901760|r:r},a.prototype.readInt32LE=function(e,t){return e>>>=0,t||j(e,4,this.length),this[e]|this[e+1]<<8|this[e+2]<<16|this[e+3]<<24},a.prototype.readInt32BE=function(e,t){return e>>>=0,t||j(e,4,this.length),this[e]<<24|this[e+1]<<16|this[e+2]<<8|this[e+3]},a.prototype.readBigInt64LE=J((function(e){z(e>>>=0,"offset");const t=this[e],r=this[e+7];void 0!==t&&void 0!==r||q(e,this.length-8);const n=this[e+4]+256*this[e+5]+65536*this[e+6]+(r<<24);return(BigInt(n)<<BigInt(32))+BigInt(t+256*this[++e]+65536*this[++e]+this[++e]*2**24)})),a.prototype.readBigInt64BE=J((function(e){z(e>>>=0,"offset");const t=this[e],r=this[e+7];void 0!==t&&void 0!==r||q(e,this.length-8);const n=(t<<24)+65536*this[++e]+256*this[++e]+this[++e];return(BigInt(n)<<BigInt(32))+BigInt(this[++e]*2**24+65536*this[++e]+256*this[++e]+r)})),a.prototype.readFloatLE=function(e,t){return e>>>=0,t||j(e,4,this.length),r.read(this,e,!0,23,4)},a.prototype.readFloatBE=function(e,t){return e>>>=0,t||j(e,4,this.length),r.read(this,e,!1,23,4)},a.prototype.readDoubleLE=function(e,t){return e>>>=0,t||j(e,8,this.length),r.read(this,e,!0,52,8)},a.prototype.readDoubleBE=function(e,t){return e>>>=0,t||j(e,8,this.length),r.read(this,e,!1,52,8)},a.prototype.writeUintLE=a.prototype.writeUIntLE=function(e,t,r,n){e=+e,t>>>=0,r>>>=0,n||T(this,e,t,r,Math.pow(2,8*r)-1,0);let o=1,i=0;for(this[t]=255&e;++i<r&&(o*=256);)this[t+i]=e/o&255;return t+r},a.prototype.writeUintBE=a.prototype.writeUIntBE=function(e,t,r,n){e=+e,t>>>=0,r>>>=0,n||T(this,e,t,r,Math.pow(2,8*r)-1,0);let o=r-1,i=1;for(this[t+o]=255&e;--o>=0&&(i*=256);)this[t+o]=e/i&255;return t+r},a.prototype.writeUint8=a.prototype.writeUInt8=function(e,t,r){return e=+e,t>>>=0,r||T(this,e,t,1,255,0),this[t]=255&e,t+1},a.prototype.writeUint16LE=a.prototype.writeUInt16LE=function(e,t,r){return e=+e,t>>>=0,r||T(this,e,t,2,65535,0),this[t]=255&e,this[t+1]=e>>>8,t+2},a.prototype.writeUint16BE=a.prototype.writeUInt16BE=function(e,t,r){return e=+e,t>>>=0,r||T(this,e,t,2,65535,0),this[t]=e>>>8,this[t+1]=255&e,t+2},a.prototype.writeUint32LE=a.prototype.writeUInt32LE=function(e,t,r){return e=+e,t>>>=0,r||T(this,e,t,4,4294967295,0),this[t+3]=e>>>24,this[t+2]=e>>>16,this[t+1]=e>>>8,this[t]=255&e,t+4},a.prototype.writeUint32BE=a.prototype.writeUInt32BE=function(e,t,r){return e=+e,t>>>=0,r||T(this,e,t,4,4294967295,0),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=255&e,t+4},a.prototype.writeBigUInt64LE=J((function(e,t=0){return _(this,e,t,BigInt(0),BigInt("0xffffffffffffffff"))})),a.prototype.writeBigUInt64BE=J((function(e,t=0){return F(this,e,t,BigInt(0),BigInt("0xffffffffffffffff"))})),a.prototype.writeIntLE=function(e,t,r,n){if(e=+e,t>>>=0,!n){const n=Math.pow(2,8*r-1);T(this,e,t,r,n-1,-n)}let o=0,i=1,a=0;for(this[t]=255&e;++o<r&&(i*=256);)e<0&&0===a&&0!==this[t+o-1]&&(a=1),this[t+o]=(e/i>>0)-a&255;return t+r},a.prototype.writeIntBE=function(e,t,r,n){if(e=+e,t>>>=0,!n){const n=Math.pow(2,8*r-1);T(this,e,t,r,n-1,-n)}let o=r-1,i=1,a=0;for(this[t+o]=255&e;--o>=0&&(i*=256);)e<0&&0===a&&0!==this[t+o+1]&&(a=1),this[t+o]=(e/i>>0)-a&255;return t+r},a.prototype.writeInt8=function(e,t,r){return e=+e,t>>>=0,r||T(this,e,t,1,127,-128),e<0&&(e=255+e+1),this[t]=255&e,t+1},a.prototype.writeInt16LE=function(e,t,r){return e=+e,t>>>=0,r||T(this,e,t,2,32767,-32768),this[t]=255&e,this[t+1]=e>>>8,t+2},a.prototype.writeInt16BE=function(e,t,r){return e=+e,t>>>=0,r||T(this,e,t,2,32767,-32768),this[t]=e>>>8,this[t+1]=255&e,t+2},a.prototype.writeInt32LE=function(e,t,r){return e=+e,t>>>=0,r||T(this,e,t,4,2147483647,-2147483648),this[t]=255&e,this[t+1]=e>>>8,this[t+2]=e>>>16,this[t+3]=e>>>24,t+4},a.prototype.writeInt32BE=function(e,t,r){return e=+e,t>>>=0,r||T(this,e,t,4,2147483647,-2147483648),e<0&&(e=4294967295+e+1),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=255&e,t+4},a.prototype.writeBigInt64LE=J((function(e,t=0){return _(this,e,t,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))})),a.prototype.writeBigInt64BE=J((function(e,t=0){return F(this,e,t,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))})),a.prototype.writeFloatLE=function(e,t,r){return I(this,e,t,!0,r)},a.prototype.writeFloatBE=function(e,t,r){return I(this,e,t,!1,r)},a.prototype.writeDoubleLE=function(e,t,r){return P(this,e,t,!0,r)},a.prototype.writeDoubleBE=function(e,t,r){return P(this,e,t,!1,r)},a.prototype.copy=function(e,t,r,n){if(!a.isBuffer(e))throw new TypeError("argument should be a Buffer");if(r||(r=0),n||0===n||(n=this.length),t>=e.length&&(t=e.length),t||(t=0),n>0&&n<r&&(n=r),n===r)return 0;if(0===e.length||0===this.length)return 0;if(t<0)throw new RangeError("targetStart out of bounds");if(r<0||r>=this.length)throw new RangeError("Index out of range");if(n<0)throw new RangeError("sourceEnd out of bounds");n>this.length&&(n=this.length),e.length-t<n-r&&(n=e.length-t+r);const o=n-r;return this===e&&"function"==typeof Uint8Array.prototype.copyWithin?this.copyWithin(t,r,n):Uint8Array.prototype.set.call(e,this.subarray(r,n),t),o},a.prototype.fill=function(e,t,r,n){if("string"==typeof e){if("string"==typeof t?(n=t,t=0,r=this.length):"string"==typeof r&&(n=r,r=this.length),void 0!==n&&"string"!=typeof n)throw new TypeError("encoding must be a string");if("string"==typeof n&&!a.isEncoding(n))throw new TypeError("Unknown encoding: "+n);if(1===e.length){const t=e.charCodeAt(0);("utf8"===n&&t<128||"latin1"===n)&&(e=t)}}else"number"==typeof e?e&=255:"boolean"==typeof e&&(e=Number(e));if(t<0||this.length<t||this.length<r)throw new RangeError("Out of range index");if(r<=t)return this;let o;if(t>>>=0,r=void 0===r?this.length:r>>>0,e||(e=0),"number"==typeof e)for(o=t;o<r;++o)this[o]=e;else{const i=a.isBuffer(e)?e:a.from(e,n),s=i.length;if(0===s)throw new TypeError('The value "'+e+'" is invalid for argument "value"');for(o=0;o<r-t;++o)this[o+t]=i[o%s]}return this};const R={};function U(e,t,r){R[e]=class extends r{constructor(){super(),Object.defineProperty(this,"message",{value:t.apply(this,arguments),writable:!0,configurable:!0}),this.name=`${this.name} [${e}]`,this.stack,delete this.name}get code(){return e}set code(e){Object.defineProperty(this,"code",{configurable:!0,enumerable:!0,value:e,writable:!0})}toString(){return`${this.name} [${e}]: ${this.message}`}}}function L(e){let t="",r=e.length;const n="-"===e[0]?1:0;for(;r>=n+4;r-=3)t=`_${e.slice(r-3,r)}${t}`;return`${e.slice(0,r)}${t}`}function N(e,t,r,n,o,i){if(e>r||e<t){const n="bigint"==typeof t?"n":"";let o;throw o=i>3?0===t||t===BigInt(0)?`>= 0${n} and < 2${n} ** ${8*(i+1)}${n}`:`>= -(2${n} ** ${8*(i+1)-1}${n}) and < 2 ** ${8*(i+1)-1}${n}`:`>= ${t}${n} and <= ${r}${n}`,new R.ERR_OUT_OF_RANGE("value",o,e)}!function(e,t,r){z(t,"offset"),void 0!==e[t]&&void 0!==e[t+r]||q(t,e.length-(r+1))}(n,o,i)}function z(e,t){if("number"!=typeof e)throw new R.ERR_INVALID_ARG_TYPE(t,"number",e)}function q(e,t,r){if(Math.floor(e)!==e)throw z(e,r),new R.ERR_OUT_OF_RANGE(r||"offset","an integer",e);if(t<0)throw new R.ERR_BUFFER_OUT_OF_BOUNDS;throw new R.ERR_OUT_OF_RANGE(r||"offset",`>= ${r?1:0} and <= ${t}`,e)}U("ERR_BUFFER_OUT_OF_BOUNDS",(function(e){return e?`${e} is outside of buffer bounds`:"Attempt to access memory outside buffer bounds"}),RangeError),U("ERR_INVALID_ARG_TYPE",(function(e,t){return`The "${e}" argument must be of type number. Received type ${typeof t}`}),TypeError),U("ERR_OUT_OF_RANGE",(function(e,t,r){let n=`The value of "${e}" is out of range.`,o=r;return Number.isInteger(r)&&Math.abs(r)>2**32?o=L(String(r)):"bigint"==typeof r&&(o=String(r),(r>BigInt(2)**BigInt(32)||r<-(BigInt(2)**BigInt(32)))&&(o=L(o)),o+="n"),n+=` It must be ${t}. Received ${o}`,n}),RangeError);const M=/[^+/0-9A-Za-z-_]/g;function H(e,t){let r;t=t||1/0;const n=e.length;let o=null;const i=[];for(let a=0;a<n;++a){if(r=e.charCodeAt(a),r>55295&&r<57344){if(!o){if(r>56319){(t-=3)>-1&&i.push(239,191,189);continue}if(a+1===n){(t-=3)>-1&&i.push(239,191,189);continue}o=r;continue}if(r<56320){(t-=3)>-1&&i.push(239,191,189),o=r;continue}r=65536+(o-55296<<10|r-56320)}else o&&(t-=3)>-1&&i.push(239,191,189);if(o=null,r<128){if((t-=1)<0)break;i.push(r)}else if(r<2048){if((t-=2)<0)break;i.push(r>>6|192,63&r|128)}else if(r<65536){if((t-=3)<0)break;i.push(r>>12|224,r>>6&63|128,63&r|128)}else{if(!(r<1114112))throw new Error("Invalid code point");if((t-=4)<0)break;i.push(r>>18|240,r>>12&63|128,r>>6&63|128,63&r|128)}}return i}function W(e){return t.toByteArray(function(e){if((e=(e=e.split("=")[0]).trim().replace(M,"")).length<2)return"";for(;e.length%4!=0;)e+="=";return e}(e))}function V(e,t,r,n){let o;for(o=0;o<n&&!(o+r>=t.length||o>=e.length);++o)t[o+r]=e[o];return o}function G(e,t){return e instanceof t||null!=e&&null!=e.constructor&&null!=e.constructor.name&&e.constructor.name===t.name}function K(e){return e!=e}const Y=function(){const e="0123456789abcdef",t=new Array(256);for(let r=0;r<16;++r){const n=16*r;for(let o=0;o<16;++o)t[n+o]=e[r]+e[o]}return t}();function J(e){return"undefined"==typeof BigInt?Z:e}function Z(){throw new Error("BigInt not supported")}}(zc);var Qc={};Object.defineProperty(Qc,"__esModule",{value:!0}),Qc.File=Qc.Blob=Qc.FormData=void 0;const Xc="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:window;Qc.FormData=Xc.FormData,Qc.Blob=Xc.Blob,Qc.File=Xc.File;var ep={__esModule:!0};ep.encodeDisallowedCharacters=rp,ep.default=function(e){const{value:t}=e;return Array.isArray(t)?function({key:e,value:t,style:r,explode:n,escape:o}){const i=e=>rp(e,{escape:o});if("simple"===r)return t.map((e=>i(e))).join(",");if("label"===r)return`.${t.map((e=>i(e))).join(".")}`;if("matrix"===r)return t.map((e=>i(e))).reduce(((t,r)=>!t||n?`${t||""};${e}=${r}`:`${t},${r}`),"");if("form"===r){const r=n?`&${e}=`:",";return t.map((e=>i(e))).join(r)}if("spaceDelimited"===r){const r=n?`${e}=`:"";return t.map((e=>i(e))).join(` ${r}`)}if("pipeDelimited"===r){const r=n?`${e}=`:"";return t.map((e=>i(e))).join(`|${r}`)}}(e):"object"==typeof t?function({key:e,value:t,style:r,explode:n,escape:o}){const i=e=>rp(e,{escape:o}),a=Object.keys(t);return"simple"===r?a.reduce(((e,r)=>{const o=i(t[r]);return`${e?`${e},`:""}${r}${n?"=":","}${o}`}),""):"label"===r?a.reduce(((e,r)=>{const o=i(t[r]);return`${e?`${e}.`:"."}${r}${n?"=":"."}${o}`}),""):"matrix"===r&&n?a.reduce(((e,r)=>`${e?`${e};`:";"}${r}=${i(t[r])}`),""):"matrix"===r?a.reduce(((r,n)=>{const o=i(t[n]);return`${r?`${r},`:`;${e}=`}${n},${o}`}),""):"form"===r?a.reduce(((e,r)=>{const o=i(t[r]);return`${e?`${e}${n?"&":","}`:""}${r}${n?"=":","}${o}`}),""):void 0}(e):function({key:e,value:t,style:r,escape:n}){const o=e=>rp(e,{escape:n});return"simple"===r?o(t):"label"===r?`.${o(t)}`:"matrix"===r?`;${e}=${o(t)}`:"form"===r||"deepObject"===r?o(t):void 0}(e)};const{Buffer:tp}=zc;function rp(e,{escape:t}={},r){return"number"==typeof e&&(e=e.toString()),"string"==typeof e&&e.length&&t?r?JSON.parse(e):[...e].map((e=>(e=>/^[a-z0-9\-._~]+$/i.test(e))(e)||(e=>":/?#[]@!$&'()*+,;=".indexOf(e)>-1)(e)&&"unsafe"===t?e:(tp.from(e).toJSON().data||[]).map((e=>`0${e.toString(16).toUpperCase()}`.slice(-2))).map((e=>`%${e}`)).join(""))).join(""):e}var np={__esModule:!0,default:void 0};np.default=(e,t)=>{t.body=e},qn.__esModule=!0,qn.default=async function(e,t={}){"object"==typeof e&&(e=(t=e).url),t.headers=t.headers||{},hp.mergeInQueryOrForm(t),t.headers&&Object.keys(t.headers).forEach((e=>{const r=t.headers[e];"string"==typeof r&&(t.headers[e]=r.replace(/\n+/g," "))})),t.requestInterceptor&&(t=await t.requestInterceptor(t)||t);const r=t.headers["content-type"]||t.headers["Content-Type"];let n;/multipart\/form-data/i.test(r)&&t.body instanceof cp.FormData&&(delete t.headers["content-type"],delete t.headers["Content-Type"]);try{n=await(t.userFetch||fetch)(t.url,t),n=await hp.serializeRes(n,e,t),t.responseInterceptor&&(n=await t.responseInterceptor(n)||n)}catch(e){if(!n)throw e;const t=new Error(n.statusText||`response status is ${n.status}`);throw t.status=n.status,t.statusCode=n.status,t.responseError=e,t}if(!n.ok){const e=new Error(n.statusText||`response status is ${n.status}`);throw e.status=n.status,e.statusCode=n.status,e.response=n,e}return n},qn.serializeRes=mp,qn.serializeHeaders=yp,qn.isFile=gp,qn.encodeFormOrQuery=Ap,qn.mergeInQueryOrForm=kp,qn.makeHttp=function(e,t,r){return r=r||(e=>e),t=t||(e=>e),n=>("string"==typeof n&&(n={url:n}),hp.mergeInQueryOrForm(n),n=t(n),r(e(n)))},qn.shouldDownloadAsText=qn.self=void 0;var op=dp(Yi),ip=dp(Ji),ap=dp(Nc),sp=dp(Ze),lp=zc,cp=Qc,pp=ep,up=dp(np);function dp(e){return e&&e.__esModule?e:{default:e}}const hp={serializeRes:mp,mergeInQueryOrForm:kp};qn.self=hp;const fp=(e="")=>/(json|xml|yaml|text)\b/.test(e);function mp(e,t,{loadSpec:r=!1}={}){const n={ok:e.ok,url:e.url||t,status:e.status,statusText:e.statusText,headers:yp(e.headers)},o=n.headers["content-type"],i=r||fp(o);return(i?e.text:e.blob||e.buffer).call(e).then((e=>{if(n.text=e,n.data=e,i)try{const t=function(e,t){return t&&(0===t.indexOf("application/json")||t.indexOf("+json")>0)?JSON.parse(e):ip.default.load(e)}(e,o);n.body=t,n.obj=t}catch(e){n.parseError=e}return n}))}function yp(e={}){return(0,sp.default)(e.entries)?Array.from(e.entries()).reduce(((e,[t,r])=>(e[t]=function(e){return e.includes(", ")?e.split(", "):e}(r),e)),{}):{}}function gp(e,t){return t||"undefined"==typeof navigator||(t=navigator),t&&"ReactNative"===t.product?!(!e||"object"!=typeof e||"string"!=typeof e.uri):void 0!==cp.File&&e instanceof cp.File||void 0!==cp.Blob&&e instanceof cp.Blob||!!lp.Buffer.isBuffer(e)||null!==e&&"object"==typeof e&&"function"==typeof e.pipe}function vp(e,t){return Array.isArray(e)&&e.some((e=>gp(e,t)))}qn.shouldDownloadAsText=fp;const bp={form:",",spaceDelimited:"%20",pipeDelimited:"|"},xp={csv:",",ssv:"%20",tsv:"%09",pipes:"|"};function wp(e,t,r=!1){const{collectionFormat:n,allowEmptyValue:o,serializationOption:i,encoding:a}=t,s="object"!=typeof t||Array.isArray(t)?t:t.value,l=r?e=>e.toString():e=>encodeURIComponent(e),c=l(e);return void 0===s&&o?[[c,""]]:gp(s)||vp(s)?[[c,s]]:i?$p(e,s,r,i):a?[typeof a.style,typeof a.explode,typeof a.allowReserved].some((e=>"undefined"!==e))?$p(e,s,r,(0,ap.default)(a,["style","explode","allowReserved"])):a.contentType?"application/json"===a.contentType?[[c,l("string"==typeof s?s:JSON.stringify(s))]]:[[c,l(s.toString())]]:"object"!=typeof s?[[c,l(s)]]:Array.isArray(s)&&s.every((e=>"object"!=typeof e))?[[c,s.map(l).join(",")]]:[[c,l(JSON.stringify(s))]]:"object"!=typeof s?[[c,l(s)]]:Array.isArray(s)?"multi"===n?[[c,s.map(l)]]:[[c,s.map(l).join(xp[n||"csv"])]]:[[c,""]]}function $p(e,t,r,n){const o=n.style||"form",i=void 0===n.explode?"form"===o:n.explode,a=!r&&(n&&n.allowReserved?"unsafe":"reserved"),s=e=>(0,pp.encodeDisallowedCharacters)(e,{escape:a}),l=r?e=>e:e=>(0,pp.encodeDisallowedCharacters)(e,{escape:a});return"object"!=typeof t?[[l(e),s(t)]]:Array.isArray(t)?i?[[l(e),t.map(s)]]:[[l(e),t.map(s).join(bp[o])]]:"deepObject"===o?Object.keys(t).map((r=>[l(`${e}[${r}]`),s(t[r])])):i?Object.keys(t).map((e=>[l(e),s(t[e])])):[[l(e),Object.keys(t).map((e=>[`${l(e)},${s(t[e])}`])).join(",")]]}function Ap(e){const t=Object.keys(e).reduce(((t,r)=>{for(const[n,o]of wp(r,e[r]))t[n]=o;return t}),{});return op.default.stringify(t,{encode:!1,indices:!1})||""}function kp(e={}){const{url:t="",query:r,form:n}=e;if(n){const t=Object.keys(n).some((e=>{const{value:t}=n[e];return gp(t)||vp(t)})),r=e.headers["content-type"]||e.headers["Content-Type"];if(t||/multipart\/form-data/i.test(r)){const t=(o=e.form,Object.entries(o).reduce(((e,[t,r])=>{for(const[n,o]of wp(t,r,!0))if(Array.isArray(o))for(const t of o)if(lp.Buffer.isBuffer(t)){const r=new cp.Blob([t]);e.append(n,r)}else e.append(n,t);else if(lp.Buffer.isBuffer(o)){const t=new cp.Blob([o]);e.append(n,t)}else e.append(n,o);return e}),new cp.FormData));(0,up.default)(t,e)}else e.body=Ap(n);delete e.form}var o;if(r){const[n,o]=t.split("?");let i="";if(o){const e=op.default.parse(o);Object.keys(r).forEach((t=>delete e[t])),i=op.default.stringify(e,{encode:!0})}const a=((...e)=>{const t=e.filter((e=>e)).join("&");return t?`?${t}`:""})(i,Ap(r));e.url=n+a,delete e.query}return e}var Sp={},Ep={},Dp=Ul,Op=Ul,Cp=Ll,jp=Yl,Tp=Ul;function _p(e){var t=this.__data__=new Tp(e);this.size=t.size}_p.prototype.clear=function(){this.__data__=new Dp,this.size=0},_p.prototype.delete=function(e){var t=this.__data__,r=t.delete(e);return this.size=t.size,r},_p.prototype.get=function(e){return this.__data__.get(e)},_p.prototype.has=function(e){return this.__data__.has(e)},_p.prototype.set=function(e,t){var r=this.__data__;if(r instanceof Op){var n=r.__data__;if(!Cp||n.length<199)return n.push([e,t]),this.size=++r.size,this;r=this.__data__=new jp(n)}return r.set(e,t),this.size=r.size,this};var Fp=_p,Bp=Yl;function Ip(e){var t=-1,r=null==e?0:e.length;for(this.__data__=new Bp;++t<r;)this.add(e[t])}Ip.prototype.add=Ip.prototype.push=function(e){return this.__data__.set(e,"__lodash_hash_undefined__"),this},Ip.prototype.has=function(e){return this.__data__.has(e)};var Pp=Ip,Rp=function(e,t){for(var r=-1,n=null==e?0:e.length;++r<n;)if(t(e[r],r,e))return!0;return!1},Up=function(e,t){return e.has(t)},Lp=function(e,t,r,n,o,i){var a=1&r,s=e.length,l=t.length;if(s!=l&&!(a&&l>s))return!1;var c=i.get(e),p=i.get(t);if(c&&p)return c==t&&p==e;var u=-1,d=!0,h=2&r?new Pp:void 0;for(i.set(e,t),i.set(t,e);++u<s;){var f=e[u],m=t[u];if(n)var y=a?n(m,f,u,t,e,i):n(f,m,u,e,t,i);if(void 0!==y){if(y)continue;d=!1;break}if(h){if(!Rp(t,(function(e,t){if(!Up(h,t)&&(f===e||o(f,e,r,n,i)))return h.push(t)}))){d=!1;break}}else if(f!==m&&!o(f,m,r,n,i)){d=!1;break}}return i.delete(e),i.delete(t),d},Np=Re.Uint8Array,zp=Np,qp=gt,Mp=Lp,Hp=function(e){var t=-1,r=Array(e.size);return e.forEach((function(e,n){r[++t]=[n,e]})),r},Wp=function(e){var t=-1,r=Array(e.size);return e.forEach((function(e){r[++t]=e})),r},Vp=Ue?Ue.prototype:void 0,Gp=Vp?Vp.valueOf:void 0,Kp=Cc,Yp=or,Jp=function(e,t,r){var n=t(e);return Yp(e)?n:Kp(n,r(e))},Zp=function(){return[]},Qp=Zp,Xp=Object.prototype.propertyIsEnumerable,eu=Object.getOwnPropertySymbols,tu=eu?function(e){return null==e?[]:(e=Object(e),function(e,t){for(var r=-1,n=null==e?0:e.length,o=0,i=[];++r<n;){var a=e[r];t(a,r,e)&&(i[o++]=a)}return i}(eu(e),(function(t){return Xp.call(e,t)})))}:Qp,ru=Jp,nu=tu,ou=Br,iu=function(e){return ru(e,ou,nu)},au=iu,su=Object.prototype.hasOwnProperty,lu=dt(Re,"DataView"),cu=Ll,pu=dt(Re,"Promise"),uu=dt(Re,"Set"),du=dt(Re,"WeakMap"),hu=Ge,fu=tt,mu=fu(lu),yu=fu(cu),gu=fu(pu),vu=fu(uu),bu=fu(du),xu=hu;(lu&&"[object DataView]"!=xu(new lu(new ArrayBuffer(1)))||cu&&"[object Map]"!=xu(new cu)||pu&&"[object Promise]"!=xu(pu.resolve())||uu&&"[object Set]"!=xu(new uu)||du&&"[object WeakMap]"!=xu(new du))&&(xu=function(e){var t=hu(e),r="[object Object]"==t?e.constructor:void 0,n=r?fu(r):"";if(n)switch(n){case mu:return"[object DataView]";case yu:return"[object Map]";case gu:return"[object Promise]";case vu:return"[object Set]";case bu:return"[object WeakMap]"}return t});var wu,$u=xu,Au=Fp,ku=Lp,Su=function(e,t,r,n,o,i,a){switch(r){case"[object DataView]":if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)return!1;e=e.buffer,t=t.buffer;case"[object ArrayBuffer]":return!(e.byteLength!=t.byteLength||!i(new zp(e),new zp(t)));case"[object Boolean]":case"[object Date]":case"[object Number]":return qp(+e,+t);case"[object Error]":return e.name==t.name&&e.message==t.message;case"[object RegExp]":case"[object String]":return e==t+"";case"[object Map]":var s=Hp;case"[object Set]":var l=1&n;if(s||(s=Wp),e.size!=t.size&&!l)return!1;var c=a.get(e);if(c)return c==t;n|=2,a.set(e,t);var p=Mp(s(e),s(t),n,o,i,a);return a.delete(e),p;case"[object Symbol]":if(Gp)return Gp.call(e)==Gp.call(t)}return!1},Eu=function(e,t,r,n,o,i){var a=1&r,s=au(e),l=s.length;if(l!=au(t).length&&!a)return!1;for(var c=l;c--;){var p=s[c];if(!(a?p in t:su.call(t,p)))return!1}var u=i.get(e),d=i.get(t);if(u&&d)return u==t&&d==e;var h=!0;i.set(e,t),i.set(t,e);for(var f=a;++c<l;){var m=e[p=s[c]],y=t[p];if(n)var g=a?n(y,m,p,t,e,i):n(m,y,p,e,t,i);if(!(void 0===g?m===y||o(m,y,r,n,i):g)){h=!1;break}f||(f="constructor"==p)}if(h&&!f){var v=e.constructor,b=t.constructor;v==b||!("constructor"in e)||!("constructor"in t)||"function"==typeof v&&v instanceof v&&"function"==typeof b&&b instanceof b||(h=!1)}return i.delete(e),i.delete(t),h},Du=$u,Ou=or,Cu=ir.exports,ju=yr,Tu=Object.prototype.hasOwnProperty,_u=Yt,Fu=function e(t,r,n,o,i){return t===r||(null==t||null==r||!_u(t)&&!_u(r)?t!=t&&r!=r:function(e,t,r,n,o,i){var a=Ou(e),s=Ou(t),l=a?"[object Array]":Du(e),c=s?"[object Array]":Du(t),p="[object Object]"==(l="[object Arguments]"==l?"[object Object]":l),u="[object Object]"==(c="[object Arguments]"==c?"[object Object]":c),d=l==c;if(d&&Cu(e)){if(!Cu(t))return!1;a=!0,p=!1}if(d&&!p)return i||(i=new Au),a||ju(e)?ku(e,t,r,n,o,i):Su(e,t,l,r,n,o,i);if(!(1&r)){var h=p&&Tu.call(e,"__wrapped__"),f=u&&Tu.call(t,"__wrapped__");if(h||f){var m=h?e.value():e,y=f?t.value():t;return i||(i=new Au),o(m,y,r,n,i)}}return!!d&&(i||(i=new Au),Eu(e,t,r,n,o,i))}(t,r,n,o,e,i))},Bu=Fp,Iu=Fu,Pu=Ke,Ru=function(e){return e==e&&!Pu(e)},Uu=Ru,Lu=Br,Nu=function(e,t){return function(r){return null!=r&&r[e]===t&&(void 0!==t||e in Object(r))}},zu=Nu,qu=uc,Mu=function(e,t,r){var n=null==e?void 0:qu(e,t);return void 0===n?r:n},Hu=Fu,Wu=Mu,Vu=Dc,Gu=yl,Ku=Ru,Yu=Nu,Ju=lc,Zu=uc,Qu=yl,Xu=lc,ed=function(e){var t=function(e){for(var t=Lu(e),r=t.length;r--;){var n=t[r],o=e[n];t[r]=[n,o,Uu(o)]}return t}(e);return 1==t.length&&t[0][2]?zu(t[0][0],t[0][1]):function(r){return r===e||function(e,t,r,n){var o=r.length,i=o,a=!n;if(null==e)return!i;for(e=Object(e);o--;){var s=r[o];if(a&&s[2]?s[1]!==e[s[0]]:!(s[0]in e))return!1}for(;++o<i;){var l=(s=r[o])[0],c=e[l],p=s[1];if(a&&s[2]){if(void 0===c&&!(l in e))return!1}else{var u=new Bu;if(n)var d=n(c,p,l,e,t,u);if(!(void 0===d?Iu(p,c,3,n,u):d))return!1}}return!0}(r,e,t)}},td=St,rd=or,nd=function(e){return Qu(e)?function(e){return function(t){return null==t?void 0:t[e]}}(Xu(e)):function(e){return function(t){return Zu(t,e)}}(e)},od=function(e){return"function"==typeof e?e:null==e?td:"object"==typeof e?rd(e)?function(e,t){return Gu(e)&&Ku(t)?Yu(Ju(e),t):function(r){var n=Wu(r,e);return void 0===n&&n===t?Vu(r,e):Hu(t,n,3)}}(e[0],e[1]):ed(e):nd(e)},id=od,ad=Nt,sd=Br,ld=od,cd=ln,pd=Math.max,ud=function(e){return function(t,r,n){var o=Object(t);if(!ad(t)){var i=id(r);t=sd(t),r=function(e){return i(o[e],e,o)}}var a=e(t,r,n);return a>-1?o[i?t[a]:a]:void 0}}((function(e,t,r){var n=null==e?0:e.length;if(!n)return-1;var o=null==r?0:cd(r);return o<0&&(o=pd(n+o,0)),function(e,t,r,n){for(var o=e.length,i=r+(n?1:-1);n?i--:++i<o;)if(t(e[i],i,e))return i;return-1}(e,ld(t),o)})),dd={},hd=(wu=function(e,t){return(wu=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])})(e,t)},function(e,t){function r(){this.constructor=e}wu(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}),fd=Object.prototype.hasOwnProperty;function md(e,t){return fd.call(e,t)}function yd(e){if(Array.isArray(e)){for(var t=new Array(e.length),r=0;r<t.length;r++)t[r]=""+r;return t}if(Object.keys)return Object.keys(e);for(var n in t=[],e)md(e,n)&&t.push(n);return t}function gd(e){switch(typeof e){case"object":return JSON.parse(JSON.stringify(e));case"undefined":return null;default:return e}}function vd(e){for(var t,r=0,n=e.length;r<n;){if(!((t=e.charCodeAt(r))>=48&&t<=57))return!1;r++}return!0}function bd(e){return-1===e.indexOf("/")&&-1===e.indexOf("~")?e:e.replace(/~/g,"~0").replace(/\//g,"~1")}function xd(e){return e.replace(/~1/g,"/").replace(/~0/g,"~")}function wd(e){if(void 0===e)return!0;if(e)if(Array.isArray(e)){for(var t=0,r=e.length;t<r;t++)if(wd(e[t]))return!0}else if("object"==typeof e){var n=yd(e),o=n.length;for(t=0;t<o;t++)if(wd(e[n[t]]))return!0}return!1}function $d(e,t){var r=[e];for(var n in t){var o="object"==typeof t[n]?JSON.stringify(t[n],null,2):t[n];void 0!==o&&r.push(n+": "+o)}return r.join("\n")}var Ad=function(e){function t(t,r,n,o,i){var a=this.constructor,s=e.call(this,$d(t,{name:r,index:n,operation:o,tree:i}))||this;return s.name=r,s.index=n,s.operation=o,s.tree=i,Object.setPrototypeOf(s,a.prototype),s.message=$d(t,{name:r,index:n,operation:o,tree:i}),s}return hd(t,e),t}(Error),kd=Ad,Sd=gd,Ed={add:function(e,t,r){return e[t]=this.value,{newDocument:r}},remove:function(e,t,r){var n=e[t];return delete e[t],{newDocument:r,removed:n}},replace:function(e,t,r){var n=e[t];return e[t]=this.value,{newDocument:r,removed:n}},move:function(e,t,r){var n=Od(r,this.path);n&&(n=gd(n));var o=Cd(r,{op:"remove",path:this.from}).removed;return Cd(r,{op:"add",path:this.path,value:o}),{newDocument:r,removed:n}},copy:function(e,t,r){var n=Od(r,this.from);return Cd(r,{op:"add",path:this.path,value:gd(n)}),{newDocument:r}},test:function(e,t,r){return{newDocument:r,test:Bd(e[t],this.value)}},_get:function(e,t,r){return this.value=e[t],{newDocument:r}}},Dd={add:function(e,t,r){return vd(t)?e.splice(t,0,this.value):e[t]=this.value,{newDocument:r,index:t}},remove:function(e,t,r){return{newDocument:r,removed:e.splice(t,1)[0]}},replace:function(e,t,r){var n=e[t];return e[t]=this.value,{newDocument:r,removed:n}},move:Ed.move,copy:Ed.copy,test:Ed.test,_get:Ed._get};function Od(e,t){if(""==t)return e;var r={op:"_get",path:t};return Cd(e,r),r.value}function Cd(e,t,r,n,o,i){if(void 0===r&&(r=!1),void 0===n&&(n=!0),void 0===o&&(o=!0),void 0===i&&(i=0),r&&("function"==typeof r?r(t,0,e,t.path):_d(t,0)),""===t.path){var a={newDocument:e};if("add"===t.op)return a.newDocument=t.value,a;if("replace"===t.op)return a.newDocument=t.value,a.removed=e,a;if("move"===t.op||"copy"===t.op)return a.newDocument=Od(e,t.from),"move"===t.op&&(a.removed=e),a;if("test"===t.op){if(a.test=Bd(e,t.value),!1===a.test)throw new kd("Test operation failed","TEST_OPERATION_FAILED",i,t,e);return a.newDocument=e,a}if("remove"===t.op)return a.removed=e,a.newDocument=null,a;if("_get"===t.op)return t.value=e,a;if(r)throw new kd("Operation `op` property is not one of operations defined in RFC-6902","OPERATION_OP_INVALID",i,t,e);return a}n||(e=gd(e));var s=(t.path||"").split("/"),l=e,c=1,p=s.length,u=void 0,d=void 0,h=void 0;for(h="function"==typeof r?r:_d;;){if((d=s[c])&&-1!=d.indexOf("~")&&(d=xd(d)),o&&"__proto__"==d)throw new TypeError("JSON-Patch: modifying `__proto__` prop is banned for security reasons, if this was on purpose, please set `banPrototypeModifications` flag false and pass it to this function. More info in fast-json-patch README");if(r&&void 0===u&&(void 0===l[d]?u=s.slice(0,c).join("/"):c==p-1&&(u=t.path),void 0!==u&&h(t,0,e,u)),c++,Array.isArray(l)){if("-"===d)d=l.length;else{if(r&&!vd(d))throw new kd("Expected an unsigned base-10 integer value, making the new referenced value the array element with the zero-based index","OPERATION_PATH_ILLEGAL_ARRAY_INDEX",i,t,e);vd(d)&&(d=~~d)}if(c>=p){if(r&&"add"===t.op&&d>l.length)throw new kd("The specified index MUST NOT be greater than the number of elements in the array","OPERATION_VALUE_OUT_OF_BOUNDS",i,t,e);if(!1===(a=Dd[t.op].call(t,l,d,e)).test)throw new kd("Test operation failed","TEST_OPERATION_FAILED",i,t,e);return a}}else if(c>=p){if(!1===(a=Ed[t.op].call(t,l,d,e)).test)throw new kd("Test operation failed","TEST_OPERATION_FAILED",i,t,e);return a}if(l=l[d],r&&c<p&&(!l||"object"!=typeof l))throw new kd("Cannot perform operation at the desired path","OPERATION_PATH_UNRESOLVABLE",i,t,e)}}function jd(e,t,r,n,o){if(void 0===n&&(n=!0),void 0===o&&(o=!0),r&&!Array.isArray(t))throw new kd("Patch sequence must be an array","SEQUENCE_NOT_AN_ARRAY");n||(e=gd(e));for(var i=new Array(t.length),a=0,s=t.length;a<s;a++)i[a]=Cd(e,t[a],r,!0,o,a),e=i[a].newDocument;return i.newDocument=e,i}function Td(e,t,r){var n=Cd(e,t);if(!1===n.test)throw new kd("Test operation failed","TEST_OPERATION_FAILED",r,t,e);return n.newDocument}function _d(e,t,r,n){if("object"!=typeof e||null===e||Array.isArray(e))throw new kd("Operation is not an object","OPERATION_NOT_AN_OBJECT",t,e,r);if(!Ed[e.op])throw new kd("Operation `op` property is not one of operations defined in RFC-6902","OPERATION_OP_INVALID",t,e,r);if("string"!=typeof e.path)throw new kd("Operation `path` property is not a string","OPERATION_PATH_INVALID",t,e,r);if(0!==e.path.indexOf("/")&&e.path.length>0)throw new kd('Operation `path` property must start with "/"',"OPERATION_PATH_INVALID",t,e,r);if(("move"===e.op||"copy"===e.op)&&"string"!=typeof e.from)throw new kd("Operation `from` property is not present (applicable in `move` and `copy` operations)","OPERATION_FROM_REQUIRED",t,e,r);if(("add"===e.op||"replace"===e.op||"test"===e.op)&&void 0===e.value)throw new kd("Operation `value` property is not present (applicable in `add`, `replace` and `test` operations)","OPERATION_VALUE_REQUIRED",t,e,r);if(("add"===e.op||"replace"===e.op||"test"===e.op)&&wd(e.value))throw new kd("Operation `value` property is not present (applicable in `add`, `replace` and `test` operations)","OPERATION_VALUE_CANNOT_CONTAIN_UNDEFINED",t,e,r);if(r)if("add"==e.op){var o=e.path.split("/").length,i=n.split("/").length;if(o!==i+1&&o!==i)throw new kd("Cannot perform an `add` operation at the desired path","OPERATION_PATH_CANNOT_ADD",t,e,r)}else if("replace"===e.op||"remove"===e.op||"_get"===e.op){if(e.path!==n)throw new kd("Cannot perform the operation at a path that does not exist","OPERATION_PATH_UNRESOLVABLE",t,e,r)}else if("move"===e.op||"copy"===e.op){var a=Fd([{op:"_get",path:e.from,value:void 0}],r);if(a&&"OPERATION_PATH_UNRESOLVABLE"===a.name)throw new kd("Cannot perform the operation from a path that does not exist","OPERATION_FROM_UNRESOLVABLE",t,e,r)}}function Fd(e,t,r){try{if(!Array.isArray(e))throw new kd("Patch sequence must be an array","SEQUENCE_NOT_AN_ARRAY");if(t)jd(gd(t),gd(e),r||!0);else{r=r||_d;for(var n=0;n<e.length;n++)r(e[n],n,t,void 0)}}catch(e){if(e instanceof kd)return e;throw e}}function Bd(e,t){if(e===t)return!0;if(e&&t&&"object"==typeof e&&"object"==typeof t){var r,n,o,i=Array.isArray(e),a=Array.isArray(t);if(i&&a){if((n=e.length)!=t.length)return!1;for(r=n;0!=r--;)if(!Bd(e[r],t[r]))return!1;return!0}if(i!=a)return!1;var s=Object.keys(e);if((n=s.length)!==Object.keys(t).length)return!1;for(r=n;0!=r--;)if(!t.hasOwnProperty(s[r]))return!1;for(r=n;0!=r--;)if(!Bd(e[o=s[r]],t[o]))return!1;return!0}return e!=e&&t!=t}var Id=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",JsonPatchError:kd,deepClone:Sd,getValueByPointer:Od,applyOperation:Cd,applyPatch:jd,applyReducer:Td,validator:_d,validate:Fd,_areEquals:Bd}),Pd=new WeakMap,Rd=function(e){this.observers=new Map,this.obj=e},Ud=function(e,t){this.callback=e,this.observer=t};function Ld(e,t){t.unobserve()}function Nd(e,t){var r,n=function(e){return Pd.get(e)}(e);if(n){var o=function(e,t){return e.observers.get(t)}(n,t);r=o&&o.observer}else n=new Rd(e),Pd.set(e,n);if(r)return r;if(r={},n.value=gd(e),t){r.callback=t,r.next=null;var i=function(){zd(r)},a=function(){clearTimeout(r.next),r.next=setTimeout(i)};"undefined"!=typeof window&&(window.addEventListener("mouseup",a),window.addEventListener("keyup",a),window.addEventListener("mousedown",a),window.addEventListener("keydown",a),window.addEventListener("change",a))}return r.patches=[],r.object=e,r.unobserve=function(){zd(r),clearTimeout(r.next),function(e,t){e.observers.delete(t.callback)}(n,r),"undefined"!=typeof window&&(window.removeEventListener("mouseup",a),window.removeEventListener("keyup",a),window.removeEventListener("mousedown",a),window.removeEventListener("keydown",a),window.removeEventListener("change",a))},n.observers.set(t,new Ud(t,r)),r}function zd(e,t){void 0===t&&(t=!1);var r=Pd.get(e.object);qd(r.value,e.object,e.patches,"",t),e.patches.length&&jd(r.value,e.patches);var n=e.patches;return n.length>0&&(e.patches=[],e.callback&&e.callback(n)),n}function qd(e,t,r,n,o){if(t!==e){"function"==typeof t.toJSON&&(t=t.toJSON());for(var i=yd(t),a=yd(e),s=!1,l=a.length-1;l>=0;l--){var c=e[u=a[l]];if(!md(t,u)||void 0===t[u]&&void 0!==c&&!1===Array.isArray(t))Array.isArray(e)===Array.isArray(t)?(o&&r.push({op:"test",path:n+"/"+bd(u),value:gd(c)}),r.push({op:"remove",path:n+"/"+bd(u)}),s=!0):(o&&r.push({op:"test",path:n,value:e}),r.push({op:"replace",path:n,value:t}));else{var p=t[u];"object"==typeof c&&null!=c&&"object"==typeof p&&null!=p&&Array.isArray(c)===Array.isArray(p)?qd(c,p,r,n+"/"+bd(u),o):c!==p&&(o&&r.push({op:"test",path:n+"/"+bd(u),value:gd(c)}),r.push({op:"replace",path:n+"/"+bd(u),value:gd(p)}))}}if(s||i.length!=a.length)for(l=0;l<i.length;l++){var u;md(e,u=i[l])||void 0===t[u]||r.push({op:"add",path:n+"/"+bd(u),value:gd(t[u])})}}}function Md(e,t,r){void 0===r&&(r=!1);var n=[];return qd(e,t,n,"",r),n}var Hd=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",unobserve:Ld,observe:Nd,generate:zd,compare:Md}),Wd=Object.assign({},Id,Hd,{JsonPatchError:Ad,deepClone:gd,escapePathComponent:bd,unescapePathComponent:xd}),Vd=ke(Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Wd,JsonPatchError:Ad,deepClone:gd,escapePathComponent:bd,unescapePathComponent:xd,getValueByPointer:Od,applyOperation:Cd,applyPatch:jd,applyReducer:Td,validator:_d,validate:Fd,_areEquals:Bd,unobserve:Ld,observe:Nd,generate:zd,compare:Md})),Gd={exports:{}};function Kd(e){return e instanceof Ae||e instanceof Date||e instanceof RegExp}function Yd(e){if(e instanceof Ae){var t=Ae.alloc?Ae.alloc(e.length):new Ae(e.length);return e.copy(t),t}if(e instanceof Date)return new Date(e.getTime());if(e instanceof RegExp)return new RegExp(e);throw new Error("Unexpected situation")}function Jd(e){var t=[];return e.forEach((function(e,r){"object"==typeof e&&null!==e?Array.isArray(e)?t[r]=Jd(e):Kd(e)?t[r]=Yd(e):t[r]=Qd({},e):t[r]=e})),t}function Zd(e,t){return"__proto__"===t?void 0:e[t]}var Qd=Gd.exports=function(){if(arguments.length<1||"object"!=typeof arguments[0])return!1;if(arguments.length<2)return arguments[0];var e,t,r=arguments[0],n=Array.prototype.slice.call(arguments,1);return n.forEach((function(n){"object"!=typeof n||null===n||Array.isArray(n)||Object.keys(n).forEach((function(o){return t=Zd(r,o),(e=Zd(n,o))===r?void 0:"object"!=typeof e||null===e?void(r[o]=e):Array.isArray(e)?void(r[o]=Jd(e)):Kd(e)?void(r[o]=Yd(e)):"object"!=typeof t||null===t||Array.isArray(t)?void(r[o]=Qd({},e)):void(r[o]=Qd(t,e))}))})),r},Xd=kt,eh=Br,th=Ke,rh=Kt,nh=Object.prototype.hasOwnProperty,oh=kr,ih=function(e){if(!th(e))return function(e){var t=[];if(null!=e)for(var r in Object(e))t.push(r);return t}(e);var t=rh(e),r=[];for(var n in e)("constructor"!=n||!t&&nh.call(e,n))&&r.push(n);return r},ah=Nt,sh=function(e){return ah(e)?oh(e,!0):ih(e)},lh=kt,ch=sh,ph={exports:{}};!function(e,t){var r=Re,n=t&&!t.nodeType&&t,o=n&&e&&!e.nodeType&&e,i=o&&o.exports===n?r.Buffer:void 0,a=i?i.allocUnsafe:void 0;e.exports=function(e,t){if(t)return e.slice();var r=e.length,n=a?a(r):new e.constructor(r);return e.copy(n),n}}(ph,ph.exports);var uh=kt,dh=tu,hh=Sr(Object.getPrototypeOf,Object),fh=Cc,mh=hh,yh=tu,gh=Zp,vh=Object.getOwnPropertySymbols?function(e){for(var t=[];e;)fh(t,yh(e)),e=mh(e);return t}:gh,bh=kt,xh=vh,wh=Jp,$h=vh,Ah=sh,kh=Object.prototype.hasOwnProperty,Sh=Np,Eh=function(e){var t=new e.constructor(e.byteLength);return new Sh(t).set(new Sh(e)),t},Dh=Eh,Oh=/\w*$/,Ch=Ue?Ue.prototype:void 0,jh=Ch?Ch.valueOf:void 0,Th=Eh,_h=Eh,Fh=function(e,t){var r=t?Dh(e.buffer):e.buffer;return new e.constructor(r,e.byteOffset,e.byteLength)},Bh=function(e){var t=new e.constructor(e.source,Oh.exec(e));return t.lastIndex=e.lastIndex,t},Ih=Ke,Ph=Object.create,Rh=function(){function e(){}return function(t){if(!Ih(t))return{};if(Ph)return Ph(t);e.prototype=t;var r=new e;return e.prototype=void 0,r}}(),Uh=hh,Lh=Kt,Nh=$u,zh=Yt,qh=pr,Mh=ur.exports,Hh=Mh&&Mh.isMap,Wh=Hh?qh(Hh):function(e){return zh(e)&&"[object Map]"==Nh(e)},Vh=$u,Gh=Yt,Kh=pr,Yh=ur.exports,Jh=Yh&&Yh.isSet,Zh=Jh?Kh(Jh):function(e){return Gh(e)&&"[object Set]"==Vh(e)},Qh=Fp,Xh=function(e,t){for(var r=-1,n=null==e?0:e.length;++r<n&&!1!==t(e[r],r,e););return e},ef=wt,tf=function(e,t){return e&&Xd(t,eh(t),e)},rf=function(e,t){return e&&lh(t,ch(t),e)},nf=ph.exports,of=function(e,t){var r=-1,n=e.length;for(t||(t=Array(n));++r<n;)t[r]=e[r];return t},af=function(e,t){return uh(e,dh(e),t)},sf=function(e,t){return bh(e,xh(e),t)},lf=iu,cf=function(e){return wh(e,Ah,$h)},pf=$u,uf=function(e){var t=e.length,r=new e.constructor(t);return t&&"string"==typeof e[0]&&kh.call(e,"index")&&(r.index=e.index,r.input=e.input),r},df=function(e,t,r){var n=e.constructor;switch(t){case"[object ArrayBuffer]":return _h(e);case"[object Boolean]":case"[object Date]":return new n(+e);case"[object DataView]":return Fh(e,r);case"[object Float32Array]":case"[object Float64Array]":case"[object Int8Array]":case"[object Int16Array]":case"[object Int32Array]":case"[object Uint8Array]":case"[object Uint8ClampedArray]":case"[object Uint16Array]":case"[object Uint32Array]":return function(e,t){var r=t?Th(e.buffer):e.buffer;return new e.constructor(r,e.byteOffset,e.length)}(e,r);case"[object Map]":return new n;case"[object Number]":case"[object String]":return new n(e);case"[object RegExp]":return Bh(e);case"[object Set]":return new n;case"[object Symbol]":return function(e){return jh?Object(jh.call(e)):{}}(e)}},hf=function(e){return"function"!=typeof e.constructor||Lh(e)?{}:Rh(Uh(e))},ff=or,mf=ir.exports,yf=Wh,gf=Ke,vf=Zh,bf=Br,xf=sh,wf={};wf["[object Arguments]"]=wf["[object Array]"]=wf["[object ArrayBuffer]"]=wf["[object DataView]"]=wf["[object Boolean]"]=wf["[object Date]"]=wf["[object Float32Array]"]=wf["[object Float64Array]"]=wf["[object Int8Array]"]=wf["[object Int16Array]"]=wf["[object Int32Array]"]=wf["[object Map]"]=wf["[object Number]"]=wf["[object Object]"]=wf["[object RegExp]"]=wf["[object Set]"]=wf["[object String]"]=wf["[object Symbol]"]=wf["[object Uint8Array]"]=wf["[object Uint8ClampedArray]"]=wf["[object Uint16Array]"]=wf["[object Uint32Array]"]=!0,wf["[object Error]"]=wf["[object Function]"]=wf["[object WeakMap]"]=!1;var $f=function e(t,r,n,o,i,a){var s,l=1&r,c=2&r,p=4&r;if(n&&(s=i?n(t,o,i,a):n(t)),void 0!==s)return s;if(!gf(t))return t;var u=ff(t);if(u){if(s=uf(t),!l)return of(t,s)}else{var d=pf(t),h="[object Function]"==d||"[object GeneratorFunction]"==d;if(mf(t))return nf(t,l);if("[object Object]"==d||"[object Arguments]"==d||h&&!i){if(s=c||h?{}:hf(t),!l)return c?sf(t,rf(s,t)):af(t,tf(s,t))}else{if(!wf[d])return i?t:{};s=df(t,d,l)}}a||(a=new Qh);var f=a.get(t);if(f)return f;a.set(t,s),vf(t)?t.forEach((function(o){s.add(e(o,r,n,o,t,a))})):yf(t)&&t.forEach((function(o,i){s.set(i,e(o,r,n,i,t,a))}));var m=u?void 0:(p?c?cf:lf:c?xf:bf)(t);return Xh(m||t,(function(o,i){m&&(o=t[i=o]),ef(s,i,e(o,r,n,i,t,a))})),s};dd.__esModule=!0,dd.default=void 0;var Af=function(e,t){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var r=Df(t);if(r&&r.has(e))return r.get(e);var n={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if("default"!==i&&Object.prototype.hasOwnProperty.call(e,i)){var a=o?Object.getOwnPropertyDescriptor(e,i):null;a&&(a.get||a.set)?Object.defineProperty(n,i,a):n[i]=e[i]}return n.default=e,r&&r.set(e,n),n}(Vd),kf=Ef(Gd.exports),Sf=Ef((function(e){return $f(e,5)}));function Ef(e){return e&&e.__esModule?e:{default:e}}function Df(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(Df=function(e){return e?r:t})(e)}function Of(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function Cf(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?Of(Object(r),!0).forEach((function(t){jf(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Of(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function jf(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var Tf={add:function(e,t){return{op:"add",path:e,value:t}},replace:Ff,remove:function(e){return{op:"remove",path:e}},merge:function(e,t){return{type:"mutation",op:"merge",path:e,value:t}},mergeDeep:function(e,t){return{type:"mutation",op:"mergeDeep",path:e,value:t}},context:function(e,t){return{type:"context",path:e,value:t}},getIn:function(e,t){return t.reduce(((e,t)=>void 0!==t&&e?e[t]:e),e)},applyPatch:function(e,t,r){if(r=r||{},"merge"===(t=Cf(Cf({},t),{},{path:t.path&&_f(t.path)})).op){const r=Vf(e,t.path);Object.assign(r,t.value),Af.applyPatch(e,[Ff(t.path,r)])}else if("mergeDeep"===t.op){const r=Vf(e,t.path);for(const e in t.value){const n=t.value[e],o=Array.isArray(n);if(o){const t=r[e]||[];r[e]=t.concat(n)}else if(Nf(n)&&!o){let t=Cf({},r[e]);for(const e in n){if(Object.prototype.hasOwnProperty.call(t,e)){t=(0,kf.default)((0,Sf.default)(t),n);break}Object.assign(t,{[e]:n[e]})}r[e]=t}else r[e]=n}}else if("add"===t.op&&""===t.path&&Nf(t.value)){const r=Object.keys(t.value).reduce(((e,r)=>(e.push({op:"add",path:`/${_f(r)}`,value:t.value[r]}),e)),[]);Af.applyPatch(e,r)}else if("replace"===t.op&&""===t.path){let{value:n}=t;r.allowMetaPatches&&t.meta&&Hf(t)&&(Array.isArray(t.value)||Nf(t.value))&&(n=Cf(Cf({},n),t.meta)),e=n}else if(Af.applyPatch(e,[t]),r.allowMetaPatches&&t.meta&&Hf(t)&&(Array.isArray(t.value)||Nf(t.value))){const r=Cf(Cf({},Vf(e,t.path)),t.meta);Af.applyPatch(e,[Ff(t.path,r)])}return e},parentPathMatch:function(e,t){if(!Array.isArray(t))return!1;for(let r=0,n=t.length;r<n;r+=1)if(t[r]!==e[r])return!1;return!0},flatten:Uf,fullyNormalizeArray:function(e){return Lf(Uf(Rf(e)))},normalizeArray:Rf,isPromise:function(e){return Nf(e)&&zf(e.then)},forEachNew:function(e,t){try{return Bf(e,Pf,t)}catch(e){return e}},forEachNewPrimitive:function(e,t){try{return Bf(e,If,t)}catch(e){return e}},isJsonPatch:qf,isContextPatch:function(e){return Wf(e)&&"context"===e.type},isPatch:Wf,isMutation:Mf,isAdditiveMutation:Hf,isGenerator:function(e){return"[object GeneratorFunction]"===Object.prototype.toString.call(e)},isFunction:zf,isObject:Nf,isError:function(e){return e instanceof Error}};function _f(e){return Array.isArray(e)?e.length<1?"":`/${e.map((e=>(e+"").replace(/~/g,"~0").replace(/\//g,"~1"))).join("/")}`:e}function Ff(e,t,r){return{op:"replace",path:e,value:t,meta:r}}function Bf(e,t,r){return Lf(Uf(e.filter(Hf).map((e=>t(e.value,r,e.path)))||[]))}function If(e,t,r){return r=r||[],Array.isArray(e)?e.map(((e,n)=>If(e,t,r.concat(n)))):Nf(e)?Object.keys(e).map((n=>If(e[n],t,r.concat(n)))):t(e,r[r.length-1],r)}function Pf(e,t,r){let n=[];if((r=r||[]).length>0){const o=t(e,r[r.length-1],r);o&&(n=n.concat(o))}if(Array.isArray(e)){const o=e.map(((e,n)=>Pf(e,t,r.concat(n))));o&&(n=n.concat(o))}else if(Nf(e)){const o=Object.keys(e).map((n=>Pf(e[n],t,r.concat(n))));o&&(n=n.concat(o))}return n=Uf(n),n}function Rf(e){return Array.isArray(e)?e:[e]}function Uf(e){return[].concat(...e.map((e=>Array.isArray(e)?Uf(e):e)))}function Lf(e){return e.filter((e=>void 0!==e))}function Nf(e){return e&&"object"==typeof e}function zf(e){return e&&"function"==typeof e}function qf(e){if(Wf(e)){const{op:t}=e;return"add"===t||"remove"===t||"replace"===t}return!1}function Mf(e){return qf(e)||Wf(e)&&"mutation"===e.type}function Hf(e){return Mf(e)&&("add"===e.op||"replace"===e.op||"merge"===e.op||"mergeDeep"===e.op)}function Wf(e){return e&&"object"==typeof e}function Vf(e,t){try{return Af.getValueByPointer(e,t)}catch(e){return console.error(e),{}}}dd.default=Tf;var Gf={},Kf={};!function(e){var t=Kf,r=zc.Buffer;function n(e,r){try{return decodeURIComponent(e)}catch(n){return t.unescapeBuffer(e,r).toString()}}t.unescapeBuffer=function(e,t){for(var n,o,i,a=new r(e.length),s=0,l=0,c=0;l<=e.length;l++){var p=l<e.length?e.charCodeAt(l):NaN;switch(s){case 0:switch(p){case 37:n=0,o=0,s=1;break;case 43:t&&(p=32);default:a[c++]=p}break;case 1:if(i=p,p>=48&&p<=57)n=p-48;else if(p>=65&&p<=70)n=p-65+10;else{if(!(p>=97&&p<=102)){a[c++]=37,a[c++]=p,s=0;break}n=p-97+10}s=2;break;case 2:if(s=0,p>=48&&p<=57)o=p-48;else if(p>=65&&p<=70)o=p-65+10;else{if(!(p>=97&&p<=102)){a[c++]=37,a[c++]=i,a[c++]=p;break}o=p-97+10}a[c++]=16*n+o}}return a.slice(0,c-1)},t.unescape=n;for(var o=new Array(256),i=0;i<256;++i)o[i]="%"+((i<16?"0":"")+i.toString(16)).toUpperCase();t.escape=function(e){"string"!=typeof e&&(e+="");for(var t="",r=0,n=0;n<e.length;++n){var i=e.charCodeAt(n);if(!(33===i||45===i||46===i||95===i||126===i||i>=39&&i<=42||i>=48&&i<=57||i>=65&&i<=90||i>=97&&i<=122))if(n-r>0&&(t+=e.slice(r,n)),i<128)r=n+1,t+=o[i];else if(i<2048)r=n+1,t+=o[192|i>>6]+o[128|63&i];else if(i<55296||i>=57344)r=n+1,t+=o[224|i>>12]+o[128|i>>6&63]+o[128|63&i];else{var a;if(!(++n<e.length))throw new URIError("URI malformed");a=1023&e.charCodeAt(n),r=n+1,t+=o[240|(i=65536+((1023&i)<<10|a))>>18]+o[128|i>>12&63]+o[128|i>>6&63]+o[128|63&i]}}return 0===r?e:r<e.length?t+e.slice(r):t};var a=function(e){return"string"==typeof e?e:"number"==typeof e&&isFinite(e)?""+e:"boolean"==typeof e?e?"true":"false":""};function s(e,r){try{return r(e)}catch(r){return t.unescape(e,!0)}}t.stringify=t.encode=function(e,r,n,o){r=r||"&",n=n||"=";var i=t.escape;if(o&&"function"==typeof o.encodeURIComponent&&(i=o.encodeURIComponent),null!==e&&"object"==typeof e){for(var s=Object.keys(e),l=s.length,c=l-1,p="",u=0;u<l;++u){var d=s[u],h=e[d],f=i(a(d))+n;if(Array.isArray(h)){for(var m=h.length,y=m-1,g=0;g<m;++g)p+=f+i(a(h[g])),g<y&&(p+=r);m&&u<c&&(p+=r)}else p+=f+i(a(h)),u<c&&(p+=r)}return p}return""},t.parse=t.decode=function(e,r,o,i){r=r||"&",o=o||"=";var a={};if("string"!=typeof e||0===e.length)return a;"string"!=typeof r&&(r+="");var l=o.length,c=r.length,p=1e3;i&&"number"==typeof i.maxKeys&&(p=i.maxKeys);var u=1/0;p>0&&(u=p);var d=t.unescape;i&&"function"==typeof i.decodeURIComponent&&(d=i.decodeURIComponent);for(var h=d!==n,f=[],m=0,y=0,g=0,v="",b="",x=h,w=h,$=0,A=0;A<e.length;++A){var k=e.charCodeAt(A);if(k!==r.charCodeAt(y)){if(y=0,w||(37===k?$=1:$>0&&(k>=48&&k<=57||k>=65&&k<=70||k>=97&&k<=102)?3==++$&&(w=!0):$=0),g<l){if(k===o.charCodeAt(g)){++g===l&&(m<(E=A-g+1)&&(v+=e.slice(m,E)),$=0,m=A+1);continue}g=0,x||(37===k?$=1:$>0&&(k>=48&&k<=57||k>=65&&k<=70||k>=97&&k<=102)?3==++$&&(x=!0):$=0)}43===k&&(g<l?(A-m>0&&(v+=e.slice(m,A)),v+="%20",x=!0):(A-m>0&&(b+=e.slice(m,A)),b+="%20",w=!0),m=A+1)}else if(++y===c){var S,E=A-y+1;if(g<l?m<E&&(v+=e.slice(m,E)):m<E&&(b+=e.slice(m,E)),x&&(v=s(v,d)),w&&(b=s(b,d)),-1===f.indexOf(v)?(a[v]=b,f[f.length]=v):(S=a[v])instanceof Array?S[S.length]=b:a[v]=[S,b],0==--u)break;x=w=h,$=0,v=b="",m=A+1,y=g=0}}return u>0&&(m<e.length||g>0)&&(m<e.length&&(g<l?v+=e.slice(m):y<c&&(b+=e.slice(m))),x&&(v=s(v,d)),w&&(b=s(b,d)),-1===f.indexOf(v)?(a[v]=b,f[f.length]=v):(S=a[v])instanceof Array?S[S.length]=b:a[v]=[S,b]),a}}();var Yf={__esModule:!0,default:function(e,t){function r(...e){Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=(new Error).stack,[this.message]=e,t&&t.apply(this,e)}return r.prototype=new Error,r.prototype.name=e,r.prototype.constructor=r,r}},Jf={},Zf={exports:{}},Qf=Zf.exports=function(e){return new Xf(e)};function Xf(e){this.value=e}function em(e,t,r){var n=[],o=[],i=!0;return function e(a){var s=r?tm(a):a,l={},c=!0,p={node:s,node_:a,path:[].concat(n),parent:o[o.length-1],parents:o,key:n.slice(-1)[0],isRoot:0===n.length,level:n.length,circular:null,update:function(e,t){p.isRoot||(p.parent.node[p.key]=e),p.node=e,t&&(c=!1)},delete:function(e){delete p.parent.node[p.key],e&&(c=!1)},remove:function(e){om(p.parent.node)?p.parent.node.splice(p.key,1):delete p.parent.node[p.key],e&&(c=!1)},keys:null,before:function(e){l.before=e},after:function(e){l.after=e},pre:function(e){l.pre=e},post:function(e){l.post=e},stop:function(){i=!1},block:function(){c=!1}};if(!i)return p;function u(){if("object"==typeof p.node&&null!==p.node){p.keys&&p.node_===p.node||(p.keys=rm(p.node)),p.isLeaf=0==p.keys.length;for(var e=0;e<o.length;e++)if(o[e].node_===a){p.circular=o[e];break}}else p.isLeaf=!0,p.keys=null;p.notLeaf=!p.isLeaf,p.notRoot=!p.isRoot}u();var d=t.call(p,p.node);return void 0!==d&&p.update&&p.update(d),l.before&&l.before.call(p,p.node),c?("object"!=typeof p.node||null===p.node||p.circular||(o.push(p),u(),im(p.keys,(function(t,o){n.push(t),l.pre&&l.pre.call(p,p.node[t],t);var i=e(p.node[t]);r&&am.call(p.node,t)&&(p.node[t]=i.node),i.isLast=o==p.keys.length-1,i.isFirst=0==o,l.post&&l.post.call(p,i),n.pop()})),o.pop()),l.after&&l.after.call(p,p.node),p):p}(e).node}function tm(e){if("object"==typeof e&&null!==e){var t;if(om(e))t=[];else if("[object Date]"===nm(e))t=new Date(e.getTime?e.getTime():e);else if(function(e){return"[object RegExp]"===nm(e)}(e))t=new RegExp(e);else if(function(e){return"[object Error]"===nm(e)}(e))t={message:e.message};else if(function(e){return"[object Boolean]"===nm(e)}(e))t=new Boolean(e);else if(function(e){return"[object Number]"===nm(e)}(e))t=new Number(e);else if(function(e){return"[object String]"===nm(e)}(e))t=new String(e);else if(Object.create&&Object.getPrototypeOf)t=Object.create(Object.getPrototypeOf(e));else if(e.constructor===Object)t={};else{var r=e.constructor&&e.constructor.prototype||e.__proto__||{},n=function(){};n.prototype=r,t=new n}return im(rm(e),(function(r){t[r]=e[r]})),t}return e}Xf.prototype.get=function(e){for(var t=this.value,r=0;r<e.length;r++){var n=e[r];if(!t||!am.call(t,n)){t=void 0;break}t=t[n]}return t},Xf.prototype.has=function(e){for(var t=this.value,r=0;r<e.length;r++){var n=e[r];if(!t||!am.call(t,n))return!1;t=t[n]}return!0},Xf.prototype.set=function(e,t){for(var r=this.value,n=0;n<e.length-1;n++){var o=e[n];am.call(r,o)||(r[o]={}),r=r[o]}return r[e[n]]=t,t},Xf.prototype.map=function(e){return em(this.value,e,!0)},Xf.prototype.forEach=function(e){return this.value=em(this.value,e,!1),this.value},Xf.prototype.reduce=function(e,t){var r=1===arguments.length,n=r?this.value:t;return this.forEach((function(t){this.isRoot&&r||(n=e.call(this,n,t))})),n},Xf.prototype.paths=function(){var e=[];return this.forEach((function(t){e.push(this.path)})),e},Xf.prototype.nodes=function(){var e=[];return this.forEach((function(t){e.push(this.node)})),e},Xf.prototype.clone=function(){var e=[],t=[];return function r(n){for(var o=0;o<e.length;o++)if(e[o]===n)return t[o];if("object"==typeof n&&null!==n){var i=tm(n);return e.push(n),t.push(i),im(rm(n),(function(e){i[e]=r(n[e])})),e.pop(),t.pop(),i}return n}(this.value)};var rm=Object.keys||function(e){var t=[];for(var r in e)t.push(r);return t};function nm(e){return Object.prototype.toString.call(e)}var om=Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)},im=function(e,t){if(e.forEach)return e.forEach(t);for(var r=0;r<e.length;r++)t(e[r],r,e)};im(rm(Xf.prototype),(function(e){Qf[e]=function(t){var r=[].slice.call(arguments,1),n=new Xf(t);return n[e].apply(n,r)}}));var am=Object.hasOwnProperty||function(e,t){return t in e},sm=Ge,lm=or,cm=Yt;Jf.__esModule=!0,Jf.isFreelyNamed=function(e){const t=e[e.length-1],r=e[e.length-2],n=e.join("/");return fm.indexOf(t)>-1&&-1===mm.indexOf(r)||ym.indexOf(n)>-1||gm.some((e=>n.indexOf(e)>-1))},Jf.generateAbsoluteRefPatches=function(e,t,{specmap:r,getBaseUrlForNodePath:n=(e=>r.getContext([...t,...e]).baseDoc),targetKeys:o=["$ref","$$ref"]}={}){const i=[];return(0,pm.default)(e).forEach((function(){if(o.includes(this.key)&&(0,dm.default)(this.node)){const e=this.path,o=t.concat(this.path),a=vm(this.node,n(e));i.push(r.replace(o,a))}})),i},Jf.absolutifyPointer=vm;var pm=hm(Zf.exports),um=hm(yn),dm=hm((function(e){return"string"==typeof e||!lm(e)&&cm(e)&&"[object String]"==sm(e)}));function hm(e){return e&&e.__esModule?e:{default:e}}const fm=["properties"],mm=["properties"],ym=["definitions","parameters","responses","securityDefinitions","components/schemas","components/responses","components/parameters","components/securitySchemes"],gm=["schema/example","items/example"];function vm(e,t){const[r,n]=e.split("#"),o=um.default.resolve(r||"",t||"");return n?`${o}#${n}`:o}var bm={__esModule:!0,ACCEPT_HEADER_VALUE_FOR_DOCUMENTS:(void 0,"application/json, application/yaml")};Gf.__esModule=!0,Gf.default=void 0;var xm=Dm(Ji),wm=Dm(Kf),$m=Dm(yn),Am=Dm(dd),km=Dm(Yf),Sm=Jf,Em=bm;function Dm(e){return e&&e.__esModule?e:{default:e}}const Om=new RegExp("^([a-z]+://|//)","i"),Cm=(0,km.default)("JSONRefError",(function(e,t,r){this.originalError=r,Object.assign(this,t||{})})),jm={},Tm=new WeakMap,_m=[e=>"paths"===e[0]&&"responses"===e[3]&&"examples"===e[5],e=>"paths"===e[0]&&"responses"===e[3]&&"content"===e[5]&&"example"===e[7],e=>"paths"===e[0]&&"responses"===e[3]&&"content"===e[5]&&"examples"===e[7]&&"value"===e[9],e=>"paths"===e[0]&&"requestBody"===e[3]&&"content"===e[4]&&"example"===e[6],e=>"paths"===e[0]&&"requestBody"===e[3]&&"content"===e[4]&&"examples"===e[6]&&"value"===e[8],e=>"paths"===e[0]&&"parameters"===e[2]&&"example"===e[4],e=>"paths"===e[0]&&"parameters"===e[3]&&"example"===e[5],e=>"paths"===e[0]&&"parameters"===e[2]&&"examples"===e[4]&&"value"===e[6],e=>"paths"===e[0]&&"parameters"===e[3]&&"examples"===e[5]&&"value"===e[7],e=>"paths"===e[0]&&"parameters"===e[2]&&"content"===e[4]&&"example"===e[6],e=>"paths"===e[0]&&"parameters"===e[2]&&"content"===e[4]&&"examples"===e[6]&&"value"===e[8],e=>"paths"===e[0]&&"parameters"===e[3]&&"content"===e[4]&&"example"===e[7],e=>"paths"===e[0]&&"parameters"===e[3]&&"content"===e[5]&&"examples"===e[7]&&"value"===e[9]],Fm={key:"$ref",plugin:(e,t,r,n)=>{const o=n.getInstance(),i=r.slice(0,-1);if((0,Sm.isFreelyNamed)(i)||(a=i,_m.some((e=>e(a)))))return;var a;const{baseDoc:s}=n.getContext(r);if("string"!=typeof e)return new Cm("$ref: must be a string (JSON-Ref)",{$ref:e,baseDoc:s,fullPath:r});const l=Um(e),c=l[0],p=l[1]||"";let u,d,h;try{u=s||c?Pm(c,s):null}catch(t){return Rm(t,{pointer:p,$ref:e,basePath:u,fullPath:r})}if(function(e,t,r,n){let o=Tm.get(n);o||(o={},Tm.set(n,o));const i=function(e){return 0===e.length?"":`/${e.map(Hm).join("/")}`}(r),a=`${t||"<specmap-base>"}#${e}`,s=i.replace(/allOf\/\d+\/?/g,"");if(t===n.contextTree.get([]).baseDoc&&Wm(s,e))return!0;let l="";if(r.some((e=>(l=`${l}/${Hm(e)}`,o[l]&&o[l].some((e=>Wm(e,a)||Wm(a,e)))))))return!0;o[s]=(o[s]||[]).concat(a)}(p,u,i,n)&&!o.useCircularStructures){const t=(0,Sm.absolutifyPointer)(e,u);return e===t?null:Am.default.replace(r,t)}if(null==u?(h=qm(p),d=n.get(h),void 0===d&&(d=new Cm(`Could not resolve reference: ${e}`,{pointer:p,$ref:e,baseDoc:s,fullPath:r}))):(d=Lm(u,p),d=null!=d.__value?d.__value:d.catch((t=>{throw Rm(t,{pointer:p,$ref:e,baseDoc:s,fullPath:r})}))),d instanceof Error)return[Am.default.remove(r),d];const f=(0,Sm.absolutifyPointer)(e,u),m=Am.default.replace(i,d,{$$ref:f});if(u&&u!==s)return[m,Am.default.context(i,{baseDoc:u})];try{if(!function(e,t){const r=[e];return t.path.reduce(((e,t)=>(r.push(e[t]),e[t])),e),function e(t){return Am.default.isObject(t)&&(r.indexOf(t)>=0||Object.keys(t).some((r=>e(t[r]))))}(t.value)}(n.state,m)||o.useCircularStructures)return m}catch(e){return null}}},Bm=Object.assign(Fm,{docCache:jm,absoluteify:Pm,clearCache:function(e){void 0!==e?delete jm[e]:Object.keys(jm).forEach((e=>{delete jm[e]}))},JSONRefError:Cm,wrapError:Rm,getDoc:Nm,split:Um,extractFromDoc:Lm,fetchJSON:function(e){return fetch(e,{headers:{Accept:Em.ACCEPT_HEADER_VALUE_FOR_DOCUMENTS},loadSpec:!0}).then((e=>e.text())).then((e=>xm.default.load(e)))},extract:zm,jsonPointerToArray:qm,unescapeJsonPointerToken:Mm});var Im=Bm;function Pm(e,t){if(!Om.test(e)){if(!t)throw new Cm(`Tried to resolve a relative URL, without having a basePath. path: '${e}' basePath: '${t}'`);return $m.default.resolve(t,e)}return e}function Rm(e,t){let r;return r=e&&e.response&&e.response.body?`${e.response.body.code} ${e.response.body.message}`:e.message,new Cm(`Could not resolve reference: ${r}`,t,e)}function Um(e){return(e+"").split("#")}function Lm(e,t){const r=jm[e];if(r&&!Am.default.isPromise(r))try{const e=zm(t,r);return Object.assign(Promise.resolve(e),{__value:e})}catch(e){return Promise.reject(e)}return Nm(e).then((e=>zm(t,e)))}function Nm(e){const t=jm[e];return t?Am.default.isPromise(t)?t:Promise.resolve(t):(jm[e]=Bm.fetchJSON(e).then((t=>(jm[e]=t,t))),jm[e])}function zm(e,t){const r=qm(e);if(r.length<1)return t;const n=Am.default.getIn(t,r);if(void 0===n)throw new Cm(`Could not resolve pointer: ${e} does not exist in document`,{pointer:e});return n}function qm(e){if("string"!=typeof e)throw new TypeError("Expected a string, got a "+typeof e);return"/"===e[0]&&(e=e.substr(1)),""===e?[]:e.split("/").map(Mm)}function Mm(e){return"string"!=typeof e?e:wm.default.unescape(e.replace(/~1/g,"/").replace(/~0/g,"~"))}function Hm(e){return wm.default.escape(e.replace(/~/g,"~0").replace(/\//g,"~1"))}function Wm(e,t){if(!(r=t)||"/"===r||"#"===r)return!0;var r;const n=e.charAt(t.length),o=t.slice(-1);return 0===e.indexOf(t)&&(!n||"/"===n||"#"===n)&&"#"!==o}Gf.default=Im;var Vm={},Gm=jr,Km=$u,Ym=nr,Jm=or,Zm=Nt,Qm=ir.exports,Xm=Kt,ey=yr,ty=Object.prototype.hasOwnProperty;Vm.__esModule=!0,Vm.default=void 0;var ry,ny=(ry=function(e){if(null==e)return!0;if(Zm(e)&&(Jm(e)||"string"==typeof e||"function"==typeof e.splice||Qm(e)||ey(e)||Ym(e)))return!e.length;var t=Km(e);if("[object Map]"==t||"[object Set]"==t)return!e.size;if(Xm(e))return!Gm(e).length;for(var r in e)if(ty.call(e,r))return!1;return!0})&&ry.__esModule?ry:{default:ry},oy=Jf;function iy(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function ay(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var sy={key:"allOf",plugin:(e,t,r,n,o)=>{if(o.meta&&o.meta.$$ref)return;const i=r.slice(0,-1);if((0,oy.isFreelyNamed)(i))return;if(!Array.isArray(e)){const e=new TypeError("allOf must be an array");return e.fullPath=r,e}let a=!1,s=o.value;if(i.forEach((e=>{s&&(s=s[e])})),s=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?iy(Object(r),!0).forEach((function(t){ay(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):iy(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},s),(0,ny.default)(s))return;delete s.allOf;const l=[];return l.push(n.replace(i,{})),e.forEach(((e,t)=>{if(!n.isObject(e)){if(a)return null;a=!0;const e=new TypeError("Elements in allOf must be objects");return e.fullPath=r,l.push(e)}l.push(n.mergeDeep(i,e));const o=r.slice(0,-1),s=(0,oy.generateAbsoluteRefPatches)(e,o,{getBaseUrlForNodePath:e=>n.getContext([...r,t,...e]).baseDoc,specmap:n});l.push(...s)})),l.push(n.mergeDeep(i,s)),s.$$ref||l.push(n.remove([].concat(i,"$$ref"))),l}};Vm.default=sy;var ly={__esModule:!0,default:void 0},cy=function(e){return e&&e.__esModule?e:{default:e}}(dd);function py(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function uy(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var dy={key:"parameters",plugin:(e,t,r,n)=>{if(Array.isArray(e)&&e.length){const t=Object.assign([],e),o=r.slice(0,-1),i=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?py(Object(r),!0).forEach((function(t){uy(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):py(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},cy.default.getIn(n.spec,o));return e.forEach(((e,o)=>{try{t[o].default=n.parameterMacro(i,e)}catch(e){const t=new Error(e);return t.fullPath=r,t}})),cy.default.replace(r,t)}return cy.default.replace(r,e)}};ly.default=dy;var hy={__esModule:!0,default:void 0},fy=function(e){return e&&e.__esModule?e:{default:e}}(dd);function my(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function yy(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var gy={key:"properties",plugin:(e,t,r,n)=>{const o=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?my(Object(r),!0).forEach((function(t){yy(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):my(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},e);for(const t in e)try{o[t].default=n.modelPropertyMacro(o[t])}catch(e){const t=new Error(e);return t.fullPath=r,t}return fy.default.replace(r,o)}};hy.default=gy;var vy={};function by(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function xy(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?by(Object(r),!0).forEach((function(t){wy(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):by(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function wy(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function $y(e,t){return Ay({children:{}},e,t)}function Ay(e,t,r){return e.value=t||{},e.protoValue=r?xy(xy({},r.protoValue),e.value):e.value,Object.keys(e.children).forEach((t=>{const r=e.children[t];e.children[t]=Ay(r,r.value,e)})),e}vy.__esModule=!0,vy.default=void 0,vy.default=class{constructor(e){this.root=$y(e||{})}set(e,t){const r=this.getParent(e,!0);if(!r)return void Ay(this.root,t,null);const n=e[e.length-1],{children:o}=r;o[n]?Ay(o[n],t,r):o[n]=$y(t,r)}get(e){if((e=e||[]).length<1)return this.root.value;let t,r,n=this.root;for(let o=0;o<e.length&&(r=e[o],t=n.children,t[r]);o+=1)n=t[r];return n&&n.protoValue}getParent(e,t){return!e||e.length<1?null:e.length<2?this.root:e.slice(0,-1).reduce(((e,r)=>{if(!e)return e;const{children:n}=e;return!n[r]&&t&&(n[r]=$y(null,e)),n[r]}),this.root)}},Ep.__esModule=!0,Ep.default=function(e){return new Py(e).dispatch()},Ep.plugins=Ep.SpecMap=void 0;var ky=_y(ud),Sy=_y((function(){})),Ey=_y(dd),Dy=_y(Gf),Oy=_y(Vm),Cy=_y(ly),jy=_y(hy),Ty=_y(vy);function _y(e){return e&&e.__esModule?e:{default:e}}function Fy(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function By(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?Fy(Object(r),!0).forEach((function(t){Iy(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Fy(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function Iy(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}class Py{static getPluginName(e){return e.pluginName}static getPatchesOfType(e,t){return e.filter(t)}constructor(e){Object.assign(this,{spec:"",debugLevel:"info",plugins:[],pluginHistory:{},errors:[],mutations:[],promisedPatches:[],state:{},patches:[],context:{},contextTree:new Ty.default,showDebug:!1,allPatches:[],pluginProp:"specMap",libMethods:Object.assign(Object.create(this),Ey.default,{getInstance:()=>this}),allowMetaPatches:!1},e),this.get=this._get.bind(this),this.getContext=this._getContext.bind(this),this.hasRun=this._hasRun.bind(this),this.wrappedPlugins=this.plugins.map(this.wrapPlugin.bind(this)).filter(Ey.default.isFunction),this.patches.push(Ey.default.add([],this.spec)),this.patches.push(Ey.default.context([],this.context)),this.updatePatches(this.patches)}debug(e,...t){this.debugLevel===e&&console.log(...t)}verbose(e,...t){"verbose"===this.debugLevel&&console.log(`[${e}]   `,...t)}wrapPlugin(e,t){const{pathDiscriminator:r}=this;let n,o=null;return e[this.pluginProp]?(o=e,n=e[this.pluginProp]):Ey.default.isFunction(e)?n=e:Ey.default.isObject(e)&&(n=function(e){const t=(e,t)=>!Array.isArray(e)||e.every(((e,r)=>e===t[r]));return function*(n,o){const i={};for(const e of n.filter(Ey.default.isAdditiveMutation))yield*a(e.value,e.path,e);function*a(n,s,l){if(Ey.default.isObject(n)){const c=s.length-1,p=s[c],u=s.indexOf("properties"),d="properties"===p&&c===u,h=o.allowMetaPatches&&i[n.$$ref];for(const c of Object.keys(n)){const p=n[c],u=s.concat(c),f=Ey.default.isObject(p),m=n.$$ref;if(h||f&&(o.allowMetaPatches&&m&&(i[m]=!0),yield*a(p,u,l)),!d&&c===e.key){const n=t(r,s);r&&!n||(yield e.plugin(p,c,u,o,l))}}}else e.key===s[s.length-1]&&(yield e.plugin(n,e.key,s,o))}}}(e)),Object.assign(n.bind(o),{pluginName:e.name||t,isGenerator:Ey.default.isGenerator(n)})}nextPlugin(){return(0,ky.default)(this.wrappedPlugins,(e=>this.getMutationsForPlugin(e).length>0))}nextPromisedPatch(){if(this.promisedPatches.length>0)return Promise.race(this.promisedPatches.map((e=>e.value)))}getPluginHistory(e){const t=this.constructor.getPluginName(e);return this.pluginHistory[t]||[]}getPluginRunCount(e){return this.getPluginHistory(e).length}getPluginHistoryTip(e){const t=this.getPluginHistory(e);return t&&t[t.length-1]||{}}getPluginMutationIndex(e){const t=this.getPluginHistoryTip(e).mutationIndex;return"number"!=typeof t?-1:t}updatePluginHistory(e,t){const r=this.constructor.getPluginName(e);this.pluginHistory[r]=this.pluginHistory[r]||[],this.pluginHistory[r].push(t)}updatePatches(e){Ey.default.normalizeArray(e).forEach((e=>{if(e instanceof Error)this.errors.push(e);else try{if(!Ey.default.isObject(e))return void this.debug("updatePatches","Got a non-object patch",e);if(this.showDebug&&this.allPatches.push(e),Ey.default.isPromise(e.value))return this.promisedPatches.push(e),void this.promisedPatchThen(e);if(Ey.default.isContextPatch(e))return void this.setContext(e.path,e.value);if(Ey.default.isMutation(e))return void this.updateMutations(e)}catch(e){console.error(e),this.errors.push(e)}}))}updateMutations(e){"object"==typeof e.value&&!Array.isArray(e.value)&&this.allowMetaPatches&&(e.value=By({},e.value));const t=Ey.default.applyPatch(this.state,e,{allowMetaPatches:this.allowMetaPatches});t&&(this.mutations.push(e),this.state=t)}removePromisedPatch(e){const t=this.promisedPatches.indexOf(e);t<0?this.debug("Tried to remove a promisedPatch that isn't there!"):this.promisedPatches.splice(t,1)}promisedPatchThen(e){return e.value=e.value.then((t=>{const r=By(By({},e),{},{value:t});this.removePromisedPatch(e),this.updatePatches(r)})).catch((t=>{this.removePromisedPatch(e),this.updatePatches(t)})),e.value}getMutations(e,t){return e=e||0,"number"!=typeof t&&(t=this.mutations.length),this.mutations.slice(e,t)}getCurrentMutations(){return this.getMutationsForPlugin(this.getCurrentPlugin())}getMutationsForPlugin(e){const t=this.getPluginMutationIndex(e);return this.getMutations(t+1)}getCurrentPlugin(){return this.currentPlugin}getLib(){return this.libMethods}_get(e){return Ey.default.getIn(this.state,e)}_getContext(e){return this.contextTree.get(e)}setContext(e,t){return this.contextTree.set(e,t)}_hasRun(e){return this.getPluginRunCount(this.getCurrentPlugin())>(e||0)}dispatch(){const e=this,t=this.nextPlugin();if(!t){const e=this.nextPromisedPatch();if(e)return e.then((()=>this.dispatch())).catch((()=>this.dispatch()));const t={spec:this.state,errors:this.errors};return this.showDebug&&(t.patches=this.allPatches),Promise.resolve(t)}if(e.pluginCount=e.pluginCount||{},e.pluginCount[t]=(e.pluginCount[t]||0)+1,e.pluginCount[t]>100)return Promise.resolve({spec:e.state,errors:e.errors.concat(new Error("We've reached a hard limit of 100 plugin runs"))});if(t!==this.currentPlugin&&this.promisedPatches.length){const e=this.promisedPatches.map((e=>e.value));return Promise.all(e.map((e=>e.then(Sy.default,Sy.default)))).then((()=>this.dispatch()))}return function(){e.currentPlugin=t;const n=e.getCurrentMutations(),o=e.mutations.length-1;try{if(t.isGenerator)for(const o of t(n,e.getLib()))r(o);else r(t(n,e.getLib()))}catch(e){console.error(e),r([Object.assign(Object.create(e),{plugin:t})])}finally{e.updatePluginHistory(t,{mutationIndex:o})}return e.dispatch()}();function r(r){r&&(r=Ey.default.fullyNormalizeArray(r),e.updatePatches(r,t))}}}Ep.SpecMap=Py;const Ry={refs:Dy.default,allOf:Oy.default,parameters:Cy.default,properties:jy.default};Ep.plugins=Ry;var Uy={__esModule:!0,isOAS3:function(e){const t=e.openapi;return!!t&&(0,Ny.default)(t,"3")},isSwagger2:function(e){const t=e.swagger;return!!t&&(0,Ny.default)(t,"2")}};Uy.opId=Hy,Uy.idFromPathMethod=Wy,Uy.legacyIdFromPathMethod=Vy,Uy.getOperationRaw=function(e,t){return e&&e.paths?Gy(e,(({pathName:e,method:r,operation:n})=>{if(!n||"object"!=typeof n)return!1;const o=n.operationId;return[Hy(n,e,r),Vy(e,r),o].some((e=>e&&e===t))})):null},Uy.findOperation=Gy,Uy.eachOperation=Ky,Uy.normalizeSwagger=function(e){const{spec:t}=e,{paths:r}=t,n={};if(!r||t.$$normalized)return e;for(const e in r){const o=r[e];if(!(0,Ly.default)(o))continue;const i=o.parameters;for(const r in o){const a=o[r];if(!(0,Ly.default)(a))continue;const s=Hy(a,e,r);if(s){n[s]?n[s].push(a):n[s]=[a];const e=n[s];if(e.length>1)e.forEach(((e,t)=>{e.__originalOperationId=e.__originalOperationId||e.operationId,e.operationId=`${s}${t+1}`}));else if(void 0!==a.operationId){const t=e[0];t.__originalOperationId=t.__originalOperationId||a.operationId,t.operationId=s}}if("parameters"!==r){const e=[],r={};for(const n in t)"produces"!==n&&"consumes"!==n&&"security"!==n||(r[n]=t[n],e.push(r));if(i&&(r.parameters=i,e.push(r)),e.length)for(const t of e)for(const e in t)if(a[e]){if("parameters"===e)for(const r of t[e])a[e].some((e=>e.name&&e.name===r.name||e.$ref&&e.$ref===r.$ref||e.$$ref&&e.$$ref===r.$$ref||e===r))||a[e].push(r)}else a[e]=t[e]}}}return t.$$normalized=!0,e};var Ly=zy(Ke),Ny=zy(mn);function zy(e){return e&&e.__esModule?e:{default:e}}const qy=e=>String.prototype.toLowerCase.call(e),My=e=>e.replace(/[^\w]/gi,"_");function Hy(e,t,r="",{v2OperationIdCompatibilityMode:n}={}){return e&&"object"==typeof e?(e.operationId||"").replace(/\s/g,"").length?My(e.operationId):Wy(t,r,{v2OperationIdCompatibilityMode:n}):null}function Wy(e,t,{v2OperationIdCompatibilityMode:r}={}){if(r){let r=`${t.toLowerCase()}_${e}`.replace(/[\s!@#$%^&*()_+=[{\]};:<>|./?,\\'""-]/g,"_");return r=r||`${e.substring(1)}_${t}`,r.replace(/((_){2,})/g,"_").replace(/^(_)*/g,"").replace(/([_])*$/g,"")}return`${qy(t)}${My(e)}`}function Vy(e,t){return`${qy(t)}-${e}`}function Gy(e,t){return Ky(e,t,!0)||null}function Ky(e,t,r){if(!e||"object"!=typeof e||!e.paths||"object"!=typeof e.paths)return null;const{paths:n}=e;for(const o in n)for(const i in n[o]){if("PARAMETERS"===i.toUpperCase())continue;const a=n[o][i];if(!a||"object"!=typeof a)continue;const s={spec:e,pathName:o,method:i.toUpperCase(),operation:a},l=t(s);if(r&&l)return s}}Sp.__esModule=!0,Sp.makeFetchJSON=eg,Sp.clearCache=function(){Jy.plugins.refs.clearCache()},Sp.default=function(e){const{fetch:t,spec:r,url:n,mode:o,allowMetaPatches:i=!0,pathDiscriminator:a,modelPropertyMacro:s,parameterMacro:l,requestInterceptor:c,responseInterceptor:p,skipNormalization:u,useCircularStructures:d}=e;let{http:h,baseDoc:f}=e;return f=f||n,h=t||h||Yy.default,r?m(r):eg(h,{requestInterceptor:c,responseInterceptor:p})(f).then(m);function m(e){f&&(Jy.plugins.refs.docCache[f]=e),Jy.plugins.refs.fetchJSON=eg(h,{requestInterceptor:c,responseInterceptor:p});const t=[Jy.plugins.refs];return"function"==typeof l&&t.push(Jy.plugins.parameters),"function"==typeof s&&t.push(Jy.plugins.properties),"strict"!==o&&t.push(Jy.plugins.allOf),(0,Jy.default)({spec:e,context:{baseDoc:f},plugins:t,allowMetaPatches:i,pathDiscriminator:a,parameterMacro:l,modelPropertyMacro:s,useCircularStructures:d}).then(u?async e=>e:Zy.normalizeSwagger)}};var Yy=function(e){return e&&e.__esModule?e:{default:e}}(qn),Jy=function(e,t){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var r=Xy(t);if(r&&r.has(e))return r.get(e);var n={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if("default"!==i&&Object.prototype.hasOwnProperty.call(e,i)){var a=o?Object.getOwnPropertyDescriptor(e,i):null;a&&(a.get||a.set)?Object.defineProperty(n,i,a):n[i]=e[i]}return n.default=e,r&&r.set(e,n),n}(Ep),Zy=Uy,Qy=bm;function Xy(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(Xy=function(e){return e?r:t})(e)}function eg(e,t={}){const{requestInterceptor:r,responseInterceptor:n}=t,o=e.withCredentials?"include":"same-origin";return t=>e({url:t,loadSpec:!0,requestInterceptor:r,responseInterceptor:n,headers:{Accept:Qy.ACCEPT_HEADER_VALUE_FOR_DOCUMENTS},credentials:o}).then((e=>e.body))}var tg={__esModule:!0,default:async function(e,t,r={}){const{returnEntireTree:n,baseDoc:o,requestInterceptor:i,responseInterceptor:a,parameterMacro:s,modelPropertyMacro:l,useCircularStructures:c}=r,p={pathDiscriminator:t,baseDoc:o,requestInterceptor:i,responseInterceptor:a,parameterMacro:s,modelPropertyMacro:l,useCircularStructures:c},{spec:u}=(0,og.normalizeSwagger)({spec:e}),d=await(0,ng.default)(sg(sg({},p),{},{spec:u,allowMetaPatches:!0,skipNormalization:!0}));return!n&&Array.isArray(t)&&t.length&&(d.spec=(0,rg.default)(d.spec,t)||null),d}},rg=ig(Mu),ng=ig(Sp),og=Uy;function ig(e){return e&&e.__esModule?e:{default:e}}function ag(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function sg(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ag(Object(r),!0).forEach((function(t){lg(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ag(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function lg(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var cg={__esModule:!0};cg.makeExecute=gg,cg.makeApisTagOperationsOperationExecute=function(e={}){const t=yg.makeExecute(e),r=yg.mapTagOperations({v2OperationIdCompatibilityMode:e.v2OperationIdCompatibilityMode,spec:e.spec,cb:t}),n={};for(const e in r){n[e]={operations:{}};for(const t in r[e])n[e].operations[t]={execute:r[e][t]}}return{apis:n}},cg.makeApisTagOperation=function(e={}){const t=yg.makeExecute(e);return{apis:yg.mapTagOperations({v2OperationIdCompatibilityMode:e.v2OperationIdCompatibilityMode,spec:e.spec,cb:t})}},cg.mapTagOperations=vg,cg.self=void 0;var pg=function(e){return e&&e.__esModule?e:{default:e}}(Nc),ug=Uy;function dg(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function hg(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?dg(Object(r),!0).forEach((function(t){fg(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):dg(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function fg(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}const mg=()=>null,yg={mapTagOperations:vg,makeExecute:gg};function gg(e={}){return({pathName:t,method:r,operationId:n})=>(o,i={})=>e.execute(hg(hg({spec:e.spec},(0,pg.default)(e,"requestInterceptor","responseInterceptor","userFetch")),{},{pathName:t,method:r,parameters:o,operationId:n},i))}function vg({spec:e,cb:t=mg,defaultTag:r="default",v2OperationIdCompatibilityMode:n}){const o={},i={};return(0,ug.eachOperation)(e,(({pathName:a,method:s,operation:l})=>{var c;(l.tags?(c=l.tags,Array.isArray(c)?c:[c]):[r]).forEach((r=>{if("string"!=typeof r)return;i[r]=i[r]||{};const c=i[r],p=(0,ug.opId)(l,a,s,{v2OperationIdCompatibilityMode:n}),u=t({spec:e,pathName:a,method:s,operation:l,operationId:p});if(o[p])o[p]+=1,c[`${p}${o[p]}`]=u;else if(void 0!==c[p]){const e=o[p]||1;o[p]=e+1,c[`${p}${o[p]}`]=u;const t=c[p];delete c[p],c[`${p}${e}`]=t}else c[p]=u}))})),i}cg.self=yg;var bg={},xg=Ge,wg=hh,$g=Yt,Ag=Function.prototype,kg=Object.prototype,Sg=Ag.toString,Eg=kg.hasOwnProperty,Dg=Sg.call(Object),Og=function(e){if(!$g(e)||"[object Object]"!=xg(e))return!1;var t=wg(e);if(null===t)return!0;var r=Eg.call(t,"constructor")&&t.constructor;return"function"==typeof r&&r instanceof r&&Sg.call(r)==Dg},Cg={parse:function(e,t){if("string"!=typeof e)throw new TypeError("argument str must be a string");for(var r={},n=t||{},o=e.split(_g),i=n.decode||jg,a=0;a<o.length;a++){var s=o[a],l=s.indexOf("=");if(!(l<0)){var c=s.substr(0,l).trim(),p=s.substr(++l,s.length).trim();'"'==p[0]&&(p=p.slice(1,-1)),null==r[c]&&(r[c]=Bg(p,i))}}return r},serialize:function(e,t,r){var n=r||{},o=n.encode||Tg;if("function"!=typeof o)throw new TypeError("option encode is invalid");if(!Fg.test(e))throw new TypeError("argument name is invalid");var i=o(t);if(i&&!Fg.test(i))throw new TypeError("argument val is invalid");var a=e+"="+i;if(null!=n.maxAge){var s=n.maxAge-0;if(isNaN(s)||!isFinite(s))throw new TypeError("option maxAge is invalid");a+="; Max-Age="+Math.floor(s)}if(n.domain){if(!Fg.test(n.domain))throw new TypeError("option domain is invalid");a+="; Domain="+n.domain}if(n.path){if(!Fg.test(n.path))throw new TypeError("option path is invalid");a+="; Path="+n.path}if(n.expires){if("function"!=typeof n.expires.toUTCString)throw new TypeError("option expires is invalid");a+="; Expires="+n.expires.toUTCString()}if(n.httpOnly&&(a+="; HttpOnly"),n.secure&&(a+="; Secure"),n.sameSite)switch("string"==typeof n.sameSite?n.sameSite.toLowerCase():n.sameSite){case!0:a+="; SameSite=Strict";break;case"lax":a+="; SameSite=Lax";break;case"strict":a+="; SameSite=Strict";break;case"none":a+="; SameSite=None";break;default:throw new TypeError("option sameSite is invalid")}return a}},jg=decodeURIComponent,Tg=encodeURIComponent,_g=/; */,Fg=/^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;function Bg(e,t){try{return t(e)}catch(t){return e}}var Ig={__esModule:!0,default:void 0},Pg={body:function({req:e,value:t}){e.body=t},header:function({req:e,parameter:t,value:r}){e.headers=e.headers||{},void 0!==r&&(e.headers[t.name]=r)},query:function({req:e,value:t,parameter:r}){if(e.query=e.query||{},!1===t&&"boolean"===r.type&&(t="false"),0===t&&["number","integer"].indexOf(r.type)>-1&&(t="0"),t)e.query[r.name]={collectionFormat:r.collectionFormat,value:t};else if(r.allowEmptyValue&&void 0!==t){const t=r.name;e.query[t]=e.query[t]||{},e.query[t].allowEmptyValue=!0}},path:function({req:e,value:t,parameter:r}){e.url=e.url.split(`{${r.name}}`).join(encodeURIComponent(t))},formData:function({req:e,value:t,parameter:r}){(t||r.allowEmptyValue)&&(e.form=e.form||{},e.form[r.name]={value:t,allowEmptyValue:r.allowEmptyValue,collectionFormat:r.collectionFormat})}};Ig.default=Pg;var Rg={},Ug={__esModule:!0,default:function(e,t){return t.includes("application/json")?"string"==typeof e?e:JSON.stringify(e):e.toString()}};Rg.__esModule=!0,Rg.path=function({req:e,value:t,parameter:r}){const{name:n,style:o,explode:i,content:a}=r;if(a){const r=Object.keys(a)[0];return void(e.url=e.url.split(`{${n}}`).join((0,Ng.encodeDisallowedCharacters)((0,zg.default)(t,r),{escape:!0})))}const s=(0,Ng.default)({key:r.name,value:t,style:o||"simple",explode:i||!1,escape:!0});e.url=e.url.split(`{${n}}`).join(s)},Rg.query=function({req:e,value:t,parameter:r}){if(e.query=e.query||{},r.content){const n=Object.keys(r.content)[0];e.query[r.name]=(0,zg.default)(t,n)}else if(!1===t&&(t="false"),0===t&&(t="0"),t)e.query[r.name]={value:t,serializationOption:(0,Lg.default)(r,["style","explode","allowReserved"])};else if(r.allowEmptyValue&&void 0!==t){const t=r.name;e.query[t]=e.query[t]||{},e.query[t].allowEmptyValue=!0}},Rg.header=function({req:e,parameter:t,value:r}){if(e.headers=e.headers||{},!(Hg.indexOf(t.name.toLowerCase())>-1))if(t.content){const n=Object.keys(t.content)[0];e.headers[t.name]=(0,zg.default)(r,n)}else void 0!==r&&(e.headers[t.name]=(0,Ng.default)({key:t.name,value:r,style:t.style||"simple",explode:void 0!==t.explode&&t.explode,escape:!1}))},Rg.cookie=function({req:e,parameter:t,value:r}){e.headers=e.headers||{};const n=typeof r;if(t.content){const n=Object.keys(t.content)[0];e.headers.Cookie=`${t.name}=${(0,zg.default)(r,n)}`}else if("undefined"!==n){const o="object"===n&&!Array.isArray(r)&&t.explode?"":`${t.name}=`;e.headers.Cookie=o+(0,Ng.default)({key:t.name,value:r,escape:!1,style:t.style||"form",explode:void 0!==t.explode&&t.explode})}};var Lg=Mg(Nc),Ng=function(e,t){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var r=qg(t);if(r&&r.has(e))return r.get(e);var n={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if("default"!==i&&Object.prototype.hasOwnProperty.call(e,i)){var a=o?Object.getOwnPropertyDescriptor(e,i):null;a&&(a.get||a.set)?Object.defineProperty(n,i,a):n[i]=e[i]}return n.default=e,r&&r.set(e,n),n}(ep),zg=Mg(Ug);function qg(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(qg=function(e){return e?r:t})(e)}function Mg(e){return e&&e.__esModule?e:{default:e}}const Hg=["accept","authorization","content-type"];var Wg={},Vg={exports:({},function(e){return(e instanceof Ae?e:Ae.from(e.toString(),"binary")).toString("base64")})};Wg.__esModule=!0,Wg.default=function(e,t){const{operation:r,requestBody:n,securities:o,spec:i,attachContentTypeForEmptyPayload:a}=e;let{requestContentType:s}=e;t=Qg({request:t,securities:o,operation:r,spec:i});const l=r.requestBody||{},c=Object.keys(l.content||{}),p=s&&c.indexOf(s)>-1;if(n||a){if(s&&p)t.headers["Content-Type"]=s;else if(!s){const e=c[0];e&&(t.headers["Content-Type"]=e,s=e)}}else s&&p&&(t.headers["Content-Type"]=s);if(!e.responseContentType&&r.responses){const e=Object.entries(r.responses).filter((([e,t])=>{const r=parseInt(e,10);return r>=200&&r<300&&(0,Yg.default)(t.content)})).reduce(((e,[,t])=>e.concat(Object.keys(t.content))),[]);e.length>0&&(t.headers.accept=e.join(", "))}if(n)if(s){if(c.indexOf(s)>-1)if("application/x-www-form-urlencoded"===s||"multipart/form-data"===s)if("object"==typeof n){const e=(l.content[s]||{}).encoding||{};t.form={},Object.keys(n).forEach((r=>{t.form[r]={value:n[r],encoding:e[r]||{}}}))}else t.form=n;else t.body=n}else t.body=n;return t},Wg.applySecurities=Qg;var Gg=Zg(qr),Kg=Zg(Mu),Yg=Zg(Og),Jg=Zg(Vg.exports);function Zg(e){return e&&e.__esModule?e:{default:e}}function Qg({request:e,securities:t={},operation:r={},spec:n}){const o=(0,Gg.default)({},e),{authorized:i={}}=t,a=r.security||n.security||[],s=i&&!!Object.keys(i).length,l=(0,Kg.default)(n,["components","securitySchemes"])||{};return o.headers=o.headers||{},o.query=o.query||{},Object.keys(t).length&&s&&a&&(!Array.isArray(r.security)||r.security.length)?(a.forEach((e=>{Object.keys(e).forEach((e=>{const t=i[e],r=l[e];if(!t)return;const n=t.value||t,{type:a}=r;if(t)if("apiKey"===a)"query"===r.in&&(o.query[r.name]=n),"header"===r.in&&(o.headers[r.name]=n),"cookie"===r.in&&(o.cookies[r.name]=n);else if("http"===a){if(/^basic$/i.test(r.scheme)){const e=n.username||"",t=n.password||"",r=(0,Jg.default)(`${e}:${t}`);o.headers.Authorization=`Basic ${r}`}/^bearer$/i.test(r.scheme)&&(o.headers.Authorization=`Bearer ${n}`)}else if("oauth2"===a||"openIdConnect"===a){const e=t.token||{},n=e[r["x-tokenName"]||"access_token"];let i=e.token_type;i&&"bearer"!==i.toLowerCase()||(i="Bearer"),o.headers.Authorization=`${i} ${n}`}}))})),o):e}var Xg={__esModule:!0,default:function(e,t){const{spec:r,operation:n,securities:o,requestContentType:i,responseContentType:a,attachContentTypeForEmptyPayload:s}=e;if((t=nv({request:t,securities:o,operation:n,spec:r})).body||t.form||s)i?t.headers["Content-Type"]=i:Array.isArray(n.consumes)?[t.headers["Content-Type"]]=n.consumes:Array.isArray(r.consumes)?[t.headers["Content-Type"]]=r.consumes:n.parameters&&n.parameters.filter((e=>"file"===e.type)).length?t.headers["Content-Type"]="multipart/form-data":n.parameters&&n.parameters.filter((e=>"formData"===e.in)).length&&(t.headers["Content-Type"]="application/x-www-form-urlencoded");else if(i){const e=n.parameters&&n.parameters.filter((e=>"body"===e.in)).length>0,r=n.parameters&&n.parameters.filter((e=>"formData"===e.in)).length>0;(e||r)&&(t.headers["Content-Type"]=i)}return!a&&Array.isArray(n.produces)&&n.produces.length>0&&(t.headers.accept=n.produces.join(", ")),t}};Xg.applySecurities=nv;var ev=rv(Vg.exports),tv=rv(qr);function rv(e){return e&&e.__esModule?e:{default:e}}function nv({request:e,securities:t={},operation:r={},spec:n}){const o=(0,tv.default)({},e),{authorized:i={},specSecurity:a=[]}=t,s=r.security||a,l=i&&!!Object.keys(i).length,c=n.securityDefinitions;return o.headers=o.headers||{},o.query=o.query||{},Object.keys(t).length&&l&&s&&(!Array.isArray(r.security)||r.security.length)?(s.forEach((e=>{Object.keys(e).forEach((e=>{const t=i[e];if(!t)return;const{token:r}=t,n=t.value||t,a=c[e],{type:s}=a,l=a["x-tokenName"]||"access_token",p=r&&r[l];let u=r&&r.token_type;if(t)if("apiKey"===s){const e="query"===a.in?"query":"headers";o[e]=o[e]||{},o[e][a.name]=n}else if("basic"===s)if(n.header)o.headers.authorization=n.header;else{const e=n.username||"",t=n.password||"";n.base64=(0,ev.default)(`${e}:${t}`),o.headers.authorization=`Basic ${n.base64}`}else"oauth2"===s&&p&&(u=u&&"bearer"!==u.toLowerCase()?u:"Bearer",o.headers.authorization=`${u} ${p}`)}))})),o):e}bg.__esModule=!0,bg.execute=function(e){let{http:t,fetch:r,spec:n,operationId:o,pathName:i,method:a,parameters:s,securities:l}=e,c=function(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}(e,yv);const p=t||r||cv.default;i&&a&&!o&&(o=(0,mv.legacyIdFromPathMethod)(i,a));const u=Sv.buildRequest(wv({spec:n,operationId:o,parameters:s,securities:l,http:p},c));return u.body&&((0,iv.default)(u.body)||(0,av.default)(u.body))&&(u.body=JSON.stringify(u.body)),p(u)},bg.buildRequest=Ev,bg.baseUrl=Ov,bg.self=void 0;var ov=bv(Mu),iv=bv(Og),av=bv(or),sv=bv(yn),lv=bv(Cg),cv=vv(qn),pv=bv(Yf),uv=bv(Ig),dv=vv(Rg),hv=bv(Wg),fv=bv(Xg),mv=Uy;const yv=["http","fetch","spec","operationId","pathName","method","parameters","securities"];function gv(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(gv=function(e){return e?r:t})(e)}function vv(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var r=gv(t);if(r&&r.has(e))return r.get(e);var n={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if("default"!==i&&Object.prototype.hasOwnProperty.call(e,i)){var a=o?Object.getOwnPropertyDescriptor(e,i):null;a&&(a.get||a.set)?Object.defineProperty(n,i,a):n[i]=e[i]}return n.default=e,r&&r.set(e,n),n}function bv(e){return e&&e.__esModule?e:{default:e}}function xv(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function wv(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?xv(Object(r),!0).forEach((function(t){$v(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):xv(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function $v(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}const Av=e=>Array.isArray(e)?e:[],kv=(0,pv.default)("OperationNotFoundError",(function(e,t,r){this.originalError=r,Object.assign(this,t||{})})),Sv={buildRequest:Ev};function Ev(e){const{spec:t,operationId:r,responseContentType:n,scheme:o,requestInterceptor:i,responseInterceptor:a,contextUrl:s,userFetch:l,server:c,serverVariables:p,http:u}=e;let{parameters:d,parameterBuilders:h}=e;const f=(0,mv.isOAS3)(t);h||(h=f?dv:uv.default);let m={url:"",credentials:u&&u.withCredentials?"include":"same-origin",headers:{},cookies:{}};i&&(m.requestInterceptor=i),a&&(m.responseInterceptor=a),l&&(m.userFetch=l);const y=(0,mv.getOperationRaw)(t,r);if(!y)throw new kv(`Operation ${r} not found`);const{operation:g={},method:v,pathName:b}=y;if(m.url+=Ov({spec:t,scheme:o,contextUrl:s,server:c,serverVariables:p,pathName:b,method:v}),!r)return delete m.cookies,m;m.url+=b,m.method=`${v}`.toUpperCase(),d=d||{};const x=t.paths[b]||{};n&&(m.headers.accept=n);const w=(e=>{const t={};e.forEach((e=>{t[e.in]||(t[e.in]={}),t[e.in][e.name]=e}));const r=[];return Object.keys(t).forEach((e=>{Object.keys(t[e]).forEach((n=>{r.push(t[e][n])}))})),r})([].concat(Av(g.parameters)).concat(Av(x.parameters)));w.forEach((e=>{const r=h[e.in];let n;if("body"===e.in&&e.schema&&e.schema.properties&&(n=d),n=e&&e.name&&d[e.name],void 0===n?n=e&&e.name&&d[`${e.in}.${e.name}`]:((e,t)=>t.filter((t=>t.name===e)))(e.name,w).length>1&&console.warn(`Parameter '${e.name}' is ambiguous because the defined spec has more than one parameter with the name: '${e.name}' and the passed-in parameter values did not define an 'in' value.`),null!==n){if(void 0!==e.default&&void 0===n&&(n=e.default),void 0===n&&e.required&&!e.allowEmptyValue)throw new Error(`Required parameter ${e.name} is not provided`);if(f&&e.schema&&"object"===e.schema.type&&"string"==typeof n)try{n=JSON.parse(n)}catch(e){throw new Error("Could not parse object parameter value string as JSON")}r&&r({req:m,parameter:e,value:n,operation:g,spec:t})}}));const $=wv(wv({},e),{},{operation:g});if(m=f?(0,hv.default)($,m):(0,fv.default)($,m),m.cookies&&Object.keys(m.cookies).length){const e=Object.keys(m.cookies).reduce(((e,t)=>{const r=m.cookies[t];return e+(e?"&":"")+lv.default.serialize(t,r)}),"");m.headers.Cookie=e}return m.cookies&&delete m.cookies,(0,cv.mergeInQueryOrForm)(m),m}bg.self=Sv;const Dv=e=>e?e.replace(/\W/g,""):null;function Ov(e){return(0,mv.isOAS3)(e.spec)?function({spec:e,pathName:t,method:r,server:n,contextUrl:o,serverVariables:i={}}){const a=(0,ov.default)(e,["paths",t,(r||"").toLowerCase(),"servers"])||(0,ov.default)(e,["paths",t,"servers"])||(0,ov.default)(e,["servers"]);let s="",l=null;if(n&&a&&a.length){const e=a.map((e=>e.url));e.indexOf(n)>-1&&(s=n,l=a[e.indexOf(n)])}return!s&&a&&a.length&&(s=a[0].url,[l]=a),s.indexOf("{")>-1&&function(e){const t=[],r=/{([^}]+)}/g;let n;for(;n=r.exec(e);)t.push(n[1]);return t}(s).forEach((e=>{if(l.variables&&l.variables[e]){const t=l.variables[e],r=i[e]||t.default,n=new RegExp(`{${e}}`,"g");s=s.replace(n,r)}})),function(e="",t=""){const r=e&&t?sv.default.parse(sv.default.resolve(t,e)):sv.default.parse(e),n=sv.default.parse(t),o=Dv(r.protocol)||Dv(n.protocol)||"",i=r.host||n.host,a=r.pathname||"";let s;return s=o&&i?`${o}://${i+a}`:a,"/"===s[s.length-1]?s.slice(0,-1):s}(s,o)}(e):function({spec:e,scheme:t,contextUrl:r=""}){const n=sv.default.parse(r),o=Array.isArray(e.schemes)?e.schemes[0]:null,i=t||o||Dv(n.protocol)||"http",a=e.host||n.host||"",s=e.basePath||"";let l;return l=i&&a?`${i}://${a+s}`:s,"/"===l[l.length-1]?l.slice(0,-1):l}(e)}var Cv=void 0,jv=zv(qr),Tv=zv(mn),_v=zv(yn),Fv=Nv(qn),Bv=Nv(Sp),Iv=zv(tg),Pv=cg,Rv=bg,Uv=Uy;function Lv(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(Lv=function(e){return e?r:t})(e)}function Nv(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var r=Lv(t);if(r&&r.has(e))return r.get(e);var n={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if("default"!==i&&Object.prototype.hasOwnProperty.call(e,i)){var a=o?Object.getOwnPropertyDescriptor(e,i):null;a&&(a.get||a.set)?Object.defineProperty(n,i,a):n[i]=e[i]}return n.default=e,r&&r.set(e,n),n}function zv(e){return e&&e.__esModule?e:{default:e}}function qv(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function Mv(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?qv(Object(r),!0).forEach((function(t){Hv(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):qv(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function Hv(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function Wv(e,t={}){if("string"==typeof e?t.url=e:t=e,!(this instanceof Wv))return new Wv(t);(0,jv.default)(this,t);const r=this.resolve().then((()=>(this.disableInterfaces||(0,jv.default)(this,Wv.makeApisTagOperation(this)),this)));return r.client=this,r}function Vv(e){const t=(e=e.replace("[]","Array")).split("/");return t[0]=t[0].replace(/[^A-Za-z0-9_\-\.]+|\s+/gm,"_"),t.join("/")}Wv.http=Fv.default,Wv.makeHttp=Fv.makeHttp.bind(null,Wv.http),Wv.resolve=Bv.default,Wv.resolveSubtree=Iv.default,Wv.execute=Rv.execute,Wv.serializeRes=Fv.serializeRes,Wv.serializeHeaders=Fv.serializeHeaders,Wv.clearCache=Bv.clearCache,Wv.makeApisTagOperation=Pv.makeApisTagOperation,Wv.buildRequest=Rv.buildRequest,Wv.helpers={opId:Uv.opId},Wv.getBaseUrl=Rv.baseUrl,Wv.prototype={http:Fv.default,execute(e){return this.applyDefaults(),Wv.execute(Mv({spec:this.spec,http:this.http,securities:{authorized:this.authorizations},contextUrl:"string"==typeof this.url?this.url:void 0,requestInterceptor:this.requestInterceptor||null,responseInterceptor:this.responseInterceptor||null},e))},resolve(e={}){return Wv.resolve(Mv({spec:this.spec,url:this.url,http:this.http||this.fetch,allowMetaPatches:this.allowMetaPatches,useCircularStructures:this.useCircularStructures,requestInterceptor:this.requestInterceptor||null,responseInterceptor:this.responseInterceptor||null,skipNormalization:this.skipNormalization||!1},e)).then((e=>(this.originalSpec=this.spec,this.spec=e.spec,this.errors=e.errors,this)))}},Wv.prototype.applyDefaults=function(){const{spec:e}=this,t=this.url;if(t&&(0,Tv.default)(t,"http")){const r=_v.default.parse(t);e.host||(e.host=r.host),e.schemes||(e.schemes=[r.protocol.replace(":","")]),e.basePath||(e.basePath="/")}},Cv=Wv;var Gv={parameterTypeProperties:["format","minimum","maximum","exclusiveMinimum","exclusiveMaximum","minLength","maxLength","multipleOf","minItems","maxItems","uniqueItems","minProperties","maxProperties","additionalProperties","pattern","enum","default"],arrayProperties:["items","minItems","maxItems","uniqueItems"],httpMethods:["get","post","put","delete","patch","head","options","trace"],uniqueOnly:function(e,t,r){return r.indexOf(e)===t},createHash:function(e){let t,r=0;if(0===e.length)return r;for(let n=0;n<e.length;n++)t=e.charCodeAt(n),r=(r<<5)-r+t,r|=0;return r},sanitise:Vv,sanitiseAll:function(e){return Vv(e.split("/").join("_"))},camelize:function(e){return e.toLowerCase().replace(/[-_ \/\.](.)/g,((e,t)=>t.toUpperCase()))},clone:function(e){return JSON.parse(JSON.stringify(e))},circularClone:function e(t,r){if(r||(r=new WeakMap),Object(t)!==t||t instanceof Function)return t;if(r.has(t))return r.get(t);let n;try{n=new t.constructor}catch(e){n=Object.create(Object.getPrototypeOf(t))}return r.set(t,n),Object.assign(n,...Object.keys(t).map((n=>({[n]:e(t[n],r)}))))}};function Kv(){return{depth:0,seen:new WeakMap,top:!0,combine:!1,allowRefSiblings:!1}}var Yv=function e(t,r,n,o){if(void 0===n.depth&&(n=Kv()),null==t)return t;if(n.combine&&(t.allOf&&Array.isArray(t.allOf)&&1===t.allOf.length&&delete(t={...t.allOf[0],...t}).allOf,t.anyOf&&Array.isArray(t.anyOf)&&1===t.anyOf.length&&delete(t={...t.anyOf[0],...t}).anyOf,t.oneOf&&Array.isArray(t.oneOf)&&1===t.oneOf.length&&delete(t={...t.oneOf[0],...t}).oneOf),o(t,r,n),n.seen.has(t))return t;if("object"==typeof t&&null!==t&&n.seen.set(t,!0),n.top=!1,n.depth++,void 0!==t.items&&(n.property="items",e(t.items,t,n,o)),t.additionalItems&&"object"==typeof t.additionalItems&&(n.property="additionalItems",e(t.additionalItems,t,n,o)),t.additionalProperties&&"object"==typeof t.additionalProperties&&(n.property="additionalProperties",e(t.additionalProperties,t,n,o)),t.properties)for(const r in t.properties){const i=t.properties[r];n.property=`properties/${r}`,e(i,t,n,o)}if(t.patternProperties)for(const r in t.patternProperties){const i=t.patternProperties[r];n.property=`patternProperties/${r}`,e(i,t,n,o)}if(t.allOf)for(const r in t.allOf){const i=t.allOf[r];n.property=`allOf/${r}`,e(i,t,n,o)}if(t.anyOf)for(const r in t.anyOf){const i=t.anyOf[r];n.property=`anyOf/${r}`,e(i,t,n,o)}if(t.oneOf)for(const r in t.oneOf){const i=t.oneOf[r];n.property=`oneOf/${r}`,e(i,t,n,o)}return t.not&&(n.property="not",e(t.not,t,n,o)),n.depth--,t};function Jv(e,t,r){if(t||(t={depth:0}),t.depth||(t={path:"#",depth:0,pkey:"",parent:{},payload:{},seen:new WeakMap,identity:!1,identityDetection:!1,...t}),"object"!=typeof e)return;const n=t.path;for(const o in e){if(t.key=o,t.path=`${t.path}/${encodeURIComponent(o)}`,t.identityPath=t.seen.get(e[o]),t.identity=void 0!==t.identityPath,e.hasOwnProperty(o)&&r(e,o,t),"object"==typeof e[o]&&!t.identity){t.identityDetection&&!Array.isArray(e[o])&&null!==e[o]&&t.seen.set(e[o],t.path);const n={};n.parent=e,n.path=t.path,n.depth=t.depth?t.depth+1:1,n.pkey=o,n.payload=t.payload,n.seen=t.seen,n.identity=!1,n.identityDetection=t.identityDetection,Jv(e[o],n,r)}t.path=n}}let Zv;function Qv(e,t){for(const r in e)r.startsWith("x-")&&!r.startsWith("x-s2o")&&(t[r]=e[r])}function Xv(e,t){Yv(e,{},{},((e,r)=>{!function(e){if(e["x-required"]&&Array.isArray(e["x-required"])&&(e.required||(e.required=[]),e.required=e.required.concat(e["x-required"]),delete e["x-required"]),e["x-anyOf"]&&(e.anyOf=e["x-anyOf"],delete e["x-anyOf"]),e["x-oneOf"]&&(e.oneOf=e["x-oneOf"],delete e["x-oneOf"]),e["x-not"]&&(e.not=e["x-not"],delete e["x-not"]),"boolean"==typeof e["x-nullable"]&&(e.nullable=e["x-nullable"],delete e["x-nullable"]),"object"==typeof e["x-discriminator"]&&"string"==typeof e["x-discriminator"].propertyName){e.discriminator=e["x-discriminator"],delete e["x-discriminator"];for(const t in e.discriminator.mapping){const r=e.discriminator.mapping[t];r.startsWith("#/definitions/")&&(e.discriminator.mapping[t]=r.replace("#/definitions/","#/components/schemas/"))}}}(e),function(e,t,r){if(e.nullable&&r.patches++,e.discriminator&&"string"==typeof e.discriminator&&(e.discriminator={propertyName:e.discriminator}),e.items&&Array.isArray(e.items)&&(0===e.items.length?e.items={}:1===e.items.length?e.items=e.items[0]:e.items={anyOf:e.items}),e.type&&Array.isArray(e.type)){if(r.patches++,r.warnings.push("(Patchable) schema type must not be an array"),0===e.type.length)delete e.type;else{e.oneOf||(e.oneOf=[]);for(const t of e.type){const r={};if("null"===t)e.nullable=!0;else{r.type=t;for(const t of Gv.arrayProperties)void 0!==e.prop&&(r[t]=e[t],delete e[t])}r.type&&e.oneOf.push(r)}delete e.type,0===e.oneOf.length?delete e.oneOf:e.oneOf.length<2&&(e.type=e.oneOf[0].type,Object.keys(e.oneOf[0]).length>1&&(r.patches++,r.warnings.push("Lost properties from oneOf")),delete e.oneOf)}e.type&&Array.isArray(e.type)&&1===e.type.length&&(e.type=e.type[0])}e.type&&"null"===e.type&&(delete e.type,e.nullable=!0),"array"!==e.type||e.items||(e.items={}),"file"===e.type&&(e.type="string",e.format="binary"),"boolean"==typeof e.required&&(e.required&&e.name&&(void 0===t.required&&(t.required=[]),Array.isArray(t.required)&&t.required.push(e.name)),delete e.required),e.xml&&"string"==typeof e.xml.namespace&&(e.xml.namespace||delete e.xml.namespace),e.allowEmptyValue&&(delete e.allowEmptyValue,r.patches++,r.warnings.push("(Patchable): deleted schema.allowEmptyValue"))}(e,r,t)}))}function eb(e){for(const t in e)for(const r in e[t]){const n=Gv.sanitise(r);r!==n&&(e[t][n]=e[t][r],delete e[t][r])}}function tb(e,t){if("basic"===e.type&&(e.type="http",e.scheme="basic"),"oauth2"===e.type){const r={};let n=e.flow;"application"===e.flow&&(n="clientCredentials"),"accessCode"===e.flow&&(n="authorizationCode"),"string"==typeof e.authorizationUrl&&(r.authorizationUrl=e.authorizationUrl.split("?")[0].trim()||"/"),"string"==typeof e.tokenUrl&&(r.tokenUrl=e.tokenUrl.split("?")[0].trim()||"/"),r.scopes=e.scopes||{},e.flows={},e.flows[n]=r,delete e.flow,delete e.authorizationUrl,delete e.tokenUrl,delete e.scopes,e.name&&(delete e.name,t.patches++,t.warnings.push("(Patchable) oauth2 securitySchemes should not have name property"))}}function rb(e){return e&&!e["x-s2o-delete"]}function nb(e,t){if(e.type&&!e.schema&&(e.schema={}),e.type&&(e.schema.type=e.type),e.items&&"array"!==e.items.type){if(e.items.collectionFormat!==e.collectionFormat)return t.errCount++,void t.errors.push({message:"Nested collectionFormats are not supported",pointer:"/.../responses/header"});delete e.items.collectionFormat}"array"===e.type?("ssv"===e.collectionFormat?(t.patches++,t.warnings.push("collectionFormat:ssv is no longer supported for headers")):"pipes"===e.collectionFormat?(t.patches++,t.warnings.push("collectionFormat:pipes is no longer supported for headers")):"multi"===e.collectionFormat?e.explode=!0:"tsv"===e.collectionFormat?(e["x-collectionFormat"]="tsv",t.patches++,t.warnings.push("collectionFormat:tsv is no longer supported")):e.style="simple",delete e.collectionFormat):e.collectionFormat&&(delete e.collectionFormat,t.patches++,t.warnings.push("(Patchable) collectionFormat is only applicable to header.type array")),delete e.type;for(const t of Gv.parameterTypeProperties)void 0!==e[t]&&(e.schema[t]=e[t],delete e[t]);for(const t of Gv.arrayProperties)void 0!==e[t]&&(e.schema[t]=e[t],delete e[t])}function ob(e,t,r,n,o,i,a){const s={};let l,c=!0;t&&t.consumes&&"string"==typeof t.consumes&&(t.consumes=[t.consumes],a.patches++,a.warnings.push("(Patchable) operation.consumes must be an array")),Array.isArray(i.consumes)||delete i.consumes;const p=((t?t.consumes:null)||i.consumes||[]).filter(Gv.uniqueOnly);if(e&&(e.name||e.in)){"boolean"==typeof e["x-deprecated"]&&(e.deprecated=e["x-deprecated"],delete e["x-deprecated"]),void 0!==e["x-example"]&&(e.example=e["x-example"],delete e["x-example"]),"body"===e.in||e.type||(e.type="string",a.patches++,a.warnings.push("(Patchable) parameter.type is mandatory for non-body parameters")),"file"===e.type&&(e["x-s2o-originalType"]=e.type,l=e.type),null===e.description&&delete e.description;let t=e.collectionFormat;if("array"!==e.type||t||(t="csv"),t&&("array"!==e.type&&(delete e.collectionFormat,a.patches++,a.warnings.push("(Patchable) collectionFormat is only applicable to param.type array")),"csv"!==t||"query"!==e.in&&"cookie"!==e.in||(e.style="form",e.explode=!1),"csv"!==t||"path"!==e.in&&"header"!==e.in||(e.style="simple"),"ssv"===t&&("query"===e.in?e.style="spaceDelimited":a.warnings.push(`${e.name} collectionFormat:ssv is no longer supported except for in:query parameters`)),"pipes"===t&&("query"===e.in?e.style="pipeDelimited":a.warnings.push(`${e.name} collectionFormat:pipes is no longer supported except for in:query parameters`)),"multi"===t&&(e.explode=!0),"tsv"===t&&(a.warnings.push("collectionFormat:tsv is no longer supported"),e["x-collectionFormat"]="tsv"),delete e.collectionFormat),e.type&&"body"!==e.type&&"formData"!==e.in)if(e.items&&e.schema)a.warnings.push(`${e.name} parameter has array,items and schema`);else{e.schema&&a.patches++,e.schema&&"object"==typeof e.schema||(e.schema={}),e.schema.type=e.type,e.items&&(e.schema.items=e.items,delete e.items,Jv(e.schema.items,null,((r,n)=>{"collectionFormat"===n&&"string"==typeof r[n]&&(t&&r[n]!==t&&a.warnings.push(`${e.name} Nested collectionFormats are not supported`),delete r[n])})));for(const t of Gv.parameterTypeProperties)void 0!==e[t]&&(e.schema[t]=e[t]),delete e[t]}e.schema&&Xv(e.schema,a),e["x-ms-skip-url-encoding"]&&"query"===e.in&&(e.allowReserved=!0,delete e["x-ms-skip-url-encoding"])}if(e&&"formData"===e.in){c=!1,s.content={};let t="application/x-www-form-urlencoded";if(p.length&&p.indexOf("multipart/form-data")>=0&&(t="multipart/form-data"),s.content[t]={},e.schema)s.content[t].schema=e.schema;else{s.content[t].schema={},s.content[t].schema.type="object",s.content[t].schema.properties={},s.content[t].schema.properties[e.name]={};const r=s.content[t].schema,n=s.content[t].schema.properties[e.name];e.description&&(n.description=e.description),e.example&&(n.example=e.example),e.type&&(n.type=e.type);for(const t of Gv.parameterTypeProperties)void 0!==e[t]&&(n[t]=e[t]);!0===e.required&&(r.required||(r.required=[]),r.required.push(e.name),s.required=!0),void 0!==e.default&&(n.default=e.default),n.properties&&(n.properties=e.properties),e.allOf&&(n.allOf=e.allOf),"array"===e.type&&e.items&&(n.items=e.items,n.items.collectionFormat&&delete n.items.collectionFormat),"file"!==l&&"file"!==e["x-s2o-originalType"]||(n.type="string",n.format="binary"),Qv(e,n)}}else e&&"file"===e.type&&(e.required&&(s.required=e.required),s.content={},s.content["application/octet-stream"]={},s.content["application/octet-stream"].schema={},s.content["application/octet-stream"].schema.type="string",s.content["application/octet-stream"].schema.format="binary",Qv(e,s));if(e&&"body"===e.in){s.content={},e.name&&(s["x-s2o-name"]=(t&&t.operationId?Gv.sanitiseAll(t.operationId):"")+Gv.camelize(`_${e.name}`)),e.description&&(s.description=e.description),e.required&&(s.required=e.required),p.length||p.push("application/json");for(const t of p)s.content[t]={},s.content[t].schema=Gv.clone(e.schema||{}),Xv(s.content[t].schema,a);Qv(e,s)}if(Object.keys(s).length>0&&(e["x-s2o-delete"]=!0,t))if(t.requestBody&&c){t.requestBody["x-s2o-overloaded"]=!0;const e=t.operationId||o;a.warnings.push(`Operation ${e} has multiple requestBodies`)}else t.requestBody||(t=function(e,t){const r={};for(const n of Object.keys(e))r[n]=e[n],"parameters"===n&&(r.requestBody={},t.rbname&&(r[t.rbname]=""));return r.requestBody={},r}(t,a),r[n]=t),t.requestBody.content&&t.requestBody.content["multipart/form-data"]&&t.requestBody.content["multipart/form-data"].schema&&t.requestBody.content["multipart/form-data"].schema.properties&&s.content["multipart/form-data"]&&s.content["multipart/form-data"].schema&&s.content["multipart/form-data"].schema.properties?(t.requestBody.content["multipart/form-data"].schema.properties=Object.assign(t.requestBody.content["multipart/form-data"].schema.properties,s.content["multipart/form-data"].schema.properties),t.requestBody.content["multipart/form-data"].schema.required=(t.requestBody.content["multipart/form-data"].schema.required||[]).concat(s.content["multipart/form-data"].schema.required||[]),t.requestBody.content["multipart/form-data"].schema.required.length||delete t.requestBody.content["multipart/form-data"].schema.required):t.requestBody.content&&t.requestBody.content["application/x-www-form-urlencoded"]&&t.requestBody.content["application/x-www-form-urlencoded"].schema&&t.requestBody.content["application/x-www-form-urlencoded"].schema.properties&&s.content["application/x-www-form-urlencoded"]&&s.content["application/x-www-form-urlencoded"].schema&&s.content["application/x-www-form-urlencoded"].schema.properties?(t.requestBody.content["application/x-www-form-urlencoded"].schema.properties=Object.assign(t.requestBody.content["application/x-www-form-urlencoded"].schema.properties,s.content["application/x-www-form-urlencoded"].schema.properties),t.requestBody.content["application/x-www-form-urlencoded"].schema.required=(t.requestBody.content["application/x-www-form-urlencoded"].schema.required||[]).concat(s.content["application/x-www-form-urlencoded"].schema.required||[]),t.requestBody.content["application/x-www-form-urlencoded"].schema.required.length||delete t.requestBody.content["application/x-www-form-urlencoded"].schema.required):(t.requestBody=Object.assign(t.requestBody,s),t.requestBody["x-s2o-name"]||t.operationId&&(t.requestBody["x-s2o-name"]=Gv.sanitiseAll(t.operationId)));if(e&&!e["x-s2o-delete"]){delete e.type;for(const t of Gv.parameterTypeProperties)delete e[t];"path"!==e.in||void 0!==e.required&&!0===e.required||(e.required=!0,a.patches++,a.warnings.push(`(Patchable) path parameters must be required:true [${e.name} in ${o}]`))}return t}function ib(e,t,r,n,o){if(!e)return!1;if(e.description||"object"!=typeof e||Array.isArray(e)||(o.patches++,o.warnings.push("(Patchable) response.description is mandatory")),void 0!==e.schema){Xv(e.schema,o),r&&r.produces&&"string"==typeof r.produces&&(r.produces=[r.produces],o.patches++,o.warnings.push("(Patchable) operation.produces must be an array")),n.produces&&!Array.isArray(n.produces)&&delete n.produces;const t=((r?r.produces:null)||n.produces||[]).filter(Gv.uniqueOnly);t.length||t.push("*/*"),e.content={};for(const r of t){if(e.content[r]={},e.content[r].schema=Gv.clone(e.schema),e.examples&&e.examples[r]){const t={};t.value=e.examples[r],e.content[r].examples={},e.content[r].examples.response=t,delete e.examples[r]}"file"===e.content[r].schema.type&&(e.content[r].schema={type:"string",format:"binary"})}delete e.schema}for(const t in e.examples)e.content||(e.content={}),e.content[t]||(e.content[t]={}),e.content[t].examples={},e.content[t].examples.response={},e.content[t].examples.response.value=e.examples[t];if(delete e.examples,e.headers)for(const t in e.headers)"status code"===t.toLowerCase()?(delete e.headers[t],o.patches++,o.warnings.push('(Patchable) "Status Code" is not a valid header')):nb(e.headers[t],o)}function ab(e,t,r,n,o){for(const i in e){const a=e[i];a&&a["x-trace"]&&"object"==typeof a["x-trace"]&&(a.trace=a["x-trace"],delete a["x-trace"]),a&&a["x-summary"]&&"string"==typeof a["x-summary"]&&(a.summary=a["x-summary"],delete a["x-summary"]),a&&a["x-description"]&&"string"==typeof a["x-description"]&&(a.description=a["x-description"],delete a["x-description"]),a&&a["x-servers"]&&Array.isArray(a["x-servers"])&&(a.servers=a["x-servers"],delete a["x-servers"]);for(const e in a)if(Gv.httpMethods.indexOf(e)>=0||"x-amazon-apigateway-any-method"===e){let s=a[e];if(s&&s.parameters&&Array.isArray(s.parameters)){if(a.parameters)for(const t of a.parameters)s.parameters.find((e=>e.name===t.name&&e.in===t.in))||"formData"!==t.in&&"body"!==t.in&&"file"!==t.type||(s=ob(t,s,a,e,i,o,r));for(const t of s.parameters)s=ob(t,s,a,e,`${e}: ${i}`,o,r);s.parameters&&(s.parameters=s.parameters.filter(rb))}if(s&&s.security&&eb(s.security),"object"==typeof s){if(!s.responses){const e={description:"Default response"};s.responses={default:e}}for(const e in s.responses)ib(s.responses[e],0,s,o,r)}if(s&&s["x-servers"]&&Array.isArray(s["x-servers"]))s.servers=s["x-servers"],delete s["x-servers"];else if(s&&s.schemes&&s.schemes.length)for(const e of s.schemes)if((!o.schemes||o.schemes.indexOf(e)<0)&&(s.servers||(s.servers=[]),Array.isArray(o.servers)))for(const e of o.servers){const t=Gv.clone(e);s.servers.push(t)}if(s){if(delete s.consumes,delete s.produces,delete s.schemes,s["x-ms-examples"]){for(const e in s["x-ms-examples"]){const t=s["x-ms-examples"][e],r=Gv.sanitiseAll(e);if(t.parameters)for(const r in t.parameters){const n=t.parameters[r];for(const t of(s.parameters||[]).concat(a.parameters||[]))t.name!==r||t.example||(t.examples||(t.examples={}),t.examples[e]={value:n})}if(t.responses)for(const n in t.responses){if(t.responses[n].headers)for(const e in t.responses[n].headers){const r=t.responses[n].headers[e];for(const t in s.responses[n].headers)t===e&&(s.responses[n].headers[t].example=r)}if(t.responses[n].body&&(o.components.examples[r]={value:Gv.clone(t.responses[n].body)},s.responses[n]&&s.responses[n].content))for(const t in s.responses[n].content){const o=s.responses[n].content[t];o.examples||(o.examples={}),o.examples[e]={$ref:`#/components/examples/${r}`}}}}delete s["x-ms-examples"]}if(s.parameters&&0===s.parameters.length&&delete s.parameters,s.requestBody){const r=s.operationId?Gv.sanitiseAll(s.operationId):Gv.camelize(Gv.sanitiseAll(e+i)),o=Gv.sanitise(s.requestBody["x-s2o-name"]||r||"");delete s.requestBody["x-s2o-name"];const a=JSON.stringify(s.requestBody),l=Gv.createHash(a);if(!n[l]){const e={};e.name=o,e.body=s.requestBody,e.refs=[],n[l]=e}const c=`#/${t}/${encodeURIComponent(i)}/${e}/requestBody`;n[l].refs.push(c)}}}if(a&&a.parameters){for(const e in a.parameters)ob(a.parameters[e],null,a,null,i,o,r);Array.isArray(a.parameters)&&(a.parameters=a.parameters.filter(rb))}}}function sb(e){return e&&e.url&&"string"==typeof e.url?(e.url=e.url.split("{{").join("{"),e.url=e.url.split("}}").join("}"),e.url.replace(/\{(.+?)\}/g,((t,r)=>{e.variables||(e.variables={}),e.variables[r]={default:"unknown"}})),e):e}function lb(e,t){var r,n;void 0!==e.info&&null!==e.info||(e.info={version:"",title:""},t.patches++,t.warnings.push("(Patchable) info object is mandatory")),("object"!=typeof e.info||Array.isArray(e.info))&&(t.errCount++,t.errors.push({message:"info must be an object",pointer:"/info"})),void 0===(null==(r=e.info)?void 0:r.title)&&(t.patches++,e.info.title="",t.warnings.push({message:"(Patchable) info.title cannot be null",pointer:"/info/title",patchable:!0})),void 0===(null==(n=e.info)?void 0:n.version)?(t.patches++,e.info.version="",t.warnings.push("(Patchable) info.version cannot be null")):"string"!=typeof e.info.version&&(t.patches++,e.info.version=e.info.version.toString(),t.warnings.push("(Patchable) info.version must be a string"))}function cb(e,t){e.paths||(t.patches++,e.paths={},t.warnings.push("(Patchable) paths object is mandatory"))}function pb(e={}){const t={original:e,openapi:{},patches:0,warnings:[],errCount:0,errors:[]};if(e.openapi&&"string"==typeof e.openapi&&e.openapi.startsWith("3."))return t.openapi=Gv.circularClone(e),lb(t.openapi,t),cb(t.openapi,t),t;if("2.0"!==e.swagger)return t.errCount++,t.errors.push({message:`Unsupported swagger/OpenAPI version: ${e.openapi?e.openapi:e.swagger}`,pointer:"/swagger"}),t;if(t.openapi=Gv.circularClone(e),t.openapi.openapi="3.0.0",delete t.openapi.swagger,Jv(t.openapi,{},((e,t,r)=>{null===e[t]&&!t.startsWith("x-")&&"default"!==t&&r.path.indexOf("/example")<0&&delete e[t]})),e.host)(e.schemes||[]).forEach((r=>{const n={},o=(e.basePath||"").replace(/\/$/,"");n.url=`${r?`${r}:`:""}//${e.host}${o}`,sb(n),t.openapi.servers||(t.openapi.servers=[]),t.openapi.servers.push(n)}));else if(e.basePath){const r={};r.url=e.basePath,sb(r),t.openapi.servers||(t.openapi.servers=[]),t.openapi.servers.push(r)}if(delete t.openapi.host,delete t.openapi.basePath,e["x-ms-parameterized-host"]){const r=e["x-ms-parameterized-host"],n={};n.url=r.hostTemplate+(e.basePath?e.basePath:""),n.variables={};const o=n.url.match(/\{\w+\}/g);for(const e in r.parameters){const t=r.parameters[e];e.startsWith("x-")||(delete t.required,delete t.type,delete t.in,void 0===t.default&&(t.enum?t.default=t.enum[0]:t.default="none"),t.name||(t.name=o[e].replace("{","").replace("}","")),n.variables[t.name]=t,delete t.name)}t.openapi.servers||(t.openapi.servers=[]),!1===r.useSchemePrefix?t.openapi.servers.push(n):e.schemes.forEach((e=>{t.openapi.servers.push({...n,url:`${e}://${n.url}`})})),delete t.openapi["x-ms-parameterized-host"]}return lb(t.openapi,t),cb(t.openapi,t),"string"==typeof t.openapi.consumes&&(t.openapi.consumes=[t.openapi.consumes]),"string"==typeof t.openapi.produces&&(t.openapi.produces=[t.openapi.produces]),t.openapi.components={},t.openapi["x-callbacks"]&&(t.openapi.components.callbacks=t.openapi["x-callbacks"],delete t.openapi["x-callbacks"]),t.openapi.components.examples={},t.openapi.components.headers={},t.openapi["x-links"]&&(t.openapi.components.links=t.openapi["x-links"],delete t.openapi["x-links"]),t.openapi.components.parameters=t.openapi.parameters||{},t.openapi.components.responses=t.openapi.responses||{},t.openapi.components.requestBodies={},t.openapi.components.securitySchemes=t.openapi.securityDefinitions||{},t.openapi.components.schemas=t.openapi.definitions||{},delete t.openapi.definitions,delete t.openapi.responses,delete t.openapi.parameters,delete t.openapi.securityDefinitions,function(e){const t=e.openapi,r={};Zv={schemas:{}},t.security&&eb(t.security);for(const r in t.components.securitySchemes){const n=Gv.sanitise(r);if(r!==n){if(t.components.securitySchemes[n])return e.errCount++,e.errors.push({message:`Duplicate sanitised securityScheme name ${n}`,pointer:`/components/securitySchemes/${n}`}),e;t.components.securitySchemes[n]=t.components.securitySchemes[r],delete t.components.securitySchemes[r]}tb(t.components.securitySchemes[n],e)}for(const r in t.components.schemas){const n=Gv.sanitiseAll(r);let o="";if(r!==n){for(;t.components.schemas[n+o];)o=o?++o:2;t.components.schemas[n+o]=t.components.schemas[r],delete t.components.schemas[r]}Zv.schemas[r]=n+o,Xv(t.components.schemas[`${n}${o}`],e)}for(const r in t.components.parameters){const n=Gv.sanitise(r);if(r!==n){if(t.components.parameters[n])return e.errCount++,e.errors.push({message:`Duplicate sanitised parameter name ${n}`,pointer:`/components/parameters/${n}`}),e;t.components.parameters[n]=t.components.parameters[r],delete t.components.parameters[r]}ob(t.components.parameters[n],null,null,null,n,t,e)}for(const r in t.components.responses){const n=Gv.sanitise(r);if(r!==n){if(t.components.responses[n])return e.errCount++,e.errors.push({message:`Duplicate sanitised response name ${n}`,pointer:`/components/responses/${n}`}),e;t.components.responses[n]=t.components.responses[r],delete t.components.responses[r]}const o=t.components.responses[n];if(ib(o,0,null,t,e),o.headers)for(const t in o.headers)"status code"===t.toLowerCase()?(delete o.headers[t],e.patches++,e.warnings.push('(Patchable) "Status Code" is not a valid header')):nb(o.headers[t],e)}for(const e in t.components.requestBodies){const n=t.components.requestBodies[e],o=JSON.stringify(n),i=Gv.createHash(o),a={};a.name=e,a.body=n,a.refs=[],r[i]=a}ab(t.paths,"paths",e,r,t),t["x-ms-paths"]&&ab(t["x-ms-paths"],"x-ms-paths",e,r,t);for(const e in t.components.parameters)t.components.parameters[e]["x-s2o-delete"]&&delete t.components.parameters[e];return delete t.consumes,delete t.produces,delete t.schemes,t.components.requestBodies={},t.components.responses&&0===Object.keys(t.components.responses).length&&delete t.components.responses,t.components.parameters&&0===Object.keys(t.components.parameters).length&&delete t.components.parameters,t.components.examples&&0===Object.keys(t.components.examples).length&&delete t.components.examples,t.components.requestBodies&&0===Object.keys(t.components.requestBodies).length&&delete t.components.requestBodies,t.components.securitySchemes&&0===Object.keys(t.components.securitySchemes).length&&delete t.components.securitySchemes,t.components.headers&&0===Object.keys(t.components.headers).length&&delete t.components.headers,t.components.schemas&&0===Object.keys(t.components.schemas).length&&delete t.components.schemas,t.components&&0===Object.keys(t.components).length&&delete t.components,e}(t)}var ub=function(e){return new Promise((async t=>{var r,n,o;try{const i=await Cv.resolve(e);if((null==(r=i.errors)?void 0:r.length)>0)t(i);else{i.spec.openapi&&(i.resolvedSpec=i.spec,t(i));const e=pb(i.spec);(null==(n=e.errors)?void 0:n.length)>0&&(Array.isArray(i.errors)?i.errors.concat(i.errors):i.errors=e.errors),(null==(o=e.warnings)?void 0:o.length)>0&&(i.warnings=e.warnings),i.resolvedSpec=i.spec,i.spec=e.openapi,t(i)}}catch(e){t(e)}}))};async function db(e,t=!1,r=!1,n="",o="",i="",a="",s=""){var l,c;let p;try{var u,d;let t;if(this.requestUpdate(),t="string"==typeof e?await ub({url:e}):await ub({spec:e}),await ge(0),null!==(u=t.resolvedSpec)&&void 0!==u&&u.jsonSchemaViewer&&null!==(d=t.resolvedSpec)&&void 0!==d&&d.schemaAndExamples){this.dispatchEvent(new CustomEvent("before-render",{detail:{spec:t.resolvedSpec}}));const e=Object.entries(t.resolvedSpec.schemaAndExamples).map((e=>({show:!0,expanded:!0,selectedExample:null,name:e[0],elementId:e[0].replace(me,"-"),...e[1]})));return{specLoadError:!1,isSpecLoading:!1,info:t.resolvedSpec.info,schemaAndExamples:e}}var h,f,m,y;if(!t.spec||!(t.spec.components||t.spec.info||t.spec.servers||t.spec.tags||t.spec.paths))return console.info("RapiDoc: %c There was an issue while parsing the spec %o ","color:orangered",t),{specLoadError:!0,isSpecLoading:!1,info:{title:"Error loading the spec",description:null!==(h=t.response)&&void 0!==h&&h.url?`${null===(f=t.response)||void 0===f?void 0:f.url} ┃ ${null===(m=t.response)||void 0===m?void 0:m.status}  ${null===(y=t.response)||void 0===y?void 0:y.statusText}`:"Unable to load the Spec",version:" "},tags:[]};p=t.spec,this.dispatchEvent(new CustomEvent("before-render",{detail:{spec:p}}))}catch(e){console.info("RapiDoc: %c There was an issue while parsing the spec %o ","color:orangered",e)}const g=function(e,t=!1,r=!1,n){const o=["get","put","post","delete","patch","head","options"],i=e.tags&&Array.isArray(e.tags)?e.tags.map((e=>({show:!0,elementId:`tag--${e.name.replace(me,"-")}`,name:e.name,description:e.description||"",headers:e.description?hb(e.description):[],paths:[],expanded:!1!==e["x-tag-expanded"]}))):[],a=e.paths||{};if(e.webhooks)for(const[t,r]of Object.entries(e.webhooks))r._type="webhook",a[t]=r;for(const r in a){const n=a[r].parameters,s={servers:a[r].servers||[],parameters:a[r].parameters||[]},l="webhook"===a[r]._type;o.forEach((o=>{if(a[r][o]){const a=e.paths[r][o],c=a.tags||[];if(0===c.length)if(t){const e=r.replace(/^\/+|\/+$/g,""),t=e.indexOf("/");-1===t?c.push(e):c.push(e.substr(0,t))}else c.push("General ⦂");c.forEach((t=>{let c,p;var u,d;(e.tags&&(p=e.tags.find((e=>e.name.toLowerCase()===t.toLowerCase()))),c=i.find((e=>e.name===t)),c)||(c={show:!0,elementId:`tag--${t.replace(me,"-")}`,name:t,description:(null===(u=p)||void 0===u?void 0:u.description)||"",headers:null!==(d=p)&&void 0!==d&&d.description?hb(p.description):[],paths:[],expanded:!p||!1!==p["x-tag-expanded"]},i.push(c));let h=(a.summary||a.description||`${o.toUpperCase()} ${r}`).trim();h.length>100&&(h=h.split(/[.|!|?]\s|[\r?\n]/)[0]);let f=[];f=n?a.parameters?n.filter((e=>{if(!a.parameters.some((t=>e.name===t.name&&e.in===t.in)))return e})).concat(a.parameters):n.slice(0):a.parameters?a.parameters.slice(0):[],c.paths.push({show:!0,expanded:!1,isWebhook:l,expandedAtLeastOnce:!1,summary:a.summary||"",description:a.description||"",shortSummary:h,method:o,path:r,operationId:a.operationId,elementId:`${o}-${r.replace(me,"-")}`,servers:a.servers?s.servers.concat(a.servers):s.servers,parameters:f,requestBody:a.requestBody,responses:a.responses,callbacks:a.callbacks,deprecated:a.deprecated,security:a.security,xBadges:a["x-badges"]||void 0,xCodeSamples:a["x-codeSamples"]||a["x-code-samples"]||""})}))}}))}const s=i.filter((e=>e.paths&&e.paths.length>0));return s.forEach((e=>{"method"===n?e.paths.sort(((e,t)=>o.indexOf(e.method).toString().localeCompare(o.indexOf(t.method)))):"summary"===n?e.paths.sort(((e,t)=>e.shortSummary.localeCompare(t.shortSummary))):"path"===n&&e.paths.sort(((e,t)=>e.path.localeCompare(t.path))),e.firstPathId=e.paths[0].elementId})),r?s.sort(((e,t)=>e.name.localeCompare(t.name))):s}(p,t,r,n),v=function(e){if(!e.components)return[];const t=[];for(const r in e.components){const n=[];for(const t in e.components[r]){const o={show:!0,id:`${r.toLowerCase()}-${t.toLowerCase()}`.replace(me,"-"),name:t,component:e.components[r][t]};n.push(o)}let o=r,i=r;switch(r){case"schemas":i="Schemas",o="Schemas allows the definition of input and output data types. These types can be objects, but also primitives and arrays.";break;case"responses":i="Responses",o="Describes responses from an API Operation, including design-time, static links to operations based on the response.";break;case"parameters":i="Parameters",o="Describes operation parameters. A unique parameter is defined by a combination of a name and location.";break;case"examples":i="Examples",o="List of Examples for operations, can be requests, responses and objects examples.";break;case"requestBodies":i="Request Bodies",o="Describes common request bodies that are used across the API operations.";break;case"headers":i="Headers",o='Headers follows the structure of the Parameters but they are explicitly in "header"';break;case"securitySchemes":i="Security Schemes",o="Defines a security scheme that can be used by the operations. Supported schemes are HTTP authentication, an API key (either as a header, a cookie parameter or as a query parameter), OAuth2's common flows(implicit, password, client credentials and authorization code) as defined in RFC6749, and OpenID Connect Discovery.";break;case"links":i="Links",o="Links represent a possible design-time link for a response. The presence of a link does not guarantee the caller's ability to successfully invoke it, rather it provides a known relationship and traversal mechanism between responses and other operations.";break;case"callbacks":i="Callbacks",o="A map of possible out-of band callbacks related to the parent operation. Each value in the map is a Path Item Object that describes a set of requests that may be initiated by the API provider and the expected responses. The key value used to identify the path item object is an expression, evaluated at runtime, that identifies a URL to use for the callback operation.";break;default:i=r,o=r}const a={show:!0,name:i,description:o,subComponents:n};t.push(a)}return t||[]}(p),b=null!==(l=p.info)&&void 0!==l&&l.description?hb(p.info.description):[],x=[];if(null!==(c=p.components)&&void 0!==c&&c.securitySchemes){const e=new Set;Object.entries(p.components.securitySchemes).forEach((t=>{if(!e.has(t[0])){e.add(t[0]);const r={securitySchemeId:t[0],...t[1]};r.value="",r.finalKeyValue="","apiKey"===t[1].type||"http"===t[1].type?(r.in=t[1].in||"header",r.name=t[1].name||"Authorization",r.user="",r.password=""):"oauth2"===t[1].type&&(r.in="header",r.name="Authorization",r.clientId="",r.clientSecret=""),x.push(r)}}))}o&&i&&a&&x.push({securitySchemeId:ye,description:"api-key provided in rapidoc element attributes",type:"apiKey",oAuthFlow:"",name:o,in:i,value:a,finalKeyValue:a}),x.forEach((e=>{"http"===e.type?e.typeDisplay="basic"===e.scheme?"HTTP Basic":"HTTP Bearer":"apiKey"===e.type?e.typeDisplay=`API Key (${e.name})`:"oauth2"===e.type?e.typeDisplay=`OAuth (${e.securitySchemeId})`:e.typeDisplay=e.type}));let w=[];p.servers&&Array.isArray(p.servers)?(p.servers.forEach((e=>{let t=e.url.trim();t.startsWith("http")||t.startsWith("//")||t.startsWith("{")||window.location.origin.startsWith("http")&&(e.url=window.location.origin+e.url,t=e.url),e.variables&&Object.entries(e.variables).forEach((e=>{const r=new RegExp(`{${e[0]}}`,"g");t=t.replace(r,e[1].default||""),e[1].value=e[1].default||""})),e.computedUrl=t})),s&&p.servers.push({url:s,computedUrl:s})):s?p.servers=[{url:s,computedUrl:s}]:window.location.origin.startsWith("http")?p.servers=[{url:window.location.origin,computedUrl:window.location.origin}]:p.servers=[{url:"http://localhost",computedUrl:"http://localhost"}],w=p.servers;return{specLoadError:!1,isSpecLoading:!1,info:p.info,infoDescriptionHeaders:b,tags:g,components:v,externalDocs:p.externalDocs,securitySchemes:x,servers:w}}function hb(e){return re().lexer(e).filter((e=>"heading"===e.type&&e.depth<=2))||[]}const fb=2;class mb extends class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,r){this._$Ct=e,this._$AM=t,this._$Ci=r}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}{constructor(e){if(super(e),this.it=U,e.type!==fb)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===U||null==e)return this.vt=void 0,this.it=e;if(e===R)return e;if("string"!=typeof e)throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.it)return this.vt;this.it=e;const t=[e];return t.raw=t,this.vt={_$litType$:this.constructor.resultType,strings:t,values:[]}}}mb.directiveName="unsafeHTML",mb.resultType=1;const yb=(e=>(...t)=>({_$litDirective$:e,values:t}))(mb);function gb(e,t="",r="",n=""){var o,i;const a=null===(o=this.resolvedSpec.securitySchemes)||void 0===o?void 0:o.find((t=>t.securitySchemeId===e));if(!a)return!1;let s="";if("basic"===(null===(i=a.scheme)||void 0===i?void 0:i.toLowerCase()))t&&(s=`Basic ${btoa(`${t}:${r}`)}`);else if(n){var l;s=`${"bearer"===(null===(l=a.scheme)||void 0===l?void 0:l.toLowerCase())?"Bearer":""} ${n}`}return!!s&&(a.finalKeyValue=s,this.requestUpdate(),!0)}function vb(){var e;null===(e=this.resolvedSpec.securitySchemes)||void 0===e||e.forEach((e=>{e.user="",e.password="",e.value="",e.finalKeyValue=""})),this.requestUpdate()}function bb(e){let t="";const r=this.resolvedSpec.securitySchemes.find((t=>t.securitySchemeId===e));if(r){const n=this.shadowRoot.getElementById(`security-scheme-${e}`);if(n)if(r.type&&r.scheme&&"http"===r.type&&"basic"===r.scheme.toLowerCase()){const t=n.querySelector(".api-key-user").value.trim(),r=n.querySelector(".api-key-password").value.trim();gb.call(this,e,t,r)}else t=n.querySelector(".api-key-input").value.trim(),gb.call(this,e,"","",t)}}function xb(e,t="Bearer",r){this.resolvedSpec.securitySchemes.find((t=>t.securitySchemeId===e)).finalKeyValue=`${"bearer"===t.toLowerCase()?"Bearer":"mac"===t.toLowerCase()?"MAC":t} ${r}`,this.requestUpdate()}async function wb(e,t,r,n,o,i,a="header",s,l,c=null,p=null,u=null){const d=l?l.querySelector(".oauth-resp-display"):void 0,h=new URLSearchParams,f=new Headers;h.append("grant_type",o),"client_credentials"!==o&&"password"!==o&&h.append("redirect_uri",n),i&&(h.append("code",i),h.append("code_verifier","731DB1C3F7EA533B85E29492D26AA-1234567890-1234567890")),"header"===a?f.set("Authorization",`Basic ${btoa(`${t}:${r}`)}`):(h.append("client_id",t),h.append("client_secret",r)),"password"===o&&(h.append("username",p),h.append("password",u)),c&&h.append("scope",c);try{const t=await fetch(e,{method:"POST",headers:f,body:h}),r=await t.json();if(!t.ok)return d&&(d.innerHTML=`<span style="color:var(--red)">${r.error_description||r.error_description||"Unable to get access token"}</span>`),!1;if(r.token_type&&r.access_token)return xb.call(this,s,r.token_type,r.access_token),d&&(d.innerHTML='<span style="color:var(--green)">Access Token Received</span>'),!0}catch(e){return d&&(d.innerHTML='<span style="color:var(--red)">Failed to get access token</span>'),!1}}async function $b(e,t,r,n,o,i,a,s,l,c){sessionStorage.removeItem("winMessageEventActive"),t.close(),e.data.fake||(e.data||console.warn("RapiDoc: Received no data with authorization message"),e.data.error&&console.warn("RapiDoc: Error while receiving data"),e.data&&("code"===e.data.responseType?wb.call(this,r,n,o,i,a,e.data.code,s,l,c):"token"===e.data.responseType&&xb.call(this,l,e.data.token_type,e.data.access_token)))}async function Ab(e,t,r,n,o){const i=o.target.closest(".oauth-flow"),a=i.querySelector(".oauth-client-id")?i.querySelector(".oauth-client-id").value.trim():"",s=i.querySelector(".oauth-client-secret")?i.querySelector(".oauth-client-secret").value.trim():"",l=i.querySelector(".api-key-user")?i.querySelector(".api-key-user").value.trim():"",c=i.querySelector(".api-key-password")?i.querySelector(".api-key-password").value.trim():"",p=i.querySelector(".oauth-send-client-secret-in")?i.querySelector(".oauth-send-client-secret-in").value.trim():"header",u=[...i.querySelectorAll(".scope-checkbox:checked")],d=i.querySelector(`#${e}-pkce`),h=`${Math.random().toString(36)}random`.slice(2,9),f=`${Math.random().toString(36)}random`.slice(2,9),m=new URL(`${window.location.origin}${window.location.pathname.substring(0,window.location.pathname.lastIndexOf("/"))}/${this.oauthReceiver}`);let y,g="",v="";if([...i.parentNode.querySelectorAll(".oauth-resp-display")].forEach((e=>{e.innerHTML=""})),"authorizationCode"===t||"implicit"===t){const o=new URL(r);"authorizationCode"===t?(g="authorization_code",v="code"):"implicit"===t&&(v="token");const l=new URLSearchParams(o.search),c=u.map((e=>e.value)).join(" ");c&&l.set("scope",c),l.set("client_id",a),l.set("redirect_uri",m.toString()),l.set("response_type",v),l.set("state",h),l.set("nonce",f),d&&d.checked&&(l.set("code_challenge","4FatVDBJKPAo4JgLLaaQFMUcQPn5CrPRvLlaob9PTYc"),l.set("code_challenge_method","S256")),l.set("show_dialog",!0),o.search=l.toString(),"true"===sessionStorage.getItem("winMessageEventActive")&&window.postMessage({fake:!0},this),setTimeout((()=>{y=window.open(o.toString()),y?(sessionStorage.setItem("winMessageEventActive","true"),window.addEventListener("message",(t=>$b.call(this,t,y,n,a,s,m.toString(),g,p,e,i)),{once:!0})):console.error(`RapiDoc: Unable to open ${o.toString()} in a new window`)}),10)}else if("clientCredentials"===t){g="client_credentials";const t=u.map((e=>e.value)).join(" ");wb.call(this,n,a,s,m.toString(),g,"",p,e,i,t)}else if("password"===t){g="password";const t=u.map((e=>e.value)).join(" ");wb.call(this,n,a,s,m.toString(),g,"",p,e,i,t,l,c)}}function kb(e,t,r,n,o){let i=o.authorizationUrl,a=o.tokenUrl,s=o.refreshUrl;const l=e=>e.indexOf("://")>0||0===e.indexOf("//");let c;return s&&!l(s)&&(s=`${this.selectedServer.computedUrl}/${s.replace(/^\//,"")}`),a&&!l(a)&&(a=`${this.selectedServer.computedUrl}/${a.replace(/^\//,"")}`),i&&!l(i)&&(i=`${this.selectedServer.computedUrl}/${i.replace(/^\//,"")}`),c="authorizationCode"===e?"Authorization Code Flow":"clientCredentials"===e?"Client Credentials Flow":"implicit"===e?"Implicit Flow":"password"===e?"Password Flow":e,P`
    <div class="oauth-flow ${e}" style="padding: 12px 0; margin-bottom:12px;"> 
      <div class="tiny-title upper" style="margin-bottom:8px;">${c}</div> 
      ${i?P`<div style="margin-bottom:5px"><span style="width:75px; display: inline-block;">Auth URL</span> <span class="mono-font"> ${i} </span></div>`:""}
      ${a?P`<div style="margin-bottom:5px"><span style="width:75px; display: inline-block;">Token URL</span> <span class="mono-font">${a}</span></div>`:""}
      ${s?P`<div style="margin-bottom:5px"><span style="width:75px; display: inline-block;">Refresh URL</span> <span class="mono-font">${s}</span></div>`:""}
      ${"authorizationCode"===e||"clientCredentials"===e||"implicit"===e||"password"===e?P`
          ${o.scopes?P`
              <span> Scopes </span>
              <div class= "oauth-scopes" part="section-auth-scopes" style = "width:100%; display:flex; flex-direction:column; flex-wrap:wrap; margin:0 0 10px 24px">
                ${Object.entries(o.scopes).map(((t,r)=>P`
                  <div class="m-checkbox" style="display:inline-flex; align-items:center">
                    <input type="checkbox" part="checkbox checkbox-auth-scope" class="scope-checkbox" id="${n}${e}${r}" value="${t[0]}">
                    <label for="${n}${e}${r}" style="margin-left:5px; cursor:pointer">
                      <span class="mono-font">${t[0]}</span>
                        ${t[0]!==t[1]?` - ${t[1]||""}`:""}
                    </label>
                  </div>
                `))}
              </div>
            `:""}
          ${"password"===e?P`
              <div style="margin:5px 0">
                <input type="text" value = "" placeholder="username" spellcheck="false" class="oauth2 ${e} ${n} api-key-user" part="textbox textbox-username">
                <input type="password" value = "" placeholder="password" spellcheck="false" class="oauth2 ${e} ${n} api-key-password" style = "margin:0 5px;" part="textbox textbox-password">
              </div>`:""}  
          <div>
            ${"authorizationCode"===e?P`
                <div style="margin: 16px 0 4px">
                  <input type="checkbox" part="checkbox checkbox-auth-scope" id="${n}-pkce" checked> 
                  <label for="${n}-pkce" style="margin:0 16px 0 4px; line-height:24px; cursor:pointer">
                   Send Proof Key for Code Exchange (PKCE)
                  </label>
                </div>  
              `:""}
            <input type="text" part="textbox textbox-auth-client-id" value = "${t||""}" placeholder="client-id" spellcheck="false" class="oauth2 ${e} ${n} oauth-client-id">
            ${"authorizationCode"===e||"clientCredentials"===e||"password"===e?P`
                <input type="password" part="textbox textbox-auth-client-secret" value = "${r||""}" placeholder="client-secret" spellcheck="false" class="oauth2 ${e} ${n} oauth-client-secret" style = "margin:0 5px;">
                ${"authorizationCode"===e||"clientCredentials"===e||"password"===e?P`
                    <select style="margin-right:5px;" class="${e} ${n} oauth-send-client-secret-in">
                      <option value = 'header' selected> Authorization Header </option> 
                      <option value = 'request-body'> Request Body </option> 
                    </select>`:""}`:""}
            ${"authorizationCode"===e||"clientCredentials"===e||"implicit"===e||"password"===e?P`
                <button class="m-btn thin-border" part="btn btn-outline"
                  @click="${t=>{Ab.call(this,n,e,i,a,t)}}"
                > GET TOKEN </button>`:""}
          </div>
          <div class="oauth-resp-display red-text small-font-size"></div>
          `:""}
    </div>  
  `}function Sb(){var e;if(!this.resolvedSpec)return"";const t=null===(e=this.resolvedSpec.securitySchemes)||void 0===e?void 0:e.filter((e=>e.finalKeyValue));return t?P`
  <section id='auth' part="section-auth" style="text-align:left; direction:ltr; margin-top:24px; margin-bottom:24px;" class = 'observe-me ${"read focused".includes(this.renderStyle)?"section-gap--read-mode":"section-gap "}'>
    <div class='sub-title regular-font'> AUTHENTICATION </div>

    <div class="small-font-size" style="display:flex; align-items: center; min-height:30px">
      ${t.length>0?P`
          <div class="blue-text"> ${t.length} API key applied </div>
          <div style="flex:1"></div>
          <button class="m-btn thin-border" part="btn btn-outline" @click=${()=>{vb.call(this)}}>CLEAR ALL API KEYS</button>`:P`<div class="red-text">No API key applied</div>`}
    </div>
    ${this.resolvedSpec.securitySchemes&&this.resolvedSpec.securitySchemes.length>0?P`
        <table id="auth-table" class='m-table padded-12' style="width:100%;">
          ${this.resolvedSpec.securitySchemes.map((e=>P`
            <tr id="security-scheme-${e.securitySchemeId}" class="${e.type.toLowerCase()}">
              <td style="max-width:500px; overflow-wrap: break-word;">
                <div style="line-height:28px; margin-bottom:5px;">
                  <span style="font-weight:bold; font-size:var(--font-size-regular)">${e.typeDisplay}</span>
                  ${e.finalKeyValue?P`
                      <span class='blue-text'>  ${e.finalKeyValue?"Key Applied":""} </span>
                      <button class="m-btn thin-border small" part="btn btn-outline" @click=${()=>{e.finalKeyValue="",this.requestUpdate()}}>REMOVE</button>
                      `:""}
                </div>
                ${e.description?P`
                    <div class="m-markdown">
                      ${yb(re()(e.description||""))}
                    </div>`:""}

                ${"apikey"===e.type.toLowerCase()||"http"===e.type.toLowerCase()&&"bearer"===e.scheme.toLowerCase()?P`
                    <div style="margin-bottom:5px">
                      ${"apikey"===e.type.toLowerCase()?P`Send <code>${e.name}</code> in <code>${e.in}</code>`:P`Send <code>Authorization</code> in <code>header</code> containing the word <code>Bearer</code> followed by a space and a Token String.`}
                    </div>  
                    <div style="max-height:28px;">
                      ${"cookie"!==e.in?P`
                          <input type = "text" value = "${e.value}" class="${e.type} ${e.securitySchemeId} api-key-input" placeholder = "api-token" spellcheck = "false">
                          <button class="m-btn thin-border" style = "margin-left:5px;"
                            part = "btn btn-outline"
                            @click="${t=>{bb.call(this,e.securitySchemeId,t)}}"> 
                            ${e.finalKeyValue?"UPDATE":"SET"}
                          </button>`:P`<span class="gray-text" style="font-size::var(--font-size-small)"> cookies cannot be set from here</span>`}
                    </div>`:""}
                ${"http"===e.type.toLowerCase()&&"basic"===e.scheme.toLowerCase()?P`
                    <div style="margin-bottom:5px">
                      Send <code>Authorization</code> in <code>header</code> containing the word <code>Basic</code> followed by a space and a base64 encoded string of <code>username:password</code>.
                    </div>  
                    <div>
                      <input type="text" value = "${e.user}" placeholder="username" spellcheck="false" class="${e.type} ${e.securitySchemeId} api-key-user" style="width:100px">
                      <input type="password" value = "${e.password}" placeholder="password" spellcheck="false" class="${e.type} ${e.securitySchemeId} api-key-password" style = "width:100px; margin:0 5px;">
                      <button class="m-btn thin-border"
                        @click="${t=>{bb.call(this,e.securitySchemeId,t)}}"
                        part = "btn btn-outline"
                      > 
                        ${e.finalKeyValue?"UPDATE":"SET"}
                      </button>
                    </div>`:""}
              </td>
            </tr>
            ${"oauth2"===e.type.toLowerCase()?P`
                <tr>
                  <td style="border:none; padding-left:48px">
                    ${Object.keys(e.flows).map((t=>kb.call(this,t,e["x-client-id"],e["x-client-secret"],e.securitySchemeId,e.flows[t])))} 
                  </td>
                </tr>    
                `:""}    
          `))}
        </table>`:""}
    <slot name="auth"></slot>
  </section>
`:void 0}function Eb(e){if(this.resolvedSpec.securitySchemes&&e){const t=[];return e.forEach((e=>{const r=[],n=[];let o="";Object.keys(e).forEach((t=>{const i=this.resolvedSpec.securitySchemes.find((e=>e.securitySchemeId===t));!o&&Array.isArray(e[t])&&(o=e[t].join(", ")),i&&(n.push(i.typeDisplay),r.push(i))})),t.push({pathScopes:o,securityTypes:n.length>1?`${n[0]} + ${n.length-1} more`:n[0],securityDefs:r})})),P`<div style="position:absolute; top:3px; right:2px; font-size:var(--font-size-small); line-height: 1.5;">
      <div style="position:relative; display:flex; min-width:350px; max-width:700px; justify-content: flex-end;">
        <svg width="16" height="24">
          <g>
            <path style="fill: var(--fg3)" d="m13.8,8.5l0,-2.6l0,0c0,-3.2 -2.6,-5.8 -5.8,-5.8s-5.8,2.6 -5.8,5.8l0,0l0,2.6l-2.1,0l0,11.2l16,0l0,-11.2l-2.1,0l-0,0l0,0l0,0l-0,0zm-9.8,-2.6c0,0 0,0 0,0c0,-2.2 1.8,-4 4,-4c2.2,0 4,1.8 4,4c0,0 0,0 0,0l0,2.6l-8.03,0l0,-2.6l0,0l0,0z" />
          </g>
        </svg>
          ${t.map(((e,t)=>P`
          
          ${e.securityTypes?P`
              ${0!==t?P`<div style="padding:3px 4px;"> OR </div>`:""}
              <div class="tooltip">
                <div style = "padding:2px 4px; white-space:nowrap; text-overflow:ellipsis;max-width:150px; overflow:hidden;">
                  <a part="anchor anchor-operation-security" href="#auth"> ${e.securityTypes} </a>
                </div>
                <div class="tooltip-text" style="position:absolute; color: var(--fg); top:26px; right:0; border:1px solid var(--border-color);padding:2px 4px; display:block;">
                  ${e.securityDefs.length>1?P`<div>Requires <b>all</b> of the following </div>`:""}
                  <div style="padding-left: 8px">
                    ${e.securityDefs.map(((t,r)=>P`
                      ${"oauth2"===t.type?P`
                          <div>
                            ${e.securityDefs.length>1?P`<b>${r+1}.</b> &nbsp;`:"Needs"}
                            OAuth Token <span style="font-family:var(--font-mono); color:var(--primary-color);">${t.securitySchemeId}</span> in <b>Authorization header</b>
                            ${""!==e.pathScopes?P`
                                <div>
                                  <b>Required scopes:</b> 
                                  <br/> 
                                  <div style="margin-left:8px">  
                                    ${e.pathScopes.split(",").map(((e,t)=>P`${0===t?"":"┃"}<span>${e}</span>`))}
                                  </div>  
                                </div>`:""}
                          </div>`:"http"===t.type?P`
                            <div>
                              ${e.securityDefs.length>1?P`<b>${r+1}.</b> &nbsp;`:P`Requires`} 
                              ${"basic"===t.scheme?"Base 64 encoded username:password":"Bearer Token"} in <b>Authorization header</b>
                            </div>`:P`
                            <div>
                              ${e.securityDefs.length>1?P`<b>${r+1}.</b> &nbsp;`:P`Requires`} 
                              Token in <b>${t.name} ${t.in}</b>
                            </div>`}
                    `))}
                  </div>  
                </div>
              </div>
            `:""}
        `))}
      </div>
    `}return""}function Db(e){return P`
  <section class="table-title" style="margin-top:24px;">CODE SAMPLES</div>
  <div class="tab-panel col"
    @click="${e=>{if(!e.target.classList.contains("tab-btn"))return;const t=e.target.dataset.tab,r=[...e.currentTarget.querySelectorAll(".tab-btn")],n=[...e.currentTarget.querySelectorAll(".tab-content")];r.forEach((e=>e.classList[e.dataset.tab===t?"add":"remove"]("active"))),n.forEach((e=>{e.style.display=e.dataset.tab===t?"block":"none"}))}}">
    <div class="tab-buttons row" style="width:100; overflow">
      ${e.map(((e,t)=>P`<button class="tab-btn ${0===t?"active":""}" data-tab = '${e.lang}${t}'> ${e.label||e.lang} </button>`))}
    </div>
    ${e.map(((e,t)=>{var r,n,o;return P`
      <div class="tab-content m-markdown" style= "display:${0===t?"block":"none"}" data-tab = '${e.lang}${t}'>
        <button class="toolbar-btn" style = "position:absolute; top:12px; right:8px" @click='${t=>{ve(e.source,t)}}'> Copy </button>
        <pre><code class="language">${oe().languages[null===(r=e.lang)||void 0===r?void 0:r.toLowerCase()]?yb(oe().highlight(e.source,oe().languages[null===(n=e.lang)||void 0===n?void 0:n.toLowerCase()],null===(o=e.lang)||void 0===o?void 0:o.toLowerCase())):e.source}</code></pre>
      </div>`}))}
  </section>`}function Ob(e){return P`
    <div class="req-res-title" style="margin-top:12px">CALLBACKS</div>
    ${Object.entries(e).map((e=>P`
      <div class="tiny-title" style="padding: 12px; border:1px solid var(--light-border-color)"> 
        ${e[0]}
        ${Object.entries(e[1]).map((e=>P`
          <div class="mono-font small-font-size" style="display:flex; margin-left:16px;">
            <div> 
              ${Object.entries(e[1]).map((t=>{var r,n,o;return P`
                <div>
                  <div style="margin-top:12px;">
                    <div class="method method-fg ${t[0]}" style="width:70px; border:none; margin:0; padding:0; line-height:20px; vertical-align: baseline;text-align:left"> 
                      <span style="font-size:20px;"> &#x2944; </span> 
                      ${t[0]} 
                    </div>
                    <span style="line-height:20px; vertical-align: baseline;">${e[0]} </span>
                  </div>  
                  <div class='expanded-req-resp-container'>
                    <api-request
                      class = "${this.renderStyle}-mode callback"  
                      style = "width:100%;"
                      callback = "true"
                      method = "${t[0]||""}", 
                      path = "${e[0]||""}" 
                      .parameters = "${(null===(r=t[1])||void 0===r?void 0:r.parameters)||""}" 
                      .request_body = "${(null===(n=t[1])||void 0===n?void 0:n.requestBody)||""}"
                      fill-request-fields-with-example = "${this.fillRequestFieldsWithExample}"
                      allow-try = "false"
                      render-style="${this.renderStyle}" 
                      schema-style = "${this.schemaStyle}"
                      active-schema-tab = "${this.defaultSchemaTab}"
                      schema-expand-level = "${this.schemaExpandLevel}"
                      schema-description-expanded = "${this.schemaDescriptionExpanded}"
                      allow-schema-description-expand-toggle = "${this.allowSchemaDescriptionExpandToggle}",
                      schema-hide-read-only = "${this.schemaHideReadOnly}"
                      fetch-credentials = "${this.fetchCredentials}"
                      exportparts="btn btn-fill btn-outline btn-try"
                    > </api-request>

                    <api-response
                      style = "width:100%;"
                      class = "${this.renderStyle}-mode"
                      callback = "true"
                      .responses="${null===(o=t[1])||void 0===o?void 0:o.responses}"
                      render-style="${this.renderStyle}"
                      schema-style="${this.schemaStyle}"
                      active-schema-tab = "${this.defaultSchemaTab}"
                      schema-expand-level = "${this.schemaExpandLevel}"
                      schema-description-expanded = "${this.schemaDescriptionExpanded}"
                      allow-schema-description-expand-toggle = "${this.allowSchemaDescriptionExpandToggle}"
                      exportparts = "btn--resp btn-fill--resp btn-outline--resp"
                    > </api-response>
                  </div>
                </div>  
              `}))}
            </div>  
          </div>  
        `))}
      </div>  
    `))}
  `}const Cb=l`
.border-top {
  border-top:1px solid var(--border-color);
}
.border{
  border:1px solid var(--border-color);
  border-radius: var(--border-radius);
}
.light-border{
  border:1px solid var(--light-border-color);
  border-radius: var(--border-radius);
}
.pad-8-16{
  padding: 8px 16px;
}
.pad-top-8{
  padding-top: 8px;
}
.mar-top-8{
  margin-top: 8px;
}
`;function jb(e){if(!e)return;let t="",r="";if(e.$ref){const r=e.$ref.lastIndexOf("/");t=`{recursive: ${e.$ref.substring(r+1)}} `}else e.type?(t=Array.isArray(e.type)?e.type.join("┃"):e.type,(e.format||e.enum)&&(t=t.replace("string",e.enum?"enum":e.format)),e.nullable&&(t+="┃null")):t=0===Object.keys(e).length?"any":"{missing-type-info}";const n={type:t,format:e.format||"",pattern:e.pattern&&!e.enum?e.pattern:"",readOrWriteOnly:e.readOnly?"🆁":e.writeOnly?"🆆":"",deprecated:e.deprecated?"❌":"",examples:e.examples||e.example,default:e.default||"",description:e.description||"",constrain:"",allowedValues:"",arrayType:"",html:""};if("{recursive}"===n.type?n.description=e.$ref.substring(e.$ref.lastIndexOf("/")+1):"{missing-type-info}"!==n.type&&"any"!==n.type||(n.description=n.description||""),n.allowedValues=Array.isArray(e.enum)?e.enum.join("┃"):"","array"===t&&e.items){var o,i,a;const t=null===(o=e.items)||void 0===o?void 0:o.type,r=void 0!==(null===(i=e.items)||void 0===i?void 0:i.default)?e.items.default:"";n.arrayType=`${e.type} of ${Array.isArray(t)?t.join(""):t}`,n.default=r,n.allowedValues=Array.isArray(null===(a=e.items)||void 0===a?void 0:a.enum)?e.items.enum.join("┃"):""}return t.match(/integer|number/g)&&(void 0===e.minimum&&void 0===e.exclusiveMinimum||(r+=void 0!==e.minimum?`Min ${e.minimum}`:`More than ${e.exclusiveMinimum}`),void 0===e.maximum&&void 0===e.exclusiveMaximum||(r+=void 0!==e.maximum?`${r?"┃":""}Max ${e.maximum}`:`${r?"┃":""}Less than ${e.exclusiveMaximum}`),void 0!==e.multipleOf&&(r+=`${r?"┃":""} multiple of ${e.multipleOf}`)),t.match(/string/g)&&(void 0!==e.minLength&&void 0!==e.maxLength?r+=`${r?"┃":""}${e.minLength} to ${e.maxLength} chars`:void 0!==e.minLength?r+=`${r?"┃":""}Min ${e.minLength} chars`:void 0!==e.maxLength&&(r+=`Max ${r?"┃":""}${e.maxLength} chars`)),n.constrain=r,n.html=`${n.type}~|~${n.readOrWriteOnly}~|~${n.constrain}~|~${n.default}~|~${n.allowedValues}~|~${n.pattern}~|~${n.description}~|~${e.title||""}~|~${n.deprecated?"deprecated":""}`,n}function Tb(e){return e?{Example:{value:e}}:e}function _b(e,t="string"){let r,n;if(e){if(e.constructor===Object){const t=Object.values(e);r=t.length>0?"boolean"==typeof t[0].value||"number"==typeof t[0].value?t[0].value.toString():t[0].value:"",n=Object.values(e).map((e=>({value:"boolean"==typeof e.value||"number"==typeof e.value?e.value.toString():e.value,description:e.description||e.summary||e.value})))}else Array.isArray(e)||(e=e?[e]:[]),e.length>0&&("array"===t?(r=e[0],n=e.map((e=>({value:e,description:Array.isArray(e)?e.join(" , "):e})))):(r=e[0].toString(),n=e.map((e=>({value:e.toString(),description:e})))));return{exampleVal:r,exampleList:n}}return{exampleVal:"",exampleList:[]}}function Fb(e){const t=e.examples?e.examples[0]:null===e.example?null:e.example||void 0;if(""===t)return"";if(null===t)return null;if(0===t)return 0;if(t)return t;if(0===Object.keys(e).length)return null;if(e.$ref)return e.$ref;const r=Array.isArray(e.type)?e.type[0]:e.type;if(!r)return"?";if(r.match(/^integer|^number/g)){const t=Number.isNaN(Number(e.multipleOf))?void 0:Number(e.multipleOf),n=Number.isNaN(Number(e.maximum))?void 0:Number(e.maximum),o=Number.isNaN(Number(e.minimum))?Number.isNaN(Number(e.exclusiveMinimum))?n||0:Number(e.exclusiveMinimum)+(r.startsWith("integer")?1:.001):Number(e.minimum);return t?t>=o?t:o%t==0?o:Math.ceil(o/t)*t:o}if(r.match(/^boolean/g))return!1;if(r.match(/^null/g))return null;if(r.match(/^string/g)){if(e.enum)return e.enum[0];if(e.pattern)return e.pattern;if(!e.format){const t=Number.isNaN(e.minLength)?void 0:Number(e.minLength),r=Number.isNaN(e.maxLength)?void 0:Number(e.maxLength),n=t||(r>6?6:r||void 0);return n?"A".repeat(n):"string"}{const t=`${Date.now().toString(16)}${Math.random().toString(16)}0`.repeat(16);switch(e.format.toLowerCase()){case"url":case"uri":return"http://example.com";case"date":return new Date(0).toISOString().split("T")[0];case"time":return new Date(0).toISOString().split("T")[1];case"date-time":return new Date(0).toISOString();case"duration":return"P3Y6M4DT12H30M5S";case"email":case"idn-email":return"user@example.com";case"hostname":case"idn-hostname":return"www.example.com";case"ipv4":return"198.51.100.42";case"ipv6":return"2001:0db8:5b96:0000:0000:426f:8e17:642a";case"uuid":return[t.substr(0,8),t.substr(8,4),`4000-8${t.substr(13,3)}`,t.substr(16,12)].join("-");default:return""}}}return"?"}function Bb(e,t=1){const r="  ".repeat(t);let n="";if(1===t&&"object"!=typeof e)return`\n${r}${e.toString()}`;for(const o in e)n=Array.isArray(e[o])||"object"==typeof e[o]?`${n}\n${r}<${o}> ${Bb(e[o],t+1)}\n${r}</${o}>`:`${n}\n${r}<${o}> ${e[o].toString()} </${o}>`;return n}function Ib(e,t){"object"==typeof t&&null!==t&&(e.title&&(t["::TITLE"]=e.title),e.description&&(t["::DESCRIPTION"]=e.description))}function Pb(e){if("object"==typeof e&&null!==e){delete e["::TITLE"],delete e["::DESCRIPTION"];for(const t in e)Pb(e[t])}}function Rb(e,t,r){for(const n in t)t[n][r]=e}function Ub(e,t,r){let n=0;const o={};for(const i in e){for(const a in r)if(o[`example-${n}`]={...e[i]},o[`example-${n}`][t]=r[a],n++,n>=10)break;if(n>=10)break}return o}function Lb(e,t={}){let r={};if(e){if(e.allOf){const n={};if(1===e.allOf.length&&!e.allOf[0].properties&&!e.allOf[0].items){if(e.allOf[0].$ref)return"{  }";if(e.allOf[0].readOnly&&t.includeReadOnly){return Fb(e.allOf[0])}return}e.allOf.forEach((e=>{if("object"===e.type||e.properties||e.allOf||e.anyOf||e.oneOf){const r=Lb(e,t);Object.assign(n,r)}else if("array"===e.type||e.items){const r=[Lb(e,t)];Object.assign(n,r)}else{if(!e.type)return"";{const t=`prop${Object.keys(n).length}`;n[t]=Fb(e)}}})),r=n}else if(e.oneOf){const n={};if(e.properties)for(const t in e.properties)n[t]=Fb(e.properties[t]);if(e.oneOf.length>0){let o=0;for(const i in e.oneOf){const a=Lb(e.oneOf[i],t);for(const t in a){const s=Object.assign(a[t],n);r[`example-${o}`]=s,Ib(e.oneOf[i],r[`example-${o}`]),o++}}}}else if(e.anyOf){let n;if("object"===e.type||e.properties){n={"example-0":{}};for(const r in e.properties){if(e.example){n=e;break}e.properties[r].deprecated&&!t.includeDeprecated||(e.properties[r].readOnly&&!t.includeReadOnly||e.properties[r].writeOnly&&!t.includeWriteOnly||(n=Ub(n,r,Lb(e.properties[r],t))))}}let o=0;for(const i in e.anyOf){const a=Lb(e.anyOf[i],t);for(const t in a){if(void 0!==n)for(const e in n)r[`example-${o}`]={...n[e],...a[t]};else r[`example-${o}`]=a[t];Ib(e.anyOf[i],r[`example-${o}`]),o++}}}else if("object"===e.type||e.properties)if(r["example-0"]={},Ib(e,r["example-0"]),e.example)r["example-0"]=e.example;else for(const i in e.properties){var n,o;if(!e.properties[i].deprecated||t.includeDeprecated)if(!e.properties[i].readOnly||t.includeReadOnly)if(!e.properties[i].writeOnly||t.includeWriteOnly)if("array"===e.properties[i].type||e.properties[i].items)if(e.properties[i].example)Rb(e.properties[i].example,r,i);else if(null!==(n=e.properties[i])&&void 0!==n&&null!==(o=n.items)&&void 0!==o&&o.example)Rb([e.properties[i].items.example],r,i);else{const n=Lb(e.properties[i].items,t),o=[];for(const e in n)o[e]=[n[e]];r=Ub(r,i,o)}else r=Ub(r,i,Lb(e.properties[i],t))}else{if("array"!==e.type&&!e.items)return{"example-0":Fb(e)};var i;if(e.example)r["example-0"]=e.example;else if(null!==(i=e.items)&&void 0!==i&&i.example)r["example-0"]=[e.items.example];else{const n=Lb(e.items,t);let o=0;for(const t in n)r[`example-${o}`]=[n[t]],Ib(e.items,r[`example-${o}`]),o++}}return r}}function Nb(e,t,r=0,n=""){if(e){if(e.allOf){const n={};if(1===e.allOf.length&&!e.allOf[0].properties&&!e.allOf[0].items){return`${jb(e.allOf[0]).html}`}e.allOf.map(((e,t)=>{if("object"===e.type||e.properties||e.allOf||e.anyOf||e.oneOf){const o=(e.anyOf||e.oneOf)&&t>0?t:"",i=Nb(e,{},r+1,o);Object.assign(n,i)}else if("array"===e.type||e.items){const t=Nb(e,{},r+1);Object.assign(n,t)}else{if(!e.type)return"";{const t=`prop${Object.keys(n).length}`,r=jb(e);n[t]=`${r.html}`}}})),t=n}else if(e.anyOf||e.oneOf){if(t["::description"]=e.description||"","object"===e.type||e.properties){t["::description"]=e.description||"",t["::type"]="object";for(const n in e.properties)e.required&&e.required.includes(n)?t[`${n}*`]=Nb(e.properties[n],{},r+1):t[n]=Nb(e.properties[n],{},r+1)}const o={},i=e.anyOf?"anyOf":"oneOf";e[i].forEach(((e,t)=>{if("object"===e.type||e.properties||e.allOf||e.anyOf||e.oneOf){const r=Nb(e,{});o[`::OPTION~${t+1}${e.title?`~${e.title}`:""}`]=r,o["::type"]="xxx-of-option"}else if("array"===e.type||e.items){const r=Nb(e,{});o[`::OPTION~${t+1}${e.title?`~${e.title}`:""}`]=r,o["::type"]="xxx-of-array"}else{const r=`::OPTION~${t+1}${e.title?`~${e.title}`:""}`;o[r]=`${jb(e).html}`,o["::type"]="xxx-of-option"}})),t[e.anyOf?`::ANY~OF ${n}`:`::ONE~OF ${n}`]=o,t["::type"]="xxx-of"}else if(Array.isArray(e.type)){const n=JSON.parse(JSON.stringify(e)),a=[],s=[];let l;var o;if(n.type.forEach((e=>{var t,r;e.match(/integer|number|string|null|boolean/g)?a.push(e):"array"===e&&"string"==typeof(null===(t=n.items)||void 0===t?void 0:t.type)&&null!==(r=n.items)&&void 0!==r&&r.type.match(/integer|number|string|null|boolean/g)?"string"===n.items.type&&n.items.format?a.push(`[${n.items.format}]`):a.push(`[${n.items.type}]`):s.push(e)})),a.length>0)if(n.type=a.join("┃"),l=jb(n),0===s.length)return`${(null===(o=l)||void 0===o?void 0:o.html)||""}`;if(s.length>0){var i;t["::type"]="xxx-of";const o={"::type":"xxx-of-option"};s.forEach(((t,i)=>{if("null"===t)o[`::OPTION~${i+1}`]="NULL~|~~|~~|~~|~~|~~|~~|~~|~";else if("integer, number, string, boolean,".includes(`${t},`)){n.type=Array.isArray(t)?t.join("┃"):t;const e=jb(n);o[`::OPTION~${i+1}`]=e.html}else if("object"===t){const t={"::description":e.description||"","::type":"object","::deprecated":e.deprecated||!1};for(const n in e.properties)e.required&&e.required.includes(n)?t[`${n}*`]=Nb(e.properties[n],{},r+1):t[n]=Nb(e.properties[n],{},r+1);o[`::OPTION~${i+1}`]=t}else"array"===t&&(o[`::OPTION~${i+1}`]={"::description":e.description||"","::type":"array","::props":Nb(e.items,{},r+1)})})),o[`::OPTION~${s.length+1}`]=(null===(i=l)||void 0===i?void 0:i.html)||"",t["::ONE~OF"]=o}}else if("object"===e.type||e.properties){t["::description"]=e.description||"",t["::type"]="object",t["::deprecated"]=e.deprecated||!1;for(const n in e.properties)e.required&&e.required.includes(n)?t[`${n}*`]=Nb(e.properties[n],{},r+1):t[n]=Nb(e.properties[n],{},r+1);e.additionalProperties&&(t["<any-key>"]=Nb(e.additionalProperties,{}))}else{if("array"!==e.type&&!e.items){const t=jb(e);return null!=t&&t.html?`${t.html}`:""}var a;t["::description"]=e.description?e.description:null!==(a=e.items)&&void 0!==a&&a.description?`array&lt;${e.items.description}&gt;`:"",t["::type"]="array",e.items.items&&(t["::array-type"]=e.items.items.type),t["::props"]=Nb(e.items,{},r+1)}return t}}function zb(e="",t="",r,n,o=!0,i=!0,a="json",s=!1){const l=[];if(e)for(const t in e){let r="",o="json";if(n.toLowerCase().includes("json")){if("text"===a)r="string"==typeof e[t].value?e[t].value:JSON.stringify(e[t].value,void 0,2),o="text";else if(r=e[t].value,"string"==typeof e[t].value)try{const n=e[t].value.replace(/([\w]+)(:)/g,'"$1"$2').replace(/'/g,'"');r=JSON.parse(n),o="json"}catch(n){o="text",r=e[t].value}}else r=e[t].value,o="text";l.push({exampleId:t,exampleSummary:e[t].summary||t,exampleDescription:e[t].description||"",exampleType:n,exampleValue:r,exampleFormat:o})}else if(t){let e="",r="json";if(n.toLowerCase().includes("json")){if("text"===a)e="string"==typeof t?t:JSON.stringify(t,void 0,2),r="text";else if("object"==typeof t)e=t,r="json";else if("string"==typeof t)try{e=JSON.parse(t),r="json"}catch(n){r="text",e=t}}else e=t,r="text";l.push({exampleId:"Example",exampleSummary:"",exampleDescription:"",exampleType:n,exampleValue:e,exampleFormat:r})}if(0===l.length||!0===s)if(r)if(r.example)l.push({exampleId:"Example",exampleSummary:"",exampleDescription:"",exampleType:n,exampleValue:r.example,exampleFormat:n.toLowerCase().includes("json")&&"object"==typeof r.example?"json":"text"});else if(n.toLowerCase().includes("json")||n.toLowerCase().includes("text")||n.toLowerCase().includes("*/*")||n.toLowerCase().includes("xml")){let e="",t="",s="",c="";n.toLowerCase().includes("xml")?(e=r.xml&&r.xml.name?`<${r.xml.name}>`:"<root>",t=r.xml&&r.xml.name?`</${r.xml.name}>`:"</root>",s="text"):s=a;const p=Lb(r,{includeReadOnly:o,includeWriteOnly:i,deprecated:!0});let u=0;for(const r in p){if(!p[r])continue;const o=p[r]["::TITLE"]||"Example "+ ++u,i=p[r]["::DESCRIPTION"]||"";Pb(p[r]),c=n.toLowerCase().includes("xml")?`${e}${Bb(p[r])}\n${t}`:"text"===a?JSON.stringify(p[r],null,2):p[r],l.push({exampleId:r,exampleSummary:o,exampleDescription:i,exampleType:n,exampleFormat:s,exampleValue:c})}}else l.push({exampleId:"Example",exampleSummary:"",exampleDescription:"",exampleType:n,exampleValue:"",exampleFormat:"text"});else l.push({exampleId:"Example",exampleSummary:"",exampleDescription:"",exampleType:n,exampleValue:"",exampleFormat:"text"});return l}function qb(e){return"application/json"===e?"json":"application/xml"===e?"xml":null}function Mb(e){if(e.schema)return[e.schema,null];if(e.content)for(const t of Object.keys(e.content))if(e.content[t].schema)return[e.content[t].schema,qb(t),e.content[t]];return[null,null]}customElements.define("json-tree",class extends ee{static get properties(){return{data:{type:Object},renderStyle:{type:String,attribute:"render-style"}}}static get styles(){return[ie,Cb,ae,l`
      :host{
        display:flex;
      }
      .json-tree {
        position: relative;
        font-family: var(--font-mono);
        font-size: var(--font-size-small);
        display:inline-block;
        overflow:hidden;
        word-break: break-all;
        flex:1;
        line-height: calc(var(--font-size-small) + 6px);
        direction: ltr; 
        text-align: left;
      }

      .open-bracket{
        display:inline-block;
        padding: 0 20px 0 0;
        cursor:pointer;
        border: 1px solid transparent;
        border-radius:3px;
      }
      .open-bracket:hover{
        color:var(--primary-color);
        background-color:var(--hover-color);
        border: 1px solid var(--border-color);
      }
      .inside-bracket{
        padding-left:12px;
        border-left:1px dotted var(--border-color);
      }
      .open-bracket.collapsed + .inside-bracket,
      .open-bracket.collapsed + .inside-bracket + .close-bracket {
        display:none;
      }

      .string{color:var(--green);}
      .number{color:var(--blue);}
      .null{color:var(--red);}
      .boolean{color:var(--purple);}
      .object{color:var(--fg)}
      .toolbar {
        position: absolute;
        top:5px;
        right:6px;
        display:flex;
        padding:2px;
        align-items: center;
      }`,fe]}render(){return P`
      <div class = "json-tree" >
        <div class='toolbar'> 
          <button class="toolbar-btn" part="btn btn-fill" @click='${e=>{ve(JSON.stringify(this.data,null,2),e)}}'> Copy </button>
        </div>
        ${this.generateTree(this.data,!0)}
      </div>  
    `}generateTree(e,t=!1){if(null===e)return P`<div class="null" style="display:inline;">null</div>`;if("object"==typeof e&&e instanceof Date==!1){const r=Array.isArray(e)?"array":"pure_object";return 0===Object.keys(e).length?P`${Array.isArray(e)?"[ ],":"{ },"}`:P`
      <div class="open-bracket expanded ${"array"===r?"array":"object"} " @click="${this.toggleExpand}" > ${"array"===r?"[":"{"}</div>
      <div class="inside-bracket">
        ${Object.keys(e).map(((t,n,o)=>P`
          <div class="item"> 
            ${"pure_object"===r?P`${t}:`:""}
            ${this.generateTree(e[t],n===o.length-1)}
          </div>`))}
      </div>
      <div class="close-bracket">${"array"===r?"]":"}"}${t?"":","}</div>
      `}return"string"==typeof e||e instanceof Date?P`<span class="${typeof e}">"${e}"</span>${t?"":","}`:P`<span class="${typeof e}">${e}</span>${t?"":","}`}toggleExpand(e){const t=e.target;t.classList.contains("expanded")?(t.classList.replace("expanded","collapsed"),e.target.innerHTML=e.target.classList.contains("array")?"[...]":"{...}"):(t.classList.replace("collapsed","expanded"),e.target.innerHTML=e.target.classList.contains("array")?"[":"{")}});const Hb=l`

*, *:before, *:after { box-sizing: border-box; }

.tr {
  display: flex;
  flex: none;
  width: 100%;
  box-sizing: content-box;
  border-bottom: 1px dotted transparent;
}
.td {
  display: block;
  flex: 0 0 auto;
}
.key {
  font-family: var(--font-mono);
  white-space: normal;
  word-break: break-all;
}

.collapsed-descr .key{
  overflow:hidden;
}

.key-descr {
  font-family:var(--font-regular);
  color:var(--light-fg);
  flex-shrink: 1;
  text-overflow: ellipsis;
  overflow: hidden;
  display: none;
}
.expanded-descr .key-descr{
  max-height:auto;
  overflow:hidden;
  display: none;
}
.collapsed-descr .tr {
  max-height:20px;
}

.tr.xxx-of{
  border-top: 1px dotted var(--primary-color);
}

.xxx-of-key {
  font-size: calc(var(--font-size-small) - 2px); 
  font-weight:bold; 
  background-color:var(--primary-color); 
  color:var(--primary-color-invert); 
  border-radius:2px;
  line-height:calc(var(--font-size-small) + 6px);
  padding:0px 5px; 
  margin-bottom:1px; 
  display:inline-block;
}

.xxx-of-descr {
    font-family: var(--font-regular);
    color: var(--primary-color);
    font-size: calc(var(--font-size-small) - 1px);
    margin-left: 2px;
}

.stri, .string, .uri, .url, .byte, .bina, .date, .pass, .ipv4, .ipv4, .uuid, .emai, .host {color:var(--green);}
.inte, .numb, .number, .int6, .int3, .floa, .doub, .deci .blue {color:var(--blue);}
.null {color:var(--red);}
.bool, .boolean{color:var(--orange)}
.enum {color:var(--purple)}
.recu {color:var(--brown)}
.toolbar {
  display:flex;
  width:100%;
  padding: 2px 0;
  color:var(--primary-color);
}
.toolbar-item {
  cursor:pointer;
  padding:5px 0;
  margin:0 2px;
}
.schema-root-type {
  cursor:auto;
  color:var(--fg2);
  font-weight: bold;
  text-transform: uppercase;
}
.schema-root-type.xxx-of {
  display:none;
}
.toolbar-item:first-of-type { margin:0 2px 0 0;}

@media only screen and (min-width: 500px) {
  .key-descr {
    display: block;
  }
  .expanded-descr .key-descr{
    display: block;
  }
}
`;customElements.define("schema-tree",class extends ee{static get properties(){return{data:{type:Object},schemaExpandLevel:{type:Number,attribute:"schema-expand-level"},schemaDescriptionExpanded:{type:String,attribute:"schema-description-expanded"},allowSchemaDescriptionExpandToggle:{type:String,attribute:"allow-schema-description-expand-toggle"},schemaHideReadOnly:{type:String,attribute:"schema-hide-read-only"},schemaHideWriteOnly:{type:String,attribute:"schema-hide-write-only"}}}connectedCallback(){super.connectedCallback(),(!this.schemaExpandLevel||this.schemaExpandLevel<1)&&(this.schemaExpandLevel=99999),this.schemaDescriptionExpanded&&"true false".includes(this.schemaDescriptionExpanded)||(this.schemaDescriptionExpanded="false"),this.schemaHideReadOnly&&"true false".includes(this.schemaHideReadOnly)||(this.schemaHideReadOnly="true"),this.schemaHideWriteOnly&&"true false".includes(this.schemaHideWriteOnly)||(this.schemaHideWriteOnly="true")}static get styles(){return[ie,Hb,Cb,l`
      .tree {
        font-size:var(--font-size-small);
        text-align: left;
        direction: ltr;
        line-height:calc(var(--font-size-small) + 6px);
      }
      .tree .tr:hover{
        background-color:var(--hover-color);
      }
      .collapsed-descr .tr {
        max-height:calc(var(--font-size-small) + 8px);
      }
      .collapsed-descr .m-markdown-small p {
        line-height:calc(var(--font-size-small) + 6px);
      }

      .tree .key {
        max-width: 300px;
      }
      .key.deprecated .key-label {
        text-decoration: line-through; 
      }

      .open-bracket{
        display:inline-block;
        padding: 0 20px 0 0;
        cursor:pointer;
        border: 1px solid transparent;
        border-radius:3px;
      }
      .open-bracket:hover {
        color:var(--primary-color);
        background-color:var(--hover-color);
        border: 1px solid var(--border-color);
      }
      .close-bracket{
        display:inline-block;
        font-family: var(--font-mono);
      }
      .tr.collapsed + .inside-bracket,
      .tr.collapsed + .inside-bracket + .close-bracket{
        display:none;
      }
      .inside-bracket.object,
      .inside-bracket.array {
        border-left: 1px dotted var(--border-color);
      }
      .inside-bracket.xxx-of {
        padding:5px 0px;
        border-style: dotted;
        border-width: 0 0 1px 0;
        border-color:var(--primary-color);
      }`,fe]}render(){var e,t,r;return P`
      <div class="tree ${"true"===this.schemaDescriptionExpanded?"expanded-descr":"collapsed-descr"}">
        <div class="toolbar">
          <div class="toolbar-item schema-root-type ${(null===(e=this.data)||void 0===e?void 0:e["::type"])||""} "> ${(null===(t=this.data)||void 0===t?void 0:t["::type"])||""} </div>
          ${"true"===this.allowSchemaDescriptionExpandToggle?P`
              <div style="flex:1"></div>
              <div class='toolbar-item' @click='${()=>{this.schemaDescriptionExpanded="true"===this.schemaDescriptionExpanded?"false":"true"}}'> 
                ${"true"===this.schemaDescriptionExpanded?"Single line description":"Multiline description"}
              </div>
            `:""}
        </div>
        ${null!==(r=this.data)&&void 0!==r&&r["::description"]?P`<span class='m-markdown'> ${yb(re()(this.data["::description"]||""))}</span>`:""}
        ${this.data?P`
            ${this.generateTree("array"===this.data["::type"]?this.data["::props"]:this.data,this.data["::type"],this.data["::array-type"]||"")}`:P`<span class='mono-font' style='color:var(--red)'> Schema not found </span>`}
      </div>  
    `}generateTree(e,t="object",r="",n="",o="",i=0,a=0){var s;if(!e)return P`<div class="null" style="display:inline;">null</div>`;if(0===Object.keys(e).length)return P`<span class="key object">${n}:{ }</span>`;let l="",c="";if(n.startsWith("::ONE~OF")||n.startsWith("::ANY~OF"))l=n.replace("::","").replace("~"," ");else if(n.startsWith("::OPTION")){const e=n.split("~");l=e[1],c=e[2]}else l=n;const p=400-12*a;let u="",d="";const h=null!==(s=e["::type"])&&void 0!==s&&s.startsWith("xxx-of")?i:i+1,f="xxx-of-option"===t||"xxx-of-option"===e["::type"]||n.startsWith("::OPTION")?a:a+1;if("object"===e["::type"])"array"===t?(u=i<this.schemaExpandLevel?P`<span class="open-bracket array-of-object" @click="${this.toggleObjectExpand}">[{</span>`:P`<span class="open-bracket array-of-object" @click="${this.toggleObjectExpand}">[{...}]</span>`,d="}]"):(u=i<this.schemaExpandLevel?P`<span class="open-bracket object" @click="${this.toggleObjectExpand}">{</span>`:P`<span class="open-bracket object" @click="${this.toggleObjectExpand}">{...}</span>`,d="}");else if("array"===e["::type"])if("array"===t){const e="object"!==r?r:"";u=i<this.schemaExpandLevel?P`<span class="open-bracket array-of-array" data-array-type="${e}" @click="${this.toggleObjectExpand}">[[ ${e} </span>`:P`<span class="open-bracket array-of-array"  data-array-type="${e}" @click="${this.toggleObjectExpand}">[[...]]</span>`,d="]]"}else u=i<this.schemaExpandLevel?P`<span class="open-bracket array" @click="${this.toggleObjectExpand}">[</span>`:P`<span class="open-bracket array" @click="${this.toggleObjectExpand}">[...]</span>`,d="]";var m;if("object"==typeof e)return P`
        <div class="tr ${i<this.schemaExpandLevel||null!==(m=e["::type"])&&void 0!==m&&m.startsWith("xxx-of")?"expanded":"collapsed"} ${e["::type"]||"no-type-info"}">
          <div class="td key ${e["::deprecated"]?"deprecated":""}" style='min-width:${p}px'>
            ${"xxx-of-option"===e["::type"]||"xxx-of-array"===e["::type"]||n.startsWith("::OPTION")?P`<span class='key-label xxx-of-key'>${l}</span><span class="xxx-of-descr">${c}</span>`:l.endsWith("*")?P`<span class="key-label">${l.substring(0,l.length-1)}</span><span style='color:var(--red);'>*</span>`:"::props"===l||"::ARRAY~OF"===l?"":i>0?P`<span class="key-label">${l}:</span>`:""}
            ${"xxx-of"===e["::type"]&&"array"===t?P`<span style="color:var(--primary-color)">ARRAY</span>`:""} 
            ${u}
          </div>
          <div class='td key-descr m-markdown-small'>${yb(re()(o||""))}</div>
        </div>
        <div class='inside-bracket ${e["::type"]||"no-type-info"}' style='padding-left:${"xxx-of-option"===e["::type"]||"xxx-of-array"===e["::type"]?0:12}px;'>
          ${Array.isArray(e)&&e[0]?P`${this.generateTree(e[0],"xxx-of-option","","::ARRAY~OF","",h,f)}`:P`
              ${Object.keys(e).map((t=>P`
                ${["::description","::type","::props","::deprecated","::array-type"].includes(t)?"array"===e[t]["::type"]||"object"===e[t]["::type"]?P`${this.generateTree("array"===e[t]["::type"]?e[t]["::props"]:e[t],e[t]["::type"],e[t]["::array-type"]||"",t,e[t]["::description"],h,f)}`:"":P`${this.generateTree("array"===e[t]["::type"]?e[t]["::props"]:e[t],e[t]["::type"],e[t]["::array-type"]||"",t,e[t]["::description"],h,f)}`}
              `))}
            `}
        </div>
        ${e["::type"]&&e["::type"].includes("xxx-of")?"":P`<div class='close-bracket'> ${d} </div>`}
      `;const[y,g,v,b,x,w,$,,A]=e.split("~|~");if("🆁"===g&&"true"===this.schemaHideReadOnly)return;if("🆆"===g&&"true"===this.schemaHideWriteOnly)return;const k=y.replace(/┃.*/g,"").replace(/[^a-zA-Z0-9+]/g,"").substring(0,4).toLowerCase();return P`
      <div class = "tr primitive">
        <div class="td key ${A}" style='min-width:${p}px' >
          ${l.endsWith("*")?P`<span class="key-label">${l.substring(0,l.length-1)}</span><span style='color:var(--red);'>*</span>:`:n.startsWith("::OPTION")?P`<span class='key-label xxx-of-key'>${l}</span><span class="xxx-of-descr">${c}</span>`:P`<span class="key-label">${l}:</span>`}
          <span class="${k}" > 
            ${"array"===t?`[${y}]`:`${y}`}
            ${g}
          </span>
        </div>
        <div class='td key-descr'>
          ${"array"===t?P`<span class="m-markdown-small">${yb(re()(o))}</span>`:""}
          ${v?P`<div style='display:inline-block; line-break:anywhere; margin-right:8px'><span class='bold-text'>Constraints: </span>${v}</div>`:""}
          ${b?P`<div style='display:inline-block; line-break:anywhere; margin-right:8px'><span class='bold-text'>Default: </span>${b}</div>`:""}
          ${x?P`<div style='display:inline-block; line-break:anywhere; margin-right:8px'><span class='bold-text'>Allowed: </span>${x}</div>`:""}
          ${w?P`<div style='display:inline-block; line-break: anywhere; margin-right:8px'><span class='bold-text'>Pattern: </span>${w}</div>`:""}
          ${$?P`<span class="m-markdown-small">${yb(re()($))}</span>`:""}
        </div>
      </div>
    `}toggleObjectExpand(e){const t=e.target.closest(".tr");t.classList.contains("expanded")?(t.classList.replace("expanded","collapsed"),e.target.innerHTML=e.target.classList.contains("array-of-object")?"[{...}]":e.target.classList.contains("array-of-array")?"[[...]]":e.target.classList.contains("array")?"[...]":"{...}"):(t.classList.replace("collapsed","expanded"),e.target.innerHTML=e.target.classList.contains("array-of-object")?"[{":e.target.classList.contains("array-of-array")?`[[ ${e.target.dataset.arrayType}`:e.target.classList.contains("object")?"{":"[")}});customElements.define("tag-input",class extends ee{render(){let e="";return Array.isArray(this.value)&&(e=P`${this.value.filter((e=>""!==e.trim())).map((e=>P`<span class='tag'>${e}</span>`))}`),P`
      <div class='tags' tabindex="0">
        ${e}
        <input type="text" class='editor' @paste="${e=>this.afterPaste(e)}" @keydown="${this.afterKeyDown}" @blur="${this.onBlur}" placeholder="${this.placeholder||""}">
      </div>
    `}static get properties(){return{placeholder:{type:String},value:{type:Array,attribute:"value"}}}attributeChangedCallback(e,t,r){"value"===e&&r&&t!==r&&(this.value=r.split(",").filter((e=>""!==e.trim()))),super.attributeChangedCallback(e,t,r)}afterPaste(e){const t=(e.clipboardData||window.clipboardData).getData("Text");this.value=t?t.split(",").filter((e=>""!==e.trim())):"",e.preventDefault()}afterKeyDown(e){13===e.keyCode?(e.stopPropagation(),e.preventDefault(),e.target.value&&(Array.isArray(this.value)?this.value=[...this.value,e.target.value]:this.value=[e.target.value],e.target.value="")):8===e.keyCode&&0===e.target.value.length&&Array.isArray(this.value)&&this.value.length>0&&(this.value.splice(-1),this.value=[...this.value])}onBlur(e){e.target.value&&(Array.isArray(this.value)?this.value=[...this.value,e.target.value]:this.value=[e.target.value],e.target.value="")}static get styles(){return[l`
      .tags{
        display:flex;
        flex-wrap: wrap;
        outline: none;
        padding:0;
        border-radius:var(--border-radius);
        border:1px solid var(--border-color);
        cursor:text;
        overflow:hidden;
        background:var(--input-bg);
      }
      .tag, .editor {
        padding:3px;
        margin:2px;
      }
      .tag{
        border:1px solid var(--border-color);
        background-color:var(--bg3);
        color:var(--fg3);
        border-radius:var(--border-radius);
        word-break: break-all;
        font-size: var(--font-size-small);
      }
      .tag:hover ~ #cursor {
        display: block;
      }
      .editor{
        flex:1;
        border:1px solid transparent;
        color:var(--fg);
        min-width:60px;
        outline: none;
        line-height: inherit;
        font-family:inherit;
        background:transparent;
        font-size: calc(var(--font-size-small) + 1px);
      }
      .editor::placeholder {
        color: var(--placeholder-color);
        opacity:1;
      }
    `]}});customElements.define("api-request",class extends ee{constructor(){super(),this.responseMessage="",this.responseStatus="success",this.responseHeaders="",this.responseText="",this.responseUrl="",this.curlSyntax="",this.activeResponseTab="response",this.selectedRequestBodyType="",this.selectedRequestBodyExample="",this.activeParameterSchemaTabs={}}static get properties(){return{serverUrl:{type:String,attribute:"server-url"},servers:{type:Array},method:{type:String},path:{type:String},security:{type:Array},parameters:{type:Array},request_body:{type:Object},api_keys:{type:Array},parser:{type:Object},accept:{type:String},callback:{type:String},responseMessage:{type:String,attribute:!1},responseText:{type:String,attribute:!1},responseHeaders:{type:String,attribute:!1},responseStatus:{type:String,attribute:!1},responseUrl:{type:String,attribute:!1},fillRequestFieldsWithExample:{type:String,attribute:"fill-request-fields-with-example"},allowTry:{type:String,attribute:"allow-try"},renderStyle:{type:String,attribute:"render-style"},schemaStyle:{type:String,attribute:"schema-style"},activeSchemaTab:{type:String,attribute:"active-schema-tab"},activeParameterSchemaTabs:{type:Object,converter:{fromAttribute:e=>JSON.parse(e),toAttribute:e=>JSON.stringify(e)},attribute:"active-parameter-schema-tabs"},schemaExpandLevel:{type:Number,attribute:"schema-expand-level"},schemaDescriptionExpanded:{type:String,attribute:"schema-description-expanded"},allowSchemaDescriptionExpandToggle:{type:String,attribute:"allow-schema-description-expand-toggle"},schemaHideReadOnly:{type:String,attribute:"schema-hide-read-only"},fetchCredentials:{type:String,attribute:"fetch-credentials"},activeResponseTab:{type:String},selectedRequestBodyType:{type:String,attribute:"selected-request-body-type"},selectedRequestBodyExample:{type:String,attribute:"selected-request-body-example"}}}static get styles(){return[le,ae,ie,se,Cb,ue,pe,l`
        *, *:before, *:after { box-sizing: border-box; }
    
        .read-mode {
          margin-top: 24px;
        }
        .param-name,
        .param-type {
          margin: 1px 0;
          text-align: right;
          line-height: var(--font-size-small);
        }
        .param-name{
          color: var(--fg); 
          font-family: var(--font-mono);
        }
        .param-type{
          color: var(--light-fg); 
          font-family: var(--font-regular);
        }
        .param-constraint{
          min-width:100px;
        }
        .param-constraint:empty{
          display:none;
        }
        .top-gap{margin-top:24px;}

        .textarea {
          min-height:220px; 
          padding:5px;
          resize:vertical;
          direction: ltr;
        }
        .example:first-child {
          margin-top: -9px;
        }

        .response-message{
          font-weight:bold;
          text-overflow: ellipsis;
        }
        .response-message.error {
          color:var(--red);
        }
        .response-message.success {
          color:var(--blue);
        }

        .file-input-container {
          align-items:flex-end;
        }
        .file-input-container .input-set:first-child .file-input-remove-btn{
          visibility:hidden;
        }

        .file-input-remove-btn{
          font-size:16px;
          color:var(--red);
          outline: none;
          border: none;
          background:none;
          cursor:pointer;
        }

        .v-tab-btn {
          font-size: var(--smal-font-size);
          height:24px; 
          border:none; 
          background:none; 
          opacity: 0.3;
          cursor: pointer;
          padding: 4px 8px;
        }
        .v-tab-btn.active {
          font-weight: bold;
          background: var(--bg);
          opacity: 1;
        }

        @media only screen and (min-width: 768px) {
          .textarea {
            padding:8px;
          }
        }

        @media only screen and (max-width: 470px) {
          .hide-in-small-screen {
            display:none;
          }
        }
      `,fe]}render(){return P`
    <div class="col regular-font request-panel ${"read focused".includes(this.renderStyle)||"true"===this.callback?"read-mode":"view-mode"}">
      <div class=" ${"true"===this.callback?"tiny-title":"req-res-title"} "> 
        ${"true"===this.callback?"CALLBACK REQUEST":"REQUEST"}
      </div>
      <div>
        ${this.inputParametersTemplate("path")}
        ${this.inputParametersTemplate("query")}
        ${this.requestBodyTemplate()}
        ${this.inputParametersTemplate("header")}
        ${this.inputParametersTemplate("cookie")}
        ${"false"===this.allowTry?"":P`${this.apiCallTemplate()}`}
      </div>  
    </div>
    `}updated(e){if("focused"===this.renderStyle)if(1===e.size&&e.has("activeSchemaTab"));else{[...this.shadowRoot.querySelectorAll('textarea[data-ptype="form-data"]')].forEach((e=>{const t=this.shadowRoot.querySelector(`textarea[data-pname='hidden-${e.dataset.pname}']`);t&&(e.value=t.value)}))}}exampleListTemplate(e,t,r=[]){return P`
    ${r.length>0?P`<span style="font-weight:bold">Example: </span>
        ${r.map(((r,n)=>{var o;return P`
          ${0===n?"":"┃"}
          ${"array"===t?"[":""}
          <a part="anchor anchor-param-example" class = "${"true"===this.allowTry?"":"inactive-link"}"
            data-example-type="${"array"===t?t:"string"}"
            data-example = "${r.value&&Array.isArray(r.value)?null===(o=r.value)||void 0===o?void 0:o.join("~|~"):r.value||""}"
            @click="${t=>{const r=t.target.closest("table").querySelector(`[data-pname="${e}"]`);r&&("array"===t.target.dataset.exampleType?r.value=t.target.dataset.example.split("~|~"):r.value=t.target.dataset.example)}}"
          >${r.description||r.summary||r.value}</a>
          ${"array"===t?"] ":""}
        `}))}
      `:""}`}inputParametersTemplate(e){const t=this.parameters?this.parameters.filter((t=>t.in===e)):[];if(0===t.length)return"";let r="";"path"===e?r="PATH PARAMETERS":"query"===e?r="QUERY-STRING PARAMETERS":"header"===e?r="REQUEST HEADERS":"cookie"===e&&(r="COOKIES");const n=[];for(const r of t){const[t,o,i]=Mb(r);if(!t)continue;const a=jb(t);if(!a)continue;const s=Nb(t,{});let l="form",c=!0;"query"===e&&(r.style&&"form spaceDelimited pipeDelimited".includes(r.style)?l=r.style:o&&(l=o),"boolean"==typeof r.explode&&(c=r.explode));const p=_b(r.examples||Tb(r.example)||Tb(null==i?void 0:i.example)||(null==i?void 0:i.examples)||a.examples||Tb(a.example),a.type);p.exampleVal||"object"!==a.type||(p.exampleVal=zb("","",t,o,!0,!0,"text",!1)[0].exampleValue);const u="read focused".includes(this.renderStyle)?"200px":"160px";n.push(P`
      <tr> 
        <td rowspan="${"true"===this.allowTry?"1":"2"}" style="width:${u}; min-width:100px;">
          <div class="param-name">
            ${r.required?P`<span style='color:var(--red)'>*</span>`:""}${r.name}
          </div>
          <div class="param-type">
            ${"array"===a.type?`${a.arrayType}`:`${a.format?a.format:a.type}`}
          </div>
        </td>  
        ${"true"===this.allowTry?P`
            <td style="min-width:100px;">
              ${"array"===a.type?P`
                  <tag-input class="request-param" 
                    style = "width:100%" 
                    data-ptype = "${e}"
                    data-pname = "${r.name}"
                    data-example = "${Array.isArray(p.exampleVal)?p.exampleVal.join("~|~"):p.exampleVal}"
                    data-param-serialize-style = "${l}"
                    data-param-serialize-explode = "${c}"
                    data-array = "true"
                    placeholder = "add-multiple &#x21a9;"
                    .value = "${Array.isArray(p.exampleVal),p.exampleVal}"
                  >
                  </tag-input>`:"object"===a.type?P`
                    <div class="tab-panel col" style="border-width:0 0 1px 0;">
                      <div class="tab-buttons row" @click="${e=>{if("button"===e.target.tagName.toLowerCase()){const t={...this.activeParameterSchemaTabs};t[r.name]=e.target.dataset.tab,this.activeParameterSchemaTabs=t}}}">
                        <button class="tab-btn ${"example"!==this.activeParameterSchemaTabs[r.name]?"active":""}" data-tab = 'schema'>SCHEMA</button>
                        <button class="tab-btn ${"example"===this.activeParameterSchemaTabs[r.name]?"active":""}" data-tab = 'example'>EXAMPLE </button>
                      </div>
                      ${"example"===this.activeParameterSchemaTabs[r.name]?P`<div class="tab-content col">
                          <textarea 
                            class = "textarea request-param"
                            part = "textarea textarea-param"
                            data-ptype = "${e}-object"
                            data-pname = "${r.name}"
                            data-example = "${p.exampleVal}"
                            data-param-serialize-style = "${l}"
                            data-param-serialize-explode = "${c}"
                            spellcheck = "false"
                            .textContent = "${"true"===this.fillRequestFieldsWithExample?p.exampleVal:""}"
                            style = "resize:vertical; width:100%; height: ${"read focused".includes(this.renderStyle)?"180px":"120px"};"
                          ></textarea>
                        </div>`:P`
                          <div class="tab-content col">            
                            <schema-tree
                              class = 'json'
                              style = 'display: block'
                              .data = '${s}'
                              schema-expand-level = "${this.schemaExpandLevel}"
                              schema-description-expanded = "${this.schemaDescriptionExpanded}"
                              allow-schema-description-expand-toggle = "${this.allowSchemaDescriptionExpandToggle}",
                              schema-hide-read-only = "${this.schemaHideReadOnly.includes(this.method)}"
                              schema-hide-write-only = false
                            > </schema-tree>
                          </div>`}
                    </div>`:P`
                    <input type="${"password"===a.format?"password":"text"}" spellcheck="false" style="width:100%" 
                      class="request-param"
                      part="textbox textbox-param"
                      data-ptype="${e}"
                      data-pname="${r.name}" 
                      data-example="${Array.isArray(p.exampleVal)?p.exampleVal.join("~|~"):p.exampleVal}"
                      data-array="false"
                      .value="${"true"===this.fillRequestFieldsWithExample?p.exampleVal:""}"
                    />`}
            </td>`:""}
        <td colspan="${"true"===this.allowTry?"1":"2"}">
          ${a.default||a.constrain||a.allowedValues||a.pattern?P`
              <div class="param-constraint">
                ${a.default?P`<span style="font-weight:bold">Default: </span>${a.default}<br/>`:""}
                ${a.pattern?P`<span style="font-weight:bold">Pattern: </span>${a.pattern}<br/>`:""}
                ${a.constrain?P`${a.constrain}<br/>`:""}
                ${a.allowedValues&&a.allowedValues.split("┃").map(((e,t)=>P`
                  ${t>0?"┃":P`<span style="font-weight:bold">Allowed: </span>`}
                  ${P`
                    <a part="anchor anchor-param-constraint" class = "${"true"===this.allowTry?"":"inactive-link"}"
                      data-type="${"array"===a.type?a.type:"string"}"
                      data-enum="${e.trim()}"
                      @click="${e=>{const t=e.target.closest("table").querySelector(`[data-pname="${r.name}"]`);t&&("array"===e.target.dataset.type?t.value=[e.target.dataset.enum]:t.value=e.target.dataset.enum)}}"
                    >${e}</a>`}`))}
              </div>`:""}
        </td>
      </tr>
      <tr>
        ${"true"===this.allowTry?P`<td style="border:none"> </td>`:""}
        <td colspan="2" style="border:none; margin-top:0; padding:0 5px 8px 5px;">
          <span class="m-markdown-small">${yb(re()(r.description||""))}</span>
          ${this.exampleListTemplate.call(this,r.name,a.type,p.exampleList)}
        </td>
      </tr>
    `)}return P`
    <div class="table-title top-gap">${r}</div>
    <div style="display:block; overflow-x:auto; max-width:100%;">
      <table class="m-table" style="width:100%; word-break:break-word;">
        ${n}
      </table>
    </div>`}resetRequestBodySelection(){this.selectedRequestBodyType="",this.selectedRequestBodyExample="",this.clearResponseData()}onSelectExample(e){this.selectedRequestBodyExample=e.target.value;const t=e.target;window.setTimeout((e=>{const t=e.closest(".example-panel").querySelector(".request-body-param");e.closest(".example-panel").querySelector(".request-body-param-user-input").value=t.innerText}),0,t)}onMimeTypeChange(e){this.selectedRequestBodyType=e.target.value;const t=e.target;this.selectedRequestBodyExample="",window.setTimeout((e=>{const t=e.closest(".request-body-container").querySelector(".request-body-param");if(t){e.closest(".request-body-container").querySelector(".request-body-param-user-input").value=t.innerText}}),0,t)}requestBodyTemplate(){if(!this.request_body)return"";if(0===Object.keys(this.request_body).length)return"";let e="",t="",r="",n="",o="";const i=[],a=this.request_body.content;for(const e in a)i.push({mimeType:e,schema:a[e].schema,example:a[e].example,examples:a[e].examples}),this.selectedRequestBodyType||(this.selectedRequestBodyType=e);return e=1===i.length?"":P`
        <select style="min-width:100px; max-width:100%;  margin-bottom:-1px;" @change = '${e=>this.onMimeTypeChange(e)}'>
          ${i.map((e=>P`
            <option value = '${e.mimeType}' ?selected = '${e.mimeType===this.selectedRequestBodyType}'>
              ${e.mimeType}
            </option> `))}
        </select>
      `,i.forEach((e=>{let i,a=[];if(this.selectedRequestBodyType.includes("json")||this.selectedRequestBodyType.includes("xml")||this.selectedRequestBodyType.includes("text"))e.mimeType===this.selectedRequestBodyType&&(a=zb(e.examples,e.example,e.schema,e.mimeType,!1,!0,"text",!1),this.selectedRequestBodyExample||(this.selectedRequestBodyExample=a.length>0?a[0].exampleId:""),o=P`
            ${o}
            <div class = 'example-panel border-top pad-top-8'>
              ${1===a.length?"":P`
                  <select style="min-width:100px; max-width:100%;  margin-bottom:-1px;" @change='${e=>this.onSelectExample(e)}'>
                    ${a.map((e=>P`<option value="${e.exampleId}" ?selected=${e.exampleId===this.selectedRequestBodyExample} > 
                      ${e.exampleSummary.length>80?e.exampleId:e.exampleSummary?e.exampleSummary:e.exampleId} 
                    </option>`))}
                  </select>
                `}
              ${a.filter((e=>e.exampleId===this.selectedRequestBodyExample)).map((t=>P`
                <div class="example ${t.exampleId===this.selectedRequestBodyExample?"example-selected":""}" data-example = '${t.exampleId}'>
                  ${t.exampleSummary&&t.exampleSummary.length>80?P`<div style="padding: 4px 0"> ${t.exampleSummary} </div>`:""}
                  ${t.exampleDescription?P`<div class="m-markdown-small" style="padding: 4px 0"> ${yb(re()(t.exampleDescription||""))} </div>`:""}
                  <!-- This pre(hidden) is to store the original example value, this will remain unchanged when users switches from one example to another, its is used to populate the editable textarea -->
                  <pre 
                    class = "textarea is-hidden request-body-param ${e.mimeType.substring(e.mimeType.indexOf("/")+1)}" 
                    spellcheck = "false"
                    data-ptype = "${e.mimeType}" 
                    style="width:100%; resize:vertical; display:none"
                  >${"text"===t.exampleFormat?t.exampleValue:JSON.stringify(t.exampleValue,null,2)}</pre>

                  <!-- this textarea is for user to edit the example -->
                  <textarea 
                    class = "textarea request-body-param-user-input"
                    part = "textarea textarea-param"
                    spellcheck = "false"
                    data-ptype = "${e.mimeType}" 
                    data-example = "${"text"===t.exampleFormat?t.exampleValue:JSON.stringify(t.exampleValue,null,2)}"
                    data-example-format = "${t.exampleFormat}"
                    style="width:100%; resize:vertical;"
                    .textContent = "${"true"===this.fillRequestFieldsWithExample?"text"===t.exampleFormat?t.exampleValue:JSON.stringify(t.exampleValue,null,2):""}"
                  >
                  </textarea>

                </div>  
              `))}

            </div>
          `);else if(this.selectedRequestBodyType.includes("form-urlencoded")||this.selectedRequestBodyType.includes("form-data")){if(e.mimeType===this.selectedRequestBodyType){const t=zb(e.examples,e.example,e.schema,e.mimeType,!1,!0,"text",!1);e.schema&&(r=this.formDataTemplate(e.schema,e.mimeType,t[0]?t[0].exampleValue:""))}}else RegExp("^audio/|^image/|^video/|^font/|tar$|zip$|7z$|rtf$|msword$|excel$|/pdf$|/octet-stream$").test(this.selectedRequestBodyType)&&e.mimeType===this.selectedRequestBodyType&&(t=P`
            <div class = "small-font-size bold-text row">
              <input type="file" part="file-input" style="max-width:100%" class="request-body-param-file" data-ptype="${e.mimeType}" spellcheck="false" />
            </div>  
          `);(e.mimeType.includes("json")||e.mimeType.includes("xml")||e.mimeType.includes("text"))&&(i=Nb(e.schema,{}),"table"===this.schemaStyle?n=P`
            ${n}
            <schema-table
              class = '${e.mimeType.substring(e.mimeType.indexOf("/")+1)}'
              style = 'display: ${this.selectedRequestBodyType===e.mimeType?"block":"none"};'
              .data = '${i}'
              schema-expand-level = "${this.schemaExpandLevel}"
              schema-description-expanded = "${this.schemaDescriptionExpanded}"
              allow-schema-description-expand-toggle = "${this.allowSchemaDescriptionExpandToggle}",
              schema-hide-read-only = "${this.schemaHideReadOnly.includes(this.method)}"
              schema-hide-write-only = false
            > </schema-table>
          `:"tree"===this.schemaStyle&&(n=P`
            ${n}
            <schema-tree
              class = '${e.mimeType.substring(e.mimeType.indexOf("/")+1)}'
              style = 'display: ${this.selectedRequestBodyType===e.mimeType?"block":"none"};'
              .data = '${i}'
              schema-expand-level = "${this.schemaExpandLevel}"
              schema-description-expanded = "${this.schemaDescriptionExpanded}"
              allow-schema-description-expand-toggle = "${this.allowSchemaDescriptionExpandToggle}",
              schema-hide-read-only = "${this.schemaHideReadOnly.includes(this.method)}"
              schema-hide-write-only = false
            > </schema-tree>
          `))})),P`
      <div class='request-body-container' data-selected-request-body-type="${this.selectedRequestBodyType}">
        <div class="table-title top-gap row">
          REQUEST BODY ${this.request_body.required?P`<span class="mono-font" style='color:var(--red)'>*</span>`:""} 
          <span style = "font-weight:normal; margin-left:5px"> ${this.selectedRequestBodyType}</span>
          <span style="flex:1"></span>
          ${e}
        </div>
        ${this.request_body.description?P`<div class="m-markdown" style="margin-bottom:12px">${yb(re()(this.request_body.description))}</div>`:""}
        
        ${this.selectedRequestBodyType.includes("json")||this.selectedRequestBodyType.includes("xml")||this.selectedRequestBodyType.includes("text")?P`
            <div class="tab-panel col" style="border-width:0 0 1px 0;">
              <div class="tab-buttons row" @click="${e=>{"button"===e.target.tagName.toLowerCase()&&(this.activeSchemaTab=e.target.dataset.tab)}}">
                <button class="tab-btn ${"example"!==this.activeSchemaTab?"active":""}" data-tab = 'schema'>SCHEMA</button>
                <button class="tab-btn ${"example"===this.activeSchemaTab?"active":""}" data-tab = 'example'>EXAMPLE</button>
              </div>
              ${"example"===this.activeSchemaTab?P`<div class="tab-content col"> ${o}</div>`:P`<div class="tab-content col"> ${n}</div>`}
            </div>`:P`  
            ${t}
            ${r}`}
      </div>  
    `}formDataParamAsObjectTemplate(e,t,r){var n;const o=Nb(t,{}),i=zb(t.examples,t.example,t,"json",!1,!0,"text",!1);return P`
      <div class="tab-panel row" style="min-height:220px; border-left: 6px solid var(--light-border-color); align-items: stretch;">
        <div style="width:24px; background-color:var(--light-border-color)">
          <div class="row" style="flex-direction:row-reverse; width:160px; height:24px; transform:rotate(270deg) translateX(-160px); transform-origin:top left; display:block;" @click="${e=>{if(e.target.classList.contains("v-tab-btn")){const t=e.target.dataset.tab;if(t){const r=e.target.closest(".tab-panel"),n=r.querySelector(`.v-tab-btn[data-tab="${t}"]`),o=[...r.querySelectorAll(`.v-tab-btn:not([data-tab="${t}"])`)],i=r.querySelector(`.tab-content[data-tab="${t}"]`),a=[...r.querySelectorAll(`.tab-content:not([data-tab="${t}"])`)];n.classList.add("active"),i.style.display="block",o.forEach((e=>{e.classList.remove("active")})),a.forEach((e=>{e.style.display="none"}))}}"button"===e.target.tagName.toLowerCase()&&(this.activeSchemaTab=e.target.dataset.tab)}}">
          <button class="v-tab-btn ${"example"!==this.activeSchemaTab?"active":""}" data-tab = 'schema'>SCHEMA</button>
          <button class="v-tab-btn ${"example"===this.activeSchemaTab?"active":""}" data-tab = 'example'>EXAMPLE</button>
        </div>
      </div>
      ${P`
        <div class="tab-content col" data-tab = 'schema' style="display:${"example"!==this.activeSchemaTab?"block":"none"}; padding-left:5px; width:100%;"> 
          <schema-tree
            .data = '${o}'
            schema-expand-level = "${this.schemaExpandLevel}"
            schema-description-expanded = "${this.schemaDescriptionExpanded}"
            allow-schema-description-expand-toggle = "${this.allowSchemaDescriptionExpandToggle}",
          > </schema-tree>
        </div>`}
      ${P`
        <div class="tab-content col" data-tab = 'example' style="display:${"example"===this.activeSchemaTab?"block":"none"}; padding-left:5px; width:100%"> 
          <textarea 
            class = "textarea"
            part = "textarea textarea-param"
            style = "width:100%; border:none; resize:vertical;" 
            data-array = "false" 
            data-ptype = "${r.includes("form-urlencode")?"form-urlencode":"form-data"}"
            data-pname = "${e}"
            data-example = "${(null===(n=i[0])||void 0===n?void 0:n.exampleValue)||""}"
            .textContent = "${"true"===this.fillRequestFieldsWithExample?i[0].exampleValue:""}"
            spellcheck = "false"
          ></textarea>
          <!-- This textarea(hidden) is to store the original example value, in focused mode on navbar change it is used to update the example text -->
          <textarea data-pname = "hidden-${e}" data-ptype = "${r.includes("form-urlencode")?"hidden-form-urlencode":"hidden-form-data"}" class="is-hidden" style="display:none">${i[0].exampleValue}</textarea>
        </div>`}
      </div>
    `}formDataTemplate(e,t,r=""){const n=[];if(e.properties){for(const r in e.properties){var o;const i=e.properties[r];if(i.readOnly)continue;const a=i.examples||i.example||"",s=i.type,l=jb(i),c="read focused".includes(this.renderStyle)?"200px":"160px",p=_b(l.examples||l.example,l.type);n.push(P`
        <tr> 
          <td style="width:${c}; min-width:100px;">
            <div class="param-name">
              ${i.required?P`<span style='color:var(--red);'>*</span>${r}`:P`${r}`}
            </div>
            <div class="param-type">${l.type}</div>
          </td>  
          <td 
            style="${"object"===s?"width:100%; padding:0;":"true"===this.allowTry?"":"display:none;"} min-width:100px;" 
            colspan="${"object"===s?2:1}">
            ${"array"===s?"binary"===(null===(o=i.items)||void 0===o?void 0:o.format)?P`
                <div class="file-input-container col" style='align-items:flex-end;' @click="${e=>this.onAddRemoveFileInput(e,r,t)}">
                  <div class='input-set row'>
                    <input 
                      type = "file"
                      part = "file-input"
                      style = "width:100%" 
                      data-pname = "${r}" 
                      data-ptype = "${t.includes("form-urlencode")?"form-urlencode":"form-data"}"
                      data-array = "false" 
                      data-file-array = "true" 
                    />
                    <button class="file-input-remove-btn"> &#x2715; </button>
                  </div>  
                  <button class="m-btn primary file-input-add-btn" part="btn btn-fill" style="margin:2px 25px 0 0; padding:2px 6px;">ADD</button>
                </div>  
                `:P`
                  <tag-input
                    style = "width:100%" 
                    data-ptype = "${t.includes("form-urlencode")?"form-urlencode":"form-data"}"
                    data-pname = "${r}"
                    data-example = "${Array.isArray(a)?a.join("~|~"):a}"
                    data-array = "true"
                    placeholder = "add-multiple &#x21a9;"
                    .value = "${Array.isArray(a)?Array.isArray(a[0])?a[0]:[a[0]]:[a]}"
                  >
                  </tag-input>
                `:P`
                ${"object"===s?this.formDataParamAsObjectTemplate.call(this,r,i,t):P`
                    ${"true"===this.allowTry?P`<input
                          .value = "${"true"===this.fillRequestFieldsWithExample?p.exampleVal:""}"
                          spellcheck = "false"
                          type = "${"binary"===i.format?"file":"password"===i.format?"password":"text"}"
                          part = "textbox textbox-param"
                          style = "width:100%"
                          data-ptype = "${t.includes("form-urlencode")?"form-urlencode":"form-data"}"
                          data-pname = "${r}"
                          data-example = "${Array.isArray(a)?a[0]:a}"
                          data-array = "false"
                        />`:""}
                    `}`}
          </td>
          ${"object"===s?"":P`
              <td>
                ${l.default||l.constrain||l.allowedValues||l.pattern?P`
                    <div class="param-constraint">
                      ${l.default?P`<span style="font-weight:bold">Default: </span>${l.default}<br/>`:""}
                      ${l.pattern?P`<span style="font-weight:bold">Pattern: </span>${l.pattern}<br/>`:""}
                      ${l.constrain?P`${l.constrain}<br/>`:""}
                      ${l.allowedValues&&l.allowedValues.split("┃").map(((e,t)=>P`
                        ${t>0?"┃":P`<span style="font-weight:bold">Allowed: </span>`}
                        ${P`
                          <a part="anchor anchor-param-constraint" class = "${"true"===this.allowTry?"":"inactive-link"}"
                            data-type="${"array"===l.type?l.type:"string"}"
                            data-enum="${e.trim()}"
                            @click="${e=>{const t=e.target.closest("table").querySelector(`[data-pname="${r}"]`);t&&("array"===e.target.dataset.type?t.value=[e.target.dataset.enum]:t.value=e.target.dataset.enum)}}"
                          > 
                            ${e} 
                          </a>`}`))}
                    </div>`:""}
              </td>`}
        </tr>
        ${"object"===s?"":P`
            <tr>
              <td style="border:none"> </td>
              <td colspan="2" style="border:none; margin-top:0; padding:0 5px 8px 5px;"> 
                <span class="m-markdown-small">${yb(re()(i.description||""))}</span>
                ${this.exampleListTemplate.call(this,r,l.type,p.exampleList)}
              </td>
            </tr>
          `}`)}return P`
        <table style="width:100%;" class="m-table">
          ${n}
        </table>
      `}return P`
      <textarea
        class = "textarea dynamic-form-param ${t}"
        part = "textarea textarea-param"
        spellcheck = "false"
        data-pname="dynamic-form" 
        data-ptype="${t}"
        .textContent = "${r}"
        style="width:100%"
      ></textarea>
      ${e.description?P`<span class="m-markdown-small">${yb(re()(e.description))}</span>`:""}
    `}apiResponseTabTemplate(){const e=this.responseHeaders.includes("json")?"json":this.responseHeaders.includes("html")||this.responseHeaders.includes("xml")?"html":"";return P`
      <div class="row" style="font-size:var(--font-size-small); margin:5px 0">
        <div class="response-message ${this.responseStatus}">Response Status: ${this.responseMessage}</div>
        <div style="flex:1"></div>
        <button class="m-btn" part="btn btn-outline" @click="${this.clearResponseData}">CLEAR RESPONSE</button>
      </div>
      <div class="tab-panel col" style="border-width:0 0 1px 0;">
        <div id="tab_buttons" class="tab-buttons row" @click="${e=>{!1!==e.target.classList.contains("tab-btn")&&(this.activeResponseTab=e.target.dataset.tab)}}">
          <button class="tab-btn ${"response"===this.activeResponseTab?"active":""}" data-tab = 'response' > RESPONSE</button>
          <button class="tab-btn ${"headers"===this.activeResponseTab?"active":""}"  data-tab = 'headers' > RESPONSE HEADERS</button>
          <button class="tab-btn ${"curl"===this.activeResponseTab?"active":""}" data-tab = 'curl'>CURL</button>
        </div>
        ${this.responseIsBlob?P`
            <div class="tab-content col" style="flex:1; display:${"response"===this.activeResponseTab?"flex":"none"};">
              <button class="m-btn thin-border mar-top-8" style="width:135px" @click='${e=>{we(this.responseBlobUrl,this.respContentDisposition)}}' part="btn btn-outline">
                DOWNLOAD
              </button>
              ${"view"===this.responseBlobType?P`<button class="m-btn thin-border mar-top-8" style="width:135px"  @click='${e=>{$e(this.responseBlobUrl)}}' part="btn btn-outline">VIEW (NEW TAB)</button>`:""}
            </div>`:P`
            <div class="tab-content col m-markdown" style="flex:1;display:${"response"===this.activeResponseTab?"flex":"none"};" >
              <button class="toolbar-btn" style="position:absolute; top:12px; right:8px" @click='${e=>{ve(this.responseText,e)}}' part="btn btn-fill"> Copy </button>
              <pre style="white-space:pre; max-height:400px; overflow:auto">${e?P`<code>${yb(oe().highlight(this.responseText,oe().languages[e],e))}</code>`:`${this.responseText}`}
              </pre>
            </div>`}
        <div class="tab-content col m-markdown" style="flex:1;display:${"headers"===this.activeResponseTab?"flex":"none"};" >
          <button  class="toolbar-btn" style = "position:absolute; top:12px; right:8px" @click='${e=>{ve(this.responseHeaders,e)}}' part="btn btn-fill"> Copy </button>
          <pre style="white-space:pre"><code>${yb(oe().highlight(this.responseHeaders,oe().languages.css,"css"))}</code></pre>
        </div>
        <div class="tab-content col m-markdown" style="flex:1;display:${"curl"===this.activeResponseTab?"flex":"none"};">
          <button  class="toolbar-btn" style = "position:absolute; top:12px; right:8px" @click='${e=>{ve(this.curlSyntax.replace(/\\$/,""),e)}}' part="btn btn-fill"> Copy </button>
          <pre style="white-space:pre"><code>${yb(oe().highlight(this.curlSyntax.trim().replace(/\\$/,""),oe().languages.shell,"shell"))}</code></pre>
        </div>
      </div>`}apiCallTemplate(){var e,t;let r="";this.servers&&this.servers.length>0&&(r=P`
        <select style="min-width:100px;" @change='${e=>{this.serverUrl=e.target.value}}'>
          ${this.servers.map((e=>P`<option value = "${e.url}"> ${e.url} - ${e.description} </option>`))}
        </select>
      `);const n=P`
      <div style="display:flex; flex-direction:column;">
        ${r}
        ${this.serverUrl?P`
            <div style="display:flex; align-items:baseline;">
              <div style="font-weight:bold; padding-right:5px;">API Server</div> 
              <span class = "gray-text"> ${this.serverUrl} </span>
            </div>
          `:""}
      </div>  
    `;return P`
    <div style="display:flex; align-items:flex-end; margin:16px 0; font-size:var(--font-size-small);">
      <div class="hide-in-small-screen" style="flex-direction:column; margin:0; width:calc(100% - 60px);">
        <div style="display:flex; flex-direction:row; align-items:center; overflow:hidden;"> 
          ${n}
        </div>
        <div style="display:flex;">
          <div style="font-weight:bold; padding-right:5px;">Authentication</div>
          ${(null===(e=this.security)||void 0===e?void 0:e.length)>0?P`
              ${this.api_keys.length>0?P`<div style="color:var(--blue); overflow:hidden;"> 
                    ${1===this.api_keys.length?`${null===(t=this.api_keys[0])||void 0===t?void 0:t.typeDisplay} in ${this.api_keys[0].in}`:`${this.api_keys.length} API keys applied`} 
                  </div>`:P`<div class="gray-text">Required  <span style="color:var(--red)">(None Applied)</span>`}`:P`<span class="gray-text"> Not Required </span>`}
        </div>
      </div>
      ${this.parameters.length>0||this.request_body?P`
            <button class="m-btn thin-border" part="btn btn-outline" style="margin-right:5px;" @click="${this.onFillRequestData}" title="Fills with example data (if provided)">
              FILL EXAMPLE
            </button>
            <button class="m-btn thin-border" part="btn btn-outline" style="margin-right:5px;" @click="${this.onClearRequestData}">
              CLEAR
            </button>`:""}
      <button class="m-btn primary thin-border" part="btn btn-fill btn-try" @click="${this.onTryClick}">TRY</button>
    </div>
    ${""===this.responseMessage?"":this.apiResponseTabTemplate()}
    `}async onFillRequestData(e){[...e.target.closest(".request-panel").querySelectorAll("input, tag-input, textarea:not(.is-hidden)")].forEach((e=>{e.dataset.example&&("TAG-INPUT"===e.tagName.toUpperCase()?e.value=e.dataset.example.split("~|~"):e.value=e.dataset.example)}))}async onClearRequestData(e){[...e.target.closest(".request-panel").querySelectorAll("input, tag-input, textarea:not(.is-hidden)")].forEach((e=>{e.value=""}))}async onTryClick(e){var t;const r=e.target;let n,o,i="",a="",s="",l="";const c=null===(t=this.closest(".expanded-req-resp-container, .req-resp-container"))||void 0===t?void 0:t.getElementsByTagName("api-response")[0],p=null==c?void 0:c.selectedMimeType,u=e.target.closest(".request-panel"),d=[...u.querySelectorAll("[data-ptype='path']")],h=[...u.querySelectorAll("[data-ptype='query']")],f=[...u.querySelectorAll("[data-ptype='query-object']")],m=[...u.querySelectorAll("[data-ptype='header']")],y=u.querySelector(".request-body-container");n=this.path;const g={method:this.method.toUpperCase(),headers:{}};d.map((e=>{n=n.replace(`{${e.dataset.pname}}`,encodeURIComponent(e.value))}));const v=new URLSearchParams;if(h.length>0&&h.forEach((e=>{if("false"===e.dataset.array)""!==e.value&&v.append(e.dataset.pname,e.value);else{const t=e.dataset.paramSerializeStyle,r=e.dataset.paramSerializeExplode;let n=e.value&&Array.isArray(e.value)?e.value:[];n=Array.isArray(n)?n.filter((e=>""!==e)):[],n.length>0&&("spaceDelimited"===t?v.append(e.dataset.pname,n.join(" ").replace(/^\s|\s$/g,"")):"pipeDelimited"===t?v.append(e.dataset.pname,n.join("|").replace(/^\||\|$/g,"")):"true"===r?n.forEach((t=>{v.append(e.dataset.pname,t)})):v.append(e.dataset.pname,n.join(",").replace(/^,|,$/g,"")))}})),f.length>0&&f.map((e=>{try{let t={};const r=e.dataset.paramSerializeStyle,n=e.dataset.paramSerializeExplode;if(t=Object.assign(t,JSON.parse(e.value.replace(/\s+/g," "))),"json xml".includes(r))"json"===r?v.append(e.dataset.pname,JSON.stringify(t)):"xml"===r&&v.append(e.dataset.pname,Bb(t));else for(const e in t)"object"==typeof t[e]?Array.isArray(t[e])&&("spaceDelimited"===r?v.append(e,t[e].join(" ")):"pipeDelimited"===r?v.append(e,t[e].join("|")):"true"===n?t[e].forEach((t=>{v.append(e,t)})):v.append(e,t[e])):v.append(e,t[e])}catch(t){console.log("RapiDoc: unable to parse %s into object",e.value)}})),n=`${n}${v.toString()?"?":""}${v.toString()}`,this.api_keys.filter((e=>"query"===e.in)).forEach((e=>{n=`${n}${n.includes("?")?"&":"?"}${e.name}=${encodeURIComponent(e.finalKeyValue)}`})),n=`${this.serverUrl.replace(/\/$/,"")}${n}`,!1===n.startsWith("http")){o=new URL(n,window.location.href).href}else o=n;if(i=`curl -X ${this.method.toUpperCase()} "${o}" \\\n`,p?(g.headers.Accept=p,a+=` -H "Accept: ${p}" \\\n`):this.accept&&(g.headers.Accept=this.accept,a+=` -H "Accept: ${this.accept}" \\\n`),this.api_keys.filter((e=>"header"===e.in)).forEach((e=>{g.headers[e.name]=e.finalKeyValue,a+=` -H "${e.name}: ${e.finalKeyValue}" \\\n`})),m.map((e=>{e.value&&(g.headers[e.dataset.pname]=e.value,a+=` -H "${e.dataset.pname}: ${e.value}" \\\n`)})),y){const e=y.dataset.selectedRequestBodyType;if(e.includes("form-urlencoded")){const e=u.querySelector("[data-ptype='dynamic-form']");if(e){const t=e.value,r=new URLSearchParams;let n,o=!0;if(t)try{n=JSON.parse(t)}catch(e){o=!1,console.warn("RapiDoc: Invalid JSON provided",e)}else o=!1;if(o){for(const e in n)r.append(e,JSON.stringify(n[e]));g.body=r,s=` -d ${r.toString()} \\\n`}}else{const e=[...u.querySelectorAll("[data-ptype='form-urlencode']")],t=new URLSearchParams;e.filter((e=>"file"!==e.type)).forEach((e=>{if("false"===e.dataset.array)e.value&&t.append(e.dataset.pname,e.value);else{const r=e.value&&Array.isArray(e.value)?e.value.join(","):"";t.append(e.dataset.pname,r)}})),g.body=t,s=` -d ${t.toString()} \\\n`}}else if(e.includes("form-data")){const e=new FormData;[...u.querySelectorAll("[data-ptype='form-data']")].forEach((t=>{"false"===t.dataset.array?"file"===t.type&&t.files[0]?(e.append(t.dataset.pname,t.files[0],t.files[0].name),l+=` -F "${t.dataset.pname}=@${t.files[0].name}" \\\n`):t.value&&(e.append(t.dataset.pname,t.value),l+=` -F "${t.dataset.pname}=${t.value}" \\\n`):t.value&&Array.isArray(t.value)&&(t.value.forEach((e=>{l=`${l} -F "${t.dataset.pname}[]=${e}" \\\n`})),e.append(t.dataset.pname,t.value.join(",")))})),g.body=e}else if(RegExp("^audio/|^image/|^video/|^font/|tar$|zip$|7z$|rtf$|msword$|excel$|/pdf$|/octet-stream$").test(e)){const e=u.querySelector(".request-body-param-file");null!=e&&e.files[0]&&(g.body=e.files[0],s=` --data-binary @${e.files[0].name} \\\n`)}else if(e.includes("json")||e.includes("xml")||e.includes("text")){const e=u.querySelector(".request-body-param-user-input");if(null!=e&&e.value){g.body=e.value;try{s=` -d '${JSON.stringify(JSON.parse(e.value))}' \\\n`}catch(t){s=` -d '${e.value.replace(/(\r\n|\n|\r)/gm,"")}' \\\n`}}}e.includes("form-data")||(g.headers["Content-Type"]=e),a+=` -H "Content-Type: ${e}" \\\n`}this.responseUrl="",this.responseHeaders=[],this.curlSyntax="",this.responseStatus="success",this.responseIsBlob=!1,this.respContentDisposition="",this.responseBlobUrl&&(URL.revokeObjectURL(this.responseBlobUrl),this.responseBlobUrl=""),this.curlSyntax=`${i}${a}${s}${l}`,this.fetchCredentials&&(g.credentials=this.fetchCredentials);const b=new Request(n,g);let x,w;this.dispatchEvent(new CustomEvent("before-try",{bubbles:!0,composed:!0,detail:{request:b}}));try{let e,t,n;r.disabled=!0;const o=performance.now();x=await fetch(b);const i=performance.now();w=x.clone(),r.disabled=!1,this.responseMessage=P`${x.statusText?`${x.statusText}:${x.status}`:x.status} <div style="color:var(--light-fg)"> Took ${Math.round(i-o)} milliseconds </div>`,this.responseUrl=x.url;const a={};x.headers.forEach(((e,t)=>{a[t]=e,this.responseHeaders=`${this.responseHeaders}${t}: ${e}\n`}));const s=x.headers.get("content-type");if(0===(await x.clone().text()).length)this.responseText="";else if(s){if(s.includes("json"))if(/charset=[^"']+/.test(s)){const e=s.split("charset=")[1],r=await x.arrayBuffer();try{n=new TextDecoder(e).decode(r)}catch{n=new TextDecoder("utf-8").decode(r)}try{t=JSON.parse(n),this.responseText=JSON.stringify(t,null,2)}catch{this.responseText=n}}else t=await x.json(),this.responseText=JSON.stringify(t,null,2);else RegExp("^font/|tar$|zip$|7z$|rtf$|msword$|excel$|/pdf$|/octet-stream$|^application/vnd.").test(s)?(this.responseIsBlob=!0,this.responseBlobType="download"):RegExp("^audio|^image|^video").test(s)?(this.responseIsBlob=!0,this.responseBlobType="view"):(n=await x.text(),s.includes("xml")&&(this.responseText=function(e){const t=(new DOMParser).parseFromString(e,"text/xml"),r=(new DOMParser).parseFromString(['<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform">\n      <xsl:strip-space elements="*"/>\n        <xsl:template match="para[content-style][not(text())]">\n          <xsl:value-of select="normalize-space(.)"/>\n        </xsl:template>\n        <xsl:template match="node()|@*">\n          <xsl:copy><xsl:apply-templates select="node()|@*"/></xsl:copy>\n        </xsl:template>\n        <xsl:output indent="yes"/>\n      </xsl:stylesheet>'].join("\n"),"application/xml"),n=new XSLTProcessor;n.importStylesheet(r);const o=n.transformToDocument(t);return(new XMLSerializer).serializeToString(o)}(n)),this.responseText=n);if(this.responseIsBlob){const t=x.headers.get("content-disposition");this.respContentDisposition=t?t.split("filename=")[1].replace(/\\"/g,""):"filename",e=await x.blob(),this.responseBlobUrl=URL.createObjectURL(e)}}else n=await x.text(),this.responseText=n;this.dispatchEvent(new CustomEvent("after-try",{bubbles:!0,composed:!0,detail:{request:b,response:w,responseHeaders:a,responseBody:t||n||e,responseStatus:w.ok}}))}catch(e){r.disabled=!1,this.responseMessage=`${e.message} (CORS or Network Issue)`,document.dispatchEvent(new CustomEvent("after-try",{bubbles:!0,composed:!0,detail:{err:e,request:b,response:w,responseStatus:w.ok}}))}this.requestUpdate()}onAddRemoveFileInput(e,t,r){if("button"!==e.target.tagName.toLowerCase())return;if(e.target.classList.contains("file-input-remove-btn")){return void e.target.closest(".input-set").remove()}const n=e.target.closest(".file-input-container"),o=document.createElement("div");o.setAttribute("class","input-set row");const i=document.createElement("input");i.type="file",i.style="width:200px; margin-top:2px;",i.setAttribute("data-pname",t),i.setAttribute("data-ptype",r.includes("form-urlencode")?"form-urlencode":"form-data"),i.setAttribute("data-array","false"),i.setAttribute("data-file-array","true");const a=document.createElement("button");a.setAttribute("class","file-input-remove-btn"),a.innerHTML="&#x2715;",o.appendChild(i),o.appendChild(a),n.insertBefore(o,e.target)}clearResponseData(){this.responseUrl="",this.responseHeaders="",this.responseText="",this.responseStatus="success",this.responseMessage="",this.responseIsBlob=!1,this.responseBlobType="",this.respContentDisposition="",this.responseBlobUrl&&(URL.revokeObjectURL(this.responseBlobUrl),this.responseBlobUrl="")}disconnectedCallback(){this.responseBlobUrl&&(URL.revokeObjectURL(this.responseBlobUrl),this.responseBlobUrl=""),super.disconnectedCallback()}});customElements.define("schema-table",class extends ee{static get properties(){return{schemaExpandLevel:{type:Number,attribute:"schema-expand-level"},schemaDescriptionExpanded:{type:String,attribute:"schema-description-expanded"},allowSchemaDescriptionExpandToggle:{type:String,attribute:"allow-schema-description-expand-toggle"},schemaHideReadOnly:{type:String,attribute:"schema-hide-read-only"},schemaHideWriteOnly:{type:String,attribute:"schema-hide-write-only"},data:{type:Object}}}connectedCallback(){super.connectedCallback(),(!this.schemaExpandLevel||this.schemaExpandLevel<1)&&(this.schemaExpandLevel=99999),this.schemaDescriptionExpanded&&"true false".includes(this.schemaDescriptionExpanded)||(this.schemaDescriptionExpanded="false"),this.schemaHideReadOnly&&"true false".includes(this.schemaHideReadOnly)||(this.schemaHideReadOnly="true"),this.schemaHideWriteOnly&&"true false".includes(this.schemaHideWriteOnly)||(this.schemaHideWriteOnly="true")}static get styles(){return[ie,Hb,l`
      .table {
        font-size: var(--font-size-small);
        text-align: left;
        line-height: calc(var(--font-size-small) + 6px);
      }
      .table .tr {
        width: calc(100% - 5px);
        padding: 0 0 0 5px;
        border-bottom: 1px dotted var(--light-border-color);
      }
      .table .td {
        padding: 4px 0;
      }
      .table .key {
        width: 240px;
      }
      .key.deprecated .key-label {
        text-decoration: line-through;
      }

      .table .key-type {
        white-space: normal;
        width: 150px;
      }
      .collapsed-descr .tr {
        max-height: calc(var(--font-size-small) + var(--font-size-small) + 4px);
      }

      .obj-toggle {
        padding: 0 2px;
        border-radius:2px;
        border: 1px solid transparent;
        display: inline-block;
        margin-left: -16px;
        color:var(--primary-color);
        cursor:pointer;
        font-size: calc(var(--font-size-small) + 4px);
        font-family: var(--font-mono);
        background-clip: border-box;
      }
      .obj-toggle:hover {
        border-color: var(--primary-color);
      }
      .tr.expanded + .object-body {
        display:block;
      }
      .tr.collapsed + .object-body {
        display:none;
      }`,fe]}render(){var e,t,r;return P`
      <div class="table ${"true"===this.schemaDescriptionExpanded?"expanded-descr":"collapsed-descr"}">
        <div class='toolbar'>
          <div class="toolbar-item schema-root-type ${(null===(e=this.data)||void 0===e?void 0:e["::type"])||""} "> ${(null===(t=this.data)||void 0===t?void 0:t["::type"])||""} </div>
          ${"true"===this.allowSchemaDescriptionExpandToggle?P`
              <div style="flex:1"></div>
              <div class='toolbar-item' @click='${()=>{this.schemaDescriptionExpanded="true"===this.schemaDescriptionExpanded?"false":"true"}}'> 
                ${"true"===this.schemaDescriptionExpanded?"Single line description":"Multiline description"}
              </div>
            `:""}
        </div>
        ${null!==(r=this.data)&&void 0!==r&&r["::description"]?P`<span class='m-markdown'> ${yb(re()(this.data["::description"]||""))}</span>`:""}
        <div style = 'border:1px solid var(--light-border-color)'>
          <div style='display:flex; background-color: var(--bg2); padding:8px 4px; border-bottom:1px solid var(--light-border-color);'>
            <div class='key' style='font-family:var(--font-regular); font-weight:bold; color:var(--fg);'> Field </div>
            <div class='key-type' style='font-family:var(--font-regular); font-weight:bold; color:var(--fg);'> Type </div>
            <div class='key-descr' style='font-family:var(--font-regular); font-weight:bold; color:var(--fg);'> Description </div>
          </div>
          ${this.data?P`
              ${this.generateTree("array"===this.data["::type"]?this.data["::props"]:this.data,this.data["::type"],this.data["::array-type"])}`:""}  
        </div>
      </div>  
    `}generateTree(e,t="object",r="",n="",o="",i=0,a=0){var s,l;const c=null!==(s=e["::type"])&&void 0!==s&&s.startsWith("xxx-of")?i:i+1,p="xxx-of-option"===t||"xxx-of-option"===e["::type"]||n.startsWith("::OPTION")?a:a+1,u=16*p;if(!e)return P`<div class="null" style="display:inline;">null</div>`;if(0===Object.keys(e).length)return P`<span class="td key object" style='padding-left:${u}px'>${n}</span>`;let d="",h="",f=!1;if(n.startsWith("::ONE~OF")||n.startsWith("::ANY~OF"))d=n.replace("::","").replace("~"," "),f=!0;else if(n.startsWith("::OPTION")){const e=n.split("~");d=e[1],h=e[2]}else d=n;let m="";if("object"===e["::type"]?m="array"===t?"array of object":"object":"array"===e["::type"]&&(m="array"===t?"array of array "+("object"!==r?`of ${r}`:""):"array"),"object"==typeof e)return P`
        ${c>=0&&n?P`
            <div class='tr ${c<=this.schemaExpandLevel?"expanded":"collapsed"} ${e["::type"]}' data-obj='${d}'>
              <div class="td key ${e["::deprecated"]?"deprecated":""}" style='padding-left:${u}px'>
                ${d||h?P`
                    <span 
                      class='obj-toggle ${c<this.schemaExpandLevel?"expanded":"collapsed"}'
                      data-obj='${d}'
                      @click= ${e=>this.toggleObjectExpand(e,d)} 
                    >
                      ${i<this.schemaExpandLevel?"-":"+"}
                    </span>`:""}
                ${"xxx-of-option"===e["::type"]||"xxx-of-array"===e["::type"]||n.startsWith("::OPTION")?P`<span class="xxx-of-key" style="margin-left:-6px">${d}</span><span class="${f?"xxx-of-key":"xxx-of-descr"}">${h}</span>`:d.endsWith("*")?P`<span class="key-label" style="display:inline-block; margin-left:-6px;"> ${d.substring(0,d.length-1)}</span><span style='color:var(--red);'>*</span>`:P`<span class="key-label" style="display:inline-block; margin-left:-6px;">${"::props"===d?"":d}</span>`}
                ${"xxx-of"===e["::type"]&&"array"===t?P`<span style="color:var(--primary-color)">ARRAY</span>`:""} 
              </div>
              <div class='td key-type'>${(e["::type"]||"").includes("xxx-of")?"":m}</div>
              <div class='td key-descr m-markdown-small' style='line-height:1.7'>${yb(re()(o||""))}</div>
            </div>`:P`
              ${"array"===e["::type"]&&"array"===t?P`
                  <div class='tr'> 
                    <div class='td key'></div> 
                    <div class='td key-type'> ${r&&"object"!==r?`${t} of ${r}`:t}</div> 
                    <div class='td key-descr'></div> 
                  </div>`:""}
          `}
        <div class='object-body'>
        ${Array.isArray(e)&&e[0]?P`${this.generateTree(e[0],"xxx-of-option","","::ARRAY~OF","",c,p)}`:P`
            ${Object.keys(e).map((t=>P`
              ${["::description","::type","::props","::deprecated","::array-type"].includes(t)?"array"===e[t]["::type"]||"object"===e[t]["::type"]?P`${this.generateTree("array"===e[t]["::type"]?e[t]["::props"]:e[t],e[t]["::type"],e[t]["::array-type"]||"",t,e[t]["::description"],c,p)}`:"":P`${this.generateTree("array"===e[t]["::type"]?e[t]["::props"]:e[t],e[t]["::type"],e[t]["::array-type"]||"",t,e[t]["::description"],c,p)}`}
            `))}
          `}
        <div>
      `;const[y,g,v,b,x,w,$,A,k]=e.split("~|~");if("🆁"===g&&"true"===this.schemaHideReadOnly)return;if("🆆"===g&&"true"===this.schemaHideWriteOnly)return;const S=y.replace(/┃.*/g,"").replace(/[^a-zA-Z0-9+]/g,"").substring(0,4).toLowerCase();return P`
      <div class = "tr primitive">
        <div class="td key ${k}" style='padding-left:${u}px' >
          ${null!==(l=d)&&void 0!==l&&l.endsWith("*")?P`<span class="key-label">${d.substring(0,d.length-1)}</span><span style='color:var(--red);'>*</span>`:n.startsWith("::OPTION")?P`<span class='xxx-of-key'>${d}</span><span class="xxx-of-descr">${h}</span>`:P`${d?P`<span class="key-label"> ${d}</span>`:P`<span class="xxx-of-descr">${A}</span>`}`}
        </div>
        <div class='td key-type ${S}'>
          ${"array"===t?`[${y}]`:y} 
          <span style="font-family: var(--font-mono);">${g} </span> </div>
        <div class='td key-descr'>
          ${"array"===t?P`<span class="m-markdown-small">${yb(re()(o))}</span>`:""}
          ${v?P`<div style='display:inline-block; line-break:anywhere; margin-right:8px;'> <span class='bold-text'>Constraints: </span> ${v}</div>`:""}
          ${b?P`<div style='display:inline-block; line-break:anywhere; margin-right:8px;'> <span class='bold-text'>Default: </span>${b}</div>`:""}
          ${x?P`<div style='display:inline-block; line-break:anywhere; margin-right:8px;'> <span class='bold-text'>Allowed: </span>${x}</div>`:""}
          ${w?P`<div style='display:inline-block; line-break:anywhere; margin-right:8px;'> <span class='bold-text'>Pattern: </span>${w}</div>`:""}
          ${$?P`<span class="m-markdown-small">${yb(re()($))}</span>`:""}
        </div>
      </div>
    `}toggleObjectExpand(e){const t=e.target.closest(".tr");t.classList.contains("expanded")?(t.classList.add("collapsed"),t.classList.remove("expanded"),e.target.innerText="+"):(t.classList.remove("collapsed"),t.classList.add("expanded"),e.target.innerText="-")}});function Wb(e){const t=new(re().Renderer);return t.heading=(t,r,n,o)=>`<h${r} class="observe-me" id="${e}--${o.slug(n)}">${t}</h${r}>`,t}function Vb(e,t=""){var r,n,o;const i=new Set;for(const t in e.responses)for(const r in null===(a=e.responses[t])||void 0===a?void 0:a.content){var a;i.add(r.trim())}const s=[...i].join(", "),l=this.resolvedSpec.securitySchemes.filter((t=>{var r;return t.finalKeyValue&&(null===(r=e.security)||void 0===r?void 0:r.some((e=>t.securitySchemeId in e)))}))||[],c=this.resolvedSpec.securitySchemes.find((e=>e.securitySchemeId===ye&&"-"!==e.value));c&&l.push(c);const p=e.xCodeSamples?Db.call(this,e.xCodeSamples):"";return P`
    ${"read"===this.renderStyle?P`<div class='divider' part="operation-divider"></div>`:""}
    <div class='expanded-endpoint-body observe-me ${e.method} ${e.deprecated?"deprecated":""} ' part="section-operation ${e.elementId}" id='${e.elementId}'>
    ${"focused"===this.renderStyle&&"General ⦂"!==t?P`<h3 class="upper" style="font-weight:bold"> ${t} </h3>`:""}
    ${e.deprecated?P`<div class="bold-text red-text"> DEPRECATED </div>`:""}
    ${P`
      ${e.xBadges&&(null===(r=e.xBadges)||void 0===r?void 0:r.length)>0?P`
          <div style="display:flex; flex-wrap:wrap; margin-bottom: -24px; font-size: var(--font-size-small);">
            ${e.xBadges.map((e=>P`<span style="margin:1px; margin-right:5px; padding:1px 8px; font-weight:bold; border-radius:12px;  background-color: var(--light-${e.color}, var(--input-bg)); color:var(--${e.color}); border:1px solid var(--${e.color})">${e.label}</span>`))}
          </div>
          `:""}
      <h2> ${e.shortSummary||`${e.method.toUpperCase()} ${e.path}`}</h2>
      ${e.isWebhook?P`<span style="color:var(--primary-color); font-weight:bold; font-size: var(--font-size-regular);"> WEBHOOK </span>`:P`
          <div class='mono-font part="section-operation-url" regular-font-size' style='text-align:left; direction:ltr; padding: 8px 0; color:var(--fg3)'> 
            <span part="label-operation-method" class='regular-font upper method-fg bold-text ${e.method}'>${e.method}</span> 
            <span part="label-operation-path">${e.path}</span>
          </div>
        `}
      <slot name="${e.elementId}"></slot>`}
    ${e.description?P`<div class="m-markdown"> ${yb(re()(e.description))}</div>`:""}
    ${Eb.call(this,e.security)}
    ${p}
    <div class='expanded-req-resp-container'>
      <api-request
        class = "${this.renderStyle}-mode"
        style = "width:100%;"
        method = "${e.method}"
        path = "${e.path}"
        .security = "${e.security}"
        .parameters = "${e.parameters}"
        .request_body = "${e.requestBody}"
        .api_keys = "${l}"
        .servers = "${e.servers}"
        server-url = "${(null===(n=e.servers)||void 0===n||null===(o=n[0])||void 0===o?void 0:o.url)||this.selectedServer.computedUrl}"
        fill-request-fields-with-example = "${this.fillRequestFieldsWithExample}"
        allow-try = "${this.allowTry}"
        accept = "${s}"
        render-style="${this.renderStyle}" 
        schema-style = "${this.schemaStyle}"
        active-schema-tab = "${this.defaultSchemaTab}"
        schema-expand-level = "${this.schemaExpandLevel}"
        schema-description-expanded = "${this.schemaDescriptionExpanded}"
        allow-schema-description-expand-toggle = "${this.allowSchemaDescriptionExpandToggle}"
        schema-hide-read-only = "${this.schemaHideReadOnly}"
        fetch-credentials = "${this.fetchCredentials}"
        exportparts = "btn btn-fill btn-outline btn-try"
      > </api-request>

      ${e.callbacks?Ob.call(this,e.callbacks):""}

      <api-response
        class = "${this.renderStyle}-mode"
        style = "width:100%;"
        .responses = "${e.responses}"
        render-style = "${this.renderStyle}"
        schema-style = "${this.schemaStyle}"
        active-schema-tab = "${this.defaultSchemaTab}"
        schema-expand-level = "${this.schemaExpandLevel}"
        schema-description-expanded = "${this.schemaDescriptionExpanded}"
        allow-schema-description-expand-toggle = "${this.allowSchemaDescriptionExpandToggle}"
        schema-hide-write-only = "${this.schemaHideWriteOnly}"
        selected-status = "${Object.keys(e.responses||{})[0]||""}"
        exportparts = "btn--resp btn-fill--resp btn-outline--resp"
      > </api-response>
    </div>
  </div>
  `}function Gb(){return this.resolvedSpec?P`
  ${this.resolvedSpec.tags.map((e=>P`
    <section id="${e.elementId}" part="section-tag" class="regular-font section-gap--read-mode observe-me" style="border-top:1px solid var(--primary-color);">
      <div class="title tag" part="label-tag-title">${e.name}</div>
      <slot name="${e.elementId}"></slot>
      <div class="regular-font-size">
      ${yb(`\n          <div class="m-markdown regular-font">\n          ${re()(e.description||"","true"===this.infoDescriptionHeadingsInNavBar?{renderer:Wb(e.elementId)}:void 0)}\n        </div>`)}
      </div>
    </section>
    <section class='regular-font section-gap--read-mode' part="section-operations-in-tag">
      ${e.paths.map((e=>Vb.call(this,e,"BBB")))}
    </section>
    `))}
`:""}function Kb(e){return P`
  <div class='divider'></div>
  <div class='expanded-endpoint-body observe-me ${e.name}' id='cmp--${e.id}' >
    <div style="font-weight:bold"> ${e.name} <span style="color:var(--light-fg); font-size:var(--font-size-small); font-weight:400;"> Schema </span></div>
  ${"table"===this.schemaStyle?P`
      <schema-table
        render-style = '${this.renderStyle}'
        .data = '${Nb(e.component,{})}'
        schema-expand-level = "${this.schemaExpandLevel}"
        schema-description-expanded = "${this.schemaDescriptionExpanded}"
        allow-schema-description-expand-toggle = "${this.allowSchemaDescriptionExpandToggle}",
        schema-hide-read-only = false
        schema-hide-write-only = ${this.schemaHideWriteOnly}
      > </schema-tree> `:P`
      <schema-tree
        render-style = '${this.renderStyle}'
        .data = '${Nb(e.component,{})}'
        schema-expand-level = "${this.schemaExpandLevel}"
        schema-description-expanded = "${this.schemaDescriptionExpanded}"
        allow-schema-description-expand-toggle = "${this.allowSchemaDescriptionExpandToggle}",
        schema-hide-read-only = false
        schema-hide-write-only = ${this.schemaHideWriteOnly}
      > </schema-tree>`}
  </div>`}function Yb(e,t){return-1!==e.id.indexOf("schemas-")?Kb.call(this,e):P`
  <div class='divider'></div>
  <div class='expanded-endpoint-body observe-me ${e.name}' id='cmp--${e.id}' >
    ${P`
      <div style="font-weight:bold"> ${e.name} <span style="color:var(--light-fg); font-size:var(--font-size-small); font-weight:400"> ${t} </span> </div>
      ${e.component?P`
      <div class='mono-font regular-font-size' style='padding: 8px 0; color:var(--fg2)'> 
        <json-tree class="border tree" render-style='${this.renderStyle}' .data="${e.component}"> </json-tree>
      </div>`:""}
    `}
  </div>
  `}function Jb(){return this.resolvedSpec?P`
  ${this.resolvedSpec.components.map((e=>P`
    <div id="cmp--${e.name.toLowerCase()}" class='regular-font section-gap--read-mode observe-me' style="border-top:1px solid var(--primary-color);">
      <div class="title tag">${e.name}</div>
      <div class="regular-font-size">
        ${yb(`<div class='m-markdown regular-font'>${re()(e.description?e.description:"")}</div>`)}
      </div>
    </div>
    <div class='regular-font section-gap--read-mode'>
      ${e.subComponents.filter((e=>!1!==e.expanded)).map((t=>Yb.call(this,t,e.name)))}
    </div>
    `))}
`:""}function Zb(){const e=new(re().Renderer);return e.heading=(e,t,r,n)=>`<h${t} class="observe-me" id="overview--${n.slug(r)}">${e}</h${t}>`,e}function Qb(){var e,t,r;return P`
    <section id="overview" part="section-overview"
      class="observe-me ${"view"===this.renderStyle?"section-gap":"section-gap--read-mode"}">
      ${null!==(e=this.resolvedSpec)&&void 0!==e&&e.info?P`
          <div id="api-title" part="label-overview-title" style="font-size:32px">
            ${this.resolvedSpec.info.title}
            ${this.resolvedSpec.info.version?P`
              <span style = 'font-size:var(--font-size-small);font-weight:bold'>
                ${this.resolvedSpec.info.version}
              </span>`:""}
          </div>
          <div id="api-info" style="font-size:calc(var(--font-size-regular) - 1px); margin-top:8px;">
            ${null!==(t=this.resolvedSpec.info.contact)&&void 0!==t&&t.email?P`<span>${this.resolvedSpec.info.contact.name||"Email"}: 
                <a href="mailto:${this.resolvedSpec.info.contact.email}" part="anchor anchor-overview">${this.resolvedSpec.info.contact.email}</a>
              </span>`:""}
            ${null!==(r=this.resolvedSpec.info.contact)&&void 0!==r&&r.url?P`<span>URL: <a href="${this.resolvedSpec.info.contact.url}" part="anchor anchor-overview">${this.resolvedSpec.info.contact.url}</a></span>`:""}
            ${this.resolvedSpec.info.license?P`<span>License: 
                ${this.resolvedSpec.info.license.url?P`<a href="${this.resolvedSpec.info.license.url}" part="anchor anchor-overview">${this.resolvedSpec.info.license.name}</a>`:this.resolvedSpec.info.license.name} </span>`:""}
            ${this.resolvedSpec.info.termsOfService?P`<span><a href="${this.resolvedSpec.info.termsOfService}" part="anchor anchor-overview">Terms of Service</a></span>`:""}
            ${this.specUrl&&"true"===this.allowSpecFileDownload?P`
                <div style="display:flex; margin:12px 0; gap:8px; justify-content: start;">
                  <button class="m-btn thin-border" style="width:170px" part="btn btn-outline" @click='${e=>{we(this.specUrl,"openapi-spec")}}'>Download OpenAPI spec</button>
                  <button class="m-btn thin-border" style="width:200px" part="btn btn-outline" @click='${e=>{$e(this.specUrl)}}'>View OpenAPI spec (New Tab)</button>
                </div>`:""}
          </div>
          <slot name="overview"></slot>
          <div id="api-description">
          ${this.resolvedSpec.info.description?P`${yb(`\n                <div class="m-markdown regular-font">\n                ${re()(this.resolvedSpec.info.description,"true"===this.infoDescriptionHeadingsInNavBar?{renderer:Zb()}:void 0)}\n              </div>`)}`:""}
          </div>
        `:""}
    </section>
  `}function Xb(e){var t;const r=null===(t=this.resolvedSpec)||void 0===t?void 0:t.servers.find((t=>t.url===e));return!!r&&(this.selectedServer=r,this.requestUpdate(),this.dispatchEvent(new CustomEvent("api-server-change",{bubbles:!0,composed:!0,detail:{selectedServer:r}})),!0)}function ex(e,t){const r=[...e.currentTarget.closest("table").querySelectorAll("input, select")];let n=t.url;r.forEach((e=>{const t=new RegExp(`{${e.dataset.var}}`,"g");n=n.replace(t,e.value)})),t.computedUrl=n,this.requestUpdate()}function tx(){return this.selectedServer&&this.selectedServer.variables?P`
    <div class="table-title"> SERVER VARIABLES</div>
    <table class='m-table'>
      ${Object.entries(this.selectedServer.variables).map((e=>P`
        <tr>
          <td style="vertical-align: middle;" >${e[0]}</td>
          <td>
            ${e[1].enum?P`
            <select
              data-var = "${e[0]}"
              @input = ${e=>{ex.call(this,e,this.selectedServer)}}
            >
            ${Object.entries(e[1].enum).map((t=>e[1].default===t[1]?P`
              <option
                selected
                label = ${t[1]}
                value = ${t[1]}
              />`:P`
              <option
                label = ${t[1]}
                value = ${t[1]}
              />`))}
            </select>`:P`
            <input
              type = "text"
              part="textbox textbox-server-var"
              spellcheck = "false"
              data-var = "${e[0]}"
              value = "${e[1].default}"
              @input = ${e=>{ex.call(this,e,this.selectedServer)}}
            />`}
          </td>
        </tr>
        ${e[1].description?P`<tr><td colspan="2" style="border:none"><span class="m-markdown-small"> ${yb(re()(e[1].description))} </span></td></tr>`:""}
      `))}
    </table>
    `:""}function rx(){var e,t,r;return!this.resolvedSpec||this.resolvedSpec.specLoadError?"":P`
  <section id = 'servers' part="section-servers" style="text-align:left; direction:ltr; margin-top:24px; margin-bottom:24px;" class='regular-font observe-me ${"read focused".includes(this.renderStyle)?"section-gap--read-mode":"section-gap"}'>
    <div class = 'sub-title'>API SERVER</div>
    <div class = 'mono-font' style='margin: 12px 0; font-size:calc(var(--font-size-small) + 1px);'>
      ${this.resolvedSpec.servers&&0!==(null===(e=this.resolvedSpec.servers)||void 0===e?void 0:e.length)?P`
          ${null===(t=this.resolvedSpec)||void 0===t?void 0:t.servers.map(((e,t)=>P`
            <input type = 'radio'
              name = 'api_server'
              id = 'srvr-opt-${t}'
              value = '${e.url}'
              @change = ${()=>{Xb.call(this,e.url)}}
              .checked = '${this.selectedServer.url===e.url}'
              style = 'margin:4px 0; cursor:pointer'
            />
              <label style='cursor:pointer' for='srvr-opt-${t}'>
                ${e.url} ${e.description?P`- <span class='regular-font'>${e.description} </span>`:""}
              </label>
            <br/>
          `))}
      `:""}
      <div class="table-title primary-text" part="label-selected-server"> SELECTED: ${(null===(r=this.selectedServer)||void 0===r?void 0:r.computedUrl)||"none"}</div>
    </div>
    <slot name="servers"></slot>
    ${tx.call(this)}
  </section>`}function nx(e,t="toggle"){const r=null==e?void 0:e.closest(".nav-bar-tag-and-paths");if(r){const e=r.classList.contains("expanded");!e||"toggle"!==t&&"collapse"!==t?e||"toggle"!==t&&"expand"!==t||r.classList.replace("collapsed","expanded"):r.classList.replace("expanded","collapsed")}}function ox(e){nx(e.target,"toggle")}function ix(e,t="expand-all"){!function(e,t="expand-all"){const r=[...e.querySelectorAll(".nav-bar-tag-and-paths")];"expand-all"===t?r.map((e=>{e.classList.replace("collapsed","expanded")})):r.map((e=>{e.classList.replace("expanded","collapsed")}))}(e.target.closest(".nav-scroll"),t)}function ax(){return!this.resolvedSpec||this.resolvedSpec.specLoadError?P`
      <nav class='nav-bar' part="section-navbar">
        <slot name="nav-logo" class="logo"></slot>
      </nav>
    `:P`
  <nav class='nav-bar ${this.renderStyle}' part="section-navbar">
    <slot name="nav-logo" class="logo"></slot>
    ${"false"===this.allowSearch&&"false"===this.allowAdvancedSearch?"":P`
        <div style="display:flex; flex-direction:row; justify-content:center; align-items:center; padding:24px; ${"false"===this.allowAdvancedSearch?"border-bottom: 1px solid var(--nav-hover-bg-color)":""}">
          ${"false"===this.allowSearch?"":P`
              <div style="display:flex; flex:1; line-height:22px;">
                <input id="nav-bar-search" 
                  part = "textbox textbox-nav-filter"
                  style = "width:100%; padding-right:20px; color:var(--nav-hover-text-color); border-color:var(--nav-accent-color); background-color:var(--nav-hover-bg-color)" 
                  type = "text"
                  placeholder = "Filter" 
                  @change = "${this.onSearchChange}"  
                  spellcheck = "false" 
                >
                <div style="margin: 6px 5px 0 -24px; font-size:var(--font-size-regular); cursor:pointer;">&#x21a9;</div>
              </div>  
              ${this.matchPaths?P`
                  <div @click = '${this.onClearSearch}' style='margin-left:5px; cursor:pointer; align-self:center; color:var(--nav-text-color)' class='small-font-size primary-text bold-text'> CLEAR </div>`:""}
            `}
          ${"false"===this.allowAdvancedSearch||this.matchPaths?"":P`
              <button class="m-btn primary" part="btn btn-fill btn-search" style="margin-left:5px;" @click="${this.onShowSearchModalClicked}">
                Search
              </button>
            `}
        </div>
      `}
    ${P`<nav class='nav-scroll' part="section-navbar-scroll">
      ${"false"!==this.showInfo&&this.resolvedSpec.info?P`
          ${"true"===this.infoDescriptionHeadingsInNavBar?P`
              ${this.resolvedSpec.infoDescriptionHeaders.length>0?P`<div class='nav-bar-info' id='link-overview' data-content-id='overview' @click = '${e=>this.scrollToEventTarget(e,!1)}' > Overview </div>`:""}
              <div class="overview-headers">
                ${this.resolvedSpec.infoDescriptionHeaders.map((e=>P`
                  <div 
                    class='nav-bar-h${e.depth}' 
                    id="link-overview--${(new(re().Slugger)).slug(e.text)}"  
                    data-content-id='overview--${(new(re().Slugger)).slug(e.text)}' 
                    @click='${e=>this.scrollToEventTarget(e,!1)}'
                  >
                    ${e.text}
                  </div>`))}
              </div>
              ${this.resolvedSpec.infoDescriptionHeaders.length>0?P`<hr style='border-top: 1px solid var(--nav-hover-bg-color); border-width:1px 0 0 0; margin: 15px 0 0 0'/>`:""}
            `:P`<div class='nav-bar-info' id='link-overview' data-content-id='overview' @click = '${e=>this.scrollToEventTarget(e,!1)}'> Overview </div>`}
        `:""}
    
      ${"false"===this.allowServerSelection?"":P`<div class='nav-bar-info' id='link-servers' data-content-id='servers' @click = '${e=>this.scrollToEventTarget(e,!1)}'> API Servers </div>`}
      ${"false"!==this.allowAuthentication&&this.resolvedSpec.securitySchemes?P`<div class='nav-bar-info' id='link-auth' data-content-id='auth' @click = '${e=>this.scrollToEventTarget(e,!1)}'> Authentication </div>`:""}

      <div id='link-operations-top' class='nav-bar-section operations' data-content-id='operations-top' @click = '${e=>this.scrollToEventTarget(e,!1)}'>
        <div style="font-size:16px; display:flex; margin-left:10px;">
          ${"focused"===this.renderStyle?P`
              <div @click="${e=>{ix.call(this,e,"expand-all")}}" title="Expand all" style="transform: rotate(90deg); cursor:pointer; margin-right:10px;">▸</div>
              <div @click="${e=>{ix.call(this,e,"collapse-all")}}" title="Collapse all" style="transform: rotate(270deg); cursor:pointer;">▸</div>`:""}  
        </div>
        <div class='nav-bar-section-title'> OPERATIONS </div>
      </div>

      <!-- TAGS AND PATHS-->
      ${this.resolvedSpec.tags.filter((e=>e.paths.filter((e=>be(this.matchPaths,e,this.matchType))).length)).map((e=>P`
          <div class='nav-bar-tag-and-paths ${e.expanded?"expanded":"collapsed"}'>
            ${"General ⦂"===e.name?P`<hr style="border:none; border-top: 1px dotted var(--nav-text-color); opacity:0.3; margin:-1px 0 0 0;"/>`:P`
                <div 
                  class='nav-bar-tag' 
                  id="link-${e.elementId}" 
                  data-content-id='${e.elementId}'
                  data-first-path-id='${e.firstPathId}'
                  @click='${e=>{"focused"===this.renderStyle&&"expand-collapse"===this.onNavTagClick?ox.call(this,e):this.scrollToEventTarget(e,!1)}}'
                >
                  <div>${e.name}</div>
                  <div class="nav-bar-tag-icon" @click="${e=>{"focused"===this.renderStyle&&"show-description"===this.onNavTagClick&&ox.call(this,e)}}">
                  </div>
                </div>
              `}
            ${"true"===this.infoDescriptionHeadingsInNavBar?P`
                ${"focused"===this.renderStyle&&"expand-collapse"===this.onNavTagClick?"":P`
                    <div class='tag-headers'>
                      ${e.headers.map((t=>P`
                      <div 
                        class='nav-bar-h${t.depth}' 
                        id="link-${e.elementId}--${(new(re().Slugger)).slug(t.text)}"  
                        data-content-id='${e.elementId}--${(new(re().Slugger)).slug(t.text)}' 
                        @click='${e=>this.scrollToEventTarget(e,!1)}'
                      > ${t.text}</div>`))}
                    </div>`}`:""}

            
            <div class='nav-bar-paths-under-tag'>
              <!-- Paths in each tag (endpoints) -->
              ${e.paths.filter((e=>!this.matchPaths||be(this.matchPaths,e,this.matchType))).map((e=>P`
              <div 
                class='nav-bar-path
                ${"true"===this.usePathInNavBar?"small-font":""}'
                data-content-id='${e.elementId}'
                id='link-${e.elementId}'
                @click = '${e=>{this.scrollToEventTarget(e,!1)}}'
              >
                <span style = "${e.deprecated?"filter:opacity(0.5)":""}">
                  ${e.isWebhook?P`<span style="font-weight:bold; margin-right:8px; font-size: calc(var(--font-size-small) - 2px)">WEBHOOK</span>`:""}
                  ${"true"===this.usePathInNavBar?P`<span class='mono-font'>${e.method.toUpperCase()} ${e.path}</span>`:e.summary||e.shortSummary}
                </span>
              </div>`))}
            </div>
          </div>
        `))}

      <!-- COMPONENTS -->
      ${this.resolvedSpec.components&&"true"===this.showComponents&&"focused"===this.renderStyle?P`
          <div id='link-components' class='nav-bar-section components'>
            <div></div>
            <div class='nav-bar-section-title'>COMPONENTS</div>
          </div>
          ${this.resolvedSpec.components.map((e=>e.subComponents.length?P`
              <div class='nav-bar-tag' 
                data-content-id='cmp--${e.name.toLowerCase()}' 
                id='link-cmp--${e.name.toLowerCase()}' 
                @click='${e=>this.scrollToEventTarget(e,!1)}'>
                ${e.name}
              </div>
              ${e.subComponents.filter((e=>!1!==e.expanded)).map((e=>P`
                <div class='nav-bar-path' data-content-id='cmp--${e.id}' id='link-cmp--${e.id}' @click='${e=>this.scrollToEventTarget(e,!1)}'>
                  <span> ${e.name} </span>
                </div>`))}`:""))}`:""}
    </nav>`}
</nav>
`}function sx(e){const t=new(re().Renderer);return t.heading=(t,r,n,o)=>`<h${r} class="observe-me" id="${e}--${o.slug(n)}">${t}</h${r}>`,t}function lx(e){return P`
    <div class='regular-font section-gap--focused-mode' part="section-operations-in-tag">
      ${e}
    </div>`}function cx(){var e;if("true"===this.showInfo)return lx(Qb.call(this));const t=this.resolvedSpec.tags[0],r=null===(e=this.resolvedSpec.tags[0])||void 0===e?void 0:e.paths[0];return lx(t&&r?Vb.call(this,r,t.name):"")}function px(e){return P`
    <h1 id="${e.elementId}">${e.name}</h1>
    ${"show-description"===this.onNavTagClick&&e.description?P`
        <div class="m-markdown">
          ${yb(`\n            <div class="m-markdown regular-font">\n              ${re()(e.description||"","true"===this.infoDescriptionHeadingsInNavBar?{renderer:sx(e.elementId)}:void 0)}\n            </div>`)}
        </div>`:""}
  `}function ux(){if(!this.focusedElementId||!this.resolvedSpec)return;const e=this.focusedElementId;let t,r=null,n=null,o=0;if(e.startsWith("overview")&&"true"===this.showInfo)t=Qb.call(this);else if("auth"===e&&"true"===this.allowAuthentication)t=Sb.call(this);else if("servers"===e&&"true"===this.allowServerSelection)t=rx.call(this);else if("operations-top"===e)t=P`
    <div id="operations-top" class="observe-me">
      <slot name="operations-top"></slot>
    </div>`;else if(e.startsWith("cmp--")&&"true"===this.showComponents)t=Jb.call(this);else if(e.startsWith("tag--")){const r=e.indexOf("--",4)>0?e.substring(0,e.indexOf("--",5)):e;n=this.resolvedSpec.tags.find((e=>e.elementId===r)),t=n?lx.call(this,px.call(this,n)):cx.call(this)}else{for(o=0;o<this.resolvedSpec.tags.length&&(n=this.resolvedSpec.tags[o],r=this.resolvedSpec.tags[o].paths.find((t=>`${t.elementId}`===e)),!r);o+=1);if(r){nx(this.shadowRoot.getElementById(`link-${e}`),"expand"),t=lx.call(this,Vb.call(this,r,n.name))}else t=cx.call(this)}return t}function dx(e){if(e.expanded)e.expanded=!1,"true"===this.updateRoute&&window.history.replaceState(null,null,`${window.location.href.split("#")[0]}${"#"===this.routePrefix?"":`${this.routePrefix}`}`);else if(e.expanded=!0,"true"===this.updateRoute){const t=`${this.routePrefix||"#"}${e.elementId}`;window.location.hash!==t&&window.history.replaceState(null,null,`${window.location.href.split("#")[0]}${t}`)}this.requestUpdate()}function hx(e,t="expand-all"){const r=[...e.querySelectorAll(".section-tag")];"expand-all"===t?r.map((e=>{e.classList.replace("collapsed","expanded")})):r.map((e=>{e.classList.replace("expanded","collapsed")}))}function fx(e,t="expand-all"){hx.call(this,e.target.closest(".operations-root"),t)}function mx(e,t=!1){return P`
  <summary @click="${t=>{dx.call(this,e,t)}}" class='endpoint-head ${e.method} ${e.deprecated?"deprecated":""} ${t||e.expanded?"expanded":"collapsed"}'>
    <div class="method ${e.method} ${e.deprecated?"deprecated":""}"> ${e.method} </div> 
    <div class="path ${e.deprecated?"deprecated":""}"> 
      ${e.path} 
      ${e.isWebhook?P`<span style="font-family: var(--font-regular); font-size: var(--); font-size: var(--font-size-small); color:var(--primary-color); margin-left: 16px"> Webhook</span>`:""}
    </div>
    ${e.deprecated?P`
        <span style="font-size:var(--font-size-small); text-transform:uppercase; font-weight:bold; color:var(--red); margin:2px 0 0 5px;"> 
          deprecated 
        </span>`:""}
    ${this.showSummaryWhenCollapsed?P`
        <div class="only-large-screen" style="min-width:60px; flex:1"></div>
        <div class="descr">${e.summary||e.shortSummary} </div>`:""}
  </summary>
  `}function yx(e){var t;const r=new Set;for(const t in e.responses)for(const o in null===(n=e.responses[t])||void 0===n?void 0:n.content){var n;r.add(o.trim())}const o=[...r].join(", "),i=this.resolvedSpec.securitySchemes.filter((t=>{var r;return t.finalKeyValue&&(null===(r=e.security)||void 0===r?void 0:r.some((e=>t.securitySchemeId in e)))}))||[],a=this.resolvedSpec.securitySchemes.find((e=>e.securitySchemeId===ye&&"-"!==e.value));a&&i.push(a);const s=e.xCodeSamples?Db(e.xCodeSamples):"";return P`
  <div class='endpoint-body ${e.method} ${e.deprecated?"deprecated":""}'>
    <div class="summary">
      ${e.summary?P`<div class="title">${e.summary}<div>`:e.shortSummary!==e.description?P`<div class="title">${e.shortSummary}</div>`:""}
      ${e.xBadges&&(null===(t=e.xBadges)||void 0===t?void 0:t.length)>0?P`
          <div style="display:flex; flex-wrap:wrap;font-size: var(--font-size-small);">
            ${e.xBadges.map((e=>P`<span style="margin:1px; margin-right:5px; padding:1px 8px; font-weight:bold; border-radius:12px;  background-color: var(--light-${e.color}, var(--input-bg)); color:var(--${e.color}); border:1px solid var(--${e.color})">${e.label}</span>`))}
          </div>
          `:""}

      ${e.description?P`<div class="m-markdown"> ${yb(re()(e.description))}</div>`:""}
      <slot name="${e.elementId}"></slot>
      ${Eb.call(this,e.security)}
      ${s}
    </div>  
    <div class='req-resp-container'> 
      <div style="display:flex; flex-direction:column" class="view-mode-request ${this.layout}-layout">
        <api-request
          class = "${this.renderStyle}-mode ${this.layout}-layout"
          style = "width:100%;"
          method = "${e.method}", 
          path = "${e.path}"
          .security = "${e.security}"
          .parameters = "${e.parameters}"
          .request_body = "${e.requestBody}"
          .api_keys = "${i}"
          .servers = "${e.servers}" 
          server-url = "${e.servers&&e.servers.length>0?e.servers[0].url:this.selectedServer.computedUrl}" 
          active-schema-tab = "${this.defaultSchemaTab}"
          fill-request-fields-with-example = "${this.fillRequestFieldsWithExample}"
          allow-try = "${this.allowTry}"
          accept = "${o}"
          render-style="${this.renderStyle}" 
          schema-style = "${this.schemaStyle}" 
          schema-expand-level = "${this.schemaExpandLevel}"
          schema-description-expanded = "${this.schemaDescriptionExpanded}"
          allow-schema-description-expand-toggle = "${this.allowSchemaDescriptionExpandToggle}"
          schema-hide-read-only = "${this.schemaHideReadOnly}"
          fetch-credentials = "${this.fetchCredentials}"
          exportparts="btn btn-fill btn-outline btn-try"
        > </api-request>

          ${e.callbacks?Ob.call(this,e.callbacks):""}
      </div>  

      <api-response
        class = "${this.renderStyle}-mode"
        style = "width:100%;"
        .responses="${e.responses}"
        active-schema-tab = "${this.defaultSchemaTab}" 
        render-style="${this.renderStyle}" 
        schema-style="${this.schemaStyle}"
        schema-expand-level = "${this.schemaExpandLevel}"
        schema-description-expanded = "${this.schemaDescriptionExpanded}"
        allow-schema-description-expand-toggle = "${this.allowSchemaDescriptionExpandToggle}"
        schema-hide-write-only = "${this.schemaHideWriteOnly}"
        selected-status = "${Object.keys(e.responses||{})[0]||""}"
        exportparts = "btn--resp btn-fill--resp btn-outline--resp"
      > </api-response>
    </div>
  </div>`}function gx(e=!0,t=!0,r=!1){return this.resolvedSpec?P`
    ${e?P`
        <div style="display:flex; justify-content:flex-end;"> 
          <span @click="${e=>fx(e,"expand-all")}" style="color:var(--primary-color); cursor:pointer;">
            Expand all
          </span> 
          &nbsp;|&nbsp; 
          <span @click="${e=>fx(e,"collapse-all")}" style="color:var(--primary-color); cursor:pointer;" >
            Collapse all
          </span> 
          &nbsp; sections
        </div>`:""}
    ${this.resolvedSpec.tags.map((e=>P`
      ${t?P` 
          <div class='regular-font section-gap section-tag ${e.expanded?"expanded":"collapsed"}'> 
            <div class='section-tag-header' @click="${()=>{e.expanded=!e.expanded,this.requestUpdate()}}">
              <div id='${e.elementId}' class="sub-title tag" style="color:var(--primary-color)">${e.name}</div>
            </div>
            <div class='section-tag-body'>
              <slot name="${e.elementId}"></slot>
              <div class="regular-font regular-font-size m-markdown" style="padding-bottom:12px">
                ${yb(re()(e.description||""))}
              </div>
              ${e.paths.filter((e=>!this.matchPaths||be(this.matchPaths,e,this.matchType))).map((e=>P`
                <section id='${e.elementId}' class='m-endpoint regular-font ${e.method} ${r||e.expanded?"expanded":"collapsed"}'>
                  ${mx.call(this,e,r)}      
                  ${r||e.expanded?yx.call(this,e):""}
                </section>`))}
            </div>
          </div>`:P`
          <div class='section-tag-body'>
          ${e.paths.filter((e=>!this.matchPaths||be(this.matchPaths,e,this.matchType))).map((e=>P`
            <section id='${e.elementId}' class='m-endpoint regular-font ${e.method} ${r||e.expanded?"expanded":"collapsed"}'>
              ${mx.call(this,e,r)}      
              ${r||e.expanded?yx.call(this,e):""}
            </section>`))}
          </div>
        `}
  `))}`:""}function vx(){return P`
  <header class="row header regular-font" part="section-header" style="padding:8px 4px 8px 4px;min-height:48px;">
    <div class="only-large-screen-flex" style="align-items: center;">
      <slot name="logo" class="logo" part="section-logo">
        ${e="height:36px;width:36px;margin-left:5px",P`
  <div style=${e}>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="1 0 511 512">
      <path d="M351 411a202 202 0 01-350 0 203 203 0 01333-24 203 203 0 0117 24zm0 0" fill="#adc165"/>
      <path d="M334 387a202 202 0 01-216-69 202 202 0 01216 69zm78 32H85a8 8 0 01-8-8 8 8 0 018-8h327a8 8 0 017 8 8 8 0 01-7 8zm0 0" fill="#99aa52"/>
      <path d="M374 338l-5 30a202 202 0 01-248-248 203 203 0 01253 218zm0 0" fill="#ffc73b"/>
      <path d="M374 338a202 202 0 01-100-197 203 203 0 01100 197zm38 81l-6-2-231-231a8 8 0 0111-11l231 230a8 8 0 01-5 14zm0 0" fill="#efb025"/>
      <path d="M311 175c0 75 40 140 101 175a202 202 0 000-350 202 202 0 00-101 175zm0 0" fill="#ff903e"/>
      <path d="M412 419a8 8 0 01-8-8V85a8 8 0 0115 0v326a8 8 0 01-7 8zm0 0" fill="#e87425"/>
    </svg>
  </div>    
`}
        <!-- m-logo style="height:36px;width:36px;margin-left:5px"></m-logo -->
      </slot>  
      <div class="header-title" part="label-header-title">${this.headingText}</div>
    </div>  
    <div style="margin: 0px 8px;display:flex;flex:1">
      ${"false"===this.allowSpecUrlLoad?"":P`
          <input id="spec-url" 
            type="text" 
            style="font-size:var(--font-size-small)" 
            class="header-input mono-font"
            part="textbox textbox-spec-url" 
            placeholder="Spec URL" 
            value="${this.specUrl||""}" 
            @change="${this.onSepcUrlChange}" 
            spellcheck="false"
          >
          <div style="margin: 6px 5px 0 -24px; font-size:var(--font-size-regular); cursor:pointer;">&#x21a9;</div> 
        `} 
      ${"false"===this.allowSpecFileLoad?"":P`
          <input id="spec-file" 
            part = "file-input"
            type="file" 
            style="display:none" 
            value="${this.specFile||""}" 
            @change="${this.onSepcFileChange}" 
            spellcheck="false"
           >
          <button class="m-btn primary only-large-screen" style="margin-left:10px;" part="btn btn-fill" @click="${this.onFileLoadClick}"> LOCAL JSON FILE </button>
        `}
      <slot name="header"></slot>
      ${"false"===this.allowSearch||"read focused".includes(this.renderStyle)?"":P`  
          <input id="search" class="header-input" type="text" part="textbox textbox-header-filter" placeholder="Filter" @change="${this.onSearchChange}" style="max-width:130px;margin-left:10px;" spellcheck="false" >
          <div style="margin: 6px 5px 0 -24px; font-size:var(--font-size-regular); cursor:pointer;">&#x21a9;</div>
        `}
      
      ${"false"===this.allowSearch||"false"===this.allowAdvancedSearch||"read focused".includes(this.renderStyle)?"":P`
          <button class="m-btn primary only-large-screen" part="btn btn-fill btn-search" style="margin-left:10px;" @click="${this.onShowSearchModalClicked}">
            Search
          </button>
        `}
    </div>
    </header>`;var e}customElements.define("api-response",class extends ee{constructor(){super(),this.selectedStatus="",this.headersForEachRespStatus={},this.mimeResponsesForEachStatus={},this.activeSchemaTab="schema"}static get properties(){return{callback:{type:String},responses:{type:Object},parser:{type:Object},schemaStyle:{type:String,attribute:"schema-style"},renderStyle:{type:String,attribute:"render-style"},selectedStatus:{type:String,attribute:"selected-status"},selectedMimeType:{type:String,attribute:"selected-mime-type"},activeSchemaTab:{type:String,attribute:"active-schema-tab"},schemaExpandLevel:{type:Number,attribute:"schema-expand-level"},schemaDescriptionExpanded:{type:String,attribute:"schema-description-expanded"},allowSchemaDescriptionExpandToggle:{type:String,attribute:"allow-schema-description-expand-toggle"},schemaHideWriteOnly:{type:String,attribute:"schema-hide-write-only"}}}static get styles(){return[ie,se,ue,le,ae,Cb,l`
      .resp-head{
        vertical-align: middle;
        padding:16px 0 8px;
      }
      .resp-head.divider{
        border-top: 1px solid var(--border-color);
        margin-top:10px;
      }
      .resp-status{ 
        font-weight:bold;
        font-size:calc(var(--font-size-small) + 1px);
      }
      .resp-descr{
        font-size:calc(var(--font-size-small) + 1px);
        color:var(--light-fg);
        text-align:left;
      }
      .top-gap{margin-top:16px;}
      .example-panel{
        font-size:var(--font-size-small);
        margin:0;
      }
      .focused-mode,
      .read-mode {
        padding-top:24px;
        margin-top:12px;
        border-top: 1px dashed var(--border-color);
      }`,fe]}render(){return P`
    <div class="col regular-font response-panel ${this.renderStyle}-mode">
      <div class=" ${"true"===this.callback?"tiny-title":"req-res-title"} "> 
        ${"true"===this.callback?"CALLBACK RESPONSE":"RESPONSE"}
      </div>
      <div>
        ${this.responseTemplate()}
      <div>  
    </div>  
    `}resetSelection(){this.selectedStatus="",this.selectedMimeType=""}responseTemplate(){if(!this.responses)return"";for(const n in this.responses){this.selectedStatus||(this.selectedStatus=n);const o={};for(const r in null===(e=this.responses[n])||void 0===e?void 0:e.content){var e,t;const i=this.responses[n].content[r];this.selectedMimeType||(this.selectedMimeType=r);const a=Nb(i.schema,{}),s=zb(i.examples,i.example,i.schema,r,!0,!1,r.includes("json")?"json":"text");o[r]={description:this.responses[n].description,examples:s,selectedExample:(null===(t=s[0])||void 0===t?void 0:t.exampleId)||"",schemaTree:a}}const i=[];for(const e in null===(r=this.responses[n])||void 0===r?void 0:r.headers){var r;i.push({name:e,...this.responses[n].headers[e]})}this.headersForEachRespStatus[n]=i,this.mimeResponsesForEachStatus[n]=o}return P`
      ${Object.keys(this.responses).length>1?P`<div class='row' style='flex-wrap:wrap'>
          ${Object.keys(this.responses).map((e=>P`
            ${"$$ref"===e?"":P`
                <button 
                  @click="${()=>{this.selectedStatus=e,this.responses[e].content&&Object.keys(this.responses[e].content)[0]?this.selectedMimeType=Object.keys(this.responses[e].content)[0]:this.selectedMimeType=void 0}}"
                  class='m-btn small ${this.selectedStatus===e?"primary":""}'
                  part="btn--resp ${this.selectedStatus===e?"btn-fill--resp":"btn-outline--resp"} btn-response-status"
                  style='margin: 8px 4px 0 0'
                > 
                  ${e} 
                </button>`}`))}`:P`<span>${Object.keys(this.responses)[0]}</span>`}
      </div>

      ${Object.keys(this.responses).map((e=>{var t,r;return P`
        <div style = 'display: ${e===this.selectedStatus?"block":"none"}' >
          <div class="top-gap">
            <span class="resp-descr m-markdown ">${yb(re()((null===(t=this.responses[e])||void 0===t?void 0:t.description)||""))}</span>
            ${this.headersForEachRespStatus[e]&&(null===(r=this.headersForEachRespStatus[e])||void 0===r?void 0:r.length)>0?P`${this.responseHeaderListTemplate(this.headersForEachRespStatus[e])}`:""}
          </div>
          ${0===Object.keys(this.mimeResponsesForEachStatus[e]).length?"":P`  
              <div class="tab-panel col">
                <div class="tab-buttons row" @click="${e=>{"button"===e.target.tagName.toLowerCase()&&(this.activeSchemaTab=e.target.dataset.tab)}}" >
                  <button class="tab-btn ${"example"!==this.activeSchemaTab?"active":""}" data-tab = 'schema' >SCHEMA</button>
                  <button class="tab-btn ${"example"===this.activeSchemaTab?"active":""}" data-tab = 'example'>EXAMPLE </button>
                  <div style="flex:1"></div>
                  ${1===Object.keys(this.mimeResponsesForEachStatus[e]).length?P`<span class='small-font-size gray-text' style='align-self:center; margin-top:8px;'> ${Object.keys(this.mimeResponsesForEachStatus[e])[0]} </span>`:P`${this.mimeTypeDropdownTemplate(Object.keys(this.mimeResponsesForEachStatus[e]))}`}
                </div>
                ${"example"===this.activeSchemaTab?P`<div class ='tab-content col' style = 'flex:1;'>
                      ${this.mimeExampleTemplate(this.mimeResponsesForEachStatus[e][this.selectedMimeType])}
                    </div>`:P`<div class ='tab-content col' style = 'flex:1;'>
                      ${this.mimeSchemaTemplate(this.mimeResponsesForEachStatus[e][this.selectedMimeType])}
                    </div>`}
              </div>
            `}`}))}
    `}responseHeaderListTemplate(e){return P`
      <div style="padding:16px 0 8px 0" class="resp-headers small-font-size bold-text">RESPONSE HEADERS</div> 
      <table style="border-collapse: collapse; margin-bottom:16px; border:1px solid var(--border-color); border-radius: var(--border-radius)" class="small-font-size mono-font">
        ${e.map((e=>P`
          <tr>
            <td style="padding:8px; vertical-align: baseline; min-width:120px; border-top: 1px solid var(--light-border-color); text-overflow: ellipsis;">
              ${e.name||""}
            </td> 
            <td style="padding:4px; vertical-align: baseline; padding:0 5px; border-top: 1px solid var(--light-border-color); text-overflow: ellipsis;">
              ${e.schema.type||""}
            </td> 
            <td style="padding:8px; vertical-align: baseline; border-top: 1px solid var(--light-border-color);text-overflow: ellipsis;">
              <div class="m-markdown-small regular-font" >${yb(re()(e.description||""))}</div>
            </td>
            <td style="padding:8px; vertical-align: baseline; border-top: 1px solid var(--light-border-color); text-overflow: ellipsis;">
              ${e.schema.example||""}
            </td>
          </tr>
        `))}
    </table>`}mimeTypeDropdownTemplate(e){return P`
      <select @change="${e=>{this.selectedMimeType=e.target.value}}" style='margin-bottom: -1px; z-index:1'>
        ${e.map((e=>P`<option value='${e}' ?selected = '${e===this.selectedMimeType}'> ${e} </option>`))}
      </select>`}onSelectExample(e){[...e.target.closest(".example-panel").querySelectorAll(".example")].forEach((t=>{t.style.display=t.dataset.example===e.target.value?"block":"none"}))}mimeExampleTemplate(e){return e?P`
      ${1===e.examples.length?P`
          ${"json"===e.examples[0].exampleFormat?P`
              ${e.examples[0].exampleSummary&&e.examples[0].exampleSummary.length>80?P`<div style="padding: 4px 0"> ${e.examples[0].exampleSummary} </div>`:""}
              ${e.examples[0].exampleDescription?P`<div class="m-markdown-small" style="padding: 4px 0"> ${yb(re()(e.examples[0].exampleDescription||""))} </div>`:""}
              <json-tree 
                render-style = '${this.renderStyle}'
                .data="${e.examples[0].exampleValue}"
                class = 'example-panel ${"read"===this.renderStyle?"border pad-8-16":"border-top pad-top-8"}'
              ></json-tree>`:P`
              ${e.examples[0].exampleSummary&&e.examples[0].exampleSummary.length>80?P`<div style="padding: 4px 0"> ${e.examples[0].exampleSummary} </div>`:""}
              ${e.examples[0].exampleDescription?P`<div class="m-markdown-small" style="padding: 4px 0"> ${yb(re()(e.examples[0].exampleDescription||""))} </div>`:""}
              <pre class = 'example-panel ${"read"===this.renderStyle?"border pad-8-16":"border-top pad-top-8"}'>${e.examples[0].exampleValue}</pre>
            `}`:P`
          <span class = 'example-panel ${"read"===this.renderStyle?"border pad-8-16":"border-top pad-top-8"}'>
            <select style="min-width:100px; max-width:100%" @change='${e=>this.onSelectExample(e)}'>
              ${e.examples.map((t=>P`<option value="${t.exampleId}" ?selected=${t.exampleId===e.selectedExample} > 
                ${t.exampleSummary.length>80?t.exampleId:t.exampleSummary} 
              </option>`))}
            </select>
            ${e.examples.map((t=>P`
              <div class="example" data-example = '${t.exampleId}' style = "display: ${t.exampleId===e.selectedExample?"block":"none"}">
                ${t.exampleSummary&&t.exampleSummary.length>80?P`<div style="padding: 4px 0"> ${t.exampleSummary} </div>`:""}
                ${t.exampleDescription?P`<div class="m-markdown-small"  style="padding: 4px 0"> ${yb(re()(t.exampleDescription||""))} </div>`:""}
                ${"json"===t.exampleFormat?P`
                    <json-tree 
                      render-style = '${this.renderStyle}'
                      .data = '${t.exampleValue}'
                    ></json-tree>`:P`<pre>${t.exampleValue}</pre>`}
              </div>  
            `))}
          </span>  
        `}
    `:P`
        <pre style='color:var(--red)' class = '${"read"===this.renderStyle?"read example-panel border pad-8-16":"example-panel border-top"}'> No example provided </pre>
      `}mimeSchemaTemplate(e){return e?P`
      ${"table"===this.schemaStyle?P`
          <schema-table
            render-style = '${this.renderStyle}'
            .data = '${e.schemaTree}'
            schema-expand-level = "${this.schemaExpandLevel}"
            schema-description-expanded = "${this.schemaDescriptionExpanded}"
            allow-schema-description-expand-toggle = "${this.allowSchemaDescriptionExpandToggle}",
            schema-hide-read-only = false
            schema-hide-write-only = ${this.schemaHideWriteOnly}
          > </schema-tree> `:P`
          <schema-tree
            render-style = '${this.renderStyle}'
            .data = '${e.schemaTree}'
            schema-expand-level = "${this.schemaExpandLevel}"
            schema-description-expanded = "${this.schemaDescriptionExpanded}"
            allow-schema-description-expand-toggle = "${this.allowSchemaDescriptionExpandToggle}",
            schema-hide-read-only = false
            schema-hide-write-only = ${this.schemaHideWriteOnly}
          > </schema-tree>`}`:P`
        <pre style='color:var(--red)' class = '${"read"===this.renderStyle?"border pad-8-16":"border-top"}'> Schema not found</pre>
      `}});const bx=l`
  *, *:before, *:after { box-sizing: border-box; }

  .dialog-box-overlay {
    background-color: var(--overlay-bg);
    position: fixed;
    left: 0;
    top: 0;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    z-index: var(--dialog-z-index);
  }
  
  .dialog-box {
    position: fixed;
    top: 100px;
    left: 50%;
    transform: translate(-50%, 0%);
    display: flex;
    flex-direction: column;
    width: 70vw;
    background-color: var(--bg2);
    color: var(--fg2);
    border-radius: 4px;
    max-height: 500px;
    overflow: hidden;
    border: 1px solid var(--border-color);
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
  }
  
  .dialog-box-header {
    position: sticky;
    top: 0;
    align-self: stretch;
    display: flex;
    align-items: center;
    padding: 0px 16px;
    min-height: 60px;
    max-height: 60px;
    border-bottom: 1px solid var(--light-border-color);
    overflow: hidden;
  }
  
  .dialog-box-header button {
    font-size: 1.5rem;
    font-weight: 700;
    line-height: 1;
    color: var(--fg);
    border: none;
    outline: none;
    background-color: transparent;
    cursor:pointer;
    border: 1px solid transparent;
    border-radius: 50%;
    margin-right: -8px;
  }
  .dialog-box-header button:hover {
    border-color: var(--primary-color);
  }

  .dialog-box-content {
    padding: 16px;
    display:block;
    overflow: auto;
    height: 100%;
  }

  .dialog-box-title {
    flex-grow: 1;
    font-size:24px;
  }
`;function xx(){var e;return document.addEventListener("close",(()=>{this.showAdvancedSearchDialog=!1})),document.addEventListener("open",this.onOpenSearchDialog),P`
    <dialog-box 
      heading="Search" 
      show="${!!this.showAdvancedSearchDialog}"
    >
      <span class="advanced-search-options">
        <input
          style="width:100%; padding-right:20px;"
          type="text"
          part="textbox textbox-search-dialog"
          placeholder="search text..."
          spellcheck="false"
          @keyup = "${e=>this.onAdvancedSearch(e,400)}"
        >
        <div style="display:flex; margin:8px 0 24px;">
          <div>
            <input style="cursor:pointer;" type="checkbox" part="checkbox checkbox-search-dialog" id="search-api-path" checked @change = "${e=>this.onAdvancedSearch(e,0)}">
            <label for="search-api-path" style="cursor:pointer;"> API Path </label>
            </div>
          <div style="margin-left: 16px;">
            <input style="cursor:pointer;" type="checkbox" part="checkbox checkbox-search-dialog" id="search-api-descr" checked @change = "${e=>this.onAdvancedSearch(e,0)}">
            <label style="cursor:pointer;" for="search-api-descr"> API Description </label>
          </div>
          <div style="margin-left: 16px;">
            <input style="cursor:pointer;" type="checkbox" part="checkbox checkbox-search-dialog" id="search-api-params" @change = "${e=>this.onAdvancedSearch(e,0)}">
            <label style="cursor:pointer;" for="search-api-params"> API Parameters </label>
          </div>
          <div style="margin-left: 16px;">
            <input style="cursor:pointer;" type="checkbox" part="checkbox checkbox-search-dialog" id="search-api-request-body" @change = "${e=>this.onAdvancedSearch(e,0)}">
            <label style="cursor:pointer;" for="search-api-request-body"> Request Body Parameters </label>
          </div>
          <div style="margin-left: 16px;">
            <input style="cursor:pointer;" type="checkbox" part="checkbox checkbox-search-dialog" id="search-api-resp-descr" @change = "${e=>this.onAdvancedSearch(e,0)}">
            <label style="cursor:pointer;" for="search-api-resp-descr"> Response Description </label>
          </div>
        </div>
      </span>
      
      ${null===(e=this.advancedSearchMatches)||void 0===e?void 0:e.map((e=>P`
      <div
        class="mono-font small-font-size hover-bg"
        style='padding: 5px; cursor: pointer; border-bottom: 1px solid var(--light-border-color); ${e.deprecated?"filter:opacity(0.5);":""}' 
        data-content-id='${e.elementId}'
        tabindex = '0'
        @click="${e=>{this.matchPaths="",this.showAdvancedSearchDialog=!1,this.requestUpdate(),this.scrollToEventTarget(e,!0)}}"
      > 
        <span class="upper bold-text method-fg ${e.method}">${e.method}</span> 
        <span>${e.path}</span>
        <span class="regular-font gray-text">${e.summary}</span>
      </div>
    `))}
    </dialog-box>
  `}customElements.define("dialog-box",class extends ee{static get properties(){return{heading:{type:String,attribute:"heading"},show:{type:String,attribute:"show"}}}static get styles(){return[bx]}connectedCallback(){super.connectedCallback(),document.addEventListener("keydown",(e=>{"Escape"===e.code&&this.onClose()}))}attributeChangedCallback(e,t,r){t!==r&&("heading"===e&&(this.heading=r),"show"===e&&(this.show=r,"true"===r&&document.dispatchEvent(new CustomEvent("open",{bubbles:!0,composed:!0,detail:this})))),super.attributeChangedCallback(e,t,r)}render(){return P`
    ${"true"===this.show?P`
        <div class="dialog-box-overlay">
          <div class="dialog-box">
            <header class="dialog-box-header">
              <span class="dialog-box-title">${this.heading}</span>
              <button type="button" @click="${this.onClose}">&times;</button>
            </header>
            <div class="dialog-box-content">
              <slot></slot>
            </div>
          </div>
        </div>`:""}`}onClose(){document.dispatchEvent(new CustomEvent("close",{bubbles:!0,composed:!0}))}});const wx={color:{inputReverseFg:"#fff",inputReverseBg:"#333",headerBg:"#444",getRgb(e){if(0===e.indexOf("#")&&(e=e.slice(1,7)),3!==e.length&&4!==e.length||(e=e[0]+e[0]+e[1]+e[1]+e[2]+e[2]),6!==e.length)throw new Error("Invalid HEX color.");return{r:parseInt(e.slice(0,2),16),g:parseInt(e.slice(2,4),16),b:parseInt(e.slice(4,6),16)}},luminanace(e){const t=this.getRgb(e);return.299*t.r+.587*t.g+.114*t.b},invert(e){return this.luminanace(e)>135?"#000":"#fff"},opacity(e,t){const r=this.getRgb(e);return`rgba(${r.r}, ${r.g}, ${r.b}, ${t})`},brightness(e,t){const r=this.getRgb(e);return r.r+=t,r.g+=t,r.b+=t,r.r>255?r.r=255:r.r<0&&(r.r=0),r.g>255?r.g=255:r.g<0&&(r.g=0),r.b>255?r.b=255:r.b<0&&(r.b=0),`#${r.r.toString(16).padStart(2,"0")}${r.g.toString(16).padStart(2,"0")}${r.b.toString(16).padStart(2,"0")}`},hasGoodContrast(e,t){return this.luminanace(e)-this.luminanace(t)}}};function $x(e){return/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3}|[A-Fa-f0-9]{8}|[A-Fa-f0-9]{4})$/i.test(e)}function Ax(e,t={}){let r={};const n=t.primaryColor?t.primaryColor:"dark"===e?"#f76b39":"#ff591e",o=wx.color.invert(n),i=wx.color.opacity(n,"0.8");if("dark"===e){const e=t.bg1?t.bg1:"#333",a=t.fg1?t.fg1:"#bbb",s=t.bg2?t.bg2:wx.color.brightness(e,5),l=t.bg3?t.bg3:wx.color.brightness(e,17),c=t.bg3?t.bg3:wx.color.brightness(e,35),p=t.fg2?t.fg2:wx.color.brightness(a,-15),u=t.fg3?t.fg3:wx.color.brightness(a,-20),d=t.fg3?t.fg3:wx.color.brightness(a,-65),h=t.inlineCodeFg?t.inlineCodeFg:"#aaa",f="#bbb",m="#eee",y=t.headerColor?t.headerColor:wx.color.brightness(e,10),g=t.navBgColor?t.navBgColor:wx.color.brightness(e,10);r={bg1:e,bg2:s,bg3:l,lightBg:c,fg1:a,fg2:p,fg3:u,lightFg:d,inlineCodeFg:h,primaryColor:n,primaryColorTrans:i,primaryColorInvert:o,selectionBg:f,selectionFg:m,overlayBg:"rgba(80, 80, 80, 0.4)",navBgColor:g,navTextColor:t.navTextColor?t.navTextColor:wx.color.opacity(wx.color.invert(g),"0.65"),navHoverBgColor:t.navHoverBgColor?t.navHoverBgColor:wx.color.brightness(g,-15),navHoverTextColor:t.navHoverTextColor?t.navHoverTextColor:wx.color.invert(g),navAccentColor:t.navAccentColor?t.navAccentColor:wx.color.brightness(n,25),headerColor:y,headerColorInvert:wx.color.invert(y),headerColorDarker:wx.color.brightness(y,-20),headerColorBorder:wx.color.brightness(y,10),borderColor:t.borderColor||wx.color.brightness(e,20),lightBorderColor:t.lightBorderColor||wx.color.brightness(e,15),codeBorderColor:t.codeBorderColor||wx.color.brightness(e,30),inputBg:t.inputBg||wx.color.brightness(e,-5),placeHolder:t.placeHolder||wx.color.opacity(a,"0.3"),hoverColor:t.hoverColor||wx.color.brightness(e,-10),red:t.red?t.red:"#F06560",lightRed:t.lightRed?t.lightRed:wx.color.brightness(e,-10),pink:t.pink?t.pink:"#ffb2b2",lightPink:t.lightPink||wx.color.brightness(e,-10),green:t.green||"#7ec699",lightGreen:t.lightGreen||wx.color.brightness(e,-10),blue:t.blue||"#71b7ff",lightBlue:t.lightBlue||wx.color.brightness(e,-10),orange:t.orange?t.orange:"#f08d49",lightOrange:t.lightOrange||wx.color.brightness(e,-10),yellow:t.yellow||"#827717",lightYellow:t.lightYellow||wx.color.brightness(e,-10),purple:t.purple||"#786FF1",brown:t.brown||"#D4AC0D",codeBg:t.codeBg||wx.color.opacity(wx.color.brightness(e,-15),.7),codeFg:t.codeFg||"#aaa",codePropertyColor:t.codePropertyColor||"#f8c555",codeKeywordColor:t.codeKeywordColor||"#cc99cd",codeOperatorColor:t.codeOperatorColor||"#67cdcc"}}else{const e=t.bg1?t.bg1:"#ffffff",a=t.fg1?t.fg1:"#444444",s=t.bg2?t.bg2:wx.color.brightness(e,-5),l=t.bg3?t.bg3:wx.color.brightness(e,-15),c=t.bg3?t.bg3:wx.color.brightness(e,-45),p=t.fg2?t.fg2:wx.color.brightness(a,17),u=t.fg3?t.fg3:wx.color.brightness(a,30),d=t.fg3?t.fg3:wx.color.brightness(a,70),h=t.inlineCodeFg?t.inlineCodeFg:"brown",f="#444",m="#eee",y=t.headerColor?t.headerColor:wx.color.brightness(e,-180),g=t.navBgColor?t.navBgColor:wx.color.brightness(e,-180);r={bg1:e,bg2:s,bg3:l,lightBg:c,fg1:a,fg2:p,fg3:u,lightFg:d,inlineCodeFg:h,primaryColor:n,primaryColorTrans:i,primaryColorInvert:o,selectionBg:f,selectionFg:m,overlayBg:"rgba(0, 0, 0, 0.4)",navBgColor:g,navTextColor:t.navTextColor?t.navTextColor:wx.color.opacity(wx.color.invert(g),"0.65"),navHoverBgColor:t.navHoverBgColor?t.navHoverBgColor:wx.color.brightness(g,-15),navHoverTextColor:t.navHoverTextColor?t.navHoverTextColor:wx.color.invert(g),navAccentColor:t.navAccentColor?t.navAccentColor:wx.color.brightness(n,25),headerColor:y,headerColorInvert:wx.color.invert(y),headerColorDarker:wx.color.brightness(y,-20),headerColorBorder:wx.color.brightness(y,10),borderColor:t.borderColor||wx.color.brightness(e,-38),lightBorderColor:t.lightBorderColor||wx.color.brightness(e,-23),codeBorderColor:t.codeBorderColor||"transparent",inputBg:t.inputBg||wx.color.brightness(e,10),placeHolder:t.placeHolder||wx.color.brightness(d,20),hoverColor:t.hoverColor||wx.color.brightness(e,-5),red:t.red||"#F06560",lightRed:t.lightRed||"#fff0f0",pink:t.pink?t.pink:"#990055",lightPink:t.lightPink?t.lightPink:"#ffb2b2",green:t.green||"#690",lightGreen:t.lightGreen||"#fbfff0",blue:t.blue||"#47AFE8",lightBlue:t.lightBlue||"#eff8fd",orange:t.orange||"#FF9900",lightOrange:t.lightOrange||"#fff5e6",yellow:t.yellow||"#827717",lightYellow:t.lightYellow||"#fff5cc",purple:t.purple||"#786FF1",brown:t.brown||"#D4AC0D",codeBg:t.codeBg||wx.color.opacity(wx.color.brightness(e,-15),.7),codeFg:t.codeFg||"#666",codePropertyColor:t.codePropertyColor||"#905",codeKeywordColor:t.codeKeywordColor||"#07a",codeOperatorColor:t.codeOperatorColor||"#9a6e3a"}}return P`
  <style>
  *, *:before, *:after { box-sizing: border-box; }
  
  :host {
    /* Common Styles - irrespective of themes */  
    --border-radius: 2px;
    --layout: ${this.layout||"row"};
    --font-mono: ${this.monoFont||'Monaco, "Andale Mono", "Roboto Mono", Consolas, monospace'};
    --font-regular: ${this.regularFont||'"Open Sans", Avenir, "Segoe UI", Arial, sans-serif'};
    --scroll-bar-width: 8px;
    --nav-item-padding: ${"relaxed"===this.navItemSpacing?"10px 16px 10px 10px":"compact"===this.navItemSpacing?"5px 16px 5px 10px":"7px 16px 7px 10px"};
    
    --resp-area-height: ${this.responseAreaHeight};
    --font-size-small:  ${"default"===this.fontSize?"12px":"large"===this.fontSize?"13px":"14px"};
    --font-size-mono:   ${"default"===this.fontSize?"13px":"large"===this.fontSize?"14px":"15px"};
    --font-size-regular: ${"default"===this.fontSize?"14px":"large"===this.fontSize?"15px":"16px"};
    --dialog-z-index: 1000;

    /* Theme specific styles */  
    --bg:${r.bg1};
    --bg2:${r.bg2};
    --bg3:${r.bg3};
    --light-bg:${r.lightBg};
    --fg:${r.fg1};
    --fg2:${r.fg2};
    --fg3:${r.fg3};
    --light-fg:${r.lightFg};
    --selection-bg:${r.selectionBg};
    --selection-fg:${r.selectionFg};
    --overlay-bg:${r.overlayBg};
    
    /* Border Colors */
    --border-color:${r.borderColor};
    --light-border-color:${r.lightBorderColor};
    --code-border-color:${r.codeBorderColor};

    --input-bg:${r.inputBg};
    --placeholder-color:${r.placeHolder};
    --hover-color:${r.hoverColor};
    --red:${r.red};
    --light-red:${r.lightRed};
    --pink:${r.pink};
    --light-pink:${r.lightPink};
    --green:${r.green};
    --light-green:${r.lightGreen};
    --blue:${r.blue};
    --light-blue:${r.lightBlue};
    --orange:${r.orange};
    --light-orange:${r.lightOrange};
    --yellow:${r.yellow};
    --light-yellow:${r.lightYellow};
    --purple:${r.purple};
    --brown:${r.brown};

    /* Header Color */
    --header-bg:${r.headerColor};
    --header-fg:${r.headerColorInvert};
    --header-color-darker:${r.headerColorDarker};
    --header-color-border:${r.headerColorBorder};

    /* Nav Colors */  
    --nav-bg-color:${r.navBgColor};
    --nav-text-color:${r.navTextColor};
    --nav-hover-bg-color:${r.navHoverBgColor};
    --nav-hover-text-color:${r.navHoverTextColor};
    --nav-accent-color:${r.navAccentColor};

    /* Primary Colors */  
    --primary-color:${r.primaryColor};
    --primary-color-invert:${r.primaryColorInvert};
    --primary-color-trans:${r.primaryColorTrans};

    /*Code Syntax Color*/
    --code-bg:${r.codeBg};
    --code-fg:${r.codeFg};
    --inline-code-fg:${r.inlineCodeFg};
    --code-property-color:${r.codePropertyColor};
    --code-keyword-color:${r.codeKeywordColor};
    --code-operator-color:${r.codeOperatorColor};
  }
  </style>`}function kx(e=!1,t=!0,r=!0,n=!1){if(!this.resolvedSpec)return"";const o={bg1:$x(this.bgColor)?this.bgColor:"",fg1:$x(this.textColor)?this.textColor:"",headerColor:$x(this.headerColor)?this.headerColor:"",primaryColor:$x(this.primaryColor)?this.primaryColor:"",navBgColor:$x(this.navBgColor)?this.navBgColor:"",navTextColor:$x(this.navTextColor)?this.navTextColor:"",navHoverBgColor:$x(this.navHoverBgColor)?this.navHoverBgColor:"",navHoverTextColor:$x(this.navHoverTextColor)?this.navHoverTextColor:"",navAccentColor:$x(this.navAccentColor)?this.navAccentColor:""};return this.resolvedSpec.specLoadError?e?P`
        ${"dark"===this.theme?Ax.call(this,"dark",o):Ax.call(this,"light",o)}
        <div style="display:flex; align-items:center; border:1px dashed var(--border-color); height:42px; padding:5px; font-size:var(--font-size-small); color:var(--red); font-family:var(--font-mono)"> ${this.resolvedSpec.info.description} </div>
      `:P`
      ${"dark"===this.theme?Ax.call(this,"dark",o):Ax.call(this,"light",o)}
      <!-- Header -->
      ${vx.call(this)}
      <main class="main-content regular-font" part="section-main-content">
        <slot></slot>
        <div style="margin:24px; text-align: center;">
          <h1 style="color: var(--red)"> ${this.resolvedSpec.info.title} </h1>
          <div style="font-family:var(--font-mono)"> ${this.resolvedSpec.info.description} </div>
        </div>
      </main>  
    `:this.resolvedSpec.isSpecLoading?P`
      ${"dark"===this.theme?Ax.call(this,"dark",o):Ax.call(this,"light",o)}
      <main class="main-content regular-font" part="section-main-content">
        <slot></slot>
        <div class="main-content-inner--${this.renderStyle}-mode">
          <div class="loader"></div>
        </div>
      </main>  
    `:P`
    ${"dark"===this.theme?Ax.call(this,"dark",o):Ax.call(this,"light",o)}

    <!-- Header -->
    ${"false"===this.showHeader?"":vx.call(this)}
    
    <!-- Advanced Search -->
    ${"false"===this.allowAdvancedSearch?"":xx.call(this)}

    <div id='the-main-body' class="body" dir= ${this.pageDirection}>
      <!-- Side Nav -->
      ${"read"!==this.renderStyle&&"focused"!==this.renderStyle||"true"!==this.showSideNav||!this.resolvedSpec?"":ax.call(this)}

      <!-- Main Content -->
      <main class="main-content regular-font" part="section-main-content">
        <slot></slot>
        <div class="main-content-inner--${this.renderStyle}-mode">
          ${!0===this.loading?P`<div class="loader"></div>`:P`
              ${!0===this.loadFailed?P`<div style="text-align: center;margin: 16px;"> Unable to load the Spec</div>`:P`
                  <div class="operations-root" @click="${e=>{this.handleHref(e)}}">
                  ${"focused"===this.renderStyle?P`${ux.call(this)}`:P`
                      ${"true"===this.showInfo?Qb.call(this):""}
                      ${"true"===this.allowServerSelection?rx.call(this):""}
                      ${"true"===this.allowAuthentication?Sb.call(this):""}
                      <div id="operations-top" class="observe-me">
                        <slot name="operations-top"></slot>
                      </div>  
                      ${"read"===this.renderStyle?Gb.call(this):gx.call(this,t,r,n)}
                    `}
                  </div>
                `}`}
        </div>
        <slot name="footer"></slot>
      </main>
    </div>  
  `}class Sx extends ee{constructor(){super();const e={root:this.getRootNode().host,rootMargin:"-50px 0px -50px 0px",threshold:0};this.showSummaryWhenCollapsed=!0,this.isIntersectionObserverActive=!0,this.intersectionObserver=new IntersectionObserver((e=>{this.onIntersect(e)}),e)}static get properties(){return{headingText:{type:String,attribute:"heading-text"},gotoPath:{type:String,attribute:"goto-path"},updateRoute:{type:String,attribute:"update-route"},routePrefix:{type:String,attribute:"route-prefix"},specUrl:{type:String,attribute:"spec-url"},sortTags:{type:String,attribute:"sort-tags"},generateMissingTags:{type:String,attribute:"generate-missing-tags"},sortEndpointsBy:{type:String,attribute:"sort-endpoints-by"},specFile:{type:String,attribute:!1},layout:{type:String},renderStyle:{type:String,attribute:"render-style"},defaultSchemaTab:{type:String,attribute:"default-schema-tab"},responseAreaHeight:{type:String,attribute:"response-area-height"},fillRequestFieldsWithExample:{type:String,attribute:"fill-request-fields-with-example"},onNavTagClick:{type:String,attribute:"on-nav-tag-click"},schemaStyle:{type:String,attribute:"schema-style"},schemaExpandLevel:{type:Number,attribute:"schema-expand-level"},schemaDescriptionExpanded:{type:String,attribute:"schema-description-expanded"},schemaHideReadOnly:{type:String,attribute:"schema-hide-read-only"},schemaHideWriteOnly:{type:String,attribute:"schema-hide-write-only"},apiKeyName:{type:String,attribute:"api-key-name"},apiKeyLocation:{type:String,attribute:"api-key-location"},apiKeyValue:{type:String,attribute:"api-key-value"},defaultApiServerUrl:{type:String,attribute:"default-api-server"},serverUrl:{type:String,attribute:"server-url"},oauthReceiver:{type:String,attribute:"oauth-receiver"},showHeader:{type:String,attribute:"show-header"},showSideNav:{type:String,attribute:"show-side-nav"},showInfo:{type:String,attribute:"show-info"},allowAuthentication:{type:String,attribute:"allow-authentication"},allowTry:{type:String,attribute:"allow-try"},allowSpecUrlLoad:{type:String,attribute:"allow-spec-url-load"},allowSpecFileLoad:{type:String,attribute:"allow-spec-file-load"},allowSpecFileDownload:{type:String,attribute:"allow-spec-file-download"},allowSearch:{type:String,attribute:"allow-search"},allowAdvancedSearch:{type:String,attribute:"allow-advanced-search"},allowServerSelection:{type:String,attribute:"allow-server-selection"},allowSchemaDescriptionExpandToggle:{type:String,attribute:"allow-schema-description-expand-toggle"},showComponents:{type:String,attribute:"show-components"},pageDirection:{type:String,attribute:"page-direction"},theme:{type:String},bgColor:{type:String,attribute:"bg-color"},textColor:{type:String,attribute:"text-color"},headerColor:{type:String,attribute:"header-color"},primaryColor:{type:String,attribute:"primary-color"},fontSize:{type:String,attribute:"font-size"},regularFont:{type:String,attribute:"regular-font"},monoFont:{type:String,attribute:"mono-font"},loadFonts:{type:String,attribute:"load-fonts"},navBgColor:{type:String,attribute:"nav-bg-color"},navTextColor:{type:String,attribute:"nav-text-color"},navHoverBgColor:{type:String,attribute:"nav-hover-bg-color"},navHoverTextColor:{type:String,attribute:"nav-hover-text-color"},navAccentColor:{type:String,attribute:"nav-accent-color"},navItemSpacing:{type:String,attribute:"nav-item-spacing"},usePathInNavBar:{type:String,attribute:"use-path-in-nav-bar"},infoDescriptionHeadingsInNavBar:{type:String,attribute:"info-description-headings-in-navbar"},fetchCredentials:{type:String,attribute:"fetch-credentials"},matchPaths:{type:String,attribute:"match-paths"},matchType:{type:String,attribute:"match-type"},loading:{type:Boolean},focusedElementId:{type:String},showAdvancedSearchDialog:{type:Boolean},advancedSearchMatches:{type:Object}}}static get styles(){return[ie,ae,se,le,ce,pe,ue,de,he,l`
      :host {
        display:flex;
        flex-direction: column;
        min-width:360px;
        width:100%;
        height:100%;
        margin:0;
        padding:0;
        overflow: hidden;
        letter-spacing:normal;
        color:var(--fg);
        background-color:var(--bg);
        font-family:var(--font-regular);
      }
      .body {
        display:flex;
        height:100%;
        width:100%;
        overflow:hidden;
      }

      .main-content { 
        margin:0;
        padding: 0; 
        display:block;
        flex:1;
        height:100%;
        overflow-y: auto;
        overflow-x: hidden;
        scrollbar-width: thin;
        scrollbar-color: var(--border-color) transparent;
      }

      .main-content-inner--view-mode {
        padding: 0 8px;
      }
      .main-content::-webkit-scrollbar {
        width: 8px;
        height: 8px;
      }
      .main-content::-webkit-scrollbar-track {
        background:transparent;
      }
      .main-content::-webkit-scrollbar-thumb {
        background-color: var(--border-color);
      }

      .section-gap.section-tag {
        border-bottom:1px solid var(--border-color);
      }
      .section-gap,
      .section-gap--focused-mode,
      .section-gap--read-mode { 
        padding: 0px 4px; 
      }
      .section-tag-header {
        position:relative;
        cursor: n-resize;
        padding: 12px 0;
      }
      .collapsed .section-tag-header:hover{
        cursor: s-resize;
      }

      .section-tag-header:hover{
        background-image: linear-gradient(to right, rgba(0,0,0,0), var(--border-color), rgba(0,0,0,0));
      }

      .section-tag-header:hover::after {
        position:absolute;
        margin-left:-24px;
        font-size:20px;
        top: calc(50% - 14px);
        color:var(--primary-color);
        content: '⬆'; 
      }

      .collapsed .section-tag-header::after {
        position:absolute;
        margin-left:-24px;
        font-size:20px;
        top: calc(50% - 14px);
        color: var(--border-color);
        content: '⬇'; 
      }
      .collapsed .section-tag-header:hover::after {
        color:var(--primary-color);
      }

      .collapsed .section-tag-body {
        display:none;
      }

      .logo {
        height:36px;
        width:36px;
        margin-left:5px; 
      }
      .only-large-screen-flex,
      .only-large-screen{
        display:none;
      }
      .tag.title {
        text-transform: uppercase;
      }
      .header {
        background-color:var(--header-bg);
        color:var(--header-fg);
        width:100%;
      }
      .header-title {
        font-size:calc(var(--font-size-regular) + 8px); 
        padding:0 8px;
      }
      input.header-input{
        background:var(--header-color-darker);
        color:var(--header-fg);
        border:1px solid var(--header-color-border);
        flex:1; 
        padding-right:24px;
        border-radius:3px;
      }
      input.header-input::placeholder {
        opacity:0.4;
      }
      .loader {
        margin: 16px auto 16px auto; 
        border: 4px solid var(--bg3);
        border-radius: 50%;
        border-top: 4px solid var(--primary-color);
        width: 36px;
        height: 36px;
        animation: spin 2s linear infinite;
      }
      .expanded-endpoint-body{ 
        position: relative;
        padding: 6px 0px; 
      }
      .expanded-endpoint-body.deprecated{ filter:opacity(0.6); }
      .divider { 
        border-top: 2px solid var(--border-color);
        margin: 24px 0;
        width:100%;
      }

      .tooltip {
        cursor:pointer;
        border: 1px solid var(--border-color);
        border-left-width: 4px;
        margin-left:2px;
      }
      .tooltip a {
        color: var(--fg2);
        text-decoration: none;
      }
      .tooltip-text {
        color: var(--fg2);
        max-width: 400px;
        position: absolute;
        z-index:1;
        background-color: var(--bg2);
        visibility: hidden;

        overflow-wrap: break-word;
      }
      .tooltip:hover {
        color: var(--primary-color);
        border-color: var(--primary-color);
      }
      .tooltip:hover a:hover {
        color: var(--primary-color);
      }

      .tooltip:hover .tooltip-text {
        visibility: visible;
      }

      @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }

      @media only screen and (min-width: 768px) {
        .nav-bar {
          width: 260px;
          display:flex;
        }
        .only-large-screen{
          display:block;
        }
        .only-large-screen-flex{
          display:flex;
        }
        .section-gap { 
          padding: 0 0 0 24px; 
        }
        .section-gap--focused-mode {
          padding: 24px 8px; 
        }
        .section-gap--read-mode { 
          padding: 24px 8px; 
        }
        .endpoint-body {
          position: relative;
          padding:36px 0 48px 0;
        }
      }

      @media only screen and (min-width: 1024px) {
        .nav-bar {
          width: ${s("default"===this.fontSize?"300px":"large"===this.fontSize?"315px":"330px")};
          display:flex;
        }
        .section-gap--focused-mode { 
          padding: 12px 80px 12px 80px; 
        }
        .section-gap--read-mode { 
          padding: 24px 80px 12px 80px; 
        }
      }`,fe]}connectedCallback(){super.connectedCallback();const e=this.parentElement;if(e&&(0===e.offsetWidth&&""===e.style.width&&(e.style.width="100vw"),0===e.offsetHeight&&""===e.style.height&&(e.style.height="100vh"),"BODY"===e.tagName&&(e.style.marginTop||(e.style.marginTop="0"),e.style.marginRight||(e.style.marginRight="0"),e.style.marginBottom||(e.style.marginBottom="0"),e.style.marginLeft||(e.style.marginLeft="0"))),"false"!==this.loadFonts){const e={family:"Open Sans",style:"normal",weight:"300",unicodeRange:"U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD"},t=new FontFace("Open Sans","url(https://fonts.gstatic.com/s/opensans/v18/mem5YaGs126MiZpBA-UN_r8OUuhpKKSTjw.woff2) format('woff2')",e);e.weight="600";const r=new FontFace("Open Sans","url(https://fonts.gstatic.com/s/opensans/v18/mem5YaGs126MiZpBA-UNirkOUuhpKKSTjw.woff2) format('woff2')",e);t.load().then((e=>{document.fonts.add(e)})),r.load().then((e=>{document.fonts.add(e)}))}this.layout&&"row, column,".includes(`${this.layout},`)||(this.layout="row"),this.renderStyle&&"read, view, focused,".includes(`${this.renderStyle},`)||(this.renderStyle="read"),this.schemaStyle&&"tree, table,".includes(`${this.schemaStyle},`)||(this.schemaStyle="tree"),this.theme&&"light, dark,".includes(`${this.theme},`)||(this.theme=window.matchMedia&&window.matchMedia("(prefers-color-scheme: light)").matches?"light":"dark"),this.defaultSchemaTab&&"example, schema, model,".includes(`${this.defaultSchemaTab},`)?"model"===this.defaultSchemaTab&&(this.defaultSchemaTab="schema"):this.defaultSchemaTab="schema",(!this.schemaExpandLevel||this.schemaExpandLevel<1)&&(this.schemaExpandLevel=99999),this.schemaDescriptionExpanded&&"true, false,".includes(`${this.schemaDescriptionExpanded},`)||(this.schemaDescriptionExpanded="false");const t=["post","put","patch"];this.schemaHideReadOnly?"never"!==this.schemaHideReadOnly&&(this.schemaHideReadOnly=t.filter((e=>this.schemaHideReadOnly.includes(e))),0===this.schemaHideReadOnly.length&&(this.schemaHideReadOnly=t)):this.schemaHideReadOnly=t,this.schemaHideReadOnly+=["get","head","delete","options"],this.schemaHideWriteOnly="never"!==this.schemaHideWriteOnly,this.fillRequestFieldsWithExample&&"true, false,".includes(`${this.fillRequestFieldsWithExample},`)||(this.fillRequestFieldsWithExample="true"),this.onNavTagClick&&"expand-collapse, show-description,".includes(`${this.onNavTagClick},`)||(this.onNavTagClick="expand-collapse"),this.responseAreaHeight||(this.responseAreaHeight="300px"),this.allowSearch&&"true, false,".includes(`${this.allowSearch},`)||(this.allowSearch="true"),this.allowAdvancedSearch&&"true, false,".includes(`${this.allowAdvancedSearch},`)||(this.allowAdvancedSearch="true"),this.allowTry&&"true, false,".includes(`${this.allowTry},`)||(this.allowTry="true"),this.apiKeyValue||(this.apiKeyValue="-"),this.apiKeyLocation||(this.apiKeyLocation="header"),this.apiKeyName||(this.apiKeyName=""),this.oauthReceiver||(this.oauthReceiver="oauth-receiver.html"),this.updateRoute&&"true, false,".includes(`${this.updateRoute},`)||(this.updateRoute="true"),this.routePrefix||(this.routePrefix="#"),this.sortTags&&"true, false,".includes(`${this.sortTags},`)||(this.sortTags="false"),this.generateMissingTags&&"true, false,".includes(`${this.generateMissingTags},`)||(this.generateMissingTags="false"),this.sortEndpointsBy&&"method, path, summary, none,".includes(`${this.sortEndpointsBy},`)||(this.sortEndpointsBy="path"),this.navItemSpacing&&"compact, relaxed, default,".includes(`${this.navItemSpacing},`)||(this.navItemSpacing="default"),this.usePathInNavBar&&"true, false,".includes(`${this.usePathInNavBar},`)||(this.usePathInNavBar="false"),this.fontSize&&"default, large, largest,".includes(`${this.fontSize},`)||(this.fontSize="default"),this.showInfo&&"true, false,".includes(`${this.showInfo},`)||(this.showInfo="true"),this.allowServerSelection&&"true, false,".includes(`${this.allowServerSelection},`)||(this.allowServerSelection="true"),this.allowAuthentication&&"true, false,".includes(`${this.allowAuthentication},`)||(this.allowAuthentication="true"),this.allowSchemaDescriptionExpandToggle&&"true, false,".includes(`${this.allowSchemaDescriptionExpandToggle},`)||(this.allowSchemaDescriptionExpandToggle="true"),this.showSideNav&&"true false".includes(this.showSideNav)||(this.showSideNav="true"),this.showComponents&&"true false".includes(this.showComponents)||(this.showComponents="false"),this.infoDescriptionHeadingsInNavBar&&"true, false,".includes(`${this.infoDescriptionHeadingsInNavBar},`)||(this.infoDescriptionHeadingsInNavBar="false"),this.fetchCredentials&&"omit, same-origin, include,".includes(`${this.fetchCredentials},`)||(this.fetchCredentials=""),this.matchType&&"includes regex".includes(this.matchType)||(this.matchType="includes"),this.showAdvancedSearchDialog||(this.showAdvancedSearchDialog=!1),re().setOptions({highlight:(e,t)=>oe().languages[t]?oe().highlight(e,oe().languages[t],t):e}),window.addEventListener("hashchange",(()=>{this.scrollTo(window.location.hash.substring(1))}),!0)}disconnectedCallback(){this.intersectionObserver&&this.intersectionObserver.disconnect(),super.disconnectedCallback()}infoDescriptionHeadingRenderer(){const e=new(re().Renderer);return e.heading=(e,t,r,n)=>`<h${t} class="observe-me" id="${n.slug(r)}">${e}</h${t}>`,e}render(){return kx.call(this)}observeExpandedContent(){this.shadowRoot.querySelectorAll(".observe-me").forEach((e=>{this.intersectionObserver.observe(e)}))}attributeChangedCallback(e,t,r){if("spec-url"===e&&t!==r&&window.setTimeout((async()=>{await this.loadSpec(r),this.gotoPath&&!window.location.hash&&this.scrollTo(this.gotoPath)}),0),"render-style"===e&&("read"===r?window.setTimeout((()=>{this.observeExpandedContent()}),100):this.intersectionObserver.disconnect()),"api-key-name"===e||"api-key-location"===e||"api-key-value"===e){let t=!1,n="",o="",i="";if("api-key-name"===e?this.getAttribute("api-key-location")&&this.getAttribute("api-key-value")&&(n=r,o=this.getAttribute("api-key-location"),i=this.getAttribute("api-key-value"),t=!0):"api-key-location"===e?this.getAttribute("api-key-name")&&this.getAttribute("api-key-value")&&(o=r,n=this.getAttribute("api-key-name"),i=this.getAttribute("api-key-value"),t=!0):"api-key-value"===e&&this.getAttribute("api-key-name")&&this.getAttribute("api-key-location")&&(i=r,o=this.getAttribute("api-key-location"),n=this.getAttribute("api-key-name"),t=!0),t&&this.resolvedSpec){const e=this.resolvedSpec.securitySchemes.find((e=>e.securitySchemeId===ye));e?(e.name=n,e.in=o,e.value=i,e.finalKeyValue=i):this.resolvedSpec.securitySchemes.push({securitySchemeId:ye,description:"api-key provided in rapidoc element attributes",type:"apiKey",name:n,in:o,value:i,finalKeyValue:i}),this.requestUpdate()}}super.attributeChangedCallback(e,t,r)}onSepcUrlChange(){this.setAttribute("spec-url",this.shadowRoot.getElementById("spec-url").value)}onSepcFileChange(e){this.setAttribute("spec-file",this.shadowRoot.getElementById("spec-file").value);const t=e.target.files[0],r=new FileReader;r.onload=()=>{try{const e=JSON.parse(r.result);this.loadSpec(e),this.shadowRoot.getElementById("spec-url").value=""}catch(e){console.error("RapiDoc: Unable to read or parse json")}},r.readAsText(t)}onFileLoadClick(){this.shadowRoot.getElementById("spec-file").click()}onSearchChange(e){this.matchPaths=e.target.value,this.resolvedSpec.tags.forEach((e=>e.paths.filter((t=>{this.matchPaths&&be(this.matchPaths,t,this.matchType)&&(e.expanded=!0)})))),this.resolvedSpec.components.forEach((e=>e.subComponents.filter((e=>{e.expanded=!1,this.matchPaths&&!function(e,t){return t.name.toLowerCase().includes(e.toLowerCase())}(this.matchPaths,e)||(e.expanded=!0)})))),this.requestUpdate()}onClearSearch(){this.shadowRoot.getElementById("nav-bar-search").value="",this.matchPaths="",this.resolvedSpec.components.forEach((e=>e.subComponents.filter((e=>{e.expanded=!0}))))}onShowSearchModalClicked(){this.showAdvancedSearchDialog=!0}async onOpenSearchDialog(e){const t=e.detail.querySelector("input");await ge(0),t&&t.focus()}async loadSpec(e){if(e){this.matchPaths="";try{this.resolvedSpec={specLoadError:!1,isSpecLoading:!0,tags:[]},this.loading=!0,this.loadFailed=!1;const t=await db.call(this,e,"true"===this.generateMissingTags,"true"===this.sortTags,this.getAttribute("sort-endpoints-by"),this.getAttribute("api-key-name"),this.getAttribute("api-key-location"),this.getAttribute("api-key-value"),this.getAttribute("server-url"));this.loading=!1,this.afterSpecParsedAndValidated(t)}catch(e){this.loading=!1,this.loadFailed=!0,this.resolvedSpec=null,console.error(`RapiDoc: Unable to resolve the API spec..  ${e.message}`)}}}async afterSpecParsedAndValidated(e){var t;this.resolvedSpec=e,this.selectedServer=void 0,this.defaultApiServerUrl&&(this.defaultApiServerUrl===this.serverUrl?this.selectedServer={url:this.serverUrl,computedUrl:this.serverUrl}:this.resolvedSpec.servers&&(this.selectedServer=this.resolvedSpec.servers.find((e=>e.url===this.defaultApiServerUrl)))),this.selectedServer||this.resolvedSpec.servers&&(this.selectedServer=this.resolvedSpec.servers[0]),this.requestUpdate();const r=new CustomEvent("spec-loaded",{detail:e});this.dispatchEvent(r),this.intersectionObserver.disconnect(),"read"===this.renderStyle&&(await ge(100),this.observeExpandedContent());const n=null===(t=window.location.hash)||void 0===t?void 0:t.substring(1);if(n)"view"===this.renderStyle?this.expandAndGotoOperation(n,!0,!0):this.scrollTo(n);else if("focused"===this.renderStyle){var o;const e=this.showInfo?"overview":null===(o=this.resolvedSpec.tags[0])||void 0===o?void 0:o.paths[0];this.scrollTo(e)}}expandAndGotoOperation(e,t=!0){if(!this.resolvedSpec)return;let r=!0;const n=-1===e.indexOf("#")?e:e.substring(1);if(n.startsWith("overview")||"servers"===n||"auth"===n)r=!1;else for(let t=0;t<(null===(o=this.resolvedSpec.tags)||void 0===o?void 0:o.length);t++){var o,i;const n=this.resolvedSpec.tags[t],a=null===(i=n.paths)||void 0===i?void 0:i.find((t=>t.elementId===e));a&&(a.expanded&&n.expanded?r=!1:(a.expanded=!0,n.expanded=!0))}t&&(r&&this.requestUpdate(),window.setTimeout((()=>{const e=this.shadowRoot.getElementById(n);e&&(e.scrollIntoView({behavior:"auto",block:"start"}),"true"===this.updateRoute&&window.history.replaceState(null,null,`${this.routePrefix||"#"}${n}`))}),r?150:0))}isValidTopId(e){return e.startsWith("overview")||"servers"===e||"auth"===e}isValidPathId(e){var t,r,n,o;return!("overview"!==e||!this.showInfo)||(!("servers"!==e||!this.allowServerSelection)||(!("auth"!==e||!this.allowAuthentication)||(e.startsWith("tag--")?null===(n=this.resolvedSpec)||void 0===n||null===(o=n.tags)||void 0===o?void 0:o.find((t=>t.elementId===e)):null===(t=this.resolvedSpec)||void 0===t||null===(r=t.tags)||void 0===r?void 0:r.find((t=>t.paths.find((t=>t.elementId===e)))))))}onIntersect(e){!1!==this.isIntersectionObserverActive&&e.forEach((e=>{if(e.isIntersecting&&e.intersectionRatio>0){const t=this.shadowRoot.querySelector(".nav-bar-tag.active, .nav-bar-path.active, .nav-bar-info.active, .nav-bar-h1.active, .nav-bar-h2.active, .operations.active"),r=this.shadowRoot.getElementById(`link-${e.target.id}`);r&&("true"===this.updateRoute&&window.history.replaceState(null,null,`${window.location.href.split("#")[0]}${this.routePrefix||"#"}${e.target.id}`),r.scrollIntoView({behavior:"auto",block:"center"}),r.classList.add("active")),t&&t.classList.remove("active")}}))}handleHref(e){if("a"===e.target.tagName.toLowerCase()&&e.target.getAttribute("href").startsWith("#")){const t=this.shadowRoot.getElementById(e.target.getAttribute("href").replace("#",""));t&&t.scrollIntoView({behavior:"auto",block:"start"})}}async scrollToEventTarget(e,t=!0){const r=e.currentTarget;r.dataset.contentId&&(this.isIntersectionObserverActive=!1,this.scrollTo(r.dataset.contentId,!0,t),setTimeout((()=>{this.isIntersectionObserverActive=!0}),300))}async scrollTo(e,t=!0,r=!0){if("focused"===this.renderStyle&&(this.focusedElementId=e,await ge(0)),"view"===this.renderStyle)this.expandAndGotoOperation(e,t,!0);else{let t=!1;const n=this.shadowRoot.getElementById(e);if(n?(t=!0,n.scrollIntoView({behavior:"auto",block:"start"})):t=!1,t){if("focused"===this.renderStyle){const e=this.shadowRoot.querySelector("api-request");e&&e.resetRequestBodySelection();const t=this.shadowRoot.querySelector("api-response");t&&t.resetSelection()}"true"===this.updateRoute&&window.history.replaceState(null,null,`${this.routePrefix||"#"}${e}`);const t=this.shadowRoot.getElementById(`link-${e}`);if(t){r&&t.scrollIntoView({behavior:"auto",block:"center"}),await ge(0);const e=this.shadowRoot.querySelector(".nav-bar-tag.active, .nav-bar-path.active, .nav-bar-info.active, .nav-bar-h1.active, .nav-bar-h2.active, .operations.active");e&&e.classList.remove("active"),t.classList.add("active")}}}}setHttpUserNameAndPassword(e,t,r){return gb.call(this,e,t,r)}setApiKey(e,t){return gb.call(this,e,"","",t)}removeAllSecurityKeys(){return vb.call(this)}setApiServer(e){return Xb.call(this,e)}onAdvancedSearch(e,t){const r=e.target;clearTimeout(this.timeoutId),this.timeoutId=setTimeout((()=>{let e;e="text"===r.type?r:r.closest(".advanced-search-options").querySelector("input[type=text]");const t=[...r.closest(".advanced-search-options").querySelectorAll("input:checked")].map((e=>e.id));this.advancedSearchMatches=function(e,t,r=[]){if(!e.trim()||0===r.length)return;const n=[];return t.forEach((t=>{t.paths.forEach((t=>{let o="";var i;if(r.includes("search-api-path")&&(o=t.path),r.includes("search-api-descr")&&(o=`${o} ${t.summary||t.description||""}`),r.includes("search-api-params")&&(o=`${o} ${(null===(i=t.parameters)||void 0===i?void 0:i.map((e=>e.name)).join(" "))||""}`),r.includes("search-api-request-body")&&t.requestBody){let e=new Set;for(const r in null===(a=t.requestBody)||void 0===a?void 0:a.content){var a,s,l;null!==(s=t.requestBody.content[r].schema)&&void 0!==s&&s.properties&&(e=xe(null===(l=t.requestBody.content[r].schema)||void 0===l?void 0:l.properties)),o=`${o} ${[...e].join(" ")}`}}r.includes("search-api-resp-descr")&&(o=`${o} ${Object.values(t.responses).map((e=>e.description||"")).join(" ")}`),o.toLowerCase().includes(e.trim().toLowerCase())&&n.push({elementId:t.elementId,method:t.method,path:t.path,summary:t.summary||t.description||"",deprecated:t.deprecated})}))})),n}(e.value,this.resolvedSpec.tags,t)}),t)}}customElements.define("rapi-doc",Sx);customElements.define("rapi-doc-mini",class extends ee{constructor(){super(),this.isMini=!0,this.updateRoute="false",this.renderStyle="view",this.showHeader="false",this.allowAdvancedSearch="false"}static get properties(){return{specUrl:{type:String,attribute:"spec-url"},sortEndpointsBy:{type:String,attribute:"sort-endpoints-by"},layout:{type:String},pathsExpanded:{type:String,attribute:"paths-expanded"},defaultSchemaTab:{type:String,attribute:"default-schema-tab"},responseAreaHeight:{type:String,attribute:"response-area-height"},showSummaryWhenCollapsed:{type:String,attribute:"show-summary-when-collapsed"},fillRequestFieldsWithExample:{type:String,attribute:"fill-request-fields-with-example"},schemaStyle:{type:String,attribute:"schema-style"},schemaExpandLevel:{type:Number,attribute:"schema-expand-level"},schemaDescriptionExpanded:{type:String,attribute:"schema-description-expanded"},apiKeyName:{type:String,attribute:"api-key-name"},apiKeyLocation:{type:String,attribute:"api-key-location"},apiKeyValue:{type:String,attribute:"api-key-value"},defaultApiServerUrl:{type:String,attribute:"default-api-server"},serverUrl:{type:String,attribute:"server-url"},oauthReceiver:{type:String,attribute:"oauth-receiver"},allowTry:{type:String,attribute:"allow-try"},theme:{type:String},bgColor:{type:String,attribute:"bg-color"},textColor:{type:String,attribute:"text-color"},primaryColor:{type:String,attribute:"primary-color"},fontSize:{type:String,attribute:"font-size"},regularFont:{type:String,attribute:"regular-font"},monoFont:{type:String,attribute:"mono-font"},loadFonts:{type:String,attribute:"load-fonts"},fetchCredentials:{type:String,attribute:"fetch-credentials"},matchPaths:{type:String,attribute:"match-paths"},matchType:{type:String,attribute:"match-type"},loading:{type:Boolean}}}static get styles(){return[ie,ae,se,le,ce,pe,ue,de,he,l`
      :host {
        display:flex;
        flex-direction: column;
        min-width:360px;
        width:100%;
        height:100%;
        margin:0;
        padding:0;
        overflow: hidden;
        letter-spacing:normal;
        color:var(--fg);
        background-color:var(--bg);
        font-family:var(--font-regular);
      }

      @media only screen and (min-width: 768px) {
        .only-large-screen{
          display:block;
        }
        .only-large-screen-flex{
          display:flex;
        }
      }`]}connectedCallback(){if(super.connectedCallback(),"false"!==this.loadFonts){const e={family:"Open Sans",style:"normal",weight:"300",unicodeRange:"U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD"},t=new FontFace("Open Sans","url(https://fonts.gstatic.com/s/opensans/v18/mem5YaGs126MiZpBA-UN_r8OUuhpKKSTjw.woff2) format('woff2')",e);e.weight="600";const r=new FontFace("Open Sans","url(https://fonts.gstatic.com/s/opensans/v18/mem5YaGs126MiZpBA-UNirkOUuhpKKSTjw.woff2) format('woff2')",e);t.load().then((e=>{document.fonts.add(e)})),r.load().then((e=>{document.fonts.add(e)}))}this.showSummaryWhenCollapsed&&"true, false,".includes(`${this.showSummaryWhenCollapsed},`)||(this.showSummaryWhenCollapsed="true"),this.layout&&"row, column,".includes(`${this.layout},`)||(this.layout="row"),this.schemaStyle&&"tree, table,".includes(`${this.schemaStyle},`)||(this.schemaStyle="tree"),this.theme&&"light, dark,".includes(`${this.theme},`)||(this.theme=window.matchMedia&&window.matchMedia("(prefers-color-scheme: light)").matches?"light":"dark"),this.defaultSchemaTab&&"example, schema, model,".includes(`${this.defaultSchemaTab},`)?"model"===this.defaultSchemaTab&&(this.defaultSchemaTab="schema"):this.defaultSchemaTab="schema",this.pathsExpanded="true"===this.pathsExpanded,(!this.schemaExpandLevel||this.schemaExpandLevel<1)&&(this.schemaExpandLevel=99999),this.schemaDescriptionExpanded&&"true, false,".includes(`${this.schemaDescriptionExpanded},`)||(this.schemaDescriptionExpanded="false"),this.fillRequestFieldsWithExample&&"true, false,".includes(`${this.fillRequestFieldsWithExample},`)||(this.fillRequestFieldsWithExample="true"),this.responseAreaHeight||(this.responseAreaHeight="300px"),this.allowTry&&"true, false,".includes(`${this.allowTry},`)||(this.allowTry="true"),this.apiKeyValue||(this.apiKeyValue="-"),this.apiKeyLocation||(this.apiKeyLocation="header"),this.apiKeyName||(this.apiKeyName=""),this.oauthReceiver||(this.oauthReceiver="oauth-receiver.html"),this.sortTags&&"true, false,".includes(`${this.sortTags},`)||(this.sortTags="false"),this.sortEndpointsBy&&"method, path, summary,".includes(`${this.sortEndpointsBy},`)||(this.sortEndpointsBy="path"),this.fontSize&&"default, large, largest,".includes(`${this.fontSize},`)||(this.fontSize="default"),this.matchType&&"includes regex".includes(this.matchType)||(this.matchType="includes"),this.allowSchemaDescriptionExpandToggle&&"true, false,".includes(`${this.allowSchemaDescriptionExpandToggle},`)||(this.allowSchemaDescriptionExpandToggle="true"),this.fetchCredentials&&"omit, same-origin, include,".includes(`${this.fetchCredentials},`)||(this.fetchCredentials=""),re().setOptions({highlight:(e,t)=>oe().languages[t]?oe().highlight(e,oe().languages[t],t):e})}render(){return kx.call(this,!0,!1,!1,this.pathsExpanded)}attributeChangedCallback(e,t,r){if("spec-url"===e&&t!==r&&window.setTimeout((async()=>{await this.loadSpec(r)}),0),"api-key-name"===e||"api-key-location"===e||"api-key-value"===e){let t=!1,n="",o="",i="";if("api-key-name"===e?this.getAttribute("api-key-location")&&this.getAttribute("api-key-value")&&(n=r,o=this.getAttribute("api-key-location"),i=this.getAttribute("api-key-value"),t=!0):"api-key-location"===e?this.getAttribute("api-key-name")&&this.getAttribute("api-key-value")&&(o=r,n=this.getAttribute("api-key-name"),i=this.getAttribute("api-key-value"),t=!0):"api-key-value"===e&&this.getAttribute("api-key-name")&&this.getAttribute("api-key-location")&&(i=r,o=this.getAttribute("api-key-location"),n=this.getAttribute("api-key-name"),t=!0),t&&this.resolvedSpec){const e=this.resolvedSpec.securitySchemes.find((e=>e.securitySchemeId===ye));e?(e.name=n,e.in=o,e.value=i,e.finalKeyValue=i):this.resolvedSpec.securitySchemes.push({apiKeyId:ye,description:"api-key provided in rapidoc element attributes",type:"apiKey",name:n,in:o,value:i,finalKeyValue:i}),this.requestUpdate()}}super.attributeChangedCallback(e,t,r)}onSepcUrlChange(){this.setAttribute("spec-url",this.shadowRoot.getElementById("spec-url").value)}async loadSpec(e){if(e)try{this.resolvedSpec={specLoadError:!1,isSpecLoading:!0,tags:[]},this.loading=!0,this.loadFailed=!1,this.requestUpdate();const t=await db.call(this,e,"true"===this.generateMissingTags,"true"===this.sortTags,this.getAttribute("sort-endpoints-by"),this.getAttribute("api-key-name"),this.getAttribute("api-key-location"),this.getAttribute("api-key-value"),this.getAttribute("server-url"));this.loading=!1,this.afterSpecParsedAndValidated(t)}catch(e){this.loading=!1,this.loadFailed=!0,this.resolvedSpec=null,console.error(`RapiDoc: Unable to resolve the API spec..  ${e.message}`)}}async afterSpecParsedAndValidated(e){this.resolvedSpec=e,this.selectedServer=void 0,this.defaultApiServerUrl&&(this.defaultApiServerUrl===this.serverUrl?this.selectedServer={url:this.serverUrl,computedUrl:this.serverUrl}:this.resolvedSpec.servers&&(this.selectedServer=this.resolvedSpec.servers.find((e=>e.url===this.defaultApiServerUrl)))),this.selectedServer||this.resolvedSpec.servers&&(this.selectedServer=this.resolvedSpec.servers[0]),this.requestUpdate();const t=new CustomEvent("spec-loaded",{detail:e});this.dispatchEvent(t)}handleHref(e){if("a"===e.target.tagName.toLowerCase()&&e.target.getAttribute("href").startsWith("#")){const t=this.shadowRoot.getElementById(e.target.getAttribute("href").replace("#",""));t&&t.scrollIntoView({behavior:"auto",block:"start"})}}});class Ex extends HTMLElement{connectedCallback(){this.receiveAuthParms(),window.addEventListener("storage",(e=>this.receiveStorage(e)),!0)}receiveAuthParms(){let e={};if(document.location.search){const t=new URLSearchParams(document.location.search);e={code:t.get("code"),error:t.get("error"),state:t.get("state"),responseType:"code"}}else if(window.location.hash){e={token_type:this.parseQueryString(window.location.hash.substring(1),"token_type"),access_token:this.parseQueryString(window.location.hash.substring(1),"access_token"),responseType:"token"}}window.opener?window.opener.postMessage(e,this.target):sessionStorage.setItem("rapidoc-oauth-data",JSON.stringify(e))}relayAuthParams(e){if(window.parent&&"rapidoc-oauth-data"===e.key){const t=JSON.parse(e.newValue);window.parent.postMessage(t,this.target)}}parseQueryString(e,t){const r=e.split("&");for(let e=0;e<r.length;e++){const n=r[e].split("=");if(decodeURIComponent(n[0])===t)return decodeURIComponent(n[1])}}}function Dx(){return P`
  <nav class='nav-bar' part="section-navbar">
    <slot name="nav-logo" class="logo"></slot>
    <div style="display:flex;line-height:22px; padding:8px">
      <input id="nav-bar-search" 
        part = "textbox textbox-nav-filter"
        style = "width:100%; height: 26px; padding-right:20px; color:var(--nav-hover-text-color); border-color:var(--nav-accent-color); background-color:var(--nav-hover-bg-color)" 
        type = "text"
        placeholder = "Filter" 
        @change = "${this.onSearchChange}"  
        spellcheck = "false" 
      >
      <div style="margin: 6px 5px 0 -24px; font-size:var(--font-size-regular); cursor:pointer;">&#x21a9;</div>
    </div>
    <nav style="flex:1" class='nav-scroll' part="section-navbar-scroll">
      ${this.resolvedSpec.schemaAndExamples.map((e=>P`
        <div class='nav-bar-path' data-content-id='${e.elementId}' id='link-${e.elementId}'
          @click = '${e=>{this.scrollToEventTarget(e,!1)}}'
        > 
          ${e.name}
        </div>`))}
    </nav>  
  </nav>
  `}function Ox(){return P`
    ${"true"===this.showInfo?Qb.call(this):""}
    <div style="font-size:var(--font-size-regular);">
    ${this.resolvedSpec.schemaAndExamples.map((e=>{var t;const r=zb(e.examples,e.example,e.schema,"json",!0,!1,"json",!0);return e.selectedExample=null===(t=r[0])||void 0===t?void 0:t.exampleId,P`
        <section id='${e.elementId}' class='json-schema-and-example regular-font' style="display:flex; flex-direction: column; border:1px solid var(--border-color); margin-bottom:32px; border-top: 5px solid var(--border-color)">
          <div style="padding:16px; border-bottom: 1px solid var(--border-color)">
            <div style="font-size:var(--font-size-small); font-weight:bold">${e.name}</div>
            <span class="json-schema-description m-markdown ">${yb(re()(e.description||""))}</span>
          </div>  
          <div style="display:flex; flex-direction: row; gap:16px;">
            <div class="json-schema-def" style="flex:1; padding:16px 0 16px 16px; ">
              <schema-tree
                .data = '${Nb(e.schema,{})}'
                schema-expand-level = "${this.schemaExpandLevel}"
                schema-description-expanded = "${this.schemaDescriptionExpanded}"
                allow-schema-description-expand-toggle = "${this.allowSchemaDescriptionExpandToggle}",
                schema-hide-read-only = false
                schema-hide-write-only = false
              > </schema-tree>
            </div>
            <div class="json-schema-example-panel" style="width:400px; background-color: var(--input-bg); padding:16px 0 16px 16px; border-left: 1px dashed var(--border-color);">
              ${r.length>1?P`<select style="min-width:100px; max-width:100%" @change='${t=>this.onSelectExample(t,e)}'>
                    ${r.map((t=>P`
                      <option value="${t.exampleId}" ?selected=${t.exampleId===e.selectedExample}> 
                        ${t.exampleSummary.length>80?t.exampleId:t.exampleSummary}
                      </option>`))}
                  </select>`:P`<div style="font-size: var(--font-size-small);font-weight:700; margin:5px 0"> ${r[0].exampleSummary}</div>`}
              ${r.map((t=>P`
                <json-tree 
                  .data="${t.exampleValue}"
                  data-example = '${t.exampleId}'
                  class = 'example'
                  style = "margin-top:16px; display: ${t.exampleId===e.selectedExample?"flex":"none"}"
                ></json-tree>`))}
            </div>
          </div>
        </section>`}))}
    </div>
  `}function Cx(e=!1){if(!this.resolvedSpec)return"";const t={bg1:$x(this.bgColor)?this.bgColor:"",fg1:$x(this.textColor)?this.textColor:"",headerColor:$x(this.headerColor)?this.headerColor:"",primaryColor:$x(this.primaryColor)?this.primaryColor:"",navBgColor:$x(this.navBgColor)?this.navBgColor:"",navTextColor:$x(this.navTextColor)?this.navTextColor:"",navHoverBgColor:$x(this.navHoverBgColor)?this.navHoverBgColor:"",navHoverTextColor:$x(this.navHoverTextColor)?this.navHoverTextColor:"",navAccentColor:$x(this.navAccentColor)?this.navAccentColor:""};return this.resolvedSpec.specLoadError?e?P`
        ${"dark"===this.theme?Ax.call(this,"dark",t):Ax.call(this,"light",t)}
        <div style="display:flex; align-items:center; border:1px dashed var(--border-color); height:42px; padding:5px; font-size:var(--font-size-small); color:var(--red); font-family:var(--font-mono)"> ${this.resolvedSpec.info.description} </div>
      `:P`
      ${"dark"===this.theme?Ax.call(this,"dark",t):Ax.call(this,"light",t)}
      <!-- Header -->
      ${vx.call(this)}
      <h1> Header </h1>
      <main class="main-content regular-font" part="section-main-content">
        <slot></slot>
        <div style="margin:24px; text-align: center;">
          <h1 style="color: var(--red)"> ${this.resolvedSpec.info.title} </h1>
          <div style="font-family:var(--font-mono)"> ${this.resolvedSpec.info.description} </div>
        </div>
      </main>  
    `:this.resolvedSpec.isSpecLoading?P`
      ${"dark"===this.theme?Ax.call(this,"dark",t):Ax.call(this,"light",t)}
      <main class="main-content regular-font" part="section-main-content">
        <slot></slot>
        <div class="main-content-inner--${this.renderStyle}-mode">
          <div class="loader"></div>
        </div>
      </main>  
    `:P`
    ${"dark"===this.theme?Ax.call(this,"dark",t):Ax.call(this,"light",t)}

    <!-- Header -->
    ${"false"===this.showHeader?"":vx.call(this)}
    
    <div id='the-main-body' class="body" dir= ${this.pageDirection}>

      <!-- Side Nav -->
      ${Dx.call(this)}

      <!-- Main Content -->
      <main class="main-content regular-font" part="section-main-content">
        <slot></slot>
        <div class="main-content-inner--${this.renderStyle}-mode">
          ${!0===this.loading?P`<div class="loader"></div>`:P`
              ${!0===this.loadFailed?P`<div style="text-align: center;margin: 16px;"> Unable to load the Spec</div>`:P`
                  <div class="operations-root" @click="${e=>{this.handleHref(e)}}">
                    ${Ox.call(this)}
                  </div>
                `}`}
        </div>
        <slot name="footer"></slot>
      </main>
    </div>  
  `}customElements.define("oauth-receiver",Ex);customElements.define("json-schema-viewer",class extends ee{constructor(){super(),this.isMini=!1,this.updateRoute="false",this.renderStyle="focused",this.showHeader="true",this.allowAdvancedSearch="false",this.selectedExampleForEachSchema={}}static get properties(){return{specUrl:{type:String,attribute:"spec-url"},schemaStyle:{type:String,attribute:"schema-style"},schemaExpandLevel:{type:Number,attribute:"schema-expand-level"},schemaDescriptionExpanded:{type:String,attribute:"schema-description-expanded"},allowSchemaDescriptionExpandToggle:{type:String,attribute:"allow-schema-description-expand-toggle"},showHeader:{type:String,attribute:"show-header"},showSideNav:{type:String,attribute:"show-side-nav"},showInfo:{type:String,attribute:"show-info"},allowSpecUrlLoad:{type:String,attribute:"allow-spec-url-load"},allowSpecFileLoad:{type:String,attribute:"allow-spec-file-load"},allowSpecFileDownload:{type:String,attribute:"allow-spec-file-download"},allowSearch:{type:String,attribute:"allow-search"},theme:{type:String},bgColor:{type:String,attribute:"bg-color"},textColor:{type:String,attribute:"text-color"},primaryColor:{type:String,attribute:"primary-color"},fontSize:{type:String,attribute:"font-size"},regularFont:{type:String,attribute:"regular-font"},monoFont:{type:String,attribute:"mono-font"},loadFonts:{type:String,attribute:"load-fonts"},loading:{type:Boolean}}}static get styles(){return[ie,ae,se,le,ce,pe,ue,de,he,l`
      :host {
        display:flex;
        flex-direction: column;
        min-width:360px;
        width:100%;
        height:100%;
        margin:0;
        padding:0;
        overflow: hidden;
        letter-spacing:normal;
        color:var(--fg);
        background-color:var(--bg);
        font-family:var(--font-regular);
      }
      .body {
        display:flex;
        height:100%;
        width:100%;
        overflow:hidden;
      }
      .nav-bar {
        width: 230px;
        display:flex;
      }

      .main-content { 
        margin:0;
        padding: 16px; 
        display:block;
        flex:1;
        height:100%;
        overflow-y: auto;
        overflow-x: hidden;
        scrollbar-width: thin;
        scrollbar-color: var(--border-color) transparent;
      }
      .main-content-inner--view-mode {
        padding: 0 8px;
      }
      .main-content::-webkit-scrollbar {
        width: 8px;
        height: 8px;
      }
      .main-content::-webkit-scrollbar-track {
        background:transparent;
      }
      .main-content::-webkit-scrollbar-thumb {
        background-color: var(--border-color);
      }
      .header {
        background-color:var(--header-bg);
        color:var(--header-fg);
        width:100%;
      }
      .header-title {
        font-size:calc(var(--font-size-regular) + 8px); 
        padding:0 8px;
      }
      input.header-input{
        background:var(--header-color-darker);
        color:var(--header-fg);
        border:1px solid var(--header-color-border);
        flex:1; 
        padding-right:24px;
        border-radius:3px;
      }
      input.header-input::placeholder {
        opacity:0.4;
      }
      .loader {
        margin: 16px auto 16px auto; 
        border: 4px solid var(--bg3);
        border-radius: 50%;
        border-top: 4px solid var(--primary-color);
        width: 36px;
        height: 36px;
        animation: spin 2s linear infinite;
      }
      @media only screen and (min-width: 768px) {
        .only-large-screen{
          display:block;
        }
        .only-large-screen-flex{
          display:flex;
        }
      }`]}connectedCallback(){super.connectedCallback();const e=this.parentElement;if(e&&(0===e.offsetWidth&&""===e.style.width&&(e.style.width="100vw"),0===e.offsetHeight&&""===e.style.height&&(e.style.height="100vh"),"BODY"===e.tagName&&(e.style.marginTop||(e.style.marginTop="0"),e.style.marginRight||(e.style.marginRight="0"),e.style.marginBottom||(e.style.marginBottom="0"),e.style.marginLeft||(e.style.marginLeft="0"))),"false"!==this.loadFonts){const e={family:"Open Sans",style:"normal",weight:"300",unicodeRange:"U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD"},t=new FontFace("Open Sans","url(https://fonts.gstatic.com/s/opensans/v18/mem5YaGs126MiZpBA-UN_r8OUuhpKKSTjw.woff2) format('woff2')",e);e.weight="600";const r=new FontFace("Open Sans","url(https://fonts.gstatic.com/s/opensans/v18/mem5YaGs126MiZpBA-UNirkOUuhpKKSTjw.woff2) format('woff2')",e);t.load().then((e=>{document.fonts.add(e)})),r.load().then((e=>{document.fonts.add(e)}))}this.renderStyle="focused",this.pathsExpanded="true"===this.pathsExpanded,this.showInfo&&"true, false,".includes(`${this.showInfo},`)||(this.showInfo="true"),this.showSideNav&&"true false".includes(this.showSideNav)||(this.showSideNav="true"),this.showHeader&&"true, false,".includes(`${this.showHeader},`)||(this.showHeader="true"),this.schemaStyle&&"tree, table,".includes(`${this.schemaStyle},`)||(this.schemaStyle="tree"),this.theme&&"light, dark,".includes(`${this.theme},`)||(this.theme=window.matchMedia&&window.matchMedia("(prefers-color-scheme: light)").matches?"light":"dark"),this.allowSearch&&"true, false,".includes(`${this.allowSearch},`)||(this.allowSearch="true"),(!this.schemaExpandLevel||this.schemaExpandLevel<1)&&(this.schemaExpandLevel=99999),this.schemaDescriptionExpanded&&"true, false,".includes(`${this.schemaDescriptionExpanded},`)||(this.schemaDescriptionExpanded="false"),this.responseAreaHeight||(this.responseAreaHeight="300px"),this.fontSize&&"default, large, largest,".includes(`${this.fontSize},`)||(this.fontSize="default"),this.matchType&&"includes regex".includes(this.matchType)||(this.matchType="includes"),this.allowSchemaDescriptionExpandToggle&&"true, false,".includes(`${this.allowSchemaDescriptionExpandToggle},`)||(this.allowSchemaDescriptionExpandToggle="true"),re().setOptions({highlight:(e,t)=>oe().languages[t]?oe().highlight(e,oe().languages[t],t):e})}render(){return Cx.call(this,!0,!1,!1,this.pathsExpanded)}attributeChangedCallback(e,t,r){"spec-url"===e&&t!==r&&window.setTimeout((async()=>{await this.loadSpec(r)}),0),super.attributeChangedCallback(e,t,r)}onSepcUrlChange(){this.setAttribute("spec-url",this.shadowRoot.getElementById("spec-url").value)}onSearchChange(e){this.matchPaths=e.target.value}async loadSpec(e){if(e)try{this.resolvedSpec={specLoadError:!1,isSpecLoading:!0,tags:[]},this.loading=!0,this.loadFailed=!1,this.requestUpdate();const t=await db.call(this,e,"true"===this.generateMissingTags,"true"===this.sortTags,this.getAttribute("sort-endpoints-by"));this.loading=!1,this.afterSpecParsedAndValidated(t)}catch(e){this.loading=!1,this.loadFailed=!0,this.resolvedSpec=null,console.error(`RapiDoc: Unable to resolve the API spec..  ${e.message}`)}}async afterSpecParsedAndValidated(e){this.resolvedSpec=e;const t=new CustomEvent("spec-loaded",{detail:e});this.dispatchEvent(t)}handleHref(e){if("a"===e.target.tagName.toLowerCase()&&e.target.getAttribute("href").startsWith("#")){const t=this.shadowRoot.getElementById(e.target.getAttribute("href").replace("#",""));t&&t.scrollIntoView({behavior:"auto",block:"start"})}}onSelectExample(e){[...e.target.closest(".json-schema-example-panel").querySelectorAll(".example")].forEach((t=>{t.style.display=t.dataset.example===e.target.value?"flex":"none"}))}async scrollToEventTarget(e){const t=e.currentTarget;if(!t.dataset.contentId)return;const r=this.shadowRoot.getElementById(t.dataset.contentId);r&&r.scrollIntoView({behavior:"auto",block:"start"})}})},742:(e,t)=>{"use strict";t.byteLength=function(e){var t=l(e),r=t[0],n=t[1];return 3*(r+n)/4-n},t.toByteArray=function(e){var t,r,i=l(e),a=i[0],s=i[1],c=new o(function(e,t,r){return 3*(t+r)/4-r}(0,a,s)),p=0,u=s>0?a-4:a;for(r=0;r<u;r+=4)t=n[e.charCodeAt(r)]<<18|n[e.charCodeAt(r+1)]<<12|n[e.charCodeAt(r+2)]<<6|n[e.charCodeAt(r+3)],c[p++]=t>>16&255,c[p++]=t>>8&255,c[p++]=255&t;2===s&&(t=n[e.charCodeAt(r)]<<2|n[e.charCodeAt(r+1)]>>4,c[p++]=255&t);1===s&&(t=n[e.charCodeAt(r)]<<10|n[e.charCodeAt(r+1)]<<4|n[e.charCodeAt(r+2)]>>2,c[p++]=t>>8&255,c[p++]=255&t);return c},t.fromByteArray=function(e){for(var t,n=e.length,o=n%3,i=[],a=16383,s=0,l=n-o;s<l;s+=a)i.push(c(e,s,s+a>l?l:s+a));1===o?(t=e[n-1],i.push(r[t>>2]+r[t<<4&63]+"==")):2===o&&(t=(e[n-2]<<8)+e[n-1],i.push(r[t>>10]+r[t>>4&63]+r[t<<2&63]+"="));return i.join("")};for(var r=[],n=[],o="undefined"!=typeof Uint8Array?Uint8Array:Array,i="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",a=0,s=i.length;a<s;++a)r[a]=i[a],n[i.charCodeAt(a)]=a;function l(e){var t=e.length;if(t%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var r=e.indexOf("=");return-1===r&&(r=t),[r,r===t?0:4-r%4]}function c(e,t,n){for(var o,i,a=[],s=t;s<n;s+=3)o=(e[s]<<16&16711680)+(e[s+1]<<8&65280)+(255&e[s+2]),a.push(r[(i=o)>>18&63]+r[i>>12&63]+r[i>>6&63]+r[63&i]);return a.join("")}n["-".charCodeAt(0)]=62,n["_".charCodeAt(0)]=63},764:(e,t,r)=>{"use strict";const n=r(742),o=r(645),i="function"==typeof Symbol&&"function"==typeof Symbol.for?Symbol.for("nodejs.util.inspect.custom"):null;t.Buffer=l,t.SlowBuffer=function(e){+e!=e&&(e=0);return l.alloc(+e)},t.INSPECT_MAX_BYTES=50;const a=2147483647;function s(e){if(e>a)throw new RangeError('The value "'+e+'" is invalid for option "size"');const t=new Uint8Array(e);return Object.setPrototypeOf(t,l.prototype),t}function l(e,t,r){if("number"==typeof e){if("string"==typeof t)throw new TypeError('The "string" argument must be of type string. Received type number');return u(e)}return c(e,t,r)}function c(e,t,r){if("string"==typeof e)return function(e,t){"string"==typeof t&&""!==t||(t="utf8");if(!l.isEncoding(t))throw new TypeError("Unknown encoding: "+t);const r=0|m(e,t);let n=s(r);const o=n.write(e,t);o!==r&&(n=n.slice(0,o));return n}(e,t);if(ArrayBuffer.isView(e))return function(e){if(Y(e,Uint8Array)){const t=new Uint8Array(e);return h(t.buffer,t.byteOffset,t.byteLength)}return d(e)}(e);if(null==e)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e);if(Y(e,ArrayBuffer)||e&&Y(e.buffer,ArrayBuffer))return h(e,t,r);if("undefined"!=typeof SharedArrayBuffer&&(Y(e,SharedArrayBuffer)||e&&Y(e.buffer,SharedArrayBuffer)))return h(e,t,r);if("number"==typeof e)throw new TypeError('The "value" argument must not be of type number. Received type number');const n=e.valueOf&&e.valueOf();if(null!=n&&n!==e)return l.from(n,t,r);const o=function(e){if(l.isBuffer(e)){const t=0|f(e.length),r=s(t);return 0===r.length||e.copy(r,0,0,t),r}if(void 0!==e.length)return"number"!=typeof e.length||J(e.length)?s(0):d(e);if("Buffer"===e.type&&Array.isArray(e.data))return d(e.data)}(e);if(o)return o;if("undefined"!=typeof Symbol&&null!=Symbol.toPrimitive&&"function"==typeof e[Symbol.toPrimitive])return l.from(e[Symbol.toPrimitive]("string"),t,r);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e)}function p(e){if("number"!=typeof e)throw new TypeError('"size" argument must be of type number');if(e<0)throw new RangeError('The value "'+e+'" is invalid for option "size"')}function u(e){return p(e),s(e<0?0:0|f(e))}function d(e){const t=e.length<0?0:0|f(e.length),r=s(t);for(let n=0;n<t;n+=1)r[n]=255&e[n];return r}function h(e,t,r){if(t<0||e.byteLength<t)throw new RangeError('"offset" is outside of buffer bounds');if(e.byteLength<t+(r||0))throw new RangeError('"length" is outside of buffer bounds');let n;return n=void 0===t&&void 0===r?new Uint8Array(e):void 0===r?new Uint8Array(e,t):new Uint8Array(e,t,r),Object.setPrototypeOf(n,l.prototype),n}function f(e){if(e>=a)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+a.toString(16)+" bytes");return 0|e}function m(e,t){if(l.isBuffer(e))return e.length;if(ArrayBuffer.isView(e)||Y(e,ArrayBuffer))return e.byteLength;if("string"!=typeof e)throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof e);const r=e.length,n=arguments.length>2&&!0===arguments[2];if(!n&&0===r)return 0;let o=!1;for(;;)switch(t){case"ascii":case"latin1":case"binary":return r;case"utf8":case"utf-8":return V(e).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*r;case"hex":return r>>>1;case"base64":return G(e).length;default:if(o)return n?-1:V(e).length;t=(""+t).toLowerCase(),o=!0}}function y(e,t,r){let n=!1;if((void 0===t||t<0)&&(t=0),t>this.length)return"";if((void 0===r||r>this.length)&&(r=this.length),r<=0)return"";if((r>>>=0)<=(t>>>=0))return"";for(e||(e="utf8");;)switch(e){case"hex":return j(this,t,r);case"utf8":case"utf-8":return E(this,t,r);case"ascii":return O(this,t,r);case"latin1":case"binary":return C(this,t,r);case"base64":return S(this,t,r);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return T(this,t,r);default:if(n)throw new TypeError("Unknown encoding: "+e);e=(e+"").toLowerCase(),n=!0}}function g(e,t,r){const n=e[t];e[t]=e[r],e[r]=n}function v(e,t,r,n,o){if(0===e.length)return-1;if("string"==typeof r?(n=r,r=0):r>2147483647?r=2147483647:r<-2147483648&&(r=-2147483648),J(r=+r)&&(r=o?0:e.length-1),r<0&&(r=e.length+r),r>=e.length){if(o)return-1;r=e.length-1}else if(r<0){if(!o)return-1;r=0}if("string"==typeof t&&(t=l.from(t,n)),l.isBuffer(t))return 0===t.length?-1:b(e,t,r,n,o);if("number"==typeof t)return t&=255,"function"==typeof Uint8Array.prototype.indexOf?o?Uint8Array.prototype.indexOf.call(e,t,r):Uint8Array.prototype.lastIndexOf.call(e,t,r):b(e,[t],r,n,o);throw new TypeError("val must be string, number or Buffer")}function b(e,t,r,n,o){let i,a=1,s=e.length,l=t.length;if(void 0!==n&&("ucs2"===(n=String(n).toLowerCase())||"ucs-2"===n||"utf16le"===n||"utf-16le"===n)){if(e.length<2||t.length<2)return-1;a=2,s/=2,l/=2,r/=2}function c(e,t){return 1===a?e[t]:e.readUInt16BE(t*a)}if(o){let n=-1;for(i=r;i<s;i++)if(c(e,i)===c(t,-1===n?0:i-n)){if(-1===n&&(n=i),i-n+1===l)return n*a}else-1!==n&&(i-=i-n),n=-1}else for(r+l>s&&(r=s-l),i=r;i>=0;i--){let r=!0;for(let n=0;n<l;n++)if(c(e,i+n)!==c(t,n)){r=!1;break}if(r)return i}return-1}function x(e,t,r,n){r=Number(r)||0;const o=e.length-r;n?(n=Number(n))>o&&(n=o):n=o;const i=t.length;let a;for(n>i/2&&(n=i/2),a=0;a<n;++a){const n=parseInt(t.substr(2*a,2),16);if(J(n))return a;e[r+a]=n}return a}function w(e,t,r,n){return K(V(t,e.length-r),e,r,n)}function $(e,t,r,n){return K(function(e){const t=[];for(let r=0;r<e.length;++r)t.push(255&e.charCodeAt(r));return t}(t),e,r,n)}function A(e,t,r,n){return K(G(t),e,r,n)}function k(e,t,r,n){return K(function(e,t){let r,n,o;const i=[];for(let a=0;a<e.length&&!((t-=2)<0);++a)r=e.charCodeAt(a),n=r>>8,o=r%256,i.push(o),i.push(n);return i}(t,e.length-r),e,r,n)}function S(e,t,r){return 0===t&&r===e.length?n.fromByteArray(e):n.fromByteArray(e.slice(t,r))}function E(e,t,r){r=Math.min(e.length,r);const n=[];let o=t;for(;o<r;){const t=e[o];let i=null,a=t>239?4:t>223?3:t>191?2:1;if(o+a<=r){let r,n,s,l;switch(a){case 1:t<128&&(i=t);break;case 2:r=e[o+1],128==(192&r)&&(l=(31&t)<<6|63&r,l>127&&(i=l));break;case 3:r=e[o+1],n=e[o+2],128==(192&r)&&128==(192&n)&&(l=(15&t)<<12|(63&r)<<6|63&n,l>2047&&(l<55296||l>57343)&&(i=l));break;case 4:r=e[o+1],n=e[o+2],s=e[o+3],128==(192&r)&&128==(192&n)&&128==(192&s)&&(l=(15&t)<<18|(63&r)<<12|(63&n)<<6|63&s,l>65535&&l<1114112&&(i=l))}}null===i?(i=65533,a=1):i>65535&&(i-=65536,n.push(i>>>10&1023|55296),i=56320|1023&i),n.push(i),o+=a}return function(e){const t=e.length;if(t<=D)return String.fromCharCode.apply(String,e);let r="",n=0;for(;n<t;)r+=String.fromCharCode.apply(String,e.slice(n,n+=D));return r}(n)}t.kMaxLength=a,l.TYPED_ARRAY_SUPPORT=function(){try{const e=new Uint8Array(1),t={foo:function(){return 42}};return Object.setPrototypeOf(t,Uint8Array.prototype),Object.setPrototypeOf(e,t),42===e.foo()}catch(e){return!1}}(),l.TYPED_ARRAY_SUPPORT||"undefined"==typeof console||"function"!=typeof console.error||console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."),Object.defineProperty(l.prototype,"parent",{enumerable:!0,get:function(){if(l.isBuffer(this))return this.buffer}}),Object.defineProperty(l.prototype,"offset",{enumerable:!0,get:function(){if(l.isBuffer(this))return this.byteOffset}}),l.poolSize=8192,l.from=function(e,t,r){return c(e,t,r)},Object.setPrototypeOf(l.prototype,Uint8Array.prototype),Object.setPrototypeOf(l,Uint8Array),l.alloc=function(e,t,r){return function(e,t,r){return p(e),e<=0?s(e):void 0!==t?"string"==typeof r?s(e).fill(t,r):s(e).fill(t):s(e)}(e,t,r)},l.allocUnsafe=function(e){return u(e)},l.allocUnsafeSlow=function(e){return u(e)},l.isBuffer=function(e){return null!=e&&!0===e._isBuffer&&e!==l.prototype},l.compare=function(e,t){if(Y(e,Uint8Array)&&(e=l.from(e,e.offset,e.byteLength)),Y(t,Uint8Array)&&(t=l.from(t,t.offset,t.byteLength)),!l.isBuffer(e)||!l.isBuffer(t))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(e===t)return 0;let r=e.length,n=t.length;for(let o=0,i=Math.min(r,n);o<i;++o)if(e[o]!==t[o]){r=e[o],n=t[o];break}return r<n?-1:n<r?1:0},l.isEncoding=function(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},l.concat=function(e,t){if(!Array.isArray(e))throw new TypeError('"list" argument must be an Array of Buffers');if(0===e.length)return l.alloc(0);let r;if(void 0===t)for(t=0,r=0;r<e.length;++r)t+=e[r].length;const n=l.allocUnsafe(t);let o=0;for(r=0;r<e.length;++r){let t=e[r];if(Y(t,Uint8Array))o+t.length>n.length?(l.isBuffer(t)||(t=l.from(t)),t.copy(n,o)):Uint8Array.prototype.set.call(n,t,o);else{if(!l.isBuffer(t))throw new TypeError('"list" argument must be an Array of Buffers');t.copy(n,o)}o+=t.length}return n},l.byteLength=m,l.prototype._isBuffer=!0,l.prototype.swap16=function(){const e=this.length;if(e%2!=0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(let t=0;t<e;t+=2)g(this,t,t+1);return this},l.prototype.swap32=function(){const e=this.length;if(e%4!=0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(let t=0;t<e;t+=4)g(this,t,t+3),g(this,t+1,t+2);return this},l.prototype.swap64=function(){const e=this.length;if(e%8!=0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(let t=0;t<e;t+=8)g(this,t,t+7),g(this,t+1,t+6),g(this,t+2,t+5),g(this,t+3,t+4);return this},l.prototype.toString=function(){const e=this.length;return 0===e?"":0===arguments.length?E(this,0,e):y.apply(this,arguments)},l.prototype.toLocaleString=l.prototype.toString,l.prototype.equals=function(e){if(!l.isBuffer(e))throw new TypeError("Argument must be a Buffer");return this===e||0===l.compare(this,e)},l.prototype.inspect=function(){let e="";const r=t.INSPECT_MAX_BYTES;return e=this.toString("hex",0,r).replace(/(.{2})/g,"$1 ").trim(),this.length>r&&(e+=" ... "),"<Buffer "+e+">"},i&&(l.prototype[i]=l.prototype.inspect),l.prototype.compare=function(e,t,r,n,o){if(Y(e,Uint8Array)&&(e=l.from(e,e.offset,e.byteLength)),!l.isBuffer(e))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof e);if(void 0===t&&(t=0),void 0===r&&(r=e?e.length:0),void 0===n&&(n=0),void 0===o&&(o=this.length),t<0||r>e.length||n<0||o>this.length)throw new RangeError("out of range index");if(n>=o&&t>=r)return 0;if(n>=o)return-1;if(t>=r)return 1;if(this===e)return 0;let i=(o>>>=0)-(n>>>=0),a=(r>>>=0)-(t>>>=0);const s=Math.min(i,a),c=this.slice(n,o),p=e.slice(t,r);for(let e=0;e<s;++e)if(c[e]!==p[e]){i=c[e],a=p[e];break}return i<a?-1:a<i?1:0},l.prototype.includes=function(e,t,r){return-1!==this.indexOf(e,t,r)},l.prototype.indexOf=function(e,t,r){return v(this,e,t,r,!0)},l.prototype.lastIndexOf=function(e,t,r){return v(this,e,t,r,!1)},l.prototype.write=function(e,t,r,n){if(void 0===t)n="utf8",r=this.length,t=0;else if(void 0===r&&"string"==typeof t)n=t,r=this.length,t=0;else{if(!isFinite(t))throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");t>>>=0,isFinite(r)?(r>>>=0,void 0===n&&(n="utf8")):(n=r,r=void 0)}const o=this.length-t;if((void 0===r||r>o)&&(r=o),e.length>0&&(r<0||t<0)||t>this.length)throw new RangeError("Attempt to write outside buffer bounds");n||(n="utf8");let i=!1;for(;;)switch(n){case"hex":return x(this,e,t,r);case"utf8":case"utf-8":return w(this,e,t,r);case"ascii":case"latin1":case"binary":return $(this,e,t,r);case"base64":return A(this,e,t,r);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return k(this,e,t,r);default:if(i)throw new TypeError("Unknown encoding: "+n);n=(""+n).toLowerCase(),i=!0}},l.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};const D=4096;function O(e,t,r){let n="";r=Math.min(e.length,r);for(let o=t;o<r;++o)n+=String.fromCharCode(127&e[o]);return n}function C(e,t,r){let n="";r=Math.min(e.length,r);for(let o=t;o<r;++o)n+=String.fromCharCode(e[o]);return n}function j(e,t,r){const n=e.length;(!t||t<0)&&(t=0),(!r||r<0||r>n)&&(r=n);let o="";for(let n=t;n<r;++n)o+=Z[e[n]];return o}function T(e,t,r){const n=e.slice(t,r);let o="";for(let e=0;e<n.length-1;e+=2)o+=String.fromCharCode(n[e]+256*n[e+1]);return o}function _(e,t,r){if(e%1!=0||e<0)throw new RangeError("offset is not uint");if(e+t>r)throw new RangeError("Trying to access beyond buffer length")}function F(e,t,r,n,o,i){if(!l.isBuffer(e))throw new TypeError('"buffer" argument must be a Buffer instance');if(t>o||t<i)throw new RangeError('"value" argument is out of bounds');if(r+n>e.length)throw new RangeError("Index out of range")}function B(e,t,r,n,o){q(t,n,o,e,r,7);let i=Number(t&BigInt(4294967295));e[r++]=i,i>>=8,e[r++]=i,i>>=8,e[r++]=i,i>>=8,e[r++]=i;let a=Number(t>>BigInt(32)&BigInt(4294967295));return e[r++]=a,a>>=8,e[r++]=a,a>>=8,e[r++]=a,a>>=8,e[r++]=a,r}function I(e,t,r,n,o){q(t,n,o,e,r,7);let i=Number(t&BigInt(4294967295));e[r+7]=i,i>>=8,e[r+6]=i,i>>=8,e[r+5]=i,i>>=8,e[r+4]=i;let a=Number(t>>BigInt(32)&BigInt(4294967295));return e[r+3]=a,a>>=8,e[r+2]=a,a>>=8,e[r+1]=a,a>>=8,e[r]=a,r+8}function P(e,t,r,n,o,i){if(r+n>e.length)throw new RangeError("Index out of range");if(r<0)throw new RangeError("Index out of range")}function R(e,t,r,n,i){return t=+t,r>>>=0,i||P(e,0,r,4),o.write(e,t,r,n,23,4),r+4}function U(e,t,r,n,i){return t=+t,r>>>=0,i||P(e,0,r,8),o.write(e,t,r,n,52,8),r+8}l.prototype.slice=function(e,t){const r=this.length;(e=~~e)<0?(e+=r)<0&&(e=0):e>r&&(e=r),(t=void 0===t?r:~~t)<0?(t+=r)<0&&(t=0):t>r&&(t=r),t<e&&(t=e);const n=this.subarray(e,t);return Object.setPrototypeOf(n,l.prototype),n},l.prototype.readUintLE=l.prototype.readUIntLE=function(e,t,r){e>>>=0,t>>>=0,r||_(e,t,this.length);let n=this[e],o=1,i=0;for(;++i<t&&(o*=256);)n+=this[e+i]*o;return n},l.prototype.readUintBE=l.prototype.readUIntBE=function(e,t,r){e>>>=0,t>>>=0,r||_(e,t,this.length);let n=this[e+--t],o=1;for(;t>0&&(o*=256);)n+=this[e+--t]*o;return n},l.prototype.readUint8=l.prototype.readUInt8=function(e,t){return e>>>=0,t||_(e,1,this.length),this[e]},l.prototype.readUint16LE=l.prototype.readUInt16LE=function(e,t){return e>>>=0,t||_(e,2,this.length),this[e]|this[e+1]<<8},l.prototype.readUint16BE=l.prototype.readUInt16BE=function(e,t){return e>>>=0,t||_(e,2,this.length),this[e]<<8|this[e+1]},l.prototype.readUint32LE=l.prototype.readUInt32LE=function(e,t){return e>>>=0,t||_(e,4,this.length),(this[e]|this[e+1]<<8|this[e+2]<<16)+16777216*this[e+3]},l.prototype.readUint32BE=l.prototype.readUInt32BE=function(e,t){return e>>>=0,t||_(e,4,this.length),16777216*this[e]+(this[e+1]<<16|this[e+2]<<8|this[e+3])},l.prototype.readBigUInt64LE=Q((function(e){M(e>>>=0,"offset");const t=this[e],r=this[e+7];void 0!==t&&void 0!==r||H(e,this.length-8);const n=t+256*this[++e]+65536*this[++e]+this[++e]*2**24,o=this[++e]+256*this[++e]+65536*this[++e]+r*2**24;return BigInt(n)+(BigInt(o)<<BigInt(32))})),l.prototype.readBigUInt64BE=Q((function(e){M(e>>>=0,"offset");const t=this[e],r=this[e+7];void 0!==t&&void 0!==r||H(e,this.length-8);const n=t*2**24+65536*this[++e]+256*this[++e]+this[++e],o=this[++e]*2**24+65536*this[++e]+256*this[++e]+r;return(BigInt(n)<<BigInt(32))+BigInt(o)})),l.prototype.readIntLE=function(e,t,r){e>>>=0,t>>>=0,r||_(e,t,this.length);let n=this[e],o=1,i=0;for(;++i<t&&(o*=256);)n+=this[e+i]*o;return o*=128,n>=o&&(n-=Math.pow(2,8*t)),n},l.prototype.readIntBE=function(e,t,r){e>>>=0,t>>>=0,r||_(e,t,this.length);let n=t,o=1,i=this[e+--n];for(;n>0&&(o*=256);)i+=this[e+--n]*o;return o*=128,i>=o&&(i-=Math.pow(2,8*t)),i},l.prototype.readInt8=function(e,t){return e>>>=0,t||_(e,1,this.length),128&this[e]?-1*(255-this[e]+1):this[e]},l.prototype.readInt16LE=function(e,t){e>>>=0,t||_(e,2,this.length);const r=this[e]|this[e+1]<<8;return 32768&r?4294901760|r:r},l.prototype.readInt16BE=function(e,t){e>>>=0,t||_(e,2,this.length);const r=this[e+1]|this[e]<<8;return 32768&r?4294901760|r:r},l.prototype.readInt32LE=function(e,t){return e>>>=0,t||_(e,4,this.length),this[e]|this[e+1]<<8|this[e+2]<<16|this[e+3]<<24},l.prototype.readInt32BE=function(e,t){return e>>>=0,t||_(e,4,this.length),this[e]<<24|this[e+1]<<16|this[e+2]<<8|this[e+3]},l.prototype.readBigInt64LE=Q((function(e){M(e>>>=0,"offset");const t=this[e],r=this[e+7];void 0!==t&&void 0!==r||H(e,this.length-8);const n=this[e+4]+256*this[e+5]+65536*this[e+6]+(r<<24);return(BigInt(n)<<BigInt(32))+BigInt(t+256*this[++e]+65536*this[++e]+this[++e]*2**24)})),l.prototype.readBigInt64BE=Q((function(e){M(e>>>=0,"offset");const t=this[e],r=this[e+7];void 0!==t&&void 0!==r||H(e,this.length-8);const n=(t<<24)+65536*this[++e]+256*this[++e]+this[++e];return(BigInt(n)<<BigInt(32))+BigInt(this[++e]*2**24+65536*this[++e]+256*this[++e]+r)})),l.prototype.readFloatLE=function(e,t){return e>>>=0,t||_(e,4,this.length),o.read(this,e,!0,23,4)},l.prototype.readFloatBE=function(e,t){return e>>>=0,t||_(e,4,this.length),o.read(this,e,!1,23,4)},l.prototype.readDoubleLE=function(e,t){return e>>>=0,t||_(e,8,this.length),o.read(this,e,!0,52,8)},l.prototype.readDoubleBE=function(e,t){return e>>>=0,t||_(e,8,this.length),o.read(this,e,!1,52,8)},l.prototype.writeUintLE=l.prototype.writeUIntLE=function(e,t,r,n){if(e=+e,t>>>=0,r>>>=0,!n){F(this,e,t,r,Math.pow(2,8*r)-1,0)}let o=1,i=0;for(this[t]=255&e;++i<r&&(o*=256);)this[t+i]=e/o&255;return t+r},l.prototype.writeUintBE=l.prototype.writeUIntBE=function(e,t,r,n){if(e=+e,t>>>=0,r>>>=0,!n){F(this,e,t,r,Math.pow(2,8*r)-1,0)}let o=r-1,i=1;for(this[t+o]=255&e;--o>=0&&(i*=256);)this[t+o]=e/i&255;return t+r},l.prototype.writeUint8=l.prototype.writeUInt8=function(e,t,r){return e=+e,t>>>=0,r||F(this,e,t,1,255,0),this[t]=255&e,t+1},l.prototype.writeUint16LE=l.prototype.writeUInt16LE=function(e,t,r){return e=+e,t>>>=0,r||F(this,e,t,2,65535,0),this[t]=255&e,this[t+1]=e>>>8,t+2},l.prototype.writeUint16BE=l.prototype.writeUInt16BE=function(e,t,r){return e=+e,t>>>=0,r||F(this,e,t,2,65535,0),this[t]=e>>>8,this[t+1]=255&e,t+2},l.prototype.writeUint32LE=l.prototype.writeUInt32LE=function(e,t,r){return e=+e,t>>>=0,r||F(this,e,t,4,4294967295,0),this[t+3]=e>>>24,this[t+2]=e>>>16,this[t+1]=e>>>8,this[t]=255&e,t+4},l.prototype.writeUint32BE=l.prototype.writeUInt32BE=function(e,t,r){return e=+e,t>>>=0,r||F(this,e,t,4,4294967295,0),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=255&e,t+4},l.prototype.writeBigUInt64LE=Q((function(e,t=0){return B(this,e,t,BigInt(0),BigInt("0xffffffffffffffff"))})),l.prototype.writeBigUInt64BE=Q((function(e,t=0){return I(this,e,t,BigInt(0),BigInt("0xffffffffffffffff"))})),l.prototype.writeIntLE=function(e,t,r,n){if(e=+e,t>>>=0,!n){const n=Math.pow(2,8*r-1);F(this,e,t,r,n-1,-n)}let o=0,i=1,a=0;for(this[t]=255&e;++o<r&&(i*=256);)e<0&&0===a&&0!==this[t+o-1]&&(a=1),this[t+o]=(e/i>>0)-a&255;return t+r},l.prototype.writeIntBE=function(e,t,r,n){if(e=+e,t>>>=0,!n){const n=Math.pow(2,8*r-1);F(this,e,t,r,n-1,-n)}let o=r-1,i=1,a=0;for(this[t+o]=255&e;--o>=0&&(i*=256);)e<0&&0===a&&0!==this[t+o+1]&&(a=1),this[t+o]=(e/i>>0)-a&255;return t+r},l.prototype.writeInt8=function(e,t,r){return e=+e,t>>>=0,r||F(this,e,t,1,127,-128),e<0&&(e=255+e+1),this[t]=255&e,t+1},l.prototype.writeInt16LE=function(e,t,r){return e=+e,t>>>=0,r||F(this,e,t,2,32767,-32768),this[t]=255&e,this[t+1]=e>>>8,t+2},l.prototype.writeInt16BE=function(e,t,r){return e=+e,t>>>=0,r||F(this,e,t,2,32767,-32768),this[t]=e>>>8,this[t+1]=255&e,t+2},l.prototype.writeInt32LE=function(e,t,r){return e=+e,t>>>=0,r||F(this,e,t,4,2147483647,-2147483648),this[t]=255&e,this[t+1]=e>>>8,this[t+2]=e>>>16,this[t+3]=e>>>24,t+4},l.prototype.writeInt32BE=function(e,t,r){return e=+e,t>>>=0,r||F(this,e,t,4,2147483647,-2147483648),e<0&&(e=4294967295+e+1),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=255&e,t+4},l.prototype.writeBigInt64LE=Q((function(e,t=0){return B(this,e,t,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))})),l.prototype.writeBigInt64BE=Q((function(e,t=0){return I(this,e,t,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))})),l.prototype.writeFloatLE=function(e,t,r){return R(this,e,t,!0,r)},l.prototype.writeFloatBE=function(e,t,r){return R(this,e,t,!1,r)},l.prototype.writeDoubleLE=function(e,t,r){return U(this,e,t,!0,r)},l.prototype.writeDoubleBE=function(e,t,r){return U(this,e,t,!1,r)},l.prototype.copy=function(e,t,r,n){if(!l.isBuffer(e))throw new TypeError("argument should be a Buffer");if(r||(r=0),n||0===n||(n=this.length),t>=e.length&&(t=e.length),t||(t=0),n>0&&n<r&&(n=r),n===r)return 0;if(0===e.length||0===this.length)return 0;if(t<0)throw new RangeError("targetStart out of bounds");if(r<0||r>=this.length)throw new RangeError("Index out of range");if(n<0)throw new RangeError("sourceEnd out of bounds");n>this.length&&(n=this.length),e.length-t<n-r&&(n=e.length-t+r);const o=n-r;return this===e&&"function"==typeof Uint8Array.prototype.copyWithin?this.copyWithin(t,r,n):Uint8Array.prototype.set.call(e,this.subarray(r,n),t),o},l.prototype.fill=function(e,t,r,n){if("string"==typeof e){if("string"==typeof t?(n=t,t=0,r=this.length):"string"==typeof r&&(n=r,r=this.length),void 0!==n&&"string"!=typeof n)throw new TypeError("encoding must be a string");if("string"==typeof n&&!l.isEncoding(n))throw new TypeError("Unknown encoding: "+n);if(1===e.length){const t=e.charCodeAt(0);("utf8"===n&&t<128||"latin1"===n)&&(e=t)}}else"number"==typeof e?e&=255:"boolean"==typeof e&&(e=Number(e));if(t<0||this.length<t||this.length<r)throw new RangeError("Out of range index");if(r<=t)return this;let o;if(t>>>=0,r=void 0===r?this.length:r>>>0,e||(e=0),"number"==typeof e)for(o=t;o<r;++o)this[o]=e;else{const i=l.isBuffer(e)?e:l.from(e,n),a=i.length;if(0===a)throw new TypeError('The value "'+e+'" is invalid for argument "value"');for(o=0;o<r-t;++o)this[o+t]=i[o%a]}return this};const L={};function N(e,t,r){L[e]=class extends r{constructor(){super(),Object.defineProperty(this,"message",{value:t.apply(this,arguments),writable:!0,configurable:!0}),this.name=`${this.name} [${e}]`,this.stack,delete this.name}get code(){return e}set code(e){Object.defineProperty(this,"code",{configurable:!0,enumerable:!0,value:e,writable:!0})}toString(){return`${this.name} [${e}]: ${this.message}`}}}function z(e){let t="",r=e.length;const n="-"===e[0]?1:0;for(;r>=n+4;r-=3)t=`_${e.slice(r-3,r)}${t}`;return`${e.slice(0,r)}${t}`}function q(e,t,r,n,o,i){if(e>r||e<t){const n="bigint"==typeof t?"n":"";let o;throw o=i>3?0===t||t===BigInt(0)?`>= 0${n} and < 2${n} ** ${8*(i+1)}${n}`:`>= -(2${n} ** ${8*(i+1)-1}${n}) and < 2 ** ${8*(i+1)-1}${n}`:`>= ${t}${n} and <= ${r}${n}`,new L.ERR_OUT_OF_RANGE("value",o,e)}!function(e,t,r){M(t,"offset"),void 0!==e[t]&&void 0!==e[t+r]||H(t,e.length-(r+1))}(n,o,i)}function M(e,t){if("number"!=typeof e)throw new L.ERR_INVALID_ARG_TYPE(t,"number",e)}function H(e,t,r){if(Math.floor(e)!==e)throw M(e,r),new L.ERR_OUT_OF_RANGE(r||"offset","an integer",e);if(t<0)throw new L.ERR_BUFFER_OUT_OF_BOUNDS;throw new L.ERR_OUT_OF_RANGE(r||"offset",`>= ${r?1:0} and <= ${t}`,e)}N("ERR_BUFFER_OUT_OF_BOUNDS",(function(e){return e?`${e} is outside of buffer bounds`:"Attempt to access memory outside buffer bounds"}),RangeError),N("ERR_INVALID_ARG_TYPE",(function(e,t){return`The "${e}" argument must be of type number. Received type ${typeof t}`}),TypeError),N("ERR_OUT_OF_RANGE",(function(e,t,r){let n=`The value of "${e}" is out of range.`,o=r;return Number.isInteger(r)&&Math.abs(r)>2**32?o=z(String(r)):"bigint"==typeof r&&(o=String(r),(r>BigInt(2)**BigInt(32)||r<-(BigInt(2)**BigInt(32)))&&(o=z(o)),o+="n"),n+=` It must be ${t}. Received ${o}`,n}),RangeError);const W=/[^+/0-9A-Za-z-_]/g;function V(e,t){let r;t=t||1/0;const n=e.length;let o=null;const i=[];for(let a=0;a<n;++a){if(r=e.charCodeAt(a),r>55295&&r<57344){if(!o){if(r>56319){(t-=3)>-1&&i.push(239,191,189);continue}if(a+1===n){(t-=3)>-1&&i.push(239,191,189);continue}o=r;continue}if(r<56320){(t-=3)>-1&&i.push(239,191,189),o=r;continue}r=65536+(o-55296<<10|r-56320)}else o&&(t-=3)>-1&&i.push(239,191,189);if(o=null,r<128){if((t-=1)<0)break;i.push(r)}else if(r<2048){if((t-=2)<0)break;i.push(r>>6|192,63&r|128)}else if(r<65536){if((t-=3)<0)break;i.push(r>>12|224,r>>6&63|128,63&r|128)}else{if(!(r<1114112))throw new Error("Invalid code point");if((t-=4)<0)break;i.push(r>>18|240,r>>12&63|128,r>>6&63|128,63&r|128)}}return i}function G(e){return n.toByteArray(function(e){if((e=(e=e.split("=")[0]).trim().replace(W,"")).length<2)return"";for(;e.length%4!=0;)e+="=";return e}(e))}function K(e,t,r,n){let o;for(o=0;o<n&&!(o+r>=t.length||o>=e.length);++o)t[o+r]=e[o];return o}function Y(e,t){return e instanceof t||null!=e&&null!=e.constructor&&null!=e.constructor.name&&e.constructor.name===t.name}function J(e){return e!=e}const Z=function(){const e="0123456789abcdef",t=new Array(256);for(let r=0;r<16;++r){const n=16*r;for(let o=0;o<16;++o)t[n+o]=e[r]+e[o]}return t}();function Q(e){return"undefined"==typeof BigInt?X:e}function X(){throw new Error("BigInt not supported")}},645:(e,t)=>{t.read=function(e,t,r,n,o){var i,a,s=8*o-n-1,l=(1<<s)-1,c=l>>1,p=-7,u=r?o-1:0,d=r?-1:1,h=e[t+u];for(u+=d,i=h&(1<<-p)-1,h>>=-p,p+=s;p>0;i=256*i+e[t+u],u+=d,p-=8);for(a=i&(1<<-p)-1,i>>=-p,p+=n;p>0;a=256*a+e[t+u],u+=d,p-=8);if(0===i)i=1-c;else{if(i===l)return a?NaN:1/0*(h?-1:1);a+=Math.pow(2,n),i-=c}return(h?-1:1)*a*Math.pow(2,i-n)},t.write=function(e,t,r,n,o,i){var a,s,l,c=8*i-o-1,p=(1<<c)-1,u=p>>1,d=23===o?Math.pow(2,-24)-Math.pow(2,-77):0,h=n?0:i-1,f=n?1:-1,m=t<0||0===t&&1/t<0?1:0;for(t=Math.abs(t),isNaN(t)||t===1/0?(s=isNaN(t)?1:0,a=p):(a=Math.floor(Math.log(t)/Math.LN2),t*(l=Math.pow(2,-a))<1&&(a--,l*=2),(t+=a+u>=1?d/l:d*Math.pow(2,1-u))*l>=2&&(a++,l/=2),a+u>=p?(s=0,a=p):a+u>=1?(s=(t*l-1)*Math.pow(2,o),a+=u):(s=t*Math.pow(2,u-1)*Math.pow(2,o),a=0));o>=8;e[r+h]=255&s,h+=f,s/=256,o-=8);for(a=a<<o|s,c+=o;c>0;e[r+h]=255&a,h+=f,a/=256,c-=8);e[r+h-f]|=128*m}},84:function(e){e.exports=function(){"use strict";function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function t(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}function r(e,t){if(e){if("string"==typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}}function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function o(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(n)return(n=n.call(e)).next.bind(n);if(Array.isArray(e)||(n=r(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var o=0;return function(){return o>=e.length?{done:!0}:{done:!1,value:e[o++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i={exports:{}};function a(){return{baseUrl:null,breaks:!1,extensions:null,gfm:!0,headerIds:!0,headerPrefix:"",highlight:null,langPrefix:"language-",mangle:!0,pedantic:!1,renderer:null,sanitize:!1,sanitizer:null,silent:!1,smartLists:!1,smartypants:!1,tokenizer:null,walkTokens:null,xhtml:!1}}function s(e){i.exports.defaults=e}i.exports={defaults:a(),getDefaults:a,changeDefaults:s};var l=/[&<>"']/,c=/[&<>"']/g,p=/[<>"']|&(?!#?\w+;)/,u=/[<>"']|&(?!#?\w+;)/g,d={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},h=function(e){return d[e]};function f(e,t){if(t){if(l.test(e))return e.replace(c,h)}else if(p.test(e))return e.replace(u,h);return e}var m=/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/gi;function y(e){return e.replace(m,(function(e,t){return"colon"===(t=t.toLowerCase())?":":"#"===t.charAt(0)?"x"===t.charAt(1)?String.fromCharCode(parseInt(t.substring(2),16)):String.fromCharCode(+t.substring(1)):""}))}var g=/(^|[^\[])\^/g;function v(e,t){e=e.source||e,t=t||"";var r={replace:function(t,n){return n=(n=n.source||n).replace(g,"$1"),e=e.replace(t,n),r},getRegex:function(){return new RegExp(e,t)}};return r}var b=/[^\w:]/g,x=/^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;function w(e,t,r){if(e){var n;try{n=decodeURIComponent(y(r)).replace(b,"").toLowerCase()}catch(e){return null}if(0===n.indexOf("javascript:")||0===n.indexOf("vbscript:")||0===n.indexOf("data:"))return null}t&&!x.test(r)&&(r=E(t,r));try{r=encodeURI(r).replace(/%25/g,"%")}catch(e){return null}return r}var $={},A=/^[^:]+:\/*[^/]*$/,k=/^([^:]+:)[\s\S]*$/,S=/^([^:]+:\/*[^/]*)[\s\S]*$/;function E(e,t){$[" "+e]||(A.test(e)?$[" "+e]=e+"/":$[" "+e]=C(e,"/",!0));var r=-1===(e=$[" "+e]).indexOf(":");return"//"===t.substring(0,2)?r?t:e.replace(k,"$1")+t:"/"===t.charAt(0)?r?t:e.replace(S,"$1")+t:e+t}function D(e){for(var t,r,n=1;n<arguments.length;n++)for(r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}function O(e,t){var r=e.replace(/\|/g,(function(e,t,r){for(var n=!1,o=t;--o>=0&&"\\"===r[o];)n=!n;return n?"|":" |"})).split(/ \|/),n=0;if(r[0].trim()||r.shift(),r[r.length-1].trim()||r.pop(),r.length>t)r.splice(t);else for(;r.length<t;)r.push("");for(;n<r.length;n++)r[n]=r[n].trim().replace(/\\\|/g,"|");return r}function C(e,t,r){var n=e.length;if(0===n)return"";for(var o=0;o<n;){var i=e.charAt(n-o-1);if(i!==t||r){if(i===t||!r)break;o++}else o++}return e.substr(0,n-o)}function j(e,t){if(-1===e.indexOf(t[1]))return-1;for(var r=e.length,n=0,o=0;o<r;o++)if("\\"===e[o])o++;else if(e[o]===t[0])n++;else if(e[o]===t[1]&&--n<0)return o;return-1}function T(e){e&&e.sanitize&&!e.silent&&console.warn("marked(): sanitize and sanitizer parameters are deprecated since version 0.7.0, should not be used and will be removed in the future. Read more here: https://marked.js.org/#/USING_ADVANCED.md#options")}function _(e,t){if(t<1)return"";for(var r="";t>1;)1&t&&(r+=e),t>>=1,e+=e;return r+e}var F={escape:f,unescape:y,edit:v,cleanUrl:w,resolveUrl:E,noopTest:{exec:function(){}},merge:D,splitCells:O,rtrim:C,findClosingBracket:j,checkSanitizeDeprecation:T,repeatString:_},B=i.exports.defaults,I=F.rtrim,P=F.splitCells,R=F.escape,U=F.findClosingBracket;function L(e,t,r,n){var o=t.href,i=t.title?R(t.title):null,a=e[1].replace(/\\([\[\]])/g,"$1");if("!"!==e[0].charAt(0)){n.state.inLink=!0;var s={type:"link",raw:r,href:o,title:i,text:a,tokens:n.inlineTokens(a,[])};return n.state.inLink=!1,s}return{type:"image",raw:r,href:o,title:i,text:R(a)}}function N(e,t){var r=e.match(/^(\s+)(?:```)/);if(null===r)return t;var n=r[1];return t.split("\n").map((function(e){var t=e.match(/^\s+/);return null===t?e:t[0].length>=n.length?e.slice(n.length):e})).join("\n")}var z=function(){function e(e){this.options=e||B}var t=e.prototype;return t.space=function(e){var t=this.rules.block.newline.exec(e);if(t)return t[0].length>1?{type:"space",raw:t[0]}:{raw:"\n"}},t.code=function(e){var t=this.rules.block.code.exec(e);if(t){var r=t[0].replace(/^ {1,4}/gm,"");return{type:"code",raw:t[0],codeBlockStyle:"indented",text:this.options.pedantic?r:I(r,"\n")}}},t.fences=function(e){var t=this.rules.block.fences.exec(e);if(t){var r=t[0],n=N(r,t[3]||"");return{type:"code",raw:r,lang:t[2]?t[2].trim():t[2],text:n}}},t.heading=function(e){var t=this.rules.block.heading.exec(e);if(t){var r=t[2].trim();if(/#$/.test(r)){var n=I(r,"#");this.options.pedantic?r=n.trim():n&&!/ $/.test(n)||(r=n.trim())}var o={type:"heading",raw:t[0],depth:t[1].length,text:r,tokens:[]};return this.lexer.inline(o.text,o.tokens),o}},t.hr=function(e){var t=this.rules.block.hr.exec(e);if(t)return{type:"hr",raw:t[0]}},t.blockquote=function(e){var t=this.rules.block.blockquote.exec(e);if(t){var r=t[0].replace(/^ *> ?/gm,"");return{type:"blockquote",raw:t[0],tokens:this.lexer.blockTokens(r,[]),text:r}}},t.list=function(e){var t=this.rules.block.list.exec(e);if(t){var r,n,o,i,a,s,l,c,p,u,d=t[1].trim(),h=d.length>1,f={type:"list",raw:"",ordered:h,start:h?+d.slice(0,-1):"",loose:!1,items:[]};d=h?"\\d{1,9}\\"+d.slice(-1):"\\"+d,this.options.pedantic&&(d=h?d:"[*+-]");for(var m=new RegExp("^( {0,3}"+d+")((?: [^\\n]*| *)(?:\\n[^\\n]*)*(?:\\n|$))");e&&!this.rules.block.hr.test(e)&&(t=m.exec(e));){p=t[2].split("\n"),this.options.pedantic?(i=2,u=p[0].trimLeft()):(i=t[2].search(/[^ ]/),i=t[1].length+(i>4?1:i),u=p[0].slice(i-t[1].length)),s=!1,r=t[0],!p[0]&&/^ *$/.test(p[1])&&(r=t[1]+p.slice(0,2).join("\n")+"\n",f.loose=!0,p=[]);var y=new RegExp("^ {0,"+Math.min(3,i-1)+"}(?:[*+-]|\\d{1,9}[.)])");for(a=1;a<p.length;a++){if(c=p[a],this.options.pedantic&&(c=c.replace(/^ {1,4}(?=( {4})*[^ ])/g,"  ")),y.test(c)){r=t[1]+p.slice(0,a).join("\n")+"\n";break}if(s){if(!(c.search(/[^ ]/)>=i)&&c.trim()){r=t[1]+p.slice(0,a).join("\n")+"\n";break}u+="\n"+c.slice(i)}else c.trim()||(s=!0),c.search(/[^ ]/)>=i?u+="\n"+c.slice(i):u+="\n"+c}f.loose||(l?f.loose=!0:/\n *\n *$/.test(r)&&(l=!0)),this.options.gfm&&(n=/^\[[ xX]\] /.exec(u))&&(o="[ ] "!==n[0],u=u.replace(/^\[[ xX]\] +/,"")),f.items.push({type:"list_item",raw:r,task:!!n,checked:o,loose:!1,text:u}),f.raw+=r,e=e.slice(r.length)}f.items[f.items.length-1].raw=r.trimRight(),f.items[f.items.length-1].text=u.trimRight(),f.raw=f.raw.trimRight();var g=f.items.length;for(a=0;a<g;a++)this.lexer.state.top=!1,f.items[a].tokens=this.lexer.blockTokens(f.items[a].text,[]),f.items[a].tokens.some((function(e){return"space"===e.type}))&&(f.loose=!0,f.items[a].loose=!0);return f}},t.html=function(e){var t=this.rules.block.html.exec(e);if(t){var r={type:"html",raw:t[0],pre:!this.options.sanitizer&&("pre"===t[1]||"script"===t[1]||"style"===t[1]),text:t[0]};return this.options.sanitize&&(r.type="paragraph",r.text=this.options.sanitizer?this.options.sanitizer(t[0]):R(t[0]),r.tokens=[],this.lexer.inline(r.text,r.tokens)),r}},t.def=function(e){var t=this.rules.block.def.exec(e);if(t)return t[3]&&(t[3]=t[3].substring(1,t[3].length-1)),{type:"def",tag:t[1].toLowerCase().replace(/\s+/g," "),raw:t[0],href:t[2],title:t[3]}},t.table=function(e){var t=this.rules.block.table.exec(e);if(t){var r={type:"table",header:P(t[1]).map((function(e){return{text:e}})),align:t[2].replace(/^ *|\| *$/g,"").split(/ *\| */),rows:t[3]?t[3].replace(/\n$/,"").split("\n"):[]};if(r.header.length===r.align.length){r.raw=t[0];var n,o,i,a,s=r.align.length;for(n=0;n<s;n++)/^ *-+: *$/.test(r.align[n])?r.align[n]="right":/^ *:-+: *$/.test(r.align[n])?r.align[n]="center":/^ *:-+ *$/.test(r.align[n])?r.align[n]="left":r.align[n]=null;for(s=r.rows.length,n=0;n<s;n++)r.rows[n]=P(r.rows[n],r.header.length).map((function(e){return{text:e}}));for(s=r.header.length,o=0;o<s;o++)r.header[o].tokens=[],this.lexer.inlineTokens(r.header[o].text,r.header[o].tokens);for(s=r.rows.length,o=0;o<s;o++)for(a=r.rows[o],i=0;i<a.length;i++)a[i].tokens=[],this.lexer.inlineTokens(a[i].text,a[i].tokens);return r}}},t.lheading=function(e){var t=this.rules.block.lheading.exec(e);if(t){var r={type:"heading",raw:t[0],depth:"="===t[2].charAt(0)?1:2,text:t[1],tokens:[]};return this.lexer.inline(r.text,r.tokens),r}},t.paragraph=function(e){var t=this.rules.block.paragraph.exec(e);if(t){var r={type:"paragraph",raw:t[0],text:"\n"===t[1].charAt(t[1].length-1)?t[1].slice(0,-1):t[1],tokens:[]};return this.lexer.inline(r.text,r.tokens),r}},t.text=function(e){var t=this.rules.block.text.exec(e);if(t){var r={type:"text",raw:t[0],text:t[0],tokens:[]};return this.lexer.inline(r.text,r.tokens),r}},t.escape=function(e){var t=this.rules.inline.escape.exec(e);if(t)return{type:"escape",raw:t[0],text:R(t[1])}},t.tag=function(e){var t=this.rules.inline.tag.exec(e);if(t)return!this.lexer.state.inLink&&/^<a /i.test(t[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&/^<\/a>/i.test(t[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&/^<(pre|code|kbd|script)(\s|>)/i.test(t[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&/^<\/(pre|code|kbd|script)(\s|>)/i.test(t[0])&&(this.lexer.state.inRawBlock=!1),{type:this.options.sanitize?"text":"html",raw:t[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,text:this.options.sanitize?this.options.sanitizer?this.options.sanitizer(t[0]):R(t[0]):t[0]}},t.link=function(e){var t=this.rules.inline.link.exec(e);if(t){var r=t[2].trim();if(!this.options.pedantic&&/^</.test(r)){if(!/>$/.test(r))return;var n=I(r.slice(0,-1),"\\");if((r.length-n.length)%2==0)return}else{var o=U(t[2],"()");if(o>-1){var i=(0===t[0].indexOf("!")?5:4)+t[1].length+o;t[2]=t[2].substring(0,o),t[0]=t[0].substring(0,i).trim(),t[3]=""}}var a=t[2],s="";if(this.options.pedantic){var l=/^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(a);l&&(a=l[1],s=l[3])}else s=t[3]?t[3].slice(1,-1):"";return a=a.trim(),/^</.test(a)&&(a=this.options.pedantic&&!/>$/.test(r)?a.slice(1):a.slice(1,-1)),L(t,{href:a?a.replace(this.rules.inline._escapes,"$1"):a,title:s?s.replace(this.rules.inline._escapes,"$1"):s},t[0],this.lexer)}},t.reflink=function(e,t){var r;if((r=this.rules.inline.reflink.exec(e))||(r=this.rules.inline.nolink.exec(e))){var n=(r[2]||r[1]).replace(/\s+/g," ");if(!(n=t[n.toLowerCase()])||!n.href){var o=r[0].charAt(0);return{type:"text",raw:o,text:o}}return L(r,n,r[0],this.lexer)}},t.emStrong=function(e,t,r){void 0===r&&(r="");var n=this.rules.inline.emStrong.lDelim.exec(e);if(n&&(!n[3]||!r.match(/(?:[0-9A-Za-z\xAA\xB2\xB3\xB5\xB9\xBA\xBC-\xBE\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05D0-\u05EA\u05EF-\u05F2\u0620-\u064A\u0660-\u0669\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07C0-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u08A0-\u08B4\u08B6-\u08C7\u0904-\u0939\u093D\u0950\u0958-\u0961\u0966-\u096F\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09E6-\u09F1\u09F4-\u09F9\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A66-\u0A6F\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AE6-\u0AEF\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B66-\u0B6F\u0B71-\u0B77\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0BE6-\u0BF2\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C66-\u0C6F\u0C78-\u0C7E\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CE6-\u0CEF\u0CF1\u0CF2\u0D04-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D58-\u0D61\u0D66-\u0D78\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DE6-\u0DEF\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F20-\u0F33\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F-\u1049\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u1090-\u1099\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1369-\u137C\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u17E0-\u17E9\u17F0-\u17F9\u1810-\u1819\u1820-\u1878\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19DA\u1A00-\u1A16\u1A20-\u1A54\u1A80-\u1A89\u1A90-\u1A99\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B50-\u1B59\u1B83-\u1BA0\u1BAE-\u1BE5\u1C00-\u1C23\u1C40-\u1C49\u1C4D-\u1C7D\u1C80-\u1C88\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2070\u2071\u2074-\u2079\u207F-\u2089\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2150-\u2189\u2460-\u249B\u24EA-\u24FF\u2776-\u2793\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2CFD\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u3192-\u3195\u31A0-\u31BF\u31F0-\u31FF\u3220-\u3229\u3248-\u324F\u3251-\u325F\u3280-\u3289\u32B1-\u32BF\u3400-\u4DBF\u4E00-\u9FFC\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7BF\uA7C2-\uA7CA\uA7F5-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA830-\uA835\uA840-\uA873\uA882-\uA8B3\uA8D0-\uA8D9\uA8F2-\uA8F7\uA8FB\uA8FD\uA8FE\uA900-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF-\uA9D9\uA9E0-\uA9E4\uA9E6-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA50-\uAA59\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB70-\uABE2\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD07-\uDD33\uDD40-\uDD78\uDD8A\uDD8B\uDE80-\uDE9C\uDEA0-\uDED0\uDEE1-\uDEFB\uDF00-\uDF23\uDF2D-\uDF4A\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCA0-\uDCA9\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC58-\uDC76\uDC79-\uDC9E\uDCA7-\uDCAF\uDCE0-\uDCF2\uDCF4\uDCF5\uDCFB-\uDD1B\uDD20-\uDD39\uDD80-\uDDB7\uDDBC-\uDDCF\uDDD2-\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE35\uDE40-\uDE48\uDE60-\uDE7E\uDE80-\uDE9F\uDEC0-\uDEC7\uDEC9-\uDEE4\uDEEB-\uDEEF\uDF00-\uDF35\uDF40-\uDF55\uDF58-\uDF72\uDF78-\uDF91\uDFA9-\uDFAF]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2\uDCFA-\uDD23\uDD30-\uDD39\uDE60-\uDE7E\uDE80-\uDEA9\uDEB0\uDEB1\uDF00-\uDF27\uDF30-\uDF45\uDF51-\uDF54\uDFB0-\uDFCB\uDFE0-\uDFF6]|\uD804[\uDC03-\uDC37\uDC52-\uDC6F\uDC83-\uDCAF\uDCD0-\uDCE8\uDCF0-\uDCF9\uDD03-\uDD26\uDD36-\uDD3F\uDD44\uDD47\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDD0-\uDDDA\uDDDC\uDDE1-\uDDF4\uDE00-\uDE11\uDE13-\uDE2B\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDEF0-\uDEF9\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC50-\uDC59\uDC5F-\uDC61\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDCD0-\uDCD9\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE50-\uDE59\uDE80-\uDEAA\uDEB8\uDEC0-\uDEC9\uDF00-\uDF1A\uDF30-\uDF3B]|\uD806[\uDC00-\uDC2B\uDCA0-\uDCF2\uDCFF-\uDD06\uDD09\uDD0C-\uDD13\uDD15\uDD16\uDD18-\uDD2F\uDD3F\uDD41\uDD50-\uDD59\uDDA0-\uDDA7\uDDAA-\uDDD0\uDDE1\uDDE3\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE89\uDE9D\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC50-\uDC6C\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46\uDD50-\uDD59\uDD60-\uDD65\uDD67\uDD68\uDD6A-\uDD89\uDD98\uDDA0-\uDDA9\uDEE0-\uDEF2\uDFB0\uDFC0-\uDFD4]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD822\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE60-\uDE69\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF50-\uDF59\uDF5B-\uDF61\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDE40-\uDE96\uDF00-\uDF4A\uDF50\uDF93-\uDF9F\uDFE0\uDFE1\uDFE3]|\uD821[\uDC00-\uDFF7]|\uD823[\uDC00-\uDCD5\uDD00-\uDD08]|\uD82C[\uDC00-\uDD1E\uDD50-\uDD52\uDD64-\uDD67\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD834[\uDEE0-\uDEF3\uDF60-\uDF78]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB\uDFCE-\uDFFF]|\uD838[\uDD00-\uDD2C\uDD37-\uDD3D\uDD40-\uDD49\uDD4E\uDEC0-\uDEEB\uDEF0-\uDEF9]|\uD83A[\uDC00-\uDCC4\uDCC7-\uDCCF\uDD00-\uDD43\uDD4B\uDD50-\uDD59]|\uD83B[\uDC71-\uDCAB\uDCAD-\uDCAF\uDCB1-\uDCB4\uDD01-\uDD2D\uDD2F-\uDD3D\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD83C[\uDD00-\uDD0C]|\uD83E[\uDFF0-\uDFF9]|\uD869[\uDC00-\uDEDD\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]|\uD884[\uDC00-\uDF4A])/))){var o=n[1]||n[2]||"";if(!o||o&&(""===r||this.rules.inline.punctuation.exec(r))){var i,a,s=n[0].length-1,l=s,c=0,p="*"===n[0][0]?this.rules.inline.emStrong.rDelimAst:this.rules.inline.emStrong.rDelimUnd;for(p.lastIndex=0,t=t.slice(-1*e.length+s);null!=(n=p.exec(t));)if(i=n[1]||n[2]||n[3]||n[4]||n[5]||n[6])if(a=i.length,n[3]||n[4])l+=a;else if(!((n[5]||n[6])&&s%3)||(s+a)%3){if(!((l-=a)>0)){if(a=Math.min(a,a+l+c),Math.min(s,a)%2){var u=e.slice(1,s+n.index+a);return{type:"em",raw:e.slice(0,s+n.index+a+1),text:u,tokens:this.lexer.inlineTokens(u,[])}}var d=e.slice(2,s+n.index+a-1);return{type:"strong",raw:e.slice(0,s+n.index+a+1),text:d,tokens:this.lexer.inlineTokens(d,[])}}}else c+=a}}},t.codespan=function(e){var t=this.rules.inline.code.exec(e);if(t){var r=t[2].replace(/\n/g," "),n=/[^ ]/.test(r),o=/^ /.test(r)&&/ $/.test(r);return n&&o&&(r=r.substring(1,r.length-1)),r=R(r,!0),{type:"codespan",raw:t[0],text:r}}},t.br=function(e){var t=this.rules.inline.br.exec(e);if(t)return{type:"br",raw:t[0]}},t.del=function(e){var t=this.rules.inline.del.exec(e);if(t)return{type:"del",raw:t[0],text:t[2],tokens:this.lexer.inlineTokens(t[2],[])}},t.autolink=function(e,t){var r,n,o=this.rules.inline.autolink.exec(e);if(o)return n="@"===o[2]?"mailto:"+(r=R(this.options.mangle?t(o[1]):o[1])):r=R(o[1]),{type:"link",raw:o[0],text:r,href:n,tokens:[{type:"text",raw:r,text:r}]}},t.url=function(e,t){var r;if(r=this.rules.inline.url.exec(e)){var n,o;if("@"===r[2])o="mailto:"+(n=R(this.options.mangle?t(r[0]):r[0]));else{var i;do{i=r[0],r[0]=this.rules.inline._backpedal.exec(r[0])[0]}while(i!==r[0]);n=R(r[0]),o="www."===r[1]?"http://"+n:n}return{type:"link",raw:r[0],text:n,href:o,tokens:[{type:"text",raw:n,text:n}]}}},t.inlineText=function(e,t){var r,n=this.rules.inline.text.exec(e);if(n)return r=this.lexer.state.inRawBlock?this.options.sanitize?this.options.sanitizer?this.options.sanitizer(n[0]):R(n[0]):n[0]:R(this.options.smartypants?t(n[0]):n[0]),{type:"text",raw:n[0],text:r}},e}(),q=F.noopTest,M=F.edit,H=F.merge,W={newline:/^(?: *(?:\n|$))+/,code:/^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/,fences:/^ {0,3}(`{3,}(?=[^`\n]*\n)|~{3,})([^\n]*)\n(?:|([\s\S]*?)\n)(?: {0,3}\1[~`]* *(?=\n|$)|$)/,hr:/^ {0,3}((?:- *){3,}|(?:_ *){3,}|(?:\* *){3,})(?:\n+|$)/,heading:/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,blockquote:/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,list:/^( {0,3}bull)( [^\n]+?)?(?:\n|$)/,html:"^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))",def:/^ {0,3}\[(label)\]: *\n? *<?([^\s>]+)>?(?:(?: +\n? *| *\n *)(title))? *(?:\n+|$)/,table:q,lheading:/^([^\n]+)\n {0,3}(=+|-+) *(?:\n+|$)/,_paragraph:/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html| +\n)[^\n]+)*)/,text:/^[^\n]+/,_label:/(?!\s*\])(?:\\[\[\]]|[^\[\]])+/,_title:/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/};W.def=M(W.def).replace("label",W._label).replace("title",W._title).getRegex(),W.bullet=/(?:[*+-]|\d{1,9}[.)])/,W.listItemStart=M(/^( *)(bull) */).replace("bull",W.bullet).getRegex(),W.list=M(W.list).replace(/bull/g,W.bullet).replace("hr","\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))").replace("def","\\n+(?="+W.def.source+")").getRegex(),W._tag="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",W._comment=/<!--(?!-?>)[\s\S]*?(?:-->|$)/,W.html=M(W.html,"i").replace("comment",W._comment).replace("tag",W._tag).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),W.paragraph=M(W._paragraph).replace("hr",W.hr).replace("heading"," {0,3}#{1,6} ").replace("|lheading","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",W._tag).getRegex(),W.blockquote=M(W.blockquote).replace("paragraph",W.paragraph).getRegex(),W.normal=H({},W),W.gfm=H({},W.normal,{table:"^ *([^\\n ].*\\|.*)\\n {0,3}(?:\\| *)?(:?-+:? *(?:\\| *:?-+:? *)*)(?:\\| *)?(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)"}),W.gfm.table=M(W.gfm.table).replace("hr",W.hr).replace("heading"," {0,3}#{1,6} ").replace("blockquote"," {0,3}>").replace("code"," {4}[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",W._tag).getRegex(),W.pedantic=H({},W.normal,{html:M("^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:\"[^\"]*\"|'[^']*'|\\s[^'\"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))").replace("comment",W._comment).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:q,paragraph:M(W.normal._paragraph).replace("hr",W.hr).replace("heading"," *#{1,6} *[^\n]").replace("lheading",W.lheading).replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").getRegex()});var V={escape:/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,autolink:/^<(scheme:[^\s\x00-\x1f<>]*|email)>/,url:q,tag:"^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",link:/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/,reflink:/^!?\[(label)\]\[(?!\s*\])((?:\\[\[\]]?|[^\[\]\\])+)\]/,nolink:/^!?\[(?!\s*\])((?:\[[^\[\]]*\]|\\[\[\]]|[^\[\]])*)\](?:\[\])?/,reflinkSearch:"reflink|nolink(?!\\()",emStrong:{lDelim:/^(?:\*+(?:([punct_])|[^\s*]))|^_+(?:([punct*])|([^\s_]))/,rDelimAst:/^[^_*]*?\_\_[^_*]*?\*[^_*]*?(?=\_\_)|[punct_](\*+)(?=[\s]|$)|[^punct*_\s](\*+)(?=[punct_\s]|$)|[punct_\s](\*+)(?=[^punct*_\s])|[\s](\*+)(?=[punct_])|[punct_](\*+)(?=[punct_])|[^punct*_\s](\*+)(?=[^punct*_\s])/,rDelimUnd:/^[^_*]*?\*\*[^_*]*?\_[^_*]*?(?=\*\*)|[punct*](\_+)(?=[\s]|$)|[^punct*_\s](\_+)(?=[punct*\s]|$)|[punct*\s](\_+)(?=[^punct*_\s])|[\s](\_+)(?=[punct*])|[punct*](\_+)(?=[punct*])/},code:/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,br:/^( {2,}|\\)\n(?!\s*$)/,del:q,text:/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,punctuation:/^([\spunctuation])/,_punctuation:"!\"#$%&'()+\\-.,/:;<=>?@\\[\\]`^{|}~"};V.punctuation=M(V.punctuation).replace(/punctuation/g,V._punctuation).getRegex(),V.blockSkip=/\[[^\]]*?\]\([^\)]*?\)|`[^`]*?`|<[^>]*?>/g,V.escapedEmSt=/\\\*|\\_/g,V._comment=M(W._comment).replace("(?:--\x3e|$)","--\x3e").getRegex(),V.emStrong.lDelim=M(V.emStrong.lDelim).replace(/punct/g,V._punctuation).getRegex(),V.emStrong.rDelimAst=M(V.emStrong.rDelimAst,"g").replace(/punct/g,V._punctuation).getRegex(),V.emStrong.rDelimUnd=M(V.emStrong.rDelimUnd,"g").replace(/punct/g,V._punctuation).getRegex(),V._escapes=/\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/g,V._scheme=/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/,V._email=/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/,V.autolink=M(V.autolink).replace("scheme",V._scheme).replace("email",V._email).getRegex(),V._attribute=/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/,V.tag=M(V.tag).replace("comment",V._comment).replace("attribute",V._attribute).getRegex(),V._label=/(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/,V._href=/<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/,V._title=/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/,V.link=M(V.link).replace("label",V._label).replace("href",V._href).replace("title",V._title).getRegex(),V.reflink=M(V.reflink).replace("label",V._label).getRegex(),V.reflinkSearch=M(V.reflinkSearch,"g").replace("reflink",V.reflink).replace("nolink",V.nolink).getRegex(),V.normal=H({},V),V.pedantic=H({},V.normal,{strong:{start:/^__|\*\*/,middle:/^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,endAst:/\*\*(?!\*)/g,endUnd:/__(?!_)/g},em:{start:/^_|\*/,middle:/^()\*(?=\S)([\s\S]*?\S)\*(?!\*)|^_(?=\S)([\s\S]*?\S)_(?!_)/,endAst:/\*(?!\*)/g,endUnd:/_(?!_)/g},link:M(/^!?\[(label)\]\((.*?)\)/).replace("label",V._label).getRegex(),reflink:M(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",V._label).getRegex()}),V.gfm=H({},V.normal,{escape:M(V.escape).replace("])","~|])").getRegex(),_extended_email:/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,url:/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,_backpedal:/(?:[^?!.,:;*_~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,text:/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/}),V.gfm.url=M(V.gfm.url,"i").replace("email",V.gfm._extended_email).getRegex(),V.breaks=H({},V.gfm,{br:M(V.br).replace("{2,}","*").getRegex(),text:M(V.gfm.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()});var G={block:W,inline:V},K=z,Y=i.exports.defaults,J=G.block,Z=G.inline,Q=F.repeatString;function X(e){return e.replace(/---/g,"—").replace(/--/g,"–").replace(/(^|[-\u2014/(\[{"\s])'/g,"$1‘").replace(/'/g,"’").replace(/(^|[-\u2014/(\[{\u2018\s])"/g,"$1“").replace(/"/g,"”").replace(/\.{3}/g,"…")}function ee(e){var t,r,n="",o=e.length;for(t=0;t<o;t++)r=e.charCodeAt(t),Math.random()>.5&&(r="x"+r.toString(16)),n+="&#"+r+";";return n}var te=function(){function e(e){this.tokens=[],this.tokens.links=Object.create(null),this.options=e||Y,this.options.tokenizer=this.options.tokenizer||new K,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};var t={block:J.normal,inline:Z.normal};this.options.pedantic?(t.block=J.pedantic,t.inline=Z.pedantic):this.options.gfm&&(t.block=J.gfm,this.options.breaks?t.inline=Z.breaks:t.inline=Z.gfm),this.tokenizer.rules=t}e.lex=function(t,r){return new e(r).lex(t)},e.lexInline=function(t,r){return new e(r).inlineTokens(t)};var r=e.prototype;return r.lex=function(e){var t;for(e=e.replace(/\r\n|\r/g,"\n").replace(/\t/g,"    "),this.blockTokens(e,this.tokens);t=this.inlineQueue.shift();)this.inlineTokens(t.src,t.tokens);return this.tokens},r.blockTokens=function(e,t){var r,n,o,i,a=this;for(void 0===t&&(t=[]),this.options.pedantic&&(e=e.replace(/^ +$/gm,""));e;)if(!(this.options.extensions&&this.options.extensions.block&&this.options.extensions.block.some((function(n){return!!(r=n.call({lexer:a},e,t))&&(e=e.substring(r.raw.length),t.push(r),!0)}))))if(r=this.tokenizer.space(e))e=e.substring(r.raw.length),r.type&&t.push(r);else if(r=this.tokenizer.code(e))e=e.substring(r.raw.length),!(n=t[t.length-1])||"paragraph"!==n.type&&"text"!==n.type?t.push(r):(n.raw+="\n"+r.raw,n.text+="\n"+r.text,this.inlineQueue[this.inlineQueue.length-1].src=n.text);else if(r=this.tokenizer.fences(e))e=e.substring(r.raw.length),t.push(r);else if(r=this.tokenizer.heading(e))e=e.substring(r.raw.length),t.push(r);else if(r=this.tokenizer.hr(e))e=e.substring(r.raw.length),t.push(r);else if(r=this.tokenizer.blockquote(e))e=e.substring(r.raw.length),t.push(r);else if(r=this.tokenizer.list(e))e=e.substring(r.raw.length),t.push(r);else if(r=this.tokenizer.html(e))e=e.substring(r.raw.length),t.push(r);else if(r=this.tokenizer.def(e))e=e.substring(r.raw.length),!(n=t[t.length-1])||"paragraph"!==n.type&&"text"!==n.type?this.tokens.links[r.tag]||(this.tokens.links[r.tag]={href:r.href,title:r.title}):(n.raw+="\n"+r.raw,n.text+="\n"+r.raw,this.inlineQueue[this.inlineQueue.length-1].src=n.text);else if(r=this.tokenizer.table(e))e=e.substring(r.raw.length),t.push(r);else if(r=this.tokenizer.lheading(e))e=e.substring(r.raw.length),t.push(r);else if(o=e,this.options.extensions&&this.options.extensions.startBlock&&function(){var t=1/0,r=e.slice(1),n=void 0;a.options.extensions.startBlock.forEach((function(e){"number"==typeof(n=e.call({lexer:this},r))&&n>=0&&(t=Math.min(t,n))})),t<1/0&&t>=0&&(o=e.substring(0,t+1))}(),this.state.top&&(r=this.tokenizer.paragraph(o)))n=t[t.length-1],i&&"paragraph"===n.type?(n.raw+="\n"+r.raw,n.text+="\n"+r.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=n.text):t.push(r),i=o.length!==e.length,e=e.substring(r.raw.length);else if(r=this.tokenizer.text(e))e=e.substring(r.raw.length),(n=t[t.length-1])&&"text"===n.type?(n.raw+="\n"+r.raw,n.text+="\n"+r.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=n.text):t.push(r);else if(e){var s="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(s);break}throw new Error(s)}return this.state.top=!0,t},r.inline=function(e,t){this.inlineQueue.push({src:e,tokens:t})},r.inlineTokens=function(e,t){var r,n,o,i=this;void 0===t&&(t=[]);var a,s,l,c=e;if(this.tokens.links){var p=Object.keys(this.tokens.links);if(p.length>0)for(;null!=(a=this.tokenizer.rules.inline.reflinkSearch.exec(c));)p.includes(a[0].slice(a[0].lastIndexOf("[")+1,-1))&&(c=c.slice(0,a.index)+"["+Q("a",a[0].length-2)+"]"+c.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;null!=(a=this.tokenizer.rules.inline.blockSkip.exec(c));)c=c.slice(0,a.index)+"["+Q("a",a[0].length-2)+"]"+c.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);for(;null!=(a=this.tokenizer.rules.inline.escapedEmSt.exec(c));)c=c.slice(0,a.index)+"++"+c.slice(this.tokenizer.rules.inline.escapedEmSt.lastIndex);for(;e;)if(s||(l=""),s=!1,!(this.options.extensions&&this.options.extensions.inline&&this.options.extensions.inline.some((function(n){return!!(r=n.call({lexer:i},e,t))&&(e=e.substring(r.raw.length),t.push(r),!0)}))))if(r=this.tokenizer.escape(e))e=e.substring(r.raw.length),t.push(r);else if(r=this.tokenizer.tag(e))e=e.substring(r.raw.length),(n=t[t.length-1])&&"text"===r.type&&"text"===n.type?(n.raw+=r.raw,n.text+=r.text):t.push(r);else if(r=this.tokenizer.link(e))e=e.substring(r.raw.length),t.push(r);else if(r=this.tokenizer.reflink(e,this.tokens.links))e=e.substring(r.raw.length),(n=t[t.length-1])&&"text"===r.type&&"text"===n.type?(n.raw+=r.raw,n.text+=r.text):t.push(r);else if(r=this.tokenizer.emStrong(e,c,l))e=e.substring(r.raw.length),t.push(r);else if(r=this.tokenizer.codespan(e))e=e.substring(r.raw.length),t.push(r);else if(r=this.tokenizer.br(e))e=e.substring(r.raw.length),t.push(r);else if(r=this.tokenizer.del(e))e=e.substring(r.raw.length),t.push(r);else if(r=this.tokenizer.autolink(e,ee))e=e.substring(r.raw.length),t.push(r);else if(this.state.inLink||!(r=this.tokenizer.url(e,ee))){if(o=e,this.options.extensions&&this.options.extensions.startInline&&function(){var t=1/0,r=e.slice(1),n=void 0;i.options.extensions.startInline.forEach((function(e){"number"==typeof(n=e.call({lexer:this},r))&&n>=0&&(t=Math.min(t,n))})),t<1/0&&t>=0&&(o=e.substring(0,t+1))}(),r=this.tokenizer.inlineText(o,X))e=e.substring(r.raw.length),"_"!==r.raw.slice(-1)&&(l=r.raw.slice(-1)),s=!0,(n=t[t.length-1])&&"text"===n.type?(n.raw+=r.raw,n.text+=r.text):t.push(r);else if(e){var u="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(u);break}throw new Error(u)}}else e=e.substring(r.raw.length),t.push(r);return t},t(e,null,[{key:"rules",get:function(){return{block:J,inline:Z}}}]),e}(),re=i.exports.defaults,ne=F.cleanUrl,oe=F.escape,ie=function(){function e(e){this.options=e||re}var t=e.prototype;return t.code=function(e,t,r){var n=(t||"").match(/\S*/)[0];if(this.options.highlight){var o=this.options.highlight(e,n);null!=o&&o!==e&&(r=!0,e=o)}return e=e.replace(/\n$/,"")+"\n",n?'<pre><code class="'+this.options.langPrefix+oe(n,!0)+'">'+(r?e:oe(e,!0))+"</code></pre>\n":"<pre><code>"+(r?e:oe(e,!0))+"</code></pre>\n"},t.blockquote=function(e){return"<blockquote>\n"+e+"</blockquote>\n"},t.html=function(e){return e},t.heading=function(e,t,r,n){return this.options.headerIds?"<h"+t+' id="'+this.options.headerPrefix+n.slug(r)+'">'+e+"</h"+t+">\n":"<h"+t+">"+e+"</h"+t+">\n"},t.hr=function(){return this.options.xhtml?"<hr/>\n":"<hr>\n"},t.list=function(e,t,r){var n=t?"ol":"ul";return"<"+n+(t&&1!==r?' start="'+r+'"':"")+">\n"+e+"</"+n+">\n"},t.listitem=function(e){return"<li>"+e+"</li>\n"},t.checkbox=function(e){return"<input "+(e?'checked="" ':"")+'disabled="" type="checkbox"'+(this.options.xhtml?" /":"")+"> "},t.paragraph=function(e){return"<p>"+e+"</p>\n"},t.table=function(e,t){return t&&(t="<tbody>"+t+"</tbody>"),"<table>\n<thead>\n"+e+"</thead>\n"+t+"</table>\n"},t.tablerow=function(e){return"<tr>\n"+e+"</tr>\n"},t.tablecell=function(e,t){var r=t.header?"th":"td";return(t.align?"<"+r+' align="'+t.align+'">':"<"+r+">")+e+"</"+r+">\n"},t.strong=function(e){return"<strong>"+e+"</strong>"},t.em=function(e){return"<em>"+e+"</em>"},t.codespan=function(e){return"<code>"+e+"</code>"},t.br=function(){return this.options.xhtml?"<br/>":"<br>"},t.del=function(e){return"<del>"+e+"</del>"},t.link=function(e,t,r){if(null===(e=ne(this.options.sanitize,this.options.baseUrl,e)))return r;var n='<a href="'+oe(e)+'"';return t&&(n+=' title="'+t+'"'),n+=">"+r+"</a>"},t.image=function(e,t,r){if(null===(e=ne(this.options.sanitize,this.options.baseUrl,e)))return r;var n='<img src="'+e+'" alt="'+r+'"';return t&&(n+=' title="'+t+'"'),n+=this.options.xhtml?"/>":">"},t.text=function(e){return e},e}(),ae=function(){function e(){}var t=e.prototype;return t.strong=function(e){return e},t.em=function(e){return e},t.codespan=function(e){return e},t.del=function(e){return e},t.html=function(e){return e},t.text=function(e){return e},t.link=function(e,t,r){return""+r},t.image=function(e,t,r){return""+r},t.br=function(){return""},e}(),se=function(){function e(){this.seen={}}var t=e.prototype;return t.serialize=function(e){return e.toLowerCase().trim().replace(/<[!\/a-z].*?>/gi,"").replace(/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g,"").replace(/\s/g,"-")},t.getNextSafeSlug=function(e,t){var r=e,n=0;if(this.seen.hasOwnProperty(r)){n=this.seen[e];do{r=e+"-"+ ++n}while(this.seen.hasOwnProperty(r))}return t||(this.seen[e]=n,this.seen[r]=0),r},t.slug=function(e,t){void 0===t&&(t={});var r=this.serialize(e);return this.getNextSafeSlug(r,t.dryrun)},e}(),le=ie,ce=ae,pe=se,ue=i.exports.defaults,de=F.unescape,he=te,fe=function(){function e(e){this.options=e||ue,this.options.renderer=this.options.renderer||new le,this.renderer=this.options.renderer,this.renderer.options=this.options,this.textRenderer=new ce,this.slugger=new pe}e.parse=function(t,r){return new e(r).parse(t)},e.parseInline=function(t,r){return new e(r).parseInline(t)};var t=e.prototype;return t.parse=function(e,t){void 0===t&&(t=!0);var r,n,o,i,a,s,l,c,p,u,d,h,f,m,y,g,v,b,x,w="",$=e.length;for(r=0;r<$;r++)if(u=e[r],!(this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[u.type])||!1===(x=this.options.extensions.renderers[u.type].call({parser:this},u))&&["space","hr","heading","code","table","blockquote","list","html","paragraph","text"].includes(u.type))switch(u.type){case"space":continue;case"hr":w+=this.renderer.hr();continue;case"heading":w+=this.renderer.heading(this.parseInline(u.tokens),u.depth,de(this.parseInline(u.tokens,this.textRenderer)),this.slugger);continue;case"code":w+=this.renderer.code(u.text,u.lang,u.escaped);continue;case"table":for(c="",l="",i=u.header.length,n=0;n<i;n++)l+=this.renderer.tablecell(this.parseInline(u.header[n].tokens),{header:!0,align:u.align[n]});for(c+=this.renderer.tablerow(l),p="",i=u.rows.length,n=0;n<i;n++){for(l="",a=(s=u.rows[n]).length,o=0;o<a;o++)l+=this.renderer.tablecell(this.parseInline(s[o].tokens),{header:!1,align:u.align[o]});p+=this.renderer.tablerow(l)}w+=this.renderer.table(c,p);continue;case"blockquote":p=this.parse(u.tokens),w+=this.renderer.blockquote(p);continue;case"list":for(d=u.ordered,h=u.start,f=u.loose,i=u.items.length,p="",n=0;n<i;n++)g=(y=u.items[n]).checked,v=y.task,m="",y.task&&(b=this.renderer.checkbox(g),f?y.tokens.length>0&&"paragraph"===y.tokens[0].type?(y.tokens[0].text=b+" "+y.tokens[0].text,y.tokens[0].tokens&&y.tokens[0].tokens.length>0&&"text"===y.tokens[0].tokens[0].type&&(y.tokens[0].tokens[0].text=b+" "+y.tokens[0].tokens[0].text)):y.tokens.unshift({type:"text",text:b}):m+=b),m+=this.parse(y.tokens,f),p+=this.renderer.listitem(m,v,g);w+=this.renderer.list(p,d,h);continue;case"html":w+=this.renderer.html(u.text);continue;case"paragraph":w+=this.renderer.paragraph(this.parseInline(u.tokens));continue;case"text":for(p=u.tokens?this.parseInline(u.tokens):u.text;r+1<$&&"text"===e[r+1].type;)p+="\n"+((u=e[++r]).tokens?this.parseInline(u.tokens):u.text);w+=t?this.renderer.paragraph(p):p;continue;default:var A='Token with "'+u.type+'" type was not found.';if(this.options.silent)return void console.error(A);throw new Error(A)}else w+=x||"";return w},t.parseInline=function(e,t){t=t||this.renderer;var r,n,o,i="",a=e.length;for(r=0;r<a;r++)if(n=e[r],!(this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[n.type])||!1===(o=this.options.extensions.renderers[n.type].call({parser:this},n))&&["escape","html","link","image","strong","em","codespan","br","del","text"].includes(n.type))switch(n.type){case"escape":i+=t.text(n.text);break;case"html":i+=t.html(n.text);break;case"link":i+=t.link(n.href,n.title,this.parseInline(n.tokens,t));break;case"image":i+=t.image(n.href,n.title,n.text);break;case"strong":i+=t.strong(this.parseInline(n.tokens,t));break;case"em":i+=t.em(this.parseInline(n.tokens,t));break;case"codespan":i+=t.codespan(n.text);break;case"br":i+=t.br();break;case"del":i+=t.del(this.parseInline(n.tokens,t));break;case"text":i+=t.text(n.text);break;default:var s='Token with "'+n.type+'" type was not found.';if(this.options.silent)return void console.error(s);throw new Error(s)}else i+=o||"";return i},e}(),me=z,ye=ie,ge=ae,ve=se,be=F.merge,xe=F.checkSanitizeDeprecation,we=F.escape,$e=i.exports.getDefaults,Ae=i.exports.changeDefaults,ke=i.exports.defaults;function Se(e,t,r){if(null==e)throw new Error("marked(): input parameter is undefined or null");if("string"!=typeof e)throw new Error("marked(): input parameter is of type "+Object.prototype.toString.call(e)+", string expected");if("function"==typeof t&&(r=t,t=null),t=be({},Se.defaults,t||{}),xe(t),r){var n,o=t.highlight;try{n=he.lex(e,t)}catch(e){return r(e)}var i=function(e){var i;if(!e)try{t.walkTokens&&Se.walkTokens(n,t.walkTokens),i=fe.parse(n,t)}catch(t){e=t}return t.highlight=o,e?r(e):r(null,i)};if(!o||o.length<3)return i();if(delete t.highlight,!n.length)return i();var a=0;return Se.walkTokens(n,(function(e){"code"===e.type&&(a++,setTimeout((function(){o(e.text,e.lang,(function(t,r){if(t)return i(t);null!=r&&r!==e.text&&(e.text=r,e.escaped=!0),0==--a&&i()}))}),0))})),void(0===a&&i())}try{var s=he.lex(e,t);return t.walkTokens&&Se.walkTokens(s,t.walkTokens),fe.parse(s,t)}catch(e){if(e.message+="\nPlease report this to https://github.com/markedjs/marked.",t.silent)return"<p>An error occurred:</p><pre>"+we(e.message+"",!0)+"</pre>";throw e}}return Se.options=Se.setOptions=function(e){return be(Se.defaults,e),Ae(Se.defaults),Se},Se.getDefaults=$e,Se.defaults=ke,Se.use=function(){for(var e=this,t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];var o,i=be.apply(void 0,[{}].concat(r)),a=Se.defaults.extensions||{renderers:{},childTokens:{}};r.forEach((function(t){if(t.extensions&&(o=!0,t.extensions.forEach((function(e){if(!e.name)throw new Error("extension name required");if(e.renderer){var t=a.renderers?a.renderers[e.name]:null;a.renderers[e.name]=t?function(){for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];var i=e.renderer.apply(this,n);return!1===i&&(i=t.apply(this,n)),i}:e.renderer}if(e.tokenizer){if(!e.level||"block"!==e.level&&"inline"!==e.level)throw new Error("extension level must be 'block' or 'inline'");a[e.level]?a[e.level].unshift(e.tokenizer):a[e.level]=[e.tokenizer],e.start&&("block"===e.level?a.startBlock?a.startBlock.push(e.start):a.startBlock=[e.start]:"inline"===e.level&&(a.startInline?a.startInline.push(e.start):a.startInline=[e.start]))}e.childTokens&&(a.childTokens[e.name]=e.childTokens)}))),t.renderer&&function(){var e=Se.defaults.renderer||new ye,r=function(r){var n=e[r];e[r]=function(){for(var o=arguments.length,i=new Array(o),a=0;a<o;a++)i[a]=arguments[a];var s=t.renderer[r].apply(e,i);return!1===s&&(s=n.apply(e,i)),s}};for(var n in t.renderer)r(n);i.renderer=e}(),t.tokenizer&&function(){var e=Se.defaults.tokenizer||new me,r=function(r){var n=e[r];e[r]=function(){for(var o=arguments.length,i=new Array(o),a=0;a<o;a++)i[a]=arguments[a];var s=t.tokenizer[r].apply(e,i);return!1===s&&(s=n.apply(e,i)),s}};for(var n in t.tokenizer)r(n);i.tokenizer=e}(),t.walkTokens){var r=Se.defaults.walkTokens;i.walkTokens=function(n){t.walkTokens.call(e,n),r&&r(n)}}o&&(i.extensions=a),Se.setOptions(i)}))},Se.walkTokens=function(e,t){for(var r,n=function(){var e=r.value;switch(t(e),e.type){case"table":for(var n,i=o(e.header);!(n=i()).done;){var a=n.value;Se.walkTokens(a.tokens,t)}for(var s,l=o(e.rows);!(s=l()).done;)for(var c,p=o(s.value);!(c=p()).done;){var u=c.value;Se.walkTokens(u.tokens,t)}break;case"list":Se.walkTokens(e.items,t);break;default:Se.defaults.extensions&&Se.defaults.extensions.childTokens&&Se.defaults.extensions.childTokens[e.type]?Se.defaults.extensions.childTokens[e.type].forEach((function(r){Se.walkTokens(e[r],t)})):e.tokens&&Se.walkTokens(e.tokens,t)}},i=o(e);!(r=i()).done;)n()},Se.parseInline=function(e,t){if(null==e)throw new Error("marked.parseInline(): input parameter is undefined or null");if("string"!=typeof e)throw new Error("marked.parseInline(): input parameter is of type "+Object.prototype.toString.call(e)+", string expected");t=be({},Se.defaults,t||{}),xe(t);try{var r=he.lexInline(e,t);return t.walkTokens&&Se.walkTokens(r,t.walkTokens),fe.parseInline(r,t)}catch(e){if(e.message+="\nPlease report this to https://github.com/markedjs/marked.",t.silent)return"<p>An error occurred:</p><pre>"+we(e.message+"",!0)+"</pre>";throw e}},Se.Parser=fe,Se.parser=fe.parse,Se.Renderer=ye,Se.TextRenderer=ge,Se.Lexer=he,Se.lexer=he.lex,Se.Tokenizer=me,Se.Slugger=ve,Se.parse=Se,Se}()},874:()=>{!function(e){var t="\\b(?:BASH|BASHOPTS|BASH_ALIASES|BASH_ARGC|BASH_ARGV|BASH_CMDS|BASH_COMPLETION_COMPAT_DIR|BASH_LINENO|BASH_REMATCH|BASH_SOURCE|BASH_VERSINFO|BASH_VERSION|COLORTERM|COLUMNS|COMP_WORDBREAKS|DBUS_SESSION_BUS_ADDRESS|DEFAULTS_PATH|DESKTOP_SESSION|DIRSTACK|DISPLAY|EUID|GDMSESSION|GDM_LANG|GNOME_KEYRING_CONTROL|GNOME_KEYRING_PID|GPG_AGENT_INFO|GROUPS|HISTCONTROL|HISTFILE|HISTFILESIZE|HISTSIZE|HOME|HOSTNAME|HOSTTYPE|IFS|INSTANCE|JOB|LANG|LANGUAGE|LC_ADDRESS|LC_ALL|LC_IDENTIFICATION|LC_MEASUREMENT|LC_MONETARY|LC_NAME|LC_NUMERIC|LC_PAPER|LC_TELEPHONE|LC_TIME|LESSCLOSE|LESSOPEN|LINES|LOGNAME|LS_COLORS|MACHTYPE|MAILCHECK|MANDATORY_PATH|NO_AT_BRIDGE|OLDPWD|OPTERR|OPTIND|ORBIT_SOCKETDIR|OSTYPE|PAPERSIZE|PATH|PIPESTATUS|PPID|PS1|PS2|PS3|PS4|PWD|RANDOM|REPLY|SECONDS|SELINUX_INIT|SESSION|SESSIONTYPE|SESSION_MANAGER|SHELL|SHELLOPTS|SHLVL|SSH_AUTH_SOCK|TERM|UID|UPSTART_EVENTS|UPSTART_INSTANCE|UPSTART_JOB|UPSTART_SESSION|USER|WINDOWID|XAUTHORITY|XDG_CONFIG_DIRS|XDG_CURRENT_DESKTOP|XDG_DATA_DIRS|XDG_GREETER_DATA_DIR|XDG_MENU_PREFIX|XDG_RUNTIME_DIR|XDG_SEAT|XDG_SEAT_PATH|XDG_SESSION_DESKTOP|XDG_SESSION_ID|XDG_SESSION_PATH|XDG_SESSION_TYPE|XDG_VTNR|XMODIFIERS)\\b",r={pattern:/(^(["']?)\w+\2)[ \t]+\S.*/,lookbehind:!0,alias:"punctuation",inside:null},n={bash:r,environment:{pattern:RegExp("\\$"+t),alias:"constant"},variable:[{pattern:/\$?\(\([\s\S]+?\)\)/,greedy:!0,inside:{variable:[{pattern:/(^\$\(\([\s\S]+)\)\)/,lookbehind:!0},/^\$\(\(/],number:/\b0x[\dA-Fa-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[Ee]-?\d+)?/,operator:/--|\+\+|\*\*=?|<<=?|>>=?|&&|\|\||[=!+\-*/%<>^&|]=?|[?~:]/,punctuation:/\(\(?|\)\)?|,|;/}},{pattern:/\$\((?:\([^)]+\)|[^()])+\)|`[^`]+`/,greedy:!0,inside:{variable:/^\$\(|^`|\)$|`$/}},{pattern:/\$\{[^}]+\}/,greedy:!0,inside:{operator:/:[-=?+]?|[!\/]|##?|%%?|\^\^?|,,?/,punctuation:/[\[\]]/,environment:{pattern:RegExp("(\\{)"+t),lookbehind:!0,alias:"constant"}}},/\$(?:\w+|[#?*!@$])/],entity:/\\(?:[abceEfnrtv\\"]|O?[0-7]{1,3}|x[0-9a-fA-F]{1,2}|u[0-9a-fA-F]{4}|U[0-9a-fA-F]{8})/};e.languages.bash={shebang:{pattern:/^#!\s*\/.*/,alias:"important"},comment:{pattern:/(^|[^"{\\$])#.*/,lookbehind:!0},"function-name":[{pattern:/(\bfunction\s+)[\w-]+(?=(?:\s*\(?:\s*\))?\s*\{)/,lookbehind:!0,alias:"function"},{pattern:/\b[\w-]+(?=\s*\(\s*\)\s*\{)/,alias:"function"}],"for-or-select":{pattern:/(\b(?:for|select)\s+)\w+(?=\s+in\s)/,alias:"variable",lookbehind:!0},"assign-left":{pattern:/(^|[\s;|&]|[<>]\()\w+(?=\+?=)/,inside:{environment:{pattern:RegExp("(^|[\\s;|&]|[<>]\\()"+t),lookbehind:!0,alias:"constant"}},alias:"variable",lookbehind:!0},string:[{pattern:/((?:^|[^<])<<-?\s*)(\w+)\s[\s\S]*?(?:\r?\n|\r)\2/,lookbehind:!0,greedy:!0,inside:n},{pattern:/((?:^|[^<])<<-?\s*)(["'])(\w+)\2\s[\s\S]*?(?:\r?\n|\r)\3/,lookbehind:!0,greedy:!0,inside:{bash:r}},{pattern:/(^|[^\\](?:\\\\)*)"(?:\\[\s\S]|\$\([^)]+\)|\$(?!\()|`[^`]+`|[^"\\`$])*"/,lookbehind:!0,greedy:!0,inside:n},{pattern:/(^|[^$\\])'[^']*'/,lookbehind:!0,greedy:!0},{pattern:/\$'(?:[^'\\]|\\[\s\S])*'/,greedy:!0,inside:{entity:n.entity}}],environment:{pattern:RegExp("\\$?"+t),alias:"constant"},variable:n.variable,function:{pattern:/(^|[\s;|&]|[<>]\()(?:add|apropos|apt|aptitude|apt-cache|apt-get|aspell|automysqlbackup|awk|basename|bash|bc|bconsole|bg|bzip2|cal|cat|cfdisk|chgrp|chkconfig|chmod|chown|chroot|cksum|clear|cmp|column|comm|composer|cp|cron|crontab|csplit|curl|cut|date|dc|dd|ddrescue|debootstrap|df|diff|diff3|dig|dir|dircolors|dirname|dirs|dmesg|du|egrep|eject|env|ethtool|expand|expect|expr|fdformat|fdisk|fg|fgrep|file|find|fmt|fold|format|free|fsck|ftp|fuser|gawk|git|gparted|grep|groupadd|groupdel|groupmod|groups|grub-mkconfig|gzip|halt|head|hg|history|host|hostname|htop|iconv|id|ifconfig|ifdown|ifup|import|install|ip|jobs|join|kill|killall|less|link|ln|locate|logname|logrotate|look|lpc|lpr|lprint|lprintd|lprintq|lprm|ls|lsof|lynx|make|man|mc|mdadm|mkconfig|mkdir|mke2fs|mkfifo|mkfs|mkisofs|mknod|mkswap|mmv|more|most|mount|mtools|mtr|mutt|mv|nano|nc|netstat|nice|nl|nohup|notify-send|npm|nslookup|op|open|parted|passwd|paste|pathchk|ping|pkill|pnpm|popd|pr|printcap|printenv|ps|pushd|pv|quota|quotacheck|quotactl|ram|rar|rcp|reboot|remsync|rename|renice|rev|rm|rmdir|rpm|rsync|scp|screen|sdiff|sed|sendmail|seq|service|sftp|sh|shellcheck|shuf|shutdown|sleep|slocate|sort|split|ssh|stat|strace|su|sudo|sum|suspend|swapon|sync|tac|tail|tar|tee|time|timeout|top|touch|tr|traceroute|tsort|tty|umount|uname|unexpand|uniq|units|unrar|unshar|unzip|update-grub|uptime|useradd|userdel|usermod|users|uudecode|uuencode|v|vdir|vi|vim|virsh|vmstat|wait|watch|wc|wget|whereis|which|who|whoami|write|xargs|xdg-open|yarn|yes|zenity|zip|zsh|zypper)(?=$|[)\s;|&])/,lookbehind:!0},keyword:{pattern:/(^|[\s;|&]|[<>]\()(?:if|then|else|elif|fi|for|while|in|case|esac|function|select|do|done|until)(?=$|[)\s;|&])/,lookbehind:!0},builtin:{pattern:/(^|[\s;|&]|[<>]\()(?:\.|:|break|cd|continue|eval|exec|exit|export|getopts|hash|pwd|readonly|return|shift|test|times|trap|umask|unset|alias|bind|builtin|caller|command|declare|echo|enable|help|let|local|logout|mapfile|printf|read|readarray|source|type|typeset|ulimit|unalias|set|shopt)(?=$|[)\s;|&])/,lookbehind:!0,alias:"class-name"},boolean:{pattern:/(^|[\s;|&]|[<>]\()(?:true|false)(?=$|[)\s;|&])/,lookbehind:!0},"file-descriptor":{pattern:/\B&\d\b/,alias:"important"},operator:{pattern:/\d?<>|>\||\+=|=[=~]?|!=?|<<[<-]?|[&\d]?>>|\d[<>]&?|[<>][&=]?|&[>&]?|\|[&|]?/,inside:{"file-descriptor":{pattern:/^\d/,alias:"important"}}},punctuation:/\$?\(\(?|\)\)?|\.\.|[{}[\];\\]/,number:{pattern:/(^|\s)(?:[1-9]\d*|0)(?:[.,]\d+)?\b/,lookbehind:!0}},r.inside=e.languages.bash;for(var o=["comment","function-name","for-or-select","assign-left","string","environment","function","keyword","builtin","boolean","file-descriptor","operator","punctuation","number"],i=n.variable[1].inside,a=0;a<o.length;a++)i[o[a]]=e.languages.bash[o[a]];e.languages.shell=e.languages.bash}(Prism)},16:()=>{!function(e){function t(e,t){return e.replace(/<<(\d+)>>/g,(function(e,r){return"(?:"+t[+r]+")"}))}function r(e,r,n){return RegExp(t(e,r),n||"")}function n(e,t){for(var r=0;r<t;r++)e=e.replace(/<<self>>/g,(function(){return"(?:"+e+")"}));return e.replace(/<<self>>/g,"[^\\s\\S]")}var o="bool byte char decimal double dynamic float int long object sbyte short string uint ulong ushort var void",i="class enum interface record struct",a="add alias and ascending async await by descending from(?=\\s*(?:\\w|$)) get global group into init(?=\\s*;) join let nameof not notnull on or orderby partial remove select set unmanaged value when where with(?=\\s*{)",s="abstract as base break case catch checked const continue default delegate do else event explicit extern finally fixed for foreach goto if implicit in internal is lock namespace new null operator out override params private protected public readonly ref return sealed sizeof stackalloc static switch this throw try typeof unchecked unsafe using virtual volatile while yield";function l(e){return"\\b(?:"+e.trim().replace(/ /g,"|")+")\\b"}var c=l(i),p=RegExp(l(o+" "+i+" "+a+" "+s)),u=l(i+" "+a+" "+s),d=l(o+" "+i+" "+s),h=n(/<(?:[^<>;=+\-*/%&|^]|<<self>>)*>/.source,2),f=n(/\((?:[^()]|<<self>>)*\)/.source,2),m=/@?\b[A-Za-z_]\w*\b/.source,y=t(/<<0>>(?:\s*<<1>>)?/.source,[m,h]),g=t(/(?!<<0>>)<<1>>(?:\s*\.\s*<<1>>)*/.source,[u,y]),v=/\[\s*(?:,\s*)*\]/.source,b=t(/<<0>>(?:\s*(?:\?\s*)?<<1>>)*(?:\s*\?)?/.source,[g,v]),x=t(/[^,()<>[\];=+\-*/%&|^]|<<0>>|<<1>>|<<2>>/.source,[h,f,v]),w=t(/\(<<0>>+(?:,<<0>>+)+\)/.source,[x]),$=t(/(?:<<0>>|<<1>>)(?:\s*(?:\?\s*)?<<2>>)*(?:\s*\?)?/.source,[w,g,v]),A={keyword:p,punctuation:/[<>()?,.:[\]]/},k=/'(?:[^\r\n'\\]|\\.|\\[Uux][\da-fA-F]{1,8})'/.source,S=/"(?:\\.|[^\\"\r\n])*"/.source,E=/@"(?:""|\\[\s\S]|[^\\"])*"(?!")/.source;e.languages.csharp=e.languages.extend("clike",{string:[{pattern:r(/(^|[^$\\])<<0>>/.source,[E]),lookbehind:!0,greedy:!0},{pattern:r(/(^|[^@$\\])<<0>>/.source,[S]),lookbehind:!0,greedy:!0},{pattern:RegExp(k),greedy:!0,alias:"character"}],"class-name":[{pattern:r(/(\busing\s+static\s+)<<0>>(?=\s*;)/.source,[g]),lookbehind:!0,inside:A},{pattern:r(/(\busing\s+<<0>>\s*=\s*)<<1>>(?=\s*;)/.source,[m,$]),lookbehind:!0,inside:A},{pattern:r(/(\busing\s+)<<0>>(?=\s*=)/.source,[m]),lookbehind:!0},{pattern:r(/(\b<<0>>\s+)<<1>>/.source,[c,y]),lookbehind:!0,inside:A},{pattern:r(/(\bcatch\s*\(\s*)<<0>>/.source,[g]),lookbehind:!0,inside:A},{pattern:r(/(\bwhere\s+)<<0>>/.source,[m]),lookbehind:!0},{pattern:r(/(\b(?:is(?:\s+not)?|as)\s+)<<0>>/.source,[b]),lookbehind:!0,inside:A},{pattern:r(/\b<<0>>(?=\s+(?!<<1>>|with\s*\{)<<2>>(?:\s*[=,;:{)\]]|\s+(?:in|when)\b))/.source,[$,d,m]),inside:A}],keyword:p,number:/(?:\b0(?:x[\da-f_]*[\da-f]|b[01_]*[01])|(?:\B\.\d+(?:_+\d+)*|\b\d+(?:_+\d+)*(?:\.\d+(?:_+\d+)*)?)(?:e[-+]?\d+(?:_+\d+)*)?)(?:ul|lu|[dflmu])?\b/i,operator:/>>=?|<<=?|[-=]>|([-+&|])\1|~|\?\?=?|[-+*/%&|^!=<>]=?/,punctuation:/\?\.?|::|[{}[\];(),.:]/}),e.languages.insertBefore("csharp","number",{range:{pattern:/\.\./,alias:"operator"}}),e.languages.insertBefore("csharp","punctuation",{"named-parameter":{pattern:r(/([(,]\s*)<<0>>(?=\s*:)/.source,[m]),lookbehind:!0,alias:"punctuation"}}),e.languages.insertBefore("csharp","class-name",{namespace:{pattern:r(/(\b(?:namespace|using)\s+)<<0>>(?:\s*\.\s*<<0>>)*(?=\s*[;{])/.source,[m]),lookbehind:!0,inside:{punctuation:/\./}},"type-expression":{pattern:r(/(\b(?:default|typeof|sizeof)\s*\(\s*(?!\s))(?:[^()\s]|\s(?!\s)|<<0>>)*(?=\s*\))/.source,[f]),lookbehind:!0,alias:"class-name",inside:A},"return-type":{pattern:r(/<<0>>(?=\s+(?:<<1>>\s*(?:=>|[({]|\.\s*this\s*\[)|this\s*\[))/.source,[$,g]),inside:A,alias:"class-name"},"constructor-invocation":{pattern:r(/(\bnew\s+)<<0>>(?=\s*[[({])/.source,[$]),lookbehind:!0,inside:A,alias:"class-name"},"generic-method":{pattern:r(/<<0>>\s*<<1>>(?=\s*\()/.source,[m,h]),inside:{function:r(/^<<0>>/.source,[m]),generic:{pattern:RegExp(h),alias:"class-name",inside:A}}},"type-list":{pattern:r(/\b((?:<<0>>\s+<<1>>|record\s+<<1>>\s*<<5>>|where\s+<<2>>)\s*:\s*)(?:<<3>>|<<4>>|<<1>>\s*<<5>>|<<6>>)(?:\s*,\s*(?:<<3>>|<<4>>|<<6>>))*(?=\s*(?:where|[{;]|=>|$))/.source,[c,y,m,$,p.source,f,/\bnew\s*\(\s*\)/.source]),lookbehind:!0,inside:{"record-arguments":{pattern:r(/(^(?!new\s*\()<<0>>\s*)<<1>>/.source,[y,f]),lookbehind:!0,greedy:!0,inside:e.languages.csharp},keyword:p,"class-name":{pattern:RegExp($),greedy:!0,inside:A},punctuation:/[,()]/}},preprocessor:{pattern:/(^[\t ]*)#.*/m,lookbehind:!0,alias:"property",inside:{directive:{pattern:/(#)\b(?:define|elif|else|endif|endregion|error|if|line|nullable|pragma|region|undef|warning)\b/,lookbehind:!0,alias:"keyword"}}}});var D=S+"|"+k,O=t(/\/(?![*/])|\/\/[^\r\n]*[\r\n]|\/\*(?:[^*]|\*(?!\/))*\*\/|<<0>>/.source,[D]),C=n(t(/[^"'/()]|<<0>>|\(<<self>>*\)/.source,[O]),2),j=/\b(?:assembly|event|field|method|module|param|property|return|type)\b/.source,T=t(/<<0>>(?:\s*\(<<1>>*\))?/.source,[g,C]);e.languages.insertBefore("csharp","class-name",{attribute:{pattern:r(/((?:^|[^\s\w>)?])\s*\[\s*)(?:<<0>>\s*:\s*)?<<1>>(?:\s*,\s*<<1>>)*(?=\s*\])/.source,[j,T]),lookbehind:!0,greedy:!0,inside:{target:{pattern:r(/^<<0>>(?=\s*:)/.source,[j]),alias:"keyword"},"attribute-arguments":{pattern:r(/\(<<0>>*\)/.source,[C]),inside:e.languages.csharp},"class-name":{pattern:RegExp(g),inside:{punctuation:/\./}},punctuation:/[:,]/}}});var _=/:[^}\r\n]+/.source,F=n(t(/[^"'/()]|<<0>>|\(<<self>>*\)/.source,[O]),2),B=t(/\{(?!\{)(?:(?![}:])<<0>>)*<<1>>?\}/.source,[F,_]),I=n(t(/[^"'/()]|\/(?!\*)|\/\*(?:[^*]|\*(?!\/))*\*\/|<<0>>|\(<<self>>*\)/.source,[D]),2),P=t(/\{(?!\{)(?:(?![}:])<<0>>)*<<1>>?\}/.source,[I,_]);function R(t,n){return{interpolation:{pattern:r(/((?:^|[^{])(?:\{\{)*)<<0>>/.source,[t]),lookbehind:!0,inside:{"format-string":{pattern:r(/(^\{(?:(?![}:])<<0>>)*)<<1>>(?=\}$)/.source,[n,_]),lookbehind:!0,inside:{punctuation:/^:/}},punctuation:/^\{|\}$/,expression:{pattern:/[\s\S]+/,alias:"language-csharp",inside:e.languages.csharp}}},string:/[\s\S]+/}}e.languages.insertBefore("csharp","string",{"interpolation-string":[{pattern:r(/(^|[^\\])(?:\$@|@\$)"(?:""|\\[\s\S]|\{\{|<<0>>|[^\\{"])*"/.source,[B]),lookbehind:!0,greedy:!0,inside:R(B,F)},{pattern:r(/(^|[^@\\])\$"(?:\\.|\{\{|<<0>>|[^\\"{])*"/.source,[P]),lookbehind:!0,greedy:!0,inside:R(P,I)}]})}(Prism),Prism.languages.dotnet=Prism.languages.cs=Prism.languages.csharp},251:()=>{!function(e){var t=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;e.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:/@[\w-](?:[^;{\s]|\s+(?![\s{]))*(?:;|(?=\s*\{))/,inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+t.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+t.source+"$"),alias:"url"}}},selector:{pattern:RegExp("(^|[{}\\s])[^{}\\s](?:[^{};\"'\\s]|\\s+(?![\\s{])|"+t.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:t,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},e.languages.css.atrule.inside.rest=e.languages.css;var r=e.languages.markup;r&&(r.tag.addInlined("style","css"),r.tag.addAttribute("style","css"))}(Prism)},46:()=>{Prism.languages.go=Prism.languages.extend("clike",{string:{pattern:/(["'`])(?:\\[\s\S]|(?!\1)[^\\])*\1/,greedy:!0},keyword:/\b(?:break|case|chan|const|continue|default|defer|else|fallthrough|for|func|go(?:to)?|if|import|interface|map|package|range|return|select|struct|switch|type|var)\b/,boolean:/\b(?:_|iota|nil|true|false)\b/,number:/(?:\b0x[a-f\d]+|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[-+]?\d+)?)i?/i,operator:/[*\/%^!=]=?|\+[=+]?|-[=-]?|\|[=|]?|&(?:=|&|\^=?)?|>(?:>=?|=)?|<(?:<=?|=|-)?|:=|\.\.\./,builtin:/\b(?:bool|byte|complex(?:64|128)|error|float(?:32|64)|rune|string|u?int(?:8|16|32|64)?|uintptr|append|cap|close|complex|copy|delete|imag|len|make|new|panic|print(?:ln)?|real|recover)\b/}),delete Prism.languages.go["class-name"]},57:()=>{!function(e){e.languages.http={"request-line":{pattern:/^(?:GET|HEAD|POST|PUT|DELETE|CONNECT|OPTIONS|TRACE|PATCH|PRI|SEARCH)\s(?:https?:\/\/|\/)\S*\sHTTP\/[0-9.]+/m,inside:{method:{pattern:/^[A-Z]+\b/,alias:"property"},"request-target":{pattern:/^(\s)(?:https?:\/\/|\/)\S*(?=\s)/,lookbehind:!0,alias:"url",inside:e.languages.uri},"http-version":{pattern:/^(\s)HTTP\/[0-9.]+/,lookbehind:!0,alias:"property"}}},"response-status":{pattern:/^HTTP\/[0-9.]+ \d+ .+/m,inside:{"http-version":{pattern:/^HTTP\/[0-9.]+/,alias:"property"},"status-code":{pattern:/^(\s)\d+(?=\s)/,lookbehind:!0,alias:"number"},"reason-phrase":{pattern:/^(\s).+/,lookbehind:!0,alias:"string"}}},"header-name":{pattern:/^[\w-]+:(?=.)/m,alias:"keyword"}};var t,r=e.languages,n={"application/javascript":r.javascript,"application/json":r.json||r.javascript,"application/xml":r.xml,"text/xml":r.xml,"text/html":r.html,"text/css":r.css},o={"application/json":!0,"application/xml":!0};function i(e){var t=e.replace(/^[a-z]+\//,"");return"(?:"+e+"|"+("\\w+/(?:[\\w.-]+\\+)+"+t+"(?![+\\w.-])")+")"}for(var a in n)if(n[a]){t=t||{};var s=o[a]?i(a):a;t[a.replace(/\//g,"-")]={pattern:RegExp("(content-type:\\s*"+s+"(?:(?:\\r\\n?|\\n).+)*)(?:\\r?\\n|\\r){2}[\\s\\S]*","i"),lookbehind:!0,inside:n[a]}}t&&e.languages.insertBefore("http","header-name",t)}(Prism)},503:()=>{!function(e){var t=/\b(?:abstract|assert|boolean|break|byte|case|catch|char|class|const|continue|default|do|double|else|enum|exports|extends|final|finally|float|for|goto|if|implements|import|instanceof|int|interface|long|module|native|new|non-sealed|null|open|opens|package|permits|private|protected|provides|public|record|requires|return|sealed|short|static|strictfp|super|switch|synchronized|this|throw|throws|to|transient|transitive|try|uses|var|void|volatile|while|with|yield)\b/,r=/(^|[^\w.])(?:[a-z]\w*\s*\.\s*)*(?:[A-Z]\w*\s*\.\s*)*/.source,n={pattern:RegExp(r+/[A-Z](?:[\d_A-Z]*[a-z]\w*)?\b/.source),lookbehind:!0,inside:{namespace:{pattern:/^[a-z]\w*(?:\s*\.\s*[a-z]\w*)*(?:\s*\.)?/,inside:{punctuation:/\./}},punctuation:/\./}};e.languages.java=e.languages.extend("clike",{"class-name":[n,{pattern:RegExp(r+/[A-Z]\w*(?=\s+\w+\s*[;,=()])/.source),lookbehind:!0,inside:n.inside}],keyword:t,function:[e.languages.clike.function,{pattern:/(::\s*)[a-z_]\w*/,lookbehind:!0}],number:/\b0b[01][01_]*L?\b|\b0x(?:\.[\da-f_p+-]+|[\da-f_]+(?:\.[\da-f_p+-]+)?)\b|(?:\b\d[\d_]*(?:\.[\d_]*)?|\B\.\d[\d_]*)(?:e[+-]?\d[\d_]*)?[dfl]?/i,operator:{pattern:/(^|[^.])(?:<<=?|>>>?=?|->|--|\+\+|&&|\|\||::|[?:~]|[-+*/%&|^!=<>]=?)/m,lookbehind:!0}}),e.languages.insertBefore("java","string",{"triple-quoted-string":{pattern:/"""[ \t]*[\r\n](?:(?:"|"")?(?:\\.|[^"\\]))*"""/,greedy:!0,alias:"string"}}),e.languages.insertBefore("java","class-name",{annotation:{pattern:/(^|[^.])@\w+(?:\s*\.\s*\w+)*/,lookbehind:!0,alias:"punctuation"},generics:{pattern:/<(?:[\w\s,.?]|&(?!&)|<(?:[\w\s,.?]|&(?!&)|<(?:[\w\s,.?]|&(?!&)|<(?:[\w\s,.?]|&(?!&))*>)*>)*>)*>/,inside:{"class-name":n,keyword:t,punctuation:/[<>(),.:]/,operator:/[?&|]/}},namespace:{pattern:RegExp(/(\b(?:exports|import(?:\s+static)?|module|open|opens|package|provides|requires|to|transitive|uses|with)\s+)(?!<keyword>)[a-z]\w*(?:\.[a-z]\w*)*\.?/.source.replace(/<keyword>/g,(function(){return t.source}))),lookbehind:!0,inside:{punctuation:/\./}}})}(Prism)},277:()=>{Prism.languages.json={property:{pattern:/(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?=\s*:)/,lookbehind:!0,greedy:!0},string:{pattern:/(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?!\s*:)/,lookbehind:!0,greedy:!0},comment:{pattern:/\/\/.*|\/\*[\s\S]*?(?:\*\/|$)/,greedy:!0},number:/-?\b\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,punctuation:/[{}[\],]/,operator:/:/,boolean:/\b(?:true|false)\b/,null:{pattern:/\bnull\b/,alias:"keyword"}},Prism.languages.webmanifest=Prism.languages.json},366:()=>{Prism.languages.python={comment:{pattern:/(^|[^\\])#.*/,lookbehind:!0},"string-interpolation":{pattern:/(?:f|rf|fr)(?:("""|''')[\s\S]*?\1|("|')(?:\\.|(?!\2)[^\\\r\n])*\2)/i,greedy:!0,inside:{interpolation:{pattern:/((?:^|[^{])(?:\{\{)*)\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}])+\})+\})+\}/,lookbehind:!0,inside:{"format-spec":{pattern:/(:)[^:(){}]+(?=\}$)/,lookbehind:!0},"conversion-option":{pattern:/![sra](?=[:}]$)/,alias:"punctuation"},rest:null}},string:/[\s\S]+/}},"triple-quoted-string":{pattern:/(?:[rub]|rb|br)?("""|''')[\s\S]*?\1/i,greedy:!0,alias:"string"},string:{pattern:/(?:[rub]|rb|br)?("|')(?:\\.|(?!\1)[^\\\r\n])*\1/i,greedy:!0},function:{pattern:/((?:^|\s)def[ \t]+)[a-zA-Z_]\w*(?=\s*\()/g,lookbehind:!0},"class-name":{pattern:/(\bclass\s+)\w+/i,lookbehind:!0},decorator:{pattern:/(^[\t ]*)@\w+(?:\.\w+)*/im,lookbehind:!0,alias:["annotation","punctuation"],inside:{punctuation:/\./}},keyword:/\b(?:and|as|assert|async|await|break|class|continue|def|del|elif|else|except|exec|finally|for|from|global|if|import|in|is|lambda|nonlocal|not|or|pass|print|raise|return|try|while|with|yield)\b/,builtin:/\b(?:__import__|abs|all|any|apply|ascii|basestring|bin|bool|buffer|bytearray|bytes|callable|chr|classmethod|cmp|coerce|compile|complex|delattr|dict|dir|divmod|enumerate|eval|execfile|file|filter|float|format|frozenset|getattr|globals|hasattr|hash|help|hex|id|input|int|intern|isinstance|issubclass|iter|len|list|locals|long|map|max|memoryview|min|next|object|oct|open|ord|pow|property|range|raw_input|reduce|reload|repr|reversed|round|set|setattr|slice|sorted|staticmethod|str|sum|super|tuple|type|unichr|unicode|vars|xrange|zip)\b/,boolean:/\b(?:True|False|None)\b/,number:/\b0(?:b(?:_?[01])+|o(?:_?[0-7])+|x(?:_?[a-f0-9])+)\b|(?:\b\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\B\.\d+(?:_\d+)*)(?:e[+-]?\d+(?:_\d+)*)?j?\b/i,operator:/[-+%=]=?|!=|\*\*?=?|\/\/?=?|<[<=>]?|>[=>]?|[&|^~]/,punctuation:/[{}[\];(),.:]/},Prism.languages.python["string-interpolation"].inside.interpolation.inside.rest=Prism.languages.python,Prism.languages.py=Prism.languages.python},358:()=>{!function(e){var t=/[*&][^\s[\]{},]+/,r=/!(?:<[\w\-%#;/?:@&=+$,.!~*'()[\]]+>|(?:[a-zA-Z\d-]*!)?[\w\-%#;/?:@&=+$.~*'()]+)?/,n="(?:"+r.source+"(?:[ \t]+"+t.source+")?|"+t.source+"(?:[ \t]+"+r.source+")?)",o=/(?:[^\s\x00-\x08\x0e-\x1f!"#%&'*,\-:>?@[\]`{|}\x7f-\x84\x86-\x9f\ud800-\udfff\ufffe\uffff]|[?:-]<PLAIN>)(?:[ \t]*(?:(?![#:])<PLAIN>|:<PLAIN>))*/.source.replace(/<PLAIN>/g,(function(){return/[^\s\x00-\x08\x0e-\x1f,[\]{}\x7f-\x84\x86-\x9f\ud800-\udfff\ufffe\uffff]/.source})),i=/"(?:[^"\\\r\n]|\\.)*"|'(?:[^'\\\r\n]|\\.)*'/.source;function a(e,t){t=(t||"").replace(/m/g,"")+"m";var r=/([:\-,[{]\s*(?:\s<<prop>>[ \t]+)?)(?:<<value>>)(?=[ \t]*(?:$|,|\]|\}|(?:[\r\n]\s*)?#))/.source.replace(/<<prop>>/g,(function(){return n})).replace(/<<value>>/g,(function(){return e}));return RegExp(r,t)}e.languages.yaml={scalar:{pattern:RegExp(/([\-:]\s*(?:\s<<prop>>[ \t]+)?[|>])[ \t]*(?:((?:\r?\n|\r)[ \t]+)\S[^\r\n]*(?:\2[^\r\n]+)*)/.source.replace(/<<prop>>/g,(function(){return n}))),lookbehind:!0,alias:"string"},comment:/#.*/,key:{pattern:RegExp(/((?:^|[:\-,[{\r\n?])[ \t]*(?:<<prop>>[ \t]+)?)<<key>>(?=\s*:\s)/.source.replace(/<<prop>>/g,(function(){return n})).replace(/<<key>>/g,(function(){return"(?:"+o+"|"+i+")"}))),lookbehind:!0,greedy:!0,alias:"atrule"},directive:{pattern:/(^[ \t]*)%.+/m,lookbehind:!0,alias:"important"},datetime:{pattern:a(/\d{4}-\d\d?-\d\d?(?:[tT]|[ \t]+)\d\d?:\d{2}:\d{2}(?:\.\d*)?(?:[ \t]*(?:Z|[-+]\d\d?(?::\d{2})?))?|\d{4}-\d{2}-\d{2}|\d\d?:\d{2}(?::\d{2}(?:\.\d*)?)?/.source),lookbehind:!0,alias:"number"},boolean:{pattern:a(/true|false/.source,"i"),lookbehind:!0,alias:"important"},null:{pattern:a(/null|~/.source,"i"),lookbehind:!0,alias:"important"},string:{pattern:a(i),lookbehind:!0,greedy:!0},number:{pattern:a(/[+-]?(?:0x[\da-f]+|0o[0-7]+|(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?|\.inf|\.nan)/.source,"i"),lookbehind:!0},tag:r,important:t,punctuation:/---|[:[\]{}\-,|>?]|\.\.\./},e.languages.yml=e.languages.yaml}(Prism)},660:(e,t,r)=>{var n=function(e){var t=/\blang(?:uage)?-([\w-]+)\b/i,r=0,n={},o={manual:e.Prism&&e.Prism.manual,disableWorkerMessageHandler:e.Prism&&e.Prism.disableWorkerMessageHandler,util:{encode:function e(t){return t instanceof i?new i(t.type,e(t.content),t.alias):Array.isArray(t)?t.map(e):t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(e){return Object.prototype.toString.call(e).slice(8,-1)},objId:function(e){return e.__id||Object.defineProperty(e,"__id",{value:++r}),e.__id},clone:function e(t,r){var n,i;switch(r=r||{},o.util.type(t)){case"Object":if(i=o.util.objId(t),r[i])return r[i];for(var a in n={},r[i]=n,t)t.hasOwnProperty(a)&&(n[a]=e(t[a],r));return n;case"Array":return i=o.util.objId(t),r[i]?r[i]:(n=[],r[i]=n,t.forEach((function(t,o){n[o]=e(t,r)})),n);default:return t}},getLanguage:function(e){for(;e&&!t.test(e.className);)e=e.parentElement;return e?(e.className.match(t)||[,"none"])[1].toLowerCase():"none"},currentScript:function(){if("undefined"==typeof document)return null;if("currentScript"in document)return document.currentScript;try{throw new Error}catch(n){var e=(/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(n.stack)||[])[1];if(e){var t=document.getElementsByTagName("script");for(var r in t)if(t[r].src==e)return t[r]}return null}},isActive:function(e,t,r){for(var n="no-"+t;e;){var o=e.classList;if(o.contains(t))return!0;if(o.contains(n))return!1;e=e.parentElement}return!!r}},languages:{plain:n,plaintext:n,text:n,txt:n,extend:function(e,t){var r=o.util.clone(o.languages[e]);for(var n in t)r[n]=t[n];return r},insertBefore:function(e,t,r,n){var i=(n=n||o.languages)[e],a={};for(var s in i)if(i.hasOwnProperty(s)){if(s==t)for(var l in r)r.hasOwnProperty(l)&&(a[l]=r[l]);r.hasOwnProperty(s)||(a[s]=i[s])}var c=n[e];return n[e]=a,o.languages.DFS(o.languages,(function(t,r){r===c&&t!=e&&(this[t]=a)})),a},DFS:function e(t,r,n,i){i=i||{};var a=o.util.objId;for(var s in t)if(t.hasOwnProperty(s)){r.call(t,s,t[s],n||s);var l=t[s],c=o.util.type(l);"Object"!==c||i[a(l)]?"Array"!==c||i[a(l)]||(i[a(l)]=!0,e(l,r,s,i)):(i[a(l)]=!0,e(l,r,null,i))}}},plugins:{},highlightAll:function(e,t){o.highlightAllUnder(document,e,t)},highlightAllUnder:function(e,t,r){var n={callback:r,container:e,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};o.hooks.run("before-highlightall",n),n.elements=Array.prototype.slice.apply(n.container.querySelectorAll(n.selector)),o.hooks.run("before-all-elements-highlight",n);for(var i,a=0;i=n.elements[a++];)o.highlightElement(i,!0===t,n.callback)},highlightElement:function(r,n,i){var a=o.util.getLanguage(r),s=o.languages[a];r.className=r.className.replace(t,"").replace(/\s+/g," ")+" language-"+a;var l=r.parentElement;l&&"pre"===l.nodeName.toLowerCase()&&(l.className=l.className.replace(t,"").replace(/\s+/g," ")+" language-"+a);var c={element:r,language:a,grammar:s,code:r.textContent};function p(e){c.highlightedCode=e,o.hooks.run("before-insert",c),c.element.innerHTML=c.highlightedCode,o.hooks.run("after-highlight",c),o.hooks.run("complete",c),i&&i.call(c.element)}if(o.hooks.run("before-sanity-check",c),(l=c.element.parentElement)&&"pre"===l.nodeName.toLowerCase()&&!l.hasAttribute("tabindex")&&l.setAttribute("tabindex","0"),!c.code)return o.hooks.run("complete",c),void(i&&i.call(c.element));if(o.hooks.run("before-highlight",c),c.grammar)if(n&&e.Worker){var u=new Worker(o.filename);u.onmessage=function(e){p(e.data)},u.postMessage(JSON.stringify({language:c.language,code:c.code,immediateClose:!0}))}else p(o.highlight(c.code,c.grammar,c.language));else p(o.util.encode(c.code))},highlight:function(e,t,r){var n={code:e,grammar:t,language:r};return o.hooks.run("before-tokenize",n),n.tokens=o.tokenize(n.code,n.grammar),o.hooks.run("after-tokenize",n),i.stringify(o.util.encode(n.tokens),n.language)},tokenize:function(e,t){var r=t.rest;if(r){for(var n in r)t[n]=r[n];delete t.rest}var o=new l;return c(o,o.head,e),s(e,o,t,o.head,0),function(e){var t=[],r=e.head.next;for(;r!==e.tail;)t.push(r.value),r=r.next;return t}(o)},hooks:{all:{},add:function(e,t){var r=o.hooks.all;r[e]=r[e]||[],r[e].push(t)},run:function(e,t){var r=o.hooks.all[e];if(r&&r.length)for(var n,i=0;n=r[i++];)n(t)}},Token:i};function i(e,t,r,n){this.type=e,this.content=t,this.alias=r,this.length=0|(n||"").length}function a(e,t,r,n){e.lastIndex=t;var o=e.exec(r);if(o&&n&&o[1]){var i=o[1].length;o.index+=i,o[0]=o[0].slice(i)}return o}function s(e,t,r,n,l,u){for(var d in r)if(r.hasOwnProperty(d)&&r[d]){var h=r[d];h=Array.isArray(h)?h:[h];for(var f=0;f<h.length;++f){if(u&&u.cause==d+","+f)return;var m=h[f],y=m.inside,g=!!m.lookbehind,v=!!m.greedy,b=m.alias;if(v&&!m.pattern.global){var x=m.pattern.toString().match(/[imsuy]*$/)[0];m.pattern=RegExp(m.pattern.source,x+"g")}for(var w=m.pattern||m,$=n.next,A=l;$!==t.tail&&!(u&&A>=u.reach);A+=$.value.length,$=$.next){var k=$.value;if(t.length>e.length)return;if(!(k instanceof i)){var S,E=1;if(v){if(!(S=a(w,A,e,g)))break;var D=S.index,O=S.index+S[0].length,C=A;for(C+=$.value.length;D>=C;)C+=($=$.next).value.length;if(A=C-=$.value.length,$.value instanceof i)continue;for(var j=$;j!==t.tail&&(C<O||"string"==typeof j.value);j=j.next)E++,C+=j.value.length;E--,k=e.slice(A,C),S.index-=A}else if(!(S=a(w,0,k,g)))continue;D=S.index;var T=S[0],_=k.slice(0,D),F=k.slice(D+T.length),B=A+k.length;u&&B>u.reach&&(u.reach=B);var I=$.prev;if(_&&(I=c(t,I,_),A+=_.length),p(t,I,E),$=c(t,I,new i(d,y?o.tokenize(T,y):T,b,T)),F&&c(t,$,F),E>1){var P={cause:d+","+f,reach:B};s(e,t,r,$.prev,A,P),u&&P.reach>u.reach&&(u.reach=P.reach)}}}}}}function l(){var e={value:null,prev:null,next:null},t={value:null,prev:e,next:null};e.next=t,this.head=e,this.tail=t,this.length=0}function c(e,t,r){var n=t.next,o={value:r,prev:t,next:n};return t.next=o,n.prev=o,e.length++,o}function p(e,t,r){for(var n=t.next,o=0;o<r&&n!==e.tail;o++)n=n.next;t.next=n,n.prev=t,e.length-=o}if(e.Prism=o,i.stringify=function e(t,r){if("string"==typeof t)return t;if(Array.isArray(t)){var n="";return t.forEach((function(t){n+=e(t,r)})),n}var i={type:t.type,content:e(t.content,r),tag:"span",classes:["token",t.type],attributes:{},language:r},a=t.alias;a&&(Array.isArray(a)?Array.prototype.push.apply(i.classes,a):i.classes.push(a)),o.hooks.run("wrap",i);var s="";for(var l in i.attributes)s+=" "+l+'="'+(i.attributes[l]||"").replace(/"/g,"&quot;")+'"';return"<"+i.tag+' class="'+i.classes.join(" ")+'"'+s+">"+i.content+"</"+i.tag+">"},!e.document)return e.addEventListener?(o.disableWorkerMessageHandler||e.addEventListener("message",(function(t){var r=JSON.parse(t.data),n=r.language,i=r.code,a=r.immediateClose;e.postMessage(o.highlight(i,o.languages[n],n)),a&&e.close()}),!1),o):o;var u=o.util.currentScript();function d(){o.manual||o.highlightAll()}if(u&&(o.filename=u.src,u.hasAttribute("data-manual")&&(o.manual=!0)),!o.manual){var h=document.readyState;"loading"===h||"interactive"===h&&u&&u.defer?document.addEventListener("DOMContentLoaded",d):window.requestAnimationFrame?window.requestAnimationFrame(d):window.setTimeout(d,16)}return o}("undefined"!=typeof window?window:"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?self:{});e.exports&&(e.exports=n),void 0!==r.g&&(r.g.Prism=n),n.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]},n.languages.markup.tag.inside["attr-value"].inside.entity=n.languages.markup.entity,n.languages.markup.doctype.inside["internal-subset"].inside=n.languages.markup,n.hooks.add("wrap",(function(e){"entity"===e.type&&(e.attributes.title=e.content.replace(/&amp;/,"&"))})),Object.defineProperty(n.languages.markup.tag,"addInlined",{value:function(e,t){var r={};r["language-"+t]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:n.languages[t]},r.cdata=/^<!\[CDATA\[|\]\]>$/i;var o={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:r}};o["language-"+t]={pattern:/[\s\S]+/,inside:n.languages[t]};var i={};i[e]={pattern:RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g,(function(){return e})),"i"),lookbehind:!0,greedy:!0,inside:o},n.languages.insertBefore("markup","cdata",i)}}),Object.defineProperty(n.languages.markup.tag,"addAttribute",{value:function(e,t){n.languages.markup.tag.inside["special-attr"].push({pattern:RegExp(/(^|["'\s])/.source+"(?:"+e+")"+/\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,"i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[t,"language-"+t],inside:n.languages[t]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}}),n.languages.html=n.languages.markup,n.languages.mathml=n.languages.markup,n.languages.svg=n.languages.markup,n.languages.xml=n.languages.extend("markup",{}),n.languages.ssml=n.languages.xml,n.languages.atom=n.languages.xml,n.languages.rss=n.languages.xml,function(e){var t=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;e.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:/@[\w-](?:[^;{\s]|\s+(?![\s{]))*(?:;|(?=\s*\{))/,inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+t.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+t.source+"$"),alias:"url"}}},selector:{pattern:RegExp("(^|[{}\\s])[^{}\\s](?:[^{};\"'\\s]|\\s+(?![\\s{])|"+t.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:t,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},e.languages.css.atrule.inside.rest=e.languages.css;var r=e.languages.markup;r&&(r.tag.addInlined("style","css"),r.tag.addAttribute("style","css"))}(n),n.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|interface|extends|implements|trait|instanceof|new)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,boolean:/\b(?:true|false)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/},n.languages.javascript=n.languages.extend("clike",{"class-name":[n.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:prototype|constructor))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:/\b(?:(?:0[xX](?:[\dA-Fa-f](?:_[\dA-Fa-f])?)+|0[bB](?:[01](?:_[01])?)+|0[oO](?:[0-7](?:_[0-7])?)+)n?|(?:\d(?:_\d)?)+n|NaN|Infinity)\b|(?:\b(?:\d(?:_\d)?)+\.?(?:\d(?:_\d)?)*|\B\.(?:\d(?:_\d)?)+)(?:[Ee][+-]?(?:\d(?:_\d)?)+)?/,operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/}),n.languages.javascript["class-name"][0].pattern=/(\b(?:class|interface|extends|implements|instanceof|new)\s+)[\w.\\]+/,n.languages.insertBefore("javascript","keyword",{regex:{pattern:/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)\/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/,lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:n.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:n.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:n.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:n.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:n.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),n.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:n.languages.javascript}},string:/[\s\S]+/}}}),n.languages.markup&&(n.languages.markup.tag.addInlined("script","javascript"),n.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,"javascript")),n.languages.js=n.languages.javascript,function(){if(void 0!==n&&"undefined"!=typeof document){Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector);var e={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"},t="data-src-status",r="loading",o="loaded",i='pre[data-src]:not([data-src-status="loaded"]):not([data-src-status="loading"])',a=/\blang(?:uage)?-([\w-]+)\b/i;n.hooks.add("before-highlightall",(function(e){e.selector+=", "+i})),n.hooks.add("before-sanity-check",(function(a){var s=a.element;if(s.matches(i)){a.code="",s.setAttribute(t,r);var c=s.appendChild(document.createElement("CODE"));c.textContent="Loading…";var p=s.getAttribute("data-src"),u=a.language;if("none"===u){var d=(/\.(\w+)$/.exec(p)||[,"none"])[1];u=e[d]||d}l(c,u),l(s,u);var h=n.plugins.autoloader;h&&h.loadLanguages(u);var f=new XMLHttpRequest;f.open("GET",p,!0),f.onreadystatechange=function(){var e,r;4==f.readyState&&(f.status<400&&f.responseText?(s.setAttribute(t,o),c.textContent=f.responseText,n.highlightElement(c)):(s.setAttribute(t,"failed"),f.status>=400?c.textContent=(e=f.status,r=f.statusText,"✖ Error "+e+" while fetching file: "+r):c.textContent="✖ Error: File does not exist or is empty"))},f.send(null)}})),n.plugins.fileHighlight={highlight:function(e){for(var t,r=(e||document).querySelectorAll(i),o=0;t=r[o++];)n.highlightElement(t)}};var s=!1;n.fileHighlight=function(){s||(console.warn("Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead."),s=!0),n.plugins.fileHighlight.highlight.apply(this,arguments)}}function l(e,t){var r=e.className;r=r.replace(a," ")+" language-"+t,e.className=r.replace(/\s+/g," ").trim()}}()}},n={};function o(e){var t=n[e];if(void 0!==t){if(void 0!==t.error)throw t.error;return t.exports}var i=n[e]={exports:{}};try{var a={id:e,module:i,factory:r[e],require:o};o.i.forEach((function(e){e(a)})),i=a.module,a.factory.call(i.exports,i,i.exports,a.require)}catch(e){throw i.error=e,e}return i.exports}o.m=r,o.c=n,o.i=[],o.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return o.d(t,{a:t}),t},o.d=(e,t)=>{for(var r in t)o.o(t,r)&&!o.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},o.hu=e=>e+"."+o.h()+".hot-update.js",o.hmrF=()=>"main."+o.h()+".hot-update.json",o.h=()=>"a0661a88d2a40cf25b3b",o.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),e={},t="rapidoc:",o.l=(r,n,i,a)=>{if(e[r])e[r].push(n);else{var s,l;if(void 0!==i)for(var c=document.getElementsByTagName("script"),p=0;p<c.length;p++){var u=c[p];if(u.getAttribute("src")==r||u.getAttribute("data-webpack")==t+i){s=u;break}}s||(l=!0,(s=document.createElement("script")).charset="utf-8",s.timeout=120,o.nc&&s.setAttribute("nonce",o.nc),s.setAttribute("data-webpack",t+i),s.src=r),e[r]=[n];var d=(t,n)=>{s.onerror=s.onload=null,clearTimeout(h);var o=e[r];if(delete e[r],s.parentNode&&s.parentNode.removeChild(s),o&&o.forEach((e=>e(n))),t)return t(n)},h=setTimeout(d.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=d.bind(null,s.onerror),s.onload=d.bind(null,s.onload),l&&document.head.appendChild(s)}},(()=>{var e,t,r,n,i={},a=o.c,s=[],l=[],c="idle";function p(e){c=e;for(var t=[],r=0;r<l.length;r++)t[r]=l[r].call(null,e);return Promise.all(t)}function u(e){if(0===t.length)return e();var r=t;return t=[],Promise.all(r).then((function(){return u(e)}))}function d(e){if("idle"!==c)throw new Error("check() is only allowed in idle status");return p("check").then(o.hmrM).then((function(n){return n?p("prepare").then((function(){var i=[];return t=[],r=[],Promise.all(Object.keys(o.hmrC).reduce((function(e,t){return o.hmrC[t](n.c,n.r,n.m,e,r,i),e}),[])).then((function(){return u((function(){return e?f(e):p("ready").then((function(){return i}))}))}))})):p(m()?"ready":"idle").then((function(){return null}))}))}function h(e){return"ready"!==c?Promise.resolve().then((function(){throw new Error("apply() is only allowed in ready status")})):f(e)}function f(e){e=e||{},m();var t=r.map((function(t){return t(e)}));r=void 0;var o=t.map((function(e){return e.error})).filter(Boolean);if(o.length>0)return p("abort").then((function(){throw o[0]}));var i=p("dispose");t.forEach((function(e){e.dispose&&e.dispose()}));var a,s=p("apply"),l=function(e){a||(a=e)},c=[];return t.forEach((function(e){if(e.apply){var t=e.apply(l);if(t)for(var r=0;r<t.length;r++)c.push(t[r])}})),Promise.all([i,s]).then((function(){return a?p("fail").then((function(){throw a})):n?f(e).then((function(e){return c.forEach((function(t){e.indexOf(t)<0&&e.push(t)})),e})):p("idle").then((function(){return c}))}))}function m(){if(n)return r||(r=[]),Object.keys(o.hmrI).forEach((function(e){n.forEach((function(t){o.hmrI[e](t,r)}))})),n=void 0,!0}o.hmrD=i,o.i.push((function(f){var m,y,g,v,b=f.module,x=function(r,n){var o=a[n];if(!o)return r;var i=function(t){if(o.hot.active){if(a[t]){var i=a[t].parents;-1===i.indexOf(n)&&i.push(n)}else s=[n],e=t;-1===o.children.indexOf(t)&&o.children.push(t)}else console.warn("[HMR] unexpected require("+t+") from disposed module "+n),s=[];return r(t)},l=function(e){return{configurable:!0,enumerable:!0,get:function(){return r[e]},set:function(t){r[e]=t}}};for(var d in r)Object.prototype.hasOwnProperty.call(r,d)&&"e"!==d&&Object.defineProperty(i,d,l(d));return i.e=function(e){return function(e){switch(c){case"ready":return p("prepare"),t.push(e),u((function(){return p("ready")})),e;case"prepare":return t.push(e),e;default:return e}}(r.e(e))},i}(f.require,f.id);b.hot=(m=f.id,y=b,v={_acceptedDependencies:{},_acceptedErrorHandlers:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_selfInvalidated:!1,_disposeHandlers:[],_main:g=e!==m,_requireSelf:function(){s=y.parents.slice(),e=g?void 0:m,o(m)},active:!0,accept:function(e,t,r){if(void 0===e)v._selfAccepted=!0;else if("function"==typeof e)v._selfAccepted=e;else if("object"==typeof e&&null!==e)for(var n=0;n<e.length;n++)v._acceptedDependencies[e[n]]=t||function(){},v._acceptedErrorHandlers[e[n]]=r;else v._acceptedDependencies[e]=t||function(){},v._acceptedErrorHandlers[e]=r},decline:function(e){if(void 0===e)v._selfDeclined=!0;else if("object"==typeof e&&null!==e)for(var t=0;t<e.length;t++)v._declinedDependencies[e[t]]=!0;else v._declinedDependencies[e]=!0},dispose:function(e){v._disposeHandlers.push(e)},addDisposeHandler:function(e){v._disposeHandlers.push(e)},removeDisposeHandler:function(e){var t=v._disposeHandlers.indexOf(e);t>=0&&v._disposeHandlers.splice(t,1)},invalidate:function(){switch(this._selfInvalidated=!0,c){case"idle":r=[],Object.keys(o.hmrI).forEach((function(e){o.hmrI[e](m,r)})),p("ready");break;case"ready":Object.keys(o.hmrI).forEach((function(e){o.hmrI[e](m,r)}));break;case"prepare":case"check":case"dispose":case"apply":(n=n||[]).push(m)}},check:d,apply:h,status:function(e){if(!e)return c;l.push(e)},addStatusHandler:function(e){l.push(e)},removeStatusHandler:function(e){var t=l.indexOf(e);t>=0&&l.splice(t,1)},data:i[m]},e=void 0,v),b.parents=s,b.children=[],s=[],f.require=x})),o.hmrC={},o.hmrI={}})(),o.p="",(()=>{var e,t,r,n,i=o.hmrS_jsonp=o.hmrS_jsonp||{179:0},a={};function s(e){return new Promise(((t,r)=>{a[e]=t;var n=o.p+o.hu(e),i=new Error;o.l(n,(t=>{if(a[e]){a[e]=void 0;var n=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;i.message="Loading hot update chunk "+e+" failed.\n("+n+": "+o+")",i.name="ChunkLoadError",i.type=n,i.request=o,r(i)}}))}))}function l(a){function s(e){for(var t=[e],r={},n=t.map((function(e){return{chain:[e],id:e}}));n.length>0;){var i=n.pop(),a=i.id,s=i.chain,c=o.c[a];if(c&&(!c.hot._selfAccepted||c.hot._selfInvalidated)){if(c.hot._selfDeclined)return{type:"self-declined",chain:s,moduleId:a};if(c.hot._main)return{type:"unaccepted",chain:s,moduleId:a};for(var p=0;p<c.parents.length;p++){var u=c.parents[p],d=o.c[u];if(d){if(d.hot._declinedDependencies[a])return{type:"declined",chain:s.concat([u]),moduleId:a,parentId:u};-1===t.indexOf(u)&&(d.hot._acceptedDependencies[a]?(r[u]||(r[u]=[]),l(r[u],[a])):(delete r[u],t.push(u),n.push({chain:s.concat([u]),id:u})))}}}}return{type:"accepted",moduleId:e,outdatedModules:t,outdatedDependencies:r}}function l(e,t){for(var r=0;r<t.length;r++){var n=t[r];-1===e.indexOf(n)&&e.push(n)}}o.f&&delete o.f.jsonpHmr,e=void 0;var c={},p=[],u={},d=function(e){console.warn("[HMR] unexpected require("+e.id+") to disposed module")};for(var h in t)if(o.o(t,h)){var f,m=t[h],y=!1,g=!1,v=!1,b="";switch((f=m?s(h):{type:"disposed",moduleId:h}).chain&&(b="\nUpdate propagation: "+f.chain.join(" -> ")),f.type){case"self-declined":a.onDeclined&&a.onDeclined(f),a.ignoreDeclined||(y=new Error("Aborted because of self decline: "+f.moduleId+b));break;case"declined":a.onDeclined&&a.onDeclined(f),a.ignoreDeclined||(y=new Error("Aborted because of declined dependency: "+f.moduleId+" in "+f.parentId+b));break;case"unaccepted":a.onUnaccepted&&a.onUnaccepted(f),a.ignoreUnaccepted||(y=new Error("Aborted because "+h+" is not accepted"+b));break;case"accepted":a.onAccepted&&a.onAccepted(f),g=!0;break;case"disposed":a.onDisposed&&a.onDisposed(f),v=!0;break;default:throw new Error("Unexception type "+f.type)}if(y)return{error:y};if(g)for(h in u[h]=m,l(p,f.outdatedModules),f.outdatedDependencies)o.o(f.outdatedDependencies,h)&&(c[h]||(c[h]=[]),l(c[h],f.outdatedDependencies[h]));v&&(l(p,[f.moduleId]),u[h]=d)}t=void 0;for(var x,w=[],$=0;$<p.length;$++){var A=p[$],k=o.c[A];k&&(k.hot._selfAccepted||k.hot._main)&&u[A]!==d&&!k.hot._selfInvalidated&&w.push({module:A,require:k.hot._requireSelf,errorHandler:k.hot._selfAccepted})}return{dispose:function(){var e;r.forEach((function(e){delete i[e]})),r=void 0;for(var t,n=p.slice();n.length>0;){var a=n.pop(),s=o.c[a];if(s){var l={},u=s.hot._disposeHandlers;for($=0;$<u.length;$++)u[$].call(null,l);for(o.hmrD[a]=l,s.hot.active=!1,delete o.c[a],delete c[a],$=0;$<s.children.length;$++){var d=o.c[s.children[$]];d&&((e=d.parents.indexOf(a))>=0&&d.parents.splice(e,1))}}}for(var h in c)if(o.o(c,h)&&(s=o.c[h]))for(x=c[h],$=0;$<x.length;$++)t=x[$],(e=s.children.indexOf(t))>=0&&s.children.splice(e,1)},apply:function(e){for(var t in u)o.o(u,t)&&(o.m[t]=u[t]);for(var r=0;r<n.length;r++)n[r](o);for(var i in c)if(o.o(c,i)){var s=o.c[i];if(s){x=c[i];for(var l=[],d=[],h=[],f=0;f<x.length;f++){var m=x[f],y=s.hot._acceptedDependencies[m],g=s.hot._acceptedErrorHandlers[m];if(y){if(-1!==l.indexOf(y))continue;l.push(y),d.push(g),h.push(m)}}for(var v=0;v<l.length;v++)try{l[v].call(null,x)}catch(t){if("function"==typeof d[v])try{d[v](t,{moduleId:i,dependencyId:h[v]})}catch(r){a.onErrored&&a.onErrored({type:"accept-error-handler-errored",moduleId:i,dependencyId:h[v],error:r,originalError:t}),a.ignoreErrored||(e(r),e(t))}else a.onErrored&&a.onErrored({type:"accept-errored",moduleId:i,dependencyId:h[v],error:t}),a.ignoreErrored||e(t)}}}for(var b=0;b<w.length;b++){var $=w[b],A=$.module;try{$.require(A)}catch(t){if("function"==typeof $.errorHandler)try{$.errorHandler(t,{moduleId:A,module:o.c[A]})}catch(r){a.onErrored&&a.onErrored({type:"self-accept-error-handler-errored",moduleId:A,error:r,originalError:t}),a.ignoreErrored||(e(r),e(t))}else a.onErrored&&a.onErrored({type:"self-accept-errored",moduleId:A,error:t}),a.ignoreErrored||e(t)}}return p}}}self.webpackHotUpdaterapidoc=(e,r,i)=>{for(var s in r)o.o(r,s)&&(t[s]=r[s]);i&&n.push(i),a[e]&&(a[e](),a[e]=void 0)},o.hmrI.jsonp=function(e,i){t||(t={},n=[],r=[],i.push(l)),o.o(t,e)||(t[e]=o.m[e])},o.hmrC.jsonp=function(a,c,p,u,d,h){d.push(l),e={},r=c,t=p.reduce((function(e,t){return e[t]=!1,e}),{}),n=[],a.forEach((function(t){o.o(i,t)&&void 0!==i[t]&&(u.push(s(t)),e[t]=!0)})),o.f&&(o.f.jsonpHmr=function(t,r){e&&!o.o(e,t)&&o.o(i,t)&&void 0!==i[t]&&(r.push(s(t)),e[t]=!0)})},o.hmrM=()=>{if("undefined"==typeof fetch)throw new Error("No browser support: need fetch API");return fetch(o.p+o.hmrF()).then((e=>{if(404!==e.status){if(!e.ok)throw new Error("Failed to fetch update manifest "+e.statusText);return e.json()}}))}})();o(962)})();
//# sourceMappingURL=rapidoc-min.js.map