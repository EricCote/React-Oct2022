import { Button, Form } from "react-bootstrap";

export function Modif({ contact, onEdit }) {
  return (
    <tr>
      <td>
        <input type="hidden" name="id" value={contact.id} />
        <Form.Control defaultValue={contact.firstName} name="firstName" />
      </td>
      <td>
        <Form.Control defaultValue={contact.lastName} name="lastName" />
      </td>
      <td>
        <Form.Control defaultValue={contact.email} name="email" />
      </td>
      <td>
        <Button type="submit" className="me-2">
          Save
        </Button>
        <Button
          onClick={() => {
            onEdit(null);
          }}
        >
          Cancel
        </Button>
      </td>
    </tr>
  );
}
