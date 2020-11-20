import React from 'react';
import Question from './Question.jsx'
import { Container, Col } from 'react-bootstrap';

/*
Functional component to house Question Components

  should receive the list of questions and answers from the QA_Module's state:
    Displays full list, full list is predicated on the search bar input


  Assuming map function will reside in here and create an array with questions

  */

const QA_List = (props) => {
  //Props will be the array of questions from QA_Module state (allowing us to filter at the top level)
  return (
    <>
      <Container>
        <Col>
          <>
            {props.questions.map((question) => {
              return (
                <div key={question.question_id}>
                  <Question question={question} handleGetQuestionsAfterSubmit={props.handleGetQuestionsAfterSubmit} productId={props.productId}/>
                </div>
              )
            })}
          </>
        </Col>
      </Container>
    </>
  )


};

export default QA_List;