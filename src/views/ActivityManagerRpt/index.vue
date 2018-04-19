<template>
  <div class="manager-rpt">
      <page-title title="各班管理情况"></page-title>
      <div class="manager-rpt_table">
          <ul class="table-rpt">
            <li class="list-li title">
                <span>班别</span>
                <span>本周打卡不达标人数</span>
                <span>累计两周打卡不达标人数</span>
                <span>周平均减重小于等于1斤的人员数</span>
                <span>周运动次数大于5次或小于3次的人员数</span>
            </li>
            <li v-for="(item,index) in myRptList" :key="index" class="list-li">
                <span>{{item.name}}</span>
                <span @click="clickEvent(item.id)">{{item.week}}</span>
                <span @click="clickEvent(item.id)">{{item.towWeek}}</span>
                <span @click="clickEvent(item.id)">{{item.ltone}}</span>
                <span @click="clickEvent(item.id)">{{item.moreNum}}</span>
            </li>
        </ul>
      </div>
  </div>
</template>
<script>
import pageTitle from '@/components/pageTitle'
export default {
    name:"StudentWeight",
    data(){
        return{
            myRptList:[{
                name:"艾兰得JZ1801001班 张三",
                week:3,
                towWeek:2,
                ltone:4,
                moreNum:6,
                id:1
            },{
                name:"艾兰得JZ1801001班 张三",
                text:20.6,
                id:2,
                week:3,
                towWeek:2,
                ltone:4,
                moreNum:6
            }]
        }
    },
    methods:{
        clickEvent(id){
            this.$router.push({
                name:"ActivityNotComp",
                query:{
                    id:id
                }
            })
        }
    },
    components:{
        pageTitle
    }
}
</script>
<style lang="less" scoped>
.manager-rpt{
    width: 100%;
    height: 100%;
    background: #fff;
    .manager-rpt_table{
        width: 100%;
        padding: .8rem;
        box-sizing: border-box;
        .table-rpt{
            width: 100%;
            margin-top: .5rem;
            border: 2px solid #e5e5e5;
            .list-li{
                width: 100%;
                height: 4.5rem;
                font-size: .6rem;
                color: #6e6c7a;
                display: flex;
                justify-content: space-between;
                align-items: center;
                &.title{
                    font-size:.6rem;
                    color:#605d6e;
                    font-weight: 600;
                    span:not(:first-child){
                        flex: 1;
                        color: #605d6e;
                        text-decoration: none;
                    }
                }
                &:not(:last-child){
                    border-bottom: 1px solid #e5e5e5;
                }
                span{
                    flex: 1;
                    height: 100%;
                    display:flex;
                    justify-content: center;
                    align-items: center;
                    text-align: center;
                    &:not(:last-child){
                        border-right: 1px solid #e5e5e5;
                        box-sizing: border-box;
                    }
                    &:not(:first-child){
                        flex: 1;
                        color: #66cb3d;
                        text-decoration: underline;
                    }
                }
            }
        }
    }
}
</style>
