<template>
  <div>
    <Circles v-for="n in 10" :mouseX="mouseX" :mouseY="mouseY"/>
    <!-- <p> X: {{ mouseX }}, Y: {{ mouseY }}</p> -->
  </div>
</template>

<script>
  import Circles from './Circles.vue';

  export default {
    components: { Circles },
    props: ["mouseX", "mouseY"]
  }
</script>

<style scoped>
  div {
    display: flex;
    gap: 5vh;
  }

  p {
    color: red;
    font-family: Arial, Helvetica, sans-serif;
  }
</style>