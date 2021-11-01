<template>
  <v-app-bar elevation="0">
    <span style="color: #746458; font-weight:900; font-size:25px;">ChatApp</span>
    <v-spacer></v-spacer>
    <span><router-link :to="{name:'chat-home'}">Chat Home</router-link></span>
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
