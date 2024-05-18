<template>
    <div>
      <h1>WordPress Posts</h1>
      <div v-if="posts.length">
        <div v-for="post in posts" :key="post.id" class="post">
          <h2>{{ post.title.rendered }}</h2>
          <div v-html="renderMarkdown(post.content.rendered)"></div>
        </div>
      </div>
      <p v-else>Loading posts...</p>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  import MarkdownIt from 'markdown-it';
  
  export default {
    data() {
      return {
        posts: [],
        md: new MarkdownIt(),
        html: true,  // Enable HTML tags in source
      };
    },
    mounted() {
      axios.get('https://ayanime.me/wp-json/wp/v2/posts')
        .then(response => {
          this.posts = response.data;
        })
        .catch(error => {
          console.error('There was an error fetching the posts!', error);
        });
    },
    methods: {
      renderMarkdown(content) {
        return this.md.render(content);
      },
    },
  };
  </script>
  
  <style>
  .post {
    margin-bottom: 2em;
  }
  .post h2 {
    color: #2c3e50;
  }
  </style>
  