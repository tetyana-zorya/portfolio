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

    <v-container>
      <v-row justify="center">
        <v-card style="width:600px; height:500px; border: solid 20px #f5f5f5;">
          <v-row justify="center">
            <span style="position:absolute; bottom:.5em;">
            <v-text-field ref="message" v-model="textInput" placeholder="message" solo rounded style="width:500px;" append-outer-icon="mdi-arrow-right-bold-box" v-on:keyup.enter="send()"></v-text-field>
          </span>
          </v-row>
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
      textInput: ''
    }
  },
  created() {
    this.init()
  },
  computed: {
    ...mapGetters([
      'getLoggedUser'
    ])
  },
  methods: {

    init() {
      this.getRoomInfo();
    },

    getRoomInfo() {
      //get basic room info
      const db = getDatabase();
      const checkRooms = ref(db, 'chatrooms');
      onValue(checkRooms, (snapshot) => {
        console.log(snapshot.val())
        const data = snapshot.val();
        console.log(data)
        console.log(this.$route.query.id)
        this.roomData = data[this.$route.query.id]
        this.getMemberInfo(data[this.$route.query.id].members);
      });
    },

    getMemberInfo(array) {
      let members = []
      //get member info
      console.log(array)
      for (const i in array) {
        if (!isNaN(i)) {
          console.log(array[i])
          const db = getDatabase();
          const checkRooms = ref(db, 'users/'+ array[i]);
          onValue(checkRooms, (snapshot) => {
            console.log(snapshot.val())
            const data = snapshot.val();
            console.log(data)
            members.push(data)
          });
        }
      }
      console.log(members)
      this.members = members
    },

    send() {
      console.log(this.textInput)
      console.log(this.roomData.room_id)
      console.log(this.getLoggedUser.name)
      const today = new Date();
      const date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
      const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
      const dateTime = date +' '+ time;
      console.log(dateTime)
      console.log(date)
      console.log(time)

      const db = getDatabase();
        set(ref(db, 'messages/' + this.roomData.room_id), {
          message: this.textInput,
          sender_uid: this.getLoggedUser.uid,
          sender_name: this.getLoggedUser.name,
          org: this.roomData.color,
          members: this.members,
          chatroom_uid: this.roomData.room_id,
          chatroom_name: this.roomData.room_name,
          ts: dateTime,
          date: date,
          time: time
          
        }).then(() => { console.log('done')}) 
        .catch((err) => { console.log(err)})
        console.log('done writing')
      this.$refs.message.reset()
    }

  },


}
</script>