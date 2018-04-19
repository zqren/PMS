<template>
  <div class="winner-list" :class="{'list-view':viewScroll}">
    <div class="winner-card" v-for="(item,index) in winnerList" :key="index">
      <p class="winner-title">{{item.title}}</p>
      <div class="winner-content">
        <div class="content-pic">
          <div class="pic-container">
            <img :src="item.pic"/>
          </div>
        </div>
        <div class="content-detail">
            <p class="name">{{item.name}}</p>
            <p class="mul">本周减重{item.mul{}}斤</p>
            <p class="totalMul">累计减重{{item.total}}斤</p>
          </div>
      </div>
    </div>
  </div>
</template>
<script>
import {vanCard} from 'vant'
export default {
  name:"winner",
  props:{
    winnerList:{
      type:Array,
      default:()=>{
        return []
      }
    },
    viewScroll:{
      type:false,
      default:false
    }
  }
}
</script>
<style lang="less" scoped>
  .winner-list{
    width: 100%;
    height: auto;
    background: #fff;
    padding: .5rem .8rem;
    box-sizing: border-box;
    &.list-view{
      margin-top: 2.75rem;
      box-sizing: border-box;
    }
    .winner-card{
      width: 100%;
      height: 7.65rem;
      background: #f6f6f5;
      border-radius: 6px;
      padding: 1.3rem 0;
      box-sizing: border-box;
      margin-bottom:.5rem; 
      .winner-title{
        text-align: center;
        font-size: .8rem;
        font-weight: 500;
      }
      .winner-content{
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        padding-top:.8rem;
        box-sizing: border-box; 
        .content-pic{
          flex-basis: 50%;
          display: flex;
          justify-content: flex-end;
          padding-right: .25rem;
          box-sizing: border-box;
          .pic-container{
            width: 3.5rem;
            height: 3.5rem;
            border-radius: 4px;
            overflow: hidden;
            img{
              width: 100%;
              height: 100%;
            }
          }
        }
        .content-detail{
          flex-basis: 50%;
          height: 100%;
          padding-left: .25rem;
          box-sizing: border-box;
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          .name{
            color:#727183;
            font-size: .8rem;
            flex-basis: 33%;
          }
          .mul{
            flex-basis: 34%;
            color: #abaab8;
            font-size: .7rem;
          }
          .totalMul{
            flex-basis: 33%;
            color: #abaab8;
            font-size: .6rem;
          }
        }
      }
    }
  }
</style>

