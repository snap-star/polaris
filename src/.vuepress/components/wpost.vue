<template>
  <div>
    <h1>WordPress Posts</h1>
    <div class="posts-grid" v-if="posts.length">
      <div v-for="post in posts" :key="post.id" class="post-item">
        <img :src="getFeaturedImage(post)" alt="Post cover" class="post-cover" />
        <h2 class="post-title">{{ post.title.rendered }}</h2>
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
      axios.get('https://ayanime.me/wp-json/wp/v2/posts?_embeds')
        .then(response => {
          this.posts = response.data;
        })
        .catch(error => {
          console.error('There was an error fetching the posts!', error);
        });
    },
    methods: {
    getFeaturedImage(post) {
      if (post._embedded && post._embedded['wp:featuredmedia'] && post._embedded['wp:featuredmedia'][0]) {
        return post._embedded['wp:featuredmedia'][0].source_url;
      }
      return 'default-image-url'; // Ganti dengan URL gambar default jika tidak ada featured image
    },
  },
};
</script>
  
  <style>
.posts-grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 16px;
}
.post-item {
  border: 1px solid #ddd;
  padding: 16px;
  text-align: center;
}
.post-cover {
  width: 100%;
  height: auto;
}
.post-title {
  margin-top: 8px;
  font-size: 1.2em;
  color: #333;
}
</style>
  