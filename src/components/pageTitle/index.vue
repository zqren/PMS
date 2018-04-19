<template>
  <div class="page-title" :class="{'page-border':border,'page-padding':padding}">
    <slot name="search"></slot>
    <div class="title-slot">
        <div class="title">
            <p class="text">{{title}}</p>
            <div class="sloticon">
                <slot name="icon"></slot>
            </div>
        </div>
    </div>
    <div class="sub-slot">
        <slot name="sub"></slot>
    </div>
  </div>
</template>
<script>
export default {
  name:"pagTitle",
  props:{
    title:{
        type:String,
        default:""
    },
    border:{
        type:Boolean,
        default:true,
    },
    padding:{
        type:Boolean,
        default:true
    }
  }
}
</script>
<style lang="less" scoped>
    .page-title{
        width: 100%;
        height: 5.5rem;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        background: #fff;
        position: relative;
        &.page-border{
            border-bottom: 1px solid #dddddd;
        }
        &.page-padding{
            padding: 0 .8rem;
        }
        .title-slot{
            flex:4;
            width: 100%;
            box-sizing: border-box;
            position: relative;
            .title{
                font-size: 1.5rem;
                position: absolute;
                bottom:0;
                width: 100%;
                display: flex;
                justify-content: space-between;
                align-items: center;
                .text{
                    flex: 8;
                }
                .sloticon{
                    flex: 1;
                    text-align: right;
                    .iconfont{
                        color: #3f913f;
                        font-size: 1.3rem;
                    }
                }
            }
            
        }
        .sub-slot{
            flex: 1;
            font-size: .7rem;
        }
    }
</style>
