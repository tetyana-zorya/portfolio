<template>
  <div>
    <v-container>
    <br>
    Welcome to the {{roomData.room_name}} chatroom
    <br>
    <br>
    members:
    <br>
    <ul v-for="(item, idx) in members" :key="idx" style="list-style-type: none;">
      <li>{{item.username}}</li>
    </ul>
    <br>
    Access: {{roomData.access}}
    <br>
    Admin: {{roomData.admin}}
    </v-container>
    
  </div>
</template>

<script> 
import { getDatabase, ref, onValue } from "firebase/database";
import { mapGetters } from 'vuex'

export default {
  name: 'chat-room',
  data() {
    return {
      roomData: '',
      members: []
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

  },


}
</script>