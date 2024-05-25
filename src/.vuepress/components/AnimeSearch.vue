<template>
  <div class="anime-search-container">
    <form @submit.prevent="searchAnime">
      <label for="anime-title">Enter anime title:</label>
      <input id="anime-title" v-model="animeTitle" type="text" required />
      <button type="submit">Search</button>
    </form>

    <anime-info v-if="animeData" :anime="animeData" />
  </div>
</template>

<script>
import { ref } from 'vue';
import { search } from 'mal-scraper';
import AnimeInfo from './AnimeInfo.vue';

export default {
  name: 'AnimeSearch',
  components: {
    AnimeInfo,
  },
  setup() {
    const animeTitle = ref('');
    const animeData = ref(null);

    const searchAnime = async () => {
      if (!animeTitle.value) return;
      try {
        const results = await search('anime', {
          term: animeTitle.value,
          maxResults: 1,
        });
        if (results.length > 0) {
          animeData.value = results[0];
        } else {
          animeData.value = null;
        }
      } catch (error) {
        console.error(error);
        animeData.value = null;
      }
    };

    return {
      animeTitle,
      animeData,
      searchAnime,
    };
  },
};
</script>

<style scoped>
.anime-search-container {
  padding: 16px;
  max-width: 800px;
  margin: 0 auto;
}

form {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

label {
  font-weight: bold;
}

input {
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

button {
  padding: 8px 16px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.anime-info {
  margin-top: 16px;
  padding: 16px;
  background-color: #f8f9fa;
  border: 1px solid #ddd;
  border-radius: 4px;
}

@media (max-width: 600px) {
  .anime-search-container {
    padding: 8px;
  }
}
</style>