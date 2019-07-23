import React, { useContext } from 'react';
import Modal from 'react-bootstrap/Modal';
import Context from '../../Context/Context';

const ModalImg = () => {
  const { modalShow, setModalShow, modalImg } = useContext(Context);
  return (
    <Modal
      show={modalShow.for === 'img' && modalShow.show}
      onHide={() => setModalShow({ show: false, for: '' })}
      size='lg'
      aria-labelledby='contained-modal-title-vcenter'
      centered
    >
      <Modal.Header closeButton />
      <img
        style={{ maxWidth: '100%', margin: '0 auto' }}
        src={modalImg}
        alt='modalImg'
      />
    </Modal>
  );
};

export default ModalImg;
