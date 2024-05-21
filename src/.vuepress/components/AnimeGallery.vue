<template>
  <div class="anime-gallery">
    <div class="anime-card" v-for="anime in animeList" :key="anime.id">
      <img :src="anime.coverImage" alt="Anime cover image" class="anime-cover"/>
      <div class="anime-details">
        <router-link :to="anime.link"><h3>{{ anime.title }}</h3></router-link>
        <!--<p v-html="anime.description"></p>-->
       <button><router-view >Play</router-view></button>
       <button><router-view :to="anime.categories">categories</router-view></button>
       <button><router-view :to="anime.episode">episode</router-view></button>
       <button><router-view :to="anime.series">series</router-view></button>
       <button><router-view :to="anime.subtitle">sub</router-view></button>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { fetchAnimeData } from '../utils/fetchAnimeData';

export default {
  name: 'AnimeGallery',
  setup() {
    const animeList = ref([]);

    onMounted(async () => {
      animeList.value = await fetchAnimeData();
    });

    return {
      animeList,
    };
  },
};
</script>

<style scoped>
.anime-gallery {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 16px;
  padding: 16px;
}

.anime-card {
  background: #fafafa;
  border-radius: 8px;
  box-shadow: 0 6px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
}

.anime-cover {
  width: 100%;
  height: auto;
}

.anime-details {
  padding: 16px;
}

.anime-details h3 {
  margin: 0;
  font-size: 1.25rem;
  line-height: 1.5;
}

.anime-details p {
  margin: 8px 0;
  color: currentColor;
}

.button {
  padding: 2.5px;
  appearance: primary;
  margin: 1rem;
  position: absolute;
  align-items: flex-start;
  font-size: 1rem;
  color: mediumspringgreen;
}
</style>
