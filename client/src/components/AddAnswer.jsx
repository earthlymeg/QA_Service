import React from 'react'
import { useForm } from 'react-hook-form';

const AddAnswer = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = data => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>

      <input name='name' defaultValue='Name' ref={register({ required: true })} />
      <input name='body' defaultValue='Ask a Question' ref={register({ required: true })} />
      <input name='email' defaultValue='Email' ref={register({ required: false })} />
      <input name='photos' defaultValue='photo url' ref={ register } />
      <input type="submit" />
    </form>
  )
};

export default AddAnswer;