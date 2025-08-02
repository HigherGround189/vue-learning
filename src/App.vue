<template>
  <h1>Ninja Reaction Template</h1>
  <button @click="start" :disabled="isPlaying">Play</button>
  <p v-if="showResults">Reaction Time: {{ score }} </p>
  <Block v-if="isPlaying" :delay="delay" @end="endGame"/>
</template>

<script>
import Block from "./components/Block.vue"

export default {
  name: "App",
  components: { Block },
  data() {
    return {
      isPlaying: false,
      delay: null,
      score: null,
      showResults: false
    }
  },
  methods: {
    start() {
      this.delay = 2000 + Math.round(Math.random() * 2000)
      this.isPlaying = true
      this.showResults = false
    },
    endGame(reactionTime) {
      this.score = reactionTime
      this.isPlaying = false
      this.showResults = true
    }
  }

}
</script>

<style scoped>
  h1 {
    margin-bottom: 1rem;
  }

  p {
    margin-block: 1rem;
  }
</style>
