<template>
  <div ref="circle" :class="isNearby ? 'nearby' : ''"></div>
</template>

<script>
  export default {
    props: ["mouseX", "mouseY"],
    data() {
      return {
        centerX: 0,
        centerY: 0
      }
    },
    computed: {
      distanceFromMouseX() {
        return Math.round(Math.abs(this.centerX - this.$props.mouseX), 2)
      },
      distanceFromMouseY() {
        return Math.round(Math.abs(this.centerY - this.$props.mouseY), 2)
      },
      isNearby() {
        const threshold = 100
        let nearby
        if (this.distanceFromMouseX < threshold && this.distanceFromMouseY < threshold) {
          nearby = true
        }

        else {
          nearby = false
        }

        return nearby
      }

    },
    mounted() {
      const rect = this.$refs.circle.getBoundingClientRect()
      const xCenter = rect.left + rect.width / 2
      const yCenter = rect.top + rect.height / 2
      
      this.centerX = xCenter
      this.centerY = yCenter
    }
  }
</script>

<style scoped>
  div {
    border-radius: 50%;
    background-color: hsl(153, 49%, 10%);
    aspect-ratio: 1 / 1;
    width: 2vh;

    display: flex;
    align-items: center;
    text-align: center;
    font-family: Arial, Helvetica, sans-serif;
  }

  .nearby {
    background: hsl(153, 48%, 49%);
    scale: 2.25;
  }
</style>