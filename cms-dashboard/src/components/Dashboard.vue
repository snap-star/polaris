<template>
    <div>
      <h2>Dashboard</h2>
      <button @click="logout">Logout</button>
      <PostEditor />
    </div>
  </template>
  
  <script>
  import { auth } from '../firebase';
  import PostEditor from './PostEditor.vue';
  
  export default {
    components: { PostEditor },
    methods: {
      async logout() {
        await auth.signOut();
        this.$router.push('/login');
      }
    }
  };
  </script>