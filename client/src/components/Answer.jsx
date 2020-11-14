/*
Functional component to be rendered within the Question Component.
  Need to display answer helpfulness count and button to increase it.
  Abilitiy to report it
  Ability to display pictures

*/
import React from 'react';
import Helpful from './Helpful.jsx';
import AnswerPhoto from './AnswerPhoto.jsx';

const Answer = (props) => {
  console.log('props in Answer: ', props)
  return (
    <div>
      <p><span>A:</span> {props.answer.body}</p>
      <Helpful helpfulness={props.answer.helpfulness} />
      <div>
        {props.answer.photos.map((photo) => {
          return (
            <span key={photo}>
              <AnswerPhoto photoSrc={photo} />
            </span>
          )
        })}
      </div>


      <p>by {props.answer.answerer_name}</p>
      {/* conditionally render the click button, only display if more answers are available */}
      <button>Load More Answers</button>
    </div>
  )
};

export default Answer;