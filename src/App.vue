<template>
  <v-app id="app">
    <nav>
      <NavBar />
    </nav>
    <v-main>
      <router-view :key="$route.path" />
    </v-main>
  </v-app>
</template>

<script>
import { mapGetters } from "vuex";
import NavBar from '@/components/Navbar.vue'

export default {
  name: 'App',

  data: () => ({
    //
  }),

  components: {
    NavBar
  },

  computed: {
    ...mapGetters([
      'isLoggedIn'
    ])
  },

  created() {
    console.log('isLoggedIn', this.isLoggedIn)
  }

};
</script>

<style lang="scss">
#app {
  font-family: 'Raleway', sans-serif;;
}
</style>
