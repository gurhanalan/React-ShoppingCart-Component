(this.webpackJsonpreminder=this.webpackJsonpreminder||[]).push([[0],{12:function(e,t,a){},14:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(4),l=a.n(c),m=(a(12),a(1)),o=a(2),u=a.n(o),s=a(5),i=a(6),E={cartItems:[],totalPrice:0,totalItems:0,isLoading:!0},d=function(e,t){switch(t.type){case"LOAD_DATA":return Object(m.a)(Object(m.a)({},e),{},{cartItems:t.payload,isLoading:!1});case"CLEAR_CART":return Object(m.a)(Object(m.a)({},e),{},{cartItems:[],totalPrice:0,totalItems:0});case"DELETE_ITEM":var a=e.cartItems.filter((function(e){return e.id!==t.payload}));return Object(m.a)(Object(m.a)({},e),{},{cartItems:a});case"ADD/REMOVE_ITEM":var n=e.cartItems.map((function(e){var a;return e.id===t.payload.id?("add"===t.payload.type?a=e.amount+1:"remove"===t.payload.type&&(a=e.amount-1),Object(m.a)(Object(m.a)({},e),{},{amount:a})):e})).filter((function(e){return 0!==e.amount}));return Object(m.a)(Object(m.a)({},e),{},{cartItems:n});case"UPDATE_TOTALS":var r=e.cartItems.reduce((function(e,t){return e.totalAmount+=t.amount,e.totalPrice+=t.amount*t.price,e}),{totalAmount:0,totalPrice:0}),c=r.totalAmount,l=r.totalPrice;return l=parseFloat(l.toFixed(2)),Object(m.a)(Object(m.a)({},e),{},{totalPrice:l,totalItems:c});default:throw new Error("No matching type")}},p=r.a.createContext(),v=function(e){var t=e.children,a=Object(n.useReducer)(d,E),c=Object(i.a)(a,2),l=c[0],o=c[1],v=function(){var e=Object(s.a)(u.a.mark((function e(){var t,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://course-api.com/react-useReducer-cart-project");case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,o({type:"LOAD_DATA",payload:a});case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(n.useEffect)((function(){v()}),[]),Object(n.useEffect)((function(){o({type:"UPDATE_TOTALS"})}),[l.cartItems]);return r.a.createElement(p.Provider,{value:Object(m.a)(Object(m.a)({},l),{},{dispatch:o,addItem:function(e){o({type:"ADD/REMOVE_ITEM",payload:{id:e,type:"add"}})},removeItem:function(e){o({type:"ADD/REMOVE_ITEM",payload:{id:e,type:"remove"}})}})},t)},h=function(){return Object(n.useContext)(p)},f=function(){var e=h().totalItems;return r.a.createElement("nav",null,r.a.createElement("div",{className:"nav-center"},r.a.createElement("h3",null,"useReducer Cart"),r.a.createElement("div",{className:"nav-container"},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"},r.a.createElement("path",{d:"M16 6v2h2l2 12H0L2 8h2V6a6 6 0 1 1 12 0zm-2 0a4 4 0 1 0-8 0v2h8V6zM4 10v2h2v-2H4zm10 0v2h2v-2h-2z"})),r.a.createElement("div",{className:"amount-container"},r.a.createElement("p",{className:"total-amount"},e)))))},b=function(e){var t=e.id,a=e.img,n=e.title,c=e.price,l=e.amount,m=h(),o=m.dispatch,u=m.addItem,s=m.removeItem;return r.a.createElement("article",{className:"cart-item"},r.a.createElement("img",{src:a,alt:n}),r.a.createElement("div",null,r.a.createElement("h4",null,n),r.a.createElement("h4",{className:"item-price"},"$",c),r.a.createElement("button",{className:"remove-btn",onClick:function(){return o({type:"DELETE_ITEM",payload:t})}},"remove")),r.a.createElement("div",null,r.a.createElement("button",{className:"amount-btn",onClick:function(){return u(t)}},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"},r.a.createElement("path",{d:"M10.707 7.05L10 6.343 4.343 12l1.414 1.414L10 9.172l4.243 4.242L15.657 12z"}))),r.a.createElement("p",{className:"amount"},l),r.a.createElement("button",{className:"amount-btn",onClick:function(){return s(t)}},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"},r.a.createElement("path",{d:"M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"})))))},y=function(){var e=h(),t=e.cartItems,a=e.totalPrice,n=e.dispatch;return 0===t.length?r.a.createElement("section",{className:"cart"},r.a.createElement("header",null,r.a.createElement("h2",null,"your bag"),r.a.createElement("h4",{className:"empty-cart"},"is currently empty"))):r.a.createElement("section",{className:"cart"},r.a.createElement("header",null,r.a.createElement("h2",null,"your bag")),r.a.createElement("div",null,t.map((function(e){return r.a.createElement(b,Object.assign({key:e.id},e))}))),r.a.createElement("footer",null,r.a.createElement("hr",null),r.a.createElement("div",{className:"cart-total"},r.a.createElement("h4",null,"total ",r.a.createElement("span",null,"$",a))),r.a.createElement("button",{className:"btn clear-btn",onClick:function(){return n({type:"CLEAR_CART"})}},"clear cart")))};var O=function(){return h().isLoading?r.a.createElement("div",{className:"loading"},r.a.createElement("h1",null,"Loading...")):r.a.createElement("main",null,r.a.createElement(f,null),r.a.createElement(y,null))};l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(v,null,r.a.createElement(O,null))),document.getElementById("root"))},7:function(e,t,a){e.exports=a(14)}},[[7,1,2]]]);
//# sourceMappingURL=main.8eb8c3ad.chunk.js.map