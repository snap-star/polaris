<template>
  <div class="anime-gallery-container">
    <div class="anime-gallery">
      <div class="anime-card" v-for="anime in animeList" :key="anime.id">
        <router-link :to="anime.link">
          <img :src="anime.coverImage" alt="Anime cover image" class="anime-cover"/>
        </router-link>
        <badge type="warning" class="episode-badge">{{ anime.episode }} Ep 1</badge>
        <div class="anime-details">
          <router-link :to="anime.link">
            <h3 class="anime-title">{{ anime.title }}</h3>
          </router-link>
        </div>
      </div>
    </div>
    <div class="pagination-controls">
      <button @click="previousPage" :disabled="page === 1">Previous</button>
      <span>Page {{ page }}</span>
      <button @click="nextPage">Next</button>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, watch } from 'vue';
import { fetchAnimeData } from '../utils/fetchAnimeData';

export default {
  name: 'AnimeGallery',
  setup() {
    const animeList = ref([]);
    const page = ref(1);
    const perPage = 10; // Number of items per page

    const fetchData = async () => {
      animeList.value = await fetchAnimeData(page.value, perPage);
    };

    onMounted(fetchData);

    watch(page, fetchData);

    const nextPage = () => {
      page.value += 1;
    };

    const previousPage = () => {
      if (page.value > 1) {
        page.value -= 1;
      }
    };

    return {
      animeList,
      page,
      nextPage,
      previousPage,
    };
  },
};
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
  border: 2px solid #42b983;
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
  color: white;
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
  color: #fafafa;
  text-align: center;
}

.episode-badge {
  position: absolute;
  top: 8px;
  right: 8px;
  display: inline-block;
  padding: 2px 4px;
  background-color: #036ffc;
  color: #fff;
  border-radius: 4px;
  z-index: 10;
  font-size: small;
}

.pagination-controls {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 16px;
}

.pagination-controls button {
  margin: 0 8px;
  padding: 8px 16px;
  background-color: #42b983;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.pagination-controls button:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}

.pagination-controls span {
  margin: 0 8px;
}

@container (width > 400px) {
  h2 {
    font-size: 1.5em;
  }
}
/* with an optional <container-name> */
@container tall (height > 30rem) {
  h2 {
    line-height: 1.6;
  }
}


/* Media Queries for Responsiveness */
@media (max-width: 768px) {
  .anime-gallery {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>
