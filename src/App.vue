<template>
  <h1>{{ title }}</h1><br><br/>
  <input type="text" ref="name">
  <button @click="handleClick">Click me</button>
  <Modal v-for="(modal, index) in modals" :modal="modal" :index="index">
    <template v-slot:welcome>
      <p v-if="index === 0">Welcome...</p>
    </template>
  </Modal>
</template>

<script>
import Modal from "./components/Modal.vue" 

export default {
  name: 'App',
  components: { Modal },
  data() {
    return {
      title: "My first Vue App :)",
      modals: [
        {h1: "Modal the 1st", p: "I'm the first modal", theme: "first"},
        {h1: "Modal the 2nd", p: "I'm the second modal", theme: "second"},
        {h1: "Modal the 3rd", p: "I'm the third modal", theme: "third"},
        {h1: "Modal the 4th", p: "I'm the fourth modal", theme: "fourth"}
      ],
    }
  },
  methods: {
    handleClick() {
      console.log(this.$refs.name)
      this.$refs.name.classList.add("active")
      this.$refs.name.focus()
    },
    toggleModal(modalComponent) {
      console.log(modalComponent)
      modalComponent.showModal = !modalComponent.showModal
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

p {
  margin-block: 1rem;
  font-style: italic;
}

input {
  margin-right: 0.5rem;
}

h1 {
  border-bottom: 1px solid #ddd;
  display: inline-block;
  padding-bottom: 10px;
}
</style>
