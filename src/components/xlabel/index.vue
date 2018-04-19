<template>
  <div class="title-label">
    <div class="label"><span :style="{background:color}"></span></div>
    <div class="title">{{title}}</div>
  </div>
</template>
<script>
export default {
 name:"xlabel",
 props:{
     title:{
        type:String,
        default:""
     },
     color:{
        type:String,
        default:"#67cc32"
     }
 }
}
</script>
<style lang="less" scoped>
.title-label{
    width: 100%;
    margin: 1rem auto;
    height: 1.05rem;
    font-size: 1rem;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    .label{
        flex-basis:5%;
        height: 100%;
        span{
            display: block;
            width: 4px;
            border-radius: 2px;
            height: 100%;
        }
    }
    .title{
        flex-basis: 95%;
        padding-left: 0;
        box-sizing: border-box;
    }
}
</style>
