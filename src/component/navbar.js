import React from 'react';
import { Link } from "react-router-dom";

export const Navbar = () => {
    return (
            
        <nav className="navbar sticky-top navbar-light bg-light mb-3">
		    <Link to="/home">
			    <span className="navbar-brand mb-0 h1">JoinUs</span>
		    </Link>
		    <Link to="/home">
			    <span className="navbar-brand mb-0 h1">Inicio</span>
		    </Link>
		    <Link to="/profile">
			    <span className="navbar-brand mb-0 h1">Perfil</span>
		    </Link>
		    <Link to="/#">
			    <span className="navbar-brand mb-0 h1">Nuevo proyecto</span>
		    </Link>
		    <Link to="/#">
			    <span className="navbar-brand mb-0 h1">Cerrar sesión</span>
		    </Link>
	    </nav>
    )
}

