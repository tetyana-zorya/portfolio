<template>
  <div style="text-align:center; background-color:#F6F5F3;">
    
      <v-container fluid style=" padding-top:12vh;">

  
        <!-- <v-app-bar elevation="0" class="bar" v-if="entryClick">
          <v-row justify="center" style="width:60vw; position:relative; top:11em;">
            <ul >
              <li style="display: inline-block; margin-right:2em;">About </li>
              <li style="display: inline-block; margin-right:2em;">Projects </li>
              <li style="display: inline-block">Links </li>
            </ul>
          </v-row>
        </v-app-bar> -->
        

        <span id="middle-name" style="background-color:#D6DCE4; padding:.5em 1em .5em 1em;"> Tetyana.</span>

         <!-- <v-container v-if="entryClick" style="height:10vh;" >
        </v-container> -->
        <!-- <v-container style="width:600px;">
        <div style="text-align:left; position:relative; top:6em; left:8em; z-index:20; width:600px; padding:1em;">
          <h1 id="hover">Welcome to my page.<br> Click <router-link style="text-decoration:none;" :to="{name: 'about'}"><a style="color:#746458;">here</a></router-link> to learn more about me.</h1>
        </div>
        <div style="margin-left:25em; position:relative; bottom:5em; z-index:10;">
          <img id="cover" height="600px" src="@/assets/cover/beige3.png" alt="cover">
        </div>
        </v-container> -->
        
        <span id="animation-row" v-if="!entryClick">
        <a @click="entry" style="text-decoration:none;">
        <v-row justify="center">
          <div class="point-down-example">
           <span class="name-appear"> Portfolio.</span>
            <span class="icon-appear"><v-icon small style="color:#FFFF;">mdi-arrow-right-bold</v-icon></span>
          </div>
        </v-row>
        <v-row>
          <span class="text-appear">learn more</span>
        </v-row>
          </a>
        </span>
        
        
        
        <v-container style="height:60vh;" v-if="!entryClick">
        </v-container>
        <v-container v-else style="height:10vh;" >
        </v-container>
        
      </v-container>

      <v-container fluid style="width:1760px; height:1000px; padding-top:6em;" id="projects" v-if="entryClick">
        <div style="text-align:left;" data-aos="fade-right">
          <ul>
              <a @click="mainView='projects'"><li class="toolbar-items" style="display: inline-block; margin-right:2em; font-size:1.5em; color: #9D8D80;">Projects </li></a>
              <a @click="mainView='about'"><li class="toolbar-items" style="display: inline-block; margin-right:2em; font-size:1.5em; color: #9D8D80;">About </li></a>
              <a @click="mainView='links'"><li  class="toolbar-items" style="display: inline-block; font-size:1.5em; color: #9D8D80;">Links </li></a>
            </ul>
        </div>

        <span v-if="mainView=='about'">
          <div class="about">
    <v-container style="max-width:888px; height:1100px; text-align:left; padding-top:6em;">
      <v-row>

        <v-container class="section">
          <v-row justify="left">
            <span style="font-size:1.8em;">Info</span><br>
          </v-row>
          <v-row>
            <br>
            I am a Full Stack Developer with a focus on web development. 
            I use VueJs, AWS Console, Axios-APIs, Git & Github on the daily to develop, deploy and maintain web-products from end-to-end. 
            My current role is multi-faceted, sitting between the engineering and product organizations -- demanding both techincal and soft skills everyday.<br><br>
            I studied Economics and History at NYU, focusing on Econometrics for the former and History of Philosophy for the latter. 
            Through these interdisciplinary studies I have developed a passion for cross-functional and unstructured problems, which led me towards falling in love with programming. Not only am I able to sharpen my techincal and communcation skills, I am able to pull in my love for clean, aesthtic and functional design. 
          </v-row>
        </v-container>

        <v-container class="section">
          <v-row justify="left">
            <span style="font-size:1.8em;">Resume</span><br>
          </v-row>
          <v-row>
            <span style="font-size:.8em;"><a @click="print()">Download PDF</a></span>
            <!-- <Download v-show="false" ref="DownloadComp" /> -->
          </v-row>
          <v-row style="padding-top:.5em;">
            <div style="height:350px; overflow: auto; padding:1em;" >
              <br>
              <span><b>Full Stack Developer, PM</b></span><br><span style="color:grey;">Social Standards, </span><span style="color:grey;">Full-time</span><br>
              <span style="color:grey;">Nov 2020 – Present,</span>
              <span style="margin-left:1em; color:grey;"> Seattle, Washington, United States</span>
              <br>
              <div style="line-height:5px;"><br></div>
              <span>
                Develop and build web-based features and apps – involving integration into existing systems, and the development of new features from conceptualization to deployment. This includes:
              </span>
              <br><br>
              <span>
                <ul>
                  <li>The design, development and productization of Social Standards web products.</li>
                  <li>The development of an authentication system for all web features.</li>
                  <li> The development of a ‘role management system’.</li>
                  <li>The development of the Client Portal, through which clients can view, sort and filter their web reports, additional resources and contacts.</li>
                  <li>Deployment and maintenance of all web products through AWS and Github.</li>
                </ul>
              </span>
              <br><br>
              <span><b>Independent Contractor - Web Development UX/UI</b></span><br><span style="color:grey;">Social Standards, </span><span style="color:grey;">Contract</span><br>
              <span style="color:grey;">Jun 2020 – Nov 2020,</span>
              <span style="margin-left:1em; color:grey;"> New York City Metropolitan Area</span>
              <br><div style="line-height:5px;"><br></div>
              <span>Developed the <a href="https://www.socialstandards.com" target="_blank">Social Standards website</a> (VueJs), including all design and graphics (Adobe Illustrator).</span>
              <br><br><br>
              <span><b>Consumer Analytics Intern</b></span><br><span style="color:grey;">Social Standards, </span><span style="color:grey;">Internship</span><br>
              <span style="color:grey;">Aug 2019 – Dec 2019,</span>
              <span style="margin-left:1em; color:grey;"> Greater New York City Area</span>
              <br><div style="line-height:5px;"><br></div>
              <span>Role included pulling and interpreting social data in order to generate insights in the form of market research reports for current and prospective brand, PE, and VC clients as a member of the data analytics & consulting group, and interacted with clients fulfilling ad-hoc data analysis requests and follow-up analyses for deliverables. As well as creating workflow standardization decks for internal and external use, which streamlined analytic workflows and reduced inefficiencies.</span>
              <br><br><br>
              <span><b>Archive Intern</b></span><br><span style="color:grey;">José Limón Dance Foundation, </span><span style="color:grey;">Internship</span><br>
              <span style="color:grey;">May 2019 – Aug 2019,</span>
              <span style="margin-left:1em; color:grey;"> Bronx, NY</span>
              <br><div style="line-height:5px;"><br></div>
              <span>Responsible for organizing the foundation's digital photo archive, augmenting meta-data and creating a system of digital organization.</span>
              <br><br><br>
              <span><b>Research Intern</b></span><br><span style="color:grey;">Dienst + Dotter Antikviteter, </span><span style="color:grey;">Internship</span><br>
              <span style="color:grey;">Jan 2019 – May 2019,</span>
              <span style="margin-left:1em; color:grey;"> New York, NY</span>
              <br><div style="line-height:5px;"><br></div>
              <span>
                Responsible for:
              </span>
              <br>
              <span>
                <ul>
                  <li>Conducting research and organizing information relating to gallery pieces.</li>
                  <li>Maintaining gallery inventory records and information resources, and manage sales.</li>
                  <li>Interacting & coordinating with clients both in-person and via phone & email.</li>
                  <li>Assisting with ad-hoc clerical & functional tasks on a day-to-day basis.</li>
                </ul>
              </span>
              <br><br>

            </div>
          </v-row>
        </v-container>

        <v-container class="section">
          <v-row justify="left">
            <span style="font-size:1.8em;">Links</span><br>
          </v-row>
          <v-row style="padding-top:1em;">
            <a href="https://github.com/tetyana-zorya?tab=overview" target="_blank">Github</a>
            <a style="margin-left:1.5em;" href="https://www.linkedin.com/in/tetyana-zorya-157290140/" target="_blank">LinkedIn</a>
          </v-row>
        </v-container>
        

        
        
      </v-row>
    </v-container>
  </div>
        </span>

        <span v-if="mainView == 'projects'">
        <div style="padding-top:6em;" >
          <v-layout>
            <v-row row wrap>
              <v-flex sm3 class="chatImage"><div data-aos="fade-up"><a>
                <router-link :to="{name: 'chat-project'}">
                  <img @mouseover="projectHover = true" @mouseleave="projectHover = false" width="220px;" src="@/assets/projects/white.png" alt="white"  class="chatImage project-img">
                  <div id="chatWrite" class="chatImage">
                    <span style="position:relative; right:.1em;">Realtime</span><br>
                    <span style="position:relative; bottom:.5em;">Chat App</span>
                  </div>
                </router-link></a></div></v-flex>
              <v-flex sm3><div data-aos="fade-up"><a><img width="220px;" src="@/assets/projects/pink.png" alt="pink" class="project-img"></a></div></v-flex>
              <v-flex sm3><div data-aos="fade-up"><a><img width="220px;" src="@/assets/projects/yellow.png" alt="yellow" class="project-img"></a></div></v-flex>
              <v-flex sm3><div data-aos="fade-up"><a><img width="220px;" src="@/assets/projects/mauve1.png" alt="mauve" class="project-img"></a></div></v-flex>
            </v-row>
          </v-layout>
        </div>
        <v-container v-if="projectHover" id="chatInfo">
          <div>
            Realtime Web Chat Application Project: 
            <br>
            Incorportes Firebase Authentication and Realtime Database. 
          </div>
        
        
      </v-container>
      </span>

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
        projectHover: false,
        entryClick: false,
        mainView: 'projects'
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

      entry() {
        this.entryClick = true;
        // let ele = document.getElementById('animation-row');
        // ele.style.opacity = 0;
      },
      
    }
  }
