import { useEffect, useState } from "react";
import { Form, Table } from "react-bootstrap";
import { Contact } from "./Contact";
import { Modif } from "./Modif";

function Contacts() {
  const [contacts, setContacts] = useState([]);
  const [contactMod, setContactMod] = useState(null);

  useEffect(() => {
    chargerData();
  }, []);

  async function chargerData() {
    const result = await fetch(
      "https://contacts.reactacademy.live/api/contacts"
    );
    const data = await result.json();
    setContacts(data);
  }

  return (
    <>
      <h1>Contacts</h1>
      <Form
        onSubmit={async (evt) => {
          evt.preventDefault();
          const data = new FormData(evt.target);
          await fetch(
            `https://contacts.reactacademy.live/api/contacts/${data.get("id")}`,
            { method: "PUT", body: JSON.stringify(Object.fromEntries(data)) }
          );
          setContactMod(null);
          await chargerData();
        }}
      >
        <Table striped>
          <thead>
            <tr>
              <th>Prenom</th>
              <th>Nom</th>
              <th>Courriel</th>
              <th></th>
            </tr>
          </thead>

          <tbody>
            {contacts.map((contact) =>
              contact.id === contactMod?.id ? (
                <Modif
                  key={contact.id}
                  contact={contact}
                  onEdit={setContactMod}
                />
              ) : (
                <Contact
                  key={contact.id}
                  contact={contact}
                  onEdit={setContactMod}
                />
              )
            )}
          </tbody>
        </Table>
      </Form>
    </>
  );
}

export default Contacts;
