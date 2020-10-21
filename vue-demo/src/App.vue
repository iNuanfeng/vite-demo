<template>
  <img alt="Vue logo" src="./assets/logo.png" width=""/>
  <HelloWorld msg="Hello Vue 3.0 + Vite" />
  <iframe ref="formIframe" src="http://localhost:3001/?a_oId=react" style="border:none;"></iframe>
  <button @click="submit">提交</button>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  mounted() {
    window.addEventListener('message', event => {
      console.log('i got it')
    })
  },
  methods: {
    submit() {
      const iframe = this.$refs.formIframe.contentWindow
      iframe.postMessage({
        oId: 'xxx'
      }, '*')
      console.log('i submit')
    }
  }
}
</script>

<style lang="css">
body {
  background: #f2f2f2;
  margin: 0;
  padding: 0;
  font-size: 0.1rem;
  width: 3.2rem;
}
iframe{
  transform:scale(0.8);
  width: 3.2rem;
  height: 5rem;
}
</style>