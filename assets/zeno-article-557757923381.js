
          function znReady(fn) {
            if (document.readyState != 'loading'){
              fn();
            } else {
              document.addEventListener('DOMContentLoaded', fn);
            }
          }

          window.znStorage={_storage:new WeakMap,put:function(e,t,n){this._storage.has(e)||this._storage.set(e,new Map),this._storage.get(e).set(t,n)},get:function(e,t){return this._storage.get(e).get(t)},has:function(e,t){return this._storage.has(e)&&this._storage.get(e).has(t)},remove:function(e,t){var n=this._storage.get(e).delete(t);return 0===!this._storage.get(e).size&&this._storage.delete(e),n}};
          
          
          Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector),Element.prototype.closest||(Element.prototype.closest=function(e){var t=this;do{if(Element.prototype.matches.call(t,e))return t;t=t.parentElement||t.parentNode}while(null!==t&&1===t.nodeType);return null});
          window.znRespondToVisibility=function(e,t){var n={root:null,threshold:.01},a=new IntersectionObserver((function(e,n){var a=e.map((function(e){return e.isIntersecting})),i=a.includes(!0);t(i)}),n);a.observe(e)};
        ; znReady((function(){document.getElementById("znid-530242030345"),document.querySelector(".zn-container.editing"),document.getElementById("znid-508510883321"),document.querySelector(".zn-container.editing"),function(){for(var n=0;n<4;n++){if(!document.getElementById("znid-057995630116-"+n))break;!function(){var e=document.getElementById("znid-057995630116-"+n),t=e.querySelectorAll("img");window.znStorage.put(e,"updateImage",(function(n){t.forEach((function(e){e.src=n}))}))}()}}(),function(){for(var n=0;n<4;n++){if(!document.getElementById("znid-620862058193-"+n))break}}(),document.getElementById("znid-368705119596"),document.querySelector(".zn-container.editing"),document.getElementById("znid-734966055973"),document.querySelector(".zn-container.editing"),function(){for(var n=0;n<4;n++){if(!document.getElementById("znid-887601846296-"+n))break;!function(){var e=document.getElementById("znid-887601846296-"+n),t=e.querySelectorAll("img");window.znStorage.put(e,"updateImage",(function(n){t.forEach((function(e){e.src=n}))}))}()}}(),function(){for(var n=0;n<4;n++){if(!document.getElementById("znid-938199001642-"+n))break}}(),document.getElementById("znid-093466842426"),document.querySelector(".zn-container.editing"),document.getElementById("znid-091905835942"),document.querySelector(".zn-container.editing"),function(){var n=document.getElementById("znid-282846998287").querySelector(":scope > .zn-element > .zn-banner"),e="/blogs/food-1/preacher-cookies";function t(n,e){try{var t=new URL(n),o=new URL(e);if(t.hostname!=o.hostname)return!1}catch(n){}return!0}null==document.querySelector(".zn-container.editing")&&(n.style.cursor="pointer",n.addEventListener("click",(function(){var n=window.location.origin,o=window.Shopify&&window.Shopify.shop?"https://"+window.Shopify.shop:"";t(e,n)||t(e,o)?window.location.href=e:window.open(e,"_blank")})))}(),function(){var n=document.getElementById("znid-641076263068"),e="/products/zebrawood-thumb-piano";function t(n,e){try{var t=new URL(n),o=new URL(e);if(t.hostname!=o.hostname)return!1}catch(n){}return!0}if(null==document.querySelector(".zn-container.editing")){var o=window.location.origin,i=window.Shopify&&window.Shopify.shop?"https://"+window.Shopify.shop:"";t(e,o)||t(e,i)||n.querySelector("a").setAttribute("target","_blank")}}(),function(){var n=document.getElementById("znid-309511009947"),e="/products/half-shell-thumb-piano";function t(n,e){try{var t=new URL(n),o=new URL(e);if(t.hostname!=o.hostname)return!1}catch(n){}return!0}if(null==document.querySelector(".zn-container.editing")){var o=window.location.origin,i=window.Shopify&&window.Shopify.shop?"https://"+window.Shopify.shop:"";t(e,o)||t(e,i)||n.querySelector("a").setAttribute("target","_blank")}}(),document.body.style.removeProperty("background-color"),document.querySelector(".zn-container.editing"),function(){document.querySelector(".zn-container.editing");var n=document.body;e();function e(){var e=n.querySelector(".zn-announcement-bar");e&&e.parentNode.removeChild(e)}}()}));