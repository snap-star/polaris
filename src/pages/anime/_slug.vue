<template>
    <div class="anime-detail">
      <div v-if="anime">
        <img :src="anime.coverImage" alt="Anime cover image" class="anime-cover"/>
        <h1>{{ anime.title }}</h1>
        <p v-html="anime.description"></p>
      </div>
      <div v-else>
        <p>Loading...</p>
      </div>
    </div>
  </template>
  
  <script>
  import { ref, onMounted } from 'vue';
  import { useRoute } from 'vue-router';
  import { fetchAnimeData } from '../utils/fetchAnimeData';
  
  export default {
    name: 'AnimeDetail',
    setup() {
      const route = useRoute();
      const anime = ref(null);
  
      onMounted(async () => {
        const animeList = await fetchAnimeData();
        anime.value = animeList.find(a => a.link === `/anime/${route.params.slug}`);
      });
  
      return {
        anime,
      };
    },
  };
  </script>
  
  <style scoped>
  .anime-detail {
    padding: 16px;
  }
  
  .anime-cover {
    width: 100%;
    max-width: 400px;
    margin: 0 auto 16px;
    display: block;
  }
  
  h1 {
    font-size: 2rem;
    margin: 16px 0;
  }
  
  p {
    color: #555;
  }
  </style>
  