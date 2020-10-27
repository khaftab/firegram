import React, { useState } from "react";
import { Form } from "react-bootstrap";
import ProgressBar from "./ProgressBar";

function UploadForm() {
  const [file, setFile] = useState(null);
  const [error, setError] = useState("");
  const types = ["image/png", "image/jpeg"];
  const handleChange = (e) => {
    const selected = e.target.files[0];
    if (selected && types.includes(selected.type)) {
      setFile(selected);
      setError("");
    } else {
      setFile(null);
      setError("Please select image file(png or jpeg)");
    }
  };
  return (
    <Form>
      <Form.Group className="input-container">
        <Form.File onChange={handleChange} className="file-input" />
        <span>+</span>
      </Form.Group>

      {error && <p className="text-danger">{error}</p>}
      {file && <p>{file.name}</p>}
      {file && <ProgressBar file={file} setFile={setFile} />}
    </Form>
  );
}

export default UploadForm;
