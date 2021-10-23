<template>
  <div style="text-align:center; width:350px;">
        <v-card style="padding:1em 2em 1em 2em;" >
          <v-card-title>
            <v-row justify="center">
              Login
            </v-row>
          </v-card-title>
          <v-card-text>
            <v-form ref="registerForm">
              <v-text-field
                type="email"
                placeholder="Email"
                v-model="email"
              ></v-text-field>
              <v-text-field
                type="password"
                placeholder="Password"
                v-model="password"
              ></v-text-field>
              <div style="padding-top:1em;">
                <v-btn
                  class="mr-4"
                  @click="login()"
                >
                  submit
                </v-btn>
              </div>
            </v-form>
          </v-card-text>

          <v-card-text>
            <v-row justify="center" v-if="this.errorMessage.length">
              <v-card style="background-color:#E53935;">
                <v-card-text style="color:#FFF;">{{errorMessage}}</v-card-text>
              </v-card>
            </v-row>
          </v-card-text>
        </v-card>
      
      </div>
</template>

<script>
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { mapState, mapMutations } from 'vuex'


export default {
  data() {
    return {
      errorMessage: '',
      email: "",
      password: "",
      error: null
    };
  },
  methods: {

    ...mapState([
      'loggedUser'
    ]),

    ...mapMutations([
      'SET_USER'
    ]),

    login: async function() {
      const auth = getAuth();
      await signInWithEmailAndPassword(auth, this.email, this.password)
      .then((userCredentials) => {
        this.SET_USER(userCredentials);
        this.$router.push({name: 'chat-home'})
        })
      .catch((error) => {
        //alert(error.message);
        console.log(error.code)
        this.translateError(error.code)
        
        console.log(error.code, error.message)
      });
    },

    translateError(error) {
      if (error == 'auth/email-already-in-use') {
        this.errorMessage = 'Email Already In Use. Please Proceed to Login.'
      }
      else if (error == 'auth/weak-password') {
        this.errorMessage = 'Password should be at least 6 characters.'
      }
      else if (error == 'auth/user-not-found') {
        this.errorMessage = 'User not found. Please register for an account.'
      }
      else {
        this.errorMessage = error
      }

    },

  //tetyanazorya@gmail.com
  }
};
</script>