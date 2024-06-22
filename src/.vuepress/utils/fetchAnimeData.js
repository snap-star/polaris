import { GraphQLClient, gql } from "graphql-request";

const endpoint = "https://ayanime.me/graphql";
const graphQLClient = new GraphQLClient(endpoint);

const query = gql`
  query getPosts($first: Int!, $after: String) {
    posts(first: $first, after: $after) {
      pageInfo {
        endCursor
        hasNextPage
      }
      nodes {
        id
        title
        date
        slug
        excerpt
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
        eroEpisodebaru
        eroEpisodetitle
        eroStatus
        eroHot
        eroType
      }
    }
  }
`;

// Fungsi untuk membersihkan dan membuat link menjadi huruf kecil serta menambahkan underscore "_"
function cleanCategoryName(category) {
  return category.replace(/[^a-z0-9]/gi, "_").toLowerCase();
}

export async function fetchAnimeData(first, after = null) {
  try {
    const variables = { first, after };
    const data = await graphQLClient.request(query, variables);

    console.log("Fetched Data:", data.posts.nodes); // Log data yang diterima untuk debugging

    return {
      animeList: data.posts.nodes.map((post) => {
        const categories = post.categories.nodes.map((category) => category.name);
        const categoryPath = categories.map(cleanCategoryName).join(","); // Fungsi untuk membaca dan memetakan data categories
        
        // Proses data eroStatus, eroHot, eroType dengan benar
        const eroStatus = post.eroStatus || "Ongoing" || "Upcoming" || "Completed";
        const eroHot = post.eroHot || "Yes" || "No";
        const eroType = post.eroType || "TV" || "Movie";

        return {
          id: post.id, // post id
          title: post.title, // mengambil nama anime
          coverImage: post.featuredImage ? post.featuredImage.node.sourceUrl : "", // mengambil gambar
          episode: post.eroEpisodebaru, // mengambil data episode untuk badge
          category: JSON.stringify(categories),
          link: `/anime/${categoryPath}/${post.slug}`, // path link anime di web
          eroStatus,
          eroHot,
          eroType,
        };
      }),
      pageInfo: data.posts.pageInfo,
    };
  } catch (error) {
    console.error("Error fetching anime data:", error);
    return { animeList: [], pageInfo: {} };
  }
}
