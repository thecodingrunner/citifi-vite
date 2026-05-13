import express from 'express';
import Parser from 'rss-parser';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import https from 'https';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const parser = new Parser();

app.use(cors());

// Debug endpoint to see raw response
app.get('/api/linkedin-feed-debug', async (req, res) => {
  const url = 'https://www.linkedin.com/in/YOUR-USERNAME/recent-activity/all/';
  
  https.get(url, (response) => {
    let data = '';
    
    response.on('data', (chunk) => {
      data += chunk;
    });
    
    response.on('end', () => {
      console.log('Raw response (first 500 chars):', data.substring(0, 500));
      res.send(`<pre>${data.substring(0, 2000)}</pre>`);
    });
  }).on('error', (err) => {
    console.error('Request error:', err);
    res.status(500).json({ error: err.message });
  });
});

// IMPORTANT: API routes MUST come before static files and catch-all
app.get('/api/linkedin-feed', async (req, res) => {
  try {
    console.log('Attempting to fetch LinkedIn feed...');
    const feed = await parser.parseURL('https://www.linkedin.com/in/YOUR-USERNAME/recent-activity/all/');
    console.log('Successfully fetched feed:', feed.items?.length, 'items');
    res.json(feed);
  } catch (error) {
    console.error('Error fetching feed:', error.message);
    res.status(500).json({ 
      error: 'Failed to fetch feed',
      details: error.message 
    });
  }
});

// Static files and catch-all come AFTER API routes
app.use(express.static('dist'));

app.use((req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});