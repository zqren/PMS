<template>
  <div class="activity-header">
        <van-cell-group class="cell-group" :border="false">
            <van-cell :to="{name:item.path}"  class="cell-text" v-for="(item,index) in content" :key="index" :title="item.name" is-link />
        </van-cell-group>
  </div>
</template>
<script>
export default {
  name:"ActivityLeaderHeader",
  data(){
      return{
          content:[{
              name:"各班打卡情况",
              path:"ActivityCheckImg"
          },{
              name:"各班减重情况",
              path:"ActivityWeightRpt"
          },{
              name:"各班管理情况",
              path:"ActivityManagerRpt"
          }]
      }
  }
}
</script>
<style lang="less" scoped>
.activity-header{
    width:100%;
    padding: .8rem .4rem;
    box-sizing: border-box;
    .cell-text{
       font-size: .9rem;
    }
}
</style>
