webpackJsonp([5],{"9Rxa":function(t,s){},EMfO:function(t,s){},"K+Ro":function(t,s,i){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a={render:function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"btn-box"},[i("button",{staticClass:"mul",attrs:{disabled:t.value<=1,type:"button"},on:{click:t.mulNum}},[t._v("-")]),t._v(" "),i("input",{ref:"input",staticClass:"input",attrs:{readonly:""},domProps:{value:t.value}}),t._v(" "),i("button",{staticClass:"add",attrs:{type:"button"},on:{click:t.addNum}},[t._v("+")])])},staticRenderFns:[]};var e={name:"goodsDetail",data:function(){return{goodsPic:[{pic:"http://pic.sc.chinaz.com/files/pic/pic9/201804/bpic6465.jpg"}],currentNum:1,goods:{title:"维生素C含片 桔子口味VC咀嚼片(60片)",price:2680,express:"免运费",remain:19,thumb:["https://img.yzcdn.cn/public_files/2017/10/24/e5a5a02309a41f9f5def56684808d9ae.jpeg","https://img.yzcdn.cn/public_files/2017/10/24/1791ba14088f9c2be8c610d0a6cc0f93.jpeg"]},isShow:!1,goodsNum:1}},components:{xNum:i("VU/8")({name:"xNum",props:["value"],methods:{updatedVal:function(t){this.$emit("input",t)},mulNum:function(){this.$refs.input.value--,this.updatedVal(this.$refs.input.value)},addNum:function(){this.$refs.input.value++,this.updatedVal(this.$refs.input.value)}}},a,!1,function(t){i("9Rxa")},"data-v-4416cc58",null).exports},created:function(){this.$title("营养品")},methods:{onChange:function(t){this.currentNum=t+1},closeMask:function(){this.isShow=!1,this.$closeMask()},formatPrice:function(){return"¥"+(this.goods.price/100).toFixed(2)},onClickMiniBtn:function(){},onClickBigBtn:function(){this.isShow=!0,this.$showMask()},buyGoods:function(){this.isShow=!1,this.$closeMask()}}},n={render:function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"goods-detail",class:{"over-scroll":t.isShow}},[i("div",{staticClass:"goods-swiper"},[i("van-swipe",{attrs:{autoplay:3e3},on:{change:t.onChange}},t._l(t.goodsPic,function(t,s){return i("van-swipe-item",{key:s},[i("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.pic,expression:"item.pic"}],staticClass:"swiper-pic"})])})),t._v(" "),i("div",{staticClass:"goods-num"},[i("span",[t._v(t._s(t.currentNum))]),t._v("/"),i("span",[t._v(t._s(t.goodsPic.length))])])],1),t._v(" "),i("van-cell-group",{attrs:{border:!1}},[i("van-cell",[i("div",{staticClass:"goods-title"},[t._v(t._s(t.goods.title))]),t._v(" "),i("div",{staticClass:"goods-price"},[i("div",{staticClass:"price-cell"},[i("span",{staticClass:"discount"},[i("span",[t._v("￥")]),t._v(" "),i("span",[t._v("20.90")])]),t._v(" "),i("span",{staticClass:"price"},[t._v("￥29.90")])]),t._v(" "),i("div",{staticClass:"score-cell"},[t._v("兑换积分:30")])]),t._v(" "),i("div",{staticClass:"goods-express"},[t._v("邮费：￥7.00")])]),t._v(" "),i("van-cell",[i("van-row",[i("van-col",{attrs:{span:"12"}},[i("span",{staticClass:"goods-tip"},[t._v("每位学员限购10件")])]),t._v(" "),i("van-col",{attrs:{span:"12"}},[i("span",{staticClass:"goods-tip"},[t._v("满2件包邮")])])],1)],1)],1),t._v(" "),t._m(0),t._v(" "),i("div",{staticClass:"goods-footer"},[t._v("去APP购买")])],1)},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"detail-content"},[s("p",{staticClass:"title"},[this._v("商品详情")]),this._v(" "),s("img",{attrs:{src:"https://img.yzcdn.cn/public_files/2017/10/24/e5a5a02309a41f9f5def56684808d9ae.jpeg"}})])}]};var c=i("VU/8")(e,n,!1,function(t){i("EMfO"),i("N7wL")},"data-v-7dbcaf66",null);s.default=c.exports},N7wL:function(t,s){}});
//# sourceMappingURL=5.e0d2a94b5f1818f2e69c.js.map