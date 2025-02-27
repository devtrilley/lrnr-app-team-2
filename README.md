<a id="top"></a>

# LRNR

## Project Overview
LRNR is a quiz generation application that uses the **Claude AI API** to create customized quizzes based on user input. It allows the users to select a topic, expertise level, number of questions, and question style to generate a personalized quiz. Originally built with **jQuery** and **GO**, the application is being refactored into **Node.js** and **React** for improved scalability and maintainability.

[View Demo](https://lrnr-app-team-2.onrender.com/)

## Table of Contents
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation-instructions)
- [API Documentation](#api-documentation)
- [Contributors](#contributors)
- [Acknowledgements](#acknowledgements)

## Features
- **Quiz Generation**:
  - Users can select a topic, expertise level, number of questions, and question style.
  - Quizzes include a title, description, and a list of questions.
- **Quiz Interaction**:
  - Users are presented with one question at a time and can submit answers.
- **AI Integration**:
  - The **Claude AI API** is used to generate quizzes dynamically based on user input.
- **Responsive Design**:
  - The application is fully responsive and works seamlessly on mobile, tablet, and desktop devices.



[Back to Top](#top)

## Screenshot

<img width="1920" alt="Screenshot 2025-02-27 at 2 34 06 PM" src="https://github.com/user-attachments/assets/b6f8e861-e9e6-4bd9-a8df-9d136dcb5744" />

<img width="1920" alt="Screenshot 2025-02-27 at 2 33 46 PM" src="https://github.com/user-attachments/assets/c01ffc53-e539-4c52-a0bd-745118994946" />


[Back to Top](#top)

## Tech Stack

- ![React](https://img.shields.io/badge/React-61DAFB?style=flat&logo=react&logoColor=black)
- ![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat&logo=node.js&logoColor=white)
- ![Express](https://img.shields.io/badge/Express-000000?style=flat&logo=express&logoColor=white)
- ![Materialize](https://img.shields.io/badge/Materialize-607D8B?style=flat&logo=materialize&logoColor=white)
- ![Axios](https://img.shields.io/badge/Axios-5A29E1?style=flat&logo=axios&logoColor=white)
- ![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat&logo=vite&logoColor=white)
- ![SASS](https://img.shields.io/badge/SASS-CC6699?style=flat&logo=sass&logoColor=white)



[Back to Top](#top)

## Installation Instructions

To set up the project locally, follow these steps:

### Frontend Setup

1. Clone the repository:
```bash
git clone https://github.com/devtrilley/lrnr-app-team-2.git
```

2. Navigate to the ```client``` directory:
```bash
cd client
```

3. Install dependencies:
```bash 
npm install
```

4. Start the frontend:
```bash
npm run dev
```

Visit ```http://localhost:5173``` in your browser.

### Backend Setup

1. Navigate to the ```server``` directory:
```bash
cd server
```

2. Install dependencies:
```bash 
npm install
```

3. **Obtain API Key**: You will need a **Claude AI API key** to use the quiz generation features. You can obtain your API key by signing up for Claude at [Anthropic API](https://console.anthropic.com/settings/keys).

5. **Set up your environment variables**: Create a ```.env``` file in the root of the server directory and add the following:
```bash
CLAUDE_API_KEY=your_api_key_here
```

6. Run the backend:
```bash
node server.js
```

Visit ```http://localhost:5000``` in your browser.



[Back to Top](#top)

## API Documentation

### Claude AI API
The **Claude AI API** is used to generate quizzes dynamically based on user input. The API requires the following parameters:

#### Request Parameters
- **Topic**: The subject of the quiz (e.g., "golang", "aws", "javascript").
- **Expertise Level**: The difficulty level (e.g., "novice", "intermediate").
- **Number of Questions**: The total number of questions in the quiz, choose from 5, 10, or 15.
- **Question Style**: The format of the questions (e.g., "normal", "1940's gangster").

Checkout the API documentation at [Claude](https://docs.anthropic.com/en/api/getting-started).

### Meet the Team:

| [<img src="https://avatars.githubusercontent.com/u/90164142?v=4" width="50">](https://github.com/FelixW01) | [<img src="https://avatars.githubusercontent.com/u/179357392?v=4" width="50">](https://github.com/devtrilley) | [<img src="https://avatars.githubusercontent.com/u/184243160?v=4" width="50">](https://github.com/ddungttran) | [<img src="https://avatars.githubusercontent.com/u/183950244?v=4" width="50">](https://github.com/kkhhaalliiaa) | [<img src="https://avatars.githubusercontent.com/u/176984154?v=4" width="50">](https://github.com/Tylerk2565) | [<img src="https://avatars.githubusercontent.com/u/184427314?v=4" width="50">](https://github.com/pcatalinahe) |
|---|---|---|---|---|---|


### Acknowledgements



[Back to Top](#top)
