webpackJsonp([6],{"/1ei":function(t,e){},"T+/8":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n("Dd8w"),s=n.n(o),a=n("NYxO"),i={name:"login",data:function(){return{logoPic:n("iQH9"),telphone:"",password:"",tipIcon:"clear",disabled:!1}},components:{xBtn:n("9ywN").a},created:function(){this.$title("登陆"),this.$store.dispatch("getLoadState",!1)},methods:s()({},Object(a.b)(["getUserInfo"]),{clearInput:function(){"clear"==this.tipIcon&&(this.telphone="")},resetInput:function(){this.telphone="",this.tipIcon="clear"},loginBtnEvent:function(){this.telphone.match(/^(0|86|17951)?(13[0-9]|15[012356789]|17[0678]|18[0-9]|14[57])[0-9]{8}$/)?(this.$store.dispatch("getLoadState",!0),this.loginAccount()):(this.$toast({type:"fail",message:"手机号码错误",duration:1e3}),this.tipIcon="warn")},loginAccount:function(){var t=this,e=new FormData;e.append("Telephone",this.telphone),e.append("Password",this.password),this.$http.post("/api/User/Login",e).then(function(e){e.data.success?(t.getUserInfo(e.data.rows),t.router.replace({name:"home"})):t.$toast({type:"fail",message:e.data.message,duration:1e3}),t.$store.dispatch("getLoadState",!1)}).catch(function(t){console.log(t)})},registAccount:function(){this.$router.push({name:"regist"})}})},c={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"login",style:{backgroundImage:"url("+t.logoPic+")"}},[n("div",{staticClass:"login-input"},[n("van-cell-group",[n("van-field",{class:{"error-color":"warn"==t.tipIcon},attrs:{type:"tel",label:"手机号码",icon:t.tipIcon,placeholder:"请输入手机号码"},on:{"click-icon":t.clearInput,focus:t.resetInput},model:{value:t.telphone,callback:function(e){t.telphone=e},expression:"telphone"}}),t._v(" "),n("van-field",{attrs:{type:"password",label:"密码",icon:"clear",placeholder:"请输入密码"},on:{"click-icon":function(e){t.password=""}},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1)],1),t._v(" "),n("div",{staticClass:"login-btn"},[n("x-btn",{attrs:{disabled:!t.telphone||!t.password,btnText:"立即登陆"},on:{btnEvent:t.loginBtnEvent}})],1)])},staticRenderFns:[]};var l=n("VU/8")(i,c,!1,function(t){n("/1ei")},"data-v-66c1c68e",null);e.default=l.exports},iQH9:function(t,e,n){t.exports=n.p+"static/img/logo.776309f.png"}});
//# sourceMappingURL=6.b499435c3b632e8a2872.js.map