//Helpful component to be used by questions answers and reviews

import React from 'react';
import axios from 'axios';
import {Button} from 'react-bootstrap';

const Helpful = (props) => {

  //Use setstate and have it update the count and then rerender the component to display the new count

  const incrementHelpfulness = () => {
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
    <Button variant='link' onClick={incrementHelpfulness}>Helpful? Yes ({props.helpfulness})</Button>
)
}

export default Helpful;