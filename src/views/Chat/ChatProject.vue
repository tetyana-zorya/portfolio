<template>
  <div>
    <v-container style="text-align:center;">
      <div>
        <a @click="toggle('reg')" style="color: #333;">Register </a><span> | </span>
        <a @click="toggle('log')" style="color: #333;"> Login</a>
      </div>
      <div style="padding-top:3em;">
        <v-row justify="center" v-if="view == 'reg'">      
        <Register />
        </v-row>
        <v-row v-else justify="center">      
        <Login />
        </v-row>
      </div>
    </v-container>
  </div>
</template>

<script>
import Login from '@/components/Login.vue'
import Register from '@/components/Register.vue'

export default {
  name: 'chat-project',
  components: {
    Login,
    Register
  },
  data() {
    return {
      view: 'reg'
    }
  },
  methods: {
    toggle(val) {
      console.log(val)
      this.view = val
    },
  }
}
</script>