</script>

<style lang="scss" scoped>

.section {
  margin-top:2em;
}

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
  background-color: #D6DCE4;
  position:relative; 
  bottom:8em;
  margin-left:0em;
  height:200px;
}
#chatWrite {
  height:100px;
  font-weight: 900;
  font-size:30px;
  display: none !important;
  position: absolute;
  top:1em;
  left:28%;
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
  font-size: 3em;
  font-weight:800;
  opacity: 0;
  color: #ffff;

  animation: opac 4s ease-in-out;
  animation-fill-mode: forwards;
  transition-timing-function: ease-in-out;

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
  background: #AFA297;
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

.name-appear {
  padding:1em 1em 1em 1em; 
  position:relative; 
  top:.5em;
  font-size: 3em;
  color:#F6F5F3; 
  font-weight: 800;
  margin-left:.5em;
  opacity: 0;

  animation: name-change 5s ease-in-out;
  animation-fill-mode: forwards;
  transition-timing-function: ease-in-out;
}

.toolbar-items:hover {
  position:relative;
  bottom:.2em;
  border-bottom: 2px solid #F0CE7F;
  padding-bottom: 2.5px;
}


#animation-row:hover {
 position:relative; 
 bottom:.3em;
}

.text-appear {
  width: 100%;
  font-size: 1.4em;
  position:relative; 
  bottom:1.45em;
  right:.6em;
  opacity: 0;
  color: #9D8D80;

  animation: opac 4s ease-in-out;
  animation-fill-mode: forwards;
  transition-timing-function: ease-in-out;
} 

