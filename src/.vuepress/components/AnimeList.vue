<template>
  <div class="anime-gallery-container">
    <div class="anime-gallery">
      <div class="anime-card" v-for="anime in animeList" :key="anime.title">
        <router-link :to="anime.link">
          <img :src="anime.coverImage" alt="Anime cover image" class="anime-cover"/>
        </router-link>
        <div class="anime-details">
          <router-link :to="anime.link">
            <h3 class="anime-title">{{ anime.title }}</h3>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

// Fungsi untuk memuat semua file markdown di dalam folder /anime
const loadAnimeFiles = () => {
  const context = require.context('../../anime', false, /\.md$/)
  return context.keys().map((key) => {
    const title = key.match(/\.\/(.+)\.md$/)[1]
    return {
      title,
      coverImage: `/anime/${title}/cover.jpg`,
      link: `/anime/${title}`,
    }
  })
}

const animeList = ref([])

onMounted(() => {
  animeList.value = loadAnimeFiles()
})
</script>

<style scoped>
.anime-gallery-container {
  padding: auto;
}

.anime-gallery {
  display: grid;
  grid-template-columns: repeat(5, auto);
  gap: 16px;
}

.anime-card {
  position: relative;
  border-radius: 8px;
  overflow: hidden;
  transition: transform 0.3s, border 0.3s;
  border: 2px solid transparent;
}

.anime-card:hover {
  transform: scale(1.05);
  border: 2px solid var(--theme-color);
}

.anime-cover {
  width: 100%;
  height: auto;
  display: block;
}

.anime-details {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.6);
  color: var(--theme-color);
  padding: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s;
}

.anime-card:hover .anime-details {
  opacity: 1;
}

.anime-title {
  margin: 0;
  font-size: 1rem;
  color: whitesmoke;
  text-align: center;
}

@media (max-width: 768px) {
  .anime-gallery {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>
