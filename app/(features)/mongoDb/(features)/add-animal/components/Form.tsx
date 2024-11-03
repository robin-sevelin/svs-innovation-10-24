'use client';

import React, { FormEvent, useState } from 'react';
import { HABITATS } from '../../../lib/constants/constants';

const Form = () => {
  const [input, setInput] = useState('');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(input);
    setInput('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Animal Form</h2>
      <fieldset>
        <legend>Animal information</legend>
        <label htmlFor='name'>Animal name</label>
        <input
          id='name'
          type='text'
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder='Grizzly bear'
        />
      </fieldset>
      <fieldset>
        <legend>Habitat</legend>
        {HABITATS.map((habitat) => (
          <div key={habitat.id} className='float-right'>
            <label> {habitat.name}</label>
            <input
              id='habitat'
              type='radio'
              value={habitat.name}
              name='habitat'
            />
          </div>
        ))}
      </fieldset>
      <button disabled={!input}>Submit</button>
    </form>
  );
};

export default Form;
