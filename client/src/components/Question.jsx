
/*
Class component to house the question title, helpfulness count, and Add Answer functionality
and all display related answers using the Answers Components and map most likely.
Will have functionality to load more answers
Needs to have ability to report
*/
import React from 'react';
import Answer from './Answer.jsx';
import Helpful from './Helpful.jsx';
import AddAnswer from './AddAnswer.jsx';

const Question = (props) => {
  let answers = Object.values(props.question.answers);
  // console.log(props);
  //Could sort Answers by helpfulness here
  //Could also limit length of answers array
  //conditionally render the add answer form or create modal for on click function
  return (
    <div>
      <h3>Q: {props.question.question_body} </h3>
      <div>
        <span>{<Helpful helpfulness={props.question.question_helpfulness} />}</span> | <a href='#'>Add Answer</a> | <a href='#'>Report</a>
      </div>
      <ul>
        {answers.map((answer) => {
          return (
            <li key={answer.id}><Answer answer={answer} /> </li>
          )
        })}
      </ul>
    </div>
  )
};

export default Question;