(this.webpackJsonpday_34=this.webpackJsonpday_34||[]).push([[0],{16:function(t,e,n){},22:function(t,e,n){"use strict";n.r(e);var c=n(0),a=n.n(c),r=n(4),o=n.n(r),i=n(10),s=(n(16),n(3)),u=n(1);var d=function(){var t=Object(s.c)((function(t){return t.notes})),e=Object(c.useState)(""),n=Object(i.a)(e,2),a=n[0],r=n[1],o=Object(s.b)();return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)("input",{type:"text",value:a,onChange:function(t){r(t.target.value)}}),Object(u.jsx)("button",{onClick:function(){o({type:"ADD_NOTE",payload:a}),r("")},children:"Add Note"}),t.map((function(t,e){return Object(u.jsxs)("div",{className:"todos",children:[Object(u.jsx)("h1",{children:t}),Object(u.jsx)("button",{onClick:function(){o({type:"DELETE_NOTE",payload:e})},children:"Delete"})]},e)}))]})},j=n(6),l=n(11),b=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"ADD_NOTE":var n=e.payload.toString();return[].concat(Object(l.a)(t),[n]);case"DELETE_NOTE":return t.filter((function(t,n){return n!==e.payload}));default:return t}},O=Object(j.a)({notes:b}),p=Object(j.b)(O);o.a.render(Object(u.jsx)(a.a.StrictMode,{children:Object(u.jsx)(s.a,{store:p,children:Object(u.jsx)(d,{})})}),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.12d9ce70.chunk.js.map