
/*
Class component to house the question title, helpfulness count, and Add Answer functionality
and all display related answers using the Answers Components and map most likely.
Will have functionality to load more answers
Needs to have ability to report
*/

import React, { useState } from 'react';
import axios from 'axios';
import Answer from './Answer.jsx';
import Helpful from './Helpful.jsx';
import Report from './Report.jsx';
import AddAnswer from './AddAnswer.jsx';
import { Container, Row, Col, Button, Accordion, Card } from 'react-bootstrap';

const Question = (props) => {

  const [answers, setAnswers] = useState(props.question.answers)
  const [open, setOpen] = useState(false)

  const updateAnswersAfterSubmit = () => {
    axios.get(`http://52.26.193.201:3000/qa/${props.question.question_id}/answers`)
      .then((response) => {
        setAnswers(response.data.results)
      })
  }


  let answerList = Object.values(answers);
  let sellerResponses = answerList.filter((answer) => (answer.answerer_name === 'Seller')).sort((question1, question2) => { return question2.helpfulness - question1.helpfulness });
  let nonSellerResponses = answerList.filter((answer) => (answer.answerer_name !== 'Seller')).sort((question1, question2) => { return question2.helpfulness - question1.helpfulness });

  let sortedAnswers = sellerResponses.concat(nonSellerResponses);

  //Component w/ conditional rendering
  const Answers = (props) => {

    //Answers component return
    return (
      <ul>
        {props.answers.map((answer) => {
          return (
            <li key={answer.id}>
              <Answer answer={answer} handleGetQuestionsAfterSubmit={props.handleGetQuestionsAfterSubmit} updateAnswersAfterSubmit={updateAnswersAfterSubmit} productId={props.productId} id={answer.id} />
            </li>
          )
        })}
      </ul>
    )
  }

  const ShowMoreAnswers = () => {
    if (sortedAnswers.length > 2) {
      return (
        <Accordion.Toggle as={Button} variant="outline-primary" eventKey="1" onClick={() => setOpen(!open)}>
          {open ? 'See less answers' : 'See more answers'}
        </Accordion.Toggle>
      )
    }
    return <></>
  }

  return (
    <>
      <Container>

        <Row>

          <Col>
            <h3>Q: {props.question.question_body} </h3>
          </Col>


          <div className='justify-content-right'>
            <Helpful
              id={props.question.question_id}
              helpfulness={props.question.question_helpfulness}
              type='question'
              productId={props.productId}
            /> |

              <AddAnswer
              id={props.question.question_id}
              updateAnswersAfterSubmit={updateAnswersAfterSubmit}
              productId={props.productId}
            /> |

              <Report
              id={props.question.question_id}
              type='question'
              productId={props.productId}
              handleGetQuestionsAfterSubmit={props.handleGetQuestionsAfterSubmit}
            />
          </div>


        </Row>


        <Accordion>
          <Card style={{ border: "none" }}>
            <Row>
              <Card.Body style={{ padding: '0px' }}>
                <Answers answers={sortedAnswers.slice(0, 2)} handleGetQuestionsAfterSubmit={props.handleGetQuestionsAfterSubmit} productId={props.productId} />
              </Card.Body>
            </Row>
            <Accordion.Collapse eventKey="1">
              <Row>
                <Card.Body style={{ padding: '0px' }}>
                  <Answers answers={sortedAnswers.slice(2)} handleGetQuestionsAfterSubmit={props.handleGetQuestionsAfterSubmit} productId={props.productId} />
                </Card.Body>
              </Row>
            </Accordion.Collapse>
            <Col>
              <ShowMoreAnswers />
            </Col>
          </Card>
        </Accordion>


      </Container>
    </>
  )
};

export default Question;