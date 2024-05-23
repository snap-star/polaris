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
        featuredImage {
          node {
            sourceUrl
          }
        }
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
        title: post.title,
        coverImage: post.featuredImage.node.sourceUrl,
        episode: 'N/A', // Replace with actual episode data if available
        link: `/anime/${post.slug}`,
      })),
      pageInfo: data.posts.pageInfo,
    };
  } catch (error) {
    console.error('Error fetching anime data:', error);
    return { animeList: [], pageInfo: {} };
  }
}
