//Helpful component to be used by questions answers and reviews

import React, { useState } from 'react';
import axios from 'axios';
import { Button } from 'react-bootstrap';

const Helpful = (props) => {

  //Use setstate and have it update the count and then rerender the component to display the new count
  const [helpfulness, setHelpfulness] = useState(props.helpfulness)
  const [onceQuestion, setOnceQuestion] = useState(0)
  const [onceAnswer, setOnceAnswer] = useState(0)

  const incrementHelpfulness = () => {
    if ( props.type === 'question' && onceQuestion === 0 ) {
      console.log('Question id: ', props.id);
      axios.put(`http://52.26.193.201:3000/qa/question/${props.id}/helpful`, { question_id: props.id })
        .then((response) => {
          setHelpfulness(helpfulness + 1)
          setOnceQuestion(1)
        })
    }

    if ( props.type === 'answer' && onceAnswer === 0 ) {
      console.log('Answer id: ', props.id);
      axios.put(`http://52.26.193.201:3000/qa/answer/${props.id}/helpful`, { answer_id: props.id })
        .then((response) => {
          setHelpfulness(helpfulness + 1)
          setOnceAnswer(1)
        })
    }
  }
  return (
    <Button size='sm' variant='link' style={{color: '#AAAAAA', marginBottom: '4px'}} onClick={incrementHelpfulness}>Helpful? Yes ({helpfulness})</Button>
  )
}

export default Helpful;