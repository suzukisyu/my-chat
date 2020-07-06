<template>
  <div>
    ユーザー登録<br/>
    <router-link to="/">ユーザー登録</router-link><br/>
    <router-link to="/login">戻る</router-link><br/>
  </div>
</template>

<script>
import firebase from 'firebase'

export default {
  name: 'SignUp',
  data: () => {
    return {
    }
  },
  mounted() {
  },
  created() {
  },
  methods: {
    async regist() {
      if (await this.existsUser(this.userName)) {
        return
      }
      await this.registUser(this.userName, this.password);
      localStorage.setItem('login', this.userName)
      await this.$router.push('/')
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
    }
  }
}
</script>

<style scoped>
</style>
