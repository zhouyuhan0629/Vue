<template>
  <div>接收方：{{num}}</div>
</template>



<script>
import bus from "../eventBus";
export default {
  name: "eventBus2",
  data() {
    return {
      num: 0,
    };
  },
  created() {
    bus.on("countChange", (count) => {
      this.num = count;
    });
  },
};
</script>