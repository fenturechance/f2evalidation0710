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
    }
    #app{
        max-width: 960px;
        margin: auto;
        header{
            background-color: $b;
            width: 100%;
            height: 5px;
        }
        main{
            padding: 100px 0;
        }
    }
</style>
