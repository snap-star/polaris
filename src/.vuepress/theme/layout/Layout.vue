<template>
    <div>
      <AnimeDetail v-if="isAnimeDetail" />
      <Content v-else />
    </div>
  </template>
  
  <script>
  import { computed } from 'vue';
  import { useRoute } from 'vue-router';
  import { usePageFrontmatter } from '@vuepress/client';
  import AnimeDetail from '../templates/AnimeDetail.vue';
  
  export default {
    components: {
      AnimeDetail,
    },
    setup() {
      const route = useRoute();
      const frontmatter = usePageFrontmatter();
  
      const isAnimeDetail = computed(() => !!frontmatter.value.videoUrl);
  
      return {
        isAnimeDetail,
      };
    },
  };
  </script>
  