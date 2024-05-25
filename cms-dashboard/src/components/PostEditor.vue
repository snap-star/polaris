<template>
    <div>
      <h2>Create New Post</h2>
      <form @submit.prevent="createPost">
        <input type="text" v-model="title" placeholder="Title" required />
        <textarea v-model="content" placeholder="Content" required></textarea>
        <button type="submit">Create Post</button>
      </form>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  import { db } from '../firebase';
  
  export default defineComponent({
    data() {
      return {
        title: '',
        content: ''
      };
    },
    methods: {
      async createPost() {
        try {
          await db.collection('posts').add({
            title: this.title,
            content: this.content,
            createdAt: new Date()
          });
          this.title = '';
          this.content = '';
        } catch (error) {
          console.error("Error creating post:", error);
        }
      }
    }
  });
  </script>
  
  <style scoped>
  /* Add any styles you need here */
  </style>
  