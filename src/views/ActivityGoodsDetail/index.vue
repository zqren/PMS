<template>
  <div class="goods-detail" :class="{'over-scroll':isShow}">
    <div class="goods-swiper">
        <van-swipe @change="onChange" :autoplay="3000">
            <van-swipe-item v-for="(item, index) in goodsPic" :key="index">
                <img class="swiper-pic" v-lazy="item.pic" />
            </van-swipe-item>
        </van-swipe>
        <div class="goods-num">
            <span>{{currentNum}}</span>/<span>{{goodsPic.length}}</span>
        </div>
    </div>
    <van-cell-group  :border="false">
      <van-cell>
        <div class="goods-title">{{ goods.title }}</div>
        <div class="goods-price">
            <div class="price-cell">
                <span class="discount">
                    <span>￥</span>
                    <span>20.90</span>
                </span>
                <span class="price">￥29.90</span>
            </div>
            <div class="score-cell">兑换积分:30</div>
        </div>
        <div class="goods-express">邮费：￥7.00</div>
      </van-cell>
      <van-cell>
        <van-row>
            <van-col span="12">
                <span class="goods-tip">每位学员限购10件</span>
            </van-col>
            <van-col span="12">
                <span class="goods-tip">满2件包邮</span>
            </van-col>
        </van-row>
      </van-cell>
    </van-cell-group>
    <div class="detail-content">
        <p class="title">商品详情</p>
        <img src="https://img.yzcdn.cn/public_files/2017/10/24/e5a5a02309a41f9f5def56684808d9ae.jpeg"/>
    </div>
    <div class="goods-footer">去APP购买</div>
    <!-- <van-goods-action>
        <van-goods-action-mini-btn icon="chat" text="客服" @click="onClickMiniBtn" />
        <van-goods-action-mini-btn to="/cart" icon="cart" text="购物车" @click="onClickMiniBtn" info="5" />
        <van-goods-action-big-btn text="加入购物车" @click="onClickBigBtn" />
        <van-goods-action-big-btn text="立即购买" @click="onClickBigBtn" primary />
    </van-goods-action> -->
    <!-- <div class="buy-goods" :class="{show:isShow}">
        <div class="goods-info">
            <div class="goods-desc">
                <div class="goods-pic">
                    <img src="" class="pic" alt="">
                </div>
                <div class="goods-money">
                    <p class="price">
                        <span>￥20.99</span>
                        <span>￥29.99</span>
                    </p>
                    <p class="score">兑换积分:30</p>
                </div>
                <div @click="closeMask" class="goods-close">
                    <van-icon name="close" />
                </div>
            </div>
            <div class="goods-selectnum">
                <p class="title">数量</p>
                <xNum v-model="goodsNum"/>
            </div>
        </div>
        <div @click="buyGoods" class="goods-btn">
            <span>确认购买</span>
        </div>
    </div> -->
  </div>
