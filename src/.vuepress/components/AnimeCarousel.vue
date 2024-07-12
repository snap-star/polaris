<template>
  <div>
    <el-carousel
      v-if="animes.length > 0"
      height="300px"
      :autoplay="true"
      :pause-on-hover="true"
    >
      <el-carousel-item v-for="item in animes" :key="item.slug" arrow="hover">
        <div class="anime-item">
          <img v-if="item.cover" :src="item.cover" :alt="item.title" class="anime-cover" />
          <div class="anime-details">
            <h3 class="anime-title">{{ item.categories.join(', ') }}</h3>
            <el-button
            type="primary"
            plain
            size="small"
            :dark="true"
              >
            <p class="anime-short-title">{{ item.shortTitle }}</p>
            </el-button>
            <el-button
              type="primary"
              size="large"
              tag="a"
              :href="`/anime/${processCategory(item.categories)}/${item.slug}`"
              target="_blank"
              class="anime-post-button"
              icon="VideoPlay"
            >
              Tonton!
            </el-button>
          </div>
        </div>
      </el-carousel-item>
    </el-carousel>
    <p v-else>Loading...</p>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { ElCarousel, ElCarouselItem, ElButton } from 'element-plus';
import 'element-plus/dist/index.css'

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
.anime-item {
  text-align: center;
  position: relative;
}

.anime-cover {
  width: 100%;
  height: 400px;
  object-fit: cover;
  pointer-events: none;
}

.anime-details {
  position: absolute;
  font-size: 1rem;
  bottom: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
}

.anime-title {
  margin: 0;
  font-size: 1.5rem;
  font-weight: bold;
}

.anime-short-title {
  margin: 0;
  align-items: center;
}

.anime-post-button {
  margin-top: 20px;
  background-color: #1d4ed8; /* Tailwind blue-800 */
  border-color: #1d4ed8; /* Tailwind blue-800 */
  color: white;
  font-weight: bold;
  transition: background-color 0.3s ease, transform 0.3s ease;
}

.anime-post-button:hover {
  background-color: #3b82f6; /* Tailwind blue-500 */
  transform: scale(1.05);
}

.anime-post-button:focus {
  outline: none;
  box-shadow: 0 0 0 4px rgba(59, 130, 246, 0.5); /* Tailwind blue-500 */
}

@media (max-width: 768px) {
  .anime-cover {
    height: 200px; /* Adjust height for smaller screens */
  }
}
</style>
