import React from 'react'
import '../styles/AddQ.css'
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios'
import Topics from './Topics';
import GetData from '../component/Sample.js'

function AddQ() {

    const goalsA = [{
        names: "iitjee",
        _id:1,
         topics:[
          {
            name:'Physics',
            courses:['Optics','Rotational Motion','Laws & Motion']
      
          },
          {name:  'Chemistry',
          courses:['Polymers','Hydrogen','P Block Element']
      
          },
          {
            name:'Mathematics',
            courses:['Calculas','Algebra','Trigonometry']
          }
        ]
      },
      {
      names: "gre",
      _id:2,
        topics:[
          {
            name:'Physics',
            courses:['Optics','Rotational Motion','Laws & Motion']
      
          },
          {name:'Chemistry',
          courses:['Polymers','Hydrogen','P Block Element']
      
          },
          {
            name:'Mathematics',
            courses:['Calculas','Algebra','Trigonometry']
          }
        ]
      },
      {
        names: "neet",
        _id:3,
          topics:[
            {
              name:'Physics',
              courses:['Optics','Rotational Motion','Laws & Motion']
        
            },
            {name:'Chemistry',
            courses:['Polymers','Hydrogen','P Block Element']
        
            },
            {
              name:'Mathematics',
              courses:['Calculas','Algebra','Trigonometry']
            }
          ]
        },
        {
          names: "jeemat",
          _id:4,
            topics:[
              {
                name:'Physics',
                courses:['Optics','Rotational Motion','Laws & Motion']
          
              },
              {name:'Chemistry',
              courses:['Polymers','Hydrogen','P Block Element']
          
              },
              {
                name:'Mathematics',
                courses:['Calculas','Algebra','Trigonometry']
              }
            ]
          },]
    const [questionValue, setQuestionValue] = useState('');
    const [hintValue, setHintValue] = useState('');
    const [solutionValue, setSolValue] = useState('');
    const [previewQValue, setPreviewQValue] = useState('');
    const [previewHValue, setPreviewHValue] = useState('');
    const [previewSolValue, setPreviewSolValue] = useState('');
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
        let superscriptText = text.replace(/\^2/g, '²');
        // Add more conversions as needed
        return superscriptText;
    };

    // <--------Connection------------>
    console.log("Goals from change ",goalsA)

    const [goals, setGoals] = useState('...Goals...');
    const [topics, setTopics] = useState('...Topics...');
    const [course, setCourse] = useState('...Course...');
    const [goalsData, setGoalsData] = useState([]);

    const changeGoals = (event) => {
        setGoals(event.target.value);
    };
    
    useEffect(() => {
        console.log("Updated Goals:", goals);
    
        const selectedGoal = goalsA.find(goal => goal.names === goals);
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
    }, [goals,goalsA]);

    const handleButtonClick = () => {
        setFields([...fields, '']);
        setOptions([...options, '']);
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
        const questionWithOptions = question + (options.length > 0 ? ` (${options.join(', ')})` : '');
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
                            <Link className="nav-link f-color" to='/'><button className='btn btn-success'>Save</button></Link>
                        </li>

                    </ul>



                </div>
            </nav>
            <div className="outerContainer">
                <div className="container">
                    <select className="form-select goals" aria-label="Default select example"  value={goals} onChange={changeGoals}>
                        <option value="Goals">Goals</option>
                        {goalsA && goalsA.map(goal => (
                            <option key={goal._id} value={goal.names}>{goal.names}</option>
                        ))}
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

                    <select className="form-select topic" aria-label="Default select example" value={topics} onChange={(event) => setTopics(event.target.value)}>
                        <option >Topics</option>
                        {goalsData.map(topic => (
                            <option key={topic._id} value={topic.name}><Topics name={topic.name} /></option>
                        ))}

                    </select>
                    <select className="form-select dl" aria-label="Default select example" defaultValue="Courses">
                        <option >Defficulty Level</option>
                        <option value="1">IITJE</option>
                        <option value="2">NEET</option>
                        <option value="3">GRE</option>
                        <option value="3">JEEMAT</option>
                    </select>
                </div>
                <div className="container">
                    <select className="form-select weightage" aria-label="Default select example" defaultValue="Goals">
                        <option value="Weightage">Weightage</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                    </select>
                    <select className="form-select qType" aria-label="Default select example" defaultValue="Courses">
                        <option >Questionn Type</option>
                        <option value="1">MCQ</option>
                        <option value="2">SAQ</option>
                    </select>
                    <div className="container">

                        <div className="mb-3 question ques">
                            <label htmlFor="exampleFormControlTextarea1" className="form-label"><b>Question</b></label>
                            <textarea className="form-control" id="questionTextarea" onChange={handleChangeQuestion} name="question" value={questionValue} rows="3"></textarea>
                        </div>
                    </div>

                    {/* add btn */}
                    <div className="container addBtn">
                        <label htmlFor="exampleFormControlTextarea1" className="form-label"><b>Questions & Answers</b></label>
                        <button className="btn btn-success" onClick={handleButtonClick}>Add</button>
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
                            <label htmlFor="exampleFormControlTextarea1" className="form-label"><b>Hint</b></label>
                            <textarea className="form-control" id="hintTextarea" value={hintValue} onChange={handleChangeHint} name="hint" rows="3"></textarea>
                        </div>
                    </div>
                    <div className="container">

                        <div className="mb-3 question solution">
                            <label htmlFor="exampleFormControlTextarea1" className="form-label"><b>Solution</b></label>
                            <textarea className="form-control" id="hintTextarea" value={solutionValue} onChange={handleChangeSolution} name="hint" rows="3"></textarea>
                        </div>
                    </div>
                </div>
                <div className="mb-3 textarea">
                    <label htmlFor="exampleFormControlTextarea1" className="form-label preInput" ><b>Question</b></label>
                    &nbsp;<input type="text" className='qInput' value={previewQValue || ''} readOnly />



                    <label htmlFor="exampleFormControlTextarea1" className="form-label preInput" ><b>Hint</b></label>
                    &nbsp;<input type="text" className='hintInput' value={previewHValue || ''} readOnly />

                    <label htmlFor="exampleFormControlTextarea1" className="form-label preInput" ><b>Solution</b></label>
                    &nbsp;<input type="text" className='solutionInput' value={previewSolValue || ''} readOnly />
                </div>
            </div>

        </>
    )
}

export default AddQ
