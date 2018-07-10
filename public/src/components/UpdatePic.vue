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
                title: 'Update Profile Picture',
                subTitle: 'We wanna know you more!'
            }
        }
    }
</script>