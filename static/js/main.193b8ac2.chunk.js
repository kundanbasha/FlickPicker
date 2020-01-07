(this.webpackJsonptask=this.webpackJsonptask||[]).push([[0],{136:function(e,n,t){e.exports=t(228)},141:function(e,n,t){},146:function(e,n,t){},228:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),o=t(26),i=t.n(o),c=(t(141),t(81)),u=t(35),l=t(41),m=(t(146),t(24)),s=t(119),f=t.n(s),d=t(131),h=t(89),p=t(27),g="FETCH_MOVIES",b={isLoaded:!0,movies:[],gotError:!1,errorMessage:"",page:1},v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case g:return Object(p.a)({},e,{isLoaded:!1,gotError:!1,movies:1==n.page.p?[]:e.movies,page:n.page.p});case"MOVIES_FETCHED":return Object(p.a)({},e,{movies:[].concat(Object(h.a)(e.movies),Object(h.a)(n.movies)),isLoaded:!0});case"FETCH_MOVIES_FAIL":return Object(p.a)({},e,{isLoaded:!0,gotError:!0,errorMessage:n.error});default:return e}},E="FETCH_MOVIE_DETAILS",O={isLoaded:!0,movie:[],gotError:!1,errorMessage:""},_=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case E:return Object(p.a)({},e,{isLoaded:!1,gotError:!1});case"MOVIE_DETAILS_FETCHED":return Object(p.a)({},e,{movie:n.movie,isLoaded:!0});case"FETCH_MOVIE_DETAILS_FAIL":return Object(p.a)({},e,{isLoaded:!0,gotError:!0,errorMessage:n.error});default:return e}},j=Object(m.c)({moviesReducer:v,movieDetailsReducer:_}),w=t(19),x=t.n(w),y=t(21),k=t(83),C=t(84),M=t.n(C),L=function(e,n,t){var r="".concat("https://akrp-server.herokuapp.com/movies").concat(n);switch(e){case"POST":return M.a.get(r,t);default:return M.a.get(r,{params:t})}},S=function(e){return{type:g,page:e}},z=function(e){return{type:"MOVIES_FETCHED",movies:e}},T=function(e){return{type:"FETCH_MOVIES_FAIL",error:e}},I=x.a.mark(R),P=x.a.mark(A);function R(e){var n;return x.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(y.b)(L,"GET","",e.page);case 3:if(200!==(n=t.sent).status){t.next=9;break}return t.next=7,Object(y.d)(z(n.data));case 7:t.next=11;break;case 9:return t.next=11,T({code:500,message:"Something went wrong"});case 11:t.next=17;break;case 13:return t.prev=13,t.t0=t.catch(0),t.next=17,T({code:500,message:"Something went wrong"});case 17:case"end":return t.stop()}}),I,null,[[0,13]])}function A(){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(y.e)(g,R);case 2:case"end":return e.stop()}}),P)}var F=function(e){return{type:"MOVIE_DETAILS_FETCHED",movie:e}},H=function(e){return{type:"FETCH_MOVIE_DETAILS_FAIL",error:e}},D=x.a.mark(V),W=x.a.mark(B);function V(e){var n,t;return x.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,Object(y.b)(L,"GET","/".concat(e.id));case 3:if(200!==(n=r.sent).status){r.next=8;break}return t=n.data[0],r.next=8,Object(y.d)(F(t));case 8:r.next=14;break;case 10:return r.prev=10,r.t0=r.catch(0),r.next=14,Object(y.d)(H("Something went wrong"));case 14:case"end":return r.stop()}}),D,null,[[0,10]])}function B(){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(y.e)(E,V);case 2:case"end":return e.stop()}}),W)}var J=x.a.mark(N);function N(){var e;return x.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=[A,B],n.next=3,Object(y.a)(Object(k.map)(Object(k.unary)(y.c),e));case 3:case"end":return n.stop()}}),J)}var G=function(){var e=[],n=Object(d.a)();e.push(n),e.push(f.a);var t=Object(m.e)(j,m.a.apply(void 0,e));return t.runSaga=n.run,t.runSaga(N),t},U=t(130),$=t(12),q=t(13);function K(){var e=Object($.a)(["\n  display: flex;\n  flex-direction: ",";\n  margin-top: ",";\n  margin-right: ",";\n  margin-bottom: ",";\n  margin-left: ",";\n  padding-top: ",";\n  padding-right: ",";\n  padding-bottom: ",";\n  padding-left: ",";\n"]);return K=function(){return e},e}var Q=q.a.div(K(),(function(e){return e.column?"column":"row"}),(function(e){return e.mt?e.mt+"rem":"0rem"}),(function(e){return e.mr?e.mr+"rem":"0rem"}),(function(e){return e.mb?e.mb+"rem":"0rem"}),(function(e){return e.ml?e.ml+"rem":"0rem"}),(function(e){return e.pt?e.pt+"rem":"0rem"}),(function(e){return e.pr?e.pr+"rem":"0rem"}),(function(e){return e.pb?e.pb+"rem":"0rem"}),(function(e){return e.pl?e.pl+"rem":"0rem"}));function X(){var e=Object($.a)(["\n  font-size: 1rem;\n  text-align: center;\n  margin-top: ",";\n  margin-right: ",";\n  margin-bottom: ",";\n  margin-left: ",";\n  padding-top: ",";\n  padding-right: ",";\n  padding-bottom: ",";\n  padding-left: ",";\n"]);return X=function(){return e},e}var Y=q.a.h2(X(),(function(e){return e.mt?e.mt+"rem":"0rem"}),(function(e){return e.mr?e.mr+"rem":"0rem"}),(function(e){return e.mb?e.mb+"rem":"0rem"}),(function(e){return e.ml?e.ml+"rem":"0rem"}),(function(e){return e.pt?e.pt+"rem":"0rem"}),(function(e){return e.pr?e.pr+"rem":"0rem"}),(function(e){return e.pb?e.pb+"rem":"0rem"}),(function(e){return e.pl?e.pl+"rem":"0rem"}));function Z(){var e=Object($.a)(["\n  font-size: 1rem;\n  margin-top: ",";\n  margin-right: ",";\n  margin-bottom: ",";\n  margin-left: ",";\n  padding-top: ",";\n  padding-right: ",";\n  padding-bottom: ",";\n  padding-left: ",";\n"]);return Z=function(){return e},e}var ee=q.a.p(Z(),(function(e){return e.mt?e.mt+"rem":"0rem"}),(function(e){return e.mr?e.mr+"rem":"0rem"}),(function(e){return e.mb?e.mb+"rem":"0rem"}),(function(e){return e.ml?e.ml+"rem":"0rem"}),(function(e){return e.pt?e.pt+"rem":"0rem"}),(function(e){return e.pr?e.pr+"rem":"0rem"}),(function(e){return e.pb?e.pb+"rem":"0rem"}),(function(e){return e.pl?e.pl+"rem":"0rem"})),ne="375px",te="425px",re="768px",ae="1024px",oe="1440px",ie="2560px",ce={mobileS:"(min-width: ".concat("320px",")"),mobileM:"(min-width: ".concat(ne,")"),mobileL:"(min-width: ".concat(te,")"),tablet:"(min-width: ".concat(re,")"),laptop:"(min-width: ".concat(ae,")"),laptopL:"(min-width: ".concat(oe,")"),desktop:"(min-width: ".concat(ie,")"),desktopL:"(min-width: ".concat(ie,")")};function ue(){var e=Object($.a)(["\n  padding: 1.5rem;\n  flex-direction: column;\n\n  @media "," {\n    flex-direction: row;\n  }\n"]);return ue=function(){return e},e}function le(){var e=Object($.a)(["\n  margin-left: 0rem;\n\n  @media "," {\n    margin-left: ",";\n  }\n"]);return le=function(){return e},e}function me(){var e=Object($.a)(["\n  margin: 1.5rem 1.5rem 0rem 1.5rem;\n  margin-top: ",";\n"]);return me=function(){return e},e}function se(){var e=Object($.a)(["\n  background-image: url(https://image.tmdb.org/t/p/original",");\n  background-repeat: no-repeat;\n  background-size: zoom;\n  background-position: center;\n  height: ","px;\n"]);return se=function(){return e},e}function fe(){var e=Object($.a)(["\n  position: absolute;\n  align-items: center;\n  padding-left: 1.5rem;\n  cursor: pointer;\n  z-index: 1;\n  width: 100%;\n  height: 64px;\n  background: rgba(20, 20, 20);\n\n  @media "," {\n    background: transparent;\n  }\n"]);return fe=function(){return e},e}function de(){var e=Object($.a)(["\n  color: ",";\n  font-weight: ",";\n  line-height: 1.35;\n"]);return de=function(){return e},e}function he(){var e=Object($.a)(["\n  color: white;\n  text-align: left;\n  text-transform: uppercase;\n  font-size: 2rem;\n  margin: 1.5rem 1.5rem 0rem 1.5rem;\n"]);return he=function(){return e},e}function pe(){var e=Object($.a)(["\n  max-width: 100%;\n  color: #999;\n  line-height: 1.5;\n  @media "," {\n    max-width: ","px;\n  }\n"]);return pe=function(){return e},e}function ge(){var e=Object($.a)(["\n  background: rgba(20, 20, 20, 0.8);\n  position: absolute;\n  padding-top: 3rem;\n  padding-right: 1rem;\n  height: 100vh;\n  overflow: auto;\n\n  @media "," {\n    background: linear-gradient(\n      to right,\n      #141414 40%,\n      rgba(20, 20, 20, 0.9) 76%,\n      rgba(20, 20, 20, 0.6) 88%,\n      rgba(20, 20, 20, 0)\n    );\n  }\n"]);return ge=function(){return e},e}function be(){var e=Object($.a)(["\n  background-color: #141414;\n  background-image: url(https://image.tmdb.org/t/p/original",");\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: start;\n  height: 100vh;\n  overflow: auto;\n"]);return be=function(){return e},e}var ve=Object(q.a)(Q)(be(),(function(e){return e.poster})),Ee=Object(q.a)(Q)(ge(),ce.mobileL),Oe=Object(q.a)(ee)(pe(),ce.mobileL,window.innerWidth/2),_e=Object(q.a)(Y)(he()),je=Object(q.a)(ee)(de(),(function(e){return e.color?e.color:"#999"}),(function(e){return e.weight?e.weight:"normal"})),we=Object(q.a)(Q)(fe(),ce.mobileL),xe=(Object(q.a)(Q)(se(),(function(e){return e.poster}),window.innerHeight-200),Object(q.a)(Q)(me(),(function(e){return e.mt?e.mt:"inherit"}))),ye=Object(q.a)(Q)(le(),ce.mobileL,(function(e){return e.ml?e.ml+"rem":"inherit"})),ke=Object(q.a)(Q)(ue(),ce.mobileL),Ce=a.a.memo((function(e){var n=e.match,t=e.history,o=Object(l.c)(),i=Object(l.d)((function(e){return e.movieDetailsReducer})),c=i.movie,u=i.isLoaded;Object(r.useEffect)((function(){var e;o((e=n.params.id,{type:E,id:e}))}),[]);return u?a.a.createElement(ve,{column:!0,poster:c.poster_path},a.a.createElement(we,{onClick:function(){return t.push("/movies")}},a.a.createElement(U.a,{color:"#fff"})),a.a.createElement(Ee,{column:!0},a.a.createElement(_e,null,c.title),a.a.createElement(xe,{mt:"0.5"},a.a.createElement(je,{color:"#46D369",weight:600},c.vote_average),a.a.createElement(je,{ml:"1.5",color:"#fff",weight:600},c.release_date&&c.release_date.split("-")[0]),a.a.createElement(je,{ml:"1.5",color:"#fff",weight:600},c.runtime+"m")),a.a.createElement(Oe,{mt:"1.5",ml:"1.5",mr:"1.5"},c.overview),a.a.createElement(ke,null,a.a.createElement(ye,{column:!0},a.a.createElement(Q,{column:!0,mb:"1.5"},a.a.createElement(je,null,"Release Date"),a.a.createElement(je,{color:"#fff"},c.release_date)),a.a.createElement(Q,{column:!0,mb:"1.5"},a.a.createElement(je,null,"Cast"),a.a.createElement(je,{color:"#fff"},"Iron Man"),a.a.createElement(je,{color:"#fff"},"Thor"),a.a.createElement(je,{color:"#fff"},"Hulk"),a.a.createElement(je,{color:"#fff"},"Spiderman")),a.a.createElement(Q,{column:!0,mb:"1.5"},a.a.createElement(je,null,"Writers"),a.a.createElement(je,{color:"#fff"},"Christopher Nolan"),a.a.createElement(je,{color:"#fff"},"James Cameron"))),a.a.createElement(ye,{column:!0,ml:"8"},a.a.createElement(Q,{column:!0,mb:"1.5"},a.a.createElement(je,null,"Genres"),function(e){var n=[];return e&&(console.log("check genres",JSON.stringify(e)),n=JSON.parse(e.replace(/\'/g,'"')).map((function(e){return a.a.createElement(je,{key:e.id,color:"#fff"},e.name)}))),n}(c.genres)),a.a.createElement(Q,{column:!0,mb:"1.5"},a.a.createElement(je,null,"Type"),a.a.createElement(je,{color:"#fff"},"Action"))),a.a.createElement(ye,{column:!0,ml:"8"},a.a.createElement(Q,{column:!0,mb:"1.5"},a.a.createElement(je,null,"Vote Count"),a.a.createElement(je,{color:"#fff"},c.vote_count)),a.a.createElement(Q,{column:!0,mb:"1.5"},a.a.createElement(je,null,"Maturity Ratings"),a.a.createElement(je,{color:"#fff"},"13+")))))):a.a.createElement("div",null,"loading component....")})),Me=function(){return a.a.createElement("div",null,"No page available with this router")},Le=t(122),Se=t(123),ze=t(132),Te=t(124),Ie=t(36),Pe=t(133),Re=t(42);function Ae(){var e=Object($.a)(["\n  font-size: 0.725rem;\n  color: rgba(255, 255, 255, 0.65);\n  line-height: 1.5;\n"]);return Ae=function(){return e},e}function Fe(){var e=Object($.a)(["\n  font-size: 0.8rem;\n  font-weight: 600;\n  text-align: left;\n  color: white;\n  line-height: 1.5;\n"]);return Fe=function(){return e},e}function He(){var e=Object($.a)(["\n  align-items: flex-start;\n  height: 70px;\n"]);return He=function(){return e},e}function De(){var e=Object($.a)(["\n  height: 100%;\n  width: 100%;\n"]);return De=function(){return e},e}function We(){var e=Object($.a)(["\n  height: 230px;\n"]);return We=function(){return e},e}function Ve(){var e=Object($.a)(["\n  height: 300px;\n  width: 100%;\n  display: flex;\n  overflow: hidden;\n  cursor: pointer;\n  trasition: transform 1s ease-out;\n\n  &:hover {\n    transform: scale(1.15);\n    z-index: 1;\n  }\n"]);return Ve=function(){return e},e}var Be=Object(q.a)(Q)(Ve()),Je=Object(q.a)(Q)(We()),Ne=q.a.img(De()),Ge=Object(q.a)(Q)(He()),Ue=Object(q.a)(Y)(Fe()),$e=q.a.p(Ae()),qe=Object(u.f)((function(e){var n=e.original_title,t=e.release_date,r=e.poster_path,o=e._id,i=e.history;return a.a.createElement(Be,{column:!0,onClick:function(){return i.push("/movies/".concat(o))}},a.a.createElement(Je,null,a.a.createElement(Ne,{src:"https://image.tmdb.org/t/p/original".concat(r)})),a.a.createElement(Ge,{column:!0},a.a.createElement(Ue,null,n),a.a.createElement($e,null,t)))}));function Ke(){var e=Object($.a)(["\n  font-size: 1.5rem;\n  padding-left: 1.25rem;\n  color: #fff;\n\n  @media "," {\n    padding-left: 1.85rem;\n  }\n"]);return Ke=function(){return e},e}function Qe(){var e=Object($.a)(["\n  background: #242424;\n  height: 64px;\n  margin-bottom: 12px;\n  align-items: center;\n  width: 100%;\n"]);return Qe=function(){return e},e}var Xe=Object(q.a)(Q)(Qe()),Ye=Object(q.a)(Y)(Ke(),ce.mobileL),Ze=function(){return a.a.createElement(Xe,null,a.a.createElement(Ye,null,"Flick Picker"))};function en(){var e=Object($.a)(["\n  margin-left: 0.725rem;\n\n  @media "," {\n    margin-left: 1.5rem;\n  }\n"]);return en=function(){return e},e}function nn(){var e=Object($.a)(["\n  background-color: #141414;\n"]);return nn=function(){return e},e}var tn=Object(q.a)(Q)(nn()),rn=Object(q.a)(Q)(en(),ce.mobileL),an=function(e){function n(e,t){var r;return Object(Le.a)(this,n),(r=Object(ze.a)(this,Object(Te.a)(n).call(this,e,t)))._loadMoreCells=function(e){var n=e.stopIndex,t=r.props,a=t.movies,o=t.fetchMoviesAction,i=t.page;n>42*i-24&&n<=a.length&&o({p:i+1})},r._isRowLoaded=function(e){var n=e.index;return!!r.props.movies[n]},r._resetList=function(){var e=[25,50,75,100];r.context.list.forEach((function(n){n.size=e[Math.floor(Math.random()*e.length)]})),r._cache.clearAll(),r._resetCellPositioner(),r._masonry.clearCellPositions()},r._columnCount=0,r._renderInfiniteLoaderRef=null,r._cache=new Re.c({defaultHeight:250,defaultWidth:190,fixedWidth:!0}),r.state={columnWidth:190,height:window.innerHeight-76,gutterSize:10,overscanByPixels:0,windowScrollerEnabled:!1,hasMore:!0},r._cellRenderer=r._cellRenderer.bind(Object(Ie.a)(r)),r._onResize=r._onResize.bind(Object(Ie.a)(r)),r._renderAutoSizer=r._renderAutoSizer.bind(Object(Ie.a)(r)),r._renderMasonry=r._renderMasonry.bind(Object(Ie.a)(r)),r._setMasonryRef=r._setMasonryRef.bind(Object(Ie.a)(r)),r}return Object(Pe.a)(n,e),Object(Se.a)(n,[{key:"componentDidMount",value:function(){(0,this.props.fetchMoviesAction)({p:1})}},{key:"componentDidUpdate",value:function(e,n){var t=e.movies;if(t!==this.props.movies){t.length;this._calculateColumnCount(),this._resetCellPositioner(),this._masonry.recomputeCellPositions()}}},{key:"render",value:function(){var e,n=this.state,t=(n.columnWidth,n.height),r=(n.gutterSize,n.overscanByPixels);return e=n.windowScrollerEnabled?a.a.createElement(Re.e,{overscanByPixels:r},this._renderAutoSizer):this._renderAutoSizer({height:t}),a.a.createElement(tn,{column:!0},a.a.createElement(Ze,null),a.a.createElement(tn,null,a.a.createElement(rn,null),e))}},{key:"_calculateColumnCount",value:function(){var e=this.state,n=e.columnWidth,t=e.gutterSize;this._columnCount=Math.floor(this._width/(n+t))}},{key:"_cellRenderer",value:function(e){var n=e.index,t=e.key,r=e.parent,o=e.style,i=this.state.columnWidth,c=this.props.movies[n];return a.a.createElement(Re.b,{cache:this._cache,index:n,key:t,parent:r},a.a.createElement("div",{className:"Cell",style:Object(p.a)({},o,{width:i,height:300})},c?a.a.createElement(a.a.Fragment,null,a.a.createElement(qe,Object.assign({key:c._id,index:n},c))):a.a.createElement("div",{style:{height:"300px",width:"100%"}},"loading.........")))}},{key:"_initCellPositioner",value:function(){if("undefined"===typeof this._cellPositioner){var e=this.state,n=e.columnWidth,t=e.gutterSize;this._cellPositioner=Object(Re.f)({cellMeasurerCache:this._cache,columnCount:this._columnCount,columnWidth:n,spacer:t})}}},{key:"_onResize",value:function(e){var n=e.width;this._width=n,this._calculateColumnCount(),this._resetCellPositioner(),this._masonry.recomputeCellPositions()}},{key:"_renderAutoSizer",value:function(e){var n=e.height,t=e.scrollTop;this._height=n,this._scrollTop=t;var r=this.state.overscanByPixels;return a.a.createElement(Re.a,{disableHeight:!0,height:n,onResize:this._onResize,overscanByPixels:r,scrollTop:this._scrollTop},this._renderMasonry)}},{key:"_renderMasonry",value:function(e){var n=this,t=e.width,r=this.props.movies;this._width=t,this._calculateColumnCount(),this._initCellPositioner();var o=this.state,i=o.height,c=o.overscanByPixels,u=o.windowScrollerEnabled;return a.a.createElement(Re.d,{autoHeight:u,cellCount:r.length||1e6,onCellsRendered:function(e){return n._loadMoreCells(e)},cellMeasurerCache:this._cache,cellPositioner:this._cellPositioner,cellRenderer:this._cellRenderer,height:u?this._height:i,overscanByPixels:c,ref:this._setMasonryRef,scrollTop:this._scrollTop,width:t-24})}},{key:"_resetCellPositioner",value:function(){var e=this.state,n=e.columnWidth,t=e.gutterSize;this._cellPositioner.reset({columnCount:this._columnCount,columnWidth:n,spacer:t})}},{key:"_setMasonryRef",value:function(e){this._masonry=e}}]),n}(a.a.Component);var on=Object(l.b)((function(e){var n=e.moviesReducer;return{movies:n.movies,isLoaded:n.isLoaded,page:n.page}}),(function(e){return{fetchMoviesAction:Object(m.b)(S,e)}}))(an),cn=G();var un=function(){return a.a.createElement(l.a,{store:cn},a.a.createElement(c.a,null,a.a.createElement(u.c,null,a.a.createElement(u.a,{path:"/",component:on,exact:!0}),a.a.createElement(u.a,{path:"/movies",component:on,exact:!0}),a.a.createElement(u.a,{path:"/movies/:id",component:Ce}),a.a.createElement(u.a,{path:"*",component:Me}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(a.a.createElement(un,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[136,1,2]]]);
//# sourceMappingURL=main.193b8ac2.chunk.js.map