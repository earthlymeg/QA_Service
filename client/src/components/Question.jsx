
/*
Class component to house the question title, helpfulness count, and Add Answer functionality
and all display related answers using the Answers Components and map most likely.
Will have functionality to load more answers
Needs to have ability to report
*/

import React, { useState } from 'react';
import Answer from './Answer.jsx';
import Helpful from './Helpful.jsx';
import Report from './Report.jsx';
import AddAnswer from './AddAnswer.jsx';
import { Container, Row, Col, Button } from 'react-bootstrap';

const Question = (props) => {
  let answers = Object.values(props.question.answers);
  console.log('answers in question.jsx', answers);


  let sortedByHelpfulness = answers.sort((question1, question2) => { question1.helpfulness - question2.helpfulness} )
  //Could also limit length of answers array

  //conditionally render the add answer form or create modal for on click function

  return (
    <>
      <Container>

        <Row>

          <Col>
            <h3>Q: {props.question.question_body} </h3>
          </Col>

          <Col>
            <>
              <Helpful
                id={props.question.question_id}
                helpfulness={props.question.question_helpfulness}
                type='question' /> |

                <AddAnswer /> |

                <Report
                id={props.question.question_id}
                type='question' />
            </>
          </Col>

        </Row>

        <Row>
          <ul>
            {answers.map((answer) => {
              return (
                <li key={answer.id}><Answer answer={answer} /> </li>
              )
            })}
            {/* conditionally render the click button, only display if more answers are available */}
            <Button variant='outline-primary'>Load More Answers</Button>
          </ul>
        </Row>

      </Container>
    </>
  )
};

export default Question;