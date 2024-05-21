<template>
    <div class="schedule-page">
      <h1>Schedule</h1>
      <ul>
        <li v-for="post in scheduledPosts" :key="post.title">
          <h2>{{ post.title }}</h2>
          <p>Scheduled Date: {{ post.scheduleDate }}</p>
          <router-link :to="post.path">Read More</router-link>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  import { ref, onMounted } from 'vue';
  
  export default {
    name: 'SchedulePage',
    setup() {
      const scheduledPosts = ref([]);
  
      onMounted(() => {
        const pages = import.meta.globEager('../**/*.md');
        const today = new Date();
        const sevenDaysLater = new Date(today);
        sevenDaysLater.setDate(today.getDate() + 7);
  
        scheduledPosts.value = Object.keys(pages)
          .map((key) => {
            const page = pages[key].frontmatter;
            const scheduleDate = new Date(page.scheduleDate);
            return {
              title: page.title,
              scheduleDate: page.scheduleDate,
              path: key.replace('../', '/').replace('.md', '.html'),
              isScheduled: scheduleDate >= today && scheduleDate <= sevenDaysLater,
            };
          })
          .filter((post) => post.isScheduled);
      });
  
      return {
        scheduledPosts,
      };
    },
  };
  </script>
  
  <style scoped>
  .schedule-page {
    max-width: 600px;
    margin: 0 auto;
    text-align: center;
  }
  
  .schedule-page ul {
    list-style-type: none;
    padding: 0;
  }
  
  .schedule-page li {
    margin: 20px 0;
  }
  
  .schedule-page h2 {
    margin: 0;
  }
  </style>
  