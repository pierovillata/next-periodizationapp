import Head from "next/head";
import styles from "../styles/Home.module.css";
import Navegacion from "./principal/navegacion";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
      
      <div className={styles.header}>     
        <h2>PeriodizationAPP 3.0</h2> 
       <Navegacion></Navegacion>
        <div className={styles.login}><a href="/login"> Login</a></div>       
      </div>
     
        
      </Head>
     
      <main className={styles.main}>
     
      <navBar></navBar>
        <h1 className={styles.title}>Welcome to Periodization APP</h1>

        <p className={styles.description}>Periodization al alcance de todos</p>

        <div className={styles.grid}>
          <a href="/periodization" className={styles.card}>
            <h3>Periodization APP &rarr;</h3>
            <p>Entrenamiento inteligente para  en deportes de endurance.</p>
          </a>
          <a href="/registrarse" className={styles.card}>
            <h3>Comienza ya! &rarr;</h3>
            <p>Registrate y comienza a planificar de manera inteligente.</p>
          </a>
          <a href="https://www.youtube.com/channel/UC-Yo0U9gtC8dq2dTizQsmqQ?view_as=subscriber" className={styles.card}>
            <h3>Youtube Chanel &rarr;</h3>
            <p>Canal de entrenamiento deportivo y planificación.</p>
          </a>
         
          <a href="/docs/glosario" className={styles.card}>
            <h3>Documentacion &rarr;</h3>
            <p>Ayuda para entender y aplicar conceptos de periodización.</p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a href="/">
          <b>Producido por Piero Villata WEBSYSNET</b>
        </a>
      </footer>
    </div>
  );
}
