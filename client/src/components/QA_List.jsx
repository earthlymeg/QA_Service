import React from 'react';
import Question from './Question.jsx'

/*
Functional component to house Question Components

  should receive the list of questions and answers from the QA_Module's state:
    Displays full list, full list is predicated on the search bar input


  Assuming map function will reside in here and create an array with questions

  */

  const QA_List = (props) => {
    //Props will be the array of questions from QA_Module state (allowing us to filter at the top level)
    return (
      <div>
        <ul>
          {props.questions.map((question) => {
            return (
              <li key={question.question_id}> <Question question={ question } /></li>
            )
          })}
        </ul>
      </div>
    )


  };

  export default QA_List;