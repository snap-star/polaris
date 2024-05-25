<template>
    <div>
      <h1>CMS</h1>
      <ul>
        <li v-for="page in pages" :key="page">
          <router-link :to="`/cms/${page}`">{{ page }}</router-link>
        </li>
      </ul>
      <router-view></router-view>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        pages: [],
      };
    },
    async mounted() {
      const response = await axios.get('/api/pages');
      this.pages = response.data;
    },
  };
  </script>