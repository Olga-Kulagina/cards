(this.webpackJsonpcards=this.webpackJsonpcards||[]).push([[0],{14:function(e,t,a){e.exports={nav:"Header_nav__2s9aO",item:"Header_item__1ztzu",active:"Header_active__18eHi"}},17:function(e,t,a){e.exports={table:"Packs_table__3JGet",wrap:"Packs_wrap__35LXe",flexWrap:"Packs_flexWrap__391OR",name:"Packs_name__3dxuA",count:"Packs_count__2Sa30",updated:"Packs_updated__aBjlM",url:"Packs_url__1ucYC",buttons:"Packs_buttons__3yuQB"}},19:function(e,t,a){e.exports={registration:"Registration_registration__1iFH0",center:"Registration_center__3nMDe"}},21:function(e,t,a){e.exports={tableRow:"Pack_tableRow__2nFYq",name:"Pack_name__12ozk",count:"Pack_count__reJoz",updated:"Pack_updated__2aKbP",url:"Pack_url__37kkK",buttons:"Pack_buttons__XH6kS"}},25:function(e,t,a){e.exports={select:"Sort_select__1iXQ1",mainTitle:"Sort_mainTitle__21-tU",items:"Sort_items__2xk4q",item:"Sort_item__2Twg4",selected:"Sort_selected__2kaQA"}},34:function(e,t,a){e.exports={superInput:"Input_superInput__174xK",errorInput:"Input_errorInput__27RRa",error:"Input_error__2R1Jq"}},35:function(e,t,a){e.exports={forgotForm:"PasswordRecovery_forgotForm__2jq_Q",center:"PasswordRecovery_center__185Y6",requestMessage:"PasswordRecovery_requestMessage__2u9rZ"}},37:function(e,t,a){e.exports={loginForm:"Login_loginForm__2gQv8",center:"Login_center__1Ghxe"}},39:function(e,t,a){e.exports={checkbox:"Checkbox_checkbox__KZifb",spanClassName:"Checkbox_spanClassName__1VoqI"}},40:function(e,t,a){e.exports={default:"Button_default__220Zk",red:"Button_red__1lSvL"}},43:function(e,t,a){e.exports={center:"Profile_center__1U74I"}},56:function(e,t,a){e.exports={search:"Search_search__MG4hP"}},59:function(e,t,a){e.exports=a(88)},64:function(e,t,a){},65:function(e,t,a){},88:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(28),o=a.n(c),l=(a(64),a(65),a(6)),s=a(14),u=a.n(s),i=a(4),m=a(33),d=a(37),p=a.n(d),f=a(1),E=a(2),b=a(15),_=a.n(b),v=_.a.create({baseURL:"https://neko-back.herokuapp.com/2.0/",withCredentials:!0}),g=function(e){return v.post("auth/login",e)},h={isLoggedIn:!1},O=a(23),j=a(34),k=a.n(j),S=function(e){e.type;var t=e.onChange,a=e.onChangeText,n=e.onKeyPress,c=e.onEnter,o=e.error,l=(e.className,e.spanClassName),s=Object(O.a)(e,["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName"]),u="".concat(k.a.error," ").concat(l||""),i="".concat(o?k.a.errorInput:k.a.superInput);return r.a.createElement(r.a.Fragment,null,r.a.createElement("input",Object.assign({type:"text",onChange:function(e){t&&t(e),a&&a(e.currentTarget.value)},onKeyPress:function(e){n&&n(e),"Enter"===e.key&&c&&c()},className:i},s)),o&&r.a.createElement("span",{className:u},o))},C=a(39),N=a.n(C),y=function(e){e.type;var t=e.onChange,a=e.onChangeChecked,n=e.className,c=(e.spanClassName,e.children),o=Object(O.a)(e,["type","onChange","onChangeChecked","className","spanClassName","children"]),l="".concat(N.a.checkbox," ").concat(n||"");return r.a.createElement("label",null,r.a.createElement("input",Object.assign({type:"checkbox",onChange:function(e){t&&t(e),a&&a(e.currentTarget.checked)},className:l},o)),c&&r.a.createElement("span",{className:N.a.spanClassName},c))},w=a(40),P=a.n(w),R=function(e){var t=e.red,a=e.className,n=Object(O.a)(e,["red","className"]),c="".concat(t?P.a.red:P.a.default," ").concat(a);return r.a.createElement("button",Object.assign({className:c},n))},T=function(){var e=Object(f.b)(),t=Object(f.c)((function(e){return e.login.isLoggedIn})),a=Object(m.a)({initialValues:{email:"",password:"",rememberMe:!1},onSubmit:function(t){var a;e((a=t,function(e){g(a).then((function(t){e({type:"SET_IS_LOGGED_IN",value:!0}),console.log("login ok")}))}))}});return t?r.a.createElement(i.a,{to:"/profile"}):r.a.createElement("div",null,r.a.createElement("form",{onSubmit:a.handleSubmit,className:p.a.loginForm},r.a.createElement("div",{className:p.a.center},r.a.createElement("h3",null,"Login"),r.a.createElement("label",null,r.a.createElement(S,Object.assign({type:"email",placeholder:"email"},a.getFieldProps("email")))),r.a.createElement("label",null,r.a.createElement(S,Object.assign({type:"password",placeholder:"password"},a.getFieldProps("password")))),r.a.createElement("label",null,r.a.createElement(y,Object.assign({type:"checkbox"},a.getFieldProps("rememberMe")))," Remember me"),r.a.createElement(R,{type:"submit"},"Sign in"))))},A=a(12),x=_.a.create({baseURL:"https://neko-back.herokuapp.com/2.0/",withCredentials:!0}),I=function(e,t){return x.post("auth/register",{email:e,password:t})},F=function(){return x.delete("auth/me")},U=function(e,t){return x.post("auth/set-new-password",{password:e,resetPasswordToken:t})},L={email:"",password:"",error:"",message:"",registeredStatus:null},D=function(e){return{type:"ERRORHOST",errorText:e}},K=function(e){return{type:"SUCCESHOST",message:e}},B=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"REGISTRATION":return Object(E.a)(Object(E.a)({},e),{},{email:t.email,password:t.password});case"SUCCESHOST":return Object(E.a)(Object(E.a)({},e),{},{message:t.message,registeredStatus:!0});case"ERRORHOST":return Object(E.a)(Object(E.a)({},e),{},{error:t.errorText,registeredStatus:!1});default:return e}},H=a(19),q=a.n(H),M=function(){var e=Object(f.b)(),t=Object(f.c)((function(e){return e.registration.error})),a=Object(f.c)((function(e){return e.registration.message})),c=Object(f.c)((function(e){return e.registration.registeredStatus})),o=Object(n.useState)(""),l=Object(A.a)(o,2),s=l[0],u=l[1],m=Object(n.useState)(""),d=Object(A.a)(m,2),p=d[0],E=d[1],b=Object(n.useState)(""),_=Object(A.a)(b,2),v=_[0],g=_[1];Object(n.useEffect)((function(){c&&""===v&&(E(""),u(""))}),[c]);return c?r.a.createElement(i.a,{to:"/login"}):r.a.createElement("div",{className:q.a.registration},r.a.createElement("div",{className:q.a.center},r.a.createElement("h3",null,"Registration"),r.a.createElement(r.a.Fragment,null,r.a.createElement(S,{placeholder:"email",type:"email",onChangeText:function(e){e.trim()&&(g(""),E(e))},className:"default",error:v,value:p})),r.a.createElement(r.a.Fragment,null,r.a.createElement(S,{placeholder:"password",type:"password",onChangeText:function(e){e.trim()&&u(e)},className:"default",error:v,value:s})),r.a.createElement(R,{onClick:function(){e(function(e,t){return function(a){I(e,t).then((function(n){console.log(n.data),console.log(n.statusText);var r=n.statusText;a(function(e,t){return{type:"REGISTRATION",email:e,password:t}}(e,t)),a(K(r))})).catch((function(e){a(D(e.response.data.error))}))}}(p,s))}},"send"),c?r.a.createElement("p",null,a):r.a.createElement("p",null,t)))},W=_.a.create({baseURL:"https://neko-back.herokuapp.com/2.0/",withCredentials:!0}),z=function(){return W.post("auth/me",{})},G={isAuthorized:!1,name:"",error:""},Q=a(43),Z=a.n(Q),J=function(){var e=Object(f.b)(),t=Object(f.c)((function(e){return e.profile.error})),a=Object(f.c)((function(e){return e.profile.isAuthorized}));Object(n.useEffect)((function(){e((function(e){z().then((function(t){var a,n;e((a=!0,n=t.data.name,{type:"SET_IS_AUTHORIZED",value:a,name:n}))})).catch((function(t){t.response&&e({type:"SET_ERROR",error:t.response.data.error})}))}))}));var c=Object(f.c)((function(e){return e.profile.name}));return a?r.a.createElement("div",{className:Z.a.center},"User name: ",c):r.a.createElement("div",{className:Z.a.center},t)},Y=function(){return r.a.createElement(r.a.Fragment,null,"Error404")},V=a(35),X=a.n(V),$=_.a.create({baseURL:"https://neko-back.herokuapp.com/2.0/",withCredentials:!0}),ee=function(e){return $.post("auth/forgot",e)},te={newPasswordRequest:null,message:"",error:""},ae=function(){var e=Object(f.b)(),t=(Object(f.c)((function(e){return e.forgot.newPasswordRequest})),Object(f.c)((function(e){return e.forgot.message}))),a=Object(f.c)((function(e){return e.forgot.error})),n=Object(m.a)({initialValues:{email:"",from:"test-front-admin <ai73a@yandex.by>",message:"<div style=\"background-color: lime; padding: 15px\"> \npassword recovery link:\n <a href='http://localhost:3000/cards#/entering-new-password/$token$'> link</a></div>"},onSubmit:function(t){var a;e((a=t,function(e){ee(a).then((function(t){var a=t.data.info;e(function(e,t){return{type:"NEW_PASSWORD_REQUEST_SUCCESS",value:e,message:t}}("success",a))})).catch((function(t){var a,n;e((a="fail",n=t.response.data.error,{type:"NEW_PASSWORD_REQUEST_FAIL",value:a,error:n}))}))}))}});return""!==t?r.a.createElement("div",{className:X.a.requestMessage},t):r.a.createElement("div",null,r.a.createElement("form",{onSubmit:n.handleSubmit,className:X.a.forgotForm},r.a.createElement("div",{className:X.a.center},r.a.createElement("h3",null,"Password Recovery"),r.a.createElement("label",null,r.a.createElement(S,Object.assign({type:"email",placeholder:"email"},n.getFieldProps("email")))),r.a.createElement(R,{type:"submit"},"Send"),""!==a?r.a.createElement("div",null,a):"")))},ne=function(){var e=Object(f.b)(),t=Object(f.c)((function(e){return e.registration.error})),a=Object(f.c)((function(e){return e.registration.message})),c=Object(f.c)((function(e){return e.registration.registeredStatus})),o=Object(n.useState)(""),l=Object(A.a)(o,2),s=l[0],u=l[1],m=Object(n.useState)(""),d=Object(A.a)(m,2),p=d[0],E=d[1],b=Object(n.useState)(""),_=Object(A.a)(b,2),v=_[0],g=_[1],h=Object(n.useState)(a),O=Object(A.a)(h,2),j=(O[0],O[1],Object(i.g)().token);return r.a.createElement("div",{className:q.a.registration},r.a.createElement("div",{className:q.a.center},r.a.createElement("h6",null," Entering New Password"),r.a.createElement(r.a.Fragment,null,r.a.createElement(S,{placeholder:"password",type:"text",onChangeText:function(e){e.trim()&&(g(""),u(e))},className:"default",error:v,value:s})),r.a.createElement(r.a.Fragment,null,r.a.createElement(S,{placeholder:"repeat password",type:"text",onChangeText:function(e){e.trim()&&E(e)},className:"default",error:v,value:p})),r.a.createElement(R,{onClick:function(){s!==p?(g("\u043f\u0430\u0440\u043e\u043b\u0438 \u043d\u0435 \u0441\u043e\u0432\u043f\u0430\u0434\u0430\u044e\u0442"),E("")):e(function(e,t){return function(a){U(e,t).then((function(e){console.log(e);var t=e.statusText;a(K(t))})).catch((function(e){a(D(e.response.data.error))}))}}(s,j))}},"send"),c?r.a.createElement("p",null,a):r.a.createElement("p",null,t)))},re=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(S,null),r.a.createElement(R,null,"super button"),r.a.createElement(y,null))},ce=function(){var e=Object(f.b)();return r.a.createElement("div",{className:q.a.registration},r.a.createElement("div",{className:q.a.center},r.a.createElement("h3",null,"if you want to delete your account"),r.a.createElement(R,{onClick:function(){e((function(e){F().then((function(e){console.log(e)})).catch((function(e){alert(e)}))}))}},"click me"),r.a.createElement("p",null,"joke,it's logout")))},oe=a(58),le=a(17),se=a.n(le),ue=_.a.create({baseURL:"https://neko-back.herokuapp.com/2.0/",withCredentials:!0}),ie=function(){return ue.get("/cards/pack?pageCount=8")},me=function(){return ue.post("cards/pack",{cardsPack:{name:"NewPack"}})},de=function(e){return ue.delete("cards/pack?id=".concat(e))},pe=function(e){return ue.put("cards/pack",{cardsPack:{_id:e}})},fe={packs:[{_id:"123",cardsCount:5,name:"Some name",updated:"never",url:"111111",userId:"321"},{_id:"12555",cardsCount:6,name:"Some name",updated:"never",url:"111111",userId:"321"},{_id:"123888",cardsCount:7,name:"Some name",updated:"never",url:"111111",userId:"321"}]},Ee=function(e){return{type:"SET_PACKS",packs:e}},be=a(21),_e=a.n(be),ve=function(e){var t=Object(f.b)();return r.a.createElement("div",{className:_e.a.tableRow},r.a.createElement("div",{className:_e.a.name},e.name),r.a.createElement("div",{className:_e.a.count},e.cardsCount),r.a.createElement("div",{className:_e.a.updated},e.updated),r.a.createElement("div",{className:_e.a.url},e.url),r.a.createElement("div",{className:_e.a.buttons},r.a.createElement("button",{onClick:function(){var a;t((a=e._id,function(e){de(a).then((function(t){e({type:"DELETE_PACK"})})),ie().then((function(t){e(Ee(t.data.cardPacks))}))}))}},"Del"),r.a.createElement("button",{onClick:function(){var a;t((a=e._id,function(e){pe(a).then((function(t){e({type:"UPDATE_PACK"})})),ie().then((function(t){e(Ee(t.data.cardPacks))}))}))}},"Update"),r.a.createElement("a",{href:"#"},"cards")))},ge=a(56),he=a.n(ge),Oe={nameSearch:"",error:"",abcType:"ABC"},je=function(e){return{type:"SEARCH_BY_NAME",nameSearch:e}},ke=function(){var e=Object(f.b)(),t=Object(f.c)((function(e){return e.search.nameSearch}));return r.a.createElement("div",{className:he.a.search},r.a.createElement("input",{type:"text",value:t,onChange:function(t){e(je(t.currentTarget.value))},onKeyPress:function(t){13===t.charCode&&e(je(t.currentTarget.value))},placeholder:"search"}))},Se=a(25),Ce=a.n(Se),Ne=function(e){var t=Object(f.b)(),a=Object(f.c)((function(e){return e.search.abcType})),c=Object(n.useState)(!1),o=Object(A.a)(c,2),l=o[0],s=o[1],u=Object(n.useState)(a),i=Object(A.a)(u,2),m=i[0],d=i[1],p=function(e){t({type:"SORT_A",payload:e})},E=e.items.find((function(e){return e.value===a})),b=e.items.find((function(e){return e.value===m}));Object(n.useEffect)((function(){d(a)}),[a]);var _=function(){s(!l)};return r.a.createElement("div",{className:Ce.a.select,onKeyUp:function(t){if("ArrowDown"===t.key||"ArrowUp"===t.key){for(var a=0;a<e.items.length;a++)if(e.items[a].value===m){var n="ArrowDown"===t.key?e.items[a+1]:e.items[a-1];if(n)return p(n.value),void d(e.items[a+1].value)}E||p(e.items[0].value)}"Enter"!==t.key&&"Escape"!==t.key||s(!1)},tabIndex:0},r.a.createElement("h3",{onClick:_,className:Ce.a.mainTitle},E&&E.title),l&&r.a.createElement("div",{className:Ce.a.items},e.items.map((function(e){return r.a.createElement("div",{key:e.value,onMouseEnter:function(){d(e.value)},onClick:function(){!function(e){p(e),_()}(e.value)},className:Ce.a.item+(b===e?Ce.a.selected:"")},e.title)}))))},ye=function(){var e=Object(f.b)(),t=Object(f.c)((function(e){return e.packs.packs})),a=Object(f.c)((function(e){return e.search.nameSearch})),c=Object(f.c)((function(e){return e.search.abcType})),o=Object(f.c)((function(e){return e.profile.isAuthorized}));Object(n.useEffect)((function(){e((function(e){ie().then((function(t){e(Ee(t.data.cardPacks))}))}))}),[]);var l=t;return a&&(l=t.filter((function(e){return e.name.includes(a)}))),"ABC"===c&&(l=Object(oe.a)(l).sort((function(e,t){return e.name>t.name?1:e.name<t.name?-1:0})),console.log(l)),"CBA"===c&&(l=l.sort((function(e,t){return e.name<t.name?1:e.name>t.name?-1:0}))),o?r.a.createElement("div",{className:se.a.wrap},r.a.createElement("div",{className:se.a.flexWrap},r.a.createElement(ke,null),r.a.createElement(Ne,{items:[{title:"ABC",value:"ABC"},{title:"CBA",value:"CBA"},{title:"Rting",value:"Rting"}]})),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:se.a.table},r.a.createElement("div",{className:se.a.name},"Name"),r.a.createElement("div",{className:se.a.count},"Cards count"),r.a.createElement("div",{className:se.a.updated},"Updated"),r.a.createElement("div",{className:se.a.url},"Url"),r.a.createElement("div",{className:se.a.buttons},r.a.createElement("button",{onClick:function(){e((function(e){me().then((function(t){e({type:"ADD_PACK"})})),ie().then((function(t){e(Ee(t.data.cardPacks))}))}))}},"Add"))),r.a.createElement("div",null,l.map((function(e,t){return r.a.createElement(ve,{key:t,_id:e._id,userId:e.userId,name:e.name,cardsCount:e.cardsCount,updated:e.updated,url:e.url})}))))):r.a.createElement("div",{className:se.a.center},"you are not authorized /\u1420-\ua788-\u141f\\")},we="/login",Pe="/logout",Re="/registration",Te="/profile",Ae="/password-recovery",xe="/entering-new-password/:token",Ie="/test",Fe="/packs",Ue=function(){return r.a.createElement("div",null,r.a.createElement(i.d,null,r.a.createElement(i.b,{path:"/",exact:!0,render:function(){return r.a.createElement(i.a,{to:Te})}}),r.a.createElement(i.b,{path:we,render:function(){return r.a.createElement(T,null)}}),r.a.createElement(i.b,{path:Pe,render:function(){return r.a.createElement(ce,null)}}),r.a.createElement(i.b,{path:Re,render:function(){return r.a.createElement(M,null)}}),r.a.createElement(i.b,{path:Te,render:function(){return r.a.createElement(J,null)}}),r.a.createElement(i.b,{path:Ae,render:function(){return r.a.createElement(ae,null)}}),r.a.createElement(i.b,{path:xe,render:function(){return r.a.createElement(ne,null)}}),r.a.createElement(i.b,{path:Ie,render:function(){return r.a.createElement(re,null)}}),r.a.createElement(i.b,{path:Fe,render:function(){return r.a.createElement(ye,null)}}),r.a.createElement(i.b,{render:function(){return r.a.createElement(Y,null)}})))},Le=function(){return r.a.createElement("div",null,r.a.createElement("nav",{className:u.a.nav},r.a.createElement("div",{className:"".concat(u.a.item," ").concat(u.a.active)},r.a.createElement(l.b,{to:we,activeClassName:u.a.active},"Login"),r.a.createElement(l.b,{to:Pe,activeClassName:u.a.active},"Logout"),r.a.createElement(l.b,{to:Re,activeClassName:u.a.active},"Registration"),r.a.createElement(l.b,{to:Te,activeClassName:u.a.active},"Profile"),r.a.createElement(l.b,{to:Ae,activeClassName:u.a.active},"Password recovery"),r.a.createElement(l.b,{to:xe,activeClassName:u.a.active},"Entering new password"),r.a.createElement(l.b,{to:Ie,activeClassName:u.a.active},"Test"),r.a.createElement(l.b,{to:Fe,activeClassName:u.a.active},"Packs"))))};var De=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(Le,null),r.a.createElement(Ue,null))},Ke=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,89)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,c=t.getLCP,o=t.getTTFB;a(e),n(e),r(e),c(e),o(e)}))},Be=a(24),He=a(57),qe={isInitialized:!1},Me=Object(Be.c)({app:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:qe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_INITIALIZED":default:return e}},login:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_IS_LOGGED_IN":return Object(E.a)(Object(E.a)({},e),{},{isLoggedIn:t.value});default:return e}},registration:B,forgot:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:te,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"NEW_PASSWORD_REQUEST_SUCCESS":return Object(E.a)(Object(E.a)({},e),{},{newPasswordRequest:t.value,message:t.message});case"NEW_PASSWORD_REQUEST_FAIL":return Object(E.a)(Object(E.a)({},e),{},{newPasswordRequest:t.value,error:t.error});default:return e}},profile:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:G,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_IS_AUTHORIZED":return Object(E.a)(Object(E.a)({},e),{},{isAuthorized:t.value,name:t.name});case"SET_ERROR":return Object(E.a)(Object(E.a)({},e),{},{error:t.error});default:return e}},packs:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:fe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_PACKS":return Object(E.a)(Object(E.a)({},e),{},{packs:t.packs});case"ADD_PACK":case"DELETE_PACK":case"UPDATE_PACK":return Object(E.a)({},e);default:return e}},search:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Oe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SEARCH_BY_NAME":return Object(E.a)(Object(E.a)({},e),{},{nameSearch:t.nameSearch});case"SORT_A":return Object(E.a)(Object(E.a)({},e),{},{abcType:t.payload});case"SET_ERROR":return Object(E.a)(Object(E.a)({},e),{},{error:t.error});default:return e}}}),We=Object(Be.d)(Me,Object(Be.a)(He.a));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(f.a,{store:We},r.a.createElement(l.a,null,r.a.createElement(De,null)))),document.getElementById("root")),Ke()}},[[59,1,2]]]);
//# sourceMappingURL=main.acf858e1.chunk.js.map