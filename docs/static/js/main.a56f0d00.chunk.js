(this["webpackJsonpgif-expert-app"]=this["webpackJsonpgif-expert-app"]||[]).push([[0],{12:function(e,t,n){},14:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n(5),a=n.n(r),i=(n(12),n(2)),s=n(0),u=function(e){var t=e.setHeroes,n=Object(c.useState)(""),r=Object(i.a)(n,2),a=r[0],u=r[1];return Object(s.jsx)("form",{onSubmit:function(e){e.preventDefault(),a.trim().length>2&&(t(a),u(""))},children:Object(s.jsx)("input",{type:"text",value:a,onChange:function(e){u(e.target.value)},placeholder:"Busca una categoria"})})},o=(n(14),n(7)),j=n(4),d=n.n(j),l=n(6),b=function(){var e=Object(l.a)(d.a.mark((function e(t){var n,c,r,a,i;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="http://api.giphy.com/v1/gifs/search?q=".concat(encodeURI(t),"&limit=10&api_key=M5RARNvvbU81WoqmXZu8R4cvMSJgAzjN"),e.next=3,fetch(n);case 3:return c=e.sent,e.next=6,c.json();case 6:return r=e.sent,a=r.data,i=a.map((function(e){return{id:e.id,title:e.title,url:e.images.downsized_medium.url}})),e.abrupt("return",i);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(e){var t=e.title,n=e.url;return Object(s.jsxs)("div",{className:"card animate__animated animate__backInDown ",children:[Object(s.jsx)("img",{src:n,alt:t}),Object(s.jsx)("p",{children:t})]})},f=function(e){var t=e.categoria,n=function(e){var t=Object(c.useState)({data:[],loading:!0}),n=Object(i.a)(t,2),r=n[0],a=n[1];return Object(c.useEffect)((function(){b(e).then((function(e){console.log(e),setTimeout((function(){a({data:e,loading:!1})}),1500)}))}),[e]),r}(t),r=n.data,a=n.loading;return Object(s.jsxs)(c.Fragment,{children:[Object(s.jsx)("h3",{children:t}),Object(s.jsxs)("div",{className:"container-grid",children:[a&&Object(s.jsx)("p",{children:"Loading"}),r.map((function(e){return Object(s.jsx)(p,Object(o.a)({},e),e.id)}))]})]})},h=function(){var e=Object(c.useState)("Doctor Strange"),t=Object(i.a)(e,2),n=t[0],r=t[1],a=n;return Object(s.jsxs)(c.Fragment,{children:[Object(s.jsx)("h2",{children:"GifExpertApp"}),Object(s.jsx)(u,{setHeroes:r}),Object(s.jsx)("hr",{}),Object(s.jsx)("ol",{children:Object(s.jsx)(f,{categoria:a})})]})};a.a.render(Object(s.jsx)(h,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.a56f0d00.chunk.js.map