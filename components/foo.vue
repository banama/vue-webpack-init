<template>
    <h6>{{store.incre.count}}</h6>
    <button @click="reset">重置</button>
    <button @click="plus"> 加 </button>
    <button @click="reduce"> 减 </button>
</template>

<script>
import { plus, reduce, reset } from '../src/redux/action'

module.exports = {
    data: function(){
        return this.$route.data
    },
    ready: function(){
        store.dispatch(reset())
    },
    methods: {
        reset: function(){
            store.dispatch(reset())
        },
        plus: function(){
            store.dispatch(plus())
        },
        reduce: function(){
            store.dispatch(reduce())
        },
    }
}
</script>
