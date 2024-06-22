<template>
  <div class="anime-gallery-container">
    <div class="anime-gallery">
      <div class="anime-card" v-for="anime in animeList" :key="anime.id">
        <router-link :to="anime.link">
          <img
            :src="anime.coverImage"
            alt="Anime cover image"
            class="anime-cover"
          />
        </router-link>
        <span class="episode-badge">Episode {{ anime.episode }}</span>
        <span v-if="anime.eroHot" class="hot-badge">
          <i class="fas fa-fire"></i>
        </span>
        <span class="status-badge">{{ anime.eroStatus }}</span>
        <span class="type-badge">{{ anime.eroType }}</span>
        <div class="anime-details">
          <router-link :to="anime.link">
            <h3 class="anime-title">{{ `${JSON.parse(anime.category)}` }}</h3>
          </router-link>
        </div>
      </div>
    </div>
    <div class="pagination-controls">
      <button @click="previousPage" :disabled="!previousPageAvailable">
        Previous
      </button>
      <span>Page {{ page }}</span>
      <button @click="nextPage" :disabled="!pageInfo.hasNextPage">Next</button>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, watch, computed } from "vue";
import { fetchAnimeData } from "../utils/fetchAnimeData.js";

export default {
  name: "AnimeGallery",
  setup() {
    const animeList = ref([]);
    const pageInfo = ref({});
    const page = ref(1);
    const perPage = 10;
    const endCursor = ref(null);

    const fetchData = async () => {
      console.log(`Fetching data for page: ${page.value}`);
      const data = await fetchAnimeData(perPage, endCursor.value);
      animeList.value = data.animeList;
      pageInfo.value = data.pageInfo;
      console.log("Fetched data:", animeList.value);
    };

    onMounted(fetchData);
    watch(page, fetchData);

    const nextPage = () => {
      if (pageInfo.value.hasNextPage) {
        endCursor.value = pageInfo.value.endCursor;
        page.value += 1;
      }
    };

    const previousPage = () => {
      if (page.value > 1) {
        endCursor.value = null; // Implement a mechanism to get the previous cursor if available
        page.value -= 1;
      }
    };

    const previousPageAvailable = computed(() => page.value > 1);

    return {
      animeList,
      pageInfo,
      page,
      nextPage,
      previousPage,
      previousPageAvailable,
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
  transition:
    transform 0.3s,
    border 0.3s;
  border: 2px solid transparent;
  box-shadow: inset;
}

.anime-card:hover {
  transform: scale(1.05);
  border: 2px solid var(--theme-color);
}

.anime-cover {
  width: 100%;
  height: 100%;
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

.episode-badge {
  position: absolute;
  top: 8px;
  right: 8px;
  display: inline-block;
  padding: 2px 4px;
  background-color: var(--theme-color);
  color: #fff;
  border-radius: 4px;
  z-index: 10;
  font-size: small;
}

.hot-badge {
  position: absolute;
  top: 8px;
  left: 8px;
  background-color: red;
  color: white;
  padding: 2px 4px;
  border-radius: 4px;
  font-size: small;
}

.status-badge {
  position: absolute;
  bottom: 8px;
  left: 8px;
  background-color: #4DB6AC;
  color: whitesmoke;
  padding: 2px 4px;
  border-radius: 4px;
  font-size: small;
}

.type-badge {
  position: absolute;
  bottom: 8px;
  right: 8px;
  background-color: #29B6F6;
  color: white;
  padding: 2px 4px;
  border-radius: 4px;
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
  background-color: var(--theme-color);
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

/* Media Queries for Responsiveness */
@media (max-width: 768px) {
  .anime-gallery {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>
