import { Table } from "react-bootstrap";

function About() {
  const authors = [
    { id: 1, name: "Landing" },
    { id: 2, name: "Nicolas" },
    { id: 3, name: "Abraham" },
    { id: 4, name: "Julie" },
    { id: 5, name: "Charles" },
  ];

  return (
    <>
      <h1>Page About</h1>
      <p>Voici la liste des auteurs: </p>
      <Table striped>
        <thead></thead>
        <tbody>
          {authors.map((a) => (
            <tr key={a.id}>
              <td>{a.id}</td>
              <td>{a.name}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
}

export default About;