</template>
<script>
import xNum from '@/components/xNum'
export default {
  name:"goodsDetail",
  data(){
      return{
        goodsPic:[{
            pic:"http://pic.sc.chinaz.com/files/pic/pic9/201804/bpic6465.jpg"
        }],
        currentNum:1,
        goods: {
            title: '维生素C含片 桔子口味VC咀嚼片(60片)',
            price: 2680,
            express: '免运费',
            remain: 19,
            thumb: [
            'https://img.yzcdn.cn/public_files/2017/10/24/e5a5a02309a41f9f5def56684808d9ae.jpeg',
            'https://img.yzcdn.cn/public_files/2017/10/24/1791ba14088f9c2be8c610d0a6cc0f93.jpeg'
            ]
        },
        isShow:false,
        goodsNum:1
      }
  },
  components:{
      xNum
  },
  created(){
    this.$title("营养品")
  },
  methods:{
    //监听轮播切换事件
    onChange(index){
        this.currentNum = index+1
    },
    //关闭遮罩
    closeMask(){
        this.isShow = false
        this.$closeMask()
    },
    //格式化价格
    formatPrice() {
      return '¥' + (this.goods.price / 100).toFixed(2);
    },
    onClickMiniBtn() {
        
    },
    onClickBigBtn() {
        this.isShow = true
        this.$showMask()
    },
    buyGoods(){
        this.isShow = false
        this.$closeMask()
    }
  }
}
</script>
<style lang="less" scoped>
.goods-detail{
    width: 100%;
    height:100%;
    background: #f5f5f5;
    &.over-scroll{
        overflow: hidden;
    }
    .goods-swiper{
        width: 100%;
        background: #fff;
        position: relative;
        .goods-num{
            position: absolute;
            bottom: 0;
            width: 100%;
            height: 42px;
            line-height: 42px;
            text-align: right;
            font-size: .9rem;
            padding: 0 .5rem;
            box-sizing: border-box;
            color: #666;
        }
    }
    .goods-title{
        color: #000;
        font-size: .8rem;
    }
    .goods-price{
        width: 100%;
        height: 3rem;
        line-height: 3rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .price-cell{
            flex-basis: 50%;
            .discount{
                color: #62cb31;
                span:first-child{
                    font-size:.8rem;
                }
                span:last-child{
                    font-size:1.05rem;
                }
            }
            .price{
                margin-left: .6rem;
                font-size: .8rem;
                color: #bbbec7;
                text-decoration: line-through;
            }
        }
        .score-cell{
            flex-basis: 50%;
            text-align: right;
            color: #ffcb06;
            font-size: .9rem;
        }
    }
    .goods-express{
        width: 100%;
        line-height: 1.05rem;
        font-size: .8rem;
        color: #bbbec7;
    }
    .goods-tip{
        display: block;
        position: relative;
        font-size: .7rem;
        padding-left:.5rem;
        color: #bbbec7;
        &:before{
            content:"";
            position: absolute;
            width: 6px;
            height: 6px;
            background: #62cb31;
            border-radius: 50%;
            left: 0;
            top:.48rem;
            margin-right: 5px;
        }
    }
    .detail-content{
        margin-top: .5rem;
        width: 100%;
        height: auto;
        padding-left:1.1rem;
        padding-right:1.1rem;
        background: #fff;
        border-top: 1px solid #e5e5e5; 
        padding-bottom:3rem;
        box-sizing: border-box;
        .title{
            width: 100%;
            height: 2.3rem;
            line-height: 2.3rem;
            font-size: .8rem;
        }
        .pic{
            width: 100%;
            height: 500px;
        }
    }
    .goods-footer{
        position: fixed;
        bottom: 0;
        width: 100%;
        height: 2.5rem;
        line-height: 2.5rem;
        text-align: center;
        font-size: .8rem;
        color: #fff;
        background:#65cc33;
    }
    .buy-goods{
        position: fixed;
        bottom: 0;
        width: 100%;
        height: 11.45rem;
        background: #fff;
        z-index: 99999;
        transform: translateY(100%);
        transition: all .3s ease-in-out;
        &.show{
            transform: translateY(0%)
        }
        .goods-info{
            width: 100%;
            height: 9.05rem;
            border-bottom: 1px solid #e5e5e5;
            padding: 1rem;
            box-sizing: border-box;
            .goods-desc{
                width: 100%;
                height: 4rem;
                display: flex;
                justify-content: space-around;
                .goods-pic{
                    flex-basis: 4rem;
                    border: 1px solid #e5e5e5;
                    .pic{
                        width: 100%;
                        height: 100%;
                    }
                }
                .goods-money{
                    flex-basis: 60%;
                    padding: .85rem .85rem;
                    box-sizing: border-box;
                    .price{
                        span:first-child{
                            font-size: .75rem;
                            color: #62cb31;
                        } 
                        span:last-child{
                            margin-left: .5rem;
                            font-size:.65rem;
                            color: #bbbec7;
                            text-decoration: line-through;
                        }
                    }
                    .score{
                        font-size: .8rem;
                        color: #ffcb06;
                    }
                }
                .goods-close{
                    flex-basis: 3rem;
                    font-size: 1.5rem;
                    color: #bbbec7;
                    text-align: right;
                }
            }
            .goods-selectnum{
                width: 100%;
                height: 3.05rem;
                .title{
                    width: 100%;
                    line-height: 2;
                    font-size: .8rem;
                }
            }
        }
        .goods-btn{
            width: 100%;
            height: 2.4rem;
            line-height: 2.4rem;
            text-align: center;
            font-size: .85rem;
            color: #62cb31;
        }
    }
}
</style>
<style lang="less">
.goods-swiper{
    .van-swipe__indicators{
       display:none;
    }
    .van-swipe__indicators>i{
         display:none;
    }
    .van-swipe__indicators .van-swipe__indicator--active{
         display:none;
    }
}
</style>

