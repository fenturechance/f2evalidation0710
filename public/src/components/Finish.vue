<template>
    <div>
        <Progress></Progress>
        <Title
            :title="title"
            :sub-title="subTitle"
        ></Title>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                title: 'Congratulations',
                subTItle: `Now you're one of use`
            }
        }
    }
</script>