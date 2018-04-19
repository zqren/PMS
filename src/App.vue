<template>
  <div id="app">
    <transition :name="transitionName">
      <router-view/>
    </transition>
    <x-load v-if="loadState"></x-load>
  </div>
</template>

<script>
import xLoad from '@/components/xload';
import { Toast } from 'vant';

import {mapState} from 'vuex'
export default {
  name: 'App',
  data(){
    return{
      transitionName:"",
      routesArr:[]
    }
  },
  computed:{
    ...mapState(['loadState'])
  },
  components:{
    xLoad,
    Toast
  },
  created(){
    this.$deviceW()
  },
  watch: {
    '$route' (to, from) {

      if(!this.routesArr.length){
        this.routesArr.push({
          routeTo:to.path,
          routeFrom:from.path
        })
        this.transitionName = 'slide-left'
      }else if(this.routesArr.length&&this.routesArr[this.routesArr.length-1].routeFrom != to.path){
        this.routesArr.push({
          routeTo:to.path,
          routeFrom:from.path
        })
        this.transitionName = 'slide-left'
      }else if(this.routesArr[this.routesArr.length-1].routeFrom == to.path){
        this.routesArr.pop()
        this.transitionName = 'slide-right'
      }
      if(to.path == from.path){
        this.transitionName = ""
      }
    }
  }
}
</script>

<style lang="less" scoped>
  #app{
    width:100%;
    height: 100%;
    position: relative;
  }
  .slide-left-enter-active,
  .slide-left-leave-active,
  .slide-right-enter-active,
  .slide-right-leave-active{
    transition: all .2s linear;
  }
  .slide-left-enter{
    transform: translateX(100%);
  }
  .slide-left-leave-active{
    transform: translateX(-100%);
  }
  .slide-right-enter{
    transform: translateX(-100%);
  }
  .slide-right-leave-active{
    transform: translateX(100%);
  }
</style>
