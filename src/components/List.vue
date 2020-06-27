<template>
  <div>
    チャットルーム一覧<br/>
    <router-link to="/create">新規作成</router-link><br/>
    <router-link to="/chat">チャットルーム</router-link><br/>
    <router-link to="/login">ログアウト</router-link><br/>
  </div>
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
</style>
