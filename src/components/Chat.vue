<template>
  <div class="background">
    
    <div v-for="(message, key) in messages" v-bind:key="key">
      <div class=" name">
        {{ message.name }}
      </div>
      <div class=" text">
        {{ message.text }}
      </div>
    </div>
   
    
    <div class=" input-form">
      
      <div>
        <input
          v-model="inputName"
          type="text"
          name="inputName"
          class="input-name"
          placeholder="名前"
        />
      </div>
      
      <div>
        <textarea 
          v-model="inputText"
          name="inputText"
          class="input-text"
          placeholder="テキスト"
          rows="5"
          cols="30"
        ></textarea>
      </div>
      
      <div>
        <button class="button" v-on:click="onSubmit">送信</button>
      </div>
   
    </div>
  </div>
</template>

<script>
import firebase from 'firebase'

export default {
  name: 'Chat',
  data: () => {
    return {
      messages: Array,
      inputName: '',
      inputText: ''
    }
  },
  mounted() {
    this.messages = []
  },
  created() {
    firebase.auth().onAuthStateChanged(() => {
      const ref_message = firebase.database().ref('messages')
      ref_message.limitToLast(10).on('child_added', this.added)
    })
  },
  methods: {
    onSubmit() {
      if(this.inputName == ""){
        alert("送信出来ません");
      }else if(this.inputText == ""){
        alert("送信できません")
      }else{
        // firebase にメッセージを追加
        firebase.database().ref('messages').push({
          name: this.inputName,
          text: this.inputText
        }, () => {
          this.inputText = ""
        })
      }
    },
    added(snap) {
      const message = snap.val()
      this.messages.push({
        name: message.name,
        text: message.text
      })
    }
  }
}
</script>

<style scoped>

.name { 
  margin-top: 5px;
  text-indent: 1em;
  font-weight: bold;
  background:#87cefa;
  width: 100px;
  height:30px;
  border-radius: 50px;
}


.text {
  margin-top: 5px;
  text-indent: 2em;
  background:#98fb98;
  width: 200px;
  height:30px;
  border-radius: 50px;
  
}


.input-form {
  margin-top: 20px;
}


.input-name {
  width: 100px;
  display: inline-block;
  padding: 0.5em 1em;
  text-decoration: none;
  background: #f7f7f7;
  border-left: solid 6px #87cefa;
  color:gray;
  font-weight: bold;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.29);
}

.input-text{
   margin-top: 5px;
   width: 300px;
  display: inline-block;
  padding: 0.5em 1em;
  text-decoration: none;
  background: #f7f7f7;
  border-left: solid 6px #98fb98;
  color:gray;
  font-weight: bold;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.29);
}


.button{
  display: inline-block;
  padding: 0.5em 1em;
  text-decoration: none;
  background: #f7f7f7;
  border-left: solid 6px #ff7c5c;/*左線*/
  color: #ff7c5c;/*文字色*/
  font-weight: bold;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.29);
}
.button:hover {
  box-shadow: inset 0 0 2px rgba(128, 128, 128, 0.1);
  transform: translateY(2px);
}


.background{
  padding: 10px; 
  margin-bottom: 10px; 
  border: 5px double #333333
}





</style>
