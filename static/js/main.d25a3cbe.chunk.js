(this["webpackJsonpcodix-test-task"]=this["webpackJsonpcodix-test-task"]||[]).push([[0],[,,,,,,function(e,t,a){e.exports={CarsList:"cars-list_CarsList__3P1Xp",Header:"cars-list_Header__2M5a-",HeaderCell:"cars-list_HeaderCell__2GmoN"}},function(e,t,a){e.exports={CarPreview:"car-row_CarPreview__29e63",Button:"car-row_Button__1Ip0I",HoverButton:"car-row_HoverButton__a4tuH",Description:"car-row_Description__1Ypk8",CarRow:"car-row_CarRow__3amtp",Cell:"car-row_Cell__1aLTB",Price:"car-row_Price__3rwIc"}},function(e,t,a){e.exports={CarPreview:"car-preview_CarPreview__3PbjJ",Button:"car-preview_Button__3chUC",HoverButton:"car-preview_HoverButton__1D6lZ",Description:"car-preview_Description__2BNO0"}},function(e,t,a){e.exports={CarPreview:"car-card_CarPreview__3X2JV",Button:"car-card_Button__2JHXA",HoverButton:"car-card_HoverButton__1PfRS",Description:"car-card_Description__3ob2X",CarCard:"car-card_CarCard__1sN9L",Row:"car-card_Row__1r6-z",Status:"car-card_Status__52g9p",Actions:"car-card_Actions__2fTIg",Price:"car-card_Price__2u7vB"}},function(e,t,a){e.exports={Dropdown:"dropdown_Dropdown__2taTl",Placeholder:"dropdown_Placeholder__2qwOC",focus:"dropdown_focus__3RKs8",block:"dropdown_block__32qmn",Drop:"dropdown_Drop__STsXY",Indicator:"dropdown_Indicator__1e7E5",Hitarea:"dropdown_Hitarea__17dy_"}},,,,,function(e,t,a){e.exports={Template:"basic_Template__3LDUd",Header:"basic_Header__3f3ZU",Footer:"basic_Footer__3c5sL",Content:"basic_Content__31Afn"}},,,,function(e,t,a){e.exports={ColorSelect:"color-select_ColorSelect__3G1px",Item:"color-select_Item__1qRzm",selected:"color-select_selected__Zc_I3"}},function(e,t,a){e.exports={Button:"button_Button__2SbHZ",Icon:"button_Icon__2INXn",block:"button_block__3XJ8D"}},function(e,t,a){e.exports={Footer:"footer_Footer__1GmG5"}},,,,,function(e,t,a){e.exports={CarsList:"index_CarsList__QZNja",Title:"index_Title__2Iek9"}},function(e,t,a){e.exports={Color:"color_Color__DsVsm",outlined:"color_outlined__2y3bi"}},function(e,t,a){e.exports={H1:"heading_H1__1kJTt",H2:"heading_H2__in9XW"}},function(e,t,a){e.exports={Input:"input_Input__2XoXF",Placeholder:"input_Placeholder__AP9iT",focus:"input_focus__2TBO7",block:"input_block__tiM8m"}},function(e,t,a){e.exports={DropdownList:"dropdown-list_DropdownList__CjzP9",Item:"dropdown-list_Item__39nRb"}},function(e,t,a){e.exports={Icon:"icon_Icon__9mWfg"}},function(e,t,a){e.exports={Header:"header_Header__33HDv",Logo:"header_Logo__3ZAt1"}},,,,function(e,t,a){e.exports={Price:"price_Price__Jr8x3"}},function(e,t,a){e.exports={Empty:"empty_Empty__12fLv"}},,function(e,t,a){e.exports={Label:"label_Label__EEroG"}},function(e,t,a){e.exports=a.p+"static/media/DUCK.f2b1e5e7.png"},function(e,t,a){e.exports={Logo:"logo_Logo__33pLU"}},,function(e,t,a){e.exports=a(56)},,,,,function(e,t,a){},,,,,,,,function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(16),o=a.n(c),l=(a(48),a(14)),i=a(11),s=a(35),u=a(22),m=a(2),d=a(12),v=a.n(d),f=a(18),p=function(e){var t=e.baseUrl,a=void 0===t?"":t,n=e.headers,r=void 0===n?{}:n,c=e.options,o=void 0===c?{}:c;return function(){var e=Object(f.a)(v.a.mark((function e(t){var n,c,l,i,s,u,d,f,p,_;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.method,c=t.path,l=t.headers,i=void 0===l?{}:l,s=t.body,u=t.options,d=void 0===u?{}:u,f=Object(m.a)(Object(m.a)(Object(m.a)({method:n,headers:Object(m.a)(Object(m.a)({},i),r)},d),o),{},{body:s}),e.next=4,fetch(a+c,f);case 4:if(!((p=e.sent).status>=200&&p.status<=299)){e.next=11;break}return e.next=8,p.json();case 8:return e.abrupt("return",e.sent);case 11:return e.next=13,p.json();case 13:throw _=e.sent,Error(_.message);case 15:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}({baseUrl:"https://gist.githubusercontent.com/alpatovdanila"}),_=function(e){return e.map((function(e){return Object(m.a)(Object(m.a)({},e),{},{id:"".concat(e.id),status:"pednding"===e.status?"pending":e.status})}))},b=a(42),E=function(e){return{type:"@cars/setFetching",payload:{fetching:e}}},h=Object(i.c)({cars:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{items:[],fetching:!1},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"@cars/add":return Object(m.a)(Object(m.a)({},e),{},{items:[Object(m.a)({id:Object(b.a)()},t.payload.car)].concat(Object(u.a)(e.items))});case"@cars/remove":return Object(m.a)(Object(m.a)({},e),{},{items:e.items.filter((function(e){return e!==t.payload.car}))});case"@cars/receive":return Object(m.a)(Object(m.a)({},e),{},{items:[].concat(Object(u.a)(t.payload.cars),Object(u.a)(e.items))});case"@cars/setFetching":return Object(m.a)(Object(m.a)({},e),{},{fetching:t.payload.fetching});default:return e}}}),N=Object(i.d)(h,Object(i.a)(s.a)),O=a(26),g=a.n(O),j=a(6),C=a.n(j),w=a(5),y=function(e){var t=function(){var e=Object(n.useState)(document.documentElement.clientWidth),t=Object(w.a)(e,2),a=t[0],r=t[1];return Object(n.useEffect)((function(){var e=function(){return r(document.documentElement.clientWidth)};return window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}}),[]),a}();return Object(n.useMemo)((function(){return e<t}),[t,e])},k=a(4),x=a(3),H=a(27),L=a.n(H),P=a(1),I=a.n(P),D=function(e){var t=e.color,a=e.outlined,n=void 0!==a&&a,c=e.className,o=e.style,l=Object(x.a)(e,["color","outlined","className","style"]),i=n||"white"===t||"#FFFFFF"===t.toUpperCase()||"#FFF"===t.toUpperCase();return r.a.createElement("div",Object.assign({"aria-label":"Color described as ".concat(t),className:I()(L.a.Color,Object(k.a)({},L.a.outlined,i),c),style:Object(m.a)({backgroundColor:t},o)},l))},B=a(7),F=a.n(B),R=a(8),S=a.n(R),T=a(36),z=a.n(T),A=function(e){var t=e.price;return r.a.createElement("span",{className:z.a.Price},t.toLocaleString("ru-RU")," \u0440\u0443\u0431.")},U={pending:"\u041e\u0436\u0438\u0434\u0430\u0435\u0442\u0441\u044f",in_stock:"\u0412 \u043d\u0430\u043b\u0438\u0447\u0438\u0438",out_of_stock:"\u041d\u0435\u0442 \u0432 \u043d\u0430\u043b\u0438\u0447\u0438\u0438"},X=function(e){return U[e]||e},J=function(e){var t=e.car,a=e.onDelete;return r.a.createElement("div",{className:I()(S.a.CarPreview,F.a.CarRow)},r.a.createElement("div",{className:F.a.Cell},t.title,!!t.description.trim()&&r.a.createElement("div",{className:S.a.Description},t.description)),r.a.createElement("div",{className:F.a.Cell},r.a.createElement(D,{color:t.color})),r.a.createElement("div",{className:I()(F.a.Cell,F.a.Price)},r.a.createElement(A,{price:t.price})),r.a.createElement("div",{className:F.a.Cell},t.year),r.a.createElement("div",{className:F.a.Cell},X(t.status)),r.a.createElement("div",{className:F.a.Cell},r.a.createElement("button",{className:S.a.HoverButton,onClick:a},"\u0423\u0434\u0430\u043b\u0438\u0442\u044c")))},W=a(9),Z=a.n(W),G=function(e){var t=e.car,a=e.onDelete;return r.a.createElement("div",{className:I()(S.a.CarPreview,Z.a.CarCard)},r.a.createElement("div",{className:I()("row",Z.a.Row)},r.a.createElement("div",{className:"col"},t.title),r.a.createElement("div",{className:"col"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-auto"},r.a.createElement(D,{color:t.color})),r.a.createElement("div",{className:I()("col",Z.a.Price)},r.a.createElement(A,{price:t.price}))))),t.description.trim()&&r.a.createElement("div",{className:I()("row",Z.a.Row)},r.a.createElement("div",{className:"col"},r.a.createElement("div",{className:S.a.Description},t.description))),r.a.createElement("div",{className:I()("row","align-items-center",Z.a.Row)},r.a.createElement("div",{className:"col"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-auto"},t.year),r.a.createElement("div",{className:I()("col",Z.a.Status)},X(t.status)))),r.a.createElement("div",{className:I()("col",Z.a.Actions)},r.a.createElement("button",{className:S.a.Button,onClick:a},"\u0423\u0434\u0430\u043b\u0438\u0442\u044c"))))},M=a(37),q=a.n(M),K=function(e){var t=e.children,a=e.className,n=Object(x.a)(e,["children","className"]);return r.a.createElement("div",Object.assign({className:I()(q.a.Empty,a)},n),t)},Q=function(e){var t=e.cars,a=e.onCarDelete,n=e.fetching,c=void 0!==n&&n,o=y(699),l=o?J:G;return c?r.a.createElement(K,null,"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430..."):t.length?r.a.createElement("div",{className:C.a.CarsList},o&&r.a.createElement("div",{className:C.a.Header},r.a.createElement("div",{className:C.a.HeaderCell},"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435"),r.a.createElement("div",{className:C.a.HeaderCell},"\u0413\u043e\u0434"),r.a.createElement("div",{className:C.a.HeaderCell},"\u0426\u0432\u0435\u0442"),r.a.createElement("div",{className:C.a.HeaderCell},"\u0421\u0442\u0430\u0442\u0443\u0441"),r.a.createElement("div",{className:C.a.HeaderCell},"\u0426\u0435\u043d\u0430"),r.a.createElement("div",{className:C.a.HeaderCell})),t.map((function(e){return r.a.createElement(l,{car:e,onDelete:function(){return a(e)},key:e.id})}))):r.a.createElement(K,null,"\u0417\u0434\u0435\u0441\u044c \u043d\u0438\u0447\u0435\u0433\u043e \u043d\u0435\u0442")},Y=a(28),V=a.n(Y),$=function(e){var t=e.children,a=e.className,n=Object(x.a)(e,["children","className"]);return r.a.createElement("h1",Object.assign({className:I()(V.a.H1,a)},n),t)},ee=function(e){var t=e.children,a=e.className,n=Object(x.a)(e,["children","className"]);return r.a.createElement("h2",Object.assign({className:I()(V.a.H2,a)},n),t)},te=a(29),ae=a.n(te),ne=function(e){var t=e.block,a=void 0!==t&&t,n=e.className,c=e.onChange,o=Object(x.a)(e,["block","className","onChange"]);return r.a.createElement("input",Object.assign({className:I()(ae.a.Input,Object(k.a)({},ae.a.block,a),n),onChange:function(e){return c(e.target.value)}},o))},re=function(e){var t=e.inputFilter,a=void 0===t?function(e){return e}:t,c=e.changeFilter,o=void 0===c?function(e){return e}:c,l=e.value,i=e.onChange,s=Object(x.a)(e,["inputFilter","changeFilter","value","onChange"]),u=Object(n.useState)(l),m=Object(w.a)(u,2),d=m[0],v=m[1],f=Object(n.useState)(l),p=Object(w.a)(f,2),_=p[0],b=p[1];return Object(n.useEffect)((function(){b(a(d))}),[d]),Object(n.useEffect)((function(){i(_)}),[_]),Object(n.useEffect)((function(){v(l)}),[l]),r.a.createElement(ne,Object.assign({},s,{value:_,onChange:v,onBlur:function(){b(o(d))}}))},ce=a(19),oe=a.n(ce),le=function(e){var t=e.colors,a=e.activeColor,n=void 0===a?null:a,c=e.onChange;return r.a.createElement("div",{className:oe.a.ColorSelect},t.map((function(e,t){return r.a.createElement("div",{key:e,onClick:function(){return c(e)},className:I()(oe.a.Item,Object(k.a)({},oe.a.selected,e===n))},r.a.createElement(D,{color:e}))})))},ie=a(10),se=a.n(ie),ue=a(30),me=a.n(ue),de=function(e){var t=e.items,a=e.onItemClick;return r.a.createElement("div",{className:me.a.DropdownList},t.map((function(e){return r.a.createElement("div",{onClick:function(){return a(e)},className:me.a.Item,key:e.value},e.label)})))},ve=a(31),fe=a.n(ve);function pe(){return(pe=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function _e(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var be=r.a.createElement("path",{d:"M7 22L17 12L7 2",strokeLinecap:"round",strokeLinejoin:"round"}),Ee=function(e){var t=e.svgRef,a=e.title,n=_e(e,["svgRef","title"]);return r.a.createElement("svg",pe({width:24,height:24,viewBox:"0 0 24 24",fill:"none",ref:t},n),a?r.a.createElement("title",null,a):null,be)},he=r.a.forwardRef((function(e,t){return r.a.createElement(Ee,pe({svgRef:t},e))}));a.p;function Ne(){return(Ne=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function Oe(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var ge,je=r.a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12 17L1 6H23L12 17Z",fill:"currentColor"}),Ce=function(e){var t=e.svgRef,a=e.title,n=Oe(e,["svgRef","title"]);return r.a.createElement("svg",Ne({width:24,height:24,viewBox:"0 0 24 24",fill:"none",ref:t},n),a?r.a.createElement("title",null,a):null,je)},we=r.a.forwardRef((function(e,t){return r.a.createElement(Ce,Ne({svgRef:t},e))})),ye=(a.p,ge=he,function(e){var t=e.size,a=void 0===t?24:t,n=e.color,c=void 0===n?"currentColor":n,o=e.strokeWidth,l=void 0===o?2:o,i=Object(x.a)(e,["size","color","strokeWidth"]);return r.a.createElement(ge,Object.assign({width:a,height:a,stroke:c,strokeWidth:l,className:fe.a.Icon},i))}),ke=function(e){return function(t){var a=t.size,n=void 0===a?24:a,c=t.color,o=void 0===c?"currentColor":c,l=Object(x.a)(t,["size","color"]);return r.a.createElement(e,Object.assign({width:n,height:n,fill:o,className:fe.a.icon},l))}}(we),xe=a(58),He=function(e){var t,a=e.value,c=e.options,o=e.placeholder,l=e.block,i=e.onChange,s=Object(n.useState)(!1),u=Object(w.a)(s,2),m=u[0],d=u[1],v=Object(n.useRef)(null),f=c.find((function(e){return e.value===a}))||null;return Object(xe.a)(v,(function(){return d(!1)})),r.a.createElement("div",{className:I()(se.a.Dropdown,(t={},Object(k.a)(t,se.a.focus,m),Object(k.a)(t,se.a.block,l),t)),ref:v},r.a.createElement("div",{className:se.a.Hitarea,onClick:function(){return d(!m)}},!f&&r.a.createElement("div",{className:se.a.Placeholder},o),!!f&&f.label,r.a.createElement("div",{className:se.a.Indicator},r.a.createElement(ke,{size:12}))),r.a.createElement("div",{className:se.a.Drop},r.a.createElement(de,{items:c,onItemClick:function(e){i(e.value),d(!1)}})))},Le=a(20),Pe=a.n(Le),Ie=function(e){var t=e.block,a=void 0!==t&&t,n=e.className,c=e.children,o=e.icon,l=Object(x.a)(e,["block","className","children","icon"]);return r.a.createElement("button",Object.assign({className:I()(Pe.a.Button,Object(k.a)({},Pe.a.block,a),n)},l),c,o&&r.a.createElement("div",{className:Pe.a.Icon},o))},De=function(e){var t=e.min,a=e.max,n=e.value,c=e.onChange,o=e.maxLength,l=Object(x.a)(e,["min","max","value","onChange","maxLength"]),i=function(e){return parseInt(e.replace(/\D/g,""),10)};return r.a.createElement(re,Object.assign({},l,{value:"".concat(n),onChange:function(e){return c(isNaN(i(e))?null:i(e))},inputFilter:function(e){var t=i(e);return isNaN(t)?"":o?"".concat(t).slice(0,o):"".concat(t)},changeFilter:function(e){var n=i(e);return isNaN(n)?"":"".concat(t&&n<t?t:a&&n>a?a:n)}}))},Be=a(39),Fe=a.n(Be),Re=function(e){var t=e.children,a=e.className,n=Object(x.a)(e,["children","className"]);return r.a.createElement("div",Object.assign({className:I()(Fe.a.Label,a)},n),t)},Se={color:null,title:"",price:null,year:null,status:"",description:""},Te=Object.entries(U).map((function(e){var t=Object(w.a)(e,2);return{value:t[0],label:t[1]}})),ze=function(e){var t,a=e.onSubmit,c=Object(n.useState)(Se),o=Object(w.a)(c,2),l=o[0],i=o[1],s=(t=l).color&&t.price&&t.status&&t.title&&t.year,u=function(e){return i(Object(m.a)(Object(m.a)({},l),e))};return r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),s&&(a(l),i(Se))}},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-12 col-md-4 mb-4 order-1"},r.a.createElement(ne,{block:!0,placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",value:l.title,onChange:function(e){return u({title:e})}})),r.a.createElement("div",{className:"col-6 col-md-4 order-2 order-md-3"},r.a.createElement(De,{placeholder:"\u0426\u0435\u043d\u0430 \u0432 \u0440\u0443\u0431\u043b\u044f\u0445",value:l.price,min:0,max:1e9,maxLength:10,block:!0,onChange:function(e){return u({price:e})}})),r.a.createElement("div",{className:"col-6 col-md-4 mb-4 order-3 order-md-2"},r.a.createElement(De,{placeholder:"\u0413\u043e\u0434 \u0432\u044b\u043f\u0443\u0441\u043a\u0430",block:!0,min:1900,maxLength:4,max:+(new Date).getFullYear(),value:l.year,onChange:function(e){return u({year:e})}})),r.a.createElement("div",{className:"col-12 mb-3 order-4"},r.a.createElement(ne,{placeholder:"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435",block:!0,value:l.description,onChange:function(e){return u({description:e})}})),r.a.createElement("div",{className:"col-12 col-md-4 mb-4 order-5"},r.a.createElement(Re,{className:"mb-1"},"\u0426\u0432\u0435\u0442"),r.a.createElement(le,{colors:["#ffffff","#000000","#cbcbcc","#d74345","#88c504"],activeColor:l.color,onChange:function(e){return u({color:e})}})),r.a.createElement("div",{className:"col-6 col-md-4 order-6"},r.a.createElement(He,{placeholder:"\u0421\u0442\u0430\u0442\u0443\u0441 \u043d\u0430\u043b\u0438\u0447\u0438\u044f",options:Te,value:l.status,onChange:function(e){return u({status:e})}})),r.a.createElement("div",{className:"col-6 col-md-4 order-7"},r.a.createElement(Ie,{type:"submit",icon:r.a.createElement(ye,{size:8,strokeWidth:6}),block:!0,disabled:!s},"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c"))))},Ae=a(32),Ue=a.n(Ae),Xe=a(40),Je=a.n(Xe),We=a(41),Ze=a.n(We),Ge=function(){return r.a.createElement("img",{src:Je.a,className:Ze.a.Logo,alt:"Quack!"})},Me=function(){return r.a.createElement("header",{className:Ue.a.Header},r.a.createElement("div",{className:Ue.a.Logo},r.a.createElement(Ge,null)))},qe=a(21),Ke=a.n(qe),Qe=function(){return r.a.createElement("footer",{className:Ke.a.Footer},r.a.createElement("div",{className:Ke.a.Copyright},"\xa9 2020 CAPTAIN QUACK"),r.a.createElement("div",{className:Ke.a.Slogan},"\u0414\u0435\u0441\u043d\u0438\u0446\u0430 \u0442\u044b\u0441\u044f\u0447\u0435\u043b\u0435\u0442\u0438\u044f \u0438 \u043c\u043e\u043b\u043b\u044e\u0441\u043a!"))},Ye=a(15),Ve=a.n(Ye),$e=function(e){var t=e.children;return r.a.createElement("div",{className:Ve.a.Template},r.a.createElement("div",{className:Ve.a.Header},r.a.createElement(Me,null)),r.a.createElement("div",{className:Ve.a.Content},t),r.a.createElement("div",{className:Ve.a.Footer},r.a.createElement(Qe,null)))},et=function(){var e=Object(l.b)(),t=Object(l.c)((function(e){return e.cars}));return Object(n.useEffect)((function(){e(function(){var e=Object(f.a)(v.a.mark((function e(t){var a;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t(E(!0)),e.next=4,p({method:"GET",path:"/ba52e3eda64f5c8c5616d89c4558ba9c/raw/8b0e810d08b709907cf9579e3a37a83e7b3ebc27/test-data.json"}).then(_);case 4:a=e.sent,t({type:"@cars/receive",payload:{cars:a}}),t(E(!1)),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(0),t(E(!1)),console.error(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}())}),[e]),r.a.createElement($e,null,r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col"},r.a.createElement("div",{className:g.a.Title},r.a.createElement($,null,"\xa1Ay caramba!")))),r.a.createElement("div",{className:"row mb-5"},r.a.createElement("div",{className:"col"},r.a.createElement(ze,{onSubmit:function(t){e({type:"@cars/add",payload:{car:t}})}}))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col"},r.a.createElement(ee,{className:"mb-3"},"\u0410\u0432\u0442\u043e\u043c\u043e\u0431\u0438\u043b\u0438 \u0432 \u043d\u0430\u043b\u0438\u0447\u0438\u0438"),r.a.createElement("div",{className:g.a.CarsList},r.a.createElement(Q,{fetching:t.fetching,cars:t.items,onCarDelete:function(t){return e(function(e){return{type:"@cars/remove",payload:{car:e}}}(t))}}))))))};var tt=function(){return r.a.createElement(l.a,{store:N},r.a.createElement(et,null))};o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(tt,null)),document.getElementById("root"))}],[[43,1,2]]]);
//# sourceMappingURL=main.d25a3cbe.chunk.js.map