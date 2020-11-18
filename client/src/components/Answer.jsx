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
  // console.log('props in Answer: ', props)

  const Pictures = ({ pictures }) => {
    if (pictures.length) {
      return (
        <Container>
          <Row>
            {props.answer.photos.map((photo) => {
              return (
                <Col key={photo}>
                  <Image key={photo} src={photo} height='171' width='180' thumbnail />
                </Col>
              )
            })}
          </Row>

          <Row>
            <p>by {props.answer.answerer_name}, {moment(props.answer.date).format("MMM Do YYYY")} | <Helpful helpfulness={props.answer.helpfulness} /> | <a href='#'>Report</a></p>
          </Row>
        </Container>
      )
    } else {
      return <></>
    }
  };


  return (
    <div>
      <p><span>A: </span>{props.answer.body}</p>

      <p>by {props.answer.answerer_name}, {moment(props.answer.date).format("MMM Do YYYY")} | <Helpful id={props.answer.id} helpfulness={props.answer.helpfulness} type='answer' /> | <Report id={props.answer.id} type='answer' /></p>

      <Pictures pictures={props.answer.photos} />
    </div>
  )
};

export default Answer;