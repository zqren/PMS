<template>
  <div class="cart-container">
    <div class="cart-list">
        <div class="no-item">
          <p class="tips">全场满2件包邮，还差2件</p>
          <p @click="goBack" class="path">
            <span>去凑单</span>  
            <span class="iconfont icon-arrowR"></span>
          </p>
          <div class=""></div>
        </div>
        <div class="cart-edit">
          <span>编辑</span>
        </div>
        <div class="cart-goods">
          <div class="goods-checkbox">
            <van-checkbox v-model="checked"></van-checkbox>
          </div>
          <div class="goods-pic"></div>
          <div class="goods-desc"></div>
        </div>
    </div>
   
    <div class="footer-bar">
      <div class="select-all">
        <van-checkbox v-model="checked">全选</van-checkbox>
      </div>
      <div class="price-box">
        <p class="total-money">
          <span class="text">合计：</span>
          <span class="price">0.00</span>
        </p>
        <p class="total-score">
          <span class="score">兑换积分：0</span>
        </p>
      </div>
      <div class="submit-btn">结算</div>
    </div>
  </div>
</template>
<script>
export default {
  name:"cart",
  data(){
    return{
      checked:false
    }
  },
  methods:{
    goBack(){
      this.$router.back()
    }
  }
}
</script>
<style lang="less" scoped>
.cart-container{
  width: 100%;
  height: 100%;
  background: #f5f5f5;
  .cart-list{
    @val:2.5rem;
    width: 100%;
    height: 100%;
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
    .no-item{
      padding: 0rem .8rem;
      box-sizing: border-box;
      width: 100%;
      line-height:1.6rem;
      background: #fff;
      font-size: .7rem;
      color: #666;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .tips{
        flex: 7;
        color: #63cb2e;
      }
      .path{
        flex: 3;
        text-align: right;
        .iconfont{
          font-size: .7rem;
        }
      }
    }
    .cart-edit{
      text-align: right;
      padding: 0 .8rem;
      line-height:1.6rem;
      box-sizing: border-box;
      font-size: .7rem;
      color: #666;
      border-top: 1px solid #e5e5e5;
      color: #63cb2e;
    }
    .cart-goods{
      width: 100%;
      height: 9rem;
      background: #fff;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .goods-checkbox{
        flex: 1;
        background: red
      }
      .goods-pic{
        flex: 5;
        background: gold;
      }
      .goods-desc{
        flex: 13;
        background: blue
      }
    }
  }
 
  .footer-bar{
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 2.5rem;
    border-top: 1px solid #dddddd;
    background: #fff;
    z-index: 999;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .select-all{
      line-height: 2.5rem;
      flex-basis: 25%;
      height: 100%;
      text-align: center;
    }
    .price-box{
      flex-basis: 45%;
      height: 100%;
      padding:0 .85rem;
      box-sizing: border-box;
      text-align: right;
      .total-money{
        height: 55%;
        line-height: 1.375rem;
        font-size: .8rem;
        .text{
          color: #000;
        }
        .price{
          color: #7fd44e;
        }
      }
      .total-score{
        font-size: .7rem;
        height: 45%;
        line-height: 1.125rem;
        color: #ffd300;
      }
    }
    .submit-btn{
      line-height: 2.5rem;
      flex-basis: 30%;
      height: 100%;
      background: #ddd;
      color: #fff;
      text-align: center;
      font-size: 1rem;
    }

  }
}
</style>


