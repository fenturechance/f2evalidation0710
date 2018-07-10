<template>
  <div id="app">
      <header></header>
      <main>
        <router-view></router-view>
      </main>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
    }
  }
}
</script>

<style lang="scss">
    @import './assets/common.scss';
    *{
        margin: 0;
        padding: 0;
        list-style: none;
        box-sizing: border-box;
        font-family: 'Roboto', sans-serif;
        font-weight: normal;
    }
    #app{
        max-width: 600px;
        margin: auto;
        header{
            background-color: $b;
            width: 100%;
            height: 5px;
        }
        main{
            padding: 50px 0;
        }
        .inputGroup{
            display: flex;
            justify-content: space-between;
            .inputWrapper{
                flex: 1;
                margin-left: 10px;
                &:first-child{
                    margin-left: 0;
                }

            }
        }
    }
</style>
