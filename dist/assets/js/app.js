!function(){var e,t={591:function(e,t,s){"use strict";var o=s(379),r=s.n(o),n=s(795),i=s.n(n),a=s(569),_=s.n(a),l=s(565),c=s.n(l),u=s(216),v=s.n(u),m=s(589),d=s.n(m),p={};p.styleTagTransform=d(),p.setAttributes=c(),p.insert=_().bind(null,"head"),p.domAPI=i(),p.insertStyleElement=v(),r()({container:"container","icon-reg":"icon-reg","icon-brand":"icon-brand","icon-solid":"icon-solid",header:"header",other:"other",navigate:"navigate",header__nav:"header__nav",header__content:"header__content",logo:"logo",logo__span:"logo__span",header__items:"header__items",header__list:"header__list",header__link:"header__link",header__icon:"header__icon","header__list-nth2":"header__list-nth2",header__title:"header__title",header__descr:"header__descr",header__buttons:"header__buttons",header__watch:"header__watch",header__more:"header__more",header__balls:"header__balls",header__year:"header__year",header__stars:"header__stars",header__rating:"header__rating",header__btn:"header__btn",bars:"bars",header__abs:"header__abs",active:"active",anime:"anime",circ:"circ",circle:"circle",main:"main",trend__tv:"trend__tv","trend__tv-title":"trend__tv-title","trend__tv-slider":"trend__tv-slider","swiper-button-next":"swiper-button-next","swiper-slide":"swiper-slide",trend__movies:"trend__movies","trend__movies-slider":"trend__movies-slider",popular__genres:"popular__genres","trend__movies-link":"trend__movies-link","popular__genres-grid":"popular__genres-grid","popular__genres-item":"popular__genres-item","popular__genres-span":"popular__genres-span","popular__actors-item":"popular__actors-item",popular__actors:"popular__actors","popular__actors-span":"popular__actors-span",coming__soon:"coming__soon",movie__item:"movie__item","coming__soon-block":"coming__soon-block","coming__block-neon":"coming__block-neon","coming__soon-img":"coming__soon-img",bg:"bg","coming__soon-span":"coming__soon-span",some__item:"some__item",some__img:"some__img",some__rating:"some__rating",some__title:"some__title",pagination:"pagination",pagination__link:"pagination__link",main__block:"main__block",form__main:"form__main",header__input:"header__input",error:"error",main__solo:"main__solo",solo__img:"solo__img",solo__content:"solo__content",solo__link:"solo__link",solo__facts:"solo__facts",solo__images:"solo__images",solo__reviews:"solo__reviews",solo__title2:"solo__title2",solo__items:"solo__items",review__item:"review__item",review__descr:"review__descr",undefined:"undefined",footer:"footer",footer__content:"footer__content",footer__lists:"footer__lists",footer__list:"footer__list",footer__link:"footer__link",footer__social:"footer__social","footer__social-link":"footer__social-link","register__now-block":"register__now-block","register__now-descr":"register__now-descr"},p);var f=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("Header",{class:["/"!==e.$route.path?"other":""]},["/"==e.$route.path?s("HeaderContent"):e._e()],1),e._v(" "),s("main",{staticClass:"main"},[e.getLoader&&"404"!=e.$route.name?s("Loader"):e._e(),e._v(" "),s("router-view")],1),e._v(" "),s("Footer")],1)};f._withStripped=!0;var h=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("header",{staticClass:"header",style:{background:e.img}},[s("div",{staticClass:"navigate"},[s("div",{staticClass:"container"},[s("nav",{staticClass:"header__nav"},[s("Logo"),e._v(" "),s("div",{class:["header__items",e.showMenu?"active":""]},[s("ul",{staticClass:"header__list"},e._l(e.links,(function(t,o){return s("li",{key:o},[s("router-link",{staticClass:"header__link",attrs:{to:t.path}},[e._v("\r\n                                    "+e._s(t.name)+"\r\n                                ")])],1)})),0),e._v(" "),s("ul",{staticClass:"header__list header__list-nth2"},[s("li",[s("router-link",{staticClass:"header__icon search__link",attrs:{to:"/movies"}},[s("span",{staticClass:"icon-reg"},[e._v("")])])],1),e._v(" "),e._m(0),e._v(" "),e._m(1)])]),e._v(" "),s("a",{class:["header__btn",e.showMenu?"active":""],attrs:{href:"#"},on:{click:function(t){return e.$store.dispatch("changeMenu")}}},[s("span",{staticClass:"bars"})])],1)])]),e._v(" "),s("div",{class:["header__abs",e.showMenu?"active":""],on:{click:function(t){return e.$store.dispatch("changeMenu")}}}),e._v(" "),e._t("default")],2)};h._withStripped=!0;var g=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("router-link",{staticClass:"logo",attrs:{to:"/"}},[s("span",{staticClass:"logo__span"},[e._v("m")]),e._v(" box")])};g._withStripped=!0;var w=s(900),C=(0,w.Z)({},g,[],!1,null,null,null);C.options.__file="src/components/Logo.vue";var b=C.exports,k=s(78),y=s.n(k),M={components:{Logo:b},data:function(){return{links:[{name:"home",path:"/"},{name:"movies",path:"/movies"}],img:"url(".concat(y(),") no-repeat center/cover")}},computed:{showMenu:function(){return this.$store.getters.showMenu}}},L=(0,w.Z)(M,h,[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("li",[s("a",{staticClass:"header__icon icon-reg",attrs:{href:"#"}},[e._v("")])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("li",[s("a",{staticClass:"header__icon icon-reg",attrs:{href:"#"}},[e._v("")])])}],!1,null,null,null);L.options.__file="src/components/Header.vue";var E=L.exports,P=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("footer",{staticClass:"footer"},[s("div",{staticClass:"container"},[s("div",{staticClass:"footer__content"},[s("div",{staticClass:"footer__logo"},[s("Logo"),e._v(" "),s("div",{staticClass:"footer__social"},e._l(e.socialLinks,(function(t,o){return s("a",{key:o,staticClass:"footer__social-link",attrs:{href:["//www."+t.url],target:"_blank"}},[s("span",{staticClass:"icon-brand"},[e._v(e._s(t.icon))])])})),0)],1),e._v(" "),s("div",{staticClass:"footer__lists"},e._l(e.infoLinks,(function(t,o){return s("ul",{key:o,staticClass:"footer__list"},[s("li",[s("a",{staticClass:"footer__link",attrs:{href:t.url}},[e._v(e._s(t.name))])])])})),0)])])])};P._withStripped=!0;var $={components:{Logo:b},data:function(){return{socialLinks:[{name:"Facebook",url:"facebook.com",icon:""},{name:"Twitter",url:"twitter.com",icon:""},{name:"linkedIn",url:"linkedin.com",icon:""},{name:"Instagram",url:"instagram.com",icon:""}],infoLinks:[{name:"Privacy",url:"#!"},{name:"Legal Provisions",url:"#!"},{name:"Help Center",url:"#!"},{name:"Corporate Informations",url:"#!"}]}}},x=(0,w.Z)($,P,[],!1,null,null,null);x.options.__file="src/components/Footer.vue";var S=x.exports,O=function(){var e=this,t=e.$createElement,s=e._self._c||t;return e.film?s("div",{staticClass:"header__content"},[s("div",{staticClass:"container"},[s("div",{staticClass:"header__text"},[s("h1",{staticClass:"header__title"},[e._v(e._s(e.film.nameRu?e.film.nameRu:e.film.nameEn))]),e._v(" "),s("div",{staticClass:"header__balls"},[s("span",{staticClass:"header__year"},[e._v(e._s(e.film.year))]),e._v(" "),s("div",{staticClass:"header__stars header__year"},[s("span",{staticClass:"icon-solid"},[e._v("")]),s("strong",[e._v(e._s(e.film.rating))])])]),e._v(" "),s("p",{staticClass:"header__descr"}),e._v(" "),s("div",{staticClass:"header__buttons"},[s("router-link",{staticClass:"header__watch",attrs:{to:/movies/+e.film.filmId}},[s("span",{staticClass:"icon-solid"},[e._v("")]),e._v(" More Information ")])],1)])])]):e._e()};O._withStripped=!0;var R=(0,w.Z)({computed:{film:function(){return this.$store.getters.getRandomTopMovie}}},O,[],!1,null,null,null);R.options.__file="src/components/HeaderContent.vue";var A=R.exports,T=function(){var e=this;e.$createElement;return e._self._c,e._m(0)};T._withStripped=!0;var Z=(0,w.Z)({},T,[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"anime"},[t("div",{staticClass:"circ"})])}],!1,null,null,null);Z.options.__file="src/components/Loader.vue";var j={components:{Header:E,Loader:Z.exports,Footer:S,HeaderContent:A},computed:{getLoader:function(){return this.$store.getters.getLoader}}},F={};F.styleTagTransform=d(),F.setAttributes=c(),F.insert=_().bind(null,"head"),F.domAPI=i(),F.insertStyleElement=v(),r()({"router-link-exact-active":"router-link-exact-active"},F);var I=(0,w.Z)(j,f,[],!1,null,null,null);I.options.__file="src/App.vue";var H=I.exports,U=s(94),D=s.n(U),B=s(629),N=s(942),z=s(152),Y=s(861),q=s(757),K=s.n(q),W=function(){var e=(0,Y.Z)(K().mark((function e(t){var s,o;return K().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t,{headers:(s={},(0,N.Z)(s,"X-API-KEY","bc44c90c-0245-4354-aa9c-a6ce5d0a5edd"),(0,N.Z)(s,"Content-Type","application/json"),s)});case 2:if(!(o=e.sent).ok){e.next=7;break}return e.abrupt("return",o.json());case 7:throw new Error("Cannot access to ".concat(t));case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),X=W;function G(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),s.push.apply(s,o)}return s}function J(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?G(Object(s),!0).forEach((function(t){(0,N.Z)(e,t,s[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):G(Object(s)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))}))}return e}var Q="https://kinopoiskapiunofficial.tech",V=function(e){return Math.floor(Math.random()*e)},ee={state:{message:"Hello",showLoader:!0,topMovies:[],awaitMovies:[],topRandom:null,awaitRandom:null,soloFilm:null,moviesList:[],pagesCount:0,currentPage:1,error:null,showRightMenu:!1},mutations:{setLoader:function(e,t){e.showLoader=t},topMovies:function(e,t){e.topMovies=t},awaitMovies:function(e,t){e.awaitMovies=t},topRandomMovie:function(e,t){e.topRandom=t},awaitRandomMovie:function(e,t){e.awaitRandom=t},soloFilm:function(e,t){e.soloFilm=t},setMoviesList:function(e,t){e.moviesList=t.films,e.currentPage=t.page,e.pagesCount=t.pagesCount<14?t.pagesCount:14},setError:function(e,t){e.error=t},changeMenu:function(e){e.showRightMenu=!e.showRightMenu}},actions:{setLoader:function(e){(0,e.commit)("setLoader")},setError:function(e,t){var s=e.commit;console.log(" fsdf sdf sdfsdf"),s("setError",t)},setMovies:function(e){var t=e.commit,s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,o=(new Date).getMonth(),r=["january","february","march","april","may","june","july","august","september","october","november","december"],n=r[o],i=(new Date).getFullYear();(0,Y.Z)(K().mark((function e(){var t,o,r,a;return K().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([X("".concat(Q,"/api/v2.2/films/top?type=TOP_250_BEST_FILMS&page=").concat(s)),X("".concat(Q,"/api/v2.1/films/releases?year=").concat(i,"&month=").concat(n,"&page=1"))]);case 2:return t=e.sent,o=(0,z.Z)(t,2),r=o[0],a=o[1],e.abrupt("return",[r,a]);case 7:case"end":return e.stop()}}),e)})))().then((function(e){t("setError",null),t("topMovies",e[0].films),t("awaitMovies",e[1].releases);var s=V(e[0].films.length),o=V(e[1].releases.length);t("topRandomMovie",e[0].films[s]),t("awaitRandomMovie",{posterUrl:e[1].releases[o].posterUrl,posterUrlPreview:e[1].releases[o].posterUrlPreview}),t("setLoader",!1)})).catch((function(e){t("setLoader",!1),t("setError","Кажется возникла непредвиденная ошибка")}))},soloFilm:function(e,t){var s=e.commit;s("setLoader",!0),(0,Y.Z)(K().mark((function e(){var s,o,r,n,i;return K().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([X("".concat(Q,"/api/v2.1/films/").concat(t)),X("".concat(Q,"/api/v2.1/films/").concat(t,"/frames")),X("".concat(Q,"/api/v1/reviews?filmId=").concat(t,"&page=1"))]);case 2:return s=e.sent,o=(0,z.Z)(s,3),r=o[0],n=o[1],i=o[2],e.abrupt("return",{solo:r,frames:n,reviews:i});case 8:case"end":return e.stop()}}),e)})))().then((function(e){s("setError",null),s("soloFilm",J(J(J({},e.solo.data),e.frames),{},{reviews:e.reviews.reviews})),s("setLoader",!1)})).catch((function(e){s("setLoader",!1),s("setError","Кажется возникла непредвиденная ошибка")}))},setMoviesList:function(e,t){var s=e.commit;s("setLoader",!0);var o="top"==t.method?"".concat(Q,"/api/v2.2/films/top?type=TOP_250_BEST_FILMS&page=").concat(t.page):"".concat(Q,"/api/v2.1/films/search-by-keyword?keyword=").concat(t.keyword,"&page=").concat(t.page);X(o).then((function(e){s("setError",null),s("setMoviesList",J(J({},e),{},{page:t.page})),s("setLoader",!1)})).catch((function(e){s("setLoader",!1),s("setError","Ничего не найдено")}))},changeMenu:function(e){(0,e.commit)("changeMenu")}},getters:{getMessage:function(e){return e.message},getLoader:function(e){return e.showLoader},getTopMovies:function(e){return e.topMovies},getAwaitMovies:function(e){return e.awaitMovies},getRandomAwaitMovie:function(e){return e.awaitRandom},getRandomTopMovie:function(e){return e.topRandom},getSoloFilm:function(e){return e.soloFilm},getMoviesList:function(e){return e.moviesList},getPagesCount:function(e){return e.pagesCount},getCurrentPage:function(e){return e.currentPage},getError:function(e){return e.error},showMenu:function(e){return e.showRightMenu}}};D().use(B.ZP);var te=new B.ZP.Store({modules:{example:ee}}),se=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("section",[s("Movies",{attrs:{movies:e.topMovies,title:"Trending Movies"}}),e._v(" "),s("Movies",{attrs:{movies:e.awaitMovies,title:"Await Movies"}}),e._v(" "),s("AwaitPoster",{attrs:{film:e.randAwaitMovie}})],1)};se._withStripped=!0;var oe=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"trend__movies"},[s("div",{staticClass:"container"},[s("h2",{staticClass:"trend__tv-title popular__title"},[e._v(e._s(e.title)+" "),s("span",{staticClass:"icon-reg"},[e._v("")])]),e._v(" "),s("carousel",{attrs:{perPageCustom:[[200,1],[430,2],[576,3],[768,4],[1024,5],[1200,6]],paginationEnabled:!1}},e._l(e.movies,(function(e){return s("slide",{key:e.id,staticClass:"slide__item"},[s("router-link",{staticClass:"movie__item",attrs:{to:/movies/+e.filmId}},[s("img",{attrs:{src:e.posterUrlPreview,alt:e.nameRu}})])],1)})),1)],1)])};oe._withStripped=!0;var re={props:{movies:{type:Array},title:{type:String,default:"Trending Movies"}}},ne={};ne.styleTagTransform=d(),ne.setAttributes=c(),ne.insert=_().bind(null,"head"),ne.domAPI=i(),ne.insertStyleElement=v(),r()({slide__item:"slide__item"},ne);var ie=(0,w.Z)(re,oe,[],!1,null,null,null);ie.options.__file="src/components/movies/Movies.vue";var ae=ie.exports,_e=function(){var e=this,t=e.$createElement,s=e._self._c||t;return e.film?s("div",{staticClass:"coming__soon"},[s("div",{staticClass:"container"},[s("div",{staticClass:"coming__soon-block"},[s("img",{attrs:{src:e.film.posterUrl,alt:""}}),e._v(" "),s("div",{staticClass:"coming__block-neon"},[s("div",{staticClass:"coming__soon-img"},[s("img",{attrs:{src:e.film.posterUrlPreview,alt:""}})]),e._v(" "),s("span",{staticClass:"coming__soon-span"},[e._v("comming soon...")])])])])]):e._e()};_e._withStripped=!0;var le=(0,w.Z)({computed:{film:function(){return this.$store.getters.getRandomAwaitMovie}}},_e,[],!1,null,null,null);le.options.__file="src/components/AwaitPoster.vue";var ce={components:{Movies:ae,AwaitPoster:le.exports},computed:{topMovies:function(){return this.$store.getters.getTopMovies},awaitMovies:function(){return this.$store.getters.getAwaitMovies},randAwaitMovie:function(){return this.$store.getters.getRandomAwaitMovie}},created:function(){this.$store.dispatch("setMovies")}},ue=(0,w.Z)(ce,se,[],!1,null,null,null);ue.options.__file="src/pages/Home.vue";var ve=ue.exports,me=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"container"},[s("form",{staticClass:"form__main",attrs:{action:""},on:{submit:function(t){return t.preventDefault(),e.onSubmit.apply(null,arguments)}}},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.keyword,expression:"keyword"}],staticClass:"header__input",attrs:{type:"text",placeholder:"search something?",required:""},domProps:{value:e.keyword},on:{input:function(t){t.target.composing||(e.keyword=t.target.value)}}}),e._v(" "),s("button",{staticClass:"icon-reg"},[e._v("")])]),e._v(" "),0==e.moviesList.length?s("p",{staticClass:"undefined"},[e._v("Кажется ничего не найдено")]):e._e(),e._v(" "),e.moviesList.length>0?s("div",{staticClass:"main__block"},e._l(e.moviesList,(function(t,o){return s("div",{key:o,staticClass:"some__item",on:{click:function(s){return e.go(t.filmId)}}},[s("div",{staticClass:"some__img"},[s("img",{attrs:{src:t.posterUrlPreview,alt:[t.nameRu,t.nameEn],loading:"lazy"}}),e._v(" "),s("span",{staticClass:"some__rating"},[e._v(e._s("null"!=t.rating?t.rating:"??+"))])]),e._v(" "),s("h3",{staticClass:"some__title"},[e._v(e._s(""!==t.nameRu?t.nameRu:t.nameEn))])])})),0):e._e(),e._v(" "),s("div",{staticClass:"pagination"},[s("ul",{staticClass:"header__list"},e._l(e.pagesCount,(function(t){return s("li",{key:t},[s("a",{class:["pagination__link",t==e.currentPage?"active":""],attrs:{href:"#"},on:{click:function(s){return s.preventDefault(),e.changeMovies(t)}}},[e._v(e._s(t))])])})),0)])])};me._withStripped=!0;var de=(0,w.Z)({created:function(){this.$store.dispatch("setMoviesList",{method:"top",keyword:"",page:1})},computed:{moviesList:function(){return this.$store.getters.getMoviesList},pagesCount:function(){return this.$store.getters.getPagesCount},currentPage:function(){return this.$store.getters.getCurrentPage}},data:function(){return{page:1,method:"top",keyword:""}},methods:{go:function(e){this.$router.push("/movies/".concat(e))},changeMovies:function(e){this.page=e,this.$store.dispatch("setMoviesList",{method:this.method,keyword:this.keyword,page:e})},onSubmit:function(){this.method="search",this.$store.dispatch("setMoviesList",{method:this.method,keyword:this.keyword,page:1})}}},me,[],!1,null,null,null);de.options.__file="src/pages/Movies.vue";var pe=de.exports,fe=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"container"},[e.getError?s("p",{staticClass:"error"},[e._v(e._s(e.getError))]):e._e(),e._v(" "),e.solo?s("div",{staticClass:"main__solo"},[s("div",{staticClass:"solo__img"},[s("img",{attrs:{src:e.solo.posterUrlPreview,alt:""}}),e._v(" "),s("a",{staticClass:"solo__link header__watch",attrs:{href:e.solo.webUrl,target:"_blank"}},[e._v("Смотреть фильм")])]),e._v(" "),s("div",{staticClass:"solo__content"},[s("h3",{staticClass:"solo__title trend__tv-title"},[e._v(e._s(""!==e.solo.nameRu?e.solo.nameRu:e.solo.nameEn))]),e._v(" "),s("ul",{staticClass:"solo__items"},[s("li",{staticClass:"solo__countries"},[s("span",[e._v("Страны:")]),e._v(" "+e._s(e.solo.countries.reduce((function(e,t){return e+t.country+" "}),""))+"\n                ")]),e._v(" "),s("li",{staticClass:"solo__genres"},[s("span",[e._v("Жанры:")]),e._v(" "+e._s(e.solo.genres.reduce((function(e,t){return e+t.genre+" "}),""))+"\n                ")]),e._v(" "),s("li",{staticClass:"solo__dur"},[s("span",[e._v("Продолжителность")]),e._v(": "+e._s(e.solo.filmLength)+"\n                ")]),e._v(" "),s("li",{staticClass:"solo__year"},[s("span",[e._v("Год:")]),e._v(" "+e._s(e.solo.year)+"\n                ")]),e._v(" "),s("li",{staticClass:"solo__premiere"},[s("span",[e._v("Мировая премьера:")]),e._v(" "+e._s(e.solo.premiereWorld)+"\n                ")]),e._v(" "),s("li",{staticClass:"solo__rating"},[s("span",[e._v("Возрастной рейтинг:")]),e._v(" "+e._s(e.solo.ratingAgeLimits)+"+\n                ")]),e._v(" "),s("li",{staticClass:"solo__slogan"},[s("span",[e._v("Слоган:")]),e._v(" "+e._s(e.solo.slogan)+"\n                ")]),e._v(" "),s("li",{staticClass:"header__descr solo__descr"},[s("span",[e._v("Описание:")]),e._v(" "+e._s(e.solo.description)+"\n                ")])])]),e._v(" "),s("ul",{staticClass:"solo__facts"},[s("h3",{staticClass:"trend__tv-title"},[e._v("Интересные факты")]),e._v(" "),e._l(e.solo.facts.slice(0,10),(function(t,o){return s("li",{key:o,staticClass:"solo__facts-item"},[e._v("\n                "+e._s(o+1)+": "),s("span",{domProps:{innerHTML:e._s(t)}})])}))],2),e._v(" "),s("h3",{staticClass:"solo__title2 trend__tv-title"},[e._v("Фото")]),e._v(" "),s("div",{staticClass:"solo__images"},e._l(e.solo.frames.slice(0,12),(function(e,t){return s("img",{key:t,attrs:{src:e.preview,alt:"",loading:"lazy"}})})),0),e._v(" "),s("div",{staticClass:"solo__reviews"},[s("h3",{staticClass:"solo__title2 trend__tv-title"},[e._v("Отзывы")]),e._v(" "),e._l(e.solo.reviews.slice(0,10),(function(t,o){return s("div",{key:o,staticClass:"review__item"},[s("span",[e._v(e._s(t.reviewAutor))]),e._v(" "),s("p",{staticClass:"review__descr"},[e._v(e._s(t.reviewDescription))])])}))],2)]):e._e()])};fe._withStripped=!0;var he=(0,w.Z)({created:function(){this.$store.dispatch("soloFilm",this.$route.params.id)},computed:{solo:function(){return this.$store.getters.getSoloFilm},getError:function(){return this.$store.getters.getError}}},fe,[],!1,null,null,null);he.options.__file="src/pages/Single.vue";var ge=he.exports,we=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"container"},[s("div",{staticClass:"not__found"},[s("h2",[e._v("404")]),e._v(" "),s("p",[e._v("Page not Found")]),e._v(" "),s("p",[e._v("Вернуться на "),s("router-link",{attrs:{to:"/"}},[e._v("На главную")])],1)])])};we._withStripped=!0;var Ce={};Ce.styleTagTransform=d(),Ce.setAttributes=c(),Ce.insert=_().bind(null,"head"),Ce.domAPI=i(),Ce.insertStyleElement=v(),r()({not__found:"not__found"},Ce);var be=(0,w.Z)({},we,[],!1,null,null,null);be.options.__file="src/pages/NotFound.vue";var ke=be.exports,ye=s(345);D().use(ye.Z);var Me=new ye.Z({routes:[{path:"/",name:"home",component:ve},{path:"/movies",name:"movies",component:pe},{path:"/movies/:id",name:"single",component:ge},{path:"*",name:"404",component:ke}]}),Le=s(409),Ee=s.n(Le);D().use(Ee()),new(D())({router:Me,render:function(e){return e(H)},store:te}).$mount("#app")},78:function(e,t,s){e.exports=s.p+"assets/img/headerBg.png"}},s={};function o(e){var r=s[e];if(void 0!==r)return r.exports;var n=s[e]={exports:{}};return t[e].call(n.exports,n,n.exports,o),n.exports}o.m=t,e=[],o.O=function(t,s,r,n){if(!s){var i=1/0;for(c=0;c<e.length;c++){s=e[c][0],r=e[c][1],n=e[c][2];for(var a=!0,_=0;_<s.length;_++)(!1&n||i>=n)&&Object.keys(o.O).every((function(e){return o.O[e](s[_])}))?s.splice(_--,1):(a=!1,n<i&&(i=n));if(a){e.splice(c--,1);var l=r();void 0!==l&&(t=l)}}return t}n=n||0;for(var c=e.length;c>0&&e[c-1][2]>n;c--)e[c]=e[c-1];e[c]=[s,r,n]},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,{a:t}),t},o.d=function(e,t){for(var s in t)o.o(t,s)&&!o.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:t[s]})},o.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},function(){var e;o.g.importScripts&&(e=o.g.location+"");var t=o.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var s=t.getElementsByTagName("script");s.length&&(e=s[s.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),o.p=e+"../../"}(),function(){var e={143:0};o.O.j=function(t){return 0===e[t]};var t=function(t,s){var r,n,i=s[0],a=s[1],_=s[2],l=0;if(i.some((function(t){return 0!==e[t]}))){for(r in a)o.o(a,r)&&(o.m[r]=a[r]);if(_)var c=_(o)}for(t&&t(s);l<i.length;l++)n=i[l],o.o(e,n)&&e[n]&&e[n][0](),e[i[l]]=0;return o.O(c)},s=self.webpackChunkwebpacktemplate=self.webpackChunkwebpacktemplate||[];s.forEach(t.bind(null,0)),s.push=t.bind(null,s.push.bind(s))}();var r=o.O(void 0,[155],(function(){return o(591)}));r=o.O(r)}();