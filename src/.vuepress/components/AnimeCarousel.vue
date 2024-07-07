<template>
  <va-carousel
    class="custom-carousel"
    :autoplay="5000"
    :items-to-show="1"
    :items-to-scroll="1"
    infinite
    fade
  >
    <template v-for="anime in animes.slice(0, 5)">
      <div _key: ((anime.title)) class="va-carousel__slide">
        <div class="anime-item p-4">
          <img v-if="anime.cover" :src="anime.cover" :alt="anime.title" class="anime-cover" />
          <div class="anime-details">
            <h3 class="anime-title">{{ anime.categories.join(', ') }}</h3>
            <p class="anime-short-title">{{ anime.shortTitle }}</p>
            <a :href="`/anime/${processCategory(anime.categories)}/${anime.slug}`" target="_blank" class="anime-post-button">Tonton!</a>
          </div>
        </div>
      </div>
    </template>
  </va-carousel>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { VaCarousel } from 'vuestic-ui';
import 'vuestic-ui/css';

const animes = ref([]);

const fetchAnimes = async () => {
  try {
    const response = await fetch('/anime.json');
    if (!response.ok) throw new Error('Network response was not ok');
    const data = await response.json();
    animes.value = shuffleArray(data).slice(0, 10);
  } catch (error) {
    console.error('Error fetching anime data:', error);
  }
};

onMounted(fetchAnimes);

const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

const processCategory = (categories) => {
  return categories.map(category => category.replace(/[^a-z0-9]/gi, "_").toLowerCase()).join(",");
};
</script>

<style scoped>
.custom-carousel {
  --vc-clr-primary: #1d4ed8; /* Tailwind blue-800 */
  --vc-clr-white: #ffffff;
}

.anime-item {
  text-align: center;
  background-color: var(--theme-color);
  color: var(--vc-clr-white);
  border-radius: 8px;
  overflow: hidden;
  padding: 0;
}

.anime-cover {
  width: 900px;
  height: 400px; /* Update height for the banner */
  object-fit: cover; /* Crop the image to fit the container */
  border-radius: 8px; /* Optional: add rounded corners to the image */
  pointer-events: none;
}

.anime-details {
  padding: 10px;
  position: absolute;
  bottom: 10px;
  left: 10px;
  background: rgba(0, 0, 0, 0.5); /* Semi-transparent background */
  border-radius: 8px;
  width: calc(100% - 20px);
}

.anime-title {
  margin-bottom: 10px;
  font-size: 1.25rem;
  font-weight: bold;
  color: var(--vc-clr-white);
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}

.anime-short-title {
  margin-bottom: 10px;
  font-size: 0.875rem;
  color: var(--vc-clr-white);
}

.anime-post-button {
  display: inline-block;
  margin-top: 10px;
  padding: 5px 10px;
  background-color: #ffffff;
  color: var(--theme-color); /* Tailwind blue-800 */
  border-radius: 5px;
  text-decoration: none;
  font-weight: bold;
  transition: background-color 0.3s ease;
}

.anime-post-button:hover {
  background-color: #e2e8f0; /* Tailwind gray-200 */
}

@media (max-width: 768px) {
  .anime-cover {
    height: 200px; /* Adjust height for smaller screens */
  }
}
</style>
