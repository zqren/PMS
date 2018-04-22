<template>
    <div ref="homeRef" class="active-home" @scroll="getScrollTop">
        <div class="home-top">
            <page-title :border="false" :padding="false" title="艾兰得减脂">
                <a slot="icon" href="tel:13615195266" class="iconfont icon-custom"></a>
            </page-title>
            <van-swipe :autoplay="3000">
                <van-swipe-item v-for="(image, index) in swiperImgList" :key="index">
                    <img class="swiper-pic" :src="image.PhotoPath  | filterPic" />
                </van-swipe-item>
            </van-swipe>
            <div class="menu-list">
                <div @click="gotoPage(item.path)" v-for="(item,index) in menuList" :key="index" class="menu">
                    <div class="menu-icon" :class="item.menu">
                        <span class="iconfont" :class="item.icon"></span>
                    </div>
                    <div class="menu-text">{{item.text}}</div>
                </div>
            </div>
        </div>
        <div ref="homeTab" class="home-tab" :class="{'tab-scroll':tabFixed}">
            <div class="tab-box">
                <div @click="changeView(item.name)"
                    v-for="(item,index) in tabs"
                    :key="index"
                    class="tab-nav"
                    :class="{active:currentView == item.name}"
                >{{item.text}}</div>
            </div>
        </div>
        <div v-show="homeScrolltop>0" @click="backTop" class="back-top">
            <span class="iconfont icon-top"></span>
        </div>
        <div class="download-app">
            <div class="text">艾兰得减脂训练营</div>
            <div @click="downloadAPP" class="btn-box">
                <div class="btn">立即下载</div>
            </div>
        </div>
        <dynamic :dynamicList = "dynamics" source="home" :viewScroll = "viewStyle" v-show = "currentView=='dynamic'"></dynamic>
        <winner :winnerList = "winners" :viewScroll = "viewStyle" v-show = "currentView=='winner'"></winner>
        <history :historyList = "history" :viewScroll = "viewStyle" v-show = "currentView == 'history'"></history>
    </div>
</template>
<script>
import pageTitle from '@/components/pageTitle'
import dynamic from '@/components/signDynamic'
import winner from '@/components/winList/'
import history from '@/components/historyList'
import formatDate from '@/utils/formatDate'

import {mapGetters} from 'vuex'

