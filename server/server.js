const express = require('express');
const axios = require('axios');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Backend route that hits Claude API
app.post('/api/claude', async (req, res) => {
  const { 
    topic,
    expertise,
    numberOfQuestions,
    style,
  } = req.body;

  // Validate that all required fields are provided
  if (!topic || !expertise || !numberOfQuestions || !style) {
    return res.status(400).json({ error: 'All fields (topic, expertise, numberOfQuestions, style) are required.' });
  }

  try {
    const response = await axios.post(
      'https://api.anthropic.com/v1/messages',
      {
        model:"claude-3-5-haiku-20241022",
        messages: [
          {
            role: "user",
            content:  `Generate a JavaScript array of ${numberOfQuestions} strings containing ${expertise}-level questions about "${topic}". ${style !== 'default' ? `Frame them as if asked by ${style}.` : ''} Return just the questions as an array.`
          }
        ],
        max_tokens: 300,
      },
      {
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': process.env.CLAUDE_API_KEY,
          'anthropic-version': '2023-06-01'
        },
      }
    );

    // Extract the content from the response
    const questions = JSON.stringify(response.data.content[0].text);

    res.json({ questions: JSON.parse(questions) }); 
  } catch (error) {
    console.error('Error:', error.response?.data || error.message);
    res.status(500).json({ 
      error: 'Failed to fetch questions from Claude API',
      details: error.response?.data || error.message
    });
  }
});

app.listen(PORT, () => console.log(`🚀 Backend running at http://localhost:${PORT}`));