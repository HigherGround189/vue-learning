<template>
  <div>
    <p v-if="showResults">Reaction Time: {{ score }} </p>
  </div>
</template>

<script>
  export default {
    props: ['showResults' ,'score']
  }
</script>

<style scoped>

</style>