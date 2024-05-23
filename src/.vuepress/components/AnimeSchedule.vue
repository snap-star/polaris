<template>
  <div class="anime-scheduled-container">
    <div v-for="(animes, day) in animeList" :key="day" class="day-group">
      <h2 class="day-title">{{ day }}</h2>
      <div class="anime-scheduled">
        <div class="anime-card" v-for="anime in animes" :key="anime.id">
          <router-link :to="anime.link" class="anime-cover-link">
            <img :src="anime.coverImage" alt="Anime cover image" class="anime-cover"/>
          </router-link>
          <div class="anime-details">
            <router-link :to="anime.link" class="anime-title-link">
              <h3 class="anime-title">{{ anime.category }}</h3>
            </router-link>
            <span class="next-episode-badge">{{ anime.nextScheduleDate }}</span>
          </div>
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
import { fetchAnimeData } from '../utils/fetchScheduledAnimeData';

export default {
  name: 'AnimeScheduled',
  setup() {
    const animeList = ref({});
    const page = ref(1);
    const perPage = 10; // Number of items per page

    const fetchData = async () => {
      animeList.value = await fetchAnimeData(page.value - 1, perPage);
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
.anime-scheduled-container {
  padding: 16px;
}

.day-group {
  margin-bottom: 32px;
}

.day-title {
  margin-bottom: 16px;
  font-size: 1.5rem;
  color: #333;
}

.anime-scheduled {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
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

.anime-cover-link {
  display: block;
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
}

.anime-title-link {
  width: 100%;
  text-align: center;
}

.anime-title {
  margin: 0;
  font-size: 1rem;
  text-align: center;
}

.next-episode-badge {
  margin-top: 8px;
  padding: 4px 8px;
  background-color: #007BFF;
  color: #fff;
  font-size: 0.875rem;
  border-radius: 4px;
  display: inline-block;
  text-align: center;
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

/* Media Queries for Responsiveness */
@media (max-width: 768px) {
  .anime-scheduled {
    grid-template-columns: repeat(2, 1fr);
  }

  .anime-title {
    font-size: 0.875rem;
  }
}
</style>
