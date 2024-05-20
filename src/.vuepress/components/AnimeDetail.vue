<template>
    <div class="anime-detail">
      <div class="video-wrapper" v-if="videoUrl">
        <iframe
          :src="videoUrl"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; fullscreen; picture-in-picture" scrolling="no" seamless="" sandbox="allow-same-origin allow-scripts"
        ></iframe>
      </div>
      <div class="anime-content">
        <h1>{{ title }}</h1>
        <div v-html="content"></div>
      </div>
    </div>
  </template>
  
  <script>
  import { ref, onMounted } from 'vue';
  import { useRoute } from 'vue-router';
  import { usePageData } from '@vuepress/client';
  
  export default {
    setup() {
      const route = useRoute();
      const pageData = usePageData();
  
      const title = ref('');
      const content = ref('');
      const videoUrl = ref('');
  
      onMounted(() => {
        const page = pageData.value.pages.find(p => p.path === route.path);
        if (page) {
          title.value = page.frontmatter.title;
          content.value = page.contentRendered;
          videoUrl.value = page.frontmatter.videoUrl;
        }
      });
  
      return {
        title,
        content,
        videoUrl,
      };
    },
  };
  </script>
  
  <style>
  .anime-detail {
    max-width: 800px;
    margin: 0 auto;
    padding: 2rem;
  }
  
  .video-wrapper {
    position: relative;
    padding-bottom: 56.25%; /* 16:9 */
    height: 0;
    margin-bottom: 2rem;
  }
  
  .video-wrapper iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 0;
  }
  
  .anime-content h1 {
    font-size: 2rem;
    margin-bottom: 1rem;
  }
  
  .anime-content {
    font-size: 1rem;
    line-height: 1.6;
  }
  </style>
  