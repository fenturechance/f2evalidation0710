<template>
    <div class="progressWrapper">
        <ul class="progress">
            <li v-for="li in activeList" :class="li">
                <i class="fas fa-check" v-if="li == 'finish'"></i>
            </li>
        </ul>
    </div>
</template>
<script>
    export default {
        computed: {
            activeList() {
                let result = [];
                switch (this.$route.path) {
                    case '/':
                        result = ['now','none','none','none'];
                        break;
                    case '/GeneralInfo':
                        result = ['finish','now','none','none'];
                        break;
                    case '/UpdatePic':
                        result = ['finish','finish','now','none'];
                        break;
                    case '/PaymentMethod':
                        result = ['finish','finish','finish','now'];
                        break;
                    case '/Finish':
                        result = ['finish','finish','finish','finish'];
                        break;
                    default:
                        break;
                }
                return result;
            }
        }
    }
</script>
<style lang="scss">
    @import '../../assets/common.scss';
    $border : 2px;
    $line : 55px;
    $inner : 10px;
    $check : 11px;
    $outer : $inner * 2;
    .progressWrapper{
        display: flex;
        justify-content: center;
        .progress{
            display: flex;
            li{
                width: $outer;
                height: $outer;
                border-radius: 50%;
                border: $border solid $lb;
                margin: 0 0 0 $line;
                position: relative;
                &:first-child{
                    margin: 0;
                }
                &:after{
                    content: '';
                    position: absolute;
                    width: $border + $line;
                    height: $border;
                    background-color: $lb;
                    left: $outer - $border;
                    top: 50%;
                    transform: translateY(-50%);
                }
                &:last-child{
                    &:after{
                        display: none;
                    }
                }
                &.now{
                    border-color: $b;
                    &:before{
                        content: '';
                        width: $inner;
                        height: $inner;
                        background-color: $b;
                        border-radius: 50%;
                        position: absolute;
                        @extend %vertical;
                    }
                }
                &.finish{
                    background-color: $b;
                    border: none;
                    width: $outer;
                    height: $outer;
                    .fa-check{
                        width: $check;
                        position: absolute;
                        @extend %vertical;
                        color: $w;
                    }
                    &:after{
                        width: $line;
                        left: $outer;
                        background-color: $b;
                    }
                }
            }
        }
    }
</style>
