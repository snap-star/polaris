import { request, gql } from 'graphql-request';
import fs from 'fs-extra';
import path from 'path';

// Endpoint GraphQL WordPress
const endpoint = 'https://ayanime.me/graphql';

// Query fetch GraphQL untuk mengambil postingan dari wordpress
const query = gql`
query iframe {
  posts(
    where: {metaQuery: {metaArray: [{type: CHAR, key: "ab_hostname", value: "ayadrive", compare: LIKE}]}}
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
        content
        abEmbedgroup
        abHostname
        abEmbed
      }
    }
  }
}
`;

// Fungsi untuk membersihkan nama kategori
function cleanCategoryName(category) {
  return category.replace(/[^a-z0-9]/gi, '_').toLowerCase();
}

// Fungsi untuk membuat file markdown dari data post
async function createMarkdownFile(post) {
  const categories = post.categories.edges.map(edge => edge.node.name);
  const terms = post.terms.nodes.map(term => term.name);

  //  memastikan value post adalah string dan dapat terformat ke dalam JSON
  const abHostname = typeof post.abHostname === 'string' ? post.abHostname : JSON.stringify(post.abHostname);
  const abEmbed = typeof post.abEmbed === 'string' ? post.abEmbed : JSON.stringify(post.abEmbed);
  const konten = typeof post.content === 'string' ? post.content : JSON.stringify(post.content);

  // Handle abEmbedgroup, php register wpgraphql supaya membaca dalam format JSON kemudian diubah kedalam string
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

  // let abEmbed = '';
  // try {
  //   const parsedabEmbed = JSON.parse{post.abEmbed};
  //   if (Array.isArray(parsedabEmbed)) {
  //     abEmbed = parsedabEmbed.map(embed => embed.ab_embed ? embed.ab_embed : JSON.stringify(embed)).join('\n');
  //   } else {
  //     abEmbed = typeof parsedabEmbed === 'string' ? parsedabEmbed : JSON.stringify(parsedabEmbed);
  //   }
  // } catch (e) {
  //     console.error('Error parsing abEmbed:', e);
  //   }

  // isi konten wordpress di translasikan ke file markdown
  const content = `---
title: ${post.title}
date: ${post.date}
slug: ${post.slug}
categories: ${JSON.stringify(categories)}
terms: ${JSON.stringify(terms)}
cover: ${post.featuredImage ? post.featuredImage.node.sourceUrl : ''}
---

# ${post.title}

::: tabs

@tab ${abHostname}

${abEmbedgroup ? abEmbedgroup : ''}

@tab ${abHostname}

${abEmbed}

:::

## Keyword:
${konten}
`;

  //menggunakan fungsi cleanedcategory dan menyusun folder markdown berdasarkan kategori post
  const cleanedcategories = categories.map(cleanCategoryName).join('/');
  const filePath = path.join('anime', cleanedcategories, `${post.slug}.md`);
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
