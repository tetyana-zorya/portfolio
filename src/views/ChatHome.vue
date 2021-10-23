<template>
  <div>
    <v-container :style="{backgroundColor: getLoggedUser.color}">
        <v-row justify="center" style="padding-top:5em;">
          Hi {{this.getLoggedUser.name}}!
        </v-row>

        <div v-if="chats.length">
          <v-row justify="center" style="padding-top:5em;" >
              Choose your chatroom: 
          </v-row>
          <v-row justify="center" style="padding-top:1em;" >
              <ul v-for="(item, idx) in chats" :key="idx" style="list-style-type:none;">
                <a @click="openRoom(item)"><li>{{item.room_name}}</li></a>
              </ul>   
          </v-row>
        </div>

        <v-row justify="center" style="padding-top:5em;">
          <v-btn @click="createDialog()">Create Chatroom</v-btn>
        </v-row>
      </v-container>

      <v-dialog v-model="createRoom" width="500">
        <v-card>
          <v-card-title>
            Create Chat
          </v-card-title>
          <v-card-text>
            <v-form ref="createForm"> 
              <v-text-field v-model="chatName" placeholder="Chat Name"></v-text-field>
              <v-select v-model="adding" multiple placeholder="Add Friends To Chat" :items="userList" item-value="uid" item-text="username" ></v-select>
              <v-btn @click="createChatroom()">Create</v-btn>
            </v-form>
          </v-card-text>
        </v-card>
      </v-dialog>
  </div>
</template>

<script>
import { getDatabase, ref, child, get, set, onValue } from "firebase/database";
import { mapGetters, mapMutations} from 'vuex'

export default {
  name: 'chats-home',
  data() {
    return {
      chats: [],
      createRoom: false,
      userColor: '',
      chatName: '',
      userList: [],
      adding: '',
    }
  },
  created() {
    this.getInfo()
    this.getRoomList()
  },
  computed: {
    ...mapGetters([
      'getLoggedUser'
    ])
  },
  methods: {

    ...mapMutations([
      'SET_USER_INFO'
    ]),


    createChatroom() {
        let roomId = this.createId(5);

        let members = [ this.getLoggedUser.uid]

        console.log(this.adding)
        for (const n in this.adding) {
          members.push(this.adding[n])
        }

        const db = getDatabase();
        set(ref(db, 'chatrooms/' + roomId), {
          room_id: roomId,
          room_name: this.chatName,
          members: members,
          color: '#B2DFDB',
          admin: [this.getLoggedUser.uid],
          access: 'Private'
        })
        .then(
          this.createRoom = false
        )
      },

      createDialog() {
        this.createRoom = true;
        const dbRef = ref(getDatabase());
        get(child(dbRef, `users`)).then((snapshot) => {
          if (snapshot.exists()) {
            console.log(snapshot.val())
            this.makeUserList(snapshot.val())
          } else {
            console.log("No data available");
          }
        }).catch((error) => {
          console.error(error);
        });

      },
        
      createId() {
        let r = (Math.random() + 1).toString(36).substring(2);
        return r;
      },

      getInfo() {
      const dbRef = ref(getDatabase());
      get(child(dbRef, `users/${this.getLoggedUser.uid}`)).then((snapshot) => {
        if (snapshot.exists()) {
          this.SET_USER_INFO(snapshot.val())
        } else {
          console.log("No data available");
        }
      }).catch((error) => {
        console.error(error);
      });

    },

    makeUserList(list) {
      console.log(list);
      let set = [];
      for (const i in list) {
        set.push(list[i])
      }
      set = set.filter(x => x.color = this.getLoggedUser.color);
      set = set.filter(x => x.uid != this.getLoggedUser.uid)
      console.log(set)
      this.userList = set
    },

    getRoomList() {
      const db = getDatabase();
      const checkRooms = ref(db, 'chatrooms');
      onValue(checkRooms, (snapshot) => {
        const data = snapshot.val();
        this.updateRooms(data);
        console.log(data)
      });
    },

    updateRooms(data) {
      for (const i in data) {
        this.chats.push(data[i])
      }
      console.log(this.chats)
    },

    openRoom(item) {
      console.log(item)
      this.$router.push({path: '/room' + '?id=' + item.room_id})
    }
    
  }
}
</script>