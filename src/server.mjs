import express from 'express';
import fs from 'fs';
import { marked } from 'marked';
import path from 'path';

const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.redirect('/cms')
});

app.get('/api/pages', (req, res) => {
  const pages = fs.readdirSync('./anime').filter((file) => file.endsWith('.md'));
  res.json(pages);
});

app.get('/api/page/:filename', (req, res) => {
  const { filename } = req.params;
  const content = fs.readFileSync(path.join('./anime', filename), 'utf8');
  res.json({ content });
});

app.put('/api/page/:filename', (req, res) => {
  const { filename } = req.params;
  const { content } = req.body;
  fs.writeFileSync(path.join('./anime', filename), content);
  res.json({ success: true });
});

app.listen(port, () => {
  console.log(`CMS server running at http://localhost:${port}`);
});