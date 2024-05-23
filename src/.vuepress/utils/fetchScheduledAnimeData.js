import { GraphQLClient, gql } from 'graphql-request';

const endpoint = 'https://ayanime.me/graphql';

const graphQLClient = new GraphQLClient(endpoint);

const query = gql`
  {
    posts {
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
        categories {
          nodes {
            name
          }
        }
      }
    }
  }
`;

export async function fetchAnimeData() {
  try {
    const data = await graphQLClient.request(query);
    return data.posts.nodes.map(post => ({
      id: post.id,
      title: post.title,
      coverImage: post.featuredImage.node.sourceUrl,
      date: post.date,
      description: post.excerpt,
      link: `/anime/${post.slug}`,
      category: post.categories.nodes.length > 0 ? post.categories.nodes[0].name : 'Uncategorized',
      nextScheduleDate: post.date // Placeholder for the actual schedule date
    }));
  } catch (error) {
    console.error('Error fetching anime data:', error);
    return [];
  }
}
