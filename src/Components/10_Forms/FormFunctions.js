import React, { useState, useContext } from 'react';
import Context from '../../Context/Context';

const FormFunctions = (initialState, formName) => {
  const [form, setForm] = useState(initialState);
  const [msg, setMsg] = useState();

  const { setModalShow } = useContext(Context);

  const [validated, setValidated] = useState(false);

  const handleChange = e => {
    e.persist();
    setForm(form => ({ ...form, [e.target.name]: e.target.value }));
  };

  const clearMsg = () => {
    setTimeout(() => {
      setMsg('');
      setModalShow({ show: false, for: '' });
    }, 2500);
  };

  const encode = data => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
      .join('&');
  };

  const handleSubmit = async e => {
    e.preventDefault();

    if (e.currentTarget.checkValidity() === false) {
      e.stopPropagation();
    }

    setValidated(true);

    try {
      if (e.currentTarget.checkValidity()) {
        setValidated(false);
        setForm(initialState);
        const response = await fetch('/', {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: encode({ 'form-name': formName, ...form })
        });
        setMsg(
          <span className='alert alert-success'>message sent successfully</span>
        );
      }
    } catch (err) {
      console.log(err);
      setMsg(
        <span className='alert alert-danger'>message sent unsuccessfully</span>
      );
    }
    clearMsg();
  };

  return { handleChange, handleSubmit, form, validated, msg };
};

export default FormFunctions;
