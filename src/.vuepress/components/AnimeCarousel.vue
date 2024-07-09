<template>
  <VaCarousel
    v-if="animes.length > 0"
    :items="animes"
    stateful
    autoscroll
    :autoscroll-interval="5000"
    infinite
  >
    <template #default="{ item }">
      <div class="va-carousel__slide">
        <div class="anime-item p-4">
          <img v-if="item.cover" :src="item.cover" :alt="item.title" class="anime-cover" />
          <div class="anime-details">
            <h3 class="anime-title">{{ item.categories.join(', ') }}</h3>
            <p class="anime-short-title">{{ item.shortTitle }}</p>
            <VaButton 
            round
            href="`/anime/${processCategory(item.categories)}/${item.slug}`" target="_blank" class="anime-post-button"
            >
            Tonton!
            </VaButton>
          </div>
        </div>
      </div>
    </template>
  </VaCarousel>
  <p v-else>Loading...</p>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { VaCarousel, VaButton } from 'vuestic-ui';

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
@import"https://fonts.googleapis.com/icon?family=Material+Icons";
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
  position-anchor: inherit;
  position: absolute;
  bottom: 10px;
  left: 10px;
  background: rgba(0, 0, 0, 0.210); /* Semi-transparent background */
  justify-content: center;
  border-radius: 8px;
  width: fit-content;
}

.anime-title {
  margin-bottom: 10px;
  font-size: 1.25rem;
  font-weight: bold;
  color: var(--vc-clr-white);
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;;
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
  color: var(--theme-color); /* Tailwind blue-800 */
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
