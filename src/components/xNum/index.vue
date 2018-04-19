<template>
    <div class="btn-box">
        <button @click="mulNum" :disabled="value<=1" type="button" class="mul">-</button>
        <input class="input" ref="input" :value="value" readonly>
        <button @click="addNum"  type="button" class="add">+</button>
    </div>
</template>
<script>
export default {
  name:"xNum",
  props:['value'],
  methods:{
      updatedVal(val){
        this.$emit('input',val)
      },
      mulNum(){
        this.$refs.input.value --
        this.updatedVal(this.$refs.input.value)
      },
      addNum(){
        this.$refs.input.value ++
        this.updatedVal(this.$refs.input.value)
      }
  }
}
</script>
<style lang="less" scoped>
 .btn-box{
    width: 6rem;
    height: 1.8rem;
    border: 1px solid #e5e5e5;
    display: flex;
    color: #666;
    font-size: .8rem;
    justify-content: space-between;
    align-items: center;
    .mul{
        width: 1.8rem;
        height: 100%;
        text-align: center;
        border: none;
        outline: none;
        background: transparent;
        border-right: 1px solid #e5e5e5;
        &[disabled]{
            color: #bbbec7;
            border-color: #bbbec7;
            border-right-color: #e5e5e5;
        }
    }
    .input{
        width: 2.4rem;
        text-align: center;
        height: 100%;
        border:none;
        outline: none;
        padding: 0 .5rem;
    }
    .add{
        width: 1.8rem;
        height: 100%;
        text-align: center;
        border: none;
        outline: none;
        background: transparent;
        box-sizing: border-box;
        border-left: 1px solid #e5e5e5;
    }
} 
</style>

