import React from 'react';
import '../../styles/card.css';

export const Card = () => {
    return (
        <div className="card" style={{ width: 100 + "%" }}>
            <img src="..." className="card-img-top" alt="..."></img>
            <div className="card-body">
                <h4 className="card-title">Título</h4>
                <br></br>
                <h6 className="card-subtitle text-muted float-left">Creador</h6>
                <h6 id="estado" className="card-subtitle text-success float-right">Estado</h6>
                <br></br>
                <p className="card-text d-flex">Descripción</p>
                <a href="#" id="sumarse" className="btn btn-success">Sumarse</a>
            </div>
        </div>
    );
}        