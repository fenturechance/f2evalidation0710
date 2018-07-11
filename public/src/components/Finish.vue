<template>
    <div>
        <Progress></Progress>
        <Title
            :title="title"
            :sub-title="subTitle"
        ></Title>
        <div class="pic">
            <i class="fas fa-smile"></i>
        </div>
        <div class="text">
            <p>Redirected to homepage after 5 seconds...</p>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                title: 'Congratulations',
                subTitle: `Now you're one of use`
            }
        }
    }
</script>
<style lang="scss">
    @import '../assets/common';
    .pic{
        text-align: center;
        font-size: 200px;
        color: $lb;
    }
    .text{
        text-align: center;
        p{
            font-style: italic;
            font-weight: 400;
            color: $b;
        }
    }
</style>
