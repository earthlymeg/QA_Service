/*
component to house the form, get user input and then call the function for routing a question to the api.
*/


import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Button, Modal, Form } from 'react-bootstrap';


const AddQuestion = (props) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    handleClose();
  };

  return (
    <>
      <Button variant="outline-primary" onClick={handleShow}>
        Add A Question
      </Button>

      <Modal show={show} onHide={handleClose}>

        <Modal.Header closeButton>
          <Modal.Title> Add your question! </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form onSubmit={handleSubmit(onSubmit)}>

            <Form.Group controlId="formName">
              <Form.Label>Name</Form.Label>

              <Form.Control
                required
                type='text'
                name='name'
                placeholder='Name'
                ref={register}
              />

            </Form.Group>

            <Form.Group controlId="formQuestion">
              <Form.Label>Question</Form.Label>

              <Form.Control
                required
                type='text'
                name='body'
                placeholder='Ask a Question'
                ref={register}
              />

            </Form.Group>

            <Form.Group controlId="formEmail">
              <Form.Label>Email</Form.Label>

              <Form.Control
                required
                type='email'
                name='email'
                placeholder='Email'
                ref={register}
              />

              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>

            </Form.Group>

            <Form.Control type="submit" />

          </Form>
        </Modal.Body>

      </Modal>
    </>
  )
};

export default AddQuestion;