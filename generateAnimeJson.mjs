import fs from 'fs-extra';
import path from 'path';
import matter from 'gray-matter';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const animeDirectory = path.join(__dirname, 'src/anime');
const outputJson = path.join(__dirname, 'src/.vuepress/public/anime.json');

// Fungsi untuk mendapatkan semua file markdown secara rekursif
const getMarkdownFiles = (dir) => {
  let files = [];
  fs.readdirSync(dir).forEach((file) => {
    const filePath = path.join(dir, file);
    if (fs.statSync(filePath).isDirectory()) {
      files = files.concat(getMarkdownFiles(filePath));
    } else if (filePath.endsWith('.md')) {
      files.push(filePath);
    }
  });
  return files;
};

const getAnimes = () => {
  const files = getMarkdownFiles(animeDirectory);
  console.log('Markdown Files:', files);  // Debugging
  const animes = files.map((file) => {
    const content = fs.readFileSync(file, 'utf-8');
    const { data } = matter(content);
    return data;
  });
  return animes;
};

const animes = getAnimes();
fs.writeFileSync(outputJson, JSON.stringify(animes, null, 2));
console.log('Anime JSON Generated:', outputJson);  // Debugging
