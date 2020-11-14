//For displaying the pictures, and handling onclick events to display them or enlarge them

import React from 'react';

const AnswerPhoto = (props) => {
  return (
    <img src={props.photoSrc} width='100' height='100'/>
  )
};

export default AnswerPhoto;