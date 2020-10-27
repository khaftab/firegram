import { Container } from "react-bootstrap";
import "./App.css";
import ImageGrid from "./Component/ImageGrid";
import Title from "./Component/Title";
import UploadForm from "./Component/UploadForm";

function App() {
  return (
    <Container className="App">
      <Title />
      <UploadForm />
      <ImageGrid />
    </Container>
  );
}

export default App;
