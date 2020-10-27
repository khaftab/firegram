import React, { useState, useEffect } from "react";
import { Modal as BootstrapModal } from "react-bootstrap";

function Modal({ selected }) {
  const [show, setShow] = useState(true);

  console.log("haka");
  useEffect(() => {
    setShow(true);
  }, []);

  const handleClose = () => {
    setShow(false);
  };
  return (
    <BootstrapModal show={selected} onHide={selected}>
      <BootstrapModal.Header closeButton></BootstrapModal.Header>
      <BootstrapModal.Body>
        <img src={selected} alt="Modal Image" className="img-fluid" />
      </BootstrapModal.Body>
    </BootstrapModal>
  );
}

export default Modal;
