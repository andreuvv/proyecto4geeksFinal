import React from "react";
import '../../styles/profile.css';
import { Link } from 'react-router-dom';
import { Card } from '../component/card.js';

export const Profile = () => {
	return (
        <div className="container">
            <div className="row">
                <div className="col-4">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzGXDtCoDkikD9LPG1XFz_MpX1XKhs9mT9veS6F53PmsSoqTmC&s" alt="profile" className="profilePicture"/>
                </div>
                <div className="col-8">
                    <div className="card cardProfile" style={{ width: 100 + "%" }}>
                        <div className="card-body">
                            <h1 className="card-title">Juanito Pérez</h1>
                            <h5 className="card-title">@Juanete</h5>
                            <h5 className="card-title">Santiago, Chile</h5>
                            <p className="card-text">Amo los gatos, el café, Gamer, Hijo de Maria Tereza</p>
                            <p className="card-text">¡Viviendo un día a la vez!</p> 
                            <a href="..." id="editarperfil" className="card-link">Editar perfil</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                  <ul className="nav nav-pills nav-fill" id="pills-tab" role="tablist">
                        <li className="nav-item">
                            <a className="nav-link active" id="pills-participando-tab" data-toggle="pill" href="#pills-participando" role="tab" aria-controls="pills-participando" aria-selected="true">Eventos Participando</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" id="pills-creados-tab" data-toggle="pill" href="#pills-creados" role="tab" aria-controls="pills-creados" aria-selected="false">Eventos Creados</a>
                        </li>
                    </ul>
                    <div className="tab-content" id="pills-tabContent">
                        <div className="tab-pane fade show active" id="pills-participando" role="tabpanel" aria-labelledby="pills-participando-tab">
                            <div className="container">
                                <div className="row">
                                    <div className="col">
                                        <div className="card">
                                        <Link to="/detail" className="cardlink">
                                            <Card/>
                                        </Link>   
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="card">
                                        <Link to="/detail" className="cardlink">
                                            <Card/>
                                        </Link>   
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="card">
                                        <Link to="/detail" className="cardlink">
                                            <Card/>
                                        </Link>   
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="card">
                                        <Link to="/detail" className="cardlink">
                                            <Card/>
                                        </Link>   
                                        </div>
                                    </div>          
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="pills-creados" role="tabpanel" aria-labelledby="pills-creados-tab">
                            <div className="container">
                                <div className="row">
                                    <div className="col">
                                        <div className="card">
                                        <Link to="/detail" className="cardlink">
                                            <Card/>
                                        </Link>   
                                        </div>
                                    </div>
                                </div>
                            </div>            
                        </div>
                    </div>
                </div>
            </div>
        </div>
	);
};
