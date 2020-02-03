import React from 'react';
import '../../styles/navbar.css';
import { Link } from "react-router-dom";


export const Navbar = () => {
	return (
		<div className="container-fluid" >
			<div class="row " >
				<div class="col px-0" >
					<nav className="navbar sticky-top navbar-dark bg-primary" id="navbar">						
							<Link to="/home">
								<div class="">
								<img src="/assets/images/logo3.png" ></img>								
								</div>
							</Link>					
						<div class="row">
							<Link to="/home">
								<div class="col">
									<span class="navbar-brand mb-0 h1">Inicio</span>
								</div>
							</Link>
							<Link to="/profile">
								<div class="col">
									<span class="navbar-brand mb-0 h1">Perfil</span>
								</div>
							</Link>
							<Link to="/newregister">
								<div class="col">
									<span class="navbar-brand mb-0 h1">Crear evento</span>
								</div>
							</Link>
							<Link to="/#">
								<div class="col">
									<span class="navbar-brand mb-0 h1">Cerrar sesion</span>
								</div>
							</Link>
						</div>
					</nav>
				</div>
			</div>
		</div>
	)
}

