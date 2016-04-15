<template>
    count {{count}}<br>
    <button @click="incre">加一</button>
</template>

<script>
import { incre } from '../src/action.js'
import store from '../src/vuex.js'

export default {
    store,
    vuex: {
        actions: {
            incre: incre
        },
        getters: {
            count: function(state){
                return state.count
            }
        }
    }
}
</script>
