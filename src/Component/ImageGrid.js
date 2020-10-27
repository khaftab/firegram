import React, { useState } from "react";
import useFirestore from "../hooks/useFirestore";
import { Row, Col, Modal as BootstrapModal } from "react-bootstrap";
import { motion } from "framer-motion";

function ImageGrid() {
  const [url, setUrl] = useState(null);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);

  const handleShow = (url) => {
    setUrl(url);
    setShow(true);
  };

  const { docs } = useFirestore("images");

  return (
    <Row className="d-flex justify-content-center">
      {docs &&
        docs.map((doc) => (
          <Col xs={10} md={5} lg={4} key={doc.id}>
            <motion.img
              src={doc.url}
              alt="uploaded"
              className="img-fluid mb-3"
              onClick={() => handleShow(doc.url)}
              whileHover={{ opacity: 0.9 }}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            />
          </Col>
        ))}

      <BootstrapModal show={show} onHide={handleClose}>
        <BootstrapModal.Header closeButton></BootstrapModal.Header>
        <BootstrapModal.Body>
          <img src={url} alt="Modal Image" className="img-fluid" />
        </BootstrapModal.Body>
      </BootstrapModal>
    </Row>
  );
}

export default ImageGrid;
