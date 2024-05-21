import { GraphQLClient, gql } from 'graphql-request';
import { formatISO, addDays } from 'date-fns';

const endpoint = 'https://ayanime.me/graphql';

const graphQLClient = new GraphQLClient(endpoint);

const query = gql`
  query ($startDate: String!, $endDate: String!) {
    posts(where: { dateQuery: { after: $startDate, before: $endDate } }) {
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

export async function fetchScheduledAnimeData() {
  try {
    const startDate = formatISO(new Date());
    const endDate = formatISO(addDays(new Date(), 7));

    const data = await graphQLClient.request(query, { startDate, endDate });
    return data.posts.nodes.map(post => ({
      id: post.id,
      title: post.title,
      coverImage: post.featuredImage.node.sourceUrl,
      date: post.date,
      description: post.excerpt,
      link: `/anime/${post.slug}`,
    }));
  } catch (error) {
    console.error('Error fetching scheduled anime data:', error);
    return [];
  }
}
