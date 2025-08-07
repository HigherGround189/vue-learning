<template>
  <div ref="circle"></div>
</template>

<script>
  import { ref } from 'vue'

  export default {
    data() {
      return {
        center: null,
      }
    },

    mounted() {
      const rect = this.$refs.circle.getBoundingClientRect()
      const xCenter = rect.left + rect.width / 2
      
      this.center = xCenter
    }
  }
</script>

<style scoped>
  div {
    border-radius: 50%;
    background-color: hsl(153, 48%, 49%);
    aspect-ratio: 1 / 1;
    width: 5vh;
  }

  div:hover {
    width: 8vh;
  }
</style>