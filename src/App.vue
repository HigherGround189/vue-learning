<template>
  <h1>Ninja Reaction Template</h1>
  <button @click="start" :disabled="isPlaying">Play</button>
  <Block v-if="isPlaying" @click="isPlaying = !isPlaying" :delay="delay"/>
</template>

<script>
import Block from "./components/Block.vue"

export default {
  name: "App",
  components: { Block },
  data() {
    return {
      isPlaying: false,
      delay: null
    }
  },
  methods: {
    start() {
      this.delay = 2000 + Math.round(Math.random() * 2000)
      this.isPlaying = true
    }
  }

}
</script>

<style scoped>
  h1 {
    margin-bottom: 1rem;
  }
</style>
