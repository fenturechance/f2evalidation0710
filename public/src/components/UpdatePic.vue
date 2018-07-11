<template>
    <div>
        <Progress></Progress>
        <Title
            :title="title"
            :sub-title="subTitle"
        ></Title>
        <label class="uploadField">
            <div class="pic">
                <i class="fas fa-image"></i>
            </div>
            <div class="content">
                <h5>UPLOAD UP TO 3 PHOTO3</h5>
                <P>MAX SIZE:150*150px</P>
            </div>
            <input type="file" style="display:none">
        </label>
        <Button
            btn-text="SUBMIT&NEXT"
            @clickEvent="$router.push('/PaymentMethod')"
        ></Button>
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
<style lang="scss">
    @import '../assets/common';
    .uploadField{
        @extend %inputBorder;
        margin: 30px 0;
        width: 100%;
        display: flex;
        padding: 30px 20px;
        justify-content: center;
        align-items: center;
        color: $gray;
        cursor: pointer;
        .pic{
            font-size: 60px;
            margin: 0 20px 0 0;
        }
        h5{
            font-size: 20px;
        }
        p{
            font-size: 15px;
        }
    }
</style>
