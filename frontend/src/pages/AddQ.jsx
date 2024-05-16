import React from "react";
import "../styles/AddQ.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Topics from "./Topics.jsx";
import GetData from "../component/Sample.js";
import { data } from "../constants.js";

function AddQ() {
  const [questionValue, setQuestionValue] = useState("");
  const [hintValue, setHintValue] = useState("");
  const [solutionValue, setSolValue] = useState("");
  const [previewQValue, setPreviewQValue] = useState("");
  const [previewHValue, setPreviewHValue] = useState("");
  const [previewSolValue, setPreviewSolValue] = useState("");
  const [fields, setFields] = useState([]);
  const [options, setOptions] = useState([]);
  const [correctOptions, setCorrectOptions] = useState([]);

  const handleChangeQuestion = (event) => {
    const value = event.target.value;
    setQuestionValue(value);
    setPreviewQValue(convertToSuperscript(value));
  };

  const handleChangeHint = (event) => {
    const value = event.target.value;
    setHintValue(value);
    setPreviewHValue(convertToSuperscript(value));
  };
  const handleChangeSolution = (event) => {
    const value = event.target.value;
    setSolValue(value);
    setPreviewSolValue(convertToSuperscript(value));
  };

  const convertToSuperscript = (text) => {
    let superscriptText = text.replace(/\^2/g, "²");
    // Add more conversions as needed
    return superscriptText;
  };

  // <--------Connection------------>
  //   console.log("Goals from change ", goalsA);

  // for displaying the contents
  const [goals, setGoals] = useState([]);
  const [topics, setTopics] = useState([]);
  const [courses, setCourses] = useState([]);

  // for getting the selected value
  const [selectedGoal, setSelectedGoal] = useState("...Goal...");
  const [selectedTopic, setSelectedTopic] = useState("...Topic...");
  const [selectedCourse, setSelectedCourse] = useState("...Course...");

  useEffect(() => {
    console.log(courses);
  }, [courses]);

  const changeGoals = (event) => {
    setSelectedGoal(event.target.value);
    setTopics(goals.find((goal) => goal.names === event.target.value).topics);
    setCourses([]);
    setSelectedTopic("")
  };

  const handleTopicChange = (event) => {
    setSelectedTopic(event.target.value);
    setCourses(topics.find(tpc => tpc.name === event.target.value).courses);
  }  

  const handleCourseChange = (event) => {
    setSelectedCourse(event.target.value)
  }

  /* 
  useEffect(() => {
    console.log("Updated Goals:", goals);

    const selectedGoal = goalsA.find((goal) => goal.names === goals);
    console.log("Selected Goal:", selectedGoal);

    if (selectedGoal) {
      if (selectedGoal.goalsData) {
        setGoalsData(selectedGoal.goalsData);
        console.log("Setting Goals Data:", selectedGoal.goalsData);
      } else {
        console.log("Selected goal does not have goalsData property.");
        // Handle the case when goalsData is undefined
      }
    } else {
      console.log("No matching goal found in goalsA.");
      // Handle the case when no matching goal is found
    }
  }, [goals, goalsA]); */

  useEffect(() => {
    setGoals(data);
  }, [data]);

  const handleButtonClick = () => {
    setFields([...fields, ""]);
    setOptions([...options, ""]);
    setCorrectOptions([...correctOptions, false]);
  };

  const handleFieldChange = (index, value) => {
    const newFields = [...fields];
    newFields[index] = value;
    setFields(newFields);
  };

  const handleOptionChange = (index, value) => {
    const optionValue = e.target.value;
    setOptions([...options, optionValue]);
    const questionWithOptions =
      question + (options.length > 0 ? ` (${options.join(", ")})` : "");
    setQuestion(questionWithOptions);
  };

  const handleCheckboxChange = (index) => {
    const newCorrectOptions = [...correctOptions];
    newCorrectOptions[index] = !correctOptions[index];
    setCorrectOptions(newCorrectOptions);
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-3">
            <li className="nav-item">
              <Link className="nav-link f-color" to="/">
                <button className="btn btn-success">Save</button>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <div className="outerContainer">
        <div className="container">
          <select
            className="form-select goals"
            aria-label="Default select example"
            value={selectedGoal}
            onChange={changeGoals}
          >
            <option value="Goals">...Goals...</option>
            {goals
              ? goals.map((goal) => (
                  <option key={goal._id} value={goal.names}>
                    {goal.names}
                  </option>
                ))
              : ""}
          </select>
          {/* from db */}
          {/* <select className="form-select courses" aria-label="Default select example" defaultValue="Courses">
                        <option>Courses</option>
                        {topics && topics.map(topic => (
                            topic.courses.map(course => (
                                <option key={course} value={course}>{course}</option>
                            ))
                        ))}
                    </select> */}
        </div>
        {/* from db */}
        <div className="container">
          <select
            className="form-select topic"
            aria-label="Default select example"
            value={selectedTopic}
            onChange={handleTopicChange}
          >
            <option>...Topics...</option>
            {topics ? (
              topics.map((tp) => (
                <option key={tp.id} value={tp.name}>
                  {tp.name}
                </option>
              ))
            ) : ""}
          </select>
          <select
            className="form-select topic"
            aria-label="Default select example"
            value={selectedCourse}
            onChange={handleCourseChange}
          >
            <option>...Courses...</option>
            {courses ? (
              courses.map((crs, idx) => (
                <option key={idx} value={crs}>
                  {crs}
                </option>
              ))
            ) : ""}
          </select>
          <select
            className="form-select dl"
            aria-label="Default select example"
            defaultValue="Courses"
          >
            <option>Defficulty Level</option>
            <option value="1">IITJE</option>
            <option value="2">NEET</option>
            <option value="3">GRE</option>
            <option value="3">JEEMAT</option>
          </select>
        </div>
        <div className="container">
          <select
            className="form-select weightage"
            aria-label="Default select example"
            defaultValue="Goals"
          >
            <option value="Weightage">Weightage</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>
          <select
            className="form-select qType"
            aria-label="Default select example"
            defaultValue="Courses"
          >
            <option>Questionn Type</option>
            <option value="1">MCQ</option>
            <option value="2">SAQ</option>
          </select>
          <div className="container">
            <div className="mb-3 question ques">
              <label
                htmlFor="exampleFormControlTextarea1"
                className="form-label"
              >
                <b>Question</b>
              </label>
              <textarea
                className="form-control"
                id="questionTextarea"
                onChange={handleChangeQuestion}
                name="question"
                value={questionValue}
                rows="3"
              ></textarea>
            </div>
          </div>

          {/* add btn */}
          <div className="container addBtn">
            <label htmlFor="exampleFormControlTextarea1" className="form-label">
              <b>Questions & Answers</b>
            </label>
            <button className="btn btn-success" onClick={handleButtonClick}>
              Add
            </button>
            {fields.map((field, index) => (
              <div key={index}>
                <input
                  type="text"
                  placeholder="Question"
                  value={field}
                  onChange={(e) => handleFieldChange(index, e.target.value)}
                />
                <label>
                  <input
                    type="checkbox"
                    checked={correctOptions[index]}
                    onChange={() => handleCheckboxChange(index)}
                  />
                  Correct
                </label>
              </div>
            ))}
          </div>

          <div className="container">
            <div className="mb-3 question hint">
              <label
                htmlFor="exampleFormControlTextarea1"
                className="form-label"
              >
                <b>Hint</b>
              </label>
              <textarea
                className="form-control"
                id="hintTextarea"
                value={hintValue}
                onChange={handleChangeHint}
                name="hint"
                rows="3"
              ></textarea>
            </div>
          </div>
          <div className="container">
            <div className="mb-3 question solution">
              <label
                htmlFor="exampleFormControlTextarea1"
                className="form-label"
              >
                <b>Solution</b>
              </label>
              <textarea
                className="form-control"
                id="hintTextarea"
                value={solutionValue}
                onChange={handleChangeSolution}
                name="hint"
                rows="3"
              ></textarea>
            </div>
          </div>
        </div>
        <div className="mb-3 textarea">
          <label
            htmlFor="exampleFormControlTextarea1"
            className="form-label preInput"
          >
            <b>Question</b>
          </label>
          &nbsp;
          <input
            type="text"
            className="qInput"
            value={previewQValue || ""}
            readOnly
          />
          <label
            htmlFor="exampleFormControlTextarea1"
            className="form-label preInput"
          >
            <b>Hint</b>
          </label>
          &nbsp;
          <input
            type="text"
            className="hintInput"
            value={previewHValue || ""}
            readOnly
          />
          <label
            htmlFor="exampleFormControlTextarea1"
            className="form-label preInput"
          >
            <b>Solution</b>
          </label>
          &nbsp;
          <input
            type="text"
            className="solutionInput"
            value={previewSolValue || ""}
            readOnly
          />
        </div>
      </div>
    </>
  );
}

export default AddQ;
