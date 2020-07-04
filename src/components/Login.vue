<template>
  <div class="main">
    <div class="content">
      <h1 class="title">my-chat ログイン</h1>
      <div class="body">
        <div class="input-group">
          <div class="input-name">ユーザー名</div>
          <input class="input" type="text"/>
        </div>
        <div class="input-group">
          <div class="input-name">パスワード</div>
          <input class="input" type="passowrd"/>
        </div>
        <div class="button-group">
          <button class="button">ログイン</button>
        </div>
        <div class="signup-group">
          <router-link to="/signup">ユーザー登録</router-link>
        </div>
      </div>
    </div>
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
</style>
