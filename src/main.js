// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import http from './http'
import Mask from './plugins/xMask/index.js'

Vue.prototype.$http = http
Vue.use(Mask)
Vue.config.productionTip = false

import '!style-loader!css-loader!less-loader!./assets/iconfont/iconfont.css'
import '!style-loader!css-loader!less-loader!./assets/m-reset/m-reset.less'
//计算屏幕大小
Vue.prototype.$deviceW = function(){
  var docEl = document.documentElement,
      clientWidth = docEl.clientWidth;
  docEl.style.fontSize = 20 * (clientWidth / 375) + 'px';
}
//动态更改title
Vue.prototype.$title = function(str){
  document.title = str
}
// 引入轮播组件
import { Swipe, SwipeItem } from 'vant';
Vue.use(Swipe).use(SwipeItem)
//引入懒加载
import { Lazyload } from 'vant';
Vue.use(Lazyload);
//引入搜索框
import { Search } from 'vant';
Vue.use(Search);

//引入checkbox
import { Checkbox, CheckboxGroup } from 'vant';
Vue.use(Checkbox).use(CheckboxGroup);
import { Row, Col } from 'vant';

Vue.use(Row).use(Col);
import { Cell, CellGroup } from 'vant';
Vue.use(Cell).use(CellGroup);
//引入底部状态栏
import {
  GoodsAction,
  GoodsActionBigBtn,
  GoodsActionMiniBtn
} from 'vant';

Vue.use(GoodsAction).use(GoodsActionBigBtn).use(GoodsActionMiniBtn);

import { Icon } from 'vant';

Vue.use(Icon);

import { Loading } from 'vant';

Vue.use(Loading);
//引入遮罩
import { Field } from 'vant';

Vue.use(Field);


router.beforeEach((to,from,next)=>{
  store.dispatch("getLoadState",false);
  next()
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
