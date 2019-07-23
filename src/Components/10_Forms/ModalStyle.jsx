import styled from 'styled-components';
import Modal from 'react-bootstrap/Modal';

const ModalStyle = styled(Modal)`
  .modal-dialog {
    max-width: 700px;
  }
  .modal-content {
    background-color: var(--clr-blue-dark);
    border: none;
    color: var(--clr-text-light);
    /* font-family: var(--ff-title); */
    font-size: 1.05rem;
  }

  .modal-header {
    font-size: 1.8rem;
    font-family: var(--ff-title);
  }

  .btn-outline-white {
    padding: 0.5rem 2.5rem;
    color: var(--clr-title);
    background-color: var(--clr-white);

    &:hover,
    &:focus {
      color: var(--clr-white);
      background-color: transparent;
      border: solid 0.5px var(--clr-white);
    }
  }

  .modal-header button span:hover {
    color: black;
  }
`;

export default ModalStyle;
