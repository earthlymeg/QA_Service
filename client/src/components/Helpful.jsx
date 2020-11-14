//Helpful component to be used by questions answers and reviews

import React from 'react';

const Helpful = (props) => {
  //use a conditional to return the different types of Helpful components needed
return (
  <span className='helpfulness'>
    Helpful? <a href='#'>Yes</a>({props.helpfulness})
  </span>
)
}

export default Helpful;