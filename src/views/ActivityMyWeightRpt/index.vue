<template>
  <div class="weight-rpt">
    <page-title title="我的减重情况"></page-title>
    <div class="weight-process">
        <label-title title="我的减重进度"></label-title>
        <div class="process-label">
            <div class="label-pro">
                <p class="text">时间进度</p>
                <div class="label time iconfont icon-square">
                </div>
            </div>
            <div class="label-pro">
                <p class="text">减重进度</p>
                <div class="label weight iconfont icon-square"></div>
            </div>
        </div>
        <div ref="process" class="process-scroll">
            <div v-for="(item,index) in weekList" :key="index" class="process-week">
                <p :class="{active:currentWeek==index+1}">第{{item.week}}周</p>
                <div class="process" :class="{active:(index+1)<=currentWeek,current:currentWeek==index+1}"></div>
                <p>{{item.weight}}斤</p>
            </div>
        </div>
    </div>
    <div class="weight-situa">
        <label-title title="我的减重情况" color="#fdcd00"></label-title>
        <div class="process-label">
            <div class="label-pro">
                <p class="text">体重/kg</p>
                <span class="label weight iconfont icon-square"></span>
            </div>
            <div class="label-pro">
                <p class="text">脂肪率/%</p>
                <span class="label fat iconfont icon-square"></span>
            </div>
             <div class="label-pro BMI">
                <p class="text">BMI</p>
                <span class="label BMI iconfont icon-square"></span>
            </div>
             <div class="label-pro">
                <p class="text">内脏脂肪</p>
                <span class="label vis iconfont icon-square"></span>
            </div>
        </div>
        <div id="weightEchart"></div>
        <ul class="rpt-list">
            <li class="list-li title">
                <span>项目</span>
                <span>数值</span>
            </li>
            <li v-for="(item,index) in myRptList" :key="index" class="list-li">
                <span>{{item.name}}</span>
                <span>{{item.text}}</span>
            </li>
        </ul>
    </div>
  </div>
</template>
<script>
import pageTitle from '@/components/pageTitle'
import labelTitle from '@/components/xlabel'
import echarts from 'echarts'

