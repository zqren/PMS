<template>
  <div class="sign-dynamic" :class="{'list-view':viewScroll}">
    <div class="dynamic-list" v-for="(item,index) in dynamicList" :key="index">
      <div class="left-pic" :class="{'source-home':source=='home','source-student':source=='student'}">
        <div class="pic-conatiner">
          <img v-lazy="item.pic"/>
        </div>
        <div class="pic-name">{{item.name}}</div>
      </div>
      <div class="right-content">
        <p v-if="source=='home'" class="title">完成【{{item.title}}】打开</p>
        <p v-if="source=='student'" class="title">【{{item.title}}】体测数据</p>
        <p class="time">{{item.time}}</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name:"signDynamic",
  props:{
    dynamicList:{
      type:Array,
      default:()=>{
        return []
      }
    },
    viewScroll:{
      type:false,
      default:false
    },
    source:{
      type:String,
      default:"home"
    }
  }
}
</script>
<style lang="less" scoped>
  .sign-dynamic{
    width: 100%;
    @val:1.75rem;
    height:calc(~"100% - @{val}");
    background: #fff;
    padding: 0 .8rem;
    box-sizing: border-box;
    &.list-view{
      margin-top: 2.25rem;
      box-sizing: border-box;
    }
    .dynamic-list{
      width: 100%;
      height: 5rem;
      display: flex;
      justify-content: center;
      align-items: center;
      .left-pic{
        flex-basis: 35%;
        height: 100%;
        border-right: 1px solid #66cc33;
        position: relative;
        &:before{
          display: block;
          width: .8rem;
          height: 1.2rem;
          text-align: center;
          line-height: 1.2rem;
          background: #fff;
          right: -0.4rem;
          top: 50%;
          transform: translateY(-50%);
          position: absolute;
          font-family: "iconfont";
          color: #66cc33;
        }
        &.source-home{
          &::before{
            content:"\e62b";
          }
        }
        &.source-student{
          &::before{
            content: "\e60c"
          }
        }
        .pic-conatiner{
          width: 2.5rem;
          height: 2.5rem;
          border-radius: 4px;
          overflow: hidden;
          margin: 1.25rem auto 0.04rem auto;
          img{
            width: 100%;
            height: 100%;
          }
        }
        .pic-name{
          text-align: center;
          font-size: .8rem;
        }
      }
      .right-content{
        flex-basis: 65%;
        height: 100%;
        text-align: center;
        padding: 1.65rem 0;
        box-sizing: border-box;
        .title{
          font-size: .8rem;
          font-weight: 500;
        }
        .time{
          font-size: .7rem;
          color: #a9aab8;
        }
      }
    }
  }
</style>


