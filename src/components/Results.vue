<template>
  <div v-if="showResults">
    <p>Reaction Time: {{ score }} </p>
    <p class="rank">{{ rank }}</p>
  </div>
</template>

<script>
  export default {
    props: ['showResults' ,'score'],
    data() {
      return {
        rank: null
      }
    },
    mounted() {
      if (this.score < 250) {
        this.rank = "Ninja Fingers"
      }

      else if (this.score < 400) {
        this.rank = "Rapid Reflexes"
      }

      else {
        this.rank = "Snail's pace..."
      }
    }
  }
</script>

<style scoped>
  .rank {
    font-size: 1.4rem;
    color: #0faf87;
    font-weight: bold;
  }
</style>