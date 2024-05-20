<template>
  <AnimeLayout>
    <div>
      <h1>{{ frontmatter.title }}</h1>
      <iframe :src="frontmatter.video_url" width="100%" height="500px"></iframe>
      <div v-html="content"></div>
    </div>
  </AnimeLayout>
</template>

<script>
import { defineComponent } from 'vue';
import AnimeLayout from '../layouts/AnimeLayout.vue';

export default defineComponent({
  name: 'AnimeDetail',
  components: {
    AnimeLayout,
  },
  props: {
    frontmatter: {
      type: Object,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    console.log('Frontmatter:', props.frontmatter);
    console.log('Content:', props.content);
  },
});
</script>

<style scoped>
/* Add your styles here */
</style>
