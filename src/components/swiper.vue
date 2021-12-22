<template>
  <h1>title:{{ titleApp }}author:{{ author }}</h1>
</template>

<script>
export default {
  name: "swiper",
  props: {
    titleApp: {
        validator(value){
            return ['a','b','c'].indexOf(value) !==-1
        },
      type: String,
      required: true,
      default:'100' //如果没有传值就用default的值，通常和reuqired=true搭配
    },
    author: Number,
  },
  
};
</script>