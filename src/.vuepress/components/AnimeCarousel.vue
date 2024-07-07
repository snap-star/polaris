<template>
  <Carousel class="custom-carousel" :itemsToShow="1" :itemsToScroll="1" :loop="true" :autoplay="5000" :wrap-around="true">
    <Slide v-for="anime in animes.slice(0, 5)" :key="anime.title">
      <div class="anime-item p-4">
        <img v-if="anime.cover" :src="anime.cover" :alt="anime.title" class="anime-cover" />
        <div class="anime-details">
          <h3 class="anime-title">{{ anime.categories.join(', ') }}</h3>
          <p class="anime-short-title">{{ anime.shortTitle }}</p>
          <a :href="anime.slug" target="_blank" class="anime-post-button">Tonton!</a>
        </div>
      </div>
    </Slide>

    <template #addons>
      <Navigation />
      <Pagination />
    </template>
  </Carousel>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { Carousel, Slide, Navigation, Pagination } from 'vue3-carousel';
import 'vue3-carousel/dist/carousel.css';

const animes = ref([]);

const fetchAnimes = async () => {
  try {
    const response = await fetch('/anime.json');
    if (!response.ok) throw new Error('Network response was not ok');
    const data = await response.json();
    console.log('Fetched anime carousel data:', data);  // Debugging data
    animes.value = shuffleArray(data).slice(0, 10); // Ambil 10 item untuk memastikan ada cukup data untuk dipilih lima slide pertama
  } catch (error) {
    console.error('Error fetching carousel anime data:', error);
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
  height: 200px; /* Update height for the banner */
  object-fit: cover; /* Crop the image to fit the container */
  border-radius: 8px; /* Optional: add rounded corners to the image */
  pointer-events: none;
}

.carousel__item {
  min-height: 200px; /* Adjust height to match the banner size */
  width: 900px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--vc-clr-primary);
  color: var(--vc-clr-white);
  font-size: 20px;
  border-radius: 8px;
}

.carousel__prev,
.carousel__next {
  box-sizing: content-box;
  border: 5px solid var(--vc-clr-white);
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
  .carousel__item {
    min-height: 200px; /* Adjust height for smaller screens */
  }
}
</style>