import React from 'react';
import axios from 'axios';
import QA_List from './components/QA_List.jsx';
import SearchBar from './components/SearchBar.jsx';
import AddQuestion from './components/AddQuestion.jsx';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Button } from 'react-bootstrap';

class QA_Module extends React.Component {
  constructor(props) {
    super(props);


    //Plan is to have a "product" property with a value of the response to a GET request for the intended product dependent on ID
    //A second property will be "questions", which is an array of the questions to pass down to the components. Filtered or unfiltered
    this.state = {
      product: props.product,
      allQuestions: props.product.results,
      count: 2
    }

    //Bound Functions
this.handleGetMoreQuestions = this.handleGetMoreQuestions.bind(this);
this.handleFilterQuestions = this.handleFilterQuestions.bind(this);
  }


  //Methods -------------------------- (Remember to Bind)

handleGetMoreQuestions() {
  if (this.state.count + 2 < this.state.allQuestions.length) {
    this.setState({
      count: this.state.count+2
    })
  } else if (this.state.count + 1 <= this.state.allQuestions.length) {
    this.setState({
      count: this.state.count+1
    })
  }
}

handleFilterQuestions(filterFromSB) {
  let filteredSet = this.state.product.results.filter((question => question.question_body.includes(filterFromSB)));

  // console.log('Filtered Set: ', filteredSet);

  this.setState({
    allQuestions: filteredSet,
    count: 2,
  })
}

  render() {
    return (
      <>
        <Container>

          <Row>
            <p>QUESTIONS & ANSWERS</p>
            <SearchBar handleFilterQuestions={this.handleFilterQuestions}/>
          </Row>

          <Row>
            <QA_List questions={this.state.allQuestions.slice(0, this.state.count)} />
          </Row>

          <Row>
            <Button variant='outline-primary' onClick={this.handleGetMoreQuestions}>MORE ANSWERED QUESTIONS</Button>
            <AddQuestion />
          </Row>
        </Container>
      </>
    )
  }
}

export default QA_Module;