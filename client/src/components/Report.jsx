//Button for reporting the selected question or answer

import React from 'react';
import { Button } from 'react-bootstrap';


const Report = (props) => {
  const handleReport = () => {
    if (props.type === 'question') {
      console.log('Question id: ',props.id);
      // axios.put(`/qa/question/${props.id}/helpful`)
    }

    if (props.type === 'answer') {
      console.log('Answer id: ',props.id);
      // axios.put(`/qa/answer/${props.id}/helpful`)
    }
  }
  return (
    <Button variant='link' onClick={handleReport}>Report</Button>
  )
}

export default Report;