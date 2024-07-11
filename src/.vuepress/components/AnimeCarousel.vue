<template>
  <VaCarousel
    v-if="animes.length > 0"
    :items="animes"
    stateful
    autoscroll
    :autoscroll-interval="5000"
    infinite
    class="custom-carousel"
  >
    <template #default="{ item }">
      <div class="va-carousel__slide">
        <div class="anime-item">
          <img v-if="item.cover" :src="item.cover" :alt="item.title" class="anime-cover" />
          <div class="anime-details">
            <h3 class="anime-title">{{ item.categories.join(', ') }}</h3>
            <p class="anime-short-title">{{ item.shortTitle }}</p>
            <VaButton 
              round
              :href="`/anime/${processCategory(item.categories)}/${item.slug}`"
              target="_blank"
              class="anime-post-button"
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
@import "https://fonts.googleapis.com/icon?family=Material+Icons";

.custom-carousel {
  --vc-clr-primary: #1d4ed8; /* Tailwind blue-800 */
  --vc-clr-white: #ffffff;
}

.anime-item {
  position: relative;
  color: var(--vc-clr-white);
  border-radius: 8px;
  overflow: hidden;
  text-overflow: clip;
}

.anime-cover {
  width: 100%;
  height: 100%;
  object-fit: cover;
  pointer-events: none;
}

.anime-details {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: rgba(0, 0, 0, 0.1); /* Semi-transparent background */
  border-radius: 8px;
  width: calc(100% - 20px);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
}

.anime-title {
  margin-bottom: 10px;
  font-size: 1.25rem;
  font-weight: bold;
  color: var(--vc-clr-white);
}

.anime-short-title {
  margin-bottom: 10px;
  font-size: 0.875rem;
  color: var(--vc-clr-white);
}

.anime-post-button {
  position: absolute;
  bottom: 10px;
  right: 10px;
  color: var(--vc-clr-white);
  background-color: var(--vc-clr-primary);
}

.anime-post-button:hover {
  background-color: #2563eb; /* Tailwind blue-700 */
}

@media (max-width: 768px) {
  .anime-cover {
    height: 200px; /* Adjust height for smaller screens */
  }
}
</style>
