/*
Class component:
  props:
    Need the QA_Module function for getting the user input and adding it to a filter property on it's state

  state: {
    input from search field
  }

  methods:
  onChange - to handle user input
  onSubmit - to call a function from the QA_Module with the input of the search field as it's argument, changing a filter property

*/

import React from 'react';
import { useForm } from 'react-hook-form';
import { Container, Row, Col, Form, Button, InputGroup } from 'react-bootstrap'

const SearchBar = (props) => {
  const { register, handleSubmit } = useForm();
  const onSubmit = filter => { props.handleFilterQuestions(filter.filter.toLowerCase()) }


  return (
    <Container>

        <Form onSubmit={handleSubmit(onSubmit)}>

          <InputGroup className='mb-3'>

            <Form.Control
              type='text'
              name='filter'
              className='form-control'
              placeholder='Have a question? Search for answers'
              ref={register}
            />

            <InputGroup.Append>
              <Button variant='warning' onClick={handleSubmit(onSubmit)}><i className="fa fa-search" ></i></Button>
            </InputGroup.Append>

          </InputGroup>

        </Form>


    </Container>

  )
};

export default SearchBar;