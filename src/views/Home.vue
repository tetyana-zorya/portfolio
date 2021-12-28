<template>
  <div style="text-align:center">
    <span id="middle-name"> Portfolio.</span>
      <v-container fluid style="background-color:#282630; position:relative; bottom:5em; height:80vh;">
        <v-container>
        <div style="text-align:left; position:relative; top:6em; left:8em; z-index:20; width:600px; padding:1em;">
          <h1 id="hover">Welcome to my page.<br> Click <router-link style="text-decoration:none;" :to="{name: 'about'}"><a style="color:#746458;">here</a></router-link> to learn more about me.</h1>
        </div>
        <div style="margin-left:25em; position:relative; bottom:5em; z-index:10;">
          <!-- <img id="cover" height="600px" src="@/assets/cover/beige3.png" alt="cover"> -->
        </div>
        
      </v-container>
      </v-container>

      <v-container>
        <div style="text-align:left; position:relative; top:6em; left:8em; z-index:20; width:600px; padding:1em;">
          <h1 id="hover">Welcome to my page.<br> Click <router-link style="text-decoration:none;" :to="{name: 'about'}"><a style="color:#746458;">here</a></router-link> to learn more about me.</h1>
        </div>
        <div style="margin-left:25em; position:relative; bottom:5em; z-index:10;">
          <img id="cover" height="600px" src="@/assets/cover/beige3.png" alt="cover">
        </div>
        
      </v-container>

      <v-container style="width:1760px; height:700px;" id="projects">
        <div style="text-align:left;" data-aos="fade-right">
          <span style="font-size:2em; font-weight:600;">Projects</span>
          <!-- {{this.$vuetify.breakpoint.width}} -->
        </div>
        <div style="padding-top:6em;">
          <v-layout>
            <v-row row wrap>
              <v-flex sm3 class="chatImage"><div data-aos="fade-up"><a>
                <router-link :to="{name: 'chat-project'}">
                  <img @mouseover="projectHover = true" @mouseleave="projectHover = false" width="220px;" src="@/assets/projects/white.jpg" alt="white"  class=" chatImage project-img">
                  <div id="chatWrite" class="chatImage">
                    <span style="position:absolute; left:.5em;">Realtime</span>
                    <span style="position:relative; top:1em;">Chat App</span>
                  </div>
                </router-link></a></div></v-flex>
              <v-flex sm3><div data-aos="fade-up"><a><img width="220px;" src="@/assets/projects/pink.jpg" alt="pink" class="project-img"></a></div></v-flex>
              <v-flex sm3><div data-aos="fade-up"><a><img width="220px;" src="@/assets/projects/yellow.jpg" alt="yellow" class="project-img"></a></div></v-flex>
              <v-flex sm3><div data-aos="fade-up"><a><img width="220px;" src="@/assets/projects/mauve.jpg" alt="mauve" class="project-img"></a></div></v-flex>
            </v-row>
          </v-layout>
        </div>
        <v-container v-if="projectHover" id="chatInfo">
          <div>
            <b>Realtime Web Chat Application Project</b>
            <br>
            Incorportes Firebase Authentication and Firebase Realtime Database to create a realtime web chat.
          </div>
        
      </v-container>
      </v-container>
      
  </div>
</template>

<script>
  import { mapGetters } from "vuex";

  //import { getDatabase, ref, set } from "firebase/database";

  export default {
    name: 'Home',
    data() {
      return {
        regestering: false,
        logging: false,
        chats: '',
        createRoom: false,
        chatName: '',
        projectHover: false
      }
    },
    components: {
        
    },

    created() {
      if (this.isLoggedIn) {
        console.log(this.getLoggedUser)
      }

      setTimeout(function () {
      document.getElementById('hover').classList.add('appear');
      document.getElementById('cover').classList.add('appear');
      }, 600);
      setTimeout(function () {
      document.getElementById('hover').style.opacity = 1;
      document.getElementById('cover').style.opacity = 1;
      }, 1200);

    },

    computed: {
      ...mapGetters([
        'isLoggedIn',
        'getLoggedUser'
      ])
    },

    methods: {

      
    }
  }
</script>

<style lang="scss" scoped>
@keyframes fadein {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
.appear {
  animation: fadein 3s;
  animation-timing-function: ease-out;
}
#chatInfo {
  display: block;
  text-align: left; 
  background-color: #FFFF;
  position:relative; 
  bottom:8em;
  margin-left:5em;
  height:200px;
}
#chatWrite {
  height:125px;
  font-weight: 900;
  font-size:35px;
  display: none !important;
  // position: absolute;
  // top:1em;
  // left:28%;
  width: 70%;
  text-align: center;
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  padding:.5em;
  border-radius: 25px;
  color: black;
  mix-blend-mode: screen;
}
.chatImage:hover + #chatWrite {
  display: block !important;
}

#middle-name {
  position:relative;
  bottom:2em;
  font-size: 3em;
  font-weight:800;
  //color: #3A322C;
  color: #ffff;
}
#hover {
  font-weight: 500;
  color:#B9ACA2;
}
#hover:before {  
  transform: scaleX(0);
  transform-origin: bottom right;
}

#hover:hover::before {
  transform: scaleX(1);
  transform-origin: bottom left;
}

#hover:before {
  content: " ";
  display: block;
  position: absolute;
  top: 0; right: 0; bottom: 0; left: 0;
  inset: 0 0 0 0;
  background: #E4DDD9;
  opacity:.6;
  z-index: -1;
  transition: transform .3s ease;
}

.project-img {
  opacity:.7
}
.project-img:hover {
  opacity: .9;
}

@media only screen and (min-width: 1800px) {
  #chatWrite {
    font-size:30px;
    width:40%;
    height: 110px;
  }
}

@media only screen and (max-width: 1300px) {
  #chatWrite {
    font-size:25px;
    width:70%;
    height: 90px;
  }
}

@media only screen and (max-width: 980px) {
  #chatWrite {
    font-size:30px;
    width:40%;
    height: 110px;
  }
}


</style>

