
/*
Class component to house the question title, helpfulness count, and Add Answer functionality
and all display related answers using the Answers Components and map most likely.
Will have functionality to load more answers
Needs to have ability to report
*/
import React from 'react';
import Answer from './Answer.jsx';
import Helpful from './Helpful.jsx';

const Question = (props) => {
  let answers = Object.values(props.question.answers);

  return (
    <div>
      <h3>Q: {props.question.question_body} </h3>
      <span>{<Helpful helpfulness={props.question.question_helpfulness}/>}</span>
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