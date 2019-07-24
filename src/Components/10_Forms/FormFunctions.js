import { useState } from 'react';

const FormFunctions = initialState => {
  const [form, setForm] = useState(initialState);

  const [validated, setValidated] = useState(false);

  const handleChange = e => {
    e.persist();
    setForm(form => ({ ...form, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async e => {
    e.preventDefault();

    if (e.currentTarget.checkValidity() === false) {
      e.stopPropagation();
    }

    setValidated(true);
    // console.log(form);

    if (e.currentTarget.checkValidity()) {
      setValidated(false);
      // setForm(initialState);
      // console.log('form true', form);
    }
  };

  return { handleChange, handleSubmit, form, validated };
};

export default FormFunctions;
