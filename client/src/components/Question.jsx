
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

  const [count, setCount] = useState(2)

  const showMoreAnswers = (count) => {
    if (count+2 < sortedByHelpfulness.length) {
      let newCount = count + 2
      console.log(newCount)
      setCount(newCount)
    } else if (count+1 <= sortedByHelpfulness.length) {
      let newCount = count + 1
      console.log(newCount)
      setCount(newCount)
    }
  }

  let sortedByHelpfulness = Object.values(props.question.answers).sort((question1, question2) => { question1.helpfulness - question2.helpfulness })

  const Answers = ({ answers }) => {
    return (
      <ul>
        {answers.map((answer) => {
          return (
            <li key={answer.id}><Answer answer={answer} /> </li>
          )
        })}
        {/* conditionally render the click button, only display if more answers are available */}
        <Button variant='outline-primary' onClick={() => { showMoreAnswers(count) }}>Load More Answers</Button>
      </ul>
    )
  }

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
          <Answers answers={sortedByHelpfulness.slice(0, count)} />
        </Row>

      </Container>
    </>
  )
};

export default Question;