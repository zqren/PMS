<template>
  <div class="weight-reduce">
    <page-title title="本班学员减重情况"></page-title>
    <div class="weight-table">
        <div class="table-content">
            <div class="left-fixed">
                <ul class="content-list">
                    <li class="title">
                        <span>姓名</span>
                        <span>性别</span>
                    </li>
                    <li v-for="(item,index) in weightList" :key="index" class="content">
                        <span>{{item.name}}</span>
                        <span>{{item.sex}}</span>
                    </li>
                </ul>
            </div>
            <div class="right-scroll">
                <ul class="content-list">
                    <li class="title">
                        <span>累计减重</span>
                        <span>本周减重</span>
                        <span>目前体重</span>
                    </li>
                    <li v-for="(item,index) in weightList" :key="index" class="content">
                        <span>{{item.totalWeight}}</span>
                        <span>{{item.weekWeight}}</span>
                        <span>{{item.currentWeight}}</span>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    <div class="weight-detail">
        <div class="detail-data">
            <p class="text">
                <span>本周平均值/斤</span>
                <span>13</span>
            </p>
            <p class="text">
                <span>本周平均值/斤</span>
                <span>13</span>
            </p>
            <p class="text">
                <span>本周平均值/斤</span>
                <span>13</span>
            </p>
        </div>
        <div class="detail-data">
            <p class="text">
                <span>本周平均值/斤</span>
                <span>13</span>
            </p>
            <p class="text">
                <span>本周平均值/斤</span>
                <span>13</span>
            </p>
            <p class="text">
                <span>本周平均值/斤</span>
                <span>13</span>
            </p>
        </div>
    </div>
  </div>
</template>
<script>
import pageTitle from '@/components/pageTitle'
import labelTile from '@/components/xlabel'
export default {
  name:"weightReduce",
  data(){
      return{
        weightList:[{
            name:"张三",
            sex:"男",
            totalWeight:3.6,
            weekWeight:1.6,
            currentWeight:76
        },{
            name:"张三",
            sex:"男",
            totalWeight:3.6,
            weekWeight:1.6,
            currentWeight:76
        },{
            name:"张三",
            sex:"男",
            totalWeight:3.6,
            weekWeight:1.6,
            currentWeight:76
        },{
            name:"张三",
            sex:"男",
            totalWeight:3.6,
            weekWeight:1.6,
            currentWeight:76
        },{
            name:"张三",
            sex:"男",
            totalWeight:3.6,
            weekWeight:1.6,
            currentWeight:76
        },{
            name:"张三",
            sex:"男",
            totalWeight:3.6,
            weekWeight:1.6,
            currentWeight:76
        },{
            name:"张三",
            sex:"男",
            totalWeight:3.6,
            weekWeight:1.6,
            currentWeight:76
        }]
      }
  },
  components:{
    pageTitle,
    labelTile
  }
}
</script>
<style lang="less" scoped>
.weight-reduce{
    width: 100%;
    height: 100%;
    background: #fff;
    .weight-table{
        width: 100%;
        height: 20rem;
        overflow-y: auto;
        -webkit-overflow-scrolling: touch;
        padding: 1.3rem .8rem;
        box-sizing: border-box;
        .table-content{
            width: 100%;
            border: 2px solid #e5e5e5;
            display: flex;
            justify-content: space-between;
            align-items: center;
            .left-fixed{
                flex: 2;
                overflow: hidden;
                .content-list{
                    width: 100%;
                    li{
                        line-height: 2.85rem;
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        &.title{
                            font-size:.8rem;
                            color:#605d6e;
                            font-weight: 600; 
                        }
                        &:not(:last-child){
                            border-bottom: 1px solid #e5e5e5;
                        }
                        span{
                            box-sizing: border-box;
                            border-right: 1px solid #e5e5e5;
                            text-align: center;
                            &:first-child{
                                flex: 4;
                            }
                            &:last-child{
                                flex: 3;
                            }
                        }
                    }
                }
            }
            .right-scroll{
                flex: 3;
                overflow-x: auto;
                -webkit-overflow-scrolling: touch;
                .content-list{
                    width: auto;
                    li{ 
                        width: 18rem;
                        white-space: nowrap;
                        line-height: 2.85rem;
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        &.title{
                            font-size:.8rem;
                            color:#605d6e;
                            font-weight: 600; 
                        }
                        &:not(:last-child){
                            border-bottom: 1px solid #e5e5e5;
                        }
                        span{
                            flex: 1;
                            box-sizing: border-box;
                            text-align: center;
                            &:not(:last-child){
                                border-right: 1px solid #e5e5e5;
                            }
                        }
                    }
                }
            }
        }
    }
    .weight-detail{
        @val:25.5rem;
        width: 100%;
        height:calc(~"100% - @{val}");
        background: #f5f5f5;
        .detail-data{
            width: 100%;
            height: 50%;
            display: flex;
            justify-content: space-between;
            align-items: center;
            .text{
                flex: 1;
                text-align: center;
                span{
                    display: block;
                    &:first-child{
                        font-size: .6rem;
                        color: #9b99a9;
                    }
                    &:last-child{
                        font-size: .65rem;
                        font-weight: 600;
                    }
                }
            }
        }
    }
}
</style>
