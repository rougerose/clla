var e=!1;if("undefined"!=typeof window){var t={get passive(){e=!0}};window.addEventListener("testPassive",null,t),window.removeEventListener("testPassive",null,t)}var n="undefined"!=typeof window&&window.navigator&&window.navigator.platform&&(/iP(ad|hone|od)/.test(window.navigator.platform)||"MacIntel"===window.navigator.platform&&window.navigator.maxTouchPoints>1),o=[],i=!1,s=-1,r=void 0,a=void 0,l=void 0,d=function(e){return o.some((function(t){return!(!t.options.allowTouchMove||!t.options.allowTouchMove(e))}))},u=function(e){var t=e||window.event;return!!d(t.target)||(t.touches.length>1||(t.preventDefault&&t.preventDefault(),!1))},c=function(t,c){if(t){if(!o.some((function(e){return e.targetElement===t}))){var h={targetElement:t,options:c||{}};o=[].concat(function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}(o),[h]),n?window.requestAnimationFrame((function(){if(void 0===a){a={position:document.body.style.position,top:document.body.style.top,left:document.body.style.left};var e=window,t=e.scrollY,n=e.scrollX,o=e.innerHeight;document.body.style.position="fixed",document.body.style.top=-t,document.body.style.left=-n,setTimeout((function(){return window.requestAnimationFrame((function(){var e=o-window.innerHeight;e&&t>=o&&(document.body.style.top=-(t+e))}))}),300)}})):function(e){if(void 0===l){var t=!!e&&!0===e.reserveScrollBarGap,n=window.innerWidth-document.documentElement.clientWidth;if(t&&n>0){var o=parseInt(window.getComputedStyle(document.body).getPropertyValue("padding-right"),10);l=document.body.style.paddingRight,document.body.style.paddingRight=o+n+"px"}}void 0===r&&(r=document.body.style.overflow,document.body.style.overflow="hidden")}(c),n&&(t.ontouchstart=function(e){1===e.targetTouches.length&&(s=e.targetTouches[0].clientY)},t.ontouchmove=function(e){1===e.targetTouches.length&&function(e,t){var n=e.targetTouches[0].clientY-s;!d(e.target)&&(t&&0===t.scrollTop&&n>0||function(e){return!!e&&e.scrollHeight-e.scrollTop<=e.clientHeight}(t)&&n<0?u(e):e.stopPropagation())}(e,t)},i||(document.addEventListener("touchmove",u,e?{passive:!1}:void 0),i=!0))}}else console.error("disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices.")},h=function(t){t?(o=o.filter((function(e){return e.targetElement!==t})),n&&(t.ontouchstart=null,t.ontouchmove=null,i&&0===o.length&&(document.removeEventListener("touchmove",u,e?{passive:!1}:void 0),i=!1)),n?function(){if(void 0!==a){var e=-parseInt(document.body.style.top,10),t=-parseInt(document.body.style.left,10);document.body.style.position=a.position,document.body.style.top=a.top,document.body.style.left=a.left,window.scrollTo(t,e),a=void 0}}():(void 0!==l&&(document.body.style.paddingRight=l,l=void 0),void 0!==r&&(document.body.style.overflow=r,r=void 0))):console.error("enableBodyScroll unsuccessful - targetElement must be provided when calling enableBodyScroll on IOS devices.")};class m extends HTMLElement{constructor(){super();const e=this;this.state=new Proxy({status:"open",enabled:!1},{set(t,n,o){const i=t[n];return t[n]=o,i!==o&&e.processStateChange(),t}})}get maxWidth(){return parseInt(this.getAttribute("max-width")||9999,10)}connectedCallback(){this.initialMarkup=this.innerHTML,this.render();new ResizeObserver((e=>{const{contentRect:t}=e[0];this.state.enabled=t.width<=this.maxWidth})).observe(this.parentNode)}render(){this.innerHTML=`\n      <div class="burger-menu" data-element="burger-root">\n        <button class="burger-menu__trigger" data-element="burger-menu-trigger" type="button" aria-label="Ouvrir le menu">\n          <span class="burger-menu__bar" aria-hidden="true"></span>\n        </button>\n        <div class="burger-menu__panel" data-element="burger-menu-panel">\n          ${this.initialMarkup}\n        </div>\n      </div>\n    `,this.postRender()}postRender(){var e;if(this.trigger=this.querySelector('[data-element="burger-menu-trigger"]'),this.panel=this.querySelector('[data-element="burger-menu-panel"]'),this.root=this.querySelector('[data-element="burger-root"]'),this.focusableElements=(e=this)?e.querySelectorAll('button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"]):not([disabled]), details:not([disabled]), summary:not(:disabled)'):(console.warn("You need to pass a parent HTMLElement"),[]),this.trigger&&this.panel)return this.toggle(),this.trigger.addEventListener("click",(e=>{e.preventDefault(),this.toggle()})),void document.addEventListener("focusin",(()=>{this.contains(document.activeElement)||this.toggle("closed")}));this.innerHTML=this.initialMarkup}toggle(e){if(e){if(this.state.status===e)return;this.state.status=e}else this.state.status="closed"===this.state.status?"open":"closed"}processStateChange(){switch(this.root.setAttribute("status",this.state.status),this.root.setAttribute("enabled",this.state.enabled?"true":"false"),this.manageFocus(),this.state.status){case"closed":this.trigger.setAttribute("aria-expanded","false"),this.trigger.setAttribute("aria-label","Open menu"),h(this);break;case"open":case"initial":this.trigger.setAttribute("aria-expanded","true"),this.trigger.setAttribute("aria-label","Close menu"),c(this)}}manageFocus(){if(this.state.enabled)switch(this.state.status){case"open":this.focusableElements.forEach((e=>e.removeAttribute("tabindex")));break;case"closed":[...this.focusableElements].filter((e=>"burger-menu-trigger"!==e.getAttribute("data-element"))).forEach((e=>e.setAttribute("tabindex","-1")))}else this.focusableElements.forEach((e=>e.removeAttribute("tabindex")))}}"customElements"in window&&customElements.define("burger-menu",m);const g=document.querySelectorAll(".card");g.length>0&&g.forEach((e=>{let t,n,o=e.querySelector(".card_title a");e.style.cursor="pointer",e.onmousedown=()=>t=+new Date,e.onmouseup=()=>{n=+new Date,n-t<200&&o.click()}}));
