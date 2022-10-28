import { Button } from "react-bootstrap";

export function Contact({ contact, onEdit }) {
  return (
    <tr>
      <td>{contact.firstName}</td>
      <td>{contact.lastName}</td>
      <td>
        <a href={`mailto:${contact.email}`}>{contact.email}</a>
      </td>
      <td>
        <Button
          onClick={() => {
            onEdit(contact);
          }}
        >
          Edition
        </Button>
      </td>
    </tr>
  );
}
