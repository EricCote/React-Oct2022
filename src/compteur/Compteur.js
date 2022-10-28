import { useState, useEffect } from "react";
import { MyButton } from "./MyButton";
import MyTextbox from "./MyTextbox";

function Compteur({ init }) {
  const [compte, setCompte] = useState(init);

  useEffect(() => {
    document.title = `compte: ${compte}`;
  });

  function increment(incr) {
    setCompte(compte + incr); //setState execute après la série d'événements
  }

  function change(evt) {
    if (+evt.target.value) {
      setCompte(+evt.target.value);
    }
  }

  return (
    <>
      <h1>Le compteur est: {compte}</h1>
      <MyTextbox value={compte} onChange={change} />
      <MyButton incrementation={1} incrementer={increment} />
      <MyButton incrementation={-10} incrementer={increment} />
      <MyButton incrementation={100} incrementer={increment} />
    </>
  );
}

export default Compteur;
