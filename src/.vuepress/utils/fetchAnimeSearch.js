import malScraper from 'mal-scraper';

export async function fetchAnimeSearch(animeTitle) {
  try {
    const data = await malScraper.getInfoFromName(animeTitle);
    return {
      title: data.title,
      status: data.status,
      releaseDate: data.aired ? data.aired.split('to')[0].trim() : 'N/A',
      type: data.type,
      totalEpisodes: data.episodes,
      uploadedDate: data.published,
      lastUpdated: data.updated_at,
      tags: data.genres.join(', '),
      synopsis: data.synopsis,
      characters: data.characters.map(char => ({
        name: char.name,
        role: char.role,
        voiceActor: char.voiceActor,
      })),
    };
  } catch (error) {
    console.error('Error fetching anime data:', error);
    return null;
  }
}
