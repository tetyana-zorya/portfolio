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
import { getDatabase, ref, child, get } from "firebase/database";
import { mapState, mapMutations, mapActions } from 'vuex'


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

    ...mapActions([
      'setInfo'
    ]),
    ...mapMutations([
      'SET_USER'
    ]),

    login: async function() {
      const auth = getAuth();
      console.log(auth)
      await signInWithEmailAndPassword(auth, this.email, this.password)
      .then((userCredentials) => {
        this.SET_USER(userCredentials);
        })
      .then(() => {
        console.log(auth)
        this.getInfo(auth.currentUser.uid)
      })
      //.then(() => {  })  
      .catch((error) => {
        console.log(error)
        console.log(error.code)
        this.translateError(error.code)
        
        console.log(error.code, error.message)
      });
    },

    getInfo(uid) {
      console.log('in get info')
      const dbRef = ref(getDatabase());
      get(child(dbRef, `users/${uid}`)).then((snapshot) => {
        if (snapshot.exists()) {
          console.log(snapshot)
            this.setMe(snapshot.val())
            //this.SET_USER_INFO(snapshot.val())
        } else {
          console.log("No data available");
        }
      }).catch((err) => {
        console.log(err)
      })

    },

    setMe: async function(info) {
      await this.setInfo(info)
      .then(() => { console.log('setInfo');
      this.$router.push({name: 'chat-home'})} )
      .catch((err) => { console.log(err)})
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