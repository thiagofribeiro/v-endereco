!function(e,n){"object"==typeof exports&&"object"==typeof module?module.exports=n():"function"==typeof define&&define.amd?define([],n):"object"==typeof exports?exports["v-main"]=n():e["v-main"]=n()}(this,function(){return function(e){function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}var t={};return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},n.p="",n(n.s=3)}([function(e,n){function t(e,n){var t=e[1]||"",o=e[3];if(!o)return t;if(n&&"function"==typeof btoa){var i=r(o);return[t].concat(o.sources.map(function(e){return"/*# sourceURL="+o.sourceRoot+e+" */"})).concat([i]).join("\n")}return[t].join("\n")}function r(e){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(e))))+" */"}e.exports=function(e){var n=[];return n.toString=function(){return this.map(function(n){var r=t(n,e);return n[2]?"@media "+n[2]+"{"+r+"}":r}).join("")},n.i=function(e,t){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(r[i]=!0)}for(o=0;o<e.length;o++){var a=e[o];"number"==typeof a[0]&&r[a[0]]||(t&&!a[2]?a[2]=t:t&&(a[2]="("+a[2]+") and ("+t+")"),n.push(a))}},n}},function(e,n,t){function r(e){for(var n=0;n<e.length;n++){var t=e[n],r=u[t.id];if(r){r.refs++;for(var o=0;o<r.parts.length;o++)r.parts[o](t.parts[o]);for(;o<t.parts.length;o++)r.parts.push(i(t.parts[o]));r.parts.length>t.parts.length&&(r.parts.length=t.parts.length)}else{for(var a=[],o=0;o<t.parts.length;o++)a.push(i(t.parts[o]));u[t.id]={id:t.id,refs:1,parts:a}}}}function o(){var e=document.createElement("style");return e.type="text/css",d.appendChild(e),e}function i(e){var n,t,r=document.querySelector('style[data-vue-ssr-id~="'+e.id+'"]');if(r){if(v)return m;r.parentNode.removeChild(r)}if(h){var i=f++;r=p||(p=o()),n=a.bind(null,r,i,!1),t=a.bind(null,r,i,!0)}else r=o(),n=s.bind(null,r),t=function(){r.parentNode.removeChild(r)};return n(e),function(r){if(r){if(r.css===e.css&&r.media===e.media&&r.sourceMap===e.sourceMap)return;n(e=r)}else t()}}function a(e,n,t,r){var o=t?"":r.css;if(e.styleSheet)e.styleSheet.cssText=g(n,o);else{var i=document.createTextNode(o),a=e.childNodes;a[n]&&e.removeChild(a[n]),a.length?e.insertBefore(i,a[n]):e.appendChild(i)}}function s(e,n){var t=n.css,r=n.media,o=n.sourceMap;if(r&&e.setAttribute("media",r),o&&(t+="\n/*# sourceURL="+o.sources[0]+" */",t+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */"),e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}var l="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!l)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var c=t(7),u={},d=l&&(document.head||document.getElementsByTagName("head")[0]),p=null,f=0,v=!1,m=function(){},h="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());e.exports=function(e,n,t){v=t;var o=c(e,n);return r(o),function(n){for(var t=[],i=0;i<o.length;i++){var a=o[i],s=u[a.id];s.refs--,t.push(s)}n?(o=c(e,n),r(o)):o=[];for(var i=0;i<t.length;i++){var s=t[i];if(0===s.refs){for(var l=0;l<s.parts.length;l++)s.parts[l]();delete u[s.id]}}}};var g=function(){var e=[];return function(n,t){return e[n]=t,e.filter(Boolean).join("\n")}}()},function(e,n){e.exports=function(e,n,t,r,o){var i,a=e=e||{},s=typeof e.default;"object"!==s&&"function"!==s||(i=e,a=e.default);var l="function"==typeof a?a.options:a;n&&(l.render=n.render,l.staticRenderFns=n.staticRenderFns),r&&(l._scopeId=r);var c;if(o?(c=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),t&&t.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(o)},l._ssrRegister=c):t&&(c=t),c){var u=l.functional,d=u?l.render:l.beforeCreate;u?l.render=function(e,n){return c.call(n),d(e,n)}:l.beforeCreate=d?[].concat(d,c):[c]}return{esModule:i,exports:a,options:l}}},function(e,n,t){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(n,"__esModule",{value:!0}),n.cepInLocalidade=n.default=void 0;var o=t(4),i=r(o),a=t(17),s=r(a);n.default=i.default,n.cepInLocalidade=s.default},function(e,n,t){function r(e){o||t(5)}var o=!1,i=t(2)(t(8),t(16),r,null,null);i.options.__file="D:\\github\\thiagofribeiro\\v-endereco\\v-endereco\\src\\endereco.vue",i.esModule&&Object.keys(i.esModule).some(function(e){return"default"!==e&&"__"!==e.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),i.options.functional&&console.error("[vue-loader] endereco.vue: functional components are not supported with templates, they should use render functions."),e.exports=i.exports},function(e,n,t){var r=t(6);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);t(1)("730c4a9a",r,!1)},function(e,n,t){n=e.exports=t(0)(void 0),n.push([e.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",""])},function(e,n){e.exports=function(e,n){for(var t=[],r={},o=0;o<n.length;o++){var i=n[o],a=i[0],s=i[1],l=i[2],c=i[3],u={id:e+":"+o,css:s,media:l,sourceMap:c};r[a]?r[a].parts.push(u):t.push(r[a]={id:a,parts:[u]})}return t}},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=function(){function e(e,n){var t=[],r=!0,o=!1,i=void 0;try{for(var a,s=e[Symbol.iterator]();!(r=(a=s.next()).done)&&(t.push(a.value),!n||t.length!==n);r=!0);}catch(e){o=!0,i=e}finally{try{!r&&s.return&&s.return()}finally{if(o)throw i}}return t}return function(n,t){if(Array.isArray(n))return n;if(Symbol.iterator in Object(n))return e(n,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),o=t(9),i=function(e){return e&&e.__esModule?e:{default:e}}(o),a=t(15),s=function(e){if(e&&e.$invalid){for(var n in e)if("$"!==n[0]&&!1===e[n]){var t=e.$params&&e.$params[n]&&e.$params[n].errorMessage;return t?"string"==typeof t?t:t(e.$params[n]):"Erro no campo"}return"Erro no campo"}return null};n.default={components:{VLogradouro:i.default},directives:{mask:a.mask},props:{localidadePadrao:null,localidadeFixa:null,value:{},comdataUrl:{default:"https://api.sorocaba.sp.gov.br/COMDATA/endereco"},elasticSearchUrl:{default:"https://api.sorocaba.sp.gov.br/elasticsearch/endereco/_search"},size:{default:"lg"},debug:{default:!1},validations:{type:Object,default:function(){return{}}}},data:function(){return{endereco:Object.assign({},this.enderecoVazio(),this.value),ufs:[],localidades:[]}},computed:{logradouro:{get:function(){return this.endereco.idCep&&this.endereco.tipoLogradouro?this.endereco.tipoLogradouro+" "+this.endereco.logradouro:this.endereco.logradouro},set:function(e){this.endereco.logradouro=e}},colsize:function(){return"lg"===this.size?{cep:"col-md-3",uf:"col-md-2",localidade:"col-md-7",logradouro:"col-md-5",numero:"col-md-1",complemento:"col-md-2",bairro:"col-md-4"}:"md"===this.size?{cep:"col-md-4",uf:"col-md-2",localidade:"col-md-6",logradouro:"col-md-6",numero:"col-md-6",complemento:"col-md-6",bairro:"col-md-6"}:"sm"===this.size?{cep:"col-md-8",uf:"col-md-4",localidade:"col-md-12",logradouro:"col-md-12",numero:"col-md-6",complemento:"col-md-6",bairro:"col-md-12"}:"xs"===this.size?{cep:"col-md-12",uf:"col-md-12",localidade:"col-md-12",logradouro:"col-md-12",numero:"col-md-12",complemento:"col-md-12",bairro:"col-md-12"}:void 0}},watch:{value:function(e){e!==this.endereco&&(this.endereco=Object.assign({},this.enderecoVazio(),e))},endereco:{deep:!0,handler:function(e){this.$emit("input",e)}},"endereco.cep":"consultaCep","endereco.idCep":function(e){e&&(this.endereco.cep=e.toString().padStart(8,"0"))},"endereco.ufSigla":function(){this.listarLocalidades()},"endereco.idLocalidade":function(e){var n=this;if(e){var t=this.localidades.find(function(n){return n.idLocalidade===e});t&&t.localidade&&(this.endereco.localidade=t&&t.localidade)}else this.endereco.localidade&&!this.endereco.idLocalidade&&(this.endereco.idLocalidade=this.localidades.find(function(e){return e.localidade===n.endereco.localidade}).idLocalidade)},"endereco.localidade":function(e){var n=this;e&&!this.endereco.idLocalidade&&(this.endereco.idLocalidade=this.localidades.find(function(e){return e.localidade===n.endereco.localidade}).idLocalidade)}},mounted:function(){this.listarUfs()},methods:{listarUfs:function(){var e=this;fetch(this.comdataUrl+"/listarUfs").then(function(e){return e&&e.ok?e.json():null}).then(function(n){n&&n.length>0&&(e.ufs=n,e.listarLocalidades())})},listarLocalidades:function(){var e=this;this.endereco.ufSigla?fetch(this.comdataUrl+"/listarLocalidades?uf="+this.endereco.ufSigla).then(function(e){return e&&e.ok?e.json():null}).then(function(n){n&&n.length>0?(e.localidades=n,e.endereco&&e.endereco.localidade&&!e.endereco.idLocalidade?e.endereco.idLocalidade=n.find(function(n){return n.localidade===e.endereco.localidade}).idLocalidade:e.endereco&&e.endereco.idLocalidade&&(n.find(function(n){return n.idLocalidade===e.endereco.idLocalidade})||(e.endereco.idLocalidade=null,e.endereco.localidade=null))):e.localidades=null}):this.localidades=[]},limparDados:function(){this.endereco=this.enderecoVazio()},logradouroSelecionado:function(e){this.endereco.cep=e.idCep.toString().padStart(8,"0")},limparCEP:function(){this.endereco.cep=""},enderecoVazio:function(e){var n=[];this.localidadePadrao&&(n=this.localidadePadrao.split("/"));var t=n,o=r(t,2),i=o[0],a=o[1],s={idCep:null,cep:null,ufSigla:a||null,idLocalidade:null,localidade:i||null,tipoLogradouro:null,logradouro:null,numero:null,complemento:null,bairro:null,idBairro:null};return Object.assign({},s,e)},consultaCep:function(e,n){var t=this;e=e&&e.toString().replace("-",""),n=n&&n.toString().replace("-",""),e&&e!==n&&8===e.length?fetch(this.comdataUrl+"/pesquisarPorCep?cep="+e).then(function(e){return e&&e.ok?e.json():null}).then(function(e){if(e&&e.length>0){var n=e[0];t.endereco=Object.assign({},t.endereco,n)}else t.endereco.idCep=null}):e?8!==e.length&&(this.endereco.idCep=null):this.endereco=this.enderecoVazio({numero:this.endereco.numero,complemento:this.endereco.complemento})},hasErrors:function(e){return e&&e.$error?"has-error":""},errorMessage:function(e){return e&&e.$error?s(e):""}}}},function(e,n,t){function r(e){o||t(10)}var o=!1,i=t(2)(t(12),t(14),r,"data-v-63cb3b90",null);i.options.__file="D:\\github\\thiagofribeiro\\v-endereco\\v-endereco\\src\\logradouro.vue",i.esModule&&Object.keys(i.esModule).some(function(e){return"default"!==e&&"__"!==e.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),i.options.functional&&console.error("[vue-loader] logradouro.vue: functional components are not supported with templates, they should use render functions."),e.exports=i.exports},function(e,n,t){var r=t(11);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);t(1)("438cc802",r,!1)},function(e,n,t){n=e.exports=t(0)(void 0),n.push([e.i,"\nul[data-v-63cb3b90] {\r\n\tposition: absolute;\r\n\tpadding: 0;\r\n\tmargin-top: 1px;\r\n\tmin-width: 100%;\r\n\tbackground-color: #fff;\r\n\tlist-style: none;\r\n\tborder-radius: 4px;\r\n\tbox-shadow: 0 0 10px rgba(0,0,0, 0.25);\r\n\tz-index: 1000;\n}\nli[data-v-63cb3b90] {\r\n\tpadding: 4px 9px;\r\n\tborder-bottom: 1px solid #ccc;\r\n\tcursor: pointer;\n}\nli[data-v-63cb3b90]:first-child {\r\n\tborder-top-left-radius: 4px;\r\n\tborder-top-right-radius: 4px;\n}\nli[data-v-63cb3b90]:last-child {\r\n\tborder-bottom-left-radius: 4px;\r\n\tborder-bottom-right-radius: 4px;\r\n\tborder-bottom: 0;\n}\n.active[data-v-63cb3b90] {\r\n\tbackground-color: #515ece;\r\n\tcolor: white;\n}\n.first-line[data-v-63cb3b90] {\r\n\tfont-size: 20px;\n}\n.second-line[data-v-63cb3b90] {\r\n\tfont-size: 10px\n}\r\n",""])},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=t(13),o=function(e){return e&&e.__esModule?e:{default:e}}(r);n.default={extends:o.default,props:["value","disabled","localidade","ufSigla","src"],data:function(){return{limit:20,minChars:3,query:null}},computed:{valor:{get:function(){return this.value},set:function(e){this.query=e,this.$emit("input",e)}}},watch:{localidade:function(){this.params={localidade:this.localidade}}},methods:{onHit:function(e){this.$emit("hit",e)},detalhes:function(e){var n=e.bairro+" - "+e.cep;return e.cepLado&&(n+=" - Lado: ","A"===e.cepLado?n+="Ambos":"I"===e.cepLado?n+="Ímpar":"P"===e.cepLado&&(n+="Par")),e.cepNumeroInicial&&e.cepNumeroFinal?n+=" - Número: De "+e.cepNumeroInicial+" à "+e.cepNumeroFinal:e.cepNumeroInicial?n+=" - Número: À partir de "+e.cepNumeroInicial:e.cepNumeroFinal&&(n+=" - Número: Até "+e.cepNumeroInicial),n},parse:function(e){return e&&e.hits&&e.hits.hits?e.hits.hits.map(function(e){var n=e._source;return{tipoLogradouro:n.TIPO_LOGRADOURO,logradouro:n.LOGRADOURO,bairro:n.BAIRRO,cep:n.CEP,cepLado:n.CEP_LADO,cepNumeroFinal:n.CEP_NUMERO_FINAL,cepNumeroInicial:n.CEP_NUMERO_INICIAL,idCep:n.ID_CEP,localidade:n.LOCALIDADE,ufSigla:n.UF_SIGLA}}):[]}}}},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default={data:function(){return{items:[],query:"",current:-1,loading:!1,selectFirst:!1,queryParamName:"q"}},computed:{hasItems:function(){return this.items.length>0},isEmpty:function(){return!this.query},isDirty:function(){return!!this.query}},methods:{update:function(){var e=this;if(this.cancel(),!this.query)return this.reset();this.minChars&&this.query.length<this.minChars||(this.loading=!0,this.fetch().then(function(e){return e&&e.ok?e.json():null}).then(function(n){if(n&&e.query){var t=e.prepareResponseData?e.prepareResponseData(n):n;e.items=e.parse(t),e.current=-1,e.loading=!1,e.selectFirst&&e.down()}}))},fetch:function(e){function n(){return e.apply(this,arguments)}return n.toString=function(){return e.toString()},n}(function(){var e=this,n=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];if(this.query=this.query.trim(),!this.src)return console.warn("You need to set the `src` property",this);var t=new Promise(function(n){return e.cancel=n});n&&(this.query=this.query.split(" ").map(function(e){return e&&"~"!==e.slice(-1)?e+"~":e}).join(" "));var r=(this.ufSigla?"UF_SIGLA:"+this.ufSigla+" AND":"")+" "+(this.localidade?'LOCALIDADE:"'+this.localidade+'" AND':"")+" "+this.query+"*",o={query:{query_string:{fields:["LOGRADOURO","TIPO_LOGRADOURO"],query:r}},sort:["_score","_id"]},i=fetch(this.src,{method:"POST",body:JSON.stringify(o),headers:new Headers({"Content-Type":"application/json"})});return Promise.race([t,i])}),cancel:function(){},reset:function(){this.items=[],this.loading=!1},setActive:function(e){this.current=e},activeClass:function(e){return{active:this.current===e}},hit:function(){-1!==this.current&&this.onHit(this.items[this.current])},up:function(){this.current>0?this.current--:-1===this.current?this.current=this.items.length-1:this.current=-1},down:function(){0===this.items.length?this.update():this.current<this.items.length-1?this.current++:this.current=-1},onHit:function(){console.warn("You need to implement the `onHit` method",this)},toQuery:function(e){var n=encodeURIComponent;return Object.keys(e).map(function(t){return n(t)+"="+n(e[t])}).join("&")},highlighting:function(e){return e.toString().replace(new RegExp("("+this.query+")","gi"),'<span class="query">$1</span class="query">')}}}},function(e,n,t){e.exports={render:function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"Typeahead"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.valor,expression:"valor"}],staticClass:"Typeahead__input form-control",attrs:{type:"text",placeholder:"",autocomplete:"off",disabled:e.disabled},domProps:{value:e.valor},on:{keydown:[function(n){if(!("button"in n)&&e._k(n.keyCode,"down",40,n.key))return null;e.down(n)},function(n){if(!("button"in n)&&e._k(n.keyCode,"up",38,n.key))return null;e.up(n)},function(n){if(!("button"in n)&&e._k(n.keyCode,"enter",13,n.key))return null;e.hit(n)},function(n){if(!("button"in n)&&e._k(n.keyCode,"esc",27,n.key))return null;e.reset(n)}],blur:e.reset,input:[function(n){n.target.composing||(e.valor=n.target.value)},e.update]}}),e._v(" "),t("ul",{directives:[{name:"show",rawName:"v-show",value:e.hasItems,expression:"hasItems"}]},e._l(e.items,function(n,r){return t("li",{key:r,class:e.activeClass(r),on:{mousedown:e.hit,mousemove:function(n){e.setActive(r)}}},[t("div",{staticClass:"first-line",domProps:{innerHTML:e._s(e.highlighting(n.tipoLogradouro+" "+n.logradouro))}}),e._v(" "),t("div",{staticClass:"second-line pull-right"},[e._v(e._s(n.localidade)+"/"+e._s(n.ufSigla))]),e._v(" "),t("div",{staticClass:"second-line"},[e._v(e._s(e.detalhes(n)))])])}))])},staticRenderFns:[]},e.exports.render._withStripped=!0},function(e,n,t){!function(n,t){e.exports=t()}(0,function(){return function(e){function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}var t={};return n.m=e,n.c=t,n.i=function(e){return e},n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},n.p=".",n(n.s=10)}([function(e,n){e.exports={"#":{pattern:/\d/},X:{pattern:/[0-9a-zA-Z]/},S:{pattern:/[a-zA-Z]/},A:{pattern:/[a-zA-Z]/,transform:function(e){return e.toLocaleUpperCase()}},a:{pattern:/[a-zA-Z]/,transform:function(e){return e.toLocaleLowerCase()}},"!":{escape:!0}}},function(e,n,t){"use strict";function r(e){var n=document.createEvent("Event");return n.initEvent(e,!0,!0),n}var o=t(2),i=t(0),a=t.n(i);n.a=function(e,n){var i=n.value;if((Array.isArray(i)||"string"==typeof i)&&(i={mask:i,tokens:a.a}),"INPUT"!==e.tagName.toLocaleUpperCase()){var s=e.getElementsByTagName("input");if(1!==s.length)throw new Error("v-mask directive requires 1 input, found "+s.length);e=s[0]}e.oninput=function(n){if(n.isTrusted){var a=e.selectionEnd,s=e.value[a-1];for(e.value=t.i(o.a)(e.value,i.mask,!0,i.tokens);a<e.value.length&&e.value.charAt(a-1)!==s;)a++;e===document.activeElement&&(e.setSelectionRange(a,a),setTimeout(function(){e.setSelectionRange(a,a)},0)),e.dispatchEvent(r("input"))}};var l=t.i(o.a)(e.value,i.mask,!0,i.tokens);l!==e.value&&(e.value=l,e.dispatchEvent(r("input")))}},function(e,n,t){"use strict";var r=t(6),o=t(5);n.a=function(e,n){var i=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],a=arguments[3];return Array.isArray(n)?t.i(o.a)(r.a,n,a)(e,n,i,a):t.i(r.a)(e,n,i,a)}},function(e,n,t){"use strict";function r(e){e.component(l.a.name,l.a),e.directive("mask",a.a)}Object.defineProperty(n,"__esModule",{value:!0});var o=t(0),i=t.n(o),a=t(1),s=t(7),l=t.n(s);t.d(n,"TheMask",function(){return l.a}),t.d(n,"mask",function(){return a.a}),t.d(n,"tokens",function(){return i.a}),t.d(n,"version",function(){return c});var c="0.11.1";n.default=r,"undefined"!=typeof window&&window.Vue&&window.Vue.use(r)},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=t(1),o=t(0),i=t.n(o),a=t(2);n.default={name:"TheMask",props:{value:[String,Number],mask:{type:[String,Array],required:!0},masked:{type:Boolean,default:!1},tokens:{type:Object,default:function(){return i.a}}},directives:{mask:r.a},data:function(){return{lastValue:null,display:this.value}},watch:{value:function(e){e!==this.lastValue&&(this.display=e)},masked:function(){this.refresh(this.display)}},computed:{config:function(){return{mask:this.mask,tokens:this.tokens,masked:this.masked}}},methods:{onInput:function(e){e.isTrusted||this.refresh(e.target.value)},refresh:function(e){this.display=e;var e=t.i(a.a)(e,this.mask,this.masked,this.tokens);e!==this.lastValue&&(this.lastValue=e,this.$emit("input",e))}}}},function(e,n,t){"use strict";function r(e,n,t){return n=n.sort(function(e,n){return e.length-n.length}),function(r,o){for(var i=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],a=0;a<n.length;){var s=n[a];a++;var l=n[a];if(!(l&&e(r,l,!0,t).length>s.length))return e(r,s,i,t)}return""}}n.a=r},function(e,n,t){"use strict";function r(e,n){var t=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],r=arguments[3];e=e||"",n=n||"";for(var o=0,i=0,a="";o<n.length&&i<e.length;){var s=n[o],l=r[s],c=e[i];l&&!l.escape?(l.pattern.test(c)&&(a+=l.transform?l.transform(c):c,o++),i++):(l&&l.escape&&(o++,s=n[o]),t&&(a+=s),c===s&&i++,o++)}for(var u="";o<n.length&&t;){var s=n[o];if(r[s]){u="";break}u+=s,o++}return a+u}n.a=r},function(e,n,t){var r=t(8)(t(4),t(9),null,null);e.exports=r.exports},function(e,n){e.exports=function(e,n,t,r){var o,i=e=e||{},a=typeof e.default;"object"!==a&&"function"!==a||(o=e,i=e.default);var s="function"==typeof i?i.options:i;if(n&&(s.render=n.render,s.staticRenderFns=n.staticRenderFns),t&&(s._scopeId=t),r){var l=s.computed||(s.computed={});Object.keys(r).forEach(function(e){var n=r[e];l[e]=function(){return n}})}return{esModule:o,exports:i,options:s}}},function(e,n){e.exports={render:function(){var e=this,n=e.$createElement;return(e._self._c||n)("input",{directives:[{name:"mask",rawName:"v-mask",value:e.config,expression:"config"}],attrs:{type:"text"},domProps:{value:e.display},on:{input:e.onInput}})},staticRenderFns:[]}},function(e,n,t){e.exports=t(3)}])})},function(e,n,t){e.exports={render:function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[t("div",{staticClass:"row"},[t("div",{class:e.colsize.cep},[t("div",{class:"form-group "+e.hasErrors(e.validations.cep)},[t("label",{staticClass:"control-label",attrs:{for:"cep"}},[e._v("CEP:")]),e._v(" "),t("div",{staticClass:"input-group"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.endereco.cep,expression:"endereco.cep"},{name:"mask",rawName:"v-mask",value:"#####-###",expression:"'#####-###'"}],staticClass:"form-control",attrs:{type:"text",id:"cep",placeholder:""},domProps:{value:e.endereco.cep},on:{input:function(n){n.target.composing||e.$set(e.endereco,"cep",n.target.value)}}}),e._v(" "),t("span",{staticClass:"input-group-btn"},[t("button",{staticClass:"btn btn-default input-button",attrs:{type:"button"},on:{click:e.limparDados}},[t("b",[e._v("×")])])])]),e._v(" "),t("span",{staticClass:"help-block"},[e._v(e._s(e.errorMessage(e.validations.cep)))])])]),e._v(" "),t("div",{class:e.colsize.uf},[t("div",{class:"form-group "+e.hasErrors(e.validations.ufSigla)},[t("label",{staticClass:"control-label",attrs:{for:"ufSigla"}},[e._v("UF:")]),e._v(" "),t("select",{directives:[{name:"model",rawName:"v-model",value:e.endereco.ufSigla,expression:"endereco.ufSigla"}],staticClass:"form-control",attrs:{id:"ufSigla",disabled:e.endereco.idCep||e.localidadeFixa},on:{change:function(n){var t=Array.prototype.filter.call(n.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.$set(e.endereco,"ufSigla",n.target.multiple?t:t[0])}}},[t("option",{domProps:{value:null}},[e._v("-- Selecione --")]),e._v(" "),e._l(e.ufs,function(n){return t("option",{key:n.ufSigla,domProps:{value:n.ufSigla}},[e._v(e._s(n.ufSigla)+e._s(["md","sm"].includes(e.size)?"":" - "+n.ufNome))])})],2),e._v(" "),t("span",{staticClass:"help-block"},[e._v(e._s(e.errorMessage(e.validations.ufSigla)))])])]),e._v(" "),t("div",{class:e.colsize.localidade},[t("div",{class:"form-group "+e.hasErrors(e.validations.idLocalidade)},[t("label",{staticClass:"control-label",attrs:{for:"cep"}},[e._v("Localidade:")]),e._v(" "),e.localidades.length>0?t("select",{directives:[{name:"model",rawName:"v-model",value:e.endereco.idLocalidade,expression:"endereco.idLocalidade"}],staticClass:"form-control",attrs:{disabled:e.endereco.idCep||e.localidadeFixa},on:{change:function(n){var t=Array.prototype.filter.call(n.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.$set(e.endereco,"idLocalidade",n.target.multiple?t:t[0])}}},[t("option",{attrs:{selected:""},domProps:{value:null}},[e._v("-- Selecione uma localidade --")]),e._v(" "),e._l(e.localidades,function(n){return t("option",{key:n.idLocalidade,domProps:{value:n.idLocalidade,selected:n.idLocalidade==e.endereco.idLocalidade}},[e._v(e._s(n.localidade))])})],2):e.endereco.ufSigla?t("select",{staticClass:"form-control",attrs:{disabled:!0}},[t("option",{attrs:{selected:"true"},domProps:{value:null}},[e._v("Carregando...")])]):t("select",{staticClass:"form-control",attrs:{disabled:!0}},[t("option",{attrs:{selected:"true"},domProps:{value:null}},[e._v("-- Selecione uma unidade federativa --")])]),e._v(" "),t("span",{staticClass:"help-block"},[e._v(e._s(e.errorMessage(e.validations.idLocalidade)))])])])]),e._v(" "),t("div",{staticClass:"row"},[t("div",{class:e.colsize.logradouro},[t("div",{class:"form-group "+e.hasErrors(e.validations.logradouro)},[t("label",{staticClass:"control-label",attrs:{for:"logradouro"}},[e._v("Logradouro:")]),e._v(" "),t("v-logradouro",{attrs:{disabled:e.endereco.idCep,localidade:e.endereco.localidade,ufSigla:e.endereco.ufSigla,src:e.elasticSearchUrl},on:{hit:e.logradouroSelecionado},model:{value:e.logradouro,callback:function(n){e.logradouro=n},expression:"logradouro"}}),e._v(" "),t("span",{staticClass:"help-block"},[e._v(e._s(e.errorMessage(e.validations.logradouro)))])],1)]),e._v(" "),t("div",{class:e.colsize.bairro},[t("div",{class:"form-group "+e.hasErrors(e.validations.bairro)},[t("label",{staticClass:"control-label",attrs:{for:"cep"}},[e._v("Bairro:")]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.endereco.bairro,expression:"endereco.bairro"}],staticClass:"form-control",attrs:{id:"cep",disabled:e.endereco.idCep},domProps:{value:e.endereco.bairro},on:{input:function(n){n.target.composing||e.$set(e.endereco,"bairro",n.target.value)}}}),e._v(" "),t("span",{staticClass:"help-block"},[e._v(e._s(e.errorMessage(e.validations.bairro)))])])]),e._v(" "),t("div",{class:e.colsize.numero},[t("div",{class:"form-group "+e.hasErrors(e.validations.numero)},[t("label",{staticClass:"control-label",attrs:{for:"cep"}},[e._v("Número:")]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.endereco.numero,expression:"endereco.numero"}],staticClass:"form-control",attrs:{id:"cep"},domProps:{value:e.endereco.numero},on:{input:function(n){n.target.composing||e.$set(e.endereco,"numero",n.target.value)}}}),e._v(" "),t("span",{staticClass:"help-block"},[e._v(e._s(e.errorMessage(e.validations.numero)))])])]),e._v(" "),t("div",{class:e.colsize.complemento},[t("div",{class:"form-group "+e.hasErrors(e.validations.complemento)},[t("label",{staticClass:"control-label",attrs:{for:"cep"}},[e._v("Complemento:")]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.endereco.complemento,expression:"endereco.complemento"}],staticClass:"form-control",attrs:{id:"cep"},domProps:{value:e.endereco.complemento},on:{input:function(n){n.target.composing||e.$set(e.endereco,"complemento",n.target.value)}}}),e._v(" "),t("span",{staticClass:"help-block"},[e._v(e._s(e.errorMessage(e.validations.complemento)))])])])]),e._v(" "),e.debug?t("pre",[e._v(e._s(e.endereco))]):e._e()])},staticRenderFns:[]},e.exports.render._withStripped=!0},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=function(e){return function(n,t){return e===t.localidade+"/"+t.ufSigla||!t.idCep}};n.default=r}])});