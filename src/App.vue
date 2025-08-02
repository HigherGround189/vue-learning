<template>
  <h1>Ninja Reaction Template</h1>
  <button @click="start" :disabled="isPlaying">Play</button>
  <Block v-if="isPlaying" :delay="delay" @end="endGame"/>
  <Results :showResults="showResults" :score="score"/>
</template>

<script>
import Block from "./components/Block.vue"
import Results from "./components/Results.vue"

export default {
  name: "App",
  components: { Block, Results },
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

  div {
    margin-block: 1rem;
  }
</style>
