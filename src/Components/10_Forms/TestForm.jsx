import React from 'react';
import FormFunctions from './FormFunctions';

const TestForm = () => {
  const { handleChange, handleSubmit, form } = FormFunctions({
    name: '',
    email: '',
    message: ''
  });
  return (
    <form
      name='contact'
      method='POST'
      data-netlify-recaptcha='true'
      data-netlify='true'
      onSubmit={handleSubmit}
    >
      <p>
        <label>
          Name: <input type='text' name={form.name} onChange={handleChange} />
        </label>
      </p>
      <p>
        <label>
          Email:{' '}
          <input type='email' name={form.email} onChange={handleChange} />
        </label>
      </p>
      <p>
        <label>
          Message: <textarea name={form.message} onChange={handleChange} />
        </label>
      </p>
      <div data-netlify-recaptcha='true' />
      <p>
        <button type='submit'>Send</button>
      </p>
    </form>
  );
};

export default TestForm;
