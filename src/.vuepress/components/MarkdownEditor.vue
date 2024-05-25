<template>
  <div>
    <h1>Edit Markdown</h1>
    <textarea v-model="content" @input="updatePreview"></textarea>
    <div v-html="preview"></div>
    <router-link to="/cms">Back to CMS</router-link>
  </div>
</template>

<script>
import axios from 'axios';
import MarkdownIt from 'markdown-it';

export default {
  data() {
    return {
      content: '',
      preview: '',
      md: new MarkdownIt(),
    };
  },
  methods: {
    async loadContent() {
      const { filename } = this.$route.params;
      const response = await axios.get(`/api/page/${filename}`);
      this.content = response.data.content;
      this.updatePreview();
    },
    async saveContent() {
      const { filename } = this.$route.params;
      await axios.put(`/api/page/${filename}`, {
        content: this.content,
      });
    },
    updatePreview() {
      this.preview = this.md.render(this.content);
    },
  },
  mounted() {
    this.loadContent();
  },
  beforeRouteUpdate(to, from, next) {
    this.loadContent();
    next();
  },
};
</script>