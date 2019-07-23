import React, { useContext } from 'react';
import Context from '../../Context/Context';
import ModalStyle from '../../Components/10_Forms/ModalStyle';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
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
    </>
  ),
  detail: (
    <>
      <option>{''}</option>
      <option>Express Wax</option>
      <option>Deluxe Wax</option>
      <option>2-Step (Wax &amp; Polish)</option>
      <option>Paint Restoration</option>
      <option>Complete Interior</option>
      <option>Deluxe Wax w/Interior</option>
      <option>2-Step (Wax &amp; Polish) w/ Interior</option>
      <option>Paint Restoration w/ Interior</option>
    </>
  ),
  dayWeek: (
    <>
      <option>{''}</option>
      <option>Monday</option>
      <option>Tuesday</option>
      <option>Wednesday</option>
      <option>Thursday</option>
      <option>Friday</option>
      <option>Saturday</option>
    </>
  ),
  time: (
    <>
      {' '}
      <option>{''}</option>
      <option>8:00-8:30</option>
      <option>9:00-9:30</option>
      <option>10:00-10:30</option>
      <option>11:00-11:30</option>
      <option>12:00-12:30</option>
      <option>1:00-1:30</option>
      <option>2:00</option>
    </>
  ),
  month: (
    <>
      <option>{''}</option>
      <option>January</option>
      <option>February</option>
      <option>March</option>
      <option>April</option>
      <option>May</option>
      <option>June</option>
      <option>July</option>
      <option>August</option>
      <option>September</option>
      <option>October</option>
      <option>November</option>
      <option>December</option>
    </>
  ),
  day: (
    <>
      <option>{''}</option>
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
      <option>6</option>
      <option>7</option>
      <option>8</option>
      <option>9</option>
      <option>10</option>
      <option>11</option>
      <option>12</option>
      <option>13</option>
      <option>14</option>
      <option>15</option>
      <option>16</option>
      <option>17</option>
      <option>18</option>
      <option>19</option>
      <option>20</option>
      <option>21</option>
      <option>22</option>
      <option>23</option>
      <option>24</option>
      <option>25</option>
      <option>26</option>
      <option>27</option>
      <option>28</option>
      <option>29</option>
      <option>30</option>
      <option>31</option>
    </>
  )
};

const ModalFormDetail = () => {
  const { modalShow, setModalShow } = useContext(Context);

  const { handleChange, handleSubmit, form, validated } = FormFunctions({
    subject: 'Detail Appointment',
    name: '',
    email: '',
    hear: '',
    detail: '',
    dayWeek: '',
    time: '',
    phone: '',
    vehicle: '',
    model: '',
    month: '',
    day: '',
    comments: ''
  });

  return (
    <ModalStyle
      show={modalShow.for === 'formDetail' && modalShow.show}
      onHide={() => {
        setModalShow({ show: false, for: '' });
      }}
      size='lg'
      aria-labelledby='contained-modal-title-vcenter'
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title>Detail Appointment</Modal.Title>
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
          </Form.Row>

          <Form.Row>
            {/*  hear about us */}
            <Form.Group as={Col} sm controlId='hear'>
              <Form.Label>How did you hear about us? *</Form.Label>
              <Form.Control
                required
                name='hear'
                value={form.hear}
                onChange={handleChange}
                as='select'
              >
                {formlayout.hear}
              </Form.Control>
              <Form.Control.Feedback type='invalid'>
                please fill field
              </Form.Control.Feedback>
            </Form.Group>
            {/* Detail Kind */}
            <Form.Group as={Col} sm controlId='detail'>
              <Form.Label>
                What kind of detail are you looking for? *
              </Form.Label>
              <Form.Control
                required
                name='detail'
                value={form.detail}
                onChange={handleChange}
                as='select'
              >
                {formlayout.detail}
              </Form.Control>
              <Form.Control.Feedback type='invalid'>
                please fill field
              </Form.Control.Feedback>
            </Form.Group>
          </Form.Row>

          {/* Day Week */}
          <Form.Group controlId='dayWeek'>
            <Form.Label>
              What day would you like to schedule the appointment on? *
            </Form.Label>
            <Form.Control
              required
              name='dayWeek'
              value={form.dayWeek}
              onChange={handleChange}
              as='select'
            >
              {formlayout.dayWeek}
            </Form.Control>
            <Form.Control.Feedback type='invalid'>
              please fill field
            </Form.Control.Feedback>
          </Form.Group>

          {/* Time */}
          <Form.Group controlId='time'>
            <Form.Label>What time would you like to bring it in? *</Form.Label>
            <Form.Control
              required
              name='time'
              value={form.time}
              onChange={handleChange}
              as='select'
            >
              {formlayout.time}
            </Form.Control>
            <Form.Control.Feedback type='invalid'>
              please fill field
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Row>
            {/* Phone */}
            <Form.Group as={Col} sm controlId='phone'>
              <Form.Label>Phone Number: *</Form.Label>
              <Form.Control
                required
                name='phone'
                value={form.phone}
                onChange={handleChange}
                type='tel'
                maxLength='11'
                placeholder='Enter Number'
              />
              <Form.Control.Feedback type='invalid'>
                please fill field
              </Form.Control.Feedback>
            </Form.Group>

            {/* Vehicle */}
            <Form.Group as={Col} sm controlId='vehicle'>
              <Form.Label>Make of Vehicle</Form.Label>
              <Form.Control
                name='vehicle'
                value={form.vehicle}
                onChange={handleChange}
                type='text'
                placeholder='Enter vehicle make'
              />
            </Form.Group>
            {/* Model */}
            <Form.Group as={Col} sm controlId='model'>
              <Form.Label>Model</Form.Label>
              <Form.Control
                name='model'
                value={form.model}
                onChange={handleChange}
                type='text'
                placeholder='Enter vehicle model'
              />
            </Form.Group>
          </Form.Row>
          <Form.Row>
            {/*  Month */}
            <Form.Group as={Col} sm controlId='month'>
              <Form.Label>Month *</Form.Label>
              <Form.Control
                required
                name='month'
                value={form.month}
                onChange={handleChange}
                as='select'
              >
                {formlayout.month}
              </Form.Control>
              <Form.Control.Feedback type='invalid'>
                please fill field
              </Form.Control.Feedback>
            </Form.Group>

            {/* Day f Month */}
            <Form.Group as={Col} sm controlId='day'>
              <Form.Label>Day of Month *</Form.Label>
              <Form.Control
                required
                name='day'
                value={form.day}
                onChange={handleChange}
                as='select'
              >
                {formlayout.day}
              </Form.Control>
              <Form.Control.Feedback type='invalid'>
                please fill field
              </Form.Control.Feedback>
            </Form.Group>
          </Form.Row>
          {/* Comments */}
          <Form.Group controlId='comments'>
            <Form.Label>Comments:</Form.Label>
            <Form.Control
              name='comments'
              value={form.comments}
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

export default ModalFormDetail;
