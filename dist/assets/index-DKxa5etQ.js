(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const u of o)if(u.type==="childList")for(const h of u.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&s(h)}).observe(document,{childList:!0,subtree:!0});function t(o){const u={};return o.integrity&&(u.integrity=o.integrity),o.referrerPolicy&&(u.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?u.credentials="include":o.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function s(o){if(o.ep)return;o.ep=!0;const u=t(o);fetch(o.href,u)}})();var kh={exports:{}},fa={},Ph={exports:{}},Ae={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var dm;function Jv(){if(dm)return Ae;dm=1;var i=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),u=Symbol.for("react.provider"),h=Symbol.for("react.context"),m=Symbol.for("react.forward_ref"),g=Symbol.for("react.suspense"),v=Symbol.for("react.memo"),w=Symbol.for("react.lazy"),k=Symbol.iterator;function M(V){return V===null||typeof V!="object"?null:(V=k&&V[k]||V["@@iterator"],typeof V=="function"?V:null)}var z={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},H=Object.assign,G={};function B(V,q,he){this.props=V,this.context=q,this.refs=G,this.updater=he||z}B.prototype.isReactComponent={},B.prototype.setState=function(V,q){if(typeof V!="object"&&typeof V!="function"&&V!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,V,q,"setState")},B.prototype.forceUpdate=function(V){this.updater.enqueueForceUpdate(this,V,"forceUpdate")};function ue(){}ue.prototype=B.prototype;function ce(V,q,he){this.props=V,this.context=q,this.refs=G,this.updater=he||z}var ae=ce.prototype=new ue;ae.constructor=ce,H(ae,B.prototype),ae.isPureReactComponent=!0;var ge=Array.isArray,Oe=Object.prototype.hasOwnProperty,ye={current:null},R={key:!0,ref:!0,__self:!0,__source:!0};function T(V,q,he){var Ie,Se={},Ne=null,Me=null;if(q!=null)for(Ie in q.ref!==void 0&&(Me=q.ref),q.key!==void 0&&(Ne=""+q.key),q)Oe.call(q,Ie)&&!R.hasOwnProperty(Ie)&&(Se[Ie]=q[Ie]);var be=arguments.length-2;if(be===1)Se.children=he;else if(1<be){for(var Be=Array(be),mt=0;mt<be;mt++)Be[mt]=arguments[mt+2];Se.children=Be}if(V&&V.defaultProps)for(Ie in be=V.defaultProps,be)Se[Ie]===void 0&&(Se[Ie]=be[Ie]);return{$$typeof:i,type:V,key:Ne,ref:Me,props:Se,_owner:ye.current}}function A(V,q){return{$$typeof:i,type:V.type,key:q,ref:V.ref,props:V.props,_owner:V._owner}}function P(V){return typeof V=="object"&&V!==null&&V.$$typeof===i}function x(V){var q={"=":"=0",":":"=2"};return"$"+V.replace(/[=:]/g,function(he){return q[he]})}var D=/\/+/g;function S(V,q){return typeof V=="object"&&V!==null&&V.key!=null?x(""+V.key):q.toString(36)}function He(V,q,he,Ie,Se){var Ne=typeof V;(Ne==="undefined"||Ne==="boolean")&&(V=null);var Me=!1;if(V===null)Me=!0;else switch(Ne){case"string":case"number":Me=!0;break;case"object":switch(V.$$typeof){case i:case e:Me=!0}}if(Me)return Me=V,Se=Se(Me),V=Ie===""?"."+S(Me,0):Ie,ge(Se)?(he="",V!=null&&(he=V.replace(D,"$&/")+"/"),He(Se,q,he,"",function(mt){return mt})):Se!=null&&(P(Se)&&(Se=A(Se,he+(!Se.key||Me&&Me.key===Se.key?"":(""+Se.key).replace(D,"$&/")+"/")+V)),q.push(Se)),1;if(Me=0,Ie=Ie===""?".":Ie+":",ge(V))for(var be=0;be<V.length;be++){Ne=V[be];var Be=Ie+S(Ne,be);Me+=He(Ne,q,he,Be,Se)}else if(Be=M(V),typeof Be=="function")for(V=Be.call(V),be=0;!(Ne=V.next()).done;)Ne=Ne.value,Be=Ie+S(Ne,be++),Me+=He(Ne,q,he,Be,Se);else if(Ne==="object")throw q=String(V),Error("Objects are not valid as a React child (found: "+(q==="[object Object]"?"object with keys {"+Object.keys(V).join(", ")+"}":q)+"). If you meant to render a collection of children, use an array instead.");return Me}function Pt(V,q,he){if(V==null)return V;var Ie=[],Se=0;return He(V,Ie,"","",function(Ne){return q.call(he,Ne,Se++)}),Ie}function Nt(V){if(V._status===-1){var q=V._result;q=q(),q.then(function(he){(V._status===0||V._status===-1)&&(V._status=1,V._result=he)},function(he){(V._status===0||V._status===-1)&&(V._status=2,V._result=he)}),V._status===-1&&(V._status=0,V._result=q)}if(V._status===1)return V._result.default;throw V._result}var je={current:null},Z={transition:null},fe={ReactCurrentDispatcher:je,ReactCurrentBatchConfig:Z,ReactCurrentOwner:ye};function te(){throw Error("act(...) is not supported in production builds of React.")}return Ae.Children={map:Pt,forEach:function(V,q,he){Pt(V,function(){q.apply(this,arguments)},he)},count:function(V){var q=0;return Pt(V,function(){q++}),q},toArray:function(V){return Pt(V,function(q){return q})||[]},only:function(V){if(!P(V))throw Error("React.Children.only expected to receive a single React element child.");return V}},Ae.Component=B,Ae.Fragment=t,Ae.Profiler=o,Ae.PureComponent=ce,Ae.StrictMode=s,Ae.Suspense=g,Ae.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=fe,Ae.act=te,Ae.cloneElement=function(V,q,he){if(V==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+V+".");var Ie=H({},V.props),Se=V.key,Ne=V.ref,Me=V._owner;if(q!=null){if(q.ref!==void 0&&(Ne=q.ref,Me=ye.current),q.key!==void 0&&(Se=""+q.key),V.type&&V.type.defaultProps)var be=V.type.defaultProps;for(Be in q)Oe.call(q,Be)&&!R.hasOwnProperty(Be)&&(Ie[Be]=q[Be]===void 0&&be!==void 0?be[Be]:q[Be])}var Be=arguments.length-2;if(Be===1)Ie.children=he;else if(1<Be){be=Array(Be);for(var mt=0;mt<Be;mt++)be[mt]=arguments[mt+2];Ie.children=be}return{$$typeof:i,type:V.type,key:Se,ref:Ne,props:Ie,_owner:Me}},Ae.createContext=function(V){return V={$$typeof:h,_currentValue:V,_currentValue2:V,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},V.Provider={$$typeof:u,_context:V},V.Consumer=V},Ae.createElement=T,Ae.createFactory=function(V){var q=T.bind(null,V);return q.type=V,q},Ae.createRef=function(){return{current:null}},Ae.forwardRef=function(V){return{$$typeof:m,render:V}},Ae.isValidElement=P,Ae.lazy=function(V){return{$$typeof:w,_payload:{_status:-1,_result:V},_init:Nt}},Ae.memo=function(V,q){return{$$typeof:v,type:V,compare:q===void 0?null:q}},Ae.startTransition=function(V){var q=Z.transition;Z.transition={};try{V()}finally{Z.transition=q}},Ae.unstable_act=te,Ae.useCallback=function(V,q){return je.current.useCallback(V,q)},Ae.useContext=function(V){return je.current.useContext(V)},Ae.useDebugValue=function(){},Ae.useDeferredValue=function(V){return je.current.useDeferredValue(V)},Ae.useEffect=function(V,q){return je.current.useEffect(V,q)},Ae.useId=function(){return je.current.useId()},Ae.useImperativeHandle=function(V,q,he){return je.current.useImperativeHandle(V,q,he)},Ae.useInsertionEffect=function(V,q){return je.current.useInsertionEffect(V,q)},Ae.useLayoutEffect=function(V,q){return je.current.useLayoutEffect(V,q)},Ae.useMemo=function(V,q){return je.current.useMemo(V,q)},Ae.useReducer=function(V,q,he){return je.current.useReducer(V,q,he)},Ae.useRef=function(V){return je.current.useRef(V)},Ae.useState=function(V){return je.current.useState(V)},Ae.useSyncExternalStore=function(V,q,he){return je.current.useSyncExternalStore(V,q,he)},Ae.useTransition=function(){return je.current.useTransition()},Ae.version="18.3.1",Ae}var fm;function fd(){return fm||(fm=1,Ph.exports=Jv()),Ph.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var pm;function Zv(){if(pm)return fa;pm=1;var i=fd(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,o=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u={key:!0,ref:!0,__self:!0,__source:!0};function h(m,g,v){var w,k={},M=null,z=null;v!==void 0&&(M=""+v),g.key!==void 0&&(M=""+g.key),g.ref!==void 0&&(z=g.ref);for(w in g)s.call(g,w)&&!u.hasOwnProperty(w)&&(k[w]=g[w]);if(m&&m.defaultProps)for(w in g=m.defaultProps,g)k[w]===void 0&&(k[w]=g[w]);return{$$typeof:e,type:m,key:M,ref:z,props:k,_owner:o.current}}return fa.Fragment=t,fa.jsx=h,fa.jsxs=h,fa}var mm;function e0(){return mm||(mm=1,kh.exports=Zv()),kh.exports}var j=e0(),wt=fd(),nu={},Nh={exports:{}},Xt={},xh={exports:{}},Dh={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var gm;function t0(){return gm||(gm=1,function(i){function e(Z,fe){var te=Z.length;Z.push(fe);e:for(;0<te;){var V=te-1>>>1,q=Z[V];if(0<o(q,fe))Z[V]=fe,Z[te]=q,te=V;else break e}}function t(Z){return Z.length===0?null:Z[0]}function s(Z){if(Z.length===0)return null;var fe=Z[0],te=Z.pop();if(te!==fe){Z[0]=te;e:for(var V=0,q=Z.length,he=q>>>1;V<he;){var Ie=2*(V+1)-1,Se=Z[Ie],Ne=Ie+1,Me=Z[Ne];if(0>o(Se,te))Ne<q&&0>o(Me,Se)?(Z[V]=Me,Z[Ne]=te,V=Ne):(Z[V]=Se,Z[Ie]=te,V=Ie);else if(Ne<q&&0>o(Me,te))Z[V]=Me,Z[Ne]=te,V=Ne;else break e}}return fe}function o(Z,fe){var te=Z.sortIndex-fe.sortIndex;return te!==0?te:Z.id-fe.id}if(typeof performance=="object"&&typeof performance.now=="function"){var u=performance;i.unstable_now=function(){return u.now()}}else{var h=Date,m=h.now();i.unstable_now=function(){return h.now()-m}}var g=[],v=[],w=1,k=null,M=3,z=!1,H=!1,G=!1,B=typeof setTimeout=="function"?setTimeout:null,ue=typeof clearTimeout=="function"?clearTimeout:null,ce=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function ae(Z){for(var fe=t(v);fe!==null;){if(fe.callback===null)s(v);else if(fe.startTime<=Z)s(v),fe.sortIndex=fe.expirationTime,e(g,fe);else break;fe=t(v)}}function ge(Z){if(G=!1,ae(Z),!H)if(t(g)!==null)H=!0,Nt(Oe);else{var fe=t(v);fe!==null&&je(ge,fe.startTime-Z)}}function Oe(Z,fe){H=!1,G&&(G=!1,ue(T),T=-1),z=!0;var te=M;try{for(ae(fe),k=t(g);k!==null&&(!(k.expirationTime>fe)||Z&&!x());){var V=k.callback;if(typeof V=="function"){k.callback=null,M=k.priorityLevel;var q=V(k.expirationTime<=fe);fe=i.unstable_now(),typeof q=="function"?k.callback=q:k===t(g)&&s(g),ae(fe)}else s(g);k=t(g)}if(k!==null)var he=!0;else{var Ie=t(v);Ie!==null&&je(ge,Ie.startTime-fe),he=!1}return he}finally{k=null,M=te,z=!1}}var ye=!1,R=null,T=-1,A=5,P=-1;function x(){return!(i.unstable_now()-P<A)}function D(){if(R!==null){var Z=i.unstable_now();P=Z;var fe=!0;try{fe=R(!0,Z)}finally{fe?S():(ye=!1,R=null)}}else ye=!1}var S;if(typeof ce=="function")S=function(){ce(D)};else if(typeof MessageChannel<"u"){var He=new MessageChannel,Pt=He.port2;He.port1.onmessage=D,S=function(){Pt.postMessage(null)}}else S=function(){B(D,0)};function Nt(Z){R=Z,ye||(ye=!0,S())}function je(Z,fe){T=B(function(){Z(i.unstable_now())},fe)}i.unstable_IdlePriority=5,i.unstable_ImmediatePriority=1,i.unstable_LowPriority=4,i.unstable_NormalPriority=3,i.unstable_Profiling=null,i.unstable_UserBlockingPriority=2,i.unstable_cancelCallback=function(Z){Z.callback=null},i.unstable_continueExecution=function(){H||z||(H=!0,Nt(Oe))},i.unstable_forceFrameRate=function(Z){0>Z||125<Z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):A=0<Z?Math.floor(1e3/Z):5},i.unstable_getCurrentPriorityLevel=function(){return M},i.unstable_getFirstCallbackNode=function(){return t(g)},i.unstable_next=function(Z){switch(M){case 1:case 2:case 3:var fe=3;break;default:fe=M}var te=M;M=fe;try{return Z()}finally{M=te}},i.unstable_pauseExecution=function(){},i.unstable_requestPaint=function(){},i.unstable_runWithPriority=function(Z,fe){switch(Z){case 1:case 2:case 3:case 4:case 5:break;default:Z=3}var te=M;M=Z;try{return fe()}finally{M=te}},i.unstable_scheduleCallback=function(Z,fe,te){var V=i.unstable_now();switch(typeof te=="object"&&te!==null?(te=te.delay,te=typeof te=="number"&&0<te?V+te:V):te=V,Z){case 1:var q=-1;break;case 2:q=250;break;case 5:q=1073741823;break;case 4:q=1e4;break;default:q=5e3}return q=te+q,Z={id:w++,callback:fe,priorityLevel:Z,startTime:te,expirationTime:q,sortIndex:-1},te>V?(Z.sortIndex=te,e(v,Z),t(g)===null&&Z===t(v)&&(G?(ue(T),T=-1):G=!0,je(ge,te-V))):(Z.sortIndex=q,e(g,Z),H||z||(H=!0,Nt(Oe))),Z},i.unstable_shouldYield=x,i.unstable_wrapCallback=function(Z){var fe=M;return function(){var te=M;M=fe;try{return Z.apply(this,arguments)}finally{M=te}}}}(Dh)),Dh}var ym;function n0(){return ym||(ym=1,xh.exports=t0()),xh.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _m;function r0(){if(_m)return Xt;_m=1;var i=fd(),e=n0();function t(n){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+n,a=1;a<arguments.length;a++)r+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+n+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var s=new Set,o={};function u(n,r){h(n,r),h(n+"Capture",r)}function h(n,r){for(o[n]=r,n=0;n<r.length;n++)s.add(r[n])}var m=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),g=Object.prototype.hasOwnProperty,v=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,w={},k={};function M(n){return g.call(k,n)?!0:g.call(w,n)?!1:v.test(n)?k[n]=!0:(w[n]=!0,!1)}function z(n,r,a,c){if(a!==null&&a.type===0)return!1;switch(typeof r){case"function":case"symbol":return!0;case"boolean":return c?!1:a!==null?!a.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function H(n,r,a,c){if(r===null||typeof r>"u"||z(n,r,a,c))return!0;if(c)return!1;if(a!==null)switch(a.type){case 3:return!r;case 4:return r===!1;case 5:return isNaN(r);case 6:return isNaN(r)||1>r}return!1}function G(n,r,a,c,d,p,_){this.acceptsBooleans=r===2||r===3||r===4,this.attributeName=c,this.attributeNamespace=d,this.mustUseProperty=a,this.propertyName=n,this.type=r,this.sanitizeURL=p,this.removeEmptyString=_}var B={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){B[n]=new G(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var r=n[0];B[r]=new G(r,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){B[n]=new G(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){B[n]=new G(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){B[n]=new G(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){B[n]=new G(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){B[n]=new G(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){B[n]=new G(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){B[n]=new G(n,5,!1,n.toLowerCase(),null,!1,!1)});var ue=/[\-:]([a-z])/g;function ce(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var r=n.replace(ue,ce);B[r]=new G(r,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var r=n.replace(ue,ce);B[r]=new G(r,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var r=n.replace(ue,ce);B[r]=new G(r,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){B[n]=new G(n,1,!1,n.toLowerCase(),null,!1,!1)}),B.xlinkHref=new G("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){B[n]=new G(n,1,!1,n.toLowerCase(),null,!0,!0)});function ae(n,r,a,c){var d=B.hasOwnProperty(r)?B[r]:null;(d!==null?d.type!==0:c||!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(H(r,a,d,c)&&(a=null),c||d===null?M(r)&&(a===null?n.removeAttribute(r):n.setAttribute(r,""+a)):d.mustUseProperty?n[d.propertyName]=a===null?d.type===3?!1:"":a:(r=d.attributeName,c=d.attributeNamespace,a===null?n.removeAttribute(r):(d=d.type,a=d===3||d===4&&a===!0?"":""+a,c?n.setAttributeNS(c,r,a):n.setAttribute(r,a))))}var ge=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Oe=Symbol.for("react.element"),ye=Symbol.for("react.portal"),R=Symbol.for("react.fragment"),T=Symbol.for("react.strict_mode"),A=Symbol.for("react.profiler"),P=Symbol.for("react.provider"),x=Symbol.for("react.context"),D=Symbol.for("react.forward_ref"),S=Symbol.for("react.suspense"),He=Symbol.for("react.suspense_list"),Pt=Symbol.for("react.memo"),Nt=Symbol.for("react.lazy"),je=Symbol.for("react.offscreen"),Z=Symbol.iterator;function fe(n){return n===null||typeof n!="object"?null:(n=Z&&n[Z]||n["@@iterator"],typeof n=="function"?n:null)}var te=Object.assign,V;function q(n){if(V===void 0)try{throw Error()}catch(a){var r=a.stack.trim().match(/\n( *(at )?)/);V=r&&r[1]||""}return`
`+V+n}var he=!1;function Ie(n,r){if(!n||he)return"";he=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(r)if(r=function(){throw Error()},Object.defineProperty(r.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(r,[])}catch(F){var c=F}Reflect.construct(n,[],r)}else{try{r.call()}catch(F){c=F}n.call(r.prototype)}else{try{throw Error()}catch(F){c=F}n()}}catch(F){if(F&&c&&typeof F.stack=="string"){for(var d=F.stack.split(`
`),p=c.stack.split(`
`),_=d.length-1,I=p.length-1;1<=_&&0<=I&&d[_]!==p[I];)I--;for(;1<=_&&0<=I;_--,I--)if(d[_]!==p[I]){if(_!==1||I!==1)do if(_--,I--,0>I||d[_]!==p[I]){var C=`
`+d[_].replace(" at new "," at ");return n.displayName&&C.includes("<anonymous>")&&(C=C.replace("<anonymous>",n.displayName)),C}while(1<=_&&0<=I);break}}}finally{he=!1,Error.prepareStackTrace=a}return(n=n?n.displayName||n.name:"")?q(n):""}function Se(n){switch(n.tag){case 5:return q(n.type);case 16:return q("Lazy");case 13:return q("Suspense");case 19:return q("SuspenseList");case 0:case 2:case 15:return n=Ie(n.type,!1),n;case 11:return n=Ie(n.type.render,!1),n;case 1:return n=Ie(n.type,!0),n;default:return""}}function Ne(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case R:return"Fragment";case ye:return"Portal";case A:return"Profiler";case T:return"StrictMode";case S:return"Suspense";case He:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case x:return(n.displayName||"Context")+".Consumer";case P:return(n._context.displayName||"Context")+".Provider";case D:var r=n.render;return n=n.displayName,n||(n=r.displayName||r.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case Pt:return r=n.displayName||null,r!==null?r:Ne(n.type)||"Memo";case Nt:r=n._payload,n=n._init;try{return Ne(n(r))}catch{}}return null}function Me(n){var r=n.type;switch(n.tag){case 24:return"Cache";case 9:return(r.displayName||"Context")+".Consumer";case 10:return(r._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=r.render,n=n.displayName||n.name||"",r.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return r;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ne(r);case 8:return r===T?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r}return null}function be(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Be(n){var r=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function mt(n){var r=Be(n)?"checked":"value",a=Object.getOwnPropertyDescriptor(n.constructor.prototype,r),c=""+n[r];if(!n.hasOwnProperty(r)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var d=a.get,p=a.set;return Object.defineProperty(n,r,{configurable:!0,get:function(){return d.call(this)},set:function(_){c=""+_,p.call(this,_)}}),Object.defineProperty(n,r,{enumerable:a.enumerable}),{getValue:function(){return c},setValue:function(_){c=""+_},stopTracking:function(){n._valueTracker=null,delete n[r]}}}}function er(n){n._valueTracker||(n._valueTracker=mt(n))}function es(n){if(!n)return!1;var r=n._valueTracker;if(!r)return!0;var a=r.getValue(),c="";return n&&(c=Be(n)?n.checked?"true":"false":n.value),n=c,n!==a?(r.setValue(n),!0):!1}function Cr(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function gi(n,r){var a=r.checked;return te({},r,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??n._wrapperState.initialChecked})}function ts(n,r){var a=r.defaultValue==null?"":r.defaultValue,c=r.checked!=null?r.checked:r.defaultChecked;a=be(r.value!=null?r.value:a),n._wrapperState={initialChecked:c,initialValue:a,controlled:r.type==="checkbox"||r.type==="radio"?r.checked!=null:r.value!=null}}function vo(n,r){r=r.checked,r!=null&&ae(n,"checked",r,!1)}function Eo(n,r){vo(n,r);var a=be(r.value),c=r.type;if(a!=null)c==="number"?(a===0&&n.value===""||n.value!=a)&&(n.value=""+a):n.value!==""+a&&(n.value=""+a);else if(c==="submit"||c==="reset"){n.removeAttribute("value");return}r.hasOwnProperty("value")?ns(n,r.type,a):r.hasOwnProperty("defaultValue")&&ns(n,r.type,be(r.defaultValue)),r.checked==null&&r.defaultChecked!=null&&(n.defaultChecked=!!r.defaultChecked)}function za(n,r,a){if(r.hasOwnProperty("value")||r.hasOwnProperty("defaultValue")){var c=r.type;if(!(c!=="submit"&&c!=="reset"||r.value!==void 0&&r.value!==null))return;r=""+n._wrapperState.initialValue,a||r===n.value||(n.value=r),n.defaultValue=r}a=n.name,a!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,a!==""&&(n.name=a)}function ns(n,r,a){(r!=="number"||Cr(n.ownerDocument)!==n)&&(a==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+a&&(n.defaultValue=""+a))}var tr=Array.isArray;function nr(n,r,a,c){if(n=n.options,r){r={};for(var d=0;d<a.length;d++)r["$"+a[d]]=!0;for(a=0;a<n.length;a++)d=r.hasOwnProperty("$"+n[a].value),n[a].selected!==d&&(n[a].selected=d),d&&c&&(n[a].defaultSelected=!0)}else{for(a=""+be(a),r=null,d=0;d<n.length;d++){if(n[d].value===a){n[d].selected=!0,c&&(n[d].defaultSelected=!0);return}r!==null||n[d].disabled||(r=n[d])}r!==null&&(r.selected=!0)}}function wo(n,r){if(r.dangerouslySetInnerHTML!=null)throw Error(t(91));return te({},r,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function rs(n,r){var a=r.value;if(a==null){if(a=r.children,r=r.defaultValue,a!=null){if(r!=null)throw Error(t(92));if(tr(a)){if(1<a.length)throw Error(t(93));a=a[0]}r=a}r==null&&(r=""),a=r}n._wrapperState={initialValue:be(a)}}function is(n,r){var a=be(r.value),c=be(r.defaultValue);a!=null&&(a=""+a,a!==n.value&&(n.value=a),r.defaultValue==null&&n.defaultValue!==a&&(n.defaultValue=a)),c!=null&&(n.defaultValue=""+c)}function To(n){var r=n.textContent;r===n._wrapperState.initialValue&&r!==""&&r!==null&&(n.value=r)}function lt(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ut(n,r){return n==null||n==="http://www.w3.org/1999/xhtml"?lt(r):n==="http://www.w3.org/2000/svg"&&r==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var rr,Io=function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(r,a,c,d){MSApp.execUnsafeLocalFunction(function(){return n(r,a,c,d)})}:n}(function(n,r){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=r;else{for(rr=rr||document.createElement("div"),rr.innerHTML="<svg>"+r.valueOf().toString()+"</svg>",r=rr.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;r.firstChild;)n.appendChild(r.firstChild)}});function kr(n,r){if(r){var a=n.firstChild;if(a&&a===n.lastChild&&a.nodeType===3){a.nodeValue=r;return}}n.textContent=r}var yi={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},_i=["Webkit","ms","Moz","O"];Object.keys(yi).forEach(function(n){_i.forEach(function(r){r=r+n.charAt(0).toUpperCase()+n.substring(1),yi[r]=yi[n]})});function So(n,r,a){return r==null||typeof r=="boolean"||r===""?"":a||typeof r!="number"||r===0||yi.hasOwnProperty(n)&&yi[n]?(""+r).trim():r+"px"}function Ao(n,r){n=n.style;for(var a in r)if(r.hasOwnProperty(a)){var c=a.indexOf("--")===0,d=So(a,r[a],c);a==="float"&&(a="cssFloat"),c?n.setProperty(a,d):n[a]=d}}var Ro=te({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Co(n,r){if(r){if(Ro[n]&&(r.children!=null||r.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(r.dangerouslySetInnerHTML!=null){if(r.children!=null)throw Error(t(60));if(typeof r.dangerouslySetInnerHTML!="object"||!("__html"in r.dangerouslySetInnerHTML))throw Error(t(61))}if(r.style!=null&&typeof r.style!="object")throw Error(t(62))}}function ko(n,r){if(n.indexOf("-")===-1)return typeof r.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var vi=null;function ss(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var os=null,on=null,Mn=null;function as(n){if(n=Jo(n)){if(typeof os!="function")throw Error(t(280));var r=n.stateNode;r&&(r=yl(r),os(n.stateNode,n.type,r))}}function bn(n){on?Mn?Mn.push(n):Mn=[n]:on=n}function Po(){if(on){var n=on,r=Mn;if(Mn=on=null,as(n),r)for(n=0;n<r.length;n++)as(r[n])}}function Ei(n,r){return n(r)}function No(){}var ir=!1;function xo(n,r,a){if(ir)return n(r,a);ir=!0;try{return Ei(n,r,a)}finally{ir=!1,(on!==null||Mn!==null)&&(No(),Po())}}function tt(n,r){var a=n.stateNode;if(a===null)return null;var c=yl(a);if(c===null)return null;a=c[r];e:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(n=n.type,c=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!c;break e;default:n=!1}if(n)return null;if(a&&typeof a!="function")throw Error(t(231,r,typeof a));return a}var ls=!1;if(m)try{var vn={};Object.defineProperty(vn,"passive",{get:function(){ls=!0}}),window.addEventListener("test",vn,vn),window.removeEventListener("test",vn,vn)}catch{ls=!1}function wi(n,r,a,c,d,p,_,I,C){var F=Array.prototype.slice.call(arguments,3);try{r.apply(a,F)}catch(Q){this.onError(Q)}}var Ti=!1,us=null,En=!1,Do=null,nc={onError:function(n){Ti=!0,us=n}};function cs(n,r,a,c,d,p,_,I,C){Ti=!1,us=null,wi.apply(nc,arguments)}function Ba(n,r,a,c,d,p,_,I,C){if(cs.apply(this,arguments),Ti){if(Ti){var F=us;Ti=!1,us=null}else throw Error(t(198));En||(En=!0,Do=F)}}function wn(n){var r=n,a=n;if(n.alternate)for(;r.return;)r=r.return;else{n=r;do r=n,r.flags&4098&&(a=r.return),n=r.return;while(n)}return r.tag===3?a:null}function Ii(n){if(n.tag===13){var r=n.memoizedState;if(r===null&&(n=n.alternate,n!==null&&(r=n.memoizedState)),r!==null)return r.dehydrated}return null}function Tn(n){if(wn(n)!==n)throw Error(t(188))}function $a(n){var r=n.alternate;if(!r){if(r=wn(n),r===null)throw Error(t(188));return r!==n?null:n}for(var a=n,c=r;;){var d=a.return;if(d===null)break;var p=d.alternate;if(p===null){if(c=d.return,c!==null){a=c;continue}break}if(d.child===p.child){for(p=d.child;p;){if(p===a)return Tn(d),n;if(p===c)return Tn(d),r;p=p.sibling}throw Error(t(188))}if(a.return!==c.return)a=d,c=p;else{for(var _=!1,I=d.child;I;){if(I===a){_=!0,a=d,c=p;break}if(I===c){_=!0,c=d,a=p;break}I=I.sibling}if(!_){for(I=p.child;I;){if(I===a){_=!0,a=p,c=d;break}if(I===c){_=!0,c=p,a=d;break}I=I.sibling}if(!_)throw Error(t(189))}}if(a.alternate!==c)throw Error(t(190))}if(a.tag!==3)throw Error(t(188));return a.stateNode.current===a?n:r}function Vo(n){return n=$a(n),n!==null?hs(n):null}function hs(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var r=hs(n);if(r!==null)return r;n=n.sibling}return null}var ds=e.unstable_scheduleCallback,Oo=e.unstable_cancelCallback,qa=e.unstable_shouldYield,rc=e.unstable_requestPaint,$e=e.unstable_now,Ha=e.unstable_getCurrentPriorityLevel,Si=e.unstable_ImmediatePriority,Pr=e.unstable_UserBlockingPriority,an=e.unstable_NormalPriority,Lo=e.unstable_LowPriority,Wa=e.unstable_IdlePriority,Ai=null,Jt=null;function Ga(n){if(Jt&&typeof Jt.onCommitFiberRoot=="function")try{Jt.onCommitFiberRoot(Ai,n,void 0,(n.current.flags&128)===128)}catch{}}var Ut=Math.clz32?Math.clz32:Qa,Mo=Math.log,Ka=Math.LN2;function Qa(n){return n>>>=0,n===0?32:31-(Mo(n)/Ka|0)|0}var fs=64,ps=4194304;function Nr(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function Ri(n,r){var a=n.pendingLanes;if(a===0)return 0;var c=0,d=n.suspendedLanes,p=n.pingedLanes,_=a&268435455;if(_!==0){var I=_&~d;I!==0?c=Nr(I):(p&=_,p!==0&&(c=Nr(p)))}else _=a&~d,_!==0?c=Nr(_):p!==0&&(c=Nr(p));if(c===0)return 0;if(r!==0&&r!==c&&!(r&d)&&(d=c&-c,p=r&-r,d>=p||d===16&&(p&4194240)!==0))return r;if(c&4&&(c|=a&16),r=n.entangledLanes,r!==0)for(n=n.entanglements,r&=c;0<r;)a=31-Ut(r),d=1<<a,c|=n[a],r&=~d;return c}function ic(n,r){switch(n){case 1:case 2:case 4:return r+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function sr(n,r){for(var a=n.suspendedLanes,c=n.pingedLanes,d=n.expirationTimes,p=n.pendingLanes;0<p;){var _=31-Ut(p),I=1<<_,C=d[_];C===-1?(!(I&a)||I&c)&&(d[_]=ic(I,r)):C<=r&&(n.expiredLanes|=I),p&=~I}}function Zt(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function Ci(){var n=fs;return fs<<=1,!(fs&4194240)&&(fs=64),n}function xr(n){for(var r=[],a=0;31>a;a++)r.push(n);return r}function Dr(n,r,a){n.pendingLanes|=r,r!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,r=31-Ut(r),n[r]=a}function ze(n,r){var a=n.pendingLanes&~r;n.pendingLanes=r,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=r,n.mutableReadLanes&=r,n.entangledLanes&=r,r=n.entanglements;var c=n.eventTimes;for(n=n.expirationTimes;0<a;){var d=31-Ut(a),p=1<<d;r[d]=0,c[d]=-1,n[d]=-1,a&=~p}}function Vr(n,r){var a=n.entangledLanes|=r;for(n=n.entanglements;a;){var c=31-Ut(a),d=1<<c;d&r|n[c]&r&&(n[c]|=r),a&=~d}}var ke=0;function Or(n){return n&=-n,1<n?4<n?n&268435455?16:536870912:4:1}var Xa,ms,Ya,Ja,Za,bo=!1,Fn=[],Tt=null,In=null,Sn=null,Lr=new Map,ln=new Map,Un=[],sc="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function el(n,r){switch(n){case"focusin":case"focusout":Tt=null;break;case"dragenter":case"dragleave":In=null;break;case"mouseover":case"mouseout":Sn=null;break;case"pointerover":case"pointerout":Lr.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":ln.delete(r.pointerId)}}function $t(n,r,a,c,d,p){return n===null||n.nativeEvent!==p?(n={blockedOn:r,domEventName:a,eventSystemFlags:c,nativeEvent:p,targetContainers:[d]},r!==null&&(r=Jo(r),r!==null&&ms(r)),n):(n.eventSystemFlags|=c,r=n.targetContainers,d!==null&&r.indexOf(d)===-1&&r.push(d),n)}function oc(n,r,a,c,d){switch(r){case"focusin":return Tt=$t(Tt,n,r,a,c,d),!0;case"dragenter":return In=$t(In,n,r,a,c,d),!0;case"mouseover":return Sn=$t(Sn,n,r,a,c,d),!0;case"pointerover":var p=d.pointerId;return Lr.set(p,$t(Lr.get(p)||null,n,r,a,c,d)),!0;case"gotpointercapture":return p=d.pointerId,ln.set(p,$t(ln.get(p)||null,n,r,a,c,d)),!0}return!1}function tl(n){var r=Di(n.target);if(r!==null){var a=wn(r);if(a!==null){if(r=a.tag,r===13){if(r=Ii(a),r!==null){n.blockedOn=r,Za(n.priority,function(){Ya(a)});return}}else if(r===3&&a.stateNode.current.memoizedState.isDehydrated){n.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}n.blockedOn=null}function or(n){if(n.blockedOn!==null)return!1;for(var r=n.targetContainers;0<r.length;){var a=gs(n.domEventName,n.eventSystemFlags,r[0],n.nativeEvent);if(a===null){a=n.nativeEvent;var c=new a.constructor(a.type,a);vi=c,a.target.dispatchEvent(c),vi=null}else return r=Jo(a),r!==null&&ms(r),n.blockedOn=a,!1;r.shift()}return!0}function ki(n,r,a){or(n)&&a.delete(r)}function nl(){bo=!1,Tt!==null&&or(Tt)&&(Tt=null),In!==null&&or(In)&&(In=null),Sn!==null&&or(Sn)&&(Sn=null),Lr.forEach(ki),ln.forEach(ki)}function An(n,r){n.blockedOn===r&&(n.blockedOn=null,bo||(bo=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,nl)))}function Rn(n){function r(d){return An(d,n)}if(0<Fn.length){An(Fn[0],n);for(var a=1;a<Fn.length;a++){var c=Fn[a];c.blockedOn===n&&(c.blockedOn=null)}}for(Tt!==null&&An(Tt,n),In!==null&&An(In,n),Sn!==null&&An(Sn,n),Lr.forEach(r),ln.forEach(r),a=0;a<Un.length;a++)c=Un[a],c.blockedOn===n&&(c.blockedOn=null);for(;0<Un.length&&(a=Un[0],a.blockedOn===null);)tl(a),a.blockedOn===null&&Un.shift()}var ar=ge.ReactCurrentBatchConfig,Mr=!0;function Qe(n,r,a,c){var d=ke,p=ar.transition;ar.transition=null;try{ke=1,Fo(n,r,a,c)}finally{ke=d,ar.transition=p}}function ac(n,r,a,c){var d=ke,p=ar.transition;ar.transition=null;try{ke=4,Fo(n,r,a,c)}finally{ke=d,ar.transition=p}}function Fo(n,r,a,c){if(Mr){var d=gs(n,r,a,c);if(d===null)_c(n,r,c,Pi,a),el(n,c);else if(oc(d,n,r,a,c))c.stopPropagation();else if(el(n,c),r&4&&-1<sc.indexOf(n)){for(;d!==null;){var p=Jo(d);if(p!==null&&Xa(p),p=gs(n,r,a,c),p===null&&_c(n,r,c,Pi,a),p===d)break;d=p}d!==null&&c.stopPropagation()}else _c(n,r,c,null,a)}}var Pi=null;function gs(n,r,a,c){if(Pi=null,n=ss(c),n=Di(n),n!==null)if(r=wn(n),r===null)n=null;else if(a=r.tag,a===13){if(n=Ii(r),n!==null)return n;n=null}else if(a===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;n=null}else r!==n&&(n=null);return Pi=n,null}function Uo(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Ha()){case Si:return 1;case Pr:return 4;case an:case Lo:return 16;case Wa:return 536870912;default:return 16}default:return 16}}var en=null,ys=null,qt=null;function jo(){if(qt)return qt;var n,r=ys,a=r.length,c,d="value"in en?en.value:en.textContent,p=d.length;for(n=0;n<a&&r[n]===d[n];n++);var _=a-n;for(c=1;c<=_&&r[a-c]===d[p-c];c++);return qt=d.slice(n,1<c?1-c:void 0)}function _s(n){var r=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&r===13&&(n=13)):n=r,n===10&&(n=13),32<=n||n===13?n:0}function jn(){return!0}function zo(){return!1}function It(n){function r(a,c,d,p,_){this._reactName=a,this._targetInst=d,this.type=c,this.nativeEvent=p,this.target=_,this.currentTarget=null;for(var I in n)n.hasOwnProperty(I)&&(a=n[I],this[I]=a?a(p):p[I]);return this.isDefaultPrevented=(p.defaultPrevented!=null?p.defaultPrevented:p.returnValue===!1)?jn:zo,this.isPropagationStopped=zo,this}return te(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=jn)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=jn)},persist:function(){},isPersistent:jn}),r}var Cn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},vs=It(Cn),zn=te({},Cn,{view:0,detail:0}),lc=It(zn),Es,lr,br,Ni=te({},zn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Bn,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==br&&(br&&n.type==="mousemove"?(Es=n.screenX-br.screenX,lr=n.screenY-br.screenY):lr=Es=0,br=n),Es)},movementY:function(n){return"movementY"in n?n.movementY:lr}}),ws=It(Ni),Bo=te({},Ni,{dataTransfer:0}),rl=It(Bo),Ts=te({},zn,{relatedTarget:0}),Is=It(Ts),il=te({},Cn,{animationName:0,elapsedTime:0,pseudoElement:0}),ur=It(il),sl=te({},Cn,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),ol=It(sl),al=te({},Cn,{data:0}),$o=It(al),Ss={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},jt={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ll={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ul(n){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(n):(n=ll[n])?!!r[n]:!1}function Bn(){return ul}var l=te({},zn,{key:function(n){if(n.key){var r=Ss[n.key]||n.key;if(r!=="Unidentified")return r}return n.type==="keypress"?(n=_s(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?jt[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Bn,charCode:function(n){return n.type==="keypress"?_s(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?_s(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),f=It(l),y=te({},Ni,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),E=It(y),O=te({},zn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Bn}),U=It(O),J=te({},Cn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ue=It(J),ct=te({},Ni,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),xe=It(ct),gt=[9,13,27,32],it=m&&"CompositionEvent"in window,un=null;m&&"documentMode"in document&&(un=document.documentMode);var tn=m&&"TextEvent"in window&&!un,xi=m&&(!it||un&&8<un&&11>=un),As=" ",of=!1;function af(n,r){switch(n){case"keyup":return gt.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function lf(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Rs=!1;function X_(n,r){switch(n){case"compositionend":return lf(r);case"keypress":return r.which!==32?null:(of=!0,As);case"textInput":return n=r.data,n===As&&of?null:n;default:return null}}function Y_(n,r){if(Rs)return n==="compositionend"||!it&&af(n,r)?(n=jo(),qt=ys=en=null,Rs=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return xi&&r.locale!=="ko"?null:r.data;default:return null}}var J_={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function uf(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r==="input"?!!J_[n.type]:r==="textarea"}function cf(n,r,a,c){bn(c),r=pl(r,"onChange"),0<r.length&&(a=new vs("onChange","change",null,a,c),n.push({event:a,listeners:r}))}var qo=null,Ho=null;function Z_(n){kf(n,0)}function cl(n){var r=xs(n);if(es(r))return n}function ev(n,r){if(n==="change")return r}var hf=!1;if(m){var uc;if(m){var cc="oninput"in document;if(!cc){var df=document.createElement("div");df.setAttribute("oninput","return;"),cc=typeof df.oninput=="function"}uc=cc}else uc=!1;hf=uc&&(!document.documentMode||9<document.documentMode)}function ff(){qo&&(qo.detachEvent("onpropertychange",pf),Ho=qo=null)}function pf(n){if(n.propertyName==="value"&&cl(Ho)){var r=[];cf(r,Ho,n,ss(n)),xo(Z_,r)}}function tv(n,r,a){n==="focusin"?(ff(),qo=r,Ho=a,qo.attachEvent("onpropertychange",pf)):n==="focusout"&&ff()}function nv(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return cl(Ho)}function rv(n,r){if(n==="click")return cl(r)}function iv(n,r){if(n==="input"||n==="change")return cl(r)}function sv(n,r){return n===r&&(n!==0||1/n===1/r)||n!==n&&r!==r}var kn=typeof Object.is=="function"?Object.is:sv;function Wo(n,r){if(kn(n,r))return!0;if(typeof n!="object"||n===null||typeof r!="object"||r===null)return!1;var a=Object.keys(n),c=Object.keys(r);if(a.length!==c.length)return!1;for(c=0;c<a.length;c++){var d=a[c];if(!g.call(r,d)||!kn(n[d],r[d]))return!1}return!0}function mf(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function gf(n,r){var a=mf(n);n=0;for(var c;a;){if(a.nodeType===3){if(c=n+a.textContent.length,n<=r&&c>=r)return{node:a,offset:r-n};n=c}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=mf(a)}}function yf(n,r){return n&&r?n===r?!0:n&&n.nodeType===3?!1:r&&r.nodeType===3?yf(n,r.parentNode):"contains"in n?n.contains(r):n.compareDocumentPosition?!!(n.compareDocumentPosition(r)&16):!1:!1}function _f(){for(var n=window,r=Cr();r instanceof n.HTMLIFrameElement;){try{var a=typeof r.contentWindow.location.href=="string"}catch{a=!1}if(a)n=r.contentWindow;else break;r=Cr(n.document)}return r}function hc(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r&&(r==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||r==="textarea"||n.contentEditable==="true")}function ov(n){var r=_f(),a=n.focusedElem,c=n.selectionRange;if(r!==a&&a&&a.ownerDocument&&yf(a.ownerDocument.documentElement,a)){if(c!==null&&hc(a)){if(r=c.start,n=c.end,n===void 0&&(n=r),"selectionStart"in a)a.selectionStart=r,a.selectionEnd=Math.min(n,a.value.length);else if(n=(r=a.ownerDocument||document)&&r.defaultView||window,n.getSelection){n=n.getSelection();var d=a.textContent.length,p=Math.min(c.start,d);c=c.end===void 0?p:Math.min(c.end,d),!n.extend&&p>c&&(d=c,c=p,p=d),d=gf(a,p);var _=gf(a,c);d&&_&&(n.rangeCount!==1||n.anchorNode!==d.node||n.anchorOffset!==d.offset||n.focusNode!==_.node||n.focusOffset!==_.offset)&&(r=r.createRange(),r.setStart(d.node,d.offset),n.removeAllRanges(),p>c?(n.addRange(r),n.extend(_.node,_.offset)):(r.setEnd(_.node,_.offset),n.addRange(r)))}}for(r=[],n=a;n=n.parentNode;)n.nodeType===1&&r.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<r.length;a++)n=r[a],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var av=m&&"documentMode"in document&&11>=document.documentMode,Cs=null,dc=null,Go=null,fc=!1;function vf(n,r,a){var c=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;fc||Cs==null||Cs!==Cr(c)||(c=Cs,"selectionStart"in c&&hc(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),Go&&Wo(Go,c)||(Go=c,c=pl(dc,"onSelect"),0<c.length&&(r=new vs("onSelect","select",null,r,a),n.push({event:r,listeners:c}),r.target=Cs)))}function hl(n,r){var a={};return a[n.toLowerCase()]=r.toLowerCase(),a["Webkit"+n]="webkit"+r,a["Moz"+n]="moz"+r,a}var ks={animationend:hl("Animation","AnimationEnd"),animationiteration:hl("Animation","AnimationIteration"),animationstart:hl("Animation","AnimationStart"),transitionend:hl("Transition","TransitionEnd")},pc={},Ef={};m&&(Ef=document.createElement("div").style,"AnimationEvent"in window||(delete ks.animationend.animation,delete ks.animationiteration.animation,delete ks.animationstart.animation),"TransitionEvent"in window||delete ks.transitionend.transition);function dl(n){if(pc[n])return pc[n];if(!ks[n])return n;var r=ks[n],a;for(a in r)if(r.hasOwnProperty(a)&&a in Ef)return pc[n]=r[a];return n}var wf=dl("animationend"),Tf=dl("animationiteration"),If=dl("animationstart"),Sf=dl("transitionend"),Af=new Map,Rf="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Fr(n,r){Af.set(n,r),u(r,[n])}for(var mc=0;mc<Rf.length;mc++){var gc=Rf[mc],lv=gc.toLowerCase(),uv=gc[0].toUpperCase()+gc.slice(1);Fr(lv,"on"+uv)}Fr(wf,"onAnimationEnd"),Fr(Tf,"onAnimationIteration"),Fr(If,"onAnimationStart"),Fr("dblclick","onDoubleClick"),Fr("focusin","onFocus"),Fr("focusout","onBlur"),Fr(Sf,"onTransitionEnd"),h("onMouseEnter",["mouseout","mouseover"]),h("onMouseLeave",["mouseout","mouseover"]),h("onPointerEnter",["pointerout","pointerover"]),h("onPointerLeave",["pointerout","pointerover"]),u("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),u("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),u("onBeforeInput",["compositionend","keypress","textInput","paste"]),u("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ko="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),cv=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ko));function Cf(n,r,a){var c=n.type||"unknown-event";n.currentTarget=a,Ba(c,r,void 0,n),n.currentTarget=null}function kf(n,r){r=(r&4)!==0;for(var a=0;a<n.length;a++){var c=n[a],d=c.event;c=c.listeners;e:{var p=void 0;if(r)for(var _=c.length-1;0<=_;_--){var I=c[_],C=I.instance,F=I.currentTarget;if(I=I.listener,C!==p&&d.isPropagationStopped())break e;Cf(d,I,F),p=C}else for(_=0;_<c.length;_++){if(I=c[_],C=I.instance,F=I.currentTarget,I=I.listener,C!==p&&d.isPropagationStopped())break e;Cf(d,I,F),p=C}}}if(En)throw n=Do,En=!1,Do=null,n}function We(n,r){var a=r[Sc];a===void 0&&(a=r[Sc]=new Set);var c=n+"__bubble";a.has(c)||(Pf(r,n,2,!1),a.add(c))}function yc(n,r,a){var c=0;r&&(c|=4),Pf(a,n,c,r)}var fl="_reactListening"+Math.random().toString(36).slice(2);function Qo(n){if(!n[fl]){n[fl]=!0,s.forEach(function(a){a!=="selectionchange"&&(cv.has(a)||yc(a,!1,n),yc(a,!0,n))});var r=n.nodeType===9?n:n.ownerDocument;r===null||r[fl]||(r[fl]=!0,yc("selectionchange",!1,r))}}function Pf(n,r,a,c){switch(Uo(r)){case 1:var d=Qe;break;case 4:d=ac;break;default:d=Fo}a=d.bind(null,r,a,n),d=void 0,!ls||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(d=!0),c?d!==void 0?n.addEventListener(r,a,{capture:!0,passive:d}):n.addEventListener(r,a,!0):d!==void 0?n.addEventListener(r,a,{passive:d}):n.addEventListener(r,a,!1)}function _c(n,r,a,c,d){var p=c;if(!(r&1)&&!(r&2)&&c!==null)e:for(;;){if(c===null)return;var _=c.tag;if(_===3||_===4){var I=c.stateNode.containerInfo;if(I===d||I.nodeType===8&&I.parentNode===d)break;if(_===4)for(_=c.return;_!==null;){var C=_.tag;if((C===3||C===4)&&(C=_.stateNode.containerInfo,C===d||C.nodeType===8&&C.parentNode===d))return;_=_.return}for(;I!==null;){if(_=Di(I),_===null)return;if(C=_.tag,C===5||C===6){c=p=_;continue e}I=I.parentNode}}c=c.return}xo(function(){var F=p,Q=ss(a),X=[];e:{var K=Af.get(n);if(K!==void 0){var ee=vs,ie=n;switch(n){case"keypress":if(_s(a)===0)break e;case"keydown":case"keyup":ee=f;break;case"focusin":ie="focus",ee=Is;break;case"focusout":ie="blur",ee=Is;break;case"beforeblur":case"afterblur":ee=Is;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ee=ws;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ee=rl;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ee=U;break;case wf:case Tf:case If:ee=ur;break;case Sf:ee=Ue;break;case"scroll":ee=lc;break;case"wheel":ee=xe;break;case"copy":case"cut":case"paste":ee=ol;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ee=E}var oe=(r&4)!==0,nt=!oe&&n==="scroll",L=oe?K!==null?K+"Capture":null:K;oe=[];for(var N=F,b;N!==null;){b=N;var Y=b.stateNode;if(b.tag===5&&Y!==null&&(b=Y,L!==null&&(Y=tt(N,L),Y!=null&&oe.push(Xo(N,Y,b)))),nt)break;N=N.return}0<oe.length&&(K=new ee(K,ie,null,a,Q),X.push({event:K,listeners:oe}))}}if(!(r&7)){e:{if(K=n==="mouseover"||n==="pointerover",ee=n==="mouseout"||n==="pointerout",K&&a!==vi&&(ie=a.relatedTarget||a.fromElement)&&(Di(ie)||ie[cr]))break e;if((ee||K)&&(K=Q.window===Q?Q:(K=Q.ownerDocument)?K.defaultView||K.parentWindow:window,ee?(ie=a.relatedTarget||a.toElement,ee=F,ie=ie?Di(ie):null,ie!==null&&(nt=wn(ie),ie!==nt||ie.tag!==5&&ie.tag!==6)&&(ie=null)):(ee=null,ie=F),ee!==ie)){if(oe=ws,Y="onMouseLeave",L="onMouseEnter",N="mouse",(n==="pointerout"||n==="pointerover")&&(oe=E,Y="onPointerLeave",L="onPointerEnter",N="pointer"),nt=ee==null?K:xs(ee),b=ie==null?K:xs(ie),K=new oe(Y,N+"leave",ee,a,Q),K.target=nt,K.relatedTarget=b,Y=null,Di(Q)===F&&(oe=new oe(L,N+"enter",ie,a,Q),oe.target=b,oe.relatedTarget=nt,Y=oe),nt=Y,ee&&ie)t:{for(oe=ee,L=ie,N=0,b=oe;b;b=Ps(b))N++;for(b=0,Y=L;Y;Y=Ps(Y))b++;for(;0<N-b;)oe=Ps(oe),N--;for(;0<b-N;)L=Ps(L),b--;for(;N--;){if(oe===L||L!==null&&oe===L.alternate)break t;oe=Ps(oe),L=Ps(L)}oe=null}else oe=null;ee!==null&&Nf(X,K,ee,oe,!1),ie!==null&&nt!==null&&Nf(X,nt,ie,oe,!0)}}e:{if(K=F?xs(F):window,ee=K.nodeName&&K.nodeName.toLowerCase(),ee==="select"||ee==="input"&&K.type==="file")var le=ev;else if(uf(K))if(hf)le=iv;else{le=nv;var pe=tv}else(ee=K.nodeName)&&ee.toLowerCase()==="input"&&(K.type==="checkbox"||K.type==="radio")&&(le=rv);if(le&&(le=le(n,F))){cf(X,le,a,Q);break e}pe&&pe(n,K,F),n==="focusout"&&(pe=K._wrapperState)&&pe.controlled&&K.type==="number"&&ns(K,"number",K.value)}switch(pe=F?xs(F):window,n){case"focusin":(uf(pe)||pe.contentEditable==="true")&&(Cs=pe,dc=F,Go=null);break;case"focusout":Go=dc=Cs=null;break;case"mousedown":fc=!0;break;case"contextmenu":case"mouseup":case"dragend":fc=!1,vf(X,a,Q);break;case"selectionchange":if(av)break;case"keydown":case"keyup":vf(X,a,Q)}var me;if(it)e:{switch(n){case"compositionstart":var _e="onCompositionStart";break e;case"compositionend":_e="onCompositionEnd";break e;case"compositionupdate":_e="onCompositionUpdate";break e}_e=void 0}else Rs?af(n,a)&&(_e="onCompositionEnd"):n==="keydown"&&a.keyCode===229&&(_e="onCompositionStart");_e&&(xi&&a.locale!=="ko"&&(Rs||_e!=="onCompositionStart"?_e==="onCompositionEnd"&&Rs&&(me=jo()):(en=Q,ys="value"in en?en.value:en.textContent,Rs=!0)),pe=pl(F,_e),0<pe.length&&(_e=new $o(_e,n,null,a,Q),X.push({event:_e,listeners:pe}),me?_e.data=me:(me=lf(a),me!==null&&(_e.data=me)))),(me=tn?X_(n,a):Y_(n,a))&&(F=pl(F,"onBeforeInput"),0<F.length&&(Q=new $o("onBeforeInput","beforeinput",null,a,Q),X.push({event:Q,listeners:F}),Q.data=me))}kf(X,r)})}function Xo(n,r,a){return{instance:n,listener:r,currentTarget:a}}function pl(n,r){for(var a=r+"Capture",c=[];n!==null;){var d=n,p=d.stateNode;d.tag===5&&p!==null&&(d=p,p=tt(n,a),p!=null&&c.unshift(Xo(n,p,d)),p=tt(n,r),p!=null&&c.push(Xo(n,p,d))),n=n.return}return c}function Ps(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function Nf(n,r,a,c,d){for(var p=r._reactName,_=[];a!==null&&a!==c;){var I=a,C=I.alternate,F=I.stateNode;if(C!==null&&C===c)break;I.tag===5&&F!==null&&(I=F,d?(C=tt(a,p),C!=null&&_.unshift(Xo(a,C,I))):d||(C=tt(a,p),C!=null&&_.push(Xo(a,C,I)))),a=a.return}_.length!==0&&n.push({event:r,listeners:_})}var hv=/\r\n?/g,dv=/\u0000|\uFFFD/g;function xf(n){return(typeof n=="string"?n:""+n).replace(hv,`
`).replace(dv,"")}function ml(n,r,a){if(r=xf(r),xf(n)!==r&&a)throw Error(t(425))}function gl(){}var vc=null,Ec=null;function wc(n,r){return n==="textarea"||n==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var Tc=typeof setTimeout=="function"?setTimeout:void 0,fv=typeof clearTimeout=="function"?clearTimeout:void 0,Df=typeof Promise=="function"?Promise:void 0,pv=typeof queueMicrotask=="function"?queueMicrotask:typeof Df<"u"?function(n){return Df.resolve(null).then(n).catch(mv)}:Tc;function mv(n){setTimeout(function(){throw n})}function Ic(n,r){var a=r,c=0;do{var d=a.nextSibling;if(n.removeChild(a),d&&d.nodeType===8)if(a=d.data,a==="/$"){if(c===0){n.removeChild(d),Rn(r);return}c--}else a!=="$"&&a!=="$?"&&a!=="$!"||c++;a=d}while(a);Rn(r)}function Ur(n){for(;n!=null;n=n.nextSibling){var r=n.nodeType;if(r===1||r===3)break;if(r===8){if(r=n.data,r==="$"||r==="$!"||r==="$?")break;if(r==="/$")return null}}return n}function Vf(n){n=n.previousSibling;for(var r=0;n;){if(n.nodeType===8){var a=n.data;if(a==="$"||a==="$!"||a==="$?"){if(r===0)return n;r--}else a==="/$"&&r++}n=n.previousSibling}return null}var Ns=Math.random().toString(36).slice(2),$n="__reactFiber$"+Ns,Yo="__reactProps$"+Ns,cr="__reactContainer$"+Ns,Sc="__reactEvents$"+Ns,gv="__reactListeners$"+Ns,yv="__reactHandles$"+Ns;function Di(n){var r=n[$n];if(r)return r;for(var a=n.parentNode;a;){if(r=a[cr]||a[$n]){if(a=r.alternate,r.child!==null||a!==null&&a.child!==null)for(n=Vf(n);n!==null;){if(a=n[$n])return a;n=Vf(n)}return r}n=a,a=n.parentNode}return null}function Jo(n){return n=n[$n]||n[cr],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function xs(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function yl(n){return n[Yo]||null}var Ac=[],Ds=-1;function jr(n){return{current:n}}function Ge(n){0>Ds||(n.current=Ac[Ds],Ac[Ds]=null,Ds--)}function qe(n,r){Ds++,Ac[Ds]=n.current,n.current=r}var zr={},xt=jr(zr),Ht=jr(!1),Vi=zr;function Vs(n,r){var a=n.type.contextTypes;if(!a)return zr;var c=n.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===r)return c.__reactInternalMemoizedMaskedChildContext;var d={},p;for(p in a)d[p]=r[p];return c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=r,n.__reactInternalMemoizedMaskedChildContext=d),d}function Wt(n){return n=n.childContextTypes,n!=null}function _l(){Ge(Ht),Ge(xt)}function Of(n,r,a){if(xt.current!==zr)throw Error(t(168));qe(xt,r),qe(Ht,a)}function Lf(n,r,a){var c=n.stateNode;if(r=r.childContextTypes,typeof c.getChildContext!="function")return a;c=c.getChildContext();for(var d in c)if(!(d in r))throw Error(t(108,Me(n)||"Unknown",d));return te({},a,c)}function vl(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||zr,Vi=xt.current,qe(xt,n),qe(Ht,Ht.current),!0}function Mf(n,r,a){var c=n.stateNode;if(!c)throw Error(t(169));a?(n=Lf(n,r,Vi),c.__reactInternalMemoizedMergedChildContext=n,Ge(Ht),Ge(xt),qe(xt,n)):Ge(Ht),qe(Ht,a)}var hr=null,El=!1,Rc=!1;function bf(n){hr===null?hr=[n]:hr.push(n)}function _v(n){El=!0,bf(n)}function Br(){if(!Rc&&hr!==null){Rc=!0;var n=0,r=ke;try{var a=hr;for(ke=1;n<a.length;n++){var c=a[n];do c=c(!0);while(c!==null)}hr=null,El=!1}catch(d){throw hr!==null&&(hr=hr.slice(n+1)),ds(Si,Br),d}finally{ke=r,Rc=!1}}return null}var Os=[],Ls=0,wl=null,Tl=0,cn=[],hn=0,Oi=null,dr=1,fr="";function Li(n,r){Os[Ls++]=Tl,Os[Ls++]=wl,wl=n,Tl=r}function Ff(n,r,a){cn[hn++]=dr,cn[hn++]=fr,cn[hn++]=Oi,Oi=n;var c=dr;n=fr;var d=32-Ut(c)-1;c&=~(1<<d),a+=1;var p=32-Ut(r)+d;if(30<p){var _=d-d%5;p=(c&(1<<_)-1).toString(32),c>>=_,d-=_,dr=1<<32-Ut(r)+d|a<<d|c,fr=p+n}else dr=1<<p|a<<d|c,fr=n}function Cc(n){n.return!==null&&(Li(n,1),Ff(n,1,0))}function kc(n){for(;n===wl;)wl=Os[--Ls],Os[Ls]=null,Tl=Os[--Ls],Os[Ls]=null;for(;n===Oi;)Oi=cn[--hn],cn[hn]=null,fr=cn[--hn],cn[hn]=null,dr=cn[--hn],cn[hn]=null}var nn=null,rn=null,Xe=!1,Pn=null;function Uf(n,r){var a=mn(5,null,null,0);a.elementType="DELETED",a.stateNode=r,a.return=n,r=n.deletions,r===null?(n.deletions=[a],n.flags|=16):r.push(a)}function jf(n,r){switch(n.tag){case 5:var a=n.type;return r=r.nodeType!==1||a.toLowerCase()!==r.nodeName.toLowerCase()?null:r,r!==null?(n.stateNode=r,nn=n,rn=Ur(r.firstChild),!0):!1;case 6:return r=n.pendingProps===""||r.nodeType!==3?null:r,r!==null?(n.stateNode=r,nn=n,rn=null,!0):!1;case 13:return r=r.nodeType!==8?null:r,r!==null?(a=Oi!==null?{id:dr,overflow:fr}:null,n.memoizedState={dehydrated:r,treeContext:a,retryLane:1073741824},a=mn(18,null,null,0),a.stateNode=r,a.return=n,n.child=a,nn=n,rn=null,!0):!1;default:return!1}}function Pc(n){return(n.mode&1)!==0&&(n.flags&128)===0}function Nc(n){if(Xe){var r=rn;if(r){var a=r;if(!jf(n,r)){if(Pc(n))throw Error(t(418));r=Ur(a.nextSibling);var c=nn;r&&jf(n,r)?Uf(c,a):(n.flags=n.flags&-4097|2,Xe=!1,nn=n)}}else{if(Pc(n))throw Error(t(418));n.flags=n.flags&-4097|2,Xe=!1,nn=n}}}function zf(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;nn=n}function Il(n){if(n!==nn)return!1;if(!Xe)return zf(n),Xe=!0,!1;var r;if((r=n.tag!==3)&&!(r=n.tag!==5)&&(r=n.type,r=r!=="head"&&r!=="body"&&!wc(n.type,n.memoizedProps)),r&&(r=rn)){if(Pc(n))throw Bf(),Error(t(418));for(;r;)Uf(n,r),r=Ur(r.nextSibling)}if(zf(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,r=0;n;){if(n.nodeType===8){var a=n.data;if(a==="/$"){if(r===0){rn=Ur(n.nextSibling);break e}r--}else a!=="$"&&a!=="$!"&&a!=="$?"||r++}n=n.nextSibling}rn=null}}else rn=nn?Ur(n.stateNode.nextSibling):null;return!0}function Bf(){for(var n=rn;n;)n=Ur(n.nextSibling)}function Ms(){rn=nn=null,Xe=!1}function xc(n){Pn===null?Pn=[n]:Pn.push(n)}var vv=ge.ReactCurrentBatchConfig;function Zo(n,r,a){if(n=a.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(t(309));var c=a.stateNode}if(!c)throw Error(t(147,n));var d=c,p=""+n;return r!==null&&r.ref!==null&&typeof r.ref=="function"&&r.ref._stringRef===p?r.ref:(r=function(_){var I=d.refs;_===null?delete I[p]:I[p]=_},r._stringRef=p,r)}if(typeof n!="string")throw Error(t(284));if(!a._owner)throw Error(t(290,n))}return n}function Sl(n,r){throw n=Object.prototype.toString.call(r),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":n))}function $f(n){var r=n._init;return r(n._payload)}function qf(n){function r(L,N){if(n){var b=L.deletions;b===null?(L.deletions=[N],L.flags|=16):b.push(N)}}function a(L,N){if(!n)return null;for(;N!==null;)r(L,N),N=N.sibling;return null}function c(L,N){for(L=new Map;N!==null;)N.key!==null?L.set(N.key,N):L.set(N.index,N),N=N.sibling;return L}function d(L,N){return L=Xr(L,N),L.index=0,L.sibling=null,L}function p(L,N,b){return L.index=b,n?(b=L.alternate,b!==null?(b=b.index,b<N?(L.flags|=2,N):b):(L.flags|=2,N)):(L.flags|=1048576,N)}function _(L){return n&&L.alternate===null&&(L.flags|=2),L}function I(L,N,b,Y){return N===null||N.tag!==6?(N=Th(b,L.mode,Y),N.return=L,N):(N=d(N,b),N.return=L,N)}function C(L,N,b,Y){var le=b.type;return le===R?Q(L,N,b.props.children,Y,b.key):N!==null&&(N.elementType===le||typeof le=="object"&&le!==null&&le.$$typeof===Nt&&$f(le)===N.type)?(Y=d(N,b.props),Y.ref=Zo(L,N,b),Y.return=L,Y):(Y=Kl(b.type,b.key,b.props,null,L.mode,Y),Y.ref=Zo(L,N,b),Y.return=L,Y)}function F(L,N,b,Y){return N===null||N.tag!==4||N.stateNode.containerInfo!==b.containerInfo||N.stateNode.implementation!==b.implementation?(N=Ih(b,L.mode,Y),N.return=L,N):(N=d(N,b.children||[]),N.return=L,N)}function Q(L,N,b,Y,le){return N===null||N.tag!==7?(N=$i(b,L.mode,Y,le),N.return=L,N):(N=d(N,b),N.return=L,N)}function X(L,N,b){if(typeof N=="string"&&N!==""||typeof N=="number")return N=Th(""+N,L.mode,b),N.return=L,N;if(typeof N=="object"&&N!==null){switch(N.$$typeof){case Oe:return b=Kl(N.type,N.key,N.props,null,L.mode,b),b.ref=Zo(L,null,N),b.return=L,b;case ye:return N=Ih(N,L.mode,b),N.return=L,N;case Nt:var Y=N._init;return X(L,Y(N._payload),b)}if(tr(N)||fe(N))return N=$i(N,L.mode,b,null),N.return=L,N;Sl(L,N)}return null}function K(L,N,b,Y){var le=N!==null?N.key:null;if(typeof b=="string"&&b!==""||typeof b=="number")return le!==null?null:I(L,N,""+b,Y);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case Oe:return b.key===le?C(L,N,b,Y):null;case ye:return b.key===le?F(L,N,b,Y):null;case Nt:return le=b._init,K(L,N,le(b._payload),Y)}if(tr(b)||fe(b))return le!==null?null:Q(L,N,b,Y,null);Sl(L,b)}return null}function ee(L,N,b,Y,le){if(typeof Y=="string"&&Y!==""||typeof Y=="number")return L=L.get(b)||null,I(N,L,""+Y,le);if(typeof Y=="object"&&Y!==null){switch(Y.$$typeof){case Oe:return L=L.get(Y.key===null?b:Y.key)||null,C(N,L,Y,le);case ye:return L=L.get(Y.key===null?b:Y.key)||null,F(N,L,Y,le);case Nt:var pe=Y._init;return ee(L,N,b,pe(Y._payload),le)}if(tr(Y)||fe(Y))return L=L.get(b)||null,Q(N,L,Y,le,null);Sl(N,Y)}return null}function ie(L,N,b,Y){for(var le=null,pe=null,me=N,_e=N=0,vt=null;me!==null&&_e<b.length;_e++){me.index>_e?(vt=me,me=null):vt=me.sibling;var Le=K(L,me,b[_e],Y);if(Le===null){me===null&&(me=vt);break}n&&me&&Le.alternate===null&&r(L,me),N=p(Le,N,_e),pe===null?le=Le:pe.sibling=Le,pe=Le,me=vt}if(_e===b.length)return a(L,me),Xe&&Li(L,_e),le;if(me===null){for(;_e<b.length;_e++)me=X(L,b[_e],Y),me!==null&&(N=p(me,N,_e),pe===null?le=me:pe.sibling=me,pe=me);return Xe&&Li(L,_e),le}for(me=c(L,me);_e<b.length;_e++)vt=ee(me,L,_e,b[_e],Y),vt!==null&&(n&&vt.alternate!==null&&me.delete(vt.key===null?_e:vt.key),N=p(vt,N,_e),pe===null?le=vt:pe.sibling=vt,pe=vt);return n&&me.forEach(function(Yr){return r(L,Yr)}),Xe&&Li(L,_e),le}function oe(L,N,b,Y){var le=fe(b);if(typeof le!="function")throw Error(t(150));if(b=le.call(b),b==null)throw Error(t(151));for(var pe=le=null,me=N,_e=N=0,vt=null,Le=b.next();me!==null&&!Le.done;_e++,Le=b.next()){me.index>_e?(vt=me,me=null):vt=me.sibling;var Yr=K(L,me,Le.value,Y);if(Yr===null){me===null&&(me=vt);break}n&&me&&Yr.alternate===null&&r(L,me),N=p(Yr,N,_e),pe===null?le=Yr:pe.sibling=Yr,pe=Yr,me=vt}if(Le.done)return a(L,me),Xe&&Li(L,_e),le;if(me===null){for(;!Le.done;_e++,Le=b.next())Le=X(L,Le.value,Y),Le!==null&&(N=p(Le,N,_e),pe===null?le=Le:pe.sibling=Le,pe=Le);return Xe&&Li(L,_e),le}for(me=c(L,me);!Le.done;_e++,Le=b.next())Le=ee(me,L,_e,Le.value,Y),Le!==null&&(n&&Le.alternate!==null&&me.delete(Le.key===null?_e:Le.key),N=p(Le,N,_e),pe===null?le=Le:pe.sibling=Le,pe=Le);return n&&me.forEach(function(Yv){return r(L,Yv)}),Xe&&Li(L,_e),le}function nt(L,N,b,Y){if(typeof b=="object"&&b!==null&&b.type===R&&b.key===null&&(b=b.props.children),typeof b=="object"&&b!==null){switch(b.$$typeof){case Oe:e:{for(var le=b.key,pe=N;pe!==null;){if(pe.key===le){if(le=b.type,le===R){if(pe.tag===7){a(L,pe.sibling),N=d(pe,b.props.children),N.return=L,L=N;break e}}else if(pe.elementType===le||typeof le=="object"&&le!==null&&le.$$typeof===Nt&&$f(le)===pe.type){a(L,pe.sibling),N=d(pe,b.props),N.ref=Zo(L,pe,b),N.return=L,L=N;break e}a(L,pe);break}else r(L,pe);pe=pe.sibling}b.type===R?(N=$i(b.props.children,L.mode,Y,b.key),N.return=L,L=N):(Y=Kl(b.type,b.key,b.props,null,L.mode,Y),Y.ref=Zo(L,N,b),Y.return=L,L=Y)}return _(L);case ye:e:{for(pe=b.key;N!==null;){if(N.key===pe)if(N.tag===4&&N.stateNode.containerInfo===b.containerInfo&&N.stateNode.implementation===b.implementation){a(L,N.sibling),N=d(N,b.children||[]),N.return=L,L=N;break e}else{a(L,N);break}else r(L,N);N=N.sibling}N=Ih(b,L.mode,Y),N.return=L,L=N}return _(L);case Nt:return pe=b._init,nt(L,N,pe(b._payload),Y)}if(tr(b))return ie(L,N,b,Y);if(fe(b))return oe(L,N,b,Y);Sl(L,b)}return typeof b=="string"&&b!==""||typeof b=="number"?(b=""+b,N!==null&&N.tag===6?(a(L,N.sibling),N=d(N,b),N.return=L,L=N):(a(L,N),N=Th(b,L.mode,Y),N.return=L,L=N),_(L)):a(L,N)}return nt}var bs=qf(!0),Hf=qf(!1),Al=jr(null),Rl=null,Fs=null,Dc=null;function Vc(){Dc=Fs=Rl=null}function Oc(n){var r=Al.current;Ge(Al),n._currentValue=r}function Lc(n,r,a){for(;n!==null;){var c=n.alternate;if((n.childLanes&r)!==r?(n.childLanes|=r,c!==null&&(c.childLanes|=r)):c!==null&&(c.childLanes&r)!==r&&(c.childLanes|=r),n===a)break;n=n.return}}function Us(n,r){Rl=n,Dc=Fs=null,n=n.dependencies,n!==null&&n.firstContext!==null&&(n.lanes&r&&(Gt=!0),n.firstContext=null)}function dn(n){var r=n._currentValue;if(Dc!==n)if(n={context:n,memoizedValue:r,next:null},Fs===null){if(Rl===null)throw Error(t(308));Fs=n,Rl.dependencies={lanes:0,firstContext:n}}else Fs=Fs.next=n;return r}var Mi=null;function Mc(n){Mi===null?Mi=[n]:Mi.push(n)}function Wf(n,r,a,c){var d=r.interleaved;return d===null?(a.next=a,Mc(r)):(a.next=d.next,d.next=a),r.interleaved=a,pr(n,c)}function pr(n,r){n.lanes|=r;var a=n.alternate;for(a!==null&&(a.lanes|=r),a=n,n=n.return;n!==null;)n.childLanes|=r,a=n.alternate,a!==null&&(a.childLanes|=r),a=n,n=n.return;return a.tag===3?a.stateNode:null}var $r=!1;function bc(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Gf(n,r){n=n.updateQueue,r.updateQueue===n&&(r.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function mr(n,r){return{eventTime:n,lane:r,tag:0,payload:null,callback:null,next:null}}function qr(n,r,a){var c=n.updateQueue;if(c===null)return null;if(c=c.shared,Ve&2){var d=c.pending;return d===null?r.next=r:(r.next=d.next,d.next=r),c.pending=r,pr(n,a)}return d=c.interleaved,d===null?(r.next=r,Mc(c)):(r.next=d.next,d.next=r),c.interleaved=r,pr(n,a)}function Cl(n,r,a){if(r=r.updateQueue,r!==null&&(r=r.shared,(a&4194240)!==0)){var c=r.lanes;c&=n.pendingLanes,a|=c,r.lanes=a,Vr(n,a)}}function Kf(n,r){var a=n.updateQueue,c=n.alternate;if(c!==null&&(c=c.updateQueue,a===c)){var d=null,p=null;if(a=a.firstBaseUpdate,a!==null){do{var _={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};p===null?d=p=_:p=p.next=_,a=a.next}while(a!==null);p===null?d=p=r:p=p.next=r}else d=p=r;a={baseState:c.baseState,firstBaseUpdate:d,lastBaseUpdate:p,shared:c.shared,effects:c.effects},n.updateQueue=a;return}n=a.lastBaseUpdate,n===null?a.firstBaseUpdate=r:n.next=r,a.lastBaseUpdate=r}function kl(n,r,a,c){var d=n.updateQueue;$r=!1;var p=d.firstBaseUpdate,_=d.lastBaseUpdate,I=d.shared.pending;if(I!==null){d.shared.pending=null;var C=I,F=C.next;C.next=null,_===null?p=F:_.next=F,_=C;var Q=n.alternate;Q!==null&&(Q=Q.updateQueue,I=Q.lastBaseUpdate,I!==_&&(I===null?Q.firstBaseUpdate=F:I.next=F,Q.lastBaseUpdate=C))}if(p!==null){var X=d.baseState;_=0,Q=F=C=null,I=p;do{var K=I.lane,ee=I.eventTime;if((c&K)===K){Q!==null&&(Q=Q.next={eventTime:ee,lane:0,tag:I.tag,payload:I.payload,callback:I.callback,next:null});e:{var ie=n,oe=I;switch(K=r,ee=a,oe.tag){case 1:if(ie=oe.payload,typeof ie=="function"){X=ie.call(ee,X,K);break e}X=ie;break e;case 3:ie.flags=ie.flags&-65537|128;case 0:if(ie=oe.payload,K=typeof ie=="function"?ie.call(ee,X,K):ie,K==null)break e;X=te({},X,K);break e;case 2:$r=!0}}I.callback!==null&&I.lane!==0&&(n.flags|=64,K=d.effects,K===null?d.effects=[I]:K.push(I))}else ee={eventTime:ee,lane:K,tag:I.tag,payload:I.payload,callback:I.callback,next:null},Q===null?(F=Q=ee,C=X):Q=Q.next=ee,_|=K;if(I=I.next,I===null){if(I=d.shared.pending,I===null)break;K=I,I=K.next,K.next=null,d.lastBaseUpdate=K,d.shared.pending=null}}while(!0);if(Q===null&&(C=X),d.baseState=C,d.firstBaseUpdate=F,d.lastBaseUpdate=Q,r=d.shared.interleaved,r!==null){d=r;do _|=d.lane,d=d.next;while(d!==r)}else p===null&&(d.shared.lanes=0);Ui|=_,n.lanes=_,n.memoizedState=X}}function Qf(n,r,a){if(n=r.effects,r.effects=null,n!==null)for(r=0;r<n.length;r++){var c=n[r],d=c.callback;if(d!==null){if(c.callback=null,c=a,typeof d!="function")throw Error(t(191,d));d.call(c)}}}var ea={},qn=jr(ea),ta=jr(ea),na=jr(ea);function bi(n){if(n===ea)throw Error(t(174));return n}function Fc(n,r){switch(qe(na,r),qe(ta,n),qe(qn,ea),n=r.nodeType,n){case 9:case 11:r=(r=r.documentElement)?r.namespaceURI:ut(null,"");break;default:n=n===8?r.parentNode:r,r=n.namespaceURI||null,n=n.tagName,r=ut(r,n)}Ge(qn),qe(qn,r)}function js(){Ge(qn),Ge(ta),Ge(na)}function Xf(n){bi(na.current);var r=bi(qn.current),a=ut(r,n.type);r!==a&&(qe(ta,n),qe(qn,a))}function Uc(n){ta.current===n&&(Ge(qn),Ge(ta))}var Ye=jr(0);function Pl(n){for(var r=n;r!==null;){if(r.tag===13){var a=r.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return r}else if(r.tag===19&&r.memoizedProps.revealOrder!==void 0){if(r.flags&128)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}var jc=[];function zc(){for(var n=0;n<jc.length;n++)jc[n]._workInProgressVersionPrimary=null;jc.length=0}var Nl=ge.ReactCurrentDispatcher,Bc=ge.ReactCurrentBatchConfig,Fi=0,Je=null,ht=null,yt=null,xl=!1,ra=!1,ia=0,Ev=0;function Dt(){throw Error(t(321))}function $c(n,r){if(r===null)return!1;for(var a=0;a<r.length&&a<n.length;a++)if(!kn(n[a],r[a]))return!1;return!0}function qc(n,r,a,c,d,p){if(Fi=p,Je=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,Nl.current=n===null||n.memoizedState===null?Sv:Av,n=a(c,d),ra){p=0;do{if(ra=!1,ia=0,25<=p)throw Error(t(301));p+=1,yt=ht=null,r.updateQueue=null,Nl.current=Rv,n=a(c,d)}while(ra)}if(Nl.current=Ol,r=ht!==null&&ht.next!==null,Fi=0,yt=ht=Je=null,xl=!1,r)throw Error(t(300));return n}function Hc(){var n=ia!==0;return ia=0,n}function Hn(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return yt===null?Je.memoizedState=yt=n:yt=yt.next=n,yt}function fn(){if(ht===null){var n=Je.alternate;n=n!==null?n.memoizedState:null}else n=ht.next;var r=yt===null?Je.memoizedState:yt.next;if(r!==null)yt=r,ht=n;else{if(n===null)throw Error(t(310));ht=n,n={memoizedState:ht.memoizedState,baseState:ht.baseState,baseQueue:ht.baseQueue,queue:ht.queue,next:null},yt===null?Je.memoizedState=yt=n:yt=yt.next=n}return yt}function sa(n,r){return typeof r=="function"?r(n):r}function Wc(n){var r=fn(),a=r.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=ht,d=c.baseQueue,p=a.pending;if(p!==null){if(d!==null){var _=d.next;d.next=p.next,p.next=_}c.baseQueue=d=p,a.pending=null}if(d!==null){p=d.next,c=c.baseState;var I=_=null,C=null,F=p;do{var Q=F.lane;if((Fi&Q)===Q)C!==null&&(C=C.next={lane:0,action:F.action,hasEagerState:F.hasEagerState,eagerState:F.eagerState,next:null}),c=F.hasEagerState?F.eagerState:n(c,F.action);else{var X={lane:Q,action:F.action,hasEagerState:F.hasEagerState,eagerState:F.eagerState,next:null};C===null?(I=C=X,_=c):C=C.next=X,Je.lanes|=Q,Ui|=Q}F=F.next}while(F!==null&&F!==p);C===null?_=c:C.next=I,kn(c,r.memoizedState)||(Gt=!0),r.memoizedState=c,r.baseState=_,r.baseQueue=C,a.lastRenderedState=c}if(n=a.interleaved,n!==null){d=n;do p=d.lane,Je.lanes|=p,Ui|=p,d=d.next;while(d!==n)}else d===null&&(a.lanes=0);return[r.memoizedState,a.dispatch]}function Gc(n){var r=fn(),a=r.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=a.dispatch,d=a.pending,p=r.memoizedState;if(d!==null){a.pending=null;var _=d=d.next;do p=n(p,_.action),_=_.next;while(_!==d);kn(p,r.memoizedState)||(Gt=!0),r.memoizedState=p,r.baseQueue===null&&(r.baseState=p),a.lastRenderedState=p}return[p,c]}function Yf(){}function Jf(n,r){var a=Je,c=fn(),d=r(),p=!kn(c.memoizedState,d);if(p&&(c.memoizedState=d,Gt=!0),c=c.queue,Kc(tp.bind(null,a,c,n),[n]),c.getSnapshot!==r||p||yt!==null&&yt.memoizedState.tag&1){if(a.flags|=2048,oa(9,ep.bind(null,a,c,d,r),void 0,null),_t===null)throw Error(t(349));Fi&30||Zf(a,r,d)}return d}function Zf(n,r,a){n.flags|=16384,n={getSnapshot:r,value:a},r=Je.updateQueue,r===null?(r={lastEffect:null,stores:null},Je.updateQueue=r,r.stores=[n]):(a=r.stores,a===null?r.stores=[n]:a.push(n))}function ep(n,r,a,c){r.value=a,r.getSnapshot=c,np(r)&&rp(n)}function tp(n,r,a){return a(function(){np(r)&&rp(n)})}function np(n){var r=n.getSnapshot;n=n.value;try{var a=r();return!kn(n,a)}catch{return!0}}function rp(n){var r=pr(n,1);r!==null&&Vn(r,n,1,-1)}function ip(n){var r=Hn();return typeof n=="function"&&(n=n()),r.memoizedState=r.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:sa,lastRenderedState:n},r.queue=n,n=n.dispatch=Iv.bind(null,Je,n),[r.memoizedState,n]}function oa(n,r,a,c){return n={tag:n,create:r,destroy:a,deps:c,next:null},r=Je.updateQueue,r===null?(r={lastEffect:null,stores:null},Je.updateQueue=r,r.lastEffect=n.next=n):(a=r.lastEffect,a===null?r.lastEffect=n.next=n:(c=a.next,a.next=n,n.next=c,r.lastEffect=n)),n}function sp(){return fn().memoizedState}function Dl(n,r,a,c){var d=Hn();Je.flags|=n,d.memoizedState=oa(1|r,a,void 0,c===void 0?null:c)}function Vl(n,r,a,c){var d=fn();c=c===void 0?null:c;var p=void 0;if(ht!==null){var _=ht.memoizedState;if(p=_.destroy,c!==null&&$c(c,_.deps)){d.memoizedState=oa(r,a,p,c);return}}Je.flags|=n,d.memoizedState=oa(1|r,a,p,c)}function op(n,r){return Dl(8390656,8,n,r)}function Kc(n,r){return Vl(2048,8,n,r)}function ap(n,r){return Vl(4,2,n,r)}function lp(n,r){return Vl(4,4,n,r)}function up(n,r){if(typeof r=="function")return n=n(),r(n),function(){r(null)};if(r!=null)return n=n(),r.current=n,function(){r.current=null}}function cp(n,r,a){return a=a!=null?a.concat([n]):null,Vl(4,4,up.bind(null,r,n),a)}function Qc(){}function hp(n,r){var a=fn();r=r===void 0?null:r;var c=a.memoizedState;return c!==null&&r!==null&&$c(r,c[1])?c[0]:(a.memoizedState=[n,r],n)}function dp(n,r){var a=fn();r=r===void 0?null:r;var c=a.memoizedState;return c!==null&&r!==null&&$c(r,c[1])?c[0]:(n=n(),a.memoizedState=[n,r],n)}function fp(n,r,a){return Fi&21?(kn(a,r)||(a=Ci(),Je.lanes|=a,Ui|=a,n.baseState=!0),r):(n.baseState&&(n.baseState=!1,Gt=!0),n.memoizedState=a)}function wv(n,r){var a=ke;ke=a!==0&&4>a?a:4,n(!0);var c=Bc.transition;Bc.transition={};try{n(!1),r()}finally{ke=a,Bc.transition=c}}function pp(){return fn().memoizedState}function Tv(n,r,a){var c=Kr(n);if(a={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null},mp(n))gp(r,a);else if(a=Wf(n,r,a,c),a!==null){var d=Bt();Vn(a,n,c,d),yp(a,r,c)}}function Iv(n,r,a){var c=Kr(n),d={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null};if(mp(n))gp(r,d);else{var p=n.alternate;if(n.lanes===0&&(p===null||p.lanes===0)&&(p=r.lastRenderedReducer,p!==null))try{var _=r.lastRenderedState,I=p(_,a);if(d.hasEagerState=!0,d.eagerState=I,kn(I,_)){var C=r.interleaved;C===null?(d.next=d,Mc(r)):(d.next=C.next,C.next=d),r.interleaved=d;return}}catch{}finally{}a=Wf(n,r,d,c),a!==null&&(d=Bt(),Vn(a,n,c,d),yp(a,r,c))}}function mp(n){var r=n.alternate;return n===Je||r!==null&&r===Je}function gp(n,r){ra=xl=!0;var a=n.pending;a===null?r.next=r:(r.next=a.next,a.next=r),n.pending=r}function yp(n,r,a){if(a&4194240){var c=r.lanes;c&=n.pendingLanes,a|=c,r.lanes=a,Vr(n,a)}}var Ol={readContext:dn,useCallback:Dt,useContext:Dt,useEffect:Dt,useImperativeHandle:Dt,useInsertionEffect:Dt,useLayoutEffect:Dt,useMemo:Dt,useReducer:Dt,useRef:Dt,useState:Dt,useDebugValue:Dt,useDeferredValue:Dt,useTransition:Dt,useMutableSource:Dt,useSyncExternalStore:Dt,useId:Dt,unstable_isNewReconciler:!1},Sv={readContext:dn,useCallback:function(n,r){return Hn().memoizedState=[n,r===void 0?null:r],n},useContext:dn,useEffect:op,useImperativeHandle:function(n,r,a){return a=a!=null?a.concat([n]):null,Dl(4194308,4,up.bind(null,r,n),a)},useLayoutEffect:function(n,r){return Dl(4194308,4,n,r)},useInsertionEffect:function(n,r){return Dl(4,2,n,r)},useMemo:function(n,r){var a=Hn();return r=r===void 0?null:r,n=n(),a.memoizedState=[n,r],n},useReducer:function(n,r,a){var c=Hn();return r=a!==void 0?a(r):r,c.memoizedState=c.baseState=r,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:r},c.queue=n,n=n.dispatch=Tv.bind(null,Je,n),[c.memoizedState,n]},useRef:function(n){var r=Hn();return n={current:n},r.memoizedState=n},useState:ip,useDebugValue:Qc,useDeferredValue:function(n){return Hn().memoizedState=n},useTransition:function(){var n=ip(!1),r=n[0];return n=wv.bind(null,n[1]),Hn().memoizedState=n,[r,n]},useMutableSource:function(){},useSyncExternalStore:function(n,r,a){var c=Je,d=Hn();if(Xe){if(a===void 0)throw Error(t(407));a=a()}else{if(a=r(),_t===null)throw Error(t(349));Fi&30||Zf(c,r,a)}d.memoizedState=a;var p={value:a,getSnapshot:r};return d.queue=p,op(tp.bind(null,c,p,n),[n]),c.flags|=2048,oa(9,ep.bind(null,c,p,a,r),void 0,null),a},useId:function(){var n=Hn(),r=_t.identifierPrefix;if(Xe){var a=fr,c=dr;a=(c&~(1<<32-Ut(c)-1)).toString(32)+a,r=":"+r+"R"+a,a=ia++,0<a&&(r+="H"+a.toString(32)),r+=":"}else a=Ev++,r=":"+r+"r"+a.toString(32)+":";return n.memoizedState=r},unstable_isNewReconciler:!1},Av={readContext:dn,useCallback:hp,useContext:dn,useEffect:Kc,useImperativeHandle:cp,useInsertionEffect:ap,useLayoutEffect:lp,useMemo:dp,useReducer:Wc,useRef:sp,useState:function(){return Wc(sa)},useDebugValue:Qc,useDeferredValue:function(n){var r=fn();return fp(r,ht.memoizedState,n)},useTransition:function(){var n=Wc(sa)[0],r=fn().memoizedState;return[n,r]},useMutableSource:Yf,useSyncExternalStore:Jf,useId:pp,unstable_isNewReconciler:!1},Rv={readContext:dn,useCallback:hp,useContext:dn,useEffect:Kc,useImperativeHandle:cp,useInsertionEffect:ap,useLayoutEffect:lp,useMemo:dp,useReducer:Gc,useRef:sp,useState:function(){return Gc(sa)},useDebugValue:Qc,useDeferredValue:function(n){var r=fn();return ht===null?r.memoizedState=n:fp(r,ht.memoizedState,n)},useTransition:function(){var n=Gc(sa)[0],r=fn().memoizedState;return[n,r]},useMutableSource:Yf,useSyncExternalStore:Jf,useId:pp,unstable_isNewReconciler:!1};function Nn(n,r){if(n&&n.defaultProps){r=te({},r),n=n.defaultProps;for(var a in n)r[a]===void 0&&(r[a]=n[a]);return r}return r}function Xc(n,r,a,c){r=n.memoizedState,a=a(c,r),a=a==null?r:te({},r,a),n.memoizedState=a,n.lanes===0&&(n.updateQueue.baseState=a)}var Ll={isMounted:function(n){return(n=n._reactInternals)?wn(n)===n:!1},enqueueSetState:function(n,r,a){n=n._reactInternals;var c=Bt(),d=Kr(n),p=mr(c,d);p.payload=r,a!=null&&(p.callback=a),r=qr(n,p,d),r!==null&&(Vn(r,n,d,c),Cl(r,n,d))},enqueueReplaceState:function(n,r,a){n=n._reactInternals;var c=Bt(),d=Kr(n),p=mr(c,d);p.tag=1,p.payload=r,a!=null&&(p.callback=a),r=qr(n,p,d),r!==null&&(Vn(r,n,d,c),Cl(r,n,d))},enqueueForceUpdate:function(n,r){n=n._reactInternals;var a=Bt(),c=Kr(n),d=mr(a,c);d.tag=2,r!=null&&(d.callback=r),r=qr(n,d,c),r!==null&&(Vn(r,n,c,a),Cl(r,n,c))}};function _p(n,r,a,c,d,p,_){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(c,p,_):r.prototype&&r.prototype.isPureReactComponent?!Wo(a,c)||!Wo(d,p):!0}function vp(n,r,a){var c=!1,d=zr,p=r.contextType;return typeof p=="object"&&p!==null?p=dn(p):(d=Wt(r)?Vi:xt.current,c=r.contextTypes,p=(c=c!=null)?Vs(n,d):zr),r=new r(a,p),n.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=Ll,n.stateNode=r,r._reactInternals=n,c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=d,n.__reactInternalMemoizedMaskedChildContext=p),r}function Ep(n,r,a,c){n=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(a,c),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(a,c),r.state!==n&&Ll.enqueueReplaceState(r,r.state,null)}function Yc(n,r,a,c){var d=n.stateNode;d.props=a,d.state=n.memoizedState,d.refs={},bc(n);var p=r.contextType;typeof p=="object"&&p!==null?d.context=dn(p):(p=Wt(r)?Vi:xt.current,d.context=Vs(n,p)),d.state=n.memoizedState,p=r.getDerivedStateFromProps,typeof p=="function"&&(Xc(n,r,p,a),d.state=n.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(r=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),r!==d.state&&Ll.enqueueReplaceState(d,d.state,null),kl(n,a,d,c),d.state=n.memoizedState),typeof d.componentDidMount=="function"&&(n.flags|=4194308)}function zs(n,r){try{var a="",c=r;do a+=Se(c),c=c.return;while(c);var d=a}catch(p){d=`
Error generating stack: `+p.message+`
`+p.stack}return{value:n,source:r,stack:d,digest:null}}function Jc(n,r,a){return{value:n,source:null,stack:a??null,digest:r??null}}function Zc(n,r){try{console.error(r.value)}catch(a){setTimeout(function(){throw a})}}var Cv=typeof WeakMap=="function"?WeakMap:Map;function wp(n,r,a){a=mr(-1,a),a.tag=3,a.payload={element:null};var c=r.value;return a.callback=function(){Bl||(Bl=!0,ph=c),Zc(n,r)},a}function Tp(n,r,a){a=mr(-1,a),a.tag=3;var c=n.type.getDerivedStateFromError;if(typeof c=="function"){var d=r.value;a.payload=function(){return c(d)},a.callback=function(){Zc(n,r)}}var p=n.stateNode;return p!==null&&typeof p.componentDidCatch=="function"&&(a.callback=function(){Zc(n,r),typeof c!="function"&&(Wr===null?Wr=new Set([this]):Wr.add(this));var _=r.stack;this.componentDidCatch(r.value,{componentStack:_!==null?_:""})}),a}function Ip(n,r,a){var c=n.pingCache;if(c===null){c=n.pingCache=new Cv;var d=new Set;c.set(r,d)}else d=c.get(r),d===void 0&&(d=new Set,c.set(r,d));d.has(a)||(d.add(a),n=zv.bind(null,n,r,a),r.then(n,n))}function Sp(n){do{var r;if((r=n.tag===13)&&(r=n.memoizedState,r=r!==null?r.dehydrated!==null:!0),r)return n;n=n.return}while(n!==null);return null}function Ap(n,r,a,c,d){return n.mode&1?(n.flags|=65536,n.lanes=d,n):(n===r?n.flags|=65536:(n.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(r=mr(-1,1),r.tag=2,qr(a,r,1))),a.lanes|=1),n)}var kv=ge.ReactCurrentOwner,Gt=!1;function zt(n,r,a,c){r.child=n===null?Hf(r,null,a,c):bs(r,n.child,a,c)}function Rp(n,r,a,c,d){a=a.render;var p=r.ref;return Us(r,d),c=qc(n,r,a,c,p,d),a=Hc(),n!==null&&!Gt?(r.updateQueue=n.updateQueue,r.flags&=-2053,n.lanes&=~d,gr(n,r,d)):(Xe&&a&&Cc(r),r.flags|=1,zt(n,r,c,d),r.child)}function Cp(n,r,a,c,d){if(n===null){var p=a.type;return typeof p=="function"&&!wh(p)&&p.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(r.tag=15,r.type=p,kp(n,r,p,c,d)):(n=Kl(a.type,null,c,r,r.mode,d),n.ref=r.ref,n.return=r,r.child=n)}if(p=n.child,!(n.lanes&d)){var _=p.memoizedProps;if(a=a.compare,a=a!==null?a:Wo,a(_,c)&&n.ref===r.ref)return gr(n,r,d)}return r.flags|=1,n=Xr(p,c),n.ref=r.ref,n.return=r,r.child=n}function kp(n,r,a,c,d){if(n!==null){var p=n.memoizedProps;if(Wo(p,c)&&n.ref===r.ref)if(Gt=!1,r.pendingProps=c=p,(n.lanes&d)!==0)n.flags&131072&&(Gt=!0);else return r.lanes=n.lanes,gr(n,r,d)}return eh(n,r,a,c,d)}function Pp(n,r,a){var c=r.pendingProps,d=c.children,p=n!==null?n.memoizedState:null;if(c.mode==="hidden")if(!(r.mode&1))r.memoizedState={baseLanes:0,cachePool:null,transitions:null},qe($s,sn),sn|=a;else{if(!(a&1073741824))return n=p!==null?p.baseLanes|a:a,r.lanes=r.childLanes=1073741824,r.memoizedState={baseLanes:n,cachePool:null,transitions:null},r.updateQueue=null,qe($s,sn),sn|=n,null;r.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=p!==null?p.baseLanes:a,qe($s,sn),sn|=c}else p!==null?(c=p.baseLanes|a,r.memoizedState=null):c=a,qe($s,sn),sn|=c;return zt(n,r,d,a),r.child}function Np(n,r){var a=r.ref;(n===null&&a!==null||n!==null&&n.ref!==a)&&(r.flags|=512,r.flags|=2097152)}function eh(n,r,a,c,d){var p=Wt(a)?Vi:xt.current;return p=Vs(r,p),Us(r,d),a=qc(n,r,a,c,p,d),c=Hc(),n!==null&&!Gt?(r.updateQueue=n.updateQueue,r.flags&=-2053,n.lanes&=~d,gr(n,r,d)):(Xe&&c&&Cc(r),r.flags|=1,zt(n,r,a,d),r.child)}function xp(n,r,a,c,d){if(Wt(a)){var p=!0;vl(r)}else p=!1;if(Us(r,d),r.stateNode===null)bl(n,r),vp(r,a,c),Yc(r,a,c,d),c=!0;else if(n===null){var _=r.stateNode,I=r.memoizedProps;_.props=I;var C=_.context,F=a.contextType;typeof F=="object"&&F!==null?F=dn(F):(F=Wt(a)?Vi:xt.current,F=Vs(r,F));var Q=a.getDerivedStateFromProps,X=typeof Q=="function"||typeof _.getSnapshotBeforeUpdate=="function";X||typeof _.UNSAFE_componentWillReceiveProps!="function"&&typeof _.componentWillReceiveProps!="function"||(I!==c||C!==F)&&Ep(r,_,c,F),$r=!1;var K=r.memoizedState;_.state=K,kl(r,c,_,d),C=r.memoizedState,I!==c||K!==C||Ht.current||$r?(typeof Q=="function"&&(Xc(r,a,Q,c),C=r.memoizedState),(I=$r||_p(r,a,I,c,K,C,F))?(X||typeof _.UNSAFE_componentWillMount!="function"&&typeof _.componentWillMount!="function"||(typeof _.componentWillMount=="function"&&_.componentWillMount(),typeof _.UNSAFE_componentWillMount=="function"&&_.UNSAFE_componentWillMount()),typeof _.componentDidMount=="function"&&(r.flags|=4194308)):(typeof _.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=c,r.memoizedState=C),_.props=c,_.state=C,_.context=F,c=I):(typeof _.componentDidMount=="function"&&(r.flags|=4194308),c=!1)}else{_=r.stateNode,Gf(n,r),I=r.memoizedProps,F=r.type===r.elementType?I:Nn(r.type,I),_.props=F,X=r.pendingProps,K=_.context,C=a.contextType,typeof C=="object"&&C!==null?C=dn(C):(C=Wt(a)?Vi:xt.current,C=Vs(r,C));var ee=a.getDerivedStateFromProps;(Q=typeof ee=="function"||typeof _.getSnapshotBeforeUpdate=="function")||typeof _.UNSAFE_componentWillReceiveProps!="function"&&typeof _.componentWillReceiveProps!="function"||(I!==X||K!==C)&&Ep(r,_,c,C),$r=!1,K=r.memoizedState,_.state=K,kl(r,c,_,d);var ie=r.memoizedState;I!==X||K!==ie||Ht.current||$r?(typeof ee=="function"&&(Xc(r,a,ee,c),ie=r.memoizedState),(F=$r||_p(r,a,F,c,K,ie,C)||!1)?(Q||typeof _.UNSAFE_componentWillUpdate!="function"&&typeof _.componentWillUpdate!="function"||(typeof _.componentWillUpdate=="function"&&_.componentWillUpdate(c,ie,C),typeof _.UNSAFE_componentWillUpdate=="function"&&_.UNSAFE_componentWillUpdate(c,ie,C)),typeof _.componentDidUpdate=="function"&&(r.flags|=4),typeof _.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof _.componentDidUpdate!="function"||I===n.memoizedProps&&K===n.memoizedState||(r.flags|=4),typeof _.getSnapshotBeforeUpdate!="function"||I===n.memoizedProps&&K===n.memoizedState||(r.flags|=1024),r.memoizedProps=c,r.memoizedState=ie),_.props=c,_.state=ie,_.context=C,c=F):(typeof _.componentDidUpdate!="function"||I===n.memoizedProps&&K===n.memoizedState||(r.flags|=4),typeof _.getSnapshotBeforeUpdate!="function"||I===n.memoizedProps&&K===n.memoizedState||(r.flags|=1024),c=!1)}return th(n,r,a,c,p,d)}function th(n,r,a,c,d,p){Np(n,r);var _=(r.flags&128)!==0;if(!c&&!_)return d&&Mf(r,a,!1),gr(n,r,p);c=r.stateNode,kv.current=r;var I=_&&typeof a.getDerivedStateFromError!="function"?null:c.render();return r.flags|=1,n!==null&&_?(r.child=bs(r,n.child,null,p),r.child=bs(r,null,I,p)):zt(n,r,I,p),r.memoizedState=c.state,d&&Mf(r,a,!0),r.child}function Dp(n){var r=n.stateNode;r.pendingContext?Of(n,r.pendingContext,r.pendingContext!==r.context):r.context&&Of(n,r.context,!1),Fc(n,r.containerInfo)}function Vp(n,r,a,c,d){return Ms(),xc(d),r.flags|=256,zt(n,r,a,c),r.child}var nh={dehydrated:null,treeContext:null,retryLane:0};function rh(n){return{baseLanes:n,cachePool:null,transitions:null}}function Op(n,r,a){var c=r.pendingProps,d=Ye.current,p=!1,_=(r.flags&128)!==0,I;if((I=_)||(I=n!==null&&n.memoizedState===null?!1:(d&2)!==0),I?(p=!0,r.flags&=-129):(n===null||n.memoizedState!==null)&&(d|=1),qe(Ye,d&1),n===null)return Nc(r),n=r.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?(r.mode&1?n.data==="$!"?r.lanes=8:r.lanes=1073741824:r.lanes=1,null):(_=c.children,n=c.fallback,p?(c=r.mode,p=r.child,_={mode:"hidden",children:_},!(c&1)&&p!==null?(p.childLanes=0,p.pendingProps=_):p=Ql(_,c,0,null),n=$i(n,c,a,null),p.return=r,n.return=r,p.sibling=n,r.child=p,r.child.memoizedState=rh(a),r.memoizedState=nh,n):ih(r,_));if(d=n.memoizedState,d!==null&&(I=d.dehydrated,I!==null))return Pv(n,r,_,c,I,d,a);if(p){p=c.fallback,_=r.mode,d=n.child,I=d.sibling;var C={mode:"hidden",children:c.children};return!(_&1)&&r.child!==d?(c=r.child,c.childLanes=0,c.pendingProps=C,r.deletions=null):(c=Xr(d,C),c.subtreeFlags=d.subtreeFlags&14680064),I!==null?p=Xr(I,p):(p=$i(p,_,a,null),p.flags|=2),p.return=r,c.return=r,c.sibling=p,r.child=c,c=p,p=r.child,_=n.child.memoizedState,_=_===null?rh(a):{baseLanes:_.baseLanes|a,cachePool:null,transitions:_.transitions},p.memoizedState=_,p.childLanes=n.childLanes&~a,r.memoizedState=nh,c}return p=n.child,n=p.sibling,c=Xr(p,{mode:"visible",children:c.children}),!(r.mode&1)&&(c.lanes=a),c.return=r,c.sibling=null,n!==null&&(a=r.deletions,a===null?(r.deletions=[n],r.flags|=16):a.push(n)),r.child=c,r.memoizedState=null,c}function ih(n,r){return r=Ql({mode:"visible",children:r},n.mode,0,null),r.return=n,n.child=r}function Ml(n,r,a,c){return c!==null&&xc(c),bs(r,n.child,null,a),n=ih(r,r.pendingProps.children),n.flags|=2,r.memoizedState=null,n}function Pv(n,r,a,c,d,p,_){if(a)return r.flags&256?(r.flags&=-257,c=Jc(Error(t(422))),Ml(n,r,_,c)):r.memoizedState!==null?(r.child=n.child,r.flags|=128,null):(p=c.fallback,d=r.mode,c=Ql({mode:"visible",children:c.children},d,0,null),p=$i(p,d,_,null),p.flags|=2,c.return=r,p.return=r,c.sibling=p,r.child=c,r.mode&1&&bs(r,n.child,null,_),r.child.memoizedState=rh(_),r.memoizedState=nh,p);if(!(r.mode&1))return Ml(n,r,_,null);if(d.data==="$!"){if(c=d.nextSibling&&d.nextSibling.dataset,c)var I=c.dgst;return c=I,p=Error(t(419)),c=Jc(p,c,void 0),Ml(n,r,_,c)}if(I=(_&n.childLanes)!==0,Gt||I){if(c=_t,c!==null){switch(_&-_){case 4:d=2;break;case 16:d=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:d=32;break;case 536870912:d=268435456;break;default:d=0}d=d&(c.suspendedLanes|_)?0:d,d!==0&&d!==p.retryLane&&(p.retryLane=d,pr(n,d),Vn(c,n,d,-1))}return Eh(),c=Jc(Error(t(421))),Ml(n,r,_,c)}return d.data==="$?"?(r.flags|=128,r.child=n.child,r=Bv.bind(null,n),d._reactRetry=r,null):(n=p.treeContext,rn=Ur(d.nextSibling),nn=r,Xe=!0,Pn=null,n!==null&&(cn[hn++]=dr,cn[hn++]=fr,cn[hn++]=Oi,dr=n.id,fr=n.overflow,Oi=r),r=ih(r,c.children),r.flags|=4096,r)}function Lp(n,r,a){n.lanes|=r;var c=n.alternate;c!==null&&(c.lanes|=r),Lc(n.return,r,a)}function sh(n,r,a,c,d){var p=n.memoizedState;p===null?n.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:c,tail:a,tailMode:d}:(p.isBackwards=r,p.rendering=null,p.renderingStartTime=0,p.last=c,p.tail=a,p.tailMode=d)}function Mp(n,r,a){var c=r.pendingProps,d=c.revealOrder,p=c.tail;if(zt(n,r,c.children,a),c=Ye.current,c&2)c=c&1|2,r.flags|=128;else{if(n!==null&&n.flags&128)e:for(n=r.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&Lp(n,a,r);else if(n.tag===19)Lp(n,a,r);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===r)break e;for(;n.sibling===null;){if(n.return===null||n.return===r)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}c&=1}if(qe(Ye,c),!(r.mode&1))r.memoizedState=null;else switch(d){case"forwards":for(a=r.child,d=null;a!==null;)n=a.alternate,n!==null&&Pl(n)===null&&(d=a),a=a.sibling;a=d,a===null?(d=r.child,r.child=null):(d=a.sibling,a.sibling=null),sh(r,!1,d,a,p);break;case"backwards":for(a=null,d=r.child,r.child=null;d!==null;){if(n=d.alternate,n!==null&&Pl(n)===null){r.child=d;break}n=d.sibling,d.sibling=a,a=d,d=n}sh(r,!0,a,null,p);break;case"together":sh(r,!1,null,null,void 0);break;default:r.memoizedState=null}return r.child}function bl(n,r){!(r.mode&1)&&n!==null&&(n.alternate=null,r.alternate=null,r.flags|=2)}function gr(n,r,a){if(n!==null&&(r.dependencies=n.dependencies),Ui|=r.lanes,!(a&r.childLanes))return null;if(n!==null&&r.child!==n.child)throw Error(t(153));if(r.child!==null){for(n=r.child,a=Xr(n,n.pendingProps),r.child=a,a.return=r;n.sibling!==null;)n=n.sibling,a=a.sibling=Xr(n,n.pendingProps),a.return=r;a.sibling=null}return r.child}function Nv(n,r,a){switch(r.tag){case 3:Dp(r),Ms();break;case 5:Xf(r);break;case 1:Wt(r.type)&&vl(r);break;case 4:Fc(r,r.stateNode.containerInfo);break;case 10:var c=r.type._context,d=r.memoizedProps.value;qe(Al,c._currentValue),c._currentValue=d;break;case 13:if(c=r.memoizedState,c!==null)return c.dehydrated!==null?(qe(Ye,Ye.current&1),r.flags|=128,null):a&r.child.childLanes?Op(n,r,a):(qe(Ye,Ye.current&1),n=gr(n,r,a),n!==null?n.sibling:null);qe(Ye,Ye.current&1);break;case 19:if(c=(a&r.childLanes)!==0,n.flags&128){if(c)return Mp(n,r,a);r.flags|=128}if(d=r.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),qe(Ye,Ye.current),c)break;return null;case 22:case 23:return r.lanes=0,Pp(n,r,a)}return gr(n,r,a)}var bp,oh,Fp,Up;bp=function(n,r){for(var a=r.child;a!==null;){if(a.tag===5||a.tag===6)n.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===r)break;for(;a.sibling===null;){if(a.return===null||a.return===r)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},oh=function(){},Fp=function(n,r,a,c){var d=n.memoizedProps;if(d!==c){n=r.stateNode,bi(qn.current);var p=null;switch(a){case"input":d=gi(n,d),c=gi(n,c),p=[];break;case"select":d=te({},d,{value:void 0}),c=te({},c,{value:void 0}),p=[];break;case"textarea":d=wo(n,d),c=wo(n,c),p=[];break;default:typeof d.onClick!="function"&&typeof c.onClick=="function"&&(n.onclick=gl)}Co(a,c);var _;a=null;for(F in d)if(!c.hasOwnProperty(F)&&d.hasOwnProperty(F)&&d[F]!=null)if(F==="style"){var I=d[F];for(_ in I)I.hasOwnProperty(_)&&(a||(a={}),a[_]="")}else F!=="dangerouslySetInnerHTML"&&F!=="children"&&F!=="suppressContentEditableWarning"&&F!=="suppressHydrationWarning"&&F!=="autoFocus"&&(o.hasOwnProperty(F)?p||(p=[]):(p=p||[]).push(F,null));for(F in c){var C=c[F];if(I=d!=null?d[F]:void 0,c.hasOwnProperty(F)&&C!==I&&(C!=null||I!=null))if(F==="style")if(I){for(_ in I)!I.hasOwnProperty(_)||C&&C.hasOwnProperty(_)||(a||(a={}),a[_]="");for(_ in C)C.hasOwnProperty(_)&&I[_]!==C[_]&&(a||(a={}),a[_]=C[_])}else a||(p||(p=[]),p.push(F,a)),a=C;else F==="dangerouslySetInnerHTML"?(C=C?C.__html:void 0,I=I?I.__html:void 0,C!=null&&I!==C&&(p=p||[]).push(F,C)):F==="children"?typeof C!="string"&&typeof C!="number"||(p=p||[]).push(F,""+C):F!=="suppressContentEditableWarning"&&F!=="suppressHydrationWarning"&&(o.hasOwnProperty(F)?(C!=null&&F==="onScroll"&&We("scroll",n),p||I===C||(p=[])):(p=p||[]).push(F,C))}a&&(p=p||[]).push("style",a);var F=p;(r.updateQueue=F)&&(r.flags|=4)}},Up=function(n,r,a,c){a!==c&&(r.flags|=4)};function aa(n,r){if(!Xe)switch(n.tailMode){case"hidden":r=n.tail;for(var a=null;r!==null;)r.alternate!==null&&(a=r),r=r.sibling;a===null?n.tail=null:a.sibling=null;break;case"collapsed":a=n.tail;for(var c=null;a!==null;)a.alternate!==null&&(c=a),a=a.sibling;c===null?r||n.tail===null?n.tail=null:n.tail.sibling=null:c.sibling=null}}function Vt(n){var r=n.alternate!==null&&n.alternate.child===n.child,a=0,c=0;if(r)for(var d=n.child;d!==null;)a|=d.lanes|d.childLanes,c|=d.subtreeFlags&14680064,c|=d.flags&14680064,d.return=n,d=d.sibling;else for(d=n.child;d!==null;)a|=d.lanes|d.childLanes,c|=d.subtreeFlags,c|=d.flags,d.return=n,d=d.sibling;return n.subtreeFlags|=c,n.childLanes=a,r}function xv(n,r,a){var c=r.pendingProps;switch(kc(r),r.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Vt(r),null;case 1:return Wt(r.type)&&_l(),Vt(r),null;case 3:return c=r.stateNode,js(),Ge(Ht),Ge(xt),zc(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(n===null||n.child===null)&&(Il(r)?r.flags|=4:n===null||n.memoizedState.isDehydrated&&!(r.flags&256)||(r.flags|=1024,Pn!==null&&(yh(Pn),Pn=null))),oh(n,r),Vt(r),null;case 5:Uc(r);var d=bi(na.current);if(a=r.type,n!==null&&r.stateNode!=null)Fp(n,r,a,c,d),n.ref!==r.ref&&(r.flags|=512,r.flags|=2097152);else{if(!c){if(r.stateNode===null)throw Error(t(166));return Vt(r),null}if(n=bi(qn.current),Il(r)){c=r.stateNode,a=r.type;var p=r.memoizedProps;switch(c[$n]=r,c[Yo]=p,n=(r.mode&1)!==0,a){case"dialog":We("cancel",c),We("close",c);break;case"iframe":case"object":case"embed":We("load",c);break;case"video":case"audio":for(d=0;d<Ko.length;d++)We(Ko[d],c);break;case"source":We("error",c);break;case"img":case"image":case"link":We("error",c),We("load",c);break;case"details":We("toggle",c);break;case"input":ts(c,p),We("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!p.multiple},We("invalid",c);break;case"textarea":rs(c,p),We("invalid",c)}Co(a,p),d=null;for(var _ in p)if(p.hasOwnProperty(_)){var I=p[_];_==="children"?typeof I=="string"?c.textContent!==I&&(p.suppressHydrationWarning!==!0&&ml(c.textContent,I,n),d=["children",I]):typeof I=="number"&&c.textContent!==""+I&&(p.suppressHydrationWarning!==!0&&ml(c.textContent,I,n),d=["children",""+I]):o.hasOwnProperty(_)&&I!=null&&_==="onScroll"&&We("scroll",c)}switch(a){case"input":er(c),za(c,p,!0);break;case"textarea":er(c),To(c);break;case"select":case"option":break;default:typeof p.onClick=="function"&&(c.onclick=gl)}c=d,r.updateQueue=c,c!==null&&(r.flags|=4)}else{_=d.nodeType===9?d:d.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=lt(a)),n==="http://www.w3.org/1999/xhtml"?a==="script"?(n=_.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof c.is=="string"?n=_.createElement(a,{is:c.is}):(n=_.createElement(a),a==="select"&&(_=n,c.multiple?_.multiple=!0:c.size&&(_.size=c.size))):n=_.createElementNS(n,a),n[$n]=r,n[Yo]=c,bp(n,r,!1,!1),r.stateNode=n;e:{switch(_=ko(a,c),a){case"dialog":We("cancel",n),We("close",n),d=c;break;case"iframe":case"object":case"embed":We("load",n),d=c;break;case"video":case"audio":for(d=0;d<Ko.length;d++)We(Ko[d],n);d=c;break;case"source":We("error",n),d=c;break;case"img":case"image":case"link":We("error",n),We("load",n),d=c;break;case"details":We("toggle",n),d=c;break;case"input":ts(n,c),d=gi(n,c),We("invalid",n);break;case"option":d=c;break;case"select":n._wrapperState={wasMultiple:!!c.multiple},d=te({},c,{value:void 0}),We("invalid",n);break;case"textarea":rs(n,c),d=wo(n,c),We("invalid",n);break;default:d=c}Co(a,d),I=d;for(p in I)if(I.hasOwnProperty(p)){var C=I[p];p==="style"?Ao(n,C):p==="dangerouslySetInnerHTML"?(C=C?C.__html:void 0,C!=null&&Io(n,C)):p==="children"?typeof C=="string"?(a!=="textarea"||C!=="")&&kr(n,C):typeof C=="number"&&kr(n,""+C):p!=="suppressContentEditableWarning"&&p!=="suppressHydrationWarning"&&p!=="autoFocus"&&(o.hasOwnProperty(p)?C!=null&&p==="onScroll"&&We("scroll",n):C!=null&&ae(n,p,C,_))}switch(a){case"input":er(n),za(n,c,!1);break;case"textarea":er(n),To(n);break;case"option":c.value!=null&&n.setAttribute("value",""+be(c.value));break;case"select":n.multiple=!!c.multiple,p=c.value,p!=null?nr(n,!!c.multiple,p,!1):c.defaultValue!=null&&nr(n,!!c.multiple,c.defaultValue,!0);break;default:typeof d.onClick=="function"&&(n.onclick=gl)}switch(a){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(r.flags|=4)}r.ref!==null&&(r.flags|=512,r.flags|=2097152)}return Vt(r),null;case 6:if(n&&r.stateNode!=null)Up(n,r,n.memoizedProps,c);else{if(typeof c!="string"&&r.stateNode===null)throw Error(t(166));if(a=bi(na.current),bi(qn.current),Il(r)){if(c=r.stateNode,a=r.memoizedProps,c[$n]=r,(p=c.nodeValue!==a)&&(n=nn,n!==null))switch(n.tag){case 3:ml(c.nodeValue,a,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&ml(c.nodeValue,a,(n.mode&1)!==0)}p&&(r.flags|=4)}else c=(a.nodeType===9?a:a.ownerDocument).createTextNode(c),c[$n]=r,r.stateNode=c}return Vt(r),null;case 13:if(Ge(Ye),c=r.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(Xe&&rn!==null&&r.mode&1&&!(r.flags&128))Bf(),Ms(),r.flags|=98560,p=!1;else if(p=Il(r),c!==null&&c.dehydrated!==null){if(n===null){if(!p)throw Error(t(318));if(p=r.memoizedState,p=p!==null?p.dehydrated:null,!p)throw Error(t(317));p[$n]=r}else Ms(),!(r.flags&128)&&(r.memoizedState=null),r.flags|=4;Vt(r),p=!1}else Pn!==null&&(yh(Pn),Pn=null),p=!0;if(!p)return r.flags&65536?r:null}return r.flags&128?(r.lanes=a,r):(c=c!==null,c!==(n!==null&&n.memoizedState!==null)&&c&&(r.child.flags|=8192,r.mode&1&&(n===null||Ye.current&1?dt===0&&(dt=3):Eh())),r.updateQueue!==null&&(r.flags|=4),Vt(r),null);case 4:return js(),oh(n,r),n===null&&Qo(r.stateNode.containerInfo),Vt(r),null;case 10:return Oc(r.type._context),Vt(r),null;case 17:return Wt(r.type)&&_l(),Vt(r),null;case 19:if(Ge(Ye),p=r.memoizedState,p===null)return Vt(r),null;if(c=(r.flags&128)!==0,_=p.rendering,_===null)if(c)aa(p,!1);else{if(dt!==0||n!==null&&n.flags&128)for(n=r.child;n!==null;){if(_=Pl(n),_!==null){for(r.flags|=128,aa(p,!1),c=_.updateQueue,c!==null&&(r.updateQueue=c,r.flags|=4),r.subtreeFlags=0,c=a,a=r.child;a!==null;)p=a,n=c,p.flags&=14680066,_=p.alternate,_===null?(p.childLanes=0,p.lanes=n,p.child=null,p.subtreeFlags=0,p.memoizedProps=null,p.memoizedState=null,p.updateQueue=null,p.dependencies=null,p.stateNode=null):(p.childLanes=_.childLanes,p.lanes=_.lanes,p.child=_.child,p.subtreeFlags=0,p.deletions=null,p.memoizedProps=_.memoizedProps,p.memoizedState=_.memoizedState,p.updateQueue=_.updateQueue,p.type=_.type,n=_.dependencies,p.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),a=a.sibling;return qe(Ye,Ye.current&1|2),r.child}n=n.sibling}p.tail!==null&&$e()>qs&&(r.flags|=128,c=!0,aa(p,!1),r.lanes=4194304)}else{if(!c)if(n=Pl(_),n!==null){if(r.flags|=128,c=!0,a=n.updateQueue,a!==null&&(r.updateQueue=a,r.flags|=4),aa(p,!0),p.tail===null&&p.tailMode==="hidden"&&!_.alternate&&!Xe)return Vt(r),null}else 2*$e()-p.renderingStartTime>qs&&a!==1073741824&&(r.flags|=128,c=!0,aa(p,!1),r.lanes=4194304);p.isBackwards?(_.sibling=r.child,r.child=_):(a=p.last,a!==null?a.sibling=_:r.child=_,p.last=_)}return p.tail!==null?(r=p.tail,p.rendering=r,p.tail=r.sibling,p.renderingStartTime=$e(),r.sibling=null,a=Ye.current,qe(Ye,c?a&1|2:a&1),r):(Vt(r),null);case 22:case 23:return vh(),c=r.memoizedState!==null,n!==null&&n.memoizedState!==null!==c&&(r.flags|=8192),c&&r.mode&1?sn&1073741824&&(Vt(r),r.subtreeFlags&6&&(r.flags|=8192)):Vt(r),null;case 24:return null;case 25:return null}throw Error(t(156,r.tag))}function Dv(n,r){switch(kc(r),r.tag){case 1:return Wt(r.type)&&_l(),n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 3:return js(),Ge(Ht),Ge(xt),zc(),n=r.flags,n&65536&&!(n&128)?(r.flags=n&-65537|128,r):null;case 5:return Uc(r),null;case 13:if(Ge(Ye),n=r.memoizedState,n!==null&&n.dehydrated!==null){if(r.alternate===null)throw Error(t(340));Ms()}return n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 19:return Ge(Ye),null;case 4:return js(),null;case 10:return Oc(r.type._context),null;case 22:case 23:return vh(),null;case 24:return null;default:return null}}var Fl=!1,Ot=!1,Vv=typeof WeakSet=="function"?WeakSet:Set,re=null;function Bs(n,r){var a=n.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(c){et(n,r,c)}else a.current=null}function ah(n,r,a){try{a()}catch(c){et(n,r,c)}}var jp=!1;function Ov(n,r){if(vc=Mr,n=_f(),hc(n)){if("selectionStart"in n)var a={start:n.selectionStart,end:n.selectionEnd};else e:{a=(a=n.ownerDocument)&&a.defaultView||window;var c=a.getSelection&&a.getSelection();if(c&&c.rangeCount!==0){a=c.anchorNode;var d=c.anchorOffset,p=c.focusNode;c=c.focusOffset;try{a.nodeType,p.nodeType}catch{a=null;break e}var _=0,I=-1,C=-1,F=0,Q=0,X=n,K=null;t:for(;;){for(var ee;X!==a||d!==0&&X.nodeType!==3||(I=_+d),X!==p||c!==0&&X.nodeType!==3||(C=_+c),X.nodeType===3&&(_+=X.nodeValue.length),(ee=X.firstChild)!==null;)K=X,X=ee;for(;;){if(X===n)break t;if(K===a&&++F===d&&(I=_),K===p&&++Q===c&&(C=_),(ee=X.nextSibling)!==null)break;X=K,K=X.parentNode}X=ee}a=I===-1||C===-1?null:{start:I,end:C}}else a=null}a=a||{start:0,end:0}}else a=null;for(Ec={focusedElem:n,selectionRange:a},Mr=!1,re=r;re!==null;)if(r=re,n=r.child,(r.subtreeFlags&1028)!==0&&n!==null)n.return=r,re=n;else for(;re!==null;){r=re;try{var ie=r.alternate;if(r.flags&1024)switch(r.tag){case 0:case 11:case 15:break;case 1:if(ie!==null){var oe=ie.memoizedProps,nt=ie.memoizedState,L=r.stateNode,N=L.getSnapshotBeforeUpdate(r.elementType===r.type?oe:Nn(r.type,oe),nt);L.__reactInternalSnapshotBeforeUpdate=N}break;case 3:var b=r.stateNode.containerInfo;b.nodeType===1?b.textContent="":b.nodeType===9&&b.documentElement&&b.removeChild(b.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Y){et(r,r.return,Y)}if(n=r.sibling,n!==null){n.return=r.return,re=n;break}re=r.return}return ie=jp,jp=!1,ie}function la(n,r,a){var c=r.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var d=c=c.next;do{if((d.tag&n)===n){var p=d.destroy;d.destroy=void 0,p!==void 0&&ah(r,a,p)}d=d.next}while(d!==c)}}function Ul(n,r){if(r=r.updateQueue,r=r!==null?r.lastEffect:null,r!==null){var a=r=r.next;do{if((a.tag&n)===n){var c=a.create;a.destroy=c()}a=a.next}while(a!==r)}}function lh(n){var r=n.ref;if(r!==null){var a=n.stateNode;switch(n.tag){case 5:n=a;break;default:n=a}typeof r=="function"?r(n):r.current=n}}function zp(n){var r=n.alternate;r!==null&&(n.alternate=null,zp(r)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(r=n.stateNode,r!==null&&(delete r[$n],delete r[Yo],delete r[Sc],delete r[gv],delete r[yv])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function Bp(n){return n.tag===5||n.tag===3||n.tag===4}function $p(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||Bp(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function uh(n,r,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,r?a.nodeType===8?a.parentNode.insertBefore(n,r):a.insertBefore(n,r):(a.nodeType===8?(r=a.parentNode,r.insertBefore(n,a)):(r=a,r.appendChild(n)),a=a._reactRootContainer,a!=null||r.onclick!==null||(r.onclick=gl));else if(c!==4&&(n=n.child,n!==null))for(uh(n,r,a),n=n.sibling;n!==null;)uh(n,r,a),n=n.sibling}function ch(n,r,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,r?a.insertBefore(n,r):a.appendChild(n);else if(c!==4&&(n=n.child,n!==null))for(ch(n,r,a),n=n.sibling;n!==null;)ch(n,r,a),n=n.sibling}var St=null,xn=!1;function Hr(n,r,a){for(a=a.child;a!==null;)qp(n,r,a),a=a.sibling}function qp(n,r,a){if(Jt&&typeof Jt.onCommitFiberUnmount=="function")try{Jt.onCommitFiberUnmount(Ai,a)}catch{}switch(a.tag){case 5:Ot||Bs(a,r);case 6:var c=St,d=xn;St=null,Hr(n,r,a),St=c,xn=d,St!==null&&(xn?(n=St,a=a.stateNode,n.nodeType===8?n.parentNode.removeChild(a):n.removeChild(a)):St.removeChild(a.stateNode));break;case 18:St!==null&&(xn?(n=St,a=a.stateNode,n.nodeType===8?Ic(n.parentNode,a):n.nodeType===1&&Ic(n,a),Rn(n)):Ic(St,a.stateNode));break;case 4:c=St,d=xn,St=a.stateNode.containerInfo,xn=!0,Hr(n,r,a),St=c,xn=d;break;case 0:case 11:case 14:case 15:if(!Ot&&(c=a.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){d=c=c.next;do{var p=d,_=p.destroy;p=p.tag,_!==void 0&&(p&2||p&4)&&ah(a,r,_),d=d.next}while(d!==c)}Hr(n,r,a);break;case 1:if(!Ot&&(Bs(a,r),c=a.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=a.memoizedProps,c.state=a.memoizedState,c.componentWillUnmount()}catch(I){et(a,r,I)}Hr(n,r,a);break;case 21:Hr(n,r,a);break;case 22:a.mode&1?(Ot=(c=Ot)||a.memoizedState!==null,Hr(n,r,a),Ot=c):Hr(n,r,a);break;default:Hr(n,r,a)}}function Hp(n){var r=n.updateQueue;if(r!==null){n.updateQueue=null;var a=n.stateNode;a===null&&(a=n.stateNode=new Vv),r.forEach(function(c){var d=$v.bind(null,n,c);a.has(c)||(a.add(c),c.then(d,d))})}}function Dn(n,r){var a=r.deletions;if(a!==null)for(var c=0;c<a.length;c++){var d=a[c];try{var p=n,_=r,I=_;e:for(;I!==null;){switch(I.tag){case 5:St=I.stateNode,xn=!1;break e;case 3:St=I.stateNode.containerInfo,xn=!0;break e;case 4:St=I.stateNode.containerInfo,xn=!0;break e}I=I.return}if(St===null)throw Error(t(160));qp(p,_,d),St=null,xn=!1;var C=d.alternate;C!==null&&(C.return=null),d.return=null}catch(F){et(d,r,F)}}if(r.subtreeFlags&12854)for(r=r.child;r!==null;)Wp(r,n),r=r.sibling}function Wp(n,r){var a=n.alternate,c=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(Dn(r,n),Wn(n),c&4){try{la(3,n,n.return),Ul(3,n)}catch(oe){et(n,n.return,oe)}try{la(5,n,n.return)}catch(oe){et(n,n.return,oe)}}break;case 1:Dn(r,n),Wn(n),c&512&&a!==null&&Bs(a,a.return);break;case 5:if(Dn(r,n),Wn(n),c&512&&a!==null&&Bs(a,a.return),n.flags&32){var d=n.stateNode;try{kr(d,"")}catch(oe){et(n,n.return,oe)}}if(c&4&&(d=n.stateNode,d!=null)){var p=n.memoizedProps,_=a!==null?a.memoizedProps:p,I=n.type,C=n.updateQueue;if(n.updateQueue=null,C!==null)try{I==="input"&&p.type==="radio"&&p.name!=null&&vo(d,p),ko(I,_);var F=ko(I,p);for(_=0;_<C.length;_+=2){var Q=C[_],X=C[_+1];Q==="style"?Ao(d,X):Q==="dangerouslySetInnerHTML"?Io(d,X):Q==="children"?kr(d,X):ae(d,Q,X,F)}switch(I){case"input":Eo(d,p);break;case"textarea":is(d,p);break;case"select":var K=d._wrapperState.wasMultiple;d._wrapperState.wasMultiple=!!p.multiple;var ee=p.value;ee!=null?nr(d,!!p.multiple,ee,!1):K!==!!p.multiple&&(p.defaultValue!=null?nr(d,!!p.multiple,p.defaultValue,!0):nr(d,!!p.multiple,p.multiple?[]:"",!1))}d[Yo]=p}catch(oe){et(n,n.return,oe)}}break;case 6:if(Dn(r,n),Wn(n),c&4){if(n.stateNode===null)throw Error(t(162));d=n.stateNode,p=n.memoizedProps;try{d.nodeValue=p}catch(oe){et(n,n.return,oe)}}break;case 3:if(Dn(r,n),Wn(n),c&4&&a!==null&&a.memoizedState.isDehydrated)try{Rn(r.containerInfo)}catch(oe){et(n,n.return,oe)}break;case 4:Dn(r,n),Wn(n);break;case 13:Dn(r,n),Wn(n),d=n.child,d.flags&8192&&(p=d.memoizedState!==null,d.stateNode.isHidden=p,!p||d.alternate!==null&&d.alternate.memoizedState!==null||(fh=$e())),c&4&&Hp(n);break;case 22:if(Q=a!==null&&a.memoizedState!==null,n.mode&1?(Ot=(F=Ot)||Q,Dn(r,n),Ot=F):Dn(r,n),Wn(n),c&8192){if(F=n.memoizedState!==null,(n.stateNode.isHidden=F)&&!Q&&n.mode&1)for(re=n,Q=n.child;Q!==null;){for(X=re=Q;re!==null;){switch(K=re,ee=K.child,K.tag){case 0:case 11:case 14:case 15:la(4,K,K.return);break;case 1:Bs(K,K.return);var ie=K.stateNode;if(typeof ie.componentWillUnmount=="function"){c=K,a=K.return;try{r=c,ie.props=r.memoizedProps,ie.state=r.memoizedState,ie.componentWillUnmount()}catch(oe){et(c,a,oe)}}break;case 5:Bs(K,K.return);break;case 22:if(K.memoizedState!==null){Qp(X);continue}}ee!==null?(ee.return=K,re=ee):Qp(X)}Q=Q.sibling}e:for(Q=null,X=n;;){if(X.tag===5){if(Q===null){Q=X;try{d=X.stateNode,F?(p=d.style,typeof p.setProperty=="function"?p.setProperty("display","none","important"):p.display="none"):(I=X.stateNode,C=X.memoizedProps.style,_=C!=null&&C.hasOwnProperty("display")?C.display:null,I.style.display=So("display",_))}catch(oe){et(n,n.return,oe)}}}else if(X.tag===6){if(Q===null)try{X.stateNode.nodeValue=F?"":X.memoizedProps}catch(oe){et(n,n.return,oe)}}else if((X.tag!==22&&X.tag!==23||X.memoizedState===null||X===n)&&X.child!==null){X.child.return=X,X=X.child;continue}if(X===n)break e;for(;X.sibling===null;){if(X.return===null||X.return===n)break e;Q===X&&(Q=null),X=X.return}Q===X&&(Q=null),X.sibling.return=X.return,X=X.sibling}}break;case 19:Dn(r,n),Wn(n),c&4&&Hp(n);break;case 21:break;default:Dn(r,n),Wn(n)}}function Wn(n){var r=n.flags;if(r&2){try{e:{for(var a=n.return;a!==null;){if(Bp(a)){var c=a;break e}a=a.return}throw Error(t(160))}switch(c.tag){case 5:var d=c.stateNode;c.flags&32&&(kr(d,""),c.flags&=-33);var p=$p(n);ch(n,p,d);break;case 3:case 4:var _=c.stateNode.containerInfo,I=$p(n);uh(n,I,_);break;default:throw Error(t(161))}}catch(C){et(n,n.return,C)}n.flags&=-3}r&4096&&(n.flags&=-4097)}function Lv(n,r,a){re=n,Gp(n)}function Gp(n,r,a){for(var c=(n.mode&1)!==0;re!==null;){var d=re,p=d.child;if(d.tag===22&&c){var _=d.memoizedState!==null||Fl;if(!_){var I=d.alternate,C=I!==null&&I.memoizedState!==null||Ot;I=Fl;var F=Ot;if(Fl=_,(Ot=C)&&!F)for(re=d;re!==null;)_=re,C=_.child,_.tag===22&&_.memoizedState!==null?Xp(d):C!==null?(C.return=_,re=C):Xp(d);for(;p!==null;)re=p,Gp(p),p=p.sibling;re=d,Fl=I,Ot=F}Kp(n)}else d.subtreeFlags&8772&&p!==null?(p.return=d,re=p):Kp(n)}}function Kp(n){for(;re!==null;){var r=re;if(r.flags&8772){var a=r.alternate;try{if(r.flags&8772)switch(r.tag){case 0:case 11:case 15:Ot||Ul(5,r);break;case 1:var c=r.stateNode;if(r.flags&4&&!Ot)if(a===null)c.componentDidMount();else{var d=r.elementType===r.type?a.memoizedProps:Nn(r.type,a.memoizedProps);c.componentDidUpdate(d,a.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var p=r.updateQueue;p!==null&&Qf(r,p,c);break;case 3:var _=r.updateQueue;if(_!==null){if(a=null,r.child!==null)switch(r.child.tag){case 5:a=r.child.stateNode;break;case 1:a=r.child.stateNode}Qf(r,_,a)}break;case 5:var I=r.stateNode;if(a===null&&r.flags&4){a=I;var C=r.memoizedProps;switch(r.type){case"button":case"input":case"select":case"textarea":C.autoFocus&&a.focus();break;case"img":C.src&&(a.src=C.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(r.memoizedState===null){var F=r.alternate;if(F!==null){var Q=F.memoizedState;if(Q!==null){var X=Q.dehydrated;X!==null&&Rn(X)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}Ot||r.flags&512&&lh(r)}catch(K){et(r,r.return,K)}}if(r===n){re=null;break}if(a=r.sibling,a!==null){a.return=r.return,re=a;break}re=r.return}}function Qp(n){for(;re!==null;){var r=re;if(r===n){re=null;break}var a=r.sibling;if(a!==null){a.return=r.return,re=a;break}re=r.return}}function Xp(n){for(;re!==null;){var r=re;try{switch(r.tag){case 0:case 11:case 15:var a=r.return;try{Ul(4,r)}catch(C){et(r,a,C)}break;case 1:var c=r.stateNode;if(typeof c.componentDidMount=="function"){var d=r.return;try{c.componentDidMount()}catch(C){et(r,d,C)}}var p=r.return;try{lh(r)}catch(C){et(r,p,C)}break;case 5:var _=r.return;try{lh(r)}catch(C){et(r,_,C)}}}catch(C){et(r,r.return,C)}if(r===n){re=null;break}var I=r.sibling;if(I!==null){I.return=r.return,re=I;break}re=r.return}}var Mv=Math.ceil,jl=ge.ReactCurrentDispatcher,hh=ge.ReactCurrentOwner,pn=ge.ReactCurrentBatchConfig,Ve=0,_t=null,st=null,At=0,sn=0,$s=jr(0),dt=0,ua=null,Ui=0,zl=0,dh=0,ca=null,Kt=null,fh=0,qs=1/0,yr=null,Bl=!1,ph=null,Wr=null,$l=!1,Gr=null,ql=0,ha=0,mh=null,Hl=-1,Wl=0;function Bt(){return Ve&6?$e():Hl!==-1?Hl:Hl=$e()}function Kr(n){return n.mode&1?Ve&2&&At!==0?At&-At:vv.transition!==null?(Wl===0&&(Wl=Ci()),Wl):(n=ke,n!==0||(n=window.event,n=n===void 0?16:Uo(n.type)),n):1}function Vn(n,r,a,c){if(50<ha)throw ha=0,mh=null,Error(t(185));Dr(n,a,c),(!(Ve&2)||n!==_t)&&(n===_t&&(!(Ve&2)&&(zl|=a),dt===4&&Qr(n,At)),Qt(n,c),a===1&&Ve===0&&!(r.mode&1)&&(qs=$e()+500,El&&Br()))}function Qt(n,r){var a=n.callbackNode;sr(n,r);var c=Ri(n,n===_t?At:0);if(c===0)a!==null&&Oo(a),n.callbackNode=null,n.callbackPriority=0;else if(r=c&-c,n.callbackPriority!==r){if(a!=null&&Oo(a),r===1)n.tag===0?_v(Jp.bind(null,n)):bf(Jp.bind(null,n)),pv(function(){!(Ve&6)&&Br()}),a=null;else{switch(Or(c)){case 1:a=Si;break;case 4:a=Pr;break;case 16:a=an;break;case 536870912:a=Wa;break;default:a=an}a=om(a,Yp.bind(null,n))}n.callbackPriority=r,n.callbackNode=a}}function Yp(n,r){if(Hl=-1,Wl=0,Ve&6)throw Error(t(327));var a=n.callbackNode;if(Hs()&&n.callbackNode!==a)return null;var c=Ri(n,n===_t?At:0);if(c===0)return null;if(c&30||c&n.expiredLanes||r)r=Gl(n,c);else{r=c;var d=Ve;Ve|=2;var p=em();(_t!==n||At!==r)&&(yr=null,qs=$e()+500,zi(n,r));do try{Uv();break}catch(I){Zp(n,I)}while(!0);Vc(),jl.current=p,Ve=d,st!==null?r=0:(_t=null,At=0,r=dt)}if(r!==0){if(r===2&&(d=Zt(n),d!==0&&(c=d,r=gh(n,d))),r===1)throw a=ua,zi(n,0),Qr(n,c),Qt(n,$e()),a;if(r===6)Qr(n,c);else{if(d=n.current.alternate,!(c&30)&&!bv(d)&&(r=Gl(n,c),r===2&&(p=Zt(n),p!==0&&(c=p,r=gh(n,p))),r===1))throw a=ua,zi(n,0),Qr(n,c),Qt(n,$e()),a;switch(n.finishedWork=d,n.finishedLanes=c,r){case 0:case 1:throw Error(t(345));case 2:Bi(n,Kt,yr);break;case 3:if(Qr(n,c),(c&130023424)===c&&(r=fh+500-$e(),10<r)){if(Ri(n,0)!==0)break;if(d=n.suspendedLanes,(d&c)!==c){Bt(),n.pingedLanes|=n.suspendedLanes&d;break}n.timeoutHandle=Tc(Bi.bind(null,n,Kt,yr),r);break}Bi(n,Kt,yr);break;case 4:if(Qr(n,c),(c&4194240)===c)break;for(r=n.eventTimes,d=-1;0<c;){var _=31-Ut(c);p=1<<_,_=r[_],_>d&&(d=_),c&=~p}if(c=d,c=$e()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*Mv(c/1960))-c,10<c){n.timeoutHandle=Tc(Bi.bind(null,n,Kt,yr),c);break}Bi(n,Kt,yr);break;case 5:Bi(n,Kt,yr);break;default:throw Error(t(329))}}}return Qt(n,$e()),n.callbackNode===a?Yp.bind(null,n):null}function gh(n,r){var a=ca;return n.current.memoizedState.isDehydrated&&(zi(n,r).flags|=256),n=Gl(n,r),n!==2&&(r=Kt,Kt=a,r!==null&&yh(r)),n}function yh(n){Kt===null?Kt=n:Kt.push.apply(Kt,n)}function bv(n){for(var r=n;;){if(r.flags&16384){var a=r.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var c=0;c<a.length;c++){var d=a[c],p=d.getSnapshot;d=d.value;try{if(!kn(p(),d))return!1}catch{return!1}}}if(a=r.child,r.subtreeFlags&16384&&a!==null)a.return=r,r=a;else{if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function Qr(n,r){for(r&=~dh,r&=~zl,n.suspendedLanes|=r,n.pingedLanes&=~r,n=n.expirationTimes;0<r;){var a=31-Ut(r),c=1<<a;n[a]=-1,r&=~c}}function Jp(n){if(Ve&6)throw Error(t(327));Hs();var r=Ri(n,0);if(!(r&1))return Qt(n,$e()),null;var a=Gl(n,r);if(n.tag!==0&&a===2){var c=Zt(n);c!==0&&(r=c,a=gh(n,c))}if(a===1)throw a=ua,zi(n,0),Qr(n,r),Qt(n,$e()),a;if(a===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=r,Bi(n,Kt,yr),Qt(n,$e()),null}function _h(n,r){var a=Ve;Ve|=1;try{return n(r)}finally{Ve=a,Ve===0&&(qs=$e()+500,El&&Br())}}function ji(n){Gr!==null&&Gr.tag===0&&!(Ve&6)&&Hs();var r=Ve;Ve|=1;var a=pn.transition,c=ke;try{if(pn.transition=null,ke=1,n)return n()}finally{ke=c,pn.transition=a,Ve=r,!(Ve&6)&&Br()}}function vh(){sn=$s.current,Ge($s)}function zi(n,r){n.finishedWork=null,n.finishedLanes=0;var a=n.timeoutHandle;if(a!==-1&&(n.timeoutHandle=-1,fv(a)),st!==null)for(a=st.return;a!==null;){var c=a;switch(kc(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&_l();break;case 3:js(),Ge(Ht),Ge(xt),zc();break;case 5:Uc(c);break;case 4:js();break;case 13:Ge(Ye);break;case 19:Ge(Ye);break;case 10:Oc(c.type._context);break;case 22:case 23:vh()}a=a.return}if(_t=n,st=n=Xr(n.current,null),At=sn=r,dt=0,ua=null,dh=zl=Ui=0,Kt=ca=null,Mi!==null){for(r=0;r<Mi.length;r++)if(a=Mi[r],c=a.interleaved,c!==null){a.interleaved=null;var d=c.next,p=a.pending;if(p!==null){var _=p.next;p.next=d,c.next=_}a.pending=c}Mi=null}return n}function Zp(n,r){do{var a=st;try{if(Vc(),Nl.current=Ol,xl){for(var c=Je.memoizedState;c!==null;){var d=c.queue;d!==null&&(d.pending=null),c=c.next}xl=!1}if(Fi=0,yt=ht=Je=null,ra=!1,ia=0,hh.current=null,a===null||a.return===null){dt=1,ua=r,st=null;break}e:{var p=n,_=a.return,I=a,C=r;if(r=At,I.flags|=32768,C!==null&&typeof C=="object"&&typeof C.then=="function"){var F=C,Q=I,X=Q.tag;if(!(Q.mode&1)&&(X===0||X===11||X===15)){var K=Q.alternate;K?(Q.updateQueue=K.updateQueue,Q.memoizedState=K.memoizedState,Q.lanes=K.lanes):(Q.updateQueue=null,Q.memoizedState=null)}var ee=Sp(_);if(ee!==null){ee.flags&=-257,Ap(ee,_,I,p,r),ee.mode&1&&Ip(p,F,r),r=ee,C=F;var ie=r.updateQueue;if(ie===null){var oe=new Set;oe.add(C),r.updateQueue=oe}else ie.add(C);break e}else{if(!(r&1)){Ip(p,F,r),Eh();break e}C=Error(t(426))}}else if(Xe&&I.mode&1){var nt=Sp(_);if(nt!==null){!(nt.flags&65536)&&(nt.flags|=256),Ap(nt,_,I,p,r),xc(zs(C,I));break e}}p=C=zs(C,I),dt!==4&&(dt=2),ca===null?ca=[p]:ca.push(p),p=_;do{switch(p.tag){case 3:p.flags|=65536,r&=-r,p.lanes|=r;var L=wp(p,C,r);Kf(p,L);break e;case 1:I=C;var N=p.type,b=p.stateNode;if(!(p.flags&128)&&(typeof N.getDerivedStateFromError=="function"||b!==null&&typeof b.componentDidCatch=="function"&&(Wr===null||!Wr.has(b)))){p.flags|=65536,r&=-r,p.lanes|=r;var Y=Tp(p,I,r);Kf(p,Y);break e}}p=p.return}while(p!==null)}nm(a)}catch(le){r=le,st===a&&a!==null&&(st=a=a.return);continue}break}while(!0)}function em(){var n=jl.current;return jl.current=Ol,n===null?Ol:n}function Eh(){(dt===0||dt===3||dt===2)&&(dt=4),_t===null||!(Ui&268435455)&&!(zl&268435455)||Qr(_t,At)}function Gl(n,r){var a=Ve;Ve|=2;var c=em();(_t!==n||At!==r)&&(yr=null,zi(n,r));do try{Fv();break}catch(d){Zp(n,d)}while(!0);if(Vc(),Ve=a,jl.current=c,st!==null)throw Error(t(261));return _t=null,At=0,dt}function Fv(){for(;st!==null;)tm(st)}function Uv(){for(;st!==null&&!qa();)tm(st)}function tm(n){var r=sm(n.alternate,n,sn);n.memoizedProps=n.pendingProps,r===null?nm(n):st=r,hh.current=null}function nm(n){var r=n;do{var a=r.alternate;if(n=r.return,r.flags&32768){if(a=Dv(a,r),a!==null){a.flags&=32767,st=a;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{dt=6,st=null;return}}else if(a=xv(a,r,sn),a!==null){st=a;return}if(r=r.sibling,r!==null){st=r;return}st=r=n}while(r!==null);dt===0&&(dt=5)}function Bi(n,r,a){var c=ke,d=pn.transition;try{pn.transition=null,ke=1,jv(n,r,a,c)}finally{pn.transition=d,ke=c}return null}function jv(n,r,a,c){do Hs();while(Gr!==null);if(Ve&6)throw Error(t(327));a=n.finishedWork;var d=n.finishedLanes;if(a===null)return null;if(n.finishedWork=null,n.finishedLanes=0,a===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var p=a.lanes|a.childLanes;if(ze(n,p),n===_t&&(st=_t=null,At=0),!(a.subtreeFlags&2064)&&!(a.flags&2064)||$l||($l=!0,om(an,function(){return Hs(),null})),p=(a.flags&15990)!==0,a.subtreeFlags&15990||p){p=pn.transition,pn.transition=null;var _=ke;ke=1;var I=Ve;Ve|=4,hh.current=null,Ov(n,a),Wp(a,n),ov(Ec),Mr=!!vc,Ec=vc=null,n.current=a,Lv(a),rc(),Ve=I,ke=_,pn.transition=p}else n.current=a;if($l&&($l=!1,Gr=n,ql=d),p=n.pendingLanes,p===0&&(Wr=null),Ga(a.stateNode),Qt(n,$e()),r!==null)for(c=n.onRecoverableError,a=0;a<r.length;a++)d=r[a],c(d.value,{componentStack:d.stack,digest:d.digest});if(Bl)throw Bl=!1,n=ph,ph=null,n;return ql&1&&n.tag!==0&&Hs(),p=n.pendingLanes,p&1?n===mh?ha++:(ha=0,mh=n):ha=0,Br(),null}function Hs(){if(Gr!==null){var n=Or(ql),r=pn.transition,a=ke;try{if(pn.transition=null,ke=16>n?16:n,Gr===null)var c=!1;else{if(n=Gr,Gr=null,ql=0,Ve&6)throw Error(t(331));var d=Ve;for(Ve|=4,re=n.current;re!==null;){var p=re,_=p.child;if(re.flags&16){var I=p.deletions;if(I!==null){for(var C=0;C<I.length;C++){var F=I[C];for(re=F;re!==null;){var Q=re;switch(Q.tag){case 0:case 11:case 15:la(8,Q,p)}var X=Q.child;if(X!==null)X.return=Q,re=X;else for(;re!==null;){Q=re;var K=Q.sibling,ee=Q.return;if(zp(Q),Q===F){re=null;break}if(K!==null){K.return=ee,re=K;break}re=ee}}}var ie=p.alternate;if(ie!==null){var oe=ie.child;if(oe!==null){ie.child=null;do{var nt=oe.sibling;oe.sibling=null,oe=nt}while(oe!==null)}}re=p}}if(p.subtreeFlags&2064&&_!==null)_.return=p,re=_;else e:for(;re!==null;){if(p=re,p.flags&2048)switch(p.tag){case 0:case 11:case 15:la(9,p,p.return)}var L=p.sibling;if(L!==null){L.return=p.return,re=L;break e}re=p.return}}var N=n.current;for(re=N;re!==null;){_=re;var b=_.child;if(_.subtreeFlags&2064&&b!==null)b.return=_,re=b;else e:for(_=N;re!==null;){if(I=re,I.flags&2048)try{switch(I.tag){case 0:case 11:case 15:Ul(9,I)}}catch(le){et(I,I.return,le)}if(I===_){re=null;break e}var Y=I.sibling;if(Y!==null){Y.return=I.return,re=Y;break e}re=I.return}}if(Ve=d,Br(),Jt&&typeof Jt.onPostCommitFiberRoot=="function")try{Jt.onPostCommitFiberRoot(Ai,n)}catch{}c=!0}return c}finally{ke=a,pn.transition=r}}return!1}function rm(n,r,a){r=zs(a,r),r=wp(n,r,1),n=qr(n,r,1),r=Bt(),n!==null&&(Dr(n,1,r),Qt(n,r))}function et(n,r,a){if(n.tag===3)rm(n,n,a);else for(;r!==null;){if(r.tag===3){rm(r,n,a);break}else if(r.tag===1){var c=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(Wr===null||!Wr.has(c))){n=zs(a,n),n=Tp(r,n,1),r=qr(r,n,1),n=Bt(),r!==null&&(Dr(r,1,n),Qt(r,n));break}}r=r.return}}function zv(n,r,a){var c=n.pingCache;c!==null&&c.delete(r),r=Bt(),n.pingedLanes|=n.suspendedLanes&a,_t===n&&(At&a)===a&&(dt===4||dt===3&&(At&130023424)===At&&500>$e()-fh?zi(n,0):dh|=a),Qt(n,r)}function im(n,r){r===0&&(n.mode&1?(r=ps,ps<<=1,!(ps&130023424)&&(ps=4194304)):r=1);var a=Bt();n=pr(n,r),n!==null&&(Dr(n,r,a),Qt(n,a))}function Bv(n){var r=n.memoizedState,a=0;r!==null&&(a=r.retryLane),im(n,a)}function $v(n,r){var a=0;switch(n.tag){case 13:var c=n.stateNode,d=n.memoizedState;d!==null&&(a=d.retryLane);break;case 19:c=n.stateNode;break;default:throw Error(t(314))}c!==null&&c.delete(r),im(n,a)}var sm;sm=function(n,r,a){if(n!==null)if(n.memoizedProps!==r.pendingProps||Ht.current)Gt=!0;else{if(!(n.lanes&a)&&!(r.flags&128))return Gt=!1,Nv(n,r,a);Gt=!!(n.flags&131072)}else Gt=!1,Xe&&r.flags&1048576&&Ff(r,Tl,r.index);switch(r.lanes=0,r.tag){case 2:var c=r.type;bl(n,r),n=r.pendingProps;var d=Vs(r,xt.current);Us(r,a),d=qc(null,r,c,n,d,a);var p=Hc();return r.flags|=1,typeof d=="object"&&d!==null&&typeof d.render=="function"&&d.$$typeof===void 0?(r.tag=1,r.memoizedState=null,r.updateQueue=null,Wt(c)?(p=!0,vl(r)):p=!1,r.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,bc(r),d.updater=Ll,r.stateNode=d,d._reactInternals=r,Yc(r,c,n,a),r=th(null,r,c,!0,p,a)):(r.tag=0,Xe&&p&&Cc(r),zt(null,r,d,a),r=r.child),r;case 16:c=r.elementType;e:{switch(bl(n,r),n=r.pendingProps,d=c._init,c=d(c._payload),r.type=c,d=r.tag=Hv(c),n=Nn(c,n),d){case 0:r=eh(null,r,c,n,a);break e;case 1:r=xp(null,r,c,n,a);break e;case 11:r=Rp(null,r,c,n,a);break e;case 14:r=Cp(null,r,c,Nn(c.type,n),a);break e}throw Error(t(306,c,""))}return r;case 0:return c=r.type,d=r.pendingProps,d=r.elementType===c?d:Nn(c,d),eh(n,r,c,d,a);case 1:return c=r.type,d=r.pendingProps,d=r.elementType===c?d:Nn(c,d),xp(n,r,c,d,a);case 3:e:{if(Dp(r),n===null)throw Error(t(387));c=r.pendingProps,p=r.memoizedState,d=p.element,Gf(n,r),kl(r,c,null,a);var _=r.memoizedState;if(c=_.element,p.isDehydrated)if(p={element:c,isDehydrated:!1,cache:_.cache,pendingSuspenseBoundaries:_.pendingSuspenseBoundaries,transitions:_.transitions},r.updateQueue.baseState=p,r.memoizedState=p,r.flags&256){d=zs(Error(t(423)),r),r=Vp(n,r,c,a,d);break e}else if(c!==d){d=zs(Error(t(424)),r),r=Vp(n,r,c,a,d);break e}else for(rn=Ur(r.stateNode.containerInfo.firstChild),nn=r,Xe=!0,Pn=null,a=Hf(r,null,c,a),r.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(Ms(),c===d){r=gr(n,r,a);break e}zt(n,r,c,a)}r=r.child}return r;case 5:return Xf(r),n===null&&Nc(r),c=r.type,d=r.pendingProps,p=n!==null?n.memoizedProps:null,_=d.children,wc(c,d)?_=null:p!==null&&wc(c,p)&&(r.flags|=32),Np(n,r),zt(n,r,_,a),r.child;case 6:return n===null&&Nc(r),null;case 13:return Op(n,r,a);case 4:return Fc(r,r.stateNode.containerInfo),c=r.pendingProps,n===null?r.child=bs(r,null,c,a):zt(n,r,c,a),r.child;case 11:return c=r.type,d=r.pendingProps,d=r.elementType===c?d:Nn(c,d),Rp(n,r,c,d,a);case 7:return zt(n,r,r.pendingProps,a),r.child;case 8:return zt(n,r,r.pendingProps.children,a),r.child;case 12:return zt(n,r,r.pendingProps.children,a),r.child;case 10:e:{if(c=r.type._context,d=r.pendingProps,p=r.memoizedProps,_=d.value,qe(Al,c._currentValue),c._currentValue=_,p!==null)if(kn(p.value,_)){if(p.children===d.children&&!Ht.current){r=gr(n,r,a);break e}}else for(p=r.child,p!==null&&(p.return=r);p!==null;){var I=p.dependencies;if(I!==null){_=p.child;for(var C=I.firstContext;C!==null;){if(C.context===c){if(p.tag===1){C=mr(-1,a&-a),C.tag=2;var F=p.updateQueue;if(F!==null){F=F.shared;var Q=F.pending;Q===null?C.next=C:(C.next=Q.next,Q.next=C),F.pending=C}}p.lanes|=a,C=p.alternate,C!==null&&(C.lanes|=a),Lc(p.return,a,r),I.lanes|=a;break}C=C.next}}else if(p.tag===10)_=p.type===r.type?null:p.child;else if(p.tag===18){if(_=p.return,_===null)throw Error(t(341));_.lanes|=a,I=_.alternate,I!==null&&(I.lanes|=a),Lc(_,a,r),_=p.sibling}else _=p.child;if(_!==null)_.return=p;else for(_=p;_!==null;){if(_===r){_=null;break}if(p=_.sibling,p!==null){p.return=_.return,_=p;break}_=_.return}p=_}zt(n,r,d.children,a),r=r.child}return r;case 9:return d=r.type,c=r.pendingProps.children,Us(r,a),d=dn(d),c=c(d),r.flags|=1,zt(n,r,c,a),r.child;case 14:return c=r.type,d=Nn(c,r.pendingProps),d=Nn(c.type,d),Cp(n,r,c,d,a);case 15:return kp(n,r,r.type,r.pendingProps,a);case 17:return c=r.type,d=r.pendingProps,d=r.elementType===c?d:Nn(c,d),bl(n,r),r.tag=1,Wt(c)?(n=!0,vl(r)):n=!1,Us(r,a),vp(r,c,d),Yc(r,c,d,a),th(null,r,c,!0,n,a);case 19:return Mp(n,r,a);case 22:return Pp(n,r,a)}throw Error(t(156,r.tag))};function om(n,r){return ds(n,r)}function qv(n,r,a,c){this.tag=n,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function mn(n,r,a,c){return new qv(n,r,a,c)}function wh(n){return n=n.prototype,!(!n||!n.isReactComponent)}function Hv(n){if(typeof n=="function")return wh(n)?1:0;if(n!=null){if(n=n.$$typeof,n===D)return 11;if(n===Pt)return 14}return 2}function Xr(n,r){var a=n.alternate;return a===null?(a=mn(n.tag,r,n.key,n.mode),a.elementType=n.elementType,a.type=n.type,a.stateNode=n.stateNode,a.alternate=n,n.alternate=a):(a.pendingProps=r,a.type=n.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=n.flags&14680064,a.childLanes=n.childLanes,a.lanes=n.lanes,a.child=n.child,a.memoizedProps=n.memoizedProps,a.memoizedState=n.memoizedState,a.updateQueue=n.updateQueue,r=n.dependencies,a.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},a.sibling=n.sibling,a.index=n.index,a.ref=n.ref,a}function Kl(n,r,a,c,d,p){var _=2;if(c=n,typeof n=="function")wh(n)&&(_=1);else if(typeof n=="string")_=5;else e:switch(n){case R:return $i(a.children,d,p,r);case T:_=8,d|=8;break;case A:return n=mn(12,a,r,d|2),n.elementType=A,n.lanes=p,n;case S:return n=mn(13,a,r,d),n.elementType=S,n.lanes=p,n;case He:return n=mn(19,a,r,d),n.elementType=He,n.lanes=p,n;case je:return Ql(a,d,p,r);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case P:_=10;break e;case x:_=9;break e;case D:_=11;break e;case Pt:_=14;break e;case Nt:_=16,c=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return r=mn(_,a,r,d),r.elementType=n,r.type=c,r.lanes=p,r}function $i(n,r,a,c){return n=mn(7,n,c,r),n.lanes=a,n}function Ql(n,r,a,c){return n=mn(22,n,c,r),n.elementType=je,n.lanes=a,n.stateNode={isHidden:!1},n}function Th(n,r,a){return n=mn(6,n,null,r),n.lanes=a,n}function Ih(n,r,a){return r=mn(4,n.children!==null?n.children:[],n.key,r),r.lanes=a,r.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},r}function Wv(n,r,a,c,d){this.tag=r,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=xr(0),this.expirationTimes=xr(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=xr(0),this.identifierPrefix=c,this.onRecoverableError=d,this.mutableSourceEagerHydrationData=null}function Sh(n,r,a,c,d,p,_,I,C){return n=new Wv(n,r,a,I,C),r===1?(r=1,p===!0&&(r|=8)):r=0,p=mn(3,null,null,r),n.current=p,p.stateNode=n,p.memoizedState={element:c,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},bc(p),n}function Gv(n,r,a){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ye,key:c==null?null:""+c,children:n,containerInfo:r,implementation:a}}function am(n){if(!n)return zr;n=n._reactInternals;e:{if(wn(n)!==n||n.tag!==1)throw Error(t(170));var r=n;do{switch(r.tag){case 3:r=r.stateNode.context;break e;case 1:if(Wt(r.type)){r=r.stateNode.__reactInternalMemoizedMergedChildContext;break e}}r=r.return}while(r!==null);throw Error(t(171))}if(n.tag===1){var a=n.type;if(Wt(a))return Lf(n,a,r)}return r}function lm(n,r,a,c,d,p,_,I,C){return n=Sh(a,c,!0,n,d,p,_,I,C),n.context=am(null),a=n.current,c=Bt(),d=Kr(a),p=mr(c,d),p.callback=r??null,qr(a,p,d),n.current.lanes=d,Dr(n,d,c),Qt(n,c),n}function Xl(n,r,a,c){var d=r.current,p=Bt(),_=Kr(d);return a=am(a),r.context===null?r.context=a:r.pendingContext=a,r=mr(p,_),r.payload={element:n},c=c===void 0?null:c,c!==null&&(r.callback=c),n=qr(d,r,_),n!==null&&(Vn(n,d,_,p),Cl(n,d,_)),_}function Yl(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function um(n,r){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var a=n.retryLane;n.retryLane=a!==0&&a<r?a:r}}function Ah(n,r){um(n,r),(n=n.alternate)&&um(n,r)}var cm=typeof reportError=="function"?reportError:function(n){console.error(n)};function Rh(n){this._internalRoot=n}Jl.prototype.render=Rh.prototype.render=function(n){var r=this._internalRoot;if(r===null)throw Error(t(409));Xl(n,r,null,null)},Jl.prototype.unmount=Rh.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var r=n.containerInfo;ji(function(){Xl(null,n,null,null)}),r[cr]=null}};function Jl(n){this._internalRoot=n}Jl.prototype.unstable_scheduleHydration=function(n){if(n){var r=Ja();n={blockedOn:null,target:n,priority:r};for(var a=0;a<Un.length&&r!==0&&r<Un[a].priority;a++);Un.splice(a,0,n),a===0&&tl(n)}};function Ch(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function Zl(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function hm(){}function Kv(n,r,a,c,d){if(d){if(typeof c=="function"){var p=c;c=function(){var F=Yl(_);p.call(F)}}var _=lm(r,c,n,0,null,!1,!1,"",hm);return n._reactRootContainer=_,n[cr]=_.current,Qo(n.nodeType===8?n.parentNode:n),ji(),_}for(;d=n.lastChild;)n.removeChild(d);if(typeof c=="function"){var I=c;c=function(){var F=Yl(C);I.call(F)}}var C=Sh(n,0,!1,null,null,!1,!1,"",hm);return n._reactRootContainer=C,n[cr]=C.current,Qo(n.nodeType===8?n.parentNode:n),ji(function(){Xl(r,C,a,c)}),C}function eu(n,r,a,c,d){var p=a._reactRootContainer;if(p){var _=p;if(typeof d=="function"){var I=d;d=function(){var C=Yl(_);I.call(C)}}Xl(r,_,n,d)}else _=Kv(a,r,n,d,c);return Yl(_)}Xa=function(n){switch(n.tag){case 3:var r=n.stateNode;if(r.current.memoizedState.isDehydrated){var a=Nr(r.pendingLanes);a!==0&&(Vr(r,a|1),Qt(r,$e()),!(Ve&6)&&(qs=$e()+500,Br()))}break;case 13:ji(function(){var c=pr(n,1);if(c!==null){var d=Bt();Vn(c,n,1,d)}}),Ah(n,1)}},ms=function(n){if(n.tag===13){var r=pr(n,134217728);if(r!==null){var a=Bt();Vn(r,n,134217728,a)}Ah(n,134217728)}},Ya=function(n){if(n.tag===13){var r=Kr(n),a=pr(n,r);if(a!==null){var c=Bt();Vn(a,n,r,c)}Ah(n,r)}},Ja=function(){return ke},Za=function(n,r){var a=ke;try{return ke=n,r()}finally{ke=a}},os=function(n,r,a){switch(r){case"input":if(Eo(n,a),r=a.name,a.type==="radio"&&r!=null){for(a=n;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+r)+'][type="radio"]'),r=0;r<a.length;r++){var c=a[r];if(c!==n&&c.form===n.form){var d=yl(c);if(!d)throw Error(t(90));es(c),Eo(c,d)}}}break;case"textarea":is(n,a);break;case"select":r=a.value,r!=null&&nr(n,!!a.multiple,r,!1)}},Ei=_h,No=ji;var Qv={usingClientEntryPoint:!1,Events:[Jo,xs,yl,bn,Po,_h]},da={findFiberByHostInstance:Di,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Xv={bundleType:da.bundleType,version:da.version,rendererPackageName:da.rendererPackageName,rendererConfig:da.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ge.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=Vo(n),n===null?null:n.stateNode},findFiberByHostInstance:da.findFiberByHostInstance,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var tu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!tu.isDisabled&&tu.supportsFiber)try{Ai=tu.inject(Xv),Jt=tu}catch{}}return Xt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Qv,Xt.createPortal=function(n,r){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ch(r))throw Error(t(200));return Gv(n,r,null,a)},Xt.createRoot=function(n,r){if(!Ch(n))throw Error(t(299));var a=!1,c="",d=cm;return r!=null&&(r.unstable_strictMode===!0&&(a=!0),r.identifierPrefix!==void 0&&(c=r.identifierPrefix),r.onRecoverableError!==void 0&&(d=r.onRecoverableError)),r=Sh(n,1,!1,null,null,a,!1,c,d),n[cr]=r.current,Qo(n.nodeType===8?n.parentNode:n),new Rh(r)},Xt.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var r=n._reactInternals;if(r===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=Vo(r),n=n===null?null:n.stateNode,n},Xt.flushSync=function(n){return ji(n)},Xt.hydrate=function(n,r,a){if(!Zl(r))throw Error(t(200));return eu(null,n,r,!0,a)},Xt.hydrateRoot=function(n,r,a){if(!Ch(n))throw Error(t(405));var c=a!=null&&a.hydratedSources||null,d=!1,p="",_=cm;if(a!=null&&(a.unstable_strictMode===!0&&(d=!0),a.identifierPrefix!==void 0&&(p=a.identifierPrefix),a.onRecoverableError!==void 0&&(_=a.onRecoverableError)),r=lm(r,null,n,1,a??null,d,!1,p,_),n[cr]=r.current,Qo(n),c)for(n=0;n<c.length;n++)a=c[n],d=a._getVersion,d=d(a._source),r.mutableSourceEagerHydrationData==null?r.mutableSourceEagerHydrationData=[a,d]:r.mutableSourceEagerHydrationData.push(a,d);return new Jl(r)},Xt.render=function(n,r,a){if(!Zl(r))throw Error(t(200));return eu(null,n,r,!1,a)},Xt.unmountComponentAtNode=function(n){if(!Zl(n))throw Error(t(40));return n._reactRootContainer?(ji(function(){eu(null,null,n,!1,function(){n._reactRootContainer=null,n[cr]=null})}),!0):!1},Xt.unstable_batchedUpdates=_h,Xt.unstable_renderSubtreeIntoContainer=function(n,r,a,c){if(!Zl(a))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return eu(n,r,a,!1,c)},Xt.version="18.3.1-next-f1338f8080-20240426",Xt}var vm;function i0(){if(vm)return Nh.exports;vm=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(e){console.error(e)}}return i(),Nh.exports=r0(),Nh.exports}var Em;function s0(){if(Em)return nu;Em=1;var i=i0();return nu.createRoot=i.createRoot,nu.hydrateRoot=i.hydrateRoot,nu}var o0=s0(),wm={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fg=function(i){const e=[];let t=0;for(let s=0;s<i.length;s++){let o=i.charCodeAt(s);o<128?e[t++]=o:o<2048?(e[t++]=o>>6|192,e[t++]=o&63|128):(o&64512)===55296&&s+1<i.length&&(i.charCodeAt(s+1)&64512)===56320?(o=65536+((o&1023)<<10)+(i.charCodeAt(++s)&1023),e[t++]=o>>18|240,e[t++]=o>>12&63|128,e[t++]=o>>6&63|128,e[t++]=o&63|128):(e[t++]=o>>12|224,e[t++]=o>>6&63|128,e[t++]=o&63|128)}return e},a0=function(i){const e=[];let t=0,s=0;for(;t<i.length;){const o=i[t++];if(o<128)e[s++]=String.fromCharCode(o);else if(o>191&&o<224){const u=i[t++];e[s++]=String.fromCharCode((o&31)<<6|u&63)}else if(o>239&&o<365){const u=i[t++],h=i[t++],m=i[t++],g=((o&7)<<18|(u&63)<<12|(h&63)<<6|m&63)-65536;e[s++]=String.fromCharCode(55296+(g>>10)),e[s++]=String.fromCharCode(56320+(g&1023))}else{const u=i[t++],h=i[t++];e[s++]=String.fromCharCode((o&15)<<12|(u&63)<<6|h&63)}}return e.join("")},Ug={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(i,e){if(!Array.isArray(i))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let o=0;o<i.length;o+=3){const u=i[o],h=o+1<i.length,m=h?i[o+1]:0,g=o+2<i.length,v=g?i[o+2]:0,w=u>>2,k=(u&3)<<4|m>>4;let M=(m&15)<<2|v>>6,z=v&63;g||(z=64,h||(M=64)),s.push(t[w],t[k],t[M],t[z])}return s.join("")},encodeString(i,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(i):this.encodeByteArray(Fg(i),e)},decodeString(i,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(i):a0(this.decodeStringToByteArray(i,e))},decodeStringToByteArray(i,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let o=0;o<i.length;){const u=t[i.charAt(o++)],m=o<i.length?t[i.charAt(o)]:0;++o;const v=o<i.length?t[i.charAt(o)]:64;++o;const k=o<i.length?t[i.charAt(o)]:64;if(++o,u==null||m==null||v==null||k==null)throw new l0;const M=u<<2|m>>4;if(s.push(M),v!==64){const z=m<<4&240|v>>2;if(s.push(z),k!==64){const H=v<<6&192|k;s.push(H)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let i=0;i<this.ENCODED_VALS.length;i++)this.byteToCharMap_[i]=this.ENCODED_VALS.charAt(i),this.charToByteMap_[this.byteToCharMap_[i]]=i,this.byteToCharMapWebSafe_[i]=this.ENCODED_VALS_WEBSAFE.charAt(i),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[i]]=i,i>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(i)]=i,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(i)]=i)}}};class l0 extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const u0=function(i){const e=Fg(i);return Ug.encodeByteArray(e,!0)},Eu=function(i){return u0(i).replace(/\./g,"")},jg=function(i){try{return Ug.decodeString(i,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function c0(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const h0=()=>c0().__FIREBASE_DEFAULTS__,d0=()=>{if(typeof process>"u"||typeof wm>"u")return;const i=wm.__FIREBASE_DEFAULTS__;if(i)return JSON.parse(i)},f0=()=>{if(typeof document>"u")return;let i;try{i=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=i&&jg(i[1]);return e&&JSON.parse(e)},Fu=()=>{try{return h0()||d0()||f0()}catch(i){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${i}`);return}},zg=i=>{var e,t;return(t=(e=Fu())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[i]},p0=i=>{const e=zg(i);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),s]:[e.substring(0,t),s]},Bg=()=>{var i;return(i=Fu())===null||i===void 0?void 0:i.config},$g=i=>{var e;return(e=Fu())===null||e===void 0?void 0:e[`_${i}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m0{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,s)=>{t?this.reject(t):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,s))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function g0(i,e){if(i.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},s=e||"demo-project",o=i.iat||0,u=i.sub||i.user_id;if(!u)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const h=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:o,exp:o+3600,auth_time:o,sub:u,user_id:u,firebase:{sign_in_provider:"custom",identities:{}}},i);return[Eu(JSON.stringify(t)),Eu(JSON.stringify(h)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ft(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function y0(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ft())}function _0(){var i;const e=(i=Fu())===null||i===void 0?void 0:i.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function v0(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function E0(){const i=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof i=="object"&&i.id!==void 0}function w0(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function T0(){const i=Ft();return i.indexOf("MSIE ")>=0||i.indexOf("Trident/")>=0}function I0(){return!_0()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function S0(){try{return typeof indexedDB=="object"}catch{return!1}}function A0(){return new Promise((i,e)=>{try{let t=!0;const s="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(s);o.onsuccess=()=>{o.result.close(),t||self.indexedDB.deleteDatabase(s),i(!0)},o.onupgradeneeded=()=>{t=!1},o.onerror=()=>{var u;e(((u=o.error)===null||u===void 0?void 0:u.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const R0="FirebaseError";class Rr extends Error{constructor(e,t,s){super(t),this.code=e,this.customData=s,this.name=R0,Object.setPrototypeOf(this,Rr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,xa.prototype.create)}}class xa{constructor(e,t,s){this.service=e,this.serviceName=t,this.errors=s}create(e,...t){const s=t[0]||{},o=`${this.service}/${e}`,u=this.errors[e],h=u?C0(u,s):"Error",m=`${this.serviceName}: ${h} (${o}).`;return new Rr(o,m,s)}}function C0(i,e){return i.replace(k0,(t,s)=>{const o=e[s];return o!=null?String(o):`<${s}?>`})}const k0=/\{\$([^}]+)}/g;function P0(i){for(const e in i)if(Object.prototype.hasOwnProperty.call(i,e))return!1;return!0}function wu(i,e){if(i===e)return!0;const t=Object.keys(i),s=Object.keys(e);for(const o of t){if(!s.includes(o))return!1;const u=i[o],h=e[o];if(Tm(u)&&Tm(h)){if(!wu(u,h))return!1}else if(u!==h)return!1}for(const o of s)if(!t.includes(o))return!1;return!0}function Tm(i){return i!==null&&typeof i=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Da(i){const e=[];for(const[t,s]of Object.entries(i))Array.isArray(s)?s.forEach(o=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(o))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function N0(i,e){const t=new x0(i,e);return t.subscribe.bind(t)}class x0{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,s){let o;if(e===void 0&&t===void 0&&s===void 0)throw new Error("Missing Observer.");D0(e,["next","error","complete"])?o=e:o={next:e,error:t,complete:s},o.next===void 0&&(o.next=Vh),o.error===void 0&&(o.error=Vh),o.complete===void 0&&(o.complete=Vh);const u=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?o.error(this.finalError):o.complete()}catch{}}),this.observers.push(o),u}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function D0(i,e){if(typeof i!="object"||i===null)return!1;for(const t of e)if(t in i&&typeof i[t]=="function")return!0;return!1}function Vh(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _n(i){return i&&i._delegate?i._delegate:i}class Gi{constructor(e,t,s){this.name=e,this.instanceFactory=t,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qi="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V0{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const s=new m0;if(this.instancesDeferred.set(t,s),this.isInitialized(t)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:t});o&&s.resolve(o)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),o=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(u){if(o)return null;throw u}else{if(o)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(L0(e))try{this.getOrInitializeService({instanceIdentifier:qi})}catch{}for(const[t,s]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(t);try{const u=this.getOrInitializeService({instanceIdentifier:o});s.resolve(u)}catch{}}}}clearInstance(e=qi){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=qi){return this.instances.has(e)}getOptions(e=qi){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:s,options:t});for(const[u,h]of this.instancesDeferred.entries()){const m=this.normalizeInstanceIdentifier(u);s===m&&h.resolve(o)}return o}onInit(e,t){var s;const o=this.normalizeInstanceIdentifier(t),u=(s=this.onInitCallbacks.get(o))!==null&&s!==void 0?s:new Set;u.add(e),this.onInitCallbacks.set(o,u);const h=this.instances.get(o);return h&&e(h,o),()=>{u.delete(e)}}invokeOnInitCallbacks(e,t){const s=this.onInitCallbacks.get(t);if(s)for(const o of s)try{o(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:O0(e),options:t}),this.instances.set(e,s),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=qi){return this.component?this.component.multipleInstances?e:qi:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function O0(i){return i===qi?void 0:i}function L0(i){return i.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M0{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new V0(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Re;(function(i){i[i.DEBUG=0]="DEBUG",i[i.VERBOSE=1]="VERBOSE",i[i.INFO=2]="INFO",i[i.WARN=3]="WARN",i[i.ERROR=4]="ERROR",i[i.SILENT=5]="SILENT"})(Re||(Re={}));const b0={debug:Re.DEBUG,verbose:Re.VERBOSE,info:Re.INFO,warn:Re.WARN,error:Re.ERROR,silent:Re.SILENT},F0=Re.INFO,U0={[Re.DEBUG]:"log",[Re.VERBOSE]:"log",[Re.INFO]:"info",[Re.WARN]:"warn",[Re.ERROR]:"error"},j0=(i,e,...t)=>{if(e<i.logLevel)return;const s=new Date().toISOString(),o=U0[e];if(o)console[o](`[${s}]  ${i.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class pd{constructor(e){this.name=e,this._logLevel=F0,this._logHandler=j0,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Re))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?b0[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Re.DEBUG,...e),this._logHandler(this,Re.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Re.VERBOSE,...e),this._logHandler(this,Re.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Re.INFO,...e),this._logHandler(this,Re.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Re.WARN,...e),this._logHandler(this,Re.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Re.ERROR,...e),this._logHandler(this,Re.ERROR,...e)}}const z0=(i,e)=>e.some(t=>i instanceof t);let Im,Sm;function B0(){return Im||(Im=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function $0(){return Sm||(Sm=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const qg=new WeakMap,qh=new WeakMap,Hg=new WeakMap,Oh=new WeakMap,md=new WeakMap;function q0(i){const e=new Promise((t,s)=>{const o=()=>{i.removeEventListener("success",u),i.removeEventListener("error",h)},u=()=>{t(si(i.result)),o()},h=()=>{s(i.error),o()};i.addEventListener("success",u),i.addEventListener("error",h)});return e.then(t=>{t instanceof IDBCursor&&qg.set(t,i)}).catch(()=>{}),md.set(e,i),e}function H0(i){if(qh.has(i))return;const e=new Promise((t,s)=>{const o=()=>{i.removeEventListener("complete",u),i.removeEventListener("error",h),i.removeEventListener("abort",h)},u=()=>{t(),o()},h=()=>{s(i.error||new DOMException("AbortError","AbortError")),o()};i.addEventListener("complete",u),i.addEventListener("error",h),i.addEventListener("abort",h)});qh.set(i,e)}let Hh={get(i,e,t){if(i instanceof IDBTransaction){if(e==="done")return qh.get(i);if(e==="objectStoreNames")return i.objectStoreNames||Hg.get(i);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return si(i[e])},set(i,e,t){return i[e]=t,!0},has(i,e){return i instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in i}};function W0(i){Hh=i(Hh)}function G0(i){return i===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const s=i.call(Lh(this),e,...t);return Hg.set(s,e.sort?e.sort():[e]),si(s)}:$0().includes(i)?function(...e){return i.apply(Lh(this),e),si(qg.get(this))}:function(...e){return si(i.apply(Lh(this),e))}}function K0(i){return typeof i=="function"?G0(i):(i instanceof IDBTransaction&&H0(i),z0(i,B0())?new Proxy(i,Hh):i)}function si(i){if(i instanceof IDBRequest)return q0(i);if(Oh.has(i))return Oh.get(i);const e=K0(i);return e!==i&&(Oh.set(i,e),md.set(e,i)),e}const Lh=i=>md.get(i);function Q0(i,e,{blocked:t,upgrade:s,blocking:o,terminated:u}={}){const h=indexedDB.open(i,e),m=si(h);return s&&h.addEventListener("upgradeneeded",g=>{s(si(h.result),g.oldVersion,g.newVersion,si(h.transaction),g)}),t&&h.addEventListener("blocked",g=>t(g.oldVersion,g.newVersion,g)),m.then(g=>{u&&g.addEventListener("close",()=>u()),o&&g.addEventListener("versionchange",v=>o(v.oldVersion,v.newVersion,v))}).catch(()=>{}),m}const X0=["get","getKey","getAll","getAllKeys","count"],Y0=["put","add","delete","clear"],Mh=new Map;function Am(i,e){if(!(i instanceof IDBDatabase&&!(e in i)&&typeof e=="string"))return;if(Mh.get(e))return Mh.get(e);const t=e.replace(/FromIndex$/,""),s=e!==t,o=Y0.includes(t);if(!(t in(s?IDBIndex:IDBObjectStore).prototype)||!(o||X0.includes(t)))return;const u=async function(h,...m){const g=this.transaction(h,o?"readwrite":"readonly");let v=g.store;return s&&(v=v.index(m.shift())),(await Promise.all([v[t](...m),o&&g.done]))[0]};return Mh.set(e,u),u}W0(i=>({...i,get:(e,t,s)=>Am(e,t)||i.get(e,t,s),has:(e,t)=>!!Am(e,t)||i.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J0{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(Z0(t)){const s=t.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(t=>t).join(" ")}}function Z0(i){const e=i.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Wh="@firebase/app",Rm="0.10.18";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wr=new pd("@firebase/app"),eE="@firebase/app-compat",tE="@firebase/analytics-compat",nE="@firebase/analytics",rE="@firebase/app-check-compat",iE="@firebase/app-check",sE="@firebase/auth",oE="@firebase/auth-compat",aE="@firebase/database",lE="@firebase/data-connect",uE="@firebase/database-compat",cE="@firebase/functions",hE="@firebase/functions-compat",dE="@firebase/installations",fE="@firebase/installations-compat",pE="@firebase/messaging",mE="@firebase/messaging-compat",gE="@firebase/performance",yE="@firebase/performance-compat",_E="@firebase/remote-config",vE="@firebase/remote-config-compat",EE="@firebase/storage",wE="@firebase/storage-compat",TE="@firebase/firestore",IE="@firebase/vertexai",SE="@firebase/firestore-compat",AE="firebase",RE="11.2.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gh="[DEFAULT]",CE={[Wh]:"fire-core",[eE]:"fire-core-compat",[nE]:"fire-analytics",[tE]:"fire-analytics-compat",[iE]:"fire-app-check",[rE]:"fire-app-check-compat",[sE]:"fire-auth",[oE]:"fire-auth-compat",[aE]:"fire-rtdb",[lE]:"fire-data-connect",[uE]:"fire-rtdb-compat",[cE]:"fire-fn",[hE]:"fire-fn-compat",[dE]:"fire-iid",[fE]:"fire-iid-compat",[pE]:"fire-fcm",[mE]:"fire-fcm-compat",[gE]:"fire-perf",[yE]:"fire-perf-compat",[_E]:"fire-rc",[vE]:"fire-rc-compat",[EE]:"fire-gcs",[wE]:"fire-gcs-compat",[TE]:"fire-fst",[SE]:"fire-fst-compat",[IE]:"fire-vertex","fire-js":"fire-js",[AE]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tu=new Map,kE=new Map,Kh=new Map;function Cm(i,e){try{i.container.addComponent(e)}catch(t){wr.debug(`Component ${e.name} failed to register with FirebaseApp ${i.name}`,t)}}function no(i){const e=i.name;if(Kh.has(e))return wr.debug(`There were multiple attempts to register component ${e}.`),!1;Kh.set(e,i);for(const t of Tu.values())Cm(t,i);for(const t of kE.values())Cm(t,i);return!0}function gd(i,e){const t=i.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),i.container.getProvider(e)}function ri(i){return i.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PE={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},oi=new xa("app","Firebase",PE);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NE{constructor(e,t,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Gi("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw oi.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ho=RE;function Wg(i,e={}){let t=i;typeof e!="object"&&(e={name:e});const s=Object.assign({name:Gh,automaticDataCollectionEnabled:!1},e),o=s.name;if(typeof o!="string"||!o)throw oi.create("bad-app-name",{appName:String(o)});if(t||(t=Bg()),!t)throw oi.create("no-options");const u=Tu.get(o);if(u){if(wu(t,u.options)&&wu(s,u.config))return u;throw oi.create("duplicate-app",{appName:o})}const h=new M0(o);for(const g of Kh.values())h.addComponent(g);const m=new NE(t,s,h);return Tu.set(o,m),m}function Gg(i=Gh){const e=Tu.get(i);if(!e&&i===Gh&&Bg())return Wg();if(!e)throw oi.create("no-app",{appName:i});return e}function ai(i,e,t){var s;let o=(s=CE[i])!==null&&s!==void 0?s:i;t&&(o+=`-${t}`);const u=o.match(/\s|\//),h=e.match(/\s|\//);if(u||h){const m=[`Unable to register library "${o}" with version "${e}":`];u&&m.push(`library name "${o}" contains illegal characters (whitespace or "/")`),u&&h&&m.push("and"),h&&m.push(`version name "${e}" contains illegal characters (whitespace or "/")`),wr.warn(m.join(" "));return}no(new Gi(`${o}-version`,()=>({library:o,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xE="firebase-heartbeat-database",DE=1,Ta="firebase-heartbeat-store";let bh=null;function Kg(){return bh||(bh=Q0(xE,DE,{upgrade:(i,e)=>{switch(e){case 0:try{i.createObjectStore(Ta)}catch(t){console.warn(t)}}}}).catch(i=>{throw oi.create("idb-open",{originalErrorMessage:i.message})})),bh}async function VE(i){try{const t=(await Kg()).transaction(Ta),s=await t.objectStore(Ta).get(Qg(i));return await t.done,s}catch(e){if(e instanceof Rr)wr.warn(e.message);else{const t=oi.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});wr.warn(t.message)}}}async function km(i,e){try{const s=(await Kg()).transaction(Ta,"readwrite");await s.objectStore(Ta).put(e,Qg(i)),await s.done}catch(t){if(t instanceof Rr)wr.warn(t.message);else{const s=oi.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});wr.warn(s.message)}}}function Qg(i){return`${i.name}!${i.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OE=1024,LE=30*24*60*60*1e3;class ME{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new FE(t),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,t;try{const o=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),u=Pm();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===u||this._heartbeatsCache.heartbeats.some(h=>h.date===u)?void 0:(this._heartbeatsCache.heartbeats.push({date:u,agent:o}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(h=>{const m=new Date(h.date).valueOf();return Date.now()-m<=LE}),this._storage.overwrite(this._heartbeatsCache))}catch(s){wr.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Pm(),{heartbeatsToSend:s,unsentEntries:o}=bE(this._heartbeatsCache.heartbeats),u=Eu(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=t,o.length>0?(this._heartbeatsCache.heartbeats=o,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),u}catch(t){return wr.warn(t),""}}}function Pm(){return new Date().toISOString().substring(0,10)}function bE(i,e=OE){const t=[];let s=i.slice();for(const o of i){const u=t.find(h=>h.agent===o.agent);if(u){if(u.dates.push(o.date),Nm(t)>e){u.dates.pop();break}}else if(t.push({agent:o.agent,dates:[o.date]}),Nm(t)>e){t.pop();break}s=s.slice(1)}return{heartbeatsToSend:t,unsentEntries:s}}class FE{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return S0()?A0().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await VE(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const o=await this.read();return km(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:o.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const o=await this.read();return km(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:o.lastSentHeartbeatDate,heartbeats:[...o.heartbeats,...e.heartbeats]})}else return}}function Nm(i){return Eu(JSON.stringify({version:2,heartbeats:i})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function UE(i){no(new Gi("platform-logger",e=>new J0(e),"PRIVATE")),no(new Gi("heartbeat",e=>new ME(e),"PRIVATE")),ai(Wh,Rm,i),ai(Wh,Rm,"esm2017"),ai("fire-js","")}UE("");var xm=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var li,Xg;(function(){var i;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(R,T){function A(){}A.prototype=T.prototype,R.D=T.prototype,R.prototype=new A,R.prototype.constructor=R,R.C=function(P,x,D){for(var S=Array(arguments.length-2),He=2;He<arguments.length;He++)S[He-2]=arguments[He];return T.prototype[x].apply(P,S)}}function t(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(s,t),s.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function o(R,T,A){A||(A=0);var P=Array(16);if(typeof T=="string")for(var x=0;16>x;++x)P[x]=T.charCodeAt(A++)|T.charCodeAt(A++)<<8|T.charCodeAt(A++)<<16|T.charCodeAt(A++)<<24;else for(x=0;16>x;++x)P[x]=T[A++]|T[A++]<<8|T[A++]<<16|T[A++]<<24;T=R.g[0],A=R.g[1],x=R.g[2];var D=R.g[3],S=T+(D^A&(x^D))+P[0]+3614090360&4294967295;T=A+(S<<7&4294967295|S>>>25),S=D+(x^T&(A^x))+P[1]+3905402710&4294967295,D=T+(S<<12&4294967295|S>>>20),S=x+(A^D&(T^A))+P[2]+606105819&4294967295,x=D+(S<<17&4294967295|S>>>15),S=A+(T^x&(D^T))+P[3]+3250441966&4294967295,A=x+(S<<22&4294967295|S>>>10),S=T+(D^A&(x^D))+P[4]+4118548399&4294967295,T=A+(S<<7&4294967295|S>>>25),S=D+(x^T&(A^x))+P[5]+1200080426&4294967295,D=T+(S<<12&4294967295|S>>>20),S=x+(A^D&(T^A))+P[6]+2821735955&4294967295,x=D+(S<<17&4294967295|S>>>15),S=A+(T^x&(D^T))+P[7]+4249261313&4294967295,A=x+(S<<22&4294967295|S>>>10),S=T+(D^A&(x^D))+P[8]+1770035416&4294967295,T=A+(S<<7&4294967295|S>>>25),S=D+(x^T&(A^x))+P[9]+2336552879&4294967295,D=T+(S<<12&4294967295|S>>>20),S=x+(A^D&(T^A))+P[10]+4294925233&4294967295,x=D+(S<<17&4294967295|S>>>15),S=A+(T^x&(D^T))+P[11]+2304563134&4294967295,A=x+(S<<22&4294967295|S>>>10),S=T+(D^A&(x^D))+P[12]+1804603682&4294967295,T=A+(S<<7&4294967295|S>>>25),S=D+(x^T&(A^x))+P[13]+4254626195&4294967295,D=T+(S<<12&4294967295|S>>>20),S=x+(A^D&(T^A))+P[14]+2792965006&4294967295,x=D+(S<<17&4294967295|S>>>15),S=A+(T^x&(D^T))+P[15]+1236535329&4294967295,A=x+(S<<22&4294967295|S>>>10),S=T+(x^D&(A^x))+P[1]+4129170786&4294967295,T=A+(S<<5&4294967295|S>>>27),S=D+(A^x&(T^A))+P[6]+3225465664&4294967295,D=T+(S<<9&4294967295|S>>>23),S=x+(T^A&(D^T))+P[11]+643717713&4294967295,x=D+(S<<14&4294967295|S>>>18),S=A+(D^T&(x^D))+P[0]+3921069994&4294967295,A=x+(S<<20&4294967295|S>>>12),S=T+(x^D&(A^x))+P[5]+3593408605&4294967295,T=A+(S<<5&4294967295|S>>>27),S=D+(A^x&(T^A))+P[10]+38016083&4294967295,D=T+(S<<9&4294967295|S>>>23),S=x+(T^A&(D^T))+P[15]+3634488961&4294967295,x=D+(S<<14&4294967295|S>>>18),S=A+(D^T&(x^D))+P[4]+3889429448&4294967295,A=x+(S<<20&4294967295|S>>>12),S=T+(x^D&(A^x))+P[9]+568446438&4294967295,T=A+(S<<5&4294967295|S>>>27),S=D+(A^x&(T^A))+P[14]+3275163606&4294967295,D=T+(S<<9&4294967295|S>>>23),S=x+(T^A&(D^T))+P[3]+4107603335&4294967295,x=D+(S<<14&4294967295|S>>>18),S=A+(D^T&(x^D))+P[8]+1163531501&4294967295,A=x+(S<<20&4294967295|S>>>12),S=T+(x^D&(A^x))+P[13]+2850285829&4294967295,T=A+(S<<5&4294967295|S>>>27),S=D+(A^x&(T^A))+P[2]+4243563512&4294967295,D=T+(S<<9&4294967295|S>>>23),S=x+(T^A&(D^T))+P[7]+1735328473&4294967295,x=D+(S<<14&4294967295|S>>>18),S=A+(D^T&(x^D))+P[12]+2368359562&4294967295,A=x+(S<<20&4294967295|S>>>12),S=T+(A^x^D)+P[5]+4294588738&4294967295,T=A+(S<<4&4294967295|S>>>28),S=D+(T^A^x)+P[8]+2272392833&4294967295,D=T+(S<<11&4294967295|S>>>21),S=x+(D^T^A)+P[11]+1839030562&4294967295,x=D+(S<<16&4294967295|S>>>16),S=A+(x^D^T)+P[14]+4259657740&4294967295,A=x+(S<<23&4294967295|S>>>9),S=T+(A^x^D)+P[1]+2763975236&4294967295,T=A+(S<<4&4294967295|S>>>28),S=D+(T^A^x)+P[4]+1272893353&4294967295,D=T+(S<<11&4294967295|S>>>21),S=x+(D^T^A)+P[7]+4139469664&4294967295,x=D+(S<<16&4294967295|S>>>16),S=A+(x^D^T)+P[10]+3200236656&4294967295,A=x+(S<<23&4294967295|S>>>9),S=T+(A^x^D)+P[13]+681279174&4294967295,T=A+(S<<4&4294967295|S>>>28),S=D+(T^A^x)+P[0]+3936430074&4294967295,D=T+(S<<11&4294967295|S>>>21),S=x+(D^T^A)+P[3]+3572445317&4294967295,x=D+(S<<16&4294967295|S>>>16),S=A+(x^D^T)+P[6]+76029189&4294967295,A=x+(S<<23&4294967295|S>>>9),S=T+(A^x^D)+P[9]+3654602809&4294967295,T=A+(S<<4&4294967295|S>>>28),S=D+(T^A^x)+P[12]+3873151461&4294967295,D=T+(S<<11&4294967295|S>>>21),S=x+(D^T^A)+P[15]+530742520&4294967295,x=D+(S<<16&4294967295|S>>>16),S=A+(x^D^T)+P[2]+3299628645&4294967295,A=x+(S<<23&4294967295|S>>>9),S=T+(x^(A|~D))+P[0]+4096336452&4294967295,T=A+(S<<6&4294967295|S>>>26),S=D+(A^(T|~x))+P[7]+1126891415&4294967295,D=T+(S<<10&4294967295|S>>>22),S=x+(T^(D|~A))+P[14]+2878612391&4294967295,x=D+(S<<15&4294967295|S>>>17),S=A+(D^(x|~T))+P[5]+4237533241&4294967295,A=x+(S<<21&4294967295|S>>>11),S=T+(x^(A|~D))+P[12]+1700485571&4294967295,T=A+(S<<6&4294967295|S>>>26),S=D+(A^(T|~x))+P[3]+2399980690&4294967295,D=T+(S<<10&4294967295|S>>>22),S=x+(T^(D|~A))+P[10]+4293915773&4294967295,x=D+(S<<15&4294967295|S>>>17),S=A+(D^(x|~T))+P[1]+2240044497&4294967295,A=x+(S<<21&4294967295|S>>>11),S=T+(x^(A|~D))+P[8]+1873313359&4294967295,T=A+(S<<6&4294967295|S>>>26),S=D+(A^(T|~x))+P[15]+4264355552&4294967295,D=T+(S<<10&4294967295|S>>>22),S=x+(T^(D|~A))+P[6]+2734768916&4294967295,x=D+(S<<15&4294967295|S>>>17),S=A+(D^(x|~T))+P[13]+1309151649&4294967295,A=x+(S<<21&4294967295|S>>>11),S=T+(x^(A|~D))+P[4]+4149444226&4294967295,T=A+(S<<6&4294967295|S>>>26),S=D+(A^(T|~x))+P[11]+3174756917&4294967295,D=T+(S<<10&4294967295|S>>>22),S=x+(T^(D|~A))+P[2]+718787259&4294967295,x=D+(S<<15&4294967295|S>>>17),S=A+(D^(x|~T))+P[9]+3951481745&4294967295,R.g[0]=R.g[0]+T&4294967295,R.g[1]=R.g[1]+(x+(S<<21&4294967295|S>>>11))&4294967295,R.g[2]=R.g[2]+x&4294967295,R.g[3]=R.g[3]+D&4294967295}s.prototype.u=function(R,T){T===void 0&&(T=R.length);for(var A=T-this.blockSize,P=this.B,x=this.h,D=0;D<T;){if(x==0)for(;D<=A;)o(this,R,D),D+=this.blockSize;if(typeof R=="string"){for(;D<T;)if(P[x++]=R.charCodeAt(D++),x==this.blockSize){o(this,P),x=0;break}}else for(;D<T;)if(P[x++]=R[D++],x==this.blockSize){o(this,P),x=0;break}}this.h=x,this.o+=T},s.prototype.v=function(){var R=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);R[0]=128;for(var T=1;T<R.length-8;++T)R[T]=0;var A=8*this.o;for(T=R.length-8;T<R.length;++T)R[T]=A&255,A/=256;for(this.u(R),R=Array(16),T=A=0;4>T;++T)for(var P=0;32>P;P+=8)R[A++]=this.g[T]>>>P&255;return R};function u(R,T){var A=m;return Object.prototype.hasOwnProperty.call(A,R)?A[R]:A[R]=T(R)}function h(R,T){this.h=T;for(var A=[],P=!0,x=R.length-1;0<=x;x--){var D=R[x]|0;P&&D==T||(A[x]=D,P=!1)}this.g=A}var m={};function g(R){return-128<=R&&128>R?u(R,function(T){return new h([T|0],0>T?-1:0)}):new h([R|0],0>R?-1:0)}function v(R){if(isNaN(R)||!isFinite(R))return k;if(0>R)return B(v(-R));for(var T=[],A=1,P=0;R>=A;P++)T[P]=R/A|0,A*=4294967296;return new h(T,0)}function w(R,T){if(R.length==0)throw Error("number format error: empty string");if(T=T||10,2>T||36<T)throw Error("radix out of range: "+T);if(R.charAt(0)=="-")return B(w(R.substring(1),T));if(0<=R.indexOf("-"))throw Error('number format error: interior "-" character');for(var A=v(Math.pow(T,8)),P=k,x=0;x<R.length;x+=8){var D=Math.min(8,R.length-x),S=parseInt(R.substring(x,x+D),T);8>D?(D=v(Math.pow(T,D)),P=P.j(D).add(v(S))):(P=P.j(A),P=P.add(v(S)))}return P}var k=g(0),M=g(1),z=g(16777216);i=h.prototype,i.m=function(){if(G(this))return-B(this).m();for(var R=0,T=1,A=0;A<this.g.length;A++){var P=this.i(A);R+=(0<=P?P:4294967296+P)*T,T*=4294967296}return R},i.toString=function(R){if(R=R||10,2>R||36<R)throw Error("radix out of range: "+R);if(H(this))return"0";if(G(this))return"-"+B(this).toString(R);for(var T=v(Math.pow(R,6)),A=this,P="";;){var x=ge(A,T).g;A=ue(A,x.j(T));var D=((0<A.g.length?A.g[0]:A.h)>>>0).toString(R);if(A=x,H(A))return D+P;for(;6>D.length;)D="0"+D;P=D+P}},i.i=function(R){return 0>R?0:R<this.g.length?this.g[R]:this.h};function H(R){if(R.h!=0)return!1;for(var T=0;T<R.g.length;T++)if(R.g[T]!=0)return!1;return!0}function G(R){return R.h==-1}i.l=function(R){return R=ue(this,R),G(R)?-1:H(R)?0:1};function B(R){for(var T=R.g.length,A=[],P=0;P<T;P++)A[P]=~R.g[P];return new h(A,~R.h).add(M)}i.abs=function(){return G(this)?B(this):this},i.add=function(R){for(var T=Math.max(this.g.length,R.g.length),A=[],P=0,x=0;x<=T;x++){var D=P+(this.i(x)&65535)+(R.i(x)&65535),S=(D>>>16)+(this.i(x)>>>16)+(R.i(x)>>>16);P=S>>>16,D&=65535,S&=65535,A[x]=S<<16|D}return new h(A,A[A.length-1]&-2147483648?-1:0)};function ue(R,T){return R.add(B(T))}i.j=function(R){if(H(this)||H(R))return k;if(G(this))return G(R)?B(this).j(B(R)):B(B(this).j(R));if(G(R))return B(this.j(B(R)));if(0>this.l(z)&&0>R.l(z))return v(this.m()*R.m());for(var T=this.g.length+R.g.length,A=[],P=0;P<2*T;P++)A[P]=0;for(P=0;P<this.g.length;P++)for(var x=0;x<R.g.length;x++){var D=this.i(P)>>>16,S=this.i(P)&65535,He=R.i(x)>>>16,Pt=R.i(x)&65535;A[2*P+2*x]+=S*Pt,ce(A,2*P+2*x),A[2*P+2*x+1]+=D*Pt,ce(A,2*P+2*x+1),A[2*P+2*x+1]+=S*He,ce(A,2*P+2*x+1),A[2*P+2*x+2]+=D*He,ce(A,2*P+2*x+2)}for(P=0;P<T;P++)A[P]=A[2*P+1]<<16|A[2*P];for(P=T;P<2*T;P++)A[P]=0;return new h(A,0)};function ce(R,T){for(;(R[T]&65535)!=R[T];)R[T+1]+=R[T]>>>16,R[T]&=65535,T++}function ae(R,T){this.g=R,this.h=T}function ge(R,T){if(H(T))throw Error("division by zero");if(H(R))return new ae(k,k);if(G(R))return T=ge(B(R),T),new ae(B(T.g),B(T.h));if(G(T))return T=ge(R,B(T)),new ae(B(T.g),T.h);if(30<R.g.length){if(G(R)||G(T))throw Error("slowDivide_ only works with positive integers.");for(var A=M,P=T;0>=P.l(R);)A=Oe(A),P=Oe(P);var x=ye(A,1),D=ye(P,1);for(P=ye(P,2),A=ye(A,2);!H(P);){var S=D.add(P);0>=S.l(R)&&(x=x.add(A),D=S),P=ye(P,1),A=ye(A,1)}return T=ue(R,x.j(T)),new ae(x,T)}for(x=k;0<=R.l(T);){for(A=Math.max(1,Math.floor(R.m()/T.m())),P=Math.ceil(Math.log(A)/Math.LN2),P=48>=P?1:Math.pow(2,P-48),D=v(A),S=D.j(T);G(S)||0<S.l(R);)A-=P,D=v(A),S=D.j(T);H(D)&&(D=M),x=x.add(D),R=ue(R,S)}return new ae(x,R)}i.A=function(R){return ge(this,R).h},i.and=function(R){for(var T=Math.max(this.g.length,R.g.length),A=[],P=0;P<T;P++)A[P]=this.i(P)&R.i(P);return new h(A,this.h&R.h)},i.or=function(R){for(var T=Math.max(this.g.length,R.g.length),A=[],P=0;P<T;P++)A[P]=this.i(P)|R.i(P);return new h(A,this.h|R.h)},i.xor=function(R){for(var T=Math.max(this.g.length,R.g.length),A=[],P=0;P<T;P++)A[P]=this.i(P)^R.i(P);return new h(A,this.h^R.h)};function Oe(R){for(var T=R.g.length+1,A=[],P=0;P<T;P++)A[P]=R.i(P)<<1|R.i(P-1)>>>31;return new h(A,R.h)}function ye(R,T){var A=T>>5;T%=32;for(var P=R.g.length-A,x=[],D=0;D<P;D++)x[D]=0<T?R.i(D+A)>>>T|R.i(D+A+1)<<32-T:R.i(D+A);return new h(x,R.h)}s.prototype.digest=s.prototype.v,s.prototype.reset=s.prototype.s,s.prototype.update=s.prototype.u,Xg=s,h.prototype.add=h.prototype.add,h.prototype.multiply=h.prototype.j,h.prototype.modulo=h.prototype.A,h.prototype.compare=h.prototype.l,h.prototype.toNumber=h.prototype.m,h.prototype.toString=h.prototype.toString,h.prototype.getBits=h.prototype.i,h.fromNumber=v,h.fromString=w,li=h}).apply(typeof xm<"u"?xm:typeof self<"u"?self:typeof window<"u"?window:{});var ru=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Yg,pa,Jg,cu,Qh,Zg,ey,ty;(function(){var i,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(l,f,y){return l==Array.prototype||l==Object.prototype||(l[f]=y.value),l};function t(l){l=[typeof globalThis=="object"&&globalThis,l,typeof window=="object"&&window,typeof self=="object"&&self,typeof ru=="object"&&ru];for(var f=0;f<l.length;++f){var y=l[f];if(y&&y.Math==Math)return y}throw Error("Cannot find global object")}var s=t(this);function o(l,f){if(f)e:{var y=s;l=l.split(".");for(var E=0;E<l.length-1;E++){var O=l[E];if(!(O in y))break e;y=y[O]}l=l[l.length-1],E=y[l],f=f(E),f!=E&&f!=null&&e(y,l,{configurable:!0,writable:!0,value:f})}}function u(l,f){l instanceof String&&(l+="");var y=0,E=!1,O={next:function(){if(!E&&y<l.length){var U=y++;return{value:f(U,l[U]),done:!1}}return E=!0,{done:!0,value:void 0}}};return O[Symbol.iterator]=function(){return O},O}o("Array.prototype.values",function(l){return l||function(){return u(this,function(f,y){return y})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var h=h||{},m=this||self;function g(l){var f=typeof l;return f=f!="object"?f:l?Array.isArray(l)?"array":f:"null",f=="array"||f=="object"&&typeof l.length=="number"}function v(l){var f=typeof l;return f=="object"&&l!=null||f=="function"}function w(l,f,y){return l.call.apply(l.bind,arguments)}function k(l,f,y){if(!l)throw Error();if(2<arguments.length){var E=Array.prototype.slice.call(arguments,2);return function(){var O=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(O,E),l.apply(f,O)}}return function(){return l.apply(f,arguments)}}function M(l,f,y){return M=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?w:k,M.apply(null,arguments)}function z(l,f){var y=Array.prototype.slice.call(arguments,1);return function(){var E=y.slice();return E.push.apply(E,arguments),l.apply(this,E)}}function H(l,f){function y(){}y.prototype=f.prototype,l.aa=f.prototype,l.prototype=new y,l.prototype.constructor=l,l.Qb=function(E,O,U){for(var J=Array(arguments.length-2),Ue=2;Ue<arguments.length;Ue++)J[Ue-2]=arguments[Ue];return f.prototype[O].apply(E,J)}}function G(l){const f=l.length;if(0<f){const y=Array(f);for(let E=0;E<f;E++)y[E]=l[E];return y}return[]}function B(l,f){for(let y=1;y<arguments.length;y++){const E=arguments[y];if(g(E)){const O=l.length||0,U=E.length||0;l.length=O+U;for(let J=0;J<U;J++)l[O+J]=E[J]}else l.push(E)}}class ue{constructor(f,y){this.i=f,this.j=y,this.h=0,this.g=null}get(){let f;return 0<this.h?(this.h--,f=this.g,this.g=f.next,f.next=null):f=this.i(),f}}function ce(l){return/^[\s\xa0]*$/.test(l)}function ae(){var l=m.navigator;return l&&(l=l.userAgent)?l:""}function ge(l){return ge[" "](l),l}ge[" "]=function(){};var Oe=ae().indexOf("Gecko")!=-1&&!(ae().toLowerCase().indexOf("webkit")!=-1&&ae().indexOf("Edge")==-1)&&!(ae().indexOf("Trident")!=-1||ae().indexOf("MSIE")!=-1)&&ae().indexOf("Edge")==-1;function ye(l,f,y){for(const E in l)f.call(y,l[E],E,l)}function R(l,f){for(const y in l)f.call(void 0,l[y],y,l)}function T(l){const f={};for(const y in l)f[y]=l[y];return f}const A="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function P(l,f){let y,E;for(let O=1;O<arguments.length;O++){E=arguments[O];for(y in E)l[y]=E[y];for(let U=0;U<A.length;U++)y=A[U],Object.prototype.hasOwnProperty.call(E,y)&&(l[y]=E[y])}}function x(l){var f=1;l=l.split(":");const y=[];for(;0<f&&l.length;)y.push(l.shift()),f--;return l.length&&y.push(l.join(":")),y}function D(l){m.setTimeout(()=>{throw l},0)}function S(){var l=fe;let f=null;return l.g&&(f=l.g,l.g=l.g.next,l.g||(l.h=null),f.next=null),f}class He{constructor(){this.h=this.g=null}add(f,y){const E=Pt.get();E.set(f,y),this.h?this.h.next=E:this.g=E,this.h=E}}var Pt=new ue(()=>new Nt,l=>l.reset());class Nt{constructor(){this.next=this.g=this.h=null}set(f,y){this.h=f,this.g=y,this.next=null}reset(){this.next=this.g=this.h=null}}let je,Z=!1,fe=new He,te=()=>{const l=m.Promise.resolve(void 0);je=()=>{l.then(V)}};var V=()=>{for(var l;l=S();){try{l.h.call(l.g)}catch(y){D(y)}var f=Pt;f.j(l),100>f.h&&(f.h++,l.next=f.g,f.g=l)}Z=!1};function q(){this.s=this.s,this.C=this.C}q.prototype.s=!1,q.prototype.ma=function(){this.s||(this.s=!0,this.N())},q.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function he(l,f){this.type=l,this.g=this.target=f,this.defaultPrevented=!1}he.prototype.h=function(){this.defaultPrevented=!0};var Ie=function(){if(!m.addEventListener||!Object.defineProperty)return!1;var l=!1,f=Object.defineProperty({},"passive",{get:function(){l=!0}});try{const y=()=>{};m.addEventListener("test",y,f),m.removeEventListener("test",y,f)}catch{}return l}();function Se(l,f){if(he.call(this,l?l.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,l){var y=this.type=l.type,E=l.changedTouches&&l.changedTouches.length?l.changedTouches[0]:null;if(this.target=l.target||l.srcElement,this.g=f,f=l.relatedTarget){if(Oe){e:{try{ge(f.nodeName);var O=!0;break e}catch{}O=!1}O||(f=null)}}else y=="mouseover"?f=l.fromElement:y=="mouseout"&&(f=l.toElement);this.relatedTarget=f,E?(this.clientX=E.clientX!==void 0?E.clientX:E.pageX,this.clientY=E.clientY!==void 0?E.clientY:E.pageY,this.screenX=E.screenX||0,this.screenY=E.screenY||0):(this.clientX=l.clientX!==void 0?l.clientX:l.pageX,this.clientY=l.clientY!==void 0?l.clientY:l.pageY,this.screenX=l.screenX||0,this.screenY=l.screenY||0),this.button=l.button,this.key=l.key||"",this.ctrlKey=l.ctrlKey,this.altKey=l.altKey,this.shiftKey=l.shiftKey,this.metaKey=l.metaKey,this.pointerId=l.pointerId||0,this.pointerType=typeof l.pointerType=="string"?l.pointerType:Ne[l.pointerType]||"",this.state=l.state,this.i=l,l.defaultPrevented&&Se.aa.h.call(this)}}H(Se,he);var Ne={2:"touch",3:"pen",4:"mouse"};Se.prototype.h=function(){Se.aa.h.call(this);var l=this.i;l.preventDefault?l.preventDefault():l.returnValue=!1};var Me="closure_listenable_"+(1e6*Math.random()|0),be=0;function Be(l,f,y,E,O){this.listener=l,this.proxy=null,this.src=f,this.type=y,this.capture=!!E,this.ha=O,this.key=++be,this.da=this.fa=!1}function mt(l){l.da=!0,l.listener=null,l.proxy=null,l.src=null,l.ha=null}function er(l){this.src=l,this.g={},this.h=0}er.prototype.add=function(l,f,y,E,O){var U=l.toString();l=this.g[U],l||(l=this.g[U]=[],this.h++);var J=Cr(l,f,E,O);return-1<J?(f=l[J],y||(f.fa=!1)):(f=new Be(f,this.src,U,!!E,O),f.fa=y,l.push(f)),f};function es(l,f){var y=f.type;if(y in l.g){var E=l.g[y],O=Array.prototype.indexOf.call(E,f,void 0),U;(U=0<=O)&&Array.prototype.splice.call(E,O,1),U&&(mt(f),l.g[y].length==0&&(delete l.g[y],l.h--))}}function Cr(l,f,y,E){for(var O=0;O<l.length;++O){var U=l[O];if(!U.da&&U.listener==f&&U.capture==!!y&&U.ha==E)return O}return-1}var gi="closure_lm_"+(1e6*Math.random()|0),ts={};function vo(l,f,y,E,O){if(Array.isArray(f)){for(var U=0;U<f.length;U++)vo(l,f[U],y,E,O);return null}return y=To(y),l&&l[Me]?l.K(f,y,v(E)?!!E.capture:!!E,O):Eo(l,f,y,!1,E,O)}function Eo(l,f,y,E,O,U){if(!f)throw Error("Invalid event type");var J=v(O)?!!O.capture:!!O,Ue=rs(l);if(Ue||(l[gi]=Ue=new er(l)),y=Ue.add(f,y,E,J,U),y.proxy)return y;if(E=za(),y.proxy=E,E.src=l,E.listener=y,l.addEventListener)Ie||(O=J),O===void 0&&(O=!1),l.addEventListener(f.toString(),E,O);else if(l.attachEvent)l.attachEvent(nr(f.toString()),E);else if(l.addListener&&l.removeListener)l.addListener(E);else throw Error("addEventListener and attachEvent are unavailable.");return y}function za(){function l(y){return f.call(l.src,l.listener,y)}const f=wo;return l}function ns(l,f,y,E,O){if(Array.isArray(f))for(var U=0;U<f.length;U++)ns(l,f[U],y,E,O);else E=v(E)?!!E.capture:!!E,y=To(y),l&&l[Me]?(l=l.i,f=String(f).toString(),f in l.g&&(U=l.g[f],y=Cr(U,y,E,O),-1<y&&(mt(U[y]),Array.prototype.splice.call(U,y,1),U.length==0&&(delete l.g[f],l.h--)))):l&&(l=rs(l))&&(f=l.g[f.toString()],l=-1,f&&(l=Cr(f,y,E,O)),(y=-1<l?f[l]:null)&&tr(y))}function tr(l){if(typeof l!="number"&&l&&!l.da){var f=l.src;if(f&&f[Me])es(f.i,l);else{var y=l.type,E=l.proxy;f.removeEventListener?f.removeEventListener(y,E,l.capture):f.detachEvent?f.detachEvent(nr(y),E):f.addListener&&f.removeListener&&f.removeListener(E),(y=rs(f))?(es(y,l),y.h==0&&(y.src=null,f[gi]=null)):mt(l)}}}function nr(l){return l in ts?ts[l]:ts[l]="on"+l}function wo(l,f){if(l.da)l=!0;else{f=new Se(f,this);var y=l.listener,E=l.ha||l.src;l.fa&&tr(l),l=y.call(E,f)}return l}function rs(l){return l=l[gi],l instanceof er?l:null}var is="__closure_events_fn_"+(1e9*Math.random()>>>0);function To(l){return typeof l=="function"?l:(l[is]||(l[is]=function(f){return l.handleEvent(f)}),l[is])}function lt(){q.call(this),this.i=new er(this),this.M=this,this.F=null}H(lt,q),lt.prototype[Me]=!0,lt.prototype.removeEventListener=function(l,f,y,E){ns(this,l,f,y,E)};function ut(l,f){var y,E=l.F;if(E)for(y=[];E;E=E.F)y.push(E);if(l=l.M,E=f.type||f,typeof f=="string")f=new he(f,l);else if(f instanceof he)f.target=f.target||l;else{var O=f;f=new he(E,l),P(f,O)}if(O=!0,y)for(var U=y.length-1;0<=U;U--){var J=f.g=y[U];O=rr(J,E,!0,f)&&O}if(J=f.g=l,O=rr(J,E,!0,f)&&O,O=rr(J,E,!1,f)&&O,y)for(U=0;U<y.length;U++)J=f.g=y[U],O=rr(J,E,!1,f)&&O}lt.prototype.N=function(){if(lt.aa.N.call(this),this.i){var l=this.i,f;for(f in l.g){for(var y=l.g[f],E=0;E<y.length;E++)mt(y[E]);delete l.g[f],l.h--}}this.F=null},lt.prototype.K=function(l,f,y,E){return this.i.add(String(l),f,!1,y,E)},lt.prototype.L=function(l,f,y,E){return this.i.add(String(l),f,!0,y,E)};function rr(l,f,y,E){if(f=l.i.g[String(f)],!f)return!0;f=f.concat();for(var O=!0,U=0;U<f.length;++U){var J=f[U];if(J&&!J.da&&J.capture==y){var Ue=J.listener,ct=J.ha||J.src;J.fa&&es(l.i,J),O=Ue.call(ct,E)!==!1&&O}}return O&&!E.defaultPrevented}function Io(l,f,y){if(typeof l=="function")y&&(l=M(l,y));else if(l&&typeof l.handleEvent=="function")l=M(l.handleEvent,l);else throw Error("Invalid listener argument");return 2147483647<Number(f)?-1:m.setTimeout(l,f||0)}function kr(l){l.g=Io(()=>{l.g=null,l.i&&(l.i=!1,kr(l))},l.l);const f=l.h;l.h=null,l.m.apply(null,f)}class yi extends q{constructor(f,y){super(),this.m=f,this.l=y,this.h=null,this.i=!1,this.g=null}j(f){this.h=arguments,this.g?this.i=!0:kr(this)}N(){super.N(),this.g&&(m.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function _i(l){q.call(this),this.h=l,this.g={}}H(_i,q);var So=[];function Ao(l){ye(l.g,function(f,y){this.g.hasOwnProperty(y)&&tr(f)},l),l.g={}}_i.prototype.N=function(){_i.aa.N.call(this),Ao(this)},_i.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Ro=m.JSON.stringify,Co=m.JSON.parse,ko=class{stringify(l){return m.JSON.stringify(l,void 0)}parse(l){return m.JSON.parse(l,void 0)}};function vi(){}vi.prototype.h=null;function ss(l){return l.h||(l.h=l.i())}function os(){}var on={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Mn(){he.call(this,"d")}H(Mn,he);function as(){he.call(this,"c")}H(as,he);var bn={},Po=null;function Ei(){return Po=Po||new lt}bn.La="serverreachability";function No(l){he.call(this,bn.La,l)}H(No,he);function ir(l){const f=Ei();ut(f,new No(f))}bn.STAT_EVENT="statevent";function xo(l,f){he.call(this,bn.STAT_EVENT,l),this.stat=f}H(xo,he);function tt(l){const f=Ei();ut(f,new xo(f,l))}bn.Ma="timingevent";function ls(l,f){he.call(this,bn.Ma,l),this.size=f}H(ls,he);function vn(l,f){if(typeof l!="function")throw Error("Fn must not be null and must be a function");return m.setTimeout(function(){l()},f)}function wi(){this.g=!0}wi.prototype.xa=function(){this.g=!1};function Ti(l,f,y,E,O,U){l.info(function(){if(l.g)if(U)for(var J="",Ue=U.split("&"),ct=0;ct<Ue.length;ct++){var xe=Ue[ct].split("=");if(1<xe.length){var gt=xe[0];xe=xe[1];var it=gt.split("_");J=2<=it.length&&it[1]=="type"?J+(gt+"="+xe+"&"):J+(gt+"=redacted&")}}else J=null;else J=U;return"XMLHTTP REQ ("+E+") [attempt "+O+"]: "+f+`
`+y+`
`+J})}function us(l,f,y,E,O,U,J){l.info(function(){return"XMLHTTP RESP ("+E+") [ attempt "+O+"]: "+f+`
`+y+`
`+U+" "+J})}function En(l,f,y,E){l.info(function(){return"XMLHTTP TEXT ("+f+"): "+nc(l,y)+(E?" "+E:"")})}function Do(l,f){l.info(function(){return"TIMEOUT: "+f})}wi.prototype.info=function(){};function nc(l,f){if(!l.g)return f;if(!f)return null;try{var y=JSON.parse(f);if(y){for(l=0;l<y.length;l++)if(Array.isArray(y[l])){var E=y[l];if(!(2>E.length)){var O=E[1];if(Array.isArray(O)&&!(1>O.length)){var U=O[0];if(U!="noop"&&U!="stop"&&U!="close")for(var J=1;J<O.length;J++)O[J]=""}}}}return Ro(y)}catch{return f}}var cs={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Ba={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},wn;function Ii(){}H(Ii,vi),Ii.prototype.g=function(){return new XMLHttpRequest},Ii.prototype.i=function(){return{}},wn=new Ii;function Tn(l,f,y,E){this.j=l,this.i=f,this.l=y,this.R=E||1,this.U=new _i(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new $a}function $a(){this.i=null,this.g="",this.h=!1}var Vo={},hs={};function ds(l,f,y){l.L=1,l.v=Vr(Zt(f)),l.m=y,l.P=!0,Oo(l,null)}function Oo(l,f){l.F=Date.now(),$e(l),l.A=Zt(l.v);var y=l.A,E=l.R;Array.isArray(E)||(E=[String(E)]),Lr(y.i,"t",E),l.C=0,y=l.j.J,l.h=new $a,l.g=al(l.j,y?f:null,!l.m),0<l.O&&(l.M=new yi(M(l.Y,l,l.g),l.O)),f=l.U,y=l.g,E=l.ca;var O="readystatechange";Array.isArray(O)||(O&&(So[0]=O.toString()),O=So);for(var U=0;U<O.length;U++){var J=vo(y,O[U],E||f.handleEvent,!1,f.h||f);if(!J)break;f.g[J.key]=J}f=l.H?T(l.H):{},l.m?(l.u||(l.u="POST"),f["Content-Type"]="application/x-www-form-urlencoded",l.g.ea(l.A,l.u,l.m,f)):(l.u="GET",l.g.ea(l.A,l.u,null,f)),ir(),Ti(l.i,l.u,l.A,l.l,l.R,l.m)}Tn.prototype.ca=function(l){l=l.target;const f=this.M;f&&qt(l)==3?f.j():this.Y(l)},Tn.prototype.Y=function(l){try{if(l==this.g)e:{const it=qt(this.g);var f=this.g.Ba();const un=this.g.Z();if(!(3>it)&&(it!=3||this.g&&(this.h.h||this.g.oa()||jo(this.g)))){this.J||it!=4||f==7||(f==8||0>=un?ir(3):ir(2)),Si(this);var y=this.g.Z();this.X=y;t:if(qa(this)){var E=jo(this.g);l="";var O=E.length,U=qt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){an(this),Pr(this);var J="";break t}this.h.i=new m.TextDecoder}for(f=0;f<O;f++)this.h.h=!0,l+=this.h.i.decode(E[f],{stream:!(U&&f==O-1)});E.length=0,this.h.g+=l,this.C=0,J=this.h.g}else J=this.g.oa();if(this.o=y==200,us(this.i,this.u,this.A,this.l,this.R,it,y),this.o){if(this.T&&!this.K){t:{if(this.g){var Ue,ct=this.g;if((Ue=ct.g?ct.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!ce(Ue)){var xe=Ue;break t}}xe=null}if(y=xe)En(this.i,this.l,y,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Lo(this,y);else{this.o=!1,this.s=3,tt(12),an(this),Pr(this);break e}}if(this.P){y=!0;let tn;for(;!this.J&&this.C<J.length;)if(tn=rc(this,J),tn==hs){it==4&&(this.s=4,tt(14),y=!1),En(this.i,this.l,null,"[Incomplete Response]");break}else if(tn==Vo){this.s=4,tt(15),En(this.i,this.l,J,"[Invalid Chunk]"),y=!1;break}else En(this.i,this.l,tn,null),Lo(this,tn);if(qa(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),it!=4||J.length!=0||this.h.h||(this.s=1,tt(16),y=!1),this.o=this.o&&y,!y)En(this.i,this.l,J,"[Invalid Chunked Response]"),an(this),Pr(this);else if(0<J.length&&!this.W){this.W=!0;var gt=this.j;gt.g==this&&gt.ba&&!gt.M&&(gt.j.info("Great, no buffering proxy detected. Bytes received: "+J.length),Bo(gt),gt.M=!0,tt(11))}}else En(this.i,this.l,J,null),Lo(this,J);it==4&&an(this),this.o&&!this.J&&(it==4?Is(this.j,this):(this.o=!1,$e(this)))}else _s(this.g),y==400&&0<J.indexOf("Unknown SID")?(this.s=3,tt(12)):(this.s=0,tt(13)),an(this),Pr(this)}}}catch{}finally{}};function qa(l){return l.g?l.u=="GET"&&l.L!=2&&l.j.Ca:!1}function rc(l,f){var y=l.C,E=f.indexOf(`
`,y);return E==-1?hs:(y=Number(f.substring(y,E)),isNaN(y)?Vo:(E+=1,E+y>f.length?hs:(f=f.slice(E,E+y),l.C=E+y,f)))}Tn.prototype.cancel=function(){this.J=!0,an(this)};function $e(l){l.S=Date.now()+l.I,Ha(l,l.I)}function Ha(l,f){if(l.B!=null)throw Error("WatchDog timer not null");l.B=vn(M(l.ba,l),f)}function Si(l){l.B&&(m.clearTimeout(l.B),l.B=null)}Tn.prototype.ba=function(){this.B=null;const l=Date.now();0<=l-this.S?(Do(this.i,this.A),this.L!=2&&(ir(),tt(17)),an(this),this.s=2,Pr(this)):Ha(this,this.S-l)};function Pr(l){l.j.G==0||l.J||Is(l.j,l)}function an(l){Si(l);var f=l.M;f&&typeof f.ma=="function"&&f.ma(),l.M=null,Ao(l.U),l.g&&(f=l.g,l.g=null,f.abort(),f.ma())}function Lo(l,f){try{var y=l.j;if(y.G!=0&&(y.g==l||Ut(y.h,l))){if(!l.K&&Ut(y.h,l)&&y.G==3){try{var E=y.Da.g.parse(f)}catch{E=null}if(Array.isArray(E)&&E.length==3){var O=E;if(O[0]==0){e:if(!y.u){if(y.g)if(y.g.F+3e3<l.F)Ts(y),Cn(y);else break e;ws(y),tt(18)}}else y.za=O[1],0<y.za-y.T&&37500>O[2]&&y.F&&y.v==0&&!y.C&&(y.C=vn(M(y.Za,y),6e3));if(1>=Ga(y.h)&&y.ca){try{y.ca()}catch{}y.ca=void 0}}else ur(y,11)}else if((l.K||y.g==l)&&Ts(y),!ce(f))for(O=y.Da.g.parse(f),f=0;f<O.length;f++){let xe=O[f];if(y.T=xe[0],xe=xe[1],y.G==2)if(xe[0]=="c"){y.K=xe[1],y.ia=xe[2];const gt=xe[3];gt!=null&&(y.la=gt,y.j.info("VER="+y.la));const it=xe[4];it!=null&&(y.Aa=it,y.j.info("SVER="+y.Aa));const un=xe[5];un!=null&&typeof un=="number"&&0<un&&(E=1.5*un,y.L=E,y.j.info("backChannelRequestTimeoutMs_="+E)),E=y;const tn=l.g;if(tn){const xi=tn.g?tn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(xi){var U=E.h;U.g||xi.indexOf("spdy")==-1&&xi.indexOf("quic")==-1&&xi.indexOf("h2")==-1||(U.j=U.l,U.g=new Set,U.h&&(Mo(U,U.h),U.h=null))}if(E.D){const As=tn.g?tn.g.getResponseHeader("X-HTTP-Session-Id"):null;As&&(E.ya=As,ze(E.I,E.D,As))}}y.G=3,y.l&&y.l.ua(),y.ba&&(y.R=Date.now()-l.F,y.j.info("Handshake RTT: "+y.R+"ms")),E=y;var J=l;if(E.qa=ol(E,E.J?E.ia:null,E.W),J.K){Ka(E.h,J);var Ue=J,ct=E.L;ct&&(Ue.I=ct),Ue.B&&(Si(Ue),$e(Ue)),E.g=J}else Ni(E);0<y.i.length&&zn(y)}else xe[0]!="stop"&&xe[0]!="close"||ur(y,7);else y.G==3&&(xe[0]=="stop"||xe[0]=="close"?xe[0]=="stop"?ur(y,7):It(y):xe[0]!="noop"&&y.l&&y.l.ta(xe),y.v=0)}}ir(4)}catch{}}var Wa=class{constructor(l,f){this.g=l,this.map=f}};function Ai(l){this.l=l||10,m.PerformanceNavigationTiming?(l=m.performance.getEntriesByType("navigation"),l=0<l.length&&(l[0].nextHopProtocol=="hq"||l[0].nextHopProtocol=="h2")):l=!!(m.chrome&&m.chrome.loadTimes&&m.chrome.loadTimes()&&m.chrome.loadTimes().wasFetchedViaSpdy),this.j=l?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Jt(l){return l.h?!0:l.g?l.g.size>=l.j:!1}function Ga(l){return l.h?1:l.g?l.g.size:0}function Ut(l,f){return l.h?l.h==f:l.g?l.g.has(f):!1}function Mo(l,f){l.g?l.g.add(f):l.h=f}function Ka(l,f){l.h&&l.h==f?l.h=null:l.g&&l.g.has(f)&&l.g.delete(f)}Ai.prototype.cancel=function(){if(this.i=Qa(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const l of this.g.values())l.cancel();this.g.clear()}};function Qa(l){if(l.h!=null)return l.i.concat(l.h.D);if(l.g!=null&&l.g.size!==0){let f=l.i;for(const y of l.g.values())f=f.concat(y.D);return f}return G(l.i)}function fs(l){if(l.V&&typeof l.V=="function")return l.V();if(typeof Map<"u"&&l instanceof Map||typeof Set<"u"&&l instanceof Set)return Array.from(l.values());if(typeof l=="string")return l.split("");if(g(l)){for(var f=[],y=l.length,E=0;E<y;E++)f.push(l[E]);return f}f=[],y=0;for(E in l)f[y++]=l[E];return f}function ps(l){if(l.na&&typeof l.na=="function")return l.na();if(!l.V||typeof l.V!="function"){if(typeof Map<"u"&&l instanceof Map)return Array.from(l.keys());if(!(typeof Set<"u"&&l instanceof Set)){if(g(l)||typeof l=="string"){var f=[];l=l.length;for(var y=0;y<l;y++)f.push(y);return f}f=[],y=0;for(const E in l)f[y++]=E;return f}}}function Nr(l,f){if(l.forEach&&typeof l.forEach=="function")l.forEach(f,void 0);else if(g(l)||typeof l=="string")Array.prototype.forEach.call(l,f,void 0);else for(var y=ps(l),E=fs(l),O=E.length,U=0;U<O;U++)f.call(void 0,E[U],y&&y[U],l)}var Ri=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function ic(l,f){if(l){l=l.split("&");for(var y=0;y<l.length;y++){var E=l[y].indexOf("="),O=null;if(0<=E){var U=l[y].substring(0,E);O=l[y].substring(E+1)}else U=l[y];f(U,O?decodeURIComponent(O.replace(/\+/g," ")):"")}}}function sr(l){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,l instanceof sr){this.h=l.h,Ci(this,l.j),this.o=l.o,this.g=l.g,xr(this,l.s),this.l=l.l;var f=l.i,y=new Fn;y.i=f.i,f.g&&(y.g=new Map(f.g),y.h=f.h),Dr(this,y),this.m=l.m}else l&&(f=String(l).match(Ri))?(this.h=!1,Ci(this,f[1]||"",!0),this.o=ke(f[2]||""),this.g=ke(f[3]||"",!0),xr(this,f[4]),this.l=ke(f[5]||"",!0),Dr(this,f[6]||"",!0),this.m=ke(f[7]||"")):(this.h=!1,this.i=new Fn(null,this.h))}sr.prototype.toString=function(){var l=[],f=this.j;f&&l.push(Or(f,ms,!0),":");var y=this.g;return(y||f=="file")&&(l.push("//"),(f=this.o)&&l.push(Or(f,ms,!0),"@"),l.push(encodeURIComponent(String(y)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),y=this.s,y!=null&&l.push(":",String(y))),(y=this.l)&&(this.g&&y.charAt(0)!="/"&&l.push("/"),l.push(Or(y,y.charAt(0)=="/"?Ja:Ya,!0))),(y=this.i.toString())&&l.push("?",y),(y=this.m)&&l.push("#",Or(y,bo)),l.join("")};function Zt(l){return new sr(l)}function Ci(l,f,y){l.j=y?ke(f,!0):f,l.j&&(l.j=l.j.replace(/:$/,""))}function xr(l,f){if(f){if(f=Number(f),isNaN(f)||0>f)throw Error("Bad port number "+f);l.s=f}else l.s=null}function Dr(l,f,y){f instanceof Fn?(l.i=f,Un(l.i,l.h)):(y||(f=Or(f,Za)),l.i=new Fn(f,l.h))}function ze(l,f,y){l.i.set(f,y)}function Vr(l){return ze(l,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),l}function ke(l,f){return l?f?decodeURI(l.replace(/%25/g,"%2525")):decodeURIComponent(l):""}function Or(l,f,y){return typeof l=="string"?(l=encodeURI(l).replace(f,Xa),y&&(l=l.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),l):null}function Xa(l){return l=l.charCodeAt(0),"%"+(l>>4&15).toString(16)+(l&15).toString(16)}var ms=/[#\/\?@]/g,Ya=/[#\?:]/g,Ja=/[#\?]/g,Za=/[#\?@]/g,bo=/#/g;function Fn(l,f){this.h=this.g=null,this.i=l||null,this.j=!!f}function Tt(l){l.g||(l.g=new Map,l.h=0,l.i&&ic(l.i,function(f,y){l.add(decodeURIComponent(f.replace(/\+/g," ")),y)}))}i=Fn.prototype,i.add=function(l,f){Tt(this),this.i=null,l=ln(this,l);var y=this.g.get(l);return y||this.g.set(l,y=[]),y.push(f),this.h+=1,this};function In(l,f){Tt(l),f=ln(l,f),l.g.has(f)&&(l.i=null,l.h-=l.g.get(f).length,l.g.delete(f))}function Sn(l,f){return Tt(l),f=ln(l,f),l.g.has(f)}i.forEach=function(l,f){Tt(this),this.g.forEach(function(y,E){y.forEach(function(O){l.call(f,O,E,this)},this)},this)},i.na=function(){Tt(this);const l=Array.from(this.g.values()),f=Array.from(this.g.keys()),y=[];for(let E=0;E<f.length;E++){const O=l[E];for(let U=0;U<O.length;U++)y.push(f[E])}return y},i.V=function(l){Tt(this);let f=[];if(typeof l=="string")Sn(this,l)&&(f=f.concat(this.g.get(ln(this,l))));else{l=Array.from(this.g.values());for(let y=0;y<l.length;y++)f=f.concat(l[y])}return f},i.set=function(l,f){return Tt(this),this.i=null,l=ln(this,l),Sn(this,l)&&(this.h-=this.g.get(l).length),this.g.set(l,[f]),this.h+=1,this},i.get=function(l,f){return l?(l=this.V(l),0<l.length?String(l[0]):f):f};function Lr(l,f,y){In(l,f),0<y.length&&(l.i=null,l.g.set(ln(l,f),G(y)),l.h+=y.length)}i.toString=function(){if(this.i)return this.i;if(!this.g)return"";const l=[],f=Array.from(this.g.keys());for(var y=0;y<f.length;y++){var E=f[y];const U=encodeURIComponent(String(E)),J=this.V(E);for(E=0;E<J.length;E++){var O=U;J[E]!==""&&(O+="="+encodeURIComponent(String(J[E]))),l.push(O)}}return this.i=l.join("&")};function ln(l,f){return f=String(f),l.j&&(f=f.toLowerCase()),f}function Un(l,f){f&&!l.j&&(Tt(l),l.i=null,l.g.forEach(function(y,E){var O=E.toLowerCase();E!=O&&(In(this,E),Lr(this,O,y))},l)),l.j=f}function sc(l,f){const y=new wi;if(m.Image){const E=new Image;E.onload=z($t,y,"TestLoadImage: loaded",!0,f,E),E.onerror=z($t,y,"TestLoadImage: error",!1,f,E),E.onabort=z($t,y,"TestLoadImage: abort",!1,f,E),E.ontimeout=z($t,y,"TestLoadImage: timeout",!1,f,E),m.setTimeout(function(){E.ontimeout&&E.ontimeout()},1e4),E.src=l}else f(!1)}function el(l,f){const y=new wi,E=new AbortController,O=setTimeout(()=>{E.abort(),$t(y,"TestPingServer: timeout",!1,f)},1e4);fetch(l,{signal:E.signal}).then(U=>{clearTimeout(O),U.ok?$t(y,"TestPingServer: ok",!0,f):$t(y,"TestPingServer: server error",!1,f)}).catch(()=>{clearTimeout(O),$t(y,"TestPingServer: error",!1,f)})}function $t(l,f,y,E,O){try{O&&(O.onload=null,O.onerror=null,O.onabort=null,O.ontimeout=null),E(y)}catch{}}function oc(){this.g=new ko}function tl(l,f,y){const E=y||"";try{Nr(l,function(O,U){let J=O;v(O)&&(J=Ro(O)),f.push(E+U+"="+encodeURIComponent(J))})}catch(O){throw f.push(E+"type="+encodeURIComponent("_badmap")),O}}function or(l){this.l=l.Ub||null,this.j=l.eb||!1}H(or,vi),or.prototype.g=function(){return new ki(this.l,this.j)},or.prototype.i=function(l){return function(){return l}}({});function ki(l,f){lt.call(this),this.D=l,this.o=f,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}H(ki,lt),i=ki.prototype,i.open=function(l,f){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=l,this.A=f,this.readyState=1,Rn(this)},i.send=function(l){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const f={headers:this.u,method:this.B,credentials:this.m,cache:void 0};l&&(f.body=l),(this.D||m).fetch(new Request(this.A,f)).then(this.Sa.bind(this),this.ga.bind(this))},i.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,An(this)),this.readyState=0},i.Sa=function(l){if(this.g&&(this.l=l,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=l.headers,this.readyState=2,Rn(this)),this.g&&(this.readyState=3,Rn(this),this.g)))if(this.responseType==="arraybuffer")l.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof m.ReadableStream<"u"&&"body"in l){if(this.j=l.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;nl(this)}else l.text().then(this.Ra.bind(this),this.ga.bind(this))};function nl(l){l.j.read().then(l.Pa.bind(l)).catch(l.ga.bind(l))}i.Pa=function(l){if(this.g){if(this.o&&l.value)this.response.push(l.value);else if(!this.o){var f=l.value?l.value:new Uint8Array(0);(f=this.v.decode(f,{stream:!l.done}))&&(this.response=this.responseText+=f)}l.done?An(this):Rn(this),this.readyState==3&&nl(this)}},i.Ra=function(l){this.g&&(this.response=this.responseText=l,An(this))},i.Qa=function(l){this.g&&(this.response=l,An(this))},i.ga=function(){this.g&&An(this)};function An(l){l.readyState=4,l.l=null,l.j=null,l.v=null,Rn(l)}i.setRequestHeader=function(l,f){this.u.append(l,f)},i.getResponseHeader=function(l){return this.h&&this.h.get(l.toLowerCase())||""},i.getAllResponseHeaders=function(){if(!this.h)return"";const l=[],f=this.h.entries();for(var y=f.next();!y.done;)y=y.value,l.push(y[0]+": "+y[1]),y=f.next();return l.join(`\r
`)};function Rn(l){l.onreadystatechange&&l.onreadystatechange.call(l)}Object.defineProperty(ki.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(l){this.m=l?"include":"same-origin"}});function ar(l){let f="";return ye(l,function(y,E){f+=E,f+=":",f+=y,f+=`\r
`}),f}function Mr(l,f,y){e:{for(E in y){var E=!1;break e}E=!0}E||(y=ar(y),typeof l=="string"?y!=null&&encodeURIComponent(String(y)):ze(l,f,y))}function Qe(l){lt.call(this),this.headers=new Map,this.o=l||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}H(Qe,lt);var ac=/^https?$/i,Fo=["POST","PUT"];i=Qe.prototype,i.Ha=function(l){this.J=l},i.ea=function(l,f,y,E){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+l);f=f?f.toUpperCase():"GET",this.D=l,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():wn.g(),this.v=this.o?ss(this.o):ss(wn),this.g.onreadystatechange=M(this.Ea,this);try{this.B=!0,this.g.open(f,String(l),!0),this.B=!1}catch(U){Pi(this,U);return}if(l=y||"",y=new Map(this.headers),E)if(Object.getPrototypeOf(E)===Object.prototype)for(var O in E)y.set(O,E[O]);else if(typeof E.keys=="function"&&typeof E.get=="function")for(const U of E.keys())y.set(U,E.get(U));else throw Error("Unknown input type for opt_headers: "+String(E));E=Array.from(y.keys()).find(U=>U.toLowerCase()=="content-type"),O=m.FormData&&l instanceof m.FormData,!(0<=Array.prototype.indexOf.call(Fo,f,void 0))||E||O||y.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[U,J]of y)this.g.setRequestHeader(U,J);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{ys(this),this.u=!0,this.g.send(l),this.u=!1}catch(U){Pi(this,U)}};function Pi(l,f){l.h=!1,l.g&&(l.j=!0,l.g.abort(),l.j=!1),l.l=f,l.m=5,gs(l),en(l)}function gs(l){l.A||(l.A=!0,ut(l,"complete"),ut(l,"error"))}i.abort=function(l){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=l||7,ut(this,"complete"),ut(this,"abort"),en(this))},i.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),en(this,!0)),Qe.aa.N.call(this)},i.Ea=function(){this.s||(this.B||this.u||this.j?Uo(this):this.bb())},i.bb=function(){Uo(this)};function Uo(l){if(l.h&&typeof h<"u"&&(!l.v[1]||qt(l)!=4||l.Z()!=2)){if(l.u&&qt(l)==4)Io(l.Ea,0,l);else if(ut(l,"readystatechange"),qt(l)==4){l.h=!1;try{const J=l.Z();e:switch(J){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var f=!0;break e;default:f=!1}var y;if(!(y=f)){var E;if(E=J===0){var O=String(l.D).match(Ri)[1]||null;!O&&m.self&&m.self.location&&(O=m.self.location.protocol.slice(0,-1)),E=!ac.test(O?O.toLowerCase():"")}y=E}if(y)ut(l,"complete"),ut(l,"success");else{l.m=6;try{var U=2<qt(l)?l.g.statusText:""}catch{U=""}l.l=U+" ["+l.Z()+"]",gs(l)}}finally{en(l)}}}}function en(l,f){if(l.g){ys(l);const y=l.g,E=l.v[0]?()=>{}:null;l.g=null,l.v=null,f||ut(l,"ready");try{y.onreadystatechange=E}catch{}}}function ys(l){l.I&&(m.clearTimeout(l.I),l.I=null)}i.isActive=function(){return!!this.g};function qt(l){return l.g?l.g.readyState:0}i.Z=function(){try{return 2<qt(this)?this.g.status:-1}catch{return-1}},i.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},i.Oa=function(l){if(this.g){var f=this.g.responseText;return l&&f.indexOf(l)==0&&(f=f.substring(l.length)),Co(f)}};function jo(l){try{if(!l.g)return null;if("response"in l.g)return l.g.response;switch(l.H){case"":case"text":return l.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in l.g)return l.g.mozResponseArrayBuffer}return null}catch{return null}}function _s(l){const f={};l=(l.g&&2<=qt(l)&&l.g.getAllResponseHeaders()||"").split(`\r
`);for(let E=0;E<l.length;E++){if(ce(l[E]))continue;var y=x(l[E]);const O=y[0];if(y=y[1],typeof y!="string")continue;y=y.trim();const U=f[O]||[];f[O]=U,U.push(y)}R(f,function(E){return E.join(", ")})}i.Ba=function(){return this.m},i.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function jn(l,f,y){return y&&y.internalChannelParams&&y.internalChannelParams[l]||f}function zo(l){this.Aa=0,this.i=[],this.j=new wi,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=jn("failFast",!1,l),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=jn("baseRetryDelayMs",5e3,l),this.cb=jn("retryDelaySeedMs",1e4,l),this.Wa=jn("forwardChannelMaxRetries",2,l),this.wa=jn("forwardChannelRequestTimeoutMs",2e4,l),this.pa=l&&l.xmlHttpFactory||void 0,this.Xa=l&&l.Tb||void 0,this.Ca=l&&l.useFetchStreams||!1,this.L=void 0,this.J=l&&l.supportsCrossDomainXhr||!1,this.K="",this.h=new Ai(l&&l.concurrentRequestLimit),this.Da=new oc,this.P=l&&l.fastHandshake||!1,this.O=l&&l.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=l&&l.Rb||!1,l&&l.xa&&this.j.xa(),l&&l.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&l&&l.detectBufferingProxy||!1,this.ja=void 0,l&&l.longPollingTimeout&&0<l.longPollingTimeout&&(this.ja=l.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}i=zo.prototype,i.la=8,i.G=1,i.connect=function(l,f,y,E){tt(0),this.W=l,this.H=f||{},y&&E!==void 0&&(this.H.OSID=y,this.H.OAID=E),this.F=this.X,this.I=ol(this,null,this.W),zn(this)};function It(l){if(vs(l),l.G==3){var f=l.U++,y=Zt(l.I);if(ze(y,"SID",l.K),ze(y,"RID",f),ze(y,"TYPE","terminate"),lr(l,y),f=new Tn(l,l.j,f),f.L=2,f.v=Vr(Zt(y)),y=!1,m.navigator&&m.navigator.sendBeacon)try{y=m.navigator.sendBeacon(f.v.toString(),"")}catch{}!y&&m.Image&&(new Image().src=f.v,y=!0),y||(f.g=al(f.j,null),f.g.ea(f.v)),f.F=Date.now(),$e(f)}sl(l)}function Cn(l){l.g&&(Bo(l),l.g.cancel(),l.g=null)}function vs(l){Cn(l),l.u&&(m.clearTimeout(l.u),l.u=null),Ts(l),l.h.cancel(),l.s&&(typeof l.s=="number"&&m.clearTimeout(l.s),l.s=null)}function zn(l){if(!Jt(l.h)&&!l.s){l.s=!0;var f=l.Ga;je||te(),Z||(je(),Z=!0),fe.add(f,l),l.B=0}}function lc(l,f){return Ga(l.h)>=l.h.j-(l.s?1:0)?!1:l.s?(l.i=f.D.concat(l.i),!0):l.G==1||l.G==2||l.B>=(l.Va?0:l.Wa)?!1:(l.s=vn(M(l.Ga,l,f),il(l,l.B)),l.B++,!0)}i.Ga=function(l){if(this.s)if(this.s=null,this.G==1){if(!l){this.U=Math.floor(1e5*Math.random()),l=this.U++;const O=new Tn(this,this.j,l);let U=this.o;if(this.S&&(U?(U=T(U),P(U,this.S)):U=this.S),this.m!==null||this.O||(O.H=U,U=null),this.P)e:{for(var f=0,y=0;y<this.i.length;y++){t:{var E=this.i[y];if("__data__"in E.map&&(E=E.map.__data__,typeof E=="string")){E=E.length;break t}E=void 0}if(E===void 0)break;if(f+=E,4096<f){f=y;break e}if(f===4096||y===this.i.length-1){f=y+1;break e}}f=1e3}else f=1e3;f=br(this,O,f),y=Zt(this.I),ze(y,"RID",l),ze(y,"CVER",22),this.D&&ze(y,"X-HTTP-Session-Id",this.D),lr(this,y),U&&(this.O?f="headers="+encodeURIComponent(String(ar(U)))+"&"+f:this.m&&Mr(y,this.m,U)),Mo(this.h,O),this.Ua&&ze(y,"TYPE","init"),this.P?(ze(y,"$req",f),ze(y,"SID","null"),O.T=!0,ds(O,y,null)):ds(O,y,f),this.G=2}}else this.G==3&&(l?Es(this,l):this.i.length==0||Jt(this.h)||Es(this))};function Es(l,f){var y;f?y=f.l:y=l.U++;const E=Zt(l.I);ze(E,"SID",l.K),ze(E,"RID",y),ze(E,"AID",l.T),lr(l,E),l.m&&l.o&&Mr(E,l.m,l.o),y=new Tn(l,l.j,y,l.B+1),l.m===null&&(y.H=l.o),f&&(l.i=f.D.concat(l.i)),f=br(l,y,1e3),y.I=Math.round(.5*l.wa)+Math.round(.5*l.wa*Math.random()),Mo(l.h,y),ds(y,E,f)}function lr(l,f){l.H&&ye(l.H,function(y,E){ze(f,E,y)}),l.l&&Nr({},function(y,E){ze(f,E,y)})}function br(l,f,y){y=Math.min(l.i.length,y);var E=l.l?M(l.l.Na,l.l,l):null;e:{var O=l.i;let U=-1;for(;;){const J=["count="+y];U==-1?0<y?(U=O[0].g,J.push("ofs="+U)):U=0:J.push("ofs="+U);let Ue=!0;for(let ct=0;ct<y;ct++){let xe=O[ct].g;const gt=O[ct].map;if(xe-=U,0>xe)U=Math.max(0,O[ct].g-100),Ue=!1;else try{tl(gt,J,"req"+xe+"_")}catch{E&&E(gt)}}if(Ue){E=J.join("&");break e}}}return l=l.i.splice(0,y),f.D=l,E}function Ni(l){if(!l.g&&!l.u){l.Y=1;var f=l.Fa;je||te(),Z||(je(),Z=!0),fe.add(f,l),l.v=0}}function ws(l){return l.g||l.u||3<=l.v?!1:(l.Y++,l.u=vn(M(l.Fa,l),il(l,l.v)),l.v++,!0)}i.Fa=function(){if(this.u=null,rl(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var l=2*this.R;this.j.info("BP detection timer enabled: "+l),this.A=vn(M(this.ab,this),l)}},i.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,tt(10),Cn(this),rl(this))};function Bo(l){l.A!=null&&(m.clearTimeout(l.A),l.A=null)}function rl(l){l.g=new Tn(l,l.j,"rpc",l.Y),l.m===null&&(l.g.H=l.o),l.g.O=0;var f=Zt(l.qa);ze(f,"RID","rpc"),ze(f,"SID",l.K),ze(f,"AID",l.T),ze(f,"CI",l.F?"0":"1"),!l.F&&l.ja&&ze(f,"TO",l.ja),ze(f,"TYPE","xmlhttp"),lr(l,f),l.m&&l.o&&Mr(f,l.m,l.o),l.L&&(l.g.I=l.L);var y=l.g;l=l.ia,y.L=1,y.v=Vr(Zt(f)),y.m=null,y.P=!0,Oo(y,l)}i.Za=function(){this.C!=null&&(this.C=null,Cn(this),ws(this),tt(19))};function Ts(l){l.C!=null&&(m.clearTimeout(l.C),l.C=null)}function Is(l,f){var y=null;if(l.g==f){Ts(l),Bo(l),l.g=null;var E=2}else if(Ut(l.h,f))y=f.D,Ka(l.h,f),E=1;else return;if(l.G!=0){if(f.o)if(E==1){y=f.m?f.m.length:0,f=Date.now()-f.F;var O=l.B;E=Ei(),ut(E,new ls(E,y)),zn(l)}else Ni(l);else if(O=f.s,O==3||O==0&&0<f.X||!(E==1&&lc(l,f)||E==2&&ws(l)))switch(y&&0<y.length&&(f=l.h,f.i=f.i.concat(y)),O){case 1:ur(l,5);break;case 4:ur(l,10);break;case 3:ur(l,6);break;default:ur(l,2)}}}function il(l,f){let y=l.Ta+Math.floor(Math.random()*l.cb);return l.isActive()||(y*=2),y*f}function ur(l,f){if(l.j.info("Error code "+f),f==2){var y=M(l.fb,l),E=l.Xa;const O=!E;E=new sr(E||"//www.google.com/images/cleardot.gif"),m.location&&m.location.protocol=="http"||Ci(E,"https"),Vr(E),O?sc(E.toString(),y):el(E.toString(),y)}else tt(2);l.G=0,l.l&&l.l.sa(f),sl(l),vs(l)}i.fb=function(l){l?(this.j.info("Successfully pinged google.com"),tt(2)):(this.j.info("Failed to ping google.com"),tt(1))};function sl(l){if(l.G=0,l.ka=[],l.l){const f=Qa(l.h);(f.length!=0||l.i.length!=0)&&(B(l.ka,f),B(l.ka,l.i),l.h.i.length=0,G(l.i),l.i.length=0),l.l.ra()}}function ol(l,f,y){var E=y instanceof sr?Zt(y):new sr(y);if(E.g!="")f&&(E.g=f+"."+E.g),xr(E,E.s);else{var O=m.location;E=O.protocol,f=f?f+"."+O.hostname:O.hostname,O=+O.port;var U=new sr(null);E&&Ci(U,E),f&&(U.g=f),O&&xr(U,O),y&&(U.l=y),E=U}return y=l.D,f=l.ya,y&&f&&ze(E,y,f),ze(E,"VER",l.la),lr(l,E),E}function al(l,f,y){if(f&&!l.J)throw Error("Can't create secondary domain capable XhrIo object.");return f=l.Ca&&!l.pa?new Qe(new or({eb:y})):new Qe(l.pa),f.Ha(l.J),f}i.isActive=function(){return!!this.l&&this.l.isActive(this)};function $o(){}i=$o.prototype,i.ua=function(){},i.ta=function(){},i.sa=function(){},i.ra=function(){},i.isActive=function(){return!0},i.Na=function(){};function Ss(){}Ss.prototype.g=function(l,f){return new jt(l,f)};function jt(l,f){lt.call(this),this.g=new zo(f),this.l=l,this.h=f&&f.messageUrlParams||null,l=f&&f.messageHeaders||null,f&&f.clientProtocolHeaderRequired&&(l?l["X-Client-Protocol"]="webchannel":l={"X-Client-Protocol":"webchannel"}),this.g.o=l,l=f&&f.initMessageHeaders||null,f&&f.messageContentType&&(l?l["X-WebChannel-Content-Type"]=f.messageContentType:l={"X-WebChannel-Content-Type":f.messageContentType}),f&&f.va&&(l?l["X-WebChannel-Client-Profile"]=f.va:l={"X-WebChannel-Client-Profile":f.va}),this.g.S=l,(l=f&&f.Sb)&&!ce(l)&&(this.g.m=l),this.v=f&&f.supportsCrossDomainXhr||!1,this.u=f&&f.sendRawJson||!1,(f=f&&f.httpSessionIdParam)&&!ce(f)&&(this.g.D=f,l=this.h,l!==null&&f in l&&(l=this.h,f in l&&delete l[f])),this.j=new Bn(this)}H(jt,lt),jt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},jt.prototype.close=function(){It(this.g)},jt.prototype.o=function(l){var f=this.g;if(typeof l=="string"){var y={};y.__data__=l,l=y}else this.u&&(y={},y.__data__=Ro(l),l=y);f.i.push(new Wa(f.Ya++,l)),f.G==3&&zn(f)},jt.prototype.N=function(){this.g.l=null,delete this.j,It(this.g),delete this.g,jt.aa.N.call(this)};function ll(l){Mn.call(this),l.__headers__&&(this.headers=l.__headers__,this.statusCode=l.__status__,delete l.__headers__,delete l.__status__);var f=l.__sm__;if(f){e:{for(const y in f){l=y;break e}l=void 0}(this.i=l)&&(l=this.i,f=f!==null&&l in f?f[l]:void 0),this.data=f}else this.data=l}H(ll,Mn);function ul(){as.call(this),this.status=1}H(ul,as);function Bn(l){this.g=l}H(Bn,$o),Bn.prototype.ua=function(){ut(this.g,"a")},Bn.prototype.ta=function(l){ut(this.g,new ll(l))},Bn.prototype.sa=function(l){ut(this.g,new ul)},Bn.prototype.ra=function(){ut(this.g,"b")},Ss.prototype.createWebChannel=Ss.prototype.g,jt.prototype.send=jt.prototype.o,jt.prototype.open=jt.prototype.m,jt.prototype.close=jt.prototype.close,ty=function(){return new Ss},ey=function(){return Ei()},Zg=bn,Qh={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},cs.NO_ERROR=0,cs.TIMEOUT=8,cs.HTTP_ERROR=6,cu=cs,Ba.COMPLETE="complete",Jg=Ba,os.EventType=on,on.OPEN="a",on.CLOSE="b",on.ERROR="c",on.MESSAGE="d",lt.prototype.listen=lt.prototype.K,pa=os,Qe.prototype.listenOnce=Qe.prototype.L,Qe.prototype.getLastError=Qe.prototype.Ka,Qe.prototype.getLastErrorCode=Qe.prototype.Ba,Qe.prototype.getStatus=Qe.prototype.Z,Qe.prototype.getResponseJson=Qe.prototype.Oa,Qe.prototype.getResponseText=Qe.prototype.oa,Qe.prototype.send=Qe.prototype.ea,Qe.prototype.setWithCredentials=Qe.prototype.Ha,Yg=Qe}).apply(typeof ru<"u"?ru:typeof self<"u"?self:typeof window<"u"?window:{});const Dm="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Mt.UNAUTHENTICATED=new Mt(null),Mt.GOOGLE_CREDENTIALS=new Mt("google-credentials-uid"),Mt.FIRST_PARTY=new Mt("first-party-uid"),Mt.MOCK_USER=new Mt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let fo="11.2.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ki=new pd("@firebase/firestore");function Ws(){return Ki.logLevel}function ne(i,...e){if(Ki.logLevel<=Re.DEBUG){const t=e.map(yd);Ki.debug(`Firestore (${fo}): ${i}`,...t)}}function Tr(i,...e){if(Ki.logLevel<=Re.ERROR){const t=e.map(yd);Ki.error(`Firestore (${fo}): ${i}`,...t)}}function ro(i,...e){if(Ki.logLevel<=Re.WARN){const t=e.map(yd);Ki.warn(`Firestore (${fo}): ${i}`,...t)}}function yd(i){if(typeof i=="string")return i;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(t){return JSON.stringify(t)}(i)}catch{return i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ve(i="Unexpected state"){const e=`FIRESTORE (${fo}) INTERNAL ASSERTION FAILED: `+i;throw Tr(e),new Error(e)}function Fe(i,e){i||ve()}function Te(i,e){return i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const W={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class se extends Rr{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ui{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ny{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class jE{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(Mt.UNAUTHENTICATED))}shutdown(){}}class zE{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class BE{constructor(e){this.t=e,this.currentUser=Mt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){Fe(this.o===void 0);let s=this.i;const o=g=>this.i!==s?(s=this.i,t(g)):Promise.resolve();let u=new ui;this.o=()=>{this.i++,this.currentUser=this.u(),u.resolve(),u=new ui,e.enqueueRetryable(()=>o(this.currentUser))};const h=()=>{const g=u;e.enqueueRetryable(async()=>{await g.promise,await o(this.currentUser)})},m=g=>{ne("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=g,this.o&&(this.auth.addAuthTokenListener(this.o),h())};this.t.onInit(g=>m(g)),setTimeout(()=>{if(!this.auth){const g=this.t.getImmediate({optional:!0});g?m(g):(ne("FirebaseAuthCredentialsProvider","Auth not yet detected"),u.resolve(),u=new ui)}},0),h()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(s=>this.i!==e?(ne("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(Fe(typeof s.accessToken=="string"),new ny(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Fe(e===null||typeof e=="string"),new Mt(e)}}class $E{constructor(e,t,s){this.l=e,this.h=t,this.P=s,this.type="FirstParty",this.user=Mt.FIRST_PARTY,this.T=new Map}I(){return this.P?this.P():null}get headers(){this.T.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.T.set("Authorization",e),this.h&&this.T.set("X-Goog-Iam-Authorization-Token",this.h),this.T}}class qE{constructor(e,t,s){this.l=e,this.h=t,this.P=s}getToken(){return Promise.resolve(new $E(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(Mt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class HE{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class WE{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,t){Fe(this.o===void 0);const s=u=>{u.error!=null&&ne("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${u.error.message}`);const h=u.token!==this.R;return this.R=u.token,ne("FirebaseAppCheckTokenProvider",`Received ${h?"new":"existing"} token.`),h?t(u.token):Promise.resolve()};this.o=u=>{e.enqueueRetryable(()=>s(u))};const o=u=>{ne("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=u,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(u=>o(u)),setTimeout(()=>{if(!this.appCheck){const u=this.A.getImmediate({optional:!0});u?o(u):ne("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(Fe(typeof t.token=="string"),this.R=t.token,new HE(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GE(i){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(i);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let s=0;s<i;s++)t[s]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ry{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let s="";for(;s.length<20;){const o=GE(40);for(let u=0;u<o.length;++u)s.length<20&&o[u]<t&&(s+=e.charAt(o[u]%e.length))}return s}}function Pe(i,e){return i<e?-1:i>e?1:0}function io(i,e,t){return i.length===e.length&&i.every((s,o)=>t(s,e[o]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ft{static now(){return ft.fromMillis(Date.now())}static fromDate(e){return ft.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),s=Math.floor(1e6*(e-1e3*t));return new ft(t,s)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new se(W.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new se(W.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new se(W.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new se(W.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Pe(this.nanoseconds,e.nanoseconds):Pe(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class we{static fromTimestamp(e){return new we(e)}static min(){return new we(new ft(0,0))}static max(){return new we(new ft(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gn{constructor(e,t,s){t===void 0?t=0:t>e.length&&ve(),s===void 0?s=e.length-t:s>e.length-t&&ve(),this.segments=e,this.offset=t,this.len=s}get length(){return this.len}isEqual(e){return Gn.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Gn?e.forEach(s=>{t.push(s)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,s=this.limit();t<s;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const s=Math.min(e.length,t.length);for(let o=0;o<s;o++){const u=Gn.compareSegments(e.get(o),t.get(o));if(u!==0)return u}return Math.sign(e.length-t.length)}static compareSegments(e,t){const s=Gn.isNumericId(e),o=Gn.isNumericId(t);return s&&!o?-1:!s&&o?1:s&&o?Gn.extractNumericId(e).compare(Gn.extractNumericId(t)):e<t?-1:e>t?1:0}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return li.fromString(e.substring(4,e.length-2))}}class Ke extends Gn{construct(e,t,s){return new Ke(e,t,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const s of e){if(s.indexOf("//")>=0)throw new se(W.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);t.push(...s.split("/").filter(o=>o.length>0))}return new Ke(t)}static emptyPath(){return new Ke([])}}const KE=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ct extends Gn{construct(e,t,s){return new Ct(e,t,s)}static isValidIdentifier(e){return KE.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ct.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Ct(["__name__"])}static fromServerFormat(e){const t=[];let s="",o=0;const u=()=>{if(s.length===0)throw new se(W.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(s),s=""};let h=!1;for(;o<e.length;){const m=e[o];if(m==="\\"){if(o+1===e.length)throw new se(W.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const g=e[o+1];if(g!=="\\"&&g!=="."&&g!=="`")throw new se(W.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=g,o+=2}else m==="`"?(h=!h,o++):m!=="."||h?(s+=m,o++):(u(),o++)}if(u(),h)throw new se(W.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ct(t)}static emptyPath(){return new Ct([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class de{constructor(e){this.path=e}static fromPath(e){return new de(Ke.fromString(e))}static fromName(e){return new de(Ke.fromString(e).popFirst(5))}static empty(){return new de(Ke.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ke.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return Ke.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new de(new Ke(e.slice()))}}function QE(i,e){const t=i.toTimestamp().seconds,s=i.toTimestamp().nanoseconds+1,o=we.fromTimestamp(s===1e9?new ft(t+1,0):new ft(t,s));return new hi(o,de.empty(),e)}function XE(i){return new hi(i.readTime,i.key,-1)}class hi{constructor(e,t,s){this.readTime=e,this.documentKey=t,this.largestBatchId=s}static min(){return new hi(we.min(),de.empty(),-1)}static max(){return new hi(we.max(),de.empty(),-1)}}function YE(i,e){let t=i.readTime.compareTo(e.readTime);return t!==0?t:(t=de.comparator(i.documentKey,e.documentKey),t!==0?t:Pe(i.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JE="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class ZE{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function po(i){if(i.code!==W.FAILED_PRECONDITION||i.message!==JE)throw i;ne("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ${constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&ve(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new $((s,o)=>{this.nextCallback=u=>{this.wrapSuccess(e,u).next(s,o)},this.catchCallback=u=>{this.wrapFailure(t,u).next(s,o)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof $?t:$.resolve(t)}catch(t){return $.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):$.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):$.reject(t)}static resolve(e){return new $((t,s)=>{t(e)})}static reject(e){return new $((t,s)=>{s(e)})}static waitFor(e){return new $((t,s)=>{let o=0,u=0,h=!1;e.forEach(m=>{++o,m.next(()=>{++u,h&&u===o&&t()},g=>s(g))}),h=!0,u===o&&t()})}static or(e){let t=$.resolve(!1);for(const s of e)t=t.next(o=>o?$.resolve(o):s());return t}static forEach(e,t){const s=[];return e.forEach((o,u)=>{s.push(t.call(this,o,u))}),this.waitFor(s)}static mapArray(e,t){return new $((s,o)=>{const u=e.length,h=new Array(u);let m=0;for(let g=0;g<u;g++){const v=g;t(e[v]).next(w=>{h[v]=w,++m,m===u&&s(h)},w=>o(w))}})}static doWhile(e,t){return new $((s,o)=>{const u=()=>{e()===!0?t().next(()=>{u()},o):s()};u()})}}function ew(i){const e=i.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function mo(i){return i.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uu{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=s=>this.ie(s),this.se=s=>t.writeSequenceNumber(s))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}Uu.oe=-1;function ju(i){return i==null}function Iu(i){return i===0&&1/i==-1/0}function tw(i){return typeof i=="number"&&Number.isInteger(i)&&!Iu(i)&&i<=Number.MAX_SAFE_INTEGER&&i>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nw(i){let e="";for(let t=0;t<i.length;t++)e.length>0&&(e=Vm(e)),e=rw(i.get(t),e);return Vm(e)}function rw(i,e){let t=e;const s=i.length;for(let o=0;o<s;o++){const u=i.charAt(o);switch(u){case"\0":t+="";break;case"":t+="";break;default:t+=u}}return t}function Vm(i){return i+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Om(i){let e=0;for(const t in i)Object.prototype.hasOwnProperty.call(i,t)&&e++;return e}function Xi(i,e){for(const t in i)Object.prototype.hasOwnProperty.call(i,t)&&e(t,i[t])}function iy(i){for(const e in i)if(Object.prototype.hasOwnProperty.call(i,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ze{constructor(e,t){this.comparator=e,this.root=t||Rt.EMPTY}insert(e,t){return new Ze(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Rt.BLACK,null,null))}remove(e){return new Ze(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Rt.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const s=this.comparator(e,t.key);if(s===0)return t.value;s<0?t=t.left:s>0&&(t=t.right)}return null}indexOf(e){let t=0,s=this.root;for(;!s.isEmpty();){const o=this.comparator(e,s.key);if(o===0)return t+s.left.size;o<0?s=s.left:(t+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,s)=>(e(t,s),!1))}toString(){const e=[];return this.inorderTraversal((t,s)=>(e.push(`${t}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new iu(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new iu(this.root,e,this.comparator,!1)}getReverseIterator(){return new iu(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new iu(this.root,e,this.comparator,!0)}}class iu{constructor(e,t,s,o){this.isReverse=o,this.nodeStack=[];let u=1;for(;!e.isEmpty();)if(u=t?s(e.key,t):1,t&&o&&(u*=-1),u<0)e=this.isReverse?e.left:e.right;else{if(u===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Rt{constructor(e,t,s,o,u){this.key=e,this.value=t,this.color=s??Rt.RED,this.left=o??Rt.EMPTY,this.right=u??Rt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,s,o,u){return new Rt(e??this.key,t??this.value,s??this.color,o??this.left,u??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let o=this;const u=s(e,o.key);return o=u<0?o.copy(null,null,null,o.left.insert(e,t,s),null):u===0?o.copy(null,t,null,null,null):o.copy(null,null,null,null,o.right.insert(e,t,s)),o.fixUp()}removeMin(){if(this.left.isEmpty())return Rt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let s,o=this;if(t(e,o.key)<0)o.left.isEmpty()||o.left.isRed()||o.left.left.isRed()||(o=o.moveRedLeft()),o=o.copy(null,null,null,o.left.remove(e,t),null);else{if(o.left.isRed()&&(o=o.rotateRight()),o.right.isEmpty()||o.right.isRed()||o.right.left.isRed()||(o=o.moveRedRight()),t(e,o.key)===0){if(o.right.isEmpty())return Rt.EMPTY;s=o.right.min(),o=o.copy(s.key,s.value,null,null,o.right.removeMin())}o=o.copy(null,null,null,null,o.right.remove(e,t))}return o.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Rt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Rt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw ve();const e=this.left.check();if(e!==this.right.check())throw ve();return e+(this.isRed()?0:1)}}Rt.EMPTY=null,Rt.RED=!0,Rt.BLACK=!1;Rt.EMPTY=new class{constructor(){this.size=0}get key(){throw ve()}get value(){throw ve()}get color(){throw ve()}get left(){throw ve()}get right(){throw ve()}copy(e,t,s,o,u){return this}insert(e,t,s){return new Rt(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pt{constructor(e){this.comparator=e,this.data=new Ze(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,s)=>(e(t),!1))}forEachInRange(e,t){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const o=s.getNext();if(this.comparator(o.key,e[1])>=0)return;t(o.key)}}forEachWhile(e,t){let s;for(s=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Lm(this.data.getIterator())}getIteratorFrom(e){return new Lm(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(s=>{t=t.add(s)}),t}isEqual(e){if(!(e instanceof pt)||this.size!==e.size)return!1;const t=this.data.getIterator(),s=e.data.getIterator();for(;t.hasNext();){const o=t.getNext().key,u=s.getNext().key;if(this.comparator(o,u)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new pt(this.comparator);return t.data=e,t}}class Lm{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class On{constructor(e){this.fields=e,e.sort(Ct.comparator)}static empty(){return new On([])}unionWith(e){let t=new pt(Ct.comparator);for(const s of this.fields)t=t.add(s);for(const s of e)t=t.add(s);return new On(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return io(this.fields,e.fields,(t,s)=>t.isEqual(s))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sy extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kt{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(o){try{return atob(o)}catch(u){throw typeof DOMException<"u"&&u instanceof DOMException?new sy("Invalid base64 string: "+u):u}}(e);return new kt(t)}static fromUint8Array(e){const t=function(o){let u="";for(let h=0;h<o.length;++h)u+=String.fromCharCode(o[h]);return u}(e);return new kt(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const s=new Uint8Array(t.length);for(let o=0;o<t.length;o++)s[o]=t.charCodeAt(o);return s}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Pe(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}kt.EMPTY_BYTE_STRING=new kt("");const iw=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function di(i){if(Fe(!!i),typeof i=="string"){let e=0;const t=iw.exec(i);if(Fe(!!t),t[1]){let o=t[1];o=(o+"000000000").substr(0,9),e=Number(o)}const s=new Date(i);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:rt(i.seconds),nanos:rt(i.nanos)}}function rt(i){return typeof i=="number"?i:typeof i=="string"?Number(i):0}function fi(i){return typeof i=="string"?kt.fromBase64String(i):kt.fromUint8Array(i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _d(i){var e,t;return((t=(((e=i==null?void 0:i.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function zu(i){const e=i.mapValue.fields.__previous_value__;return _d(e)?zu(e):e}function Ia(i){const e=di(i.mapValue.fields.__local_write_time__.timestampValue);return new ft(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sw{constructor(e,t,s,o,u,h,m,g,v){this.databaseId=e,this.appId=t,this.persistenceKey=s,this.host=o,this.ssl=u,this.forceLongPolling=h,this.autoDetectLongPolling=m,this.longPollingOptions=g,this.useFetchStreams=v}}class Sa{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new Sa("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Sa&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const su={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function pi(i){return"nullValue"in i?0:"booleanValue"in i?1:"integerValue"in i||"doubleValue"in i?2:"timestampValue"in i?3:"stringValue"in i?5:"bytesValue"in i?6:"referenceValue"in i?7:"geoPointValue"in i?8:"arrayValue"in i?9:"mapValue"in i?_d(i)?4:aw(i)?9007199254740991:ow(i)?10:11:ve()}function Zn(i,e){if(i===e)return!0;const t=pi(i);if(t!==pi(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return i.booleanValue===e.booleanValue;case 4:return Ia(i).isEqual(Ia(e));case 3:return function(o,u){if(typeof o.timestampValue=="string"&&typeof u.timestampValue=="string"&&o.timestampValue.length===u.timestampValue.length)return o.timestampValue===u.timestampValue;const h=di(o.timestampValue),m=di(u.timestampValue);return h.seconds===m.seconds&&h.nanos===m.nanos}(i,e);case 5:return i.stringValue===e.stringValue;case 6:return function(o,u){return fi(o.bytesValue).isEqual(fi(u.bytesValue))}(i,e);case 7:return i.referenceValue===e.referenceValue;case 8:return function(o,u){return rt(o.geoPointValue.latitude)===rt(u.geoPointValue.latitude)&&rt(o.geoPointValue.longitude)===rt(u.geoPointValue.longitude)}(i,e);case 2:return function(o,u){if("integerValue"in o&&"integerValue"in u)return rt(o.integerValue)===rt(u.integerValue);if("doubleValue"in o&&"doubleValue"in u){const h=rt(o.doubleValue),m=rt(u.doubleValue);return h===m?Iu(h)===Iu(m):isNaN(h)&&isNaN(m)}return!1}(i,e);case 9:return io(i.arrayValue.values||[],e.arrayValue.values||[],Zn);case 10:case 11:return function(o,u){const h=o.mapValue.fields||{},m=u.mapValue.fields||{};if(Om(h)!==Om(m))return!1;for(const g in h)if(h.hasOwnProperty(g)&&(m[g]===void 0||!Zn(h[g],m[g])))return!1;return!0}(i,e);default:return ve()}}function Aa(i,e){return(i.values||[]).find(t=>Zn(t,e))!==void 0}function so(i,e){if(i===e)return 0;const t=pi(i),s=pi(e);if(t!==s)return Pe(t,s);switch(t){case 0:case 9007199254740991:return 0;case 1:return Pe(i.booleanValue,e.booleanValue);case 2:return function(u,h){const m=rt(u.integerValue||u.doubleValue),g=rt(h.integerValue||h.doubleValue);return m<g?-1:m>g?1:m===g?0:isNaN(m)?isNaN(g)?0:-1:1}(i,e);case 3:return Mm(i.timestampValue,e.timestampValue);case 4:return Mm(Ia(i),Ia(e));case 5:return Pe(i.stringValue,e.stringValue);case 6:return function(u,h){const m=fi(u),g=fi(h);return m.compareTo(g)}(i.bytesValue,e.bytesValue);case 7:return function(u,h){const m=u.split("/"),g=h.split("/");for(let v=0;v<m.length&&v<g.length;v++){const w=Pe(m[v],g[v]);if(w!==0)return w}return Pe(m.length,g.length)}(i.referenceValue,e.referenceValue);case 8:return function(u,h){const m=Pe(rt(u.latitude),rt(h.latitude));return m!==0?m:Pe(rt(u.longitude),rt(h.longitude))}(i.geoPointValue,e.geoPointValue);case 9:return bm(i.arrayValue,e.arrayValue);case 10:return function(u,h){var m,g,v,w;const k=u.fields||{},M=h.fields||{},z=(m=k.value)===null||m===void 0?void 0:m.arrayValue,H=(g=M.value)===null||g===void 0?void 0:g.arrayValue,G=Pe(((v=z==null?void 0:z.values)===null||v===void 0?void 0:v.length)||0,((w=H==null?void 0:H.values)===null||w===void 0?void 0:w.length)||0);return G!==0?G:bm(z,H)}(i.mapValue,e.mapValue);case 11:return function(u,h){if(u===su.mapValue&&h===su.mapValue)return 0;if(u===su.mapValue)return 1;if(h===su.mapValue)return-1;const m=u.fields||{},g=Object.keys(m),v=h.fields||{},w=Object.keys(v);g.sort(),w.sort();for(let k=0;k<g.length&&k<w.length;++k){const M=Pe(g[k],w[k]);if(M!==0)return M;const z=so(m[g[k]],v[w[k]]);if(z!==0)return z}return Pe(g.length,w.length)}(i.mapValue,e.mapValue);default:throw ve()}}function Mm(i,e){if(typeof i=="string"&&typeof e=="string"&&i.length===e.length)return Pe(i,e);const t=di(i),s=di(e),o=Pe(t.seconds,s.seconds);return o!==0?o:Pe(t.nanos,s.nanos)}function bm(i,e){const t=i.values||[],s=e.values||[];for(let o=0;o<t.length&&o<s.length;++o){const u=so(t[o],s[o]);if(u)return u}return Pe(t.length,s.length)}function oo(i){return Xh(i)}function Xh(i){return"nullValue"in i?"null":"booleanValue"in i?""+i.booleanValue:"integerValue"in i?""+i.integerValue:"doubleValue"in i?""+i.doubleValue:"timestampValue"in i?function(t){const s=di(t);return`time(${s.seconds},${s.nanos})`}(i.timestampValue):"stringValue"in i?i.stringValue:"bytesValue"in i?function(t){return fi(t).toBase64()}(i.bytesValue):"referenceValue"in i?function(t){return de.fromName(t).toString()}(i.referenceValue):"geoPointValue"in i?function(t){return`geo(${t.latitude},${t.longitude})`}(i.geoPointValue):"arrayValue"in i?function(t){let s="[",o=!0;for(const u of t.values||[])o?o=!1:s+=",",s+=Xh(u);return s+"]"}(i.arrayValue):"mapValue"in i?function(t){const s=Object.keys(t.fields||{}).sort();let o="{",u=!0;for(const h of s)u?u=!1:o+=",",o+=`${h}:${Xh(t.fields[h])}`;return o+"}"}(i.mapValue):ve()}function hu(i){switch(pi(i)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=zu(i);return e?16+hu(e):16;case 5:return 2*i.stringValue.length;case 6:return fi(i.bytesValue).approximateByteSize();case 7:return i.referenceValue.length;case 9:return function(s){return(s.values||[]).reduce((o,u)=>o+hu(u),0)}(i.arrayValue);case 10:case 11:return function(s){let o=0;return Xi(s.fields,(u,h)=>{o+=u.length+hu(h)}),o}(i.mapValue);default:throw ve()}}function Fm(i,e){return{referenceValue:`projects/${i.projectId}/databases/${i.database}/documents/${e.path.canonicalString()}`}}function Yh(i){return!!i&&"integerValue"in i}function vd(i){return!!i&&"arrayValue"in i}function Um(i){return!!i&&"nullValue"in i}function jm(i){return!!i&&"doubleValue"in i&&isNaN(Number(i.doubleValue))}function du(i){return!!i&&"mapValue"in i}function ow(i){var e,t;return((t=(((e=i==null?void 0:i.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="__vector__"}function ya(i){if(i.geoPointValue)return{geoPointValue:Object.assign({},i.geoPointValue)};if(i.timestampValue&&typeof i.timestampValue=="object")return{timestampValue:Object.assign({},i.timestampValue)};if(i.mapValue){const e={mapValue:{fields:{}}};return Xi(i.mapValue.fields,(t,s)=>e.mapValue.fields[t]=ya(s)),e}if(i.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(i.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=ya(i.arrayValue.values[t]);return e}return Object.assign({},i)}function aw(i){return(((i.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gn{constructor(e){this.value=e}static empty(){return new gn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let s=0;s<e.length-1;++s)if(t=(t.mapValue.fields||{})[e.get(s)],!du(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=ya(t)}setAll(e){let t=Ct.emptyPath(),s={},o=[];e.forEach((h,m)=>{if(!t.isImmediateParentOf(m)){const g=this.getFieldsMap(t);this.applyChanges(g,s,o),s={},o=[],t=m.popLast()}h?s[m.lastSegment()]=ya(h):o.push(m.lastSegment())});const u=this.getFieldsMap(t);this.applyChanges(u,s,o)}delete(e){const t=this.field(e.popLast());du(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Zn(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let s=0;s<e.length;++s){let o=t.mapValue.fields[e.get(s)];du(o)&&o.mapValue.fields||(o={mapValue:{fields:{}}},t.mapValue.fields[e.get(s)]=o),t=o}return t.mapValue.fields}applyChanges(e,t,s){Xi(t,(o,u)=>e[o]=u);for(const o of s)delete e[o]}clone(){return new gn(ya(this.value))}}function oy(i){const e=[];return Xi(i.fields,(t,s)=>{const o=new Ct([t]);if(du(s)){const u=oy(s.mapValue).fields;if(u.length===0)e.push(o);else for(const h of u)e.push(o.child(h))}else e.push(o)}),new On(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bt{constructor(e,t,s,o,u,h,m){this.key=e,this.documentType=t,this.version=s,this.readTime=o,this.createTime=u,this.data=h,this.documentState=m}static newInvalidDocument(e){return new bt(e,0,we.min(),we.min(),we.min(),gn.empty(),0)}static newFoundDocument(e,t,s,o){return new bt(e,1,t,we.min(),s,o,0)}static newNoDocument(e,t){return new bt(e,2,t,we.min(),we.min(),gn.empty(),0)}static newUnknownDocument(e,t){return new bt(e,3,t,we.min(),we.min(),gn.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(we.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=gn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=gn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=we.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof bt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new bt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Su{constructor(e,t){this.position=e,this.inclusive=t}}function zm(i,e,t){let s=0;for(let o=0;o<i.position.length;o++){const u=e[o],h=i.position[o];if(u.field.isKeyField()?s=de.comparator(de.fromName(h.referenceValue),t.key):s=so(h,t.data.field(u.field)),u.dir==="desc"&&(s*=-1),s!==0)break}return s}function Bm(i,e){if(i===null)return e===null;if(e===null||i.inclusive!==e.inclusive||i.position.length!==e.position.length)return!1;for(let t=0;t<i.position.length;t++)if(!Zn(i.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Au{constructor(e,t="asc"){this.field=e,this.dir=t}}function lw(i,e){return i.dir===e.dir&&i.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ay{}class at extends ay{constructor(e,t,s){super(),this.field=e,this.op=t,this.value=s}static create(e,t,s){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,s):new cw(e,t,s):t==="array-contains"?new fw(e,s):t==="in"?new pw(e,s):t==="not-in"?new mw(e,s):t==="array-contains-any"?new gw(e,s):new at(e,t,s)}static createKeyFieldInFilter(e,t,s){return t==="in"?new hw(e,s):new dw(e,s)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(so(t,this.value)):t!==null&&pi(this.value)===pi(t)&&this.matchesComparison(so(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ve()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Ln extends ay{constructor(e,t){super(),this.filters=e,this.op=t,this.ae=null}static create(e,t){return new Ln(e,t)}matches(e){return ly(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function ly(i){return i.op==="and"}function uy(i){return uw(i)&&ly(i)}function uw(i){for(const e of i.filters)if(e instanceof Ln)return!1;return!0}function Jh(i){if(i instanceof at)return i.field.canonicalString()+i.op.toString()+oo(i.value);if(uy(i))return i.filters.map(e=>Jh(e)).join(",");{const e=i.filters.map(t=>Jh(t)).join(",");return`${i.op}(${e})`}}function cy(i,e){return i instanceof at?function(s,o){return o instanceof at&&s.op===o.op&&s.field.isEqual(o.field)&&Zn(s.value,o.value)}(i,e):i instanceof Ln?function(s,o){return o instanceof Ln&&s.op===o.op&&s.filters.length===o.filters.length?s.filters.reduce((u,h,m)=>u&&cy(h,o.filters[m]),!0):!1}(i,e):void ve()}function hy(i){return i instanceof at?function(t){return`${t.field.canonicalString()} ${t.op} ${oo(t.value)}`}(i):i instanceof Ln?function(t){return t.op.toString()+" {"+t.getFilters().map(hy).join(" ,")+"}"}(i):"Filter"}class cw extends at{constructor(e,t,s){super(e,t,s),this.key=de.fromName(s.referenceValue)}matches(e){const t=de.comparator(e.key,this.key);return this.matchesComparison(t)}}class hw extends at{constructor(e,t){super(e,"in",t),this.keys=dy("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class dw extends at{constructor(e,t){super(e,"not-in",t),this.keys=dy("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function dy(i,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(s=>de.fromName(s.referenceValue))}class fw extends at{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return vd(t)&&Aa(t.arrayValue,this.value)}}class pw extends at{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Aa(this.value.arrayValue,t)}}class mw extends at{constructor(e,t){super(e,"not-in",t)}matches(e){if(Aa(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!Aa(this.value.arrayValue,t)}}class gw extends at{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!vd(t)||!t.arrayValue.values)&&t.arrayValue.values.some(s=>Aa(this.value.arrayValue,s))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yw{constructor(e,t=null,s=[],o=[],u=null,h=null,m=null){this.path=e,this.collectionGroup=t,this.orderBy=s,this.filters=o,this.limit=u,this.startAt=h,this.endAt=m,this.ue=null}}function $m(i,e=null,t=[],s=[],o=null,u=null,h=null){return new yw(i,e,t,s,o,u,h)}function Ed(i){const e=Te(i);if(e.ue===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(s=>Jh(s)).join(","),t+="|ob:",t+=e.orderBy.map(s=>function(u){return u.field.canonicalString()+u.dir}(s)).join(","),ju(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(s=>oo(s)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(s=>oo(s)).join(",")),e.ue=t}return e.ue}function wd(i,e){if(i.limit!==e.limit||i.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<i.orderBy.length;t++)if(!lw(i.orderBy[t],e.orderBy[t]))return!1;if(i.filters.length!==e.filters.length)return!1;for(let t=0;t<i.filters.length;t++)if(!cy(i.filters[t],e.filters[t]))return!1;return i.collectionGroup===e.collectionGroup&&!!i.path.isEqual(e.path)&&!!Bm(i.startAt,e.startAt)&&Bm(i.endAt,e.endAt)}function Zh(i){return de.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Va{constructor(e,t=null,s=[],o=[],u=null,h="F",m=null,g=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=s,this.filters=o,this.limit=u,this.limitType=h,this.startAt=m,this.endAt=g,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function _w(i,e,t,s,o,u,h,m){return new Va(i,e,t,s,o,u,h,m)}function fy(i){return new Va(i)}function qm(i){return i.filters.length===0&&i.limit===null&&i.startAt==null&&i.endAt==null&&(i.explicitOrderBy.length===0||i.explicitOrderBy.length===1&&i.explicitOrderBy[0].field.isKeyField())}function py(i){return i.collectionGroup!==null}function _a(i){const e=Te(i);if(e.ce===null){e.ce=[];const t=new Set;for(const u of e.explicitOrderBy)e.ce.push(u),t.add(u.field.canonicalString());const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(h){let m=new pt(Ct.comparator);return h.filters.forEach(g=>{g.getFlattenedFilters().forEach(v=>{v.isInequality()&&(m=m.add(v.field))})}),m})(e).forEach(u=>{t.has(u.canonicalString())||u.isKeyField()||e.ce.push(new Au(u,s))}),t.has(Ct.keyField().canonicalString())||e.ce.push(new Au(Ct.keyField(),s))}return e.ce}function Kn(i){const e=Te(i);return e.le||(e.le=vw(e,_a(i))),e.le}function vw(i,e){if(i.limitType==="F")return $m(i.path,i.collectionGroup,e,i.filters,i.limit,i.startAt,i.endAt);{e=e.map(o=>{const u=o.dir==="desc"?"asc":"desc";return new Au(o.field,u)});const t=i.endAt?new Su(i.endAt.position,i.endAt.inclusive):null,s=i.startAt?new Su(i.startAt.position,i.startAt.inclusive):null;return $m(i.path,i.collectionGroup,e,i.filters,i.limit,t,s)}}function ed(i,e){const t=i.filters.concat([e]);return new Va(i.path,i.collectionGroup,i.explicitOrderBy.slice(),t,i.limit,i.limitType,i.startAt,i.endAt)}function td(i,e,t){return new Va(i.path,i.collectionGroup,i.explicitOrderBy.slice(),i.filters.slice(),e,t,i.startAt,i.endAt)}function Bu(i,e){return wd(Kn(i),Kn(e))&&i.limitType===e.limitType}function my(i){return`${Ed(Kn(i))}|lt:${i.limitType}`}function Gs(i){return`Query(target=${function(t){let s=t.path.canonicalString();return t.collectionGroup!==null&&(s+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(s+=`, filters: [${t.filters.map(o=>hy(o)).join(", ")}]`),ju(t.limit)||(s+=", limit: "+t.limit),t.orderBy.length>0&&(s+=`, orderBy: [${t.orderBy.map(o=>function(h){return`${h.field.canonicalString()} (${h.dir})`}(o)).join(", ")}]`),t.startAt&&(s+=", startAt: ",s+=t.startAt.inclusive?"b:":"a:",s+=t.startAt.position.map(o=>oo(o)).join(",")),t.endAt&&(s+=", endAt: ",s+=t.endAt.inclusive?"a:":"b:",s+=t.endAt.position.map(o=>oo(o)).join(",")),`Target(${s})`}(Kn(i))}; limitType=${i.limitType})`}function $u(i,e){return e.isFoundDocument()&&function(s,o){const u=o.key.path;return s.collectionGroup!==null?o.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(u):de.isDocumentKey(s.path)?s.path.isEqual(u):s.path.isImmediateParentOf(u)}(i,e)&&function(s,o){for(const u of _a(s))if(!u.field.isKeyField()&&o.data.field(u.field)===null)return!1;return!0}(i,e)&&function(s,o){for(const u of s.filters)if(!u.matches(o))return!1;return!0}(i,e)&&function(s,o){return!(s.startAt&&!function(h,m,g){const v=zm(h,m,g);return h.inclusive?v<=0:v<0}(s.startAt,_a(s),o)||s.endAt&&!function(h,m,g){const v=zm(h,m,g);return h.inclusive?v>=0:v>0}(s.endAt,_a(s),o))}(i,e)}function Ew(i){return i.collectionGroup||(i.path.length%2==1?i.path.lastSegment():i.path.get(i.path.length-2))}function gy(i){return(e,t)=>{let s=!1;for(const o of _a(i)){const u=ww(o,e,t);if(u!==0)return u;s=s||o.field.isKeyField()}return 0}}function ww(i,e,t){const s=i.field.isKeyField()?de.comparator(e.key,t.key):function(u,h,m){const g=h.data.field(u),v=m.data.field(u);return g!==null&&v!==null?so(g,v):ve()}(i.field,e,t);switch(i.dir){case"asc":return s;case"desc":return-1*s;default:return ve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yi{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s!==void 0){for(const[o,u]of s)if(this.equalsFn(o,e))return u}}has(e){return this.get(e)!==void 0}set(e,t){const s=this.mapKeyFn(e),o=this.inner[s];if(o===void 0)return this.inner[s]=[[e,t]],void this.innerSize++;for(let u=0;u<o.length;u++)if(this.equalsFn(o[u][0],e))return void(o[u]=[e,t]);o.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s===void 0)return!1;for(let o=0;o<s.length;o++)if(this.equalsFn(s[o][0],e))return s.length===1?delete this.inner[t]:s.splice(o,1),this.innerSize--,!0;return!1}forEach(e){Xi(this.inner,(t,s)=>{for(const[o,u]of s)e(o,u)})}isEmpty(){return iy(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tw=new Ze(de.comparator);function Ir(){return Tw}const yy=new Ze(de.comparator);function ma(...i){let e=yy;for(const t of i)e=e.insert(t.key,t);return e}function _y(i){let e=yy;return i.forEach((t,s)=>e=e.insert(t,s.overlayedDocument)),e}function Hi(){return va()}function vy(){return va()}function va(){return new Yi(i=>i.toString(),(i,e)=>i.isEqual(e))}const Iw=new Ze(de.comparator),Sw=new pt(de.comparator);function Ce(...i){let e=Sw;for(const t of i)e=e.add(t);return e}const Aw=new pt(Pe);function Rw(){return Aw}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Td(i,e){if(i.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Iu(e)?"-0":e}}function Ey(i){return{integerValue:""+i}}function Cw(i,e){return tw(e)?Ey(e):Td(i,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qu{constructor(){this._=void 0}}function kw(i,e,t){return i instanceof Ru?function(o,u){const h={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:o.seconds,nanos:o.nanoseconds}}}};return u&&_d(u)&&(u=zu(u)),u&&(h.fields.__previous_value__=u),{mapValue:h}}(t,e):i instanceof Ra?Ty(i,e):i instanceof Ca?Iy(i,e):function(o,u){const h=wy(o,u),m=Hm(h)+Hm(o.Pe);return Yh(h)&&Yh(o.Pe)?Ey(m):Td(o.serializer,m)}(i,e)}function Pw(i,e,t){return i instanceof Ra?Ty(i,e):i instanceof Ca?Iy(i,e):t}function wy(i,e){return i instanceof Cu?function(s){return Yh(s)||function(u){return!!u&&"doubleValue"in u}(s)}(e)?e:{integerValue:0}:null}class Ru extends qu{}class Ra extends qu{constructor(e){super(),this.elements=e}}function Ty(i,e){const t=Sy(e);for(const s of i.elements)t.some(o=>Zn(o,s))||t.push(s);return{arrayValue:{values:t}}}class Ca extends qu{constructor(e){super(),this.elements=e}}function Iy(i,e){let t=Sy(e);for(const s of i.elements)t=t.filter(o=>!Zn(o,s));return{arrayValue:{values:t}}}class Cu extends qu{constructor(e,t){super(),this.serializer=e,this.Pe=t}}function Hm(i){return rt(i.integerValue||i.doubleValue)}function Sy(i){return vd(i)&&i.arrayValue.values?i.arrayValue.values.slice():[]}function Nw(i,e){return i.field.isEqual(e.field)&&function(s,o){return s instanceof Ra&&o instanceof Ra||s instanceof Ca&&o instanceof Ca?io(s.elements,o.elements,Zn):s instanceof Cu&&o instanceof Cu?Zn(s.Pe,o.Pe):s instanceof Ru&&o instanceof Ru}(i.transform,e.transform)}class xw{constructor(e,t){this.version=e,this.transformResults=t}}class Qn{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Qn}static exists(e){return new Qn(void 0,e)}static updateTime(e){return new Qn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function fu(i,e){return i.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(i.updateTime):i.exists===void 0||i.exists===e.isFoundDocument()}class Hu{}function Ay(i,e){if(!i.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return i.isNoDocument()?new Id(i.key,Qn.none()):new Oa(i.key,i.data,Qn.none());{const t=i.data,s=gn.empty();let o=new pt(Ct.comparator);for(let u of e.fields)if(!o.has(u)){let h=t.field(u);h===null&&u.length>1&&(u=u.popLast(),h=t.field(u)),h===null?s.delete(u):s.set(u,h),o=o.add(u)}return new Ji(i.key,s,new On(o.toArray()),Qn.none())}}function Dw(i,e,t){i instanceof Oa?function(o,u,h){const m=o.value.clone(),g=Gm(o.fieldTransforms,u,h.transformResults);m.setAll(g),u.convertToFoundDocument(h.version,m).setHasCommittedMutations()}(i,e,t):i instanceof Ji?function(o,u,h){if(!fu(o.precondition,u))return void u.convertToUnknownDocument(h.version);const m=Gm(o.fieldTransforms,u,h.transformResults),g=u.data;g.setAll(Ry(o)),g.setAll(m),u.convertToFoundDocument(h.version,g).setHasCommittedMutations()}(i,e,t):function(o,u,h){u.convertToNoDocument(h.version).setHasCommittedMutations()}(0,e,t)}function Ea(i,e,t,s){return i instanceof Oa?function(u,h,m,g){if(!fu(u.precondition,h))return m;const v=u.value.clone(),w=Km(u.fieldTransforms,g,h);return v.setAll(w),h.convertToFoundDocument(h.version,v).setHasLocalMutations(),null}(i,e,t,s):i instanceof Ji?function(u,h,m,g){if(!fu(u.precondition,h))return m;const v=Km(u.fieldTransforms,g,h),w=h.data;return w.setAll(Ry(u)),w.setAll(v),h.convertToFoundDocument(h.version,w).setHasLocalMutations(),m===null?null:m.unionWith(u.fieldMask.fields).unionWith(u.fieldTransforms.map(k=>k.field))}(i,e,t,s):function(u,h,m){return fu(u.precondition,h)?(h.convertToNoDocument(h.version).setHasLocalMutations(),null):m}(i,e,t)}function Vw(i,e){let t=null;for(const s of i.fieldTransforms){const o=e.data.field(s.field),u=wy(s.transform,o||null);u!=null&&(t===null&&(t=gn.empty()),t.set(s.field,u))}return t||null}function Wm(i,e){return i.type===e.type&&!!i.key.isEqual(e.key)&&!!i.precondition.isEqual(e.precondition)&&!!function(s,o){return s===void 0&&o===void 0||!(!s||!o)&&io(s,o,(u,h)=>Nw(u,h))}(i.fieldTransforms,e.fieldTransforms)&&(i.type===0?i.value.isEqual(e.value):i.type!==1||i.data.isEqual(e.data)&&i.fieldMask.isEqual(e.fieldMask))}class Oa extends Hu{constructor(e,t,s,o=[]){super(),this.key=e,this.value=t,this.precondition=s,this.fieldTransforms=o,this.type=0}getFieldMask(){return null}}class Ji extends Hu{constructor(e,t,s,o,u=[]){super(),this.key=e,this.data=t,this.fieldMask=s,this.precondition=o,this.fieldTransforms=u,this.type=1}getFieldMask(){return this.fieldMask}}function Ry(i){const e=new Map;return i.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const s=i.data.field(t);e.set(t,s)}}),e}function Gm(i,e,t){const s=new Map;Fe(i.length===t.length);for(let o=0;o<t.length;o++){const u=i[o],h=u.transform,m=e.data.field(u.field);s.set(u.field,Pw(h,m,t[o]))}return s}function Km(i,e,t){const s=new Map;for(const o of i){const u=o.transform,h=t.data.field(o.field);s.set(o.field,kw(u,h,e))}return s}class Id extends Hu{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Ow extends Hu{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lw{constructor(e,t,s,o){this.batchId=e,this.localWriteTime=t,this.baseMutations=s,this.mutations=o}applyToRemoteDocument(e,t){const s=t.mutationResults;for(let o=0;o<this.mutations.length;o++){const u=this.mutations[o];u.key.isEqual(e.key)&&Dw(u,e,s[o])}}applyToLocalView(e,t){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(t=Ea(s,e,t,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(t=Ea(s,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const s=vy();return this.mutations.forEach(o=>{const u=e.get(o.key),h=u.overlayedDocument;let m=this.applyToLocalView(h,u.mutatedFields);m=t.has(o.key)?null:m;const g=Ay(h,m);g!==null&&s.set(o.key,g),h.isValidDocument()||h.convertToNoDocument(we.min())}),s}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),Ce())}isEqual(e){return this.batchId===e.batchId&&io(this.mutations,e.mutations,(t,s)=>Wm(t,s))&&io(this.baseMutations,e.baseMutations,(t,s)=>Wm(t,s))}}class Sd{constructor(e,t,s,o){this.batch=e,this.commitVersion=t,this.mutationResults=s,this.docVersions=o}static from(e,t,s){Fe(e.mutations.length===s.length);let o=function(){return Iw}();const u=e.mutations;for(let h=0;h<u.length;h++)o=o.insert(u[h].key,s[h].version);return new Sd(e,t,s,o)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mw{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bw{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ot,De;function Fw(i){switch(i){default:return ve();case W.CANCELLED:case W.UNKNOWN:case W.DEADLINE_EXCEEDED:case W.RESOURCE_EXHAUSTED:case W.INTERNAL:case W.UNAVAILABLE:case W.UNAUTHENTICATED:return!1;case W.INVALID_ARGUMENT:case W.NOT_FOUND:case W.ALREADY_EXISTS:case W.PERMISSION_DENIED:case W.FAILED_PRECONDITION:case W.ABORTED:case W.OUT_OF_RANGE:case W.UNIMPLEMENTED:case W.DATA_LOSS:return!0}}function Cy(i){if(i===void 0)return Tr("GRPC error has no .code"),W.UNKNOWN;switch(i){case ot.OK:return W.OK;case ot.CANCELLED:return W.CANCELLED;case ot.UNKNOWN:return W.UNKNOWN;case ot.DEADLINE_EXCEEDED:return W.DEADLINE_EXCEEDED;case ot.RESOURCE_EXHAUSTED:return W.RESOURCE_EXHAUSTED;case ot.INTERNAL:return W.INTERNAL;case ot.UNAVAILABLE:return W.UNAVAILABLE;case ot.UNAUTHENTICATED:return W.UNAUTHENTICATED;case ot.INVALID_ARGUMENT:return W.INVALID_ARGUMENT;case ot.NOT_FOUND:return W.NOT_FOUND;case ot.ALREADY_EXISTS:return W.ALREADY_EXISTS;case ot.PERMISSION_DENIED:return W.PERMISSION_DENIED;case ot.FAILED_PRECONDITION:return W.FAILED_PRECONDITION;case ot.ABORTED:return W.ABORTED;case ot.OUT_OF_RANGE:return W.OUT_OF_RANGE;case ot.UNIMPLEMENTED:return W.UNIMPLEMENTED;case ot.DATA_LOSS:return W.DATA_LOSS;default:return ve()}}(De=ot||(ot={}))[De.OK=0]="OK",De[De.CANCELLED=1]="CANCELLED",De[De.UNKNOWN=2]="UNKNOWN",De[De.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",De[De.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",De[De.NOT_FOUND=5]="NOT_FOUND",De[De.ALREADY_EXISTS=6]="ALREADY_EXISTS",De[De.PERMISSION_DENIED=7]="PERMISSION_DENIED",De[De.UNAUTHENTICATED=16]="UNAUTHENTICATED",De[De.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",De[De.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",De[De.ABORTED=10]="ABORTED",De[De.OUT_OF_RANGE=11]="OUT_OF_RANGE",De[De.UNIMPLEMENTED=12]="UNIMPLEMENTED",De[De.INTERNAL=13]="INTERNAL",De[De.UNAVAILABLE=14]="UNAVAILABLE",De[De.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uw(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jw=new li([4294967295,4294967295],0);function Qm(i){const e=Uw().encode(i),t=new Xg;return t.update(e),new Uint8Array(t.digest())}function Xm(i){const e=new DataView(i.buffer),t=e.getUint32(0,!0),s=e.getUint32(4,!0),o=e.getUint32(8,!0),u=e.getUint32(12,!0);return[new li([t,s],0),new li([o,u],0)]}class Ad{constructor(e,t,s){if(this.bitmap=e,this.padding=t,this.hashCount=s,t<0||t>=8)throw new ga(`Invalid padding: ${t}`);if(s<0)throw new ga(`Invalid hash count: ${s}`);if(e.length>0&&this.hashCount===0)throw new ga(`Invalid hash count: ${s}`);if(e.length===0&&t!==0)throw new ga(`Invalid padding when bitmap length is 0: ${t}`);this.Te=8*e.length-t,this.Ie=li.fromNumber(this.Te)}de(e,t,s){let o=e.add(t.multiply(li.fromNumber(s)));return o.compare(jw)===1&&(o=new li([o.getBits(0),o.getBits(1)],0)),o.modulo(this.Ie).toNumber()}Ee(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Te===0)return!1;const t=Qm(e),[s,o]=Xm(t);for(let u=0;u<this.hashCount;u++){const h=this.de(s,o,u);if(!this.Ee(h))return!1}return!0}static create(e,t,s){const o=e%8==0?0:8-e%8,u=new Uint8Array(Math.ceil(e/8)),h=new Ad(u,o,t);return s.forEach(m=>h.insert(m)),h}insert(e){if(this.Te===0)return;const t=Qm(e),[s,o]=Xm(t);for(let u=0;u<this.hashCount;u++){const h=this.de(s,o,u);this.Ae(h)}}Ae(e){const t=Math.floor(e/8),s=e%8;this.bitmap[t]|=1<<s}}class ga extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wu{constructor(e,t,s,o,u){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=s,this.documentUpdates=o,this.resolvedLimboDocuments=u}static createSynthesizedRemoteEventForCurrentChange(e,t,s){const o=new Map;return o.set(e,La.createSynthesizedTargetChangeForCurrentChange(e,t,s)),new Wu(we.min(),o,new Ze(Pe),Ir(),Ce())}}class La{constructor(e,t,s,o,u){this.resumeToken=e,this.current=t,this.addedDocuments=s,this.modifiedDocuments=o,this.removedDocuments=u}static createSynthesizedTargetChangeForCurrentChange(e,t,s){return new La(s,t,Ce(),Ce(),Ce())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pu{constructor(e,t,s,o){this.Re=e,this.removedTargetIds=t,this.key=s,this.Ve=o}}class ky{constructor(e,t){this.targetId=e,this.me=t}}class Py{constructor(e,t,s=kt.EMPTY_BYTE_STRING,o=null){this.state=e,this.targetIds=t,this.resumeToken=s,this.cause=o}}class Ym{constructor(){this.fe=0,this.ge=Jm(),this.pe=kt.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=Ce(),t=Ce(),s=Ce();return this.ge.forEach((o,u)=>{switch(u){case 0:e=e.add(o);break;case 2:t=t.add(o);break;case 1:s=s.add(o);break;default:ve()}}),new La(this.pe,this.ye,e,t,s)}Ce(){this.we=!1,this.ge=Jm()}Fe(e,t){this.we=!0,this.ge=this.ge.insert(e,t)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,Fe(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class zw{constructor(e){this.Be=e,this.Le=new Map,this.ke=Ir(),this.qe=ou(),this.Qe=ou(),this.Ke=new Ze(Pe)}$e(e){for(const t of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.Ue(t,e.Ve):this.We(t,e.key,e.Ve);for(const t of e.removedTargetIds)this.We(t,e.key,e.Ve)}Ge(e){this.forEachTarget(e,t=>{const s=this.ze(t);switch(e.state){case 0:this.je(t)&&s.De(e.resumeToken);break;case 1:s.Oe(),s.Se||s.Ce(),s.De(e.resumeToken);break;case 2:s.Oe(),s.Se||this.removeTarget(t);break;case 3:this.je(t)&&(s.Ne(),s.De(e.resumeToken));break;case 4:this.je(t)&&(this.He(t),s.De(e.resumeToken));break;default:ve()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Le.forEach((s,o)=>{this.je(o)&&t(o)})}Je(e){const t=e.targetId,s=e.me.count,o=this.Ye(t);if(o){const u=o.target;if(Zh(u))if(s===0){const h=new de(u.path);this.We(t,h,bt.newNoDocument(h,we.min()))}else Fe(s===1);else{const h=this.Ze(t);if(h!==s){const m=this.Xe(e),g=m?this.et(m,e,h):1;if(g!==0){this.He(t);const v=g===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(t,v)}}}}}Xe(e){const t=e.me.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:s="",padding:o=0},hashCount:u=0}=t;let h,m;try{h=fi(s).toUint8Array()}catch(g){if(g instanceof sy)return ro("Decoding the base64 bloom filter in existence filter failed ("+g.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw g}try{m=new Ad(h,o,u)}catch(g){return ro(g instanceof ga?"BloomFilter error: ":"Applying bloom filter failed: ",g),null}return m.Te===0?null:m}et(e,t,s){return t.me.count===s-this.rt(e,t.targetId)?0:2}rt(e,t){const s=this.Be.getRemoteKeysForTarget(t);let o=0;return s.forEach(u=>{const h=this.Be.nt(),m=`projects/${h.projectId}/databases/${h.database}/documents/${u.path.canonicalString()}`;e.mightContain(m)||(this.We(t,u,null),o++)}),o}it(e){const t=new Map;this.Le.forEach((u,h)=>{const m=this.Ye(h);if(m){if(u.current&&Zh(m.target)){const g=new de(m.target.path);this.st(g).has(h)||this.ot(h,g)||this.We(h,g,bt.newNoDocument(g,e))}u.be&&(t.set(h,u.ve()),u.Ce())}});let s=Ce();this.Qe.forEach((u,h)=>{let m=!0;h.forEachWhile(g=>{const v=this.Ye(g);return!v||v.purpose==="TargetPurposeLimboResolution"||(m=!1,!1)}),m&&(s=s.add(u))}),this.ke.forEach((u,h)=>h.setReadTime(e));const o=new Wu(e,t,this.Ke,this.ke,s);return this.ke=Ir(),this.qe=ou(),this.Qe=ou(),this.Ke=new Ze(Pe),o}Ue(e,t){if(!this.je(e))return;const s=this.ot(e,t.key)?2:0;this.ze(e).Fe(t.key,s),this.ke=this.ke.insert(t.key,t),this.qe=this.qe.insert(t.key,this.st(t.key).add(e)),this.Qe=this.Qe.insert(t.key,this._t(t.key).add(e))}We(e,t,s){if(!this.je(e))return;const o=this.ze(e);this.ot(e,t)?o.Fe(t,1):o.Me(t),this.Qe=this.Qe.insert(t,this._t(t).delete(e)),this.Qe=this.Qe.insert(t,this._t(t).add(e)),s&&(this.ke=this.ke.insert(t,s))}removeTarget(e){this.Le.delete(e)}Ze(e){const t=this.ze(e).ve();return this.Be.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}xe(e){this.ze(e).xe()}ze(e){let t=this.Le.get(e);return t||(t=new Ym,this.Le.set(e,t)),t}_t(e){let t=this.Qe.get(e);return t||(t=new pt(Pe),this.Qe=this.Qe.insert(e,t)),t}st(e){let t=this.qe.get(e);return t||(t=new pt(Pe),this.qe=this.qe.insert(e,t)),t}je(e){const t=this.Ye(e)!==null;return t||ne("WatchChangeAggregator","Detected inactive target",e),t}Ye(e){const t=this.Le.get(e);return t&&t.Se?null:this.Be.ut(e)}He(e){this.Le.set(e,new Ym),this.Be.getRemoteKeysForTarget(e).forEach(t=>{this.We(e,t,null)})}ot(e,t){return this.Be.getRemoteKeysForTarget(e).has(t)}}function ou(){return new Ze(de.comparator)}function Jm(){return new Ze(de.comparator)}const Bw={asc:"ASCENDING",desc:"DESCENDING"},$w={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},qw={and:"AND",or:"OR"};class Hw{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function nd(i,e){return i.useProto3Json||ju(e)?e:{value:e}}function ku(i,e){return i.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Ny(i,e){return i.useProto3Json?e.toBase64():e.toUint8Array()}function Ww(i,e){return ku(i,e.toTimestamp())}function Xn(i){return Fe(!!i),we.fromTimestamp(function(t){const s=di(t);return new ft(s.seconds,s.nanos)}(i))}function Rd(i,e){return rd(i,e).canonicalString()}function rd(i,e){const t=function(o){return new Ke(["projects",o.projectId,"databases",o.database])}(i).child("documents");return e===void 0?t:t.child(e)}function xy(i){const e=Ke.fromString(i);return Fe(My(e)),e}function id(i,e){return Rd(i.databaseId,e.path)}function Fh(i,e){const t=xy(e);if(t.get(1)!==i.databaseId.projectId)throw new se(W.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+i.databaseId.projectId);if(t.get(3)!==i.databaseId.database)throw new se(W.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+i.databaseId.database);return new de(Vy(t))}function Dy(i,e){return Rd(i.databaseId,e)}function Gw(i){const e=xy(i);return e.length===4?Ke.emptyPath():Vy(e)}function sd(i){return new Ke(["projects",i.databaseId.projectId,"databases",i.databaseId.database]).canonicalString()}function Vy(i){return Fe(i.length>4&&i.get(4)==="documents"),i.popFirst(5)}function Zm(i,e,t){return{name:id(i,e),fields:t.value.mapValue.fields}}function Kw(i,e){let t;if("targetChange"in e){e.targetChange;const s=function(v){return v==="NO_CHANGE"?0:v==="ADD"?1:v==="REMOVE"?2:v==="CURRENT"?3:v==="RESET"?4:ve()}(e.targetChange.targetChangeType||"NO_CHANGE"),o=e.targetChange.targetIds||[],u=function(v,w){return v.useProto3Json?(Fe(w===void 0||typeof w=="string"),kt.fromBase64String(w||"")):(Fe(w===void 0||w instanceof Buffer||w instanceof Uint8Array),kt.fromUint8Array(w||new Uint8Array))}(i,e.targetChange.resumeToken),h=e.targetChange.cause,m=h&&function(v){const w=v.code===void 0?W.UNKNOWN:Cy(v.code);return new se(w,v.message||"")}(h);t=new Py(s,o,u,m||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const o=Fh(i,s.document.name),u=Xn(s.document.updateTime),h=s.document.createTime?Xn(s.document.createTime):we.min(),m=new gn({mapValue:{fields:s.document.fields}}),g=bt.newFoundDocument(o,u,h,m),v=s.targetIds||[],w=s.removedTargetIds||[];t=new pu(v,w,g.key,g)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const o=Fh(i,s.document),u=s.readTime?Xn(s.readTime):we.min(),h=bt.newNoDocument(o,u),m=s.removedTargetIds||[];t=new pu([],m,h.key,h)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const o=Fh(i,s.document),u=s.removedTargetIds||[];t=new pu([],u,o,null)}else{if(!("filter"in e))return ve();{e.filter;const s=e.filter;s.targetId;const{count:o=0,unchangedNames:u}=s,h=new bw(o,u),m=s.targetId;t=new ky(m,h)}}return t}function Qw(i,e){let t;if(e instanceof Oa)t={update:Zm(i,e.key,e.value)};else if(e instanceof Id)t={delete:id(i,e.key)};else if(e instanceof Ji)t={update:Zm(i,e.key,e.data),updateMask:iT(e.fieldMask)};else{if(!(e instanceof Ow))return ve();t={verify:id(i,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(s=>function(u,h){const m=h.transform;if(m instanceof Ru)return{fieldPath:h.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(m instanceof Ra)return{fieldPath:h.field.canonicalString(),appendMissingElements:{values:m.elements}};if(m instanceof Ca)return{fieldPath:h.field.canonicalString(),removeAllFromArray:{values:m.elements}};if(m instanceof Cu)return{fieldPath:h.field.canonicalString(),increment:m.Pe};throw ve()}(0,s))),e.precondition.isNone||(t.currentDocument=function(o,u){return u.updateTime!==void 0?{updateTime:Ww(o,u.updateTime)}:u.exists!==void 0?{exists:u.exists}:ve()}(i,e.precondition)),t}function Xw(i,e){return i&&i.length>0?(Fe(e!==void 0),i.map(t=>function(o,u){let h=o.updateTime?Xn(o.updateTime):Xn(u);return h.isEqual(we.min())&&(h=Xn(u)),new xw(h,o.transformResults||[])}(t,e))):[]}function Yw(i,e){return{documents:[Dy(i,e.path)]}}function Jw(i,e){const t={structuredQuery:{}},s=e.path;let o;e.collectionGroup!==null?(o=s,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(o=s.popLast(),t.structuredQuery.from=[{collectionId:s.lastSegment()}]),t.parent=Dy(i,o);const u=function(v){if(v.length!==0)return Ly(Ln.create(v,"and"))}(e.filters);u&&(t.structuredQuery.where=u);const h=function(v){if(v.length!==0)return v.map(w=>function(M){return{field:Ks(M.field),direction:tT(M.dir)}}(w))}(e.orderBy);h&&(t.structuredQuery.orderBy=h);const m=nd(i,e.limit);return m!==null&&(t.structuredQuery.limit=m),e.startAt&&(t.structuredQuery.startAt=function(v){return{before:v.inclusive,values:v.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(v){return{before:!v.inclusive,values:v.position}}(e.endAt)),{ct:t,parent:o}}function Zw(i){let e=Gw(i.parent);const t=i.structuredQuery,s=t.from?t.from.length:0;let o=null;if(s>0){Fe(s===1);const w=t.from[0];w.allDescendants?o=w.collectionId:e=e.child(w.collectionId)}let u=[];t.where&&(u=function(k){const M=Oy(k);return M instanceof Ln&&uy(M)?M.getFilters():[M]}(t.where));let h=[];t.orderBy&&(h=function(k){return k.map(M=>function(H){return new Au(Qs(H.field),function(B){switch(B){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(H.direction))}(M))}(t.orderBy));let m=null;t.limit&&(m=function(k){let M;return M=typeof k=="object"?k.value:k,ju(M)?null:M}(t.limit));let g=null;t.startAt&&(g=function(k){const M=!!k.before,z=k.values||[];return new Su(z,M)}(t.startAt));let v=null;return t.endAt&&(v=function(k){const M=!k.before,z=k.values||[];return new Su(z,M)}(t.endAt)),_w(e,o,h,u,m,"F",g,v)}function eT(i,e){const t=function(o){switch(o){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ve()}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function Oy(i){return i.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const s=Qs(t.unaryFilter.field);return at.create(s,"==",{doubleValue:NaN});case"IS_NULL":const o=Qs(t.unaryFilter.field);return at.create(o,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const u=Qs(t.unaryFilter.field);return at.create(u,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const h=Qs(t.unaryFilter.field);return at.create(h,"!=",{nullValue:"NULL_VALUE"});default:return ve()}}(i):i.fieldFilter!==void 0?function(t){return at.create(Qs(t.fieldFilter.field),function(o){switch(o){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return ve()}}(t.fieldFilter.op),t.fieldFilter.value)}(i):i.compositeFilter!==void 0?function(t){return Ln.create(t.compositeFilter.filters.map(s=>Oy(s)),function(o){switch(o){case"AND":return"and";case"OR":return"or";default:return ve()}}(t.compositeFilter.op))}(i):ve()}function tT(i){return Bw[i]}function nT(i){return $w[i]}function rT(i){return qw[i]}function Ks(i){return{fieldPath:i.canonicalString()}}function Qs(i){return Ct.fromServerFormat(i.fieldPath)}function Ly(i){return i instanceof at?function(t){if(t.op==="=="){if(jm(t.value))return{unaryFilter:{field:Ks(t.field),op:"IS_NAN"}};if(Um(t.value))return{unaryFilter:{field:Ks(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(jm(t.value))return{unaryFilter:{field:Ks(t.field),op:"IS_NOT_NAN"}};if(Um(t.value))return{unaryFilter:{field:Ks(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ks(t.field),op:nT(t.op),value:t.value}}}(i):i instanceof Ln?function(t){const s=t.getFilters().map(o=>Ly(o));return s.length===1?s[0]:{compositeFilter:{op:rT(t.op),filters:s}}}(i):ve()}function iT(i){const e=[];return i.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function My(i){return i.length>=4&&i.get(0)==="projects"&&i.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ii{constructor(e,t,s,o,u=we.min(),h=we.min(),m=kt.EMPTY_BYTE_STRING,g=null){this.target=e,this.targetId=t,this.purpose=s,this.sequenceNumber=o,this.snapshotVersion=u,this.lastLimboFreeSnapshotVersion=h,this.resumeToken=m,this.expectedCount=g}withSequenceNumber(e){return new ii(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new ii(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new ii(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new ii(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sT{constructor(e){this.ht=e}}function oT(i){const e=Zw({parent:i.parent,structuredQuery:i.structuredQuery});return i.limitType==="LAST"?td(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aT{constructor(){this.ln=new lT}addToCollectionParentIndex(e,t){return this.ln.add(t),$.resolve()}getCollectionParents(e,t){return $.resolve(this.ln.getEntries(t))}addFieldIndex(e,t){return $.resolve()}deleteFieldIndex(e,t){return $.resolve()}deleteAllFieldIndexes(e){return $.resolve()}createTargetIndexes(e,t){return $.resolve()}getDocumentsMatchingTarget(e,t){return $.resolve(null)}getIndexType(e,t){return $.resolve(0)}getFieldIndexes(e,t){return $.resolve([])}getNextCollectionGroupToUpdate(e){return $.resolve(null)}getMinOffset(e,t){return $.resolve(hi.min())}getMinOffsetFromCollectionGroup(e,t){return $.resolve(hi.min())}updateCollectionGroup(e,t,s){return $.resolve()}updateIndexEntries(e,t){return $.resolve()}}class lT{constructor(){this.index={}}add(e){const t=e.lastSegment(),s=e.popLast(),o=this.index[t]||new pt(Ke.comparator),u=!o.has(s);return this.index[t]=o.add(s),u}has(e){const t=e.lastSegment(),s=e.popLast(),o=this.index[t];return o&&o.has(s)}getEntries(e){return(this.index[e]||new pt(Ke.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eg={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class Yt{static withCacheSize(e){return new Yt(e,Yt.DEFAULT_COLLECTION_PERCENTILE,Yt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,s){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Yt.DEFAULT_COLLECTION_PERCENTILE=10,Yt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Yt.DEFAULT=new Yt(41943040,Yt.DEFAULT_COLLECTION_PERCENTILE,Yt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Yt.DISABLED=new Yt(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ao{constructor(e){this.kn=e}next(){return this.kn+=2,this.kn}static qn(){return new ao(0)}static Qn(){return new ao(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tg([i,e],[t,s]){const o=Pe(i,t);return o===0?Pe(e,s):o}class uT{constructor(e){this.Gn=e,this.buffer=new pt(tg),this.zn=0}jn(){return++this.zn}Hn(e){const t=[e,this.jn()];if(this.buffer.size<this.Gn)this.buffer=this.buffer.add(t);else{const s=this.buffer.last();tg(t,s)<0&&(this.buffer=this.buffer.delete(s).add(t))}}get maxValue(){return this.buffer.last()[0]}}class cT{constructor(e,t,s){this.garbageCollector=e,this.asyncQueue=t,this.localStore=s,this.Jn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Yn(6e4)}stop(){this.Jn&&(this.Jn.cancel(),this.Jn=null)}get started(){return this.Jn!==null}Yn(e){ne("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.Jn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Jn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){mo(t)?ne("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",t):await po(t)}await this.Yn(3e5)})}}class hT{constructor(e,t){this.Zn=e,this.params=t}calculateTargetCount(e,t){return this.Zn.Xn(e).next(s=>Math.floor(t/100*s))}nthSequenceNumber(e,t){if(t===0)return $.resolve(Uu.oe);const s=new uT(t);return this.Zn.forEachTarget(e,o=>s.Hn(o.sequenceNumber)).next(()=>this.Zn.er(e,o=>s.Hn(o))).next(()=>s.maxValue)}removeTargets(e,t,s){return this.Zn.removeTargets(e,t,s)}removeOrphanedDocuments(e,t){return this.Zn.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(ne("LruGarbageCollector","Garbage collection skipped; disabled"),$.resolve(eg)):this.getCacheSize(e).next(s=>s<this.params.cacheSizeCollectionThreshold?(ne("LruGarbageCollector",`Garbage collection skipped; Cache size ${s} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),eg):this.tr(e,t))}getCacheSize(e){return this.Zn.getCacheSize(e)}tr(e,t){let s,o,u,h,m,g,v;const w=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(k=>(k>this.params.maximumSequenceNumbersToCollect?(ne("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${k}`),o=this.params.maximumSequenceNumbersToCollect):o=k,h=Date.now(),this.nthSequenceNumber(e,o))).next(k=>(s=k,m=Date.now(),this.removeTargets(e,s,t))).next(k=>(u=k,g=Date.now(),this.removeOrphanedDocuments(e,s))).next(k=>(v=Date.now(),Ws()<=Re.DEBUG&&ne("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${h-w}ms
	Determined least recently used ${o} in `+(m-h)+`ms
	Removed ${u} targets in `+(g-m)+`ms
	Removed ${k} documents in `+(v-g)+`ms
Total Duration: ${v-w}ms`),$.resolve({didRun:!0,sequenceNumbersCollected:o,targetsRemoved:u,documentsRemoved:k})))}}function dT(i,e){return new hT(i,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fT{constructor(){this.changes=new Yi(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,bt.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const s=this.changes.get(t);return s!==void 0?$.resolve(s):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pT{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mT{constructor(e,t,s,o){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=s,this.indexManager=o}getDocument(e,t){let s=null;return this.documentOverlayCache.getOverlay(e,t).next(o=>(s=o,this.remoteDocumentCache.getEntry(e,t))).next(o=>(s!==null&&Ea(s.mutation,o,On.empty(),ft.now()),o))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(s=>this.getLocalViewOfDocuments(e,s,Ce()).next(()=>s))}getLocalViewOfDocuments(e,t,s=Ce()){const o=Hi();return this.populateOverlays(e,o,t).next(()=>this.computeViews(e,t,o,s).next(u=>{let h=ma();return u.forEach((m,g)=>{h=h.insert(m,g.overlayedDocument)}),h}))}getOverlayedDocuments(e,t){const s=Hi();return this.populateOverlays(e,s,t).next(()=>this.computeViews(e,t,s,Ce()))}populateOverlays(e,t,s){const o=[];return s.forEach(u=>{t.has(u)||o.push(u)}),this.documentOverlayCache.getOverlays(e,o).next(u=>{u.forEach((h,m)=>{t.set(h,m)})})}computeViews(e,t,s,o){let u=Ir();const h=va(),m=function(){return va()}();return t.forEach((g,v)=>{const w=s.get(v.key);o.has(v.key)&&(w===void 0||w.mutation instanceof Ji)?u=u.insert(v.key,v):w!==void 0?(h.set(v.key,w.mutation.getFieldMask()),Ea(w.mutation,v,w.mutation.getFieldMask(),ft.now())):h.set(v.key,On.empty())}),this.recalculateAndSaveOverlays(e,u).next(g=>(g.forEach((v,w)=>h.set(v,w)),t.forEach((v,w)=>{var k;return m.set(v,new pT(w,(k=h.get(v))!==null&&k!==void 0?k:null))}),m))}recalculateAndSaveOverlays(e,t){const s=va();let o=new Ze((h,m)=>h-m),u=Ce();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(h=>{for(const m of h)m.keys().forEach(g=>{const v=t.get(g);if(v===null)return;let w=s.get(g)||On.empty();w=m.applyToLocalView(v,w),s.set(g,w);const k=(o.get(m.batchId)||Ce()).add(g);o=o.insert(m.batchId,k)})}).next(()=>{const h=[],m=o.getReverseIterator();for(;m.hasNext();){const g=m.getNext(),v=g.key,w=g.value,k=vy();w.forEach(M=>{if(!u.has(M)){const z=Ay(t.get(M),s.get(M));z!==null&&k.set(M,z),u=u.add(M)}}),h.push(this.documentOverlayCache.saveOverlays(e,v,k))}return $.waitFor(h)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,t,s,o){return function(h){return de.isDocumentKey(h.path)&&h.collectionGroup===null&&h.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):py(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,s,o):this.getDocumentsMatchingCollectionQuery(e,t,s,o)}getNextDocuments(e,t,s,o){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,s,o).next(u=>{const h=o-u.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,s.largestBatchId,o-u.size):$.resolve(Hi());let m=-1,g=u;return h.next(v=>$.forEach(v,(w,k)=>(m<k.largestBatchId&&(m=k.largestBatchId),u.get(w)?$.resolve():this.remoteDocumentCache.getEntry(e,w).next(M=>{g=g.insert(w,M)}))).next(()=>this.populateOverlays(e,v,u)).next(()=>this.computeViews(e,g,v,Ce())).next(w=>({batchId:m,changes:_y(w)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new de(t)).next(s=>{let o=ma();return s.isFoundDocument()&&(o=o.insert(s.key,s)),o})}getDocumentsMatchingCollectionGroupQuery(e,t,s,o){const u=t.collectionGroup;let h=ma();return this.indexManager.getCollectionParents(e,u).next(m=>$.forEach(m,g=>{const v=function(k,M){return new Va(M,null,k.explicitOrderBy.slice(),k.filters.slice(),k.limit,k.limitType,k.startAt,k.endAt)}(t,g.child(u));return this.getDocumentsMatchingCollectionQuery(e,v,s,o).next(w=>{w.forEach((k,M)=>{h=h.insert(k,M)})})}).next(()=>h))}getDocumentsMatchingCollectionQuery(e,t,s,o){let u;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,s.largestBatchId).next(h=>(u=h,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,s,u,o))).next(h=>{u.forEach((g,v)=>{const w=v.getKey();h.get(w)===null&&(h=h.insert(w,bt.newInvalidDocument(w)))});let m=ma();return h.forEach((g,v)=>{const w=u.get(g);w!==void 0&&Ea(w.mutation,v,On.empty(),ft.now()),$u(t,v)&&(m=m.insert(g,v))}),m})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gT{constructor(e){this.serializer=e,this.Tr=new Map,this.Ir=new Map}getBundleMetadata(e,t){return $.resolve(this.Tr.get(t))}saveBundleMetadata(e,t){return this.Tr.set(t.id,function(o){return{id:o.id,version:o.version,createTime:Xn(o.createTime)}}(t)),$.resolve()}getNamedQuery(e,t){return $.resolve(this.Ir.get(t))}saveNamedQuery(e,t){return this.Ir.set(t.name,function(o){return{name:o.name,query:oT(o.bundledQuery),readTime:Xn(o.readTime)}}(t)),$.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yT{constructor(){this.overlays=new Ze(de.comparator),this.dr=new Map}getOverlay(e,t){return $.resolve(this.overlays.get(t))}getOverlays(e,t){const s=Hi();return $.forEach(t,o=>this.getOverlay(e,o).next(u=>{u!==null&&s.set(o,u)})).next(()=>s)}saveOverlays(e,t,s){return s.forEach((o,u)=>{this.Tt(e,t,u)}),$.resolve()}removeOverlaysForBatchId(e,t,s){const o=this.dr.get(s);return o!==void 0&&(o.forEach(u=>this.overlays=this.overlays.remove(u)),this.dr.delete(s)),$.resolve()}getOverlaysForCollection(e,t,s){const o=Hi(),u=t.length+1,h=new de(t.child("")),m=this.overlays.getIteratorFrom(h);for(;m.hasNext();){const g=m.getNext().value,v=g.getKey();if(!t.isPrefixOf(v.path))break;v.path.length===u&&g.largestBatchId>s&&o.set(g.getKey(),g)}return $.resolve(o)}getOverlaysForCollectionGroup(e,t,s,o){let u=new Ze((v,w)=>v-w);const h=this.overlays.getIterator();for(;h.hasNext();){const v=h.getNext().value;if(v.getKey().getCollectionGroup()===t&&v.largestBatchId>s){let w=u.get(v.largestBatchId);w===null&&(w=Hi(),u=u.insert(v.largestBatchId,w)),w.set(v.getKey(),v)}}const m=Hi(),g=u.getIterator();for(;g.hasNext()&&(g.getNext().value.forEach((v,w)=>m.set(v,w)),!(m.size()>=o)););return $.resolve(m)}Tt(e,t,s){const o=this.overlays.get(s.key);if(o!==null){const h=this.dr.get(o.largestBatchId).delete(s.key);this.dr.set(o.largestBatchId,h)}this.overlays=this.overlays.insert(s.key,new Mw(t,s));let u=this.dr.get(t);u===void 0&&(u=Ce(),this.dr.set(t,u)),this.dr.set(t,u.add(s.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _T{constructor(){this.sessionToken=kt.EMPTY_BYTE_STRING}getSessionToken(e){return $.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,$.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cd{constructor(){this.Er=new pt(Et.Ar),this.Rr=new pt(Et.Vr)}isEmpty(){return this.Er.isEmpty()}addReference(e,t){const s=new Et(e,t);this.Er=this.Er.add(s),this.Rr=this.Rr.add(s)}mr(e,t){e.forEach(s=>this.addReference(s,t))}removeReference(e,t){this.gr(new Et(e,t))}pr(e,t){e.forEach(s=>this.removeReference(s,t))}yr(e){const t=new de(new Ke([])),s=new Et(t,e),o=new Et(t,e+1),u=[];return this.Rr.forEachInRange([s,o],h=>{this.gr(h),u.push(h.key)}),u}wr(){this.Er.forEach(e=>this.gr(e))}gr(e){this.Er=this.Er.delete(e),this.Rr=this.Rr.delete(e)}Sr(e){const t=new de(new Ke([])),s=new Et(t,e),o=new Et(t,e+1);let u=Ce();return this.Rr.forEachInRange([s,o],h=>{u=u.add(h.key)}),u}containsKey(e){const t=new Et(e,0),s=this.Er.firstAfterOrEqual(t);return s!==null&&e.isEqual(s.key)}}class Et{constructor(e,t){this.key=e,this.br=t}static Ar(e,t){return de.comparator(e.key,t.key)||Pe(e.br,t.br)}static Vr(e,t){return Pe(e.br,t.br)||de.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vT{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Dr=1,this.vr=new pt(Et.Ar)}checkEmpty(e){return $.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,s,o){const u=this.Dr;this.Dr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const h=new Lw(u,t,s,o);this.mutationQueue.push(h);for(const m of o)this.vr=this.vr.add(new Et(m.key,u)),this.indexManager.addToCollectionParentIndex(e,m.key.path.popLast());return $.resolve(h)}lookupMutationBatch(e,t){return $.resolve(this.Cr(t))}getNextMutationBatchAfterBatchId(e,t){const s=t+1,o=this.Fr(s),u=o<0?0:o;return $.resolve(this.mutationQueue.length>u?this.mutationQueue[u]:null)}getHighestUnacknowledgedBatchId(){return $.resolve(this.mutationQueue.length===0?-1:this.Dr-1)}getAllMutationBatches(e){return $.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const s=new Et(t,0),o=new Et(t,Number.POSITIVE_INFINITY),u=[];return this.vr.forEachInRange([s,o],h=>{const m=this.Cr(h.br);u.push(m)}),$.resolve(u)}getAllMutationBatchesAffectingDocumentKeys(e,t){let s=new pt(Pe);return t.forEach(o=>{const u=new Et(o,0),h=new Et(o,Number.POSITIVE_INFINITY);this.vr.forEachInRange([u,h],m=>{s=s.add(m.br)})}),$.resolve(this.Mr(s))}getAllMutationBatchesAffectingQuery(e,t){const s=t.path,o=s.length+1;let u=s;de.isDocumentKey(u)||(u=u.child(""));const h=new Et(new de(u),0);let m=new pt(Pe);return this.vr.forEachWhile(g=>{const v=g.key.path;return!!s.isPrefixOf(v)&&(v.length===o&&(m=m.add(g.br)),!0)},h),$.resolve(this.Mr(m))}Mr(e){const t=[];return e.forEach(s=>{const o=this.Cr(s);o!==null&&t.push(o)}),t}removeMutationBatch(e,t){Fe(this.Or(t.batchId,"removed")===0),this.mutationQueue.shift();let s=this.vr;return $.forEach(t.mutations,o=>{const u=new Et(o.key,t.batchId);return s=s.delete(u),this.referenceDelegate.markPotentiallyOrphaned(e,o.key)}).next(()=>{this.vr=s})}Bn(e){}containsKey(e,t){const s=new Et(t,0),o=this.vr.firstAfterOrEqual(s);return $.resolve(t.isEqual(o&&o.key))}performConsistencyCheck(e){return this.mutationQueue.length,$.resolve()}Or(e,t){return this.Fr(e)}Fr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Cr(e){const t=this.Fr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ET{constructor(e){this.Nr=e,this.docs=function(){return new Ze(de.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const s=t.key,o=this.docs.get(s),u=o?o.size:0,h=this.Nr(t);return this.docs=this.docs.insert(s,{document:t.mutableCopy(),size:h}),this.size+=h-u,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const s=this.docs.get(t);return $.resolve(s?s.document.mutableCopy():bt.newInvalidDocument(t))}getEntries(e,t){let s=Ir();return t.forEach(o=>{const u=this.docs.get(o);s=s.insert(o,u?u.document.mutableCopy():bt.newInvalidDocument(o))}),$.resolve(s)}getDocumentsMatchingQuery(e,t,s,o){let u=Ir();const h=t.path,m=new de(h.child("__id-9223372036854775808__")),g=this.docs.getIteratorFrom(m);for(;g.hasNext();){const{key:v,value:{document:w}}=g.getNext();if(!h.isPrefixOf(v.path))break;v.path.length>h.length+1||YE(XE(w),s)<=0||(o.has(w.key)||$u(t,w))&&(u=u.insert(w.key,w.mutableCopy()))}return $.resolve(u)}getAllFromCollectionGroup(e,t,s,o){ve()}Br(e,t){return $.forEach(this.docs,s=>t(s))}newChangeBuffer(e){return new wT(this)}getSize(e){return $.resolve(this.size)}}class wT extends fT{constructor(e){super(),this.hr=e}applyChanges(e){const t=[];return this.changes.forEach((s,o)=>{o.isValidDocument()?t.push(this.hr.addEntry(e,o)):this.hr.removeEntry(s)}),$.waitFor(t)}getFromCache(e,t){return this.hr.getEntry(e,t)}getAllFromCache(e,t){return this.hr.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TT{constructor(e){this.persistence=e,this.Lr=new Yi(t=>Ed(t),wd),this.lastRemoteSnapshotVersion=we.min(),this.highestTargetId=0,this.kr=0,this.qr=new Cd,this.targetCount=0,this.Qr=ao.qn()}forEachTarget(e,t){return this.Lr.forEach((s,o)=>t(o)),$.resolve()}getLastRemoteSnapshotVersion(e){return $.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return $.resolve(this.kr)}allocateTargetId(e){return this.highestTargetId=this.Qr.next(),$.resolve(this.highestTargetId)}setTargetsMetadata(e,t,s){return s&&(this.lastRemoteSnapshotVersion=s),t>this.kr&&(this.kr=t),$.resolve()}Un(e){this.Lr.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.Qr=new ao(t),this.highestTargetId=t),e.sequenceNumber>this.kr&&(this.kr=e.sequenceNumber)}addTargetData(e,t){return this.Un(t),this.targetCount+=1,$.resolve()}updateTargetData(e,t){return this.Un(t),$.resolve()}removeTargetData(e,t){return this.Lr.delete(t.target),this.qr.yr(t.targetId),this.targetCount-=1,$.resolve()}removeTargets(e,t,s){let o=0;const u=[];return this.Lr.forEach((h,m)=>{m.sequenceNumber<=t&&s.get(m.targetId)===null&&(this.Lr.delete(h),u.push(this.removeMatchingKeysForTargetId(e,m.targetId)),o++)}),$.waitFor(u).next(()=>o)}getTargetCount(e){return $.resolve(this.targetCount)}getTargetData(e,t){const s=this.Lr.get(t)||null;return $.resolve(s)}addMatchingKeys(e,t,s){return this.qr.mr(t,s),$.resolve()}removeMatchingKeys(e,t,s){this.qr.pr(t,s);const o=this.persistence.referenceDelegate,u=[];return o&&t.forEach(h=>{u.push(o.markPotentiallyOrphaned(e,h))}),$.waitFor(u)}removeMatchingKeysForTargetId(e,t){return this.qr.yr(t),$.resolve()}getMatchingKeysForTargetId(e,t){const s=this.qr.Sr(t);return $.resolve(s)}containsKey(e,t){return $.resolve(this.qr.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class by{constructor(e,t){this.Kr={},this.overlays={},this.$r=new Uu(0),this.Ur=!1,this.Ur=!0,this.Wr=new _T,this.referenceDelegate=e(this),this.Gr=new TT(this),this.indexManager=new aT,this.remoteDocumentCache=function(o){return new ET(o)}(s=>this.referenceDelegate.zr(s)),this.serializer=new sT(t),this.jr=new gT(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Ur=!1,Promise.resolve()}get started(){return this.Ur}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new yT,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let s=this.Kr[e.toKey()];return s||(s=new vT(t,this.referenceDelegate),this.Kr[e.toKey()]=s),s}getGlobalsCache(){return this.Wr}getTargetCache(){return this.Gr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.jr}runTransaction(e,t,s){ne("MemoryPersistence","Starting transaction:",e);const o=new IT(this.$r.next());return this.referenceDelegate.Hr(),s(o).next(u=>this.referenceDelegate.Jr(o).next(()=>u)).toPromise().then(u=>(o.raiseOnCommittedEvent(),u))}Yr(e,t){return $.or(Object.values(this.Kr).map(s=>()=>s.containsKey(e,t)))}}class IT extends ZE{constructor(e){super(),this.currentSequenceNumber=e}}class kd{constructor(e){this.persistence=e,this.Zr=new Cd,this.Xr=null}static ei(e){return new kd(e)}get ti(){if(this.Xr)return this.Xr;throw ve()}addReference(e,t,s){return this.Zr.addReference(s,t),this.ti.delete(s.toString()),$.resolve()}removeReference(e,t,s){return this.Zr.removeReference(s,t),this.ti.add(s.toString()),$.resolve()}markPotentiallyOrphaned(e,t){return this.ti.add(t.toString()),$.resolve()}removeTarget(e,t){this.Zr.yr(t.targetId).forEach(o=>this.ti.add(o.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,t.targetId).next(o=>{o.forEach(u=>this.ti.add(u.toString()))}).next(()=>s.removeTargetData(e,t))}Hr(){this.Xr=new Set}Jr(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return $.forEach(this.ti,s=>{const o=de.fromPath(s);return this.ni(e,o).next(u=>{u||t.removeEntry(o,we.min())})}).next(()=>(this.Xr=null,t.apply(e)))}updateLimboDocument(e,t){return this.ni(e,t).next(s=>{s?this.ti.delete(t.toString()):this.ti.add(t.toString())})}zr(e){return 0}ni(e,t){return $.or([()=>$.resolve(this.Zr.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Yr(e,t)])}}class Pu{constructor(e,t){this.persistence=e,this.ri=new Yi(s=>nw(s.path),(s,o)=>s.isEqual(o)),this.garbageCollector=dT(this,t)}static ei(e,t){return new Pu(e,t)}Hr(){}Jr(e){return $.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}Xn(e){const t=this.nr(e);return this.persistence.getTargetCache().getTargetCount(e).next(s=>t.next(o=>s+o))}nr(e){let t=0;return this.er(e,s=>{t++}).next(()=>t)}er(e,t){return $.forEach(this.ri,(s,o)=>this.ir(e,s,o).next(u=>u?$.resolve():t(o)))}removeTargets(e,t,s){return this.persistence.getTargetCache().removeTargets(e,t,s)}removeOrphanedDocuments(e,t){let s=0;const o=this.persistence.getRemoteDocumentCache(),u=o.newChangeBuffer();return o.Br(e,h=>this.ir(e,h,t).next(m=>{m||(s++,u.removeEntry(h,we.min()))})).next(()=>u.apply(e)).next(()=>s)}markPotentiallyOrphaned(e,t){return this.ri.set(t,e.currentSequenceNumber),$.resolve()}removeTarget(e,t){const s=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,s)}addReference(e,t,s){return this.ri.set(s,e.currentSequenceNumber),$.resolve()}removeReference(e,t,s){return this.ri.set(s,e.currentSequenceNumber),$.resolve()}updateLimboDocument(e,t){return this.ri.set(t,e.currentSequenceNumber),$.resolve()}zr(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=hu(e.data.value)),t}ir(e,t,s){return $.or([()=>this.persistence.Yr(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const o=this.ri.get(t);return $.resolve(o!==void 0&&o>s)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pd{constructor(e,t,s,o){this.targetId=e,this.fromCache=t,this.Wi=s,this.Gi=o}static zi(e,t){let s=Ce(),o=Ce();for(const u of t.docChanges)switch(u.type){case 0:s=s.add(u.doc.key);break;case 1:o=o.add(u.doc.key)}return new Pd(e,t.fromCache,s,o)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ST{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AT{constructor(){this.ji=!1,this.Hi=!1,this.Ji=100,this.Yi=function(){return I0()?8:ew(Ft())>0?6:4}()}initialize(e,t){this.Zi=e,this.indexManager=t,this.ji=!0}getDocumentsMatchingQuery(e,t,s,o){const u={result:null};return this.Xi(e,t).next(h=>{u.result=h}).next(()=>{if(!u.result)return this.es(e,t,o,s).next(h=>{u.result=h})}).next(()=>{if(u.result)return;const h=new ST;return this.ts(e,t,h).next(m=>{if(u.result=m,this.Hi)return this.ns(e,t,h,m.size)})}).next(()=>u.result)}ns(e,t,s,o){return s.documentReadCount<this.Ji?(Ws()<=Re.DEBUG&&ne("QueryEngine","SDK will not create cache indexes for query:",Gs(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Ji,"documents"),$.resolve()):(Ws()<=Re.DEBUG&&ne("QueryEngine","Query:",Gs(t),"scans",s.documentReadCount,"local documents and returns",o,"documents as results."),s.documentReadCount>this.Yi*o?(Ws()<=Re.DEBUG&&ne("QueryEngine","The SDK decides to create cache indexes for query:",Gs(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Kn(t))):$.resolve())}Xi(e,t){if(qm(t))return $.resolve(null);let s=Kn(t);return this.indexManager.getIndexType(e,s).next(o=>o===0?null:(t.limit!==null&&o===1&&(t=td(t,null,"F"),s=Kn(t)),this.indexManager.getDocumentsMatchingTarget(e,s).next(u=>{const h=Ce(...u);return this.Zi.getDocuments(e,h).next(m=>this.indexManager.getMinOffset(e,s).next(g=>{const v=this.rs(t,m);return this.ss(t,v,h,g.readTime)?this.Xi(e,td(t,null,"F")):this.os(e,v,t,g)}))})))}es(e,t,s,o){return qm(t)||o.isEqual(we.min())?$.resolve(null):this.Zi.getDocuments(e,s).next(u=>{const h=this.rs(t,u);return this.ss(t,h,s,o)?$.resolve(null):(Ws()<=Re.DEBUG&&ne("QueryEngine","Re-using previous result from %s to execute query: %s",o.toString(),Gs(t)),this.os(e,h,t,QE(o,-1)).next(m=>m))})}rs(e,t){let s=new pt(gy(e));return t.forEach((o,u)=>{$u(e,u)&&(s=s.add(u))}),s}ss(e,t,s,o){if(e.limit===null)return!1;if(s.size!==t.size)return!0;const u=e.limitType==="F"?t.last():t.first();return!!u&&(u.hasPendingWrites||u.version.compareTo(o)>0)}ts(e,t,s){return Ws()<=Re.DEBUG&&ne("QueryEngine","Using full collection scan to execute query:",Gs(t)),this.Zi.getDocumentsMatchingQuery(e,t,hi.min(),s)}os(e,t,s,o){return this.Zi.getDocumentsMatchingQuery(e,s,o).next(u=>(t.forEach(h=>{u=u.insert(h.key,h)}),u))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RT{constructor(e,t,s,o){this.persistence=e,this._s=t,this.serializer=o,this.us=new Ze(Pe),this.cs=new Yi(u=>Ed(u),wd),this.ls=new Map,this.hs=e.getRemoteDocumentCache(),this.Gr=e.getTargetCache(),this.jr=e.getBundleCache(),this.Ps(s)}Ps(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new mT(this.hs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.hs.setIndexManager(this.indexManager),this._s.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.us))}}function CT(i,e,t,s){return new RT(i,e,t,s)}async function Fy(i,e){const t=Te(i);return await t.persistence.runTransaction("Handle user change","readonly",s=>{let o;return t.mutationQueue.getAllMutationBatches(s).next(u=>(o=u,t.Ps(e),t.mutationQueue.getAllMutationBatches(s))).next(u=>{const h=[],m=[];let g=Ce();for(const v of o){h.push(v.batchId);for(const w of v.mutations)g=g.add(w.key)}for(const v of u){m.push(v.batchId);for(const w of v.mutations)g=g.add(w.key)}return t.localDocuments.getDocuments(s,g).next(v=>({Ts:v,removedBatchIds:h,addedBatchIds:m}))})})}function kT(i,e){const t=Te(i);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const o=e.batch.keys(),u=t.hs.newChangeBuffer({trackRemovals:!0});return function(m,g,v,w){const k=v.batch,M=k.keys();let z=$.resolve();return M.forEach(H=>{z=z.next(()=>w.getEntry(g,H)).next(G=>{const B=v.docVersions.get(H);Fe(B!==null),G.version.compareTo(B)<0&&(k.applyToRemoteDocument(G,v),G.isValidDocument()&&(G.setReadTime(v.commitVersion),w.addEntry(G)))})}),z.next(()=>m.mutationQueue.removeMutationBatch(g,k))}(t,s,e,u).next(()=>u.apply(s)).next(()=>t.mutationQueue.performConsistencyCheck(s)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(s,o,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(m){let g=Ce();for(let v=0;v<m.mutationResults.length;++v)m.mutationResults[v].transformResults.length>0&&(g=g.add(m.batch.mutations[v].key));return g}(e))).next(()=>t.localDocuments.getDocuments(s,o))})}function Uy(i){const e=Te(i);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Gr.getLastRemoteSnapshotVersion(t))}function PT(i,e){const t=Te(i),s=e.snapshotVersion;let o=t.us;return t.persistence.runTransaction("Apply remote event","readwrite-primary",u=>{const h=t.hs.newChangeBuffer({trackRemovals:!0});o=t.us;const m=[];e.targetChanges.forEach((w,k)=>{const M=o.get(k);if(!M)return;m.push(t.Gr.removeMatchingKeys(u,w.removedDocuments,k).next(()=>t.Gr.addMatchingKeys(u,w.addedDocuments,k)));let z=M.withSequenceNumber(u.currentSequenceNumber);e.targetMismatches.get(k)!==null?z=z.withResumeToken(kt.EMPTY_BYTE_STRING,we.min()).withLastLimboFreeSnapshotVersion(we.min()):w.resumeToken.approximateByteSize()>0&&(z=z.withResumeToken(w.resumeToken,s)),o=o.insert(k,z),function(G,B,ue){return G.resumeToken.approximateByteSize()===0||B.snapshotVersion.toMicroseconds()-G.snapshotVersion.toMicroseconds()>=3e8?!0:ue.addedDocuments.size+ue.modifiedDocuments.size+ue.removedDocuments.size>0}(M,z,w)&&m.push(t.Gr.updateTargetData(u,z))});let g=Ir(),v=Ce();if(e.documentUpdates.forEach(w=>{e.resolvedLimboDocuments.has(w)&&m.push(t.persistence.referenceDelegate.updateLimboDocument(u,w))}),m.push(NT(u,h,e.documentUpdates).next(w=>{g=w.Is,v=w.ds})),!s.isEqual(we.min())){const w=t.Gr.getLastRemoteSnapshotVersion(u).next(k=>t.Gr.setTargetsMetadata(u,u.currentSequenceNumber,s));m.push(w)}return $.waitFor(m).next(()=>h.apply(u)).next(()=>t.localDocuments.getLocalViewOfDocuments(u,g,v)).next(()=>g)}).then(u=>(t.us=o,u))}function NT(i,e,t){let s=Ce(),o=Ce();return t.forEach(u=>s=s.add(u)),e.getEntries(i,s).next(u=>{let h=Ir();return t.forEach((m,g)=>{const v=u.get(m);g.isFoundDocument()!==v.isFoundDocument()&&(o=o.add(m)),g.isNoDocument()&&g.version.isEqual(we.min())?(e.removeEntry(m,g.readTime),h=h.insert(m,g)):!v.isValidDocument()||g.version.compareTo(v.version)>0||g.version.compareTo(v.version)===0&&v.hasPendingWrites?(e.addEntry(g),h=h.insert(m,g)):ne("LocalStore","Ignoring outdated watch update for ",m,". Current version:",v.version," Watch version:",g.version)}),{Is:h,ds:o}})}function xT(i,e){const t=Te(i);return t.persistence.runTransaction("Get next mutation batch","readonly",s=>(e===void 0&&(e=-1),t.mutationQueue.getNextMutationBatchAfterBatchId(s,e)))}function DT(i,e){const t=Te(i);return t.persistence.runTransaction("Allocate target","readwrite",s=>{let o;return t.Gr.getTargetData(s,e).next(u=>u?(o=u,$.resolve(o)):t.Gr.allocateTargetId(s).next(h=>(o=new ii(e,h,"TargetPurposeListen",s.currentSequenceNumber),t.Gr.addTargetData(s,o).next(()=>o))))}).then(s=>{const o=t.us.get(s.targetId);return(o===null||s.snapshotVersion.compareTo(o.snapshotVersion)>0)&&(t.us=t.us.insert(s.targetId,s),t.cs.set(e,s.targetId)),s})}async function od(i,e,t){const s=Te(i),o=s.us.get(e),u=t?"readwrite":"readwrite-primary";try{t||await s.persistence.runTransaction("Release target",u,h=>s.persistence.referenceDelegate.removeTarget(h,o))}catch(h){if(!mo(h))throw h;ne("LocalStore",`Failed to update sequence numbers for target ${e}: ${h}`)}s.us=s.us.remove(e),s.cs.delete(o.target)}function ng(i,e,t){const s=Te(i);let o=we.min(),u=Ce();return s.persistence.runTransaction("Execute query","readwrite",h=>function(g,v,w){const k=Te(g),M=k.cs.get(w);return M!==void 0?$.resolve(k.us.get(M)):k.Gr.getTargetData(v,w)}(s,h,Kn(e)).next(m=>{if(m)return o=m.lastLimboFreeSnapshotVersion,s.Gr.getMatchingKeysForTargetId(h,m.targetId).next(g=>{u=g})}).next(()=>s._s.getDocumentsMatchingQuery(h,e,t?o:we.min(),t?u:Ce())).next(m=>(VT(s,Ew(e),m),{documents:m,Es:u})))}function VT(i,e,t){let s=i.ls.get(e)||we.min();t.forEach((o,u)=>{u.readTime.compareTo(s)>0&&(s=u.readTime)}),i.ls.set(e,s)}class rg{constructor(){this.activeTargetIds=Rw()}ps(e){this.activeTargetIds=this.activeTargetIds.add(e)}ys(e){this.activeTargetIds=this.activeTargetIds.delete(e)}gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class OT{constructor(){this._o=new rg,this.ao={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,s){}addLocalQueryTarget(e,t=!0){return t&&this._o.ps(e),this.ao[e]||"not-current"}updateQueryState(e,t,s){this.ao[e]=t}removeLocalQueryTarget(e){this._o.ys(e)}isLocalQueryTarget(e){return this._o.activeTargetIds.has(e)}clearQueryState(e){delete this.ao[e]}getAllActiveQueryTargets(){return this._o.activeTargetIds}isActiveQueryTarget(e){return this._o.activeTargetIds.has(e)}start(){return this._o=new rg,Promise.resolve()}handleUserChange(e,t,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LT{uo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ig{constructor(){this.co=()=>this.lo(),this.ho=()=>this.Po(),this.To=[],this.Io()}uo(e){this.To.push(e)}shutdown(){window.removeEventListener("online",this.co),window.removeEventListener("offline",this.ho)}Io(){window.addEventListener("online",this.co),window.addEventListener("offline",this.ho)}lo(){ne("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.To)e(0)}Po(){ne("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.To)e(1)}static p(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let au=null;function Uh(){return au===null?au=function(){return 268435456+Math.round(2147483648*Math.random())}():au++,"0x"+au.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MT={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bT{constructor(e){this.Eo=e.Eo,this.Ao=e.Ao}Ro(e){this.Vo=e}mo(e){this.fo=e}po(e){this.yo=e}onMessage(e){this.wo=e}close(){this.Ao()}send(e){this.Eo(e)}So(){this.Vo()}bo(){this.fo()}Do(e){this.yo(e)}vo(e){this.wo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lt="WebChannelConnection";class FT extends class{get Co(){return!1}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const s=t.ssl?"https":"http",o=encodeURIComponent(this.databaseId.projectId),u=encodeURIComponent(this.databaseId.database);this.Fo=s+"://"+t.host,this.Mo=`projects/${o}/databases/${u}`,this.xo=this.databaseId.database==="(default)"?`project_id=${o}`:`project_id=${o}&database_id=${u}`}Oo(t,s,o,u,h){const m=Uh(),g=this.No(t,s.toUriEncodedString());ne("RestConnection",`Sending RPC '${t}' ${m}:`,g,o);const v={"google-cloud-resource-prefix":this.Mo,"x-goog-request-params":this.xo};return this.Bo(v,u,h),this.Lo(t,g,v,o).then(w=>(ne("RestConnection",`Received RPC '${t}' ${m}: `,w),w),w=>{throw ro("RestConnection",`RPC '${t}' ${m} failed with error: `,w,"url: ",g,"request:",o),w})}ko(t,s,o,u,h,m){return this.Oo(t,s,o,u,h)}Bo(t,s,o){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+fo}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),s&&s.headers.forEach((u,h)=>t[h]=u),o&&o.headers.forEach((u,h)=>t[h]=u)}No(t,s){const o=MT[t];return`${this.Fo}/v1/${s}:${o}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Lo(e,t,s,o){const u=Uh();return new Promise((h,m)=>{const g=new Yg;g.setWithCredentials(!0),g.listenOnce(Jg.COMPLETE,()=>{try{switch(g.getLastErrorCode()){case cu.NO_ERROR:const w=g.getResponseJson();ne(Lt,`XHR for RPC '${e}' ${u} received:`,JSON.stringify(w)),h(w);break;case cu.TIMEOUT:ne(Lt,`RPC '${e}' ${u} timed out`),m(new se(W.DEADLINE_EXCEEDED,"Request time out"));break;case cu.HTTP_ERROR:const k=g.getStatus();if(ne(Lt,`RPC '${e}' ${u} failed with status:`,k,"response text:",g.getResponseText()),k>0){let M=g.getResponseJson();Array.isArray(M)&&(M=M[0]);const z=M==null?void 0:M.error;if(z&&z.status&&z.message){const H=function(B){const ue=B.toLowerCase().replace(/_/g,"-");return Object.values(W).indexOf(ue)>=0?ue:W.UNKNOWN}(z.status);m(new se(H,z.message))}else m(new se(W.UNKNOWN,"Server responded with status "+g.getStatus()))}else m(new se(W.UNAVAILABLE,"Connection failed."));break;default:ve()}}finally{ne(Lt,`RPC '${e}' ${u} completed.`)}});const v=JSON.stringify(o);ne(Lt,`RPC '${e}' ${u} sending request:`,o),g.send(t,"POST",v,s,15)})}qo(e,t,s){const o=Uh(),u=[this.Fo,"/","google.firestore.v1.Firestore","/",e,"/channel"],h=ty(),m=ey(),g={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},v=this.longPollingOptions.timeoutSeconds;v!==void 0&&(g.longPollingTimeout=Math.round(1e3*v)),this.useFetchStreams&&(g.useFetchStreams=!0),this.Bo(g.initMessageHeaders,t,s),g.encodeInitMessageHeaders=!0;const w=u.join("");ne(Lt,`Creating RPC '${e}' stream ${o}: ${w}`,g);const k=h.createWebChannel(w,g);let M=!1,z=!1;const H=new bT({Eo:B=>{z?ne(Lt,`Not sending because RPC '${e}' stream ${o} is closed:`,B):(M||(ne(Lt,`Opening RPC '${e}' stream ${o} transport.`),k.open(),M=!0),ne(Lt,`RPC '${e}' stream ${o} sending:`,B),k.send(B))},Ao:()=>k.close()}),G=(B,ue,ce)=>{B.listen(ue,ae=>{try{ce(ae)}catch(ge){setTimeout(()=>{throw ge},0)}})};return G(k,pa.EventType.OPEN,()=>{z||(ne(Lt,`RPC '${e}' stream ${o} transport opened.`),H.So())}),G(k,pa.EventType.CLOSE,()=>{z||(z=!0,ne(Lt,`RPC '${e}' stream ${o} transport closed`),H.Do())}),G(k,pa.EventType.ERROR,B=>{z||(z=!0,ro(Lt,`RPC '${e}' stream ${o} transport errored:`,B),H.Do(new se(W.UNAVAILABLE,"The operation could not be completed")))}),G(k,pa.EventType.MESSAGE,B=>{var ue;if(!z){const ce=B.data[0];Fe(!!ce);const ae=ce,ge=(ae==null?void 0:ae.error)||((ue=ae[0])===null||ue===void 0?void 0:ue.error);if(ge){ne(Lt,`RPC '${e}' stream ${o} received error:`,ge);const Oe=ge.status;let ye=function(A){const P=ot[A];if(P!==void 0)return Cy(P)}(Oe),R=ge.message;ye===void 0&&(ye=W.INTERNAL,R="Unknown error status: "+Oe+" with message "+ge.message),z=!0,H.Do(new se(ye,R)),k.close()}else ne(Lt,`RPC '${e}' stream ${o} received:`,ce),H.vo(ce)}}),G(m,Zg.STAT_EVENT,B=>{B.stat===Qh.PROXY?ne(Lt,`RPC '${e}' stream ${o} detected buffering proxy`):B.stat===Qh.NOPROXY&&ne(Lt,`RPC '${e}' stream ${o} detected no buffering proxy`)}),setTimeout(()=>{H.bo()},0),H}}function jh(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gu(i){return new Hw(i,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jy{constructor(e,t,s=1e3,o=1.5,u=6e4){this.li=e,this.timerId=t,this.Qo=s,this.Ko=o,this.$o=u,this.Uo=0,this.Wo=null,this.Go=Date.now(),this.reset()}reset(){this.Uo=0}zo(){this.Uo=this.$o}jo(e){this.cancel();const t=Math.floor(this.Uo+this.Ho()),s=Math.max(0,Date.now()-this.Go),o=Math.max(0,t-s);o>0&&ne("ExponentialBackoff",`Backing off for ${o} ms (base delay: ${this.Uo} ms, delay with jitter: ${t} ms, last attempt: ${s} ms ago)`),this.Wo=this.li.enqueueAfterDelay(this.timerId,o,()=>(this.Go=Date.now(),e())),this.Uo*=this.Ko,this.Uo<this.Qo&&(this.Uo=this.Qo),this.Uo>this.$o&&(this.Uo=this.$o)}Jo(){this.Wo!==null&&(this.Wo.skipDelay(),this.Wo=null)}cancel(){this.Wo!==null&&(this.Wo.cancel(),this.Wo=null)}Ho(){return(Math.random()-.5)*this.Uo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zy{constructor(e,t,s,o,u,h,m,g){this.li=e,this.Yo=s,this.Zo=o,this.connection=u,this.authCredentialsProvider=h,this.appCheckCredentialsProvider=m,this.listener=g,this.state=0,this.Xo=0,this.e_=null,this.t_=null,this.stream=null,this.n_=0,this.r_=new jy(e,t)}i_(){return this.state===1||this.state===5||this.s_()}s_(){return this.state===2||this.state===3}start(){this.n_=0,this.state!==4?this.auth():this.o_()}async stop(){this.i_()&&await this.close(0)}__(){this.state=0,this.r_.reset()}a_(){this.s_()&&this.e_===null&&(this.e_=this.li.enqueueAfterDelay(this.Yo,6e4,()=>this.u_()))}c_(e){this.l_(),this.stream.send(e)}async u_(){if(this.s_())return this.close(0)}l_(){this.e_&&(this.e_.cancel(),this.e_=null)}h_(){this.t_&&(this.t_.cancel(),this.t_=null)}async close(e,t){this.l_(),this.h_(),this.r_.cancel(),this.Xo++,e!==4?this.r_.reset():t&&t.code===W.RESOURCE_EXHAUSTED?(Tr(t.toString()),Tr("Using maximum backoff delay to prevent overloading the backend."),this.r_.zo()):t&&t.code===W.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.P_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.po(t)}P_(){}auth(){this.state=1;const e=this.T_(this.Xo),t=this.Xo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,o])=>{this.Xo===t&&this.I_(s,o)},s=>{e(()=>{const o=new se(W.UNKNOWN,"Fetching auth token failed: "+s.message);return this.d_(o)})})}I_(e,t){const s=this.T_(this.Xo);this.stream=this.E_(e,t),this.stream.Ro(()=>{s(()=>this.listener.Ro())}),this.stream.mo(()=>{s(()=>(this.state=2,this.t_=this.li.enqueueAfterDelay(this.Zo,1e4,()=>(this.s_()&&(this.state=3),Promise.resolve())),this.listener.mo()))}),this.stream.po(o=>{s(()=>this.d_(o))}),this.stream.onMessage(o=>{s(()=>++this.n_==1?this.A_(o):this.onNext(o))})}o_(){this.state=5,this.r_.jo(async()=>{this.state=0,this.start()})}d_(e){return ne("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}T_(e){return t=>{this.li.enqueueAndForget(()=>this.Xo===e?t():(ne("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class UT extends zy{constructor(e,t,s,o,u,h){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,s,o,h),this.serializer=u}E_(e,t){return this.connection.qo("Listen",e,t)}A_(e){return this.onNext(e)}onNext(e){this.r_.reset();const t=Kw(this.serializer,e),s=function(u){if(!("targetChange"in u))return we.min();const h=u.targetChange;return h.targetIds&&h.targetIds.length?we.min():h.readTime?Xn(h.readTime):we.min()}(e);return this.listener.R_(t,s)}V_(e){const t={};t.database=sd(this.serializer),t.addTarget=function(u,h){let m;const g=h.target;if(m=Zh(g)?{documents:Yw(u,g)}:{query:Jw(u,g).ct},m.targetId=h.targetId,h.resumeToken.approximateByteSize()>0){m.resumeToken=Ny(u,h.resumeToken);const v=nd(u,h.expectedCount);v!==null&&(m.expectedCount=v)}else if(h.snapshotVersion.compareTo(we.min())>0){m.readTime=ku(u,h.snapshotVersion.toTimestamp());const v=nd(u,h.expectedCount);v!==null&&(m.expectedCount=v)}return m}(this.serializer,e);const s=eT(this.serializer,e);s&&(t.labels=s),this.c_(t)}m_(e){const t={};t.database=sd(this.serializer),t.removeTarget=e,this.c_(t)}}class jT extends zy{constructor(e,t,s,o,u,h){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,s,o,h),this.serializer=u}get f_(){return this.n_>0}start(){this.lastStreamToken=void 0,super.start()}P_(){this.f_&&this.g_([])}E_(e,t){return this.connection.qo("Write",e,t)}A_(e){return Fe(!!e.streamToken),this.lastStreamToken=e.streamToken,Fe(!e.writeResults||e.writeResults.length===0),this.listener.p_()}onNext(e){Fe(!!e.streamToken),this.lastStreamToken=e.streamToken,this.r_.reset();const t=Xw(e.writeResults,e.commitTime),s=Xn(e.commitTime);return this.listener.y_(s,t)}w_(){const e={};e.database=sd(this.serializer),this.c_(e)}g_(e){const t={streamToken:this.lastStreamToken,writes:e.map(s=>Qw(this.serializer,s))};this.c_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zT extends class{}{constructor(e,t,s,o){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=s,this.serializer=o,this.S_=!1}b_(){if(this.S_)throw new se(W.FAILED_PRECONDITION,"The client has already been terminated.")}Oo(e,t,s,o){return this.b_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([u,h])=>this.connection.Oo(e,rd(t,s),o,u,h)).catch(u=>{throw u.name==="FirebaseError"?(u.code===W.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),u):new se(W.UNKNOWN,u.toString())})}ko(e,t,s,o,u){return this.b_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([h,m])=>this.connection.ko(e,rd(t,s),o,h,m,u)).catch(h=>{throw h.name==="FirebaseError"?(h.code===W.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),h):new se(W.UNKNOWN,h.toString())})}terminate(){this.S_=!0,this.connection.terminate()}}class BT{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.D_=0,this.v_=null,this.C_=!0}F_(){this.D_===0&&(this.M_("Unknown"),this.v_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.v_=null,this.x_("Backend didn't respond within 10 seconds."),this.M_("Offline"),Promise.resolve())))}O_(e){this.state==="Online"?this.M_("Unknown"):(this.D_++,this.D_>=1&&(this.N_(),this.x_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.M_("Offline")))}set(e){this.N_(),this.D_=0,e==="Online"&&(this.C_=!1),this.M_(e)}M_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}x_(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.C_?(Tr(t),this.C_=!1):ne("OnlineStateTracker",t)}N_(){this.v_!==null&&(this.v_.cancel(),this.v_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $T{constructor(e,t,s,o,u){this.localStore=e,this.datastore=t,this.asyncQueue=s,this.remoteSyncer={},this.B_=[],this.L_=new Map,this.k_=new Set,this.q_=[],this.Q_=u,this.Q_.uo(h=>{s.enqueueAndForget(async()=>{Zi(this)&&(ne("RemoteStore","Restarting streams for network reachability change."),await async function(g){const v=Te(g);v.k_.add(4),await Ma(v),v.K_.set("Unknown"),v.k_.delete(4),await Ku(v)}(this))})}),this.K_=new BT(s,o)}}async function Ku(i){if(Zi(i))for(const e of i.q_)await e(!0)}async function Ma(i){for(const e of i.q_)await e(!1)}function By(i,e){const t=Te(i);t.L_.has(e.targetId)||(t.L_.set(e.targetId,e),Vd(t)?Dd(t):go(t).s_()&&xd(t,e))}function Nd(i,e){const t=Te(i),s=go(t);t.L_.delete(e),s.s_()&&$y(t,e),t.L_.size===0&&(s.s_()?s.a_():Zi(t)&&t.K_.set("Unknown"))}function xd(i,e){if(i.U_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(we.min())>0){const t=i.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}go(i).V_(e)}function $y(i,e){i.U_.xe(e),go(i).m_(e)}function Dd(i){i.U_=new zw({getRemoteKeysForTarget:e=>i.remoteSyncer.getRemoteKeysForTarget(e),ut:e=>i.L_.get(e)||null,nt:()=>i.datastore.serializer.databaseId}),go(i).start(),i.K_.F_()}function Vd(i){return Zi(i)&&!go(i).i_()&&i.L_.size>0}function Zi(i){return Te(i).k_.size===0}function qy(i){i.U_=void 0}async function qT(i){i.K_.set("Online")}async function HT(i){i.L_.forEach((e,t)=>{xd(i,e)})}async function WT(i,e){qy(i),Vd(i)?(i.K_.O_(e),Dd(i)):i.K_.set("Unknown")}async function GT(i,e,t){if(i.K_.set("Online"),e instanceof Py&&e.state===2&&e.cause)try{await async function(o,u){const h=u.cause;for(const m of u.targetIds)o.L_.has(m)&&(await o.remoteSyncer.rejectListen(m,h),o.L_.delete(m),o.U_.removeTarget(m))}(i,e)}catch(s){ne("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),s),await Nu(i,s)}else if(e instanceof pu?i.U_.$e(e):e instanceof ky?i.U_.Je(e):i.U_.Ge(e),!t.isEqual(we.min()))try{const s=await Uy(i.localStore);t.compareTo(s)>=0&&await function(u,h){const m=u.U_.it(h);return m.targetChanges.forEach((g,v)=>{if(g.resumeToken.approximateByteSize()>0){const w=u.L_.get(v);w&&u.L_.set(v,w.withResumeToken(g.resumeToken,h))}}),m.targetMismatches.forEach((g,v)=>{const w=u.L_.get(g);if(!w)return;u.L_.set(g,w.withResumeToken(kt.EMPTY_BYTE_STRING,w.snapshotVersion)),$y(u,g);const k=new ii(w.target,g,v,w.sequenceNumber);xd(u,k)}),u.remoteSyncer.applyRemoteEvent(m)}(i,t)}catch(s){ne("RemoteStore","Failed to raise snapshot:",s),await Nu(i,s)}}async function Nu(i,e,t){if(!mo(e))throw e;i.k_.add(1),await Ma(i),i.K_.set("Offline"),t||(t=()=>Uy(i.localStore)),i.asyncQueue.enqueueRetryable(async()=>{ne("RemoteStore","Retrying IndexedDB access"),await t(),i.k_.delete(1),await Ku(i)})}function Hy(i,e){return e().catch(t=>Nu(i,t,e))}async function Qu(i){const e=Te(i),t=mi(e);let s=e.B_.length>0?e.B_[e.B_.length-1].batchId:-1;for(;KT(e);)try{const o=await xT(e.localStore,s);if(o===null){e.B_.length===0&&t.a_();break}s=o.batchId,QT(e,o)}catch(o){await Nu(e,o)}Wy(e)&&Gy(e)}function KT(i){return Zi(i)&&i.B_.length<10}function QT(i,e){i.B_.push(e);const t=mi(i);t.s_()&&t.f_&&t.g_(e.mutations)}function Wy(i){return Zi(i)&&!mi(i).i_()&&i.B_.length>0}function Gy(i){mi(i).start()}async function XT(i){mi(i).w_()}async function YT(i){const e=mi(i);for(const t of i.B_)e.g_(t.mutations)}async function JT(i,e,t){const s=i.B_.shift(),o=Sd.from(s,e,t);await Hy(i,()=>i.remoteSyncer.applySuccessfulWrite(o)),await Qu(i)}async function ZT(i,e){e&&mi(i).f_&&await async function(s,o){if(function(h){return Fw(h)&&h!==W.ABORTED}(o.code)){const u=s.B_.shift();mi(s).__(),await Hy(s,()=>s.remoteSyncer.rejectFailedWrite(u.batchId,o)),await Qu(s)}}(i,e),Wy(i)&&Gy(i)}async function sg(i,e){const t=Te(i);t.asyncQueue.verifyOperationInProgress(),ne("RemoteStore","RemoteStore received new credentials");const s=Zi(t);t.k_.add(3),await Ma(t),s&&t.K_.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.k_.delete(3),await Ku(t)}async function eI(i,e){const t=Te(i);e?(t.k_.delete(2),await Ku(t)):e||(t.k_.add(2),await Ma(t),t.K_.set("Unknown"))}function go(i){return i.W_||(i.W_=function(t,s,o){const u=Te(t);return u.b_(),new UT(s,u.connection,u.authCredentials,u.appCheckCredentials,u.serializer,o)}(i.datastore,i.asyncQueue,{Ro:qT.bind(null,i),mo:HT.bind(null,i),po:WT.bind(null,i),R_:GT.bind(null,i)}),i.q_.push(async e=>{e?(i.W_.__(),Vd(i)?Dd(i):i.K_.set("Unknown")):(await i.W_.stop(),qy(i))})),i.W_}function mi(i){return i.G_||(i.G_=function(t,s,o){const u=Te(t);return u.b_(),new jT(s,u.connection,u.authCredentials,u.appCheckCredentials,u.serializer,o)}(i.datastore,i.asyncQueue,{Ro:()=>Promise.resolve(),mo:XT.bind(null,i),po:ZT.bind(null,i),p_:YT.bind(null,i),y_:JT.bind(null,i)}),i.q_.push(async e=>{e?(i.G_.__(),await Qu(i)):(await i.G_.stop(),i.B_.length>0&&(ne("RemoteStore",`Stopping write stream with ${i.B_.length} pending writes`),i.B_=[]))})),i.G_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Od{constructor(e,t,s,o,u){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=s,this.op=o,this.removalCallback=u,this.deferred=new ui,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(h=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,s,o,u){const h=Date.now()+s,m=new Od(e,t,h,o,u);return m.start(s),m}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new se(W.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Ld(i,e){if(Tr("AsyncQueue",`${e}: ${i}`),mo(i))return new se(W.UNAVAILABLE,`${e}: ${i}`);throw i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ys{static emptySet(e){return new Ys(e.comparator)}constructor(e){this.comparator=e?(t,s)=>e(t,s)||de.comparator(t.key,s.key):(t,s)=>de.comparator(t.key,s.key),this.keyedMap=ma(),this.sortedSet=new Ze(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,s)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Ys)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;t.hasNext();){const o=t.getNext().key,u=s.getNext().key;if(!o.isEqual(u))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const s=new Ys;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=t,s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class og{constructor(){this.z_=new Ze(de.comparator)}track(e){const t=e.doc.key,s=this.z_.get(t);s?e.type!==0&&s.type===3?this.z_=this.z_.insert(t,e):e.type===3&&s.type!==1?this.z_=this.z_.insert(t,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.z_=this.z_.insert(t,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.z_=this.z_.insert(t,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.z_=this.z_.remove(t):e.type===1&&s.type===2?this.z_=this.z_.insert(t,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.z_=this.z_.insert(t,{type:2,doc:e.doc}):ve():this.z_=this.z_.insert(t,e)}j_(){const e=[];return this.z_.inorderTraversal((t,s)=>{e.push(s)}),e}}class lo{constructor(e,t,s,o,u,h,m,g,v){this.query=e,this.docs=t,this.oldDocs=s,this.docChanges=o,this.mutatedKeys=u,this.fromCache=h,this.syncStateChanged=m,this.excludesMetadataChanges=g,this.hasCachedResults=v}static fromInitialDocuments(e,t,s,o,u){const h=[];return t.forEach(m=>{h.push({type:0,doc:m})}),new lo(e,t,Ys.emptySet(t),h,s,o,!0,!1,u)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Bu(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,s=e.docChanges;if(t.length!==s.length)return!1;for(let o=0;o<t.length;o++)if(t[o].type!==s[o].type||!t[o].doc.isEqual(s[o].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tI{constructor(){this.H_=void 0,this.J_=[]}Y_(){return this.J_.some(e=>e.Z_())}}class nI{constructor(){this.queries=ag(),this.onlineState="Unknown",this.X_=new Set}terminate(){(function(t,s){const o=Te(t),u=o.queries;o.queries=ag(),u.forEach((h,m)=>{for(const g of m.J_)g.onError(s)})})(this,new se(W.ABORTED,"Firestore shutting down"))}}function ag(){return new Yi(i=>my(i),Bu)}async function rI(i,e){const t=Te(i);let s=3;const o=e.query;let u=t.queries.get(o);u?!u.Y_()&&e.Z_()&&(s=2):(u=new tI,s=e.Z_()?0:1);try{switch(s){case 0:u.H_=await t.onListen(o,!0);break;case 1:u.H_=await t.onListen(o,!1);break;case 2:await t.onFirstRemoteStoreListen(o)}}catch(h){const m=Ld(h,`Initialization of query '${Gs(e.query)}' failed`);return void e.onError(m)}t.queries.set(o,u),u.J_.push(e),e.ea(t.onlineState),u.H_&&e.ta(u.H_)&&Md(t)}async function iI(i,e){const t=Te(i),s=e.query;let o=3;const u=t.queries.get(s);if(u){const h=u.J_.indexOf(e);h>=0&&(u.J_.splice(h,1),u.J_.length===0?o=e.Z_()?0:1:!u.Y_()&&e.Z_()&&(o=2))}switch(o){case 0:return t.queries.delete(s),t.onUnlisten(s,!0);case 1:return t.queries.delete(s),t.onUnlisten(s,!1);case 2:return t.onLastRemoteStoreUnlisten(s);default:return}}function sI(i,e){const t=Te(i);let s=!1;for(const o of e){const u=o.query,h=t.queries.get(u);if(h){for(const m of h.J_)m.ta(o)&&(s=!0);h.H_=o}}s&&Md(t)}function oI(i,e,t){const s=Te(i),o=s.queries.get(e);if(o)for(const u of o.J_)u.onError(t);s.queries.delete(e)}function Md(i){i.X_.forEach(e=>{e.next()})}var ad,lg;(lg=ad||(ad={})).na="default",lg.Cache="cache";class aI{constructor(e,t,s){this.query=e,this.ra=t,this.ia=!1,this.sa=null,this.onlineState="Unknown",this.options=s||{}}ta(e){if(!this.options.includeMetadataChanges){const s=[];for(const o of e.docChanges)o.type!==3&&s.push(o);e=new lo(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.ia?this.oa(e)&&(this.ra.next(e),t=!0):this._a(e,this.onlineState)&&(this.aa(e),t=!0),this.sa=e,t}onError(e){this.ra.error(e)}ea(e){this.onlineState=e;let t=!1;return this.sa&&!this.ia&&this._a(this.sa,e)&&(this.aa(this.sa),t=!0),t}_a(e,t){if(!e.fromCache||!this.Z_())return!0;const s=t!=="Offline";return(!this.options.ua||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}oa(e){if(e.docChanges.length>0)return!0;const t=this.sa&&this.sa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}aa(e){e=lo.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.ia=!0,this.ra.next(e)}Z_(){return this.options.source!==ad.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ky{constructor(e){this.key=e}}class Qy{constructor(e){this.key=e}}class lI{constructor(e,t){this.query=e,this.Ea=t,this.Aa=null,this.hasCachedResults=!1,this.current=!1,this.Ra=Ce(),this.mutatedKeys=Ce(),this.Va=gy(e),this.ma=new Ys(this.Va)}get fa(){return this.Ea}ga(e,t){const s=t?t.pa:new og,o=t?t.ma:this.ma;let u=t?t.mutatedKeys:this.mutatedKeys,h=o,m=!1;const g=this.query.limitType==="F"&&o.size===this.query.limit?o.last():null,v=this.query.limitType==="L"&&o.size===this.query.limit?o.first():null;if(e.inorderTraversal((w,k)=>{const M=o.get(w),z=$u(this.query,k)?k:null,H=!!M&&this.mutatedKeys.has(M.key),G=!!z&&(z.hasLocalMutations||this.mutatedKeys.has(z.key)&&z.hasCommittedMutations);let B=!1;M&&z?M.data.isEqual(z.data)?H!==G&&(s.track({type:3,doc:z}),B=!0):this.ya(M,z)||(s.track({type:2,doc:z}),B=!0,(g&&this.Va(z,g)>0||v&&this.Va(z,v)<0)&&(m=!0)):!M&&z?(s.track({type:0,doc:z}),B=!0):M&&!z&&(s.track({type:1,doc:M}),B=!0,(g||v)&&(m=!0)),B&&(z?(h=h.add(z),u=G?u.add(w):u.delete(w)):(h=h.delete(w),u=u.delete(w)))}),this.query.limit!==null)for(;h.size>this.query.limit;){const w=this.query.limitType==="F"?h.last():h.first();h=h.delete(w.key),u=u.delete(w.key),s.track({type:1,doc:w})}return{ma:h,pa:s,ss:m,mutatedKeys:u}}ya(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,s,o){const u=this.ma;this.ma=e.ma,this.mutatedKeys=e.mutatedKeys;const h=e.pa.j_();h.sort((w,k)=>function(z,H){const G=B=>{switch(B){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ve()}};return G(z)-G(H)}(w.type,k.type)||this.Va(w.doc,k.doc)),this.wa(s),o=o!=null&&o;const m=t&&!o?this.Sa():[],g=this.Ra.size===0&&this.current&&!o?1:0,v=g!==this.Aa;return this.Aa=g,h.length!==0||v?{snapshot:new lo(this.query,e.ma,u,h,e.mutatedKeys,g===0,v,!1,!!s&&s.resumeToken.approximateByteSize()>0),ba:m}:{ba:m}}ea(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({ma:this.ma,pa:new og,mutatedKeys:this.mutatedKeys,ss:!1},!1)):{ba:[]}}Da(e){return!this.Ea.has(e)&&!!this.ma.has(e)&&!this.ma.get(e).hasLocalMutations}wa(e){e&&(e.addedDocuments.forEach(t=>this.Ea=this.Ea.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Ea=this.Ea.delete(t)),this.current=e.current)}Sa(){if(!this.current)return[];const e=this.Ra;this.Ra=Ce(),this.ma.forEach(s=>{this.Da(s.key)&&(this.Ra=this.Ra.add(s.key))});const t=[];return e.forEach(s=>{this.Ra.has(s)||t.push(new Qy(s))}),this.Ra.forEach(s=>{e.has(s)||t.push(new Ky(s))}),t}va(e){this.Ea=e.Es,this.Ra=Ce();const t=this.ga(e.documents);return this.applyChanges(t,!0)}Ca(){return lo.fromInitialDocuments(this.query,this.ma,this.mutatedKeys,this.Aa===0,this.hasCachedResults)}}class uI{constructor(e,t,s){this.query=e,this.targetId=t,this.view=s}}class cI{constructor(e){this.key=e,this.Fa=!1}}class hI{constructor(e,t,s,o,u,h){this.localStore=e,this.remoteStore=t,this.eventManager=s,this.sharedClientState=o,this.currentUser=u,this.maxConcurrentLimboResolutions=h,this.Ma={},this.xa=new Yi(m=>my(m),Bu),this.Oa=new Map,this.Na=new Set,this.Ba=new Ze(de.comparator),this.La=new Map,this.ka=new Cd,this.qa={},this.Qa=new Map,this.Ka=ao.Qn(),this.onlineState="Unknown",this.$a=void 0}get isPrimaryClient(){return this.$a===!0}}async function dI(i,e,t=!0){const s=t_(i);let o;const u=s.xa.get(e);return u?(s.sharedClientState.addLocalQueryTarget(u.targetId),o=u.view.Ca()):o=await Xy(s,e,t,!0),o}async function fI(i,e){const t=t_(i);await Xy(t,e,!0,!1)}async function Xy(i,e,t,s){const o=await DT(i.localStore,Kn(e)),u=o.targetId,h=i.sharedClientState.addLocalQueryTarget(u,t);let m;return s&&(m=await pI(i,e,u,h==="current",o.resumeToken)),i.isPrimaryClient&&t&&By(i.remoteStore,o),m}async function pI(i,e,t,s,o){i.Ua=(k,M,z)=>async function(G,B,ue,ce){let ae=B.view.ga(ue);ae.ss&&(ae=await ng(G.localStore,B.query,!1).then(({documents:R})=>B.view.ga(R,ae)));const ge=ce&&ce.targetChanges.get(B.targetId),Oe=ce&&ce.targetMismatches.get(B.targetId)!=null,ye=B.view.applyChanges(ae,G.isPrimaryClient,ge,Oe);return cg(G,B.targetId,ye.ba),ye.snapshot}(i,k,M,z);const u=await ng(i.localStore,e,!0),h=new lI(e,u.Es),m=h.ga(u.documents),g=La.createSynthesizedTargetChangeForCurrentChange(t,s&&i.onlineState!=="Offline",o),v=h.applyChanges(m,i.isPrimaryClient,g);cg(i,t,v.ba);const w=new uI(e,t,h);return i.xa.set(e,w),i.Oa.has(t)?i.Oa.get(t).push(e):i.Oa.set(t,[e]),v.snapshot}async function mI(i,e,t){const s=Te(i),o=s.xa.get(e),u=s.Oa.get(o.targetId);if(u.length>1)return s.Oa.set(o.targetId,u.filter(h=>!Bu(h,e))),void s.xa.delete(e);s.isPrimaryClient?(s.sharedClientState.removeLocalQueryTarget(o.targetId),s.sharedClientState.isActiveQueryTarget(o.targetId)||await od(s.localStore,o.targetId,!1).then(()=>{s.sharedClientState.clearQueryState(o.targetId),t&&Nd(s.remoteStore,o.targetId),ld(s,o.targetId)}).catch(po)):(ld(s,o.targetId),await od(s.localStore,o.targetId,!0))}async function gI(i,e){const t=Te(i),s=t.xa.get(e),o=t.Oa.get(s.targetId);t.isPrimaryClient&&o.length===1&&(t.sharedClientState.removeLocalQueryTarget(s.targetId),Nd(t.remoteStore,s.targetId))}async function yI(i,e,t){const s=SI(i);try{const o=await function(h,m){const g=Te(h),v=ft.now(),w=m.reduce((z,H)=>z.add(H.key),Ce());let k,M;return g.persistence.runTransaction("Locally write mutations","readwrite",z=>{let H=Ir(),G=Ce();return g.hs.getEntries(z,w).next(B=>{H=B,H.forEach((ue,ce)=>{ce.isValidDocument()||(G=G.add(ue))})}).next(()=>g.localDocuments.getOverlayedDocuments(z,H)).next(B=>{k=B;const ue=[];for(const ce of m){const ae=Vw(ce,k.get(ce.key).overlayedDocument);ae!=null&&ue.push(new Ji(ce.key,ae,oy(ae.value.mapValue),Qn.exists(!0)))}return g.mutationQueue.addMutationBatch(z,v,ue,m)}).next(B=>{M=B;const ue=B.applyToLocalDocumentSet(k,G);return g.documentOverlayCache.saveOverlays(z,B.batchId,ue)})}).then(()=>({batchId:M.batchId,changes:_y(k)}))}(s.localStore,e);s.sharedClientState.addPendingMutation(o.batchId),function(h,m,g){let v=h.qa[h.currentUser.toKey()];v||(v=new Ze(Pe)),v=v.insert(m,g),h.qa[h.currentUser.toKey()]=v}(s,o.batchId,t),await ba(s,o.changes),await Qu(s.remoteStore)}catch(o){const u=Ld(o,"Failed to persist write");t.reject(u)}}async function Yy(i,e){const t=Te(i);try{const s=await PT(t.localStore,e);e.targetChanges.forEach((o,u)=>{const h=t.La.get(u);h&&(Fe(o.addedDocuments.size+o.modifiedDocuments.size+o.removedDocuments.size<=1),o.addedDocuments.size>0?h.Fa=!0:o.modifiedDocuments.size>0?Fe(h.Fa):o.removedDocuments.size>0&&(Fe(h.Fa),h.Fa=!1))}),await ba(t,s,e)}catch(s){await po(s)}}function ug(i,e,t){const s=Te(i);if(s.isPrimaryClient&&t===0||!s.isPrimaryClient&&t===1){const o=[];s.xa.forEach((u,h)=>{const m=h.view.ea(e);m.snapshot&&o.push(m.snapshot)}),function(h,m){const g=Te(h);g.onlineState=m;let v=!1;g.queries.forEach((w,k)=>{for(const M of k.J_)M.ea(m)&&(v=!0)}),v&&Md(g)}(s.eventManager,e),o.length&&s.Ma.R_(o),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function _I(i,e,t){const s=Te(i);s.sharedClientState.updateQueryState(e,"rejected",t);const o=s.La.get(e),u=o&&o.key;if(u){let h=new Ze(de.comparator);h=h.insert(u,bt.newNoDocument(u,we.min()));const m=Ce().add(u),g=new Wu(we.min(),new Map,new Ze(Pe),h,m);await Yy(s,g),s.Ba=s.Ba.remove(u),s.La.delete(e),bd(s)}else await od(s.localStore,e,!1).then(()=>ld(s,e,t)).catch(po)}async function vI(i,e){const t=Te(i),s=e.batch.batchId;try{const o=await kT(t.localStore,e);Zy(t,s,null),Jy(t,s),t.sharedClientState.updateMutationState(s,"acknowledged"),await ba(t,o)}catch(o){await po(o)}}async function EI(i,e,t){const s=Te(i);try{const o=await function(h,m){const g=Te(h);return g.persistence.runTransaction("Reject batch","readwrite-primary",v=>{let w;return g.mutationQueue.lookupMutationBatch(v,m).next(k=>(Fe(k!==null),w=k.keys(),g.mutationQueue.removeMutationBatch(v,k))).next(()=>g.mutationQueue.performConsistencyCheck(v)).next(()=>g.documentOverlayCache.removeOverlaysForBatchId(v,w,m)).next(()=>g.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(v,w)).next(()=>g.localDocuments.getDocuments(v,w))})}(s.localStore,e);Zy(s,e,t),Jy(s,e),s.sharedClientState.updateMutationState(e,"rejected",t),await ba(s,o)}catch(o){await po(o)}}function Jy(i,e){(i.Qa.get(e)||[]).forEach(t=>{t.resolve()}),i.Qa.delete(e)}function Zy(i,e,t){const s=Te(i);let o=s.qa[s.currentUser.toKey()];if(o){const u=o.get(e);u&&(t?u.reject(t):u.resolve(),o=o.remove(e)),s.qa[s.currentUser.toKey()]=o}}function ld(i,e,t=null){i.sharedClientState.removeLocalQueryTarget(e);for(const s of i.Oa.get(e))i.xa.delete(s),t&&i.Ma.Wa(s,t);i.Oa.delete(e),i.isPrimaryClient&&i.ka.yr(e).forEach(s=>{i.ka.containsKey(s)||e_(i,s)})}function e_(i,e){i.Na.delete(e.path.canonicalString());const t=i.Ba.get(e);t!==null&&(Nd(i.remoteStore,t),i.Ba=i.Ba.remove(e),i.La.delete(t),bd(i))}function cg(i,e,t){for(const s of t)s instanceof Ky?(i.ka.addReference(s.key,e),wI(i,s)):s instanceof Qy?(ne("SyncEngine","Document no longer in limbo: "+s.key),i.ka.removeReference(s.key,e),i.ka.containsKey(s.key)||e_(i,s.key)):ve()}function wI(i,e){const t=e.key,s=t.path.canonicalString();i.Ba.get(t)||i.Na.has(s)||(ne("SyncEngine","New document in limbo: "+t),i.Na.add(s),bd(i))}function bd(i){for(;i.Na.size>0&&i.Ba.size<i.maxConcurrentLimboResolutions;){const e=i.Na.values().next().value;i.Na.delete(e);const t=new de(Ke.fromString(e)),s=i.Ka.next();i.La.set(s,new cI(t)),i.Ba=i.Ba.insert(t,s),By(i.remoteStore,new ii(Kn(fy(t.path)),s,"TargetPurposeLimboResolution",Uu.oe))}}async function ba(i,e,t){const s=Te(i),o=[],u=[],h=[];s.xa.isEmpty()||(s.xa.forEach((m,g)=>{h.push(s.Ua(g,e,t).then(v=>{var w;if((v||t)&&s.isPrimaryClient){const k=v?!v.fromCache:(w=t==null?void 0:t.targetChanges.get(g.targetId))===null||w===void 0?void 0:w.current;s.sharedClientState.updateQueryState(g.targetId,k?"current":"not-current")}if(v){o.push(v);const k=Pd.zi(g.targetId,v);u.push(k)}}))}),await Promise.all(h),s.Ma.R_(o),await async function(g,v){const w=Te(g);try{await w.persistence.runTransaction("notifyLocalViewChanges","readwrite",k=>$.forEach(v,M=>$.forEach(M.Wi,z=>w.persistence.referenceDelegate.addReference(k,M.targetId,z)).next(()=>$.forEach(M.Gi,z=>w.persistence.referenceDelegate.removeReference(k,M.targetId,z)))))}catch(k){if(!mo(k))throw k;ne("LocalStore","Failed to update sequence numbers: "+k)}for(const k of v){const M=k.targetId;if(!k.fromCache){const z=w.us.get(M),H=z.snapshotVersion,G=z.withLastLimboFreeSnapshotVersion(H);w.us=w.us.insert(M,G)}}}(s.localStore,u))}async function TI(i,e){const t=Te(i);if(!t.currentUser.isEqual(e)){ne("SyncEngine","User change. New user:",e.toKey());const s=await Fy(t.localStore,e);t.currentUser=e,function(u,h){u.Qa.forEach(m=>{m.forEach(g=>{g.reject(new se(W.CANCELLED,h))})}),u.Qa.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await ba(t,s.Ts)}}function II(i,e){const t=Te(i),s=t.La.get(e);if(s&&s.Fa)return Ce().add(s.key);{let o=Ce();const u=t.Oa.get(e);if(!u)return o;for(const h of u){const m=t.xa.get(h);o=o.unionWith(m.view.fa)}return o}}function t_(i){const e=Te(i);return e.remoteStore.remoteSyncer.applyRemoteEvent=Yy.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=II.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=_I.bind(null,e),e.Ma.R_=sI.bind(null,e.eventManager),e.Ma.Wa=oI.bind(null,e.eventManager),e}function SI(i){const e=Te(i);return e.remoteStore.remoteSyncer.applySuccessfulWrite=vI.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=EI.bind(null,e),e}class xu{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Gu(e.databaseInfo.databaseId),this.sharedClientState=this.za(e),this.persistence=this.ja(e),await this.persistence.start(),this.localStore=this.Ha(e),this.gcScheduler=this.Ja(e,this.localStore),this.indexBackfillerScheduler=this.Ya(e,this.localStore)}Ja(e,t){return null}Ya(e,t){return null}Ha(e){return CT(this.persistence,new AT,e.initialUser,this.serializer)}ja(e){return new by(kd.ei,this.serializer)}za(e){return new OT}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}xu.provider={build:()=>new xu};class AI extends xu{constructor(e){super(),this.cacheSizeBytes=e}Ja(e,t){Fe(this.persistence.referenceDelegate instanceof Pu);const s=this.persistence.referenceDelegate.garbageCollector;return new cT(s,e.asyncQueue,t)}ja(e){const t=this.cacheSizeBytes!==void 0?Yt.withCacheSize(this.cacheSizeBytes):Yt.DEFAULT;return new by(s=>Pu.ei(s,t),this.serializer)}}class ud{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>ug(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=TI.bind(null,this.syncEngine),await eI(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new nI}()}createDatastore(e){const t=Gu(e.databaseInfo.databaseId),s=function(u){return new FT(u)}(e.databaseInfo);return function(u,h,m,g){return new zT(u,h,m,g)}(e.authCredentials,e.appCheckCredentials,s,t)}createRemoteStore(e){return function(s,o,u,h,m){return new $T(s,o,u,h,m)}(this.localStore,this.datastore,e.asyncQueue,t=>ug(this.syncEngine,t,0),function(){return ig.p()?new ig:new LT}())}createSyncEngine(e,t){return function(o,u,h,m,g,v,w){const k=new hI(o,u,h,m,g,v);return w&&(k.$a=!0),k}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(o){const u=Te(o);ne("RemoteStore","RemoteStore shutting down."),u.k_.add(5),await Ma(u),u.Q_.shutdown(),u.K_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}ud.provider={build:()=>new ud};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RI{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Xa(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Xa(this.observer.error,e):Tr("Uncaught Error in snapshot listener:",e.toString()))}eu(){this.muted=!0}Xa(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CI{constructor(e,t,s,o,u){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=s,this.databaseInfo=o,this.user=Mt.UNAUTHENTICATED,this.clientId=ry.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=u,this.authCredentials.start(s,async h=>{ne("FirestoreClient","Received user=",h.uid),await this.authCredentialListener(h),this.user=h}),this.appCheckCredentials.start(s,h=>(ne("FirestoreClient","Received new app check token=",h),this.appCheckCredentialListener(h,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new ui;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const s=Ld(t,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function zh(i,e){i.asyncQueue.verifyOperationInProgress(),ne("FirestoreClient","Initializing OfflineComponentProvider");const t=i.configuration;await e.initialize(t);let s=t.initialUser;i.setCredentialChangeListener(async o=>{s.isEqual(o)||(await Fy(e.localStore,o),s=o)}),e.persistence.setDatabaseDeletedListener(()=>i.terminate()),i._offlineComponents=e}async function hg(i,e){i.asyncQueue.verifyOperationInProgress();const t=await kI(i);ne("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(t,i.configuration),i.setCredentialChangeListener(s=>sg(e.remoteStore,s)),i.setAppCheckTokenChangeListener((s,o)=>sg(e.remoteStore,o)),i._onlineComponents=e}async function kI(i){if(!i._offlineComponents)if(i._uninitializedComponentsProvider){ne("FirestoreClient","Using user provided OfflineComponentProvider");try{await zh(i,i._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(o){return o.name==="FirebaseError"?o.code===W.FAILED_PRECONDITION||o.code===W.UNIMPLEMENTED:!(typeof DOMException<"u"&&o instanceof DOMException)||o.code===22||o.code===20||o.code===11}(t))throw t;ro("Error using user provided cache. Falling back to memory cache: "+t),await zh(i,new xu)}}else ne("FirestoreClient","Using default OfflineComponentProvider"),await zh(i,new AI(void 0));return i._offlineComponents}async function n_(i){return i._onlineComponents||(i._uninitializedComponentsProvider?(ne("FirestoreClient","Using user provided OnlineComponentProvider"),await hg(i,i._uninitializedComponentsProvider._online)):(ne("FirestoreClient","Using default OnlineComponentProvider"),await hg(i,new ud))),i._onlineComponents}function PI(i){return n_(i).then(e=>e.syncEngine)}async function NI(i){const e=await n_(i),t=e.eventManager;return t.onListen=dI.bind(null,e.syncEngine),t.onUnlisten=mI.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=fI.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=gI.bind(null,e.syncEngine),t}function xI(i,e,t={}){const s=new ui;return i.asyncQueue.enqueueAndForget(async()=>function(u,h,m,g,v){const w=new RI({next:M=>{w.eu(),h.enqueueAndForget(()=>iI(u,k)),M.fromCache&&g.source==="server"?v.reject(new se(W.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):v.resolve(M)},error:M=>v.reject(M)}),k=new aI(m,w,{includeMetadataChanges:!0,ua:!0});return rI(u,k)}(await NI(i),i.asyncQueue,e,t,s)),s.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function r_(i){const e={};return i.timeoutSeconds!==void 0&&(e.timeoutSeconds=i.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dg=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function i_(i,e,t){if(!t)throw new se(W.INVALID_ARGUMENT,`Function ${i}() cannot be called with an empty ${e}.`)}function DI(i,e,t,s){if(e===!0&&s===!0)throw new se(W.INVALID_ARGUMENT,`${i} and ${t} cannot be used together.`)}function fg(i){if(!de.isDocumentKey(i))throw new se(W.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${i} has ${i.length}.`)}function pg(i){if(de.isDocumentKey(i))throw new se(W.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${i} has ${i.length}.`)}function Xu(i){if(i===void 0)return"undefined";if(i===null)return"null";if(typeof i=="string")return i.length>20&&(i=`${i.substring(0,20)}...`),JSON.stringify(i);if(typeof i=="number"||typeof i=="boolean")return""+i;if(typeof i=="object"){if(i instanceof Array)return"an array";{const e=function(s){return s.constructor?s.constructor.name:null}(i);return e?`a custom ${e} object`:"an object"}}return typeof i=="function"?"a function":ve()}function ka(i,e){if("_delegate"in i&&(i=i._delegate),!(i instanceof e)){if(e.name===i.constructor.name)throw new se(W.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Xu(i);throw new se(W.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mg{constructor(e){var t,s;if(e.host===void 0){if(e.ssl!==void 0)throw new se(W.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new se(W.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}DI("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=r_((s=e.experimentalLongPollingOptions)!==null&&s!==void 0?s:{}),function(u){if(u.timeoutSeconds!==void 0){if(isNaN(u.timeoutSeconds))throw new se(W.INVALID_ARGUMENT,`invalid long polling timeout: ${u.timeoutSeconds} (must not be NaN)`);if(u.timeoutSeconds<5)throw new se(W.INVALID_ARGUMENT,`invalid long polling timeout: ${u.timeoutSeconds} (minimum allowed value is 5)`);if(u.timeoutSeconds>30)throw new se(W.INVALID_ARGUMENT,`invalid long polling timeout: ${u.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(s,o){return s.timeoutSeconds===o.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Yu{constructor(e,t,s,o){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=s,this._app=o,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new mg({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new se(W.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new se(W.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new mg(e),e.credentials!==void 0&&(this._authCredentials=function(s){if(!s)return new jE;switch(s.type){case"firstParty":return new qE(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new se(W.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const s=dg.get(t);s&&(ne("ComponentProvider","Removing Datastore"),dg.delete(t),s.terminate())}(this),Promise.resolve()}}function VI(i,e,t,s={}){var o;const u=(i=ka(i,Yu))._getSettings(),h=`${e}:${t}`;if(u.host!=="firestore.googleapis.com"&&u.host!==h&&ro("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),i._setSettings(Object.assign(Object.assign({},u),{host:h,ssl:!1})),s.mockUserToken){let m,g;if(typeof s.mockUserToken=="string")m=s.mockUserToken,g=Mt.MOCK_USER;else{m=g0(s.mockUserToken,(o=i._app)===null||o===void 0?void 0:o.options.projectId);const v=s.mockUserToken.sub||s.mockUserToken.user_id;if(!v)throw new se(W.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");g=new Mt(v)}i._authCredentials=new zE(new ny(m,g))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yo{constructor(e,t,s){this.converter=t,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new yo(this.firestore,e,this._query)}}class yn{constructor(e,t,s){this.converter=t,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ci(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new yn(this.firestore,e,this._key)}}class ci extends yo{constructor(e,t,s){super(e,t,fy(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new yn(this.firestore,null,new de(e))}withConverter(e){return new ci(this.firestore,e,this._path)}}function Pa(i,e,...t){if(i=_n(i),i_("collection","path",e),i instanceof Yu){const s=Ke.fromString(e,...t);return pg(s),new ci(i,null,s)}{if(!(i instanceof yn||i instanceof ci))throw new se(W.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=i._path.child(Ke.fromString(e,...t));return pg(s),new ci(i.firestore,null,s)}}function s_(i,e,...t){if(i=_n(i),arguments.length===1&&(e=ry.newId()),i_("doc","path",e),i instanceof Yu){const s=Ke.fromString(e,...t);return fg(s),new yn(i,null,new de(s))}{if(!(i instanceof yn||i instanceof ci))throw new se(W.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=i._path.child(Ke.fromString(e,...t));return fg(s),new yn(i.firestore,i instanceof ci?i.converter:null,new de(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gg{constructor(e=Promise.resolve()){this.Iu=[],this.du=!1,this.Eu=[],this.Au=null,this.Ru=!1,this.Vu=!1,this.mu=[],this.r_=new jy(this,"async_queue_retry"),this.fu=()=>{const s=jh();s&&ne("AsyncQueue","Visibility state changed to "+s.visibilityState),this.r_.Jo()},this.gu=e;const t=jh();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.fu)}get isShuttingDown(){return this.du}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.pu(),this.yu(e)}enterRestrictedMode(e){if(!this.du){this.du=!0,this.Vu=e||!1;const t=jh();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.fu)}}enqueue(e){if(this.pu(),this.du)return new Promise(()=>{});const t=new ui;return this.yu(()=>this.du&&this.Vu?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Iu.push(e),this.wu()))}async wu(){if(this.Iu.length!==0){try{await this.Iu[0](),this.Iu.shift(),this.r_.reset()}catch(e){if(!mo(e))throw e;ne("AsyncQueue","Operation failed with retryable error: "+e)}this.Iu.length>0&&this.r_.jo(()=>this.wu())}}yu(e){const t=this.gu.then(()=>(this.Ru=!0,e().catch(s=>{this.Au=s,this.Ru=!1;const o=function(h){let m=h.message||"";return h.stack&&(m=h.stack.includes(h.message)?h.stack:h.message+`
`+h.stack),m}(s);throw Tr("INTERNAL UNHANDLED ERROR: ",o),s}).then(s=>(this.Ru=!1,s))));return this.gu=t,t}enqueueAfterDelay(e,t,s){this.pu(),this.mu.indexOf(e)>-1&&(t=0);const o=Od.createAndSchedule(this,e,t,s,u=>this.Su(u));return this.Eu.push(o),o}pu(){this.Au&&ve()}verifyOperationInProgress(){}async bu(){let e;do e=this.gu,await e;while(e!==this.gu)}Du(e){for(const t of this.Eu)if(t.timerId===e)return!0;return!1}vu(e){return this.bu().then(()=>{this.Eu.sort((t,s)=>t.targetTimeMs-s.targetTimeMs);for(const t of this.Eu)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.bu()})}Cu(e){this.mu.push(e)}Su(e){const t=this.Eu.indexOf(e);this.Eu.splice(t,1)}}class Ju extends Yu{constructor(e,t,s,o){super(e,t,s,o),this.type="firestore",this._queue=new gg,this._persistenceKey=(o==null?void 0:o.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new gg(e),this._firestoreClient=void 0,await e}}}function OI(i,e){const t=typeof i=="object"?i:Gg(),s=typeof i=="string"?i:"(default)",o=gd(t,"firestore").getImmediate({identifier:s});if(!o._initialized){const u=p0("firestore");u&&VI(o,...u)}return o}function o_(i){if(i._terminated)throw new se(W.FAILED_PRECONDITION,"The client has already been terminated.");return i._firestoreClient||LI(i),i._firestoreClient}function LI(i){var e,t,s;const o=i._freezeSettings(),u=function(m,g,v,w){return new sw(m,g,v,w.host,w.ssl,w.experimentalForceLongPolling,w.experimentalAutoDetectLongPolling,r_(w.experimentalLongPollingOptions),w.useFetchStreams)}(i._databaseId,((e=i._app)===null||e===void 0?void 0:e.options.appId)||"",i._persistenceKey,o);i._componentsProvider||!((t=o.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((s=o.localCache)===null||s===void 0)&&s._onlineComponentProvider)&&(i._componentsProvider={_offline:o.localCache._offlineComponentProvider,_online:o.localCache._onlineComponentProvider}),i._firestoreClient=new CI(i._authCredentials,i._appCheckCredentials,i._queue,u,i._componentsProvider&&function(m){const g=m==null?void 0:m._online.build();return{_offline:m==null?void 0:m._offline.build(g),_online:g}}(i._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uo{constructor(e){this._byteString=e}static fromBase64String(e){try{return new uo(kt.fromBase64String(e))}catch(t){throw new se(W.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new uo(kt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fd{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new se(W.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ct(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a_{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ud{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new se(W.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new se(W.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Pe(this._lat,e._lat)||Pe(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jd{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(s,o){if(s.length!==o.length)return!1;for(let u=0;u<s.length;++u)if(s[u]!==o[u])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MI=/^__.*__$/;class bI{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return this.fieldMask!==null?new Ji(e,this.data,this.fieldMask,t,this.fieldTransforms):new Oa(e,this.data,t,this.fieldTransforms)}}function l_(i){switch(i){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ve()}}class zd{constructor(e,t,s,o,u,h){this.settings=e,this.databaseId=t,this.serializer=s,this.ignoreUndefinedProperties=o,u===void 0&&this.Fu(),this.fieldTransforms=u||[],this.fieldMask=h||[]}get path(){return this.settings.path}get Mu(){return this.settings.Mu}xu(e){return new zd(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Ou(e){var t;const s=(t=this.path)===null||t===void 0?void 0:t.child(e),o=this.xu({path:s,Nu:!1});return o.Bu(e),o}Lu(e){var t;const s=(t=this.path)===null||t===void 0?void 0:t.child(e),o=this.xu({path:s,Nu:!1});return o.Fu(),o}ku(e){return this.xu({path:void 0,Nu:!0})}qu(e){return Du(e,this.settings.methodName,this.settings.Qu||!1,this.path,this.settings.Ku)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}Fu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Bu(this.path.get(e))}Bu(e){if(e.length===0)throw this.qu("Document fields must not be empty");if(l_(this.Mu)&&MI.test(e))throw this.qu('Document fields cannot begin and end with "__"')}}class FI{constructor(e,t,s){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=s||Gu(e)}$u(e,t,s,o=!1){return new zd({Mu:e,methodName:t,Ku:s,path:Ct.emptyPath(),Nu:!1,Qu:o},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function u_(i){const e=i._freezeSettings(),t=Gu(i._databaseId);return new FI(i._databaseId,!!e.ignoreUndefinedProperties,t)}function UI(i,e,t,s,o,u={}){const h=i.$u(u.merge||u.mergeFields?2:0,e,t,o);d_("Data must be an object, but it was:",h,s);const m=c_(s,h);let g,v;if(u.merge)g=new On(h.fieldMask),v=h.fieldTransforms;else if(u.mergeFields){const w=[];for(const k of u.mergeFields){const M=zI(e,k,t);if(!h.contains(M))throw new se(W.INVALID_ARGUMENT,`Field '${M}' is specified in your field mask but missing from your input data.`);$I(w,M)||w.push(M)}g=new On(w),v=h.fieldTransforms.filter(k=>g.covers(k.field))}else g=null,v=h.fieldTransforms;return new bI(new gn(m),g,v)}function jI(i,e,t,s=!1){return Bd(t,i.$u(s?4:3,e))}function Bd(i,e){if(h_(i=_n(i)))return d_("Unsupported field value:",e,i),c_(i,e);if(i instanceof a_)return function(s,o){if(!l_(o.Mu))throw o.qu(`${s._methodName}() can only be used with update() and set()`);if(!o.path)throw o.qu(`${s._methodName}() is not currently supported inside arrays`);const u=s._toFieldTransform(o);u&&o.fieldTransforms.push(u)}(i,e),null;if(i===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),i instanceof Array){if(e.settings.Nu&&e.Mu!==4)throw e.qu("Nested arrays are not supported");return function(s,o){const u=[];let h=0;for(const m of s){let g=Bd(m,o.ku(h));g==null&&(g={nullValue:"NULL_VALUE"}),u.push(g),h++}return{arrayValue:{values:u}}}(i,e)}return function(s,o){if((s=_n(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return Cw(o.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const u=ft.fromDate(s);return{timestampValue:ku(o.serializer,u)}}if(s instanceof ft){const u=new ft(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:ku(o.serializer,u)}}if(s instanceof Ud)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof uo)return{bytesValue:Ny(o.serializer,s._byteString)};if(s instanceof yn){const u=o.databaseId,h=s.firestore._databaseId;if(!h.isEqual(u))throw o.qu(`Document reference is for database ${h.projectId}/${h.database} but should be for database ${u.projectId}/${u.database}`);return{referenceValue:Rd(s.firestore._databaseId||o.databaseId,s._key.path)}}if(s instanceof jd)return function(h,m){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:h.toArray().map(g=>{if(typeof g!="number")throw m.qu("VectorValues must only contain numeric values.");return Td(m.serializer,g)})}}}}}}(s,o);throw o.qu(`Unsupported field value: ${Xu(s)}`)}(i,e)}function c_(i,e){const t={};return iy(i)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Xi(i,(s,o)=>{const u=Bd(o,e.Ou(s));u!=null&&(t[s]=u)}),{mapValue:{fields:t}}}function h_(i){return!(typeof i!="object"||i===null||i instanceof Array||i instanceof Date||i instanceof ft||i instanceof Ud||i instanceof uo||i instanceof yn||i instanceof a_||i instanceof jd)}function d_(i,e,t){if(!h_(t)||!function(o){return typeof o=="object"&&o!==null&&(Object.getPrototypeOf(o)===Object.prototype||Object.getPrototypeOf(o)===null)}(t)){const s=Xu(t);throw s==="an object"?e.qu(i+" a custom object"):e.qu(i+" "+s)}}function zI(i,e,t){if((e=_n(e))instanceof Fd)return e._internalPath;if(typeof e=="string")return f_(i,e);throw Du("Field path arguments must be of type string or ",i,!1,void 0,t)}const BI=new RegExp("[~\\*/\\[\\]]");function f_(i,e,t){if(e.search(BI)>=0)throw Du(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,i,!1,void 0,t);try{return new Fd(...e.split("."))._internalPath}catch{throw Du(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,i,!1,void 0,t)}}function Du(i,e,t,s,o){const u=s&&!s.isEmpty(),h=o!==void 0;let m=`Function ${e}() called with invalid data`;t&&(m+=" (via `toFirestore()`)"),m+=". ";let g="";return(u||h)&&(g+=" (found",u&&(g+=` in field ${s}`),h&&(g+=` in document ${o}`),g+=")"),new se(W.INVALID_ARGUMENT,m+i+g)}function $I(i,e){return i.some(t=>t.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p_{constructor(e,t,s,o,u){this._firestore=e,this._userDataWriter=t,this._key=s,this._document=o,this._converter=u}get id(){return this._key.path.lastSegment()}get ref(){return new yn(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new qI(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field($d("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class qI extends p_{data(){return super.data()}}function $d(i,e){return typeof e=="string"?f_(i,e):e instanceof Fd?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HI(i){if(i.limitType==="L"&&i.explicitOrderBy.length===0)throw new se(W.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class qd{}class WI extends qd{}function Hd(i,e,...t){let s=[];e instanceof qd&&s.push(e),s=s.concat(t),function(u){const h=u.filter(g=>g instanceof Gd).length,m=u.filter(g=>g instanceof Zu).length;if(h>1||h>0&&m>0)throw new se(W.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(s);for(const o of s)i=o._apply(i);return i}class Zu extends WI{constructor(e,t,s){super(),this._field=e,this._op=t,this._value=s,this.type="where"}static _create(e,t,s){return new Zu(e,t,s)}_apply(e){const t=this._parse(e);return m_(e._query,t),new yo(e.firestore,e.converter,ed(e._query,t))}_parse(e){const t=u_(e.firestore);return function(u,h,m,g,v,w,k){let M;if(v.isKeyField()){if(w==="array-contains"||w==="array-contains-any")throw new se(W.INVALID_ARGUMENT,`Invalid Query. You can't perform '${w}' queries on documentId().`);if(w==="in"||w==="not-in"){_g(k,w);const z=[];for(const H of k)z.push(yg(g,u,H));M={arrayValue:{values:z}}}else M=yg(g,u,k)}else w!=="in"&&w!=="not-in"&&w!=="array-contains-any"||_g(k,w),M=jI(m,h,k,w==="in"||w==="not-in");return at.create(v,w,M)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function Wd(i,e,t){const s=e,o=$d("where",i);return Zu._create(o,s,t)}class Gd extends qd{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new Gd(e,t)}_parse(e){const t=this._queryConstraints.map(s=>s._parse(e)).filter(s=>s.getFilters().length>0);return t.length===1?t[0]:Ln.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:(function(o,u){let h=o;const m=u.getFlattenedFilters();for(const g of m)m_(h,g),h=ed(h,g)}(e._query,t),new yo(e.firestore,e.converter,ed(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function yg(i,e,t){if(typeof(t=_n(t))=="string"){if(t==="")throw new se(W.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!py(e)&&t.indexOf("/")!==-1)throw new se(W.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const s=e.path.child(Ke.fromString(t));if(!de.isDocumentKey(s))throw new se(W.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);return Fm(i,new de(s))}if(t instanceof yn)return Fm(i,t._key);throw new se(W.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Xu(t)}.`)}function _g(i,e){if(!Array.isArray(i)||i.length===0)throw new se(W.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function m_(i,e){const t=function(o,u){for(const h of o)for(const m of h.getFlattenedFilters())if(u.indexOf(m.op)>=0)return m.op;return null}(i.filters,function(o){switch(o){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(t!==null)throw t===e.op?new se(W.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new se(W.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class GI{convertValue(e,t="none"){switch(pi(e)){case 0:return null;case 1:return e.booleanValue;case 2:return rt(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(fi(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw ve()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const s={};return Xi(e,(o,u)=>{s[o]=this.convertValue(u,t)}),s}convertVectorValue(e){var t,s,o;const u=(o=(s=(t=e.fields)===null||t===void 0?void 0:t.value.arrayValue)===null||s===void 0?void 0:s.values)===null||o===void 0?void 0:o.map(h=>rt(h.doubleValue));return new jd(u)}convertGeoPoint(e){return new Ud(rt(e.latitude),rt(e.longitude))}convertArray(e,t){return(e.values||[]).map(s=>this.convertValue(s,t))}convertServerTimestamp(e,t){switch(t){case"previous":const s=zu(e);return s==null?null:this.convertValue(s,t);case"estimate":return this.convertTimestamp(Ia(e));default:return null}}convertTimestamp(e){const t=di(e);return new ft(t.seconds,t.nanos)}convertDocumentKey(e,t){const s=Ke.fromString(e);Fe(My(s));const o=new Sa(s.get(1),s.get(3)),u=new de(s.popFirst(5));return o.isEqual(t)||Tr(`Document ${u} contains a document reference within a different database (${o.projectId}/${o.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function KI(i,e,t){let s;return s=i?i.toFirestore(e):e,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lu{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class QI extends p_{constructor(e,t,s,o,u,h){super(e,t,s,o,h),this._firestore=e,this._firestoreImpl=e,this.metadata=u}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new mu(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const s=this._document.data.field($d("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,t.serverTimestamps)}}}class mu extends QI{data(e={}){return super.data(e)}}class XI{constructor(e,t,s,o){this._firestore=e,this._userDataWriter=t,this._snapshot=o,this.metadata=new lu(o.hasPendingWrites,o.fromCache),this.query=s}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(s=>{e.call(t,new mu(this._firestore,this._userDataWriter,s.key,s,new lu(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new se(W.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(o,u){if(o._snapshot.oldDocs.isEmpty()){let h=0;return o._snapshot.docChanges.map(m=>{const g=new mu(o._firestore,o._userDataWriter,m.doc.key,m.doc,new lu(o._snapshot.mutatedKeys.has(m.doc.key),o._snapshot.fromCache),o.query.converter);return m.doc,{type:"added",doc:g,oldIndex:-1,newIndex:h++}})}{let h=o._snapshot.oldDocs;return o._snapshot.docChanges.filter(m=>u||m.type!==3).map(m=>{const g=new mu(o._firestore,o._userDataWriter,m.doc.key,m.doc,new lu(o._snapshot.mutatedKeys.has(m.doc.key),o._snapshot.fromCache),o.query.converter);let v=-1,w=-1;return m.type!==0&&(v=h.indexOf(m.doc.key),h=h.delete(m.doc.key)),m.type!==1&&(h=h.add(m.doc),w=h.indexOf(m.doc.key)),{type:YI(m.type),doc:g,oldIndex:v,newIndex:w}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function YI(i){switch(i){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ve()}}class JI extends GI{constructor(e){super(),this.firestore=e}convertBytes(e){return new uo(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new yn(this.firestore,null,t)}}function Kd(i){i=ka(i,yo);const e=ka(i.firestore,Ju),t=o_(e),s=new JI(e);return HI(i._query),xI(t,i._query).then(o=>new XI(e,s,i,o))}function ZI(i){return y_(ka(i.firestore,Ju),[new Id(i._key,Qn.none())])}function g_(i,e){const t=ka(i.firestore,Ju),s=s_(i),o=KI(i.converter,e);return y_(t,[UI(u_(i.firestore),"addDoc",s._key,o,i.converter!==null,{}).toMutation(s._key,Qn.exists(!1))]).then(()=>s)}function y_(i,e){return function(s,o){const u=new ui;return s.asyncQueue.enqueueAndForget(async()=>yI(await PI(s),o,u)),u.promise}(o_(i),e)}(function(e,t=!0){(function(o){fo=o})(ho),no(new Gi("firestore",(s,{instanceIdentifier:o,options:u})=>{const h=s.getProvider("app").getImmediate(),m=new Ju(new BE(s.getProvider("auth-internal")),new WE(s.getProvider("app-check-internal")),function(v,w){if(!Object.prototype.hasOwnProperty.apply(v.options,["projectId"]))throw new se(W.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Sa(v.options.projectId,w)}(h,o),h);return u=Object.assign({useFetchStreams:t},u),m._setSettings(u),m},"PUBLIC").setMultipleInstances(!0)),ai(Dm,"4.7.6",e),ai(Dm,"4.7.6","esm2017")})();var e1="firebase",t1="11.2.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ai(e1,t1,"app");function Qd(i,e){var t={};for(var s in i)Object.prototype.hasOwnProperty.call(i,s)&&e.indexOf(s)<0&&(t[s]=i[s]);if(i!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,s=Object.getOwnPropertySymbols(i);o<s.length;o++)e.indexOf(s[o])<0&&Object.prototype.propertyIsEnumerable.call(i,s[o])&&(t[s[o]]=i[s[o]]);return t}function __(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const n1=__,v_=new xa("auth","Firebase",__());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vu=new pd("@firebase/auth");function r1(i,...e){Vu.logLevel<=Re.WARN&&Vu.warn(`Auth (${ho}): ${i}`,...e)}function gu(i,...e){Vu.logLevel<=Re.ERROR&&Vu.error(`Auth (${ho}): ${i}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sr(i,...e){throw Xd(i,...e)}function Yn(i,...e){return Xd(i,...e)}function E_(i,e,t){const s=Object.assign(Object.assign({},n1()),{[e]:t});return new xa("auth","Firebase",s).create(e,{appName:i.name})}function Wi(i){return E_(i,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Xd(i,...e){if(typeof i!="string"){const t=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=i.name),i._errorFactory.create(t,...s)}return v_.create(i,...e)}function Ee(i,e,...t){if(!i)throw Xd(e,...t)}function _r(i){const e="INTERNAL ASSERTION FAILED: "+i;throw gu(e),new Error(e)}function Ar(i,e){i||_r(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cd(){var i;return typeof self<"u"&&((i=self.location)===null||i===void 0?void 0:i.href)||""}function i1(){return vg()==="http:"||vg()==="https:"}function vg(){var i;return typeof self<"u"&&((i=self.location)===null||i===void 0?void 0:i.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function s1(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(i1()||E0()||"connection"in navigator)?navigator.onLine:!0}function o1(){if(typeof navigator>"u")return null;const i=navigator;return i.languages&&i.languages[0]||i.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fa{constructor(e,t){this.shortDelay=e,this.longDelay=t,Ar(t>e,"Short delay should be less than long delay!"),this.isMobile=y0()||w0()}get(){return s1()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yd(i,e){Ar(i.emulator,"Emulator should always be set here");const{url:t}=i.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w_{static initialize(e,t,s){this.fetchImpl=e,t&&(this.headersImpl=t),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;_r("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;_r("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;_r("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const a1={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const l1=new Fa(3e4,6e4);function Jd(i,e){return i.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:i.tenantId}):e}async function _o(i,e,t,s,o={}){return T_(i,o,async()=>{let u={},h={};s&&(e==="GET"?h=s:u={body:JSON.stringify(s)});const m=Da(Object.assign({key:i.config.apiKey},h)).slice(1),g=await i._getAdditionalHeaders();g["Content-Type"]="application/json",i.languageCode&&(g["X-Firebase-Locale"]=i.languageCode);const v=Object.assign({method:e,headers:g},u);return v0()||(v.referrerPolicy="no-referrer"),w_.fetch()(I_(i,i.config.apiHost,t,m),v)})}async function T_(i,e,t){i._canInitEmulator=!1;const s=Object.assign(Object.assign({},a1),e);try{const o=new c1(i),u=await Promise.race([t(),o.promise]);o.clearNetworkTimeout();const h=await u.json();if("needConfirmation"in h)throw uu(i,"account-exists-with-different-credential",h);if(u.ok&&!("errorMessage"in h))return h;{const m=u.ok?h.errorMessage:h.error.message,[g,v]=m.split(" : ");if(g==="FEDERATED_USER_ID_ALREADY_LINKED")throw uu(i,"credential-already-in-use",h);if(g==="EMAIL_EXISTS")throw uu(i,"email-already-in-use",h);if(g==="USER_DISABLED")throw uu(i,"user-disabled",h);const w=s[g]||g.toLowerCase().replace(/[_\s]+/g,"-");if(v)throw E_(i,w,v);Sr(i,w)}}catch(o){if(o instanceof Rr)throw o;Sr(i,"network-request-failed",{message:String(o)})}}async function u1(i,e,t,s,o={}){const u=await _o(i,e,t,s,o);return"mfaPendingCredential"in u&&Sr(i,"multi-factor-auth-required",{_serverResponse:u}),u}function I_(i,e,t,s){const o=`${e}${t}?${s}`;return i.config.emulator?Yd(i.config,o):`${i.config.apiScheme}://${o}`}class c1{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,s)=>{this.timer=setTimeout(()=>s(Yn(this.auth,"network-request-failed")),l1.get())})}}function uu(i,e,t){const s={appName:i.name};t.email&&(s.email=t.email),t.phoneNumber&&(s.phoneNumber=t.phoneNumber);const o=Yn(i,e,s);return o.customData._tokenResponse=t,o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function h1(i,e){return _o(i,"POST","/v1/accounts:delete",e)}async function S_(i,e){return _o(i,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wa(i){if(i)try{const e=new Date(Number(i));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function d1(i,e=!1){const t=_n(i),s=await t.getIdToken(e),o=Zd(s);Ee(o&&o.exp&&o.auth_time&&o.iat,t.auth,"internal-error");const u=typeof o.firebase=="object"?o.firebase:void 0,h=u==null?void 0:u.sign_in_provider;return{claims:o,token:s,authTime:wa(Bh(o.auth_time)),issuedAtTime:wa(Bh(o.iat)),expirationTime:wa(Bh(o.exp)),signInProvider:h||null,signInSecondFactor:(u==null?void 0:u.sign_in_second_factor)||null}}function Bh(i){return Number(i)*1e3}function Zd(i){const[e,t,s]=i.split(".");if(e===void 0||t===void 0||s===void 0)return gu("JWT malformed, contained fewer than 3 sections"),null;try{const o=jg(t);return o?JSON.parse(o):(gu("Failed to decode base64 JWT payload"),null)}catch(o){return gu("Caught error parsing JWT payload as JSON",o==null?void 0:o.toString()),null}}function Eg(i){const e=Zd(i);return Ee(e,"internal-error"),Ee(typeof e.exp<"u","internal-error"),Ee(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Na(i,e,t=!1){if(t)return e;try{return await e}catch(s){throw s instanceof Rr&&f1(s)&&i.auth.currentUser===i&&await i.auth.signOut(),s}}function f1({code:i}){return i==="auth/user-disabled"||i==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p1{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const o=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,o)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hd{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=wa(this.lastLoginAt),this.creationTime=wa(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ou(i){var e;const t=i.auth,s=await i.getIdToken(),o=await Na(i,S_(t,{idToken:s}));Ee(o==null?void 0:o.users.length,t,"internal-error");const u=o.users[0];i._notifyReloadListener(u);const h=!((e=u.providerUserInfo)===null||e===void 0)&&e.length?A_(u.providerUserInfo):[],m=g1(i.providerData,h),g=i.isAnonymous,v=!(i.email&&u.passwordHash)&&!(m!=null&&m.length),w=g?v:!1,k={uid:u.localId,displayName:u.displayName||null,photoURL:u.photoUrl||null,email:u.email||null,emailVerified:u.emailVerified||!1,phoneNumber:u.phoneNumber||null,tenantId:u.tenantId||null,providerData:m,metadata:new hd(u.createdAt,u.lastLoginAt),isAnonymous:w};Object.assign(i,k)}async function m1(i){const e=_n(i);await Ou(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function g1(i,e){return[...i.filter(s=>!e.some(o=>o.providerId===s.providerId)),...e]}function A_(i){return i.map(e=>{var{providerId:t}=e,s=Qd(e,["providerId"]);return{providerId:t,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function y1(i,e){const t=await T_(i,{},async()=>{const s=Da({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:o,apiKey:u}=i.config,h=I_(i,o,"/v1/token",`key=${u}`),m=await i._getAdditionalHeaders();return m["Content-Type"]="application/x-www-form-urlencoded",w_.fetch()(h,{method:"POST",headers:m,body:s})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function _1(i,e){return _o(i,"POST","/v2/accounts:revokeToken",Jd(i,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Js{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Ee(e.idToken,"internal-error"),Ee(typeof e.idToken<"u","internal-error"),Ee(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Eg(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){Ee(e.length!==0,"internal-error");const t=Eg(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(Ee(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:s,refreshToken:o,expiresIn:u}=await y1(e,t);this.updateTokensAndExpiration(s,o,Number(u))}updateTokensAndExpiration(e,t,s){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,t){const{refreshToken:s,accessToken:o,expirationTime:u}=t,h=new Js;return s&&(Ee(typeof s=="string","internal-error",{appName:e}),h.refreshToken=s),o&&(Ee(typeof o=="string","internal-error",{appName:e}),h.accessToken=o),u&&(Ee(typeof u=="number","internal-error",{appName:e}),h.expirationTime=u),h}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Js,this.toJSON())}_performRefresh(){return _r("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jr(i,e){Ee(typeof i=="string"||typeof i>"u","internal-error",{appName:e})}class vr{constructor(e){var{uid:t,auth:s,stsTokenManager:o}=e,u=Qd(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new p1(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=s,this.stsTokenManager=o,this.accessToken=o.accessToken,this.displayName=u.displayName||null,this.email=u.email||null,this.emailVerified=u.emailVerified||!1,this.phoneNumber=u.phoneNumber||null,this.photoURL=u.photoURL||null,this.isAnonymous=u.isAnonymous||!1,this.tenantId=u.tenantId||null,this.providerData=u.providerData?[...u.providerData]:[],this.metadata=new hd(u.createdAt||void 0,u.lastLoginAt||void 0)}async getIdToken(e){const t=await Na(this,this.stsTokenManager.getToken(this.auth,e));return Ee(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return d1(this,e)}reload(){return m1(this)}_assign(e){this!==e&&(Ee(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new vr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){Ee(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),t&&await Ou(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(ri(this.auth.app))return Promise.reject(Wi(this.auth));const e=await this.getIdToken();return await Na(this,h1(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var s,o,u,h,m,g,v,w;const k=(s=t.displayName)!==null&&s!==void 0?s:void 0,M=(o=t.email)!==null&&o!==void 0?o:void 0,z=(u=t.phoneNumber)!==null&&u!==void 0?u:void 0,H=(h=t.photoURL)!==null&&h!==void 0?h:void 0,G=(m=t.tenantId)!==null&&m!==void 0?m:void 0,B=(g=t._redirectEventId)!==null&&g!==void 0?g:void 0,ue=(v=t.createdAt)!==null&&v!==void 0?v:void 0,ce=(w=t.lastLoginAt)!==null&&w!==void 0?w:void 0,{uid:ae,emailVerified:ge,isAnonymous:Oe,providerData:ye,stsTokenManager:R}=t;Ee(ae&&R,e,"internal-error");const T=Js.fromJSON(this.name,R);Ee(typeof ae=="string",e,"internal-error"),Jr(k,e.name),Jr(M,e.name),Ee(typeof ge=="boolean",e,"internal-error"),Ee(typeof Oe=="boolean",e,"internal-error"),Jr(z,e.name),Jr(H,e.name),Jr(G,e.name),Jr(B,e.name),Jr(ue,e.name),Jr(ce,e.name);const A=new vr({uid:ae,auth:e,email:M,emailVerified:ge,displayName:k,isAnonymous:Oe,photoURL:H,phoneNumber:z,tenantId:G,stsTokenManager:T,createdAt:ue,lastLoginAt:ce});return ye&&Array.isArray(ye)&&(A.providerData=ye.map(P=>Object.assign({},P))),B&&(A._redirectEventId=B),A}static async _fromIdTokenResponse(e,t,s=!1){const o=new Js;o.updateFromServerResponse(t);const u=new vr({uid:t.localId,auth:e,stsTokenManager:o,isAnonymous:s});return await Ou(u),u}static async _fromGetAccountInfoResponse(e,t,s){const o=t.users[0];Ee(o.localId!==void 0,"internal-error");const u=o.providerUserInfo!==void 0?A_(o.providerUserInfo):[],h=!(o.email&&o.passwordHash)&&!(u!=null&&u.length),m=new Js;m.updateFromIdToken(s);const g=new vr({uid:o.localId,auth:e,stsTokenManager:m,isAnonymous:h}),v={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:u,metadata:new hd(o.createdAt,o.lastLoginAt),isAnonymous:!(o.email&&o.passwordHash)&&!(u!=null&&u.length)};return Object.assign(g,v),g}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wg=new Map;function Er(i){Ar(i instanceof Function,"Expected a class definition");let e=wg.get(i);return e?(Ar(e instanceof i,"Instance stored in cache mismatched with class"),e):(e=new i,wg.set(i,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R_{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}R_.type="NONE";const Tg=R_;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yu(i,e,t){return`firebase:${i}:${e}:${t}`}class Zs{constructor(e,t,s){this.persistence=e,this.auth=t,this.userKey=s;const{config:o,name:u}=this.auth;this.fullUserKey=yu(this.userKey,o.apiKey,u),this.fullPersistenceKey=yu("persistence",o.apiKey,u),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?vr._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,s="authUser"){if(!t.length)return new Zs(Er(Tg),e,s);const o=(await Promise.all(t.map(async v=>{if(await v._isAvailable())return v}))).filter(v=>v);let u=o[0]||Er(Tg);const h=yu(s,e.config.apiKey,e.name);let m=null;for(const v of t)try{const w=await v._get(h);if(w){const k=vr._fromJSON(e,w);v!==u&&(m=k),u=v;break}}catch{}const g=o.filter(v=>v._shouldAllowMigration);return!u._shouldAllowMigration||!g.length?new Zs(u,e,s):(u=g[0],m&&await u._set(h,m.toJSON()),await Promise.all(t.map(async v=>{if(v!==u)try{await v._remove(h)}catch{}})),new Zs(u,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ig(i){const e=i.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(N_(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(C_(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(D_(e))return"Blackberry";if(V_(e))return"Webos";if(k_(e))return"Safari";if((e.includes("chrome/")||P_(e))&&!e.includes("edge/"))return"Chrome";if(x_(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=i.match(t);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function C_(i=Ft()){return/firefox\//i.test(i)}function k_(i=Ft()){const e=i.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function P_(i=Ft()){return/crios\//i.test(i)}function N_(i=Ft()){return/iemobile/i.test(i)}function x_(i=Ft()){return/android/i.test(i)}function D_(i=Ft()){return/blackberry/i.test(i)}function V_(i=Ft()){return/webos/i.test(i)}function ef(i=Ft()){return/iphone|ipad|ipod/i.test(i)||/macintosh/i.test(i)&&/mobile/i.test(i)}function v1(i=Ft()){var e;return ef(i)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function E1(){return T0()&&document.documentMode===10}function O_(i=Ft()){return ef(i)||x_(i)||V_(i)||D_(i)||/windows phone/i.test(i)||N_(i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function L_(i,e=[]){let t;switch(i){case"Browser":t=Ig(Ft());break;case"Worker":t=`${Ig(Ft())}-${i}`;break;default:t=i}const s=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${ho}/${s}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w1{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const s=u=>new Promise((h,m)=>{try{const g=e(u);h(g)}catch(g){m(g)}});s.onAbort=t,this.queue.push(s);const o=this.queue.length-1;return()=>{this.queue[o]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const s of this.queue)await s(e),s.onAbort&&t.push(s.onAbort)}catch(s){t.reverse();for(const o of t)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function T1(i,e={}){return _o(i,"GET","/v2/passwordPolicy",Jd(i,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const I1=6;class S1{constructor(e){var t,s,o,u;const h=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=h.minPasswordLength)!==null&&t!==void 0?t:I1,h.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=h.maxPasswordLength),h.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=h.containsLowercaseCharacter),h.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=h.containsUppercaseCharacter),h.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=h.containsNumericCharacter),h.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=h.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(o=(s=e.allowedNonAlphanumericCharacters)===null||s===void 0?void 0:s.join(""))!==null&&o!==void 0?o:"",this.forceUpgradeOnSignin=(u=e.forceUpgradeOnSignin)!==null&&u!==void 0?u:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,s,o,u,h,m;const g={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,g),this.validatePasswordCharacterOptions(e,g),g.isValid&&(g.isValid=(t=g.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),g.isValid&&(g.isValid=(s=g.meetsMaxPasswordLength)!==null&&s!==void 0?s:!0),g.isValid&&(g.isValid=(o=g.containsLowercaseLetter)!==null&&o!==void 0?o:!0),g.isValid&&(g.isValid=(u=g.containsUppercaseLetter)!==null&&u!==void 0?u:!0),g.isValid&&(g.isValid=(h=g.containsNumericCharacter)!==null&&h!==void 0?h:!0),g.isValid&&(g.isValid=(m=g.containsNonAlphanumericCharacter)!==null&&m!==void 0?m:!0),g}validatePasswordLengthOptions(e,t){const s=this.customStrengthOptions.minPasswordLength,o=this.customStrengthOptions.maxPasswordLength;s&&(t.meetsMinPasswordLength=e.length>=s),o&&(t.meetsMaxPasswordLength=e.length<=o)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let s;for(let o=0;o<e.length;o++)s=e.charAt(o),this.updatePasswordCharacterOptionsStatuses(t,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,t,s,o,u){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=o)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=u))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A1{constructor(e,t,s,o){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=s,this.config=o,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Sg(this),this.idTokenSubscription=new Sg(this),this.beforeStateQueue=new w1(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=v_,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=o.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Er(t)),this._initializationPromise=this.queue(async()=>{var s,o;if(!this._deleted&&(this.persistenceManager=await Zs.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((o=this.currentUser)===null||o===void 0?void 0:o.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await S_(this,{idToken:e}),s=await vr._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(s)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(ri(this.app)){const h=this.app.settings.authIdToken;return h?new Promise(m=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(h).then(m,m))}):this.directlySetCurrentUser(null)}const s=await this.assertedPersistence.getCurrentUser();let o=s,u=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const h=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,m=o==null?void 0:o._redirectEventId,g=await this.tryRedirectSignIn(e);(!h||h===m)&&(g!=null&&g.user)&&(o=g.user,u=!0)}if(!o)return this.directlySetCurrentUser(null);if(!o._redirectEventId){if(u)try{await this.beforeStateQueue.runMiddleware(o)}catch(h){o=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(h))}return o?this.reloadAndSetCurrentUserOrClear(o):this.directlySetCurrentUser(null)}return Ee(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===o._redirectEventId?this.directlySetCurrentUser(o):this.reloadAndSetCurrentUserOrClear(o)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Ou(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=o1()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(ri(this.app))return Promise.reject(Wi(this));const t=e?_n(e):null;return t&&Ee(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&Ee(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return ri(this.app)?Promise.reject(Wi(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return ri(this.app)?Promise.reject(Wi(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Er(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await T1(this),t=new S1(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new xa("auth","Firebase",e())}onAuthStateChanged(e,t,s){return this.registerStateListener(this.authStateSubscription,e,t,s)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,s){return this.registerStateListener(this.idTokenSubscription,e,t,s)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(s.tenantId=this.tenantId),await _1(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const s=await this.getOrInitRedirectPersistenceManager(t);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Er(e)||this._popupRedirectResolver;Ee(t,this,"argument-error"),this.redirectPersistenceManager=await Zs.create(this,[Er(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,s;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,s,o){if(this._deleted)return()=>{};const u=typeof t=="function"?t:t.next.bind(t);let h=!1;const m=this._isInitialized?Promise.resolve():this._initializationPromise;if(Ee(m,this,"internal-error"),m.then(()=>{h||u(this.currentUser)}),typeof t=="function"){const g=e.addObserver(t,s,o);return()=>{h=!0,g()}}else{const g=e.addObserver(t);return()=>{h=!0,g()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Ee(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=L_(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(t["X-Firebase-Client"]=s);const o=await this._getAppCheckToken();return o&&(t["X-Firebase-AppCheck"]=o),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&r1(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function tf(i){return _n(i)}class Sg{constructor(e){this.auth=e,this.observer=null,this.addObserver=N0(t=>this.observer=t)}get next(){return Ee(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let nf={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function R1(i){nf=i}function C1(i){return nf.loadJS(i)}function k1(){return nf.gapiScript}function P1(i){return`__${i}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function N1(i,e){const t=gd(i,"auth");if(t.isInitialized()){const o=t.getImmediate(),u=t.getOptions();if(wu(u,e??{}))return o;Sr(o,"already-initialized")}return t.initialize({options:e})}function x1(i,e){const t=(e==null?void 0:e.persistence)||[],s=(Array.isArray(t)?t:[t]).map(Er);e!=null&&e.errorMap&&i._updateErrorMap(e.errorMap),i._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function D1(i,e,t){const s=tf(i);Ee(s._canInitEmulator,s,"emulator-config-failed"),Ee(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const o=!1,u=M_(e),{host:h,port:m}=V1(e),g=m===null?"":`:${m}`;s.config.emulator={url:`${u}//${h}${g}/`},s.settings.appVerificationDisabledForTesting=!0,s.emulatorConfig=Object.freeze({host:h,port:m,protocol:u.replace(":",""),options:Object.freeze({disableWarnings:o})}),O1()}function M_(i){const e=i.indexOf(":");return e<0?"":i.substr(0,e+1)}function V1(i){const e=M_(i),t=/(\/\/)?([^?#/]+)/.exec(i.substr(e.length));if(!t)return{host:"",port:null};const s=t[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(s);if(o){const u=o[1];return{host:u,port:Ag(s.substr(u.length+1))}}else{const[u,h]=s.split(":");return{host:u,port:Ag(h)}}}function Ag(i){if(!i)return null;const e=Number(i);return isNaN(e)?null:e}function O1(){function i(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",i):i())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b_{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return _r("not implemented")}_getIdTokenResponse(e){return _r("not implemented")}_linkToIdToken(e,t){return _r("not implemented")}_getReauthenticationResolver(e){return _r("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eo(i,e){return u1(i,"POST","/v1/accounts:signInWithIdp",Jd(i,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const L1="http://localhost";class Qi extends b_{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Qi(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Sr("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:o}=t,u=Qd(t,["providerId","signInMethod"]);if(!s||!o)return null;const h=new Qi(s,o);return h.idToken=u.idToken||void 0,h.accessToken=u.accessToken||void 0,h.secret=u.secret,h.nonce=u.nonce,h.pendingToken=u.pendingToken||null,h}_getIdTokenResponse(e){const t=this.buildRequest();return eo(e,t)}_linkToIdToken(e,t){const s=this.buildRequest();return s.idToken=t,eo(e,s)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,eo(e,t)}buildRequest(){const e={requestUri:L1,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Da(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F_{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ua extends F_{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zr extends Ua{constructor(){super("facebook.com")}static credential(e){return Qi._fromParams({providerId:Zr.PROVIDER_ID,signInMethod:Zr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Zr.credentialFromTaggedObject(e)}static credentialFromError(e){return Zr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Zr.credential(e.oauthAccessToken)}catch{return null}}}Zr.FACEBOOK_SIGN_IN_METHOD="facebook.com";Zr.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ei extends Ua{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Qi._fromParams({providerId:ei.PROVIDER_ID,signInMethod:ei.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return ei.credentialFromTaggedObject(e)}static credentialFromError(e){return ei.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:s}=e;if(!t&&!s)return null;try{return ei.credential(t,s)}catch{return null}}}ei.GOOGLE_SIGN_IN_METHOD="google.com";ei.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ti extends Ua{constructor(){super("github.com")}static credential(e){return Qi._fromParams({providerId:ti.PROVIDER_ID,signInMethod:ti.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ti.credentialFromTaggedObject(e)}static credentialFromError(e){return ti.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ti.credential(e.oauthAccessToken)}catch{return null}}}ti.GITHUB_SIGN_IN_METHOD="github.com";ti.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ni extends Ua{constructor(){super("twitter.com")}static credential(e,t){return Qi._fromParams({providerId:ni.PROVIDER_ID,signInMethod:ni.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return ni.credentialFromTaggedObject(e)}static credentialFromError(e){return ni.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:s}=e;if(!t||!s)return null;try{return ni.credential(t,s)}catch{return null}}}ni.TWITTER_SIGN_IN_METHOD="twitter.com";ni.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class co{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,s,o=!1){const u=await vr._fromIdTokenResponse(e,s,o),h=Rg(s);return new co({user:u,providerId:h,_tokenResponse:s,operationType:t})}static async _forOperation(e,t,s){await e._updateTokensIfNecessary(s,!0);const o=Rg(s);return new co({user:e,providerId:o,_tokenResponse:s,operationType:t})}}function Rg(i){return i.providerId?i.providerId:"phoneNumber"in i?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lu extends Rr{constructor(e,t,s,o){var u;super(t.code,t.message),this.operationType=s,this.user=o,Object.setPrototypeOf(this,Lu.prototype),this.customData={appName:e.name,tenantId:(u=e.tenantId)!==null&&u!==void 0?u:void 0,_serverResponse:t.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,t,s,o){return new Lu(e,t,s,o)}}function U_(i,e,t,s){return(e==="reauthenticate"?t._getReauthenticationResolver(i):t._getIdTokenResponse(i)).catch(u=>{throw u.code==="auth/multi-factor-auth-required"?Lu._fromErrorAndOperation(i,u,e,s):u})}async function M1(i,e,t=!1){const s=await Na(i,e._linkToIdToken(i.auth,await i.getIdToken()),t);return co._forOperation(i,"link",s)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function b1(i,e,t=!1){const{auth:s}=i;if(ri(s.app))return Promise.reject(Wi(s));const o="reauthenticate";try{const u=await Na(i,U_(s,o,e,i),t);Ee(u.idToken,s,"internal-error");const h=Zd(u.idToken);Ee(h,s,"internal-error");const{sub:m}=h;return Ee(i.uid===m,s,"user-mismatch"),co._forOperation(i,o,u)}catch(u){throw(u==null?void 0:u.code)==="auth/user-not-found"&&Sr(s,"user-mismatch"),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function F1(i,e,t=!1){if(ri(i.app))return Promise.reject(Wi(i));const s="signIn",o=await U_(i,s,e),u=await co._fromIdTokenResponse(i,s,o);return t||await i._updateCurrentUser(u.user),u}function U1(i,e,t,s){return _n(i).onIdTokenChanged(e,t,s)}function j1(i,e,t){return _n(i).beforeAuthStateChanged(e,t)}const Mu="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j_{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Mu,"1"),this.storage.removeItem(Mu),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const z1=1e3,B1=10;class z_ extends j_{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=O_(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const s=this.storage.getItem(t),o=this.localCache[t];s!==o&&e(t,o,s)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((h,m,g)=>{this.notifyListeners(h,g)});return}const s=e.key;t?this.detachListener():this.stopPolling();const o=()=>{const h=this.storage.getItem(s);!t&&this.localCache[s]===h||this.notifyListeners(s,h)},u=this.storage.getItem(s);E1()&&u!==e.newValue&&e.newValue!==e.oldValue?setTimeout(o,B1):o()}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const o of Array.from(s))o(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:s}),!0)})},z1)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}z_.type="LOCAL";const $1=z_;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B_ extends j_{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}B_.type="SESSION";const $_=B_;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function q1(i){return Promise.all(i.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ec{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(o=>o.isListeningto(e));if(t)return t;const s=new ec(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:s,eventType:o,data:u}=t.data,h=this.handlersMap[o];if(!(h!=null&&h.size))return;t.ports[0].postMessage({status:"ack",eventId:s,eventType:o});const m=Array.from(h).map(async v=>v(t.origin,u)),g=await q1(m);t.ports[0].postMessage({status:"done",eventId:s,eventType:o,response:g})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ec.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rf(i="",e=10){let t="";for(let s=0;s<e;s++)t+=Math.floor(Math.random()*10);return i+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H1{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,s=50){const o=typeof MessageChannel<"u"?new MessageChannel:null;if(!o)throw new Error("connection_unavailable");let u,h;return new Promise((m,g)=>{const v=rf("",20);o.port1.start();const w=setTimeout(()=>{g(new Error("unsupported_event"))},s);h={messageChannel:o,onMessage(k){const M=k;if(M.data.eventId===v)switch(M.data.status){case"ack":clearTimeout(w),u=setTimeout(()=>{g(new Error("timeout"))},3e3);break;case"done":clearTimeout(u),m(M.data.response);break;default:clearTimeout(w),clearTimeout(u),g(new Error("invalid_response"));break}}},this.handlers.add(h),o.port1.addEventListener("message",h.onMessage),this.target.postMessage({eventType:e,eventId:v,data:t},[o.port2])}).finally(()=>{h&&this.removeMessageHandler(h)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jn(){return window}function W1(i){Jn().location.href=i}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function q_(){return typeof Jn().WorkerGlobalScope<"u"&&typeof Jn().importScripts=="function"}async function G1(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function K1(){var i;return((i=navigator==null?void 0:navigator.serviceWorker)===null||i===void 0?void 0:i.controller)||null}function Q1(){return q_()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const H_="firebaseLocalStorageDb",X1=1,bu="firebaseLocalStorage",W_="fbase_key";class ja{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function tc(i,e){return i.transaction([bu],e?"readwrite":"readonly").objectStore(bu)}function Y1(){const i=indexedDB.deleteDatabase(H_);return new ja(i).toPromise()}function dd(){const i=indexedDB.open(H_,X1);return new Promise((e,t)=>{i.addEventListener("error",()=>{t(i.error)}),i.addEventListener("upgradeneeded",()=>{const s=i.result;try{s.createObjectStore(bu,{keyPath:W_})}catch(o){t(o)}}),i.addEventListener("success",async()=>{const s=i.result;s.objectStoreNames.contains(bu)?e(s):(s.close(),await Y1(),e(await dd()))})})}async function Cg(i,e,t){const s=tc(i,!0).put({[W_]:e,value:t});return new ja(s).toPromise()}async function J1(i,e){const t=tc(i,!1).get(e),s=await new ja(t).toPromise();return s===void 0?null:s.value}function kg(i,e){const t=tc(i,!0).delete(e);return new ja(t).toPromise()}const Z1=800,eS=3;class G_{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await dd(),this.db)}async _withRetries(e){let t=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(t++>eS)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return q_()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ec._getInstance(Q1()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await G1(),!this.activeServiceWorker)return;this.sender=new H1(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((t=s[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||K1()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await dd();return await Cg(e,Mu,"1"),await kg(e,Mu),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(s=>Cg(s,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(s=>J1(s,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>kg(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(o=>{const u=tc(o,!1).getAll();return new ja(u).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],s=new Set;if(e.length!==0)for(const{fbase_key:o,value:u}of e)s.add(o),JSON.stringify(this.localCache[o])!==JSON.stringify(u)&&(this.notifyListeners(o,u),t.push(o));for(const o of Object.keys(this.localCache))this.localCache[o]&&!s.has(o)&&(this.notifyListeners(o,null),t.push(o));return t}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const o of Array.from(s))o(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Z1)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}G_.type="LOCAL";const tS=G_;new Fa(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nS(i,e){return e?Er(e):(Ee(i._popupRedirectResolver,i,"argument-error"),i._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sf extends b_{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return eo(e,this._buildIdpRequest())}_linkToIdToken(e,t){return eo(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return eo(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function rS(i){return F1(i.auth,new sf(i),i.bypassAuthState)}function iS(i){const{auth:e,user:t}=i;return Ee(t,e,"internal-error"),b1(t,new sf(i),i.bypassAuthState)}async function sS(i){const{auth:e,user:t}=i;return Ee(t,e,"internal-error"),M1(t,new sf(i),i.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K_{constructor(e,t,s,o,u=!1){this.auth=e,this.resolver=s,this.user=o,this.bypassAuthState=u,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:s,postBody:o,tenantId:u,error:h,type:m}=e;if(h){this.reject(h);return}const g={auth:this.auth,requestUri:t,sessionId:s,tenantId:u||void 0,postBody:o||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(m)(g))}catch(v){this.reject(v)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return rS;case"linkViaPopup":case"linkViaRedirect":return sS;case"reauthViaPopup":case"reauthViaRedirect":return iS;default:Sr(this.auth,"internal-error")}}resolve(e){Ar(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Ar(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oS=new Fa(2e3,1e4);class Xs extends K_{constructor(e,t,s,o,u){super(e,t,o,u),this.provider=s,this.authWindow=null,this.pollId=null,Xs.currentPopupAction&&Xs.currentPopupAction.cancel(),Xs.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Ee(e,this.auth,"internal-error"),e}async onExecution(){Ar(this.filter.length===1,"Popup operations only handle one event");const e=rf();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Yn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Yn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Xs.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,s;if(!((s=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Yn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,oS.get())};e()}}Xs.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aS="pendingRedirect",_u=new Map;class lS extends K_{constructor(e,t,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,s),this.eventId=null}async execute(){let e=_u.get(this.auth._key());if(!e){try{const s=await uS(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(t){e=()=>Promise.reject(t)}_u.set(this.auth._key(),e)}return this.bypassAuthState||_u.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function uS(i,e){const t=dS(e),s=hS(i);if(!await s._isAvailable())return!1;const o=await s._get(t)==="true";return await s._remove(t),o}function cS(i,e){_u.set(i._key(),e)}function hS(i){return Er(i._redirectPersistence)}function dS(i){return yu(aS,i.config.apiKey,i.name)}async function fS(i,e,t=!1){if(ri(i.app))return Promise.reject(Wi(i));const s=tf(i),o=nS(s,e),h=await new lS(s,o,t).execute();return h&&!t&&(delete h.user._redirectEventId,await s._persistUserIfCurrent(h.user),await s._setRedirectUser(null,e)),h}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pS=10*60*1e3;class mS{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(t=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!gS(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var s;if(e.error&&!Q_(e)){const o=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";t.onError(Yn(this.auth,o))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const s=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=pS&&this.cachedEventUids.clear(),this.cachedEventUids.has(Pg(e))}saveEventToCache(e){this.cachedEventUids.add(Pg(e)),this.lastProcessedEventTime=Date.now()}}function Pg(i){return[i.type,i.eventId,i.sessionId,i.tenantId].filter(e=>e).join("-")}function Q_({type:i,error:e}){return i==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function gS(i){switch(i.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Q_(i);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yS(i,e={}){return _o(i,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _S=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,vS=/^https?/;async function ES(i){if(i.config.emulator)return;const{authorizedDomains:e}=await yS(i);for(const t of e)try{if(wS(t))return}catch{}Sr(i,"unauthorized-domain")}function wS(i){const e=cd(),{protocol:t,hostname:s}=new URL(e);if(i.startsWith("chrome-extension://")){const h=new URL(i);return h.hostname===""&&s===""?t==="chrome-extension:"&&i.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&h.hostname===s}if(!vS.test(t))return!1;if(_S.test(i))return s===i;const o=i.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(s)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TS=new Fa(3e4,6e4);function Ng(){const i=Jn().___jsl;if(i!=null&&i.H){for(const e of Object.keys(i.H))if(i.H[e].r=i.H[e].r||[],i.H[e].L=i.H[e].L||[],i.H[e].r=[...i.H[e].L],i.CP)for(let t=0;t<i.CP.length;t++)i.CP[t]=null}}function IS(i){return new Promise((e,t)=>{var s,o,u;function h(){Ng(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Ng(),t(Yn(i,"network-request-failed"))},timeout:TS.get()})}if(!((o=(s=Jn().gapi)===null||s===void 0?void 0:s.iframes)===null||o===void 0)&&o.Iframe)e(gapi.iframes.getContext());else if(!((u=Jn().gapi)===null||u===void 0)&&u.load)h();else{const m=P1("iframefcb");return Jn()[m]=()=>{gapi.load?h():t(Yn(i,"network-request-failed"))},C1(`${k1()}?onload=${m}`).catch(g=>t(g))}}).catch(e=>{throw vu=null,e})}let vu=null;function SS(i){return vu=vu||IS(i),vu}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AS=new Fa(5e3,15e3),RS="__/auth/iframe",CS="emulator/auth/iframe",kS={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},PS=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function NS(i){const e=i.config;Ee(e.authDomain,i,"auth-domain-config-required");const t=e.emulator?Yd(e,CS):`https://${i.config.authDomain}/${RS}`,s={apiKey:e.apiKey,appName:i.name,v:ho},o=PS.get(i.config.apiHost);o&&(s.eid=o);const u=i._getFrameworks();return u.length&&(s.fw=u.join(",")),`${t}?${Da(s).slice(1)}`}async function xS(i){const e=await SS(i),t=Jn().gapi;return Ee(t,i,"internal-error"),e.open({where:document.body,url:NS(i),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:kS,dontclear:!0},s=>new Promise(async(o,u)=>{await s.restyle({setHideOnLeave:!1});const h=Yn(i,"network-request-failed"),m=Jn().setTimeout(()=>{u(h)},AS.get());function g(){Jn().clearTimeout(m),o(s)}s.ping(g).then(g,()=>{u(h)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DS={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},VS=500,OS=600,LS="_blank",MS="http://localhost";class xg{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function bS(i,e,t,s=VS,o=OS){const u=Math.max((window.screen.availHeight-o)/2,0).toString(),h=Math.max((window.screen.availWidth-s)/2,0).toString();let m="";const g=Object.assign(Object.assign({},DS),{width:s.toString(),height:o.toString(),top:u,left:h}),v=Ft().toLowerCase();t&&(m=P_(v)?LS:t),C_(v)&&(e=e||MS,g.scrollbars="yes");const w=Object.entries(g).reduce((M,[z,H])=>`${M}${z}=${H},`,"");if(v1(v)&&m!=="_self")return FS(e||"",m),new xg(null);const k=window.open(e||"",m,w);Ee(k,i,"popup-blocked");try{k.focus()}catch{}return new xg(k)}function FS(i,e){const t=document.createElement("a");t.href=i,t.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const US="__/auth/handler",jS="emulator/auth/handler",zS=encodeURIComponent("fac");async function Dg(i,e,t,s,o,u){Ee(i.config.authDomain,i,"auth-domain-config-required"),Ee(i.config.apiKey,i,"invalid-api-key");const h={apiKey:i.config.apiKey,appName:i.name,authType:t,redirectUrl:s,v:ho,eventId:o};if(e instanceof F_){e.setDefaultLanguage(i.languageCode),h.providerId=e.providerId||"",P0(e.getCustomParameters())||(h.customParameters=JSON.stringify(e.getCustomParameters()));for(const[w,k]of Object.entries({}))h[w]=k}if(e instanceof Ua){const w=e.getScopes().filter(k=>k!=="");w.length>0&&(h.scopes=w.join(","))}i.tenantId&&(h.tid=i.tenantId);const m=h;for(const w of Object.keys(m))m[w]===void 0&&delete m[w];const g=await i._getAppCheckToken(),v=g?`#${zS}=${encodeURIComponent(g)}`:"";return`${BS(i)}?${Da(m).slice(1)}${v}`}function BS({config:i}){return i.emulator?Yd(i,jS):`https://${i.authDomain}/${US}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $h="webStorageSupport";class $S{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=$_,this._completeRedirectFn=fS,this._overrideRedirectResult=cS}async _openPopup(e,t,s,o){var u;Ar((u=this.eventManagers[e._key()])===null||u===void 0?void 0:u.manager,"_initialize() not called before _openPopup()");const h=await Dg(e,t,s,cd(),o);return bS(e,h,rf())}async _openRedirect(e,t,s,o){await this._originValidation(e);const u=await Dg(e,t,s,cd(),o);return W1(u),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:o,promise:u}=this.eventManagers[t];return o?Promise.resolve(o):(Ar(u,"If manager is not set, promise should be"),u)}const s=this.initAndGetManager(e);return this.eventManagers[t]={promise:s},s.catch(()=>{delete this.eventManagers[t]}),s}async initAndGetManager(e){const t=await xS(e),s=new mS(e);return t.register("authEvent",o=>(Ee(o==null?void 0:o.authEvent,e,"invalid-auth-event"),{status:s.onEvent(o.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=t,s}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send($h,{type:$h},o=>{var u;const h=(u=o==null?void 0:o[0])===null||u===void 0?void 0:u[$h];h!==void 0&&t(!!h),Sr(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=ES(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return O_()||k_()||ef()}}const qS=$S;var Vg="@firebase/auth",Og="1.8.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HS{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){Ee(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function WS(i){switch(i){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function GS(i){no(new Gi("auth",(e,{options:t})=>{const s=e.getProvider("app").getImmediate(),o=e.getProvider("heartbeat"),u=e.getProvider("app-check-internal"),{apiKey:h,authDomain:m}=s.options;Ee(h&&!h.includes(":"),"invalid-api-key",{appName:s.name});const g={apiKey:h,authDomain:m,clientPlatform:i,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:L_(i)},v=new A1(s,o,u,g);return x1(v,t),v},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,s)=>{e.getProvider("auth-internal").initialize()})),no(new Gi("auth-internal",e=>{const t=tf(e.getProvider("auth").getImmediate());return(s=>new HS(s))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),ai(Vg,Og,WS(i)),ai(Vg,Og,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KS=5*60,QS=$g("authIdTokenMaxAge")||KS;let Lg=null;const XS=i=>async e=>{const t=e&&await e.getIdTokenResult(),s=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(s&&s>QS)return;const o=t==null?void 0:t.token;Lg!==o&&(Lg=o,await fetch(i,{method:o?"POST":"DELETE",headers:o?{Authorization:`Bearer ${o}`}:{}}))};function YS(i=Gg()){const e=gd(i,"auth");if(e.isInitialized())return e.getImmediate();const t=N1(i,{popupRedirectResolver:qS,persistence:[tS,$1,$_]}),s=$g("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const u=new URL(s,location.origin);if(location.origin===u.origin){const h=XS(u.toString());j1(t,h,()=>h(t.currentUser)),U1(t,m=>h(m))}}const o=zg("auth");return o&&D1(t,`http://${o}`),t}function JS(){var i,e;return(e=(i=document.getElementsByTagName("head"))===null||i===void 0?void 0:i[0])!==null&&e!==void 0?e:document}R1({loadJS(i){return new Promise((e,t)=>{const s=document.createElement("script");s.setAttribute("src",i),s.onload=e,s.onerror=o=>{const u=Yn("internal-error");u.customData=o,t(u)},s.type="text/javascript",s.charset="UTF-8",JS().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});GS("Browser");const ZS={apiKey:"AIzaSyC70tn1M08W6TSHahhfTIuPBw-lUUtj-EU",authDomain:"calculadora-horarios-v2.firebaseapp.com",projectId:"calculadora-horarios-v2",storageBucket:"calculadora-horarios-v2.firebasestorage.app",messagingSenderId:"217559594958",appId:"1:217559594958:web:9293409f4f344a7201dd9f",measurementId:"G-Y5XBNRSB4Z"},eA=Wg(ZS);YS();const to=OI(eA);function tA(i){const[e,t]=wt.useState(!1),[s,o]=wt.useState(!1),u=async h=>{h.preventDefault();const m=document.querySelector("#login-email"),g=document.querySelector("#login-senha"),v=Hd(Pa(to,"usuario"),Wd("email","==",m.value)),w=await Kd(v);if(w.empty){t(!0);return}else t(!1);for(const k of w.docs){if(k.data().senha!==g.value){o(!0);return}else o(!1);const M=k.data().nome;i.getUsuNome(M),i.getEmail(m.value)}i.onConfirm()};return j.jsx(j.Fragment,{children:j.jsx("div",{className:"modal show d-block",tabIndex:-1,style:{backgroundColor:"rgba(0, 0, 0, 0.5)"},children:j.jsx("form",{onSubmit:u,children:j.jsx("div",{className:"modal-dialog",children:j.jsxs("div",{className:"modal-content",children:[j.jsxs("div",{className:"modal-header",children:[j.jsx("h5",{className:"modal-title",children:"Login"}),e&&j.jsxs("div",{className:"warning",children:[j.jsx("img",{src:"/assets/warning-sign-9769.svg"}),j.jsx("p",{style:{paddingRight:"5px",paddingLeft:"5px",display:"flex",alignContent:"center",margin:"auto"},children:"Email não cadastrado!"})]}),!e&&s&&j.jsxs("div",{className:"warning",children:[j.jsx("img",{src:"/assets/warning-sign-9769.svg"}),j.jsx("p",{style:{paddingLeft:"5px",display:"flex",alignContent:"center",margin:"auto"},children:"Senha incorreta!"})]}),j.jsx("button",{type:"button",className:"btn-close","aria-label":"Close",onClick:i.onClose})]}),j.jsxs("div",{className:"modal-body",style:{display:"grid"},children:[j.jsxs("div",{style:{display:"grid"},children:[j.jsx("label",{htmlFor:"email",className:"mb-2",children:"Digite seu email:"}),j.jsx("input",{id:"login-email",name:"email",type:"email",placeholder:"Email",className:"form-control mb-3",required:!0})]}),j.jsxs("div",{style:{display:"grid"},children:[j.jsx("label",{htmlFor:"senha",className:"mb-2",children:"Digite sua senha:"}),j.jsx("input",{id:"login-senha",name:"senha",type:"password",placeholder:"Senha",className:"form-control mb-3",required:!0})]})]}),j.jsxs("div",{className:"modal-footer",children:[j.jsx("button",{type:"button",className:"btn btn-secondary",onClick:i.onClose,children:"Cancelar"}),j.jsx("button",{type:"submit",className:"btn btn-primary",children:"Fazer Login"})]})]})})})})})}function nA(i){const[e,t]=wt.useState(!1),[s,o]=wt.useState(!1),u=async h=>{h.preventDefault();const m=document.querySelector("#cadastro-nome"),g=document.querySelector("#cadastro-email"),v=document.querySelector("#cadastro-senha"),w=document.querySelector("#cadastro-confSenha"),k=Hd(Pa(to,"usuario"),Wd("email","==",g.value));if((await Kd(k)).empty)o(!1);else{o(!0);return}if(w.value!==v.value){t(!0);return}else t(!1);try{await g_(Pa(to,"usuario"),{nome:(m==null?void 0:m.value)??"",email:(g==null?void 0:g.value)??"",senha:(v==null?void 0:v.value)??""})}catch(z){console.log(z)}i.onConfirm()};return j.jsx(j.Fragment,{children:j.jsx("div",{className:"modal show d-block",tabIndex:-1,style:{backgroundColor:"rgba(0, 0, 0, 0.5)"},children:j.jsx("form",{onSubmit:u,children:j.jsx("div",{className:"modal-dialog",children:j.jsxs("div",{className:"modal-content",children:[j.jsxs("div",{className:"modal-header",children:[j.jsx("h5",{className:"modal-title",children:"Cadastro"}),e&&j.jsxs("div",{className:"warning",children:[j.jsx("img",{src:"/assets/warning-sign-9769.svg"}),j.jsx("p",{style:{paddingRight:"5px",paddingLeft:"5px",display:"flex",alignContent:"center",margin:"auto"},children:"Senhas diferentes!"})]}),s&&j.jsxs("div",{className:"warning",children:[j.jsx("img",{src:"/assets/warning-sign-9769.svg"}),j.jsx("p",{style:{paddingRight:"5px",paddingLeft:"5px",display:"flex",alignContent:"center",margin:"auto"},children:"Email já cadastrado!"})]}),j.jsx("button",{type:"button",className:"btn-close","aria-label":"Close",onClick:i.onClose})]}),j.jsxs("div",{className:"modal-body",style:{display:"grid"},children:[j.jsxs("div",{style:{display:"grid"},children:[j.jsx("label",{htmlFor:"Nome",className:"mb-2",children:"Digite seu Nome:"}),j.jsx("input",{id:"cadastro-nome",name:"nome",type:"name",placeholder:"Nome de Usuário",className:"form-control mb-3",required:!0,minLength:3})]}),j.jsxs("div",{style:{display:"grid"},children:[j.jsx("label",{htmlFor:"email",className:"mb-2",children:"Digite seu email:"}),j.jsx("input",{id:"cadastro-email",name:"email",type:"email",placeholder:"Email",className:"form-control mb-3",required:!0})]}),j.jsxs("div",{style:{display:"grid"},children:[j.jsx("label",{htmlFor:"senha",className:"mb-2",children:"Digite sua senha:"}),j.jsx("input",{id:"cadastro-senha",name:"senha",type:"password",placeholder:"Senha",className:"form-control mb-3",required:!0,minLength:8})]}),j.jsxs("div",{style:{display:"grid"},children:[j.jsx("label",{htmlFor:"confSenha",className:"mb-2",children:"Confirme sua senha:"}),j.jsx("input",{id:"cadastro-confSenha",name:"confSenha",type:"password",placeholder:"Confirme sua Senha",className:"form-control mb-3",required:!0,minLength:8})]})]}),j.jsxs("div",{className:"modal-footer",children:[j.jsx("button",{type:"button",className:"btn btn-secondary",onClick:i.onClose,children:"Cancelar"}),j.jsx("button",{type:"submit",className:"btn btn-primary",children:"Fazer Cadastro"})]})]})})})})})}function rA(i){let e=0;for(let s=0;s<i.length;s++)e=i.charCodeAt(s)+((e<<5)-e);let t="#";for(let s=0;s<3;s++){const o=e>>s*8&255;t+=("00"+o.toString(16)).substr(-2)}return t}function iA(i){var h;const e=`${((h=i.nome[0])==null?void 0:h.toUpperCase())??""}`,t=rA(i.nome),s=()=>{u(!o)};let[o,u]=wt.useState(!1);return j.jsxs(j.Fragment,{children:[j.jsx("div",{className:"profile-image",style:{backgroundColor:t},onClick:s,children:e}),o&&j.jsxs("div",{style:{backgroundColor:"white",width:"200px",borderRadius:"5px",zIndex:"1",position:"absolute",border:"1px solid #333"},children:[j.jsx("div",{style:{borderBottom:"2px solid #ccc",paddingBottom:"5px"},children:j.jsxs("p",{style:{color:"black",paddingLeft:"12px",paddingTop:"5px",marginBottom:"0",overflow:"hidden"},children:["Olá, ",i.nome]})}),j.jsxs("button",{className:"btn",type:"button",onClick:i.isLogado,style:{display:"flex",width:"100%",justifyContent:"space-between",color:"black",border:"none"},children:["Sair",j.jsx("img",{src:"/assets/exit-svgrepo-com.svg"})]})]})]})}function sA(i){let[e,t]=wt.useState("00:00"),[s,o]=wt.useState(!1);const u=()=>o(!0),h=()=>o(!1);let[m,g]=wt.useState(!1);const v=()=>{i.onLogin(ae),g(!0),o(!1)};let[w,k]=wt.useState(!1);const M=()=>k(!0),z=()=>k(!1),H=()=>{i.onCadastro(),k(!1)},G=R=>{t(R.target.value)},B=()=>{g(!1),ge(""),i.getEmail(""),i.setTotalHoras("0"),i.setTotalMinutos("0")};let[ue,ce]=wt.useState(""),[ae,ge]=wt.useState("");function Oe(R){ce(R)}function ye(R){ge(R),i.getEmail(R)}return j.jsxs(j.Fragment,{children:[j.jsxs("div",{className:"text-bg-success p-4",style:{display:"grid",gridTemplateColumns:"1fr auto 1fr",margin:"auto",justifyContent:"space-between",alignItems:"center",position:"relative"},children:[j.jsx("div",{children:m&&j.jsx("div",{style:{alignContent:"center"},children:j.jsx(iA,{nome:ue,isLogado:B})})}),j.jsx("h2",{style:{padding:"20px",textAlign:"center",justifySelf:"center"},children:"Calculadora de Horários:"}),j.jsxs("div",{style:{display:"flex",gap:"10px",alignItems:"flex-end",flexDirection:"column"},children:[!m&&j.jsx("button",{type:"button",className:"btn btn-light",style:{width:"100px"},onClick:u,children:"Login"}),!m&&j.jsx("button",{type:"button",className:"btn btn-primary",style:{width:"100px"},onClick:M,children:"Cadastro"})]})]}),j.jsx("form",{onSubmit:R=>{R.preventDefault();let T=new Date,A=T.toLocaleDateString(),P=T.toLocaleTimeString(),x=parseInt(e.slice(0,e.indexOf(":"))),D=parseInt(e.slice(e.indexOf(":")+1)),S="",He="";x<10?S="0"+String(x):S=String(x),D<10?He="0"+String(D):He=String(D),i.onButtonClick(ae,A,P,S,He),t("00:00")},children:j.jsxs("div",{className:"d-block mb-5",style:{width:"250px",margin:"auto"},children:[j.jsxs("div",{className:"text-center input-group my-3",children:[j.jsx("span",{className:"input-group-text",id:"basic-addon1",children:"Digite o tempo:"}),j.jsx("input",{type:"time",className:"form-control",id:"EntradaHorario",value:e,onChange:G})]}),j.jsx("div",{children:j.jsx("button",{type:"submit",className:" btn text-bg-primary",children:"Enviar"})})]})}),s&&j.jsx(tA,{getEmail:ye,getUsuNome:Oe,onClose:h,onConfirm:v}),w&&j.jsx(nA,{onClose:z,onConfirm:H})]})}function oA(i){return j.jsx("div",{className:"modal show d-block",tabIndex:-1,style:{backgroundColor:"rgba(0, 0, 0, 0.5)"},children:j.jsx("div",{className:"modal-dialog",children:j.jsxs("div",{className:"modal-content",children:[j.jsxs("div",{className:"modal-header",children:[j.jsx("h5",{className:"modal-title",children:"Confirma Exclusão?"}),j.jsx("button",{type:"button",className:"btn-close","aria-label":"Close",onClick:i.onClose})]}),j.jsx("div",{className:"modal-body",children:j.jsx("p",{children:"Certeza que quer excluir este horário?"})}),j.jsxs("div",{className:"modal-footer",children:[j.jsx("button",{type:"button",className:"btn btn-secondary",onClick:i.onClose,children:"Fechar"}),j.jsx("button",{type:"button",className:"btn btn-primary",onClick:i.onConfirm,children:"Excluir"})]})]})})})}function Mg(i){const[e,t]=wt.useState(!1),s=()=>t(!0),o=()=>t(!1),u=()=>{i.onRemove(),t(!1)};return j.jsxs(j.Fragment,{children:[j.jsxs("div",{className:"rounded d-block",style:{width:"300px",margin:"auto",marginBottom:"20px"},children:[j.jsxs("div",{className:"rounded-top p-2 d-flex text-bg-primary justify-content-between",style:{width:"300px",margin:"auto"},children:[j.jsx("p",{style:{marginBottom:"0px"},children:"Horário adicionado:"}),j.jsx("button",{type:"button",className:"btn-close","aria-label":"Close",onClick:s})]}),j.jsxs("div",{className:"px-2  rounded-bottom border border-primary",children:[j.jsxs("span",{children:[i.newHora,":",i.newMinuto]}),j.jsxs("p",{style:{fontSize:"12px",marginBottom:"2px"},children:["Data: ",i.addedDate]}),j.jsxs("p",{style:{fontSize:"12px",marginBottom:"2px"},children:["Hora: ",i.addedTime]})]})]}),e&&j.jsx(oA,{onClose:o,onConfirm:u})]})}function bg(i){return j.jsx(j.Fragment,{children:j.jsxs("div",{className:"text-center rounded border border-success",style:{width:"300px",margin:"auto"},children:[j.jsx("h3",{className:"text-bg-success p-3 rounded-top",children:"Total de horas:"}),j.jsxs("p",{children:[parseInt(i.totalHoras)<10?"0"+i.totalHoras:i.totalHoras,":",parseInt(i.totalMinutos)<10?"0"+i.totalMinutos:i.totalMinutos]})]})})}function aA(){const[i,e]=wt.useState([]),[t,s]=wt.useState(""),[o,u]=wt.useState(""),[h,m]=wt.useState(""),g=window.innerWidth,v=H=>{m(H)},w=async H=>{if(H){s("0"),u("0");try{const G=Hd(Pa(to,"horario"),Wd("email","==",H)),B=await Kd(G),ue=new Date,ce=B.docs.map(ye=>{const R=ye.data();return{id:ye.id,email:H,date:R.date??"",time:R.time??"",hora:R.hora??"",minuto:R.minuto??""}}).filter(ye=>{if(!ye.date)return!1;const[R,T,A]=ye.date.split("/"),P=`${A}-${T}-${R}`,x=new Date(P);return x.getFullYear()===ue.getFullYear()&&x.getMonth()===ue.getMonth()});e(ce);let ae=0,ge=0;ce.forEach(ye=>{ae+=parseInt(ye.minuto),ge+=parseInt(ye.hora)});const Oe=Math.floor(ae/60);ge+=Oe,ae=ae%60,s(String(ge)),u(String(ae))}catch(G){console.error("Erro ao buscar horários:",G)}}};wt.useEffect(()=>{w(h)},[h]);const k=async(H,G,B,ue,ce)=>{if((ue!=="00"||ce!=="00")&&!isNaN(parseInt(ue))&&!isNaN(parseInt(ce)))try{if(H){const P=await g_(Pa(to,"horario"),{email:H??"",date:G??"",time:B??"",hora:ue??"",minuto:ce??""});e(x=>[...x,{id:P.id,email:H,date:G,time:B,hora:ue,minuto:ce}])}else e(P=>[...P,{id:"",email:H,date:G,time:B,hora:ue,minuto:ce}]);const ae=o===""?0:parseInt(o),ge=t===""?0:parseInt(t),Oe=parseInt(ce),ye=parseInt(ue);let R=ae+Oe,T=ge+ye;const A=Math.floor(R/60);T+=A,R=R%60,u(String(R)),s(String(T)),console.log("Horário adicionado com sucesso!")}catch(ae){console.error("Erro ao adicionar horário:",ae)}},M=()=>{console.log("Cadastro Realizado")},z=async H=>{try{const G=i[H];if(!G||!G.id){console.error("Erro: ID do documento não encontrado.");return}await ZI(s_(to,"horario",G.id)),console.log("Horário removido do banco:",G),e(ae=>ae.filter((ge,Oe)=>Oe!==H));let B=0,ue=0;i.forEach((ae,ge)=>{ge!==H&&(B+=parseInt(ae.minuto),ue+=parseInt(ae.hora))});const ce=Math.floor(B/60);ue+=ce,B=B%60,s(String(ue)),u(String(B))}catch(G){console.error("Erro ao remover horário:",G)}};return j.jsxs(j.Fragment,{children:[j.jsx(sA,{getEmail:v,onButtonClick:k,onLogin:w,onCadastro:M,setTotalHoras:s,setTotalMinutos:u}),g>=700&&i.length>0?j.jsxs("div",{className:"row",children:[j.jsx("div",{className:"col",children:i.map((H,G)=>j.jsx(Mg,{addedDate:H.date,addedTime:H.time,newHora:H.hora,newMinuto:H.minuto,onRemove:()=>z(G)},G))}),j.jsx("div",{className:"col",children:j.jsx(bg,{totalHoras:t===""?"0":t,totalMinutos:o===""?"0":o})})]}):j.jsxs("div",{children:[i.map((H,G)=>j.jsx(Mg,{addedDate:H.date,addedTime:H.time,newHora:H.hora,newMinuto:H.minuto,onRemove:()=>z(G)},G)),j.jsx(bg,{totalHoras:t===""?"0":t,totalMinutos:o===""?"0":o})]})]})}o0.createRoot(document.getElementById("root")).render(j.jsx(wt.StrictMode,{children:j.jsx(aA,{})}));
