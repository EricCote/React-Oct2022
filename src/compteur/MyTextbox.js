import { Form } from "react-bootstrap";

function MyTextbox({ value, onChange }) {
  return <Form.Control value={value} onChange={onChange} />;
}

export default MyTextbox;
