import { request, gql } from 'graphql-request';
import fs from 'fs-extra';
import path from 'path';

// Endpoint GraphQL WordPress
const endpoint = 'https://ayanime.me/graphql';

// Query GraphQL untuk mengambil postingan
const query = gql`
query iframe {
  posts(
    where: {metaQuery: {metaArray: [{type: CHAR, key: "ab_embedgroup", value: "ayadrive", compare: LIKE}, {type: CHAR, key: "ab_embedgroup", value: "ayaplay", compare: LIKE}], relation: AND}}
  ) {
    edges {
      node {
        id
        title
        date
        categories {
          edges {
            node {
              id
              name
            }
          }
        }
        terms {
          nodes {
            name
          }
        }
        slug
        featuredImage {
          node {
            id
            sourceUrl
          }
        }
        abEmbedgroup
        abHostname
        abEmbed
      }
    }
  }
}
`;

// Fungsi untuk membuat file markdown dari data post
async function createMarkdownFile(post) {
  const categories = post.categories.edges.map(edge => edge.node.name);
  const terms = post.terms.nodes.map(term => term.name);

  // Convert abHostname and abEmbed to strings if they are arrays
  const abHostname = Array.isArray(post.abHostname) ? JSON.stringify(post.abHostname) : post.abHostname;
  const abEmbed = Array.isArray(post.abEmbed) ? JSON.stringify(post.abEmbed) : post.abEmbed;
  const abEmbedgroup = Array.isArray(post.abEmbedgroup)?JSON.parse(JSON.stringify ([post.abEmbedgroup])):post.abEmbedgroup;



  const content = `---
title: ${post.title}
date: ${post.date}
slug: ${post.slug}
categories: ${JSON.stringify(categories)}
terms: ${JSON.stringify(terms)}
cover: ${post.featuredImage ? post.featuredImage.node.sourceUrl : ''}
abHostname: ${abHostname ? abHostname : ''}
abEmbed: ${abEmbed ? abEmbed : ''}
abEmbedgroup: ${abEmbedgroup ? abEmbedgroup : ''}
---

# ${post.title}
`;

  const filePath = path.join('anime', `${post.slug}.md`);
  await fs.outputFile(filePath, content);
  console.log(`Created: ${filePath}`);
}

// Fungsi utama untuk mengambil data dan membuat file markdown
const generateMarkdownFiles = async () => {
  try {
    const data = await request(endpoint, query);
    const posts = data.posts.edges.map(edge => edge.node);

    for (const post of posts) {
      await createMarkdownFile(post);
    }

    console.log('File markdown telah dibuat.');
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

generateMarkdownFiles();
