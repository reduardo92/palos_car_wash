import React, { useContext } from 'react';
import Context from '../../Context/Context';
import ModalStyle from '../../Components/10_Forms/ModalStyle';
import Modal from 'react-bootstrap/Modal';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import FormFunctions from '../../Components/10_Forms/FormFunctions';

const formlayout = {
  hear: (
    <>
      <option>{''}</option>
      <option>Word of Mouth</option>
      <option>Drove By</option>
      <option>Facebook</option>
      <option>Twitter</option>
      <option>Internet Search </option>
      <option>Other</option>
    </>
  ),
  visited: (
    <>
      <option>{''}</option>
      <option>Yes</option>
      <option>No</option>
    </>
  ),
  stars: (
    <>
      <option>{''}</option>
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
    </>
  ),
  fair: (
    <>
      <option>{''}</option>
      <option>Yes</option>
      <option>No</option>
    </>
  ),
  employees: (
    <>
      <option>{''}</option>
      <option>Courteous</option>
      <option>Less than courteous</option>
      <option>Other</option>
    </>
  )
};

const ModalFormQuestionaire = () => {
  const { modalShow, setModalShow } = useContext(Context);

  const { handleChange, handleSubmit, form, validated } = FormFunctions({
    subject: 'Questionaire',
    name: '',
    email: '',
    hear: '',
    visited: '',
    review: '',
    stars: '',
    fair: '',
    employees: '',
    other: ''
  });

  return (
    <ModalStyle
      show={modalShow.for === 'formQuestionaire' && modalShow.show}
      onHide={() => setModalShow({ show: false, for: '' })}
      size='lg'
      aria-labelledby='contained-modal-title-vcenter'
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title>Questionaire</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form
          method='POST'
          data-netlify='true'
          data-netlify-recaptcha='true'
          noValidate
          validated={validated}
          onSubmit={handleSubmit}
        >
          <Form.Row>
            {/* Name */}
            <Form.Group as={Col} sm controlId='name'>
              <Form.Label>Name: *</Form.Label>
              <Form.Control
                required
                name='name'
                value={form.name}
                onChange={handleChange}
                type='text'
                placeholder='Enter Name'
              />
              <Form.Control.Feedback type='invalid'>
                please fill field
              </Form.Control.Feedback>
            </Form.Group>
            {/* Name */}

            {/* Email */}
            <Form.Group as={Col} sm controlId='email'>
              <Form.Label>Email: *</Form.Label>
              <Form.Control
                required
                name='email'
                value={form.email}
                onChange={handleChange}
                type='email'
                placeholder='Enter email'
              />
              <Form.Control.Feedback type='invalid'>
                please fill field
              </Form.Control.Feedback>
            </Form.Group>
            {/* Email */}
          </Form.Row>
          <Form.Row>
            {/*  hear about us */}

            <Form.Group as={Col} sm controlId='hear'>
              <Form.Label>How did you hear about us? </Form.Label>
              <Form.Control
                name='hear'
                value={form.hear}
                onChange={handleChange}
                as='select'
              >
                {formlayout.hear}
              </Form.Control>
            </Form.Group>

            {/* Visited*/}
            <Form.Group as={Col} sm controlId='visited'>
              <Form.Label>Have you been to Palos Carwash? *</Form.Label>
              <Form.Control
                required
                name='visited'
                value={form.detail}
                onChange={handleChange}
                as='select'
              >
                {formlayout.visited}
              </Form.Control>
              <Form.Control.Feedback type='invalid'>
                please fill field
              </Form.Control.Feedback>
            </Form.Group>
          </Form.Row>
          {/* Review*/}
          <Form.Group controlId='review'>
            <Form.Label>Please leave a review. *</Form.Label>
            <Form.Control
              required
              name='review'
              value={form.review}
              onChange={handleChange}
              as='textarea'
              rows='3'
            />
            <Form.Control.Feedback type='invalid'>
              please fill field
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Row>
            {/* Stars */}
            <Form.Group as={Col} sm controlId='stars'>
              <Form.Label>
                What stars would you like to bring it in? *
              </Form.Label>
              <Form.Control
                required
                name='stars'
                value={form.stars}
                onChange={handleChange}
                as='select'
              >
                {formlayout.stars}
              </Form.Control>
              <Form.Control.Feedback type='invalid'>
                please fill field
              </Form.Control.Feedback>
            </Form.Group>
            {/*  Fair */}
            <Form.Group as={Col} sm controlId='fair'>
              <Form.Label>Do you find our prices to be fair?</Form.Label>
              <Form.Control
                name='fair'
                value={form.fair}
                onChange={handleChange}
                as='select'
              >
                {formlayout.fair}
              </Form.Control>
            </Form.Group>

            {/* Employees */}
            <Form.Group as={Col} sm controlId='employees'>
              <Form.Label>How did our employees treat you?</Form.Label>
              <Form.Control
                name='employees'
                value={form.employees}
                onChange={handleChange}
                as='select'
              >
                {formlayout.employees}
              </Form.Control>
            </Form.Group>
          </Form.Row>
          {/* Other */}
          <Form.Group controlId='other'>
            <Form.Label>If other, please explain.</Form.Label>
            <Form.Control
              name='other'
              value={form.other}
              onChange={handleChange}
              as='textarea'
              rows='3'
            />
          </Form.Group>
          <div data-netlify-recaptcha='true' />
          <Button variant='outline-white' type='submit'>
            Submit
          </Button>
        </Form>
      </Modal.Body>
    </ModalStyle>
  );
};

export default ModalFormQuestionaire;
