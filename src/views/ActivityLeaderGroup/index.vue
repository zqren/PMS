<template>
  <div class="activity-leader">
        <van-cell-group class="cell-group" :border="false">
            <van-cell :to="{name:item.path}"  class="cell-text" v-for="(item,index) in content" :key="index" :title="item.name" is-link />
        </van-cell-group>
  </div>
</template>
<script>
export default {
  name:"ActivityLeader",
  data(){
    return{
        content:[{
            name:"我的体测数据",
            path:'MemberMain'
        },{
            name:"我的组员体测图"
        },{
            name:"我的减重情况"
        },{
            name:"其他组员减重情况"
        },{
            name:"本小组减重情况"
        },{
            name:"各小组减重情况"
        }]
    }
  }
}
</script>
<style lang="less" scoped>
.activity-leader{
    width:100%;
    padding: .8rem .4rem;
    box-sizing: border-box;
    .cell-text{
       font-size: .9rem;
    }
}
</style>
