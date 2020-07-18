<template>
  <div class="background">
    
      <h1 class="title">【チャットルーム一覧】</h1>
      
    <div class="box1">
        
      <h3 class="title2">my-chat　ホーム</h3>
      <router-link to="/create" class="sinki">新規作成</router-link><br/>
      <br>
      <router-link to="/chat" class="chat">チャットルーム</router-link><br/>
      <br>
      <router-link to="/login" class="log">ログアウト</router-link>
      <br/>
      
    </div>

  </div >  
  </template>

<script>
export default {
  name: 'List',
  data: () => {
    return {
    }
  },
  mounted() {
  },
  created() {
  },
  methods: {
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
  

</style>


