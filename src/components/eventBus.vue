<template>

<div>发送方：<input type="text" v-model.number="count" @keyup="busto"></div>
    

</template>

<script>
import bus from "../eventBus";
export default {
    name:'eventBus',
    data(){
        return {
            count:0
        }
    },
    methods:{
            busto(){
                bus.emit('countChange',this.count)
            }
    }

}
</script>