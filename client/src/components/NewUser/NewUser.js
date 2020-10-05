import React from "react";
import {Modal, ModalHeader, ModalTitle, ModalBody, ModalFooter, Button } from 'react-bootstrap'
import SignupForm from "../SignupForm/SignupForm"


// function NewUser() {
//     return(
//         <div class="modal" tabindex="-1">
//   <div class="modal-dialog">
//     <div class="modal-content">
//       <div class="modal-header">
//         <h5 class="modal-title">Modal title</h5>
//         <button type="button" class="close" data-dismiss="modal" aria-label="Close">
//           <span aria-hidden="true">&times;</span>
//         </button>
//       </div>
//       <div class="modal-body">
//         <p>Modal body text goes here.</p>
//       </div>
//       <div class="modal-footer">
//         <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
//         <button type="button" class="btn btn-primary">Save changes</button>
//       </div>
//     </div>
//   </div>
// </div>
//     )
// }

// export default NewUser;

function NewUserModal(props) {
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
         
            <span><SignupForm/></span>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
  
  function NewUser() {
    const [modalShow, setModalShow] = React.useState(false);
  
    return (
      <>
        <Button variant="primary" onClick={() => setModalShow(true)}>
          Sign up
        </Button>
  
        <NewUserModal
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      </>
    );
  }
  
 // render(<App />);

 export default NewUser;