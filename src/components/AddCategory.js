import React, { Fragment, useState } from "react";
import propTypes from 'prop-types';

export const AddCategory = ({ setCategories }) => {

  const [inputValue, setInputValue] = useState('');

  const handleOnChange = (e) => {
    setInputValue(e.target.value);
  }

  const handleSubmit = e => {
    e.preventDefault();
    // console.log('Submit hecho');
    if( inputValue.trim().length > 2){
      setCategories((category)=> {
        return [inputValue, ...category]
      })
      setInputValue('');
    }
    // console.log(category);
  }

  return (
    <Fragment>
      <form onSubmit={ handleSubmit }>
        <input type="text" value={ inputValue } onChange={ handleOnChange } placeholder='Find your gift here'/>
        <button  className="btn" type="submit">Buscar</button>
      </form>
    </Fragment>
  )
}

AddCategory.propTypes = {
  setCategories: propTypes.func.isRequired
}