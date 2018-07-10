<template>
    <div>
        <Progress></Progress>
        <Title
            :title="title"
            :sub-title="subTitle"
        ></Title>
        <div class="formWrapper">
            <div class="inputGroup">
                <InputTitle
                    title="Name"
                    type="text"
                    placeholder="Example Name"
                    :require-or-not="true"
                    :required="false"
                ></InputTitle>
                <InputTitle
                    title="Phone"
                    type="text"
                    placeholder="0912345678"
                    :require-or-not="true"
                    :required="true"
                ></InputTitle>
            </div>
            <div class="inputGroup">
                <DateSelect
                    type="year"
                ></DateSelect>
                <DateSelect
                    type=""
                ></DateSelect>
                <DateSelect
                    type=""
                ></DateSelect>
            </div>
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
                title: 'General Information',
                subTitle: 'Tell us who you are!'
            }
        }
    }
</script>