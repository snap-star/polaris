<template>
  <div>
    <h1>WordPress Posts</h1>
    <ul v-if="posts.length">
      <li v-for="post in posts" :key="post.id">
        <a :href="post.link" target="_blank">{{ post.title.rendered }}</a>
      </li>
    </ul>
    <p v-else>Loading posts...</p>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      posts: [],
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
};
</script>