.icon-appear {
  position:relative; 
  bottom:4.36em;
  opacity: 0;

  animation: opac 4s ease-in-out;
  animation-fill-mode: forwards;
  transition-timing-function: ease-in-out;
}

.point-down-example {
  //margin-left: 40vw; 
  background-color:transparent;
  height:0;
  margin-top:6em;
  border-bottom: 3px solid #F6F5F3;
  animation: draw-line 4s ease-in-out;
  animation-fill-mode: forwards;
  transition-timing-function: ease-in-out;
  color:#FFFF;
}

// .point-down-example:hover {
//   position:relative;
//    bottom:.3em;
// }

@keyframes opac {
 0% {
 }
 90% {
   opacity: 0;
 }
 100% {
   opacity: 1;
 }
}

@keyframes draw-line {
  0% { 
    width: 0;
    };
  10% {
    border-bottom: 3px solid#CCD5E1;
  }
  20% { 
    width: 360px; 
    border-bottom: 3px solid#CCD5E1;
    height:0;
    };
  40% {
    height:120px;
    width: 360px; 
    background-color:#CCD5E1;
    border: 0px;
    border-radius: 0px;
    box-shadow: 0px 0px 0px #DBDFE6;
    
  }
  55% {
    height:120px;
    width: 360px; 
    background-color:#CCD5E1;
    border: 0px;
    border-radius: 20px;
    box-shadow: 10px 10px 5px #DBDFE6;
   }
   75% {
     width: 60px; 
     height:120px;
     border: 0px;
    border-radius: 20px;
    box-shadow: 10px 10px 5px #DBDFE6;
    background-color:#CCD5E1;
   }

   90% {
    width: 60px; 
    height:60px;
    border: 0px;
    border-radius: 20px;
    box-shadow: 10px 10px 5px #DBDFE6;
    background-color:#CCD5E1;
    margin-left:0px;
    margin-top:6em;
   }

   100% {
    width: 30px; 
    height:30px;
    border: 0px;
    border-radius: 20px;
    box-shadow: 0;
    background-color:#9D8D80;
    margin-left:140px;
    margin-top:12em;
   }
}

@keyframes name-change {
  0% { 
    
    };
  30% {
    opacity: 0 
  }
  36% { 
    opacity: 1;
     };
  51% {
    opacity: 0;
  }
  100% {
    opacity: 0;
   }
}


</style>

