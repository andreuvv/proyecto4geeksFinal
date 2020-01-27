import React from 'react';
import '../styles/card.css';

export const Card = () => {
    return (
        <div className="card" style={{ width: 100 + "%" }}>
            <img src="..." className="card-img-top" alt="..."></img>
            <div className="card-body">
                <h5 className="card-title">Título</h5>
                <p className="card-text">Descrión</p>
                <a href="#" id="sumarse" className="btn btn-success">Sumarse</a>
                <a href="#" id="bajarse" className="btn btn-danger">Bajarse</a>
            </div>
        </div>
    );
}        