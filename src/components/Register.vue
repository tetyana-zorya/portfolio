<template>
      <div style="text-align:center; width:350px;">
        <v-card style="padding:1em 2em 1em 2em;" >
          <v-card-title>
            <v-row justify="center">
              Register
            </v-row>
          </v-card-title>
          <v-card-text>
            <v-form ref="registerForm">
              <v-text-field
                type="text"
                placeholder="Name"
                v-model="name"
              ></v-text-field>
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
              <div style="text-align:left">
              <span style="font-size:1.1em; color:#757575;">Select Color:</span>
              </div>
              <div style="position:relative; right:.5em;">
                <a @click="regColor('#80DEEA')"><span id="#80DEEA" class="dot" style="background-color: #80DEEA;"></span></a>
                <a @click="regColor('#AED581')"><span id="#AED581" class="dot" style="background-color: #AED581"></span></a>
                <a @click="regColor('#FFEE58')"><span id="#FFEE58" class="dot" style="background-color: #FFEE58;"></span></a>
              </div>
              <div style="padding-top:1em;">
                <v-btn
                  class="mr-4"
                  @click="register()"
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
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { getDatabase, ref, set } from "firebase/database";

export default {
  data() {
    return {
      errorMessage: '',
      email: "",
      password: "",
      name: '',
      error: null,
      color: '',
      click: 0,
    };
  },
  methods: {

    register: async function() {
      const auth = getAuth();
      createUserWithEmailAndPassword(auth, this.email, this.password)
      .then((userCredentials) => {
        console.log(userCredentials)
        this.addInfo()
        console.log('here')
        this.write(userCredentials)
       
        this.$refs.registerForm.reset();
        console.log('donso')
        this.$emit('registered', true)
        })
      .catch((error) => {
        console.log(error)
        this.translateError(error.code)
        console.log(error.code, error.message)
      });
    },

    addInfo: async function() {
      console.log(this.name)
      const auth = getAuth();
      console.log(auth)
      updateProfile(auth.currentUser, {
        displayName: this.name
      }).then(() => {
        console.log('updated');
        process.exit()
      }).catch((error) => {
        console.log('else')
        console.log(error)
      });
    },

    write(info) {
      console.log('in write')
      console.log(info)
      console.log(this.color)

      const db = getDatabase();
        set(ref(db, 'users/' + info.user.uid), {
          username: this.name,
          email: info.user.email,
          color: this.color,
          uid: info.user.uid
        }).then(() => { console.log('done')}) 
        .catch((err) => { console.log(err)})
      console.log('done writing')
    },

    translateError(error) {
      console.log(error)
      console.log(error == 'auth/user-not-found')
      if (error == 'auth/email-already-in-use') {
        this.errorMessage = 'Email Already In Use. Please Proceed to Login.'
      }
      else if (error == 'auth/weak-password') {
        this.errorMessage = 'Password should be at least 6 characters.'
      }
      else {
        this.errorMessage = error
      }

    },

    regColor(color) {
      if (this.click > 0) {
        this.color = ''
        document.getElementById('#80DEEA').style.borderColor = '#fff';
        document.getElementById('#AED581').style.borderColor = '#fff';
        document.getElementById('#FFEE58').style.borderColor = '#fff';

        document.getElementById(color).style.borderColor = '#CFD8DC';
        this.color = color;

      }
      else {
        this.color = color;
        let dot = document.getElementById(color);
        dot.style.borderColor = '#CFD8DC';
        this.click += 1
      }
      
    }

  }
};
// tetyanazorya@gmail.com
</script>

<style lang="scss" scoped>
.dot {
  height: 30px;
  width: 30px;
  border-radius: 50%;
  display: inline-block;
  margin:.5em;
  border: 2px solid #fff;
}

.dot:hover {
  border: 2px solid #CFD8DC;
}


</style>

