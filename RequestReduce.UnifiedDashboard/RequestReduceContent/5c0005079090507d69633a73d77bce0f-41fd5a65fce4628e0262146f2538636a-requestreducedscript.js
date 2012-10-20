/*!
 * Modernizr v2.5.3
 * www.modernizr.com
 *
 * Copyright (c) Faruk Ates, Paul Irish, Alex Sexton
 * Available under the BSD and MIT licenses: www.modernizr.com/license/
 */
window.Modernizr=function(n,t,i){function l(n){c.cssText=n}function at(n,t){return l(a.join(n+";")+(t||""))}function h(n,t){return typeof n===t}function v(n,t){return!!~(""+n).indexOf(t)}function ft(n,t){for(var r in n)if(c[n[r]]!==i)return t=="pfx"?n[r]:!0;return!1}function pt(n,t,r){var f,u;for(f in n)if(u=t[n[f]],u!==i)return r===!1?n[f]:h(u,"function")?u.bind(r||t):u;return!1}function e(n,t,i){var r=n.charAt(0).toUpperCase()+n.substr(1),u=(n+" "+k.join(r+" ")+r).split(" ");return h(t,"string")||h(t,"undefined")?ft(u,t):(u=(n+" "+ut.join(r+" ")+r).split(" "),pt(u,t,i))}function yt(){u.input=function(i){for(var r=0,u=i.length;r<u;r++)y[i[r]]=!!(i[r]in f);return y.list&&(y.list=!!(t.createElement("datalist")&&n.HTMLDataListElement)),y}("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")),u.inputtypes=function(n){for(var e=0,r,u,o,h=n.length;e<h;e++)f.setAttribute("type",u=n[e]),r=f.type!=="text",r&&(f.value=d,f.style.cssText="position:absolute;visibility:hidden;",/^range$/.test(u)&&f.style.WebkitAppearance!==i?(s.appendChild(f),o=t.defaultView,r=o.getComputedStyle&&o.getComputedStyle(f,null).WebkitAppearance!=="textfield"&&f.offsetHeight!==0,s.removeChild(f)):/^(search|tel)$/.test(u)||(/^(url|email)$/.test(u)?r=f.checkValidity&&f.checkValidity()===!1:/^color$/.test(u)?(s.appendChild(f),s.offsetWidth,r=f.value!=d,s.removeChild(f)):r=f.value!=d)),ct[n[e]]=!!r;return ct}("search tel url email datetime date month week time datetime-local number range color".split(" "))}var wt="2.5.3",u={},vt=!0,s=t.documentElement,o="modernizr",et=t.createElement(o),c=et.style,f=t.createElement("input"),d=":)",ot={}.toString,a=" -webkit- -moz- -o- -ms- ".split(" "),st="Webkit Moz O ms",k=st.split(" "),ut=st.toLowerCase().split(" "),g={svg:"http://www.w3.org/2000/svg"},r={},ct={},y={},nt=[],tt=nt.slice,w,it=function(n,i,r,u){var l,a,c,f=t.createElement("div"),h=t.body,e=h?h:t.createElement("body");if(parseInt(r,10))while(r--)c=t.createElement("div"),c.id=u?u[r]:o+(r+1),f.appendChild(c);return l=["&#173;","<style>",n,"<\/style>"].join(""),f.id=o,e.innerHTML+=l,e.appendChild(f),h||(e.style.background="",s.appendChild(e)),a=i(f,n),h?f.parentNode.removeChild(f):e.parentNode.removeChild(e),!!a},lt=function(t){var i=n.matchMedia||n.msMatchMedia,r;return i?i(t).matches:(it("@media "+t+" { #"+o+" { position: absolute; } }",function(t){r=(n.getComputedStyle?getComputedStyle(t,null):t.currentStyle).position=="absolute"}),r)},ht=function(){function r(r,u){u=u||t.createElement(n[r]||"div"),r="on"+r;var f=r in u;return f||(u.setAttribute||(u=t.createElement("div")),u.setAttribute&&u.removeAttribute&&(u.setAttribute(r,""),f=h(u[r],"function"),h(u[r],"undefined")||(u[r]=i),u.removeAttribute(r))),u=null,f}var n={select:"input",change:"input",submit:"form",reset:"form",error:"img",load:"img",abort:"img"};return r}(),rt={}.hasOwnProperty,p,bt,b;p=h(rt,"undefined")||h(rt.call,"undefined")?function(n,t){return t in n&&h(n.constructor.prototype[t],"undefined")}:function(n,t){return rt.call(n,t)},Function.prototype.bind||(Function.prototype.bind=function(n){var t=this,i,r;if(typeof t!="function")throw new TypeError;return i=tt.call(arguments,1),r=function(){var e,f,u;return this instanceof r?(e=function(){},e.prototype=t.prototype,f=new e,u=t.apply(f,i.concat(tt.call(arguments))),Object(u)===u)?u:f:t.apply(n,i.concat(tt.call(arguments)))},r}),bt=function(i,r){var e=i.join(""),f=r.length;it(e,function(i,r){for(var o=t.styleSheets[t.styleSheets.length-1],s=o?o.cssRules&&o.cssRules[0]?o.cssRules[0].cssText:o.cssText||"":"",h=i.childNodes,e={};f--;)e[h[f].id]=h[f];u.touch="ontouchstart"in n||n.DocumentTouch&&t instanceof DocumentTouch||(e.touch&&e.touch.offsetTop)===9,u.csstransforms3d=(e.csstransforms3d&&e.csstransforms3d.offsetLeft)===9&&e.csstransforms3d.offsetHeight===3,u.generatedcontent=(e.generatedcontent&&e.generatedcontent.offsetHeight)>=1,u.fontface=/src/i.test(s)&&s.indexOf(r.split(" ")[0])===0},f,r)}(['@font-face {font-family:"font";src:url("https://")}',["@media (",a.join("touch-enabled),("),o,")","{#touch{top:9px;position:absolute}}"].join(""),["@media (",a.join("transform-3d),("),o,")","{#csstransforms3d{left:9px;position:absolute;height:3px;}}"].join(""),['#generatedcontent:after{content:"',d,'";visibility:hidden}'].join("")],["fontface","touch","csstransforms3d","generatedcontent"]),r.flexbox=function(){return e("flexOrder")},r["flexbox-legacy"]=function(){return e("boxDirection")},r.canvas=function(){var n=t.createElement("canvas");return!!(n.getContext&&n.getContext("2d"))},r.canvastext=function(){return!!(u.canvas&&h(t.createElement("canvas").getContext("2d").fillText,"function"))},r.webgl=function(){try{var r=t.createElement("canvas"),u;u=!!(n.WebGLRenderingContext&&(r.getContext("experimental-webgl")||r.getContext("webgl"))),r=i}catch(f){u=!1}return u},r.touch=function(){return u.touch},r.geolocation=function(){return!!navigator.geolocation},r.postmessage=function(){return!!n.postMessage},r.websqldatabase=function(){return!!n.openDatabase},r.indexedDB=function(){return!!e("indexedDB",n)},r.hashchange=function(){return ht("hashchange",n)&&(t.documentMode===i||t.documentMode>7)},r.history=function(){return!!(n.history&&history.pushState)},r.draganddrop=function(){var n=t.createElement("div");return"draggable"in n||"ondragstart"in n&&"ondrop"in n},r.websockets=function(){for(var t=-1,i=k.length;++t<i;)if(n[k[t]+"WebSocket"])return!0;return"WebSocket"in n},r.rgba=function(){return l("background-color:rgba(150,255,150,.5)"),v(c.backgroundColor,"rgba")},r.hsla=function(){return l("background-color:hsla(120,40%,100%,.5)"),v(c.backgroundColor,"rgba")||v(c.backgroundColor,"hsla")},r.multiplebgs=function(){return l("background:url(https://),url(https://),red url(https://)"),/(url\s*\(.*?){3}/.test(c.background)},r.backgroundsize=function(){return e("backgroundSize")},r.borderimage=function(){return e("borderImage")},r.borderradius=function(){return e("borderRadius")},r.boxshadow=function(){return e("boxShadow")},r.textshadow=function(){return t.createElement("div").style.textShadow===""},r.opacity=function(){return at("opacity:.55"),/^0.55$/.test(c.opacity)},r.cssanimations=function(){return e("animationName")},r.csscolumns=function(){return e("columnCount")},r.cssgradients=function(){var n="background-image:",t="gradient(linear,left top,right bottom,from(#9f9),to(white));",i="linear-gradient(left top,#9f9, white);";return l((n+"-webkit- ".split(" ").join(t+n)+a.join(i+n)).slice(0,-n.length)),v(c.backgroundImage,"gradient")},r.cssreflections=function(){return e("boxReflect")},r.csstransforms=function(){return!!e("transform")},r.csstransforms3d=function(){var n=!!e("perspective");return n&&"webkitPerspective"in s.style&&(n=u.csstransforms3d),n},r.csstransitions=function(){return e("transition")},r.fontface=function(){return u.fontface},r.generatedcontent=function(){return u.generatedcontent},r.video=function(){var i=t.createElement("video"),n=!1;try{(n=!!i.canPlayType)&&(n=new Boolean(n),n.ogg=i.canPlayType('video/ogg; codecs="theora"').replace(/^no$/,""),n.h264=i.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/,""),n.webm=i.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/,""))}catch(r){}return n},r.audio=function(){var i=t.createElement("audio"),n=!1;try{(n=!!i.canPlayType)&&(n=new Boolean(n),n.ogg=i.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),n.mp3=i.canPlayType("audio/mpeg;").replace(/^no$/,""),n.wav=i.canPlayType('audio/wav; codecs="1"').replace(/^no$/,""),n.m4a=(i.canPlayType("audio/x-m4a;")||i.canPlayType("audio/aac;")).replace(/^no$/,""))}catch(r){}return n},r.localstorage=function(){try{return localStorage.setItem(o,o),localStorage.removeItem(o),!0}catch(n){return!1}},r.sessionstorage=function(){try{return sessionStorage.setItem(o,o),sessionStorage.removeItem(o),!0}catch(n){return!1}},r.webworkers=function(){return!!n.Worker},r.applicationcache=function(){return!!n.applicationCache},r.svg=function(){return!!t.createElementNS&&!!t.createElementNS(g.svg,"svg").createSVGRect},r.inlinesvg=function(){var n=t.createElement("div");return n.innerHTML="<svg/>",(n.firstChild&&n.firstChild.namespaceURI)==g.svg},r.smil=function(){return!!t.createElementNS&&/SVGAnimate/.test(ot.call(t.createElementNS(g.svg,"animate")))},r.svgclippaths=function(){return!!t.createElementNS&&/SVGClipPath/.test(ot.call(t.createElementNS(g.svg,"clipPath")))};for(b in r)p(r,b)&&(w=b.toLowerCase(),u[w]=r[b](),nt.push((u[w]?"":"no-")+w));u.input||yt(),u.addTest=function(n,t){if(typeof n=="object")for(var r in n)p(n,r)&&u.addTest(r,n[r]);else{if(n=n.toLowerCase(),u[n]!==i)return u;t=typeof t=="function"?t():t,s.className+=" "+(t?"":"no-")+n,u[n]=t}return u},l(""),et=f=null;
/*! HTML5 Shiv v3.4 | @afarkas @jdalton @jon_neal @rem | MIT/GPL2 Licensed */
return function(n,t){function s(n,t){var i=n.createElement("p"),r=n.getElementsByTagName("head")[0]||n.documentElement;return i.innerHTML="x<style>"+t+"<\/style>",r.insertBefore(i.lastChild,r.firstChild)}function h(){var n=i.elements;return typeof n=="string"?n.split(" "):n}function c(n){var t={},u=n.createElement,f=n.createDocumentFragment,r=f();n.createElement=function(n){var f=(t[n]||(t[n]=u(n))).cloneNode();return i.shivMethods&&f.canHaveChildren&&!o.test(n)?r.appendChild(f):f},n.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+h().join().replace(/\w+/g,function(n){return t[n]=u(n),r.createElement(n),'c("'+n+'")'})+");return n}")(i,r)}function e(n){var t;return n.documentShived?n:(i.shivCSS&&!u&&(t=!!s(n,"article,aside,details,figcaption,figure,footer,header,hgroup,nav,section{display:block}audio{display:none}canvas,video{display:inline-block;*display:inline;*zoom:1}[hidden]{display:none}audio[controls]{display:inline-block;*display:inline;*zoom:1}mark{background:#FF0;color:#000}")),f||(t=!c(n)),t&&(n.documentShived=t),n)}var r=n.html5||{},o=/^<|^(?:button|form|map|select|textarea)$/i,u,f,i;(function(){var n=t.createElement("a");n.innerHTML="<xyz><\/xyz>",u="hidden"in n,f=n.childNodes.length==1||function(){try{t.createElement("a")}catch(i){return!0}var n=t.createDocumentFragment();return typeof n.cloneNode=="undefined"||typeof n.createDocumentFragment=="undefined"||typeof n.createElement=="undefined"}()})(),i={elements:r.elements||"abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",shivCSS:!(r.shivCSS===!1),shivMethods:!(r.shivMethods===!1),type:"default",shivDocument:e},n.html5=i,e(t)}(this,t),u._version=wt,u._prefixes=a,u._domPrefixes=ut,u._cssomPrefixes=k,u.mq=lt,u.hasEvent=ht,u.testProp=function(n){return ft([n])},u.testAllProps=e,u.testStyles=it,u.prefixed=function(n,t,i){return t?e(n,t,i):e(n,"pfx")},s.className=s.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(vt?" js "+nt.join(" "):""),u}(this,this.document)