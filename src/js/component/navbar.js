import React from 'react';
import '../../styles/navbar.css';
import { Link } from "react-router-dom";


export const Navbar = () => {
	return (
		<div className="container-fluid" >
			<div className="row " >
				<div className="col px-0" >
					<nav className="navbar sticky-top navbar-dark bg-primary" id="navbar">						
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
							<Link to="/newregister">
								<div className="col">
									<span className="navbar-brand mb-0 h1">Crear evento</span>
								</div>
							</Link>
							<Link to="/#">
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

