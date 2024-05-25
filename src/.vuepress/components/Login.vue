<template>
    <div>
      <input v-model="username" placeholder="Username" />
      <input v-model="password" type="password" placeholder="Password" />
      <button @click="login">Login</button>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        username: 'admin',
        password: 'admin',
      };
    },
    methods: {
      async login() {
        const response = await axios.post('http://localhost:3000/api/login', {
          username: this.username,
          password: this.password,
        });
        localStorage.setItem('token', response.data.token);
        this.$store.dispatch('login');
        this.$router.push('/dashboard');
      },
    },
  };
  </script>