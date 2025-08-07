<template>
  <div>
    <Circles v-for="n in 10"/>
  </div>
</template>

<script>
  import Circles from './Circles.vue';

  export default {
    components: { Circles }
  }
</script>

<style scoped>
  div {
    display: flex;
    gap: 5vh;
  }
</style>