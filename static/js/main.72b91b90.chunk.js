(this["webpackJsonpmovie-lens"]=this["webpackJsonpmovie-lens"]||[]).push([[0],{168:function(e,t,n){},169:function(e,t,n){"use strict";n.r(t);var i=n(0),r=n.n(i),a=n(36),c=n.n(a),l=n(79),s=n(121),o=n(222),d=n(130),u=n(236),j=n(33),A=n(64),m={loading:!1,title:null,titles:[],genres:[{id:"action",displayName:"Action"},{id:"adventure",displayName:"Adventure"},{id:"animation",displayName:"Animation"},{id:"biography",displayName:"Biography"},{id:"comedy",displayName:"Comedy"},{id:"crime",displayName:"Crime"},{id:"documentary",displayName:"Documentary"},{id:"drama",displayName:"Drama"},{id:"family",displayName:"Family"},{id:"fantasy",displayName:"Fantasy"},{id:"film_noir",displayName:"Film Noir"},{id:"game_show",displayName:"Game Show"},{id:"history",displayName:"History"},{id:"horror",displayName:"Horror"},{id:"music",displayName:"Music"},{id:"musical",displayName:"Musical"},{id:"mystery",displayName:"Mystery"},{id:"news",displayName:"News"},{id:"reality_tv",displayName:"Reality TV"},{id:"romance",displayName:"Romance"},{id:"sci_fi",displayName:"Sci-Fi"},{id:"sport",displayName:"Sport"},{id:"talk_show",displayName:"Talk Show"},{id:"thriller",displayName:"Thriller"},{id:"war",displayName:"War"},{id:"western",displayName:"Western"}]},p=Object(A.b)({name:"titles",initialState:m,reducers:{reset:function(e){e.title=null,e.titles=[]},setLoading:function(e,t){e.loading=t.payload},setTitles:function(e,t){e.titles=t.payload},setTitle:function(e,t){e.title=t.payload}}}),b=Object(A.b)({name:"user",initialState:{favourites:[],watchLater:[]},reducers:{setFavourites:function(e,t){var n=e.favourites.indexOf(t.payload);n>-1?(console.log("Eliminando de favs"),e.favourites.splice(n,1)):(console.log("Agregando a favs"),e.favourites.push(t.payload))},setWatchLater:function(e,t){var n=e.watchLater.indexOf(t.payload);n>-1?(console.log("Eliminando de wl"),e.watchLater.splice(n,1)):(console.log("Agregando de wl"),e.watchLater.push(t.payload))}}}),x=n(108),h=n.n(x),V=n(95),f={key:"root",storage:h.a,blacklist:["titles"]},O={key:"user",storage:h.a},g=Object(j.b)({titles:p.reducer,user:Object(V.a)(O,b.reducer)}),q=Object(V.a)(f,g),v=Object(A.a)({reducer:q,middleware:function(e){return e({serializableCheck:!1})}}),y=Object(V.b)(v),w=n(32),E=n(14),W=n(240),N=n(228),k=n(227),C=n(249),R=n(226),T=n(239),L=n(243),F=n(242),S=n(11),D=n(237),Y=n(129),I=n(233),X=n(123),B=n.n(X),H=n(90),J=n.n(H),P=n(91),M=n.n(P),G=n(1),U=function(){var e=i.useState(null),t=Object(S.a)(e,2),n=t[0],r=t[1],a=Boolean(n),c=function(){r(null)};return Object(G.jsxs)(G.Fragment,{children:[Object(G.jsx)(D.a,{id:"basic-button","aria-controls":a?"basic-menu":void 0,"aria-haspopup":"true","aria-expanded":a?"true":void 0,onClick:function(e){r(e.currentTarget)},children:Object(G.jsx)(B.a,{})}),Object(G.jsxs)(Y.a,{id:"basic-menu",anchorEl:n,open:a,onClose:c,MenuListProps:{"aria-labelledby":"basic-button"},children:[Object(G.jsx)(w.b,{to:"/favourites",children:Object(G.jsxs)(I.a,{onClick:c,children:[Object(G.jsx)(J.a,{}),Object(G.jsx)(F.a,{variant:"subtitle1",align:"center",color:"text.primary",ml:1,children:"Favourites"})]})}),Object(G.jsx)(w.b,{to:"/watch-later",children:Object(G.jsxs)(I.a,{onClick:c,children:[Object(G.jsx)(M.a,{}),Object(G.jsx)(F.a,{variant:"subtitle1",align:"center",color:"text.primary",ml:1,children:"Watch later"})]})})]})]})},z=function(){var e=Object(E.e)().pathname;return console.log(e),Object(G.jsx)(G.Fragment,{children:Object(G.jsxs)(T.a,{container:!0,spacing:2,children:[Object(G.jsx)(T.a,{item:!0,sm:8,pl:2,sx:{display:"flex",flexDirection:"column",alignItems:"start",justifyContent:"center"},children:"/"!==e&&Object(G.jsx)(w.b,{to:"/",children:Object(G.jsxs)(F.a,{component:"h1",variant:"h2",sx:{textAlign:{xs:"center",sm:"left"}},color:"text.primary",gutterBottom:!0,children:["Movie"," ",Object(G.jsx)(L.a,{color:"primary.main",display:"inline",children:"Lens"})]})})}),Object(G.jsx)(T.a,{item:!0,md:4,sx:{display:"flex",flexDirection:"column",alignItems:"end",justifyContent:"center",pr:0},children:Object(G.jsx)(U,{})})]})})},Z=function(e){var t=e.url;return Object(G.jsx)(W.a,{sx:{width:"100%",display:"flex",flexDirection:"column",alignItems:{sx:"center",sm:"center",md:"center",lg:"end"},justifyContent:"center",pr:0},children:Object(G.jsx)("iframe",{width:"480",height:"360",src:"".concat(t,"?autoplay=false&width=480"),frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0,title:"Embedded youtube"})})},Q=n(46),K=n(30),_=n(230),$=n(232),ee=function(){return Object(l.b)()},te=l.c,ne=n(25),ie=n.n(ne),re=n(45),ae=n(229),ce=function(){return ae.a.create({baseURL:"https://imdb-api.com/en/API/"})},le=n(81),se={searchTitle:function(e){return Object(re.a)(ie.a.mark((function t(){var n;return ie.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,ce().get("AdvancedSearch/k_1fthmbb9",{params:{title:e.q,release_date:e.year?"".concat(e.year,"-01-01"):null,title_type:"feature",limit:50,genres:e.genre}});case 2:return n=t.sent,t.abrupt("return",n.data.results.length?n.data.results.map((function(e){var t,n;return{id:e.id,title:e.title,description:e.description,year:e.year,directors:e.directors,stars:e.stars,image:null!==(t=e.image)&&void 0!==t?t:null,genres:e.genres,rating:e.imDbRating,contentRating:e.contentRating,plot:e.plot,runtime:e.runtimeMins,runtimeStr:e.runtimeStr,countries:e.countries,companies:e.companies,poster:Object(le.a)(null,["posters","posters",0,"link"],e),backdrop:Object(le.a)(null,["posters","backdrops",0,"link"],e),trailer:null===(n=e.trailer)||void 0===n?void 0:n.linkEmbed}})):null);case 4:case"end":return t.stop()}}),t)})))()},getTitle:function(e){return Object(re.a)(ie.a.mark((function t(){var n,i,r,a;return ie.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,ce().get("Title/k_1fthmbb9/".concat(e,"/Posters,Trailer,Ratings"));case 2:return r=t.sent,a=r.data,t.abrupt("return",a?{id:a.id,title:a.title,year:a.year,directors:a.directors,stars:a.stars,image:null!==(n=a.image)&&void 0!==n?n:null,genres:a.genres,rating:a.imDbRating,contentRating:a.contentRating,plot:a.plot,runtime:a.runtimeMins,runtimeStr:a.runtimeStr,countries:a.countries,companies:a.companies,poster:Object(le.a)(null,["posters","posters",0,"link"],a),backdrop:Object(le.a)(null,["posters","backdrops",0,"link"],a),trailer:null===(i=a.trailer)||void 0===i?void 0:i.linkEmbed}:null);case 5:case"end":return t.stop()}}),t)})))()}},oe=p.actions,de=function(e){return function(){var t=Object(re.a)(ie.a.mark((function t(n,i){var r;return ie.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(oe.setLoading(!0)),t.next=3,se.searchTitle(e);case 3:r=t.sent,n(oe.setTitles(r)),n(oe.setLoading(!1));case 6:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()},ue=function(e){return function(){var t=Object(re.a)(ie.a.mark((function t(n,i){var r,a;return ie.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(oe.setLoading(!0)),r=e.map((function(e){return se.getTitle(e)})),t.next=4,Promise.all(r);case 4:a=t.sent,n(oe.setTitles(a)),n(oe.setLoading(!1));case 7:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()},je=function(e){for(var t,n,r,a=e.showSiteName,c=void 0!==a&&a,l=Object(w.c)(),s=Object(S.a)(l,1)[0],d=Object(E.f)(),u=Object(K.a)(),j=te((function(e){return e.titles.genres})),A=ee(),m=[],p=(new Date).getFullYear(),b=1888;b<=p;b++)m.push(b);var x=Object(i.useState)({q:null!==(t=s.get("q"))&&void 0!==t?t:"",genre:null!==(n=s.get("genre"))&&void 0!==n?n:"",year:null!==(r=s.get("year"))&&void 0!==r?r:""}),h=Object(S.a)(x,2),V=h[0],f=h[1];return Object(G.jsxs)(L.a,{sx:{backgroundColor:Object(o.a)(u.palette.grey[900],.7),width:"100%",display:"flex",flexDirection:"column",alignItems:"center",boxShadow:3,borderRadius:10,mt:2,transition:"all 1s",p:5},children:[c&&Object(G.jsxs)(F.a,{component:"h1",variant:"h2",align:"center",color:"text.primary",display:"inline",children:["Movie"," ",Object(G.jsx)(L.a,{color:"primary.main",display:"inline",children:"Lens"})]}),Object(G.jsx)(L.a,{sx:{mt:3,width:1},children:Object(G.jsxs)(T.a,{container:!0,spacing:2,children:[Object(G.jsx)(T.a,{item:!0,xs:12,sm:6,children:Object(G.jsx)(_.a,{id:"movie-title-ac",value:V.q,onChange:function(e){f(Object(Q.a)(Object(Q.a)({},V),{},{q:e.target.value}))},fullWidth:!0,placeholder:"Type a movie title",variant:"outlined"})}),Object(G.jsx)(T.a,{item:!0,xs:12,sm:2,children:Object(G.jsxs)($.a,{id:"movie-genre-select",value:V.genre,displayEmpty:!0,fullWidth:!0,onChange:function(e){f(Object(Q.a)(Object(Q.a)({},V),{},{genre:e.target.value}))},renderValue:function(e){return e||"Genre"},children:[Object(G.jsx)(I.a,{value:"",children:Object(G.jsx)("em",{children:"None"})}),j.map((function(e){return Object(G.jsx)(I.a,{value:e.id,children:e.displayName},e.id)}))]})}),Object(G.jsx)(T.a,{item:!0,xs:12,sm:2,children:Object(G.jsxs)($.a,{id:"movie-min-year-select",value:V.year,displayEmpty:!0,fullWidth:!0,onChange:function(e){var t=e.target.value;f(Object(Q.a)(Object(Q.a)({},V),{},{year:t?+t:""}))},renderValue:function(e){return e||"Year"},children:[Object(G.jsx)(I.a,{value:"",children:Object(G.jsx)("em",{children:"None"})}),m.map((function(e){return Object(G.jsx)(I.a,{value:e,children:e},e)}))]})}),Object(G.jsx)(T.a,{item:!0,xs:12,sm:2,children:Object(G.jsx)(D.a,{type:"submit",variant:"contained",fullWidth:!0,sx:{py:2},onClick:function(){V.q&&(A(de(V)),d("/search?q=".concat(V.q,"&genre=").concat(V.genre,"&year=").concat(V.year)))},children:"Search"})})]})})]})},Ae=n(246),me=n(248),pe=n(247),be="data:image/png;base64,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",xe=function(e){var t,n=e.title;return Object(G.jsx)(T.a,{item:!0,sm:4,xs:6,md:3,children:Object(G.jsx)(w.b,{to:"/title/".concat(n.id),children:Object(G.jsxs)(Ae.a,{sx:{height:"100%",display:"flex",flexDirection:"column"},children:[Object(G.jsx)(pe.a,{component:"img",image:null!==(t=n.image)&&void 0!==t?t:be,alt:"random",sx:{height:"250px"}}),Object(G.jsx)(me.a,{sx:{flexGrow:1},children:Object(G.jsxs)(F.a,{gutterBottom:!0,variant:"h6",children:[n.title," ",n.description]})})]})})},n.id)},he=function(e){var t=e.titles,n=e.sectionTitle;return Object(G.jsxs)(L.a,{sx:{py:1,mt:2,width:"100%",display:"flex",flexDirection:"column",alignItems:"center",boxShadow:3},children:[n&&Object(G.jsx)(W.a,{sx:{p:0,m:0},disableGutters:!0,children:Object(G.jsx)(F.a,{component:"h3",variant:"h3",align:"left",pl:0,color:"text.primary",gutterBottom:!0,children:n})}),Object(G.jsx)(T.a,{container:!0,spacing:2,children:t&&t.map((function(e){return Object(G.jsx)(xe,{title:e},e.id)}))})]})},Ve=function(e){var t,n=e.title;return n&&Object(G.jsx)(G.Fragment,{children:Object(G.jsxs)(T.a,{container:!0,spacing:{xs:0,sm:2},sx:{ml:0},direction:"row",justifyContent:"center",alignItems:"center",children:[Object(G.jsx)(T.a,{item:!0,xs:12,sm:6,children:Object(G.jsx)(pe.a,{component:"img",image:null!==(t=null===n||void 0===n?void 0:n.image)&&void 0!==t?t:be,alt:"random",sx:{height:"450px"}})}),Object(G.jsx)(T.a,{item:!0,xs:12,sm:6,children:Object(G.jsxs)(W.a,{maxWidth:"sm",sx:{opacity:.8,pt:{xs:2}},children:[(null===n||void 0===n?void 0:n.directors)&&Object(G.jsxs)(F.a,{component:"p",variant:"subtitle2",align:"left",color:"text.primary",paragraph:!0,children:["Direction: ",null===n||void 0===n?void 0:n.directors]}),(null===n||void 0===n?void 0:n.stars)&&Object(G.jsxs)(F.a,{component:"p",variant:"subtitle2",align:"left",color:"text.primary",paragraph:!0,children:["Cast: ",null===n||void 0===n?void 0:n.stars]}),(null===n||void 0===n?void 0:n.genres)&&Object(G.jsxs)(F.a,{component:"p",variant:"subtitle2",align:"left",color:"text.primary",paragraph:!0,children:["Genre: ",null===n||void 0===n?void 0:n.genres]}),(null===n||void 0===n?void 0:n.runtime)&&Object(G.jsxs)(F.a,{component:"p",variant:"subtitle2",align:"left",color:"text.primary",paragraph:!0,children:["Running time: ",null===n||void 0===n?void 0:n.runtime," mins"]}),(null===n||void 0===n?void 0:n.year)&&Object(G.jsxs)(F.a,{component:"p",variant:"subtitle2",align:"left",color:"text.primary",paragraph:!0,children:["Country: ",null===n||void 0===n?void 0:n.year]}),(null===n||void 0===n?void 0:n.rating)&&Object(G.jsxs)(F.a,{component:"p",variant:"subtitle2",align:"left",color:"text.primary",paragraph:!0,children:["Rating: ",null===n||void 0===n?void 0:n.rating]}),(null===n||void 0===n?void 0:n.countries)&&Object(G.jsxs)(F.a,{component:"p",variant:"subtitle2",align:"left",color:"text.primary",paragraph:!0,children:["Country: ",null===n||void 0===n?void 0:n.countries]}),(null===n||void 0===n?void 0:n.plot)&&Object(G.jsxs)(F.a,{component:"p",variant:"subtitle2",align:"left",color:"text.primary",paragraph:!0,children:["Plot: ",null===n||void 0===n?void 0:n.plot]})]})})]})})},fe=function(){return Object(G.jsxs)(W.a,{sx:{width:"100%",display:"flex",flexDirection:"column",flexWrap:"wrap",alignItems:"center",justifyContent:"center",position:"absolute",transform:"translateY(50%)"},children:[Object(G.jsx)(R.a,{}),Object(G.jsx)(je,{showSiteName:!0})]})},Oe=function(){var e=te((function(e){return e.user.favourites})),t=te((function(e){return e.titles.titles})),n=te((function(e){return e.titles.loading})),r=ee();return Object(i.useEffect)((function(){r(ue(e))}),[r,e]),Object(G.jsx)("main",{className:"search-container",children:Object(G.jsxs)(W.a,{sx:{width:"100%",display:"flex",flexDirection:"column",flexFlow:"column",flexWrap:"wrap",alignItems:"center",justifyContent:"start"},children:[Object(G.jsx)(R.a,{}),!n&&Object(G.jsx)(he,{titles:t,sectionTitle:"Favourites"})]})})},ge=function(){var e=Object(w.c)(),t=Object(S.a)(e,1)[0],n=te((function(e){return e.titles.titles})),r=te((function(e){return e.titles.loading})),a=ee();return Object(i.useEffect)((function(){var e,n;a(de({q:t.get("q"),genre:null!==(e=t.get("genre"))&&void 0!==e?e:"",year:null!==(n=t.get("year"))&&void 0!==n?n:""}))}),[a,t]),Object(G.jsx)("main",{className:"search-container",children:Object(G.jsxs)(W.a,{sx:{width:"100%",display:"flex",flexDirection:"column",flexFlow:"column",flexWrap:"wrap",alignItems:"center",justifyContent:"start"},children:[Object(G.jsx)(R.a,{}),Object(G.jsx)(je,{}),!r&&Object(G.jsx)(he,{titles:n,sectionTitle:"Search results"})]})})},qe=n(234),ve=n(127),ye=n.n(ve),we=n(128),Ee=n.n(we),We=b.actions,Ne=function(){var e=Object(E.g)().id,t=Object(K.a)(),n=te((function(e){return e.titles.title})),r=te((function(e){return e.user.favourites})),a=te((function(e){return e.user.watchLater})),c=ee(),l=function(){var e;n&&c((e=n.id,function(){var t=Object(re.a)(ie.a.mark((function t(n,i){return ie.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n(We.setFavourites(e));case 1:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()))},s=function(){var e;n&&c((e=n.id,function(){var t=Object(re.a)(ie.a.mark((function t(n,i){return ie.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n(We.setWatchLater(e));case 1:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()))};return Object(i.useEffect)((function(){var t;c((function(e,t){e(oe.reset())})),c((t=e,function(){var e=Object(re.a)(ie.a.mark((function e(n,i){var r,a,c;return ie.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if((null===(r=i().titles)||void 0===r||null===(a=r.title)||void 0===a?void 0:a.id)===t){e.next=7;break}return n(oe.setLoading(!0)),e.next=4,se.getTitle(t);case 4:c=e.sent,n(oe.setTitle(c)),n(oe.setLoading(!1));case 7:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()))}),[c,e]),n&&Object(G.jsxs)("main",{children:[Object(G.jsx)(R.a,{}),Object(G.jsxs)(W.a,{sx:{backgroundColor:Object(o.a)(t.palette.grey[900],.7),width:"100%",py:1},children:[Object(G.jsx)(T.a,{container:!0,direction:"row",justifyContent:"center",alignItems:"center",children:Object(G.jsx)(T.a,{item:!0,xs:12,md:12,sm:12,children:Object(G.jsxs)(F.a,{component:"h4",variant:"h4",align:"left",color:"text.primary",gutterBottom:!0,children:[null===n||void 0===n?void 0:n.title," ",(null===n||void 0===n?void 0:n.year)&&"(".concat(null===n||void 0===n?void 0:n.year,")")," ",(null===n||void 0===n?void 0:n.rating)&&Object(G.jsx)(qe.a,{name:"half-rating-read",defaultValue:(null===n||void 0===n?void 0:n.rating)/2,precision:.5,readOnly:!0}),r.includes(n.id)?Object(G.jsx)(J.a,{sx:{ml:2},onClick:l,color:"primary"}):Object(G.jsx)(ye.a,{sx:{ml:2},onClick:l,color:"primary"}),a.includes(n.id)?Object(G.jsx)(M.a,{sx:{ml:1},onClick:s,color:"primary"}):Object(G.jsx)(Ee.a,{sx:{ml:1},onClick:s,color:"primary"})]})})}),Object(G.jsxs)(T.a,{container:!0,spacing:2,direction:"row",justifyContent:"center",alignItems:"center",children:[Object(G.jsx)(T.a,{item:!0,xs:12,sm:12,md:12,lg:6,children:Object(G.jsx)(Ve,{title:n})}),(null===n||void 0===n?void 0:n.trailer)&&Object(G.jsx)(T.a,{item:!0,xs:12,sm:12,md:12,lg:6,children:Object(G.jsx)(Z,{url:null===n||void 0===n?void 0:n.trailer})})]})]})]})},ke=function(){var e=te((function(e){return e.user.watchLater})),t=te((function(e){return e.titles.titles})),n=te((function(e){return e.titles.loading})),r=ee();return Object(i.useEffect)((function(){r(ue(e))}),[r,e]),Object(G.jsx)("main",{className:"search-container",children:Object(G.jsxs)(W.a,{sx:{width:"100%",display:"flex",flexDirection:"column",flexFlow:"column",flexWrap:"wrap",alignItems:"center",justifyContent:"start"},children:[Object(G.jsx)(R.a,{}),!n&&Object(G.jsx)(he,{titles:t,sectionTitle:"Watch later"})]})})};var Ce=function(){var e=te((function(e){return e.titles.loading}));return Object(G.jsxs)(W.a,{sx:{width:"100%",py:1,position:"relative"},children:[Object(G.jsx)(k.a,{direction:"down",in:e,mountOnEnter:!0,unmountOnExit:!0,children:Object(G.jsx)(N.a,{sx:{position:"fixed",top:0,left:0,width:"100%",color:"primary"},spacing:2,children:Object(G.jsx)(C.a,{color:"primary"})})}),Object(G.jsxs)(w.a,{children:[Object(G.jsx)(z,{}),Object(G.jsxs)(E.c,{children:[Object(G.jsx)(E.a,{path:"/",element:Object(G.jsx)(fe,{})}),Object(G.jsx)(E.a,{path:"/search",element:Object(G.jsx)(ge,{})}),Object(G.jsx)(E.a,{path:"/title/:id",element:Object(G.jsx)(Ne,{})}),Object(G.jsx)(E.a,{path:"/favourites",element:Object(G.jsx)(Oe,{})}),Object(G.jsx)(E.a,{path:"/watch-later",element:Object(G.jsx)(ke,{})})]})]})]})},Re=(n(168),Object(d.a)({palette:{mode:"dark",text:{primary:"#ffffff",secondary:Object(o.a)("#fff",.7)},primary:{main:"#ffb43a"}},typography:{fontFamily:'"Source Sans Pro"',fontSize:14,fontWeightLight:300,fontWeightRegular:400,fontWeightMedium:500}}));c.a.render(Object(G.jsx)(r.a.StrictMode,{children:Object(G.jsx)(l.a,{store:v,children:Object(G.jsx)(s.a,{loading:null,persistor:y,children:Object(G.jsx)(u.a,{theme:Re,children:Object(G.jsx)(Ce,{})})})})}),document.getElementById("root"))}},[[169,1,2]]]);
//# sourceMappingURL=main.72b91b90.chunk.js.map