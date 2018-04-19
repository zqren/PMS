<template>
  <div class="weight-management">
      <page-title title="减重管理"></page-title>
      <router-view></router-view>
  </div>
</template>
<script>
import pageTitle from '@/components/pageTitle'
export default {
  name:"weightManage",
  components:{
     pageTitle 
  }
}
</script>
<style lang="less" scoped>
    .weight-management{
        width: 100%;
        height: 100%;
        background: #fff;
    }
</style>
