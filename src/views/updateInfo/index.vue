<template>
  <div class="update-info">
    <van-cell-group>
      <van-field
        type="password"
        v-model="pwd"
        label="输入密码"
        icon="clear"
        @click-icon="pwd=''"
        placeholder="请输入密码"
      />
      <van-field
        type="password"
        v-model="pwda"
        label="确认密码"
        placeholder="请再次确认密码"
        icon="clear"
        @click-icon="pwda = ''"
      >
      </van-field>
    </van-cell-group>
    <x-btn @btnEvent="confirmBtn" :disabled="!pwd || !pwda" btnText="确认"/>
  </div>
</template>
<script>
import xBtn from '@/components/xBtn'
import {mapGetters} from 'vuex'

export default {
  name:"updateInfo",
  data(){
    return{
        pwd:"",
        pwda:""
    }
  },
  computed:{
    ...mapGetters(['phoneNum'])
  },
  components:{
    xBtn
  },
  created(){
      this.$store.dispatch("getLoadState",false)
  },
  methods:{
    confirmBtn(){
        if(this.pwd != this.pwda){
            this.$toast({
                type:"fail",
                message:"两次密码不一致"
            })
            return;
        }
        this.createUser()
    },
    createUser(){
        this.$http.post('/api/User/CreateUser',{
            Telephone:this.phoneNum,
            Password:this.pwd
        }).then(res=>{
            if(res.data.success){
                this.$toast({
                    type:"success",
                    message:"注册用户成功"
                })
                this.$router.back()
            }else{
                this.$toast({
                    type:"text",
                    message:res.data.message
                })
            }
        })
    }
  }
}
</script>
<style lang="less" scoped>
.update-info{
    width: 100%;
    height: 100%;
    background: #fff;
    padding: 3rem 0;
    box-sizing: border-box;
}
</style>
