import axios from "axios";
import { useEffect, useState } from "react";
import { Table } from "react-bootstrap";

function Evenements() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    chargerData();
  }, []);

  async function chargerData() {
    const result = await axios.get("evenement.json");
    setEvents(result.data.IDEES_SORTIE.IDEE_SORTIE);
  }

  return (
    <>
      <h1>Evénements à Québec</h1>
      <Table>
        <thead>
          <tr>
            <th>Titre</th>
            <th>Catégorie</th>
            <th>Coût</th>
            <th>Lien</th>
          </tr>
        </thead>
        <tbody>
          {events.map((evt) => (
            <tr key={evt.TITRE_EVENEMENT}>
              <td>{evt.TITRE_EVENEMENT}</td>
              <td>{evt.CATEGORIE_EVENEMENT}</td>
              <td>{evt.COUT_EVENEMENT}</td>
              <td>{evt.URL_EVENEMENT}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
}

export default Evenements;
