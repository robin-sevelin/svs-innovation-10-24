'use client';

import React, { FormEvent, useState } from 'react';

const Form = () => {
  const [input, setInput] = useState('');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(input);
    setInput('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <legend>Animal Form</legend>
      <label htmlFor='name'>Animal name</label>
      <input
        id='name'
        type='text'
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder='Grizzly bear'
      />
      <button disabled={!input}>Submit</button>
    </form>
  );
};

export default Form;
