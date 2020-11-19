//Button for reporting the selected question or answer

import React from 'react';
import { Button } from 'react-bootstrap';
import axios from 'axios';


const Report = (props) => {
  const handleReport = () => {
    if (props.type === 'question') {
      console.log('Question id: ', props.id);
      axios.put(`http://52.26.193.201:3000/qa/question/${props.id}/report`)
        .then((response) => {
          console.log(response);
        })
    }

    if (props.type === 'answer') {
      console.log('Answer id: ', props.id);
      axios.put(`http://52.26.193.201:3000/qa/answer/${props.id}/report`)
        .then((response) => {
          console.log(response);
        })
    }
  }
  return (
    <Button variant='link' onClick={handleReport}>Report</Button>
  )
}

export default Report;