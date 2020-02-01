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
                <h6 id="estado" className="card-subtitle text-muted float-right">Estado</h6>
                <br></br>
                <p className="card-text d-flex">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
                </p>
                <a href="#" id="sumarse" className="btn btn-success">Sumarse</a>
            </div>
        </div>
    );
}        