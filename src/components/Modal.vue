<template>
    <div class="backdrop" @click="closeModal">
        <div class="modal" :class="{ sale: theme === 'sale' }">
            <h1>{{ modal.header }}</h1>
            <p>{{ modal.content }}</p>
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

    .modal > h1 {
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
</style>