<template>
  <div>
    <h1 class="title">my-chat チャットルーム作成</h1><br/>
    <div class="box">    
        <div>
          チャットルーム名
          <input 
            v-model="name"
            type="text"
            class="room"
          />
        </div>  
    
        <div>
          
          <button class="button" v-on:click="create">作成</button>
          
        </div>
        
        <br>
        <br>
        <router-link to="/" class="back">戻る</router-link><br/>
    </div>    
  </div>
</template>

<script>
import firebase from 'firebase'

export default {
  name: 'Create',
  data: () => {
    return {
      name: ''
    }
  },
  mounted() {
  },
  created() {
  },
  methods: {
    create() {
      firebase.database().ref('chats').push({
        name: this.name
      }, () => {
        this.$router.push('/')
      })
    }
  }
}
</script>

<style scoped>

.box{
  padding: 1em 1em;
    margin: 1em 0;
    font-weight: bold;
    border: solid 1px #000000;
}

.title{
  font-size:20px;
}

.room{
  font-size:20px;
  
}


.back{
   padding: 0.5em 1em;
    margin: 2em 0;
    font-weight: bold;
    border: solid 1px #000000;
    right: 100%;
}

.button{
   position: relative;
  top: 10px;
  left: 128px;
  font-size:20px;
  background:white;
}

</style>
