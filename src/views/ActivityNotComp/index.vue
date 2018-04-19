<template>
  <div class="not-complete">
    <page-title :title="title | fliterTitle"></page-title>
    <div class="complete-table">
        <ul class="table-ul">
            <li class="title">{{content.title}}</li>
            <li class="list">
                <span class="name">姓名</span>
                <span class="name">组别</span>
                <span class="name">教练</span>
                <span class="name">小组长</span>
            </li>
            <li class="list">
                <span class="name">{{content.name}}</span>
                <span class="name">{{content.row}}</span>
                <span class="name">{{content.cocah}}</span>
                <span class="name">{{content.leader}}</span>
            </li>
        </ul>
    </div>
  </div>
</template>
<script>
import pageTitle from "@/components/pageTitle"
export default {
  name:"activityNOtComp",
  data(){
    return{
        title:"",
        content:{
            title:"艾兰得JZ1801001班",
            name:"张三",
            row:"第一组",
            cocah:"李四",
            leader:"王二"
        }
    }
  },
  components:{
    pageTitle
  },
  filters:{
      fliterTitle(val){
          switch(val){
              case 1:
                return "本周打卡不达标人数";
                break;
            case 2:
                return "累计两周打卡不达标人数";
                break;
            case 3:
                return "周平均减重小于等于1斤的人员数";
                break;
            case 4:
                return "周运动次数大于5次或小于3次的人员数";
                break;
          }
      }
  },
  created(){
    this.getMemberInfo()
  },
  methods:{
      getMemberInfo(){
          this.title = this.$route.query.id
      }
  }
}
</script>
<style lang="less" scoped>
.not-complete{
    width: 100%;
    height: 100%;
    background: #fff;
    .complete-table{
        width: 100%;
        padding: .8rem;
        box-sizing: border-box;
        .table-ul{
            width: 100%;
            border: 2px solid #e5e5e5;
            li{
                line-height: 2.1rem;
                display: flex;
                justify-content: space-around;
                align-items: center;
                color: #625e75;
                text-align: center;
                &:not(:last-child){
                    border-bottom: 1px solid #e5e5e5;
                }
                &.title{
                    font-size: .8rem;
                }
                &.list{
                    font-size: .7rem;
                    span{
                        flex: 1;
                        &:not(:last-child){
                            border-right: 1px solid #e5e5e5;
                        }
                    }
                }
            }
        }
    }
}
</style>
