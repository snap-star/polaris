<!-- .vuepress/components/GraphQLPosts.vue -->
<template>
    <div class="graphql-posts">
      <h1>Latest Release</h1>
      <div class="posts-grid" v-if="posts.length">
        <div v-for="post in posts" :key="post.id" class="post-item">
          <img :src="post.featuredImage.node.sourceUrl" alt="Post cover" class="post-cover" />
          <h2 class="post-title">{{ post.title }}</h2>
          <!--<p class="post-excerpt" v-html="post.excerpt"></p>-->
          <a :href="'anime'+post.uri" class="read-more">Read More</a>
        </div>
      </div>
      <p v-else>Loading posts...</p>
    </div>
  </template>
  
  <script>
  import { request, gql } from 'graphql-request';
  
  export default {
    data() {
      return {
        posts: [],
      };
    },
    async mounted() {
      const endpoint = 'https://ayanime.me/graphql';
      const query = gql`
        {
          posts {
            nodes {
              id
              title
              excerpt
              uri
              featuredImage {
                node {
                  sourceUrl
                }
              }
            }
          }
        }
      `;
  
      try {
        const data = await request(endpoint, query);
        this.posts = data.posts.nodes;
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    },
  };
  </script>
  
  <style>
  .graphql-posts {
    padding: 2rem;
    text-align: center;
  }
  
  .posts-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 18px;
  }
  
  .post-item {
    border: 1px solid #ddd;
    padding: 16px;
    text-align: left;
  }
  
  .post-cover {
    width: 100%;
    height: auto;
  }
  
  .post-title {
    margin-top: 8px;
    font-size: 1em;
    color: #333;
  }
  
  /*.post-excerpt {
    margin-top: 8px;
    color: #666;
  }*/
  
  .read-more {
    display: inline-block;
    margin-top: 12px;
    padding: 8px 16px;
    background-color: #779dff;
    color: white;
    text-decoration: none;
    border-radius: 4px;
  }
  </style>
  