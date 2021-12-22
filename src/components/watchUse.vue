<template>
  <div>
    <input type="text" v-model.trim="question" />
    {{question}}
  </div>
</template>


<script>
export default {
  name: "watchUse",
  data() {
    return {
      question: "请提问",
    };
  },
  watch:{
      question:{
          handler(newVal,oldVal){
                console.log(1); //这样的话不用等到她改变，页面一出来就有1
          },
         immediate:true // 写在对象里面 handler平级
      }
  }
};
</script>