<template>
  <div class="activity-student">
    <page-title title="学员体测图">
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
    <dynamic :dynamicList = "dynamics" source="student"/>
  </div>
</template>
<script>
import pageTitle from '@/components/pageTitle'
import dynamic from '@/components/signDynamic'

export default {
  name:"StudentBoy",
  data(){
      return{
        dynamics:[{
            pic:"http://pic.sc.chinaz.com/files/pic/pic9/201803/zzpic11048.jpg",
            name:"张三",
            title:"第十周",
            time:"2018-04-10 12:30:32"
        }, {
            pic:"http://pic.sc.chinaz.com/files/pic/pic9/201803/zzpic11048.jpg",
            name:"张三",
            title:"第十周",
            time:"2018-04-10 12:30:32"
        },{
            pic:"http://pic.sc.chinaz.com/files/pic/pic9/201803/zzpic11048.jpg",
            name:"张三",
            title:"第十周",
            time:"2018-04-10 12:30:32"
        },{
            pic:"http://pic.sc.chinaz.com/files/pic/pic9/201803/zzpic11048.jpg",
            name:"张三",
            title:"第十周",
            time:"2018-04-10 12:30:32"
        },{
            pic:"http://pic.sc.chinaz.com/files/pic/pic9/201803/zzpic11048.jpg",
            name:"张三",
            title:"第十周",
            time:"2018-04-10 12:30:32"
        },{
            pic:"http://pic.sc.chinaz.com/files/pic/pic9/201803/zzpic11048.jpg",
            name:"张三",
            title:"第十周",
            time:"2018-04-10 12:30:32"
        },{
            pic:"http://pic.sc.chinaz.com/files/pic/pic9/201803/zzpic11048.jpg",
            name:"张三",
            title:"第十周",
            time:"2018-04-10 12:30:32"
        },{
            pic:"http://pic.sc.chinaz.com/files/pic/pic9/201803/zzpic11048.jpg",
            name:"张三",
            title:"第十周",
            time:"2018-04-10 12:30:32"
        }]
      }
  },
  components:{
      pageTitle,
      dynamic
  }
}
</script>
<style lang="less" scoped>
.activity-student{
    width: 100%;
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
}
</style>
