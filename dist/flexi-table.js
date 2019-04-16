!function(n,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("flexi-table",[],t):"object"==typeof exports?exports["flexi-table"]=t():n["flexi-table"]=t()}(this,function(){return function(n){function t(r){if(e[r])return e[r].exports;var o=e[r]={exports:{},id:r,loaded:!1};return n[r].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var e={};return t.m=n,t.c=e,t.p="",t(0)}([function(n,t,e){e(1);var r=e(6)(e(7),e(44),"data-v-0293c255",null);n.exports=r.exports},function(n,t,e){var r=e(2);"string"==typeof r&&(r=[[n.id,r,""]]),r.locals&&(n.exports=r.locals);e(4)("448e790b",r,!0)},function(n,t,e){t=n.exports=e(3)(!1),t.push([n.id,"\n.green[data-v-0293c255] {\n    background: #0fd079;\n}\n.blue[data-v-0293c255] {\n    background: #6291ff;\n}\n.red[data-v-0293c255] {\n    background: #d47389;\n}\n.yellow[data-v-0293c255] {\n    background: #bce228;\n}\n/*\n *  Custom Pagination CSS\n *\n */\n.flexi-pagination[data-v-0293c255]{\n    display: flex;\n    margin: 0 30px;\n    align-items: center;\n}\n.pagination[data-v-0293c255] {\n    padding: 0;\n    display: flex;\n    justify-content: center;\n    list-style: none;\n    color: black;\n}\n.pagination li a[data-v-0293c255] {\n    color: black;\n    float: left;\n    padding: 8px 16px;\n    text-decoration: none;\n    border-radius: 0!important;\n}\n.pagination li a.active[data-v-0293c255] {\n    background-color: #4CAF50;\n    color: white;\n}\n.pagination li a[data-v-0293c255]:hover:not(.active) {\n    background-color: #ddd;\n}\n\n/*\n *  Custom Flexi Table\n *\n */\n.flexi[data-v-0293c255] {\n    display: flex;\n}\n.flexi-container[data-v-0293c255] {\n    overflow-x: auto;\n    min-height: 100%;\n    margin: 10px 10px;\n    display: flex;\n    flex-direction: column;\n}\n.flexi-header[data-v-0293c255] {\n    /*min-width: 1000px;*/\n    display: flex;\n    justify-content: space-between;\n    padding: 7px;\n    font-size: 12px;\n    font-family: sans-serif;\n    \n    color: white;\n    cursor: pointer;\n}\n.flexi-header-col[data-v-0293c255] {\n    padding: 5px 30px;\n    min-width: fit-content;\n    flex: 1;\n}\n.flexi-header-col-item[data-v-0293c255] {\n    font-size: 13px;\n    padding: 0 3px;\n}\n\n/*ROWS*/\n.main[data-v-0293c255] {\n    /*min-width: 1000px;*/\n    display: flex;\n    justify-content: space-between;\n    padding: 7px;\n    flex-direction: column;\n    font-size: 12px;\n    font-family: sans-serif;\n    background: #f1efef;\n    color: #294c4c;\n}\n.main-item[data-v-0293c255] {\n    padding: 5px 30px;\n    min-width: fit-content;\n    flex: 1;\n}\n.main-list[data-v-0293c255] {\n    /*min-width: 1000px;*/\n    display: flex;\n    justify-content: space-between;\n    padding: 5px 3px;\n    border-bottom: solid 1.2px white;\n    cursor: pointer;\n}\n\n/*MOBILE RESPONSIVE*/\n@media screen and(max-width: 768px) {\n.flexi-header-col[data-v-0293c255] {\n        min-width: 30px;\n        flex: 1;\n}\n.main-item[data-v-0293c255] {\n        flex: 1;\n}\n}\n",""])},function(n,t){function e(n,t){var e=n[1]||"",o=n[3];if(!o)return e;if(t&&"function"==typeof btoa){var i=r(o),a=o.sources.map(function(n){return"/*# sourceURL="+o.sourceRoot+n+" */"});return[e].concat(a).concat([i]).join("\n")}return[e].join("\n")}function r(n){var t=btoa(unescape(encodeURIComponent(JSON.stringify(n)))),e="sourceMappingURL=data:application/json;charset=utf-8;base64,"+t;return"/*# "+e+" */"}n.exports=function(n){var t=[];return t.toString=function(){return this.map(function(t){var r=e(t,n);return t[2]?"@media "+t[2]+"{"+r+"}":r}).join("")},t.i=function(n,e){"string"==typeof n&&(n=[[null,n,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(r[i]=!0)}for(o=0;o<n.length;o++){var a=n[o];"number"==typeof a[0]&&r[a[0]]||(e&&!a[2]?a[2]=e:e&&(a[2]="("+a[2]+") and ("+e+")"),t.push(a))}},t}},function(n,t,e){function r(n){for(var t=0;t<n.length;t++){var e=n[t],r=f[e.id];if(r){r.refs++;for(var o=0;o<r.parts.length;o++)r.parts[o](e.parts[o]);for(;o<e.parts.length;o++)r.parts.push(i(e.parts[o]));r.parts.length>e.parts.length&&(r.parts.length=e.parts.length)}else{for(var a=[],o=0;o<e.parts.length;o++)a.push(i(e.parts[o]));f[e.id]={id:e.id,refs:1,parts:a}}}}function o(){var n=document.createElement("style");return n.type="text/css",l.appendChild(n),n}function i(n){var t,e,r=document.querySelector('style[data-vue-ssr-id~="'+n.id+'"]');if(r){if(v)return h;r.parentNode.removeChild(r)}if(x){var i=d++;r=p||(p=o()),t=a.bind(null,r,i,!1),e=a.bind(null,r,i,!0)}else r=o(),t=u.bind(null,r),e=function(){r.parentNode.removeChild(r)};return t(n),function(r){if(r){if(r.css===n.css&&r.media===n.media&&r.sourceMap===n.sourceMap)return;t(n=r)}else e()}}function a(n,t,e,r){var o=e?"":r.css;if(n.styleSheet)n.styleSheet.cssText=m(t,o);else{var i=document.createTextNode(o),a=n.childNodes;a[t]&&n.removeChild(a[t]),a.length?n.insertBefore(i,a[t]):n.appendChild(i)}}function u(n,t){var e=t.css,r=t.media,o=t.sourceMap;if(r&&n.setAttribute("media",r),o&&(e+="\n/*# sourceURL="+o.sources[0]+" */",e+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */"),n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}var c="undefined"!=typeof document,s=e(5),f={},l=c&&(document.head||document.getElementsByTagName("head")[0]),p=null,d=0,v=!1,h=function(){},x="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());n.exports=function(n,t,e){v=e;var o=s(n,t);return r(o),function(t){for(var e=[],i=0;i<o.length;i++){var a=o[i],u=f[a.id];u.refs--,e.push(u)}t?(o=s(n,t),r(o)):o=[];for(var i=0;i<e.length;i++){var u=e[i];if(0===u.refs){for(var c=0;c<u.parts.length;c++)u.parts[c]();delete f[u.id]}}}};var m=function(){var n=[];return function(t,e){return n[t]=e,n.filter(Boolean).join("\n")}}()},function(n,t){n.exports=function(n,t){for(var e=[],r={},o=0;o<t.length;o++){var i=t[o],a=i[0],u=i[1],c=i[2],s=i[3],f={id:n+":"+o,css:u,media:c,sourceMap:s};r[a]?r[a].parts.push(f):e.push(r[a]={id:a,parts:[f]})}return e}},function(n,t){n.exports=function(n,t,e,r){var o,i=n=n||{},a=typeof n["default"];"object"!==a&&"function"!==a||(o=n,i=n["default"]);var u="function"==typeof i?i.options:i;if(t&&(u.render=t.render,u.staticRenderFns=t.staticRenderFns),e&&(u._scopeId=e),r){var c=Object.create(u.computed||null);Object.keys(r).forEach(function(n){var t=r[n];c[n]=function(){return t}}),u.computed=c}return{esModule:o,exports:i,options:u}}},function(n,t,e){"use strict";function r(n){return n&&n.__esModule?n:{"default":n}}function o(){for(var n=[],t=0;t<40;t++){var e={row1:"Column"+(t+1),row2:"Column"+(t+1),row3:"Column"+(t+1),row4:"Column"+(t+1),row:"Column"+(t+1)};n.push(e)}return n}Object.defineProperty(t,"__esModule",{value:!0});var i=e(8),a=r(i),u="green",c=["Row 111","Row 2","Row 3","Row 4","Row 5"],s={color:{type:String,"default":u},rows:{type:Array,"default":function(){return c}},columns:{type:Array,"default":function(){return o()}}};t["default"]={props:s,data:function(){return{currentPage:1,perPage:4,perPageOptions:[4,8],source:[]}},computed:{offset:function(){return(this.currentPage-1)*this.perPage},limit:function(){return this.offset+this.perPage},numOfPages:function(){return Math.ceil(this.getColumns.length/this.perPage)},result:function(){return this.offset>this.getColumns.length&&(this.currentPage=this.numOfPages),this.getColumns.slice(this.offset,this.limit)},getColumns:function(){return this.setColumns()}},methods:{setColor:function(n){this.color=n},setColumns:function(){var n=this;this.source=this.columns;for(var t=this.rows.length,e=0,r=function(r){(0,a["default"])(n.source[r]).map(function(o){e++,n.source[r]["value_"+e]=n.source[r][o],delete n.source[r][o],e===t&&(e=0)})},o=0;o<this.source.length;o++)r(o);return this.source},setPage:function(n){this.currentPage=n}}}},function(n,t,e){n.exports={"default":e(9),__esModule:!0}},function(n,t,e){e(10),n.exports=e(25).Object.keys},function(n,t,e){var r=e(11),o=e(13);e(30)("keys",function(){return function(n){return o(r(n))}})},function(n,t,e){var r=e(12);n.exports=function(n){return Object(r(n))}},function(n,t){n.exports=function(n){if(void 0==n)throw TypeError("Can't call method on  "+n);return n}},function(n,t,e){var r=e(14),o=e(29);n.exports=Object.keys||function(n){return r(n,o)}},function(n,t,e){var r=e(15),o=e(16),i=e(19)(!1),a=e(23)("IE_PROTO");n.exports=function(n,t){var e,u=o(n),c=0,s=[];for(e in u)e!=a&&r(u,e)&&s.push(e);for(;t.length>c;)r(u,e=t[c++])&&(~i(s,e)||s.push(e));return s}},function(n,t){var e={}.hasOwnProperty;n.exports=function(n,t){return e.call(n,t)}},function(n,t,e){var r=e(17),o=e(12);n.exports=function(n){return r(o(n))}},function(n,t,e){var r=e(18);n.exports=Object("z").propertyIsEnumerable(0)?Object:function(n){return"String"==r(n)?n.split(""):Object(n)}},function(n,t){var e={}.toString;n.exports=function(n){return e.call(n).slice(8,-1)}},function(n,t,e){var r=e(16),o=e(20),i=e(22);n.exports=function(n){return function(t,e,a){var u,c=r(t),s=o(c.length),f=i(a,s);if(n&&e!=e){for(;s>f;)if(u=c[f++],u!=u)return!0}else for(;s>f;f++)if((n||f in c)&&c[f]===e)return n||f||0;return!n&&-1}}},function(n,t,e){var r=e(21),o=Math.min;n.exports=function(n){return n>0?o(r(n),9007199254740991):0}},function(n,t){var e=Math.ceil,r=Math.floor;n.exports=function(n){return isNaN(n=+n)?0:(n>0?r:e)(n)}},function(n,t,e){var r=e(21),o=Math.max,i=Math.min;n.exports=function(n,t){return n=r(n),n<0?o(n+t,0):i(n,t)}},function(n,t,e){var r=e(24)("keys"),o=e(28);n.exports=function(n){return r[n]||(r[n]=o(n))}},function(n,t,e){var r=e(25),o=e(26),i="__core-js_shared__",a=o[i]||(o[i]={});(n.exports=function(n,t){return a[n]||(a[n]=void 0!==t?t:{})})("versions",[]).push({version:r.version,mode:e(27)?"pure":"global",copyright:"© 2019 Denis Pushkarev (zloirock.ru)"})},function(n,t){var e=n.exports={version:"2.6.5"};"number"==typeof __e&&(__e=e)},function(n,t){var e=n.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=e)},function(n,t){n.exports=!0},function(n,t){var e=0,r=Math.random();n.exports=function(n){return"Symbol(".concat(void 0===n?"":n,")_",(++e+r).toString(36))}},function(n,t){n.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(n,t,e){var r=e(31),o=e(25),i=e(40);n.exports=function(n,t){var e=(o.Object||{})[n]||Object[n],a={};a[n]=t(e),r(r.S+r.F*i(function(){e(1)}),"Object",a)}},function(n,t,e){var r=e(26),o=e(25),i=e(32),a=e(34),u=e(15),c="prototype",s=function(n,t,e){var f,l,p,d=n&s.F,v=n&s.G,h=n&s.S,x=n&s.P,m=n&s.B,g=n&s.W,y=v?o:o[t]||(o[t]={}),b=y[c],w=v?r:h?r[t]:(r[t]||{})[c];v&&(e=t);for(f in e)l=!d&&w&&void 0!==w[f],l&&u(y,f)||(p=l?w[f]:e[f],y[f]=v&&"function"!=typeof w[f]?e[f]:m&&l?i(p,r):g&&w[f]==p?function(n){var t=function(t,e,r){if(this instanceof n){switch(arguments.length){case 0:return new n;case 1:return new n(t);case 2:return new n(t,e)}return new n(t,e,r)}return n.apply(this,arguments)};return t[c]=n[c],t}(p):x&&"function"==typeof p?i(Function.call,p):p,x&&((y.virtual||(y.virtual={}))[f]=p,n&s.R&&b&&!b[f]&&a(b,f,p)))};s.F=1,s.G=2,s.S=4,s.P=8,s.B=16,s.W=32,s.U=64,s.R=128,n.exports=s},function(n,t,e){var r=e(33);n.exports=function(n,t,e){if(r(n),void 0===t)return n;switch(e){case 1:return function(e){return n.call(t,e)};case 2:return function(e,r){return n.call(t,e,r)};case 3:return function(e,r,o){return n.call(t,e,r,o)}}return function(){return n.apply(t,arguments)}}},function(n,t){n.exports=function(n){if("function"!=typeof n)throw TypeError(n+" is not a function!");return n}},function(n,t,e){var r=e(35),o=e(43);n.exports=e(39)?function(n,t,e){return r.f(n,t,o(1,e))}:function(n,t,e){return n[t]=e,n}},function(n,t,e){var r=e(36),o=e(38),i=e(42),a=Object.defineProperty;t.f=e(39)?Object.defineProperty:function(n,t,e){if(r(n),t=i(t,!0),r(e),o)try{return a(n,t,e)}catch(u){}if("get"in e||"set"in e)throw TypeError("Accessors not supported!");return"value"in e&&(n[t]=e.value),n}},function(n,t,e){var r=e(37);n.exports=function(n){if(!r(n))throw TypeError(n+" is not an object!");return n}},function(n,t){n.exports=function(n){return"object"==typeof n?null!==n:"function"==typeof n}},function(n,t,e){n.exports=!e(39)&&!e(40)(function(){return 7!=Object.defineProperty(e(41)("div"),"a",{get:function(){return 7}}).a})},function(n,t,e){n.exports=!e(40)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(n,t){n.exports=function(n){try{return!!n()}catch(t){return!0}}},function(n,t,e){var r=e(37),o=e(26).document,i=r(o)&&r(o.createElement);n.exports=function(n){return i?o.createElement(n):{}}},function(n,t,e){var r=e(37);n.exports=function(n,t){if(!r(n))return n;var e,o;if(t&&"function"==typeof(e=n.toString)&&!r(o=e.call(n)))return o;if("function"==typeof(e=n.valueOf)&&!r(o=e.call(n)))return o;if(!t&&"function"==typeof(e=n.toString)&&!r(o=e.call(n)))return o;throw TypeError("Can't convert object to primitive value")}},function(n,t){n.exports=function(n,t){return{enumerable:!(1&n),configurable:!(2&n),writable:!(4&n),value:t}}},function(n,t){n.exports={render:function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",[e("div",{staticClass:"flexi-content"},[e("div",{staticClass:"flexi"},[e("div",{staticClass:"flexi-container"},[e("div",{staticClass:"flexi-header","class":n.color},n._l(n.rows,function(t,r){return e("div",{staticClass:"flexi-header-col"},[e("span",{staticClass:"flexi-header-col-item"},[n._v("\n                        "+n._s(t)+"\n                    ")])])}),0),n._v(" "),e("div",{staticClass:"main"},n._l(n.result,function(t,r){return e("div",{staticClass:"main-list"},n._l(n.rows,function(r,o){return e("div",{staticClass:"main-item"},[n._v("\n                            "+n._s(t["value_"+(o+1)])+"\n                        ")])}),0)}),0)])]),n._v(" "),e("div",{staticClass:"flexi-pagination"},[e("ul",{staticClass:"pagination"},n._l(n.numOfPages,function(t){return e("li",[e("a",{attrs:{href:""},on:{click:function(e){return e.preventDefault(),n.setPage(t)}}},[n._v("\n                        "+n._s(t)+"\n                    ")])])}),0),n._v(" "),e("hr")])])])},staticRenderFns:[]}}])});