<template>
  <div class="mask-box" v-show="showmask" @click="onShowMask"></div>
</template>
<script>
export default {
  name:"xMask",
  props:{
    showmask:false,
    closeEvent:{
        type:Boolean,
        default:false
    }
  },
  methods:{
      onShowMask(){
        if(this.closeEvent){
          this.showmask = false
        }
      }
  }
}
</script>
<style lang="less" scoped>
.mask-box{
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,.5);
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999;
}
</style>


