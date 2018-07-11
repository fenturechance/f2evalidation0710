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
            <div class="selectGroup">
                <p class="inputTitle">
                    <span>Birth Date</span>
                    <span class="optional">(optional)</span>
                </p>
                <div class="inputGroup">
                    <Select
                        placeholder="YYYY"
                        :list="years"
                    ></Select>
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
            <div class="selectGroup">
                <p class="inputTitle">
                    <span>Birth Date</span>
                    <span class="optional">(optional)</span>
                </p>
                <div class="inputGroup">
                    <Select
                        placeholder="City"
                        :list="citys"
                    ></Select>
                    <Select
                        placeholder="Dist"
                        :list="dists"
                    ></Select>
                </div>
                <div class="inputWrapper">
                    <input type="text" placeholder="Address Detail">
                </div>
            </div>
            <Button
                btn-text="SUBMIT&NEXT"
                @clickEvent="$router.push('/UpdatePic')"
            ></Button>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                title: 'General Information',
                subTitle: 'Tell us who you are!',
                years:[2016,2017,2018],
                months:['01','02','03','04','05','06','07','08','09','10','11','12'],
                citys:['Taipei','Tauyuan','New Taipei City'],
                dists:['A road','B road','C road']
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
