<template>
  <div class="background">
    
      <h1 class="title">【チャットルーム一覧】</h1>
      
    <div class="box1">
        
      <h3 class="title2">my-chat ホーム</h3>
      <router-link to="/create" class="sinki">新規作成</router-link><br/>
      <br>
      
      <table>
        <tr>
          <th>チャットルーム名</th>
        </tr>
        <tr class="list"v-for="chat in chats">
          <td>{{chat.name}}</td>
        </tr>
      </table>
      
      <router-link to="/login" class="log">ログアウト</router-link>
      <br/>
      
    </div>

  </div >  
  </template>

<script>
import firebase from 'firebase'

export default {
  name: 'List',
  data: () => {
    return {
      chats: []
    }
  },
  mounted() {
  },
  async created() {
    firebase.auth()
    await firebase.database().ref('/chats').on('child_added', this.added)
  },
  methods: {
    added(snap) {
      const chat = snap.val()
      this.chats.push({
        key: snap.key,
        name: chat.name,
      })
    }
  }
}
</script>

<style scoped>

.title{
  font-size: 20px;
  font-weight: lighter;
}

.title2{
  font-weight: bold;
}

  .background{
    
  }
  
  .box1 {
    padding: 1em 1em;
    margin: 1em 0;
    font-weight: bold;
    border: solid 1px #000000;
  }
  
  .sinki{
    padding: 0.5em 1em;
    margin: 2em 0;
    font-weight: bold;
    border: solid 1px #000000;
  }
  
  .chat{
    padding: 0.5em 1em;
    margin: 2em 0;
    font-weight: bold;
    border: solid 1px #000000;
  }
  
  .log{
   
    padding: 0.5em 1em;
    margin: 2em 0;
    font-weight: bold;
    border: solid 1px #000000;
    right: 100%;
  }
  
  .list{
  border: solid 1px #000000;
  color: black;
  text-decoration: none;
  padding: 20px;
  margin-top: 20px;
  display: flex;
  cursor: pointer;
  }

</style>


