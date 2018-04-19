<template>
  <div class="activity-check">
      <page-title title="各小组减重情况">
        <p slot="sub" class="check-title">
            <span class="iconfont icon-time"></span>
            <span class="text">第一周</span>
        </p>
      </page-title>
      <div class="activity-check_table">
          <ul class="table-rpt">
            <li class="list-li title">
                <span>组别</span>
                <span>姓名</span>
                <span>三餐打卡</span>
                <span>茶饮打卡</span>
                <span>白芸豆打卡</span>
                <span>运动打卡</span>
                <span>累计打卡不达标次数</span>
            </li>
            <li v-for="(item,index) in myRptList" :key="index" class="list-li">
                <span>{{item.row}}</span>
                <span>{{item.name}}</span>
                <span>{{item.clock}}</span>
                <span>{{item.clock}}</span>
                <span>{{item.clock}}</span>
                <span>{{item.clock}}</span>
                <span>{{item.num}}</span>
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
                row:"第一组",
                name:"张三三",
                clock:6,
                num:6
            },{
                row:"第一组",
                name:"张三三",
                clock:6,
                num:6
            },{
                row:"第一组",
                name:"张三三",
                clock:6,
                num:6
            },{
                row:"第一组",
                name:"张三三",
                clock:6,
                num:6
            }]
        }
    },
    components:{
        pageTitle
    },
    created(){
        this.$title("分各班打卡情况")
    }
}
</script>
<style lang="less" scoped>
.activity-check{
    width: 100%;
    height: 100%;
    background: #fff;
    .check-title{
        width: 100%;
        text-align: right;
        color: #9b98ab;
       .iconfont{
            font-size: .7rem;
        }
        .text{
            margin-left: .2rem;
        }
    }
    .activity-check_table{
        width: 100%;
        padding: .8rem;
        box-sizing: border-box;
        .table-title{
            text-align: right;
            color: #605f65;
        }
        .table-rpt{
            width: 100%;
            margin-top: .5rem;
            border: 2px solid #e5e5e5;
            .list-li{
                width: 100%;
                height: 2.7rem;
                font-size: .6rem;
                color: #6e6c7a;
                display: flex;
                justify-content: space-between;
                align-items: center;
                &.title{
                    font-size:.6rem;
                    color:#605d6e;
                    font-weight: 600;
                    span:first-child{
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
                }
            }
        }
    }
}
</style>
