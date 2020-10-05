import React, { Fragment } from "react";
import styles from "../../styles/Home.module.css";

// deportess will be populated at build time by getStaticProps()
function listDeporte({ deportes }) {
  return (
    <Fragment>
      <h2 align="center">Listado de deportes</h2>
      <div>
          <a href="/deportes/newDeporte" >Nuevo deporte</a>
      </div>
      <ul>
        {deportes.map((deportes) => (
          <li className={styles.card}>{deportes.nombre} - {deportes.tipo} - {deportes.descripcion}</li>
        ))}
      </ul>
    </Fragment>
  );
}

// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries. See the "Technical details" section.
export async function getStaticProps() {
  // Call an external API endpoint to get deportess.
  // You can use any data fetching library
  const res = await fetch(
    "https://periodizationapi-heroku.herokuapp.com/deportes"
  );
  const deportes = await res.json();

  // By returning { props: deportess }, the Blog component
  // will receive `deportess` as a prop at build time
  return {
    props: {
      deportes,
    },
  };
}

export default listDeporte;
