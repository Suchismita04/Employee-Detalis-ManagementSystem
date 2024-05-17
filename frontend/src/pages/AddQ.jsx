import React from "react";
import "../styles/AddQ.css";
import { Link ,useNavigate} from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { data } from "../constants.js";
import select from 'react-select'

function AddQ() {
    const [questionValue, setQuestionValue] = useState("");
    const [hintValue, setHintValue] = useState("");
    const [solutionValue, setSolValue] = useState("");
    const [previewQValue, setPreviewQValue] = useState("");
    const [previewHValue, setPreviewHValue] = useState("");
    const [previewSolValue, setPreviewSolValue] = useState("");
    const [fields, setFields] = useState([{ question: '', correct: false }]);
    const [options, setOptions] = useState([]);
    const [correctOptions, setCorrectOptions] = useState([]);
    const navigate=useNavigate();

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

    useEffect(() => {
        setGoals(data);
    }, [data]);

    const handleFieldChange = (index, value) => {
        const newFields = [...fields];
        newFields[index].question = value;
        setFields(newFields);
      };
    
      const handleCheckboxChange = (index) => {
        const newFields = [...fields];
        newFields[index].correct = !newFields[index].correct;
        setFields(newFields);
      };
    
      const handleButtonClick = () => {
        setFields([...fields, { question: '', correct: false }]);
      };

    const handleOptionChange = (index, value) => {
        const optionValue = e.target.value;
        setOptions([...options, optionValue]);
        const questionWithOptions =
            question + (options.length > 0 ? ` (${options.join(", ")})` : "");
        setQuestion(questionWithOptions);
    };

   

    const api = axios.create({
        baseURL: '/api/v1',
        withCredentials: true,
    });
    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const topicNames = topics.map(topic => topic.name)
            console.log("topics name=", topicNames)
            
            const res = await api.post('/v1/users/saveQuestion', {
                question: previewQValue,
                topic: topicNames

            })
           navigate('/')
            console.log("Data Has been saved Successfully", res.data)

        } catch (error) {
            console.log("Error saving question:", error)
        }


    }

    return (
        <>
        <h3>Edit</h3>
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-3">
                        <li className="nav-item">
                            <Link className="nav-link f-color" to="/">
                                <button className="btn btn-success" onClick={handleSubmit}>Save</button>
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
                        options={options}
                       
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
                    <select
                        className="form-select qType"
                        aria-label="Default select example"
                        defaultValue="Courses"
                    >
                        <option>Question Type</option>
                        <option value="1">MCQ</option>

                    </select>

                </div>
                {/* from db */}
                <div className="container">
                    <form action="" method="post" onSubmit={handleSubmit}>
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
                    </form>
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
                    
                  
                </div>
           <div className="container">
            <div className="container">
            <select
                        className="form-select dl"
                        aria-label="Default select example"
                        defaultValue="Courses"
                    >
                        <option>Defficulty Level</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="3">4</option>
                    </select>
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
            </div>
                
                   
                    
                    <div className="container">
                        <div className="mb-3 question ques">
                            <label
                                htmlFor="exampleFormControlTextarea1"
                                className="form-label"
                            >
                                {/*.................. Question............. */}
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
                                    value={field.question}
                                    onChange={(e) => handleFieldChange(index, e.target.value)}
                                />
                                <label>
                                    <input
                                        type="checkbox"
                                        checked={field.correct}
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
                    <p>Priview</p>
                    <form action="/api/v1/users/saveQuestion" method="post" onSubmit={handleSubmit}> <label htmlFor="exampleFormControlTextarea1" className="form-label preInput" ><b>Question</b></label>
                        &nbsp;<input type="text" className='qInput' value={previewQValue || ''} readOnly name='question' onChange={(event) => setPreviewQValue(event.target.value)} />

                    </form>
                    <label
                        htmlFor="exampleFormControlTextarea1"
                        className="form-label preInput"
                    >
                        <b>Hint</b>
                    </label>
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
                        <b>Options</b>
                    </label>
                    {fields.map((field, index) => (
                            
                            <div key={index} className="checkBox">
                            <input type="checkbox" checked={field.correct} readOnly />
                            <span>{field.question}</span>
                            <span>{field.correct}</span>
                          </div>

                    ))}


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
