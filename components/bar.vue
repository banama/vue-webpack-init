<template>
    <h1>{{page}}</h1>
    <h2>{{desc}}</h2>

    <base></base>
</template>

<script>
module.exports = {
    data: function(){
        return this.$route.data
    },
    components: {
        base: function(res){
            require(['./base-com.vue'], res)
        }
    }
}
</script>

<style lang="stylus">
</style>
