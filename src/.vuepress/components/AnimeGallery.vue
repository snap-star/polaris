<!-- .vuepress/components/AnimeGallery.vue -->
<template>
    <div class="anime-gallery">
      <h1>Anime Gallery</h1>
      <div class="gallery-grid" v-if="posts.length">
        <div v-for="post in posts" :key="post.id" class="gallery-item">
          <img :src="getFeaturedImage(post)" alt="Anime Cover" class="gallery-cover" />
          <h2 class="gallery-title">{{ post.title.rendered }}</h2>
        </div>
      </div>
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
      axios.get('https://ayanime.me/wp-json/wp/v2/posts?_embed')
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
  .anime-gallery {
    padding: 2rem;
    text-align: center;
  }
  
  .gallery-grid {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 16px;
  }
  
  .gallery-item {
    border: 1px solid #ddd;
    padding: 16px;
    text-align: center;
  }
  
  .gallery-cover {
    width: 100%;
    height: auto;
  }
  
  .gallery-title {
    margin-top: 8px;
    font-size: 1.2em;
    color: #333;
  }
  </style>
  