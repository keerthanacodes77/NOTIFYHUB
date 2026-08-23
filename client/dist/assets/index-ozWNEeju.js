function cy(t,e){for(var n=0;n<e.length;n++){const i=e[n];if(typeof i!="string"&&!Array.isArray(i)){for(const r in i)if(r!=="default"&&!(r in t)){const s=Object.getOwnPropertyDescriptor(i,r);s&&Object.defineProperty(t,r,s.get?s:{enumerable:!0,get:()=>i[r]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function uy(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Ig={exports:{}},bc={},Ug={exports:{}},Oe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var yo=Symbol.for("react.element"),dy=Symbol.for("react.portal"),fy=Symbol.for("react.fragment"),hy=Symbol.for("react.strict_mode"),py=Symbol.for("react.profiler"),my=Symbol.for("react.provider"),gy=Symbol.for("react.context"),xy=Symbol.for("react.forward_ref"),vy=Symbol.for("react.suspense"),yy=Symbol.for("react.memo"),_y=Symbol.for("react.lazy"),hp=Symbol.iterator;function Sy(t){return t===null||typeof t!="object"?null:(t=hp&&t[hp]||t["@@iterator"],typeof t=="function"?t:null)}var kg={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},jg=Object.assign,zg={};function sa(t,e,n){this.props=t,this.context=e,this.refs=zg,this.updater=n||kg}sa.prototype.isReactComponent={};sa.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};sa.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Fg(){}Fg.prototype=sa.prototype;function Bf(t,e,n){this.props=t,this.context=e,this.refs=zg,this.updater=n||kg}var Hf=Bf.prototype=new Fg;Hf.constructor=Bf;jg(Hf,sa.prototype);Hf.isPureReactComponent=!0;var pp=Array.isArray,Og=Object.prototype.hasOwnProperty,Vf={current:null},Bg={key:!0,ref:!0,__self:!0,__source:!0};function Hg(t,e,n){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Og.call(e,i)&&!Bg.hasOwnProperty(i)&&(r[i]=e[i]);var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){for(var c=Array(l),u=0;u<l;u++)c[u]=arguments[u+2];r.children=c}if(t&&t.defaultProps)for(i in l=t.defaultProps,l)r[i]===void 0&&(r[i]=l[i]);return{$$typeof:yo,type:t,key:s,ref:o,props:r,_owner:Vf.current}}function My(t,e){return{$$typeof:yo,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Wf(t){return typeof t=="object"&&t!==null&&t.$$typeof===yo}function Ey(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var mp=/\/+/g;function ru(t,e){return typeof t=="object"&&t!==null&&t.key!=null?Ey(""+t.key):e.toString(36)}function Ml(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case yo:case dy:o=!0}}if(o)return o=t,r=r(o),t=i===""?"."+ru(o,0):i,pp(r)?(n="",t!=null&&(n=t.replace(mp,"$&/")+"/"),Ml(r,e,n,"",function(u){return u})):r!=null&&(Wf(r)&&(r=My(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(mp,"$&/")+"/")+t)),e.push(r)),1;if(o=0,i=i===""?".":i+":",pp(t))for(var l=0;l<t.length;l++){s=t[l];var c=i+ru(s,l);o+=Ml(s,e,n,c,r)}else if(c=Sy(t),typeof c=="function")for(t=c.call(t),l=0;!(s=t.next()).done;)s=s.value,c=i+ru(s,l++),o+=Ml(s,e,n,c,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Io(t,e,n){if(t==null)return t;var i=[],r=0;return Ml(t,i,"","",function(s){return e.call(n,s,r++)}),i}function wy(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Yt={current:null},El={transition:null},by={ReactCurrentDispatcher:Yt,ReactCurrentBatchConfig:El,ReactCurrentOwner:Vf};function Vg(){throw Error("act(...) is not supported in production builds of React.")}Oe.Children={map:Io,forEach:function(t,e,n){Io(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Io(t,function(){e++}),e},toArray:function(t){return Io(t,function(e){return e})||[]},only:function(t){if(!Wf(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Oe.Component=sa;Oe.Fragment=fy;Oe.Profiler=py;Oe.PureComponent=Bf;Oe.StrictMode=hy;Oe.Suspense=vy;Oe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=by;Oe.act=Vg;Oe.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=jg({},t.props),r=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Vf.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(c in e)Og.call(e,c)&&!Bg.hasOwnProperty(c)&&(i[c]=e[c]===void 0&&l!==void 0?l[c]:e[c])}var c=arguments.length-2;if(c===1)i.children=n;else if(1<c){l=Array(c);for(var u=0;u<c;u++)l[u]=arguments[u+2];i.children=l}return{$$typeof:yo,type:t.type,key:r,ref:s,props:i,_owner:o}};Oe.createContext=function(t){return t={$$typeof:gy,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:my,_context:t},t.Consumer=t};Oe.createElement=Hg;Oe.createFactory=function(t){var e=Hg.bind(null,t);return e.type=t,e};Oe.createRef=function(){return{current:null}};Oe.forwardRef=function(t){return{$$typeof:xy,render:t}};Oe.isValidElement=Wf;Oe.lazy=function(t){return{$$typeof:_y,_payload:{_status:-1,_result:t},_init:wy}};Oe.memo=function(t,e){return{$$typeof:yy,type:t,compare:e===void 0?null:e}};Oe.startTransition=function(t){var e=El.transition;El.transition={};try{t()}finally{El.transition=e}};Oe.unstable_act=Vg;Oe.useCallback=function(t,e){return Yt.current.useCallback(t,e)};Oe.useContext=function(t){return Yt.current.useContext(t)};Oe.useDebugValue=function(){};Oe.useDeferredValue=function(t){return Yt.current.useDeferredValue(t)};Oe.useEffect=function(t,e){return Yt.current.useEffect(t,e)};Oe.useId=function(){return Yt.current.useId()};Oe.useImperativeHandle=function(t,e,n){return Yt.current.useImperativeHandle(t,e,n)};Oe.useInsertionEffect=function(t,e){return Yt.current.useInsertionEffect(t,e)};Oe.useLayoutEffect=function(t,e){return Yt.current.useLayoutEffect(t,e)};Oe.useMemo=function(t,e){return Yt.current.useMemo(t,e)};Oe.useReducer=function(t,e,n){return Yt.current.useReducer(t,e,n)};Oe.useRef=function(t){return Yt.current.useRef(t)};Oe.useState=function(t){return Yt.current.useState(t)};Oe.useSyncExternalStore=function(t,e,n){return Yt.current.useSyncExternalStore(t,e,n)};Oe.useTransition=function(){return Yt.current.useTransition()};Oe.version="18.3.1";Ug.exports=Oe;var P=Ug.exports;const Wg=uy(P),Ty=cy({__proto__:null,default:Wg},[P]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ay=P,Cy=Symbol.for("react.element"),Ry=Symbol.for("react.fragment"),Py=Object.prototype.hasOwnProperty,Ny=Ay.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Ly={key:!0,ref:!0,__self:!0,__source:!0};function Gg(t,e,n){var i,r={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)Py.call(e,i)&&!Ly.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:Cy,type:t,key:s,ref:o,props:r,_owner:Ny.current}}bc.Fragment=Ry;bc.jsx=Gg;bc.jsxs=Gg;Ig.exports=bc;var a=Ig.exports,ld={},Xg={exports:{}},vn={},qg={exports:{}},$g={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(U,Y){var Z=U.length;U.push(Y);e:for(;0<Z;){var oe=Z-1>>>1,Se=U[oe];if(0<r(Se,Y))U[oe]=Y,U[Z]=Se,Z=oe;else break e}}function n(U){return U.length===0?null:U[0]}function i(U){if(U.length===0)return null;var Y=U[0],Z=U.pop();if(Z!==Y){U[0]=Z;e:for(var oe=0,Se=U.length,Be=Se>>>1;oe<Be;){var X=2*(oe+1)-1,ie=U[X],he=X+1,de=U[he];if(0>r(ie,Z))he<Se&&0>r(de,ie)?(U[oe]=de,U[he]=Z,oe=he):(U[oe]=ie,U[X]=Z,oe=X);else if(he<Se&&0>r(de,Z))U[oe]=de,U[he]=Z,oe=he;else break e}}return Y}function r(U,Y){var Z=U.sortIndex-Y.sortIndex;return Z!==0?Z:U.id-Y.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var c=[],u=[],f=1,h=null,p=3,g=!1,y=!1,_=!1,m=typeof setTimeout=="function"?setTimeout:null,d=typeof clearTimeout=="function"?clearTimeout:null,x=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(U){for(var Y=n(u);Y!==null;){if(Y.callback===null)i(u);else if(Y.startTime<=U)i(u),Y.sortIndex=Y.expirationTime,e(c,Y);else break;Y=n(u)}}function S(U){if(_=!1,v(U),!y)if(n(c)!==null)y=!0,D(C);else{var Y=n(u);Y!==null&&V(S,Y.startTime-U)}}function C(U,Y){y=!1,_&&(_=!1,d(N),N=-1),g=!0;var Z=p;try{for(v(Y),h=n(c);h!==null&&(!(h.expirationTime>Y)||U&&!R());){var oe=h.callback;if(typeof oe=="function"){h.callback=null,p=h.priorityLevel;var Se=oe(h.expirationTime<=Y);Y=t.unstable_now(),typeof Se=="function"?h.callback=Se:h===n(c)&&i(c),v(Y)}else i(c);h=n(c)}if(h!==null)var Be=!0;else{var X=n(u);X!==null&&V(S,X.startTime-Y),Be=!1}return Be}finally{h=null,p=Z,g=!1}}var T=!1,A=null,N=-1,w=5,M=-1;function R(){return!(t.unstable_now()-M<w)}function G(){if(A!==null){var U=t.unstable_now();M=U;var Y=!0;try{Y=A(!0,U)}finally{Y?O():(T=!1,A=null)}}else T=!1}var O;if(typeof x=="function")O=function(){x(G)};else if(typeof MessageChannel<"u"){var q=new MessageChannel,$=q.port2;q.port1.onmessage=G,O=function(){$.postMessage(null)}}else O=function(){m(G,0)};function D(U){A=U,T||(T=!0,O())}function V(U,Y){N=m(function(){U(t.unstable_now())},Y)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(U){U.callback=null},t.unstable_continueExecution=function(){y||g||(y=!0,D(C))},t.unstable_forceFrameRate=function(U){0>U||125<U?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):w=0<U?Math.floor(1e3/U):5},t.unstable_getCurrentPriorityLevel=function(){return p},t.unstable_getFirstCallbackNode=function(){return n(c)},t.unstable_next=function(U){switch(p){case 1:case 2:case 3:var Y=3;break;default:Y=p}var Z=p;p=Y;try{return U()}finally{p=Z}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(U,Y){switch(U){case 1:case 2:case 3:case 4:case 5:break;default:U=3}var Z=p;p=U;try{return Y()}finally{p=Z}},t.unstable_scheduleCallback=function(U,Y,Z){var oe=t.unstable_now();switch(typeof Z=="object"&&Z!==null?(Z=Z.delay,Z=typeof Z=="number"&&0<Z?oe+Z:oe):Z=oe,U){case 1:var Se=-1;break;case 2:Se=250;break;case 5:Se=1073741823;break;case 4:Se=1e4;break;default:Se=5e3}return Se=Z+Se,U={id:f++,callback:Y,priorityLevel:U,startTime:Z,expirationTime:Se,sortIndex:-1},Z>oe?(U.sortIndex=Z,e(u,U),n(c)===null&&U===n(u)&&(_?(d(N),N=-1):_=!0,V(S,Z-oe))):(U.sortIndex=Se,e(c,U),y||g||(y=!0,D(C))),U},t.unstable_shouldYield=R,t.unstable_wrapCallback=function(U){var Y=p;return function(){var Z=p;p=Y;try{return U.apply(this,arguments)}finally{p=Z}}}})($g);qg.exports=$g;var Dy=qg.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Iy=P,xn=Dy;function ne(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Yg=new Set,Qa={};function es(t,e){Xs(t,e),Xs(t+"Capture",e)}function Xs(t,e){for(Qa[t]=e,t=0;t<e.length;t++)Yg.add(e[t])}var Ni=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),cd=Object.prototype.hasOwnProperty,Uy=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,gp={},xp={};function ky(t){return cd.call(xp,t)?!0:cd.call(gp,t)?!1:Uy.test(t)?xp[t]=!0:(gp[t]=!0,!1)}function jy(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function zy(t,e,n,i){if(e===null||typeof e>"u"||jy(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Kt(t,e,n,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var zt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){zt[t]=new Kt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];zt[e]=new Kt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){zt[t]=new Kt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){zt[t]=new Kt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){zt[t]=new Kt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){zt[t]=new Kt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){zt[t]=new Kt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){zt[t]=new Kt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){zt[t]=new Kt(t,5,!1,t.toLowerCase(),null,!1,!1)});var Gf=/[\-:]([a-z])/g;function Xf(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Gf,Xf);zt[e]=new Kt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Gf,Xf);zt[e]=new Kt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Gf,Xf);zt[e]=new Kt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){zt[t]=new Kt(t,1,!1,t.toLowerCase(),null,!1,!1)});zt.xlinkHref=new Kt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){zt[t]=new Kt(t,1,!1,t.toLowerCase(),null,!0,!0)});function qf(t,e,n,i){var r=zt.hasOwnProperty(e)?zt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(zy(e,n,r,i)&&(n=null),i||r===null?ky(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var ki=Iy.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Uo=Symbol.for("react.element"),Ms=Symbol.for("react.portal"),Es=Symbol.for("react.fragment"),$f=Symbol.for("react.strict_mode"),ud=Symbol.for("react.profiler"),Kg=Symbol.for("react.provider"),Qg=Symbol.for("react.context"),Yf=Symbol.for("react.forward_ref"),dd=Symbol.for("react.suspense"),fd=Symbol.for("react.suspense_list"),Kf=Symbol.for("react.memo"),$i=Symbol.for("react.lazy"),Zg=Symbol.for("react.offscreen"),vp=Symbol.iterator;function ya(t){return t===null||typeof t!="object"?null:(t=vp&&t[vp]||t["@@iterator"],typeof t=="function"?t:null)}var mt=Object.assign,su;function ka(t){if(su===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);su=e&&e[1]||""}return`
`+su+t}var au=!1;function ou(t,e){if(!t||au)return"";au=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var i=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){i=u}t.call(e.prototype)}else{try{throw Error()}catch(u){i=u}t()}}catch(u){if(u&&i&&typeof u.stack=="string"){for(var r=u.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,l=s.length-1;1<=o&&0<=l&&r[o]!==s[l];)l--;for(;1<=o&&0<=l;o--,l--)if(r[o]!==s[l]){if(o!==1||l!==1)do if(o--,l--,0>l||r[o]!==s[l]){var c=`
`+r[o].replace(" at new "," at ");return t.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",t.displayName)),c}while(1<=o&&0<=l);break}}}finally{au=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?ka(t):""}function Fy(t){switch(t.tag){case 5:return ka(t.type);case 16:return ka("Lazy");case 13:return ka("Suspense");case 19:return ka("SuspenseList");case 0:case 2:case 15:return t=ou(t.type,!1),t;case 11:return t=ou(t.type.render,!1),t;case 1:return t=ou(t.type,!0),t;default:return""}}function hd(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Es:return"Fragment";case Ms:return"Portal";case ud:return"Profiler";case $f:return"StrictMode";case dd:return"Suspense";case fd:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Qg:return(t.displayName||"Context")+".Consumer";case Kg:return(t._context.displayName||"Context")+".Provider";case Yf:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Kf:return e=t.displayName||null,e!==null?e:hd(t.type)||"Memo";case $i:e=t._payload,t=t._init;try{return hd(t(e))}catch{}}return null}function Oy(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return hd(e);case 8:return e===$f?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function pr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Jg(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function By(t){var e=Jg(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function ko(t){t._valueTracker||(t._valueTracker=By(t))}function ex(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=Jg(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function Ol(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function pd(t,e){var n=e.checked;return mt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function yp(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=pr(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function tx(t,e){e=e.checked,e!=null&&qf(t,"checked",e,!1)}function md(t,e){tx(t,e);var n=pr(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?gd(t,e.type,n):e.hasOwnProperty("defaultValue")&&gd(t,e.type,pr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function _p(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function gd(t,e,n){(e!=="number"||Ol(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var ja=Array.isArray;function ks(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+pr(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function xd(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(ne(91));return mt({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Sp(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(ne(92));if(ja(n)){if(1<n.length)throw Error(ne(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:pr(n)}}function nx(t,e){var n=pr(e.value),i=pr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function Mp(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function ix(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function vd(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?ix(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var jo,rx=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(jo=jo||document.createElement("div"),jo.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=jo.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Za(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Ba={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Hy=["Webkit","ms","Moz","O"];Object.keys(Ba).forEach(function(t){Hy.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Ba[e]=Ba[t]})});function sx(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Ba.hasOwnProperty(t)&&Ba[t]?(""+e).trim():e+"px"}function ax(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=sx(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var Vy=mt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function yd(t,e){if(e){if(Vy[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(ne(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(ne(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(ne(61))}if(e.style!=null&&typeof e.style!="object")throw Error(ne(62))}}function _d(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Sd=null;function Qf(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Md=null,js=null,zs=null;function Ep(t){if(t=Mo(t)){if(typeof Md!="function")throw Error(ne(280));var e=t.stateNode;e&&(e=Pc(e),Md(t.stateNode,t.type,e))}}function ox(t){js?zs?zs.push(t):zs=[t]:js=t}function lx(){if(js){var t=js,e=zs;if(zs=js=null,Ep(t),e)for(t=0;t<e.length;t++)Ep(e[t])}}function cx(t,e){return t(e)}function ux(){}var lu=!1;function dx(t,e,n){if(lu)return t(e,n);lu=!0;try{return cx(t,e,n)}finally{lu=!1,(js!==null||zs!==null)&&(ux(),lx())}}function Ja(t,e){var n=t.stateNode;if(n===null)return null;var i=Pc(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(ne(231,e,typeof n));return n}var Ed=!1;if(Ni)try{var _a={};Object.defineProperty(_a,"passive",{get:function(){Ed=!0}}),window.addEventListener("test",_a,_a),window.removeEventListener("test",_a,_a)}catch{Ed=!1}function Wy(t,e,n,i,r,s,o,l,c){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(f){this.onError(f)}}var Ha=!1,Bl=null,Hl=!1,wd=null,Gy={onError:function(t){Ha=!0,Bl=t}};function Xy(t,e,n,i,r,s,o,l,c){Ha=!1,Bl=null,Wy.apply(Gy,arguments)}function qy(t,e,n,i,r,s,o,l,c){if(Xy.apply(this,arguments),Ha){if(Ha){var u=Bl;Ha=!1,Bl=null}else throw Error(ne(198));Hl||(Hl=!0,wd=u)}}function ts(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function fx(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function wp(t){if(ts(t)!==t)throw Error(ne(188))}function $y(t){var e=t.alternate;if(!e){if(e=ts(t),e===null)throw Error(ne(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return wp(r),t;if(s===i)return wp(r),e;s=s.sibling}throw Error(ne(188))}if(n.return!==i.return)n=r,i=s;else{for(var o=!1,l=r.child;l;){if(l===n){o=!0,n=r,i=s;break}if(l===i){o=!0,i=r,n=s;break}l=l.sibling}if(!o){for(l=s.child;l;){if(l===n){o=!0,n=s,i=r;break}if(l===i){o=!0,i=s,n=r;break}l=l.sibling}if(!o)throw Error(ne(189))}}if(n.alternate!==i)throw Error(ne(190))}if(n.tag!==3)throw Error(ne(188));return n.stateNode.current===n?t:e}function hx(t){return t=$y(t),t!==null?px(t):null}function px(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=px(t);if(e!==null)return e;t=t.sibling}return null}var mx=xn.unstable_scheduleCallback,bp=xn.unstable_cancelCallback,Yy=xn.unstable_shouldYield,Ky=xn.unstable_requestPaint,_t=xn.unstable_now,Qy=xn.unstable_getCurrentPriorityLevel,Zf=xn.unstable_ImmediatePriority,gx=xn.unstable_UserBlockingPriority,Vl=xn.unstable_NormalPriority,Zy=xn.unstable_LowPriority,xx=xn.unstable_IdlePriority,Tc=null,ii=null;function Jy(t){if(ii&&typeof ii.onCommitFiberRoot=="function")try{ii.onCommitFiberRoot(Tc,t,void 0,(t.current.flags&128)===128)}catch{}}var Gn=Math.clz32?Math.clz32:n_,e_=Math.log,t_=Math.LN2;function n_(t){return t>>>=0,t===0?32:31-(e_(t)/t_|0)|0}var zo=64,Fo=4194304;function za(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Wl(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~r;l!==0?i=za(l):(s&=o,s!==0&&(i=za(s)))}else o=n&~r,o!==0?i=za(o):s!==0&&(i=za(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-Gn(e),r=1<<n,i|=t[n],e&=~r;return i}function i_(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function r_(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Gn(s),l=1<<o,c=r[o];c===-1?(!(l&n)||l&i)&&(r[o]=i_(l,e)):c<=e&&(t.expiredLanes|=l),s&=~l}}function bd(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function vx(){var t=zo;return zo<<=1,!(zo&4194240)&&(zo=64),t}function cu(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function _o(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Gn(e),t[e]=n}function s_(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-Gn(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function Jf(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-Gn(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var et=0;function yx(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var _x,eh,Sx,Mx,Ex,Td=!1,Oo=[],nr=null,ir=null,rr=null,eo=new Map,to=new Map,Ki=[],a_="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Tp(t,e){switch(t){case"focusin":case"focusout":nr=null;break;case"dragenter":case"dragleave":ir=null;break;case"mouseover":case"mouseout":rr=null;break;case"pointerover":case"pointerout":eo.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":to.delete(e.pointerId)}}function Sa(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=Mo(e),e!==null&&eh(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function o_(t,e,n,i,r){switch(e){case"focusin":return nr=Sa(nr,t,e,n,i,r),!0;case"dragenter":return ir=Sa(ir,t,e,n,i,r),!0;case"mouseover":return rr=Sa(rr,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return eo.set(s,Sa(eo.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,to.set(s,Sa(to.get(s)||null,t,e,n,i,r)),!0}return!1}function wx(t){var e=kr(t.target);if(e!==null){var n=ts(e);if(n!==null){if(e=n.tag,e===13){if(e=fx(n),e!==null){t.blockedOn=e,Ex(t.priority,function(){Sx(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function wl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Ad(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);Sd=i,n.target.dispatchEvent(i),Sd=null}else return e=Mo(n),e!==null&&eh(e),t.blockedOn=n,!1;e.shift()}return!0}function Ap(t,e,n){wl(t)&&n.delete(e)}function l_(){Td=!1,nr!==null&&wl(nr)&&(nr=null),ir!==null&&wl(ir)&&(ir=null),rr!==null&&wl(rr)&&(rr=null),eo.forEach(Ap),to.forEach(Ap)}function Ma(t,e){t.blockedOn===e&&(t.blockedOn=null,Td||(Td=!0,xn.unstable_scheduleCallback(xn.unstable_NormalPriority,l_)))}function no(t){function e(r){return Ma(r,t)}if(0<Oo.length){Ma(Oo[0],t);for(var n=1;n<Oo.length;n++){var i=Oo[n];i.blockedOn===t&&(i.blockedOn=null)}}for(nr!==null&&Ma(nr,t),ir!==null&&Ma(ir,t),rr!==null&&Ma(rr,t),eo.forEach(e),to.forEach(e),n=0;n<Ki.length;n++)i=Ki[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<Ki.length&&(n=Ki[0],n.blockedOn===null);)wx(n),n.blockedOn===null&&Ki.shift()}var Fs=ki.ReactCurrentBatchConfig,Gl=!0;function c_(t,e,n,i){var r=et,s=Fs.transition;Fs.transition=null;try{et=1,th(t,e,n,i)}finally{et=r,Fs.transition=s}}function u_(t,e,n,i){var r=et,s=Fs.transition;Fs.transition=null;try{et=4,th(t,e,n,i)}finally{et=r,Fs.transition=s}}function th(t,e,n,i){if(Gl){var r=Ad(t,e,n,i);if(r===null)yu(t,e,i,Xl,n),Tp(t,i);else if(o_(r,t,e,n,i))i.stopPropagation();else if(Tp(t,i),e&4&&-1<a_.indexOf(t)){for(;r!==null;){var s=Mo(r);if(s!==null&&_x(s),s=Ad(t,e,n,i),s===null&&yu(t,e,i,Xl,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else yu(t,e,i,null,n)}}var Xl=null;function Ad(t,e,n,i){if(Xl=null,t=Qf(i),t=kr(t),t!==null)if(e=ts(t),e===null)t=null;else if(n=e.tag,n===13){if(t=fx(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Xl=t,null}function bx(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Qy()){case Zf:return 1;case gx:return 4;case Vl:case Zy:return 16;case xx:return 536870912;default:return 16}default:return 16}}var Ji=null,nh=null,bl=null;function Tx(){if(bl)return bl;var t,e=nh,n=e.length,i,r="value"in Ji?Ji.value:Ji.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var o=n-t;for(i=1;i<=o&&e[n-i]===r[s-i];i++);return bl=r.slice(t,1<i?1-i:void 0)}function Tl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Bo(){return!0}function Cp(){return!1}function yn(t){function e(n,i,r,s,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Bo:Cp,this.isPropagationStopped=Cp,this}return mt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Bo)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Bo)},persist:function(){},isPersistent:Bo}),e}var aa={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ih=yn(aa),So=mt({},aa,{view:0,detail:0}),d_=yn(So),uu,du,Ea,Ac=mt({},So,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:rh,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Ea&&(Ea&&t.type==="mousemove"?(uu=t.screenX-Ea.screenX,du=t.screenY-Ea.screenY):du=uu=0,Ea=t),uu)},movementY:function(t){return"movementY"in t?t.movementY:du}}),Rp=yn(Ac),f_=mt({},Ac,{dataTransfer:0}),h_=yn(f_),p_=mt({},So,{relatedTarget:0}),fu=yn(p_),m_=mt({},aa,{animationName:0,elapsedTime:0,pseudoElement:0}),g_=yn(m_),x_=mt({},aa,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),v_=yn(x_),y_=mt({},aa,{data:0}),Pp=yn(y_),__={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},S_={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},M_={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function E_(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=M_[t])?!!e[t]:!1}function rh(){return E_}var w_=mt({},So,{key:function(t){if(t.key){var e=__[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Tl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?S_[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:rh,charCode:function(t){return t.type==="keypress"?Tl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Tl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),b_=yn(w_),T_=mt({},Ac,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Np=yn(T_),A_=mt({},So,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:rh}),C_=yn(A_),R_=mt({},aa,{propertyName:0,elapsedTime:0,pseudoElement:0}),P_=yn(R_),N_=mt({},Ac,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),L_=yn(N_),D_=[9,13,27,32],sh=Ni&&"CompositionEvent"in window,Va=null;Ni&&"documentMode"in document&&(Va=document.documentMode);var I_=Ni&&"TextEvent"in window&&!Va,Ax=Ni&&(!sh||Va&&8<Va&&11>=Va),Lp=" ",Dp=!1;function Cx(t,e){switch(t){case"keyup":return D_.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Rx(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ws=!1;function U_(t,e){switch(t){case"compositionend":return Rx(e);case"keypress":return e.which!==32?null:(Dp=!0,Lp);case"textInput":return t=e.data,t===Lp&&Dp?null:t;default:return null}}function k_(t,e){if(ws)return t==="compositionend"||!sh&&Cx(t,e)?(t=Tx(),bl=nh=Ji=null,ws=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Ax&&e.locale!=="ko"?null:e.data;default:return null}}var j_={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ip(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!j_[t.type]:e==="textarea"}function Px(t,e,n,i){ox(i),e=ql(e,"onChange"),0<e.length&&(n=new ih("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var Wa=null,io=null;function z_(t){Bx(t,0)}function Cc(t){var e=As(t);if(ex(e))return t}function F_(t,e){if(t==="change")return e}var Nx=!1;if(Ni){var hu;if(Ni){var pu="oninput"in document;if(!pu){var Up=document.createElement("div");Up.setAttribute("oninput","return;"),pu=typeof Up.oninput=="function"}hu=pu}else hu=!1;Nx=hu&&(!document.documentMode||9<document.documentMode)}function kp(){Wa&&(Wa.detachEvent("onpropertychange",Lx),io=Wa=null)}function Lx(t){if(t.propertyName==="value"&&Cc(io)){var e=[];Px(e,io,t,Qf(t)),dx(z_,e)}}function O_(t,e,n){t==="focusin"?(kp(),Wa=e,io=n,Wa.attachEvent("onpropertychange",Lx)):t==="focusout"&&kp()}function B_(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Cc(io)}function H_(t,e){if(t==="click")return Cc(e)}function V_(t,e){if(t==="input"||t==="change")return Cc(e)}function W_(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var qn=typeof Object.is=="function"?Object.is:W_;function ro(t,e){if(qn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!cd.call(e,r)||!qn(t[r],e[r]))return!1}return!0}function jp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function zp(t,e){var n=jp(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=jp(n)}}function Dx(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Dx(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Ix(){for(var t=window,e=Ol();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Ol(t.document)}return e}function ah(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function G_(t){var e=Ix(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Dx(n.ownerDocument.documentElement,n)){if(i!==null&&ah(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=zp(n,s);var o=zp(n,i);r&&o&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var X_=Ni&&"documentMode"in document&&11>=document.documentMode,bs=null,Cd=null,Ga=null,Rd=!1;function Fp(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Rd||bs==null||bs!==Ol(i)||(i=bs,"selectionStart"in i&&ah(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Ga&&ro(Ga,i)||(Ga=i,i=ql(Cd,"onSelect"),0<i.length&&(e=new ih("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=bs)))}function Ho(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Ts={animationend:Ho("Animation","AnimationEnd"),animationiteration:Ho("Animation","AnimationIteration"),animationstart:Ho("Animation","AnimationStart"),transitionend:Ho("Transition","TransitionEnd")},mu={},Ux={};Ni&&(Ux=document.createElement("div").style,"AnimationEvent"in window||(delete Ts.animationend.animation,delete Ts.animationiteration.animation,delete Ts.animationstart.animation),"TransitionEvent"in window||delete Ts.transitionend.transition);function Rc(t){if(mu[t])return mu[t];if(!Ts[t])return t;var e=Ts[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Ux)return mu[t]=e[n];return t}var kx=Rc("animationend"),jx=Rc("animationiteration"),zx=Rc("animationstart"),Fx=Rc("transitionend"),Ox=new Map,Op="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function yr(t,e){Ox.set(t,e),es(e,[t])}for(var gu=0;gu<Op.length;gu++){var xu=Op[gu],q_=xu.toLowerCase(),$_=xu[0].toUpperCase()+xu.slice(1);yr(q_,"on"+$_)}yr(kx,"onAnimationEnd");yr(jx,"onAnimationIteration");yr(zx,"onAnimationStart");yr("dblclick","onDoubleClick");yr("focusin","onFocus");yr("focusout","onBlur");yr(Fx,"onTransitionEnd");Xs("onMouseEnter",["mouseout","mouseover"]);Xs("onMouseLeave",["mouseout","mouseover"]);Xs("onPointerEnter",["pointerout","pointerover"]);Xs("onPointerLeave",["pointerout","pointerover"]);es("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));es("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));es("onBeforeInput",["compositionend","keypress","textInput","paste"]);es("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));es("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));es("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Fa="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Y_=new Set("cancel close invalid load scroll toggle".split(" ").concat(Fa));function Bp(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,qy(i,e,void 0,t),t.currentTarget=null}function Bx(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var l=i[o],c=l.instance,u=l.currentTarget;if(l=l.listener,c!==s&&r.isPropagationStopped())break e;Bp(r,l,u),s=c}else for(o=0;o<i.length;o++){if(l=i[o],c=l.instance,u=l.currentTarget,l=l.listener,c!==s&&r.isPropagationStopped())break e;Bp(r,l,u),s=c}}}if(Hl)throw t=wd,Hl=!1,wd=null,t}function rt(t,e){var n=e[Id];n===void 0&&(n=e[Id]=new Set);var i=t+"__bubble";n.has(i)||(Hx(e,t,2,!1),n.add(i))}function vu(t,e,n){var i=0;e&&(i|=4),Hx(n,t,i,e)}var Vo="_reactListening"+Math.random().toString(36).slice(2);function so(t){if(!t[Vo]){t[Vo]=!0,Yg.forEach(function(n){n!=="selectionchange"&&(Y_.has(n)||vu(n,!1,t),vu(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Vo]||(e[Vo]=!0,vu("selectionchange",!1,e))}}function Hx(t,e,n,i){switch(bx(e)){case 1:var r=c_;break;case 4:r=u_;break;default:r=th}n=r.bind(null,e,n,t),r=void 0,!Ed||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function yu(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var l=i.stateNode.containerInfo;if(l===r||l.nodeType===8&&l.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var c=o.tag;if((c===3||c===4)&&(c=o.stateNode.containerInfo,c===r||c.nodeType===8&&c.parentNode===r))return;o=o.return}for(;l!==null;){if(o=kr(l),o===null)return;if(c=o.tag,c===5||c===6){i=s=o;continue e}l=l.parentNode}}i=i.return}dx(function(){var u=s,f=Qf(n),h=[];e:{var p=Ox.get(t);if(p!==void 0){var g=ih,y=t;switch(t){case"keypress":if(Tl(n)===0)break e;case"keydown":case"keyup":g=b_;break;case"focusin":y="focus",g=fu;break;case"focusout":y="blur",g=fu;break;case"beforeblur":case"afterblur":g=fu;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=Rp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=h_;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=C_;break;case kx:case jx:case zx:g=g_;break;case Fx:g=P_;break;case"scroll":g=d_;break;case"wheel":g=L_;break;case"copy":case"cut":case"paste":g=v_;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=Np}var _=(e&4)!==0,m=!_&&t==="scroll",d=_?p!==null?p+"Capture":null:p;_=[];for(var x=u,v;x!==null;){v=x;var S=v.stateNode;if(v.tag===5&&S!==null&&(v=S,d!==null&&(S=Ja(x,d),S!=null&&_.push(ao(x,S,v)))),m)break;x=x.return}0<_.length&&(p=new g(p,y,null,n,f),h.push({event:p,listeners:_}))}}if(!(e&7)){e:{if(p=t==="mouseover"||t==="pointerover",g=t==="mouseout"||t==="pointerout",p&&n!==Sd&&(y=n.relatedTarget||n.fromElement)&&(kr(y)||y[Li]))break e;if((g||p)&&(p=f.window===f?f:(p=f.ownerDocument)?p.defaultView||p.parentWindow:window,g?(y=n.relatedTarget||n.toElement,g=u,y=y?kr(y):null,y!==null&&(m=ts(y),y!==m||y.tag!==5&&y.tag!==6)&&(y=null)):(g=null,y=u),g!==y)){if(_=Rp,S="onMouseLeave",d="onMouseEnter",x="mouse",(t==="pointerout"||t==="pointerover")&&(_=Np,S="onPointerLeave",d="onPointerEnter",x="pointer"),m=g==null?p:As(g),v=y==null?p:As(y),p=new _(S,x+"leave",g,n,f),p.target=m,p.relatedTarget=v,S=null,kr(f)===u&&(_=new _(d,x+"enter",y,n,f),_.target=v,_.relatedTarget=m,S=_),m=S,g&&y)t:{for(_=g,d=y,x=0,v=_;v;v=rs(v))x++;for(v=0,S=d;S;S=rs(S))v++;for(;0<x-v;)_=rs(_),x--;for(;0<v-x;)d=rs(d),v--;for(;x--;){if(_===d||d!==null&&_===d.alternate)break t;_=rs(_),d=rs(d)}_=null}else _=null;g!==null&&Hp(h,p,g,_,!1),y!==null&&m!==null&&Hp(h,m,y,_,!0)}}e:{if(p=u?As(u):window,g=p.nodeName&&p.nodeName.toLowerCase(),g==="select"||g==="input"&&p.type==="file")var C=F_;else if(Ip(p))if(Nx)C=V_;else{C=B_;var T=O_}else(g=p.nodeName)&&g.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(C=H_);if(C&&(C=C(t,u))){Px(h,C,n,f);break e}T&&T(t,p,u),t==="focusout"&&(T=p._wrapperState)&&T.controlled&&p.type==="number"&&gd(p,"number",p.value)}switch(T=u?As(u):window,t){case"focusin":(Ip(T)||T.contentEditable==="true")&&(bs=T,Cd=u,Ga=null);break;case"focusout":Ga=Cd=bs=null;break;case"mousedown":Rd=!0;break;case"contextmenu":case"mouseup":case"dragend":Rd=!1,Fp(h,n,f);break;case"selectionchange":if(X_)break;case"keydown":case"keyup":Fp(h,n,f)}var A;if(sh)e:{switch(t){case"compositionstart":var N="onCompositionStart";break e;case"compositionend":N="onCompositionEnd";break e;case"compositionupdate":N="onCompositionUpdate";break e}N=void 0}else ws?Cx(t,n)&&(N="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(N="onCompositionStart");N&&(Ax&&n.locale!=="ko"&&(ws||N!=="onCompositionStart"?N==="onCompositionEnd"&&ws&&(A=Tx()):(Ji=f,nh="value"in Ji?Ji.value:Ji.textContent,ws=!0)),T=ql(u,N),0<T.length&&(N=new Pp(N,t,null,n,f),h.push({event:N,listeners:T}),A?N.data=A:(A=Rx(n),A!==null&&(N.data=A)))),(A=I_?U_(t,n):k_(t,n))&&(u=ql(u,"onBeforeInput"),0<u.length&&(f=new Pp("onBeforeInput","beforeinput",null,n,f),h.push({event:f,listeners:u}),f.data=A))}Bx(h,e)})}function ao(t,e,n){return{instance:t,listener:e,currentTarget:n}}function ql(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=Ja(t,n),s!=null&&i.unshift(ao(t,s,r)),s=Ja(t,e),s!=null&&i.push(ao(t,s,r))),t=t.return}return i}function rs(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Hp(t,e,n,i,r){for(var s=e._reactName,o=[];n!==null&&n!==i;){var l=n,c=l.alternate,u=l.stateNode;if(c!==null&&c===i)break;l.tag===5&&u!==null&&(l=u,r?(c=Ja(n,s),c!=null&&o.unshift(ao(n,c,l))):r||(c=Ja(n,s),c!=null&&o.push(ao(n,c,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var K_=/\r\n?/g,Q_=/\u0000|\uFFFD/g;function Vp(t){return(typeof t=="string"?t:""+t).replace(K_,`
`).replace(Q_,"")}function Wo(t,e,n){if(e=Vp(e),Vp(t)!==e&&n)throw Error(ne(425))}function $l(){}var Pd=null,Nd=null;function Ld(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Dd=typeof setTimeout=="function"?setTimeout:void 0,Z_=typeof clearTimeout=="function"?clearTimeout:void 0,Wp=typeof Promise=="function"?Promise:void 0,J_=typeof queueMicrotask=="function"?queueMicrotask:typeof Wp<"u"?function(t){return Wp.resolve(null).then(t).catch(e1)}:Dd;function e1(t){setTimeout(function(){throw t})}function _u(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),no(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);no(e)}function sr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Gp(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var oa=Math.random().toString(36).slice(2),ei="__reactFiber$"+oa,oo="__reactProps$"+oa,Li="__reactContainer$"+oa,Id="__reactEvents$"+oa,t1="__reactListeners$"+oa,n1="__reactHandles$"+oa;function kr(t){var e=t[ei];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Li]||n[ei]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Gp(t);t!==null;){if(n=t[ei])return n;t=Gp(t)}return e}t=n,n=t.parentNode}return null}function Mo(t){return t=t[ei]||t[Li],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function As(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(ne(33))}function Pc(t){return t[oo]||null}var Ud=[],Cs=-1;function _r(t){return{current:t}}function lt(t){0>Cs||(t.current=Ud[Cs],Ud[Cs]=null,Cs--)}function it(t,e){Cs++,Ud[Cs]=t.current,t.current=e}var mr={},Wt=_r(mr),tn=_r(!1),Gr=mr;function qs(t,e){var n=t.type.contextTypes;if(!n)return mr;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function nn(t){return t=t.childContextTypes,t!=null}function Yl(){lt(tn),lt(Wt)}function Xp(t,e,n){if(Wt.current!==mr)throw Error(ne(168));it(Wt,e),it(tn,n)}function Vx(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(ne(108,Oy(t)||"Unknown",r));return mt({},n,i)}function Kl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||mr,Gr=Wt.current,it(Wt,t),it(tn,tn.current),!0}function qp(t,e,n){var i=t.stateNode;if(!i)throw Error(ne(169));n?(t=Vx(t,e,Gr),i.__reactInternalMemoizedMergedChildContext=t,lt(tn),lt(Wt),it(Wt,t)):lt(tn),it(tn,n)}var wi=null,Nc=!1,Su=!1;function Wx(t){wi===null?wi=[t]:wi.push(t)}function i1(t){Nc=!0,Wx(t)}function Sr(){if(!Su&&wi!==null){Su=!0;var t=0,e=et;try{var n=wi;for(et=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}wi=null,Nc=!1}catch(r){throw wi!==null&&(wi=wi.slice(t+1)),mx(Zf,Sr),r}finally{et=e,Su=!1}}return null}var Rs=[],Ps=0,Ql=null,Zl=0,En=[],wn=0,Xr=null,Ti=1,Ai="";function Pr(t,e){Rs[Ps++]=Zl,Rs[Ps++]=Ql,Ql=t,Zl=e}function Gx(t,e,n){En[wn++]=Ti,En[wn++]=Ai,En[wn++]=Xr,Xr=t;var i=Ti;t=Ai;var r=32-Gn(i)-1;i&=~(1<<r),n+=1;var s=32-Gn(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,Ti=1<<32-Gn(e)+r|n<<r|i,Ai=s+t}else Ti=1<<s|n<<r|i,Ai=t}function oh(t){t.return!==null&&(Pr(t,1),Gx(t,1,0))}function lh(t){for(;t===Ql;)Ql=Rs[--Ps],Rs[Ps]=null,Zl=Rs[--Ps],Rs[Ps]=null;for(;t===Xr;)Xr=En[--wn],En[wn]=null,Ai=En[--wn],En[wn]=null,Ti=En[--wn],En[wn]=null}var gn=null,mn=null,ct=!1,Hn=null;function Xx(t,e){var n=bn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function $p(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,gn=t,mn=sr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,gn=t,mn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Xr!==null?{id:Ti,overflow:Ai}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=bn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,gn=t,mn=null,!0):!1;default:return!1}}function kd(t){return(t.mode&1)!==0&&(t.flags&128)===0}function jd(t){if(ct){var e=mn;if(e){var n=e;if(!$p(t,e)){if(kd(t))throw Error(ne(418));e=sr(n.nextSibling);var i=gn;e&&$p(t,e)?Xx(i,n):(t.flags=t.flags&-4097|2,ct=!1,gn=t)}}else{if(kd(t))throw Error(ne(418));t.flags=t.flags&-4097|2,ct=!1,gn=t}}}function Yp(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;gn=t}function Go(t){if(t!==gn)return!1;if(!ct)return Yp(t),ct=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Ld(t.type,t.memoizedProps)),e&&(e=mn)){if(kd(t))throw qx(),Error(ne(418));for(;e;)Xx(t,e),e=sr(e.nextSibling)}if(Yp(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(ne(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){mn=sr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}mn=null}}else mn=gn?sr(t.stateNode.nextSibling):null;return!0}function qx(){for(var t=mn;t;)t=sr(t.nextSibling)}function $s(){mn=gn=null,ct=!1}function ch(t){Hn===null?Hn=[t]:Hn.push(t)}var r1=ki.ReactCurrentBatchConfig;function wa(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(ne(309));var i=n.stateNode}if(!i)throw Error(ne(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var l=r.refs;o===null?delete l[s]:l[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(ne(284));if(!n._owner)throw Error(ne(290,t))}return t}function Xo(t,e){throw t=Object.prototype.toString.call(e),Error(ne(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Kp(t){var e=t._init;return e(t._payload)}function $x(t){function e(d,x){if(t){var v=d.deletions;v===null?(d.deletions=[x],d.flags|=16):v.push(x)}}function n(d,x){if(!t)return null;for(;x!==null;)e(d,x),x=x.sibling;return null}function i(d,x){for(d=new Map;x!==null;)x.key!==null?d.set(x.key,x):d.set(x.index,x),x=x.sibling;return d}function r(d,x){return d=cr(d,x),d.index=0,d.sibling=null,d}function s(d,x,v){return d.index=v,t?(v=d.alternate,v!==null?(v=v.index,v<x?(d.flags|=2,x):v):(d.flags|=2,x)):(d.flags|=1048576,x)}function o(d){return t&&d.alternate===null&&(d.flags|=2),d}function l(d,x,v,S){return x===null||x.tag!==6?(x=Cu(v,d.mode,S),x.return=d,x):(x=r(x,v),x.return=d,x)}function c(d,x,v,S){var C=v.type;return C===Es?f(d,x,v.props.children,S,v.key):x!==null&&(x.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===$i&&Kp(C)===x.type)?(S=r(x,v.props),S.ref=wa(d,x,v),S.return=d,S):(S=Dl(v.type,v.key,v.props,null,d.mode,S),S.ref=wa(d,x,v),S.return=d,S)}function u(d,x,v,S){return x===null||x.tag!==4||x.stateNode.containerInfo!==v.containerInfo||x.stateNode.implementation!==v.implementation?(x=Ru(v,d.mode,S),x.return=d,x):(x=r(x,v.children||[]),x.return=d,x)}function f(d,x,v,S,C){return x===null||x.tag!==7?(x=Vr(v,d.mode,S,C),x.return=d,x):(x=r(x,v),x.return=d,x)}function h(d,x,v){if(typeof x=="string"&&x!==""||typeof x=="number")return x=Cu(""+x,d.mode,v),x.return=d,x;if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Uo:return v=Dl(x.type,x.key,x.props,null,d.mode,v),v.ref=wa(d,null,x),v.return=d,v;case Ms:return x=Ru(x,d.mode,v),x.return=d,x;case $i:var S=x._init;return h(d,S(x._payload),v)}if(ja(x)||ya(x))return x=Vr(x,d.mode,v,null),x.return=d,x;Xo(d,x)}return null}function p(d,x,v,S){var C=x!==null?x.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return C!==null?null:l(d,x,""+v,S);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Uo:return v.key===C?c(d,x,v,S):null;case Ms:return v.key===C?u(d,x,v,S):null;case $i:return C=v._init,p(d,x,C(v._payload),S)}if(ja(v)||ya(v))return C!==null?null:f(d,x,v,S,null);Xo(d,v)}return null}function g(d,x,v,S,C){if(typeof S=="string"&&S!==""||typeof S=="number")return d=d.get(v)||null,l(x,d,""+S,C);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case Uo:return d=d.get(S.key===null?v:S.key)||null,c(x,d,S,C);case Ms:return d=d.get(S.key===null?v:S.key)||null,u(x,d,S,C);case $i:var T=S._init;return g(d,x,v,T(S._payload),C)}if(ja(S)||ya(S))return d=d.get(v)||null,f(x,d,S,C,null);Xo(x,S)}return null}function y(d,x,v,S){for(var C=null,T=null,A=x,N=x=0,w=null;A!==null&&N<v.length;N++){A.index>N?(w=A,A=null):w=A.sibling;var M=p(d,A,v[N],S);if(M===null){A===null&&(A=w);break}t&&A&&M.alternate===null&&e(d,A),x=s(M,x,N),T===null?C=M:T.sibling=M,T=M,A=w}if(N===v.length)return n(d,A),ct&&Pr(d,N),C;if(A===null){for(;N<v.length;N++)A=h(d,v[N],S),A!==null&&(x=s(A,x,N),T===null?C=A:T.sibling=A,T=A);return ct&&Pr(d,N),C}for(A=i(d,A);N<v.length;N++)w=g(A,d,N,v[N],S),w!==null&&(t&&w.alternate!==null&&A.delete(w.key===null?N:w.key),x=s(w,x,N),T===null?C=w:T.sibling=w,T=w);return t&&A.forEach(function(R){return e(d,R)}),ct&&Pr(d,N),C}function _(d,x,v,S){var C=ya(v);if(typeof C!="function")throw Error(ne(150));if(v=C.call(v),v==null)throw Error(ne(151));for(var T=C=null,A=x,N=x=0,w=null,M=v.next();A!==null&&!M.done;N++,M=v.next()){A.index>N?(w=A,A=null):w=A.sibling;var R=p(d,A,M.value,S);if(R===null){A===null&&(A=w);break}t&&A&&R.alternate===null&&e(d,A),x=s(R,x,N),T===null?C=R:T.sibling=R,T=R,A=w}if(M.done)return n(d,A),ct&&Pr(d,N),C;if(A===null){for(;!M.done;N++,M=v.next())M=h(d,M.value,S),M!==null&&(x=s(M,x,N),T===null?C=M:T.sibling=M,T=M);return ct&&Pr(d,N),C}for(A=i(d,A);!M.done;N++,M=v.next())M=g(A,d,N,M.value,S),M!==null&&(t&&M.alternate!==null&&A.delete(M.key===null?N:M.key),x=s(M,x,N),T===null?C=M:T.sibling=M,T=M);return t&&A.forEach(function(G){return e(d,G)}),ct&&Pr(d,N),C}function m(d,x,v,S){if(typeof v=="object"&&v!==null&&v.type===Es&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case Uo:e:{for(var C=v.key,T=x;T!==null;){if(T.key===C){if(C=v.type,C===Es){if(T.tag===7){n(d,T.sibling),x=r(T,v.props.children),x.return=d,d=x;break e}}else if(T.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===$i&&Kp(C)===T.type){n(d,T.sibling),x=r(T,v.props),x.ref=wa(d,T,v),x.return=d,d=x;break e}n(d,T);break}else e(d,T);T=T.sibling}v.type===Es?(x=Vr(v.props.children,d.mode,S,v.key),x.return=d,d=x):(S=Dl(v.type,v.key,v.props,null,d.mode,S),S.ref=wa(d,x,v),S.return=d,d=S)}return o(d);case Ms:e:{for(T=v.key;x!==null;){if(x.key===T)if(x.tag===4&&x.stateNode.containerInfo===v.containerInfo&&x.stateNode.implementation===v.implementation){n(d,x.sibling),x=r(x,v.children||[]),x.return=d,d=x;break e}else{n(d,x);break}else e(d,x);x=x.sibling}x=Ru(v,d.mode,S),x.return=d,d=x}return o(d);case $i:return T=v._init,m(d,x,T(v._payload),S)}if(ja(v))return y(d,x,v,S);if(ya(v))return _(d,x,v,S);Xo(d,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,x!==null&&x.tag===6?(n(d,x.sibling),x=r(x,v),x.return=d,d=x):(n(d,x),x=Cu(v,d.mode,S),x.return=d,d=x),o(d)):n(d,x)}return m}var Ys=$x(!0),Yx=$x(!1),Jl=_r(null),ec=null,Ns=null,uh=null;function dh(){uh=Ns=ec=null}function fh(t){var e=Jl.current;lt(Jl),t._currentValue=e}function zd(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function Os(t,e){ec=t,uh=Ns=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(en=!0),t.firstContext=null)}function Pn(t){var e=t._currentValue;if(uh!==t)if(t={context:t,memoizedValue:e,next:null},Ns===null){if(ec===null)throw Error(ne(308));Ns=t,ec.dependencies={lanes:0,firstContext:t}}else Ns=Ns.next=t;return e}var jr=null;function hh(t){jr===null?jr=[t]:jr.push(t)}function Kx(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,hh(e)):(n.next=r.next,r.next=n),e.interleaved=n,Di(t,i)}function Di(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Yi=!1;function ph(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Qx(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Pi(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function ar(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,Xe&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Di(t,n)}return r=i.interleaved,r===null?(e.next=e,hh(i)):(e.next=r.next,r.next=e),i.interleaved=e,Di(t,n)}function Al(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Jf(t,n)}}function Qp(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function tc(t,e,n,i){var r=t.updateQueue;Yi=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,l=r.shared.pending;if(l!==null){r.shared.pending=null;var c=l,u=c.next;c.next=null,o===null?s=u:o.next=u,o=c;var f=t.alternate;f!==null&&(f=f.updateQueue,l=f.lastBaseUpdate,l!==o&&(l===null?f.firstBaseUpdate=u:l.next=u,f.lastBaseUpdate=c))}if(s!==null){var h=r.baseState;o=0,f=u=c=null,l=s;do{var p=l.lane,g=l.eventTime;if((i&p)===p){f!==null&&(f=f.next={eventTime:g,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var y=t,_=l;switch(p=e,g=n,_.tag){case 1:if(y=_.payload,typeof y=="function"){h=y.call(g,h,p);break e}h=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=_.payload,p=typeof y=="function"?y.call(g,h,p):y,p==null)break e;h=mt({},h,p);break e;case 2:Yi=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,p=r.effects,p===null?r.effects=[l]:p.push(l))}else g={eventTime:g,lane:p,tag:l.tag,payload:l.payload,callback:l.callback,next:null},f===null?(u=f=g,c=h):f=f.next=g,o|=p;if(l=l.next,l===null){if(l=r.shared.pending,l===null)break;p=l,l=p.next,p.next=null,r.lastBaseUpdate=p,r.shared.pending=null}}while(!0);if(f===null&&(c=h),r.baseState=c,r.firstBaseUpdate=u,r.lastBaseUpdate=f,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);$r|=o,t.lanes=o,t.memoizedState=h}}function Zp(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(ne(191,r));r.call(i)}}}var Eo={},ri=_r(Eo),lo=_r(Eo),co=_r(Eo);function zr(t){if(t===Eo)throw Error(ne(174));return t}function mh(t,e){switch(it(co,e),it(lo,t),it(ri,Eo),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:vd(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=vd(e,t)}lt(ri),it(ri,e)}function Ks(){lt(ri),lt(lo),lt(co)}function Zx(t){zr(co.current);var e=zr(ri.current),n=vd(e,t.type);e!==n&&(it(lo,t),it(ri,n))}function gh(t){lo.current===t&&(lt(ri),lt(lo))}var dt=_r(0);function nc(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Mu=[];function xh(){for(var t=0;t<Mu.length;t++)Mu[t]._workInProgressVersionPrimary=null;Mu.length=0}var Cl=ki.ReactCurrentDispatcher,Eu=ki.ReactCurrentBatchConfig,qr=0,ft=null,At=null,Lt=null,ic=!1,Xa=!1,uo=0,s1=0;function Ft(){throw Error(ne(321))}function vh(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!qn(t[n],e[n]))return!1;return!0}function yh(t,e,n,i,r,s){if(qr=s,ft=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Cl.current=t===null||t.memoizedState===null?c1:u1,t=n(i,r),Xa){s=0;do{if(Xa=!1,uo=0,25<=s)throw Error(ne(301));s+=1,Lt=At=null,e.updateQueue=null,Cl.current=d1,t=n(i,r)}while(Xa)}if(Cl.current=rc,e=At!==null&&At.next!==null,qr=0,Lt=At=ft=null,ic=!1,e)throw Error(ne(300));return t}function _h(){var t=uo!==0;return uo=0,t}function Qn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Lt===null?ft.memoizedState=Lt=t:Lt=Lt.next=t,Lt}function Nn(){if(At===null){var t=ft.alternate;t=t!==null?t.memoizedState:null}else t=At.next;var e=Lt===null?ft.memoizedState:Lt.next;if(e!==null)Lt=e,At=t;else{if(t===null)throw Error(ne(310));At=t,t={memoizedState:At.memoizedState,baseState:At.baseState,baseQueue:At.baseQueue,queue:At.queue,next:null},Lt===null?ft.memoizedState=Lt=t:Lt=Lt.next=t}return Lt}function fo(t,e){return typeof e=="function"?e(t):e}function wu(t){var e=Nn(),n=e.queue;if(n===null)throw Error(ne(311));n.lastRenderedReducer=t;var i=At,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var l=o=null,c=null,u=s;do{var f=u.lane;if((qr&f)===f)c!==null&&(c=c.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),i=u.hasEagerState?u.eagerState:t(i,u.action);else{var h={lane:f,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};c===null?(l=c=h,o=i):c=c.next=h,ft.lanes|=f,$r|=f}u=u.next}while(u!==null&&u!==s);c===null?o=i:c.next=l,qn(i,e.memoizedState)||(en=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=c,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,ft.lanes|=s,$r|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function bu(t){var e=Nn(),n=e.queue;if(n===null)throw Error(ne(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do s=t(s,o.action),o=o.next;while(o!==r);qn(s,e.memoizedState)||(en=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function Jx(){}function ev(t,e){var n=ft,i=Nn(),r=e(),s=!qn(i.memoizedState,r);if(s&&(i.memoizedState=r,en=!0),i=i.queue,Sh(iv.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||Lt!==null&&Lt.memoizedState.tag&1){if(n.flags|=2048,ho(9,nv.bind(null,n,i,r,e),void 0,null),Dt===null)throw Error(ne(349));qr&30||tv(n,e,r)}return r}function tv(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=ft.updateQueue,e===null?(e={lastEffect:null,stores:null},ft.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function nv(t,e,n,i){e.value=n,e.getSnapshot=i,rv(e)&&sv(t)}function iv(t,e,n){return n(function(){rv(e)&&sv(t)})}function rv(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!qn(t,n)}catch{return!0}}function sv(t){var e=Di(t,1);e!==null&&Xn(e,t,1,-1)}function Jp(t){var e=Qn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:fo,lastRenderedState:t},e.queue=t,t=t.dispatch=l1.bind(null,ft,t),[e.memoizedState,t]}function ho(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=ft.updateQueue,e===null?(e={lastEffect:null,stores:null},ft.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function av(){return Nn().memoizedState}function Rl(t,e,n,i){var r=Qn();ft.flags|=t,r.memoizedState=ho(1|e,n,void 0,i===void 0?null:i)}function Lc(t,e,n,i){var r=Nn();i=i===void 0?null:i;var s=void 0;if(At!==null){var o=At.memoizedState;if(s=o.destroy,i!==null&&vh(i,o.deps)){r.memoizedState=ho(e,n,s,i);return}}ft.flags|=t,r.memoizedState=ho(1|e,n,s,i)}function em(t,e){return Rl(8390656,8,t,e)}function Sh(t,e){return Lc(2048,8,t,e)}function ov(t,e){return Lc(4,2,t,e)}function lv(t,e){return Lc(4,4,t,e)}function cv(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function uv(t,e,n){return n=n!=null?n.concat([t]):null,Lc(4,4,cv.bind(null,e,t),n)}function Mh(){}function dv(t,e){var n=Nn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&vh(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function fv(t,e){var n=Nn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&vh(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function hv(t,e,n){return qr&21?(qn(n,e)||(n=vx(),ft.lanes|=n,$r|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,en=!0),t.memoizedState=n)}function a1(t,e){var n=et;et=n!==0&&4>n?n:4,t(!0);var i=Eu.transition;Eu.transition={};try{t(!1),e()}finally{et=n,Eu.transition=i}}function pv(){return Nn().memoizedState}function o1(t,e,n){var i=lr(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},mv(t))gv(e,n);else if(n=Kx(t,e,n,i),n!==null){var r=qt();Xn(n,t,i,r),xv(n,e,i)}}function l1(t,e,n){var i=lr(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(mv(t))gv(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,l=s(o,n);if(r.hasEagerState=!0,r.eagerState=l,qn(l,o)){var c=e.interleaved;c===null?(r.next=r,hh(e)):(r.next=c.next,c.next=r),e.interleaved=r;return}}catch{}finally{}n=Kx(t,e,r,i),n!==null&&(r=qt(),Xn(n,t,i,r),xv(n,e,i))}}function mv(t){var e=t.alternate;return t===ft||e!==null&&e===ft}function gv(t,e){Xa=ic=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function xv(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Jf(t,n)}}var rc={readContext:Pn,useCallback:Ft,useContext:Ft,useEffect:Ft,useImperativeHandle:Ft,useInsertionEffect:Ft,useLayoutEffect:Ft,useMemo:Ft,useReducer:Ft,useRef:Ft,useState:Ft,useDebugValue:Ft,useDeferredValue:Ft,useTransition:Ft,useMutableSource:Ft,useSyncExternalStore:Ft,useId:Ft,unstable_isNewReconciler:!1},c1={readContext:Pn,useCallback:function(t,e){return Qn().memoizedState=[t,e===void 0?null:e],t},useContext:Pn,useEffect:em,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Rl(4194308,4,cv.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Rl(4194308,4,t,e)},useInsertionEffect:function(t,e){return Rl(4,2,t,e)},useMemo:function(t,e){var n=Qn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=Qn();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=o1.bind(null,ft,t),[i.memoizedState,t]},useRef:function(t){var e=Qn();return t={current:t},e.memoizedState=t},useState:Jp,useDebugValue:Mh,useDeferredValue:function(t){return Qn().memoizedState=t},useTransition:function(){var t=Jp(!1),e=t[0];return t=a1.bind(null,t[1]),Qn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=ft,r=Qn();if(ct){if(n===void 0)throw Error(ne(407));n=n()}else{if(n=e(),Dt===null)throw Error(ne(349));qr&30||tv(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,em(iv.bind(null,i,s,t),[t]),i.flags|=2048,ho(9,nv.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=Qn(),e=Dt.identifierPrefix;if(ct){var n=Ai,i=Ti;n=(i&~(1<<32-Gn(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=uo++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=s1++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},u1={readContext:Pn,useCallback:dv,useContext:Pn,useEffect:Sh,useImperativeHandle:uv,useInsertionEffect:ov,useLayoutEffect:lv,useMemo:fv,useReducer:wu,useRef:av,useState:function(){return wu(fo)},useDebugValue:Mh,useDeferredValue:function(t){var e=Nn();return hv(e,At.memoizedState,t)},useTransition:function(){var t=wu(fo)[0],e=Nn().memoizedState;return[t,e]},useMutableSource:Jx,useSyncExternalStore:ev,useId:pv,unstable_isNewReconciler:!1},d1={readContext:Pn,useCallback:dv,useContext:Pn,useEffect:Sh,useImperativeHandle:uv,useInsertionEffect:ov,useLayoutEffect:lv,useMemo:fv,useReducer:bu,useRef:av,useState:function(){return bu(fo)},useDebugValue:Mh,useDeferredValue:function(t){var e=Nn();return At===null?e.memoizedState=t:hv(e,At.memoizedState,t)},useTransition:function(){var t=bu(fo)[0],e=Nn().memoizedState;return[t,e]},useMutableSource:Jx,useSyncExternalStore:ev,useId:pv,unstable_isNewReconciler:!1};function On(t,e){if(t&&t.defaultProps){e=mt({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Fd(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:mt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Dc={isMounted:function(t){return(t=t._reactInternals)?ts(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=qt(),r=lr(t),s=Pi(i,r);s.payload=e,n!=null&&(s.callback=n),e=ar(t,s,r),e!==null&&(Xn(e,t,r,i),Al(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=qt(),r=lr(t),s=Pi(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=ar(t,s,r),e!==null&&(Xn(e,t,r,i),Al(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=qt(),i=lr(t),r=Pi(n,i);r.tag=2,e!=null&&(r.callback=e),e=ar(t,r,i),e!==null&&(Xn(e,t,i,n),Al(e,t,i))}};function tm(t,e,n,i,r,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!ro(n,i)||!ro(r,s):!0}function vv(t,e,n){var i=!1,r=mr,s=e.contextType;return typeof s=="object"&&s!==null?s=Pn(s):(r=nn(e)?Gr:Wt.current,i=e.contextTypes,s=(i=i!=null)?qs(t,r):mr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Dc,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function nm(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&Dc.enqueueReplaceState(e,e.state,null)}function Od(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},ph(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=Pn(s):(s=nn(e)?Gr:Wt.current,r.context=qs(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Fd(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Dc.enqueueReplaceState(r,r.state,null),tc(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function Qs(t,e){try{var n="",i=e;do n+=Fy(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function Tu(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Bd(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var f1=typeof WeakMap=="function"?WeakMap:Map;function yv(t,e,n){n=Pi(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){ac||(ac=!0,Qd=i),Bd(t,e)},n}function _v(t,e,n){n=Pi(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){Bd(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Bd(t,e),typeof i!="function"&&(or===null?or=new Set([this]):or.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function im(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new f1;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=T1.bind(null,t,e,n),e.then(t,t))}function rm(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function sm(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Pi(-1,1),e.tag=2,ar(n,e,1))),n.lanes|=1),t)}var h1=ki.ReactCurrentOwner,en=!1;function Xt(t,e,n,i){e.child=t===null?Yx(e,null,n,i):Ys(e,t.child,n,i)}function am(t,e,n,i,r){n=n.render;var s=e.ref;return Os(e,r),i=yh(t,e,n,i,s,r),n=_h(),t!==null&&!en?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Ii(t,e,r)):(ct&&n&&oh(e),e.flags|=1,Xt(t,e,i,r),e.child)}function om(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!Ph(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,Sv(t,e,s,i,r)):(t=Dl(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:ro,n(o,i)&&t.ref===e.ref)return Ii(t,e,r)}return e.flags|=1,t=cr(s,i),t.ref=e.ref,t.return=e,e.child=t}function Sv(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(ro(s,i)&&t.ref===e.ref)if(en=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(en=!0);else return e.lanes=t.lanes,Ii(t,e,r)}return Hd(t,e,n,i,r)}function Mv(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},it(Ds,hn),hn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,it(Ds,hn),hn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,it(Ds,hn),hn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,it(Ds,hn),hn|=i;return Xt(t,e,r,n),e.child}function Ev(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Hd(t,e,n,i,r){var s=nn(n)?Gr:Wt.current;return s=qs(e,s),Os(e,r),n=yh(t,e,n,i,s,r),i=_h(),t!==null&&!en?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Ii(t,e,r)):(ct&&i&&oh(e),e.flags|=1,Xt(t,e,n,r),e.child)}function lm(t,e,n,i,r){if(nn(n)){var s=!0;Kl(e)}else s=!1;if(Os(e,r),e.stateNode===null)Pl(t,e),vv(e,n,i),Od(e,n,i,r),i=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var c=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=Pn(u):(u=nn(n)?Gr:Wt.current,u=qs(e,u));var f=n.getDerivedStateFromProps,h=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==i||c!==u)&&nm(e,o,i,u),Yi=!1;var p=e.memoizedState;o.state=p,tc(e,i,o,r),c=e.memoizedState,l!==i||p!==c||tn.current||Yi?(typeof f=="function"&&(Fd(e,n,f,i),c=e.memoizedState),(l=Yi||tm(e,n,l,i,p,c,u))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=c),o.props=i,o.state=c,o.context=u,i=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,Qx(t,e),l=e.memoizedProps,u=e.type===e.elementType?l:On(e.type,l),o.props=u,h=e.pendingProps,p=o.context,c=n.contextType,typeof c=="object"&&c!==null?c=Pn(c):(c=nn(n)?Gr:Wt.current,c=qs(e,c));var g=n.getDerivedStateFromProps;(f=typeof g=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==h||p!==c)&&nm(e,o,i,c),Yi=!1,p=e.memoizedState,o.state=p,tc(e,i,o,r);var y=e.memoizedState;l!==h||p!==y||tn.current||Yi?(typeof g=="function"&&(Fd(e,n,g,i),y=e.memoizedState),(u=Yi||tm(e,n,u,i,p,y,c)||!1)?(f||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,y,c),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,y,c)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&p===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&p===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=y),o.props=i,o.state=y,o.context=c,i=u):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&p===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&p===t.memoizedState||(e.flags|=1024),i=!1)}return Vd(t,e,n,i,s,r)}function Vd(t,e,n,i,r,s){Ev(t,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&qp(e,n,!1),Ii(t,e,s);i=e.stateNode,h1.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=Ys(e,t.child,null,s),e.child=Ys(e,null,l,s)):Xt(t,e,l,s),e.memoizedState=i.state,r&&qp(e,n,!0),e.child}function wv(t){var e=t.stateNode;e.pendingContext?Xp(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Xp(t,e.context,!1),mh(t,e.containerInfo)}function cm(t,e,n,i,r){return $s(),ch(r),e.flags|=256,Xt(t,e,n,i),e.child}var Wd={dehydrated:null,treeContext:null,retryLane:0};function Gd(t){return{baseLanes:t,cachePool:null,transitions:null}}function bv(t,e,n){var i=e.pendingProps,r=dt.current,s=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(r&2)!==0),l?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),it(dt,r&1),t===null)return jd(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,t=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=kc(o,i,0,null),t=Vr(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Gd(n),e.memoizedState=Wd,t):Eh(e,o));if(r=t.memoizedState,r!==null&&(l=r.dehydrated,l!==null))return p1(t,e,o,i,l,r,n);if(s){s=i.fallback,o=e.mode,r=t.child,l=r.sibling;var c={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=c,e.deletions=null):(i=cr(r,c),i.subtreeFlags=r.subtreeFlags&14680064),l!==null?s=cr(l,s):(s=Vr(s,o,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=t.child.memoizedState,o=o===null?Gd(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Wd,i}return s=t.child,t=s.sibling,i=cr(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function Eh(t,e){return e=kc({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function qo(t,e,n,i){return i!==null&&ch(i),Ys(e,t.child,null,n),t=Eh(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function p1(t,e,n,i,r,s,o){if(n)return e.flags&256?(e.flags&=-257,i=Tu(Error(ne(422))),qo(t,e,o,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=kc({mode:"visible",children:i.children},r,0,null),s=Vr(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&Ys(e,t.child,null,o),e.child.memoizedState=Gd(o),e.memoizedState=Wd,s);if(!(e.mode&1))return qo(t,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var l=i.dgst;return i=l,s=Error(ne(419)),i=Tu(s,i,void 0),qo(t,e,o,i)}if(l=(o&t.childLanes)!==0,en||l){if(i=Dt,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Di(t,r),Xn(i,t,r,-1))}return Rh(),i=Tu(Error(ne(421))),qo(t,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=A1.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,mn=sr(r.nextSibling),gn=e,ct=!0,Hn=null,t!==null&&(En[wn++]=Ti,En[wn++]=Ai,En[wn++]=Xr,Ti=t.id,Ai=t.overflow,Xr=e),e=Eh(e,i.children),e.flags|=4096,e)}function um(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),zd(t.return,e,n)}function Au(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function Tv(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(Xt(t,e,i.children,n),i=dt.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&um(t,n,e);else if(t.tag===19)um(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(it(dt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&nc(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),Au(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&nc(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}Au(e,!0,n,null,s);break;case"together":Au(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Pl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Ii(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),$r|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(ne(153));if(e.child!==null){for(t=e.child,n=cr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=cr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function m1(t,e,n){switch(e.tag){case 3:wv(e),$s();break;case 5:Zx(e);break;case 1:nn(e.type)&&Kl(e);break;case 4:mh(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;it(Jl,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(it(dt,dt.current&1),e.flags|=128,null):n&e.child.childLanes?bv(t,e,n):(it(dt,dt.current&1),t=Ii(t,e,n),t!==null?t.sibling:null);it(dt,dt.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return Tv(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),it(dt,dt.current),i)break;return null;case 22:case 23:return e.lanes=0,Mv(t,e,n)}return Ii(t,e,n)}var Av,Xd,Cv,Rv;Av=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Xd=function(){};Cv=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,zr(ri.current);var s=null;switch(n){case"input":r=pd(t,r),i=pd(t,i),s=[];break;case"select":r=mt({},r,{value:void 0}),i=mt({},i,{value:void 0}),s=[];break;case"textarea":r=xd(t,r),i=xd(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=$l)}yd(n,i);var o;n=null;for(u in r)if(!i.hasOwnProperty(u)&&r.hasOwnProperty(u)&&r[u]!=null)if(u==="style"){var l=r[u];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Qa.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in i){var c=i[u];if(l=r!=null?r[u]:void 0,i.hasOwnProperty(u)&&c!==l&&(c!=null||l!=null))if(u==="style")if(l){for(o in l)!l.hasOwnProperty(o)||c&&c.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in c)c.hasOwnProperty(o)&&l[o]!==c[o]&&(n||(n={}),n[o]=c[o])}else n||(s||(s=[]),s.push(u,n)),n=c;else u==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,l=l?l.__html:void 0,c!=null&&l!==c&&(s=s||[]).push(u,c)):u==="children"?typeof c!="string"&&typeof c!="number"||(s=s||[]).push(u,""+c):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Qa.hasOwnProperty(u)?(c!=null&&u==="onScroll"&&rt("scroll",t),s||l===c||(s=[])):(s=s||[]).push(u,c))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};Rv=function(t,e,n,i){n!==i&&(e.flags|=4)};function ba(t,e){if(!ct)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function Ot(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function g1(t,e,n){var i=e.pendingProps;switch(lh(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ot(e),null;case 1:return nn(e.type)&&Yl(),Ot(e),null;case 3:return i=e.stateNode,Ks(),lt(tn),lt(Wt),xh(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(Go(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Hn!==null&&(ef(Hn),Hn=null))),Xd(t,e),Ot(e),null;case 5:gh(e);var r=zr(co.current);if(n=e.type,t!==null&&e.stateNode!=null)Cv(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(ne(166));return Ot(e),null}if(t=zr(ri.current),Go(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[ei]=e,i[oo]=s,t=(e.mode&1)!==0,n){case"dialog":rt("cancel",i),rt("close",i);break;case"iframe":case"object":case"embed":rt("load",i);break;case"video":case"audio":for(r=0;r<Fa.length;r++)rt(Fa[r],i);break;case"source":rt("error",i);break;case"img":case"image":case"link":rt("error",i),rt("load",i);break;case"details":rt("toggle",i);break;case"input":yp(i,s),rt("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},rt("invalid",i);break;case"textarea":Sp(i,s),rt("invalid",i)}yd(n,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="children"?typeof l=="string"?i.textContent!==l&&(s.suppressHydrationWarning!==!0&&Wo(i.textContent,l,t),r=["children",l]):typeof l=="number"&&i.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&Wo(i.textContent,l,t),r=["children",""+l]):Qa.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&rt("scroll",i)}switch(n){case"input":ko(i),_p(i,s,!0);break;case"textarea":ko(i),Mp(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=$l)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=ix(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(n,{is:i.is}):(t=o.createElement(n),n==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,n),t[ei]=e,t[oo]=i,Av(t,e,!1,!1),e.stateNode=t;e:{switch(o=_d(n,i),n){case"dialog":rt("cancel",t),rt("close",t),r=i;break;case"iframe":case"object":case"embed":rt("load",t),r=i;break;case"video":case"audio":for(r=0;r<Fa.length;r++)rt(Fa[r],t);r=i;break;case"source":rt("error",t),r=i;break;case"img":case"image":case"link":rt("error",t),rt("load",t),r=i;break;case"details":rt("toggle",t),r=i;break;case"input":yp(t,i),r=pd(t,i),rt("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=mt({},i,{value:void 0}),rt("invalid",t);break;case"textarea":Sp(t,i),r=xd(t,i),rt("invalid",t);break;default:r=i}yd(n,r),l=r;for(s in l)if(l.hasOwnProperty(s)){var c=l[s];s==="style"?ax(t,c):s==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&rx(t,c)):s==="children"?typeof c=="string"?(n!=="textarea"||c!=="")&&Za(t,c):typeof c=="number"&&Za(t,""+c):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Qa.hasOwnProperty(s)?c!=null&&s==="onScroll"&&rt("scroll",t):c!=null&&qf(t,s,c,o))}switch(n){case"input":ko(t),_p(t,i,!1);break;case"textarea":ko(t),Mp(t);break;case"option":i.value!=null&&t.setAttribute("value",""+pr(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?ks(t,!!i.multiple,s,!1):i.defaultValue!=null&&ks(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=$l)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Ot(e),null;case 6:if(t&&e.stateNode!=null)Rv(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(ne(166));if(n=zr(co.current),zr(ri.current),Go(e)){if(i=e.stateNode,n=e.memoizedProps,i[ei]=e,(s=i.nodeValue!==n)&&(t=gn,t!==null))switch(t.tag){case 3:Wo(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Wo(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[ei]=e,e.stateNode=i}return Ot(e),null;case 13:if(lt(dt),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ct&&mn!==null&&e.mode&1&&!(e.flags&128))qx(),$s(),e.flags|=98560,s=!1;else if(s=Go(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(ne(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(ne(317));s[ei]=e}else $s(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Ot(e),s=!1}else Hn!==null&&(ef(Hn),Hn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||dt.current&1?Ct===0&&(Ct=3):Rh())),e.updateQueue!==null&&(e.flags|=4),Ot(e),null);case 4:return Ks(),Xd(t,e),t===null&&so(e.stateNode.containerInfo),Ot(e),null;case 10:return fh(e.type._context),Ot(e),null;case 17:return nn(e.type)&&Yl(),Ot(e),null;case 19:if(lt(dt),s=e.memoizedState,s===null)return Ot(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)ba(s,!1);else{if(Ct!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=nc(t),o!==null){for(e.flags|=128,ba(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return it(dt,dt.current&1|2),e.child}t=t.sibling}s.tail!==null&&_t()>Zs&&(e.flags|=128,i=!0,ba(s,!1),e.lanes=4194304)}else{if(!i)if(t=nc(o),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),ba(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!ct)return Ot(e),null}else 2*_t()-s.renderingStartTime>Zs&&n!==1073741824&&(e.flags|=128,i=!0,ba(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=_t(),e.sibling=null,n=dt.current,it(dt,i?n&1|2:n&1),e):(Ot(e),null);case 22:case 23:return Ch(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?hn&1073741824&&(Ot(e),e.subtreeFlags&6&&(e.flags|=8192)):Ot(e),null;case 24:return null;case 25:return null}throw Error(ne(156,e.tag))}function x1(t,e){switch(lh(e),e.tag){case 1:return nn(e.type)&&Yl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Ks(),lt(tn),lt(Wt),xh(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return gh(e),null;case 13:if(lt(dt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(ne(340));$s()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return lt(dt),null;case 4:return Ks(),null;case 10:return fh(e.type._context),null;case 22:case 23:return Ch(),null;case 24:return null;default:return null}}var $o=!1,Vt=!1,v1=typeof WeakSet=="function"?WeakSet:Set,me=null;function Ls(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){yt(t,e,i)}else n.current=null}function qd(t,e,n){try{n()}catch(i){yt(t,e,i)}}var dm=!1;function y1(t,e){if(Pd=Gl,t=Ix(),ah(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,l=-1,c=-1,u=0,f=0,h=t,p=null;t:for(;;){for(var g;h!==n||r!==0&&h.nodeType!==3||(l=o+r),h!==s||i!==0&&h.nodeType!==3||(c=o+i),h.nodeType===3&&(o+=h.nodeValue.length),(g=h.firstChild)!==null;)p=h,h=g;for(;;){if(h===t)break t;if(p===n&&++u===r&&(l=o),p===s&&++f===i&&(c=o),(g=h.nextSibling)!==null)break;h=p,p=h.parentNode}h=g}n=l===-1||c===-1?null:{start:l,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for(Nd={focusedElem:t,selectionRange:n},Gl=!1,me=e;me!==null;)if(e=me,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,me=t;else for(;me!==null;){e=me;try{var y=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var _=y.memoizedProps,m=y.memoizedState,d=e.stateNode,x=d.getSnapshotBeforeUpdate(e.elementType===e.type?_:On(e.type,_),m);d.__reactInternalSnapshotBeforeUpdate=x}break;case 3:var v=e.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(ne(163))}}catch(S){yt(e,e.return,S)}if(t=e.sibling,t!==null){t.return=e.return,me=t;break}me=e.return}return y=dm,dm=!1,y}function qa(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&qd(e,n,s)}r=r.next}while(r!==i)}}function Ic(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function $d(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Pv(t){var e=t.alternate;e!==null&&(t.alternate=null,Pv(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[ei],delete e[oo],delete e[Id],delete e[t1],delete e[n1])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Nv(t){return t.tag===5||t.tag===3||t.tag===4}function fm(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Nv(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Yd(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=$l));else if(i!==4&&(t=t.child,t!==null))for(Yd(t,e,n),t=t.sibling;t!==null;)Yd(t,e,n),t=t.sibling}function Kd(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(Kd(t,e,n),t=t.sibling;t!==null;)Kd(t,e,n),t=t.sibling}var kt=null,Bn=!1;function Bi(t,e,n){for(n=n.child;n!==null;)Lv(t,e,n),n=n.sibling}function Lv(t,e,n){if(ii&&typeof ii.onCommitFiberUnmount=="function")try{ii.onCommitFiberUnmount(Tc,n)}catch{}switch(n.tag){case 5:Vt||Ls(n,e);case 6:var i=kt,r=Bn;kt=null,Bi(t,e,n),kt=i,Bn=r,kt!==null&&(Bn?(t=kt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):kt.removeChild(n.stateNode));break;case 18:kt!==null&&(Bn?(t=kt,n=n.stateNode,t.nodeType===8?_u(t.parentNode,n):t.nodeType===1&&_u(t,n),no(t)):_u(kt,n.stateNode));break;case 4:i=kt,r=Bn,kt=n.stateNode.containerInfo,Bn=!0,Bi(t,e,n),kt=i,Bn=r;break;case 0:case 11:case 14:case 15:if(!Vt&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&qd(n,e,o),r=r.next}while(r!==i)}Bi(t,e,n);break;case 1:if(!Vt&&(Ls(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(l){yt(n,e,l)}Bi(t,e,n);break;case 21:Bi(t,e,n);break;case 22:n.mode&1?(Vt=(i=Vt)||n.memoizedState!==null,Bi(t,e,n),Vt=i):Bi(t,e,n);break;default:Bi(t,e,n)}}function hm(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new v1),e.forEach(function(i){var r=C1.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function kn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:kt=l.stateNode,Bn=!1;break e;case 3:kt=l.stateNode.containerInfo,Bn=!0;break e;case 4:kt=l.stateNode.containerInfo,Bn=!0;break e}l=l.return}if(kt===null)throw Error(ne(160));Lv(s,o,r),kt=null,Bn=!1;var c=r.alternate;c!==null&&(c.return=null),r.return=null}catch(u){yt(r,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Dv(e,t),e=e.sibling}function Dv(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(kn(e,t),Kn(t),i&4){try{qa(3,t,t.return),Ic(3,t)}catch(_){yt(t,t.return,_)}try{qa(5,t,t.return)}catch(_){yt(t,t.return,_)}}break;case 1:kn(e,t),Kn(t),i&512&&n!==null&&Ls(n,n.return);break;case 5:if(kn(e,t),Kn(t),i&512&&n!==null&&Ls(n,n.return),t.flags&32){var r=t.stateNode;try{Za(r,"")}catch(_){yt(t,t.return,_)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,l=t.type,c=t.updateQueue;if(t.updateQueue=null,c!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&tx(r,s),_d(l,o);var u=_d(l,s);for(o=0;o<c.length;o+=2){var f=c[o],h=c[o+1];f==="style"?ax(r,h):f==="dangerouslySetInnerHTML"?rx(r,h):f==="children"?Za(r,h):qf(r,f,h,u)}switch(l){case"input":md(r,s);break;case"textarea":nx(r,s);break;case"select":var p=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var g=s.value;g!=null?ks(r,!!s.multiple,g,!1):p!==!!s.multiple&&(s.defaultValue!=null?ks(r,!!s.multiple,s.defaultValue,!0):ks(r,!!s.multiple,s.multiple?[]:"",!1))}r[oo]=s}catch(_){yt(t,t.return,_)}}break;case 6:if(kn(e,t),Kn(t),i&4){if(t.stateNode===null)throw Error(ne(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(_){yt(t,t.return,_)}}break;case 3:if(kn(e,t),Kn(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{no(e.containerInfo)}catch(_){yt(t,t.return,_)}break;case 4:kn(e,t),Kn(t);break;case 13:kn(e,t),Kn(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(Th=_t())),i&4&&hm(t);break;case 22:if(f=n!==null&&n.memoizedState!==null,t.mode&1?(Vt=(u=Vt)||f,kn(e,t),Vt=u):kn(e,t),Kn(t),i&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!f&&t.mode&1)for(me=t,f=t.child;f!==null;){for(h=me=f;me!==null;){switch(p=me,g=p.child,p.tag){case 0:case 11:case 14:case 15:qa(4,p,p.return);break;case 1:Ls(p,p.return);var y=p.stateNode;if(typeof y.componentWillUnmount=="function"){i=p,n=p.return;try{e=i,y.props=e.memoizedProps,y.state=e.memoizedState,y.componentWillUnmount()}catch(_){yt(i,n,_)}}break;case 5:Ls(p,p.return);break;case 22:if(p.memoizedState!==null){mm(h);continue}}g!==null?(g.return=p,me=g):mm(h)}f=f.sibling}e:for(f=null,h=t;;){if(h.tag===5){if(f===null){f=h;try{r=h.stateNode,u?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=h.stateNode,c=h.memoizedProps.style,o=c!=null&&c.hasOwnProperty("display")?c.display:null,l.style.display=sx("display",o))}catch(_){yt(t,t.return,_)}}}else if(h.tag===6){if(f===null)try{h.stateNode.nodeValue=u?"":h.memoizedProps}catch(_){yt(t,t.return,_)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===t)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;f===h&&(f=null),h=h.return}f===h&&(f=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:kn(e,t),Kn(t),i&4&&hm(t);break;case 21:break;default:kn(e,t),Kn(t)}}function Kn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Nv(n)){var i=n;break e}n=n.return}throw Error(ne(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(Za(r,""),i.flags&=-33);var s=fm(t);Kd(t,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,l=fm(t);Yd(t,l,o);break;default:throw Error(ne(161))}}catch(c){yt(t,t.return,c)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function _1(t,e,n){me=t,Iv(t)}function Iv(t,e,n){for(var i=(t.mode&1)!==0;me!==null;){var r=me,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||$o;if(!o){var l=r.alternate,c=l!==null&&l.memoizedState!==null||Vt;l=$o;var u=Vt;if($o=o,(Vt=c)&&!u)for(me=r;me!==null;)o=me,c=o.child,o.tag===22&&o.memoizedState!==null?gm(r):c!==null?(c.return=o,me=c):gm(r);for(;s!==null;)me=s,Iv(s),s=s.sibling;me=r,$o=l,Vt=u}pm(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,me=s):pm(t)}}function pm(t){for(;me!==null;){var e=me;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Vt||Ic(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Vt)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:On(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Zp(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Zp(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var c=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&n.focus();break;case"img":c.src&&(n.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var f=u.memoizedState;if(f!==null){var h=f.dehydrated;h!==null&&no(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(ne(163))}Vt||e.flags&512&&$d(e)}catch(p){yt(e,e.return,p)}}if(e===t){me=null;break}if(n=e.sibling,n!==null){n.return=e.return,me=n;break}me=e.return}}function mm(t){for(;me!==null;){var e=me;if(e===t){me=null;break}var n=e.sibling;if(n!==null){n.return=e.return,me=n;break}me=e.return}}function gm(t){for(;me!==null;){var e=me;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Ic(4,e)}catch(c){yt(e,n,c)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(c){yt(e,r,c)}}var s=e.return;try{$d(e)}catch(c){yt(e,s,c)}break;case 5:var o=e.return;try{$d(e)}catch(c){yt(e,o,c)}}}catch(c){yt(e,e.return,c)}if(e===t){me=null;break}var l=e.sibling;if(l!==null){l.return=e.return,me=l;break}me=e.return}}var S1=Math.ceil,sc=ki.ReactCurrentDispatcher,wh=ki.ReactCurrentOwner,Cn=ki.ReactCurrentBatchConfig,Xe=0,Dt=null,Tt=null,jt=0,hn=0,Ds=_r(0),Ct=0,po=null,$r=0,Uc=0,bh=0,$a=null,Zt=null,Th=0,Zs=1/0,Ei=null,ac=!1,Qd=null,or=null,Yo=!1,er=null,oc=0,Ya=0,Zd=null,Nl=-1,Ll=0;function qt(){return Xe&6?_t():Nl!==-1?Nl:Nl=_t()}function lr(t){return t.mode&1?Xe&2&&jt!==0?jt&-jt:r1.transition!==null?(Ll===0&&(Ll=vx()),Ll):(t=et,t!==0||(t=window.event,t=t===void 0?16:bx(t.type)),t):1}function Xn(t,e,n,i){if(50<Ya)throw Ya=0,Zd=null,Error(ne(185));_o(t,n,i),(!(Xe&2)||t!==Dt)&&(t===Dt&&(!(Xe&2)&&(Uc|=n),Ct===4&&Qi(t,jt)),rn(t,i),n===1&&Xe===0&&!(e.mode&1)&&(Zs=_t()+500,Nc&&Sr()))}function rn(t,e){var n=t.callbackNode;r_(t,e);var i=Wl(t,t===Dt?jt:0);if(i===0)n!==null&&bp(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&bp(n),e===1)t.tag===0?i1(xm.bind(null,t)):Wx(xm.bind(null,t)),J_(function(){!(Xe&6)&&Sr()}),n=null;else{switch(yx(i)){case 1:n=Zf;break;case 4:n=gx;break;case 16:n=Vl;break;case 536870912:n=xx;break;default:n=Vl}n=Hv(n,Uv.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Uv(t,e){if(Nl=-1,Ll=0,Xe&6)throw Error(ne(327));var n=t.callbackNode;if(Bs()&&t.callbackNode!==n)return null;var i=Wl(t,t===Dt?jt:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=lc(t,i);else{e=i;var r=Xe;Xe|=2;var s=jv();(Dt!==t||jt!==e)&&(Ei=null,Zs=_t()+500,Hr(t,e));do try{w1();break}catch(l){kv(t,l)}while(!0);dh(),sc.current=s,Xe=r,Tt!==null?e=0:(Dt=null,jt=0,e=Ct)}if(e!==0){if(e===2&&(r=bd(t),r!==0&&(i=r,e=Jd(t,r))),e===1)throw n=po,Hr(t,0),Qi(t,i),rn(t,_t()),n;if(e===6)Qi(t,i);else{if(r=t.current.alternate,!(i&30)&&!M1(r)&&(e=lc(t,i),e===2&&(s=bd(t),s!==0&&(i=s,e=Jd(t,s))),e===1))throw n=po,Hr(t,0),Qi(t,i),rn(t,_t()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(ne(345));case 2:Nr(t,Zt,Ei);break;case 3:if(Qi(t,i),(i&130023424)===i&&(e=Th+500-_t(),10<e)){if(Wl(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){qt(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=Dd(Nr.bind(null,t,Zt,Ei),e);break}Nr(t,Zt,Ei);break;case 4:if(Qi(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var o=31-Gn(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=_t()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*S1(i/1960))-i,10<i){t.timeoutHandle=Dd(Nr.bind(null,t,Zt,Ei),i);break}Nr(t,Zt,Ei);break;case 5:Nr(t,Zt,Ei);break;default:throw Error(ne(329))}}}return rn(t,_t()),t.callbackNode===n?Uv.bind(null,t):null}function Jd(t,e){var n=$a;return t.current.memoizedState.isDehydrated&&(Hr(t,e).flags|=256),t=lc(t,e),t!==2&&(e=Zt,Zt=n,e!==null&&ef(e)),t}function ef(t){Zt===null?Zt=t:Zt.push.apply(Zt,t)}function M1(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!qn(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Qi(t,e){for(e&=~bh,e&=~Uc,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Gn(e),i=1<<n;t[n]=-1,e&=~i}}function xm(t){if(Xe&6)throw Error(ne(327));Bs();var e=Wl(t,0);if(!(e&1))return rn(t,_t()),null;var n=lc(t,e);if(t.tag!==0&&n===2){var i=bd(t);i!==0&&(e=i,n=Jd(t,i))}if(n===1)throw n=po,Hr(t,0),Qi(t,e),rn(t,_t()),n;if(n===6)throw Error(ne(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Nr(t,Zt,Ei),rn(t,_t()),null}function Ah(t,e){var n=Xe;Xe|=1;try{return t(e)}finally{Xe=n,Xe===0&&(Zs=_t()+500,Nc&&Sr())}}function Yr(t){er!==null&&er.tag===0&&!(Xe&6)&&Bs();var e=Xe;Xe|=1;var n=Cn.transition,i=et;try{if(Cn.transition=null,et=1,t)return t()}finally{et=i,Cn.transition=n,Xe=e,!(Xe&6)&&Sr()}}function Ch(){hn=Ds.current,lt(Ds)}function Hr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,Z_(n)),Tt!==null)for(n=Tt.return;n!==null;){var i=n;switch(lh(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Yl();break;case 3:Ks(),lt(tn),lt(Wt),xh();break;case 5:gh(i);break;case 4:Ks();break;case 13:lt(dt);break;case 19:lt(dt);break;case 10:fh(i.type._context);break;case 22:case 23:Ch()}n=n.return}if(Dt=t,Tt=t=cr(t.current,null),jt=hn=e,Ct=0,po=null,bh=Uc=$r=0,Zt=$a=null,jr!==null){for(e=0;e<jr.length;e++)if(n=jr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}n.pending=i}jr=null}return t}function kv(t,e){do{var n=Tt;try{if(dh(),Cl.current=rc,ic){for(var i=ft.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}ic=!1}if(qr=0,Lt=At=ft=null,Xa=!1,uo=0,wh.current=null,n===null||n.return===null){Ct=1,po=e,Tt=null;break}e:{var s=t,o=n.return,l=n,c=e;if(e=jt,l.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var u=c,f=l,h=f.tag;if(!(f.mode&1)&&(h===0||h===11||h===15)){var p=f.alternate;p?(f.updateQueue=p.updateQueue,f.memoizedState=p.memoizedState,f.lanes=p.lanes):(f.updateQueue=null,f.memoizedState=null)}var g=rm(o);if(g!==null){g.flags&=-257,sm(g,o,l,s,e),g.mode&1&&im(s,u,e),e=g,c=u;var y=e.updateQueue;if(y===null){var _=new Set;_.add(c),e.updateQueue=_}else y.add(c);break e}else{if(!(e&1)){im(s,u,e),Rh();break e}c=Error(ne(426))}}else if(ct&&l.mode&1){var m=rm(o);if(m!==null){!(m.flags&65536)&&(m.flags|=256),sm(m,o,l,s,e),ch(Qs(c,l));break e}}s=c=Qs(c,l),Ct!==4&&(Ct=2),$a===null?$a=[s]:$a.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var d=yv(s,c,e);Qp(s,d);break e;case 1:l=c;var x=s.type,v=s.stateNode;if(!(s.flags&128)&&(typeof x.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(or===null||!or.has(v)))){s.flags|=65536,e&=-e,s.lanes|=e;var S=_v(s,l,e);Qp(s,S);break e}}s=s.return}while(s!==null)}Fv(n)}catch(C){e=C,Tt===n&&n!==null&&(Tt=n=n.return);continue}break}while(!0)}function jv(){var t=sc.current;return sc.current=rc,t===null?rc:t}function Rh(){(Ct===0||Ct===3||Ct===2)&&(Ct=4),Dt===null||!($r&268435455)&&!(Uc&268435455)||Qi(Dt,jt)}function lc(t,e){var n=Xe;Xe|=2;var i=jv();(Dt!==t||jt!==e)&&(Ei=null,Hr(t,e));do try{E1();break}catch(r){kv(t,r)}while(!0);if(dh(),Xe=n,sc.current=i,Tt!==null)throw Error(ne(261));return Dt=null,jt=0,Ct}function E1(){for(;Tt!==null;)zv(Tt)}function w1(){for(;Tt!==null&&!Yy();)zv(Tt)}function zv(t){var e=Bv(t.alternate,t,hn);t.memoizedProps=t.pendingProps,e===null?Fv(t):Tt=e,wh.current=null}function Fv(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=x1(n,e),n!==null){n.flags&=32767,Tt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Ct=6,Tt=null;return}}else if(n=g1(n,e,hn),n!==null){Tt=n;return}if(e=e.sibling,e!==null){Tt=e;return}Tt=e=t}while(e!==null);Ct===0&&(Ct=5)}function Nr(t,e,n){var i=et,r=Cn.transition;try{Cn.transition=null,et=1,b1(t,e,n,i)}finally{Cn.transition=r,et=i}return null}function b1(t,e,n,i){do Bs();while(er!==null);if(Xe&6)throw Error(ne(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(ne(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(s_(t,s),t===Dt&&(Tt=Dt=null,jt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Yo||(Yo=!0,Hv(Vl,function(){return Bs(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Cn.transition,Cn.transition=null;var o=et;et=1;var l=Xe;Xe|=4,wh.current=null,y1(t,n),Dv(n,t),G_(Nd),Gl=!!Pd,Nd=Pd=null,t.current=n,_1(n),Ky(),Xe=l,et=o,Cn.transition=s}else t.current=n;if(Yo&&(Yo=!1,er=t,oc=r),s=t.pendingLanes,s===0&&(or=null),Jy(n.stateNode),rn(t,_t()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(ac)throw ac=!1,t=Qd,Qd=null,t;return oc&1&&t.tag!==0&&Bs(),s=t.pendingLanes,s&1?t===Zd?Ya++:(Ya=0,Zd=t):Ya=0,Sr(),null}function Bs(){if(er!==null){var t=yx(oc),e=Cn.transition,n=et;try{if(Cn.transition=null,et=16>t?16:t,er===null)var i=!1;else{if(t=er,er=null,oc=0,Xe&6)throw Error(ne(331));var r=Xe;for(Xe|=4,me=t.current;me!==null;){var s=me,o=s.child;if(me.flags&16){var l=s.deletions;if(l!==null){for(var c=0;c<l.length;c++){var u=l[c];for(me=u;me!==null;){var f=me;switch(f.tag){case 0:case 11:case 15:qa(8,f,s)}var h=f.child;if(h!==null)h.return=f,me=h;else for(;me!==null;){f=me;var p=f.sibling,g=f.return;if(Pv(f),f===u){me=null;break}if(p!==null){p.return=g,me=p;break}me=g}}}var y=s.alternate;if(y!==null){var _=y.child;if(_!==null){y.child=null;do{var m=_.sibling;_.sibling=null,_=m}while(_!==null)}}me=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,me=o;else e:for(;me!==null;){if(s=me,s.flags&2048)switch(s.tag){case 0:case 11:case 15:qa(9,s,s.return)}var d=s.sibling;if(d!==null){d.return=s.return,me=d;break e}me=s.return}}var x=t.current;for(me=x;me!==null;){o=me;var v=o.child;if(o.subtreeFlags&2064&&v!==null)v.return=o,me=v;else e:for(o=x;me!==null;){if(l=me,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:Ic(9,l)}}catch(C){yt(l,l.return,C)}if(l===o){me=null;break e}var S=l.sibling;if(S!==null){S.return=l.return,me=S;break e}me=l.return}}if(Xe=r,Sr(),ii&&typeof ii.onPostCommitFiberRoot=="function")try{ii.onPostCommitFiberRoot(Tc,t)}catch{}i=!0}return i}finally{et=n,Cn.transition=e}}return!1}function vm(t,e,n){e=Qs(n,e),e=yv(t,e,1),t=ar(t,e,1),e=qt(),t!==null&&(_o(t,1,e),rn(t,e))}function yt(t,e,n){if(t.tag===3)vm(t,t,n);else for(;e!==null;){if(e.tag===3){vm(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(or===null||!or.has(i))){t=Qs(n,t),t=_v(e,t,1),e=ar(e,t,1),t=qt(),e!==null&&(_o(e,1,t),rn(e,t));break}}e=e.return}}function T1(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=qt(),t.pingedLanes|=t.suspendedLanes&n,Dt===t&&(jt&n)===n&&(Ct===4||Ct===3&&(jt&130023424)===jt&&500>_t()-Th?Hr(t,0):bh|=n),rn(t,e)}function Ov(t,e){e===0&&(t.mode&1?(e=Fo,Fo<<=1,!(Fo&130023424)&&(Fo=4194304)):e=1);var n=qt();t=Di(t,e),t!==null&&(_o(t,e,n),rn(t,n))}function A1(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Ov(t,n)}function C1(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(ne(314))}i!==null&&i.delete(e),Ov(t,n)}var Bv;Bv=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||tn.current)en=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return en=!1,m1(t,e,n);en=!!(t.flags&131072)}else en=!1,ct&&e.flags&1048576&&Gx(e,Zl,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Pl(t,e),t=e.pendingProps;var r=qs(e,Wt.current);Os(e,n),r=yh(null,e,i,t,r,n);var s=_h();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,nn(i)?(s=!0,Kl(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,ph(e),r.updater=Dc,e.stateNode=r,r._reactInternals=e,Od(e,i,t,n),e=Vd(null,e,i,!0,s,n)):(e.tag=0,ct&&s&&oh(e),Xt(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(Pl(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=P1(i),t=On(i,t),r){case 0:e=Hd(null,e,i,t,n);break e;case 1:e=lm(null,e,i,t,n);break e;case 11:e=am(null,e,i,t,n);break e;case 14:e=om(null,e,i,On(i.type,t),n);break e}throw Error(ne(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:On(i,r),Hd(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:On(i,r),lm(t,e,i,r,n);case 3:e:{if(wv(e),t===null)throw Error(ne(387));i=e.pendingProps,s=e.memoizedState,r=s.element,Qx(t,e),tc(e,i,null,n);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=Qs(Error(ne(423)),e),e=cm(t,e,i,n,r);break e}else if(i!==r){r=Qs(Error(ne(424)),e),e=cm(t,e,i,n,r);break e}else for(mn=sr(e.stateNode.containerInfo.firstChild),gn=e,ct=!0,Hn=null,n=Yx(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if($s(),i===r){e=Ii(t,e,n);break e}Xt(t,e,i,n)}e=e.child}return e;case 5:return Zx(e),t===null&&jd(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,o=r.children,Ld(i,r)?o=null:s!==null&&Ld(i,s)&&(e.flags|=32),Ev(t,e),Xt(t,e,o,n),e.child;case 6:return t===null&&jd(e),null;case 13:return bv(t,e,n);case 4:return mh(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=Ys(e,null,i,n):Xt(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:On(i,r),am(t,e,i,r,n);case 7:return Xt(t,e,e.pendingProps,n),e.child;case 8:return Xt(t,e,e.pendingProps.children,n),e.child;case 12:return Xt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,it(Jl,i._currentValue),i._currentValue=o,s!==null)if(qn(s.value,o)){if(s.children===r.children&&!tn.current){e=Ii(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var l=s.dependencies;if(l!==null){o=s.child;for(var c=l.firstContext;c!==null;){if(c.context===i){if(s.tag===1){c=Pi(-1,n&-n),c.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var f=u.pending;f===null?c.next=c:(c.next=f.next,f.next=c),u.pending=c}}s.lanes|=n,c=s.alternate,c!==null&&(c.lanes|=n),zd(s.return,n,e),l.lanes|=n;break}c=c.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(ne(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),zd(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Xt(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Os(e,n),r=Pn(r),i=i(r),e.flags|=1,Xt(t,e,i,n),e.child;case 14:return i=e.type,r=On(i,e.pendingProps),r=On(i.type,r),om(t,e,i,r,n);case 15:return Sv(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:On(i,r),Pl(t,e),e.tag=1,nn(i)?(t=!0,Kl(e)):t=!1,Os(e,n),vv(e,i,r),Od(e,i,r,n),Vd(null,e,i,!0,t,n);case 19:return Tv(t,e,n);case 22:return Mv(t,e,n)}throw Error(ne(156,e.tag))};function Hv(t,e){return mx(t,e)}function R1(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function bn(t,e,n,i){return new R1(t,e,n,i)}function Ph(t){return t=t.prototype,!(!t||!t.isReactComponent)}function P1(t){if(typeof t=="function")return Ph(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Yf)return 11;if(t===Kf)return 14}return 2}function cr(t,e){var n=t.alternate;return n===null?(n=bn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Dl(t,e,n,i,r,s){var o=2;if(i=t,typeof t=="function")Ph(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Es:return Vr(n.children,r,s,e);case $f:o=8,r|=8;break;case ud:return t=bn(12,n,e,r|2),t.elementType=ud,t.lanes=s,t;case dd:return t=bn(13,n,e,r),t.elementType=dd,t.lanes=s,t;case fd:return t=bn(19,n,e,r),t.elementType=fd,t.lanes=s,t;case Zg:return kc(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Kg:o=10;break e;case Qg:o=9;break e;case Yf:o=11;break e;case Kf:o=14;break e;case $i:o=16,i=null;break e}throw Error(ne(130,t==null?t:typeof t,""))}return e=bn(o,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function Vr(t,e,n,i){return t=bn(7,t,i,e),t.lanes=n,t}function kc(t,e,n,i){return t=bn(22,t,i,e),t.elementType=Zg,t.lanes=n,t.stateNode={isHidden:!1},t}function Cu(t,e,n){return t=bn(6,t,null,e),t.lanes=n,t}function Ru(t,e,n){return e=bn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function N1(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=cu(0),this.expirationTimes=cu(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=cu(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Nh(t,e,n,i,r,s,o,l,c){return t=new N1(t,e,n,l,c),e===1?(e=1,s===!0&&(e|=8)):e=0,s=bn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},ph(s),t}function L1(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ms,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function Vv(t){if(!t)return mr;t=t._reactInternals;e:{if(ts(t)!==t||t.tag!==1)throw Error(ne(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(nn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(ne(171))}if(t.tag===1){var n=t.type;if(nn(n))return Vx(t,n,e)}return e}function Wv(t,e,n,i,r,s,o,l,c){return t=Nh(n,i,!0,t,r,s,o,l,c),t.context=Vv(null),n=t.current,i=qt(),r=lr(n),s=Pi(i,r),s.callback=e??null,ar(n,s,r),t.current.lanes=r,_o(t,r,i),rn(t,i),t}function jc(t,e,n,i){var r=e.current,s=qt(),o=lr(r);return n=Vv(n),e.context===null?e.context=n:e.pendingContext=n,e=Pi(s,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=ar(r,e,o),t!==null&&(Xn(t,r,o,s),Al(t,r,o)),o}function cc(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function ym(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Lh(t,e){ym(t,e),(t=t.alternate)&&ym(t,e)}function D1(){return null}var Gv=typeof reportError=="function"?reportError:function(t){console.error(t)};function Dh(t){this._internalRoot=t}zc.prototype.render=Dh.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(ne(409));jc(t,e,null,null)};zc.prototype.unmount=Dh.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Yr(function(){jc(null,t,null,null)}),e[Li]=null}};function zc(t){this._internalRoot=t}zc.prototype.unstable_scheduleHydration=function(t){if(t){var e=Mx();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Ki.length&&e!==0&&e<Ki[n].priority;n++);Ki.splice(n,0,t),n===0&&wx(t)}};function Ih(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Fc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function _m(){}function I1(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var u=cc(o);s.call(u)}}var o=Wv(e,i,t,0,null,!1,!1,"",_m);return t._reactRootContainer=o,t[Li]=o.current,so(t.nodeType===8?t.parentNode:t),Yr(),o}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var l=i;i=function(){var u=cc(c);l.call(u)}}var c=Nh(t,0,!1,null,null,!1,!1,"",_m);return t._reactRootContainer=c,t[Li]=c.current,so(t.nodeType===8?t.parentNode:t),Yr(function(){jc(e,c,n,i)}),c}function Oc(t,e,n,i,r){var s=n._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var l=r;r=function(){var c=cc(o);l.call(c)}}jc(e,o,t,r)}else o=I1(n,e,t,r,i);return cc(o)}_x=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=za(e.pendingLanes);n!==0&&(Jf(e,n|1),rn(e,_t()),!(Xe&6)&&(Zs=_t()+500,Sr()))}break;case 13:Yr(function(){var i=Di(t,1);if(i!==null){var r=qt();Xn(i,t,1,r)}}),Lh(t,1)}};eh=function(t){if(t.tag===13){var e=Di(t,134217728);if(e!==null){var n=qt();Xn(e,t,134217728,n)}Lh(t,134217728)}};Sx=function(t){if(t.tag===13){var e=lr(t),n=Di(t,e);if(n!==null){var i=qt();Xn(n,t,e,i)}Lh(t,e)}};Mx=function(){return et};Ex=function(t,e){var n=et;try{return et=t,e()}finally{et=n}};Md=function(t,e,n){switch(e){case"input":if(md(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=Pc(i);if(!r)throw Error(ne(90));ex(i),md(i,r)}}}break;case"textarea":nx(t,n);break;case"select":e=n.value,e!=null&&ks(t,!!n.multiple,e,!1)}};cx=Ah;ux=Yr;var U1={usingClientEntryPoint:!1,Events:[Mo,As,Pc,ox,lx,Ah]},Ta={findFiberByHostInstance:kr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},k1={bundleType:Ta.bundleType,version:Ta.version,rendererPackageName:Ta.rendererPackageName,rendererConfig:Ta.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ki.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=hx(t),t===null?null:t.stateNode},findFiberByHostInstance:Ta.findFiberByHostInstance||D1,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ko=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ko.isDisabled&&Ko.supportsFiber)try{Tc=Ko.inject(k1),ii=Ko}catch{}}vn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=U1;vn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ih(e))throw Error(ne(200));return L1(t,e,null,n)};vn.createRoot=function(t,e){if(!Ih(t))throw Error(ne(299));var n=!1,i="",r=Gv;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Nh(t,1,!1,null,null,n,!1,i,r),t[Li]=e.current,so(t.nodeType===8?t.parentNode:t),new Dh(e)};vn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(ne(188)):(t=Object.keys(t).join(","),Error(ne(268,t)));return t=hx(e),t=t===null?null:t.stateNode,t};vn.flushSync=function(t){return Yr(t)};vn.hydrate=function(t,e,n){if(!Fc(e))throw Error(ne(200));return Oc(null,t,e,!0,n)};vn.hydrateRoot=function(t,e,n){if(!Ih(t))throw Error(ne(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",o=Gv;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=Wv(e,null,t,1,n??null,r,!1,s,o),t[Li]=e.current,so(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new zc(e)};vn.render=function(t,e,n){if(!Fc(e))throw Error(ne(200));return Oc(null,t,e,!1,n)};vn.unmountComponentAtNode=function(t){if(!Fc(t))throw Error(ne(40));return t._reactRootContainer?(Yr(function(){Oc(null,null,t,!1,function(){t._reactRootContainer=null,t[Li]=null})}),!0):!1};vn.unstable_batchedUpdates=Ah;vn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!Fc(n))throw Error(ne(200));if(t==null||t._reactInternals===void 0)throw Error(ne(38));return Oc(t,e,n,!1,i)};vn.version="18.3.1-next-f1338f8080-20240426";function Xv(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Xv)}catch(t){console.error(t)}}Xv(),Xg.exports=vn;var j1=Xg.exports,Sm=j1;ld.createRoot=Sm.createRoot,ld.hydrateRoot=Sm.hydrateRoot;/**
 * @remix-run/router v1.23.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function mo(){return mo=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)({}).hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},mo.apply(null,arguments)}var tr;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(tr||(tr={}));const Mm="popstate";function z1(t){t===void 0&&(t={});function e(i,r){let{pathname:s,search:o,hash:l}=i.location;return tf("",{pathname:s,search:o,hash:l},r.state&&r.state.usr||null,r.state&&r.state.key||"default")}function n(i,r){return typeof r=="string"?r:uc(r)}return O1(e,n,null,t)}function ht(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function qv(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function F1(){return Math.random().toString(36).substr(2,8)}function Em(t,e){return{usr:t.state,key:t.key,idx:e}}function tf(t,e,n,i){return n===void 0&&(n=null),mo({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?la(e):e,{state:n,key:e&&e.key||i||F1()})}function uc(t){let{pathname:e="/",search:n="",hash:i=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),i&&i!=="#"&&(e+=i.charAt(0)==="#"?i:"#"+i),e}function la(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let i=t.indexOf("?");i>=0&&(e.search=t.substr(i),t=t.substr(0,i)),t&&(e.pathname=t)}return e}function O1(t,e,n,i){i===void 0&&(i={});let{window:r=document.defaultView,v5Compat:s=!1}=i,o=r.history,l=tr.Pop,c=null,u=f();u==null&&(u=0,o.replaceState(mo({},o.state,{idx:u}),""));function f(){return(o.state||{idx:null}).idx}function h(){l=tr.Pop;let m=f(),d=m==null?null:m-u;u=m,c&&c({action:l,location:_.location,delta:d})}function p(m,d){l=tr.Push;let x=tf(_.location,m,d);u=f()+1;let v=Em(x,u),S=_.createHref(x);try{o.pushState(v,"",S)}catch(C){if(C instanceof DOMException&&C.name==="DataCloneError")throw C;r.location.assign(S)}s&&c&&c({action:l,location:_.location,delta:1})}function g(m,d){l=tr.Replace;let x=tf(_.location,m,d);u=f();let v=Em(x,u),S=_.createHref(x);o.replaceState(v,"",S),s&&c&&c({action:l,location:_.location,delta:0})}function y(m){let d=r.location.origin!=="null"?r.location.origin:r.location.href,x=typeof m=="string"?m:uc(m);return x=x.replace(/ $/,"%20"),ht(d,"No window.location.(origin|href) available to create URL for href: "+x),new URL(x,d)}let _={get action(){return l},get location(){return t(r,o)},listen(m){if(c)throw new Error("A history only accepts one active listener");return r.addEventListener(Mm,h),c=m,()=>{r.removeEventListener(Mm,h),c=null}},createHref(m){return e(r,m)},createURL:y,encodeLocation(m){let d=y(m);return{pathname:d.pathname,search:d.search,hash:d.hash}},push:p,replace:g,go(m){return o.go(m)}};return _}var wm;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(wm||(wm={}));function B1(t,e,n){return n===void 0&&(n="/"),H1(t,e,n)}function H1(t,e,n,i){let r=typeof e=="string"?la(e):e,s=Js(r.pathname||"/",n);if(s==null)return null;let o=$v(t);V1(o);let l=null,c=eS(s);for(let u=0;l==null&&u<o.length;++u)l=Z1(o[u],c);return l}function $v(t,e,n,i){e===void 0&&(e=[]),n===void 0&&(n=[]),i===void 0&&(i="");let r=(s,o,l)=>{let c={relativePath:l===void 0?s.path||"":l,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};c.relativePath.startsWith("/")&&(ht(c.relativePath.startsWith(i),'Absolute route path "'+c.relativePath+'" nested under path '+('"'+i+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),c.relativePath=c.relativePath.slice(i.length));let u=ur([i,c.relativePath]),f=n.concat(c);s.children&&s.children.length>0&&(ht(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),$v(s.children,e,f,u)),!(s.path==null&&!s.index)&&e.push({path:u,score:K1(u,s.index),routesMeta:f})};return t.forEach((s,o)=>{var l;if(s.path===""||!((l=s.path)!=null&&l.includes("?")))r(s,o);else for(let c of Yv(s.path))r(s,o,c)}),e}function Yv(t){let e=t.split("/");if(e.length===0)return[];let[n,...i]=e,r=n.endsWith("?"),s=n.replace(/\?$/,"");if(i.length===0)return r?[s,""]:[s];let o=Yv(i.join("/")),l=[];return l.push(...o.map(c=>c===""?s:[s,c].join("/"))),r&&l.push(...o),l.map(c=>t.startsWith("/")&&c===""?"/":c)}function V1(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:Q1(e.routesMeta.map(i=>i.childrenIndex),n.routesMeta.map(i=>i.childrenIndex)))}const W1=/^:[\w-]+$/,G1=3,X1=2,q1=1,$1=10,Y1=-2,bm=t=>t==="*";function K1(t,e){let n=t.split("/"),i=n.length;return n.some(bm)&&(i+=Y1),e&&(i+=X1),n.filter(r=>!bm(r)).reduce((r,s)=>r+(W1.test(s)?G1:s===""?q1:$1),i)}function Q1(t,e){return t.length===e.length&&t.slice(0,-1).every((i,r)=>i===e[r])?t[t.length-1]-e[e.length-1]:0}function Z1(t,e,n){let{routesMeta:i}=t,r={},s="/",o=[];for(let l=0;l<i.length;++l){let c=i[l],u=l===i.length-1,f=s==="/"?e:e.slice(s.length)||"/",h=nf({path:c.relativePath,caseSensitive:c.caseSensitive,end:u},f),p=c.route;if(!h)return null;Object.assign(r,h.params),o.push({params:r,pathname:ur([s,h.pathname]),pathnameBase:iS(ur([s,h.pathnameBase])),route:p}),h.pathnameBase!=="/"&&(s=ur([s,h.pathnameBase]))}return o}function nf(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,i]=J1(t.path,t.caseSensitive,t.end),r=e.match(n);if(!r)return null;let s=r[0],o=s.replace(/(.)\/+$/,"$1"),l=r.slice(1);return{params:i.reduce((u,f,h)=>{let{paramName:p,isOptional:g}=f;if(p==="*"){let _=l[h]||"";o=s.slice(0,s.length-_.length).replace(/(.)\/+$/,"$1")}const y=l[h];return g&&!y?u[p]=void 0:u[p]=(y||"").replace(/%2F/g,"/"),u},{}),pathname:s,pathnameBase:o,pattern:t}}function J1(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),qv(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let i=[],r="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,l,c)=>(i.push({paramName:l,isOptional:c!=null}),c?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(i.push({paramName:"*"}),r+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?r+="\\/*$":t!==""&&t!=="/"&&(r+="(?:(?=\\/|$))"),[new RegExp(r,e?void 0:"i"),i]}function eS(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return qv(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function Js(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,i=t.charAt(n);return i&&i!=="/"?null:t.slice(n)||"/"}function tS(t,e){e===void 0&&(e="/");let{pathname:n,search:i="",hash:r=""}=typeof t=="string"?la(t):t,s;return n?(n=Kv(n),n.startsWith("/")?s=Tm(n.substring(1),"/"):s=Tm(n,e)):s=e,{pathname:s,search:rS(i),hash:sS(r)}}function Tm(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(r=>{r===".."?n.length>1&&n.pop():r!=="."&&n.push(r)}),n.length>1?n.join("/"):"/"}function Pu(t,e,n,i){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(i)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function nS(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function Uh(t,e){let n=nS(t);return e?n.map((i,r)=>r===n.length-1?i.pathname:i.pathnameBase):n.map(i=>i.pathnameBase)}function kh(t,e,n,i){i===void 0&&(i=!1);let r;typeof t=="string"?r=la(t):(r=mo({},t),ht(!r.pathname||!r.pathname.includes("?"),Pu("?","pathname","search",r)),ht(!r.pathname||!r.pathname.includes("#"),Pu("#","pathname","hash",r)),ht(!r.search||!r.search.includes("#"),Pu("#","search","hash",r)));let s=t===""||r.pathname==="",o=s?"/":r.pathname,l;if(o==null)l=n;else{let h=e.length-1;if(!i&&o.startsWith("..")){let p=o.split("/");for(;p[0]==="..";)p.shift(),h-=1;r.pathname=p.join("/")}l=h>=0?e[h]:"/"}let c=tS(r,l),u=o&&o!=="/"&&o.endsWith("/"),f=(s||o===".")&&n.endsWith("/");return!c.pathname.endsWith("/")&&(u||f)&&(c.pathname+="/"),c}const Kv=t=>t.replace(/\/\/+/g,"/"),ur=t=>Kv(t.join("/")),iS=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),rS=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,sS=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function aS(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const Qv=["post","put","patch","delete"];new Set(Qv);const oS=["get",...Qv];new Set(oS);/**
 * React Router v6.30.6
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function go(){return go=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)({}).hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},go.apply(null,arguments)}const Bc=P.createContext(null),Zv=P.createContext(null),ji=P.createContext(null),Hc=P.createContext(null),zi=P.createContext({outlet:null,matches:[],isDataRoute:!1}),Jv=P.createContext(null);function lS(t,e){let{relative:n}=e===void 0?{}:e;ca()||ht(!1);let{basename:i,navigator:r}=P.useContext(ji),{hash:s,pathname:o,search:l}=Vc(t,{relative:n}),c=o;return i!=="/"&&(c=o==="/"?i:ur([i,o])),r.createHref({pathname:c,search:l,hash:s})}function ca(){return P.useContext(Hc)!=null}function fi(){return ca()||ht(!1),P.useContext(Hc).location}function e0(t){P.useContext(ji).static||P.useLayoutEffect(t)}function hi(){let{isDataRoute:t}=P.useContext(zi);return t?ES():cS()}function cS(){ca()||ht(!1);let t=P.useContext(Bc),{basename:e,future:n,navigator:i}=P.useContext(ji),{matches:r}=P.useContext(zi),{pathname:s}=fi(),o=JSON.stringify(Uh(r,n.v7_relativeSplatPath)),l=P.useRef(!1);return e0(()=>{l.current=!0}),P.useCallback(function(u,f){if(f===void 0&&(f={}),!l.current)return;if(typeof u=="number"){i.go(u);return}let h=kh(u,JSON.parse(o),s,f.relative==="path");t==null&&e!=="/"&&(h.pathname=h.pathname==="/"?e:ur([e,h.pathname])),(f.replace?i.replace:i.push)(h,f.state,f)},[e,i,o,s,t])}const uS=P.createContext(null);function dS(t){let e=P.useContext(zi).outlet;return e&&P.createElement(uS.Provider,{value:t},e)}function Vc(t,e){let{relative:n}=e===void 0?{}:e,{future:i}=P.useContext(ji),{matches:r}=P.useContext(zi),{pathname:s}=fi(),o=JSON.stringify(Uh(r,i.v7_relativeSplatPath));return P.useMemo(()=>kh(t,JSON.parse(o),s,n==="path"),[t,o,s,n])}function fS(t,e){return hS(t,e)}function hS(t,e,n,i){ca()||ht(!1);let{navigator:r}=P.useContext(ji),{matches:s}=P.useContext(zi),o=s[s.length-1],l=o?o.params:{};o&&o.pathname;let c=o?o.pathnameBase:"/";o&&o.route;let u=fi(),f;if(e){var h;let m=typeof e=="string"?la(e):e;c==="/"||(h=m.pathname)!=null&&h.startsWith(c)||ht(!1),f=m}else f=u;let p=f.pathname||"/",g=p;if(c!=="/"){let m=c.replace(/^\//,"").split("/");g="/"+p.replace(/^\//,"").split("/").slice(m.length).join("/")}let y=B1(t,{pathname:g}),_=vS(y&&y.map(m=>Object.assign({},m,{params:Object.assign({},l,m.params),pathname:ur([c,r.encodeLocation?r.encodeLocation(m.pathname).pathname:m.pathname]),pathnameBase:m.pathnameBase==="/"?c:ur([c,r.encodeLocation?r.encodeLocation(m.pathnameBase).pathname:m.pathnameBase])})),s,n,i);return e&&_?P.createElement(Hc.Provider,{value:{location:go({pathname:"/",search:"",hash:"",state:null,key:"default"},f),navigationType:tr.Pop}},_):_}function pS(){let t=MS(),e=aS(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,r={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return P.createElement(P.Fragment,null,P.createElement("h2",null,"Unexpected Application Error!"),P.createElement("h3",{style:{fontStyle:"italic"}},e),n?P.createElement("pre",{style:r},n):null,null)}const mS=P.createElement(pS,null);class gS extends P.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?P.createElement(zi.Provider,{value:this.props.routeContext},P.createElement(Jv.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function xS(t){let{routeContext:e,match:n,children:i}=t,r=P.useContext(Bc);return r&&r.static&&r.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=n.route.id),P.createElement(zi.Provider,{value:e},i)}function vS(t,e,n,i){var r;if(e===void 0&&(e=[]),n===void 0&&(n=null),i===void 0&&(i=null),t==null){var s;if(!n)return null;if(n.errors)t=n.matches;else if((s=i)!=null&&s.v7_partialHydration&&e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let o=t,l=(r=n)==null?void 0:r.errors;if(l!=null){let f=o.findIndex(h=>h.route.id&&(l==null?void 0:l[h.route.id])!==void 0);f>=0||ht(!1),o=o.slice(0,Math.min(o.length,f+1))}let c=!1,u=-1;if(n&&i&&i.v7_partialHydration)for(let f=0;f<o.length;f++){let h=o[f];if((h.route.HydrateFallback||h.route.hydrateFallbackElement)&&(u=f),h.route.id){let{loaderData:p,errors:g}=n,y=h.route.loader&&p[h.route.id]===void 0&&(!g||g[h.route.id]===void 0);if(h.route.lazy||y){c=!0,u>=0?o=o.slice(0,u+1):o=[o[0]];break}}}return o.reduceRight((f,h,p)=>{let g,y=!1,_=null,m=null;n&&(g=l&&h.route.id?l[h.route.id]:void 0,_=h.route.errorElement||mS,c&&(u<0&&p===0?(wS("route-fallback"),y=!0,m=null):u===p&&(y=!0,m=h.route.hydrateFallbackElement||null)));let d=e.concat(o.slice(0,p+1)),x=()=>{let v;return g?v=_:y?v=m:h.route.Component?v=P.createElement(h.route.Component,null):h.route.element?v=h.route.element:v=f,P.createElement(xS,{match:h,routeContext:{outlet:f,matches:d,isDataRoute:n!=null},children:v})};return n&&(h.route.ErrorBoundary||h.route.errorElement||p===0)?P.createElement(gS,{location:n.location,revalidation:n.revalidation,component:_,error:g,children:x(),routeContext:{outlet:null,matches:d,isDataRoute:!0}}):x()},null)}var t0=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(t0||{}),n0=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(n0||{});function yS(t){let e=P.useContext(Bc);return e||ht(!1),e}function _S(t){let e=P.useContext(Zv);return e||ht(!1),e}function SS(t){let e=P.useContext(zi);return e||ht(!1),e}function i0(t){let e=SS(),n=e.matches[e.matches.length-1];return n.route.id||ht(!1),n.route.id}function MS(){var t;let e=P.useContext(Jv),n=_S(),i=i0();return e!==void 0?e:(t=n.errors)==null?void 0:t[i]}function ES(){let{router:t}=yS(t0.UseNavigateStable),e=i0(n0.UseNavigateStable),n=P.useRef(!1);return e0(()=>{n.current=!0}),P.useCallback(function(r,s){s===void 0&&(s={}),n.current&&(typeof r=="number"?t.navigate(r):t.navigate(r,go({fromRouteId:e},s)))},[t,e])}const Am={};function wS(t,e,n){Am[t]||(Am[t]=!0)}function bS(t,e){t==null||t.v7_startTransition,t==null||t.v7_relativeSplatPath}function Hs(t){let{to:e,replace:n,state:i,relative:r}=t;ca()||ht(!1);let{future:s,static:o}=P.useContext(ji),{matches:l}=P.useContext(zi),{pathname:c}=fi(),u=hi(),f=kh(e,Uh(l,s.v7_relativeSplatPath),c,r==="path"),h=JSON.stringify(f);return P.useEffect(()=>u(JSON.parse(h),{replace:n,state:i,relative:r}),[u,h,r,n,i]),null}function r0(t){return dS(t.context)}function st(t){ht(!1)}function TS(t){let{basename:e="/",children:n=null,location:i,navigationType:r=tr.Pop,navigator:s,static:o=!1,future:l}=t;ca()&&ht(!1);let c=e.replace(/^\/*/,"/"),u=P.useMemo(()=>({basename:c,navigator:s,static:o,future:go({v7_relativeSplatPath:!1},l)}),[c,l,s,o]);typeof i=="string"&&(i=la(i));let{pathname:f="/",search:h="",hash:p="",state:g=null,key:y="default"}=i,_=P.useMemo(()=>{let m=Js(f,c);return m==null?null:{location:{pathname:m,search:h,hash:p,state:g,key:y},navigationType:r}},[c,f,h,p,g,y,r]);return _==null?null:P.createElement(ji.Provider,{value:u},P.createElement(Hc.Provider,{children:n,value:_}))}function AS(t){let{children:e,location:n}=t;return fS(rf(e),n)}new Promise(()=>{});function rf(t,e){e===void 0&&(e=[]);let n=[];return P.Children.forEach(t,(i,r)=>{if(!P.isValidElement(i))return;let s=[...e,r];if(i.type===P.Fragment){n.push.apply(n,rf(i.props.children,s));return}i.type!==st&&ht(!1),!i.props.index||!i.props.children||ht(!1);let o={id:i.props.id||s.join("-"),caseSensitive:i.props.caseSensitive,element:i.props.element,Component:i.props.Component,index:i.props.index,path:i.props.path,loader:i.props.loader,action:i.props.action,errorElement:i.props.errorElement,ErrorBoundary:i.props.ErrorBoundary,hasErrorBoundary:i.props.ErrorBoundary!=null||i.props.errorElement!=null,shouldRevalidate:i.props.shouldRevalidate,handle:i.props.handle,lazy:i.props.lazy};i.props.children&&(o.children=rf(i.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.30.6
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function dc(){return dc=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)({}).hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},dc.apply(null,arguments)}function s0(t,e){if(t==null)return{};var n={};for(var i in t)if({}.hasOwnProperty.call(t,i)){if(e.indexOf(i)!==-1)continue;n[i]=t[i]}return n}function CS(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function RS(t,e){return t.button===0&&(!e||e==="_self")&&!CS(t)}const PS=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],NS=["aria-current","caseSensitive","className","end","style","to","viewTransition","children"],LS="6";try{window.__reactRouterVersion=LS}catch{}const DS=P.createContext({isTransitioning:!1}),IS="startTransition",Cm=Ty[IS];function US(t){let{basename:e,children:n,future:i,window:r}=t,s=P.useRef();s.current==null&&(s.current=z1({window:r,v5Compat:!0}));let o=s.current,[l,c]=P.useState({action:o.action,location:o.location}),{v7_startTransition:u}=i||{},f=P.useCallback(h=>{u&&Cm?Cm(()=>c(h)):c(h)},[c,u]);return P.useLayoutEffect(()=>o.listen(f),[o,f]),P.useEffect(()=>bS(i),[i]),P.createElement(TS,{basename:e,children:n,location:l.location,navigationType:l.action,navigator:o,future:i})}const kS=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",jS=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,We=P.forwardRef(function(e,n){let{onClick:i,relative:r,reloadDocument:s,replace:o,state:l,target:c,to:u,preventScrollReset:f,viewTransition:h}=e,p=s0(e,PS),{basename:g}=P.useContext(ji),y,_=!1;if(typeof u=="string"&&jS.test(u)&&(y=u,kS))try{let v=new URL(window.location.href),S=u.startsWith("//")?new URL(v.protocol+u):new URL(u),C=Js(S.pathname,g);S.origin===v.origin&&C!=null?u=C+S.search+S.hash:_=!0}catch{}let m=lS(u,{relative:r}),d=OS(u,{replace:o,state:l,target:c,preventScrollReset:f,relative:r,viewTransition:h});function x(v){i&&i(v),v.defaultPrevented||d(v)}return P.createElement("a",dc({},p,{href:y||m,onClick:_||s?i:x,ref:n,target:c}))}),zS=P.forwardRef(function(e,n){let{"aria-current":i="page",caseSensitive:r=!1,className:s="",end:o=!1,style:l,to:c,viewTransition:u,children:f}=e,h=s0(e,NS),p=Vc(c,{relative:h.relative}),g=fi(),y=P.useContext(Zv),{navigator:_,basename:m}=P.useContext(ji),d=y!=null&&BS(p)&&u===!0,x=_.encodeLocation?_.encodeLocation(p).pathname:p.pathname,v=g.pathname,S=y&&y.navigation&&y.navigation.location?y.navigation.location.pathname:null;r||(v=v.toLowerCase(),S=S?S.toLowerCase():null,x=x.toLowerCase()),S&&m&&(S=Js(S,m)||S);const C=x!=="/"&&x.endsWith("/")?x.length-1:x.length;let T=v===x||!o&&v.startsWith(x)&&v.charAt(C)==="/",A=S!=null&&(S===x||!o&&S.startsWith(x)&&S.charAt(x.length)==="/"),N={isActive:T,isPending:A,isTransitioning:d},w=T?i:void 0,M;typeof s=="function"?M=s(N):M=[s,T?"active":null,A?"pending":null,d?"transitioning":null].filter(Boolean).join(" ");let R=typeof l=="function"?l(N):l;return P.createElement(We,dc({},h,{"aria-current":w,className:M,ref:n,style:R,to:c,viewTransition:u}),typeof f=="function"?f(N):f)});var sf;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(sf||(sf={}));var Rm;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(Rm||(Rm={}));function FS(t){let e=P.useContext(Bc);return e||ht(!1),e}function OS(t,e){let{target:n,replace:i,state:r,preventScrollReset:s,relative:o,viewTransition:l}=e===void 0?{}:e,c=hi(),u=fi(),f=Vc(t,{relative:o});return P.useCallback(h=>{if(RS(h,n)){h.preventDefault();let p=i!==void 0?i:uc(u)===uc(f);c(t,{replace:p,state:r,preventScrollReset:s,relative:o,viewTransition:l})}},[u,c,f,i,r,n,t,s,o,l])}function BS(t,e){e===void 0&&(e={});let n=P.useContext(DS);n==null&&ht(!1);let{basename:i}=FS(sf.useViewTransitionState),r=Vc(t,{relative:e.relative});if(!n.isTransitioning)return!1;let s=Js(n.currentLocation.pathname,i)||n.currentLocation.pathname,o=Js(n.nextLocation.pathname,i)||n.nextLocation.pathname;return nf(r.pathname,o)!=null||nf(r.pathname,s)!=null}const HS="/api";async function Qo(t,e={}){const n=`${HS}${t}`,r={...e.body instanceof FormData?{}:{"Content-Type":"application/json"},...e.headers||{}},s=await fetch(n,{...e,headers:r,credentials:"include"}),o=await s.json().catch(()=>({}));if(!s.ok){const l=new Error(o.message||"An error occurred during request.");throw l.status=s.status,l.data=o,l}return o}const nt={get:(t,e={})=>{const n=new URLSearchParams;Object.entries(e).forEach(([r,s])=>{s!=null&&s!==""&&n.append(r,s)});const i=n.toString();return Qo(`${t}${i?`?${i}`:""}`,{method:"GET"})},post:(t,e)=>Qo(t,{method:"POST",body:e instanceof FormData?e:JSON.stringify(e)}),put:(t,e)=>Qo(t,{method:"PUT",body:e instanceof FormData?e:JSON.stringify(e)}),delete:t=>Qo(t,{method:"DELETE"})},Aa={register:t=>nt.post("/auth/register",t),login:t=>nt.post("/auth/login",t),logout:()=>nt.post("/auth/logout"),getMe:()=>nt.get("/auth/me"),changePassword:t=>nt.post("/auth/change-password",t)};/**
 * @license lucide-react v0.436.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const VS=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),a0=(...t)=>t.filter((e,n,i)=>!!e&&i.indexOf(e)===n).join(" ");/**
 * @license lucide-react v0.436.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var WS={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.436.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const GS=P.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:n=2,absoluteStrokeWidth:i,className:r="",children:s,iconNode:o,...l},c)=>P.createElement("svg",{ref:c,...WS,width:e,height:e,stroke:t,strokeWidth:i?Number(n)*24/Number(e):n,className:a0("lucide",r),...l},[...o.map(([u,f])=>P.createElement(u,f)),...Array.isArray(s)?s:[s]]));/**
 * @license lucide-react v0.436.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pe=(t,e)=>{const n=P.forwardRef(({className:i,...r},s)=>P.createElement(GS,{ref:s,iconNode:e,className:a0(`lucide-${VS(t)}`,i),...r}));return n.displayName=`${t}`,n};/**
 * @license lucide-react v0.436.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jh=pe("Activity",[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]]);/**
 * @license lucide-react v0.436.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const XS=pe("Archive",[["rect",{width:"20",height:"5",x:"2",y:"3",rx:"1",key:"1wp1u1"}],["path",{d:"M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8",key:"1s80jp"}],["path",{d:"M10 12h4",key:"a56b0p"}]]);/**
 * @license lucide-react v0.436.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fi=pe("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.436.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const si=pe("Bell",[["path",{d:"M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9",key:"1qo2s2"}],["path",{d:"M10.3 21a1.94 1.94 0 0 0 3.4 0",key:"qgo35s"}]]);/**
 * @license lucide-react v0.436.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qS=pe("BookOpen",[["path",{d:"M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z",key:"vv98re"}],["path",{d:"M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z",key:"1cyq3y"}]]);/**
 * @license lucide-react v0.436.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zh=pe("Building2",[["path",{d:"M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z",key:"1b4qmf"}],["path",{d:"M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2",key:"i71pzd"}],["path",{d:"M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2",key:"10jefs"}],["path",{d:"M10 6h4",key:"1itunk"}],["path",{d:"M10 10h4",key:"tcdvrf"}],["path",{d:"M10 14h4",key:"kelpxr"}],["path",{d:"M10 18h4",key:"1ulq68"}]]);/**
 * @license lucide-react v0.436.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $S=pe("Building",[["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",ry:"2",key:"76otgf"}],["path",{d:"M9 22v-4h6v4",key:"r93iot"}],["path",{d:"M8 6h.01",key:"1dz90k"}],["path",{d:"M16 6h.01",key:"1x0f13"}],["path",{d:"M12 6h.01",key:"1vi96p"}],["path",{d:"M12 10h.01",key:"1nrarc"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M16 10h.01",key:"1m94wz"}],["path",{d:"M16 14h.01",key:"1gbofw"}],["path",{d:"M8 10h.01",key:"19clt8"}],["path",{d:"M8 14h.01",key:"6423bh"}]]);/**
 * @license lucide-react v0.436.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fc=pe("CalendarCheck",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}],["path",{d:"m9 16 2 2 4-4",key:"19s6y9"}]]);/**
 * @license lucide-react v0.436.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sn=pe("Calendar",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]]);/**
 * @license lucide-react v0.436.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fh=pe("CheckCheck",[["path",{d:"M18 6 7 17l-5-5",key:"116fxf"}],["path",{d:"m22 10-7.5 7.5L13 16",key:"ke71qq"}]]);/**
 * @license lucide-react v0.436.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const YS=pe("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.436.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const KS=pe("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);/**
 * @license lucide-react v0.436.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oh=pe("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.436.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wc=pe("CircleAlert",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);/**
 * @license lucide-react v0.436.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bh=pe("CircleCheckBig",[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);/**
 * @license lucide-react v0.436.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rn=pe("CircleCheck",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.436.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hc=pe("CircleHelp",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.436.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const li=pe("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.436.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const QS=pe("Coffee",[["path",{d:"M10 2v2",key:"7u0qdc"}],["path",{d:"M14 2v2",key:"6buw04"}],["path",{d:"M16 8a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h14a4 4 0 1 1 0 8h-1",key:"pwadti"}],["path",{d:"M6 2v2",key:"colzsn"}]]);/**
 * @license lucide-react v0.436.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ZS=pe("Compass",[["path",{d:"m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z",key:"9ktpf1"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]);/**
 * @license lucide-react v0.436.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const JS=pe("Cpu",[["rect",{width:"16",height:"16",x:"4",y:"4",rx:"2",key:"14l7u7"}],["rect",{width:"6",height:"6",x:"9",y:"9",rx:"1",key:"5aljv4"}],["path",{d:"M15 2v2",key:"13l42r"}],["path",{d:"M15 20v2",key:"15mkzm"}],["path",{d:"M2 15h2",key:"1gxd5l"}],["path",{d:"M2 9h2",key:"1bbxkp"}],["path",{d:"M20 15h2",key:"19e6y8"}],["path",{d:"M20 9h2",key:"19tzq7"}],["path",{d:"M9 2v2",key:"165o2o"}],["path",{d:"M9 20v2",key:"i2bqo8"}]]);/**
 * @license lucide-react v0.436.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o0=pe("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]);/**
 * @license lucide-react v0.436.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eM=pe("ExternalLink",[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]]);/**
 * @license lucide-react v0.436.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gr=pe("EyeOff",[["path",{d:"M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",key:"ct8e1f"}],["path",{d:"M14.084 14.158a3 3 0 0 1-4.242-4.242",key:"151rxh"}],["path",{d:"M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",key:"13bj9a"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]]);/**
 * @license lucide-react v0.436.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ci=pe("Eye",[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.436.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hh=pe("FileText",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]);/**
 * @license lucide-react v0.436.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tM=pe("Filter",[["polygon",{points:"22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3",key:"1yg77f"}]]);/**
 * @license lucide-react v0.436.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ln=pe("Flame",[["path",{d:"M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z",key:"96xj49"}]]);/**
 * @license lucide-react v0.436.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ua=pe("GraduationCap",[["path",{d:"M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",key:"j76jl0"}],["path",{d:"M22 10v6",key:"1lu8f3"}],["path",{d:"M6 12.5V16a6 3 0 0 0 12 0v-3.5",key:"1r8lef"}]]);/**
 * @license lucide-react v0.436.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nM=pe("Hash",[["line",{x1:"4",x2:"20",y1:"9",y2:"9",key:"4lhtct"}],["line",{x1:"4",x2:"20",y1:"15",y2:"15",key:"vyu0kd"}],["line",{x1:"10",x2:"8",y1:"3",y2:"21",key:"1ggp8o"}],["line",{x1:"16",x2:"14",y1:"3",y2:"21",key:"weycgp"}]]);/**
 * @license lucide-react v0.436.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iM=pe("House",[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"1d0kgt"}]]);/**
 * @license lucide-react v0.436.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rM=pe("Inbox",[["polyline",{points:"22 12 16 12 14 15 10 15 8 12 2 12",key:"o97t9d"}],["path",{d:"M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z",key:"oot6mr"}]]);/**
 * @license lucide-react v0.436.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sM=pe("Info",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]]);/**
 * @license lucide-react v0.436.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l0=pe("KeyRound",[["path",{d:"M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z",key:"1s6t7t"}],["circle",{cx:"16.5",cy:"7.5",r:".5",fill:"currentColor",key:"w0ekpg"}]]);/**
 * @license lucide-react v0.436.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aM=pe("LayoutDashboard",[["rect",{width:"7",height:"9",x:"3",y:"3",rx:"1",key:"10lvy0"}],["rect",{width:"7",height:"5",x:"14",y:"3",rx:"1",key:"16une8"}],["rect",{width:"7",height:"9",x:"14",y:"12",rx:"1",key:"1hutg5"}],["rect",{width:"7",height:"5",x:"3",y:"16",rx:"1",key:"ldoo1y"}]]);/**
 * @license lucide-react v0.436.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oM=pe("Library",[["path",{d:"m16 6 4 14",key:"ji33uf"}],["path",{d:"M12 6v14",key:"1n7gus"}],["path",{d:"M8 8v12",key:"1gg7y9"}],["path",{d:"M4 4v16",key:"6qkkli"}]]);/**
 * @license lucide-react v0.436.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lM=pe("List",[["line",{x1:"8",x2:"21",y1:"6",y2:"6",key:"7ey8pc"}],["line",{x1:"8",x2:"21",y1:"12",y2:"12",key:"rjfblc"}],["line",{x1:"8",x2:"21",y1:"18",y2:"18",key:"c3b1m8"}],["line",{x1:"3",x2:"3.01",y1:"6",y2:"6",key:"1g7gq3"}],["line",{x1:"3",x2:"3.01",y1:"12",y2:"12",key:"1pjlvk"}],["line",{x1:"3",x2:"3.01",y1:"18",y2:"18",key:"28t2mc"}]]);/**
 * @license lucide-react v0.436.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cM=pe("LoaderCircle",[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]]);/**
 * @license lucide-react v0.436.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ai=pe("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);/**
 * @license lucide-react v0.436.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c0=pe("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]);/**
 * @license lucide-react v0.436.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const da=pe("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-react v0.436.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fa=pe("MapPin",[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);/**
 * @license lucide-react v0.436.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kr=pe("Megaphone",[["path",{d:"m3 11 18-5v12L3 14v-3z",key:"n962bs"}],["path",{d:"M11.6 16.8a3 3 0 1 1-5.8-1.6",key:"1yl0tm"}]]);/**
 * @license lucide-react v0.436.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uM=pe("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.436.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ui=pe("MessageSquare",[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}]]);/**
 * @license lucide-react v0.436.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u0=pe("Moon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]]);/**
 * @license lucide-react v0.436.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d0=pe("Pen",[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}]]);/**
 * @license lucide-react v0.436.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vh=pe("Phone",[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]]);/**
 * @license lucide-react v0.436.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qr=pe("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.436.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ha=pe("RefreshCw",[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]]);/**
 * @license lucide-react v0.436.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dM=pe("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.436.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wo=pe("Send",[["path",{d:"m22 2-7 20-4-9-9-4Z",key:"1q3vgg"}],["path",{d:"M22 2 11 13",key:"nzbqef"}]]);/**
 * @license lucide-react v0.436.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fM=pe("Server",[["rect",{width:"20",height:"8",x:"2",y:"2",rx:"2",ry:"2",key:"ngkwjq"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",ry:"2",key:"iecqi9"}],["line",{x1:"6",x2:"6.01",y1:"6",y2:"6",key:"16zg32"}],["line",{x1:"6",x2:"6.01",y1:"18",y2:"18",key:"nzw8ys"}]]);/**
 * @license lucide-react v0.436.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hM=pe("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.436.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f0=pe("Share2",[["circle",{cx:"18",cy:"5",r:"3",key:"gq8acd"}],["circle",{cx:"6",cy:"12",r:"3",key:"w7nqdw"}],["circle",{cx:"18",cy:"19",r:"3",key:"1xt0gg"}],["line",{x1:"8.59",x2:"15.42",y1:"13.51",y2:"17.49",key:"47mynk"}],["line",{x1:"15.41",x2:"8.59",y1:"6.51",y2:"10.49",key:"1n3mei"}]]);/**
 * @license lucide-react v0.436.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pc=pe("ShieldAlert",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"M12 8v4",key:"1got3b"}],["path",{d:"M12 16h.01",key:"1drbdi"}]]);/**
 * @license lucide-react v0.436.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h0=pe("ShieldCheck",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.436.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xo=pe("Shield",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]]);/**
 * @license lucide-react v0.436.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gc=pe("Sparkles",[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]]);/**
 * @license lucide-react v0.436.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p0=pe("Sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]);/**
 * @license lucide-react v0.436.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pM=pe("Target",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]]);/**
 * @license lucide-react v0.436.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wh=pe("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.436.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bo=pe("TriangleAlert",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.436.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const To=pe("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);/**
 * @license lucide-react v0.436.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xc=pe("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);/**
 * @license lucide-react v0.436.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mM=pe("Wifi",[["path",{d:"M12 20h.01",key:"zekei9"}],["path",{d:"M2 8.82a15 15 0 0 1 20 0",key:"dnpr2z"}],["path",{d:"M5 12.859a10 10 0 0 1 14 0",key:"1x1e6c"}],["path",{d:"M8.5 16.429a5 5 0 0 1 7 0",key:"1bycff"}]]);/**
 * @license lucide-react v0.436.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qc=pe("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-react v0.436.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const af=pe("Zap",[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]]),m0=P.createContext(),gM=({children:t})=>{const[e,n]=P.useState([]),i=P.useCallback(s=>{n(o=>o.filter(l=>l.id!==s))},[]),r=P.useCallback((s,o="info",l=4e3)=>{const c=Date.now()+"-"+Math.random().toString(36).substr(2,5),u={id:c,message:s,type:o};n(f=>[...f,u]),l>0&&setTimeout(()=>{i(c)},l)},[i]);return a.jsxs(m0.Provider,{value:{addToast:r,removeToast:i},children:[t,a.jsx("div",{className:"toast-container",style:{position:"fixed",bottom:"24px",right:"24px",display:"flex",flexDirection:"column",gap:"10px",zIndex:9999,maxWidth:"380px",pointerEvents:"none"},children:e.map(s=>a.jsxs("div",{className:"animate-scale-in",style:{pointerEvents:"auto",display:"flex",alignItems:"center",justifyContent:"space-between",gap:"12px",padding:"12px 16px",borderRadius:"var(--radius-md)",background:"var(--bg-secondary)",color:"var(--text-primary)",border:`1px solid ${s.type==="success"?"rgba(16, 185, 129, 0.4)":s.type==="error"?"rgba(239, 68, 68, 0.4)":s.type==="warning"?"rgba(245, 158, 11, 0.4)":"var(--border-highlight)"}`,boxShadow:"var(--shadow-lg)",backdropFilter:"blur(12px)"},children:[a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px"},children:[s.type==="success"&&a.jsx(Rn,{size:18,color:"#10b981"}),s.type==="error"&&a.jsx(Wc,{size:18,color:"#ef4444"}),s.type==="warning"&&a.jsx(bo,{size:18,color:"#f59e0b"}),s.type==="info"&&a.jsx(sM,{size:18,color:"#6366f1"}),a.jsx("span",{style:{fontSize:"0.88rem",fontWeight:500},children:s.message})]}),a.jsx("button",{onClick:()=>i(s.id),style:{background:"transparent",border:"none",color:"var(--text-tertiary)",cursor:"pointer",padding:"2px",display:"flex"},children:a.jsx(qc,{size:16})})]},s.id))})]})},Dn=()=>{const t=P.useContext(m0);if(!t)throw new Error("useToast must be used within a ToastProvider");return t},g0=P.createContext(),xM=({children:t})=>{const[e,n]=P.useState(null),[i,r]=P.useState(!0),{addToast:s}=Dn(),o=async()=>{try{const h=await Aa.getMe();h.success&&h.user?n(h.user):n(null)}catch{n(null)}finally{r(!1)}};P.useEffect(()=>{o()},[]);const l=async({email:h,password:p,requiredRole:g})=>{try{const y=await Aa.login({email:h,password:p,requiredRole:g});return y.success&&y.user?(n(y.user),s(`Welcome back, ${y.user.name}!`,"success"),{success:!0,user:y.user}):{success:!1,message:y.message||"Login failed"}}catch(y){const _=y.message||"Invalid email or password.";return s(_,"error"),{success:!1,message:_}}},c=async h=>{try{const p=await Aa.register(h);return p.success&&p.user?(n(p.user),s("Registration successful! Welcome to NotifyHub.","success"),{success:!0,user:p.user}):{success:!1,message:p.message||"Registration failed"}}catch(p){const g=p.message||"Registration failed. Please check your inputs.";return s(g,"error"),{success:!1,message:g}}},u=async()=>{try{await Aa.logout(),n(null),s("You have been logged out safely.","info")}catch{n(null)}},f=async({currentPassword:h,newPassword:p,confirmNewPassword:g})=>{try{const y=await Aa.changePassword({currentPassword:h,newPassword:p,confirmNewPassword:g});return y.success?(s("Password updated successfully!","success"),{success:!0}):{success:!1,message:y.message}}catch(y){const _=y.message||"Failed to update password.";return s(_,"error"),{success:!1,message:_}}};return a.jsx(g0.Provider,{value:{user:e,loading:i,isAuthenticated:!!e,role:e==null?void 0:e.role,isAdmin:(e==null?void 0:e.role)==="ADMIN",isStudent:(e==null?void 0:e.role)==="STUDENT",login:l,register:c,logout:u,refreshUser:o,changePassword:f},children:t})},pi=()=>{const t=P.useContext(g0);if(!t)throw new Error("useAuth must be used within an AuthProvider");return t},x0=P.createContext(),vM=({children:t})=>{const[e,n]=P.useState(()=>{const r=localStorage.getItem("notifyhub_theme");return r||(window.matchMedia&&window.matchMedia("(prefers-color-scheme: light)").matches?"light":"dark")});P.useEffect(()=>{document.documentElement.setAttribute("data-theme",e),localStorage.setItem("notifyhub_theme",e)},[e]);const i=()=>{n(r=>r==="dark"?"light":"dark")};return a.jsx(x0.Provider,{value:{theme:e,toggleTheme:i,setTheme:n},children:t})},v0=()=>{const t=P.useContext(x0);if(!t)throw new Error("useTheme must be used within a ThemeProvider");return t},_n=({text:t="Loading data...",size:e=32})=>a.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:"48px 24px",gap:"14px",color:"var(--text-secondary)"},children:[a.jsx(cM,{size:e,className:"animate-spin",color:"var(--accent-primary)"}),a.jsx("span",{style:{fontSize:"0.9rem",fontWeight:500},children:t})]}),Pm=({children:t,allowedRoles:e=[]})=>{const{user:n,loading:i,isAuthenticated:r}=pi(),s=fi();if(i)return a.jsx("div",{style:{minHeight:"100vh",display:"flex",alignItems:"center",justifyContent:"center"},children:a.jsx(_n,{text:"Authenticating session..."})});if(!r){const o=s.pathname.startsWith("/admin");return a.jsx(Hs,{to:o?"/admin/login":"/student/login",state:{from:s},replace:!0})}if(e.length>0&&!e.includes(n==null?void 0:n.role)){if((n==null?void 0:n.role)==="STUDENT")return a.jsx(Hs,{to:"/student/home",replace:!0});if((n==null?void 0:n.role)==="ADMIN")return a.jsx(Hs,{to:"/admin/overview",replace:!0})}return t};/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Gh="168",yM=0,Nm=1,_M=2,y0=1,SM=2,Mi=3,xr=0,an=1,bi=2,dr=0,Vs=1,Lm=2,Dm=3,Im=4,MM=5,Ir=100,EM=101,wM=102,bM=103,TM=104,AM=200,CM=201,RM=202,PM=203,of=204,lf=205,NM=206,LM=207,DM=208,IM=209,UM=210,kM=211,jM=212,zM=213,FM=214,OM=0,BM=1,HM=2,mc=3,VM=4,WM=5,GM=6,XM=7,_0=0,qM=1,$M=2,fr=0,YM=1,KM=2,QM=3,ZM=4,JM=5,eE=6,tE=7,S0=300,ea=301,ta=302,cf=303,uf=304,$c=306,df=1e3,Fr=1001,ff=1002,Tn=1003,nE=1004,Zo=1005,Vn=1006,Nu=1007,Or=1008,Ui=1009,M0=1010,E0=1011,vo=1012,Xh=1013,Zr=1014,Ci=1015,Ao=1016,qh=1017,$h=1018,na=1020,w0=35902,b0=1021,T0=1022,Wn=1023,A0=1024,C0=1025,Ws=1026,ia=1027,R0=1028,Yh=1029,P0=1030,Kh=1031,Qh=1033,Il=33776,Ul=33777,kl=33778,jl=33779,hf=35840,pf=35841,mf=35842,gf=35843,xf=36196,vf=37492,yf=37496,_f=37808,Sf=37809,Mf=37810,Ef=37811,wf=37812,bf=37813,Tf=37814,Af=37815,Cf=37816,Rf=37817,Pf=37818,Nf=37819,Lf=37820,Df=37821,zl=36492,If=36494,Uf=36495,N0=36283,kf=36284,jf=36285,zf=36286,iE=3200,rE=3201,L0=0,sE=1,Zi="",Zn="srgb",Mr="srgb-linear",Zh="display-p3",Yc="display-p3-linear",gc="linear",at="srgb",xc="rec709",vc="p3",ss=7680,Um=519,aE=512,oE=513,lE=514,D0=515,cE=516,uE=517,dE=518,fE=519,km=35044,jm="300 es",Ri=2e3,yc=2001;class pa{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Bt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Lu=Math.PI/180,Ff=180/Math.PI;function Co(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Bt[t&255]+Bt[t>>8&255]+Bt[t>>16&255]+Bt[t>>24&255]+"-"+Bt[e&255]+Bt[e>>8&255]+"-"+Bt[e>>16&15|64]+Bt[e>>24&255]+"-"+Bt[n&63|128]+Bt[n>>8&255]+"-"+Bt[n>>16&255]+Bt[n>>24&255]+Bt[i&255]+Bt[i>>8&255]+Bt[i>>16&255]+Bt[i>>24&255]).toLowerCase()}function Jt(t,e,n){return Math.max(e,Math.min(n,t))}function hE(t,e){return(t%e+e)%e}function Du(t,e,n){return(1-n)*t+n*e}function Ca(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function Qt(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class Fe{constructor(e=0,n=0){Fe.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Jt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class je{constructor(e,n,i,r,s,o,l,c,u){je.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,l,c,u)}set(e,n,i,r,s,o,l,c,u){const f=this.elements;return f[0]=e,f[1]=r,f[2]=l,f[3]=n,f[4]=s,f[5]=c,f[6]=i,f[7]=o,f[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],l=i[3],c=i[6],u=i[1],f=i[4],h=i[7],p=i[2],g=i[5],y=i[8],_=r[0],m=r[3],d=r[6],x=r[1],v=r[4],S=r[7],C=r[2],T=r[5],A=r[8];return s[0]=o*_+l*x+c*C,s[3]=o*m+l*v+c*T,s[6]=o*d+l*S+c*A,s[1]=u*_+f*x+h*C,s[4]=u*m+f*v+h*T,s[7]=u*d+f*S+h*A,s[2]=p*_+g*x+y*C,s[5]=p*m+g*v+y*T,s[8]=p*d+g*S+y*A,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],l=e[5],c=e[6],u=e[7],f=e[8];return n*o*f-n*l*u-i*s*f+i*l*c+r*s*u-r*o*c}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],l=e[5],c=e[6],u=e[7],f=e[8],h=f*o-l*u,p=l*c-f*s,g=u*s-o*c,y=n*h+i*p+r*g;if(y===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/y;return e[0]=h*_,e[1]=(r*u-f*i)*_,e[2]=(l*i-r*o)*_,e[3]=p*_,e[4]=(f*n-r*c)*_,e[5]=(r*s-l*n)*_,e[6]=g*_,e[7]=(i*c-u*n)*_,e[8]=(o*n-i*s)*_,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,l){const c=Math.cos(s),u=Math.sin(s);return this.set(i*c,i*u,-i*(c*o+u*l)+o+e,-r*u,r*c,-r*(-u*o+c*l)+l+n,0,0,1),this}scale(e,n){return this.premultiply(Iu.makeScale(e,n)),this}rotate(e){return this.premultiply(Iu.makeRotation(-e)),this}translate(e,n){return this.premultiply(Iu.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Iu=new je;function I0(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function _c(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function pE(){const t=_c("canvas");return t.style.display="block",t}const zm={};function Ka(t){t in zm||(zm[t]=!0,console.warn(t))}function mE(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}const Fm=new je().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Om=new je().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Ra={[Mr]:{transfer:gc,primaries:xc,luminanceCoefficients:[.2126,.7152,.0722],toReference:t=>t,fromReference:t=>t},[Zn]:{transfer:at,primaries:xc,luminanceCoefficients:[.2126,.7152,.0722],toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[Yc]:{transfer:gc,primaries:vc,luminanceCoefficients:[.2289,.6917,.0793],toReference:t=>t.applyMatrix3(Om),fromReference:t=>t.applyMatrix3(Fm)},[Zh]:{transfer:at,primaries:vc,luminanceCoefficients:[.2289,.6917,.0793],toReference:t=>t.convertSRGBToLinear().applyMatrix3(Om),fromReference:t=>t.applyMatrix3(Fm).convertLinearToSRGB()}},gE=new Set([Mr,Yc]),Ze={enabled:!0,_workingColorSpace:Mr,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!gE.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=Ra[e].toReference,r=Ra[n].fromReference;return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return Ra[t].primaries},getTransfer:function(t){return t===Zi?gc:Ra[t].transfer},getLuminanceCoefficients:function(t,e=this._workingColorSpace){return t.fromArray(Ra[e].luminanceCoefficients)}};function Gs(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Uu(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let as;class xE{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{as===void 0&&(as=_c("canvas")),as.width=e.width,as.height=e.height;const i=as.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=as}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=_c("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Gs(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Gs(n[i]/255)*255):n[i]=Gs(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let vE=0;class U0{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:vE++}),this.uuid=Co(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,l=r.length;o<l;o++)r[o].isDataTexture?s.push(ku(r[o].image)):s.push(ku(r[o]))}else s=ku(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function ku(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?xE.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let yE=0;class on extends pa{constructor(e=on.DEFAULT_IMAGE,n=on.DEFAULT_MAPPING,i=Fr,r=Fr,s=Vn,o=Or,l=Wn,c=Ui,u=on.DEFAULT_ANISOTROPY,f=Zi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:yE++}),this.uuid=Co(),this.name="",this.source=new U0(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=u,this.format=l,this.internalFormat=null,this.type=c,this.offset=new Fe(0,0),this.repeat=new Fe(1,1),this.center=new Fe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new je,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=f,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==S0)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case df:e.x=e.x-Math.floor(e.x);break;case Fr:e.x=e.x<0?0:1;break;case ff:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case df:e.y=e.y-Math.floor(e.y);break;case Fr:e.y=e.y<0?0:1;break;case ff:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}on.DEFAULT_IMAGE=null;on.DEFAULT_MAPPING=S0;on.DEFAULT_ANISOTROPY=1;class ot{constructor(e=0,n=0,i=0,r=1){ot.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const c=e.elements,u=c[0],f=c[4],h=c[8],p=c[1],g=c[5],y=c[9],_=c[2],m=c[6],d=c[10];if(Math.abs(f-p)<.01&&Math.abs(h-_)<.01&&Math.abs(y-m)<.01){if(Math.abs(f+p)<.1&&Math.abs(h+_)<.1&&Math.abs(y+m)<.1&&Math.abs(u+g+d-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const v=(u+1)/2,S=(g+1)/2,C=(d+1)/2,T=(f+p)/4,A=(h+_)/4,N=(y+m)/4;return v>S&&v>C?v<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(v),r=T/i,s=A/i):S>C?S<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),i=T/r,s=N/r):C<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(C),i=A/s,r=N/s),this.set(i,r,s,n),this}let x=Math.sqrt((m-y)*(m-y)+(h-_)*(h-_)+(p-f)*(p-f));return Math.abs(x)<.001&&(x=1),this.x=(m-y)/x,this.y=(h-_)/x,this.z=(p-f)/x,this.w=Math.acos((u+g+d-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class _E extends pa{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new ot(0,0,e,n),this.scissorTest=!1,this.viewport=new ot(0,0,e,n);const r={width:e,height:n,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Vn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new on(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let l=0;l<o;l++)this.textures[l]=s.clone(),this.textures[l].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new U0(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Jr extends _E{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class k0 extends on{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Tn,this.minFilter=Tn,this.wrapR=Fr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class SE extends on{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Tn,this.minFilter=Tn,this.wrapR=Fr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ro{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,l){let c=i[r+0],u=i[r+1],f=i[r+2],h=i[r+3];const p=s[o+0],g=s[o+1],y=s[o+2],_=s[o+3];if(l===0){e[n+0]=c,e[n+1]=u,e[n+2]=f,e[n+3]=h;return}if(l===1){e[n+0]=p,e[n+1]=g,e[n+2]=y,e[n+3]=_;return}if(h!==_||c!==p||u!==g||f!==y){let m=1-l;const d=c*p+u*g+f*y+h*_,x=d>=0?1:-1,v=1-d*d;if(v>Number.EPSILON){const C=Math.sqrt(v),T=Math.atan2(C,d*x);m=Math.sin(m*T)/C,l=Math.sin(l*T)/C}const S=l*x;if(c=c*m+p*S,u=u*m+g*S,f=f*m+y*S,h=h*m+_*S,m===1-l){const C=1/Math.sqrt(c*c+u*u+f*f+h*h);c*=C,u*=C,f*=C,h*=C}}e[n]=c,e[n+1]=u,e[n+2]=f,e[n+3]=h}static multiplyQuaternionsFlat(e,n,i,r,s,o){const l=i[r],c=i[r+1],u=i[r+2],f=i[r+3],h=s[o],p=s[o+1],g=s[o+2],y=s[o+3];return e[n]=l*y+f*h+c*g-u*p,e[n+1]=c*y+f*p+u*h-l*g,e[n+2]=u*y+f*g+l*p-c*h,e[n+3]=f*y-l*h-c*p-u*g,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,o=e._order,l=Math.cos,c=Math.sin,u=l(i/2),f=l(r/2),h=l(s/2),p=c(i/2),g=c(r/2),y=c(s/2);switch(o){case"XYZ":this._x=p*f*h+u*g*y,this._y=u*g*h-p*f*y,this._z=u*f*y+p*g*h,this._w=u*f*h-p*g*y;break;case"YXZ":this._x=p*f*h+u*g*y,this._y=u*g*h-p*f*y,this._z=u*f*y-p*g*h,this._w=u*f*h+p*g*y;break;case"ZXY":this._x=p*f*h-u*g*y,this._y=u*g*h+p*f*y,this._z=u*f*y+p*g*h,this._w=u*f*h-p*g*y;break;case"ZYX":this._x=p*f*h-u*g*y,this._y=u*g*h+p*f*y,this._z=u*f*y-p*g*h,this._w=u*f*h+p*g*y;break;case"YZX":this._x=p*f*h+u*g*y,this._y=u*g*h+p*f*y,this._z=u*f*y-p*g*h,this._w=u*f*h-p*g*y;break;case"XZY":this._x=p*f*h-u*g*y,this._y=u*g*h-p*f*y,this._z=u*f*y+p*g*h,this._w=u*f*h+p*g*y;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],l=n[5],c=n[9],u=n[2],f=n[6],h=n[10],p=i+l+h;if(p>0){const g=.5/Math.sqrt(p+1);this._w=.25/g,this._x=(f-c)*g,this._y=(s-u)*g,this._z=(o-r)*g}else if(i>l&&i>h){const g=2*Math.sqrt(1+i-l-h);this._w=(f-c)/g,this._x=.25*g,this._y=(r+o)/g,this._z=(s+u)/g}else if(l>h){const g=2*Math.sqrt(1+l-i-h);this._w=(s-u)/g,this._x=(r+o)/g,this._y=.25*g,this._z=(c+f)/g}else{const g=2*Math.sqrt(1+h-i-l);this._w=(o-r)/g,this._x=(s+u)/g,this._y=(c+f)/g,this._z=.25*g}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Jt(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,l=n._x,c=n._y,u=n._z,f=n._w;return this._x=i*f+o*l+r*u-s*c,this._y=r*f+o*c+s*l-i*u,this._z=s*f+o*u+i*c-r*l,this._w=o*f-i*l-r*c-s*u,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let l=o*e._w+i*e._x+r*e._y+s*e._z;if(l<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,l=-l):this.copy(e),l>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const c=1-l*l;if(c<=Number.EPSILON){const g=1-n;return this._w=g*o+n*this._w,this._x=g*i+n*this._x,this._y=g*r+n*this._y,this._z=g*s+n*this._z,this.normalize(),this}const u=Math.sqrt(c),f=Math.atan2(u,l),h=Math.sin((1-n)*f)/u,p=Math.sin(n*f)/u;return this._w=o*h+this._w*p,this._x=i*h+this._x*p,this._y=r*h+this._y*p,this._z=s*h+this._z*p,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class z{constructor(e=0,n=0,i=0){z.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Bm.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Bm.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,l=e.z,c=e.w,u=2*(o*r-l*i),f=2*(l*n-s*r),h=2*(s*i-o*n);return this.x=n+c*u+o*h-l*f,this.y=i+c*f+l*u-s*h,this.z=r+c*h+s*f-o*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,l=n.y,c=n.z;return this.x=r*c-s*l,this.y=s*o-i*c,this.z=i*l-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return ju.copy(this).projectOnVector(e),this.sub(ju)}reflect(e){return this.sub(ju.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Jt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ju=new z,Bm=new Ro;class Po{constructor(e=new z(1/0,1/0,1/0),n=new z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(jn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(jn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=jn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,l=s.count;o<l;o++)e.isMesh===!0?e.getVertexPosition(o,jn):jn.fromBufferAttribute(s,o),jn.applyMatrix4(e.matrixWorld),this.expandByPoint(jn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Jo.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Jo.copy(i.boundingBox)),Jo.applyMatrix4(e.matrixWorld),this.union(Jo)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,jn),jn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Pa),el.subVectors(this.max,Pa),os.subVectors(e.a,Pa),ls.subVectors(e.b,Pa),cs.subVectors(e.c,Pa),Hi.subVectors(ls,os),Vi.subVectors(cs,ls),wr.subVectors(os,cs);let n=[0,-Hi.z,Hi.y,0,-Vi.z,Vi.y,0,-wr.z,wr.y,Hi.z,0,-Hi.x,Vi.z,0,-Vi.x,wr.z,0,-wr.x,-Hi.y,Hi.x,0,-Vi.y,Vi.x,0,-wr.y,wr.x,0];return!zu(n,os,ls,cs,el)||(n=[1,0,0,0,1,0,0,0,1],!zu(n,os,ls,cs,el))?!1:(tl.crossVectors(Hi,Vi),n=[tl.x,tl.y,tl.z],zu(n,os,ls,cs,el))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,jn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(jn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(xi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),xi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),xi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),xi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),xi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),xi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),xi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),xi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(xi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const xi=[new z,new z,new z,new z,new z,new z,new z,new z],jn=new z,Jo=new Po,os=new z,ls=new z,cs=new z,Hi=new z,Vi=new z,wr=new z,Pa=new z,el=new z,tl=new z,br=new z;function zu(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){br.fromArray(t,s);const l=r.x*Math.abs(br.x)+r.y*Math.abs(br.y)+r.z*Math.abs(br.z),c=e.dot(br),u=n.dot(br),f=i.dot(br);if(Math.max(-Math.max(c,u,f),Math.min(c,u,f))>l)return!1}return!0}const ME=new Po,Na=new z,Fu=new z;class Kc{constructor(e=new z,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):ME.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Na.subVectors(e,this.center);const n=Na.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(Na,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Fu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Na.copy(e.center).add(Fu)),this.expandByPoint(Na.copy(e.center).sub(Fu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const vi=new z,Ou=new z,nl=new z,Wi=new z,Bu=new z,il=new z,Hu=new z;class j0{constructor(e=new z,n=new z(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,vi)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=vi.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(vi.copy(this.origin).addScaledVector(this.direction,n),vi.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){Ou.copy(e).add(n).multiplyScalar(.5),nl.copy(n).sub(e).normalize(),Wi.copy(this.origin).sub(Ou);const s=e.distanceTo(n)*.5,o=-this.direction.dot(nl),l=Wi.dot(this.direction),c=-Wi.dot(nl),u=Wi.lengthSq(),f=Math.abs(1-o*o);let h,p,g,y;if(f>0)if(h=o*c-l,p=o*l-c,y=s*f,h>=0)if(p>=-y)if(p<=y){const _=1/f;h*=_,p*=_,g=h*(h+o*p+2*l)+p*(o*h+p+2*c)+u}else p=s,h=Math.max(0,-(o*p+l)),g=-h*h+p*(p+2*c)+u;else p=-s,h=Math.max(0,-(o*p+l)),g=-h*h+p*(p+2*c)+u;else p<=-y?(h=Math.max(0,-(-o*s+l)),p=h>0?-s:Math.min(Math.max(-s,-c),s),g=-h*h+p*(p+2*c)+u):p<=y?(h=0,p=Math.min(Math.max(-s,-c),s),g=p*(p+2*c)+u):(h=Math.max(0,-(o*s+l)),p=h>0?s:Math.min(Math.max(-s,-c),s),g=-h*h+p*(p+2*c)+u);else p=o>0?-s:s,h=Math.max(0,-(o*p+l)),g=-h*h+p*(p+2*c)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(Ou).addScaledVector(nl,p),g}intersectSphere(e,n){vi.subVectors(e.center,this.origin);const i=vi.dot(this.direction),r=vi.dot(vi)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),l=i-o,c=i+o;return c<0?null:l<0?this.at(c,n):this.at(l,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,l,c;const u=1/this.direction.x,f=1/this.direction.y,h=1/this.direction.z,p=this.origin;return u>=0?(i=(e.min.x-p.x)*u,r=(e.max.x-p.x)*u):(i=(e.max.x-p.x)*u,r=(e.min.x-p.x)*u),f>=0?(s=(e.min.y-p.y)*f,o=(e.max.y-p.y)*f):(s=(e.max.y-p.y)*f,o=(e.min.y-p.y)*f),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),h>=0?(l=(e.min.z-p.z)*h,c=(e.max.z-p.z)*h):(l=(e.max.z-p.z)*h,c=(e.min.z-p.z)*h),i>c||l>r)||((l>i||i!==i)&&(i=l),(c<r||r!==r)&&(r=c),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,vi)!==null}intersectTriangle(e,n,i,r,s){Bu.subVectors(n,e),il.subVectors(i,e),Hu.crossVectors(Bu,il);let o=this.direction.dot(Hu),l;if(o>0){if(r)return null;l=1}else if(o<0)l=-1,o=-o;else return null;Wi.subVectors(this.origin,e);const c=l*this.direction.dot(il.crossVectors(Wi,il));if(c<0)return null;const u=l*this.direction.dot(Bu.cross(Wi));if(u<0||c+u>o)return null;const f=-l*Wi.dot(Hu);return f<0?null:this.at(f/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class pt{constructor(e,n,i,r,s,o,l,c,u,f,h,p,g,y,_,m){pt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,l,c,u,f,h,p,g,y,_,m)}set(e,n,i,r,s,o,l,c,u,f,h,p,g,y,_,m){const d=this.elements;return d[0]=e,d[4]=n,d[8]=i,d[12]=r,d[1]=s,d[5]=o,d[9]=l,d[13]=c,d[2]=u,d[6]=f,d[10]=h,d[14]=p,d[3]=g,d[7]=y,d[11]=_,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new pt().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/us.setFromMatrixColumn(e,0).length(),s=1/us.setFromMatrixColumn(e,1).length(),o=1/us.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),l=Math.sin(i),c=Math.cos(r),u=Math.sin(r),f=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const p=o*f,g=o*h,y=l*f,_=l*h;n[0]=c*f,n[4]=-c*h,n[8]=u,n[1]=g+y*u,n[5]=p-_*u,n[9]=-l*c,n[2]=_-p*u,n[6]=y+g*u,n[10]=o*c}else if(e.order==="YXZ"){const p=c*f,g=c*h,y=u*f,_=u*h;n[0]=p+_*l,n[4]=y*l-g,n[8]=o*u,n[1]=o*h,n[5]=o*f,n[9]=-l,n[2]=g*l-y,n[6]=_+p*l,n[10]=o*c}else if(e.order==="ZXY"){const p=c*f,g=c*h,y=u*f,_=u*h;n[0]=p-_*l,n[4]=-o*h,n[8]=y+g*l,n[1]=g+y*l,n[5]=o*f,n[9]=_-p*l,n[2]=-o*u,n[6]=l,n[10]=o*c}else if(e.order==="ZYX"){const p=o*f,g=o*h,y=l*f,_=l*h;n[0]=c*f,n[4]=y*u-g,n[8]=p*u+_,n[1]=c*h,n[5]=_*u+p,n[9]=g*u-y,n[2]=-u,n[6]=l*c,n[10]=o*c}else if(e.order==="YZX"){const p=o*c,g=o*u,y=l*c,_=l*u;n[0]=c*f,n[4]=_-p*h,n[8]=y*h+g,n[1]=h,n[5]=o*f,n[9]=-l*f,n[2]=-u*f,n[6]=g*h+y,n[10]=p-_*h}else if(e.order==="XZY"){const p=o*c,g=o*u,y=l*c,_=l*u;n[0]=c*f,n[4]=-h,n[8]=u*f,n[1]=p*h+_,n[5]=o*f,n[9]=g*h-y,n[2]=y*h-g,n[6]=l*f,n[10]=_*h+p}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(EE,e,wE)}lookAt(e,n,i){const r=this.elements;return dn.subVectors(e,n),dn.lengthSq()===0&&(dn.z=1),dn.normalize(),Gi.crossVectors(i,dn),Gi.lengthSq()===0&&(Math.abs(i.z)===1?dn.x+=1e-4:dn.z+=1e-4,dn.normalize(),Gi.crossVectors(i,dn)),Gi.normalize(),rl.crossVectors(dn,Gi),r[0]=Gi.x,r[4]=rl.x,r[8]=dn.x,r[1]=Gi.y,r[5]=rl.y,r[9]=dn.y,r[2]=Gi.z,r[6]=rl.z,r[10]=dn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],l=i[4],c=i[8],u=i[12],f=i[1],h=i[5],p=i[9],g=i[13],y=i[2],_=i[6],m=i[10],d=i[14],x=i[3],v=i[7],S=i[11],C=i[15],T=r[0],A=r[4],N=r[8],w=r[12],M=r[1],R=r[5],G=r[9],O=r[13],q=r[2],$=r[6],D=r[10],V=r[14],U=r[3],Y=r[7],Z=r[11],oe=r[15];return s[0]=o*T+l*M+c*q+u*U,s[4]=o*A+l*R+c*$+u*Y,s[8]=o*N+l*G+c*D+u*Z,s[12]=o*w+l*O+c*V+u*oe,s[1]=f*T+h*M+p*q+g*U,s[5]=f*A+h*R+p*$+g*Y,s[9]=f*N+h*G+p*D+g*Z,s[13]=f*w+h*O+p*V+g*oe,s[2]=y*T+_*M+m*q+d*U,s[6]=y*A+_*R+m*$+d*Y,s[10]=y*N+_*G+m*D+d*Z,s[14]=y*w+_*O+m*V+d*oe,s[3]=x*T+v*M+S*q+C*U,s[7]=x*A+v*R+S*$+C*Y,s[11]=x*N+v*G+S*D+C*Z,s[15]=x*w+v*O+S*V+C*oe,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],l=e[5],c=e[9],u=e[13],f=e[2],h=e[6],p=e[10],g=e[14],y=e[3],_=e[7],m=e[11],d=e[15];return y*(+s*c*h-r*u*h-s*l*p+i*u*p+r*l*g-i*c*g)+_*(+n*c*g-n*u*p+s*o*p-r*o*g+r*u*f-s*c*f)+m*(+n*u*h-n*l*g-s*o*h+i*o*g+s*l*f-i*u*f)+d*(-r*l*f-n*c*h+n*l*p+r*o*h-i*o*p+i*c*f)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],l=e[5],c=e[6],u=e[7],f=e[8],h=e[9],p=e[10],g=e[11],y=e[12],_=e[13],m=e[14],d=e[15],x=h*m*u-_*p*u+_*c*g-l*m*g-h*c*d+l*p*d,v=y*p*u-f*m*u-y*c*g+o*m*g+f*c*d-o*p*d,S=f*_*u-y*h*u+y*l*g-o*_*g-f*l*d+o*h*d,C=y*h*c-f*_*c-y*l*p+o*_*p+f*l*m-o*h*m,T=n*x+i*v+r*S+s*C;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/T;return e[0]=x*A,e[1]=(_*p*s-h*m*s-_*r*g+i*m*g+h*r*d-i*p*d)*A,e[2]=(l*m*s-_*c*s+_*r*u-i*m*u-l*r*d+i*c*d)*A,e[3]=(h*c*s-l*p*s-h*r*u+i*p*u+l*r*g-i*c*g)*A,e[4]=v*A,e[5]=(f*m*s-y*p*s+y*r*g-n*m*g-f*r*d+n*p*d)*A,e[6]=(y*c*s-o*m*s-y*r*u+n*m*u+o*r*d-n*c*d)*A,e[7]=(o*p*s-f*c*s+f*r*u-n*p*u-o*r*g+n*c*g)*A,e[8]=S*A,e[9]=(y*h*s-f*_*s-y*i*g+n*_*g+f*i*d-n*h*d)*A,e[10]=(o*_*s-y*l*s+y*i*u-n*_*u-o*i*d+n*l*d)*A,e[11]=(f*l*s-o*h*s-f*i*u+n*h*u+o*i*g-n*l*g)*A,e[12]=C*A,e[13]=(f*_*r-y*h*r+y*i*p-n*_*p-f*i*m+n*h*m)*A,e[14]=(y*l*r-o*_*r-y*i*c+n*_*c+o*i*m-n*l*m)*A,e[15]=(o*h*r-f*l*r+f*i*c-n*h*c-o*i*p+n*l*p)*A,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,l=e.y,c=e.z,u=s*o,f=s*l;return this.set(u*o+i,u*l-r*c,u*c+r*l,0,u*l+r*c,f*l+i,f*c-r*o,0,u*c-r*l,f*c+r*o,s*c*c+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,l=n._z,c=n._w,u=s+s,f=o+o,h=l+l,p=s*u,g=s*f,y=s*h,_=o*f,m=o*h,d=l*h,x=c*u,v=c*f,S=c*h,C=i.x,T=i.y,A=i.z;return r[0]=(1-(_+d))*C,r[1]=(g+S)*C,r[2]=(y-v)*C,r[3]=0,r[4]=(g-S)*T,r[5]=(1-(p+d))*T,r[6]=(m+x)*T,r[7]=0,r[8]=(y+v)*A,r[9]=(m-x)*A,r[10]=(1-(p+_))*A,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=us.set(r[0],r[1],r[2]).length();const o=us.set(r[4],r[5],r[6]).length(),l=us.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],zn.copy(this);const u=1/s,f=1/o,h=1/l;return zn.elements[0]*=u,zn.elements[1]*=u,zn.elements[2]*=u,zn.elements[4]*=f,zn.elements[5]*=f,zn.elements[6]*=f,zn.elements[8]*=h,zn.elements[9]*=h,zn.elements[10]*=h,n.setFromRotationMatrix(zn),i.x=s,i.y=o,i.z=l,this}makePerspective(e,n,i,r,s,o,l=Ri){const c=this.elements,u=2*s/(n-e),f=2*s/(i-r),h=(n+e)/(n-e),p=(i+r)/(i-r);let g,y;if(l===Ri)g=-(o+s)/(o-s),y=-2*o*s/(o-s);else if(l===yc)g=-o/(o-s),y=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+l);return c[0]=u,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=f,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=y,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,n,i,r,s,o,l=Ri){const c=this.elements,u=1/(n-e),f=1/(i-r),h=1/(o-s),p=(n+e)*u,g=(i+r)*f;let y,_;if(l===Ri)y=(o+s)*h,_=-2*h;else if(l===yc)y=s*h,_=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+l);return c[0]=2*u,c[4]=0,c[8]=0,c[12]=-p,c[1]=0,c[5]=2*f,c[9]=0,c[13]=-g,c[2]=0,c[6]=0,c[10]=_,c[14]=-y,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const us=new z,zn=new pt,EE=new z(0,0,0),wE=new z(1,1,1),Gi=new z,rl=new z,dn=new z,Hm=new pt,Vm=new Ro;class di{constructor(e=0,n=0,i=0,r=di.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],l=r[8],c=r[1],u=r[5],f=r[9],h=r[2],p=r[6],g=r[10];switch(n){case"XYZ":this._y=Math.asin(Jt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-f,g),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(p,u),this._z=0);break;case"YXZ":this._x=Math.asin(-Jt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(l,g),this._z=Math.atan2(c,u)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(Jt(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-h,g),this._z=Math.atan2(-o,u)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-Jt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(p,g),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-o,u));break;case"YZX":this._z=Math.asin(Jt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-f,u),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(l,g));break;case"XZY":this._z=Math.asin(-Jt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(p,u),this._y=Math.atan2(l,s)):(this._x=Math.atan2(-f,g),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Hm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Hm,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Vm.setFromEuler(this),this.setFromQuaternion(Vm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}di.DEFAULT_ORDER="XYZ";class z0{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let bE=0;const Wm=new z,ds=new Ro,yi=new pt,sl=new z,La=new z,TE=new z,AE=new Ro,Gm=new z(1,0,0),Xm=new z(0,1,0),qm=new z(0,0,1),$m={type:"added"},CE={type:"removed"},fs={type:"childadded",child:null},Vu={type:"childremoved",child:null};class $t extends pa{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:bE++}),this.uuid=Co(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=$t.DEFAULT_UP.clone();const e=new z,n=new di,i=new Ro,r=new z(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new pt},normalMatrix:{value:new je}}),this.matrix=new pt,this.matrixWorld=new pt,this.matrixAutoUpdate=$t.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=$t.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new z0,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return ds.setFromAxisAngle(e,n),this.quaternion.multiply(ds),this}rotateOnWorldAxis(e,n){return ds.setFromAxisAngle(e,n),this.quaternion.premultiply(ds),this}rotateX(e){return this.rotateOnAxis(Gm,e)}rotateY(e){return this.rotateOnAxis(Xm,e)}rotateZ(e){return this.rotateOnAxis(qm,e)}translateOnAxis(e,n){return Wm.copy(e).applyQuaternion(this.quaternion),this.position.add(Wm.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Gm,e)}translateY(e){return this.translateOnAxis(Xm,e)}translateZ(e){return this.translateOnAxis(qm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(yi.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?sl.copy(e):sl.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),La.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?yi.lookAt(La,sl,this.up):yi.lookAt(sl,La,this.up),this.quaternion.setFromRotationMatrix(yi),r&&(yi.extractRotation(r.matrixWorld),ds.setFromRotationMatrix(yi),this.quaternion.premultiply(ds.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent($m),fs.child=e,this.dispatchEvent(fs),fs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(CE),Vu.child=e,this.dispatchEvent(Vu),Vu.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),yi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),yi.multiply(e.parent.matrixWorld)),e.applyMatrix4(yi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent($m),fs.child=e,this.dispatchEvent(fs),fs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(La,e,TE),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(La,AE,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(l=>({boxInitialized:l.boxInitialized,boxMin:l.box.min.toArray(),boxMax:l.box.max.toArray(),sphereInitialized:l.sphereInitialized,sphereRadius:l.sphere.radius,sphereCenter:l.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(l,c){return l[c.uuid]===void 0&&(l[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const l=this.geometry.parameters;if(l!==void 0&&l.shapes!==void 0){const c=l.shapes;if(Array.isArray(c))for(let u=0,f=c.length;u<f;u++){const h=c[u];s(e.shapes,h)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const l=[];for(let c=0,u=this.material.length;c<u;c++)l.push(s(e.materials,this.material[c]));r.material=l}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let l=0;l<this.children.length;l++)r.children.push(this.children[l].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let l=0;l<this.animations.length;l++){const c=this.animations[l];r.animations.push(s(e.animations,c))}}if(n){const l=o(e.geometries),c=o(e.materials),u=o(e.textures),f=o(e.images),h=o(e.shapes),p=o(e.skeletons),g=o(e.animations),y=o(e.nodes);l.length>0&&(i.geometries=l),c.length>0&&(i.materials=c),u.length>0&&(i.textures=u),f.length>0&&(i.images=f),h.length>0&&(i.shapes=h),p.length>0&&(i.skeletons=p),g.length>0&&(i.animations=g),y.length>0&&(i.nodes=y)}return i.object=r,i;function o(l){const c=[];for(const u in l){const f=l[u];delete f.metadata,c.push(f)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}$t.DEFAULT_UP=new z(0,1,0);$t.DEFAULT_MATRIX_AUTO_UPDATE=!0;$t.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Fn=new z,_i=new z,Wu=new z,Si=new z,hs=new z,ps=new z,Ym=new z,Gu=new z,Xu=new z,qu=new z;class ti{constructor(e=new z,n=new z,i=new z){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Fn.subVectors(e,n),r.cross(Fn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){Fn.subVectors(r,n),_i.subVectors(i,n),Wu.subVectors(e,n);const o=Fn.dot(Fn),l=Fn.dot(_i),c=Fn.dot(Wu),u=_i.dot(_i),f=_i.dot(Wu),h=o*u-l*l;if(h===0)return s.set(0,0,0),null;const p=1/h,g=(u*c-l*f)*p,y=(o*f-l*c)*p;return s.set(1-g-y,y,g)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,Si)===null?!1:Si.x>=0&&Si.y>=0&&Si.x+Si.y<=1}static getInterpolation(e,n,i,r,s,o,l,c){return this.getBarycoord(e,n,i,r,Si)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,Si.x),c.addScaledVector(o,Si.y),c.addScaledVector(l,Si.z),c)}static isFrontFacing(e,n,i,r){return Fn.subVectors(i,n),_i.subVectors(e,n),Fn.cross(_i).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Fn.subVectors(this.c,this.b),_i.subVectors(this.a,this.b),Fn.cross(_i).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ti.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return ti.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return ti.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return ti.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ti.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,l;hs.subVectors(r,i),ps.subVectors(s,i),Gu.subVectors(e,i);const c=hs.dot(Gu),u=ps.dot(Gu);if(c<=0&&u<=0)return n.copy(i);Xu.subVectors(e,r);const f=hs.dot(Xu),h=ps.dot(Xu);if(f>=0&&h<=f)return n.copy(r);const p=c*h-f*u;if(p<=0&&c>=0&&f<=0)return o=c/(c-f),n.copy(i).addScaledVector(hs,o);qu.subVectors(e,s);const g=hs.dot(qu),y=ps.dot(qu);if(y>=0&&g<=y)return n.copy(s);const _=g*u-c*y;if(_<=0&&u>=0&&y<=0)return l=u/(u-y),n.copy(i).addScaledVector(ps,l);const m=f*y-g*h;if(m<=0&&h-f>=0&&g-y>=0)return Ym.subVectors(s,r),l=(h-f)/(h-f+(g-y)),n.copy(r).addScaledVector(Ym,l);const d=1/(m+_+p);return o=_*d,l=p*d,n.copy(i).addScaledVector(hs,o).addScaledVector(ps,l)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const F0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Xi={h:0,s:0,l:0},al={h:0,s:0,l:0};function $u(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class qe{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Zn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ze.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=Ze.workingColorSpace){return this.r=e,this.g=n,this.b=i,Ze.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=Ze.workingColorSpace){if(e=hE(e,1),n=Jt(n,0,1),i=Jt(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=$u(o,s,e+1/3),this.g=$u(o,s,e),this.b=$u(o,s,e-1/3)}return Ze.toWorkingColorSpace(this,r),this}setStyle(e,n=Zn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],l=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Zn){const i=F0[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Gs(e.r),this.g=Gs(e.g),this.b=Gs(e.b),this}copyLinearToSRGB(e){return this.r=Uu(e.r),this.g=Uu(e.g),this.b=Uu(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Zn){return Ze.fromWorkingColorSpace(Ht.copy(this),e),Math.round(Jt(Ht.r*255,0,255))*65536+Math.round(Jt(Ht.g*255,0,255))*256+Math.round(Jt(Ht.b*255,0,255))}getHexString(e=Zn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Ze.workingColorSpace){Ze.fromWorkingColorSpace(Ht.copy(this),n);const i=Ht.r,r=Ht.g,s=Ht.b,o=Math.max(i,r,s),l=Math.min(i,r,s);let c,u;const f=(l+o)/2;if(l===o)c=0,u=0;else{const h=o-l;switch(u=f<=.5?h/(o+l):h/(2-o-l),o){case i:c=(r-s)/h+(r<s?6:0);break;case r:c=(s-i)/h+2;break;case s:c=(i-r)/h+4;break}c/=6}return e.h=c,e.s=u,e.l=f,e}getRGB(e,n=Ze.workingColorSpace){return Ze.fromWorkingColorSpace(Ht.copy(this),n),e.r=Ht.r,e.g=Ht.g,e.b=Ht.b,e}getStyle(e=Zn){Ze.fromWorkingColorSpace(Ht.copy(this),e);const n=Ht.r,i=Ht.g,r=Ht.b;return e!==Zn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Xi),this.setHSL(Xi.h+e,Xi.s+n,Xi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Xi),e.getHSL(al);const i=Du(Xi.h,al.h,n),r=Du(Xi.s,al.s,n),s=Du(Xi.l,al.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ht=new qe;qe.NAMES=F0;let RE=0;class ma extends pa{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:RE++}),this.uuid=Co(),this.name="",this.type="Material",this.blending=Vs,this.side=xr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=of,this.blendDst=lf,this.blendEquation=Ir,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new qe(0,0,0),this.blendAlpha=0,this.depthFunc=mc,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Um,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ss,this.stencilZFail=ss,this.stencilZPass=ss,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Vs&&(i.blending=this.blending),this.side!==xr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==of&&(i.blendSrc=this.blendSrc),this.blendDst!==lf&&(i.blendDst=this.blendDst),this.blendEquation!==Ir&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==mc&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Um&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ss&&(i.stencilFail=this.stencilFail),this.stencilZFail!==ss&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==ss&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const l in s){const c=s[l];delete c.metadata,o.push(c)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Sc extends ma{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new qe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new di,this.combine=_0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const bt=new z,ol=new Fe;class oi{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=km,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Ci,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return Ka("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)ol.fromBufferAttribute(this,n),ol.applyMatrix3(e),this.setXY(n,ol.x,ol.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)bt.fromBufferAttribute(this,n),bt.applyMatrix3(e),this.setXYZ(n,bt.x,bt.y,bt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)bt.fromBufferAttribute(this,n),bt.applyMatrix4(e),this.setXYZ(n,bt.x,bt.y,bt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)bt.fromBufferAttribute(this,n),bt.applyNormalMatrix(e),this.setXYZ(n,bt.x,bt.y,bt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)bt.fromBufferAttribute(this,n),bt.transformDirection(e),this.setXYZ(n,bt.x,bt.y,bt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=Ca(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=Qt(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Ca(n,this.array)),n}setX(e,n){return this.normalized&&(n=Qt(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Ca(n,this.array)),n}setY(e,n){return this.normalized&&(n=Qt(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Ca(n,this.array)),n}setZ(e,n){return this.normalized&&(n=Qt(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Ca(n,this.array)),n}setW(e,n){return this.normalized&&(n=Qt(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=Qt(n,this.array),i=Qt(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=Qt(n,this.array),i=Qt(i,this.array),r=Qt(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=Qt(n,this.array),i=Qt(i,this.array),r=Qt(r,this.array),s=Qt(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==km&&(e.usage=this.usage),e}}class O0 extends oi{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class B0 extends oi{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class ln extends oi{constructor(e,n,i){super(new Float32Array(e),n,i)}}let PE=0;const Mn=new pt,Yu=new $t,ms=new z,fn=new Po,Da=new Po,Nt=new z;class $n extends pa{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:PE++}),this.uuid=Co(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(I0(e)?B0:O0)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new je().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Mn.makeRotationFromQuaternion(e),this.applyMatrix4(Mn),this}rotateX(e){return Mn.makeRotationX(e),this.applyMatrix4(Mn),this}rotateY(e){return Mn.makeRotationY(e),this.applyMatrix4(Mn),this}rotateZ(e){return Mn.makeRotationZ(e),this.applyMatrix4(Mn),this}translate(e,n,i){return Mn.makeTranslation(e,n,i),this.applyMatrix4(Mn),this}scale(e,n,i){return Mn.makeScale(e,n,i),this.applyMatrix4(Mn),this}lookAt(e){return Yu.lookAt(e),Yu.updateMatrix(),this.applyMatrix4(Yu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ms).negate(),this.translate(ms.x,ms.y,ms.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];n.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new ln(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Po);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new z(-1/0,-1/0,-1/0),new z(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];fn.setFromBufferAttribute(s),this.morphTargetsRelative?(Nt.addVectors(this.boundingBox.min,fn.min),this.boundingBox.expandByPoint(Nt),Nt.addVectors(this.boundingBox.max,fn.max),this.boundingBox.expandByPoint(Nt)):(this.boundingBox.expandByPoint(fn.min),this.boundingBox.expandByPoint(fn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Kc);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new z,1/0);return}if(e){const i=this.boundingSphere.center;if(fn.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const l=n[s];Da.setFromBufferAttribute(l),this.morphTargetsRelative?(Nt.addVectors(fn.min,Da.min),fn.expandByPoint(Nt),Nt.addVectors(fn.max,Da.max),fn.expandByPoint(Nt)):(fn.expandByPoint(Da.min),fn.expandByPoint(Da.max))}fn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Nt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Nt));if(n)for(let s=0,o=n.length;s<o;s++){const l=n[s],c=this.morphTargetsRelative;for(let u=0,f=l.count;u<f;u++)Nt.fromBufferAttribute(l,u),c&&(ms.fromBufferAttribute(e,u),Nt.add(ms)),r=Math.max(r,i.distanceToSquared(Nt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new oi(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),l=[],c=[];for(let N=0;N<i.count;N++)l[N]=new z,c[N]=new z;const u=new z,f=new z,h=new z,p=new Fe,g=new Fe,y=new Fe,_=new z,m=new z;function d(N,w,M){u.fromBufferAttribute(i,N),f.fromBufferAttribute(i,w),h.fromBufferAttribute(i,M),p.fromBufferAttribute(s,N),g.fromBufferAttribute(s,w),y.fromBufferAttribute(s,M),f.sub(u),h.sub(u),g.sub(p),y.sub(p);const R=1/(g.x*y.y-y.x*g.y);isFinite(R)&&(_.copy(f).multiplyScalar(y.y).addScaledVector(h,-g.y).multiplyScalar(R),m.copy(h).multiplyScalar(g.x).addScaledVector(f,-y.x).multiplyScalar(R),l[N].add(_),l[w].add(_),l[M].add(_),c[N].add(m),c[w].add(m),c[M].add(m))}let x=this.groups;x.length===0&&(x=[{start:0,count:e.count}]);for(let N=0,w=x.length;N<w;++N){const M=x[N],R=M.start,G=M.count;for(let O=R,q=R+G;O<q;O+=3)d(e.getX(O+0),e.getX(O+1),e.getX(O+2))}const v=new z,S=new z,C=new z,T=new z;function A(N){C.fromBufferAttribute(r,N),T.copy(C);const w=l[N];v.copy(w),v.sub(C.multiplyScalar(C.dot(w))).normalize(),S.crossVectors(T,w);const R=S.dot(c[N])<0?-1:1;o.setXYZW(N,v.x,v.y,v.z,R)}for(let N=0,w=x.length;N<w;++N){const M=x[N],R=M.start,G=M.count;for(let O=R,q=R+G;O<q;O+=3)A(e.getX(O+0)),A(e.getX(O+1)),A(e.getX(O+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new oi(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let p=0,g=i.count;p<g;p++)i.setXYZ(p,0,0,0);const r=new z,s=new z,o=new z,l=new z,c=new z,u=new z,f=new z,h=new z;if(e)for(let p=0,g=e.count;p<g;p+=3){const y=e.getX(p+0),_=e.getX(p+1),m=e.getX(p+2);r.fromBufferAttribute(n,y),s.fromBufferAttribute(n,_),o.fromBufferAttribute(n,m),f.subVectors(o,s),h.subVectors(r,s),f.cross(h),l.fromBufferAttribute(i,y),c.fromBufferAttribute(i,_),u.fromBufferAttribute(i,m),l.add(f),c.add(f),u.add(f),i.setXYZ(y,l.x,l.y,l.z),i.setXYZ(_,c.x,c.y,c.z),i.setXYZ(m,u.x,u.y,u.z)}else for(let p=0,g=n.count;p<g;p+=3)r.fromBufferAttribute(n,p+0),s.fromBufferAttribute(n,p+1),o.fromBufferAttribute(n,p+2),f.subVectors(o,s),h.subVectors(r,s),f.cross(h),i.setXYZ(p+0,f.x,f.y,f.z),i.setXYZ(p+1,f.x,f.y,f.z),i.setXYZ(p+2,f.x,f.y,f.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Nt.fromBufferAttribute(e,n),Nt.normalize(),e.setXYZ(n,Nt.x,Nt.y,Nt.z)}toNonIndexed(){function e(l,c){const u=l.array,f=l.itemSize,h=l.normalized,p=new u.constructor(c.length*f);let g=0,y=0;for(let _=0,m=c.length;_<m;_++){l.isInterleavedBufferAttribute?g=c[_]*l.data.stride+l.offset:g=c[_]*f;for(let d=0;d<f;d++)p[y++]=u[g++]}return new oi(p,f,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new $n,i=this.index.array,r=this.attributes;for(const l in r){const c=r[l],u=e(c,i);n.setAttribute(l,u)}const s=this.morphAttributes;for(const l in s){const c=[],u=s[l];for(let f=0,h=u.length;f<h;f++){const p=u[f],g=e(p,i);c.push(g)}n.morphAttributes[l]=c}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let l=0,c=o.length;l<c;l++){const u=o[l];n.addGroup(u.start,u.count,u.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const u in c)c[u]!==void 0&&(e[u]=c[u]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const c in i){const u=i[c];e.data.attributes[c]=u.toJSON(e.data)}const r={};let s=!1;for(const c in this.morphAttributes){const u=this.morphAttributes[c],f=[];for(let h=0,p=u.length;h<p;h++){const g=u[h];f.push(g.toJSON(e.data))}f.length>0&&(r[c]=f,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const l=this.boundingSphere;return l!==null&&(e.data.boundingSphere={center:l.center.toArray(),radius:l.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const u in r){const f=r[u];this.setAttribute(u,f.clone(n))}const s=e.morphAttributes;for(const u in s){const f=[],h=s[u];for(let p=0,g=h.length;p<g;p++)f.push(h[p].clone(n));this.morphAttributes[u]=f}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let u=0,f=o.length;u<f;u++){const h=o[u];this.addGroup(h.start,h.count,h.materialIndex)}const l=e.boundingBox;l!==null&&(this.boundingBox=l.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Km=new pt,Tr=new j0,ll=new Kc,Qm=new z,gs=new z,xs=new z,vs=new z,Ku=new z,cl=new z,ul=new Fe,dl=new Fe,fl=new Fe,Zm=new z,Jm=new z,eg=new z,hl=new z,pl=new z;class An extends $t{constructor(e=new $n,n=new Sc){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const l=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const l=this.morphTargetInfluences;if(s&&l){cl.set(0,0,0);for(let c=0,u=s.length;c<u;c++){const f=l[c],h=s[c];f!==0&&(Ku.fromBufferAttribute(h,e),o?cl.addScaledVector(Ku,f):cl.addScaledVector(Ku.sub(n),f))}n.add(cl)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),ll.copy(i.boundingSphere),ll.applyMatrix4(s),Tr.copy(e.ray).recast(e.near),!(ll.containsPoint(Tr.origin)===!1&&(Tr.intersectSphere(ll,Qm)===null||Tr.origin.distanceToSquared(Qm)>(e.far-e.near)**2))&&(Km.copy(s).invert(),Tr.copy(e.ray).applyMatrix4(Km),!(i.boundingBox!==null&&Tr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,Tr)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,l=s.index,c=s.attributes.position,u=s.attributes.uv,f=s.attributes.uv1,h=s.attributes.normal,p=s.groups,g=s.drawRange;if(l!==null)if(Array.isArray(o))for(let y=0,_=p.length;y<_;y++){const m=p[y],d=o[m.materialIndex],x=Math.max(m.start,g.start),v=Math.min(l.count,Math.min(m.start+m.count,g.start+g.count));for(let S=x,C=v;S<C;S+=3){const T=l.getX(S),A=l.getX(S+1),N=l.getX(S+2);r=ml(this,d,e,i,u,f,h,T,A,N),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const y=Math.max(0,g.start),_=Math.min(l.count,g.start+g.count);for(let m=y,d=_;m<d;m+=3){const x=l.getX(m),v=l.getX(m+1),S=l.getX(m+2);r=ml(this,o,e,i,u,f,h,x,v,S),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}else if(c!==void 0)if(Array.isArray(o))for(let y=0,_=p.length;y<_;y++){const m=p[y],d=o[m.materialIndex],x=Math.max(m.start,g.start),v=Math.min(c.count,Math.min(m.start+m.count,g.start+g.count));for(let S=x,C=v;S<C;S+=3){const T=S,A=S+1,N=S+2;r=ml(this,d,e,i,u,f,h,T,A,N),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const y=Math.max(0,g.start),_=Math.min(c.count,g.start+g.count);for(let m=y,d=_;m<d;m+=3){const x=m,v=m+1,S=m+2;r=ml(this,o,e,i,u,f,h,x,v,S),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}}}function NE(t,e,n,i,r,s,o,l){let c;if(e.side===an?c=i.intersectTriangle(o,s,r,!0,l):c=i.intersectTriangle(r,s,o,e.side===xr,l),c===null)return null;pl.copy(l),pl.applyMatrix4(t.matrixWorld);const u=n.ray.origin.distanceTo(pl);return u<n.near||u>n.far?null:{distance:u,point:pl.clone(),object:t}}function ml(t,e,n,i,r,s,o,l,c,u){t.getVertexPosition(l,gs),t.getVertexPosition(c,xs),t.getVertexPosition(u,vs);const f=NE(t,e,n,i,gs,xs,vs,hl);if(f){r&&(ul.fromBufferAttribute(r,l),dl.fromBufferAttribute(r,c),fl.fromBufferAttribute(r,u),f.uv=ti.getInterpolation(hl,gs,xs,vs,ul,dl,fl,new Fe)),s&&(ul.fromBufferAttribute(s,l),dl.fromBufferAttribute(s,c),fl.fromBufferAttribute(s,u),f.uv1=ti.getInterpolation(hl,gs,xs,vs,ul,dl,fl,new Fe)),o&&(Zm.fromBufferAttribute(o,l),Jm.fromBufferAttribute(o,c),eg.fromBufferAttribute(o,u),f.normal=ti.getInterpolation(hl,gs,xs,vs,Zm,Jm,eg,new z),f.normal.dot(i.direction)>0&&f.normal.multiplyScalar(-1));const h={a:l,b:c,c:u,normal:new z,materialIndex:0};ti.getNormal(gs,xs,vs,h.normal),f.face=h}return f}class No extends $n{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const l=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const c=[],u=[],f=[],h=[];let p=0,g=0;y("z","y","x",-1,-1,i,n,e,o,s,0),y("z","y","x",1,-1,i,n,-e,o,s,1),y("x","z","y",1,1,e,i,n,r,o,2),y("x","z","y",1,-1,e,i,-n,r,o,3),y("x","y","z",1,-1,e,n,i,r,s,4),y("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(c),this.setAttribute("position",new ln(u,3)),this.setAttribute("normal",new ln(f,3)),this.setAttribute("uv",new ln(h,2));function y(_,m,d,x,v,S,C,T,A,N,w){const M=S/A,R=C/N,G=S/2,O=C/2,q=T/2,$=A+1,D=N+1;let V=0,U=0;const Y=new z;for(let Z=0;Z<D;Z++){const oe=Z*R-O;for(let Se=0;Se<$;Se++){const Be=Se*M-G;Y[_]=Be*x,Y[m]=oe*v,Y[d]=q,u.push(Y.x,Y.y,Y.z),Y[_]=0,Y[m]=0,Y[d]=T>0?1:-1,f.push(Y.x,Y.y,Y.z),h.push(Se/A),h.push(1-Z/N),V+=1}}for(let Z=0;Z<N;Z++)for(let oe=0;oe<A;oe++){const Se=p+oe+$*Z,Be=p+oe+$*(Z+1),X=p+(oe+1)+$*(Z+1),ie=p+(oe+1)+$*Z;c.push(Se,Be,ie),c.push(Be,X,ie),U+=6}l.addGroup(g,U,w),g+=U,p+=V}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new No(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ra(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function Gt(t){const e={};for(let n=0;n<t.length;n++){const i=ra(t[n]);for(const r in i)e[r]=i[r]}return e}function LE(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function H0(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ze.workingColorSpace}const DE={clone:ra,merge:Gt};var IE=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,UE=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class vr extends ma{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=IE,this.fragmentShader=UE,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ra(e.uniforms),this.uniformsGroups=LE(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class V0 extends $t{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new pt,this.projectionMatrix=new pt,this.projectionMatrixInverse=new pt,this.coordinateSystem=Ri}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const qi=new z,tg=new Fe,ng=new Fe;class pn extends V0{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Ff*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Lu*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ff*2*Math.atan(Math.tan(Lu*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){qi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(qi.x,qi.y).multiplyScalar(-e/qi.z),qi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(qi.x,qi.y).multiplyScalar(-e/qi.z)}getViewSize(e,n){return this.getViewBounds(e,tg,ng),n.subVectors(ng,tg)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Lu*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,u=o.fullHeight;s+=o.offsetX*r/c,n-=o.offsetY*i/u,r*=o.width/c,i*=o.height/u}const l=this.filmOffset;l!==0&&(s+=e*l/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const ys=-90,_s=1;class kE extends $t{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new pn(ys,_s,e,n);r.layers=this.layers,this.add(r);const s=new pn(ys,_s,e,n);s.layers=this.layers,this.add(s);const o=new pn(ys,_s,e,n);o.layers=this.layers,this.add(o);const l=new pn(ys,_s,e,n);l.layers=this.layers,this.add(l);const c=new pn(ys,_s,e,n);c.layers=this.layers,this.add(c);const u=new pn(ys,_s,e,n);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,l,c]=n;for(const u of n)this.remove(u);if(e===Ri)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),l.up.set(0,1,0),l.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===yc)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),l.up.set(0,-1,0),l.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of n)this.add(u),u.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,l,c,u,f]=this.children,h=e.getRenderTarget(),p=e.getActiveCubeFace(),g=e.getActiveMipmapLevel(),y=e.xr.enabled;e.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,o),e.setRenderTarget(i,2,r),e.render(n,l),e.setRenderTarget(i,3,r),e.render(n,c),e.setRenderTarget(i,4,r),e.render(n,u),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,r),e.render(n,f),e.setRenderTarget(h,p,g),e.xr.enabled=y,i.texture.needsPMREMUpdate=!0}}class W0 extends on{constructor(e,n,i,r,s,o,l,c,u,f){e=e!==void 0?e:[],n=n!==void 0?n:ea,super(e,n,i,r,s,o,l,c,u,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class jE extends Jr{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new W0(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Vn}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new No(5,5,5),s=new vr({name:"CubemapFromEquirect",uniforms:ra(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:an,blending:dr});s.uniforms.tEquirect.value=n;const o=new An(r,s),l=n.minFilter;return n.minFilter===Or&&(n.minFilter=Vn),new kE(1,10,this).update(e,o),n.minFilter=l,o.geometry.dispose(),o.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}const Qu=new z,zE=new z,FE=new je;class Lr{constructor(e=new z(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=Qu.subVectors(i,n).cross(zE.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(Qu),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||FE.getNormalMatrix(e),r=this.coplanarPoint(Qu).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ar=new Kc,gl=new z;class Jh{constructor(e=new Lr,n=new Lr,i=new Lr,r=new Lr,s=new Lr,o=new Lr){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const l=this.planes;return l[0].copy(e),l[1].copy(n),l[2].copy(i),l[3].copy(r),l[4].copy(s),l[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=Ri){const i=this.planes,r=e.elements,s=r[0],o=r[1],l=r[2],c=r[3],u=r[4],f=r[5],h=r[6],p=r[7],g=r[8],y=r[9],_=r[10],m=r[11],d=r[12],x=r[13],v=r[14],S=r[15];if(i[0].setComponents(c-s,p-u,m-g,S-d).normalize(),i[1].setComponents(c+s,p+u,m+g,S+d).normalize(),i[2].setComponents(c+o,p+f,m+y,S+x).normalize(),i[3].setComponents(c-o,p-f,m-y,S-x).normalize(),i[4].setComponents(c-l,p-h,m-_,S-v).normalize(),n===Ri)i[5].setComponents(c+l,p+h,m+_,S+v).normalize();else if(n===yc)i[5].setComponents(l,h,_,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ar.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Ar.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ar)}intersectsSprite(e){return Ar.center.set(0,0,0),Ar.radius=.7071067811865476,Ar.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ar)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(gl.x=r.normal.x>0?e.max.x:e.min.x,gl.y=r.normal.y>0?e.max.y:e.min.y,gl.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(gl)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function G0(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function OE(t){const e=new WeakMap;function n(l,c){const u=l.array,f=l.usage,h=u.byteLength,p=t.createBuffer();t.bindBuffer(c,p),t.bufferData(c,u,f),l.onUploadCallback();let g;if(u instanceof Float32Array)g=t.FLOAT;else if(u instanceof Uint16Array)l.isFloat16BufferAttribute?g=t.HALF_FLOAT:g=t.UNSIGNED_SHORT;else if(u instanceof Int16Array)g=t.SHORT;else if(u instanceof Uint32Array)g=t.UNSIGNED_INT;else if(u instanceof Int32Array)g=t.INT;else if(u instanceof Int8Array)g=t.BYTE;else if(u instanceof Uint8Array)g=t.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)g=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:p,type:g,bytesPerElement:u.BYTES_PER_ELEMENT,version:l.version,size:h}}function i(l,c,u){const f=c.array,h=c._updateRange,p=c.updateRanges;if(t.bindBuffer(u,l),h.count===-1&&p.length===0&&t.bufferSubData(u,0,f),p.length!==0){for(let g=0,y=p.length;g<y;g++){const _=p[g];t.bufferSubData(u,_.start*f.BYTES_PER_ELEMENT,f,_.start,_.count)}c.clearUpdateRanges()}h.count!==-1&&(t.bufferSubData(u,h.offset*f.BYTES_PER_ELEMENT,f,h.offset,h.count),h.count=-1),c.onUploadCallback()}function r(l){return l.isInterleavedBufferAttribute&&(l=l.data),e.get(l)}function s(l){l.isInterleavedBufferAttribute&&(l=l.data);const c=e.get(l);c&&(t.deleteBuffer(c.buffer),e.delete(l))}function o(l,c){if(l.isInterleavedBufferAttribute&&(l=l.data),l.isGLBufferAttribute){const f=e.get(l);(!f||f.version<l.version)&&e.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}const u=e.get(l);if(u===void 0)e.set(l,n(l,c));else if(u.version<l.version){if(u.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(u.buffer,l,c),u.version=l.version}}return{get:r,remove:s,update:o}}class Qc extends $n{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,l=Math.floor(i),c=Math.floor(r),u=l+1,f=c+1,h=e/l,p=n/c,g=[],y=[],_=[],m=[];for(let d=0;d<f;d++){const x=d*p-o;for(let v=0;v<u;v++){const S=v*h-s;y.push(S,-x,0),_.push(0,0,1),m.push(v/l),m.push(1-d/c)}}for(let d=0;d<c;d++)for(let x=0;x<l;x++){const v=x+u*d,S=x+u*(d+1),C=x+1+u*(d+1),T=x+1+u*d;g.push(v,S,T),g.push(S,C,T)}this.setIndex(g),this.setAttribute("position",new ln(y,3)),this.setAttribute("normal",new ln(_,3)),this.setAttribute("uv",new ln(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Qc(e.width,e.height,e.widthSegments,e.heightSegments)}}var BE=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,HE=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,VE=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,WE=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,GE=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,XE=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,qE=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,$E=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,YE=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,KE=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,QE=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ZE=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,JE=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,ew=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,tw=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,nw=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,iw=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,rw=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,sw=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,aw=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,ow=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,lw=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,cw=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,uw=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,dw=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,fw=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,hw=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,pw=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,mw=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,gw=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,xw="gl_FragColor = linearToOutputTexel( gl_FragColor );",vw=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,yw=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,_w=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Sw=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Mw=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ew=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,ww=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,bw=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Tw=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Aw=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Cw=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Rw=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Pw=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Nw=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Lw=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Dw=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Iw=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Uw=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,kw=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,jw=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,zw=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Fw=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Ow=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Bw=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Hw=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Vw=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ww=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Gw=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Xw=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,qw=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,$w=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Yw=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Kw=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Qw=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Zw=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Jw=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,eb=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,tb=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,nb=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,ib=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,rb=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,sb=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,ab=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ob=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,lb=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,cb=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,ub=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,db=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,fb=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,hb=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,pb=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,mb=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,gb=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,xb=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,vb=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,yb=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,_b=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Sb=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Mb=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Eb=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,wb=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,bb=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Tb=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ab=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Cb=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Rb=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Pb=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Nb=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Lb=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Db=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Ib=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Ub=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,kb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,jb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,zb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Fb=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Ob=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Bb=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Hb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Vb=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Wb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Gb=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Xb=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,qb=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,$b=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Yb=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Kb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Qb=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Zb=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Jb=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,e2=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,t2=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,n2=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,i2=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,r2=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,s2=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,a2=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,o2=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,l2=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,c2=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,u2=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,d2=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,f2=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,h2=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,p2=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,m2=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,g2=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,x2=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,v2=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,y2=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ke={alphahash_fragment:BE,alphahash_pars_fragment:HE,alphamap_fragment:VE,alphamap_pars_fragment:WE,alphatest_fragment:GE,alphatest_pars_fragment:XE,aomap_fragment:qE,aomap_pars_fragment:$E,batching_pars_vertex:YE,batching_vertex:KE,begin_vertex:QE,beginnormal_vertex:ZE,bsdfs:JE,iridescence_fragment:ew,bumpmap_pars_fragment:tw,clipping_planes_fragment:nw,clipping_planes_pars_fragment:iw,clipping_planes_pars_vertex:rw,clipping_planes_vertex:sw,color_fragment:aw,color_pars_fragment:ow,color_pars_vertex:lw,color_vertex:cw,common:uw,cube_uv_reflection_fragment:dw,defaultnormal_vertex:fw,displacementmap_pars_vertex:hw,displacementmap_vertex:pw,emissivemap_fragment:mw,emissivemap_pars_fragment:gw,colorspace_fragment:xw,colorspace_pars_fragment:vw,envmap_fragment:yw,envmap_common_pars_fragment:_w,envmap_pars_fragment:Sw,envmap_pars_vertex:Mw,envmap_physical_pars_fragment:Dw,envmap_vertex:Ew,fog_vertex:ww,fog_pars_vertex:bw,fog_fragment:Tw,fog_pars_fragment:Aw,gradientmap_pars_fragment:Cw,lightmap_pars_fragment:Rw,lights_lambert_fragment:Pw,lights_lambert_pars_fragment:Nw,lights_pars_begin:Lw,lights_toon_fragment:Iw,lights_toon_pars_fragment:Uw,lights_phong_fragment:kw,lights_phong_pars_fragment:jw,lights_physical_fragment:zw,lights_physical_pars_fragment:Fw,lights_fragment_begin:Ow,lights_fragment_maps:Bw,lights_fragment_end:Hw,logdepthbuf_fragment:Vw,logdepthbuf_pars_fragment:Ww,logdepthbuf_pars_vertex:Gw,logdepthbuf_vertex:Xw,map_fragment:qw,map_pars_fragment:$w,map_particle_fragment:Yw,map_particle_pars_fragment:Kw,metalnessmap_fragment:Qw,metalnessmap_pars_fragment:Zw,morphinstance_vertex:Jw,morphcolor_vertex:eb,morphnormal_vertex:tb,morphtarget_pars_vertex:nb,morphtarget_vertex:ib,normal_fragment_begin:rb,normal_fragment_maps:sb,normal_pars_fragment:ab,normal_pars_vertex:ob,normal_vertex:lb,normalmap_pars_fragment:cb,clearcoat_normal_fragment_begin:ub,clearcoat_normal_fragment_maps:db,clearcoat_pars_fragment:fb,iridescence_pars_fragment:hb,opaque_fragment:pb,packing:mb,premultiplied_alpha_fragment:gb,project_vertex:xb,dithering_fragment:vb,dithering_pars_fragment:yb,roughnessmap_fragment:_b,roughnessmap_pars_fragment:Sb,shadowmap_pars_fragment:Mb,shadowmap_pars_vertex:Eb,shadowmap_vertex:wb,shadowmask_pars_fragment:bb,skinbase_vertex:Tb,skinning_pars_vertex:Ab,skinning_vertex:Cb,skinnormal_vertex:Rb,specularmap_fragment:Pb,specularmap_pars_fragment:Nb,tonemapping_fragment:Lb,tonemapping_pars_fragment:Db,transmission_fragment:Ib,transmission_pars_fragment:Ub,uv_pars_fragment:kb,uv_pars_vertex:jb,uv_vertex:zb,worldpos_vertex:Fb,background_vert:Ob,background_frag:Bb,backgroundCube_vert:Hb,backgroundCube_frag:Vb,cube_vert:Wb,cube_frag:Gb,depth_vert:Xb,depth_frag:qb,distanceRGBA_vert:$b,distanceRGBA_frag:Yb,equirect_vert:Kb,equirect_frag:Qb,linedashed_vert:Zb,linedashed_frag:Jb,meshbasic_vert:e2,meshbasic_frag:t2,meshlambert_vert:n2,meshlambert_frag:i2,meshmatcap_vert:r2,meshmatcap_frag:s2,meshnormal_vert:a2,meshnormal_frag:o2,meshphong_vert:l2,meshphong_frag:c2,meshphysical_vert:u2,meshphysical_frag:d2,meshtoon_vert:f2,meshtoon_frag:h2,points_vert:p2,points_frag:m2,shadow_vert:g2,shadow_frag:x2,sprite_vert:v2,sprite_frag:y2},ce={common:{diffuse:{value:new qe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new je},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new je}},envmap:{envMap:{value:null},envMapRotation:{value:new je},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new je}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new je}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new je},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new je},normalScale:{value:new Fe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new je},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new je}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new je}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new je}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new qe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new qe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0},uvTransform:{value:new je}},sprite:{diffuse:{value:new qe(16777215)},opacity:{value:1},center:{value:new Fe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new je},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0}}},Jn={basic:{uniforms:Gt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.fog]),vertexShader:ke.meshbasic_vert,fragmentShader:ke.meshbasic_frag},lambert:{uniforms:Gt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new qe(0)}}]),vertexShader:ke.meshlambert_vert,fragmentShader:ke.meshlambert_frag},phong:{uniforms:Gt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new qe(0)},specular:{value:new qe(1118481)},shininess:{value:30}}]),vertexShader:ke.meshphong_vert,fragmentShader:ke.meshphong_frag},standard:{uniforms:Gt([ce.common,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.roughnessmap,ce.metalnessmap,ce.fog,ce.lights,{emissive:{value:new qe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ke.meshphysical_vert,fragmentShader:ke.meshphysical_frag},toon:{uniforms:Gt([ce.common,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.gradientmap,ce.fog,ce.lights,{emissive:{value:new qe(0)}}]),vertexShader:ke.meshtoon_vert,fragmentShader:ke.meshtoon_frag},matcap:{uniforms:Gt([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,{matcap:{value:null}}]),vertexShader:ke.meshmatcap_vert,fragmentShader:ke.meshmatcap_frag},points:{uniforms:Gt([ce.points,ce.fog]),vertexShader:ke.points_vert,fragmentShader:ke.points_frag},dashed:{uniforms:Gt([ce.common,ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ke.linedashed_vert,fragmentShader:ke.linedashed_frag},depth:{uniforms:Gt([ce.common,ce.displacementmap]),vertexShader:ke.depth_vert,fragmentShader:ke.depth_frag},normal:{uniforms:Gt([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,{opacity:{value:1}}]),vertexShader:ke.meshnormal_vert,fragmentShader:ke.meshnormal_frag},sprite:{uniforms:Gt([ce.sprite,ce.fog]),vertexShader:ke.sprite_vert,fragmentShader:ke.sprite_frag},background:{uniforms:{uvTransform:{value:new je},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ke.background_vert,fragmentShader:ke.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new je}},vertexShader:ke.backgroundCube_vert,fragmentShader:ke.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ke.cube_vert,fragmentShader:ke.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ke.equirect_vert,fragmentShader:ke.equirect_frag},distanceRGBA:{uniforms:Gt([ce.common,ce.displacementmap,{referencePosition:{value:new z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ke.distanceRGBA_vert,fragmentShader:ke.distanceRGBA_frag},shadow:{uniforms:Gt([ce.lights,ce.fog,{color:{value:new qe(0)},opacity:{value:1}}]),vertexShader:ke.shadow_vert,fragmentShader:ke.shadow_frag}};Jn.physical={uniforms:Gt([Jn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new je},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new je},clearcoatNormalScale:{value:new Fe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new je},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new je},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new je},sheen:{value:0},sheenColor:{value:new qe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new je},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new je},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new je},transmissionSamplerSize:{value:new Fe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new je},attenuationDistance:{value:0},attenuationColor:{value:new qe(0)},specularColor:{value:new qe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new je},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new je},anisotropyVector:{value:new Fe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new je}}]),vertexShader:ke.meshphysical_vert,fragmentShader:ke.meshphysical_frag};const xl={r:0,b:0,g:0},Cr=new di,_2=new pt;function S2(t,e,n,i,r,s,o){const l=new qe(0);let c=s===!0?0:1,u,f,h=null,p=0,g=null;function y(x){let v=x.isScene===!0?x.background:null;return v&&v.isTexture&&(v=(x.backgroundBlurriness>0?n:e).get(v)),v}function _(x){let v=!1;const S=y(x);S===null?d(l,c):S&&S.isColor&&(d(S,1),v=!0);const C=t.xr.getEnvironmentBlendMode();C==="additive"?i.buffers.color.setClear(0,0,0,1,o):C==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(t.autoClear||v)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function m(x,v){const S=y(v);S&&(S.isCubeTexture||S.mapping===$c)?(f===void 0&&(f=new An(new No(1,1,1),new vr({name:"BackgroundCubeMaterial",uniforms:ra(Jn.backgroundCube.uniforms),vertexShader:Jn.backgroundCube.vertexShader,fragmentShader:Jn.backgroundCube.fragmentShader,side:an,depthTest:!1,depthWrite:!1,fog:!1})),f.geometry.deleteAttribute("normal"),f.geometry.deleteAttribute("uv"),f.onBeforeRender=function(C,T,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(f.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(f)),Cr.copy(v.backgroundRotation),Cr.x*=-1,Cr.y*=-1,Cr.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(Cr.y*=-1,Cr.z*=-1),f.material.uniforms.envMap.value=S,f.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,f.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,f.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,f.material.uniforms.backgroundRotation.value.setFromMatrix4(_2.makeRotationFromEuler(Cr)),f.material.toneMapped=Ze.getTransfer(S.colorSpace)!==at,(h!==S||p!==S.version||g!==t.toneMapping)&&(f.material.needsUpdate=!0,h=S,p=S.version,g=t.toneMapping),f.layers.enableAll(),x.unshift(f,f.geometry,f.material,0,0,null)):S&&S.isTexture&&(u===void 0&&(u=new An(new Qc(2,2),new vr({name:"BackgroundMaterial",uniforms:ra(Jn.background.uniforms),vertexShader:Jn.background.vertexShader,fragmentShader:Jn.background.fragmentShader,side:xr,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(u)),u.material.uniforms.t2D.value=S,u.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,u.material.toneMapped=Ze.getTransfer(S.colorSpace)!==at,S.matrixAutoUpdate===!0&&S.updateMatrix(),u.material.uniforms.uvTransform.value.copy(S.matrix),(h!==S||p!==S.version||g!==t.toneMapping)&&(u.material.needsUpdate=!0,h=S,p=S.version,g=t.toneMapping),u.layers.enableAll(),x.unshift(u,u.geometry,u.material,0,0,null))}function d(x,v){x.getRGB(xl,H0(t)),i.buffers.color.setClear(xl.r,xl.g,xl.b,v,o)}return{getClearColor:function(){return l},setClearColor:function(x,v=1){l.set(x),c=v,d(l,c)},getClearAlpha:function(){return c},setClearAlpha:function(x){c=x,d(l,c)},render:_,addToRenderList:m}}function M2(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=p(null);let s=r,o=!1;function l(M,R,G,O,q){let $=!1;const D=h(O,G,R);s!==D&&(s=D,u(s.object)),$=g(M,O,G,q),$&&y(M,O,G,q),q!==null&&e.update(q,t.ELEMENT_ARRAY_BUFFER),($||o)&&(o=!1,S(M,R,G,O),q!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(q).buffer))}function c(){return t.createVertexArray()}function u(M){return t.bindVertexArray(M)}function f(M){return t.deleteVertexArray(M)}function h(M,R,G){const O=G.wireframe===!0;let q=i[M.id];q===void 0&&(q={},i[M.id]=q);let $=q[R.id];$===void 0&&($={},q[R.id]=$);let D=$[O];return D===void 0&&(D=p(c()),$[O]=D),D}function p(M){const R=[],G=[],O=[];for(let q=0;q<n;q++)R[q]=0,G[q]=0,O[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:G,attributeDivisors:O,object:M,attributes:{},index:null}}function g(M,R,G,O){const q=s.attributes,$=R.attributes;let D=0;const V=G.getAttributes();for(const U in V)if(V[U].location>=0){const Z=q[U];let oe=$[U];if(oe===void 0&&(U==="instanceMatrix"&&M.instanceMatrix&&(oe=M.instanceMatrix),U==="instanceColor"&&M.instanceColor&&(oe=M.instanceColor)),Z===void 0||Z.attribute!==oe||oe&&Z.data!==oe.data)return!0;D++}return s.attributesNum!==D||s.index!==O}function y(M,R,G,O){const q={},$=R.attributes;let D=0;const V=G.getAttributes();for(const U in V)if(V[U].location>=0){let Z=$[U];Z===void 0&&(U==="instanceMatrix"&&M.instanceMatrix&&(Z=M.instanceMatrix),U==="instanceColor"&&M.instanceColor&&(Z=M.instanceColor));const oe={};oe.attribute=Z,Z&&Z.data&&(oe.data=Z.data),q[U]=oe,D++}s.attributes=q,s.attributesNum=D,s.index=O}function _(){const M=s.newAttributes;for(let R=0,G=M.length;R<G;R++)M[R]=0}function m(M){d(M,0)}function d(M,R){const G=s.newAttributes,O=s.enabledAttributes,q=s.attributeDivisors;G[M]=1,O[M]===0&&(t.enableVertexAttribArray(M),O[M]=1),q[M]!==R&&(t.vertexAttribDivisor(M,R),q[M]=R)}function x(){const M=s.newAttributes,R=s.enabledAttributes;for(let G=0,O=R.length;G<O;G++)R[G]!==M[G]&&(t.disableVertexAttribArray(G),R[G]=0)}function v(M,R,G,O,q,$,D){D===!0?t.vertexAttribIPointer(M,R,G,q,$):t.vertexAttribPointer(M,R,G,O,q,$)}function S(M,R,G,O){_();const q=O.attributes,$=G.getAttributes(),D=R.defaultAttributeValues;for(const V in $){const U=$[V];if(U.location>=0){let Y=q[V];if(Y===void 0&&(V==="instanceMatrix"&&M.instanceMatrix&&(Y=M.instanceMatrix),V==="instanceColor"&&M.instanceColor&&(Y=M.instanceColor)),Y!==void 0){const Z=Y.normalized,oe=Y.itemSize,Se=e.get(Y);if(Se===void 0)continue;const Be=Se.buffer,X=Se.type,ie=Se.bytesPerElement,he=X===t.INT||X===t.UNSIGNED_INT||Y.gpuType===Xh;if(Y.isInterleavedBufferAttribute){const de=Y.data,Ce=de.stride,De=Y.offset;if(de.isInstancedInterleavedBuffer){for(let He=0;He<U.locationSize;He++)d(U.location+He,de.meshPerAttribute);M.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=de.meshPerAttribute*de.count)}else for(let He=0;He<U.locationSize;He++)m(U.location+He);t.bindBuffer(t.ARRAY_BUFFER,Be);for(let He=0;He<U.locationSize;He++)v(U.location+He,oe/U.locationSize,X,Z,Ce*ie,(De+oe/U.locationSize*He)*ie,he)}else{if(Y.isInstancedBufferAttribute){for(let de=0;de<U.locationSize;de++)d(U.location+de,Y.meshPerAttribute);M.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=Y.meshPerAttribute*Y.count)}else for(let de=0;de<U.locationSize;de++)m(U.location+de);t.bindBuffer(t.ARRAY_BUFFER,Be);for(let de=0;de<U.locationSize;de++)v(U.location+de,oe/U.locationSize,X,Z,oe*ie,oe/U.locationSize*de*ie,he)}}else if(D!==void 0){const Z=D[V];if(Z!==void 0)switch(Z.length){case 2:t.vertexAttrib2fv(U.location,Z);break;case 3:t.vertexAttrib3fv(U.location,Z);break;case 4:t.vertexAttrib4fv(U.location,Z);break;default:t.vertexAttrib1fv(U.location,Z)}}}}x()}function C(){N();for(const M in i){const R=i[M];for(const G in R){const O=R[G];for(const q in O)f(O[q].object),delete O[q];delete R[G]}delete i[M]}}function T(M){if(i[M.id]===void 0)return;const R=i[M.id];for(const G in R){const O=R[G];for(const q in O)f(O[q].object),delete O[q];delete R[G]}delete i[M.id]}function A(M){for(const R in i){const G=i[R];if(G[M.id]===void 0)continue;const O=G[M.id];for(const q in O)f(O[q].object),delete O[q];delete G[M.id]}}function N(){w(),o=!0,s!==r&&(s=r,u(s.object))}function w(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:l,reset:N,resetDefaultState:w,dispose:C,releaseStatesOfGeometry:T,releaseStatesOfProgram:A,initAttributes:_,enableAttribute:m,disableUnusedAttributes:x}}function E2(t,e,n){let i;function r(u){i=u}function s(u,f){t.drawArrays(i,u,f),n.update(f,i,1)}function o(u,f,h){h!==0&&(t.drawArraysInstanced(i,u,f,h),n.update(f,i,h))}function l(u,f,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,u,0,f,0,h);let g=0;for(let y=0;y<h;y++)g+=f[y];n.update(g,i,1)}function c(u,f,h,p){if(h===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let y=0;y<u.length;y++)o(u[y],f[y],p[y]);else{g.multiDrawArraysInstancedWEBGL(i,u,0,f,0,p,0,h);let y=0;for(let _=0;_<h;_++)y+=f[_];for(let _=0;_<p.length;_++)n.update(y,i,p[_])}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=l,this.renderMultiDrawInstances=c}function w2(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const T=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(T){return!(T!==Wn&&i.convert(T)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function l(T){const A=T===Ao&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(T!==Ui&&i.convert(T)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==Ci&&!A)}function c(T){if(T==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=n.precision!==void 0?n.precision:"highp";const f=c(u);f!==u&&(console.warn("THREE.WebGLRenderer:",u,"not supported, using",f,"instead."),u=f);const h=n.logarithmicDepthBuffer===!0,p=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),g=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=t.getParameter(t.MAX_TEXTURE_SIZE),_=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),m=t.getParameter(t.MAX_VERTEX_ATTRIBS),d=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),x=t.getParameter(t.MAX_VARYING_VECTORS),v=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),S=g>0,C=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:l,precision:u,logarithmicDepthBuffer:h,maxTextures:p,maxVertexTextures:g,maxTextureSize:y,maxCubemapSize:_,maxAttributes:m,maxVertexUniforms:d,maxVaryings:x,maxFragmentUniforms:v,vertexTextures:S,maxSamples:C}}function b2(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new Lr,l=new je,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,p){const g=h.length!==0||p||i!==0||r;return r=p,i=h.length,g},this.beginShadows=function(){s=!0,f(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,p){n=f(h,p,0)},this.setState=function(h,p,g){const y=h.clippingPlanes,_=h.clipIntersection,m=h.clipShadows,d=t.get(h);if(!r||y===null||y.length===0||s&&!m)s?f(null):u();else{const x=s?0:i,v=x*4;let S=d.clippingState||null;c.value=S,S=f(y,p,v,g);for(let C=0;C!==v;++C)S[C]=n[C];d.clippingState=S,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=x}};function u(){c.value!==n&&(c.value=n,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function f(h,p,g,y){const _=h!==null?h.length:0;let m=null;if(_!==0){if(m=c.value,y!==!0||m===null){const d=g+_*4,x=p.matrixWorldInverse;l.getNormalMatrix(x),(m===null||m.length<d)&&(m=new Float32Array(d));for(let v=0,S=g;v!==_;++v,S+=4)o.copy(h[v]).applyMatrix4(x,l),o.normal.toArray(m,S),m[S+3]=o.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function T2(t){let e=new WeakMap;function n(o,l){return l===cf?o.mapping=ea:l===uf&&(o.mapping=ta),o}function i(o){if(o&&o.isTexture){const l=o.mapping;if(l===cf||l===uf)if(e.has(o)){const c=e.get(o).texture;return n(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const u=new jE(c.height);return u.fromEquirectangularTexture(t,o),e.set(o,u),o.addEventListener("dispose",r),n(u.texture,o.mapping)}else return null}}return o}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class A2 extends V0{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,l=r+n,c=r-n;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,o=s+u*this.view.width,l-=f*this.view.offsetY,c=l-f*this.view.height}this.projectionMatrix.makeOrthographic(s,o,l,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const Is=4,ig=[.125,.215,.35,.446,.526,.582],Ur=20,Zu=new A2,rg=new qe;let Ju=null,ed=0,td=0,nd=!1;const Dr=(1+Math.sqrt(5))/2,Ss=1/Dr,sg=[new z(-Dr,Ss,0),new z(Dr,Ss,0),new z(-Ss,0,Dr),new z(Ss,0,Dr),new z(0,Dr,-Ss),new z(0,Dr,Ss),new z(-1,1,-1),new z(1,1,-1),new z(-1,1,1),new z(1,1,1)];class ag{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){Ju=this._renderer.getRenderTarget(),ed=this._renderer.getActiveCubeFace(),td=this._renderer.getActiveMipmapLevel(),nd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=cg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=lg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ju,ed,td),this._renderer.xr.enabled=nd,e.scissorTest=!1,vl(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===ea||e.mapping===ta?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ju=this._renderer.getRenderTarget(),ed=this._renderer.getActiveCubeFace(),td=this._renderer.getActiveMipmapLevel(),nd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Vn,minFilter:Vn,generateMipmaps:!1,type:Ao,format:Wn,colorSpace:Mr,depthBuffer:!1},r=og(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=og(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=C2(s)),this._blurMaterial=R2(s,e,n)}return r}_compileMaterial(e){const n=new An(this._lodPlanes[0],e);this._renderer.compile(n,Zu)}_sceneToCubeUV(e,n,i,r){const l=new pn(90,1,n,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,h=f.autoClear,p=f.toneMapping;f.getClearColor(rg),f.toneMapping=fr,f.autoClear=!1;const g=new Sc({name:"PMREM.Background",side:an,depthWrite:!1,depthTest:!1}),y=new An(new No,g);let _=!1;const m=e.background;m?m.isColor&&(g.color.copy(m),e.background=null,_=!0):(g.color.copy(rg),_=!0);for(let d=0;d<6;d++){const x=d%3;x===0?(l.up.set(0,c[d],0),l.lookAt(u[d],0,0)):x===1?(l.up.set(0,0,c[d]),l.lookAt(0,u[d],0)):(l.up.set(0,c[d],0),l.lookAt(0,0,u[d]));const v=this._cubeSize;vl(r,x*v,d>2?v:0,v,v),f.setRenderTarget(r),_&&f.render(y,l),f.render(e,l)}y.geometry.dispose(),y.material.dispose(),f.toneMapping=p,f.autoClear=h,e.background=m}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===ea||e.mapping===ta;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=cg()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=lg());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new An(this._lodPlanes[0],s),l=s.uniforms;l.envMap.value=e;const c=this._cubeSize;vl(n,0,0,3*c,2*c),i.setRenderTarget(n),i.render(o,Zu)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),l=sg[(r-s-1)%sg.length];this._blur(e,s-1,s,o,l)}n.autoClear=i}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,l){const c=this._renderer,u=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const f=3,h=new An(this._lodPlanes[r],u),p=u.uniforms,g=this._sizeLods[i]-1,y=isFinite(s)?Math.PI/(2*g):2*Math.PI/(2*Ur-1),_=s/y,m=isFinite(s)?1+Math.floor(f*_):Ur;m>Ur&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ur}`);const d=[];let x=0;for(let A=0;A<Ur;++A){const N=A/_,w=Math.exp(-N*N/2);d.push(w),A===0?x+=w:A<m&&(x+=2*w)}for(let A=0;A<d.length;A++)d[A]=d[A]/x;p.envMap.value=e.texture,p.samples.value=m,p.weights.value=d,p.latitudinal.value=o==="latitudinal",l&&(p.poleAxis.value=l);const{_lodMax:v}=this;p.dTheta.value=y,p.mipInt.value=v-i;const S=this._sizeLods[r],C=3*S*(r>v-Is?r-v+Is:0),T=4*(this._cubeSize-S);vl(n,C,T,3*S,2*S),c.setRenderTarget(n),c.render(h,Zu)}}function C2(t){const e=[],n=[],i=[];let r=t;const s=t-Is+1+ig.length;for(let o=0;o<s;o++){const l=Math.pow(2,r);n.push(l);let c=1/l;o>t-Is?c=ig[o-t+Is-1]:o===0&&(c=0),i.push(c);const u=1/(l-2),f=-u,h=1+u,p=[f,f,h,f,h,h,f,f,h,h,f,h],g=6,y=6,_=3,m=2,d=1,x=new Float32Array(_*y*g),v=new Float32Array(m*y*g),S=new Float32Array(d*y*g);for(let T=0;T<g;T++){const A=T%3*2/3-1,N=T>2?0:-1,w=[A,N,0,A+2/3,N,0,A+2/3,N+1,0,A,N,0,A+2/3,N+1,0,A,N+1,0];x.set(w,_*y*T),v.set(p,m*y*T);const M=[T,T,T,T,T,T];S.set(M,d*y*T)}const C=new $n;C.setAttribute("position",new oi(x,_)),C.setAttribute("uv",new oi(v,m)),C.setAttribute("faceIndex",new oi(S,d)),e.push(C),r>Is&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function og(t,e,n){const i=new Jr(t,e,n);return i.texture.mapping=$c,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function vl(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function R2(t,e,n){const i=new Float32Array(Ur),r=new z(0,1,0);return new vr({name:"SphericalGaussianBlur",defines:{n:Ur,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:ep(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:dr,depthTest:!1,depthWrite:!1})}function lg(){return new vr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ep(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:dr,depthTest:!1,depthWrite:!1})}function cg(){return new vr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ep(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:dr,depthTest:!1,depthWrite:!1})}function ep(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function P2(t){let e=new WeakMap,n=null;function i(l){if(l&&l.isTexture){const c=l.mapping,u=c===cf||c===uf,f=c===ea||c===ta;if(u||f){let h=e.get(l);const p=h!==void 0?h.texture.pmremVersion:0;if(l.isRenderTargetTexture&&l.pmremVersion!==p)return n===null&&(n=new ag(t)),h=u?n.fromEquirectangular(l,h):n.fromCubemap(l,h),h.texture.pmremVersion=l.pmremVersion,e.set(l,h),h.texture;if(h!==void 0)return h.texture;{const g=l.image;return u&&g&&g.height>0||f&&g&&r(g)?(n===null&&(n=new ag(t)),h=u?n.fromEquirectangular(l):n.fromCubemap(l),h.texture.pmremVersion=l.pmremVersion,e.set(l,h),l.addEventListener("dispose",s),h.texture):null}}}return l}function r(l){let c=0;const u=6;for(let f=0;f<u;f++)l[f]!==void 0&&c++;return c===u}function s(l){const c=l.target;c.removeEventListener("dispose",s);const u=e.get(c);u!==void 0&&(e.delete(c),u.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function N2(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&Ka("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function L2(t,e,n,i){const r={},s=new WeakMap;function o(h){const p=h.target;p.index!==null&&e.remove(p.index);for(const y in p.attributes)e.remove(p.attributes[y]);for(const y in p.morphAttributes){const _=p.morphAttributes[y];for(let m=0,d=_.length;m<d;m++)e.remove(_[m])}p.removeEventListener("dispose",o),delete r[p.id];const g=s.get(p);g&&(e.remove(g),s.delete(p)),i.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,n.memory.geometries--}function l(h,p){return r[p.id]===!0||(p.addEventListener("dispose",o),r[p.id]=!0,n.memory.geometries++),p}function c(h){const p=h.attributes;for(const y in p)e.update(p[y],t.ARRAY_BUFFER);const g=h.morphAttributes;for(const y in g){const _=g[y];for(let m=0,d=_.length;m<d;m++)e.update(_[m],t.ARRAY_BUFFER)}}function u(h){const p=[],g=h.index,y=h.attributes.position;let _=0;if(g!==null){const x=g.array;_=g.version;for(let v=0,S=x.length;v<S;v+=3){const C=x[v+0],T=x[v+1],A=x[v+2];p.push(C,T,T,A,A,C)}}else if(y!==void 0){const x=y.array;_=y.version;for(let v=0,S=x.length/3-1;v<S;v+=3){const C=v+0,T=v+1,A=v+2;p.push(C,T,T,A,A,C)}}else return;const m=new(I0(p)?B0:O0)(p,1);m.version=_;const d=s.get(h);d&&e.remove(d),s.set(h,m)}function f(h){const p=s.get(h);if(p){const g=h.index;g!==null&&p.version<g.version&&u(h)}else u(h);return s.get(h)}return{get:l,update:c,getWireframeAttribute:f}}function D2(t,e,n){let i;function r(p){i=p}let s,o;function l(p){s=p.type,o=p.bytesPerElement}function c(p,g){t.drawElements(i,g,s,p*o),n.update(g,i,1)}function u(p,g,y){y!==0&&(t.drawElementsInstanced(i,g,s,p*o,y),n.update(g,i,y))}function f(p,g,y){if(y===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,g,0,s,p,0,y);let m=0;for(let d=0;d<y;d++)m+=g[d];n.update(m,i,1)}function h(p,g,y,_){if(y===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let d=0;d<p.length;d++)u(p[d]/o,g[d],_[d]);else{m.multiDrawElementsInstancedWEBGL(i,g,0,s,p,0,_,0,y);let d=0;for(let x=0;x<y;x++)d+=g[x];for(let x=0;x<_.length;x++)n.update(d,i,_[x])}}this.setMode=r,this.setIndex=l,this.render=c,this.renderInstances=u,this.renderMultiDraw=f,this.renderMultiDrawInstances=h}function I2(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,l){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=l*(s/3);break;case t.LINES:n.lines+=l*(s/2);break;case t.LINE_STRIP:n.lines+=l*(s-1);break;case t.LINE_LOOP:n.lines+=l*s;break;case t.POINTS:n.points+=l*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function U2(t,e,n){const i=new WeakMap,r=new ot;function s(o,l,c){const u=o.morphTargetInfluences,f=l.morphAttributes.position||l.morphAttributes.normal||l.morphAttributes.color,h=f!==void 0?f.length:0;let p=i.get(l);if(p===void 0||p.count!==h){let M=function(){N.dispose(),i.delete(l),l.removeEventListener("dispose",M)};var g=M;p!==void 0&&p.texture.dispose();const y=l.morphAttributes.position!==void 0,_=l.morphAttributes.normal!==void 0,m=l.morphAttributes.color!==void 0,d=l.morphAttributes.position||[],x=l.morphAttributes.normal||[],v=l.morphAttributes.color||[];let S=0;y===!0&&(S=1),_===!0&&(S=2),m===!0&&(S=3);let C=l.attributes.position.count*S,T=1;C>e.maxTextureSize&&(T=Math.ceil(C/e.maxTextureSize),C=e.maxTextureSize);const A=new Float32Array(C*T*4*h),N=new k0(A,C,T,h);N.type=Ci,N.needsUpdate=!0;const w=S*4;for(let R=0;R<h;R++){const G=d[R],O=x[R],q=v[R],$=C*T*4*R;for(let D=0;D<G.count;D++){const V=D*w;y===!0&&(r.fromBufferAttribute(G,D),A[$+V+0]=r.x,A[$+V+1]=r.y,A[$+V+2]=r.z,A[$+V+3]=0),_===!0&&(r.fromBufferAttribute(O,D),A[$+V+4]=r.x,A[$+V+5]=r.y,A[$+V+6]=r.z,A[$+V+7]=0),m===!0&&(r.fromBufferAttribute(q,D),A[$+V+8]=r.x,A[$+V+9]=r.y,A[$+V+10]=r.z,A[$+V+11]=q.itemSize===4?r.w:1)}}p={count:h,texture:N,size:new Fe(C,T)},i.set(l,p),l.addEventListener("dispose",M)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(t,"morphTexture",o.morphTexture,n);else{let y=0;for(let m=0;m<u.length;m++)y+=u[m];const _=l.morphTargetsRelative?1:1-y;c.getUniforms().setValue(t,"morphTargetBaseInfluence",_),c.getUniforms().setValue(t,"morphTargetInfluences",u)}c.getUniforms().setValue(t,"morphTargetsTexture",p.texture,n),c.getUniforms().setValue(t,"morphTargetsTextureSize",p.size)}return{update:s}}function k2(t,e,n,i){let r=new WeakMap;function s(c){const u=i.render.frame,f=c.geometry,h=e.get(c,f);if(r.get(h)!==u&&(e.update(h),r.set(h,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==u&&(n.update(c.instanceMatrix,t.ARRAY_BUFFER),c.instanceColor!==null&&n.update(c.instanceColor,t.ARRAY_BUFFER),r.set(c,u))),c.isSkinnedMesh){const p=c.skeleton;r.get(p)!==u&&(p.update(),r.set(p,u))}return h}function o(){r=new WeakMap}function l(c){const u=c.target;u.removeEventListener("dispose",l),n.remove(u.instanceMatrix),u.instanceColor!==null&&n.remove(u.instanceColor)}return{update:s,dispose:o}}class X0 extends on{constructor(e,n,i,r,s,o,l,c,u,f=Ws){if(f!==Ws&&f!==ia)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&f===Ws&&(i=Zr),i===void 0&&f===ia&&(i=na),super(null,r,s,o,l,c,f,i,u),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=l!==void 0?l:Tn,this.minFilter=c!==void 0?c:Tn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const q0=new on,ug=new X0(1,1),$0=new k0,Y0=new SE,K0=new W0,dg=[],fg=[],hg=new Float32Array(16),pg=new Float32Array(9),mg=new Float32Array(4);function ga(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=dg[r];if(s===void 0&&(s=new Float32Array(r),dg[r]=s),e!==0){i.toArray(s,0);for(let o=1,l=0;o!==e;++o)l+=n,t[o].toArray(s,l)}return s}function Rt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Pt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Zc(t,e){let n=fg[e];n===void 0&&(n=new Int32Array(e),fg[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function j2(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function z2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Rt(n,e))return;t.uniform2fv(this.addr,e),Pt(n,e)}}function F2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Rt(n,e))return;t.uniform3fv(this.addr,e),Pt(n,e)}}function O2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Rt(n,e))return;t.uniform4fv(this.addr,e),Pt(n,e)}}function B2(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Rt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Pt(n,e)}else{if(Rt(n,i))return;mg.set(i),t.uniformMatrix2fv(this.addr,!1,mg),Pt(n,i)}}function H2(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Rt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Pt(n,e)}else{if(Rt(n,i))return;pg.set(i),t.uniformMatrix3fv(this.addr,!1,pg),Pt(n,i)}}function V2(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Rt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Pt(n,e)}else{if(Rt(n,i))return;hg.set(i),t.uniformMatrix4fv(this.addr,!1,hg),Pt(n,i)}}function W2(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function G2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Rt(n,e))return;t.uniform2iv(this.addr,e),Pt(n,e)}}function X2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Rt(n,e))return;t.uniform3iv(this.addr,e),Pt(n,e)}}function q2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Rt(n,e))return;t.uniform4iv(this.addr,e),Pt(n,e)}}function $2(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function Y2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Rt(n,e))return;t.uniform2uiv(this.addr,e),Pt(n,e)}}function K2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Rt(n,e))return;t.uniform3uiv(this.addr,e),Pt(n,e)}}function Q2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Rt(n,e))return;t.uniform4uiv(this.addr,e),Pt(n,e)}}function Z2(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(ug.compareFunction=D0,s=ug):s=q0,n.setTexture2D(e||s,r)}function J2(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||Y0,r)}function eT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||K0,r)}function tT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||$0,r)}function nT(t){switch(t){case 5126:return j2;case 35664:return z2;case 35665:return F2;case 35666:return O2;case 35674:return B2;case 35675:return H2;case 35676:return V2;case 5124:case 35670:return W2;case 35667:case 35671:return G2;case 35668:case 35672:return X2;case 35669:case 35673:return q2;case 5125:return $2;case 36294:return Y2;case 36295:return K2;case 36296:return Q2;case 35678:case 36198:case 36298:case 36306:case 35682:return Z2;case 35679:case 36299:case 36307:return J2;case 35680:case 36300:case 36308:case 36293:return eT;case 36289:case 36303:case 36311:case 36292:return tT}}function iT(t,e){t.uniform1fv(this.addr,e)}function rT(t,e){const n=ga(e,this.size,2);t.uniform2fv(this.addr,n)}function sT(t,e){const n=ga(e,this.size,3);t.uniform3fv(this.addr,n)}function aT(t,e){const n=ga(e,this.size,4);t.uniform4fv(this.addr,n)}function oT(t,e){const n=ga(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function lT(t,e){const n=ga(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function cT(t,e){const n=ga(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function uT(t,e){t.uniform1iv(this.addr,e)}function dT(t,e){t.uniform2iv(this.addr,e)}function fT(t,e){t.uniform3iv(this.addr,e)}function hT(t,e){t.uniform4iv(this.addr,e)}function pT(t,e){t.uniform1uiv(this.addr,e)}function mT(t,e){t.uniform2uiv(this.addr,e)}function gT(t,e){t.uniform3uiv(this.addr,e)}function xT(t,e){t.uniform4uiv(this.addr,e)}function vT(t,e,n){const i=this.cache,r=e.length,s=Zc(n,r);Rt(i,s)||(t.uniform1iv(this.addr,s),Pt(i,s));for(let o=0;o!==r;++o)n.setTexture2D(e[o]||q0,s[o])}function yT(t,e,n){const i=this.cache,r=e.length,s=Zc(n,r);Rt(i,s)||(t.uniform1iv(this.addr,s),Pt(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||Y0,s[o])}function _T(t,e,n){const i=this.cache,r=e.length,s=Zc(n,r);Rt(i,s)||(t.uniform1iv(this.addr,s),Pt(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||K0,s[o])}function ST(t,e,n){const i=this.cache,r=e.length,s=Zc(n,r);Rt(i,s)||(t.uniform1iv(this.addr,s),Pt(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||$0,s[o])}function MT(t){switch(t){case 5126:return iT;case 35664:return rT;case 35665:return sT;case 35666:return aT;case 35674:return oT;case 35675:return lT;case 35676:return cT;case 5124:case 35670:return uT;case 35667:case 35671:return dT;case 35668:case 35672:return fT;case 35669:case 35673:return hT;case 5125:return pT;case 36294:return mT;case 36295:return gT;case 36296:return xT;case 35678:case 36198:case 36298:case 36306:case 35682:return vT;case 35679:case 36299:case 36307:return yT;case 35680:case 36300:case 36308:case 36293:return _T;case 36289:case 36303:case 36311:case 36292:return ST}}class ET{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=nT(n.type)}}class wT{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=MT(n.type)}}class bT{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const l=r[s];l.setValue(e,n[l.id],i)}}}const id=/(\w+)(\])?(\[|\.)?/g;function gg(t,e){t.seq.push(e),t.map[e.id]=e}function TT(t,e,n){const i=t.name,r=i.length;for(id.lastIndex=0;;){const s=id.exec(i),o=id.lastIndex;let l=s[1];const c=s[2]==="]",u=s[3];if(c&&(l=l|0),u===void 0||u==="["&&o+2===r){gg(n,u===void 0?new ET(l,t,e):new wT(l,t,e));break}else{let h=n.map[l];h===void 0&&(h=new bT(l),gg(n,h)),n=h}}}class Fl{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),o=e.getUniformLocation(n,s.name);TT(s,o,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const l=n[s],c=i[l.id];c.needsUpdate!==!1&&l.setValue(e,c.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function xg(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const AT=37297;let CT=0;function RT(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const l=o+1;i.push(`${l===e?">":" "} ${l}: ${n[o]}`)}return i.join(`
`)}function PT(t){const e=Ze.getPrimaries(Ze.workingColorSpace),n=Ze.getPrimaries(t);let i;switch(e===n?i="":e===vc&&n===xc?i="LinearDisplayP3ToLinearSRGB":e===xc&&n===vc&&(i="LinearSRGBToLinearDisplayP3"),t){case Mr:case Yc:return[i,"LinearTransferOETF"];case Zn:case Zh:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[i,"LinearTransferOETF"]}}function vg(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+RT(t.getShaderSource(e),o)}else return r}function NT(t,e){const n=PT(e);return`vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function LT(t,e){let n;switch(e){case YM:n="Linear";break;case KM:n="Reinhard";break;case QM:n="Cineon";break;case ZM:n="ACESFilmic";break;case eE:n="AgX";break;case tE:n="Neutral";break;case JM:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const yl=new z;function DT(){Ze.getLuminanceCoefficients(yl);const t=yl.x.toFixed(4),e=yl.y.toFixed(4),n=yl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function IT(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Oa).join(`
`)}function UT(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function kT(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let l=1;s.type===t.FLOAT_MAT2&&(l=2),s.type===t.FLOAT_MAT3&&(l=3),s.type===t.FLOAT_MAT4&&(l=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:l}}return n}function Oa(t){return t!==""}function yg(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function _g(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const jT=/^[ \t]*#include +<([\w\d./]+)>/gm;function Of(t){return t.replace(jT,FT)}const zT=new Map;function FT(t,e){let n=ke[e];if(n===void 0){const i=zT.get(e);if(i!==void 0)n=ke[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Of(n)}const OT=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Sg(t){return t.replace(OT,BT)}function BT(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Mg(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function HT(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===y0?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===SM?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===Mi&&(e="SHADOWMAP_TYPE_VSM"),e}function VT(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case ea:case ta:e="ENVMAP_TYPE_CUBE";break;case $c:e="ENVMAP_TYPE_CUBE_UV";break}return e}function WT(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case ta:e="ENVMAP_MODE_REFRACTION";break}return e}function GT(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case _0:e="ENVMAP_BLENDING_MULTIPLY";break;case qM:e="ENVMAP_BLENDING_MIX";break;case $M:e="ENVMAP_BLENDING_ADD";break}return e}function XT(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function qT(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,l=n.fragmentShader;const c=HT(n),u=VT(n),f=WT(n),h=GT(n),p=XT(n),g=IT(n),y=UT(s),_=r.createProgram();let m,d,x=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y].filter(Oa).join(`
`),m.length>0&&(m+=`
`),d=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y].filter(Oa).join(`
`),d.length>0&&(d+=`
`)):(m=[Mg(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+f:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+c:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Oa).join(`
`),d=[Mg(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.envMap?"#define "+f:"",n.envMap?"#define "+h:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+c:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==fr?"#define TONE_MAPPING":"",n.toneMapping!==fr?ke.tonemapping_pars_fragment:"",n.toneMapping!==fr?LT("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",ke.colorspace_pars_fragment,NT("linearToOutputTexel",n.outputColorSpace),DT(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Oa).join(`
`)),o=Of(o),o=yg(o,n),o=_g(o,n),l=Of(l),l=yg(l,n),l=_g(l,n),o=Sg(o),l=Sg(l),n.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,m=[g,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",n.glslVersion===jm?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===jm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const v=x+m+o,S=x+d+l,C=xg(r,r.VERTEX_SHADER,v),T=xg(r,r.FRAGMENT_SHADER,S);r.attachShader(_,C),r.attachShader(_,T),n.index0AttributeName!==void 0?r.bindAttribLocation(_,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function A(R){if(t.debug.checkShaderErrors){const G=r.getProgramInfoLog(_).trim(),O=r.getShaderInfoLog(C).trim(),q=r.getShaderInfoLog(T).trim();let $=!0,D=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if($=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,_,C,T);else{const V=vg(r,C,"vertex"),U=vg(r,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+G+`
`+V+`
`+U)}else G!==""?console.warn("THREE.WebGLProgram: Program Info Log:",G):(O===""||q==="")&&(D=!1);D&&(R.diagnostics={runnable:$,programLog:G,vertexShader:{log:O,prefix:m},fragmentShader:{log:q,prefix:d}})}r.deleteShader(C),r.deleteShader(T),N=new Fl(r,_),w=kT(r,_)}let N;this.getUniforms=function(){return N===void 0&&A(this),N};let w;this.getAttributes=function(){return w===void 0&&A(this),w};let M=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=r.getProgramParameter(_,AT)),M},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=CT++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=C,this.fragmentShader=T,this}let $T=0;class YT{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new KT(e),n.set(e,i)),i}}class KT{constructor(e){this.id=$T++,this.code=e,this.usedTimes=0}}function QT(t,e,n,i,r,s,o){const l=new z0,c=new YT,u=new Set,f=[],h=r.logarithmicDepthBuffer,p=r.vertexTextures;let g=r.precision;const y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(w){return u.add(w),w===0?"uv":`uv${w}`}function m(w,M,R,G,O){const q=G.fog,$=O.geometry,D=w.isMeshStandardMaterial?G.environment:null,V=(w.isMeshStandardMaterial?n:e).get(w.envMap||D),U=V&&V.mapping===$c?V.image.height:null,Y=y[w.type];w.precision!==null&&(g=r.getMaxPrecision(w.precision),g!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",g,"instead."));const Z=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,oe=Z!==void 0?Z.length:0;let Se=0;$.morphAttributes.position!==void 0&&(Se=1),$.morphAttributes.normal!==void 0&&(Se=2),$.morphAttributes.color!==void 0&&(Se=3);let Be,X,ie,he;if(Y){const $e=Jn[Y];Be=$e.vertexShader,X=$e.fragmentShader}else Be=w.vertexShader,X=w.fragmentShader,c.update(w),ie=c.getVertexShaderID(w),he=c.getFragmentShaderID(w);const de=t.getRenderTarget(),Ce=O.isInstancedMesh===!0,De=O.isBatchedMesh===!0,He=!!w.map,gt=!!w.matcap,I=!!V,St=!!w.aoMap,Je=!!w.lightMap,tt=!!w.bumpMap,we=!!w.normalMap,Mt=!!w.displacementMap,Ne=!!w.emissiveMap,Ie=!!w.metalnessMap,L=!!w.roughnessMap,E=w.anisotropy>0,W=w.clearcoat>0,J=w.dispersion>0,te=w.iridescence>0,ee=w.sheen>0,be=w.transmission>0,ue=E&&!!w.anisotropyMap,xe=W&&!!w.clearcoatMap,Ue=W&&!!w.clearcoatNormalMap,re=W&&!!w.clearcoatRoughnessMap,ge=te&&!!w.iridescenceMap,Ve=te&&!!w.iridescenceThicknessMap,Pe=ee&&!!w.sheenColorMap,ve=ee&&!!w.sheenRoughnessMap,Le=!!w.specularMap,ze=!!w.specularColorMap,ut=!!w.specularIntensityMap,k=be&&!!w.transmissionMap,se=be&&!!w.thicknessMap,K=!!w.gradientMap,Q=!!w.alphaMap,le=w.alphaTest>0,Te=!!w.alphaHash,Ge=!!w.extensions;let Et=fr;w.toneMapped&&(de===null||de.isXRRenderTarget===!0)&&(Et=t.toneMapping);const It={shaderID:Y,shaderType:w.type,shaderName:w.name,vertexShader:Be,fragmentShader:X,defines:w.defines,customVertexShaderID:ie,customFragmentShaderID:he,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:g,batching:De,batchingColor:De&&O._colorsTexture!==null,instancing:Ce,instancingColor:Ce&&O.instanceColor!==null,instancingMorph:Ce&&O.morphTexture!==null,supportsVertexTextures:p,outputColorSpace:de===null?t.outputColorSpace:de.isXRRenderTarget===!0?de.texture.colorSpace:Mr,alphaToCoverage:!!w.alphaToCoverage,map:He,matcap:gt,envMap:I,envMapMode:I&&V.mapping,envMapCubeUVHeight:U,aoMap:St,lightMap:Je,bumpMap:tt,normalMap:we,displacementMap:p&&Mt,emissiveMap:Ne,normalMapObjectSpace:we&&w.normalMapType===sE,normalMapTangentSpace:we&&w.normalMapType===L0,metalnessMap:Ie,roughnessMap:L,anisotropy:E,anisotropyMap:ue,clearcoat:W,clearcoatMap:xe,clearcoatNormalMap:Ue,clearcoatRoughnessMap:re,dispersion:J,iridescence:te,iridescenceMap:ge,iridescenceThicknessMap:Ve,sheen:ee,sheenColorMap:Pe,sheenRoughnessMap:ve,specularMap:Le,specularColorMap:ze,specularIntensityMap:ut,transmission:be,transmissionMap:k,thicknessMap:se,gradientMap:K,opaque:w.transparent===!1&&w.blending===Vs&&w.alphaToCoverage===!1,alphaMap:Q,alphaTest:le,alphaHash:Te,combine:w.combine,mapUv:He&&_(w.map.channel),aoMapUv:St&&_(w.aoMap.channel),lightMapUv:Je&&_(w.lightMap.channel),bumpMapUv:tt&&_(w.bumpMap.channel),normalMapUv:we&&_(w.normalMap.channel),displacementMapUv:Mt&&_(w.displacementMap.channel),emissiveMapUv:Ne&&_(w.emissiveMap.channel),metalnessMapUv:Ie&&_(w.metalnessMap.channel),roughnessMapUv:L&&_(w.roughnessMap.channel),anisotropyMapUv:ue&&_(w.anisotropyMap.channel),clearcoatMapUv:xe&&_(w.clearcoatMap.channel),clearcoatNormalMapUv:Ue&&_(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:re&&_(w.clearcoatRoughnessMap.channel),iridescenceMapUv:ge&&_(w.iridescenceMap.channel),iridescenceThicknessMapUv:Ve&&_(w.iridescenceThicknessMap.channel),sheenColorMapUv:Pe&&_(w.sheenColorMap.channel),sheenRoughnessMapUv:ve&&_(w.sheenRoughnessMap.channel),specularMapUv:Le&&_(w.specularMap.channel),specularColorMapUv:ze&&_(w.specularColorMap.channel),specularIntensityMapUv:ut&&_(w.specularIntensityMap.channel),transmissionMapUv:k&&_(w.transmissionMap.channel),thicknessMapUv:se&&_(w.thicknessMap.channel),alphaMapUv:Q&&_(w.alphaMap.channel),vertexTangents:!!$.attributes.tangent&&(we||E),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!$.attributes.uv&&(He||Q),fog:!!q,useFog:w.fog===!0,fogExp2:!!q&&q.isFogExp2,flatShading:w.flatShading===!0,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:O.isSkinnedMesh===!0,morphTargets:$.morphAttributes.position!==void 0,morphNormals:$.morphAttributes.normal!==void 0,morphColors:$.morphAttributes.color!==void 0,morphTargetsCount:oe,morphTextureStride:Se,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:w.dithering,shadowMapEnabled:t.shadowMap.enabled&&R.length>0,shadowMapType:t.shadowMap.type,toneMapping:Et,decodeVideoTexture:He&&w.map.isVideoTexture===!0&&Ze.getTransfer(w.map.colorSpace)===at,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===bi,flipSided:w.side===an,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:Ge&&w.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ge&&w.extensions.multiDraw===!0||De)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return It.vertexUv1s=u.has(1),It.vertexUv2s=u.has(2),It.vertexUv3s=u.has(3),u.clear(),It}function d(w){const M=[];if(w.shaderID?M.push(w.shaderID):(M.push(w.customVertexShaderID),M.push(w.customFragmentShaderID)),w.defines!==void 0)for(const R in w.defines)M.push(R),M.push(w.defines[R]);return w.isRawShaderMaterial===!1&&(x(M,w),v(M,w),M.push(t.outputColorSpace)),M.push(w.customProgramCacheKey),M.join()}function x(w,M){w.push(M.precision),w.push(M.outputColorSpace),w.push(M.envMapMode),w.push(M.envMapCubeUVHeight),w.push(M.mapUv),w.push(M.alphaMapUv),w.push(M.lightMapUv),w.push(M.aoMapUv),w.push(M.bumpMapUv),w.push(M.normalMapUv),w.push(M.displacementMapUv),w.push(M.emissiveMapUv),w.push(M.metalnessMapUv),w.push(M.roughnessMapUv),w.push(M.anisotropyMapUv),w.push(M.clearcoatMapUv),w.push(M.clearcoatNormalMapUv),w.push(M.clearcoatRoughnessMapUv),w.push(M.iridescenceMapUv),w.push(M.iridescenceThicknessMapUv),w.push(M.sheenColorMapUv),w.push(M.sheenRoughnessMapUv),w.push(M.specularMapUv),w.push(M.specularColorMapUv),w.push(M.specularIntensityMapUv),w.push(M.transmissionMapUv),w.push(M.thicknessMapUv),w.push(M.combine),w.push(M.fogExp2),w.push(M.sizeAttenuation),w.push(M.morphTargetsCount),w.push(M.morphAttributeCount),w.push(M.numDirLights),w.push(M.numPointLights),w.push(M.numSpotLights),w.push(M.numSpotLightMaps),w.push(M.numHemiLights),w.push(M.numRectAreaLights),w.push(M.numDirLightShadows),w.push(M.numPointLightShadows),w.push(M.numSpotLightShadows),w.push(M.numSpotLightShadowsWithMaps),w.push(M.numLightProbes),w.push(M.shadowMapType),w.push(M.toneMapping),w.push(M.numClippingPlanes),w.push(M.numClipIntersection),w.push(M.depthPacking)}function v(w,M){l.disableAll(),M.supportsVertexTextures&&l.enable(0),M.instancing&&l.enable(1),M.instancingColor&&l.enable(2),M.instancingMorph&&l.enable(3),M.matcap&&l.enable(4),M.envMap&&l.enable(5),M.normalMapObjectSpace&&l.enable(6),M.normalMapTangentSpace&&l.enable(7),M.clearcoat&&l.enable(8),M.iridescence&&l.enable(9),M.alphaTest&&l.enable(10),M.vertexColors&&l.enable(11),M.vertexAlphas&&l.enable(12),M.vertexUv1s&&l.enable(13),M.vertexUv2s&&l.enable(14),M.vertexUv3s&&l.enable(15),M.vertexTangents&&l.enable(16),M.anisotropy&&l.enable(17),M.alphaHash&&l.enable(18),M.batching&&l.enable(19),M.dispersion&&l.enable(20),M.batchingColor&&l.enable(21),w.push(l.mask),l.disableAll(),M.fog&&l.enable(0),M.useFog&&l.enable(1),M.flatShading&&l.enable(2),M.logarithmicDepthBuffer&&l.enable(3),M.skinning&&l.enable(4),M.morphTargets&&l.enable(5),M.morphNormals&&l.enable(6),M.morphColors&&l.enable(7),M.premultipliedAlpha&&l.enable(8),M.shadowMapEnabled&&l.enable(9),M.doubleSided&&l.enable(10),M.flipSided&&l.enable(11),M.useDepthPacking&&l.enable(12),M.dithering&&l.enable(13),M.transmission&&l.enable(14),M.sheen&&l.enable(15),M.opaque&&l.enable(16),M.pointsUvs&&l.enable(17),M.decodeVideoTexture&&l.enable(18),M.alphaToCoverage&&l.enable(19),w.push(l.mask)}function S(w){const M=y[w.type];let R;if(M){const G=Jn[M];R=DE.clone(G.uniforms)}else R=w.uniforms;return R}function C(w,M){let R;for(let G=0,O=f.length;G<O;G++){const q=f[G];if(q.cacheKey===M){R=q,++R.usedTimes;break}}return R===void 0&&(R=new qT(t,M,w,s),f.push(R)),R}function T(w){if(--w.usedTimes===0){const M=f.indexOf(w);f[M]=f[f.length-1],f.pop(),w.destroy()}}function A(w){c.remove(w)}function N(){c.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:S,acquireProgram:C,releaseProgram:T,releaseShaderCache:A,programs:f,dispose:N}}function ZT(){let t=new WeakMap;function e(o){return t.has(o)}function n(o){let l=t.get(o);return l===void 0&&(l={},t.set(o,l)),l}function i(o){t.delete(o)}function r(o,l,c){t.get(o)[l]=c}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function JT(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function Eg(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function wg(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(h,p,g,y,_,m){let d=t[e];return d===void 0?(d={id:h.id,object:h,geometry:p,material:g,groupOrder:y,renderOrder:h.renderOrder,z:_,group:m},t[e]=d):(d.id=h.id,d.object=h,d.geometry=p,d.material=g,d.groupOrder=y,d.renderOrder=h.renderOrder,d.z=_,d.group=m),e++,d}function l(h,p,g,y,_,m){const d=o(h,p,g,y,_,m);g.transmission>0?i.push(d):g.transparent===!0?r.push(d):n.push(d)}function c(h,p,g,y,_,m){const d=o(h,p,g,y,_,m);g.transmission>0?i.unshift(d):g.transparent===!0?r.unshift(d):n.unshift(d)}function u(h,p){n.length>1&&n.sort(h||JT),i.length>1&&i.sort(p||Eg),r.length>1&&r.sort(p||Eg)}function f(){for(let h=e,p=t.length;h<p;h++){const g=t[h];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:l,unshift:c,finish:f,sort:u}}function eA(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new wg,t.set(i,[o])):r>=s.length?(o=new wg,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function tA(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new z,color:new qe};break;case"SpotLight":n={position:new z,direction:new z,color:new qe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new z,color:new qe,distance:0,decay:0};break;case"HemisphereLight":n={direction:new z,skyColor:new qe,groundColor:new qe};break;case"RectAreaLight":n={color:new qe,position:new z,halfWidth:new z,halfHeight:new z};break}return t[e.id]=n,n}}}function nA(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Fe};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Fe};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Fe,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let iA=0;function rA(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function sA(t){const e=new tA,n=nA(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)i.probe.push(new z);const r=new z,s=new pt,o=new pt;function l(u){let f=0,h=0,p=0;for(let w=0;w<9;w++)i.probe[w].set(0,0,0);let g=0,y=0,_=0,m=0,d=0,x=0,v=0,S=0,C=0,T=0,A=0;u.sort(rA);for(let w=0,M=u.length;w<M;w++){const R=u[w],G=R.color,O=R.intensity,q=R.distance,$=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)f+=G.r*O,h+=G.g*O,p+=G.b*O;else if(R.isLightProbe){for(let D=0;D<9;D++)i.probe[D].addScaledVector(R.sh.coefficients[D],O);A++}else if(R.isDirectionalLight){const D=e.get(R);if(D.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){const V=R.shadow,U=n.get(R);U.shadowIntensity=V.intensity,U.shadowBias=V.bias,U.shadowNormalBias=V.normalBias,U.shadowRadius=V.radius,U.shadowMapSize=V.mapSize,i.directionalShadow[g]=U,i.directionalShadowMap[g]=$,i.directionalShadowMatrix[g]=R.shadow.matrix,x++}i.directional[g]=D,g++}else if(R.isSpotLight){const D=e.get(R);D.position.setFromMatrixPosition(R.matrixWorld),D.color.copy(G).multiplyScalar(O),D.distance=q,D.coneCos=Math.cos(R.angle),D.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),D.decay=R.decay,i.spot[_]=D;const V=R.shadow;if(R.map&&(i.spotLightMap[C]=R.map,C++,V.updateMatrices(R),R.castShadow&&T++),i.spotLightMatrix[_]=V.matrix,R.castShadow){const U=n.get(R);U.shadowIntensity=V.intensity,U.shadowBias=V.bias,U.shadowNormalBias=V.normalBias,U.shadowRadius=V.radius,U.shadowMapSize=V.mapSize,i.spotShadow[_]=U,i.spotShadowMap[_]=$,S++}_++}else if(R.isRectAreaLight){const D=e.get(R);D.color.copy(G).multiplyScalar(O),D.halfWidth.set(R.width*.5,0,0),D.halfHeight.set(0,R.height*.5,0),i.rectArea[m]=D,m++}else if(R.isPointLight){const D=e.get(R);if(D.color.copy(R.color).multiplyScalar(R.intensity),D.distance=R.distance,D.decay=R.decay,R.castShadow){const V=R.shadow,U=n.get(R);U.shadowIntensity=V.intensity,U.shadowBias=V.bias,U.shadowNormalBias=V.normalBias,U.shadowRadius=V.radius,U.shadowMapSize=V.mapSize,U.shadowCameraNear=V.camera.near,U.shadowCameraFar=V.camera.far,i.pointShadow[y]=U,i.pointShadowMap[y]=$,i.pointShadowMatrix[y]=R.shadow.matrix,v++}i.point[y]=D,y++}else if(R.isHemisphereLight){const D=e.get(R);D.skyColor.copy(R.color).multiplyScalar(O),D.groundColor.copy(R.groundColor).multiplyScalar(O),i.hemi[d]=D,d++}}m>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ce.LTC_FLOAT_1,i.rectAreaLTC2=ce.LTC_FLOAT_2):(i.rectAreaLTC1=ce.LTC_HALF_1,i.rectAreaLTC2=ce.LTC_HALF_2)),i.ambient[0]=f,i.ambient[1]=h,i.ambient[2]=p;const N=i.hash;(N.directionalLength!==g||N.pointLength!==y||N.spotLength!==_||N.rectAreaLength!==m||N.hemiLength!==d||N.numDirectionalShadows!==x||N.numPointShadows!==v||N.numSpotShadows!==S||N.numSpotMaps!==C||N.numLightProbes!==A)&&(i.directional.length=g,i.spot.length=_,i.rectArea.length=m,i.point.length=y,i.hemi.length=d,i.directionalShadow.length=x,i.directionalShadowMap.length=x,i.pointShadow.length=v,i.pointShadowMap.length=v,i.spotShadow.length=S,i.spotShadowMap.length=S,i.directionalShadowMatrix.length=x,i.pointShadowMatrix.length=v,i.spotLightMatrix.length=S+C-T,i.spotLightMap.length=C,i.numSpotLightShadowsWithMaps=T,i.numLightProbes=A,N.directionalLength=g,N.pointLength=y,N.spotLength=_,N.rectAreaLength=m,N.hemiLength=d,N.numDirectionalShadows=x,N.numPointShadows=v,N.numSpotShadows=S,N.numSpotMaps=C,N.numLightProbes=A,i.version=iA++)}function c(u,f){let h=0,p=0,g=0,y=0,_=0;const m=f.matrixWorldInverse;for(let d=0,x=u.length;d<x;d++){const v=u[d];if(v.isDirectionalLight){const S=i.directional[h];S.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(m),h++}else if(v.isSpotLight){const S=i.spot[g];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(m),S.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(m),g++}else if(v.isRectAreaLight){const S=i.rectArea[y];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(m),o.identity(),s.copy(v.matrixWorld),s.premultiply(m),o.extractRotation(s),S.halfWidth.set(v.width*.5,0,0),S.halfHeight.set(0,v.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),y++}else if(v.isPointLight){const S=i.point[p];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(m),p++}else if(v.isHemisphereLight){const S=i.hemi[_];S.direction.setFromMatrixPosition(v.matrixWorld),S.direction.transformDirection(m),_++}}}return{setup:l,setupView:c,state:i}}function bg(t){const e=new sA(t),n=[],i=[];function r(f){u.camera=f,n.length=0,i.length=0}function s(f){n.push(f)}function o(f){i.push(f)}function l(){e.setup(n)}function c(f){e.setupView(n,f)}const u={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:u,setupLights:l,setupLightsView:c,pushLight:s,pushShadow:o}}function aA(t){let e=new WeakMap;function n(r,s=0){const o=e.get(r);let l;return o===void 0?(l=new bg(t),e.set(r,[l])):s>=o.length?(l=new bg(t),o.push(l)):l=o[s],l}function i(){e=new WeakMap}return{get:n,dispose:i}}class oA extends ma{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=iE,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class lA extends ma{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const cA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,uA=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function dA(t,e,n){let i=new Jh;const r=new Fe,s=new Fe,o=new ot,l=new oA({depthPacking:rE}),c=new lA,u={},f=n.maxTextureSize,h={[xr]:an,[an]:xr,[bi]:bi},p=new vr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Fe},radius:{value:4}},vertexShader:cA,fragmentShader:uA}),g=p.clone();g.defines.HORIZONTAL_PASS=1;const y=new $n;y.setAttribute("position",new oi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new An(y,p),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=y0;let d=this.type;this.render=function(T,A,N){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;const w=t.getRenderTarget(),M=t.getActiveCubeFace(),R=t.getActiveMipmapLevel(),G=t.state;G.setBlending(dr),G.buffers.color.setClear(1,1,1,1),G.buffers.depth.setTest(!0),G.setScissorTest(!1);const O=d!==Mi&&this.type===Mi,q=d===Mi&&this.type!==Mi;for(let $=0,D=T.length;$<D;$++){const V=T[$],U=V.shadow;if(U===void 0){console.warn("THREE.WebGLShadowMap:",V,"has no shadow.");continue}if(U.autoUpdate===!1&&U.needsUpdate===!1)continue;r.copy(U.mapSize);const Y=U.getFrameExtents();if(r.multiply(Y),s.copy(U.mapSize),(r.x>f||r.y>f)&&(r.x>f&&(s.x=Math.floor(f/Y.x),r.x=s.x*Y.x,U.mapSize.x=s.x),r.y>f&&(s.y=Math.floor(f/Y.y),r.y=s.y*Y.y,U.mapSize.y=s.y)),U.map===null||O===!0||q===!0){const oe=this.type!==Mi?{minFilter:Tn,magFilter:Tn}:{};U.map!==null&&U.map.dispose(),U.map=new Jr(r.x,r.y,oe),U.map.texture.name=V.name+".shadowMap",U.camera.updateProjectionMatrix()}t.setRenderTarget(U.map),t.clear();const Z=U.getViewportCount();for(let oe=0;oe<Z;oe++){const Se=U.getViewport(oe);o.set(s.x*Se.x,s.y*Se.y,s.x*Se.z,s.y*Se.w),G.viewport(o),U.updateMatrices(V,oe),i=U.getFrustum(),S(A,N,U.camera,V,this.type)}U.isPointLightShadow!==!0&&this.type===Mi&&x(U,N),U.needsUpdate=!1}d=this.type,m.needsUpdate=!1,t.setRenderTarget(w,M,R)};function x(T,A){const N=e.update(_);p.defines.VSM_SAMPLES!==T.blurSamples&&(p.defines.VSM_SAMPLES=T.blurSamples,g.defines.VSM_SAMPLES=T.blurSamples,p.needsUpdate=!0,g.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new Jr(r.x,r.y)),p.uniforms.shadow_pass.value=T.map.texture,p.uniforms.resolution.value=T.mapSize,p.uniforms.radius.value=T.radius,t.setRenderTarget(T.mapPass),t.clear(),t.renderBufferDirect(A,null,N,p,_,null),g.uniforms.shadow_pass.value=T.mapPass.texture,g.uniforms.resolution.value=T.mapSize,g.uniforms.radius.value=T.radius,t.setRenderTarget(T.map),t.clear(),t.renderBufferDirect(A,null,N,g,_,null)}function v(T,A,N,w){let M=null;const R=N.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(R!==void 0)M=R;else if(M=N.isPointLight===!0?c:l,t.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const G=M.uuid,O=A.uuid;let q=u[G];q===void 0&&(q={},u[G]=q);let $=q[O];$===void 0&&($=M.clone(),q[O]=$,A.addEventListener("dispose",C)),M=$}if(M.visible=A.visible,M.wireframe=A.wireframe,w===Mi?M.side=A.shadowSide!==null?A.shadowSide:A.side:M.side=A.shadowSide!==null?A.shadowSide:h[A.side],M.alphaMap=A.alphaMap,M.alphaTest=A.alphaTest,M.map=A.map,M.clipShadows=A.clipShadows,M.clippingPlanes=A.clippingPlanes,M.clipIntersection=A.clipIntersection,M.displacementMap=A.displacementMap,M.displacementScale=A.displacementScale,M.displacementBias=A.displacementBias,M.wireframeLinewidth=A.wireframeLinewidth,M.linewidth=A.linewidth,N.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const G=t.properties.get(M);G.light=N}return M}function S(T,A,N,w,M){if(T.visible===!1)return;if(T.layers.test(A.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&M===Mi)&&(!T.frustumCulled||i.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse,T.matrixWorld);const O=e.update(T),q=T.material;if(Array.isArray(q)){const $=O.groups;for(let D=0,V=$.length;D<V;D++){const U=$[D],Y=q[U.materialIndex];if(Y&&Y.visible){const Z=v(T,Y,w,M);T.onBeforeShadow(t,T,A,N,O,Z,U),t.renderBufferDirect(N,null,O,Z,T,U),T.onAfterShadow(t,T,A,N,O,Z,U)}}}else if(q.visible){const $=v(T,q,w,M);T.onBeforeShadow(t,T,A,N,O,$,null),t.renderBufferDirect(N,null,O,$,T,null),T.onAfterShadow(t,T,A,N,O,$,null)}}const G=T.children;for(let O=0,q=G.length;O<q;O++)S(G[O],A,N,w,M)}function C(T){T.target.removeEventListener("dispose",C);for(const N in u){const w=u[N],M=T.target.uuid;M in w&&(w[M].dispose(),delete w[M])}}}function fA(t){function e(){let k=!1;const se=new ot;let K=null;const Q=new ot(0,0,0,0);return{setMask:function(le){K!==le&&!k&&(t.colorMask(le,le,le,le),K=le)},setLocked:function(le){k=le},setClear:function(le,Te,Ge,Et,It){It===!0&&(le*=Et,Te*=Et,Ge*=Et),se.set(le,Te,Ge,Et),Q.equals(se)===!1&&(t.clearColor(le,Te,Ge,Et),Q.copy(se))},reset:function(){k=!1,K=null,Q.set(-1,0,0,0)}}}function n(){let k=!1,se=null,K=null,Q=null;return{setTest:function(le){le?he(t.DEPTH_TEST):de(t.DEPTH_TEST)},setMask:function(le){se!==le&&!k&&(t.depthMask(le),se=le)},setFunc:function(le){if(K!==le){switch(le){case OM:t.depthFunc(t.NEVER);break;case BM:t.depthFunc(t.ALWAYS);break;case HM:t.depthFunc(t.LESS);break;case mc:t.depthFunc(t.LEQUAL);break;case VM:t.depthFunc(t.EQUAL);break;case WM:t.depthFunc(t.GEQUAL);break;case GM:t.depthFunc(t.GREATER);break;case XM:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}K=le}},setLocked:function(le){k=le},setClear:function(le){Q!==le&&(t.clearDepth(le),Q=le)},reset:function(){k=!1,se=null,K=null,Q=null}}}function i(){let k=!1,se=null,K=null,Q=null,le=null,Te=null,Ge=null,Et=null,It=null;return{setTest:function($e){k||($e?he(t.STENCIL_TEST):de(t.STENCIL_TEST))},setMask:function($e){se!==$e&&!k&&(t.stencilMask($e),se=$e)},setFunc:function($e,gi,Yn){(K!==$e||Q!==gi||le!==Yn)&&(t.stencilFunc($e,gi,Yn),K=$e,Q=gi,le=Yn)},setOp:function($e,gi,Yn){(Te!==$e||Ge!==gi||Et!==Yn)&&(t.stencilOp($e,gi,Yn),Te=$e,Ge=gi,Et=Yn)},setLocked:function($e){k=$e},setClear:function($e){It!==$e&&(t.clearStencil($e),It=$e)},reset:function(){k=!1,se=null,K=null,Q=null,le=null,Te=null,Ge=null,Et=null,It=null}}}const r=new e,s=new n,o=new i,l=new WeakMap,c=new WeakMap;let u={},f={},h=new WeakMap,p=[],g=null,y=!1,_=null,m=null,d=null,x=null,v=null,S=null,C=null,T=new qe(0,0,0),A=0,N=!1,w=null,M=null,R=null,G=null,O=null;const q=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let $=!1,D=0;const V=t.getParameter(t.VERSION);V.indexOf("WebGL")!==-1?(D=parseFloat(/^WebGL (\d)/.exec(V)[1]),$=D>=1):V.indexOf("OpenGL ES")!==-1&&(D=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),$=D>=2);let U=null,Y={};const Z=t.getParameter(t.SCISSOR_BOX),oe=t.getParameter(t.VIEWPORT),Se=new ot().fromArray(Z),Be=new ot().fromArray(oe);function X(k,se,K,Q){const le=new Uint8Array(4),Te=t.createTexture();t.bindTexture(k,Te),t.texParameteri(k,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(k,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Ge=0;Ge<K;Ge++)k===t.TEXTURE_3D||k===t.TEXTURE_2D_ARRAY?t.texImage3D(se,0,t.RGBA,1,1,Q,0,t.RGBA,t.UNSIGNED_BYTE,le):t.texImage2D(se+Ge,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,le);return Te}const ie={};ie[t.TEXTURE_2D]=X(t.TEXTURE_2D,t.TEXTURE_2D,1),ie[t.TEXTURE_CUBE_MAP]=X(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),ie[t.TEXTURE_2D_ARRAY]=X(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),ie[t.TEXTURE_3D]=X(t.TEXTURE_3D,t.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),o.setClear(0),he(t.DEPTH_TEST),s.setFunc(mc),tt(!1),we(Nm),he(t.CULL_FACE),St(dr);function he(k){u[k]!==!0&&(t.enable(k),u[k]=!0)}function de(k){u[k]!==!1&&(t.disable(k),u[k]=!1)}function Ce(k,se){return f[k]!==se?(t.bindFramebuffer(k,se),f[k]=se,k===t.DRAW_FRAMEBUFFER&&(f[t.FRAMEBUFFER]=se),k===t.FRAMEBUFFER&&(f[t.DRAW_FRAMEBUFFER]=se),!0):!1}function De(k,se){let K=p,Q=!1;if(k){K=h.get(se),K===void 0&&(K=[],h.set(se,K));const le=k.textures;if(K.length!==le.length||K[0]!==t.COLOR_ATTACHMENT0){for(let Te=0,Ge=le.length;Te<Ge;Te++)K[Te]=t.COLOR_ATTACHMENT0+Te;K.length=le.length,Q=!0}}else K[0]!==t.BACK&&(K[0]=t.BACK,Q=!0);Q&&t.drawBuffers(K)}function He(k){return g!==k?(t.useProgram(k),g=k,!0):!1}const gt={[Ir]:t.FUNC_ADD,[EM]:t.FUNC_SUBTRACT,[wM]:t.FUNC_REVERSE_SUBTRACT};gt[bM]=t.MIN,gt[TM]=t.MAX;const I={[AM]:t.ZERO,[CM]:t.ONE,[RM]:t.SRC_COLOR,[of]:t.SRC_ALPHA,[UM]:t.SRC_ALPHA_SATURATE,[DM]:t.DST_COLOR,[NM]:t.DST_ALPHA,[PM]:t.ONE_MINUS_SRC_COLOR,[lf]:t.ONE_MINUS_SRC_ALPHA,[IM]:t.ONE_MINUS_DST_COLOR,[LM]:t.ONE_MINUS_DST_ALPHA,[kM]:t.CONSTANT_COLOR,[jM]:t.ONE_MINUS_CONSTANT_COLOR,[zM]:t.CONSTANT_ALPHA,[FM]:t.ONE_MINUS_CONSTANT_ALPHA};function St(k,se,K,Q,le,Te,Ge,Et,It,$e){if(k===dr){y===!0&&(de(t.BLEND),y=!1);return}if(y===!1&&(he(t.BLEND),y=!0),k!==MM){if(k!==_||$e!==N){if((m!==Ir||v!==Ir)&&(t.blendEquation(t.FUNC_ADD),m=Ir,v=Ir),$e)switch(k){case Vs:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Lm:t.blendFunc(t.ONE,t.ONE);break;case Dm:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Im:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}else switch(k){case Vs:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Lm:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case Dm:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Im:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}d=null,x=null,S=null,C=null,T.set(0,0,0),A=0,_=k,N=$e}return}le=le||se,Te=Te||K,Ge=Ge||Q,(se!==m||le!==v)&&(t.blendEquationSeparate(gt[se],gt[le]),m=se,v=le),(K!==d||Q!==x||Te!==S||Ge!==C)&&(t.blendFuncSeparate(I[K],I[Q],I[Te],I[Ge]),d=K,x=Q,S=Te,C=Ge),(Et.equals(T)===!1||It!==A)&&(t.blendColor(Et.r,Et.g,Et.b,It),T.copy(Et),A=It),_=k,N=!1}function Je(k,se){k.side===bi?de(t.CULL_FACE):he(t.CULL_FACE);let K=k.side===an;se&&(K=!K),tt(K),k.blending===Vs&&k.transparent===!1?St(dr):St(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),s.setFunc(k.depthFunc),s.setTest(k.depthTest),s.setMask(k.depthWrite),r.setMask(k.colorWrite);const Q=k.stencilWrite;o.setTest(Q),Q&&(o.setMask(k.stencilWriteMask),o.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),o.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),Ne(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?he(t.SAMPLE_ALPHA_TO_COVERAGE):de(t.SAMPLE_ALPHA_TO_COVERAGE)}function tt(k){w!==k&&(k?t.frontFace(t.CW):t.frontFace(t.CCW),w=k)}function we(k){k!==yM?(he(t.CULL_FACE),k!==M&&(k===Nm?t.cullFace(t.BACK):k===_M?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):de(t.CULL_FACE),M=k}function Mt(k){k!==R&&($&&t.lineWidth(k),R=k)}function Ne(k,se,K){k?(he(t.POLYGON_OFFSET_FILL),(G!==se||O!==K)&&(t.polygonOffset(se,K),G=se,O=K)):de(t.POLYGON_OFFSET_FILL)}function Ie(k){k?he(t.SCISSOR_TEST):de(t.SCISSOR_TEST)}function L(k){k===void 0&&(k=t.TEXTURE0+q-1),U!==k&&(t.activeTexture(k),U=k)}function E(k,se,K){K===void 0&&(U===null?K=t.TEXTURE0+q-1:K=U);let Q=Y[K];Q===void 0&&(Q={type:void 0,texture:void 0},Y[K]=Q),(Q.type!==k||Q.texture!==se)&&(U!==K&&(t.activeTexture(K),U=K),t.bindTexture(k,se||ie[k]),Q.type=k,Q.texture=se)}function W(){const k=Y[U];k!==void 0&&k.type!==void 0&&(t.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function J(){try{t.compressedTexImage2D.apply(t,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function te(){try{t.compressedTexImage3D.apply(t,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ee(){try{t.texSubImage2D.apply(t,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function be(){try{t.texSubImage3D.apply(t,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ue(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function xe(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Ue(){try{t.texStorage2D.apply(t,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function re(){try{t.texStorage3D.apply(t,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ge(){try{t.texImage2D.apply(t,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Ve(){try{t.texImage3D.apply(t,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Pe(k){Se.equals(k)===!1&&(t.scissor(k.x,k.y,k.z,k.w),Se.copy(k))}function ve(k){Be.equals(k)===!1&&(t.viewport(k.x,k.y,k.z,k.w),Be.copy(k))}function Le(k,se){let K=c.get(se);K===void 0&&(K=new WeakMap,c.set(se,K));let Q=K.get(k);Q===void 0&&(Q=t.getUniformBlockIndex(se,k.name),K.set(k,Q))}function ze(k,se){const Q=c.get(se).get(k);l.get(se)!==Q&&(t.uniformBlockBinding(se,Q,k.__bindingPointIndex),l.set(se,Q))}function ut(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),u={},U=null,Y={},f={},h=new WeakMap,p=[],g=null,y=!1,_=null,m=null,d=null,x=null,v=null,S=null,C=null,T=new qe(0,0,0),A=0,N=!1,w=null,M=null,R=null,G=null,O=null,Se.set(0,0,t.canvas.width,t.canvas.height),Be.set(0,0,t.canvas.width,t.canvas.height),r.reset(),s.reset(),o.reset()}return{buffers:{color:r,depth:s,stencil:o},enable:he,disable:de,bindFramebuffer:Ce,drawBuffers:De,useProgram:He,setBlending:St,setMaterial:Je,setFlipSided:tt,setCullFace:we,setLineWidth:Mt,setPolygonOffset:Ne,setScissorTest:Ie,activeTexture:L,bindTexture:E,unbindTexture:W,compressedTexImage2D:J,compressedTexImage3D:te,texImage2D:ge,texImage3D:Ve,updateUBOMapping:Le,uniformBlockBinding:ze,texStorage2D:Ue,texStorage3D:re,texSubImage2D:ee,texSubImage3D:be,compressedTexSubImage2D:ue,compressedTexSubImage3D:xe,scissor:Pe,viewport:ve,reset:ut}}function Tg(t,e,n,i){const r=hA(i);switch(n){case b0:return t*e;case A0:return t*e;case C0:return t*e*2;case R0:return t*e/r.components*r.byteLength;case Yh:return t*e/r.components*r.byteLength;case P0:return t*e*2/r.components*r.byteLength;case Kh:return t*e*2/r.components*r.byteLength;case T0:return t*e*3/r.components*r.byteLength;case Wn:return t*e*4/r.components*r.byteLength;case Qh:return t*e*4/r.components*r.byteLength;case Il:case Ul:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case kl:case jl:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case pf:case gf:return Math.max(t,16)*Math.max(e,8)/4;case hf:case mf:return Math.max(t,8)*Math.max(e,8)/2;case xf:case vf:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case yf:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case _f:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Sf:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case Mf:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case Ef:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case wf:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case bf:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case Tf:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case Af:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case Cf:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case Rf:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case Pf:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case Nf:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case Lf:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case Df:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case zl:case If:case Uf:return Math.ceil(t/4)*Math.ceil(e/4)*16;case N0:case kf:return Math.ceil(t/4)*Math.ceil(e/4)*8;case jf:case zf:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function hA(t){switch(t){case Ui:case M0:return{byteLength:1,components:1};case vo:case E0:case Ao:return{byteLength:2,components:1};case qh:case $h:return{byteLength:2,components:4};case Zr:case Xh:case Ci:return{byteLength:4,components:1};case w0:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}function pA(t,e,n,i,r,s,o){const l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new Fe,f=new WeakMap;let h;const p=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(L,E){return g?new OffscreenCanvas(L,E):_c("canvas")}function _(L,E,W){let J=1;const te=Ie(L);if((te.width>W||te.height>W)&&(J=W/Math.max(te.width,te.height)),J<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const ee=Math.floor(J*te.width),be=Math.floor(J*te.height);h===void 0&&(h=y(ee,be));const ue=E?y(ee,be):h;return ue.width=ee,ue.height=be,ue.getContext("2d").drawImage(L,0,0,ee,be),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+te.width+"x"+te.height+") to ("+ee+"x"+be+")."),ue}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+te.width+"x"+te.height+")."),L;return L}function m(L){return L.generateMipmaps&&L.minFilter!==Tn&&L.minFilter!==Vn}function d(L){t.generateMipmap(L)}function x(L,E,W,J,te=!1){if(L!==null){if(t[L]!==void 0)return t[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let ee=E;if(E===t.RED&&(W===t.FLOAT&&(ee=t.R32F),W===t.HALF_FLOAT&&(ee=t.R16F),W===t.UNSIGNED_BYTE&&(ee=t.R8)),E===t.RED_INTEGER&&(W===t.UNSIGNED_BYTE&&(ee=t.R8UI),W===t.UNSIGNED_SHORT&&(ee=t.R16UI),W===t.UNSIGNED_INT&&(ee=t.R32UI),W===t.BYTE&&(ee=t.R8I),W===t.SHORT&&(ee=t.R16I),W===t.INT&&(ee=t.R32I)),E===t.RG&&(W===t.FLOAT&&(ee=t.RG32F),W===t.HALF_FLOAT&&(ee=t.RG16F),W===t.UNSIGNED_BYTE&&(ee=t.RG8)),E===t.RG_INTEGER&&(W===t.UNSIGNED_BYTE&&(ee=t.RG8UI),W===t.UNSIGNED_SHORT&&(ee=t.RG16UI),W===t.UNSIGNED_INT&&(ee=t.RG32UI),W===t.BYTE&&(ee=t.RG8I),W===t.SHORT&&(ee=t.RG16I),W===t.INT&&(ee=t.RG32I)),E===t.RGB&&W===t.UNSIGNED_INT_5_9_9_9_REV&&(ee=t.RGB9_E5),E===t.RGBA){const be=te?gc:Ze.getTransfer(J);W===t.FLOAT&&(ee=t.RGBA32F),W===t.HALF_FLOAT&&(ee=t.RGBA16F),W===t.UNSIGNED_BYTE&&(ee=be===at?t.SRGB8_ALPHA8:t.RGBA8),W===t.UNSIGNED_SHORT_4_4_4_4&&(ee=t.RGBA4),W===t.UNSIGNED_SHORT_5_5_5_1&&(ee=t.RGB5_A1)}return(ee===t.R16F||ee===t.R32F||ee===t.RG16F||ee===t.RG32F||ee===t.RGBA16F||ee===t.RGBA32F)&&e.get("EXT_color_buffer_float"),ee}function v(L,E){let W;return L?E===null||E===Zr||E===na?W=t.DEPTH24_STENCIL8:E===Ci?W=t.DEPTH32F_STENCIL8:E===vo&&(W=t.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Zr||E===na?W=t.DEPTH_COMPONENT24:E===Ci?W=t.DEPTH_COMPONENT32F:E===vo&&(W=t.DEPTH_COMPONENT16),W}function S(L,E){return m(L)===!0||L.isFramebufferTexture&&L.minFilter!==Tn&&L.minFilter!==Vn?Math.log2(Math.max(E.width,E.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?E.mipmaps.length:1}function C(L){const E=L.target;E.removeEventListener("dispose",C),A(E),E.isVideoTexture&&f.delete(E)}function T(L){const E=L.target;E.removeEventListener("dispose",T),w(E)}function A(L){const E=i.get(L);if(E.__webglInit===void 0)return;const W=L.source,J=p.get(W);if(J){const te=J[E.__cacheKey];te.usedTimes--,te.usedTimes===0&&N(L),Object.keys(J).length===0&&p.delete(W)}i.remove(L)}function N(L){const E=i.get(L);t.deleteTexture(E.__webglTexture);const W=L.source,J=p.get(W);delete J[E.__cacheKey],o.memory.textures--}function w(L){const E=i.get(L);if(L.depthTexture&&L.depthTexture.dispose(),L.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(E.__webglFramebuffer[J]))for(let te=0;te<E.__webglFramebuffer[J].length;te++)t.deleteFramebuffer(E.__webglFramebuffer[J][te]);else t.deleteFramebuffer(E.__webglFramebuffer[J]);E.__webglDepthbuffer&&t.deleteRenderbuffer(E.__webglDepthbuffer[J])}else{if(Array.isArray(E.__webglFramebuffer))for(let J=0;J<E.__webglFramebuffer.length;J++)t.deleteFramebuffer(E.__webglFramebuffer[J]);else t.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&t.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&t.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let J=0;J<E.__webglColorRenderbuffer.length;J++)E.__webglColorRenderbuffer[J]&&t.deleteRenderbuffer(E.__webglColorRenderbuffer[J]);E.__webglDepthRenderbuffer&&t.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const W=L.textures;for(let J=0,te=W.length;J<te;J++){const ee=i.get(W[J]);ee.__webglTexture&&(t.deleteTexture(ee.__webglTexture),o.memory.textures--),i.remove(W[J])}i.remove(L)}let M=0;function R(){M=0}function G(){const L=M;return L>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+r.maxTextures),M+=1,L}function O(L){const E=[];return E.push(L.wrapS),E.push(L.wrapT),E.push(L.wrapR||0),E.push(L.magFilter),E.push(L.minFilter),E.push(L.anisotropy),E.push(L.internalFormat),E.push(L.format),E.push(L.type),E.push(L.generateMipmaps),E.push(L.premultiplyAlpha),E.push(L.flipY),E.push(L.unpackAlignment),E.push(L.colorSpace),E.join()}function q(L,E){const W=i.get(L);if(L.isVideoTexture&&Mt(L),L.isRenderTargetTexture===!1&&L.version>0&&W.__version!==L.version){const J=L.image;if(J===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Be(W,L,E);return}}n.bindTexture(t.TEXTURE_2D,W.__webglTexture,t.TEXTURE0+E)}function $(L,E){const W=i.get(L);if(L.version>0&&W.__version!==L.version){Be(W,L,E);return}n.bindTexture(t.TEXTURE_2D_ARRAY,W.__webglTexture,t.TEXTURE0+E)}function D(L,E){const W=i.get(L);if(L.version>0&&W.__version!==L.version){Be(W,L,E);return}n.bindTexture(t.TEXTURE_3D,W.__webglTexture,t.TEXTURE0+E)}function V(L,E){const W=i.get(L);if(L.version>0&&W.__version!==L.version){X(W,L,E);return}n.bindTexture(t.TEXTURE_CUBE_MAP,W.__webglTexture,t.TEXTURE0+E)}const U={[df]:t.REPEAT,[Fr]:t.CLAMP_TO_EDGE,[ff]:t.MIRRORED_REPEAT},Y={[Tn]:t.NEAREST,[nE]:t.NEAREST_MIPMAP_NEAREST,[Zo]:t.NEAREST_MIPMAP_LINEAR,[Vn]:t.LINEAR,[Nu]:t.LINEAR_MIPMAP_NEAREST,[Or]:t.LINEAR_MIPMAP_LINEAR},Z={[aE]:t.NEVER,[fE]:t.ALWAYS,[oE]:t.LESS,[D0]:t.LEQUAL,[lE]:t.EQUAL,[dE]:t.GEQUAL,[cE]:t.GREATER,[uE]:t.NOTEQUAL};function oe(L,E){if(E.type===Ci&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===Vn||E.magFilter===Nu||E.magFilter===Zo||E.magFilter===Or||E.minFilter===Vn||E.minFilter===Nu||E.minFilter===Zo||E.minFilter===Or)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(L,t.TEXTURE_WRAP_S,U[E.wrapS]),t.texParameteri(L,t.TEXTURE_WRAP_T,U[E.wrapT]),(L===t.TEXTURE_3D||L===t.TEXTURE_2D_ARRAY)&&t.texParameteri(L,t.TEXTURE_WRAP_R,U[E.wrapR]),t.texParameteri(L,t.TEXTURE_MAG_FILTER,Y[E.magFilter]),t.texParameteri(L,t.TEXTURE_MIN_FILTER,Y[E.minFilter]),E.compareFunction&&(t.texParameteri(L,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(L,t.TEXTURE_COMPARE_FUNC,Z[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Tn||E.minFilter!==Zo&&E.minFilter!==Or||E.type===Ci&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||i.get(E).__currentAnisotropy){const W=e.get("EXT_texture_filter_anisotropic");t.texParameterf(L,W.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,r.getMaxAnisotropy())),i.get(E).__currentAnisotropy=E.anisotropy}}}function Se(L,E){let W=!1;L.__webglInit===void 0&&(L.__webglInit=!0,E.addEventListener("dispose",C));const J=E.source;let te=p.get(J);te===void 0&&(te={},p.set(J,te));const ee=O(E);if(ee!==L.__cacheKey){te[ee]===void 0&&(te[ee]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,W=!0),te[ee].usedTimes++;const be=te[L.__cacheKey];be!==void 0&&(te[L.__cacheKey].usedTimes--,be.usedTimes===0&&N(E)),L.__cacheKey=ee,L.__webglTexture=te[ee].texture}return W}function Be(L,E,W){let J=t.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(J=t.TEXTURE_2D_ARRAY),E.isData3DTexture&&(J=t.TEXTURE_3D);const te=Se(L,E),ee=E.source;n.bindTexture(J,L.__webglTexture,t.TEXTURE0+W);const be=i.get(ee);if(ee.version!==be.__version||te===!0){n.activeTexture(t.TEXTURE0+W);const ue=Ze.getPrimaries(Ze.workingColorSpace),xe=E.colorSpace===Zi?null:Ze.getPrimaries(E.colorSpace),Ue=E.colorSpace===Zi||ue===xe?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,E.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ue);let re=_(E.image,!1,r.maxTextureSize);re=Ne(E,re);const ge=s.convert(E.format,E.colorSpace),Ve=s.convert(E.type);let Pe=x(E.internalFormat,ge,Ve,E.colorSpace,E.isVideoTexture);oe(J,E);let ve;const Le=E.mipmaps,ze=E.isVideoTexture!==!0,ut=be.__version===void 0||te===!0,k=ee.dataReady,se=S(E,re);if(E.isDepthTexture)Pe=v(E.format===ia,E.type),ut&&(ze?n.texStorage2D(t.TEXTURE_2D,1,Pe,re.width,re.height):n.texImage2D(t.TEXTURE_2D,0,Pe,re.width,re.height,0,ge,Ve,null));else if(E.isDataTexture)if(Le.length>0){ze&&ut&&n.texStorage2D(t.TEXTURE_2D,se,Pe,Le[0].width,Le[0].height);for(let K=0,Q=Le.length;K<Q;K++)ve=Le[K],ze?k&&n.texSubImage2D(t.TEXTURE_2D,K,0,0,ve.width,ve.height,ge,Ve,ve.data):n.texImage2D(t.TEXTURE_2D,K,Pe,ve.width,ve.height,0,ge,Ve,ve.data);E.generateMipmaps=!1}else ze?(ut&&n.texStorage2D(t.TEXTURE_2D,se,Pe,re.width,re.height),k&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,re.width,re.height,ge,Ve,re.data)):n.texImage2D(t.TEXTURE_2D,0,Pe,re.width,re.height,0,ge,Ve,re.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){ze&&ut&&n.texStorage3D(t.TEXTURE_2D_ARRAY,se,Pe,Le[0].width,Le[0].height,re.depth);for(let K=0,Q=Le.length;K<Q;K++)if(ve=Le[K],E.format!==Wn)if(ge!==null)if(ze){if(k)if(E.layerUpdates.size>0){const le=Tg(ve.width,ve.height,E.format,E.type);for(const Te of E.layerUpdates){const Ge=ve.data.subarray(Te*le/ve.data.BYTES_PER_ELEMENT,(Te+1)*le/ve.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,K,0,0,Te,ve.width,ve.height,1,ge,Ge,0,0)}E.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,K,0,0,0,ve.width,ve.height,re.depth,ge,ve.data,0,0)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,K,Pe,ve.width,ve.height,re.depth,0,ve.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ze?k&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,K,0,0,0,ve.width,ve.height,re.depth,ge,Ve,ve.data):n.texImage3D(t.TEXTURE_2D_ARRAY,K,Pe,ve.width,ve.height,re.depth,0,ge,Ve,ve.data)}else{ze&&ut&&n.texStorage2D(t.TEXTURE_2D,se,Pe,Le[0].width,Le[0].height);for(let K=0,Q=Le.length;K<Q;K++)ve=Le[K],E.format!==Wn?ge!==null?ze?k&&n.compressedTexSubImage2D(t.TEXTURE_2D,K,0,0,ve.width,ve.height,ge,ve.data):n.compressedTexImage2D(t.TEXTURE_2D,K,Pe,ve.width,ve.height,0,ve.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ze?k&&n.texSubImage2D(t.TEXTURE_2D,K,0,0,ve.width,ve.height,ge,Ve,ve.data):n.texImage2D(t.TEXTURE_2D,K,Pe,ve.width,ve.height,0,ge,Ve,ve.data)}else if(E.isDataArrayTexture)if(ze){if(ut&&n.texStorage3D(t.TEXTURE_2D_ARRAY,se,Pe,re.width,re.height,re.depth),k)if(E.layerUpdates.size>0){const K=Tg(re.width,re.height,E.format,E.type);for(const Q of E.layerUpdates){const le=re.data.subarray(Q*K/re.data.BYTES_PER_ELEMENT,(Q+1)*K/re.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,Q,re.width,re.height,1,ge,Ve,le)}E.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,re.width,re.height,re.depth,ge,Ve,re.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,Pe,re.width,re.height,re.depth,0,ge,Ve,re.data);else if(E.isData3DTexture)ze?(ut&&n.texStorage3D(t.TEXTURE_3D,se,Pe,re.width,re.height,re.depth),k&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,re.width,re.height,re.depth,ge,Ve,re.data)):n.texImage3D(t.TEXTURE_3D,0,Pe,re.width,re.height,re.depth,0,ge,Ve,re.data);else if(E.isFramebufferTexture){if(ut)if(ze)n.texStorage2D(t.TEXTURE_2D,se,Pe,re.width,re.height);else{let K=re.width,Q=re.height;for(let le=0;le<se;le++)n.texImage2D(t.TEXTURE_2D,le,Pe,K,Q,0,ge,Ve,null),K>>=1,Q>>=1}}else if(Le.length>0){if(ze&&ut){const K=Ie(Le[0]);n.texStorage2D(t.TEXTURE_2D,se,Pe,K.width,K.height)}for(let K=0,Q=Le.length;K<Q;K++)ve=Le[K],ze?k&&n.texSubImage2D(t.TEXTURE_2D,K,0,0,ge,Ve,ve):n.texImage2D(t.TEXTURE_2D,K,Pe,ge,Ve,ve);E.generateMipmaps=!1}else if(ze){if(ut){const K=Ie(re);n.texStorage2D(t.TEXTURE_2D,se,Pe,K.width,K.height)}k&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,ge,Ve,re)}else n.texImage2D(t.TEXTURE_2D,0,Pe,ge,Ve,re);m(E)&&d(J),be.__version=ee.version,E.onUpdate&&E.onUpdate(E)}L.__version=E.version}function X(L,E,W){if(E.image.length!==6)return;const J=Se(L,E),te=E.source;n.bindTexture(t.TEXTURE_CUBE_MAP,L.__webglTexture,t.TEXTURE0+W);const ee=i.get(te);if(te.version!==ee.__version||J===!0){n.activeTexture(t.TEXTURE0+W);const be=Ze.getPrimaries(Ze.workingColorSpace),ue=E.colorSpace===Zi?null:Ze.getPrimaries(E.colorSpace),xe=E.colorSpace===Zi||be===ue?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,E.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,xe);const Ue=E.isCompressedTexture||E.image[0].isCompressedTexture,re=E.image[0]&&E.image[0].isDataTexture,ge=[];for(let Q=0;Q<6;Q++)!Ue&&!re?ge[Q]=_(E.image[Q],!0,r.maxCubemapSize):ge[Q]=re?E.image[Q].image:E.image[Q],ge[Q]=Ne(E,ge[Q]);const Ve=ge[0],Pe=s.convert(E.format,E.colorSpace),ve=s.convert(E.type),Le=x(E.internalFormat,Pe,ve,E.colorSpace),ze=E.isVideoTexture!==!0,ut=ee.__version===void 0||J===!0,k=te.dataReady;let se=S(E,Ve);oe(t.TEXTURE_CUBE_MAP,E);let K;if(Ue){ze&&ut&&n.texStorage2D(t.TEXTURE_CUBE_MAP,se,Le,Ve.width,Ve.height);for(let Q=0;Q<6;Q++){K=ge[Q].mipmaps;for(let le=0;le<K.length;le++){const Te=K[le];E.format!==Wn?Pe!==null?ze?k&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,le,0,0,Te.width,Te.height,Pe,Te.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,le,Le,Te.width,Te.height,0,Te.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ze?k&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,le,0,0,Te.width,Te.height,Pe,ve,Te.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,le,Le,Te.width,Te.height,0,Pe,ve,Te.data)}}}else{if(K=E.mipmaps,ze&&ut){K.length>0&&se++;const Q=Ie(ge[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,se,Le,Q.width,Q.height)}for(let Q=0;Q<6;Q++)if(re){ze?k&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,ge[Q].width,ge[Q].height,Pe,ve,ge[Q].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,Le,ge[Q].width,ge[Q].height,0,Pe,ve,ge[Q].data);for(let le=0;le<K.length;le++){const Ge=K[le].image[Q].image;ze?k&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,le+1,0,0,Ge.width,Ge.height,Pe,ve,Ge.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,le+1,Le,Ge.width,Ge.height,0,Pe,ve,Ge.data)}}else{ze?k&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,Pe,ve,ge[Q]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,Le,Pe,ve,ge[Q]);for(let le=0;le<K.length;le++){const Te=K[le];ze?k&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,le+1,0,0,Pe,ve,Te.image[Q]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,le+1,Le,Pe,ve,Te.image[Q])}}}m(E)&&d(t.TEXTURE_CUBE_MAP),ee.__version=te.version,E.onUpdate&&E.onUpdate(E)}L.__version=E.version}function ie(L,E,W,J,te,ee){const be=s.convert(W.format,W.colorSpace),ue=s.convert(W.type),xe=x(W.internalFormat,be,ue,W.colorSpace);if(!i.get(E).__hasExternalTextures){const re=Math.max(1,E.width>>ee),ge=Math.max(1,E.height>>ee);te===t.TEXTURE_3D||te===t.TEXTURE_2D_ARRAY?n.texImage3D(te,ee,xe,re,ge,E.depth,0,be,ue,null):n.texImage2D(te,ee,xe,re,ge,0,be,ue,null)}n.bindFramebuffer(t.FRAMEBUFFER,L),we(E)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,J,te,i.get(W).__webglTexture,0,tt(E)):(te===t.TEXTURE_2D||te>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&te<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,J,te,i.get(W).__webglTexture,ee),n.bindFramebuffer(t.FRAMEBUFFER,null)}function he(L,E,W){if(t.bindRenderbuffer(t.RENDERBUFFER,L),E.depthBuffer){const J=E.depthTexture,te=J&&J.isDepthTexture?J.type:null,ee=v(E.stencilBuffer,te),be=E.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ue=tt(E);we(E)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ue,ee,E.width,E.height):W?t.renderbufferStorageMultisample(t.RENDERBUFFER,ue,ee,E.width,E.height):t.renderbufferStorage(t.RENDERBUFFER,ee,E.width,E.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,be,t.RENDERBUFFER,L)}else{const J=E.textures;for(let te=0;te<J.length;te++){const ee=J[te],be=s.convert(ee.format,ee.colorSpace),ue=s.convert(ee.type),xe=x(ee.internalFormat,be,ue,ee.colorSpace),Ue=tt(E);W&&we(E)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,Ue,xe,E.width,E.height):we(E)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Ue,xe,E.width,E.height):t.renderbufferStorage(t.RENDERBUFFER,xe,E.width,E.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function de(L,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,L),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(E.depthTexture).__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),q(E.depthTexture,0);const J=i.get(E.depthTexture).__webglTexture,te=tt(E);if(E.depthTexture.format===Ws)we(E)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,J,0,te):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,J,0);else if(E.depthTexture.format===ia)we(E)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,J,0,te):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,J,0);else throw new Error("Unknown depthTexture format")}function Ce(L){const E=i.get(L),W=L.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==L.depthTexture){const J=L.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),J){const te=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,J.removeEventListener("dispose",te)};J.addEventListener("dispose",te),E.__depthDisposeCallback=te}E.__boundDepthTexture=J}if(L.depthTexture&&!E.__autoAllocateDepthBuffer){if(W)throw new Error("target.depthTexture not supported in Cube render targets");de(E.__webglFramebuffer,L)}else if(W){E.__webglDepthbuffer=[];for(let J=0;J<6;J++)if(n.bindFramebuffer(t.FRAMEBUFFER,E.__webglFramebuffer[J]),E.__webglDepthbuffer[J]===void 0)E.__webglDepthbuffer[J]=t.createRenderbuffer(),he(E.__webglDepthbuffer[J],L,!1);else{const te=L.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ee=E.__webglDepthbuffer[J];t.bindRenderbuffer(t.RENDERBUFFER,ee),t.framebufferRenderbuffer(t.FRAMEBUFFER,te,t.RENDERBUFFER,ee)}}else if(n.bindFramebuffer(t.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=t.createRenderbuffer(),he(E.__webglDepthbuffer,L,!1);else{const J=L.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,te=E.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,te),t.framebufferRenderbuffer(t.FRAMEBUFFER,J,t.RENDERBUFFER,te)}n.bindFramebuffer(t.FRAMEBUFFER,null)}function De(L,E,W){const J=i.get(L);E!==void 0&&ie(J.__webglFramebuffer,L,L.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),W!==void 0&&Ce(L)}function He(L){const E=L.texture,W=i.get(L),J=i.get(E);L.addEventListener("dispose",T);const te=L.textures,ee=L.isWebGLCubeRenderTarget===!0,be=te.length>1;if(be||(J.__webglTexture===void 0&&(J.__webglTexture=t.createTexture()),J.__version=E.version,o.memory.textures++),ee){W.__webglFramebuffer=[];for(let ue=0;ue<6;ue++)if(E.mipmaps&&E.mipmaps.length>0){W.__webglFramebuffer[ue]=[];for(let xe=0;xe<E.mipmaps.length;xe++)W.__webglFramebuffer[ue][xe]=t.createFramebuffer()}else W.__webglFramebuffer[ue]=t.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){W.__webglFramebuffer=[];for(let ue=0;ue<E.mipmaps.length;ue++)W.__webglFramebuffer[ue]=t.createFramebuffer()}else W.__webglFramebuffer=t.createFramebuffer();if(be)for(let ue=0,xe=te.length;ue<xe;ue++){const Ue=i.get(te[ue]);Ue.__webglTexture===void 0&&(Ue.__webglTexture=t.createTexture(),o.memory.textures++)}if(L.samples>0&&we(L)===!1){W.__webglMultisampledFramebuffer=t.createFramebuffer(),W.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,W.__webglMultisampledFramebuffer);for(let ue=0;ue<te.length;ue++){const xe=te[ue];W.__webglColorRenderbuffer[ue]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,W.__webglColorRenderbuffer[ue]);const Ue=s.convert(xe.format,xe.colorSpace),re=s.convert(xe.type),ge=x(xe.internalFormat,Ue,re,xe.colorSpace,L.isXRRenderTarget===!0),Ve=tt(L);t.renderbufferStorageMultisample(t.RENDERBUFFER,Ve,ge,L.width,L.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ue,t.RENDERBUFFER,W.__webglColorRenderbuffer[ue])}t.bindRenderbuffer(t.RENDERBUFFER,null),L.depthBuffer&&(W.__webglDepthRenderbuffer=t.createRenderbuffer(),he(W.__webglDepthRenderbuffer,L,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(ee){n.bindTexture(t.TEXTURE_CUBE_MAP,J.__webglTexture),oe(t.TEXTURE_CUBE_MAP,E);for(let ue=0;ue<6;ue++)if(E.mipmaps&&E.mipmaps.length>0)for(let xe=0;xe<E.mipmaps.length;xe++)ie(W.__webglFramebuffer[ue][xe],L,E,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ue,xe);else ie(W.__webglFramebuffer[ue],L,E,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0);m(E)&&d(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(be){for(let ue=0,xe=te.length;ue<xe;ue++){const Ue=te[ue],re=i.get(Ue);n.bindTexture(t.TEXTURE_2D,re.__webglTexture),oe(t.TEXTURE_2D,Ue),ie(W.__webglFramebuffer,L,Ue,t.COLOR_ATTACHMENT0+ue,t.TEXTURE_2D,0),m(Ue)&&d(t.TEXTURE_2D)}n.unbindTexture()}else{let ue=t.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(ue=L.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(ue,J.__webglTexture),oe(ue,E),E.mipmaps&&E.mipmaps.length>0)for(let xe=0;xe<E.mipmaps.length;xe++)ie(W.__webglFramebuffer[xe],L,E,t.COLOR_ATTACHMENT0,ue,xe);else ie(W.__webglFramebuffer,L,E,t.COLOR_ATTACHMENT0,ue,0);m(E)&&d(ue),n.unbindTexture()}L.depthBuffer&&Ce(L)}function gt(L){const E=L.textures;for(let W=0,J=E.length;W<J;W++){const te=E[W];if(m(te)){const ee=L.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,be=i.get(te).__webglTexture;n.bindTexture(ee,be),d(ee),n.unbindTexture()}}}const I=[],St=[];function Je(L){if(L.samples>0){if(we(L)===!1){const E=L.textures,W=L.width,J=L.height;let te=t.COLOR_BUFFER_BIT;const ee=L.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,be=i.get(L),ue=E.length>1;if(ue)for(let xe=0;xe<E.length;xe++)n.bindFramebuffer(t.FRAMEBUFFER,be.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+xe,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,be.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+xe,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,be.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,be.__webglFramebuffer);for(let xe=0;xe<E.length;xe++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(te|=t.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(te|=t.STENCIL_BUFFER_BIT)),ue){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,be.__webglColorRenderbuffer[xe]);const Ue=i.get(E[xe]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,Ue,0)}t.blitFramebuffer(0,0,W,J,0,0,W,J,te,t.NEAREST),c===!0&&(I.length=0,St.length=0,I.push(t.COLOR_ATTACHMENT0+xe),L.depthBuffer&&L.resolveDepthBuffer===!1&&(I.push(ee),St.push(ee),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,St)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,I))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),ue)for(let xe=0;xe<E.length;xe++){n.bindFramebuffer(t.FRAMEBUFFER,be.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+xe,t.RENDERBUFFER,be.__webglColorRenderbuffer[xe]);const Ue=i.get(E[xe]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,be.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+xe,t.TEXTURE_2D,Ue,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,be.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&c){const E=L.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[E])}}}function tt(L){return Math.min(r.maxSamples,L.samples)}function we(L){const E=i.get(L);return L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Mt(L){const E=o.render.frame;f.get(L)!==E&&(f.set(L,E),L.update())}function Ne(L,E){const W=L.colorSpace,J=L.format,te=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||W!==Mr&&W!==Zi&&(Ze.getTransfer(W)===at?(J!==Wn||te!==Ui)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",W)),E}function Ie(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(u.width=L.naturalWidth||L.width,u.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(u.width=L.displayWidth,u.height=L.displayHeight):(u.width=L.width,u.height=L.height),u}this.allocateTextureUnit=G,this.resetTextureUnits=R,this.setTexture2D=q,this.setTexture2DArray=$,this.setTexture3D=D,this.setTextureCube=V,this.rebindTextures=De,this.setupRenderTarget=He,this.updateRenderTargetMipmap=gt,this.updateMultisampleRenderTarget=Je,this.setupDepthRenderbuffer=Ce,this.setupFrameBufferTexture=ie,this.useMultisampledRTT=we}function mA(t,e){function n(i,r=Zi){let s;const o=Ze.getTransfer(r);if(i===Ui)return t.UNSIGNED_BYTE;if(i===qh)return t.UNSIGNED_SHORT_4_4_4_4;if(i===$h)return t.UNSIGNED_SHORT_5_5_5_1;if(i===w0)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===M0)return t.BYTE;if(i===E0)return t.SHORT;if(i===vo)return t.UNSIGNED_SHORT;if(i===Xh)return t.INT;if(i===Zr)return t.UNSIGNED_INT;if(i===Ci)return t.FLOAT;if(i===Ao)return t.HALF_FLOAT;if(i===b0)return t.ALPHA;if(i===T0)return t.RGB;if(i===Wn)return t.RGBA;if(i===A0)return t.LUMINANCE;if(i===C0)return t.LUMINANCE_ALPHA;if(i===Ws)return t.DEPTH_COMPONENT;if(i===ia)return t.DEPTH_STENCIL;if(i===R0)return t.RED;if(i===Yh)return t.RED_INTEGER;if(i===P0)return t.RG;if(i===Kh)return t.RG_INTEGER;if(i===Qh)return t.RGBA_INTEGER;if(i===Il||i===Ul||i===kl||i===jl)if(o===at)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Il)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Ul)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===kl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===jl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Il)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Ul)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===kl)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===jl)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===hf||i===pf||i===mf||i===gf)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===hf)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===pf)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===mf)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===gf)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===xf||i===vf||i===yf)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===xf||i===vf)return o===at?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===yf)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===_f||i===Sf||i===Mf||i===Ef||i===wf||i===bf||i===Tf||i===Af||i===Cf||i===Rf||i===Pf||i===Nf||i===Lf||i===Df)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===_f)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Sf)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Mf)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Ef)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===wf)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===bf)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Tf)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Af)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Cf)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Rf)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Pf)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Nf)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Lf)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Df)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===zl||i===If||i===Uf)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===zl)return o===at?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===If)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Uf)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===N0||i===kf||i===jf||i===zf)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===zl)return s.COMPRESSED_RED_RGTC1_EXT;if(i===kf)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===jf)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===zf)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===na?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}class gA extends pn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Us extends $t{constructor(){super(),this.isGroup=!0,this.type="Group"}}const xA={type:"move"};class rd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Us,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Us,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Us,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new z),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const l=this._targetRay,c=this._grip,u=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(u&&e.hand){o=!0;for(const _ of e.hand.values()){const m=n.getJointPose(_,i),d=this._getHandJoint(u,_);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}const f=u.joints["index-finger-tip"],h=u.joints["thumb-tip"],p=f.position.distanceTo(h.position),g=.02,y=.005;u.inputState.pinching&&p>g+y?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&p<=g-y&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));l!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,this.dispatchEvent(xA)))}return l!==null&&(l.visible=r!==null),c!==null&&(c.visible=s!==null),u!==null&&(u.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new Us;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const vA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,yA=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class _A{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,i){if(this.texture===null){const r=new on,s=e.properties.get(r);s.__webglTexture=n.texture,(n.depthNear!=i.depthNear||n.depthFar!=i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new vr({vertexShader:vA,fragmentShader:yA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new An(new Qc(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class SA extends pa{constructor(e,n){super();const i=this;let r=null,s=1,o=null,l="local-floor",c=1,u=null,f=null,h=null,p=null,g=null,y=null;const _=new _A,m=n.getContextAttributes();let d=null,x=null;const v=[],S=[],C=new Fe;let T=null;const A=new pn;A.layers.enable(1),A.viewport=new ot;const N=new pn;N.layers.enable(2),N.viewport=new ot;const w=[A,N],M=new gA;M.layers.enable(1),M.layers.enable(2);let R=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let ie=v[X];return ie===void 0&&(ie=new rd,v[X]=ie),ie.getTargetRaySpace()},this.getControllerGrip=function(X){let ie=v[X];return ie===void 0&&(ie=new rd,v[X]=ie),ie.getGripSpace()},this.getHand=function(X){let ie=v[X];return ie===void 0&&(ie=new rd,v[X]=ie),ie.getHandSpace()};function O(X){const ie=S.indexOf(X.inputSource);if(ie===-1)return;const he=v[ie];he!==void 0&&(he.update(X.inputSource,X.frame,u||o),he.dispatchEvent({type:X.type,data:X.inputSource}))}function q(){r.removeEventListener("select",O),r.removeEventListener("selectstart",O),r.removeEventListener("selectend",O),r.removeEventListener("squeeze",O),r.removeEventListener("squeezestart",O),r.removeEventListener("squeezeend",O),r.removeEventListener("end",q),r.removeEventListener("inputsourceschange",$);for(let X=0;X<v.length;X++){const ie=S[X];ie!==null&&(S[X]=null,v[X].disconnect(ie))}R=null,G=null,_.reset(),e.setRenderTarget(d),g=null,p=null,h=null,r=null,x=null,Be.stop(),i.isPresenting=!1,e.setPixelRatio(T),e.setSize(C.width,C.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){s=X,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){l=X,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||o},this.setReferenceSpace=function(X){u=X},this.getBaseLayer=function(){return p!==null?p:g},this.getBinding=function(){return h},this.getFrame=function(){return y},this.getSession=function(){return r},this.setSession=async function(X){if(r=X,r!==null){if(d=e.getRenderTarget(),r.addEventListener("select",O),r.addEventListener("selectstart",O),r.addEventListener("selectend",O),r.addEventListener("squeeze",O),r.addEventListener("squeezestart",O),r.addEventListener("squeezeend",O),r.addEventListener("end",q),r.addEventListener("inputsourceschange",$),m.xrCompatible!==!0&&await n.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(C),r.renderState.layers===void 0){const ie={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};g=new XRWebGLLayer(r,n,ie),r.updateRenderState({baseLayer:g}),e.setPixelRatio(1),e.setSize(g.framebufferWidth,g.framebufferHeight,!1),x=new Jr(g.framebufferWidth,g.framebufferHeight,{format:Wn,type:Ui,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let ie=null,he=null,de=null;m.depth&&(de=m.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,ie=m.stencil?ia:Ws,he=m.stencil?na:Zr);const Ce={colorFormat:n.RGBA8,depthFormat:de,scaleFactor:s};h=new XRWebGLBinding(r,n),p=h.createProjectionLayer(Ce),r.updateRenderState({layers:[p]}),e.setPixelRatio(1),e.setSize(p.textureWidth,p.textureHeight,!1),x=new Jr(p.textureWidth,p.textureHeight,{format:Wn,type:Ui,depthTexture:new X0(p.textureWidth,p.textureHeight,he,void 0,void 0,void 0,void 0,void 0,void 0,ie),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:p.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(c),u=null,o=await r.requestReferenceSpace(l),Be.setContext(r),Be.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function $(X){for(let ie=0;ie<X.removed.length;ie++){const he=X.removed[ie],de=S.indexOf(he);de>=0&&(S[de]=null,v[de].disconnect(he))}for(let ie=0;ie<X.added.length;ie++){const he=X.added[ie];let de=S.indexOf(he);if(de===-1){for(let De=0;De<v.length;De++)if(De>=S.length){S.push(he),de=De;break}else if(S[De]===null){S[De]=he,de=De;break}if(de===-1)break}const Ce=v[de];Ce&&Ce.connect(he)}}const D=new z,V=new z;function U(X,ie,he){D.setFromMatrixPosition(ie.matrixWorld),V.setFromMatrixPosition(he.matrixWorld);const de=D.distanceTo(V),Ce=ie.projectionMatrix.elements,De=he.projectionMatrix.elements,He=Ce[14]/(Ce[10]-1),gt=Ce[14]/(Ce[10]+1),I=(Ce[9]+1)/Ce[5],St=(Ce[9]-1)/Ce[5],Je=(Ce[8]-1)/Ce[0],tt=(De[8]+1)/De[0],we=He*Je,Mt=He*tt,Ne=de/(-Je+tt),Ie=Ne*-Je;if(ie.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(Ie),X.translateZ(Ne),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert(),Ce[10]===-1)X.projectionMatrix.copy(ie.projectionMatrix),X.projectionMatrixInverse.copy(ie.projectionMatrixInverse);else{const L=He+Ne,E=gt+Ne,W=we-Ie,J=Mt+(de-Ie),te=I*gt/E*L,ee=St*gt/E*L;X.projectionMatrix.makePerspective(W,J,te,ee,L,E),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}}function Y(X,ie){ie===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(ie.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(r===null)return;let ie=X.near,he=X.far;_.texture!==null&&(_.depthNear>0&&(ie=_.depthNear),_.depthFar>0&&(he=_.depthFar)),M.near=N.near=A.near=ie,M.far=N.far=A.far=he,(R!==M.near||G!==M.far)&&(r.updateRenderState({depthNear:M.near,depthFar:M.far}),R=M.near,G=M.far);const de=X.parent,Ce=M.cameras;Y(M,de);for(let De=0;De<Ce.length;De++)Y(Ce[De],de);Ce.length===2?U(M,A,N):M.projectionMatrix.copy(A.projectionMatrix),Z(X,M,de)};function Z(X,ie,he){he===null?X.matrix.copy(ie.matrixWorld):(X.matrix.copy(he.matrixWorld),X.matrix.invert(),X.matrix.multiply(ie.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(ie.projectionMatrix),X.projectionMatrixInverse.copy(ie.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=Ff*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(p===null&&g===null))return c},this.setFoveation=function(X){c=X,p!==null&&(p.fixedFoveation=X),g!==null&&g.fixedFoveation!==void 0&&(g.fixedFoveation=X)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(M)};let oe=null;function Se(X,ie){if(f=ie.getViewerPose(u||o),y=ie,f!==null){const he=f.views;g!==null&&(e.setRenderTargetFramebuffer(x,g.framebuffer),e.setRenderTarget(x));let de=!1;he.length!==M.cameras.length&&(M.cameras.length=0,de=!0);for(let De=0;De<he.length;De++){const He=he[De];let gt=null;if(g!==null)gt=g.getViewport(He);else{const St=h.getViewSubImage(p,He);gt=St.viewport,De===0&&(e.setRenderTargetTextures(x,St.colorTexture,p.ignoreDepthValues?void 0:St.depthStencilTexture),e.setRenderTarget(x))}let I=w[De];I===void 0&&(I=new pn,I.layers.enable(De),I.viewport=new ot,w[De]=I),I.matrix.fromArray(He.transform.matrix),I.matrix.decompose(I.position,I.quaternion,I.scale),I.projectionMatrix.fromArray(He.projectionMatrix),I.projectionMatrixInverse.copy(I.projectionMatrix).invert(),I.viewport.set(gt.x,gt.y,gt.width,gt.height),De===0&&(M.matrix.copy(I.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),de===!0&&M.cameras.push(I)}const Ce=r.enabledFeatures;if(Ce&&Ce.includes("depth-sensing")){const De=h.getDepthInformation(he[0]);De&&De.isValid&&De.texture&&_.init(e,De,r.renderState)}}for(let he=0;he<v.length;he++){const de=S[he],Ce=v[he];de!==null&&Ce!==void 0&&Ce.update(de,ie,u||o)}oe&&oe(X,ie),ie.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ie}),y=null}const Be=new G0;Be.setAnimationLoop(Se),this.setAnimationLoop=function(X){oe=X},this.dispose=function(){}}}const Rr=new di,MA=new pt;function EA(t,e){function n(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function i(m,d){d.color.getRGB(m.fogColor.value,H0(t)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function r(m,d,x,v,S){d.isMeshBasicMaterial||d.isMeshLambertMaterial?s(m,d):d.isMeshToonMaterial?(s(m,d),h(m,d)):d.isMeshPhongMaterial?(s(m,d),f(m,d)):d.isMeshStandardMaterial?(s(m,d),p(m,d),d.isMeshPhysicalMaterial&&g(m,d,S)):d.isMeshMatcapMaterial?(s(m,d),y(m,d)):d.isMeshDepthMaterial?s(m,d):d.isMeshDistanceMaterial?(s(m,d),_(m,d)):d.isMeshNormalMaterial?s(m,d):d.isLineBasicMaterial?(o(m,d),d.isLineDashedMaterial&&l(m,d)):d.isPointsMaterial?c(m,d,x,v):d.isSpriteMaterial?u(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,n(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,n(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,n(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===an&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,n(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===an&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,n(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,n(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,n(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);const x=e.get(d),v=x.envMap,S=x.envMapRotation;v&&(m.envMap.value=v,Rr.copy(S),Rr.x*=-1,Rr.y*=-1,Rr.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Rr.y*=-1,Rr.z*=-1),m.envMapRotation.value.setFromMatrix4(MA.makeRotationFromEuler(Rr)),m.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap&&(m.lightMap.value=d.lightMap,m.lightMapIntensity.value=d.lightMapIntensity,n(d.lightMap,m.lightMapTransform)),d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,n(d.aoMap,m.aoMapTransform))}function o(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,n(d.map,m.mapTransform))}function l(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function c(m,d,x,v){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*x,m.scale.value=v*.5,d.map&&(m.map.value=d.map,n(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,n(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function u(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,n(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,n(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function f(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function h(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function p(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,n(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,n(d.roughnessMap,m.roughnessMapTransform)),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function g(m,d,x){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,n(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,n(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,n(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,n(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,n(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===an&&m.clearcoatNormalScale.value.negate())),d.dispersion>0&&(m.dispersion.value=d.dispersion),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,n(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,n(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=x.texture,m.transmissionSamplerSize.value.set(x.width,x.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,n(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,n(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,n(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,n(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,n(d.specularIntensityMap,m.specularIntensityMapTransform))}function y(m,d){d.matcap&&(m.matcap.value=d.matcap)}function _(m,d){const x=e.get(d).light;m.referencePosition.value.setFromMatrixPosition(x.matrixWorld),m.nearDistance.value=x.shadow.camera.near,m.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function wA(t,e,n,i){let r={},s={},o=[];const l=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function c(x,v){const S=v.program;i.uniformBlockBinding(x,S)}function u(x,v){let S=r[x.id];S===void 0&&(y(x),S=f(x),r[x.id]=S,x.addEventListener("dispose",m));const C=v.program;i.updateUBOMapping(x,C);const T=e.render.frame;s[x.id]!==T&&(p(x),s[x.id]=T)}function f(x){const v=h();x.__bindingPointIndex=v;const S=t.createBuffer(),C=x.__size,T=x.usage;return t.bindBuffer(t.UNIFORM_BUFFER,S),t.bufferData(t.UNIFORM_BUFFER,C,T),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,v,S),S}function h(){for(let x=0;x<l;x++)if(o.indexOf(x)===-1)return o.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(x){const v=r[x.id],S=x.uniforms,C=x.__cache;t.bindBuffer(t.UNIFORM_BUFFER,v);for(let T=0,A=S.length;T<A;T++){const N=Array.isArray(S[T])?S[T]:[S[T]];for(let w=0,M=N.length;w<M;w++){const R=N[w];if(g(R,T,w,C)===!0){const G=R.__offset,O=Array.isArray(R.value)?R.value:[R.value];let q=0;for(let $=0;$<O.length;$++){const D=O[$],V=_(D);typeof D=="number"||typeof D=="boolean"?(R.__data[0]=D,t.bufferSubData(t.UNIFORM_BUFFER,G+q,R.__data)):D.isMatrix3?(R.__data[0]=D.elements[0],R.__data[1]=D.elements[1],R.__data[2]=D.elements[2],R.__data[3]=0,R.__data[4]=D.elements[3],R.__data[5]=D.elements[4],R.__data[6]=D.elements[5],R.__data[7]=0,R.__data[8]=D.elements[6],R.__data[9]=D.elements[7],R.__data[10]=D.elements[8],R.__data[11]=0):(D.toArray(R.__data,q),q+=V.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,G,R.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function g(x,v,S,C){const T=x.value,A=v+"_"+S;if(C[A]===void 0)return typeof T=="number"||typeof T=="boolean"?C[A]=T:C[A]=T.clone(),!0;{const N=C[A];if(typeof T=="number"||typeof T=="boolean"){if(N!==T)return C[A]=T,!0}else if(N.equals(T)===!1)return N.copy(T),!0}return!1}function y(x){const v=x.uniforms;let S=0;const C=16;for(let A=0,N=v.length;A<N;A++){const w=Array.isArray(v[A])?v[A]:[v[A]];for(let M=0,R=w.length;M<R;M++){const G=w[M],O=Array.isArray(G.value)?G.value:[G.value];for(let q=0,$=O.length;q<$;q++){const D=O[q],V=_(D),U=S%C,Y=U%V.boundary,Z=U+Y;S+=Y,Z!==0&&C-Z<V.storage&&(S+=C-Z),G.__data=new Float32Array(V.storage/Float32Array.BYTES_PER_ELEMENT),G.__offset=S,S+=V.storage}}}const T=S%C;return T>0&&(S+=C-T),x.__size=S,x.__cache={},this}function _(x){const v={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(v.boundary=4,v.storage=4):x.isVector2?(v.boundary=8,v.storage=8):x.isVector3||x.isColor?(v.boundary=16,v.storage=12):x.isVector4?(v.boundary=16,v.storage=16):x.isMatrix3?(v.boundary=48,v.storage=48):x.isMatrix4?(v.boundary=64,v.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),v}function m(x){const v=x.target;v.removeEventListener("dispose",m);const S=o.indexOf(v.__bindingPointIndex);o.splice(S,1),t.deleteBuffer(r[v.id]),delete r[v.id],delete s[v.id]}function d(){for(const x in r)t.deleteBuffer(r[x]);o=[],r={},s={}}return{bind:c,update:u,dispose:d}}class bA{constructor(e={}){const{canvas:n=pE(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:l=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:u=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=o;const g=new Uint32Array(4),y=new Int32Array(4);let _=null,m=null;const d=[],x=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Zn,this.toneMapping=fr,this.toneMappingExposure=1;const v=this;let S=!1,C=0,T=0,A=null,N=-1,w=null;const M=new ot,R=new ot;let G=null;const O=new qe(0);let q=0,$=n.width,D=n.height,V=1,U=null,Y=null;const Z=new ot(0,0,$,D),oe=new ot(0,0,$,D);let Se=!1;const Be=new Jh;let X=!1,ie=!1;const he=new pt,de=new z,Ce=new ot,De={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let He=!1;function gt(){return A===null?V:1}let I=i;function St(b,j){return n.getContext(b,j)}try{const b={alpha:!0,depth:r,stencil:s,antialias:l,premultipliedAlpha:c,preserveDrawingBuffer:u,powerPreference:f,failIfMajorPerformanceCaveat:h};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Gh}`),n.addEventListener("webglcontextlost",K,!1),n.addEventListener("webglcontextrestored",Q,!1),n.addEventListener("webglcontextcreationerror",le,!1),I===null){const j="webgl2";if(I=St(j,b),I===null)throw St(j)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let Je,tt,we,Mt,Ne,Ie,L,E,W,J,te,ee,be,ue,xe,Ue,re,ge,Ve,Pe,ve,Le,ze,ut;function k(){Je=new N2(I),Je.init(),Le=new mA(I,Je),tt=new w2(I,Je,e,Le),we=new fA(I),Mt=new I2(I),Ne=new ZT,Ie=new pA(I,Je,we,Ne,tt,Le,Mt),L=new T2(v),E=new P2(v),W=new OE(I),ze=new M2(I,W),J=new L2(I,W,Mt,ze),te=new k2(I,J,W,Mt),Ve=new U2(I,tt,Ie),Ue=new b2(Ne),ee=new QT(v,L,E,Je,tt,ze,Ue),be=new EA(v,Ne),ue=new eA,xe=new aA(Je),ge=new S2(v,L,E,we,te,p,c),re=new dA(v,te,tt),ut=new wA(I,Mt,tt,we),Pe=new E2(I,Je,Mt),ve=new D2(I,Je,Mt),Mt.programs=ee.programs,v.capabilities=tt,v.extensions=Je,v.properties=Ne,v.renderLists=ue,v.shadowMap=re,v.state=we,v.info=Mt}k();const se=new SA(v,I);this.xr=se,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const b=Je.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=Je.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(b){b!==void 0&&(V=b,this.setSize($,D,!1))},this.getSize=function(b){return b.set($,D)},this.setSize=function(b,j,B=!0){if(se.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}$=b,D=j,n.width=Math.floor(b*V),n.height=Math.floor(j*V),B===!0&&(n.style.width=b+"px",n.style.height=j+"px"),this.setViewport(0,0,b,j)},this.getDrawingBufferSize=function(b){return b.set($*V,D*V).floor()},this.setDrawingBufferSize=function(b,j,B){$=b,D=j,V=B,n.width=Math.floor(b*B),n.height=Math.floor(j*B),this.setViewport(0,0,b,j)},this.getCurrentViewport=function(b){return b.copy(M)},this.getViewport=function(b){return b.copy(Z)},this.setViewport=function(b,j,B,H){b.isVector4?Z.set(b.x,b.y,b.z,b.w):Z.set(b,j,B,H),we.viewport(M.copy(Z).multiplyScalar(V).round())},this.getScissor=function(b){return b.copy(oe)},this.setScissor=function(b,j,B,H){b.isVector4?oe.set(b.x,b.y,b.z,b.w):oe.set(b,j,B,H),we.scissor(R.copy(oe).multiplyScalar(V).round())},this.getScissorTest=function(){return Se},this.setScissorTest=function(b){we.setScissorTest(Se=b)},this.setOpaqueSort=function(b){U=b},this.setTransparentSort=function(b){Y=b},this.getClearColor=function(b){return b.copy(ge.getClearColor())},this.setClearColor=function(){ge.setClearColor.apply(ge,arguments)},this.getClearAlpha=function(){return ge.getClearAlpha()},this.setClearAlpha=function(){ge.setClearAlpha.apply(ge,arguments)},this.clear=function(b=!0,j=!0,B=!0){let H=0;if(b){let F=!1;if(A!==null){const ae=A.texture.format;F=ae===Qh||ae===Kh||ae===Yh}if(F){const ae=A.texture.type,fe=ae===Ui||ae===Zr||ae===vo||ae===na||ae===qh||ae===$h,ye=ge.getClearColor(),_e=ge.getClearAlpha(),Ae=ye.r,Re=ye.g,Me=ye.b;fe?(g[0]=Ae,g[1]=Re,g[2]=Me,g[3]=_e,I.clearBufferuiv(I.COLOR,0,g)):(y[0]=Ae,y[1]=Re,y[2]=Me,y[3]=_e,I.clearBufferiv(I.COLOR,0,y))}else H|=I.COLOR_BUFFER_BIT}j&&(H|=I.DEPTH_BUFFER_BIT),B&&(H|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",K,!1),n.removeEventListener("webglcontextrestored",Q,!1),n.removeEventListener("webglcontextcreationerror",le,!1),ue.dispose(),xe.dispose(),Ne.dispose(),L.dispose(),E.dispose(),te.dispose(),ze.dispose(),ut.dispose(),ee.dispose(),se.dispose(),se.removeEventListener("sessionstart",Yn),se.removeEventListener("sessionend",ap),Er.stop()};function K(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function Q(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;const b=Mt.autoReset,j=re.enabled,B=re.autoUpdate,H=re.needsUpdate,F=re.type;k(),Mt.autoReset=b,re.enabled=j,re.autoUpdate=B,re.needsUpdate=H,re.type=F}function le(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function Te(b){const j=b.target;j.removeEventListener("dispose",Te),Ge(j)}function Ge(b){Et(b),Ne.remove(b)}function Et(b){const j=Ne.get(b).programs;j!==void 0&&(j.forEach(function(B){ee.releaseProgram(B)}),b.isShaderMaterial&&ee.releaseShaderCache(b))}this.renderBufferDirect=function(b,j,B,H,F,ae){j===null&&(j=De);const fe=F.isMesh&&F.matrixWorld.determinant()<0,ye=sy(b,j,B,H,F);we.setMaterial(H,fe);let _e=B.index,Ae=1;if(H.wireframe===!0){if(_e=J.getWireframeAttribute(B),_e===void 0)return;Ae=2}const Re=B.drawRange,Me=B.attributes.position;let Ye=Re.start*Ae,xt=(Re.start+Re.count)*Ae;ae!==null&&(Ye=Math.max(Ye,ae.start*Ae),xt=Math.min(xt,(ae.start+ae.count)*Ae)),_e!==null?(Ye=Math.max(Ye,0),xt=Math.min(xt,_e.count)):Me!=null&&(Ye=Math.max(Ye,0),xt=Math.min(xt,Me.count));const vt=xt-Ye;if(vt<0||vt===1/0)return;ze.setup(F,H,ye,B,_e);let cn,Ke=Pe;if(_e!==null&&(cn=W.get(_e),Ke=ve,Ke.setIndex(cn)),F.isMesh)H.wireframe===!0?(we.setLineWidth(H.wireframeLinewidth*gt()),Ke.setMode(I.LINES)):Ke.setMode(I.TRIANGLES);else if(F.isLine){let Ee=H.linewidth;Ee===void 0&&(Ee=1),we.setLineWidth(Ee*gt()),F.isLineSegments?Ke.setMode(I.LINES):F.isLineLoop?Ke.setMode(I.LINE_LOOP):Ke.setMode(I.LINE_STRIP)}else F.isPoints?Ke.setMode(I.POINTS):F.isSprite&&Ke.setMode(I.TRIANGLES);if(F.isBatchedMesh)if(F._multiDrawInstances!==null)Ke.renderMultiDrawInstances(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount,F._multiDrawInstances);else if(Je.get("WEBGL_multi_draw"))Ke.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else{const Ee=F._multiDrawStarts,Ut=F._multiDrawCounts,Qe=F._multiDrawCount,Un=_e?W.get(_e).bytesPerElement:1,is=Ne.get(H).currentProgram.getUniforms();for(let un=0;un<Qe;un++)is.setValue(I,"_gl_DrawID",un),Ke.render(Ee[un]/Un,Ut[un])}else if(F.isInstancedMesh)Ke.renderInstances(Ye,vt,F.count);else if(B.isInstancedBufferGeometry){const Ee=B._maxInstanceCount!==void 0?B._maxInstanceCount:1/0,Ut=Math.min(B.instanceCount,Ee);Ke.renderInstances(Ye,vt,Ut)}else Ke.render(Ye,vt)};function It(b,j,B){b.transparent===!0&&b.side===bi&&b.forceSinglePass===!1?(b.side=an,b.needsUpdate=!0,Do(b,j,B),b.side=xr,b.needsUpdate=!0,Do(b,j,B),b.side=bi):Do(b,j,B)}this.compile=function(b,j,B=null){B===null&&(B=b),m=xe.get(B),m.init(j),x.push(m),B.traverseVisible(function(F){F.isLight&&F.layers.test(j.layers)&&(m.pushLight(F),F.castShadow&&m.pushShadow(F))}),b!==B&&b.traverseVisible(function(F){F.isLight&&F.layers.test(j.layers)&&(m.pushLight(F),F.castShadow&&m.pushShadow(F))}),m.setupLights();const H=new Set;return b.traverse(function(F){const ae=F.material;if(ae)if(Array.isArray(ae))for(let fe=0;fe<ae.length;fe++){const ye=ae[fe];It(ye,B,F),H.add(ye)}else It(ae,B,F),H.add(ae)}),x.pop(),m=null,H},this.compileAsync=function(b,j,B=null){const H=this.compile(b,j,B);return new Promise(F=>{function ae(){if(H.forEach(function(fe){Ne.get(fe).currentProgram.isReady()&&H.delete(fe)}),H.size===0){F(b);return}setTimeout(ae,10)}Je.get("KHR_parallel_shader_compile")!==null?ae():setTimeout(ae,10)})};let $e=null;function gi(b){$e&&$e(b)}function Yn(){Er.stop()}function ap(){Er.start()}const Er=new G0;Er.setAnimationLoop(gi),typeof self<"u"&&Er.setContext(self),this.setAnimationLoop=function(b){$e=b,se.setAnimationLoop(b),b===null?Er.stop():Er.start()},se.addEventListener("sessionstart",Yn),se.addEventListener("sessionend",ap),this.render=function(b,j){if(j!==void 0&&j.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),j.parent===null&&j.matrixWorldAutoUpdate===!0&&j.updateMatrixWorld(),se.enabled===!0&&se.isPresenting===!0&&(se.cameraAutoUpdate===!0&&se.updateCamera(j),j=se.getCamera()),b.isScene===!0&&b.onBeforeRender(v,b,j,A),m=xe.get(b,x.length),m.init(j),x.push(m),he.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),Be.setFromProjectionMatrix(he),ie=this.localClippingEnabled,X=Ue.init(this.clippingPlanes,ie),_=ue.get(b,d.length),_.init(),d.push(_),se.enabled===!0&&se.isPresenting===!0){const ae=v.xr.getDepthSensingMesh();ae!==null&&eu(ae,j,-1/0,v.sortObjects)}eu(b,j,0,v.sortObjects),_.finish(),v.sortObjects===!0&&_.sort(U,Y),He=se.enabled===!1||se.isPresenting===!1||se.hasDepthSensing()===!1,He&&ge.addToRenderList(_,b),this.info.render.frame++,X===!0&&Ue.beginShadows();const B=m.state.shadowsArray;re.render(B,b,j),X===!0&&Ue.endShadows(),this.info.autoReset===!0&&this.info.reset();const H=_.opaque,F=_.transmissive;if(m.setupLights(),j.isArrayCamera){const ae=j.cameras;if(F.length>0)for(let fe=0,ye=ae.length;fe<ye;fe++){const _e=ae[fe];lp(H,F,b,_e)}He&&ge.render(b);for(let fe=0,ye=ae.length;fe<ye;fe++){const _e=ae[fe];op(_,b,_e,_e.viewport)}}else F.length>0&&lp(H,F,b,j),He&&ge.render(b),op(_,b,j);A!==null&&(Ie.updateMultisampleRenderTarget(A),Ie.updateRenderTargetMipmap(A)),b.isScene===!0&&b.onAfterRender(v,b,j),ze.resetDefaultState(),N=-1,w=null,x.pop(),x.length>0?(m=x[x.length-1],X===!0&&Ue.setGlobalState(v.clippingPlanes,m.state.camera)):m=null,d.pop(),d.length>0?_=d[d.length-1]:_=null};function eu(b,j,B,H){if(b.visible===!1)return;if(b.layers.test(j.layers)){if(b.isGroup)B=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(j);else if(b.isLight)m.pushLight(b),b.castShadow&&m.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||Be.intersectsSprite(b)){H&&Ce.setFromMatrixPosition(b.matrixWorld).applyMatrix4(he);const fe=te.update(b),ye=b.material;ye.visible&&_.push(b,fe,ye,B,Ce.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||Be.intersectsObject(b))){const fe=te.update(b),ye=b.material;if(H&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Ce.copy(b.boundingSphere.center)):(fe.boundingSphere===null&&fe.computeBoundingSphere(),Ce.copy(fe.boundingSphere.center)),Ce.applyMatrix4(b.matrixWorld).applyMatrix4(he)),Array.isArray(ye)){const _e=fe.groups;for(let Ae=0,Re=_e.length;Ae<Re;Ae++){const Me=_e[Ae],Ye=ye[Me.materialIndex];Ye&&Ye.visible&&_.push(b,fe,Ye,B,Ce.z,Me)}}else ye.visible&&_.push(b,fe,ye,B,Ce.z,null)}}const ae=b.children;for(let fe=0,ye=ae.length;fe<ye;fe++)eu(ae[fe],j,B,H)}function op(b,j,B,H){const F=b.opaque,ae=b.transmissive,fe=b.transparent;m.setupLightsView(B),X===!0&&Ue.setGlobalState(v.clippingPlanes,B),H&&we.viewport(M.copy(H)),F.length>0&&Lo(F,j,B),ae.length>0&&Lo(ae,j,B),fe.length>0&&Lo(fe,j,B),we.buffers.depth.setTest(!0),we.buffers.depth.setMask(!0),we.buffers.color.setMask(!0),we.setPolygonOffset(!1)}function lp(b,j,B,H){if((B.isScene===!0?B.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[H.id]===void 0&&(m.state.transmissionRenderTarget[H.id]=new Jr(1,1,{generateMipmaps:!0,type:Je.has("EXT_color_buffer_half_float")||Je.has("EXT_color_buffer_float")?Ao:Ui,minFilter:Or,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ze.workingColorSpace}));const ae=m.state.transmissionRenderTarget[H.id],fe=H.viewport||M;ae.setSize(fe.z,fe.w);const ye=v.getRenderTarget();v.setRenderTarget(ae),v.getClearColor(O),q=v.getClearAlpha(),q<1&&v.setClearColor(16777215,.5),v.clear(),He&&ge.render(B);const _e=v.toneMapping;v.toneMapping=fr;const Ae=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),m.setupLightsView(H),X===!0&&Ue.setGlobalState(v.clippingPlanes,H),Lo(b,B,H),Ie.updateMultisampleRenderTarget(ae),Ie.updateRenderTargetMipmap(ae),Je.has("WEBGL_multisampled_render_to_texture")===!1){let Re=!1;for(let Me=0,Ye=j.length;Me<Ye;Me++){const xt=j[Me],vt=xt.object,cn=xt.geometry,Ke=xt.material,Ee=xt.group;if(Ke.side===bi&&vt.layers.test(H.layers)){const Ut=Ke.side;Ke.side=an,Ke.needsUpdate=!0,cp(vt,B,H,cn,Ke,Ee),Ke.side=Ut,Ke.needsUpdate=!0,Re=!0}}Re===!0&&(Ie.updateMultisampleRenderTarget(ae),Ie.updateRenderTargetMipmap(ae))}v.setRenderTarget(ye),v.setClearColor(O,q),Ae!==void 0&&(H.viewport=Ae),v.toneMapping=_e}function Lo(b,j,B){const H=j.isScene===!0?j.overrideMaterial:null;for(let F=0,ae=b.length;F<ae;F++){const fe=b[F],ye=fe.object,_e=fe.geometry,Ae=H===null?fe.material:H,Re=fe.group;ye.layers.test(B.layers)&&cp(ye,j,B,_e,Ae,Re)}}function cp(b,j,B,H,F,ae){b.onBeforeRender(v,j,B,H,F,ae),b.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),F.onBeforeRender(v,j,B,H,b,ae),F.transparent===!0&&F.side===bi&&F.forceSinglePass===!1?(F.side=an,F.needsUpdate=!0,v.renderBufferDirect(B,j,H,F,b,ae),F.side=xr,F.needsUpdate=!0,v.renderBufferDirect(B,j,H,F,b,ae),F.side=bi):v.renderBufferDirect(B,j,H,F,b,ae),b.onAfterRender(v,j,B,H,F,ae)}function Do(b,j,B){j.isScene!==!0&&(j=De);const H=Ne.get(b),F=m.state.lights,ae=m.state.shadowsArray,fe=F.state.version,ye=ee.getParameters(b,F.state,ae,j,B),_e=ee.getProgramCacheKey(ye);let Ae=H.programs;H.environment=b.isMeshStandardMaterial?j.environment:null,H.fog=j.fog,H.envMap=(b.isMeshStandardMaterial?E:L).get(b.envMap||H.environment),H.envMapRotation=H.environment!==null&&b.envMap===null?j.environmentRotation:b.envMapRotation,Ae===void 0&&(b.addEventListener("dispose",Te),Ae=new Map,H.programs=Ae);let Re=Ae.get(_e);if(Re!==void 0){if(H.currentProgram===Re&&H.lightsStateVersion===fe)return dp(b,ye),Re}else ye.uniforms=ee.getUniforms(b),b.onBeforeCompile(ye,v),Re=ee.acquireProgram(ye,_e),Ae.set(_e,Re),H.uniforms=ye.uniforms;const Me=H.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Me.clippingPlanes=Ue.uniform),dp(b,ye),H.needsLights=oy(b),H.lightsStateVersion=fe,H.needsLights&&(Me.ambientLightColor.value=F.state.ambient,Me.lightProbe.value=F.state.probe,Me.directionalLights.value=F.state.directional,Me.directionalLightShadows.value=F.state.directionalShadow,Me.spotLights.value=F.state.spot,Me.spotLightShadows.value=F.state.spotShadow,Me.rectAreaLights.value=F.state.rectArea,Me.ltc_1.value=F.state.rectAreaLTC1,Me.ltc_2.value=F.state.rectAreaLTC2,Me.pointLights.value=F.state.point,Me.pointLightShadows.value=F.state.pointShadow,Me.hemisphereLights.value=F.state.hemi,Me.directionalShadowMap.value=F.state.directionalShadowMap,Me.directionalShadowMatrix.value=F.state.directionalShadowMatrix,Me.spotShadowMap.value=F.state.spotShadowMap,Me.spotLightMatrix.value=F.state.spotLightMatrix,Me.spotLightMap.value=F.state.spotLightMap,Me.pointShadowMap.value=F.state.pointShadowMap,Me.pointShadowMatrix.value=F.state.pointShadowMatrix),H.currentProgram=Re,H.uniformsList=null,Re}function up(b){if(b.uniformsList===null){const j=b.currentProgram.getUniforms();b.uniformsList=Fl.seqWithValue(j.seq,b.uniforms)}return b.uniformsList}function dp(b,j){const B=Ne.get(b);B.outputColorSpace=j.outputColorSpace,B.batching=j.batching,B.batchingColor=j.batchingColor,B.instancing=j.instancing,B.instancingColor=j.instancingColor,B.instancingMorph=j.instancingMorph,B.skinning=j.skinning,B.morphTargets=j.morphTargets,B.morphNormals=j.morphNormals,B.morphColors=j.morphColors,B.morphTargetsCount=j.morphTargetsCount,B.numClippingPlanes=j.numClippingPlanes,B.numIntersection=j.numClipIntersection,B.vertexAlphas=j.vertexAlphas,B.vertexTangents=j.vertexTangents,B.toneMapping=j.toneMapping}function sy(b,j,B,H,F){j.isScene!==!0&&(j=De),Ie.resetTextureUnits();const ae=j.fog,fe=H.isMeshStandardMaterial?j.environment:null,ye=A===null?v.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:Mr,_e=(H.isMeshStandardMaterial?E:L).get(H.envMap||fe),Ae=H.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,Re=!!B.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),Me=!!B.morphAttributes.position,Ye=!!B.morphAttributes.normal,xt=!!B.morphAttributes.color;let vt=fr;H.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(vt=v.toneMapping);const cn=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,Ke=cn!==void 0?cn.length:0,Ee=Ne.get(H),Ut=m.state.lights;if(X===!0&&(ie===!0||b!==w)){const Sn=b===w&&H.id===N;Ue.setState(H,b,Sn)}let Qe=!1;H.version===Ee.__version?(Ee.needsLights&&Ee.lightsStateVersion!==Ut.state.version||Ee.outputColorSpace!==ye||F.isBatchedMesh&&Ee.batching===!1||!F.isBatchedMesh&&Ee.batching===!0||F.isBatchedMesh&&Ee.batchingColor===!0&&F.colorTexture===null||F.isBatchedMesh&&Ee.batchingColor===!1&&F.colorTexture!==null||F.isInstancedMesh&&Ee.instancing===!1||!F.isInstancedMesh&&Ee.instancing===!0||F.isSkinnedMesh&&Ee.skinning===!1||!F.isSkinnedMesh&&Ee.skinning===!0||F.isInstancedMesh&&Ee.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&Ee.instancingColor===!1&&F.instanceColor!==null||F.isInstancedMesh&&Ee.instancingMorph===!0&&F.morphTexture===null||F.isInstancedMesh&&Ee.instancingMorph===!1&&F.morphTexture!==null||Ee.envMap!==_e||H.fog===!0&&Ee.fog!==ae||Ee.numClippingPlanes!==void 0&&(Ee.numClippingPlanes!==Ue.numPlanes||Ee.numIntersection!==Ue.numIntersection)||Ee.vertexAlphas!==Ae||Ee.vertexTangents!==Re||Ee.morphTargets!==Me||Ee.morphNormals!==Ye||Ee.morphColors!==xt||Ee.toneMapping!==vt||Ee.morphTargetsCount!==Ke)&&(Qe=!0):(Qe=!0,Ee.__version=H.version);let Un=Ee.currentProgram;Qe===!0&&(Un=Do(H,j,F));let is=!1,un=!1,tu=!1;const wt=Un.getUniforms(),Oi=Ee.uniforms;if(we.useProgram(Un.program)&&(is=!0,un=!0,tu=!0),H.id!==N&&(N=H.id,un=!0),is||w!==b){wt.setValue(I,"projectionMatrix",b.projectionMatrix),wt.setValue(I,"viewMatrix",b.matrixWorldInverse);const Sn=wt.map.cameraPosition;Sn!==void 0&&Sn.setValue(I,de.setFromMatrixPosition(b.matrixWorld)),tt.logarithmicDepthBuffer&&wt.setValue(I,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&wt.setValue(I,"isOrthographic",b.isOrthographicCamera===!0),w!==b&&(w=b,un=!0,tu=!0)}if(F.isSkinnedMesh){wt.setOptional(I,F,"bindMatrix"),wt.setOptional(I,F,"bindMatrixInverse");const Sn=F.skeleton;Sn&&(Sn.boneTexture===null&&Sn.computeBoneTexture(),wt.setValue(I,"boneTexture",Sn.boneTexture,Ie))}F.isBatchedMesh&&(wt.setOptional(I,F,"batchingTexture"),wt.setValue(I,"batchingTexture",F._matricesTexture,Ie),wt.setOptional(I,F,"batchingIdTexture"),wt.setValue(I,"batchingIdTexture",F._indirectTexture,Ie),wt.setOptional(I,F,"batchingColorTexture"),F._colorsTexture!==null&&wt.setValue(I,"batchingColorTexture",F._colorsTexture,Ie));const nu=B.morphAttributes;if((nu.position!==void 0||nu.normal!==void 0||nu.color!==void 0)&&Ve.update(F,B,Un),(un||Ee.receiveShadow!==F.receiveShadow)&&(Ee.receiveShadow=F.receiveShadow,wt.setValue(I,"receiveShadow",F.receiveShadow)),H.isMeshGouraudMaterial&&H.envMap!==null&&(Oi.envMap.value=_e,Oi.flipEnvMap.value=_e.isCubeTexture&&_e.isRenderTargetTexture===!1?-1:1),H.isMeshStandardMaterial&&H.envMap===null&&j.environment!==null&&(Oi.envMapIntensity.value=j.environmentIntensity),un&&(wt.setValue(I,"toneMappingExposure",v.toneMappingExposure),Ee.needsLights&&ay(Oi,tu),ae&&H.fog===!0&&be.refreshFogUniforms(Oi,ae),be.refreshMaterialUniforms(Oi,H,V,D,m.state.transmissionRenderTarget[b.id]),Fl.upload(I,up(Ee),Oi,Ie)),H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(Fl.upload(I,up(Ee),Oi,Ie),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&wt.setValue(I,"center",F.center),wt.setValue(I,"modelViewMatrix",F.modelViewMatrix),wt.setValue(I,"normalMatrix",F.normalMatrix),wt.setValue(I,"modelMatrix",F.matrixWorld),H.isShaderMaterial||H.isRawShaderMaterial){const Sn=H.uniformsGroups;for(let iu=0,ly=Sn.length;iu<ly;iu++){const fp=Sn[iu];ut.update(fp,Un),ut.bind(fp,Un)}}return Un}function ay(b,j){b.ambientLightColor.needsUpdate=j,b.lightProbe.needsUpdate=j,b.directionalLights.needsUpdate=j,b.directionalLightShadows.needsUpdate=j,b.pointLights.needsUpdate=j,b.pointLightShadows.needsUpdate=j,b.spotLights.needsUpdate=j,b.spotLightShadows.needsUpdate=j,b.rectAreaLights.needsUpdate=j,b.hemisphereLights.needsUpdate=j}function oy(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(b,j,B){Ne.get(b.texture).__webglTexture=j,Ne.get(b.depthTexture).__webglTexture=B;const H=Ne.get(b);H.__hasExternalTextures=!0,H.__autoAllocateDepthBuffer=B===void 0,H.__autoAllocateDepthBuffer||Je.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),H.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(b,j){const B=Ne.get(b);B.__webglFramebuffer=j,B.__useDefaultFramebuffer=j===void 0},this.setRenderTarget=function(b,j=0,B=0){A=b,C=j,T=B;let H=!0,F=null,ae=!1,fe=!1;if(b){const _e=Ne.get(b);if(_e.__useDefaultFramebuffer!==void 0)we.bindFramebuffer(I.FRAMEBUFFER,null),H=!1;else if(_e.__webglFramebuffer===void 0)Ie.setupRenderTarget(b);else if(_e.__hasExternalTextures)Ie.rebindTextures(b,Ne.get(b.texture).__webglTexture,Ne.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const Me=b.depthTexture;if(_e.__boundDepthTexture!==Me){if(Me!==null&&Ne.has(Me)&&(b.width!==Me.image.width||b.height!==Me.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Ie.setupDepthRenderbuffer(b)}}const Ae=b.texture;(Ae.isData3DTexture||Ae.isDataArrayTexture||Ae.isCompressedArrayTexture)&&(fe=!0);const Re=Ne.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Re[j])?F=Re[j][B]:F=Re[j],ae=!0):b.samples>0&&Ie.useMultisampledRTT(b)===!1?F=Ne.get(b).__webglMultisampledFramebuffer:Array.isArray(Re)?F=Re[B]:F=Re,M.copy(b.viewport),R.copy(b.scissor),G=b.scissorTest}else M.copy(Z).multiplyScalar(V).floor(),R.copy(oe).multiplyScalar(V).floor(),G=Se;if(we.bindFramebuffer(I.FRAMEBUFFER,F)&&H&&we.drawBuffers(b,F),we.viewport(M),we.scissor(R),we.setScissorTest(G),ae){const _e=Ne.get(b.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+j,_e.__webglTexture,B)}else if(fe){const _e=Ne.get(b.texture),Ae=j||0;I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,_e.__webglTexture,B||0,Ae)}N=-1},this.readRenderTargetPixels=function(b,j,B,H,F,ae,fe){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ye=Ne.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&fe!==void 0&&(ye=ye[fe]),ye){we.bindFramebuffer(I.FRAMEBUFFER,ye);try{const _e=b.texture,Ae=_e.format,Re=_e.type;if(!tt.textureFormatReadable(Ae)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!tt.textureTypeReadable(Re)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}j>=0&&j<=b.width-H&&B>=0&&B<=b.height-F&&I.readPixels(j,B,H,F,Le.convert(Ae),Le.convert(Re),ae)}finally{const _e=A!==null?Ne.get(A).__webglFramebuffer:null;we.bindFramebuffer(I.FRAMEBUFFER,_e)}}},this.readRenderTargetPixelsAsync=async function(b,j,B,H,F,ae,fe){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ye=Ne.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&fe!==void 0&&(ye=ye[fe]),ye){we.bindFramebuffer(I.FRAMEBUFFER,ye);try{const _e=b.texture,Ae=_e.format,Re=_e.type;if(!tt.textureFormatReadable(Ae))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!tt.textureTypeReadable(Re))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(j>=0&&j<=b.width-H&&B>=0&&B<=b.height-F){const Me=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,Me),I.bufferData(I.PIXEL_PACK_BUFFER,ae.byteLength,I.STREAM_READ),I.readPixels(j,B,H,F,Le.convert(Ae),Le.convert(Re),0),I.flush();const Ye=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);await mE(I,Ye,4);try{I.bindBuffer(I.PIXEL_PACK_BUFFER,Me),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,ae)}finally{I.deleteBuffer(Me),I.deleteSync(Ye)}return ae}}finally{const _e=A!==null?Ne.get(A).__webglFramebuffer:null;we.bindFramebuffer(I.FRAMEBUFFER,_e)}}},this.copyFramebufferToTexture=function(b,j=null,B=0){b.isTexture!==!0&&(Ka("WebGLRenderer: copyFramebufferToTexture function signature has changed."),j=arguments[0]||null,b=arguments[1]);const H=Math.pow(2,-B),F=Math.floor(b.image.width*H),ae=Math.floor(b.image.height*H),fe=j!==null?j.x:0,ye=j!==null?j.y:0;Ie.setTexture2D(b,0),I.copyTexSubImage2D(I.TEXTURE_2D,B,0,0,fe,ye,F,ae),we.unbindTexture()},this.copyTextureToTexture=function(b,j,B=null,H=null,F=0){b.isTexture!==!0&&(Ka("WebGLRenderer: copyTextureToTexture function signature has changed."),H=arguments[0]||null,b=arguments[1],j=arguments[2],F=arguments[3]||0,B=null);let ae,fe,ye,_e,Ae,Re;B!==null?(ae=B.max.x-B.min.x,fe=B.max.y-B.min.y,ye=B.min.x,_e=B.min.y):(ae=b.image.width,fe=b.image.height,ye=0,_e=0),H!==null?(Ae=H.x,Re=H.y):(Ae=0,Re=0);const Me=Le.convert(j.format),Ye=Le.convert(j.type);Ie.setTexture2D(j,0),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,j.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,j.unpackAlignment);const xt=I.getParameter(I.UNPACK_ROW_LENGTH),vt=I.getParameter(I.UNPACK_IMAGE_HEIGHT),cn=I.getParameter(I.UNPACK_SKIP_PIXELS),Ke=I.getParameter(I.UNPACK_SKIP_ROWS),Ee=I.getParameter(I.UNPACK_SKIP_IMAGES),Ut=b.isCompressedTexture?b.mipmaps[F]:b.image;I.pixelStorei(I.UNPACK_ROW_LENGTH,Ut.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Ut.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,ye),I.pixelStorei(I.UNPACK_SKIP_ROWS,_e),b.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,F,Ae,Re,ae,fe,Me,Ye,Ut.data):b.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,F,Ae,Re,Ut.width,Ut.height,Me,Ut.data):I.texSubImage2D(I.TEXTURE_2D,F,Ae,Re,ae,fe,Me,Ye,Ut),I.pixelStorei(I.UNPACK_ROW_LENGTH,xt),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,vt),I.pixelStorei(I.UNPACK_SKIP_PIXELS,cn),I.pixelStorei(I.UNPACK_SKIP_ROWS,Ke),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Ee),F===0&&j.generateMipmaps&&I.generateMipmap(I.TEXTURE_2D),we.unbindTexture()},this.copyTextureToTexture3D=function(b,j,B=null,H=null,F=0){b.isTexture!==!0&&(Ka("WebGLRenderer: copyTextureToTexture3D function signature has changed."),B=arguments[0]||null,H=arguments[1]||null,b=arguments[2],j=arguments[3],F=arguments[4]||0);let ae,fe,ye,_e,Ae,Re,Me,Ye,xt;const vt=b.isCompressedTexture?b.mipmaps[F]:b.image;B!==null?(ae=B.max.x-B.min.x,fe=B.max.y-B.min.y,ye=B.max.z-B.min.z,_e=B.min.x,Ae=B.min.y,Re=B.min.z):(ae=vt.width,fe=vt.height,ye=vt.depth,_e=0,Ae=0,Re=0),H!==null?(Me=H.x,Ye=H.y,xt=H.z):(Me=0,Ye=0,xt=0);const cn=Le.convert(j.format),Ke=Le.convert(j.type);let Ee;if(j.isData3DTexture)Ie.setTexture3D(j,0),Ee=I.TEXTURE_3D;else if(j.isDataArrayTexture||j.isCompressedArrayTexture)Ie.setTexture2DArray(j,0),Ee=I.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,j.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,j.unpackAlignment);const Ut=I.getParameter(I.UNPACK_ROW_LENGTH),Qe=I.getParameter(I.UNPACK_IMAGE_HEIGHT),Un=I.getParameter(I.UNPACK_SKIP_PIXELS),is=I.getParameter(I.UNPACK_SKIP_ROWS),un=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,vt.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,vt.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,_e),I.pixelStorei(I.UNPACK_SKIP_ROWS,Ae),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Re),b.isDataTexture||b.isData3DTexture?I.texSubImage3D(Ee,F,Me,Ye,xt,ae,fe,ye,cn,Ke,vt.data):j.isCompressedArrayTexture?I.compressedTexSubImage3D(Ee,F,Me,Ye,xt,ae,fe,ye,cn,vt.data):I.texSubImage3D(Ee,F,Me,Ye,xt,ae,fe,ye,cn,Ke,vt),I.pixelStorei(I.UNPACK_ROW_LENGTH,Ut),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Qe),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Un),I.pixelStorei(I.UNPACK_SKIP_ROWS,is),I.pixelStorei(I.UNPACK_SKIP_IMAGES,un),F===0&&j.generateMipmaps&&I.generateMipmap(Ee),we.unbindTexture()},this.initRenderTarget=function(b){Ne.get(b).__webglFramebuffer===void 0&&Ie.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?Ie.setTextureCube(b,0):b.isData3DTexture?Ie.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?Ie.setTexture2DArray(b,0):Ie.setTexture2D(b,0),we.unbindTexture()},this.resetState=function(){C=0,T=0,A=null,we.reset(),ze.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ri}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===Zh?"display-p3":"srgb",n.unpackColorSpace=Ze.workingColorSpace===Yc?"display-p3":"srgb"}}class TA extends $t{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new di,this.environmentIntensity=1,this.environmentRotation=new di,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class Q0 extends ma{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new qe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Mc=new z,Ec=new z,Ag=new pt,Ia=new j0,_l=new Kc,sd=new z,Cg=new z;class AA extends $t{constructor(e=new $n,n=new Q0){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[0];for(let r=1,s=n.count;r<s;r++)Mc.fromBufferAttribute(n,r-1),Ec.fromBufferAttribute(n,r),i[r]=i[r-1],i[r]+=Mc.distanceTo(Ec);e.setAttribute("lineDistance",new ln(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),_l.copy(i.boundingSphere),_l.applyMatrix4(r),_l.radius+=s,e.ray.intersectsSphere(_l)===!1)return;Ag.copy(r).invert(),Ia.copy(e.ray).applyMatrix4(Ag);const l=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=l*l,u=this.isLineSegments?2:1,f=i.index,p=i.attributes.position;if(f!==null){const g=Math.max(0,o.start),y=Math.min(f.count,o.start+o.count);for(let _=g,m=y-1;_<m;_+=u){const d=f.getX(_),x=f.getX(_+1),v=Sl(this,e,Ia,c,d,x);v&&n.push(v)}if(this.isLineLoop){const _=f.getX(y-1),m=f.getX(g),d=Sl(this,e,Ia,c,_,m);d&&n.push(d)}}else{const g=Math.max(0,o.start),y=Math.min(p.count,o.start+o.count);for(let _=g,m=y-1;_<m;_+=u){const d=Sl(this,e,Ia,c,_,_+1);d&&n.push(d)}if(this.isLineLoop){const _=Sl(this,e,Ia,c,y-1,g);_&&n.push(_)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const l=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=s}}}}}function Sl(t,e,n,i,r,s){const o=t.geometry.attributes.position;if(Mc.fromBufferAttribute(o,r),Ec.fromBufferAttribute(o,s),n.distanceSqToSegment(Mc,Ec,sd,Cg)>i)return;sd.applyMatrix4(t.matrixWorld);const c=e.ray.origin.distanceTo(sd);if(!(c<e.near||c>e.far))return{distance:c,point:Cg.clone().applyMatrix4(t.matrixWorld),index:r,face:null,faceIndex:null,object:t}}class tp extends $n{constructor(e=[],n=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:n,radius:i,detail:r};const s=[],o=[];l(r),u(i),f(),this.setAttribute("position",new ln(s,3)),this.setAttribute("normal",new ln(s.slice(),3)),this.setAttribute("uv",new ln(o,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function l(x){const v=new z,S=new z,C=new z;for(let T=0;T<n.length;T+=3)g(n[T+0],v),g(n[T+1],S),g(n[T+2],C),c(v,S,C,x)}function c(x,v,S,C){const T=C+1,A=[];for(let N=0;N<=T;N++){A[N]=[];const w=x.clone().lerp(S,N/T),M=v.clone().lerp(S,N/T),R=T-N;for(let G=0;G<=R;G++)G===0&&N===T?A[N][G]=w:A[N][G]=w.clone().lerp(M,G/R)}for(let N=0;N<T;N++)for(let w=0;w<2*(T-N)-1;w++){const M=Math.floor(w/2);w%2===0?(p(A[N][M+1]),p(A[N+1][M]),p(A[N][M])):(p(A[N][M+1]),p(A[N+1][M+1]),p(A[N+1][M]))}}function u(x){const v=new z;for(let S=0;S<s.length;S+=3)v.x=s[S+0],v.y=s[S+1],v.z=s[S+2],v.normalize().multiplyScalar(x),s[S+0]=v.x,s[S+1]=v.y,s[S+2]=v.z}function f(){const x=new z;for(let v=0;v<s.length;v+=3){x.x=s[v+0],x.y=s[v+1],x.z=s[v+2];const S=m(x)/2/Math.PI+.5,C=d(x)/Math.PI+.5;o.push(S,1-C)}y(),h()}function h(){for(let x=0;x<o.length;x+=6){const v=o[x+0],S=o[x+2],C=o[x+4],T=Math.max(v,S,C),A=Math.min(v,S,C);T>.9&&A<.1&&(v<.2&&(o[x+0]+=1),S<.2&&(o[x+2]+=1),C<.2&&(o[x+4]+=1))}}function p(x){s.push(x.x,x.y,x.z)}function g(x,v){const S=x*3;v.x=e[S+0],v.y=e[S+1],v.z=e[S+2]}function y(){const x=new z,v=new z,S=new z,C=new z,T=new Fe,A=new Fe,N=new Fe;for(let w=0,M=0;w<s.length;w+=9,M+=6){x.set(s[w+0],s[w+1],s[w+2]),v.set(s[w+3],s[w+4],s[w+5]),S.set(s[w+6],s[w+7],s[w+8]),T.set(o[M+0],o[M+1]),A.set(o[M+2],o[M+3]),N.set(o[M+4],o[M+5]),C.copy(x).add(v).add(S).divideScalar(3);const R=m(C);_(T,M+0,x,R),_(A,M+2,v,R),_(N,M+4,S,R)}}function _(x,v,S,C){C<0&&x.x===1&&(o[v]=x.x-1),S.x===0&&S.z===0&&(o[v]=C/2/Math.PI+.5)}function m(x){return Math.atan2(x.z,-x.x)}function d(x){return Math.atan2(-x.y,Math.sqrt(x.x*x.x+x.z*x.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new tp(e.vertices,e.indices,e.radius,e.details)}}class np extends tp{constructor(e=1,n=0){const i=(1+Math.sqrt(5))/2,r=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,s,e,n),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:n}}static fromJSON(e){return new np(e.radius,e.detail)}}class wc extends $n{constructor(e=1,n=32,i=16,r=0,s=Math.PI*2,o=0,l=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:l},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const c=Math.min(o+l,Math.PI);let u=0;const f=[],h=new z,p=new z,g=[],y=[],_=[],m=[];for(let d=0;d<=i;d++){const x=[],v=d/i;let S=0;d===0&&o===0?S=.5/n:d===i&&c===Math.PI&&(S=-.5/n);for(let C=0;C<=n;C++){const T=C/n;h.x=-e*Math.cos(r+T*s)*Math.sin(o+v*l),h.y=e*Math.cos(o+v*l),h.z=e*Math.sin(r+T*s)*Math.sin(o+v*l),y.push(h.x,h.y,h.z),p.copy(h).normalize(),_.push(p.x,p.y,p.z),m.push(T+S,1-v),x.push(u++)}f.push(x)}for(let d=0;d<i;d++)for(let x=0;x<n;x++){const v=f[d][x+1],S=f[d][x],C=f[d+1][x],T=f[d+1][x+1];(d!==0||o>0)&&g.push(v,S,T),(d!==i-1||c<Math.PI)&&g.push(S,C,T)}this.setIndex(g),this.setAttribute("position",new ln(y,3)),this.setAttribute("normal",new ln(_,3)),this.setAttribute("uv",new ln(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new wc(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class CA extends ma{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new qe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new qe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=L0,this.normalScale=new Fe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new di,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Z0 extends $t{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new qe(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(n.object.target=this.target.uuid),n}}const ad=new pt,Rg=new z,Pg=new z;class RA{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Fe(512,512),this.map=null,this.mapPass=null,this.matrix=new pt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Jh,this._frameExtents=new Fe(1,1),this._viewportCount=1,this._viewports=[new ot(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;Rg.setFromMatrixPosition(e.matrixWorld),n.position.copy(Rg),Pg.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(Pg),n.updateMatrixWorld(),ad.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ad),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(ad)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Ng=new pt,Ua=new z,od=new z;class PA extends RA{constructor(){super(new pn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Fe(4,2),this._viewportCount=6,this._viewports=[new ot(2,1,1,1),new ot(0,1,1,1),new ot(3,1,1,1),new ot(1,1,1,1),new ot(3,0,1,1),new ot(1,0,1,1)],this._cubeDirections=[new z(1,0,0),new z(-1,0,0),new z(0,0,1),new z(0,0,-1),new z(0,1,0),new z(0,-1,0)],this._cubeUps=[new z(0,1,0),new z(0,1,0),new z(0,1,0),new z(0,1,0),new z(0,0,1),new z(0,0,-1)]}updateMatrices(e,n=0){const i=this.camera,r=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),Ua.setFromMatrixPosition(e.matrixWorld),i.position.copy(Ua),od.copy(i.position),od.add(this._cubeDirections[n]),i.up.copy(this._cubeUps[n]),i.lookAt(od),i.updateMatrixWorld(),r.makeTranslation(-Ua.x,-Ua.y,-Ua.z),Ng.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ng)}}class Lg extends Z0{constructor(e,n,i=0,r=2){super(e,n),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new PA}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class NA extends Z0{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}class LA{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Dg(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=Dg();e=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=e}return e}}function Dg(){return(typeof performance>"u"?Date:performance).now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Gh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Gh);const DA=()=>{const t=P.useRef(null);return P.useEffect(()=>{const e=t.current;if(!e)return;const n=new TA,i=new pn(45,e.clientWidth/e.clientHeight,.1,1e3);i.position.z=18;const r=new bA({alpha:!0,antialias:!0});r.setSize(e.clientWidth,e.clientHeight),r.setPixelRatio(Math.min(window.devicePixelRatio,2)),e.appendChild(r.domElement);const s=new Us;n.add(s);const o=new np(3.5,1),l=new CA({color:6514417,wireframe:!0,transparent:!0,opacity:.4,roughness:.2,metalness:.8}),c=new An(o,l);s.add(c);const u=new wc(2.2,16,16),f=new Sc({color:440020,wireframe:!0,transparent:!0,opacity:.25}),h=new An(u,f);s.add(h);const p=45,g=new wc(.16,8,8),y=new Sc({color:3718648}),_=[];for(let q=0;q<p;q++){const $=new An(g,y),D=Math.random()*Math.PI*2,V=Math.acos(Math.random()*2-1),U=4.2+Math.random()*2.8;$.position.x=U*Math.sin(V)*Math.cos(D),$.position.y=U*Math.sin(V)*Math.sin(D),$.position.z=U*Math.cos(V),s.add($),_.push({mesh:$,speed:.005+Math.random()*.01,radius:U,theta:D,phi:V})}const m=new Q0({color:6514417,transparent:!0,opacity:.2}),d=new Us;s.add(d);for(let q=0;q<_.length;q+=2)if(q+1<_.length){const $=[_[q].mesh.position,_[q+1].mesh.position],D=new $n().setFromPoints($),V=new AA(D,m);d.add(V)}const x=new NA(16777215,.8);n.add(x);const v=new Lg(440020,2,50);v.position.set(5,8,10),n.add(v);const S=new Lg(6514417,2,50);S.position.set(-8,-6,-5),n.add(S);let C=0,T=0,A=0,N=0;const w=q=>{const $=e.getBoundingClientRect();C=(q.clientX-$.left)/e.clientWidth*2-1,T=-((q.clientY-$.top)/e.clientHeight*2-1)};window.addEventListener("mousemove",w);const M=()=>{e&&(i.aspect=e.clientWidth/e.clientHeight,i.updateProjectionMatrix(),r.setSize(e.clientWidth,e.clientHeight))};window.addEventListener("resize",M);let R;const G=new LA,O=()=>{R=requestAnimationFrame(O);const q=G.getElapsedTime();A+=(C*.5-A)*.05,N+=(T*.5-N)*.05,s.rotation.y=q*.15+A,s.rotation.x=q*.08+N,c.rotation.z=q*.1,h.rotation.y=-q*.2,_.forEach(($,D)=>{$.mesh.position.y+=Math.sin(q*2+D)*.003}),r.render(n,i)};return O(),()=>{window.removeEventListener("mousemove",w),window.removeEventListener("resize",M),cancelAnimationFrame(R),r.domElement&&e.contains(r.domElement)&&e.removeChild(r.domElement),r.dispose()}},[]),a.jsx("div",{ref:t,style:{width:"100%",height:"100%",minHeight:"380px",position:"relative",cursor:"grab"}})},IA=({className:t=""})=>{const{theme:e,toggleTheme:n}=v0();return a.jsx("button",{onClick:n,className:`btn-icon btn-secondary ${t}`,title:`Switch to ${e==="dark"?"Light":"Dark"} mode`,"aria-label":"Toggle Theme",style:{width:"38px",height:"38px",borderRadius:"var(--radius-md)",display:"inline-flex",alignItems:"center",justifyContent:"center",transition:"all 0.2s ease"},children:e==="dark"?a.jsx(p0,{size:18,color:"#f59e0b",className:"animate-scale-in"}):a.jsx(u0,{size:18,color:"#6366f1",className:"animate-scale-in"})})},hr={getMyNotifications:t=>nt.get("/notifications",t),getUnreadCount:()=>nt.get("/notifications/unread-count"),markAsRead:t=>nt.put(`/notifications/${t}/read`),markAllAsRead:()=>nt.put("/notifications/mark-all/read")},UA=()=>{const[t,e]=P.useState(!1),[n,i]=P.useState([]),[r,s]=P.useState(0),[o,l]=P.useState(!1),c=P.useRef(null),u=hi(),{user:f}=pi(),h=async()=>{if(f)try{l(!0);const m=await hr.getMyNotifications({limit:8});m.success&&(i(m.notifications||[]),s(m.unreadCount||0))}catch(m){console.error("Failed to load notifications:",m)}finally{l(!1)}};P.useEffect(()=>{h();const m=setInterval(h,15e3);return()=>clearInterval(m)},[f]),P.useEffect(()=>{const m=d=>{c.current&&!c.current.contains(d.target)&&e(!1)};return document.addEventListener("mousedown",m),()=>document.removeEventListener("mousedown",m)},[]);const p=async(m,d)=>{try{await hr.markAsRead(m),i(x=>x.map(v=>v.id===m?{...v,read:!0}:v)),s(x=>Math.max(0,x-1))}catch(x){console.error("Failed to mark read:",x)}},g=async()=>{try{await hr.markAllAsRead(),i(m=>m.map(d=>({...d,read:!0}))),s(0)}catch(m){console.error("Failed to mark all read:",m)}},y=async m=>{m.read||await p(m.id),e(!1),m.link&&u(m.link)},_=m=>{switch(m){case"URGENT_ALERT":return a.jsx(Wc,{size:16,color:"#ef4444"});case"EVENT":return a.jsx(sn,{size:16,color:"#06b6d4"});case"QUERY_REPLY":return a.jsx(ui,{size:16,color:"#10b981"});default:return a.jsx(si,{size:16,color:"#6366f1"})}};return a.jsxs("div",{className:"notification-dropdown-wrapper",ref:c,style:{position:"relative"},children:[a.jsxs("button",{onClick:()=>e(!t),className:"btn-icon btn-secondary",style:{width:"38px",height:"38px",borderRadius:"var(--radius-md)",position:"relative"},title:"Notifications","aria-label":"View notifications",children:[a.jsx(si,{size:18}),r>0&&a.jsx("span",{className:"animate-badge-ping",style:{position:"absolute",top:"6px",right:"6px",width:"18px",height:"18px",background:"#ef4444",color:"#ffffff",fontSize:"0.68rem",fontWeight:800,borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",border:"2px solid var(--bg-secondary)"},children:r>9?"9+":r})]}),t&&a.jsxs("div",{className:"animate-scale-in",style:{position:"absolute",top:"calc(100% + 10px)",right:"0",width:"360px",maxWidth:"90vw",background:"var(--bg-dropdown)",border:"1px solid var(--border-color)",borderRadius:"var(--radius-lg)",boxShadow:"var(--shadow-lg)",zIndex:1e3,overflow:"hidden",backdropFilter:"blur(16px)"},children:[a.jsxs("div",{style:{padding:"14px 18px",borderBottom:"1px solid var(--border-color)",display:"flex",alignItems:"center",justifyContent:"space-between",background:"var(--bg-tertiary)"},children:[a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[a.jsx("span",{style:{fontWeight:700,fontSize:"0.95rem",color:"var(--text-primary)"},children:"Notifications"}),r>0&&a.jsxs("span",{className:"badge badge-normal",style:{fontSize:"0.7rem"},children:[r," new"]})]}),r>0&&a.jsxs("button",{onClick:g,style:{background:"none",border:"none",color:"var(--accent-primary)",fontSize:"0.78rem",fontWeight:600,cursor:"pointer",display:"flex",alignItems:"center",gap:"4px"},children:[a.jsx(Fh,{size:14}),"Mark all read"]})]}),a.jsx("div",{style:{maxHeight:"340px",overflowY:"auto"},children:o&&n.length===0?a.jsx("div",{style:{padding:"24px",textAlign:"center",color:"var(--text-tertiary)"},children:"Loading notifications..."}):n.length===0?a.jsxs("div",{style:{padding:"32px 20px",textAlign:"center"},children:[a.jsx(si,{size:28,color:"var(--text-tertiary)",style:{margin:"0 auto 8px",opacity:.5}}),a.jsx("p",{style:{fontSize:"0.88rem",color:"var(--text-secondary)",margin:0},children:"You're all caught up!"}),a.jsx("span",{style:{fontSize:"0.76rem",color:"var(--text-tertiary)"},children:"No new notifications right now"})]}):n.map(m=>a.jsxs("div",{onClick:()=>y(m),style:{padding:"12px 16px",borderBottom:"1px solid var(--border-subtle)",cursor:"pointer",background:m.read?"transparent":"var(--bg-elevated)",transition:"background var(--transition-fast)",display:"flex",gap:"12px",alignItems:"flex-start"},onMouseEnter:d=>d.currentTarget.style.background="var(--bg-tertiary)",onMouseLeave:d=>d.currentTarget.style.background=m.read?"transparent":"var(--bg-elevated)",children:[a.jsx("div",{style:{padding:"6px",borderRadius:"var(--radius-sm)",background:"var(--bg-tertiary)",display:"flex",alignItems:"center",justifyContent:"center",marginTop:"2px"},children:_(m.type)}),a.jsxs("div",{style:{flex:1,minWidth:0},children:[a.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",gap:"6px"},children:[a.jsx("p",{style:{fontSize:"0.86rem",fontWeight:m.read?600:700,color:"var(--text-primary)",margin:0,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:m.title}),!m.read&&a.jsx("span",{style:{width:"7px",height:"7px",borderRadius:"50%",background:"#6366f1",flexShrink:0}})]}),a.jsx("p",{style:{fontSize:"0.8rem",color:"var(--text-secondary)",margin:"2px 0 6px",lineHeight:1.3,display:"-webkit-box",WebkitLineClamp:2,WebkitBoxOrient:"vertical",overflow:"hidden"},children:m.message}),a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"4px",color:"var(--text-tertiary)",fontSize:"0.72rem"},children:[a.jsx(li,{size:11}),a.jsx("span",{children:new Date(m.createdAt).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})})]})]})]},m.id))}),(f==null?void 0:f.role)==="STUDENT"&&a.jsx("div",{style:{padding:"10px",textAlign:"center",borderTop:"1px solid var(--border-color)",background:"var(--bg-tertiary)"},children:a.jsx("button",{onClick:()=>{e(!1),u("/student/notifications")},className:"btn-outline btn-sm",style:{width:"100%",fontSize:"0.78rem"},children:"View all notifications"})})]})]})},ni={getAll:t=>nt.get("/announcements",t),getById:t=>nt.get(`/announcements/${t}`),create:t=>nt.post("/announcements",t),update:(t,e)=>nt.put(`/announcements/${t}`,e),delete:t=>nt.delete(`/announcements/${t}`)},kA=()=>{const[t,e]=P.useState(!1),[n,i]=P.useState([]),[r,s]=P.useState(!1),o=P.useRef(null),l=hi(),c=async()=>{try{s(!0);const u=await ni.getAll({priority:"URGENT",limit:5});u.success&&i(u.announcements||[])}catch(u){console.error("Failed to load urgent alerts:",u)}finally{s(!1)}};return P.useEffect(()=>{c();const u=setInterval(c,2e4);return()=>clearInterval(u)},[]),P.useEffect(()=>{const u=f=>{o.current&&!o.current.contains(f.target)&&e(!1)};return document.addEventListener("mousedown",u),()=>document.removeEventListener("mousedown",u)},[]),n.length===0?null:a.jsxs("div",{className:"urgent-alert-dropdown-wrapper",ref:o,style:{position:"relative"},children:[a.jsxs("button",{onClick:()=>e(!t),className:"btn-sm animate-pulse-glow",style:{background:"rgba(239, 68, 68, 0.18)",color:"#f87171",border:"1px solid rgba(239, 68, 68, 0.5)",borderRadius:"var(--radius-full)",padding:"6px 12px",display:"inline-flex",alignItems:"center",gap:"6px",fontWeight:700,cursor:"pointer"},title:"Urgent Campus Alerts",children:[a.jsx(Ln,{size:15,color:"#ef4444"}),a.jsxs("span",{style:{fontSize:"0.8rem"},children:[n.length," Urgent ",n.length===1?"Alert":"Alerts"]})]}),t&&a.jsxs("div",{className:"animate-scale-in",style:{position:"absolute",top:"calc(100% + 10px)",right:"0",width:"380px",maxWidth:"90vw",background:"var(--bg-dropdown)",border:"1px solid rgba(239, 68, 68, 0.4)",borderRadius:"var(--radius-lg)",boxShadow:"var(--shadow-glow-urgent)",zIndex:1e3,overflow:"hidden",backdropFilter:"blur(16px)"},children:[a.jsxs("div",{style:{padding:"14px 18px",borderBottom:"1px solid rgba(239, 68, 68, 0.2)",display:"flex",alignItems:"center",justifyContent:"space-between",background:"rgba(239, 68, 68, 0.1)"},children:[a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[a.jsx(pc,{size:18,color:"#ef4444"}),a.jsx("span",{style:{fontWeight:800,fontSize:"0.92rem",color:"#f87171",letterSpacing:"0.02em"},children:"URGENT CAMPUS BROADCASTS"})]}),a.jsx("span",{className:"badge badge-urgent",style:{fontSize:"0.68rem"},children:"Active"})]}),a.jsx("div",{style:{maxHeight:"320px",overflowY:"auto"},children:n.map(u=>a.jsxs("div",{onClick:()=>{e(!1),l("/student/urgent-alerts")},style:{padding:"14px 18px",borderBottom:"1px solid var(--border-subtle)",cursor:"pointer",background:"transparent",transition:"background var(--transition-fast)"},onMouseEnter:f=>f.currentTarget.style.background="rgba(239, 68, 68, 0.08)",onMouseLeave:f=>f.currentTarget.style.background="transparent",children:[a.jsxs("div",{style:{display:"flex",alignItems:"flex-start",justifyContent:"space-between",gap:"8px"},children:[a.jsx("h4",{style:{fontSize:"0.88rem",fontWeight:700,color:"var(--text-primary)",margin:0},children:u.title}),a.jsx(Oh,{size:16,color:"var(--text-tertiary)",style:{flexShrink:0,marginTop:"2px"}})]}),a.jsx("p",{style:{fontSize:"0.8rem",color:"var(--text-secondary)",margin:"6px 0 8px",lineHeight:1.35,display:"-webkit-box",WebkitLineClamp:2,WebkitBoxOrient:"vertical",overflow:"hidden"},children:u.description}),a.jsxs("div",{style:{fontSize:"0.72rem",color:"#f87171",fontWeight:600},children:["Posted ",new Date(u.createdAt).toLocaleString([],{dateStyle:"medium",timeStyle:"short"})]})]},u.id))}),a.jsx("div",{style:{padding:"12px",textAlign:"center",borderTop:"1px solid var(--border-color)",background:"var(--bg-tertiary)"},children:a.jsxs("button",{onClick:()=>{e(!1),l("/student/urgent-alerts")},className:"btn-danger btn-sm",style:{width:"100%",display:"flex",alignItems:"center",justifyContent:"center",gap:"6px"},children:[a.jsx("span",{children:"View all urgent broadcasts"}),a.jsx(Fi,{size:14})]})})]})]})},xa=({onToggleSidebar:t=null})=>{var h;const{user:e,isAuthenticated:n,isAdmin:i,isStudent:r,logout:s}=pi(),[o,l]=P.useState(!1),c=P.useRef(null),u=hi();fi(),P.useEffect(()=>{const p=g=>{c.current&&!c.current.contains(g.target)&&l(!1)};return document.addEventListener("mousedown",p),()=>document.removeEventListener("mousedown",p)},[]);const f=async()=>{l(!1),await s(),u("/")};return a.jsxs("header",{style:{height:"70px",background:"var(--bg-glass-strong)",backdropFilter:"blur(16px)",WebkitBackdropFilter:"blur(16px)",borderBottom:"1px solid var(--border-color)",position:"sticky",top:0,zIndex:100,display:"flex",alignItems:"center",justifyContent:"space-between",padding:"0 24px"},children:[a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"16px"},children:[t&&a.jsx("button",{onClick:t,className:"btn-icon btn-secondary",style:{width:"38px",height:"38px"},"aria-label":"Toggle navigation",children:a.jsx(uM,{size:20})}),a.jsxs(We,{to:n?i?"/admin/overview":"/student/home":"/",style:{display:"flex",alignItems:"center",gap:"10px",textDecoration:"none"},children:[a.jsx("div",{style:{width:"38px",height:"38px",borderRadius:"var(--radius-md)",background:"var(--accent-gradient)",display:"flex",alignItems:"center",justifyContent:"center",color:"#ffffff",boxShadow:"0 4px 12px var(--accent-primary-glow)"},children:a.jsx(ua,{size:22})}),a.jsxs("div",{children:[a.jsx("span",{style:{fontFamily:"var(--font-heading)",fontSize:"1.28rem",fontWeight:900,letterSpacing:"-0.02em",background:"var(--accent-gradient)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",display:"block",lineHeight:1.1},children:"NotifyHub"}),a.jsx("span",{style:{fontSize:"0.66rem",fontWeight:700,color:"var(--text-tertiary)",letterSpacing:"0.06em",textTransform:"uppercase"},children:"Campus Portal"})]})]})]}),a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"12px"},children:[a.jsx(kA,{}),a.jsx(IA,{}),n&&a.jsx(UA,{}),n?a.jsxs("div",{ref:c,style:{position:"relative"},children:[a.jsxs("button",{onClick:()=>l(!o),style:{display:"flex",alignItems:"center",gap:"10px",padding:"6px 10px",borderRadius:"var(--radius-md)",background:"var(--bg-tertiary)",border:"1px solid var(--border-color)",cursor:"pointer",color:"var(--text-primary)"},children:[a.jsx("div",{style:{width:"32px",height:"32px",borderRadius:"50%",background:i?"var(--accent-gradient-purple)":"var(--accent-gradient)",color:"#ffffff",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"0.85rem",fontWeight:700},children:e!=null&&e.name?e.name.charAt(0).toUpperCase():"U"}),a.jsxs("div",{style:{textAlign:"left",display:"none",minWidth:"80px"},className:"nav-user-text",children:[a.jsx("span",{style:{fontSize:"0.84rem",fontWeight:700,display:"block",lineHeight:1.2},children:(h=e==null?void 0:e.name)==null?void 0:h.split(" ")[0]}),a.jsx("span",{style:{fontSize:"0.7rem",color:"var(--text-tertiary)"},children:i?"Administrator":(e==null?void 0:e.rollNumber)||"Student"})]}),a.jsx(YS,{size:14,color:"var(--text-tertiary)"})]}),o&&a.jsxs("div",{className:"animate-scale-in",style:{position:"absolute",top:"calc(100% + 8px)",right:0,width:"240px",background:"var(--bg-dropdown)",border:"1px solid var(--border-color)",borderRadius:"var(--radius-md)",boxShadow:"var(--shadow-lg)",zIndex:1e3,overflow:"hidden"},children:[a.jsxs("div",{style:{padding:"14px 16px",borderBottom:"1px solid var(--border-color)",background:"var(--bg-tertiary)"},children:[a.jsx("p",{style:{margin:0,fontWeight:700,fontSize:"0.9rem",color:"var(--text-primary)"},children:e==null?void 0:e.name}),a.jsx("p",{style:{margin:"2px 0 0",fontSize:"0.76rem",color:"var(--text-tertiary)"},children:e==null?void 0:e.email}),a.jsx("div",{style:{marginTop:"6px"},children:a.jsx("span",{className:`badge ${i?"badge-urgent":"badge-normal"}`,style:{fontSize:"0.68rem"},children:e==null?void 0:e.role})})]}),a.jsxs("div",{style:{padding:"6px"},children:[r&&a.jsxs(We,{to:"/student/profile",onClick:()=>l(!1),style:{display:"flex",alignItems:"center",gap:"10px",padding:"10px 12px",fontSize:"0.86rem",color:"var(--text-primary)",borderRadius:"var(--radius-sm)",textDecoration:"none"},onMouseEnter:p=>p.currentTarget.style.background="var(--bg-tertiary)",onMouseLeave:p=>p.currentTarget.style.background="transparent",children:[a.jsx(To,{size:16}),a.jsx("span",{children:"Student Profile"})]}),i&&a.jsxs(We,{to:"/admin/settings",onClick:()=>l(!1),style:{display:"flex",alignItems:"center",gap:"10px",padding:"10px 12px",fontSize:"0.86rem",color:"var(--text-primary)",borderRadius:"var(--radius-sm)",textDecoration:"none"},onMouseEnter:p=>p.currentTarget.style.background="var(--bg-tertiary)",onMouseLeave:p=>p.currentTarget.style.background="transparent",children:[a.jsx(xo,{size:16}),a.jsx("span",{children:"Admin Settings"})]}),a.jsxs("button",{onClick:f,style:{width:"100%",display:"flex",alignItems:"center",gap:"10px",padding:"10px 12px",fontSize:"0.86rem",color:"#ef4444",background:"none",border:"none",borderRadius:"var(--radius-sm)",cursor:"pointer",textAlign:"left"},onMouseEnter:p=>p.currentTarget.style.background="rgba(239, 68, 68, 0.1)",onMouseLeave:p=>p.currentTarget.style.background="transparent",children:[a.jsx(c0,{size:16}),a.jsx("span",{children:"Sign Out"})]})]})]})]}):a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[a.jsx(We,{to:"/student/login",className:"btn-secondary btn-sm",children:"Student Login"}),a.jsx(We,{to:"/admin/login",className:"btn-primary btn-sm",children:"Admin Portal"})]})]})]})},Jc=()=>a.jsx("footer",{style:{background:"var(--bg-secondary)",borderTop:"1px solid var(--border-color)",padding:"48px 24px 24px",color:"var(--text-secondary)"},children:a.jsxs("div",{className:"container",children:[a.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(240px, 1fr))",gap:"36px",marginBottom:"36px"},children:[a.jsxs("div",{children:[a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px",marginBottom:"14px"},children:[a.jsx("div",{style:{width:"34px",height:"34px",borderRadius:"var(--radius-sm)",background:"var(--accent-gradient)",display:"flex",alignItems:"center",justifyContent:"center",color:"#ffffff"},children:a.jsx(ua,{size:20})}),a.jsx("span",{style:{fontFamily:"var(--font-heading)",fontSize:"1.2rem",fontWeight:800,color:"var(--text-primary)"},children:"NotifyHub"})]}),a.jsx("p",{style:{fontSize:"0.88rem",lineHeight:1.6,color:"var(--text-secondary)",marginBottom:"14px"},children:"The modern college communication and instant notification platform. Connecting students, faculty, and administrative staff across campus."}),a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px",fontSize:"0.8rem",color:"var(--text-tertiary)"},children:[a.jsx(xo,{size:14,color:"#10b981"}),a.jsx("span",{children:"Campus Security & ISO 27001 Certified System"})]})]}),a.jsxs("div",{children:[a.jsx("h4",{style:{fontSize:"0.96rem",fontWeight:700,color:"var(--text-primary)",marginBottom:"16px"},children:"Quick Navigation"}),a.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"10px",fontSize:"0.88rem"},children:[a.jsx(We,{to:"/student/announcements",style:{color:"var(--text-secondary)"},children:"Announcements Board"}),a.jsx(We,{to:"/student/urgent-alerts",style:{color:"#ef4444"},children:"Urgent Campus Alerts"}),a.jsx(We,{to:"/student/calendar",style:{color:"var(--text-secondary)"},children:"Academic & Events Calendar"}),a.jsx(We,{to:"/student/qa",style:{color:"var(--text-secondary)"},children:"Student Helpdesk & Q&A"}),a.jsx(We,{to:"/student/about",style:{color:"var(--text-secondary)"},children:"About College & Departments"})]})]}),a.jsxs("div",{children:[a.jsx("h4",{style:{fontSize:"0.96rem",fontWeight:700,color:"var(--text-primary)",marginBottom:"16px"},children:"Account Portals"}),a.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"10px",fontSize:"0.88rem"},children:[a.jsx(We,{to:"/student/login",style:{color:"var(--text-secondary)"},children:"Student Login Portal"}),a.jsx(We,{to:"/student/register",style:{color:"var(--text-secondary)"},children:"Student Registration"}),a.jsx(We,{to:"/admin/login",style:{color:"var(--accent-primary)"},children:"Administrator Portal"}),a.jsx(We,{to:"/student/profile",style:{color:"var(--text-secondary)"},children:"Manage Profile & Password"})]})]}),a.jsxs("div",{children:[a.jsx("h4",{style:{fontSize:"0.96rem",fontWeight:700,color:"var(--text-primary)",marginBottom:"16px"},children:"Campus Information"}),a.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"14px",fontSize:"0.86rem"},children:[a.jsxs("div",{style:{display:"flex",alignItems:"flex-start",gap:"10px"},children:[a.jsx(fa,{size:16,color:"var(--accent-primary)",style:{flexShrink:0,marginTop:"3px"}}),a.jsxs("div",{children:[a.jsx("strong",{style:{color:"var(--text-primary)",display:"block",marginBottom:"2px",fontSize:"0.88rem"},children:"Vignan Institute of Technology and Science"}),a.jsx("span",{children:"Deshmukhi(V), Pochampally(M), Yadadri-Bhuvanagiri District, Telangana - 508284"})]})]}),a.jsxs("div",{style:{display:"flex",alignItems:"flex-start",gap:"10px"},children:[a.jsx(Vh,{size:16,color:"var(--accent-primary)",style:{flexShrink:0,marginTop:"3px"}}),a.jsxs("div",{children:[a.jsx("a",{href:"tel:08685226128",style:{color:"inherit",textDecoration:"none",display:"block"},children:"08685-226128"}),a.jsx("span",{style:{color:"var(--text-secondary)"},children:"9866399776 / 861"})]})]}),a.jsxs("div",{style:{display:"flex",alignItems:"flex-start",gap:"10px"},children:[a.jsx(da,{size:16,color:"var(--accent-primary)",style:{flexShrink:0,marginTop:"3px"}}),a.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"3px"},children:[a.jsx("a",{href:"mailto:principal.vgnt89@gmail.com",style:{color:"var(--text-secondary)",textDecoration:"none"},children:"principal.vgnt89@gmail.com"}),a.jsx("a",{href:"mailto:principal.vits@gmail.com",style:{color:"var(--text-secondary)",textDecoration:"none"},children:"principal.vits@gmail.com"}),a.jsx("a",{href:"mailto:principal.vgnt@vignanits.ac.in",style:{color:"var(--text-secondary)",textDecoration:"none"},children:"principal.vgnt@vignanits.ac.in"})]})]})]})]})]}),a.jsxs("div",{style:{paddingTop:"20px",borderTop:"1px solid var(--border-color)",display:"flex",flexWrap:"wrap",alignItems:"center",justifyContent:"space-between",gap:"12px",fontSize:"0.8rem",color:"var(--text-tertiary)"},children:[a.jsxs("div",{children:["© ",new Date().getFullYear()," NotifyHub College Communication Platform. All rights reserved."]}),a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"16px"},children:[a.jsx("span",{children:"Privacy Policy"}),a.jsx("span",{children:"Terms of Service"}),a.jsx("span",{children:"Campus IT Charter"})]})]})]})}),jA=()=>{const t=[{icon:Kr,title:"Centralized Announcements",desc:"Categorized notices for academics, mid-terms, placements, workshops, and symposiums with instant attachments.",color:"#6366f1",badge:"All Departments"},{icon:Ln,title:"Urgent Campus Alerts",desc:"High-priority emergency alerts and critical network/exam updates delivered with visual prominence and instant counters.",color:"#ef4444",badge:"Critical Priority"},{icon:sn,title:"Interactive Event Calendar",desc:"Synchronized college calendar with registration deadlines, venue navigation, and workshop timelines.",color:"#06b6d4",badge:"Live Sync"},{icon:ui,title:"Student Q&A Helpdesk",desc:"Direct communication channel between students and college administration with status tracking and instant response alerts.",color:"#10b981",badge:"Resolved Fast"},{icon:xo,title:"Role-Based Administration",desc:"Dedicated admin console to publish notices, manage schedules, respond to student queries, and audit system activities.",color:"#8b5cf6",badge:"Enterprise Security"},{icon:af,title:"Real-Time Telemetry",desc:"Live tracking of server health, database connectivity, and broadcast metrics with zero latency.",color:"#f59e0b",badge:"High Performance"}],e=[{value:"4,500+",label:"Active Students",icon:Xc},{value:"99.9%",label:"Delivery Uptime",icon:af},{value:"12+",label:"Academic Departments",icon:qS},{value:"< 2 hrs",label:"Query Resolution Time",icon:ui}];return a.jsxs("div",{className:"app-container",children:[a.jsx(xa,{}),a.jsx("section",{style:{position:"relative",padding:"80px 0 100px",overflow:"hidden",backgroundImage:"linear-gradient(180deg, rgba(15, 23, 42, 0.35) 0%, rgba(15, 23, 42, 0.45) 50%, rgba(10, 15, 29, 0.92) 100%), url('/vignan-campus-hero.jpg')",backgroundSize:"cover",backgroundPosition:"center 35%",backgroundRepeat:"no-repeat",borderBottom:"1px solid var(--border-color)"},children:a.jsx("div",{className:"container",children:a.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(320px, 1fr))",gap:"36px",alignItems:"center"},children:[a.jsxs("div",{className:"glass-card animate-fade-in",style:{background:"rgba(15, 23, 42, 0.72)",backdropFilter:"blur(16px)",WebkitBackdropFilter:"blur(16px)",border:"1px solid rgba(255, 255, 255, 0.18)",padding:"36px",borderRadius:"var(--radius-xl)",boxShadow:"0 16px 40px rgba(0, 0, 0, 0.4)"},children:[a.jsxs("div",{style:{display:"inline-flex",alignItems:"center",gap:"8px",padding:"6px 14px",borderRadius:"var(--radius-full)",background:"rgba(99, 102, 241, 0.3)",backdropFilter:"blur(8px)",border:"1px solid rgba(99, 102, 241, 0.5)",marginBottom:"18px"},children:[a.jsx(Gc,{size:16,color:"#818cf8"}),a.jsx("span",{style:{fontSize:"0.8rem",fontWeight:800,color:"#c7d2fe",letterSpacing:"0.04em"},children:"VIGNAN INSTITUTE OF TECHNOLOGY AND SCIENCE"})]}),a.jsxs("h1",{style:{fontSize:"clamp(2.2rem, 4.5vw, 3.4rem)",fontWeight:900,lineHeight:1.18,marginBottom:"18px",letterSpacing:"-0.03em",color:"#ffffff",textShadow:"0 2px 8px rgba(0,0,0,0.5)"},children:["All Campus Notices,"," ",a.jsx("span",{style:{background:"var(--accent-gradient)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"},children:"Events & Alerts."})," ","Unified in One Hub."]}),a.jsx("p",{style:{fontSize:"1.05rem",color:"#e2e8f0",lineHeight:1.6,marginBottom:"28px",maxWidth:"520px",textShadow:"0 1px 4px rgba(0,0,0,0.4)"},children:"Official unified portal for Vignan Institute of Technology & Science. Real-time academic circulars, exam schedules, urgent alerts, and interactive student Q&A."}),a.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"14px",marginBottom:"28px"},children:[a.jsxs(We,{to:"/student/register",className:"btn-primary btn-lg",style:{boxShadow:"0 6px 20px rgba(99, 102, 241, 0.4)"},children:[a.jsx("span",{children:"Get Started as Student"}),a.jsx(Fi,{size:18})]}),a.jsxs(We,{to:"/admin/login",className:"btn-secondary btn-lg",style:{background:"rgba(30, 41, 59, 0.85)",backdropFilter:"blur(8px)",borderColor:"rgba(255,255,255,0.2)"},children:[a.jsx(xo,{size:18,color:"#818cf8"}),a.jsx("span",{children:"Admin Console"})]})]}),a.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"16px",fontSize:"0.84rem",color:"#cbd5e1"},children:[a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px"},children:[a.jsx(Rn,{size:16,color:"#34d399"}),a.jsx("span",{children:"Verified Student Accounts"})]}),a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px"},children:[a.jsx(Rn,{size:16,color:"#34d399"}),a.jsx("span",{children:"Official Admin Notices"})]}),a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px"},children:[a.jsx(Rn,{size:16,color:"#34d399"}),a.jsx("span",{children:"NAAC 'A++' Accredited"})]})]})]}),a.jsxs("div",{className:"glass-card",style:{position:"relative",height:"460px",display:"flex",alignItems:"center",justifyContent:"center",padding:"12px",overflow:"hidden",background:"rgba(15, 23, 42, 0.45)",backdropFilter:"blur(12px)",border:"1px solid rgba(255, 255, 255, 0.15)",boxShadow:"0 16px 40px rgba(0, 0, 0, 0.3)"},children:[a.jsx(DA,{}),a.jsxs("div",{className:"animate-float",style:{position:"absolute",top:"20px",left:"20px",background:"var(--bg-card)",padding:"8px 14px",borderRadius:"var(--radius-md)",border:"1px solid rgba(239, 68, 68, 0.4)",boxShadow:"var(--shadow-md)",display:"flex",alignItems:"center",gap:"8px",pointerEvents:"none"},children:[a.jsx(Ln,{size:16,color:"#ef4444"}),a.jsxs("div",{children:[a.jsx("span",{style:{fontSize:"0.74rem",fontWeight:800,color:"#f87171",display:"block"},children:"URGENT ALERT"}),a.jsx("span",{style:{fontSize:"0.72rem",color:"var(--text-secondary)"},children:"Campus Maintenance Tonight"})]})]}),a.jsxs("div",{className:"animate-float",style:{position:"absolute",bottom:"24px",right:"20px",background:"var(--bg-card)",padding:"8px 14px",borderRadius:"var(--radius-md)",border:"1px solid rgba(6, 182, 212, 0.4)",boxShadow:"var(--shadow-md)",display:"flex",alignItems:"center",gap:"8px",pointerEvents:"none",animationDelay:"1.5s"},children:[a.jsx(sn,{size:16,color:"#06b6d4"}),a.jsxs("div",{children:[a.jsx("span",{style:{fontSize:"0.74rem",fontWeight:800,color:"#06b6d4",display:"block"},children:"UPCOMING EVENT"}),a.jsx("span",{style:{fontSize:"0.72rem",color:"var(--text-secondary)"},children:"HackVortex Hackathon 2026"})]})]})]})]})})}),a.jsx("section",{style:{padding:"20px 0 60px",background:"var(--bg-secondary)",borderTop:"1px solid var(--border-color)",borderBottom:"1px solid var(--border-color)"},children:a.jsx("div",{className:"container",children:a.jsx("div",{className:"grid-4",children:e.map((n,i)=>{const r=n.icon;return a.jsxs("div",{className:"card",style:{display:"flex",alignItems:"center",gap:"16px",padding:"20px 24px",background:"var(--bg-tertiary)"},children:[a.jsx("div",{style:{width:"46px",height:"46px",borderRadius:"var(--radius-md)",background:"var(--accent-primary-glow)",color:"var(--accent-primary)",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0},children:a.jsx(r,{size:22})}),a.jsxs("div",{children:[a.jsx("h3",{style:{fontSize:"1.6rem",fontWeight:900,color:"var(--text-primary)",margin:0,lineHeight:1.1},children:n.value}),a.jsx("span",{style:{fontSize:"0.82rem",color:"var(--text-secondary)",fontWeight:600},children:n.label})]})]},i)})})})}),a.jsx("section",{style:{padding:"80px 0",background:"var(--bg-primary)"},children:a.jsxs("div",{className:"container",children:[a.jsxs("div",{style:{textAlign:"center",maxWidth:"640px",margin:"0 auto 56px"},children:[a.jsx("span",{style:{fontSize:"0.82rem",fontWeight:800,color:"var(--accent-primary)",letterSpacing:"0.08em",textTransform:"uppercase"},children:"POWERFUL ARCHITECTURE"}),a.jsx("h2",{style:{fontSize:"2.2rem",fontWeight:800,marginTop:"8px",marginBottom:"16px"},children:"Built for Every College Need"}),a.jsx("p",{style:{fontSize:"1rem",color:"var(--text-secondary)"},children:"Explore how NotifyHub streamlines daily campus life for both students and administration with dedicated workflows."})]}),a.jsx("div",{className:"grid-3",children:t.map((n,i)=>{const r=n.icon;return a.jsx("div",{className:"card interactive-card",style:{display:"flex",flexDirection:"column",justifyContent:"space-between",padding:"28px"},children:a.jsxs("div",{children:[a.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"18px"},children:[a.jsx("div",{style:{width:"46px",height:"46px",borderRadius:"var(--radius-md)",background:`${n.color}20`,color:n.color,display:"flex",alignItems:"center",justifyContent:"center"},children:a.jsx(r,{size:22})}),a.jsx("span",{className:"category-pill",style:{fontSize:"0.72rem"},children:n.badge})]}),a.jsx("h3",{style:{fontSize:"1.2rem",fontWeight:700,marginBottom:"10px",color:"var(--text-primary)"},children:n.title}),a.jsx("p",{style:{fontSize:"0.9rem",color:"var(--text-secondary)",lineHeight:1.6},children:n.desc})]})},i)})})]})}),a.jsx("section",{style:{padding:"80px 0",background:"var(--bg-secondary)",borderTop:"1px solid var(--border-color)"},children:a.jsx("div",{className:"container",children:a.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(320px, 1fr))",gap:"48px",alignItems:"center"},children:[a.jsxs("div",{children:[a.jsx("span",{style:{fontSize:"0.82rem",fontWeight:800,color:"var(--accent-secondary)",letterSpacing:"0.08em",textTransform:"uppercase"},children:"ABOUT NOTIFYHUB"}),a.jsx("h2",{style:{fontSize:"2.1rem",fontWeight:800,marginTop:"8px",marginBottom:"18px"},children:"Why Leading Institutions Trust NotifyHub"}),a.jsx("p",{style:{fontSize:"0.98rem",color:"var(--text-secondary)",lineHeight:1.7,marginBottom:"16px"},children:"Colleges generate hundreds of circulars, placement notifications, timetable adjustments, and emergency notices each semester. When delivered through fragmented messaging apps, students frequently miss critical application deadlines or exam venue changes."}),a.jsx("p",{style:{fontSize:"0.98rem",color:"var(--text-secondary)",lineHeight:1.7,marginBottom:"24px"},children:"NotifyHub introduces a clean, accountable, and verifiable channel where every announcement is categorized, timestamped, and archived with official administrative signatures."}),a.jsx("div",{style:{display:"flex",gap:"14px",marginBottom:"24px"},children:a.jsxs(We,{to:"/student/about",className:"btn-secondary",children:[a.jsx("span",{children:"Explore Campus Directory"}),a.jsx(Oh,{size:16})]})}),a.jsxs("div",{style:{borderRadius:"var(--radius-lg)",overflow:"hidden",border:"1px solid var(--border-color)",position:"relative",boxShadow:"var(--shadow-md)",maxHeight:"220px"},children:[a.jsx("img",{src:"/vignan-campus-hero.jpg",alt:"Vignan Institute of Technology and Science Campus",style:{width:"100%",height:"220px",objectFit:"cover",display:"block"}}),a.jsxs("div",{style:{position:"absolute",bottom:0,left:0,right:0,padding:"12px 18px",background:"linear-gradient(0deg, rgba(15, 23, 42, 0.95) 0%, rgba(15, 23, 42, 0.6) 60%, transparent 100%)",display:"flex",alignItems:"center",justifyContent:"space-between"},children:[a.jsxs("div",{children:[a.jsx("strong",{style:{fontSize:"0.92rem",color:"#ffffff",display:"block"},children:"Vignan Institute of Technology and Science"}),a.jsx("span",{style:{fontSize:"0.74rem",color:"rgba(255, 255, 255, 0.85)"},children:"Deshmukhi(V), Pochampally(M), Yadadri-Bhuvanagiri, TS - 508284"})]}),a.jsx("span",{className:"badge badge-normal",style:{fontSize:"0.68rem",background:"rgba(99, 102, 241, 0.3)",color:"#ffffff",border:"1px solid rgba(255, 255, 255, 0.3)"},children:"NAAC A++"})]})]})]}),a.jsxs("div",{className:"glass-card",style:{padding:"32px",border:"1px solid var(--border-highlight)",background:"var(--bg-card)"},children:[a.jsx("h3",{style:{fontSize:"1.25rem",fontWeight:800,marginBottom:"6px",color:"var(--text-primary)"},children:"Instant Evaluation Access"}),a.jsx("p",{style:{fontSize:"0.86rem",color:"var(--text-secondary)",marginBottom:"20px"},children:"Test the live platform with pre-configured realistic student and administrator accounts:"}),a.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[a.jsxs("div",{style:{padding:"14px 16px",borderRadius:"var(--radius-md)",background:"var(--bg-tertiary)",border:"1px solid rgba(139, 92, 246, 0.3)",display:"flex",alignItems:"center",justifyContent:"space-between"},children:[a.jsxs("div",{children:[a.jsx("strong",{style:{fontSize:"0.9rem",color:"#c084fc",display:"block"},children:"Administrator (Dr. Evelyn Vance)"}),a.jsx("span",{style:{fontSize:"0.78rem",color:"var(--text-tertiary)"},children:"admin@notifyhub.edu • Pass: Admin@123"})]}),a.jsx(We,{to:"/admin/login",className:"btn-primary btn-sm",style:{background:"var(--accent-gradient-purple)"},children:"Admin Login"})]}),a.jsxs("div",{style:{padding:"14px 16px",borderRadius:"var(--radius-md)",background:"var(--bg-tertiary)",border:"1px solid rgba(99, 102, 241, 0.3)",display:"flex",alignItems:"center",justifyContent:"space-between"},children:[a.jsxs("div",{children:[a.jsx("strong",{style:{fontSize:"0.9rem",color:"var(--accent-primary)",display:"block"},children:"Student (Aarav Sharma - CSE)"}),a.jsx("span",{style:{fontSize:"0.78rem",color:"var(--text-tertiary)"},children:"aarav.sharma@student.edu • Pass: Student@123"})]}),a.jsx(We,{to:"/student/login",className:"btn-primary btn-sm",children:"Student Login"})]})]})]})]})})}),a.jsx("section",{style:{padding:"80px 0",background:"var(--bg-primary)",borderTop:"1px solid var(--border-color)"},children:a.jsxs("div",{className:"container",children:[a.jsxs("div",{style:{textAlign:"center",maxWidth:"720px",margin:"0 auto 48px"},children:[a.jsx("span",{style:{fontSize:"0.82rem",fontWeight:800,color:"var(--accent-primary)",letterSpacing:"0.08em",textTransform:"uppercase"},children:"CAMPUS INFORMATION"}),a.jsx("h2",{style:{fontSize:"2.2rem",fontWeight:800,marginTop:"8px",marginBottom:"14px",color:"var(--text-primary)"},children:"VIGNAN INSTITUTE OF TECHNOLOGY AND SCIENCE"}),a.jsx("p",{style:{fontSize:"0.98rem",color:"var(--text-secondary)",lineHeight:1.6},children:"Official college location, telephone helplines, and administrative communication channels."})]}),a.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(300px, 1fr))",gap:"28px"},children:[a.jsxs("div",{className:"card interactive-card",style:{padding:"30px",display:"flex",flexDirection:"column",justifyContent:"space-between",background:"var(--bg-card)",border:"1px solid var(--border-color)",borderRadius:"var(--radius-lg)"},children:[a.jsxs("div",{children:[a.jsx("div",{style:{width:"48px",height:"48px",borderRadius:"var(--radius-md)",background:"rgba(99, 102, 241, 0.15)",color:"var(--accent-primary)",display:"flex",alignItems:"center",justifyContent:"center",marginBottom:"20px"},children:a.jsx(fa,{size:24})}),a.jsx("h3",{style:{fontSize:"1.2rem",fontWeight:700,marginBottom:"12px",color:"var(--text-primary)"},children:"Main Campus Address"}),a.jsxs("div",{style:{fontSize:"0.92rem",color:"var(--text-secondary)",lineHeight:1.75},children:[a.jsx("strong",{style:{color:"var(--text-primary)",display:"block",marginBottom:"6px",fontSize:"0.96rem"},children:"VIGNAN INSTITUTE OF TECHNOLOGY AND SCIENCE"}),"Deshmukhi(V), Pochampally(M),",a.jsx("br",{}),"Yadadri-Bhuvanagiri District,",a.jsx("br",{}),"Telangana - 508284"]})]}),a.jsxs("div",{style:{marginTop:"22px",paddingTop:"16px",borderTop:"1px solid var(--border-color)",fontSize:"0.82rem",color:"var(--text-tertiary)",display:"flex",alignItems:"center",gap:"6px"},children:[a.jsx("span",{children:"📍"}),a.jsx("span",{children:"Deshmukhi Campus, Pochampally"})]})]}),a.jsxs("div",{className:"card interactive-card",style:{padding:"30px",display:"flex",flexDirection:"column",justifyContent:"space-between",background:"var(--bg-card)",border:"1px solid var(--border-color)",borderRadius:"var(--radius-lg)"},children:[a.jsxs("div",{children:[a.jsx("div",{style:{width:"48px",height:"48px",borderRadius:"var(--radius-md)",background:"rgba(16, 185, 129, 0.15)",color:"#10b981",display:"flex",alignItems:"center",justifyContent:"center",marginBottom:"20px"},children:a.jsx(Vh,{size:24})}),a.jsx("h3",{style:{fontSize:"1.2rem",fontWeight:700,marginBottom:"12px",color:"var(--text-primary)"},children:"Telephone & Helplines"}),a.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px",fontSize:"0.92rem"},children:[a.jsxs("div",{children:[a.jsx("span",{style:{fontSize:"0.78rem",color:"var(--text-tertiary)",display:"block",marginBottom:"2px"},children:"Landline Office:"}),a.jsx("a",{href:"tel:08685226128",style:{color:"var(--text-primary)",fontWeight:700,fontSize:"1.05rem",textDecoration:"none"},children:"08685-226128"})]}),a.jsxs("div",{children:[a.jsx("span",{style:{fontSize:"0.78rem",color:"var(--text-tertiary)",display:"block",marginBottom:"2px"},children:"Campus Helplines:"}),a.jsx("span",{style:{color:"var(--text-primary)",fontWeight:700,fontSize:"1.05rem"},children:"9866399776 / 861"})]})]})]}),a.jsxs("div",{style:{marginTop:"22px",paddingTop:"16px",borderTop:"1px solid var(--border-color)",fontSize:"0.82rem",color:"var(--text-tertiary)",display:"flex",alignItems:"center",gap:"6px"},children:[a.jsx("span",{children:"📞"}),a.jsx("span",{children:"Administrative & Admissions Support"})]})]}),a.jsxs("div",{className:"card interactive-card",style:{padding:"30px",display:"flex",flexDirection:"column",justifyContent:"space-between",background:"var(--bg-card)",border:"1px solid var(--border-color)",borderRadius:"var(--radius-lg)"},children:[a.jsxs("div",{children:[a.jsx("div",{style:{width:"48px",height:"48px",borderRadius:"var(--radius-md)",background:"rgba(139, 92, 246, 0.15)",color:"#8b5cf6",display:"flex",alignItems:"center",justifyContent:"center",marginBottom:"20px"},children:a.jsx(da,{size:24})}),a.jsx("h3",{style:{fontSize:"1.2rem",fontWeight:700,marginBottom:"12px",color:"var(--text-primary)"},children:"Official Email Directory"}),a.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"10px",fontSize:"0.88rem"},children:[a.jsx("a",{href:"mailto:principal.vgnt89@gmail.com",style:{color:"var(--accent-primary)",textDecoration:"none",fontWeight:600,wordBreak:"break-all",padding:"4px 0"},children:"principal.vgnt89@gmail.com"}),a.jsx("a",{href:"mailto:principal.vits@gmail.com",style:{color:"var(--accent-primary)",textDecoration:"none",fontWeight:600,wordBreak:"break-all",padding:"4px 0"},children:"principal.vits@gmail.com"}),a.jsx("a",{href:"mailto:principal.vgnt@vignanits.ac.in",style:{color:"var(--accent-primary)",textDecoration:"none",fontWeight:600,wordBreak:"break-all",padding:"4px 0"},children:"principal.vgnt@vignanits.ac.in"})]})]}),a.jsxs("div",{style:{marginTop:"22px",paddingTop:"16px",borderTop:"1px solid var(--border-color)",fontSize:"0.82rem",color:"var(--text-tertiary)",display:"flex",alignItems:"center",gap:"6px"},children:[a.jsx("span",{children:"✉️"}),a.jsx("span",{children:"Principal & Administrative Inquiries"})]})]})]})]})}),a.jsx(Jc,{})]})},zA=()=>{const[t,e]=P.useState({name:"",email:"",password:"",confirmPassword:"",rollNumber:"",department:"Computer Science & Engineering",year:"1st Year"}),[n,i]=P.useState(!1),[r,s]=P.useState(!1),[o,l]=P.useState(!1),[c,u]=P.useState(""),{register:f}=pi(),h=hi(),p=["Computer Science & Engineering","Electronics & Communication","Electrical & Electronics","Mechanical Engineering","Civil Engineering","Information Technology","Biotechnology","Business Administration"],g=["1st Year","2nd Year","3rd Year","4th Year","Postgraduate"],y=m=>{e({...t,[m.target.name]:m.target.value}),u("")},_=async m=>{if(m.preventDefault(),t.password!==t.confirmPassword){u("Passwords do not match.");return}if(t.password.length<6){u("Password must be at least 6 characters.");return}l(!0);const d=await f(t);l(!1),d.success?h("/student/home"):u(d.message||"Registration failed. Please try again.")};return a.jsxs("div",{className:"app-container",children:[a.jsx(xa,{}),a.jsx("div",{className:"main-content",style:{display:"flex",alignItems:"center",justifyContent:"center",padding:"40px 20px",background:"radial-gradient(circle at top right, rgba(99, 102, 241, 0.08) 0%, transparent 60%)"},children:a.jsxs("div",{className:"glass-card animate-scale-in",style:{width:"100%",maxWidth:"560px",padding:"36px",border:"1px solid var(--border-color)",boxShadow:"var(--shadow-lg)"},children:[a.jsxs("div",{style:{textAlign:"center",marginBottom:"28px"},children:[a.jsx("div",{style:{width:"48px",height:"48px",borderRadius:"var(--radius-md)",background:"var(--accent-gradient)",color:"#ffffff",display:"inline-flex",alignItems:"center",justifyContent:"center",marginBottom:"14px",boxShadow:"0 4px 14px var(--accent-primary-glow)"},children:a.jsx(ua,{size:28})}),a.jsx("h1",{style:{fontSize:"1.6rem",fontWeight:800,marginBottom:"6px",color:"var(--text-primary)"},children:"Create Student Account"}),a.jsx("p",{style:{fontSize:"0.9rem",color:"var(--text-secondary)"},children:"Join NotifyHub to receive campus notices, events & urgent alerts"})]}),c&&a.jsx("div",{style:{padding:"12px 16px",borderRadius:"var(--radius-md)",background:"rgba(239, 68, 68, 0.12)",border:"1px solid rgba(239, 68, 68, 0.35)",color:"#f87171",fontSize:"0.88rem",marginBottom:"20px"},children:c}),a.jsxs("form",{onSubmit:_,children:[a.jsxs("div",{className:"form-group",children:[a.jsx("label",{className:"form-label",children:"Full Name"}),a.jsxs("div",{className:"input-with-icon",children:[a.jsx(To,{size:16,className:"input-icon-left"}),a.jsx("input",{type:"text",name:"name",value:t.name,onChange:y,placeholder:"e.g. Aarav Sharma",className:"form-input",required:!0})]})]}),a.jsxs("div",{className:"form-group",children:[a.jsx("label",{className:"form-label",children:"College / Personal Email"}),a.jsxs("div",{className:"input-with-icon",children:[a.jsx(da,{size:16,className:"input-icon-left"}),a.jsx("input",{type:"email",name:"email",value:t.email,onChange:y,placeholder:"student@student.edu",className:"form-input",required:!0})]})]}),a.jsxs("div",{className:"grid-2",style:{gap:"14px"},children:[a.jsxs("div",{className:"form-group",children:[a.jsx("label",{className:"form-label",children:"Roll / Registration No."}),a.jsxs("div",{className:"input-with-icon",children:[a.jsx(nM,{size:16,className:"input-icon-left"}),a.jsx("input",{type:"text",name:"rollNumber",value:t.rollNumber,onChange:y,placeholder:"CS2026101",className:"form-input",required:!0})]})]}),a.jsxs("div",{className:"form-group",children:[a.jsx("label",{className:"form-label",children:"Academic Year"}),a.jsx("select",{name:"year",value:t.year,onChange:y,className:"form-select",children:g.map(m=>a.jsx("option",{value:m,children:m},m))})]})]}),a.jsxs("div",{className:"form-group",children:[a.jsx("label",{className:"form-label",children:"Department / Branch"}),a.jsx("select",{name:"department",value:t.department,onChange:y,className:"form-select",children:p.map(m=>a.jsx("option",{value:m,children:m},m))})]}),a.jsxs("div",{className:"grid-2",style:{gap:"14px"},children:[a.jsxs("div",{className:"form-group",children:[a.jsx("label",{className:"form-label",children:"Password"}),a.jsxs("div",{className:"input-with-icon",children:[a.jsx(ai,{size:16,className:"input-icon-left"}),a.jsx("input",{type:n?"text":"password",name:"password",value:t.password,onChange:y,placeholder:"Min 6 characters",className:"form-input",required:!0}),a.jsx("button",{type:"button",onClick:()=>i(!n),className:"input-icon-right",style:{background:"none",border:"none",display:"flex"},children:n?a.jsx(gr,{size:16}):a.jsx(ci,{size:16})})]})]}),a.jsxs("div",{className:"form-group",children:[a.jsx("label",{className:"form-label",children:"Confirm Password"}),a.jsxs("div",{className:"input-with-icon",children:[a.jsx(ai,{size:16,className:"input-icon-left"}),a.jsx("input",{type:r?"text":"password",name:"confirmPassword",value:t.confirmPassword,onChange:y,placeholder:"Re-enter password",className:"form-input",required:!0}),a.jsx("button",{type:"button",onClick:()=>s(!r),className:"input-icon-right",style:{background:"none",border:"none",display:"flex"},children:r?a.jsx(gr,{size:16}):a.jsx(ci,{size:16})})]})]})]}),a.jsxs("button",{type:"submit",disabled:o,className:"btn-primary btn-lg",style:{width:"100%",marginTop:"10px"},children:[o?"Creating Student Account...":"Complete Registration",a.jsx(Fi,{size:18})]})]}),a.jsxs("div",{style:{textAlign:"center",marginTop:"24px",fontSize:"0.9rem",color:"var(--text-secondary)"},children:["Already have an account?"," ",a.jsx(We,{to:"/student/login",style:{fontWeight:700,color:"var(--accent-primary)"},children:"Sign In here"})]})]})}),a.jsx(Jc,{})]})},FA=()=>{const[t,e]=P.useState(""),[n,i]=P.useState(""),[r,s]=P.useState(!1),[o,l]=P.useState(!1),[c,u]=P.useState(""),{login:f}=pi(),h=hi(),p=fi(),g=async _=>{var d,x;if(_.preventDefault(),!t||!n){u("Please enter your email and password.");return}l(!0);const m=await f({email:t,password:n,requiredRole:"STUDENT"});if(l(!1),m.success){const v=((x=(d=p.state)==null?void 0:d.from)==null?void 0:x.pathname)||"/student/home";h(v,{replace:!0})}else u(m.message||"Login failed. Please check credentials.")},y=_=>{e(_),i("Student@123"),u("")};return a.jsxs("div",{className:"app-container",children:[a.jsx(xa,{}),a.jsx("div",{className:"main-content",style:{display:"flex",alignItems:"center",justifyContent:"center",padding:"48px 20px",background:"radial-gradient(circle at top center, rgba(99, 102, 241, 0.1) 0%, transparent 65%)"},children:a.jsxs("div",{className:"glass-card animate-scale-in",style:{width:"100%",maxWidth:"460px",padding:"36px",border:"1px solid var(--border-color)",boxShadow:"var(--shadow-lg)"},children:[a.jsxs("div",{style:{textAlign:"center",marginBottom:"28px"},children:[a.jsx("div",{style:{width:"50px",height:"50px",borderRadius:"var(--radius-md)",background:"var(--accent-gradient)",color:"#ffffff",display:"inline-flex",alignItems:"center",justifyContent:"center",marginBottom:"14px",boxShadow:"0 4px 14px var(--accent-primary-glow)"},children:a.jsx(ua,{size:28})}),a.jsx("h1",{style:{fontSize:"1.6rem",fontWeight:800,marginBottom:"6px",color:"var(--text-primary)"},children:"Student Portal Sign In"}),a.jsx("p",{style:{fontSize:"0.88rem",color:"var(--text-secondary)"},children:"Access college announcements, exams, calendar & query helpdesk"})]}),a.jsxs("div",{style:{padding:"12px 14px",borderRadius:"var(--radius-md)",background:"var(--bg-tertiary)",border:"1px solid var(--border-color)",marginBottom:"20px"},children:[a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px",marginBottom:"8px"},children:[a.jsx(Gc,{size:14,color:"var(--accent-primary)"}),a.jsx("span",{style:{fontSize:"0.78rem",fontWeight:700,color:"var(--text-secondary)"},children:"Demo Student Accounts (Click to Fill):"})]}),a.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"6px"},children:[a.jsx("button",{type:"button",onClick:()=>y("aarav.sharma@student.edu"),className:"btn-outline btn-sm",style:{fontSize:"0.74rem",padding:"4px 8px"},children:"Aarav (CSE 3rd Yr)"}),a.jsx("button",{type:"button",onClick:()=>y("priya.patel@student.edu"),className:"btn-outline btn-sm",style:{fontSize:"0.74rem",padding:"4px 8px"},children:"Priya (ECE 3rd Yr)"})]})]}),c&&a.jsx("div",{style:{padding:"12px 16px",borderRadius:"var(--radius-md)",background:"rgba(239, 68, 68, 0.12)",border:"1px solid rgba(239, 68, 68, 0.35)",color:"#f87171",fontSize:"0.88rem",marginBottom:"20px"},children:c}),a.jsxs("form",{onSubmit:g,children:[a.jsxs("div",{className:"form-group",children:[a.jsx("label",{className:"form-label",children:"Student Email Address"}),a.jsxs("div",{className:"input-with-icon",children:[a.jsx(da,{size:16,className:"input-icon-left"}),a.jsx("input",{type:"email",value:t,onChange:_=>{e(_.target.value),u("")},placeholder:"name@student.edu",className:"form-input",required:!0})]})]}),a.jsxs("div",{className:"form-group",children:[a.jsx("label",{className:"form-label",children:"Password"}),a.jsxs("div",{className:"input-with-icon",children:[a.jsx(ai,{size:16,className:"input-icon-left"}),a.jsx("input",{type:r?"text":"password",value:n,onChange:_=>{i(_.target.value),u("")},placeholder:"Enter your password",className:"form-input",required:!0}),a.jsx("button",{type:"button",onClick:()=>s(!r),className:"input-icon-right",style:{background:"none",border:"none",display:"flex"},children:r?a.jsx(gr,{size:16}):a.jsx(ci,{size:16})})]})]}),a.jsxs("button",{type:"submit",disabled:o,className:"btn-primary btn-lg",style:{width:"100%",marginTop:"10px"},children:[o?"Authenticating...":"Sign In to Portal",a.jsx(Fi,{size:18})]})]}),a.jsxs("div",{style:{marginTop:"24px",display:"flex",flexDirection:"column",gap:"12px",textAlign:"center",fontSize:"0.88rem",color:"var(--text-secondary)"},children:[a.jsxs("div",{children:["New student at college?"," ",a.jsx(We,{to:"/student/register",style:{fontWeight:700,color:"var(--accent-primary)"},children:"Register here"})]}),a.jsxs("div",{style:{paddingTop:"8px",borderTop:"1px solid var(--border-subtle)"},children:["Are you an Administrator?"," ",a.jsx(We,{to:"/admin/login",style:{fontWeight:700,color:"var(--accent-secondary)"},children:"Admin Portal Login"})]})]})]})}),a.jsx(Jc,{})]})},OA=()=>{const[t,e]=P.useState(""),[n,i]=P.useState(""),[r,s]=P.useState(!1),[o,l]=P.useState(!1),[c,u]=P.useState(""),{login:f}=pi(),h=hi(),p=fi(),g=async _=>{var d,x;if(_.preventDefault(),!t||!n){u("Please provide administrative credentials.");return}l(!0);const m=await f({email:t,password:n,requiredRole:"ADMIN"});if(l(!1),m.success){const v=((x=(d=p.state)==null?void 0:d.from)==null?void 0:x.pathname)||"/admin/overview";h(v,{replace:!0})}else u(m.message||"Administrative login failed. Access denied.")},y=()=>{e("admin@notifyhub.edu"),i("Admin@123"),u("")};return a.jsxs("div",{className:"app-container",children:[a.jsx(xa,{}),a.jsx("div",{className:"main-content",style:{display:"flex",alignItems:"center",justifyContent:"center",padding:"48px 20px",background:"radial-gradient(circle at top center, rgba(139, 92, 246, 0.12) 0%, transparent 65%)"},children:a.jsxs("div",{className:"glass-card animate-scale-in",style:{width:"100%",maxWidth:"460px",padding:"36px",border:"1px solid rgba(139, 92, 246, 0.3)",boxShadow:"0 8px 32px rgba(139, 92, 246, 0.2)"},children:[a.jsxs("div",{style:{textAlign:"center",marginBottom:"28px"},children:[a.jsx("div",{style:{width:"52px",height:"52px",borderRadius:"var(--radius-md)",background:"var(--accent-gradient-purple)",color:"#ffffff",display:"inline-flex",alignItems:"center",justifyContent:"center",marginBottom:"14px",boxShadow:"0 4px 16px rgba(139, 92, 246, 0.4)"},children:a.jsx(h0,{size:28})}),a.jsx("h1",{style:{fontSize:"1.6rem",fontWeight:800,marginBottom:"6px",color:"var(--text-primary)"},children:"Administrator Portal"}),a.jsx("p",{style:{fontSize:"0.88rem",color:"var(--text-secondary)"},children:"Restricted management console for college administrators & deans"})]}),a.jsxs("div",{style:{padding:"12px 16px",borderRadius:"var(--radius-md)",background:"rgba(139, 92, 246, 0.1)",border:"1px solid rgba(139, 92, 246, 0.25)",marginBottom:"20px",display:"flex",alignItems:"center",justifyContent:"space-between"},children:[a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[a.jsx(l0,{size:16,color:"#c084fc"}),a.jsx("span",{style:{fontSize:"0.8rem",fontWeight:600,color:"var(--text-primary)"},children:"Demo Admin Account"})]}),a.jsx("button",{type:"button",onClick:y,className:"btn-primary btn-sm",style:{background:"var(--accent-gradient-purple)",fontSize:"0.74rem"},children:"Fill Credentials"})]}),c&&a.jsx("div",{style:{padding:"12px 16px",borderRadius:"var(--radius-md)",background:"rgba(239, 68, 68, 0.12)",border:"1px solid rgba(239, 68, 68, 0.35)",color:"#f87171",fontSize:"0.88rem",marginBottom:"20px"},children:c}),a.jsxs("form",{onSubmit:g,children:[a.jsxs("div",{className:"form-group",children:[a.jsx("label",{className:"form-label",children:"Administrator Email"}),a.jsxs("div",{className:"input-with-icon",children:[a.jsx(da,{size:16,className:"input-icon-left"}),a.jsx("input",{type:"email",value:t,onChange:_=>{e(_.target.value),u("")},placeholder:"admin@notifyhub.edu",className:"form-input",required:!0})]})]}),a.jsxs("div",{className:"form-group",children:[a.jsx("label",{className:"form-label",children:"Admin Master Password"}),a.jsxs("div",{className:"input-with-icon",children:[a.jsx(ai,{size:16,className:"input-icon-left"}),a.jsx("input",{type:r?"text":"password",value:n,onChange:_=>{i(_.target.value),u("")},placeholder:"Enter administrative password",className:"form-input",required:!0}),a.jsx("button",{type:"button",onClick:()=>s(!r),className:"input-icon-right",style:{background:"none",border:"none",display:"flex"},children:r?a.jsx(gr,{size:16}):a.jsx(ci,{size:16})})]})]}),a.jsxs("button",{type:"submit",disabled:o,className:"btn-primary btn-lg",style:{width:"100%",marginTop:"10px",background:"var(--accent-gradient-purple)"},children:[o?"Verifying Admin Token...":"Access Admin Dashboard",a.jsx(Fi,{size:18})]})]}),a.jsxs("div",{style:{textAlign:"center",marginTop:"24px",fontSize:"0.88rem",color:"var(--text-secondary)"},children:["Are you a student?"," ",a.jsx(We,{to:"/student/login",style:{fontWeight:700,color:"var(--accent-primary)"},children:"Switch to Student Login"})]})]})}),a.jsx(Jc,{})]})},J0=({isOpen:t,onClose:e})=>{const{user:n,isAdmin:i,isStudent:r,logout:s}=pi(),o=hi(),l=async()=>{await s(),o("/")},f=i?[{to:"/admin/overview",label:"Overview",icon:aM},{to:"/admin/announcements",label:"Announcements",icon:Kr},{to:"/admin/events",label:"Events Management",icon:fc},{to:"/admin/queries",label:"Student Queries",icon:hc},{to:"/admin/notifications",label:"Notifications",icon:si},{to:"/admin/activity-logs",label:"Activity Logs",icon:jh},{to:"/admin/settings",label:"Settings & Health",icon:hM}]:[{to:"/student/home",label:"Home",icon:iM},{to:"/student/announcements",label:"Announcements",icon:Kr},{to:"/student/calendar",label:"Calendar & Events",icon:sn},{to:"/student/urgent-alerts",label:"Urgent Alerts",icon:pc,highlight:!0},{to:"/student/notifications",label:"Notifications",icon:si},{to:"/student/qa",label:"Student Q&A",icon:ui},{to:"/student/about",label:"About College",icon:$S},{to:"/student/profile",label:"My Profile",icon:To}];return a.jsxs(a.Fragment,{children:[t&&a.jsx("div",{onClick:e,style:{position:"fixed",inset:0,background:"rgba(0,0,0,0.6)",zIndex:95}}),a.jsxs("aside",{className:`portal-sidebar ${t?"open":""}`,children:[a.jsxs("div",{style:{padding:"20px 22px",display:"flex",alignItems:"center",justifyContent:"space-between",borderBottom:"1px solid var(--border-color)"},children:[a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px"},children:[a.jsx("div",{style:{width:"34px",height:"34px",borderRadius:"var(--radius-sm)",background:i?"var(--accent-gradient-purple)":"var(--accent-gradient)",display:"flex",alignItems:"center",justifyContent:"center",color:"#ffffff"},children:a.jsx(ua,{size:20})}),a.jsxs("div",{children:[a.jsx("h2",{style:{fontSize:"1.05rem",fontWeight:800,margin:0,lineHeight:1.2},children:i?"Admin Portal":"Student Portal"}),a.jsx("span",{style:{fontSize:"0.7rem",color:"var(--text-tertiary)"},children:"NotifyHub v1.0"})]})]}),a.jsx("button",{onClick:e,className:"btn-icon btn-secondary btn-icon-sm",style:{display:t?"flex":"none"},children:a.jsx(qc,{size:16})})]}),a.jsx("div",{style:{padding:"14px 18px",margin:"12px 14px",borderRadius:"var(--radius-md)",background:"var(--bg-tertiary)",border:"1px solid var(--border-color)"},children:a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px"},children:[a.jsx("div",{style:{width:"36px",height:"36px",borderRadius:"50%",background:i?"var(--accent-gradient-purple)":"var(--accent-gradient)",color:"#ffffff",display:"flex",alignItems:"center",justifyContent:"center",fontWeight:700,fontSize:"0.9rem",flexShrink:0},children:n!=null&&n.name?n.name.charAt(0):"U"}),a.jsxs("div",{style:{minWidth:0,flex:1},children:[a.jsx("p",{style:{margin:0,fontSize:"0.86rem",fontWeight:700,color:"var(--text-primary)",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:n==null?void 0:n.name}),a.jsx("span",{style:{fontSize:"0.72rem",color:"var(--text-secondary)",display:"block",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:i?"System Administrator":(n==null?void 0:n.rollNumber)||(n==null?void 0:n.department)||"Student"})]})]})}),a.jsx("nav",{style:{padding:"0 12px",flex:1,overflowY:"auto"},children:a.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"4px"},children:f.map(h=>{const p=h.icon;return a.jsxs(zS,{to:h.to,onClick:e,style:({isActive:g})=>({display:"flex",alignItems:"center",gap:"12px",padding:"10px 14px",borderRadius:"var(--radius-md)",fontSize:"0.88rem",fontWeight:g?700:500,textDecoration:"none",color:g?"#ffffff":h.highlight?"#f87171":"var(--text-secondary)",background:g?h.highlight?"#ef4444":"var(--accent-primary)":h.highlight?"rgba(239, 68, 68, 0.08)":"transparent",boxShadow:g?"0 4px 12px var(--accent-primary-glow)":"none",transition:"all var(--transition-fast)"}),children:[a.jsx(p,{size:18}),a.jsx("span",{children:h.label})]},h.to)})})}),a.jsx("div",{style:{padding:"16px",borderTop:"1px solid var(--border-color)"},children:a.jsxs("button",{onClick:l,className:"btn-outline",style:{width:"100%",display:"flex",alignItems:"center",justifyContent:"center",gap:"8px",color:"#ef4444",borderColor:"rgba(239, 68, 68, 0.3)"},children:[a.jsx(c0,{size:16}),a.jsx("span",{children:"Sign Out"})]})})]})]})},BA=()=>{const[t,e]=P.useState(!1);return a.jsxs("div",{className:"portal-layout",children:[a.jsx(J0,{isOpen:t,onClose:()=>e(!1)}),a.jsxs("div",{className:"portal-main",children:[a.jsx(xa,{onToggleSidebar:()=>e(!t)}),a.jsx("main",{className:"portal-content",children:a.jsx(r0,{})})]})]})},Br={getAll:t=>nt.get("/events",t),getById:t=>nt.get(`/events/${t}`),create:t=>nt.post("/events",t),update:(t,e)=>nt.put(`/events/${t}`,e),delete:t=>nt.delete(`/events/${t}`)},ns=({isOpen:t,onClose:e,title:n,children:i,maxWidth:r="600px",footer:s=null})=>(P.useEffect(()=>{const o=l=>{l.key==="Escape"&&t&&e()};return t&&(document.body.style.overflow="hidden",window.addEventListener("keydown",o)),()=>{document.body.style.overflow="unset",window.removeEventListener("keydown",o)}},[t,e]),t?a.jsx("div",{className:"modal-overlay",onClick:e,children:a.jsxs("div",{className:"modal-content",style:{maxWidth:r},onClick:o=>o.stopPropagation(),children:[a.jsxs("div",{className:"modal-header",children:[a.jsx("h3",{className:"modal-title",children:n}),a.jsx("button",{onClick:e,className:"btn-icon btn-secondary btn-icon-sm","aria-label":"Close modal",children:a.jsx(qc,{size:18})})]}),a.jsx("div",{className:"modal-body",children:i}),s&&a.jsx("div",{className:"modal-footer",children:s})]})}):null),ip=({isOpen:t,onClose:e,announcement:n})=>{const{addToast:i}=Dn();if(!n)return null;const r=()=>{navigator.clipboard&&(navigator.clipboard.writeText(`${n.title}

${n.description}

NotifyHub College Platform`),i("Announcement details copied to clipboard!","info"))},s=o=>{switch(o){case"URGENT":return a.jsxs("span",{className:"badge badge-urgent",children:[a.jsx(Ln,{size:13})," Urgent Alert"]});case"IMPORTANT":return a.jsxs("span",{className:"badge badge-important",children:[a.jsx(bo,{size:13})," Important Notice"]});default:return a.jsxs("span",{className:"badge badge-normal",children:[a.jsx(Bh,{size:13})," Standard Announcement"]})}};return a.jsx(ns,{isOpen:t,onClose:e,title:"Announcement Details",maxWidth:"680px",footer:a.jsxs("div",{style:{display:"flex",justifyContent:"space-between",width:"100%",alignItems:"center"},children:[a.jsxs("button",{onClick:r,className:"btn-secondary btn-sm",style:{display:"flex",gap:"6px"},children:[a.jsx(f0,{size:15}),a.jsx("span",{children:"Copy & Share"})]}),a.jsx("button",{onClick:e,className:"btn-primary btn-sm",children:"Close Notice"})]}),children:a.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"18px"},children:[a.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"8px",alignItems:"center"},children:[s(n.priority),a.jsx("span",{className:"category-pill",children:n.category}),n.department&&a.jsxs("span",{className:"category-pill",style:{background:"transparent"},children:[a.jsx(zh,{size:13})," ",n.department]}),n.year&&a.jsxs("span",{className:"category-pill",style:{background:"transparent"},children:[a.jsx(Xc,{size:13})," ",n.year]})]}),a.jsx("h2",{style:{fontSize:"1.4rem",fontWeight:800,color:"var(--text-primary)",lineHeight:1.3},children:n.title}),a.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"16px",padding:"12px 16px",background:"var(--bg-tertiary)",borderRadius:"var(--radius-md)",fontSize:"0.82rem",color:"var(--text-secondary)"},children:[a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px"},children:[a.jsx(sn,{size:15,color:"var(--accent-primary)"}),a.jsxs("span",{children:["Published: ",a.jsx("strong",{children:new Date(n.createdAt).toLocaleDateString([],{dateStyle:"long"})})]})]}),n.deadline&&a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px",color:"#ef4444"},children:[a.jsx(li,{size:15}),a.jsxs("span",{children:["Action Deadline: ",a.jsx("strong",{children:new Date(n.deadline).toLocaleDateString([],{dateStyle:"medium"})})]})]})]}),a.jsx("div",{style:{fontSize:"0.96rem",lineHeight:1.7,color:"var(--text-primary)",whiteSpace:"pre-line",padding:"4px 0"},children:n.description}),n.attachmentName&&a.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"14px 18px",borderRadius:"var(--radius-md)",border:"1px solid var(--border-highlight)",background:"var(--bg-elevated)"},children:[a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"12px"},children:[a.jsx("div",{style:{padding:"8px",borderRadius:"var(--radius-sm)",background:"var(--accent-primary-glow)",color:"var(--accent-primary)"},children:a.jsx(Hh,{size:20})}),a.jsxs("div",{children:[a.jsx("p",{style:{margin:0,fontWeight:600,fontSize:"0.88rem",color:"var(--text-primary)"},children:n.attachmentName}),a.jsx("span",{style:{fontSize:"0.76rem",color:"var(--text-tertiary)"},children:n.attachmentSize?`${(n.attachmentSize/1024).toFixed(1)} KB`:"Downloadable attachment"})]})]}),a.jsxs("a",{href:n.attachment||"#",download:n.attachmentName,target:"_blank",rel:"noopener noreferrer",className:"btn-primary btn-sm",style:{textDecoration:"none"},children:[a.jsx(o0,{size:14}),a.jsx("span",{children:"Download"})]})]})]})})},ey=({announcement:t,onRefresh:e})=>{const[n,i]=P.useState(!1),r=t.priority==="URGENT",s=t.priority==="IMPORTANT",o=()=>r?a.jsxs("span",{className:"badge badge-urgent",children:[a.jsx(Ln,{size:12})," Urgent Alert"]}):s?a.jsxs("span",{className:"badge badge-important",children:[a.jsx(bo,{size:12})," Important"]}):a.jsxs("span",{className:"badge badge-normal",children:[a.jsx(Rn,{size:12})," Normal"]});return a.jsxs(a.Fragment,{children:[a.jsxs("div",{className:`card interactive-card ${r?"animate-pulse-glow":""}`,onClick:()=>i(!0),style:{display:"flex",flexDirection:"column",justifyContent:"space-between",position:"relative",border:r?"1px solid rgba(239, 68, 68, 0.45)":s?"1px solid rgba(245, 158, 11, 0.35)":"1px solid var(--border-color)",background:r?"linear-gradient(180deg, rgba(239, 68, 68, 0.08) 0%, var(--bg-card) 100%)":"var(--bg-card)"},children:[a.jsxs("div",{children:[a.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"12px",gap:"8px"},children:[a.jsx("span",{className:"category-pill",children:t.category}),o()]}),a.jsx("h3",{style:{fontSize:"1.1rem",fontWeight:700,color:"var(--text-primary)",marginBottom:"10px",lineHeight:1.4},children:t.title}),a.jsx("p",{style:{fontSize:"0.88rem",color:"var(--text-secondary)",lineHeight:1.5,marginBottom:"16px",display:"-webkit-box",WebkitLineClamp:3,WebkitBoxOrient:"vertical",overflow:"hidden"},children:t.description})]}),a.jsxs("div",{children:[a.jsxs("div",{style:{display:"flex",flexWrap:"wrap",alignItems:"center",justifyContent:"space-between",gap:"8px",paddingTop:"12px",borderTop:"1px solid var(--border-subtle)",fontSize:"0.78rem",color:"var(--text-tertiary)",marginBottom:"12px"},children:[a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"4px"},children:[a.jsx(sn,{size:13}),a.jsx("span",{children:new Date(t.createdAt).toLocaleDateString([],{month:"short",day:"numeric"})})]}),t.deadline&&a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"4px",color:"#ef4444",fontWeight:600},children:[a.jsx(li,{size:13}),a.jsxs("span",{children:["Due ",new Date(t.deadline).toLocaleDateString([],{month:"short",day:"numeric"})]})]}),t.attachmentName&&a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"4px",color:"var(--accent-secondary)"},children:[a.jsx(Hh,{size:13}),a.jsx("span",{children:"Attachment"})]})]}),a.jsxs("button",{onClick:l=>{l.stopPropagation(),i(!0)},className:"btn-outline btn-sm",style:{width:"100%",display:"flex",alignItems:"center",justifyContent:"center",gap:"6px",borderColor:r?"rgba(239, 68, 68, 0.4)":void 0,color:r?"#f87171":void 0},children:[a.jsx("span",{children:"View Full Details"}),a.jsx(Fi,{size:14})]})]})]}),a.jsx(ip,{isOpen:n,onClose:()=>i(!1),announcement:t})]})},rp=({isOpen:t,onClose:e,event:n})=>{const{addToast:i}=Dn();if(!n)return null;const r=new Date(n.date)<new Date;return a.jsx(ns,{isOpen:t,onClose:e,title:"Campus Event Information",maxWidth:"660px",footer:a.jsxs("div",{style:{display:"flex",justifyContent:"space-between",width:"100%",alignItems:"center"},children:[a.jsxs("button",{onClick:()=>{navigator.clipboard&&(navigator.clipboard.writeText(`${n.title}
Date: ${new Date(n.date).toLocaleDateString()}
Venue: ${n.venue}
NotifyHub`),i("Event details copied to clipboard!","info"))},className:"btn-secondary btn-sm",style:{display:"flex",gap:"6px"},children:[a.jsx(f0,{size:15}),a.jsx("span",{children:"Share Event"})]}),a.jsx("button",{onClick:e,className:"btn-primary btn-sm",children:"Close"})]}),children:a.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"18px"},children:[a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[a.jsx("span",{className:`badge ${r?"badge-normal":"badge-important"}`,children:r?"Past Event":"Upcoming Event"}),n.registrationEnabled&&a.jsxs("span",{className:"badge badge-open",children:[a.jsx(Bh,{size:12})," Registration Open"]})]}),a.jsx("h2",{style:{fontSize:"1.4rem",fontWeight:800,color:"var(--text-primary)",lineHeight:1.3},children:n.title}),a.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(200px, 1fr))",gap:"12px",padding:"16px",background:"var(--bg-tertiary)",borderRadius:"var(--radius-md)"},children:[a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px"},children:[a.jsx(sn,{size:18,color:"var(--accent-primary)"}),a.jsxs("div",{children:[a.jsx("span",{style:{fontSize:"0.74rem",color:"var(--text-tertiary)",display:"block"},children:"Date"}),a.jsx("strong",{style:{fontSize:"0.88rem",color:"var(--text-primary)"},children:new Date(n.date).toLocaleDateString([],{weekday:"short",month:"long",day:"numeric",year:"numeric"})})]})]}),a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px"},children:[a.jsx(li,{size:18,color:"var(--accent-secondary)"}),a.jsxs("div",{children:[a.jsx("span",{style:{fontSize:"0.74rem",color:"var(--text-tertiary)",display:"block"},children:"Time"}),a.jsxs("strong",{style:{fontSize:"0.88rem",color:"var(--text-primary)"},children:[n.startTime," - ",n.endTime]})]})]}),a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px"},children:[a.jsx(fa,{size:18,color:"#f59e0b"}),a.jsxs("div",{children:[a.jsx("span",{style:{fontSize:"0.74rem",color:"var(--text-tertiary)",display:"block"},children:"Venue"}),a.jsx("strong",{style:{fontSize:"0.88rem",color:"var(--text-primary)"},children:n.venue})]})]}),a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px"},children:[a.jsx(Xc,{size:18,color:"#10b981"}),a.jsxs("div",{children:[a.jsx("span",{style:{fontSize:"0.74rem",color:"var(--text-tertiary)",display:"block"},children:"Organizer"}),a.jsx("strong",{style:{fontSize:"0.88rem",color:"var(--text-primary)"},children:n.organizer})]})]})]}),a.jsxs("div",{children:[a.jsx("h4",{style:{fontSize:"0.96rem",fontWeight:700,marginBottom:"8px",color:"var(--text-primary)"},children:"About this Event"}),a.jsx("p",{style:{fontSize:"0.92rem",lineHeight:1.65,color:"var(--text-secondary)",whiteSpace:"pre-line"},children:n.description})]}),n.registrationEnabled&&n.registrationDeadline&&a.jsxs("div",{style:{padding:"12px 16px",borderRadius:"var(--radius-md)",background:"rgba(245, 158, 11, 0.1)",border:"1px solid rgba(245, 158, 11, 0.3)",display:"flex",alignItems:"center",gap:"10px",color:"#fbbf24",fontSize:"0.86rem"},children:[a.jsx(Wc,{size:18}),a.jsxs("span",{children:["Registration closes on: ",a.jsx("strong",{children:new Date(n.registrationDeadline).toLocaleDateString([],{dateStyle:"medium"})})]})]}),n.attachmentName&&a.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"12px 16px",borderRadius:"var(--radius-md)",border:"1px solid var(--border-color)",background:"var(--bg-elevated)"},children:[a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px"},children:[a.jsx(Hh,{size:18,color:"var(--accent-primary)"}),a.jsxs("div",{children:[a.jsx("p",{style:{margin:0,fontWeight:600,fontSize:"0.86rem",color:"var(--text-primary)"},children:n.attachmentName}),a.jsx("span",{style:{fontSize:"0.74rem",color:"var(--text-tertiary)"},children:"Event Attachment Brochure"})]})]}),a.jsxs("a",{href:n.attachment||"#",download:n.attachmentName,target:"_blank",rel:"noopener noreferrer",className:"btn-secondary btn-sm",children:[a.jsx(o0,{size:14})," Download"]})]})]})})},ty=({event:t})=>{const[e,n]=P.useState(!1),i=new Date(t.date),r=i.toLocaleString("default",{month:"short"}).toUpperCase(),s=i.getDate(),o=i.toLocaleString("default",{weekday:"short"});return a.jsxs(a.Fragment,{children:[a.jsxs("div",{className:"card interactive-card",onClick:()=>n(!0),style:{display:"flex",flexDirection:"column",justifyContent:"space-between",background:"var(--bg-card)",gap:"16px"},children:[a.jsxs("div",{children:[a.jsxs("div",{style:{display:"flex",alignItems:"flex-start",gap:"14px",marginBottom:"12px"},children:[a.jsxs("div",{style:{width:"54px",height:"60px",borderRadius:"var(--radius-md)",background:"var(--accent-gradient)",color:"#ffffff",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",flexShrink:0,boxShadow:"0 4px 12px var(--accent-primary-glow)"},children:[a.jsx("span",{style:{fontSize:"0.68rem",fontWeight:800,letterSpacing:"0.05em"},children:r}),a.jsx("span",{style:{fontSize:"1.25rem",fontWeight:900,lineHeight:1},children:s}),a.jsx("span",{style:{fontSize:"0.62rem",opacity:.85},children:o})]}),a.jsxs("div",{style:{flex:1,minWidth:0},children:[t.registrationEnabled&&a.jsxs("span",{className:"badge badge-open",style:{marginBottom:"6px",fontSize:"0.68rem"},children:[a.jsx(Rn,{size:11})," Registration Open"]}),a.jsx("h3",{style:{fontSize:"1.05rem",fontWeight:700,color:"var(--text-primary)",margin:0,lineHeight:1.35,display:"-webkit-box",WebkitLineClamp:2,WebkitBoxOrient:"vertical",overflow:"hidden"},children:t.title})]})]}),a.jsx("p",{style:{fontSize:"0.86rem",color:"var(--text-secondary)",lineHeight:1.5,marginBottom:"14px",display:"-webkit-box",WebkitLineClamp:2,WebkitBoxOrient:"vertical",overflow:"hidden"},children:t.description}),a.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"6px",fontSize:"0.8rem",color:"var(--text-secondary)"},children:[a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[a.jsx(li,{size:14,color:"var(--accent-secondary)"}),a.jsxs("span",{children:[t.startTime," - ",t.endTime]})]}),a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[a.jsx(fa,{size:14,color:"#f59e0b"}),a.jsx("span",{style:{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:t.venue})]})]})]}),a.jsxs("button",{onClick:l=>{l.stopPropagation(),n(!0)},className:"btn-secondary btn-sm",style:{width:"100%",display:"flex",justifyContent:"center",alignItems:"center",gap:"6px"},children:[a.jsx("span",{children:"Event Details"}),a.jsx(Fi,{size:14})]})]}),a.jsx(rp,{isOpen:e,onClose:()=>n(!1),event:t})]})},In=({title:t="Unable to connect to server",message:e="An unexpected error occurred while loading data.",onRetry:n=null})=>a.jsxs("div",{className:"card",style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",textAlign:"center",padding:"48px 24px",border:"1px solid rgba(239, 68, 68, 0.3)",background:"rgba(239, 68, 68, 0.04)"},children:[a.jsx("div",{style:{width:"52px",height:"52px",borderRadius:"50%",background:"rgba(239, 68, 68, 0.15)",display:"flex",alignItems:"center",justifyContent:"center",marginBottom:"14px",color:"#ef4444"},children:a.jsx(Wc,{size:26})}),a.jsx("h3",{style:{fontSize:"1.1rem",fontWeight:700,color:"#f87171",marginBottom:"6px"},children:t}),a.jsx("p",{style:{fontSize:"0.88rem",color:"var(--text-secondary)",maxWidth:"400px",marginBottom:n?"18px":"0"},children:e}),n&&a.jsxs("button",{onClick:n,className:"btn-secondary btn-sm",style:{display:"flex",gap:"6px",alignItems:"center"},children:[a.jsx(ha,{size:14}),a.jsx("span",{children:"Retry"})]})]}),HA=()=>{const{user:t}=pi(),[e,n]=P.useState([]),[i,r]=P.useState([]),[s,o]=P.useState([]),[l,c]=P.useState(!0),[u,f]=P.useState(null),h=async()=>{try{c(!0),f(null);const[g,y]=await Promise.all([ni.getAll({limit:8}),Br.getAll({upcoming:"true",limit:3})]);if(g.success){const _=g.announcements||[];n(_.slice(0,4)),r(_.filter(m=>m.priority==="URGENT"))}y.success&&o(y.events||[])}catch(g){console.error(g),f(g.message||"Failed to load home dashboard data.")}finally{c(!1)}};P.useEffect(()=>{h()},[]);const p=[{to:"/student/announcements",title:"View Announcements",desc:"Browse academic, placement & exam circulars",icon:Kr,color:"#6366f1"},{to:"/student/calendar",title:"Events Calendar",desc:"Track hackathons, workshops & sports",icon:sn,color:"#06b6d4"},{to:"/student/qa",title:"Ask a Question",desc:"Submit queries directly to college administration",icon:ui,color:"#10b981"},{to:"/student/notifications",title:"Notifications Feed",desc:"Check live status updates & response alerts",icon:si,color:"#f59e0b"}];return l?a.jsx(_n,{text:"Loading your student dashboard..."}):u?a.jsx(In,{message:u,onRetry:h}):a.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"32px"},children:[a.jsxs("div",{className:"card",style:{background:"linear-gradient(135deg, rgba(99, 102, 241, 0.18) 0%, rgba(6, 182, 212, 0.12) 100%)",border:"1px solid var(--border-highlight)",padding:"32px",display:"flex",flexWrap:"wrap",alignItems:"center",justifyContent:"space-between",gap:"20px"},children:[a.jsxs("div",{children:[a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px",marginBottom:"8px"},children:[a.jsx(Gc,{size:16,color:"var(--accent-primary)"}),a.jsx("span",{style:{fontSize:"0.84rem",fontWeight:700,color:"var(--accent-primary)",textTransform:"uppercase"},children:"Student Portal Overview"})]}),a.jsxs("h1",{style:{fontSize:"clamp(1.6rem, 3vw, 2.2rem)",fontWeight:900,marginBottom:"6px",color:"var(--text-primary)"},children:["Welcome back, ",t==null?void 0:t.name,"!"]}),a.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"12px",fontSize:"0.86rem",color:"var(--text-secondary)"},children:[a.jsxs("span",{children:[a.jsx("strong",{children:"Roll No:"})," ",(t==null?void 0:t.rollNumber)||"N/A"]}),a.jsx("span",{children:"•"}),a.jsxs("span",{children:[a.jsx("strong",{children:"Dept:"})," ",(t==null?void 0:t.department)||"Engineering"]}),a.jsx("span",{children:"•"}),a.jsxs("span",{children:[a.jsx("strong",{children:"Year:"})," ",(t==null?void 0:t.year)||"Current"]})]})]}),a.jsx("div",{style:{display:"flex",gap:"12px"},children:a.jsxs(We,{to:"/student/qa",className:"btn-primary",children:[a.jsx(ui,{size:16}),a.jsx("span",{children:"Ask Admin a Query"})]})})]}),i.length>0&&a.jsxs("div",{children:[a.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"14px"},children:[a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[a.jsx(Ln,{size:20,color:"#ef4444"}),a.jsx("h2",{style:{fontSize:"1.25rem",fontWeight:800,color:"#f87171",margin:0},children:"High-Priority Urgent Alerts"})]}),a.jsxs(We,{to:"/student/urgent-alerts",style:{fontSize:"0.84rem",fontWeight:700,color:"#ef4444"},children:["View all (",i.length,")"]})]}),a.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:i.map(g=>a.jsxs("div",{className:"card animate-pulse-glow",style:{background:"rgba(239, 68, 68, 0.08)",border:"1px solid rgba(239, 68, 68, 0.4)",padding:"18px 24px",display:"flex",alignItems:"center",justifyContent:"space-between",gap:"16px",flexWrap:"wrap"},children:[a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"14px"},children:[a.jsx("div",{style:{width:"40px",height:"40px",borderRadius:"50%",background:"rgba(239, 68, 68, 0.2)",color:"#ef4444",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0},children:a.jsx(Ln,{size:20})}),a.jsxs("div",{children:[a.jsx("h3",{style:{fontSize:"1.02rem",fontWeight:800,color:"var(--text-primary)",margin:0},children:g.title}),a.jsxs("p",{style:{fontSize:"0.86rem",color:"var(--text-secondary)",margin:"4px 0 0"},children:[g.description.slice(0,140),"..."]})]})]}),a.jsxs(We,{to:"/student/urgent-alerts",className:"btn-danger btn-sm",children:[a.jsx("span",{children:"Read Notice"}),a.jsx(Fi,{size:14})]})]},g.id))})]}),a.jsxs("div",{children:[a.jsx("h2",{style:{fontSize:"1.25rem",fontWeight:800,marginBottom:"16px",color:"var(--text-primary)"},children:"Quick Action Shortcuts"}),a.jsx("div",{className:"grid-4",children:p.map((g,y)=>{const _=g.icon;return a.jsxs(We,{to:g.to,className:"card interactive-card",style:{display:"flex",flexDirection:"column",gap:"12px",textDecoration:"none",background:"var(--bg-card)"},children:[a.jsx("div",{style:{width:"42px",height:"42px",borderRadius:"var(--radius-md)",background:`${g.color}18`,color:g.color,display:"flex",alignItems:"center",justifyContent:"center"},children:a.jsx(_,{size:20})}),a.jsxs("div",{children:[a.jsx("h4",{style:{fontSize:"0.98rem",fontWeight:700,color:"var(--text-primary)",margin:"0 0 4px"},children:g.title}),a.jsx("p",{style:{fontSize:"0.8rem",color:"var(--text-secondary)",margin:0,lineHeight:1.4},children:g.desc})]})]},y)})})]}),a.jsxs("div",{className:"grid-2",style:{alignItems:"flex-start",gap:"32px"},children:[a.jsxs("div",{children:[a.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"16px"},children:[a.jsx("h2",{style:{fontSize:"1.25rem",fontWeight:800,color:"var(--text-primary)",margin:0},children:"Recent Announcements"}),a.jsx(We,{to:"/student/announcements",style:{fontSize:"0.84rem",fontWeight:700},children:"View All Notices"})]}),e.length===0?a.jsx("div",{className:"card",style:{textAlign:"center",padding:"36px",color:"var(--text-secondary)"},children:"No announcements published currently."}):a.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:e.map(g=>a.jsx(ey,{announcement:g,onRefresh:h},g.id))})]}),a.jsxs("div",{children:[a.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"16px"},children:[a.jsx("h2",{style:{fontSize:"1.25rem",fontWeight:800,color:"var(--text-primary)",margin:0},children:"Upcoming Events & Calendar"}),a.jsx(We,{to:"/student/calendar",style:{fontSize:"0.84rem",fontWeight:700},children:"Full Calendar"})]}),s.length===0?a.jsx("div",{className:"card",style:{textAlign:"center",padding:"36px",color:"var(--text-secondary)"},children:"No upcoming campus events scheduled."}):a.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:s.map(g=>a.jsx(ty,{event:g},g.id))}),a.jsxs("div",{className:"card",style:{marginTop:"24px",background:"var(--bg-tertiary)",border:"1px solid var(--border-color)"},children:[a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px",marginBottom:"10px"},children:[a.jsx(zh,{size:18,color:"var(--accent-primary)"}),a.jsx("h4",{style:{fontSize:"0.98rem",fontWeight:700,margin:0,color:"var(--text-primary)"},children:"Campus Dean Helpline"})]}),a.jsx("p",{style:{fontSize:"0.86rem",color:"var(--text-secondary)",lineHeight:1.5,marginBottom:"12px"},children:"For urgent administrative guidance, student welfare requests, or medical support:"}),a.jsx("div",{style:{fontSize:"0.82rem",color:"var(--text-primary)",fontWeight:600},children:"Phone: 08685-226128, 9866399776 / 861 | Email: principal.vgnt@vignanits.ac.in"})]})]})]})]})},va=({value:t,onChange:e,placeholder:n="Search...",className:i=""})=>a.jsxs("div",{className:`input-with-icon ${i}`,style:{minWidth:"220px",flex:1},children:[a.jsx(dM,{size:16,className:"input-icon-left"}),a.jsx("input",{type:"text",value:t,onChange:r=>e(r.target.value),placeholder:n,className:"form-input",style:{paddingRight:t?"34px":"14px"}}),t&&a.jsx("button",{onClick:()=>e(""),className:"input-icon-right",style:{background:"none",border:"none",padding:0,display:"flex"},children:a.jsx(qc,{size:15})})]}),VA=({label:t,value:e,onChange:n,options:i=[],icon:r=tM})=>a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[t&&a.jsxs("span",{style:{fontSize:"0.82rem",fontWeight:600,color:"var(--text-tertiary)"},children:[t,":"]}),a.jsx("select",{value:e,onChange:s=>n(s.target.value),className:"form-select",style:{padding:"8px 12px",fontSize:"0.86rem",borderRadius:"var(--radius-md)",minWidth:"130px"},children:i.map(s=>a.jsx("option",{value:s.value,children:s.label},s.value))})]}),mi=({icon:t=rM,title:e="No items found",description:n="There are no records to display at the moment.",action:i=null})=>a.jsxs("div",{className:"card",style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",textAlign:"center",padding:"56px 24px",background:"var(--bg-card)"},children:[a.jsx("div",{style:{width:"56px",height:"56px",borderRadius:"50%",background:"var(--bg-tertiary)",display:"flex",alignItems:"center",justifyContent:"center",marginBottom:"16px",color:"var(--text-tertiary)"},children:a.jsx(t,{size:28})}),a.jsx("h3",{style:{fontSize:"1.15rem",fontWeight:700,color:"var(--text-primary)",marginBottom:"6px"},children:e}),a.jsx("p",{style:{fontSize:"0.88rem",color:"var(--text-secondary)",maxWidth:"420px",marginBottom:i?"20px":"0"},children:n}),i]}),WA=()=>{const[t,e]=P.useState([]),[n,i]=P.useState(!0),[r,s]=P.useState(null),[o,l]=P.useState(""),[c,u]=P.useState("All"),[f,h]=P.useState("All"),p=["All","Academic","Examination","Placement","Workshop","Event","General"],g=[{value:"All",label:"All Priorities"},{value:"URGENT",label:"Urgent Priority"},{value:"IMPORTANT",label:"Important Notice"},{value:"NORMAL",label:"Normal"}],y=async()=>{try{i(!0),s(null);const _=await ni.getAll({search:o,category:c!=="All"?c:void 0,priority:f!=="All"?f:void 0});_.success&&e(_.announcements||[])}catch(_){console.error(_),s(_.message||"Failed to load announcements.")}finally{i(!1)}};return P.useEffect(()=>{y()},[c,f]),P.useEffect(()=>{const _=setTimeout(()=>{y()},300);return()=>clearTimeout(_)},[o]),a.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px"},children:[a.jsxs("div",{style:{display:"flex",flexWrap:"wrap",alignItems:"center",justifyContent:"space-between",gap:"16px"},children:[a.jsxs("div",{children:[a.jsx("h1",{style:{fontSize:"1.8rem",fontWeight:900,margin:0,color:"var(--text-primary)"},children:"College Announcements"}),a.jsx("p",{style:{fontSize:"0.9rem",color:"var(--text-secondary)",margin:"4px 0 0"},children:"Verified circulars, exam notifications, placement notices and campus alerts"})]}),a.jsxs("button",{onClick:y,className:"btn-secondary btn-sm",style:{display:"flex",gap:"6px"},children:[a.jsx(ha,{size:14}),a.jsx("span",{children:"Refresh"})]})]}),a.jsx("div",{style:{display:"flex",gap:"8px",overflowX:"auto",paddingBottom:"6px"},children:p.map(_=>a.jsx("button",{onClick:()=>u(_),style:{padding:"8px 16px",borderRadius:"var(--radius-full)",fontSize:"0.85rem",fontWeight:600,cursor:"pointer",whiteSpace:"nowrap",border:c===_?"1px solid var(--accent-primary)":"1px solid var(--border-color)",background:c===_?"var(--accent-gradient)":"var(--bg-secondary)",color:c===_?"#ffffff":"var(--text-secondary)",boxShadow:c===_?"0 4px 12px var(--accent-primary-glow)":"none",transition:"all var(--transition-fast)"},children:_},_))}),a.jsxs("div",{style:{display:"flex",flexWrap:"wrap",alignItems:"center",justifyContent:"space-between",gap:"14px"},children:[a.jsx(va,{value:o,onChange:l,placeholder:"Search by title, description or keywords..."}),a.jsx(VA,{value:f,onChange:h,options:g,label:"Priority"})]}),n?a.jsx(_n,{text:"Fetching verified announcements..."}):r?a.jsx(In,{message:r,onRetry:y}):t.length===0?a.jsx(mi,{icon:Kr,title:"No announcements match your filter",description:"Try selecting a different category or clearing search terms to see more circulars.",action:a.jsx("button",{onClick:()=>{u("All"),h("All"),l("")},className:"btn-primary btn-sm",children:"Reset Filters"})}):a.jsx("div",{className:"grid-2",style:{gap:"20px"},children:t.map(_=>a.jsx(ey,{announcement:_,onRefresh:y},_.id))})]})},GA=()=>{const[t,e]=P.useState([]),[n,i]=P.useState(null),[r,s]=P.useState(!0),[o,l]=P.useState(null),c=async()=>{try{s(!0),l(null);const u=await ni.getAll({priority:"URGENT"});u.success&&e(u.announcements||[])}catch(u){console.error(u),l(u.message||"Failed to load urgent campus alerts.")}finally{s(!1)}};return P.useEffect(()=>{c()},[]),a.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px"},children:[a.jsxs("div",{className:"card",style:{background:"linear-gradient(135deg, rgba(239, 68, 68, 0.16) 0%, rgba(245, 158, 11, 0.1) 100%)",border:"1px solid rgba(239, 68, 68, 0.4)",padding:"28px",display:"flex",flexWrap:"wrap",alignItems:"center",justifyContent:"space-between",gap:"16px"},children:[a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"16px"},children:[a.jsx("div",{style:{width:"48px",height:"48px",borderRadius:"var(--radius-md)",background:"rgba(239, 68, 68, 0.25)",color:"#ef4444",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0},children:a.jsx(pc,{size:26})}),a.jsxs("div",{children:[a.jsx("h1",{style:{fontSize:"1.6rem",fontWeight:900,margin:0,color:"#f87171"},children:"Urgent Campus Broadcasts"}),a.jsx("p",{style:{fontSize:"0.88rem",color:"var(--text-secondary)",margin:"4px 0 0"},children:"Time-critical notices, emergency advisories, network maintenance & immediate campus updates"})]})]}),a.jsxs("button",{onClick:c,className:"btn-secondary btn-sm",style:{display:"flex",gap:"6px"},children:[a.jsx(ha,{size:14}),a.jsx("span",{children:"Refresh Feed"})]})]}),r?a.jsx(_n,{text:"Checking for active urgent broadcasts..."}):o?a.jsx(In,{message:o,onRetry:c}):t.length===0?a.jsx(mi,{icon:pc,title:"No Active Urgent Alerts",description:"There are currently no high-priority emergency notices published by college administration. All campus systems are normal."}):a.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"18px"},children:t.map(u=>a.jsxs("div",{className:"card animate-pulse-glow",style:{background:"var(--bg-card)",border:"1px solid rgba(239, 68, 68, 0.45)",padding:"24px",display:"flex",flexDirection:"column",gap:"14px"},children:[a.jsxs("div",{style:{display:"flex",flexWrap:"wrap",alignItems:"center",justifyContent:"space-between",gap:"10px"},children:[a.jsxs("span",{className:"badge badge-urgent",children:[a.jsx(Ln,{size:13})," URGENT BROADCAST"]}),a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"12px",fontSize:"0.78rem",color:"var(--text-tertiary)"},children:[a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"4px"},children:[a.jsx(sn,{size:13}),a.jsx("span",{children:new Date(u.createdAt).toLocaleString([],{dateStyle:"medium",timeStyle:"short"})})]}),u.deadline&&a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"4px",color:"#ef4444",fontWeight:600},children:[a.jsx(li,{size:13}),a.jsxs("span",{children:["Deadline: ",new Date(u.deadline).toLocaleDateString()]})]})]})]}),a.jsx("h2",{style:{fontSize:"1.25rem",fontWeight:800,color:"var(--text-primary)",margin:0},children:u.title}),a.jsx("p",{style:{fontSize:"0.94rem",color:"var(--text-secondary)",lineHeight:1.6,margin:0},children:u.description}),a.jsx("div",{style:{display:"flex",justifyContent:"flex-end",paddingTop:"10px",borderTop:"1px solid var(--border-subtle)"},children:a.jsxs("button",{onClick:()=>i(u),className:"btn-danger btn-sm",style:{display:"flex",alignItems:"center",gap:"6px"},children:[a.jsx("span",{children:"View Complete Details"}),a.jsx(Fi,{size:14})]})})]},u.id))}),a.jsx(ip,{isOpen:!!n,onClose:()=>i(null),announcement:n})]})},XA=()=>{const[t,e]=P.useState([]),[n,i]=P.useState(new Date),[r,s]=P.useState(null),[o,l]=P.useState(null),[c,u]=P.useState("calendar"),[f,h]=P.useState(""),[p,g]=P.useState(!0),[y,_]=P.useState(null),m=async()=>{try{g(!0),_(null);const R=await Br.getAll({search:f});R.success&&e(R.events||[])}catch(R){console.error(R),_(R.message||"Failed to load calendar events.")}finally{g(!1)}};P.useEffect(()=>{m()},[f]);const d=n.getFullYear(),x=n.getMonth(),v=new Date(d,x,1).getDay(),S=new Date(d,x+1,0).getDate(),C=["January","February","March","April","May","June","July","August","September","October","November","December"],T=()=>i(new Date(d,x+1,1)),A=()=>i(new Date(d,x-1,1)),N=()=>i(new Date),w=R=>t.filter(G=>{const O=new Date(G.date);return O.getDate()===R&&O.getMonth()===x&&O.getFullYear()===d}),M=o?w(o):[];return a.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px"},children:[a.jsxs("div",{style:{display:"flex",flexWrap:"wrap",alignItems:"center",justifyContent:"space-between",gap:"16px"},children:[a.jsxs("div",{children:[a.jsx("h1",{style:{fontSize:"1.8rem",fontWeight:900,margin:0,color:"var(--text-primary)"},children:"College Events Calendar"}),a.jsx("p",{style:{fontSize:"0.9rem",color:"var(--text-secondary)",margin:"4px 0 0"},children:"Interactive timeline of technical hackathons, guest lectures, cultural fests & sports"})]}),a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[a.jsxs("button",{onClick:()=>u("calendar"),className:`btn-sm ${c==="calendar"?"btn-primary":"btn-secondary"}`,style:{display:"flex",gap:"6px"},children:[a.jsx(sn,{size:14}),a.jsx("span",{children:"Calendar View"})]}),a.jsxs("button",{onClick:()=>u("list"),className:`btn-sm ${c==="list"?"btn-primary":"btn-secondary"}`,style:{display:"flex",gap:"6px"},children:[a.jsx(lM,{size:14}),a.jsx("span",{children:"List View"})]})]})]}),a.jsx("div",{style:{maxWidth:"420px"},children:a.jsx(va,{value:f,onChange:h,placeholder:"Search events by name, venue or organizer..."})}),p?a.jsx(_n,{text:"Loading campus event calendar..."}):y?a.jsx(In,{message:y,onRetry:m}):c==="list"?t.length===0?a.jsx(mi,{icon:sn,title:"No events scheduled",description:"There are no upcoming college events matching your search."}):a.jsx("div",{className:"grid-3",style:{gap:"20px"},children:t.map(R=>a.jsx(ty,{event:R},R.id))}):a.jsxs("div",{className:"grid-2",style:{gridTemplateColumns:"minmax(0, 1.8fr) minmax(0, 1.2fr)",gap:"24px"},children:[a.jsxs("div",{className:"card",style:{padding:"24px",background:"var(--bg-secondary)"},children:[a.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"20px"},children:[a.jsxs("h2",{style:{fontSize:"1.25rem",fontWeight:800,margin:0,color:"var(--text-primary)"},children:[C[x]," ",d]}),a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px"},children:[a.jsx("button",{onClick:N,className:"btn-secondary btn-sm",children:"Today"}),a.jsx("button",{onClick:A,className:"btn-icon btn-secondary btn-icon-sm","aria-label":"Previous month",children:a.jsx(KS,{size:16})}),a.jsx("button",{onClick:T,className:"btn-icon btn-secondary btn-icon-sm","aria-label":"Next month",children:a.jsx(Oh,{size:16})})]})]}),a.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(7, 1fr)",gap:"8px",textAlign:"center",marginBottom:"10px",fontWeight:700,fontSize:"0.78rem",color:"var(--text-tertiary)",textTransform:"uppercase"},children:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"].map(R=>a.jsx("div",{style:{padding:"4px"},children:R},R))}),a.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(7, 1fr)",gap:"8px"},children:[Array.from({length:v}).map((R,G)=>a.jsx("div",{style:{height:"76px"}},`empty-${G}`)),Array.from({length:S}).map((R,G)=>{const O=G+1,q=w(O),$=O===new Date().getDate()&&x===new Date().getMonth()&&d===new Date().getFullYear(),D=o===O;return a.jsxs("div",{onClick:()=>l(O),style:{height:"76px",padding:"8px",borderRadius:"var(--radius-md)",background:D?"var(--accent-primary-glow)":$?"var(--bg-tertiary)":"var(--bg-card)",border:D?"2px solid var(--accent-primary)":$?"1px solid var(--accent-secondary)":"1px solid var(--border-subtle)",cursor:"pointer",display:"flex",flexDirection:"column",justifyContent:"space-between",transition:"all var(--transition-fast)"},onMouseEnter:V=>{D||(V.currentTarget.style.borderColor="var(--border-highlight)")},onMouseLeave:V=>{!D&&!$&&(V.currentTarget.style.borderColor="var(--border-subtle)")},children:[a.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[a.jsx("span",{style:{fontSize:"0.84rem",fontWeight:$||D?800:500,color:$?"var(--accent-secondary)":"var(--text-primary)"},children:O}),$&&a.jsx("span",{style:{fontSize:"0.62rem",fontWeight:800,color:"var(--accent-secondary)"},children:"TODAY"})]}),q.length>0&&a.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"2px"},children:[q.slice(0,2).map(V=>a.jsx("div",{style:{fontSize:"0.68rem",fontWeight:600,padding:"2px 4px",borderRadius:"4px",background:"var(--accent-primary)",color:"#ffffff",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:V.title},V.id)),q.length>2&&a.jsxs("span",{style:{fontSize:"0.62rem",color:"var(--accent-primary)",fontWeight:700},children:["+",q.length-2," more"]})]})]},O)})]})]}),a.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:a.jsxs("div",{className:"card",style:{background:"var(--bg-secondary)",padding:"24px"},children:[a.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"16px"},children:[a.jsx("h3",{style:{fontSize:"1.15rem",fontWeight:800,margin:0,color:"var(--text-primary)"},children:o?`Events on ${C[x]} ${o}, ${d}`:`Upcoming Month Highlights (${C[x]})`}),o&&a.jsx("button",{onClick:()=>l(null),className:"btn-outline btn-sm",children:"Show All"})]}),(o?M:t).length===0?a.jsxs("div",{style:{textAlign:"center",padding:"32px 16px",color:"var(--text-secondary)"},children:[a.jsx(sn,{size:32,color:"var(--text-tertiary)",style:{margin:"0 auto 8px",opacity:.5}}),a.jsx("p",{style:{margin:0,fontSize:"0.9rem"},children:o?`No campus events scheduled for ${C[x]} ${o}.`:"No events scheduled for this month."})]}):a.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"14px"},children:(o?M:t).map(R=>a.jsxs("div",{onClick:()=>s(R),className:"interactive-card",style:{padding:"16px",borderRadius:"var(--radius-md)",background:"var(--bg-tertiary)",border:"1px solid var(--border-color)"},children:[a.jsxs("div",{style:{display:"flex",alignItems:"flex-start",justifyContent:"space-between",gap:"8px"},children:[a.jsx("h4",{style:{fontSize:"0.98rem",fontWeight:700,margin:"0 0 6px",color:"var(--text-primary)"},children:R.title}),R.registrationEnabled&&a.jsx("span",{className:"badge badge-open",style:{fontSize:"0.65rem"},children:"Register"})]}),a.jsxs("p",{style:{fontSize:"0.82rem",color:"var(--text-secondary)",margin:"0 0 10px",lineHeight:1.4},children:[R.description.slice(0,100),"..."]}),a.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"12px",fontSize:"0.76rem",color:"var(--text-tertiary)"},children:[a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"4px"},children:[a.jsx(li,{size:12}),a.jsxs("span",{children:[R.startTime," - ",R.endTime]})]}),a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"4px"},children:[a.jsx(fa,{size:12}),a.jsx("span",{children:R.venue})]})]})]},R.id))})]})})]}),a.jsx(rp,{isOpen:!!r,onClose:()=>s(null),event:r})]})},qA=()=>{const[t,e]=P.useState([]),[n,i]=P.useState(!0),[r,s]=P.useState(null),o=hi(),{addToast:l}=Dn(),c=async()=>{try{i(!0),s(null);const g=await hr.getMyNotifications({limit:50});g.success&&e(g.notifications||[])}catch(g){console.error(g),s(g.message||"Failed to load notifications.")}finally{i(!1)}};P.useEffect(()=>{c()},[]);const u=async()=>{try{await hr.markAllAsRead(),e(g=>g.map(y=>({...y,read:!0}))),l("All notifications marked as read","info")}catch{l("Failed to mark all as read","error")}},f=async g=>{if(!g.read)try{await hr.markAsRead(g.id),e(y=>y.map(_=>_.id===g.id?{..._,read:!0}:_))}catch(y){console.error(y)}g.link&&o(g.link)},h=g=>{switch(g){case"URGENT_ALERT":return a.jsx(Ln,{size:18,color:"#ef4444"});case"EVENT":return a.jsx(sn,{size:18,color:"#06b6d4"});case"QUERY_REPLY":return a.jsx(ui,{size:18,color:"#10b981"});default:return a.jsx(si,{size:18,color:"#6366f1"})}},p=t.filter(g=>!g.read).length;return a.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px"},children:[a.jsxs("div",{style:{display:"flex",flexWrap:"wrap",alignItems:"center",justifyContent:"space-between",gap:"16px"},children:[a.jsxs("div",{children:[a.jsx("h1",{style:{fontSize:"1.8rem",fontWeight:900,margin:0,color:"var(--text-primary)"},children:"Notifications Center"}),a.jsx("p",{style:{fontSize:"0.9rem",color:"var(--text-secondary)",margin:"4px 0 0"},children:"Instant alerts for new notices, urgent campus updates, and administrator responses"})]}),p>0&&a.jsxs("button",{onClick:u,className:"btn-secondary btn-sm",style:{display:"flex",gap:"6px"},children:[a.jsx(Fh,{size:16}),a.jsxs("span",{children:["Mark All as Read (",p,")"]})]})]}),n?a.jsx(_n,{text:"Fetching your notifications..."}):r?a.jsx(In,{message:r,onRetry:c}):t.length===0?a.jsx(mi,{icon:si,title:"No Notifications Found",description:"You don't have any notifications right now. New notices and administrative query replies will appear here."}):a.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:t.map(g=>a.jsxs("div",{onClick:()=>f(g),className:"card interactive-card",style:{display:"flex",alignItems:"flex-start",gap:"16px",padding:"18px 20px",background:g.read?"var(--bg-card)":"var(--bg-elevated)",border:g.read?"1px solid var(--border-color)":"1px solid var(--border-highlight)"},children:[a.jsx("div",{style:{width:"42px",height:"42px",borderRadius:"var(--radius-md)",background:"var(--bg-tertiary)",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0},children:h(g.type)}),a.jsxs("div",{style:{flex:1,minWidth:0},children:[a.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",gap:"8px"},children:[a.jsx("h4",{style:{fontSize:"0.98rem",fontWeight:g.read?600:800,color:"var(--text-primary)",margin:0},children:g.title}),!g.read&&a.jsx("span",{className:"badge badge-normal",style:{fontSize:"0.66rem"},children:"NEW"})]}),a.jsx("p",{style:{fontSize:"0.88rem",color:"var(--text-secondary)",margin:"6px 0 8px",lineHeight:1.5},children:g.message}),a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px",fontSize:"0.76rem",color:"var(--text-tertiary)"},children:[a.jsx(li,{size:12}),a.jsx("span",{children:new Date(g.createdAt).toLocaleString([],{dateStyle:"medium",timeStyle:"short"})})]})]})]},g.id))})]})},Wr={getAll:t=>nt.get("/queries",t),getById:t=>nt.get(`/queries/${t}`),create:t=>nt.post("/queries",t),reply:(t,e)=>nt.post(`/queries/${t}/reply`,e),updateStatus:(t,e)=>nt.put(`/queries/${t}/status`,e),delete:t=>nt.delete(`/queries/${t}`)},$A=({query:t,onReply:e=null,isAdmin:n=!1})=>{const i=r=>{switch(r){case"RESOLVED":return a.jsxs("span",{className:"badge badge-resolved",children:[a.jsx(Rn,{size:12})," Resolved"]});case"IN_PROGRESS":return a.jsxs("span",{className:"badge badge-progress",children:[a.jsx(li,{size:12})," In Progress"]});default:return a.jsxs("span",{className:"badge badge-open",children:[a.jsx(ui,{size:12})," Open"]})}};return a.jsxs("div",{className:"card",style:{display:"flex",flexDirection:"column",gap:"14px",background:"var(--bg-card)",border:t.status==="OPEN"?"1px solid rgba(59, 130, 246, 0.3)":"1px solid var(--border-color)"},children:[a.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",gap:"8px"},children:[a.jsx("h4",{style:{fontSize:"1.05rem",fontWeight:700,color:"var(--text-primary)",margin:0},children:t.subject}),i(t.status)]}),a.jsx("p",{style:{fontSize:"0.92rem",color:"var(--text-secondary)",lineHeight:1.6,margin:0,whiteSpace:"pre-line"},children:t.message}),a.jsxs("div",{style:{display:"flex",flexWrap:"wrap",alignItems:"center",justifyContent:"space-between",gap:"8px",fontSize:"0.78rem",color:"var(--text-tertiary)"},children:[a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"12px"},children:[a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"4px"},children:[a.jsx(li,{size:13}),a.jsxs("span",{children:["Submitted: ",new Date(t.createdAt).toLocaleDateString([],{month:"short",day:"numeric",year:"numeric"})]})]}),n&&t.student&&a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"4px",color:"var(--accent-primary)"},children:[a.jsx(To,{size:13}),a.jsxs("span",{children:[t.student.name," (",t.student.rollNumber||t.student.email,")"]})]})]}),n&&a.jsx("button",{onClick:()=>e(t),className:"btn-primary btn-sm",children:a.jsx("span",{children:t.response?"Update Response":"Reply to Query"})})]}),t.response&&a.jsxs("div",{style:{marginTop:"6px",padding:"14px 16px",borderRadius:"var(--radius-md)",background:"var(--bg-elevated)",borderLeft:"4px solid var(--accent-primary)"},children:[a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px",marginBottom:"6px"},children:[a.jsx(h0,{size:16,color:"var(--accent-primary)"}),a.jsx("span",{style:{fontSize:"0.82rem",fontWeight:700,color:"var(--accent-primary)"},children:"Administrator Response"}),t.respondedAt&&a.jsx("span",{style:{fontSize:"0.74rem",color:"var(--text-tertiary)",marginLeft:"auto"},children:new Date(t.respondedAt).toLocaleString([],{dateStyle:"medium",timeStyle:"short"})})]}),a.jsx("p",{style:{fontSize:"0.9rem",color:"var(--text-primary)",lineHeight:1.55,margin:0,whiteSpace:"pre-line"},children:t.response})]})]})},YA=()=>{const[t,e]=P.useState([]),[n,i]=P.useState("All"),[r,s]=P.useState(!1),[o,l]=P.useState(""),[c,u]=P.useState(""),[f,h]=P.useState(!1),[p,g]=P.useState(!0),[y,_]=P.useState(null),{addToast:m}=Dn(),d=async()=>{try{g(!0),_(null);const S=await Wr.getAll({status:n!=="All"?n:void 0});S.success&&e(S.queries||[])}catch(S){console.error(S),_(S.message||"Failed to load your queries.")}finally{g(!1)}};P.useEffect(()=>{d()},[n]);const x=async S=>{if(S.preventDefault(),!o.trim()||!c.trim()){m("Please enter both subject and message.","warning");return}try{h(!0),(await Wr.create({subject:o,message:c})).success&&(m("Query submitted successfully! Admin will respond soon.","success"),l(""),u(""),s(!1),d())}catch(C){m(C.message||"Failed to submit query","error")}finally{h(!1)}},v=["All","OPEN","IN_PROGRESS","RESOLVED"];return a.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px"},children:[a.jsxs("div",{style:{display:"flex",flexWrap:"wrap",alignItems:"center",justifyContent:"space-between",gap:"16px"},children:[a.jsxs("div",{children:[a.jsx("h1",{style:{fontSize:"1.8rem",fontWeight:900,margin:0,color:"var(--text-primary)"},children:"Student Q&A & Support Desk"}),a.jsx("p",{style:{fontSize:"0.9rem",color:"var(--text-secondary)",margin:"4px 0 0"},children:"Submit questions regarding electives, fees, hostels, or exams directly to college administration"})]}),a.jsxs("button",{onClick:()=>s(!0),className:"btn-primary",style:{display:"flex",gap:"8px"},children:[a.jsx(Qr,{size:18}),a.jsx("span",{children:"Ask a Question"})]})]}),a.jsx("div",{style:{display:"flex",gap:"8px",overflowX:"auto",paddingBottom:"4px"},children:v.map(S=>a.jsx("button",{onClick:()=>i(S),style:{padding:"8px 16px",borderRadius:"var(--radius-full)",fontSize:"0.84rem",fontWeight:600,cursor:"pointer",whiteSpace:"nowrap",border:n===S?"1px solid var(--accent-primary)":"1px solid var(--border-color)",background:n===S?"var(--accent-gradient)":"var(--bg-secondary)",color:n===S?"#ffffff":"var(--text-secondary)",boxShadow:n===S?"0 4px 12px var(--accent-primary-glow)":"none",transition:"all var(--transition-fast)"},children:S==="All"?"All Queries":S==="OPEN"?"Open":S==="IN_PROGRESS"?"In Progress":"Resolved"},S))}),p?a.jsx(_n,{text:"Retrieving query history..."}):y?a.jsx(In,{message:y,onRetry:d}):t.length===0?a.jsx(mi,{icon:ui,title:n==="All"?"No Queries Submitted Yet":`No ${n} queries found`,description:"Have a question about courses, exams, or campus facilities? Submit your query to get official guidance from administration.",action:a.jsxs("button",{onClick:()=>s(!0),className:"btn-primary btn-sm",children:[a.jsx(Qr,{size:14}),a.jsx("span",{children:"Ask Your First Question"})]})}):a.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:t.map(S=>a.jsx($A,{query:S},S.id))}),a.jsx(ns,{isOpen:r,onClose:()=>s(!1),title:"Submit a Query to Administration",maxWidth:"580px",footer:a.jsxs(a.Fragment,{children:[a.jsx("button",{onClick:()=>s(!1),className:"btn-secondary",disabled:f,children:"Cancel"}),a.jsxs("button",{onClick:x,className:"btn-primary",disabled:f,children:[a.jsx(wo,{size:15}),a.jsx("span",{children:f?"Submitting...":"Submit Query"})]})]}),children:a.jsxs("form",{onSubmit:x,style:{display:"flex",flexDirection:"column",gap:"16px"},children:[a.jsxs("div",{className:"form-group",style:{marginBottom:0},children:[a.jsx("label",{className:"form-label",children:"Subject / Query Topic"}),a.jsx("input",{type:"text",value:o,onChange:S=>l(S.target.value),placeholder:"e.g. Elective Course Slot Prerequisite Issue",className:"form-input",required:!0})]}),a.jsxs("div",{className:"form-group",style:{marginBottom:0},children:[a.jsx("label",{className:"form-label",children:"Detailed Message"}),a.jsx("textarea",{value:c,onChange:S=>u(S.target.value),rows:5,placeholder:"Provide complete details including semester, course code, hostel block, or reference number...",className:"form-textarea",required:!0})]})]})})]})},KA=()=>{const t=[{name:"Department of Computer Science & Engineering",hod:"Dr. rajavikram",email:"cse.dept@notifyhub.edu",programs:"B.Tech, M.Tech, Ph.D in computer science",labs:"Cloud & Distributed Computing Lab, AI Innovation Center"},{name:"Department of Electronics & Communication",hod:"Dr. Rajesh Nair",email:"ece.dept@notifyhub.edu",programs:"B.Tech, M.Tech in VLSI & Embedded Systems",labs:"Advanced Signal Processing Lab, IoT & Robotics Wing"},{name:"Department of Mechanical Engineering",hod:"Dr. Ananya Sen",email:"mech.dept@notifyhub.edu",programs:"B.Tech, M.Tech in Robotics & Automation",labs:"Additive Manufacturing & CAD/CAM Simulation Lab"},{name:"Department of Electrical & Electronics",hod:"Dr. ramanujan",email:"eee.dept@notifyhub.edu",programs:"B.Tech in Power Systems & Renewable Energy",labs:"Smart Grid Simulation Lab, Power Electronics Suite"}],e=[{icon:oM,title:"Central Digital Library",desc:"Over 120,000 volumes, IEEE Xplore, ACM Digital Library & 24/7 quiet study zones."},{icon:JS,title:"High-Performance Supercomputing Lab",desc:"NVIDIA GPU clusters for generative AI modeling, autonomous systems & quantum simulation."},{icon:mM,title:"Gigabit Campus Mesh",desc:"10 Gbps fiber backbone across academic blocks, innovation centers and hostel residences."},{icon:QS,title:"Student Innovation Hub & Cafeteria",desc:"Collaborative maker spaces, student society offices, amphitheater, and dining halls."}],n=[{title:"Academic Regulations & Curriculum",url:"#",desc:"Credit structure, grading policy, and elective catalogues"},{title:"Anti-Ragging & Student Welfare Cell",url:"#",desc:"Helpline: +1 (800) 555-HELP (24/7 toll-free)"},{title:"Placement & Career Development Cell",url:"#",desc:"Internship guidelines, resume templates & recruiter list"},{title:"Hostel Administration & Transport",url:"#",desc:"Hostel gate rules, mess menu and daily bus routes"}];return a.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"32px"},children:[a.jsxs("div",{className:"card",style:{background:"linear-gradient(135deg, rgba(99, 102, 241, 0.16) 0%, rgba(6, 182, 212, 0.12) 100%)",border:"1px solid var(--border-highlight)",padding:"36px"},children:[a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"14px",marginBottom:"14px"},children:[a.jsx("div",{style:{width:"48px",height:"48px",borderRadius:"var(--radius-md)",background:"var(--accent-gradient)",color:"#ffffff",display:"flex",alignItems:"center",justifyContent:"center",boxShadow:"0 4px 14px var(--accent-primary-glow)"},children:a.jsx(ua,{size:28})}),a.jsxs("div",{children:[a.jsx("h1",{style:{fontSize:"2rem",fontWeight:900,color:"var(--text-primary)",margin:0},children:"Vignan Institute of Technology and Science"}),a.jsx("span",{style:{fontSize:"0.86rem",color:"var(--text-secondary)",fontWeight:600},children:"Autonomous Institution | NAAC 'A++' Accredited | Established 1998"})]})]}),a.jsx("p",{style:{fontSize:"1.02rem",lineHeight:1.7,color:"var(--text-secondary)",maxWidth:"920px",margin:0},children:"Vignan Institute of Technology and Science is a premier institution of higher learning committed to excellence in education and research. With a vibrant community of around 2,500 students, the institution offers B.Tech programs in Civil Engineering, Mechanical Engineering, Electrical and Electronics Engineering(EEE), Electronics and Communication Engineering (ECE), Computer Science and Engineering(CSE), CSE (AI&ML), CSE(Data Science), Information Technology(IT), AI&DS, AI&ML and Electronics and Instrumentation Engineering (EIE) and M.Tech programs in CSE, AI&DS, ES, PEED        "})]}),a.jsxs("div",{className:"grid-2",style:{gap:"20px"},children:[a.jsxs("div",{className:"card",style:{background:"var(--bg-secondary)",padding:"28px"},children:[a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px",marginBottom:"12px"},children:[a.jsx("div",{style:{width:"38px",height:"38px",borderRadius:"var(--radius-sm)",background:"rgba(99, 102, 241, 0.15)",color:"var(--accent-primary)",display:"flex",alignItems:"center",justifyContent:"center"},children:a.jsx(pM,{size:20})}),a.jsx("h2",{style:{fontSize:"1.25rem",fontWeight:800,margin:0,color:"var(--text-primary)"},children:"Our Vision"})]}),a.jsx("p",{style:{fontSize:"0.94rem",lineHeight:1.65,color:"var(--text-secondary)",margin:0},children:"To be recognized globally as an institution of academic brilliance, pioneering research, and transformative engineering solutions that foster societal progress, sustainability, and technological leadership."})]}),a.jsxs("div",{className:"card",style:{background:"var(--bg-secondary)",padding:"28px"},children:[a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px",marginBottom:"12px"},children:[a.jsx("div",{style:{width:"38px",height:"38px",borderRadius:"var(--radius-sm)",background:"rgba(6, 182, 212, 0.15)",color:"var(--accent-secondary)",display:"flex",alignItems:"center",justifyContent:"center"},children:a.jsx(ZS,{size:20})}),a.jsx("h2",{style:{fontSize:"1.25rem",fontWeight:800,margin:0,color:"var(--text-primary)"},children:"Our Mission"})]}),a.jsx("p",{style:{fontSize:"0.94rem",lineHeight:1.65,color:"var(--text-secondary)",margin:0},children:"Empower students through rigorous interdisciplinary curricula, experiential hands-on laboratory learning, ethical leadership training, and seamless digital campus services that maximize academic success."})]})]}),a.jsxs("div",{children:[a.jsx("h2",{style:{fontSize:"1.4rem",fontWeight:800,marginBottom:"18px",color:"var(--text-primary)"},children:"Academic Departments & Leadership"}),a.jsx("div",{className:"grid-2",style:{gap:"20px"},children:t.map((i,r)=>a.jsxs("div",{className:"card",style:{background:"var(--bg-card)",padding:"24px"},children:[a.jsxs("div",{style:{display:"flex",alignItems:"flex-start",gap:"12px",marginBottom:"12px"},children:[a.jsx(zh,{size:20,color:"var(--accent-primary)",style:{flexShrink:0,marginTop:"3px"}}),a.jsxs("div",{children:[a.jsx("h3",{style:{fontSize:"1.08rem",fontWeight:700,color:"var(--text-primary)",margin:0},children:i.name}),a.jsxs("span",{style:{fontSize:"0.82rem",color:"var(--text-tertiary)"},children:["HOD: ",a.jsx("strong",{children:i.hod})," (",i.email,")"]})]})]}),a.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"6px",fontSize:"0.84rem",color:"var(--text-secondary)"},children:[a.jsxs("div",{children:[a.jsx("strong",{children:"Programs Offered:"})," ",i.programs]}),a.jsxs("div",{children:[a.jsx("strong",{children:"Specialized Labs:"})," ",i.labs]})]})]},r))})]}),a.jsxs("div",{children:[a.jsx("h2",{style:{fontSize:"1.4rem",fontWeight:800,marginBottom:"18px",color:"var(--text-primary)"},children:"Campus Infrastructure & Facilities"}),a.jsx("div",{className:"grid-4",children:e.map((i,r)=>{const s=i.icon;return a.jsxs("div",{className:"card",style:{background:"var(--bg-secondary)",padding:"22px"},children:[a.jsx("div",{style:{width:"42px",height:"42px",borderRadius:"var(--radius-md)",background:"var(--accent-primary-glow)",color:"var(--accent-primary)",display:"flex",alignItems:"center",justifyContent:"center",marginBottom:"12px"},children:a.jsx(s,{size:22})}),a.jsx("h4",{style:{fontSize:"0.98rem",fontWeight:700,margin:"0 0 6px",color:"var(--text-primary)"},children:i.title}),a.jsx("p",{style:{fontSize:"0.82rem",color:"var(--text-secondary)",margin:0,lineHeight:1.5},children:i.desc})]},r)})})]}),a.jsxs("div",{className:"grid-2",style:{gap:"24px"},children:[a.jsxs("div",{className:"card",style:{background:"var(--bg-secondary)",padding:"26px"},children:[a.jsx("h3",{style:{fontSize:"1.15rem",fontWeight:800,marginBottom:"16px",color:"var(--text-primary)"},children:"Student Guidelines & Resources"}),a.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:n.map((i,r)=>a.jsxs("div",{style:{padding:"12px 14px",borderRadius:"var(--radius-md)",background:"var(--bg-tertiary)",border:"1px solid var(--border-color)"},children:[a.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:[a.jsx("strong",{style:{fontSize:"0.88rem",color:"var(--text-primary)"},children:i.title}),a.jsx(eM,{size:14,color:"var(--accent-primary)"})]}),a.jsx("p",{style:{fontSize:"0.78rem",color:"var(--text-secondary)",margin:"4px 0 0"},children:i.desc})]},r))})]}),a.jsxs("div",{className:"card",style:{background:"var(--bg-secondary)",padding:"26px"},children:[a.jsx("h3",{style:{fontSize:"1.15rem",fontWeight:800,marginBottom:"16px",color:"var(--text-primary)"},children:"Campus Contact Directory"}),a.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px",fontSize:"0.88rem"},children:[a.jsxs("div",{style:{display:"flex",alignItems:"flex-start",gap:"12px"},children:[a.jsx(fa,{size:18,color:"var(--accent-primary)",style:{flexShrink:0,marginTop:"3px"}}),a.jsxs("div",{children:[a.jsx("strong",{style:{display:"block",color:"var(--text-primary)",marginBottom:"3px"},children:"VIGNAN INSTITUTE OF TECHNOLOGY AND SCIENCE"}),a.jsxs("span",{style:{color:"var(--text-secondary)",lineHeight:1.6,display:"block"},children:["Deshmukhi(V), Pochampally(M),",a.jsx("br",{}),"Yadadri-Bhuvanagiri District,",a.jsx("br",{}),"Telangana - 508284"]})]})]}),a.jsxs("div",{style:{display:"flex",alignItems:"flex-start",gap:"12px"},children:[a.jsx(Vh,{size:18,color:"var(--accent-primary)",style:{flexShrink:0,marginTop:"3px"}}),a.jsxs("div",{children:[a.jsx("strong",{style:{display:"block",color:"var(--text-primary)",marginBottom:"3px"},children:"Campus Telephones & Helpline"}),a.jsxs("span",{style:{color:"var(--text-secondary)",lineHeight:1.6},children:["Landline: ",a.jsx("a",{href:"tel:08685226128",style:{color:"var(--accent-primary)",textDecoration:"none",fontWeight:600},children:"08685-226128"}),a.jsx("br",{}),"Helplines: ",a.jsx("span",{style:{color:"var(--text-primary)",fontWeight:600},children:"9866399776 / 861"})]})]})]}),a.jsxs("div",{style:{display:"flex",alignItems:"flex-start",gap:"12px"},children:[a.jsx(da,{size:18,color:"var(--accent-primary)",style:{flexShrink:0,marginTop:"3px"}}),a.jsxs("div",{children:[a.jsx("strong",{style:{display:"block",color:"var(--text-primary)",marginBottom:"4px"},children:"Principal & Official Administrative Emails"}),a.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"3px"},children:[a.jsx("a",{href:"mailto:principal.vgnt89@gmail.com",style:{color:"var(--accent-primary)",textDecoration:"none"},children:"principal.vgnt89@gmail.com"}),a.jsx("a",{href:"mailto:principal.vits@gmail.com",style:{color:"var(--accent-primary)",textDecoration:"none"},children:"principal.vits@gmail.com"}),a.jsx("a",{href:"mailto:principal.vgnt@vignanits.ac.in",style:{color:"var(--accent-primary)",textDecoration:"none"},children:"principal.vgnt@vignanits.ac.in"})]})]})]})]})]})]})]})},QA=()=>{const{user:t,changePassword:e}=pi(),{addToast:n}=Dn(),[i,r]=P.useState(""),[s,o]=P.useState(""),[l,c]=P.useState(""),[u,f]=P.useState(!1),[h,p]=P.useState(!1),[g,y]=P.useState(!1),_=async m=>{if(m.preventDefault(),s.length<6){n("New password must be at least 6 characters.","warning");return}if(s!==l){n("New passwords do not match.","error");return}y(!0);const d=await e({currentPassword:i,newPassword:s,confirmNewPassword:l});y(!1),d.success&&(r(""),o(""),c(""))};return a.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"28px",maxWidth:"900px"},children:[a.jsxs("div",{children:[a.jsx("h1",{style:{fontSize:"1.8rem",fontWeight:900,margin:0,color:"var(--text-primary)"},children:"Student Profile & Security"}),a.jsx("p",{style:{fontSize:"0.9rem",color:"var(--text-secondary)",margin:"4px 0 0"},children:"Manage your verified student credentials and account security"})]}),a.jsxs("div",{className:"grid-2",style:{gap:"24px"},children:[a.jsxs("div",{className:"card",style:{background:"var(--bg-secondary)",padding:"28px"},children:[a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"16px",marginBottom:"24px"},children:[a.jsx("div",{style:{width:"64px",height:"64px",borderRadius:"50%",background:"var(--accent-gradient)",color:"#ffffff",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"1.6rem",fontWeight:900,boxShadow:"0 4px 14px var(--accent-primary-glow)"},children:t!=null&&t.name?t.name.charAt(0):"S"}),a.jsxs("div",{children:[a.jsx("h2",{style:{fontSize:"1.25rem",fontWeight:800,margin:0,color:"var(--text-primary)"},children:t==null?void 0:t.name}),a.jsx("span",{className:"badge badge-normal",style:{marginTop:"4px"},children:"Verified Student"})]})]}),a.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"14px"},children:[a.jsxs("div",{style:{padding:"12px 14px",borderRadius:"var(--radius-md)",background:"var(--bg-tertiary)"},children:[a.jsx("span",{style:{fontSize:"0.74rem",color:"var(--text-tertiary)",display:"block"},children:"Email Address"}),a.jsx("strong",{style:{fontSize:"0.9rem",color:"var(--text-primary)"},children:t==null?void 0:t.email})]}),a.jsxs("div",{style:{padding:"12px 14px",borderRadius:"var(--radius-md)",background:"var(--bg-tertiary)"},children:[a.jsx("span",{style:{fontSize:"0.74rem",color:"var(--text-tertiary)",display:"block"},children:"Roll Number"}),a.jsx("strong",{style:{fontSize:"0.9rem",color:"var(--text-primary)"},children:(t==null?void 0:t.rollNumber)||"Not assigned"})]}),a.jsxs("div",{style:{padding:"12px 14px",borderRadius:"var(--radius-md)",background:"var(--bg-tertiary)"},children:[a.jsx("span",{style:{fontSize:"0.74rem",color:"var(--text-tertiary)",display:"block"},children:"Department / Branch"}),a.jsx("strong",{style:{fontSize:"0.9rem",color:"var(--text-primary)"},children:(t==null?void 0:t.department)||"General"})]}),a.jsxs("div",{style:{padding:"12px 14px",borderRadius:"var(--radius-md)",background:"var(--bg-tertiary)"},children:[a.jsx("span",{style:{fontSize:"0.74rem",color:"var(--text-tertiary)",display:"block"},children:"Academic Year"}),a.jsx("strong",{style:{fontSize:"0.9rem",color:"var(--text-primary)"},children:(t==null?void 0:t.year)||"Current Student"})]})]})]}),a.jsxs("div",{className:"card",style:{background:"var(--bg-secondary)",padding:"28px"},children:[a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px",marginBottom:"20px"},children:[a.jsx("div",{style:{width:"38px",height:"38px",borderRadius:"var(--radius-sm)",background:"var(--accent-primary-glow)",color:"var(--accent-primary)",display:"flex",alignItems:"center",justifyContent:"center"},children:a.jsx(l0,{size:20})}),a.jsxs("div",{children:[a.jsx("h3",{style:{fontSize:"1.15rem",fontWeight:800,margin:0,color:"var(--text-primary)"},children:"Change Password"}),a.jsx("span",{style:{fontSize:"0.76rem",color:"var(--text-tertiary)"},children:"Keep your student account secure"})]})]}),a.jsxs("form",{onSubmit:_,children:[a.jsxs("div",{className:"form-group",children:[a.jsx("label",{className:"form-label",children:"Current Password"}),a.jsxs("div",{className:"input-with-icon",children:[a.jsx(ai,{size:16,className:"input-icon-left"}),a.jsx("input",{type:u?"text":"password",value:i,onChange:m=>r(m.target.value),placeholder:"Enter current password",className:"form-input",required:!0}),a.jsx("button",{type:"button",onClick:()=>f(!u),className:"input-icon-right",style:{background:"none",border:"none",display:"flex"},children:u?a.jsx(gr,{size:16}):a.jsx(ci,{size:16})})]})]}),a.jsxs("div",{className:"form-group",children:[a.jsx("label",{className:"form-label",children:"New Password"}),a.jsxs("div",{className:"input-with-icon",children:[a.jsx(ai,{size:16,className:"input-icon-left"}),a.jsx("input",{type:h?"text":"password",value:s,onChange:m=>o(m.target.value),placeholder:"Min 6 characters",className:"form-input",required:!0}),a.jsx("button",{type:"button",onClick:()=>p(!h),className:"input-icon-right",style:{background:"none",border:"none",display:"flex"},children:h?a.jsx(gr,{size:16}):a.jsx(ci,{size:16})})]})]}),a.jsxs("div",{className:"form-group",children:[a.jsx("label",{className:"form-label",children:"Confirm New Password"}),a.jsxs("div",{className:"input-with-icon",children:[a.jsx(ai,{size:16,className:"input-icon-left"}),a.jsx("input",{type:"password",value:l,onChange:m=>c(m.target.value),placeholder:"Re-enter new password",className:"form-input",required:!0})]})]}),a.jsx("button",{type:"submit",disabled:g,className:"btn-primary",style:{width:"100%",marginTop:"6px"},children:g?"Updating Password...":"Update Password"})]})]})]})]})},ZA=()=>{const[t,e]=P.useState(!1);return a.jsxs("div",{className:"portal-layout",children:[a.jsx(J0,{isOpen:t,onClose:()=>e(!1)}),a.jsxs("div",{className:"portal-main",children:[a.jsx(xa,{onToggleSidebar:()=>e(!t)}),a.jsx("main",{className:"portal-content",children:a.jsx(r0,{})})]})]})},ny={getAll:t=>nt.get("/activity",t)},iy={getHealth:()=>nt.get("/health")},ry=({isOpen:t,onClose:e,query:n,onSuccess:i})=>{var p,g;const[r,s]=P.useState(""),[o,l]=P.useState("RESOLVED"),[c,u]=P.useState(!1),{addToast:f}=Dn();P.useEffect(()=>{n&&(s(n.response||""),l(n.status==="OPEN"?"RESOLVED":n.status))},[n]);const h=async y=>{if(y.preventDefault(),!r.trim()){f("Please enter a reply response.","warning");return}try{u(!0);const _=await Wr.reply(n.id,{response:r,status:o});_.success&&(f("Reply submitted and student notified!","success"),i(_.query),e())}catch(_){f(_.message||"Failed to submit response","error")}finally{u(!1)}};return n?a.jsx(ns,{isOpen:t,onClose:e,title:"Reply to Student Query",maxWidth:"620px",footer:a.jsxs(a.Fragment,{children:[a.jsx("button",{onClick:e,className:"btn-secondary",disabled:c,children:"Cancel"}),a.jsxs("button",{onClick:h,className:"btn-primary",disabled:c,children:[a.jsx(wo,{size:15}),a.jsx("span",{children:c?"Sending...":"Send Response & Notify Student"})]})]}),children:a.jsxs("form",{onSubmit:h,style:{display:"flex",flexDirection:"column",gap:"16px"},children:[a.jsxs("div",{style:{padding:"14px 16px",borderRadius:"var(--radius-md)",background:"var(--bg-tertiary)",border:"1px solid var(--border-color)"},children:[a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px",marginBottom:"8px"},children:[a.jsx(To,{size:15,color:"var(--accent-primary)"}),a.jsxs("strong",{style:{fontSize:"0.88rem",color:"var(--text-primary)"},children:[((p=n.student)==null?void 0:p.name)||"Student"," (",((g=n.student)==null?void 0:g.email)||"N/A",")"]})]}),a.jsx("h4",{style:{fontSize:"0.98rem",fontWeight:700,margin:"4px 0 6px",color:"var(--text-primary)"},children:n.subject}),a.jsx("p",{style:{fontSize:"0.88rem",color:"var(--text-secondary)",lineHeight:1.5,margin:0},children:n.message})]}),a.jsxs("div",{className:"form-group",style:{marginBottom:0},children:[a.jsx("label",{className:"form-label",children:"Set Query Status"}),a.jsxs("select",{value:o,onChange:y=>l(y.target.value),className:"form-select",children:[a.jsx("option",{value:"RESOLVED",children:"Resolved (Query answered & closed)"}),a.jsx("option",{value:"IN_PROGRESS",children:"In Progress (Under investigation / review)"}),a.jsx("option",{value:"OPEN",children:"Open (Pending)"})]})]}),a.jsxs("div",{className:"form-group",style:{marginBottom:0},children:[a.jsx("label",{className:"form-label",children:"Administrator Response"}),a.jsx("textarea",{value:r,onChange:y=>s(y.target.value),rows:5,placeholder:"Type your official administrative answer to the student here...",className:"form-textarea",required:!0})]})]})}):null},JA=()=>{const[t,e]=P.useState({totalStudents:0,totalAnnouncements:0,publishedAnnouncements:0,upcomingEvents:0,urgentAlerts:0,openQueries:0,resolvedQueries:0}),[n,i]=P.useState([]),[r,s]=P.useState([]),[o,l]=P.useState([]),[c,u]=P.useState(null),[f,h]=P.useState(!0),[p,g]=P.useState(null),y=async()=>{var m;try{h(!0),g(null);const[d,x,v,S,C]=await Promise.all([ni.getAll(),Br.getAll({upcoming:"true"}),Wr.getAll(),ny.getAll({limit:6}),iy.getHealth()]);if(d.success){const T=d.announcements||[];i(T.slice(0,4));const A=T.length,N=T.filter(M=>M.status==="PUBLISHED").length,w=T.filter(M=>M.priority==="URGENT").length;e(M=>({...M,totalAnnouncements:A,publishedAnnouncements:N,urgentAlerts:w}))}if(x.success&&e(T=>({...T,upcomingEvents:(x.events||[]).length})),v.success){const T=v.queries||[],A=T.filter(w=>w.status==="OPEN").length,N=T.filter(w=>w.status==="RESOLVED").length;s(T.filter(w=>w.status==="OPEN"||w.status==="IN_PROGRESS").slice(0,4)),e(w=>({...w,openQueries:A,resolvedQueries:N}))}S.success&&l(S.logs||[]),C.success&&((m=C.services)!=null&&m.database)&&e(T=>({...T,totalStudents:Math.max(1,(C.services.database.totalUsers||4)-1)}))}catch(d){console.error(d),g(d.message||"Failed to load administrative overview.")}finally{h(!1)}};if(P.useEffect(()=>{y()},[]),f)return a.jsx(_n,{text:"Compiling admin dashboard telemetry..."});if(p)return a.jsx(In,{message:p,onRetry:y});const _=[{label:"Total Enrolled Students",value:t.totalStudents,icon:Xc,color:"#6366f1"},{label:"Published Notices",value:t.publishedAnnouncements,icon:Kr,color:"#10b981"},{label:"Upcoming Events",value:t.upcomingEvents,icon:fc,color:"#06b6d4"},{label:"Urgent Alerts Active",value:t.urgentAlerts,icon:Ln,color:"#ef4444"},{label:"Pending Student Queries",value:t.openQueries,icon:hc,color:"#f59e0b"},{label:"Resolved Queries",value:t.resolvedQueries,icon:Rn,color:"#10b981"}];return a.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"32px"},children:[a.jsxs("div",{className:"card",style:{background:"linear-gradient(135deg, rgba(139, 92, 246, 0.18) 0%, rgba(99, 102, 241, 0.12) 100%)",border:"1px solid rgba(139, 92, 246, 0.35)",padding:"32px",display:"flex",flexWrap:"wrap",alignItems:"center",justifyContent:"space-between",gap:"20px"},children:[a.jsxs("div",{children:[a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px",marginBottom:"8px"},children:[a.jsx(Gc,{size:16,color:"#c084fc"}),a.jsx("span",{style:{fontSize:"0.82rem",fontWeight:800,color:"#c084fc",textTransform:"uppercase"},children:"Administration & Governance Console"})]}),a.jsx("h1",{style:{fontSize:"2rem",fontWeight:900,margin:0,color:"var(--text-primary)"},children:"Administrative Control Center"}),a.jsx("p",{style:{fontSize:"0.9rem",color:"var(--text-secondary)",margin:"4px 0 0"},children:"Broadcast college notices, monitor events, answer student queries, and audit system activities."})]}),a.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"12px"},children:[a.jsxs(We,{to:"/admin/announcements",className:"btn-primary",style:{background:"var(--accent-gradient-purple)"},children:[a.jsx(Qr,{size:16}),a.jsx("span",{children:"Create Notice"})]}),a.jsxs(We,{to:"/admin/events",className:"btn-secondary",children:[a.jsx(fc,{size:16}),a.jsx("span",{children:"Schedule Event"})]})]})]}),a.jsx("div",{className:"grid-3",style:{gap:"20px"},children:_.map((m,d)=>{const x=m.icon;return a.jsxs("div",{className:"card",style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"24px",background:"var(--bg-secondary)",border:"1px solid var(--border-color)"},children:[a.jsxs("div",{children:[a.jsx("span",{style:{fontSize:"0.82rem",fontWeight:600,color:"var(--text-tertiary)",display:"block",marginBottom:"4px"},children:m.label}),a.jsx("h3",{style:{fontSize:"2rem",fontWeight:900,margin:0,color:"var(--text-primary)",lineHeight:1},children:m.value})]}),a.jsx("div",{style:{width:"48px",height:"48px",borderRadius:"var(--radius-md)",background:`${m.color}18`,color:m.color,display:"flex",alignItems:"center",justifyContent:"center"},children:a.jsx(x,{size:24})})]},d)})}),a.jsxs("div",{className:"grid-2",style:{gap:"28px",alignItems:"flex-start"},children:[a.jsxs("div",{className:"card",style:{background:"var(--bg-secondary)",padding:"24px"},children:[a.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"18px"},children:[a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[a.jsx(hc,{size:20,color:"#f59e0b"}),a.jsx("h3",{style:{fontSize:"1.15rem",fontWeight:800,margin:0,color:"var(--text-primary)"},children:"Pending Student Queries"})]}),a.jsxs(We,{to:"/admin/queries",style:{fontSize:"0.82rem",fontWeight:700},children:["Manage All (",t.openQueries,")"]})]}),r.length===0?a.jsxs("div",{style:{textAlign:"center",padding:"32px",color:"var(--text-secondary)"},children:[a.jsx(Rn,{size:32,color:"#10b981",style:{margin:"0 auto 8px"}}),a.jsx("p",{style:{margin:0,fontSize:"0.9rem"},children:"All student queries have been responded to!"})]}):a.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"14px"},children:r.map(m=>{var d,x,v;return a.jsxs("div",{style:{padding:"14px 16px",borderRadius:"var(--radius-md)",background:"var(--bg-tertiary)",border:"1px solid var(--border-color)"},children:[a.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"6px"},children:[a.jsxs("strong",{style:{fontSize:"0.9rem",color:"var(--text-primary)"},children:[((d=m.student)==null?void 0:d.name)||"Student"," (",((x=m.student)==null?void 0:x.rollNumber)||((v=m.student)==null?void 0:v.email),")"]}),a.jsx("span",{className:"badge badge-open",style:{fontSize:"0.65rem"},children:m.status})]}),a.jsx("p",{style:{fontSize:"0.84rem",fontWeight:600,color:"var(--text-primary)",margin:"0 0 4px"},children:m.subject}),a.jsxs("p",{style:{fontSize:"0.8rem",color:"var(--text-secondary)",margin:"0 0 10px",lineHeight:1.4},children:[m.message.slice(0,110),"..."]}),a.jsx("div",{style:{display:"flex",justifyContent:"flex-end"},children:a.jsxs("button",{onClick:()=>u(m),className:"btn-primary btn-sm",style:{fontSize:"0.76rem"},children:[a.jsx(wo,{size:13})," Reply Now"]})})]},m.id)})})]}),a.jsxs("div",{className:"card",style:{background:"var(--bg-secondary)",padding:"24px"},children:[a.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"18px"},children:[a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[a.jsx(jh,{size:20,color:"var(--accent-primary)"}),a.jsx("h3",{style:{fontSize:"1.15rem",fontWeight:800,margin:0,color:"var(--text-primary)"},children:"Recent Audit Trail Logs"})]}),a.jsx(We,{to:"/admin/activity-logs",style:{fontSize:"0.82rem",fontWeight:700},children:"View All Logs"})]}),o.length===0?a.jsx("div",{style:{textAlign:"center",padding:"32px",color:"var(--text-secondary)"},children:"No audit logs recorded yet."}):a.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:o.map(m=>a.jsxs("div",{style:{padding:"12px 14px",borderRadius:"var(--radius-md)",background:"var(--bg-tertiary)",borderLeft:"3px solid var(--accent-primary)",display:"flex",flexDirection:"column",gap:"4px"},children:[a.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:[a.jsx("span",{style:{fontSize:"0.74rem",fontWeight:800,color:"var(--accent-primary)"},children:m.action}),a.jsx("span",{style:{fontSize:"0.72rem",color:"var(--text-tertiary)"},children:new Date(m.createdAt).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})})]}),a.jsx("p",{style:{fontSize:"0.82rem",color:"var(--text-primary)",margin:0,lineHeight:1.4},children:m.details})]},m.id))})]})]}),a.jsx(ry,{isOpen:!!c,onClose:()=>u(null),query:c,onSuccess:()=>y()})]})},sp=({isOpen:t,onClose:e,onConfirm:n,title:i="Confirm Action",message:r="Are you sure you want to proceed? This action cannot be undone.",confirmText:s="Confirm",cancelText:o="Cancel",isDanger:l=!1,loading:c=!1})=>a.jsx(ns,{isOpen:t,onClose:e,title:i,maxWidth:"460px",footer:a.jsxs(a.Fragment,{children:[a.jsx("button",{onClick:e,className:"btn-secondary",disabled:c,children:o}),a.jsx("button",{onClick:n,className:l?"btn-danger":"btn-primary",disabled:c,children:c?"Processing...":s})]}),children:a.jsxs("div",{style:{display:"flex",gap:"16px",alignItems:"flex-start"},children:[a.jsx("div",{style:{padding:"10px",borderRadius:"50%",background:l?"rgba(239, 68, 68, 0.15)":"rgba(99, 102, 241, 0.15)",color:l?"#ef4444":"#6366f1",flexShrink:0},children:a.jsx(bo,{size:24})}),a.jsx("div",{children:a.jsx("p",{style:{color:"var(--text-secondary)",fontSize:"0.92rem",margin:0,lineHeight:1.5},children:r})})]})}),eC=()=>{const[t,e]=P.useState([]),[n,i]=P.useState(!0),[r,s]=P.useState(null),[o,l]=P.useState(""),[c,u]=P.useState("ALL"),[f,h]=P.useState(!1),[p,g]=P.useState(null),[y,_]=P.useState(null),[m,d]=P.useState(null),[x,v]=P.useState(!1),[S,C]=P.useState({title:"",description:"",category:"Academic",priority:"NORMAL",status:"PUBLISHED",department:"All",year:"All",deadline:"",file:null}),{addToast:T}=Dn(),A=["Academic","Examination","Placement","Workshop","Event","General"],N=["All","Computer Science & Engineering","Electronics & Communication","Mechanical Engineering","Civil Engineering","Electrical & Electronics"],w=["All","1st Year","2nd Year","3rd Year","4th Year"],M=async()=>{try{i(!0),s(null);const D=await ni.getAll({search:o,status:c!=="ALL"?c:void 0});D.success&&e(D.announcements||[])}catch(D){console.error(D),s(D.message||"Failed to load announcements.")}finally{i(!1)}};P.useEffect(()=>{M()},[c]),P.useEffect(()=>{const D=setTimeout(M,300);return()=>clearTimeout(D)},[o]);const R=()=>{g(null),C({title:"",description:"",category:"Academic",priority:"NORMAL",status:"PUBLISHED",department:"All",year:"All",deadline:"",file:null}),h(!0)},G=D=>{g(D),C({title:D.title||"",description:D.description||"",category:D.category||"Academic",priority:D.priority||"NORMAL",status:D.status||"PUBLISHED",department:D.department||"All",year:D.year||"All",deadline:D.deadline?new Date(D.deadline).toISOString().split("T")[0]:"",file:null}),h(!0)},O=async D=>{if(D.preventDefault(),!S.title.trim()||!S.description.trim()){T("Title and description are required.","warning");return}try{v(!0);const V=new FormData;V.append("title",S.title),V.append("description",S.description),V.append("category",S.category),V.append("priority",S.priority),V.append("status",S.status),V.append("department",S.department),V.append("year",S.year),S.deadline&&V.append("deadline",S.deadline),S.file&&V.append("attachment",S.file),p?(await ni.update(p.id,V),T("Announcement updated successfully!","success")):(await ni.create(V),T("Announcement broadcast created successfully!","success")),h(!1),M()}catch(V){T(V.message||"Operation failed","error")}finally{v(!1)}},q=async()=>{if(y)try{v(!0),await ni.delete(y),T("Announcement deleted successfully.","info"),_(null),M()}catch(D){T(D.message||"Failed to delete announcement","error")}finally{v(!1)}},$=async(D,V)=>{try{const U=new FormData;U.append("status",V),await ni.update(D.id,U),T(`Announcement status changed to ${V}.`,"success"),M()}catch{T("Failed to update status","error")}};return a.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px"},children:[a.jsxs("div",{style:{display:"flex",flexWrap:"wrap",alignItems:"center",justifyContent:"space-between",gap:"16px"},children:[a.jsxs("div",{children:[a.jsx("h1",{style:{fontSize:"1.8rem",fontWeight:900,margin:0,color:"var(--text-primary)"},children:"Announcement Management"}),a.jsx("p",{style:{fontSize:"0.9rem",color:"var(--text-secondary)",margin:"4px 0 0"},children:"Publish, edit, broadcast and archive verified college notices and urgent alerts"})]}),a.jsxs("button",{onClick:R,className:"btn-primary",style:{background:"var(--accent-gradient-purple)"},children:[a.jsx(Qr,{size:18}),a.jsx("span",{children:"New Announcement"})]})]}),a.jsxs("div",{style:{display:"flex",flexWrap:"wrap",alignItems:"center",justifyContent:"space-between",gap:"14px"},children:[a.jsx("div",{style:{display:"flex",gap:"8px"},children:["ALL","PUBLISHED","DRAFT","ARCHIVED"].map(D=>a.jsx("button",{onClick:()=>u(D),className:`btn-sm ${c===D?"btn-primary":"btn-secondary"}`,style:{fontSize:"0.8rem",padding:"6px 14px"},children:D},D))}),a.jsx("div",{style:{minWidth:"280px"},children:a.jsx(va,{value:o,onChange:l,placeholder:"Search title or category..."})})]}),n?a.jsx(_n,{text:"Fetching announcements database..."}):r?a.jsx(In,{message:r,onRetry:M}):t.length===0?a.jsx(mi,{icon:Kr,title:"No announcements found",description:"Create your first notice or adjust status filters above.",action:a.jsxs("button",{onClick:R,className:"btn-primary btn-sm",children:[a.jsx(Qr,{size:14})," Create Notice"]})}):a.jsx("div",{className:"table-container",children:a.jsxs("table",{className:"modern-table",children:[a.jsx("thead",{children:a.jsxs("tr",{children:[a.jsx("th",{children:"Title & Category"}),a.jsx("th",{children:"Priority"}),a.jsx("th",{children:"Audience"}),a.jsx("th",{children:"Status"}),a.jsx("th",{children:"Published Date"}),a.jsx("th",{style:{textAlign:"right"},children:"Actions"})]})}),a.jsx("tbody",{children:t.map(D=>a.jsxs("tr",{children:[a.jsx("td",{children:a.jsxs("div",{style:{maxWidth:"340px"},children:[a.jsx("strong",{style:{fontSize:"0.92rem",color:"var(--text-primary)",display:"block"},children:D.title}),a.jsx("span",{className:"category-pill",style:{marginTop:"4px",fontSize:"0.72rem"},children:D.category})]})}),a.jsx("td",{children:D.priority==="URGENT"?a.jsxs("span",{className:"badge badge-urgent",children:[a.jsx(Ln,{size:11})," Urgent"]}):D.priority==="IMPORTANT"?a.jsxs("span",{className:"badge badge-important",children:[a.jsx(bo,{size:11})," Important"]}):a.jsx("span",{className:"badge badge-normal",children:"Normal"})}),a.jsx("td",{children:a.jsxs("span",{style:{fontSize:"0.82rem",color:"var(--text-secondary)"},children:[D.department," • ",D.year]})}),a.jsx("td",{children:a.jsx("span",{className:`badge ${D.status==="PUBLISHED"?"badge-resolved":D.status==="DRAFT"?"badge-progress":"badge-normal"}`,children:D.status})}),a.jsx("td",{children:a.jsx("span",{style:{fontSize:"0.82rem",color:"var(--text-tertiary)"},children:new Date(D.createdAt).toLocaleDateString([],{month:"short",day:"numeric",year:"numeric"})})}),a.jsx("td",{style:{textAlign:"right"},children:a.jsxs("div",{style:{display:"inline-flex",alignItems:"center",gap:"6px"},children:[a.jsx("button",{onClick:()=>d(D),className:"btn-icon btn-secondary btn-icon-sm",title:"View Notice Details",children:a.jsx(ci,{size:14})}),a.jsx("button",{onClick:()=>G(D),className:"btn-icon btn-secondary btn-icon-sm",title:"Edit Notice",children:a.jsx(d0,{size:14})}),D.status==="DRAFT"&&a.jsx("button",{onClick:()=>$(D,"PUBLISHED"),className:"btn-icon btn-secondary btn-icon-sm",title:"Publish Now",style:{color:"#10b981"},children:a.jsx(wo,{size:14})}),D.status==="PUBLISHED"&&a.jsx("button",{onClick:()=>$(D,"ARCHIVED"),className:"btn-icon btn-secondary btn-icon-sm",title:"Archive Notice",style:{color:"#f59e0b"},children:a.jsx(XS,{size:14})}),a.jsx("button",{onClick:()=>_(D.id),className:"btn-icon btn-secondary btn-icon-sm",title:"Delete Notice",style:{color:"#ef4444"},children:a.jsx(Wh,{size:14})})]})})]},D.id))})]})}),a.jsx(ns,{isOpen:f,onClose:()=>h(!1),title:p?"Edit College Announcement":"Create New College Announcement",maxWidth:"680px",footer:a.jsxs(a.Fragment,{children:[a.jsx("button",{onClick:()=>h(!1),className:"btn-secondary",disabled:x,children:"Cancel"}),a.jsx("button",{onClick:O,className:"btn-primary",disabled:x,style:{background:"var(--accent-gradient-purple)"},children:x?"Saving...":p?"Update Notice":"Publish Announcement"})]}),children:a.jsxs("form",{onSubmit:O,style:{display:"flex",flexDirection:"column",gap:"16px"},children:[a.jsxs("div",{className:"form-group",style:{marginBottom:0},children:[a.jsx("label",{className:"form-label",children:"Announcement Title"}),a.jsx("input",{type:"text",value:S.title,onChange:D=>C({...S,title:D.target.value}),placeholder:"e.g. Autumn 2026 Examination Schedule & Hall Allocation",className:"form-input",required:!0})]}),a.jsxs("div",{className:"grid-2",style:{gap:"14px"},children:[a.jsxs("div",{className:"form-group",style:{marginBottom:0},children:[a.jsx("label",{className:"form-label",children:"Category"}),a.jsx("select",{value:S.category,onChange:D=>C({...S,category:D.target.value}),className:"form-select",children:A.map(D=>a.jsx("option",{value:D,children:D},D))})]}),a.jsxs("div",{className:"form-group",style:{marginBottom:0},children:[a.jsx("label",{className:"form-label",children:"Priority Level"}),a.jsxs("select",{value:S.priority,onChange:D=>C({...S,priority:D.target.value}),className:"form-select",children:[a.jsx("option",{value:"NORMAL",children:"Normal"}),a.jsx("option",{value:"IMPORTANT",children:"Important"}),a.jsx("option",{value:"URGENT",children:"Urgent (Broadcasts Emergency Alert)"})]})]})]}),a.jsxs("div",{className:"grid-2",style:{gap:"14px"},children:[a.jsxs("div",{className:"form-group",style:{marginBottom:0},children:[a.jsx("label",{className:"form-label",children:"Target Department"}),a.jsx("select",{value:S.department,onChange:D=>C({...S,department:D.target.value}),className:"form-select",children:N.map(D=>a.jsx("option",{value:D,children:D},D))})]}),a.jsxs("div",{className:"form-group",style:{marginBottom:0},children:[a.jsx("label",{className:"form-label",children:"Target Academic Year"}),a.jsx("select",{value:S.year,onChange:D=>C({...S,year:D.target.value}),className:"form-select",children:w.map(D=>a.jsx("option",{value:D,children:D},D))})]})]}),a.jsxs("div",{className:"grid-2",style:{gap:"14px"},children:[a.jsxs("div",{className:"form-group",style:{marginBottom:0},children:[a.jsx("label",{className:"form-label",children:"Publication Status"}),a.jsxs("select",{value:S.status,onChange:D=>C({...S,status:D.target.value}),className:"form-select",children:[a.jsx("option",{value:"PUBLISHED",children:"Published (Visible to students immediately)"}),a.jsx("option",{value:"DRAFT",children:"Draft (Saved privately)"}),a.jsx("option",{value:"ARCHIVED",children:"Archived"})]})]}),a.jsxs("div",{className:"form-group",style:{marginBottom:0},children:[a.jsx("label",{className:"form-label",children:"Action Deadline (Optional)"}),a.jsx("input",{type:"date",value:S.deadline,onChange:D=>C({...S,deadline:D.target.value}),className:"form-input"})]})]}),a.jsxs("div",{className:"form-group",style:{marginBottom:0},children:[a.jsx("label",{className:"form-label",children:"Description & Notice Body"}),a.jsx("textarea",{value:S.description,onChange:D=>C({...S,description:D.target.value}),rows:5,placeholder:"Full announcement text, instructions, and requirements...",className:"form-textarea",required:!0})]}),a.jsxs("div",{className:"form-group",style:{marginBottom:0},children:[a.jsx("label",{className:"form-label",children:"Attach PDF / Document (Max 15MB)"}),a.jsx("input",{type:"file",onChange:D=>C({...S,file:D.target.files[0]||null}),className:"form-input",accept:".pdf,.doc,.docx,.ppt,.pptx,.jpg,.png,.zip"})]})]})}),a.jsx(sp,{isOpen:!!y,onClose:()=>_(null),onConfirm:q,title:"Delete Announcement",message:"Are you sure you want to permanently delete this announcement? This action is irreversible and will be logged in the audit trail.",isDanger:!0,loading:x}),a.jsx(ip,{isOpen:!!m,onClose:()=>d(null),announcement:m})]})},tC=()=>{const[t,e]=P.useState([]),[n,i]=P.useState(!0),[r,s]=P.useState(null),[o,l]=P.useState(""),[c,u]=P.useState(!1),[f,h]=P.useState(null),[p,g]=P.useState(null),[y,_]=P.useState(null),[m,d]=P.useState(!1),[x,v]=P.useState({title:"",description:"",date:"",startTime:"09:00 AM",endTime:"05:00 PM",venue:"",organizer:"",registrationEnabled:!1,registrationDeadline:"",file:null}),{addToast:S}=Dn(),C=async()=>{try{i(!0),s(null);const M=await Br.getAll({search:o});M.success&&e(M.events||[])}catch(M){console.error(M),s(M.message||"Failed to load events.")}finally{i(!1)}};P.useEffect(()=>{const M=setTimeout(C,300);return()=>clearTimeout(M)},[o]);const T=()=>{h(null),v({title:"",description:"",date:new Date().toISOString().split("T")[0],startTime:"09:00 AM",endTime:"05:00 PM",venue:"",organizer:"Department of Student Affairs",registrationEnabled:!1,registrationDeadline:"",file:null}),u(!0)},A=M=>{h(M),v({title:M.title||"",description:M.description||"",date:M.date?new Date(M.date).toISOString().split("T")[0]:"",startTime:M.startTime||"09:00 AM",endTime:M.endTime||"05:00 PM",venue:M.venue||"",organizer:M.organizer||"",registrationEnabled:!!M.registrationEnabled,registrationDeadline:M.registrationDeadline?new Date(M.registrationDeadline).toISOString().split("T")[0]:"",file:null}),u(!0)},N=async M=>{if(M.preventDefault(),!x.title||!x.description||!x.date||!x.venue||!x.organizer){S("Please fill all mandatory event fields.","warning");return}try{d(!0);const R=new FormData;R.append("title",x.title),R.append("description",x.description),R.append("date",x.date),R.append("startTime",x.startTime),R.append("endTime",x.endTime),R.append("venue",x.venue),R.append("organizer",x.organizer),R.append("registrationEnabled",x.registrationEnabled),x.registrationDeadline&&R.append("registrationDeadline",x.registrationDeadline),x.file&&R.append("attachment",x.file),f?(await Br.update(f.id,R),S("Event updated successfully!","success")):(await Br.create(R),S("New event scheduled and published to student calendar!","success")),u(!1),C()}catch(R){S(R.message||"Operation failed","error")}finally{d(!1)}},w=async()=>{if(p)try{d(!0),await Br.delete(p),S("Event deleted successfully.","info"),g(null),C()}catch(M){S(M.message||"Failed to delete event","error")}finally{d(!1)}};return a.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px"},children:[a.jsxs("div",{style:{display:"flex",flexWrap:"wrap",alignItems:"center",justifyContent:"space-between",gap:"16px"},children:[a.jsxs("div",{children:[a.jsx("h1",{style:{fontSize:"1.8rem",fontWeight:900,margin:0,color:"var(--text-primary)"},children:"Events Management & Scheduling"}),a.jsx("p",{style:{fontSize:"0.9rem",color:"var(--text-secondary)",margin:"4px 0 0"},children:"Schedule hackathons, technical symposiums, sports meets and guest lectures"})]}),a.jsxs("button",{onClick:T,className:"btn-primary",style:{background:"var(--accent-gradient-purple)"},children:[a.jsx(Qr,{size:18}),a.jsx("span",{children:"Schedule New Event"})]})]}),a.jsx("div",{style:{maxWidth:"420px"},children:a.jsx(va,{value:o,onChange:l,placeholder:"Search events by title, venue or organizer..."})}),n?a.jsx(_n,{text:"Loading events roster..."}):r?a.jsx(In,{message:r,onRetry:C}):t.length===0?a.jsx(mi,{icon:fc,title:"No events scheduled",description:"Click 'Schedule New Event' to post the first campus event.",action:a.jsxs("button",{onClick:T,className:"btn-primary btn-sm",children:[a.jsx(Qr,{size:14})," Schedule Event"]})}):a.jsx("div",{className:"table-container",children:a.jsxs("table",{className:"modern-table",children:[a.jsx("thead",{children:a.jsxs("tr",{children:[a.jsx("th",{children:"Event Name"}),a.jsx("th",{children:"Date & Time"}),a.jsx("th",{children:"Venue"}),a.jsx("th",{children:"Organizer"}),a.jsx("th",{children:"Registration"}),a.jsx("th",{style:{textAlign:"right"},children:"Actions"})]})}),a.jsx("tbody",{children:t.map(M=>a.jsxs("tr",{children:[a.jsx("td",{children:a.jsxs("div",{style:{maxWidth:"300px"},children:[a.jsx("strong",{style:{fontSize:"0.92rem",color:"var(--text-primary)",display:"block"},children:M.title}),a.jsxs("span",{style:{fontSize:"0.78rem",color:"var(--text-secondary)"},children:[M.description.slice(0,70),"..."]})]})}),a.jsx("td",{children:a.jsxs("div",{style:{fontSize:"0.84rem"},children:[a.jsx("strong",{style:{display:"block",color:"var(--text-primary)"},children:new Date(M.date).toLocaleDateString([],{month:"short",day:"numeric",year:"numeric"})}),a.jsxs("span",{style:{color:"var(--text-tertiary)",fontSize:"0.76rem"},children:[M.startTime," - ",M.endTime]})]})}),a.jsx("td",{children:a.jsx("span",{style:{fontSize:"0.84rem",color:"var(--text-secondary)"},children:M.venue})}),a.jsx("td",{children:a.jsx("span",{style:{fontSize:"0.84rem",color:"var(--text-secondary)"},children:M.organizer})}),a.jsx("td",{children:M.registrationEnabled?a.jsxs("span",{className:"badge badge-open",style:{fontSize:"0.68rem"},children:[a.jsx(Bh,{size:10})," Open"]}):a.jsx("span",{className:"badge badge-normal",style:{fontSize:"0.68rem"},children:"Closed / Walk-in"})}),a.jsx("td",{style:{textAlign:"right"},children:a.jsxs("div",{style:{display:"inline-flex",alignItems:"center",gap:"6px"},children:[a.jsx("button",{onClick:()=>_(M),className:"btn-icon btn-secondary btn-icon-sm",title:"View Details",children:a.jsx(ci,{size:14})}),a.jsx("button",{onClick:()=>A(M),className:"btn-icon btn-secondary btn-icon-sm",title:"Edit Event",children:a.jsx(d0,{size:14})}),a.jsx("button",{onClick:()=>g(M.id),className:"btn-icon btn-secondary btn-icon-sm",title:"Delete Event",style:{color:"#ef4444"},children:a.jsx(Wh,{size:14})})]})})]},M.id))})]})}),a.jsx(ns,{isOpen:c,onClose:()=>u(!1),title:f?"Edit College Event":"Schedule New College Event",maxWidth:"680px",footer:a.jsxs(a.Fragment,{children:[a.jsx("button",{onClick:()=>u(!1),className:"btn-secondary",disabled:m,children:"Cancel"}),a.jsx("button",{onClick:N,className:"btn-primary",disabled:m,style:{background:"var(--accent-gradient-purple)"},children:m?"Saving...":f?"Update Event":"Publish to Calendar"})]}),children:a.jsxs("form",{onSubmit:N,style:{display:"flex",flexDirection:"column",gap:"16px"},children:[a.jsxs("div",{className:"form-group",style:{marginBottom:0},children:[a.jsx("label",{className:"form-label",children:"Event Name / Title"}),a.jsx("input",{type:"text",value:x.title,onChange:M=>v({...x,title:M.target.value}),placeholder:"e.g. National Hackathon HackVortex 2026",className:"form-input",required:!0})]}),a.jsxs("div",{className:"grid-3",style:{gap:"12px"},children:[a.jsxs("div",{className:"form-group",style:{marginBottom:0},children:[a.jsx("label",{className:"form-label",children:"Event Date"}),a.jsx("input",{type:"date",value:x.date,onChange:M=>v({...x,date:M.target.value}),className:"form-input",required:!0})]}),a.jsxs("div",{className:"form-group",style:{marginBottom:0},children:[a.jsx("label",{className:"form-label",children:"Start Time"}),a.jsx("input",{type:"text",value:x.startTime,onChange:M=>v({...x,startTime:M.target.value}),placeholder:"09:00 AM",className:"form-input",required:!0})]}),a.jsxs("div",{className:"form-group",style:{marginBottom:0},children:[a.jsx("label",{className:"form-label",children:"End Time"}),a.jsx("input",{type:"text",value:x.endTime,onChange:M=>v({...x,endTime:M.target.value}),placeholder:"05:00 PM",className:"form-input",required:!0})]})]}),a.jsxs("div",{className:"grid-2",style:{gap:"14px"},children:[a.jsxs("div",{className:"form-group",style:{marginBottom:0},children:[a.jsx("label",{className:"form-label",children:"Venue / Hall Location"}),a.jsx("input",{type:"text",value:x.venue,onChange:M=>v({...x,venue:M.target.value}),placeholder:"Main Auditorium / Seminar Hall 2",className:"form-input",required:!0})]}),a.jsxs("div",{className:"form-group",style:{marginBottom:0},children:[a.jsx("label",{className:"form-label",children:"Organizing Society / Dept"}),a.jsx("input",{type:"text",value:x.organizer,onChange:M=>v({...x,organizer:M.target.value}),placeholder:"CSE Society & ACM Chapter",className:"form-input",required:!0})]})]}),a.jsxs("div",{className:"grid-2",style:{gap:"14px",alignItems:"center"},children:[a.jsxs("div",{className:"form-group",style:{marginBottom:0},children:[a.jsx("label",{className:"form-label",children:"Enable Student Online Registration?"}),a.jsxs("select",{value:x.registrationEnabled?"true":"false",onChange:M=>v({...x,registrationEnabled:M.target.value==="true"}),className:"form-select",children:[a.jsx("option",{value:"false",children:"No (Open / Walk-in Entry)"}),a.jsx("option",{value:"true",children:"Yes (Online Registration Required)"})]})]}),x.registrationEnabled&&a.jsxs("div",{className:"form-group",style:{marginBottom:0},children:[a.jsx("label",{className:"form-label",children:"Registration Deadline"}),a.jsx("input",{type:"date",value:x.registrationDeadline,onChange:M=>v({...x,registrationDeadline:M.target.value}),className:"form-input"})]})]}),a.jsxs("div",{className:"form-group",style:{marginBottom:0},children:[a.jsx("label",{className:"form-label",children:"Event Description & Agenda"}),a.jsx("textarea",{value:x.description,onChange:M=>v({...x,description:M.target.value}),rows:4,placeholder:"Provide event details, speaker profiles, eligibility, and rules...",className:"form-textarea",required:!0})]}),a.jsxs("div",{className:"form-group",style:{marginBottom:0},children:[a.jsx("label",{className:"form-label",children:"Event Poster / Brochure Attachment (Optional)"}),a.jsx("input",{type:"file",onChange:M=>v({...x,file:M.target.files[0]||null}),className:"form-input",accept:".pdf,.png,.jpg,.jpeg,.zip"})]})]})}),a.jsx(sp,{isOpen:!!p,onClose:()=>g(null),onConfirm:w,title:"Delete Campus Event",message:"Are you sure you want to cancel and delete this event? It will be removed from the college calendar.",isDanger:!0,loading:m}),a.jsx(rp,{isOpen:!!y,onClose:()=>_(null),event:y})]})},nC=()=>{const[t,e]=P.useState([]),[n,i]=P.useState(!0),[r,s]=P.useState(null),[o,l]=P.useState(""),[c,u]=P.useState("All"),[f,h]=P.useState(null),[p,g]=P.useState(null),[y,_]=P.useState(!1),{addToast:m}=Dn(),d=async()=>{try{i(!0),s(null);const S=await Wr.getAll({search:o,status:c!=="All"?c:void 0});S.success&&e(S.queries||[])}catch(S){console.error(S),s(S.message||"Failed to load queries.")}finally{i(!1)}};P.useEffect(()=>{d()},[c]),P.useEffect(()=>{const S=setTimeout(d,300);return()=>clearTimeout(S)},[o]);const x=async S=>{try{await Wr.updateStatus(S,{status:"RESOLVED"}),m("Query marked as Resolved!","success"),d()}catch{m("Failed to update status","error")}},v=async()=>{if(p)try{_(!0),await Wr.delete(p),m("Query deleted.","info"),g(null),d()}catch{m("Failed to delete query","error")}finally{_(!1)}};return a.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px"},children:[a.jsxs("div",{style:{display:"flex",flexWrap:"wrap",alignItems:"center",justifyContent:"space-between",gap:"16px"},children:[a.jsxs("div",{children:[a.jsx("h1",{style:{fontSize:"1.8rem",fontWeight:900,margin:0,color:"var(--text-primary)"},children:"Student Queries & Helpdesk Management"}),a.jsx("p",{style:{fontSize:"0.9rem",color:"var(--text-secondary)",margin:"4px 0 0"},children:"Review, reply, resolve and manage student academic and administrative inquiries"})]}),a.jsxs("button",{onClick:d,className:"btn-secondary btn-sm",style:{display:"flex",gap:"6px"},children:[a.jsx(ha,{size:14}),a.jsx("span",{children:"Refresh"})]})]}),a.jsxs("div",{style:{display:"flex",flexWrap:"wrap",alignItems:"center",justifyContent:"space-between",gap:"14px"},children:[a.jsx("div",{style:{display:"flex",gap:"8px"},children:["All","OPEN","IN_PROGRESS","RESOLVED"].map(S=>a.jsx("button",{onClick:()=>u(S),className:`btn-sm ${c===S?"btn-primary":"btn-secondary"}`,style:{fontSize:"0.8rem",padding:"6px 14px"},children:S==="All"?"All Queries":S==="OPEN"?"Open":S==="IN_PROGRESS"?"In Progress":"Resolved"},S))}),a.jsx("div",{style:{minWidth:"280px"},children:a.jsx(va,{value:o,onChange:l,placeholder:"Search by student name, email, or subject..."})})]}),n?a.jsx(_n,{text:"Retrieving student inquiries..."}):r?a.jsx(In,{message:r,onRetry:d}):t.length===0?a.jsx(mi,{icon:hc,title:"No student queries found",description:"There are currently no queries matching your search criteria."}):a.jsx("div",{className:"table-container",children:a.jsxs("table",{className:"modern-table",children:[a.jsx("thead",{children:a.jsxs("tr",{children:[a.jsx("th",{children:"Student"}),a.jsx("th",{children:"Subject & Question"}),a.jsx("th",{children:"Status"}),a.jsx("th",{children:"Submitted Date"}),a.jsx("th",{children:"Admin Response"}),a.jsx("th",{style:{textAlign:"right"},children:"Actions"})]})}),a.jsx("tbody",{children:t.map(S=>{var C,T,A;return a.jsxs("tr",{children:[a.jsx("td",{children:a.jsxs("div",{children:[a.jsx("strong",{style:{fontSize:"0.9rem",color:"var(--text-primary)",display:"block"},children:((C=S.student)==null?void 0:C.name)||"Student"}),a.jsx("span",{style:{fontSize:"0.76rem",color:"var(--text-tertiary)"},children:((T=S.student)==null?void 0:T.rollNumber)||((A=S.student)==null?void 0:A.email)})]})}),a.jsx("td",{children:a.jsxs("div",{style:{maxWidth:"300px"},children:[a.jsx("strong",{style:{fontSize:"0.9rem",color:"var(--text-primary)",display:"block"},children:S.subject}),a.jsxs("span",{style:{fontSize:"0.8rem",color:"var(--text-secondary)"},children:[S.message.slice(0,80),"..."]})]})}),a.jsx("td",{children:a.jsx("span",{className:`badge ${S.status==="RESOLVED"?"badge-resolved":S.status==="IN_PROGRESS"?"badge-progress":"badge-open"}`,children:S.status})}),a.jsx("td",{children:a.jsx("span",{style:{fontSize:"0.8rem",color:"var(--text-tertiary)"},children:new Date(S.createdAt).toLocaleDateString([],{month:"short",day:"numeric"})})}),a.jsx("td",{children:a.jsx("div",{style:{maxWidth:"220px",fontSize:"0.8rem"},children:S.response?a.jsxs("span",{style:{color:"#10b981",fontWeight:600},children:["✓ Replied (",new Date(S.respondedAt).toLocaleDateString([],{month:"short",day:"numeric"}),")"]}):a.jsx("span",{style:{color:"#f59e0b",fontWeight:600},children:"Pending Answer"})})}),a.jsx("td",{style:{textAlign:"right"},children:a.jsxs("div",{style:{display:"inline-flex",alignItems:"center",gap:"6px"},children:[a.jsxs("button",{onClick:()=>h(S),className:"btn-primary btn-sm",style:{fontSize:"0.76rem"},children:[a.jsx(wo,{size:13}),a.jsx("span",{children:S.response?"Edit Reply":"Reply"})]}),S.status!=="RESOLVED"&&a.jsx("button",{onClick:()=>x(S.id),className:"btn-icon btn-secondary btn-icon-sm",title:"Mark Resolved",style:{color:"#10b981"},children:a.jsx(Rn,{size:14})}),a.jsx("button",{onClick:()=>g(S.id),className:"btn-icon btn-secondary btn-icon-sm",title:"Delete Query",style:{color:"#ef4444"},children:a.jsx(Wh,{size:14})})]})})]},S.id)})})]})}),a.jsx(ry,{isOpen:!!f,onClose:()=>h(null),query:f,onSuccess:()=>d()}),a.jsx(sp,{isOpen:!!p,onClose:()=>g(null),onConfirm:v,title:"Delete Student Query",message:"Are you sure you want to delete this student query? The ticket will be permanently removed.",isDanger:!0,loading:y})]})},iC=()=>{const[t,e]=P.useState([]),[n,i]=P.useState(!0),[r,s]=P.useState(null),{addToast:o}=Dn(),l=async()=>{try{i(!0),s(null);const f=await hr.getMyNotifications({limit:50});f.success&&e(f.notifications||[])}catch(f){console.error(f),s(f.message||"Failed to load notifications.")}finally{i(!1)}};P.useEffect(()=>{l()},[]);const c=async()=>{try{await hr.markAllAsRead(),e(f=>f.map(h=>({...h,read:!0}))),o("All notifications marked as read","info")}catch{o("Failed to mark all as read","error")}},u=f=>{switch(f){case"URGENT_ALERT":return a.jsx(Ln,{size:18,color:"#ef4444"});case"EVENT":return a.jsx(sn,{size:18,color:"#06b6d4"});case"QUERY_REPLY":return a.jsx(ui,{size:18,color:"#10b981"});default:return a.jsx(si,{size:18,color:"#6366f1"})}};return a.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px"},children:[a.jsxs("div",{style:{display:"flex",flexWrap:"wrap",alignItems:"center",justifyContent:"space-between",gap:"16px"},children:[a.jsxs("div",{children:[a.jsx("h1",{style:{fontSize:"1.8rem",fontWeight:900,margin:0,color:"var(--text-primary)"},children:"System Notifications & Alerts Log"}),a.jsx("p",{style:{fontSize:"0.9rem",color:"var(--text-secondary)",margin:"4px 0 0"},children:"Monitor automated system broadcast triggers and student reply alerts"})]}),a.jsxs("button",{onClick:c,className:"btn-secondary btn-sm",style:{display:"flex",gap:"6px"},children:[a.jsx(Fh,{size:16}),a.jsx("span",{children:"Mark All Read"})]})]}),n?a.jsx(_n,{text:"Fetching notification logs..."}):r?a.jsx(In,{message:r,onRetry:l}):t.length===0?a.jsx(mi,{icon:si,title:"No notifications",description:"System notifications and student alerts will appear here."}):a.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:t.map(f=>a.jsxs("div",{className:"card",style:{display:"flex",alignItems:"flex-start",gap:"16px",padding:"16px 20px",background:f.read?"var(--bg-card)":"var(--bg-elevated)",border:f.read?"1px solid var(--border-color)":"1px solid var(--border-highlight)"},children:[a.jsx("div",{style:{width:"40px",height:"40px",borderRadius:"var(--radius-md)",background:"var(--bg-tertiary)",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0},children:u(f.type)}),a.jsxs("div",{style:{flex:1,minWidth:0},children:[a.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",gap:"8px"},children:[a.jsx("h4",{style:{fontSize:"0.96rem",fontWeight:700,color:"var(--text-primary)",margin:0},children:f.title}),a.jsx("span",{style:{fontSize:"0.74rem",color:"var(--text-tertiary)"},children:new Date(f.createdAt).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})})]}),a.jsx("p",{style:{fontSize:"0.86rem",color:"var(--text-secondary)",margin:"4px 0 0"},children:f.message})]})]},f.id))})]})},rC=()=>{const[t,e]=P.useState([]),[n,i]=P.useState(!0),[r,s]=P.useState(null),[o,l]=P.useState(""),[c,u]=P.useState("All"),f=async()=>{try{i(!0),s(null);const y=await ny.getAll({entityType:c!=="All"?c:void 0,limit:100});y.success&&e(y.logs||[])}catch(y){console.error(y),s(y.message||"Failed to load activity logs.")}finally{i(!1)}};P.useEffect(()=>{f()},[c]);const h=t.filter(y=>{var m;if(!o)return!0;const _=o.toLowerCase();return y.action.toLowerCase().includes(_)||y.details&&y.details.toLowerCase().includes(_)||((m=y.admin)==null?void 0:m.name)&&y.admin.name.toLowerCase().includes(_)}),p=["All","Announcement","Event","Query","Auth","Settings"],g=y=>y.includes("DELETED")?"badge-urgent":y.includes("CREATED")||y.includes("PUBLISHED")||y.includes("RESOLVED")?"badge-resolved":y.includes("LOGIN")?"badge-normal":"badge-progress";return a.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px"},children:[a.jsxs("div",{style:{display:"flex",flexWrap:"wrap",alignItems:"center",justifyContent:"space-between",gap:"16px"},children:[a.jsxs("div",{children:[a.jsx("h1",{style:{fontSize:"1.8rem",fontWeight:900,margin:0,color:"var(--text-primary)"},children:"Administrative Activity Audit Logs"}),a.jsx("p",{style:{fontSize:"0.9rem",color:"var(--text-secondary)",margin:"4px 0 0"},children:"Comprehensive immutable audit trail of administrative modifications, broadcasts, and ticket resolutions"})]}),a.jsxs("button",{onClick:f,className:"btn-secondary btn-sm",style:{display:"flex",gap:"6px"},children:[a.jsx(ha,{size:14}),a.jsx("span",{children:"Refresh Logs"})]})]}),a.jsxs("div",{style:{display:"flex",flexWrap:"wrap",alignItems:"center",justifyContent:"space-between",gap:"14px"},children:[a.jsx("div",{style:{display:"flex",gap:"8px",overflowX:"auto"},children:p.map(y=>a.jsx("button",{onClick:()=>u(y),className:`btn-sm ${c===y?"btn-primary":"btn-secondary"}`,style:{fontSize:"0.8rem",padding:"6px 14px"},children:y},y))}),a.jsx("div",{style:{minWidth:"280px"},children:a.jsx(va,{value:o,onChange:l,placeholder:"Search action, details, or admin name..."})})]}),n?a.jsx(_n,{text:"Retrieving audit trail..."}):r?a.jsx(In,{message:r,onRetry:f}):h.length===0?a.jsx(mi,{icon:jh,title:"No activity logs match filter",description:"Administrative actions (creating notices, responding to queries, logins) will be recorded here automatically."}):a.jsx("div",{className:"table-container",children:a.jsxs("table",{className:"modern-table",children:[a.jsx("thead",{children:a.jsxs("tr",{children:[a.jsx("th",{children:"Action & Entity"}),a.jsx("th",{children:"Administrator"}),a.jsx("th",{children:"Details / Change Summary"}),a.jsx("th",{children:"Timestamp"})]})}),a.jsx("tbody",{children:h.map(y=>{var _,m;return a.jsxs("tr",{children:[a.jsx("td",{children:a.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"4px"},children:[a.jsx("span",{className:`badge ${g(y.action)}`,style:{fontSize:"0.7rem"},children:y.action}),a.jsxs("span",{style:{fontSize:"0.74rem",color:"var(--text-tertiary)"},children:["Target: ",a.jsx("strong",{children:y.entityType})]})]})}),a.jsx("td",{children:a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[a.jsx("div",{style:{width:"28px",height:"28px",borderRadius:"50%",background:"var(--accent-gradient-purple)",color:"#ffffff",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"0.75rem",fontWeight:700},children:(_=y.admin)!=null&&_.name?y.admin.name.charAt(0):"A"}),a.jsx("span",{style:{fontSize:"0.88rem",fontWeight:600,color:"var(--text-primary)"},children:((m=y.admin)==null?void 0:m.name)||"Administrator"})]})}),a.jsx("td",{children:a.jsx("p",{style:{fontSize:"0.86rem",color:"var(--text-secondary)",margin:0,lineHeight:1.4,maxWidth:"460px"},children:y.details||"No additional parameters."})}),a.jsx("td",{children:a.jsxs("div",{style:{fontSize:"0.8rem",color:"var(--text-tertiary)",whiteSpace:"nowrap"},children:[a.jsx("strong",{style:{display:"block",color:"var(--text-primary)"},children:new Date(y.createdAt).toLocaleDateString([],{month:"short",day:"numeric",year:"numeric"})}),a.jsx("span",{children:new Date(y.createdAt).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit",second:"2-digit"})})]})})]},y.id)})})]})})]})},sC=()=>{var A,N,w,M,R,G,O,q,$,D,V,U,Y,Z,oe,Se,Be;const{user:t,changePassword:e}=pi(),{theme:n,toggleTheme:i}=v0(),{addToast:r}=Dn(),[s,o]=P.useState(""),[l,c]=P.useState(""),[u,f]=P.useState(""),[h,p]=P.useState(!1),[g,y]=P.useState(!1),[_,m]=P.useState(!1),[d,x]=P.useState(null),[v,S]=P.useState(!0),C=async()=>{try{S(!0);const X=await iy.getHealth();X.success&&x(X)}catch(X){console.error("Failed to get system health:",X)}finally{S(!1)}};P.useEffect(()=>{C();const X=setInterval(C,15e3);return()=>clearInterval(X)},[]);const T=async X=>{if(X.preventDefault(),l.length<6){r("New password must be at least 6 characters.","warning");return}if(l!==u){r("New passwords do not match.","error");return}m(!0);const ie=await e({currentPassword:s,newPassword:l,confirmNewPassword:u});m(!1),ie.success&&(o(""),c(""),f(""))};return a.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"28px",maxWidth:"1080px"},children:[a.jsxs("div",{children:[a.jsx("h1",{style:{fontSize:"1.8rem",fontWeight:900,margin:0,color:"var(--text-primary)"},children:"Administrator Settings & System Status"}),a.jsx("p",{style:{fontSize:"0.9rem",color:"var(--text-secondary)",margin:"4px 0 0"},children:"Manage administrator credentials, application preferences, and live telemetry"})]}),a.jsxs("div",{className:"grid-2",style:{gap:"24px",alignItems:"flex-start"},children:[a.jsxs("div",{className:"card",style:{background:"var(--bg-secondary)",padding:"28px"},children:[a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"16px",marginBottom:"24px"},children:[a.jsx("div",{style:{width:"60px",height:"60px",borderRadius:"50%",background:"var(--accent-gradient-purple)",color:"#ffffff",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"1.5rem",fontWeight:900,boxShadow:"0 4px 14px rgba(139, 92, 246, 0.4)"},children:t!=null&&t.name?t.name.charAt(0):"A"}),a.jsxs("div",{children:[a.jsx("h2",{style:{fontSize:"1.25rem",fontWeight:800,margin:0,color:"var(--text-primary)"},children:t==null?void 0:t.name}),a.jsx("span",{className:"badge badge-urgent",style:{marginTop:"4px"},children:"System Administrator"})]})]}),a.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"14px",marginBottom:"24px"},children:[a.jsxs("div",{style:{padding:"12px 14px",borderRadius:"var(--radius-md)",background:"var(--bg-tertiary)"},children:[a.jsx("span",{style:{fontSize:"0.74rem",color:"var(--text-tertiary)",display:"block"},children:"Email Address"}),a.jsx("strong",{style:{fontSize:"0.9rem",color:"var(--text-primary)"},children:t==null?void 0:t.email})]}),a.jsxs("div",{style:{padding:"12px 14px",borderRadius:"var(--radius-md)",background:"var(--bg-tertiary)"},children:[a.jsx("span",{style:{fontSize:"0.74rem",color:"var(--text-tertiary)",display:"block"},children:"Department / Role"}),a.jsx("strong",{style:{fontSize:"0.9rem",color:"var(--text-primary)"},children:(t==null?void 0:t.department)||"Dean of Student Affairs"})]})]}),a.jsx("h4",{style:{fontSize:"0.98rem",fontWeight:700,marginBottom:"12px",color:"var(--text-primary)"},children:"Interface Preferences"}),a.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"12px 14px",borderRadius:"var(--radius-md)",background:"var(--bg-tertiary)"},children:[a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px"},children:[n==="dark"?a.jsx(u0,{size:18,color:"#6366f1"}):a.jsx(p0,{size:18,color:"#f59e0b"}),a.jsxs("span",{style:{fontSize:"0.88rem",fontWeight:600,color:"var(--text-primary)"},children:["Color Theme: ",n==="dark"?"Dark Mode":"Light Mode"]})]}),a.jsx("button",{onClick:i,className:"btn-secondary btn-sm",children:"Toggle Theme"})]})]}),a.jsxs("div",{className:"card",style:{background:"var(--bg-secondary)",padding:"28px"},children:[a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px",marginBottom:"20px"},children:[a.jsx(xo,{size:22,color:"#c084fc"}),a.jsxs("div",{children:[a.jsx("h3",{style:{fontSize:"1.15rem",fontWeight:800,margin:0,color:"var(--text-primary)"},children:"Change Admin Password"}),a.jsx("span",{style:{fontSize:"0.76rem",color:"var(--text-tertiary)"},children:"Elevated credentials security"})]})]}),a.jsxs("form",{onSubmit:T,children:[a.jsxs("div",{className:"form-group",children:[a.jsx("label",{className:"form-label",children:"Current Password"}),a.jsxs("div",{className:"input-with-icon",children:[a.jsx(ai,{size:16,className:"input-icon-left"}),a.jsx("input",{type:h?"text":"password",value:s,onChange:X=>o(X.target.value),placeholder:"Current admin password",className:"form-input",required:!0}),a.jsx("button",{type:"button",onClick:()=>p(!h),className:"input-icon-right",style:{background:"none",border:"none",display:"flex"},children:h?a.jsx(gr,{size:16}):a.jsx(ci,{size:16})})]})]}),a.jsxs("div",{className:"form-group",children:[a.jsx("label",{className:"form-label",children:"New Password"}),a.jsxs("div",{className:"input-with-icon",children:[a.jsx(ai,{size:16,className:"input-icon-left"}),a.jsx("input",{type:g?"text":"password",value:l,onChange:X=>c(X.target.value),placeholder:"Min 6 characters",className:"form-input",required:!0}),a.jsx("button",{type:"button",onClick:()=>y(!g),className:"input-icon-right",style:{background:"none",border:"none",display:"flex"},children:g?a.jsx(gr,{size:16}):a.jsx(ci,{size:16})})]})]}),a.jsxs("div",{className:"form-group",children:[a.jsx("label",{className:"form-label",children:"Confirm New Password"}),a.jsxs("div",{className:"input-with-icon",children:[a.jsx(ai,{size:16,className:"input-icon-left"}),a.jsx("input",{type:"password",value:u,onChange:X=>f(X.target.value),placeholder:"Re-enter new password",className:"form-input",required:!0})]})]}),a.jsx("button",{type:"submit",disabled:_,className:"btn-primary",style:{width:"100%",marginTop:"6px",background:"var(--accent-gradient-purple)"},children:_?"Updating...":"Update Admin Password"})]})]})]}),a.jsxs("div",{className:"card",style:{background:"var(--bg-secondary)",padding:"28px"},children:[a.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"20px"},children:[a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px"},children:[a.jsx(fM,{size:22,color:"#10b981"}),a.jsxs("div",{children:[a.jsx("h3",{style:{fontSize:"1.2rem",fontWeight:800,margin:0,color:"var(--text-primary)"},children:"Live System Health & Infrastructure Telemetry"}),a.jsx("span",{style:{fontSize:"0.78rem",color:"var(--text-tertiary)"},children:"Real-time metrics from Node.js runtime, PostgreSQL database & REST endpoints"})]})]}),a.jsxs("button",{onClick:C,className:"btn-secondary btn-sm",style:{display:"flex",gap:"6px"},children:[a.jsx(ha,{size:14,className:v?"animate-spin":""}),a.jsx("span",{children:"Poll Health"})]})]}),d?a.jsxs("div",{className:"grid-3",style:{gap:"18px"},children:[a.jsxs("div",{style:{padding:"18px",borderRadius:"var(--radius-md)",background:"var(--bg-tertiary)",border:"1px solid var(--border-color)"},children:[a.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"12px"},children:[a.jsx("span",{style:{fontSize:"0.84rem",fontWeight:700,color:"var(--text-secondary)"},children:"Express Server"}),a.jsxs("span",{className:"badge badge-resolved",style:{fontSize:"0.68rem"},children:[a.jsx(Rn,{size:10})," ",(N=(A=d.services)==null?void 0:A.server)==null?void 0:N.status]})]}),a.jsxs("div",{style:{fontSize:"0.86rem",display:"flex",flexDirection:"column",gap:"6px",color:"var(--text-primary)"},children:[a.jsxs("div",{children:[a.jsx("strong",{children:"Port:"})," ",(M=(w=d.services)==null?void 0:w.server)==null?void 0:M.port]}),a.jsxs("div",{children:[a.jsx("strong",{children:"Uptime:"})," ",(R=d.uptime)==null?void 0:R.formatted]}),a.jsxs("div",{children:[a.jsx("strong",{children:"Node:"})," ",(G=d.system)==null?void 0:G.nodeVersion]})]})]}),a.jsxs("div",{style:{padding:"18px",borderRadius:"var(--radius-md)",background:"var(--bg-tertiary)",border:"1px solid var(--border-color)"},children:[a.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"12px"},children:[a.jsx("span",{style:{fontSize:"0.84rem",fontWeight:700,color:"var(--text-secondary)"},children:"Database Engine"}),a.jsxs("span",{className:"badge badge-resolved",style:{fontSize:"0.68rem"},children:[a.jsx(Rn,{size:10})," ",(q=(O=d.services)==null?void 0:O.database)==null?void 0:q.status]})]}),a.jsxs("div",{style:{fontSize:"0.86rem",display:"flex",flexDirection:"column",gap:"6px",color:"var(--text-primary)"},children:[a.jsxs("div",{children:[a.jsx("strong",{children:"Provider:"})," PostgreSQL / Prisma"]}),a.jsxs("div",{children:[a.jsx("strong",{children:"Announcements:"})," ",(D=($=d.services)==null?void 0:$.database)==null?void 0:D.totalAnnouncements]}),a.jsxs("div",{children:[a.jsx("strong",{children:"Registered Users:"})," ",(U=(V=d.services)==null?void 0:V.database)==null?void 0:U.totalUsers]})]})]}),a.jsxs("div",{style:{padding:"18px",borderRadius:"var(--radius-md)",background:"var(--bg-tertiary)",border:"1px solid var(--border-color)"},children:[a.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"12px"},children:[a.jsx("span",{style:{fontSize:"0.84rem",fontWeight:700,color:"var(--text-secondary)"},children:"System Resources"}),a.jsxs("span",{className:"badge badge-resolved",style:{fontSize:"0.68rem"},children:[a.jsx(af,{size:10})," ",(Z=(Y=d.services)==null?void 0:Y.api)==null?void 0:Z.latencyMs,"ms LATENCY"]})]}),a.jsxs("div",{style:{fontSize:"0.86rem",display:"flex",flexDirection:"column",gap:"6px",color:"var(--text-primary)"},children:[a.jsxs("div",{children:[a.jsx("strong",{children:"Heap Used:"})," ",(oe=d.system)==null?void 0:oe.heapUsedMB," MB"]}),a.jsxs("div",{children:[a.jsx("strong",{children:"CPU Cores:"})," ",(Se=d.system)==null?void 0:Se.cpuCount," Cores"]}),a.jsxs("div",{children:[a.jsx("strong",{children:"Platform:"})," ",(Be=d.system)==null?void 0:Be.platform]})]})]})]}):a.jsx("div",{style:{padding:"24px",textAlign:"center",color:"var(--text-tertiary)"},children:"Polling system health..."})]})]})},aC=()=>a.jsx(vM,{children:a.jsx(gM,{children:a.jsx(xM,{children:a.jsx(US,{children:a.jsxs(AS,{children:[a.jsx(st,{path:"/",element:a.jsx(jA,{})}),a.jsx(st,{path:"/student/register",element:a.jsx(zA,{})}),a.jsx(st,{path:"/student/login",element:a.jsx(FA,{})}),a.jsx(st,{path:"/admin/login",element:a.jsx(OA,{})}),a.jsxs(st,{path:"/student",element:a.jsx(Pm,{allowedRoles:["STUDENT"],children:a.jsx(BA,{})}),children:[a.jsx(st,{index:!0,element:a.jsx(Hs,{to:"/student/home",replace:!0})}),a.jsx(st,{path:"home",element:a.jsx(HA,{})}),a.jsx(st,{path:"announcements",element:a.jsx(WA,{})}),a.jsx(st,{path:"urgent-alerts",element:a.jsx(GA,{})}),a.jsx(st,{path:"calendar",element:a.jsx(XA,{})}),a.jsx(st,{path:"notifications",element:a.jsx(qA,{})}),a.jsx(st,{path:"qa",element:a.jsx(YA,{})}),a.jsx(st,{path:"about",element:a.jsx(KA,{})}),a.jsx(st,{path:"profile",element:a.jsx(QA,{})})]}),a.jsxs(st,{path:"/admin",element:a.jsx(Pm,{allowedRoles:["ADMIN"],children:a.jsx(ZA,{})}),children:[a.jsx(st,{index:!0,element:a.jsx(Hs,{to:"/admin/overview",replace:!0})}),a.jsx(st,{path:"overview",element:a.jsx(JA,{})}),a.jsx(st,{path:"announcements",element:a.jsx(eC,{})}),a.jsx(st,{path:"events",element:a.jsx(tC,{})}),a.jsx(st,{path:"queries",element:a.jsx(nC,{})}),a.jsx(st,{path:"notifications",element:a.jsx(iC,{})}),a.jsx(st,{path:"activity-logs",element:a.jsx(rC,{})}),a.jsx(st,{path:"settings",element:a.jsx(sC,{})})]}),a.jsx(st,{path:"*",element:a.jsx(Hs,{to:"/",replace:!0})})]})})})})});ld.createRoot(document.getElementById("root")).render(a.jsx(Wg.StrictMode,{children:a.jsx(aC,{})}));
