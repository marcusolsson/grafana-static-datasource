/*! For license information please see module.js.LICENSE.txt */
define(["react","@grafana/data","emotion","@grafana/ui","@grafana/runtime"],(function(e,n,t,r,a){return function(e){var n={};function t(r){if(n[r])return n[r].exports;var a=n[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,t),a.l=!0,a.exports}return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var a in e)t.d(r,a,function(n){return e[n]}.bind(null,a));return r},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="/",t(t.s=5)}([function(n,t){n.exports=e},function(e,t){e.exports=n},function(e,n){e.exports=t},function(e,n){e.exports=r},function(e,n){e.exports=a},function(e,n,t){"use strict";t.r(n);var r=t(1),a=function(e,n){return(a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,n){e.__proto__=n}||function(e,n){for(var t in n)n.hasOwnProperty(t)&&(e[t]=n[t])})(e,n)};var o=function(){return(o=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var a in n=arguments[t])Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a]);return e}).apply(this,arguments)};function l(e,n,t,r){return new(t||(t=Promise))((function(a,o){function l(e){try{i(r.next(e))}catch(e){o(e)}}function u(e){try{i(r.throw(e))}catch(e){o(e)}}function i(e){var n;e.done?a(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(l,u)}i((r=r.apply(e,n||[])).next())}))}function u(e,n){var t,r,a,o,l={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return o={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function u(o){return function(u){return function(o){if(t)throw new TypeError("Generator is already executing.");for(;l;)try{if(t=1,r&&(a=2&o[0]?r.return:o[0]?r.throw||((a=r.return)&&a.call(r),0):r.next)&&!(a=a.call(r,o[1])).done)return a;switch(r=0,a&&(o=[2&o[0],a.value]),o[0]){case 0:case 1:a=o;break;case 4:return l.label++,{value:o[1],done:!1};case 5:l.label++,r=o[1],o=[0];continue;case 7:o=l.ops.pop(),l.trys.pop();continue;default:if(!(a=l.trys,(a=a.length>0&&a[a.length-1])||6!==o[0]&&2!==o[0])){l=0;continue}if(3===o[0]&&(!a||o[1]>a[0]&&o[1]<a[3])){l.label=o[1];break}if(6===o[0]&&l.label<a[1]){l.label=a[1],a=o;break}if(a&&l.label<a[2]){l.label=a[2],l.ops.push(o);break}a[2]&&l.ops.pop(),l.trys.pop();continue}o=n.call(e,l)}catch(e){o=[6,e],r=0}finally{t=a=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,u])}}}function i(e,n){var t="function"==typeof Symbol&&e[Symbol.iterator];if(!t)return e;var r,a,o=t.call(e),l=[];try{for(;(void 0===n||n-- >0)&&!(r=o.next()).done;)l.push(r.value)}catch(e){a={error:e}}finally{try{r&&!r.done&&(t=o.return)&&t.call(o)}finally{if(a)throw a.error}}return l}function c(e,n){return Object.defineProperty?Object.defineProperty(e,"raw",{value:n}):e.raw=n,e}var s,f,p,d=t(4),m=function(e){function n(n){return e.call(this,n)||this}return function(e,n){function t(){this.constructor=e}a(e,n),e.prototype=null===n?Object.create(n):(t.prototype=n.prototype,new t)}(n,e),n.prototype.query=function(e){return l(this,void 0,Promise,(function(){var n;return u(this,(function(t){return n=function(e){for(var n=0;n<e.fields.length;n++){var t=e.fields[n];t.type===r.FieldType.string&&(t.values=new r.ArrayVector(t.values.toArray().map((function(e){return Object(d.getTemplateSrv)().replace(e,{},"csv")})))),e.fields[n]=t}return e},[2,{data:e.targets.filter((function(e){return!e.hide})).filter((function(e){return e.frame})).map((function(e){return Object(r.toDataFrame)(e.frame)})).map(n)}]}))}))},n.prototype.testDatasource=function(){return l(this,void 0,void 0,(function(){return u(this,(function(e){return[2,{status:"success",message:"Success"}]}))}))},n}(r.DataSourceApi),v=t(0),g=t.n(v),h=t(3),y=t(2),b=function(e){var n=e.children;return g.a.createElement("div",{className:"gf-form"},n)},x=function(e){var n=e.children;return g.a.createElement("div",{className:"gf-form-inline"},n)},w=function(e){var n=e.children;return g.a.createElement("div",null,n)},E=function(e){var n=e.text,t=e.width,r=void 0===t?8:t,a=e.keyword,o=void 0!==a&&a,l="width-"+r;return g.a.createElement("span",{className:Object(y.cx)("gf-form-label",l,{"query-keyword":o})},n)},O=function(e){var n=e.icon,t=e.text,r=e.onClick,a=e.expand,o=void 0!==a&&a;return g.a.createElement("div",{className:Object(y.cx)({"gf-form":!0,"gf-form--grow":o})},g.a.createElement("a",{className:Object(y.cx)({"gf-form-label":!0,"gf-form-label--grow":o}),onClick:r,style:{justifyContent:"flex-start"}},n?g.a.createElement(h.Icon,{name:n}):null,n&&t?g.a.createElement("span",null," "):null,t))},k=function(e){var n=e.level;return g.a.createElement(b,null,g.a.createElement("span",{className:"width-"+n}))},j=function(e){var n=e.onChange,t=e.value,r=e.onValidate,a=Object(h.useTheme)(),o=i(Object(v.useState)(null===t),2),l=o[0],u=o[1],d=i(Object(v.useState)(t),2),m=d[0],b=d[1],x=i(Object(v.useState)(!r||r(null!=t?t:null)),2),w=x[0],E=x[1];if(r){var O=r(null!=t?t:null);O!==w&&E(O)}var k={root:Object(y.css)(s||(s=c(["\n      width: 128px;\n      display: flex;\n\n      background-color: ",";\n      border: 1px solid ",";\n      padding: 0 ",";\n\n      border-radius: 4px;\n      height: 100%;\n      min-height: 32px;\n      align-items: center;\n      margin-right: 4px;\n\n      &:focus-within {\n        outline: 2px dotted transparent;\n        outline-offset: 2px;\n        box-shadow: 0 0 0 2px ",", 0 0 0px 4px ",";\n        transition: all 0.2s cubic-bezier(0.19, 1, 0.22, 1);\n      }\n\n      & > svg {\n        color: transparent;\n      }\n\n      &:hover svg {\n        color: ",";\n      }\n    "],["\n      width: 128px;\n      display: flex;\n\n      background-color: ",";\n      border: 1px solid ",";\n      padding: 0 ",";\n\n      border-radius: 4px;\n      height: 100%;\n      min-height: 32px;\n      align-items: center;\n      margin-right: 4px;\n\n      &:focus-within {\n        outline: 2px dotted transparent;\n        outline-offset: 2px;\n        box-shadow: 0 0 0 2px ",", 0 0 0px 4px ",";\n        transition: all 0.2s cubic-bezier(0.19, 1, 0.22, 1);\n      }\n\n      & > svg {\n        color: transparent;\n      }\n\n      &:hover svg {\n        color: ",";\n      }\n    "])),l?a.colors.formInputBgDisabled:a.colors.formInputBg,w?a.colors.formInputBorder:a.colors.formInputBorderInvalid,a.spacing.sm,a.colors.bodyBg,a.colors.formFocusOutline,a.colors.textWeak),input:Object(y.css)(f||(f=c(["\n      font-size: ",";\n      background-color: transparent;\n      min-width: 0;\n      &:focus {\n        outline: none;\n      }\n      &:disabled {\n        color: ",";\n        background-color: transparent;\n      }\n    "],["\n      font-size: ",";\n      background-color: transparent;\n      min-width: 0;\n      &:focus {\n        outline: none;\n      }\n      &:disabled {\n        color: ",";\n        background-color: transparent;\n      }\n    "])),a.typography.size.md,a.colors.textFaint),button:Object(y.css)(p||(p=c(["\n      display: inline-block;\n      position: relative;\n      right: 0px;\n      border: 0;\n      color: transparent;\n\n      &:hover {\n        cursor: pointer;\n      }\n    "],["\n      display: inline-block;\n      position: relative;\n      right: 0px;\n      border: 0;\n      color: transparent;\n\n      &:hover {\n        cursor: pointer;\n      }\n    "])))};return g.a.createElement("div",{className:k.root},g.a.createElement("input",{disabled:l,className:k.input,onChange:function(e){r&&E(r(e.target.value)),n&&(b(e.target.value),n(e.target.value))},value:l?"null":null!=t?t:""}),g.a.createElement("div",{className:k.button,onClick:function(){u(!l),n&&(l?(n(null!=m?m:null),r&&E(r(null!=m?m:null))):(n(null),E(!0)))}},g.a.createElement(h.Icon,{name:l?"eye-slash":"eye"})))},S=function(e){var n=e.label,t=e.children,r=i(Object(v.useState)(!0),2),a=r[0],o=r[1];return g.a.createElement(g.a.Fragment,null,g.a.createElement(x,null,g.a.createElement(O,{onClick:function(){o(!a)},icon:a?"angle-down":"angle-right",text:n,expand:!0})),a?t:null)};function T(e){return function(n){var t=i(Object(v.useState)(!1),2),r=t[0],a=t[1];return g.a.createElement("div",{onMouseEnter:function(){return a(!0)},onMouseLeave:function(){return a(!1)}},g.a.createElement(x,null,g.a.createElement(k,{level:2}),g.a.createElement(e,o({},n)),r?g.a.createElement(g.a.Fragment,null,g.a.createElement(O,{icon:"plus",onClick:n.onAdd}),g.a.createElement(O,{icon:"trash-alt",onClick:n.onRemove})):null))}}var C,F,N=[r.FieldType.boolean,r.FieldType.number,r.FieldType.other,r.FieldType.string,r.FieldType.time,r.FieldType.trace],_=T((function(e){var n=e.values,t=e.onValueChange,r=e.schema;return g.a.createElement(b,null,n.map((function(e,n){return g.a.createElement(j,{key:n,onValidate:function(e){return P(e,r[n]).ok},onChange:function(e){t(e,n)},value:e})})))})),P=function(e,n){if(null===e)return{ok:!0,value:e};switch(n){case r.FieldType.number:var t=Number(e);return""===e||isNaN(t)?{ok:!1,error:"Invalid number"}:{ok:!0,value:t};case r.FieldType.time:var a=Number(e);return""===e||isNaN(a)?{ok:!1,error:"Invalid timestamp"}:{ok:!0,value:a};case r.FieldType.boolean:var o=!!["1","true","yes"].find((function(n){return n===e})),l=!!["0","false","no"].find((function(n){return n===e}));return o||l?{ok:!0,value:o}:{ok:!1,error:"Invalid boolean"};default:return{ok:!0,value:e.toString()}}},I=T((function(e){var n=e.onNameChange,t=e.name,r=e.onTypeChange,a=e.type,o=Object(h.useTheme)();return g.a.createElement(b,null,g.a.createElement(h.Select,{className:Object(y.cx)("width-8",Object(y.css)(C||(C=c(["\n            margin-right: ",";\n          "],["\n            margin-right: ",";\n          "])),o.spacing.xs)),onChange:function(e){r(e.value)},value:a,options:N.map((function(e){return{label:e,value:e}}))}),g.a.createElement(h.Input,{className:Object(y.css)(F||(F=c(["\n          margin-right: ",";\n        "],["\n          margin-right: ",";\n        "])),o.spacing.xs),onChange:function(e){n(e.currentTarget.value)},value:t}))})),A=function(e){var n=new r.MutableDataFrame({name:e.name,fields:e.fields.map((function(e){return{name:e.name,type:e.type}}))});return e.rows.forEach((function(e){return n.appendRow(e.map((function(e,t){var r=P(e,n.fields[t].type);return r.ok?r.value:null})))})),Object(r.toDataFrameDTO)(n)},D=function(e){var n,t;if(0===e.fields.length)return{name:e.name,fields:[],rows:[]};var a=e.fields.map((function(e){var n;return{name:e.name,type:null!==(n=e.type)&&void 0!==n?n:r.FieldType.string}})),o=Array.from({length:null!==(t=null===(n=e.fields[0].values)||void 0===n?void 0:n.length)&&void 0!==t?t:0}).map((function(n,t){return e.fields.map((function(e){var n,r;return null!==(r=null===(n=e.values[t])||void 0===n?void 0:n.toString())&&void 0!==r?r:null}))}));return{name:e.name,fields:a,rows:o}};t.d(n,"plugin",(function(){return M}));var M=new r.DataSourcePlugin(m).setQueryEditor((function(e){var n,t=e.onChange,a=e.onRunQuery,l=e.query,u=null!==(n=l.frame)&&void 0!==n?n:{fields:[]},c=i(Object(v.useState)(D(u)),2),s=c[0],f=c[1],p=i(Object(v.useState)([]),2),d=p[0],m=p[1],y=function(e){f(e),m(e.fields.map((function(e){return e.type}))),x(e)},x=function(e){var n=A(e);t(o(o({},l),{frame:n})),a()},j=function(e){s.fields.splice(e+1,0,{name:"",type:r.FieldType.string}),s.rows.forEach((function(n){n.splice(e+1,0,"")})),y(s)},T=function(e){var n=Array.from({length:s.fields.length}).map((function(e,n){switch(s.fields[n].type){case"number":return"0";case"time":return Date.now().valueOf().toString();case"boolean":return"false"}return""}));s.rows.splice(e+1,0,n),y(s)};return g.a.createElement(g.a.Fragment,null,g.a.createElement(w,null,g.a.createElement(b,null,g.a.createElement(E,{width:4,text:"Name",keyword:!0}),g.a.createElement(h.Input,{className:"width-12",onChange:function(e){return n=e.currentTarget.value,s.name=n,void y(s);var n},value:s.name})),g.a.createElement(S,{label:"Schema"},s.fields.map((function(e,n){return g.a.createElement(I,{key:n,name:e.name,type:e.type,onNameChange:function(e){return function(e,n){s.fields[n].name=e,y(s)}(e,n)},onTypeChange:function(e){return function(e,n){s.fields[n].type=e,y(s)}(e,n)},onAdd:function(){return j(n)},onRemove:function(){return e=n,s.fields.splice(e,1),s.rows.forEach((function(n){n.splice(e,1)})),0===s.fields.length&&(s.rows=[]),void y(s);var e}})})),0===s.fields.length?g.a.createElement(b,null,g.a.createElement(k,{level:2}),g.a.createElement(O,{text:"Add a field",icon:"plus",onClick:function(){return j(0)}})):null),g.a.createElement(S,{label:"Values"},s.fields.length>0?g.a.createElement(g.a.Fragment,null,g.a.createElement(b,null,g.a.createElement(k,{level:2}),s.fields.map((function(e,n){return g.a.createElement(E,{key:n,text:e.name||"<no name>",keyword:!0})}))),s.rows.map((function(e,n){return g.a.createElement(_,{key:n,schema:d,values:e,onValueChange:function(e,t){!function(e,n,t){s.rows[n][t]=e,y(s)}(e,n,t)},onAdd:function(){return T(n)},onRemove:function(){return e=n,s.rows.splice(e,1),void y(s);var e}})})),0===s.rows.length?g.a.createElement(b,null,g.a.createElement(k,{level:2}),g.a.createElement(O,{text:"Add a row",icon:"plus",onClick:function(){return T(0)}})):null):null)))}))}])}));
//# sourceMappingURL=module.js.map