(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{15:function(e,t,a){e.exports={negro:"Card_negro__3nL3J",card:"Card_card__HWacR",cardImgName:"Card_cardImgName__3DT1k",contenedor:"Card_contenedor__1U8x6",cardWeight:"Card_cardWeight__ssRLM",cardWeightContainer:"Card_cardWeightContainer__1cQ28",cardTemperament:"Card_cardTemperament__3kkm_"}},16:function(e,t,a){e.exports={gif:"DogDetails_gif__3Dv7W",fondo:"DogDetails_fondo__2mcMR",container:"DogDetails_container__j_h2M",fotoPerro:"DogDetails_fotoPerro__99kRV",contenedorInfo:"DogDetails_contenedorInfo__3GAh5",nombrePerro:"DogDetails_nombrePerro__2q2w0",divisor:"DogDetails_divisor__hhHO0",contenedorLifeSpan:"DogDetails_contenedorLifeSpan__3Wuuv",contenedorTemperament:"DogDetails_contenedorTemperament__3Skzx",botonVolver:"DogDetails_botonVolver__uqwIx"}},17:function(e,t,a){e.exports={contenedorTotal:"NavBar_contenedorTotal__ISrj0",titulo:"NavBar_titulo__3-PkN",busqueda:"NavBar_busqueda__1p13p",contenedorCrear:"NavBar_contenedorCrear__12pr6",crearPerro:"NavBar_crearPerro__2Jv9C",contenedorBusqueda:"NavBar_contenedorBusqueda__1HVFG",contenedorPosibles:"NavBar_contenedorPosibles__2yAst",posible:"NavBar_posible__3VBny"}},18:function(e,t,a){e.exports={resYFiltros:"Home_resYFiltros__1lxCH",reiniciarPerros:"Home_reiniciarPerros__iRRQb",filtradosContenedor:"Home_filtradosContenedor__2OZ4D",filterBy:"Home_filterBy__28Eqm",filtros:"Home_filtros__3L9Lh",orderBy:"Home_orderBy__2jL7n",paginado:"Home_paginado__1IBe5",paginaPerros:"Home_paginaPerros___phOq"}},26:function(e,t,a){e.exports={contenedorTotal:"Loading_contenedorTotal__1aZFu",contenedor:"Loading_contenedor__30qkb",gif:"Loading_gif__17Qlp",cargando:"Loading_cargando__1eyha"}},31:function(e,t,a){e.exports={contenedor:"LandingPage_contenedor__12ahW",titulo:"LandingPage_titulo__3qXUb",boton:"LandingPage_boton__C-a9-"}},4:function(e,t,a){e.exports={contenedor:"CreateDog_contenedor__2JkLg",formContenedor:"CreateDog_formContenedor__1SJdl",homeButton:"CreateDog_homeButton__3WHov",error:"CreateDog_error__1wh3M",medidas:"CreateDog_medidas__2jOin",formName:"CreateDog_formName__2d_l3",division:"CreateDog_division__2xwcT",formWeightHeight:"CreateDog_formWeightHeight__3CYup",formLifeSpan:"CreateDog_formLifeSpan__3JbAt",formTemps:"CreateDog_formTemps__M9EE7",listadoTemps:"CreateDog_listadoTemps__2lyJ3",warnings:"CreateDog_warnings__2j1T2",formImage:"CreateDog_formImage__1wE_V",formButton:"CreateDog_formButton__3U8e3"}},48:function(e,t,a){e.exports={paginado:"Pages_paginado__1M0RE"}},49:function(e,t,a){e.exports={container:"Created_container__25YMg"}},50:function(e,t,a){e.exports={container:"PageNotFound_container__1HUgV"}},58:function(e,t,a){},59:function(e,t,a){},92:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),r=a(28),s=a.n(r),i=(a(58),a(59),a(6)),o=a(5),l=a(31),d=a.n(l),j=a(0);function m(){return Object(j.jsxs)("div",{className:d.a.contenedor,children:[Object(j.jsx)("h1",{className:d.a.titulo,children:"Dogs"}),Object(j.jsx)(i.b,{to:"/home",children:Object(j.jsx)("button",{className:d.a.boton,children:"Get in"})})]})}var h=a(11),b=a(19),u=a(12),p=a(8),g=a(23),O=a.n(g),x="http://localhost:3001",_=function(){return function(){var e=Object(b.a)(Object(h.a)().mark((function e(t){var a;return Object(h.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.a.get("".concat(x,"/dogs"));case 2:a=e.sent,t({type:"GET_DOGS",payload:a.data});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},f=function(){return function(){var e=Object(b.a)(Object(h.a)().mark((function e(t){var a;return Object(h.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.a.get("".concat(x,"/temperaments"));case 2:a=e.sent,t({type:"GET_TEMPERAMENTS",payload:a.data});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},v=a(17),N=a.n(v),w=function(){var e=Object(p.b)(),t=Object(n.useState)(""),a=Object(u.a)(t,2),c=a[0],r=a[1],s=Object(p.c)((function(e){return e.allDogs}));return Object(n.useEffect)((function(){e(_())}),[]),Object(j.jsxs)("div",{className:N.a.contenedorTotal,children:[Object(j.jsx)("h1",{className:N.a.titulo,children:"Dogs App"}),Object(j.jsxs)("div",{className:N.a.contenedorBusqueda,children:[Object(j.jsxs)("div",{className:N.a.busqueda,children:[Object(j.jsx)("button",{onClick:function(t){t.preventDefault(),e(function(e){return function(){var t=Object(b.a)(Object(h.a)().mark((function t(a){var n;return Object(h.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,O.a.get("".concat(x,"/dogs?name=").concat(e));case 3:return n=t.sent,t.abrupt("return",a({type:"GET_NAME_DOGS",payload:n.data}));case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()}(c))},children:"\ud83d\udd0d\ufe0e"}),Object(j.jsx)("input",{onChange:function(e){return function(e){e.preventDefault(),r(e.target.value)}(e)},type:"text",placeholder:"Search for a breed (Ej. Labrador Retriever)"})]}),Object(j.jsx)("div",{className:N.a.contenedorPosibles,children:null===s||void 0===s?void 0:s.map((function(e){if(c.length>1&&e.name.toLowerCase().includes(c.toLowerCase()))return Object(j.jsx)(i.b,{to:"/home/".concat(e.id),children:Object(j.jsxs)("div",{className:N.a.posible,children:[Object(j.jsx)("img",{src:e.image,alt:""}),Object(j.jsx)("p",{children:e.name})]})})}))})]}),Object(j.jsx)("div",{className:N.a.contenedorCrear,children:Object(j.jsx)(i.b,{to:"/createdog",children:Object(j.jsx)("button",{className:N.a.crearPerro,children:"Create dog"})})})]})},y=a(15),D=a.n(y),C=function(e){var t=e.name,a=e.min_weight,n=e.max_weight,c=e.temperament,r=e.image;return Object(j.jsxs)("div",{className:D.a.card,children:[Object(j.jsxs)("div",{className:D.a.cardImgName,children:[Object(j.jsx)("img",{src:r,alt:"Image not found"}),Object(j.jsx)("h1",{className:D.a.negro,children:t})]}),Object(j.jsxs)("div",{className:D.a.contenedor,children:[Object(j.jsxs)("div",{className:D.a.cardWeight,children:[Object(j.jsx)("h3",{children:"Weight"}),Object(j.jsxs)("div",{className:D.a.cardWeightContainer,children:[Object(j.jsxs)("div",{children:[Object(j.jsx)("p",{children:"Min:"}),Object(j.jsx)("p",{className:D.a.negro,children:a})]}),Object(j.jsxs)("div",{children:[Object(j.jsx)("p",{children:"Max:"}),Object(j.jsx)("p",{className:D.a.negro,children:n})]})]})]}),Object(j.jsxs)("div",{className:D.a.cardTemperament,children:[Object(j.jsx)("h3",{children:"Temperament"}),Object(j.jsx)("p",{className:D.a.negro,children:c})]})]})]})},T=a(48),E=a.n(T),I=function(e){for(var t=e.dogsPerPage,a=e.allDogs,n=e.pages,c=[],r=1;r<=Math.ceil(a/t);r++)c.push(r);return Object(j.jsx)("nav",{children:Object(j.jsx)("div",{className:E.a.paginado,children:null===c||void 0===c?void 0:c.map((function(e){return Object(j.jsx)("button",{onClick:function(){return n(e)},children:e},e)}))})})},L=a(26),B=a.n(L),A=function(){return Object(j.jsx)("div",{className:B.a.contenedorTotal,children:Object(j.jsxs)("div",{className:B.a.contenedor,children:[Object(j.jsx)("div",{className:B.a.gif}),Object(j.jsxs)("div",{className:B.a.cargando,children:[Object(j.jsx)("div",{}),Object(j.jsx)("div",{}),Object(j.jsx)("div",{}),Object(j.jsx)("div",{})]}),Object(j.jsx)(i.b,{to:"/home",children:Object(j.jsx)("p",{children:"Something is wrong? Click here"})})]})})},S=a(18),P=a.n(S),M=function(){var e=Object(p.b)(),t=Object(p.c)((function(e){return e.dogs})),a=Object(p.c)((function(e){return e.temperaments})),c=Object(n.useState)(),r=Object(u.a)(c,2),s=r[0],o=r[1],l=Object(n.useState)(),d=Object(u.a)(l,2),m=(d[0],d[1]),g=Object(n.useState)({temperament:"",created:"",name:"",weight:""}),O=Object(u.a)(g,2),x=O[0],v=O[1],N=Object(n.useState)(1),y=Object(u.a)(N,2),D=y[0],T=y[1],E=8*D,L=E-8,B=t.slice(L,E);function S(){return(S=Object(b.a)(Object(h.a)().mark((function t(a){return Object(h.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.preventDefault(),t.next=3,e(_());case 3:T(1),v({temperament:"",created:"",name:"",weight:""});case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function M(e){for(var t=[],a=0;a<e.length;a++)t.push(" "+e[a].name);return t.toString().slice(1,void 0)}return Object(n.useEffect)((function(){e(_()),e(f()),o(!0)}),[e]),t[0]&&a[0]&&s?Object(j.jsxs)("div",{children:[Object(j.jsx)(w,{}),Object(j.jsxs)("div",{className:P.a.resYFiltros,children:[Object(j.jsx)("button",{className:P.a.reiniciarPerros,onClick:function(e){!function(e){S.apply(this,arguments)}(e)},children:"Restart filters"}),Object(j.jsxs)("div",{className:P.a.filtradosContenedor,children:[Object(j.jsx)("div",{className:P.a.filterBy,children:Object(j.jsxs)("div",{className:P.a.filtros,children:[Object(j.jsxs)("div",{children:[Object(j.jsx)("p",{children:"Temperament"}),Object(j.jsxs)("select",{value:x.temperament,onChange:function(t){return function(t){t.preventDefault(),e({type:"FILTER_BY_TEMPERAMENTS",payload:t.target.value}),T(1),v({temperament:t.target.value})}(t)},children:[Object(j.jsx)("option",{value:"all",children:"All"}),null===a||void 0===a?void 0:a.map((function(e){return Object(j.jsx)("option",{value:e.name,children:e.name})}))]})]}),Object(j.jsxs)("div",{children:[Object(j.jsx)("p",{children:"Created"}),Object(j.jsxs)("select",{value:x.created,onChange:function(t){return function(t){t.preventDefault(),e({type:"FILTER_BY_CREATED",payload:t.target.value}),T(1),v({created:t.target.value})}(t)},children:[Object(j.jsx)("option",{value:"all",children:"All"}),Object(j.jsx)("option",{value:"created",children:"Created"}),Object(j.jsx)("option",{value:"not-created",children:"Not created"})]})]})]})}),Object(j.jsxs)("div",{className:P.a.orderBy,children:[Object(j.jsxs)("div",{children:[Object(j.jsx)("h4",{children:"Order by name"}),Object(j.jsxs)("select",{value:x.name,onChange:function(t){return function(t){t.preventDefault(),e({type:"ORDER_BY_NAME",payload:t.target.value}),m(t.target.value),T(1),v({name:t.target.value})}(t)},children:[Object(j.jsx)("option",{value:"default",selected:!0,hidden:!0}),Object(j.jsx)("option",{value:"asc",children:"A - Z"}),Object(j.jsx)("option",{value:"desc",children:"Z - A"})]})]}),Object(j.jsxs)("div",{children:[Object(j.jsx)("h4",{children:"Order by weight"}),Object(j.jsxs)("select",{value:x.weight,onChange:function(t){return function(t){t.preventDefault(),e({type:"ORDER_BY_WEIGHT",payload:t.target.value}),m(t.target.value),T(1),v({weight:t.target.value})}(t)},children:[Object(j.jsx)("option",{value:"default",selected:!0,hidden:!0}),Object(j.jsx)("option",{value:"asc",children:"Asc"}),Object(j.jsx)("option",{value:"desc",children:"Desc"})]})]})]})]})]}),Object(j.jsxs)("div",{className:P.a.paginado,children:[Object(j.jsx)(I,{dogsPerPage:8,allDogs:t.length,pages:function(e){T(e)}}),Object(j.jsx)("div",{className:P.a.paginaPerros,children:B?B.map((function(e){return e.createdInDb?Object(j.jsx)(i.b,{to:"/home/".concat(e.id),children:Object(j.jsx)(C,{name:e.name,min_weight:e.min_weight,max_weight:e.max_weight,temperament:M(e.temperaments),image:e.image})}):Object(j.jsx)(i.b,{to:"/home/".concat(e.id),children:Object(j.jsx)(C,{name:e.name,min_weight:e.min_weight,max_weight:e.max_weight,temperament:e.temperament,image:e.image})})})):Object(j.jsx)("p",{children:"No breeds to show"})})]})]}):Object(j.jsx)(A,{})},R=a(53),k=a(22),H=a(2),G=a(4),W=a.n(G),F=function(){var e=Object(p.b)(),t=Object(o.f)(),a=Object(p.c)((function(e){return e.dogs})),c=Object(p.c)((function(e){return e.temperaments})),r=Object(n.useState)(!1),s=Object(u.a)(r,2),l=s[0],d=s[1];Object(n.useEffect)((function(){e(f()),e(_()),d(!0)}),[e]);var m=Object(n.useState)({name:"",min_weight:"",max_weight:"",min_height:"",max_height:"",life_span:"",temperament:[],image:""}),g=Object(u.a)(m,2),v=g[0],N=g[1],w=Object(n.useState)({}),y=Object(u.a)(w,2),D=y[0],C=y[1],T=function(e){var t={state:!0},n=new RegExp(/^[a-zA-Z\s]*$/g),c=new RegExp(/^[-+]?[0-9]+$/),r=new RegExp(/^http[^\?]*.(jpg|jpeg|gif|png|tiff|bmp)(\?(.*))?$/gim),s=a.filter((function(t){return t.name.toLowerCase()===e.name.toLowerCase()}));return e.name?!1===n.test(e.name)||e.name.length<5||e.name.length>50?(t.name="The name cannot contain symbols or numbers, and must be between 5 and 50 characters long",t.state=!1):s.length>0&&(t.name="The name has already been registered",t.state=!1):(t.name="This space cannot be empty",t.state=!1),e.min_weight&&e.max_weight?!1===c.test(e.min_weight)||!1===c.test(e.max_weight)||Number(e.min_weight)<1||Number(e.min_weight)>100||Number(e.max_weight)<1||Number(e.max_weight)>100?t.weight="The weight cannot contain symbols or letters, and must be between 1 and 100":(Number(e.min_weight)>Number(e.max_weight)||"0"===e.min_weight.charAt(0)||"0"===e.max_weight.charAt(0))&&(t.weight="The minimum weight cannot be greater than the maximum and cannot start at 0",t.state=!1):t.weight="This space cannot be empty!",e.min_height&&e.max_height?!1===c.test(e.min_height)||!1===c.test(e.max_height)||Number(e.min_height)<5||Number(e.min_height)>120||Number(e.max_height)<5||Number(e.max_height)>120?(t.height="The height cannot contain symbols or letters, and must be between 5 and 120",t.state=!1):(Number(e.min_height)>Number(e.max_height)||"0"===e.min_height.charAt(0)||"0"===e.max_height.charAt(0))&&(t.height="The minimum height cannot be greater than the maximum and cannot start at 0",t.state=!1):(t.height="This space cannot be empty!",t.state=!1),e.life_span?"0"===e.life_span.charAt(0)?(t.life_span="The life span cannot start at 0",t.state=!1):(!1===c.test(e.life_span)||Number(e.life_span)<1||Number(e.life_span)>20)&&(t.life_span="The life span cannot contain symbols or letters, and must be between 1 and 20",t.state=!1):(t.life_span="This space cannot be empty!",t.state=!1),e.temperament[0]||(t.temperament="You have to choose at least one temperament",t.state=!1),""===e.image?e.image="https://res.cloudinary.com/postedin/image/upload/d_mascotas:no-image.jpg,f_auto,q_80/mascotas/c-postedin-image-50106.jpeg":!1===r.test(e.image)&&(t.image="Enter a valid url, it must end with an image format",t.state=!1),t};function E(e){N(Object(H.a)(Object(H.a)({},v),{},Object(k.a)({},e.target.name,e.target.value))),C(T(Object(H.a)(Object(H.a)({},v),{},Object(k.a)({},e.target.name,e.target.value))))}return c[0]&&l?Object(j.jsx)("div",{className:W.a.contenedor,children:Object(j.jsxs)("div",{className:W.a.formContenedor,children:[Object(j.jsx)(i.b,{to:"/home",children:Object(j.jsx)("button",{className:W.a.homeButton,children:"Go home"})}),Object(j.jsx)("h1",{children:"Create your dog"}),Object(j.jsxs)("form",{onSubmit:function(n){var c;n.preventDefault(),C(T(v)),!0===D.state&&(e((c=v,Object(b.a)(Object(h.a)().mark((function e(){var t;return Object(h.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.a.post("".concat(x,"/dogs"),c);case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)}))))),N({name:"",min_weight:"",max_weight:"",min_height:"",max_height:"",life_span:"years",temperament:[],image:""}),a.filter((function(e){return e.name.toLowerCase()===v.name.toLowerCase()}))?t.push("/createdsuccessfully"):t.push("/notcreated"))},children:[Object(j.jsxs)("div",{className:W.a.formName,children:[Object(j.jsx)("div",{children:Object(j.jsx)("h4",{children:"Name"})}),Object(j.jsxs)("div",{children:[Object(j.jsx)("input",{type:"text",value:v.name,name:"name",onChange:E,placeholder:"Ej. Bulldog"}),Object(j.jsx)("p",{className:W.a.error,children:D.name})]})]}),Object(j.jsxs)("div",{className:W.a.division,children:[Object(j.jsxs)("div",{className:W.a.formWeightHeight,children:[Object(j.jsxs)("div",{className:W.a.medidas,children:[Object(j.jsx)("h4",{children:"Weight"}),Object(j.jsx)("p",{children:"(in kg)"})]}),Object(j.jsxs)("div",{children:[Object(j.jsx)("label",{children:"Min"}),Object(j.jsx)("input",{type:"text",value:v.min_weight,name:"min_weight",onChange:E}),Object(j.jsx)("label",{children:"Max"}),Object(j.jsx)("input",{type:"text",value:v.max_weight,name:"max_weight",onChange:E}),Object(j.jsx)("p",{className:W.a.error,children:D.weight})]})]}),Object(j.jsxs)("div",{className:W.a.formWeightHeight,children:[Object(j.jsxs)("div",{className:W.a.medidas,children:[Object(j.jsx)("h4",{children:"Height"}),Object(j.jsx)("p",{children:"(in cm)"})]}),Object(j.jsxs)("div",{children:[Object(j.jsx)("label",{children:"Min"}),Object(j.jsx)("input",{type:"text",value:v.min_height,name:"min_height",onChange:E}),Object(j.jsx)("label",{children:"Max"}),Object(j.jsx)("input",{type:"text",value:v.max_height,name:"max_height",onChange:E}),Object(j.jsx)("p",{className:W.a.error,children:D.height})]})]})]}),Object(j.jsxs)("div",{className:W.a.formLifeSpan,children:[Object(j.jsxs)("div",{className:W.a.medidas,children:[Object(j.jsx)("h4",{children:"Life span"}),Object(j.jsx)("p",{children:"(in years)"})]}),Object(j.jsxs)("div",{children:[Object(j.jsx)("input",{type:"text",value:v.life_span,name:"life_span",onChange:E}),Object(j.jsx)("p",{className:W.a.error,children:D.life_span})]})]}),Object(j.jsxs)("div",{className:W.a.formTemps,children:[Object(j.jsxs)("div",{className:W.a.medidas,children:[Object(j.jsx)("h4",{children:"Choose the temperaments"}),Object(j.jsx)("p",{children:"(at least one)"})]}),Object(j.jsx)("div",{children:Object(j.jsxs)("select",{onChange:function(e){N(Object(H.a)(Object(H.a)({},v),{},{temperament:[].concat(Object(R.a)(v.temperament),[e.target.value])})),C(T(Object(H.a)(Object(H.a)({},v),{},Object(k.a)({},e.target.name,e.target.value))))},children:[Object(j.jsx)("option",{value:"",selected:!0,disabled:!0,hidden:!0,children:"---All temperaments---"}),c.map((function(e){return v.temperament.includes(e.name)?Object(j.jsx)("option",{value:e.name,disabled:!0,children:e.name}):Object(j.jsx)("option",{value:e.name,children:e.name})}))]})}),Object(j.jsxs)("div",{children:[Object(j.jsx)("p",{className:W.a.warnings,children:"*Click on the temperament to delete it*"}),Object(j.jsx)("ul",{className:W.a.listadoTemps,children:v.temperament.map((function(e){return Object(j.jsx)("li",{onClick:function(){return function(e){N(Object(H.a)(Object(H.a)({},v),{},{temperament:v.temperament.filter((function(t){return t!==e}))}))}(e)},children:e})}))})]})]}),Object(j.jsxs)("div",{className:W.a.formImage,children:[Object(j.jsxs)("div",{className:W.a.medidas,children:[Object(j.jsx)("h4",{children:"Image"}),Object(j.jsx)("p",{children:"(image url)"})]}),Object(j.jsxs)("div",{children:[Object(j.jsx)("input",{type:"text",value:v.image,name:"image",onChange:E}),Object(j.jsx)("p",{className:W.a.error,children:D.image}),Object(j.jsx)("p",{className:W.a.warnings,children:"*If you don't upload an image, a random one will be uploaded*"})]})]}),Object(j.jsx)("div",{className:W.a.formButton,children:Object(j.jsx)("button",{type:"submit",children:"Create \ud83d\udc36"})})]})]})}):Object(j.jsx)(A,{})},Y=a(49),q=a.n(Y),J=function(){var e=Object(o.f)();return Object(j.jsxs)("div",{className:q.a.container,children:[Object(j.jsx)("h1",{children:"Dog created successfully!"}),Object(j.jsx)("div",{}),Object(j.jsx)("button",{onClick:function(t){t.preventDefault(),e.push("/home")},children:"Go home"})]})},V=a(16),Z=a.n(V),U=function(e){var t=Object(p.b)(),a=Object(n.useState)(!1),c=Object(u.a)(a,2),r=c[0],s=c[1],o=Object(p.c)((function(e){return e.details}));return Object(n.useEffect)((function(){var a;t((a=e.match.params.id,function(){var e=Object(b.a)(Object(h.a)().mark((function e(t){var n;return Object(h.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,O.a.get("".concat(x,"/dogs/").concat(a));case 3:n=e.sent,t({type:"GET_DETAIL",payload:n.data}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}())),s(!0),t({type:"CLEAN_DETAIL"})}),[]),o[0]&&r?Object(j.jsx)("div",{className:Z.a.fondo,children:Object(j.jsxs)("div",{className:Z.a.container,children:[Object(j.jsx)("div",{className:Z.a.gif}),Object(j.jsx)("img",{className:Z.a.fotoPerro,src:o[0].image,alt:"Image not found"}),Object(j.jsxs)("div",{className:Z.a.contenedorInfo,children:[Object(j.jsx)("div",{className:Z.a.nombrePerro,children:Object(j.jsx)("h1",{children:o[0].name})}),Object(j.jsxs)("div",{className:Z.a.divisor,children:[Object(j.jsxs)("div",{children:[Object(j.jsx)("h4",{children:"Weight"}),Object(j.jsxs)("div",{children:[Object(j.jsxs)("p",{children:["Min: ",o[0].min_weight,"kg"]}),Object(j.jsxs)("p",{children:["Max: ",o[0].max_weight,"kg"]})]})]}),Object(j.jsxs)("div",{children:[Object(j.jsx)("h4",{children:"Height"}),Object(j.jsxs)("div",{children:[Object(j.jsxs)("p",{children:["Min: ",o[0].min_height,"cm"]}),Object(j.jsxs)("p",{children:["Max: ",o[0].max_height,"cm"]})]})]})]}),Object(j.jsxs)("div",{className:Z.a.contenedorLifeSpan,children:[Object(j.jsx)("h4",{children:"Life span"}),Object(j.jsxs)("p",{children:[o[0].life_span," years"]})]}),Object(j.jsxs)("div",{className:Z.a.contenedorTemperament,children:[Object(j.jsx)("h4",{children:"Temperament"}),o[0].createdInDb?Object(j.jsx)("p",{children:function(e){for(var t=[],a=0;a<e.length;a++)t.push(" "+e[a].name);return t.toString().slice(1,void 0)}(o[0].temperaments)}):Object(j.jsx)("p",{children:o[0].temperament})]})]}),Object(j.jsx)("div",{className:Z.a.botonVolver,children:Object(j.jsx)(i.b,{to:"/home",children:Object(j.jsx)("button",{children:"Go back"})})})]})}):Object(j.jsx)(A,{})},Q=a(50),$=a.n(Q),z=function(){return Object(j.jsxs)("div",{className:$.a.container,children:[Object(j.jsx)("h1",{children:"Opss! Something went wrong"}),Object(j.jsx)("p",{children:"it seems that the site you are looking for does not exist"}),Object(j.jsx)("div",{}),Object(j.jsx)(i.b,{to:"/home",children:Object(j.jsx)("button",{children:"Go home!"})})]})};var X=function(){return Object(j.jsx)(i.a,{children:Object(j.jsx)("div",{className:"App",children:Object(j.jsxs)(o.c,{children:[Object(j.jsx)(o.a,{exact:!0,path:"/",component:m}),Object(j.jsx)(o.a,{exact:!0,path:"/home",component:M}),Object(j.jsx)(o.a,{path:"/home/:id",component:U}),Object(j.jsx)(o.a,{exact:!0,path:"/createdog",component:F}),Object(j.jsx)(o.a,{exact:!0,path:"/createdsuccessfully",component:J}),Object(j.jsx)(o.a,{path:"*",component:z})]})})})},K=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,93)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,r=t.getLCP,s=t.getTTFB;a(e),n(e),c(e),r(e),s(e)}))},ee=a(30),te=a(51),ae=a(52),ne={dogs:[],allDogs:[],details:[],temperaments:[]};var ce=Object(ee.createStore)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ne,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_DOGS":return Object(H.a)(Object(H.a)({},e),{},{dogs:t.payload,allDogs:t.payload});case"GET_NAME_DOGS":return Object(H.a)(Object(H.a)({},e),{},{dogs:t.payload});case"GET_DETAIL":return Object(H.a)(Object(H.a)({},e),{},{details:t.payload});case"CLEAN_DETAIL":return Object(H.a)(Object(H.a)({},e),{},{details:[]});case"GET_TEMPERAMENTS":return Object(H.a)(Object(H.a)({},e),{},{temperaments:t.payload});case"FILTER_BY_TEMPERAMENTS":var a=e.allDogs,n="all"===t.payload?a:a.filter((function(e){if(Array.isArray(e.temperaments)&&!e.temperament&&e.temperaments.map((function(e){return e.name})).includes(t.payload))return e;if("string"===typeof e.temperament&&!e.temperaments)return e.temperament.includes(t.payload)}));return Object(H.a)(Object(H.a)({},e),{},{dogs:n});case"FILTER_BY_CREATED":var c=e.allDogs,r="created"===t.payload?c.filter((function(e){return e.createdInDb})):c.filter((function(e){return!e.createdInDb}));return Object(H.a)(Object(H.a)({},e),{},{dogs:"all"===t.payload?e.allDogs:r});case"ORDER_BY_NAME":var s="asc"===t.payload?e.dogs.sort((function(e,t){return e.name>t.name?1:t.name>e.name?-1:0})):e.dogs.sort((function(e,t){return e.name>t.name?-1:t.name>e.name?1:0}));return Object(H.a)(Object(H.a)({},e),{},{dogs:s});case"ORDER_BY_WEIGHT":var i="asc"===t.payload?e.dogs.sort((function(e,t){return parseInt(e.min_weight)>parseInt(t.min_weight)?1:parseInt(t.min_weight)>parseInt(e.min_weight)?-1:0})):e.dogs.sort((function(e,t){return parseInt(e.max_weight)>parseInt(t.max_weight)?-1:parseInt(t.max_weight)>parseInt(e.max_weight)?1:0}));return Object(H.a)(Object(H.a)({},e),{},{dogs:i});default:return e}}),Object(te.composeWithDevTools)(Object(ee.applyMiddleware)(ae.a)));s.a.render(Object(j.jsx)(p.a,{store:ce,children:Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(X,{})})}),document.getElementById("root")),K()}},[[92,1,2]]]);
//# sourceMappingURL=main.b6eb40e2.chunk.js.map