<template>
  <div class="x-btn">
    <div class="btn-box">
        <button @click="btnEvent" :type="btnType" :disabled="disabled" :class="{'btn-default':colorType=='default','btn-custom':colorType=='custom'}">{{btnText}}</button>
    </div>
</div>
</template>
<script>
export default {
  name:"xBtn",
  props:{
    disabled:{
        type:Boolean,
        default:true
    },
    btnText:{
        type:String,
        default:""
    },
    colorType:{
        type:String,
        default:"default"
    },
    btnType:{
        type:String,
        default:"button"
    }
  },
  methods:{
    btnEvent(){
        this.$emit("btnEvent")
    }
  }
}
</script>
<style lang="less" scoped>
 .x-btn{
    width: 100%;
    padding: 1.75rem 2.5rem 0 2.5rem;
    box-sizing: border-box;
    .btn-box{
    width: 100%;
    height: 50%;
    button{
        width: 100%;
        height: 2.25rem;
        line-height: 2.25rem;
        border: none;
        outline: none;
        border-top-left-radius: 2rem;
        border-top-right-radius:2rem;
        border-bottom-left-radius: 2rem;
        border-bottom-right-radius: 2rem;
        color: #fff;
        font-size: .9rem;
        &.btn-default {
            background: linear-gradient(to right, #66cc33, #bbf50a);
            &[disabled] {
                background: linear-gradient(to right, rgba(102, 204, 51, .6), rgba(188, 246, 9, .6));
            }
        }
        &.btn-custom {
            background: linear-gradient(to right, #ffcc00, #fff700);
        }
    }
    }
}
</style>

