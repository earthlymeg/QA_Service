import React from 'react';
import axios from 'axios';
import QA_List from './components/QA_List.jsx';
import SearchBar from './components/SearchBar.jsx';
import AddQuestion from './components/AddQuestion.jsx';

//Master class component for organization of all sub components

class QA_Module extends React.Component {
  constructor() {
    super();

    this.state = {
      questions: { "product_id": "2", "results": [{ "question_id": 35532, "question_body": "Do you ship to Canada?", "question_date": "2020-08-22T00:00:00.000Z", "asker_name": "Drake", "question_helpfulness": 21, "reported": 0, "answers": { "124995": { "id": 124995, "body": "Yes indeed.", "date": "2020-08-22T00:00:00.000Z", "answerer_name": "Seller", "helpfulness": 14, "photos": ["https://images.unsplash.com/photo-1522115174737-2497162f69ec?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60", "https://images.unsplash.com/photo-1495555961986-6d4c1ecb7be3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"] } } }, { "question_id": 12, "question_body": "Does this product run big or small?", "question_date": "2018-11-17T00:00:00.000Z", "asker_name": "iluvcatz", "question_helpfulness": 2, "reported": 0, "answers": { "33": { "id": 33, "body": "It fit fine for me", "date": "2018-01-17T00:00:00.000Z", "answerer_name": "iluvbirds", "helpfulness": 8, "photos": [] }, "34": { "id": 34, "body": "Felt a little smaller than my usual size.", "date": "2018-12-17T00:00:00.000Z", "answerer_name": "iluvbirds", "helpfulness": 7, "photos": [] } } }, { "question_id": 7, "question_body": "Where is this product made?", "question_date": "2018-01-24T00:00:00.000Z", "asker_name": "iluvcatz", "question_helpfulness": 0, "reported": 0, "answers": { "32": { "id": 32, "body": "Michigan", "date": "2018-01-24T00:00:00.000Z", "answerer_name": "iluvbirds", "helpfulness": 4, "photos": [] }, "36": { "id": 36, "body": "Made locally!", "date": "2018-11-24T00:00:00.000Z", "answerer_name": "Seller", "helpfulness": 8, "photos": [] }, "109": { "id": 109, "body": "Product of the USA!", "date": "2018-12-24T00:00:00.000Z", "answerer_name": "Seller", "helpfulness": 4, "photos": [] } } }, { "question_id": 35607, "question_body": "Q", "question_date": "2020-10-03T00:00:00.000Z", "asker_name": "q", "question_helpfulness": 0, "reported": 0, "answers": {} }, { "question_id": 35608, "question_body": "Q2", "question_date": "2020-10-03T00:00:00.000Z", "asker_name": "Q", "question_helpfulness": 0, "reported": 0, "answers": {} }] },
    }

    //Bound Functions

  }
  // componentDidMount() {
  //   axios.get('http://52.26.193.201:3000/qa/2')
  //     .then((response) => {
  //       this.setState({
  //         questions: response,
  //       })
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     })
  // }
  //Methods (Remember to Bind)


  render() {
    return (
      <div>
        <h5>QUESTIONS & ANSWERS</h5>
        <SearchBar />
        <div>
          <QA_List questions={this.state.questions.results} />
        </div>

        <button>MORE ANSWERED QUESTIONS</button>
        <button>Add A Question </button>
        {/* <AddQuestion /> */}
      </div>
    )
  }
}

export default QA_Module;