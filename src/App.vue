<template>
  <div id="app">
    <calc @countChange="getCount" :number="num"></calc>  
    <!-- number是父向子同步数据传递参数的例子，要通过父v-bind和子props接收的方式 -->
    啊为什么要用自定义事件啊{{num}}
    <swiper title-app="c" :author="12"></swiper>
    <watchUse></watchUse>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import calc from './components/calc.vue'
import WatchUse from './components/watchUse.vue'
export default {
  name: 'App',
  components: {
    HelloWorld,
    calc,
    WatchUse
  },
  data(){
    return {
      num:0
    }
  },
  methods: {
    getCount(val){
        this.num ++
        console.log(val);
    }
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
