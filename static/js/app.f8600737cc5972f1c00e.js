webpackJsonp([0],{"+mdc":function(t,s,e){"use strict";var i=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{ref:"ratings",staticClass:"ratings"},[e("div",{staticClass:"ratings-content"},[e("div",{staticClass:"overview"},[e("div",{staticClass:"overview-left"},[e("h1",{staticClass:"score"},[t._v(t._s(t.seller.score))]),t._v(" "),e("div",{staticClass:"title"},[t._v("综合评分")]),t._v(" "),e("div",{staticClass:"rank"},[t._v("高于周边商家"+t._s(t.seller.rankRate)+"%")])]),t._v(" "),e("div",{staticClass:"overview-right"},[e("div",{staticClass:"score-wraper"},[e("span",{staticClass:"title"},[t._v("服务态度")]),t._v(" "),e("star",{attrs:{size:36,score:t.seller.serviceScore}}),t._v(" "),e("span",{staticClass:"score"},[t._v(t._s(t.seller.serviceScore))])],1),t._v(" "),e("div",{staticClass:"score-wraper"},[e("span",{staticClass:"title"},[t._v("商品评分")]),t._v(" "),e("star",{attrs:{size:36,score:t.seller.foodScore}}),t._v(" "),e("span",{staticClass:"score"},[t._v(t._s(t.seller.foodScore))])],1),t._v(" "),e("div",{staticClass:"delivery-wrapper"},[e("span",{staticClass:"title"},[t._v("送达时间")]),t._v(" "),e("span",{staticClass:"delivery"},[t._v(t._s(t.seller.deliveryTime)+"分钟")])])])]),t._v(" "),e("split"),t._v(" "),e("ratingselect",{attrs:{"select-type":t.selectType,"only-content":t.onlyContent,ratings:t.ratings},on:{ratingtypeSelect:t._ratingtypeSelect,contentToggle:t._contentToggle}}),t._v(" "),e("div",{staticClass:"rating-wrapper"},[e("ul",t._l(t.ratings,function(s){return e("li",{directives:[{name:"show",rawName:"v-show",value:t.needShow(s.rateType,s.text),expression:"needShow(rating.rateType, rating.text)"}],staticClass:"rating-item"},[e("div",{staticClass:"avatar"},[e("img",{attrs:{width:"28",height:"28",src:s.avatar}})]),t._v(" "),e("div",{staticClass:"content"},[e("h1",{staticClass:"name"},[t._v(t._s(s.username))]),t._v(" "),e("div",{staticClass:"star-wrapper"},[e("star",{attrs:{size:24,score:s.score}}),t._v(" "),e("span",{directives:[{name:"show",rawName:"v-show",value:s.deliveryTime,expression:"rating.deliveryTime"}],staticClass:"delivery"},[t._v(t._s(s.deliveryTime)+"分钟送达")])],1),t._v(" "),e("p",{staticClass:"text"},[t._v(t._s(s.text))]),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:s.recommend&&s.recommend.length,expression:"rating.recommend  && rating.recommend.length"}],staticClass:"recommend"},[e("span",{staticClass:"icon-thumb_up"}),t._v(" "),t._l(s.recommend,function(s){return e("span",{staticClass:"item"},[t._v(t._s(s))])})],2),t._v(" "),e("div",{staticClass:"time"},[t._v(t._s(t._f("formatDate")(s.rateTime)))])])])}))])],1)])},a=[],n={render:i,staticRenderFns:a};s.a=n},"/cZ4":function(t,s,e){"use strict";var i=e("m3es"),a=e.n(i),n=e("NVrd"),r=e("fJdx"),o=e("e9KK"),c=e("fjIZ"),l=e("hhm8");s.a={props:{seller:{type:Object}},data:function(){return{ratings:[],selectType:2,onlyContent:!0}},created:function(){var t=this;if(e.i(l.b)()){this.$http.get("https://liaozeen.github.io/ele_sell/api./data.json").then(function(s){s=s.body,t.ratings=s.ratings,t.$nextTick(function(){t.scroll=new a.a(t.$refs.ratings,{click:!0})})})}else this.$http.get("/api/ratings").then(function(s){s=s.body,0===s.errno&&(t.ratings=s.data,t.$nextTick(function(){t.scroll=new a.a(t.$refs.ratings,{click:!0})}))})},methods:{needShow:function(t,s){return!(this.onlyContent&&!s)&&(2===this.selectType||t===this.selectType)},_ratingtypeSelect:function(t){var s=this;this.selectType=t,this.$nextTick(function(){s.scroll.refresh()})},_contentToggle:function(t){var s=this;this.onlyContent=!this.onlyContent,this.$nextTick(function(){s.scroll.refresh()})}},filters:{formatDate:function(t){var s=new Date(t);return e.i(c.a)(s,"yyyy-MM-dd hh:mm")}},components:{star:n.a,split:r.a,ratingselect:o.a}}},0:function(t,s){},"04Q5":function(t,s){},"0AMi":function(t,s){},"1Iyw":function(t,s,e){"use strict";s.a={}},"34KM":function(t,s){},"3RRX":function(t,s){},"8J2q":function(t,s,e){"use strict";function i(t){e("94gg")}var a=e("PkAO"),n=e("x8iV"),r=e("VU/8"),o=i,c=r(a.a,n.a,o,null,null);s.a=c.exports},"94gg":function(t,s){},AKNT:function(t,s,e){"use strict";function i(t){e("0AMi")}var a=e("/cZ4"),n=e("+mdc"),r=e("VU/8"),o=i,c=r(a.a,n.a,o,null,null);s.a=c.exports},AsYy:function(t,s,e){"use strict";var i=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[e("div",{staticClass:"shopcart"},[e("div",{staticClass:"content",on:{click:t.toggleList}},[e("div",{staticClass:"content-left"},[e("div",{staticClass:"logo-wrapper"},[e("div",{staticClass:"logo",class:{highlight:t.totalCount>0}},[e("span",{staticClass:"icon-shopping_cart",class:{highlight:t.totalCount>0}})]),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:t.totalCount>0,expression:"totalCount>0"}],staticClass:"num"},[t._v(t._s(t.totalCount))])]),t._v(" "),e("div",{staticClass:"price",class:{highlight:t.totalPrice>0}},[t._v("￥"+t._s(t.totalPrice))]),t._v(" "),e("div",{staticClass:"desc"},[t._v("另需配送费￥"+t._s(t.deliveryPrice)+"元")])]),t._v(" "),e("div",{staticClass:"content-right",on:{click:function(s){if(!("button"in s)&&t._k(s.keyCode,"precent"))return null;s.stopPropagation(),t.pay(s)}}},[e("div",{staticClass:"pay",class:t.payClass},[t._v("\n        "+t._s(t.payDesc)+"\n      ")])])]),t._v(" "),e("div",{staticClass:"ball-container"},t._l(t.balls,function(s){return e("div",[e("transition",{attrs:{name:"drop"},on:{"before-enter":t.beforeDrop,enter:t.dropping,"after-enter":t.afterDrop}},[e("div",{directives:[{name:"show",rawName:"v-show",value:s.show,expression:"ball.show"}],staticClass:"ball"},[e("div",{staticClass:"inner inner-hook"})])])],1)})),t._v(" "),e("transition",{attrs:{name:"fold"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.listShow,expression:"listShow"}],staticClass:"shopcart-list"},[e("div",{staticClass:"list-header"},[e("h1",{staticClass:"title"},[t._v("购物车")]),t._v(" "),e("span",{staticClass:"empty",on:{click:t.empty}},[t._v("清空")])]),t._v(" "),e("div",{ref:"listContent",staticClass:"list-content"},[e("ul",t._l(t.selectFoods,function(s){return e("li",{staticClass:"food"},[e("span",{staticClass:"name"},[t._v(t._s(s.name))]),t._v(" "),e("div",{staticClass:"price"},[e("span",[t._v("￥"+t._s(s.price*s.count))])]),t._v(" "),e("div",{staticClass:"cartcontrol-wrapper"},[e("cartcontrol",{attrs:{food:s},on:{add:t.addFood}})],1)])}))])])])],1),t._v(" "),e("transition",{attrs:{name:"fade"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.listShow,expression:"listShow"}],staticClass:"list-mask",on:{click:t.hideList}})])],1)},a=[],n={render:i,staticRenderFns:a};s.a=n},B1bB:function(t,s,e){"use strict";var i=e("m3es"),a=e.n(i),n=e("xSw9"),r=e("Jn7X"),o=e("8J2q"),c=e("hhm8");s.a={props:{seller:{type:Object}},data:function(){return{goods:[],listHeight:[],scrollY:0,selectedFood:{}}},computed:{currentIndex:function(){for(var t=0;t<this.listHeight.length;t++){var s=this.listHeight[t],e=this.listHeight[t+1];if(!e||this.scrollY>=s&&this.scrollY<e)return t}return 0},selectFoods:function(){var t=[];return this.goods.forEach(function(s){s.foods.forEach(function(s){s.count&&t.push(s)})}),t}},created:function(){var t=this;if(this.classMap=["decrease","discount","special","invoice","guarantee"],e.i(c.b)()){this.$http.get("https://liaozeen.github.io/ele_sell/api./data.json").then(function(s){s=s.body,t.goods=s.goods,t.$nextTick(function(){t._initScroll(),t._calculateHeight()})})}else this.$http.get("/api/goods").then(function(s){s=s.body,0===s.errno&&(t.goods=s.data,t.$nextTick(function(){t._initScroll(),t._calculateHeight()}))})},methods:{selectMenu:function(t,s){if(s._constructed){var e=this.$refs.foodList,i=e[t];this.foodsScroll.scrollToElement(i,300)}},selectFood:function(t,s){s._constructed&&(this.selectedFood=t,this.$refs.food.show())},addFood:function(t){this._drop(t)},_drop:function(t){var s=this;this.$nextTick(function(){s.$refs.shopcart.drop(t)})},_initScroll:function(){var t=this;this.menuScroll=new a.a(this.$refs.menuWrapper,{click:!0}),this.foodsScroll=new a.a(this.$refs.foodsWrapper,{click:!0,probeType:3}),this.foodsScroll.on("scroll",function(s){t.scrollY=Math.abs(Math.round(s.y))})},_calculateHeight:function(){var t=this.$refs.foodsWrapper.getElementsByClassName("food-list-hook"),s=0;this.listHeight.push(s);for(var e=0;e<t.length;e++){s+=t[e].clientHeight,this.listHeight.push(s)}}},components:{shopcart:n.a,cartcontrol:r.a,food:o.a}}},Bh5c:function(t,s,e){"use strict";function i(t,s,e){var i=window.localStorage._seller_;i?(i=JSON.parse(i),i[t]||(i[t]={})):(i={},i[t]={}),i[t][s]=e,window.localStorage._seller_=r()(i)}function a(t,s,e){var i=window.localStorage._seller_;return i&&(i=JSON.parse(i)[t])?i[s]||e:e}s.b=i,s.a=a;var n=e("mvHQ"),r=e.n(n)},EKWH:function(t,s,e){"use strict";var i=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"star",class:t.starType},t._l(t.itemClasses,function(t,s){return e("span",{key:"index",staticClass:"star-item",class:t})}))},a=[],n={render:i,staticRenderFns:a};s.a=n},FETT:function(t,s,e){"use strict";s.a={props:{size:{type:Number},score:{type:Number}},computed:{starType:function(){return"star-"+this.size},itemClasses:function(){for(var t=[],s=Math.floor(2*this.score)/2,e=s%1!=0,i=Math.floor(s),a=0;a<i;a++)t.push("on");for(e&&t.push("half");t.length<5;)t.push("off");return t}}}},GU4f:function(t,s,e){"use strict";var i=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{ref:"seller",staticClass:"seller"},[e("div",{staticClass:"seller-content"},[e("div",{staticClass:"overview"},[e("h1",{staticClass:"title"},[t._v(t._s(t.seller.name))]),t._v(" "),e("div",{staticClass:"desc border-1px"},[e("star",{attrs:{size:36,score:t.seller.score}}),t._v(" "),e("span",{staticClass:"text"},[t._v(t._s(t.seller.ratingCount))]),t._v(" "),e("span",{staticClass:"text"},[t._v("月售"+t._s(t.seller.sellCount)+"单")])],1),t._v(" "),e("ul",{staticClass:"remark"},[e("li",{staticClass:"block"},[e("h2",[t._v("起送价")]),t._v(" "),e("div",{staticClass:"content"},[e("span",{staticClass:"stress"},[t._v(t._s(t.seller.minPrice))]),t._v("元\n          ")])]),t._v(" "),e("li",{staticClass:"block"},[e("h2",[t._v("商家配送")]),t._v(" "),e("div",{staticClass:"content"},[e("span",{staticClass:"stress"},[t._v(t._s(t.seller.deliveryPrice))]),t._v("元\n          ")])]),t._v(" "),e("li",{staticClass:"block"},[e("h2",[t._v("平均配送时间")]),t._v(" "),e("div",{staticClass:"content"},[e("span",{staticClass:"stress"},[t._v(t._s(t.seller.deliveryTime))]),t._v("分钟\n          ")])])]),t._v(" "),e("div",{staticClass:"favorite",on:{click:t.toggleFavorite}},[e("span",{staticClass:"icon-favorite",class:{active:t.favorite}}),t._v(" "),e("span",{staticClass:"text"},[t._v(t._s(t.favoriteText))])])]),t._v(" "),e("split"),t._v(" "),e("div",{staticClass:"bulletin"},[e("h1",{staticClass:"title"},[t._v("公告与活动")]),t._v(" "),e("div",{staticClass:"content-wrapper  border-1px"},[e("p",{staticClass:"content"},[t._v(t._s(t.seller.bulletin))])]),t._v(" "),t.seller.supports?e("ul",{staticClass:"supports"},t._l(t.seller.supports,function(s,i){return e("li",{staticClass:"support-item border-1px"},[e("span",{staticClass:"icon",class:t.classMap[t.seller.supports[i].type]}),t._v(" "),e("span",{staticClass:"text"},[t._v(t._s(t.seller.supports[i].description))])])})):t._e()]),t._v(" "),e("split"),t._v(" "),e("div",{staticClass:"pics"},[e("h1",{staticClass:"title"},[t._v("商家实景")]),t._v(" "),e("div",{ref:"picWrapper",staticClass:"pic-wrapper"},[e("ul",{ref:"picList",staticClass:"pic-list"},t._l(t.seller.pics,function(t){return e("li",{staticClass:"pic-item"},[e("img",{attrs:{src:t,width:"120",height:"90"}})])}))])]),t._v(" "),e("split"),t._v(" "),e("div",{staticClass:"info"},[e("h1",{staticClass:"title",attrs:{"border-1px":""}},[t._v("商家信息")]),t._v(" "),e("ul",t._l(t.seller.infos,function(s){return e("li",{staticClass:"info-item"},[t._v(t._s(s))])}))])],1)])},a=[],n={render:i,staticRenderFns:a};s.a=n},Jn7X:function(t,s,e){"use strict";function i(t){e("wRoe")}var a=e("MM04"),n=e("qyqs"),r=e("VU/8"),o=i,c=r(a.a,n.a,o,null,null);s.a=c.exports},M93x:function(t,s,e){"use strict";function i(t){e("OsaY")}var a=e("xJD8"),n=e("xSyG"),r=e("VU/8"),o=i,c=r(a.a,n.a,o,null,null);s.a=c.exports},MM04:function(t,s,e){"use strict";var i=e("7+uW");s.a={props:{food:{type:Object}},methods:{addCart:function(t){t._constructed&&(this.food.count?this.food.count++:i.a.set(this.food,"count",1),this.$emit("add",t.target))},decreaseCart:function(t){t._constructed&&this.food.count&&this.food.count--}}}},N0EE:function(t,s,e){"use strict";function i(t){e("XngF")}var a=e("VCv5"),n=e("GU4f"),r=e("VU/8"),o=i,c=r(a.a,n.a,o,null,null);s.a=c.exports},NHnr:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var i=e("7+uW"),a=e("/ocq"),n=e("ORbq"),r=e("M93x"),o=e("PXOj"),c=e("AKNT"),l=e("N0EE"),v=e("34KM");e.n(v);i.a.use(a.a),i.a.use(n.a);var u=new a.a({routes:[{path:"/goods",component:o.a},{path:"/ratings",component:c.a},{path:"/seller",component:l.a}],linkActiveClass:"active"});new i.a({el:"#app",router:u,render:function(t){return t(r.a)}}).$mount("#app")},NVrd:function(t,s,e){"use strict";function i(t){e("mJOd")}var a=e("FETT"),n=e("EKWH"),r=e("VU/8"),o=i,c=r(a.a,n.a,o,null,null);s.a=c.exports},OSoY:function(t,s,e){"use strict";var i=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[e("div",{staticClass:"goods"},[e("div",{ref:"menuWrapper",staticClass:"menu-wrapper"},[e("ul",t._l(t.goods,function(s,i){return e("li",{staticClass:"menu-item",class:{current:t.currentIndex===i},on:{click:function(s){t.selectMenu(i,s)}}},[e("span",{staticClass:"text border-1px"},[e("span",{directives:[{name:"show",rawName:"v-show",value:s.type>0,expression:"item.type>0"}],staticClass:"icon",class:t.classMap[s.type]}),t._v("\n          "+t._s(s.name)+"\n        ")])])}))]),t._v(" "),e("div",{ref:"foodsWrapper",staticClass:"foods-wrapper"},[e("ul",t._l(t.goods,function(s){return e("li",{ref:"foodList",refInFor:!0,staticClass:"food-list"},[e("h1",{staticClass:"title"},[t._v(t._s(s.name))]),t._v(" "),e("ul",t._l(s.foods,function(s){return e("li",{staticClass:"food-item border-1px",on:{click:function(e){t.selectFood(s,e)}}},[e("div",{staticClass:"icon"},[e("img",{attrs:{width:"57",height:"57",src:s.icon}})]),t._v(" "),e("div",{staticClass:"content"},[e("h2",{staticClass:"name"},[t._v(t._s(s.name))]),t._v(" "),e("p",{staticClass:"desc"},[t._v(t._s(s.description))]),t._v(" "),e("div",{staticClass:"extra"},[e("span",{staticClass:"count"},[t._v("月售"+t._s(s.sellCount))]),e("span",[t._v("好评率"+t._s(s.rating)+"%")])]),t._v(" "),e("div",{staticClass:"price"},[e("span",{staticClass:"now"},[t._v("￥"+t._s(s.price))]),e("span",{directives:[{name:"show",rawName:"v-show",value:s.oldPrice,expression:"food.oldPrice"}],staticClass:"old"},[t._v("￥"+t._s(s.oldPrice))])]),t._v(" "),e("div",{staticClass:"cartcontrol-wrapper"},[e("cartcontrol",{attrs:{food:s},on:{add:t.addFood}})],1)])])}))])}))]),t._v(" "),e("shopcart",{ref:"shopcart",attrs:{"select-foods":t.selectFoods,"delivery-price":t.seller.deliveryPrice,"min-price":t.seller.minPrice}})],1),t._v(" "),e("food",{ref:"food",attrs:{food:t.selectedFood}})],1)},a=[],n={render:i,staticRenderFns:a};s.a=n},OsaY:function(t,s){},PXOj:function(t,s,e){"use strict";function i(t){e("nybZ")}var a=e("B1bB"),n=e("OSoY"),r=e("VU/8"),o=i,c=r(a.a,n.a,o,null,null);s.a=c.exports},PkAO:function(t,s,e){"use strict";var i=e("m3es"),a=e.n(i),n=e("7+uW"),r=e("fjIZ"),o=e("Jn7X"),c=e("fJdx"),l=e("e9KK");s.a={props:{food:{type:Object}},data:function(){return{showFlag:!1,selectType:2,onlyContent:!0,desc:{all:"全部",positive:"推荐",negative:"吐槽"}}},methods:{show:function(){var t=this;this.showFlag=!0,this.selectType=2,this.onlyContent=!0,this.$nextTick(function(){t.scroll?t.scroll.refresh():t.scroll=new a.a(t.$refs.food,{click:!0})})},back:function(){this.showFlag=!1},addFirst:function(t){t._constructed&&(this.$emit("add",t.target),n.a.set(this.food,"count",1))},needShow:function(t,s){return!(this.onlyContent&&!s)&&(2===this.selectType||t===this.selectType)},_ratingtypeSelect:function(t){var s=this;this.selectType=t,this.$nextTick(function(){s.scroll.refresh()})},_contentToggle:function(t){var s=this;this.onlyContent=!this.onlyContent,this.$nextTick(function(){s.scroll.refresh()})}},events:{select:function(t){var s=this;this.selectType=t,this.$nextTick(function(){s.scroll.refresh()})},toggle:function(t){var s=this;this.onlyContent=t,this.$nextTick(function(){s.scroll.refresh()})}},filters:{formatDate:function(t){var s=new Date(t);return e.i(r.a)(s,"yyyy-MM-dd hh:mm")}},components:{cartcontrol:o.a,ratingselect:l.a,split:c.a}}},QYgV:function(t,s){},RgqF:function(t,s,e){"use strict";var i=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"header"},[e("div",{staticClass:"content-wrapper"},[e("div",{staticClass:"avatar"},[e("img",{attrs:{width:"64",height:"64",src:t.seller.avatar}})]),t._v(" "),e("div",{staticClass:"content"},[e("div",{staticClass:"title"},[e("span",{staticClass:"brand"}),t._v(" "),e("span",{staticClass:"name"},[t._v(t._s(t.seller.name))])]),t._v(" "),e("div",{staticClass:"description"},[t._v("\n        "+t._s(t.seller.description)+"/"+t._s(t.seller.deliveryTime)+"分钟送达\n      ")]),t._v(" "),t.seller.supports?e("div",{staticClass:"support"},[e("span",{staticClass:"icon",class:t.classMap[t.seller.supports[0].type]}),t._v(" "),e("span",{staticClass:"text"},[t._v(t._s(t.seller.supports[0].description))])]):t._e()]),t._v(" "),t.seller.supports?e("div",{staticClass:"support-count",on:{click:t.showDetail}},[e("span",{staticClass:"count"},[t._v(t._s(t.seller.supports.length)+"个")]),t._v(" "),e("i",{staticClass:"icon-keyboard_arrow_right"})]):t._e()]),t._v(" "),e("div",{staticClass:"bulletin-wrapper",on:{click:t.showDetail}},[e("span",{staticClass:"bulletin-title"}),e("span",{staticClass:"bulletin-text"},[t._v(t._s(t.seller.bulletin))]),t._v(" "),e("i",{staticClass:"icon-keyboard_arrow_right"})]),t._v(" "),e("div",{staticClass:"background"},[e("img",{attrs:{src:t.seller.avatar,width:"100%",height:"100%"}})]),t._v(" "),e("transition",{attrs:{name:"fade"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.detailShow,expression:"detailShow"}],staticClass:"detail"},[e("div",{staticClass:"detail-wrapper clearfix"},[e("div",{staticClass:"detail-main"},[e("div",{staticClass:"name"},[t._v(t._s(t.seller.name))]),t._v(" "),e("div",{staticClass:"star-wraper"},[e("star",{attrs:{size:48,score:t.seller.score}})],1),t._v(" "),e("div",{staticClass:"title"},[e("div",{staticClass:"line"}),t._v(" "),e("div",{staticClass:"text"},[t._v("优惠信息")]),t._v(" "),e("div",{staticClass:"line"})]),t._v(" "),t.seller.supports?e("ul",{staticClass:"supports"},t._l(t.seller.supports,function(s,i){return e("li",{staticClass:"support-item"},[e("span",{staticClass:"icon",class:t.classMap[t.seller.supports[i].type]}),t._v(" "),e("span",{staticClass:"text"},[t._v(t._s(t.seller.supports[i].description))])])})):t._e(),t._v(" "),e("div",{staticClass:"title"},[e("div",{staticClass:"line"}),t._v(" "),e("div",{staticClass:"text"},[t._v("商家公告")]),t._v(" "),e("div",{staticClass:"line"})]),t._v(" "),e("div",{staticClass:"bulletin"},[e("p",{staticClass:"content"},[t._v(t._s(t.seller.bulletin))])])])]),t._v(" "),e("div",{staticClass:"detail-close"},[e("i",{staticClass:"icon-close",on:{click:t.closeDetail}})])])])],1)},a=[],n={render:i,staticRenderFns:a};s.a=n},VCv5:function(t,s,e){"use strict";var i=e("m3es"),a=e.n(i),n=e("Bh5c"),r=e("NVrd"),o=e("fJdx");s.a={props:{seller:{type:Object}},data:function(){var t=this;return{favorite:function(){return e.i(n.a)(t.seller.id,"favorite",!1)}()}},computed:{favoriteText:function(){return this.favorite?"已收藏":"收藏"}},watch:{seller:function(){var t=this;this.$nextTick(function(){t._initScroll(),t._initPics()})}},mounted:function(){var t=this;this.$nextTick(function(){t._initScroll(),t._initPics()})},methods:{toggleFavorite:function(t){t._constructed&&(this.favorite=!this.favorite,e.i(n.b)(this.seller.id,"favorite",this.favorite))},_initScroll:function(){this.scroll?this.scroll.refresh():this.scroll=new a.a(this.$refs.seller,{click:!0})},_initPics:function(){var t=this;if(this.seller.pics){var s=126*this.seller.pics.length-6;this.$refs.picList.style.width=s+"px",this.$nextTick(function(){t.picScroll?t.picScroll.refresh():t.picScroll=new a.a(t.$refs.picWrapper,{scrollX:!0,eventPassthrough:"vertical"})})}}},created:function(){this.classMap=["decrease","discount","special","invoice","guarantee"]},components:{star:r.a,split:o.a}}},XngF:function(t,s){},e9KK:function(t,s,e){"use strict";function i(t){e("04Q5")}var a=e("esg4"),n=e("wYts"),r=e("VU/8"),o=i,c=r(a.a,n.a,o,null,null);s.a=c.exports},esg4:function(t,s,e){"use strict";s.a={props:{ratings:{type:Array,default:function(){return[]}},selectType:{type:Number,default:2},onlyContent:{type:Boolean,default:!1},desc:{type:Object,default:function(){return{all:"全部",positive:"满意",negative:"不满意"}}}},computed:{positives:function(){return this.ratings.filter(function(t){return 0===t.rateType})},negatives:function(){return this.ratings.filter(function(t){return 1===t.rateType})}},methods:{select:function(t,s){s._constructed&&this.$emit("ratingtypeSelect",t)},toggleContent:function(t){t._constructed&&this.$emit("contentToggle",this.onlyContent)}}}},fJdx:function(t,s,e){"use strict";function i(t){e("m9tc")}var a=e("1Iyw"),n=e("siU2"),r=e("VU/8"),o=i,c=r(a.a,n.a,o,null,null);s.a=c.exports},fjIZ:function(t,s,e){"use strict";function i(t,s){/(y+)/.test(s)&&(s=s.replace(RegExp.$1,(t.getFullYear()+"").substr(4-RegExp.$1.length)));var e={"M+":t.getMonth()+1,"d+":t.getDate(),"h+":t.getHours(),"m+":t.getMinutes(),"s+":t.getSeconds()};for(var i in e)if(new RegExp("("+i+")").test(s)){var n=e[i]+"";s=s.replace(RegExp.$1,1===RegExp.$1.length?n:a(n))}return s}function a(t){return("00"+t).substr(t.length)}s.a=i},"h/N8":function(t,s,e){"use strict";var i=e("NVrd");s.a={props:{seller:{type:Object}},data:function(){return{detailShow:!1}},methods:{showDetail:function(){this.detailShow=!0},closeDetail:function(){this.detailShow=!1}},created:function(){this.classMap=["decrease","discount","special","invoice","guarantee"]},components:{star:i.a}}},hhm8:function(t,s,e){"use strict";function i(){var t=window.location.search,s={},e=/[?&][^?&]+=[^?&]+/g,i=t.match(e);return i&&i.forEach(function(t){var e=t.substring(1).split("="),i=decodeURIComponent(e[0]),a=decodeURIComponent(e[1]);s[i]=a}),s}function a(){return"liaozeen.github.io"===location.host}s.a=i,s.b=a},hxP8:function(t,s,e){"use strict";function i(t){e("QYgV")}var a=e("h/N8"),n=e("RgqF"),r=e("VU/8"),o=i,c=r(a.a,n.a,o,null,null);s.a=c.exports},jUHR:function(t,s,e){"use strict";var i=e("m3es"),a=e.n(i),n=e("Jn7X");s.a={props:{selectFoods:{type:Array,default:function(){return[]}},deliveryPrice:{type:Number,default:0},minPrice:{type:Number,default:0}},data:function(){return{balls:[{show:!1},{show:!1},{show:!1},{show:!1},{show:!1}],dropBalls:[],fold:!0}},computed:{totalPrice:function(){var t=0;return this.selectFoods.forEach(function(s){t+=s.price*s.count}),t},totalCount:function(){var t=0;return this.selectFoods.forEach(function(s){t+=s.count}),t},payDesc:function(){if(0===this.totalPrice)return"￥"+this.minPrice+"元起送";if(this.totalPrice<this.minPrice){return"还差￥"+(this.minPrice-this.totalPrice)+"元起送"}return"去结算"},payClass:function(){return this.totalPrice<this.minPrice?"not-enough":"enough"},listShow:function(){var t=this;if(!this.totalCount)return this.fold=!0,!1;var s=!this.fold;return s&&this.$nextTick(function(){t.scroll?t.scroll.refresh():t.scroll=new a.a(t.$refs.listContent,{click:!0})}),s}},methods:{drop:function(t){for(var s=0;s<this.balls.length;s++){var e=this.balls[s];if(!e.show)return e.show=!0,e.el=t,void this.dropBalls.push(e)}},addFood:function(t){this.drop(t)},beforeDrop:function(t){for(var s=this.balls.length;s--;){var e=this.balls[s];if(e.show){var i=e.el.getBoundingClientRect(),a=i.left-32,n=-(window.innerHeight-i.top-22);t.style.display="",t.style.webkitTransform="translate3d(0,"+n+"px,0)",t.style.transform="translate3d(0,"+n+"px,0)";var r=t.getElementsByClassName("inner-hook")[0];r.style.webkitTransform="translate3d("+a+"px,0,0)",r.style.transform="translate3d("+a+"px,0,0)"}}},dropping:function(t,s){t.offsetHeight;this.$nextTick(function(){t.style.webkitTransform="translate3d(0,0,0)",t.style.transform="translate3d(0,0,0)";var e=t.getElementsByClassName("inner-hook")[0];e.style.webkitTransform="translate3d(0,0,0)",e.style.transform="translate3d(0,0,0)",t.addEventListener("transitionend",s)})},afterDrop:function(t){var s=this.dropBalls.shift();s&&(s.show=!1,t.style.display="none")},toggleList:function(){this.totalCount&&(this.fold=!this.fold)},hideList:function(){this.fold=!0},empty:function(){this.selectFoods.forEach(function(t){t.count=0})},pay:function(){this.totalPrice<this.minPrice||(window.alert("支付"+this.totalPrice+"元"),this.empty())}},components:{cartcontrol:n.a}}},m9tc:function(t,s){},mJOd:function(t,s){},nybZ:function(t,s){},qyqs:function(t,s,e){"use strict";var i=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"cartcontrol"},[e("transition",{attrs:{name:"move"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.food.count>0,expression:"food.count>0"}],staticClass:"cart-decrease",on:{click:function(s){s.stopPropagation(),s.preventDefault(),t.decreaseCart(s)}}},[e("span",{staticClass:"inner icon-remove_circle_outline"})])]),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:t.food.count>0,expression:"food.count>0"}],staticClass:"cart-count"},[t._v(t._s(t.food.count))]),t._v(" "),e("div",{staticClass:"cart-add icon-add_circle",on:{click:function(s){s.stopPropagation(),s.preventDefault(),t.addCart(s)}}})],1)},a=[],n={render:i,staticRenderFns:a};s.a=n},siU2:function(t,s,e){"use strict";var i=function(){var t=this,s=t.$createElement;return(t._self._c||s)("div",{staticClass:"split"})},a=[],n={render:i,staticRenderFns:a};s.a=n},wRoe:function(t,s){},wYts:function(t,s,e){"use strict";var i=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"ratingselect"},[e("div",{staticClass:"rating-type border-1px"},[e("span",{staticClass:"block positive",class:{active:2===t.selectType},on:{click:function(s){t.select(2,s)}}},[t._v(t._s(t.desc.all)),e("span",{staticClass:"count"},[t._v(t._s(t.ratings.length))])]),t._v(" "),e("span",{staticClass:"block positive",class:{active:0===t.selectType},on:{click:function(s){t.select(0,s)}}},[t._v(t._s(t.desc.positive)),e("span",{staticClass:"count"},[t._v(t._s(t.positives.length))])]),t._v(" "),e("span",{staticClass:"block negative",class:{active:1===t.selectType},on:{click:function(s){t.select(1,s)}}},[t._v(t._s(t.desc.negative)),e("span",{staticClass:"count"},[t._v(t._s(t.negatives.length))])])]),t._v(" "),e("div",{staticClass:"switch",class:{on:t.onlyContent},on:{click:t.toggleContent}},[e("span",{staticClass:"icon-check_circle"}),t._v(" "),e("span",{staticClass:"text"},[t._v("只看有内容的评价")])])])},a=[],n={render:i,staticRenderFns:a};s.a=n},x8iV:function(t,s,e){"use strict";var i=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("transition",{attrs:{name:"move"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.showFlag,expression:"showFlag"}],ref:"food",staticClass:"food"},[e("div",{staticClass:"food-content"},[e("div",{staticClass:"image-header"},[e("img",{attrs:{src:t.food.image}}),t._v(" "),e("div",{staticClass:"back",on:{click:t.back}},[e("i",{staticClass:"icon-arrow_lift"})])]),t._v(" "),e("div",{staticClass:"content"},[e("h1",{staticClass:"title"},[t._v(t._s(t.food.name))]),t._v(" "),e("div",{staticClass:"detail"},[e("span",{staticClass:"sell-count"},[t._v("月售"+t._s(t.food.sellCount)+"份")]),t._v(" "),e("span",{staticClass:"sell-count"},[t._v("好评率"+t._s(t.food.rating)+"%")])]),t._v(" "),e("div",{staticClass:"price"},[e("span",{staticClass:"now"},[t._v("￥"+t._s(t.food.price))]),e("span",{directives:[{name:"show",rawName:"v-show",value:t.food.oldPrice,expression:"food.oldPrice"}],staticClass:"old"},[t._v("￥"+t._s(t.food.oldPrice))])]),t._v(" "),e("div",{staticClass:"cartcontrol-wrapper"},[e("cartcontrol",{attrs:{food:t.food}})],1),t._v(" "),e("transition",{attrs:{name:"fade"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:!t.food.count||0===t.food.count,expression:"!food.count || food.count===0"}],staticClass:"buy",on:{click:function(s){s.stopPropagation(),s.preventDefault(),t.addFirst(s)}}},[t._v("加入购物车")])])],1),t._v(" "),e("split",{directives:[{name:"show",rawName:"v-show",value:t.food.info,expression:"food.info"}]}),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:t.food.info,expression:"food.info"}],staticClass:"info"},[e("h1",{staticClass:"title"},[t._v("商品信息")]),t._v(" "),e("p",{staticClass:"text"},[t._v(t._s(t.food.info))])]),t._v(" "),e("split"),t._v(" "),e("div",{staticClass:"rating"},[e("h1",{staticClass:"title"},[t._v("商品评价")]),t._v(" "),e("ratingselect",{attrs:{"select-type":t.selectType,"only-content":t.onlyContent,desc:t.desc,ratings:t.food.ratings},on:{ratingtypeSelect:t._ratingtypeSelect,contentToggle:t._contentToggle}}),t._v(" "),e("div",{staticClass:"rating-wraper"},[e("ul",{directives:[{name:"show",rawName:"v-show",value:t.food.ratings&&t.food.ratings.length,expression:"food.ratings && food.ratings.length"}]},t._l(t.food.ratings,function(s){return e("li",{directives:[{name:"show",rawName:"v-show",value:t.needShow(s.rateType,s.text),expression:"needShow(rating.rateType,rating.text)"}],staticClass:"rating-item border-1px"},[e("div",{staticClass:"user"},[e("span",{staticClass:"name"},[t._v(t._s(s.username))]),t._v(" "),e("img",{staticClass:"avatar",attrs:{width:"12",height:"12",src:s.avatar}})]),t._v(" "),e("div",{staticClass:"time"},[t._v(t._s(t._f("formatDate")(s.rateTime)))]),t._v(" "),e("p",{staticClass:"text"},[e("span",{class:{"icon-thumb_up":0===s.rateType,"icon-thumb_down":1===s.rateType}}),t._v(t._s(s.text)+"\n            ")])])})),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:!t.food.ratings||!t.food.ratings.length,expression:"!food.ratings || !food.ratings.length"}],staticClass:"no-rating"},[t._v("暂无评价")])])],1)],1)])])},a=[],n={render:i,staticRenderFns:a};s.a=n},xJD8:function(t,s,e){"use strict";var i=e("woOf"),a=e.n(i),n=e("hhm8"),r=e("hxP8");s.a={data:function(){return{seller:{id:function(){return e.i(n.a)().id}()}}},created:function(){var t=this;if(e.i(n.b)()){this.$http.get("https://liaozeen.github.io/ele_sell/api./data.json").then(function(s){s=s.body,t.seller=a()({},t.seller,s.seller)})}else this.$http.get("/api/seller?id="+this.seller.id).then(function(s){s=s.body,0===s.errno&&(t.seller=a()({},t.seller,s.data))})},components:{"v-header":r.a}}},xSw9:function(t,s,e){"use strict";function i(t){e("3RRX")}var a=e("jUHR"),n=e("AsYy"),r=e("VU/8"),o=i,c=r(a.a,n.a,o,null,null);s.a=c.exports},xSyG:function(t,s,e){"use strict";var i=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{attrs:{id:"app"}},[e("v-header",{attrs:{seller:t.seller}}),t._v(" "),e("div",{staticClass:"tab border-1px"},[e("div",{staticClass:"tab-item"},[e("router-link",{attrs:{to:"/goods"}},[t._v("商品")])],1),t._v(" "),e("div",{staticClass:"tab-item"},[e("router-link",{attrs:{to:"/ratings"}},[t._v("评论")])],1),t._v(" "),e("div",{staticClass:"tab-item"},[e("router-link",{attrs:{to:"/seller"}},[t._v("商家")])],1)]),t._v(" "),e("keep-alive",[e("router-view",{attrs:{seller:t.seller}})],1)],1)},a=[],n={render:i,staticRenderFns:a};s.a=n}},["NHnr"]);