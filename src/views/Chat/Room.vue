<template>
  <div>
    
    <br>
    {{roomData}}
    <br>
    Welcome to the {{roomData.room_name}} chatroom
    <br>
    members: {{roomData.members}}
  </div>
</template>

<script> 
import { getDatabase, ref, onValue } from "firebase/database";
import { mapGetters } from 'vuex'

export default {
  name: 'chat-room',
  data() {
    return {
      roomData: ''
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
      console.log('ingetroomlist')
      const db = getDatabase();
      const checkRooms = ref(db, 'chatrooms');
      onValue(checkRooms, (snapshot) => {
        console.log(snapshot.val())
        const data = snapshot.val();
        //this.updateRooms(data);
        console.log(data)
        console.log(this.$route.query.id)
        this.roomData = data[this.$route.query.id]
      });
    },
  },


}
</script>