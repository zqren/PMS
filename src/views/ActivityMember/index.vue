<template>
  <div class="activity-member">
        <van-cell-group class="cell-group" :border="false">
            <van-cell :to="{name:item.path}" class="cell-text" v-for="(item,index) in content" :key="index" :title="item.name" is-link />
        </van-cell-group>
  </div>
</template>
<script>
export default {
  name:"ActivityHeader",
  data(){
      return{
          content:[{
              name:"我的体测数据",
              path:"MemberMain"
          },{
              name:"我的减重情况",
              path:"ActivityMyWeightRpt"
          },{
              name:"其他组员减重情况",
              path:"ActivityOtherWeightRpt"
          }]
      }
  }
}
</script>
<style lang="less" scoped>
.activity-member{
    width:100%;
    padding: .8rem .4rem;
    box-sizing: border-box;
    .cell-text{
       font-size: .9rem;
    }
}
</style>