export default {
    name:"ActivityMyWeightRpt",
    data(){
        return{
            myRptList:[{
                name:"本周减重/斤",
                text:79.5
            },{
                name:"累计减重/斤",
                text:20.6
            }],
            currentWeek:4,
            weekList:[{
                week:1,
                weight:0.75
            },{
                week:2,
                weight:0.75
            },{
                week:3,
                weight:0.75
            },{
                week:4,
                weight:0.75
            },{
                week:5,
                weight:0.75
            },{
                week:6,
                weight:0.75
            },{
                week:7,
                weight:0.75
            },{
                week:8,
                weight:0.75
            }]
        }
    },
    components:{
        pageTitle,
        labelTitle
    },
    created(){
        
    },
    mounted(){
        this.drawChart()
        this.getScrollLeft()
    },
    methods:{
        getScrollLeft(){
           let w = this.$refs.process.children[0].clientWidth
           this.$refs.process.scrollLeft = w*(this.currentWeek-3)
        },
        drawChart(){
            // 基于准备好的dom，初始化echarts实例
            var myChart = echarts.init(document.getElementById('weightEchart'));
            // 绘制图表
            myChart.setOption({
                title:{
                    show:false
                },
                legend:{
                    show:false
                },
                grid:{
                    show:true,
                    left:0,
                    right:20,
                    top:15,
                    bottom:15,
                    containLabel:true,
                    borderColor:'#ececee',
                    tooltip:{
                        show:false
                    }
                },
                 xAxis: {
                    type: 'category',
                    boundaryGap:false,
                    axisLine:{
                        lineStyle:{
                            color:"#cbcbcd",
                            width:2
                        }
                    },
                    axisTick:{
                        alignWithLabel:true,
                        interval:0,
                        length:5
                    },
                    axisLabel:{
                        interval:0,
                        inside:false,
                        color:"#a5a3b1"
                    },
                   splitLine:{
                       show:true
                   },
                    data: ['第1周', '第3周', '第5周', '第7周', '第9周', '第11周', '第13周']
                },
                yAxis: {
                    type: 'value',
                    min:0,
                    max:125,
                    interval:25,
                    boundaryGap:false,
                    axisLine:{
                        lineStyle:{
                            color:"#cbcbcd",
                            width:2
                        }
                    },
                    axisTick:{
                        alignWithLabel:true,
                        interval:0,
                        length:5
                    },
                    axisLabel:{
                        interval:0,
                        inside:false,
                        color:"#a5a3b1"
                    },
                },
                series: [{
                    data: [77, 114, 99, 81, 100,81, 48],
                    type: 'line',
                    smooth: true,
                    symbol:"circle",
                    symbolSize:7,
                    lineStyle:{
                        color:"#ff5e67",
                        width:3
                    },
                    itemStyle:{
                        color:"#ff5e67"
                    }
                },
                {
                    data: [50, 90, 102, 69, 33, 50, 13],
                    type: 'line',
                    smooth: true,
                    symbol:"circle",
                    symbolSize:7,
                    lineStyle:{
                        color:"#42c3ff",
                        width:3
                    },
                    itemStyle:{
                        color:"#42c3ff"
                    }
                },{
                    data: [87, 52, 30, 52, 30, 18, 52],
                    type: 'line',
                    smooth: true,
                    symbol:"circle",
                    symbolSize:7,
                    lineStyle:{
                        color:"#ffcb00",
                        width:3
                    },
                    itemStyle:{
                        color:"#ffcb00"
                    }
                },{
                    data: [101, 63, 80, 50, 16, 23, 64],
                    type: 'line',
                    smooth: true,
                    symbol:"circle",
                    symbolSize:7,
                    lineStyle:{
                        color:"#67cc2e",
                        width:3
                    },
                    itemStyle:{
                        color:"#67cc2e"
                    }
                }]
            });
        }
    }
}
</script>
<style lang="less" scoped>
.weight-rpt{
    width: 100%;
    background: #fff;
    .weight-process{
        width: 100%;
        padding:0rem .8rem 0 .8rem;
        box-sizing: border-box; 
        .process-label{
            width: 100%;
            height: 2.25rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
            font-size: .7rem;
            color: #666;
            .label-pro{
                flex:1;
                display: flex;
                justify-content: flex-start;
                align-items: center;
                .text{
                    flex-basis: auto;
                }
                .label{
                    font-weight: bolder;
                    margin-left: .25rem;
                    flex-basis: auto;
                    font-size: .9rem;
                    &.time{
                        color: #ffcb00;
                    }
                    &.weight{
                        color: #fa655e;
                    }
                }
            }
        }
        .process-scroll{
            width: 100%;
            height: auto;
            font-size: 0;
            white-space: nowrap;
            overflow-x: auto;
            -webkit-overflow-scrolling: touch;
            padding: .25rem 0;
            box-sizing: border-box;
            .process-week{
                width: 20%;
                height: auto;
                display: inline-block;
                vertical-align: middle;
                box-sizing: border-box;
                .process{
                    margin: 1rem 0;
                    height: .3rem;
                    background: #ececee;
                    position: relative;
                    &:before{
                        content: "\e630";
                        font-family: "iconfont";
                        font-size: .8rem;
                        color: #ececee;
                        position: absolute;
                        z-index: -1;
                        top: 50%;
                        left: 50%;
                        transform: translate(-50%,-50%);
                    }
                    &.active{
                        background: #ff625f;
                        &:before{
                            color: #ffca05;
                        }
                    }
                    &.current:before{
                        font-size: 1rem;
                    }

                }
                p{
                    font-size: .7rem;
                    text-align: center;
                    &.active{
                        color: #ffca05;
                        font-weight: 600;
                    }
                }
            }
        }
    }
    .weight-situa{
        width: 100%;
        padding:0rem .8rem 1rem .8rem;
        box-sizing: border-box;
        .process-label{
            width: 100%;
            height: 2.25rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
            font-size: .7rem;
            color: #666;
            .label-pro{
                flex:1;
                display: flex;
                justify-content: flex-start;
                align-items: center;
                &.BMI{
                    flex: .7;
                }
                .text{
                    flex-basis: auto;
                }
                .label{
                    font-weight: bolder;
                    margin-left: .25rem;
                    flex-basis: auto;
                    font-size: .9rem;
                    &.weight{
                        color: #ff5e67;
                    }
                    &.fat{
                        color: #42c3ff;
                    }
                    &.BMI{
                        color: #ffcb00;
                    }
                    &.vis{
                        color: #67cc2e;
                    }
                }
            }
        }
        #weightEchart{
            width: 100%;
            height: 11.4rem;
        }
        .rpt-list{
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
    }
}
</style>
