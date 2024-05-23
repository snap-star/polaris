<template>
    <div class="anime-search-container">
      <form @submit.prevent="searchAnime">
        <input v-model="animeTitle" type="text" placeholder="Enter anime title" required />
        <button type="submit">Search</button>
      </form>
  
      <div v-if="animeData" class="anime-info">
        <h2>{{ animeData.title }}</h2>
        <table>
          <tr>
            <th>Status:</th>
            <td>{{ animeData.status }}</td>
          </tr>
          <tr>
            <th>Release Date:</th>
            <td>{{ animeData.releaseDate }}</td>
          </tr>
          <tr>
            <th>Type:</th>
            <td>{{ animeData.type }}</td>
          </tr>
          <tr>
            <th>Total Episodes:</th>
            <td>{{ animeData.totalEpisodes }}</td>
          </tr>
          <tr>
            <th>Uploaded:</th>
            <td>{{ animeData.uploadedDate }}</td>
          </tr>
          <tr>
            <th>Last Update:</th>
            <td>{{ animeData.lastUpdated }}</td>
          </tr>
          <tr>
            <th>Tags:</th>
            <td>{{ animeData.tags }}</td>
          </tr>
        </table>
        <div class="synopsis">
          <h3>Synopsis</h3>
          <p>{{ animeData.synopsis }}</p>
        </div>
        <div class="characters">
          <h3>Characters and Voice Actors</h3>
          <ul>
            <li v-for="char in animeData.characters" :key="char.name">
              {{ char.name }} - {{ char.role }} (VA: {{ char.voiceActor }})
            </li>
          </ul>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue';
  import { fetchAnimeSearch } from '../utils/fetchAnimeSearch.js';
  
  export default {
    name: 'AnimeSearch',
    setup() {
      const animeTitle = ref('');
      const animeData = ref(null);
  
      const searchAnime = async () => {
        animeData.value = await fetchAnimeSearch(animeTitle.value);
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
    gap: 8px;
    margin-bottom: 16px;
  }
  
  input {
    flex-grow: 1;
    padding: 8px;
  }
  
  button {
    padding: 8px 16px;
  }
  
  .anime-info {
    margin-top: 16px;
  }
  
  .anime-info table {
    width: 100%;
    border-collapse: collapse;
    margin-bottom: 16px;
  }
  
  .anime-info th, .anime-info td {
    padding: 8px;
    border: 1px solid #ccc;
    text-align: left;
  }
  
  .synopsis, .characters {
    margin-top: 16px;
  }
  
  .characters ul {
    list-style: none;
    padding: 0;
  }
  
  .characters li {
    margin-bottom: 8px;
  }
  </style>
  