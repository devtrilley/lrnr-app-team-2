// Importing Card component
import { useEffect, useState } from "react";
import Card from "../components/Card";
import QuizOptions from "../components/QuizOptions";
import M from "materialize-css";

export default function Quiz() {
  const [selectedOptions, setSelectedOptions] = useState({});
  const optionsData = [
    {
      category: "Topic",
      options: [
        { value: "golang", text: "golang" },
        { value: "aws", text: "aws" },
        { value: "javascript", text: "javascript" },
        { value: "CI/CD", text: "CI/CD" },
        { value: "home gardens", text: "home gardens" },
        { value: "coffee", text: "coffee" },
        { value: "finger foods", text: "finger foods" }
      ]
    },
    {
      category: "Expertise",
      options: [
        { value: "1", text: "novice" },
        { value: "2", text: "intermediate" },
        { value: "3", text: "expert" }
      ]
    } ,
    {
      category: "Number of questions",
      options: [
        { value: "5", text: "5" },
        { value: "10", text: "10" },
        { value: "15", text: "15" }
      ]
    },
    {
      category: "Style of questions",
      options: [
        { value: "master oogway", text: "master oogway" },
        { value: "1940's gangster", text: "1940's gangster" },
        { value: "like i'm an 8 year old", text: "like i'm an 8 year old" },
        { value: "normal", text: "normal" },
        { value: "jedi", text: "jedi" },
        { value: "captain jack sparrow", text: "captain jack sparrow" },
        { value: "matthew mcconaughey", text: "matthew mcconaughey" }
      ]
    },
  ];
  
  useEffect(() => {
    const elems = document.querySelectorAll("select");
    M.FormSelect.init(elems);
  }, []);


  const handleChange = (category) => (event) => {
    setSelectedOptions({
      ...selectedOptions,
      [category]: event.target.value,
    });
  };

  return (
    <div className="quiz-container">
      <div className="title-div">
      <h1>Quiz Generation Options</h1>
      <p>Please choose your preferences below to generate your personalized quiz</p>
      </div>
      <div className="quiz-div">
      {optionsData.map((data) => (
        <div className="input-field col s12" key={data.category}>
          <select value={selectedOptions[data.category] || ""} onChange={handleChange(data.category)}>
            <option value="" disabled>
            </option>
            {data.options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.text}
              </option>
            ))}
          </select>
          <label>{data.category}</label>
        </div>
      ))}
      </div>
    </div>
  );
}
