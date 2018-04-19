<template>
  <div class="regist-box">
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
        center
        v-model="sms"
        label="短信验证码"
        placeholder="请输入短信验证码"
        icon="clear"
        @click-icon="sms = ''"
      >
        <button :disabled="!telphone || btnDis" @click="sendCode" class="send-code" slot="button" type="button">{{btnText}}</button>
      </van-field>
    </van-cell-group>
    <!--<div class="private-policy">-->
      <!--<van-checkbox v-model="policyChecked">-->
        <!--<span>我已阅读并同意遵守</span>-->
        <!--<span class="text">《艾兰得减脂隐私政策》</span>-->
      <!--</van-checkbox>-->
    <!--</div>-->
    <x-btn btnText="下一步" @btnEvent="nextStep" :disabled="!telphone || !sms"/>
  </div>
</template>
<script>
import xBtn from '@/components/xBtn'
import {mapGetters,mapActions} from 'vuex'

  export default {
    name: "regist",
    data(){
      return{
        telphone:"",
        sms:"",
        tipIcon:"clear",
        count:60,
        btnDis:false,
        primarykey:"",
        btnText:"发送验证码",
        policyChecked:true
      }
    },
    components:{
      xBtn
    },
    computed:{
      ...mapGetters(['phoneNum'])
    },
    created() {
      this.$title("注册")
      this.$store.dispatch("getLoadState",false)
    },
    methods:{
      ...mapActions(['getPhoneNum']),
      clearInput(){
        if(this.tipIcon=="clear"){
          this.telphone = ""
        }else{
          return;
        }
      },
      resetInput(){
        this.telphone =""
        this.tipIcon = "clear"
      },
      nextStep(){
         this.getPhoneNum(this.telphone)
          this.$router.push({
          name:"updateInfo",
          query:{
            type:"regist"
          }
        })
        // if(!this.telphone.match(/^(0|86|17951)?(13[0-9]|15[012356789]|17[0678]|18[0-9]|14[57])[0-9]{8}$/)){
        //   this.$toast({
        //     type:"fail",
        //     message:"手机号码错误",
        //     duration:1000
        //   });
        //   this.tipIcon = "warn"
        //   //return;
        // }
        // if(this.sms != this.primarykey || this.phoneNum != this.telphone){
        //   this.$toast({
        //     type: "fail",
        //     message: "验证失败",
        //     duration: 1000
        //   });
        //  // return;
        // }
        // this.$router.push({
        //   name:"updateInfo",
        //   query:{
        //     type:"regist"
        //   }
        // })
      },
      sendCode(){
        if(!this.telphone.match(/^(0|86|17951)?(13[0-9]|15[012356789]|17[0678]|18[0-9]|14[57])[0-9]{8}$/)) {
          this.$toast({
            type: "fail",
            message: "手机号码错误",
            duration: 1000
          });
          this.tipIcon = "warn"
          return;
        }
        this.jugeUser()
      },
      jugeUser(){
        this.$http.post('/api/User/JudgeUser',{
          Telephone:this.telphone
        }).then(res=>{
          if(res.data.success){
            if(res.data.rows[0].NUM==1){
              this.$toast({
                type:"text",
                message:"该手机号已注册"
              })
            }else if(res.data.rows[0].NUM==0){
              this.$store.dispatch('getLoadState',true)
              this.getPhoneCode()
            }
          }else{
            this.$toast({
              type:"fail",
              message:res.data.message
            })
          }
        }).catch(err=>{
          console.log(err)
        })
      },
      getPhoneCode(){
        this.$http.post('/api/WaitingForSend/SendSMS',{
          receiveNO:this.telphone
        }).then(res=>{
          if(res.data.success){
            this.getPhoneNum(this.telphone)
            this.primarykey = res.data.primarykey
            this.btnDis = true
            this.btnText = '60s后重新发送'
            this.count--
            this.startTicktock()
            this.$toast({
              type:"success",
              message:res.data.message
            })
          }else{
            this.$toast({
              type:"fail",
              message:res.data.message
            })
          }
          this.$store.dispatch('getLoadState',false)
        })
      },
      startTicktock:function() {
        var ticktock = setInterval(()=>{
          if (this.count > 0 && this.count <= 60) {
            this.btnDis = true
            this.btnText = `${this.count}s后重新发送`
            this.count--
          } else {
            clearInterval(ticktock)
            this.btnDis = false
            this.btnText = "发送验证码"
            this.count = 60
          }
        }, 1000);
      },
    }
  }
</script>
<style lang="less" scoped>
  .regist-box {
    width: 100%;
    height: 100%;
    padding: 3rem 0;
    box-sizing: border-box;
    background: #fff;
    .error-color{
      color: #f36668;
    }
    .send-code{
      width: 6.5rem;
      height: 2.25rem;
      margin: -10px -15px -10px 0;
      background: #4b9d22;
      color: #fff;
      text-align: center;
      border: none;
      outline: none;
      &[disabled]{
        background: #90d46f;
      }
    }
    .private-policy{
      padding: .5rem;
      box-sizing: border-box;
      .text{
        text-decoration: underline;
      }
    }
  }
</style>
