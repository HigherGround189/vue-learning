<template>
  <div class="backdrop" @click.self="closeModal">
    <div class="modal" :class="{ sale: theme === 'sale' }">
      <slot></slot>
      <div class="actions">
        <slot name="links"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['modal', 'theme'],
  methods: {
    closeModal() {
      this.$emit("closeModal")
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

.modal.sale {
  border: 3px orchid solid;
}

.modal .actions {
  text-align: center;
  margin: 30px 0 10px 0;
}

::v-deep .modal .actions a {
  color: #333;
  padding: 8px;
  border: 1px solid #cac8c8;
  border-radius: 4px;
  text-decoration: none;
  margin: 10px;
}
</style>