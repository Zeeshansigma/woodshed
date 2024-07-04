
          function znReady(fn) {
            if (document.readyState != 'loading'){
              fn();
            } else {
              document.addEventListener('DOMContentLoaded', fn);
            }
          }

          window.znStorage={_storage:new WeakMap,put:function(e,t,o){this._storage.has(e)||this._storage.set(e,new Map),this._storage.get(e).set(t,o)},get:function(e,t){return this._storage.get(e).get(t)},has:function(e,t){return this._storage.has(e)&&this._storage.get(e).has(t)},remove:function(e,t){var o=this._storage.get(e).delete(t);return 0===!this._storage.get(e).size&&this._storage.delete(e),o}};
          
          
          Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector),Element.prototype.closest||(Element.prototype.closest=function(e){var t=this;do{if(Element.prototype.matches.call(t,e))return t;t=t.parentElement||t.parentNode}while(null!==t&&1===t.nodeType);return null});
          window.znRespondToVisibility=function(e,t){var o={root:null,threshold:.01},a=new IntersectionObserver((function(e,o){var a=e.map(e=>e.isIntersecting),n=a.includes(!0);t(n)}),o);a.observe(e)};
        ; znReady((function(){!function(){var e=document.getElementById("znid-699437663767"),n="/products/lark-ascending";function o(e,n){try{var o=new URL(e),t=new URL(n);if(o.hostname!=t.hostname)return!1}catch(e){}return!0}if(null==document.querySelector(".zn-container.editing")){var t=window.location.origin,r=window.Shopify&&window.Shopify.shop?"https://"+window.Shopify.shop:"";o(n,t)||o(n,r)||e.querySelector("a").setAttribute("target","_blank")}}(),function(){for(var e=0;e<8;e++){if(!document.getElementById("znid-939724037571-"+e))break;!function(){var n=document.getElementById("znid-939724037571-"+e),o=n.querySelectorAll("img"),t=n.querySelector(".zn-product-video");window.znStorage.put(n,"updateImage",(function(e){o.forEach((function(n){n.src=e})),t&&(t.innerHTML="")})),window.znStorage.put(n,"updateVideo",(function(e){if(t){var n="custom";e.includes("youtube.com")||e.includes("youtu.be")?n="youtube":e.includes("vimeo.com")&&(n="vimeo"),t.innerHTML="custom"!=n?`\n              <iframe\n                width="640" \n                height="360"\n                src="${e}?controls=true&modestbranding=true&playsinline=true&rel=false&byline=false&title=false"  \n                frameborder="0" \n                allowfullscreen>\n              </iframe>\n            `:`<video width="100%" src="${e}" controls></video>`}}))}()}}(),function(){for(var e=0;e<8;e++){if(!document.getElementById("znid-637469069015-"+e))break}}(),function(){for(var e=0;e<8;e++){if(!document.getElementById("znid-645431170389-"+e))break;!function(){var n=document.getElementById("znid-645431170389-"+e),o=n.querySelectorAll("img"),t=n.querySelector(".zn-product-video");window.znStorage.put(n,"updateImage",(function(e){o.forEach((function(n){n.src=e})),t&&(t.innerHTML="")})),window.znStorage.put(n,"updateVideo",(function(e){if(t){var n="custom";e.includes("youtube.com")||e.includes("youtu.be")?n="youtube":e.includes("vimeo.com")&&(n="vimeo"),t.innerHTML="custom"!=n?`\n              <iframe\n                width="640" \n                height="360"\n                src="${e}?controls=true&modestbranding=true&playsinline=true&rel=false&byline=false&title=false"  \n                frameborder="0" \n                allowfullscreen>\n              </iframe>\n            `:`<video width="100%" src="${e}" controls></video>`}}))}()}}(),function(){for(var e=0;e<8;e++){if(!document.getElementById("znid-090203410592-"+e))break}}(),function(){var e=document.getElementById("znid-781789297904").querySelector(":scope > .zn-element > .zn-banner"),n="/blogs/art-amp-lit/how-silas-house-turned-crushing-grief-into-a-lauded-novel";function o(e,n){try{var o=new URL(e),t=new URL(n);if(o.hostname!=t.hostname)return!1}catch(e){}return!0}null==document.querySelector(".zn-container.editing")&&(e.style.cursor="pointer",e.addEventListener("click",(function(){var e=window.location.origin,t=window.Shopify&&window.Shopify.shop?"https://"+window.Shopify.shop:"";o(n,e)||o(n,t)?window.location.href=n:window.open(n,"_blank")})))}(),function(){var e=document.getElementById("znid-714993698223"),n="/products/johnny-cash-forever-words-the-unknown-poems";function o(e,n){try{var o=new URL(e),t=new URL(n);if(o.hostname!=t.hostname)return!1}catch(e){}return!0}if(null==document.querySelector(".zn-container.editing")){var t=window.location.origin,r=window.Shopify&&window.Shopify.shop?"https://"+window.Shopify.shop:"";o(n,t)||o(n,r)||e.querySelector("a").setAttribute("target","_blank")}}(),function(){var e=document.getElementById("znid-306618522322"),n="/products/the-cash-and-carter-family-cookbook-recipes-and-recollections-from-johnny-and-junes-table";function o(e,n){try{var o=new URL(e),t=new URL(n);if(o.hostname!=t.hostname)return!1}catch(e){}return!0}if(null==document.querySelector(".zn-container.editing")){var t=window.location.origin,r=window.Shopify&&window.Shopify.shop?"https://"+window.Shopify.shop:"";o(n,t)||o(n,r)||e.querySelector("a").setAttribute("target","_blank")}}(),document.body.style.removeProperty("background-color"),document.querySelectorAll(".page-top, #module-content").forEach((function(e){e.style.removeProperty("background-color")})),document.querySelector(".zn-container.editing"),function(){document.querySelector(".zn-container.editing");var e=document.body;n();function n(){var n=e.querySelector(".zn-announcement-bar");n&&n.parentNode.removeChild(n)}}()}));