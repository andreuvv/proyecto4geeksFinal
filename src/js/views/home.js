import React, { useState, useEffect, useContext } from "react";
import '../../styles/home.css';
import { Card } from '../component/card.js';
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Home = () => {
    const { store, actions } = useContext(Context);
	return (
       <div className="container">
            {!!store.eventos &&
				store.eventos.map((item, i) => {
                    return (
                        <div className="container">
                            <div className="row">
                                <div className="col-6">
                                    <div  key={i} className="card" style={{ width: 100 + "%" }}>
                                        <Link to="/detail" className="cardlink">
                                            <div className="card" style={{ width: 100 + "%" }}>
                                                <img src="..." className="card-img-top" alt="..."></img>
                                                <div className="card-body">
                                                    <h4 className="card-title">{item.titulo}</h4>
                                                    <br></br>
                                                    <h6 className="card-subtitle text-muted float-left">{item.usuario_id}</h6>
                                                    <h6 id="estado" className="card-subtitle text-muted float-right">{item.estado}</h6>
                                                    <br></br>
                                                    <p className="card-text d-flex">
                                                    {item.descripcion}
                                                    </p>
                                                    <button href="#" id="sumarse" className="btn btn-success">Sumarse</button>
                                                </div>
                                            </div>
                                        </Link>   
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
            })}
        </div>
       
        
        );
};

