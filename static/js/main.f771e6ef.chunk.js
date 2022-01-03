(this["webpackJsonpintroduccion-react"]=this["webpackJsonpintroduccion-react"]||[]).push([[0],[,,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var o=n(1),c=n.n(o),r=n(4),a=n.n(r),l=n(6),s=n(2);var i=n(0),d=c.a.createContext();function u(e){var t=function(e,t){var n=Object(o.useState)(!0),c=Object(s.a)(n,2),r=c[0],a=c[1],l=Object(o.useState)(!1),i=Object(s.a)(l,2),d=i[0],u=i[1],j=Object(o.useState)(t),b=Object(s.a)(j,2),O=b[0],m=b[1];return Object(o.useEffect)((function(){setTimeout((function(){try{var n=JSON.parse(localStorage.getItem(e));n||(n=t,localStorage.setItem(e,JSON.stringify(n))),m(n),a(!1)}catch(d){a(!1),u(!0)}}),1e3)}),[]),{item:O,saveItem:function(t){try{localStorage.setItem(e,JSON.stringify(t)),m(t)}catch(d){u(!0)}},loading:r,error:d}}("TODOS_V1",[]),n=t.item,c=t.saveItem,r=t.loading,a=t.error,u=Object(o.useState)(""),j=Object(s.a)(u,2),b=j[0],O=j[1],m=Object(o.useState)(!1),h=Object(s.a)(m,2),p=h[0],f=h[1],x=n.filter((function(e){return!!e.complete})).length,T=n.length,v=[];v=!b.length>=1?n:n.filter((function(e){var t=e.text.toLowerCase(),n=b.toLowerCase();return t.includes(n)}));return Object(i.jsx)(d.Provider,{value:{loading:r,error:a,totalTodos:T,completedTodos:x,searchValue:b,setSearchValue:O,searchedTodos:v,addTodo:function(e){var t=[].concat(Object(l.a)(n),[{id:n.length++,text:e,complete:!1}]);c(t)},completeTodo:function(e){var t=n.findIndex((function(t){return t.id===e})),o=Object(l.a)(n);o[t].complete=!n[t].complete,c(o)},deleteTodo:function(e){var t=n.findIndex((function(t){return t.id===e})),o=Object(l.a)(n);o.splice(t,1),c(o)},openModal:p,setOpenModal:f},children:e.children})}n(13);function j(){var e=Object(o.useContext)(d),t=e.totalTodos,n=e.completedTodos;return Object(i.jsxs)("h2",{className:"TodoCounter",children:["Has completado ",n," de ",t," TODOs"]})}n(14);function b(){var e=Object(o.useContext)(d),t=e.searchValue,n=e.setSearchValue;return Object(i.jsx)("input",{className:"TodoSearch",placeholder:"Cebolla",value:t,onChange:function(e){n(e.target.value)}})}n(15);function O(e){return Object(i.jsxs)("li",{className:"TodoItem",children:[Object(i.jsx)("span",{className:"Icon Icon-check ".concat(e.completed&&"Icon-check--active"),onClick:e.onComplete,children:"\u221a"}),Object(i.jsx)("p",{className:"TodoItem-p ".concat(e.completed&&"TodoItem-p--completed"),children:e.text}),Object(i.jsx)("span",{className:"Icon Icon-delete",onClick:e.onDelete,children:"X"})]})}n(16);function m(e){return Object(i.jsx)("section",{children:Object(i.jsx)("ul",{children:e.children})})}n(17);function h(e){return Object(i.jsx)("button",{className:"CreateTodoButton",onClick:function(){e.setOpenModal((function(e){return!e}))},children:"+"})}n(18);function p(e){var t=e.children;return a.a.createPortal(Object(i.jsx)("div",{className:"ModalBackground",children:t}),document.getElementById("modal"))}n(19);function f(e){var t=e.setOpenModal,n=Object(o.useState)(""),c=Object(s.a)(n,2),r=c[0],a=c[1],l=Object(o.useContext)(d).addTodo;return Object(i.jsxs)("form",{onSubmit:function(e){e.preventDefault(),l(r),t(!1)},children:[Object(i.jsx)("label",{children:"Escribe tu nuevo To Do"}),Object(i.jsx)("textarea",{placeholder:"Cortar la cebolla para el almuerzo",value:r,onChange:function(e){a(e.target.value)}}),Object(i.jsxs)("div",{className:"TodoForm-buttonContainer",children:[Object(i.jsx)("button",{type:"button",onClick:function(){t(!1)},className:"TodoForm-button TodoForm-button-cancel",children:"Cancelar"}),Object(i.jsx)("button",{type:"submit",className:"TodoForm-button TodoForm-button-add",children:"A\xf1adir"})]})]})}function x(){var e=Object(o.useContext)(d),t=e.loading,n=e.error,c=e.searchedTodos,r=e.completeTodo,a=e.deleteTodo,l=e.searchValue,s=e.openModal,u=e.setOpenModal;return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(j,{}),Object(i.jsx)(b,{}),Object(i.jsxs)(m,{children:[t&&Object(i.jsx)("p",{children:"Estamos cargando, no desesperes..."}),n&&Object(i.jsx)("p",{children:"Entra en panico, no cargo O.o"}),0===c.length&&!t&&Object(i.jsx)("p",{children:"No lo pudimos encontrar   T . T"}),!t&&!c.length&&!n&&!l&&Object(i.jsx)("p",{children:"Crea tu primer TODO ^^"}),c.map((function(e){return Object(i.jsx)(O,{text:e.text,completed:e.complete,onComplete:function(){return r(e.id)},onDelete:function(){return a(e.id)}},e.id)}))]}),!!s&&Object(i.jsx)(p,{children:Object(i.jsx)(f,{setOpenModal:u})}),Object(i.jsx)(h,{setOpenModal:u})]})}var T=function(){return Object(i.jsx)(u,{children:Object(i.jsx)(x,{})})};n(20);a.a.render(Object(i.jsx)(T,{}),document.getElementById("root"))}],[[21,1,2]]]);
//# sourceMappingURL=main.f771e6ef.chunk.js.map