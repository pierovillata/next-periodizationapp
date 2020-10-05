import React from "react";

export default function newDeporte() {
  return (
    <div>
      <form>
        <div>
          <label>Nombre</label>
          <input id="nombre"></input>
          <label>Tipo</label>
          <select id="tipo_deporte">
              <option value="Fuerza">Fuerza</option>
              <option value="Fuerza">Fuerza</option>
              <option value="Fuerza">Fuerza</option>
              <option value="Fuerza">Fuerza</option>
          </select>
        </div>
      </form>
    </div>
  );
}
