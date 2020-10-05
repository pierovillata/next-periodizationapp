import React from "react";
import styles from '../styles/Home.module.css'

export default function principal() {
  return (
    <div>     
     

      <div className={styles.grid}>
        <a href="/deportes/listDeportes" className={styles.card}>
          <h3>Deportes &rarr;</h3>
          <p>Ver el listado de deportes.</p>
        </a>
        
        <a href="/entrenadores/listEntrenadores" className={styles.card}>
          <h3>Entrenadores &rarr;</h3>
          <p>Ver el listado de entrenadores.</p>
        </a>

        <a href="/atletas/listAtletas" className={styles.card}>
          <h3>Atletas &rarr;</h3>
          <p>Ver el listado de atletas.</p>
        </a>

    
      </div>
    </div>
  );
}
