import { request, gql } from 'graphql-request';
import fs from 'fs-extra';
import path from 'path';

// Endpoint GraphQL WordPress Anda
const endpoint = 'https://ayanime.me/graphql';

// Query GraphQL untuk mengambil postingan
const query = gql`
  {
    posts {
      nodes {
        id
        title
        excerpt
        content
        date
        slug
        categories {
          nodes {
            name
          }
        }
        featuredImage {
          node {
            sourceUrl
          }
        }
      }
    }
  }
`;

// Fungsi untuk membuat file markdown
const createMarkdownFile = async (post) => {
  const categories = post.categories.nodes.map(category => category.name);
  const content = `---
title: ${post.title}
date: ${post.date}
slug: ${post.slug}
category: ${JSON.stringify(categories)}
cover: ${post.featuredImage ? post.featuredImage.node.sourceUrl : ''}
---

${post.content}
`;

  const filePath = path.join('anime', `${post.slug}.md`);
  await fs.outputFile(filePath, content);
  console.log(`Created: ${filePath}`);
};

// Fungsi utama untuk mengambil data dan membuat file markdown
const generateMarkdownFiles = async () => {
  try {
    const data = await request(endpoint, query);
    const posts = data.posts.nodes;

    for (const post of posts) {
      await createMarkdownFile(post);
    }

    console.log('All markdown files have been generated.');
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

generateMarkdownFiles();
