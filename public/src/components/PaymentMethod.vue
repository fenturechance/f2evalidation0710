<template>
    <div>
        <Progress></Progress>
        <Title
            :title="title"
            :sub-title="subTitle"
        ></Title>
        <InputTitle
            title="Account"
            type="text"
            placeholder="example@email.com"
        ></InputTitle>
        <div class="inputGroup">
            <InputTitle
                title="Cardholder Name"
                type="text"
                placeholder="EXAMPLE NAME"
            ></InputTitle>
            <InputTitle
                title="Bank Name"
                type="text"
                placeholder="EXAMPLE BANK"
            ></InputTitle>
        </div>
        <div class="inputGroup creditCard">
            <div class="holderName">
                <InputTitle
                    title="Cardholder Name"
                    type="text"
                    placeholder="EXAMPLE NAME"
                ></InputTitle>
            </div>
            <div class="selectGroup">
                <p class="inputTitle">
                    <span>Expire Date</span>
                </p>
                <div class="inputGroup">
                    <Select
                        placeholder="MM"
                        :list="months"
                    ></Select>
                    <Select
                        placeholder="DD"
                        :list="days"
                    ></Select>
                </div>
            </div>
        </div>
        <Button
            btn-text="SUBMIT&NEXT"
            @clickEvent="$router.push('/Finish')"
        ></Button>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                title: 'Payment Method',
                subTitle: 'Add your credit card information',
                months:['01','02','03','04','05','06','07','08','09','10','11','12'],
            }
        },
        computed: {
            days() {
                let arr = [];
                for(let i = 1 ; i <= 31 ; i ++) arr.push(i);
                return arr;
            }
        }
    }
</script>
<style lang="scss">
    .inputGroup{
        .inputWrapper{
            margin-top: 10px;
        }
    }
    .creditCard{
        align-items: center;
        .inputWrapper{
            margin-top: 0;
        }
        .holderName{
            flex: 1;
        }
        .selectGroup{
            flex: 2;
            margin: 0 0 0 10px;
            .selectWrapper{
                margin-top: 0;
            }
        }
    }
</style>
