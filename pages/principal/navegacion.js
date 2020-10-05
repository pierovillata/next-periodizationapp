import React from 'react'

export default function navegacion() {
    return (
        <div>
            <nav>
                <a href="/">Inicio</a>
                <a href="/deportes/listDeportes">Deportes</a>
                <a href="/entrenadores/listEntrenadores">Entrenadores</a>
                <a href="/planes/newPlan">Planes</a>
                <a href="/competiciones/listCompeticiones">Competiciones</a>
            </nav>
        </div>
    )
}
