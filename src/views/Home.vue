<template>
  <div style="text-align:center">
    <span id="middle-name"> Portfolio.</span>
      <v-container>
        <div style="text-align:left; position:relative; top:6em; left:16em; z-index:20; width:600px;">
          <h1 id="hover">Welcome to my page.<br> Click <router-link style="text-decoration:none;" :to="{name: 'about'}"><a style="color:#746458;">here</a></router-link> to learn more about me.</h1>
        </div>
        <div style="margin-left:35em; position:relative; bottom:5em; z-index:10;">
          <img id="cover" height="600px" src="@/assets/cover/beige3.png" alt="cover">
        </div>
        
      </v-container>

      <v-container id="proj" style="width:1260px; height:700px;">
        <div style="text-align:left;" data-aos="fade-right">
          <span style="font-size:2em; font-weight:600;">Projects</span>
        </div>
        <div style="padding-top:8em;">
          <v-layout>
            <v-row row wrap>
              <v-flex sm3><div data-aos="fade-up"><a><img width="220px;" src="@/assets/projects/white.jpg" alt="white" class="project-img"></a></div></v-flex>
              <v-flex sm3><div data-aos="fade-up"><a><img width="220px;" src="@/assets/projects/pink.jpg" alt="pink" class="project-img"></a></div></v-flex>
              <v-flex sm3><div data-aos="fade-up"><a><img width="220px;" src="@/assets/projects/yellow.jpg" alt="yellow" class="project-img"></a></div></v-flex>
              <v-flex sm3><div data-aos="fade-up"><a><img width="220px;" src="@/assets/projects/mauve.jpg" alt="mauve" class="project-img"></a></div></v-flex>
            </v-row>
          </v-layout>
        </div>
      </v-container>
  </div>
</template>

<script>
  // import Register from '@/components/Register';
  // import Login from '@/components/Login'
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
#middle-name {
  position:relative;
  bottom:2em;
  font-size: 3em;
  color: #3A322C;
}
#hover {
  font-weight: 500;
  color:3A322C;
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



</style>

