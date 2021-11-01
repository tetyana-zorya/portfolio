<template>
  <div class="about">
    <v-container style="max-width:888px; height:1100px;">
      <v-row>

        <v-container class="section">
          <v-row justify="left">
            <span style="font-size:1.8em;">Info</span><br>
          </v-row>
          <v-row>
            <span>pronouns: She/Her</span>
            <br>
            I am a Full Stack Developer with a focus on web development. 
            I use VueJs on the daily to develop, deploy and maintain web-products from end-to-end. 
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
</template>

<script>
//import Download from '@/assets/CV'

export default {
  name: 'about',
  components: {
    //Download
  },
  data () {
  },
  methods: {
    print() {
      let w = window.open();
      w.document.write(this.$refd.DownloadComp.$el.innerHTML)
      w.document.close()
      w.setTimeout(
        function () {
          w.print()
        }, 100
      )
    }
  }
}
</script>

<style scoped>
.section {
  margin-top:2em;
}
</style>
