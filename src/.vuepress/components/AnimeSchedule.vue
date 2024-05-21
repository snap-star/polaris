<template>
  <div class="anime-schedule">
    <div class="anime-card" v-for="anime in animeList" :key="anime.id">
      <img :src="anime.coverImage" alt="Anime cover image" class="anime-cover"/>
      <div class="anime-details">
        <h3>{{ anime.title }}</h3>
        <p v-html="anime.description"></p>
        <router-link :to="anime.link">Read More</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { fetchScheduledAnimeData } from '../utils/fetchScheduledAnimeData';
import { useDarkmode } from "vuepress-theme-hope/client";

export default {
  name: 'AnimeSchedule',
  setup() {
    const animeList = ref([]);

    onMounted(async () => {
      animeList.value = await fetchScheduledAnimeData();
    });

    return {
      animeList,
    };
  },
};
const { isDarkmode } = useDarkmode();

console.log(isDarkmode.value); // get darkmode status
</script>

<style scoped>
.anime-schedule {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 16px;
  padding: 16px;
}

.anime-card {
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
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
  color: #555;
}
</style>
