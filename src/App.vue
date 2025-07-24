<template>
  <h1>{{ title }}</h1><br><br/>
  <input type="text" ref="name">
  <button @click="handleClick">Click me</button>
  <Modal v-for="modal in modals" :theme="modal.theme" :visibility="modal.visibility" @closeModal="modal.visibility = !modal.visibility">
    <template v-slot:links>
      <a href="#">Sign up now</a>
      <a href="#">More info</a>
    </template>
    <h1> {{ modal.h1 }}</h1>
    <p>{{ modal.p }}</p>
  </Modal>
  <p>Welcome...</p>
  <button @click="modals[0].visibility = !modals[0].visibility">Show Modal 1</button>
  <br/><br/>
  <button @click="modals[1].visibility = !modals[1].visibility">Show Modal 2</button>
  <br/><br/>
  <button @click="modals[2].visibility = !modals[2].visibility">Show Modal 3</button>
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
        {h1: "Modal the 1st", p: "I'm the first modal", theme: "first", visibility : false},
        {h1: "Modal the 2nd", p: "I'm the second modal", theme: "second", visibility : false},
        {h1: "Modal the 3rd", p: "I'm the third modal", theme: "third", visibility : false}
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
