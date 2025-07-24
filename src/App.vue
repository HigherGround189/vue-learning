<template>
  <h1>{{ title }}</h1><br><br/>
  <input type="text" ref="name">
  <button @click="handleClick">Click me</button>
  <Modal :modal="modal" theme="sale" @closeModal="toggleModal" v-show="showModal"/>
  <p>Welcome...</p>
  <button @click="toggleModal">Show Modal</button>
</template>

<script>
import Modal from "./components/Modal.vue" 

export default {
  name: 'App',
  components: { Modal },
  data() {
    return {
      title: "My first Vue App :)",
      modal: {"header": "Header binded", "content": "Content binded"},
      showModal: false
    }
  },
  methods: {
    handleClick() {
      console.log(this.$refs.name)
      this.$refs.name.classList.add("active")
      this.$refs.name.focus()
    },
    toggleModal() {
      this.showModal = !this.showModal
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
