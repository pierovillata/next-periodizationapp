import React from "react";
import styles from '../styles/Home.module.css'

export default function principal() {
  return (
    <div>
      <p>
        <a href="/">Salir</a>
      </p>
      <h1>Bienvenido a PeriodizationAPP</h1>

      <div className={styles.grid}>
        <a href="/deporte" className={styles.card}>
          <h3>Deportes &rarr;</h3>
          <p>Ver el listado de deportes.</p>
        </a>
        
        <a href="/deporte" className={styles.card}>
          <h3>Deportes &rarr;</h3>
          <p>Ver el listado de deportes.</p>
        </a>

        <a href="/deporte" className={styles.card}>
          <h3>Deportes &rarr;</h3>
          <p>Ver el listado de deportes.</p>
        </a>

    
      </div>
    </div>
  );
}
