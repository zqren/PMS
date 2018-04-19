<template>
  <div class="shop-container">
      <page-title title="艾兰得商城">
        <div slot="search" class="shop-search">
           <van-search
                background="#FFF"
                v-model="result"
                show-action
                @search="onSearch"
                >
                <div slot="action" @click="onSearch" class="shop-cart">搜索</div>
            </van-search>
        </div>
      </page-title>
     
      <div class="shop-list">
        <router-link tag="div" :to="{name:'goods',query:{goodsId:item.id}}" class="list" v-for="(item,index) in shopList" :key="index">
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
        </router-link>
      </div>
  </div>
</template>
<script>
import pageTitle from '@/components/pageTitle'
export default {
  name:"shop",
  data(){
      return{
        result:"",
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
      pageTitle
  },
  created(){
    this.$store.dispatch('getLoadState',false)
  },
  methods:{
      onSearch(){
        this.$router.push({
            name:"weightReduce"
        })
      },
      viewCart(){
        this.$router.push({
            name:"cart"
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
       .shop-search{
            width: 92%;
            height: 2.25rem;
            box-sizing: border-box;
            position: absolute;
            top: 0;
            .shop-cart{
                width: 2rem;
                text-align: center;
                color: #75d142;
                font-size: .8rem;
            }
        }
        .shop-list{
            @val:5.5rem;
            width: 100%;
            height: calc(~"100% - @{val}");
            background: #ddd;
            overflow-y: auto;
            -webkit-overflow-scrolling: touch;
            display: flex;
            justify-content: space-between;
            align-items: center;
            flex-wrap: wrap;
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
                    color: .6rem;
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
</style>



