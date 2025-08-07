<template>
  <div class="circle-wrapper">
    <CircleRow v-for="n in 8"/>
  </div>
</template>

<script>
  import CircleRow from './components/CircleRow.vue';

  export default {
    name: "App",
    components: { CircleRow }
  }
</script>

<style scoped>
  .circle-wrapper {
    background-color: black;
    height: 100vh;
    
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 5vh
    
  }
</style>