<template>
    <button class="submitBtn" @click="$emit('clickEvent')">{{ btnText }}</button>
</template>
<script>
export default {
    props: ['btnText']
}
</script>
<style lang="scss">
@import '../../assets/common.scss';
.submitBtn{
    margin: 30px 0 0 0;
    width: 100%;
    background-color: $lb;
    border: none;
    @extend %radiusBorder;
    color: $w;
    font-size: 25px;
    cursor: pointer;
}
</style>

