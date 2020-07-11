<template>
  <div class="main">
    <div class="content">
      <h1 class="title">ユーザー登録</h1>
      <div class="body">
        <div class="message">{{message}}</div>
        <div class="input-group">
          <div class="input-name">ユーザー名</div>
          <input class="input" type="text" v-model="userName"/>
        </div>
        <div class="input-group">
          <div class="input-name">パスワード</div>
          <input class="input" type="password" v-model="password"/>
        </div>
        <div class="input-group">
          <div class="input-name">パスワード(確認)</div>
          <input class="input" type="password" v-model="passwordConfirm"/>
        </div>
        <div class="button-group">
          <button class="button" v-on:click="regist">ユーザー登録</button>
        </div>
        <div class="button-group">
          <button class="button" v-on:click="back">戻る</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase'

export default {
  name: 'SignUp',
  data: () => {
    return {
      userName: '',
      password: '',
      passwordConfirm: '',
      message: '',
    }
  },
  mounted() {
  },
  created() {
  },
  methods: {
    async regist() {
      if(this.userName == ''){
        this.message = 'ユーザー名を入れてください'
        return
      }
      if(this.password == ''){
        this.message = 'パスワードを入れてください'
        return
      }
      if(this.passwordConfirm == ''){
        this.message = 'パスワード（確認）を入れてください'
        return
      }
      if(this.passwordConfirm !== this.password){
        this.message = 'パスワード（確認）が違います'
        return
      }
      if (await this.existsUser(this.userName)) {
        this.message = '既に存在しているユーザーです'
        return
      }
      
      await this.registUser(this.userName, this.password);
      localStorage.setItem('login', this.userName)
      this.$router.push('/')
    },
    async registUser(userName, password) {
      firebase.auth()
      await firebase.database().ref('/users/' + userName).set({
        password: password
      });
    },
    async existsUser(userName) {
      firebase.auth()
      const user = await firebase.database().ref('/users/' + userName).once('value')
      return !!user.val()
    },
    back() {
      this.$router.push('/login')
    }
  }
}
</script>

<style scoped>
.main {
  width: 300px;
  margin-right: auto;
  margin-left: auto;
  text-align: center;
}
.content {
  background-color: #ffffff;
  box-shadow: 0 0 8px rgba(0, 0, 0, .16);
  color: #212121;
  text-decoration: none;
}
.title {
  font-size: 20px;
}
.body {
  padding: 10px;
  text-align: left;
}
.input-group {
  margin: 10px;
}
.input-name {
  font-size: 14px;
}
.input {
  width: 100%;
}
.button-group {
  width: 100%;
  text-align: center;
}
.button {
  width: 200px;
  margin-top: 10px;
}
.signup-group {
  width: 100%;
  text-align: center;
  margin-top: 10px;
}
.message {
  color: red;
}
</style>
