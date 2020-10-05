import React, { Component } from "react";
import styles from '../styles/Home.module.css'

export default class login extends Component {
  render() {
    return (
      <div className={styles.card} >
        <h1>Inicio de sesion</h1>
        <form>
          <div>
            <label>Usuario</label>
            <input type="text"></input>
          </div>
          <p></p>
          <div>
            <label>Password</label>
            <input type="password"></input>
          </div>
          <p></p>
          <div>
            <button className="btnLogin" type="submit">iniciar</button>
            <button className="btnReset" type="reset">cancelar</button>
          </div>
        </form>
      </div>
    );
  }
}
