
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
import { Container, Row, Col, Button } from 'react-bootstrap';

const Question = (props) => {

  const [count, setCount] = useState(2)
  const [answers, setAnswers] = useState(props.question.answers)

  const updateAnswersAfterSubmit = () => {
    axios.get(`http://52.26.193.201:3000/qa/${props.question.question_id}/answers`)
      .then((response) => {
        setAnswers(response.data.results)
      })
  }

  const showMoreAnswers = (count) => {
    if (count+2 < sortedAnswers.length) {
      let newCount = count + 2
      setCount(newCount)
    } else if (count+1 <= sortedAnswers.length) {
      let newCount = count + 1
      setCount(newCount)
    }
  }

  let answerList = Object.values(answers);
  let sellerResponses = answerList.filter((answer) => (answer.answerer_name === 'Seller')).sort((question1, question2) => { return question2.helpfulness - question1.helpfulness });
  let nonSellerResponses = answerList.filter((answer) => (answer.answerer_name !== 'Seller')).sort((question1, question2) => { return question2.helpfulness - question1.helpfulness });

  let sortedAnswers = sellerResponses.concat(nonSellerResponses);

  //Component w/ conditional rendering
  const Answers = (props) => {

    //conditional function for button rendering
    const moreAnswers = () => {
      if (sortedAnswers.length > count) {
        return (
          <Button variant='outline-primary' onClick={() => { showMoreAnswers(count) }}>Load More Answers</Button>
        )
      } else {
        return <></>
      }
    }
    //Answers component return
    return (
      <ul>
        {props.answers.map((answer) => {
          return (
            <li key={answer.id}>
              <Answer answer={answer} />
            </li>
          )
        })}

          {moreAnswers()}
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

                <AddAnswer id={props.question.question_id} updateAnswersAfterSubmit={updateAnswersAfterSubmit}/> |

                <Report
                id={props.question.question_id}
                type='question' />
            </>
          </Col>

        </Row>

        <Row>
          <Answers answers={sortedAnswers.slice(0, count)} />
        </Row>

      </Container>
    </>
  )
};

export default Question;