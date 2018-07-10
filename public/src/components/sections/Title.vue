<template>
    <div class="titleGroup">
        <h2 class="progressTitle">{{ title }}</h2>
        <h3 class="progressSubTitle">{{ subTitle }}</h3>
    </div>
</template>
<script>
export default {
    props: ['title','subTitle']
}
</script>
<style lang="scss">
    .titleGroup{
        margin: 50px 0 20px 0;
        text-align: center;
        .progressTitle{
            font-size: 40px;
        }
        .progressSubTitle{
            font-size: 30px;
            font-weight: 300;
        }
    }
</style>
