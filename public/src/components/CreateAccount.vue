<template>
    <div>
        <Progress></Progress>
        <Title
            :title="title"
            :sub-title="subTitle"
        ></Title>
        <div class="formWrapper">
            <InputTitle
                title="Account"
                type="text"
                placeholder="example@email.com"
            ></InputTitle>
            <InputTitle
                title="Password"
                type="password"
                placeholder="●●●●●●●●"
            ></InputTitle>
            <InputTitle
                title="Confirm Password"
                type="password"
                placeholder="●●●●●●●●"
            ></InputTitle>
            <Button
                btn-text="SUBMIT&NEXT"
                @clickEvent="$router.push('/GeneralInfo')"
            ></Button>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                title: 'Create Account',
                subTitle: 'Glad to see you here'
            }
        }
    }
</script>