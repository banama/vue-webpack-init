<template><div>

    <a class="message" v-text="message">
    </a>

</div></template>

<script>
module.exports = {
    el: "#app",
    data: {
        message: "vue-template-init"
    }
}

</script>

<style lang='stylus' scoped>
.message
    color #999
</style>



