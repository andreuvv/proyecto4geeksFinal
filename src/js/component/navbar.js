import React from 'react';
import { Link } from "react-router-dom";


export const Navbar = () => {
	return (
		<div className="container-fluid">
			<div class="row">
				<div class="col px-0">
					<nav className="navbar sticky-top navbar-light bg-light mb-3" style={{ marginTop: 0 + "%" }}>
						<Link to="/home">
							<img id="logo" src="https://i.imgur.com/JiDOyLU.png" className="img-fluid rounded float-left"></img>
						</Link>					
							<Link to="/home">						
								<button type="button" class="btn btn-primary btn-sm  float-right" >Inicio</button>					
							</Link>
							<Link to="/profile">
								<button type="button" class="btn btn-success btn-sm  float-right">Perfil</button>
							</Link>
							<Link to="/newregister">
								<button type="button" class="btn btn-warning btn-sm float-right">Nuevo evento</button>
								</Link>
							<Link to="/#">
								<button type="button" class="btn btn-danger btn-sm  float-right">CERRAR SESIÓN</button>
							</Link>

					</nav>
				</div>
			</div>
		</div>
		
	)
}

