<template>
  <form>
    <label>
      Email:
      <input type="email" required v-model="email"/>
    </label>

    <label>
      Password:
      <input type="password" required v-model="password"/>
    </label>

    <label>
      Role:
      <select v-model="role">
        <option value="Developer">Web Developer</option>
        <option value="Designer">Web Designer</option>
      </select>
    </label>

    <div class="terms">
      <label>
        <input type="checkbox" v-model="terms" required>
        Accept Terms and Conditions
      </label>
    </div>

  </form>

  <p>Email: {{ email }}</p>
  <br/>
  <p>Password: {{ password }}</p>
  <br>
  <p>Role: {{ role }}</p>
  <br>
  <p>{{ terms ? "Terms Accepted ✅" : "Terms not Accepted ❌" }}</p>
</template>

<script>
  export default {
    data() {
      return {
        email: "",
        password: "",
        role: "",
        terms: false,
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

  input[type="checkbox"] {
    display: inline-block;
    width: 16px;
    margin: 0 10px 0 0;
    position: relative;
    top: 2px;
  }

  label {
    display: block;
  }

  input:not(:focus), label, select:not(:focus), option{
    cursor: pointer;
  }
</style>
