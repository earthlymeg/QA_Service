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
    this.handleGetQuestionsAfterSubmit = this.handleGetQuestionsAfterSubmit.bind(this);
  }


  //Methods -------------------------- (Remember to Bind)

  handleGetMoreQuestions() {
    if (this.state.count + 2 < this.state.allQuestions.length) {
      this.setState({
        count: this.state.count + 2
      })
    } else if (this.state.count + 1 <= this.state.allQuestions.length) {
      this.setState({
        count: this.state.count + 1
      })
    }
  }

  handleFilterQuestions(filterFromSB) {
    let filteredSet = this.state.product.results.filter((question => question.question_body.includes(filterFromSB)));

    this.setState({
      allQuestions: filteredSet,
      count: 2,
    })
  }

  handleGetQuestionsAfterSubmit(prodId) {
    axios.get(`http://52.26.193.201:3000/qa/${prodId}?count=100`)
      .then((response) => {
        this.setState({
          product: response.data,
          allQuestions: response.data.results,
        })
      })
  }

  render() {
    return (
      <>
        <Container>

          <Row>
            <Col>
              QUESTIONS & ANSWERS
            </Col>

            <SearchBar handleFilterQuestions={this.handleFilterQuestions} />
          </Row>

          <Row>
            <QA_List questions={this.state.allQuestions.slice(0, this.state.count)} productId={this.props.product.product_id} handleGetQuestionsAfterSubmit={this.handleGetQuestionsAfterSubmit} />
          </Row>

          <Row>
            <Col>
              <Button
                variant='outline-primary'
                onClick={this.handleGetMoreQuestions}>
                MORE ANSWERED QUESTIONS
              </Button>

              <AddQuestion id={this.state.product.product_id} handleGetQuestionsAfterSubmit={this.handleGetQuestionsAfterSubmit} />
            </Col>
          </Row>

        </Container>
      </>
    )
  }
}

export default QA_Module;