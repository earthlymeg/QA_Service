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

const SearchBar = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = data => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>

      <input name='filter' defaultValue='Have a question? Search for answers...' ref={ register }/>

      <input type="submit" />
    </form>
  )
};

export default SearchBar;