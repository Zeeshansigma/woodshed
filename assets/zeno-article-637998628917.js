
          function znReady(fn) {
            if (document.readyState != 'loading'){
              fn();
            } else {
              document.addEventListener('DOMContentLoaded', fn);
            }
          }

          window.znStorage={_storage:new WeakMap,put:function(e,t,n){this._storage.has(e)||this._storage.set(e,new Map),this._storage.get(e).set(t,n)},get:function(e,t){return this._storage.get(e).get(t)},has:function(e,t){return this._storage.has(e)&&this._storage.get(e).has(t)},remove:function(e,t){var n=this._storage.get(e).delete(t);return 0===!this._storage.get(e).size&&this._storage.delete(e),n}};
          
          
          Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector),Element.prototype.closest||(Element.prototype.closest=function(e){var t=this;do{if(Element.prototype.matches.call(t,e))return t;t=t.parentElement||t.parentNode}while(null!==t&&1===t.nodeType);return null});
          window.znRespondToVisibility=function(e,t){var n={root:null,threshold:.01},a=new IntersectionObserver((function(e,n){var a=e.map((function(e){return e.isIntersecting})),o=a.includes(!0);t(o)}),n);a.observe(e)};
        ; znReady((function(){!function(){for(var e=0;e<12;e++){if(!document.getElementById("znid-717947930348-"+e))break;!function(){var n=document.getElementById("znid-717947930348-"+e),o=n.querySelectorAll("img"),t=n.querySelector(".zn-product-video");window.znStorage.put(n,"updateImage",(function(e){o.forEach((function(n){n.src=e})),t&&(t.innerHTML="")})),window.znStorage.put(n,"updateVideo",(function(e){if(t){var n="custom";e.includes("youtube.com")||e.includes("youtu.be")?n="youtube":e.includes("vimeo.com")&&(n="vimeo"),t.innerHTML="custom"!=n?'\n              <iframe\n                width="640" \n                height="360"\n                src="'.concat(e,'?controls=true&modestbranding=true&playsinline=true&rel=false&byline=false&title=false"  \n                frameborder="0" \n                allowfullscreen>\n              </iframe>\n            '):'<video width="100%" src="'.concat(e,'" controls></video>')}}))}()}}(),function(){for(var e=0;e<12;e++){if(!document.getElementById("znid-860799325528-"+e))break}}(),function(){for(var e=0;e<4;e++){if(!document.getElementById("znid-055906366189-"+e))break;!function(){var n=document.getElementById("znid-055906366189-"+e),o=n.querySelectorAll("img"),t=n.querySelector(".zn-product-video");window.znStorage.put(n,"updateImage",(function(e){o.forEach((function(n){n.src=e})),t&&(t.innerHTML="")})),window.znStorage.put(n,"updateVideo",(function(e){if(t){var n="custom";e.includes("youtube.com")||e.includes("youtu.be")?n="youtube":e.includes("vimeo.com")&&(n="vimeo"),t.innerHTML="custom"!=n?'\n              <iframe\n                width="640" \n                height="360"\n                src="'.concat(e,'?controls=true&modestbranding=true&playsinline=true&rel=false&byline=false&title=false"  \n                frameborder="0" \n                allowfullscreen>\n              </iframe>\n            '):'<video width="100%" src="'.concat(e,'" controls></video>')}}))}()}}(),function(){for(var e=0;e<4;e++){if(!document.getElementById("znid-334647069260-"+e))break}}(),function(){var e=document.getElementById("znid-977249853551").querySelector(":scope > .zn-element > .zn-banner"),n="/blogs/music/tyler-childers-goes-gay-but-not-the-way-you-think";function o(e,n){try{var o=new URL(e),t=new URL(n);if(o.hostname!=t.hostname)return!1}catch(e){}return!0}null==document.querySelector(".zn-container.editing")&&(e.style.cursor="pointer",e.addEventListener("click",(function(){var e=window.location.origin,t=window.Shopify&&window.Shopify.shop?"https://"+window.Shopify.shop:"";o(n,e)||o(n,t)?window.location.href=n:window.open(n,"_blank")})))}(),function(){var e=document.getElementById("znid-797022990576"),n="/products/hootin-and-ahollerin-sticker";function o(e,n){try{var o=new URL(e),t=new URL(n);if(o.hostname!=t.hostname)return!1}catch(e){}return!0}if(null==document.querySelector(".zn-container.editing")){var t=window.location.origin,r=window.Shopify&&window.Shopify.shop?"https://"+window.Shopify.shop:"";o(n,t)||o(n,r)||e.querySelector("a").setAttribute("target","_blank")}}(),function(){var e=document.getElementById("znid-179024680335"),n="/products/darn-tootin-sticker";function o(e,n){try{var o=new URL(e),t=new URL(n);if(o.hostname!=t.hostname)return!1}catch(e){}return!0}if(null==document.querySelector(".zn-container.editing")){var t=window.location.origin,r=window.Shopify&&window.Shopify.shop?"https://"+window.Shopify.shop:"";o(n,t)||o(n,r)||e.querySelector("a").setAttribute("target","_blank")}}(),document.body.style.removeProperty("background-color"),document.querySelectorAll(".page-top, #module-content").forEach((function(e){e.style.removeProperty("background-color")})),document.querySelector(".zn-container.editing"),function(){document.querySelector(".zn-container.editing");var e=document.body;n();function n(){var n=e.querySelector(".zn-announcement-bar");n&&n.parentNode.removeChild(n)}}()}));