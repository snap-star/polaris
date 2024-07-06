<template>
    <carousel :autoplay="true" :per-page="1" :loop="true">
      <slide v-for="(anime, index) in randomAnimes" :key="index">
        <img :src="anime.cover" :alt="anime.title" />
        <h3>{{ anime.title }}</h3>
        <p>{{ anime.shortTitle }}</p>
      </slide>
    </carousel>
  </template>
  
  <script>
  import { Carousel, Slide } from 'vue-carousel';
  import animes from '../anime.json'; // Import JSON file which contains anime data
  
  export default {
    components: {
      Carousel,
      Slide
    },
    data() {
      return {
        randomAnimes: []
      };
    },
    created() {
      this.getRandomAnimes();
    },
    methods: {
      getRandomAnimes() {
        // Shuffle array and get 5 random animes
        this.randomAnimes = animes.sort(() => 0.5 - Math.random()).slice(0, 5);
      }
    }
  };
  </script>
  
  <style scoped>
  img {
    width: 100%;
    height: auto;
  }
  h3, p {
    text-align: center;
  }
  </style>
  