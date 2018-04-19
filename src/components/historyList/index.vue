
<template>
  <div ref="history" class="history-list" :class="{'list-view':viewScroll}">
    <div class="list-box">
      <div v-for="(item,index) in historyList" 
           :key="index" 
           class="list-pic"
           :style="{transform:`translateY(${index-defaultIndex}00%)`,transitionDuration:`${speedTime}ms`}">
        <img :src="item.pic" class="pic"/>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name:"history",
  data(){
      return{
        scrollEvent:null,
        defaultIndex:0,
        speedTime:0,
        time:3000,
        speed:1000
      }
  },
  props:{
    historyList:{
      type:Array,
      default:()=>{
        return []
      }
    },
    viewScroll:{
      type:Boolean,
      default:false
    }
  },
  mounted(){
    this.scrollEvent = setInterval(this.marquee,this.time)
  },
  methods:{
    marquee(){
        this.defaultIndex++;
        this.speedTime = this.speed 
        this.setIndex();            
    },
    setIndex(){
        setTimeout(()=>{
            this.speedTime = 0
            this.defaultIndex = 0
            let temp = this.historyList[0]
            this.historyList.shift()
            this.historyList.push(temp)
        },this.speed)
    }
  }
}
</script>
<style lang="less" scoped>
.history-list{
  width: 100%;
  @val:1.75rem;
  height:calc(~"100% - @{val}");
  background: #fff;
  overflow: hidden;
  &.list-view{
    margin-top: 2.25rem;
    box-sizing: border-box;
  }
  .list-box{
    position: relative;
    width: 100%;
    height: 100%;
    .list-pic{
      position: absolute;
      width: 100%;
      height: 100%;
      text-align: center;
      transition-property: all;
      transition-timing-function: ease-in-out;
      .pic{
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>

