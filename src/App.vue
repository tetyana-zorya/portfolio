<template>
  <v-app id="app">
    <nav v-if="this.$route.path.includes('chat')">
      <ChatNav />
    </nav>
    <nav v-else>
      <NavBar />
    </nav>
    <v-main>
      <router-view  />
    </v-main>
  </v-app>
</template>

<script>
import { mapGetters } from "vuex";
import NavBar from '@/components/Navbar.vue';
import ChatNav from '@/components/ChatNav.vue'

export default {
  name: 'App',

  data: () => ({
    //
  }),

  components: {
    NavBar,
    ChatNav
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
  //font-family: 'Raleway', sans-serif;;
  font-family: 'Red Hat Display', sans-serif;
}
</style>
