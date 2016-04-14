<template>
    <h1>{{page}}</h1>
    <h2>{{desc}}</h2>
</template>

<script>
module.exports = {
    data: function(){
        return this.$route.data
    }
}
</script>

<style lang="stylus">
</style>
