import React, { useState } from 'react';
import { Modal } from "react-bootstrap";
import Spinner from "react-bootstrap/Spinner";
function Loader() {

    const [showModal, setShowModal] = useState(true);

    const handleCloseModal = () => {
      setShowModal(false);
    };
  return (
    <>
      <Modal show={showModal} onHide={handleCloseModal}  centered
        >
      
        <Modal.Body className="d-flex justify-content-center align-items-center">
          <Spinner animation="border" size="lg"  variant="success" role="status">
            <span className="visually-hidden" >
              Loading...
            </span>
          </Spinner>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Loader;
