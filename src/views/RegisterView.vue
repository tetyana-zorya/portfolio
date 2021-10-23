<template>
  <div>
    <v-row justify="center" style="padding-top:6em;">
      <Register />
    </v-row>
  </div>
</template>

<script>
import Register from '../components/Register.vue'
export default {
 name: 'register-view', 
 components: {
   Register
 }
}

</script>