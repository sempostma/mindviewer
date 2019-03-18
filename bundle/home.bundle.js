!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},n.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=34)}({10:function(e,t,n){"use strict";var r,o;e.exports=(r=function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),o.call(this),this.name=t;var n=this;this.ready=new Promise(function(e,r){var o=(window.indexedDB||window.mozIndexedDB||window.webkitIndexedDB).open(location.origin);o.onupgradeneeded=function(e){n.db=e.target.result,n.db.createObjectStore(t)},o.onsuccess=function(t){n.db=t.target.result,e()},o.onerror=function(e){n.db=e.target.result,r(e)}})},o=function(){var e=this;this.get=function(t){var n=e;return e.ready.then(function(){return new Promise(function(e,r){var o=n.getStore().get(t);o.onsuccess=function(t){e(t.target.result)},o.onerror=r})})},this.getStore=function(){var t=e.db.transaction([e.name],"readwrite");return t.onabort=function(e){var t,n,r;"QuotaExceededError"===e.target.error.name&&alert("Unable to store data because you've reached the maximum storage quota.",(r=!0,(n="cancelable")in(t={cancelable:!0})?Object.defineProperty(t,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[n]=r,t))},t.objectStore(e.name)},this.set=function(t,n){return new Promise(function(r,o){return e.ready.then(function(){var a=e.getStore().put(n,t);a.onsuccess=function(e){r()},a.onerror=o})})},this.delete=function(t){return e.ready.then(function(){return new Promise(function(n,r){var o=e.getStore().delete(t);o.onsuccess=n,o.onerror=r})})},this.deleteDatabase=function(){window.indexedDB.deleteDatabase(location.origin)}},r)},11:function(e,t,n){"use strict";var r=n(10),o=console.error;window.storageEstimateWrapper=function(){return"storage"in navigator&&"estimate"in navigator.storage?navigator.storage.estimate():"webkitTemporaryStorage"in navigator&&"queryUsageAndQuota"in navigator.webkitTemporaryStorage?new Promise(function(e,t){navigator.webkitTemporaryStorage.queryUsageAndQuota(function(t,n){e({usage:t,quota:n})},t)}):Promise.resolve({usage:NaN,quota:NaN})};var a=new r("data"),i=void 0,s=Promise.resolve(),c=function(){return new Promise(function(e,t){if(void 0!==i)e(i);else{var n=JSON.parse(localStorage.getItem("mindmaper-mindmaps-storage-v2")||"{}")||{},r=Object.keys(n).map(function(e){return Promise.resolve()});Promise.all(r).then(function(){e(i=n)}).catch(function(e){o(e),t()})}})},u=function e(){var t=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.putMindmap=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return s=new Promise(function(n,r){(t?Promise.resolve():s).then(function(){return c()}).then(function(t){return t[e.static.id]=e,i=t,a.set("mindmap-items-"+e.static.id,e).then(function(){var e=function(e){var t={};return Object.keys(e).forEach(function(n){var r=e[n];t[n]={static:{name:r.static.name,timestamp:r.static.timestamp,id:r.static.id},type:r.type,room:r.room}}),t}(t);try{localStorage.setItem("mindmaper-mindmaps-storage-v2",JSON.stringify(e))}catch(e){"QuotaExceededError"!==e.name&&"NS_ERROR_DOM_QUOTA_REACHED"!==e.name||alert("Unable to store data because their is not enough space.")}n()})}).catch(function(e){o(e),n()})})},this.shouldWeakPut=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return s=new Promise(function(n,r){(t?Promise.resolve():s).then(function(){return c()}).then(function(t){var r=!t[e.static.id]||t[e.static.id].should_update_token!==e.should_update_token;n(r)}).catch(function(e){o(e),n(!0)})})},this.tryWeakPut=function(e){return s=new Promise(function(n,r){s.then(function(){return t.shouldWeakPut(e,!0)}).then(function(r){r?t.putMindmap(e,!0).then(function(){n(!0)}):n(!1)}).catch(n)})},this.getMindmaps=function(){return s=s.then(function(){return c()})},this.deleteMindmap=function(e){return t.deleteMindmapKey(e.static.id)},this.deleteMindmapKey=function(e){return s=new Promise(function(t,n){s.then(function(){return c()}).then(function(n){return a.delete("mindmap-items-"+e).then(function(){delete n[e],i=n;try{localStorage.setItem("mindmaper-mindmaps-storage-v2",JSON.stringify(i))}catch(e){"QuotaExceededError"!==e.name&&"NS_ERROR_DOM_QUOTA_REACHED"!==e.name||alert("Unable to store data because you've reached the maximum storage quota.")}t()})}).catch(t)})};try{localStorage.getItem("test")}catch(e){18===e.code&&alert("You've blocked mindmapper from settings cookies on the mindmaper website. We don't send cookies or use cookies, except for anonimized analytics. By blocking cookies you've also blocked the saving of mindmaps, bookmarks, favorites etc. You can read our privacy statement here: https://esstudio.site/privacy-policy",{title:"Crash"}),o(e)}};u.isFirstTimeAppOpening=function(){return!localStorage.getItem("mindmaper-mindmaps-storage-v2")},u.storageEstimateWrapper=function(){return(void 0).storageEstimateWrapper()},u.getDB=function(){return a},e.exports=new u},34:function(e,t,n){"use strict";n(11)}});