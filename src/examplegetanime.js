const express = require('express');
const malScraper = require('mal-scraper');
const cors = require('cors');

const app = express();
const port = 8080;

const corsOptions = {
  origin: 'https://localhost:8080'
};
app.use(cors(corsOptions));

app.get('/anime/:title', async (req, res) => {
  try {
    const animeTitle = req.params.title;
    const data = await malScraper.getInfoFromName(animeTitle);

    const markdown = `
# ${data.title}

- **Status:** ${data.status}
- **Release Date:** ${data.aired? data.aired.split('to')[0].trim() : 'N/A'}
- **Type:** ${data.type}
- **Total Episodes:** ${data.episodes}
- **Uploaded Date:** ${data.published}
- **Last Updated:** ${data.updated_at}
- **Tags:** ${data.genres.join(', ')}
- **Synopsis:** ${data.synopsis}
    `;

    res.send(markdown);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

app.listen(port, () => {
  console.log(`Server is running at https://localhost:${port}`);
});