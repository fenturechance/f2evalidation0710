<template>
    <div class="inputWrapper">
        <p class="inputTitle">
            <span>{{ title }}</span>
            <template v-if="requireOrNot">
                <span class="star" v-if="required">*</span>
                <span class="optional" v-else>(optional)</span>
            </template>
        </p>
        <input :type="type" :placeholder="placeholder">
    </div>
</template>
<script>
export default {
    props: ['title','type','placeholder','requireOrNot','required']
}
</script>
<style lang="scss">
    @import '../../assets/common.scss';
    .inputWrapper{
        margin: 30px 0 30px 0;
        input{
            @extend %inputBorder;
        }
    }
</style>

