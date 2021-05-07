<template>
  <div id="app">
    <template v-if="isLogin">
      <the-navbar></the-navbar>
    <div class="main">
      <the-header></the-header>
      <the-content></the-content>
    </div>
    </template>
    <template v-else>
      <router-view></router-view>
    </template>
  </div>
</template>

<script>
import TheContent from './components/layout/TheContent'
import TheHeader from './components/layout/TheHeader'
import TheNavbar from './components/layout/TheNavbar'

const loggedIn = localStorage.getItem('user')
export default {
  // data () {
  //   return {
  //     isLogin: false
  //   }
  // },
  computed: {
    isLogin () {
      return loggedIn
    }
  },
  components: {
    TheContent,
    TheNavbar,
    TheHeader
  }
}
</script>

<style lang="scss">
@import "./assets/sass/common/main";
#app {
  display: flex;
}

.main {
  flex-grow: 1;
}
</style>
