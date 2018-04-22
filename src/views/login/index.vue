<template>
  <div class="login" :style="{backgroundImage:`url(${logoPic})`}">
    <div class="login-input">
      <van-cell-group>
        <van-field
          type="tel"
          :class="{'error-color':tipIcon=='warn'}"
          v-model="telphone"
          label="手机号码"
          :icon="tipIcon"
          @click-icon="clearInput"
          @focus="resetInput"
          placeholder="请输入手机号码"
        />
        <van-field
          v-model="password"
          type="password"
          label="密码"
          icon="clear"
          @click-icon="password = ''"
          placeholder="请输入密码"
        />
      </van-cell-group>
      <!-- <div class="forget-pwd">找回密码</div> -->
    </div>
    <div class="login-btn">
      <x-btn @btnEvent="loginBtnEvent" :disabled="!telphone || !password" btnText="立即登陆"/>
      <!-- <x-btn @btnEvent="registAccount" :disabled="false" colorType="custom" btnText="立即注册"/> -->
    </div>
  </div>
</template>
<script>
  import {mapActions} from 'vuex'
  import xBtn from '@/components/xBtn'

  export default {
    name: "login",
    data() {
      return {
        logoPic: require('@/assets/images/logo.png'),
        telphone: "",
        password: "",
        tipIcon: "clear",
        disabled: false
      }
    },
    components:{
      xBtn
    },
    created() {
      this.$title("登陆")
      this.$store.dispatch("getLoadState", false)
    },
    methods: {
      ...mapActions(['getUserInfo']),
      clearInput() {
        if (this.tipIcon == "clear") {
          this.telphone = ""
        } else {
          return;
        }
      },
      resetInput() {
        this.telphone = ""
        this.tipIcon = "clear"
      },
      loginBtnEvent() {
        if (!this.telphone.match(/^(0|86|17951)?(13[0-9]|15[012356789]|17[0678]|18[0-9]|14[57])[0-9]{8}$/)) {
          this.$toast({
            type: "fail",
            message: "手机号码错误",
            duration: 1000
          });
          this.tipIcon = "warn"
        } else {
          this.$store.dispatch('getLoadState',true)
          this.loginAccount()
        }
      },
      loginAccount() {
        let param = new FormData()
        param.append("Telephone",this.telphone)
        param.append("Password",this.password)
        this.$http.post('/api/User/Login', param).then(res => {
          if (res.data.success) {
            this.getUserInfo(res.data.rows)
            this.router.replace({
              name:"home"
            })
          } else {
            this.$toast({
              type: "fail",
              message: res.data.message,
              duration: 1000
            })
          }
          this.$store.dispatch('getLoadState',false)
        }).catch(err => {
          console.log(err)
        })
      },
      registAccount() {
        this.$router.push({
          name: "regist"
        })
      }
    }
  }
</script>
<style lang="less" scoped>
  .login {
    width: 100%;
    height: 100%;
    background-color: #fff;
    background-size: 100% 100%;
    background-position: center;
    position: relative;
    .login-input {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      left: 0;
      width: 100%;
      height: auto;
      .error-color {
        color: #f36668;
      }
      .forget-pwd {
        width: 100%;
        margin: .5rem auto;
        color: #2e6ee7;
        text-align: right;
        font-size: .7rem;
        padding: 0 .5rem;
        box-sizing: border-box;
      }
    }
    .login-btn {
      position: absolute;
      bottom: 0;
      width: 100%;
      height: 10.75rem;
      box-sizing: border-box;
    }
  }
</style>
