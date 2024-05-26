import { GraphQLClient, gql } from 'graphql-request';

const endpoint = 'https://ayanime.me/graphql';
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
      }
    }
  }
`;

export async function fetchAnimeData(first, after = null) {
  try {
    const variables = { first, after };
    const data = await graphQLClient.request(query, variables);
    return {
      animeList: data.posts.nodes.map(post => ({
        id: post.id,
        title: post.title, //mengambil nama anime
        coverImage: post.featuredImage ? post.featuredImage.node.sourceUrl: '', //ambil gambar
        episode: post.eroEpisodebaru, // episode
        link: `/anime/${post.slug}`, //path link anime di web
        category: post.categories.nodes.map(category => category.name),
      })),
      pageInfo: data.posts.pageInfo,
    };
  } catch (error) {
    console.error('Error fetching anime data:', error);
    return { animeList: [], pageInfo: {} };
  }
}
