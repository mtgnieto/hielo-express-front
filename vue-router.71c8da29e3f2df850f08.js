(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{2:function(t,e,r){"use strict";
/*!
  * vue-router v3.4.3
  * (c) 2020 Evan You
  * @license MIT
  */function n(t,e){for(var r in e)t[r]=e[r];return t}var o={name:"RouterView",functional:!0,props:{name:{type:String,default:"default"}},render:function(t,e){var r=e.props,o=e.children,a=e.parent,u=e.data;u.routerView=!0;for(var s=a.$createElement,c=r.name,p=a.$route,f=a._routerViewCache||(a._routerViewCache={}),h=0,l=!1;a&&a._routerRoot!==a;){var d=a.$vnode?a.$vnode.data:{};d.routerView&&h++,d.keepAlive&&a._directInactive&&a._inactive&&(l=!0),a=a.$parent}if(u.routerViewDepth=h,l){var v=f[c],y=v&&v.component;return y?(v.configProps&&i(y,u,v.route,v.configProps),s(y,u,o)):s()}var m=p.matched[h],g=m&&m.components[c];if(!m||!g)return f[c]=null,s();f[c]={component:g},u.registerRouteInstance=function(t,e){var r=m.instances[c];(e&&r!==t||!e&&r===t)&&(m.instances[c]=e)},(u.hook||(u.hook={})).prepatch=function(t,e){m.instances[c]=e.componentInstance},u.hook.init=function(t){t.data.keepAlive&&t.componentInstance&&t.componentInstance!==m.instances[c]&&(m.instances[c]=t.componentInstance)};var w=m.props&&m.props[c];return w&&(n(f[c],{route:p,configProps:w}),i(g,u,p,w)),s(g,u,o)}};function i(t,e,r,o){var i=e.props=function(t,e){switch(typeof e){case"undefined":return;case"object":return e;case"function":return e(t);case"boolean":return e?t.params:void 0;default:0}}(r,o);if(i){i=e.props=n({},i);var a=e.attrs=e.attrs||{};for(var u in i)t.props&&u in t.props||(a[u]=i[u],delete i[u])}}var a=/[!'()*]/g,u=function(t){return"%"+t.charCodeAt(0).toString(16)},s=/%2C/g,c=function(t){return encodeURIComponent(t).replace(a,u).replace(s,",")},p=decodeURIComponent;var f=function(t){return null==t||"object"==typeof t?t:String(t)};function h(t){var e={};return(t=t.trim().replace(/^(\?|#|&)/,""))?(t.split("&").forEach((function(t){var r=t.replace(/\+/g," ").split("="),n=p(r.shift()),o=r.length>0?p(r.join("=")):null;void 0===e[n]?e[n]=o:Array.isArray(e[n])?e[n].push(o):e[n]=[e[n],o]})),e):e}function l(t){var e=t?Object.keys(t).map((function(e){var r=t[e];if(void 0===r)return"";if(null===r)return c(e);if(Array.isArray(r)){var n=[];return r.forEach((function(t){void 0!==t&&(null===t?n.push(c(e)):n.push(c(e)+"="+c(t)))})),n.join("&")}return c(e)+"="+c(r)})).filter((function(t){return t.length>0})).join("&"):null;return e?"?"+e:""}var d=/\/?$/;function v(t,e,r,n){var o=n&&n.options.stringifyQuery,i=e.query||{};try{i=y(i)}catch(t){}var a={name:e.name||t&&t.name,meta:t&&t.meta||{},path:e.path||"/",hash:e.hash||"",query:i,params:e.params||{},fullPath:w(e,o),matched:t?g(t):[]};return r&&(a.redirectedFrom=w(r,o)),Object.freeze(a)}function y(t){if(Array.isArray(t))return t.map(y);if(t&&"object"==typeof t){var e={};for(var r in t)e[r]=y(t[r]);return e}return t}var m=v(null,{path:"/"});function g(t){for(var e=[];t;)e.unshift(t),t=t.parent;return e}function w(t,e){var r=t.path,n=t.query;void 0===n&&(n={});var o=t.hash;return void 0===o&&(o=""),(r||"/")+(e||l)(n)+o}function b(t,e){return e===m?t===e:!!e&&(t.path&&e.path?t.path.replace(d,"")===e.path.replace(d,"")&&t.hash===e.hash&&x(t.query,e.query):!(!t.name||!e.name)&&(t.name===e.name&&t.hash===e.hash&&x(t.query,e.query)&&x(t.params,e.params)))}function x(t,e){if(void 0===t&&(t={}),void 0===e&&(e={}),!t||!e)return t===e;var r=Object.keys(t),n=Object.keys(e);return r.length===n.length&&r.every((function(r){var n=t[r],o=e[r];return null==n||null==o?n===o:"object"==typeof n&&"object"==typeof o?x(n,o):String(n)===String(o)}))}function k(t,e,r){var n=t.charAt(0);if("/"===n)return t;if("?"===n||"#"===n)return e+t;var o=e.split("/");r&&o[o.length-1]||o.pop();for(var i=t.replace(/^\//,"").split("/"),a=0;a<i.length;a++){var u=i[a];".."===u?o.pop():"."!==u&&o.push(u)}return""!==o[0]&&o.unshift(""),o.join("/")}function R(t){return t.replace(/\/\//g,"/")}var E=Array.isArray||function(t){return"[object Array]"==Object.prototype.toString.call(t)},A=V,O=L,C=function(t,e){return P(L(t,e),e)},_=P,j=M,S=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g");function L(t,e){for(var r,n=[],o=0,i=0,a="",u=e&&e.delimiter||"/";null!=(r=S.exec(t));){var s=r[0],c=r[1],p=r.index;if(a+=t.slice(i,p),i=p+s.length,c)a+=c[1];else{var f=t[i],h=r[2],l=r[3],d=r[4],v=r[5],y=r[6],m=r[7];a&&(n.push(a),a="");var g=null!=h&&null!=f&&f!==h,w="+"===y||"*"===y,b="?"===y||"*"===y,x=r[2]||u,k=d||v;n.push({name:l||o++,prefix:h||"",delimiter:x,optional:b,repeat:w,partial:g,asterisk:!!m,pattern:k?q(k):m?".*":"[^"+T(x)+"]+?"})}}return i<t.length&&(a+=t.substr(i)),a&&n.push(a),n}function $(t){return encodeURI(t).replace(/[\/?#]/g,(function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()}))}function P(t,e){for(var r=new Array(t.length),n=0;n<t.length;n++)"object"==typeof t[n]&&(r[n]=new RegExp("^(?:"+t[n].pattern+")$",I(e)));return function(e,n){for(var o="",i=e||{},a=(n||{}).pretty?$:encodeURIComponent,u=0;u<t.length;u++){var s=t[u];if("string"!=typeof s){var c,p=i[s.name];if(null==p){if(s.optional){s.partial&&(o+=s.prefix);continue}throw new TypeError('Expected "'+s.name+'" to be defined')}if(E(p)){if(!s.repeat)throw new TypeError('Expected "'+s.name+'" to not repeat, but received `'+JSON.stringify(p)+"`");if(0===p.length){if(s.optional)continue;throw new TypeError('Expected "'+s.name+'" to not be empty')}for(var f=0;f<p.length;f++){if(c=a(p[f]),!r[u].test(c))throw new TypeError('Expected all "'+s.name+'" to match "'+s.pattern+'", but received `'+JSON.stringify(c)+"`");o+=(0===f?s.prefix:s.delimiter)+c}}else{if(c=s.asterisk?encodeURI(p).replace(/[?#]/g,(function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()})):a(p),!r[u].test(c))throw new TypeError('Expected "'+s.name+'" to match "'+s.pattern+'", but received "'+c+'"');o+=s.prefix+c}}else o+=s}return o}}function T(t){return t.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function q(t){return t.replace(/([=!:$\/()])/g,"\\$1")}function U(t,e){return t.keys=e,t}function I(t){return t&&t.sensitive?"":"i"}function M(t,e,r){E(e)||(r=e||r,e=[]);for(var n=(r=r||{}).strict,o=!1!==r.end,i="",a=0;a<t.length;a++){var u=t[a];if("string"==typeof u)i+=T(u);else{var s=T(u.prefix),c="(?:"+u.pattern+")";e.push(u),u.repeat&&(c+="(?:"+s+c+")*"),i+=c=u.optional?u.partial?s+"("+c+")?":"(?:"+s+"("+c+"))?":s+"("+c+")"}}var p=T(r.delimiter||"/"),f=i.slice(-p.length)===p;return n||(i=(f?i.slice(0,-p.length):i)+"(?:"+p+"(?=$))?"),i+=o?"$":n&&f?"":"(?="+p+"|$)",U(new RegExp("^"+i,I(r)),e)}function V(t,e,r){return E(e)||(r=e||r,e=[]),r=r||{},t instanceof RegExp?function(t,e){var r=t.source.match(/\((?!\?)/g);if(r)for(var n=0;n<r.length;n++)e.push({name:n,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return U(t,e)}(t,e):E(t)?function(t,e,r){for(var n=[],o=0;o<t.length;o++)n.push(V(t[o],e,r).source);return U(new RegExp("(?:"+n.join("|")+")",I(r)),e)}(t,e,r):function(t,e,r){return M(L(t,r),e,r)}(t,e,r)}A.parse=O,A.compile=C,A.tokensToFunction=_,A.tokensToRegExp=j;var B=Object.create(null);function F(t,e,r){e=e||{};try{var n=B[t]||(B[t]=A.compile(t));return"string"==typeof e.pathMatch&&(e[0]=e.pathMatch),n(e,{pretty:!0})}catch(t){return""}finally{delete e[0]}}function H(t,e,r,o){var i="string"==typeof t?{path:t}:t;if(i._normalized)return i;if(i.name){var a=(i=n({},t)).params;return a&&"object"==typeof a&&(i.params=n({},a)),i}if(!i.path&&i.params&&e){(i=n({},i))._normalized=!0;var u=n(n({},e.params),i.params);if(e.name)i.name=e.name,i.params=u;else if(e.matched.length){var s=e.matched[e.matched.length-1].path;i.path=F(s,u,e.path)}else 0;return i}var c=function(t){var e="",r="",n=t.indexOf("#");n>=0&&(e=t.slice(n),t=t.slice(0,n));var o=t.indexOf("?");return o>=0&&(r=t.slice(o+1),t=t.slice(0,o)),{path:t,query:r,hash:e}}(i.path||""),p=e&&e.path||"/",l=c.path?k(c.path,p,r||i.append):p,d=function(t,e,r){void 0===e&&(e={});var n,o=r||h;try{n=o(t||"")}catch(t){n={}}for(var i in e){var a=e[i];n[i]=Array.isArray(a)?a.map(f):f(a)}return n}(c.query,i.query,o&&o.options.parseQuery),v=i.hash||c.hash;return v&&"#"!==v.charAt(0)&&(v="#"+v),{_normalized:!0,path:l,query:d,hash:v}}var N,z=function(){},D={name:"RouterLink",props:{to:{type:[String,Object],required:!0},tag:{type:String,default:"a"},exact:Boolean,append:Boolean,replace:Boolean,activeClass:String,exactActiveClass:String,ariaCurrentValue:{type:String,default:"page"},event:{type:[String,Array],default:"click"}},render:function(t){var e=this,r=this.$router,o=this.$route,i=r.resolve(this.to,o,this.append),a=i.location,u=i.route,s=i.href,c={},p=r.options.linkActiveClass,f=r.options.linkExactActiveClass,h=null==p?"router-link-active":p,l=null==f?"router-link-exact-active":f,y=null==this.activeClass?h:this.activeClass,m=null==this.exactActiveClass?l:this.exactActiveClass,g=u.redirectedFrom?v(null,H(u.redirectedFrom),null,r):u;c[m]=b(o,g),c[y]=this.exact?c[m]:function(t,e){return 0===t.path.replace(d,"/").indexOf(e.path.replace(d,"/"))&&(!e.hash||t.hash===e.hash)&&function(t,e){for(var r in e)if(!(r in t))return!1;return!0}(t.query,e.query)}(o,g);var w=c[m]?this.ariaCurrentValue:null,x=function(t){J(t)&&(e.replace?r.replace(a,z):r.push(a,z))},k={click:J};Array.isArray(this.event)?this.event.forEach((function(t){k[t]=x})):k[this.event]=x;var R={class:c},E=!this.$scopedSlots.$hasNormal&&this.$scopedSlots.default&&this.$scopedSlots.default({href:s,route:u,navigate:x,isActive:c[y],isExactActive:c[m]});if(E){if(1===E.length)return E[0];if(E.length>1||!E.length)return 0===E.length?t():t("span",{},E)}if("a"===this.tag)R.on=k,R.attrs={href:s,"aria-current":w};else{var A=function t(e){var r;if(e)for(var n=0;n<e.length;n++){if("a"===(r=e[n]).tag)return r;if(r.children&&(r=t(r.children)))return r}}(this.$slots.default);if(A){A.isStatic=!1;var O=A.data=n({},A.data);for(var C in O.on=O.on||{},O.on){var _=O.on[C];C in k&&(O.on[C]=Array.isArray(_)?_:[_])}for(var j in k)j in O.on?O.on[j].push(k[j]):O.on[j]=x;var S=A.data.attrs=n({},A.data.attrs);S.href=s,S["aria-current"]=w}else R.on=k}return t(this.tag,R,this.$slots.default)}};function J(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey||t.defaultPrevented||void 0!==t.button&&0!==t.button)){if(t.currentTarget&&t.currentTarget.getAttribute){var e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}var K="undefined"!=typeof window;function Q(t,e,r,n){var o=e||[],i=r||Object.create(null),a=n||Object.create(null);t.forEach((function(t){!function t(e,r,n,o,i,a){var u=o.path,s=o.name;0;var c=o.pathToRegexpOptions||{},p=function(t,e,r){r||(t=t.replace(/\/$/,""));if("/"===t[0])return t;if(null==e)return t;return R(e.path+"/"+t)}(u,i,c.strict);"boolean"==typeof o.caseSensitive&&(c.sensitive=o.caseSensitive);var f={path:p,regex:X(p,c),components:o.components||{default:o.component},instances:{},name:s,parent:i,matchAs:a,redirect:o.redirect,beforeEnter:o.beforeEnter,meta:o.meta||{},props:null==o.props?{}:o.components?o.props:{default:o.props}};o.children&&o.children.forEach((function(o){var i=a?R(a+"/"+o.path):void 0;t(e,r,n,o,f,i)}));r[f.path]||(e.push(f.path),r[f.path]=f);if(void 0!==o.alias)for(var h=Array.isArray(o.alias)?o.alias:[o.alias],l=0;l<h.length;++l){0;var d={path:h[l],children:o.children};t(e,r,n,d,i,f.path||"/")}s&&(n[s]||(n[s]=f))}(o,i,a,t)}));for(var u=0,s=o.length;u<s;u++)"*"===o[u]&&(o.push(o.splice(u,1)[0]),s--,u--);return{pathList:o,pathMap:i,nameMap:a}}function X(t,e){return A(t,[],e)}function Y(t,e){var r=Q(t),n=r.pathList,o=r.pathMap,i=r.nameMap;function a(t,r,a){var u=H(t,r,!1,e),c=u.name;if(c){var p=i[c];if(!p)return s(null,u);var f=p.regex.keys.filter((function(t){return!t.optional})).map((function(t){return t.name}));if("object"!=typeof u.params&&(u.params={}),r&&"object"==typeof r.params)for(var h in r.params)!(h in u.params)&&f.indexOf(h)>-1&&(u.params[h]=r.params[h]);return u.path=F(p.path,u.params),s(p,u,a)}if(u.path){u.params={};for(var l=0;l<n.length;l++){var d=n[l],v=o[d];if(W(v.regex,u.path,u.params))return s(v,u,a)}}return s(null,u)}function u(t,r){var n=t.redirect,o="function"==typeof n?n(v(t,r,null,e)):n;if("string"==typeof o&&(o={path:o}),!o||"object"!=typeof o)return s(null,r);var u=o,c=u.name,p=u.path,f=r.query,h=r.hash,l=r.params;if(f=u.hasOwnProperty("query")?u.query:f,h=u.hasOwnProperty("hash")?u.hash:h,l=u.hasOwnProperty("params")?u.params:l,c){i[c];return a({_normalized:!0,name:c,query:f,hash:h,params:l},void 0,r)}if(p){var d=function(t,e){return k(t,e.parent?e.parent.path:"/",!0)}(p,t);return a({_normalized:!0,path:F(d,l),query:f,hash:h},void 0,r)}return s(null,r)}function s(t,r,n){return t&&t.redirect?u(t,n||r):t&&t.matchAs?function(t,e,r){var n=a({_normalized:!0,path:F(r,e.params)});if(n){var o=n.matched,i=o[o.length-1];return e.params=n.params,s(i,e)}return s(null,e)}(0,r,t.matchAs):v(t,r,n,e)}return{match:a,addRoutes:function(t){Q(t,n,o,i)}}}function W(t,e,r){var n=e.match(t);if(!n)return!1;if(!r)return!0;for(var o=1,i=n.length;o<i;++o){var a=t.keys[o-1],u="string"==typeof n[o]?decodeURIComponent(n[o]):n[o];a&&(r[a.name||"pathMatch"]=u)}return!0}var G=K&&window.performance&&window.performance.now?window.performance:Date;function Z(){return G.now().toFixed(3)}var tt=Z();function et(){return tt}function rt(t){return tt=t}var nt=Object.create(null);function ot(){"scrollRestoration"in window.history&&(window.history.scrollRestoration="manual");var t=window.location.protocol+"//"+window.location.host,e=window.location.href.replace(t,""),r=n({},window.history.state);return r.key=et(),window.history.replaceState(r,"",e),window.addEventListener("popstate",ut),function(){window.removeEventListener("popstate",ut)}}function it(t,e,r,n){if(t.app){var o=t.options.scrollBehavior;o&&t.app.$nextTick((function(){var i=function(){var t=et();if(t)return nt[t]}(),a=o.call(t,e,r,n?i:null);a&&("function"==typeof a.then?a.then((function(t){ht(t,i)})).catch((function(t){0})):ht(a,i))}))}}function at(){var t=et();t&&(nt[t]={x:window.pageXOffset,y:window.pageYOffset})}function ut(t){at(),t.state&&t.state.key&&rt(t.state.key)}function st(t){return pt(t.x)||pt(t.y)}function ct(t){return{x:pt(t.x)?t.x:window.pageXOffset,y:pt(t.y)?t.y:window.pageYOffset}}function pt(t){return"number"==typeof t}var ft=/^#\d/;function ht(t,e){var r,n="object"==typeof t;if(n&&"string"==typeof t.selector){var o=ft.test(t.selector)?document.getElementById(t.selector.slice(1)):document.querySelector(t.selector);if(o){var i=t.offset&&"object"==typeof t.offset?t.offset:{};e=function(t,e){var r=document.documentElement.getBoundingClientRect(),n=t.getBoundingClientRect();return{x:n.left-r.left-e.x,y:n.top-r.top-e.y}}(o,i={x:pt((r=i).x)?r.x:0,y:pt(r.y)?r.y:0})}else st(t)&&(e=ct(t))}else n&&st(t)&&(e=ct(t));e&&window.scrollTo(e.x,e.y)}var lt,dt=K&&((-1===(lt=window.navigator.userAgent).indexOf("Android 2.")&&-1===lt.indexOf("Android 4.0")||-1===lt.indexOf("Mobile Safari")||-1!==lt.indexOf("Chrome")||-1!==lt.indexOf("Windows Phone"))&&window.history&&"function"==typeof window.history.pushState);function vt(t,e){at();var r=window.history;try{if(e){var o=n({},r.state);o.key=et(),r.replaceState(o,"",t)}else r.pushState({key:rt(Z())},"",t)}catch(r){window.location[e?"replace":"assign"](t)}}function yt(t){vt(t,!0)}function mt(t,e,r){var n=function(o){o>=t.length?r():t[o]?e(t[o],(function(){n(o+1)})):n(o+1)};n(0)}var gt={redirected:2,aborted:4,cancelled:8,duplicated:16};function wt(t,e){return xt(t,e,gt.redirected,'Redirected when going from "'+t.fullPath+'" to "'+function(t){if("string"==typeof t)return t;if("path"in t)return t.path;var e={};return kt.forEach((function(r){r in t&&(e[r]=t[r])})),JSON.stringify(e,null,2)}(e)+'" via a navigation guard.')}function bt(t,e){return xt(t,e,gt.cancelled,'Navigation cancelled from "'+t.fullPath+'" to "'+e.fullPath+'" with a new navigation.')}function xt(t,e,r,n){var o=new Error(n);return o._isRouter=!0,o.from=t,o.to=e,o.type=r,o}var kt=["params","query","hash"];function Rt(t){return Object.prototype.toString.call(t).indexOf("Error")>-1}function Et(t,e){return Rt(t)&&t._isRouter&&(null==e||t.type===e)}function At(t){return function(e,r,n){var o=!1,i=0,a=null;Ot(t,(function(t,e,r,u){if("function"==typeof t&&void 0===t.cid){o=!0,i++;var s,c=jt((function(e){var o;((o=e).__esModule||_t&&"Module"===o[Symbol.toStringTag])&&(e=e.default),t.resolved="function"==typeof e?e:N.extend(e),r.components[u]=e,--i<=0&&n()})),p=jt((function(t){var e="Failed to resolve async component "+u+": "+t;a||(a=Rt(t)?t:new Error(e),n(a))}));try{s=t(c,p)}catch(t){p(t)}if(s)if("function"==typeof s.then)s.then(c,p);else{var f=s.component;f&&"function"==typeof f.then&&f.then(c,p)}}})),o||n()}}function Ot(t,e){return Ct(t.map((function(t){return Object.keys(t.components).map((function(r){return e(t.components[r],t.instances[r],t,r)}))})))}function Ct(t){return Array.prototype.concat.apply([],t)}var _t="function"==typeof Symbol&&"symbol"==typeof Symbol.toStringTag;function jt(t){var e=!1;return function(){for(var r=[],n=arguments.length;n--;)r[n]=arguments[n];if(!e)return e=!0,t.apply(this,r)}}var St=function(t,e){this.router=t,this.base=function(t){if(!t)if(K){var e=document.querySelector("base");t=(t=e&&e.getAttribute("href")||"/").replace(/^https?:\/\/[^\/]+/,"")}else t="/";"/"!==t.charAt(0)&&(t="/"+t);return t.replace(/\/$/,"")}(e),this.current=m,this.pending=null,this.ready=!1,this.readyCbs=[],this.readyErrorCbs=[],this.errorCbs=[],this.listeners=[]};function Lt(t,e,r,n){var o=Ot(t,(function(t,n,o,i){var a=function(t,e){"function"!=typeof t&&(t=N.extend(t));return t.options[e]}(t,e);if(a)return Array.isArray(a)?a.map((function(t){return r(t,n,o,i)})):r(a,n,o,i)}));return Ct(n?o.reverse():o)}function $t(t,e){if(e)return function(){return t.apply(e,arguments)}}St.prototype.listen=function(t){this.cb=t},St.prototype.onReady=function(t,e){this.ready?t():(this.readyCbs.push(t),e&&this.readyErrorCbs.push(e))},St.prototype.onError=function(t){this.errorCbs.push(t)},St.prototype.transitionTo=function(t,e,r){var n,o=this;try{n=this.router.match(t,this.current)}catch(t){throw this.errorCbs.forEach((function(e){e(t)})),t}this.confirmTransition(n,(function(){var t=o.current;o.updateRoute(n),e&&e(n),o.ensureURL(),o.router.afterHooks.forEach((function(e){e&&e(n,t)})),o.ready||(o.ready=!0,o.readyCbs.forEach((function(t){t(n)})))}),(function(t){r&&r(t),t&&!o.ready&&(o.ready=!0,Et(t,gt.redirected)?o.readyCbs.forEach((function(t){t(n)})):o.readyErrorCbs.forEach((function(e){e(t)})))}))},St.prototype.confirmTransition=function(t,e,r){var n,o,i=this,a=this.current,u=function(t){!Et(t)&&Rt(t)&&(i.errorCbs.length?i.errorCbs.forEach((function(e){e(t)})):console.error(t)),r&&r(t)},s=t.matched.length-1,c=a.matched.length-1;if(b(t,a)&&s===c&&t.matched[s]===a.matched[c])return this.ensureURL(),u(((o=xt(n=a,t,gt.duplicated,'Avoided redundant navigation to current location: "'+n.fullPath+'".')).name="NavigationDuplicated",o));var p=function(t,e){var r,n=Math.max(t.length,e.length);for(r=0;r<n&&t[r]===e[r];r++);return{updated:e.slice(0,r),activated:e.slice(r),deactivated:t.slice(r)}}(this.current.matched,t.matched),f=p.updated,h=p.deactivated,l=p.activated,d=[].concat(function(t){return Lt(t,"beforeRouteLeave",$t,!0)}(h),this.router.beforeHooks,function(t){return Lt(t,"beforeRouteUpdate",$t)}(f),l.map((function(t){return t.beforeEnter})),At(l));this.pending=t;var v=function(e,r){if(i.pending!==t)return u(bt(a,t));try{e(t,a,(function(e){!1===e?(i.ensureURL(!0),u(function(t,e){return xt(t,e,gt.aborted,'Navigation aborted from "'+t.fullPath+'" to "'+e.fullPath+'" via a navigation guard.')}(a,t))):Rt(e)?(i.ensureURL(!0),u(e)):"string"==typeof e||"object"==typeof e&&("string"==typeof e.path||"string"==typeof e.name)?(u(wt(a,t)),"object"==typeof e&&e.replace?i.replace(e):i.push(e)):r(e)}))}catch(t){u(t)}};mt(d,v,(function(){var r=[];mt(function(t,e,r){return Lt(t,"beforeRouteEnter",(function(t,n,o,i){return function(t,e,r,n,o){return function(i,a,u){return t(i,a,(function(t){"function"==typeof t&&n.push((function(){!function t(e,r,n,o){r[n]&&!r[n]._isBeingDestroyed?e(r[n]):o()&&setTimeout((function(){t(e,r,n,o)}),16)}(t,e.instances,r,o)})),u(t)}))}}(t,o,i,e,r)}))}(l,r,(function(){return i.current===t})).concat(i.router.resolveHooks),v,(function(){if(i.pending!==t)return u(bt(a,t));i.pending=null,e(t),i.router.app&&i.router.app.$nextTick((function(){r.forEach((function(t){t()}))}))}))}))},St.prototype.updateRoute=function(t){this.current=t,this.cb&&this.cb(t)},St.prototype.setupListeners=function(){},St.prototype.teardownListeners=function(){this.listeners.forEach((function(t){t()})),this.listeners=[]};var Pt=function(t){function e(e,r){t.call(this,e,r),this._startLocation=Tt(this.base)}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.setupListeners=function(){var t=this;if(!(this.listeners.length>0)){var e=this.router,r=e.options.scrollBehavior,n=dt&&r;n&&this.listeners.push(ot());var o=function(){var r=t.current,o=Tt(t.base);t.current===m&&o===t._startLocation||t.transitionTo(o,(function(t){n&&it(e,t,r,!0)}))};window.addEventListener("popstate",o),this.listeners.push((function(){window.removeEventListener("popstate",o)}))}},e.prototype.go=function(t){window.history.go(t)},e.prototype.push=function(t,e,r){var n=this,o=this.current;this.transitionTo(t,(function(t){vt(R(n.base+t.fullPath)),it(n.router,t,o,!1),e&&e(t)}),r)},e.prototype.replace=function(t,e,r){var n=this,o=this.current;this.transitionTo(t,(function(t){yt(R(n.base+t.fullPath)),it(n.router,t,o,!1),e&&e(t)}),r)},e.prototype.ensureURL=function(t){if(Tt(this.base)!==this.current.fullPath){var e=R(this.base+this.current.fullPath);t?vt(e):yt(e)}},e.prototype.getCurrentLocation=function(){return Tt(this.base)},e}(St);function Tt(t){var e=decodeURI(window.location.pathname);return t&&0===e.toLowerCase().indexOf(t.toLowerCase())&&(e=e.slice(t.length)),(e||"/")+window.location.search+window.location.hash}var qt=function(t){function e(e,r,n){t.call(this,e,r),n&&function(t){var e=Tt(t);if(!/^\/#/.test(e))return window.location.replace(R(t+"/#"+e)),!0}(this.base)||Ut()}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.setupListeners=function(){var t=this;if(!(this.listeners.length>0)){var e=this.router.options.scrollBehavior,r=dt&&e;r&&this.listeners.push(ot());var n=function(){var e=t.current;Ut()&&t.transitionTo(It(),(function(n){r&&it(t.router,n,e,!0),dt||Bt(n.fullPath)}))},o=dt?"popstate":"hashchange";window.addEventListener(o,n),this.listeners.push((function(){window.removeEventListener(o,n)}))}},e.prototype.push=function(t,e,r){var n=this,o=this.current;this.transitionTo(t,(function(t){Vt(t.fullPath),it(n.router,t,o,!1),e&&e(t)}),r)},e.prototype.replace=function(t,e,r){var n=this,o=this.current;this.transitionTo(t,(function(t){Bt(t.fullPath),it(n.router,t,o,!1),e&&e(t)}),r)},e.prototype.go=function(t){window.history.go(t)},e.prototype.ensureURL=function(t){var e=this.current.fullPath;It()!==e&&(t?Vt(e):Bt(e))},e.prototype.getCurrentLocation=function(){return It()},e}(St);function Ut(){var t=It();return"/"===t.charAt(0)||(Bt("/"+t),!1)}function It(){var t=window.location.href,e=t.indexOf("#");if(e<0)return"";var r=(t=t.slice(e+1)).indexOf("?");if(r<0){var n=t.indexOf("#");t=n>-1?decodeURI(t.slice(0,n))+t.slice(n):decodeURI(t)}else t=decodeURI(t.slice(0,r))+t.slice(r);return t}function Mt(t){var e=window.location.href,r=e.indexOf("#");return(r>=0?e.slice(0,r):e)+"#"+t}function Vt(t){dt?vt(Mt(t)):window.location.hash=t}function Bt(t){dt?yt(Mt(t)):window.location.replace(Mt(t))}var Ft=function(t){function e(e,r){t.call(this,e,r),this.stack=[],this.index=-1}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.push=function(t,e,r){var n=this;this.transitionTo(t,(function(t){n.stack=n.stack.slice(0,n.index+1).concat(t),n.index++,e&&e(t)}),r)},e.prototype.replace=function(t,e,r){var n=this;this.transitionTo(t,(function(t){n.stack=n.stack.slice(0,n.index).concat(t),e&&e(t)}),r)},e.prototype.go=function(t){var e=this,r=this.index+t;if(!(r<0||r>=this.stack.length)){var n=this.stack[r];this.confirmTransition(n,(function(){e.index=r,e.updateRoute(n)}),(function(t){Et(t,gt.duplicated)&&(e.index=r)}))}},e.prototype.getCurrentLocation=function(){var t=this.stack[this.stack.length-1];return t?t.fullPath:"/"},e.prototype.ensureURL=function(){},e}(St),Ht=function(t){void 0===t&&(t={}),this.app=null,this.apps=[],this.options=t,this.beforeHooks=[],this.resolveHooks=[],this.afterHooks=[],this.matcher=Y(t.routes||[],this);var e=t.mode||"hash";switch(this.fallback="history"===e&&!dt&&!1!==t.fallback,this.fallback&&(e="hash"),K||(e="abstract"),this.mode=e,e){case"history":this.history=new Pt(this,t.base);break;case"hash":this.history=new qt(this,t.base,this.fallback);break;case"abstract":this.history=new Ft(this,t.base);break;default:0}},Nt={currentRoute:{configurable:!0}};function zt(t,e){return t.push(e),function(){var r=t.indexOf(e);r>-1&&t.splice(r,1)}}Ht.prototype.match=function(t,e,r){return this.matcher.match(t,e,r)},Nt.currentRoute.get=function(){return this.history&&this.history.current},Ht.prototype.init=function(t){var e=this;if(this.apps.push(t),t.$once("hook:destroyed",(function(){var r=e.apps.indexOf(t);r>-1&&e.apps.splice(r,1),e.app===t&&(e.app=e.apps[0]||null),e.app||e.history.teardownListeners()})),!this.app){this.app=t;var r=this.history;if(r instanceof Pt||r instanceof qt){var n=function(t){r.setupListeners(),function(t){var n=r.current,o=e.options.scrollBehavior;dt&&o&&"fullPath"in t&&it(e,t,n,!1)}(t)};r.transitionTo(r.getCurrentLocation(),n,n)}r.listen((function(t){e.apps.forEach((function(e){e._route=t}))}))}},Ht.prototype.beforeEach=function(t){return zt(this.beforeHooks,t)},Ht.prototype.beforeResolve=function(t){return zt(this.resolveHooks,t)},Ht.prototype.afterEach=function(t){return zt(this.afterHooks,t)},Ht.prototype.onReady=function(t,e){this.history.onReady(t,e)},Ht.prototype.onError=function(t){this.history.onError(t)},Ht.prototype.push=function(t,e,r){var n=this;if(!e&&!r&&"undefined"!=typeof Promise)return new Promise((function(e,r){n.history.push(t,e,r)}));this.history.push(t,e,r)},Ht.prototype.replace=function(t,e,r){var n=this;if(!e&&!r&&"undefined"!=typeof Promise)return new Promise((function(e,r){n.history.replace(t,e,r)}));this.history.replace(t,e,r)},Ht.prototype.go=function(t){this.history.go(t)},Ht.prototype.back=function(){this.go(-1)},Ht.prototype.forward=function(){this.go(1)},Ht.prototype.getMatchedComponents=function(t){var e=t?t.matched?t:this.resolve(t).route:this.currentRoute;return e?[].concat.apply([],e.matched.map((function(t){return Object.keys(t.components).map((function(e){return t.components[e]}))}))):[]},Ht.prototype.resolve=function(t,e,r){var n=H(t,e=e||this.history.current,r,this),o=this.match(n,e),i=o.redirectedFrom||o.fullPath;return{location:n,route:o,href:function(t,e,r){var n="hash"===r?"#"+e:e;return t?R(t+"/"+n):n}(this.history.base,i,this.mode),normalizedTo:n,resolved:o}},Ht.prototype.addRoutes=function(t){this.matcher.addRoutes(t),this.history.current!==m&&this.history.transitionTo(this.history.getCurrentLocation())},Object.defineProperties(Ht.prototype,Nt),Ht.install=function t(e){if(!t.installed||N!==e){t.installed=!0,N=e;var r=function(t){return void 0!==t},n=function(t,e){var n=t.$options._parentVnode;r(n)&&r(n=n.data)&&r(n=n.registerRouteInstance)&&n(t,e)};e.mixin({beforeCreate:function(){r(this.$options.router)?(this._routerRoot=this,this._router=this.$options.router,this._router.init(this),e.util.defineReactive(this,"_route",this._router.history.current)):this._routerRoot=this.$parent&&this.$parent._routerRoot||this,n(this,this)},destroyed:function(){n(this)}}),Object.defineProperty(e.prototype,"$router",{get:function(){return this._routerRoot._router}}),Object.defineProperty(e.prototype,"$route",{get:function(){return this._routerRoot._route}}),e.component("RouterView",o),e.component("RouterLink",D);var i=e.config.optionMergeStrategies;i.beforeRouteEnter=i.beforeRouteLeave=i.beforeRouteUpdate=i.created}},Ht.version="3.4.3",Ht.isNavigationFailure=Et,Ht.NavigationFailureType=gt,K&&window.Vue&&window.Vue.use(Ht),e.a=Ht}}]);