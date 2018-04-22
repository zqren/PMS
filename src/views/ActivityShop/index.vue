<template>
  <div class="shop-container">
      <page-title title="艾兰得商城"></page-title>
      <div class="shop-detail">
        <van-swipe :autoplay="3000">
            <van-swipe-item v-for="(image, index) in swiperImgList" :key="index">
                <img class="swiper-pic" :src="image.PhotoPath  | filterPic" />
            </van-swipe-item>
        </van-swipe>
        <div class="shop-list">
            <div @click="viewDetail" class="list" v-for="(item,index) in shopList" :key="index">
                <div class="list-item">
                    <img class="pic" v-lazy="item.pic" />
                </div>
                <div class="list-name">
                    <p>{{item.name}}</p>
                    <p v-if="item.subName">{{item.subName}}</p>
                </div>
                <div class="list-money">
                    <span class="price">￥{{item.price}}</span>
                    <span class="score">兑换积分{{item.score}}</span>
                </div>
            </div>
        </div>
      </div>
      <div class="download-app">
        <div class="text">更多优惠登陆APP商城查看</div>
        <div @click="downloadAPP" class="btn-box">
            <div class="btn">立即下载</div>
        </div>
      </div>
  </div>
</template>
<script>
import pageTitle from '@/components/pageTitle'
import { Dialog } from "vant"

export default {
  name:"shop",
  data(){
      return{
        swiperImgList:[],
        shopList:[{
            pic:"http://pic.sc.chinaz.com/files/pic/pic9/201804/bpic6465.jpg",
            name:"维生素C含片",
            subName:"(成人型)",
            price:140,
            score:120,
            id:1
        },{
            pic:"http://pic.sc.chinaz.com/files/pic/pic9/201804/bpic6465.jpg",
            name:"维生素C含片",
            subName:"",
            price:140,
            score:120,
             id:2
        },{
             pic:"http://pic.sc.chinaz.com/files/pic/pic9/201804/bpic6465.jpg",
            name:"维生素C含片",
            subName:"",
            price:140,
            score:120,
            id:3
        },{
            pic:"http://pic.sc.chinaz.com/files/pic/pic9/201804/bpic6465.jpg",
            name:"维生素C含片",
            subName:"",
            price:140,
            score:120,
            id:4
        },{
            pic:"http://pic.sc.chinaz.com/files/pic/pic9/201804/bpic6465.jpg",
            name:"维生素C含片",
            subName:"",
            price:140,
            score:120,
            id:5
        }]
      }
  },
  components:{
      pageTitle,
      Dialog
  },
  created(){
    this.getHomeInfo()
  },
  methods:{
    getHomeInfo(){
        this.$http.get('/api/Menu/SelectMenuByUserId?strquery={"PageID":"SelectMenuByUserId","UserID":"0"}')
        .then(res=>{
            if(res.data.success){
                this.$set(this.$data,'swiperImgList',res.data.ds.AlandInfoList)
                this.$store.dispatch('getLoadState',false)
            }
        }).catch(err=>{
            console.log(err)
        })
    },
    downloadAPP(){
        location.href="http://jzmx.alandgroup.com:8080/download/index.html"
    },
    viewDetail(){
        Dialog.confirm({
            title: '提示',
            message: '是否去APP商城购买？'
        }).then(() => {
           location.href="http://jzmx.alandgroup.com:8080/download/index.html"
        })
    }
  }
}
</script>
<style lang="less" scoped>
    .shop-container{
        width: 100%;
        height: 100%;
        overflow: hidden;
        background: #fff;
         position: absolute;
         top: 0;
        left: 0;
        .shop-detail{
            @val:4.5rem;
            width: 100%;
            height: calc(~"100% - @{val}");
            background: #ddd;
            overflow-y: auto;
            -webkit-overflow-scrolling: touch;
            .swiper-pic{
                height: 10rem; 
            }
            .shop-list{
                display: flex;
                justify-content: space-between;
                align-items: center;
                flex-wrap: wrap;
                padding-bottom: 2.5rem;
                box-sizing: border-box;
                .list{
                    flex-basis: 49.8%;
                    background: #fff;
                    height: 12.05rem;
                    margin-bottom: 1px;
                    padding:1.25rem .8rem;
                    box-sizing: border-box;
                    .list-item{
                        width: 4.8rem;
                        height: 6rem;
                        margin: 0 auto;
                        .pic{
                            width: 100%;
                            height: 100%;
                            display: inline-block;
                            vertical-align: middle;
                        }
                    }
                    .list-name{
                        width: 100%;
                        height: 2.75rem;
                        box-sizing: border-box;
                        text-align: center;
                        font-size: .7rem;
                        color: #000;
                        font-weight: 400;
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        align-items: center;
                    }
                    .list-money{
                        width: 100%;
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        .price{
                            flex-basis: 40%;
                            color: #7bd349;
                        }
                        .score{
                            flex-basis: 60%;
                            text-align: right;
                            color: #ffd822;
                        }
                    }
                }
            }
        }  
        .download-app{
        position: fixed;
        left: 0rem;
        bottom: 0rem;
        width: 100%;
        background: rgba(0,0,0,.4);
        height: 2.2rem;
        line-height: 2.2rem;
        padding: 0 .5rem;
        box-sizing: border-box;
        z-index: 999;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .text{
            flex-basis: 70%;
            color: #fff;
            font-size: .8rem;
        }
        .btn-box{
            flex-basis:30%;
            .btn{
                width: 80%;
                height: 80%;
                margin: 10% auto;
                background: linear-gradient(to right,#66cc33,#79d62a);
                border-radius: 6px;
                color: #fff;
                font-size: .7rem;
                text-align: center;
                line-height: 1.76rem;
            } 
        }
    }
    }
</style>



