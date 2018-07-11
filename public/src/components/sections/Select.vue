<template>
    <div class="selectWrapper">
        <select>
            <option disabled selected class="default">{{ placeholder }}</option>
            <option v-for="li in list" :value="li">{{ li }}</option>
        </select>
    </div>
</template>
<script>
export default {
    props: ['placeholder','list']
}
</script>

<style lang="scss">
    @import '../../assets/common.scss';
    .selectWrapper{
        flex: 1;
        @extend %margin;
        margin-top: 10px;
        margin-bottom: 30px;
        select{
            width: 100%;
            @extend %inputBorder;
        }
    }
</style>
