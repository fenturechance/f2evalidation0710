<template>
    <div class="inputWrapper">
        <input :type="type"> 
    </div>
</template>
<script>
export default {
    props: ['type']
}
</script>

<style lang="scss">
    input[type="date"]{
        width: auto;
    }
</style>
