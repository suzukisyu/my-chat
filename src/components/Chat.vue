<template>
  <div>
    <div v-for="(message, key) in messages" v-bind:key="key">
      <div class="name">
        {{ message.name }}
      </div>
      <div class="text">
        {{ message.text }}
      </div>
    </div>
    <div class="input-form">
      <div>
        <input
          type="text"
          name="inputName"
          class="input-name"
          placeholder="名前"
        />
      </div>
      <div>
        <textarea
          name="inputText"
          class="input-text"
          placeholder="テキスト"
          rows="5"
          cols="30"
        ></textarea>
      </div>
      <div>
        <button>送信</button>
      </div>
    </div>
  </div>
</template>

<script>
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
    this.messages = [
      {
        name: "太郎",
        text: '元気ですか？'
      },
      {
        name: "次郎",
        text: '元気です'
      }
    ];
  },
  methods: {
    onSubmit() {
      this.messages.push({
        name: this.inputName
      });
    }
  }
}
</script>

<style scoped>
.name {
  font-weight: bold;
}
.text {
  text-indent: 1em;
}
.input-form {
  margin-top: 10px;
}
.input-name {
  width: 100px;
}
.input-name {
  width: 100px;
}
</style>
