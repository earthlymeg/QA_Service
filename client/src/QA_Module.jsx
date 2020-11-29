import React from 'react';
import axios from 'axios';
import QA_List from './components/QA_List.jsx';
import SearchBar from './components/SearchBar.jsx';
import AddQuestion from './components/AddQuestion.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../dist/styles.css';
import { Container, Row, Col, Button, Accordion, Card } from 'react-bootstrap';

class QA_Module extends React.Component {
  constructor(props) {
    super(props);


    //Plan is to have a "product" property with a value of the response to a GET request for the intended product dependent on ID
    //A second property will be "questions", which is an array of the questions to pass down to the components. Filtered or unfiltered
    this.state = {
      product: props.product,
      allQuestions: props.product.results,
      open: false,
    }

    //Bound Functions
    this.handleFilterQuestions = this.handleFilterQuestions.bind(this);
    this.handleGetQuestionsAfterSubmit = this.handleGetQuestionsAfterSubmit.bind(this);
  }


  //Methods -------------------------- (Remember to Bind)

  handleFilterQuestions(filterFromSB) {
    let filteredSet = this.state.product.results.filter((question => question.question_body.toLowerCase().includes(filterFromSB)));

    this.setState({
      allQuestions: filteredSet,
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
    const questionsLength = this.state.allQuestions.length;

    return (
      <>
        <Container>

          <Row>
            <Col>
              QUESTIONS & ANSWERS
            </Col>

            <SearchBar handleFilterQuestions={this.handleFilterQuestions} />
          </Row>

          <Accordion>
            <Card style={{ border: "none" }}>
              <Card.Body>
                <QA_List questions={this.state.allQuestions.slice(0, 2)} productId={this.props.product.product_id} handleGetQuestionsAfterSubmit={this.handleGetQuestionsAfterSubmit} />
              </Card.Body>

              <Accordion.Collapse eventKey="1">
                <Card.Body><QA_List questions={this.state.allQuestions.slice(2)} productId={this.props.product.product_id} handleGetQuestionsAfterSubmit={this.handleGetQuestionsAfterSubmit} /></Card.Body>
              </Accordion.Collapse>

              <Row>
                <Col>
                {questionsLength !== 1 ?
                  <Accordion.Toggle as={Button} variant="warning" eventKey="1" onClick={() => {this.setState({open: !this.state.open})}}>
                    {this.state.open ? 'See less questions' : 'See more questions'}
                  </Accordion.Toggle> : <></> }
                </Col>
                <Col style={{textAlign: 'right'}}>
                  <AddQuestion id={this.state.product.product_id} handleGetQuestionsAfterSubmit={this.handleGetQuestionsAfterSubmit} />
                </Col>
              </Row>


            </Card>
          </Accordion>


        </Container>
      </>
    )
  }
}

export default QA_Module;