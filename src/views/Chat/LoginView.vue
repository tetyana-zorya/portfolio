<template>
  <div>
    <v-row justify="center" style="padding-top:6em;">
      <Login />
    </v-row>
  </div>
</template>

<script>
import Login from '@/components/Login'
export default {
 name: 'login-view', 
 components: {
   Login
 }
}

</script>