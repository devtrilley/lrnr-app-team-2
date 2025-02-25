import React, { useEffect, useState } from "react";
import M from "materialize-css";

import axios from "axios";

export default function QuizOptions() {
  const [selectedOptions, setSelectedOptions] = useState({});

  const [questions, setQuestions] = useState([]);
  const [error, setError] = useState([]);

  const optionsData = [
    {
      category: "topic",
      options: [
        { value: "golang", text: "golang" },
        { value: "aws", text: "aws" },
        { value: "javascript", text: "javascript" },
        { value: "CI/CD", text: "CI/CD" },
        { value: "home gardens", text: "home gardens" },
        { value: "coffee", text: "coffee" },
        { value: "finger foods", text: "finger foods" },
      ],
    },
    {
      category: "expertise",
      options: [
        { value: "1", text: "novice" },
        { value: "2", text: "intermediate" },
        { value: "3", text: "expert" },
      ],
    },
    {
      category: "number of questions",
      options: [
        { value: "5", text: "5" },
        { value: "10", text: "10" },
        { value: "15", text: "15" },
      ],
    },
    {
      category: "style of questions",
      options: [
        { value: "master oogway", text: "master oogway" },
        { value: "1940's gangster", text: "1940's gangster" },
        { value: "like i'm an 8 year old", text: "like i'm an 8 year old" },
        { value: "normal", text: "normal" },
        { value: "jedi", text: "jedi" },
        { value: "captain jack sparrow", text: "captain jack sparrow" },
        { value: "matthew mcconaughey", text: "matthew mcconaughey" },
      ],
    },
  ];

  const questionsArr = [
    "What exactly is JavaScript and how is it different from Java?",
    "Can you explain how variables work in JavaScript?",
    "Is JavaScript only used for web development?",
    "How difficult is it to learn JavaScript as a beginner?",
    "What are some cool things I can build with JavaScript?",
  ];

  const categoryToKey = {
    topic: "topic",
    expertise: "expertise",
    "number of questions": "numberOfQuestions",
    "style of questions": "style",
  };

  useEffect(() => {
    const elems = document.querySelectorAll("select");
    M.FormSelect.init(elems);
  }, []);

  const handleChange = (category) => (event) => {
    const key = categoryToKey[category];
    setSelectedOptions({
      ...selectedOptions,
      [key]: event.target.value,
    });
  };

  // Handles form submission, sending to Claude API
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("form hit");

    const { topic, expertise, numberOfQuestions, style } = selectedOptions;

    console.log(selectedOptions, "<<options ");

    if (!topic || !expertise || !numberOfQuestions || !style) {
      setError("Please fill out all fields.");
      return;
    }

    console.log(topic, expertise, numberOfQuestions, style);

    setError("");
    setQuestions([]);

    try {
      const response = await axios.post("/api/claude", {
        topic,
        expertise,
        numberOfQuestions,
        style,
      });

      setQuestions(response.data.questions);
      console.log(response.data.questions, "<<<< response");
    } catch (error) {
      console.error("Failed to fetch questions:", error);
      setError("Failed to fetch questions. Please try again.");
    }
  };

  return (
    <form className="quiz-div" onSubmit={handleSubmit}>
      {optionsData.map((data) => (
        <div className="input-field col s12" key={data.category}>
          <select
            value={selectedOptions[data.category] || ""}
            onChange={handleChange(data.category)}
          >
            <option value="" disabled></option>
            {data.options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.text}
              </option>
            ))}
          </select>
          <label>{data.category}</label>
        </div>
      ))}
      <button type="submit" className="btn">
        Submit
      </button>
    </form>
  );
}
