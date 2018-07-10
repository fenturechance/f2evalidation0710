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
                title: 'Payment Method',
                subTitle: 'Add your credit card information'
            }
        }
    }
</script>