(function(t){function e(e){for(var n,s,i=e[0],l=e[1],c=e[2],u=0,d=[];u<i.length;u++)s=i[u],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&d.push(r[s][0]),r[s]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);p&&p(e);while(d.length)d.shift()();return o.push.apply(o,c||[]),a()}function a(){for(var t,e=0;e<o.length;e++){for(var a=o[e],n=!0,s=1;s<a.length;s++){var l=a[s];0!==r[l]&&(n=!1)}n&&(o.splice(e--,1),t=i(i.s=a[0]))}return t}var n={},r={app:0},o=[];function s(t){return i.p+"js/"+({about:"about"}[t]||t)+"."+{about:"56af012b"}[t]+".js"}function i(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.e=function(t){var e=[],a=r[t];if(0!==a)if(a)e.push(a[2]);else{var n=new Promise((function(e,n){a=r[t]=[e,n]}));e.push(a[2]=n);var o,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=s(t);var c=new Error;o=function(e){l.onerror=l.onload=null,clearTimeout(u);var a=r[t];if(0!==a){if(a){var n=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src;c.message="Loading chunk "+t+" failed.\n("+n+": "+o+")",c.name="ChunkLoadError",c.type=n,c.request=o,a[1](c)}r[t]=void 0}};var u=setTimeout((function(){o({type:"timeout",target:l})}),12e4);l.onerror=l.onload=o,document.head.appendChild(l)}return Promise.all(e)},i.m=t,i.c=n,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(a,n,function(e){return t[e]}.bind(null,n));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/",i.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=e,l=l.slice();for(var u=0;u<l.length;u++)e(l[u]);var p=c;o.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";a("85ec")},"0b5e":function(t,e,a){t.exports=a.p+"img/logo-transparent.e3bed014.png"},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("Header"),a("router-view"),a("Footer")],1)},o=[],s=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("footer",{staticClass:"footer container-fluid bg-light text-center text-muted",attrs:{id:"footer"}},[a("p",[t._v("Campus Latino © 2021")])])}],l={name:"Footer",props:{}},c=l,u=a("2877"),p=Object(u["a"])(c,s,i,!1,null,null,null),d=p.exports,f=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",{attrs:{id:"header"}},[n("nav",{staticClass:"navbar navbar-expand-lg navbar-light bg-light"},[n("div",{staticClass:"container"},[n("router-link",{staticClass:"navbar-brand mx-auto",attrs:{to:"/"}},[n("img",{staticClass:"bi me-2",attrs:{width:"40",alt:"Campus Latino logo",src:a("0b5e")}}),n("span",{staticClass:"fs-4"},[t._v("Campus Latino 92.1 FM")])]),t._m(0),n("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarCollapse"}},[n("ul",{staticClass:"navbar-nav ms-auto mb-2 mb-lg-0"},[n("li",{staticClass:"nav-item align-self-center"},[n("router-link",{staticClass:"nav-link",attrs:{to:"/"}},[t._v("Inicio")])],1),n("li",{staticClass:"nav-item align-self-center"},[n("router-link",{staticClass:"nav-link",attrs:{to:"/about"}},[t._v("Sobre nosotros")])],1),n("li",{staticClass:"nav-item align-self-center"},[n("router-link",{staticClass:"nav-link",attrs:{to:"/episodes"}},[t._v("Episodios")])],1),n("li",{staticClass:"nav-item align-self-center"},[n("router-link",{staticClass:"nav-link",attrs:{to:"/contact"}},[t._v("Contacto")])],1),t._m(1)])])],1)])])},m=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarCollapse","aria-controls":"navbarCollapse","aria-expanded":"false","aria-label":"Toggle navigation"}},[a("span",{staticClass:"navbar-toggler-icon"})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",{staticClass:"nav-item align-self-center",attrs:{id:"player"}},[a("audio",{attrs:{preload:"metadata",controls:"controls"}},[t._v(" Your browser does not support the "),a("code",[t._v("audio")]),t._v(" element. "),a("source",{attrs:{src:"https://www.radiocampus.be/stream/stream_hi.ogg",type:"audio/ogg"}}),a("source",{attrs:{src:"https://www.radiocampus.be/stream/stream_low.ogg",type:"audio/ogg"}}),a("source",{attrs:{src:"https://www.radiocampus.be/stream/stream.mp3",type:"audio/mpeg"}}),a("source",{attrs:{src:"https://www.radiocampus.be/stream/stream.aacplus",type:"audio/mp4"}})])])}],b={name:"Header",props:{}},v=b,g=Object(u["a"])(v,f,m,!1,null,null,null),h=g.exports,_={name:"App",components:{Footer:d,Header:h}},w=_,C=(a("034f"),Object(u["a"])(w,r,o,!1,null,null,null)),y=C.exports,k=(a("d3b7"),a("3ca3"),a("ddb0"),a("8c4f")),x=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container py-5",attrs:{id:"home"}},[n("img",{attrs:{alt:"Vue logo",src:a("cf05")}}),n("br"),n("strong",[t._v("La radio de la comunidad latinoamericana en Bruselas")]),n("br"),n("br"),n("p",[t._v(" Escucha nuestros podcasts anteriores "),n("router-link",{attrs:{to:"/episodes"}},[t._v("haciendo click aquí.")])],1),t._m(0),n("div",{staticClass:"container-fluid"})])},j=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",[t._v(" Mantente informado de nuestra programación semanal a través de nuestro "),a("a",{attrs:{href:"https://www.facebook.com/CampusLatino",target:"_blank",rel:"noopener"}},[t._v("Facebook")]),t._v(". ")])}],O={name:"Home"},E=O,P=(a("df73"),Object(u["a"])(E,x,j,!1,null,"5a8b1001",null)),$=P.exports;n["a"].use(k["a"]);var L=[{path:"/",name:"Home",component:$},{path:"/about",name:"About",component:function(){return a.e("about").then(a.bind(null,"f820"))}},{path:"/episodes",name:"Episodes",component:function(){return a.e("about").then(a.bind(null,"2c97"))}},{path:"/player/:slug",name:"Player",props:!0,component:function(){return a.e("about").then(a.bind(null,"bf5c"))}},{path:"/contact",name:"Contact",component:function(){return a.e("about").then(a.bind(null,"b8fa"))}}],M=new k["a"]({mode:"history",base:"/",routes:L}),S=M;n["a"].config.productionTip=!1,new n["a"]({router:S,render:function(t){return t(y)}}).$mount("#app")},"85ec":function(t,e,a){},c861:function(t,e,a){},cf05:function(t,e,a){t.exports=a.p+"img/logo.48ad609c.png"},df73:function(t,e,a){"use strict";a("c861")}});
//# sourceMappingURL=app.8c2d5888.js.map