import { request, gql } from "graphql-request";
import fs from "fs-extra";
import path from "path";

// Endpoint GraphQL WordPress
const endpoint = "https://ayanime.me/graphql";

// Query fetch GraphQL untuk mengambil postingan dari wordpress
const query = gql`
  query iframe {
    posts(
      where: {
        metaQuery: {
          metaArray: [
            {
              type: CHAR
              key: "ab_embedgroup"
              value: "ayadrive"
              compare: LIKE
            }
            {
              type: CHAR
              key: "ab_embedgroup"
              value: "ayaplay"
              compare: LIKE
            }
          ]
          relation: AND
        }
      }
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
          eroEpisodebaru
          eroEpisodetitle
        }
      }
    }
  }
`;

// Fungsi untuk membersihkan nama kategori
function cleanCategoryName(category) {
  return category.replace(/[^a-z0-9]/gi, "_").toLowerCase();
}

// Fungsi untuk membuat file markdown dari data post
async function createMarkdownFile(post) {
  const categories = post.categories.edges.map((edge) => edge.node.name);
  const terms = post.terms.nodes.map((term) => term.name);

  // Memastikan value adalah string / benar-benar telah terformat ke dalam markdown
  const abHostname =
    typeof post.abHostname === "string"
      ? post.abHostname
      : JSON.stringify(post.abHostname);
  const abEmbed =
    typeof post.abEmbed === "string"
      ? post.abEmbed
      : JSON.stringify(post.abEmbed);
  const eroEpisodetitle =
    typeof post.eroEpisodetitle === "string"
      ? post.eroEpisodetitle
      : JSON.stringify(post.eroEpisodetitle);

  // Handle abEmbedgroup
  let iframeSrc1 = "";
  let iframeSrc2 = "";
  try {
    const parsedEmbedgroup = JSON.parse(post.abEmbedgroup);
    console.log('Parsed abEmbedgroup:', parsedEmbedgroup);
    if (Array.isArray(parsedEmbedgroup)) {
      for (const embed of parsedEmbedgroup) {
        if (embed.ab_hostname === "Ayaplay") {
          const match = embed.ab_embed.match(/src\s*=\s*"([^"]+)"/i);
          if (match) iframeSrc1 = match[1];
        }
        if (embed.ab_hostname === "Ayadrive") {
          const match = embed.ab_embed.match(/src\s*=\s*"([^"]+)"/i);
          if (match) iframeSrc2 = match[1];
        }
      }
    }
  } catch (e) {
    console.error("Error parsing abEmbedgroup:", e);
  }

  console.log(`iframeSrc1: ${iframeSrc1}`);
  console.log(`iframeSrc2: ${iframeSrc2}`);

  // Isi konten wordpress di translasikan ke file markdown
  const content = `---
title: ${post.title}
date: ${post.date}
slug: ${post.slug}
categories: ${JSON.stringify(categories)}
shortTitle: ${JSON.stringify(eroEpisodetitle)}
cover: ${post.featuredImage ? post.featuredImage.node.sourceUrl : ""}
---

# ${post.title}

<iframe-loader iframe-src1="${iframeSrc1}" iframe-src2="${iframeSrc2}"></iframe-loader>

Sinopsis:
${post.content}
`;

  // Menggunakan fungsi cleanedCategory dan menyusun folder markdown berdasarkan kategori post
  const cleanedCategories = categories.map(cleanCategoryName).join("/");
  const filePath = path.join("anime", cleanedCategories, `${post.slug}.md`);
  await fs.outputFile(filePath, content);
  console.log(`Created: ${filePath}`);
}

// Fungsi utama untuk mengambil data dan membuat file markdown
const generateMarkdownFiles = async () => {
  try {
    const data = await request(endpoint, query);
    const posts = data.posts.edges.map((edge) => edge.node);

    for (const post of posts) {
      await createMarkdownFile(post);
    }

    console.log("File markdown telah dibuat.");
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

generateMarkdownFiles();
