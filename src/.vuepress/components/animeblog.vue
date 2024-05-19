<!-- .vuepress/components/CustomHome.vue -->
<template>
    <div class="animeblog">
      <div class="hero">
        <img src="#" alt="Hero Image" />
        <h1>Welcome to My Site</h1>
        <p>This is a custom tagline</p>
        <div class="actions">
          <router-link to="/wordpress/" class="button">Link Start!</router-link>
          <router-link to="#" class="button">Learn More</router-link>
        </div>
      </div>
      <div class="features">
        <div class="feature" v-for="feature in features" :key="feature.title">
          <h2>{{ feature.title }}</h2>
          <p>{{ feature.details }}</p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        features: [
          { title: "Feature 1", details: "Description of feature 1." },
          { title: "Feature 2", details: "Description of feature 2." },
          { title: "Feature 3", details: "Description of feature 3." },
        ],
      };
    },
  };
  </script>
  
  <style>
  .animeblog .hero {
    text-align: center;
    padding: 2rem 0;
  }
  .animeblog .hero img {
    max-width: 100%;
    height: auto;
  }
  .animeblog .hero h1 {
    font-size: 2.5rem;
    margin: 1rem 0;
  }
  .animeblog .hero p {
    font-size: 1.25rem;
    color: #555;
  }
  .animeblog .actions {
    margin-top: 1.5rem;
  }
  .animeblog .actions .button {
    margin: 0 0.5rem;
    padding: 0.75rem 1.5rem;
    border-radius: 5px;
    text-decoration: none;
    color: #fff;
    background-color: #007bff;
  }
  .animeblog .features {
    display: flex;
    justify-content: space-around;
    margin-top: 2rem;
  }
  .animeblog .features .feature {
    flex: 1;
    padding: 1rem;
    text-align: center;
  }
  </style>
  