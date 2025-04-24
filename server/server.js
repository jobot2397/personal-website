import express, { json } from 'express';
import cors from 'cors';
import { Ollama } from 'ollama';

const app = express();
const port = 3001;

// Middleware
app.use(cors());
app.use(json());

// Initialize Ollama
const ollama = new Ollama({
  host: 'https://joegpt.taile4be99.ts.net',
});

// API endpoint for text generation
app.post('/api/generate', async (req, res) => {
  try {
    const { prompt, model } = req.body;
    
    const response = await ollama.chat({
      model: model,
      messages: [{ role: 'user', content: prompt }],
    });
    
    res.json(response);
  } catch (error) {
    console.error('Error generating text:', error);
    res.status(500).json({ error: error.message });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});