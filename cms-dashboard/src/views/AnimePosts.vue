<template>
    <div>
      <h2>Anime Posts</h2>
      <div v-for="post in posts" :key="post.id">
        <h3>{{ post.title }}</h3>
        <p>{{ post.content }}</p>
      </div>
    </div>
  </template>
  
  <script>
  import { db } from '../firebase';
  
  export default {
    data() {
      return {
        posts: []
      };
    },
    async created() {
      const snapshot = await db.collection('posts').get();
      this.posts = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    }
  };
  </script>
  