export default {
    name:"home",
    data(){
        return{
            swiperImgList:[],
            menuList:[{
                menu:"appli",
                icon:"icon-appli",
                text:"我要报名",
                path:""
            },{
                menu:"store",
                icon:"icon-store",
                text:"商城",
                path:"shop"
            }],
            tabs:[{
                name:"dynamic",
                text:"打卡动态"
            },{
                name:"winner",
                text:"获奖名单"
            },{
                name:"history",
                text:"往期花絮"
            }],
            currentView:"dynamic",
            dynamics:[],
            winners:[],
            history:[{
                pic:"http://pic.sc.chinaz.com/files/pic/pic9/201804/bpic6465.jpg"
            },{
                pic:"http://pic.sc.chinaz.com/files/pic/pic9/201803/zzpic11048.jpg"
            },{
                pic:"http://img3.imgtn.bdimg.com/it/u=1392735517,2317458530&fm=27&gp=0.jpg"
            },{
                pic:"http://img5.imgtn.bdimg.com/it/u=2835777730,3410042999&fm=27&gp=0.jpg"
            }],
            tabFixed:false,
            tabOffsetTop:0,
            homeScrolltop:0,
            viewStyle:false,
            topEvent:null,
            expandShow:true
        }
    },
    components:{
        pageTitle,
        dynamic,
        winner,
        history
    },
    computed:{
        ...mapGetters(['userInfo'])
    },
    created(){
        this.$store.dispatch('getLoadState',false)
        this.getHomeInfo()
    },
    methods:{
        getHomeInfo(){
            this.$http.get('/api/Menu/SelectMenuByUserId?strquery={"PageID":"SelectMenuByUserId","UserID":"0"}')
            .then(res=>{
                if(res.data.success){
                   this.$set(this.$data,'swiperImgList',res.data.ds.AlandInfoList)
                   this.getUserClock()
                   this.getAward()
                }
            }).catch(err=>{
                console.log(err)
            })
        },
        getUserClock(){
            let date = JSON.stringify(formatDate(new Date(),"yyyy-MM-dd"))
            this.$http.get(`/api/UserClock/SelectUserClockListByDate?strquery={"PageID":"SelectUserClockListByDate","Date":${date}}`)
            .then(res=>{
                this.$set(this.$data,"dynamics",res.data.objectData)
                this.tabOffsetTop = this.swiperImgList.length?this.$refs.homeTab.offsetTop:0
            })
            .catch(err=>{
                console.log(err)
            })
        },
        getAward(){
            this.$http.get('/api/Award/GetAwardList?strquery={"PageID":"GetAwardList"}')
            .then(res=>{
                this.$set(this.$data,"winners",res.data.rows)
            })
            .catch(err=>{
                console.log(err)
            })
        },
        getScrollTop(e){
            console.log(this.tabOffsetTop)

            this.homeScrolltop = e.target.scrollTop
            console.log( this.homeScrolltop)
            this.tabFixed =(e.target.scrollTop>=this.tabOffsetTop)? true:false
            this.viewStyle = (e.target.scrollTop>=this.tabOffsetTop)? true:false
        },
        gotoPage(path){
            if(!!path){
                this.$router.push({
                    name:path
                })
            }else{
                location.href="http://jzmx.alandgroup.com:8080/download/index.html"
            }
        },
        changeView(name){
            this.currentView = name
        },
        backTop(){
            //设置一个定时器
            this.topEvent = setInterval(() => {
                //获取滚动条的滚动高度
                var osTop =this.$refs.homeRef.scrollTop
                //用于设置速度差，产生缓动的效果
                var speed = Math.floor(-osTop / 6)
                this.$refs.homeRef.scrollTop = osTop + speed
                if(osTop == 0){
                    clearInterval(this.topEvent)
                }
            },25)
        },
        downloadAPP(){
           location.href="http://jzmx.alandgroup.com:8080/download/index.html"
        }
    }
}
</script>
<style lang="less" scoped>
.active-home{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
    background: #f5f5f5;
    padding-bottom:3rem; 
    .home-top{
        width: 100%;
        height: auto;
        background: #fff;
        padding: 0 .8rem;
        box-sizing: border-box;
    }
    .swiper-pic{
        height: 10rem; 
    }
    .menu-list{
        width: 100%;
        height: 5.5rem;
        font-size: 0;
        padding: .7rem 0;
        box-sizing: border-box;
        .menu{
            display: inline-block;
            width: 50%;
            text-align: center;
            vertical-align: middle;
            .menu-icon{
                width: 2.5rem;
                height: 2.5rem;
                line-height: 2.5rem;
                margin: 0 auto;
                border-top-left-radius: .9rem;
                border-top-right-radius: .9rem;
                border-bottom-left-radius: .9rem;
                border-bottom-right-radius: .9rem;
                &.appli{
                    background: linear-gradient(to bottom,#b2f10e,#6ed02f);
                    color: #fff;
                }
                &.store{
                    background: linear-gradient(to bottom,#fe9f68,#ff6861);
                    color: #fff;
                 }
                .iconfont{
                    line-height: 2.5remx;
                    font-size: 1.3rem;
                }
                
            }
            .menu-text{
                padding-top: .6rem;
                box-sizing: border-box;
                font-size: .8rem;
                color: #4a4a4a;
                text-align: center;
            }
        }
    }
    .home-tab{
        margin-top: .5rem;
        width: 100%;
        background: #fff;
        height: 2.25rem;
        &.tab-scroll{
            position: fixed;
            top: -.5rem;
            z-index: 999;
        }
        .tab-box{
            width: 100%;
            height: 100%;
            border-bottom: 1px solid #e5e5e5;
            font-size: 0;
             .tab-nav {
                display: inline-block;
                width: 33%;
                height: 100%;
                line-height: 2.25rem;
                font-size: .8rem;
                color: #9b99a9;
                text-align: center;
                &.active{
                    border-bottom: 2px solid #66cc33;
                    color: #66cc33;
                    box-sizing: border-box;
                }
            }
        }
    }
    .back-top{
        position: fixed;
        right: .8rem;
        bottom:3.2rem;
        z-index: 10000;
        width: 2rem;
        height: 2rem;
        border-radius: 50%;
        background: linear-gradient(to right,#66cc33,#79d62a);
        text-align: center;
        line-height: 2rem;
        span{
            color: #fff;
            font-size: 1.4rem;
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
<style lang="less">
.active-home{
    .van-swipe__indicators{
        bottom:10px;
        height: auto;
        line-height:15px;
        font-size:0;
    }
    .van-swipe__indicators>i{
        width: 10px;
        height: 10px;
        border: 4px solid #fff;
        display:inline-block;
        background: transparent;
        vertical-align: middle;
    }
    .van-swipe__indicators .van-swipe__indicator--active{
        width:15px;
        height: 15px;
        background:#fff;
    }
}

</style>

