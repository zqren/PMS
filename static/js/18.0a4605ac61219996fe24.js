webpackJsonp([18],{EgnV:function(t,e){},tZ7j:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i={name:"StudentWeight",data:function(){return{myRptList:[{name:"艾兰得JZ1801001班 张三",week:3,towWeek:2,ltone:4,moreNum:6,id:1},{name:"艾兰得JZ1801001班 张三",text:20.6,id:2,week:3,towWeek:2,ltone:4,moreNum:6}]}},methods:{clickEvent:function(t){this.$router.push({name:"ActivityNotComp",query:{id:t}})}},components:{pageTitle:n("jEgR").a}},a={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"manager-rpt"},[n("page-title",{attrs:{title:"各班管理情况"}}),t._v(" "),n("div",{staticClass:"manager-rpt_table"},[n("ul",{staticClass:"table-rpt"},[t._m(0),t._v(" "),t._l(t.myRptList,function(e,i){return n("li",{key:i,staticClass:"list-li"},[n("span",[t._v(t._s(e.name))]),t._v(" "),n("span",{on:{click:function(n){t.clickEvent(e.id)}}},[t._v(t._s(e.week))]),t._v(" "),n("span",{on:{click:function(n){t.clickEvent(e.id)}}},[t._v(t._s(e.towWeek))]),t._v(" "),n("span",{on:{click:function(n){t.clickEvent(e.id)}}},[t._v(t._s(e.ltone))]),t._v(" "),n("span",{on:{click:function(n){t.clickEvent(e.id)}}},[t._v(t._s(e.moreNum))])])})],2)])],1)},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",{staticClass:"list-li title"},[n("span",[t._v("班别")]),t._v(" "),n("span",[t._v("本周打卡不达标人数")]),t._v(" "),n("span",[t._v("累计两周打卡不达标人数")]),t._v(" "),n("span",[t._v("周平均减重小于等于1斤的人员数")]),t._v(" "),n("span",[t._v("周运动次数大于5次或小于3次的人员数")])])}]};var s=n("VU/8")(i,a,!1,function(t){n("EgnV")},"data-v-08a3a05d",null);e.default=s.exports}});
//# sourceMappingURL=18.0a4605ac61219996fe24.js.map