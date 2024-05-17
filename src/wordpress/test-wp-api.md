---
title: Using VuePress and fetch wp-post
---

<template>
  <div>
    <h1>{{ title }}</h1>
    <div v-html="content"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: '',
      content: ''
    };
  },
  async created() {
    const response = await this.$axios.get('posts?slug=kono-subarashii-sekai-ni-shukufuku-wo-season-3-episode-6-sub-indo');
    const post = response.data[0];
    this.title = post.title.rendered;
    this.content = post.content.rendered;
  }
}
</script>
