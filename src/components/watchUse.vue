<template>
  <div>
    <input type="text"  v-model.trim="question.name"/>
    {{question.name}}
  </div>
</template>


<script>
export default {
  name: "watchUse",
  data() {
    return {
      question: {
          name:"请提问",
          please:1
      }
    };
  },
  watch:{
      question:{
          handler(newVal,oldVal){
                console.log(1); //这样的话不用等到她改变，页面一出来就有1
          },
         immediate:true, // 写在对象里面 handler平级
         deep:true
      }
  }
};
</script>