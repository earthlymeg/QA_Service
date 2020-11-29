//Button for reporting the selected question or answer

import React from 'react';
import { Button } from 'react-bootstrap';
import axios from 'axios';


const Report = (props) => {
  const handleReport = () => {

    if (props.type === 'question') {
      axios.put(`http://52.26.193.201:3000/qa/question/${props.id}/report`, { question_id: props.id })
        .then((response) => {
          console.log(response);
        })
        .then(() => {props.handleGetQuestionsAfterSubmit(props.productId)})
    }

    if (props.type === 'answer') {
      axios.put(`http://52.26.193.201:3000/qa/answer/${props.id}/report`, { answer_id: props.id })
        .then((response) => {
          console.log(response);
        })
        .then(() => {props.updateAnswersAfterSubmit(props.productId)})
    }
  }
  return (
    <Button size='sm' variant='link' style={{color: '#AAAAAA', marginBottom: '4px'}} onClick={handleReport}>Report</Button>
  )
}

export default Report;