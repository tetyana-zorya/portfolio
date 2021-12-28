<template>
  <v-app-bar elevation="0">
    <a href="/">Home</a>
    <v-spacer></v-spacer>
    <span> <router-link :to="{name:'chat-home'}"><span style="color: #9D8D80; font-weight:900; font-size:20px; margin-right:2em;">ChatApp</span></router-link></span>
    <span><a style="color: #333" @click="logout()">Logout</a></span>
  </v-app-bar>
</template>

<script>
import { mapMutations} from 'vuex';

export default {
  name: 'chat-nav',
  methods: {
    ...mapMutations([
      'SET_LOGOUT'
    ]) ,

    logout() {
      this.SET_LOGOUT();
      this.$router.push({name: 'home'})
    },

  }
}
</script>
