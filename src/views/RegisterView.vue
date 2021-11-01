<template>
  <div>
    <v-row justify="center" style="padding-top:6em;">
      <Register @registered="registered" />
    </v-row>
  </div>
</template>

<script>
import Register from '../components/Register.vue'
export default {
 name: 'register-view', 
 components: {
   Register
 },
 methods: {
   registered(value) {
     console.log(value)
     this.$router.push({name: 'login'})
   }
 }
}

</script>