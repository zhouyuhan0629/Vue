<template>
  <div id="app">
    <calc @countChange="getCount" :number="num"></calc>  
    <!-- number是父向子同步数据传递参数的例子，要通过父v-bind和子props接收的方式 -->
    啊为什么要用自定义事件啊{{num}}
    <swiper title-app="c" :author="12"></swiper>
    <watchUse></watchUse>
    <eventBus></eventBus>
    <eventBus2></eventBus2>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import calc from './components/calc.vue'
import WatchUse from './components/watchUse.vue'
import eventBus from './components/eventBus.vue'
import eventBus2 from './components/eventBus2.vue'
export default {
  name: 'App',
  components: {
    HelloWorld,
    calc,
    WatchUse,
    eventBus,
    eventBus2
    
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
