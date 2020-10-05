import React, { Component } from "react";
import styles from "../styles/Home.module.css";

export default class login extends Component {
  render() {
    return (
      <div>       

        <div className={styles.grid}>
        <h1>Inicio de sesion</h1>
          <form className={styles.card}>
            <div>
              <label for="usuario">Usuario</label>
              <input id="usuario" type="text"></input>
            </div>
            <hr></hr>
            <div>
              <label>Password</label>
              <input type="password"></input>
            </div>
            <hr></hr>
            <div>
              <button className="btnLogin" type="submit">
                Iniciar
              </button>
              <button className="btnReset" type="reset">
                Cancelar
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
