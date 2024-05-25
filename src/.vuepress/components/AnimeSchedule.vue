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
              <h3 class="anime-title">{{ anime.title }}</h3>
            </router-link>
            <span class="next-episode-badge">{{ formatDateTime(anime.nextScheduleDate) }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { fetchAnimeData } from '../utils/fetchScheduledAnimeData';

export default {
  name: 'AnimeScheduled',
  setup() {
    const animeList = ref({});

    const fetchData = async () => {
      const data = await fetchAnimeData();
      animeList.value = groupByDay(data);
    };

    onMounted(fetchData);

    const groupByDay = (animeList) => {
      const days = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];
      const grouped = days.reduce((acc, day) => ({ ...acc, [day]: [] }), {});
      animeList.forEach(anime => {
        const day = days[new Date(anime.nextScheduleDate).getDay()];
        grouped[day].push(anime);
      });
      return grouped;
    };

    const formatDateTime = (dateTime) => {
      const date = new Date(dateTime);
      return `${date.toLocaleDateString()} ${date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`;
    };

    return {
      animeList,
      formatDateTime
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
  border: 2px solid var(--theme-color);
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
  color: var(--theme-color);
}

.anime-title {
  margin: 0;
  font-size: 1rem;
  text-align: center;
  color: white;
}

.next-episode-badge {
  margin-top: 8px;
  padding: 4px 8px;
  background-color: goldenrod;
  color: #fff;
  font-size: 0.875rem;
  border-radius: 4px;
  display: inline-block;
  text-align: center;
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
