(this["webpackJsonpreact-again"]=this["webpackJsonpreact-again"]||[]).push([[0],{11:function(t,e,n){"use strict";n.r(e);var a=n(1),c=n(4),r=n.n(c),i=(n(9),n(3)),s=n(0),u=function(t){var e=t.data,n=t.pageLimit,a=t.dataLimit,c=t.totalPages,r=t.currentPage,i=t.setCurrentPage,u=function(t){var e=Number(t.target.textContent);i(e)};return e.length>0?Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("h1",{children:"Github Users"}),Object(s.jsx)("div",{className:"user-container",children:function(){var t=(r-1)*a,n=t+a;return e.slice(t,n)}().map((function(t){return Object(s.jsxs)("div",{className:"user",children:[Object(s.jsx)("img",{src:t.avatar_url,alt:"not available"}),Object(s.jsx)("h4",{children:Object(s.jsx)("a",{href:t.html_url,children:t.login})})]},t.id)}))}),Object(s.jsxs)("div",{className:"page-btn-container",children:[Object(s.jsx)("button",{className:"".concat(1===r?"disabled":"default"),onClick:function(){if(1===r)return r;i(r-1)},children:"Previous"}),function(){var t=Math.floor((r-1)/n)*n;return t+n<c?new Array(n).fill().map((function(e,n){return t+n+1})):new Array(c-t).fill().map((function(e,n){return t+n+1}))}().map((function(t,e){return Object(s.jsx)("button",{onClick:u,className:"".concat(r===t?"active":"default"),children:t},e)})),Object(s.jsx)("button",{className:"".concat(r===c?"disabled":"default"),onClick:function(){if(r===c)return r;i(r+1)},children:"Next"})]})]}):Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("h1",{children:"Github Users"}),Object(s.jsx)("h2",{children:"Loading Data..."})]})},l=function(){var t=Object(a.useState)([]),e=Object(i.a)(t,2),n=e[0],c=e[1],r=Object(a.useState)(1),l=Object(i.a)(r,2),o=l[0],j=l[1],b=Math.ceil(n.length/9);return Object(a.useEffect)((function(){fetch("https://api.github.com/users?per_page=100").then((function(t){return t.json()})).then((function(t){return c(t)}))}),[]),Object(s.jsx)(u,{data:n,currentPage:o,setCurrentPage:j,pageLimit:5,dataLimit:9,totalPages:b})};r.a.render(Object(s.jsx)(l,{}),document.getElementById("root"))},9:function(t,e,n){}},[[11,1,2]]]);
//# sourceMappingURL=main.07137c0c.chunk.js.map