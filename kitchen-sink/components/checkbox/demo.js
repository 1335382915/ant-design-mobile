webpackJsonp([19,141],{8:function(n,t,a){"use strict";a(13),a(12)},12:function(n,t){},13:function(n,t){},17:function(n,t){"use strict";t.__esModule=!0,t["default"]=function(n,t){var a={};for(var e in n)t.indexOf(e)>=0||Object.prototype.hasOwnProperty.call(n,e)&&(a[e]=n[e]);return a}},18:function(n,t,a){"use strict";a(8),a(26)},26:function(n,t){},54:function(n,t,a){"use strict";function e(n){return n&&n.__esModule?n:{"default":n}}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var s=a(5),o=e(s),p=a(6),u=e(p),l=a(2),c=e(l),r=a(4),i=e(r),f=a(3),d=e(f),k="/Users/jiangkai/github/ant-design-mobile/components/flex/Flex.web.tsx",m=a(1),b=e(m),g=a(7),h=e(g),y=function(n,t){var a={};for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&t.indexOf(e)<0&&(a[e]=n[e]);if(null!=n&&"function"==typeof Object.getOwnPropertySymbols)for(var s=0,e=Object.getOwnPropertySymbols(n);s<e.length;s++)t.indexOf(e[s])<0&&(a[e[s]]=n[e[s]]);return a},v=function(n){function t(){return(0,c["default"])(this,t),(0,i["default"])(this,n.apply(this,arguments))}return(0,d["default"])(t,n),t.prototype.render=function(){var n,t=this.props,a=t.direction,e=t.wrap,s=t.justify,p=t.align,l=t.alignContent,c=t.className,r=t.children,i=t.prefixCls,f=t.style,d=y(t,["direction","wrap","justify","align","alignContent","className","children","prefixCls","style"]),m=(0,h["default"])((n={},(0,u["default"])(n,i,!0),(0,u["default"])(n,i+"-dir-row","row"===a),(0,u["default"])(n,i+"-dir-row-reverse","row-reverse"===a),(0,u["default"])(n,i+"-dir-column","column"===a),(0,u["default"])(n,i+"-dir-column-reverse","column-reverse"===a),(0,u["default"])(n,i+"-nowrap","nowrap"===e),(0,u["default"])(n,i+"-wrap","wrap"===e),(0,u["default"])(n,i+"-wrap-reverse","wrap-reverse"===e),(0,u["default"])(n,i+"-justify-start","start"===s),(0,u["default"])(n,i+"-justify-end","end"===s),(0,u["default"])(n,i+"-justify-center","center"===s),(0,u["default"])(n,i+"-justify-between","between"===s),(0,u["default"])(n,i+"-justify-around","around"===s),(0,u["default"])(n,i+"-align-top","top"===p||"start"===p),(0,u["default"])(n,i+"-align-middle","middle"===p||"center"===p),(0,u["default"])(n,i+"-align-bottom","bottom"===p||"end"===p),(0,u["default"])(n,i+"-align-baseline","baseline"===p),(0,u["default"])(n,i+"-align-stretch","stretch"===p),(0,u["default"])(n,i+"-align-content-start","start"===l),(0,u["default"])(n,i+"-align-content-end","end"===l),(0,u["default"])(n,i+"-align-content-center","center"===l),(0,u["default"])(n,i+"-align-content-between","between"===l),(0,u["default"])(n,i+"-align-content-around","around"===l),(0,u["default"])(n,i+"-align-content-stretch","stretch"===l),(0,u["default"])(n,c,c),n));return b["default"].createElement("div",(0,o["default"])({className:m,style:f},d,{__source:{fileName:k,lineNumber:42}}),r)},t}(b["default"].Component);t["default"]=v,v.defaultProps={prefixCls:"am-flexbox",align:"center"},n.exports=t["default"]},55:function(n,t,a){"use strict";function e(n){return n&&n.__esModule?n:{"default":n}}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var s=a(5),o=e(s),p=a(6),u=e(p),l=a(2),c=e(l),r=a(4),i=e(r),f=a(3),d=e(f),k="/Users/jiangkai/github/ant-design-mobile/components/flex/FlexItem.web.tsx",m=a(1),b=e(m),g=a(7),h=e(g),y=function(n,t){var a={};for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&t.indexOf(e)<0&&(a[e]=n[e]);if(null!=n&&"function"==typeof Object.getOwnPropertySymbols)for(var s=0,e=Object.getOwnPropertySymbols(n);s<e.length;s++)t.indexOf(e[s])<0&&(a[e[s]]=n[e[s]]);return a},v=function(n){function t(){return(0,c["default"])(this,t),(0,i["default"])(this,n.apply(this,arguments))}return(0,d["default"])(t,n),t.prototype.render=function(){var n,t=this.props,a=t.children,e=t.className,s=t.prefixCls,p=t.style,l=y(t,["children","className","prefixCls","style"]),c=(0,h["default"])((n={},(0,u["default"])(n,s+"-item",!0),(0,u["default"])(n,e,e),n));return b["default"].createElement("div",(0,o["default"])({className:c,style:p},l,{__source:{fileName:k,lineNumber:19}}),a)},t}(b["default"].Component);t["default"]=v,v.defaultProps={prefixCls:"am-flexbox"},n.exports=t["default"]},56:function(n,t,a){"use strict";function e(n){return n&&n.__esModule?n:{"default":n}}Object.defineProperty(t,"__esModule",{value:!0});var s=a(54),o=e(s),p=a(55),u=e(p);o["default"].Item=u["default"],t["default"]=o["default"],n.exports=t["default"]},57:function(n,t,a){"use strict";a(8),a(59)},59:function(n,t){},182:function(n,t,a){"use strict";var e=a(215);n.exports=function(n,t,a,s){var o=a?a.call(s,n,t):void 0;if(void 0!==o)return!!o;if(n===t)return!0;if("object"!=typeof n||null===n||"object"!=typeof t||null===t)return!1;var p=e(n),u=e(t),l=p.length;if(l!==u.length)return!1;s=s||null;for(var c=Object.prototype.hasOwnProperty.bind(t),r=0;r<l;r++){var i=p[r];if(!c(i))return!1;var f=n[i],d=t[i],k=a?a.call(s,f,d,i):void 0;if(k===!1||void 0===k&&f!==d)return!1}return!0}},193:function(n,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=function(n){return Object.keys(n).reduce(function(t,a){return"aria-"!==a.substr(0,5)&&"data-"!==a.substr(0,5)&&"role"!==a||(t[a]=n[a]),t},{})},n.exports=t["default"]},212:function(n,t){function a(n){return!!n&&"object"==typeof n}function e(n,t){var a=null==n?void 0:n[t];return p(a)?a:void 0}function s(n){return o(n)&&f.call(n)==u}function o(n){var t=typeof n;return!!n&&("object"==t||"function"==t)}function p(n){return null!=n&&(s(n)?d.test(r.call(n)):a(n)&&l.test(n))}var u="[object Function]",l=/^\[object .+?Constructor\]$/,c=Object.prototype,r=Function.prototype.toString,i=c.hasOwnProperty,f=c.toString,d=RegExp("^"+r.call(i).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");n.exports=e},213:function(n,t){function a(n){return s(n)&&k.call(n,"callee")&&(!b.call(n,"callee")||m.call(n)==r)}function e(n){return null!=n&&p(n.length)&&!o(n)}function s(n){return l(n)&&e(n)}function o(n){var t=u(n)?m.call(n):"";return t==i||t==f}function p(n){return"number"==typeof n&&n>-1&&n%1==0&&n<=c}function u(n){var t=typeof n;return!!n&&("object"==t||"function"==t)}function l(n){return!!n&&"object"==typeof n}var c=9007199254740991,r="[object Arguments]",i="[object Function]",f="[object GeneratorFunction]",d=Object.prototype,k=d.hasOwnProperty,m=d.toString,b=d.propertyIsEnumerable;n.exports=a},214:function(n,t){function a(n){return!!n&&"object"==typeof n}function e(n,t){var a=null==n?void 0:n[t];return u(a)?a:void 0}function s(n){return"number"==typeof n&&n>-1&&n%1==0&&n<=g}function o(n){return p(n)&&k.call(n)==c}function p(n){var t=typeof n;return!!n&&("object"==t||"function"==t)}function u(n){return null!=n&&(o(n)?m.test(f.call(n)):a(n)&&r.test(n))}var l="[object Array]",c="[object Function]",r=/^\[object .+?Constructor\]$/,i=Object.prototype,f=Function.prototype.toString,d=i.hasOwnProperty,k=i.toString,m=RegExp("^"+f.call(d).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),b=e(Array,"isArray"),g=9007199254740991,h=b||function(n){return a(n)&&s(n.length)&&k.call(n)==l};n.exports=h},215:function(n,t,a){function e(n){return function(t){return null==t?void 0:t[n]}}function s(n){return null!=n&&p(h(n))}function o(n,t){return n="number"==typeof n||d.test(n)?+n:-1,t=null==t?g:t,n>-1&&n%1==0&&n<t}function p(n){return"number"==typeof n&&n>-1&&n%1==0&&n<=g}function u(n){for(var t=c(n),a=t.length,e=a&&n.length,s=!!e&&p(e)&&(f(n)||i(n)),u=-1,l=[];++u<a;){var r=t[u];(s&&o(r,e)||m.call(n,r))&&l.push(r)}return l}function l(n){var t=typeof n;return!!n&&("object"==t||"function"==t)}function c(n){if(null==n)return[];l(n)||(n=Object(n));var t=n.length;t=t&&p(t)&&(f(n)||i(n))&&t||0;for(var a=n.constructor,e=-1,s="function"==typeof a&&a.prototype===n,u=Array(t),c=t>0;++e<t;)u[e]=e+"";for(var r in n)c&&o(r,t)||"constructor"==r&&(s||!m.call(n,r))||u.push(r);return u}var r=a(212),i=a(213),f=a(214),d=/^\d+$/,k=Object.prototype,m=k.hasOwnProperty,b=r(Object,"keys"),g=9007199254740991,h=e("length"),y=b?function(n){var t=null==n?void 0:n.constructor;return"function"==typeof t&&t.prototype===n||"function"!=typeof n&&s(n)?u(n):l(n)?b(n):[]}:u;n.exports=y},262:function(n,t,a){"use strict";function e(n){return n&&n.__esModule?n:{"default":n}}Object.defineProperty(t,"__esModule",{value:!0});var s=a(5),o=e(s),p=a(6),u=e(p),l=a(17),c=e(l),r=a(2),i=e(r),f=a(14),d=e(f),k=a(4),m=e(k),b=a(3),g=e(b),h=a(1),y=e(h),v=a(11),x=e(v),C=a(271),j=e(C),O=a(7),_=e(O),w=function(n){function t(n){(0,i["default"])(this,t);var a=(0,m["default"])(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,n));P.call(a);var e="checked"in n?n.checked:n.defaultChecked;return a.state={checked:e},a}return(0,g["default"])(t,n),(0,d["default"])(t,[{key:"componentWillReceiveProps",value:function(n){"checked"in n&&this.setState({checked:n.checked})}},{key:"shouldComponentUpdate",value:function(){for(var n=arguments.length,t=Array(n),a=0;a<n;a++)t[a]=arguments[a];return j["default"].shouldComponentUpdate.apply(this,t)}},{key:"render",value:function(){var n,t=this.props,a=t.prefixCls,e=t.className,s=t.style,p=t.name,l=t.type,r=t.disabled,i=t.readOnly,f=t.tabIndex,d=t.onClick,k=t.onFocus,m=t.onBlur,b=(0,c["default"])(t,["prefixCls","className","style","name","type","disabled","readOnly","tabIndex","onClick","onFocus","onBlur"]),g=Object.keys(b).reduce(function(n,t){return"aria-"!==t.substr(0,5)&&"data-"!==t.substr(0,5)&&"role"!==t||(n[t]=b[t]),n},{}),h=this.state.checked,v=(0,_["default"])(a,e,(n={},(0,u["default"])(n,a+"-checked",h),(0,u["default"])(n,a+"-disabled",r),n));return y["default"].createElement("span",{className:v,style:s},y["default"].createElement("input",(0,o["default"])({name:p,type:l,readOnly:i,disabled:r,tabIndex:f,className:a+"-input",checked:!!h,onClick:d,onFocus:k,onBlur:m,onChange:this.handleChange},g)),y["default"].createElement("span",{className:a+"-inner"}))}}]),t}(y["default"].Component);w.propTypes={prefixCls:x["default"].string,className:x["default"].string,style:x["default"].object,name:x["default"].string,type:x["default"].string,defaultChecked:x["default"].oneOfType([x["default"].number,x["default"].bool]),checked:x["default"].oneOfType([x["default"].number,x["default"].bool]),disabled:x["default"].bool,onFocus:x["default"].func,onBlur:x["default"].func,onChange:x["default"].func,onClick:x["default"].func,tabIndex:x["default"].string,readOnly:x["default"].bool},w.defaultProps={prefixCls:"rc-checkbox",className:"",style:{},type:"checkbox",defaultChecked:!1,onFocus:function(){},onBlur:function(){},onChange:function(){}};var P=function(){var n=this;this.handleChange=function(t){var a=n.props;a.disabled||("checked"in a||n.setState({checked:t.target.checked}),a.onChange({target:(0,o["default"])({},a,{checked:t.target.checked}),stopPropagation:function(){t.stopPropagation()},preventDefault:function(){t.preventDefault()}}))}};t["default"]=w,n.exports=t["default"]},263:function(n,t,a){"use strict";function e(n){return n&&n.__esModule?n:{"default":n}}Object.defineProperty(t,"__esModule",{value:!0});var s=a(262);Object.defineProperty(t,"default",{enumerable:!0,get:function(){return e(s)["default"]}}),n.exports=t["default"]},271:function(n,t,a){"use strict";function e(n,t,a){return!s(n.props,t)||!s(n.state,a)}var s=a(182),o={shouldComponentUpdate:function(n,t){return e(this,n,t)}};n.exports=o},306:function(n,t,a){"use strict";function e(n){return n&&n.__esModule?n:{"default":n}}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var s=a(5),o=e(s),p=a(6),u=e(p),l=a(2),c=e(l),r=a(4),i=e(r),f=a(3),d=e(f),k="/Users/jiangkai/github/ant-design-mobile/components/checkbox/Checkbox.web.tsx",m=a(1),b=e(m),g=a(263),h=e(g),y=a(60),v=e(y),x=a(7),C=e(x),j=function(n){function t(){return(0,c["default"])(this,t),(0,i["default"])(this,n.apply(this,arguments))}return(0,d["default"])(t,n),t.prototype.render=function(){var n,t=this.props,a=t.prefixCls,e=t.className,s=t.style,p=t.children,l=(0,C["default"])((n={},(0,u["default"])(n,e,!!e),(0,u["default"])(n,a+"-wrapper",!0),n)),c=b["default"].createElement("label",{className:l,style:s,__source:{fileName:k,lineNumber:12}},b["default"].createElement(h["default"],(0,o["default"])({},(0,v["default"])(this.props,["className","style"]),{__source:{fileName:k,lineNumber:13}})),p);return this.props.wrapLabel?c:b["default"].createElement(h["default"],(0,o["default"])({},this.props,{__source:{fileName:k,lineNumber:19}}))},t}(b["default"].Component);t["default"]=j,j.defaultProps={prefixCls:"am-checkbox",wrapLabel:!0},n.exports=t["default"]},307:function(n,t,a){"use strict";a(8),a(18),a(347)},347:function(n,t){},500:function(n,t,a){n.exports={content:[],meta:{order:0,title:{"zh-CN":"\u57fa\u672c","en-US":"Basic"},filename:"components/checkbox/demo/basic.md",id:"components-checkbox-demo-basic"},highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> <span class="token punctuation">{</span> List<span class="token punctuation">,</span> Checkbox<span class="token punctuation">,</span> Flex <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'antd-mobile\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> CheckboxItem <span class="token operator">=</span> Checkbox<span class="token punctuation">.</span>CheckboxItem<span class="token punctuation">;</span>\n<span class="token keyword">const</span> AgreeItem <span class="token operator">=</span> Checkbox<span class="token punctuation">.</span>AgreeItem<span class="token punctuation">;</span>\n\n<span class="token keyword">class</span> <span class="token class-name">Test</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  onChange <span class="token operator">=</span> <span class="token punctuation">(</span>val<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> data <span class="token operator">=</span> <span class="token punctuation">[</span>\n      <span class="token punctuation">{</span> value<span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">,</span> label<span class="token punctuation">:</span> <span class="token string">\'Ph.D.\'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n      <span class="token punctuation">{</span> value<span class="token punctuation">:</span> <span class="token number">1</span><span class="token punctuation">,</span> label<span class="token punctuation">:</span> <span class="token string">\'Bachelor\'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n      <span class="token punctuation">{</span> value<span class="token punctuation">:</span> <span class="token number">2</span><span class="token punctuation">,</span> label<span class="token punctuation">:</span> <span class="token string">\'college diploma\'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">]</span><span class="token punctuation">;</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>List</span> <span class="token attr-name">renderHeader</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token string">\'CheckboxItem demo\'</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n        <span class="token punctuation">{</span>data<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span>i <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">(</span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CheckboxItem</span> <span class="token attr-name">key</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>i<span class="token punctuation">.</span>value<span class="token punctuation">}</span></span> <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">onChange</span><span class="token punctuation">(</span>i<span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n            <span class="token punctuation">{</span>i<span class="token punctuation">.</span>label<span class="token punctuation">}</span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>CheckboxItem</span><span class="token punctuation">></span></span>\n        <span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">}</span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CheckboxItem</span> <span class="token attr-name">key</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>disabled<span class="token punctuation">"</span></span> <span class="token attr-name">data-seed</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>logId<span class="token punctuation">"</span></span> <span class="token attr-name">disabled</span> <span class="token attr-name">defaultChecked</span> <span class="token attr-name">multipleLine</span><span class="token punctuation">></span></span>\n          undergraduate<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>List.Item.Brief</span><span class="token punctuation">></span></span>Auxiliary text<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>List.Item.Brief</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>CheckboxItem</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>List</span><span class="token punctuation">></span></span>\n\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Flex</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Flex.Item</span><span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>AgreeItem</span> <span class="token attr-name">data-seed</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>logId<span class="token punctuation">"</span></span> <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>e <span class="token operator">=</span><span class="token operator">></span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'checkbox\'</span><span class="token punctuation">,</span> e<span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n            Agree <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span> e<span class="token punctuation">.</span><span class="token function">preventDefault</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">\'agree it\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>agreement<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>AgreeItem</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Flex.Item</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Flex</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Test</span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span> mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>'}],preview:function(){function n(n){return n&&n.__esModule?n:{"default":n}}function t(n,t){for(var a=Object.getOwnPropertyNames(t),e=0;e<a.length;e++){var s=a[e],o=Object.getOwnPropertyDescriptor(t,s);o&&o.configurable&&void 0===n[s]&&Object.defineProperty(n,s,o)}return n}function e(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}function s(n,t){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?n:t}function o(n,a){if("function"!=typeof a&&null!==a)throw new TypeError("Super expression must either be null or a function, not "+typeof a);n.prototype=Object.create(a&&a.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),a&&(Object.setPrototypeOf?Object.setPrototypeOf(n,a):t(n,a))}var p=a(1),u=(a(9),a(57),a(56)),l=n(u),c=(a(18),a(29)),r=n(c),i=(a(307),a(647)),f=n(i),d=f["default"].CheckboxItem,k=f["default"].AgreeItem,m=function(n){function t(){var a,o,p;e(this,t);for(var u=arguments.length,l=Array(u),c=0;c<u;c++)l[c]=arguments[c];return a=o=s(this,n.call.apply(n,[this].concat(l))),o.onChange=function(n){console.log(n)},p=a,s(o,p)}return o(t,n),t.prototype.render=function(){var n=this,t=[{value:0,label:"Ph.D."},{value:1,label:"Bachelor"},{value:2,label:"college diploma"}];return p.createElement("div",null,p.createElement(r["default"],{renderHeader:function(){return"CheckboxItem demo"}},t.map(function(t){return p.createElement(d,{key:t.value,onChange:function(){return n.onChange(t.value)}},t.label)}),p.createElement(d,{key:"disabled","data-seed":"logId",disabled:!0,defaultChecked:!0,multipleLine:!0},"undergraduate",p.createElement(r["default"].Item.Brief,null,"Auxiliary text"))),p.createElement(l["default"],null,p.createElement(l["default"].Item,null,p.createElement(k,{"data-seed":"logId",onChange:function(n){return console.log("checkbox",n)}},"Agree ",p.createElement("a",{onClick:function(n){n.preventDefault(),alert("agree it")}},"agreement")))))},t}(p.Component);return p.createElement(m,null)}}},645:function(n,t,a){"use strict";function e(n){return n&&n.__esModule?n:{"default":n}}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var s=a(5),o=e(s),p=a(6),u=e(p),l=a(2),c=e(l),r=a(4),i=e(r),f=a(3),d=e(f),k="/Users/jiangkai/github/ant-design-mobile/components/checkbox/AgreeItem.web.tsx",m=a(1),b=e(m),g=a(7),h=e(g),y=a(306),v=e(y),x=a(193),C=e(x),j=a(60),O=e(j),_=function(n){function t(){return(0,c["default"])(this,t),(0,i["default"])(this,n.apply(this,arguments))}return(0,d["default"])(t,n),t.prototype.render=function(){var n,t=this.props,a=t.prefixCls,e=t.style,s=t.className,p=(0,h["default"])((n={},(0,u["default"])(n,a+"-agree",!0),(0,u["default"])(n,s,s),n));return b["default"].createElement("div",(0,o["default"])({},(0,C["default"])(this.props),{className:p,style:e,__source:{fileName:k,lineNumber:13}}),b["default"].createElement(v["default"],(0,o["default"])({},(0,O["default"])(this.props,["style"]),{className:a+"-agree-label",__source:{fileName:k,lineNumber:14}})))},t}(b["default"].Component);t["default"]=_,_.defaultProps={prefixCls:"am-checkbox"},n.exports=t["default"]},646:function(n,t,a){"use strict";function e(n){return n&&n.__esModule?n:{"default":n}}function s(){}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var o=a(5),p=e(o),u=a(6),l=e(u),c=a(2),r=e(c),i=a(4),f=e(i),d=a(3),k=e(d),m="/Users/jiangkai/github/ant-design-mobile/components/checkbox/CheckboxItem.web.tsx",b=a(1),g=e(b),h=a(7),y=e(h),v=a(29),x=e(v),C=a(306),j=e(C),O=a(60),_=e(O),w=x["default"].Item,P=function(n){function t(){return(0,r["default"])(this,t),(0,f["default"])(this,n.apply(this,arguments))}return(0,k["default"])(t,n),t.prototype.render=function(){var n,t=this,a=this.props,e=a.prefixCls,o=a.listPrefixCls,u=a.className,c=a.children,r=a.disabled,i=a.checkboxProps,f=void 0===i?{}:i,d=(0,y["default"])((n={},(0,l["default"])(n,e+"-item",!0),(0,l["default"])(n,e+"-item-disabled",r===!0),(0,l["default"])(n,u,u),n)),k=(0,_["default"])(this.props,["listPrefixCls","onChange","disabled","checkboxProps"]);r?delete k.onClick:k.onClick=k.onClick||s;var b={};return["name","defaultChecked","checked","onChange","disabled"].forEach(function(n){n in t.props&&(b[n]=t.props[n])}),g["default"].createElement(w,(0,p["default"])({},k,{prefixCls:o,className:d,thumb:g["default"].createElement(j["default"],(0,p["default"])({},f,b,{__source:{fileName:m,lineNumber:30}})),__source:{fileName:m,lineNumber:30}}),c)},t}(g["default"].Component);t["default"]=P,P.defaultProps={prefixCls:"am-checkbox",listPrefixCls:"am-list"},n.exports=t["default"]},647:function(n,t,a){"use strict";function e(n){return n&&n.__esModule?n:{"default":n}}Object.defineProperty(t,"__esModule",{value:!0});var s=a(306),o=e(s),p=a(646),u=e(p),l=a(645),c=e(l);o["default"].CheckboxItem=u["default"],o["default"].AgreeItem=c["default"],t["default"]=o["default"],n.exports=t["default"]},704:function(n,t,a){n.exports={basic:a(500)}}});