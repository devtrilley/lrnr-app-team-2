# LRNR 

## Project Overview
LRNR is a quiz generation application that uses the **Claude AI API** to create customized quizzes based on user input. Originally built with **jQuery** and **GO**, the application is being refactored into **Node.js** and **React** for improved scalability and maintainability.

---

## Features
- **Quiz Generation**:
  - Users can select a topic, expertise level, number of questions, and question style.
  - Quizzes include a title, description, and a list of questions.
- **Quiz Interaction**:
  - Users are presented with one question at a time and can submit answers.
- **Responsive Design**:
  - The application is fully responsive and works seamlessly on mobile, tablet, and desktop devices.
- **AI Integration**:
  - The **Claude AI API** is used to generate quizzes dynamically based on user input.

---

## Tech Stack
- **Frontend**: React, HTML, SASS, Materialize, JavaScript
- **Backend**: Node.js, Express
- **API**: Claude AI API
- **Tools**: Git, NPM

---

## Installation Instructions
To set up the project locally, follow these steps:

1. **Clone the repository**:
   

## API Documentation

### Claude AI API
The **Claude AI API** is used to generate quizzes dynamically based on user input. The API requires the following parameters:

#### Request Parameters
- **Topic**: The subject of the quiz (e.g., "Science", "History").
- **Expertise Level**: The difficulty level (e.g., "Beginner", "Advanced").
- **Number of Questions**: The total number of questions in the quiz.
- **Question Style**: The format of the questions (e.g., "Multiple Choice", "True/False").

#### Example API Request
