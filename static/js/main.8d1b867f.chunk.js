/*! For license information please see main.8d1b867f.chunk.js.LICENSE.txt */
(this["webpackJsonpgoit-react-hw-07-phonebook"]=this["webpackJsonpgoit-react-hw-07-phonebook"]||[]).push([[0],{100:function(t,e,n){},104:function(t,e,n){"use strict";n.r(e);var c=n(0),a=n(11),r=n.n(a),o=(n(48),n(42)),i=n(10),s=n(16),u=n(17),l=n(21),b=n(20),f=(n(55),n(56),n(57),n(1)),m=function(t){var e=t.children;return Object(f.jsx)("div",{className:"Container",children:e})},j=n(39),h=n.n(j),d=function(){return Object(f.jsx)(h.a,{type:"ThreeDots",color:"#00BFFF",height:300,width:300,timeout:2500})},O=(n(77),n(106)),p=n(105),g=n(40),v=(n(78),function(t){var e=t.children,n=t.onClick;Object(g.a)(t,["children","onClick"]);return Object(f.jsx)("button",{type:"button",onClick:n,className:"IconButton",children:e})});v.defaultProps={onClick:function(){return null},children:null};var C,x=v;function y(){return(y=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var c in n)Object.prototype.hasOwnProperty.call(n,c)&&(t[c]=n[c])}return t}).apply(this,arguments)}function w(t,e){if(null==t)return{};var n,c,a=function(t,e){if(null==t)return{};var n,c,a={},r=Object.keys(t);for(c=0;c<r.length;c++)n=r[c],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(c=0;c<r.length;c++)n=r[c],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}function F(t,e){var n=t.title,a=t.titleId,r=w(t,["title","titleId"]);return c.createElement("svg",y({fill:"currentColor",id:"Layer_1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 60.963 60.842",style:{enableBackground:"new 0 0 60.963 60.842"},xmlSpace:"preserve",ref:e,"aria-labelledby":a},r),n?c.createElement("title",{id:a},n):null,C||(C=c.createElement("path",{d:"M59.595,52.861L37.094,30.359L59.473,7.98c1.825-1.826,1.825-4.786,0-6.611 c-1.826-1.825-4.785-1.825-6.611,0L30.483,23.748L8.105,1.369c-1.826-1.825-4.785-1.825-6.611,0c-1.826,1.826-1.826,4.786,0,6.611 l22.378,22.379L1.369,52.861c-1.826,1.826-1.826,4.785,0,6.611c0.913,0.913,2.109,1.369,3.306,1.369s2.393-0.456,3.306-1.369 l22.502-22.502l22.501,22.502c0.913,0.913,2.109,1.369,3.306,1.369s2.393-0.456,3.306-1.369 C61.42,57.647,61.42,54.687,59.595,52.861z"})))}var L=c.forwardRef(F),N=(n.p,n(15)),k=n.n(N),S=n(5),E=Object(S.b)("contacts/fetchContactsRequest"),_=Object(S.b)("contacts/fetchContactsSuccess"),I=Object(S.b)("contacts/fetchContactsError"),B=Object(S.b)("contacts/addContactRequest"),A=Object(S.b)("contacts/addContactSuccess"),M=Object(S.b)("contacts/addContactError"),P=Object(S.b)("contacts/removeContactRequest"),R=Object(S.b)("contacts/removeContactSuccess"),T=Object(S.b)("contacts/removeContactError"),q=(Object(S.b)("contacts/remove"),Object(S.b)("contacts/changeFilter"));k.a.defaults.baseURL="http://localhost:4040";var D=function(){return function(t){t(E()),k.a.get("/contacts").then((function(e){var n=e.data;return t(_(n))})).catch((function(e){return t(I(e))}))}},z=function(t){var e=t.name,n=t.number;return function(t){var c={name:e,number:n};t(B),k.a.post("/contacts",c).then((function(e){var n=e.data;return t(A(n))})).catch((function(e){return t(M(e))}))}},J=function(t){return function(e){e(P()),k.a.delete("/contacts/".concat(t)).then((function(){return e(R(t))})).catch((function(t){return e(T(t))}))}},V=function(t){return t.phoneBook.items},U=function(t){return t.phoneBook.filter},X={getAllItems:V,getLoading:function(t){return t.phoneBook.items},getFilter:U,getVisibleContacts:function(t){var e=V(t),n=U(t).toLowerCase();return e.filter((function(t){return t.name.toLowerCase().includes(n)}))}},G=Object(i.b)((function(t){return{items:X.getVisibleContacts(t)}}),(function(t){return{onRemoveContact:function(e){return t(J(e))}}}))((function(t){var e=t.items,n=t.onRemoveContact;return Object(f.jsx)(O.a,{component:"ul",className:"ContactList",children:e.map((function(t){var e=t.id,c=t.name,a=t.number;return Object(f.jsx)(p.a,{timeout:250,classNames:"ContactList__item-fade",children:Object(f.jsxs)("li",{className:"ContactList__item",children:[Object(f.jsxs)("p",{className:"ContactList__name",children:[c,": ",a]}),Object(f.jsx)(x,{className:"ContactList__button",onClick:function(){return n(e)},"aria-label":"Remove Contact",children:Object(f.jsx)(L,{width:"12",height:"12",fill:"#fff"})})]},e)},e)}))})})),H=n(8),K=(n(97),n(98),function(t){var e=t.message;return Object(f.jsx)(p.a,{in:e,timeout:250,classNames:"Notification-fade",unmountOnExit:!0,children:Object(f.jsx)("div",{className:"Overlay",children:Object(f.jsx)("p",{className:"Notification",children:e})})})}),Q=function(t){Object(l.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(s.a)(this,n);for(var c=arguments.length,a=new Array(c),r=0;r<c;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))).state={name:"",number:"",message:null},t.setMessage=function(e){t.setState({message:e}),setTimeout((function(){t.setState({message:null})}),2500)},t.handleChange=function(e){var n=e.target,c=n.name,a=n.value;t.setState(Object(H.a)({},c,a))},t.setMessage=function(e){t.setState({message:e}),setTimeout((function(){t.setState({message:null})}),2500)},t.handleSubmit=function(e){e.preventDefault();var n=t.state,c=n.name,a=n.number;""!==c?""!==a?(""===c&&""===a&&t.setMessage("Enter data to each of inputs: [name & number]!"),t.props.items.find((function(t){return t.name.toLowerCase()===c.toLowerCase()}))?t.setMessage("Contact ".concat(c," is \u0430lready exists!")):(t.props.onSubmit(c,a),t.setState({name:"",number:""}))):t.setMessage("Enter concact phone number, please!"):t.setMessage("Enter concact name, please!")},t}return Object(u.a)(n,[{key:"render",value:function(){var t=this.state,e=t.name,n=t.number,c=t.message;return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(K,{message:c}),Object(f.jsxs)("form",{className:"ContactForm",onSubmit:this.handleSubmit,children:[Object(f.jsx)("label",{className:"Label",htmlFor:"name",children:"Name"}),Object(f.jsx)("input",{type:"text",value:e,id:"name",className:"ContactForm__input",name:"name",onChange:this.handleChange,placeholder:"Anton Cherny",autoFocus:!0}),Object(f.jsx)("label",{className:"Label",htmlFor:"number",children:"Number"}),Object(f.jsx)("input",{type:"tel",value:n,id:"number",className:"ContactForm__input",name:"number",required:!0,onChange:this.handleChange,placeholder:"+38 (066) 000-00-00"}),Object(f.jsx)("button",{type:"submit",className:"ContactForm__button",children:"Add contact"})]})]})}}]),n}(c.Component);Q.defaultProps={};var W,Y,Z=Object(i.b)((function(t){return{items:X.getAllItems(t)}}),(function(t){return{onSubmit:function(e,n){return t(z({name:e,number:n}))}}}))(Q),$=(n(99),Object(i.b)((function(t){return{value:X.getFilter(t),items:X.getAllItems(t)}}),(function(t){return{onChangeFilter:function(e){return t(q(e.target.value))},onClearFilter:function(e){return t(q(""))}}}))((function(t){var e=t.value,n=t.onChangeFilter,c=t.onClearFilter,a=t.items;return Object(f.jsx)(p.a,{in:a.length>1,timeout:250,classNames:"Filter-fade",unmountOnExit:!0,onExiting:function(){return c()},children:Object(f.jsxs)("div",{className:"filterForm",children:[Object(f.jsx)("label",{htmlFor:"find",className:"Label filterLabel",children:"Find contact by name"}),Object(f.jsx)("input",{type:"text",value:e,id:"find",className:"filterInput",onChange:n})]})})}))),tt=(n(100),function(){return Object(f.jsx)(p.a,{in:!0,appear:!0,timeout:500,classNames:"Title-SlideIn",unmountOnExit:!0,children:Object(f.jsx)("h1",{className:"Title",children:"Phonebook"})})}),et=function(t){Object(l.a)(n,t);var e=Object(b.a)(n);function n(){return Object(s.a)(this,n),e.apply(this,arguments)}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.props.fetchContacts()}},{key:"render",value:function(){return Object(f.jsxs)(m,{children:[Object(f.jsx)(tt,{}),Object(f.jsx)(Z,{}),Object(f.jsx)($,{}),this.props.isLoadingContacts&&Object(f.jsx)(d,{}),Object(f.jsx)(G,{})]})}}]),n}(c.Component),nt=Object(i.b)((function(t){return{items:X.getAllItems(t),isLoadingContacts:X.getLoading(t)}}),(function(t){return{fetchContacts:function(){return t(D())}}}))(et),ct=n(19),at=n(41),rt=n.n(at),ot=n(12),it=n(7),st=Object(S.c)([],(W={},Object(H.a)(W,_,(function(t,e){return e.payload})),Object(H.a)(W,A,(function(t,e){return[e.payload].concat(Object(ct.a)(t))})),Object(H.a)(W,R,(function(t,e){var n=e.payload;return t.filter((function(t){return t.id!==n}))})),W)),ut=Object(S.c)(!1,(Y={},Object(H.a)(Y,E,(function(){return!0})),Object(H.a)(Y,_,(function(){return!1})),Object(H.a)(Y,I,(function(){return!1})),Object(H.a)(Y,B,(function(){return!0})),Object(H.a)(Y,A,(function(){return!1})),Object(H.a)(Y,M,(function(){return!1})),Object(H.a)(Y,P,(function(){return!0})),Object(H.a)(Y,R,(function(){return!1})),Object(H.a)(Y,T,(function(){return!1})),Y)),lt=Object(S.c)("",Object(H.a)({},q,(function(t,e){return e.payload}))),bt=Object(S.c)(null,{}),ft=Object(it.c)({items:st,filter:lt,loading:ut,error:bt}),mt=[].concat(Object(ct.a)(Object(S.d)({serializableCheck:{ignoredActions:[ot.a,ot.f,ot.b,ot.c,ot.d,ot.e]}})),[rt.a]),jt=Object(S.a)({reducer:{phoneBook:ft},middleware:mt,devTools:!1}),ht=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,107)).then((function(e){var n=e.getCLS,c=e.getFID,a=e.getFCP,r=e.getLCP,o=e.getTTFB;n(t),c(t),a(t),r(t),o(t)}))};r.a.render(Object(f.jsx)(i.a,{store:jt,children:Object(f.jsx)(o.a,{children:Object(f.jsx)(nt,{})})}),document.getElementById("root")),ht()},48:function(t,e,n){},55:function(t,e,n){},57:function(t,e,n){},77:function(t,e,n){},78:function(t,e,n){},97:function(t,e,n){},98:function(t,e,n){},99:function(t,e,n){}},[[104,1,2]]]);
//# sourceMappingURL=main.8d1b867f.chunk.js.map