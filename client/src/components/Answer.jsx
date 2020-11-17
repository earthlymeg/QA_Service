/*
Functional component to be rendered within the Question Component.
  Need to display answer helpfulness count and button to increase it.
  Abilitiy to report it
  Ability to display pictures

*/
import React from 'react';
import Helpful from './Helpful.jsx';
import Report from './Report.jsx';
import AnswerPhoto from './AnswerPhoto.jsx';
import moment from 'moment';

const Answer = (props) => {
  // console.log('props in Answer: ', props)
  return (
    <div>
      <p><span>A:</span> {props.answer.body}</p>

      <p>by {props.answer.answerer_name}, {moment(props.answer.date ).format("MMM Do YYYY")} | <Helpful id={props.answer.id} helpfulness={props.answer.helpfulness} type='answer' /> | <Report id={props.answer.id} type='answer' /></p>

      {/* <div>
        {props.answer.photos.map((photo) => {
          return (
            <div key={photo}>
              <AnswerPhoto photoSrc={photo} />
            </div>
          )
        })}
        <p>by {props.answer.answerer_name}, {moment(props.answer.date ).format("MMM Do YYYY")} | <Helpful helpfulness={props.answer.helpfulness}/> | <a href='#'>Report</a></p>
      </div> */}

    </div>
  )
};

export default Answer;