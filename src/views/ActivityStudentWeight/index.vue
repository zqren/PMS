<template>
  <div class="student-weight">
      <page-title title="各小组减重情况">
        <div slot="sub" class="student-title">
            <p class="group">
                <span class="iconfont icon-date"></span>
                <span class="text">艾兰得JZ1801001班-第一组</span>
            </p>
            <p class="week">
                <span class="iconfont icon-time"></span>
                <span class="text">第一周</span>
            </p>
        </div>
      </page-title>
      <div class="student-weight_table">
          <p class="table-title">单位：斤</p>
          <ul class="table-rpt">
            <li class="list-li title">
                <span>组别</span>
                <span>男学员单周减重平均值</span>
                <span>女学员单周减重平均值</span>
                <span>单周减重平均值</span>
                <span>累计总减重平均值</span>
            </li>
            <li v-for="(item,index) in myRptList" :key="index" class="list-li">
                <span>{{item.name}}</span>
                <span>{{item.text}}</span>
                <span>{{item.text}}</span>
                <span>{{item.text}}</span>
                <span>{{item.text}}</span>
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
            name:"第一组",
            text:79.5
            },{
            name:"第二组",
            text:20.6
            }]
        }
    },
    components:{
        pageTitle
    }
}
</script>
<style lang="less" scoped>
.student-weight{
    width: 100%;
    height: 100%;
    background: #fff;
    .student-title{
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: #9b98ab;
        .group{
            flex: 3.5;
            .iconfont{
                font-size: .7rem;
            }
            .text{
                margin-left: .2rem;
            }
        }
        .week{
            flex: 1;
            text-align: right;
            .iconfont{
                font-size: .7rem;
            }
            .text{
                margin-left: .2rem;
            }
        }
    }
    .student-weight_table{
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
                    flex: 1.5;
                    height: 100%;
                    display:flex;
                    justify-content: center;
                    align-items: center;
                    text-align: center;
                    &:not(:last-child){
                        border-right: 1px solid #e5e5e5;
                        box-sizing: border-box;
                    }
                    &:first-child{
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
