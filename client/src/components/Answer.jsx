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
import { Container, Row, Col, Image } from 'react-bootstrap';

const Answer = (props) => {
  const Pictures = ({ pictures }) => {
    if (pictures.length) {
      return (
        <Container>
          <Row>
            {props.answer.photos.map((photo) => {
              return (
                <Image key={photo} src={photo} height='171' width='180' thumbnail />
              )
            })}
          </Row>

          <Row>
            <p>by {props.answer.answerer_name}, {moment(props.answer.date).format("MMM Do YYYY")} | <Helpful helpfulness={props.answer.helpfulness} /> | <Report type='answer' handleGetQuestionsAfterSubmit={props.handleGetQuestionsAfterSubmit} productId={props.productId} id={props.id} /> </p>
          </Row>
        </Container>
      )
    } else {
      return <></>
    }
  };


  return (
    <Col>
      <Row>
        <p><span>A: </span>{props.answer.body}</p>
      </Row>
      <Row>
        <p>by {props.answer.answerer_name}, {moment(props.answer.date).format("MMM Do YYYY")} | <Helpful id={props.answer.id} helpfulness={props.answer.helpfulness} type='answer' /> | <Report id={props.answer.id} type='answer' updateAnswersAfterSubmit={props.updateAnswersAfterSubmit} productId={props.productId} /></p>

        <Pictures pictures={props.answer.photos} />
      </Row>
    </Col>
  )
};

export default Answer;