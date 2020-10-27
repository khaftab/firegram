import React from "react";
import useStorage from "../hooks/useStorage";
import { ProgressBar as Progressbars } from "react-bootstrap";

function ProgressBar({ file, setFile }) {
  const { progress, url } = useStorage(file);
  console.log(progress, url);
  url && setFile(null);
  return (
    <div>
      <Progressbars now={progress} label={`${progress}%`} animated />
    </div>
  );
}

export default ProgressBar;
