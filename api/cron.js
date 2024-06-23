import { exec } from 'child_process';
import path from 'path';

export default function handler(req, res) {
  // Jalankan script Node.js menggunakan child_process
  exec(`node ${path.resolve(__dirname, '/src/GenerateMarkdown.js')}`, (error, stdout, stderr) => {
    if (error) {
      console.error(`Error: ${error.message}`);
      res.status(500).json({ error: error.message });
      return;
    }
    if (stderr) {
      console.error(`Stderr: ${stderr}`);
      res.status(500).json({ error: stderr });
      return;
    }
    console.log(`Stdout: ${stdout}`);
    res.status(200).json({ message: 'Cron job executed successfully', output: stdout });
  });
}
