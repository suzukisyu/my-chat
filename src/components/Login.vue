<template>
  <div>
    ログイン<br/>
    <br>
    ユーザー名
    <input
    type="text"
    >
    <br>
    <br>
    <br>
    
    パスワード
    <input
    type="text"
    >
    <br>
    <button class="button">ログイン</button>
    
    <br>
    <br>
    <router-link to="/signup">ユーザー登録</router-link><br/>
  </div>
</template>

<script>
export default {
  name: 'Login',
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
.button{
  background-color: green;
  
}
</style>
