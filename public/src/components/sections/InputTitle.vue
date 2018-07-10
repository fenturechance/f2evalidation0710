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
        margin: 30px 0 20px 0;
        .inputTitle{
            margin: 0 0 5px 0;
            font-size: 20px;
            .star{
                font-weight: bold;
            }
        }
        input{
            @extend %inputBorder;
        }
    }
</style>

