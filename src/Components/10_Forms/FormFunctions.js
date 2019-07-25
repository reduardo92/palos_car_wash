import { useState } from 'react';

const FormFunctions = (initialState, formName) => {
  const [form, setForm] = useState(initialState);

  const [validated, setValidated] = useState(false);

  const handleChange = e => {
    e.persist();
    setForm(form => ({ ...form, [e.target.name]: e.target.value }));
  };

  // const handleSubmit = async e => {
  //   e.preventDefault();

  //   if (e.currentTarget.checkValidity() === false) {
  //     e.stopPropagation();
  //   }

  //   setValidated(true);
  //   // console.log(form);

  //   if (e.currentTarget.checkValidity()) {
  //     setValidated(false);
  //     setForm(initialState);
  //     // console.log('form true', form);
  //   }
  // }

  const encode = data => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
      .join('&');
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (e.currentTarget.checkValidity() === false) {
      e.stopPropagation();
    }

    setValidated(true);

    if (e.currentTarget.checkValidity()) {
      setValidated(false);
      setForm(initialState);
      fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({ 'form-name': formName, ...form })
      })
        .then(() => alert('Success!'))
        .catch(error => alert(error));
    }
  };

  return { handleChange, handleSubmit, form, validated };
};

export default FormFunctions;
