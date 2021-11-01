<template>
  <div>
    <v-container>
    Welcome to the {{roomData.room_name}} chatroom
    <br>
    members:
    <br>
    <ul v-for="(item, idx) in members" :key="idx" style="list-style-type: none;">
      <li>{{item.username}}</li>
    </ul>
    Access: {{roomData.access}}
    <br>
    Admin: {{roomData.admin}}
    </v-container>

    <v-container v-if="loaded">
      <v-row justify="center">
        <v-card style="width:600px; height:500px; border: solid 20px #f5f5f5;">
          
          <v-card-text>
            <div style="padding:1em;">
              <!-- <div v-for="(message, idx) in messageHistory" :key="idx" style="padding-top:1em;">
                <v-row v-if="message.sender_uid == getLoggedUser.uid" style="float:right; padding-top:1em;">
                  <div class="my-message">{{message.message}}</div>
                </v-row>
                <v-row v-else style="float:left;">
                  <div  class="message">{{message.message}}</div>
                </v-row>
              </div> -->

              <ol v-for="(message, idx) in messageHistory" :key="idx" style="padding-top:1em; list-style-type:none;" class="reverseorder" track-by="ts">
                <li v-if="message.sender_uid == getLoggedUser.uid">
                  <div class="my-message">
                    <span style="padding-left:.5em;">
                      {{message.message}}
                    </span>
                  </div>
                  
                </li>

                <li v-else>
                  <div class="subtitle">
                    {{message.sender_name}}
                  </div>
                  <div class="message">
                    <span style="padding-left:.5em;">
                      {{message.message}}
                    </span>
                  </div>
                </li>

              </ol>
            </div>
          </v-card-text>
          

          <v-card-actions>
            <v-row justify="center">
              <span style="position:absolute; bottom:.5em; right:1.5em;">
                <v-text-field ref="message" v-model="textInput" placeholder="message" solo rounded style="width:500px;" append-outer-icon="mdi-arrow-right-bold-box" v-on:keyup.enter="send()"></v-text-field>
              </span>
            </v-row>
          </v-card-actions>
          
        </v-card>
      </v-row>
    </v-container>
    
  </div>
</template>

<script> 
import { getDatabase, ref, onValue, set  } from "firebase/database";
import { mapGetters } from 'vuex'

export default {
  name: 'chat-room',
  data() {
    return {
      roomData: [],
      members: [],
      textInput: '',
      messageHistory: [],
      loaded: false,
    }
  },
  created() {
    this.init()
  },
  computed: {
    ...mapGetters([
      'getLoggedUser'
    ]),

    // messageHistory() {
    //   let history = []
    //   const db = getDatabase();
    //   const checkRooms = ref(db, 'messages');
    //   onValue(checkRooms, (snapshot) => {
    //     history = snapshot.val();
    //     console.log(history)
    //   });

    //   return history[this.$route.query.id]
    // }

  },

  methods: {

    init() {
      this.getRoomInfo()
    },

    getRoomInfo() {
      //get basic room info
      const db = getDatabase();
      const checkRooms = ref(db, 'chatrooms');
      onValue(checkRooms, (snapshot) => {
        const data = snapshot.val();
        this.roomData = data[this.$route.query.id]
        this.getMemberInfo(data[this.$route.query.id].members);
      });
    },

    getMemberInfo(array) {
      let members = []
      //get member info
      for (const i in array) {
        if (!isNaN(i)) {
          const db = getDatabase();
          const checkRooms = ref(db, 'users/'+ array[i]);
          onValue(checkRooms, (snapshot) => {
            const data = snapshot.val();
            members.push(data)
            this.getHistory();
          });
        }
      }
      console.log(members)
      this.members = members
    },

    getHistory() {
      let history = []
      const db = getDatabase();
      const checkRooms = ref(db, 'messages');
      onValue(checkRooms, (snapshot) => {
        history = snapshot.val();
        if (history) {
          //this.messageHistory = history[this.$route.query.id];
          this.messageHistory = this.sorting(history[this.$route.query.id])
        }
        this.loaded = true;
      });
      
    },

    sorting(set) {
      console.log(set)
      let array = [];
      for (const i in set) {
        array.push(set[i]) 
      }
      //console.log(array.reverse())
      array = array.sort((a,b) => a.ts - b.ts)
      console.log(array)
      return array
    },

   createUid() {
      //generate message uid
      return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
        (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
      );
    },

    send() {
      //write message to db
      const today = new Date();
      const date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
      const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
      const dateTime = date +' '+ time;
      const ts = Date.now();
      
      
      const db = getDatabase();
        let id = this.createUid()
        set(ref(db, 'messages/' + this.roomData.room_id + '/'+ id), {
          message: this.textInput,
          message_uid: id,
          sender_uid: this.getLoggedUser.uid,
          sender_name: this.getLoggedUser.name,
          org: this.roomData.color,
          members: this.members,
          chatroom_uid: this.roomData.room_id,
          chatroom_name: this.roomData.room_name,
          dateTime: dateTime,
          date: date,
          time: time,
          ts: ts
          
        }).then(() => { console.log('done')}) 
        .catch((err) => { console.log(err)})
        this.$refs.message.reset()
     }

  },


}
</script>

<style lang="scss" scoped>

.my-message {
 background-color: #80D8FF;
 padding:.5em;
 border-radius: 25px; 
 margin-left:4em;
}

.message {
 background-color: #E0E0E0;
 padding:.5em;
 border-radius: 25px; 
 margin-right:5em;
}

.subtitle {
  position:relative;
  left:1.5em;
  bottom:0em;
  font-size:.8em;
}

</style>