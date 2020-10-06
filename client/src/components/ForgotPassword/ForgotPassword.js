import React from "react";
import {Modal, ModalHeader, ModalTitle, ModalBody, ModalFooter, Button } from 'react-bootstrap'
import ForgotPasswordForm from "../ForgotPasswordForm/ForgotPasswordForm"

function ForgotPasswordModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            New User
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
         
            <span><ForgotPasswordForm/></span>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
  
  function ForgotPassword() {
    const [modalShow, setModalShow] = React.useState(false);
  
    return (
      <>
        <Button variant="primary" onClick={() => setModalShow(true)}>
          Forgot Password
        </Button>
  
        <ForgotPasswordModal
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      </>
    );
  }

  export default ForgotPassword;