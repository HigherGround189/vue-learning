<template>
  <form>
    <label>Email: </label>
    <input type="email" required v-model="email"/>

    <label>Password: </label>
    <input type="password" required v-model="password"/>

    <label>Role:</label>
    <select v-model="role">
      <option value="Developer">Web Developer</option>
      <option value="Designer">Web Designer</option>
    </select>
  </form>

  <p>Email: {{ email }}</p>
  <br/>
  <p>Password: {{ password }}</p>
  <p>Role: {{ role }}</p>
</template>

<script>
  export default {
    data() {
      return {
        email: "",
        password: "",
        role: ""
      }
    }
  }
</script>

<style scoped>
  form {
    max-width: 50vw;
    margin:30px auto;
    background: white;
    text-align: left;
    padding: 40px;
    border-radius: 10px;
  }

  label {
    color: #aaa;
    display: inline-block;
    margin: 25px 0 15px;
    font-size: 0.6rem;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: bold;
  }

  input, select {
    display: block;
    padding: 10px 6px;
    width: 100%;
    box-sizing: border-box;
    border: none;
    border-bottom: 1px solid #ddd;
  }
</style>
