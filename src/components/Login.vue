<template>
  <div class="main">
    <div class="content">
      <h1 class="title">my-chat ログイン</h1>
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
        <div class="button-group">
          <button class="button" v-on:click="login">ログイン</button>
        </div>
        <div class="signup-group">
          <router-link to="/signup">ユーザー登録</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase'

export default {
  name: 'Login',
  data: () => {
    return {
      userName: '',
      password: '',
      message: ''
    }
  },
  mounted() {
    localStorage.setItem('login', 0)
  },
  created() {
  },
  methods: {
    async login() {
      if (this.userName == '') {
        this.message = 'ユーザー名を入れてください'
        return
      }
      if (this.password == '') {
        this.message = 'パスワードを入れてください'
        return
      }
      if (await this.checkUser(this.userName, this.password)) {
        localStorage.setItem('login', 1)
        await this.$router.push('/')
      } else {
        this.message = 'ログインに失敗しました'
      }
    },
    async checkUser(userName, password) {
      firebase.auth()
      const user = await firebase.database().ref('/users/' + userName).once('value')
      if (!user.val()) {
        return false
      }
      return password == user.val().password;
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
