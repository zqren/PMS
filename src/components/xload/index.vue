<template>
  <div class="load-box">
    <div class="spinner-box">
        <van-loading type="spinner" size="50px"  color="white"/>    
    </div>
    
  </div>
</template>
<script>
export default {
  name:"xload"
}
</script>
<style lang="less" scoped>
.load-box{
    position: fixed;
    top: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 999;
    .spinner-box{
        width: 80px;
        height: 80px;
        border-radius: 4px;
        background: rgba(0, 0, 0, .4);
        display: flex;
        justify-content: center;
        align-items: center;
    }
}
</style>
