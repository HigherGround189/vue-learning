<template>
  <div class="circle-wrapper">
    <CircleRow v-for="n in 8" :mouseX="mouseX" :mouseY="mouseY"/>
  </div>
</template>

<script>
  import CircleRow from './components/CircleRow.vue';

  export default {
    name: "App",
    components: { CircleRow },
    data() {
      return {
        mouseX: null,
        mouseY: null
      }
    },
    mounted() {
        document.addEventListener('mousemove', (event) => {
          this.mouseX = event.clientX;
          this.mouseY = event.clientY;

          console.log(`Mouse position: X=${this.mouseX}, Y=${this.mouseY}`);
        });
    }
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