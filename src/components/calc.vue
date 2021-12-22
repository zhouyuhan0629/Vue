<template>
<div>
  <input type="text" v-model.number="count">
    <p>{{count}}乘2以后的结果是{{multiply}}</p>  
    <button @click="plus">*2</button>
    <p>{{count}}乘2以后的结果是{{multiply}}</p> 
    <div>{{number}}</div>
<!-- 这里的multiply不用加（）因为他不能当作方法，如果写在methods里面就要用（） -->

</div>
  
</template>

<script>
export default {
    name:'calc',
    data(){
        return{
            count:1
        }
    },
    computed:{
        multiply(){
            return this.count*2
        }
    },
    methods:{
        plus(){
            this.count +=1;
            this.$emit('countChange',this.count)
            // $emit可以通过第二个参数传参，是app.vue里的val

        }
    },
    emits:['countChange'],
    props:['number']

}
</script>