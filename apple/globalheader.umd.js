(function(mt){typeof define=="function"&&define.amd?define(mt):mt()})(function(){"use strict";function mt(e,t){return t.forEach(function(s){s&&typeof s!="string"&&!Array.isArray(s)&&Object.keys(s).forEach(function(n){if(n!=="default"&&!(n in e)){var a=Object.getOwnPropertyDescriptor(s,n);Object.defineProperty(e,n,a.get?a:{enumerable:!0,get:function(){return s[n]}})}})}),Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}var Je,M,ts,ss,Xe,ns,is,dt={},as=[],Hn=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function Se(e,t){for(var s in t)e[s]=t[s];return e}function os(e){var t=e.parentNode;t&&t.removeChild(e)}function et(e,t,s){var n,a,i,l={};for(i in t)i=="key"?n=t[i]:i=="ref"?a=t[i]:l[i]=t[i];if(arguments.length>2&&(l.children=arguments.length>3?Je.call(arguments,2):s),typeof e=="function"&&e.defaultProps!=null)for(i in e.defaultProps)l[i]===void 0&&(l[i]=e.defaultProps[i]);return tt(e,l,n,a,null)}function tt(e,t,s,n,a){var i={type:e,props:t,key:s,ref:n,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:a==null?++ts:a};return a==null&&M.vnode!=null&&M.vnode(i),i}function Wn(){return{current:null}}function J(e){return e.children}function _e(e,t){this.props=e,this.context=t}function st(e,t){if(t==null)return e.__?st(e.__,e.__.__k.indexOf(e)+1):null;for(var s;t<e.__k.length;t++)if((s=e.__k[t])!=null&&s.__e!=null)return s.__e;return typeof e.type=="function"?st(e):null}function rs(e){var t,s;if((e=e.__)!=null&&e.__c!=null){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if((s=e.__k[t])!=null&&s.__e!=null){e.__e=e.__c.base=s.__e;break}return rs(e)}}function kt(e){(!e.__d&&(e.__d=!0)&&Xe.push(e)&&!pt.__r++||ns!==M.debounceRendering)&&((ns=M.debounceRendering)||setTimeout)(pt)}function pt(){for(var e;pt.__r=Xe.length;)e=Xe.sort(function(t,s){return t.__v.__b-s.__v.__b}),Xe=[],e.some(function(t){var s,n,a,i,l,h;t.__d&&(l=(i=(s=t).__v).__e,(h=s.__P)&&(n=[],(a=Se({},i)).__v=i.__v+1,Ft(h,i,a,s.__n,h.ownerSVGElement!==void 0,i.__h!=null?[l]:null,n,l==null?st(i):l,i.__h),ps(n,i),i.__e!=l&&rs(i)))})}function ls(e,t,s,n,a,i,l,h,c,f){var r,b,y,o,g,k,T,I=n&&n.__k||as,S=I.length;for(s.__k=[],r=0;r<t.length;r++)if((o=s.__k[r]=(o=t[r])==null||typeof o=="boolean"?null:typeof o=="string"||typeof o=="number"||typeof o=="bigint"?tt(null,o,null,null,o):Array.isArray(o)?tt(J,{children:o},null,null,null):o.__b>0?tt(o.type,o.props,o.key,o.ref?o.ref:null,o.__v):o)!=null){if(o.__=s,o.__b=s.__b+1,(y=I[r])===null||y&&o.key==y.key&&o.type===y.type)I[r]=void 0;else for(b=0;b<S;b++){if((y=I[b])&&o.key==y.key&&o.type===y.type){I[b]=void 0;break}y=null}Ft(e,o,y=y||dt,a,i,l,h,c,f),g=o.__e,(b=o.ref)&&y.ref!=b&&(T||(T=[]),y.ref&&T.push(y.ref,null,o),T.push(b,o.__c||g,o)),g!=null?(k==null&&(k=g),typeof o.type=="function"&&o.__k===y.__k?o.__d=c=cs(o,c,e):c=us(e,o,y,I,g,c),typeof s.type=="function"&&(s.__d=c)):c&&y.__e==c&&c.parentNode!=e&&(c=st(y))}for(s.__e=k,r=S;r--;)I[r]!=null&&gs(I[r],I[r]);if(T)for(r=0;r<T.length;r++)fs(T[r],T[++r],T[++r])}function cs(e,t,s){for(var n,a=e.__k,i=0;a&&i<a.length;i++)(n=a[i])&&(n.__=e,t=typeof n.type=="function"?cs(n,t,s):us(s,n,n,a,n.__e,t));return t}function nt(e,t){return t=t||[],e==null||typeof e=="boolean"||(Array.isArray(e)?e.some(function(s){nt(s,t)}):t.push(e)),t}function us(e,t,s,n,a,i){var l,h,c;if(t.__d!==void 0)l=t.__d,t.__d=void 0;else if(s==null||a!=i||a.parentNode==null)e:if(i==null||i.parentNode!==e)e.appendChild(a),l=null;else{for(h=i,c=0;(h=h.nextSibling)&&c<n.length;c+=1)if(h==a)break e;e.insertBefore(a,i),l=i}return l!==void 0?l:a.nextSibling}function Un(e,t,s,n,a){var i;for(i in s)i==="children"||i==="key"||i in t||ft(e,i,null,s[i],n);for(i in t)a&&typeof t[i]!="function"||i==="children"||i==="key"||i==="value"||i==="checked"||s[i]===t[i]||ft(e,i,t[i],s[i],n)}function hs(e,t,s){t[0]==="-"?e.setProperty(t,s):e[t]=s==null?"":typeof s!="number"||Hn.test(t)?s:s+"px"}function ft(e,t,s,n,a){var i;e:if(t==="style")if(typeof s=="string")e.style.cssText=s;else{if(typeof n=="string"&&(e.style.cssText=n=""),n)for(t in n)s&&t in s||hs(e.style,t,"");if(s)for(t in s)n&&s[t]===n[t]||hs(e.style,t,s[t])}else if(t[0]==="o"&&t[1]==="n")i=t!==(t=t.replace(/Capture$/,"")),t=t.toLowerCase()in e?t.toLowerCase().slice(2):t.slice(2),e.l||(e.l={}),e.l[t+i]=s,s?n||e.addEventListener(t,i?ds:ms,i):e.removeEventListener(t,i?ds:ms,i);else if(t!=="dangerouslySetInnerHTML"){if(a)t=t.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(t!=="href"&&t!=="list"&&t!=="form"&&t!=="tabIndex"&&t!=="download"&&t in e)try{e[t]=s==null?"":s;break e}catch{}typeof s=="function"||(s==null||s===!1&&t.indexOf("-")==-1?e.removeAttribute(t):e.setAttribute(t,s))}}function ms(e){this.l[e.type+!1](M.event?M.event(e):e)}function ds(e){this.l[e.type+!0](M.event?M.event(e):e)}function Ft(e,t,s,n,a,i,l,h,c){var f,r,b,y,o,g,k,T,I,S,N,A,x,D,z,U=t.type;if(t.constructor!==void 0)return null;s.__h!=null&&(c=s.__h,h=t.__e=s.__e,t.__h=null,i=[h]),(f=M.__b)&&f(t);try{e:if(typeof U=="function"){if(T=t.props,I=(f=U.contextType)&&n[f.__c],S=f?I?I.props.value:f.__:n,s.__c?k=(r=t.__c=s.__c).__=r.__E:("prototype"in U&&U.prototype.render?t.__c=r=new U(T,S):(t.__c=r=new _e(T,S),r.constructor=U,r.render=qn),I&&I.sub(r),r.props=T,r.state||(r.state={}),r.context=S,r.__n=n,b=r.__d=!0,r.__h=[],r._sb=[]),r.__s==null&&(r.__s=r.state),U.getDerivedStateFromProps!=null&&(r.__s==r.state&&(r.__s=Se({},r.__s)),Se(r.__s,U.getDerivedStateFromProps(T,r.__s))),y=r.props,o=r.state,b)U.getDerivedStateFromProps==null&&r.componentWillMount!=null&&r.componentWillMount(),r.componentDidMount!=null&&r.__h.push(r.componentDidMount);else{if(U.getDerivedStateFromProps==null&&T!==y&&r.componentWillReceiveProps!=null&&r.componentWillReceiveProps(T,S),!r.__e&&r.shouldComponentUpdate!=null&&r.shouldComponentUpdate(T,r.__s,S)===!1||t.__v===s.__v){for(r.props=T,r.state=r.__s,t.__v!==s.__v&&(r.__d=!1),r.__v=t,t.__e=s.__e,t.__k=s.__k,t.__k.forEach(function(te){te&&(te.__=t)}),N=0;N<r._sb.length;N++)r.__h.push(r._sb[N]);r._sb=[],r.__h.length&&l.push(r);break e}r.componentWillUpdate!=null&&r.componentWillUpdate(T,r.__s,S),r.componentDidUpdate!=null&&r.__h.push(function(){r.componentDidUpdate(y,o,g)})}if(r.context=S,r.props=T,r.__v=t,r.__P=e,A=M.__r,x=0,"prototype"in U&&U.prototype.render){for(r.state=r.__s,r.__d=!1,A&&A(t),f=r.render(r.props,r.state,r.context),D=0;D<r._sb.length;D++)r.__h.push(r._sb[D]);r._sb=[]}else do r.__d=!1,A&&A(t),f=r.render(r.props,r.state,r.context),r.state=r.__s;while(r.__d&&++x<25);r.state=r.__s,r.getChildContext!=null&&(n=Se(Se({},n),r.getChildContext())),b||r.getSnapshotBeforeUpdate==null||(g=r.getSnapshotBeforeUpdate(y,o)),z=f!=null&&f.type===J&&f.key==null?f.props.children:f,ls(e,Array.isArray(z)?z:[z],t,s,n,a,i,l,h,c),r.base=t.__e,t.__h=null,r.__h.length&&l.push(r),k&&(r.__E=r.__=null),r.__e=!1}else i==null&&t.__v===s.__v?(t.__k=s.__k,t.__e=s.__e):t.__e=Vn(s.__e,t,s,n,a,i,l,c);(f=M.diffed)&&f(t)}catch(te){t.__v=null,(c||i!=null)&&(t.__e=h,t.__h=!!c,i[i.indexOf(h)]=null),M.__e(te,t,s)}}function ps(e,t){M.__c&&M.__c(t,e),e.some(function(s){try{e=s.__h,s.__h=[],e.some(function(n){n.call(s)})}catch(n){M.__e(n,s.__v)}})}function Vn(e,t,s,n,a,i,l,h){var c,f,r,b=s.props,y=t.props,o=t.type,g=0;if(o==="svg"&&(a=!0),i!=null){for(;g<i.length;g++)if((c=i[g])&&"setAttribute"in c==!!o&&(o?c.localName===o:c.nodeType===3)){e=c,i[g]=null;break}}if(e==null){if(o===null)return document.createTextNode(y);e=a?document.createElementNS("http://www.w3.org/2000/svg",o):document.createElement(o,y.is&&y),i=null,h=!1}if(o===null)b===y||h&&e.data===y||(e.data=y);else{if(i=i&&Je.call(e.childNodes),f=(b=s.props||dt).dangerouslySetInnerHTML,r=y.dangerouslySetInnerHTML,!h){if(i!=null)for(b={},g=0;g<e.attributes.length;g++)b[e.attributes[g].name]=e.attributes[g].value;(r||f)&&(r&&(f&&r.__html==f.__html||r.__html===e.innerHTML)||(e.innerHTML=r&&r.__html||""))}if(Un(e,y,b,a,h),r)t.__k=[];else if(g=t.props.children,ls(e,Array.isArray(g)?g:[g],t,s,n,a&&o!=="foreignObject",i,l,i?i[0]:s.__k&&st(s,0),h),i!=null)for(g=i.length;g--;)i[g]!=null&&os(i[g]);h||("value"in y&&(g=y.value)!==void 0&&(g!==e.value||o==="progress"&&!g||o==="option"&&g!==b.value)&&ft(e,"value",g,b.value,!1),"checked"in y&&(g=y.checked)!==void 0&&g!==e.checked&&ft(e,"checked",g,b.checked,!1))}return e}function fs(e,t,s){try{typeof e=="function"?e(t):e.current=t}catch(n){M.__e(n,s)}}function gs(e,t,s){var n,a;if(M.unmount&&M.unmount(e),(n=e.ref)&&(n.current&&n.current!==e.__e||fs(n,null,t)),(n=e.__c)!=null){if(n.componentWillUnmount)try{n.componentWillUnmount()}catch(i){M.__e(i,t)}n.base=n.__P=null,e.__c=void 0}if(n=e.__k)for(a=0;a<n.length;a++)n[a]&&gs(n[a],t,s||typeof e.type!="function");s||e.__e==null||os(e.__e),e.__=e.__e=e.__d=void 0}function qn(e,t,s){return this.constructor(e,s)}function _s(e,t,s){var n,a,i;M.__&&M.__(e,t),a=(n=typeof s=="function")?null:s&&s.__k||t.__k,i=[],Ft(t,e=(!n&&s||t).__k=et(J,null,[e]),a||dt,dt,t.ownerSVGElement!==void 0,!n&&s?[s]:a?null:t.firstChild?Je.call(t.childNodes):null,i,!n&&s?s:a?a.__e:t.firstChild,n),ps(i,e)}function $t(e,t){_s(e,t,$t)}function Zn(e,t,s){var n,a,i,l=Se({},e.props);for(i in t)i=="key"?n=t[i]:i=="ref"?a=t[i]:l[i]=t[i];return arguments.length>2&&(l.children=arguments.length>3?Je.call(arguments,2):s),tt(e.type,l,n||e.key,a||e.ref,null)}function gt(e,t){var s={__c:t="__cC"+is++,__:e,Consumer:function(n,a){return n.children(a)},Provider:function(n){var a,i;return this.getChildContext||(a=[],(i={})[t]=this,this.getChildContext=function(){return i},this.shouldComponentUpdate=function(l){this.props.value!==l.value&&a.some(kt)},this.sub=function(l){a.push(l);var h=l.componentWillUnmount;l.componentWillUnmount=function(){a.splice(a.indexOf(l),1),h&&h.call(l)}}),n.children}};return s.Provider.__=s.Consumer.contextType=s}Je=as.slice,M={__e:function(e,t,s,n){for(var a,i,l;t=t.__;)if((a=t.__c)&&!a.__)try{if((i=a.constructor)&&i.getDerivedStateFromError!=null&&(a.setState(i.getDerivedStateFromError(e)),l=a.__d),a.componentDidCatch!=null&&(a.componentDidCatch(e,n||{}),l=a.__d),l)return a.__E=a}catch(h){e=h}throw e}},ts=0,ss=function(e){return e!=null&&e.constructor===void 0},_e.prototype.setState=function(e,t){var s;s=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=Se({},this.state),typeof e=="function"&&(e=e(Se({},s),this.props)),e&&Se(s,e),e!=null&&this.__v&&(t&&this._sb.push(t),kt(this))},_e.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),kt(this))},_e.prototype.render=J,Xe=[],pt.__r=0,is=0;var jn=Object.freeze(Object.defineProperty({__proto__:null,Component:_e,Fragment:J,cloneElement:Zn,createContext:gt,createElement:et,createRef:Wn,h:et,hydrate:$t,get isValidElement(){return ss},get options(){return M},render:_s,toChildArray:nt},Symbol.toStringTag,{value:"Module"})),Me,q,Tt,vs,De=0,bs=[],_t=[],ys=M.__b,Ss=M.__r,Es=M.diffed,ws=M.__c,Ns=M.unmount;function Be(e,t){M.__h&&M.__h(q,e,De||t),De=0;var s=q.__H||(q.__H={__:[],__h:[]});return e>=s.__.length&&s.__.push({__V:_t}),s.__[e]}function se(e){return De=1,Ls(ks,e)}function Ls(e,t,s){var n=Be(Me++,2);if(n.t=e,!n.__c&&(n.__=[s?s(t):ks(void 0,t),function(i){var l=n.__N?n.__N[0]:n.__[0],h=n.t(l,i);l!==h&&(n.__N=[h,n.__[1]],n.__c.setState({}))}],n.__c=q,!q.u)){q.u=!0;var a=q.shouldComponentUpdate;q.shouldComponentUpdate=function(i,l,h){if(!n.__c.__H)return!0;var c=n.__c.__H.__.filter(function(r){return r.__c});if(c.every(function(r){return!r.__N}))return!a||a.call(this,i,l,h);var f=!1;return c.forEach(function(r){if(r.__N){var b=r.__[0];r.__=r.__N,r.__N=void 0,b!==r.__[0]&&(f=!0)}}),!(!f&&n.__c.props===i)&&(!a||a.call(this,i,l,h))}}return n.__N||n.__}function ve(e,t){var s=Be(Me++,3);!M.__s&&xt(s.__H,t)&&(s.__=e,s.i=t,q.__H.__h.push(s))}function Cs(e,t){var s=Be(Me++,4);!M.__s&&xt(s.__H,t)&&(s.__=e,s.i=t,q.__h.push(s))}function G(e){return De=5,Ot(function(){return{current:e}},[])}function Gn(e,t,s){De=6,Cs(function(){return typeof e=="function"?(e(t()),function(){return e(null)}):e?(e.current=t(),function(){return e.current=null}):void 0},s==null?s:s.concat(e))}function Ot(e,t){var s=Be(Me++,7);return xt(s.__H,t)?(s.__V=e(),s.i=t,s.__h=e,s.__V):s.__}function As(e,t){return De=8,Ot(function(){return e},t)}function it(e){var t=q.context[e.__c],s=Be(Me++,9);return s.c=e,t?(s.__==null&&(s.__=!0,t.sub(q)),t.props.value):e.__}function zn(e,t){M.useDebugValue&&M.useDebugValue(t?t(e):e)}function Kn(e){var t=Be(Me++,10),s=se();return t.__=e,q.componentDidCatch||(q.componentDidCatch=function(n,a){t.__&&t.__(n,a),s[1](n)}),[s[0],function(){s[1](void 0)}]}function Qn(){var e=Be(Me++,11);if(!e.__){for(var t=q.__v;t!==null&&!t.__m&&t.__!==null;)t=t.__;var s=t.__m||(t.__m=[0,0]);e.__="P"+s[0]+"-"+s[1]++}return e.__}function Yn(){for(var e;e=bs.shift();)if(e.__P&&e.__H)try{e.__H.__h.forEach(vt),e.__H.__h.forEach(It),e.__H.__h=[]}catch(t){e.__H.__h=[],M.__e(t,e.__v)}}M.__b=function(e){q=null,ys&&ys(e)},M.__r=function(e){Ss&&Ss(e),Me=0;var t=(q=e.__c).__H;t&&(Tt===q?(t.__h=[],q.__h=[],t.__.forEach(function(s){s.__N&&(s.__=s.__N),s.__V=_t,s.__N=s.i=void 0})):(t.__h.forEach(vt),t.__h.forEach(It),t.__h=[])),Tt=q},M.diffed=function(e){Es&&Es(e);var t=e.__c;t&&t.__H&&(t.__H.__h.length&&(bs.push(t)!==1&&vs===M.requestAnimationFrame||((vs=M.requestAnimationFrame)||Jn)(Yn)),t.__H.__.forEach(function(s){s.i&&(s.__H=s.i),s.__V!==_t&&(s.__=s.__V),s.i=void 0,s.__V=_t})),Tt=q=null},M.__c=function(e,t){t.some(function(s){try{s.__h.forEach(vt),s.__h=s.__h.filter(function(n){return!n.__||It(n)})}catch(n){t.some(function(a){a.__h&&(a.__h=[])}),t=[],M.__e(n,s.__v)}}),ws&&ws(e,t)},M.unmount=function(e){Ns&&Ns(e);var t,s=e.__c;s&&s.__H&&(s.__H.__.forEach(function(n){try{vt(n)}catch(a){t=a}}),s.__H=void 0,t&&M.__e(t,s.__v))};var Ms=typeof requestAnimationFrame=="function";function Jn(e){var t,s=function(){clearTimeout(n),Ms&&cancelAnimationFrame(t),setTimeout(e)},n=setTimeout(s,100);Ms&&(t=requestAnimationFrame(s))}function vt(e){var t=q,s=e.__c;typeof s=="function"&&(e.__c=void 0,s()),q=t}function It(e){var t=q;e.__c=e.__(),q=t}function xt(e,t){return!e||e.length!==t.length||t.some(function(s,n){return s!==e[n]})}function ks(e,t){return typeof t=="function"?t(e):t}var Xn=Object.freeze(Object.defineProperty({__proto__:null,useCallback:As,useContext:it,useDebugValue:zn,useEffect:ve,useErrorBoundary:Kn,useId:Qn,useImperativeHandle:Gn,useLayoutEffect:Cs,useMemo:Ot,useReducer:Ls,useRef:G,useState:se},Symbol.toStringTag,{value:"Module"}));function Rt(e){return e==="true"}function ei(e){return e.split("-").map((t,s)=>s===0?t.toLowerCase():t.charAt(0).toUpperCase()+t.slice(1)).join("")}function Fs(e,t){const s={},n={};return e.forEach(a=>{const{name:i,content:l}=a,h=ei(i.replace(t,"")),c=ti(l),f=h.match(/\[(.*)\]$/i);if(f!==null){const r=h.replace(f[0],""),b=f[1];n[b]=c,s[r]=n}else s[h]=c}),s}function ti(e){return e==="true"||e==="false"?Rt(e):e}const Bt=gt(void 0),si=Bt.Provider,ni=Bt.Consumer,$s="data-segment-code",Ts="globalmessage-segment-visible",Os="ac-gn-segmentbar-visible",Is=(e,t)=>{var s,n;e.showBanner?(t(!0),(s=document.querySelector("html"))==null||s.classList.add(`${Ts}`,`${Os}`),document.documentElement.setAttribute(`${$s}`,e.segmentCode.toLowerCase())):(t(!1),(n=document.querySelector("html"))==null||n.classList.remove(`${Ts}`,`${Os}`),document.documentElement.removeAttribute(`${$s}`))};var ii=0;function m(e,t,s,n,a){var i,l,h={};for(l in t)l=="ref"?i=t[l]:h[l]=t[l];var c={type:e,props:h,key:s,ref:i,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:--ii,__source:a,__self:n};if(typeof e=="function"&&(i=e.defaultProps))for(l in i)h[l]===void 0&&(h[l]=i[l]);return M.vnode&&M.vnode(c),c}const ai="/shop/goto/home",oi="/shop/goto/exitstore",ri=(e,t)=>{if(t in e&&e[t]!=="")return e[t];const s=Object.keys(e);let n="";return s.forEach(a=>{t!==void 0&&t.indexOf(`${a}-`)===0&&e[a]!==""&&(n=e[a])}),n!==""?n:e.other},xs=(e,t,s,n)=>{if(e.name!==void 0&&e.name!==""){const a=t.view.replace("{%STOREFRONT%}",e.name);s(a)}else{const a=ri(t.segments,e.segmentCode);s(a)}Is(e,n)};function li({view:e,segments:t,exit:s,exitRedirect:n=!1,wwwDomain:a,storeUrlPath:i}){const l=it(Bt),h=G(null),[c,f]=se(""),[r,b]=se(!1);let y="",o="";i!==void 0&&(y=`https://${a}${i}${ai}`,o=`https://${a}${i}${oi}`),ve(()=>{var k,T;if(((k=h.current)==null?void 0:k.dataset.strings)!==void 0){const I=JSON.parse(String((T=h.current)==null?void 0:T.dataset.strings));l==null||l.getStorefront().then(S=>{xs(S,I,f,b)},()=>{}),l==null||l.on("storefrontChange",S=>{xs(S,I,f,b)})}},[l]);const g=(k,T)=>{l==null||l.exitStorefront(k),k||(T.preventDefault(),l==null||l.getStorefront().then(I=>{Is(I,b)},()=>{})),window.dispatchEvent(new CustomEvent("resize")),window.dispatchEvent(new CustomEvent("segmentExit"))};return m(J,{children:m("ul",{class:"globalmessage-segment-content","data-strings":JSON.stringify({view:e,segments:t,exit:s}),ref:h,children:r&&m(J,{children:[m("li",{class:"globalmessage-segment-item",children:m("a",{href:y,class:"globalmessage-segment-link globalmessage-segment-view",children:c})}),m("li",{class:"globalmessage-segment-item",children:m("a",{href:o,class:"globalmessage-segment-link globalmessage-segment-exit",onClick:k=>g(n,k),children:s})})]})})})}function ci({locale:e="en-US",textDirection:t="ltr",dataStrings:s,exitRedirect:n=!1,wwwDomain:a,storeUrlPath:i}){return m("aside",{id:"globalmessage-segment",className:"globalmessage-segment",lang:e,dir:t,children:m(li,{...s,exitRedirect:n,wwwDomain:a,storeUrlPath:i})})}function ui({segmentData:e,isoLocale:t,textDirection:s="ltr",wwwDomain:n,storeUrlPath:a}){const i=G(!1);return ve(()=>{const l=document.querySelectorAll('meta[name^="globalmessage-"]'),h=Array.from(l),c=Fs(h,"globalmessage-");i.current=c.segmentRedirect},[]),m(J,{children:e!==void 0&&a!==void 0&&m(ci,{locale:t,textDirection:s,exitRedirect:i.current,dataStrings:e.dataStrings,wwwDomain:n,storeUrlPath:a})})}var sr="",hi={_attachEvents(){for(let e of this.events)Object.defineProperty(this.options.ref,e,{value:(...t)=>this.__triggerEvent(e,...t),configurable:!0,enumerable:!1,writable:!1})},_attachMethods(){for(let e of this.mixinsList)for(let t in e){const s=Object.getOwnPropertyDescriptor(e,t);switch(!0){case(typeof e[t]=="function"&&!this.events.includes(t)):Object.defineProperty(this.options.ref,t,{value:(...n)=>this.__triggerMethod(t,...n),enumerable:t[0]!=="_",configurable:!0,writable:!0});break;case!!s.set:Object.defineProperty(this.options.ref,t,{set:n=>this._enabledMixins.includes(e)&&s.set.call(this.options.ref,n)});break;case!!s.get:Object.defineProperty(this.options.ref,t,{get:()=>this._enabledMixins.includes(e)&&s.get.call(this.options.ref)});break}}},_attachDefaultMethods(e){for(let t in e)this.options.ref[t]=(...s)=>e[t].call(this,...s)}},mi={_destroy(){if(this.isDestroyed=!0,this.options.ref._viewportInfo=null,this.options.viewportEvents){for(const e of this.options.breakpoints)e.viewportQuery.removeEventListener("change",e._viewportChangeHandler);this.orientationQuery.removeEventListener("change",this._orientationChangeHandler),this.retinaQuery.removeEventListener("change",this._retinaChangeHandler)}}},di={_proxifyReference(e,t=[]){for(let[s,n]of Object.entries(e))if(n&&typeof n=="object"&&!Array.isArray(n)&&!n.nodeType){const i=t.concat([s]);Object.defineProperty(n,"__isProxy",{value:!0}),Object.defineProperty(n,"__path",{value:i}),e[s]=new Proxy(n,this._proxyHandler()),this._proxifyReference(n,i)}return Object.defineProperty(e,"__isProxy",{value:!0}),Object.defineProperty(e,"__path",{value:t}),new Proxy(e,this._proxyHandler())},_proxyHandler(){return{get:(e,t,s)=>{if(this.currentMixin){const n=e.__path?e.__path.concat(t).join("."):t;this.autoWatchedProps[n]=[...new Set(this.autoWatchedProps[n]?this.autoWatchedProps[n].concat(this.currentMixin):[this.currentMixin])]}return Reflect.get(e,t,s)},set:(e,t,s)=>{const n=e[t];if(n!==s){const a=s&&typeof s=="object"&&!Array.isArray(s)&&!s.nodeType&&!s instanceof NodeList&&!s.__isProxy,i=e.__path?e.__path.concat(t).join("."):t;Reflect.set(e,t,a?this._proxifyReference(s,i.split(".")):s),Object.keys(this.autoWatchedProps).includes(i)&&this._toggleMixins(i),Object.keys(this.options.watch).includes(i)&&this.__triggerEvent(this.options.watch[i],{from:n,to:s})}return!0}}}},pi={_toggleMixins(e){const t=[],s=[];for(let n of e?this.autoWatchedProps[e]||[]:this.mixinsList){this.currentMixin=n;const a=!n.isEnabledWhen||n.isEnabledWhen.call(this.options.ref)===!0;switch(this.currentMixin=null,!0){case(n._isEnabled===!1&&a):t.push(n),n._isEnabled=!0;break;case(n._isEnabled===!0&&!a):s.push(n),n._isEnabled=!1;break;default:n._isEnabled=a;break}}for(let n of s.reverse())n.destroy&&n.destroy.call(this.options.ref);this._enabledMixins=this._getEnabledMixins();for(let n of t){n._isEnabled=!0;for(let a of this.options.setupEvents)n[a]&&n[a].call(this.options.ref)}},_getEnabledMixins(){const e=[];if(this.isDestroyed)return e;const t=this.mixinsList.length;for(let s=0;s<t;s++)this.mixinsList[s]._isEnabled&&e.push(this.mixinsList[s]);return e}},fi={__triggerEvent(e,...t){if(this.isDestroyed)return this.options.ref;for(this.queue.unshift({event:e,data:t});this.queue.length;){const{event:s,data:n}=this.queue[0];this.queue.shift();const a=this._enabledMixins.length;for(let i=0;i<a;i++){const l=this._enabledMixins[i][s];l&&l.call(this.options.ref,...n)}}return e=="destroy"&&this._destroy(),this.options.ref},__triggerMethod(e,...t){if(this.isDestroyed)return;let s={[e]:()=>{}};for(let n=this._enabledMixins.length-1;n>=0;n--)if(this._enabledMixins[n][e]){s=this._enabledMixins[n];break}return s[e].call(this.options.ref,...t)}},gi={_setupViewportEvents(e,t,s){if(!!this.options.viewportEvents){this.events=[...new Set(this.events.concat(e))],this.options.ref._viewportInfo={};for(const n of this.options.breakpoints){const{name:a,mediaQuery:i}=n;n.viewportQuery=window.matchMedia(i),n.viewportQuery.matches&&(this.options.ref._viewportInfo.viewport=a),n._viewportChangeHandler=this._viewportChangeHandler.bind(this,a),n.viewportQuery.addEventListener("change",n._viewportChangeHandler)}this.retinaQuery=window.matchMedia(s),this.orientationQuery=window.matchMedia(t),this.options.ref._viewportInfo.retina=this.retinaQuery.matches,this.options.ref._viewportInfo.orientation=this.orientationQuery.matches?"portrait":"landscape",this._retinaChangeHandler=this._retinaChangeHandler.bind(this),this._orientationChangeHandler=this._orientationChangeHandler.bind(this),this.retinaQuery.addEventListener("change",this._retinaChangeHandler),this.orientationQuery.addEventListener("change",this._orientationChangeHandler)}},_viewportChangeHandler(e,{matches:t}){if(!t)return;const s={type:"viewport",from:this.options.ref._viewportInfo.viewport,to:e};this.options.ref._viewportInfo.viewport=e,this.options.ref.onViewportChange(s),this.options.ref.onScreenChange(s)},_orientationChangeHandler({matches:e}){const t=e?"portrait":"landscape";this.options.ref._viewportInfo.orientation=t;const s={type:"orientation",orientation:t};this.options.ref.onOrientationChange(s),this.options.ref.onScreenChange(s)},_retinaChangeHandler({matches:e}){this.options.ref._viewportInfo.retina=e;const t={type:"retina",retina:e};this.options.ref.onRetinaChange(t),this.options.ref.onScreenChange(t)}};function _i(...e){this.events=[...new Set(this.events.concat(...e))],this._attachEvents()}function vi(e){this._toggleMixins(e)}const bi=[{name:"S",mediaQuery:"only screen and (max-width: 734px)"},{name:"M",mediaQuery:"only screen and (min-width: 735px) and (max-width: 1068px)"},{name:"L",mediaQuery:"only screen and (min-width: 1069px) and (max-width: 1440px)"},{name:"X",mediaQuery:"only screen and (min-width: 1441px)"}],yi="only screen and (orientation: portrait)",Si="only screen and (-webkit-min-device-pixel-ratio: 1.5), screen and (min-resolution: 1.5dppx), screen and (min-resolution: 144dpi)",Ei={breakpoints:bi,events:[],ref:{},setupEvents:[],viewportEvents:!1,watch:{}},wi=["destroy"],Ni=["onViewportChange","onOrientationChange","onRetinaChange","onScreenChange"],Li={__addEvents:_i,__forceUpdate:vi};class Pt{constructor(t,...s){return Object.assign(Pt.prototype,di,gi,fi,hi,pi,mi),this.options=Object.assign({},Ei,t),this.events=[...new Set(this.options.events.concat(Object.values(this.options.watch),wi))],this.mixinsList=[...new Set(s.flat(9999).map(n=>n.default&&n.default()||typeof n=="function"&&n()||n))],this.isDestroyed=!1,this.queue=[],this.autoWatchedProps={},this.currentMixin=null,this._enabledMixins=[],this._setupViewportEvents(Ni,yi,Si),this._attachEvents(),this._attachMethods(),this._attachDefaultMethods(Li),this.options.ref=this._proxifyReference(this.options.ref,[]),this._toggleMixins(),this.options.ref}}var Ci={onViewportChange(e){this._isLayoutChange(e)&&this.onLayoutChange(this._isBreakpointWithMenu(),e)},_isLayoutChange(e){return this._isBreakpointWithMenu(e.from)!=this._isBreakpointWithMenu(e.to)},_isBreakpointWithMenu(e=this._viewportInfo.viewport){return this._viewportsWithMenu.includes(e)},_getCurrentLayout(){return this._isBreakpointWithMenu()?"compact":"regular"},_isTouch(){return document.documentElement.classList.contains("touch")}},Ai=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{};function Mi(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function Rs(e){if(e.__esModule)return e;var t=Object.defineProperty({},"__esModule",{value:!0});return Object.keys(e).forEach(function(s){var n=Object.getOwnPropertyDescriptor(e,s);Object.defineProperty(t,s,n.get?n:{enumerable:!0,get:function(){return e[s]}})}),t}var ki={BACKSPACE:8,TAB:9,ENTER:13,SHIFT:16,CONTROL:17,ALT:18,COMMAND:91,CAPSLOCK:20,ESCAPE:27,PAGE_UP:33,PAGE_DOWN:34,END:35,HOME:36,ARROW_LEFT:37,ARROW_UP:38,ARROW_RIGHT:39,ARROW_DOWN:40,DELETE:46,ZERO:48,ONE:49,TWO:50,THREE:51,FOUR:52,FIVE:53,SIX:54,SEVEN:55,EIGHT:56,NINE:57,A:65,B:66,C:67,D:68,E:69,F:70,G:71,H:72,I:73,J:74,K:75,L:76,M:77,N:78,O:79,P:80,Q:81,R:82,S:83,T:84,U:85,V:86,W:87,X:88,Y:89,Z:90,NUMPAD_ZERO:96,NUMPAD_ONE:97,NUMPAD_TWO:98,NUMPAD_THREE:99,NUMPAD_FOUR:100,NUMPAD_FIVE:101,NUMPAD_SIX:102,NUMPAD_SEVEN:103,NUMPAD_EIGHT:104,NUMPAD_NINE:105,NUMPAD_ASTERISK:106,NUMPAD_PLUS:107,NUMPAD_DASH:109,NUMPAD_DOT:110,NUMPAD_SLASH:111,NUMPAD_EQUALS:187,TICK:192,LEFT_BRACKET:219,RIGHT_BRACKET:221,BACKSLASH:220,SEMICOLON:186,APOSTRAPHE:222,APOSTROPHE:222,SPACEBAR:32,CLEAR:12,COMMA:188,DOT:190,SLASH:191},re=ki,Fi={selectors:["input","select","textarea","button","optgroup","option","menuitem","fieldset","object","a[href]","[tabindex]","[contenteditable]"].join(","),nodeName:{INPUT:"input",SELECT:"select",TEXTAREA:"textarea",BUTTON:"button",OPTGROUP:"optgroup",OPTION:"option",MENUITEM:"menuitem",FIELDSET:"fieldset",OBJECT:"object",A:"a"}},Bs=Fi,Ps=function(){this.focusableSelectors=Bs.selectors},at=Ps.prototype;at.isFocusableElement=function(e,t,s){if(t&&!this._isDisplayed(e))return!1;var n=Bs.nodeName[e.nodeName];return n?!e.disabled:e.contentEditable?(s=s||parseFloat(e.getAttribute("tabindex")),!isNaN(s)):!0},at.isTabbableElement=function(e,t){if(t&&!this._isDisplayed(e))return!1;var s=e.getAttribute("tabindex");return s=parseFloat(s),isNaN(s)?this.isFocusableElement(e,t,s):s>=0},at._isDisplayed=function(e){var t=e.getBoundingClientRect();return t.top===0&&t.left===0&&t.width===0&&t.height===0?!1:window.getComputedStyle(e).visibility!=="hidden"},at.getTabbableElements=function(e,t){for(var s=e.querySelectorAll(this.focusableSelectors),n=s.length,a=[],i=0;i<n;i++)this.isTabbableElement(s[i],t)&&a.push(s[i]);return a},at.getFocusableElements=function(e,t){for(var s=e.querySelectorAll(this.focusableSelectors),n=s.length,a=[],i=0;i<n;i++)this.isFocusableElement(s[i],t)&&a.push(s[i]);return a};var Dt=new Ps,Ds={AUTOCOMPLETE:"aria-autocomplete",CHECKED:"aria-checked",DISABLED:"aria-disabled",EXPANDED:"aria-expanded",HASPOPUP:"aria-haspopup",HIDDEN:"aria-hidden",INVALID:"aria-invalid",LABEL:"aria-label",LEVEL:"aria-level",MULTILINE:"aria-multiline",MULTISELECTABLE:"aria-multiselectable",ORIENTATION:"aria-orientation",PRESSED:"aria-pressed",READONLY:"aria-readonly",REQUIRED:"aria-required",SELECTED:"aria-selected",SORT:"aria-sort",VALUEMAX:"aria-valuemax",VALUEMIN:"aria-valuemin",VALUENOW:"aria-valuenow",VALUETEXT:"aria-valuetext",ATOMIC:"aria-atomic",BUSY:"aria-busy",LIVE:"aria-live",RELEVANT:"aria-relevant",DROPEFFECT:"aria-dropeffect",GRABBED:"aria-grabbed",ACTIVEDESCENDANT:"aria-activedescendant",CONTROLS:"aria-controls",DESCRIBEDBY:"aria-describedby",FLOWTO:"aria-flowto",LABELLEDBY:"aria-labelledby",OWNS:"aria-owns",POSINSET:"aria-posinset",SETSIZE:"aria-setsize"},Hs=Ds,Ws=Dt,Us="data-original-",bt="tabindex",Ht=function(e,t){var s=e.getAttribute(Us+t);s||(s=e.getAttribute(t)||"",e.setAttribute(Us+t,s))},$i=function(t,s){if(Ws.isFocusableElement(t,s))Ht(t,bt),t.setAttribute(bt,"-1");else for(var n=Ws.getTabbableElements(t,s),a=n.length;a--;)Ht(n[a],bt),n[a].setAttribute(bt,"-1");Ht(t,Hs.HIDDEN),t.setAttribute(Hs.HIDDEN,"true")},Vs=$i,Ti=function e(t,s,n){s=s||document.body;for(var a=t,i=t;a=a.previousElementSibling;)Vs(a,n);for(;i=i.nextElementSibling;)Vs(i,n);t.parentElement&&t.parentElement!==s&&e(t.parentElement,s,n)},Oi=function(e,t){let s;e instanceof NodeList?s=e:s=[].concat(e),t=Array.isArray(t)?t:[].concat(t),s.forEach(n=>{t.forEach(a=>{n.removeAttribute(a)})})},Ii=Oi,qs=Ii,xi=Ds,Wt="data-original-",Ut="tabindex",Vt=function(e,t){var s=e.getAttribute(Wt+t);s!==null&&(s===""?qs(e,t):e.setAttribute(t,s),qs(e,Wt+t))},Ri=function(t){Vt(t,Ut),Vt(t,xi.HIDDEN);for(var s=t.querySelectorAll(`[${Wt+Ut}]`),n=s.length;n--;)Vt(s[n],Ut)},Zs=Ri,Bi=function e(t,s){s=s||document.body;for(var n=t,a=t;n=n.previousElementSibling;)Zs(n);for(;a=a.nextElementSibling;)Zs(a);t.parentElement&&t.parentElement!==s&&e(t.parentElement,s)},Pi=Dt,Di=Ti,Hi=Bi,js=function(e,t){t=t||{},this._tabbables=null,this._excludeHidden=t.excludeHidden,this._firstTabbableElement=t.firstFocusElement,this._lastTabbableElement=null,this._relatedTarget=null,this.el=e,this._handleOnFocus=this._handleOnFocus.bind(this)},ot=js.prototype;ot.start=function(e){this.updateTabbables(),Di(this.el,null,this._excludeHidden);let t=document.activeElement;this._firstTabbableElement?!this.el.contains(document.activeElement)&&!e&&(this._firstTabbableElement.focus(),t=this._firstTabbableElement):console.warn("this._firstTabbableElement is null, CircularTab needs at least one tabbable element."),this._relatedTarget=t,document.addEventListener("focus",this._handleOnFocus,!0)},ot.stop=function(){Hi(this.el),document.removeEventListener("focus",this._handleOnFocus,!0)},ot.updateTabbables=function(){this._tabbables=Pi.getTabbableElements(this.el,this._excludeHidden),this._firstTabbableElement=this._firstTabbableElement||this._tabbables[0],this._lastTabbableElement=this._tabbables[this._tabbables.length-1]},ot._handleOnFocus=function(e){if(this.el.contains(e.target))this._relatedTarget=e.target;else{if(e.preventDefault(),this.updateTabbables(),this._relatedTarget===this._lastTabbableElement||this._relatedTarget===null){this._firstTabbableElement.focus(),this._relatedTarget=this._firstTabbableElement;return}if(this._relatedTarget===this._firstTabbableElement&&this._lastTabbableElement){this._lastTabbableElement.focus(),this._relatedTarget=this._lastTabbableElement;return}}},ot.destroy=function(){this.stop(),this.el=null,this._tabbables=null,this._firstTabbableElement=null,this._lastTabbableElement=null,this._relatedTarget=null,this._handleOnFocus=null};var Wi=js,Ui=function(t,s){return t===s?!1:"contains"in t?t.contains(s):!!(t.compareDocumentPosition(s)&Node.DOCUMENT_POSITION_CONTAINED_BY)},yt={onLayoutChange(){const{_currentFlyout:e,curtain:t}=this;this._setFlyoutHeights(),e&&(this.el.classList.add(this.classNames.blockTransitions),t.classList.add(this.classNames.blockTransitions),this.onFlyoutWillClose(e,!1).onFlyoutClose(e),requestAnimationFrame(()=>{this.el.classList.remove(this.classNames.blockTransitions),t.classList.remove(this.classNames.blockTransitions)}))},created(){this._currentFlyout=null,this._lastFlyoutTrigger=null,this._closingFlyout=null,this._flyoutTimeouts=[],this._isFlyoutActiveClick=!1,this.menuButton=this.menuButton||this.el.querySelector(`.${this.classNames.menuButton}`)},mounted(){this.initiateElements(),this.initiateListeners(),this.initiateFlyouts(),this.el.classList.remove(this.classNames.blockTransitions)},onMenuItemMouseLeave(){this._isBreakpointWithMenu()||this._preventFlyoutClose===!0||this._usesTouchEvents===!0||this.closeFlyout(this._currentFlyout)},onFlyoutWillOpen(e,t){var s,n,a,i,l;this.el.addEventListener("mouseleave",this.onMenuItemMouseLeave,{once:!0}),this._currentFlyout=e,this._lastFlyoutTrigger=this._getFlyoutItem(e).trigger?this._getFlyoutItem(e).trigger[this._getCurrentLayout()]:null,this.flyoutAbortController=new AbortController,this.flyoutAbortControllerSignal={signal:this.flyoutAbortController.signal},this.el.classList.add(this.classNames.animating),document.documentElement.setAttribute(`data-${this.classNames.el}-flyout-open`,"true"),t?e.classList.add(this.classNames.itemFlyoutChangeNext):(e.classList.add(this.classNames.itemFlyoutOpen),this.el.classList.add(this.classNames.withFlyoutOpen),document.addEventListener("keydown",this._onFlyoutDocumentKeyDown,this.flyoutAbortControllerSignal),!this._isBreakpointWithMenu()&&!this._isTouch()&&document.addEventListener("scroll",()=>this.closeFlyout(this._currentFlyout),this.flyoutAbortControllerSignal)),this._isBreakpointWithMenu()?(this._setFlyoutHeight(e),this.el.classList.contains(this.classNames.withMenuOpen)||((n=(s=this.menuButtonAnimation.open.top).beginElement)==null||n.call(s),(i=(a=this.menuButtonAnimation.open.bottom).beginElement)==null||i.call(a)),this._flyoutTimeouts.push(setTimeout(()=>{this.content.setAttribute("role","dialog"),this.content.setAttribute("aria-modal","true"),this.content.setAttribute("tabindex","-1"),this.content.setAttribute("aria-label",e.getAttribute("data-topnav-flyout-label"))},300))):(l=this._lastFlyoutTrigger)==null||l.setAttribute("aria-expanded",!0)},onFlyoutWillClose(e,t){var s,n,a,i,l;this.el.classList.add(this.classNames.withFlyoutClosing,this.classNames.animating),e.classList.add(this.classNames.itemFlyoutClosing),e.classList.remove(this.classNames.itemFlyoutOpen),t?e.classList.add(this.classNames.itemFlyoutChangePrevious):(this.el.classList.remove(this.classNames.withFlyoutOpen),this.flyoutAbortController&&this.flyoutAbortController.abort(),document.documentElement.removeAttribute(`data-${this.classNames.el}-flyout-open`),this._currentFlyout=null),this._flyoutTimeouts.push(setTimeout(()=>{this.content.removeAttribute("role"),this.content.removeAttribute("aria-modal"),this.content.removeAttribute("tabindex"),this.content.removeAttribute("aria-label")},300)),this._isBreakpointWithMenu()||(s=this._lastFlyoutTrigger)==null||s.setAttribute("aria-expanded",!1),t||(!this._isBreakpointWithMenu()&&this._getFlyout(e).classList.remove(this.classNames.flyoutShort),(a=(n=this.menuButtonAnimation.close.top).beginElement)==null||a.call(n),(l=(i=this.menuButtonAnimation.close.bottom).beginElement)==null||l.call(i)),this.circTab.stop()},onFlyoutOpen(e,t){this._getFlyoutItem(e),this.el.classList.remove(this.classNames.animating),t&&(e.classList.add(this.classNames.itemFlyoutOpen),e.classList.remove(this.classNames.itemFlyoutChangeNext)),this._isBreakpointWithMenu()?this.circTab.start():requestAnimationFrame(()=>this._checkFlyoutHeight(e)),addEventListener("pagehide",this._onWindowPagehide,{once:!0}),this._isFlyoutActiveClick=!1,this._closingFlyout&&this.closeFlyout(this._closingFlyout,!0)},onFlyoutClose(e,t){const s=this._getFlyoutItem(e);s.scrollContainer&&(s.scrollContainer.scrollTop=0),this.el.classList.remove(this.classNames.withFlyoutClosing,this.classNames.animating),e.classList.remove(this.classNames.itemFlyoutClosing),t&&(s.flyout.classList.remove(this.classNames.flyoutShort),e.classList.remove(this.classNames.itemFlyoutChangePrevious,this.classNames.itemFlyoutOpen)),this._isFlyoutActiveClick=!1,this._shouldDelayIconFlyoutOpen&&(this._delayFlyoutTarget&&this.openFlyout(this._delayFlyoutTarget),this._shouldDelayIconFlyoutOpen=!1),this._closingFlyout=null},onTextZoomResize(){this._setFlyoutHeights()},openFlyout(e){const t=this.flyouts.find(i=>i.item===e);let s,n,a;if(this._currentFlyout){const{_currentFlyout:i}=this,l=this.flyouts.find(h=>h.item===i);this._handleCompactMenuChangeTriggers(l,t),this.el.style.setProperty(this.cssVariables.flyoutNextHeight,getComputedStyle(this._getFlyout(e)).getPropertyValue(this.cssVariables.flyoutHeight)),this.el.style.setProperty(this.cssVariables.flyoutPreviousHeight,getComputedStyle(this._getFlyout(i)).getPropertyValue(this.cssVariables.flyoutHeight)),this.onFlyoutWillClose(i,!0),this.onFlyoutWillOpen(e,!0),n="animationend",a=e,s=h=>{this.onFlyoutOpen(h,!0),this.onFlyoutClose(i,!0)}}else this._handleCompactMenuChangeTriggers(t),this.onFlyoutWillOpen(e),n="transitionend",a=this._isBreakpointWithMenu()?this.content:e,s=i=>{this.onFlyoutOpen(i)};this._listenForAnimationChangeEnd(e,a,n,s)},closeFlyout(e=this._currentFlyout,t){(e!==this._currentFlyout||!this._currentFlyout)&&!t||(this._closingFlyout=e,this.onFlyoutWillClose(e),this._listenForAnimationChangeEnd(e,this._isBreakpointWithMenu()?this.content:e,"transitionend",()=>this.onFlyoutClose(e)))},initiateElements(){this.topNavList=this.topNavList||this.el.querySelector(`.${this.classNames.list}`),this.curtain=this.curtain||this.el.querySelector(`.${this.classNames.curtain}`)||document.querySelector(`.${this.classNames.el} ~ .${this.classNames.curtain}`),this.content=this.content||this.el.querySelector(`.${this.classNames.content}`),this.menuButton=this.menuButton||this.el.querySelector(`.${this.classNames.menuButton}`),this.menuButtonAnimation={open:{top:this.menuButton.querySelector(`#${this.options.className}-anim-menutrigger-bread-top-open`),bottom:this.menuButton.querySelector(`#${this.options.className}-anim-menutrigger-bread-bottom-open`)},close:{top:this.menuButton.querySelector(`#${this.options.className}-anim-menutrigger-bread-top-close`),bottom:this.menuButton.querySelector(`#${this.options.className}-anim-menutrigger-bread-bottom-close`)}}},initiateListeners(){const e=new AbortController,{signal:t}=e,s=!0,n=!0;this.el.addEventListener("focusout",this._onTopNavFocusOut),this._isBreakpointWithMenu()||(document.addEventListener("mousemove",a=>{a.target&&!a.target.closest(`.${this.classNames.list}`)&&e.abort()},{once:n}),this.topNavList.addEventListener("mouseover",a=>{a.stopPropagation()},{capture:s,signal:t}),this.topNavList.addEventListener("mouseout",()=>{e.abort()},{signal:t})),this.curtain&&this.curtain.addEventListener("click",this._onFlyoutCurtainClick)},initiateFlyouts(){var t,s,n;this.flyouts=[];const e=[...this.el.querySelectorAll(`.${this.classNames.flyout}`)].map(this._getItemAncestor);for(const a of e){let i={};i.item=a,i.flyout=(t=i.item)==null?void 0:t.querySelector(`.${this.classNames.flyout}`),i.scrollContainer=(s=i.flyout)==null?void 0:s.querySelector(`:scope > .${this.classNames.flyoutScrollContainer}`),i.content=(n=i.scrollContainer)==null?void 0:n.querySelector(`:scope > .${this.classNames.flyoutContent}`),i.trigger=i.content&&{regular:a.querySelector("[data-topnav-flyout-trigger-regular]"),compact:a.querySelector("[data-topnav-flyout-trigger-compact]")},this.flyouts.push(i)}this.setFlyoutItems(),this._setFlyoutHeights(),this.circTab=new Wi(this.el)},setFlyoutItems(){const e=(t,s=0)=>{const n=t.querySelectorAll(`.${this.classNames.flyoutItem}`);n.forEach((a,i)=>{a.style.setProperty(this.cssVariables.flyoutItemNumber,i)}),t.style.setProperty(this.cssVariables.flyoutItemTotal,n.length),t.style.setProperty(this.cssVariables.flyoutGroupNumber,s)};this.flyouts.forEach(t=>{const{flyout:s}=t,n=s.querySelectorAll(`.${this.classNames.flyoutItemGroup}`);n.length?n.forEach(e):e(s)})},onCurtainClick(){this.closeFlyout()},pagehide(e){var s;const{_currentFlyout:t}=this;!t||(this.el.classList.add(this.classNames.blockTransitions),(s=this.onFlyoutWillClose(t).onFlyoutClose(t))==null||s.closeMenu(),this.el.classList.remove(this.classNames.blockTransitions))},destroy(){this.closeFlyout(),this._destroyTimeouts(),this.flyoutAbortController&&this.flyoutAbortController.abort(),this.el.removeEventListener("focusout",this._onTopNavFocusOut),this.curtain&&this.curtain.removeEventListener("click",this._onFlyoutCurtainClick)},_checkFlyoutHeight(e){var h;const t=this._getFlyoutItem(e),{flyout:s,scrollContainer:n}=t,a=parseInt(getComputedStyle(this.el).getPropertyValue(this.cssVariables.flyoutSpacing)),i=parseInt(getComputedStyle(s).getPropertyValue(this.cssVariables.flyoutHeight)),l=window.innerWidth-n.clientWidth;window.innerHeight-a<i?(s.classList.add(this.classNames.flyoutShort),(h=this.flyoutAbortController)==null||h.abort()):s.classList.remove(this.classNames.flyoutShort),s.style.setProperty(this.cssVariables.scrollbarWidth,`${l}px`)},_listenForAnimationChangeEnd(e,t,s,n){const a=new AbortController,i=a.signal,l=this.flyouts.find(c=>c.item===e),h=({animationName:c,propertyName:f})=>{[c===`${this.options.className}-scrim-height-change`,c===`${this.options.className}-flyout-slide-forward-next`,c===`${this.options.className}-flyout-slide-back-next`,f==="height"&&l,f==="height"&&t===this.content].some(b=>!!b)&&(a.abort(),n(e))};t.addEventListener(s,h,{signal:i}),t.addEventListener("transitioncancel",h,{signal:i}),t.addEventListener("animationcancel",h,{signal:i})},_handleCompactMenuChangeTriggers(e,t){if(!this._isBreakpointWithMenu())return;const s=n=>{const a=Dt.getFocusableElements(n),i=a[0];i&&!a.includes(document.activeElement)&&i.focus()};this._listenForAnimationChangeEnd(e.flyout,this.content,`${t?"animation":"transition"}start`,n=>{setTimeout(s.bind(this,n),300)}),t&&this._listenForAnimationChangeEnd(t.flyout,this.content,"animationstart",n=>{var i;n.classList.contains(this.classNames.subMenu)?s(n):e.trigger&&((i=e.trigger[this._getCurrentLayout()])==null||i.focus())})},_destroyTimeouts(){this._flyoutTimeouts.forEach(e=>clearTimeout(e))},_getFlyout(e){var t;return(t=this._getFlyoutItem(e))==null?void 0:t.flyout},_getFlyoutItem(e){return this.flyouts.find(t=>t.item===e)},_getItemAncestor(e){return e.closest(`.${this.classNames.item}`)},_setFlyoutHeight(e,t=0){const s=n=>`${Math.min(480,Math.max(240,parseInt(n)/2))}ms`;if(this._isBreakpointWithMenu()){const n=this.content,a=window.innerHeight,i=s(a);n.style.setProperty(this.cssVariables.flyoutRateOfChange,i)}else{const n=this._getFlyoutItem(e),{content:a,flyout:i}=n;if(a){const l=parseInt(getComputedStyle(a).height),h=parseInt(getComputedStyle(this.el).getPropertyValue(this.cssVariables.topnavHeight));i.style.setProperty(this.cssVariables.flyoutHeight,`${l+h+t}px`),i.style.setProperty(this.cssVariables.flyoutRateOfChange,s(l+t))}}},_setFlyoutHeights(){var e;(e=this.flyouts)==null||e.forEach(t=>this._setFlyoutHeight(t.item))},_getFlyoutAnimationDuration(e){const s=(this._isBreakpointWithMenu()?this.content:this._getFlyout(e||this._currentFlyout)).style.getPropertyValue(this.cssVariables.flyoutRateOfChange);return parseInt(s)},_isFlyoutOpen(e){return this._currentFlyout===e},_onFlyoutDocumentKeyDown(e){var n,a;const{keyCode:t,target:s}=e;switch(t){case re.ESCAPE:const i=this._lastFlyoutTrigger,l=(n=s.closest)==null?void 0:n.call(s,`.${this.classNames.flyout}`),h=(a=this.flyouts.find(c=>c.trigger&&c.trigger[this._getCurrentLayout()]===i))==null?void 0:a.flyout;this.closeFlyout(),l===h&&this._flyoutTimeouts.push(setTimeout(()=>{i.focus()},300));break}},_onFlyoutCurtainClick(){this.onCurtainClick()},_onTopNavFocusOut(e){e.relatedTarget&&e.relatedTarget!==document.documentElement&&this._currentFlyout&&(Ui(this.el,e.relatedTarget)||this.closeFlyout())},_onWindowPagehide(e){this.pagehide()}},Gs=[yt,{created(){this.iconFlyoutAbortController=new AbortController,this._shouldDelayIconFlyoutOpen=!1,this._delayFlyoutTarget=null},mounted(){this.initiateIconFlyouts(),this.addIconFlyoutEvents()},destroy(){var e;(e=this.iconFlyoutAbortController)==null||e.abort()},onIconFlyoutFocusIn({currentTarget:e}){e.addEventListener("keydown",this.onIconFlyoutKeyDown,!0)},onIconFlyoutFocusOut({currentTarget:e}){e.removeEventListener("keydown",this.onIconFlyoutKeyDown,!0)},onIconFlyoutKeyDown(e){switch(e.keyCode){case re.SPACEBAR:this.onIconFlyoutClick(e);break}},onIconFlyoutClick(e){e.preventDefault();const t=this._getItemAncestor(e.currentTarget),s=this.el.classList.contains(this.classNames.animating),n=this._isFlyoutOpen(t);s?(this._shouldDelayIconFlyoutOpen=!n,this._delayFlyoutTarget=t):this[n?"closeFlyout":"openFlyout"](t)},onFlyoutOpen(e){for(const t of this.iconFlyouts)if(this._currentFlyout===t){this.el.classList.add(this.classNames.withIconFlyoutOpen);break}},onFlyoutWillClose(){this.el.classList.remove(this.classNames.withIconFlyoutOpen)},onMenuButtonClick(){for(const e of this.iconFlyouts)this._isFlyoutOpen(e)&&this.closeFlyout(e)},initiateIconFlyouts(){this.iconFlyouts=[...this.el.querySelectorAll(`[${this.dataAttributes.iconFlyoutEnabled}]`)]},addIconFlyoutEvents(){const{signal:e}=this.iconFlyoutAbortController;for(const t of this.iconFlyouts){const s=t.querySelector(`.${this.classNames.link}`);s.addEventListener("focusin",this.onIconFlyoutFocusIn,{signal:e}),s.addEventListener("focusout",this.onIconFlyoutFocusOut,{signal:e}),s.addEventListener("click",this.onIconFlyoutClick,{signal:e})}}}],Vi=[yt,{onLayoutChange(e){this.el.classList.contains(this.classNames.withMenuOpen)&&this.closeMenu(),this._updateMenuListenersForViewport(e),this._updateMenuAttributesForViewport(e)},created(){this.menu={},this.initiateMenuElements(),this._onMenuDocumentKeyDown=this._onMenuDocumentKeyDown.bind(this)},initiateMenuElements(){this.menu.elements={list:this.el.querySelector(`.${this.classNames.list}`),menuList:this.el.querySelector(`.${this.classNames.menuList}`),itemMenus:this.el.querySelectorAll(`.${this.classNames.itemMenu}`),scrim:document.querySelector(`.${this.classNames.el}.${this.classNames.scrim}`),curtain:document.querySelector(`.${this.classNames.el} ~ .${this.classNames.curtain}`),menu:this.el.querySelector(`.${this.classNames.menu}`),menuButton:this.el.querySelector(`.${this.classNames.menuButton}`),menuBackButton:this.el.querySelector(`.${this.classNames.menuBackButton}`),menuFlyout:this.el.querySelector('[data-topnav-flyout-item="menu"]'),menuLabels:{open:this.menuButton.dataset.topnavMenuLabelOpen,close:this.menuButton.dataset.topnavMenuLabelClose}}},onMenuButtonClick(e){if(this._isFlyoutActiveClick)return e.preventDefault();if(this._isFlyoutActiveClick=!0,this.el.classList.contains(this.classNames.withMenuOpen))this.closeMenu();else if(this.el.classList.contains(this.classNames.withFlyoutOpen)){this.menu.elements.menuButton.blur(),this._flyoutFocusTimeout=setTimeout(()=>{this._lastFlyoutTrigger.focus()},300);return}else this.openMenu()},beforeMount(){!this.options.curtainBlur&&this.removeCurtainBlur(),!this.options.scrimBlur&&this.removeScrimBlur()},mounted(){this._updateMenuListenersForViewport(this._isBreakpointWithMenu()),this._updateMenuAttributesForViewport(this._isBreakpointWithMenu()),this._setItemNumbers()},onFlyoutWillOpen(e){this._isBreakpointWithMenu()&&e.dataset.topnavFlyoutItem==="menu"&&(this.el.classList.contains(this.classNames.withMenuOpen)||(this.menu.elements.menuList.scrollTop=0))},onFlyoutOpen(e){this._isBreakpointWithMenu()&&this.menu.elements.menuButton.setAttribute("aria-label",this.menu.elements.menuLabels.close)},onFlyoutWillClose(){this.menu.elements.menuButton.setAttribute("aria-label",this.menu.elements.menuLabels.open)},openMenu(){this._isBreakpointWithMenu()&&this._setFlyoutHeight(this.menu.elements.menuFlyout),this.openFlyout(this.menu.elements.menuFlyout),this.el.classList.add(this.classNames.withMenuOpen),document.addEventListener("keydown",this._onMenuDocumentKeyDown)},closeMenu(){this.el.classList.remove(this.classNames.withMenuOpen),this.closeFlyout(),document.removeEventListener("keydown",this._onMenuDocumentKeyDown)},toggleMenu(){this.el.classList.contains(this.classNames.menuOpen)?this.closeMenu():this.openMenu()},onCurtainClick(){this.closeMenu()},pagehide(e){this.closeMenu()},destroy(){this.closeMenu(),this._removeMenuEvents()},addCurtainBlur(){this.menu.elements.curtain&&this.menu.elements.curtain.classList.remove(this.classNames.curtainNoBlur)},removeCurtainBlur(){this.menu.elements.curtain&&this.menu.elements.curtain.classList.add(this.classNames.curtainNoBlur)},addScrimBlur(){this.menu.elements.scrim&&this.menu.elements.scrim.classList.remove(this.classNames.scrimNoBlur)},removeScrimBlur(){this.menu.elements.scrim&&this.menu.elements.scrim.classList.add(this.classNames.scrimNoBlur)},_addMenuEvents(){this.curtain&&this.curtain.addEventListener("click",this._onMenuCurtainClick),this.menu.elements.menuButton.addEventListener("click",this.onMenuButtonClick),this.menu.elements.menuBackButton.addEventListener("click",this.onMenuBackButtonClick)},_removeMenuEvents(){this.curtain&&this.curtain.removeEventListener("click",this._onMenuCurtainClick),this.menu.elements.menuButton.removeEventListener("click",this.onMenuButtonClick),this.menu.elements.menuBackButton.removeEventListener("click",this.onMenuBackButtonClick)},_updateMenuListenersForViewport(e){e?this._addMenuEvents():this._removeMenuEvents()},_updateMenuAttributesForViewport(e){e?(this.menu.elements.list.setAttribute("role","none"),this.menu.elements.menuList.setAttribute("role","list"),[...this.menu.elements.menuList.children].forEach(t=>t.setAttribute("role","listitem"))):(this.menu.elements.menu.removeAttribute("role"),this.menu.elements.list.removeAttribute("role"),this.menu.elements.menuList.removeAttribute("role"),[...this.menu.elements.menuList.children].forEach(t=>t.removeAttribute("role")))},_onMenuCurtainClick(){this.onCurtainClick()},_setItemNumbers(){let e=0;this.menu.elements.itemMenus.forEach((t,s)=>{t.style.setProperty(this.cssVariables.flyoutItemNumber,s),++e}),this.menu.elements.menuList.style.setProperty(this.cssVariables.flyoutItemTotal,e)},_onMenuDocumentKeyDown(e){const{keyCode:t,target:s}=e;switch(t){case re.SPACEBAR:s.hasAttribute("data-topnav-flyout-trigger-compact")&&(e.preventDefault(),s.click());break;case re.ESCAPE:e.preventDefault(),this.closeMenu(),this._flyoutFocusTimeout=setTimeout(()=>{this.menu.elements.menuButton.focus()},300);break}}}],qi=[yt,{isEnabledWhen(){return this.submenuEnabled!==!1},onLayoutChange(){this.el.classList.remove(this.classNames.withSubMenuOpen),this._updateSubMenuListenersForViewport(this._isBreakpointWithMenu()),this._updateSubMenuAttributesForViewport(this._isBreakpointWithMenu()),this._setSubMenuItemCounts(),clearTimeout(this._currentSubMenuMouseOverTimeout)},mounted(){this.el.classList.remove(this.classNames.subMenusDisabled),this._findTopNavList(),this.initiateSubMenus()},onMenuBackButtonClick(){this._isFlyoutActiveClick=!0,this.openFlyout(this.menu.elements.menuFlyout)},onFlyoutWillClose(e,t){this.subMenuEls.includes(e)&&this.el.classList.remove(this.classNames.withSubMenuOpen)},onHiddenMenuItemClick(e){if(this._isFlyoutActiveClick)return e.preventDefault();const t=e.target.closest(`.${this.classNames.itemSubMenu}`),s=this.flyouts.map(n=>n.item);this._isFlyoutOpen(t)||(e.preventDefault(),s.includes(t)&&(this._isFlyoutActiveClick=!0,this.openFlyout(t)))},onMenuItemMouseOver({target:e}){if(this._usesTouchEvents)return;const t=this._getItemAncestor(e),s=120;clearTimeout(this._currentSubMenuMouseOverTimeout),this._currentSubMenuMouseOverTimeout=setTimeout(()=>{t&&t!==this._currentFlyout&&t!==this.menu.elements.menuFlyout&&(this.subMenuEls.includes(t)?this.openFlyout(t):this.closeFlyout(this._currentFlyout))},s),this.el.addEventListener("mouseleave",this.onMenuItemMouseLeave,{once:!0}),this._flyoutTimeouts.push(this._currentSubMenuMouseOverTimeout)},onMenuItemButtonClick(e){const{target:t}=e,s=!!t.closest(`.${this.classNames.subMenuTriggerGroup}`);if(!!t.closest(`.${this.classNames.subMenuTriggerButton}`)||s&&this._usesTouchEvents){const a=t.closest(`.${this.classNames.itemSubMenu}`),i=this._isFlyoutOpen(a),l=this._getItemAncestor(t),h=this._currentFlyout&&this._getItemAncestor(this._currentFlyout),c=this._getFlyout(a)!==void 0;l!==h&&c&&e.preventDefault(),i?this.closeFlyout(this._currentFlyout):this.openFlyout(a)}},onNavListTouchStart(e){this._usesTouchEvents=!0},onMenuItemMouseLeave(){clearTimeout(this._currentSubMenuMouseOverTimeout)},initiateSubMenus(){this.submenus=this.flyouts.filter(e=>e.item.classList.contains(this.classNames.itemSubMenu)).map(e=>{const{item:t}=e,s=t.querySelector(`.${this.classNames.subMenuContent}`),n=t.querySelector(`.${this.classNames.subMenuTriggerGroup}`),a=t.querySelector(`.${this.classNames.subMenuTriggerLink}`),i=a.getAttribute("aria-label"),l=t.querySelector(`.${this.classNames.subMenuTriggerButton}`),h=l.getAttribute("aria-label"),c={group:n,link:a,linkLabel:i,button:l,buttonLabel:h},f=[...t.querySelectorAll(`.${this.classNames.subMenuGroup}`)].map(r=>{const b=r.classList.contains(this.classNames.subMenuGroupElevated),y=r.querySelector(`.${this.classNames.subMenuHeader}`),o=r.querySelector(`.${this.classNames.subMenuList}`);return{isElevated:b,group:r,header:y,list:o}});return{...e,trigger:c,content:s,groups:f}}),this._findSubMenus(),this._setSubMenuItemCounts(),this._updateSubMenuListenersForViewport(this._isBreakpointWithMenu()),this._updateSubMenuAttributesForViewport(this._isBreakpointWithMenu())},onFlyoutWillOpen(e){!this.subMenuEls.includes(e)||this.el.classList.add(this.classNames.withSubMenuOpen)},destroy(){this.closeFlyout(this._currentFlyout),this.el.classList.add(this.classNames.subMenusDisabled),this._removeSubMenuEvents(),clearTimeout(this._compactSubMenuItemFocus)},_getSubMenu(e){return[...e.children].find(t=>t.classList.contains(this.classNames.subMenu))},_findTopNavList(){return this.topNavList=this.el.querySelector(`.${this.classNames.list}`),this.topNavList},_findSubMenus(){return this.subMenuEls=[...this.el.querySelectorAll(`.${this.classNames.itemSubMenu}`)],this.subMenuEls},_setSubMenuItemCounts(){const e=this._isBreakpointWithMenu();this.submenus.forEach(t=>{const{content:s,groups:n}=t;let a=0,i=0,l=0;e||(i=0),n.forEach((h,c)=>{const{isElevated:f,header:r,list:b,group:y}=h;y.style.setProperty(this.cssVariables.flyoutGroupNumber,c),e||(l=0),[r,...b.children].forEach((o,g)=>{o.style.setProperty(this.cssVariables.flyoutItemNumber,++l),(!c||e)&&++i}),f&&++a}),s.style.setProperty(this.cssVariables.flyoutElevatedGroupCount,a),s.style.setProperty(this.cssVariables.flyoutGroupTotal,n.length-1),s.style.setProperty(this.cssVariables.flyoutItemTotal,i)})},_addSubMenuEvents(){this.topNavList.addEventListener("touchstart",this.onNavListTouchStart,{once:!0,passive:!0}),this.topNavList.addEventListener("mouseover",this.onMenuItemMouseOver),this.topNavList.addEventListener("click",this.onMenuItemButtonClick);for(let e of this.subMenuEls)e.removeEventListener("click",this.onHiddenMenuItemClick)},_removeSubMenuEvents(){this.topNavList.removeEventListener("touchstart",this.onNavListTouchStart),this.topNavList.removeEventListener("mouseover",this.onMenuItemMouseOver),this.topNavList.removeEventListener("click",this.onMenuItemButtonClick);for(let e of this.subMenuEls)e.addEventListener("click",this.onHiddenMenuItemClick)},_updateSubMenuListenersForViewport(e){e?this._removeSubMenuEvents():this._addSubMenuEvents()},_updateSubMenuAttributesForViewport(e){this.submenus.forEach(({trigger:t})=>{e?(t.group.setAttribute("role","none"),t.link.setAttribute("role","button"),t.buttonLabel&&t.link.setAttribute("aria-label",t.buttonLabel)):(t.group.removeAttribute("role"),t.link.removeAttribute("role"),t.linkLabel&&t.link.setAttribute("aria-label",t.linkLabel))})}}],Zi=function(t){const s={};for(const n in t)s[n]=t[n].reduce(function(a,i){return a[i.name]=!1,a},{version:{string:"",major:0,minor:0,patch:0,documentMode:!1}});return s},ji={browser:[{name:"edge",userAgent:"Edge",version:["rv","Edge"],test:function(e){return e.ua.indexOf("Edge")>-1||e.ua==="Mozilla/5.0 (Windows NT 10.0; Win64; x64)"}},{name:"edgeChromium",userAgent:"Edge",version:["rv","Edg"],test:function(e){return e.ua.indexOf("Edg")>-1&&e.ua.indexOf("Edge")===-1}},{name:"headlessChrome",userAgent:"HeadlessChrome"},{name:"chrome",userAgent:"Chrome"},{name:"firefox",test:function(e){return e.ua.indexOf("Firefox")>-1&&e.ua.indexOf("Opera")===-1},version:"Firefox"},{name:"android",userAgent:"Android"},{name:"safari",test:function(e){return e.ua.indexOf("Safari")>-1&&e.vendor.indexOf("Apple")>-1},version:"Version"},{name:"ie",test:function(e){return e.ua.indexOf("IE")>-1||e.ua.indexOf("Trident")>-1},version:["MSIE","rv"],parseDocumentMode:function(){let e=!1;return document.documentMode&&(e=parseInt(document.documentMode,10)),e}},{name:"opera",userAgent:"Opera",version:["Version","Opera"]},{name:"samsung",userAgent:"SamsungBrowser"}],os:[{name:"windows",test:function(e){return e.ua.indexOf("Windows")>-1},version:"Windows NT"},{name:"osx",userAgent:"Mac",test:function(e){return e.ua.indexOf("Macintosh")>-1}},{name:"ios",test:function(e){return e.ua.indexOf("iPhone")>-1||e.ua.indexOf("iPad")>-1},version:["iPhone OS","CPU OS"]},{name:"linux",userAgent:"Linux",test:function(e){return(e.ua.indexOf("Linux")>-1||e.platform.indexOf("Linux")>-1)&&e.ua.indexOf("Android")===-1}},{name:"fireos",test:function(e){return e.ua.indexOf("Firefox")>-1&&e.ua.indexOf("Mobile")>-1},version:"rv"},{name:"android",userAgent:"Android",test:function(e){return e.ua.indexOf("Android")>-1}},{name:"chromeos",userAgent:"CrOS"}]};const Gi=Zi,qt=ji;function zi(e){return new RegExp(e+"[a-zA-Z\\s/:]+([0-9_.]+)","i")}function Ki(e,t){if(typeof e.parseVersion=="function")return e.parseVersion(t);{let s=e.version||e.userAgent;typeof s=="string"&&(s=[s]);const n=s.length;let a;for(let i=0;i<n;i++)if(a=t.match(zi(s[i])),a&&a.length>1)return a[1].replace(/_/g,".")}return!1}function zs(e,t,s){const n=e.length;let a,i;for(let l=0;l<n;l++)if(typeof e[l].test=="function"?e[l].test(s)===!0&&(a=e[l].name):s.ua.indexOf(e[l].userAgent)>-1&&(a=e[l].name),a){if(t[a]=!0,i=Ki(e[l],s.ua),typeof i=="string"){const h=i.split(".");t.version.string=i,h&&h.length>0&&(t.version.major=parseInt(h[0]||0),t.version.minor=parseInt(h[1]||0),t.version.patch=parseInt(h[2]||0))}else a==="edge"&&(t.version.string="12.0.0",t.version.major="12",t.version.minor="0",t.version.patch="0");return typeof e[l].parseDocumentMode=="function"&&(t.version.documentMode=e[l].parseDocumentMode()),t}return t}function Qi(e){const t={},s=Gi(qt);return t.browser=zs(qt.browser,s.browser,e),t.os=zs(qt.os,s.os,e),t}var Yi=Qi;const Zt=typeof window!="undefined"?window.navigator:{userAgent:"",platform:"",vendor:""},Ji={ua:Zt.userAgent,platform:Zt.platform,vendor:Zt.vendor};var Xi=Yi(Ji);let jt;var ea=function(){return jt||(jt=Xi),jt},ta={created(){this.viewportMeta=document.querySelector("meta[name=viewport]"),this.DISABLE_ZOOM_TOKEN=", maximum-scale=1, user-scalable=0",this._setZoomClass=this._debounce(this._setZoomClass)},onLayoutChange(){this.scrollSwitchUnlock()},onFlyoutWillOpen(e,t){this._isBreakpointWithMenu()&&!t&&this.scrollSwitchLock()},onFlyoutWillClose(e,t){this._isBreakpointWithMenu()&&!t&&this.scrollSwitchUnlock()},scrollSwitchLock(){const e=window.innerWidth-document.documentElement.clientWidth,t=Boolean(e);document.documentElement.style.setProperty(this.cssVariables.scrollbarWidth,`${e}px`),document.documentElement.classList.add(this.classNames.noScroll),document.documentElement.classList.toggle(this.classNames.noScrollLong,t),this._setZoomClass(),window.visualViewport.addEventListener("resize",this._setZoomClass),this._shouldManageZoom()&&this.viewportMeta.setAttribute("content",`${this.viewportMeta.getAttribute("content")}${this.DISABLE_ZOOM_TOKEN}`)},scrollSwitchUnlock(){document.documentElement.style.removeProperty(this.cssVariables.scrollbarWidth),document.documentElement.classList.remove(this.classNames.noScroll),document.documentElement.classList.remove(this.classNames.noScrollLong),document.documentElement.classList.remove(this.classNames.noScrollY),window.removeEventListener("resize",this._setZoomClass),this._shouldManageZoom()&&this.viewportMeta.setAttribute("content",this.viewportMeta.getAttribute("content").replace(this.DISABLE_ZOOM_TOKEN,""))},_debounce(e,t=300){let s;return(...n)=>{window.clearTimeout(s),s=window.setTimeout(e.bind(this,...n),t)}},_setZoomClass(){Math.floor(this.el.scrollWidth)>window.visualViewport.width?document.documentElement.classList.add(this.classNames.noScrollY):document.documentElement.classList.remove(this.classNames.noScrollY)},_shouldManageZoom(){return!(!ea().browser.android||!this.viewportMeta)}},sa={created(){this.textZoom={}},mounted(){this.textZoom.topNavStyles=getComputedStyle(this.el),this.textZoom.topNavBaseFontSize=parseInt(this.textZoom.topNavStyles.getPropertyValue(this.cssVariables.fontSize)),this._createfontSizeObserverElement(),this._createfontSizeObserver()},onTextZoomResize(e){const s=parseInt(this.textZoom.topNavStyles.fontSize)/this.textZoom.topNavBaseFontSize;this.el.classList[s<=1?"remove":"add"](this.classNames.textZoomIn),this.el.style.setProperty(this.cssVariables.textZoomScale,s)},destroy(){this.textZoom.fontSizeObserver.unobserve(this.textZoom.fontSizeObserverElement),this.el.removeChild(this.textZoom.fontSizeObserverElement),this.textZoom=null},_createfontSizeObserverElement(){this.textZoom.fontSizeObserverElement=document.createElement("span"),this.textZoom.fontSizeObserverElement.innerHTML="&nbsp;",this.textZoom.fontSizeObserverElement.style.visibility="hidden",this.textZoom.fontSizeObserverElement.style.position="absolute",this.textZoom.fontSizeObserverElement.style.top="0",this.textZoom.fontSizeObserverElement.style.zIndex="-1",this.el.appendChild(this.textZoom.fontSizeObserverElement)},_createfontSizeObserver(){this.textZoom.fontSizeObserver=new ResizeObserver(this.onTextZoomResize),this.textZoom.fontSizeObserver.observe(this.textZoom.fontSizeObserverElement)}},na=Object.prototype.hasOwnProperty,ia=function e(t){if(typeof t!="object"||t===null)throw new TypeError("object-utils.deepClone : Invalid parameter - expected object");var s=Array.isArray(t)?[]:{};for(var n in t)na.call(t,n)&&(typeof t[n]=="object"&&t[n]!==null?s[n]=e(t[n]):s[n]=t[n]);return s};function Gt(e,t,s,n){return e?{key:t?"["+t+"]":"",val1:s,val2:n}:!1}var aa=function e(t,s,n){var a;if(!t||!s||typeof t!="object"||typeof s!="object"){var i=t===s;return i||Gt(n,a,t,s)}var l=Object.keys(t),h=l.length,c=Object.keys(s),f=c.length;if(h!==f)return Gt(n,a,t,s);for(var r=0;r<h;r++){a=l[r];var b=t[a],y=s[a];if(typeof b=="object"&&typeof y=="object"){var o=e(b,y,n);if(typeof o!="boolean"&&(o.key="["+a+"]"+o.key),o!==!0)return o}else if(b!==y)return Gt(n,a,b,y)}return!0},oa=Object.prototype.hasOwnProperty,ra=function(t){if(typeof t!="object")throw new TypeError("object-utils.isEmpty : Invalid parameter - expected object");for(var s in t)if(oa.call(t,s))return!1;return!0},Ks={deepClone:ia,isDeepEqual:aa,isEmpty:ra},la=[Gs,{isEnabledWhen(){return this.searchEnabled!==!1},created(){this.search={},this.search.state={isOpening:!1,activeState:0,isAnimating:!1,lastAnimatedItem:null,count:{textContent:""}},this.search.elements={results:{},initialResults:null},this.search.templateFunction=this._createSearchResultsTemplate,this.curtain=this.curtain||document.querySelector(`.${this.classNames.el} ~ .${this.classNames.curtain}`),this.topNavList=this.topNavList||this.el.querySelector(`.${this.classNames.list}`)},beforeMount(){this._setupSearchElements(),this._addSearchEvents()},destroy(){clearTimeout(this.search.searchDebounce),this.closeFlyout(this.search.el),this._removeSearchEvents()},onFlyoutWillOpen(e){e===this.search.elements.el&&(this.clearSearch(),this.search.state.isOpening=!0,this.search.state.activeState=0,this.search.initialResults?this._renderSearchResults(this.search.templateFunction(this.search.initialResults)):this.onSearchUpdate(),this._addSearchAnimationEvents())},onFlyoutOpen(e){e===this.search.elements.el&&(this.search.elements.input.focus(),this._getFlyoutItem(e).scrollContainer.scrollTop=0,this.search.state.isOpening=!1)},onFlyoutClose(e){if(e!==this.search.elements.el)return;this.clearSearch();const t=(s,n)=>{n.substr(0,5)==="shift"&&s.classList.remove(n)};this.search.elements.el.classList.forEach(t.bind(this,this.search.elements.el)),[...this.search.elements.results.querySelectorAll(`.${this.classNames.searchResultsContainer}`)].forEach((s,n)=>{n&&s.remove()}),this._setFlyoutHeight(this.search.elements.el),this._preventFlyoutClose=!1,clearTimeout(this.search.countTimeoutId),this._removeSearchAnimationEvents()},onSearchMouseMove(e){this._preventFlyoutClose=!1},onSearchInputKeyDown(e){const{keyCode:t}=e;switch(t){case re.SHIFT:case re.CONTROL:case re.ALT:case re.COMMAND:case re.CAPSLOCK:break;case re.ARROW_UP:e.preventDefault(),this.search.selectionController.active>=0&&(--this.search.selectionController.active,this._highlightSearchSelection());break;case re.ARROW_DOWN:e.preventDefault(),this.search.selectionController.active<this.search.selectionController.links.length-1&&(++this.search.selectionController.active,this._highlightSearchSelection());break;case re.ENTER:this.search.elements.input.value.trim()===""&&this.search.selectionController.active===-1?(e.preventDefault(),e.stopPropagation()):this.search.selectionController.active>-1?this.search.selectionController.links[this.search.selectionController.active].click():this.onSearchInputChange(e);break;case re.ESCAPE:e.preventDefault();break;default:this._preventFlyoutClose=!0;const s=getComputedStyle(this.search.elements.el).getPropertyValue(this.cssVariables.searchResultsTimeoutDuration),n=s.includes("ms")?parseInt(s):s.includes("s")?parseFloat(s)*1e3:0;clearTimeout(this.search.searchDebounce),this.search.searchDebounce=setTimeout(()=>this.onSearchInputChange(e),n)}},onSearchInputChange(e){var a,i;const{keyCode:t}=e,s=((i=(a=e.target)==null?void 0:a.value)==null?void 0:i.trim())||"";if(s.length<2&&!this.search.previousSearchTerm||this.search.previousSearchTerm===s||t===re.ENTER){this._updateSearchFieldButtons();return}this.search.previousSearchTerm=s,this.onSearchUpdate(e)},onSearchResultsRendered(){var a,i;const{value:e}=this.search.elements.input,t=(a=this.search.elements.results)==null?void 0:a.querySelectorAll(`.${this.classNames.searchResultsCurrent} .${this.classNames.searchResultsContainer}`).length,n=`${(i=this.search.elements.results)==null?void 0:i.querySelectorAll(`.${this.classNames.searchResultsCurrent} .${this.classNames.searchResultsListItem}`).length} ${this.search.state.resultsLabel}`;this._flyoutTimeouts.push(setTimeout(()=>{this.search.elements.count.textContent=n,this._flyoutTimeouts.push(setTimeout(()=>{this.search.elements.count.textContent=""},this.search.state.countResetDelayTime))},this.search.state.countSetDelayTime)),this._updateSearchFieldButtons(),this.search.elements.el.classList[e.length>1?"add":"remove"](this.classNames.searchWithResults),this.search.elements.el.classList[t?"remove":"add"](this.classNames.searchNoResults),this._setFlyoutHeight(this.search.elements.el,this._getSearchFlyoutHeightOffset())},blurSearchInput(e){const t=e.type==="touchmove";this.menu.elements.menuButton.contains(e.target)||t&&this.search.elements.input.blur()},addSearchInputFocusEvents(){this.content.addEventListener("touchstart",this.blurSearchInput,{once:!0}),this.content.addEventListener("touchmove",this.blurSearchInput,{once:!0})},removeSearchInputFocusEvents(){this.content.removeEventListener("touchstart",this.blurSearchInput),this.content.removeEventListener("touchmove",this.blurSearchInput)},onSearchResetClick(e){e.preventDefault(),this.clearSearch(),this.search.elements.input.focus(),this.onSearchUpdate()},clearSearch(){this.search.elements.formButtons.forEach(e=>e.setAttribute("tabindex","-1")),this.search.elements.input.value="",this.search.previousSearchTerm="",this.search.elements.cachedResults="",clearTimeout(this.search.elements.countTimeoutId)},setInitialSearchResults(e){this.search.initialResults=e,this._renderSearchResults(this.search.templateFunction(this.search.initialResults))},setSearchResults(e=[]){var n,a,i;const t=Ks.isDeepEqual(e,this.search.initialResults);let s=!1;if(this.search.elements.cachedResults&&e.length){const l=f=>f.reduce((r,b)=>(r.push({...b,results:b.results.map(y=>({...y,highlight:null}))}),r),[]),h=l(e),c=l(this.search.elements.cachedResults);s=Ks.isDeepEqual(h,c)}if(t&&!this.search.elements.cachedResults){this._updateSearchFieldButtons();return}else if(!e.length&&this.search.elements.cachedResults){this.search.elements.el.classList.add(this.classNames.searchResultsOverrideHighlight),this._updateSearchFieldButtons();return}else if(s){const{cachedSearchValue:l}=this.search,{value:h}=this.search.elements.input,c=!(l.includes(h)||h.includes(l));this.search.elements.el.classList[c?"add":"remove"](this.classNames.searchResultsOverrideHighlight)}else this.search.elements.cachedResults=((a=(n=this.search.elements.input)==null?void 0:n.value)==null?void 0:a.length)>1?e:null,this.search.elements.el.classList.remove(this.classNames.searchResultsOverrideHighlight);this.search.cachedSearchValue=(i=this.search.elements.input)==null?void 0:i.value,this._renderSearchResults(this.search.templateFunction(e),s)},_addSearchEvents(){this.search.elements.flyout.addEventListener("mousemove",this.onSearchMouseMove),this.search.elements.reset.addEventListener("click",this.onSearchResetClick),this.search.elements.input.addEventListener("keydown",this.onSearchInputKeyDown),this.search.elements.input.addEventListener("paste",this.onSearchInputKeyDown),this.search.elements.el.addEventListener("focusin",this._onSearchFocusin),this.search.elements.el.addEventListener("focusout",this._onSearchFocusout)},_removeSearchEvents(){this.search.elements.flyout.removeEventListener("mousemove",this.onSearchMouseMove),this.search.elements.reset.removeEventListener("click",this.onSearchResetClick),this.search.elements.input.removeEventListener("keydown",this.onSearchInputKeyDown),this.search.elements.input.removeEventListener("paste",this.onSearchInputKeyDown),this.search.elements.el.removeEventListener("focusin",this._onSearchFocusin),this.search.elements.el.removeEventListener("focusout",this._onSearchFocusout)},_addSearchAnimationEvents(){this.el.addEventListener("transitionstart",this._onFlyoutTransitionStart),this.el.addEventListener("transitionend",this._onFlyoutTransitionEnd),this.search.elements.results.addEventListener("animationstart",this._onResultsAnimationStart),this.search.elements.results.addEventListener("animationend",this._onResultsAnimationEnd)},_removeSearchAnimationEvents(){this.el.removeEventListener("transitionstart",this._onFlyoutTransitionStart),this.el.removeEventListener("transitionend",this._onFlyoutTransitionEnd),this.search.elements.results.removeEventListener("animationstart",this._onResultsAnimationStart),this.search.elements.results.removeEventListener("animationend",this._onResultsAnimationEnd)},_onSearchFocusin({target:e}){e===this.search.elements.input&&this.addSearchInputFocusEvents()},_onSearchFocusout({target:e}){e===this.search.elements.input&&this.removeSearchInputFocusEvents()},_onSearchAnimationEnd(){var e;this.search.state.activeState||this.search.elements.results.container.remove(),(e=this.search.elements.results.containerPrevious)==null||e.remove(),this.el.classList.remove(this.classNames.animating),this.search.state.isAnimating=!1,this.search.state.lastAnimatedItem=null},_onResultsAnimationStart({animationName:e,target:t}){e.includes("-search-")&&(this.search.state.lastAnimatedItem=t)},_onResultsAnimationEnd({animationName:e,elapsedTime:t,target:s}){e.includes("-search-")&&!!t&&s===this.search.state.lastAnimatedItem&&!this.search.state.isAnimating&&this._onSearchAnimationEnd()},_onFlyoutTransitionStart({propertyName:e,target:t}){const s=this._isBreakpointWithMenu()?this.content:this.search.elements.flyout;t===s&&e==="height"&&(this.search.state.isAnimating=!0)},_onFlyoutTransitionEnd({propertyName:e,target:t}){const s=this._isBreakpointWithMenu()?this.content:this.search.elements.flyout;t===s&&e==="height"&&this._onSearchAnimationEnd()},_getSearchFlyoutHeightOffset(){const{marginTop:e}=getComputedStyle(this.search.elements.results),t=this.search.elements.el.classList.contains(this.classNames.searchNoResults);let s=0;return t&&(s=parseInt(e)*-1),s},_setSearchItemNumbers(e){const t=e||this.search.elements.flyout,s=t.querySelector(`.${this.classNames.searchResultsCurrent}`),n=t.querySelector(`.${this.classNames.searchResultsPrevious}`),a=s!=null&&s.children.length?s:n;if(!a)return;const i=[`.${this.classNames.searchResultsHeader}`,`.${this.classNames.searchResultsListItem}`],l=[...a.querySelectorAll(`.${this.classNames.searchResultsContainer}`)],h=[...a.querySelectorAll(i.join(", "))];l.forEach((c,f)=>c.style.setProperty(this.cssVariables.flyoutGroupNumber,f)),h.forEach((c,f)=>c.style.setProperty(this.cssVariables.flyoutItemNumber,f)),this.search.elements.flyout.style.setProperty(this.cssVariables.flyoutItemTotal,h.length-1)},_setupSearchElements(){this.search.elements.el=this.topNavList.querySelector(`.${this.classNames.search}`),this.search.elements.link=this.search.elements.el.querySelector(`.${this.classNames.linkSearch}`),this.search.elements.flyout=this.search.elements.el.querySelector(`.${this.classNames.subMenu}`),this.search.elements.content=this.search.elements.el.querySelector(`.${this.classNames.flyoutContent}`),this.search.elements.form=this.search.elements.flyout.querySelector(`.${this.classNames.searchForm}`),this.search.elements.input=this.search.elements.flyout.querySelector(`.${this.classNames.searchInput}`),this.search.elements.submit=this.search.elements.flyout.querySelector(`.${this.classNames.searchSubmit}`),this.search.elements.reset=this.search.elements.flyout.querySelector(`.${this.classNames.searchReset}`),this.search.elements.results=this.search.elements.flyout.querySelector(`.${this.classNames.searchResults}`),this.search.elements.count=this.search.elements.flyout.querySelector(`.${this.classNames.searchResultsCount}`),this.search.elements.resultsListText=Array.from(this.search.elements.flyout.querySelectorAll(`.${this.classNames.searchResultsListText}`)),this.search.elements.formButtons=[this.search.elements.submit,this.search.elements.reset],this.search.elements.currentResults=null,this.search.state.resultsLabel=this.search.elements.count.getAttribute("data-topnav-searchresults-label"),this.search.state.countSetDelayTime=300,this.search.state.countResetDelayTime=1e4,this.search.elements.el.setAttribute(this.dataAttributes.iconFlyoutEnabled,!0)},_updateSearchFieldButtons(){const{value:e}=this.search.elements.input;this.search.elements.formButtons.forEach(t=>{e?(t.setAttribute("tabindex","0"),t.removeAttribute("disabled"),t.removeAttribute("aria-hidden")):(t.setAttribute("tabindex","-1"),t.setAttribute("disabled",""),t.setAttribute("aria-hidden","true"))})},_highlightSearchSelection(){this.search.selectionController,this.search.selectionController.links.forEach((e,t)=>{e.classList[t===this.search.selectionController.active?"add":"remove"](this.classNames.searchResultsHover)})},_initSearchResultsSelectionController(){var e;this.search.selectionController={},this.search.selectionController.links=[],this.search.selectionController.active=-1,this.search.selectionController.links=((e=this.search.elements.results.container)==null?void 0:e.querySelectorAll(`.${this.classNames.searchResultsListLink}`))||[]},_createSearchResultsTemplate(e){const t=this._getCurrentLayout(),s={width:t==="compact"?13:9,height:t==="compact"?25:16};return`${e.map(n=>{const{title:a,results:i,icon:l}=n;return`
				<div class="${this.classNames.searchResultsContainer}">
					<h2 class="${this.classNames.searchResultsHeader}">${a}</h2>
					<ul class="${this.classNames.searchResultsList}">

						${i.map(h=>{const{url:c,highlight:f}=h;let{label:r}=h;if(f){const[b,y]=Object.entries(f)[0],o=Number(b)+Number(y),g=r.slice(0,b),k=r.slice(b,o),T=r.slice(o),{searchResultsTextHighlight:I}=this.classNames;r=`${g}<span class="${I}">${k}</span>${T}`}return`
								<li class="${this.classNames.searchResultsListItem}">
									<a class="${this.classNames.searchResultsListLink}" href="${c}">
										<span class="${this.classNames.searchResultsListIcon}">
											<svg width="${s.width}" height="${s.height}"><use href="#${this.options.className}-list-icon-${l}-${t}" /></svg>
										</span>
										<span class="${this.classNames.searchResultsListText}">${r}</span>
									</a>
								</li>`}).join("")}
					</ul>
				</div>`}).join("")}`},_appendSearchResultsContent(e){const t=document.createElement("div");return t.classList.add(this.classNames.searchResultsCurrent),t.innerHTML=e,this.search.elements.currentResults=t,t},_renderSearchResults(e,t=!1){var l,h,c;const s=this.search.elements.el.querySelector(`.${this.classNames.searchResults}`),n=this._appendSearchResultsContent(e),a=this.search.elements.currentResults.querySelectorAll(`.${this.classNames.searchResultsContainer}`);if(this._currentFlyout==this.search.elements.el&&!t&&this.el.classList.add(this.classNames.animating),(l=this.search.elements.results.containerPrevious)==null||l.remove(),this.search.elements.results.containerPrevious=this.search.elements.results.container,(h=this.search.elements.results.containerPrevious)==null||h.classList.remove(`${this.classNames.searchResultsCurrent}`),(c=this.search.elements.results.containerPrevious)==null||c.classList.add(`${this.classNames.searchResultsPrevious}`),s.appendChild(n),this.search.elements.results.container=n,this._initSearchResultsSelectionController(),this.search.previousState=this.search.state.activeState||0,this.search.state.activeState=a.length,this.search.previousShift=this.search.currentShift,this.search.currentShift=`shift-${this.search.previousState}-${this.search.state.activeState}`,this.search.previousState===2&&this.search.state.activeState===1){const f=[...this.search.elements.results.containerPrevious.querySelectorAll(`.${this.classNames.searchResultsHeader}`),...this.search.elements.results.container.querySelectorAll(`.${this.classNames.searchResultsHeader}`)],[r,b,y]=f;b.textContent===y.textContent&&(this.search.currentShift+="-slide")}if(this.search.state.activeState===2){const[f,r]=this.search.elements.results.container.querySelectorAll(`.${this.classNames.searchResultsContainer}`),b=f.scrollHeight,{marginTop:y}=getComputedStyle(r),o=parseInt(y);this.search.elements.flyout.style.setProperty(this.cssVariables.searchSuggestedLinksHeight,`${b+o}px`)}this.search.elements.el.classList.remove(this.search.previousShift),requestAnimationFrame(()=>{this.search.elements.el.classList.add(this.search.currentShift),this._setFlyoutHeight(this.search.elements.el,this._getSearchFlyoutHeightOffset()),this._setSearchItemNumbers(),this.onSearchResultsRendered(),t&&this._onSearchAnimationEnd()})}}];const ca={className:"topnav",mixins:[],curtainBlur:!0,scrimBlur:!0};class ua{constructor(t,s={}){this.el=t,this.options=Object.assign({},ca,s),this._viewportsWithMenu=["xsmall","small","medium"];const n={ref:this,events:["beforeCreate","created","beforeMount","mounted","pagehide","destroy","onLayoutChange","onTextZoomResize","onMenuTransitionEnd","onMenuWillOpen","onMenuWillClose","onMenuOpen","onMenuClose","onFlyoutWillOpen","onFlyoutWillClose","onFlyoutOpen","onFlyoutClose","onMenuButtonClick","onMenuBackButtonClick","onHiddenMenuItemClick","onMenuItemMouseOver","onMenuItemMouseLeave","onSearchUpdate","onSearchResultsRendered","onCurtainClick","onIconFlyoutFocusIn","onIconFlyoutFocusOut","onIconFlyoutClick","onIconFlyoutKeyDown"],viewportEvents:!0,breakpoints:[{name:"xsmall",mediaQuery:"only screen and (max-width: 480px)"},{name:"small",mediaQuery:"only screen and (min-width: 481px) and (max-width: 640px)"},{name:"medium",mediaQuery:"only screen and (min-width: 641px) and (max-width: 833px)"},{name:"large",mediaQuery:"only screen and (min-width: 834px)"}],setupEvents:["beforeCreate","created","beforeMount","mounted"]};return this.classNames={el:this.options.className,content:`${this.options.className}-content`,list:`${this.options.className}-list`,link:`${this.options.className}-link`,linkSearch:`${this.options.className}-link-search`,curtain:`${this.options.className}-curtain`,curtainNoBlur:`${this.options.className}-curtain-noblur`,scrim:`${this.options.className}-scrim`,scrimNoBlur:`${this.options.className}-scrim-noblur`,animating:`${this.options.className}-animating`,menuButton:`${this.options.className}-menutrigger-button`,menuBackButton:`${this.options.className}-menuback-button`,withMenuOpen:`${this.options.className}-with-menu-open`,menu:`${this.options.className}-menu`,menuList:`${this.options.className}-menu-list`,item:`${this.options.className}-item`,itemMenu:`${this.options.className}-item-menu`,itemSubMenu:`${this.options.className}-item-submenu`,itemFlyoutOpen:`${this.options.className}-item-flyout-open`,itemFlyoutChangePrevious:`${this.options.className}-item-flyout-change-previous`,itemFlyoutChangeNext:`${this.options.className}-item-flyout-change-next`,itemFlyoutClosing:`${this.options.className}-item-flyout-closing`,withFlyoutOpen:`${this.options.className}-with-flyout-open`,withFlyoutClosing:`${this.options.className}-with-flyout-closing`,flyout:`${this.options.className}-flyout`,flyoutContent:`${this.options.className}-flyout-content`,flyoutScrollContainer:`${this.options.className}-flyout-scroll-container`,flyoutShort:`${this.options.className}-flyout-short`,flyoutItem:`${this.options.className}-flyout-item`,flyoutItemGroup:`${this.options.className}-flyout-item-group`,withSubMenuOpen:`${this.options.className}-with-submenu-open`,withIconFlyoutOpen:`${this.options.className}-with-iconflyout-open`,subMenu:`${this.options.className}-submenu`,subMenuShort:`${this.options.className}-submenu-short`,subMenuLink:`${this.options.className}-submenu-link`,subMenuContent:`${this.options.className}-submenu-content`,subMenuTriggerGroup:`${this.options.className}-submenu-trigger-group`,subMenuTriggerLink:`${this.options.className}-submenu-trigger-link`,subMenuTriggerButton:`${this.options.className}-submenu-trigger-button`,subMenuGroup:`${this.options.className}-submenu-group`,subMenuGroupElevated:`${this.options.className}-submenu-group-elevated`,subMenuHeader:`${this.options.className}-submenu-header`,subMenuList:`${this.options.className}-submenu-list`,subMenusDisabled:`${this.options.className}-submenus-disabled`,blockTransitions:`${this.options.className}-block-transitions`,noScroll:`${this.options.className}-noscroll`,noScrollLong:`${this.options.className}-noscroll-long`,noScrollY:`${this.options.className}-noscroll-y`,search:`${this.options.className}-search`,searchForm:`${this.options.className}-searchfield`,searchInput:`${this.options.className}-searchfield-input`,searchSubmit:`${this.options.className}-searchfield-submit`,searchReset:`${this.options.className}-searchfield-reset`,searchResults:`${this.options.className}-searchresults`,searchResultsCount:`${this.options.className}-searchresults-count`,searchResultsCurrent:`${this.options.className}-searchresults-current`,searchResultsPrevious:`${this.options.className}-searchresults-previous`,searchResultsContainer:`${this.options.className}-searchresults-container`,searchResultsHeader:`${this.options.className}-searchresults-header`,searchResultsList:`${this.options.className}-searchresults-list`,searchResultsListLink:`${this.options.className}-searchresults-list-link`,searchResultsListIcon:`${this.options.className}-searchresults-list-icon`,searchResultsListItem:`${this.options.className}-searchresults-list-item`,searchResultsListText:`${this.options.className}-searchresults-list-text`,searchResultsHover:`${this.options.className}-searchresults-hover`,searchResultsTextHighlight:`${this.options.className}-searchresults-list-text-highlight`,searchWithResults:`${this.options.className}-search-with-results`,searchNoResults:`${this.options.className}-search-no-results`,searchResultsOverrideHighlight:`${this.options.className}-searchresults-override-highlight`,textZoomIn:`${this.options.className}-text-zoom-in`},this.cssVariables={topnavHeight:`--r-${this.options.className}-height`,flyoutItemNumber:`--r-${this.options.className}-flyout-item-number`,flyoutItemTotal:`--r-${this.options.className}-flyout-item-total`,flyoutGroupNumber:`--r-${this.options.className}-flyout-group-number`,flyoutGroupTotal:`--r-${this.options.className}-flyout-group-total`,flyoutElevatedGroupCount:`--r-${this.options.className}-flyout-elevated-group-count`,flyoutSpacing:`--r-${this.options.className}-flyout-spacing`,flyoutHeight:`--r-${this.options.className}-flyout-height`,flyoutPreviousHeight:`--r-${this.options.className}-previous-flyout-height`,flyoutNextHeight:`--r-${this.options.className}-next-flyout-height`,flyoutRateOfChange:`--r-${this.options.className}-flyout-rate`,flyoutCloseDelay:`--r-${this.options.className}-flyout-close-delay`,scrollbarWidth:`--r-${this.options.className}-scrollbar-width`,textZoomScale:`--r-${this.options.className}-text-zoom-scale`,fontSize:`--r-${this.options.className}-font-size`,searchResultsTimeoutDuration:`--r-${this.options.className}-searchresults-timeout`,searchSuggestedLinksHeight:`--r-${this.options.className}-suggested-links-height`},this.dataAttributes={iconFlyoutEnabled:`data-${this.options.className}-iconFlyout-enabled`},new Pt(n,Ci,...this.options.mixins),this.options.manuallyInitLifecycles?this:this.beforeCreate().created().beforeMount().mounted()}}const Qs=gt(null),ha=Qs.Provider,zt=gt(null),ma=zt.Provider,da="data-focus-method",Ys="touch",pa="mouse",fa="key";function ga(e,t){t.current=fa}function _a(e,t){t.current!==Ys&&(t.current=pa)}function va(e,t){t.current=Ys}function ba(e,t,s,n){const a=e.target;s.current==null&&(s.current=n.current),a.setAttribute(t,s.current),n.current=s.current,s.current=null}function ya(e,t){e.target.removeAttribute(t)}function Sa(e){e.current=null}const Ea=(e,t)=>{const s=G(null),n=G(null);ve(()=>{const a=e==null?void 0:e.current,i=a!=null?a:document.body,l=t!=null?t:da,h={keydown:function(f){return ga(f,n)},mousedown:function(f){return _a(f,n)},touchstart:function(f){return va(f,n)},focus:function(f){return ba(f,l,n,s)},blur:function(f){return ya(f,l)},windowBlur:function(){return Sa(n)}};return a!==null&&(Object.entries(h).forEach(([c,f])=>{i.addEventListener(`${c}`,f,{capture:!0,passive:!0})}),window.addEventListener("blur",h.windowBlur)),()=>{a!==null&&(Object.entries(h).forEach(([c,f])=>{i.removeEventListener(`${c}`,f)}),window.removeEventListener("blur",h.windowBlur))}},[t,e])},Ee=e=>{if(typeof e!="undefined")return e.reduce((t,s)=>(t[s.name]=s.value,t),{})},me=(e,t)=>{typeof t!="undefined"&&typeof e!="undefined"&&t.forEach(({name:s,value:n})=>{e.setAttribute(s,n)})},St=(e,t)=>{typeof t!="undefined"&&typeof e!="undefined"&&t.forEach(({name:s,value:n})=>{e.removeAttribute(s)})};async function wa({searchLocale:e,apiRequestDomain:t,apiRequestURL:s,searchSrc:n}){const a=await fetch(`${t}${s}?src=${n}&locale=${e}`);return a.ok?await a.json():await Promise.reject(new Error("no default links"))}async function Na({query:e,id:t,searchLocale:s,apiRequestDomain:n,apiRequestURL:a,searchSrc:i}){const l=await fetch(`${n}${a}`,{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({query:e,src:i,id:t,locale:s})});return l.ok?await l.json():await Promise.reject(new Error("no default links"))}var La={isEnabledWhen(){return this.searchEnabled!==!1},created(){this.amlSearch={},this.amlSearch.requestId="",this.amlSearch.requestType="";const{hasAbsoluteUrls:e,useRelativeSearchRequest:t,wwwDomain:s,searchSettings:n,locale:a}=this.options.amlSearch;this.amlSearch.apiRequestDomain=e&&!t?`https://${s}`:"",this.amlSearch.locale=n.searchFieldLocale||a,n.searchSuggestionsEnabled!==!1?this.search.templateFunction=this._createAMLSearchTemplate:this.search.templateFunction=this._createAMLSearchDisabledTemplate},beforeMount(){this.search.elements.el.setAttribute(this.dataAttributes.iconFlyoutEnabled,!0),me(this.search.elements.el,this.options.amlSearch.searchSettings.analyticsAttributes),St(this.search.elements.el,this.options.amlSearch.searchSettings.open.analyticsAttributes),this.options.amlSearch.searchSettings.searchSuggestionsEnabled!==!1?wa({searchLocale:this.amlSearch.locale,apiRequestDomain:this.amlSearch.apiRequestDomain,apiRequestURL:this.options.amlSearch.searchSettings.defaultLinksApiUrl,searchSrc:this.options.amlSearch.searchSettings.searchFieldSrc}).then(e=>{const{id:t,results:s}=e;this.amlSearch.requestId=t;const n=this._transformData(s,{quickLinks:this.options.amlSearch.searchSettings.defaultLinks});this.setInitialSearchResults(n),this._setPlaceHolderText(),me(this.search.elements.link,this.options.amlSearch.searchSettings.open.analyticsAttributes)}).catch(()=>{}):this.setInitialSearchResults()},onLayoutChange(){me(this.search.elements.link,this.options.amlSearch.searchSettings.open.analyticsAttributes),this._setPlaceHolderText()},onFlyoutOpen(e){e===this.search.elements.el&&(St(this.search.elements.link,this.options.amlSearch.searchSettings.open.analyticsAttributes),this._isBreakpointWithMenu()&&this.menu.elements.menuButton.setAttribute("aria-label",this.options.amlSearch.searchSettings.close.ariaLabel))},onFlyoutClose(e){e===this.search.elements.el&&(me(this.search.elements.link,this.options.amlSearch.searchSettings.open.analyticsAttributes),this.search.elements.form.setAttribute("action",this.options.amlSearch.searchSettings.searchFieldAction))},onSearchUpdate(e){if(!e&&this.options.amlSearch.searchSettings.searchSuggestionsEnabled===!1)return;const{value:t}=this.search.elements.input;t.length>=2?(this.amlSearch.requestType="suggestions",Na({query:t,id:this.amlSearch.requestId,searchLocale:this.amlSearch.locale,apiRequestDomain:this.amlSearch.apiRequestDomain,apiRequestURL:this.options.amlSearch.searchSettings.suggestionsApiUrl,searchSrc:this.options.amlSearch.searchSettings.searchFieldSrc}).then(s=>{const{results:n}=s,a=this._transformData(n,{quickLinks:this.options.amlSearch.searchSettings.suggestedLinks,suggestions:this.options.amlSearch.searchSettings.suggestedSearches});this.setSearchResults(a)}).catch(()=>{})):(this.amlSearch.requestType="defaultlinks",this.setSearchResults(this.search.initialResults))},_setPlaceHolderText(){this._isBreakpointWithMenu()?this.search.elements.input.setAttribute("placeholder",this.options.amlSearch.searchSettings.searchFieldPlaceholderCompact):this.search.elements.input.setAttribute("placeholder",this.options.amlSearch.searchSettings.searchFieldPlaceholderRegular)},_transformData(e,t){const s=[];for(const n of e){if(!n.sectionResults.length)continue;const a=t[n.sectionName],i={title:a.title,icon:a.images,sectionName:n.sectionName,analyticsAttributes:a.analyticsAttributes,results:n.sectionResults};n.sectionName==="quickLinks"?s.unshift(i):s.push(i)}return s},_createAMLSearchTemplate(e){const t={quickLinks:{label:"defaultlinks",event:50},suggestedLinks:{label:"quicklinks",event:38},suggestedSearches:{label:"suggestions",event:39}};return`${e.map(s=>{const{title:n,icon:a,analyticsAttributes:i,results:l}=s,h=this.amlSearch.requestType==="defaultlinks"?"quickLinks":s.sectionName==="quickLinks"?"suggestedLinks":"suggestedSearches",c=i.map(f=>`${f.name}="${f.value}"`).join("");return`<div
					class="${this.classNames.searchResultsContainer}"
					${c}
				>
					<h2 class="${this.classNames.searchResultsHeader}">${n}</h2>
					<ul class="${this.classNames.searchResultsList}" role="list">

						${l.map((f,r)=>{const{url:b,highlight:y}=f,o=y!==void 0&&Object.keys(y).length>0;let{label:g}=f;if(o){const[S,N]=Object.entries(y)[0],A=Number(S)+Number(N),x=g.slice(0,S),D=g.slice(S,A),z=g.slice(A),{searchResultsTextHighlight:U}=this.classNames;g=`${x}<span class="${U}">${D}</span>${z}`}const k=t[h].label;function T(S){return S.toString().replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;")}const I=[{name:"query",value:this.search.elements.input.value||"no keyword"},{name:"section",value:k},{name:"items",value:l.length},{name:"index",value:r},{name:"label",value:f.label}];return`
								<li class="${this.classNames.searchResultsListItem}" role="listitem">
									<a
										class="${this.classNames.searchResultsListLink}"
										href="${b}"
										${I.map(({name:S,value:N})=>`data-${S}="${T(N)}"`).join(" ")}
										data-analytics-click="eVar23: {data-query} | {data-section} | {data-items} | {data-label} | {data-index},
											events:event${t[h].event}"
									>
										<span class="${this.classNames.searchResultsListIcon}">

										${a.map(S=>{const{name:N,assetInline:A}=S;return`<span class="globalnav-image-${N} globalnav-link-image">${A}</span>`}).join("")}


										</span>
										<span class="${this.classNames.searchResultsListText}">${g}</span>
									</a>
								</li>`}).join("")}
					</ul>
				</div>`}).join("")}`},_createAMLSearchDisabledTemplate(){return`<div class="${this.classNames.searchResultsContainer}"><div>`}},Ca=[Gs,{isEnabledWhen(){return this.bagEnabled!==!1},created(){this.bag={},this.classNames.bag="globalnav-bag",this.classNames.linkBag="globalnav-link-bag",this.classNames.bagBadge="globalnav-bag-badge"},beforeMount(){document.getElementById(this.classNames.bag).setAttribute(this.dataAttributes.iconFlyoutEnabled,!0)},mounted(){this._setupBagElements();const t=this.bag.link.getAttribute("href").replace(this.options.bagData.bagHref,this.options.bagData.data.open.url);this.bag.link.setAttribute("href",t)},onLayoutChange(){this._isBreakpointWithMenu()&&St(this.menu.elements.menuButton,this.options.bagData.data.close.analyticsAttributes),me(this.bag.link,this.options.bagData.data.open.analyticsAttributes),me(this.bag.bagBadge,this.options.bagData.data.open.analyticsAttributes)},onFlyoutWillOpen(e){e===this.bag.el&&window.acStore.isDisabled&&this.pagehide()},onFlyoutOpen(e){e===this.bag.el&&(me(this.bag.link,this.options.bagData.data.close.analyticsAttributes),me(this.bag.bagBadge,this.options.bagData.data.close.analyticsAttributes),this._isBreakpointWithMenu()&&(this.menu.elements.menuButton.setAttribute("aria-label",this.options.bagData.data.close.ariaLabel),me(this.menu.elements.menuButton,this.options.bagData.data.close.analyticsAttributes)))},onFlyoutClose(e){e===this.bag.el&&(me(this.bag.link,this.options.bagData.data.open.analyticsAttributes),me(this.bag.bagBadge,this.options.bagData.data.open.analyticsAttributes),this._isBreakpointWithMenu()&&St(this.menu.elements.menuButton,this.options.bagData.data.close.analyticsAttributes))},onIconFlyoutClick(e){!this.bag.el.contains(e.target)||e.target.dispatchEvent(new window.CustomEvent("clickbag",{bubbles:!0,cancelable:!0,detail:{originalTarget:e.target}}))},_setupBagElements(){this.bag.el=this.topNavList.querySelector(`.${this.classNames.bag}`),this.bag.link=this.bag.el.querySelector(`.${this.classNames.linkBag}`),this.bag.flyout=this.bag.el.querySelector(`.${this.classNames.subMenu}`),this.bag.bagBadge=this.bag.el.querySelector(`.${this.classNames.bagBadge}`)}}],Aa={mounted(){window.dispatchEvent(new window.CustomEvent("globalnav:mounted",{detail:{target:this.el}}))},onFlyoutWillOpen(e){this.el.dispatchEvent(new window.CustomEvent("globalnav:onFlyoutWillOpen",{detail:{target:e,layout:this._isBreakpointWithMenu()?"compact":"regular"}}))},onFlyoutOpen(e){this.el.dispatchEvent(new window.CustomEvent("globalnav:onFlyoutOpen",{detail:{target:e,layout:this._isBreakpointWithMenu()?"compact":"regular"}}))},onFlyoutWillClose(e){this.el.dispatchEvent(new window.CustomEvent("globalnav:onFlyoutWillClose",{detail:{target:e,layout:this._isBreakpointWithMenu()?"compact":"regular"}}))},onFlyoutClose(e){this.el.dispatchEvent(new window.CustomEvent("globalnav:onFlyoutClose",{detail:{target:e,layout:this._isBreakpointWithMenu()?"compact":"regular"}}))}},Ma=[yt,{mounted(){this.menu.elements.menuButton.setAttribute("aria-label",this.options.menuData.data.open.ariaLabel)},onFlyoutOpen(e){!this.menu.elements.menuFlyout.contains(e)||this._isBreakpointWithMenu()&&this.menu.elements.menuButton.setAttribute("aria-label",this.options.menuData.data.close.ariaLabel)},onFlyoutClose(e){!this.menu.elements.menuFlyout.contains(e)||!this._currentFlyout&&this._isBreakpointWithMenu()&&this.menu.elements.menuButton.setAttribute("aria-label",this.options.menuData.data.open.ariaLabel)}}];function ke(e,t){return e.match(/^http[s]?/)!=null?e:t!==void 0&&e.startsWith("/")?`https://${t}${e}`:e}const ka=["consumer"],Kt=(e,t,s)=>{e.segmentCode!==void 0&&!ka.includes(e.segmentCode)&&t(!1),e.segmentCode===void 0&&s!==!1&&t(!0)};function Js(e,t){for(var s in t)e[s]=t[s];return e}function Xs(e,t){for(var s in e)if(s!=="__source"&&!(s in t))return!0;for(var n in t)if(n!=="__source"&&e[n]!==t[n])return!0;return!1}function en(e){this.props=e}(en.prototype=new _e).isPureReactComponent=!0,en.prototype.shouldComponentUpdate=function(e,t){return Xs(this.props,e)||Xs(this.state,t)};var tn=M.__b;M.__b=function(e){e.type&&e.type.__f&&e.ref&&(e.props.ref=e.ref,e.ref=null),tn&&tn(e)};var Fa=typeof Symbol!="undefined"&&Symbol.for&&Symbol.for("react.forward_ref")||3911;function sn(e){function t(s){var n=Js({},s);return delete n.ref,e(n,s.ref||null)}return t.$$typeof=Fa,t.render=t,t.prototype.isReactComponent=t.__f=!0,t.displayName="ForwardRef("+(e.displayName||e.name)+")",t}var $a=M.__e;M.__e=function(e,t,s,n){if(e.then){for(var a,i=t;i=i.__;)if((a=i.__c)&&a.__c)return t.__e==null&&(t.__e=s.__e,t.__k=s.__k),a.__c(e,t)}$a(e,t,s,n)};var nn=M.unmount;function an(e,t,s){return e&&(e.__c&&e.__c.__H&&(e.__c.__H.__.forEach(function(n){typeof n.__c=="function"&&n.__c()}),e.__c.__H=null),(e=Js({},e)).__c!=null&&(e.__c.__P===s&&(e.__c.__P=t),e.__c=null),e.__k=e.__k&&e.__k.map(function(n){return an(n,t,s)})),e}function on(e,t,s){return e&&(e.__v=null,e.__k=e.__k&&e.__k.map(function(n){return on(n,t,s)}),e.__c&&e.__c.__P===t&&(e.__e&&s.insertBefore(e.__e,e.__d),e.__c.__e=!0,e.__c.__P=s)),e}function Qt(){this.__u=0,this.t=null,this.__b=null}function rn(e){var t=e.__.__c;return t&&t.__a&&t.__a(e)}function Et(){this.u=null,this.o=null}M.unmount=function(e){var t=e.__c;t&&t.__R&&t.__R(),t&&e.__h===!0&&(e.type=null),nn&&nn(e)},(Qt.prototype=new _e).__c=function(e,t){var s=t.__c,n=this;n.t==null&&(n.t=[]),n.t.push(s);var a=rn(n.__v),i=!1,l=function(){i||(i=!0,s.__R=null,a?a(h):h())};s.__R=l;var h=function(){if(!--n.__u){if(n.state.__a){var f=n.state.__a;n.__v.__k[0]=on(f,f.__c.__P,f.__c.__O)}var r;for(n.setState({__a:n.__b=null});r=n.t.pop();)r.forceUpdate()}},c=t.__h===!0;n.__u++||c||n.setState({__a:n.__b=n.__v.__k[0]}),e.then(l,l)},Qt.prototype.componentWillUnmount=function(){this.t=[]},Qt.prototype.render=function(e,t){if(this.__b){if(this.__v.__k){var s=document.createElement("div"),n=this.__v.__k[0].__c;this.__v.__k[0]=an(this.__b,s,n.__O=n.__P)}this.__b=null}var a=t.__a&&et(J,null,e.fallback);return a&&(a.__h=null),[et(J,null,t.__a?null:e.children),a]};var ln=function(e,t,s){if(++s[1]===s[0]&&e.o.delete(t),e.props.revealOrder&&(e.props.revealOrder[0]!=="t"||!e.o.size))for(s=e.u;s;){for(;s.length>3;)s.pop()();if(s[1]<s[0])break;e.u=s=s[2]}};(Et.prototype=new _e).__a=function(e){var t=this,s=rn(t.__v),n=t.o.get(e);return n[0]++,function(a){var i=function(){t.props.revealOrder?(n.push(a),ln(t,e,n)):a()};s?s(i):i()}},Et.prototype.render=function(e){this.u=null,this.o=new Map;var t=nt(e.children);e.revealOrder&&e.revealOrder[0]==="b"&&t.reverse();for(var s=t.length;s--;)this.o.set(t[s],this.u=[1,0,this.u]);return e.children},Et.prototype.componentDidUpdate=Et.prototype.componentDidMount=function(){var e=this;this.o.forEach(function(t,s){ln(e,s,t)})};var Ta=typeof Symbol!="undefined"&&Symbol.for&&Symbol.for("react.element")||60103,Oa=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,Ia=typeof document!="undefined",xa=function(e){return(typeof Symbol!="undefined"&&typeof Symbol()=="symbol"?/fil|che|rad/i:/fil|che|ra/i).test(e)};_e.prototype.isReactComponent={},["componentWillMount","componentWillReceiveProps","componentWillUpdate"].forEach(function(e){Object.defineProperty(_e.prototype,e,{configurable:!0,get:function(){return this["UNSAFE_"+e]},set:function(t){Object.defineProperty(this,e,{configurable:!0,writable:!0,value:t})}})});var cn=M.event;function Ra(){}function Ba(){return this.cancelBubble}function Pa(){return this.defaultPrevented}M.event=function(e){return cn&&(e=cn(e)),e.persist=Ra,e.isPropagationStopped=Ba,e.isDefaultPrevented=Pa,e.nativeEvent=e};var un={configurable:!0,get:function(){return this.class}},hn=M.vnode;M.vnode=function(e){var t=e.type,s=e.props,n=s;if(typeof t=="string"){var a=t.indexOf("-")===-1;for(var i in n={},s){var l=s[i];Ia&&i==="children"&&t==="noscript"||i==="value"&&"defaultValue"in s&&l==null||(i==="defaultValue"&&"value"in s&&s.value==null?i="value":i==="download"&&l===!0?l="":/ondoubleclick/i.test(i)?i="ondblclick":/^onchange(textarea|input)/i.test(i+t)&&!xa(s.type)?i="oninput":/^onfocus$/i.test(i)?i="onfocusin":/^onblur$/i.test(i)?i="onfocusout":/^on(Ani|Tra|Tou|BeforeInp|Compo)/.test(i)?i=i.toLowerCase():a&&Oa.test(i)?i=i.replace(/[A-Z0-9]/g,"-$&").toLowerCase():l===null&&(l=void 0),/^oninput$/i.test(i)&&(i=i.toLowerCase(),n[i]&&(i="oninputCapture")),n[i]=l)}t=="select"&&n.multiple&&Array.isArray(n.value)&&(n.value=nt(s.children).forEach(function(h){h.props.selected=n.value.indexOf(h.props.value)!=-1})),t=="select"&&n.defaultValue!=null&&(n.value=nt(s.children).forEach(function(h){h.props.selected=n.multiple?n.defaultValue.indexOf(h.props.value)!=-1:n.defaultValue==h.props.value})),e.props=n,s.class!=s.className&&(un.enumerable="className"in s,s.className!=null&&(n.class=s.className),Object.defineProperty(n,"className",un))}e.$$typeof=Ta,hn&&hn(e)};var mn=M.__r;M.__r=function(e){mn&&mn(e),e.__c};const Yt=({children:e})=>m("div",{className:"globalnav-flyout-content globalnav-submenu-content",children:e}),dn=({children:e})=>m(J,{children:m("div",{class:"globalnav-flyout-scroll-container",children:e})});function Da({analyticsAttributes:e,count:t,unit:s}){const n=Ee(e);return m("span",{class:"globalnav-bag-badge","aria-hidden":"true",...n,children:[m("span",{class:"globalnav-bag-badge-separator"}),m("span",{class:"globalnav-bag-badge-number",children:t}),m("span",{class:"globalnav-bag-badge-unit",children:s})]})}const Ha=({children:e})=>m("div",{id:"globalnav-submenu-bag",class:"globalnav-flyout globalnav-submenu",children:e});var Wa=sn(({children:e,count:t,analyticsAttributes:s,ariaLabel:n},a)=>m("li",{class:t>0?"globalnav-item globalnav-bag with-badge":"globalnav-item globalnav-bag",id:"globalnav-bag",ref:a,"data-topnav-flyout-label":n,...Ee(s),children:e}));const pn=({images:e})=>m(J,{children:e==null?void 0:e.map(t=>{const{name:s,assetInline:n}=t;return m("span",{className:`globalnav-image-${s}`,"aria-hidden":"true",dangerouslySetInnerHTML:{__html:n}})})}),Ua=({href:e,ariaLabel:t,images:s,analyticsAttributes:n,children:a})=>{const i=Ee(n);return m("a",{id:"globalnav-menubutton-link-bag",className:"globalnav-link globalnav-link-bag",href:e,"aria-label":t,"aria-expanded":"false","aria-controls":"globalnav-submenu-bag","data-globalnav-item-name":"bag",role:"button","data-topnav-flyout-trigger-regular":!0,"data-topnav-flyout-trigger-compact":!0,...i,children:[m(pn,{images:s}),a]})},Va=({children:e})=>m("div",{className:"globalnav-bag-wrapper",children:e});var qa=sn(({href:e,bag:t,bagFlyout:s,badgeCount:n},a)=>{const[i,l]=se(""),h="{%BAGITEMCOUNT%}",c=99,f="+";function r(y){return y>c?c:y}function b(y){return(y>c?`${c}${f}`:y).toString()}return l(r(n)!==0?`${t.badge.ariaLabel.replace(h,b(n))}`:`${t.open.ariaLabel}`),m(J,{children:m(Wa,{ref:a,count:n,analyticsAttributes:t.analyticsAttributes,ariaLabel:t.open.ariaLabel,children:[m(Va,{children:m(Ua,{href:e,ariaLabel:i,images:t.open.images,analyticsAttributes:t.open.analyticsAttributes,children:m(Da,{count:r(n),unit:f,analyticsAttributes:t.open.analyticsAttributes})})}),m(Ha,{children:m(dn,{children:m(Yt,{children:s})})})]})})});const Za=({id:e,title:t})=>m("h2",{class:"globalnav-submenu-header",id:e,children:t}),ja=({text:e,url:t,analyticsAttributes:s,ariaLabel:n})=>{const a=it(zt),i=Ee(s),l=n!==""?n:null;return m("a",{href:ke(t,(a==null?void 0:a.hasAbsoluteUrls)===!0?a.wwwDomain:void 0),className:"globalnav-submenu-link",...i,"aria-label":l,children:e})},fn=({type:e,text:t,url:s,ariaLabel:n,analyticsAttributes:a})=>m("li",{className:`globalnav-submenu-list-item${e!==void 0?"-"+e:""}`,children:m(ja,{text:t,url:s,ariaLabel:n,analyticsAttributes:a})}),Ga=({data:e})=>{var t,s;return m("ul",{class:"globalnav-submenu-list",children:[(t=e.elevatedLinks)==null?void 0:t.map(({id:n,text:a,url:i,ariaLabel:l,analyticsAttributes:h})=>m(fn,{type:"elevated",text:a,url:i,ariaLabel:l,analyticsAttributes:h},n)),(s=e.baseLinks)==null?void 0:s.map(({id:n,text:a,url:i,ariaLabel:l,analyticsAttributes:h})=>m(fn,{text:a,url:i,ariaLabel:l,analyticsAttributes:h},n))]})},gn=({data:e})=>{const t=e.elevatedLinks!=null&&e.elevatedLinks.length>0,s=Ee(e.analyticsAttributes);return m("div",{className:`globalnav-submenu-group ${t?"globalnav-submenu-group-elevated":""}`,...s,children:[m(Za,{id:e.id,title:e.title}),m(Ga,{data:e})]})},za=({name:e,elevatedGroups:t,baseGroups:s})=>m("div",{id:`globalnav-submenu-link-${e}`,className:"globalnav-flyout globalnav-submenu",children:m("div",{class:"globalnav-flyout-scroll-container",children:m(Yt,{children:[t==null?void 0:t.map(n=>{const{id:a}=n;return m(gn,{data:n},a)}),s==null?void 0:s.map(n=>{const{id:a}=n;return m(gn,{data:n},a)})]})})}),Ka=({name:e,text:t,url:s,submenuChevron:n,isMenuItem:a,hasSubMenu:i=!1,analyticsAttributes:l,ariaLabel:h,submenuAriaLabel:c,images:f})=>{const r=it(zt),b=f.filter(o=>a?o.name==="regular":o),y=Ee(l);return a?m("ul",{class:"globalnav-submenu-trigger-group",role:"none",children:[m("li",{class:"globalnav-submenu-trigger-item",children:m("a",{className:`globalnav-link globalnav-submenu-trigger-link globalnav-link-${e}`,href:ke(s,(r==null?void 0:r.hasAbsoluteUrls)===!0?r.wwwDomain:void 0),"data-globalnav-item-name":e,"data-topnav-flyout-trigger-compact":!0,...y,"aria-label":h,children:[m("span",{class:"globalnav-link-text-container",children:[b.map(o=>m("span",{className:`globalnav-image-${o.name} globalnav-link-image`,"aria-hidden":"true",dangerouslySetInnerHTML:{__html:o.assetInline}})),m("span",{className:"globalnav-link-text",children:t})]}),i&&m("span",{class:"globalnav-link-chevron","aria-hidden":"true",children:m("svg",{height:"48",viewBox:"0 0 9 48",width:"9",xmlns:"http://www.w3.org/2000/svg",children:m("path",{d:"m8.1155 30.358a.6.6 0 1 1 -.831.8653l-7-6.7242a.6.6 0 0 1 -.0045-.8613l7-6.8569a.6.6 0 1 1 .84.8574l-6.5582 6.4238z"})})})]})}),i&&m("li",{class:"globalnav-submenu-trigger-item",children:m("button",{id:`globalnav-menubutton-link-${e}`,class:"globalnav-submenu-trigger-button","aria-expanded":"false","aria-controls":`globalnav-submenu-link-${e}`,"aria-label":c,"data-topnav-flyout-trigger-regular":!0,children:n==null?void 0:n.open.images.map(o=>m("span",{className:`globalnav-image-${o.name} globalnav-submenu-button-icon`,"aria-hidden":"true",dangerouslySetInnerHTML:{__html:o.assetInline}}))})})]}):m("a",{className:`globalnav-link globalnav-link-${e}`,href:ke(s,(r==null?void 0:r.hasAbsoluteUrls)===!0?r.wwwDomain:void 0),"data-globalnav-item-name":e,...y,"aria-label":t,children:[b.map(o=>m("span",{className:`globalnav-image-${o.name} globalnav-link-image`,"aria-hidden":"true",dangerouslySetInnerHTML:{__html:o.assetInline}})),m("span",{className:"globalnav-link-text",children:t})]})},_n=({id:e,isMenuItem:t,name:s,text:n,url:a,images:i,submenuChevron:l,ariaLabel:h,submenuAriaLabel:c,analyticsAttributes:f,linksData:r})=>{var o,g;const b=((o=r==null?void 0:r.baseGroups)==null?void 0:o.length)!=null||((g=r==null?void 0:r.elevatedGroups)==null?void 0:g.length)!=null;return m(t?"div":"li",{className:`
				globalnav-item
				globalnav-item-${s}
				${t?"globalnav-item-menu":""}
				${b?"globalnav-item-submenu":""}
			`,"data-analytics-element-engagement":`globalnav hover - ${s}`,"data-topnav-flyout-label":b?c:void 0,children:[m(Ka,{name:s,isMenuItem:t,text:n,url:a,submenuChevron:l,hasSubMenu:b,ariaLabel:h,submenuAriaLabel:c,analyticsAttributes:f,images:i}),b&&m(za,{name:r.name,elevatedGroups:r.elevatedGroups,baseGroups:r.baseGroups},e)]})},Qa=["apple","search","bag"];async function Ya(e,t){return await(await fetch(`${t}?locale=${e}`)).json()}const vn=(e,t)=>{let s;return Array.isArray(t)&&(s=t.find(n=>n.name===e?n:!1)),s};async function Ja(e){let t=e;try{let{AosLinkReplacer:s}=await Promise.resolve().then(function(){return wn});s.shouldReplaceSubMenuLinks()&&(t=await s.replaceSubMenuLinks(e))}catch{t=e}return t}const Xa=({links:e,submenuChevron:t,locale:s,submenuApiUrl:n,subMenuData:a=[],submenusEnabled:i=!0})=>{var r,b;const[l,h]=se([]),c=it(Qs),f=e==null?void 0:e.reduce((y,o)=>(Qa.includes(o.name)?y.nonMenuItems.push(o):y.menuItems.push(o),y),{nonMenuItems:[],menuItems:[]});return ve(()=>{let y=!1;return Ya(s,n).then(Ja).then(o=>{y||h(o)}).catch(()=>{}),()=>{y=!0}},[]),ve(()=>{Object.keys(l).length>0&&(c==null||c.initiateFlyouts(),c==null||c.initiateSubMenus()),c!==null&&(c.submenuEnabled=i)},[c,l,i]),m(J,{children:[(r=f==null?void 0:f.nonMenuItems)==null?void 0:r.map(y=>{const{id:o,name:g,text:k,url:T,images:I,analyticsAttributes:S}=y,N=vn(g,l);return m(_n,{id:o,isMenuItem:!1,name:g,linksData:N,text:k,url:T,images:I,analyticsAttributes:S})}),m("li",{class:"globalnav-item globalnav-menu","data-topnav-flyout-item":"menu","data-topnav-flyout-label":"Menu",role:"none",children:m("div",{class:"globalnav-flyout","data-topnav-flyout":"menu",children:m("div",{class:"globalnav-menu-list",children:(b=f==null?void 0:f.menuItems)==null?void 0:b.map(y=>{const{id:o,name:g,text:k,url:T,ariaLabel:I,submenuAriaLabel:S,images:N,analyticsAttributes:A}=y,x=vn(g,l);return m(_n,{id:o,isMenuItem:!0,name:g,linksData:x,submenuChevron:t,text:k,url:T,ariaLabel:I,submenuAriaLabel:S,images:N,analyticsAttributes:A})})})})})]})};function eo({openLabel:e="Menu",closeLabel:t="Close"}){return m("div",{class:"globalnav-menutrigger",children:m("button",{id:"globalnav-menutrigger-button",class:"globalnav-menutrigger-button","aria-controls":"globalnav-list","aria-label":e,"data-topnav-menu-label-open":e,"data-topnav-menu-label-close":t,"data-topnav-flyout-trigger-compact":"menu",children:m("svg",{width:"18",height:"18",viewBox:"0 0 18 18","aria-hidden":"true",children:[m("polyline",{id:"globalnav-menutrigger-bread-bottom",class:"globalnav-menutrigger-bread globalnav-menutrigger-bread-bottom",fill:"none",stroke:"currentColor","stroke-width":"1.2","stroke-linecap":"round","stroke-linejoin":"round",points:"2 12, 16 12",children:[m("animate",{id:"globalnav-anim-menutrigger-bread-bottom-open",attributeName:"points",keyTimes:"0;0.5;1",dur:"0.24s",begin:"indefinite",fill:"freeze",calcMode:"spline",keySplines:"0.42, 0, 1, 1;0, 0, 0.58, 1",values:" 2 12, 16 12; 2 9, 16 9; 3.5 15, 15 3.5"}),m("animate",{id:"globalnav-anim-menutrigger-bread-bottom-close",attributeName:"points",keyTimes:"0;0.5;1",dur:"0.24s",begin:"indefinite",fill:"freeze",calcMode:"spline",keySplines:"0.42, 0, 1, 1;0, 0, 0.58, 1",values:" 3.5 15, 15 3.5; 2 9, 16 9; 2 12, 16 12"})]}),m("polyline",{id:"globalnav-menutrigger-bread-top",class:"globalnav-menutrigger-bread globalnav-menutrigger-bread-top",fill:"none",stroke:"currentColor","stroke-width":"1.2","stroke-linecap":"round","stroke-linejoin":"round",points:"2 5, 16 5",children:[m("animate",{id:"globalnav-anim-menutrigger-bread-top-open",attributeName:"points",keyTimes:"0;0.5;1",dur:"0.24s",begin:"indefinite",fill:"freeze",calcMode:"spline",keySplines:"0.42, 0, 1, 1;0, 0, 0.58, 1",values:" 2 5, 16 5; 2 9, 16 9; 3.5 3.5, 15 15"}),m("animate",{id:"globalnav-anim-menutrigger-bread-top-close",attributeName:"points",keyTimes:"0;0.5;1",dur:"0.24s",begin:"indefinite",fill:"freeze",calcMode:"spline",keySplines:"0.42, 0, 1, 1;0, 0, 0.58, 1",values:" 3.5 3.5, 15 15; 2 9, 16 9; 2 5, 16 5"})]})]})})})}function to({placeholder:e,name:t,ariaLabel:s,onInput:n=l=>{},onBlur:a=l=>{},onFocus:i=l=>{}}){return m("input",{class:"globalnav-searchfield-input",placeholder:e,name:t,"aria-label":s,autoCorrect:"off",autoCapitalize:"off",autoComplete:"off",spellCheck:!1,onInput:l=>n(l),onBlur:l=>a(l),onFocus:l=>i(l)})}function so(e,t,s){const n=e.target,{value:a}=n;let i=encodeURIComponent(a.replace(/[\s/'\\]+/g," ").trim().replace(/\s+/g,"-"));i.startsWith("-")&&(i=i.replace("-",""));const l=i!==""?"/":"",h=t.indexOf("?"),c=h>=0;let f;if(!c)f=`${t}${l}${i}`;else{const r=t.substring(0,h),b=t.substring(h);f=`${r}${l}${i}${b}`}s(f)}function no({ariaLabel:e,resultsAriaLabel:t,action:s,input:n,placeholder:a,submit:i,reset:l,src:h,name:c,type:f,page:r,locale:b,onInput:y=k=>{},onBlur:o=k=>{},onFocus:g=k=>{}}){var N,A;const k=G(null),[T,I]=se(s),S=x=>{x.preventDefault(),I(s)};return ve(()=>{I(s)},[s]),m("form",{class:"globalnav-searchfield",action:T,ref:k,method:"get",children:[m("div",{class:"globalnav-searchfield-wrapper",children:[m(to,{placeholder:a,ariaLabel:e,name:c,onInput:x=>{c===void 0&&(so(x,s,I),y(x))},onBlur:x=>o(x),onFocus:x=>g(x),autocapitalize:"off",autocomplete:"off",autocorrect:"off",spellcheck:"false","aria-label":n.ariaLabel}),m("input",{id:"globalnav-searchfield-src",type:"hidden",name:"src",value:h}),f!==void 0&&m("input",{type:"hidden",name:"type",value:f}),r!==void 0&&m("input",{type:"hidden",name:"page",value:r}),b!==void 0&&m("input",{type:"hidden",name:"locale",value:b}),m("button",{class:"globalnav-searchfield-reset","aria-label":l.ariaLabel,tabIndex:-1,type:"button",onClick:S,children:(N=l.images)==null?void 0:N.map(x=>{const{name:D,assetInline:z}=x;return m("span",{className:`globalnav-image-${D}`,"aria-hidden":"true",dangerouslySetInnerHTML:{__html:z}})})}),m("button",{class:"globalnav-searchfield-submit","aria-label":i.ariaLabel,tabIndex:-1,"aria-hidden":"true",type:"submit",children:(A=i.images)==null?void 0:A.map(x=>{const{name:D,assetInline:z}=x;return m("span",{className:`globalnav-image-${D}`,"aria-hidden":"true",dangerouslySetInnerHTML:{__html:z}})})})]}),m("div",{class:"globalnav-searchresults-count",role:"status","aria-live":"polite","data-topnav-searchresults-label":t})]})}const io=({ariaLabel:e,href:t,analyticsAttributes:s,images:n})=>m(J,{children:m("a",{role:"button",id:"globalnav-menubutton-link-search",class:"globalnav-link globalnav-link-search",href:t,"data-topnav-flyout-trigger-regular":!0,"data-topnav-flyout-trigger-compact":!0,"aria-label":e,"aria-expanded":"false","aria-controls":"globalnav-submenu-search",...Ee(s),children:m(pn,{images:n})})}),ao=()=>m("div",{class:"globalnav-searchresults"}),oo=({children:e})=>m(J,{children:m("div",{id:"globalnav-submenu-search",class:"globalnav-flyout globalnav-submenu",role:"search","aria-labelledby":"globalnav-menubutton-link-search",children:e})}),ro=({ariaLabel:e,analyticsAttributes:t,children:s})=>m(J,{children:m("li",{class:"globalnav-item globalnav-search","data-topnav-flyout-label":e,...Ee(t),children:s})});function lo({ariaLabel:e,resultsAriaLabel:t,analyticsAttributes:s,href:n,images:a,suggestionsApiUrl:i,defaultLinksApiUrl:l,input:h,placeholder:c,submit:f,reset:r,action:b,src:y,name:o,type:g,page:k,locale:T}){return m(J,{children:m(ro,{ariaLabel:e,analyticsAttributes:s,children:[m(io,{ariaLabel:e,href:n,analyticsAttributes:s,images:a}),m(oo,{children:m(dn,{children:m(Yt,{children:[m(no,{ariaLabel:e,resultsAriaLabel:t,suggestionsApiUrl:i,defaultLinksApiUrl:l,input:h,placeholder:c,submit:f,reset:r,action:b,src:y,name:o,type:g,page:k,locale:T}),m(ao,{})]})})})]})})}const co="bagitem-adding",uo="bagitem-removing",rt="with-bag-count",ho="with-bag-count-onload",mo=`${rt}-double`,po=`${rt}-triple`;function fo({locale:e="en_US",textDirection:t="ltr",ariaLabel:s,bag:n,menu:a,links:i,submenu:l,submenuApiUrl:h,search:c,storeUrlPath:f,analyticsAttributes:r,analyticsType:b,wwwDomain:y="www.apple.com",hasAbsoluteUrls:o=!1,useRelativeSearchRequest:g=!1,hasShopRedirectUrls:k=!0,subMenuData:T,setAcStoreInstance:I}){var Ct;typeof o=="string"&&(o=Rt(o)),typeof g=="string"&&(g=Rt(g));const S=G(null),N=G(null),A=G(void 0),x=G(void 0),D=G(void 0),z=G(""),U=G(void 0),te=G(""),ne=G(""),X=G(""),B=G(""),de=G(""),we=G(void 0),Fe=G(void 0),pe=G(void 0),[ie,Ne]=se(null),[He,$e]=se(),[We,ce]=se(!0),[fe,Le]=se(0),[lt,be]=se(""),[Ce,Ue]=se(""),[ct,Te]=se(""),[ut,Oe]=se(!1),Ie=As(()=>{ie!==null&&(ie.setFlyoutItems(),ie._setFlyoutHeight(ie.bag.el),ie._checkFlyoutHeight(ie.bag.el))},[ie]),Nt=e.replace("_","-");let ue=f==null?void 0:f.replace("/","");e==="zh_CN"&&(ue="cn");const Pe=((Ct=c==null?void 0:c.open)==null?void 0:Ct.url)!=null&&(c==null?void 0:c.suggestionsApiUrl)!=null&&(c==null?void 0:c.defaultLinksApiUrl)!=null,xe=n!==void 0&&f!==void 0;Ea(S),ve(()=>{var Ze,Q,je,ye,he,Ge,_,Y,ee,Re,ht,Ae,At;const ae=document.querySelectorAll('meta[name^="globalnav-"]'),R=Array.from(ae),W=Fs(R,"globalnav-");D.current=(Ze=W.searchField)==null?void 0:Ze.action,z.current=((Q=W.searchField)==null?void 0:Q.src)!==void 0?W.searchField.src:"globalnav",B.current=((je=W.searchField)==null?void 0:je.placeholderRegular)!==void 0?(ye=W.searchField)==null?void 0:ye.placeholderRegular:((he=W.searchField)==null?void 0:he.placeholder)!==void 0?(Ge=W.searchField)==null?void 0:Ge.placeholder:"",de.current=((_=W.searchField)==null?void 0:_.placeholderCompact)!==void 0?(Y=W.searchField)==null?void 0:Y.placeholderCompact:"",U.current=(ee=W.searchField)==null?void 0:ee.name,te.current=(Re=W.searchField)==null?void 0:Re.type,ne.current=(ht=W.searchField)==null?void 0:ht.page,X.current=(Ae=W.searchField)==null?void 0:Ae.locale,we.current=(At=W.searchField)==null?void 0:At.href,x.current=W.storeKey,A.current=W.bagFlyoutEnabled;const qe=W.submenusEnabled;Fe.current=W.submenusEnabled,pe.current=W.searchSuggestionsEnabled,ce(qe)},[]),ve(()=>{const ae=S==null?void 0:S.current,R={className:"globalnav",mixins:[Vi,qi,ta,sa,Aa,Ma],amlSearch:{},bagData:{},menuData:{data:a}};Pe&&c&&(R.mixins.push(la,La),c.searchFieldSrc=z.current,c.searchFieldAction=D.current!==void 0?D.current:ke(c.open.url,o===!0?y:void 0),c.searchFieldLocale=X.current,c.searchFieldPlaceholderRegular=B.current!==""?B.current:c.input.placeholderTextRegular,c.searchFieldPlaceholderCompact=de.current!==""?de.current:c.input.placeholderTextCompact,c.searchAriaLabel=B.current!==""?B.current:c.open.ariaLabel,c.searchSuggestionsEnabled=pe.current!==void 0?pe.current:void 0,R.amlSearch={searchSettings:c,locale:e,wwwDomain:y,hasAbsoluteUrls:o,useRelativeSearchRequest:g}),xe&&x.current!==void 0&&A.current!==!1&&(R.mixins.push(Ca),R.bagData={data:n,bagHref:`${f}/shop/goto${n.open.url}`});const W=new ua(ae,R);return Ne(W),ae!==null&&Oe(!0),()=>{ae!==null&&(Oe(!1),W.destroy(),Ne(null))}},[n,o,g,xe,Pe,e,a,c,f,y]),ve(()=>{const ae=S==null?void 0:S.current,R=N==null?void 0:N.current,W=Q=>{fe===0&&Q!==0&&Ue(ho)},qe=Q=>{Q===0?be(""):Q>0&&Q<10?be(rt):Q>=10&&Q<100?be(`${rt} ${mo}`):Q>=100&&be(`${rt} ${po}`)},Ze=Q=>{Ue(""),Q>0&&fe===0?Te(co):fe>0&&Q===0?Te(uo):Te("")};return R!==null&&x.current!==void 0&&A.current!==!1&&Promise.all([Promise.resolve().then(function(){return wn})]).then(Q=>{let[{AcStore:je,AcBagFlyout:ye}]=Q;const he=ae==null?void 0:ae.dataset.storeApi,Ge=he==null?void 0:he.replace("[storefront]",String(ue));let _=window.acStore;_===void 0&&(_=new je(R,ue,x.current,Ge),_!==void 0&&(_.getStoreState().then(Y=>{_==null||_.getItemCount().then(ee=>{W(ee),qe(ee),Le(ee)}),_==null||_.on("itemCountChange",ee=>{qe(ee),Ze(ee),Le(ee)})},Y=>{window.acStore.isDisabled=!0,S.current!==null&&(S==null||S.current.addEventListener("clickbag",ee=>{const Re=ee.detail.originalTarget.href;Re!==""&&(window.location.href=Re)}))}),_==null||_.getStorefront().then(Y=>{Kt(Y,ce,Fe.current)},()=>{}),_.on("storefrontChange",Y=>{Kt(Y,ce,Fe.current)}))),window.acStore=_,I(_),$e(m(ni,{children:Y=>m(ye,{acStoreInstance:Y,globalNavEl:ae,onFlyoutContentUpdate:Ie})})),S.current!==null&&window.addEventListener("segmentExit",Y=>{_==null||_.getStorefront().then(ee=>{Kt(ee,ce,Fe.current)},()=>{})})}).catch(Q=>{}),()=>{ae!==null&&window.removeEventListener("segmentExit",Q=>{})}},[fe,x,f,ue,Ie,I]);const Ve=()=>ut?"js":"no-js",Lt=Ee(r);return m(ha,{value:ie,children:[m("nav",{id:"globalnav",className:`globalnav ${Ve()} ${Ce} ${lt} ${ct}`,lang:Nt,dir:t,ref:S,"aria-label":s,"data-analytics-element-engagement-start":"globalnav:onFlyoutOpen","data-analytics-element-engagement-end":"globalnav:onFlyoutClose","data-store-api":n!==void 0?ke(n.storeApiUrl,o?y:void 0):null,...Lt,children:m("div",{className:"globalnav-content",children:[m("div",{class:"globalnav-item globalnav-menuback",children:m("button",{class:"globalnav-menuback-button","aria-label":a.back.ariaLabel,children:a.back.images.map(({name:ae,assetInline:R})=>ae==="compact"?m("span",{class:"globalnav-chevron-icon","aria-hidden":"true",dangerouslySetInnerHTML:{__html:R}}):null)})}),m("ul",{id:"globalnav-list",class:"globalnav-list",role:"none",children:[m(ma,{value:{hasAbsoluteUrls:o,wwwDomain:y},children:m(Xa,{links:i,locale:e,submenuChevron:l,submenuApiUrl:h,subMenuData:T,submenusEnabled:We})}),Pe&&m(lo,{href:we.current!==void 0?we.current:ke(c.open.url,o?y:void 0),ariaLabel:c.searchAriaLabel!==void 0?c.searchAriaLabel:c.open.ariaLabel,analyticsAttributes:c.open.analyticsAttributes,resultsAriaLabel:c.results.ariaLabel,images:c.open.images,action:D.current!==void 0?D.current:ke(c.open.url,o?y:void 0),input:c.input,placeholder:c.searchFieldPlaceholderRegular!==void 0?c.searchFieldPlaceholderRegular:c.input.placeholderTextRegular,submit:c.submit,reset:c.reset,src:z.current,name:U.current,type:te.current,page:ne.current,locale:X.current,suggestionsApiUrl:c.suggestionsApiUrl,defaultLinksApiUrl:c.defaultLinksApiUrl}),xe&&m(qa,{ref:N,bag:n,bagFlyout:He,badgeCount:fe,href:ke(n.open.url,o?y:void 0)})]}),m(eo,{})]})}),m("div",{id:"globalnav-curtain",class:"globalnav-curtain"}),m("div",{id:"globalnav-placeholder",class:"globalnav-placeholder"})]})}function go({globalNavData:e,subMenuData:t,config:s}){const[n,a]=se(void 0),i=e.locale!==void 0?e.locale.replace("_","-"):"en-US";return m(J,{children:m(si,{value:n,children:[m(ui,{isoLocale:i,textDirection:e.textDirection!==void 0?e.textDirection:"ltr",segmentData:e.segmentbar,wwwDomain:e.wwwDomain,storeUrlPath:e.storeUrlPath}),m(fo,{...e,subMenuData:t,setAcStoreInstance:a})]})})}const _o=e=>{var s;const t=(s=e==null?void 0:e.props)==null?void 0:s.globalNavData;typeof(t==null?void 0:t.hasAbsoluteUrls)=="string"&&(t.hasAbsoluteUrls=t.hasAbsoluteUrls==="true")},bn="globalheader",yn=document.getElementById(bn);if(yn===null)throw new Error(`Could not find root node ID: ${bn}`);const Sn=document.getElementById("__ACGH_DATA__");if(Sn===null)throw new Error("Can't find the data globalheaderDataElement");const En=JSON.parse(Sn.textContent);_o(En);const{props:vo}=En;$t(m(go,{...vo}),yn);var wt={exports:{}},bo=Rs(jn),yo=Rs(Xn);(function(e,t){var s=Object.defineProperty,n=Object.defineProperties,a=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,h=Object.prototype.propertyIsEnumerable,c=(S,N,A)=>N in S?s(S,N,{enumerable:!0,configurable:!0,writable:!0,value:A}):S[N]=A,f=(S,N)=>{for(var A in N||(N={}))l.call(N,A)&&c(S,A,N[A]);if(i)for(var A of i(N))h.call(N,A)&&c(S,A,N[A]);return S},r=(S,N)=>n(S,a(N)),b=(S,N,A)=>(c(S,typeof N!="symbol"?N+"":N,A),A),y=(S,N,A)=>{if(!N.has(S))throw TypeError("Cannot "+A)},o=(S,N,A)=>(y(S,N,"read from private field"),A?A.call(S):N.get(S)),g=(S,N,A)=>{if(N.has(S))throw TypeError("Cannot add the same private member more than once");N instanceof WeakSet?N.add(S):N.set(S,A)},k=(S,N,A,x)=>(y(S,N,"write to private field"),x?x.call(S,A):N.set(S,A),A),T=(S,N,A,x)=>({set _(D){k(S,N,D,A)},get _(){return o(S,N,x)}}),I=(S,N,A)=>new Promise((x,D)=>{var z=ne=>{try{te(A.next(ne))}catch(X){D(X)}},U=ne=>{try{te(A.throw(ne))}catch(X){D(X)}},te=ne=>ne.done?x(ne.value):Promise.resolve(ne.value).then(z,U);te((A=A.apply(S,N)).next())});(function(S,N){N(t,bo,yo)})(Ai,function(S,N,A){var x,D,z,U,te,ne,X,B,de,we,Fe,pe,ie,Ne,He,$e,We,ce,fe,Le,lt,be,Ce,Ue,ct,Te,ut,Oe,Ie,Nt,ue,Pe,xe,Ve;const Lt="analyticsCustomEvent",Ct=(d,u={})=>{!d||window.dispatchEvent(new CustomEvent(Lt,{detail:{name:d,data:u}}))},ae=Object.freeze({GLOBAL_NAV_BAG_ICON_CLICKED:"global_nav:bag_icon:clicked"}),R=({message:d,data:u={},level:p=R.LEVELS.LOG})=>{};R.LEVELS={LOG:"log",INFO:"info",ERROR:"error"};const W="bag",qe="savedIphonePreOrder",Ze="checkout",Q="preOrderBag",je="covers",ye=class{constructor({bagContent:d}){g(this,x,void 0),g(this,D,{});const{message:u}=d,p=Boolean(u&&u.type===je);if(k(this,x,d),p)o(this,D).covers=ye.createCoversSection({covers:d});else{const{bag:v,preOrderBag:w,buttons:E}=d;v&&(o(this,D).bag=ye.createBagSection({bag:v,buttons:E})),w&&(o(this,D).preOrderBag=ye.createPreOrderBagSection({preOrderBag:w,buttons:E})),o(this,D).profile=ye.createProfileSection({profile:d})}return R({message:"BagFlyoutModel",level:"info",data:{model:o(this,D),server:o(this,x)}}),o(this,D)}};let he=ye;x=new WeakMap,D=new WeakMap,b(he,"createCoversSection",({covers:d})=>{const{message:u}=d;return{title:u.text,showCovers:!0}}),b(he,"createBagSection",({bag:d,buttons:u})=>{const{title:p,emptyBagMsg:v,extraItemsMsg:w,subHeader:E,items:F=[]}=d;return{title:v||p,emptyBagMsg:v,subHeader:E,lineMessage:w,items:F,hasItems:Boolean(F&&F.length),button:u&&u.find(({section:L,type:C})=>L===W||C===Ze)}}),b(he,"createPreOrderBagSection",({preOrderBag:d,buttons:u})=>{const{title:p,subHeader:v,mode:w,items:E,cookieFlags:F}=d;try{Ct(ae.GLOBAL_NAV_BAG_ICON_CLICKED,F)}catch{R({message:"BagFlyoutModel.createPreOrderBagSection",level:"info",data:F})}return{title:p,subHeader:v,mode:w,items:E,hasItems:Boolean(E&&E.length),button:u&&u.find(({section:L})=>L===Q)}}),b(he,"createProfileSection",({profile:d})=>{const{linksHeader:u,links:p}=d;return{title:u,links:p.filter(({type:v})=>v!==W&&v!==qe),hasLinks:Boolean(p&&p.length)}});var Ge=0;function _(d,u,p,v,w){var E,F,L={};for(F in u)F=="ref"?E=u[F]:L[F]=u[F];var C={type:d,props:L,key:p,ref:E,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:--Ge,__source:w,__self:v};if(typeof d=="function"&&(E=d.defaultProps))for(F in E)L[F]===void 0&&(L[F]=E[F]);return N.options.vnode&&N.options.vnode(C),C}const Y={FLYOUT_WILL_OPEN:"globalnav:onFlyoutWillOpen",FLYOUT_OPEN:"globalnav:onFlyoutOpen",FLYOUT_WILL_CLOSE:"globalnav:onFlyoutWillClose",FLYOUT_CLOSE:"globalnav:onFlyoutClose"},ee={isOpen:!1,isLoading:!1,showCovers:!1,flyoutItemClass:"",flyoutData:null},Re=N.createContext(ee),ht=({acStoreInstance:d,globalNavEl:u,onFlyoutContentUpdate:p,children:v})=>{var w;const[E,F]=A.useState(ee.isOpen),[L,C]=A.useState(ee.isLoading),[O,P]=A.useState(ee.flyoutData),$=A.useRef(!1),j={isOpen:E,isClosed:!E,isLoading:L,showSpinner:!O&&E,showCovers:Boolean((w=O==null?void 0:O.covers)==null?void 0:w.showCovers),flyoutItemClass:"globalnav-flyout-item",flyoutData:O},H=A.useCallback(()=>I(this,null,function*(){$.current=!0,C(!0);try{const Z=yield d.updateBagFlyout();if(Z){const{bagContent:Ye}=Z;P(new he({bagContent:Ye}))}}catch(Z){R({message:Z,level:R.LEVELS.ERROR,data:Z})}$.current=!1,C(!1)}),[C,d,P]),V=A.useCallback(Z=>I(this,[Z],function*({event:Ye,callback:Pn}){const{detail:{target:tr}}=Ye;if(tr===d.getDomElement()&&Pn)try{yield Pn()}catch(Dn){R({message:Dn,level:R.LEVELS.ERROR,data:Dn})}}),[d]),K=A.useCallback(Z=>{!$.current&&!E&&(V({event:Z,callback:H}),F(!0))},[E,V,H,F]),oe=A.useCallback(Z=>{V({event:Z}),F(!1)},[V,F]);return A.useEffect(()=>{if(u)return u.addEventListener(Y.FLYOUT_WILL_OPEN,K),u.addEventListener(Y.FLYOUT_OPEN,K),u.addEventListener(Y.FLYOUT_WILL_CLOSE,oe),u.addEventListener(Y.FLYOUT_CLOSE,oe),()=>{u.removeEventListener(Y.FLYOUT_WILL_OPEN,K),u.removeEventListener(Y.FLYOUT_OPEN,K),u.removeEventListener(Y.FLYOUT_WILL_CLOSE,oe),u.removeEventListener(Y.FLYOUT_CLOSE,oe)}},[u,K,oe]),A.useEffect(p),_(Re.Provider,{value:j,children:E?v:null})};ht.defaultProps={onFlyoutContentUpdate:()=>{}};const Ae=()=>A.useContext(Re),At=`<svg id="Outlined" xmlns="http://www.w3.org/2000/svg" class="ac-gn-bagview-nav-svgicon" width="11" height="16" viewBox="0 0 11 16"><g id="gear_regular"><rect id="box_" width="11" height="16" fill="none"/><path id="art_" d="M10.4872,6.9633l-.568-.2173-.0111-.0013a4.3821,4.3821,0,0,0-.1128-.5609c.0062-.0047.014-.005.02-.01l.4562-.4015a.2868.2868,0,0,0-.1849-.5019l-.6078-.01c-.0075,0-.0131.0043-.02.0048-.0433-.0865-.0713-.1779-.12-.2622s-.1132-.1515-.1663-.2306c.0039-.006.0105-.0086.014-.015l.2911-.5337a.2867.2867,0,0,0-.3454-.4082l-.5743.1988c-.007.0024-.0107.0085-.0174.0114A4.3835,4.3835,0,0,0,8.1068,3.65l.0034-.008.091-.6013a.2867.2867,0,0,0-.4644-.2653l-.4713.3834c-.0052.0043-.0065.0106-.0113.0152a4.465,4.465,0,0,0-.5359-.1989c-.0008-.0048.0016-.0089.0006-.0137l-.12-.5964a.2867.2867,0,0,0-.5272-.09L5.76,2.7958l-.002.0065a4.395,4.395,0,0,0-.57.0206c-.0041-.0083-.0029-.0174-.0079-.0256l-.3164-.5195a.2867.2867,0,0,0-.5264.0952l-.1143.597c-.0016.0085.0023.0158.0014.0243a4.4074,4.4074,0,0,0-.524.2041c-.0085-.0088-.0116-.02-.0215-.0282l-.4746-.38a.2867.2867,0,0,0-.4623.2694l.0967.6a.2732.2732,0,0,0,.0149.0346,4.4091,4.4091,0,0,0-.4318.3565c-.01-.0044-.0152-.013-.0255-.0164L1.8206,3.84a.2867.2867,0,0,0-.3425.411l.296.5314c.0064.0114.0175.0166.025.0266a4.3975,4.3975,0,0,0-.2948.4815c-.0063,0-.0111-.0041-.0176-.004L.8793,5.3A.2866.2866,0,0,0,.698,5.803l.46.3985c.0079.0069.018.0075.0264.0133a4.4744,4.4744,0,0,0-.09.5552.2507.2507,0,0,0-.0344.0043l-.5659.221A.2867.2867,0,0,0,.4958,7.53l.5681.2173c.0086.0033.017.0006.0257.0031a4.368,4.368,0,0,0,.1136.5512c-.0114.0075-.0247.0088-.0354.0182l-.4561.4016a.2867.2867,0,0,0,.1848.5018l.6079.01a.2682.2682,0,0,0,.0389-.0091c.0418.0832.0686.1713.1159.2525.0482.0828.1129.151.1658.23-.0083.0111-.0206.017-.0275.03l-.2912.5337a.2867.2867,0,0,0,.3455.4082l.5743-.1988c.0138-.0048.0219-.016.0344-.0225a4.3568,4.3568,0,0,0,.4233.3693c-.0024.0094-.0093.016-.0109.0259l-.091.6013a.2867.2867,0,0,0,.4644.2654l.4713-.3835c.01-.0084.0136-.0207.0225-.03a4.45,4.45,0,0,0,.5256.195.2518.2518,0,0,0-.0016.0325l.12.5964a.2867.2867,0,0,0,.5272.0905l.3115-.5217c.0057-.0095.0045-.02.009-.03.0914.0057.1828.0177.2741.0177.0965,0,.192-.0126.288-.019.0046.01.0035.02.0092.03l.3163.5194a.2867.2867,0,0,0,.5265-.0952l.1142-.597a.2341.2341,0,0,0-.0015-.0265,4.424,4.424,0,0,0,.53-.1946c.0066.0064.0086.0151.016.021l.4746.38a.2867.2867,0,0,0,.4622-.2694l-.0967-.6a.2567.2567,0,0,0-.0162-.0376,4.4561,4.4561,0,0,0,.4338-.3532c.0093.0043.0148.0127.0249.0161l.5756.195a.2867.2867,0,0,0,.3424-.4111l-.296-.5314c-.0055-.01-.0154-.0141-.0217-.023a4.36,4.36,0,0,0,.2978-.4836c.0041,0,.0072.0027.0114.0026l.6074-.0138a.2867.2867,0,0,0,.1813-.5033l-.46-.3985c-.0046-.0039-.0105-.004-.0152-.0076a4.4757,4.4757,0,0,0,.0909-.5624c.0073-.0023.0146,0,.022-.0028l.566-.2209A.2867.2867,0,0,0,10.4872,6.9633ZM6.438,3.6748A3.6514,3.6514,0,0,1,9.1585,6.888l-2.5066.0106a1.1812,1.1812,0,0,0-.0928-.2736l0-.001a1.2222,1.2222,0,0,0-1.3571-.5568L3.9423,3.9053a3.6474,3.6474,0,0,1,1.55-.3535A3.7261,3.7261,0,0,1,6.438,3.6748ZM5.03,7.5166a.5352.5352,0,0,1,.1924-.7314.5275.5275,0,0,1,.269-.0733.5349.5349,0,1,1-.4614.8047ZM2.3135,9.0957A3.6511,3.6511,0,0,1,3.3551,4.2622L4.6078,6.4129a1.1912,1.1912,0,0,0-.001,1.6892L3.38,10.246A3.6685,3.6685,0,0,1,2.3135,9.0957Zm2.2456,1.709a3.7107,3.7107,0,0,1-.5833-.2164L5.2025,8.4439a1.2181,1.2181,0,0,0,1.4711-.8578l2.4871-.0106A3.7131,3.7131,0,0,1,9.063,8.18a3.6868,3.6868,0,0,1-4.5039,2.625Z" fill="6E6E73"/></g></svg>
`,Eo=`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="25" viewBox="0 0 17 25" class="ac-gn-bagview-nav-svgicon">
  <g>
    <rect  width="21" height="21" fill="none"/>
    <path d="M14.934,5.017H13.828A3.413,3.413,0,0,0,10.5,2,3.413,3.413,0,0,0,7.172,5.017H6.066A2.058,2.058,0,0,0,4.011,7.072v7.865a2.058,2.058,0,0,0,2.056,2.055h8.867a2.058,2.058,0,0,0,2.056-2.055V7.072A2.058,2.058,0,0,0,14.934,5.017ZM10.5,3a2.413,2.413,0,0,1,2.328,2.017H8.172A2.413,2.413,0,0,1,10.5,3Zm5.511,11.938a1.079,1.079,0,0,1-1.077,1.078H6.066a1.079,1.079,0,0,1-1.077-1.078V7.072A1.079,1.079,0,0,1,6.066,5.995h8.867a1.079,1.079,0,0,1,1.077,1.078Z" fill="6E6E73"/>
  </g>
</svg>

`,Fo={account:At,bag:Eo,favorites:wo,orders:No,signIn:Nn,signOut:Nn,yoursaves:Lo},$o={account:Ao,orders:Mo,signIn:Ln,signOut:Ln,yoursaves:ko},To=({url:d,text:u,type:p,analyticsValue:v,flyoutItemClass:w})=>{const E=Fo[p],F=$o[p];return _("li",{className:`
$ {
  w
}
ac - gn - bagview - nav - item ac - gn - bagview - nav - item - $ {
  p
}
`,children:_("a",{href:d,"data-analytics-title":v,className:`
ac - gn - bagview - nav - link ac - gn - bagview - nav - link - $ {
  p.toLowerCase()
}
`,"data-ac-autom":`
gn - bagview - link - $ {
  p
}
`,children:[_("div",{className:"ac-gn-bagview-nav-image-container",children:[_("span",{className:"ac-gn-bagview-nav-image-regular",dangerouslySetInnerHTML:{__html:E}}),_("span",{className:"ac-gn-bagview-nav-image-compact",dangerouslySetInnerHTML:{__html:F}})]}),_("span",{className:"ac-gn-bagview-nav-text",children:u})]})})},Cn=(d={},u={})=>{const p=u?Object.assign(d,u):d;return Object.keys(p).map(v=>`
$ {
  encodeURIComponent(v)
} = $ {
  encodeURIComponent(p[v])
}
`).join("&").replace(/^/,"?")},Jt=(d="")=>{if(!d)return null;const u={};return d.split("&").forEach(p=>{const[v,w=""]=p.split("="),E=decodeURIComponent(w.replace(/\+/g," "));u[v]=E}),u},Oo=d=>{let u=null;if(!d)return u;const p=(document.cookie||"").split(";");for(let v=0;v<p.length;v+=1){const w=(p[v]||"").trim();if(w.substring(0,d.length+1)===`
$ {
  d
} = `){u=decodeURIComponent(w.substring(d.length+1));break}}if(u&&u.match(/^\s*\{/))try{u=JSON.parse(u)}catch(v){R({message:v,level:R.LEVELS.ERROR,data:v})}return u},Io=()=>{const d=Oo("pxro");return(d?parseInt(d,10):2)>=2},xo=(d="",u,p)=>{if(!d)return{};const[v,w]=d.split("?"),E=Jt(w),F=Jt(u),L=Jt(p),C=p?v.concat(w.replace(/^/,"?")):v.concat(Cn(E,F)),O=u?v.concat(w.replace(/^/,"?")):v.concat(Cn(E,L));return{imgSrc:Io()?O:C,srcSet:C||O?`
$ {
  C
}, $ {
  O
}
2 x`:null}},An=({src:d,width:u,height:p,alt:v,scaleParams1:w,scaleParams2:E})=>{const{imgSrc:F="",srcSet:L=""}=xo(d,w,E);return _("img",{src:d||F,srcSet:L,width:u,height:p,alt:v,className:"ac-gn-bagview-bagitem-picture"})},Mn=({name:d,qty:u,orderInfo:p,qtyLabelA11y:v})=>_(N.Fragment,{children:[d,u>1&&_(N.Fragment,{children:_("span",{"aria-label":`
$ {
  v
}
$ {
  u
}
`,className:"ac-gn-bagview-bagitem-qty",children:u})}),p&&_("span",{className:"ac-gn-bagview-bagitem-info",children:p})]}),kn=({url:d,text:u,type:p,onClick:v,buttonLabelA11y:w,flyoutItemClass:E,dataAnalyticsTitle:F})=>_("a",{onClick:v,href:d,className:`
$ {
  E
}
ac - gn - bagview - button ac - gn - bagview - button - pill`,"data-ac-autom":`
gn - bagview - button - $ {
  p
}
`,"data-autom":"globalnav-reviewBag","data-analytics-title":F,"aria-label":w,children:u}),Ro=()=>_("div",{className:"ac-gn-loading-indicator",children:_("div",{"data-progress-indicator":"",className:"progress-indicator progress-indicator-indeterminate progress-indicator-curtain progress-indicator-visible ac-gn-progress-indicator-curtain","aria-label":"aria-label-from-constructor",children:_("svg",{className:"progress-indicator-icon",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 56 56","aria-hidden":"true",children:_("g",{className:"progress-indicator-spokes",children:[_("path",{className:"progress-indicator-spoke",d:"M28,8.5A2.5,2.5,0,0,1,30.5,11v7a2.5,2.5,0,0,1-5,0V11A2.5,2.5,0,0,1,28,8.5Z"}),_("path",{className:"progress-indicator-spoke",d:"M41.79,14.21a2.52,2.52,0,0,1,0,3.54L36.84,22.7a2.5,2.5,0,0,1-3.54-3.54l5-4.95A2.52,2.52,0,0,1,41.79,14.21Z"}),_("path",{className:"progress-indicator-spoke",d:"M47.5,28A2.5,2.5,0,0,1,45,30.5H38a2.5,2.5,0,0,1,0-5h7A2.5,2.5,0,0,1,47.5,28Z"}),_("path",{className:"progress-indicator-spoke",d:"M41.79,41.79a2.52,2.52,0,0,1-3.54,0l-5-4.95a2.5,2.5,0,0,1,3.54-3.54l4.95,5A2.52,2.52,0,0,1,41.79,41.79Z"}),_("path",{className:"progress-indicator-spoke",d:"M28,47.5A2.5,2.5,0,0,1,25.5,45V38a2.5,2.5,0,0,1,5,0v7A2.5,2.5,0,0,1,28,47.5Z"}),_("path",{className:"progress-indicator-spoke",d:"M14.21,41.79a2.52,2.52,0,0,1,0-3.54l4.95-5a2.5,2.5,0,0,1,3.54,3.54l-4.95,4.95A2.52,2.52,0,0,1,14.21,41.79Z"}),_("path",{className:"progress-indicator-spoke",d:"M8.5,28A2.5,2.5,0,0,1,11,25.5h7a2.5,2.5,0,0,1,0,5H11A2.5,2.5,0,0,1,8.5,28Z"}),_("path",{className:"progress-indicator-spoke",d:"M14.21,14.21a2.52,2.52,0,0,1,3.54,0l4.95,4.95a2.5,2.5,0,0,1-3.54,3.54l-4.95-4.95A2.52,2.52,0,0,1,14.21,14.21Z"})]})})})}),Bo=()=>{const{flyoutData:{covers:{title:d}}}=Ae();return _("h2",{className:"ac-gn-bagview-header",children:d})};var Fn={exports:{}};


(function(d) {
  (function() {
    var u = {}.hasOwnProperty;

    function p() {
      for(var v = [], w = 0; w < arguments.length; w++) {
        var E = arguments[w];
        if(E) {
          var F = typeof E;
          if(F === "string" || F === "number") v.push(E);
          else if(Array.isArray(E)) {
            if(E.length) {
              var L = p.apply(null, E);
              L && v.push(L)
            }
          }
          else if(F === "object") {
            if(E.toString !== Object.prototype.toString && !E.toString.toString().includes("[native code]")) {
              v.push(E.toString());
              continue
            }
            for(var C in E) u.call(E, C) && E[C] && v.push(C)
          }
        }
      }
      return v.join(" ")
    }
    d.exports ? (p.default = p, d.exports = p) : window.classNames = p
  })()
})(Fn);
const $n = Fn.exports,
  Po = ({
    header: d,
    subHeader: u,
    mode: p,
    lineMessage: v,
    product: w,
    flyoutButton: E,
    flyoutItemClass: F,
    isEmpty: L
  }) => {
    const C = p === "preorder",
      O = C ? "pre-order" : p,
      P = C ? "pre-order" : "view";
    return _("div", {
      className: $n("ac-bag-flyout-content ac-get-ready-bag", {
        "ac-bag-flyout-content-isempty": L
      }),
      "data-analytics-region": `get ready ${O}`,
      "data-autom": "ac-pre-order-bag",
      children: [_("div", {
        className: "ac-bag-flyout-content-left",
        children: [_("h2", {
          className: `${F} ac-gn-bagview-header`,
          children: d
        }), u && _("div", {
          className: `${F} ac-gn-bagview-subheader`,
          dangerouslySetInnerHTML: {
            __html: u
          }
        }), w && _("div", {
          className: "ac-gn-bagview-bagitem-wrapper",
          children: w
        }), v && _("div", {
          className: `${F} ac-gn-bagview-message`,
          children: _("span", {
            className: "ac-gn-bagview-message-text",
            children: v
          })
        })]
      }), E && _("div", {
        className: "ac-bag-flyout-content-right",
        children: _(kn, {
          url: E.url,
          text: E.text,
          dataAnalyticsTitle: P,
          type: E.type,
          buttonLabelA11y: E.buttonLabelA11y,
          flyoutItemClass: F
        })
      })]
    })
  },
  Do = ({
    name: d,
    productUrl: u,
    imageProps: p,
    qty: v,
    orderInfo: w,
    qtyLabelA11y: E,
    index: F,
    flyoutItemClass: L
  }) => {
    const C = Boolean(Object.keys(p).length);
    return _("li", {
      className: `${L} ac-gn-bagview-bagitem`,
      children: _("a", {
        className: "ac-gn-bagview-bagitem-link",
        href: u,
        "data-analytics-title": d,
        children: [_("span", {
          className: "ac-gn-bagview-bagitem-column1",
          children: C && p.src ? _(An, f({}, p)) : _("span", {
            dangerouslySetInnerHTML: {
              __html: Co
            }
          })
        }), _("span", {
          className: "ac-gn-bagview-bagitem-column2",
          "data-ac-autom": `gn-bagview-itemname-${F}`,
          children: _(Mn, {
            name: d,
            qty: v,
            orderInfo: w,
            qtyLabelA11y: E
          })
        })]
      })
    }, d)
  },
  Ho = () => {
    const {
      flyoutData: {
        preOrderBag: d
      },
      flyoutItemClass: u
    } = Ae(), {
      title: p,
      subHeader: v,
      mode: w,
      hasItems: E,
      items: F,
      button: L
    } = d, C = E && F.map((O, P) => {
      const {
        name: $,
        productUrl: j,
        productImg: H = {},
        qty: V,
        orderInfo: K,
        qtyLabelA11y: oe
      } = O, Z = H && {
        src: H.src,
        width: H.width,
        height: H.height,
        alt: H.alt,
        scaleParams1: H.scaleParams1,
        scaleParams2: H.scaleParams2
      };
      return _(Do, {
        name: $,
        productUrl: j,
        imageProps: Z,
        qty: V,
        orderInfo: K,
        qtyLabelA11y: oe,
        index: P,
        flyoutItemClass: u
      }, $)
    });
    return _(Po, {
      header: p,
      subHeader: v,
      mode: w,
      lineMessage: void 0,
      product: C,
      flyoutButton: L,
      flyoutItemClass: u,
      isEmpty: Boolean(!E)
    })
  },
  Wo = ({
    header: d,
    subHeader: u,
    lineMessage: p,
    product: v,
    flyoutButton: w,
    flyoutItemClass: E,
    isEmpty: F
  }) => _("div", {
    className: "ac-bag-flyout-content",
    "data-analytics-region": "bag items",
    children: [_("div", {
      className: $n("ac-bag-flyout-content-left", {
        "ac-bag-flyout-content-isempty": F
      }),
      children: [_("h2", {
        className: `${E} ac-gn-bagview-header`,
        children: d
      }), u && _("div", {
        className: `${E} ac-gn-bagview-subheader`,
        dangerouslySetInnerHTML: {
          __html: u
        }
      }), v && _("div", {
        className: "ac-gn-bagview-bagitem-wrapper",
        children: v
      }), p && _("div", {
        className: `${E} ac-gn-bagview-message`,
        children: _("span", {
          className: "ac-gn-bagview-message-text",
          children: p
        })
      })]
    }), w && _("div", {
      className: "ac-bag-flyout-content-right",
      children: _(kn, {
        url: w.url,
        text: w.text,
        dataAnalyticsTitle: "Review Bag",
        type: w.type,
        buttonLabelA11y: w.buttonLabelA11y,
        flyoutItemClass: E
      })
    })]
  }),
  Uo = ({
    name: d,
    productUrl: u,
    imageProps: p,
    qty: v,
    qtyLabelA11y: w,
    index: E,
    flyoutItemClass: F
  }) => _("li", {
    className: `${F} ac-gn-bagview-bagitem`,
    "data-autom": "bag-item",
    children: _("a", {
      className: "ac-gn-bagview-bagitem-link",
      href: u,
      "data-analytics-title": d,
      children: [_("span", {
        className: "ac-gn-bagview-bagitem-column1",
        children: _(An, f({}, p))
      }), _("span", {
        className: "ac-gn-bagview-bagitem-column2",
        "data-ac-autom": `gn-bagview-itemname-${E}`,
        children: _(Mn, {
          name: d,
          qty: v,
          qtyLabelA11y: w
        })
      })]
    })
  }, d),
  Vo = () => {
    const {
      flyoutData: {
        bag: d
      },
      flyoutItemClass: u
    } = Ae(), {
      title: p,
      lineMessage: v,
      emptyBagMsg: w,
      subHeader: E,
      hasItems: F,
      items: L,
      button: C
    } = d, O = F && L.map((P, $) => {
      const {
        name: j,
        productUrl: H,
        productImg: V = {},
        qty: K,
        qtyLabelA11y: oe
      } = P, Z = V && {
        src: V.src,
        width: V.width,
        height: V.height,
        alt: V.alt,
        scaleParams1: V.scaleParams1,
        scaleParams2: V.scaleParams2
      };
      return _(Uo, {
        name: j,
        productUrl: H,
        imageProps: Z,
        qty: K,
        qtyLabelA11y: oe,
        index: $,
        flyoutItemClass: u
      }, j)
    });
    return _(Wo, {
      header: p,
      subHeader: E,
      lineMessage: v,
      product: O,
      flyoutButton: C,
      flyoutItemClass: u,
      isEmpty: Boolean(w)
    })
  },
  qo = ({
    linksHeader: d,
    menuLinks: u,
    flyoutItemClass: p
  }) => _("div", {
    className: "ac-gn-bagview-nav-item-wrapper",
    "data-analytics-region": "my profile",
    children: [_("h3", {
      className: `${p} ac-gn-bagview-nav-item-header`,
      children: d
    }), _("ul", {
      children: u
    })]
  }),
  Zo = () => {
    const {
      flyoutItemClass: d,
      flyoutData: {
        profile: {
          title: u,
          hasLinks: p,
          links: v
        }
      }
    } = Ae(), w = p && v.map(E => _(To, {
      text: E.text,
      url: E.url,
      type: E.type,
      analyticsValue: E.type === "yoursaves" ? "saved items" : E.type,
      flyoutItemClass: d
    }, E.url));
    return _(qo, {
      linksHeader: u,
      menuLinks: w,
      flyoutItemClass: d
    })
  },
  jo = () => {
    const {
      flyoutData: {
        preOrderBag: d,
        bag: u,
        profile: p
      }
    } = Ae();
    return _(N.Fragment, {
      children: [d && _(Ho, {}), u && _(Vo, {}), p && _(Zo, {})]
    })
  };

function Go() {
  const {
    showSpinner: d,
    showCovers: u
  } = Ae();
  return d ? _(Ro, {}) : _("div", {
    className: "ac-bag-flyout-container ac-gn-bagview-content",
    "data-autom": "ac-gn-bagview",
    children: u ? _(Bo, {}) : _(jo, {})
  })
}

function zo({
  acStoreInstance: d,
  globalNavEl: u,
  onFlyoutContentUpdate: p
}) {
  return _(ht, {
    acStoreInstance: d,
    globalNavEl: u,
    onFlyoutContentUpdate: p,
    children: _(Go, {})
  })
}

function Tn() {
  this._events = {}
}
var ze = Tn.prototype;
ze.on = function(d, u) {
  this._events[d] = this._events[d] || [], this._events[d].unshift(u)
}, ze.once = function(d, u) {
  var p = this;

  function v(w) {
    p.off(d, v), w !== void 0 ? u(w) : u()
  }
  this.on(d, v)
}, ze.off = function(d, u) {
  if(this.has(d)) {
    if(arguments.length === 1) {
      this._events[d] = null, delete this._events[d];
      return
    }
    var p = this._events[d].indexOf(u);
    p !== -1 && this._events[d].splice(p, 1)
  }
}, ze.trigger = function(d, u) {
  if(this.has(d))
    for(var p = this._events[d].length - 1; p >= 0; p--) u !== void 0 ? this._events[d][p](u) : this._events[d][p]()
}, ze.has = function(d) {
  return !(!(d in this._events) || this._events[d].length === 0)
}, ze.destroy = function() {
  for(var d in this._events) this._events[d] = null;
  this._events = null
};
var Ko = Tn,
  Qo = {
    EventEmitterMicro: Ko
  };
const Yo = "string",
  {
    localStorage: Xt,
    JSON: On
  } = window,
  Ke = {
    getItem: d => {
      let u = null;
      try {
        u = Xt.getItem(d);
        try {
          u = On.parse(u)
        }
        catch (p) {
          R({
            message: p,
            level: R.LEVELS.ERROR,
            data: p
          })
        }
      }
      catch (p) {
        R({
          message: p,
          level: R.LEVELS.ERROR,
          data: p
        })
      }
      return u
    },
    setItem: (d, u) => {
      try {
        return typeof u !== Yo && (u = On.stringify(u)), Xt.setItem(d, u), !0
      }
      catch (p) {
        return R({
          message: p,
          level: R.LEVELS.ERROR,
          data: p
        }), !1
      }
    },
    removeItem: d => {
      try {
        return Xt.removeItem(d), !0
      }
      catch (u) {
        return R({
          message: u,
          level: R.LEVELS.ERROR,
          data: u
        }), !1
      }
    }
  },
  es = "as_",
  In = ["", "_stag", "_ce01aws", "_ce02aws", "_ce03aws", "_ce04aws", "_ce05aws", "_ce06aws", "_ce07aws", "_xe01aws", "_xe02aws", "_xe03aws", "_xe04aws", "_xe05aws", "_xe06aws", "_xe07aws", "_ce01", "_ce02", "_ce03", "_ce04", "_ce05", "_ce06", "_ce07", "_xe01", "_xe02", "_xe03", "_xe04", "_xe05", "_xe06", "_xe07", "_dv01aws", "_dev01", "_dv01"],
  ge = {
    get: d => {
      const {
        document: {
          cookie: u
        }
      } = window;
      let p = "";
      try {
        const v = encodeURIComponent(d).replace(/[-.+*]/g, "\\$&"),
          w = new RegExp(`(?:(?:^|.*;)\\s*${v}\\s*\\=\\s*([^;]*).*$)|^.*$`);
        p = decodeURIComponent(u.replace(w, "$1"))
      }
      catch (v) {
        R({
          message: v,
          level: R.LEVELS.ERROR,
          data: v
        })
      }
      return p
    },
    getPrefixedAs: d => {
      const {
        cookieMap: u = {}
      } = window, p = u[`as_${d}`];
      let v;
      if(p) v = ge.get(p);
      else
        for(const w of In)
          if(v = ge.get(`${es}${d}${w}`), v) break;
      return v
    },
    has: d => {
      const {
        document: {
          cookie: u
        }
      } = window;
      let p = !1;
      if(d) try {
        const v = encodeURIComponent(d).replace(/[-.+*]/g, "\\$&");
        p = new RegExp(`(?:^|;\\s*)${v}\\s*\\=`).test(u)
      }
      catch (v) {
        R({
          message: v,
          level: R.LEVELS.ERROR,
          data: v
        })
      }
      return p
    },
    remove: (d, u, p) => {
      const {
        document: v
      } = window, w = p ? `; domain=${p}` : "", E = p ? `; path=${u}` : "";
      let F = !1;
      return ge.has(d) && (v.cookie = `${encodeURIComponent(d)}=; expires=Thu, 01 Jan 1970 00:00:00 GMT${w}${E}`, F = !0), F
    },
    removePrefixedAs: (d, u, p) => {
      const {
        envCookieSuffix: v
      } = window;
      let w;
      if(v) w = ge.remove(`${es}${d}${v}`, u, p);
      else {
        for(const E of In) ge.remove(`${es}${d}${E}`, u, p);
        w = !0
      }
      return w
    }
  },
  xn = class extends Error {
    constructor(d, u) {
      super(d), this.type = u, this.name = xn.name
    }
  };
let le = xn;
b(le, "name", "AcStoreError"), b(le, "Types", {
  BAD_JSON_RESPONSE: 0,
  MISSING_API_ADD_TO_BAG: 1,
  MISSING_API_FLYOUT: 2,
  ITEM_NOT_ADDED: 3
});
const Jo = "globalnav",
  Qe = "ac-store-cache",
  Rn = {
    FAVORITE_ADDED: "favoriteAdded",
    STATE_CHANGE: "Change"
  },
  Bn = () => {};
class Mt extends Qo.EventEmitterMicro {
  constructor(u, p, v, w) {
    super(), g(this, z, void 0), g(this, U, void 0), g(this, te, void 0), g(this, ne, void 0), g(this, X, null), g(this, B, null), g(this, de, null), g(this, we, 0), g(this, Fe, 200), g(this, pe, {
        storeState: {
          bag: null,
          segmentNav: null,
          covers: null
        },
        itemCount: -1,
        storefront: {},
        bagContent: o(this, X)
      }), g(this, ie, null), g(this, Ne, !1), g(this, He, /([^/]*)\/\/([^/]*)\/.*/), g(this, $e, void 0), g(this, We, !1), g(this, ce, (L, C) => {
        const O = o(this, pe)[L];
        let P = O !== C;
        if(P && typeof O == "object" && typeof C == "object") {
          P = !1;
          for(const $ in C)
            if(P = C[$] !== O[$], P) break;
          if(!P) {
            for(const $ in O)
              if(P = !($ in C), P) break
          }
        }
        P && (o(this, pe)[L] = C, this.trigger(`${L}${Rn.STATE_CHANGE}`, C))
      }), g(this, fe, (L, C, O, P) => {
        let $ = L;
        const j = $.indexOf("?") === -1 ? "?" : "&";
        O = O || {};
        for(const H in C) {
          const V = new RegExp(`(%5B|\\[)${H}(%5D|\\])`, "g");
          $ = $.replace(V, encodeURIComponent(C[H]))
        }
        $ = $.indexOf("//") === 0 ? window.location.protocol + $ : $, $ += `${j}apikey=${encodeURIComponent(o(this,te))}`, $ += P ? `&l=${encodeURIComponent(`${window.location}`)}` : "";
        for(const H in O) $ += H && O[H] ? `&${H}=${encodeURIComponent(O[H])}` : "";
        return new Promise((H, V) => {
          const K = new XMLHttpRequest;
          K.onreadystatechange = () => {
            if(K.readyState === 4) try {
              const oe = JSON.parse(K.responseText);
              H(oe)
            }
            catch (oe) {
              const Z = "Response is not JSON.",
                Ye = new le(Z, le.Types.BAD_JSON_RESPONSE);
              R({
                message: Z,
                level: R.LEVELS.ERROR,
                data: {
                  error: Ye,
                  exception: oe
                }
              }), V(Ye)
            }
          }, K.open("GET", $), K.withCredentials = !0, K.send()
        })
      }), g(this, Le, () => {
        const L = window.decodeURIComponent(window.escape(window.atob(ge.getPrefixedAs("sfa")))).split("|"),
          [C, O, P] = L,
          $ = j => {
            if(C === "2") {
              if(j === 9) return P;
              if(j > 1) return L[j + 1]
            }
            return L[j]
          };
        return o(this, de) || k(this, de, {
          version: $(0),
          storefront: $(1),
          name: $(2),
          locale: $(3),
          segmentCode: $(4),
          channelCode: $(5),
          showBanner: $(6) === "1" || $(6) === "true",
          persistBanner: $(7) === "1" || $(7) === "true",
          bagEnabled: $(8) !== "0" && $(8) !== "false",
          consumerStorefront: $(9)
        }), o(this, de)
      }), g(this, lt, () => ge.get("as_atb").split("|").slice(2).join("")),
      g(this, be, () => new Promise(L => {
        const C = o(this, Le).call(this);
        o(this, ce).call(this, "storefront", C), L(C)
      })), g(this, Ce, () => {
        const L = new Date().getTime();
        let C = !1,
          O = null,
          P = !0,
          $ = !0;
        return o(this, ie) || k(this, ie, o(this, be).call(this).then(j => {
          const H = ge.getPrefixedAs("cn"),
            V = j.storefront || o(this, U),
            K = `${document.location}`.replace(o(this, He), "$2");
          if(k(this, B, o(this, B) || Ke.getItem(Qe)), P = j.bagEnabled, $ = j.showBanner, o(this, B) && (C = o(this, Ne) && o(this, B).ttl === 0 || L < o(this, B).ttl && H === o(this, B).cn && o(this, te) === o(this, B).key && V === o(this, B).sfLoc && (!o(this, $e) || o(this, $e) === K)), k(this, $e, K), C) return
          Promise.resolve();
          const oe = {
            storefront: V
          };
          return o(this, fe).call(this, o(this, ne), oe, {}, !1).then(Z => {
            O = isNaN(parseInt(Z.items, 10)), k(this, B, {
              ttl: parseInt(Z.ttl, 10) * 1e3 + L || 0,
              items: O ? 0 : parseInt(Z.items, 10),
              cn: H,
              api: Z.api,
              key: o(this, te),
              sfLoc: V
            }), Ke.setItem(Qe, o(this, B)), k(this, Ne, !!Z.api && !Z.disabled)
          })
        }).then(Bn, Bn).then(() => new Promise((j, H) => {
          const V = P && (C || o(this, Ne));
          o(this, ce).call(this, "storeState", {
            bag: V,
            segmentNav: $,
            covers: O
          });
          const K = V && o(this, B) && o(this, B).items || 0;
          o(this, ce).call(this, "itemCount", K), k(this, ie, null), V ? j() : this.isDisabled || H()
        }))), o(this, ie)
      }), g(this, Ue, () => {
        const L = window.location.host;
        return L.slice(L.indexOf("."))
      }), g(this, ct, L =>
        new Promise(C => {
          setTimeout(C, L)
        })), g(this, Te, (L, C) => o(this, be).call(this).then(O => {
        const P = o(this, B) && o(this, B).api && o(this, B).api.addToBag;
        if(!P) throw new le("No add to bag API URL on page.", le.Types.MISSING_API_ADD_TO_BAG);
        const $ = {
            storefront: O.storefront || o(this, U),
            part: L
          },
          j = r(f({}, C), {
            atbtoken: o(this, lt).call(this)
          });
        return o(this, fe).call(this, P, $, j, !1)
      }).then(O => {
        const {
          addedToBag: P,
          bagQuantity: $,
          errorCode: j,
          message: H
        } = O;
        return P ? (this.__setItemCount($ || 0), this.clearBagCache(), Promise.resolve(H)) : j === "CSRF_TOKEN_EXPIRED" && o(this, we) > 0 ? (T(this, we)._--, o(this, ct).call(this, o(this, Fe)).then(() => o(this, Te).call(this, L, C))) :
          Promise.reject(new le(H, le.Types.ITEM_NOT_ADDED))
      })), b(this, "getDomElement", () => o(this, z)), b(this, "getState", () => ({
        storeState: o(this, pe).storeState,
        bagContent: typeof o(this, X) == "object" ? o(this, X) : null
      })), b(this, "getStoreState", () => o(this, Ce).call(this).then(() => o(this, pe).storeState)), b(this, "getItemCount", () => o(this, Ce).call(this).then(() => o(this, pe).itemCount)), b(this, "__setItemCount", L => {
        k(this, X, null), o(this, ce).call(this, "itemCount", L), o(this, B) && (o(this, B).items = L, Ke.setItem(Qe, o(this, B)))
      }), b(this, "getStorefront", () => new Promise(L => {
        const C = o(this, Le).call(this);
        o(this, ce).call(this, "storefront", C), L(C)
      })), b(this, "exitStorefront", (L = !1) => {
        const C = document.getElementById(Jo);
        if(C && C.getAttribute("lang") === "zh-CN") {
          const O = o(this, Ue).call(this);
          ge.removePrefixedAs("sfa", "/", O), ge.remove("as_sfa", "/", ".apple.com.cn")
        }
        else ge.removePrefixedAs("sfa", "/", ".apple.com");
        Ke.removeItem(Qe), k(this, B, null), k(this, de, null), o(this, Le).call(this), L || o(this, Ce).call(this)
      }), b(this, "addItem", (L, C, O) => new Promise(P => {
        k(this, we, C || 1);
        const $ = O || {};
        P(o(this, Te).call(this, L, $))
      })), b(this, "addFavorite", L => new Promise(C => {
        this.trigger(Rn.FAVORITE_ADDED), C()
      })), b(this, "updateBagFlyout", () => new Promise(L => {
        o(this, X) === null ? (k(this, X, !0), (o(this, B) && o(this, B).api ? Promise.resolve() : o(this, Ce).call(this)).then(o(this, be)).then(C => {
          const O = o(this, B) && o(this, B).api && o(this, B).api.flyout,
            P = {
              storefront: C.storefront || o(this, U)
            };
          if(!O) throw new le("No flyout API URL on page.", le.Types.MISSING_API_FLYOUT);
          return o(this, fe).call(this, O, P, {}, !0)
        }).then(C => {
          k(this, X, C)
        }, () => {
          k(this, X, null)
        }).finally(() => {
          L(this.getState())
        })) : L(this.getState())
      })), b(this, "clearCache", (L = !1) => {
        if(!L || !o(this, Ne)) return Ke.removeItem(Qe), k(this, B, null), k(this, de, null), o(this, Ce).call(this)
      }), b(this, "clearBagCache", () => {
        k(this, X, null)
      });
    const E = Object.getPrototypeOf(this);
    E.AcStoreError = le, k(this, z, u), k(this, U, p), k(this, te, v), k(this, ne, w), k(this, $e, window.document.referrer.replace(o(this, He), "$2"));
    const F = o(this, Le).call(this).consumerStorefront;
    !!F && !!p && F !== p && this.exitStorefront(!0)
  }
  get isDisabled() {
    return o(this, We)
  }
  set isDisabled(u) {
    k(this, We, u)
  }
}
z = new WeakMap, U = new WeakMap, te = new WeakMap, ne = new WeakMap, X = new WeakMap, B = new WeakMap, de = new WeakMap, we = new WeakMap, Fe = new WeakMap, pe = new WeakMap, ie = new WeakMap, Ne = new WeakMap, He = new WeakMap, $e = new WeakMap, We = new WeakMap, ce = new WeakMap, fe = new WeakMap, Le = new WeakMap, lt = new WeakMap, be = new WeakMap, Ce = new WeakMap, Ue = new WeakMap, ct = new WeakMap, Te = new WeakMap, b(Mt, "name", "AcStore"), b(Mt, "AcStoreError", le), b(Mt, "staticClearCache", () => Ke.removeItem(Qe));
class Xo {
  constructor() {
    g(this, ut, "aos-gn-links"), g(this, Oe, null), g(this, Ie, null), g(this, Nt, "AosLinkReplacer"), g(this, ue, ({
      message: u = "",
      type: p = "log",
      data: v
    }) => {}), g(this, Pe, u => {
      for(const [p, v] of Object.entries(o(this, Oe))) {
        const w = new RegExp(`${p}$`);
        if(u.match(w)) return o(this, ue).call(this, {
          type: "info",
          message: "replaced with AOS value",
          data: {
            marcomUrl: u,
            aosUrl: v
          }
        }), v
      }
      return u
    }), g(this, xe, u => {
      const {
        url: p
      } = u;
      u.url = o(this, Pe).call(this, p)
    }), g(this, Ve, ({
      baseLinks: u,
      elevatedLinks: p
    }) => {
      u && u.forEach(o(this, xe)), p && p.forEach(o(this, xe))
    }), b(this, "shouldReplaceSubMenuLinks", () => {
      let u = !1;
      const p = document.getElementById(o(this, ut));
      if(p) try {
        k(this, Oe, JSON.parse(p.innerHTML)), o(this, ue).call(this, {
          message: "AOS Replacement map loaded.",
          type: "info",
          data: o(this, Oe)
        }), u = !0
      }
      catch (v) {
        o(this, ue).call(this, {
          message: v.message,
          type: "warn",
          data: v
        }), u = !1
      }
      return u
    }), b(this, "replaceSubMenuLinks", u => new Promise(p => {
      let v;
      try {
        if(!this.shouldReplaceSubMenuLinks()) throw new Error("AOS URL replacement map is not defined.");
        k(this, Ie, JSON.parse(JSON.stringify(u))), o(this, Ie).forEach(({
          baseGroups: w,
          elevatedGroups: E
        }) => {
          Array.isArray(w) && w.forEach(o(this, Ve)), Array.isArray(E) && E.forEach(o(this, Ve))
        }), v = o(this, Ie), o(this, ue).call(this, {
          message: "replacement completed",
          type: "info",
          data: v
        })
      }
      catch (w) {
        v = u, o(this, ue).call(this, {
          message: "replacement failed",
          type: "warn",
          data: {
            result: v,
            error: w
          }
        })
      }
      finally {
        p(v)
      }
    }))
  }
}
ut = new WeakMap, Oe = new WeakMap, Ie = new WeakMap, Nt = new WeakMap, ue = new WeakMap, Pe = new WeakMap, xe = new WeakMap, Ve = new WeakMap;
const er = new Xo;
S.ANALYTICS_EVENT_TYPE = Lt, S.AcBagFlyout = zo, S.AcStore = Mt, S.AcStoreError = le, S.AosLinkReplacer = er, Object.defineProperties(S, {
__esModule: {
value: !0
},
[Symbol.toStringTag]: {
value: "Module"
}
})
})
})(wt, wt.exports);
var So = Mi(wt.exports),
  wn = mt({
    __proto__: null,
    default: So
  }, [wt.exports])
});
