import React, { useState, useEffect, useContext }from "react";
import '../../styles/detail.css';
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Sumarse } from '../component/sumarse';
import { EditEvent } from '../component/editevent';
import { Bajarse } from '../component/bajarse';
import { Context } from "../store/appContext";

export const Detail = props => {
    const { store, actions } = useContext(Context);
    var id = props.match.params.id;
	return (
        <div className="container">
            <div className="row">
                {!!store.eventos &&
                    store.eventos.map((item, i) => {
                        if (item.id == id){
                            return (
                                <>
                                    <div className="col-8">
                                        <div  key={i} className="card" style={{ width: 100 + "%" }}>
                                            <div className="card" >
                                                <img className="card-img-top"  src="https://lh6.googleusercontent.com/proxy/Hi3ZjYOGMawOBoLbmjKFWfNUrqppa6MMevzY9vY-bPvmcqnppPpZcFm-ksSV0ZiSRGo-SarnKCCVquZjvVo_7tfFBTRw0WWE8ZFhDieilOo6s-2_PM0KcLALIQ" alt="Card cap"></img>
                                                <div className="card-body">
                                                    <h6 className="card-subtitle text-muted float-right">{item.estado_evento}</h6>
                                                    <h5 className="card-title">{item.titulo}</h5>
                                                    <p className="card-text">{item.descripcion}</p>
                                                    <p className="card-text">Algunos Requerimientos</p>
                                                    <p className="card-text">Algunos Requerimientos</p>
                                                    <p className="card-text"><b>Fecha Limite:</b> {item.fecha_limite}</p>
                                                    <Bajarse />
                                                    <Sumarse />                
                                                    <EditEvent /> 
                                                </div>
                                            </div>   
                                        </div>
                                    </div>
                                    <div className="col-4 right-side">
                                        <div className="card" style={{ width: 100 + "%" }}>
                                            <Link to={"/profile/" + item.usuario_id} className="cardlink">
                                                {!!store.usuarios &&
                                                    store.usuarios.map((item2, i) => {
                                                        if (item2.id == item.usuario_id){
                                                            return (
                                                                <div className="card" style={{ width: 100 + "%" }}>
                                                                    <div className="card-group">
                                                                        <div className="card">
                                                                            <img className="card-img-top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzGXDtCoDkikD9LPG1XFz_MpX1XKhs9mT9veS6F53PmsSoqTmC&s" alt="Card cap"></img>
                                                                        </div>
                                                                        <div className="card">
                                                                            <div className="card-body">
                                                                                <h5 className="card-title">{item2.nombre} {item2.apellido}</h5>
                                                                                <p className="card-text">{item2.nombre_usuario}</p>
                                                                                <p className="card-text"><small className="text-muted">Creador</small></p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            );
                                                        }
                                                })}
                                            </Link>   
                                        </div>
                                    </div>
                                </>
                            );
                        }
                })}
            </div>
        </div>
	);
};
