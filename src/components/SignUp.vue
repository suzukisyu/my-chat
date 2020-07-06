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
      await this.registUser('test', 'password');
    },
    async registUser(userName, password) {
      firebase.auth()
      await firebase.database().ref('/users/' + userName).set({
        password: password
      });
    }
  }
}
</script>

<style scoped>
</style>
