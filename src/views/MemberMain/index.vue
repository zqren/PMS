<template>
  <div class="my-clock">
    <page-title title="本周打卡情况">
        <div slot="sub" class="clock-sub">
            <span class="iconfont icon-time"></span>
            <span class="text">第10周</span>
            <span class="currentTime">{{currentTime}}</span>
        </div>
    </page-title>
    <div class="clock-content">
        <div class="clock-overview">
            <label-title title="本周打卡情况"></label-title>
            <div class="clock-list">
                <ul class="clock-table">
                    <li v-for="(item,index) in clockList" :key="index" class="table-li">
                        <p>{{item.week}}</p>
                        <p class="iconfont" :class="{'icon-suc':item.singn,'suc':item.singn,'fail':!item.singn,'icon-fail':!item.singn}"></p>
                    </li>
                </ul>
                <p class="clock-text">本周缺卡{{weekNum}}次</p>
            </div>
        </div>
        <div class="my-bodytest">
            <label-title title="第10周体测数据"></label-title>
            <ul class="bodytest-list">
                <li class="list-li title">
                    <span>项目</span>
                    <span>数值</span>
                </li>
                <li v-for="(item,index) in bodyTestData" :key="index" class="list-li">
                    <span>{{item.name}}</span>
                    <span>{{item.text}}</span>
                </li>
            </ul>
        </div>
        <div class="bodytest-pic">
            <label-title color="#ffca05" title="第10周体测图"></label-title>
            <div class="pic-container">
                <img src="http://pic.sc.chinaz.com/files/pic/pic9/201804/bpic6465.jpg" class="pic"/>
            </div>
        </div>
     </div>
  </div>
</template>
<script>
import pageTitle from '@/components/pageTitle'
import labelTitle from '@/components/xlabel'
import formatDate from '@/utils/formatDate'
export default {
  name:"myClock",
  data(){
      return{
          clockList:[{
              week:"周一",
              singn:true
          },{
              week:"周二",
              singn:true
          },{
              week:"周三",
              singn:true
          },{
              week:"周四",
              singn:true
          },{
              week:"周五",
              singn:false
          },{
              week:"周六",
              singn:false
          },{
              week:"周日",
              singn:false
          }],
          weekNum:3,
          bodyTestData:[{
              name:"体重（kg）",
              text:79.5
          },{
              name:"BMI",
              text:20.6
          },{
              name:"脂肪率(%)",
              text:19.9
          },{
              name:"内脏脂肪指数",
              text:10
          }]
      }
  },
  computed:{
      currentTime(){
        return formatDate(new Date(),"yyyy-mm-dd w")
      }
  },
  components:{
    pageTitle,
    labelTitle
  }
}
</script>
<style lang="less" scoped>
.my-clock{
    width: 100%;
    height: 100%;
    background: #fff;
    .clock-sub{
        color: #9b99a9;
        .text{
            margin: 0 .5rem;
        }
    }
    .clock-content{
        padding: 0 .8rem;
        box-sizing: border-box;
        .clock-overview{
            width: 100%;
            .clock-list{
                width: 100%;
                border: 2px solid #e5e5e5;
                .clock-table{
                    width: 100%;
                    display: flex;
                    justify-content: space-around;
                    align-items: center;
                    .table-li{
                        flex: 1;
                        height: 4.2rem;
                        text-align: center;
                        border-bottom: 1px solid #e5e5e5;
                        &:not(:last-child){
                            border-right: 1px solid #e5e5e5;
                        }
                        p{
                            height: 50%;
                            line-height: 2.1rem;
                            &:not(:last-child){
                                border-bottom: 1px solid #e5e5e5;
                            }
                            &.suc{
                                color:#64cd33;
                            }
                            &.fail{
                                color: #fd514d;
                            }
                        }
                    }
                }
                .clock-text{
                    width: 100%;
                    line-height: 2.1rem;
                    background: #64cd33;
                    color: #fff;
                    padding-left: .5rem;
                    box-sizing: border-box;
                }
            }
        }
        .bodytest-list{
            width: 100%;
            border: 2px solid #e5e5e5;
            .list-li{
                width: 100%;
                height: 2.1rem;
                line-height: 2.1rem;
                font-size: .65rem;
                color: #6e6c7a;
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
                    text-align: center;
                    &:first-child{
                        border-right: 1px solid #e5e5e5;
                        box-sizing: border-box;
                    }
                }
            }
        }
        .bodytest-pic{
            width: 100%;
            .pic-container{
                width: 100%;
                .pic{
                    width: 100%;
                }
            }
        }
    }
}
</style>

