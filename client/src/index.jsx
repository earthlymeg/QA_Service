import React from 'react';
import ReactDOM from 'react-dom';
import QA_Module from './QA_Module.jsx';
import axios from 'axios';

let product;

axios.get('http://52.26.193.201:3000/qa/2?count=100')
    .then((response) => {
      product = response.data;
      ReactDOM.render(<QA_Module product={product}/>, document.getElementById('QA_Service'));
    })
    .catch((err) => {
      console.log(err);
    })
