<template>
  <div class="backdrop" v-show="visibility" @click.self="toggleModal">
    <div class="modal" :class="modal.theme">
      <h1> {{ modal.h1 }}</h1>
      <p>{{ modal.p }}</p>
      <div class="actions">
        <a href="#">Sign up now</a>
        <a href="#">More info</a>
      </div>
    </div>
  </div>
  <slot name="welcome"></slot>
  <br/><br/>
  <button @click="toggleModal">Show Modal {{ index + 1 }}</button>
</template>

<script>
export default {
  props: ['modal', 'index'],
  data() {
    return {
      visibility: false
    }
  },
  methods: {
    toggleModal() {
      this.visibility = !this.visibility
    }
  }
}
</script>

<style scoped>
.modal {
  width: 400px;
  padding: 20px;
  margin: 100px auto;
  background: white;
  border-radius: 10px;
}

.modal>h1 {
  color: rgb(88, 14, 14);
  margin-bottom: 0.5rem;
}

.backdrop {
  top: 0;
  position: fixed;
  background: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
}

.modal.first {
  border: 3px orchid solid;
}

.modal.second {
  border: 3px rebeccapurple solid;
}

.modal.third {
  border: 3px navy solid;
}

.modal.fourth {
  border: 3px orange solid;
}

.modal .actions {
  text-align: center;
  margin: 30px 0 10px 0;
}

:deep(.modal .actions a) {
  color: #333;
  padding: 8px;
  border: 1px solid #cac8c8;
  border-radius: 4px;
  text-decoration: none;
  margin: 10px;
}
</style>