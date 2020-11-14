/*
component to house the form, get user input and then call the function for routing a question to the api.
*/

import React from 'react';
import { useForm } from 'react-hook-form';

const AddQuestion = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = data => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>

      <input name='name' defaultValue='Name' ref={register({ required: true })} />
      <input name='body' defaultValue='Ask a Question' ref={register({ required: true })} />
      <input name='email' defaultValue='Email' ref={register({ required: false })} />

      <input type="submit" />
    </form>
  )
};

export default AddQuestion;