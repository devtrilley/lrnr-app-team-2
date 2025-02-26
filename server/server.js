const express = require("express");
const axios = require("axios");
const cors = require("cors");
require("dotenv").config();
const path = require("path");
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use(express.static(path.join(__dirname, "../client/dist")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/dist", "index.html"));
});

// In-memory storage for questions (array of strings)
let quizData = [];

// Endpoint: Generate questions only (no answers)
app.post("/api/claude", async (req, res) => {
  const { topic, expertise, numberOfQuestions, style } = req.body;

  if (!topic || !expertise || !numberOfQuestions || !style) {
    return res.status(400).json({
      error:
        "All fields (topic, expertise, numberOfQuestions, style) are required.",
    });
  }

  try {
    const prompt = `
Generate a JavaScript array of ${numberOfQuestions} strings for ${expertise}-level questions about "${topic}".
Each string should represent a single question.
${style !== "normal" ? `Frame the questions in the style of "${style}".` : ""}

**IMPORTANT:** Return ONLY the array in valid **JSON format** without any extra explanation, headings, or comments.
Example response format:
[
  "What is JavaScript and how is it used in web development?",
  "Can you explain how variables work in JavaScript?",
  "What is asynchronous programming in JavaScript?"
]
`;

    const response = await axios.post(
      "https://api.anthropic.com/v1/messages",
      {
        model: "claude-3-5-haiku-20241022",
        messages: [{ role: "user", content: prompt }],
        max_tokens: 1000,
      },
      {
        headers: {
          "Content-Type": "application/json",
          "x-api-key": process.env.CLAUDE_API_KEY,
          "anthropic-version": "2023-06-01",
        },
      }
    );

    const responseText = response.data?.content?.[0]?.text.trim();

    // Safely parse JSON with validation
    let generatedQuestions;
    try {
      generatedQuestions = JSON.parse(responseText);
      if (!Array.isArray(generatedQuestions)) {
        throw new Error("Parsed data is not a valid array.");
      }
    } catch (parseError) {
      console.error("JSON parsing failed:", parseError.message);
      return res.status(500).json({
        error:
          "Failed to parse Claude API response. Response was not valid JSON.",
        rawResponse: responseText,
      });
    }

    quizData = generatedQuestions;
    console.log("Generated questions:", quizData);
    res.json({ questions: generatedQuestions });
  } catch (error) {
    console.error("Error:", error.response?.data || error.message);
    res.status(500).json({
      error: "Failed to fetch questions from Claude API",
      details: error.response?.data || error.message,
    });
  }
});

// Endpoint: Check and evaluate user's answer with detailed feedback
app.post("/api/claude/check-answer", async (req, res) => {
  const { question, userAnswer } = req.body;

  if (!question || !userAnswer) {
    return res.status(400).json({
      error: "Both question and userAnswer fields are required.",
    });
  }

  try {
    // Directly ask Claude to evaluate the answer using its own knowledge.
    const feedbackResponse = await axios.post(
      "https://api.anthropic.com/v1/messages",
      {
        model: "claude-3-5-haiku-20241022",
        messages: [
          {
            role: "user",
            content: `
You are an expert evaluator for quiz responses. For the given question and user's answer, provide a JSON response with the following fields:
{
  "evaluation": "Correct" | "Partially Correct" | "Incorrect",
  "explanation": "A detailed explanation on why the answer is correct or not.",
  "correctAnswer": "The correct answer to the question."
}
Return only valid JSON with no additional text.
Question: "${question}"
User's Answer: "${userAnswer}"
            `,
          },
        ],
        max_tokens: 500,
      },
      {
        headers: {
          "Content-Type": "application/json",
          "x-api-key": process.env.CLAUDE_API_KEY,
          "anthropic-version": "2023-06-01",
        },
      }
    );

    const feedbackData = JSON.parse(
      feedbackResponse.data?.content?.[0]?.text.trim()
    );
    res.json(feedbackData);
  } catch (error) {
    console.error("Error:", error.response?.data || error.message);
    res.status(500).json({
      error: "Failed to evaluate the user's answer",
      details: error.response?.data || error.message,
    });
  }
});

app.listen(PORT, () =>
  console.log(`Backend running at http://localhost:${PORT}`)
);
