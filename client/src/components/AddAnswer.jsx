import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { Button, Modal, Form } from 'react-bootstrap';
import axios from 'axios';


const AddAnswer = (props) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    // // For adding photos, unsure what format POST request wants them in though:
    // const urls = data.photos.split(',');
    // let photos = { photos: []}
    // for (let i = 0; i < urls.length; i++) {
    //   photos.photos.push(urls[i].trim())
    // }
    // Object.assign(data, photos, {question_id: props.id});

    axios.post(`http://52.26.193.201:3000/qa/${props.id}/answers`, data)
      .then((response) => {
        console.log(response)
      })
      .then(handleClose)
      .then(props.updateAnswersAfterSubmit)
  };

  return (
    <>
      <Button size='sm' variant="link" style={{color: '#AAAAAA', marginBottom: '4px'}} onClick={handleShow}>
        Add An Answer
      </Button>

      <Modal show={show} onHide={handleClose}>

        <Modal.Header closeButton style={{backgroundColor: '#FFC107'}}>
          <Modal.Title> Add Your Answer! </Modal.Title>
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

            <Form.Group controlId="formBody">
              <Form.Label>Answer</Form.Label>

              <Form.Control
                required
                type='text'
                name='body'
                placeholder='Add your answer'
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

            {/* <Form.Group controlId="formPictures">
              <Form.Label>Pictures</Form.Label>

              <Form.Control
                type='text'
                name='photos'
                placeholder='Seperate photo-links with commas'
                ref={register}
              />
            </Form.Group> */}

            <Form.Control type="submit" style={{backgroundColor: '#FFC107'}}/>

          </Form>
        </Modal.Body>

      </Modal>
    </>
  )
};

export default AddAnswer;