const express = require("express");
const axios = require("axios");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// In-memory storage for questions and answers (temporary for demo purposes)
let quizData = [];

// Endpoint to generate questions with answers
app.post("/api/claude", async (req, res) => {
  const { topic, expertise, numberOfQuestions, style } = req.body;

  // Validate that all required fields are provided
  if (!topic || !expertise || !numberOfQuestions || !style) {
    return res.status(400).json({
      error:
        "All fields (topic, expertise, numberOfQuestions, style) are required.",
    });
  }

  try {
    const response = await axios.post(
      "https://api.anthropic.com/v1/messages",
      {
        model: "claude-3-5-haiku-20241022",
        messages: [
          {
            role: "user",
            content: `Generate a JavaScript array of ${numberOfQuestions} objects for ${expertise}-level questions about "${topic}". Each object should have two properties: "question" (the question text) and "answer" (the correct answer). ${
              style !== "default" ? `Frame them as if asked by ${style}.` : ""
            } Return the array in valid JSON format.`,
          },
        ],
        max_tokens: 300,
      },
      {
        headers: {
          "Content-Type": "application/json",
          "x-api-key": process.env.CLAUDE_API_KEY,
          "anthropic-version": "2023-06-01",
        },
      }
    );

    const generatedData = JSON.parse(response.data.content[0].text.trim());

    if (!Array.isArray(generatedData)) {
      throw new Error("Invalid response format from Claude API");
    }

    quizData = generatedData;
    res.json({ quiz: generatedData.map(({ question }) => ({ question })) });
  } catch (error) {
    console.error("Error:", error.response?.data || error.message);
    res.status(500).json({
      error: "Failed to fetch questions from Claude API",
      details: error.response?.data || error.message,
    });
  }
});

// Endpoint to check a user's answer against stored answers
app.post("/api/claude/check-answer", (req, res) => {
  const { question, userAnswer } = req.body;

  if (!question || !userAnswer) {
    return res.status(400).json({
      error: "Both question and userAnswer fields are required.",
    });
  }

  // Find the correct answer based on the question
  const foundQuestion = quizData.find((q) => q.question === question);

  if (!foundQuestion) {
    return res.status(404).json({
      error: "Question not found. Please generate questions first.",
    });
  }

  const isCorrect =
    foundQuestion.answer.trim().toLowerCase() ===
    userAnswer.trim().toLowerCase();

  res.json({
    isCorrect,
    correctAnswer: foundQuestion.answer,
  });
});

app.listen(PORT, () =>
  console.log(`Backend running at http://localhost:${PORT}`)
);
