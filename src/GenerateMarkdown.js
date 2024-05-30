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

  //  memastikan value adalah string / benar-benar telah terformat ke dalam markdown
  const abHostname = typeof post.abHostname === 'string' ? post.abHostname : JSON.stringify(post.abHostname);
  const abEmbed = typeof post.abEmbed === 'string' ? post.abEmbed : JSON.stringify(post.abEmbed);

  // Handle abEmbedgroup, php register wpgraphql supaya membaca kedalam format JSON kemudian diubah kedalam string
  let abEmbedgroup = '';
  try {
    const parsedEmbedgroup = JSON.parse(post.abEmbedgroup);
    if (Array.isArray(parsedEmbedgroup)) {
      abEmbedgroup = parsedEmbedgroup.map(embed => embed.ab_embed ? embed.ab_embed : JSON.stringify(embed)).join('\n');
    } else {
      abEmbedgroup = typeof parsedEmbedgroup === 'string' ? parsedEmbedgroup : JSON.stringify(parsedEmbedgroup);
    }
  } catch (e) {
    console.error('Error parsing abEmbedgroup:', e);
  }
// isi konten markdown
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

${abEmbedgroup ? abEmbedgroup : ''}
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
