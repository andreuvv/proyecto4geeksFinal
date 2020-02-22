import React, { useState, useEffect, useContext, Redirect, Route }  from 'react';
import '../../styles/navbar.css';
import { Link } from "react-router-dom";
import { NewRegister } from './newregister';
import { Context } from "../store/appContext";

export const Navbar = () => {
	const { store, actions } = useContext(Context);
	return (
		<div className="container-fluid" id="navbarid">
			<div className="row " >
				<div className="col px-0" >
					<nav className="navbar navbar-dark bg-primary" id="navbar">						
							<Link to="/home">
								<div className="">								
								</div>
							</Link>					
						<div className="row">
							<Link to="/home">
								<div className="col">
									<span className="navbar-brand mb-0 h1">Inicio</span>
								</div>
							</Link>
							<Link to="/profile">
								<div className="col">
									<span className="navbar-brand mb-0 h1">Perfil</span>
								</div>
							</Link>
							<NewRegister/>
							<Link onClick={()=>actions.sesion()} to="/">
							
								<div className="col">
									<span className="navbar-brand mb-0 h1">Cerrar sesion</span>
								</div>
							</Link>
						</div>
					</nav>
				</div>
			</div>
		</div>
	)
}

